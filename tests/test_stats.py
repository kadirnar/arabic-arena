import itertools
import math

import numpy as np
import pytest
from scipy import stats as sps

from sttarena import stats as st

MODELS = ("a", "b", "c")


def make_set(name="src", cond="clean", n=60, n_clusters=12, seed=0, models=MODELS, clustered=True):
    """Synthetic capped errors with a model x cluster interaction; cluster g = row index mod n_clusters."""
    rng = np.random.default_rng(seed)
    nref = rng.integers(3, 15, n).astype(float)
    g = np.arange(n) % n_clusters
    p = np.linspace(0.1, 0.4, len(models))[:, None] + rng.normal(0, 0.05, (len(models), n_clusters))[:, g]
    errors = rng.binomial(nref.astype(int), np.clip(p, 0.01, 0.99)).astype(float)
    clusters = [f"g{x}" for x in g] if clustered else None
    return st.SetData(name, cond, models, errors, nref, [f"{name}/{i}" for i in range(n)], clusters)


def rec(uid, n, sub, dele, ins, **extra):
    """A v2 utterance record (sttarena/scoring.py) with only the fields stats reads."""
    return {"id": uid, "scores": {"L2sp": {"n": n, "C": max(n - sub - dele, 0), "S": sub, "D": dele, "I": ins,
                                           "M": 0, "nc": 4 * n, "ce": 2 * (sub + dele + ins)}}, **extra}


# --- containers ------------------------------------------------------------------------------------------
def test_setdata_validates_inputs():
    ok = dict(name="s", cond="clean", models=("a",), errors=[[1.0, 0.0]], nref=[2.0, 3.0],
              source_ids=["x", "y"])
    assert st.SetData(**ok).source == "s"
    with pytest.raises(ValueError, match="capped"):
        st.SetData(**{**ok, "errors": [[3.0, 0.0]]})
    with pytest.raises(ValueError, match="shape"):
        st.SetData(**{**ok, "errors": [[1.0]]})
    with pytest.raises(ValueError, match="positive"):
        st.SetData(**{**ok, "nref": [0.0, 3.0]})
    with pytest.raises(ValueError, match="one label per utterance"):
        st.SetData(**ok, clusters=["c", None])


def test_records_to_setdata_aligns_caps_and_reads_labels():
    a = [rec("u1", 4, 1, 0, 0, cluster="p1", source_utt="u1"), rec("u2", 2, 0, 0, 5, cluster="p1"),
         rec("u3", 5, 0, 0, 0, cluster="p2"), rec("u4", 0, 0, 0, 3, cluster="p2")]  # u4: empty reference
    b = [rec("u3", 5, 2, 1, 0, cluster="p2"), rec("u1", 4, 0, 0, 0)]  # other order, no u2, a label missing
    sd = st.records_to_setdata("mgb2", "telephony", {"a": a, "b": b}, "L2sp")
    assert sd.models == ("a", "b") and sd.key == "mgb2/telephony" and sd.source == "mgb2"
    assert list(sd.source_ids) == ["u1", "u2", "u3"] and list(sd.clusters) == ["p1", "p1", "p2"]
    assert sd.strata is None
    np.testing.assert_array_equal(sd.nref, [4, 2, 5])
    np.testing.assert_array_equal(sd.errors, [[1, 2, 0], [0, np.nan, 3]])  # u2: 5 insertions capped at n = 2
    est = st.joint_cluster_bootstrap([sd], n_boot=10).estimates[sd.key]
    np.testing.assert_allclose(est, [3 / 11, 3 / 9])  # b is scored on the utterances it has
    chars = st.records_to_setdata("mgb2", "telephony", {"a": a}, "L2sp", unit="char")
    np.testing.assert_array_equal(chars.nref, [16, 8, 20])
    np.testing.assert_array_equal(chars.errors, [[2, 8, 0]])  # ce = 10 capped at nc = 8
    clusters, strata = {"u1": "x", "u2": "y", "u3": "y"}, {"u1": 1, "u2": 1, "u3": 2}
    mapped = st.records_to_setdata("mgb2", "clean", {"a": a}, "L2sp", clusters=clusters, strata=strata)
    assert list(mapped.clusters) == ["x", "y", "y"] and list(mapped.strata) == ["1", "1", "2"]


def test_records_to_setdata_rejects_inconsistent_records():
    with pytest.raises(ValueError, match="reference units"):
        st.records_to_setdata("s", "clean", {"a": [rec("u1", 4, 0, 0, 0)], "b": [rec("u1", 5, 0, 0, 0)]},
                              "L2sp")
    with pytest.raises(ValueError, match="some utterances"):
        st.records_to_setdata("s", "clean",
                              {"a": [rec("u1", 4, 0, 0, 0, cluster="p"), rec("u2", 4, 0, 0, 0)]}, "L2sp")
    with pytest.raises(ValueError, match="conflicting"):
        st.records_to_setdata("s", "clean", {"a": [rec("u1", 4, 0, 0, 0, cluster="p")],
                                             "b": [rec("u1", 4, 0, 0, 0, cluster="q")]}, "L2sp")


# --- joint cluster bootstrap -----------------------------------------------------------------------------
def test_bootstrap_is_deterministic_shaped_and_paired():
    x, y = make_set("x", seed=1), make_set("y", seed=2, n_clusters=30)
    b1 = st.joint_cluster_bootstrap([x, y], n_boot=300, seed=7)
    b2 = st.joint_cluster_bootstrap([y, x], n_boot=300, seed=7)
    b3 = st.joint_cluster_bootstrap([x, y], n_boot=300, seed=8)
    for k in ("x/clean", "y/clean"):
        assert b1.draws[k].shape == (300, 3) and b1.estimates[k].shape == (3,)
        np.testing.assert_array_equal(b1.draws[k], b2.draws[k])  # input order does not matter
        assert not np.allclose(b1.draws[k], b3.draws[k])
    np.testing.assert_allclose(b1.estimates["x/clean"], x.errors.sum(1) / x.nref.sum())  # corpus WER
    # a source's draws depend neither on the other sources nor on which models are present (paired)
    alone = st.joint_cluster_bootstrap([x], n_boot=300, seed=7)
    np.testing.assert_allclose(alone.draws["x/clean"], b1.draws["x/clean"], rtol=1e-12)
    two = st.SetData("x", "clean", ("c", "a"), x.errors[[2, 0]], x.nref, x.source_ids, x.clusters)
    sub = st.joint_cluster_bootstrap([two], n_boot=300, seed=7)
    np.testing.assert_allclose(sub.draws["x/clean"], b1.draws["x/clean"][:, [2, 0]], rtol=1e-12)


def test_degraded_condition_shares_cluster_weights_with_its_source():
    clean = make_set("mgb2", n=80, n_clusters=16, seed=3)
    rows = slice(0, 40)  # a degraded condition reuses the first rows of its clean set

    def subset(name, cond):
        return st.SetData(name, cond, clean.models, clean.errors[:, rows], clean.nref[rows],
                          clean.source_ids[rows], clean.clusters[rows])

    tel, clean40, other = subset("mgb2", "telephony"), subset("mgb2", "clean40"), subset("other", "telephony")
    boot = st.joint_cluster_bootstrap([clean, tel, clean40, other], n_boot=500, seed=0)
    # identical rows in two conditions of one source get identical cluster weights, hence identical draws ...
    np.testing.assert_array_equal(boot.draws["mgb2/telephony"], boot.draws["mgb2/clean40"])
    # ... while the same rows under another source set are resampled independently
    assert not np.allclose(boot.draws["mgb2/telephony"], boot.draws["other/telephony"])
    r = np.corrcoef(boot.draws["mgb2/clean"][:, 0], boot.draws["mgb2/telephony"][:, 0])[0, 1]
    assert r > 0.3  # the shared draw carries the clean / degraded correlation
    assert boot.sources["mgb2/telephony"] == "mgb2" and boot.n_units["mgb2/telephony"] == 16


def test_conditions_of_a_source_must_agree_on_labels():
    clean = make_set("mgb2", n=20, n_clusters=4)
    bare = st.SetData("mgb2", "telephony", clean.models, clean.errors, clean.nref, clean.source_ids)
    with pytest.raises(ValueError, match="every condition"):
        st.joint_cluster_bootstrap([clean, bare])
    moved = st.SetData("mgb2", "telephony", clean.models, clean.errors, clean.nref, clean.source_ids,
                       np.roll(clean.clusters, 1))
    with pytest.raises(ValueError, match="different cluster labels"):
        st.joint_cluster_bootstrap([clean, moved])


def test_iid_fallback_and_flags():
    iid = make_set("sada", n=50, clustered=False)
    few = make_set("algerian_cs", n=40, n_clusters=8)
    many = make_set("cv18_ar", n=120, n_clusters=60)
    boot = st.joint_cluster_bootstrap([iid, few, many], n_boot=200)
    assert boot.n_units["sada/clean"] == 50 and not boot.clustered["sada/clean"]
    assert boot.flags() == {"sada/clean": "iid: no cluster key", "algerian_cs/clean": "few clusters: G=8"}


def test_stratified_resampling_keeps_stratum_sizes():
    # 9 equal clusters, 3 in stratum A (always all wrong) and 6 in B (always right): a stratified replicate
    # draws exactly 3 clusters from A, so the WER never moves from 1/3.
    g = np.repeat(np.arange(9), 4)
    nref = np.full(g.size, 5.0)
    strata = np.where(g < 3, "A", "B")
    errors = np.where(strata == "A", 5.0, 0.0)[None]
    ids = [str(i) for i in range(g.size)]
    for clusters in (g, None):  # cluster bootstrap, and iid within strata (Casablanca countries)
        sd = st.SetData("casablanca", "clean", ("m",), errors, nref, ids, clusters, strata)
        boot = st.joint_cluster_bootstrap([sd], n_boot=200)
        assert boot.stratified[sd.key]
        np.testing.assert_allclose(boot.draws[sd.key], 1 / 3)
    # strata that cut across clusters (utterance types inside a video) are not used
    alternating = np.where(np.arange(g.size) % 2, "A", "B")
    crossed = st.SetData("alg", "clean", ("m",), errors, nref, ids, g, alternating)
    boot = st.joint_cluster_bootstrap([crossed], n_boot=200)
    assert not boot.stratified["alg/clean"] and boot.draws["alg/clean"].std() > 0.05


# --- aggregation and intervals ---------------------------------------------------------------------------
def test_geometric_and_arithmetic_aggregation_by_hand():
    tracks = {"clean": ["a/clean", "b/clean"], "noisy": ["a/noisy"]}
    weights = {"clean": 3.0, "noisy": 2.0}  # normalized to .6 / .4
    est = {"a/clean": [0.1, 0.2], "b/clean": [0.4, 0.2], "a/noisy": [0.2, 0.001]}
    assert st.set_weights(tracks, weights) == pytest.approx({"a/clean": 0.3, "b/clean": 0.3, "a/noisy": 0.4})
    arith, tr = st.aggregate(est, tracks, weights, geometric=False)
    np.testing.assert_allclose(tr["clean"], [0.25, 0.2])
    np.testing.assert_allclose(arith, [0.6 * 0.25 + 0.4 * 0.2, 0.6 * 0.2 + 0.4 * 0.001])
    geo, tr = st.aggregate(est, tracks, weights)
    np.testing.assert_allclose(tr["clean"], [0.2, 0.2])  # sqrt(.1 * .4), sqrt(.2 * .2)
    np.testing.assert_allclose(tr["noisy"], [0.2, 0.005])  # floored at 0.5 %
    np.testing.assert_allclose(geo, [0.2, 0.2**0.6 * 0.005**0.4])
    # draws: the same formula replicate by replicate; a model without a set gets no score
    draws = {k: np.array([v, v]) for k, v in est.items()}
    draws["a/noisy"] = np.array([[0.2, np.nan], [0.2, np.nan]])
    geo_d, _ = st.aggregate(draws, tracks, weights)
    assert geo_d.shape == (2, 2) and np.isnan(geo_d[:, 1]).all()
    np.testing.assert_allclose(geo_d[:, 0], 0.2)
    assert st.set_weights({"clean": ["x"], "hallucination": ["h"]}, {"clean": 0.35}) == {"x": 1.0}


def test_percentile_ci_ignores_nan_replicates():
    x = np.column_stack([np.r_[np.arange(1, 101.0), np.nan], np.full(101, np.nan)])
    ci = st.percentile_ci(x)
    np.testing.assert_allclose(ci[:, 0], np.percentile(np.arange(1, 101.0), [2.5, 97.5]))
    assert np.isnan(ci[:, 1]).all()


def test_cluster_t_ci_and_mde_standard_errors_by_hand():
    rng = np.random.default_rng(6)
    n = rng.integers(5, 15, 50).astype(float)
    g = np.arange(50) % 8
    e = rng.binomial(n.astype(int), 0.3).astype(float)
    r = e.sum() / n.sum()
    u = e - r * n
    se_cl = math.sqrt(8 / 7 * (np.bincount(g, weights=u) ** 2).sum()) / n.sum()
    se_iid = math.sqrt(50 / 49 * (u**2).sum()) / n.sum()
    half = sps.t.ppf(0.975, 7) * se_cl
    assert st.cluster_t_ci(e, n, g) == pytest.approx((r - half, r + half))
    m = st.mde(e, n, g)
    assert (m.se_cluster, m.se_iid, m.n_clusters) == pytest.approx((se_cl, se_iid, 8))
    assert m.mde_cluster == pytest.approx(2.8016 * se_cl, rel=1e-4)


# --- ranks -----------------------------------------------------------------------------------------------
def test_rank_sets_contain_point_ranks_and_are_wider_than_naive_ranges():
    rng = np.random.default_rng(0)
    est = np.array([0.100, 0.104, 0.108, 0.150, 0.200, 0.203, 0.300])
    cov = 0.006**2 * (0.8 + 0.2 * np.eye(est.size))  # paired draws: strongly correlated across models
    draws = rng.multivariate_normal(est, cov, size=4000)
    lo, hi = st.rank_sets(est, draws)
    point = sps.rankdata(est, method="min")
    assert (lo <= point).all() and (point <= hi).all()
    nlo, nhi = st.naive_rank_ranges(draws)
    assert ((hi - lo) >= (nhi - nlo)).all()
    mlo, mhi = st.rank_sets(est, draws, simultaneous=False)
    assert (lo <= mlo).all() and (mhi <= hi).all()  # joint sets contain the marginal ones
    assert lo[3] == hi[3] == 4 and lo[6] == hi[6] == 7  # well separated models get a single rank
    assert hi[0] == 3 and lo[2] == 1  # the three leaders are tied


# --- paired tests ----------------------------------------------------------------------------------------
def test_sign_flip_identical_systems_and_consistent_difference():
    rng = np.random.default_rng(1)
    n = rng.integers(5, 20, 400).astype(float)
    g = rng.integers(0, 40, 400)
    ea = rng.binomial(n.astype(int), 0.3).astype(float)
    same = st.sign_flip_test(ea - ea, n, g)
    assert same.p_value == 1.0 and same.delta == 0.0
    eb = np.minimum(ea + rng.binomial(n.astype(int), 0.1), n)  # B makes more errors in every cluster
    res = st.sign_flip_test(ea - eb, n, g, n_perm=5000)
    assert res.method == "sign-flip-mc" and res.n_units == 40 and res.delta < 0
    assert res.p_value == pytest.approx(1 / 5001)


def test_sign_flip_exact_enumeration_matches_brute_force():
    D = np.array([3.0, -1.0, 2.0, 0.5, 1.0, -2.5])  # one utterance per cluster
    n = np.array([10.0, 12, 9, 11, 10, 8])
    res = st.sign_flip_test(D, n, np.arange(6))
    T = D.sum() / n.sum()
    hits = [abs(np.dot(s, D)) / n.sum() >= abs(T) - 1e-12 for s in itertools.product([1, -1], repeat=6)]
    assert res.method == "sign-flip-exact" and res.p_value == pytest.approx(np.mean(hits))
    assert res.delta == pytest.approx(T)
    assert st.sign_flip_test(np.ones(6), n, np.arange(6)).p_value == pytest.approx(2 / 2**6)  # smallest p


def test_sign_flip_monte_carlo_agrees_with_exact():
    D = np.random.default_rng(2).normal(0.3, 1.0, 12)
    n = np.full(12, 10.0)
    exact = st.sign_flip_test(D, n, np.arange(12), n_perm=4096)
    mc = st.sign_flip_test(D, n, np.arange(12), n_perm=4000, seed=3)
    assert exact.method == "sign-flip-exact" and mc.method == "sign-flip-mc"
    assert abs(exact.p_value - mc.p_value) < 0.03


def test_arena_sign_flip_flips_clusters_jointly_across_conditions():
    clean = make_set("mgb2", n=30, n_clusters=6, seed=4, models=("a", "b"))
    rows = (clean.models, clean.errors, clean.nref, clean.source_ids, clean.clusters)
    tel, alien = st.SetData("mgb2", "telephony", *rows), st.SetData("other", "telephony", *rows)
    w = {"clean": 0.5, "telephony": 0.5}
    single = st.sign_flip_test(*clean.diff("a", "b"))
    tracks = {"clean": ["mgb2/clean"], "telephony": ["mgb2/telephony"]}
    joint = st.arena_sign_flip_test([clean, tel], "a", "b", tracks, w, geometric=False)
    # one sign per cluster shared by both conditions: the 2^6 patterns of the single set, hence its p-value
    assert joint.method == "sign-flip-exact" and joint.n_units == 6
    assert joint.p_value == pytest.approx(single.p_value) and joint.delta == pytest.approx(single.delta)
    # flipping the conditions independently (two sources) is a different test with 2^12 patterns
    indep = st.arena_sign_flip_test([clean, alien], "a", "b", {"clean": ["mgb2/clean"],
                                                               "telephony": ["other/telephony"]}, w,
                                    geometric=False)
    assert indep.n_units == 12 and indep.p_value != pytest.approx(single.p_value)
    boot = st.joint_cluster_bootstrap([clean, tel], n_boot=10)
    arena, _ = st.aggregate(boot.estimates, tracks, w)
    geo = st.arena_sign_flip_test([clean, tel], "a", "b", tracks, w)
    assert geo.delta == pytest.approx(arena[0] - arena[1])
    same = st.arena_sign_flip_test([clean, tel], "a", "a", tracks, w)
    assert same.p_value == 1.0 and same.delta == 0.0


def test_matched_pairs_and_wilcoxon_by_hand():
    d = np.array([1.0, 2.0, 0.0, 1.0, 1.0])
    n = np.full(5, 10.0)
    mp = st.matched_pairs_test(d, n)
    z = 1.0 / (math.sqrt(0.5) / math.sqrt(5))  # mean 1, s = sqrt(.5)
    assert mp.statistic == pytest.approx(z) and mp.p_value == pytest.approx(2 * sps.norm.sf(z))
    assert mp.delta == pytest.approx(5 / 50) and (mp.n_units, mp.method) == (5, "mapsswe")
    assert st.matched_pairs_test(np.zeros(5), n).p_value == 1.0
    wx = st.wilcoxon_clusters(d, n, [0, 0, 1, 2, 2])  # per-cluster differences .15, 0, .1; zero dropped
    assert wx.p_value == pytest.approx(sps.wilcoxon([0.15, 0.1]).pvalue) and wx.n_units == 3
    assert st.wilcoxon_clusters(np.zeros(5), n, [0, 0, 1, 2, 2]).p_value == 1.0


# --- multiplicity ----------------------------------------------------------------------------------------
def test_holm_and_benjamini_hochberg_known_values():
    p = np.array([0.5, 0.001, 0.02, 0.3])
    np.testing.assert_allclose(st.holm(p), [0.6, 0.004, 0.06, 0.6])
    np.testing.assert_allclose(st.benjamini_hochberg(p), [0.5, 0.004, 0.04, 0.4])
    p = np.array([0.01, 0.02, 0.03, 0.04, 0.05])
    np.testing.assert_allclose(st.holm(p), [0.05, 0.08, 0.09, 0.09, 0.09])
    np.testing.assert_allclose(st.benjamini_hochberg(p), [0.05] * 5)
    m = np.array([[np.nan, 0.01], [0.04, 0.2]])  # NaN ignored, shape kept
    np.testing.assert_allclose(st.holm(m), [[np.nan, 0.03], [0.08, 0.2]])
    q = np.random.default_rng(9).uniform(size=20) ** 3
    np.testing.assert_allclose(st.benjamini_hochberg(q), sps.false_discovery_control(q, method="bh"))


# --- power -----------------------------------------------------------------------------------------------
def test_mde_formulas_match_monte_carlo():
    # d_i = (#words only A gets wrong) - (#words only B gets wrong): each word is discordant with
    # probability q, tilted by a system x cluster interaction delta_g ~ N(0, tau). Then
    # Var(delta_hat) = q / sum(n) + tau^2 sum_g n_g^2 / sum(n)^2, the planning formula with phi = 1.
    rng = np.random.default_rng(3)
    N, G, R, q, tau = 600, 40, 1500, 0.3, 0.05
    n = rng.poisson(9, N) + 1.0
    g = rng.integers(0, G, N)
    shift = rng.normal(0, tau, (R, G))[:, g]
    k_a = rng.binomial(n.astype(int), q / 2 + shift / 2)
    k_b = rng.binomial(n.astype(int) - k_a, (q / 2 - shift / 2) / (1 - q / 2 - shift / 2))
    d = (k_a - k_b).astype(float)
    sd_mc = (d.sum(1) / n.sum()).std(ddof=1)
    g_eff = st.effective_clusters(np.bincount(g, weights=n))
    se_plan, mde_plan = st.mde_planning(q, 1.0, n.sum(), tau=tau, g_eff=g_eff)
    assert se_plan == pytest.approx(sd_mc, rel=0.08) and mde_plan == pytest.approx(2.80 * se_plan, rel=1e-3)
    est = [st.mde(d[r], n, g) for r in range(200)]
    assert math.sqrt(np.mean([m.se_cluster**2 for m in est])) == pytest.approx(sd_mc, rel=0.12)
    se_iid = math.sqrt(np.mean([m.se_iid**2 for m in est]))
    assert se_iid == pytest.approx(math.sqrt(q / n.sum()), rel=0.08) and se_iid < 0.8 * sd_mc  # misses tau


@pytest.mark.parametrize("q, phi, n_words, tau, g_eff, se_pts, mde_pts", [
    (0.06, 1.5, 10_000, 0.0, None, 0.30, 0.84),  # two checkpoints of one model
    (0.15, 2.0, 10_000, 0.0, None, 0.55, 1.53),  # two model families
    (0.15, 2.0, 10_000, 0.03, 30, 0.78, 2.17),  # 30 episodes, tau = 3 points
    (0.15, 2.0, 10_000, 0.03, 15, 0.94, 2.63),  # MGB-2-like
    (0.15, 2.0, 3_000, 0.0, None, 1.00, 2.80),  # a 300-utterance degraded set
])
def test_mde_planning_reproduces_the_worked_example(q, phi, n_words, tau, g_eff, se_pts, mde_pts):
    se, m = st.mde_planning(q, phi, n_words, tau=tau, g_eff=g_eff)
    assert se * 100 == pytest.approx(se_pts, rel=0.015) and m * 100 == pytest.approx(mde_pts, rel=0.015)


# --- what the aggregation does in effect -----------------------------------------------------------------
def test_effective_weights_shares_and_scale_invariance():
    rng = np.random.default_rng(5)
    tracks = {"clean": ["x/clean", "y/clean"], "callcenter": ["x/callcenter"]}
    w = {"clean": 0.6, "callcenter": 0.4}
    est = {"x/clean": rng.uniform(0.05, 0.2, 8), "y/clean": rng.uniform(0.1, 0.4, 8),
           "x/callcenter": rng.uniform(0.3, 0.9, 8)}
    for geo in (False, True):
        ew = st.effective_weights(est, tracks, w, geometric=geo)
        assert sum(ew["sets"].values()) == pytest.approx(1)
        assert ew["tracks"]["clean"] == pytest.approx(ew["sets"]["x/clean"] + ew["sets"]["y/clean"])
        assert ew["sources"]["x"] == pytest.approx(ew["sets"]["x/clean"] + ew["sets"]["x/callcenter"])
        with_gap = {k: np.r_[v, np.nan if k == "y/clean" else 0.5] for k, v in est.items()}  # a 9th model
        assert st.effective_weights(with_gap, tracks, w, geometric=geo)["sets"] == pytest.approx(ew["sets"])
    doubled = {**est, "x/callcenter": 2 * est["x/callcenter"]}
    geo1, geo2 = (st.effective_weights(e, tracks, w)["sets"] for e in (est, doubled))
    assert geo1 == pytest.approx(geo2)  # geometric: scale-free per set
    ar1, ar2 = (st.effective_weights(e, tracks, w, geometric=False)["sets"] for e in (est, doubled))
    assert ar2["x/callcenter"] > ar1["x/callcenter"]  # arithmetic: a higher-WER set gains influence


def test_leave_one_set_out_by_hand():
    tracks = {"clean": ["a/clean", "b/clean"], "noisy": ["a/noisy"]}
    w = {"clean": 0.5, "noisy": 0.5}
    est = {"a/clean": [0.1, 0.2, 0.5], "b/clean": [0.3, 0.1, 0.5], "a/noisy": [0.2, 0.2, 0.5]}
    # Full arithmetic Arena: .200, .175, .500 -> ranks 2, 1, 3. Without b/clean: .15, .20, so models 0 and 1
    # swap. Without a/clean: .25, .15, no change. Without a/noisy the track drops out: .20, .15, no change.
    assert st.leave_one_set_out(est, tracks, w, geometric=False) == {
        "a/clean": {"moved": 0, "max_shift": 0}, "b/clean": {"moved": 2, "max_shift": 1},
        "a/noisy": {"moved": 0, "max_shift": 0}}


def test_wilson():
    assert st.wilson(3, 0) is None
    assert st.wilson(0, 10) == [0.0, pytest.approx(0.27754, abs=1e-5)]
    lo, hi = st.wilson(5, 10)
    assert lo == pytest.approx(0.23659, abs=1e-5) and hi == pytest.approx(1 - lo, abs=1e-5)

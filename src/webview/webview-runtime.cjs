// Auto-generated scoped Svelte 5 webview factory from Hermes Studio v0.6.0
export function createHermesWebviewInstance(__env) {
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t, n) => () => {
    if (n) throw n[0];
    try {
      return (e && (t = e((e = 0))), t);
    } catch (e) {
      throw ((n = [e]), e);
    }
  },
  s = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  c = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  l = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    c(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  u = o(() => {}),
  d = o(() => {
    u();
  });
function f(e) {
  return e();
}
function p(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function m() {
  var e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
var h,
  g,
  _,
  v,
  y,
  b,
  x,
  S,
  ee,
  te,
  ne,
  C,
  w = o(() => {
    ((h = Array.isArray),
      (g = Array.prototype.indexOf),
      (_ = Array.prototype.includes),
      (v = Array.from),
      (y = Object.defineProperty),
      (b = Object.getOwnPropertyDescriptor),
      (x = Object.getOwnPropertyDescriptors),
      (S = Object.prototype),
      (ee = Array.prototype),
      (te = Object.getPrototypeOf),
      (ne = Object.isExtensible),
      (C = () => {}));
  }),
  re,
  T,
  E,
  ie,
  ae,
  oe,
  D,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  O = o(() => {
    ((re = 1 << 24),
      (T = 1024),
      (E = 2048),
      (ie = 4096),
      (ae = 8192),
      (oe = 16384),
      (D = 32768),
      (se = 1 << 25),
      (ce = 65536),
      (le = 1 << 19),
      (ue = 1 << 20),
      (de = 1 << 25),
      (fe = 1 << 21),
      (pe = 1 << 22),
      (me = 1 << 23),
      (he = Symbol(`$state`)),
      (ge = Symbol(`component`)),
      (_e = Symbol(`legacy props`)),
      (ve = Symbol(``)),
      (ye = Symbol(`attributes`)),
      (be = Symbol(`class`)),
      (xe = Symbol(`style`)),
      (Se = Symbol(`text`)),
      (Ce = Symbol(`form reset`)),
      (we = new (class extends Error {
        name = `StaleReactionError`;
        message =
          "The reaction that called `getAbortSignal()` was re-run or destroyed";
      })()),
      (Te =
        !!globalThis.document?.contentType &&
        globalThis.document.contentType.includes(`xml`)));
  }),
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je = o(() => {
    ((Ee = {}),
      (De = Symbol(`uninitialized`)),
      (Oe = `http://www.w3.org/1999/xhtml`),
      (ke = `http://www.w3.org/2000/svg`),
      (Ae = `http://www.w3.org/1998/Math/MathML`));
  });
function Me() {
  console.warn(`https://svelte.dev/e/derived_inert`);
}
function Ne(e) {
  console.warn(`https://svelte.dev/e/hydration_mismatch`);
}
function Pe() {
  console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
}
var Fe = o(() => {
  d();
});
function Ie(e) {
  A = e;
}
function Le(e) {
  if (e === null) throw (Ne(), Ee);
  return (j = e);
}
function Re() {
  return Le(Un(j));
}
function k(e) {
  if (A) {
    if (Un(j) !== null) throw (Ne(), Ee);
    j = e;
  }
}
function ze(e = 1) {
  if (A) {
    for (var t = e, n = j; t--;) n = Un(n);
    j = n;
  }
}
function Be(e = !0) {
  for (var t = 0, n = j; ;) {
    if (n.nodeType === 8) {
      var r = n.data;
      if (r === `]`) {
        if (t === 0) return n;
        --t;
      } else
        (r === `[` ||
          r === `[!` ||
          (r[0] === `[` && !isNaN(Number(r.slice(1))))) &&
          (t += 1);
    }
    var i = Un(n);
    (e && n.remove(), (n = i));
  }
}
function Ve(e) {
  if (!e || e.nodeType !== 8) throw (Ne(), Ee);
  return e.data;
}
var A,
  j,
  M = o(() => {
    (O(), je(), Fe(), $n(), (A = !1));
  });
function He(e) {
  return e === this.v;
}
function Ue(e, t) {
  return e == e
    ? e !== t || (typeof e == `object` && !!e) || typeof e == `function`
    : t == t;
}
function We(e) {
  return !Ue(e, this.v);
}
var Ge = o(() => {}),
  Ke = o(() => {
    d();
  });
function qe() {
  throw Error(`https://svelte.dev/e/async_derived_orphan`);
}
function Je(e, t, n) {
  throw Error(`https://svelte.dev/e/each_key_duplicate`);
}
function Ye(e) {
  throw Error(`https://svelte.dev/e/effect_in_teardown`);
}
function Xe() {
  throw Error(`https://svelte.dev/e/effect_in_unowned_derived`);
}
function Ze(e) {
  throw Error(`https://svelte.dev/e/effect_orphan`);
}
function Qe() {
  throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
}
function $e(e) {
  throw Error(`https://svelte.dev/e/props_invalid_value`);
}
function et() {
  throw Error(`https://svelte.dev/e/state_descriptors_fixed`);
}
function tt() {
  throw Error(`https://svelte.dev/e/state_prototype_fixed`);
}
function nt() {
  throw Error(`https://svelte.dev/e/state_unsafe_mutation`);
}
function rt() {
  throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
}
var it = o(() => {
  (d(), Ke());
});
function at() {
  st = !0;
}
var ot,
  st,
  ct = o(() => {
    ((ot = !1), (st = !1));
  }),
  lt = o(() => {
    w();
  }),
  ut = o(() => {
    (lt(), O(), V(), U());
  }),
  dt = o(() => {
    (d(), w(), Ke());
  });
function ft(e) {
  _t = e;
}
function pt(e, t = !1, n) {
  _t = {
    p: _t,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: ti,
    l: st && !t ? { s: null, u: null, $: [] } : null,
  };
}
function mt(e) {
  var t = _t,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) lr(r);
  }
  return (e !== void 0 && (t.x = e), (t.i = !0), (_t = t.p), ht(e));
}
function ht(e = {}) {
  return (y(e, ge, { value: !0 }), e);
}
function gt() {
  return !st || (_t !== null && _t.l === null);
}
var _t,
  vt = o(() => {
    (d(), it(), U(), V(), ct(), O(), w(), (_t = null));
  });
function yt() {
  var e = St;
  ((St = []), p(e));
}
function bt(e) {
  if (St.length === 0 && !hn) {
    var t = St;
    queueMicrotask(() => {
      t === St && yt();
    });
  }
  St.push(e);
}
function xt() {
  for (; St.length > 0;) yt();
}
var St,
  Ct = o(() => {
    (w(), Cn(), (St = []));
  });
function wt(e, t) {
  e.f = (e.f & Et) | t;
}
function Tt(e) {
  e.f & 512 || e.deps === null ? wt(e, T) : wt(e, ie);
}
var Et,
  Dt = o(() => {
    (O(), (Et = ~(E | ie | T)));
  });
function Ot(e, t, n) {
  (e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), wt(e, T));
}
var kt = o(() => {
    (O(), Dt());
  }),
  At = o(() => {
    (O(), lt(), U());
  });
function jt(e) {
  A && Hn(e) !== null && Wn(e);
}
function Mt() {
  Nt ||
    ((Nt = !0),
    document.addEventListener(
      `reset`,
      (e) => {
        Promise.resolve().then(() => {
          if (!e.defaultPrevented) for (let t of e.target.elements) t[Ce]?.();
        });
      },
      { capture: !0 },
    ));
}
var Nt,
  Pt = o(() => {
    (M(), $n(), Ct(), O(), (Nt = !1));
  });
function Ft(e) {
  var t = $r,
    n = ti;
  (Mr(null), Nr(null));
  try {
    return e();
  } finally {
    (Mr(t), Nr(n));
  }
}
function It(e, t, n, r = n) {
  e.addEventListener(t, () => Ft(n));
  let i = e[Ce];
  (i
    ? (e[Ce] = () => {
        (i(), r(!0));
      })
    : (e[Ce] = () => r(!0)),
    Mt());
}
var Lt = o(() => {
  (V(), U(), O(), Pt());
});
function Rt(e, t, n, r) {
  let i = gt() ? Wt : Kt;
  var a = e.filter((e) => !e.settled),
    o = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(o);
    return;
  }
  var s = ti,
    c = zt(),
    l =
      a.length === 1
        ? a[0].promise
        : a.length > 1
          ? Promise.all(a.map((e) => e.promise))
          : null;
  function u(e) {
    if (!(s.f & 16384)) {
      c();
      try {
        r([...o, ...e]);
      } catch (e) {
        tr(e, s);
      }
      Bt();
    }
  }
  var d = Vt();
  if (n.length === 0) {
    l.then(() => u([])).finally(d);
    return;
  }
  function f() {
    Promise.all(n.map((e) => Gt(e)))
      .then(u)
      .catch((e) => tr(e, s))
      .finally(d);
  }
  l
    ? l.then(() => {
        (c(), f(), Bt());
      })
    : f();
}
function zt() {
  var e = ti,
    t = $r,
    n = _t,
    r = dn;
  return function (i = !0) {
    (Nr(e), Mr(t), ft(n), i && !(e.f & 16384) && (r?.activate(), r?.apply()));
  };
}
function Bt(e = !0) {
  ((Ht = !1), Nr(null), Mr(null), ft(null), e && dn?.deactivate());
}
function Vt() {
  var e = ti,
    t = e.b,
    n = dn,
    r = !!t?.is_rendered();
  return (
    t?.update_pending_count(1, n),
    n.increment(r, e),
    () => {
      (t?.update_pending_count(-1, n), n.decrement(r, e));
    }
  );
}
var Ht,
  Ut = o(() => {
    (O(), d(), vt(), nr(), U(), Cn(), $t(), V());
  });
function Wt(e) {
  var t = 2 | E;
  return (
    ti !== null && (ti.f |= le),
    {
      ctx: _t,
      deps: null,
      effects: null,
      equals: He,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: De,
      wv: 0,
      parent: ti,
      ac: null,
    }
  );
}
function Gt(e, t, n) {
  let r = ti;
  r === null && qe();
  var i = void 0,
    a = wn(De),
    o = !$r,
    s = new Set();
  return (
    pr(() => {
      var t = ti,
        n = m();
      i = n.promise;
      try {
        Promise.resolve(e())
          .then(n.resolve, (e) => {
            e !== we && n.reject(e);
          })
          .finally(Bt);
      } catch (e) {
        (n.reject(e), Bt());
      }
      var c = dn;
      if (o) {
        if (t.f & 32768) var l = Vt();
        if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(Qt);
        else for (let e of s.values()) e.reject(Qt);
        (s.add(n), c.async_deriveds.set(t, n));
      }
      let u = (e, t = void 0) => {
        (l?.(),
          s.delete(n),
          t !== Qt &&
            (c.activate(),
            t
              ? ((a.f |= me), En(a, t))
              : (a.f & 8388608 && (a.f ^= me), En(a, e)),
            c.deactivate()));
      };
      n.promise.then(u, (e) => u(null, e || `unknown`));
    }),
    sr(() => {
      for (let e of s) e.reject(Qt);
    }),
    new Promise((e) => {
      function t(n) {
        function r() {
          n === i ? e(a) : t(i);
        }
        n.then(r, r);
      }
      t(i);
    })
  );
}
function N(e) {
  let t = Wt(e);
  return (ot || Pr(t), t);
}
function Kt(e) {
  let t = Wt(e);
  return ((t.equals = We), t);
}
function qt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) xr(t[n]);
  }
}
function Jt(e) {
  var t,
    n = ti,
    r = e.parent;
  if (!Qr && r !== null && e.v !== De && r.f & 24576) return (Me(), e.v);
  Nr(r);
  try {
    (qt(e), (t = Br(e)));
  } finally {
    Nr(n);
  }
  return t;
}
function Yt(e) {
  var t = Jt(e);
  if (
    !e.equals(t) &&
    ((e.wv = Lr()),
    (!dn?.is_fork || e.deps === null) &&
      (dn === null ? (e.v = t) : (dn.capture(e, t, !0), fn?.capture(e, t, !0)),
      e.deps === null))
  ) {
    wt(e, T);
    return;
  }
  Qr || (pn === null ? Tt(e) : (or() || dn?.is_fork) && pn.set(e, t));
}
function Xt(e) {
  if (e.effects !== null)
    for (let t of e.effects)
      (t.teardown || t.ac) &&
        (t.teardown?.(),
        t.ac !== null &&
          Ft(() => {
            (t.ac.abort(we), (t.ac = null));
          }),
        t.fn !== null && (t.teardown = C),
        Ur(t, 0),
        yr(t));
}
function Zt(e) {
  if (e.effects !== null)
    for (let t of e.effects) t.teardown && t.fn !== null && Wr(t);
}
var Qt,
  $t = o(() => {
    (d(),
      O(),
      U(),
      Lt(),
      Ge(),
      it(),
      Fe(),
      V(),
      In(),
      dt(),
      ct(),
      vt(),
      je(),
      Cn(),
      Ut(),
      w(),
      Dt(),
      (Qt = Symbol(`obsolete`)));
  });
function en(e) {
  var t = hn;
  hn = !0;
  try {
    var n;
    for (e && (dn !== null && !dn.is_fork && dn.flush(), (n = e())); ;) {
      if ((xt(), dn === null)) return n;
      dn.flush();
    }
  } finally {
    hn = t;
  }
}
function tn() {
  try {
    Qe();
  } catch (e) {
    tr(e, mn);
  }
}
function nn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if (
        !(r.f & 24576) &&
        Rr(r) &&
        ((Sn = new Set()),
        Wr(r),
        r.deps === null &&
          r.first === null &&
          r.nodes === null &&
          r.teardown === null &&
          r.ac === null &&
          Cr(r),
        Sn?.size > 0)
      ) {
        Mn.clear();
        for (let e of Sn) {
          if (e.f & 24576) continue;
          let t = [e],
            n = e.parent;
          for (; n !== null;)
            (Sn.has(n) && (Sn.delete(n), t.push(n)), (n = n.parent));
          for (let e = t.length - 1; e >= 0; e--) {
            let n = t[e];
            n.f & 24576 || Wr(n);
          }
        }
        Sn.clear();
      }
    }
    Sn = null;
  }
}
function rn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (let i of e.reactions) {
      let e = i.f;
      e & 2
        ? rn(i, t, n, r)
        : e & 4194320 && !(e & 2048) && an(i, t, r) && (wt(i, E), on(i));
    }
}
function an(e, t, n) {
  let r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (let r of e.deps) {
      if (_.call(t, r)) return !0;
      if (r.f & 2 && an(r, t, n)) return (n.set(r, !0), !0);
    }
  return (n.set(e, !1), !1);
}
function on(e) {
  dn.schedule(e);
}
function sn(e, t) {
  if (!(e.f & 32 && e.f & 1024)) {
    (e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), wt(e, T));
    for (var n = e.first; n !== null;) (sn(n, t), (n = n.next));
  }
}
function cn(e) {
  wt(e, T);
  for (var t = e.first; t !== null;) (cn(t), (t = t.next));
}
var ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn = o(() => {
    (O(),
      ct(),
      w(),
      U(),
      it(),
      Ct(),
      d(),
      nr(),
      In(),
      V(),
      kt(),
      je(),
      Dt(),
      dt(),
      At(),
      $t(),
      (ln = null),
      (un = null),
      (dn = null),
      (fn = null),
      (pn = null),
      (mn = null),
      (hn = !1),
      (gn = !1),
      (_n = null),
      (vn = null),
      (yn = 0),
      (bn = 1),
      (xn = class e {
        id = bn++;
        #e = !1;
        linked = !0;
        #t = null;
        #n = null;
        async_deriveds = new Map();
        current = new Map();
        previous = new Map();
        #r = new Set();
        #i = new Set();
        #a = 0;
        #o = new Map();
        #s = null;
        #c = [];
        #l = [];
        #u = new Set();
        #d = new Set();
        #f = new Map();
        #p = new Set();
        is_fork = !1;
        #m = !1;
        constructor() {
          (un === null ? (ln = un = this) : ((un.#n = this), (this.#t = un)),
            (un = this));
        }
        #h() {
          if (this.is_fork) return !0;
          for (let n of this.#o.keys()) {
            for (var e = n, t = !1; e.parent !== null;) {
              if (this.#f.has(e)) {
                t = !0;
                break;
              }
              e = e.parent;
            }
            if (!t) return !0;
          }
          return !1;
        }
        skip_effect(e) {
          (this.#f.has(e) || this.#f.set(e, { d: [], m: [] }),
            this.#p.delete(e));
        }
        unskip_effect(e, t = (e) => this.schedule(e)) {
          var n = this.#f.get(e);
          if (n) {
            this.#f.delete(e);
            for (var r of n.d) (wt(r, E), t(r));
            for (r of n.m) (wt(r, ie), t(r));
          }
          this.#p.add(e);
        }
        #g() {
          var e = [];
          for (let i of this.#c)
            if (!(i.f & 16384 || !(i.f & 6144))) {
              for (var t = i, n = !1; t.parent !== null;) {
                t = t.parent;
                var r = t.f;
                if (r & 96) {
                  if (!(r & 1024)) {
                    n = !0;
                    break;
                  }
                  t.f ^= T;
                }
              }
              n || e.push(t);
            }
          return ((this.#c = []), e);
        }
        #_() {
          this.#e = !0;
          for (let e of this.#u)
            (this.#d.delete(e), wt(e, E), this.schedule(e));
          for (let e of this.#d) (wt(e, ie), this.schedule(e));
          this.apply();
          for (var t = (_n = []), n = [], r = (vn = []); this.#c.length > 0;) {
            yn++ > 1e3 && (this.#C(), tn());
            for (let e of this.#g())
              try {
                this.#v(e, t, n);
              } catch (t) {
                throw (cn(e), this.#h() || this.discard(), t);
              }
          }
          if (((dn = null), r.length > 0)) {
            var i = e.ensure();
            for (let e of r) i.schedule(e);
          }
          if (((_n = null), (vn = null), this.#h())) {
            (this.#x(n), this.#x(t));
            for (let [e, t] of this.#f) sn(e, t);
            r.length > 0 && dn.#_();
            return;
          }
          let a = this.#y();
          if (a) {
            (this.#x(n), this.#x(t), a.#b(this));
            return;
          }
          (this.#u.clear(), this.#d.clear());
          for (let e of this.#r) e(this);
          (this.#r.clear(),
            (fn = this),
            nn(n),
            nn(t),
            (fn = null),
            this.#s?.resolve());
          var o = dn;
          if (
            (this.#a === 0 &&
              (this.#c.length === 0 || o !== null) &&
              (this.#C(), ot && (this.#S(), (dn = o))),
            this.#c.length > 0)
          ) {
            if (o !== null) {
              for (let e of this.#c) o.#c.push(e);
              this.#c = [];
            } else o = this;
          }
          o !== null && (Mn.clear(), o.#_());
        }
        #v(e, t, n) {
          e.f ^= T;
          for (var r = e.first; r !== null;) {
            var i = r.f,
              a = !!(i & 96);
            if (
              !((a && i & 1024) || i & 8192 || this.#f.has(r)) &&
              r.fn !== null
            ) {
              a
                ? (r.f ^= T)
                : i & 4
                  ? t.push(r)
                  : ot && i & 16777224
                    ? n.push(r)
                    : Rr(r) && (i & 16 && this.#d.add(r), Wr(r));
              var o = r.first;
              if (o !== null) {
                r = o;
                continue;
              }
            }
            for (; r !== null;) {
              var s = r.next;
              if (s !== null) {
                r = s;
                break;
              }
              r = r.parent;
            }
          }
        }
        #y() {
          for (var e = this.#t; e !== null;) {
            if (!e.is_fork) {
              for (let [t, [, n]] of this.current)
                if (e.current.has(t) && !n) return e;
            }
            e = e.#t;
          }
          return null;
        }
        #b(e) {
          for (let [t, n] of e.current)
            (!this.previous.has(t) &&
              e.previous.has(t) &&
              this.previous.set(t, e.previous.get(t)),
              this.current.set(t, n));
          for (let [t, n] of e.async_deriveds) {
            let e = this.async_deriveds.get(t);
            e && n.promise.then(e.resolve).catch(e.reject);
          }
          (e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d));
          let t = (e) => {
            var n = e.reactions;
            if (n !== null && !(e.f & 2 && !(e.f & 6144)))
              for (let e of n) {
                var r = e.f;
                if (r & 2) t(e);
                else {
                  var i = e;
                  r & 4194320 &&
                    !this.async_deriveds.has(i) &&
                    (this.#d.delete(i), wt(i, E), this.schedule(i));
                }
              }
          };
          for (let e of this.current.keys()) t(e);
          (this.oncommit(() => e.discard()), e.#C(), (dn = this), this.#_());
        }
        #x(e) {
          for (var t = 0; t < e.length; t += 1) Ot(e[t], this.#u, this.#d);
        }
        capture(e, t, n = !1) {
          (e.v !== De && !this.previous.has(e) && this.previous.set(e, e.v),
            e.f & 8388608 || (this.current.set(e, [t, n]), pn?.set(e, t)),
            this.is_fork || (e.v = t));
        }
        activate() {
          dn = this;
        }
        deactivate() {
          ((dn = null), (pn = null));
        }
        flush() {
          try {
            ((gn = !0), (dn = this), this.#_());
          } finally {
            ((yn = 0),
              (mn = null),
              (_n = null),
              (vn = null),
              (gn = !1),
              (dn = null),
              (pn = null),
              Mn.clear());
          }
        }
        discard() {
          for (let e of this.#i) e(this);
          this.#i.clear();
          for (let e of this.async_deriveds.values()) e.reject(Qt);
          (this.#C(), this.#s?.resolve());
        }
        register_created_effect(e) {
          this.#l.push(e);
        }
        #S() {
          for (let u = ln; u !== null; u = u.#n) {
            var e = u.id < this.id,
              t = [];
            for (let [r, [i, a]] of this.current) {
              if (u.current.has(r)) {
                var n = u.current.get(r)[0];
                if (e && i !== n) u.current.set(r, [i, a]);
                else continue;
              }
              t.push(r);
            }
            if (e)
              for (let [e, t] of this.async_deriveds) {
                let n = u.async_deriveds.get(e);
                n && t.promise.then(n.resolve).catch(n.reject);
              }
            var r = [...u.current.keys()].filter((e) => !u.current.get(e)[1]);
            if (u.#e && r.length !== 0) {
              var i = r.filter((e) => !this.current.has(e));
              if (i.length === 0) e && u.discard();
              else if (t.length > 0) {
                if (e)
                  for (let e of this.#p)
                    u.unskip_effect(e, (e) => {
                      e.f & 4194320 ? u.schedule(e) : u.#x([e]);
                    });
                u.activate();
                var a = new Set(),
                  o = new Map();
                for (var s of t) rn(s, i, a, o);
                o = new Map();
                var c = [...u.current]
                  .filter(([e, t]) => {
                    let n = this.current.get(e);
                    return !n || n[0] !== t[0] || n[1] !== t[1];
                  })
                  .map(([e]) => e);
                if (c.length > 0)
                  for (let e of this.#l)
                    !(e.f & 155648) &&
                      an(e, c, o) &&
                      (e.f & 4194320 ? (wt(e, E), u.schedule(e)) : u.#u.add(e));
                if (u.#c.length > 0 && !u.#m) {
                  u.apply();
                  for (var l of u.#g()) u.#v(l, [], []);
                }
                u.deactivate();
              }
            }
          }
        }
        increment(e, t) {
          if (((this.#a += 1), e)) {
            let e = this.#o.get(t) ?? 0;
            this.#o.set(t, e + 1);
          }
        }
        decrement(e, t) {
          if ((--this.#a, e)) {
            let e = this.#o.get(t) ?? 0;
            e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
          }
          this.#m ||
            ((this.#m = !0),
            bt(() => {
              ((this.#m = !1), this.linked && this.flush());
            }));
        }
        transfer_effects(e, t) {
          for (let t of e) this.#u.add(t);
          for (let e of t) this.#d.add(e);
          (e.clear(), t.clear());
        }
        oncommit(e) {
          this.#r.add(e);
        }
        ondiscard(e) {
          this.#i.add(e);
        }
        settled() {
          return (this.#s ??= m()).promise;
        }
        static ensure() {
          if (dn === null) {
            let t = (dn = new e());
            !gn &&
              !hn &&
              bt(() => {
                t.#e || t.flush();
              });
          }
          return dn;
        }
        apply() {
          if (!ot || (!this.is_fork && this.#t === null && this.#n === null)) {
            pn = null;
            return;
          }
          pn = new Map();
          for (let [e, [t]] of this.current) pn.set(e, t);
          for (let t = ln; t !== null; t = t.#n)
            if (!(t === this || t.is_fork)) {
              var e = !1;
              if (t.id < this.id) {
                for (let [n, [, r]] of t.current)
                  if (!r && this.current.has(n)) {
                    e = !0;
                    break;
                  }
              }
              if (!e) for (let [e, n] of t.previous) pn.has(e) || pn.set(e, n);
            }
        }
        schedule(e) {
          if (((mn = e), e.b?.is_pending && e.f & 16777228 && !(e.f & 32768))) {
            e.b.defer_effect(e);
            return;
          }
          this.#c.push(e);
        }
        #C() {
          if (this.linked) {
            var e = this.#t,
              t = this.#n;
            (e === null ? (ln = t) : (e.#n = t),
              t === null ? (un = e) : (t.#t = e),
              (this.linked = !1));
          }
        }
      }),
      (Sn = null));
  });
function wn(e, t) {
  return { f: 0, v: e, reactions: null, equals: He, rv: 0, wv: 0 };
}
function P(e, t) {
  let n = wn(e, t);
  return (Pr(n), n);
}
function Tn(e, t = !1, n = !0) {
  let r = wn(e);
  return (
    t || (r.equals = We),
    st && n && _t !== null && _t.l !== null && (_t.l.s ??= []).push(r),
    r
  );
}
function F(e, t, n = !1) {
  return (
    $r !== null &&
      (!ei || $r.f & 131072) &&
      gt() &&
      $r.f & 4325394 &&
      (ni === null || !ni.has(e)) &&
      nt(),
    En(e, n ? Ln(t) : t, vn)
  );
}
function En(e, t, n = null) {
  if (!e.equals(t)) {
    Qr ? Mn.set(e, t) : Mn.has(e) || Mn.set(e, e.v);
    var r = xn.ensure();
    if ((r.capture(e, t), e.f & 2)) {
      let t = e;
      (e.f & 2048 && Jt(t), pn === null && Tt(t));
    }
    ((e.wv = Lr()),
      (Pn = null),
      (Fn = 0),
      An(e, E, n),
      (Pn = null),
      gt() &&
        ti !== null &&
        ti.f & 1024 &&
        !(ti.f & 96) &&
        (ai === null ? Fr([e]) : ai.push(e)),
      !r.is_fork && jn.size > 0 && !Nn && Dn());
  }
  return t;
}
function Dn() {
  Nn = !1;
  for (let e of jn) {
    e.f & 1024 && wt(e, ie);
    let t;
    try {
      t = Rr(e);
    } catch {
      t = !0;
    }
    t && Wr(e);
  }
  jn.clear();
}
function On(e, t = 1) {
  var n = H(e),
    r = t === 1 ? n++ : n--;
  return (F(e, n), r);
}
function kn(e) {
  F(e, e.v + 1);
}
function An(e, t, n) {
  var r = e.reactions;
  if (r !== null) {
    var i = gt(),
      a = r.length;
    if (((Fn += a), Fn > 1e5 && Pn === null && (Pn = new Set()), Pn !== null)) {
      if (Pn.has(e)) return;
      Pn.add(e);
    }
    for (var o = 0; o < a; o++) {
      var s = r[o],
        c = s.f;
      if (i || s !== ti) {
        var l = (c & E) === 0;
        if ((l && wt(s, t), c & 131072)) jn.add(s);
        else if (c & 2) {
          var u = s;
          (pn?.delete(u), An(u, ie, n));
        } else if (l) {
          var d = s;
          (c & 16 && Sn !== null && Sn.add(d), n === null ? on(d) : n.push(d));
        }
      }
    }
  }
}
var jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In = o(() => {
    (d(),
      U(),
      Ge(),
      O(),
      it(),
      ct(),
      ut(),
      dt(),
      vt(),
      Cn(),
      Rn(),
      $t(),
      Dt(),
      (jn = new Set()),
      (Mn = new Map()),
      (Nn = !1),
      (Pn = null),
      (Fn = 0));
  });
function Ln(e) {
  if (typeof e != `object` || !e || he in e || ge in e) return e;
  let t = te(e);
  if (t !== S && t !== ee) return e;
  var n = new Map(),
    r = h(e),
    i = P(0),
    a = null,
    o = ci,
    s = (e) => {
      if (ci === o) return e();
      var t = $r,
        n = ci;
      (Mr(null), Ir(o));
      var r = e();
      return (Mr(t), Ir(n), r);
    };
  return (
    r && n.set(`length`, P(e.length, a)),
    new Proxy(e, {
      defineProperty(e, t, r) {
        (!(`value` in r) ||
          r.configurable === !1 ||
          r.enumerable === !1 ||
          r.writable === !1) &&
          et();
        var i = n.get(t);
        return (
          i === void 0
            ? s(() => {
                var e = P(r.value, a);
                return (n.set(t, e), e);
              })
            : F(i, r.value, !0),
          !0
        );
      },
      deleteProperty(e, t) {
        var r = n.get(t);
        if (r === void 0) {
          if (t in e) {
            let e = s(() => P(De, a));
            (n.set(t, e), kn(i));
          }
        } else (F(r, De), kn(i));
        return !0;
      },
      get(t, r, i) {
        if (r === he) return e;
        var o = n.get(r),
          c = r in t;
        if (
          (o === void 0 &&
            (!c || b(t, r)?.writable) &&
            ((o = s(() => P(Ln(c ? t[r] : De), a))), n.set(r, o)),
          o !== void 0)
        ) {
          var l = H(o);
          return l === De ? void 0 : l;
        }
        return Reflect.get(t, r, i);
      },
      getOwnPropertyDescriptor(e, t) {
        this.has?.(e, t);
        var r = Reflect.getOwnPropertyDescriptor(e, t),
          i = n.get(t);
        if (i !== void 0) {
          var a = H(i);
          if (a === De) return;
          if (r && `value` in r) r.value = a;
          else
            return { enumerable: !0, configurable: !0, value: a, writable: !0 };
        }
        return r;
      },
      has(e, t) {
        if (t === he) return !0;
        var r = n.get(t),
          i = (r !== void 0 && r.v !== De) || Reflect.has(e, t);
        return (r !== void 0 || (ti !== null && (!i || b(e, t)?.writable))) &&
          (r === void 0 &&
            ((r = s(() => P(i ? Ln(e[t]) : De, a))), n.set(t, r)),
          H(r) === De)
          ? !1
          : i;
      },
      set(e, t, o, c) {
        var l = n.get(t),
          u = t in e;
        if (r && t === `length`)
          for (var d = o; d < l.v; d += 1) {
            var f = n.get(d + ``);
            f === void 0
              ? d in e && ((f = s(() => P(De, a))), n.set(d + ``, f))
              : F(f, De);
          }
        if (l === void 0)
          (!u || b(e, t)?.writable) &&
            ((l = s(() => P(void 0, a))), F(l, Ln(o)), n.set(t, l));
        else {
          u = l.v !== De;
          var p = s(() => Ln(o));
          F(l, p);
        }
        var m = Reflect.getOwnPropertyDescriptor(e, t);
        if ((m?.set && m.set.call(c, o), !u)) {
          if (r && typeof t == `string`) {
            var h = n.get(`length`),
              g = Number(t);
            Number.isInteger(g) && g >= h.v && F(h, g + 1);
          }
          kn(i);
        }
        return !0;
      },
      ownKeys(e) {
        H(i);
        var t = Reflect.ownKeys(e).filter((e) => {
          var t = n.get(e);
          return t === void 0 || t.v !== De;
        });
        for (var [r, a] of n) a.v !== De && !(r in e) && t.push(r);
        return t;
      },
      setPrototypeOf() {
        tt();
      },
    })
  );
}
var Rn = o(() => {
    (d(), U(), w(), In(), O(), je(), it(), ut(), dt(), ct());
  }),
  zn = o(() => {
    (Fe(), Rn());
  });
function Bn() {
  if (Jn === void 0) {
    ((Jn = window),
      (Yn = document),
      (Xn = /Firefox/.test(navigator.userAgent)));
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    ((Zn = b(t, `firstChild`).get),
      (Qn = b(t, `nextSibling`).get),
      ne(e) &&
        ((e[be] = void 0), (e[ye] = null), (e[xe] = void 0), (e.__e = void 0)),
      ne(n) && (n[Se] = void 0));
  }
}
function Vn(e = ``) {
  return document.createTextNode(e);
}
function Hn(e) {
  return Zn.call(e);
}
function Un(e) {
  return Qn.call(e);
}
function I(e, t) {
  if (!A) return Hn(e);
  var n = Hn(j);
  if (n === null) n = j.appendChild(Vn());
  else if (t && n.nodeType !== 3) {
    var r = Vn();
    return (n?.before(r), Le(r), r);
  }
  return (t && qn(n), Le(n), n);
}
function L(e, t = !1) {
  if (!A) {
    var n = Hn(e);
    return n instanceof Comment && n.data === `` ? Un(n) : n;
  }
  if (t) {
    if (j?.nodeType !== 3) {
      var r = Vn();
      return (j?.before(r), Le(r), r);
    }
    qn(j);
  }
  return j;
}
function R(e, t = !1) {
  if (!A) return Hn(e);
  var n = I(e, t);
  return (k(e), n);
}
function z(e, t = 1, n = !1) {
  let r = A ? j : e;
  for (var i; t--;) ((i = r), (r = Un(r)));
  if (!A) return r;
  if (n) {
    if (r?.nodeType !== 3) {
      var a = Vn();
      return (r === null ? i?.after(a) : r.before(a), Le(a), a);
    }
    qn(r);
  }
  return (Le(r), r);
}
function Wn(e) {
  e.textContent = ``;
}
function Gn() {
  return !ot || Sn !== null ? !1 : (ti.f & D) !== 0;
}
function Kn(e, t, n) {
  return t == null || t === `http://www.w3.org/1999/xhtml`
    ? n
      ? document.createElement(e, { is: n })
      : document.createElement(e)
    : n
      ? document.createElementNS(t, e, { is: n })
      : document.createElementNS(t, e);
}
function qn(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === 3;)
    (t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling));
}
var Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n = o(() => {
    (M(), d(), zn(), w(), U(), ct(), O(), Cn(), je());
  });
function er(e) {
  var t = ti;
  if (t === null) return (($r.f |= me), e);
  if (!(t.f & 32768) && !(t.f & 4)) throw e;
  tr(e, t);
}
function tr(e, t) {
  if (!(t !== null && t.f & 16384)) {
    for (; t !== null;) {
      if (t.f & 128 && !(t.f & 33570816)) {
        if (!(t.f & 32768)) throw e;
        try {
          t.b.error(e);
          return;
        } catch (t) {
          e = t;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
var nr = o(() => {
  (d(), je(), $n(), O(), w(), U());
});
function rr(e) {
  (ti === null && ($r === null && Ze(e), Xe()), Qr && Ye(e));
}
function ir(e, t) {
  var n = t.last;
  n === null
    ? (t.last = t.first = e)
    : ((n.next = e), (e.prev = n), (t.last = e));
}
function ar(e, t) {
  var n = ti;
  n !== null && n.f & 8192 && (e |= ae);
  var r = {
    ctx: _t,
    deps: null,
    nodes: null,
    f: e | E | 512,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null,
  };
  dn?.register_created_effect(r);
  var i = r;
  if (e & 4) _n === null ? xn.ensure().schedule(r) : _n.push(r);
  else if (t !== null) {
    try {
      Wr(r);
    } catch (e) {
      throw (xr(r), e);
    }
    i.deps === null &&
      i.teardown === null &&
      i.nodes === null &&
      i.first === i.last &&
      !(i.f & 524288) &&
      ((i = i.first), e & 16 && e & 65536 && i !== null && (i.f |= ce));
  }
  if (
    i !== null &&
    ((i.parent = n),
    n !== null && ir(i, n),
    $r !== null && $r.f & 2 && !(e & 64))
  ) {
    var a = $r;
    (a.effects ??= []).push(i);
  }
  return r;
}
function or() {
  return $r !== null && !ei;
}
function sr(e) {
  let t = ar(8, null);
  return (wt(t, T), (t.teardown = e), t);
}
function cr(e) {
  rr(`$effect`);
  var t = ti.f;
  if (!$r && t & 32 && _t !== null && !_t.i) {
    var n = _t;
    (n.e ??= []).push(e);
  } else return lr(e);
}
function lr(e) {
  return ar(4 | ue, e);
}
function ur(e) {
  return (rr(`$effect.pre`), ar(8 | ue, e));
}
function dr(e) {
  xn.ensure();
  let t = ar(64 | le, e);
  return (e = {}) =>
    new Promise((n) => {
      e.outro
        ? wr(t, () => {
            (xr(t), n(void 0));
          })
        : (xr(t), n(void 0));
    });
}
function fr(e) {
  return ar(4, e);
}
function pr(e) {
  return ar(pe | le, e);
}
function mr(e, t = 0) {
  return ar(8 | t, e);
}
function B(e, t = [], n = [], r = []) {
  Rt(r, t, n, (t) => {
    ar(8, () => {
      e(...t.map(H));
    });
  });
}
function hr(e, t = 0) {
  return ar(16 | t, e);
}
function gr(e, t = 0) {
  return ar(re | t, e);
}
function _r(e) {
  return ar(32 | le, e);
}
function vr(e) {
  var t = e.teardown;
  if (t !== null) {
    let n = Qr,
      r = $r;
    (jr(!0), Mr(null));
    try {
      t.call(null);
    } catch (t) {
      tr(t, e.parent);
    } finally {
      (jr(n), Mr(r));
    }
  }
}
function yr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    let e = n.ac;
    e !== null &&
      Ft(() => {
        e.abort(we);
      });
    var r = n.next;
    (n.f & 64 ? (n.parent = null) : xr(n, t), (n = r));
  }
}
function br(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    (t.f & 32 || xr(t), (t = n));
  }
}
function xr(e, t = !0) {
  var n = !1;
  ((t || e.f & 262144) &&
    e.nodes !== null &&
    e.nodes.end !== null &&
    (Sr(e.nodes.start, e.nodes.end), (n = !0)),
    (e.f |= se),
    yr(e, t && !n),
    Ur(e, 0));
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (let e of r) e.stop();
  (vr(e), (e.f ^= se), (e.f |= oe));
  var i = e.parent;
  (i !== null && i.first !== null && Cr(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes =
      e.ac =
      e.b =
        null));
}
function Sr(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : Un(e);
    (e.remove(), (e = n));
  }
}
function Cr(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  (n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null &&
      (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function wr(e, t, n = !0) {
  var r = [];
  ((e.f |= 256), Tr(e, r, !0));
  var i = () => {
      (n && xr(e), t && t());
    },
    a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var s of r) s.out(o);
  } else i();
}
function Tr(e, t, n) {
  if (!(e.f & 8192)) {
    e.f ^= ae;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
    for (var i = e.first; i !== null;) {
      var a = i.next;
      if (!(i.f & 64)) {
        var o = !!(i.f & 65536) || (!!(i.f & 32) && !!(e.f & 16));
        Tr(i, t, o ? n : !1);
      }
      i = a;
    }
  }
}
function Er(e) {
  ((e.f &= -257), Dr(e, !0));
}
function Dr(e, t) {
  if (!(e.f & 256) && e.f & 8192) {
    ((e.f ^= ae), e.f & 1024 || (wt(e, E), xn.ensure().schedule(e)));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        i = !!(n.f & 65536) || !!(n.f & 32);
      (Dr(n, i ? t : !1), (n = r));
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (let e of a) (e.is_global || t) && e.in();
  }
}
function Or(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
      var i = n === r ? null : Un(n);
      (t.append(n), (n = i));
    }
}
var V = o(() => {
    (U(), O(), nr(), it(), d(), w(), $n(), vt(), Cn(), Ut(), Lt(), Dt());
  }),
  kr,
  Ar = o(() => {
    (In(), U(), (kr = null));
  });
function jr(e) {
  Qr = e;
}
function Mr(e) {
  $r = e;
}
function Nr(e) {
  ti = e;
}
function Pr(e) {
  $r !== null &&
    ((!ot && $r.f & 2097152) || $r.f & 2) &&
    (ni ??= new Set()).add(e);
}
function Fr(e) {
  ai = e;
}
function Ir(e) {
  ci = e;
}
function Lr() {
  return ++oi;
}
function Rr(e) {
  var t = e.f;
  if (t & 2048) return !0;
  if (t & 4096) {
    for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if ((Rr(a) && Yt(a), a.wv > e.wv)) return !0;
    }
    t & 512 && pn === null && wt(e, T);
  }
  return !1;
}
function zr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && (ot || ni === null || !ni.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & 2
        ? zr(a, t, !1)
        : t === a && (n ? wt(a, E) : a.f & 1024 && wt(a, ie), on(a));
    }
}
function Br(e) {
  var t = ri,
    n = ii,
    r = ai,
    i = $r,
    a = ni,
    o = _t,
    s = ei,
    c = ci,
    l = e.f;
  ((ri = null),
    (ii = 0),
    (ai = null),
    ($r = l & 96 ? null : e),
    (ni = null),
    ft(e.ctx),
    (ei = !1),
    (ci = ++si),
    e.ac !== null &&
      (Ft(() => {
        e.ac.abort(we);
      }),
      (e.ac = null)));
  try {
    e.f |= fe;
    var u = e.fn,
      d = u();
    e.f |= D;
    var f = Vr(e);
    if (gt() && ai !== null && !ei && f !== null && !(e.f & 6146))
      for (var p = 0; p < ai.length; p++) zr(ai[p], e);
    if (i !== null && i !== e) {
      if ((si++, i.deps !== null))
        for (let e = 0; e < n; e += 1) i.deps[e].rv = si;
      if (t !== null) for (let e of t) e.rv = si;
      ai !== null && (r === null ? (r = ai) : r.push(...ai));
    }
    return (e.f & 8388608 && (e.f ^= me), d);
  } catch (t) {
    return (Vr(e), er(t));
  } finally {
    ((e.f ^= fe),
      (ri = t),
      (ii = n),
      (ai = r),
      ($r = i),
      (ni = a),
      ft(o),
      (ei = s),
      (ci = c));
  }
}
function Vr(e) {
  var t = e.deps,
    n = dn?.is_fork;
  if (ri !== null) {
    var r;
    if ((n || Ur(e, ii), t !== null && ii > 0))
      for (t.length = ii + ri.length, r = 0; r < ri.length; r++)
        t[ii + r] = ri[r];
    else e.deps = t = ri;
    if (or() && e.f & 512)
      for (r = ii; r < t.length; r++) (t[r].reactions ??= []).push(e);
  } else !n && t !== null && ii < t.length && (Ur(e, ii), (t.length = ii));
  return t;
}
function Hr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = g.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? (n = t.reactions = null) : ((n[r] = n[i]), n.pop());
    }
  }
  if (n === null && t.f & 2 && (ri === null || !_.call(ri, t))) {
    var a = t;
    (a.f & 512 && (a.f ^= 512),
      a.v !== De && Tt(a),
      a.ac !== null &&
        Ft(() => {
          (a.ac.abort(we), (a.ac = null), wt(a, E));
        }),
      Xt(a),
      Ur(a, 0));
  }
}
function Ur(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Hr(e, n[r]);
}
function Wr(e) {
  var t = e.f;
  if (!(t & 16384)) {
    wt(e, T);
    var n = ti,
      r = Zr;
    ((ti = e), (Zr = !(t & 96)));
    try {
      (t & 16777232 ? br(e) : yr(e), vr(e));
      var i = Br(e);
      ((e.teardown = typeof i == `function` ? i : null), (e.wv = oi));
    } finally {
      ((Zr = r), (ti = n));
    }
  }
}
async function Gr() {
  if (ot)
    return new Promise((e) => {
      (requestAnimationFrame(() => e()), setTimeout(() => e()));
    });
  (await Promise.resolve(), en());
}
function H(e) {
  var t = !!(e.f & 2);
  if (
    (kr?.add(e),
    $r !== null &&
      !ei &&
      !(ti !== null && ti.f & 16384) &&
      (ni === null || !ni.has(e)))
  ) {
    var n = $r.deps;
    if ($r.f & 2097152)
      e.rv < si &&
        ((e.rv = si),
        ri === null && n !== null && n[ii] === e
          ? ii++
          : ri === null
            ? (ri = [e])
            : ri.push(e));
    else {
      (($r.deps ??= []), _.call($r.deps, e) || $r.deps.push(e));
      var r = e.reactions;
      r === null ? (e.reactions = [$r]) : _.call(r, $r) || r.push($r);
    }
  }
  if (Qr && Mn.has(e)) return Mn.get(e);
  if (t) {
    var i = e;
    if (Qr) {
      var a = i.v;
      return (
        ((!(i.f & 1024) && i.reactions !== null) || qr(i)) && (a = Jt(i)),
        Mn.set(i, a),
        a
      );
    }
    var o = !(i.f & 512) && !ei && $r !== null && (Zr || !!($r.f & 512)),
      s = (i.f & D) === 0;
    (Rr(i) && (o && (i.f |= 512), Yt(i)), o && !s && (Zt(i), Kr(i)));
  }
  if (pn?.has(e)) return pn.get(e);
  if (e.f & 8388608) throw e.v;
  return e.v;
}
function Kr(e) {
  if (((e.f |= 512), e.deps !== null))
    for (let t of e.deps)
      ((t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Zt(t), Kr(t)));
}
function qr(e) {
  if (e.v === De) return !0;
  if (e.deps === null) return !1;
  for (let t of e.deps) if (Mn.has(t) || (t.f & 2 && qr(t))) return !0;
  return !1;
}
function Jr(e) {
  var t = ei;
  try {
    return ((ei = !0), e());
  } finally {
    ei = t;
  }
}
function Yr(e) {
  if (!(typeof e != `object` || !e || e instanceof EventTarget)) {
    if (he in e) Xr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        let n = e[t];
        typeof n == `object` && n && he in n && Xr(n);
      }
  }
}
function Xr(e, t = new Set()) {
  if (typeof e == `object` && e && !(e instanceof EventTarget) && !t.has(e)) {
    (t.add(e), e instanceof Date && e.getTime());
    for (let n in e)
      try {
        Xr(e[n], t);
      } catch {}
    let n = te(e);
    if (
      n !== Object.prototype &&
      n !== Array.prototype &&
      n !== Map.prototype &&
      n !== Set.prototype &&
      n !== Date.prototype
    ) {
      let t = x(n);
      for (let n in t) {
        let r = t[n].get;
        if (r)
          try {
            r.call(e);
          } catch {}
      }
    }
  }
}
var Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  U = o(() => {
    (d(),
      w(),
      V(),
      O(),
      In(),
      $t(),
      ct(),
      ut(),
      dt(),
      vt(),
      Cn(),
      nr(),
      je(),
      Ar(),
      Lt(),
      Dt(),
      Fe(),
      (Zr = !1),
      (Qr = !1),
      ($r = null),
      (ei = !1),
      (ti = null),
      (ni = null),
      (ri = null),
      (ii = 0),
      (ai = null),
      (oi = 1),
      (si = 0),
      (ci = si));
  }),
  li = o(() => {
    (Lo(), zo(), V());
  });
function ui(e) {
  return fi.includes(e);
}
var di,
  fi,
  pi,
  mi = o(() => {
    ((di =
      `allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(
        `.`,
      )),
      [...di],
      (fi = [`touchstart`, `touchmove`]),
      (pi = [`$state`, `$state.raw`, `$derived`, `$derived.by`]),
      [...pi]);
  }),
  hi = o(() => {
    (O(), mi(), U());
  }),
  gi = o(() => {
    (O(), M(), vt());
  });
function _i(e, t, n, r = {}) {
  function i(e) {
    if ((r.capture || bi.call(t, e), !e.cancelBubble))
      return Ft(() => n?.call(this, e));
  }
  return (
    e.startsWith(`pointer`) || e.startsWith(`touch`) || e === `wheel`
      ? ((i.__removed = !1),
        bt(() => {
          i.__removed || t.addEventListener(e, i, r);
        }))
      : t.addEventListener(e, i, r),
    i
  );
}
function vi(e, t, n, r, i) {
  var a = { capture: r, passive: i },
    o = _i(e, t, n, a);
  (t === document.body ||
    t === window ||
    t === document ||
    t instanceof HTMLMediaElement) &&
    sr(() => {
      ((o.__removed = !0), t.removeEventListener(e, o, a));
    });
}
function W(e, t, n) {
  (t[xi] ??= {})[e] = n;
}
function yi(e) {
  for (var t = 0; t < e.length; t++) Si.add(e[t]);
  for (var n of Ci) n(e);
}
function bi(e) {
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    i = e.composedPath?.() || [],
    a = i[0] || e.target;
  ((wi = e),
    Ti ||
      ((Ti = !0),
      setTimeout(() => {
        ((Ti = !1), (wi = null));
      })));
  var o = 0,
    s = wi === e && e[xi];
  if (s) {
    var c = i.indexOf(s);
    if (c !== -1 && (t === document || t === window)) {
      e[xi] = t;
      return;
    }
    var l = i.indexOf(t);
    if (l === -1) return;
    c <= l && (o = c);
  }
  if (((a = i[o] || e.target), a !== t)) {
    y(e, `currentTarget`, {
      configurable: !0,
      get() {
        return a || n;
      },
    });
    var u = $r,
      d = ti;
    (Mr(null), Nr(null));
    try {
      for (var f, p = []; a !== null && a !== t;) {
        try {
          var m = a[xi]?.[r];
          m != null && (!a.disabled || e.target === a) && m.call(a, e);
        } catch (e) {
          f ? p.push(e) : (f = e);
        }
        if (e.cancelBubble) break;
        (o++, (a = o < i.length ? i[o] : null));
      }
      if (f) {
        for (let e of p)
          queueMicrotask(() => {
            throw e;
          });
        throw f;
      }
    } finally {
      ((e[xi] = t), delete e.currentTarget, Mr(u), Nr(d));
    }
  }
}
var xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei = o(() => {
    (V(),
      w(),
      M(),
      Ct(),
      U(),
      Lt(),
      (xi = Symbol(`events`)),
      (Si = new Set()),
      (Ci = new Set()),
      (wi = null),
      (Ti = !1));
  });
function Di(e) {
  return ki?.createHTML(e) ?? e;
}
function Oi(e) {
  var t = Kn(`template`);
  return ((t.innerHTML = Di(e.replaceAll(`<!>`, `<!---->`))), t.content);
}
var ki,
  Ai = o(() => {
    ($n(),
      (ki =
        globalThis?.window?.trustedTypes &&
        globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`, {
          createHTML: (e) => e,
        })));
  });
function ji(e, t) {
  var n = ti;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function G(e, t) {
  var n = !!(t & 1),
    r = !!(t & 2),
    i,
    a = !e.startsWith(`<!>`);
  return () => {
    if (A) return (ji(j, null), j);
    i === void 0 && ((i = Oi(a ? e : `<!>` + e)), n || (i = Hn(i)));
    var t = r || Xn ? document.importNode(i, !0) : i.cloneNode(!0);
    if (n) {
      var o = Hn(t),
        s = t.lastChild;
      ji(o, s);
    } else ji(t, t);
    return t;
  };
}
function Mi(e, t, n = `svg`) {
  var r = !e.startsWith(`<!>`),
    i = !!(t & 1),
    a = `<${n}>${r ? e : `<!>` + e}</${n}>`,
    o;
  return () => {
    if (A) return (ji(j, null), j);
    if (!o) {
      var e = Hn(Oi(a));
      if (i)
        for (o = document.createDocumentFragment(); Hn(e);)
          o.appendChild(Hn(e));
      else o = Hn(e);
    }
    var t = o.cloneNode(!0);
    if (i) {
      var n = Hn(t),
        r = t.lastChild;
      ji(n, r);
    } else ji(t, t);
    return t;
  };
}
function Ni(e, t) {
  return Mi(e, t, `svg`);
}
function Pi(e = ``) {
  if (!A) {
    var t = Vn(e + ``);
    return (ji(t, t), t);
  }
  var n = j;
  return (
    n.nodeType === 3 ? qn(n) : (n.before((n = Vn())), Le(n)),
    ji(n, n),
    n
  );
}
function Fi() {
  if (A) return (ji(j, null), j);
  var e = document.createDocumentFragment(),
    t = document.createComment(``),
    n = Vn();
  return (e.append(t, n), ji(t, n), e);
}
function K(e, t) {
  if (A) {
    var n = ti;
    ((!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = j), Re());
    return;
  }
  e !== null && e.before(t);
}
function Ii() {
  if (A && j && j.nodeType === 8 && j.textContent?.startsWith(`$`)) {
    let e = j.textContent.substring(1);
    return (Re(), e);
  }
  return (((window.__svelte ??= {}).uid ??= 1), `c${window.__svelte.uid++}`);
}
var Li = o(() => {
  (M(), $n(), Ai(), U(), je(), O());
});
function Ri(e) {
  let t = 0,
    n = wn(0),
    r;
  return () => {
    or() &&
      (H(n),
      mr(
        () => (
          t === 0 && (r = Jr(() => e(() => kn(n)))),
          (t += 1),
          () => {
            bt(() => {
              (--t, t === 0 && (r?.(), (r = void 0), kn(n)));
            });
          }
        ),
      ));
  };
}
var zi = o(() => {
  (U(), V(), In(), ut(), d(), Ct());
});
function Bi(e, t, n, r) {
  new Hi(e, t, n, r);
}
var Vi,
  Hi,
  Ui = o(() => {
    (O(),
      je(),
      vt(),
      nr(),
      V(),
      U(),
      M(),
      Ct(),
      it(),
      Fe(),
      d(),
      Cn(),
      In(),
      ut(),
      zi(),
      $n(),
      kt(),
      (Vi = ce | le),
      (Hi = class {
        parent;
        is_pending = !1;
        transform_error;
        #e;
        #t = A ? j : null;
        #n;
        #r;
        #i;
        #a = null;
        #o = null;
        #s = null;
        #c = null;
        #l = 0;
        #u = 0;
        #d = !1;
        #f = new Set();
        #p = new Set();
        #m = null;
        #h = Ri(
          () => (
            (this.#m = wn(this.#l)),
            () => {
              this.#m = null;
            }
          ),
        );
        constructor(e, t, n, r) {
          ((this.#e = e),
            (this.#n = t),
            (this.#r = (e) => {
              var t = ti;
              ((t.b = this), (t.f |= 128), n(e));
            }),
            (this.parent = ti.b),
            (this.transform_error =
              r ?? this.parent?.transform_error ?? ((e) => e)),
            (this.#i = hr(() => {
              if (A) {
                let e = this.#t;
                Re();
                let t = e.data === `[!`;
                if (e.data.startsWith(`[?`)) {
                  let t = JSON.parse(e.data.slice(2));
                  this.#_(t);
                } else t ? this.#y() : this.#g();
              } else this.#b();
            }, Vi)),
            A && (this.#e = j));
        }
        #g() {
          try {
            this.#a = _r(() => this.#r(this.#e));
          } catch (e) {
            this.error(e);
          }
        }
        #_(e) {
          let t = this.#n.failed,
            { reset: n, invoke_onerror: r } = this.#v(e);
          (bt(r),
            t &&
              (this.#s = _r(() => {
                t(
                  this.#e,
                  () => e,
                  () => n,
                );
              })));
        }
        #v(e) {
          var t = !1,
            n = !1;
          let r = () => {
            if (t) {
              Pe();
              return;
            }
            ((t = !0),
              n && rt(),
              this.#s !== null &&
                wr(this.#s, () => {
                  this.#s = null;
                }),
              this.#S(() => {
                this.#b();
              }));
          };
          return {
            reset: r,
            invoke_onerror: () => {
              try {
                ((n = !0), this.#n.onerror?.(e, r), (n = !1));
              } catch (e) {
                tr(e, this.#i && this.#i.parent);
              }
            },
          };
        }
        #y() {
          let e = this.#n.pending;
          e &&
            ((this.is_pending = !0),
            (this.#o = _r(() => e(this.#e))),
            bt(() => {
              var e = (this.#c = document.createDocumentFragment()),
                t = Vn(),
                n = !1;
              if (
                (e.append(t),
                (this.#a = this.#S(() => {
                  try {
                    return _r(() => this.#r(t));
                  } catch (e) {
                    try {
                      (this.error(e), (n = !0));
                    } catch (e) {
                      tr(e, this.#i.parent);
                    }
                    return null;
                  }
                })),
                this.#a === null)
              ) {
                ((this.#c = null), n && this.#x(dn));
                return;
              }
              this.#u === 0 &&
                (this.#e.before(e),
                (this.#c = null),
                wr(this.#o, () => {
                  this.#o = null;
                }),
                this.#x(dn));
            }));
        }
        #b() {
          try {
            if (
              ((this.is_pending = this.has_pending_snippet()),
              (this.#u = 0),
              (this.#l = 0),
              (this.#a = _r(() => {
                this.#r(this.#e);
              })),
              this.#u > 0)
            ) {
              var e = (this.#c = document.createDocumentFragment());
              Or(this.#a, e);
              let t = this.#n.pending;
              this.#o = _r(() => t(this.#e));
            } else this.#x(dn);
          } catch (e) {
            this.error(e);
          }
        }
        #x(e) {
          ((this.is_pending = !1), e.transfer_effects(this.#f, this.#p));
        }
        defer_effect(e) {
          Ot(e, this.#f, this.#p);
        }
        is_rendered() {
          return (
            !this.is_pending && (!this.parent || this.parent.is_rendered())
          );
        }
        has_pending_snippet() {
          return !!this.#n.pending;
        }
        #S(e) {
          var t = ti,
            n = $r,
            r = _t;
          (Nr(this.#i), Mr(this.#i), ft(this.#i.ctx));
          try {
            return (xn.ensure(), e());
          } finally {
            (Nr(t), Mr(n), ft(r));
          }
        }
        #C(e, t) {
          if (!this.has_pending_snippet()) {
            this.parent && this.parent.#C(e, t);
            return;
          }
          ((this.#u += e),
            this.#u === 0 &&
              (this.#x(t),
              this.#o &&
                wr(this.#o, () => {
                  this.#o = null;
                }),
              (this.#c &&= (this.#e.before(this.#c), null))));
        }
        update_pending_count(e, t) {
          (this.#C(e, t),
            (this.#l += e),
            !(!this.#m || this.#d) &&
              ((this.#d = !0),
              bt(() => {
                ((this.#d = !1), this.#m && En(this.#m, this.#l));
              })));
        }
        get_effect_pending() {
          return (this.#h(), H(this.#m));
        }
        error(e) {
          if (!this.#n.onerror && !this.#n.failed) throw e;
          dn?.is_fork
            ? (this.#a && dn.skip_effect(this.#a),
              this.#o && dn.skip_effect(this.#o),
              this.#s && dn.skip_effect(this.#s),
              dn.oncommit(() => {
                this.#w(e);
              }))
            : this.#w(e);
        }
        #w(e) {
          ((this.#a &&= (xr(this.#a), null)),
            (this.#o &&= (xr(this.#o), null)),
            (this.#s &&= (xr(this.#s), null)),
            A && (Le(this.#t), ze(), Le(Be())));
          let t = this.#n.failed,
            n = (e) => {
              let { reset: n, invoke_onerror: r } = this.#v(e);
              (r(),
                t &&
                  (this.#s = this.#S(() => {
                    try {
                      return _r(() => {
                        var r = ti;
                        ((r.b = this),
                          (r.f |= 128),
                          t(
                            this.#e,
                            () => e,
                            () => n,
                          ));
                      });
                    } catch (e) {
                      return (tr(e, this.#i.parent), null);
                    }
                  })));
            };
          bt(() => {
            var t;
            try {
              t = this.transform_error(e);
            } catch (e) {
              tr(e, this.#i && this.#i.parent);
              return;
            }
            typeof t == `object` && t && typeof t.then == `function`
              ? t.then(n, (e) => tr(e, this.#i && this.#i.parent))
              : n(t);
          });
        }
      }));
  });
function q(e, t) {
  var n = t == null ? `` : typeof t == `object` ? `${t}` : t;
  n !== (e[Se] ??= e.nodeValue) && ((e[Se] = n), (e.nodeValue = `${n}`));
}
function Wi(e, t) {
  return Gi(e, t);
}
function Gi(
  e,
  {
    target: t,
    anchor: n,
    props: r = {},
    events: i,
    context: a,
    intro: o = !0,
    transformError: s,
  },
) {
  Bn();
  var c = void 0,
    l = dr(() => {
      var l = n ?? t.appendChild(Vn());
      Bi(
        l,
        { pending: () => {} },
        (t) => {
          pt({});
          var n = _t;
          if (
            (a && (n.c = a),
            i && (r.$$events = i),
            A && ji(t, null),
            (Ki = o),
            (c = e(t, r) || ht()),
            (Ki = !0),
            A &&
              ((ti.nodes.end = j),
              j === null || j.nodeType !== 8 || j.data !== `]`))
          )
            throw (Ne(), Ee);
          mt();
        },
        s,
      );
      var u = new Set(),
        d = (e) => {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (!u.has(r)) {
              u.add(r);
              var i = ui(r);
              for (let e of [t, document]) {
                var a = qi.get(e);
                a === void 0 && ((a = new Map()), qi.set(e, a));
                var o = a.get(r);
                o === void 0
                  ? (e.addEventListener(r, bi, { passive: i }), a.set(r, 1))
                  : a.set(r, o + 1);
              }
            }
          }
        };
      return (
        d(v(Si)),
        Ci.add(d),
        () => {
          for (var e of u)
            for (let n of [t, document]) {
              var r = qi.get(n),
                i = r.get(e);
              --i == 0
                ? (n.removeEventListener(e, bi),
                  r.delete(e),
                  r.size === 0 && qi.delete(n))
                : r.set(e, i);
            }
          (Ci.delete(d), l !== n && l.parentNode?.removeChild(l));
        }
      );
    });
  return (Ji.set(c, l), c);
}
var Ki,
  qi,
  Ji,
  Yi = o(() => {
    (d(),
      $n(),
      je(),
      U(),
      vt(),
      V(),
      M(),
      w(),
      Ei(),
      Fe(),
      it(),
      Li(),
      mi(),
      O(),
      Ui(),
      (qi = new Map()),
      (Ji = new WeakMap()));
  }),
  Xi = o(() => {
    (O(), M(), V(), In(), Yi(), U());
  }),
  Zi = o(() => {
    (w(), O(), vt(), mi());
  }),
  Qi = o(() => {
    (it(), vt());
  }),
  $i = o(() => {
    (lt(), V(), U(), dt());
  }),
  ea = o(() => {
    (Ut(), U(), M(), Li());
  }),
  ta = o(() => {
    it();
  }),
  na,
  ra = o(() => {
    (Cn(),
      V(),
      O(),
      M(),
      $n(),
      d(),
      (na = class {
        anchor;
        #e = new Map();
        #t = new Map();
        #n = new Map();
        #r = new Set();
        #i = !0;
        constructor(e, t = !0) {
          ((this.anchor = e), (this.#i = t));
        }
        #a = (e) => {
          if (this.#e.has(e)) {
            var t = this.#e.get(e),
              n = this.#t.get(t);
            if (n) (Er(n), this.#r.delete(t));
            else {
              var r = this.#n.get(t);
              r &&
                (Er(r.effect),
                this.#t.set(t, r.effect),
                this.#n.delete(t),
                r.fragment.lastChild.remove(),
                this.anchor.before(r.fragment),
                (n = r.effect));
            }
            for (let [t, n] of this.#e) {
              if ((this.#e.delete(t), t === e)) break;
              let r = this.#n.get(n);
              r && (xr(r.effect), this.#n.delete(n));
            }
            for (let [e, r] of this.#t) {
              if (e === t || this.#r.has(e)) continue;
              let i = () => {
                if (Array.from(this.#e.values()).includes(e)) {
                  var t = document.createDocumentFragment();
                  (Or(r, t),
                    t.append(Vn()),
                    this.#n.set(e, { effect: r, fragment: t }));
                } else xr(r);
                (this.#r.delete(e), this.#t.delete(e));
              };
              this.#i || !n ? (this.#r.add(e), wr(r, i, !1)) : i();
            }
          }
        };
        #o = (e) => {
          this.#e.delete(e);
          let t = Array.from(this.#e.values());
          for (let [e, n] of this.#n)
            t.includes(e) || (xr(n.effect), this.#n.delete(e));
        };
        ensure(e, t) {
          var n = dn,
            r = Gn();
          if (t && !this.#t.has(e) && !this.#n.has(e)) {
            if (r) {
              var i = document.createDocumentFragment(),
                a = Vn();
              (i.append(a),
                this.#n.set(e, { effect: _r(() => t(a)), fragment: i }));
            } else
              this.#t.set(
                e,
                _r(() => t(this.anchor)),
              );
          }
          if ((this.#e.set(n, e), r)) {
            for (let [t, r] of this.#t)
              t === e ? n.unskip_effect(r) : n.skip_effect(r);
            for (let [t, r] of this.#n)
              t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
            (n.oncommit(this.#a), n.ondiscard(this.#o));
          } else (A && (this.anchor = j), this.#a(n));
        }
      }));
  }),
  ia = o(() => {
    (w(), V(), In(), M(), Ct(), vt(), Cn(), ra(), Ut());
  });
function J(e, t, n = !1) {
  var r;
  A && ((r = j), Re());
  var i = new na(e),
    a = n ? ce : 0;
  function o(e, t) {
    if (A) {
      var n = Ve(r);
      if (e !== parseInt(n.substring(1))) {
        var a = Be();
        (Le(a), (i.anchor = a), Ie(!1), i.ensure(e, t), Ie(!0));
        return;
      }
    }
    i.ensure(e, t);
  }
  hr(() => {
    var e = !1;
    (t((t, n = 0) => {
      ((e = !0), o(n, t));
    }),
      e || o(-1, null));
  }, a);
}
var aa = o(() => {
    (O(), M(), V(), ra());
  }),
  oa = o(() => {
    (vt(), V(), M(), ra());
  }),
  sa = o(() => {
    (V(), M(), $n());
  });
function ca(e, t) {
  return t;
}
function la(e, t, n) {
  for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
    let n = t[s];
    wr(
      n,
      () => {
        if (a) {
          if ((a.pending.delete(n), a.done.add(n), a.pending.size === 0)) {
            var t = e.outrogroups;
            (ua(e, v(a.done)),
              t.delete(a),
              t.size === 0 && (e.outrogroups = null));
          }
        } else --o;
      },
      !1,
    );
  }
  if (o === 0) {
    var c = r.length === 0 && n !== null && e.pending.size === 0;
    if (c) {
      var l = n,
        u = l.parentNode;
      (Wn(u), u.append(l), e.items.clear());
    }
    ua(e, t, !c);
  } else
    ((a = { pending: new Set(t), done: new Set() }),
      (e.outrogroups ??= new Set()).add(a));
}
function ua(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = new Set();
    for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    r?.has(a)
      ? ((a.f |= de), Or(a, document.createDocumentFragment()))
      : xr(t[i], n);
  }
}
function da(e, t, n, r, i, a = null) {
  var o = e,
    s = new Map();
  if (t & 4) {
    var c = e;
    o = A ? Le(Hn(c)) : c.appendChild(Vn());
  }
  A && Re();
  var l = null,
    u = Kt(() => {
      var e = n();
      return h(e) ? e : e == null ? [] : v(e);
    }),
    d,
    f = new Map(),
    p = !0;
  function m(e) {
    _.effect.f & 16384 ||
      (_.pending.delete(e),
      (_.fallback = l),
      pa(_, d, o, t, r),
      l !== null &&
        (d.length === 0
          ? l.f & 33554432
            ? ((l.f ^= de), ha(l, null, o))
            : Er(l)
          : wr(l, () => {
              l = null;
            })));
  }
  function g(e) {
    _.pending.delete(e);
  }
  var _ = {
    effect: hr(() => {
      d = H(u);
      var e = d.length;
      let c = !1;
      A &&
        (Ve(o) === `[!`) != (e === 0) &&
        ((o = Be()), Le(o), Ie(!1), (c = !0));
      for (var h = new Set(), _ = dn, v = Gn(), y = 0; y < e; y += 1) {
        A && j.nodeType === 8 && j.data === `]` && ((o = j), (c = !0), Ie(!1));
        var b = d[y],
          x = r(b, y),
          S = p ? null : s.get(x);
        (S
          ? (S.v && En(S.v, b), S.i && En(S.i, y), v && _.unskip_effect(S.e))
          : ((S = ma(s, p ? o : (_a ??= Vn()), b, x, y, i, t, n)),
            p || (S.e.f |= de),
            s.set(x, S)),
          h.add(x));
      }
      if (
        (e === 0 &&
          a &&
          !l &&
          (p
            ? (l = _r(() => a(o)))
            : ((l = _r(() => a((_a ??= Vn())))), (l.f |= de))),
        e > h.size && Je(``, ``, ``),
        A && e > 0 && Le(Be()),
        !p)
      ) {
        if ((f.set(_, h), v)) {
          for (let [e, t] of s) h.has(e) || _.skip_effect(t.e);
          (_.oncommit(m), _.ondiscard(g));
        } else m(_);
      }
      (c && Ie(!0), H(u));
    }),
    flags: t,
    items: s,
    pending: f,
    outrogroups: null,
    fallback: l,
  };
  ((p = !1), A && (o = j));
}
function fa(e) {
  for (; e !== null && !(e.f & 32);) e = e.next;
  return e;
}
function pa(e, t, n, r, i) {
  var a = !!(r & 8),
    o = t.length,
    s = e.items,
    c = fa(e.effect.first),
    l,
    u = null,
    d,
    f = [],
    p = [],
    m,
    h,
    g,
    _;
  if (a)
    for (_ = 0; _ < o; _ += 1)
      ((m = t[_]),
        (h = i(m, _)),
        (g = s.get(h).e),
        g.f & 33554432 || (g.nodes?.a?.measure(), (d ??= new Set()).add(g)));
  for (_ = 0; _ < o; _ += 1) {
    if (((m = t[_]), (h = i(m, _)), (g = s.get(h).e), e.outrogroups !== null))
      for (let t of e.outrogroups) (t.pending.delete(g), t.done.delete(g));
    if (
      (g.f & 8192 &&
        (Er(g), a && (g.nodes?.a?.unfix(), (d ??= new Set()).delete(g))),
      g.f & 33554432)
    ) {
      if (((g.f ^= de), g === c)) ha(g, null, n);
      else {
        var y = u ? u.next : c;
        (g === e.effect.last && (e.effect.last = g.prev),
          g.prev && (g.prev.next = g.next),
          g.next && (g.next.prev = g.prev),
          ga(e, u, g),
          ga(e, g, y),
          ha(g, y, n),
          (u = g),
          (f = []),
          (p = []),
          (c = fa(u.next)));
        continue;
      }
    }
    if (g !== c) {
      if (l !== void 0 && l.has(g)) {
        if (f.length < p.length) {
          var b = p[0],
            x;
          u = b.prev;
          var S = f[0],
            ee = f[f.length - 1];
          for (x = 0; x < f.length; x += 1) ha(f[x], b, n);
          for (x = 0; x < p.length; x += 1) l.delete(p[x]);
          (ga(e, S.prev, ee.next),
            ga(e, u, S),
            ga(e, ee, b),
            (c = b),
            (u = ee),
            --_,
            (f = []),
            (p = []));
        } else
          (l.delete(g),
            ha(g, c, n),
            ga(e, g.prev, g.next),
            ga(e, g, u === null ? e.effect.first : u.next),
            ga(e, u, g),
            (u = g));
        continue;
      }
      for (f = [], p = []; c !== null && c !== g;)
        ((l ??= new Set()).add(c), p.push(c), (c = fa(c.next)));
      if (c === null) continue;
    }
    (g.f & 33554432 || f.push(g), (u = g), (c = fa(g.next)));
  }
  if (e.outrogroups !== null) {
    for (let t of e.outrogroups)
      t.pending.size === 0 && (ua(e, v(t.done)), e.outrogroups?.delete(t));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || l !== void 0) {
    var te = [];
    if (l !== void 0) for (g of l) g.f & 8192 || te.push(g);
    for (; c !== null;)
      (!(c.f & 8192) && c !== e.fallback && te.push(c), (c = fa(c.next)));
    var ne = te.length;
    if (ne > 0) {
      var C = r & 4 && o === 0 ? n : null;
      if (a) {
        for (_ = 0; _ < ne; _ += 1) te[_].nodes?.a?.measure();
        for (_ = 0; _ < ne; _ += 1) te[_].nodes?.a?.fix();
      }
      la(e, te, C);
    }
  }
  a &&
    bt(() => {
      if (d !== void 0) for (g of d) g.nodes?.a?.apply();
    });
}
function ma(e, t, n, r, i, a, o, s) {
  var c = o & 1 ? (o & 16 ? wn(n) : Tn(n, !1, !1)) : null,
    l = o & 2 ? wn(i) : null;
  return {
    v: c,
    i: l,
    e: _r(
      () => (
        a(t, c ?? n, l ?? i, s),
        () => {
          e.delete(r);
        }
      ),
    ),
  };
}
function ha(e, t, n) {
  if (e.nodes)
    for (
      var r = e.nodes.start,
        i = e.nodes.end,
        a = t && !(t.f & 33554432) ? t.nodes.start : n;
      r !== null;
    ) {
      var o = Un(r);
      if ((a.before(r), r === i)) return;
      r = o;
    }
}
function ga(e, t, n) {
  (t === null ? (e.effect.first = n) : (t.next = n),
    n === null ? (e.effect.last = t) : (n.prev = t));
}
var _a,
  va = o(() => {
    (je(),
      M(),
      $n(),
      V(),
      In(),
      w(),
      O(),
      Ct(),
      U(),
      d(),
      $t(),
      Cn(),
      it(),
      ut());
  });
function ya(e, t, n = !1, r = !1, i = !1, a = !1) {
  var o = e,
    s = ``;
  if (n) {
    var c = e;
    A && (o = Le(Hn(c)));
  }
  B(() => {
    var e = ti;
    if (s === (s = t() ?? ``)) {
      A && Re();
      return;
    }
    if (n && !A) {
      ((e.nodes = null), (c.innerHTML = s), s !== `` && ji(Hn(c), c.lastChild));
      return;
    }
    if (
      (e.nodes !== null && (Sr(e.nodes.start, e.nodes.end), (e.nodes = null)),
      s !== ``)
    ) {
      if (A) {
        for (
          var a = j.data, l = Re(), u = l;
          l !== null && (l.nodeType !== 8 || l.data !== ``);
        )
          ((u = l), (l = Un(l)));
        if (l === null) throw (Ne(), Ee);
        (ji(j, u), (o = Le(l)));
        return;
      }
      var d = Kn(r ? `svg` : i ? `math` : `template`, r ? ke : i ? Ae : void 0);
      d.innerHTML = s;
      var f = r || i ? d : d.content;
      if ((ji(Hn(f), f.lastChild), r || i)) for (; Hn(f);) o.before(Hn(f));
      else o.before(f);
    }
  });
}
var ba = o(() => {
    (je(), V(), M(), Li(), Fe(), mi(), d(), vt(), $n(), U(), O());
  }),
  xa = o(() => {
    (M(), $n(), Li());
  }),
  Sa = o(() => {
    (mi(), Ke());
  }),
  Ca = o(() => {
    (O(), V(), vt(), M(), Ai(), Li(), it(), $n(), Sa(), ra());
  }),
  wa = o(() => {
    (O(), V(), M(), ra());
  }),
  Ta = o(() => {
    w();
  }),
  Ea = o(() => {
    Ta();
  }),
  Da = o(() => {
    (w(), V(), U(), Ea(), Yi(), O(), Ct(), Lt());
  }),
  Oa = o(() => {
    (M(), $n(), V(), Yi(), U(), vt(), O(), Li(), mi(), ra(), Da());
  }),
  ka = o(() => {
    (M(), $n(), V(), O());
  }),
  Aa = o(() => {
    (V(), $n(), U());
  }),
  ja = o(() => {
    (V(), U());
  });
function Ma(e, t) {
  var n = void 0,
    r;
  gr(() => {
    n !== (n = t()) &&
      ((r &&= (xr(r), null)),
      n &&
        (r = _r(() => {
          fr(() => n(e));
        })));
  });
}
var Na = o(() => {
  V();
});
function Pa(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Pa(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function Fa() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Pa(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Ia = o(() => {});
function Y(e) {
  return typeof e == `object` ? Fa(e) : (e ?? ``);
}
function La(e, t, n) {
  var r = e == null ? `` : `` + e;
  if ((t && (r = r ? r + ` ` + t : t), n)) {
    for (var i of Object.keys(n))
      if (n[i]) r = r ? r + ` ` + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
          var s = o + a;
          (o === 0 || Va.includes(r[o - 1])) &&
          (s === r.length || Va.includes(r[s]))
            ? (r = (o === 0 ? `` : r.substring(0, o)) + r.substring(s + 1))
            : (o = s);
        }
  }
  return r === `` ? null : r;
}
function Ra(e, t = !1) {
  var n = t ? ` !important;` : `;`,
    r = ``;
  for (var i of Object.keys(e)) {
    var a = e[i];
    a != null && a !== `` && (r += ` ` + i + `: ` + a + n);
  }
  return r;
}
function za(e) {
  return e[0] !== `-` || e[1] !== `-` ? e.toLowerCase() : e;
}
function Ba(e, t) {
  if (t) {
    var n = ``,
      r,
      i;
    if ((Array.isArray(t) ? ((r = t[0]), (i = t[1])) : (r = t), e)) {
      e = String(e)
        .replaceAll(/\/\*.*?\*\//g, ``)
        .trim();
      var a = !1,
        o = 0,
        s = !1,
        c = [];
      (r && c.push(...Object.keys(r).map(za)),
        i && c.push(...Object.keys(i).map(za)));
      var l = 0,
        u = -1;
      let t = e.length;
      for (var d = 0; d < t; d++) {
        var f = e[d];
        if (
          (s
            ? f === `/` && e[d - 1] === `*` && (s = !1)
            : a
              ? a === f && (a = !1)
              : f === `/` && e[d + 1] === `*`
                ? (s = !0)
                : f === `"` || f === `'`
                  ? (a = f)
                  : f === `(`
                    ? o++
                    : f === `)` && o--,
          !s && a === !1 && o === 0)
        ) {
          if (f === `:` && u === -1) u = d;
          else if (f === `;` || d === t - 1) {
            if (u !== -1) {
              var p = za(e.substring(l, u).trim());
              if (!c.includes(p)) {
                f !== `;` && d++;
                var m = e.substring(l, d).trim();
                n += ` ` + m + `;`;
              }
            }
            ((l = d + 1), (u = -1));
          }
        }
      }
    }
    return (
      r && (n += Ra(r)),
      i && (n += Ra(i, !0)),
      (n = n.trim()),
      n === `` ? null : n
    );
  }
  return e == null ? null : String(e);
}
var Va,
  Ha = o(() => {
    (Ia(),
      w(),
      (Va = [
        ...` 	
\r\f\xA0\v﻿`,
      ]));
  });
function X(e, t, n, r, i, a) {
  var o = e[be];
  if (A || o !== n || o === void 0) {
    var s = La(n, r, a);
    ((!A || s !== e.getAttribute(`class`)) &&
      (s == null
        ? e.removeAttribute(`class`)
        : t
          ? (e.className = s)
          : e.setAttribute(`class`, s)),
      (e[be] = n));
  } else if (a && i !== a)
    for (var c in a) {
      var l = !!a[c];
      (i == null || l !== !!i[c]) && e.classList.toggle(c, l);
    }
  return a;
}
var Ua = o(() => {
  (Ha(), O(), M());
});
function Wa(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a &&
      (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
  }
}
function Ga(e, t, n, r) {
  var i = e[xe];
  if (A || i !== t) {
    var a = Ba(t, r);
    ((!A || a !== e.getAttribute(`style`)) &&
      (a == null ? e.removeAttribute(`style`) : (e.style.cssText = a)),
      (e[xe] = t));
  } else
    r &&
      (Array.isArray(r)
        ? (Wa(e, n?.[0], r[0]), Wa(e, n?.[1], r[1], `important`))
        : Wa(e, n, r));
  return r;
}
var Ka = o(() => {
    (Ha(), O(), M());
  }),
  qa = o(() => {
    (V(), Lt(), Rn(), w(), Cn());
  });
function Ja(e) {
  if (A) {
    var t = !1,
      n = () => {
        if (!t) {
          if (((t = !0), e.hasAttribute(`value`))) {
            var n = e.value;
            (Z(e, `value`, null), (e.value = n));
          }
          if (e.hasAttribute(`checked`)) {
            var r = e.checked;
            (Z(e, `checked`, null), (e.checked = r));
          }
        }
      };
    ((e[Ce] = n), bt(n), Mt());
  }
}
function Ya(e, t) {
  var n = Za(e);
  n.value !== (n.value = t ?? void 0) &&
    (e.value !== t || (t === 0 && e.nodeName === no)) &&
    (e.value = t ?? ``);
}
function Xa(e, t) {
  var n = Za(e);
  n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function Z(e, t, n, r) {
  var i = Za(e);
  (A &&
    ((i[t] = e.getAttribute(t)),
    t === `src` || t === `srcset` || (t === `href` && e.nodeName === to))) ||
    (i[t] !== (i[t] = n) &&
      (t === `loading` && (e[ve] = n),
      n == null
        ? e.removeAttribute(t)
        : typeof n != `string` && Qa(e).has(t)
          ? (e[t] = n)
          : e.setAttribute(t, n)));
}
function Za(e) {
  return (e[ye] ??= {
    [$a]: e.nodeName.includes(`-`),
    [eo]: e.namespaceURI === Oe,
  });
}
function Qa(e) {
  var t = e.getAttribute(`is`) || e.nodeName,
    n = ro.get(t);
  if (n) return n;
  ro.set(t, (n = new Set()));
  for (var r, i = e, a = Element.prototype; a !== i;) {
    for (var o in ((r = x(i)), r))
      r[o].set &&
        o !== `innerHTML` &&
        o !== `textContent` &&
        o !== `innerText` &&
        n.add(o);
    i = te(i);
  }
  return n;
}
var $a,
  eo,
  to,
  no,
  ro,
  io = o(() => {
    (d(),
      M(),
      w(),
      Ei(),
      Pt(),
      Fe(),
      O(),
      Ct(),
      mi(),
      U(),
      Na(),
      Ha(),
      Ua(),
      Ka(),
      je(),
      V(),
      qa(),
      Ut(),
      ($a = Symbol(`is custom element`)),
      (eo = Symbol(`is html`)),
      (to = Te ? `link` : `LINK`),
      (no = Te ? `progress` : `PROGRESS`),
      (ro = new Map()));
  }),
  ao = o(() => {
    (M(), $n(), Ai(), Na());
  }),
  oo = o(() => {
    Lt();
  });
function so(e, t, n = t) {
  var r = new WeakSet();
  (It(e, `input`, async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (
      ((a = co(e) ? lo(a) : a),
      n(a),
      dn !== null && r.add(dn),
      await Gr(),
      a !== (a = t()))
    ) {
      var o = e.selectionStart,
        s = e.selectionEnd,
        c = e.value.length;
      if (((e.value = a ?? ``), s !== null)) {
        var l = e.value.length;
        o === s && s === c && l > c
          ? ((e.selectionStart = l), (e.selectionEnd = l))
          : ((e.selectionStart = o), (e.selectionEnd = Math.min(s, l)));
      }
    }
  }),
    ((A && e.defaultValue !== e.value) || (Jr(t) == null && e.value)) &&
      (n(co(e) ? lo(e.value) : e.value), dn !== null && r.add(dn)),
    mr(() => {
      var n = t();
      if (e === (__env.root?.activeElement ?? document.activeElement)) {
        var i = ot ? fn : dn;
        if (r.has(i)) return;
      }
      (co(e) && n === lo(e.value)) ||
        ((e.type !== `date` || n || e.value) &&
          n !== e.value &&
          (e.value = n ?? ``));
    }));
}
function co(e) {
  var t = e.type;
  return t === `number` || t === `range`;
}
function lo(e) {
  return e === `` ? null : +e;
}
var uo = o(() => {
    (d(), V(), Lt(), it(), Rn(), Ct(), M(), U(), Cn(), ct());
  }),
  fo = o(() => {
    (V(), Lt());
  }),
  po = o(() => {
    Lt();
  }),
  mo = o(() => {
    (V(), w());
  }),
  ho = o(() => {
    (V(), U());
  });
function go(e, t) {
  return e === t || e?.[he] === t;
}
function _o(e = ht(), t, n, r) {
  var i = _t.r,
    a = ti;
  return (
    fr(() => {
      var o, s;
      return (
        mr(() => {
          ((o = s),
            (s = r?.() || []),
            Jr(() => {
              go(n(...s), e) ||
                (t(e, ...s), o && go(n(...o), e) && t(null, ...o));
            }));
        }),
        () => {
          let r = a;
          for (; r !== i && r.parent !== null && r.parent.f & 33554432;)
            r = r.parent;
          let o = () => {
              s && go(n(...s), e) && t(null, ...s);
            },
            c = r.teardown;
          r.teardown = () => {
            (o(), c?.());
          };
        }
      );
    }),
    e
  );
}
var vo = o(() => {
    (O(), vt(), V(), U());
  }),
  yo = o(() => {
    (V(), Lt());
  }),
  bo = o(() => {
    (V(), Lt());
  }),
  xo = o(() => {
    (w(), V(), Ei());
  });
function So(e = !1) {
  let t = _t,
    n = t.l.u;
  if (!n) return;
  let r = () => Yr(t.s);
  if (e) {
    let e = 0,
      n = {},
      i = Wt(() => {
        let r = !1,
          i = t.s;
        for (let e in i) i[e] !== n[e] && ((n[e] = i[e]), (r = !0));
        return (r && e++, e);
      });
    r = () => H(i);
  }
  (n.b.length &&
    ur(() => {
      (Co(t, r), p(n.b));
    }),
    cr(() => {
      let e = Jr(() => n.m.map(f));
      return () => {
        for (let t of e) typeof t == `function` && t();
      };
    }),
    n.a.length &&
      cr(() => {
        (Co(t, r), p(n.a));
      }));
}
function Co(e, t) {
  if (e.l.s) for (let t of e.l.s) H(t);
  t();
}
var wo = o(() => {
    (w(), vt(), $t(), V(), U());
  }),
  To = o(() => {
    (In(), U(), w());
  }),
  Eo = o(() => {
    (U(), w());
  }),
  Do = o(() => {
    (w(), Eo());
  });
function Oo(e) {
  var t = ko;
  try {
    return ((ko = !1), [e(), ko]);
  } finally {
    ko = t;
  }
}
var ko,
  Ao = o(() => {
    (Eo(), Do(), w(), U(), V(), In(), (ko = !1));
  });
function jo(e, t, n, r) {
  var i = !st || !!(n & 2),
    a = !!(n & 8),
    o = !!(n & 16),
    s = r,
    c = !0,
    l = void 0,
    u = () =>
      o && i
        ? ((l ??= Wt(r)), H(l))
        : (c && ((c = !1), (s = o ? Jr(r) : r)), s);
  let d;
  if (a) {
    var f = he in e || _e in e;
    d = b(e, t)?.set ?? (f && t in e ? (n) => (e[t] = n) : void 0);
  }
  var p,
    m = !1;
  (a ? ([p, m] = Oo(() => e[t])) : (p = e[t]),
    p === void 0 && r !== void 0 && ((p = u()), d && (i && $e(t), d(p))));
  var h = i
    ? () => {
        var n = e[t];
        return n === void 0 ? u() : ((c = !0), n);
      }
    : () => {
        var n = e[t];
        return (n !== void 0 && (s = void 0), n === void 0 ? s : n);
      };
  if (i && !(n & 4)) return h;
  if (d) {
    var g = e.$$legacy;
    return function (e, t) {
      return arguments.length > 0
        ? ((!i || !t || g || m) && d(t ? h() : e), e)
        : h();
    };
  }
  var _ = !1,
    v = (n & 1 ? Wt : Kt)(() => ((_ = !1), h()));
  a && H(v);
  var y = ti;
  return function (e, t) {
    if (arguments.length > 0) {
      let n = t ? H(v) : i && a ? Ln(e) : e;
      return (F(v, n), (_ = !0), s !== void 0 && (s = n), e);
    }
    return (Qr && _) || y.f & 16384 ? v.v : H(v);
  };
}
var Mo = o(() => {
    (d(), je(), w(), In(), $t(), U(), it(), O(), Rn(), Ao(), ct(), V());
  }),
  No = o(() => {
    (vt(), V(), Ao(), Ut());
  }),
  Po = o(() => {
    (O(), V(), In(), Yi(), U(), Cn(), w(), it(), vt(), ct(), Dt(), xo());
  }),
  Fo = o(() => {
    (Po(), V(), Li(), w(), $n());
  }),
  Io = o(() => {
    (O(), lt(), U());
  }),
  Lo = o(() => {
    (li(),
      je(),
      vt(),
      hi(),
      gi(),
      Xi(),
      Zi(),
      Qi(),
      ut(),
      $i(),
      ea(),
      ta(),
      ia(),
      aa(),
      oa(),
      sa(),
      va(),
      ba(),
      xa(),
      Ca(),
      wa(),
      Oa(),
      ka(),
      Aa(),
      ja(),
      Na(),
      io(),
      Ua(),
      Ei(),
      Pt(),
      ao(),
      Ka(),
      Da(),
      oo(),
      uo(),
      fo(),
      po(),
      mo(),
      qa(),
      ho(),
      vo(),
      yo(),
      bo(),
      M(),
      xo(),
      wo(),
      To(),
      Li(),
      Ut(),
      Cn(),
      $t(),
      V(),
      In(),
      Mo(),
      Ao(),
      Ui(),
      Ar(),
      Yi(),
      U(),
      No(),
      Ta(),
      Rn(),
      Fo(),
      $n(),
      Ha(),
      lt(),
      w(),
      Sa(),
      zn(),
      Io());
  }),
  Ro = o(() => {
    (M(), it());
  }),
  zo = o(() => {
    (U(), w(), Lo(), it(), vt(), d(), Cn(), Ro(), Yi(), Ca());
  }),
  Bo = o(() => {}),
  Vo = o(() => {
    (Bo(),
      typeof window < `u` &&
        ((window.__svelte ??= {}).v ??= new Set()).add(`5`));
  }),
  Ho = o(() => {
    (Lo(), In(), ut(), U());
  }),
  Uo,
  Wo,
  Go,
  Ko,
  qo = o(() => {
    (d(),
      In(),
      ut(),
      U(),
      (Uo = [`forEach`, `isDisjointFrom`, `isSubsetOf`, `isSupersetOf`]),
      (Wo = [`difference`, `intersection`, `symmetricDifference`, `union`]),
      (Go = !1),
      (Ko = class e extends Set {
        #e = new Map();
        #t = P(0);
        #n = P(0);
        #r = ci || -1;
        constructor(e) {
          if ((super(), e)) {
            for (var t of e) super.add(t);
            this.#n.v = super.size;
          }
          Go || this.#a();
        }
        #i(e) {
          return ci === this.#r ? P(e) : wn(e);
        }
        #a() {
          Go = !0;
          var t = e.prototype,
            n = Set.prototype;
          for (let e of Uo)
            t[e] = function (...t) {
              return (H(this.#t), n[e].apply(this, t));
            };
          for (let r of Wo)
            t[r] = function (...t) {
              H(this.#t);
              var i = n[r].apply(this, t);
              return new e(i);
            };
        }
        has(e) {
          var t = super.has(e),
            n = this.#e,
            r = n.get(e);
          if (r === void 0) {
            if (!t) return (H(this.#t), !1);
            ((r = this.#i(!0)), n.set(e, r));
          }
          return (H(r), t);
        }
        add(e) {
          return (
            super.has(e) || (super.add(e), F(this.#n, super.size), kn(this.#t)),
            this
          );
        }
        delete(e) {
          var t = super.delete(e),
            n = this.#e,
            r = n.get(e);
          return (
            r !== void 0 && (n.delete(e), F(r, !1)),
            t && (F(this.#n, super.size), kn(this.#t)),
            t
          );
        }
        clear() {
          if (super.size !== 0) {
            super.clear();
            var e = this.#e;
            for (var t of e.values()) F(t, !1);
            (e.clear(), F(this.#n, 0), kn(this.#t));
          }
        }
        keys() {
          return this.values();
        }
        values() {
          return (H(this.#t), super.values());
        }
        entries() {
          return (H(this.#t), super.entries());
        }
        [Symbol.iterator]() {
          return this.keys();
        }
        get size() {
          return H(this.#n);
        }
      }));
  }),
  Jo,
  Yo = o(() => {
    (d(),
      In(),
      ut(),
      U(),
      (Jo = class extends Map {
        #e = new Map();
        #t = P(0);
        #n = P(0);
        #r = ci || -1;
        constructor(e) {
          if ((super(), e)) {
            for (var [t, n] of e) super.set(t, n);
            this.#n.v = super.size;
          }
        }
        #i(e) {
          return ci === this.#r ? P(e) : wn(e);
        }
        has(e) {
          var t = this.#e,
            n = t.get(e);
          if (n === void 0) {
            if (super.has(e)) ((n = this.#i(0)), t.set(e, n));
            else return (H(this.#t), !1);
          }
          return (H(n), !0);
        }
        forEach(e, t) {
          (this.#a(), super.forEach(e, t));
        }
        get(e) {
          var t = this.#e,
            n = t.get(e);
          if (n === void 0) {
            if (super.has(e)) ((n = this.#i(0)), t.set(e, n));
            else {
              H(this.#t);
              return;
            }
          }
          return (H(n), super.get(e));
        }
        getOrInsert(e, t) {
          return (super.has(e) || this.set(e, t), this.get(e));
        }
        getOrInsertComputed(e, t) {
          return (super.has(e) || this.set(e, t(e)), this.get(e));
        }
        set(e, t) {
          var n = this.#e,
            r = n.get(e),
            i = super.get(e),
            a = super.set(e, t),
            o = this.#t;
          if (r === void 0)
            ((r = this.#i(0)), n.set(e, r), F(this.#n, super.size), kn(o));
          else if (i !== t) {
            kn(r);
            var s = o.reactions === null ? null : new Set(o.reactions);
            (s === null || !r.reactions?.every((e) => s.has(e))) && kn(o);
          }
          return a;
        }
        delete(e) {
          var t = this.#e,
            n = t.get(e),
            r = super.delete(e);
          return (
            n !== void 0 && (t.delete(e), F(n, -1)),
            r && (F(this.#n, super.size), kn(this.#t)),
            r
          );
        }
        clear() {
          if (super.size !== 0) {
            super.clear();
            var e = this.#e;
            F(this.#n, 0);
            for (var t of e.values()) F(t, -1);
            (kn(this.#t), e.clear());
          }
        }
        #a() {
          H(this.#t);
          var e = this.#e;
          if (this.#n.v !== e.size) {
            for (var t of super.keys())
              if (!e.has(t)) {
                var n = this.#i(0);
                e.set(t, n);
              }
          }
          for ([, n] of this.#e) H(n);
        }
        keys() {
          return (H(this.#t), super.keys());
        }
        values() {
          return (this.#a(), super.values());
        }
        entries() {
          return (this.#a(), super.entries());
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        get size() {
          return (H(this.#n), super.size);
        }
      }));
  }),
  Xo = o(() => {
    (In(), ut(), U(), Zo());
  }),
  Zo = o(() => {
    (In(), ut(), U(), Xo());
  }),
  Qo = o(() => {
    Ei();
  }),
  $o = o(() => {
    zi();
  }),
  es = o(() => {
    (Qo(), $o());
  }),
  ts = o(() => {
    (Ho(), qo(), Yo(), Zo(), Xo(), es(), zi());
  });
function ns() {
  return {
    items: [],
    meta: { connection: { state: `idle` }, busy: !1, turn: 0 },
  };
}
function rs(e, t) {
  if (t.length === 0) return e;
  let n = e.items,
    r = e.meta,
    i = null,
    a = (e) => {
      if (!i) {
        let e = new Map();
        for (let t = 0; t < n.length; t++) e.set(n[t].id, t);
        i = e;
      }
      return i.get(e) ?? -1;
    },
    o = !1,
    s = () => ((o ||= ((n = n.slice()), !0)), n);
  for (let e of t)
    switch (e.op) {
      case `add`: {
        if (a(e.item.id) !== -1) break;
        let t = s();
        (t.push(e.item), i?.set(e.item.id, t.length - 1));
        break;
      }
      case `append`: {
        let t = a(e.id);
        if (t === -1) break;
        let r = n[t];
        if (!r || !(`text` in r)) break;
        s()[t] = { ...r, text: r.text + e.text };
        break;
      }
      case `replace`: {
        let t = a(e.item.id);
        if (t === -1) break;
        s()[t] = e.item;
        break;
      }
      case `meta`: {
        let t = { ...r };
        for (let [n, r] of Object.entries(e.patch))
          r === null ? delete t[n] : r !== void 0 && (t[n] = r);
        r = t;
        break;
      }
      case `clear`:
        ((n = []), (o = !0), (i = new Map()));
    }
  return n === e.items && r === e.meta ? e : { items: n, meta: r };
}
var is = o(() => {});
function as(e, t) {
  return e.trim() === `` || e === t;
}
var os = o(() => {});
function ss(e) {
  let t = e.newThisWeek,
    n = e.improvedThisWeek;
  return t && n
    ? `This week Hermes learned ${vs(t, `skill`)} and improved ${n}`
    : t
      ? `This week Hermes learned ${vs(t, `skill`)}`
      : n
        ? `This week Hermes improved ${vs(n, `skill`)}`
        : `Nothing new this week`;
}
function cs(e) {
  let t = e.target === `user` ? `About you` : `Notes`,
    n =
      e.action === `add`
        ? `Add to ${t}`
        : e.action === `replace`
          ? `Rewrite in ${t}`
          : e.action === `remove`
            ? `Remove from ${t}`
            : `Change ${t}`;
  return e.more ? `${n} (+${e.more} more)` : n;
}
function ls(e) {
  let t = [],
    n = new Map();
  for (let r of e) {
    if (!r.group) {
      t.push({ kind: `one`, row: r });
      continue;
    }
    let e = n.get(r.group);
    if (e) e.push(r);
    else {
      let e = [r];
      (n.set(r.group, e), t.push({ kind: `pick`, group: r.group, rows: e }));
    }
  }
  return t.map((e) =>
    e.kind === `pick` && e.rows.length === 1
      ? { kind: `one`, row: e.rows[0] }
      : e,
  );
}
function us(e, t) {
  if (e) {
    let t = e.target === `user` ? `About you` : `Notes`;
    return e.action === `add`
      ? `Added to ${t}.`
      : e.action === `remove`
        ? `Removed from ${t}.`
        : `Changed in ${t}.`;
  }
  return t === 1 ? `Rejected.` : `Rejected ${t} changes.`;
}
function ds(e, t, n) {
  let r = n.trim().toLowerCase();
  return e.filter(
    (e) =>
      (t === `all` || e.source === t) &&
      (!r ||
        e.name.toLowerCase().includes(r) ||
        (e.category ?? ``).toLowerCase().includes(r) ||
        (e.description ?? ``).toLowerCase().includes(r)),
  );
}
function fs(e, t) {
  return e === `completed`
    ? `done`
    : e === `failed`
      ? `failed`
      : e === `running`
        ? `running`
        : t
          ? `waiting`
          : `unknown`;
}
function ps(e) {
  let t = e.tasks.filter((e) => e.status === `failed`).length;
  return t
    ? `${vs(e.tasks.length, `task`)}, ${t} failed`
    : vs(e.tasks.length, `task`);
}
var ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss = o(() => {
    ((ms = [
      { id: `chat`, label: `Chat` },
      { id: `learning`, label: `Learning` },
      { id: `memory`, label: `Memory` },
      { id: `capabilities`, label: `Capabilities` },
      { id: `agents`, label: `Agents` },
      { id: `terminal`, label: `Terminal` },
    ]),
      (hs = (e) => ms.some((t) => t.id === e)),
      (gs = (e) => `hs-tab-${e}`),
      (_s = (e) => `hs-panel-${e}`),
      (vs = (e, t, n = `${t}s`) => `${e} ${e === 1 ? t : n}`),
      (ys = (e) => (e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e))),
      (bs = {
        official: `★ Official`,
        trusted: `Trusted`,
        community: `Community`,
      }),
      (xs = [
        { id: `learned`, label: `Learned` },
        { id: `hub`, label: `Skills Hub` },
        { id: `local`, label: `Your own` },
        { id: `builtin`, label: `Built in` },
      ]));
  });
function Cs(e, t) {
  let n = new Map(e.items.map((e) => [e.id, e])),
    r = [];
  for (let e of t) {
    if (e.op === `clear`) {
      n.clear();
      continue;
    }
    if (e.op === `add`) {
      n.has(e.item.id) || n.set(e.item.id, e.item);
      continue;
    }
    if (e.op !== `replace`) continue;
    let t = n.get(e.item.id);
    (n.set(e.item.id, e.item),
      e.item.kind === `user` &&
        e.item.notSent &&
        (t?.kind !== `user` || t.notSent || r.push(e.item.text)));
  }
  return r;
}
var ws = o(() => {});
function Ts(e, levels = Ds, supported = true) {
  if (!supported) return `Not supported by this model`;
  return e === null || e === ``
    ? `Medium (default)`
    : (levels.find((t) => t.id === e)?.label ?? Os[e] ?? e);
}
function Es(e, levels = Ds) {
  let t = e || `medium`,
    n = levels.findIndex((x) => x.id === t);
  return n >= 0 ? n + 1 : t === `minimal` ? 1 : t === `ultra` ? levels.length : 1;
}
var Ds,
  Os,
  ks = o(() => {
    ((Ds = [
      { id: `low`, label: `Low` },
      { id: `medium`, label: `Medium` },
      { id: `high`, label: `High` },
      { id: `xhigh`, label: `Extra high` },
      { id: `max`, label: `Max` },
    ]),
      (Os = {
        minimal: `Minimal`,
        ultra: `Ultra`,
        none: `Off`,
        false: `Off`,
        disabled: `Off`,
      }));
  }),
  As,
  js,
  Ms = o(() => {
    ((As = new Set([`image/png`, `image/jpeg`, `image/gif`, `image/webp`])),
      (js = 2e5));
  });
function Ns(e) {
  if (e && As.has(e.mimeType) && /^[A-Za-z0-9+/]+={0,2}$/.test(e.data))
    return `data:${e.mimeType};base64,${e.data}`;
}
async function Ps(e, t = 32) {
  let n = new Image();
  n.src = e;
  try {
    await n.decode();
  } catch {
    return;
  }
  let r = n.naturalWidth,
    i = n.naturalHeight;
  if (!r || !i) return;
  let a = Math.min(r, i),
    o = document.createElement(`canvas`);
  ((o.width = t), (o.height = t));
  let s = o.getContext(`2d`);
  if (s)
    return (
      (s.imageSmoothingQuality = `high`),
      s.drawImage(n, (r - a) / 2, (i - a) / 2, a, a, 0, 0, t, t),
      o.toDataURL(`image/png`)
    );
}
var Fs = o(() => {
  Ms();
});
function Q(e) {
  zs.postMessage(e);
}
function Is() {
  let e = zs.getState();
  if (typeof e != `object` || !e) return;
  let { draft: t, tab: n } = e;
  return {
    draft: typeof t == `string` ? t : ``,
    ...(typeof n == `string` ? { tab: n } : {}),
  };
}
function Ls(e) {
  zs.setState(e);
}
function Rs(e) {
  return __env.onHostMessage(e);
}
var zs,
  Bs = o(() => {
    zs = __env.vscodeApi;
  }),
  Vs,
  $,
  Hs = o(() => {
    (Lo(),
      zo(),
      ts(),
      is(),
      os(),
      Ss(),
      ws(),
      Fs(),
      Bs(),
      (Vs = class {
        #e = P(ns());
        get model() {
          return H(this.#e);
        }
        set model(e) {
          F(this.#e, e);
        }
        #t = P(Ln(Is()?.draft ?? ``));
        #n;
        #r = P(!0);
        get here() {
          return H(this.#r);
        }
        set here(e) {
          F(this.#r, e, !0);
        }
        #i;
        #a;
        sendQueuedNow(e) {
          Q({ type: `queueSendNow`, id: e });
        }
        removeQueued(e) {
          Q({ type: `queueRemove`, id: e });
        }
        editQueued(e) {
          Q({ type: `queueRemove`, id: e.id, restore: !0 });
          let t = (e.chips ?? [])
            .filter((e) => e.kind === `skill`)
            .map((e) => `/${e.label}`);
          (this.#o(t.length ? `${t.join(` `)} ${e.text}` : e.text, void 0),
            this.focusComposer());
        }
        #o(e, t) {
          ((this.draft = H(this.#t).trim() ? `${e}\n\n${H(this.#t)}` : e),
            t && !H(this.#M) && (this.skill = t));
        }
        showChat() {
          Q({ type: `showChat` });
        }
        moveChatHere() {
          Q({ type: `moveChatHere` });
        }
        #s = P(Ln(((e) => (hs(e) ? e : `chat`))(Is()?.tab)));
        #c = P(null);
        get panels() {
          return H(this.#c);
        }
        set panels(e) {
          F(this.#c, e);
        }
        get tab() {
          return H(this.#s);
        }
        setTab(e) {
          e !== H(this.#s) &&
            ((this.menu = null),
            (this.sessionsOpen = !1),
            (this.#b = null),
            (this.preview = null),
            F(this.#s, e, !0),
            this.#v(),
            e !== `chat` && (Q({ type: `refreshPanels` }), this.#_()));
        }
        openPanel(e) {
          e && Q({ type: `panelOpen`, key: e });
        }
        #l = P(!1);
        get refreshing() {
          return H(this.#l);
        }
        set refreshing(e) {
          F(this.#l, e, !0);
        }
        #u;
        refreshPanels() {
          ((this.refreshing = !0),
            Q({ type: `refreshPanels` }),
            clearTimeout(this.#u),
            (this.#u = setTimeout(() => (this.refreshing = !1), 8e3)));
        }
        reviewing = new Jo();
        #d = P(null);
        get reviewNote() {
          return H(this.#d);
        }
        set reviewNote(e) {
          F(this.#d, e);
        }
        #f = P(!1);
        get reviewUnavailable() {
          return H(this.#f);
        }
        set reviewUnavailable(e) {
          F(this.#f, e, !0);
        }
        #p = new Map();
        #m;
        reviewMemory(e, t, n) {
          let r = [...(e ? [e] : []), ...t];
          if (!(r.length === 0 || r.some((e) => this.reviewing.has(e)))) {
            for (let t of r)
              this.reviewing.set(t, t === e ? `approve` : `reject`);
            (this.#p.set(r.join(` `), n),
              (this.reviewNote = null),
              Q({
                type: `memoryReview`,
                ...(e ? { approve: e } : {}),
                reject: [...t],
              }));
          }
        }
        #h = P({ items: [], loading: !1, asked: !1 });
        get hub() {
          return H(this.#h);
        }
        set hub(e) {
          F(this.#h, e);
        }
        #g = 0;
        installs = new Jo();
        searchHub(e, t) {
          ((this.hub = { ...this.hub, loading: !0, asked: !0 }),
            Q({ type: `hubSearch`, query: e, official: t, seq: ++this.#g }));
        }
        installSkill(e) {
          this.installs.get(e)?.state !== `installing` &&
            (this.installs.set(e, { state: `installing` }),
            Q({ type: `hubInstall`, identifier: e }));
        }
        #_() {
          H(this.#s) === `learning` &&
            (this.panels?.learning.unseen ?? 0) > 0 &&
            Q({ type: `panelSeen` });
        }
        #v() {
          Ls({ draft: H(this.#t), tab: H(this.#s) });
        }
        #y = P(!1);
        get sessionsOpen() {
          return H(this.#y);
        }
        set sessionsOpen(e) {
          F(this.#y, e, !0);
        }
        #b = null;
        #x = P(null);
        get menu() {
          return H(this.#x);
        }
        set menu(e) {
          F(this.#x, e, !0);
        }
        #S = P({ items: [], loading: !1 });
        get sessions() {
          return H(this.#S);
        }
        set sessions(e) {
          F(this.#S, e);
        }
        #C = P([]);
        get background() {
          return H(this.#C);
        }
        set background(e) {
          F(this.#C, e);
        }
        #w = P({ byProvider: {}, loading: [] });
        get accountUsage() {
          return H(this.#w);
        }
        set accountUsage(e) {
          F(this.#w, e);
        }
        #T = P({ info: null, loading: !1 });
        get contextInfo() {
          return H(this.#T);
        }
        set contextInfo(e) {
          F(this.#T, e);
        }
        requestContextInfo() {
          ((this.contextInfo = { ...this.contextInfo, loading: !0 }),
            Q({ type: `contextInfo` }));
        }
        #E = P({ value: null, loading: !1, saving: !1 });
        get effort() {
          return H(this.#E);
        }
        set effort(e) {
          F(this.#E, e);
        }
        refreshEffort() {
          Q({ type: `refreshEffort` });
        }
        setEffort(e) {
          Q({ type: `setEffort`, level: e });
        }
        #D = P(null);
        get editor() {
          return H(this.#D);
        }
        set editor(e) {
          F(this.#D, e);
        }
        toggleEditor() {
          Q({ type: `toggleEditorContext` });
        }
        #O = P({ items: [], images: !0 });
        get context() {
          return H(this.#O);
        }
        set context(e) {
          F(this.#O, e);
        }
        addContext(e) {
          ((this.menu = null), Q({ type: `addContext`, kind: e }));
        }
        removeContext(e) {
          Q({ type: `removeContext`, id: e });
        }
        #k = P(null);
        get preview() {
          return H(this.#k);
        }
        set preview(e) {
          F(this.#k, e);
        }
        #A = null;
        thumbs = new Jo();
        #j = new Set();
        wantThumb(e) {
          this.thumbs.has(e) ||
            this.#j.has(e) ||
            (this.#j.add(e), Q({ type: `previewImage`, id: e }));
        }
        openImage(e) {
          e.id &&
            ((this.#A =
              (__env.root?.activeElement ?? document.activeElement) instanceof HTMLElement
                ? (__env.root?.activeElement ?? document.activeElement)
                : null),
            (this.preview = {
              id: e.id,
              label: e.label,
              ...(e.size ? { size: e.size } : {}),
            }),
            Q({ type: `previewImage`, id: e.id }));
        }
        closeImage() {
          this.preview = null;
          let e = this.#A;
          ((this.#A = null), Gr().then(() => e?.isConnected && e.focus()));
        }
        openSessions() {
          ((this.preview = null),
            (this.menu = null),
            this.sessionsOpen ||
              (this.#b =
                (__env.root?.activeElement ?? document.activeElement) instanceof HTMLElement
                  ? (__env.root?.activeElement ?? document.activeElement)
                  : null),
            (this.sessionsOpen = !0),
            this.refreshSessions());
        }
        toggleSessions() {
          this.sessionsOpen
            ? this.closeSessions(`escape`)
            : this.openSessions();
        }
        closeSessions(e) {
          if (!this.sessionsOpen) return;
          this.sessionsOpen = !1;
          let t = this.#b;
          ((this.#b = null),
            e === `escape` && t?.isConnected
              ? t.focus()
              : (e === `pick` || (e === `escape` && !t)) &&
                this.focusComposer());
        }
        refreshSessions() {
          Q({ type: `listSessions` });
        }
        #M = P(null);
        get skill() {
          return H(this.#M);
        }
        set skill(e) {
          (F(this.#M, e, !0), this.#z());
        }
        #N = P({ seq: 0, items: [] });
        get fileResults() {
          return H(this.#N);
        }
        set fileResults(e) {
          F(this.#N, e);
        }
        #P = 0;
        searchFiles(e) {
          Q({ type: `fileSearch`, query: e, seq: ++this.#P });
        }
        mentionFile(e) {
          Q({ type: `mentionFile`, path: e });
        }
        files = new Jo();
        #F = new Set();
        checkPaths(e) {
          let t = [...new Set(e)].filter((e) => !this.#F.has(e)).slice(0, 50);
          if (t.length !== 0) {
            for (let e of t) this.#F.add(e);
            Q({ type: `checkPaths`, paths: t });
          }
        }
        #I() {
          for (let [e, t] of this.files)
            t || (this.files.delete(e), this.#F.delete(e));
        }
        #L = P(null);
        get sessionAction() {
          return H(this.#L);
        }
        set sessionAction(e) {
          F(this.#L, e);
        }
        #R;
        renameSession(e, t) {
          Q({ type: `renameSession`, sessionId: e, title: t });
        }
        deleteSession(e) {
          Q({ type: `deleteSession`, sessionId: e });
        }
        moreSessions() {
          let e = this.sessions.nextCursor;
          e && !this.sessions.loading && Q({ type: `listSessions`, cursor: e });
        }
        openSession(e) {
          (this.closeSessions(`pick`),
            e !== this.model.meta.sessionId &&
              Q({ type: `openSession`, sessionId: e }));
        }
        get draft() {
          return H(this.#t);
        }
        set draft(e) {
          (F(this.#t, e, !0), this.#v(), this.#z());
        }
        #z() {
          this.here &&
            (clearTimeout(this.#a),
            (this.#a = setTimeout(() => this.#B(), 200)));
        }
        #B() {
          ((this.#a = void 0),
            Q({
              type: `draft`,
              text: H(this.#t),
              ...(H(this.#M) ? { skill: H(this.#M) } : {}),
            }));
        }
        focusComposer() {
          this.#n?.focus();
        }
        registerComposer(e) {
          return (
            (this.#n = e),
            () => {
              this.#n === e && (this.#n = void 0);
            }
          );
        }
        apply(e) {
          switch (e.type) {
            case `init`:
              Array.isArray(e.model?.items) &&
                typeof e.model.meta == `object` &&
                (this.model = e.model);
              break;
            case `ops`: {
              let t = this.model;
              ((this.model = rs(t, e.ops)),
                this.#V(t, e.ops),
                t.meta.busy && !this.model.meta.busy && this.#I());
              break;
            }
            case `paths`:
              if (e.known && typeof e.known == `object`)
                for (let [t, n] of Object.entries(e.known))
                  this.files.set(t, n === !0);
              break;
            case `focusComposer`:
              (this.setTab(`chat`),
                (this.sessionsOpen = !1),
                (this.preview = null),
                Gr().then(() => this.#n?.focus()));
              break;
            case `sessions`:
              Array.isArray(e.list?.items) && (this.sessions = e.list);
              break;
            case `showSessions`:
              H(this.#s) === `chat`
                ? this.toggleSessions()
                : (this.setTab(`chat`), this.openSessions());
              break;
            case `showTab`:
              hs(e.tab) && this.setTab(e.tab);
              break;
            case `background`:
              Array.isArray(e.sessions) && (this.background = e.sessions);
              break;
            case `fileResults`:
              Array.isArray(e.items) &&
                e.seq === this.#P &&
                (this.fileResults = { seq: e.seq, items: e.items });
              break;
            case `sessionAction`:
              if (!e.result || typeof e.result.message != `string`) break;
              ((this.sessionAction = e.result),
                clearTimeout(this.#R),
                e.result.ok &&
                  (this.#R = setTimeout(
                    () => (this.sessionAction = null),
                    5e3,
                  )));
              break;
            case `panels`:
              (e.view &&
                typeof e.view == `object` &&
                Array.isArray(e.view.learning?.items) &&
                ((this.panels = e.view), this.#_()),
                (this.refreshing = !1));
              break;
            case `memoryReviewed`: {
              if (!Array.isArray(e.ids)) break;
              for (let t of e.ids) this.reviewing.delete(t);
              let t = e.ids.join(` `),
                n = this.#p.get(t);
              (this.#p.delete(t),
                (this.reviewNote = e.ok
                  ? { ok: !0, text: n ?? `Done.` }
                  : {
                      ok: !1,
                      text: e.message ?? `Hermes couldn't answer it.`,
                    }),
                e.unavailable && (this.reviewUnavailable = !0),
                clearTimeout(this.#m),
                e.ok &&
                  (this.#m = setTimeout(() => (this.reviewNote = null), 8e3)));
              break;
            }
            case `hubResults`:
              e.seq === this.#g &&
                Array.isArray(e.items) &&
                (this.hub = {
                  items: e.items,
                  loading: !1,
                  asked: !0,
                  ...(e.error ? { error: e.error } : {}),
                });
              break;
            case `hubInstalled`:
              if (typeof e.identifier != `string`) break;
              this.installs.set(
                e.identifier,
                e.ok
                  ? { state: `installed` }
                  : { state: `failed`, message: e.message ?? `Not installed.` },
              );
              break;
            case `contextInfo`:
              this.contextInfo = { info: e.info ?? null, loading: !1 };
              break;
            case `effort`:
              e.effort &&
                typeof e.effort == `object` &&
                (this.effort = e.effort);
              break;
            case `editorContext`:
              this.editor =
                e.file && typeof e.file.label == `string` ? e.file : null;
              break;
            case `accountUsage`:
              e.usage &&
                typeof e.usage.byProvider == `object` &&
                (this.accountUsage = e.usage);
              break;
            case `context`:
              Array.isArray(e.items) &&
                (this.context = { items: e.items, images: e.images });
              break;
            case `imagePreview`: {
              let t = Ns(e.image);
              if (this.#j.delete(e.id)) {
                let n = e.id;
                t
                  ? Ps(t).then((e) => this.thumbs.set(n, e ?? null))
                  : this.thumbs.set(n, null);
              }
              let n = this.preview;
              if (!n || n.id !== e.id) break;
              this.preview = t ? { ...n, src: t } : { ...n, missing: !0 };
              break;
            }
            case `chatPlace`: {
              let t = e.here !== !1;
              (t
                ? H(this.#t).trim() && this.#z()
                : this.here &&
                  (this.#a !== void 0 && (clearTimeout(this.#a), this.#B()),
                  (this.menu = null),
                  (this.sessionsOpen = !1),
                  (this.#b = null),
                  (this.preview = null),
                  F(this.#M, null),
                  F(this.#t, ``),
                  (this.#i = void 0),
                  this.#v()),
                (this.here = t));
              break;
            }
            case `draftBack`:
              if (typeof e.text != `string` || !this.here) break;
              this.#o(e.text, typeof e.skill == `string` ? e.skill : void 0);
              break;
            case `takeDraft`:
              if (
                typeof e.text != `string` ||
                !this.here ||
                !as(H(this.#t), this.#i)
              )
                break;
              ((this.#i = e.text),
                F(this.#t, e.text, !0),
                F(this.#M, typeof e.skill == `string` ? e.skill : null, !0),
                this.#v());
              break;
            case `focusPermission`:
              (this.setTab(`chat`),
                (this.sessionsOpen = !1),
                (this.preview = null),
                Gr().then(() => {
                  let t = (__env.root ?? document).querySelector(`[data-permission-id="${CSS.escape(e.id)}"]`);
                  (t?.scrollIntoView({ block: `center` }),
                    t
                      ?.querySelector(`[aria-label="Your answer"] button`)
                      ?.focus());
                }));
          }
        }
        #V(e, t) {
          if (this.here)
            for (let n of Cs(e, t))
              this.draft = H(this.#t).trim() ? `${n}\n\n${H(this.#t)}` : n;
        }
      }),
      ($ = new Vs()));
  });
function Us(e) {
  return e.kind === `assistant` || e.kind === `thought` || e.kind === `tool`;
}
function Ws(e, t = {}) {
  let n = Gs(e);
  if (!t.ends) return n;
  let r = new Map();
  n.forEach((e, n) => {
    let i =
      e.kind === `tools`
        ? e.tools[0]?.turn
        : e.kind === `item`
          ? e.item.turn
          : void 0;
    i !== void 0 &&
      i !== t.openTurn &&
      (e.kind === `tools` || (e.kind === `item` && Us(e.item)) || r.has(i)) &&
      r.set(i, n);
  });
  let i = [],
    a = new Map([...r].map(([e, t]) => [t, e]));
  return (
    n.forEach((e, t) => {
      i.push(e);
      let n = a.get(t);
      n !== void 0 && i.push({ kind: `end`, key: `end:${n}`, turn: n });
    }),
    i
  );
}
function Gs(e) {
  let t = [],
    n = new Set(),
    r;
  for (let i of e) {
    let e = Us(i) && !n.has(i.turn);
    if ((e && n.add(i.turn), i.kind === `tool`)) {
      if (r && r.tools[0]?.turn === i.turn) {
        r.tools.push(i);
        continue;
      }
      ((r = { kind: `tools`, key: i.id, tools: [i], head: e }), t.push(r));
      continue;
    }
    ((r = void 0), t.push({ kind: `item`, key: i.id, item: i, head: e }));
  }
  return t;
}
function Ks(e) {
  let t = /^([a-z][\w -]{0,23}):\s+(.+)$/is.exec(e.trim());
  if (!t) return { label: ``, detail: e.trim() };
  let n = t[1].trim();
  return { label: n.charAt(0).toUpperCase() + n.slice(1), detail: t[2].trim() };
}
function qs(e) {
  let { label: t, detail: n } = Ks(e.title);
  return `${(e.toolKind && $s[e.toolKind]) || t || `Running`} ${n}`;
}
function Js(e) {
  let t = { running: 0, completed: 0, failed: 0 };
  for (let n of e) t[n.status]++;
  return t;
}
function Ys(e) {
  let t = [];
  return (
    e.completed && t.push(`${e.completed} done`),
    e.failed && t.push(`${e.failed} failed`),
    e.running && t.push(`${e.running} running`),
    t.join(`, `)
  );
}
function Xs(e, t, n) {
  if (!t) return;
  if (Zs(e)) return `Waiting for your approval`;
  let r = e.at(-1);
  if (r?.turn === n) {
    if (r.kind === `tool` && r.status === `running`) return qs(r);
    if (r.kind === `thought`) return `Thinking`;
    if (r.kind === `assistant`) return `Writing`;
  }
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (r.turn !== n) break;
    if (r.kind === `tool` && r.status === `running`) return qs(r);
  }
  return `Working`;
}
function Zs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.kind === `permission` && n.state === `pending`) return !0;
  }
  return !1;
}
function Qs(e) {
  let t = Math.max(0, Math.floor(e));
  return t < 60 ? `${t}s` : `${Math.floor(t / 60)}m ${t % 60}s`;
}
var $s,
  ec = o(() => {
    $s = {
      read: `Reading`,
      edit: `Editing`,
      delete: `Deleting`,
      move: `Moving`,
      search: `Searching`,
      execute: `Running`,
      think: `Thinking`,
      fetch: `Fetching`,
    };
  });
function tc(e, t) {
  pt(t, !0);
  let n = N(() => t.meta.busy),
    r = N(() => Xs(t.items, H(n), t.meta.turn)),
    i = 0,
    a = P(0);
  cr(() => {
    if (!H(n)) return;
    ((i = Date.now()), F(a, i, !0));
    let e = window.setInterval(() => F(a, Date.now(), !0), 1e3);
    return () => window.clearInterval(e);
  });
  let o = N(() => Qs((H(a) - i) / 1e3));
  var s = Fi(),
    c = L(s),
    l = (e) => {
      var t = nc(),
        n = z(I(t), 2),
        i = R(n, !0),
        a = R(z(n, 2));
      (ze(2),
        k(t),
        B(() => {
          (Z(n, `title`, H(r)), q(i, H(r)), q(a, `· ${H(o) ?? ``}`));
        }),
        K(e, t));
    };
  (J(c, (e) => {
    H(r) && e(l);
  }),
    K(e, s),
    mt());
}
var nc,
  rc = o(() => {
    (Vo(),
      Lo(),
      ec(),
      (nc = G(
        `<div class="mx-auto flex w-full max-w-4xl shrink-0 items-center gap-2 px-4 pb-1.5 text-small text-muted"><span class="size-1.5 shrink-0 animate-pulse rounded-full bg-progress" aria-hidden="true"></span> <span class="min-w-0 truncate"> </span> <span class="shrink-0 tabular-nums"> </span> <span class="ml-auto shrink-0">Esc to stop</span></div>`,
      )));
  }),
  ic = o(() => {
    (ct(), at());
  });
function ac(e, t) {
  let n = jo(t, `size`, 3, 18);
  var r = oc();
  let i;
  var a = R(r);
  (B(
    (e, t, o) => {
      ((i = Ga(r, ``, i, {
        width: `${n() ?? ``}px`,
        height: `${n() ?? ``}px`,
        "border-radius": e,
      })),
        Z(a, `width`, t),
        Z(a, `height`, o));
    },
    [
      () => `${Math.round(n() * 0.28)}px`,
      () => Math.round(n() * 0.62),
      () => Math.round(n() * 0.62),
    ],
  ),
    K(e, r));
}
var oc,
  sc = o(() => {
    (Vo(),
      Lo(),
      (oc = G(
        `<span class="hermes-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M4 4h3.2v6.6h7.6V4H18v16h-3.2v-6.6H7.2V20H4z"></path><path fill="currentColor" d="M18 4.2c1.9-1.5 3.6-1.6 5-.9-1.1.4-2 1.1-2.6 2.1.8-.1 1.6 0 2.3.4-1.3.4-2.6 1.3-3.4 2.6H18z"></path></svg></span>`,
      )));
  });
function cc(e, t) {
  (pt(t, !1), So());
  var n = lc(),
    r = I(n);
  ac(r, { size: 40 });
  var i = z(r, 6),
    a = I(i),
    o = z(a, 2);
  (k(i),
    k(n),
    W(`click`, a, () => $.showChat()),
    W(`click`, o, () => $.moveChatHere()),
    K(e, n),
    mt());
}
var lc,
  uc = o(() => {
    (Vo(),
      ic(),
      Lo(),
      Hs(),
      sc(),
      (lc = G(
        `<div class="flex h-full flex-col items-center justify-center gap-2 px-6 text-center"><!> <p class="mt-1 font-semibold text-fg">The chat is open in an editor tab</p> <p class="max-w-60 text-small text-muted">Hermes keeps working there. Close the tab, or move it back, to have the chat here again.</p> <div class="mt-2 flex flex-col items-center gap-1"><button type="button" class="btn btn-primary">Show the chat</button> <button type="button" class="cursor-pointer px-1.5 py-1 text-link hover:text-link-active">Move it back here</button></div></div>`,
      )),
      yi([`click`]));
  });
function dc(e) {
  if (!Number.isFinite(e) || e < 0) return `?`;
  if (e < 1e3) return String(Math.round(e));
  for (let t = 0; t < xc.length; t++) {
    let [n, r] = xc[t],
      i = Math.round((e / r) * 10) / 10;
    if (i < 1e3 || t === xc.length - 1)
      return (Number.isInteger(i) ? String(i) : i.toFixed(1)) + n;
  }
  return String(e);
}
function fc(e) {
  if (!(e.size > 0) || !Number.isFinite(e.used)) return;
  let t = Math.min(Math.max(e.used / e.size, 0), 1),
    n = Math.round(t * 100);
  return { ratio: t, label: n === 0 && e.used > 0 ? `<1%` : `${n}%` };
}
function pc(e) {
  let t = e.provider ?? `The provider`;
  return {
    title:
      e.kind === `limit`
        ? `${t} usage limit reached`
        : e.kind === `billing`
          ? `${t}: usage or credits used up`
          : e.kind === `overloaded`
            ? `${t} is overloaded right now`
            : `${t} is not answering right now`,
    body: `${e.resets ? `It resets ${e.resets.startsWith(`in `) ? e.resets : `at ${e.resets}`}. ` : ``}Continue on another model and your message is sent again.`,
  };
}
function mc(e) {
  return e ? (Cc[e.id]?.label ?? e.name) : `Manual`;
}
function hc(e) {
  return Cc[e.id]?.description ?? e.description;
}
function gc(e) {
  return (e && Cc[e.id]?.icon) || (e ? `shield` : `hand`);
}
function _c(e) {
  let t = e.size > 0 ? ` (${Math.round((e.used / e.size) * 100)}%)` : ``;
  return `${dc(e.used)} of ${dc(e.size)} tokens in context${t}, estimated by Hermes`;
}
function vc(e, t) {
  switch (e.state) {
    case `idle`:
      return { text: `Not started`, tone: `muted`, buttons: [] };
    case `noFolder`:
      return {
        text: `No folder open`,
        tone: `muted`,
        message: `Open a folder to chat with Hermes.`,
        buttons: [{ label: `Open folder`, action: `openFolder`, primary: !0 }],
      };
    case `starting`:
      return { text: `Starting Hermes…`, tone: `busy`, buttons: [] };
    case `ready`:
      return t
        ? { text: `Working…`, tone: `busy`, buttons: [] }
        : { text: `Ready`, tone: `ok`, buttons: [] };
    case `setupNeeded`:
      return {
        text: `Setup needed`,
        tone: `warn`,
        message: e.message,
        buttons: [
          { label: `Run setup`, action: `setup`, primary: !0 },
          { label: `Retry`, action: `restart`, primary: !1 },
        ],
      };
    case `stopped`:
      return {
        text: `Stopped`,
        tone: `error`,
        message: e.message,
        buttons: [
          { label: `Restart`, action: `restart`, primary: !0 },
          { label: `Show log`, action: `showLog`, primary: !1 },
        ],
      };
    case `notFound`:
      return {
        text: `Hermes not found`,
        tone: `error`,
        message: e.message,
        buttons: [
          { label: `Set path`, action: `setPath`, primary: !0 },
          { label: `Retry`, action: `restart`, primary: !1 },
        ],
      };
    case `error`:
      return {
        text: `Error`,
        tone: `error`,
        message: e.message,
        buttons: [
          { label: `Restart`, action: `restart`, primary: !0 },
          { label: `Show log`, action: `showLog`, primary: !1 },
        ],
      };
    default:
      return { text: `Unknown state`, tone: `muted`, buttons: [] };
  }
}
function yc(e) {
  let t = e.connection.state;
  return (
    t !== `noFolder` &&
    t !== `notFound` &&
    t !== `setupNeeded` &&
    !e.switchingModel
  );
}
function bc(e) {
  if (e.switchingModel) return `Switching to ${e.switchingModel}…`;
  switch (e.connection.state) {
    case `noFolder`:
      return `Open a folder to chat with Hermes`;
    case `notFound`:
      return `Set the Hermes path to start chatting`;
    case `setupNeeded`:
      return `Run setup to start chatting`;
    default:
      return e.busy
        ? `Hermes is working — Enter queues your message`
        : `Ask Hermes… (@ to add a file, / for skills)`;
  }
}
var xc,
  Sc,
  Cc,
  wc = o(() => {
    ((xc = [
      [`k`, 1e3],
      [`M`, 1e6],
      [`B`, 1e9],
    ]),
      (Sc = (e) => e.startsWith(`allow`)),
      (Cc = {
        default: {
          label: `Manual`,
          description: `Hermes asks before each file edit.`,
          icon: `hand`,
        },
        accept_edits: {
          label: `Edit automatically`,
          description: `Hermes edits files in this folder without asking.`,
          icon: `code`,
        },
        dont_ask: {
          label: `Auto`,
          description: `Hermes edits any file without asking.`,
          icon: `bolt`,
        },
      }));
  });
function Tc(e) {
  return __env.extractDroppedFileUris(e);
}
var Ec = o(() => {});
function Dc(e) {
  if (!e) return;
  let t = e.trim();
  if (/^\d+(\.\d+)?$/.test(t)) {
    let e = Number(t);
    return e > 0xe8d4a51000 ? e : e * 1e3;
  }
  let n = Date.parse(t);
  return Number.isNaN(n) ? void 0 : n;
}
function Oc(e) {
  let t = new Date(e);
  return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
}
function kc(e, t) {
  return Math.round((Oc(t) - Oc(e)) / Fc);
}
function Ac(e, t, n) {
  if (e === void 0) return ``;
  let r = t - e;
  if (r < 6e4) return `Just now`;
  if (r < 36e5 && kc(e, t) === 0) return `${Math.floor(r / 6e4)} min ago`;
  let i = kc(e, t),
    a = new Date(e);
  if (i <= 0)
    return a.toLocaleTimeString(n, { hour: `2-digit`, minute: `2-digit` });
  if (i === 1) return `Yesterday`;
  if (i < 7) return a.toLocaleDateString(n, { weekday: `short` });
  let o = a.getFullYear() === new Date(t).getFullYear();
  return a.toLocaleDateString(n, {
    month: `short`,
    day: `numeric`,
    ...(o ? {} : { year: `numeric` }),
  });
}
function jc(e, t, n) {
  if (e === void 0) return ``;
  let r = Math.max(0, t - e);
  if (r < 6e4) return `now`;
  let i = kc(e, t);
  if (r < 36e5) return `${Math.floor(r / 6e4)}m`;
  if (i <= 0) return `${Math.floor(r / 36e5)}h`;
  if (i < 7) return `${i}d`;
  let a = new Date(e),
    o = a.getFullYear() === new Date(t).getFullYear();
  return a.toLocaleDateString(n, {
    month: `short`,
    day: `numeric`,
    ...(o ? {} : { year: `numeric` }),
  });
}
function Mc(e, t, n) {
  let r = kc(t, e);
  if (r === 0) return `today`;
  if (r === 1) return `tomorrow`;
  let i = new Date(e),
    a = i.getFullYear() === new Date(t).getFullYear();
  return i.toLocaleDateString(n, {
    month: `short`,
    day: `numeric`,
    ...(a ? {} : { year: `numeric` }),
  });
}
function Nc(e) {
  let t = Math.max(0, Math.round(e / 1e3));
  if (t < 60) return `${t} s`;
  let n = Math.round(t / 60);
  if (n < 60) return `${n} min`;
  let r = Math.floor(n / 60);
  return n % 60 ? `${r} h ${n % 60} min` : `${r} h`;
}
function Pc(e) {
  let t = Math.max(0, Math.round(e / 1e3));
  if (t < 60) return `took ${t} s`;
  let n = Math.floor(t / 60);
  return n < 60
    ? `took ${n} min${t % 60 ? ` ${t % 60} s` : ``}`
    : `took ${Math.floor(n / 60)} h${n % 60 ? ` ${n % 60} min` : ``}`;
}
var Fc,
  Ic = o(() => {
    Fc = 864e5;
  });
function Lc(e, t, n) {
  let r = Dc(e);
  if (r === void 0) return;
  let i = new Date(r),
    a = kc(t, r);
  return a <= 0
    ? Hc(i, n)
    : a === 1
      ? `tomorrow ${Hc(i, n)}`
      : a < 7
        ? `${i.toLocaleDateString(n, { weekday: `short` })} ${Hc(i, n)}`
        : i.toLocaleDateString(n, { month: `short`, day: `numeric` });
}
function Rc(e, t, n) {
  let r = Lc(e.resetsAt, t, n),
    i =
      e.usedPercent === void 0
        ? (e.detail ?? ``)
        : `${Math.round(e.usedPercent)}% used`;
  return `${e.label}: ${i}${r ? `, resets ${r}` : ``}`;
}
function zc(e, t, n) {
  if (!e) return;
  let r = e.windows
      .filter((e) => e.usedPercent !== void 0)
      .reduce(
        (e, t) => (e && (e.usedPercent ?? 0) >= (t.usedPercent ?? 0) ? e : t),
        void 0,
      ),
    i = [
      ...e.windows.map((e) => Rc(e, t, n)),
      ...(e.plan ? [`Plan: ${e.plan}`] : []),
      ...e.details,
    ],
    a = Dc(e.fetchedAt);
  a !== void 0 && i.push(`Checked at ${Hc(new Date(a), n)}`);
  let o = i.join(`
`);
  if (!r || r.usedPercent === void 0) {
    let t = e.windows.find((e) => e.detail)?.detail ?? e.details[0];
    return t
      ? { ratio: 0, text: t, tone: `muted`, full: !1, tooltip: o }
      : void 0;
  }
  let s = Math.round(r.usedPercent),
    c = Lc(r.resetsAt, t, n);
  return {
    percent: s,
    ratio: r.usedPercent / 100,
    text: `${s}% used`,
    tone: s >= 90 ? `error` : s >= 70 ? `warning` : `muted`,
    full: s >= 100,
    ...(c ? { resets: c } : {}),
    tooltip: o,
  };
}
function Bc(e, t = !1) {
  if (t || e?.full) {
    let t = e?.resets ? `until ${e.resets}` : `limit reached`;
    return { text: t, short: t, tone: `error` };
  }
  if (e?.percent === void 0) return;
  let n = 100 - e.percent;
  if (!(n > 20))
    return {
      text: `${n}% left`,
      short: `${n}%`,
      tone: n <= 10 ? `error` : `warning`,
    };
}
function Vc(e) {
  return (e ?? ``).split(`:`)[0] ?? ``;
}
var Hc,
  Uc = o(() => {
    (Ic(),
      (Hc = (e, t) =>
        e.toLocaleTimeString(t, { hour: `2-digit`, minute: `2-digit` })));
  });
function Wc(e, count = 5) {
  let denom = Math.max(1, count - 1);
  let ratio = (Math.round(e) - 1) / denom;
  let idx = Math.min(Xc.length - 1, Math.max(0, Math.round(ratio * (Xc.length - 1))));
  return Xc[idx] ?? Xc[1];
}
function Gc(e) {
  switch (e) {
    case `accept_edits`:
      return `var(--vscode-charts-purple, #b180d7)`;
    case `dont_ask`:
      return Yc;
    default:
      return `var(--vscode-focusBorder, #0078d4)`;
  }
}
function Kc(e, count = 5) {
  let denom = Math.max(1, count - 1);
  return Math.round(Math.min(1, Math.max(0, e)) * denom) + 1;
}
function qc(e, count = 5, t = 0.07) {
  let n = Math.min(1, Math.max(0, e)),
    r = Zc(Kc(n, count), count);
  return Math.abs(n - r) <= t ? r : n;
}
function Jc(e, count = 5) {
  return Zc(Math.min(count, Math.max(1, e)), count);
}
var Yc,
  Xc,
  Zc,
  Qc = o(() => {
    ((Yc = `color-mix(in srgb, var(--vscode-charts-yellow, #cca700) 50%, var(--vscode-charts-red, #f14c4c))`),
      (Xc = [
        `var(--vscode-charts-green, #89d185)`,
        `var(--vscode-charts-blue, #3794ff)`,
        `var(--vscode-charts-yellow, #cca700)`,
        Yc,
        `var(--vscode-charts-red, #f14c4c)`,
      ]),
      (Zc = (e, count = 5) => (e - 1) / Math.max(1, count - 1)));
  });
function $c(e) {
  return e
    .toLowerCase()
    .replace(/[ _]/g, `-`)
    .replace(/[^a-z0-9-]/g, ``)
    .replace(/-{2,}/g, `-`)
    .replace(/^-|-$/g, ``);
}
function el(e, t, n) {
  if (!n) return 1;
  let r = e.toLowerCase();
  return r.startsWith(n) || $c(e).startsWith(n)
    ? 3
    : r.includes(n)
      ? 2
      : n.length >= 3 && t?.toLowerCase().includes(n)
        ? 1
        : 0;
}
function tl(e, t, n, r = { skills: 8, commands: 5 }) {
  let i = n.toLowerCase(),
    a = new Set(),
    o = [];
  for (let t of e) {
    if (a.has(t.name)) continue;
    a.add(t.name);
    let e = el(t.name, t.description, i);
    e > 0 &&
      o.push({
        s: {
          kind: `skill`,
          name: t.name,
          ...(t.description ? { detail: t.description } : {}),
        },
        score: e,
      });
  }
  o.sort((e, t) => t.score - e.score || e.s.name.localeCompare(t.s.name));
  let s = t
    .map((e) => ({ c: e, sc: el(e.name, e.description, i) }))
    .filter((e) => e.sc > 0)
    .sort((e, t) => t.sc - e.sc || e.c.name.localeCompare(t.c.name))
    .slice(0, r.commands)
    .map(({ c: e }) => ({
      kind: `command`,
      name: e.name,
      ...(e.description ? { detail: e.description } : {}),
    }));
  return {
    skills: o.slice(0, r.skills).map((e) => e.s),
    commands: s,
    skillMatches: o.length,
  };
}
function nl(e) {
  let t = e.replace(/\/+$/, ``);
  return t.slice(t.lastIndexOf(`/`) + 1);
}
function rl(e) {
  let t = e.replace(/\/+$/, ``),
    n = t.lastIndexOf(`/`);
  return n < 0 ? `` : t.slice(0, n);
}
function il(e, t) {
  let n = e.slice(0, t),
    r = /(^|\s)@([^\s@]*)$/.exec(n);
  if (!r) return;
  let i = r[2] ?? ``;
  return { start: t - i.length - 1, query: i };
}
function al(e, t) {
  let n = e.toLowerCase();
  return t.find((e) => e.name.toLowerCase() === n || $c(e.name) === n)?.name;
}
function ol(e, t, n = []) {
  let r = [],
    i = /(^|\s)\/([^\s/]+)/g;
  for (let a = i.exec(e); a; a = i.exec(e)) {
    let e = (a[2] ?? ``).replace(/[.,;:!?)\]]+$/, ``);
    if (
      a.index === 0 &&
      !a[1] &&
      n.some((t) => t.name.toLowerCase() === e.toLowerCase())
    )
      continue;
    let i = al(e, t);
    i && !r.includes(i) && r.push(i);
  }
  return r;
}
function sl(e, t = []) {
  let n = [],
    r = /(^|\s)(@[^\s@]+|\/[^\s/]+)/g,
    i = 0;
  for (let a = r.exec(e); a; a = r.exec(e)) {
    let r = a[2] ?? ``;
    if (r.startsWith(`/`)) {
      let e = r.replace(/[.,;:!?)\]]+$/, ``);
      if (!al(e.slice(1), t)) continue;
      r = e;
    }
    let o = a.index + (a[1] ?? ``).length;
    (o > i && n.push({ text: e.slice(i, o), mention: !1 }),
      n.push({ text: r, mention: !0 }),
      (i = o + r.length));
  }
  return (i < e.length && n.push({ text: e.slice(i), mention: !1 }), n);
}
function cl(e, t) {
  let n = e.slice(0, t),
    r = /(^|\s)\/([^\s/]*)$/.exec(n);
  if (!r) return;
  let i = r[2] ?? ``,
    a = t - i.length - 1;
  return { query: i, start: a, atStart: a === 0 };
}
var ll = o(() => {});
function ul(e) {
  return e.normalize(`NFD`).replace(/\p{M}/gu, ``).toLowerCase();
}
function dl(e, t) {
  let n = ul(t).split(/\s+/).filter(Boolean);
  return n.length === 0
    ? [...e]
    : e.filter((e) => {
        let t = ul(`${e.label} ${e.id} ${e.provider ?? ``}`);
        return n.every((e) => t.includes(e));
      });
}
function fl(e) {
  let t = new Map();
  for (let n of e) {
    let e = n.provider || hl,
      r = t.get(e) ?? [];
    (r.push(n), t.set(e, r));
  }
  return [...t].map(([e, t]) => ({ provider: e, items: t }));
}
function pl(e, t, n) {
  let r = e.find((e) => e.id === t),
    i = e.some((e) => e.provider === n) ? n : r?.provider;
  return e.find((e) => e.id !== t && (i === void 0 || e.provider !== i));
}
function ml(e, t, n) {
  return n <= 0 ? -1 : e < 0 ? (t > 0 ? 0 : n - 1) : (((e + t) % n) + n) % n;
}
var hl,
  gl = o(() => {
    hl = `Other`;
  });
function _l(e) {
  return (t) => {
    let n = (n) => {
      let r = (typeof n.composedPath == "function" ? n.composedPath()[0] : null) ?? n.target;
      r instanceof Node &&
        !t.contains(r) &&
        ((r instanceof Element && r.closest(`[data-menu-trigger]`)) || e());
    };
    return (
      window.addEventListener(`pointerdown`, n, !0),
      () => window.removeEventListener(`pointerdown`, n, !0)
    );
  };
}
var vl = o(() => {});
function yl(e, t) {
  let n = jo(t, `class`, 3, `size-3.5`);
  var r = El(),
    i = I(r),
    a = (e) => {
      var t = bl();
      (ze(), K(e, t));
    },
    o = (e) => {
      var t = xl();
      (ze(2), K(e, t));
    },
    s = (e) => {
      var t = Sl();
      (ze(), K(e, t));
    },
    c = (e) => {
      K(e, Cl());
    },
    l = (e) => {
      var t = wl();
      (ze(), K(e, t));
    },
    u = (e) => {
      var t = Tl();
      (ze(3), K(e, t));
    };
  (J(i, (e) => {
    t.kind === `file` || t.kind === `editor`
      ? e(a)
      : t.kind === `image`
        ? e(o, 1)
        : t.kind === `selection`
          ? e(s, 2)
          : t.kind === `skill`
            ? e(c, 3)
            : t.kind === `problems`
              ? e(l, 4)
              : e(u, -1);
  }),
    k(r),
    B(() => X(r, 0, Y([`shrink-0`, n()]))),
    K(e, r));
}
var bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl = o(() => {
    (Vo(),
      Lo(),
      (bl = Ni(
        `<path d="M4 2h5l3 3v9H4z"></path><path d="M9 2v3h3"></path>`,
        1,
      )),
      (xl = Ni(
        `<rect x="2.5" y="3" width="11" height="10" rx="1.5"></rect><circle cx="6" cy="6.5" r="1.2"></circle><path d="M2.5 11.5l3.5-3.5 3 3 2-2 2.5 2.5"></path>`,
        1,
      )),
      (Sl = Ni(
        `<rect x="2" y="6" width="12" height="4" rx="1" fill="currentColor" fill-opacity="0.22" stroke="none"></rect><path d="M3.5 4h9M3.5 8h9M3.5 12h5"></path>`,
        1,
      )),
      (Cl = Ni(
        `<path d="M8 1.5l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" fill="currentColor" stroke="none"></path>`,
      )),
      (wl = Ni(
        `<path d="M8 2.5l6 10.5H2z"></path><path d="M8 6.5v3M8 11.3v.2"></path>`,
        1,
      )),
      (Tl = Ni(
        `<circle cx="5" cy="4" r="1.6"></circle><circle cx="5" cy="12" r="1.6"></circle><circle cx="11" cy="8" r="1.6"></circle><path d="M5 5.6v4.8M6.4 11.2L9.6 8.8"></path>`,
        1,
      )),
      (El = Ni(
        `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><!></svg>`,
      )));
  });
function Ol(e, t) {
  pt(t, !0);
  let n = [
      { kind: `file`, label: `Files`, hint: `search the workspace` },
      { kind: `image`, label: `Image`, hint: `upload or paste` },
      { kind: `selection`, label: `Selection`, hint: `from the editor` },
      { kind: `problems`, label: `Problems`, hint: `errors and warnings` },
      { kind: `git`, label: `Git changes`, hint: `not committed yet` },
    ],
    r = N(() => $.context.images),
    i = N(() => n.filter((e) => e.kind !== `image` || H(r))),
    a = Ln([]);
  function o(e) {
    ($.addContext(e), t.onclose(`pick`));
  }
  function s(e) {
    let n = a.indexOf((__env.root?.activeElement ?? document.activeElement));
    switch (e.key) {
      case `ArrowDown`:
      case `ArrowUp`:
        (e.preventDefault(),
          a[ml(n, e.key === `ArrowDown` ? 1 : -1, H(i).length)]?.focus());
        break;
      case `Home`:
      case `End`:
        (e.preventDefault(),
          a[e.key === `Home` ? 0 : H(i).length - 1]?.focus());
        break;
      case `Escape`:
        (e.preventDefault(), e.stopPropagation(), t.onclose(`escape`));
        break;
      case `Tab`:
        t.onclose(`outside`);
    }
  }
  var c = jl(),
    l = z(I(c), 2);
  da(
    l,
    19,
    () => H(i),
    (e) => e.kind,
    (e, t, n) => {
      var r = kl(),
        i = I(r);
      yl(i, {
        get kind() {
          return H(t).kind;
        },
        class: `size-4 opacity-75`,
      });
      var s = z(i, 2),
        c = R(s, !0),
        l = R(z(s, 2), !0);
      (k(r),
        _o(
          r,
          (e, t) => (a[t] = e),
          (e) => a?.[e],
          () => [H(n)],
        ),
        B(() => {
          (q(c, H(t).label), q(l, H(t).hint));
        }),
        W(`click`, r, () => o(H(t).kind)),
        K(e, r));
    },
  );
  var u = z(l, 2),
    d = (e) => {
      K(e, Al());
    };
  (J(u, (e) => {
    H(r) && e(d);
  }),
    k(c),
    Ma(c, () => _l(() => t.onclose(`outside`))),
    Ma(c, () => () => {
      queueMicrotask(() => a[0]?.focus());
    }),
    W(`keydown`, c, s),
    K(e, c),
    mt());
}
var kl,
  Al,
  jl,
  Ml = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      gl(),
      vl(),
      Dl(),
      (kl = G(
        `<button type="button" role="menuitem" class="flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-left outline-none hover:bg-hover focus-visible:bg-selected focus-visible:text-selected-fg"><!> <span class="flex-1 truncate"> </span> <span class="shrink-0 text-small opacity-65"> </span></button>`,
      )),
      (Al = G(
        `<div class="mx-1 mt-1 border-t border-widget-border px-1 pt-1.5 pb-0.5 text-small text-muted">You can also paste an image, or hold Shift and drop files here.</div>`,
      )),
      (jl = G(
        `<div role="menu" tabindex="-1" aria-label="Add to the message" class="absolute bottom-full left-0 z-10 mb-1.5 flex w-72 max-w-[calc(100vw-24px)] flex-col gap-0.5 rounded-[10px] border border-widget-border bg-widget p-1.5 shadow-lg shadow-shadow"><div class="px-2 pt-1 pb-1 text-[11px] font-semibold tracking-wider text-muted uppercase">Add to the message</div> <!> <!></div>`,
      )),
      yi([`keydown`, `click`]));
  });
function Nl(e, t) {
  (pt(t, !0), $.requestContextInfo());
  let n = N(() => $.contextInfo),
    r = N(() => H(n).info),
    i = N(() => H(r)?.used ?? t.meta.usage?.used),
    a = N(() => H(r)?.size ?? t.meta.usage?.size),
    o = N(() => (H(i) !== void 0 && H(a) ? Math.min(1, H(i) / H(a)) : void 0)),
    s = N(() =>
      H(o) === void 0
        ? ``
        : H(o) > 0 && H(o) < 0.01
          ? `<1%`
          : `${Math.round(H(o) * 100)}%`,
    ),
    c = N(() => (H(r)?.autoCompress === !1 ? void 0 : H(r)?.thresholdPct)),
    l = N(() => H(r)?.byRole),
    u = (e, t, n) => `${e} ${e === 1 ? t : n}`;
  function d() {
    (Q({ type: `compress` }), t.onclose(`pick`));
  }
  function f(e) {
    e.key === `Escape`
      ? (e.preventDefault(), e.stopPropagation(), t.onclose(`escape`))
      : e.key === `Tab` &&
        !(e.target instanceof HTMLButtonElement) &&
        t.onclose(`outside`);
  }
  var p = Ul(),
    m = I(p),
    h = z(I(m), 4),
    g = (e) => {
      var t = Pl(),
        n = R(t);
      (B(
        (e, t) => q(n, `~${e ?? ``} / ${t ?? ``} tokens`),
        [() => dc(H(i)), () => dc(H(a))],
      ),
        K(e, t));
    };
  (J(h, (e) => {
    H(i) !== void 0 && H(a) && e(g);
  }),
    k(m));
  var _ = z(m, 2),
    v = (e) => {
      var t = Rl(),
        n = I(t),
        i = R(n),
        a = z(n, 2),
        l = I(a);
      let u;
      var d = z(l, 2),
        f = (e) => {
          var t = Fl();
          let n;
          (B(() => (n = Ga(t, ``, n, { left: `${H(c) ?? ``}%` }))), K(e, t));
        };
      (J(d, (e) => {
        H(c) && e(f);
      }),
        k(a));
      var p = z(a, 2),
        m = (e) => {
          var t = Il(),
            n = R(I(t));
          (k(t), B(() => q(n, `compresses at ${H(c) ?? ``}%`)), K(e, t));
        },
        h = (e) => {
          K(e, Ll());
        };
      (J(p, (e) => {
        H(c) ? e(m) : H(r)?.autoCompress === !1 && e(h, 1);
      }),
        k(t),
        B(() => {
          (q(i, `${H(s) ?? ``} full`),
            (u = Ga(l, ``, u, { width: `max(${H(o) * 100}%, 4px)` })));
        }),
        K(e, t));
    },
    y = (e) => {
      K(e, zl());
    };
  J(_, (e) => {
    H(o) === void 0 ? e(y, -1) : e(v);
  });
  var b = z(_, 2),
    x = z(I(b), 2),
    S = I(x),
    ee = (e) => {
      var t = Bl(),
        n = L(t, !0),
        i = z(n),
        a = (e) => {
          var t = Bl(),
            n = L(t),
            r = z(n),
            i = (e) => {
              var t = Pi();
              (B(
                (e) => q(t, `, ${e ?? ``}`),
                [() => u(H(l).tool, `tool result`, `tool results`)],
              ),
                K(e, t));
            };
          (J(r, (e) => {
            H(l).tool && e(i);
          }),
            B(() =>
              q(
                n,
                ` — ${H(l).user ?? ``} from you, ${H(l).assistant ?? ``} from
          Hermes`,
              ),
            ),
            K(e, t));
        };
      (J(i, (e) => {
        H(l) && H(r).messages > 0 && e(a);
      }),
        B(() => q(n, H(r).messages)),
        K(e, t));
    },
    te = (e) => {
      K(e, Pi(`…`));
    },
    ne = (e) => {
      K(e, Vl());
    };
  (J(S, (e) => {
    H(r) ? e(ee) : H(n).loading ? e(te, 1) : e(ne, -1);
  }),
    k(x));
  var C = z(x, 4),
    w = I(C, !0),
    re = z(w),
    T = (e) => {
      var t = Pi();
      (B((e) => q(t, ` · ${e ?? ``} window`), [() => dc(H(a))]), K(e, t));
    };
  (J(re, (e) => {
    H(a) && e(T);
  }),
    k(C));
  var E = z(C, 4),
    ie = I(E),
    ae = (e) => {
      var t = Pi();
      (B(() => q(t, H(n).loading ? `…` : `—`)), K(e, t));
    },
    oe = (e) => {
      K(e, Pi(`off (only “Compress now”)`));
    },
    D = (e) => {
      K(e, Hl());
    },
    se = (e) => {
      var t = Pi();
      (B((e) => q(t, `in ~${e ?? ``} tokens`), [() => dc(H(r).compressIn)]),
        K(e, t));
    },
    ce = (e) => {
      K(e, Pi(`—`));
    };
  (J(ie, (e) => {
    H(r)
      ? H(r).autoCompress === !1
        ? e(oe, 1)
        : H(r).compressDue
          ? e(D, 2)
          : H(r).compressIn === void 0
            ? e(ce, -1)
            : e(se, 3)
      : e(ae);
  }),
    k(E),
    k(b));
  var le = z(b, 2),
    ue = I(le);
  (ze(2),
    k(le),
    k(p),
    Ma(p, () => _l(() => t.onclose(`outside`))),
    Ma(p, () => (e) => {
      queueMicrotask(() => e.focus());
    }),
    B(() => {
      (q(w, H(r)?.model ?? t.meta.model ?? `…`),
        (ue.disabled = t.meta.busy || !H(r) || H(r).messages === 0),
        Z(
          ue,
          `title`,
          t.meta.busy ? `Wait until Hermes is done` : `Send /compress`,
        ));
    }),
    W(`keydown`, p, f),
    W(`click`, ue, d),
    K(e, p),
    mt());
}
var Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      wc(),
      vl(),
      Bs(),
      (Pl = G(`<span class="text-small text-muted tabular-nums"> </span>`)),
      (Fl = G(
        `<div class="absolute -inset-y-0.75 w-0.5 rounded-full bg-warning"></div>`,
      )),
      (Il = G(
        `<div class="relative h-4 text-[11px] text-warning"><span class="absolute right-0"> </span></div>`,
      )),
      (Ll = G(
        `<span class="text-[11px] text-muted">Automatic compression is off.</span>`,
      )),
      (Rl = G(
        `<div class="flex flex-col gap-1"><span class="text-small"> </span> <div class="relative h-2 rounded-full bg-fg/15" aria-hidden="true"><div class="absolute inset-y-0 left-0 rounded-full bg-muted"></div> <!></div> <!></div>`,
      )),
      (zl = G(
        `<p class="text-small text-muted">Hermes reports the context after its first reply.</p>`,
      )),
      (Bl = G(` <!>`, 1)),
      (Vl = G(`<span class="text-muted">when Hermes is idle</span>`)),
      (Hl = G(`<span class="text-warning">due now</span>`)),
      (Ul = G(
        `<div role="dialog" tabindex="-1" aria-label="Context usage" class="absolute bottom-full left-0 mb-1.5 flex w-80 max-w-[calc(100vw-24px)] flex-col gap-2.5 rounded-[10px] border border-widget-border bg-widget px-3.5 py-3 shadow-lg shadow-shadow outline-none"><div class="flex items-baseline gap-2"><span class="font-semibold">Context</span> <span class="flex-1"></span> <!></div> <!> <dl class="grid grid-cols-[6.5rem_1fr] gap-x-2 gap-y-1 border-t border-border pt-2.5 text-small"><dt class="text-muted">Messages</dt> <dd><!></dd> <dt class="text-muted">Model</dt> <dd class="truncate"> <!></dd> <dt class="text-muted">Compression</dt> <dd><!></dd></dl> <div class="flex items-center gap-2.5"><button type="button" class="btn btn-secondary shrink-0">Compress now</button> <span class="text-[11px] leading-snug text-muted">Hermes sums up older messages to free space. This uses the model.</span></div></div>`,
      )),
      yi([`keydown`, `click`]));
  });
function Gl(e, t) {
  pt(t, !0);
  let n = N(() => $.editor);
  var r = Fi(),
    i = L(r),
    a = (e) => {
      var t = Kl(),
        r = I(t);
      yl(r, { kind: `editor`, class: `size-3 opacity-75` });
      var i = z(r, 2),
        a = R(i, !0),
        o = z(i, 2);
      (k(t),
        B(() => {
          (Z(t, `title`, H(n).detail),
            q(a, H(n).label),
            Z(
              o,
              `aria-label`,
              `Leave ${H(n).label ?? ``} out of the next message`,
            ));
        }),
        W(`click`, o, () => $.toggleEditor()),
        K(e, t));
    },
    o = (e) => {
      var t = ql(),
        r = R(z(I(t), 2), !0);
      (k(t),
        B(() => {
          (Z(
            t,
            `aria-label`,
            `Include ${H(n).label ?? ``} in the next message again`,
          ),
            q(r, H(n).label));
        }),
        W(`click`, t, () => $.toggleEditor()),
        K(e, t));
    };
  (J(i, (e) => {
    H(n) && !H(n).excluded ? e(a) : H(n) && e(o, 1);
  }),
    K(e, r),
    mt());
}
var Kl,
  ql,
  Jl = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      Dl(),
      (Kl = G(
        `<span class="ctx-chip max-w-full min-w-0"><!> <span class="truncate"> </span> <button type="button" class="ctx-chip-x" title="Leave it out"><svg class="size-2.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button></span>`,
      )),
      (ql = G(
        `<button type="button" class="ctx-chip ctx-chip-off max-w-full min-w-0" title="Left out of the next message. Click to include it again."><svg class="size-3 shrink-0" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8s2.2-4 6-4 6 4 6 4-2.2 4-6 4-6-4-6-4zM3 13L13 3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="8" cy="8" r="1.6" fill="none" stroke="currentColor" stroke-width="1.3"></circle></svg> <span class="truncate line-through"> </span></button>`,
      )),
      yi([`click`]));
  });
function Yl(e, t) {
  pt(t, !0);
  let n = N(() => (t.id ? $.thumbs.get(t.id) : void 0));
  cr(() => {
    t.id && $.wantThumb(t.id);
  });
  var r = Fi(),
    i = L(r),
    a = (e) => {
      var t = Xl();
      (B(() => Z(t, `src`, H(n))), K(e, t));
    },
    o = (e) => {
      yl(e, { kind: `image`, class: `size-3 opacity-75` });
    };
  (J(i, (e) => {
    H(n) ? e(a) : e(o, -1);
  }),
    K(e, r),
    mt());
}
var Xl,
  Zl = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      Dl(),
      (Xl = G(
        `<img alt="" class="size-4 shrink-0 rounded-[3px] object-cover outline-1 -outline-offset-1 outline-fg/15"/>`,
      )));
  });
function Ql(e, t) {
  let n = jo(t, `class`, 3, `size-3.5`);
  var r = ru(),
    i = I(r),
    a = (e) => {
      var t = $l();
      (ze(2), K(e, t));
    },
    o = (e) => {
      K(e, eu());
    },
    s = (e) => {
      K(e, tu());
    },
    c = (e) => {
      K(e, nu());
    };
  (J(i, (e) => {
    t.icon === `hand`
      ? e(a)
      : t.icon === `code`
        ? e(o, 1)
        : t.icon === `bolt`
          ? e(s, 2)
          : e(c, -1);
  }),
    k(r),
    B(() => X(r, 0, Y([`shrink-0`, n()]))),
    K(e, r));
}
var $l,
  eu,
  tu,
  nu,
  ru,
  iu = o(() => {
    (Vo(),
      Lo(),
      ($l = Ni(
        `<path d="M5.5 8V3.5a1 1 0 0 1 2 0V7"></path><path d="M7.5 6.5V2.8a1 1 0 0 1 2 0V7"></path><path d="M9.5 6.8V3.8a1 1 0 0 1 2 0V9c0 2.8-1.7 5-4.3 5-1.8 0-2.9-.9-3.9-2.5L2 9.2a1 1 0 0 1 1.6-1.2L5.5 10"></path>`,
        1,
      )),
      (eu = Ni(
        `<path d="M5.5 4.5L2 8l3.5 3.5M10.5 4.5L14 8l-3.5 3.5M9 3l-2 10"></path>`,
      )),
      (tu = Ni(`<path d="M9 1.5L3.5 9H8l-1 5.5L12.5 7H8z"></path>`)),
      (nu = Ni(`<path d="M8 2l5 2v4c0 3-2.2 5-5 6-2.8-1-5-3-5-6V4z"></path>`)),
      (ru = Ni(
        `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><!></svg>`,
      )));
  });
function au(e, t) {
  pt(t, !0);
  let n = jo(t, `el`, 15),
    kLevels = N(() => (Array.isArray(t.levels) && t.levels.length > 0 ? t.levels : Ds)),
    kSupported = N(() => t.supported !== false && H(kLevels).length > 0),
    r = N(() => Math.max(1, Es(t.value, H(kLevels)))),
    i = P(null),
    a = N(() => (H(i) === null ? H(r) : Kc(H(i), H(kLevels).length))),
    o = N(() => (H(i) === null ? Jc(H(r), H(kLevels).length) : qc(H(i), H(kLevels).length))),
    s = N(() => Wc(H(a), H(kLevels).length)),
    c = N(() => (H(i) === null ? Ts(t.value, H(kLevels), H(kSupported)) : (H(kLevels)[H(a) - 1]?.label ?? ``))),
    l = N(() => t.loading || t.saving || !H(kSupported)),
    u = P(!1),
    d = !1,
    f;
  cr(() => {
    let e = t.saving;
    return (
      d &&
        !e &&
        !t.error &&
        (F(u, !0), clearTimeout(f), (f = setTimeout(() => F(u, !1), 1600))),
      (d = e),
      () => clearTimeout(f)
    );
  });
  let p = P(void 0);
  function m(e) {
    let t = H(p)?.getBoundingClientRect();
    return t && t.width > 0 ? (e.clientX - t.left) / t.width : 0;
  }
  function h(e) {
    if (!H(kSupported)) return;
    let n = H(kLevels)[e - 1];
    n && e !== H(r) && t.onpick(n.id);
  }
  function g(e) {
    H(l) ||
      !H(kSupported) ||
      e.button !== 0 ||
      (e.preventDefault(),
      n()?.focus(),
      e.currentTarget.setPointerCapture(e.pointerId),
      F(i, m(e), !0));
  }
  function _(e) {
    H(i) !== null && F(i, m(e), !0);
  }
  function v() {
    if (H(i) === null) return;
    let e = Kc(H(i), H(kLevels).length);
    (F(i, null), h(e));
  }
  function y(e) {
    let t = 0;
    if (e.key === `ArrowRight`) t = H(r) + 1;
    else if (e.key === `ArrowLeft`) t = H(r) - 1;
    else if (e.key === `Home`) t = 1;
    else if (e.key === `End`) t = H(kLevels).length;
    else return;
    (e.preventDefault(),
      e.stopPropagation(),
      H(l) || h(Math.min(H(kLevels).length, Math.max(1, t))));
  }
  var b = du();
  let x;
  var S = I(b),
    ee = z(I(S), 2),
    te = R(ee, !0),
    ne = z(ee, 2),
    C = (e) => {
      K(e, ou());
    },
    w = (e) => {
      K(e, su());
    };
  (J(ne, (e) => {
    t.saving ? e(C) : H(u) && e(w, 1);
  }),
    k(S));
  var re = z(S, 2);
  Z(re, `aria-valuemin`, 1);
  var T = I(re),
    E = I(T);
  let ie;
  var ae = z(E, 2);
  da(
    ae,
    19,
    () => H(kLevels),
    (e) => e.id,
    (e, t, n) => {
      var r = cu();
      let i;
      (B(() => {
        (X(r, 1, Y([`effort-stop`, H(n) < H(a) && `is-on`])),
          (i = Ga(r, ``, i, { left: `${(H(n) / Math.max(1, H(kLevels).length - 1)) * 100}%` })));
      }),
        K(e, r));
    },
  );
  var oe = z(ae, 2);
  let D;
  var se = I(oe),
    ce = (e) => {
      K(e, lu());
    };
  (J(se, (e) => {
    t.saving && e(ce);
  }),
    k(oe),
    k(T),
    _o(
      T,
      (e) => F(p, e),
      () => H(p),
    ));
  var le = z(T, 2);
  (da(
    le,
    23,
    () => H(kLevels),
    (e) => e.id,
    (e, t, n) => {
      var r = uu();
      let i;
      var o = R(r, !0);
      (B(() => {
        (X(r, 1, Y([H(n) + 1 === H(a) && `is-here`])),
          (i = Ga(r, ``, i, { left: `${(H(n) / Math.max(1, H(kLevels).length - 1)) * 100}%` })),
          q(o, H(t).id === `xhigh` ? `Extra` : H(t).label));
      }),
        K(e, r));
    },
  ),
    k(le),
    k(re),
    _o(
      re,
      (e) => n(e),
      () => n(),
    ),
    k(b),
    B(() => {
      ((x = Ga(b, ``, x, { "--tone": H(s) })),
        q(te, t.loading ? `…` : H(c)),
        Z(re, `aria-valuemax`, H(kLevels).length),
        Z(re, `aria-valuenow`, H(a)),
        Z(re, `aria-valuetext`, H(c)),
        Z(re, `aria-disabled`, H(l)),
        X(re, 1, Y([`effort-slider`, H(l) && `is-busy`, !H(kSupported) && `is-unsupported`])),
        X(
          E,
          1,
          Y([
            `effort-fill`,
            H(i) === null && `is-snapping`,
            t.saving && `is-saving`,
          ]),
        ),
        (ie = Ga(E, ``, ie, { width: `${H(o) * 100}%` })),
        X(oe, 1, Y([`effort-thumb`, H(i) === null && `is-snapping`])),
        (D = Ga(oe, ``, D, { left: `${H(o) * 100}%` })));
    }),
    W(`pointerdown`, re, g),
    W(`pointermove`, re, _),
    W(`pointerup`, re, v),
    vi(`pointercancel`, re, () => F(i, null)),
    vi(`lostpointercapture`, re, v),
    W(`keydown`, re, y),
    K(e, b),
    mt());
}
var ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu = o(() => {
    (Vo(),
      Lo(),
      ks(),
      Qc(),
      (ou = G(
        `<span class="text-small text-muted" aria-live="polite">Saving…</span>`,
      )),
      (su = G(
        `<span class="effort-saved flex items-center gap-1 text-small" aria-live="polite"><svg class="size-3" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> Saved</span>`,
      )),
      (cu = G(`<span></span>`)),
      (lu = G(`<span class="effort-ring"></span>`)),
      (uu = G(`<span> </span>`)),
      (du = G(
        `<div class="flex flex-col gap-0.5"><div class="flex items-center gap-2 px-2 pt-1.5"><span class="text-small font-semibold">Effort</span> <span class="effort-label min-w-0 flex-1 truncate text-small font-semibold" aria-hidden="true"> </span> <!></div> <div role="slider" tabindex="0" aria-label="Effort"><div class="effort-track"><div></div> <!> <span><!></span></div> <div class="effort-names" aria-hidden="true"></div></div></div>`,
      )),
      yi([`pointerdown`, `pointermove`, `pointerup`, `keydown`]));
  });
function pu(e, t) {
  pt(t, !0);
  let n = N(() => t.meta.modes ?? []),
    r = N(() => $.effort),
    i = Ln([]);
  $.refreshEffort();
  function a(e) {
    (Q({ type: `setMode`, modeId: e }), t.onclose(`pick`));
  }
  function o() {
    let e = Math.max(
      0,
      H(n).findIndex((e) => e.id === t.meta.mode),
    );
    i[e]?.focus();
  }
  function s(e) {
    let r = i.indexOf((__env.root?.activeElement ?? document.activeElement)),
      a = H(n).length + 1;
    switch (e.key) {
      case `ArrowDown`:
      case `ArrowUp`:
      case `ArrowLeft`:
      case `ArrowRight`: {
        e.preventDefault();
        let t = e.key === `ArrowDown` || e.key === `ArrowRight`;
        i[ml(r, t ? 1 : -1, a)]?.focus();
        break;
      }
      case `Home`:
      case `End`:
        (e.preventDefault(), i[e.key === `Home` ? 0 : a - 1]?.focus());
        break;
      case `Escape`:
        (e.preventDefault(), e.stopPropagation(), t.onclose(`escape`));
        break;
      case `Tab`:
        t.onclose(`outside`);
    }
  }
  var c = vu(),
    l = z(I(c), 2);
  (da(
    l,
    23,
    () => H(n),
    (e) => e.id,
    (e, n, r) => {
      let o = N(() => H(n).id === t.meta.mode),
        s = N(() => hc(H(n)));
      var c = gu(),
        l = I(c);
      {
        let e = N(() => gc(H(n)));
        Ql(l, {
          get icon() {
            return H(e);
          },
          class: `mt-0.5 size-4 opacity-85`,
        });
      }
      var u = z(l, 2),
        d = I(u),
        f = R(d, !0),
        p = z(d, 2),
        m = (e) => {
          var t = mu(),
            n = R(t, !0);
          (B(() => q(n, H(s))), K(e, t));
        };
      (J(p, (e) => {
        H(s) && e(m);
      }),
        k(u));
      var h = z(u, 2),
        g = (e) => {
          K(e, hu());
        };
      (J(h, (e) => {
        H(o) && e(g);
      }),
        k(c),
        _o(
          c,
          (e, t) => (i[t] = e),
          (e) => i?.[e],
          () => [H(r)],
        ),
        B(
          (e) => {
            (Z(c, `aria-checked`, H(o)),
              X(
                c,
                1,
                Y([
                  `flex w-full cursor-pointer items-start gap-2.5 rounded-md px-2 py-1.5 text-left outline-none hover:bg-hover focus-visible:bg-selected focus-visible:text-selected-fg`,
                  H(o) && `bg-selected/60`,
                ]),
              ),
              q(f, e));
          },
          [() => mc(H(n))],
        ),
        W(`click`, c, () => a(H(n).id)),
        K(e, c));
    },
  ),
    k(l));
  var u = z(l, 6);
  au(u, {
    get value() {
      return H(r).value;
    },
    get loading() {
      return H(r).loading;
    },
    get saving() {
      return H(r).saving;
    },
    get error() {
      return H(r).error;
    },
    get supported() {
      return H(r).supported;
    },
    get levels() {
      return H(r).levels;
    },
    onpick: (e) => $.setEffort(e),
    get el() {
      return i[H(n).length];
    },
    set el(e) {
      i[H(n).length] = e;
    },
  });
  var d = z(u, 4),
    f = (e) => {
      var t = _u(),
        n = R(t, !0);
      (B(() => q(n, H(r).error)), K(e, t));
    };
  (J(d, (e) => {
    H(r).error && e(f);
  }),
    k(c),
    Ma(c, () => _l(() => t.onclose(`outside`))),
    Ma(c, () => () => {
      queueMicrotask(o);
    }),
    W(`keydown`, c, s),
    K(e, c),
    mt());
}
var mu,
  hu,
  gu,
  _u,
  vu,
  yu = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      wc(),
      gl(),
      vl(),
      Bs(),
      fu(),
      iu(),
      (mu = G(`<span class="text-small opacity-75"> </span>`)),
      (hu = Ni(
        `<svg class="mt-0.5 size-3.5 shrink-0" viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
      )),
      (gu = G(
        `<button type="button" role="menuitemradio"><!> <span class="flex min-w-0 flex-1 flex-col"><span class="text-small font-semibold"> </span> <!></span> <!></button>`,
      )),
      (_u = G(
        `<p class="px-2 pb-1 text-[11px] text-error" role="alert"> </p>`,
      )),
      (vu = G(
        `<div role="menu" tabindex="-1" aria-label="Mode and effort" class="absolute right-0 bottom-full mb-1.5 flex w-84 max-w-[calc(100vw-24px)] flex-col gap-0.5 rounded-[10px] border border-widget-border bg-widget p-1.5 shadow-lg shadow-shadow"><div class="px-2 pt-1 pb-1 text-[11px] font-semibold tracking-wider text-muted uppercase">When Hermes edits files</div> <div role="group" aria-label="Mode" class="flex flex-col gap-0.5"></div> <p class="px-2 pt-0.5 pb-1 pl-8.5 text-[11px] text-muted">In every mode, sensitive files and risky commands still ask.</p> <div class="mx-1 my-0.5 border-t border-widget-border"></div> <!> <p class="px-2 pb-1 text-[11px] text-muted">How hard Hermes thinks. Used from your next new chat, in all of Hermes.</p> <!></div>`,
      )),
      yi([`keydown`, `click`]));
  });
function bu(e, t) {
  let n = Ii();
  pt(t, !0);
  let r = P(``),
    i = N(() => dl(t.meta.models ?? [], H(r))),
    a = N(() => fl(H(i))),
    o = N(() => H(a).flatMap((e) => e.items)),
    s = N(() => new Map(H(o).map((e, t) => [e.id, t]))),
    c = P(Ln(Jr(() => H(o).findIndex((e) => e.id === t.meta.modelId)))),
    l = (e) => `${n}-${e}`;
  Q({ type: `refreshUsage` });
  let u = Date.now(),
    d = (e) => zc($.accountUsage.byProvider[Vc(e[0]?.id)], u),
    f = (e) => $.accountUsage.loading.includes(Vc(e[0]?.id)),
    p = { muted: `text-muted`, warning: `text-warning`, error: `text-error` },
    m;
  cr(() => {
    H(c) < 0 ||
      !m ||
      m
        .querySelector(`#${CSS.escape(l(H(c)))}`)
        ?.scrollIntoView({ block: `nearest` });
  });
  function h(e) {
    let n = H(o)[e];
    n &&
      (t.meta.limit
        ? Q({ type: `continueWith`, modelId: n.id })
        : n.id !== t.meta.modelId && Q({ type: `setModel`, modelId: n.id }),
      t.onclose(`pick`));
  }
  function g(e) {
    switch (e.key) {
      case `ArrowDown`:
      case `ArrowUp`:
        (e.preventDefault(),
          F(c, ml(H(c), e.key === `ArrowDown` ? 1 : -1, H(o).length), !0));
        break;
      case `Home`:
      case `End`:
        if (!e.ctrlKey) return;
        (e.preventDefault(), F(c, e.key === `Home` ? 0 : H(o).length - 1, !0));
        break;
      case `Enter`:
        (e.preventDefault(), h(H(c)));
        break;
      case `Escape`:
        (e.preventDefault(), e.stopPropagation(), t.onclose(`escape`));
    }
  }
  var _ = ku(),
    v = I(_),
    y = I(v);
  (Ja(y), Ma(y, () => (e) => e.focus()), k(v));
  var b = z(v, 2),
    x = I(b),
    S = (e) => {
      var t = xu(),
        n = R(t);
      (B(() => q(n, `No model matches “${H(r) ?? ``}”.`)), K(e, t));
    };
  (J(x, (e) => {
    H(o).length === 0 && e(S);
  }),
    da(
      z(x, 2),
      17,
      () => H(a),
      (e) => e.provider,
      (e, n) => {
        let r = N(() => d(H(n).items));
        var i = Ou(),
          a = I(i),
          o = I(a),
          u = R(o, !0),
          m = z(o, 2),
          g = (e) => {
            var t = Su(),
              n = R(t, !0);
            (B(() => {
              (X(
                t,
                1,
                Y([
                  `shrink-0 tracking-normal normal-case tabular-nums`,
                  p[H(r).tone],
                  H(r).tone === `muted` ? `font-normal` : `font-semibold`,
                ]),
              ),
                q(n, H(r).text));
            }),
              K(e, t));
          },
          _ = (e) => {
            K(e, Cu());
          },
          v = N(() => f(H(n).items));
        (J(m, (e) => {
          H(r) ? e(g) : H(v) && e(_, 1);
        }),
          k(a));
        var y = z(a, 2),
          b = (e) => {
            var t = wu(),
              n = I(t);
            let i;
            (k(t),
              B(
                (e) => {
                  (X(
                    t,
                    1,
                    Y([
                      `mx-2 mb-1 h-[3px] overflow-hidden rounded-full bg-fg/15`,
                      p[H(r).tone],
                    ]),
                  ),
                    (i = Ga(n, ``, i, { width: e })));
                },
                [() => `${Math.max(H(r).ratio * 100, 1.5)}%`],
              ),
              K(e, t));
          };
        (J(y, (e) => {
          H(r)?.percent !== void 0 && e(b);
        }),
          da(
            z(y, 2),
            17,
            () => H(n).items,
            (e) => e.id,
            (e, n) => {
              let i = N(() => H(s).get(H(n).id) ?? -1),
                a = N(() => H(n).id === t.meta.modelId);
              var o = Du(),
                u = I(o),
                d = R(u, !0),
                f = z(u, 2),
                p = (e) => {
                  var t = Tu(),
                    n = R(t);
                  (B(() => q(n, `resets ${H(r).resets ?? ``}`)), K(e, t));
                };
              J(f, (e) => {
                H(r)?.full && H(r).resets && e(p);
              });
              var m = z(f, 2),
                g = (e) => {
                  K(e, Eu());
                };
              (J(m, (e) => {
                H(a) && e(g);
              }),
                k(o),
                B(
                  (e) => {
                    (Z(o, `id`, e),
                      Z(o, `aria-selected`, H(i) === H(c)),
                      X(
                        o,
                        1,
                        Y([
                          `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-small`,
                          H(i) === H(c) ? `bg-selected text-selected-fg` : ``,
                          H(r)?.full && H(i) !== H(c) && `opacity-60`,
                        ]),
                      ),
                      Z(
                        o,
                        `title`,
                        H(r)?.full
                          ? `${H(n).id} — this subscription is used up${H(r).resets ? ` until ${H(r).resets}` : ``}`
                          : H(n).id,
                      ),
                      q(d, H(n).label));
                  },
                  [() => l(H(i))],
                ),
                W(`pointermove`, o, () => F(c, H(i), !0)),
                W(`click`, o, () => h(H(i))),
                W(`keydown`, o, () => void 0),
                K(e, o));
            },
          ),
          k(i),
          B(() => {
            (Z(
              i,
              `aria-label`,
              H(r)
                ? `${H(n).provider}, ${H(r).text}${H(r).full && H(r).resets ? `, resets ${H(r).resets}` : ``}`
                : H(n).provider,
            ),
              Z(a, `title`, H(r)?.tooltip),
              q(u, H(n).provider));
          }),
          K(e, i));
      },
    ),
    k(b),
    _o(
      b,
      (e) => (m = e),
      () => m,
    ));
  var ee = R(z(b, 2));
  (k(_),
    Ma(_, () => _l(() => t.onclose(`outside`))),
    B(
      (e) => {
        (Z(y, `aria-controls`, n),
          Z(y, `aria-activedescendant`, e),
          Z(b, `id`, n),
          q(
            ee,
            `${t.meta.limit ? `Your message is sent again on the model you pick` : `Switching keeps this conversation`}
    · Enter to switch · Esc to close`,
          ));
      },
      [() => (H(c) >= 0 ? l(H(c)) : void 0)],
    ),
    W(`input`, y, () => F(c, H(o).length > 0 ? 0 : -1, !0)),
    W(`keydown`, y, g),
    so(
      y,
      () => H(r),
      (e) => F(r, e),
    ),
    K(e, _),
    mt());
}
var xu,
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku,
  Au = o(() => {
    (Vo(),
      Lo(),
      zo(),
      Hs(),
      gl(),
      vl(),
      Uc(),
      Bs(),
      (xu = G(`<p class="px-2 py-2 text-small text-muted"> </p>`)),
      (Su = G(`<span> </span>`)),
      (Cu = G(
        `<span class="shrink-0 font-normal tracking-normal normal-case opacity-75">checking…</span>`,
      )),
      (wu = G(
        `<div aria-hidden="true"><div class="h-full rounded-full bg-current"></div></div>`,
      )),
      (Tu = G(`<span class="shrink-0 opacity-80"> </span>`)),
      (Eu = Ni(
        `<svg class="size-3.5 shrink-0" viewBox="0 0 16 16" aria-label="current model"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
      )),
      (Du = G(
        `<div role="option" tabindex="-1"><span class="min-w-0 flex-1 truncate"> </span> <!> <!></div>`,
      )),
      (Ou = G(
        `<div role="group"><div class="flex items-center gap-2 px-2 pt-2 pb-1 text-[11px] font-semibold tracking-wider text-muted uppercase"><span class="min-w-0 flex-1 truncate"> </span> <!></div> <!> <!></div>`,
      )),
      (ku = G(
        `<div class="absolute right-0 bottom-full left-0 mb-1.5 flex max-h-[min(60vh,420px)] flex-col overflow-hidden rounded-[10px] border border-widget-border bg-widget shadow-lg shadow-shadow"><div class="shrink-0 p-1.5 pb-1"><input type="text" role="combobox" aria-expanded="true" aria-label="Search models" placeholder="Search models" class="h-7 w-full rounded-md border border-input-border bg-input px-2.5 text-input-fg outline-none placeholder:text-placeholder focus:outline-1 focus:-outline-offset-1 focus:outline-focus"/></div> <div role="listbox" aria-label="Models" class="min-h-0 flex-1 overflow-y-auto px-1.5"><!> <!></div> <p class="shrink-0 border-t border-border px-3 py-1.5 text-small text-muted"> </p></div>`,
      )),
      yi([`input`, `keydown`, `pointermove`, `click`]));
  });
function ju(e, t) {
  pt(t, !0);
  let n;
  cr(() => {
    (t.active,
      n
        ?.querySelector(`[aria-selected="true"]`)
        ?.scrollIntoView({ block: `nearest` }));
  });
  function r(e) {
    let n = t.query.toLowerCase(),
      r = n ? e.toLowerCase().indexOf(n) : -1;
    return r < 0
      ? [e, ``, ``]
      : [e.slice(0, r), e.slice(r, r + n.length), e.slice(r + n.length)];
  }
  let i = N(() =>
    t.sections.reduce(
      (e, n, r) => (
        e.push(
          r === 0
            ? 0
            : (e[r - 1] ?? 0) + (t.sections[r - 1]?.items.length ?? 0),
        ),
        e
      ),
      [],
    ),
  );
  var a = zu(),
    o = I(a);
  (da(
    o,
    23,
    () => t.sections,
    (e) => e.title,
    (e, n, a) => {
      var o = Ru(),
        s = I(o),
        c = R(s, !0);
      (da(
        z(s, 2),
        19,
        () => H(n).items,
        (e) => e.kind + e.name,
        (e, n, o) => {
          let s = N(() => (H(i)[H(a)] ?? 0) + H(o)),
            c = N(() => H(n).kind === `file` || H(n).kind === `folder`),
            l = N(() => {
              let [e, t, i] = r(H(c) ? nl(H(n).name) : H(n).name);
              return { a: e, b: t, c: i };
            });
          var u = Lu(),
            d = I(u),
            f = (e) => {
              var r = Pu(),
                i = L(r),
                a = I(i),
                o = (e) => {
                  K(e, Mu());
                },
                c = (e) => {
                  K(e, Nu());
                };
              (J(a, (e) => {
                H(n).kind === `folder` ? e(o) : e(c, -1);
              }),
                k(i));
              var u = z(i, 2),
                d = I(u, !0),
                f = z(d),
                p = R(f, !0),
                m = z(f, 1, !0);
              k(u);
              var h = z(u, 2),
                g = R(h, !0);
              (B(
                (e) => {
                  (q(d, H(l).a),
                    q(p, H(l).b),
                    q(m, H(l).c),
                    X(
                      h,
                      1,
                      Y([
                        `min-w-0 flex-1 truncate text-small`,
                        H(s) === t.active ? `opacity-80` : `text-muted`,
                      ]),
                    ),
                    q(g, e));
                },
                [() => (H(n).kind === `folder` ? `folder` : rl(H(n).name))],
              ),
                K(e, r));
            },
            p = (e) => {
              var r = Iu(),
                i = L(r),
                a = I(i),
                o = z(a),
                c = R(o, !0),
                u = z(o, 1, !0);
              k(i);
              var d = z(i, 2),
                f = (e) => {
                  var r = Fu(),
                    i = R(r, !0);
                  (B(() => {
                    (X(
                      r,
                      1,
                      Y([
                        `min-w-0 flex-1 truncate text-small`,
                        H(s) === t.active ? `opacity-80` : `text-muted`,
                      ]),
                    ),
                      q(i, H(n).detail));
                  }),
                    K(e, r));
                };
              (J(d, (e) => {
                H(n).detail && e(f);
              }),
                B(() => {
                  (q(a, `/${H(l).a ?? ``}`), q(c, H(l).b), q(u, H(l).c));
                }),
                K(e, r));
            };
          (J(d, (e) => {
            H(c) ? e(f) : e(p, -1);
          }),
            k(u),
            B(() => {
              (Z(u, `id`, `${t.id ?? ``}-${H(s) ?? ``}`),
                Z(u, `aria-selected`, H(s) === t.active),
                X(
                  u,
                  1,
                  Y([
                    `flex min-h-7 cursor-pointer items-center gap-2 rounded-md px-2 py-0.5`,
                    H(s) === t.active ? `bg-selected text-selected-fg` : ``,
                  ]),
                ));
            }),
            W(`pointermove`, u, () => t.onhover(H(s))),
            W(`pointerdown`, u, (e) => e.preventDefault()),
            W(`click`, u, () => t.onpick(H(n))),
            W(`keydown`, u, () => void 0),
            K(e, u));
        },
      ),
        k(o),
        B(() => {
          (Z(o, `aria-label`, H(n).title), q(c, H(n).title));
        }),
        K(e, o));
    },
  ),
    k(o),
    _o(
      o,
      (e) => (n = e),
      () => n,
    ));
  var s = R(z(o, 2), !0);
  (k(a),
    B(() => {
      (Z(a, `id`, t.id),
        Z(a, `aria-label`, t.sections[0]?.title ?? `Suggestions`),
        q(s, t.hint));
    }),
    K(e, a),
    mt());
}
var Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Ru,
  zu,
  Bu = o(() => {
    (Vo(),
      Lo(),
      ll(),
      (Mu = Ni(
        `<path d="M2.5 4.5h4l1.5 1.5h5.5v6.5h-11z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"></path>`,
      )),
      (Nu = Ni(
        `<path d="M4 2h5l3 3v9H4zM9 2v3h3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"></path>`,
      )),
      (Pu = G(
        `<svg class="size-3.5 shrink-0 opacity-75" viewBox="0 0 16 16" aria-hidden="true"><!></svg> <span class="shrink-0"> <mark class="bg-transparent font-bold text-link"> </mark> </span> <span> </span>`,
        1,
      )),
      (Fu = G(`<span> </span>`)),
      (Iu = G(
        `<span class="shrink-0 font-mono text-[12px]"> <mark class="bg-transparent font-bold text-link"> </mark> </span> <!>`,
        1,
      )),
      (Lu = G(`<div role="option" tabindex="-1"><!></div>`)),
      (Ru = G(
        `<div role="group"><div class="px-2 pt-1.5 pb-1 text-[11px] font-semibold tracking-wider text-muted uppercase"> </div> <!></div>`,
      )),
      (zu = G(
        `<div role="listbox" class="absolute right-0 bottom-full left-0 z-20 mb-1.5 flex max-h-[min(55vh,420px)] flex-col overflow-hidden rounded-[10px] border border-widget-border bg-widget p-1.5 shadow-lg shadow-shadow"><div class="min-h-0 flex-1 overflow-y-auto"></div> <p class="shrink-0 border-t border-border px-2 pt-1 text-[11px] text-muted"> </p></div>`,
      )),
      yi([`pointermove`, `pointerdown`, `click`, `keydown`]));
  });
function Vu(e, t) {
  let n = Ii();
  pt(t, !0);
  let r = P(void 0),
    i = P(void 0),
    a = P(void 0),
    o = P(void 0),
    s = N(() => $.context),
    c = P(``),
    l;
  function u(e) {
    (F(c, e, !0), clearTimeout(l), (l = setTimeout(() => F(c, ``), 6e3)));
  }
  function d(e) {
    let t = e.clipboardData;
    if (!t || !H(s).images || t.getData(`text/plain`)) return;
    let n = [...t.files].filter((e) => e.type.startsWith(`image/`));
    n.length !== 0 && (e.preventDefault(), f(n));
  }
  function f(e) {
    for (let t of e) {
      if (!As.has(t.type)) {
        u(`Only PNG, JPEG, GIF and WebP images can be added.`);
        continue;
      }
      if (Math.ceil(t.size / 3) * 4 > 5e6) {
        u(`That image is too large (about 3.7 MB at most).`);
        continue;
      }
      let e = new FileReader();
      ((e.onload = () => {
        let n = typeof e.result == `string` ? e.result : ``,
          r = n.slice(n.indexOf(`,`) + 1);
        r && Q({ type: `pasteImage`, mimeType: t.type, data: r });
      }),
        e.readAsDataURL(t));
    }
  }
  let p = P(0),
    m = [`application/vnd.code.uri-list`, `text/uri-list`, `Files`],
    h = (e) => [...(e.dataTransfer?.types ?? [])].some((e) => m.includes(e));
  function g(e) {
    h(e) && (e.preventDefault(), On(p));
  }
  function _(e) {
    h(e) &&
      e.dataTransfer &&
      (e.preventDefault(), (e.dataTransfer.dropEffect = `copy`));
  }
  function v() {
    F(p, Math.max(0, H(p) - 1), !0);
  }
  function y(e) {
    let t = e.dataTransfer;
    if ((F(p, 0), !t)) return;
    e.preventDefault();
    let n = Tc(
      t.getData(`application/vnd.code.uri-list`) || t.getData(`text/uri-list`),
    );
    if (n.length > 0) {
      Q({ type: `dropUris`, uris: n.slice(0, 50) });
      return;
    }
    let r = [...t.files],
      i = r.filter((e) => e.type.startsWith(`image/`));
    (i.length > 0 && H(s).images && f(i),
      i.length < r.length &&
        u(
          `Files from outside VS Code cannot be added: drop them from VS Code's Explorer.`,
        ));
  }
  let b = N(() => $.menu),
    x = N(() => t.meta.busy),
    S = N(
      () => !H(x) && !t.meta.switchingModel && (t.meta.models?.length ?? 0) > 0,
    ),
    ee = N(() => t.meta.modes?.find((e) => e.id === t.meta.mode)),
    te = N(() => {
      let e = `Model: ${t.meta.model ?? `unknown`}`;
      return t.meta.switchingModel
        ? `Switching to ${t.meta.switchingModel}…`
        : H(x)
          ? `${e} — switch when Hermes is idle`
          : H(S)
            ? `${e} — switch (keeps this conversation)`
            : e;
    }),
    ne = N(() => zc($.accountUsage.byProvider[Vc(t.meta.modelId)], Date.now())),
    C = N(() => Bc(H(ne), t.meta.limit?.kind === `limit`)),
    w = N(() => (H(C) && H(ne) ? `${H(te)}\n\n${H(ne).tooltip}` : H(te)));
  cr(() => {
    H(x) && H(b) === `model` && ($.menu = null);
  });
  function re(e) {
    $.menu = H(b) === e ? null : e;
  }
  function T(e) {
    let t = H(b);
    $.menu = null;
    let n = { model: H(r), mode: H(i), add: H(a), context: H(o) };
    e === `escape` && t ? n[t]?.focus() : e === `pick` && $.focusComposer();
  }
  let E = N(() => $.draft.length > js),
    ie = N(() => yc(t.meta) && $.draft.trim().length > 0 && !H(E)),
    ae = N(() => (t.meta.usage ? fc(t.meta.usage) : void 0)),
    oe = 2 * Math.PI * 7.5,
    D = N(() =>
      H(ae) === void 0
        ? ``
        : H(ae).ratio >= 0.9
          ? `text-error`
          : H(ae).ratio >= 0.7
            ? `text-warning`
            : `text-muted`,
    );
  function se(e) {
    return e.replace(/^(?:[ \t]*\r?\n)+/, ``).trimEnd();
  }
  let ce = P(void 0),
    le = P(void 0),
    ue = N(() => $.panels?.capabilities.skills ?? []),
    de = N(() => t.meta.commands ?? []),
    fe = N(() => sl($.draft, H(ue))),
    pe = N(() => H(fe).some((e) => e.mention));
  cr(() => {
    H(le) && H(ce) && (H(le).scrollTop = H(ce).scrollTop);
  });
  let me = P(null),
    he = P(0),
    ge = null,
    _e;
  function ve() {
    let e = H(ce);
    if (!e || e.selectionStart !== e.selectionEnd || $.draft === ge) {
      F(me, null);
      return;
    }
    ge = null;
    let t = e.selectionStart ?? 0,
      n = cl($.draft, t),
      r = n ? void 0 : il($.draft, t),
      i = n
        ? { kind: `slash`, query: n.query, start: n.start, atStart: n.atStart }
        : r
          ? { kind: `mention`, query: r.query, start: r.start }
          : null;
    if (
      ((i?.query !== H(me)?.query || i?.kind !== H(me)?.kind) && F(he, 0),
      i?.kind === `mention` &&
        (H(me)?.kind !== `mention` || H(me).query !== i.query))
    ) {
      clearTimeout(_e);
      let e = i.query;
      _e = setTimeout(() => $.searchFiles(e), 60);
    }
    F(me, i, !0);
  }
  let ye = N(() => {
      if (!H(me)) return [];
      if (H(me).kind === `slash`) {
        let e = tl(H(ue), H(me).atStart ? H(de) : [], H(me).query),
          t = [];
        if (e.skills.length) {
          let n =
            e.skillMatches < H(ue).length
              ? ` · ${e.skillMatches} of ${H(ue).length}`
              : ` · ${H(ue).length}`;
          t.push({ title: `Skills${n}`, items: e.skills });
        }
        return (
          e.commands.length &&
            t.push({ title: `Hermes commands`, items: e.commands }),
          t
        );
      }
      let e = $.fileResults.items.map((e) => ({ kind: e.kind, name: e.path }));
      return e.length ? [{ title: `Files`, items: e }] : [];
    }),
    be = N(() => H(ye).flatMap((e) => e.items)),
    xe = N(() => !!H(me) && H(be).length > 0 && H(b) === null);
  async function Se(e) {
    let t = H(ce),
      n = H(me);
    if (!e || !t || !n) return;
    let r = t.selectionStart ?? 0,
      i = $.draft,
      a = 0;
    if (e.kind === `skill` && n.kind === `slash`) {
      let t = `/${e.name} `;
      (($.draft = i.slice(0, n.start) + t + i.slice(r).replace(/^\s+/, ``)),
        (a = n.start + t.length));
    } else if (e.kind === `command`) {
      let t = `/${e.name} `;
      (($.draft = t + i.slice(r).replace(/^\s+/, ``)), (a = t.length));
    } else if (n.kind === `mention`) {
      let t = `@${e.name}${e.kind === `folder` ? `/` : ``} `;
      (($.draft = i.slice(0, n.start) + t + i.slice(r)),
        (a = n.start + t.length),
        e.kind === `file` && $.mentionFile(e.name));
    }
    (F(me, null), await Gr(), t.focus(), t.setSelectionRange(a, a));
  }
  function Ce() {
    if (!H(ie)) return;
    let e = se($.draft);
    if (!e) return;
    let t = ol(e, H(ue), H(de)),
      n = $.skill && !t.includes($.skill) ? [$.skill, ...t] : t;
    __env?.promptHistory?.push(e);
    (Q({ type: `send`, text: e, ...(n.length ? { skills: n } : {}) }),
      ($.draft = ``),
      ($.skill = null),
      F(me, null));
  }
  function we() {
    Q({ type: `cancel` });
  }
  async function applyPrompt(val) {
    $.draft = val;
    await Gr();
    let ta = H(ce);
    if (ta) {
      ta.focus();
      ta.setSelectionRange(val.length, val.length);
    }
  }
  async function Te(e) {
    if (H(xe) && !e.isComposing) {
      if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
        e.preventDefault();
        let t = H(be).length;
        F(he, (H(he) + (e.key === `ArrowDown` ? 1 : t - 1)) % t);
        return;
      }
      if ((e.key === `Enter` && !e.shiftKey) || e.key === `Tab`) {
        (e.preventDefault(), Se(H(be)[H(he)]));
        return;
      }
      if (e.key === `Escape`) {
        (e.preventDefault(), e.stopPropagation(), (ge = $.draft), F(me, null));
        return;
      }
    }
    let promptHistory = __env?.promptHistory;
    if (promptHistory && !e.isComposing) {
      if (e.key === `ArrowUp`) {
        let textarea = H(ce);
        let selStart = textarea?.selectionStart ?? 0;
        let currentText = textarea?.value ?? $.draft ?? "";
        let textBefore = currentText.slice(0, selStart);
        if (promptHistory.isBrowsing() || !textBefore.includes("\n")) {
          let prev = promptHistory.navigateUp(currentText);
          if (prev !== undefined) {
            e.preventDefault();
            await applyPrompt(prev);
            return;
          }
        }
      } else if (e.key === `ArrowDown` && promptHistory.isBrowsing()) {
        let next = promptHistory.navigateDown();
        if (next !== undefined) {
          e.preventDefault();
          await applyPrompt(next);
          return;
        }
      }
    }
    if (
      e.key === `Backspace` &&
      $.skill &&
      $.draft === `` &&
      H(ce)?.selectionStart === 0
    ) {
      (e.preventDefault(), ($.skill = null));
      return;
    }
    if (e.key === `Enter` && !e.shiftKey) {
      if (e.isComposing || e.keyCode === 229) return;
      (e.preventDefault(), Ce());
    } else e.key === `Escape` && t.meta.busy && (e.preventDefault(), we());
  }
  function O(e) {
    (e.preventDefault(), Ce());
  }
  var Ee = cd(),
    De = I(Ee);
  let Oe;
  var ke = I(De),
    Ae = (e) => {
      K(e, Hu());
    };
  J(ke, (e) => {
    H(p) > 0 && e(Ae);
  });
  var je = z(ke, 2),
    Me = (e) => {
      bu(e, {
        get meta() {
          return t.meta;
        },
        onclose: T,
      });
    },
    Ne = (e) => {
      pu(e, {
        get meta() {
          return t.meta;
        },
        onclose: T,
      });
    },
    Pe = (e) => {
      Ol(e, { onclose: T });
    },
    Fe = (e) => {
      Nl(e, {
        get meta() {
          return t.meta;
        },
        onclose: T,
      });
    };
  J(je, (e) => {
    H(b) === `model`
      ? e(Me)
      : H(b) === `mode`
        ? e(Ne, 1)
        : H(b) === `add`
          ? e(Pe, 2)
          : H(b) === `context` && e(Fe, 3);
  });
  var Ie = z(je, 2),
    Le = (e) => {
      {
        let t = N(() => H(me)?.query ?? ``),
          r = N(() =>
            H(me)?.kind === `mention`
              ? `↑↓ to move · Enter or Tab to add · Esc to close`
              : `↑↓ to move · Enter or Tab to pick · Esc to close`,
          );
        ju(e, {
          get id() {
            return n;
          },
          get sections() {
            return H(ye);
          },
          get active() {
            return H(he);
          },
          get query() {
            return H(t);
          },
          onpick: (e) => void Se(e),
          onhover: (e) => F(he, e, !0),
          get hint() {
            return H(r);
          },
        });
      }
    };
  J(Ie, (e) => {
    H(xe) && e(Le);
  });
  var Re = z(Ie, 2),
    Be = (e) => {
      var t = Yu(),
        n = I(t),
        r = (e) => {
          var t = Uu(),
            n = I(t);
          yl(n, { kind: `skill`, class: `size-3` });
          var r = z(n, 2),
            i = R(r),
            a = z(r, 2);
          (k(t),
            B(() => {
              (Z(
                t,
                `title`,
                `Hermes loads the ${$.skill ?? ``} skill for this message`,
              ),
                q(i, `skill · ${$.skill ?? ``}`),
                Z(a, `aria-label`, `Remove the ${$.skill ?? ``} skill`));
            }),
            W(`click`, a, () => {
              (($.skill = null), H(ce)?.focus());
            }),
            K(e, t));
        };
      J(n, (e) => {
        $.skill && e(r);
      });
      var i = z(n, 2);
      (Gl(I(i), {}), k(i));
      var a = z(i, 2);
      da(
        a,
        17,
        () => H(s).items,
        (e) => e.id,
        (e, t) => {
          var n = qu(),
            r = I(n),
            i = (e) => {
              var n = Gu(),
                r = I(n);
              Yl(r, {
                get id() {
                  return H(t).id;
                },
              });
              var i = z(r, 2),
                a = R(i, !0),
                o = z(i, 2),
                s = (e) => {
                  var n = Wu(),
                    r = R(n, !0);
                  (B(() => q(r, H(t).size)), K(e, n));
                };
              (J(o, (e) => {
                H(t).size && e(s);
              }),
                k(n),
                B(() => {
                  (Z(n, `aria-label`, `View ${H(t).label ?? ``}`),
                    q(a, H(t).label));
                }),
                W(`click`, n, () => $.openImage(H(t))),
                K(e, n));
            },
            a = (e) => {
              var n = Ku(),
                r = L(n);
              yl(r, {
                get kind() {
                  return H(t).kind;
                },
                class: `size-3 opacity-75`,
              });
              var i = R(z(r, 2), !0);
              (B(() => q(i, H(t).label)), K(e, n));
            };
          J(r, (e) => {
            H(t).kind === `image` ? e(i) : e(a, -1);
          });
          var o = z(r, 2);
          (k(n),
            B(() => {
              (X(n, 1, Y([`ctx-chip`, H(t).kind === `image` && `pl-[3px]`])),
                Z(n, `title`, H(t).detail ?? H(t).label),
                Z(o, `aria-label`, `Remove ${H(t).label ?? ``}`));
            }),
            W(`click`, o, () => $.removeContext(H(t).id)),
            K(e, n));
        },
      );
      var o = z(a, 2),
        l = (e) => {
          var t = Ju(),
            n = R(t, !0);
          (B(() => q(n, H(c))), K(e, t));
        };
      (J(o, (e) => {
        H(c) && e(l);
      }),
        k(t),
        B(() =>
          X(
            t,
            1,
            Y([
              `flex flex-wrap gap-1.5 px-2 pt-2`,
              H(s).items.length === 0 &&
                !H(c) &&
                !$.skill &&
                `@min-[520px]:hidden`,
            ]),
          ),
        ),
        K(e, t));
    };
  J(Re, (e) => {
    (H(s).items.length > 0 || H(c) || $.editor || $.skill) && e(Be);
  });
  var Ve = z(Re, 2),
    A = I(Ve),
    j = (e) => {
      var t = Zu(),
        n = I(t);
      da(
        n,
        17,
        () => H(fe),
        ca,
        (e, t) => {
          var n = Fi(),
            r = L(n),
            i = (e) => {
              var n = Xu(),
                r = R(n, !0);
              (B(() => q(r, H(t).text)), K(e, n));
            },
            a = (e) => {
              var n = Pi();
              (B(() => q(n, H(t).text)), K(e, n));
            };
          (J(r, (e) => {
            H(t).mention ? e(i) : e(a, -1);
          }),
            K(e, n));
        },
      );
      var r = z(n, 1, !0);
      ((r.nodeValue = ` `),
        k(t),
        _o(
          t,
          (e) => F(le, e),
          () => H(le),
        ),
        K(e, t));
    };
  J(A, (e) => {
    H(pe) && e(j);
  });
  var M = z(A, 2);
  (jt(M),
    _o(
      M,
      (e) => F(ce, e),
      () => H(ce),
    ),
    Ma(M, () => (e) => $.registerComposer(e)),
    k(Ve));
  var He = z(Ve, 2),
    Ue = I(He);
  _o(
    Ue,
    (e) => F(a, e),
    () => H(a),
  );
  var We = z(Ue, 2),
    Ge = (e) => {
      var t = Qu(),
        n = R(t);
      (B(
        (e, t) => q(n, `Too long: ${e ?? ``} / ${t ?? ``} characters`),
        [
          () => $.draft.length.toLocaleString(`en-US`),
          () => js.toLocaleString(`en-US`),
        ],
      ),
        K(e, t));
    },
    Ke = (e) => {
      var n = ad(),
        a = L(n),
        s = (e) => {
          var n = $u(),
            r = I(n),
            i = z(I(r));
          k(r);
          var a = z(r);
          (k(n),
            _o(
              n,
              (e) => F(o, e),
              () => H(o),
            ),
            B(
              (e, t) => {
                (X(n, 1, Y([`ring-btn`, H(D)])),
                  Z(n, `aria-expanded`, H(b) === `context`),
                  Z(
                    n,
                    `aria-label`,
                    `Context: ${H(ae).label ?? ``} used. Show details`,
                  ),
                  Z(n, `title`, e),
                  Z(i, `stroke-dasharray`, `${t ?? ``} 47.12388980384689`),
                  q(a, ` ${H(ae).label ?? ``}`));
              },
              [() => _c(t.meta.usage), () => Math.max(H(ae).ratio * oe, 0.6)],
            ),
            W(`click`, n, () => re(`context`)),
            K(e, n));
        };
      J(a, (e) => {
        H(ae) && t.meta.usage && e(s);
      });
      var c = z(a, 2),
        l = (e) => {
          var n = rd(),
            i = I(n),
            a = (e) => {
              var t = ed();
              (ze(2), K(e, t));
            },
            o = (e) => {
              var n = nd(),
                r = L(n),
                i = R(r, !0),
                a = z(r, 2),
                o = (e) => {
                  var t = td(),
                    n = z(I(t)),
                    r = R(n, !0),
                    i = R(z(n), !0);
                  (k(t),
                    B(() => {
                      (X(
                        t,
                        1,
                        Y([
                          `shrink-0`,
                          H(C).tone === `error` ? `text-error` : `text-warning`,
                        ]),
                      ),
                        q(r, H(C).text),
                        q(i, H(C).short));
                    }),
                    K(e, t));
                };
              (J(a, (e) => {
                H(C) && e(o);
              }),
                ze(2),
                B(() => q(i, t.meta.model)),
                K(e, n));
            };
          (J(i, (e) => {
            t.meta.switchingModel ? e(a) : e(o, -1);
          }),
            k(n),
            _o(
              n,
              (e) => F(r, e),
              () => H(r),
            ),
            B(() => {
              (X(
                n,
                1,
                Y([
                  `chip min-w-16`,
                  H(C) &&
                    (H(C).tone === `error` ? `chip-error` : `chip-warning`),
                ]),
              ),
                Z(n, `aria-expanded`, H(b) === `model`),
                Z(
                  n,
                  `aria-label`,
                  H(C) ? `${H(te)}. Subscription: ${H(C).text}` : H(te),
                ),
                Z(n, `title`, H(w)),
                (n.disabled = !H(S)));
            }),
            W(`click`, n, () => re(`model`)),
            K(e, n));
        };
      J(c, (e) => {
        (t.meta.model || t.meta.switchingModel) && e(l);
      });
      var u = z(c, 2);
      (Gl(I(u), {}), k(u));
      var d = z(u, 4),
        f = (e) => {
          var t = id(),
            n = I(t);
          {
            let e = N(() => gc(H(ee)));
            Ql(n, {
              get icon() {
                return H(e);
              },
              class: `size-3`,
            });
          }
          var r = R(z(n, 2), !0);
          (ze(2),
            k(t),
            _o(
              t,
              (e) => F(i, e),
              () => H(i),
            ),
            B(
              (e, n, i) => {
                (Z(t, `aria-expanded`, H(b) === `mode`),
                  Z(t, `aria-label`, `Mode and effort: ${e ?? ``}`),
                  Z(t, `title`, `Mode and effort: ${n ?? ``}`),
                  q(r, i));
              },
              [() => mc(H(ee)), () => mc(H(ee)), () => mc(H(ee))],
            ),
            W(`click`, t, () => re(`mode`)),
            K(e, t));
        };
      (J(d, (e) => {
        t.meta.modes && t.meta.modes.length > 0 && e(f);
      }),
        K(e, n));
    };
  J(We, (e) => {
    H(E) ? e(Ge) : e(Ke, -1);
  });
  var qe = z(We, 2),
    Je = (e) => {
      var t = od(),
        n = L(t),
        r = z(n, 2);
      (B(() => (n.disabled = !H(ie))), W(`click`, r, we), K(e, t));
    },
    Ye = (e) => {
      var t = sd();
      (B(() => (t.disabled = !H(ie))), K(e, t));
    };
  (J(qe, (e) => {
    t.meta.busy ? e(Je) : e(Ye, -1);
  }),
    k(He),
    k(De),
    k(Ee),
    B(
      (e, t) => {
        (X(
          De,
          1,
          Y([
            `composer-box relative flex flex-col rounded-[10px] border border-input-border bg-input text-input-fg focus-within:outline-1 focus-within:-outline-offset-1`,
            H(p) > 0 && `outline-2 -outline-offset-2 outline-focus`,
          ]),
        ),
          (Oe = Ga(De, ``, Oe, { "--mode-tone": e })),
          Z(M, `aria-expanded`, H(xe)),
          Z(M, `aria-controls`, n),
          Z(M, `aria-activedescendant`, H(xe) ? `${n}-${H(he)}` : void 0),
          Z(M, `placeholder`, t),
          X(
            M,
            1,
            Y([
              `relative block max-h-[40vh] min-h-[calc(2lh+14px)] w-full resize-none bg-transparent px-3 pt-2.5 pb-1 field-sizing-content outline-none scrollbar-gutter-stable placeholder:text-placeholder`,
              H(pe) && `text-transparent caret-input-fg`,
            ]),
          ),
          Z(Ue, `aria-expanded`, H(b) === `add`));
      },
      [() => Gc(t.meta.mode), () => bc(t.meta)],
    ),
    vi(`submit`, Ee, O),
    vi(`dragenter`, Ee, g),
    vi(`dragover`, Ee, _),
    vi(`dragleave`, Ee, v),
    vi(`drop`, Ee, y),
    vi(`scroll`, M, () => {
      H(le) && H(ce) && (H(le).scrollTop = H(ce).scrollTop);
    }),
    W(`keydown`, M, Te),
    vi(`paste`, M, d),
    W(`input`, M, () => {
      __env?.promptHistory?.resetBrowsing();
      ve();
    }),
    W(`keyup`, M, (e) => {
      (!H(xe) ||
        ![`ArrowUp`, `ArrowDown`, `Enter`, `Tab`, `Escape`].includes(e.key)) &&
        ve();
    }),
    W(`click`, M, ve),
    vi(`blur`, M, () => F(me, null)),
    so(
      M,
      () => $.draft,
      (e) => ($.draft = e),
    ),
    W(`click`, Ue, () => re(`add`)),
    K(e, Ee),
    mt());
}
var Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld = o(() => {
    (Vo(),
      Lo(),
      Ms(),
      Hs(),
      wc(),
      Ec(),
      Uc(),
      Qc(),
      ll(),
      Bs(),
      zo(),
      Ml(),
      Dl(),
      Wl(),
      Jl(),
      Zl(),
      iu(),
      yu(),
      Au(),
      Bu(),
      (Hu = G(
        `<div class="pointer-events-none absolute inset-0 z-30 flex items-center justify-center rounded-[10px] bg-input/90 text-small font-semibold text-fg">Drop to add to the message</div>`,
      )),
      (Uu = G(
        `<span class="ctx-chip ctx-chip-skill"><!> <span class="truncate"> </span> <button type="button" class="ctx-chip-x" title="Remove"><svg class="size-2.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button></span>`,
      )),
      (Wu = G(`<span class="shrink-0 text-muted tabular-nums"> </span>`)),
      (Gu = G(
        `<button type="button" class="ctx-chip-open"><!> <span class="truncate"> </span> <!></button>`,
      )),
      (Ku = G(`<!> <span class="truncate"> </span>`, 1)),
      (qu = G(
        `<span><!> <button type="button" class="ctx-chip-x" title="Remove"><svg class="size-2.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button></span>`,
      )),
      (Ju = G(
        `<span class="self-center text-small text-warning" aria-live="polite"> </span>`,
      )),
      (Yu = G(
        `<div aria-label="Added to the message" role="group"><!> <div class="flex max-w-full min-w-0 @min-[520px]:hidden"><!></div> <!> <!></div>`,
      )),
      (Xu = G(`<span class="at-mention"> </span>`)),
      (Zu = G(
        `<div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden px-3 pt-2.5 pb-1 wrap-break-word whitespace-pre-wrap text-input-fg scrollbar-gutter-stable"><!> </div>`,
      )),
      (Qu = G(
        `<span class="mr-auto text-small text-error" aria-live="polite"> </span>`,
      )),
      ($u = G(
        `<button type="button" data-menu-trigger="" aria-haspopup="dialog"><svg class="size-4" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="2.4"></circle><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" transform="rotate(-90 10 10)"></circle></svg> </button>`,
      )),
      (ed = G(
        `<span class="size-2.5 shrink-0 animate-spin rounded-full border-[1.5px] border-link border-t-transparent" aria-hidden="true"></span> <span class="truncate">Switching…</span>`,
        1,
      )),
      (td = G(
        `<span>· <span class="hidden @min-[500px]:inline"> </span><span class="@min-[500px]:hidden"> </span></span>`,
      )),
      (nd = G(
        `<span class="truncate"> </span> <!> <svg class="size-2.5 shrink-0" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 10l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        1,
      )),
      (rd = G(
        `<button type="button" data-menu-trigger="" aria-haspopup="listbox"><!></button>`,
      )),
      (id = G(
        `<button type="button" class="chip mode-chip shrink-0" data-menu-trigger="" aria-haspopup="menu"><!> <span class="truncate"> </span> <svg class="size-2.5 shrink-0" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 10l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`,
      )),
      (ad = G(
        `<!> <!> <div class="hidden max-w-[40%] min-w-11 shrink-[4] @min-[520px]:flex"><!></div> <span class="flex-1"></span> <!>`,
        1,
      )),
      (od = G(
        `<button type="submit" class="icon-btn icon-btn-secondary" aria-label="Queue: sends when Hermes is done" title="Queue (Enter) — sends when Hermes is done"><svg class="size-4" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> <button type="button" class="icon-btn icon-btn-stop" aria-label="Stop" title="Stop (Esc)"><svg class="size-3" viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="2" fill="currentColor"></rect></svg></button>`,
        1,
      )),
      (sd = G(
        `<button type="submit" class="icon-btn icon-btn-primary" aria-label="Send" title="Send (Enter)"><svg class="size-4" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`,
      )),
      (cd = G(
        `<form class="@container mx-auto w-full max-w-4xl shrink-0 px-3 pb-3"><div><!> <!> <!> <!> <div class="relative"><!> <textarea role="combobox" aria-autocomplete="list" rows="1" aria-label="Message Hermes"></textarea></div> <div class="flex min-w-0 items-center gap-2 px-2 pb-2"><button type="button" class="plus-btn" data-menu-trigger="" aria-haspopup="menu" aria-label="Add files, an image or context" title="Add files, an image or context"><svg class="size-3.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button> <!> <!></div></div></form>`,
      )),
      yi([`click`, `keydown`, `input`, `keyup`]));
  });
function ud(e, t) {
  pt(t, !0);
  let n = jo(t, `waiting`, 3, !1),
    r = N(() => vc(t.meta.connection, t.meta.busy)),
    i = {
      muted: `bg-muted`,
      busy: `bg-progress animate-pulse`,
      ok: `bg-success`,
      warn: `bg-warning`,
      error: `bg-error`,
    },
    a = N(() => {
      let e = [];
      return (
        t.meta.connection.state === `starting` &&
          t.meta.connection.detail &&
          e.push(t.meta.connection.detail),
        t.meta.agentVersion && e.push(`Hermes ${t.meta.agentVersion}`),
        e.join(` · `) || void 0
      );
    });
  var o = vd(),
    s = I(o),
    c = I(s),
    l = I(c),
    u = R(I(l), !0);
  (ze(2), k(l));
  var d = z(l, 2),
    f = (e) => {
      var n = dd(),
        r = R(n, !0);
      (B(() => q(r, t.meta.folder ?? `No folder open`)), K(e, n));
    };
  (J(d, (e) => {
    (t.meta.folder || t.meta.connection.state === `noFolder`) && e(f);
  }),
    k(c));
  var p = z(c, 2),
    m = (e) => {
      K(e, fd());
    },
    h = (e) => {
      var t = pd(),
        n = I(t),
        o = z(n);
      (k(t),
        B(() => {
          (X(
            t,
            1,
            Y(
              H(r).tone === `busy`
                ? `pill-busy shrink-0`
                : `flex shrink-0 items-center gap-1.5 text-small text-muted`,
            ),
          ),
            Z(t, `title`, H(a)),
            X(
              n,
              1,
              Y([
                `size-2 shrink-0 rounded-full border border-hc`,
                i[H(r).tone],
              ]),
            ),
            q(o, ` ${H(r).text ?? ``}`));
        }),
        K(e, t));
    };
  (J(p, (e) => {
    n() && t.meta.busy ? e(m) : e(h, -1);
  }));
  var newChatBtn = z(p, 2);
  (W(`click`, newChatBtn, () => {
    $.sessionsOpen && $.closeSessions(`newChat`);
    Q({ type: `newChat` });
  }),
    k(s));
  var g = z(s, 2),
    _ = (e) => {
      var t = _d(),
        n = I(t),
        i = (e) => {
          var t = md(),
            n = R(t, !0);
          (B(() => {
            (Z(t, `title`, H(r).message), q(n, H(r).message));
          }),
            K(e, t));
        };
      J(n, (e) => {
        H(r).message && e(i);
      });
      var a = z(n, 2),
        o = (e) => {
          var t = gd();
          (da(
            t,
            21,
            () => H(r).buttons,
            (e) => e.action,
            (e, t) => {
              var n = hd(),
                r = R(n, !0);
              (B(() => {
                (X(
                  n,
                  1,
                  Y([`btn`, H(t).primary ? `btn-primary` : `btn-secondary`]),
                ),
                  q(r, H(t).label));
              }),
                W(`click`, n, () => Q({ type: `action`, action: H(t).action })),
                K(e, n));
            },
          ),
            k(t),
            K(e, t));
        };
      (J(a, (e) => {
        H(r).buttons.length > 0 && e(o);
      }),
        k(t),
        K(e, t));
    };
  (J(g, (e) => {
    (H(r).message || H(r).buttons.length > 0) && e(_);
  }),
    k(o),
    B(() => {
      (Z(
        c,
        `title`,
        t.meta.title ? `${t.meta.title} — show sessions` : `Show sessions`,
      ),
        Z(c, `aria-expanded`, $.sessionsOpen),
        q(u, t.meta.title ?? `New chat`));
    }),
    W(`click`, c, () => $.toggleSessions()),
    K(e, o),
    mt());
}
var dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      wc(),
      Bs(),
      (dd = G(`<span class="truncate text-small text-muted"> </span>`)),
      (fd = G(
        `<span class="pill-busy pill-warn shrink-0" role="status"><span class="size-2 shrink-0 animate-pulse rounded-full bg-warning" aria-hidden="true"></span> Needs you</span>`,
      )),
      (pd = G(`<span role="status"><span aria-hidden="true"></span> </span>`)),
      (md = G(
        `<p class="line-clamp-3 text-small wrap-break-word text-muted"> </p>`,
      )),
      (hd = G(`<button type="button"> </button>`)),
      (gd = G(`<div class="flex flex-wrap gap-1.5"></div>`)),
      (_d = G(`<div class="mt-2 flex flex-col gap-1.5"><!> <!></div>`)),
      (vd = G(
        `<header class="shrink-0 border-b border-border px-4 py-2.5"><div class="flex min-w-0 items-center gap-2.5"><button type="button" class="-mx-1.5 -my-1 flex min-w-0 flex-1 cursor-pointer flex-col rounded-md px-1.5 py-1 text-left hover:bg-hover" aria-label="Show sessions in this folder" aria-haspopup="dialog" data-menu-trigger=""><span class="flex max-w-full min-w-0 items-center gap-1"><span class="truncate font-semibold"> </span> <svg class="size-3.5 shrink-0 text-muted" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> <!></button> <!> <button type="button" class="plus-btn" aria-label="New chat" title="New chat"><svg class="size-3.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button></div> <!></header>`,
      )),
      yi([`click`]));
  });
function bd(e, t) {
  pt(t, !0);
  let n = N(() => $.preview);
  function r(e) {
    e.key === `Escape` &&
      (e.preventDefault(), e.stopPropagation(), $.closeImage());
  }
  var i = Fi(),
    a = L(i),
    o = (e) => {
      var t = Td(),
        i = I(t),
        a = z(i, 2),
        o = I(a);
      Ma(o, () => (e) => {
        queueMicrotask(() => e.focus());
      });
      var s = z(o, 2),
        c = (e) => {
          var t = xd();
          (B(() => {
            (Z(t, `src`, H(n).src), Z(t, `alt`, H(n).label));
          }),
            K(e, t));
        },
        l = (e) => {
          K(e, Sd());
        },
        u = (e) => {
          K(e, Cd());
        };
      J(s, (e) => {
        H(n).src ? e(c) : H(n).missing ? e(l, 1) : e(u, -1);
      });
      var d = z(s, 2),
        f = I(d, !0),
        p = z(f),
        m = (e) => {
          var t = wd(),
            r = R(t);
          (B(() => q(r, ` · ${H(n).size ?? ``}`)), K(e, t));
        };
      (J(p, (e) => {
        H(n).size && e(m);
      }),
        k(d),
        k(a),
        k(t),
        B(() => {
          (Z(t, `aria-label`, `Image: ${H(n).label ?? ``}`), q(f, H(n).label));
        }),
        W(`keydown`, t, r),
        W(`click`, i, () => $.closeImage()),
        W(`click`, o, () => $.closeImage()),
        K(e, t));
    };
  (J(a, (e) => {
    H(n) && e(o);
  }),
    K(e, i),
    mt());
}
var xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      (xd = G(
        `<img class="min-h-0 max-w-full rounded-lg object-contain shadow-[0_12px_40px] shadow-shadow"/>`,
      )),
      (Sd = G(
        `<p class="rounded-lg border border-widget-border bg-widget px-4 py-3 text-muted">This image is no longer available.</p>`,
      )),
      (Cd = G(
        `<span class="size-5 animate-spin rounded-full border-2 border-link border-t-transparent" role="status" aria-label="Loading the image"></span>`,
      )),
      (wd = G(`<span class="text-muted tabular-nums"> </span>`)),
      (Td = G(
        `<div role="dialog" aria-modal="true" tabindex="-1" class="lightbox absolute inset-0 z-20 flex items-center justify-center p-6"><div class="absolute inset-0 cursor-zoom-out"></div> <figure class="relative m-0 flex max-h-full max-w-full min-h-0 flex-col items-center gap-2.5"><button type="button" class="lightbox-close" aria-label="Close" title="Close (Esc)"><svg class="size-3.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button> <!> <figcaption class="max-w-full truncate rounded-full border border-widget-border bg-widget px-2.5 py-0.5 text-small"> <!></figcaption></figure></div>`,
      )),
      yi([`keydown`, `click`]));
  });
function Dd(e, t) {
  pt(t, !0);
  let n = N(() => t.meta.limit),
    r = N(() => (H(n) ? pc(H(n)) : void 0)),
    i = N(() => pl(t.meta.models ?? [], t.meta.modelId, H(n)?.provider)),
    a = N(() => !!H(n) && !t.meta.busy && !t.meta.switchingModel);
  var o = Fi(),
    s = L(o),
    c = (e) => {
      var n = jd(),
        a = I(n),
        o = I(a),
        s = z(o, 2),
        c = z(I(s), 2),
        l = I(c),
        u = R(l, !0),
        d = R(z(l, 2), !0);
      (k(c), k(s));
      var f = z(s, 2),
        p = I(f),
        m = (e) => {
          var t = kd(),
            n = I(t),
            r = z(n),
            a = (e) => {
              var t = Od(),
                n = R(t);
              (B(() => q(n, `· ${H(i).provider ?? ``}`)), K(e, t));
            };
          (J(r, (e) => {
            H(i).provider && e(a);
          }),
            k(t),
            B(() => q(n, `Continue with ${H(i).label ?? ``} `)),
            W(`click`, t, () => Q({ type: `continueWith`, modelId: H(i).id })),
            K(e, t));
        };
      J(p, (e) => {
        H(i) && e(m);
      });
      var h = z(p, 2),
        g = (e) => {
          var t = Ad();
          (B(() => X(t, 1, Y([`btn`, H(i) ? `btn-secondary` : `btn-primary`]))),
            W(`click`, t, () => ($.menu = `model`)),
            K(e, t));
        };
      (J(h, (e) => {
        (t.meta.models?.length ?? 0) > 1 && e(g);
      }),
        k(f),
        k(a),
        k(n),
        B(() => {
          (q(u, H(r).title), q(d, H(r).body));
        }),
        W(`click`, o, () => Q({ type: `dismissLimit` })),
        K(e, n));
    };
  (J(s, (e) => {
    H(a) && H(r) && e(c);
  }),
    K(e, o),
    mt());
}
var Od,
  kd,
  Ad,
  jd,
  Md = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      wc(),
      gl(),
      Bs(),
      (Od = G(`<span class="font-normal opacity-80"> </span>`)),
      (kd = G(`<button type="button" class="btn btn-primary"> <!></button>`)),
      (Ad = G(
        `<button type="button" data-menu-trigger="">Choose another model</button>`,
      )),
      (jd = G(
        `<div class="mx-auto w-full max-w-4xl shrink-0 px-3 pb-2" role="status"><div class="relative flex flex-col gap-2.5 rounded-[10px] border border-warning/45 bg-warning/10 p-3 pr-8"><button type="button" class="btn btn-ghost absolute top-1.5 right-1.5 size-6 p-0" aria-label="Dismiss" title="Dismiss"><svg class="size-3" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button> <div class="flex items-start gap-2.5"><svg class="mt-0.5 size-4 shrink-0 text-warning" viewBox="0 0 16 16" aria-hidden="true"><path d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0zM8 4.8V8l2.2 1.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg> <div class="flex min-w-0 flex-col gap-0.5"><span class="font-semibold"> </span> <span class="text-small text-muted"> </span></div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div>`,
      )),
      yi([`click`]));
  });
function Nd(e, t, n) {
  let r = zd.get(e);
  (r !== void 0 && clearTimeout(r),
    (e.textContent = t),
    (e.dataset.state = n),
    zd.set(
      e,
      window.setTimeout(() => {
        ((e.textContent = `Copy`), delete e.dataset.state, zd.delete(e));
      }, Rd),
    ));
}
function Pd(e) {
  let t = window.getSelection();
  if (!t) return !1;
  let n = document.createRange();
  (n.selectNodeContents(e), t.removeAllRanges(), t.addRange(n));
  try {
    return document.execCommand(`copy`);
  } catch {
    return !1;
  } finally {
    t.removeAllRanges();
  }
}
async function Fd(e) {
  try {
    return (await navigator.clipboard.writeText(e), !0);
  } catch {
    let t = document.createElement(`pre`);
    ((t.textContent = e),
      (t.style.position = `fixed`),
      (t.style.opacity = `0`),
      document.body.append(t));
    let n = Pd(t);
    return (t.remove(), n);
  }
}
async function Id(e) {
  let t = e.closest(`.code-block`)?.querySelector(`code`);
  if (!t) return;
  let n = t.textContent ?? ``;
  try {
    (await navigator.clipboard.writeText(n), Nd(e, `Copied`, `done`));
  } catch {
    let n = Pd(t);
    Nd(e, n ? `Copied` : `Copy failed`, n ? `done` : `failed`);
  }
}
function Ld(e, t) {
  return (n) => {
    let r = (e) => {
        if (!(e instanceof Element)) return null;
        let t = e.closest(`[data-href]`);
        return t && n.contains(t) ? t : null;
      },
      i = (e) => {
        if (!(e instanceof Element)) return null;
        let t = e.closest(`code.md-path.is-file`);
        return t && n.contains(t) ? t : null;
      },
      a = (e) => {
        let n = Number(e.dataset.line);
        t?.(e.dataset.path ?? ``, Number.isInteger(n) && n > 0 ? n : void 0);
      },
      o = (o) => {
        if (!(o.target instanceof Element)) return;
        let s = o.target.closest(`button.code-copy`);
        if (s && n.contains(s)) {
          (o.preventDefault(), Id(s));
          return;
        }
        let c = i(o.target);
        if (c && t) {
          (o.preventDefault(), a(c));
          return;
        }
        let l = r(o.target);
        l && (o.preventDefault(), e(l.dataset.href ?? ``));
      },
      s = (n) => {
        if (n.key !== `Enter`) return;
        let o = i(n.target);
        if (o && o === n.target && t) {
          (n.preventDefault(), a(o));
          return;
        }
        let s = r(n.target);
        s && s === n.target && (n.preventDefault(), e(s.dataset.href ?? ``));
      };
    return (
      n.addEventListener(`click`, o),
      n.addEventListener(`keydown`, s),
      () => {
        (n.removeEventListener(`click`, o),
          n.removeEventListener(`keydown`, s));
      }
    );
  };
}
var Rd,
  zd,
  Bd = o(() => {
    ((Rd = 1500), (zd = new WeakMap()));
  });
function Vd(e, t) {
  let n = (e) => e.normalize(`NFD`).replace(/\p{M}/gu, ``).toLowerCase(),
    r = n(t).split(/\s+/).filter(Boolean);
  return r.length === 0
    ? [...e]
    : e.filter((e) => {
        let t = n(e.title ?? ``);
        return r.every((e) => t.includes(e));
      });
}
function Hd(e, t) {
  let n = new Map(e.map((e) => [e.id, e])),
    r = [...t]
      .sort((e, t) => Ud[e.state] - Ud[t.state])
      .map((e) => {
        let t = n.get(e.id);
        return {
          ...(t ?? { id: e.id }),
          title: t?.title ?? e.title,
          state: e.state,
        };
      }),
    i = new Set(t.map((e) => e.id));
  return [...r, ...e.filter((e) => !i.has(e.id))];
}
var Ud,
  Wd,
  Gd = o(() => {
    (Ic(),
      (Ud = { waiting: 0, working: 1, stopped: 2, done: 2 }),
      (Wd = (e) => e === `working` || e === `waiting`));
  });
function Kd(e, t, n) {
  let r = Math.max(0, t - e);
  if (r < 6e4) return `just now`;
  if (r < 36e5) return `${Math.floor(r / 6e4)} min ago`;
  if (r < 864e5) return `${Math.floor(r / 36e5)} h ago`;
  let i = kc(e, t);
  return i <= 1
    ? `yesterday`
    : i < 7
      ? `${i} days ago`
      : `on ${new Date(e).toLocaleDateString(n, { month: `short`, day: `numeric` })}`;
}
function qd(e, t, n) {
  if (!e?.found) return;
  let r = e.learning,
    i = r.items[0];
  if (r.unseen > 0 && i)
    return {
      kind: `fresh`,
      title: i.kind === `improved` ? `Skill improved` : `New skill learned`,
      skill: i.skill,
      when: Kd(i.lastChangeAt, t, n),
      more: r.unseen - 1,
    };
  let a;
  if (
    (r.newThisWeek > 0
      ? ((a = `Hermes learned ${Jd(r.newThisWeek, `skill`)} this week`),
        r.improvedThisWeek > 0 && (a += ` and improved ${r.improvedThisWeek}`))
      : r.improvedThisWeek > 0
        ? (a = `Hermes improved ${Jd(r.improvedThisWeek, `skill`)} this week`)
        : r.learnedTotal > 0 &&
          (a = `Hermes has learned ${Jd(r.learnedTotal, `skill`)} so far`),
    !a)
  )
    return;
  let o = e.curator.lastRunAt;
  return o === void 0
    ? { kind: `week`, text: a }
    : { kind: `week`, text: a, curator: `curator ran ${Kd(o, t, n)}` };
}
var Jd,
  Yd = o(() => {
    (Ic(), (Jd = (e, t) => `${e} ${t}${e === 1 ? `` : `s`}`));
  });
function Xd(e, t) {
  pt(t, !0);
  let n = P(Ln(Date.now()));
  cr(() => {
    let e = window.setInterval(() => F(n, Date.now(), !0), 6e4);
    return () => window.clearInterval(e);
  });
  let r = N(() => qd($.panels, H(n)));
  var i = Fi(),
    a = L(i),
    o = (e) => {
      var t = ef(),
        n = I(t),
        i = (e) => {
          var t = Zd(),
            n = z(L(t), 2),
            i = I(n),
            a = R(i, !0),
            o = z(i, 2),
            s = I(o),
            c = R(s, !0),
            l = z(s);
          (k(o),
            k(n),
            B(() => {
              (q(a, H(r).title),
                q(c, H(r).skill),
                q(
                  l,
                  ` · ${H(r).when ?? ``}${H(r).more > 0 ? ` · +${H(r).more} more` : ``}`,
                ));
            }),
            K(e, t));
        },
        a = (e) => {
          var t = $d(),
            n = z(L(t), 2),
            i = I(n),
            a = R(i, !0),
            o = z(i),
            s = (e) => {
              var t = Qd(),
                n = R(t);
              (B(() => q(n, ` · ${H(r).curator ?? ``}`)), K(e, t));
            };
          (J(o, (e) => {
            H(r).curator && e(s);
          }),
            k(n),
            B(() => q(a, H(r).text)),
            K(e, t));
        };
      (J(n, (e) => {
        H(r).kind === `fresh` ? e(i) : e(a, -1);
      }),
        ze(2),
        k(t),
        B(() =>
          X(
            t,
            1,
            Y([`learned-row`, H(r).kind === `fresh` && `learned-row-fresh`]),
          ),
        ),
        W(`click`, t, () => $.setTab(`learning`)),
        K(e, t));
    };
  (J(a, (e) => {
    H(r) && e(o);
  }),
    K(e, i),
    mt());
}
var Zd,
  Qd,
  $d,
  ef,
  tf = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      Yd(),
      (Zd = G(
        `<svg class="learned-stars size-4.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true"><path class="star" d="M10 6Q10 14 18 14Q10 14 10 22Q10 14 2 14Q10 14 10 6Z"></path><path class="star star-2" d="M18.5 2Q18.5 5.5 22 5.5Q18.5 5.5 18.5 9Q18.5 5.5 15 5.5Q18.5 5.5 18.5 2Z"></path><path class="star star-3" d="M19.5 15Q19.5 17.5 22 17.5Q19.5 17.5 19.5 20Q19.5 17.5 17 17.5Q19.5 17.5 19.5 15Z"></path></svg> <span class="flex min-w-0 flex-1 flex-col text-left"><span class="learned-sheen font-semibold"> </span> <span class="truncate text-small text-muted"><span class="font-mono text-fg"> </span> </span></span>`,
        1,
      )),
      (Qd = G(`<span class="text-muted"> </span>`)),
      ($d = G(
        `<svg class="size-4 shrink-0 text-hermes" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path></g></svg> <span class="min-w-0 flex-1 text-left"><span class="text-fg"> </span><!></span>`,
        1,
      )),
      (ef = G(
        `<button type="button" title="Open the Learning tab"><!> <svg class="size-3 shrink-0 text-muted" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`,
      )),
      yi([`click`]));
  });
function nf(e, t) {
  ((this.v = e), (this.k = t));
}
function rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function af(e) {
  if (Array.isArray(e)) return e;
}
function of(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < `u` && e[Symbol.iterator]) || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((a = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t);
          c = !0
        );
    } catch (e) {
      ((l = !0), (i = e));
    } finally {
      try {
        if (!c && n.return != null && ((o = n.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function sf() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cf(e, t) {
  return af(e) || of(e, t) || lf(e, t) || sf();
}
function lf(e, t) {
  if (e) {
    if (typeof e == `string`) return rf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? rf(e, t)
          : void 0
    );
  }
}
function uf(e) {
  var t, n;
  function r(t, n) {
    try {
      var a = e[t](n),
        o = a.value,
        s = o instanceof nf;
      Promise.resolve(s ? o.v : o).then(
        function (n) {
          if (s) {
            var c = t === `return` && o.k ? t : `next`;
            if (!o.k || n.done) return r(c, n);
            n = e[c](n).value;
          }
          i(!!a.done, n);
        },
        function (e) {
          r(`throw`, e);
        },
      );
    } catch (e) {
      i(2, e);
    }
  }
  function i(e, i) {
    (e === 2 ? t.reject(i) : t.resolve({ value: i, done: e }),
      (t = t.next) ? r(t.key, t.arg) : (n = null));
  }
  ((this._invoke = function (e, i) {
    return new Promise(function (a, o) {
      var s = { key: e, arg: i, resolve: a, reject: o, next: null };
      n ? (n = n.next = s) : ((t = n = s), r(e, i));
    });
  }),
    typeof e.return != `function` && (this.return = void 0));
}
function df(e) {
  return function (t) {
    t instanceof RegExp && (t.lastIndex = 0);
    var n = [...arguments].slice(1);
    return kf(e, t, n);
  };
}
function ff(e) {
  return function () {
    return Af(e, [...arguments]);
  };
}
function pf(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lf;
  if ((xf && xf(e, null), !If(t))) return e;
  let r = t.length;
  for (; r--;) {
    let i = t[r];
    if (typeof i == `string`) {
      let e = n(i);
      e !== i && (Sf(t) || (t[r] = e), (i = e));
    }
    e[i] = !0;
  }
  return e;
}
function mf(e) {
  for (let t = 0; t < e.length; t++) qf(e, t) || (e[t] = null);
  return e;
}
function hf(e) {
  let t = Df(null);
  for (let r of bf(e)) {
    var n = cf(r, 2);
    let i = n[0],
      a = n[1];
    qf(e, i) &&
      (t[i] = If(a)
        ? mf(a)
        : a && typeof a == `object` && a.constructor === Object
          ? hf(a)
          : a);
  }
  return t;
}
function gf(e) {
  switch (typeof e) {
    case `string`:
      return e;
    case `number`:
      return Uf(e);
    case `boolean`:
      return Wf(e);
    case `bigint`:
      return Gf ? Gf(e) : `0`;
    case `symbol`:
      return Kf ? Kf(e) : `Symbol()`;
    case `undefined`:
      return Jf(e);
    case `function`:
    case `object`: {
      if (e === null) return Jf(e);
      let t = e,
        n = _f(t, `toString`);
      if (typeof n == `function`) {
        let e = n(t);
        return typeof e == `string` ? e : Jf(e);
      }
      return Jf(e);
    }
    default:
      return Jf(e);
  }
}
function _f(e, t) {
  for (; e !== null;) {
    let n = wf(e, t);
    if (n) {
      if (n.get) return df(n.get);
      if (typeof n.value == `function`) return df(n.value);
    }
    e = Cf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function vf(e) {
  try {
    return (Yf(e, ``), !0);
  } catch {
    return !1;
  }
}
function yf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ep(),
    t = (e) => yf(e);
  if (
    ((t.version = `3.4.16`),
    (t.removed = []),
    !e || !e.document || e.document.nodeType !== Sp.document || !e.Element)
  )
    return ((t.isSupported = !1), t);
  let n = e.document,
    r = n,
    i = r.currentScript;
  e.DocumentFragment;
  let a = e.HTMLTemplateElement,
    o = e.Node,
    s = e.Element,
    c = e.NodeFilter;
  (e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap),
    e.HTMLFormElement);
  let l = e.DOMParser,
    u = e.trustedTypes,
    d = s.prototype,
    f = _f(d, `cloneNode`),
    p = _f(d, `remove`),
    m = _f(d, `removeAttributeNode`),
    h = _f(d, `nextSibling`),
    g = _f(d, `childNodes`),
    _ = _f(d, `parentNode`),
    v = _f(d, `shadowRoot`),
    y = _f(d, `attributes`),
    b = o && o.prototype ? _f(o.prototype, `nodeType`) : null,
    x = o && o.prototype ? _f(o.prototype, `nodeName`) : null,
    S = o && o.prototype ? _f(o.prototype, `ownerDocument`) : null,
    ee = function (e) {
      return b ? b(e) : e.nodeType;
    },
    te = function (e) {
      return x ? x(e) : e.nodeName;
    };
  if (typeof a == `function`) {
    let e = n.createElement(`template`);
    e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
  }
  let ne,
    C = ``,
    w,
    re = !1,
    T = 0,
    E = function () {
      if (T > 0)
        throw Xf(
          `A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`,
        );
    },
    ie = function (e) {
      (E(), T++);
      try {
        return ne.createHTML(e);
      } finally {
        T--;
      }
    },
    ae = function (e) {
      (E(), T++);
      try {
        return ne.createScriptURL(e);
      } finally {
        T--;
      }
    },
    oe = function () {
      return ((re ||= ((w = Dp(u, i)), !0)), w);
    },
    D = n,
    se = D.implementation,
    ce = D.createNodeIterator,
    le = D.createDocumentFragment,
    ue = D.getElementsByTagName,
    de = r.importNode,
    fe = Op();
  t.isSupported =
    typeof bf == `function` &&
    typeof _ == `function` &&
    se &&
    se.createHTMLDocument !== void 0;
  let pe = cp,
    me = lp,
    he = up,
    ge = dp,
    _e = fp,
    ve = mp,
    ye = hp,
    be = _p,
    xe = pp,
    Se = null,
    Ce = pf({}, [...Zf, ...Qf, ...$f, ...tp, ...rp]),
    we = null,
    Te = pf({}, [...ip, ...ap, ...op, ...sp]),
    O = Object.seal(
      Df(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      }),
    ),
    Ee = null,
    De = null,
    Oe = Object.seal(
      Df(null, {
        tagCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
      }),
    ),
    ke = !0,
    Ae = !0,
    je = !1,
    Me = !0,
    Ne = !1,
    Pe = !0,
    Fe = !1,
    Ie = !1,
    Le = null,
    Re = null,
    k = !1,
    ze = !1,
    Be = !1,
    Ve = !1,
    A = !0,
    j = !1,
    M = `user-content-`,
    He = !0,
    Ue = !1,
    We = {},
    Ge = null,
    Ke = pf(
      {},
      `annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(
        `.`,
      ),
    ),
    qe = null,
    Je = pf({}, [`audio`, `video`, `img`, `source`, `image`, `track`]),
    Ye = null,
    Xe = pf({}, [
      `alt`,
      `class`,
      `for`,
      `id`,
      `label`,
      `name`,
      `pattern`,
      `placeholder`,
      `role`,
      `summary`,
      `title`,
      `value`,
      `style`,
      `xmlns`,
    ]),
    Ze = `http://www.w3.org/1998/Math/MathML`,
    Qe = `http://www.w3.org/2000/svg`,
    $e = `http://www.w3.org/1999/xhtml`,
    et = $e,
    tt = !1,
    nt = null,
    rt = pf({}, [Ze, Qe, $e], Rf),
    it = Tf([`mi`, `mo`, `mn`, `ms`, `mtext`]),
    at = pf({}, it),
    ot = Tf([`annotation-xml`]),
    st = pf({}, ot),
    ct = pf({}, [`title`, `style`, `font`, `a`, `script`]),
    lt = null,
    ut = [`application/xhtml+xml`, `text/html`],
    dt = null,
    ft = null,
    pt = n.createElement(`form`),
    mt = function (e) {
      return e instanceof RegExp || e instanceof Function;
    },
    ht = function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (ft && ft === e) return;
      ((!e || typeof e != `object`) && (e = {}),
        (e = hf(e)),
        (lt =
          ut.indexOf(e.PARSER_MEDIA_TYPE) === -1
            ? `text/html`
            : e.PARSER_MEDIA_TYPE),
        (dt = lt === `application/xhtml+xml` ? Rf : Lf),
        (Se = kp(e, `ALLOWED_TAGS`, Ce, { transform: dt })),
        (we = kp(e, `ALLOWED_ATTR`, Te, { transform: dt })),
        (nt = kp(e, `ALLOWED_NAMESPACES`, rt, { transform: Rf })),
        (Ye = kp(e, `ADD_URI_SAFE_ATTR`, Xe, { transform: dt, base: Xe })),
        (qe = kp(e, `ADD_DATA_URI_TAGS`, Je, { transform: dt, base: Je })),
        (Ge = kp(e, `FORBID_CONTENTS`, Ke, { transform: dt })),
        (Ee = kp(e, `FORBID_TAGS`, hf({}), { transform: dt })),
        (De = kp(e, `FORBID_ATTR`, hf({}), { transform: dt })),
        (We = qf(e, `USE_PROFILES`)
          ? e.USE_PROFILES && typeof e.USE_PROFILES == `object`
            ? hf(e.USE_PROFILES)
            : e.USE_PROFILES
          : !1),
        (ke = e.ALLOW_ARIA_ATTR !== !1),
        (Ae = e.ALLOW_DATA_ATTR !== !1),
        (je = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
        (Me = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
        (Ne = e.SAFE_FOR_TEMPLATES || !1),
        (Pe = e.SAFE_FOR_XML !== !1),
        (Fe = e.WHOLE_DOCUMENT || !1),
        (ze = e.RETURN_DOM || !1),
        (Be = e.RETURN_DOM_FRAGMENT || !1),
        (Ve = e.RETURN_TRUSTED_TYPE || !1),
        (k = e.FORCE_BODY || !1),
        (A = e.SANITIZE_DOM !== !1),
        (j = e.SANITIZE_NAMED_PROPS || !1),
        (He = e.KEEP_CONTENT !== !1),
        (Ue = e.IN_PLACE || !1),
        (xe = vf(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : pp),
        (et = typeof e.NAMESPACE == `string` ? e.NAMESPACE : $e),
        (at = Ap(e, `MATHML_TEXT_INTEGRATION_POINTS`, () => pf({}, it))),
        (st = Ap(e, `HTML_INTEGRATION_POINTS`, () => pf({}, ot))));
      let t = Ap(e, `CUSTOM_ELEMENT_HANDLING`, () => Df(null));
      if (
        ((O = Df(null)),
        qf(t, `tagNameCheck`) &&
          mt(t.tagNameCheck) &&
          (O.tagNameCheck = t.tagNameCheck),
        qf(t, `attributeNameCheck`) &&
          mt(t.attributeNameCheck) &&
          (O.attributeNameCheck = t.attributeNameCheck),
        qf(t, `allowCustomizedBuiltInElements`) &&
          typeof t.allowCustomizedBuiltInElements == `boolean` &&
          (O.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements),
        Ef(O),
        Ne && (Ae = !1),
        Be && (ze = !0),
        We &&
          ((Se = pf({}, rp)),
          (we = Df(null)),
          We.html === !0 && (pf(Se, Zf), pf(we, ip)),
          We.svg === !0 && (pf(Se, Qf), pf(we, ap), pf(we, sp)),
          We.svgFilters === !0 && (pf(Se, $f), pf(we, ap), pf(we, sp)),
          We.mathMl === !0 && (pf(Se, tp), pf(we, op), pf(we, sp))),
        (Oe.tagCheck = null),
        (Oe.attributeCheck = null),
        qf(e, `ADD_TAGS`) &&
          (typeof e.ADD_TAGS == `function`
            ? (Oe.tagCheck = e.ADD_TAGS)
            : If(e.ADD_TAGS) &&
              (Se === Ce && (Se = hf(Se)), pf(Se, e.ADD_TAGS, dt))),
        qf(e, `ADD_ATTR`) &&
          (typeof e.ADD_ATTR == `function`
            ? (Oe.attributeCheck = e.ADD_ATTR)
            : If(e.ADD_ATTR) &&
              (we === Te && (we = hf(we)), pf(we, e.ADD_ATTR, dt))),
        qf(e, `ADD_FORBID_CONTENTS`) &&
          If(e.ADD_FORBID_CONTENTS) &&
          (Ge === Ke && (Ge = hf(Ge)), pf(Ge, e.ADD_FORBID_CONTENTS, dt)),
        He && (Se[`#text`] = !0),
        Fe && pf(Se, [`html`, `head`, `body`]),
        Se.table && (pf(Se, [`tbody`]), delete Ee.tbody),
        e.TRUSTED_TYPES_POLICY)
      ) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != `function`)
          throw Xf(
            `TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`,
          );
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != `function`)
          throw Xf(
            `TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`,
          );
        let t = ne;
        ne = e.TRUSTED_TYPES_POLICY;
        try {
          C = ie(``);
        } catch (e) {
          throw ((ne = t), e);
        }
      } else
        e.TRUSTED_TYPES_POLICY === null
          ? ((ne = void 0), (C = ``))
          : (ne === void 0 && (ne = oe()),
            ne && typeof C == `string` && (C = ie(``)));
      (Tf && Tf(e), (ft = e));
    },
    gt = pf({}, [...Qf, ...$f, ...ep]),
    _t = pf({}, [...tp, ...np]),
    vt = function (e, t, n) {
      return t.namespaceURI === $e
        ? e === `svg`
        : t.namespaceURI === Ze
          ? e === `svg` && (n === `annotation-xml` || at[n])
          : !!gt[e];
    },
    yt = function (e, t, n) {
      return t.namespaceURI === $e
        ? e === `math`
        : t.namespaceURI === Qe
          ? e === `math` && st[n]
          : !!_t[e];
    },
    bt = function (e, t, n) {
      return (t.namespaceURI === Qe && !st[n]) ||
        (t.namespaceURI === Ze && !at[n])
        ? !1
        : !_t[e] && (ct[e] || !gt[e]);
    },
    xt = function (e) {
      let t = _(e);
      (!t || !t.tagName) && (t = { namespaceURI: et, tagName: `template` });
      let n = Lf(e.tagName),
        r = Lf(t.tagName);
      return nt[e.namespaceURI]
        ? e.namespaceURI === Qe
          ? vt(n, t, r)
          : e.namespaceURI === Ze
            ? yt(n, t, r)
            : e.namespaceURI === $e
              ? bt(n, t, r)
              : !!(lt === `application/xhtml+xml` && nt[e.namespaceURI])
        : !1;
    },
    St = function (e) {
      Pf(t.removed, { element: e });
      try {
        _(e).removeChild(e);
      } catch {
        if ((p(e), !_(e)))
          throw Xf(
            `a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`,
          );
      }
    },
    Ct = function (e, t, n) {
      try {
        m(e, t);
      } catch {
        try {
          e.removeAttribute(n);
        } catch {}
      }
    },
    wt = function (e) {
      Dt(e);
      let t = g(e);
      if (t) {
        let e = [];
        (jf(t, (t) => {
          Pf(e, t);
        }),
          jf(e, (e) => {
            try {
              p(e);
            } catch {}
          }));
      }
      let n = y(e);
      if (n)
        for (let t = n.length - 1; t >= 0; --t) {
          let r = n[t],
            i = r && r.name;
          typeof i == `string` && Ct(e, r, i);
        }
    },
    Tt = function (e, n, r) {
      if (!r)
        try {
          r = n.getAttributeNode(e);
        } catch {
          r = null;
        }
      Pf(t.removed, { attribute: r || null, from: n });
      try {
        r ? m(n, r) : n.removeAttribute(e);
      } catch {
        try {
          n.removeAttribute(e);
        } catch {}
      }
      if (e === `is`) {
        if (ze || Be)
          try {
            St(n);
          } catch {}
        else
          try {
            n.setAttribute(e, ``);
          } catch {}
      }
    },
    Et = function (e) {
      let t = y(e);
      if (t)
        for (let n = t.length - 1; n >= 0; --n) {
          let r = t[n],
            i = r && r.name;
          typeof i != `string` || we[dt(i)] || Ct(e, r, i);
        }
    },
    Dt = function (e) {
      let t = [e];
      for (; t.length > 0;) {
        let e = t.pop();
        ee(e) === Sp.element && Et(e);
        let n = g(e);
        if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
      }
    },
    Ot = function (e, t) {
      return Pe
        ? e === `patchsrc` || (e === `for` && t !== `label` && t !== `output`)
        : !1;
    },
    kt = function (e) {
      if (!Pe) return;
      let t = [e];
      for (; t.length > 0;) {
        let e = t.pop(),
          n = ee(e);
        if (
          n === Sp.processingInstruction ||
          (n === Sp.comment && Yf(yp, e.data))
        ) {
          try {
            p(e);
          } catch {}
          continue;
        }
        if (n === Sp.element) {
          let t = e,
            n = dt(te(e));
          try {
            (t.hasAttribute &&
              t.hasAttribute(`patchsrc`) &&
              t.removeAttribute(`patchsrc`),
              t.hasAttribute &&
                t.hasAttribute(`for`) &&
                Ot(`for`, n) &&
                t.removeAttribute(`for`));
          } catch {}
        }
        let r = g(e);
        if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
      }
    },
    At = function (e) {
      let t = null,
        r = null;
      if (k) e = `<remove></remove>` + e;
      else {
        let t = zf(e, /^[\r\n\t ]+/);
        r = t && t[0];
      }
      lt === `application/xhtml+xml` &&
        et === $e &&
        (e =
          `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>` +
          e +
          `</body></html>`);
      let i = ne ? ie(e) : e;
      if (et === $e)
        try {
          t = new l().parseFromString(i, lt);
        } catch {}
      if (!t || !t.documentElement) {
        t = se.createDocument(et, `template`, null);
        try {
          t.documentElement.innerHTML = tt ? C : i;
        } catch {}
      }
      let a = t.body || t.documentElement;
      return (
        e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null),
        et === $e
          ? ue.call(t, Fe ? `html` : `body`)[0]
          : Fe
            ? t.documentElement
            : a
      );
    },
    jt = function (e) {
      let t = S ? S(e) : e.ownerDocument;
      return ce.call(
        t || e,
        e,
        c.SHOW_ELEMENT |
          c.SHOW_COMMENT |
          c.SHOW_TEXT |
          c.SHOW_PROCESSING_INSTRUCTION |
          c.SHOW_CDATA_SECTION,
        null,
      );
    },
    Mt = function (e) {
      return (
        (e = Bf(e, pe, ` `)),
        (e = Bf(e, me, ` `)),
        (e = Bf(e, he, ` `)),
        e
      );
    },
    Nt = function (e) {
      e.normalize();
      let t = S ? S(e) : e.ownerDocument,
        n = ce.call(
          t || e,
          e,
          c.SHOW_TEXT |
            c.SHOW_COMMENT |
            c.SHOW_CDATA_SECTION |
            c.SHOW_PROCESSING_INSTRUCTION,
          null,
        ),
        r = n.nextNode();
      for (; r;) ((r.data = Mt(r.data)), (r = n.nextNode()));
      let i = e.querySelectorAll?.call(e, `template`);
      i &&
        jf(i, (e) => {
          Ft(e.content) && Nt(e.content);
        });
    },
    Pt = function (e) {
      let t = x ? x(e) : null;
      return typeof t != `string` || dt(t) !== `form`
        ? !1
        : typeof e.nodeName != `string` ||
            typeof e.textContent != `string` ||
            typeof e.removeChild != `function` ||
            e.attributes !== y(e) ||
            typeof e.removeAttribute != `function` ||
            typeof e.removeAttributeNode != `function` ||
            typeof e.getAttributeNode != `function` ||
            typeof e.setAttribute != `function` ||
            typeof e.namespaceURI != `string` ||
            typeof e.insertBefore != `function` ||
            typeof e.hasChildNodes != `function` ||
            e.nodeType !== b(e) ||
            e.childNodes !== g(e);
    },
    Ft = function (e) {
      if (!b || typeof e != `object` || !e) return !1;
      try {
        return b(e) === Sp.documentFragment;
      } catch {
        return !1;
      }
    },
    It = function (e) {
      if (!b || typeof e != `object` || !e) return !1;
      try {
        return typeof b(e) == `number`;
      } catch {
        return !1;
      }
    };
  function Lt(e, n, r) {
    e.length !== 0 &&
      jf(e, (e) => {
        e.call(t, n, r, ft);
      });
  }
  let Rt = function (e, t) {
      return !!(
        (Pe &&
          e.hasChildNodes() &&
          !It(e.firstElementChild) &&
          Yf(vp, e.textContent) &&
          Yf(vp, e.innerHTML)) ||
        (Pe &&
          e.namespaceURI === $e &&
          wp[t] &&
          (It(e.firstElementChild) ||
            (typeof e.textContent == `string` && Yf(Tp[t], e.textContent)))) ||
        e.nodeType === Sp.processingInstruction ||
        (Pe && e.nodeType === Sp.comment && Yf(yp, e.data))
      );
    },
    zt = function (e, t) {
      return e instanceof RegExp
        ? Yf(e, t)
        : e instanceof Function && !!e(t, ...[...arguments].slice(2));
    },
    Bt = function (e, t, n) {
      if (!Ee[t] && N(t) && zt(O.tagNameCheck, t)) return !1;
      if (He && !Ge[t]) {
        let t = _(e),
          r = g(e);
        if (r && t) {
          let i = r.length;
          for (let a = i - 1; a >= 0; --a) {
            let i = e === n ? f(r[a], !0) : r[a];
            t.insertBefore(i, h(e));
          }
        }
      }
      return (St(e), !0);
    },
    Vt = function (e, t, n, r) {
      return e.length === 0 ? t : t === n || t === r ? hf(t) : t;
    },
    Ht = function (e, t) {
      return e === t || _(e) !== null ? !1 : (Ue && Dt(e), !0);
    },
    Ut = function (e, n) {
      if ((Lt(fe.beforeSanitizeElements, e, null), Ht(e, n))) return !0;
      if (Pt(e)) return (St(e), !0);
      let r = dt(te(e));
      if (
        ((Se = Vt(fe.uponSanitizeElement, Se, Ce, Le)),
        Lt(fe.uponSanitizeElement, e, { tagName: r, allowedTags: Se }),
        Ht(e, n))
      )
        return !0;
      if (Rt(e, r)) return (St(e), !0);
      if (
        Ee[r] ||
        (!(Oe.tagCheck instanceof Function && Oe.tagCheck(r)) && !Se[r])
      ) {
        let t = Bt(e, r, n);
        return t === !1 && (Lt(fe.afterSanitizeElements, e, null), Ht(e, n))
          ? !0
          : t;
      }
      if (
        (ee(e) === Sp.element && !xt(e)) ||
        ((r === `noscript` || r === `noembed` || r === `noframes`) &&
          Yf(bp, e.innerHTML))
      )
        return (St(e), !0);
      if (Ne && e.nodeType === Sp.text) {
        let n = Mt(e.textContent);
        e.textContent !== n &&
          (Pf(t.removed, { element: e.cloneNode() }), (e.textContent = n));
      }
      return (Lt(fe.afterSanitizeElements, e, null), Ht(e, n));
    },
    Wt = function (e, t, r) {
      if (
        De[t] ||
        Ot(t, e) ||
        (A && (t === `id` || t === `name`) && (r in n || r in pt))
      )
        return !1;
      let i =
        we[t] ||
        (Oe.attributeCheck instanceof Function && Oe.attributeCheck(t, e));
      return (Ae && Yf(ge, t)) || (ke && Yf(_e, t))
        ? !0
        : i
          ? Ye[t] ||
            Yf(xe, Bf(r, ye, ``)) ||
            ((t === `src` || t === `xlink:href` || t === `href`) &&
              e !== `script` &&
              Vf(r, `data:`) === 0 &&
              qe[e]) ||
            (je && !Yf(ve, Bf(r, ye, ``)))
            ? !0
            : !r
          : (N(e) && zt(O.tagNameCheck, e) && zt(O.attributeNameCheck, t, e)) ||
            (t === `is` &&
              O.allowCustomizedBuiltInElements &&
              zt(O.tagNameCheck, r));
    },
    Gt = pf({}, [
      `annotation-xml`,
      `color-profile`,
      `font-face`,
      `font-face-format`,
      `font-face-name`,
      `font-face-src`,
      `font-face-uri`,
      `missing-glyph`,
    ]),
    N = function (e) {
      return !Gt[Lf(e)] && Yf(be, e);
    },
    Kt = function (e, t, n, r) {
      if (
        ne &&
        typeof u == `object` &&
        typeof u.getAttributeType == `function` &&
        !n
      )
        switch (u.getAttributeType(e, t)) {
          case `TrustedHTML`:
            return ie(r);
          case `TrustedScriptURL`:
            return ae(r);
        }
      return r;
    },
    qt = function (e, t, n, r) {
      try {
        return (
          n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r),
          !Pt(e) || (St(e), !1)
        );
      } catch {
        return (Tt(t, e), !1);
      }
    },
    Jt = function (e, n) {
      if ((Lt(fe.beforeSanitizeAttributes, e, null), Ht(e, n))) return;
      let r = e.attributes;
      if (!r || Pt(e)) return;
      we = Vt(fe.uponSanitizeAttribute, we, Te, Re);
      let i = {
          attrName: ``,
          attrValue: ``,
          keepAttr: !0,
          allowedAttributes: we,
          forceKeepAttr: void 0,
        },
        a = r.length,
        o = dt(e.nodeName);
      for (; a--;) {
        let n = r[a],
          s = n.name,
          c = n.namespaceURI,
          l = n.value,
          u = dt(s),
          d = l,
          f = s === `value` ? d : Hf(d),
          p = !1;
        if (
          ((i.attrName = u),
          (i.attrValue = f),
          (i.keepAttr = !0),
          (i.forceKeepAttr = void 0),
          Lt(fe.uponSanitizeAttribute, e, i),
          (f = i.attrValue),
          j &&
            (u === `id` || u === `name`) &&
            Vf(f, M) !== 0 &&
            (Tt(s, e, n), (f = M + f), (p = !0)),
          Pe &&
            Yf(
              /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
              f,
            ))
        ) {
          Tt(s, e, n);
          continue;
        }
        if (u === `attributename` && zf(f, `href`)) {
          Tt(s, e, n);
          continue;
        }
        if (!i.forceKeepAttr) {
          if (!i.keepAttr) {
            Tt(s, e, n);
            continue;
          }
          if (!Me && Yf(xp, f)) {
            Tt(s, e, n);
            continue;
          }
          if ((Ne && (f = Mt(f)), !Wt(o, u, f))) {
            Tt(s, e, n);
            continue;
          }
          ((f = Kt(o, u, c, f)),
            f !== d && qt(e, s, c, f) && p && Nf(t.removed));
        }
      }
      (Lt(fe.afterSanitizeAttributes, e, null), Ht(e, n));
    },
    Yt = function (e) {
      let t = null,
        n = jt(e);
      for (Lt(fe.beforeSanitizeShadowDOM, e, null); (t = n.nextNode());)
        if (
          (Lt(fe.uponSanitizeShadowNode, t, null),
          Ut(t, e),
          Jt(t, e),
          Ft(t.content) && Yt(t.content),
          ee(t) === Sp.element)
        ) {
          let e = v(t);
          Ft(e) && (Xt(e), Yt(e));
        }
      Lt(fe.afterSanitizeShadowDOM, e, null);
    },
    Xt = function (e) {
      let t = [{ node: e, shadow: null }];
      for (; t.length > 0;) {
        let e = t.pop();
        if (e.shadow) {
          Yt(e.shadow);
          continue;
        }
        let n = e.node,
          r = ee(n) === Sp.element,
          i = g(n);
        if (i)
          for (let e = i.length - 1; e >= 0; --e)
            t.push({ node: i[e], shadow: null });
        if (r) {
          let e = x ? x(n) : null;
          if (typeof e == `string` && dt(e) === `template`) {
            let e = n.content;
            Ft(e) && t.push({ node: e, shadow: null });
          }
        }
        if (r) {
          let e = v(n);
          Ft(e) && t.push({ node: null, shadow: e }, { node: e, shadow: null });
        }
      }
    };
  return (
    (t.sanitize = function (e) {
      let n =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        i = null,
        a = null,
        o = null,
        s = null;
      if (
        ((tt = !e),
        tt && (e = `<!-->`),
        typeof e != `string` && !It(e) && ((e = gf(e)), typeof e != `string`))
      )
        throw Xf(`dirty is not a string, aborting`);
      if (!t.isSupported) return e;
      (Ie ? ((Se = Le), (we = Re)) : ht(n),
        (fe.uponSanitizeElement.length > 0 ||
          fe.uponSanitizeAttribute.length > 0) &&
          (Se = hf(Se)),
        fe.uponSanitizeAttribute.length > 0 && (we = hf(we)),
        (t.removed = []));
      let c = Ue && typeof e != `string` && It(e);
      if (c) {
        kt(e);
        let t = te(e);
        if (typeof t == `string`) {
          let n = dt(t);
          if (!Se[n] || Ee[n])
            throw (
              wt(e),
              Xf(`root node is forbidden and cannot be sanitized in-place`)
            );
        }
        if (Pt(e))
          throw (
            wt(e),
            Xf(`root node is clobbered and cannot be sanitized in-place`)
          );
        try {
          Xt(e);
        } catch (t) {
          throw (wt(e), t);
        }
      } else if (It(e))
        ((i = At(`<!---->`)),
          (a = i.ownerDocument.importNode(e, !0)),
          (a.nodeType === Sp.element && a.nodeName === `BODY`) ||
          a.nodeName === `HTML`
            ? (i = a)
            : i.appendChild(a),
          Xt(i));
      else {
        if (!ze && !Ne && !Fe && e.indexOf(`<`) === -1)
          return ne && Ve ? ie(e) : e;
        if (((i = At(e)), !i)) return ze ? null : Ve ? C : ``;
      }
      i && k && St(i.firstChild);
      let l = c ? e : i;
      try {
        let e = jt(l);
        for (; (o = e.nextNode());)
          (Ut(o, l), Jt(o, l), Ft(o.content) && Yt(o.content));
      } catch (n) {
        throw (
          c &&
            (wt(e),
            jf(t.removed, (e) => {
              e.element && Dt(e.element);
            })),
          n
        );
      }
      if (c) {
        let n = !1;
        if (
          (jf(t.removed, (t) => {
            t.element && (t.element === e && (n = !0), Dt(t.element));
          }),
          n)
        )
          throw Xf(
            `a node selected for removal could not be safely returned; refusing to sanitize in place`,
          );
        return (Ne && Nt(e), e);
      }
      if (ze) {
        if ((Ne && Nt(i), Be))
          for (s = le.call(i.ownerDocument); i.firstChild;)
            s.appendChild(i.firstChild);
        else s = i;
        return (
          (we.shadowroot || we.shadowrootmode) && (s = de.call(r, s, !0)),
          s
        );
      }
      let u = Fe ? i.outerHTML : i.innerHTML;
      return (
        Fe &&
          Se[`!doctype`] &&
          i.ownerDocument &&
          i.ownerDocument.doctype &&
          i.ownerDocument.doctype.name &&
          Yf(gp, i.ownerDocument.doctype.name) &&
          (u =
            `<!DOCTYPE ` +
            i.ownerDocument.doctype.name +
            `>
` +
            u),
        Ne && (u = Mt(u)),
        ne && Ve ? ie(u) : u
      );
    }),
    (t.setConfig = function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (ht(e), (Ie = !0), (Le = Se), (Re = we));
    }),
    (t.clearConfig = function () {
      ((ft = null), (Ie = !1), (Le = null), (Re = null), (ne = w), (C = ``));
    }),
    (t.isValidAttribute = function (e, t, n) {
      ft || ht({});
      let r = dt(e),
        i = dt(t);
      return Wt(r, i, n);
    }),
    (t.addHook = function (e, t) {
      typeof t == `function` && qf(fe, e) && Pf(fe[e], t);
    }),
    (t.removeHook = function (e, t) {
      if (qf(fe, e)) {
        if (t !== void 0) {
          let n = Mf(fe[e], t);
          return n === -1 ? void 0 : Ff(fe[e], n, 1)[0];
        }
        return Nf(fe[e]);
      }
    }),
    (t.removeHooks = function (e) {
      qf(fe, e) && (fe[e] = []);
    }),
    (t.removeAllHooks = function () {
      fe = Op();
    }),
    t
  );
}
var bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef,
  Df,
  Of,
  kf,
  Af,
  jf,
  Mf,
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Wf,
  Gf,
  Kf,
  qf,
  Jf,
  Yf,
  Xf,
  Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp,
  _p,
  vp,
  yp,
  bp,
  xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep,
  Dp,
  Op,
  kp,
  Ap,
  jp,
  Mp = o(() => {
    ((uf.prototype[
      (typeof Symbol == `function` && Symbol.asyncIterator) || `@@asyncIterator`
    ] = function () {
      return this;
    }),
      (uf.prototype.next = function (e) {
        return this._invoke(`next`, e);
      }),
      (uf.prototype.throw = function (e) {
        return this._invoke(`throw`, e);
      }),
      (uf.prototype.return = function (e) {
        return this._invoke(`return`, e);
      }),
      (bf = Object.entries),
      (xf = Object.setPrototypeOf),
      (Sf = Object.isFrozen),
      (Cf = Object.getPrototypeOf),
      (wf = Object.getOwnPropertyDescriptor),
      (Tf = Object.freeze),
      (Ef = Object.seal),
      (Df = Object.create),
      (Of = typeof Reflect < `u` && Reflect),
      (kf = Of.apply),
      (Af = Of.construct),
      (Tf ||= function (e) {
        return e;
      }),
      (Ef ||= function (e) {
        return e;
      }),
      (kf ||= function (e, t) {
        var n = [...arguments].slice(2);
        return e.apply(t, n);
      }),
      (Af ||= function (e) {
        return new e(...[...arguments].slice(1));
      }),
      (jf = df(Array.prototype.forEach)),
      Array.prototype.indexOf,
      (Mf = df(Array.prototype.lastIndexOf)),
      (Nf = df(Array.prototype.pop)),
      (Pf = df(Array.prototype.push)),
      Array.prototype.slice,
      (Ff = df(Array.prototype.splice)),
      (If = Array.isArray),
      (Lf = df(String.prototype.toLowerCase)),
      (Rf = df(String.prototype.toString)),
      (zf = df(String.prototype.match)),
      (Bf = df(String.prototype.replace)),
      (Vf = df(String.prototype.indexOf)),
      (Hf = df(String.prototype.trim)),
      (Uf = df(Number.prototype.toString)),
      (Wf = df(Boolean.prototype.toString)),
      (Gf = typeof BigInt > `u` ? null : df(BigInt.prototype.toString)),
      (Kf = typeof Symbol > `u` ? null : df(Symbol.prototype.toString)),
      (qf = df(Object.prototype.hasOwnProperty)),
      (Jf = df(Object.prototype.toString)),
      (Yf = df(RegExp.prototype.test)),
      (Xf = ff(TypeError)),
      (Zf = Tf(
        `a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(
          `.`,
        ),
      )),
      (Qf = Tf(
        `svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(
          `.`,
        ),
      )),
      ($f = Tf([
        `feBlend`,
        `feColorMatrix`,
        `feComponentTransfer`,
        `feComposite`,
        `feConvolveMatrix`,
        `feDiffuseLighting`,
        `feDisplacementMap`,
        `feDistantLight`,
        `feDropShadow`,
        `feFlood`,
        `feFuncA`,
        `feFuncB`,
        `feFuncG`,
        `feFuncR`,
        `feGaussianBlur`,
        `feImage`,
        `feMerge`,
        `feMergeNode`,
        `feMorphology`,
        `feOffset`,
        `fePointLight`,
        `feSpecularLighting`,
        `feSpotLight`,
        `feTile`,
        `feTurbulence`,
      ])),
      (ep = Tf([
        `animate`,
        `color-profile`,
        `cursor`,
        `discard`,
        `font-face`,
        `font-face-format`,
        `font-face-name`,
        `font-face-src`,
        `font-face-uri`,
        `foreignobject`,
        `hatch`,
        `hatchpath`,
        `mesh`,
        `meshgradient`,
        `meshpatch`,
        `meshrow`,
        `missing-glyph`,
        `script`,
        `set`,
        `solidcolor`,
        `unknown`,
        `use`,
      ])),
      (tp = Tf(
        `math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(
          `.`,
        ),
      )),
      (np = Tf([
        `maction`,
        `maligngroup`,
        `malignmark`,
        `mlongdiv`,
        `mscarries`,
        `mscarry`,
        `msgroup`,
        `mstack`,
        `msline`,
        `msrow`,
        `semantics`,
        `annotation`,
        `annotation-xml`,
        `mprescripts`,
        `none`,
      ])),
      (rp = Tf([`#text`])),
      (ip = Tf(
        `accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(
          `.`,
        ),
      )),
      (ap = Tf(
        `accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(
          `.`,
        ),
      )),
      (op = Tf(
        `accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(
          `.`,
        ),
      )),
      (sp = Tf([
        `xlink:href`,
        `xml:id`,
        `xlink:title`,
        `xml:space`,
        `xmlns:xlink`,
      ])),
      (cp = Ef(/{{[\w\W]*|^[\w\W]*}}/g)),
      (lp = Ef(/<%[\w\W]*|^[\w\W]*%>/g)),
      (up = Ef(/\${[\w\W]*/g)),
      (dp = Ef(/^data-[\-\w.\u00B7-\uFFFF]+$/)),
      (fp = Ef(/^aria-[\-\w]+$/)),
      (pp = Ef(
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
      )),
      (mp = Ef(/^(?:\w+script|data):/i)),
      (hp = Ef(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)),
      (gp = Ef(/^html$/i)),
      (_p = Ef(/^[a-z][.\w]*(-[.\w]+)+$/i)),
      (vp = Ef(/<[/\w!]/g)),
      (yp = Ef(/<[/\w]/g)),
      (bp = Ef(/<\/no(script|embed|frames)/i)),
      (xp = Ef(/\/>/i)),
      (Sp = {
        element: 1,
        attribute: 2,
        text: 3,
        cdataSection: 4,
        entityReference: 5,
        entityNode: 6,
        processingInstruction: 7,
        comment: 8,
        document: 9,
        documentType: 10,
        documentFragment: 11,
        notation: 12,
      }),
      (Cp = [
        `style`,
        `script`,
        `xmp`,
        `iframe`,
        `noembed`,
        `noframes`,
        `plaintext`,
        `noscript`,
      ]),
      (wp = Tf(pf({}, Cp))),
      (Tp = (function () {
        let e = {};
        return (
          jf(Cp, (t) => {
            e[t] = Ef(RegExp(`</` + t + `(?=[\\t\\n\\f\\r />])`, `i`));
          }),
          Tf(e)
        );
      })()),
      (Ep = function () {
        return typeof window > `u` ? null : window;
      }),
      (Dp = function (e, t) {
        if (typeof e != `object` || typeof e.createPolicy != `function`)
          return null;
        let n = null,
          r = `data-tt-policy-suffix`;
        t && t.hasAttribute(r) && (n = t.getAttribute(r));
        let i = `dompurify` + (n ? `#` + n : ``);
        try {
          return e.createPolicy(i, {
            createHTML(e) {
              return e;
            },
            createScriptURL(e) {
              return e;
            },
          });
        } catch {
          return (
            console.warn(`TrustedTypes policy ` + i + ` could not be created.`),
            null
          );
        }
      }),
      (Op = function () {
        return {
          afterSanitizeAttributes: [],
          afterSanitizeElements: [],
          afterSanitizeShadowDOM: [],
          beforeSanitizeAttributes: [],
          beforeSanitizeElements: [],
          beforeSanitizeShadowDOM: [],
          uponSanitizeAttribute: [],
          uponSanitizeElement: [],
          uponSanitizeShadowNode: [],
        };
      }),
      (kp = function (e, t, n, r) {
        return qf(e, t) && If(e[t])
          ? pf(r.base ? hf(r.base) : {}, e[t], r.transform)
          : n;
      }),
      (Ap = function (e, t, n) {
        let r = qf(e, t) ? e[t] : void 0;
        return r && typeof r == `object` ? hf(r) : n();
      }),
      (jp = yf()));
  }),
  Np = s((e, t) => {
    function n(e) {
      return (
        e instanceof Map
          ? (e.clear =
              e.delete =
              e.set =
                function () {
                  throw Error(`map is read-only`);
                })
          : e instanceof Set &&
            (e.add =
              e.clear =
              e.delete =
                function () {
                  throw Error(`set is read-only`);
                }),
        Object.freeze(e),
        Object.getOwnPropertyNames(e).forEach((t) => {
          let r = e[t],
            i = typeof r;
          (i === `object` || i === `function`) && !Object.isFrozen(r) && n(r);
        }),
        e
      );
    }
    var r = class {
      constructor(e) {
        (e.data === void 0 && (e.data = {}),
          (this.data = e.data),
          (this.isMatchIgnored = !1));
      }
      ignoreMatch() {
        this.isMatchIgnored = !0;
      }
    };
    function i(e) {
      return e
        .replace(/&/g, `&amp;`)
        .replace(/</g, `&lt;`)
        .replace(/>/g, `&gt;`)
        .replace(/"/g, `&quot;`)
        .replace(/'/g, `&#x27;`);
    }
    function a(e, ...t) {
      let n = Object.create(null);
      for (let t in e) n[t] = e[t];
      return (
        t.forEach(function (e) {
          for (let t in e) n[t] = e[t];
        }),
        n
      );
    }
    var o = `</span>`,
      s = (e) => !!e.scope,
      c = (e, { prefix: t }) => {
        if (e.startsWith(`language:`))
          return e.replace(`language:`, `language-`);
        if (e.includes(`.`)) {
          let n = e.split(`.`);
          return [
            `${t}${n.shift()}`,
            ...n.map((e, t) => `${e}${`_`.repeat(t + 1)}`),
          ].join(` `);
        }
        return `${t}${e}`;
      },
      l = class {
        constructor(e, t) {
          ((this.buffer = ``),
            (this.classPrefix = t.classPrefix),
            e.walk(this));
        }
        addText(e) {
          this.buffer += i(e);
        }
        openNode(e) {
          if (!s(e)) return;
          let t = c(e.scope, { prefix: this.classPrefix });
          this.span(t);
        }
        closeNode(e) {
          s(e) && (this.buffer += o);
        }
        value() {
          return this.buffer;
        }
        span(e) {
          this.buffer += `<span class="${e}">`;
        }
      },
      u = (e = {}) => {
        let t = { children: [] };
        return (Object.assign(t, e), t);
      },
      d = class e {
        constructor() {
          ((this.rootNode = u()), (this.stack = [this.rootNode]));
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        add(e) {
          this.top.children.push(e);
        }
        openNode(e) {
          let t = u({ scope: e });
          (this.add(t), this.stack.push(t));
        }
        closeNode() {
          if (this.stack.length > 1) return this.stack.pop();
        }
        closeAllNodes() {
          for (; this.closeNode(););
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        walk(e) {
          return this.constructor._walk(e, this.rootNode);
        }
        static _walk(e, t) {
          return (
            typeof t == `string`
              ? e.addText(t)
              : t.children &&
                (e.openNode(t),
                t.children.forEach((t) => this._walk(e, t)),
                e.closeNode(t)),
            e
          );
        }
        static _collapse(t) {
          typeof t != `string` &&
            t.children &&
            (t.children.every((e) => typeof e == `string`)
              ? (t.children = [t.children.join(``)])
              : t.children.forEach((t) => {
                  e._collapse(t);
                }));
        }
      },
      f = class extends d {
        constructor(e) {
          (super(), (this.options = e));
        }
        addText(e) {
          e !== `` && this.add(e);
        }
        startScope(e) {
          this.openNode(e);
        }
        endScope() {
          this.closeNode();
        }
        __addSublanguage(e, t) {
          let n = e.root;
          (t && (n.scope = `language:${t}`), this.add(n));
        }
        toHTML() {
          return new l(this, this.options).value();
        }
        finalize() {
          return (this.closeAllNodes(), !0);
        }
      };
    function p(e) {
      return e ? (typeof e == `string` ? e : e.source) : null;
    }
    function m(e) {
      return _(`(?=`, e, `)`);
    }
    function h(e) {
      return _(`(?:`, e, `)*`);
    }
    function g(e) {
      return _(`(?:`, e, `)?`);
    }
    function _(...e) {
      return e.map((e) => p(e)).join(``);
    }
    function v(e) {
      let t = e[e.length - 1];
      return typeof t == `object` && t.constructor === Object
        ? (e.splice(e.length - 1, 1), t)
        : {};
    }
    function y(...e) {
      return (
        `(` + (v(e).capture ? `` : `?:`) + e.map((e) => p(e)).join(`|`) + `)`
      );
    }
    function b(e) {
      return RegExp(e.toString() + `|`).exec(``).length - 1;
    }
    function x(e, t) {
      let n = e && e.exec(t);
      return n && n.index === 0;
    }
    var S = new RegExp(
      y(
        /\[(?:[^\\\]]|\\.)*\]/,
        /\(\?<(?![=!])[^>]+>/,
        /\(\?'[^']+'/,
        /\(\??/,
        /\\([1-9][0-9]*)/,
        /\\./,
      ),
    );
    function ee(e, { joinWith: t }) {
      let n = 0;
      return e
        .map((e) => {
          n += 1;
          let t = n,
            r = p(e),
            i = ``;
          for (; r.length > 0;) {
            let e = S.exec(r);
            if (!e) {
              i += r;
              break;
            }
            ((i += r.substring(0, e.index)),
              (r = r.substring(e.index + e[0].length)),
              e[0][0] === `\\` && e[1]
                ? (i += `\\` + String(Number(e[1]) + t))
                : ((i += e[0]),
                  (e[0] === `(` || /^\(\?[<']/.test(e[0])) && n++));
          }
          return i;
        })
        .map((e) => `(${e})`)
        .join(t);
    }
    var te = /\b\B/,
      ne = `[a-zA-Z]\\w*`,
      C = `[a-zA-Z_]\\w*`,
      w = `\\b\\d+(\\.\\d+)?`,
      re = `(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`,
      T = `\\b(0b[01]+)`,
      E = `!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`,
      ie = (e = {}) => {
        let t = /^#![ ]*\//;
        return (
          e.binary && (e.begin = _(t, /.*\b/, e.binary, /\b.*/)),
          a(
            {
              scope: `meta`,
              begin: t,
              end: /$/,
              relevance: 0,
              "on:begin": (e, t) => {
                e.index !== 0 && t.ignoreMatch();
              },
            },
            e,
          )
        );
      },
      ae = { begin: `\\\\[\\s\\S]`, relevance: 0 },
      oe = {
        scope: `string`,
        begin: `'`,
        end: `'`,
        illegal: `\\n`,
        contains: [ae],
      },
      D = {
        scope: `string`,
        begin: `"`,
        end: `"`,
        illegal: `\\n`,
        contains: [ae],
      },
      se = {
        begin:
          /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
      },
      ce = function (e, t, n = {}) {
        let r = a({ scope: `comment`, begin: e, end: t, contains: [] }, n);
        r.contains.push({
          scope: `doctag`,
          begin: `[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0,
        });
        let i = y(
          `I`,
          `a`,
          `is`,
          `so`,
          `us`,
          `to`,
          `at`,
          `if`,
          `in`,
          `it`,
          `on`,
          /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
          /[A-Za-z]+[-][a-z]+/,
          /[A-Za-z][a-z]{2,}/,
        );
        return (
          r.contains.push({
            begin: _(/[ ]+/, `(`, i, /[.]?[:]?([.][ ]|[ ])/, `){3}`),
          }),
          r
        );
      },
      le = ce(`//`, `$`),
      ue = ce(`/\\*`, `\\*/`),
      de = ce(`#`, `$`),
      fe = Object.freeze({
        __proto__: null,
        APOS_STRING_MODE: oe,
        BACKSLASH_ESCAPE: ae,
        BINARY_NUMBER_MODE: { scope: `number`, begin: T, relevance: 0 },
        BINARY_NUMBER_RE: T,
        COMMENT: ce,
        C_BLOCK_COMMENT_MODE: ue,
        C_LINE_COMMENT_MODE: le,
        C_NUMBER_MODE: { scope: `number`, begin: re, relevance: 0 },
        C_NUMBER_RE: re,
        END_SAME_AS_BEGIN: function (e) {
          return Object.assign(e, {
            "on:begin": (e, t) => {
              t.data._beginMatch = e[1];
            },
            "on:end": (e, t) => {
              t.data._beginMatch !== e[1] && t.ignoreMatch();
            },
          });
        },
        HASH_COMMENT_MODE: de,
        IDENT_RE: ne,
        MATCH_NOTHING_RE: te,
        METHOD_GUARD: { begin: `\\.\\s*[a-zA-Z_]\\w*`, relevance: 0 },
        NUMBER_MODE: { scope: `number`, begin: w, relevance: 0 },
        NUMBER_RE: w,
        PHRASAL_WORDS_MODE: se,
        QUOTE_STRING_MODE: D,
        REGEXP_MODE: {
          scope: `regexp`,
          begin: /\/(?=[^/\n]*\/)/,
          end: /\/[gimuy]*/,
          contains: [
            ae,
            { begin: /\[/, end: /\]/, relevance: 0, contains: [ae] },
          ],
        },
        RE_STARTERS_RE: E,
        SHEBANG: ie,
        TITLE_MODE: { scope: `title`, begin: ne, relevance: 0 },
        UNDERSCORE_IDENT_RE: C,
        UNDERSCORE_TITLE_MODE: { scope: `title`, begin: C, relevance: 0 },
      });
    function pe(e, t) {
      e.input[e.index - 1] === `.` && t.ignoreMatch();
    }
    function me(e, t) {
      e.className !== void 0 && ((e.scope = e.className), delete e.className);
    }
    function he(e, t) {
      t &&
        e.beginKeywords &&
        ((e.begin =
          `\\b(` +
          e.beginKeywords.split(` `).join(`|`) +
          `)(?!\\.)(?=\\b|\\s)`),
        (e.__beforeBegin = pe),
        (e.keywords = e.keywords || e.beginKeywords),
        delete e.beginKeywords,
        e.relevance === void 0 && (e.relevance = 0));
    }
    function ge(e, t) {
      Array.isArray(e.illegal) && (e.illegal = y(...e.illegal));
    }
    function _e(e, t) {
      if (e.match) {
        if (e.begin || e.end)
          throw Error(`begin & end are not supported with match`);
        ((e.begin = e.match), delete e.match);
      }
    }
    function ve(e, t) {
      e.relevance === void 0 && (e.relevance = 1);
    }
    var ye = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw Error(`beforeMatch cannot be used with starts`);
        let n = Object.assign({}, e);
        (Object.keys(e).forEach((t) => {
          delete e[t];
        }),
          (e.keywords = n.keywords),
          (e.begin = _(n.beforeMatch, m(n.begin))),
          (e.starts = {
            relevance: 0,
            contains: [Object.assign(n, { endsParent: !0 })],
          }),
          (e.relevance = 0),
          delete n.beforeMatch);
      },
      be = [
        `of`,
        `and`,
        `for`,
        `in`,
        `not`,
        `or`,
        `if`,
        `then`,
        `parent`,
        `list`,
        `value`,
      ],
      xe = `keyword`;
    function Se(e, t, n = xe) {
      let r = Object.create(null);
      return (
        typeof e == `string`
          ? i(n, e.split(` `))
          : Array.isArray(e)
            ? i(n, e)
            : Object.keys(e).forEach(function (n) {
                Object.assign(r, Se(e[n], t, n));
              }),
        r
      );
      function i(e, n) {
        (t && (n = n.map((e) => e.toLowerCase())),
          n.forEach(function (t) {
            let n = t.split(`|`);
            r[n[0]] = [e, Ce(n[0], n[1])];
          }));
      }
    }
    function Ce(e, t) {
      return t ? Number(t) : +!we(e);
    }
    function we(e) {
      return be.includes(e.toLowerCase());
    }
    var Te = {},
      O = (e) => {
        console.error(e);
      },
      Ee = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
      },
      De = (e, t) => {
        Te[`${e}/${t}`] ||
          (console.log(`Deprecated as of ${e}. ${t}`), (Te[`${e}/${t}`] = !0));
      },
      Oe = Error();
    function ke(e, t, { key: n }) {
      let r = 0,
        i = e[n],
        a = {},
        o = {};
      for (let e = 1; e <= t.length; e++)
        ((o[e + r] = i[e]), (a[e + r] = !0), (r += b(t[e - 1])));
      ((e[n] = o), (e[n]._emit = a), (e[n]._multi = !0));
    }
    function Ae(e) {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin)
          throw (
            O(
              `skip, excludeBegin, returnBegin not compatible with beginScope: {}`,
            ),
            Oe
          );
        if (typeof e.beginScope != `object` || e.beginScope === null)
          throw (O(`beginScope must be object`), Oe);
        (ke(e, e.begin, { key: `beginScope` }),
          (e.begin = ee(e.begin, { joinWith: `` })));
      }
    }
    function je(e) {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd)
          throw (
            O(`skip, excludeEnd, returnEnd not compatible with endScope: {}`),
            Oe
          );
        if (typeof e.endScope != `object` || e.endScope === null)
          throw (O(`endScope must be object`), Oe);
        (ke(e, e.end, { key: `endScope` }),
          (e.end = ee(e.end, { joinWith: `` })));
      }
    }
    function Me(e) {
      e.scope &&
        typeof e.scope == `object` &&
        e.scope !== null &&
        ((e.beginScope = e.scope), delete e.scope);
    }
    function Ne(e) {
      (Me(e),
        typeof e.beginScope == `string` &&
          (e.beginScope = { _wrap: e.beginScope }),
        typeof e.endScope == `string` && (e.endScope = { _wrap: e.endScope }),
        Ae(e),
        je(e));
    }
    function Pe(e) {
      function t(t, n) {
        return new RegExp(
          p(t),
          `m` +
            (e.case_insensitive ? `i` : ``) +
            (e.unicodeRegex ? `u` : ``) +
            (n ? `g` : ``),
        );
      }
      class n {
        constructor() {
          ((this.matchIndexes = {}),
            (this.regexes = []),
            (this.matchAt = 1),
            (this.position = 0));
        }
        addRule(e, t) {
          ((t.position = this.position++),
            (this.matchIndexes[this.matchAt] = t),
            this.regexes.push([t, e]),
            (this.matchAt += b(e) + 1));
        }
        compile() {
          this.regexes.length === 0 && (this.exec = () => null);
          let e = this.regexes.map((e) => e[1]);
          ((this.matcherRe = t(ee(e, { joinWith: `|` }), !0)),
            (this.lastIndex = 0));
        }
        exec(e) {
          this.matcherRe.lastIndex = this.lastIndex;
          let t = this.matcherRe.exec(e);
          if (!t) return null;
          let n = t.findIndex((e, t) => t > 0 && e !== void 0),
            r = this.matchIndexes[n];
          return (t.splice(0, n), Object.assign(t, r));
        }
      }
      class r {
        constructor() {
          ((this.rules = []),
            (this.multiRegexes = []),
            (this.count = 0),
            (this.lastIndex = 0),
            (this.regexIndex = 0));
        }
        getMatcher(e) {
          if (this.multiRegexes[e]) return this.multiRegexes[e];
          let t = new n();
          return (
            this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
            t.compile(),
            (this.multiRegexes[e] = t),
            t
          );
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        addRule(e, t) {
          (this.rules.push([e, t]), t.type === `begin` && this.count++);
        }
        exec(e) {
          let t = this.getMatcher(this.regexIndex);
          t.lastIndex = this.lastIndex;
          let n = t.exec(e);
          if (
            this.resumingScanAtSamePosition() &&
            !(n && n.index === this.lastIndex)
          ) {
            let t = this.getMatcher(0);
            ((t.lastIndex = this.lastIndex + 1), (n = t.exec(e)));
          }
          return (
            n &&
              ((this.regexIndex += n.position + 1),
              this.regexIndex === this.count && this.considerAll()),
            n
          );
        }
      }
      function i(e) {
        let t = new r();
        return (
          e.contains.forEach((e) =>
            t.addRule(e.begin, { rule: e, type: `begin` }),
          ),
          e.terminatorEnd && t.addRule(e.terminatorEnd, { type: `end` }),
          e.illegal && t.addRule(e.illegal, { type: `illegal` }),
          t
        );
      }
      function o(n, r) {
        let a = n;
        if (n.isCompiled) return a;
        ([me, _e, Ne, ye].forEach((e) => e(n, r)),
          e.compilerExtensions.forEach((e) => e(n, r)),
          (n.__beforeBegin = null),
          [he, ge, ve].forEach((e) => e(n, r)),
          (n.isCompiled = !0));
        let s = null;
        return (
          typeof n.keywords == `object` &&
            n.keywords.$pattern &&
            ((n.keywords = Object.assign({}, n.keywords)),
            (s = n.keywords.$pattern),
            delete n.keywords.$pattern),
          (s ||= /\w+/),
          (n.keywords &&= Se(n.keywords, e.case_insensitive)),
          (a.keywordPatternRe = t(s, !0)),
          r &&
            ((n.begin ||= /\B|\b/),
            (a.beginRe = t(a.begin)),
            !n.end && !n.endsWithParent && (n.end = /\B|\b/),
            n.end && (a.endRe = t(a.end)),
            (a.terminatorEnd = p(a.end) || ``),
            n.endsWithParent &&
              r.terminatorEnd &&
              (a.terminatorEnd += (n.end ? `|` : ``) + r.terminatorEnd)),
          n.illegal && (a.illegalRe = t(n.illegal)),
          (n.contains ||= []),
          (n.contains = [].concat(
            ...n.contains.map(function (e) {
              return Ie(e === `self` ? n : e);
            }),
          )),
          n.contains.forEach(function (e) {
            o(e, a);
          }),
          n.starts && o(n.starts, r),
          (a.matcher = i(a)),
          a
        );
      }
      if (
        ((e.compilerExtensions ||= []),
        e.contains && e.contains.includes(`self`))
      )
        throw Error(
          "ERR: contains `self` is not supported at the top-level of a language.  See documentation.",
        );
      return ((e.classNameAliases = a(e.classNameAliases || {})), o(e));
    }
    function Fe(e) {
      return e ? e.endsWithParent || Fe(e.starts) : !1;
    }
    function Ie(e) {
      return (
        e.variants &&
          !e.cachedVariants &&
          (e.cachedVariants = e.variants.map(function (t) {
            return a(e, { variants: null }, t);
          })),
        e.cachedVariants
          ? e.cachedVariants
          : Fe(e)
            ? a(e, { starts: e.starts ? a(e.starts) : null })
            : Object.isFrozen(e)
              ? a(e)
              : e
      );
    }
    var Le = `11.12.0`,
      Re = class extends Error {
        constructor(e, t) {
          (super(e), (this.name = `HTMLInjectionError`), (this.html = t));
        }
      },
      k = i,
      ze = a,
      Be = Symbol(`nomatch`),
      Ve = 7,
      A = function (e) {
        let t = Object.create(null),
          i = Object.create(null),
          a = [],
          o = !0,
          s = `Could not find the language '{}', did you forget to load/include a language module?`,
          c = { disableAutodetect: !0, name: `Plain text`, contains: [] },
          l = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: `hljs-`,
            cssSelector: `pre code`,
            languages: null,
            __emitter: f,
          };
        function u(e) {
          return l.noHighlightRe.test(e);
        }
        function d(e) {
          let t = e.className + ` `;
          t += e.parentNode ? e.parentNode.className : ``;
          let n = l.languageDetectRe.exec(t);
          if (n) {
            let t = oe(n[1]);
            return (
              t ||
                (Ee(s.replace(`{}`, n[1])),
                Ee(`Falling back to no-highlight mode for this block.`, e)),
              t ? n[1] : `no-highlight`
            );
          }
          return t.split(/\s+/).find((e) => u(e) || oe(e));
        }
        function p(e, t, n) {
          let r = ``,
            i = ``;
          (typeof t == `object`
            ? ((r = e), (n = t.ignoreIllegals), (i = t.language))
            : (De(
                `10.7.0`,
                `highlight(lang, code, ...args) has been deprecated.`,
              ),
              De(
                `10.7.0`,
                `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`,
              ),
              (i = e),
              (r = t)),
            n === void 0 && (n = !0));
          let a = { code: r, language: i };
          de(`before:highlight`, a);
          let o = a.result ? a.result : v(a.language, a.code, n);
          return ((o.code = a.code), de(`after:highlight`, o), o);
        }
        function v(e, n, i, a) {
          let c = Object.create(null);
          function u(e, t) {
            return e.keywords[t];
          }
          function d() {
            if (!E.keywords) {
              ae.addText(D);
              return;
            }
            let e = 0;
            E.keywordPatternRe.lastIndex = 0;
            let t = E.keywordPatternRe.exec(D),
              n = ``;
            for (; t;) {
              n += D.substring(e, t.index);
              let r = w.case_insensitive ? t[0].toLowerCase() : t[0],
                i = u(E, r);
              if (i) {
                let [e, a] = i;
                if (
                  (ae.addText(n),
                  (n = ``),
                  (c[r] = (c[r] || 0) + 1),
                  c[r] <= Ve && (se += a),
                  e.startsWith(`_`))
                )
                  n += t[0];
                else {
                  let n = w.classNameAliases[e] || e;
                  m(t[0], n);
                }
              } else n += t[0];
              ((e = E.keywordPatternRe.lastIndex),
                (t = E.keywordPatternRe.exec(D)));
            }
            ((n += D.substring(e)), ae.addText(n));
          }
          function f() {
            if (D === ``) return;
            let e = null;
            if (typeof E.subLanguage == `string`) {
              if (!t[E.subLanguage]) {
                ae.addText(D);
                return;
              }
              ((e = v(E.subLanguage, D, !0, ie[E.subLanguage])),
                (ie[E.subLanguage] = e._top));
            } else e = S(D, E.subLanguage.length ? E.subLanguage : null);
            (E.relevance > 0 && (se += e.relevance),
              ae.__addSublanguage(e._emitter, e.language));
          }
          function p() {
            (E.subLanguage == null ? d() : f(), (D = ``));
          }
          function m(e, t) {
            e !== `` && (ae.startScope(t), ae.addText(e), ae.endScope());
          }
          function h(e, t) {
            let n = 1,
              r = t.length - 1;
            for (; n <= r;) {
              if (!e._emit[n]) {
                n++;
                continue;
              }
              let r = w.classNameAliases[e[n]] || e[n],
                i = t[n];
              (r ? m(i, r) : ((D = i), d(), (D = ``)), n++);
            }
          }
          function g(e, t) {
            return (
              e.scope &&
                typeof e.scope == `string` &&
                ae.openNode(w.classNameAliases[e.scope] || e.scope),
              e.beginScope &&
                (e.beginScope._wrap
                  ? (m(
                      D,
                      w.classNameAliases[e.beginScope._wrap] ||
                        e.beginScope._wrap,
                    ),
                    (D = ``))
                  : e.beginScope._multi && (h(e.beginScope, t), (D = ``))),
              (E = Object.create(e, { parent: { value: E } })),
              E
            );
          }
          function _(e, t, n) {
            let i = x(e.endRe, n);
            if (i) {
              if (e[`on:end`]) {
                let n = new r(e);
                (e[`on:end`](t, n), n.isMatchIgnored && (i = !1));
              }
              if (i) {
                for (; e.endsParent && e.parent;) e = e.parent;
                return e;
              }
            }
            if (e.endsWithParent) return _(e.parent, t, n);
          }
          function y(e) {
            return E.matcher.regexIndex === 0
              ? ((D += e[0]), 1)
              : ((ue = !0), 0);
          }
          function b(e) {
            let t = e[0],
              n = e.rule,
              i = new r(n),
              a = [n.__beforeBegin, n[`on:begin`]];
            for (let n of a) if (n && (n(e, i), i.isMatchIgnored)) return y(t);
            return (
              n.skip
                ? (D += t)
                : (n.excludeBegin && (D += t),
                  p(),
                  !n.returnBegin && !n.excludeBegin && (D = t)),
              g(n, e),
              n.returnBegin ? 0 : t.length
            );
          }
          function ee(e) {
            let t = e[0],
              r = n.substring(e.index),
              i = _(E, e, r);
            if (!i) return Be;
            let a = E;
            E.endScope && E.endScope._wrap
              ? (p(), m(t, E.endScope._wrap))
              : E.endScope && E.endScope._multi
                ? (p(), h(E.endScope, e))
                : a.skip
                  ? (D += t)
                  : (a.returnEnd || a.excludeEnd || (D += t),
                    p(),
                    a.excludeEnd && (D = t));
            do
              (E.scope && ae.closeNode(),
                !E.skip && !E.subLanguage && (se += E.relevance),
                (E = E.parent));
            while (E !== i.parent);
            return (i.starts && g(i.starts, e), a.returnEnd ? 0 : t.length);
          }
          function te() {
            let e = [];
            for (let t = E; t !== w; t = t.parent)
              t.scope && e.unshift(t.scope);
            e.forEach((e) => ae.openNode(e));
          }
          let ne = {};
          function C(t, r) {
            let a = r && r[0];
            if (((D += t), a == null)) return (p(), 0);
            if (
              ne.type === `begin` &&
              r.type === `end` &&
              ne.index === r.index &&
              a === ``
            ) {
              if (((D += n.slice(r.index, r.index + 1)), !o)) {
                let t = Error(`0 width match regex (${e})`);
                throw ((t.languageName = e), (t.badRule = ne.rule), t);
              }
              return 1;
            }
            if (((ne = r), r.type === `begin`)) return b(r);
            if (r.type === `illegal` && !i) {
              let e = Error(
                `Illegal lexeme "` +
                  a +
                  `" for mode "` +
                  (E.scope || `<unnamed>`) +
                  `"`,
              );
              throw ((e.mode = E), e);
            }
            if (r.type === `end`) {
              let e = ee(r);
              if (e !== Be) return e;
            }
            if (r.type === `illegal` && a === ``)
              return (
                r.index === n.length ||
                  (D += `
`),
                1
              );
            if (le > 1e5 && le > r.index * 3)
              throw Error(
                `potential infinite loop, way more iterations than matches`,
              );
            return ((D += a), a.length);
          }
          let w = oe(e);
          if (!w)
            throw (
              O(s.replace(`{}`, e)),
              Error(`Unknown language: "` + e + `"`)
            );
          let re = Pe(w),
            T = ``,
            E = a || re,
            ie = {},
            ae = new l.__emitter(l);
          te();
          let D = ``,
            se = 0,
            ce = 0,
            le = 0,
            ue = !1;
          try {
            if (w.__emitTokens) w.__emitTokens(n, ae);
            else {
              for (E.matcher.considerAll(); ;) {
                (le++,
                  ue ? (ue = !1) : E.matcher.considerAll(),
                  (E.matcher.lastIndex = ce));
                let e = E.matcher.exec(n);
                if (!e) break;
                let t = C(n.substring(ce, e.index), e);
                ce = e.index + t;
              }
              C(n.substring(ce));
            }
            return (
              ae.finalize(),
              (T = ae.toHTML()),
              {
                language: e,
                value: T,
                relevance: se,
                illegal: !1,
                _emitter: ae,
                _top: E,
              }
            );
          } catch (t) {
            if (t.message && t.message.includes(`Illegal`))
              return {
                language: e,
                value: k(n),
                illegal: !0,
                relevance: 0,
                _illegalBy: {
                  message: t.message,
                  index: ce,
                  context: n.slice(ce - 100, ce + 100),
                  mode: t.mode,
                  resultSoFar: T,
                },
                _emitter: ae,
              };
            if (o)
              return {
                language: e,
                value: k(n),
                illegal: !1,
                relevance: 0,
                errorRaised: t,
                _emitter: ae,
                _top: E,
              };
            throw t;
          }
        }
        function b(e) {
          let t = {
            value: k(e),
            illegal: !1,
            relevance: 0,
            _top: c,
            _emitter: new l.__emitter(l),
          };
          return (t._emitter.addText(e), t);
        }
        function S(e, n) {
          n = n || l.languages || Object.keys(t);
          let r = b(e),
            i = n
              .filter(oe)
              .filter(se)
              .map((t) => v(t, e, !1));
          i.unshift(r);
          let [a, o] = i.sort((e, t) => {
              if (e.relevance !== t.relevance) return t.relevance - e.relevance;
              if (e.language && t.language) {
                if (oe(e.language).supersetOf === t.language) return 1;
                if (oe(t.language).supersetOf === e.language) return -1;
              }
              return 0;
            }),
            s = a;
          return ((s.secondBest = o), s);
        }
        function ee(e, t, n) {
          let r = (t && i[t]) || n;
          (e.classList.add(`hljs`), e.classList.add(`language-${r}`));
        }
        function te(e) {
          let t = null,
            n = d(e);
          if (u(n)) return;
          if (
            (de(`before:highlightElement`, { el: e, language: n }),
            e.dataset.highlighted)
          ) {
            console.log(
              "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
              e,
            );
            return;
          }
          if (
            e.children.length > 0 &&
            (l.ignoreUnescapedHTML ||
              (console.warn(
                `One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`,
              ),
              console.warn(
                `https://github.com/highlightjs/highlight.js/wiki/security`,
              ),
              console.warn(`The element with unescaped HTML:`),
              console.warn(e)),
            l.throwUnescapedHTML)
          )
            throw new Re(
              `One of your code blocks includes unescaped HTML.`,
              e.innerHTML,
            );
          t = e;
          let r = t.textContent,
            i = n ? p(r, { language: n, ignoreIllegals: !0 }) : S(r);
          ((e.innerHTML = i.value),
            (e.dataset.highlighted = `yes`),
            ee(e, n, i.language),
            (e.result = {
              language: i.language,
              re: i.relevance,
              relevance: i.relevance,
            }),
            i.secondBest &&
              (e.secondBest = {
                language: i.secondBest.language,
                relevance: i.secondBest.relevance,
              }),
            de(`after:highlightElement`, { el: e, result: i, text: r }));
        }
        function ne(e) {
          l = ze(l, e);
        }
        let C = () => {
          (T(),
            De(
              `10.6.0`,
              `initHighlighting() deprecated.  Use highlightAll() now.`,
            ));
        };
        function w() {
          (T(),
            De(
              `10.6.0`,
              `initHighlightingOnLoad() deprecated.  Use highlightAll() now.`,
            ));
        }
        let re = !1;
        function T() {
          function e() {
            T();
          }
          if (document.readyState === `loading`) {
            (re || window.addEventListener(`DOMContentLoaded`, e, !1),
              (re = !0));
            return;
          }
          document.querySelectorAll(l.cssSelector).forEach(te);
        }
        function E(n, r) {
          let i = null;
          try {
            i = r(e);
          } catch (e) {
            if (
              (O(
                `Language definition for '{}' could not be registered.`.replace(
                  `{}`,
                  n,
                ),
              ),
              o)
            )
              O(e);
            else throw e;
            i = c;
          }
          (i.name || (i.name = n),
            (t[n] = i),
            (i.rawDefinition = r.bind(null, e)),
            i.aliases && D(i.aliases, { languageName: n }));
        }
        function ie(e) {
          delete t[e];
          for (let t of Object.keys(i)) i[t] === e && delete i[t];
        }
        function ae() {
          return Object.keys(t);
        }
        function oe(e) {
          return ((e = (e || ``).toLowerCase()), t[e] || t[i[e]]);
        }
        function D(e, { languageName: t }) {
          (typeof e == `string` && (e = [e]),
            e.forEach((e) => {
              i[e.toLowerCase()] = t;
            }));
        }
        function se(e) {
          let t = oe(e);
          return t && !t.disableAutodetect;
        }
        function ce(e) {
          (e[`before:highlightBlock`] &&
            !e[`before:highlightElement`] &&
            (e[`before:highlightElement`] = (t) => {
              e[`before:highlightBlock`](Object.assign({ block: t.el }, t));
            }),
            e[`after:highlightBlock`] &&
              !e[`after:highlightElement`] &&
              (e[`after:highlightElement`] = (t) => {
                e[`after:highlightBlock`](Object.assign({ block: t.el }, t));
              }));
        }
        function le(e) {
          (ce(e), a.push(e));
        }
        function ue(e) {
          let t = a.indexOf(e);
          t !== -1 && a.splice(t, 1);
        }
        function de(e, t) {
          let n = e;
          a.forEach(function (e) {
            e[n] && e[n](t);
          });
        }
        function pe(e) {
          return (
            De(`10.7.0`, `highlightBlock will be removed entirely in v12.0`),
            De(`10.7.0`, `Please use highlightElement now.`),
            te(e)
          );
        }
        (Object.assign(e, {
          highlight: p,
          highlightAuto: S,
          highlightAll: T,
          highlightElement: te,
          highlightBlock: pe,
          configure: ne,
          initHighlighting: C,
          initHighlightingOnLoad: w,
          registerLanguage: E,
          unregisterLanguage: ie,
          listLanguages: ae,
          getLanguage: oe,
          registerAliases: D,
          autoDetection: se,
          inherit: ze,
          addPlugin: le,
          removePlugin: ue,
        }),
          (e.debugMode = function () {
            o = !1;
          }),
          (e.safeMode = function () {
            o = !0;
          }),
          (e.versionString = Le),
          (e.regex = {
            concat: _,
            lookahead: m,
            either: y,
            optional: g,
            anyNumberOfTimes: h,
          }));
        for (let e in fe) typeof fe[e] == `object` && n(fe[e]);
        return (Object.assign(e, fe), e);
      },
      j = A({});
    ((j.newInstance = () => A({})),
      (t.exports = j),
      (j.HighlightJS = j),
      (j.default = j));
  }),
  Pp,
  Fp,
  Ip = o(() => {
    ((Pp = l(Np())), (Fp = Pp.default));
  });
function Lp(e) {
  let t = e.regex,
    n = {},
    r = {
      begin: /\$\{/,
      end: /\}/,
      contains: [`self`, { begin: /:-/, contains: [n] }],
    };
  Object.assign(n, {
    className: `variable`,
    variants: [
      { begin: t.concat(/\$[\w\d#@][\w\d_]*/, `(?![\\w\\d])(?![$])`) },
      r,
    ],
  });
  let i = {
      className: `subst`,
      begin: /\$\(/,
      end: /\)/,
      contains: [e.BACKSLASH_ESCAPE],
    },
    a = e.inherit(e.COMMENT(), {
      match: [/(^|\s)/, /#.*$/],
      scope: { 2: `comment` },
    }),
    o = {
      begin: /<<-?\s*(?=\w+)/,
      starts: {
        contains: [
          e.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            className: `string`,
          }),
        ],
      },
    },
    s = {
      className: `string`,
      begin: /"/,
      end: /"/,
      contains: [e.BACKSLASH_ESCAPE, n, i],
    };
  i.contains.push(s);
  let c = { match: /\\"/ },
    l = { className: `string`, begin: /'/, end: /'/ },
    u = { match: /\\'/ },
    d = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [
        { begin: /\d+#[0-9a-f]+/, className: `number` },
        e.NUMBER_MODE,
        n,
      ],
    },
    f = e.SHEBANG({
      binary: `(${[`fish`, `bash`, `zsh`, `sh`, `csh`, `ksh`, `tcsh`, `dash`, `scsh`].join(`|`)})`,
      relevance: 10,
    }),
    p = {
      className: `function`,
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0,
    },
    m = [
      `if`,
      `then`,
      `else`,
      `elif`,
      `fi`,
      `time`,
      `for`,
      `while`,
      `until`,
      `in`,
      `do`,
      `done`,
      `case`,
      `esac`,
      `coproc`,
      `function`,
      `select`,
    ],
    h = [`true`, `false`],
    g = { match: /(\/[a-z._-]+)+/ },
    _ = [
      `break`,
      `cd`,
      `continue`,
      `eval`,
      `exec`,
      `exit`,
      `export`,
      `getopts`,
      `hash`,
      `pwd`,
      `readonly`,
      `return`,
      `shift`,
      `test`,
      `times`,
      `trap`,
      `umask`,
      `unset`,
    ],
    v = [
      `alias`,
      `bind`,
      `builtin`,
      `caller`,
      `command`,
      `declare`,
      `echo`,
      `enable`,
      `help`,
      `let`,
      `local`,
      `logout`,
      `mapfile`,
      `printf`,
      `read`,
      `readarray`,
      `source`,
      `sudo`,
      `type`,
      `typeset`,
      `ulimit`,
      `unalias`,
    ],
    y =
      `autoload.bg.bindkey.bye.cap.chdir.clone.comparguments.compcall.compctl.compdescribe.compfiles.compgroups.compquote.comptags.comptry.compvalues.dirs.disable.disown.echotc.echoti.emulate.fc.fg.float.functions.getcap.getln.history.integer.jobs.kill.limit.log.noglob.popd.print.pushd.pushln.rehash.sched.setcap.setopt.stat.suspend.ttyctl.unfunction.unhash.unlimit.unsetopt.vared.wait.whence.where.which.zcompile.zformat.zftp.zle.zmodload.zparseopts.zprof.zpty.zregexparse.zsocket.zstyle.ztcp`.split(
        `.`,
      ),
    b =
      `chcon.chgrp.chown.chmod.cp.dd.df.dir.dircolors.ln.ls.mkdir.mkfifo.mknod.mktemp.mv.realpath.rm.rmdir.shred.sync.touch.truncate.vdir.b2sum.base32.base64.cat.cksum.comm.csplit.cut.expand.fmt.fold.head.join.md5sum.nl.numfmt.od.paste.ptx.pr.sha1sum.sha224sum.sha256sum.sha384sum.sha512sum.shuf.sort.split.sum.tac.tail.tr.tsort.unexpand.uniq.wc.arch.basename.chroot.date.dirname.du.echo.env.expr.factor.groups.hostid.id.link.logname.nice.nohup.nproc.pathchk.pinky.printenv.printf.pwd.readlink.runcon.seq.sleep.stat.stdbuf.stty.tee.test.timeout.tty.uname.unlink.uptime.users.who.whoami.yes`.split(
        `.`,
      );
  return {
    name: `Bash`,
    aliases: [`sh`, `zsh`],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: m,
      literal: h,
      built_in: [..._, ...v, `set`, `shopt`, ...y, ...b],
    },
    contains: [f, e.SHEBANG(), p, d, a, o, g, s, c, l, u, n],
  };
}
var Rp = o(() => {});
function zp(e) {
  let t = e.regex,
    n = Bp(e),
    r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
    i = /@-?\w[\w]*(-\w+)*/,
    a = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
  return {
    name: `CSS`,
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: `from to` },
    classNameAliases: { keyframePosition: `selector-tag` },
    contains: [
      n.BLOCK_COMMENT,
      r,
      n.CSS_NUMBER_MODE,
      { className: `selector-id`, begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
      {
        className: `selector-class`,
        begin: `\\.[a-zA-Z-][a-zA-Z0-9_-]*`,
        relevance: 0,
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: `selector-pseudo`,
        variants: [
          { begin: `:(` + Gp.join(`|`) + `)` },
          { begin: `:(:)?(` + Kp.join(`|`) + `)` },
        ],
      },
      n.CSS_VARIABLE,
      { className: `attribute`, begin: `\\b(` + qp.join(`|`) + `)\\b` },
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          n.UNICODE_RANGE,
          ...a,
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: { built_in: `url data-uri` },
            contains: [
              ...a,
              {
                className: `string`,
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0,
              },
            ],
          },
          n.FUNCTION_DISPATCH,
        ],
      },
      {
        begin: t.lookahead(/@/),
        end: `[{;]`,
        relevance: 0,
        illegal: /:/,
        contains: [
          { className: `keyword`, begin: i },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: `and or not only`,
              attribute: Wp.join(` `),
            },
            contains: [
              { begin: /[a-z-]+(?=:)/, className: `attribute` },
              ...a,
              n.CSS_NUMBER_MODE,
            ],
          },
        ],
      },
      { className: `selector-tag`, begin: `\\b(` + Up.join(`|`) + `)\\b` },
    ],
  };
}
var Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp = o(() => {
    ((Bp = (e) => ({
      IMPORTANT: { scope: `meta`, begin: `!important` },
      BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: `number`,
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
      },
      UNICODE_RANGE: {
        scope: `number`,
        begin:
          /\b[Uu]\+[0-9A-Fa-f][0-9A-Fa-f?]{0,5}(-[0-9A-Fa-f][0-9A-Fa-f]{0,5})?/,
      },
      FUNCTION_DISPATCH: { className: `built_in`, begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: `selector-attr`,
        begin: /\[/,
        end: /\]/,
        illegal: `$`,
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: `number`,
        begin:
          e.NUMBER_RE +
          `(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?`,
        relevance: 0,
      },
      CSS_VARIABLE: { className: `attr`, begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
    })),
      (Vp =
        `a.abbr.address.article.aside.audio.b.blockquote.body.button.canvas.caption.cite.code.dd.del.details.dfn.div.dl.dt.em.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.html.i.iframe.img.input.ins.kbd.label.legend.li.main.mark.menu.nav.object.ol.optgroup.option.p.picture.q.quote.samp.section.select.source.span.strong.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.ul.var.video`.split(
          `.`,
        )),
      (Hp =
        `defs.g.marker.mask.pattern.svg.switch.symbol.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feFlood.feGaussianBlur.feImage.feMerge.feMorphology.feOffset.feSpecularLighting.feTile.feTurbulence.linearGradient.radialGradient.stop.circle.ellipse.image.line.path.polygon.polyline.rect.text.use.textPath.tspan.foreignObject.clipPath`.split(
          `.`,
        )),
      (Up = [...Vp, ...Hp]),
      (Wp =
        `any-hover.any-pointer.aspect-ratio.color.color-gamut.color-index.device-aspect-ratio.device-height.device-width.display-mode.forced-colors.grid.height.hover.inverted-colors.monochrome.orientation.overflow-block.overflow-inline.pointer.prefers-color-scheme.prefers-contrast.prefers-reduced-motion.prefers-reduced-transparency.resolution.scan.scripting.update.width.min-width.max-width.min-height.max-height`
          .split(`.`)
          .sort()
          .reverse()),
      (Gp =
        `active.any-link.blank.checked.current.default.defined.dir.disabled.drop.empty.enabled.first.first-child.first-of-type.fullscreen.future.focus.focus-visible.focus-within.has.host.host-context.hover.indeterminate.in-range.invalid.is.lang.last-child.last-of-type.left.link.local-link.not.nth-child.nth-col.nth-last-child.nth-last-col.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.past.placeholder-shown.read-only.read-write.required.right.root.scope.target.target-within.user-invalid.valid.visited.where`
          .split(`.`)
          .sort()
          .reverse()),
      (Kp = [
        `after`,
        `backdrop`,
        `before`,
        `cue`,
        `cue-region`,
        `first-letter`,
        `first-line`,
        `grammar-error`,
        `marker`,
        `part`,
        `placeholder`,
        `selection`,
        `slotted`,
        `spelling-error`,
      ]
        .sort()
        .reverse()),
      (qp =
        `accent-color.align-content.align-items.align-self.alignment-baseline.all.anchor-name.animation.animation-composition.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-range.animation-range-end.animation-range-start.animation-timeline.animation-timing-function.appearance.aspect-ratio.backdrop-filter.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.baseline-shift.block-size.border.border-block.border-block-color.border-block-end.border-block-end-color.border-block-end-style.border-block-end-width.border-block-start.border-block-start-color.border-block-start-style.border-block-start-width.border-block-style.border-block-width.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-end-end-radius.border-end-start-radius.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-inline.border-inline-color.border-inline-end.border-inline-end-color.border-inline-end-style.border-inline-end-width.border-inline-start.border-inline-start-color.border-inline-start-style.border-inline-start-width.border-inline-style.border-inline-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-start-end-radius.border-start-start-radius.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-align.box-decoration-break.box-direction.box-flex.box-flex-group.box-lines.box-ordinal-group.box-orient.box-pack.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.color-scheme.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.contain.contain-intrinsic-block-size.contain-intrinsic-height.contain-intrinsic-inline-size.contain-intrinsic-size.contain-intrinsic-width.container.container-name.container-type.content.content-visibility.corner-bottom-left-shape.corner-bottom-right-shape.corner-shape.corner-top-left-shape.corner-top-right-shape.counter-increment.counter-reset.counter-set.cue.cue-after.cue-before.cursor.cx.cy.direction.display.dominant-baseline.empty-cells.enable-background.field-sizing.fill.fill-opacity.fill-rule.filter.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.flood-color.flood-opacity.flow.font.font-display.font-family.font-feature-settings.font-kerning.font-language-override.font-optical-sizing.font-palette.font-size.font-size-adjust.font-smooth.font-smoothing.font-stretch.font-style.font-synthesis.font-synthesis-position.font-synthesis-small-caps.font-synthesis-style.font-synthesis-weight.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-emoji.font-variant-ligatures.font-variant-numeric.font-variant-position.font-variation-settings.font-weight.forced-color-adjust.gap.glyph-orientation-horizontal.glyph-orientation-vertical.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphenate-character.hyphenate-limit-chars.hyphens.icon.image-orientation.image-rendering.image-resolution.ime-mode.initial-letter.initial-letter-align.inline-size.inset.inset-area.inset-block.inset-block-end.inset-block-start.inset-inline.inset-inline-end.inset-inline-start.isolation.justify-content.justify-items.justify-self.kerning.left.letter-spacing.lighting-color.line-break.line-height.line-height-step.list-style.list-style-image.list-style-position.list-style-type.margin.margin-block.margin-block-end.margin-block-start.margin-bottom.margin-inline.margin-inline-end.margin-inline-start.margin-left.margin-right.margin-top.margin-trim.marker.marker-end.marker-mid.marker-start.marks.mask.mask-border.mask-border-mode.mask-border-outset.mask-border-repeat.mask-border-slice.mask-border-source.mask-border-width.mask-clip.mask-composite.mask-image.mask-mode.mask-origin.mask-position.mask-repeat.mask-size.mask-type.masonry-auto-flow.math-depth.math-shift.math-style.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.nav-down.nav-index.nav-left.nav-right.nav-up.none.normal.object-fit.object-position.offset.offset-anchor.offset-distance.offset-path.offset-position.offset-rotate.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-anchor.overflow-block.overflow-clip-margin.overflow-inline.overflow-wrap.overflow-x.overflow-y.overlay.overscroll-behavior.overscroll-behavior-block.overscroll-behavior-inline.overscroll-behavior-x.overscroll-behavior-y.padding.padding-block.padding-block-end.padding-block-start.padding-bottom.padding-inline.padding-inline-end.padding-inline-start.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.paint-order.pause.pause-after.pause-before.perspective.perspective-origin.place-content.place-items.place-self.pointer-events.position.position-anchor.position-visibility.print-color-adjust.quotes.r.resize.rest.rest-after.rest-before.right.rotate.row-gap.ruby-align.ruby-position.scale.scroll-behavior.scroll-margin.scroll-margin-block.scroll-margin-block-end.scroll-margin-block-start.scroll-margin-bottom.scroll-margin-inline.scroll-margin-inline-end.scroll-margin-inline-start.scroll-margin-left.scroll-margin-right.scroll-margin-top.scroll-padding.scroll-padding-block.scroll-padding-block-end.scroll-padding-block-start.scroll-padding-bottom.scroll-padding-inline.scroll-padding-inline-end.scroll-padding-inline-start.scroll-padding-left.scroll-padding-right.scroll-padding-top.scroll-snap-align.scroll-snap-stop.scroll-snap-type.scroll-timeline.scroll-timeline-axis.scroll-timeline-name.scrollbar-color.scrollbar-gutter.scrollbar-width.shape-image-threshold.shape-margin.shape-outside.shape-rendering.speak.speak-as.src.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.table-layout.text-align.text-align-all.text-align-last.text-anchor.text-combine-upright.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-skip-ink.text-decoration-style.text-decoration-thickness.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-indent.text-justify.text-orientation.text-overflow.text-rendering.text-shadow.text-size-adjust.text-transform.text-underline-offset.text-underline-position.text-wrap.text-wrap-mode.text-wrap-style.timeline-scope.top.touch-action.transform.transform-box.transform-origin.transform-style.transition.transition-behavior.transition-delay.transition-duration.transition-property.transition-timing-function.translate.unicode-bidi.unicode-range.user-modify.user-select.vector-effect.vertical-align.view-timeline.view-timeline-axis.view-timeline-inset.view-timeline-name.view-transition-name.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.white-space.white-space-collapse.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.x.y.z-index.zoom`
          .split(`.`)
          .sort()
          .reverse()));
  });
function Yp(e) {
  let t = e.regex;
  return {
    name: `Diff`,
    aliases: [`patch`],
    contains: [
      {
        className: `meta`,
        relevance: 10,
        match: t.either(
          /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
          /^@@ +-\d+ +\+\d+,\d+ +@@/,
          /^@@ +-\d+,\d+ +\+\d+ +@@/,
          /^@@ +-\d+ +\+\d+ +@@/,
          /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
          /^--- +\d+,\d+ +----$/,
        ),
      },
      {
        className: `comment`,
        variants: [
          {
            begin: t.either(
              /Index: /,
              /^index/,
              /={3,}/,
              /^-{3}/,
              /^\*{3} /,
              /^\+{3}/,
              /^diff --git/,
            ),
            end: /$/,
          },
          { match: /^\*{15}$/ },
        ],
      },
      { className: `addition`, begin: /^\+/, end: /$/ },
      { className: `deletion`, begin: /^-/, end: /$/ },
      { className: `addition`, begin: /^!/, end: /$/ },
    ],
  };
}
var Xp = o(() => {});
function Zp(e) {
  let t = e.regex,
    n = (e, { after: t }) => {
      let n = `</` + e[0].slice(1);
      return e.input.indexOf(n, t) !== -1;
    },
    r = Qp,
    i = { begin: `<>`, end: `</>` },
    a = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    o = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (e, t) => {
        let r = e[0].length + e.index,
          i = e.input[r];
        if (i === `<` || i === `,`) {
          t.ignoreMatch();
          return;
        }
        i === `>` && (n(e, { after: r }) || t.ignoreMatch());
        let a,
          o = e.input.substring(r);
        if ((a = o.match(/^\s*=/))) {
          t.ignoreMatch();
          return;
        }
        if ((a = o.match(/^\s+extends\s+/)) && a.index === 0) {
          t.ignoreMatch();
          return;
        }
      },
    },
    s = {
      $pattern: Qp,
      keyword: $p,
      literal: em,
      built_in: am,
      "variable.language": im,
    },
    c = `[0-9](_?[0-9])*`,
    l = `\\.(${c})`,
    u = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,
    d = {
      className: `number`,
      variants: [
        { begin: `(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b` },
        { begin: `\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b` },
        { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
        { begin: `\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b` },
        { begin: `\\b0[bB][0-1](_?[0-1])*n?\\b` },
        { begin: `\\b0[oO][0-7](_?[0-7])*n?\\b` },
        { begin: `\\b0[0-7]+n?\\b` },
      ],
      relevance: 0,
    },
    f = {
      className: `subst`,
      begin: `\\$\\{`,
      end: `\\}`,
      keywords: s,
      contains: [],
    },
    p = {
      begin: ".?html`",
      end: ``,
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: `xml`,
      },
    },
    m = {
      begin: ".?css`",
      end: ``,
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: `css`,
      },
    },
    h = {
      begin: ".?gql`",
      end: ``,
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: `graphql`,
      },
    },
    g = {
      className: `string`,
      begin: "`",
      end: "`",
      contains: [e.BACKSLASH_ESCAPE, f],
    },
    _ = {
      className: `comment`,
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, `\\*/`, {
          relevance: 0,
          contains: [
            {
              begin: `(?=@[A-Za-z]+)`,
              relevance: 0,
              contains: [
                { className: `doctag`, begin: `@[A-Za-z]+` },
                {
                  className: `type`,
                  begin: `\\{`,
                  end: `\\}`,
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: `variable`,
                  begin: r + `(?=\\s*(-)|$)`,
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    v = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      m,
      h,
      g,
      { match: /\$\d+/ },
      d,
    ];
  f.contains = v.concat({
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [`self`].concat(v),
  });
  let y = [].concat(_, f.contains),
    b = y.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: s,
        contains: [`self`].concat(y),
      },
    ]),
    x = {
      className: `params`,
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: s,
      contains: b,
    },
    S = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            r,
            /\s+/,
            /extends/,
            /\s+/,
            t.concat(r, `(`, t.concat(/\./, r), `)*`),
          ],
          scope: {
            1: `keyword`,
            3: `title.class`,
            5: `keyword`,
            7: `title.class.inherited`,
          },
        },
        {
          match: [/class/, /\s+/, r],
          scope: { 1: `keyword`, 3: `title.class` },
        },
      ],
    },
    ee = {
      relevance: 0,
      match: t.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: `title.class`,
      keywords: { _: [...tm, ...nm] },
    },
    te = {
      label: `use_strict`,
      className: `meta`,
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    ne = {
      variants: [
        { match: [/function/, /\s+/, r, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: `keyword`, 3: `title.function` },
      label: `func.def`,
      contains: [x],
      illegal: /%/,
    },
    C = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: `variable.constant`,
    };
  function w(e) {
    return t.concat(`(?!`, e.join(`|`), `)`);
  }
  let re = {
      match: t.concat(
        /\b/,
        w([...rm, `super`, `import`, `await`].map((e) => `${e}\\s*\\(`)),
        r,
        t.lookahead(/\s*\(/),
      ),
      className: `title.function`,
      relevance: 0,
    },
    T = {
      begin: t.concat(/\./, t.lookahead(t.concat(r, /(?![0-9A-Za-z$_(])/))),
      end: r,
      excludeBegin: !0,
      keywords: `prototype`,
      className: `property`,
      relevance: 0,
    },
    E = {
      match: [/get|set/, /\s+/, r, /(?=\()/],
      className: { 1: `keyword`, 3: `title.function` },
      contains: [{ begin: /\(\)/ }, x],
    },
    ie =
      `(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|` +
      e.UNDERSCORE_IDENT_RE +
      `)\\s*=>`,
    ae = {
      match: [
        /const|var|let/,
        /\s+/,
        r,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        t.lookahead(ie),
      ],
      keywords: `async`,
      className: { 1: `keyword`, 3: `title.function` },
      contains: [x],
    };
  return {
    name: `JavaScript`,
    aliases: [`js`, `jsx`, `mjs`, `cjs`],
    keywords: s,
    exports: { PARAMS_CONTAINS: b, CLASS_REFERENCE: ee },
    illegal: /#(?![$_A-Za-z])/,
    contains: [
      e.SHEBANG({ label: `shebang`, binary: `node`, relevance: 5 }),
      te,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      m,
      h,
      g,
      _,
      { match: /\$\d+/ },
      d,
      ee,
      { scope: `attr`, match: r + t.lookahead(`:`), relevance: 0 },
      ae,
      {
        begin: `(` + e.RE_STARTERS_RE + `|\\b(case|return|throw)\\b)\\s*`,
        keywords: `return throw case`,
        relevance: 0,
        contains: [
          _,
          e.REGEXP_MODE,
          {
            className: `function`,
            begin: ie,
            returnBegin: !0,
            end: `\\s*=>`,
            contains: [
              {
                className: `params`,
                variants: [
                  { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: b,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: i.begin, end: i.end },
              { match: a },
              { begin: o.begin, "on:begin": o.isTrulyOpeningTag, end: o.end },
            ],
            subLanguage: `xml`,
            contains: [
              { begin: o.begin, end: o.end, skip: !0, contains: [`self`] },
            ],
          },
        ],
      },
      ne,
      { beginKeywords: `while if switch catch for` },
      {
        begin:
          `\\b(?!function)` +
          e.UNDERSCORE_IDENT_RE +
          `\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,
        returnBegin: !0,
        label: `func.def`,
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: r, className: `title.function` }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      T,
      { match: `\\$` + r, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: `title.function` },
        contains: [x],
      },
      re,
      C,
      S,
      E,
      { match: /\$[(.]/ },
    ],
  };
}
var Qp,
  $p,
  em,
  tm,
  nm,
  rm,
  im,
  am,
  om = o(() => {
    ((Qp = `[A-Za-z$_][0-9A-Za-z$_]*`),
      ($p =
        `as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(
          `.`,
        )),
      (em = [`true`, `false`, `null`, `undefined`, `NaN`, `Infinity`]),
      (tm =
        `Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(
          `.`,
        )),
      (nm = [
        `Error`,
        `EvalError`,
        `InternalError`,
        `RangeError`,
        `ReferenceError`,
        `SyntaxError`,
        `TypeError`,
        `URIError`,
      ]),
      (rm = [
        `setInterval`,
        `setTimeout`,
        `clearInterval`,
        `clearTimeout`,
        `require`,
        `exports`,
        `eval`,
        `isFinite`,
        `isNaN`,
        `parseFloat`,
        `parseInt`,
        `decodeURI`,
        `decodeURIComponent`,
        `encodeURI`,
        `encodeURIComponent`,
        `escape`,
        `unescape`,
      ]),
      (im = [
        `arguments`,
        `this`,
        `super`,
        `console`,
        `window`,
        `document`,
        `localStorage`,
        `sessionStorage`,
        `module`,
        `self`,
        `global`,
      ]),
      (am = [].concat(rm, tm, nm)));
  });
function sm(e) {
  let t = {
      className: `attr`,
      begin: /(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,
      relevance: 1.01,
    },
    n = { match: /[{}[\],:]/, className: `punctuation`, relevance: 0 },
    r = [`true`, `false`, `null`],
    i = { scope: `literal`, beginKeywords: r.join(` `) };
  return {
    name: `JSON`,
    aliases: [`jsonc`, `json5`],
    keywords: { literal: r },
    contains: [
      t,
      n,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      i,
      cm,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
    ],
    illegal: `\\S`,
  };
}
var cm,
  lm = o(() => {
    cm = {
      scope: `number`,
      match: `([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity`,
      relevance: 0,
    };
  });
function um(e) {
  let t = e.regex,
    n = { begin: /<\/?[A-Za-z_]/, end: `>`, subLanguage: `xml`, relevance: 0 },
    r = { match: /^ {0,3}([-*_])[ \t]*(?:\1[ \t]*){2,}$/ },
    i = {
      className: `code`,
      variants: [
        { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
        { begin: `(~{3,})[^~](.|\\n)*?\\1~*[ ]*` },
        { begin: "```", end: "```+[ ]*$" },
        { begin: `~~~`, end: `~~~+[ ]*$` },
        { begin: "`.+?`" },
        {
          begin: `(?=^( {4}|\\t))`,
          contains: [{ begin: `^( {4}|\\t)`, end: `(\\n)$` }],
          relevance: 0,
        },
      ],
    },
    a = {
      className: `bullet`,
      begin: `^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)`,
      end: `\\s+`,
      excludeEnd: !0,
    },
    o = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        {
          className: `symbol`,
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0,
        },
        { className: `link`, begin: /:\s*/, end: /$/, excludeBegin: !0 },
      ],
    },
    s = {
      variants: [
        { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
        {
          begin:
            /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2,
        },
        {
          begin: t.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
          relevance: 2,
        },
        { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
        { begin: /\[.*?\]\(.*?\)/, relevance: 0 },
      ],
      returnBegin: !0,
      contains: [
        { match: /\[(?=\])/ },
        {
          className: `string`,
          relevance: 0,
          begin: `\\[`,
          end: `\\]`,
          excludeBegin: !0,
          returnEnd: !0,
        },
        {
          className: `link`,
          relevance: 0,
          begin: `\\]\\(`,
          end: `\\)`,
          excludeBegin: !0,
          excludeEnd: !0,
        },
        {
          className: `symbol`,
          relevance: 0,
          begin: `\\]\\[`,
          end: `\\]`,
          excludeBegin: !0,
          excludeEnd: !0,
        },
      ],
    },
    c = {
      className: `strong`,
      contains: [],
      variants: [
        { begin: /_{2}(?!\s)/, end: /_{2}/ },
        { begin: /\*{2}(?!\s)/, end: /\*{2}/ },
      ],
    },
    l = {
      className: `emphasis`,
      contains: [],
      variants: [
        { begin: /\*(?![*\s])/, end: /\*/ },
        { begin: /_(?![_\s])/, end: /_/, relevance: 0 },
      ],
    },
    u = e.inherit(c, { contains: [] }),
    d = e.inherit(l, { contains: [] });
  (c.contains.push(d), l.contains.push(u));
  let f = [n, s];
  return (
    [c, l, u, d].forEach((e) => {
      e.contains = e.contains.concat(f);
    }),
    (f = f.concat(c, l)),
    {
      name: `Markdown`,
      aliases: [`md`, `mkdown`, `mkd`],
      contains: [
        {
          className: `section`,
          variants: [
            { begin: `^#{1,6}`, end: `$`, contains: f },
            {
              begin: `(?=^.+?\\n[=-]{2,}$)`,
              contains: [
                { begin: `^[=-]*$` },
                { begin: `^`, end: `\\n`, contains: f },
              ],
            },
          ],
        },
        n,
        a,
        r,
        c,
        l,
        { className: `quote`, begin: `^>\\s+`, contains: f, end: `$` },
        i,
        s,
        o,
        {
          scope: `literal`,
          match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/,
        },
      ],
    }
  );
}
var dm = o(() => {});
function fm(e) {
  let t = [
      `string`,
      `char`,
      `byte`,
      `int`,
      `long`,
      `bool`,
      `decimal`,
      `single`,
      `double`,
      `DateTime`,
      `xml`,
      `array`,
      `hashtable`,
      `void`,
    ],
    n = {
      $pattern: /-?[A-z\.\-]+\b/,
      keyword: `if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter`,
      built_in: `ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write`,
    },
    r = /\w[\w\d]*((-)[\w\d]+)*/,
    i = { begin: "`[\\s\\S]", relevance: 0 },
    a = {
      className: `variable`,
      variants: [
        { begin: /\$\B/ },
        { className: `keyword`, begin: /\$this/ },
        { begin: /\$[\w\d][\w\d_:]*/ },
      ],
    },
    o = { className: `literal`, begin: /\$(null|true|false)\b/ },
    s = {
      className: `string`,
      variants: [
        { begin: /"/, end: /"/ },
        { begin: /@"/, end: /^"@/ },
      ],
      contains: [
        i,
        a,
        { className: `variable`, begin: /\$[A-z]/, end: /[^A-z]/ },
      ],
    },
    c = {
      className: `string`,
      variants: [
        { begin: /'/, end: /'/ },
        { begin: /@'/, end: /^'@/ },
      ],
    },
    l = e.inherit(e.COMMENT(null, null), {
      variants: [
        { begin: /#/, end: /$/ },
        { begin: /<#/, end: /#>/ },
      ],
      contains: [
        {
          className: `doctag`,
          variants: [
            {
              begin:
                /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/,
            },
            {
              begin:
                /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/,
            },
          ],
        },
      ],
    }),
    u = {
      className: `built_in`,
      variants: [
        {
          begin: `(Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where)+(-)[\\w\\d]+`,
        },
      ],
    },
    d = {
      className: `class`,
      beginKeywords: `class enum`,
      end: /\s*[{]/,
      excludeEnd: !0,
      relevance: 0,
      contains: [e.TITLE_MODE],
    },
    f = {
      className: `function`,
      begin: /function\s+/,
      end: /\s*\{|$/,
      excludeEnd: !0,
      returnBegin: !0,
      relevance: 0,
      contains: [
        { begin: `function`, relevance: 0, className: `keyword` },
        { className: `title`, begin: r, relevance: 0 },
        {
          begin: /\(/,
          end: /\)/,
          className: `params`,
          relevance: 0,
          contains: [a],
        },
      ],
    },
    p = {
      begin: /using\s/,
      end: /$/,
      returnBegin: !0,
      contains: [
        s,
        c,
        {
          className: `keyword`,
          begin: /(using|assembly|command|module|namespace|type)/,
        },
      ],
    },
    m = {
      variants: [
        {
          className: `operator`,
          begin: `(-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor)\\b`,
        },
        { className: `literal`, begin: /(-){1,2}[\w\d-]+/, relevance: 0 },
      ],
    },
    h = { className: `selector-tag`, begin: /@\B/, relevance: 0 },
    g = {
      className: `function`,
      begin: /\[.*\]\s*[\w]+[ ]??\(/,
      end: /$/,
      returnBegin: !0,
      relevance: 0,
      contains: [
        {
          className: `keyword`,
          begin: `(${n.keyword.toString().replace(/\s/g, `|`)})\\b`,
          endsParent: !0,
          relevance: 0,
        },
        e.inherit(e.TITLE_MODE, { endsParent: !0 }),
      ],
    },
    _ = [g, l, i, e.NUMBER_MODE, s, c, u, a, o, h],
    v = {
      begin: /\[/,
      end: /\]/,
      excludeBegin: !0,
      excludeEnd: !0,
      relevance: 0,
      contains: [`self`].concat(
        _,
        { begin: `(` + t.join(`|`) + `)`, className: `built_in`, relevance: 0 },
        { className: `type`, begin: /[\.\w\d]+/, relevance: 0 },
      ),
    };
  return (
    g.contains.unshift(v),
    {
      name: `PowerShell`,
      aliases: [`pwsh`, `ps`, `ps1`],
      case_insensitive: !0,
      keywords: n,
      contains: _.concat(d, f, p, m, v),
    }
  );
}
var pm = o(() => {});
function mm(e) {
  let t = e.regex,
    n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
    r =
      `and.as.assert.async.await.break.case.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.in.is.lambda.lazy.match.nonlocal|10.not.or.pass.raise.return.try.while.with.yield`.split(
        `.`,
      ),
    i = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: r,
      built_in:
        `__import__.abs.aiter.all.anext.any.ascii.bin.bool.breakpoint.bytearray.bytes.callable.chr.classmethod.compile.complex.delattr.dict.dir.divmod.enumerate.eval.exec.filter.float.format.frozendict.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.print.property.range.repr.reversed.round.sentinel.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip`.split(
          `.`,
        ),
      literal: [
        `__debug__`,
        `Ellipsis`,
        `False`,
        `None`,
        `NotImplemented`,
        `True`,
      ],
      type: [
        `Any`,
        `Callable`,
        `Coroutine`,
        `Dict`,
        `List`,
        `Literal`,
        `Generic`,
        `Optional`,
        `Sequence`,
        `Set`,
        `Tuple`,
        `Type`,
        `Union`,
      ],
    },
    a = { className: `meta`, begin: /^(>>>|\.\.\.) / },
    o = {
      className: `subst`,
      begin: /\{/,
      end: /\}/,
      keywords: i,
      illegal: /#/,
    },
    s = { begin: /\{\{/, relevance: 0 },
    c = {
      className: `string`,
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [e.BACKSLASH_ESCAPE, a],
          relevance: 10,
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [e.BACKSLASH_ESCAPE, a],
          relevance: 10,
        },
        {
          begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])'''/,
          end: /'''/,
          contains: [e.BACKSLASH_ESCAPE, a, s, o],
        },
        {
          begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])"""/,
          end: /"""/,
          contains: [e.BACKSLASH_ESCAPE, a, s, o],
        },
        { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
        { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
        { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
        { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
        {
          begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])'/,
          end: /'/,
          contains: [e.BACKSLASH_ESCAPE, s, o],
        },
        {
          begin: /([fFtT][rR]|[rR][fFtT]|[fFtT])"/,
          end: /"/,
          contains: [e.BACKSLASH_ESCAPE, s, o],
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
      ],
    },
    l = `[0-9](_?[0-9])*`,
    u = `(\\b(${l}))?\\.(${l})|\\b(${l})\\.`,
    d = `\\b|${r.join(`|`)}`,
    f = {
      className: `number`,
      relevance: 0,
      variants: [
        { begin: `(\\b(${l})|(${u}))[eE][+-]?(${l})[jJ]?(?=${d})` },
        { begin: `(${u})[jJ]?` },
        { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})` },
        { begin: `\\b0[bB](_?[01])+[lL]?(?=${d})` },
        { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})` },
        { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})` },
        { begin: `\\b(${l})[jJ](?=${d})` },
      ],
    },
    p = {
      className: `comment`,
      begin: t.lookahead(/# type:/),
      end: /$/,
      keywords: i,
      contains: [
        { begin: /# type:/ },
        { begin: /#/, end: /\b\B/, endsWithParent: !0 },
      ],
    },
    m = {
      className: `params`,
      variants: [
        { className: ``, begin: /\(\s*\)/, skip: !0 },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: i,
          contains: [`self`, a, f, c, e.HASH_COMMENT_MODE],
        },
      ],
    };
  return (
    (o.contains = [c, f, a]),
    {
      name: `Python`,
      aliases: [`py`, `gyp`, `ipython`],
      unicodeRegex: !0,
      keywords: i,
      illegal: /(<\/|\?)|=>/,
      contains: [
        a,
        f,
        { scope: `variable.language`, match: /\bself\b/ },
        { beginKeywords: `if`, relevance: 0 },
        { match: /\bor\b/, scope: `keyword` },
        c,
        p,
        e.HASH_COMMENT_MODE,
        {
          match: [/\bdef/, /\s+/, n],
          scope: { 1: `keyword`, 3: `title.function` },
          contains: [m],
        },
        {
          variants: [
            { match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/] },
            { match: [/\bclass/, /\s+/, n] },
          ],
          scope: { 1: `keyword`, 3: `title.class`, 6: `title.class.inherited` },
        },
        {
          className: `meta`,
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [f, m, c],
        },
      ],
    }
  );
}
var hm = o(() => {});
function gm(e) {
  let t = e.regex,
    n = (e, { after: t }) => {
      let n = `</` + e[0].slice(1);
      return e.input.indexOf(n, t) !== -1;
    },
    r = vm,
    i = { begin: `<>`, end: `</>` },
    a = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    o = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (e, t) => {
        let r = e[0].length + e.index,
          i = e.input[r];
        if (i === `<` || i === `,`) {
          t.ignoreMatch();
          return;
        }
        i === `>` && (n(e, { after: r }) || t.ignoreMatch());
        let a,
          o = e.input.substring(r);
        if ((a = o.match(/^\s*=/))) {
          t.ignoreMatch();
          return;
        }
        if ((a = o.match(/^\s+extends\s+/)) && a.index === 0) {
          t.ignoreMatch();
          return;
        }
      },
    },
    s = {
      $pattern: vm,
      keyword: ym,
      literal: bm,
      built_in: Tm,
      "variable.language": wm,
    },
    c = `[0-9](_?[0-9])*`,
    l = `\\.(${c})`,
    u = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`,
    d = {
      className: `number`,
      variants: [
        { begin: `(\\b(${u})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b` },
        { begin: `\\b(${u})\\b((${l})\\b|\\.)?|(${l})\\b` },
        { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
        { begin: `\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b` },
        { begin: `\\b0[bB][0-1](_?[0-1])*n?\\b` },
        { begin: `\\b0[oO][0-7](_?[0-7])*n?\\b` },
        { begin: `\\b0[0-7]+n?\\b` },
      ],
      relevance: 0,
    },
    f = {
      className: `subst`,
      begin: `\\$\\{`,
      end: `\\}`,
      keywords: s,
      contains: [],
    },
    p = {
      begin: ".?html`",
      end: ``,
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: `xml`,
      },
    },
    m = {
      begin: ".?css`",
      end: ``,
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: `css`,
      },
    },
    h = {
      begin: ".?gql`",
      end: ``,
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [e.BACKSLASH_ESCAPE, f],
        subLanguage: `graphql`,
      },
    },
    g = {
      className: `string`,
      begin: "`",
      end: "`",
      contains: [e.BACKSLASH_ESCAPE, f],
    },
    _ = {
      className: `comment`,
      variants: [
        e.COMMENT(/\/\*\*(?!\/)/, `\\*/`, {
          relevance: 0,
          contains: [
            {
              begin: `(?=@[A-Za-z]+)`,
              relevance: 0,
              contains: [
                { className: `doctag`, begin: `@[A-Za-z]+` },
                {
                  className: `type`,
                  begin: `\\{`,
                  end: `\\}`,
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: `variable`,
                  begin: r + `(?=\\s*(-)|$)`,
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE,
      ],
    },
    v = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      m,
      h,
      g,
      { match: /\$\d+/ },
      d,
    ];
  f.contains = v.concat({
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [`self`].concat(v),
  });
  let y = [].concat(_, f.contains),
    b = y.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: s,
        contains: [`self`].concat(y),
      },
    ]),
    x = {
      className: `params`,
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: s,
      contains: b,
    },
    S = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            r,
            /\s+/,
            /extends/,
            /\s+/,
            t.concat(r, `(`, t.concat(/\./, r), `)*`),
          ],
          scope: {
            1: `keyword`,
            3: `title.class`,
            5: `keyword`,
            7: `title.class.inherited`,
          },
        },
        {
          match: [/class/, /\s+/, r],
          scope: { 1: `keyword`, 3: `title.class` },
        },
      ],
    },
    ee = {
      relevance: 0,
      match: t.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: `title.class`,
      keywords: { _: [...xm, ...Sm] },
    },
    te = {
      label: `use_strict`,
      className: `meta`,
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    ne = {
      variants: [
        { match: [/function/, /\s+/, r, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: `keyword`, 3: `title.function` },
      label: `func.def`,
      contains: [x],
      illegal: /%/,
    },
    C = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: `variable.constant`,
    };
  function w(e) {
    return t.concat(`(?!`, e.join(`|`), `)`);
  }
  let re = {
      match: t.concat(
        /\b/,
        w([...Cm, `super`, `import`, `await`].map((e) => `${e}\\s*\\(`)),
        r,
        t.lookahead(/\s*\(/),
      ),
      className: `title.function`,
      relevance: 0,
    },
    T = {
      begin: t.concat(/\./, t.lookahead(t.concat(r, /(?![0-9A-Za-z$_(])/))),
      end: r,
      excludeBegin: !0,
      keywords: `prototype`,
      className: `property`,
      relevance: 0,
    },
    E = {
      match: [/get|set/, /\s+/, r, /(?=\()/],
      className: { 1: `keyword`, 3: `title.function` },
      contains: [{ begin: /\(\)/ }, x],
    },
    ie =
      `(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|` +
      e.UNDERSCORE_IDENT_RE +
      `)\\s*=>`,
    ae = {
      match: [
        /const|var|let/,
        /\s+/,
        r,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        t.lookahead(ie),
      ],
      keywords: `async`,
      className: { 1: `keyword`, 3: `title.function` },
      contains: [x],
    };
  return {
    name: `JavaScript`,
    aliases: [`js`, `jsx`, `mjs`, `cjs`],
    keywords: s,
    exports: { PARAMS_CONTAINS: b, CLASS_REFERENCE: ee },
    illegal: /#(?![$_A-Za-z])/,
    contains: [
      e.SHEBANG({ label: `shebang`, binary: `node`, relevance: 5 }),
      te,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      m,
      h,
      g,
      _,
      { match: /\$\d+/ },
      d,
      ee,
      { scope: `attr`, match: r + t.lookahead(`:`), relevance: 0 },
      ae,
      {
        begin: `(` + e.RE_STARTERS_RE + `|\\b(case|return|throw)\\b)\\s*`,
        keywords: `return throw case`,
        relevance: 0,
        contains: [
          _,
          e.REGEXP_MODE,
          {
            className: `function`,
            begin: ie,
            returnBegin: !0,
            end: `\\s*=>`,
            contains: [
              {
                className: `params`,
                variants: [
                  { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: b,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: i.begin, end: i.end },
              { match: a },
              { begin: o.begin, "on:begin": o.isTrulyOpeningTag, end: o.end },
            ],
            subLanguage: `xml`,
            contains: [
              { begin: o.begin, end: o.end, skip: !0, contains: [`self`] },
            ],
          },
        ],
      },
      ne,
      { beginKeywords: `while if switch catch for` },
      {
        begin:
          `\\b(?!function)` +
          e.UNDERSCORE_IDENT_RE +
          `\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{`,
        returnBegin: !0,
        label: `func.def`,
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: r, className: `title.function` }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      T,
      { match: `\\$` + r, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: `title.function` },
        contains: [x],
      },
      re,
      C,
      S,
      E,
      { match: /\$[(.]/ },
    ],
  };
}
function _m(e) {
  let t = e.regex,
    n = gm(e),
    r = vm,
    i = [
      `any`,
      `void`,
      `number`,
      `boolean`,
      `string`,
      `object`,
      `never`,
      `symbol`,
      `bigint`,
      `unknown`,
    ],
    a = {
      begin: [/namespace/, /\s+/, e.IDENT_RE],
      beginScope: { 1: `keyword`, 3: `title.class` },
    },
    o = {
      beginKeywords: `interface`,
      end: /\{/,
      excludeEnd: !0,
      keywords: { keyword: `interface extends`, built_in: i },
      contains: [n.exports.CLASS_REFERENCE],
    },
    s = { className: `meta`, relevance: 10, begin: /^\s*['"]use strict['"]/ },
    c = {
      $pattern: vm,
      keyword: ym.concat([
        `type`,
        `interface`,
        `public`,
        `private`,
        `protected`,
        `implements`,
        `declare`,
        `abstract`,
        `readonly`,
        `enum`,
        `override`,
        `satisfies`,
      ]),
      literal: bm,
      built_in: Tm.concat(i),
      "variable.language": wm,
    },
    l = { className: `meta`, begin: `@` + r },
    u = (e, t, n) => {
      let r = e.contains.findIndex((e) => e.label === t);
      if (r === -1) throw Error(`can not find mode to replace`);
      e.contains.splice(r, 1, n);
    };
  (Object.assign(n.keywords, c), n.exports.PARAMS_CONTAINS.push(l));
  let d = n.contains.find((e) => e.scope === `attr`),
    f = Object.assign({}, d, { match: t.concat(r, t.lookahead(/\s*\?:/)) });
  (n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE, d, f]),
    (n.contains = n.contains.concat([l, a, o, f])),
    u(n, `shebang`, e.SHEBANG()),
    u(n, `use_strict`, s));
  let p = n.contains.find((e) => e.label === `func.def`);
  return (
    (p.relevance = 0),
    Object.assign(n, {
      name: `TypeScript`,
      aliases: [`ts`, `tsx`, `mts`, `cts`],
    }),
    n
  );
}
var vm,
  ym,
  bm,
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em = o(() => {
    ((vm = `[A-Za-z$_][0-9A-Za-z$_]*`),
      (ym =
        `as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using`.split(
          `.`,
        )),
      (bm = [`true`, `false`, `null`, `undefined`, `NaN`, `Infinity`]),
      (xm =
        `Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly`.split(
          `.`,
        )),
      (Sm = [
        `Error`,
        `EvalError`,
        `InternalError`,
        `RangeError`,
        `ReferenceError`,
        `SyntaxError`,
        `TypeError`,
        `URIError`,
      ]),
      (Cm = [
        `setInterval`,
        `setTimeout`,
        `clearInterval`,
        `clearTimeout`,
        `require`,
        `exports`,
        `eval`,
        `isFinite`,
        `isNaN`,
        `parseFloat`,
        `parseInt`,
        `decodeURI`,
        `decodeURIComponent`,
        `encodeURI`,
        `encodeURIComponent`,
        `escape`,
        `unescape`,
      ]),
      (wm = [
        `arguments`,
        `this`,
        `super`,
        `console`,
        `window`,
        `document`,
        `localStorage`,
        `sessionStorage`,
        `module`,
        `self`,
        `global`,
      ]),
      (Tm = [].concat(Cm, xm, Sm)));
  });
function Dm(e) {
  let t = e.regex,
    n = t.concat(
      /[\p{L}_]/u,
      t.optional(/[\p{L}0-9_.-]*:/u),
      /[\p{L}0-9_.-]*/u,
    ),
    r = /[\p{L}0-9._:-]+/u,
    i = { className: `symbol`, begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
    a = {
      begin: /\s/,
      contains: [
        { className: `keyword`, begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ },
      ],
    },
    o = e.inherit(a, { begin: /\(/, end: /\)/ }),
    s = e.inherit(e.APOS_STRING_MODE, { className: `string` }),
    c = e.inherit(e.QUOTE_STRING_MODE, { className: `string` }),
    l = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        { className: `attr`, begin: r, relevance: 0 },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: `string`,
              endsParent: !0,
              variants: [
                { begin: /"/, end: /"/, contains: [i] },
                { begin: /'/, end: /'/, contains: [i] },
                { begin: /[^\s"'=<>`]+/ },
              ],
            },
          ],
        },
      ],
    };
  return {
    name: `HTML, XML`,
    aliases: [
      `html`,
      `xhtml`,
      `rss`,
      `atom`,
      `xjb`,
      `xsd`,
      `xsl`,
      `plist`,
      `wsf`,
      `svg`,
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: `meta`,
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          a,
          c,
          s,
          o,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: `meta`,
                begin: /<![a-z]/,
                end: />/,
                contains: [a, o, c, s],
              },
            ],
          },
        ],
      },
      e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
      { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
      i,
      {
        className: `meta`,
        end: /\?>/,
        variants: [
          { begin: /<\?xml/, relevance: 10, contains: [c] },
          { begin: /<\?[a-z][a-z0-9]+/ },
        ],
      },
      {
        className: `tag`,
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: `style` },
        contains: [l],
        starts: { end: /<\/style>/, returnEnd: !0, subLanguage: `css` },
      },
      {
        className: `tag`,
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: `script` },
        contains: [l],
        starts: { end: /<\/script>/, returnEnd: !0, subLanguage: `javascript` },
      },
      { className: `tag`, begin: /<>|<\/>/ },
      {
        className: `tag`,
        begin: t.concat(
          /</,
          t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/))),
        ),
        end: /\/?>/,
        contains: [{ className: `name`, begin: n, relevance: 0, starts: l }],
      },
      {
        className: `tag`,
        begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
        contains: [
          { className: `name`, begin: n, relevance: 0 },
          { begin: />/, relevance: 0, endsParent: !0 },
        ],
      },
    ],
  };
}
var Om = o(() => {});
function km(e) {
  let t = `true false yes no null`,
    n = `[\\w#;/?:@&=+$,.~*'()[\\]]+`,
    r = {
      className: `attr`,
      variants: [
        { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
        { begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/ },
        { begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/ },
      ],
    },
    i = {
      className: `template-variable`,
      variants: [
        { begin: /\{\{/, end: /\}\}/ },
        { begin: /%\{/, end: /\}/ },
      ],
    },
    a = {
      className: `string`,
      relevance: 0,
      begin: /'/,
      end: /'/,
      contains: [{ match: /''/, scope: `char.escape`, relevance: 0 }],
    },
    o = {
      className: `string`,
      relevance: 0,
      variants: [{ begin: /"/, end: /"/ }, { begin: /\S+/ }],
      contains: [e.BACKSLASH_ESCAPE, i],
    },
    s = e.inherit(o, {
      variants: [
        { begin: /'/, end: /'/, contains: [{ begin: /''/, relevance: 0 }] },
        { begin: /"/, end: /"/ },
        { begin: /[^\s,{}[\]]+/ },
      ],
    }),
    c = {
      className: `number`,
      begin: `\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b`,
    },
    l = {
      end: `,`,
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: t,
      relevance: 0,
    },
    u = { begin: /\{/, end: /\}/, contains: [l], illegal: `\\n`, relevance: 0 },
    d = {
      begin: `\\[`,
      end: `\\]`,
      contains: [l],
      illegal: `\\n`,
      relevance: 0,
    },
    f = [
      r,
      { className: `meta`, begin: `^---\\s*$`, relevance: 10 },
      {
        className: `string`,
        begin: `[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*`,
      },
      {
        begin: `<%[%=-]?`,
        end: `[%-]?%>`,
        subLanguage: `ruby`,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
      },
      { className: `type`, begin: `!\\w+!` + n },
      { className: `type`, begin: `!<` + n + `>` },
      { className: `type`, begin: `!` + n },
      { className: `type`, begin: `!!` + n },
      { className: `meta`, begin: `&` + e.UNDERSCORE_IDENT_RE + `$` },
      { className: `meta`, begin: `\\*` + e.UNDERSCORE_IDENT_RE + `$` },
      { className: `bullet`, begin: `-(?=[ ]|$)`, relevance: 0 },
      e.HASH_COMMENT_MODE,
      { beginKeywords: t, keywords: { literal: t } },
      c,
      { className: `number`, begin: e.C_NUMBER_RE + `\\b`, relevance: 0 },
      u,
      d,
      a,
      o,
    ],
    p = [...f];
  return (
    p.pop(),
    p.push(s),
    (l.contains = p),
    { name: `YAML`, case_insensitive: !0, aliases: [`yml`], contains: f }
  );
}
var Am = o(() => {});
function jm() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
function Mm(e) {
  Ym = e;
}
function Nm(e) {
  let t = [];
  return (n) => {
    let r = Math.max(0, Math.min(3, n - 1)),
      i = t[r];
    return (i || ((i = e(r)), (t[r] = i)), i);
  };
}
function Pm(e, t = ``) {
  let n = typeof e == `string` ? e : e.source,
    r = {
      replace: (e, t) => {
        let i = typeof t == `string` ? t : t.source;
        return ((i = i.replace(Qm.caret, `$1`)), (n = n.replace(e, i)), r);
      },
      getRegex: () => new RegExp(n, t),
    };
  return r;
}
function Fm(e, t) {
  if (t) {
    if (Qm.escapeTest.test(e)) return e.replace(Qm.escapeReplace, hg);
  } else if (Qm.escapeTestNoEncode.test(e))
    return e.replace(Qm.escapeReplaceNoEncode, hg);
  return e;
}
function Im(e) {
  return e.replace(Qm.numericCharacterReference, (e, t, n) => {
    let r = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
    return r === 0 || r > 1114111 || (r >= 55296 && r <= 57343)
      ? `�`
      : String.fromCodePoint(r);
  });
}
function Lm(e) {
  try {
    e = encodeURI(e).replace(Qm.percentDecode, `%`);
  } catch {
    return null;
  }
  return e;
}
function Rm(e, t) {
  let n = e
      .replace(Qm.findPipe, (e, t, n) => {
        let r = !1,
          i = t;
        for (; --i >= 0 && n[i] === `\\`;) r = !r;
        return r ? `|` : ` |`;
      })
      .split(Qm.splitPipe),
    r = 0;
  if (
    (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t)
  ) {
    if (n.length > t) n.splice(t);
    else for (; n.length < t;) n.push(``);
  }
  for (; r < n.length; r++) n[r] = n[r].trim().replace(Qm.slashPipe, `|`);
  return n;
}
function zm(e, t, n) {
  let r = e.length;
  if (r === 0) return ``;
  let i = 0;
  for (; i < r;) {
    let a = e.charAt(r - i - 1);
    if (a === t && !n) i++;
    else if (a !== t && n) i++;
    else break;
  }
  return e.slice(0, r - i);
}
function Bm(e) {
  let t = e.split(`
`),
    n = t.length - 1;
  for (; n >= 0 && Qm.blankLine.test(t[n]);) n--;
  return t.length - n <= 2
    ? e
    : t.slice(0, n + 1).join(`
`);
}
function Vm(e) {
  return e.trim().toLowerCase().toUpperCase().toLowerCase();
}
function Hm(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    if (e[r] === `\\`) r++;
    else if (e[r] === t[0]) n++;
    else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function Um(e, t = 0) {
  let n = t,
    r = ``;
  for (let t of e)
    if (t === `	`) {
      let e = 4 - (n % 4);
      ((r += ` `.repeat(e)), (n += e));
    } else ((r += t), n++);
  return r;
}
function Wm(e, t, n, r, i) {
  let a = t.href,
    o = t.title || null,
    s = e[1].replace(i.other.outputLinkReplace, `$1`),
    c = e[0].charAt(0) === `!`;
  r.state.inLink = !0;
  let l = r.state.linkEmitted,
    u = r.state.inRawBlock;
  r.state.linkEmitted = !1;
  let d = r.inlineTokens(s),
    f = r.state.linkEmitted;
  if (((r.state.linkEmitted = l), (r.state.inLink = !1), !c)) {
    if (f) {
      r.state.inRawBlock = u;
      return;
    }
    r.state.linkEmitted = !0;
  }
  return {
    type: c ? `image` : `link`,
    raw: n,
    href: a,
    title: o,
    text: s,
    tokens: d,
  };
}
function Gm(e, t, n) {
  let r = e.match(n.other.indentCodeCompensation);
  if (r === null) return t;
  let i = r[1];
  return t
    .split(
      `
`,
    )
    .map((e) => {
      let t = e.match(n.other.beginningSpace);
      if (t === null) return e;
      let [r] = t;
      return e.slice(Math.min(r.length, i.length));
    }).join(`
`);
}
function Km(e, t, n, r) {
  if (!t.includes(`<`)) return !1;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === `\\`) {
      i++;
      continue;
    }
    if (t[i] === "`") {
      let e = r.inline.code.exec(t.slice(i));
      if (e) {
        i += e[0].length - 1;
        continue;
      }
    }
    if (t[i] !== `<`) continue;
    let a = e.slice(n + i),
      o = r.inline.tag.exec(a) || r.inline.autolink.exec(a);
    if (o) {
      if (o[0].length > t.length - i) return !0;
      i += o[0].length - 1;
    }
  }
  return !1;
}
function qm(e, t) {
  return Cg.parse(e, t);
}
function Jm(...e) {
  return (Cg.use(...e), (qm.defaults = Cg.defaults), Mm(qm.defaults), qm);
}
var Ym,
  Xm,
  Zm,
  Qm,
  $m,
  eh,
  th,
  nh,
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh,
  _h,
  vh,
  yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg,
  fg,
  pg,
  mg,
  hg,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg = o(() => {
    ((Ym = jm()),
      (Xm = { exec: () => null }),
      (Zm = ((e = ``) => {
        try {
          return !!RegExp(`(?<=1)(?<!1)` + e);
        } catch {
          return !1;
        }
      })()),
      (Qm = {
        codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm,
        outputLinkReplace: /\\([\[\]])/g,
        indentCodeCompensation: /^(\s+)(?:```)/,
        beginningSpace: /^\s+/,
        endingHash: /#$/,
        startingSpaceChar: /^ /,
        endingSpaceChar: / $/,
        endingSpaceTabChar: /[ \t]$/,
        nonSpaceChar: /[^ ]/,
        newLineCharGlobal: /\n/g,
        tabCharGlobal: /\t/g,
        leadingSpaceTab: /^[ \t]+/,
        multipleSpaceGlobal: /\s+/g,
        blankLine: /^[ \t]*$/,
        doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
        blockquoteStart: /^ {0,3}>/,
        blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
        listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
        listIsTask: /^\[[ xX]\] +\S/,
        listReplaceTask: /^\[[ xX]\] +/,
        listTaskCheckbox: /\[[ xX]\]/,
        anyLine: /\n.*\n/,
        hrefBrackets: /^<(.*)>$/,
        tableDelimiter: /[:|]/,
        tableAlignChars: /^\||\| *$/g,
        tableRowBlankLine: /\n[ \t]*$/,
        tableAlignRight: /^ *-+: *$/,
        tableAlignCenter: /^ *:-+: *$/,
        tableAlignLeft: /^ *:-+ *$/,
        startATag: /^<a /i,
        endATag: /^<\/a>/i,
        startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
        endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
        startAngleBracket: /^</,
        endAngleBracket: />$/,
        pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
        unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
        numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,
        escapeTest: /[&<>"']/,
        escapeReplace: /[&<>"']/g,
        escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode:
          /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
        caret: /(^|[^\[])\^/g,
        percentDecode: /%25/g,
        findPipe: /\|/g,
        splitPipe: / \|/,
        slashPipe: /\\\|/g,
        carriageReturn: /\r\n|\r/g,
        spaceLine: /^ +$/gm,
        notSpaceStart: /^\S*/,
        endingNewline: /\n$/,
        listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: Nm((e) =>
          RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
        ),
        hrRegex: Nm((e) =>
          RegExp(
            `^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`,
          ),
        ),
        fencesBeginRegex: Nm((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
        headingBeginRegex: Nm((e) => RegExp(`^ {0,${e}}#`)),
        htmlBeginRegex: Nm((e) =>
          RegExp(
            `^ {0,${e}}(?:</?(?:${ph})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,
            `i`,
          ),
        ),
        blockquoteBeginRegex: Nm((e) => RegExp(`^ {0,${e}}>`)),
      }),
      ($m = /^(?:[ \t]*(?:\n|$))+/),
      (eh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/),
      (th =
        /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/),
      (nh =
        /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/),
      (rh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/),
      (ih = / {0,3}(?:[*+-]|\d{1,9}[.)])/),
      (ah =
        /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/),
      (oh = Pm(ah)
        .replace(/bull/g, ih)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/)
        .replace(
          /hr/g,
          / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        )
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/\|table/g, ``)
        .getRegex()),
      (sh = Pm(ah)
        .replace(/bull/g, ih)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/)
        .replace(
          /hr/g,
          / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        )
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
        .getRegex()),
      (ch =
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/),
      (lh = /^[^\n]+/),
      (uh = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/),
      (dh = Pm(
        /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
      )
        .replace(`label`, uh)
        .replace(
          `title`,
          /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
        )
        .getRegex()),
      (fh = Pm(/^(bull)([ \t][^\n]*?)?(?:\n|$)/)
        .replace(/bull/g, ih)
        .getRegex()),
      (ph = `address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`),
      (mh = /<!--(?:-?>|[\s\S]*?(?:-->|$))/),
      (hh = Pm(
        `^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,
        `i`,
      )
        .replace(`comment`, mh)
        .replace(`tag`, ph)
        .replace(
          `attribute`,
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
        )
        .getRegex()),
      (gh = (e) =>
        Pm(ch)
          .replace(`hr`, nh)
          .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
          .replace(`|lheading`, ``)
          .replace(`|table`, ``)
          .replace(`blockquote`, ` {0,3}>`)
          .replace(
            `fences`,
            " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)",
          )
          .replace(`list`, e)
          .replace(
            `html`,
            `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
          )
          .replace(`tag`, ph)
          .getRegex()),
      (_h = gh(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/)),
      (vh = gh(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/)),
      (yh = {
        blockquote: Pm(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
          .replace(`paragraph`, vh)
          .getRegex(),
        code: eh,
        def: dh,
        fences: th,
        heading: rh,
        hr: nh,
        html: hh,
        lheading: oh,
        list: fh,
        newline: $m,
        paragraph: _h,
        table: Xm,
        text: lh,
      }),
      (bh = Pm(
        `^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`,
      )
        .replace(`hr`, nh)
        .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
        .replace(`blockquote`, ` {0,3}>`)
        .replace(`code`, `(?: {4}| {0,3}	)[^\\n]`)
        .replace(
          `fences`,
          " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)",
        )
        .replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`)
        .replace(
          `html`,
          `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
        )
        .replace(`tag`, ph)
        .getRegex()),
      (xh = {
        ...yh,
        lheading: sh,
        table: bh,
        paragraph: Pm(ch)
          .replace(`hr`, nh)
          .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
          .replace(`|lheading`, ``)
          .replace(`table`, bh)
          .replace(`blockquote`, ` {0,3}>`)
          .replace(
            `fences`,
            " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)",
          )
          .replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`)
          .replace(
            `html`,
            `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
          )
          .replace(`tag`, ph)
          .getRegex(),
      }),
      (Sh = {
        ...yh,
        html: Pm(
          `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
        )
          .replace(`comment`, mh)
          .replace(
            /tag/g,
            `(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`,
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: Xm,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: Pm(ch)
          .replace(`hr`, nh)
          .replace(
            `heading`,
            ` *#{1,6} *[^
]`,
          )
          .replace(`lheading`, oh)
          .replace(`|table`, ``)
          .replace(`blockquote`, ` {0,3}>`)
          .replace(`|fences`, ``)
          .replace(`|list`, ``)
          .replace(`|html`, ``)
          .replace(`|tag`, ``)
          .getRegex(),
      }),
      (Ch = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/),
      (wh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/),
      (Th = /^( {2,}|\\)\n(?!\s*$)[ \t]*/),
      (Eh =
        /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/),
      (Dh = /[\p{P}\p{S}]/u),
      (Oh = /[\s\p{P}\p{S}]/u),
      (kh = /[^\s\p{P}\p{S}]/u),
      (Ah = Pm(/^((?![*_])punctSpace)/, `u`)
        .replace(/punctSpace/g, Oh)
        .getRegex()),
      (jh = /[\p{Pi}\p{Ps}"']/u),
      (Mh = /(?!~)[\p{P}\p{S}]/u),
      (Nh = /(?!~)[\s\p{P}\p{S}]/u),
      (Ph = /(?:[^\s\p{P}\p{S}]|~)/u),
      (Fh = Pm(/link|precode-code|html/, `g`)
        .replace(
          `link`,
          /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
        )
        .replace(`precode-`, Zm ? "(?<!`)()" : "(^^|[^`])")
        .replace(`code`, /(?<b>`+)[^`]+\k<b>(?!`)/)
        .replace(`html`, /<(?! )[^<>]*?>/)
        .getRegex()),
      (Ih =
        /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/),
      (Lh = Pm(Ih, `u`).replace(/punct/g, Dh).getRegex()),
      (Rh = Pm(Ih, `u`).replace(/punct/g, Mh).getRegex()),
      (zh = Pm(
        /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,
        `u`,
      )
        .replace(/openQuote/g, jh)
        .replace(/punct/g, Dh)
        .getRegex()),
      (Bh = `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`),
      (Vh = Pm(Bh, `gu`)
        .replace(/notPunctSpace/g, kh)
        .replace(/punctSpace/g, Oh)
        .replace(/punct/g, Dh)
        .getRegex()),
      (Hh = Pm(Bh, `gu`)
        .replace(/notPunctSpace/g, Ph)
        .replace(/punctSpace/g, Nh)
        .replace(/punct/g, Mh)
        .getRegex()),
      (Uh = Pm(
        `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,
        `gu`,
      )
        .replace(/notPunctSpace/g, kh)
        .replace(/punctSpace/g, Oh)
        .replace(/punct/g, Dh)
        .getRegex()),
      (Wh = Pm(
        `^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,
        `gu`,
      )
        .replace(/notPunctSpace/g, kh)
        .replace(/punctSpace/g, Oh)
        .replace(/punct/g, Dh)
        .getRegex()),
      (Gh = Pm(
        `^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,
        `gu`,
      )
        .replace(/notPunctSpace/g, kh)
        .replace(/punctSpace/g, Oh)
        .replace(/punct/g, Dh)
        .getRegex()),
      (Kh = Pm(/^~~?(?:((?!~)punct)|[^\s~])/, `u`)
        .replace(/punct/g, Dh)
        .getRegex()),
      (qh = Pm(
        `^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,
        `gu`,
      )
        .replace(/notPunctSpace/g, kh)
        .replace(/punctSpace/g, Oh)
        .replace(/punct/g, Dh)
        .getRegex()),
      (Jh = Pm(/\\(punct)/, `gu`)
        .replace(/punct/g, Dh)
        .getRegex()),
      (Yh = Pm(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace(`scheme`, /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace(
          `email`,
          /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
        )
        .getRegex()),
      (Xh = Pm(mh).replace(`(?:-->|$)`, `-->`).getRegex()),
      (Zh = Pm(
        `^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`,
      )
        .replace(`comment`, Xh)
        .replace(
          `attribute`,
          /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
        )
        .getRegex()),
      (Qh = /\[(?:\\[\s\S]|[^\[\]\\])*\]/),
      ($h = Pm(
        /(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
      )
        .replace(`brackets`, Qh)
        .getRegex()),
      (eg = Pm(
        /^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/,
      )
        .replace(`label`, $h)
        .replace(`href`, /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/)
        .replace(
          `title`,
          /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
        )
        .getRegex()),
      (tg = Pm(/^!?\[(label)\]\[(ref)\]/)
        .replace(`label`, $h)
        .replace(`ref`, uh)
        .getRegex()),
      (ng = Pm(/^!?\[(ref)\](?:\[\])?/)
        .replace(`ref`, uh)
        .getRegex()),
      (rg = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/),
      (ig = Pm(
        /(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/,
      )
        .replace(`brackets`, Qh)
        .getRegex()),
      (ag = Pm(`reflink|nolink(?!\\()`, `g`)
        .replace(
          `reflink`,
          Pm(/^!?\[(label)\]\[(ref)\]/)
            .replace(`label`, ig)
            .replace(`ref`, rg)
            .getRegex(),
        )
        .replace(
          `nolink`,
          Pm(/^!?\[(ref)\](?:\[\])?/)
            .replace(`ref`, rg)
            .getRegex(),
        )
        .getRegex()),
      (og = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/),
      (sg = Pm(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/)
        .replace(
          /email/g,
          /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,
        )
        .getRegex()),
      (cg = {
        _backpedal: Xm,
        anyPunctuation: Jh,
        autolink: Yh,
        blockSkip: Fh,
        br: Th,
        code: wh,
        del: Xm,
        delLDelim: Xm,
        delRDelim: Xm,
        emStrongLDelim: Lh,
        emStrongRDelimAst: Vh,
        emStrongRDelimUnd: Wh,
        escape: Ch,
        link: eg,
        nolink: ng,
        punctuation: Ah,
        reflink: tg,
        reflinkSearch: ag,
        tag: Zh,
        text: Eh,
        url: Xm,
      }),
      (lg = {
        ...cg,
        emStrongLDelim: zh,
        emStrongRDelimAst: Uh,
        emStrongRDelimUnd: Gh,
        link: Pm(/^!?\[(label)\]\((.*?)\)/)
          .replace(`label`, $h)
          .getRegex(),
        reflink: Pm(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace(`label`, $h)
          .getRegex(),
      }),
      (ug = {
        ...cg,
        emStrongRDelimAst: Hh,
        emStrongLDelim: Rh,
        delLDelim: Kh,
        delRDelim: qh,
        url: Pm(
          /^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        )
          .replace(`emailProtocol`, sg)
          .replace(`protocol`, og)
          .replace(
            `email`,
            /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,
          )
          .getRegex(),
        _backpedal:
          /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
        text: Pm(
          /^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/,
        )
          .replace(`protocol`, og)
          .replace(/emailProtocol/g, /(?:mailto|xmpp):/)
          .getRegex(),
      }),
      (dg = {
        ...ug,
        br: Pm(Th).replace(`{2,}`, `*`).getRegex(),
        text: Pm(ug.text)
          .replace(`\\b_`, `\\b_| {2,}\\n`)
          .replace(/\{2,\}/g, `*`)
          .getRegex(),
      }),
      (fg = { normal: yh, gfm: xh, pedantic: Sh }),
      (pg = { normal: cg, gfm: ug, breaks: dg, pedantic: lg }),
      (mg = {
        "&": `&amp;`,
        "<": `&lt;`,
        ">": `&gt;`,
        '"': `&quot;`,
        "'": `&#39;`,
      }),
      (hg = (e) => mg[e]),
      (gg = class {
        options;
        rules;
        lexer;
        constructor(e) {
          this.options = e || Ym;
        }
        space(e) {
          let t = this.rules.block.newline.exec(e);
          if (t && t[0].length > 0) return { type: `space`, raw: t[0] };
        }
        code(e) {
          let t = this.rules.block.code.exec(e);
          if (t) {
            let e = this.options.pedantic ? t[0] : Bm(t[0]);
            return {
              type: `code`,
              raw: e,
              codeBlockStyle: `indented`,
              text: e.replace(this.rules.other.codeRemoveIndent, ``),
            };
          }
        }
        fences(e) {
          let t = this.rules.block.fences.exec(e);
          if (t) {
            let e = t[0],
              n = Gm(e, t[3] || ``, this.rules);
            return {
              type: `code`,
              raw: e,
              lang: t[2]
                ? t[2].trim().replace(this.rules.inline.anyPunctuation, `$1`)
                : t[2],
              text: n,
            };
          }
        }
        heading(e) {
          let t = this.rules.block.heading.exec(e);
          if (t) {
            let e = t[2].trim();
            if (this.rules.other.endingHash.test(e)) {
              let t = zm(e, `#`);
              (this.options.pedantic ||
                !t ||
                this.rules.other.endingSpaceTabChar.test(t)) &&
                (e = t.trim());
            }
            return {
              type: `heading`,
              raw: zm(
                t[0],
                `
`,
              ),
              depth: t[1].length,
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        hr(e) {
          let t = this.rules.block.hr.exec(e);
          if (t)
            return {
              type: `hr`,
              raw: zm(
                t[0],
                `
`,
              ),
            };
        }
        blockquote(e) {
          let t = this.rules.block.blockquote.exec(e);
          if (t) {
            let e = zm(
                t[0],
                `
`,
              ).split(`
`),
              n = ``,
              r = ``,
              i = [];
            for (; e.length > 0;) {
              let t = !1,
                a = [],
                o = 0;
              for (; o < e.length; o++)
                if (this.rules.other.blockquoteStart.test(e[o]))
                  (a.push(e[o]), (t = !0));
                else if (!t) a.push(e[o]);
                else break;
              e = e.slice(o);
              let s = a.join(`
`),
                c = s
                  .replace(
                    this.rules.other.blockquoteSetextReplace,
                    `
    $1`,
                  )
                  .replace(this.rules.other.blockquoteSetextReplace2, ``);
              ((n = n
                ? `${n}
${s}`
                : s),
                (r = r
                  ? `${r}
${c}`
                  : c));
              let l = this.lexer.state.top;
              if (
                ((this.lexer.state.top = !0),
                this.lexer.blockTokens(c, i, !0),
                (this.lexer.state.top = l),
                e.length === 0)
              )
                break;
              let u = i.at(-1);
              if (u?.type === `code`) break;
              if (u?.type === `blockquote`) {
                let t = u,
                  a = e.join(`
`),
                  o =
                    t.raw +
                    `
` +
                    a.replace(this.rules.other.blockquoteSetextReplace2, ``),
                  s = this.blockquote(o);
                i[i.length - 1] = s;
                let c = o.substring(s.raw.length).replace(/^\n/, ``),
                  l = c
                    ? c.split(`
`).length
                    : 0,
                  d = l ? e.slice(0, -l) : e;
                (d.length > 0 &&
                  (n = `${n}
${d.join(`
`)}`),
                  (r = r.substring(0, r.length - t.text.length) + s.text));
                break;
              }
              if (u?.type === `list`) {
                let t = u,
                  a =
                    t.raw +
                    `
` +
                    e.join(`
`),
                  o = this.list(a);
                ((i[i.length - 1] = o),
                  (n = n.substring(0, n.length - u.raw.length) + o.raw),
                  (r = r.substring(0, r.length - t.raw.length) + o.raw),
                  (e = a.substring(i.at(-1).raw.length).split(`
`)));
                continue;
              }
            }
            return { type: `blockquote`, raw: n, tokens: i, text: r };
          }
        }
        list(e) {
          let t = this.rules.block.list.exec(e);
          if (t) {
            let n = t[1].trim(),
              r = n.length > 1,
              i = {
                type: `list`,
                raw: ``,
                ordered: r,
                start: r ? +n.slice(0, -1) : ``,
                loose: !1,
                items: [],
              };
            ((n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
              this.options.pedantic && (n = r ? n : `[*+-]`));
            let a = this.rules.other.listItemRegex(n),
              o = !1;
            for (; e;) {
              let n = !1,
                r = ``,
                s = ``;
              if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
              ((r = t[0]), (e = e.substring(r.length)));
              let c = t[2].split(
                  `
`,
                  1,
                )[0],
                l = t[1].length,
                u = this.options.pedantic
                  ? Um(c, l)
                  : c.replace(this.rules.other.leadingSpaceTab, (e) =>
                      Um(e, l),
                    ),
                d = e.split(
                  `
`,
                  1,
                )[0],
                f = !u.trim(),
                p = 0;
              if (
                (this.options.pedantic
                  ? ((p = 2), (s = u.trimStart()))
                  : f
                    ? (p = l + 1)
                    : ((p = u.search(this.rules.other.nonSpaceChar)),
                      (p = p > 4 ? 1 : p),
                      (s = u.slice(p)),
                      (p += l)),
                f &&
                  this.rules.other.blankLine.test(d) &&
                  ((r +=
                    d +
                    `
`),
                  (e = e.substring(d.length + 1)),
                  (n = !0)),
                !n)
              ) {
                let t = this.rules.other.nextBulletRegex(p),
                  n = this.rules.other.hrRegex(p),
                  i = this.rules.other.fencesBeginRegex(p),
                  a = this.rules.other.headingBeginRegex(p),
                  o = this.rules.other.htmlBeginRegex(p),
                  c = this.rules.other.blockquoteBeginRegex(p);
                for (; e;) {
                  let l = e.split(
                      `
`,
                      1,
                    )[0],
                    m;
                  if (
                    ((d = l),
                    this.options.pedantic
                      ? ((d = d.replace(
                          this.rules.other.listReplaceNesting,
                          `  `,
                        )),
                        (m = d))
                      : (m = d.replace(this.rules.other.leadingSpaceTab, (e) =>
                          e.replace(this.rules.other.tabCharGlobal, `    `),
                        )),
                    i.test(d) ||
                      a.test(d) ||
                      o.test(d) ||
                      c.test(d) ||
                      t.test(d) ||
                      n.test(d))
                  )
                    break;
                  if (m.search(this.rules.other.nonSpaceChar) >= p || !d.trim())
                    s +=
                      `
` + m.slice(p);
                  else {
                    if (
                      f ||
                      u
                        .replace(this.rules.other.tabCharGlobal, `    `)
                        .search(this.rules.other.nonSpaceChar) >= 4 ||
                      i.test(u) ||
                      a.test(u) ||
                      n.test(u)
                    )
                      break;
                    s +=
                      `
` + d;
                  }
                  ((f = !d.trim()),
                    (r +=
                      l +
                      `
`),
                    (e = e.substring(l.length + 1)),
                    (u = m.slice(p)));
                }
              }
              (i.loose ||
                (o
                  ? (i.loose = !0)
                  : this.rules.other.doubleBlankLine.test(r) && (o = !0)),
                i.items.push({
                  type: `list_item`,
                  raw: r,
                  task:
                    !!this.options.gfm && this.rules.other.listIsTask.test(s),
                  loose: !1,
                  text: s,
                  tokens: [],
                }),
                (i.raw += r));
            }
            let s = i.items.at(-1);
            if (s) ((s.raw = s.raw.trimEnd()), (s.text = s.text.trimEnd()));
            else return;
            i.raw = i.raw.trimEnd();
            for (let e of i.items)
              if (
                ((this.lexer.state.top = !1),
                (e.tokens = this.lexer.blockTokens(e.text, [])),
                !i.loose)
              ) {
                let t = e.tokens.filter((e) => e.type === `space`);
                i.loose =
                  t.length > 0 &&
                  t.some((e) => this.rules.other.anyLine.test(e.raw));
              }
            for (let e of i.items) {
              let t = e.tokens[0];
              if (e.task && (t?.type === `text` || t?.type === `paragraph`)) {
                ((e.text = e.text.replace(
                  this.rules.other.listReplaceTask,
                  ``,
                )),
                  (t.raw = t.raw.replace(this.rules.other.listReplaceTask, ``)),
                  (t.text = t.text.replace(
                    this.rules.other.listReplaceTask,
                    ``,
                  )));
                for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--)
                  if (
                    this.rules.other.listIsTask.test(
                      this.lexer.inlineQueue[e].src,
                    )
                  ) {
                    this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[
                      e
                    ].src.replace(this.rules.other.listReplaceTask, ``);
                    break;
                  }
                let n = this.rules.other.listTaskCheckbox.exec(e.raw);
                if (n) {
                  let t = {
                    type: `checkbox`,
                    raw: n[0] + ` `,
                    checked: n[0] !== `[ ]`,
                  };
                  ((e.checked = t.checked),
                    i.loose
                      ? e.tokens[0] &&
                        [`paragraph`, `text`].includes(e.tokens[0].type) &&
                        `tokens` in e.tokens[0] &&
                        e.tokens[0].tokens
                        ? ((e.tokens[0].raw = t.raw + e.tokens[0].raw),
                          (e.tokens[0].text = t.raw + e.tokens[0].text),
                          e.tokens[0].tokens.unshift(t))
                        : e.tokens.unshift({
                            type: `paragraph`,
                            raw: t.raw,
                            text: t.raw,
                            tokens: [t],
                          })
                      : e.tokens.unshift(t));
                }
              } else e.task &&= !1;
            }
            if (i.loose)
              for (let e of i.items) {
                e.loose = !0;
                for (let t of e.tokens)
                  t.type === `text` && (t.type = `paragraph`);
              }
            return i;
          }
        }
        html(e) {
          let t = this.rules.block.html.exec(e);
          if (t) {
            let e = Bm(t[0]);
            return {
              type: `html`,
              block: !0,
              raw: e,
              pre: t[1] === `pre` || t[1] === `script` || t[1] === `style`,
              text: e,
            };
          }
        }
        def(e) {
          let t = this.rules.block.def.exec(e);
          if (t) {
            let e = Vm(t[1]).replace(this.rules.other.multipleSpaceGlobal, ` `),
              n = t[2]
                ? t[2]
                    .replace(this.rules.other.hrefBrackets, `$1`)
                    .replace(this.rules.inline.anyPunctuation, `$1`)
                : ``,
              r = t[3]
                ? t[3]
                    .substring(1, t[3].length - 1)
                    .replace(this.rules.inline.anyPunctuation, `$1`)
                : t[3];
            return {
              type: `def`,
              tag: e,
              raw: zm(
                t[0],
                `
`,
              ),
              href: n,
              title: r,
            };
          }
        }
        table(e) {
          let t = this.rules.block.table.exec(e);
          if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
          let n = Rm(t[1]),
            r = t[2].replace(this.rules.other.tableAlignChars, ``).split(`|`),
            i = t[3]?.trim()
              ? t[3].replace(this.rules.other.tableRowBlankLine, ``).split(`
`)
              : [],
            a = {
              type: `table`,
              raw: zm(
                t[0],
                `
`,
              ),
              header: [],
              align: [],
              rows: [],
            };
          if (n.length === r.length) {
            for (let e of r)
              this.rules.other.tableAlignRight.test(e)
                ? a.align.push(`right`)
                : this.rules.other.tableAlignCenter.test(e)
                  ? a.align.push(`center`)
                  : this.rules.other.tableAlignLeft.test(e)
                    ? a.align.push(`left`)
                    : a.align.push(null);
            for (let e = 0; e < n.length; e++)
              a.header.push({
                text: n[e],
                tokens: this.lexer.inline(n[e]),
                header: !0,
                align: a.align[e],
              });
            for (let e of i)
              a.rows.push(
                Rm(e, a.header.length).map((e, t) => ({
                  text: e,
                  tokens: this.lexer.inline(e),
                  header: !1,
                  align: a.align[t],
                })),
              );
            return a;
          }
        }
        lheading(e) {
          let t = this.rules.block.lheading.exec(e);
          if (t) {
            let e = t[1].trim();
            return {
              type: `heading`,
              raw: zm(
                t[0],
                `
`,
              ),
              depth: t[2].charAt(0) === `=` ? 1 : 2,
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        paragraph(e) {
          let t = this.rules.block.paragraph.exec(e);
          if (t) {
            let e =
              t[1].charAt(t[1].length - 1) ===
              `
`
                ? t[1].slice(0, -1)
                : t[1];
            return {
              type: `paragraph`,
              raw: t[0],
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        text(e) {
          let t = this.rules.block.text.exec(e);
          if (t)
            return {
              type: `text`,
              raw: t[0],
              text: t[0],
              tokens: this.lexer.inline(t[0]),
            };
        }
        escape(e) {
          let t = this.rules.inline.escape.exec(e);
          if (t) return { type: `escape`, raw: t[0], text: t[1] };
        }
        tag(e) {
          let t = this.rules.inline.tag.exec(e);
          if (t)
            return (
              !this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  this.rules.other.endATag.test(t[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              this.rules.other.startPreScriptTag.test(t[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  this.rules.other.endPreScriptTag.test(t[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: `html`,
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: t[0],
              }
            );
        }
        link(e) {
          let t = this.rules.inline.link.exec(e);
          if (t) {
            let n = t[0].charAt(0) === `!` ? 2 : 1;
            if (!this.options.pedantic && Km(e, t[1], n, this.rules)) return;
            let r = t[2].trim();
            if (
              !this.options.pedantic &&
              this.rules.other.startAngleBracket.test(r)
            ) {
              if (!this.rules.other.endAngleBracket.test(r)) return;
              let e = zm(r.slice(0, -1), `\\`);
              if ((r.length - e.length) % 2 == 0) return;
            } else {
              let e = Hm(t[2], `()`);
              if (e === -2) return;
              if (e > -1) {
                let n = (t[0].indexOf(`!`) === 0 ? 5 : 4) + t[1].length + e;
                ((t[2] = t[2].substring(0, e)),
                  (t[0] = t[0].substring(0, n).trim()),
                  (t[3] = ``));
              }
            }
            let i = t[2],
              a = ``;
            if (this.options.pedantic) {
              let e = this.rules.other.pedanticHrefTitle.exec(i);
              e && ((i = e[1]), (a = e[3]));
            } else a = t[3] ? t[3].slice(1, -1) : ``;
            return (
              (i = i.trim()),
              this.rules.other.startAngleBracket.test(i) &&
                (i =
                  this.options.pedantic &&
                  !this.rules.other.endAngleBracket.test(r)
                    ? i.slice(1)
                    : i.slice(1, -1)),
              Wm(
                t,
                {
                  href: i && i.replace(this.rules.inline.anyPunctuation, `$1`),
                  title: a && a.replace(this.rules.inline.anyPunctuation, `$1`),
                },
                t[0],
                this.lexer,
                this.rules,
              )
            );
          }
        }
        reflink(e, t) {
          let n;
          if (
            (n = this.rules.inline.reflink.exec(e)) ||
            (n = this.rules.inline.nolink.exec(e))
          ) {
            let r = n[0].charAt(0) === `!` ? 2 : 1;
            if (!this.options.pedantic && Km(e, n[1], r, this.rules)) return;
            let i =
              t[
                Vm(
                  (n[2] || n[1]).replace(
                    this.rules.other.multipleSpaceGlobal,
                    ` `,
                  ),
                )
              ];
            if (!i) {
              let e = n[0].charAt(0);
              return { type: `text`, raw: e, text: e };
            }
            return Wm(n, i, n[0], this.lexer, this.rules);
          }
        }
        emStrong(e, t, n = ``) {
          let r = this.rules.inline.emStrongLDelim.exec(e);
          if (
            !(
              !r ||
              (!r[1] && !r[2] && !r[3] && !r[4]) ||
              (r[4] && n.match(this.rules.other.unicodeAlphaNumeric))
            ) &&
            (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))
          ) {
            let i = [...r[0]].length - 1,
              a,
              o,
              s = i,
              c = 0,
              l = r[0][0],
              u = n === l,
              d =
                l === `*`
                  ? this.rules.inline.emStrongRDelimAst
                  : this.rules.inline.emStrongRDelimUnd;
            for (
              d.lastIndex = 0, t = t.slice(-1 * e.length + i);
              (r = d.exec(t)) !== null;
            ) {
              if (((a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !a))
                continue;
              if (((o = [...a].length), r[3] || r[4])) {
                s += o;
                continue;
              }
              if (r[5] || r[6]) {
                if (i % 3 && !((i + o) % 3)) {
                  c += o;
                  continue;
                }
                if (u) break;
              }
              if (((s -= o), s > 0)) continue;
              o = Math.min(o, o + s + c);
              let t = [...r[0]][0].length,
                n = e.slice(0, i + r.index + t + o);
              if (Math.min(i, o) % 2) {
                let e = n.slice(1, -1);
                return {
                  type: `em`,
                  raw: n,
                  text: e,
                  tokens: this.lexer.inlineTokens(e),
                };
              }
              let l = n.slice(2, -2);
              return {
                type: `strong`,
                raw: n,
                text: l,
                tokens: this.lexer.inlineTokens(l),
              };
            }
          }
        }
        codespan(e) {
          let t = this.rules.inline.code.exec(e);
          if (t) {
            let e = t[2].replace(this.rules.other.newLineCharGlobal, ` `),
              n = this.rules.other.nonSpaceChar.test(e),
              r =
                this.rules.other.startingSpaceChar.test(e) &&
                this.rules.other.endingSpaceChar.test(e);
            return (
              n && r && (e = e.substring(1, e.length - 1)),
              { type: `codespan`, raw: t[0], text: e }
            );
          }
        }
        br(e) {
          let t = this.rules.inline.br.exec(e);
          if (t) return { type: `br`, raw: t[0] };
        }
        del(e, t, n = ``) {
          let r = this.rules.inline.delLDelim.exec(e);
          if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
            let n = [...r[0]].length - 1,
              i,
              a,
              o = n,
              s = this.rules.inline.delRDelim;
            for (
              s.lastIndex = 0, t = t.slice(-1 * e.length + n);
              (r = s.exec(t)) !== null;
            ) {
              if (
                ((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]),
                !i || ((a = [...i].length), a !== n))
              )
                continue;
              if (r[3] || r[4]) {
                o += a;
                continue;
              }
              if (((o -= a), o > 0)) continue;
              a = Math.min(a, a + o);
              let t = [...r[0]][0].length,
                s = e.slice(0, n + r.index + t + a),
                c = s.slice(n, -n);
              return {
                type: `del`,
                raw: s,
                text: c,
                tokens: this.lexer.inlineTokens(c),
              };
            }
          }
        }
        autolink(e) {
          let t = this.rules.inline.autolink.exec(e);
          if (t) {
            let e, n;
            return (
              t[2] === `@`
                ? ((e = t[1]), (n = `mailto:` + e))
                : ((e = t[1]), (n = e)),
              {
                type: `link`,
                raw: t[0],
                text: e,
                href: n,
                autolink: !0,
                tokens: [{ type: `text`, raw: e, text: e }],
              }
            );
          }
        }
        url(e) {
          let t;
          if ((t = this.rules.inline.url.exec(e))) {
            let e, n;
            if (t[2] === `@`) ((e = t[0]), (n = `mailto:` + e));
            else {
              let r;
              do
                ((r = t[0]),
                  (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ``));
              while (r !== t[0]);
              ((e = t[0]), (n = t[1] === `www.` ? `http://` + t[0] : t[0]));
            }
            return {
              type: `link`,
              raw: t[0],
              text: e,
              href: n,
              autolink: !0,
              tokens: [{ type: `text`, raw: e, text: e }],
            };
          }
        }
        inlineText(e) {
          let t = this.rules.inline.text.exec(e);
          if (t) {
            let e = this.lexer.state.inRawBlock;
            return {
              type: `text`,
              raw: t[0],
              text: e ? t[0] : Im(t[0]),
              escaped: e,
            };
          }
        }
      }),
      (_g = class e {
        tokens;
        options;
        state;
        inlineQueue;
        tokenizer;
        constructor(e) {
          ((this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || Ym),
            (this.options.tokenizer = this.options.tokenizer || new gg()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = {
              inLink: !1,
              inRawBlock: !1,
              linkEmitted: !1,
              top: !0,
            }));
          let t = { other: Qm, block: fg.normal, inline: pg.normal };
          (this.options.pedantic
            ? ((t.block = fg.pedantic), (t.inline = pg.pedantic))
            : this.options.gfm &&
              ((t.block = fg.gfm),
              (t.inline = this.options.breaks ? pg.breaks : pg.gfm)),
            (this.tokenizer.rules = t));
        }
        static get rules() {
          return { block: fg, inline: pg };
        }
        static lex(t, n) {
          return new e(n).lex(t);
        }
        static lexInline(t, n) {
          return new e(n).inlineTokens(t);
        }
        lex(e) {
          ((e = e.replace(
            Qm.carriageReturn,
            `
`,
          )),
            this.blockTokens(e, this.tokens));
          for (let e = 0; e < this.inlineQueue.length; e++) {
            let t = this.inlineQueue[e];
            this.inlineTokens(t.src, t.tokens);
          }
          return ((this.inlineQueue = []), this.tokens);
        }
        blockTokens(e, t = [], n = !1) {
          ((this.tokenizer.lexer = this),
            this.options.pedantic &&
              (e = e
                .replace(Qm.tabCharGlobal, `    `)
                .replace(Qm.spaceLine, ``)));
          let r = 1 / 0;
          for (; e;) {
            if (e.length < r) r = e.length;
            else {
              this.infiniteLoopError(e.charCodeAt(0));
              break;
            }
            let i;
            if (
              this.options.extensions?.block?.some((n) =>
                (i = n.call({ lexer: this }, e, t))
                  ? ((e = e.substring(i.raw.length)), t.push(i), !0)
                  : !1,
              )
            )
              continue;
            if ((i = this.tokenizer.space(e))) {
              e = e.substring(i.raw.length);
              let n = t.at(-1);
              i.raw.length === 1 && n !== void 0
                ? (n.raw += `
`)
                : t.push(i);
              continue;
            }
            if ((i = this.tokenizer.code(e))) {
              e = e.substring(i.raw.length);
              let n = t.at(-1);
              n?.type === `paragraph` || n?.type === `text`
                ? ((n.raw +=
                    (n.raw.endsWith(`
`)
                      ? ``
                      : `
`) + i.raw),
                  (n.text +=
                    `
` + i.text),
                  (this.inlineQueue.at(-1).src = n.text))
                : t.push(i);
              continue;
            }
            if ((i = this.tokenizer.fences(e))) {
              ((e = e.substring(i.raw.length)), t.push(i));
              continue;
            }
            if ((i = this.tokenizer.heading(e))) {
              ((e = e.substring(i.raw.length)), t.push(i));
              continue;
            }
            if ((i = this.tokenizer.hr(e))) {
              ((e = e.substring(i.raw.length)), t.push(i));
              continue;
            }
            if ((i = this.tokenizer.blockquote(e))) {
              ((e = e.substring(i.raw.length)), t.push(i));
              continue;
            }
            if ((i = this.tokenizer.list(e))) {
              ((e = e.substring(i.raw.length)), t.push(i));
              continue;
            }
            if ((i = this.tokenizer.html(e))) {
              ((e = e.substring(i.raw.length)), t.push(i));
              continue;
            }
            if ((i = this.tokenizer.def(e))) {
              e = e.substring(i.raw.length);
              let n = t.at(-1);
              n?.type === `paragraph` || n?.type === `text`
                ? ((n.raw +=
                    (n.raw.endsWith(`
`)
                      ? ``
                      : `
`) + i.raw),
                  (n.text +=
                    `
` + i.raw),
                  (this.inlineQueue.at(-1).src = n.text))
                : this.tokens.links[i.tag] ||
                  ((this.tokens.links[i.tag] = {
                    href: i.href,
                    title: i.title,
                  }),
                  t.push(i));
              continue;
            }
            if ((i = this.tokenizer.table(e))) {
              ((e = e.substring(i.raw.length)), t.push(i));
              continue;
            }
            if ((i = this.tokenizer.lheading(e))) {
              ((e = e.substring(i.raw.length)), t.push(i));
              continue;
            }
            let a = e;
            if (this.options.extensions?.startBlock) {
              let t = 1 / 0,
                n = e.slice(1),
                r;
              (this.options.extensions.startBlock.forEach((e) => {
                ((r = e.call({ lexer: this }, n)),
                  typeof r == `number` && r >= 0 && (t = Math.min(t, r)));
              }),
                t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1)));
            }
            if (this.state.top && (i = this.tokenizer.paragraph(a))) {
              let r = t.at(-1);
              (n && r?.type === `paragraph`
                ? ((r.raw +=
                    (r.raw.endsWith(`
`)
                      ? ``
                      : `
`) + i.raw),
                  (r.text +=
                    `
` + i.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue.at(-1).src = r.text))
                : t.push(i),
                (n = a.length !== e.length),
                (e = e.substring(i.raw.length)));
              continue;
            }
            if ((i = this.tokenizer.text(e))) {
              e = e.substring(i.raw.length);
              let n = t.at(-1);
              n?.type === `text`
                ? ((n.raw +=
                    (n.raw.endsWith(`
`)
                      ? ``
                      : `
`) + i.raw),
                  (n.text +=
                    `
` + i.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue.at(-1).src = n.text))
                : t.push(i);
              continue;
            }
            if (e) {
              this.infiniteLoopError(e.charCodeAt(0));
              break;
            }
          }
          return ((this.state.top = !0), t);
        }
        inline(e, t = []) {
          return (this.inlineQueue.push({ src: e, tokens: t }), t);
        }
        linkInText(e) {
          if (!e.includes(`[`)) return !1;
          let t = this.tokenizer.rules.inline.link;
          for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))
            if (t.test(n[0]) && e.charAt(n.index - 1) !== `!`) return !0;
          for (let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
            let e = t[0],
              n = e.lastIndexOf(`[`);
            if (
              e.charAt(0) !== `!` &&
              Object.hasOwn(this.tokens.links, Vm(e.slice(n + 1, -1))) &&
              !(n > 1 && this.linkInText(e.slice(1, n - 1)))
            )
              return !0;
          }
          return !1;
        }
        inlineTokens(e, t = []) {
          this.tokenizer.lexer = this;
          let n = e;
          if (this.tokens.links && e.includes(`[`)) {
            let e = this.tokenizer.rules.inline.reflinkSearch,
              t = (n) => {
                let r = n.lastIndexOf(`[`);
                if (!Object.hasOwn(this.tokens.links, Vm(n.slice(r + 1, -1))))
                  return n;
                if (r > 1 && n.charAt(0) !== `!`) {
                  let i = n.slice(1, r - 1);
                  if (this.linkInText(i))
                    return (
                      `[` +
                      i.replace(e, t) +
                      `][` +
                      `a`.repeat(n.length - r - 2) +
                      `]`
                    );
                }
                return `[` + `a`.repeat(n.length - 2) + `]`;
              };
            n = n.replace(e, t);
          }
          ((n = n.replace(this.tokenizer.rules.inline.anyPunctuation, (e) =>
            `+`.repeat(e.length),
          )),
            (n = n.replace(this.tokenizer.rules.inline.blockSkip, (e, t, n) => {
              let r = n ? n.length : 0;
              return e.slice(0, r) + `[` + `a`.repeat(e.length - r - 2) + `]`;
            })),
            (n =
              this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n));
          let r = !1,
            i = ``,
            a = 1 / 0;
          for (; e;) {
            if (e.length < a) a = e.length;
            else {
              this.infiniteLoopError(e.charCodeAt(0));
              break;
            }
            (r || (i = ``), (r = !1));
            let o;
            if (
              this.options.extensions?.inline?.some((n) =>
                (o = n.call({ lexer: this }, e, t))
                  ? ((e = e.substring(o.raw.length)), t.push(o), !0)
                  : !1,
              )
            )
              continue;
            if ((o = this.tokenizer.escape(e))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            if ((o = this.tokenizer.tag(e))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            if ((o = this.tokenizer.link(e))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            if ((o = this.tokenizer.reflink(e, this.tokens.links))) {
              e = e.substring(o.raw.length);
              let n = t.at(-1);
              o.type === `text` && n?.type === `text`
                ? ((n.raw += o.raw), (n.text += o.text))
                : t.push(o);
              continue;
            }
            if ((o = this.tokenizer.emStrong(e, n, i))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            if ((o = this.tokenizer.codespan(e))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            if ((o = this.tokenizer.br(e))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            if ((o = this.tokenizer.del(e, n, i))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            if ((o = this.tokenizer.autolink(e))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            if (!this.state.inLink && (o = this.tokenizer.url(e))) {
              ((e = e.substring(o.raw.length)), t.push(o));
              continue;
            }
            let s = e;
            if (this.options.extensions?.startInline) {
              let t = 1 / 0,
                n = e.slice(1),
                r;
              (this.options.extensions.startInline.forEach((e) => {
                ((r = e.call({ lexer: this }, n)),
                  typeof r == `number` && r >= 0 && (t = Math.min(t, r)));
              }),
                t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1)));
            }
            if ((o = this.tokenizer.inlineText(s))) {
              ((e = e.substring(o.raw.length)),
                o.raw.slice(-1) !== `_` && (i = o.raw.slice(-1)),
                (r = !0));
              let n = t.at(-1);
              n?.type === `text`
                ? ((n.raw += o.raw), (n.text += o.text))
                : t.push(o);
              continue;
            }
            if (e) {
              this.infiniteLoopError(e.charCodeAt(0));
              break;
            }
          }
          return t;
        }
        infiniteLoopError(e) {
          let t = `Infinite loop on byte: ` + e;
          if (this.options.silent) console.error(t);
          else throw Error(t);
        }
      }),
      (vg = class {
        options;
        parser;
        constructor(e) {
          this.options = e || Ym;
        }
        space(e) {
          return ``;
        }
        code({ text: e, lang: t, escaped: n }) {
          let r = (t || ``).match(Qm.notSpaceStart)?.[0],
            i = e
              ? e.replace(Qm.endingNewline, ``) +
                `
`
              : ``;
          return r
            ? `<pre><code class="language-` +
                Fm(r) +
                `">` +
                (n ? i : Fm(i, !0)) +
                `</code></pre>
`
            : `<pre><code>` +
                (n ? i : Fm(i, !0)) +
                `</code></pre>
`;
        }
        blockquote({ tokens: e }) {
          return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
        }
        html({ text: e }) {
          return e;
        }
        def(e) {
          return ``;
        }
        heading({ tokens: e, depth: t }) {
          return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
        }
        hr(e) {
          return `<hr>
`;
        }
        list(e) {
          let t = e.ordered,
            n = e.start,
            r = ``;
          for (let t = 0; t < e.items.length; t++) {
            let n = e.items[t];
            r += this.listitem(n);
          }
          let i = t ? `ol` : `ul`,
            a = t && n !== 1 ? ` start="` + n + `"` : ``;
          return (
            `<` +
            i +
            a +
            `>
` +
            r +
            `</` +
            i +
            `>
`
          );
        }
        listitem(e) {
          return `<li>${this.parser.parse(e.tokens)}</li>
`;
        }
        checkbox({ checked: e }) {
          return (
            `<input ` +
            (e ? `checked="" ` : ``) +
            `disabled="" type="checkbox"> `
          );
        }
        paragraph({ tokens: e }) {
          return `<p>${this.parser.parseInline(e)}</p>
`;
        }
        table(e) {
          let t = ``,
            n = ``;
          for (let t = 0; t < e.header.length; t++)
            n += this.tablecell(e.header[t]);
          t += this.tablerow({ text: n });
          let r = ``;
          for (let t = 0; t < e.rows.length; t++) {
            let i = e.rows[t];
            n = ``;
            for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
            r += this.tablerow({ text: n });
          }
          return (
            (r &&= `<tbody>${r}</tbody>`),
            `<table>
<thead>
` +
              t +
              `</thead>
` +
              r +
              `</table>
`
          );
        }
        tablerow({ text: e }) {
          return `<tr>
${e}</tr>
`;
        }
        tablecell(e) {
          let t = this.parser.parseInline(e.tokens),
            n = e.header ? `th` : `td`;
          return (
            (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
            t +
            `</${n}>
`
          );
        }
        strong({ tokens: e }) {
          return `<strong>${this.parser.parseInline(e)}</strong>`;
        }
        em({ tokens: e }) {
          return `<em>${this.parser.parseInline(e)}</em>`;
        }
        codespan({ text: e }) {
          return `<code>${Fm(e, !0)}</code>`;
        }
        br(e) {
          return `<br>`;
        }
        del({ tokens: e }) {
          return `<del>${this.parser.parseInline(e)}</del>`;
        }
        link({ href: e, title: t, text: n, tokens: r, autolink: i }) {
          let a = i ? Fm(n, !0) : this.parser.parseInline(r),
            o = Lm(e);
          if (o === null) return a;
          e = Fm(o, i);
          let s = `<a href="` + e + `"`;
          return (
            t && (s += ` title="` + Fm(t) + `"`),
            (s += `>` + a + `</a>`),
            s
          );
        }
        image({ href: e, title: t, text: n, tokens: r }) {
          r && (n = this.parser.parseInline(r, this.parser.textRenderer));
          let i = Lm(e);
          if (i === null) return Fm(n);
          e = i;
          let a = `<img src="${Fm(e)}" alt="${Fm(n)}"`;
          return (t && (a += ` title="${Fm(t)}"`), (a += `>`), a);
        }
        text(e) {
          return `tokens` in e && e.tokens
            ? this.parser.parseInline(e.tokens)
            : `escaped` in e && e.escaped
              ? e.text
              : Fm(e.text);
        }
      }),
      (yg = class {
        strong({ text: e }) {
          return e;
        }
        em({ text: e }) {
          return e;
        }
        codespan({ text: e }) {
          return e;
        }
        del({ text: e }) {
          return e;
        }
        html({ text: e }) {
          return e;
        }
        text({ text: e }) {
          return e;
        }
        link({ text: e }) {
          return `` + e;
        }
        image({ text: e }) {
          return `` + e;
        }
        br() {
          return ``;
        }
        checkbox({ raw: e }) {
          return e;
        }
      }),
      (bg = class e {
        options;
        renderer;
        textRenderer;
        constructor(e) {
          ((this.options = e || Ym),
            (this.options.renderer = this.options.renderer || new vg()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.renderer.parser = this),
            (this.textRenderer = new yg()));
        }
        static parse(t, n) {
          return new e(n).parse(t);
        }
        static parseInline(t, n) {
          return new e(n).parseInline(t);
        }
        parse(e) {
          this.renderer.parser = this;
          let t = ``;
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (this.options.extensions?.renderers?.[r.type]) {
              let e = r,
                n = this.options.extensions.renderers[e.type].call(
                  { parser: this },
                  e,
                );
              if (
                n !== !1 ||
                ![
                  `space`,
                  `hr`,
                  `heading`,
                  `code`,
                  `table`,
                  `blockquote`,
                  `list`,
                  `checkbox`,
                  `html`,
                  `def`,
                  `paragraph`,
                  `text`,
                ].includes(e.type)
              ) {
                t += n || ``;
                continue;
              }
            }
            let i = r;
            switch (i.type) {
              case `space`:
                t += this.renderer.space(i);
                break;
              case `hr`:
                t += this.renderer.hr(i);
                break;
              case `heading`:
                t += this.renderer.heading(i);
                break;
              case `code`:
                t += this.renderer.code(i);
                break;
              case `table`:
                t += this.renderer.table(i);
                break;
              case `blockquote`:
                t += this.renderer.blockquote(i);
                break;
              case `list`:
                t += this.renderer.list(i);
                break;
              case `checkbox`:
                t += this.renderer.checkbox(i);
                break;
              case `html`:
                t += this.renderer.html(i);
                break;
              case `def`:
                t += this.renderer.def(i);
                break;
              case `paragraph`:
                t += this.renderer.paragraph(i);
                break;
              case `text`:
                t += this.renderer.text(i);
                break;
              default: {
                let e = `Token with "` + i.type + `" type was not found.`;
                if (this.options.silent) return (console.error(e), ``);
                throw Error(e);
              }
            }
          }
          return t;
        }
        parseInline(e, t = this.renderer) {
          this.renderer.parser = this;
          let n = ``;
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (this.options.extensions?.renderers?.[i.type]) {
              let e = this.options.extensions.renderers[i.type].call(
                { parser: this },
                i,
              );
              if (
                e !== !1 ||
                ![
                  `escape`,
                  `html`,
                  `link`,
                  `image`,
                  `checkbox`,
                  `strong`,
                  `em`,
                  `codespan`,
                  `br`,
                  `del`,
                  `text`,
                ].includes(i.type)
              ) {
                n += e || ``;
                continue;
              }
            }
            let a = i;
            switch (a.type) {
              case `escape`:
                n += t.text(a);
                break;
              case `html`:
                n += t.html(a);
                break;
              case `link`:
                n += t.link(a);
                break;
              case `image`:
                n += t.image(a);
                break;
              case `checkbox`:
                n += t.checkbox(a);
                break;
              case `strong`:
                n += t.strong(a);
                break;
              case `em`:
                n += t.em(a);
                break;
              case `codespan`:
                n += t.codespan(a);
                break;
              case `br`:
                n += t.br(a);
                break;
              case `del`:
                n += t.del(a);
                break;
              case `text`:
                n += t.text(a);
                break;
              default: {
                let e = `Token with "` + a.type + `" type was not found.`;
                if (this.options.silent) return (console.error(e), ``);
                throw Error(e);
              }
            }
          }
          return n;
        }
      }),
      (xg = class {
        options;
        block;
        constructor(e) {
          this.options = e || Ym;
        }
        static passThroughHooks = new Set([
          `preprocess`,
          `postprocess`,
          `processAllTokens`,
          `emStrongMask`,
        ]);
        static passThroughHooksRespectAsync = new Set([
          `preprocess`,
          `postprocess`,
          `processAllTokens`,
        ]);
        preprocess(e) {
          return e;
        }
        postprocess(e) {
          return e;
        }
        processAllTokens(e) {
          return e;
        }
        emStrongMask(e) {
          return e;
        }
        provideLexer(e = this.block) {
          return e ? _g.lex : _g.lexInline;
        }
        provideParser(e = this.block) {
          return e ? bg.parse : bg.parseInline;
        }
      }),
      (Sg = class {
        defaults = jm();
        options = this.setOptions;
        parse = this.parseMarkdown(!0);
        parseInline = this.parseMarkdown(!1);
        Parser = bg;
        Renderer = vg;
        TextRenderer = yg;
        Lexer = _g;
        Tokenizer = gg;
        Hooks = xg;
        constructor(...e) {
          this.use(...e);
        }
        walkTokens(e, t) {
          let n = [];
          for (let r of e)
            switch (((n = n.concat(t.call(this, r))), r.type)) {
              case `table`: {
                let e = r;
                for (let r of e.header)
                  n = n.concat(this.walkTokens(r.tokens, t));
                for (let r of e.rows)
                  for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
                break;
              }
              case `list`: {
                let e = r;
                n = n.concat(this.walkTokens(e.items, t));
                break;
              }
              default: {
                let e = r;
                this.defaults.extensions?.childTokens?.[e.type]
                  ? this.defaults.extensions.childTokens[e.type].forEach(
                      (r) => {
                        let i = e[r].flat(1 / 0);
                        n = n.concat(this.walkTokens(i, t));
                      },
                    )
                  : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
              }
            }
          return n;
        }
        use(...e) {
          let t = this.defaults.extensions || {
            renderers: {},
            childTokens: {},
          };
          return (
            e.forEach((e) => {
              let n = { ...e };
              if (
                ((n.async = this.defaults.async || n.async || !1),
                e.extensions &&
                  (e.extensions.forEach((e) => {
                    if (!e.name) throw Error(`extension name required`);
                    if (`renderer` in e) {
                      let n = t.renderers[e.name];
                      n
                        ? (t.renderers[e.name] = function (...t) {
                            let r = e.renderer.apply(this, t);
                            return (r === !1 && (r = n.apply(this, t)), r);
                          })
                        : (t.renderers[e.name] = e.renderer);
                    }
                    if (`tokenizer` in e) {
                      if (
                        !e.level ||
                        (e.level !== `block` && e.level !== `inline`)
                      )
                        throw Error(
                          `extension level must be 'block' or 'inline'`,
                        );
                      let n = t[e.level];
                      (n
                        ? n.unshift(e.tokenizer)
                        : (t[e.level] = [e.tokenizer]),
                        e.start &&
                          (e.level === `block`
                            ? t.startBlock
                              ? t.startBlock.push(e.start)
                              : (t.startBlock = [e.start])
                            : e.level === `inline` &&
                              (t.startInline
                                ? t.startInline.push(e.start)
                                : (t.startInline = [e.start]))));
                    }
                    `childTokens` in e &&
                      e.childTokens &&
                      (t.childTokens[e.name] = e.childTokens);
                  }),
                  (n.extensions = t)),
                e.renderer)
              ) {
                let t = this.defaults.renderer || new vg(this.defaults);
                for (let n in e.renderer) {
                  if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
                  if ([`options`, `parser`].includes(n)) continue;
                  let r = n,
                    i = e.renderer[r],
                    a = t[r];
                  t[r] = (...e) => {
                    let n = i.apply(t, e);
                    return (n === !1 && (n = a.apply(t, e)), n || ``);
                  };
                }
                n.renderer = t;
              }
              if (e.tokenizer) {
                let t = this.defaults.tokenizer || new gg(this.defaults);
                for (let n in e.tokenizer) {
                  if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
                  if ([`options`, `rules`, `lexer`].includes(n)) continue;
                  let r = n,
                    i = e.tokenizer[r],
                    a = t[r];
                  t[r] = (...e) => {
                    let n = i.apply(t, e);
                    return (n === !1 && (n = a.apply(t, e)), n);
                  };
                }
                n.tokenizer = t;
              }
              if (e.hooks) {
                let t = this.defaults.hooks || new xg();
                for (let n in e.hooks) {
                  if (!(n in t)) throw Error(`hook '${n}' does not exist`);
                  if ([`options`, `block`].includes(n)) continue;
                  let r = n,
                    i = e.hooks[r],
                    a = t[r];
                  t[r] = xg.passThroughHooks.has(n)
                    ? (e) => {
                        if (
                          this.defaults.async &&
                          xg.passThroughHooksRespectAsync.has(n)
                        )
                          return (async () => {
                            let n = await i.call(t, e);
                            return a.call(t, n);
                          })();
                        let r = i.call(t, e);
                        return a.call(t, r);
                      }
                    : (...e) => {
                        if (this.defaults.async)
                          return (async () => {
                            let n = await i.apply(t, e);
                            return (n === !1 && (n = await a.apply(t, e)), n);
                          })();
                        let n = i.apply(t, e);
                        return (n === !1 && (n = a.apply(t, e)), n);
                      };
                }
                n.hooks = t;
              }
              if (e.walkTokens) {
                let t = this.defaults.walkTokens,
                  r = e.walkTokens;
                n.walkTokens = function (e) {
                  let n = [];
                  return (
                    n.push(r.call(this, e)),
                    t && (n = n.concat(t.call(this, e))),
                    n
                  );
                };
              }
              this.defaults = { ...this.defaults, ...n };
            }),
            this
          );
        }
        setOptions(e) {
          return ((this.defaults = { ...this.defaults, ...e }), this);
        }
        lexer(e, t) {
          return _g.lex(e, t ?? this.defaults);
        }
        parser(e, t) {
          return bg.parse(e, t ?? this.defaults);
        }
        parseMarkdown(e) {
          return (t, n) => {
            let r = { ...n },
              i = { ...this.defaults, ...r },
              a = this.onError(!!i.silent, !!i.async);
            if (this.defaults.async === !0 && r.async === !1)
              return a(
                Error(
                  `marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`,
                ),
              );
            if (typeof t > `u` || t === null)
              return a(Error(`marked(): input parameter is undefined or null`));
            if (typeof t != `string`)
              return a(
                Error(
                  `marked(): input parameter is of type ` +
                    Object.prototype.toString.call(t) +
                    `, string expected`,
                ),
              );
            if (
              (i.hooks && ((i.hooks.options = i), (i.hooks.block = e)), i.async)
            )
              return (async () => {
                let n = i.hooks ? await i.hooks.preprocess(t) : t,
                  r = await (
                    i.hooks
                      ? await i.hooks.provideLexer(e)
                      : e
                        ? _g.lex
                        : _g.lexInline
                  )(n, i),
                  a = i.hooks ? await i.hooks.processAllTokens(r) : r;
                i.walkTokens &&
                  (await Promise.all(this.walkTokens(a, i.walkTokens)));
                let o = await (
                  i.hooks
                    ? await i.hooks.provideParser(e)
                    : e
                      ? bg.parse
                      : bg.parseInline
                )(a, i);
                return i.hooks ? await i.hooks.postprocess(o) : o;
              })().catch(a);
            try {
              i.hooks && (t = i.hooks.preprocess(t));
              let n = (
                i.hooks ? i.hooks.provideLexer(e) : e ? _g.lex : _g.lexInline
              )(t, i);
              (i.hooks && (n = i.hooks.processAllTokens(n)),
                i.walkTokens && this.walkTokens(n, i.walkTokens));
              let r = (
                i.hooks
                  ? i.hooks.provideParser(e)
                  : e
                    ? bg.parse
                    : bg.parseInline
              )(n, i);
              return (i.hooks && (r = i.hooks.postprocess(r)), r);
            } catch (e) {
              return a(e);
            }
          };
        }
        onError(e, t) {
          return (n) => {
            if (
              ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
              e)
            ) {
              let e =
                `<p>An error occurred:</p><pre>` +
                Fm(n.message + ``, !0) +
                `</pre>`;
              return t ? Promise.resolve(e) : e;
            }
            if (t) return Promise.reject(n);
            throw n;
          };
        }
      }),
      (Cg = new Sg()),
      (qm.options = qm.setOptions =
        function (e) {
          return (
            Cg.setOptions(e),
            (qm.defaults = Cg.defaults),
            Mm(qm.defaults),
            qm
          );
        }),
      (qm.getDefaults = jm),
      (qm.defaults = Ym),
      (qm.use = Jm),
      (qm.walkTokens = function (e, t) {
        return Cg.walkTokens(e, t);
      }),
      (qm.parseInline = Cg.parseInline),
      (qm.Parser = bg),
      (qm.parser = bg.parse),
      (qm.Renderer = vg),
      (qm.TextRenderer = yg),
      (qm.Lexer = _g),
      (qm.lexer = _g.lex),
      (qm.Tokenizer = gg),
      (qm.Hooks = xg),
      (qm.parse = qm),
      qm.options,
      qm.setOptions,
      qm.walkTokens,
      qm.parseInline,
      bg.parse,
      _g.lex);
  });
function Tg(e) {
  let t = e.trim();
  if (
    t.length < 2 ||
    t.length > 300 ||
    /[\r\n]/.test(t) ||
    /^[a-z][a-z0-9+.-]*:\/\//i.test(t)
  )
    return;
  if (/[*?<>|]/.test(t)) return;
  let n = /^(.*?)(?::(\d{1,7})(?::\d{1,5})?)?$/.exec(t),
    r = (n?.[1] ?? t).trim(),
    i = n?.[2] ? Number(n[2]) : void 0;
  if (r.startsWith("[[") && r.endsWith("]]")) {
    r = r.slice(2, -2).trim();
  }
  if (__env?.isVaultPathKnown?.(r)) {
    return i && i > 0 ? { path: r, line: i } : { path: r };
  }
  let a = r.replace(/[\\/]+$/, "").split(/[\\/]/).pop() ?? ``,
    o = /[\\/]/.test(r) && r.length > 0,
    s = /^[^.].*\.[A-Za-z0-9]{1,10}$/.test(a),
    isTruncated = /(?:…|\.{2,3})/.test(r),
    hasArrow = /(?:→|->)/.test(r),
    hasSpace = r.includes(" ") && !/[;{}[\]\\~`!#$%^=]/.test(r);
  if (o || s || isTruncated || hasArrow || hasSpace) return i && i > 0 ? { path: r, line: i } : { path: r };
}
function Eg(e) {
  let t = new Map();
  for (let n of e) {
    let e = n.diff;
    if (!e?.path) continue;
    let r = t.get(e.path);
    r
      ? ((r.added += e.added),
        (r.removed += e.removed),
        (r.toolId = n.id),
        r.edits++)
      : t.set(e.path, {
          path: e.path,
          added: e.added,
          removed: e.removed,
          toolId: n.id,
          edits: 1,
        });
  }
  return [...t.values()];
}
var Dg = o(() => {});
function Og(e) {
  return e
    .replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&#39;`);
}
function kg(e) {
  let t = (e ?? ``).trim().split(/\s+/)[0] ?? ``;
  return /^[\w#+.-]{1,32}$/.test(t) ? t.toLowerCase() : ``;
}
function Ag({ text: e, lang: t, escaped: n }) {
  let r = kg(t),
    i = e.replace(/\n$/, ``),
    a;
  return (
    (a = n
      ? i
      : r && Fp.getLanguage(r) && i.length <= Mg
        ? Fp.highlight(i, { language: r, ignoreIllegals: !0 }).value
        : Og(i)),
    `<div class="code-block"><div class="code-head"><span class="code-lang">${Og(r)}</span><button type="button" class="code-copy" aria-label="Copy code">Copy</button></div><pre><code class="hljs">${a}</code></pre></div>`
  );
}
function jg(e) {
  return jp.sanitize(e, Pg);
}
var Mg,
  Ng,
  Pg,
  Fg,
  Ig = o(() => {
    (Mp(),
      Ip(),
      Rp(),
      Jp(),
      Xp(),
      om(),
      lm(),
      dm(),
      pm(),
      hm(),
      Em(),
      Om(),
      Am(),
      wg(),
      Dg(),
      Fp.registerLanguage(`typescript`, _m),
      Fp.registerLanguage(`javascript`, Zp),
      Fp.registerLanguage(`json`, sm),
      Fp.registerLanguage(`bash`, Lp),
      Fp.registerLanguage(`powershell`, fm),
      Fp.registerLanguage(`python`, mm),
      Fp.registerLanguage(`css`, zp),
      Fp.registerLanguage(`xml`, Dm),
      Fp.registerLanguage(`markdown`, um),
      Fp.registerLanguage(`diff`, Yp),
      Fp.registerLanguage(`yaml`, km),
      (Mg = 6e4),
      (Ng = new Sg({
        gfm: !0,
        async: !1,
        renderer: {
          code: Ag,
          html({ text: e }) {
            if (typeof __env?.youtubeEmbedFromHtml === `function`) {
              let embed = __env.youtubeEmbedFromHtml(e);
              if (typeof embed === `string` && embed.length > 0) return embed;
            }
            return Og(e);
          },
          image({ href: e, text: t }) {
            if (typeof e === `string` && typeof __env?.youtubeEmbedHtml === `function`) {
              let embed = __env.youtubeEmbedHtml(e);
              if (typeof embed === `string` && embed.length > 0) return embed;
            }
            let n = t.trim() ? `image: ${t}` : `image`;
            return `<a href="${Og(e)}">${Og(n)}</a>`;
          },
        },
      })),
      jp.addHook(`afterSanitizeAttributes`, (e) => {
        if (e.tagName === `A`) {
          let t = e.getAttribute(`href`);
          (e.removeAttribute(`href`),
            t &&
              (e.setAttribute(`data-href`, t),
              e.setAttribute(`role`, `link`),
              e.setAttribute(`tabindex`, `0`),
              e.getAttribute(`title`) ||
                e.setAttribute(
                  `title`,
                  t.startsWith(`wikilink://`)
                    ? `Open ${decodeURIComponent(t.slice(11))}`
                    : t,
                )));
        } else if (e.tagName === `INPUT`)
          (e.setAttribute(`type`, `checkbox`), e.setAttribute(`disabled`, ``));
        else if (e.tagName === `BUTTON`) e.setAttribute(`type`, `button`);
        else if (e.tagName === `CODE` && e.parentElement?.tagName !== `PRE`) {
          let t = Tg(e.textContent ?? ``);
          t &&
            (e.setAttribute(`class`, `md-path`),
            e.setAttribute(`data-path`, t.path),
            t.line && e.setAttribute(`data-line`, String(t.line)));
        } else if (e.tagName === `IFRAME`) {
          let src = e.getAttribute(`src`) ?? ``;
          if (
            !/^https:\/\/www\.youtube-nocookie\.com\/embed\/[A-Za-z0-9_-]{11}\?(?:modestbranding=1&rel=0(?:&start=\d+)?)$/.test(
              src,
            )
          ) {
            e.remove();
          }
        }
      }),
      (Pg = {
        ALLOWED_TAGS:
          `p.br.strong.em.del.code.pre.span.div.button.ul.ol.li.blockquote.h1.h2.h3.h4.h5.h6.a.hr.table.thead.tbody.tr.th.td.input.iframe`.split(
            `.`,
          ),
        ALLOWED_ATTR: [
          `href`,
          `title`,
          `class`,
          `type`,
          `checked`,
          `disabled`,
          `align`,
          `start`,
          `aria-label`,
          `src`,
          `allow`,
          `allowfullscreen`,
          `loading`,
          `referrerpolicy`,
        ],
        ALLOW_DATA_ATTR: !1,
        FORBID_ATTR: [`style`],
        ALLOWED_URI_REGEXP:
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix|obsidian|wikilink|file):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
      }),
      (Fg = class {
        #e = new Map();
        #t = `{}`;
        render(e) {
          let text = e;
          if (typeof text === "string") {
            if (__env?.linkifyVaultText) {
              text = __env.linkifyVaultText(text);
            } else if (text.includes("[[")) {
              text = text.replace(/`[^`\n]+`|```[\s\S]*?```|\[\[([^\]\n|]+)(?:\|([^\]\n]+))?\]\]/g, (match, target, label) => {
                if (!target) return match;
                let cleanTarget = target.trim();
                let cleanLabel = (label ?? target).trim().replace(/\[/g, "\\[").replace(/\]/g, "\\]");
                let encoded = encodeURIComponent(cleanTarget).replace(/\(/g, "%28").replace(/\)/g, "%29");
                return `[${cleanLabel}](wikilink://${encoded})`;
              });
            }
          }
          let t = Ng.lexer(text),
            n = JSON.stringify(t.links);
          n !== this.#t && (this.#e.clear(), (this.#t = n));
          let r = [],
            i = t.length - 1;
          return (
            t.forEach((e, n) => {
              if (e.type === `space`) return;
              let a = this.#e.get(e.raw);
              (a === void 0 &&
                ((a = jg(Ng.parser(Object.assign([e], { links: t.links })))),
                n < i && this.#e.set(e.raw, a)),
                r.push({ key: String(n), html: a }));
            }),
            r
          );
        }
      }));
  });
function Lg(e, t) {
  pt(t, !0);
  let n = jo(t, `streaming`, 3, !1),
    r = new Fg(),
    i = N(() => r.render(t.text)),
    a = P(void 0);
  cr(() => {
    if ((H(i), !H(a))) return;
    let e = [];
    for (let t of H(a).querySelectorAll(`code.md-path`)) {
      let n = t.dataset.path ?? ``,
        r = $.files.get(n);
      if (r === void 0 && __env?.isVaultPathKnown) {
        r = Boolean(__env.isVaultPathKnown(n));
        $.files.set(n, r);
      }
      r === void 0 && e.push(n);
      let i = r === !0;
      (t.classList.toggle(`is-file`, i),
        i &&
          (t.setAttribute(`role`, `link`),
          (t.tabIndex = 0),
          (t.title = `Open ${n}${t.dataset.line ? `, line ${t.dataset.line}` : ``}`)));
    }
    e.length && $.checkPaths(e);
  });
  var o = Rg();
  (da(
    o,
    21,
    () => H(i),
    (e) => e.key,
    (e, t) => {
      var n = Fi();
      (ya(L(n), () => H(t).html), K(e, n));
    },
  ),
    k(o),
    _o(
      o,
      (e) => F(a, e),
      () => H(a),
    ),
    B(() => Z(o, `data-streaming`, n() || void 0)),
    K(e, o),
    mt());
}
var Rg,
  zg = o(() => {
    (Vo(), Lo(), Hs(), Ig(), (Rg = G(`<div class="md"></div>`)));
  });
function Bg(e, t) {
  pt(t, !0);
  let n = N(() => t.action === `newChat`),
    r = {
      info: {
        border: `border-info`,
        icon: `text-info`,
        glyph: `ℹ`,
        label: `Info`,
      },
      warning: {
        border: `border-warning`,
        icon: `text-warning`,
        glyph: `⚠`,
        label: `Warning`,
      },
      error: {
        border: `border-error`,
        icon: `text-error`,
        glyph: `✕`,
        label: `Error`,
      },
    },
    i = N(() => r[t.level] ?? r.info);
  var a = Hg(),
    o = I(a),
    s = R(o, !0),
    c = z(o, 2),
    l = R(c),
    u = z(c, 2),
    d = R(u, !0),
    f = z(u, 2),
    p = (e) => {
      var t = Vg();
      (W(`click`, t, () => Q({ type: `newChat` })), K(e, t));
    };
  (J(f, (e) => {
    H(n) && e(p);
  }),
    k(a),
    B(() => {
      (X(
        a,
        1,
        Y([
          `flex items-start gap-2 border-l-2 py-1 pr-1 pl-2 text-small`,
          H(i).border,
        ]),
      ),
        X(o, 1, Y([`shrink-0 [font-variant-emoji:text]`, H(i).icon])),
        q(s, H(i).glyph),
        q(l, `${H(i).label ?? ``}:`),
        q(d, t.text));
    }),
    K(e, a),
    mt());
}
var Vg,
  Hg,
  Ug = o(() => {
    (Vo(),
      Lo(),
      Bs(),
      (Vg = G(
        `<button type="button" class="btn btn-secondary shrink-0">New chat</button>`,
      )),
      (Hg = G(
        `<div><span aria-hidden="true"> </span> <span class="sr-only"> </span> <p class="min-w-0 flex-1 wrap-break-word whitespace-pre-wrap"> </p> <!></div>`,
      )),
      yi([`click`]));
  });
function Wg(e, t) {
  pt(t, !0);
  let n = { add: `+`, del: `−`, ctx: ` `, gap: `` };
  var r = Yg(),
    i = I(r),
    a = I(i),
    o = I(a);
  (da(
    o,
    21,
    () => t.diff.lines,
    ca,
    (e, t) => {
      var r = Fi(),
        i = L(r),
        a = (e) => {
          var n = Gg(),
            r = R(z(I(n)));
          (k(n), B(() => q(r, `⋯ ${H(t).text ?? ``}`)), K(e, n));
        },
        o = (e) => {
          var r = Kg(),
            i = I(r),
            a = R(i, !0),
            o = z(i),
            s = R(o, !0),
            c = z(o),
            l = I(c),
            u = R(l, !0),
            d = z(l, 1, !0);
          (k(c),
            k(r),
            B(() => {
              (X(r, 1, `diff-${H(t).kind}`),
                q(
                  a,
                  H(t).kind === `del` ? (H(t).oldNo ?? ``) : (H(t).newNo ?? ``),
                ),
                q(s, n[H(t).kind]),
                q(
                  u,
                  H(t).kind === `add`
                    ? `added: `
                    : H(t).kind === `del`
                      ? `removed: `
                      : ``,
                ),
                q(d, H(t).text));
            }),
            K(e, r));
        };
      (J(i, (e) => {
        H(t).kind === `gap` ? e(a) : e(o, -1);
      }),
        K(e, r));
    },
  ),
    k(o),
    k(a),
    k(i));
  var s = z(i, 2),
    c = (e) => {
      var n = Jg(),
        r = z(I(n)),
        i = (e) => {
          var n = qg();
          (W(`click`, n, function (...e) {
            t.onopen?.apply(this, e);
          }),
            K(e, n));
        };
      (J(r, (e) => {
        t.onopen && e(i);
      }),
        k(n),
        K(e, n));
    };
  (J(s, (e) => {
    t.diff.truncated && e(c);
  }),
    k(r),
    B(() => Z(r, `aria-label`, `Proposed change to ${t.diff.path ?? ``}`)),
    K(e, r),
    mt());
}
var Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg = o(() => {
    (Vo(),
      Lo(),
      (Gg = G(
        `<tr class="diff-gap"><td class="diff-no"></td><td colspan="2" class="px-2 italic"> </td></tr>`,
      )),
      (Kg = G(
        `<tr><td class="diff-no"> </td><td class="diff-sign" aria-hidden="true"> </td><td class="pr-3 whitespace-pre"><span class="sr-only"> </span> </td></tr>`,
      )),
      (qg = G(
        `<button type="button" class="cursor-pointer text-link hover:underline">Open the full diff</button>`,
      )),
      (Jg = G(
        `<div class="border-t border-border px-2.5 py-1 text-small text-muted">Longer than this card shows. <!></div>`,
      )),
      (Yg = G(
        `<div class="diff-block" role="group"><div class="max-h-80 overflow-auto"><table class="w-full border-collapse font-mono text-[12px] leading-[1.55]"><tbody></tbody></table></div> <!></div>`,
      )),
      yi([`click`]));
  });
function Zg(e, t) {
  pt(t, !0);
  let n = N(() => t.item.state === `pending`),
    r = N(() => t.item.options.find((e) => Sc(e.kind))?.optionId),
    i = N(() => {
      let e = t.item.answer;
      if (!e) return ``;
      let n = e.allowed ? `✓ Allowed` : `✕ Denied`;
      return /^(deny|allow)$/i.test(e.label) ? n : `${n} — ${e.label}`;
    }),
    a = () => Q({ type: `openDiff`, id: t.item.id }),
    o = () => {
      t.item.target &&
        !t.item.files &&
        Q({ type: `openFile`, path: t.item.target });
    };
  var s = l_(),
    c = I(s),
    l = I(c),
    u = z(l, 2),
    d = R(u, !0),
    f = z(u, 2),
    p = (e) => {
      var n = Qg(),
        r = R(n, !0);
      (B(() => {
        (Z(n, `title`, t.item.target),
          (n.disabled = !!t.item.files),
          q(r, t.item.target));
      }),
        W(`click`, n, o),
        K(e, n));
    };
  J(f, (e) => {
    t.item.action === `edit` && t.item.target && e(p);
  });
  var m = z(f, 2),
    h = (e) => {
      var n = $g(),
        r = I(n),
        i = R(r),
        a = R(z(r, 2));
      (k(n),
        B(() => {
          (q(i, `+${t.item.diff.added ?? ``}`),
            q(a, `−${t.item.diff.removed ?? ``}`));
        }),
        K(e, n));
    };
  J(m, (e) => {
    t.item.diff && e(h);
  });
  var g = z(m, 4),
    _ = (e) => {
      var t = e_();
      (W(`click`, t, a), K(e, t));
    };
  (J(g, (e) => {
    t.item.diff && e(_);
  }),
    k(c));
  var v = z(c, 2),
    y = (e) => {
      var n = t_(),
        r = z(I(n), 1, !0);
      (k(n), B(() => q(r, t.item.target)), K(e, n));
    };
  J(v, (e) => {
    t.item.action === `command` && t.item.target && e(y);
  });
  var b = z(v, 2),
    x = (e) => {
      var n = n_(),
        r = R(n, !0);
      (B(() => q(r, t.item.detail)), K(e, n));
    };
  J(b, (e) => {
    t.item.detail && e(x);
  });
  var S = z(b, 2),
    ee = (e) => {
      var n = r_();
      (Wg(I(n), {
        get diff() {
          return t.item.diff;
        },
        onopen: a,
      }),
        k(n),
        K(e, n));
    };
  J(S, (e) => {
    t.item.diff && H(n) && e(ee);
  });
  var te = z(S, 2),
    ne = I(te),
    C = (e) => {
      var n = a_();
      (da(
        n,
        21,
        () => t.item.options,
        (e) => e.optionId,
        (e, n) => {
          var i = i_(),
            a = R(i, !0);
          (B(() => {
            (X(
              i,
              1,
              Y([
                `btn`,
                H(n).optionId === H(r) ? `btn-primary` : `btn-secondary`,
              ]),
            ),
              q(a, H(n).label));
          }),
            W(`click`, i, () =>
              Q({ type: `permission`, id: t.item.id, optionId: H(n).optionId }),
            ),
            K(e, i));
        },
      ),
        k(n),
        K(e, n));
    },
    w = (e) => {
      var n = o_(),
        r = R(n, !0);
      (B(() => {
        (X(
          n,
          1,
          Y([
            `m-0 text-small`,
            t.item.answer.allowed ? `text-success` : `text-error`,
          ]),
        ),
          q(r, H(i)));
      }),
        K(e, n));
    },
    re = (e) => {
      K(e, s_());
    },
    T = (e) => {
      K(e, c_());
    };
  (J(ne, (e) => {
    H(n)
      ? e(C)
      : t.item.state === `answered` && t.item.answer
        ? e(w, 1)
        : t.item.state === `expired`
          ? e(re, 2)
          : e(T, -1);
  }),
    k(te),
    k(s),
    B(() => {
      (X(
        s,
        1,
        Y([
          `flex flex-col overflow-hidden rounded-[10px] border`,
          H(n) ? `border-warning/60 bg-warning/[0.07]` : `border-border`,
        ]),
      ),
        Z(
          s,
          `aria-label`,
          `Approval: ${t.item.heading}${t.item.target ? ` ${t.item.target}` : ``}`,
        ),
        Z(s, `data-permission-id`, t.item.id),
        X(
          c,
          1,
          Y([
            `flex min-w-0 items-center gap-2 px-3 py-2 text-small`,
            ((t.item.diff && H(n)) ||
              t.item.action === `command` ||
              t.item.detail) &&
              `border-b border-border`,
          ]),
        ),
        X(l, 0, Y([`size-4 shrink-0`, H(n) ? `text-warning` : `text-muted`])),
        q(d, t.item.heading));
    }),
    K(e, s),
    mt());
}
var Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_ = o(() => {
    (Vo(),
      Lo(),
      wc(),
      Bs(),
      Xg(),
      (Qg = G(
        `<button type="button" class="min-w-0 cursor-pointer truncate font-mono text-link hover:underline disabled:cursor-default disabled:text-fg disabled:no-underline"> </button>`,
      )),
      ($g = G(
        `<span class="shrink-0 tabular-nums"><span class="text-success"> </span> <span class="text-error"> </span></span>`,
      )),
      (e_ = G(
        `<button type="button" class="shrink-0 cursor-pointer text-link hover:underline">Open diff</button>`,
      )),
      (t_ = G(
        `<pre class="m-0 overflow-x-auto border-b border-border bg-code-bg px-3 py-2 font-mono text-[12px] whitespace-pre-wrap"><span class="text-muted select-none">$ </span> </pre>`,
      )),
      (n_ = G(
        `<p class="m-0 px-3 py-2 text-small wrap-break-word whitespace-pre-wrap text-muted"> </p>`,
      )),
      (r_ = G(`<div class="px-2.5 pt-2.5"><!></div>`)),
      (i_ = G(`<button type="button"> </button>`)),
      (a_ = G(
        `<div class="flex flex-wrap gap-1.5" role="group" aria-label="Your answer"></div>`,
      )),
      (o_ = G(`<p> </p>`)),
      (s_ = G(
        `<p class="m-0 text-small text-muted">Hermes stopped waiting (it timed out), so this was treated as Deny.</p>`,
      )),
      (c_ = G(
        `<p class="m-0 text-small text-muted">Not answered — the turn stopped, so Hermes did not do it.</p>`,
      )),
      (l_ = G(
        `<section><div><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2l5 2v4c0 3-2.2 5-5 6-2.8-1-5-3-5-6V4z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path></svg> <span class="shrink-0 font-semibold"> </span> <!> <!> <span class="flex-1"></span> <!></div> <!> <!> <!> <div class="px-3 py-2.5"><!></div></section>`,
      )),
      yi([`click`]));
  });
function d_(e, t) {
  pt(t, !0);
  let n = N(() => t.items.filter((e) => e.turn === t.turn)),
    r = N(() =>
      Eg(
        H(n).flatMap((e) =>
          e.kind === `tool` && e.diff ? [{ id: e.id, diff: e.diff }] : [],
        ),
      ),
    ),
    i = N(() =>
      H(n).flatMap((e) =>
        e.kind === `assistant` && e.text.trim() ? [e.text.trim()] : [],
      ).join(`

`),
    ),
    a = N(() => H(n).find((e) => e.kind === `user` && !e.steered)),
    o = N(() =>
      H(a)?.kind === `user` && H(a).ms !== void 0 ? Pc(H(a).ms) : ``,
    ),
    s = N(() => {
      if (
        H(a)?.kind !== `user` ||
        H(a).notSent ||
        t.meta.busy ||
        t.turn !== t.meta.turn
      )
        return;
      let e = H(a).attachments ?? [];
      if (!e.some((e) => e.kind === `file` || e.kind === `image`))
        return {
          text: H(a).text,
          skill: e.find((e) => e.kind === `skill`)?.label,
        };
    }),
    c = P(`idle`);
  async function l() {
    (F(c, (await Fd(H(i))) ? `done` : `failed`, !0),
      setTimeout(() => F(c, `idle`), 1500));
  }
  var u = v_(),
    d = L(u),
    f = (e) => {
      var t = p_(),
        n = I(t),
        i = R(n);
      (da(
        z(n, 2),
        17,
        () => H(r),
        (e) => e.path,
        (e, t) => {
          var n = f_(),
            r = z(I(n), 2),
            i = R(r, !0),
            a = z(r, 2),
            o = R(a),
            s = R(z(a, 2));
          (k(n),
            B(() => {
              (Z(
                n,
                `title`,
                H(t).edits > 1
                  ? `Open the last of ${H(t).edits} changes as a diff`
                  : `Open the change as a diff`,
              ),
                q(i, H(t).path),
                q(o, `+${H(t).added ?? ``}`),
                q(s, `−${H(t).removed ?? ``}`));
            }),
            W(`click`, n, () => Q({ type: `openDiff`, id: H(t).toolId })),
            K(e, n));
        },
      ),
        k(t),
        B(() =>
          q(
            i,
            `Changed in this reply · ${H(r).length ?? ``} ${H(r).length === 1 ? `file` : `files`}`,
          ),
        ),
        K(e, t));
    };
  J(d, (e) => {
    H(r).length > 0 && e(f);
  });
  var p = z(d, 2),
    m = (e) => {
      var t = __(),
        n = I(t),
        r = (e) => {
          var t = m_(),
            n = R(t, !0);
          (B(() => q(n, H(o))), K(e, t));
        };
      J(n, (e) => {
        H(o) && e(r);
      });
      var a = z(n, 2),
        u = (e) => {
          var t = h_(),
            n = z(I(t));
          (k(t),
            B(() =>
              q(
                n,
                ` ${H(c) === `done` ? `Copied` : H(c) === `failed` ? `Copy failed` : `Copy`}`,
              ),
            ),
            W(`click`, t, l),
            K(e, t));
        };
      J(a, (e) => {
        H(i) && e(u);
      });
      var d = z(a, 2),
        f = (e) => {
          var t = g_();
          (W(`click`, t, () =>
            Q({
              type: `send`,
              text: H(s).text,
              ...(H(s).skill ? { skill: H(s).skill } : {}),
            }),
          ),
            K(e, t));
        };
      (J(d, (e) => {
        H(s) && e(f);
      }),
        k(t),
        K(e, t));
    };
  (J(p, (e) => {
    (H(i) || H(o)) && e(m);
  }),
    K(e, u),
    mt());
}
var f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_ = o(() => {
    (Vo(),
      Lo(),
      Bd(),
      Dg(),
      Ic(),
      Bs(),
      (f_ = G(
        `<button type="button" class="reply-file"><svg class="size-3.5 shrink-0 text-hermes" viewBox="0 0 16 16" aria-hidden="true"><path d="M9 2H4.5v12h7V4.5z M9 2v2.5h2.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"></path></svg> <span class="min-w-0 flex-1 truncate font-mono text-small"> </span> <span class="shrink-0 text-small text-success tabular-nums"> </span> <span class="shrink-0 text-small text-error tabular-nums"> </span></button>`,
      )),
      (p_ = G(
        `<div class="reply-changed" role="group" aria-label="Files changed in this reply"><div class="px-1.5 pb-0.5 text-[11px] font-semibold tracking-wider text-muted uppercase"> </div> <!></div>`,
      )),
      (m_ = G(`<span class="pr-1.5"> </span>`)),
      (h_ = G(
        `<button type="button" class="reply-act" aria-label="Copy the reply"><svg class="size-3" viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="5" width="8.5" height="8.5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.3"></rect><path d="M3 10.5V3.5A1.5 1.5 0 0 1 4.5 2h6" fill="none" stroke="currentColor" stroke-width="1.3"></path></svg> </button>`,
      )),
      (g_ = G(
        `<button type="button" class="reply-act" aria-label="Send my message again" title="Send your message again"><svg class="size-3" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 8a5 5 0 1 1-1.5-3.6M13 2.5v3h-3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg> Retry</button>`,
      )),
      (__ = G(`<div class="reply-foot"><!> <!> <!></div>`)),
      (v_ = G(`<!> <!>`, 1)),
      yi([`click`]));
  });
function b_(e, t) {
  var n = x_(),
    r = z(I(n), 2);
  (Lg(I(r), {
    get text() {
      return t.text;
    },
    streaming: !1,
  }),
    k(r),
    k(n),
    K(e, n));
}
var x_,
  S_ = o(() => {
    (Vo(),
      Lo(),
      zg(),
      (x_ = G(
        `<details class="group my-1 text-small text-muted"><summary class="flex cursor-pointer list-none items-center gap-2 rounded-sm py-0.5 select-none hover:text-fg [&amp;::-webkit-details-marker]:hidden"><span class="h-px flex-1 bg-quote-border" aria-hidden="true"></span> <svg class="size-3 shrink-0 transition-transform group-open:rotate-90" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5"></path></svg> <span>Earlier messages were summarized</span> <span class="h-px flex-1 bg-quote-border" aria-hidden="true"></span></summary> <div class="mt-1 mb-1 ml-1.5 border-l-2 border-quote-border pl-2.5"><!></div></details>`,
      )));
  });
function C_(e, t) {
  var n = E_(),
    r = I(n),
    i = z(I(r), 2),
    a = (e) => {
      K(e, w_());
    },
    o = (e) => {
      K(e, T_());
    };
  (J(i, (e) => {
    t.active ? e(a) : e(o, -1);
  }),
    k(r));
  var s = R(z(r, 2), !0);
  (k(n), B(() => q(s, t.text)), K(e, n));
}
var w_,
  T_,
  E_,
  D_ = o(() => {
    (Vo(),
      Lo(),
      (w_ = G(`<span class="animate-pulse">Thinking…</span>`)),
      (T_ = G(`<span>Thought</span>`)),
      (E_ = G(
        `<details class="group text-small text-muted"><summary class="inline-flex cursor-pointer list-none items-center gap-1 rounded-sm py-0.5 pr-1 select-none hover:text-fg [&amp;::-webkit-details-marker]:hidden"><svg class="size-3 shrink-0 transition-transform group-open:rotate-90" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5"></path></svg> <!></summary> <div class="mt-1 mb-1 ml-1.5 border-l-2 border-quote-border pl-2.5 wrap-break-word whitespace-pre-wrap"> </div></details>`,
      )));
  });
function O_(e, t) {
  let n = Ii();
  pt(t, !0);
  let r = N(() => Js(t.tools)),
    i = N(() => Ys(H(r))),
    a = P(null),
    o = N(() => H(a) ?? H(r).running > 0),
    s = new Ko();
  function c(e) {
    s.has(e) ? s.delete(e) : s.add(e);
  }
  let l = { running: `running`, completed: `done`, failed: `failed` },
    u = {
      read: `M4 2h5l3 3v9H4zM9 2v3h3`,
      edit: `M3 13l1-3 7-7 2 2-7 7z`,
      delete: `M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.7 9h5.6l.7-9`,
      move: `M2.5 8h10M9 4.5L12.5 8 9 11.5`,
      search: `M11 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM10 10l3.5 3.5`,
      execute: `M2 3.5h12v9H2zM5 7l2 1.5L5 10M8.5 10.5H11`,
      think: `M6 12.5h4M6.5 14.5h3M8 2a4 4 0 0 0-2.5 7.1c.6.5 1 1.2 1 2v.4h3v-.4c0-.8.4-1.5 1-2A4 4 0 0 0 8 2z`,
      fetch: `M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zM2.5 8h11M8 2.5c1.6 1.6 2.3 3.5 2.3 5.5S9.6 11.9 8 13.5M8 2.5C6.4 4.1 5.7 6 5.7 8s.7 3.9 2.3 5.5`,
      other: `M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 2.5v2M8 11.5v2M2.5 8h2M11.5 8h2`,
    },
    d = new Set([`read`, `edit`, `delete`, `move`, `search`, `execute`]);
  var f = K_(),
    p = I(f),
    m = I(p),
    h = z(m, 2),
    g = R(h),
    _ = z(h, 2),
    v = R(_),
    y = z(_, 2);
  (k_(y, () =>
    H(r).running ? `running` : H(r).failed ? `failed` : `completed`,
  ),
    k(p));
  var b = z(p, 2),
    x = (e) => {
      var r = G_();
      (da(
        r,
        21,
        () => t.tools,
        (e) => e.id,
        (e, t) => {
          var n = W_();
          {
            let e = (e) => {
                var n = L_(),
                  r = L(n),
                  i = R(r),
                  a = z(r, 2),
                  o = (e) => {
                    var t = P_(),
                      n = R(t, !0);
                    (B(() => q(n, H(p).label)), K(e, t));
                  };
                J(a, (e) => {
                  H(p).label && e(o);
                });
                var s = z(a, 2),
                  c = R(s, !0),
                  f = z(s, 2),
                  _ = (e) => {
                    var n = F_(),
                      r = I(n),
                      i = R(r),
                      a = R(z(r, 2));
                    (k(n),
                      B(() => {
                        (q(i, `+${H(t).diff.added ?? ``}`),
                          q(a, `−${H(t).diff.removed ?? ``}`));
                      }),
                      K(e, n));
                  };
                J(f, (e) => {
                  H(t).diff && e(_);
                });
                var v = z(f, 2),
                  y = (e) => {
                    var t = I_();
                    (B(() =>
                      X(
                        t,
                        0,
                        Y([
                          `size-2.5 shrink-0 text-muted transition-transform`,
                          H(g) && `rotate-90`,
                        ]),
                      ),
                    ),
                      K(e, t));
                  };
                J(v, (e) => {
                  H(h) && e(y);
                });
                var b = z(v, 2);
                k_(b, () => H(t).status);
                var x = R(z(b, 2), !0);
                (B(
                  (e) => {
                    (Z(i, `d`, u[H(m)]),
                      X(s, 1, e),
                      q(c, H(p).detail),
                      q(x, l[H(t).status]));
                  },
                  [
                    () =>
                      Y([
                        `min-w-0 flex-1 truncate`,
                        d.has(H(m)) && `font-mono`,
                      ]),
                  ],
                ),
                  K(e, n));
              },
              p = N(() => Ks(H(t).title)),
              m = N(() =>
                H(t).toolKind && u[H(t).toolKind] ? H(t).toolKind : `other`,
              ),
              h = N(
                () => !!(H(t).output || H(t).diff || H(t).locations?.length),
              ),
              g = N(() => s.has(H(t).id));
            var r = I(n),
              i = (n) => {
                var r = R_(),
                  i = I(r);
                (e(i),
                  k(r),
                  B(() => {
                    (Z(r, `title`, H(t).title), Z(r, `aria-expanded`, H(g)));
                  }),
                  W(`click`, r, () => c(H(t).id)),
                  K(n, r));
              },
              a = (n) => {
                var r = z_(),
                  i = I(r);
                (e(i), k(r), B(() => Z(r, `title`, H(t).title)), K(n, r));
              };
            J(r, (e) => {
              H(h) ? e(i) : e(a, -1);
            });
            var o = z(r, 2),
              f = (e) => {
                var n = U_(),
                  r = I(n),
                  i = (e) => {
                    var n = V_();
                    (da(
                      n,
                      21,
                      () => H(t).locations,
                      (e) => e.path,
                      (e, t) => {
                        var n = B_(),
                          r = R(n);
                        (B(() => {
                          (Z(
                            n,
                            `title`,
                            `Open ${H(t).path ?? ``}${H(t).line ? `:${H(t).line}` : ``}`,
                          ),
                            q(
                              r,
                              `${H(t).path ?? ``}${H(t).line ? `:${H(t).line}` : ``}`,
                            ));
                        }),
                          W(`click`, n, () =>
                            Q({
                              type: `openFile`,
                              path: H(t).path,
                              ...(H(t).line ? { line: H(t).line } : {}),
                            }),
                          ),
                          K(e, n));
                      },
                    ),
                      k(n),
                      K(e, n));
                  };
                J(r, (e) => {
                  H(t).locations?.length && e(i);
                });
                var a = z(r, 2),
                  o = (e) => {
                    Wg(e, {
                      get diff() {
                        return H(t).diff;
                      },
                      onopen: () => Q({ type: `openDiff`, id: H(t).id }),
                    });
                  };
                J(a, (e) => {
                  H(t).diff && e(o);
                });
                var s = z(a, 2),
                  c = (e) => {
                    var n = H_(),
                      r = R(n, !0);
                    (B(() => q(r, H(t).output)), K(e, n));
                  };
                (J(s, (e) => {
                  H(t).output && e(c);
                }),
                  k(n),
                  K(e, n));
              };
            (J(o, (e) => {
              H(g) && e(f);
            }),
              k(n));
          }
          K(e, n);
        },
      ),
        k(r),
        B(() => Z(r, `id`, n)),
        K(e, r));
    };
  (J(b, (e) => {
    H(o) && e(x);
  }),
    k(f),
    B(() => {
      (Z(p, `aria-expanded`, H(o)),
        Z(p, `aria-controls`, n),
        X(
          m,
          0,
          Y([
            `size-3 shrink-0 text-muted transition-transform`,
            H(o) && `rotate-90`,
          ]),
        ),
        q(
          g,
          `${t.tools.length ?? ``} ${t.tools.length === 1 ? `step` : `steps`}`,
        ),
        q(v, `· ${H(i) ?? ``}`));
    }),
    W(`click`, p, () => F(a, !H(o))),
    K(e, f),
    mt());
}
var k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_ = o(() => {
    (Vo(),
      Lo(),
      ts(),
      ec(),
      Bs(),
      Xg(),
      (k_ = (e, t = C) => {
        var n = N_(),
          r = I(n),
          i = (e) => {
            K(e, A_());
          },
          a = (e) => {
            K(e, j_());
          },
          o = (e) => {
            K(e, M_());
          };
        (J(r, (e) => {
          t() === `running` ? e(i) : t() === `completed` ? e(a, 1) : e(o, -1);
        }),
          k(n),
          K(e, n));
      }),
      (A_ = G(
        `<span class="size-2.5 animate-spin rounded-full border-[1.5px] border-link border-t-transparent" aria-hidden="true"></span>`,
      )),
      (j_ = Ni(
        `<svg class="size-3.5 text-success" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="1.6"></path></svg>`,
      )),
      (M_ = Ni(
        `<svg class="size-3.5 text-error" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.6"></path></svg>`,
      )),
      (N_ = G(
        `<span class="flex size-4 shrink-0 items-center justify-center"><!></span>`,
      )),
      (P_ = G(`<span class="shrink-0 text-muted"> </span>`)),
      (F_ = G(
        `<span class="shrink-0 tabular-nums"><span class="text-success"> </span> <span class="text-error"> </span></span>`,
      )),
      (I_ = Ni(
        `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8"></path></svg>`,
      )),
      (L_ = G(
        `<svg class="size-3.5 shrink-0 text-muted" viewBox="0 0 16 16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg> <!> <span> </span> <!> <!> <!> <span class="sr-only"> </span>`,
        1,
      )),
      (R_ = G(
        `<button type="button" class="flex w-full min-w-0 cursor-pointer items-center gap-2 py-1 pr-2.5 pl-3 text-left hover:bg-hover"><!></button>`,
      )),
      (z_ = G(
        `<div class="flex min-w-0 items-center gap-2 py-1 pr-2.5 pl-3"><!></div>`,
      )),
      (B_ = G(
        `<button type="button" class="min-w-0 cursor-pointer truncate font-mono text-link hover:underline"> </button>`,
      )),
      (V_ = G(`<div class="flex flex-wrap gap-x-3 gap-y-0.5"></div>`)),
      (H_ = G(
        `<pre class="m-0 max-h-60 overflow-auto rounded-md bg-code-bg px-2.5 py-1.5 font-mono text-[12px] leading-normal wrap-break-word whitespace-pre-wrap"> </pre>`,
      )),
      (U_ = G(
        `<div class="flex flex-col gap-1.5 pt-0.5 pr-2.5 pb-2 pl-8"><!> <!> <!></div>`,
      )),
      (W_ = G(`<li class="flex min-w-0 flex-col"><!> <!></li>`)),
      (G_ = G(`<ul class="flex flex-col border-t border-border py-1"></ul>`)),
      (K_ = G(
        `<div class="card text-small"><button type="button" class="flex w-full cursor-pointer items-center gap-2 px-2.5 py-1.5 text-left hover:bg-hover"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"></path></svg> <span class="shrink-0 font-semibold"> </span> <span class="min-w-0 flex-1 truncate text-muted"> </span> <!></button> <!></div>`,
      )),
      yi([`click`]));
  });
function J_(e, t) {
  pt(t, !0);
  let n = N(() =>
      Ws(t.items, {
        ends: !0,
        ...(t.meta.busy ? { openTurn: t.meta.turn } : {}),
      }),
    ),
    r = N(() => t.items.length === 0 && t.meta.connection.state === `ready`);
  cr(() => {
    H(r) && $.refreshSessions();
  });
  let i = N(() =>
      H(r)
        ? $.sessions.items.filter((e) => e.id !== t.meta.sessionId).slice(0, 3)
        : [],
    ),
    a,
    o = 0,
    s = P(!1),
    c = P(void 0),
    l = N(() => H(s) && t.items.length > 0 && t.items !== H(c)),
    u = N(() => {
      if (!t.meta.busy) return;
      let e = t.items.at(-1);
      if (e && e.turn === t.meta.turn)
        return e.kind === `assistant` || e.kind === `thought` ? e.id : void 0;
    });
  function d() {
    a && ((a.scrollTop = a.scrollHeight), (o = a.scrollTop));
  }
  function f() {
    if (!a) return;
    let e = a.scrollTop,
      n = a.scrollHeight - e - a.clientHeight;
    (e < o - 1 && n > 2
      ? H(s) || (F(s, !0), F(c, t.items))
      : (n <= 2 || (e > o && n <= 80)) && F(s, !1),
      (o = e));
  }
  cr(() => {
    if (t.items.length === 0) {
      (F(s, !1), F(c, void 0), (o = 0));
      return;
    }
    Jr(() => H(s)) || d();
  });
  function p(e) {
    a = e;
    let t = new ResizeObserver(() => {
      H(s) || d();
    });
    return (
      t.observe(e),
      () => {
        (t.disconnect(), (a = void 0));
      }
    );
  }
  function m() {
    return (
      document.body.classList.contains(`vscode-reduce-motion`) ||
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
    );
  }
  function h() {
    a &&
      (F(s, !1),
      a.scrollTo({
        top: a.scrollHeight,
        behavior: m() ? `instant` : `smooth`,
      }));
  }
  let g = (e) => Q({ type: `openLink`, href: e }),
    _ = (e, t) => Q({ type: `openFile`, path: e, ...(t ? { line: t } : {}) });
  var v = mv(),
    y = I(v),
    b = (e) => {
      var n = tv(),
        r = I(n);
      ac(r, { size: 40 });
      var a = z(r, 2),
        o = (e) => {
          K(e, Y_());
        },
        s = (e) => {
          var n = Z_(),
            r = z(L(n), 2),
            i = z(I(r)),
            a = (e) => {
              var n = X_(),
                r = R(n, !0);
              (B(() => q(r, t.meta.folder)), K(e, n));
            },
            o = (e) => {
              K(e, Pi(`this workspace`));
            };
          (J(i, (e) => {
            t.meta.folder ? e(a) : e(o, -1);
          }),
            k(r),
            ze(2),
            K(e, n));
        };
      J(a, (e) => {
        t.meta.connection.state === `noFolder` ? e(o) : e(s, -1);
      });
      var c = z(a, 2),
        l = (e) => {
          var t = $_(),
            n = I(t),
            r = z(I(n), 2);
          (k(n),
            da(
              z(n, 2),
              17,
              () => H(i),
              (e) => e.id,
              (e, t) => {
                var n = Q_(),
                  r = I(n),
                  i = R(r, !0),
                  a = R(z(r, 2), !0);
                (k(n),
                  B(
                    (e) => {
                      (Z(n, `title`, H(t).title ?? `Untitled session`),
                        q(i, H(t).title ?? `Untitled session`),
                        q(a, e));
                    },
                    [() => Ac(Dc(H(t).updatedAt), Date.now())],
                  ),
                  W(`click`, n, () => $.openSession(H(t).id)),
                  K(e, n));
              },
            ),
            k(t),
            W(`click`, r, () => $.openSessions()),
            K(e, t));
        };
      J(c, (e) => {
        H(i).length > 0 && e(l);
      });
      var u = z(c, 2),
        d = (e) => {
          var t = ev();
          (Xd(I(t), {}), k(t), K(e, t));
        };
      (J(u, (e) => {
        t.meta.connection.state !== `noFolder` && e(d);
      }),
        k(n),
        K(e, n));
    };
  J(y, (e) => {
    t.items.length === 0 && e(b);
  });
  var x = z(y, 2),
    S = I(x);
  (da(
    S,
    21,
    () => H(n),
    (e) => e.key,
    (e, n) => {
      var r = Fi(),
        i = L(r),
        a = (e) => {
          d_(e, {
            get turn() {
              return H(n).turn;
            },
            get items() {
              return t.items;
            },
            get meta() {
              return t.meta;
            },
          });
        },
        o = (e) => {
          var t = fv(),
            r = L(t),
            i = (e) => {
              var t = nv();
              (ac(I(t), { size: 18 }), ze(2), k(t), K(e, t));
            };
          J(r, (e) => {
            H(n).head && e(i);
          });
          var a = z(r, 2),
            o = (e) => {
              O_(e, {
                get tools() {
                  return H(n).tools;
                },
              });
            },
            s = (e) => {
              let t = N(() => H(n).item);
              var r = uv(),
                i = I(r),
                a = (e) => {
                  var n = ov();
                  (da(
                    n,
                    21,
                    () => H(t).attachments,
                    ca,
                    (e, t) => {
                      var n = Fi(),
                        r = L(n),
                        i = (e) => {
                          var n = iv(),
                            r = I(n);
                          Yl(r, {
                            get id() {
                              return H(t).id;
                            },
                          });
                          var i = z(r, 2),
                            a = R(i, !0),
                            o = z(i, 2),
                            s = (e) => {
                              var n = rv(),
                                r = R(n, !0);
                              (B(() => q(r, H(t).size)), K(e, n));
                            };
                          (J(o, (e) => {
                            H(t).size && e(s);
                          }),
                            k(n),
                            B(() => {
                              (Z(n, `aria-label`, `View ${H(t).label ?? ``}`),
                                q(a, H(t).label));
                            }),
                            W(`click`, n, () => $.openImage(H(t))),
                            K(e, n));
                        },
                        a = (e) => {
                          var n = av(),
                            r = I(n);
                          yl(r, {
                            get kind() {
                              return H(t).kind;
                            },
                            class: `size-3`,
                          });
                          var i = R(z(r, 2), !0);
                          (k(n),
                            B(() => {
                              (X(
                                n,
                                1,
                                Y([
                                  `ctx-chip pr-[7px]`,
                                  H(t).kind === `skill`
                                    ? `ctx-chip-skill`
                                    : `text-muted cursor-pointer hover:underline`,
                                ]),
                              ),
                                q(i, H(t).label));
                            }),
                            W(`click`, n, () => {
                              let p = H(t).path ?? H(t).label;
                              if (p) _(p);
                            }),
                            K(e, n));
                        };
                      (J(r, (e) => {
                        H(t).kind === `image` && H(t).id ? e(i) : e(a, -1);
                      }),
                        K(e, n));
                    },
                  ),
                    k(n),
                    B(() =>
                      X(
                        n,
                        1,
                        Y([
                          `flex flex-wrap justify-end gap-1 pb-0.5`,
                          H(t).notSent && `opacity-60`,
                        ]),
                      ),
                    ),
                    K(e, n));
                };
              J(i, (e) => {
                H(t).attachments?.length && e(a);
              });
              var o = z(i, 2);
              (da(
                o,
                21,
                () => sl(H(t).text, $.panels?.capabilities.skills),
                ca,
                (e, t) => {
                  var n = Fi(),
                    r = L(n),
                    i = (e) => {
                      var n = sv(),
                        r = R(n, !0);
                      (B(() => q(r, H(t).text)), K(e, n));
                    },
                    a = (e) => {
                      var n = Pi();
                      (B(() => q(n, H(t).text)), K(e, n));
                    };
                  (J(r, (e) => {
                    H(t).mention ? e(i) : e(a, -1);
                  }),
                    K(e, n));
                },
              ),
                k(o));
              var s = z(o, 2),
                c = (e) => {
                  K(e, cv());
                },
                l = (e) => {
                  K(e, lv());
                };
              J(s, (e) => {
                H(t).notSent ? e(c) : H(t).steered && e(l, 1);
              });
              var foot = z(s, 2),
                copyBtn = I(foot),
                copySvg = I(copyBtn),
                copySpan = z(copySvg, 2),
                copyText = R(copySpan, !0),
                copyStatus = P(`idle`);
              async function doCopy() {
                let textToCopy = H(t).text ?? ``;
                let ok = await Fd(textToCopy);
                F(copyStatus, ok ? `done` : `failed`, !0);
                setTimeout(() => F(copyStatus, `idle`), 1500);
              }
              (W(`click`, copyBtn, doCopy),
                k(copyBtn),
                k(foot),
                k(r),
                B(() => {
                  let st = H(copyStatus);
                  q(
                    copyText,
                    st === `done`
                      ? `Copied`
                      : st === `failed`
                        ? `Copy failed`
                        : `Copy`,
                  );
                }),
                B(() =>
                  X(
                    o,
                    1,
                    Y([
                      `max-w-full rounded-[12px_12px_3px_12px] border border-user-border bg-user-bubble px-3 py-2 wrap-break-word whitespace-pre-wrap select-text`,
                      H(t).notSent && `opacity-60`,
                    ]),
                  ),
                ),
                K(e, r));
            },
            c = (e) => {
              var t = dv(),
                r = I(t);
              {
                let e = N(() => H(n).item.id === H(u));
                Lg(r, {
                  get text() {
                    return H(n).item.text;
                  },
                  get streaming() {
                    return H(e);
                  },
                });
              }
              (k(t),
                B(() => Z(t, `aria-busy`, H(n).item.id === H(u) || void 0)),
                K(e, t));
            },
            l = (e) => {
              var t = dv(),
                r = I(t);
              {
                let e = N(() => H(n).item.id === H(u));
                C_(r, {
                  get text() {
                    return H(n).item.text;
                  },
                  get active() {
                    return H(e);
                  },
                });
              }
              (k(t),
                B(() => Z(t, `aria-busy`, H(n).item.id === H(u) || void 0)),
                K(e, t));
            },
            d = (e) => {
              b_(e, {
                get text() {
                  return H(n).item.text;
                },
              });
            },
            f = (e) => {
              Bg(e, {
                get level() {
                  return H(n).item.level;
                },
                get text() {
                  return H(n).item.text;
                },
                get action() {
                  return H(n).item.action;
                },
              });
            },
            p = (e) => {
              Zg(e, {
                get item() {
                  return H(n).item;
                },
              });
            };
          (J(a, (e) => {
            H(n).kind === `tools`
              ? e(o)
              : H(n).item.kind === `user`
                ? e(s, 1)
                : H(n).item.kind === `assistant`
                  ? e(c, 2)
                  : H(n).item.kind === `thought`
                    ? e(l, 3)
                    : H(n).item.kind === `summary`
                      ? e(d, 4)
                      : H(n).item.kind === `notice`
                        ? e(f, 5)
                        : H(n).item.kind === `permission` && e(p, 6);
          }),
            K(e, t));
        };
      (J(i, (e) => {
        H(n).kind === `end` ? e(a) : e(o, -1);
      }),
        K(e, r));
    },
  ),
    k(S),
    Ma(S, () => Ld(g, _)),
    k(x),
    Ma(x, () => p));
  var ee = z(x, 2),
    te = (e) => {
      var t = pv();
      (W(`click`, t, h), K(e, t));
    };
  (J(ee, (e) => {
    H(l) && e(te);
  }),
    k(v),
    vi(`scroll`, x, f),
    K(e, v),
    mt());
}
var Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv = o(() => {
    (Vo(),
      Lo(),
      zo(),
      Hs(),
      Bd(),
      ec(),
      ll(),
      Gd(),
      Bs(),
      Dl(),
      Zl(),
      sc(),
      tf(),
      zg(),
      Ug(),
      u_(),
      y_(),
      S_(),
      D_(),
      q_(),
      (Y_ = G(`<p class="mt-1">Open a folder to chat with Hermes.</p>`)),
      (X_ = G(`<span class="font-medium text-fg"> </span>`)),
      (Z_ = G(
        `<p class="mt-1 text-[1.25em] font-semibold text-fg">What should Hermes work on?</p> <p>In <!></p> <p class="text-small">Enter to send · Shift+Enter for a new line · hold Shift to drop files</p>`,
        1,
      )),
      (Q_ = G(
        `<button type="button" class="flex min-w-0 cursor-pointer flex-col rounded-md px-2 py-1.5 text-left hover:bg-hover"><span class="truncate text-fg"> </span> <span class="text-small"> </span></button>`,
      )),
      ($_ = G(
        `<div class="pointer-events-auto mt-5 flex w-full max-w-80 flex-col gap-0.5 text-left"><div class="flex items-center px-2 text-[11px] font-semibold tracking-wider uppercase"><span class="flex-1">Recent in this folder</span> <button type="button" class="cursor-pointer text-small font-normal tracking-normal text-link normal-case hover:text-link-active">View all</button></div> <!></div>`,
      )),
      (ev = G(
        `<div class="pointer-events-auto mt-5 w-full max-w-80"><!></div>`,
      )),
      (tv = G(
        `<div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center text-muted"><!> <!> <!> <!></div>`,
      )),
      (nv = G(
        `<div class="mt-1.5 flex items-center gap-2 text-small first:mt-0"><!> <span class="font-semibold text-fg">Hermes</span></div>`,
      )),
      (rv = G(`<span class="shrink-0 tabular-nums opacity-80"> </span>`)),
      (iv = G(
        `<button type="button" class="ctx-chip ctx-chip-view pr-[7px] pl-[3px]" title="Click to view"><!> <span class="truncate"> </span> <!></button>`,
      )),
      (av = G(`<span><!> <span class="truncate"> </span></span>`)),
      (ov = G(`<div></div>`)),
      (sv = G(`<span class="at-mention"> </span>`)),
      (cv = G(`<span class="text-small text-muted">not sent</span>`)),
      (lv = G(
        `<span class="text-small text-muted">sent while Hermes worked · Hermes reads it at its next step</span>`,
      )),
      (uv = G(
        `<div class="mt-3 ml-10 flex flex-col items-end gap-0.5 self-end first:mt-0"><!> <div></div> <!> <div class="user-foot flex items-center justify-end"><button type="button" class="reply-act user-copy-btn" aria-label="Copy prompt" title="Copy prompt"><svg class="size-3" viewBox="0 0 16 16" aria-hidden="true"><rect x="5" y="5" width="8.5" height="8.5" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.3"></rect><path d="M3 10.5V3.5A1.5 1.5 0 0 1 4.5 2h6" fill="none" stroke="currentColor" stroke-width="1.3"></path></svg> <span> </span></button></div></div>`,
      )),
      (dv = G(`<div><!></div>`)),
      (fv = G(`<!> <!>`, 1)),
      (pv = G(
        `<button type="button" class="btn btn-float absolute bottom-2 left-1/2 -translate-x-1/2"><span aria-hidden="true">↓</span> Jump to latest</button>`,
      )),
      (mv = G(
        `<div class="relative min-h-0 flex-1"><!> <div class="h-full overflow-y-auto"><div class="mx-auto flex w-full max-w-4xl flex-col gap-2.5 px-4 py-4" role="log" aria-live="polite" aria-label="Conversation with Hermes"></div></div> <!></div>`,
      )),
      yi([`click`]));
  });
function gv(e, t) {
  let n = jo(t, `class`, 3, `size-4`);
  var r = Fi(),
    i = L(r),
    a = (e) => {
      var t = _v();
      (B(() => X(t, 0, Y([`shrink-0`, n()]))), K(e, t));
    },
    o = (e) => {
      var t = vv();
      (B(() => X(t, 0, Y([`shrink-0`, n()]))), K(e, t));
    },
    s = (e) => {
      var r = Bv(),
        i = I(r),
        a = (e) => {
          K(e, yv());
        },
        o = (e) => {
          K(e, bv());
        },
        s = (e) => {
          K(e, xv());
        },
        c = (e) => {
          var t = Sv();
          (ze(3), K(e, t));
        },
        l = (e) => {
          K(e, Cv());
        },
        u = (e) => {
          K(e, wv());
        },
        d = (e) => {
          K(e, Tv());
        },
        f = (e) => {
          K(e, Ev());
        },
        p = (e) => {
          K(e, Dv());
        },
        m = (e) => {
          K(e, Ov());
        },
        h = (e) => {
          K(e, kv());
        },
        g = (e) => {
          var t = Av();
          (ze(), K(e, t));
        },
        _ = (e) => {
          K(e, jv());
        },
        v = (e) => {
          var t = Mv();
          (ze(), K(e, t));
        },
        y = (e) => {
          K(e, Nv());
        },
        b = (e) => {
          K(e, Pv());
        },
        x = (e) => {
          var t = Fv();
          (ze(), K(e, t));
        },
        S = (e) => {
          K(e, Iv());
        },
        ee = (e) => {
          K(e, Lv());
        },
        te = (e) => {
          K(e, Rv());
        },
        ne = (e) => {
          K(e, zv());
        },
        re = (e) => {
          K(e, Xq());
        };
      (J(i, (e) => {
        t.name === `chat`
          ? e(a)
          : t.name === `learning`
            ? e(o, 1)
            : t.name === `capabilities`
              ? e(s, 2)
              : t.name === `agents`
                ? e(c, 3)
                : t.name === `pencil`
                  ? e(l, 4)
                  : t.name === `plus`
                    ? e(u, 5)
                    : t.name === `swap`
                      ? e(d, 6)
                      : t.name === `minus`
                        ? e(f, 7)
                        : t.name === `check`
                          ? e(p, 8)
                          : t.name === `cross`
                            ? e(m, 9)
                            : t.name === `circle`
                              ? e(h, 10)
                              : t.name === `spin`
                                ? e(g, 11)
                                : t.name === `copy`
                                  ? e(_, 12)
                                  : t.name === `search`
                                    ? e(v, 13)
                                    : t.name === `chevron`
                                      ? e(y, 14)
                                      : t.name === `hub`
                                        ? e(b, 15)
                                        : t.name === `person`
                                          ? e(x, 16)
                                          : t.name === `package`
                                            ? e(S, 17)
                                            : t.name === `plug`
                                              ? e(ee, 18)
                                              : t.name === `refresh`
                                                ? e(te, 19)
                                                : t.name === `terminal`
                                                  ? e(re, 21)
                                                  : t.name === `shield` &&
                                                    e(ne, 20);
      }),
        k(r),
        B(() => X(r, 0, Y([`shrink-0`, n()]))),
        K(e, r));
    };
  (J(i, (e) => {
    t.name === `sparkle` ? e(a) : t.name === `memory` ? e(o, 1) : e(s, -1);
  }),
    K(e, r));
}
var _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Xq,
  Bv,
  Vv = o(() => {
    (Vo(),
      Lo(),
      (_v = Ni(
        `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 6Q10 14 18 14Q10 14 10 22Q10 14 2 14Q10 14 10 6Z"></path><path opacity="0.75" d="M18.5 2Q18.5 5.5 22 5.5Q18.5 5.5 18.5 9Q18.5 5.5 15 5.5Q18.5 5.5 18.5 2Z"></path></svg>`,
      )),
      (vv = Ni(
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path></svg>`,
      )),
      (yv = Ni(`<path d="M2.5 3.5h11v7.5H7.5l-3 2.5v-2.5h-2z"></path>`)),
      (bv = Ni(
        `<path d="M8 1.8Q8.6 7.4 14.2 8Q8.6 8.6 8 14.2Q7.4 8.6 1.8 8Q7.4 7.4 8 1.8Z"></path>`,
      )),
      (xv = Ni(
        `<path d="M6 2.5h4v2a1.5 1.5 0 0 0 3 0V6h1.5v4h-2a1.5 1.5 0 0 0 0 3h2v1.5H10v-1.5a1.5 1.5 0 0 0-3 0v1.5H2.5V10H4a1.5 1.5 0 0 0 0-3H2.5V2.5z"></path>`,
      )),
      (Sv = Ni(
        `<circle cx="8" cy="3.8" r="1.8"></circle><circle cx="3.8" cy="12.2" r="1.8"></circle><circle cx="12.2" cy="12.2" r="1.8"></circle><path d="M8 5.6V8M8 8l-3 2.7M8 8l3 2.7"></path>`,
        1,
      )),
      (Cv = Ni(`<path d="M3 13l1-3 7-7 2 2-7 7z"></path>`)),
      (wv = Ni(`<path d="M8 3v10M3 8h10"></path>`)),
      (Tv = Ni(`<path d="M3 5.5h8.5L9.5 3.5M13 10.5H4.5l2 2"></path>`)),
      (Ev = Ni(`<path d="M3 8h10"></path>`)),
      (Dv = Ni(`<path d="M3.5 8.5l3 3 6-7" stroke-width="1.7"></path>`)),
      (Ov = Ni(
        `<path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke-width="1.7"></path>`,
      )),
      (kv = Ni(`<circle cx="8" cy="8" r="5"></circle>`)),
      (Av = Ni(
        `<circle cx="8" cy="8" r="5" opacity="0.3"></circle><path d="M8 3a5 5 0 0 1 5 5" stroke-width="1.7" class="origin-center animate-spin"></path>`,
        1,
      )),
      (jv = Ni(`<path d="M5.5 5.5h8v8h-8zM2.5 10.5v-8h8"></path>`)),
      (Mv = Ni(
        `<circle cx="7" cy="7" r="4.5"></circle><path d="M10.5 10.5L14 14"></path>`,
        1,
      )),
      (Nv = Ni(`<path d="M6 4l4 4-4 4"></path>`)),
      (Pv = Ni(
        `<path d="M4.5 11.5a3 3 0 0 1 .4-6 4 4 0 0 1 7.6 1 2.5 2.5 0 0 1-.5 5M8 8v5.5M6 11.5l2 2 2-2"></path>`,
      )),
      (Fv = Ni(
        `<circle cx="8" cy="5.5" r="2.5"></circle><path d="M3 14c.6-2.8 2.6-4 5-4s4.4 1.2 5 4"></path>`,
        1,
      )),
      (Iv = Ni(
        `<path d="M2.5 5L8 2.5 13.5 5v6L8 13.5 2.5 11zM2.5 5L8 7.5 13.5 5M8 7.5v6"></path>`,
      )),
      (Lv = Ni(
        `<path d="M6 2v3M10 2v3M4.5 5h7v3a3.5 3.5 0 0 1-7 0zM8 11.5V14"></path>`,
      )),
      (Rv = Ni(`<path d="M13 8a5 5 0 1 1-1.5-3.6M13 2.5v2.8h-2.8"></path>`)),
      (zv = Ni(`<path d="M8 2l5 2v4c0 3-2.2 5-5 6-2.8-1-5-3-5-6V4z"></path>`)),
      (Xq = Ni(`<path d="M3 4.5l4 3.5-4 3.5M9 12h4"></path>`)),
      (Bv = Ni(
        `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><!></svg>`,
      )));
  });
function Hv(e, t) {
  pt(t, !0);
  let n = N(() => $.panels?.learning.unseen ?? 0),
    r = N(() => $.panels?.agents.running.length ?? 0),
    i = N(() =>
      t.waiting && t.busy
        ? `waiting for your approval`
        : t.busy
          ? `Hermes is working`
          : void 0,
    ),
    a = P(!1),
    o = P(void 0),
    s = 0;
  function c() {
    H(o) &&
      (H(a)
        ? H(o).clientWidth >= s && F(a, !1)
        : ((s = H(o).scrollWidth),
          H(o).scrollWidth > H(o).clientWidth + 1 && F(a, !0)));
  }
  (cr(() => {
    if (!H(o)) return;
    let e = new ResizeObserver(() => c());
    return (e.observe(H(o)), () => e.disconnect());
  }),
    cr(() => {
      (H(a), H(n), H(r), H(i), $.tab, Gr().then(c));
    }));
  function l(e) {
    let t = ms.findIndex((e) => e.id === $.tab),
      n = -1;
    e.key === `ArrowRight`
      ? (n = (t + 1) % ms.length)
      : e.key === `ArrowLeft`
        ? (n = (t - 1 + ms.length) % ms.length)
        : e.key === `Home`
          ? (n = 0)
          : e.key === `End` && (n = ms.length - 1);
    let r = ms[n];
    r &&
      (e.preventDefault(),
      $.setTab(r.id),
      Gr().then(() => (__env.root?.getElementById ? __env.root.getElementById(gs(r.id)) : (__env.root ?? document).querySelector(`#${CSS.escape(gs(r.id))}`))?.focus()));
  }
  function u(e, t) {
    return e === `chat` && H(i) && $.tab !== `chat`
      ? `${t}, ${H(i)}`
      : e === `learning` && H(n) > 0 && $.tab !== `learning`
        ? `${t}, ${H(n)} changed since you last looked`
        : e === `agents` && H(r) > 0 && $.tab !== `agents`
          ? `${t}, ${H(r)} running`
          : t;
  }
  var d = qv();
  (da(
    d,
    21,
    () => ms,
    (e) => e.id,
    (e, o) => {
      let s = N(() => $.tab === H(o).id),
        c = N(() => u(H(o).id, H(o).label));
      var d = Kv(),
        f = I(d);
      gv(f, {
        get name() {
          return H(o).id;
        },
      });
      var p = z(f, 2),
        m = (e) => {
          var t = Uv(),
            n = R(t, !0);
          (B(() => q(n, H(o).label)), K(e, t));
        };
      J(p, (e) => {
        H(a) || e(m);
      });
      var h = z(p, 2),
        g = (e) => {
          var n = Wv();
          (B(() =>
            X(
              n,
              1,
              Y([
                `tab-dot size-[7px] shrink-0 rounded-full border border-hc`,
                t.waiting ? `bg-warning` : `animate-pulse bg-progress`,
              ]),
            ),
          ),
            K(e, n));
        },
        _ = (e) => {
          var t = Gv(),
            r = R(t, !0);
          (B(() => q(r, H(n))), K(e, t));
        },
        v = (e) => {
          var t = Gv(),
            n = R(t, !0);
          (B(() => q(n, H(r))), K(e, t));
        };
      (J(h, (e) => {
        H(o).id === `chat` && H(i) && !H(s)
          ? e(g)
          : H(o).id === `learning` && H(n) > 0 && !H(s)
            ? e(_, 1)
            : H(o).id === `agents` && H(r) > 0 && !H(s) && e(v, 2);
      }),
        k(d),
        B(
          (e, t) => {
            (Z(d, `id`, e),
              Z(d, `aria-selected`, H(s)),
              Z(d, `aria-controls`, t),
              Z(d, `aria-label`, H(c)),
              Z(d, `tabindex`, H(s) ? 0 : -1),
              Z(d, `data-compact`, H(a) || void 0),
              Z(d, `title`, H(a) || H(c) !== H(o).label ? H(c) : void 0));
          },
          [() => gs(H(o).id), () => _s(H(o).id)],
        ),
        W(`click`, d, () => $.setTab(H(o).id)),
        W(`keydown`, d, l),
        K(e, d));
    },
  ),
    k(d),
    _o(
      d,
      (e) => F(o, e),
      () => H(o),
    ),
    K(e, d),
    mt());
}
var Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv = o(() => {
    (Vo(),
      Lo(),
      zo(),
      Hs(),
      Ss(),
      Vv(),
      (Uv = G(`<span> </span>`)),
      (Wv = G(`<span aria-hidden="true"></span>`)),
      (Gv = G(`<span class="tab-badge" aria-hidden="true"> </span>`)),
      (Kv = G(
        `<button type="button" role="tab" class="view-tab"><!> <!> <!></button>`,
      )),
      (qv = G(
        `<div role="tablist" aria-label="Hermes Studio" class="flex shrink-0 overflow-hidden border-b border-border px-1.5"></div>`,
      )),
      yi([`click`, `keydown`]));
  });
function Yv(e, t) {
  pt(t, !0);
  let n = (e, t = C, n = C) => {
      var r = ey();
      (da(
        r,
        21,
        () => t().tasks,
        ca,
        (e, t) => {
          let r = N(() => fs(H(t).status, n()));
          var o = $v(),
            s = I(o);
          {
            let e = N(() => [`mt-0.5 size-3.5`, i[H(r)].cls]);
            gv(s, {
              get name() {
                return i[H(r)].icon;
              },
              get class() {
                return H(e);
              },
            });
          }
          var c = z(s, 2),
            l = (e) => {
              var n = Xv(),
                r = R(n, !0);
              (B(() => q(r, H(t).goal)),
                W(`click`, n, () => $.openPanel(H(t).key)),
                K(e, n));
            },
            u = (e) => {
              var n = Zv(),
                r = R(n, !0);
              (B(() => q(r, H(t).goal)), K(e, n));
            };
          J(c, (e) => {
            H(t).key ? e(l) : e(u, -1);
          });
          var d = z(c, 2),
            f = (e) => {
              var t = Qv(),
                n = R(t, !0);
              (B(() => {
                (X(
                  t,
                  1,
                  Y([
                    `shrink-0`,
                    H(r) === `running` ? `text-link` : `text-muted`,
                  ]),
                ),
                  q(n, a[H(r)]));
              }),
                K(e, t));
            };
          (J(d, (e) => {
            a[H(r)] && e(f);
          }),
            k(o),
            K(e, o));
        },
      ),
        k(r),
        B(() => X(r, 1, Y([`flex flex-col gap-1.5`, n() && `pl-7`]))),
        K(e, r));
    },
    r = P(Ln({})),
    i = {
      done: { icon: `check`, cls: `text-success` },
      failed: { icon: `cross`, cls: `text-error` },
      running: { icon: `spin`, cls: `text-link` },
      waiting: { icon: `circle`, cls: `text-muted` },
      unknown: { icon: `circle`, cls: `text-muted` },
    },
    a = {
      done: `done`,
      failed: `failed`,
      running: `running`,
      waiting: `waiting`,
      unknown: ``,
    },
    o = (e) =>
      e.startedAt !== void 0 && e.completedAt !== void 0
        ? `took ${Nc(e.completedAt - e.startedAt)}`
        : void 0;
  var s = sy(),
    c = I(s),
    l = R(z(I(c)));
  k(c);
  var u = z(c, 2),
    d = (e) => {
      K(e, ty());
    };
  J(u, (e) => {
    t.agents.running.length === 0 && e(d);
  });
  var f = z(u, 2);
  da(
    f,
    17,
    () => t.agents.running,
    (e) => e.id,
    (e, r) => {
      var i = ny(),
        a = I(i),
        o = I(a);
      gv(o, { name: `spin`, class: `mt-0.5 size-[18px] text-link` });
      var s = z(o, 2),
        c = I(s),
        l = R(c, !0),
        u = R(z(c, 2));
      (k(s), k(a));
      var d = z(a, 2);
      (n(
        d,
        () => H(r),
        () => !0,
      ),
        k(i),
        B(
          (e, t) => {
            (q(l, H(r).goal), q(u, `${e ?? ``}${t ?? ``}`));
          },
          [
            () => ps(H(r)),
            () =>
              H(r).startedAt === void 0
                ? ``
                : ` · started ${Ac(H(r).startedAt, t.now).toLowerCase()}`,
          ],
        ),
        K(e, i));
    },
  );
  var p = z(f, 2),
    m = R(z(I(p)));
  k(p);
  var h = z(p, 2),
    g = (e) => {
      K(e, ry());
    },
    _ = (e) => {
      var i = oy();
      (da(
        i,
        21,
        () => t.agents.recent,
        (e) => e.id,
        (e, i) => {
          let a = N(() => H(r)[H(i).id] === !0);
          var s = ay(),
            c = I(s),
            l = I(c);
          {
            let e = N(() => (H(i).failed ? `cross` : `check`)),
              t = N(() => [
                `mt-0.5 size-4`,
                H(i).failed ? `text-error` : `text-success`,
              ]);
            gv(l, {
              get name() {
                return H(e);
              },
              get class() {
                return H(t);
              },
            });
          }
          var u = z(l, 2),
            d = I(u),
            f = R(d, !0),
            p = R(z(d, 2), !0);
          k(u);
          var m = z(u, 2);
          {
            let e = N(() => [
              `mt-0.5 size-3.5 text-muted transition-transform`,
              H(a) && `rotate-90`,
            ]);
            gv(m, {
              name: `chevron`,
              get class() {
                return H(e);
              },
            });
          }
          k(c);
          var h = z(c, 2),
            g = (e) => {
              var t = iy(),
                r = I(t);
              (n(
                r,
                () => H(i),
                () => !1,
              ),
                k(t),
                K(e, t));
            };
          (J(h, (e) => {
            H(a) && e(g);
          }),
            k(s),
            B(
              (e) => {
                (Z(c, `aria-expanded`, H(a)), q(f, H(i).goal), q(p, e));
              },
              [
                () =>
                  [ps(H(i)), o(H(i)), Ac(H(i).startedAt, t.now)]
                    .filter(Boolean)
                    .join(` · `),
              ],
            ),
            W(`click`, c, () => F(r, { ...H(r), [H(i).id]: !H(a) }, !0)),
            K(e, s));
        },
      ),
        k(i),
        K(e, i));
    };
  (J(h, (e) => {
    t.agents.recent.length === 0 ? e(g) : e(_, -1);
  }),
    ze(2),
    k(s),
    B(() => {
      (q(l, `· ${t.agents.running.length ?? ``}`),
        q(m, `· ${t.agents.recent.length ?? ``} in the last 7 days`));
    }),
    K(e, s),
    mt());
}
var Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy = o(() => {
    (Vo(),
      Lo(),
      Ic(),
      Hs(),
      Ss(),
      Vv(),
      (Xv = G(
        `<button type="button" class="link-btn min-w-0 flex-1 text-fg! wrap-break-word" title="Open its log"> </button>`,
      )),
      (Zv = G(`<span class="min-w-0 flex-1 wrap-break-word"> </span>`)),
      (Qv = G(`<span> </span>`)),
      ($v = G(
        `<li class="flex items-start gap-2 text-small"><!> <!> <!></li>`,
      )),
      (ey = G(`<ul></ul>`)),
      (ty = G(
        `<p class="px-0.5 text-small text-muted">No subagents running.</p>`,
      )),
      (ny = G(
        `<div class="panel-card flex flex-col gap-2.5 border-link/40! px-3.5 py-3"><div class="flex gap-2.5"><!> <div class="flex min-w-0 flex-col gap-px"><span class="font-semibold wrap-break-word"> </span> <span class="text-small text-muted"> </span></div></div> <!></div>`,
      )),
      (ry = G(
        `<p class="px-0.5 text-small text-muted">No subagents finished in the last 7 days.</p>`,
      )),
      (iy = G(`<div class="px-3 pb-2.5 pl-9"><!></div>`)),
      (ay = G(
        `<div><button type="button" class="panel-row-btn"><!> <span class="flex min-w-0 flex-1 flex-col gap-px"><span class="wrap-break-word"> </span> <span class="text-small text-muted"> </span></span> <!></button> <!></div>`,
      )),
      (oy = G(`<div class="panel-card"></div>`)),
      (sy = G(
        `<div class="flex flex-col gap-3 p-3.5"><h2 class="section-label">Running now <span class="aside"> </span></h2> <!> <!> <h2 class="section-label">Recent <span class="aside"> </span></h2> <!> <p class="px-0.5 text-small text-muted">Subagents started from a chat here show as steps in that chat.</p></div>`,
      )),
      yi([`click`]));
  });
function ly(e, t) {
  let n = Ii();
  pt(t, !0);
  let r = P(``),
    i = P(!0),
    a;
  function o(e = !1) {
    window.clearTimeout(a);
    let t = () => $.searchHub(H(r), H(i));
    e ? t() : (a = window.setTimeout(t, 350));
  }
  cr(() => {
    $.hub.asked || $.searchHub(``, !0);
  });
  let s = {
      official: `text-link`,
      trusted: `text-success`,
      community: `text-muted`,
    },
    c = (e) => {
      let t = e.identifier.split(`/`),
        n =
          e.source === `official`
            ? ``
            : t
                .slice(+(e.source === `skills.sh`), -1)
                .slice(0, 2)
                .join(`/`);
      return n ? `${e.source} · ${n}` : e.source;
    };
  var l = Cy(),
    u = I(l),
    d = I(u);
  gv(d, {
    name: `search`,
    class: `pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted`,
  });
  var f = z(d, 2),
    p = z(f, 2);
  (Ja(p), k(u));
  var m = z(u, 2);
  (da(
    m,
    20,
    () => [
      { on: !0, label: `★ Official` },
      { on: !1, label: `All sources` },
    ],
    (e) => e.label,
    (e, t) => {
      var n = uy(),
        r = R(n, !0);
      (B(() => {
        (Z(n, `aria-pressed`, H(i) === t.on),
          X(
            n,
            1,
            Y([
              `inline-flex h-6 cursor-pointer items-center rounded-full border px-2.5 text-small whitespace-nowrap`,
              H(i) === t.on
                ? `border-focus bg-selected text-selected-fg`
                : `border-input-border bg-transparent hover:bg-toolbar-hover`,
            ]),
          ),
          q(r, t.label));
      }),
        W(`click`, n, () => {
          (F(i, t.on, !0), o(!0));
        }),
        K(e, n));
    },
  ),
    k(m));
  var h = z(m, 2),
    g = I(h),
    _ = z(g),
    v = (e) => {
      gv(e, { name: `spin`, class: `size-3` });
    };
  (J(_, (e) => {
    $.hub.loading && e(v);
  }),
    k(h));
  var y = z(h, 2),
    b = (e) => {
      var t = dy(),
        n = R(t, !0);
      (B(() => q(n, $.hub.error)), K(e, t));
    },
    x = (e) => {
      K(e, fy());
    },
    S = N(() => !H(r).trim() && !H(i)),
    ee = (e) => {
      K(e, py());
    },
    te = (e) => {
      var n = Sy(),
        r = L(n);
      (da(
        r,
        21,
        () => $.hub.items,
        (e) => e.identifier,
        (e, n) => {
          let r = N(() => $.installs.get(H(n).identifier)),
            i = N(
              () => t.installed.has(H(n).name) || H(r)?.state === `installed`,
            );
          var a = xy(),
            o = I(a),
            l = I(o),
            u = I(l),
            d = R(u, !0),
            f = z(u, 2),
            p = R(f, !0),
            m = z(f, 2),
            h = R(m, !0);
          k(l);
          var g = z(l, 2),
            _ = (e) => {
              var t = my(),
                r = R(t, !0);
              (B(() => q(r, H(n).description)), K(e, t));
            };
          J(g, (e) => {
            H(n).description && e(_);
          });
          var v = z(g, 2),
            y = (e) => {
              var t = hy();
              (gv(I(t), { name: `shield`, class: `size-3` }),
                ze(),
                k(t),
                K(e, t));
            },
            b = (e) => {
              K(e, gy());
            },
            x = (e) => {
              var t = _y(),
                n = I(t);
              gv(n, { name: `shield`, class: `mt-0.5 size-3` });
              var i = R(z(n), !0);
              (k(t), B(() => q(i, H(r).message)), K(e, t));
            };
          (J(v, (e) => {
            H(r)?.state === `installing`
              ? e(y)
              : H(r)?.state === `installed`
                ? e(b, 1)
                : H(r)?.state === `failed` && e(x, 2);
          }),
            k(o));
          var S = z(o, 2),
            ee = I(S),
            te = (e) => {
              var t = vy();
              (gv(I(t), { name: `check`, class: `size-3.5` }),
                ze(),
                k(t),
                K(e, t));
            },
            ne = (e) => {
              var t = by(),
                i = I(t),
                a = (e) => {
                  var t = yy();
                  (gv(L(t), { name: `spin`, class: `size-3.5` }),
                    ze(),
                    K(e, t));
                },
                o = (e) => {
                  K(e, Pi(`Install`));
                };
              (J(i, (e) => {
                H(r)?.state === `installing` ? e(a) : e(o, -1);
              }),
                k(t),
                B(() => {
                  ((t.disabled = H(r)?.state === `installing`),
                    Z(t, `aria-label`, `Install ${H(n).name ?? ``}`));
                }),
                W(`click`, t, () => $.installSkill(H(n).identifier)),
                K(e, t));
            };
          (J(ee, (e) => {
            H(i) ? e(te) : e(ne, -1);
          }),
            k(S),
            k(a),
            B(
              (e) => {
                (q(d, H(n).name),
                  X(f, 1, Y([`trust`, s[H(n).trust]])),
                  q(p, bs[H(n).trust]),
                  Z(m, `title`, H(n).identifier),
                  q(h, e));
              },
              [() => c(H(n))],
            ),
            K(e, a));
        },
      ),
        k(r),
        ze(2),
        B(() => Z(r, `aria-busy`, $.hub.loading)),
        K(e, n));
    };
  (J(y, (e) => {
    $.hub.error
      ? e(b)
      : H(S)
        ? e(x, 1)
        : $.hub.items.length === 0 && !$.hub.loading
          ? e(ee, 2)
          : $.hub.items.length > 0 && e(te, 3);
  }),
    k(l),
    B(
      (e) => {
        (Z(f, `for`, n), Z(p, `id`, n), q(g, `${e ?? ``} `));
      },
      [
        () =>
          H(r).trim()
            ? `Results · “${H(r).trim()}”`
            : H(i)
              ? `Official skills from Nous Research`
              : `Search all sources`,
      ],
    ),
    W(`input`, p, () => o()),
    W(`keydown`, p, (e) => e.key === `Enter` && o(!0)),
    so(
      p,
      () => H(r),
      (e) => F(r, e),
    ),
    K(e, l),
    mt());
}
var uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      Ss(),
      Vv(),
      (uy = G(`<button type="button"> </button>`)),
      (dy = G(`<p class="px-0.5 text-small text-error"> </p>`)),
      (fy = G(
        `<p class="px-0.5 text-small text-muted">Type what the skill should do, for example “pdf” or “testing”.</p>`,
      )),
      (py = G(`<p class="px-0.5 text-small text-muted">No skills found.</p>`)),
      (my = G(`<span class="line-clamp-2 text-small text-muted"> </span>`)),
      (hy = G(
        `<span class="flex items-center gap-1 text-[11.5px] text-link" role="status"><!> Hermes is checking it for safety…</span>`,
      )),
      (gy = G(
        `<span class="text-[11.5px] text-muted" role="status">Hermes can use it from your next new chat.</span>`,
      )),
      (_y = G(
        `<span class="flex items-start gap-1 text-[11.5px] text-error" role="status"><!><span class="min-w-0 wrap-break-word"> </span></span>`,
      )),
      (vy = G(
        `<span class="inline-flex items-center gap-1 text-small text-success"><!> Installed</span>`,
      )),
      (yy = G(`<!> Installing`, 1)),
      (by = G(
        `<button type="button" class="btn btn-secondary py-0.5! text-small"><!></button>`,
      )),
      (xy = G(
        `<div class="flex gap-2.5 px-3 py-2.5"><div class="flex min-w-0 flex-1 flex-col gap-0.5"><span class="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5"><span class="min-w-0 truncate font-mono font-semibold"> </span> <span> </span> <span class="min-w-0 truncate text-[11.5px] text-muted"> </span></span> <!> <!></div> <div class="shrink-0 pt-px"><!></div></div>`,
      )),
      (Sy = G(
        `<div class="panel-card"></div> <p class="px-0.5 text-[11.5px] text-muted">Hermes checks every skill for risky code before it installs it. New skills work from your next new chat.</p>`,
        1,
      )),
      (Cy = G(
        `<div class="flex flex-col gap-3"><div class="relative"><!> <label class="sr-only">Search the Skills Hub</label> <input type="search" maxlength="100" placeholder="Search the Skills Hub…" class="h-7 w-full rounded-md border border-input-border bg-input py-0 pr-2.5 pl-8 text-input-fg outline-none placeholder:text-placeholder focus:outline-1 focus:-outline-offset-1 focus:outline-focus"/></div> <div class="flex flex-wrap gap-1.5" role="group" aria-label="Where to look"></div> <h2 class="section-label"> <!></h2> <!></div>`,
      )),
      yi([`input`, `keydown`, `click`]));
  });
function Ty(e, t) {
  let n = Ii();
  pt(t, !0);
  let r = P(`installed`),
    i = N(() => new Set(t.capabilities.skills.map((e) => e.name))),
    a = N(() => t.capabilities.skills),
    o = (e) => H(a).filter((t) => t.source === e).length,
    s = N(() => xs.filter((e) => o(e.id) > 0)),
    c = P(null),
    l = N(
      () =>
        H(c) ?? (H(a).some((e) => e.source === `learned`) ? `learned` : `all`),
    ),
    u = P(``),
    d = N(() => ds(H(a), H(l), H(u))),
    f = P(!1),
    p = N(() => (H(f) || H(u).trim() ? H(d) : H(d).slice(0, 8))),
    m = { learned: `sparkle`, hub: `hub`, local: `person`, builtin: `package` };
  var h = By(),
    g = I(h),
    _ = I(g),
    v = I(_),
    y = R(v),
    b = z(v, 2);
  k(_);
  var x = z(_, 4),
    S = I(x);
  {
    let e = N(() => ($.refreshing ? `spin` : `refresh`));
    gv(S, {
      get name() {
        return H(e);
      },
      class: `size-4`,
    });
  }
  (k(x), k(g));
  var ee = z(g, 2),
    te = (e) => {
      ly(e, {
        get installed() {
          return H(i);
        },
      });
    },
    ne = (e) => {
      var r = zy(),
        i = L(r),
        h = I(i);
      gv(h, {
        name: `search`,
        class: `pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted`,
      });
      var g = z(h, 2),
        _ = z(g, 2);
      (Ja(_), k(i));
      var v = z(i, 2);
      (da(
        v,
        21,
        () => [{ id: `all`, label: `All` }, ...H(s)],
        (e) => e.id,
        (e, t) => {
          let n = N(() => H(l) === H(t).id);
          var r = Ey(),
            i = I(r),
            s = (e) => {
              gv(e, { name: `learning`, class: `size-3` });
            };
          J(i, (e) => {
            H(t).id === `learned` && e(s);
          });
          var u = z(i),
            d = z(u),
            p = R(d, !0);
          (k(r),
            B(
              (e) => {
                (Z(r, `aria-pressed`, H(n)),
                  X(
                    r,
                    1,
                    Y([
                      `inline-flex h-6 cursor-pointer items-center gap-1.5 rounded-full border px-2.5 text-small whitespace-nowrap`,
                      H(n)
                        ? `border-focus bg-selected text-selected-fg`
                        : `border-input-border bg-transparent hover:bg-toolbar-hover`,
                    ]),
                  ),
                  q(u, ` ${H(t).label ?? ``} `),
                  X(
                    d,
                    1,
                    Y([`tabular-nums`, H(n) ? `opacity-80` : `text-muted`]),
                  ),
                  q(p, e));
              },
              [() => (H(t).id === `all` ? H(a).length : o(H(t).id))],
            ),
            W(`click`, r, () => {
              (F(c, H(t).id, !0), F(f, !1));
            }),
            K(e, r));
        },
      ),
        k(v));
      var y = z(v, 2),
        b = (e) => {
          var t = Dy(),
            n = R(t, !0);
          (B(
            (e) => q(n, e),
            [
              () =>
                H(u).trim()
                  ? `No skills match “${H(u).trim()}”.`
                  : `No skills here.`,
            ],
          ),
            K(e, t));
        },
        x = (e) => {
          var t = My(),
            n = I(t);
          da(
            n,
            17,
            () => H(p),
            (e) => e.key,
            (e, t) => {
              var n = Ay(),
                r = I(n);
              {
                let e = N(() => [
                  `mt-0.5 size-4`,
                  H(t).source === `learned` ? `text-hermes` : `text-muted`,
                ]);
                gv(r, {
                  get name() {
                    return m[H(t).source];
                  },
                  get class() {
                    return H(e);
                  },
                });
              }
              var i = z(r, 2),
                a = I(i),
                o = I(a),
                s = R(o, !0),
                c = z(o, 2),
                l = (e) => {
                  var n = Oy(),
                    r = R(n, !0);
                  (B(() => q(r, H(t).category)), K(e, n));
                };
              (J(c, (e) => {
                H(t).category && e(l);
              }),
                k(a));
              var u = z(a, 2),
                d = (e) => {
                  var n = ky(),
                    r = R(n, !0);
                  (B(() => q(r, H(t).description)), K(e, n));
                };
              (J(u, (e) => {
                H(t).description && e(d);
              }),
                k(i),
                k(n),
                B(() => q(s, H(t).name)),
                W(`click`, n, () => $.openPanel(H(t).key)),
                K(e, n));
            },
          );
          var r = z(n, 2),
            i = (e) => {
              var t = jy(),
                n = R(t, !0);
              (B(() => q(n, H(f) ? `Show fewer` : `Show all ${H(d).length}`)),
                W(`click`, t, () => F(f, !H(f))),
                K(e, t));
            },
            a = N(() => !H(u).trim() && H(d).length > 8);
          (J(r, (e) => {
            H(a) && e(i);
          }),
            k(t),
            K(e, t));
        };
      J(y, (e) => {
        H(d).length === 0 ? e(b) : e(x, -1);
      });
      var S = z(y, 2),
        ee = R(z(I(S)));
      k(S);
      var te = z(S, 2),
        ne = (e) => {
          K(e, Ny());
        },
        C = (e) => {
          var n = Fy();
          (da(
            I(n),
            17,
            () => t.capabilities.mcp,
            (e) => e.name,
            (e, t) => {
              var n = Py(),
                r = I(n),
                i = z(r, 2),
                a = R(i, !0),
                o = R(z(i, 2));
              (k(n),
                B(() => {
                  (X(
                    r,
                    1,
                    Y([
                      `size-[7px] shrink-0 rounded-full border border-hc`,
                      H(t).enabled ? `bg-success` : `bg-muted`,
                    ]),
                  ),
                    q(a, H(t).name),
                    q(
                      o,
                      `${H(t).transport ?? ``} · ${H(t).enabled ? `on` : `off`}`,
                    ));
                }),
                K(e, n));
            },
          ),
            ze(2),
            k(n),
            K(e, n));
        };
      J(te, (e) => {
        t.capabilities.mcp.length === 0 ? e(ne) : e(C, -1);
      });
      var w = z(te, 4),
        re = (e) => {
          K(e, Iy());
        },
        T = (e) => {
          var n = Ry();
          (da(
            n,
            21,
            () => t.capabilities.plugins,
            (e) => e.name,
            (e, t) => {
              var n = Ly(),
                r = I(n),
                i = R(r, !0),
                a = R(z(r, 2), !0);
              (k(n),
                B(() => {
                  (q(i, H(t).name), q(a, H(t).enabled ? `on` : `off`));
                }),
                K(e, n));
            },
          ),
            k(n),
            K(e, n));
        };
      (J(w, (e) => {
        t.capabilities.plugins.length === 0 ? e(re) : e(T, -1);
      }),
        B(() => {
          (Z(g, `for`, n),
            Z(_, `id`, n),
            Z(_, `placeholder`, `Filter ${H(a).length ?? ``} skills`),
            q(ee, `· ${t.capabilities.mcp.length ?? ``}`));
        }),
        so(
          _,
          () => H(u),
          (e) => F(u, e),
        ),
        K(e, r));
    };
  (J(ee, (e) => {
    H(r) === `more` ? e(te) : e(ne, -1);
  }),
    k(h),
    B(() => {
      (Z(v, `aria-pressed`, H(r) === `installed`),
        q(y, `Installed · ${H(a).length ?? ``}`),
        Z(b, `aria-pressed`, H(r) === `more`),
        (x.disabled = $.refreshing));
    }),
    W(`click`, v, () => F(r, `installed`)),
    W(`click`, b, () => F(r, `more`)),
    W(`click`, x, () => $.refreshPanels()),
    K(e, h),
    mt());
}
var Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      Ss(),
      wy(),
      Vv(),
      (Ey = G(`<button type="button"><!> <span> </span></button>`)),
      (Dy = G(`<p class="px-0.5 text-small text-muted"> </p>`)),
      (Oy = G(
        `<span class="min-w-0 truncate text-[11.5px] text-muted"> </span>`,
      )),
      (ky = G(`<span class="line-clamp-2 text-small text-muted"> </span>`)),
      (Ay = G(
        `<button type="button" class="panel-row-btn" title="Open its SKILL.md"><!> <span class="flex min-w-0 flex-col gap-px"><span class="flex min-w-0 items-baseline gap-2"><span class="max-w-full shrink-0 truncate font-mono"> </span> <!></span> <!></span></button>`,
      )),
      (jy = G(
        `<button type="button" class="panel-row-btn text-small text-link!"> </button>`,
      )),
      (My = G(`<div class="panel-card"><!> <!></div>`)),
      (Ny = G(
        `<p class="px-0.5 text-small text-muted">None set up in Hermes's config.yaml.</p>`,
      )),
      (Py = G(
        `<div class="flex items-center gap-2 px-3 py-2 text-small"><span aria-hidden="true"></span> <span class="min-w-0 truncate font-mono"> </span> <span class="ml-auto shrink-0 text-muted"> </span></div>`,
      )),
      (Fy = G(
        `<div class="panel-card"><!> <div class="px-3 py-1.5 text-small text-muted">From config.yaml. Only the names are read.</div></div>`,
      )),
      (Iy = G(
        `<p class="px-0.5 text-small text-muted">None added. Hermes's own bundled plugins are not listed.</p>`,
      )),
      (Ly = G(
        `<div class="flex items-center gap-2 px-3 py-2 text-small"><span class="min-w-0 truncate font-mono"> </span> <span class="ml-auto shrink-0 text-muted"> </span></div>`,
      )),
      (Ry = G(`<div class="panel-card"></div>`)),
      (zy = G(
        `<div class="relative"><!> <label class="sr-only">Filter skills</label> <input type="text" class="h-7 w-full rounded-md border border-input-border bg-input py-0 pr-2.5 pl-8 text-input-fg outline-none placeholder:text-placeholder focus:outline-1 focus:-outline-offset-1 focus:outline-focus"/></div> <div class="flex flex-wrap gap-1.5" role="group" aria-label="Where the skills come from"></div> <!> <h2 class="section-label">Connectors (MCP) <span class="aside"> </span></h2> <!> <h2 class="section-label">Plugins</h2> <!>`,
        1,
      )),
      (By = G(
        `<div class="flex flex-col gap-3 p-3.5"><div class="flex items-center gap-2"><div class="seg" role="group" aria-label="Skills"><button type="button"> </button> <button type="button">Get more</button></div> <span class="flex-1"></span> <button type="button" class="icon-btn" aria-label="Refresh: read Hermes's skills again" title="Read Hermes's skills again"><!></button></div> <!></div>`,
      )),
      yi([`click`]));
  });
function Hy(e, t) {
  pt(t, !0);
  let n = P(!1),
    r = N(() => (H(n) ? t.learning.items : t.learning.items.slice(0, 6))),
    i = { new: `New skill`, learned: `Learned`, improved: `Improved` },
    a = N(() =>
      t.curator.state === `off`
        ? `Off`
        : t.curator.state === `paused`
          ? `Paused`
          : `On · ${t.curator.every}`,
    ),
    o = N(() =>
      t.curator.nextRunAt === void 0
        ? void 0
        : t.curator.nextRunAt <= t.now
          ? `due, when Hermes has been idle ${t.curator.minIdleHours} h`
          : `from ${Mc(t.curator.nextRunAt, t.now)}, when idle ${t.curator.minIdleHours} h`,
    );
  var s = rb(),
    c = I(s),
    l = I(c);
  gv(l, { name: `sparkle`, class: `size-7 text-hermes` });
  var u = z(l, 2),
    d = I(u),
    f = R(d, !0),
    p = R(z(d, 2));
  (k(u), k(c));
  var m = z(c, 4),
    h = (e) => {
      K(e, Uy());
    },
    g = (e) => {
      var a = eb(),
        o = I(a);
      da(
        o,
        17,
        () => H(r),
        (e) => e.skill,
        (e, n) => {
          var r = Zy(),
            a = I(r),
            o = (e) => {
              gv(e, { name: `pencil`, class: `mt-0.5 size-4 text-muted` });
            },
            s = (e) => {
              gv(e, {
                name: `sparkle`,
                class: `mt-0.5 size-[18px] text-hermes`,
              });
            };
          J(a, (e) => {
            H(n).kind === `improved` ? e(o) : e(s, -1);
          });
          var c = z(a, 2),
            l = I(c),
            u = I(l),
            d = R(u, !0),
            f = z(u, 2),
            p = (e) => {
              var t = Wy(),
                r = R(t, !0);
              (B(() => q(r, H(n).skill)),
                W(`click`, t, () => $.openPanel(H(n).open)),
                K(e, t));
            },
            m = (e) => {
              var t = Gy(),
                r = R(t, !0);
              (B(() => q(r, H(n).skill)), K(e, t));
            };
          J(f, (e) => {
            H(n).open ? e(p) : e(m, -1);
          });
          var h = z(f, 2),
            g = (e) => {
              var t = Ky(),
                r = I(t),
                i = R(r),
                a = R(z(r, 2));
              (k(t),
                B(() => {
                  (q(i, `+${H(n).diff.added ?? ``}`),
                    q(a, `−${H(n).diff.removed ?? ``}`));
                }),
                K(e, t));
            };
          (J(h, (e) => {
            H(n).diff?.added !== void 0 && e(g);
          }),
            k(l));
          var _ = z(l, 2),
            v = (e) => {
              var t = qy(),
                r = R(t, !0);
              (B(() => q(r, H(n).description)), K(e, t));
            };
          J(_, (e) => {
            H(n).kind !== `improved` && H(n).description && e(v);
          });
          var y = z(_, 2),
            b = I(y),
            x = (e) => {
              var t = Jy(),
                r = L(t),
                i = R(r, !0);
              (ze(2),
                B((e) => q(i, e), [() => vs(H(n).changes, `change`)]),
                W(`click`, r, () => $.openPanel(H(n).history)),
                K(e, t));
            };
          J(b, (e) => {
            H(n).changes > 1 && e(x);
          });
          var S = z(b, 2),
            ee = R(S, !0),
            te = z(S, 2),
            ne = (e) => {
              var t = Yy(),
                r = z(L(t), 2),
                i = R(r, !0);
              (B(() => q(i, H(n).session.title)),
                W(`click`, r, () => $.openPanel(H(n).session?.key)),
                K(e, t));
            };
          J(te, (e) => {
            H(n).session && e(ne);
          });
          var C = z(te, 2),
            w = (e) => {
              var t = Xy();
              (W(`click`, z(L(t), 2), () => $.openPanel(H(n).diff?.key)),
                K(e, t));
            };
          (J(C, (e) => {
            H(n).diff && H(n).kind === `improved` && e(w);
          }),
            k(y),
            k(c),
            k(r),
            B(
              (e) => {
                (q(d, i[H(n).kind]), q(ee, e));
              },
              [() => Ac(H(n).lastChangeAt, t.now)],
            ),
            K(e, r));
        },
      );
      var s = z(o, 2),
        c = (e) => {
          var r = $y(),
            i = I(r),
            a = (e) => {
              var r = Qy(),
                i = R(r, !0);
              (B(() =>
                q(
                  i,
                  H(n)
                    ? `Show fewer`
                    : `Show ${t.learning.items.length - 6} more`,
                ),
              ),
                W(`click`, r, () => F(n, !H(n))),
                K(e, r));
            };
          J(i, (e) => {
            t.learning.items.length > 6 && e(a);
          });
          var o = z(i, 2),
            s = (e) => {
              var n = Qy(),
                r = R(n);
              (B(
                (e) =>
                  q(
                    r,
                    `All ${t.learning.totalChanges ?? ``} changes${e ?? ``}`,
                  ),
                [
                  () =>
                    t.learning.firstChangeAt
                      ? ` since ${Ac(t.learning.firstChangeAt, t.now)}`
                      : ``,
                ],
              ),
                W(`click`, n, () => $.openPanel(t.learning.allChanges)),
                K(e, n));
            };
          (J(o, (e) => {
            t.learning.allChanges && e(s);
          }),
            k(r),
            K(e, r));
        };
      (J(s, (e) => {
        (t.learning.items.length > 6 || t.learning.allChanges) && e(c);
      }),
        k(a),
        K(e, a));
    };
  J(m, (e) => {
    t.learning.items.length === 0 ? e(h) : e(g, -1);
  });
  var _ = z(m, 4),
    v = I(_),
    y = I(v),
    b = R(z(y, 2), !0);
  (ze(2), k(v));
  var x = z(v, 2),
    S = I(x),
    ee = R(z(I(S), 2));
  k(S);
  var te = z(S, 2),
    ne = (e) => {
      var t = tb(),
        n = R(z(I(t), 2), !0);
      (k(t), B(() => q(n, H(o))), K(e, t));
    };
  (J(te, (e) => {
    H(o) && e(ne);
  }),
    k(x));
  var C = z(x, 2),
    w = I(C),
    re = (e) => {
      var n = nb(),
        r = L(n);
      (ze(2), W(`click`, r, () => $.openPanel(t.curator.report)), K(e, n));
    };
  J(w, (e) => {
    t.curator.report && e(re);
  });
  var T = R(z(w, 2));
  (k(C),
    k(_),
    k(s),
    B(
      (e, n, r, i) => {
        (q(f, e),
          q(p, `${n ?? ``} learned in total · ${r ?? ``} available`),
          X(
            y,
            1,
            Y([
              `size-2 shrink-0 rounded-full border border-hc`,
              t.curator.state === `on`
                ? `bg-success`
                : t.curator.state === `paused`
                  ? `bg-warning`
                  : `bg-muted`,
            ]),
          ),
          q(b, H(a)),
          q(
            ee,
            `${i ?? ``}${t.curator.summary ? ` · ${t.curator.summary}` : ``}`,
          ),
          q(
            T,
            `merging similar skills is ${t.curator.consolidate ? `on` : `off`}`,
          ));
      },
      [
        () => ss(t.learning),
        () => vs(t.learning.learnedTotal, `skill`),
        () => vs(t.learning.skillsTotal, `skill`),
        () =>
          t.curator.lastRunAt === void 0
            ? `Not run yet`
            : Ac(t.curator.lastRunAt, t.now),
      ],
    ),
    K(e, s),
    mt());
}
var Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib = o(() => {
    (Vo(),
      Lo(),
      Ic(),
      Hs(),
      Ss(),
      Vv(),
      (Uy = G(
        `<p class="px-0.5 text-small text-muted">Hermes has not learned or changed a skill in the last 30 days.</p>`,
      )),
      (Wy = G(
        `<button type="button" class="link-btn min-w-0 font-mono text-fg! break-all" title="Open its SKILL.md"> </button>`,
      )),
      (Gy = G(`<span class="min-w-0 font-mono break-all"> </span>`)),
      (Ky = G(
        `<span class="text-small tabular-nums" title="Lines in the latest change"><span class="text-success"> </span> <span class="text-error"> </span></span>`,
      )),
      (qy = G(`<span class="line-clamp-2 text-small text-muted"> </span>`)),
      (Jy = G(
        `<button type="button" class="link-btn"> </button> <span class="text-muted">·</span>`,
        1,
      )),
      (Yy = G(
        `<span class="text-muted">· from</span> <button type="button" class="link-btn"> </button>`,
        1,
      )),
      (Xy = G(
        `<span class="text-muted">·</span> <button type="button" class="link-btn">see the diff</button>`,
        1,
      )),
      (Zy = G(
        `<div class="flex gap-2.5 px-3 py-2.5"><!> <div class="flex min-w-0 flex-col gap-0.5"><span class="flex min-w-0 flex-wrap items-baseline gap-x-1.5"><span class="font-semibold"> </span> <!> <!></span> <!> <span class="text-small"><!> <span class="text-muted"> </span> <!> <!></span></div></div>`,
      )),
      (Qy = G(`<button type="button" class="link-btn"> </button>`)),
      ($y = G(
        `<div class="flex flex-wrap gap-x-3 px-3 py-2 text-small"><!> <!></div>`,
      )),
      (eb = G(`<div class="panel-card"><!> <!></div>`)),
      (tb = G(
        `<div><div class="text-muted">Next run</div> <div> </div></div>`,
      )),
      (nb = G(
        `<button type="button" class="link-btn">Open the last report</button> <span class="text-muted">·</span>`,
        1,
      )),
      (rb = G(
        `<div class="flex flex-col gap-3 p-3.5"><div class="flex items-center gap-3.5 rounded-lg border border-hermes/35 bg-hermes/8 px-3.5 py-3"><!> <div class="flex min-w-0 flex-col gap-0.5"><span class="font-semibold"> </span> <span class="text-small text-muted"> </span></div></div> <h2 class="section-label">Recent changes</h2> <!> <h2 class="section-label">Curator</h2> <div class="panel-card flex flex-col gap-2 px-3.5 py-3"><div class="flex flex-wrap items-center gap-x-2"><span aria-hidden="true"></span> <span class="font-semibold"> </span> <span class="text-small text-muted">· tidies the skills Hermes learned</span></div> <div class="grid grid-cols-2 gap-2 text-small"><div><div class="text-muted">Last run</div> <div> </div></div> <!></div> <div class="text-small"><!> <span class="text-muted"> </span></div></div></div>`,
      )),
      yi([`click`]));
  });
function ab(e, t) {
  let n = Ii();
  pt(t, !0);
  let r = (e, n = C) => {
      var r = sb(),
        i = I(r),
        a = (e) => {
          var r = ob(),
            i = R(r);
          (B((e) => q(i, `${e ?? ``} ·`), [() => Ac(n().createdAt, t.now)]),
            K(e, r));
        };
      J(i, (e) => {
        n().createdAt !== void 0 && e(a);
      });
      var o = z(i, 2);
      (k(r), W(`click`, o, () => $.openPanel(n().key)), K(e, r));
    },
    i = (e, t = C, n = C, r = C, i = C) => {
      let a = N(() => i().map((e) => $.reviewing.get(e.id))),
        o = N(() =>
          H(a).includes(`approve`)
            ? `approve`
            : H(a).includes(`reject`)
              ? `reject`
              : void 0,
        );
      var s = lb(),
        c = I(s),
        l = (e) => {
          var r = cb(),
            i = I(r);
          {
            let e = N(() => (H(o) === `approve` ? `spin` : `check`));
            gv(i, {
              get name() {
                return H(e);
              },
              class: `size-3.5`,
            });
          }
          var a = z(i);
          (k(r),
            B(() => {
              ((r.disabled = !!H(o)),
                q(a, ` ${(H(o) === `approve` ? `Saving…` : t()) ?? ``}`));
            }),
            W(`click`, r, function (...e) {
              n()?.apply(this, e);
            }),
            K(e, r));
        };
      J(c, (e) => {
        n() && e(l);
      });
      var u = z(c, 2),
        d = I(u);
      {
        let e = N(() => (H(o) === `reject` ? `spin` : `cross`));
        gv(d, {
          get name() {
            return H(e);
          },
          class: `size-3.5`,
        });
      }
      var f = z(d);
      (k(u),
        k(s),
        B(() => {
          ((u.disabled = !!H(o)),
            q(f, ` ${(H(o) === `reject` ? `Rejecting…` : r()) ?? ``}`));
        }),
        W(`click`, u, () => y(i())),
        K(e, s));
    },
    a = (e, t = C) => {
      var n = hb(),
        a = I(n);
      {
        let e = N(() =>
            t().action === `add`
              ? `plus`
              : t().action === `remove`
                ? `minus`
                : `swap`,
          ),
          n = N(() => [
            `mt-0.5 size-4`,
            t().action === `add` ? `text-success` : `text-muted`,
          ]);
        gv(a, {
          get name() {
            return H(e);
          },
          get class() {
            return H(n);
          },
        });
      }
      var o = z(a, 2),
        s = I(o),
        c = I(s),
        l = R(c, !0),
        u = z(c, 2),
        d = (e) => {
          K(e, ub());
        };
      (J(u, (e) => {
        t().stale && e(d);
      }),
        k(s));
      var f = z(s, 2),
        p = (e) => {
          var n = db(),
            r = L(n),
            i = R(r, !0),
            a = R(z(r, 2), !0);
          (B(() => {
            (q(i, t().changed ? `It was written for` : `Now it says`),
              q(a, t().replaces));
          }),
            K(e, n));
        };
      J(f, (e) => {
        t().replaces && e(p);
      });
      var m = z(f, 2),
        h = (e) => {
          var n = pb(),
            r = L(n),
            i = (e) => {
              K(e, fb());
            };
          J(r, (e) => {
            t().replaces && e(i);
          });
          var a = R(z(r, 2), !0);
          (B(() => q(a, t().text)), K(e, n));
        };
      J(m, (e) => {
        (t().action !== `remove` || !t().replaces) && e(h);
      });
      var g = z(m, 2);
      r(g, t);
      var _ = z(g, 2),
        y = (e) => {
          var n = mb(),
            r = L(n),
            a = R(r, !0),
            o = z(r, 2);
          (i(
            o,
            () => ``,
            () => null,
            () => `Reject`,
            () => [t()],
          ),
            B((e) => q(a, e), [() => ee(t())]),
            K(e, n));
        },
        b = (e) => {
          i(
            e,
            () => `Approve`,
            () => () => v(t()),
            () => `Reject`,
            () => [t()],
          );
        };
      (J(_, (e) => {
        t().stale ? e(y) : e(b, -1);
      }),
        k(o),
        k(n),
        B((e) => q(l, e), [() => cs(t())]),
        K(e, n));
    },
    o = (e, t = C, a = C) => {
      let o = N(() => g(t(), a())),
        s = N(() => a().find((e) => e.id === H(o)) ?? a()[0]),
        c = N(() => a()[0]),
        l = N(() => a().every((e) => e.stale));
      var u = Fi(),
        d = L(u),
        f = (e) => {
          var t = _b(),
            n = I(t);
          gv(n, { name: `swap`, class: `mt-0.5 size-4 text-muted` });
          var o = z(n, 2),
            s = I(o),
            l = I(s),
            u = R(l, !0),
            d = R(z(l, 2));
          (ze(2), k(s));
          var f = z(s, 2),
            p = (e) => {
              var t = db(),
                n = L(t),
                r = R(n, !0),
                i = R(z(n, 2), !0);
              (B(() => {
                (q(r, H(c).changed ? `They were written for` : `Now it says`),
                  q(i, H(c).replaces));
              }),
                K(e, t));
            };
          J(f, (e) => {
            H(c).replaces && e(p);
          });
          var m = z(f, 2);
          (da(
            m,
            21,
            a,
            (e) => e.id,
            (e, t) => {
              var n = gb(),
                i = I(n),
                a = z(i),
                o = I(a);
              (r(o, () => H(t)),
                k(a),
                k(n),
                B(() => q(i, `${H(t).text ?? ``} `)),
                K(e, n));
            },
          ),
            k(m));
          var h = z(m, 2),
            g = R(h, !0),
            _ = z(h, 2);
          (i(
            _,
            () => ``,
            () => null,
            () => `Reject all ${a().length}`,
            a,
          ),
            k(o),
            k(t),
            B(
              (e, t) => {
                (q(u, e), q(d, `· ${a().length ?? ``} versions`), q(g, t));
              },
              [() => cs(H(c)), () => ee(H(c))],
            ),
            K(e, t));
        },
        p = (e) => {
          var o = bb(),
            l = I(o);
          gv(l, { name: `swap`, class: `mt-0.5 size-4 text-muted` });
          var u = z(l, 2),
            d = I(u),
            f = I(d),
            p = R(f, !0),
            m = R(z(f, 2));
          k(d);
          var g = z(d, 2),
            _ = (e) => {
              var t = vb(),
                n = R(z(L(t), 2), !0);
              (B(() => q(n, H(c).replaces)), K(e, t));
            };
          J(g, (e) => {
            H(c).replaces && e(_);
          });
          var y = z(g, 4);
          (da(
            y,
            21,
            a,
            (e) => e.id,
            (e, i) => {
              var a = yb(),
                o = I(a);
              Ja(o);
              var c = z(o, 2),
                l = I(c),
                u = R(l, !0),
                d = z(l, 2);
              (r(d, () => H(i)),
                k(c),
                k(a),
                B(
                  (e) => {
                    (X(
                      a,
                      1,
                      Y([
                        `memory-choice`,
                        H(i).id === H(s).id && `memory-choice-on`,
                      ]),
                    ),
                      Z(o, `name`, `${n}-${t() ?? ``}`),
                      Ya(o, H(i).id),
                      Xa(o, H(i).id === H(s).id),
                      (o.disabled = e),
                      q(u, H(i).text));
                  },
                  [() => !!$.reviewing.get(H(i).id)],
                ),
                W(`change`, o, () => h.set(t(), H(i).id)),
                K(e, a));
            },
          ),
            k(y));
          var b = z(y, 2);
          (i(
            b,
            () => `Use this one`,
            () =>
              H(s).stale
                ? null
                : () =>
                    v(
                      H(s),
                      a().filter((e) => e.id !== H(s).id),
                    ),
            () => `Reject all ${a().length}`,
            a,
          ),
            k(u),
            k(o),
            B(
              (e) => {
                (q(p, e), q(m, `· ${a().length ?? ``} versions, pick one`));
              },
              [() => cs(H(c))],
            ),
            K(e, o));
        };
      (J(d, (e) => {
        H(s) && H(c) && H(l) ? e(f) : H(s) && H(c) && e(p, 1);
      }),
        K(e, u));
    },
    s = (e, t = C, n = C, r = C, i = C, a = C, o = C) => {
      var s = Tb(),
        l = L(s),
        u = I(l),
        d = z(u, 3),
        f = R(d, !0);
      k(l);
      var p = z(l, 2),
        m = (e) => {
          var t = xb(),
            n = R(t, !0);
          (B(() => q(n, o())), K(e, t));
        },
        h = (e) => {
          var t = wb(),
            n = I(t);
          da(
            n,
            17,
            () => (i() ? r().entries : r().entries.slice(0, c)),
            (e) => e.key,
            (e, t) => {
              var n = Sb(),
                r = R(I(n), !0);
              (k(n),
                B(
                  (e) => {
                    (Z(n, `title`, H(t).text), q(r, e));
                  },
                  [() => H(t).text.split(/\r?\n/, 1)[0]],
                ),
                W(`click`, n, () => $.openPanel(H(t).key)),
                K(e, n));
            },
          );
          var o = z(n, 2),
            s = (e) => {
              var t = Cb(),
                n = R(t, !0);
              (B(() =>
                q(n, i() ? `Show fewer` : `Show all ${r().entries.length}`),
              ),
                W(`click`, t, function (...e) {
                  a()?.apply(this, e);
                }),
                K(e, t));
            };
          (J(o, (e) => {
            r().entries.length > c && e(s);
          }),
            k(t),
            K(e, t));
        };
      (J(p, (e) => {
        r().entries.length === 0 ? e(m) : e(h, -1);
      }),
        B(() => {
          (q(u, `${t() ?? ``} `), q(f, n()));
        }),
        W(`click`, d, () => $.openPanel(r().open)),
        K(e, s));
    },
    c = 4,
    l = P(!1),
    u = P(!1),
    d = P(null),
    f;
  async function p() {
    try {
      (await navigator.clipboard.writeText(`/memory pending`), F(d, `done`));
    } catch {
      F(d, `failed`);
    }
    (window.clearTimeout(f), (f = window.setTimeout(() => F(d, null), 1500)));
  }
  let m = N(() => ls(t.memory.pending)),
    h = new Jo(),
    g = (e, t) => {
      let n = h.get(e);
      return t.some((e) => e.id === n) ? n : (t[0]?.id ?? ``);
    },
    _ = (e) => e.some((e) => $.reviewing.has(e.id));
  function v(e, t = []) {
    $.reviewMemory(
      e.id,
      t.map((e) => e.id),
      us(e, 0) + ` Hermes uses it from your next new chat.`,
    );
  }
  function y(e) {
    $.reviewMemory(
      void 0,
      e.map((e) => e.id),
      us(void 0, e.length),
    );
  }
  let b = P(!1),
    x;
  function S() {
    if (!H(b)) {
      (F(b, !0),
        window.clearTimeout(x),
        (x = window.setTimeout(() => F(b, !1), 4e3)));
      return;
    }
    (F(b, !1), y(t.memory.pending));
  }
  let ee = (e) =>
      e.changed
        ? `That entry has changed since Hermes proposed this, so Hermes can't apply it. Reject it; Hermes proposes a new change if it still matters.`
        : `Made by an older Hermes, which can't apply it. Reject it; Hermes proposes it again if it still matters.`,
    te = N(() => [
      { title: `Notes`, file: t.memory.notes, name: `MEMORY.md` },
      { title: `About you`, file: t.memory.profile, name: `USER.md` },
    ]),
    ne = (e) => (e.limit > 0 ? Math.min(100, (e.chars / e.limit) * 100) : 0);
  var w = Mb(),
    re = I(w),
    T = z(I(re), 2),
    E = I(T);
  {
    let e = N(() => ($.refreshing ? `spin` : `refresh`));
    gv(E, {
      get name() {
        return H(e);
      },
      class: `size-4`,
    });
  }
  (k(T), k(re));
  var ie = z(re, 2);
  (da(
    ie,
    21,
    () => H(te),
    (e) => e.name,
    (e, t) => {
      var n = Eb(),
        r = I(n),
        i = I(r),
        a = R(i, !0),
        o = R(z(i, 2), !0);
      k(r);
      var s = z(r, 2);
      Z(s, `aria-valuemin`, 0);
      var c = I(s);
      let l;
      k(s);
      var u = R(z(s, 2));
      (k(n),
        B(
          (e, r, i, d, f, p, m, h) => {
            (Z(n, `title`, `Open ${H(t).name ?? ``}`),
              q(a, H(t).title),
              q(o, e),
              Z(
                s,
                `aria-label`,
                `${H(t).title ?? ``}: ${r ?? ``} of ${i ?? ``} characters`,
              ),
              Z(s, `aria-valuemax`, H(t).file.limit),
              Z(s, `aria-valuenow`, d),
              X(c, 1, f),
              (l = Ga(c, ``, l, { width: p })),
              q(u, `${m ?? ``} of ${h ?? ``} chars`));
          },
          [
            () => vs(H(t).file.entries.length, `entry`, `entries`),
            () => ys(H(t).file.chars),
            () => ys(H(t).file.limit),
            () => Math.min(H(t).file.chars, H(t).file.limit),
            () =>
              Y([
                `block h-full`,
                ne(H(t).file) >= 90 ? `bg-warning` : `bg-link`,
              ]),
            () => `${ne(H(t).file) ?? ``}%`,
            () => ys(H(t).file.chars),
            () => ys(H(t).file.limit),
          ],
        ),
        W(`click`, n, () => $.openPanel(H(t).file.open)),
        K(e, n));
    },
  ),
    k(ie));
  var ae = z(ie, 2),
    oe = (e) => {
      var n = jb(),
        r = L(n),
        i = I(r),
        s = z(I(i)),
        c = (e) => {
          var n = Db(),
            r = R(n, !0);
          (B(() => q(r, t.memory.pending.length)), K(e, n));
        };
      (J(s, (e) => {
        t.memory.pending.length > 0 && e(c);
      }),
        k(i));
      var l = z(i, 2),
        u = (e) => {
          var n = Ob(),
            r = R(n, !0);
          (B(
            (e) => {
              (X(
                n,
                1,
                Y([`btn btn-ghost py-0! text-small`, H(b) && `text-error!`]),
              ),
                (n.disabled = e),
                q(
                  r,
                  H(b)
                    ? `Reject all ${t.memory.pending.length}?`
                    : `Reject all`,
                ));
            },
            [() => _(t.memory.pending)],
          ),
            W(`click`, n, S),
            K(e, n));
        };
      (J(l, (e) => {
        t.memory.pending.length > 1 && e(u);
      }),
        k(r));
      var f = z(r, 2),
        h = I(f),
        g = (e) => {
          var t = kb(),
            n = I(t);
          {
            let e = N(() => ($.reviewNote.ok ? `check` : `cross`)),
              t = N(() => [
                `mt-0.5 size-3.5`,
                $.reviewNote.ok ? `text-success` : `text-error`,
              ]);
            gv(n, {
              get name() {
                return H(e);
              },
              get class() {
                return H(t);
              },
            });
          }
          var r = R(z(n, 2), !0);
          (k(t),
            B(() => {
              (X(
                t,
                1,
                Y([
                  `flex items-start gap-2.5 px-3 py-2.5 text-small`,
                  $.reviewNote.ok ? `bg-success/10` : `bg-error/10`,
                ]),
              ),
                q(r, $.reviewNote.text));
            }),
            K(e, t));
        };
      J(h, (e) => {
        $.reviewNote && e(g);
      });
      var v = z(h, 2);
      da(
        v,
        17,
        () => H(m),
        (e) => (e.kind === `one` ? e.row.id : e.group),
        (e, t) => {
          var n = Fi(),
            r = L(n),
            i = (e) => {
              a(e, () => H(t).row);
            },
            s = (e) => {
              o(
                e,
                () => H(t).group,
                () => H(t).rows,
              );
            };
          (J(r, (e) => {
            H(t).kind === `one` ? e(i) : e(s, -1);
          }),
            K(e, n));
        },
      );
      var y = z(v, 2),
        x = (e) => {
          var t = Ab(),
            n = z(I(t), 2);
          n.textContent = `/memory pending`;
          var r = z(n, 2),
            i = I(r);
          gv(i, { name: `copy`, class: `size-3` });
          var a = z(i);
          (k(r),
            k(t),
            B(() =>
              q(
                a,
                ` ${H(d) === `done` ? `Copied` : H(d) === `failed` ? `Copy failed` : `Copy`}`,
              ),
            ),
            W(`click`, r, p),
            K(e, t));
        };
      (J(y, (e) => {
        $.reviewUnavailable && t.memory.pending.length > 0 && e(x);
      }),
        k(f),
        K(e, n));
    };
  J(ae, (e) => {
    (t.memory.pending.length > 0 || $.reviewNote) && e(oe);
  });
  var D = z(ae, 2);
  (s(
    D,
    () => `Notes`,
    () => `MEMORY.md`,
    () => t.memory.notes,
    () => H(l),
    () => () => F(l, !H(l)),
    () => `No notes yet.`,
  ),
    s(
      z(D, 2),
      () => `About you`,
      () => `USER.md`,
      () => t.memory.profile,
      () => H(u),
      () => () => F(u, !H(u)),
      () => `Nothing about you yet.`,
    ),
    k(w),
    B(() => (T.disabled = $.refreshing)),
    W(`click`, T, () => $.refreshPanels()),
    K(e, w),
    mt());
}
var ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb = o(() => {
    (Vo(),
      Lo(),
      Ic(),
      ts(),
      Hs(),
      Ss(),
      Vv(),
      (ob = G(`<span class="text-muted"> </span>`)),
      (sb = G(
        `<span class="text-[11.5px]"><!> <button type="button" class="link-btn">see the change</button></span>`,
      )),
      (cb = G(
        `<button type="button" class="btn btn-primary py-0.5! text-small"><!> </button>`,
      )),
      (lb = G(
        `<div class="mt-1 flex flex-wrap items-center gap-1.5"><!> <button type="button" class="btn btn-secondary py-0.5! text-small"><!> </button></div>`,
      )),
      (ub = G(
        `<span class="rounded border border-warning/50 px-1.5 text-[10.5px] leading-4 text-warning">outdated</span>`,
      )),
      (db = G(
        `<span class="text-[11.5px] text-muted"> </span> <span class="memory-old line-clamp-4 text-small wrap-break-word"> </span>`,
        1,
      )),
      (fb = G(`<span class="text-[11.5px] text-muted">Change it to</span>`)),
      (pb = G(
        `<!> <span class="line-clamp-4 text-small wrap-break-word"> </span>`,
        1,
      )),
      (mb = G(`<span class="text-[11.5px] text-muted"> </span> <!>`, 1)),
      (hb = G(
        `<div class="flex gap-2.5 px-3 py-2.5"><!> <div class="flex min-w-0 flex-1 flex-col gap-1"><span class="flex flex-wrap items-center gap-x-1.5"><span class="font-semibold"> </span> <!></span> <!> <!> <!> <!></div></div>`,
      )),
      (gb = G(
        `<li class="border-l-2 border-border pl-2 text-small text-muted wrap-break-word"> <span class="block"><!></span></li>`,
      )),
      (_b = G(
        `<div class="flex gap-2.5 px-3 py-2.5"><!> <div class="flex min-w-0 flex-1 flex-col gap-1"><span class="flex flex-wrap items-center gap-x-1.5"><span class="font-semibold"> </span> <span class="text-small text-muted"> </span> <span class="rounded border border-warning/50 px-1.5 text-[10.5px] leading-4 text-warning">outdated</span></span> <!> <ul class="flex list-none flex-col gap-1 p-0"></ul> <span class="text-[11.5px] text-muted"> </span> <!></div></div>`,
      )),
      (vb = G(
        `<span class="text-[11.5px] text-muted">Now it says</span> <span class="memory-old line-clamp-4 text-small wrap-break-word"> </span>`,
        1,
      )),
      (yb = G(
        `<label><input type="radio"/> <span class="flex min-w-0 flex-col gap-0.5"><span class="text-small wrap-break-word"> </span> <!></span></label>`,
      )),
      (bb = G(
        `<div class="flex gap-2.5 px-3 py-2.5"><!> <div class="flex min-w-0 flex-1 flex-col gap-1"><span class="flex flex-wrap items-baseline gap-x-1.5"><span class="font-semibold"> </span> <span class="text-small text-muted"> </span></span> <!> <span class="text-[11.5px] text-muted">Change it to</span> <div role="radiogroup" aria-label="Versions of this change" class="flex flex-col gap-1.5"></div> <!></div></div>`,
      )),
      (xb = G(`<p class="px-0.5 text-small text-muted"> </p>`)),
      (Sb = G(
        `<button type="button" class="panel-row-btn text-small"><span class="min-w-0 flex-1 truncate"> </span></button>`,
      )),
      (Cb = G(
        `<button type="button" class="panel-row-btn text-small text-link!"> </button>`,
      )),
      (wb = G(`<div class="panel-card"><!> <!></div>`)),
      (Tb = G(
        `<h2 class="section-label"> <span class="aside">·</span> <button type="button" class="link-btn aside text-muted!"> </button></h2> <!>`,
        1,
      )),
      (Eb = G(
        `<button type="button" class="panel-card flex cursor-pointer flex-col gap-1.5 px-3 py-2.5 text-left hover:bg-hover"><span class="flex flex-wrap items-baseline gap-x-1.5"><span class="font-semibold"> </span> <span class="text-small text-muted"> </span></span> <span class="block h-1 overflow-hidden rounded-sm bg-fg/12" role="meter"><span></span></span> <span class="text-small text-muted tabular-nums"> </span></button>`,
      )),
      (Db = G(`<span class="tab-badge bg-muted! text-surface!"> </span>`)),
      (Ob = G(`<button type="button"> </button>`)),
      (kb = G(
        `<div role="status"><!> <span class="min-w-0 wrap-break-word"> </span></div>`,
      )),
      (Ab = G(
        `<div class="flex flex-wrap items-center gap-2 px-3 py-2 text-small"><span class="text-muted">Answer them in the Hermes CLI:</span> <code class="rounded bg-code-bg px-1.5 font-mono"></code> <button type="button" class="btn btn-secondary py-0! text-small"><!> </button></div>`,
      )),
      (jb = G(
        `<div class="flex items-center justify-between gap-2"><h2 class="section-label">Waiting for your OK <!></h2> <!></div> <div class="panel-card"><!> <!> <!></div>`,
        1,
      )),
      (Mb = G(
        `<div class="flex flex-col gap-3 p-3.5"><div class="flex items-center gap-2"><span class="min-w-0 flex-1 text-small text-muted">Hermes reads these at the start of every new chat.</span> <button type="button" class="icon-btn" aria-label="Refresh: read Hermes's memory again" title="Read Hermes's memory again"><!></button></div> <div class="grid grid-cols-2 gap-2.5"></div> <!> <!> <!></div>`,
      )),
      yi([`click`, `change`]));
  });
function Pb(e, t) {
  pt(t, !0);
  let n = N(() => $.panels),
    r = P(Ln(Date.now()));
  cr(() => {
    let e = window.setInterval(() => F(r, Date.now(), !0), 6e4);
    return () => window.clearInterval(e);
  });
  var i = Lb(),
    a = I(i),
    o = (e) => {
      K(e, Fb());
    },
    s = (e) => {
      var t = Ib(),
        r = R(t);
      (B(() =>
        q(
          r,
          `Hermes's folder was not found (${H(n).home ?? ``}). Set HERMES_HOME if Hermes keeps it elsewhere.`,
        ),
      ),
        K(e, t));
    },
    c = (e) => {
      Hy(e, {
        get learning() {
          return H(n).learning;
        },
        get curator() {
          return H(n).curator;
        },
        get now() {
          return H(r);
        },
      });
    },
    l = (e) => {
      ab(e, {
        get memory() {
          return H(n).memory;
        },
        get now() {
          return H(r);
        },
      });
    },
    u = (e) => {
      Ty(e, {
        get capabilities() {
          return H(n).capabilities;
        },
      });
    },
    d = (e) => {
      Yv(e, {
        get agents() {
          return H(n).agents;
        },
        get now() {
          return H(r);
        },
      });
    },
    f = (e) => {
      K(e, termMarker());
    };
  (J(a, (e) => {
    t.tab === `terminal`
      ? e(f, 5)
      : H(n)
        ? H(n).found
          ? t.tab === `learning`
            ? e(c, 2)
            : t.tab === `memory`
              ? e(l, 3)
              : t.tab === `capabilities`
                ? e(u, 4)
                : e(d, -1)
          : e(s, 1)
        : e(o);
  }),
    k(i),
    B(
      (e, t) => {
        (Z(i, `id`, e), Z(i, `aria-labelledby`, t));
      },
      [() => _s(t.tab), () => gs(t.tab)],
    ),
    K(e, i),
    mt());
}
var Fb,
  Ib,
  Lb,
  termMarker,
  Rb = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      Ss(),
      cy(),
      Vy(),
      ib(),
      Nb(),
      (Fb = G(
        `<p class="p-4 text-small text-muted">Reading Hermes's files…</p>`,
      )),
      (Ib = G(`<p class="p-4 text-small wrap-break-word text-muted"> </p>`)),
      (Lb = G(
        `<div role="tabpanel" class="absolute inset-0 overflow-y-auto"><!></div>`,
      )),
      (termMarker = G(`<div id="hs-terminal-marker"></div>`)));
  });
function zb(e, t) {
  pt(t, !0);
  let n = N(() => t.meta.queue ?? []);
  var r = Fi(),
    i = L(r),
    a = (e) => {
      var r = Kb(),
        i = I(r),
        a = I(i),
        o = z(I(a), 2),
        s = (e) => {
          K(e, Bb());
        },
        c = (e) => {
          K(e, Vb());
        };
      (J(o, (e) => {
        t.meta.busy ? e(s) : e(c, -1);
      }),
        k(a),
        da(
          z(a, 2),
          17,
          () => H(n),
          (e) => e.id,
          (e, n) => {
            var r = Gb(),
              i = I(r),
              a = R(i, !0),
              o = z(i, 2),
              s = (e) => {
                var t = Hb(),
                  r = R(t);
                (B(
                  (e) => {
                    (Z(t, `title`, e), q(r, `+${H(n).chips.length ?? ``}`));
                  },
                  [
                    () =>
                      H(n)
                        .chips.map((e) => e.label)
                        .join(`, `),
                  ],
                ),
                  K(e, t));
              };
            J(o, (e) => {
              H(n).chips?.length && e(s);
            });
            var c = z(o, 2),
              l = (e) => {
                var t = Ub();
                (W(`click`, t, () => $.sendQueuedNow(H(n).id)), K(e, t));
              },
              u = (e) => {
                var t = Wb();
                (W(`click`, t, () => $.sendQueuedNow(H(n).id)), K(e, t));
              };
            J(c, (e) => {
              t.meta.busy ? H(n).canSendNow && e(u, 1) : e(l);
            });
            var d = z(c, 2),
              f = z(d, 2);
            (k(r),
              B(() => q(a, H(n).text)),
              W(`click`, d, () => $.editQueued(H(n))),
              W(`click`, f, () => $.removeQueued(H(n).id)),
              K(e, r));
          },
        ),
        k(i),
        k(r),
        K(e, r));
    };
  (J(i, (e) => {
    H(n).length > 0 && e(a);
  }),
    K(e, r),
    mt());
}
var Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      (Bb = G(`<span>Queued · sends when Hermes is done</span>`)),
      (Vb = G(
        `<span>Queued · Hermes stopped — send it when you are ready</span>`,
      )),
      (Hb = G(`<span class="shrink-0 pt-px text-small text-muted"> </span>`)),
      (Ub = G(`<button type="button" class="queue-link">Send</button>`)),
      (Wb = G(
        `<button type="button" class="queue-link" title="Hand it to the reply Hermes is writing now: it reads it at its next step">Send now</button>`,
      )),
      (Gb = G(
        `<div class="flex min-w-0 items-start gap-1"><span class="line-clamp-2 min-w-0 flex-1 wrap-break-word whitespace-pre-wrap text-fg"> </span> <!> <!> <button type="button" class="row-act" aria-label="Edit the queued message" title="Edit: back into the text box"><svg class="size-3.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13l1-3 7-7 2 2-7 7z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"></path></svg></button> <button type="button" class="row-act" aria-label="Remove the queued message" title="Remove"><svg class="size-3" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button></div>`,
      )),
      (Kb = G(
        `<div class="mx-auto w-full max-w-4xl shrink-0 px-3 pb-1.5"><div class="flex flex-col gap-1 rounded-[10px] border border-input-border bg-input py-1.5 pr-1.5 pl-2.5" role="region" aria-label="Queued messages"><div class="flex items-center gap-1.5 text-small text-muted"><svg class="size-3 shrink-0" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.5h10M3 8h10M3 11.5h6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg> <!></div> <!></div></div>`,
      )),
      yi([`click`]));
  });
function Jb(e, t) {
  let n = Ii();
  pt(t, !0);
  let r = P(``),
    i = P(Ln(Date.now()));
  cr(() => {
    let e = window.setInterval(() => F(i, Date.now(), !0), 6e4);
    return () => window.clearInterval(e);
  });
  let a = N(() => $.sessions),
    o = N(() => Hd(H(a).items, $.background)),
    s = N(() => Vd(H(o), H(r))),
    c = N(() => $.background.filter((e) => Wd(e.state)).length),
    l = P(0),
    u = !1;
  cr(() => {
    if (u || H(a).items.length === 0) return;
    u = !0;
    let e = H(o).findIndex((e) => e.id === t.meta.sessionId);
    e >= 0 && !H(r) && F(l, e, !0);
  });
  let d = (e) => `${n}-${e}`,
    f;
  cr(() => {
    H(l) < 0 ||
      !f ||
      f
        .querySelector(`#${CSS.escape(d(H(l)))}`)
        ?.scrollIntoView({ block: `nearest` });
  });
  function p(e) {
    let t = H(s)[e];
    t && $.openSession(t.id);
  }
  let m = P(null),
    h = P(null),
    g = P(void 0);
  function _(e, n) {
    return (
      !Wd(e.state) &&
      !(n === `delete` && e.id === t.meta.sessionId && t.meta.busy)
    );
  }
  function v(e) {
    let t = H(s)[e];
    t &&
      _(t, `rename`) &&
      (F(h, null), F(m, { id: t.id, draft: t.title ?? `` }, !0));
  }
  function y(e) {
    let t = H(s)[e];
    t && _(t, `delete`) && (F(m, null), F(h, t.id, !0));
  }
  function b() {
    let e = H(m);
    if (!e) return;
    let t = e.draft.trim(),
      n = H(s).find((t) => t.id === e.id)?.title ?? ``;
    (t && t !== n && $.renameSession(e.id, t), F(m, null), H(g)?.focus());
  }
  function x() {
    (H(h) && $.deleteSession(H(h)), F(h, null), H(g)?.focus());
  }
  function S() {
    (F(m, null), F(h, null), H(g)?.focus());
  }
  function ee(e) {
    e.key === `Enter`
      ? (e.preventDefault(), b())
      : e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), S());
  }
  function te(e) {
    e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), S());
  }
  function ne(e) {
    switch (e.key) {
      case `ArrowDown`:
      case `ArrowUp`:
        (e.preventDefault(),
          F(l, ml(H(l), e.key === `ArrowDown` ? 1 : -1, H(s).length), !0));
        break;
      case `Enter`:
        (e.preventDefault(), p(H(l)));
        break;
      case `F2`:
        (e.preventDefault(), v(H(l)));
        break;
      case `Delete`:
        if (H(r)) return;
        (e.preventDefault(), y(H(l)));
        break;
      case `Escape`:
        (e.preventDefault(),
          e.stopPropagation(),
          H(r) ? F(r, ``) : $.closeSessions(`escape`));
        break;
      case `Tab`:
        $.closeSessions(`outside`);
    }
  }
  var C = ux(),
    w = I(C),
    re = z(I(w), 2);
  (Ja(re),
    _o(
      re,
      (e) => F(g, e),
      () => H(g),
    ),
    Ma(re, () => (e) => e.focus()),
    k(w));
  var T = z(w, 2),
    E = I(T),
    ie = (e) => {
      var t = Yb(),
        n = I(t),
        r = R(n),
        i = z(n, 2);
      (k(t),
        B(() => q(r, `Could not load the sessions: ${H(a).error ?? ``}`)),
        W(`click`, i, () => $.refreshSessions()),
        K(e, t));
    },
    ae = (e) => {
      var t = Xb(),
        n = R(t, !0);
      (B(() =>
        q(
          n,
          H(a).loading
            ? `Loading sessions…`
            : `No saved sessions in this folder yet.`,
        ),
      ),
        K(e, t));
    },
    oe = (e) => {
      var t = Xb(),
        n = R(t);
      (B(() => q(n, `No sessions match “${H(r) ?? ``}”.`)), K(e, t));
    };
  (J(E, (e) => {
    H(a).error
      ? e(ie)
      : H(o).length === 0
        ? e(ae, 1)
        : H(s).length === 0 && e(oe, 2);
  }),
    da(
      z(E, 2),
      19,
      () => H(s),
      (e) => e.id,
      (e, n, r) => {
        let a = N(() => H(n).id === t.meta.sessionId);
        var o = Fi(),
          s = L(o),
          c = (e) => {
            var t = Zb(),
              n = I(t);
            (Ja(n),
              Z(n, `maxlength`, 100),
              Ma(n, () => (e) => {
                (e.focus(), e.select());
              }));
            var r = z(n, 2),
              i = z(I(r), 2),
              a = z(i, 2);
            (k(r),
              k(t),
              W(`keydown`, n, ee),
              so(
                n,
                () => H(m).draft,
                (e) => (H(m).draft = e),
              ),
              W(`click`, i, S),
              W(`click`, a, b),
              K(e, t));
          },
          u = (e) => {
            var t = Qb(),
              r = I(t),
              i = R(r),
              a = z(r, 4),
              o = I(a);
            Ma(o, () => (e) => {
              queueMicrotask(() => e.focus());
            });
            var s = z(o, 2);
            (k(a),
              k(t),
              B(() =>
                q(i, `Delete “${H(n).title ?? `Untitled session` ?? ``}”?`),
              ),
              W(`keydown`, t, te),
              W(`click`, o, S),
              W(`click`, s, x),
              K(e, t));
          },
          f = (e) => {
            var t = ax(),
              o = I(t),
              s = R(o, !0),
              c = z(o, 2),
              u = (e) => {
                K(e, $b());
              },
              f = (e) => {
                var t = ex();
                (B(() =>
                  X(
                    t,
                    1,
                    Y([
                      `flex shrink-0 items-center gap-1.5 text-small`,
                      H(r) === H(l) ? `` : `text-link`,
                    ]),
                  ),
                ),
                  K(e, t));
              },
              m = (e) => {
                var t = tx(),
                  r = I(t),
                  i = z(r);
                (k(t),
                  B(() => {
                    (X(
                      t,
                      1,
                      Y([
                        `flex shrink-0 items-center gap-1.5 text-small`,
                        H(n).state === `done` ? `text-success` : `text-warning`,
                      ]),
                    ),
                      X(
                        r,
                        1,
                        Y([
                          `size-[7px] rounded-full border border-hc`,
                          H(n).state === `done` ? `bg-success` : `bg-warning`,
                        ]),
                      ),
                      q(
                        i,
                        ` ${H(n).state === `done` ? `finished` : `stopped`}`,
                      ));
                  }),
                  K(e, t));
              },
              h = (e) => {
                var t = rx(),
                  i = I(t),
                  a = z(i, 2),
                  o = (e) => {
                    var t = nx();
                    (B(() =>
                      Z(
                        t,
                        `aria-label`,
                        `Delete ${H(n).title ?? `Untitled session` ?? ``}`,
                      ),
                    ),
                      W(`click`, t, (e) => {
                        (e.stopPropagation(), y(H(r)));
                      }),
                      K(e, t));
                  },
                  s = N(() => _(H(n), `delete`));
                (J(a, (e) => {
                  H(s) && e(o);
                }),
                  k(t),
                  B(() =>
                    Z(
                      i,
                      `aria-label`,
                      `Rename ${H(n).title ?? `Untitled session` ?? ``}`,
                    ),
                  ),
                  W(`click`, i, (e) => {
                    (e.stopPropagation(), v(H(r)));
                  }),
                  K(e, t));
              },
              g = N(() => H(r) === H(l) && _(H(n), `rename`)),
              b = (e) => {
                var t = ix(),
                  o = R(t, !0);
                (B(
                  (e) => {
                    (X(
                      t,
                      1,
                      Y([
                        `shrink-0 text-small tabular-nums`,
                        H(r) === H(l) ? `opacity-80` : `text-muted`,
                      ]),
                    ),
                      q(o, e));
                  },
                  [() => (H(a) ? `now` : jc(Dc(H(n).updatedAt), H(i)))],
                ),
                  K(e, t));
              };
            (J(c, (e) => {
              H(n).state === `waiting`
                ? e(u)
                : H(n).state === `working`
                  ? e(f, 1)
                  : (H(n).state === `done` || H(n).state === `stopped`) &&
                      H(r) !== H(l)
                    ? e(m, 2)
                    : H(g)
                      ? e(h, 3)
                      : e(b, -1);
            }),
              k(t),
              B(
                (e) => {
                  (Z(t, `id`, e),
                    Z(t, `aria-selected`, H(r) === H(l)),
                    Z(t, `aria-current`, H(a) ? `true` : void 0),
                    X(
                      t,
                      1,
                      Y([
                        `flex h-8 cursor-pointer items-center gap-2.5 rounded-md px-2.5`,
                        H(r) === H(l) ? `bg-selected text-selected-fg` : ``,
                        H(a) &&
                          `font-semibold outline-1 -outline-offset-1 outline-hc-active`,
                      ]),
                    ),
                    Z(t, `title`, H(n).title ?? `Untitled session`),
                    q(s, H(n).title ?? `Untitled session`));
                },
                [() => d(H(r))],
              ),
              W(`pointermove`, t, () => F(l, H(r), !0)),
              W(`click`, t, () => p(H(r))),
              W(`keydown`, t, () => void 0),
              K(e, t));
          };
        (J(s, (e) => {
          H(m)?.id === H(n).id ? e(c) : H(h) === H(n).id ? e(u, 1) : e(f, -1);
        }),
          K(e, o));
      },
    ),
    k(T),
    _o(
      T,
      (e) => (f = e),
      () => f,
    ));
  var D = z(T, 2),
    se = (e) => {
      var t = ox(),
        n = R(t, !0);
      (B(() => {
        (X(
          t,
          1,
          Y([
            `shrink-0 rounded px-2 py-1 text-small`,
            $.sessionAction.ok ? `bg-hover` : `text-error`,
          ]),
        ),
          q(n, $.sessionAction.message));
      }),
        K(e, t));
    };
  J(D, (e) => {
    $.sessionAction && e(se);
  });
  var ce = z(D, 2),
    le = I(ce),
    ue = (e) => {
      var t = sx(),
        n = R(t, !0);
      (B(() => {
        ((t.disabled = H(a).loading),
          q(n, H(a).loading ? `Loading…` : `Show more`));
      }),
        W(`click`, t, () => $.moreSessions()),
        K(e, t));
    };
  J(le, (e) => {
    H(a).nextCursor && e(ue);
  });
  var de = z(le, 2),
    fe = (e) => {
      var t = cx(),
        n = R(t);
      (B(() => q(n, `${H(c) ?? ``} working in the background`)), K(e, t));
    };
  J(de, (e) => {
    H(c) > 0 && e(fe);
  });
  var pe = z(de, 2),
    me = (e) => {
      K(e, lx());
    };
  J(pe, (e) => {
    H(c) === 0 && e(me);
  });
  var he = R(z(pe, 2));
  (k(ce),
    k(C),
    Ma(C, () => _l(() => $.closeSessions(`outside`))),
    B(
      (e) => {
        (Z(
          C,
          `aria-label`,
          `Sessions in ${t.meta.folder ?? `this folder` ?? ``}`,
        ),
          Z(re, `aria-controls`, n),
          Z(re, `aria-activedescendant`, e),
          Z(T, `id`, n),
          q(he, `Sessions in ${t.meta.folder ?? `this folder` ?? ``}`));
      },
      [() => (H(s).length > 0 ? d(H(l)) : void 0)],
    ),
    W(`input`, re, () => F(l, 0)),
    W(`keydown`, re, ne),
    so(
      re,
      () => H(r),
      (e) => F(r, e),
    ),
    K(e, C),
    mt());
}
var Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      gl(),
      vl(),
      Gd(),
      (Yb = G(
        `<div class="flex flex-col items-start gap-2 px-2.5 py-2 text-small"><p class="wrap-break-word text-error"> </p> <button type="button" class="btn btn-secondary">Retry</button></div>`,
      )),
      (Xb = G(`<p class="px-2.5 py-2 text-small text-muted"> </p>`)),
      (Zb = G(
        `<div class="flex flex-col gap-1 rounded-md bg-hover px-1 pt-1 pb-1.5"><input aria-label="New name for this session" class="h-7 w-full rounded-[5px] border border-focus bg-input px-2 text-input-fg outline-none"/> <div class="flex items-center gap-2 px-0.5"><span class="flex-1 text-[11px] text-muted">Enter to save · Esc to cancel</span> <button type="button" class="btn btn-secondary">Cancel</button> <button type="button" class="btn btn-primary">Save</button></div></div>`,
      )),
      (Qb = G(
        `<div role="alertdialog" aria-label="Delete this session?" tabindex="-1" class="flex flex-col gap-1.5 rounded-md border border-error/60 bg-error/10 px-2.5 py-2"><span class="wrap-break-word"> </span> <span class="text-small text-muted">Hermes deletes the session and all its messages. This cannot be undone.</span> <div class="flex justify-end gap-2"><button type="button" class="btn btn-secondary">Cancel</button> <button type="button" class="btn btn-danger">Delete</button></div></div>`,
      )),
      ($b = G(
        `<span class="flex shrink-0 items-center gap-1.5 text-small text-warning"><span class="size-[7px] rounded-full border border-hc bg-warning" aria-hidden="true"></span> needs you</span>`,
      )),
      (ex = G(
        `<span><svg class="size-3 animate-spin" viewBox="0 0 16 16" fill="none" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="8" r="5" stroke="currentColor" opacity="0.3"></circle><path d="M8 3a5 5 0 0 1 5 5" stroke="currentColor"></path></svg> working</span>`,
      )),
      (tx = G(`<span><span aria-hidden="true"></span> </span>`)),
      (nx = G(
        `<button type="button" tabindex="-1" class="row-act" title="Delete (Del)"><svg class="size-3.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.7 8.5h5.6l.7-8.5M7 7v4M9 7v4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`,
      )),
      (rx = G(
        `<span class="flex shrink-0 items-center gap-0.5"><button type="button" tabindex="-1" class="row-act" title="Rename (F2)"><svg class="size-3.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13l1-3 7-7 2 2-7 7z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"></path></svg></button> <!></span>`,
      )),
      (ix = G(`<span> </span>`)),
      (ax = G(
        `<div role="option" tabindex="-1"><span class="min-w-0 flex-1 truncate"> </span> <!></div>`,
      )),
      (ox = G(`<p aria-live="polite"> </p>`)),
      (sx = G(
        `<button type="button" class="shrink-0 cursor-pointer rounded px-1.5 py-0.5 text-small whitespace-nowrap text-link hover:text-link-active disabled:cursor-default disabled:opacity-60"> </button>`,
      )),
      (cx = G(
        `<span class="shrink-0 px-1.5 text-small whitespace-nowrap text-muted"> </span>`,
      )),
      (lx = G(
        `<span class="shrink-0 px-1 text-[11px] whitespace-nowrap text-muted">F2 rename · Del delete</span>`,
      )),
      (ux = G(
        `<div role="dialog" class="absolute top-1 right-2 z-30 flex max-h-[min(70vh,480px)] w-[min(400px,calc(100%-16px))] flex-col gap-1.5 rounded-[10px] border border-widget-border bg-widget p-2 shadow-lg shadow-shadow"><div class="relative shrink-0"><svg class="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM10 10l3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg> <input type="text" role="combobox" aria-expanded="true" aria-label="Search sessions" placeholder="Search sessions…" class="h-7.5 w-full rounded-md border border-input-border bg-input py-0 pr-2.5 pl-8 text-input-fg outline-none placeholder:text-placeholder focus:outline-1 focus:-outline-offset-1 focus:outline-focus"/></div> <div role="listbox" aria-label="Sessions" class="min-h-0 flex-1 overflow-y-auto"><!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-border px-1 pt-1.5"><!> <!> <!> <span class="ml-auto truncate text-small text-muted"> </span></div></div>`,
      )),
      yi([`input`, `keydown`, `click`, `pointermove`]));
  });
function fx(e, t) {
  pt(t, !0);
  let n = N(() => $.model.items),
    r = N(() => $.model.meta),
    i = N(() => Zs(H(n))),
    a = N(() => $.tab);
  var o = mx(),
    s = I(o);
  Hv(s, {
    get busy() {
      return H(r).busy;
    },
    get waiting() {
      return H(i);
    },
  });
  var c = z(s, 2),
    l = I(c),
    u = I(l),
    d = (e) => {
      var t = px(),
        a = L(t);
      ud(a, {
        get meta() {
          return H(r);
        },
        get waiting() {
          return H(i);
        },
      });
      var o = z(a, 2);
      J_(o, {
        get items() {
          return H(n);
        },
        get meta() {
          return H(r);
        },
      });
      var s = z(o, 2);
      tc(s, {
        get items() {
          return H(n);
        },
        get meta() {
          return H(r);
        },
      });
      var c = z(s, 2);
      Dd(c, {
        get meta() {
          return H(r);
        },
      });
      var l = z(c, 2);
      (zb(l, {
        get meta() {
          return H(r);
        },
      }),
        Vu(z(l, 2), {
          get meta() {
            return H(r);
          },
        }),
        K(e, t));
    },
    f = (e) => {
      cc(e, {});
    };
  (J(u, (e) => {
    $.here ? e(d) : e(f, -1);
  }),
    k(l));
  var p = z(l, 2),
    m = (e) => {
      Pb(e, {
        get tab() {
          return H(a);
        },
      });
    };
  J(p, (e) => {
    H(a) !== `chat` && e(m);
  });
  var h = z(p, 2),
    g = (e) => {
      Jb(e, {
        get meta() {
          return H(r);
        },
      });
    };
  J(h, (e) => {
    $.here && $.sessionsOpen && e(g);
  });
  var _ = z(h, 2),
    v = (e) => {
      bd(e, {});
    };
  (J(_, (e) => {
    $.here && e(v);
  }),
    k(c),
    k(o),
    B(
      (e, t) => {
        (Z(l, `id`, e),
          Z(l, `aria-labelledby`, t),
          X(l, 1, Y([`flex h-full flex-col`, H(a) !== `chat` && `invisible`])),
          (l.inert = H(a) !== `chat` || $.preview !== null));
      },
      [() => _s(`chat`), () => gs(`chat`)],
    ),
    K(e, o),
    mt());
}
var px,
  mx,
  hx = o(() => {
    (Vo(),
      Lo(),
      Hs(),
      Ss(),
      ec(),
      rc(),
      uc(),
      ld(),
      yd(),
      Ed(),
      Md(),
      hv(),
      Jv(),
      Rb(),
      qb(),
      dx(),
      (px = G(`<!> <!> <!> <!> <!> <!>`, 1)),
      (mx = G(
        `<div class="flex h-full flex-col"><!> <div class="relative min-h-0 flex-1"><div role="tabpanel"><!></div> <!> <!> <!></div></div>`,
      )));
  }),
  gx = o(() => {}),
  _x = () => {
  zo(); hx(); Hs(); Bs(); gx();
  const unlisten = Rs((e) => $.apply(e));
  const targetEl = __env.appEl;
  if (!targetEl) throw Error("Hermes Studio: #app element missing");
  const comp = Wi(fx, { target: targetEl });
  Q({ type: "ready" });
  return {
    store: $,
    unmount() {
      try { unlisten?.(); } catch {}
      try {
        const eff = Ji?.get(comp);
        if (eff) xr(eff);
      } catch {}
    }
  };
};
return _x();
}

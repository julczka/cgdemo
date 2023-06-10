function f() {
}
function k(t) {
  return t();
}
function j() {
  return /* @__PURE__ */ Object.create(null);
}
function _(t) {
  t.forEach(k);
}
function b(t) {
  return typeof t == "function";
}
function z(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function A(t) {
  return Object.keys(t).length === 0;
}
function L(t, e) {
  t.appendChild(e);
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function B(t) {
  return document.createElement(t);
}
function N(t) {
  return document.createTextNode(t);
}
function P(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function V(t) {
  return Array.from(t.childNodes);
}
function q(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function D(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let x;
function m(t) {
  x = t;
}
const l = [], O = [];
let d = [];
const S = [], F = /* @__PURE__ */ Promise.resolve();
let g = !1;
function G() {
  g || (g = !0, F.then(H));
}
function y(t) {
  d.push(t);
}
const $ = /* @__PURE__ */ new Set();
let a = 0;
function H() {
  if (a !== 0)
    return;
  const t = x;
  do {
    try {
      for (; a < l.length; ) {
        const e = l[a];
        a++, m(e), I(e.$$);
      }
    } catch (e) {
      throw l.length = 0, a = 0, e;
    }
    for (m(null), l.length = 0, a = 0; O.length; )
      O.pop()();
    for (let e = 0; e < d.length; e += 1) {
      const n = d[e];
      $.has(n) || ($.add(n), n());
    }
    d.length = 0;
  } while (l.length);
  for (; S.length; )
    S.pop()();
  g = !1, $.clear(), m(t);
}
function I(t) {
  if (t.fragment !== null) {
    t.update(), _(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(y);
  }
}
function J(t) {
  const e = [], n = [];
  d.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), d = e;
}
const K = /* @__PURE__ */ new Set();
function Q(t, e) {
  t && t.i && (K.delete(t), t.i(e));
}
function U(t, e, n, r) {
  const { fragment: i, after_update: u } = t.$$;
  i && i.m(e, n), r || y(() => {
    const c = t.$$.on_mount.map(k).filter(b);
    t.$$.on_destroy ? t.$$.on_destroy.push(...c) : _(c), t.$$.on_mount = [];
  }), u.forEach(y);
}
function W(t, e) {
  const n = t.$$;
  n.fragment !== null && (J(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function X(t, e) {
  t.$$.dirty[0] === -1 && (l.push(t), G(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Y(t, e, n, r, i, u, c, h = [-1]) {
  const p = x;
  m(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: f,
    not_equal: i,
    bound: j(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (p ? p.$$.context : [])),
    // everything else
    callbacks: j(),
    dirty: h,
    skip_bound: !1,
    root: e.target || p.$$.root
  };
  c && c(o.root);
  let E = !1;
  if (o.ctx = n ? n(t, e.props || {}, (s, w, ...v) => {
    const C = v.length ? v[0] : w;
    return o.ctx && i(o.ctx[s], o.ctx[s] = C) && (!o.skip_bound && o.bound[s] && o.bound[s](C), E && X(t, s)), w;
  }) : [], o.update(), E = !0, _(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const s = V(e.target);
      o.fragment && o.fragment.l(s), s.forEach(T);
    } else
      o.fragment && o.fragment.c();
    e.intro && Q(t.$$.fragment), U(t, e.target, e.anchor, e.customElement), H();
  }
  m(p);
}
let R;
typeof HTMLElement == "function" && (R = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(k).filter(b);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    _(this.$$.on_disconnect);
  }
  $destroy() {
    W(this, 1), this.$destroy = f;
  }
  $on(t, e) {
    if (!b(e))
      return f;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !A(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function Z(t) {
  let e, n, r, i, u;
  return {
    c() {
      e = B("button"), n = N("Clicks: "), r = N(
        /*count*/
        t[0]
      ), this.c = f;
    },
    m(c, h) {
      M(c, e, h), L(e, n), L(e, r), i || (u = P(
        e,
        "click",
        /*increment*/
        t[1]
      ), i = !0);
    },
    p(c, [h]) {
      h & /*count*/
      1 && q(
        r,
        /*count*/
        c[0]
      );
    },
    i: f,
    o: f,
    d(c) {
      c && T(e), i = !1, u();
    }
  };
}
function tt(t, e, n) {
  let r = 0;
  return [r, () => {
    n(0, r += 1);
  }];
}
class et extends R {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = "button{font-family:inherit;font-size:inherit;padding:1em 2em;color:#ff3e00;background-color:rgba(255, 62, 0, 0.1);border-radius:2em;border:2px solid rgba(255, 62, 0, 0);outline:none;width:200px;font-variant-numeric:tabular-nums;cursor:pointer}button:focus{border:2px solid #ff3e00}button:active{background-color:rgba(255, 62, 0, 0.2)}", this.shadowRoot.appendChild(n), Y(
      this,
      {
        target: this.shadowRoot,
        props: D(this.attributes),
        customElement: !0
      },
      tt,
      Z,
      z,
      {},
      null
    ), e && e.target && M(e.target, this, e.anchor);
  }
}
customElements.define("my-counter", et);
//# sourceMappingURL=rabbit-prop-svelte.js.map

(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const s of n.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const n = {};
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = t(i);
    fetch(i.href, n);
  }
})();
function Cr(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function pa(a, e) {
  (a.prototype = Object.create(e.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Vt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  ki = { duration: 0.5, overwrite: !1, delay: 0 },
  Js,
  _t,
  Se,
  gr = 1e8,
  pt = 1 / gr,
  Ts = Math.PI * 2,
  Wu = Ts / 4,
  Gu = 0,
  _a = Math.sqrt,
  ju = Math.cos,
  Ku = Math.sin,
  tt = function (e) {
    return typeof e == "string";
  },
  Me = function (e) {
    return typeof e == "function";
  },
  Tr = function (e) {
    return typeof e == "number";
  },
  eo = function (e) {
    return typeof e > "u";
  },
  xr = function (e) {
    return typeof e == "object";
  },
  Et = function (e) {
    return e !== !1;
  },
  to = function () {
    return typeof window < "u";
  },
  Cn = function (e) {
    return Me(e) || tt(e);
  },
  Da =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Dt = Array.isArray,
  Es = /(?:-?\.?\d|\.)+/gi,
  ga = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  yi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  cs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ma = /[+-]=-?[.\d]+/,
  ya = /[^,'"\[\]\s]+/gi,
  Qu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ke,
  fr,
  As,
  ro,
  Ut = {},
  Hn = {},
  xa,
  va = function (e) {
    return (Hn = ai(e, Ut)) && Ot;
  },
  io = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  cn = function (e, t) {
    return !t && console.warn(e);
  },
  Ca = function (e, t) {
    return (e && (Ut[e] = t) && Hn && (Hn[e] = t)) || Ut;
  },
  fn = function () {
    return 0;
  },
  Zu = { suppressEvents: !0, isStart: !0, kill: !1 },
  Nn = { suppressEvents: !0, kill: !1 },
  Ju = { suppressEvents: !0 },
  no = {},
  Nr = [],
  ks = {},
  wa,
  It = {},
  fs = {},
  To = 30,
  zn = [],
  so = "",
  oo = function (e) {
    var t = e[0],
      r,
      i;
    if ((xr(t) || Me(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
      for (i = zn.length; i-- && !zn[i].targetTest(t); );
      r = zn[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new Wa(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  ei = function (e) {
    return e._gsap || oo(jt(e))[0]._gsap;
  },
  Fa = function (e, t, r) {
    return (r = e[t]) && Me(r)
      ? e[t]()
      : (eo(r) && e.getAttribute && e.getAttribute(t)) || r;
  },
  At = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Ne = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  et = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Fi = function (e, t) {
    var r = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    );
  },
  el = function (e, t) {
    for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; );
    return i < r;
  },
  Wn = function () {
    var e = Nr.length,
      t = Nr.slice(0),
      r,
      i;
    for (ks = {}, Nr.length = 0, r = 0; r < e; r++)
      (i = t[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  ba = function (e, t, r, i) {
    Nr.length && !_t && Wn(),
      e.render(t, r, _t && t < 0 && (e._initted || e._startAt)),
      Nr.length && !_t && Wn();
  },
  Sa = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(ya).length < 2
      ? t
      : tt(e)
      ? e.trim()
      : e;
  },
  Ta = function (e) {
    return e;
  },
  Qt = function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  },
  tl = function (e) {
    return function (t, r) {
      for (var i in r)
        i in t || (i === "duration" && e) || i === "ease" || (t[i] = r[i]);
    };
  },
  ai = function (e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  },
  Eo = function a(e, t) {
    for (var r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = xr(t[r]) ? a(e[r] || (e[r] = {}), t[r]) : t[r]);
    return e;
  },
  Gn = function (e, t) {
    var r = {},
      i;
    for (i in e) i in t || (r[i] = e[i]);
    return r;
  },
  Qi = function (e) {
    var t = e.parent || ke,
      r = e.keyframes ? tl(Dt(e.keyframes)) : Qt;
    if (Et(e.inherit))
      for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  rl = function (e, t) {
    for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; );
    return r < 0;
  },
  Ea = function (e, t, r, i, n) {
    var s = e[i],
      o;
    if (n) for (o = t[n]; s && s[n] > o; ) s = s._prev;
    return (
      s ? ((t._next = s._next), (s._next = t)) : ((t._next = e[r]), (e[r] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = s),
      (t.parent = t._dp = e),
      t
    );
  },
  ns = function (e, t, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var n = t._prev,
      s = t._next;
    n ? (n._next = s) : e[r] === t && (e[r] = s),
      s ? (s._prev = n) : e[i] === t && (e[i] = n),
      (t._next = t._prev = t.parent = null);
  },
  $r = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  ti = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  il = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  Ps = function (e, t, r, i) {
    return (
      e._startAt &&
      (_t
        ? e._startAt.revert(Nn)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, i))
    );
  },
  nl = function a(e) {
    return !e || (e._ts && a(e.parent));
  },
  Ao = function (e) {
    return e._repeat ? Pi(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Pi = function (e, t) {
    var r = Math.floor((e /= t));
    return e && r === e ? r - 1 : r;
  },
  jn = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  ss = function (e) {
    return (e._end = et(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || pt) || 0)
    ));
  },
  os = function (e, t) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = et(
          r._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        ss(e),
        r._dirty || ti(r, e)),
      e
    );
  },
  Aa = function (e, t) {
    var r;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((r = jn(e.rawTime(), t)),
        (!t._dur || yn(0, t.totalDuration(), r) - t._tTime > pt) &&
          t.render(r, !0)),
      ti(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -1e-8;
    }
  },
  pr = function (e, t, r, i) {
    return (
      t.parent && $r(t),
      (t._start = et(
        (Tr(r) ? r : r || e !== ke ? Ht(e, r, t) : e._time) + t._delay
      )),
      (t._end = et(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Ea(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Os(t) || (e._recent = t),
      i || Aa(e, t),
      e._ts < 0 && os(e, e._tTime),
      e
    );
  },
  ka = function (e, t) {
    return (
      (Ut.ScrollTrigger || io("scrollTrigger", t)) &&
      Ut.ScrollTrigger.create(t, e)
    );
  },
  Pa = function (e, t, r, i, n) {
    if ((uo(e, t, n), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !_t &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      wa !== $t.frame
    )
      return Nr.push(e), (e._lazy = [n, i]), 1;
  },
  sl = function a(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || a(t));
  },
  Os = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  ol = function (e, t, r, i) {
    var n = e.ratio,
      s =
        t < 0 ||
        (!t &&
          ((!e._start && sl(e) && !(!e._initted && Os(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Os(e))))
          ? 0
          : 1,
      o = e._rDelay,
      u = 0,
      l,
      c,
      d;
    if (
      (o &&
        e._repeat &&
        ((u = yn(0, e._tDur, t)),
        (c = Pi(u, o)),
        e._yoyo && c & 1 && (s = 1 - s),
        c !== Pi(e._tTime, o) &&
          ((n = 1 - s), e.vars.repeatRefresh && e._initted && e.invalidate())),
      s !== n || _t || i || e._zTime === pt || (!t && e._zTime))
    ) {
      if (!e._initted && Pa(e, t, i, r, u)) return;
      for (
        d = e._zTime,
          e._zTime = t || (r ? pt : 0),
          r || (r = t && !d),
          e.ratio = s,
          e._from && (s = 1 - s),
          e._time = 0,
          e._tTime = u,
          l = e._pt;
        l;

      )
        l.r(s, l.d), (l = l._next);
      t < 0 && Ps(e, t, r, !0),
        e._onUpdate && !r && qt(e, "onUpdate"),
        u && e._repeat && !r && e.parent && qt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === s &&
          (s && $r(e, 1),
          !r &&
            !_t &&
            (qt(e, s ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  al = function (e, t, r) {
    var i;
    if (r > t)
      for (i = e._first; i && i._start <= r; ) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r; ) {
        if (i.data === "isPause" && i._start < t) return i;
        i = i._prev;
      }
  },
  Oi = function (e, t, r, i) {
    var n = e._repeat,
      s = et(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !i && (e._time *= s / e._dur),
      (e._dur = s),
      (e._tDur = n ? (n < 0 ? 1e10 : et(s * (n + 1) + e._rDelay * n)) : s),
      o > 0 && !i && os(e, (e._tTime = e._tDur * o)),
      e.parent && ss(e),
      r || ti(e.parent, e),
      e
    );
  },
  ko = function (e) {
    return e instanceof Ft ? ti(e) : Oi(e, e._dur);
  },
  ul = { _start: 0, endTime: fn, totalDuration: fn },
  Ht = function a(e, t, r) {
    var i = e.labels,
      n = e._recent || ul,
      s = e.duration() >= gr ? n.endTime(!1) : e._dur,
      o,
      u,
      l;
    return tt(t) && (isNaN(t) || t in i)
      ? ((u = t.charAt(0)),
        (l = t.substr(-1) === "%"),
        (o = t.indexOf("=")),
        u === "<" || u === ">"
          ? (o >= 0 && (t = t.replace(/=/, "")),
            (u === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (l ? (o < 0 ? n : r).totalDuration() / 100 : 1))
          : o < 0
          ? (t in i || (i[t] = s), i[t])
          : ((u = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
            l && r && (u = (u / 100) * (Dt(r) ? r[0] : r).totalDuration()),
            o > 1 ? a(e, t.substr(0, o - 1), r) + u : s + u))
      : t == null
      ? s
      : +t;
  },
  Zi = function (e, t, r) {
    var i = Tr(t[1]),
      n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = t[n],
      o,
      u;
    if ((i && (s.duration = t[1]), (s.parent = r), e)) {
      for (o = s, u = r; u && !("immediateRender" in o); )
        (o = u.vars.defaults || {}), (u = Et(u.vars.inherit) && u.parent);
      (s.immediateRender = Et(o.immediateRender)),
        e < 2 ? (s.runBackwards = 1) : (s.startAt = t[n - 1]);
    }
    return new Ye(t[0], s, t[n + 1]);
  },
  Vr = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  yn = function (e, t, r) {
    return r < e ? e : r > t ? t : r;
  },
  dt = function (e, t) {
    return !tt(e) || !(t = Qu.exec(e)) ? "" : t[1];
  },
  ll = function (e, t, r) {
    return Vr(r, function (i) {
      return yn(e, t, i);
    });
  },
  Ms = [].slice,
  Oa = function (e, t) {
    return (
      e &&
      xr(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && xr(e[0]))) &&
      !e.nodeType &&
      e !== fr
    );
  },
  cl = function (e, t, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (i) {
        var n;
        return (tt(i) && !t) || Oa(i, 1)
          ? (n = r).push.apply(n, jt(i))
          : r.push(i);
      }) || r
    );
  },
  jt = function (e, t, r) {
    return Se && !t && Se.selector
      ? Se.selector(e)
      : tt(e) && !r && (As || !Mi())
      ? Ms.call((t || ro).querySelectorAll(e), 0)
      : Dt(e)
      ? cl(e, r)
      : Oa(e)
      ? Ms.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Rs = function (e) {
    return (
      (e = jt(e)[0] || cn("Invalid scope") || {}),
      function (t) {
        var r = e.current || e.nativeElement || e;
        return jt(
          t,
          r.querySelectorAll
            ? r
            : r === e
            ? cn("Invalid scope") || ro.createElement("div")
            : e
        );
      }
    );
  },
  Ma = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ra = function (e) {
    if (Me(e)) return e;
    var t = xr(e) ? e : { each: e },
      r = ri(t.ease),
      i = t.from || 0,
      n = parseFloat(t.base) || 0,
      s = {},
      o = i > 0 && i < 1,
      u = isNaN(i) || o,
      l = t.axis,
      c = i,
      d = i;
    return (
      tt(i)
        ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !o && u && ((c = i[0]), (d = i[1])),
      function (p, h, _) {
        var f = (_ || t).length,
          g = s[f],
          x,
          w,
          E,
          m,
          F,
          k,
          v,
          b,
          A;
        if (!g) {
          if (((A = t.grid === "auto" ? 0 : (t.grid || [1, gr])[1]), !A)) {
            for (
              v = -1e8;
              v < (v = _[A++].getBoundingClientRect().left) && A < f;

            );
            A < f && A--;
          }
          for (
            g = s[f] = [],
              x = u ? Math.min(A, f) * c - 0.5 : i % A,
              w = A === gr ? 0 : u ? (f * d) / A - 0.5 : (i / A) | 0,
              v = 0,
              b = gr,
              k = 0;
            k < f;
            k++
          )
            (E = (k % A) - x),
              (m = w - ((k / A) | 0)),
              (g[k] = F = l ? Math.abs(l === "y" ? m : E) : _a(E * E + m * m)),
              F > v && (v = F),
              F < b && (b = F);
          i === "random" && Ma(g),
            (g.max = v - b),
            (g.min = b),
            (g.v = f =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (A > f
                    ? f - 1
                    : l
                    ? l === "y"
                      ? f / A
                      : A
                    : Math.max(A, f / A)) ||
                0) * (i === "edges" ? -1 : 1)),
            (g.b = f < 0 ? n - f : n),
            (g.u = dt(t.amount || t.each) || 0),
            (r = r && f < 0 ? Ua(r) : r);
        }
        return (
          (f = (g[p] - g.min) / g.max || 0),
          et(g.b + (r ? r(f) : f) * g.v) + g.u
        );
      }
    );
  },
  Ls = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = et(Math.round(parseFloat(r) / e) * e * t);
      return (i - (i % 1)) / t + (Tr(r) ? 0 : dt(r));
    };
  },
  La = function (e, t) {
    var r = Dt(e),
      i,
      n;
    return (
      !r &&
        xr(e) &&
        ((i = r = e.radius || gr),
        e.values
          ? ((e = jt(e.values)), (n = !Tr(e[0])) && (i *= i))
          : (e = Ls(e.increment))),
      Vr(
        t,
        r
          ? Me(e)
            ? function (s) {
                return (n = e(s)), Math.abs(n - s) <= i ? n : s;
              }
            : function (s) {
                for (
                  var o = parseFloat(n ? s.x : s),
                    u = parseFloat(n ? s.y : 0),
                    l = gr,
                    c = 0,
                    d = e.length,
                    p,
                    h;
                  d--;

                )
                  n
                    ? ((p = e[d].x - o), (h = e[d].y - u), (p = p * p + h * h))
                    : (p = Math.abs(e[d] - o)),
                    p < l && ((l = p), (c = d));
                return (
                  (c = !i || l <= i ? e[c] : s),
                  n || c === s || Tr(s) ? c : c + dt(s)
                );
              }
          : Ls(e)
      )
    );
  },
  Ba = function (e, t, r, i) {
    return Vr(Dt(e) ? !t : r === !0 ? !!(r = 0) : !i, function () {
      return Dt(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) *
                r *
                i
            ) / i;
    });
  },
  fl = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return function (i) {
      return t.reduce(function (n, s) {
        return s(n);
      }, i);
    };
  },
  hl = function (e, t) {
    return function (r) {
      return e(parseFloat(r)) + (t || dt(r));
    };
  },
  dl = function (e, t, r) {
    return za(e, t, 0, 1, r);
  },
  Na = function (e, t, r) {
    return Vr(r, function (i) {
      return e[~~t(i)];
    });
  },
  pl = function a(e, t, r) {
    var i = t - e;
    return Dt(e)
      ? Na(e, a(0, e.length), t)
      : Vr(r, function (n) {
          return ((i + ((n - e) % i)) % i) + e;
        });
  },
  _l = function a(e, t, r) {
    var i = t - e,
      n = i * 2;
    return Dt(e)
      ? Na(e, a(0, e.length - 1), t)
      : Vr(r, function (s) {
          return (s = (n + ((s - e) % n)) % n || 0), e + (s > i ? n - s : s);
        });
  },
  hn = function (e) {
    for (var t = 0, r = "", i, n, s, o; ~(i = e.indexOf("random(", t)); )
      (s = e.indexOf(")", i)),
        (o = e.charAt(i + 7) === "["),
        (n = e.substr(i + 7, s - i - 7).match(o ? ya : Es)),
        (r +=
          e.substr(t, i - t) + Ba(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
        (t = s + 1);
    return r + e.substr(t, e.length - t);
  },
  za = function (e, t, r, i, n) {
    var s = t - e,
      o = i - r;
    return Vr(n, function (u) {
      return r + (((u - e) / s) * o || 0);
    });
  },
  Dl = function a(e, t, r, i) {
    var n = isNaN(e + t)
      ? 0
      : function (h) {
          return (1 - h) * e + h * t;
        };
    if (!n) {
      var s = tt(e),
        o = {},
        u,
        l,
        c,
        d,
        p;
      if ((r === !0 && (i = 1) && (r = null), s))
        (e = { p: e }), (t = { p: t });
      else if (Dt(e) && !Dt(t)) {
        for (c = [], d = e.length, p = d - 2, l = 1; l < d; l++)
          c.push(a(e[l - 1], e[l]));
        d--,
          (n = function (_) {
            _ *= d;
            var f = Math.min(p, ~~_);
            return c[f](_ - f);
          }),
          (r = t);
      } else i || (e = ai(Dt(e) ? [] : {}, e));
      if (!c) {
        for (u in t) ao.call(o, e, u, "get", t[u]);
        n = function (_) {
          return fo(_, o) || (s ? e.p : e);
        };
      }
    }
    return Vr(r, n);
  },
  Po = function (e, t, r) {
    var i = e.labels,
      n = gr,
      s,
      o,
      u;
    for (s in i)
      (o = i[s] - t),
        o < 0 == !!r && o && n > (o = Math.abs(o)) && ((u = s), (n = o));
    return u;
  },
  qt = function (e, t, r) {
    var i = e.vars,
      n = i[t],
      s = Se,
      o = e._ctx,
      u,
      l,
      c;
    if (n)
      return (
        (u = i[t + "Params"]),
        (l = i.callbackScope || e),
        r && Nr.length && Wn(),
        o && (Se = o),
        (c = u ? n.apply(l, u) : n.call(l)),
        (Se = s),
        c
      );
  },
  Vi = function (e) {
    return (
      $r(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!_t),
      e.progress() < 1 && qt(e, "onInterrupt"),
      e
    );
  },
  xi,
  Ia = [],
  $a = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), to() || e.headless)) {
        var t = e.name,
          r = Me(e),
          i =
            t && !r && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: fn,
            render: fo,
            add: ao,
            kill: Ol,
            modifier: Pl,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: co,
            aliases: {},
            register: 0,
          };
        if ((Mi(), e !== i)) {
          if (It[t]) return;
          Qt(i, Qt(Gn(e, n), s)),
            ai(i.prototype, ai(n, Gn(e, s))),
            (It[(i.prop = t)] = i),
            e.targetTest && (zn.push(i), (no[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        Ca(t, i), e.register && e.register(Ot, i, kt);
      } else Ia.push(e);
  },
  ve = 255,
  Ui = {
    aqua: [0, ve, ve],
    lime: [0, ve, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ve],
    navy: [0, 0, 128],
    white: [ve, ve, ve],
    olive: [128, 128, 0],
    yellow: [ve, ve, 0],
    orange: [ve, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ve, 0, 0],
    pink: [ve, 192, 203],
    cyan: [0, ve, ve],
    transparent: [ve, ve, ve, 0],
  },
  hs = function (e, t, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (r - t) * e * 6
        : e < 0.5
        ? r
        : e * 3 < 2
        ? t + (r - t) * (2 / 3 - e) * 6
        : t) *
        ve +
        0.5) |
        0
    );
  },
  Ya = function (e, t, r) {
    var i = e ? (Tr(e) ? [e >> 16, (e >> 8) & ve, e & ve] : 0) : Ui.black,
      n,
      s,
      o,
      u,
      l,
      c,
      d,
      p,
      h,
      _;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ui[e]))
        i = Ui[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (s = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
              s +
              s +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & ve, i & ve, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & ve, e & ve]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = _ = e.match(Es)), !t))
          (u = (+i[0] % 360) / 360),
            (l = +i[1] / 100),
            (c = +i[2] / 100),
            (s = c <= 0.5 ? c * (l + 1) : c + l - c * l),
            (n = c * 2 - s),
            i.length > 3 && (i[3] *= 1),
            (i[0] = hs(u + 1 / 3, n, s)),
            (i[1] = hs(u, n, s)),
            (i[2] = hs(u - 1 / 3, n, s));
        else if (~e.indexOf("="))
          return (i = e.match(ga)), r && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(Es) || Ui.transparent;
      i = i.map(Number);
    }
    return (
      t &&
        !_ &&
        ((n = i[0] / ve),
        (s = i[1] / ve),
        (o = i[2] / ve),
        (d = Math.max(n, s, o)),
        (p = Math.min(n, s, o)),
        (c = (d + p) / 2),
        d === p
          ? (u = l = 0)
          : ((h = d - p),
            (l = c > 0.5 ? h / (2 - d - p) : h / (d + p)),
            (u =
              d === n
                ? (s - o) / h + (s < o ? 6 : 0)
                : d === s
                ? (o - n) / h + 2
                : (n - s) / h + 4),
            (u *= 60)),
        (i[0] = ~~(u + 0.5)),
        (i[1] = ~~(l * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  qa = function (e) {
    var t = [],
      r = [],
      i = -1;
    return (
      e.split(zr).forEach(function (n) {
        var s = n.match(yi) || [];
        t.push.apply(t, s), r.push((i += s.length + 1));
      }),
      (t.c = r),
      t
    );
  },
  Oo = function (e, t, r) {
    var i = "",
      n = (e + i).match(zr),
      s = t ? "hsla(" : "rgba(",
      o = 0,
      u,
      l,
      c,
      d;
    if (!n) return e;
    if (
      ((n = n.map(function (p) {
        return (
          (p = Ya(p, t, 1)) &&
          s +
            (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
            ")"
        );
      })),
      r && ((c = qa(e)), (u = r.c), u.join(i) !== c.c.join(i)))
    )
      for (l = e.replace(zr, "1").split(yi), d = l.length - 1; o < d; o++)
        i +=
          l[o] +
          (~u.indexOf(o)
            ? n.shift() || s + "0,0,0,0)"
            : (c.length ? c : n.length ? n : r).shift());
    if (!l)
      for (l = e.split(zr), d = l.length - 1; o < d; o++) i += l[o] + n[o];
    return i + l[d];
  },
  zr = (function () {
    var a =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Ui) a += "|" + e + "\\b";
    return new RegExp(a + ")", "gi");
  })(),
  gl = /hsl[a]?\(/,
  Va = function (e) {
    var t = e.join(" "),
      r;
    if (((zr.lastIndex = 0), zr.test(t)))
      return (
        (r = gl.test(t)),
        (e[1] = Oo(e[1], r)),
        (e[0] = Oo(e[0], r, qa(e[1]))),
        !0
      );
  },
  dn,
  $t = (function () {
    var a = Date.now,
      e = 500,
      t = 33,
      r = a(),
      i = r,
      n = 1e3 / 240,
      s = n,
      o = [],
      u,
      l,
      c,
      d,
      p,
      h,
      _ = function f(g) {
        var x = a() - i,
          w = g === !0,
          E,
          m,
          F,
          k;
        if (
          ((x > e || x < 0) && (r += x - t),
          (i += x),
          (F = i - r),
          (E = F - s),
          (E > 0 || w) &&
            ((k = ++d.frame),
            (p = F - d.time * 1e3),
            (d.time = F = F / 1e3),
            (s += E + (E >= n ? 4 : n - E)),
            (m = 1)),
          w || (u = l(f)),
          m)
        )
          for (h = 0; h < o.length; h++) o[h](F, p, k, g);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          _(!0);
        },
        deltaRatio: function (g) {
          return p / (1e3 / (g || 60));
        },
        wake: function () {
          xa &&
            (!As &&
              to() &&
              ((fr = As = window),
              (ro = fr.document || {}),
              (Ut.gsap = Ot),
              (fr.gsapVersions || (fr.gsapVersions = [])).push(Ot.version),
              va(Hn || fr.GreenSockGlobals || (!fr.gsap && fr) || {}),
              Ia.forEach($a)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            u && d.sleep(),
            (l =
              c ||
              function (g) {
                return setTimeout(g, (s - d.time * 1e3 + 1) | 0);
              }),
            (dn = 1),
            _(2));
        },
        sleep: function () {
          (c ? cancelAnimationFrame : clearTimeout)(u), (dn = 0), (l = fn);
        },
        lagSmoothing: function (g, x) {
          (e = g || 1 / 0), (t = Math.min(x || 33, e));
        },
        fps: function (g) {
          (n = 1e3 / (g || 240)), (s = d.time * 1e3 + n);
        },
        add: function (g, x, w) {
          var E = x
            ? function (m, F, k, v) {
                g(m, F, k, v), d.remove(E);
              }
            : g;
          return d.remove(g), o[w ? "unshift" : "push"](E), Mi(), E;
        },
        remove: function (g, x) {
          ~(x = o.indexOf(g)) && o.splice(x, 1) && h >= x && h--;
        },
        _listeners: o,
      }),
      d
    );
  })(),
  Mi = function () {
    return !dn && $t.wake();
  },
  he = {},
  ml = /^[\d.\-M][\d.\-,\s]/,
  yl = /["']/g,
  xl = function (e) {
    for (
      var t = {},
        r = e.substr(1, e.length - 3).split(":"),
        i = r[0],
        n = 1,
        s = r.length,
        o,
        u,
        l;
      n < s;
      n++
    )
      (u = r[n]),
        (o = n !== s - 1 ? u.lastIndexOf(",") : u.length),
        (l = u.substr(0, o)),
        (t[i] = isNaN(l) ? l.replace(yl, "").trim() : +l),
        (i = u.substr(o + 1).trim());
    return t;
  },
  vl = function (e) {
    var t = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  Cl = function (e) {
    var t = (e + "").split("("),
      r = he[t[0]];
    return r && t.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [xl(t[1])] : vl(e).split(",").map(Sa)
        )
      : he._CE && ml.test(e)
      ? he._CE("", e)
      : r;
  },
  Ua = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Xa = function a(e, t) {
    for (var r = e._first, i; r; )
      r instanceof Ft
        ? a(r, t)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== t &&
          (r.timeline
            ? a(r.timeline, t)
            : ((i = r._ease),
              (r._ease = r._yEase),
              (r._yEase = i),
              (r._yoyo = t))),
        (r = r._next);
  },
  ri = function (e, t) {
    return (e && (Me(e) ? e : he[e] || Cl(e))) || t;
  },
  di = function (e, t, r, i) {
    r === void 0 &&
      (r = function (u) {
        return 1 - t(1 - u);
      }),
      i === void 0 &&
        (i = function (u) {
          return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
        });
    var n = { easeIn: t, easeOut: r, easeInOut: i },
      s;
    return (
      At(e, function (o) {
        (he[o] = Ut[o] = n), (he[(s = o.toLowerCase())] = r);
        for (var u in n)
          he[
            s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
          ] = he[o + "." + u] = n[u];
      }),
      n
    );
  },
  Ha = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  ds = function a(e, t, r) {
    var i = t >= 1 ? t : 1,
      n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      s = (n / Ts) * (Math.asin(1 / i) || 0),
      o = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Ku((c - s) * n) + 1;
      },
      u =
        e === "out"
          ? o
          : e === "in"
          ? function (l) {
              return 1 - o(1 - l);
            }
          : Ha(o);
    return (
      (n = Ts / n),
      (u.config = function (l, c) {
        return a(e, l, c);
      }),
      u
    );
  },
  ps = function a(e, t) {
    t === void 0 && (t = 1.70158);
    var r = function (s) {
        return s ? --s * s * ((t + 1) * s + t) + 1 : 0;
      },
      i =
        e === "out"
          ? r
          : e === "in"
          ? function (n) {
              return 1 - r(1 - n);
            }
          : Ha(r);
    return (
      (i.config = function (n) {
        return a(e, n);
      }),
      i
    );
  };
At("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, e) {
  var t = e < 5 ? e + 1 : e;
  di(
    a + ",Power" + (t - 1),
    e
      ? function (r) {
          return Math.pow(r, t);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, t);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, t) / 2
        : 1 - Math.pow((1 - r) * 2, t) / 2;
    }
  );
});
he.Linear.easeNone = he.none = he.Linear.easeIn;
di("Elastic", ds("in"), ds("out"), ds());
(function (a, e) {
  var t = 1 / e,
    r = 2 * t,
    i = 2.5 * t,
    n = function (o) {
      return o < t
        ? a * o * o
        : o < r
        ? a * Math.pow(o - 1.5 / e, 2) + 0.75
        : o < i
        ? a * (o -= 2.25 / e) * o + 0.9375
        : a * Math.pow(o - 2.625 / e, 2) + 0.984375;
    };
  di(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
di("Expo", function (a) {
  return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
di("Circ", function (a) {
  return -(_a(1 - a * a) - 1);
});
di("Sine", function (a) {
  return a === 1 ? 1 : -ju(a * Wu) + 1;
});
di("Back", ps("in"), ps("out"), ps());
he.SteppedEase =
  he.steps =
  Ut.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          i = e + (t ? 0 : 1),
          n = t ? 1 : 0,
          s = 1 - pt;
        return function (o) {
          return (((i * yn(0, s, o)) | 0) + n) * r;
        };
      },
    };
ki.ease = he["quad.out"];
At(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (a) {
    return (so += a + "," + a + "Params,");
  }
);
var Wa = function (e, t) {
    (this.id = Gu++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Fa),
      (this.set = t ? t.getSetter : co);
  },
  pn = (function () {
    function a(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Oi(this, +t.duration, 1, 1),
        (this.data = t.data),
        Se && ((this._ctx = Se), Se.data.push(this)),
        dn || $t.wake();
    }
    var e = a.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            Oi(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((Mi(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (os(this, r), !n._dp || n.parent || Aa(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            pr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === pt) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), ba(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + Ao(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                Ao(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (r, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * n, i)
          : this._repeat
          ? Pi(this._tTime, n) + 1
          : 1;
      }),
      (e.timeScale = function (r, i) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === r) return this;
        var n =
          this.parent && this._ts ? jn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -1e-8 ? 0 : this._rts),
          this.totalTime(yn(-Math.abs(this._delay), this._tDur, n), i !== !1),
          ss(this),
          il(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Mi(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== pt &&
                      (this._tTime -= pt)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && pr(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (Et(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? jn(i.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = Ju);
        var i = _t;
        return (
          (_t = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (_t = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
          (n = i._start + n / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(r) : n;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), ko(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), ko(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime(Ht(this, r), Et(i));
      }),
      (e.restart = function (r, i) {
        return this.play().totalTime(r ? -this._delay : 0, Et(i));
      }),
      (e.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          n;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (n = r.rawTime(!0)) >= i &&
            n < this.endTime(!0) - pt)
        );
      }),
      (e.eventCallback = function (r, i, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (i
              ? ((s[r] = i),
                n && (s[r + "Params"] = n),
                r === "onUpdate" && (this._onUpdate = i))
              : delete s[r],
            this)
          : s[r];
      }),
      (e.then = function (r) {
        var i = this;
        return new Promise(function (n) {
          var s = Me(r) ? r : Ta,
            o = function () {
              var l = i.then;
              (i.then = null),
                Me(s) && (s = s(i)) && (s.then || s === i) && (i.then = l),
                n(s),
                (i.then = l);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? o()
            : (i._prom = o);
        });
      }),
      (e.kill = function () {
        Vi(this);
      }),
      a
    );
  })();
Qt(pn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Ft = (function (a) {
  pa(e, a);
  function e(r, i) {
    var n;
    return (
      r === void 0 && (r = {}),
      (n = a.call(this, r) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!r.smoothChildTiming),
      (n.autoRemoveChildren = !!r.autoRemoveChildren),
      (n._sort = Et(r.sortChildren)),
      ke && pr(r.parent || ke, Cr(n), i),
      r.reversed && n.reverse(),
      r.paused && n.paused(!0),
      r.scrollTrigger && ka(Cr(n), r.scrollTrigger),
      n
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (i, n, s) {
      return Zi(0, arguments, this), this;
    }),
    (t.from = function (i, n, s) {
      return Zi(1, arguments, this), this;
    }),
    (t.fromTo = function (i, n, s, o) {
      return Zi(2, arguments, this), this;
    }),
    (t.set = function (i, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Qi(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new Ye(i, n, Ht(this, s), 1),
        this
      );
    }),
    (t.call = function (i, n, s) {
      return pr(this, Ye.delayedCall(0, i, n), s);
    }),
    (t.staggerTo = function (i, n, s, o, u, l, c) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || o),
        (s.onComplete = l),
        (s.onCompleteParams = c),
        (s.parent = this),
        new Ye(i, s, Ht(this, u)),
        this
      );
    }),
    (t.staggerFrom = function (i, n, s, o, u, l, c) {
      return (
        (s.runBackwards = 1),
        (Qi(s).immediateRender = Et(s.immediateRender)),
        this.staggerTo(i, n, s, o, u, l, c)
      );
    }),
    (t.staggerFromTo = function (i, n, s, o, u, l, c, d) {
      return (
        (o.startAt = s),
        (Qi(o).immediateRender = Et(o.immediateRender)),
        this.staggerTo(i, n, o, u, l, c, d)
      );
    }),
    (t.render = function (i, n, s) {
      var o = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        l = this._dur,
        c = i <= 0 ? 0 : et(i),
        d = this._zTime < 0 != i < 0 && (this._initted || !l),
        p,
        h,
        _,
        f,
        g,
        x,
        w,
        E,
        m,
        F,
        k,
        v;
      if (
        (this !== ke && c > u && i >= 0 && (c = u), c !== this._tTime || s || d)
      ) {
        if (
          (o !== this._time &&
            l &&
            ((c += this._time - o), (i += this._time - o)),
          (p = c),
          (m = this._start),
          (E = this._ts),
          (x = !E),
          d && (l || (o = this._zTime), (i || !n) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (g = l + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(g * 100 + i, n, s);
          if (
            ((p = et(c % g)),
            c === u
              ? ((f = this._repeat), (p = l))
              : ((f = ~~(c / g)),
                f && f === c / g && ((p = l), f--),
                p > l && (p = l)),
            (F = Pi(this._tTime, g)),
            !o &&
              this._tTime &&
              F !== f &&
              this._tTime - F * g - this._dur <= 0 &&
              (F = f),
            k && f & 1 && ((p = l - p), (v = 1)),
            f !== F && !this._lock)
          ) {
            var b = k && F & 1,
              A = b === (k && f & 1);
            if (
              (f < F && (b = !b),
              (o = b ? 0 : c % l ? l : c),
              (this._lock = 1),
              (this.render(o || (v ? 0 : et(f * g)), n, !l)._lock = 0),
              (this._tTime = c),
              !n && this.parent && qt(this, "onRepeat"),
              this.vars.repeatRefresh && !v && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                x !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((l = this._dur),
              (u = this._tDur),
              A &&
                ((this._lock = 2),
                (o = b ? l : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !v && this.invalidate()),
              (this._lock = 0),
              !this._ts && !x)
            )
              return this;
            Xa(this, v);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((w = al(this, et(o), et(p))), w && (c -= p - (p = w._start))),
          (this._tTime = c),
          (this._time = p),
          (this._act = !E),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (o = 0)),
          !o && p && !n && !f && (qt(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (p >= o && i >= 0)
          for (h = this._first; h; ) {
            if (
              ((_ = h._next), (h._act || p >= h._start) && h._ts && w !== h)
            ) {
              if (h.parent !== this) return this.render(i, n, s);
              if (
                (h.render(
                  h._ts > 0
                    ? (p - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (p - h._start) * h._ts,
                  n,
                  s
                ),
                p !== this._time || (!this._ts && !x))
              ) {
                (w = 0), _ && (c += this._zTime = -1e-8);
                break;
              }
            }
            h = _;
          }
        else {
          h = this._last;
          for (var S = i < 0 ? i : p; h; ) {
            if (((_ = h._prev), (h._act || S <= h._end) && h._ts && w !== h)) {
              if (h.parent !== this) return this.render(i, n, s);
              if (
                (h.render(
                  h._ts > 0
                    ? (S - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (S - h._start) * h._ts,
                  n,
                  s || (_t && (h._initted || h._startAt))
                ),
                p !== this._time || (!this._ts && !x))
              ) {
                (w = 0), _ && (c += this._zTime = S ? -1e-8 : pt);
                break;
              }
            }
            h = _;
          }
        }
        if (
          w &&
          !n &&
          (this.pause(),
          (w.render(p >= o ? 0 : -1e-8)._zTime = p >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = m), ss(this), this.render(i, n, s);
        this._onUpdate && !n && qt(this, "onUpdate", !0),
          ((c === u && this._tTime >= this.totalDuration()) || (!c && o)) &&
            (m === this._start || Math.abs(E) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !l) &&
                ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
                $r(this, 1),
              !n &&
                !(i < 0 && !o) &&
                (c || o || !u) &&
                (qt(
                  this,
                  c === u && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < u && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (i, n) {
      var s = this;
      if ((Tr(n) || (n = Ht(this, n, i)), !(i instanceof pn))) {
        if (Dt(i))
          return (
            i.forEach(function (o) {
              return s.add(o, n);
            }),
            this
          );
        if (tt(i)) return this.addLabel(i, n);
        if (Me(i)) i = Ye.delayedCall(0, i);
        else return this;
      }
      return this !== i ? pr(this, i, n) : this;
    }),
    (t.getChildren = function (i, n, s, o) {
      i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -1e8);
      for (var u = [], l = this._first; l; )
        l._start >= o &&
          (l instanceof Ye
            ? n && u.push(l)
            : (s && u.push(l), i && u.push.apply(u, l.getChildren(!0, n, s)))),
          (l = l._next);
      return u;
    }),
    (t.getById = function (i) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === i) return n[s];
    }),
    (t.remove = function (i) {
      return tt(i)
        ? this.removeLabel(i)
        : Me(i)
        ? this.killTweensOf(i)
        : (ns(this, i),
          i === this._recent && (this._recent = this._last),
          ti(this));
    }),
    (t.totalTime = function (i, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = et(
              $t.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          a.prototype.totalTime.call(this, i, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (i, n) {
      return (this.labels[i] = Ht(this, n)), this;
    }),
    (t.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (t.addPause = function (i, n, s) {
      var o = Ye.delayedCall(0, n || fn, s);
      return (
        (o.data = "isPause"), (this._hasPause = 1), pr(this, o, Ht(this, i))
      );
    }),
    (t.removePause = function (i) {
      var n = this._first;
      for (i = Ht(this, i); n; )
        n._start === i && n.data === "isPause" && $r(n), (n = n._next);
    }),
    (t.killTweensOf = function (i, n, s) {
      for (var o = this.getTweensOf(i, s), u = o.length; u--; )
        Or !== o[u] && o[u].kill(i, n);
      return this;
    }),
    (t.getTweensOf = function (i, n) {
      for (var s = [], o = jt(i), u = this._first, l = Tr(n), c; u; )
        u instanceof Ye
          ? el(u._targets, o) &&
            (l
              ? (!Or || (u._initted && u._ts)) &&
                u.globalTime(0) <= n &&
                u.globalTime(u.totalDuration()) > n
              : !n || u.isActive()) &&
            s.push(u)
          : (c = u.getTweensOf(o, n)).length && s.push.apply(s, c),
          (u = u._next);
      return s;
    }),
    (t.tweenTo = function (i, n) {
      n = n || {};
      var s = this,
        o = Ht(s, i),
        u = n,
        l = u.startAt,
        c = u.onStart,
        d = u.onStartParams,
        p = u.immediateRender,
        h,
        _ = Ye.to(
          s,
          Qt(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (o - (l && "time" in l ? l.time : s._time)) / s.timeScale()
                ) ||
                pt,
              onStart: function () {
                if ((s.pause(), !h)) {
                  var g =
                    n.duration ||
                    Math.abs(
                      (o - (l && "time" in l ? l.time : s._time)) /
                        s.timeScale()
                    );
                  _._dur !== g && Oi(_, g, 0, 1).render(_._time, !0, !0),
                    (h = 1);
                }
                c && c.apply(_, d || []);
              },
            },
            n
          )
        );
      return p ? _.render(0) : _;
    }),
    (t.tweenFromTo = function (i, n, s) {
      return this.tweenTo(n, Qt({ startAt: { time: Ht(this, i) } }, s));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Po(this, Ht(this, i));
    }),
    (t.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Po(this, Ht(this, i), 1);
    }),
    (t.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + pt);
    }),
    (t.shiftChildren = function (i, n, s) {
      s === void 0 && (s = 0);
      for (var o = this._first, u = this.labels, l; o; )
        o._start >= s && ((o._start += i), (o._end += i)), (o = o._next);
      if (n) for (l in u) u[l] >= s && (u[l] += i);
      return ti(this);
    }),
    (t.invalidate = function (i) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
      return a.prototype.invalidate.call(this, i);
    }),
    (t.clear = function (i) {
      i === void 0 && (i = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        ti(this)
      );
    }),
    (t.totalDuration = function (i) {
      var n = 0,
        s = this,
        o = s._last,
        u = gr,
        l,
        c,
        d;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -i : i)
        );
      if (s._dirty) {
        for (d = s.parent; o; )
          (l = o._prev),
            o._dirty && o.totalDuration(),
            (c = o._start),
            c > u && s._sort && o._ts && !s._lock
              ? ((s._lock = 1), (pr(s, o, c - o._delay, 1)._lock = 0))
              : (u = c),
            c < 0 &&
              o._ts &&
              ((n -= c),
              ((!d && !s._dp) || (d && d.smoothChildTiming)) &&
                ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
              s.shiftChildren(-c, !1, -1 / 0),
              (u = 0)),
            o._end > n && o._ts && (n = o._end),
            (o = l);
        Oi(s, s === ke && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((ke._ts && (ba(ke, jn(i, ke)), (wa = $t.frame)), $t.frame >= To)) {
        To += Vt.autoSleep || 120;
        var n = ke._first;
        if ((!n || !n._ts) && Vt.autoSleep && $t._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || $t.sleep();
        }
      }
    }),
    e
  );
})(pn);
Qt(Ft.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var wl = function (e, t, r, i, n, s, o) {
    var u = new kt(this._pt, e, t, 0, 1, Ja, null, n),
      l = 0,
      c = 0,
      d,
      p,
      h,
      _,
      f,
      g,
      x,
      w;
    for (
      u.b = r,
        u.e = i,
        r += "",
        i += "",
        (x = ~i.indexOf("random(")) && (i = hn(i)),
        s && ((w = [r, i]), s(w, e, t), (r = w[0]), (i = w[1])),
        p = r.match(cs) || [];
      (d = cs.exec(i));

    )
      (_ = d[0]),
        (f = i.substring(l, d.index)),
        h ? (h = (h + 1) % 5) : f.substr(-5) === "rgba(" && (h = 1),
        _ !== p[c++] &&
          ((g = parseFloat(p[c - 1]) || 0),
          (u._pt = {
            _next: u._pt,
            p: f || c === 1 ? f : ",",
            s: g,
            c: _.charAt(1) === "=" ? Fi(g, _) - g : parseFloat(_) - g,
            m: h && h < 4 ? Math.round : 0,
          }),
          (l = cs.lastIndex));
    return (
      (u.c = l < i.length ? i.substring(l, i.length) : ""),
      (u.fp = o),
      (ma.test(i) || x) && (u.e = 0),
      (this._pt = u),
      u
    );
  },
  ao = function (e, t, r, i, n, s, o, u, l, c) {
    Me(i) && (i = i(n || 0, e, s));
    var d = e[t],
      p =
        r !== "get"
          ? r
          : Me(d)
          ? l
            ? e[
                t.indexOf("set") || !Me(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](l)
            : e[t]()
          : d,
      h = Me(d) ? (l ? El : Qa) : lo,
      _;
    if (
      (tt(i) &&
        (~i.indexOf("random(") && (i = hn(i)),
        i.charAt(1) === "=" &&
          ((_ = Fi(p, i) + (dt(p) || 0)), (_ || _ === 0) && (i = _))),
      !c || p !== i || Bs)
    )
      return !isNaN(p * i) && i !== ""
        ? ((_ = new kt(
            this._pt,
            e,
            t,
            +p || 0,
            i - (p || 0),
            typeof d == "boolean" ? kl : Za,
            0,
            h
          )),
          l && (_.fp = l),
          o && _.modifier(o, this, e),
          (this._pt = _))
        : (!d && !(t in e) && io(t, i),
          wl.call(this, e, t, p, i, h, u || Vt.stringFilter, l));
  },
  Fl = function (e, t, r, i, n) {
    if (
      (Me(e) && (e = Ji(e, n, t, r, i)),
      !xr(e) || (e.style && e.nodeType) || Dt(e) || Da(e))
    )
      return tt(e) ? Ji(e, n, t, r, i) : e;
    var s = {},
      o;
    for (o in e) s[o] = Ji(e[o], n, t, r, i);
    return s;
  },
  Ga = function (e, t, r, i, n, s) {
    var o, u, l, c;
    if (
      It[e] &&
      (o = new It[e]()).init(
        n,
        o.rawVars ? t[e] : Fl(t[e], i, n, s, r),
        r,
        i,
        s
      ) !== !1 &&
      ((r._pt = u = new kt(r._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
      r !== xi)
    )
      for (l = r._ptLookup[r._targets.indexOf(n)], c = o._props.length; c--; )
        l[o._props[c]] = u;
    return o;
  },
  Or,
  Bs,
  uo = function a(e, t, r) {
    var i = e.vars,
      n = i.ease,
      s = i.startAt,
      o = i.immediateRender,
      u = i.lazy,
      l = i.onUpdate,
      c = i.runBackwards,
      d = i.yoyoEase,
      p = i.keyframes,
      h = i.autoRevert,
      _ = e._dur,
      f = e._startAt,
      g = e._targets,
      x = e.parent,
      w = x && x.data === "nested" ? x.vars.targets : g,
      E = e._overwrite === "auto" && !Js,
      m = e.timeline,
      F,
      k,
      v,
      b,
      A,
      S,
      I,
      P,
      Y,
      $,
      K,
      B,
      L;
    if (
      (m && (!p || !n) && (n = "none"),
      (e._ease = ri(n, ki.ease)),
      (e._yEase = d ? Ua(ri(d === !0 ? n : d, ki.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !m && !!i.runBackwards),
      !m || (p && !i.stagger))
    ) {
      if (
        ((P = g[0] ? ei(g[0]).harness : 0),
        (B = P && i[P.prop]),
        (F = Gn(i, no)),
        f &&
          (f._zTime < 0 && f.progress(1),
          t < 0 && c && o && !h ? f.render(-1, !0) : f.revert(c && _ ? Nn : Zu),
          (f._lazy = 0)),
        s)
      ) {
        if (
          ($r(
            (e._startAt = Ye.set(
              g,
              Qt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: x,
                  immediateRender: !0,
                  lazy: !f && Et(u),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return qt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (_t || (!o && !h)) && e._startAt.revert(Nn),
          o && _ && t <= 0 && r <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (c && _ && !f) {
        if (
          (t && (o = !1),
          (v = Qt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !f && Et(u),
              immediateRender: o,
              stagger: 0,
              parent: x,
            },
            F
          )),
          B && (v[P.prop] = B),
          $r((e._startAt = Ye.set(g, v))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (_t ? e._startAt.revert(Nn) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !o)
        )
          a(e._startAt, pt, pt);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, u = (_ && Et(u)) || (u && !_), k = 0;
        k < g.length;
        k++
      ) {
        if (
          ((A = g[k]),
          (I = A._gsap || oo(g)[k]._gsap),
          (e._ptLookup[k] = $ = {}),
          ks[I.id] && Nr.length && Wn(),
          (K = w === g ? k : w.indexOf(A)),
          P &&
            (Y = new P()).init(A, B || F, e, K, w) !== !1 &&
            ((e._pt = b =
              new kt(e._pt, A, Y.name, 0, 1, Y.render, Y, 0, Y.priority)),
            Y._props.forEach(function (G) {
              $[G] = b;
            }),
            Y.priority && (S = 1)),
          !P || B)
        )
          for (v in F)
            It[v] && (Y = Ga(v, F, e, K, A, w))
              ? Y.priority && (S = 1)
              : ($[v] = b =
                  ao.call(e, A, v, "get", F[v], K, w, 0, i.stringFilter));
        e._op && e._op[k] && e.kill(A, e._op[k]),
          E &&
            e._pt &&
            ((Or = e),
            ke.killTweensOf(A, $, e.globalTime(t)),
            (L = !e.parent),
            (Or = 0)),
          e._pt && u && (ks[I.id] = 1);
      }
      S && eu(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = l),
      (e._initted = (!e._op || e._pt) && !L),
      p && t <= 0 && m.render(gr, !0, !0);
  },
  bl = function (e, t, r, i, n, s, o, u) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      c,
      d,
      p,
      h;
    if (!l)
      for (
        l = e._ptCache[t] = [], p = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((c = p[h][t]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next;
        if (!c)
          return (
            (Bs = 1),
            (e.vars[t] = "+=0"),
            uo(e, o),
            (Bs = 0),
            u ? cn(t + " not eligible for reset") : 1
          );
        l.push(c);
      }
    for (h = l.length; h--; )
      (d = l[h]),
        (c = d._pt || d),
        (c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + s * c.c),
        (c.c = r - c.s),
        d.e && (d.e = Ne(r) + dt(d.e)),
        d.b && (d.b = c.s + dt(d.b));
  },
  Sl = function (e, t) {
    var r = e[0] ? ei(e[0]).harness : 0,
      i = r && r.aliases,
      n,
      s,
      o,
      u;
    if (!i) return t;
    n = ai({}, t);
    for (s in i)
      if (s in n) for (u = i[s].split(","), o = u.length; o--; ) n[u[o]] = n[s];
    return n;
  },
  Tl = function (e, t, r, i) {
    var n = t.ease || i || "power1.inOut",
      s,
      o;
    if (Dt(t))
      (o = r[e] || (r[e] = [])),
        t.forEach(function (u, l) {
          return o.push({ t: (l / (t.length - 1)) * 100, v: u, e: n });
        });
    else
      for (s in t)
        (o = r[s] || (r[s] = [])),
          s === "ease" || o.push({ t: parseFloat(e), v: t[s], e: n });
  },
  Ji = function (e, t, r, i, n) {
    return Me(e)
      ? e.call(t, r, i, n)
      : tt(e) && ~e.indexOf("random(")
      ? hn(e)
      : e;
  },
  ja = so + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Ka = {};
At(ja + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
  return (Ka[a] = 1);
});
var Ye = (function (a) {
  pa(e, a);
  function e(r, i, n, s) {
    var o;
    typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
      (o = a.call(this, s ? i : Qi(i)) || this);
    var u = o.vars,
      l = u.duration,
      c = u.delay,
      d = u.immediateRender,
      p = u.stagger,
      h = u.overwrite,
      _ = u.keyframes,
      f = u.defaults,
      g = u.scrollTrigger,
      x = u.yoyoEase,
      w = i.parent || ke,
      E = (Dt(r) || Da(r) ? Tr(r[0]) : "length" in i) ? [r] : jt(r),
      m,
      F,
      k,
      v,
      b,
      A,
      S,
      I;
    if (
      ((o._targets = E.length
        ? oo(E)
        : cn(
            "GSAP target " + r + " not found. https://gsap.com",
            !Vt.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = h),
      _ || p || Cn(l) || Cn(c))
    ) {
      if (
        ((i = o.vars),
        (m = o.timeline =
          new Ft({
            data: "nested",
            defaults: f || {},
            targets: w && w.data === "nested" ? w.vars.targets : E,
          })),
        m.kill(),
        (m.parent = m._dp = Cr(o)),
        (m._start = 0),
        p || Cn(l) || Cn(c))
      ) {
        if (((v = E.length), (S = p && Ra(p)), xr(p)))
          for (b in p) ~ja.indexOf(b) && (I || (I = {}), (I[b] = p[b]));
        for (F = 0; F < v; F++)
          (k = Gn(i, Ka)),
            (k.stagger = 0),
            x && (k.yoyoEase = x),
            I && ai(k, I),
            (A = E[F]),
            (k.duration = +Ji(l, Cr(o), F, A, E)),
            (k.delay = (+Ji(c, Cr(o), F, A, E) || 0) - o._delay),
            !p &&
              v === 1 &&
              k.delay &&
              ((o._delay = c = k.delay), (o._start += c), (k.delay = 0)),
            m.to(A, k, S ? S(F, A, E) : 0),
            (m._ease = he.none);
        m.duration() ? (l = c = 0) : (o.timeline = 0);
      } else if (_) {
        Qi(Qt(m.vars.defaults, { ease: "none" })),
          (m._ease = ri(_.ease || i.ease || "none"));
        var P = 0,
          Y,
          $,
          K;
        if (Dt(_))
          _.forEach(function (B) {
            return m.to(E, B, ">");
          }),
            m.duration();
        else {
          k = {};
          for (b in _)
            b === "ease" || b === "easeEach" || Tl(b, _[b], k, _.easeEach);
          for (b in k)
            for (
              Y = k[b].sort(function (B, L) {
                return B.t - L.t;
              }),
                P = 0,
                F = 0;
              F < Y.length;
              F++
            )
              ($ = Y[F]),
                (K = {
                  ease: $.e,
                  duration: (($.t - (F ? Y[F - 1].t : 0)) / 100) * l,
                }),
                (K[b] = $.v),
                m.to(E, K, P),
                (P += K.duration);
          m.duration() < l && m.to({}, { duration: l - m.duration() });
        }
      }
      l || o.duration((l = m.duration()));
    } else o.timeline = 0;
    return (
      h === !0 && !Js && ((Or = Cr(o)), ke.killTweensOf(E), (Or = 0)),
      pr(w, Cr(o), n),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      (d ||
        (!l &&
          !_ &&
          o._start === et(w._time) &&
          Et(d) &&
          nl(Cr(o)) &&
          w.data !== "nested")) &&
        ((o._tTime = -1e-8), o.render(Math.max(0, -c) || 0)),
      g && ka(Cr(o), g),
      o
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (i, n, s) {
      var o = this._time,
        u = this._tDur,
        l = this._dur,
        c = i < 0,
        d = i > u - pt && !c ? u : i < pt ? 0 : i,
        p,
        h,
        _,
        f,
        g,
        x,
        w,
        E,
        m;
      if (!l) ol(this, i, n, s);
      else if (
        d !== this._tTime ||
        !i ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c)
      ) {
        if (((p = d), (E = this.timeline), this._repeat)) {
          if (((f = l + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(f * 100 + i, n, s);
          if (
            ((p = et(d % f)),
            d === u
              ? ((_ = this._repeat), (p = l))
              : ((_ = ~~(d / f)),
                _ && _ === et(d / f) && ((p = l), _--),
                p > l && (p = l)),
            (x = this._yoyo && _ & 1),
            x && ((m = this._yEase), (p = l - p)),
            (g = Pi(this._tTime, f)),
            p === o && !s && this._initted && _ === g)
          )
            return (this._tTime = d), this;
          _ !== g &&
            (E && this._yEase && Xa(E, x),
            this.vars.repeatRefresh &&
              !x &&
              !this._lock &&
              this._time !== f &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(et(f * _), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Pa(this, c ? i : p, s, n, d)) return (this._tTime = 0), this;
          if (o !== this._time && !(s && this.vars.repeatRefresh && _ !== g))
            return this;
          if (l !== this._dur) return this.render(i, n, s);
        }
        if (
          ((this._tTime = d),
          (this._time = p),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = w = (m || this._ease)(p / l)),
          this._from && (this.ratio = w = 1 - w),
          p && !o && !n && !_ && (qt(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (h = this._pt; h; ) h.r(w, h.d), (h = h._next);
        (E && E.render(i < 0 ? i : E._dur * E._ease(p / this._dur), n, s)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !n &&
            (c && Ps(this, i, n, s), qt(this, "onUpdate")),
          this._repeat &&
            _ !== g &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            qt(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (c && !this._onUpdate && Ps(this, i, !0, !0),
            (i || !l) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              $r(this, 1),
            !n &&
              !(c && !o) &&
              (d || o || x) &&
              (qt(this, d === u ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < u && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        a.prototype.invalidate.call(this, i)
      );
    }),
    (t.resetTo = function (i, n, s, o, u) {
      dn || $t.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || uo(this, l),
        (c = this._ease(l / this._dur)),
        bl(this, i, n, s, o, c, l, u)
          ? this.resetTo(i, n, s, o, 1)
          : (os(this, 0),
            this.parent ||
              Ea(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (i, n) {
      if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Vi(this) : this;
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, n, Or && Or.vars.overwrite !== !0)
            ._first || Vi(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            Oi(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var o = this._targets,
        u = i ? jt(i) : o,
        l = this._ptLookup,
        c = this._pt,
        d,
        p,
        h,
        _,
        f,
        g,
        x;
      if ((!n || n === "all") && rl(o, u))
        return n === "all" && (this._pt = 0), Vi(this);
      for (
        d = this._op = this._op || [],
          n !== "all" &&
            (tt(n) &&
              ((f = {}),
              At(n, function (w) {
                return (f[w] = 1);
              }),
              (n = f)),
            (n = Sl(o, n))),
          x = o.length;
        x--;

      )
        if (~u.indexOf(o[x])) {
          (p = l[x]),
            n === "all"
              ? ((d[x] = n), (_ = p), (h = {}))
              : ((h = d[x] = d[x] || {}), (_ = n));
          for (f in _)
            (g = p && p[f]),
              g &&
                ((!("kill" in g.d) || g.d.kill(f) === !0) && ns(this, g, "_pt"),
                delete p[f]),
              h !== "all" && (h[f] = 1);
        }
      return this._initted && !this._pt && c && Vi(this), this;
    }),
    (e.to = function (i, n) {
      return new e(i, n, arguments[2]);
    }),
    (e.from = function (i, n) {
      return Zi(1, arguments);
    }),
    (e.delayedCall = function (i, n, s, o) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: o,
      });
    }),
    (e.fromTo = function (i, n, s) {
      return Zi(2, arguments);
    }),
    (e.set = function (i, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(i, n);
    }),
    (e.killTweensOf = function (i, n, s) {
      return ke.killTweensOf(i, n, s);
    }),
    e
  );
})(pn);
Qt(Ye.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
At("staggerTo,staggerFrom,staggerFromTo", function (a) {
  Ye[a] = function () {
    var e = new Ft(),
      t = Ms.call(arguments, 0);
    return t.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, t);
  };
});
var lo = function (e, t, r) {
    return (e[t] = r);
  },
  Qa = function (e, t, r) {
    return e[t](r);
  },
  El = function (e, t, r, i) {
    return e[t](i.fp, r);
  },
  Al = function (e, t, r) {
    return e.setAttribute(t, r);
  },
  co = function (e, t) {
    return Me(e[t]) ? Qa : eo(e[t]) && e.setAttribute ? Al : lo;
  },
  Za = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  kl = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Ja = function (e, t) {
    var r = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; r; )
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  },
  fo = function (e, t) {
    for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  Pl = function (e, t, r, i) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === i && n.modifier(e, t, r), (n = s);
  },
  Ol = function (e) {
    for (var t = this._pt, r, i; t; )
      (i = t._next),
        (t.p === e && !t.op) || t.op === e
          ? ns(this, t, "_pt")
          : t.dep || (r = 1),
        (t = i);
    return !r;
  },
  Ml = function (e, t, r, i) {
    i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
  },
  eu = function (e) {
    for (var t = e._pt, r, i, n, s; t; ) {
      for (r = t._next, i = n; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : s) ? (t._prev._next = t) : (n = t),
        (t._next = i) ? (i._prev = t) : (s = t),
        (t = r);
    }
    e._pt = n;
  },
  kt = (function () {
    function a(t, r, i, n, s, o, u, l, c) {
      (this.t = r),
        (this.s = n),
        (this.c = s),
        (this.p = i),
        (this.r = o || Za),
        (this.d = u || this),
        (this.set = l || lo),
        (this.pr = c || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = a.prototype;
    return (
      (e.modifier = function (r, i, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Ml),
          (this.m = r),
          (this.mt = n),
          (this.tween = i);
      }),
      a
    );
  })();
At(
  so +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (a) {
    return (no[a] = 1);
  }
);
Ut.TweenMax = Ut.TweenLite = Ye;
Ut.TimelineLite = Ut.TimelineMax = Ft;
ke = new Ft({
  sortChildren: !1,
  defaults: ki,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Vt.stringFilter = Va;
var ii = [],
  In = {},
  Rl = [],
  Mo = 0,
  Ll = 0,
  _s = function (e) {
    return (In[e] || Rl).map(function (t) {
      return t();
    });
  },
  Ns = function () {
    var e = Date.now(),
      t = [];
    e - Mo > 2 &&
      (_s("matchMediaInit"),
      ii.forEach(function (r) {
        var i = r.queries,
          n = r.conditions,
          s,
          o,
          u,
          l;
        for (o in i)
          (s = fr.matchMedia(i[o]).matches),
            s && (u = 1),
            s !== n[o] && ((n[o] = s), (l = 1));
        l && (r.revert(), u && t.push(r));
      }),
      _s("matchMediaRevert"),
      t.forEach(function (r) {
        return r.onMatch(r, function (i) {
          return r.add(null, i);
        });
      }),
      (Mo = e),
      _s("matchMedia"));
  },
  tu = (function () {
    function a(t, r) {
      (this.selector = r && Rs(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Ll++),
        t && this.add(t);
    }
    var e = a.prototype;
    return (
      (e.add = function (r, i, n) {
        Me(r) && ((n = i), (i = r), (r = Me));
        var s = this,
          o = function () {
            var l = Se,
              c = s.selector,
              d;
            return (
              l && l !== s && l.data.push(s),
              n && (s.selector = Rs(n)),
              (Se = s),
              (d = i.apply(s, arguments)),
              Me(d) && s._r.push(d),
              (Se = l),
              (s.selector = c),
              (s.isReverted = !1),
              d
            );
          };
        return (
          (s.last = o),
          r === Me
            ? o(s, function (u) {
                return s.add(null, u);
              })
            : r
            ? (s[r] = o)
            : o
        );
      }),
      (e.ignore = function (r) {
        var i = Se;
        (Se = null), r(this), (Se = i);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof a
              ? r.push.apply(r, i.getTweens())
              : i instanceof Ye &&
                  !(i.parent && i.parent.data === "nested") &&
                  r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var n = this;
        if (
          (r
            ? (function () {
                for (var o = n.getTweens(), u = n.data.length, l; u--; )
                  (l = n.data[u]),
                    l.data === "isFlip" &&
                      (l.revert(),
                      l.getChildren(!0, !0, !1).forEach(function (c) {
                        return o.splice(o.indexOf(c), 1);
                      }));
                for (
                  o
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, d) {
                      return d.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(r);
                    }),
                    u = n.data.length;
                  u--;

                )
                  (l = n.data[u]),
                    l instanceof Ft
                      ? l.data !== "nested" &&
                        (l.scrollTrigger && l.scrollTrigger.revert(), l.kill())
                      : !(l instanceof Ye) && l.revert && l.revert(r);
                n._r.forEach(function (c) {
                  return c(r, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          i)
        )
          for (var s = ii.length; s--; )
            ii[s].id === this.id && ii.splice(s, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      a
    );
  })(),
  Bl = (function () {
    function a(t) {
      (this.contexts = []), (this.scope = t), Se && Se.data.push(this);
    }
    var e = a.prototype;
    return (
      (e.add = function (r, i, n) {
        xr(r) || (r = { matches: r });
        var s = new tu(0, n || this.scope),
          o = (s.conditions = {}),
          u,
          l,
          c;
        Se && !s.selector && (s.selector = Se.selector),
          this.contexts.push(s),
          (i = s.add("onMatch", i)),
          (s.queries = r);
        for (l in r)
          l === "all"
            ? (c = 1)
            : ((u = fr.matchMedia(r[l])),
              u &&
                (ii.indexOf(s) < 0 && ii.push(s),
                (o[l] = u.matches) && (c = 1),
                u.addListener
                  ? u.addListener(Ns)
                  : u.addEventListener("change", Ns)));
        return (
          c &&
            i(s, function (d) {
              return s.add(null, d);
            }),
          this
        );
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      a
    );
  })(),
  Kn = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      t.forEach(function (i) {
        return $a(i);
      });
    },
    timeline: function (e) {
      return new Ft(e);
    },
    getTweensOf: function (e, t) {
      return ke.getTweensOf(e, t);
    },
    getProperty: function (e, t, r, i) {
      tt(e) && (e = jt(e)[0]);
      var n = ei(e || {}).get,
        s = r ? Ta : Sa;
      return (
        r === "native" && (r = ""),
        e &&
          (t
            ? s(((It[t] && It[t].get) || n)(e, t, r, i))
            : function (o, u, l) {
                return s(((It[o] && It[o].get) || n)(e, o, u, l));
              })
      );
    },
    quickSetter: function (e, t, r) {
      if (((e = jt(e)), e.length > 1)) {
        var i = e.map(function (c) {
            return Ot.quickSetter(c, t, r);
          }),
          n = i.length;
        return function (c) {
          for (var d = n; d--; ) i[d](c);
        };
      }
      e = e[0] || {};
      var s = It[t],
        o = ei(e),
        u = (o.harness && (o.harness.aliases || {})[t]) || t,
        l = s
          ? function (c) {
              var d = new s();
              (xi._pt = 0),
                d.init(e, r ? c + r : c, xi, 0, [e]),
                d.render(1, d),
                xi._pt && fo(1, xi);
            }
          : o.set(e, u);
      return s
        ? l
        : function (c) {
            return l(e, u, r ? c + r : c, o, 1);
          };
    },
    quickTo: function (e, t, r) {
      var i,
        n = Ot.to(
          e,
          ai(((i = {}), (i[t] = "+=0.1"), (i.paused = !0), i), r || {})
        ),
        s = function (u, l, c) {
          return n.resetTo(t, u, l, c);
        };
      return (s.tween = n), s;
    },
    isTweening: function (e) {
      return ke.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = ri(e.ease, ki.ease)), Eo(ki, e || {});
    },
    config: function (e) {
      return Eo(Vt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        r = e.effect,
        i = e.plugins,
        n = e.defaults,
        s = e.extendTimeline;
      (i || "").split(",").forEach(function (o) {
        return (
          o && !It[o] && !Ut[o] && cn(t + " effect requires " + o + " plugin.")
        );
      }),
        (fs[t] = function (o, u, l) {
          return r(jt(o), Qt(u || {}, n), l);
        }),
        s &&
          (Ft.prototype[t] = function (o, u, l) {
            return this.add(fs[t](o, xr(u) ? u : (l = u) && {}, this), l);
          });
    },
    registerEase: function (e, t) {
      he[e] = ri(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? ri(e, t) : he;
    },
    getById: function (e) {
      return ke.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var r = new Ft(e),
        i,
        n;
      for (
        r.smoothChildTiming = Et(e.smoothChildTiming),
          ke.remove(r),
          r._dp = 0,
          r._time = r._tTime = ke._time,
          i = ke._first;
        i;

      )
        (n = i._next),
          (t ||
            !(
              !i._dur &&
              i instanceof Ye &&
              i.vars.onComplete === i._targets[0]
            )) &&
            pr(r, i, i._start - i._delay),
          (i = n);
      return pr(ke, r, 0), r;
    },
    context: function (e, t) {
      return e ? new tu(e, t) : Se;
    },
    matchMedia: function (e) {
      return new Bl(e);
    },
    matchMediaRefresh: function () {
      return (
        ii.forEach(function (e) {
          var t = e.conditions,
            r,
            i;
          for (i in t) t[i] && ((t[i] = !1), (r = 1));
          r && e.revert();
        }) || Ns()
      );
    },
    addEventListener: function (e, t) {
      var r = In[e] || (In[e] = []);
      ~r.indexOf(t) || r.push(t);
    },
    removeEventListener: function (e, t) {
      var r = In[e],
        i = r && r.indexOf(t);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: pl,
      wrapYoyo: _l,
      distribute: Ra,
      random: Ba,
      snap: La,
      normalize: dl,
      getUnit: dt,
      clamp: ll,
      splitColor: Ya,
      toArray: jt,
      selector: Rs,
      mapRange: za,
      pipe: fl,
      unitize: hl,
      interpolate: Dl,
      shuffle: Ma,
    },
    install: va,
    effects: fs,
    ticker: $t,
    updateRoot: Ft.updateRoot,
    plugins: It,
    globalTimeline: ke,
    core: {
      PropTween: kt,
      globals: Ca,
      Tween: Ye,
      Timeline: Ft,
      Animation: pn,
      getCache: ei,
      _removeLinkedListItem: ns,
      reverting: function () {
        return _t;
      },
      context: function (e) {
        return e && Se && (Se.data.push(e), (e._ctx = Se)), Se;
      },
      suppressOverwrites: function (e) {
        return (Js = e);
      },
    },
  };
At("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
  return (Kn[a] = Ye[a]);
});
$t.add(Ft.updateRoot);
xi = Kn.to({}, { duration: 0 });
var Nl = function (e, t) {
    for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
      r = r._next;
    return r;
  },
  zl = function (e, t) {
    var r = e._targets,
      i,
      n,
      s;
    for (i in t)
      for (n = r.length; n--; )
        (s = e._ptLookup[n][i]),
          s &&
            (s = s.d) &&
            (s._pt && (s = Nl(s, i)),
            s && s.modifier && s.modifier(t[i], e, r[n], i));
  },
  Ds = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, n, s) {
        s._onInit = function (o) {
          var u, l;
          if (
            (tt(n) &&
              ((u = {}),
              At(n, function (c) {
                return (u[c] = 1);
              }),
              (n = u)),
            t)
          ) {
            u = {};
            for (l in n) u[l] = t(n[l]);
            n = u;
          }
          zl(o, n);
        };
      },
    };
  },
  Ot =
    Kn.registerPlugin(
      {
        name: "attr",
        init: function (e, t, r, i, n) {
          var s, o, u;
          this.tween = r;
          for (s in t)
            (u = e.getAttribute(s) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (u || 0) + "",
                t[s],
                i,
                n,
                0,
                0,
                s
              )),
              (o.op = s),
              (o.b = u),
              this._props.push(s);
        },
        render: function (e, t) {
          for (var r = t._pt; r; )
            _t ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var r = t.length; r--; )
            this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Ds("roundProps", Ls),
      Ds("modifiers"),
      Ds("snap", La)
    ) || Kn;
Ye.version = Ft.version = Ot.version = "3.12.5";
xa = 1;
to() && Mi();
he.Power0;
he.Power1;
he.Power2;
he.Power3;
he.Power4;
he.Linear;
he.Quad;
he.Cubic;
he.Quart;
he.Quint;
he.Strong;
he.Elastic;
he.Back;
he.SteppedEase;
he.Bounce;
he.Sine;
he.Expo;
he.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ro,
  Mr,
  bi,
  ho,
  Zr,
  Lo,
  po,
  Il = function () {
    return typeof window < "u";
  },
  Er = {},
  Wr = 180 / Math.PI,
  Si = Math.PI / 180,
  pi = Math.atan2,
  Bo = 1e8,
  _o = /([A-Z])/g,
  $l = /(left|right|width|margin|padding|x)/i,
  Yl = /[\s,\(]\S/,
  _r = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  zs = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  ql = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  Vl = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Ul = function (e, t) {
    var r = t.s + t.c * e;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  ru = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  iu = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Xl = function (e, t, r) {
    return (e.style[t] = r);
  },
  Hl = function (e, t, r) {
    return e.style.setProperty(t, r);
  },
  Wl = function (e, t, r) {
    return (e._gsap[t] = r);
  },
  Gl = function (e, t, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  jl = function (e, t, r, i, n) {
    var s = e._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
  },
  Kl = function (e, t, r, i, n) {
    var s = e._gsap;
    (s[t] = r), s.renderTransform(n, s);
  },
  Pe = "transform",
  Pt = Pe + "Origin",
  Ql = function a(e, t) {
    var r = this,
      i = this.target,
      n = i.style,
      s = i._gsap;
    if (e in Er && n) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = _r[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (r.tfm[o] = wr(i, o));
              })
            : (this.tfm[e] = s.x ? s[e] : wr(i, e)),
          e === Pt && (this.tfm.zOrigin = s.zOrigin);
      else
        return _r.transform.split(",").forEach(function (o) {
          return a.call(r, o, t);
        });
      if (this.props.indexOf(Pe) >= 0) return;
      s.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(Pt, t, "")),
        (e = Pe);
    }
    (n || t) && this.props.push(e, t, n[e]);
  },
  nu = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  Zl = function () {
    var e = this.props,
      t = this.target,
      r = t.style,
      i = t._gsap,
      n,
      s;
    for (n = 0; n < e.length; n += 3)
      e[n + 1]
        ? (t[e[n]] = e[n + 2])
        : e[n + 2]
        ? (r[e[n]] = e[n + 2])
        : r.removeProperty(
            e[n].substr(0, 2) === "--"
              ? e[n]
              : e[n].replace(_o, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg &&
        (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (n = po()),
        (!n || !n.isStart) &&
          !r[Pe] &&
          (nu(r),
          i.zOrigin &&
            r[Pt] &&
            ((r[Pt] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  su = function (e, t) {
    var r = { target: e, props: [], revert: Zl, save: Ql };
    return (
      e._gsap || Ot.core.getCache(e),
      t &&
        t.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  ou,
  Is = function (e, t) {
    var r = Mr.createElementNS
      ? Mr.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Mr.createElement(e);
    return r && r.style ? r : Mr.createElement(e);
  },
  mr = function a(e, t, r) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(_o, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!r && a(e, Ri(t) || t, 1)) ||
      ""
    );
  },
  No = "O,Moz,ms,Ms,Webkit".split(","),
  Ri = function (e, t, r) {
    var i = t || Zr,
      n = i.style,
      s = 5;
    if (e in n && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      s-- && !(No[s] + e in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? No[s] : "") + e;
  },
  $s = function () {
    Il() &&
      window.document &&
      ((Ro = window),
      (Mr = Ro.document),
      (bi = Mr.documentElement),
      (Zr = Is("div") || { style: {} }),
      Is("div"),
      (Pe = Ri(Pe)),
      (Pt = Pe + "Origin"),
      (Zr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (ou = !!Ri("perspective")),
      (po = Ot.core.reverting),
      (ho = 1));
  },
  gs = function a(e) {
    var t = Is(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      i = this.nextSibling,
      n = this.style.cssText,
      s;
    if (
      (bi.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = a);
      } catch {}
    else this._gsapBBox && (s = this._gsapBBox());
    return (
      r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
      bi.removeChild(t),
      (this.style.cssText = n),
      s
    );
  },
  zo = function (e, t) {
    for (var r = t.length; r--; )
      if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
  },
  au = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = gs.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === gs || (t = gs.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +zo(e, ["x", "cx", "x1"]) || 0,
            y: +zo(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  uu = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && au(e));
  },
  ui = function (e, t) {
    if (t) {
      var r = e.style,
        i;
      t in Er && t !== Pt && (t = Pe),
        r.removeProperty
          ? ((i = t.substr(0, 2)),
            (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            r.removeProperty(
              i === "--" ? t : t.replace(_o, "-$1").toLowerCase()
            ))
          : r.removeAttribute(t);
    }
  },
  Rr = function (e, t, r, i, n, s) {
    var o = new kt(e._pt, t, r, 0, 1, s ? iu : ru);
    return (e._pt = o), (o.b = i), (o.e = n), e._props.push(r), o;
  },
  Io = { deg: 1, rad: 1, turn: 1 },
  Jl = { grid: 1, flex: 1 },
  Yr = function a(e, t, r, i) {
    var n = parseFloat(r) || 0,
      s = (r + "").trim().substr((n + "").length) || "px",
      o = Zr.style,
      u = $l.test(t),
      l = e.tagName.toLowerCase() === "svg",
      c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
      d = 100,
      p = i === "px",
      h = i === "%",
      _,
      f,
      g,
      x;
    if (i === s || !n || Io[i] || Io[s]) return n;
    if (
      (s !== "px" && !p && (n = a(e, t, r, "px")),
      (x = e.getCTM && uu(e)),
      (h || s === "%") && (Er[t] || ~t.indexOf("adius")))
    )
      return (
        (_ = x ? e.getBBox()[u ? "width" : "height"] : e[c]),
        Ne(h ? (n / _) * d : (n / 100) * _)
      );
    if (
      ((o[u ? "width" : "height"] = d + (p ? s : i)),
      (f =
        ~t.indexOf("adius") || (i === "em" && e.appendChild && !l)
          ? e
          : e.parentNode),
      x && (f = (e.ownerSVGElement || {}).parentNode),
      (!f || f === Mr || !f.appendChild) && (f = Mr.body),
      (g = f._gsap),
      g && h && g.width && u && g.time === $t.time && !g.uncache)
    )
      return Ne((n / g.width) * d);
    if (h && (t === "height" || t === "width")) {
      var w = e.style[t];
      (e.style[t] = d + i), (_ = e[c]), w ? (e.style[t] = w) : ui(e, t);
    } else
      (h || s === "%") &&
        !Jl[mr(f, "display")] &&
        (o.position = mr(e, "position")),
        f === e && (o.position = "static"),
        f.appendChild(Zr),
        (_ = Zr[c]),
        f.removeChild(Zr),
        (o.position = "absolute");
    return (
      u && h && ((g = ei(f)), (g.time = $t.time), (g.width = f[c])),
      Ne(p ? (_ * n) / d : _ && n ? (d / _) * n : 0)
    );
  },
  wr = function (e, t, r, i) {
    var n;
    return (
      ho || $s(),
      t in _r &&
        t !== "transform" &&
        ((t = _r[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Er[t] && t !== "transform"
        ? ((n = Dn(e, i)),
          (n =
            t !== "transformOrigin"
              ? n[t]
              : n.svg
              ? n.origin
              : Zn(mr(e, Pt)) + " " + n.zOrigin + "px"))
        : ((n = e.style[t]),
          (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
            (n =
              (Qn[t] && Qn[t](e, t, r)) ||
              mr(e, t) ||
              Fa(e, t) ||
              (t === "opacity" ? 1 : 0))),
      r && !~(n + "").trim().indexOf(" ") ? Yr(e, t, n, r) + r : n
    );
  },
  ec = function (e, t, r, i) {
    if (!r || r === "none") {
      var n = Ri(t, e, 1),
        s = n && mr(e, n, 1);
      s && s !== r
        ? ((t = n), (r = s))
        : t === "borderColor" && (r = mr(e, "borderTopColor"));
    }
    var o = new kt(this._pt, e.style, t, 0, 1, Ja),
      u = 0,
      l = 0,
      c,
      d,
      p,
      h,
      _,
      f,
      g,
      x,
      w,
      E,
      m,
      F;
    if (
      ((o.b = r),
      (o.e = i),
      (r += ""),
      (i += ""),
      i === "auto" &&
        ((f = e.style[t]),
        (e.style[t] = i),
        (i = mr(e, t) || i),
        f ? (e.style[t] = f) : ui(e, t)),
      (c = [r, i]),
      Va(c),
      (r = c[0]),
      (i = c[1]),
      (p = r.match(yi) || []),
      (F = i.match(yi) || []),
      F.length)
    ) {
      for (; (d = yi.exec(i)); )
        (g = d[0]),
          (w = i.substring(u, d.index)),
          _
            ? (_ = (_ + 1) % 5)
            : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (_ = 1),
          g !== (f = p[l++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            g.charAt(1) === "=" && (g = Fi(h, g) + m),
            (x = parseFloat(g)),
            (E = g.substr((x + "").length)),
            (u = yi.lastIndex - E.length),
            E ||
              ((E = E || Vt.units[t] || m),
              u === i.length && ((i += E), (o.e += E))),
            m !== E && (h = Yr(e, t, f, E) || 0),
            (o._pt = {
              _next: o._pt,
              p: w || l === 1 ? w : ",",
              s: h,
              c: x - h,
              m: (_ && _ < 4) || t === "zIndex" ? Math.round : 0,
            }));
      o.c = u < i.length ? i.substring(u, i.length) : "";
    } else o.r = t === "display" && i === "none" ? iu : ru;
    return ma.test(i) && (o.e = 0), (this._pt = o), o;
  },
  $o = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  tc = function (e) {
    var t = e.split(" "),
      r = t[0],
      i = t[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
        ((e = r), (r = i), (i = e)),
      (t[0] = $o[r] || r),
      (t[1] = $o[i] || i),
      t.join(" ")
    );
  },
  rc = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var r = t.t,
        i = r.style,
        n = t.u,
        s = r._gsap,
        o,
        u,
        l;
      if (n === "all" || n === !0) (i.cssText = ""), (u = 1);
      else
        for (n = n.split(","), l = n.length; --l > -1; )
          (o = n[l]),
            Er[o] && ((u = 1), (o = o === "transformOrigin" ? Pt : Pe)),
            ui(r, o);
      u &&
        (ui(r, Pe),
        s &&
          (s.svg && r.removeAttribute("transform"),
          Dn(r, 1),
          (s.uncache = 1),
          nu(i)));
    }
  },
  Qn = {
    clearProps: function (e, t, r, i, n) {
      if (n.data !== "isFromStart") {
        var s = (e._pt = new kt(e._pt, t, r, 0, 0, rc));
        return (s.u = i), (s.pr = -10), (s.tween = n), e._props.push(r), 1;
      }
    },
  },
  _n = [1, 0, 0, 1, 0, 0],
  lu = {},
  cu = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Yo = function (e) {
    var t = mr(e, Pe);
    return cu(t) ? _n : t.substr(7).match(ga).map(Ne);
  },
  Do = function (e, t) {
    var r = e._gsap || ei(e),
      i = e.style,
      n = Yo(e),
      s,
      o,
      u,
      l;
    return r.svg && e.getAttribute("transform")
      ? ((u = e.transform.baseVal.consolidate().matrix),
        (n = [u.a, u.b, u.c, u.d, u.e, u.f]),
        n.join(",") === "1,0,0,1,0,0" ? _n : n)
      : (n === _n &&
          !e.offsetParent &&
          e !== bi &&
          !r.svg &&
          ((u = i.display),
          (i.display = "block"),
          (s = e.parentNode),
          (!s || !e.offsetParent) &&
            ((l = 1), (o = e.nextElementSibling), bi.appendChild(e)),
          (n = Yo(e)),
          u ? (i.display = u) : ui(e, "display"),
          l &&
            (o
              ? s.insertBefore(e, o)
              : s
              ? s.appendChild(e)
              : bi.removeChild(e))),
        t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  Ys = function (e, t, r, i, n, s) {
    var o = e._gsap,
      u = n || Do(e, !0),
      l = o.xOrigin || 0,
      c = o.yOrigin || 0,
      d = o.xOffset || 0,
      p = o.yOffset || 0,
      h = u[0],
      _ = u[1],
      f = u[2],
      g = u[3],
      x = u[4],
      w = u[5],
      E = t.split(" "),
      m = parseFloat(E[0]) || 0,
      F = parseFloat(E[1]) || 0,
      k,
      v,
      b,
      A;
    r
      ? u !== _n &&
        (v = h * g - _ * f) &&
        ((b = m * (g / v) + F * (-f / v) + (f * w - g * x) / v),
        (A = m * (-_ / v) + F * (h / v) - (h * w - _ * x) / v),
        (m = b),
        (F = A))
      : ((k = au(e)),
        (m = k.x + (~E[0].indexOf("%") ? (m / 100) * k.width : m)),
        (F = k.y + (~(E[1] || E[0]).indexOf("%") ? (F / 100) * k.height : F))),
      i || (i !== !1 && o.smooth)
        ? ((x = m - l),
          (w = F - c),
          (o.xOffset = d + (x * h + w * f) - x),
          (o.yOffset = p + (x * _ + w * g) - w))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = m),
      (o.yOrigin = F),
      (o.smooth = !!i),
      (o.origin = t),
      (o.originIsAbsolute = !!r),
      (e.style[Pt] = "0px 0px"),
      s &&
        (Rr(s, o, "xOrigin", l, m),
        Rr(s, o, "yOrigin", c, F),
        Rr(s, o, "xOffset", d, o.xOffset),
        Rr(s, o, "yOffset", p, o.yOffset)),
      e.setAttribute("data-svg-origin", m + " " + F);
  },
  Dn = function (e, t) {
    var r = e._gsap || new Wa(e);
    if ("x" in r && !t && !r.uncache) return r;
    var i = e.style,
      n = r.scaleX < 0,
      s = "px",
      o = "deg",
      u = getComputedStyle(e),
      l = mr(e, Pt) || "0",
      c,
      d,
      p,
      h,
      _,
      f,
      g,
      x,
      w,
      E,
      m,
      F,
      k,
      v,
      b,
      A,
      S,
      I,
      P,
      Y,
      $,
      K,
      B,
      L,
      G,
      T,
      D,
      ie,
      ye,
      qe,
      ne,
      Z;
    return (
      (c = d = p = f = g = x = w = E = m = 0),
      (h = _ = 1),
      (r.svg = !!(e.getCTM && uu(e))),
      u.translate &&
        ((u.translate !== "none" ||
          u.scale !== "none" ||
          u.rotate !== "none") &&
          (i[Pe] =
            (u.translate !== "none"
              ? "translate3d(" +
                (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
            (u.scale !== "none"
              ? "scale(" + u.scale.split(" ").join(",") + ") "
              : "") +
            (u[Pe] !== "none" ? u[Pe] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (v = Do(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((G = e.getBBox()),
            (l = r.xOrigin - G.x + "px " + (r.yOrigin - G.y) + "px"),
            (L = ""))
          : (L = !t && e.getAttribute("data-svg-origin")),
        Ys(e, L || l, !!L || r.originIsAbsolute, r.smooth !== !1, v)),
      (F = r.xOrigin || 0),
      (k = r.yOrigin || 0),
      v !== _n &&
        ((I = v[0]),
        (P = v[1]),
        (Y = v[2]),
        ($ = v[3]),
        (c = K = v[4]),
        (d = B = v[5]),
        v.length === 6
          ? ((h = Math.sqrt(I * I + P * P)),
            (_ = Math.sqrt($ * $ + Y * Y)),
            (f = I || P ? pi(P, I) * Wr : 0),
            (w = Y || $ ? pi(Y, $) * Wr + f : 0),
            w && (_ *= Math.abs(Math.cos(w * Si))),
            r.svg && ((c -= F - (F * I + k * Y)), (d -= k - (F * P + k * $))))
          : ((Z = v[6]),
            (qe = v[7]),
            (D = v[8]),
            (ie = v[9]),
            (ye = v[10]),
            (ne = v[11]),
            (c = v[12]),
            (d = v[13]),
            (p = v[14]),
            (b = pi(Z, ye)),
            (g = b * Wr),
            b &&
              ((A = Math.cos(-b)),
              (S = Math.sin(-b)),
              (L = K * A + D * S),
              (G = B * A + ie * S),
              (T = Z * A + ye * S),
              (D = K * -S + D * A),
              (ie = B * -S + ie * A),
              (ye = Z * -S + ye * A),
              (ne = qe * -S + ne * A),
              (K = L),
              (B = G),
              (Z = T)),
            (b = pi(-Y, ye)),
            (x = b * Wr),
            b &&
              ((A = Math.cos(-b)),
              (S = Math.sin(-b)),
              (L = I * A - D * S),
              (G = P * A - ie * S),
              (T = Y * A - ye * S),
              (ne = $ * S + ne * A),
              (I = L),
              (P = G),
              (Y = T)),
            (b = pi(P, I)),
            (f = b * Wr),
            b &&
              ((A = Math.cos(b)),
              (S = Math.sin(b)),
              (L = I * A + P * S),
              (G = K * A + B * S),
              (P = P * A - I * S),
              (B = B * A - K * S),
              (I = L),
              (K = G)),
            g &&
              Math.abs(g) + Math.abs(f) > 359.9 &&
              ((g = f = 0), (x = 180 - x)),
            (h = Ne(Math.sqrt(I * I + P * P + Y * Y))),
            (_ = Ne(Math.sqrt(B * B + Z * Z))),
            (b = pi(K, B)),
            (w = Math.abs(b) > 2e-4 ? b * Wr : 0),
            (m = ne ? 1 / (ne < 0 ? -ne : ne) : 0)),
        r.svg &&
          ((L = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !cu(mr(e, Pe))),
          L && e.setAttribute("transform", L))),
      Math.abs(w) > 90 &&
        Math.abs(w) < 270 &&
        (n
          ? ((h *= -1), (w += f <= 0 ? 180 : -180), (f += f <= 0 ? 180 : -180))
          : ((_ *= -1), (w += w <= 0 ? 180 : -180))),
      (t = t || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!t && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        s),
      (r.y =
        d -
        ((r.yPercent =
          d &&
          ((!t && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        s),
      (r.z = p + s),
      (r.scaleX = Ne(h)),
      (r.scaleY = Ne(_)),
      (r.rotation = Ne(f) + o),
      (r.rotationX = Ne(g) + o),
      (r.rotationY = Ne(x) + o),
      (r.skewX = w + o),
      (r.skewY = E + o),
      (r.transformPerspective = m + s),
      (r.zOrigin = parseFloat(l.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
        (i[Pt] = Zn(l)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = Vt.force3D),
      (r.renderTransform = r.svg ? nc : ou ? fu : ic),
      (r.uncache = 0),
      r
    );
  },
  Zn = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  ms = function (e, t, r) {
    var i = dt(t);
    return Ne(parseFloat(t) + parseFloat(Yr(e, "x", r + "px", i))) + i;
  },
  ic = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      fu(e, t);
  },
  Xr = "0deg",
  Ii = "0px",
  Hr = ") ",
  fu = function (e, t) {
    var r = t || this,
      i = r.xPercent,
      n = r.yPercent,
      s = r.x,
      o = r.y,
      u = r.z,
      l = r.rotation,
      c = r.rotationY,
      d = r.rotationX,
      p = r.skewX,
      h = r.skewY,
      _ = r.scaleX,
      f = r.scaleY,
      g = r.transformPerspective,
      x = r.force3D,
      w = r.target,
      E = r.zOrigin,
      m = "",
      F = (x === "auto" && e && e !== 1) || x === !0;
    if (E && (d !== Xr || c !== Xr)) {
      var k = parseFloat(c) * Si,
        v = Math.sin(k),
        b = Math.cos(k),
        A;
      (k = parseFloat(d) * Si),
        (A = Math.cos(k)),
        (s = ms(w, s, v * A * -E)),
        (o = ms(w, o, -Math.sin(k) * -E)),
        (u = ms(w, u, b * A * -E + E));
    }
    g !== Ii && (m += "perspective(" + g + Hr),
      (i || n) && (m += "translate(" + i + "%, " + n + "%) "),
      (F || s !== Ii || o !== Ii || u !== Ii) &&
        (m +=
          u !== Ii || F
            ? "translate3d(" + s + ", " + o + ", " + u + ") "
            : "translate(" + s + ", " + o + Hr),
      l !== Xr && (m += "rotate(" + l + Hr),
      c !== Xr && (m += "rotateY(" + c + Hr),
      d !== Xr && (m += "rotateX(" + d + Hr),
      (p !== Xr || h !== Xr) && (m += "skew(" + p + ", " + h + Hr),
      (_ !== 1 || f !== 1) && (m += "scale(" + _ + ", " + f + Hr),
      (w.style[Pe] = m || "translate(0, 0)");
  },
  nc = function (e, t) {
    var r = t || this,
      i = r.xPercent,
      n = r.yPercent,
      s = r.x,
      o = r.y,
      u = r.rotation,
      l = r.skewX,
      c = r.skewY,
      d = r.scaleX,
      p = r.scaleY,
      h = r.target,
      _ = r.xOrigin,
      f = r.yOrigin,
      g = r.xOffset,
      x = r.yOffset,
      w = r.forceCSS,
      E = parseFloat(s),
      m = parseFloat(o),
      F,
      k,
      v,
      b,
      A;
    (u = parseFloat(u)),
      (l = parseFloat(l)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (l += c), (u += c)),
      u || l
        ? ((u *= Si),
          (l *= Si),
          (F = Math.cos(u) * d),
          (k = Math.sin(u) * d),
          (v = Math.sin(u - l) * -p),
          (b = Math.cos(u - l) * p),
          l &&
            ((c *= Si),
            (A = Math.tan(l - c)),
            (A = Math.sqrt(1 + A * A)),
            (v *= A),
            (b *= A),
            c &&
              ((A = Math.tan(c)),
              (A = Math.sqrt(1 + A * A)),
              (F *= A),
              (k *= A))),
          (F = Ne(F)),
          (k = Ne(k)),
          (v = Ne(v)),
          (b = Ne(b)))
        : ((F = d), (b = p), (k = v = 0)),
      ((E && !~(s + "").indexOf("px")) || (m && !~(o + "").indexOf("px"))) &&
        ((E = Yr(h, "x", s, "px")), (m = Yr(h, "y", o, "px"))),
      (_ || f || g || x) &&
        ((E = Ne(E + _ - (_ * F + f * v) + g)),
        (m = Ne(m + f - (_ * k + f * b) + x))),
      (i || n) &&
        ((A = h.getBBox()),
        (E = Ne(E + (i / 100) * A.width)),
        (m = Ne(m + (n / 100) * A.height))),
      (A =
        "matrix(" + F + "," + k + "," + v + "," + b + "," + E + "," + m + ")"),
      h.setAttribute("transform", A),
      w && (h.style[Pe] = A);
  },
  sc = function (e, t, r, i, n) {
    var s = 360,
      o = tt(n),
      u = parseFloat(n) * (o && ~n.indexOf("rad") ? Wr : 1),
      l = u - i,
      c = i + l + "deg",
      d,
      p;
    return (
      o &&
        ((d = n.split("_")[1]),
        d === "short" &&
          ((l %= s), l !== l % (s / 2) && (l += l < 0 ? s : -360)),
        d === "cw" && l < 0
          ? (l = ((l + s * Bo) % s) - ~~(l / s) * s)
          : d === "ccw" && l > 0 && (l = ((l - s * Bo) % s) - ~~(l / s) * s)),
      (e._pt = p = new kt(e._pt, t, r, i, l, ql)),
      (p.e = c),
      (p.u = "deg"),
      e._props.push(r),
      p
    );
  },
  qo = function (e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  },
  oc = function (e, t, r) {
    var i = qo({}, r._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = r.style,
      o,
      u,
      l,
      c,
      d,
      p,
      h,
      _;
    i.svg
      ? ((l = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (s[Pe] = t),
        (o = Dn(r, 1)),
        ui(r, Pe),
        r.setAttribute("transform", l))
      : ((l = getComputedStyle(r)[Pe]),
        (s[Pe] = t),
        (o = Dn(r, 1)),
        (s[Pe] = l));
    for (u in Er)
      (l = i[u]),
        (c = o[u]),
        l !== c &&
          n.indexOf(u) < 0 &&
          ((h = dt(l)),
          (_ = dt(c)),
          (d = h !== _ ? Yr(r, u, l, _) : parseFloat(l)),
          (p = parseFloat(c)),
          (e._pt = new kt(e._pt, o, u, d, p - d, zs)),
          (e._pt.u = _ || 0),
          e._props.push(u));
    qo(o, i);
  };
At("padding,margin,Width,Radius", function (a, e) {
  var t = "Top",
    r = "Right",
    i = "Bottom",
    n = "Left",
    s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function (o) {
      return e < 2 ? a + o : "border" + o + a;
    });
  Qn[e > 1 ? "border" + a : a] = function (o, u, l, c, d) {
    var p, h;
    if (arguments.length < 4)
      return (
        (p = s.map(function (_) {
          return wr(o, _, l);
        })),
        (h = p.join(" ")),
        h.split(p[0]).length === 5 ? p[0] : h
      );
    (p = (c + "").split(" ")),
      (h = {}),
      s.forEach(function (_, f) {
        return (h[_] = p[f] = p[f] || p[((f - 1) / 2) | 0]);
      }),
      o.init(u, h, d);
  };
});
var hu = {
  name: "css",
  register: $s,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, r, i, n) {
    var s = this._props,
      o = e.style,
      u = r.vars.startAt,
      l,
      c,
      d,
      p,
      h,
      _,
      f,
      g,
      x,
      w,
      E,
      m,
      F,
      k,
      v,
      b;
    ho || $s(),
      (this.styles = this.styles || su(e)),
      (b = this.styles.props),
      (this.tween = r);
    for (f in t)
      if (f !== "autoRound" && ((c = t[f]), !(It[f] && Ga(f, t, r, i, e, n)))) {
        if (
          ((h = typeof c),
          (_ = Qn[f]),
          h === "function" && ((c = c.call(r, i, e, n)), (h = typeof c)),
          h === "string" && ~c.indexOf("random(") && (c = hn(c)),
          _)
        )
          _(this, e, f, c, r) && (v = 1);
        else if (f.substr(0, 2) === "--")
          (l = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
            (c += ""),
            (zr.lastIndex = 0),
            zr.test(l) || ((g = dt(l)), (x = dt(c))),
            x ? g !== x && (l = Yr(e, f, l, x) + x) : g && (c += g),
            this.add(o, "setProperty", l, c, i, n, 0, 0, f),
            s.push(f),
            b.push(f, 0, o[f]);
        else if (h !== "undefined") {
          if (
            (u && f in u
              ? ((l = typeof u[f] == "function" ? u[f].call(r, i, e, n) : u[f]),
                tt(l) && ~l.indexOf("random(") && (l = hn(l)),
                dt(l + "") ||
                  l === "auto" ||
                  (l += Vt.units[f] || dt(wr(e, f)) || ""),
                (l + "").charAt(1) === "=" && (l = wr(e, f)))
              : (l = wr(e, f)),
            (p = parseFloat(l)),
            (w = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            w && (c = c.substr(2)),
            (d = parseFloat(c)),
            f in _r &&
              (f === "autoAlpha" &&
                (p === 1 && wr(e, "visibility") === "hidden" && d && (p = 0),
                b.push("visibility", 0, o.visibility),
                Rr(
                  this,
                  o,
                  "visibility",
                  p ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              f !== "scale" &&
                f !== "transform" &&
                ((f = _r[f]), ~f.indexOf(",") && (f = f.split(",")[0]))),
            (E = f in Er),
            E)
          ) {
            if (
              (this.styles.save(f),
              m ||
                ((F = e._gsap),
                (F.renderTransform && !t.parseTransform) ||
                  Dn(e, t.parseTransform),
                (k = t.smoothOrigin !== !1 && F.smooth),
                (m = this._pt =
                  new kt(this._pt, o, Pe, 0, 1, F.renderTransform, F, 0, -1)),
                (m.dep = 1)),
              f === "scale")
            )
              (this._pt = new kt(
                this._pt,
                F,
                "scaleY",
                F.scaleY,
                (w ? Fi(F.scaleY, w + d) : d) - F.scaleY || 0,
                zs
              )),
                (this._pt.u = 0),
                s.push("scaleY", f),
                (f += "X");
            else if (f === "transformOrigin") {
              b.push(Pt, 0, o[Pt]),
                (c = tc(c)),
                F.svg
                  ? Ys(e, c, 0, k, 0, this)
                  : ((x = parseFloat(c.split(" ")[2]) || 0),
                    x !== F.zOrigin && Rr(this, F, "zOrigin", F.zOrigin, x),
                    Rr(this, o, f, Zn(l), Zn(c)));
              continue;
            } else if (f === "svgOrigin") {
              Ys(e, c, 1, k, 0, this);
              continue;
            } else if (f in lu) {
              sc(this, F, f, p, w ? Fi(p, w + c) : c);
              continue;
            } else if (f === "smoothOrigin") {
              Rr(this, F, "smooth", F.smooth, c);
              continue;
            } else if (f === "force3D") {
              F[f] = c;
              continue;
            } else if (f === "transform") {
              oc(this, c, e);
              continue;
            }
          } else f in o || (f = Ri(f) || f);
          if (E || ((d || d === 0) && (p || p === 0) && !Yl.test(c) && f in o))
            (g = (l + "").substr((p + "").length)),
              d || (d = 0),
              (x = dt(c) || (f in Vt.units ? Vt.units[f] : g)),
              g !== x && (p = Yr(e, f, l, x)),
              (this._pt = new kt(
                this._pt,
                E ? F : o,
                f,
                p,
                (w ? Fi(p, w + d) : d) - p,
                !E && (x === "px" || f === "zIndex") && t.autoRound !== !1
                  ? Ul
                  : zs
              )),
              (this._pt.u = x || 0),
              g !== x && x !== "%" && ((this._pt.b = l), (this._pt.r = Vl));
          else if (f in o) ec.call(this, e, f, l, w ? w + c : c);
          else if (f in e) this.add(e, f, l || e[f], w ? w + c : c, i, n);
          else if (f !== "parseTransform") {
            io(f, c);
            continue;
          }
          E || (f in o ? b.push(f, 0, o[f]) : b.push(f, 1, l || e[f])),
            s.push(f);
        }
      }
    v && eu(this);
  },
  render: function (e, t) {
    if (t.tween._time || !po())
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    else t.styles.revert();
  },
  get: wr,
  aliases: _r,
  getSetter: function (e, t, r) {
    var i = _r[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in Er && t !== Pt && (e._gsap.x || wr(e, "x"))
        ? r && Lo === r
          ? t === "scale"
            ? Gl
            : Wl
          : (Lo = r || {}) && (t === "scale" ? jl : Kl)
        : e.style && !eo(e.style[t])
        ? Xl
        : ~t.indexOf("-")
        ? Hl
        : co(e, t)
    );
  },
  core: { _removeProperty: ui, _getMatrix: Do },
};
Ot.utils.checkPrefix = Ri;
Ot.core.getStyleSaver = su;
(function (a, e, t, r) {
  var i = At(a + "," + e + "," + t, function (n) {
    Er[n] = 1;
  });
  At(e, function (n) {
    (Vt.units[n] = "deg"), (lu[n] = 1);
  }),
    (_r[i[13]] = a + "," + e),
    At(r, function (n) {
      var s = n.split(":");
      _r[s[1]] = i[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
At(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (a) {
    Vt.units[a] = "px";
  }
);
Ot.registerPlugin(hu);
var V = Ot.registerPlugin(hu) || Ot;
V.core.Tween;
function ac(a, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(a, r.key, r);
  }
}
function uc(a, e, t) {
  return e && ac(a.prototype, e), a;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var st,
  $n,
  Yt,
  Lr,
  Br,
  Ti,
  du,
  Gr,
  en,
  pu,
  br,
  ir,
  _u,
  Du = function () {
    return (
      st ||
      (typeof window < "u" && (st = window.gsap) && st.registerPlugin && st)
    );
  },
  gu = 1,
  vi = [],
  ue = [],
  yr = [],
  tn = Date.now,
  qs = function (e, t) {
    return t;
  },
  lc = function () {
    var e = en.core,
      t = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, ue),
      i.push.apply(i, yr),
      (ue = r),
      (yr = i),
      (qs = function (s, o) {
        return t[s](o);
      });
  },
  Ir = function (e, t) {
    return ~yr.indexOf(e) && yr[yr.indexOf(e) + 1][t];
  },
  rn = function (e) {
    return !!~pu.indexOf(e);
  },
  xt = function (e, t, r, i, n) {
    return e.addEventListener(t, r, { passive: i !== !1, capture: !!n });
  },
  yt = function (e, t, r, i) {
    return e.removeEventListener(t, r, !!i);
  },
  wn = "scrollLeft",
  Fn = "scrollTop",
  Vs = function () {
    return (br && br.isPressed) || ue.cache++;
  },
  Jn = function (e, t) {
    var r = function i(n) {
      if (n || n === 0) {
        gu && (Yt.history.scrollRestoration = "manual");
        var s = br && br.isPressed;
        (n = i.v = Math.round(n) || (br && br.iOS ? 1 : 0)),
          e(n),
          (i.cacheID = ue.cache),
          s && qs("ss", n);
      } else
        (t || ue.cache !== i.cacheID || qs("ref")) &&
          ((i.cacheID = ue.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (r.offset = 0), e && r;
  },
  bt = {
    s: wn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Jn(function (a) {
      return arguments.length
        ? Yt.scrollTo(a, He.sc())
        : Yt.pageXOffset || Lr[wn] || Br[wn] || Ti[wn] || 0;
    }),
  },
  He = {
    s: Fn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: bt,
    sc: Jn(function (a) {
      return arguments.length
        ? Yt.scrollTo(bt.sc(), a)
        : Yt.pageYOffset || Lr[Fn] || Br[Fn] || Ti[Fn] || 0;
    }),
  },
  Tt = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || st.utils.toArray)(e)[0] ||
      (typeof e == "string" && st.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  qr = function (e, t) {
    var r = t.s,
      i = t.sc;
    rn(e) && (e = Lr.scrollingElement || Br);
    var n = ue.indexOf(e),
      s = i === He.sc ? 1 : 2;
    !~n && (n = ue.push(e) - 1), ue[n + s] || xt(e, "scroll", Vs);
    var o = ue[n + s],
      u =
        o ||
        (ue[n + s] =
          Jn(Ir(e, r), !0) ||
          (rn(e)
            ? i
            : Jn(function (l) {
                return arguments.length ? (e[r] = l) : e[r];
              })));
    return (
      (u.target = e),
      o || (u.smooth = st.getProperty(e, "scrollBehavior") === "smooth"),
      u
    );
  },
  Us = function (e, t, r) {
    var i = e,
      n = e,
      s = tn(),
      o = s,
      u = t || 50,
      l = Math.max(500, u * 3),
      c = function (_, f) {
        var g = tn();
        f || g - s > u
          ? ((n = i), (i = _), (o = s), (s = g))
          : r
          ? (i += _)
          : (i = n + ((_ - n) / (g - o)) * (s - o));
      },
      d = function () {
        (n = i = r ? 0 : i), (o = s = 0);
      },
      p = function (_) {
        var f = o,
          g = n,
          x = tn();
        return (
          (_ || _ === 0) && _ !== i && c(_),
          s === o || x - o > l
            ? 0
            : ((i + (r ? g : -g)) / ((r ? x : s) - f)) * 1e3
        );
      };
    return { update: c, reset: d, getVelocity: p };
  },
  $i = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Vo = function (e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  },
  mu = function () {
    (en = st.core.globals().ScrollTrigger), en && en.core && lc();
  },
  yu = function (e) {
    return (
      (st = e || Du()),
      !$n &&
        st &&
        typeof document < "u" &&
        document.body &&
        ((Yt = window),
        (Lr = document),
        (Br = Lr.documentElement),
        (Ti = Lr.body),
        (pu = [Yt, Lr, Br, Ti]),
        st.utils.clamp,
        (_u = st.core.context || function () {}),
        (Gr = "onpointerenter" in Ti ? "pointer" : "mouse"),
        (du = ze.isTouch =
          Yt.matchMedia &&
          Yt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Yt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (ir = ze.eventTypes =
          (
            "ontouchstart" in Br
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Br
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (gu = 0);
        }, 500),
        mu(),
        ($n = 1)),
      $n
    );
  };
bt.op = He;
ue.cache = 0;
var ze = (function () {
  function a(t) {
    this.init(t);
  }
  var e = a.prototype;
  return (
    (e.init = function (r) {
      $n || yu(st) || console.warn("Please gsap.registerPlugin(Observer)"),
        en || mu();
      var i = r.tolerance,
        n = r.dragMinimum,
        s = r.type,
        o = r.target,
        u = r.lineHeight,
        l = r.debounce,
        c = r.preventDefault,
        d = r.onStop,
        p = r.onStopDelay,
        h = r.ignore,
        _ = r.wheelSpeed,
        f = r.event,
        g = r.onDragStart,
        x = r.onDragEnd,
        w = r.onDrag,
        E = r.onPress,
        m = r.onRelease,
        F = r.onRight,
        k = r.onLeft,
        v = r.onUp,
        b = r.onDown,
        A = r.onChangeX,
        S = r.onChangeY,
        I = r.onChange,
        P = r.onToggleX,
        Y = r.onToggleY,
        $ = r.onHover,
        K = r.onHoverEnd,
        B = r.onMove,
        L = r.ignoreCheck,
        G = r.isNormalizer,
        T = r.onGestureStart,
        D = r.onGestureEnd,
        ie = r.onWheel,
        ye = r.onEnable,
        qe = r.onDisable,
        ne = r.onClick,
        Z = r.scrollSpeed,
        Re = r.capture,
        de = r.allowClicks,
        We = r.lockAxis,
        Ge = r.onLockAxis;
      (this.target = o = Tt(o) || Br),
        (this.vars = r),
        h && (h = st.utils.toArray(h)),
        (i = i || 1e-9),
        (n = n || 0),
        (_ = _ || 1),
        (Z = Z || 1),
        (s = s || "wheel,touch,pointer"),
        (l = l !== !1),
        u || (u = parseFloat(Yt.getComputedStyle(Ti).lineHeight) || 22);
      var Zt,
        je,
        gt,
        pe,
        Te,
        rt,
        mt,
        C = this,
        ot = 0,
        M = 0,
        y = r.passive || !c,
        O = qr(o, bt),
        q = qr(o, He),
        H = O(),
        J = q(),
        se =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          ir[0] === "pointerdown",
        Le = rn(o),
        te = o.ownerDocument || Lr,
        Ce = [0, 0, 0],
        _e = [0, 0, 0],
        ae = 0,
        Ve = function () {
          return (ae = tn());
        },
        z = function (U, De) {
          return (
            ((C.event = U) && h && ~h.indexOf(U.target)) ||
            (De && se && U.pointerType !== "touch") ||
            (L && L(U, De))
          );
        },
        Ar = function () {
          C._vx.reset(), C._vy.reset(), je.pause(), d && d(C);
        },
        Mt = function () {
          var U = (C.deltaX = Vo(Ce)),
            De = (C.deltaY = Vo(_e)),
            R = Math.abs(U) >= i,
            ee = Math.abs(De) >= i;
          I && (R || ee) && I(C, U, De, Ce, _e),
            R &&
              (F && C.deltaX > 0 && F(C),
              k && C.deltaX < 0 && k(C),
              A && A(C),
              P && C.deltaX < 0 != ot < 0 && P(C),
              (ot = C.deltaX),
              (Ce[0] = Ce[1] = Ce[2] = 0)),
            ee &&
              (b && C.deltaY > 0 && b(C),
              v && C.deltaY < 0 && v(C),
              S && S(C),
              Y && C.deltaY < 0 != M < 0 && Y(C),
              (M = C.deltaY),
              (_e[0] = _e[1] = _e[2] = 0)),
            (pe || gt) && (B && B(C), gt && (w(C), (gt = !1)), (pe = !1)),
            rt && !(rt = !1) && Ge && Ge(C),
            Te && (ie(C), (Te = !1)),
            (Zt = 0);
        },
        Rt = function (U, De, R) {
          (Ce[R] += U),
            (_e[R] += De),
            C._vx.update(U),
            C._vy.update(De),
            l ? Zt || (Zt = requestAnimationFrame(Mt)) : Mt();
        },
        vr = function (U, De) {
          We &&
            !mt &&
            ((C.axis = mt = Math.abs(U) > Math.abs(De) ? "x" : "y"), (rt = !0)),
            mt !== "y" && ((Ce[2] += U), C._vx.update(U, !0)),
            mt !== "x" && ((_e[2] += De), C._vy.update(De, !0)),
            l ? Zt || (Zt = requestAnimationFrame(Mt)) : Mt();
        },
        Xt = function (U) {
          if (!z(U, 1)) {
            U = $i(U, c);
            var De = U.clientX,
              R = U.clientY,
              ee = De - C.x,
              X = R - C.y,
              Q = C.isDragging;
            (C.x = De),
              (C.y = R),
              (Q ||
                Math.abs(C.startX - De) >= n ||
                Math.abs(C.startY - R) >= n) &&
                (w && (gt = !0),
                Q || (C.isDragging = !0),
                vr(ee, X),
                Q || (g && g(C)));
          }
        },
        Jt = (C.onPress = function (W) {
          z(W, 1) ||
            (W && W.button) ||
            ((C.axis = mt = null),
            je.pause(),
            (C.isPressed = !0),
            (W = $i(W)),
            (ot = M = 0),
            (C.startX = C.x = W.clientX),
            (C.startY = C.y = W.clientY),
            C._vx.reset(),
            C._vy.reset(),
            xt(G ? o : te, ir[1], Xt, y, !0),
            (C.deltaX = C.deltaY = 0),
            E && E(C));
        }),
        j = (C.onRelease = function (W) {
          if (!z(W, 1)) {
            yt(G ? o : te, ir[1], Xt, !0);
            var U = !isNaN(C.y - C.startY),
              De = C.isDragging,
              R =
                De &&
                (Math.abs(C.x - C.startX) > 3 || Math.abs(C.y - C.startY) > 3),
              ee = $i(W);
            !R &&
              U &&
              (C._vx.reset(),
              C._vy.reset(),
              c &&
                de &&
                st.delayedCall(0.08, function () {
                  if (tn() - ae > 300 && !W.defaultPrevented) {
                    if (W.target.click) W.target.click();
                    else if (te.createEvent) {
                      var X = te.createEvent("MouseEvents");
                      X.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Yt,
                        1,
                        ee.screenX,
                        ee.screenY,
                        ee.clientX,
                        ee.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        W.target.dispatchEvent(X);
                    }
                  }
                })),
              (C.isDragging = C.isGesturing = C.isPressed = !1),
              d && De && !G && je.restart(!0),
              x && De && x(C),
              m && m(C, R);
          }
        }),
        sr = function (U) {
          return (
            U.touches &&
            U.touches.length > 1 &&
            (C.isGesturing = !0) &&
            T(U, C.isDragging)
          );
        },
        Ke = function () {
          return (C.isGesturing = !1) || D(C);
        },
        me = function (U) {
          if (!z(U)) {
            var De = O(),
              R = q();
            Rt((De - H) * Z, (R - J) * Z, 1),
              (H = De),
              (J = R),
              d && je.restart(!0);
          }
        },
        Fe = function (U) {
          if (!z(U)) {
            (U = $i(U, c)), ie && (Te = !0);
            var De =
              (U.deltaMode === 1 ? u : U.deltaMode === 2 ? Yt.innerHeight : 1) *
              _;
            Rt(U.deltaX * De, U.deltaY * De, 0), d && !G && je.restart(!0);
          }
        },
        Lt = function (U) {
          if (!z(U)) {
            var De = U.clientX,
              R = U.clientY,
              ee = De - C.x,
              X = R - C.y;
            (C.x = De),
              (C.y = R),
              (pe = !0),
              d && je.restart(!0),
              (ee || X) && vr(ee, X);
          }
        },
        er = function (U) {
          (C.event = U), $(C);
        },
        Ie = function (U) {
          (C.event = U), K(C);
        },
        tr = function (U) {
          return z(U) || ($i(U, c) && ne(C));
        };
      (je = C._dc = st.delayedCall(p || 0.25, Ar).pause()),
        (C.deltaX = C.deltaY = 0),
        (C._vx = Us(0, 50, !0)),
        (C._vy = Us(0, 50, !0)),
        (C.scrollX = O),
        (C.scrollY = q),
        (C.isDragging = C.isGesturing = C.isPressed = !1),
        _u(this),
        (C.enable = function (W) {
          return (
            C.isEnabled ||
              (xt(Le ? te : o, "scroll", Vs),
              s.indexOf("scroll") >= 0 && xt(Le ? te : o, "scroll", me, y, Re),
              s.indexOf("wheel") >= 0 && xt(o, "wheel", Fe, y, Re),
              ((s.indexOf("touch") >= 0 && du) || s.indexOf("pointer") >= 0) &&
                (xt(o, ir[0], Jt, y, Re),
                xt(te, ir[2], j),
                xt(te, ir[3], j),
                de && xt(o, "click", Ve, !0, !0),
                ne && xt(o, "click", tr),
                T && xt(te, "gesturestart", sr),
                D && xt(te, "gestureend", Ke),
                $ && xt(o, Gr + "enter", er),
                K && xt(o, Gr + "leave", Ie),
                B && xt(o, Gr + "move", Lt)),
              (C.isEnabled = !0),
              W && W.type && Jt(W),
              ye && ye(C)),
            C
          );
        }),
        (C.disable = function () {
          C.isEnabled &&
            (vi.filter(function (W) {
              return W !== C && rn(W.target);
            }).length || yt(Le ? te : o, "scroll", Vs),
            C.isPressed &&
              (C._vx.reset(), C._vy.reset(), yt(G ? o : te, ir[1], Xt, !0)),
            yt(Le ? te : o, "scroll", me, Re),
            yt(o, "wheel", Fe, Re),
            yt(o, ir[0], Jt, Re),
            yt(te, ir[2], j),
            yt(te, ir[3], j),
            yt(o, "click", Ve, !0),
            yt(o, "click", tr),
            yt(te, "gesturestart", sr),
            yt(te, "gestureend", Ke),
            yt(o, Gr + "enter", er),
            yt(o, Gr + "leave", Ie),
            yt(o, Gr + "move", Lt),
            (C.isEnabled = C.isPressed = C.isDragging = !1),
            qe && qe(C));
        }),
        (C.kill = C.revert =
          function () {
            C.disable();
            var W = vi.indexOf(C);
            W >= 0 && vi.splice(W, 1), br === C && (br = 0);
          }),
        vi.push(C),
        G && rn(o) && (br = C),
        C.enable(f);
    }),
    uc(a, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    a
  );
})();
ze.version = "3.12.5";
ze.create = function (a) {
  return new ze(a);
};
ze.register = yu;
ze.getAll = function () {
  return vi.slice();
};
ze.getById = function (a) {
  return vi.filter(function (e) {
    return e.vars.id === a;
  })[0];
};
Du() && st.registerPlugin(ze);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var N,
  gi,
  fe,
  Ae,
  nr,
  we,
  xu,
  es,
  gn,
  nn,
  Xi,
  bn,
  ct,
  as,
  Xs,
  Ct,
  Uo,
  Xo,
  mi,
  vu,
  ys,
  Cu,
  vt,
  Hs,
  wu,
  Fu,
  Pr,
  Ws,
  go,
  Ei,
  mo,
  ts,
  Gs,
  xs,
  Sn = 1,
  ht = Date.now,
  vs = ht(),
  Kt = 0,
  Hi = 0,
  Ho = function (e, t, r) {
    var i = zt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (r["_" + t + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
  },
  Wo = function (e, t) {
    return t && (!zt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  cc = function a() {
    return Hi && requestAnimationFrame(a);
  },
  Go = function () {
    return (as = 1);
  },
  jo = function () {
    return (as = 0);
  },
  hr = function (e) {
    return e;
  },
  Wi = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  bu = function () {
    return typeof window < "u";
  },
  Su = function () {
    return N || (bu() && (N = window.gsap) && N.registerPlugin && N);
  },
  li = function (e) {
    return !!~xu.indexOf(e);
  },
  Tu = function (e) {
    return (
      (e === "Height" ? mo : fe["inner" + e]) ||
      nr["client" + e] ||
      we["client" + e]
    );
  },
  Eu = function (e) {
    return (
      Ir(e, "getBoundingClientRect") ||
      (li(e)
        ? function () {
            return (Xn.width = fe.innerWidth), (Xn.height = mo), Xn;
          }
        : function () {
            return Fr(e);
          })
    );
  },
  fc = function (e, t, r) {
    var i = r.d,
      n = r.d2,
      s = r.a;
    return (s = Ir(e, "getBoundingClientRect"))
      ? function () {
          return s()[i];
        }
      : function () {
          return (t ? Tu(n) : e["client" + n]) || 0;
        };
  },
  hc = function (e, t) {
    return !t || ~yr.indexOf(e)
      ? Eu(e)
      : function () {
          return Xn;
        };
  },
  Dr = function (e, t) {
    var r = t.s,
      i = t.d2,
      n = t.d,
      s = t.a;
    return Math.max(
      0,
      (r = "scroll" + i) && (s = Ir(e, r))
        ? s() - Eu(e)()[n]
        : li(e)
        ? (nr[r] || we[r]) - Tu(i)
        : e[r] - e["offset" + i]
    );
  },
  Tn = function (e, t) {
    for (var r = 0; r < mi.length; r += 3)
      (!t || ~t.indexOf(mi[r + 1])) && e(mi[r], mi[r + 1], mi[r + 2]);
  },
  zt = function (e) {
    return typeof e == "string";
  },
  St = function (e) {
    return typeof e == "function";
  },
  Gi = function (e) {
    return typeof e == "number";
  },
  jr = function (e) {
    return typeof e == "object";
  },
  Yi = function (e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  },
  Cs = function (e, t) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  _i = Math.abs,
  Au = "left",
  ku = "top",
  yo = "right",
  xo = "bottom",
  ni = "width",
  si = "height",
  sn = "Right",
  on = "Left",
  an = "Top",
  un = "Bottom",
  $e = "padding",
  Wt = "margin",
  Li = "Width",
  vo = "Height",
  Xe = "px",
  Gt = function (e) {
    return fe.getComputedStyle(e);
  },
  dc = function (e) {
    var t = Gt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  Ko = function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  },
  Fr = function (e, t) {
    var r =
        t &&
        Gt(e)[Xs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        N.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  rs = function (e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  Pu = function (e) {
    var t = [],
      r = e.labels,
      i = e.duration(),
      n;
    for (n in r) t.push(r[n] / i);
    return t;
  },
  pc = function (e) {
    return function (t) {
      return N.utils.snap(Pu(e), t);
    };
  },
  Co = function (e) {
    var t = N.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, n) {
          return i - n;
        });
    return r
      ? function (i, n, s) {
          s === void 0 && (s = 0.001);
          var o;
          if (!n) return t(i);
          if (n > 0) {
            for (i -= s, o = 0; o < r.length; o++) if (r[o] >= i) return r[o];
            return r[o - 1];
          } else for (o = r.length, i += s; o--; ) if (r[o] <= i) return r[o];
          return r[0];
        }
      : function (i, n, s) {
          s === void 0 && (s = 0.001);
          var o = t(i);
          return !n || Math.abs(o - i) < s || o - i < 0 == n < 0
            ? o
            : t(n < 0 ? i - e : i + e);
        };
  },
  _c = function (e) {
    return function (t, r) {
      return Co(Pu(e))(t, r.direction);
    };
  },
  En = function (e, t, r, i) {
    return r.split(",").forEach(function (n) {
      return e(t, n, i);
    });
  },
  Je = function (e, t, r, i, n) {
    return e.addEventListener(t, r, { passive: !i, capture: !!n });
  },
  Ze = function (e, t, r, i) {
    return e.removeEventListener(t, r, !!i);
  },
  An = function (e, t, r) {
    (r = r && r.wheelHandler), r && (e(t, "wheel", r), e(t, "touchmove", r));
  },
  Qo = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  kn = { toggleActions: "play", anticipatePin: 0 },
  is = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Yn = function (e, t) {
    if (zt(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          i +
          (e in is
            ? is[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Pn = function (e, t, r, i, n, s, o, u) {
    var l = n.startColor,
      c = n.endColor,
      d = n.fontSize,
      p = n.indent,
      h = n.fontWeight,
      _ = Ae.createElement("div"),
      f = li(r) || Ir(r, "pinType") === "fixed",
      g = e.indexOf("scroller") !== -1,
      x = f ? we : r,
      w = e.indexOf("start") !== -1,
      E = w ? l : c,
      m =
        "border-color:" +
        E +
        ";font-size:" +
        d +
        ";color:" +
        E +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (m += "position:" + ((g || u) && f ? "fixed;" : "absolute;")),
      (g || u || !f) &&
        (m += (i === He ? yo : xo) + ":" + (s + parseFloat(p)) + "px;"),
      o &&
        (m +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (_._isStart = w),
      _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (_.style.cssText = m),
      (_.innerText = t || t === 0 ? e + "-" + t : e),
      x.children[0] ? x.insertBefore(_, x.children[0]) : x.appendChild(_),
      (_._offset = _["offset" + i.op.d2]),
      qn(_, 0, i, w),
      _
    );
  },
  qn = function (e, t, r, i) {
    var n = { display: "block" },
      s = r[i ? "os2" : "p2"],
      o = r[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (n[r.a + "Percent"] = i ? -100 : 0),
      (n[r.a] = i ? "1px" : 0),
      (n["border" + s + Li] = 1),
      (n["border" + o + Li] = 0),
      (n[r.p] = t + "px"),
      N.set(e, n);
  },
  oe = [],
  js = {},
  mn,
  Zo = function () {
    return ht() - Kt > 34 && (mn || (mn = requestAnimationFrame(Sr)));
  },
  Di = function () {
    (!vt || !vt.isPressed || vt.startX > we.clientWidth) &&
      (ue.cache++,
      vt ? mn || (mn = requestAnimationFrame(Sr)) : Sr(),
      Kt || fi("scrollStart"),
      (Kt = ht()));
  },
  ws = function () {
    (Fu = fe.innerWidth), (wu = fe.innerHeight);
  },
  ji = function () {
    ue.cache++,
      !ct &&
        !Cu &&
        !Ae.fullscreenElement &&
        !Ae.webkitFullscreenElement &&
        (!Hs ||
          Fu !== fe.innerWidth ||
          Math.abs(fe.innerHeight - wu) > fe.innerHeight * 0.25) &&
        es.restart(!0);
  },
  ci = {},
  Dc = [],
  Ou = function a() {
    return Ze(le, "scrollEnd", a) || Jr(!0);
  },
  fi = function (e) {
    return (
      (ci[e] &&
        ci[e].map(function (t) {
          return t();
        })) ||
      Dc
    );
  },
  Nt = [],
  Mu = function (e) {
    for (var t = 0; t < Nt.length; t += 5)
      (!e || (Nt[t + 4] && Nt[t + 4].query === e)) &&
        ((Nt[t].style.cssText = Nt[t + 1]),
        Nt[t].getBBox && Nt[t].setAttribute("transform", Nt[t + 2] || ""),
        (Nt[t + 3].uncache = 1));
  },
  wo = function (e, t) {
    var r;
    for (Ct = 0; Ct < oe.length; Ct++)
      (r = oe[Ct]),
        r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
    (ts = !0), t && Mu(t), t || fi("revert");
  },
  Ru = function (e, t) {
    ue.cache++,
      (t || !wt) &&
        ue.forEach(function (r) {
          return St(r) && r.cacheID++ && (r.rec = 0);
        }),
      zt(e) && (fe.history.scrollRestoration = go = e);
  },
  wt,
  oi = 0,
  Jo,
  gc = function () {
    if (Jo !== oi) {
      var e = (Jo = oi);
      requestAnimationFrame(function () {
        return e === oi && Jr(!0);
      });
    }
  },
  Lu = function () {
    we.appendChild(Ei),
      (mo = (!vt && Ei.offsetHeight) || fe.innerHeight),
      we.removeChild(Ei);
  },
  ea = function (e) {
    return gn(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  },
  Jr = function (e, t) {
    if (Kt && !e && !ts) {
      Je(le, "scrollEnd", Ou);
      return;
    }
    Lu(),
      (wt = le.isRefreshing = !0),
      ue.forEach(function (i) {
        return St(i) && ++i.cacheID && (i.rec = i());
      });
    var r = fi("refreshInit");
    vu && le.sort(),
      t || wo(),
      ue.forEach(function (i) {
        St(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      oe.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      (ts = !1),
      oe.forEach(function (i) {
        if (i._subPinOffset && i.pin) {
          var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            s = i.pin[n];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh();
        }
      }),
      (Gs = 1),
      ea(!0),
      oe.forEach(function (i) {
        var n = Dr(i.scroller, i._dir),
          s = i.vars.end === "max" || (i._endClamp && i.end > n),
          o = i._startClamp && i.start >= n;
        (s || o) &&
          i.setPositions(
            o ? n - 1 : i.start,
            s ? Math.max(o ? n : i.start + 1, n) : i.end,
            !0
          );
      }),
      ea(!1),
      (Gs = 0),
      r.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      ue.forEach(function (i) {
        St(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      Ru(go, 1),
      es.pause(),
      oi++,
      (wt = 2),
      Sr(2),
      oe.forEach(function (i) {
        return St(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (wt = le.isRefreshing = !1),
      fi("refresh");
  },
  Ks = 0,
  Vn = 1,
  ln,
  Sr = function (e) {
    if (e === 2 || (!wt && !ts)) {
      (le.isUpdating = !0), ln && ln.update(0);
      var t = oe.length,
        r = ht(),
        i = r - vs >= 50,
        n = t && oe[0].scroll();
      if (
        ((Vn = Ks > n ? -1 : 1),
        wt || (Ks = n),
        i &&
          (Kt && !as && r - Kt > 200 && ((Kt = 0), fi("scrollEnd")),
          (Xi = vs),
          (vs = r)),
        Vn < 0)
      ) {
        for (Ct = t; Ct-- > 0; ) oe[Ct] && oe[Ct].update(0, i);
        Vn = 1;
      } else for (Ct = 0; Ct < t; Ct++) oe[Ct] && oe[Ct].update(0, i);
      le.isUpdating = !1;
    }
    mn = 0;
  },
  Qs = [
    Au,
    ku,
    xo,
    yo,
    Wt + un,
    Wt + sn,
    Wt + an,
    Wt + on,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Un = Qs.concat([
    ni,
    si,
    "boxSizing",
    "max" + Li,
    "max" + vo,
    "position",
    Wt,
    $e,
    $e + an,
    $e + sn,
    $e + un,
    $e + on,
  ]),
  mc = function (e, t, r) {
    Ai(r);
    var i = e._gsap;
    if (i.spacerIsNative) Ai(i.spacerState);
    else if (e._gsap.swappedIn) {
      var n = t.parentNode;
      n && (n.insertBefore(e, t), n.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Fs = function (e, t, r, i) {
    if (!e._gsap.swappedIn) {
      for (var n = Qs.length, s = t.style, o = e.style, u; n--; )
        (u = Qs[n]), (s[u] = r[u]);
      (s.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (s.display = "inline-block"),
        (o[xo] = o[yo] = "auto"),
        (s.flexBasis = r.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[ni] = rs(e, bt) + Xe),
        (s[si] = rs(e, He) + Xe),
        (s[$e] = o[Wt] = o[ku] = o[Au] = "0"),
        Ai(i),
        (o[ni] = o["max" + Li] = r[ni]),
        (o[si] = o["max" + vo] = r[si]),
        (o[$e] = r[$e]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  yc = /([A-Z])/g,
  Ai = function (e) {
    if (e) {
      var t = e.t.style,
        r = e.length,
        i = 0,
        n,
        s;
      for ((e.t._gsap || N.core.getCache(e.t)).uncache = 1; i < r; i += 2)
        (s = e[i + 1]),
          (n = e[i]),
          s
            ? (t[n] = s)
            : t[n] && t.removeProperty(n.replace(yc, "-$1").toLowerCase());
    }
  },
  On = function (e) {
    for (var t = Un.length, r = e.style, i = [], n = 0; n < t; n++)
      i.push(Un[n], r[Un[n]]);
    return (i.t = e), i;
  },
  xc = function (e, t, r) {
    for (var i = [], n = e.length, s = r ? 8 : 0, o; s < n; s += 2)
      (o = e[s]), i.push(o, o in t ? t[o] : e[s + 1]);
    return (i.t = e.t), i;
  },
  Xn = { left: 0, top: 0 },
  ta = function (e, t, r, i, n, s, o, u, l, c, d, p, h, _) {
    St(e) && (e = e(u)),
      zt(e) &&
        e.substr(0, 3) === "max" &&
        (e = p + (e.charAt(4) === "=" ? Yn("0" + e.substr(3), r) : 0));
    var f = h ? h.time() : 0,
      g,
      x,
      w;
    if ((h && h.seek(0), isNaN(e) || (e = +e), Gi(e)))
      h &&
        (e = N.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          p,
          e
        )),
        o && qn(o, r, i, !0);
    else {
      St(t) && (t = t(u));
      var E = (e || "0").split(" "),
        m,
        F,
        k,
        v;
      (w = Tt(t, u) || we),
        (m = Fr(w) || {}),
        (!m || (!m.left && !m.top)) &&
          Gt(w).display === "none" &&
          ((v = w.style.display),
          (w.style.display = "block"),
          (m = Fr(w)),
          v ? (w.style.display = v) : w.style.removeProperty("display")),
        (F = Yn(E[0], m[i.d])),
        (k = Yn(E[1] || "0", r)),
        (e = m[i.p] - l[i.p] - c + F + n - k),
        o && qn(o, k, i, r - k < 20 || (o._isStart && k > 20)),
        (r -= r - k);
    }
    if ((_ && ((u[_] = e || -0.001), e < 0 && (e = 0)), s)) {
      var b = e + r,
        A = s._isStart;
      (g = "scroll" + i.d2),
        qn(
          s,
          b,
          i,
          (A && b > 20) ||
            (!A && (d ? Math.max(we[g], nr[g]) : s.parentNode[g]) <= b + 1)
        ),
        d &&
          ((l = Fr(o)),
          d && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Xe));
    }
    return (
      h &&
        w &&
        ((g = Fr(w)),
        h.seek(p),
        (x = Fr(w)),
        (h._caScrollDist = g[i.p] - x[i.p]),
        (e = (e / h._caScrollDist) * p)),
      h && h.seek(f),
      h ? e : Math.round(e)
    );
  },
  vc = /(webkit|moz|length|cssText|inset)/i,
  ra = function (e, t, r, i) {
    if (e.parentNode !== t) {
      var n = e.style,
        s,
        o;
      if (t === we) {
        (e._stOrig = n.cssText), (o = Gt(e));
        for (s in o)
          !+s &&
            !vc.test(s) &&
            o[s] &&
            typeof n[s] == "string" &&
            s !== "0" &&
            (n[s] = o[s]);
        (n.top = r), (n.left = i);
      } else n.cssText = e._stOrig;
      (N.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  Bu = function (e, t, r) {
    var i = t,
      n = i;
    return function (s) {
      var o = Math.round(e());
      return (
        o !== i &&
          o !== n &&
          Math.abs(o - i) > 3 &&
          Math.abs(o - n) > 3 &&
          ((s = o), r && r()),
        (n = i),
        (i = s),
        s
      );
    };
  },
  Mn = function (e, t, r) {
    var i = {};
    (i[t.p] = "+=" + r), N.set(e, i);
  },
  ia = function (e, t) {
    var r = qr(e, t),
      i = "_scroll" + t.p2,
      n = function s(o, u, l, c, d) {
        var p = s.tween,
          h = u.onComplete,
          _ = {};
        l = l || r();
        var f = Bu(r, l, function () {
          p.kill(), (s.tween = 0);
        });
        return (
          (d = (c && d) || 0),
          (c = c || o - l),
          p && p.kill(),
          (u[i] = o),
          (u.inherit = !1),
          (u.modifiers = _),
          (_[i] = function () {
            return f(l + c * p.ratio + d * p.ratio * p.ratio);
          }),
          (u.onUpdate = function () {
            ue.cache++, s.tween && Sr();
          }),
          (u.onComplete = function () {
            (s.tween = 0), h && h.call(p);
          }),
          (p = s.tween = N.to(e, u)),
          p
        );
      };
    return (
      (e[i] = r),
      (r.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      Je(e, "wheel", r.wheelHandler),
      le.isTouch && Je(e, "touchmove", r.wheelHandler),
      n
    );
  },
  le = (function () {
    function a(t, r) {
      gi ||
        a.register(N) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Ws(this),
        this.init(t, r);
    }
    var e = a.prototype;
    return (
      (e.init = function (r, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Hi)
        ) {
          this.update = this.refresh = this.kill = hr;
          return;
        }
        r = Ko(zt(r) || Gi(r) || r.nodeType ? { trigger: r } : r, kn);
        var n = r,
          s = n.onUpdate,
          o = n.toggleClass,
          u = n.id,
          l = n.onToggle,
          c = n.onRefresh,
          d = n.scrub,
          p = n.trigger,
          h = n.pin,
          _ = n.pinSpacing,
          f = n.invalidateOnRefresh,
          g = n.anticipatePin,
          x = n.onScrubComplete,
          w = n.onSnapComplete,
          E = n.once,
          m = n.snap,
          F = n.pinReparent,
          k = n.pinSpacer,
          v = n.containerAnimation,
          b = n.fastScrollEnd,
          A = n.preventOverlaps,
          S =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? bt
              : He,
          I = !d && d !== 0,
          P = Tt(r.scroller || fe),
          Y = N.core.getCache(P),
          $ = li(P),
          K =
            ("pinType" in r
              ? r.pinType
              : Ir(P, "pinType") || ($ && "fixed")) === "fixed",
          B = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          L = I && r.toggleActions.split(" "),
          G = "markers" in r ? r.markers : kn.markers,
          T = $ ? 0 : parseFloat(Gt(P)["border" + S.p2 + Li]) || 0,
          D = this,
          ie =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(D);
            },
          ye = fc(P, $, S),
          qe = hc(P, $),
          ne = 0,
          Z = 0,
          Re = 0,
          de = qr(P, S),
          We,
          Ge,
          Zt,
          je,
          gt,
          pe,
          Te,
          rt,
          mt,
          C,
          ot,
          M,
          y,
          O,
          q,
          H,
          J,
          se,
          Le,
          te,
          Ce,
          _e,
          ae,
          Ve,
          z,
          Ar,
          Mt,
          Rt,
          vr,
          Xt,
          Jt,
          j,
          sr,
          Ke,
          me,
          Fe,
          Lt,
          er,
          Ie;
        if (
          ((D._startClamp = D._endClamp = !1),
          (D._dir = S),
          (g *= 45),
          (D.scroller = P),
          (D.scroll = v ? v.time.bind(v) : de),
          (je = de()),
          (D.vars = r),
          (i = i || r.animation),
          "refreshPriority" in r &&
            ((vu = 1), r.refreshPriority === -9999 && (ln = D)),
          (Y.tweenScroll = Y.tweenScroll || {
            top: ia(P, He),
            left: ia(P, bt),
          }),
          (D.tweenTo = We = Y.tweenScroll[S.p]),
          (D.scrubDuration = function (R) {
            (sr = Gi(R) && R),
              sr
                ? j
                  ? j.duration(R)
                  : (j = N.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: sr,
                      paused: !0,
                      onComplete: function () {
                        return x && x(D);
                      },
                    }))
                : (j && j.progress(1).kill(), (j = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            (i._initted && !D.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (D.animation = i.pause()),
            (i.scrollTrigger = D),
            D.scrubDuration(d),
            (Xt = 0),
            u || (u = i.vars.id)),
          m &&
            ((!jr(m) || m.push) && (m = { snapTo: m }),
            "scrollBehavior" in we.style &&
              N.set($ ? [we, nr] : P, { scrollBehavior: "auto" }),
            ue.forEach(function (R) {
              return (
                St(R) &&
                R.target === ($ ? Ae.scrollingElement || nr : P) &&
                (R.smooth = !1)
              );
            }),
            (Zt = St(m.snapTo)
              ? m.snapTo
              : m.snapTo === "labels"
              ? pc(i)
              : m.snapTo === "labelsDirectional"
              ? _c(i)
              : m.directional !== !1
              ? function (R, ee) {
                  return Co(m.snapTo)(R, ht() - Z < 500 ? 0 : ee.direction);
                }
              : N.utils.snap(m.snapTo)),
            (Ke = m.duration || { min: 0.1, max: 2 }),
            (Ke = jr(Ke) ? nn(Ke.min, Ke.max) : nn(Ke, Ke)),
            (me = N.delayedCall(m.delay || sr / 2 || 0.1, function () {
              var R = de(),
                ee = ht() - Z < 500,
                X = We.tween;
              if (
                (ee || Math.abs(D.getVelocity()) < 10) &&
                !X &&
                !as &&
                ne !== R
              ) {
                var Q = (R - pe) / O,
                  Qe = i && !I ? i.totalProgress() : Q,
                  ce = ee ? 0 : ((Qe - Jt) / (ht() - Xi)) * 1e3 || 0,
                  Be = N.utils.clamp(-Q, 1 - Q, (_i(ce / 2) * ce) / 0.185),
                  at = Q + (m.inertia === !1 ? 0 : Be),
                  Oe,
                  be,
                  xe = m,
                  rr = xe.onStart,
                  Ee = xe.onInterrupt,
                  Bt = xe.onComplete;
                if (
                  ((Oe = Zt(at, D)),
                  Gi(Oe) || (Oe = at),
                  (be = Math.round(pe + Oe * O)),
                  R <= Te && R >= pe && be !== R)
                ) {
                  if (X && !X._initted && X.data <= _i(be - R)) return;
                  m.inertia === !1 && (Be = Oe - Q),
                    We(
                      be,
                      {
                        duration: Ke(
                          _i(
                            (Math.max(_i(at - Qe), _i(Oe - Qe)) * 0.185) /
                              ce /
                              0.05 || 0
                          )
                        ),
                        ease: m.ease || "power3",
                        data: _i(be - R),
                        onInterrupt: function () {
                          return me.restart(!0) && Ee && Ee(D);
                        },
                        onComplete: function () {
                          D.update(),
                            (ne = de()),
                            i &&
                              (j
                                ? j.resetTo(
                                    "totalProgress",
                                    Oe,
                                    i._tTime / i._tDur
                                  )
                                : i.progress(Oe)),
                            (Xt = Jt =
                              i && !I ? i.totalProgress() : D.progress),
                            w && w(D),
                            Bt && Bt(D);
                        },
                      },
                      R,
                      Be * O,
                      be - R - Be * O
                    ),
                    rr && rr(D, We.tween);
                }
              } else D.isActive && ne !== R && me.restart(!0);
            }).pause())),
          u && (js[u] = D),
          (p = D.trigger = Tt(p || (h !== !0 && h))),
          (Ie = p && p._gsap && p._gsap.stRevert),
          Ie && (Ie = Ie(D)),
          (h = h === !0 ? p : Tt(h)),
          zt(o) && (o = { targets: p, className: o }),
          h &&
            (_ === !1 ||
              _ === Wt ||
              (_ =
                !_ &&
                h.parentNode &&
                h.parentNode.style &&
                Gt(h.parentNode).display === "flex"
                  ? !1
                  : $e),
            (D.pin = h),
            (Ge = N.core.getCache(h)),
            Ge.spacer
              ? (q = Ge.pinState)
              : (k &&
                  ((k = Tt(k)),
                  k && !k.nodeType && (k = k.current || k.nativeElement),
                  (Ge.spacerIsNative = !!k),
                  k && (Ge.spacerState = On(k))),
                (Ge.spacer = se = k || Ae.createElement("div")),
                se.classList.add("pin-spacer"),
                u && se.classList.add("pin-spacer-" + u),
                (Ge.pinState = q = On(h))),
            r.force3D !== !1 && N.set(h, { force3D: !0 }),
            (D.spacer = se = Ge.spacer),
            (vr = Gt(h)),
            (Ve = vr[_ + S.os2]),
            (te = N.getProperty(h)),
            (Ce = N.quickSetter(h, S.a, Xe)),
            Fs(h, se, vr),
            (J = On(h))),
          G)
        ) {
          (M = jr(G) ? Ko(G, Qo) : Qo),
            (C = Pn("scroller-start", u, P, S, M, 0)),
            (ot = Pn("scroller-end", u, P, S, M, 0, C)),
            (Le = C["offset" + S.op.d2]);
          var tr = Tt(Ir(P, "content") || P);
          (rt = this.markerStart = Pn("start", u, tr, S, M, Le, 0, v)),
            (mt = this.markerEnd = Pn("end", u, tr, S, M, Le, 0, v)),
            v && (er = N.quickSetter([rt, mt], S.a, Xe)),
            !K &&
              !(yr.length && Ir(P, "fixedMarkers") === !0) &&
              (dc($ ? we : P),
              N.set([C, ot], { force3D: !0 }),
              (Ar = N.quickSetter(C, S.a, Xe)),
              (Rt = N.quickSetter(ot, S.a, Xe)));
        }
        if (v) {
          var W = v.vars.onUpdate,
            U = v.vars.onUpdateParams;
          v.eventCallback("onUpdate", function () {
            D.update(0, 0, 1), W && W.apply(v, U || []);
          });
        }
        if (
          ((D.previous = function () {
            return oe[oe.indexOf(D) - 1];
          }),
          (D.next = function () {
            return oe[oe.indexOf(D) + 1];
          }),
          (D.revert = function (R, ee) {
            if (!ee) return D.kill(!0);
            var X = R !== !1 || !D.enabled,
              Q = ct;
            X !== D.isReverted &&
              (X &&
                ((Fe = Math.max(de(), D.scroll.rec || 0)),
                (Re = D.progress),
                (Lt = i && i.progress())),
              rt &&
                [rt, mt, C, ot].forEach(function (Qe) {
                  return (Qe.style.display = X ? "none" : "block");
                }),
              X && ((ct = D), D.update(X)),
              h &&
                (!F || !D.isActive) &&
                (X ? mc(h, se, q) : Fs(h, se, Gt(h), z)),
              X || D.update(X),
              (ct = Q),
              (D.isReverted = X));
          }),
          (D.refresh = function (R, ee, X, Q) {
            if (!((ct || !D.enabled) && !ee)) {
              if (h && R && Kt) {
                Je(a, "scrollEnd", Ou);
                return;
              }
              !wt && ie && ie(D),
                (ct = D),
                We.tween && !X && (We.tween.kill(), (We.tween = 0)),
                j && j.pause(),
                f && i && i.revert({ kill: !1 }).invalidate(),
                D.isReverted || D.revert(!0, !0),
                (D._subPinOffset = !1);
              var Qe = ye(),
                ce = qe(),
                Be = v ? v.duration() : Dr(P, S),
                at = O <= 0.01,
                Oe = 0,
                be = Q || 0,
                xe = jr(X) ? X.end : r.end,
                rr = r.endTrigger || p,
                Ee = jr(X)
                  ? X.start
                  : r.start || (r.start === 0 || !p ? 0 : h ? "0 0" : "0 100%"),
                Bt = (D.pinnedContainer =
                  r.pinnedContainer && Tt(r.pinnedContainer, D)),
                or = (p && Math.max(0, oe.indexOf(D))) || 0,
                it = or,
                nt,
                ut,
                Ur,
                xn,
                lt,
                Ue,
                ar,
                ls,
                So,
                Bi,
                ur,
                Ni,
                vn;
              for (
                G &&
                jr(X) &&
                ((Ni = N.getProperty(C, S.p)), (vn = N.getProperty(ot, S.p)));
                it--;

              )
                (Ue = oe[it]),
                  Ue.end || Ue.refresh(0, 1) || (ct = D),
                  (ar = Ue.pin),
                  ar &&
                    (ar === p || ar === h || ar === Bt) &&
                    !Ue.isReverted &&
                    (Bi || (Bi = []), Bi.unshift(Ue), Ue.revert(!0, !0)),
                  Ue !== oe[it] && (or--, it--);
              for (
                St(Ee) && (Ee = Ee(D)),
                  Ee = Ho(Ee, "start", D),
                  pe =
                    ta(
                      Ee,
                      p,
                      Qe,
                      S,
                      de(),
                      rt,
                      C,
                      D,
                      ce,
                      T,
                      K,
                      Be,
                      v,
                      D._startClamp && "_startClamp"
                    ) || (h ? -0.001 : 0),
                  St(xe) && (xe = xe(D)),
                  zt(xe) &&
                    !xe.indexOf("+=") &&
                    (~xe.indexOf(" ")
                      ? (xe = (zt(Ee) ? Ee.split(" ")[0] : "") + xe)
                      : ((Oe = Yn(xe.substr(2), Qe)),
                        (xe = zt(Ee)
                          ? Ee
                          : (v
                              ? N.utils.mapRange(
                                  0,
                                  v.duration(),
                                  v.scrollTrigger.start,
                                  v.scrollTrigger.end,
                                  pe
                                )
                              : pe) + Oe),
                        (rr = p))),
                  xe = Ho(xe, "end", D),
                  Te =
                    Math.max(
                      pe,
                      ta(
                        xe || (rr ? "100% 0" : Be),
                        rr,
                        Qe,
                        S,
                        de() + Oe,
                        mt,
                        ot,
                        D,
                        ce,
                        T,
                        K,
                        Be,
                        v,
                        D._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Oe = 0,
                  it = or;
                it--;

              )
                (Ue = oe[it]),
                  (ar = Ue.pin),
                  ar &&
                    Ue.start - Ue._pinPush <= pe &&
                    !v &&
                    Ue.end > 0 &&
                    ((nt =
                      Ue.end -
                      (D._startClamp ? Math.max(0, Ue.start) : Ue.start)),
                    ((ar === p && Ue.start - Ue._pinPush < pe) || ar === Bt) &&
                      isNaN(Ee) &&
                      (Oe += nt * (1 - Ue.progress)),
                    ar === h && (be += nt));
              if (
                ((pe += Oe),
                (Te += Oe),
                D._startClamp && (D._startClamp += Oe),
                D._endClamp &&
                  !wt &&
                  ((D._endClamp = Te || -0.001), (Te = Math.min(Te, Dr(P, S)))),
                (O = Te - pe || ((pe -= 0.01) && 0.001)),
                at && (Re = N.utils.clamp(0, 1, N.utils.normalize(pe, Te, Fe))),
                (D._pinPush = be),
                rt &&
                  Oe &&
                  ((nt = {}),
                  (nt[S.a] = "+=" + Oe),
                  Bt && (nt[S.p] = "-=" + de()),
                  N.set([rt, mt], nt)),
                h && !(Gs && D.end >= Dr(P, S)))
              )
                (nt = Gt(h)),
                  (xn = S === He),
                  (Ur = de()),
                  (_e = parseFloat(te(S.a)) + be),
                  !Be &&
                    Te > 1 &&
                    ((ur = ($ ? Ae.scrollingElement || nr : P).style),
                    (ur = {
                      style: ur,
                      value: ur["overflow" + S.a.toUpperCase()],
                    }),
                    $ &&
                      Gt(we)["overflow" + S.a.toUpperCase()] !== "scroll" &&
                      (ur.style["overflow" + S.a.toUpperCase()] = "scroll")),
                  Fs(h, se, nt),
                  (J = On(h)),
                  (ut = Fr(h, !0)),
                  (ls = K && qr(P, xn ? bt : He)()),
                  _
                    ? ((z = [_ + S.os2, O + be + Xe]),
                      (z.t = se),
                      (it = _ === $e ? rs(h, S) + O + be : 0),
                      it &&
                        (z.push(S.d, it + Xe),
                        se.style.flexBasis !== "auto" &&
                          (se.style.flexBasis = it + Xe)),
                      Ai(z),
                      Bt &&
                        oe.forEach(function (zi) {
                          zi.pin === Bt &&
                            zi.vars.pinSpacing !== !1 &&
                            (zi._subPinOffset = !0);
                        }),
                      K && de(Fe))
                    : ((it = rs(h, S)),
                      it &&
                        se.style.flexBasis !== "auto" &&
                        (se.style.flexBasis = it + Xe)),
                  K &&
                    ((lt = {
                      top: ut.top + (xn ? Ur - pe : ls) + Xe,
                      left: ut.left + (xn ? ls : Ur - pe) + Xe,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (lt[ni] = lt["max" + Li] = Math.ceil(ut.width) + Xe),
                    (lt[si] = lt["max" + vo] = Math.ceil(ut.height) + Xe),
                    (lt[Wt] =
                      lt[Wt + an] =
                      lt[Wt + sn] =
                      lt[Wt + un] =
                      lt[Wt + on] =
                        "0"),
                    (lt[$e] = nt[$e]),
                    (lt[$e + an] = nt[$e + an]),
                    (lt[$e + sn] = nt[$e + sn]),
                    (lt[$e + un] = nt[$e + un]),
                    (lt[$e + on] = nt[$e + on]),
                    (H = xc(q, lt, F)),
                    wt && de(0)),
                  i
                    ? ((So = i._initted),
                      ys(1),
                      i.render(i.duration(), !0, !0),
                      (ae = te(S.a) - _e + O + be),
                      (Mt = Math.abs(O - ae) > 1),
                      K && Mt && H.splice(H.length - 2, 2),
                      i.render(0, !0, !0),
                      So || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      ys(0))
                    : (ae = O),
                  ur &&
                    (ur.value
                      ? (ur.style["overflow" + S.a.toUpperCase()] = ur.value)
                      : ur.style.removeProperty("overflow-" + S.a));
              else if (p && de() && !v)
                for (ut = p.parentNode; ut && ut !== we; )
                  ut._pinOffset &&
                    ((pe -= ut._pinOffset), (Te -= ut._pinOffset)),
                    (ut = ut.parentNode);
              Bi &&
                Bi.forEach(function (zi) {
                  return zi.revert(!1, !0);
                }),
                (D.start = pe),
                (D.end = Te),
                (je = gt = wt ? Fe : de()),
                !v && !wt && (je < Fe && de(Fe), (D.scroll.rec = 0)),
                D.revert(!1, !0),
                (Z = ht()),
                me && ((ne = -1), me.restart(!0)),
                (ct = 0),
                i &&
                  I &&
                  (i._initted || Lt) &&
                  i.progress() !== Lt &&
                  i.progress(Lt || 0, !0).render(i.time(), !0, !0),
                (at || Re !== D.progress || v || f) &&
                  (i &&
                    !I &&
                    i.totalProgress(
                      v && pe < -0.001 && !Re
                        ? N.utils.normalize(pe, Te, 0)
                        : Re,
                      !0
                    ),
                  (D.progress = at || (je - pe) / O === Re ? 0 : Re)),
                h && _ && (se._pinOffset = Math.round(D.progress * ae)),
                j && j.invalidate(),
                isNaN(Ni) ||
                  ((Ni -= N.getProperty(C, S.p)),
                  (vn -= N.getProperty(ot, S.p)),
                  Mn(C, S, Ni),
                  Mn(rt, S, Ni - (Q || 0)),
                  Mn(ot, S, vn),
                  Mn(mt, S, vn - (Q || 0))),
                at && !wt && D.update(),
                c && !wt && !y && ((y = !0), c(D), (y = !1));
            }
          }),
          (D.getVelocity = function () {
            return ((de() - gt) / (ht() - Xi)) * 1e3 || 0;
          }),
          (D.endAnimation = function () {
            Yi(D.callbackAnimation),
              i &&
                (j
                  ? j.progress(1)
                  : i.paused()
                  ? I || Yi(i, D.direction < 0, 1)
                  : Yi(i, i.reversed()));
          }),
          (D.labelToScroll = function (R) {
            return (
              (i &&
                i.labels &&
                (pe || D.refresh() || pe) + (i.labels[R] / i.duration()) * O) ||
              0
            );
          }),
          (D.getTrailing = function (R) {
            var ee = oe.indexOf(D),
              X =
                D.direction > 0 ? oe.slice(0, ee).reverse() : oe.slice(ee + 1);
            return (
              zt(R)
                ? X.filter(function (Q) {
                    return Q.vars.preventOverlaps === R;
                  })
                : X
            ).filter(function (Q) {
              return D.direction > 0 ? Q.end <= pe : Q.start >= Te;
            });
          }),
          (D.update = function (R, ee, X) {
            if (!(v && !X && !R)) {
              var Q = wt === !0 ? Fe : D.scroll(),
                Qe = R ? 0 : (Q - pe) / O,
                ce = Qe < 0 ? 0 : Qe > 1 ? 1 : Qe || 0,
                Be = D.progress,
                at,
                Oe,
                be,
                xe,
                rr,
                Ee,
                Bt,
                or;
              if (
                (ee &&
                  ((gt = je),
                  (je = v ? de() : Q),
                  m && ((Jt = Xt), (Xt = i && !I ? i.totalProgress() : ce))),
                g &&
                  h &&
                  !ct &&
                  !Sn &&
                  Kt &&
                  (!ce && pe < Q + ((Q - gt) / (ht() - Xi)) * g
                    ? (ce = 1e-4)
                    : ce === 1 &&
                      Te > Q + ((Q - gt) / (ht() - Xi)) * g &&
                      (ce = 0.9999)),
                ce !== Be && D.enabled)
              ) {
                if (
                  ((at = D.isActive = !!ce && ce < 1),
                  (Oe = !!Be && Be < 1),
                  (Ee = at !== Oe),
                  (rr = Ee || !!ce != !!Be),
                  (D.direction = ce > Be ? 1 : -1),
                  (D.progress = ce),
                  rr &&
                    !ct &&
                    ((be = ce && !Be ? 0 : ce === 1 ? 1 : Be === 1 ? 2 : 3),
                    I &&
                      ((xe =
                        (!Ee && L[be + 1] !== "none" && L[be + 1]) || L[be]),
                      (or =
                        i &&
                        (xe === "complete" || xe === "reset" || xe in i)))),
                  A &&
                    (Ee || or) &&
                    (or || d || !i) &&
                    (St(A)
                      ? A(D)
                      : D.getTrailing(A).forEach(function (Ur) {
                          return Ur.endAnimation();
                        })),
                  I ||
                    (j && !ct && !Sn
                      ? (j._dp._time - j._start !== j._time &&
                          j.render(j._dp._time - j._start),
                        j.resetTo
                          ? j.resetTo("totalProgress", ce, i._tTime / i._tDur)
                          : ((j.vars.totalProgress = ce),
                            j.invalidate().restart()))
                      : i && i.totalProgress(ce, !!(ct && (Z || R)))),
                  h)
                ) {
                  if ((R && _ && (se.style[_ + S.os2] = Ve), !K))
                    Ce(Wi(_e + ae * ce));
                  else if (rr) {
                    if (
                      ((Bt = !R && ce > Be && Te + 1 > Q && Q + 1 >= Dr(P, S)),
                      F)
                    )
                      if (!R && (at || Bt)) {
                        var it = Fr(h, !0),
                          nt = Q - pe;
                        ra(
                          h,
                          we,
                          it.top + (S === He ? nt : 0) + Xe,
                          it.left + (S === He ? 0 : nt) + Xe
                        );
                      } else ra(h, se);
                    Ai(at || Bt ? H : J),
                      (Mt && ce < 1 && at) ||
                        Ce(_e + (ce === 1 && !Bt ? ae : 0));
                  }
                }
                m && !We.tween && !ct && !Sn && me.restart(!0),
                  o &&
                    (Ee || (E && ce && (ce < 1 || !xs))) &&
                    gn(o.targets).forEach(function (Ur) {
                      return Ur.classList[at || E ? "add" : "remove"](
                        o.className
                      );
                    }),
                  s && !I && !R && s(D),
                  rr && !ct
                    ? (I &&
                        (or &&
                          (xe === "complete"
                            ? i.pause().totalProgress(1)
                            : xe === "reset"
                            ? i.restart(!0).pause()
                            : xe === "restart"
                            ? i.restart(!0)
                            : i[xe]()),
                        s && s(D)),
                      (Ee || !xs) &&
                        (l && Ee && Cs(D, l),
                        B[be] && Cs(D, B[be]),
                        E && (ce === 1 ? D.kill(!1, 1) : (B[be] = 0)),
                        Ee || ((be = ce === 1 ? 1 : 3), B[be] && Cs(D, B[be]))),
                      b &&
                        !at &&
                        Math.abs(D.getVelocity()) > (Gi(b) ? b : 2500) &&
                        (Yi(D.callbackAnimation),
                        j
                          ? j.progress(1)
                          : Yi(i, xe === "reverse" ? 1 : !ce, 1)))
                    : I && s && !ct && s(D);
              }
              if (Rt) {
                var ut = v ? (Q / v.duration()) * (v._caScrollDist || 0) : Q;
                Ar(ut + (C._isFlipped ? 1 : 0)), Rt(ut);
              }
              er && er((-Q / v.duration()) * (v._caScrollDist || 0));
            }
          }),
          (D.enable = function (R, ee) {
            D.enabled ||
              ((D.enabled = !0),
              Je(P, "resize", ji),
              $ || Je(P, "scroll", Di),
              ie && Je(a, "refreshInit", ie),
              R !== !1 && ((D.progress = Re = 0), (je = gt = ne = de())),
              ee !== !1 && D.refresh());
          }),
          (D.getTween = function (R) {
            return R && We ? We.tween : j;
          }),
          (D.setPositions = function (R, ee, X, Q) {
            if (v) {
              var Qe = v.scrollTrigger,
                ce = v.duration(),
                Be = Qe.end - Qe.start;
              (R = Qe.start + (Be * R) / ce), (ee = Qe.start + (Be * ee) / ce);
            }
            D.refresh(
              !1,
              !1,
              {
                start: Wo(R, X && !!D._startClamp),
                end: Wo(ee, X && !!D._endClamp),
              },
              Q
            ),
              D.update();
          }),
          (D.adjustPinSpacing = function (R) {
            if (z && R) {
              var ee = z.indexOf(S.d) + 1;
              (z[ee] = parseFloat(z[ee]) + R + Xe),
                (z[1] = parseFloat(z[1]) + R + Xe),
                Ai(z);
            }
          }),
          (D.disable = function (R, ee) {
            if (
              D.enabled &&
              (R !== !1 && D.revert(!0, !0),
              (D.enabled = D.isActive = !1),
              ee || (j && j.pause()),
              (Fe = 0),
              Ge && (Ge.uncache = 1),
              ie && Ze(a, "refreshInit", ie),
              me && (me.pause(), We.tween && We.tween.kill() && (We.tween = 0)),
              !$)
            ) {
              for (var X = oe.length; X--; )
                if (oe[X].scroller === P && oe[X] !== D) return;
              Ze(P, "resize", ji), $ || Ze(P, "scroll", Di);
            }
          }),
          (D.kill = function (R, ee) {
            D.disable(R, ee), j && !ee && j.kill(), u && delete js[u];
            var X = oe.indexOf(D);
            X >= 0 && oe.splice(X, 1),
              X === Ct && Vn > 0 && Ct--,
              (X = 0),
              oe.forEach(function (Q) {
                return Q.scroller === D.scroller && (X = 1);
              }),
              X || wt || (D.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                R && i.revert({ kill: !1 }),
                ee || i.kill()),
              rt &&
                [rt, mt, C, ot].forEach(function (Q) {
                  return Q.parentNode && Q.parentNode.removeChild(Q);
                }),
              ln === D && (ln = 0),
              h &&
                (Ge && (Ge.uncache = 1),
                (X = 0),
                oe.forEach(function (Q) {
                  return Q.pin === h && X++;
                }),
                X || (Ge.spacer = 0)),
              r.onKill && r.onKill(D);
          }),
          oe.push(D),
          D.enable(!1, !1),
          Ie && Ie(D),
          i && i.add && !O)
        ) {
          var De = D.update;
          (D.update = function () {
            (D.update = De), pe || Te || D.refresh();
          }),
            N.delayedCall(0.01, D.update),
            (O = 0.01),
            (pe = Te = 0);
        } else D.refresh();
        h && gc();
      }),
      (a.register = function (r) {
        return (
          gi ||
            ((N = r || Su()), bu() && window.document && a.enable(), (gi = Hi)),
          gi
        );
      }),
      (a.defaults = function (r) {
        if (r) for (var i in r) kn[i] = r[i];
        return kn;
      }),
      (a.disable = function (r, i) {
        (Hi = 0),
          oe.forEach(function (s) {
            return s[i ? "kill" : "disable"](r);
          }),
          Ze(fe, "wheel", Di),
          Ze(Ae, "scroll", Di),
          clearInterval(bn),
          Ze(Ae, "touchcancel", hr),
          Ze(we, "touchstart", hr),
          En(Ze, Ae, "pointerdown,touchstart,mousedown", Go),
          En(Ze, Ae, "pointerup,touchend,mouseup", jo),
          es.kill(),
          Tn(Ze);
        for (var n = 0; n < ue.length; n += 3)
          An(Ze, ue[n], ue[n + 1]), An(Ze, ue[n], ue[n + 2]);
      }),
      (a.enable = function () {
        if (
          ((fe = window),
          (Ae = document),
          (nr = Ae.documentElement),
          (we = Ae.body),
          N &&
            ((gn = N.utils.toArray),
            (nn = N.utils.clamp),
            (Ws = N.core.context || hr),
            (ys = N.core.suppressOverwrites || hr),
            (go = fe.history.scrollRestoration || "auto"),
            (Ks = fe.pageYOffset),
            N.core.globals("ScrollTrigger", a),
            we))
        ) {
          (Hi = 1),
            (Ei = document.createElement("div")),
            (Ei.style.height = "100vh"),
            (Ei.style.position = "absolute"),
            Lu(),
            cc(),
            ze.register(N),
            (a.isTouch = ze.isTouch),
            (Pr =
              ze.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Hs = ze.isTouch === 1),
            Je(fe, "wheel", Di),
            (xu = [fe, Ae, nr, we]),
            N.matchMedia
              ? ((a.matchMedia = function (u) {
                  var l = N.matchMedia(),
                    c;
                  for (c in u) l.add(c, u[c]);
                  return l;
                }),
                N.addEventListener("matchMediaInit", function () {
                  return wo();
                }),
                N.addEventListener("matchMediaRevert", function () {
                  return Mu();
                }),
                N.addEventListener("matchMedia", function () {
                  Jr(0, 1), fi("matchMedia");
                }),
                N.matchMedia("(orientation: portrait)", function () {
                  return ws(), ws;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            ws(),
            Je(Ae, "scroll", Di);
          var r = we.style,
            i = r.borderTopStyle,
            n = N.core.Animation.prototype,
            s,
            o;
          for (
            n.revert ||
              Object.defineProperty(n, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              s = Fr(we),
              He.m = Math.round(s.top + He.sc()) || 0,
              bt.m = Math.round(s.left + bt.sc()) || 0,
              i ? (r.borderTopStyle = i) : r.removeProperty("border-top-style"),
              bn = setInterval(Zo, 250),
              N.delayedCall(0.5, function () {
                return (Sn = 0);
              }),
              Je(Ae, "touchcancel", hr),
              Je(we, "touchstart", hr),
              En(Je, Ae, "pointerdown,touchstart,mousedown", Go),
              En(Je, Ae, "pointerup,touchend,mouseup", jo),
              Xs = N.utils.checkPrefix("transform"),
              Un.push(Xs),
              gi = ht(),
              es = N.delayedCall(0.2, Jr).pause(),
              mi = [
                Ae,
                "visibilitychange",
                function () {
                  var u = fe.innerWidth,
                    l = fe.innerHeight;
                  Ae.hidden
                    ? ((Uo = u), (Xo = l))
                    : (Uo !== u || Xo !== l) && ji();
                },
                Ae,
                "DOMContentLoaded",
                Jr,
                fe,
                "load",
                Jr,
                fe,
                "resize",
                ji,
              ],
              Tn(Je),
              oe.forEach(function (u) {
                return u.enable(0, 1);
              }),
              o = 0;
            o < ue.length;
            o += 3
          )
            An(Ze, ue[o], ue[o + 1]), An(Ze, ue[o], ue[o + 2]);
        }
      }),
      (a.config = function (r) {
        "limitCallbacks" in r && (xs = !!r.limitCallbacks);
        var i = r.syncInterval;
        (i && clearInterval(bn)) || ((bn = i) && setInterval(Zo, i)),
          "ignoreMobileResize" in r &&
            (Hs = a.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (Tn(Ze) || Tn(Je, r.autoRefreshEvents || "none"),
            (Cu = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (a.scrollerProxy = function (r, i) {
        var n = Tt(r),
          s = ue.indexOf(n),
          o = li(n);
        ~s && ue.splice(s, o ? 6 : 2),
          i && (o ? yr.unshift(fe, i, we, i, nr, i) : yr.unshift(n, i));
      }),
      (a.clearMatchMedia = function (r) {
        oe.forEach(function (i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
        });
      }),
      (a.isInViewport = function (r, i, n) {
        var s = (zt(r) ? Tt(r) : r).getBoundingClientRect(),
          o = s[n ? ni : si] * i || 0;
        return n
          ? s.right - o > 0 && s.left + o < fe.innerWidth
          : s.bottom - o > 0 && s.top + o < fe.innerHeight;
      }),
      (a.positionInViewport = function (r, i, n) {
        zt(r) && (r = Tt(r));
        var s = r.getBoundingClientRect(),
          o = s[n ? ni : si],
          u =
            i == null
              ? o / 2
              : i in is
              ? is[i] * o
              : ~i.indexOf("%")
              ? (parseFloat(i) * o) / 100
              : parseFloat(i) || 0;
        return n ? (s.left + u) / fe.innerWidth : (s.top + u) / fe.innerHeight;
      }),
      (a.killAll = function (r) {
        if (
          (oe.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          r !== !0)
        ) {
          var i = ci.killAll || [];
          (ci = {}),
            i.forEach(function (n) {
              return n();
            });
        }
      }),
      a
    );
  })();
le.version = "3.12.5";
le.saveStyles = function (a) {
  return a
    ? gn(a).forEach(function (e) {
        if (e && e.style) {
          var t = Nt.indexOf(e);
          t >= 0 && Nt.splice(t, 5),
            Nt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              N.core.getCache(e),
              Ws()
            );
        }
      })
    : Nt;
};
le.revert = function (a, e) {
  return wo(!a, e);
};
le.create = function (a, e) {
  return new le(a, e);
};
le.refresh = function (a) {
  return a ? ji() : (gi || le.register()) && Jr(!0);
};
le.update = function (a) {
  return ++ue.cache && Sr(a === !0 ? 2 : 0);
};
le.clearScrollMemory = Ru;
le.maxScroll = function (a, e) {
  return Dr(a, e ? bt : He);
};
le.getScrollFunc = function (a, e) {
  return qr(Tt(a), e ? bt : He);
};
le.getById = function (a) {
  return js[a];
};
le.getAll = function () {
  return oe.filter(function (a) {
    return a.vars.id !== "ScrollSmoother";
  });
};
le.isScrolling = function () {
  return !!Kt;
};
le.snapDirectional = Co;
le.addEventListener = function (a, e) {
  var t = ci[a] || (ci[a] = []);
  ~t.indexOf(e) || t.push(e);
};
le.removeEventListener = function (a, e) {
  var t = ci[a],
    r = t && t.indexOf(e);
  r >= 0 && t.splice(r, 1);
};
le.batch = function (a, e) {
  var t = [],
    r = {},
    i = e.interval || 0.016,
    n = e.batchMax || 1e9,
    s = function (l, c) {
      var d = [],
        p = [],
        h = N.delayedCall(i, function () {
          c(d, p), (d = []), (p = []);
        }).pause();
      return function (_) {
        d.length || h.restart(!0),
          d.push(_.trigger),
          p.push(_),
          n <= d.length && h.progress(1);
      };
    },
    o;
  for (o in e)
    r[o] =
      o.substr(0, 2) === "on" && St(e[o]) && o !== "onRefreshInit"
        ? s(o, e[o])
        : e[o];
  return (
    St(n) &&
      ((n = n()),
      Je(le, "refresh", function () {
        return (n = e.batchMax());
      })),
    gn(a).forEach(function (u) {
      var l = {};
      for (o in r) l[o] = r[o];
      (l.trigger = u), t.push(le.create(l));
    }),
    t
  );
};
var na = function (e, t, r, i) {
    return (
      t > i ? e(i) : t < 0 && e(0),
      r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  },
  bs = function a(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (ze.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === nr && a(we, t);
  },
  Rn = { auto: 1, scroll: 1 },
  Cc = function (e) {
    var t = e.event,
      r = e.target,
      i = e.axis,
      n = (t.changedTouches ? t.changedTouches[0] : t).target,
      s = n._gsap || N.core.getCache(n),
      o = ht(),
      u;
    if (!s._isScrollT || o - s._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== we &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(Rn[(u = Gt(n)).overflowY] || Rn[u.overflowX]));

      )
        n = n.parentNode;
      (s._isScroll =
        n &&
        n !== r &&
        !li(n) &&
        (Rn[(u = Gt(n)).overflowY] || Rn[u.overflowX])),
        (s._isScrollT = o);
    }
    (s._isScroll || i === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  Nu = function (e, t, r, i) {
    return ze.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (i = i && Cc),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return r && Je(Ae, ze.eventTypes[0], oa, !1, !0);
      },
      onDisable: function () {
        return Ze(Ae, ze.eventTypes[0], oa, !0);
      },
    });
  },
  wc = /(input|label|select|textarea)/i,
  sa,
  oa = function (e) {
    var t = wc.test(e.target.tagName);
    (t || sa) && ((e._gsapAllow = !0), (sa = t));
  },
  Fc = function (e) {
    jr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      r = t.normalizeScrollX,
      i = t.momentum,
      n = t.allowNestedScroll,
      s = t.onRelease,
      o,
      u,
      l = Tt(e.target) || nr,
      c = N.core.globals().ScrollSmoother,
      d = c && c.get(),
      p =
        Pr &&
        ((e.content && Tt(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      h = qr(l, He),
      _ = qr(l, bt),
      f = 1,
      g =
        (ze.isTouch && fe.visualViewport
          ? fe.visualViewport.scale * fe.visualViewport.width
          : fe.outerWidth) / fe.innerWidth,
      x = 0,
      w = St(i)
        ? function () {
            return i(o);
          }
        : function () {
            return i || 2.8;
          },
      E,
      m,
      F = Nu(l, e.type, !0, n),
      k = function () {
        return (m = !1);
      },
      v = hr,
      b = hr,
      A = function () {
        (u = Dr(l, He)),
          (b = nn(Pr ? 1 : 0, u)),
          r && (v = nn(0, Dr(l, bt))),
          (E = oi);
      },
      S = function () {
        (p._gsap.y = Wi(parseFloat(p._gsap.y) + h.offset) + "px"),
          (p.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(p._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      },
      I = function () {
        if (m) {
          requestAnimationFrame(k);
          var G = Wi(o.deltaY / 2),
            T = b(h.v - G);
          if (p && T !== h.v + h.offset) {
            h.offset = T - h.v;
            var D = Wi((parseFloat(p && p._gsap.y) || 0) - h.offset);
            (p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              D +
              ", 0, 1)"),
              (p._gsap.y = D + "px"),
              (h.cacheID = ue.cache),
              Sr();
          }
          return !0;
        }
        h.offset && S(), (m = !0);
      },
      P,
      Y,
      $,
      K,
      B = function () {
        A(),
          P.isActive() &&
            P.vars.scrollY > u &&
            (h() > u ? P.progress(1) && h(u) : P.resetTo("scrollY", u));
      };
    return (
      p && N.set(p, { y: "+=0" }),
      (e.ignoreCheck = function (L) {
        return (
          (Pr && L.type === "touchmove" && I()) ||
          (f > 1.05 && L.type !== "touchstart") ||
          o.isGesturing ||
          (L.touches && L.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        m = !1;
        var L = f;
        (f = Wi(((fe.visualViewport && fe.visualViewport.scale) || 1) / g)),
          P.pause(),
          L !== f && bs(l, f > 1.01 ? !0 : r ? !1 : "x"),
          (Y = _()),
          ($ = h()),
          A(),
          (E = oi);
      }),
      (e.onRelease = e.onGestureStart =
        function (L, G) {
          if ((h.offset && S(), !G)) K.restart(!0);
          else {
            ue.cache++;
            var T = w(),
              D,
              ie;
            r &&
              ((D = _()),
              (ie = D + (T * 0.05 * -L.velocityX) / 0.227),
              (T *= na(_, D, ie, Dr(l, bt))),
              (P.vars.scrollX = v(ie))),
              (D = h()),
              (ie = D + (T * 0.05 * -L.velocityY) / 0.227),
              (T *= na(h, D, ie, Dr(l, He))),
              (P.vars.scrollY = b(ie)),
              P.invalidate().duration(T).play(0.01),
              ((Pr && P.vars.scrollY >= u) || D >= u - 1) &&
                N.to({}, { onUpdate: B, duration: T });
          }
          s && s(L);
        }),
      (e.onWheel = function () {
        P._ts && P.pause(), ht() - x > 1e3 && ((E = 0), (x = ht()));
      }),
      (e.onChange = function (L, G, T, D, ie) {
        if (
          (oi !== E && A(),
          G && r && _(v(D[2] === G ? Y + (L.startX - L.x) : _() + G - D[1])),
          T)
        ) {
          h.offset && S();
          var ye = ie[2] === T,
            qe = ye ? $ + L.startY - L.y : h() + T - ie[1],
            ne = b(qe);
          ye && qe !== ne && ($ += ne - qe), h(ne);
        }
        (T || G) && Sr();
      }),
      (e.onEnable = function () {
        bs(l, r ? !1 : "x"),
          le.addEventListener("refresh", B),
          Je(fe, "resize", B),
          h.smooth &&
            ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = _.smooth = !1)),
          F.enable();
      }),
      (e.onDisable = function () {
        bs(l, !0),
          Ze(fe, "resize", B),
          le.removeEventListener("refresh", B),
          F.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new ze(e)),
      (o.iOS = Pr),
      Pr && !h() && h(1),
      Pr && N.ticker.add(hr),
      (K = o._dc),
      (P = N.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Bu(h, h(), function () {
            return P.pause();
          }),
        },
        onUpdate: Sr,
        onComplete: K.vars.onComplete,
      })),
      o
    );
  };
le.sort = function (a) {
  return oe.sort(
    a ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
le.observe = function (a) {
  return new ze(a);
};
le.normalizeScroll = function (a) {
  if (typeof a > "u") return vt;
  if (a === !0 && vt) return vt.enable();
  if (a === !1) {
    vt && vt.kill(), (vt = a);
    return;
  }
  var e = a instanceof ze ? a : Fc(a);
  return vt && vt.target === e.target && vt.kill(), li(e.target) && (vt = e), e;
};
le.core = {
  _getVelocityProp: Us,
  _inputObserver: Nu,
  _scrollers: ue,
  _proxies: yr,
  bridge: {
    ss: function () {
      Kt || fi("scrollStart"), (Kt = ht());
    },
    ref: function () {
      return ct;
    },
  },
};
Su() && N.registerPlugin(le);
/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var bc =
  /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function zu(a) {
  var e = a.nodeType,
    t = "";
  if (e === 1 || e === 9 || e === 11) {
    if (typeof a.textContent == "string") return a.textContent;
    for (a = a.firstChild; a; a = a.nextSibling) t += zu(a);
  } else if (e === 3 || e === 4) return a.nodeValue;
  return t;
}
/*!
 * SplitText: 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ci,
  Zs,
  Iu,
  qi,
  $u,
  us,
  Sc = /(?:\r|\n|\t\t)/g,
  Tc = /(?:\s\s+)/g,
  Ec = " ",
  Yu = function (e) {
    (Ci = document),
      (Zs = window),
      (qi =
        qi ||
        e ||
        Zs.gsap ||
        console.warn("Please gsap.registerPlugin(SplitText)")),
      qi &&
        ((us = qi.utils.toArray),
        ($u = qi.core.context || function () {}),
        (Iu = 1));
  },
  qu = function (e) {
    return Zs.getComputedStyle(e);
  },
  Fo = function (e) {
    return e.position === "absolute" || e.absolute === !0;
  },
  Ac = function (e, t) {
    for (var r = t.length, i; --r > -1; )
      if (((i = t[r]), e.substr(0, i.length) === i)) return i.length;
  },
  kc = " style='position:relative;display:inline-block;'",
  aa = function (e, t) {
    e === void 0 && (e = "");
    var r = ~e.indexOf("++"),
      i = 1;
    return (
      r && (e = e.split("++").join("")),
      function () {
        return (
          "<" + t + kc + (e ? " class='" + e + (r ? i++ : "") + "'>" : ">")
        );
      }
    );
  },
  Vu = function a(e, t, r) {
    var i = e.nodeType;
    if (i === 1 || i === 9 || i === 11)
      for (e = e.firstChild; e; e = e.nextSibling) a(e, t, r);
    else (i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(t).join(r));
  },
  Ss = function (e, t) {
    for (var r = t.length; --r > -1; ) e.push(t[r]);
  },
  ua = function (e, t, r) {
    for (var i; e && e !== t; ) {
      if (((i = e._next || e.nextSibling), i))
        return i.textContent.charAt(0) === r;
      e = e.parentNode || e._parent;
    }
  },
  Pc = function a(e) {
    var t = us(e.childNodes),
      r = t.length,
      i,
      n;
    for (i = 0; i < r; i++)
      (n = t[i]),
        n._isSplit
          ? a(n)
          : i && n.previousSibling && n.previousSibling.nodeType === 3
          ? ((n.previousSibling.nodeValue +=
              n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue),
            e.removeChild(n))
          : n.nodeType !== 3 &&
            (e.insertBefore(n.firstChild, n), e.removeChild(n));
  },
  lr = function (e, t) {
    return parseFloat(t[e]) || 0;
  },
  Oc = function (e, t, r, i, n, s, o) {
    var u = qu(e),
      l = lr("paddingLeft", u),
      c = -999,
      d = lr("borderBottomWidth", u) + lr("borderTopWidth", u),
      p = lr("borderLeftWidth", u) + lr("borderRightWidth", u),
      h = lr("paddingTop", u) + lr("paddingBottom", u),
      _ = lr("paddingLeft", u) + lr("paddingRight", u),
      f = lr("fontSize", u) * (t.lineThreshold || 0.2),
      g = u.textAlign,
      x = [],
      w = [],
      E = [],
      m = t.wordDelimiter || " ",
      F = t.tag ? t.tag : t.span ? "span" : "div",
      k = t.type || t.split || "chars,words,lines",
      v = n && ~k.indexOf("lines") ? [] : null,
      b = ~k.indexOf("words"),
      A = ~k.indexOf("chars"),
      S = Fo(t),
      I = t.linesClass,
      P = ~(I || "").indexOf("++"),
      Y = [],
      $ = u.display === "flex",
      K = e.style.display,
      B,
      L,
      G,
      T,
      D,
      ie,
      ye,
      qe,
      ne,
      Z,
      Re,
      de;
    for (
      P && (I = I.split("++").join("")),
        $ && (e.style.display = "block"),
        L = e.getElementsByTagName("*"),
        G = L.length,
        D = [],
        B = 0;
      B < G;
      B++
    )
      D[B] = L[B];
    if (v || S)
      for (B = 0; B < G; B++)
        (T = D[B]),
          (ie = T.parentNode === e),
          (ie || S || (A && !b)) &&
            ((de = T.offsetTop),
            v &&
              ie &&
              Math.abs(de - c) > f &&
              (T.nodeName !== "BR" || B === 0) &&
              ((ye = []), v.push(ye), (c = de)),
            S &&
              ((T._x = T.offsetLeft),
              (T._y = de),
              (T._w = T.offsetWidth),
              (T._h = T.offsetHeight)),
            v &&
              (((T._isSplit && ie) ||
                (!A && ie) ||
                (b && ie) ||
                (!b &&
                  T.parentNode.parentNode === e &&
                  !T.parentNode._isSplit)) &&
                (ye.push(T), (T._x -= l), ua(T, e, m) && (T._wordEnd = !0)),
              T.nodeName === "BR" &&
                ((T.nextSibling && T.nextSibling.nodeName === "BR") ||
                  B === 0) &&
                v.push([])));
    for (B = 0; B < G; B++) {
      if (((T = D[B]), (ie = T.parentNode === e), T.nodeName === "BR")) {
        v || S
          ? (T.parentNode && T.parentNode.removeChild(T), D.splice(B--, 1), G--)
          : b || e.appendChild(T);
        continue;
      }
      if (
        (S &&
          ((ne = T.style),
          !b && !ie && ((T._x += T.parentNode._x), (T._y += T.parentNode._y)),
          (ne.left = T._x + "px"),
          (ne.top = T._y + "px"),
          (ne.position = "absolute"),
          (ne.display = "block"),
          (ne.width = T._w + 1 + "px"),
          (ne.height = T._h + "px")),
        !b && A)
      )
        if (T._isSplit)
          for (
            T._next = L = T.nextSibling, T.parentNode.appendChild(T);
            L && L.nodeType === 3 && L.textContent === " ";

          )
            (T._next = L.nextSibling),
              T.parentNode.appendChild(L),
              (L = L.nextSibling);
        else
          T.parentNode._isSplit
            ? ((T._parent = T.parentNode),
              !T.previousSibling &&
                T.firstChild &&
                (T.firstChild._isFirst = !0),
              T.nextSibling &&
                T.nextSibling.textContent === " " &&
                !T.nextSibling.nextSibling &&
                Y.push(T.nextSibling),
              (T._next =
                T.nextSibling && T.nextSibling._isFirst ? null : T.nextSibling),
              T.parentNode.removeChild(T),
              D.splice(B--, 1),
              G--)
            : ie ||
              ((de = !T.nextSibling && ua(T.parentNode, e, m)),
              T.parentNode._parent && T.parentNode._parent.appendChild(T),
              de && T.parentNode.appendChild(Ci.createTextNode(" ")),
              F === "span" && (T.style.display = "inline"),
              x.push(T));
      else
        T.parentNode._isSplit && !T._isSplit && T.innerHTML !== ""
          ? w.push(T)
          : A &&
            !T._isSplit &&
            (F === "span" && (T.style.display = "inline"), x.push(T));
    }
    for (B = Y.length; --B > -1; ) Y[B].parentNode.removeChild(Y[B]);
    if (v) {
      for (
        S &&
          ((Z = Ci.createElement(F)),
          e.appendChild(Z),
          (Re = Z.offsetWidth + "px"),
          (de = Z.offsetParent === e ? 0 : e.offsetLeft),
          e.removeChild(Z)),
          ne = e.style.cssText,
          e.style.cssText = "display:none;";
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (qe = m === " " && (!S || (!b && !A)), B = 0; B < v.length; B++) {
        for (
          ye = v[B],
            Z = Ci.createElement(F),
            Z.style.cssText =
              "display:block;text-align:" +
              g +
              ";position:" +
              (S ? "absolute;" : "relative;"),
            I && (Z.className = I + (P ? B + 1 : "")),
            E.push(Z),
            G = ye.length,
            L = 0;
          L < G;
          L++
        )
          ye[L].nodeName !== "BR" &&
            ((T = ye[L]),
            Z.appendChild(T),
            qe && T._wordEnd && Z.appendChild(Ci.createTextNode(" ")),
            S &&
              (L === 0 &&
                ((Z.style.top = T._y + "px"), (Z.style.left = l + de + "px")),
              (T.style.top = "0px"),
              de && (T.style.left = T._x - de + "px")));
        G === 0
          ? (Z.innerHTML = "&nbsp;")
          : !b && !A && (Pc(Z), Vu(Z, " ", " ")),
          S && ((Z.style.width = Re), (Z.style.height = T._h + "px")),
          e.appendChild(Z);
      }
      e.style.cssText = ne;
    }
    S &&
      (o > e.clientHeight &&
        ((e.style.height = o - h + "px"),
        e.clientHeight < o && (e.style.height = o + d + "px")),
      s > e.clientWidth &&
        ((e.style.width = s - _ + "px"),
        e.clientWidth < s && (e.style.width = s + p + "px"))),
      $ && (K ? (e.style.display = K) : e.style.removeProperty("display")),
      Ss(r, x),
      b && Ss(i, w),
      Ss(n, E);
  },
  Mc = function (e, t, r, i) {
    var n = t.tag ? t.tag : t.span ? "span" : "div",
      s = t.type || t.split || "chars,words,lines",
      o = ~s.indexOf("chars"),
      u = Fo(t),
      l = t.wordDelimiter || " ",
      c = function (S) {
        return S === l || (S === Ec && l === " ");
      },
      d = l !== " " ? "" : u ? "&#173; " : " ",
      p = "</" + n + ">",
      h = 1,
      _ = t.specialChars
        ? typeof t.specialChars == "function"
          ? t.specialChars
          : Ac
        : null,
      f,
      g,
      x,
      w,
      E,
      m,
      F,
      k,
      v = Ci.createElement("div"),
      b = e.parentNode;
    for (
      b.insertBefore(v, e),
        v.textContent = e.nodeValue,
        b.removeChild(e),
        e = v,
        f = zu(e),
        F = f.indexOf("<") !== -1,
        t.reduceWhiteSpace !== !1 && (f = f.replace(Tc, " ").replace(Sc, "")),
        F && (f = f.split("<").join("{{LT}}")),
        E = f.length,
        g = (f.charAt(0) === " " ? d : "") + r(),
        x = 0;
      x < E;
      x++
    )
      if (((m = f.charAt(x)), _ && (k = _(f.substr(x), t.specialChars))))
        (m = f.substr(x, k || 1)),
          (g += o && m !== " " ? i() + m + "</" + n + ">" : m),
          (x += k - 1);
      else if (c(m) && !c(f.charAt(x - 1)) && x) {
        for (g += h ? p : "", h = 0; c(f.charAt(x + 1)); ) (g += d), x++;
        x === E - 1
          ? (g += d)
          : f.charAt(x + 1) !== ")" && ((g += d + r()), (h = 1));
      } else
        m === "{" && f.substr(x, 6) === "{{LT}}"
          ? ((g += o ? i() + "{{LT}}</" + n + ">" : "{{LT}}"), (x += 5))
          : (m.charCodeAt(0) >= 55296 && m.charCodeAt(0) <= 56319) ||
            (f.charCodeAt(x + 1) >= 65024 && f.charCodeAt(x + 1) <= 65039)
          ? ((w = ((f.substr(x, 12).split(bc) || [])[1] || "").length || 2),
            (g +=
              o && m !== " "
                ? i() + f.substr(x, w) + "</" + n + ">"
                : f.substr(x, w)),
            (x += w - 1))
          : (g += o && m !== " " ? i() + m + "</" + n + ">" : m);
    (e.outerHTML = g + (h ? p : "")), F && Vu(b, "{{LT}}", "<");
  },
  Rc = function a(e, t, r, i) {
    var n = us(e.childNodes),
      s = n.length,
      o = Fo(t),
      u,
      l;
    if (e.nodeType !== 3 || s > 1) {
      for (t.absolute = !1, u = 0; u < s; u++)
        (l = n[u]),
          (l._next = l._isFirst = l._parent = l._wordEnd = null),
          (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) &&
            (o &&
              l.nodeType !== 3 &&
              qu(l).display === "inline" &&
              ((l.style.display = "inline-block"),
              (l.style.position = "relative")),
            (l._isSplit = !0),
            a(l, t, r, i));
      (t.absolute = o), (e._isSplit = !0);
      return;
    }
    Mc(e, t, r, i);
  },
  Qr = (function () {
    function a(t, r) {
      Iu || Yu(),
        (this.elements = us(t)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this._originals = []),
        (this.vars = r || {}),
        $u(this),
        this.split(r);
    }
    var e = a.prototype;
    return (
      (e.split = function (r) {
        this.isSplit && this.revert(),
          (this.vars = r = r || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var i = this.elements.length,
            n = r.tag ? r.tag : r.span ? "span" : "div",
            s = aa(r.wordsClass, n),
            o = aa(r.charsClass, n),
            u,
            l,
            c;
          --i > -1;

        )
          (c = this.elements[i]),
            (this._originals[i] = {
              html: c.innerHTML,
              style: c.getAttribute("style"),
            }),
            (u = c.clientHeight),
            (l = c.clientWidth),
            Rc(c, r, s, o),
            Oc(c, r, this.chars, this.words, this.lines, l, u);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (e.revert = function () {
        var r = this._originals;
        if (!r) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (i, n) {
            (i.innerHTML = r[n].html), i.setAttribute("style", r[n].style);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (a.create = function (r, i) {
        return new a(r, i);
      }),
      a
    );
  })();
Qr.version = "3.12.5";
Qr.register = Yu;
function Lc(a, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(a, r.key, r);
  }
}
function Bc(a, e, t) {
  return e && Lc(a.prototype, e), a;
}
/*!
 * ScrollSmoother 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ge,
  Ln,
  ft,
  wi,
  Ki,
  cr,
  Kr,
  la,
  re,
  dr,
  Bn,
  ca,
  fa,
  ha,
  da,
  Uu = function () {
    return typeof window < "u";
  },
  Xu = function () {
    return ge || (Uu() && (ge = window.gsap) && ge.registerPlugin && ge);
  },
  Nc = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  kr = function (e) {
    return re.maxScroll(e || ft);
  },
  zc = function (e, t) {
    var r = e.parentNode || Ki,
      i = e.getBoundingClientRect(),
      n = r.getBoundingClientRect(),
      s = n.top - i.top,
      o = n.bottom - i.bottom,
      u = (Math.abs(s) > Math.abs(o) ? s : o) / (1 - t),
      l = -u * t,
      c,
      d;
    return (
      u > 0 &&
        ((c = n.height / (ft.innerHeight + n.height)),
        (d =
          c === 0.5
            ? n.height * 2
            : Math.min(n.height, Math.abs((-u * c) / (2 * c - 1))) *
              2 *
              (t || 1)),
        (l += t ? -d * t : -d / 2),
        (u += d)),
      { change: u, offset: l }
    );
  },
  Ic = function (e) {
    var t = wi.querySelector(".ScrollSmoother-wrapper");
    return (
      t ||
        ((t = wi.createElement("div")),
        t.classList.add("ScrollSmoother-wrapper"),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
      t
    );
  },
  hi = (function () {
    function a(e) {
      var t = this;
      Ln ||
        a.register(ge) ||
        console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        (e = this.vars = e || {}),
        dr && dr.kill(),
        (dr = this),
        ha(this);
      var r = e,
        i = r.smoothTouch,
        n = r.onUpdate,
        s = r.onStop,
        o = r.smooth,
        u = r.onFocusIn,
        l = r.normalizeScroll,
        c = r.wholePixels,
        d,
        p,
        h,
        _,
        f,
        g,
        x,
        w,
        E,
        m,
        F,
        k,
        v,
        b,
        A = this,
        S = e.effectsPrefix || "",
        I = re.getScrollFunc(ft),
        P =
          re.isTouch === 1
            ? i === !0
              ? 0.8
              : parseFloat(i) || 0
            : o === 0 || o === !1
            ? 0
            : parseFloat(o) || 0.8,
        Y = (P && +e.speed) || 1,
        $ = 0,
        K = 0,
        B = 1,
        L = ca(0),
        G = function () {
          return L.update(-$);
        },
        T = { y: 0 },
        D = function () {
          return (d.style.overflow = "visible");
        },
        ie,
        ye = function (y) {
          y.update();
          var O = y.getTween();
          O && (O.pause(), (O._time = O._dur), (O._tTime = O._tDur)),
            (ie = !1),
            y.animation.progress(y.progress, !0);
        },
        qe = function (y, O) {
          ((y !== $ && !m) || O) &&
            (c && (y = Math.round(y)),
            P &&
              ((d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                y +
                ", 0, 1)"),
              (d._gsap.y = y + "px")),
            (K = y - $),
            ($ = y),
            re.isUpdating || a.isRefreshing || re.update());
        },
        ne = function (y) {
          return arguments.length
            ? (y < 0 && (y = 0),
              (T.y = -y),
              (ie = !0),
              m ? ($ = -y) : qe(-y),
              re.isRefreshing ? _.update() : I(y / Y),
              this)
            : -$;
        },
        Z =
          typeof ResizeObserver < "u" &&
          e.autoResize !== !1 &&
          new ResizeObserver(function () {
            if (!re.isRefreshing) {
              var M = kr(p) * Y;
              M < -$ && ne(M), da.restart(!0);
            }
          }),
        Re,
        de = function (y) {
          (p.scrollTop = 0),
            !(
              (y.target.contains && y.target.contains(p)) ||
              (u && u(t, y) === !1)
            ) &&
              (re.isInViewport(y.target) ||
                y.target === Re ||
                t.scrollTo(y.target, !1, "center center"),
              (Re = y.target));
        },
        We = function (y, O) {
          if (y < O.start) return y;
          var q = isNaN(O.ratio) ? 1 : O.ratio,
            H = O.end - O.start,
            J = y - O.start,
            se = O.offset || 0,
            Le = O.pins || [],
            te = Le.offset || 0,
            Ce =
              (O._startClamp && O.start <= 0) || (O.pins && O.pins.offset)
                ? 0
                : O._endClamp && O.end === kr()
                ? 1
                : 0.5;
          return (
            Le.forEach(function (_e) {
              (H -= _e.distance), _e.nativeStart <= y && (J -= _e.distance);
            }),
            te && (J *= (H - te / q) / H),
            y + (J - se * Ce) / q - J
          );
        },
        Ge = function M(y, O, q) {
          q || (y.pins.length = y.pins.offset = 0);
          var H = y.pins,
            J = y.markers,
            se,
            Le,
            te,
            Ce,
            _e,
            ae,
            Ve,
            z;
          for (Ve = 0; Ve < O.length; Ve++)
            if (
              ((z = O[Ve]),
              y.trigger &&
                z.trigger &&
                y !== z &&
                (z.trigger === y.trigger ||
                  z.pinnedContainer === y.trigger ||
                  y.trigger.contains(z.trigger)) &&
                ((_e = z._startNative || z._startClamp || z.start),
                (ae = z._endNative || z._endClamp || z.end),
                (te = We(_e, y)),
                (Ce = z.pin && ae > 0 ? te + (ae - _e) : We(ae, y)),
                z.setPositions(
                  te,
                  Ce,
                  !0,
                  (z._startClamp ? Math.max(0, te) : te) - _e
                ),
                z.markerStart &&
                  J.push(
                    ge.quickSetter([z.markerStart, z.markerEnd], "y", "px")
                  ),
                z.pin && z.end > 0 && !q))
            ) {
              if (
                ((se = z.end - z.start),
                (Le = y._startClamp && z.start < 0),
                Le)
              ) {
                if (y.start > 0) {
                  y.setPositions(0, y.end + (y._startNative - y.start), !0),
                    M(y, O);
                  return;
                }
                (se += z.start), (H.offset = -z.start);
              }
              H.push({
                start: z.start,
                nativeStart: _e,
                end: z.end,
                distance: se,
                trig: z,
              }),
                y.setPositions(y.start, y.end + (Le ? -z.start : se), !0);
            }
        },
        Zt = function (y, O) {
          f.forEach(function (q) {
            return Ge(q, y, O);
          });
        },
        je = function () {
          D(),
            requestAnimationFrame(D),
            f &&
              (re.getAll().forEach(function (y) {
                (y._startNative = y.start), (y._endNative = y.end);
              }),
              f.forEach(function (y) {
                var O = y._startClamp || y.start,
                  q = y.autoSpeed
                    ? Math.min(kr(), y.end)
                    : O + Math.abs((y.end - O) / y.ratio),
                  H = q - y.end;
                if (((O -= H / 2), (q -= H / 2), O > q)) {
                  var J = O;
                  (O = q), (q = J);
                }
                y._startClamp && O < 0
                  ? ((q = y.ratio < 0 ? kr() : y.end / y.ratio),
                    (H = q - y.end),
                    (O = 0))
                  : (y.ratio < 0 || (y._endClamp && q >= kr())) &&
                    ((q = kr()),
                    (O =
                      y.ratio < 0 || y.ratio > 1
                        ? 0
                        : q - (q - y.start) / y.ratio),
                    (H = (q - O) * y.ratio - (y.end - y.start))),
                  (y.offset = H || 1e-4),
                  (y.pins.length = y.pins.offset = 0),
                  y.setPositions(O, q, !0);
              }),
              Zt(re.sort())),
            L.reset();
        },
        gt = function () {
          return re.addEventListener("refresh", je);
        },
        pe = function () {
          return (
            f &&
            f.forEach(function (y) {
              return y.vars.onRefresh(y);
            })
          );
        },
        Te = function () {
          return (
            f &&
              f.forEach(function (y) {
                return y.vars.onRefreshInit(y);
              }),
            pe
          );
        },
        rt = function (y, O, q, H) {
          return function () {
            var J = typeof O == "function" ? O(q, H) : O;
            J ||
              J === 0 ||
              (J = H.getAttribute("data-" + S + y) || (y === "speed" ? 1 : 0)),
              H.setAttribute("data-" + S + y, J);
            var se = (J + "").substr(0, 6) === "clamp(";
            return { clamp: se, value: se ? J.substr(6, J.length - 7) : J };
          };
        },
        mt = function (y, O, q, H, J) {
          J = (typeof J == "function" ? J(H, y) : J) || 0;
          var se = rt("speed", O, H, y),
            Le = rt("lag", q, H, y),
            te = ge.getProperty(y, "y"),
            Ce = y._gsap,
            _e,
            ae,
            Ve,
            z,
            Ar,
            Mt,
            Rt = [],
            vr = function () {
              (O = se()),
                (q = parseFloat(Le().value)),
                (_e = parseFloat(O.value) || 1),
                (Ve = O.value === "auto"),
                (Ar =
                  Ve || (ae && ae._startClamp && ae.start <= 0) || Rt.offset
                    ? 0
                    : ae && ae._endClamp && ae.end === kr()
                    ? 1
                    : 0.5),
                z && z.kill(),
                (z =
                  q &&
                  ge.to(y, { ease: Bn, overwrite: !1, y: "+=0", duration: q })),
                ae && ((ae.ratio = _e), (ae.autoSpeed = Ve));
            },
            Xt = function () {
              (Ce.y = te + "px"), Ce.renderTransform(1), vr();
            },
            Jt = [],
            j = 0,
            sr = function (me) {
              if (Ve) {
                Xt();
                var Fe = zc(y, la(0, 1, -me.start / (me.end - me.start)));
                (j = Fe.change), (Mt = Fe.offset);
              } else
                (Mt = Rt.offset || 0),
                  (j = (me.end - me.start - Mt) * (1 - _e));
              Rt.forEach(function (Lt) {
                return (j -= Lt.distance * (1 - _e));
              }),
                (me.offset = j || 0.001),
                me.vars.onUpdate(me),
                z && z.progress(1);
            };
          return (
            vr(),
            (_e !== 1 || Ve || z) &&
              ((ae = re.create({
                trigger: Ve ? y.parentNode : y,
                start: function () {
                  return O.clamp
                    ? "clamp(top bottom+=" + J + ")"
                    : "top bottom+=" + J;
                },
                end: function () {
                  return O.value < 0
                    ? "max"
                    : O.clamp
                    ? "clamp(bottom top-=" + J + ")"
                    : "bottom top-=" + J;
                },
                scroller: p,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: Xt,
                onRefresh: sr,
                onKill: function (me) {
                  var Fe = f.indexOf(me);
                  Fe >= 0 && f.splice(Fe, 1), Xt();
                },
                onUpdate: function (me) {
                  var Fe = te + j * (me.progress - Ar),
                    Lt = Rt.length,
                    er = 0,
                    Ie,
                    tr,
                    W;
                  if (me.offset) {
                    if (Lt) {
                      for (tr = -$, W = me.end; Lt--; ) {
                        if (
                          ((Ie = Rt[Lt]),
                          Ie.trig.isActive || (tr >= Ie.start && tr <= Ie.end))
                        ) {
                          z &&
                            ((Ie.trig.progress +=
                              Ie.trig.direction < 0 ? 0.001 : -0.001),
                            Ie.trig.update(0, 0, 1),
                            z.resetTo("y", parseFloat(Ce.y), -K, !0),
                            B && z.progress(1));
                          return;
                        }
                        tr > Ie.end && (er += Ie.distance), (W -= Ie.distance);
                      }
                      Fe =
                        te +
                        er +
                        j *
                          ((ge.utils.clamp(me.start, me.end, tr) -
                            me.start -
                            er) /
                            (W - me.start) -
                            Ar);
                    }
                    Jt.length &&
                      !Ve &&
                      Jt.forEach(function (U) {
                        return U(Fe - er);
                      }),
                      (Fe = Nc(Fe + Mt)),
                      z
                        ? (z.resetTo("y", Fe, -K, !0), B && z.progress(1))
                        : ((Ce.y = Fe + "px"), Ce.renderTransform(1));
                  }
                },
              })),
              sr(ae),
              (ge.core.getCache(ae.trigger).stRevert = Te),
              (ae.startY = te),
              (ae.pins = Rt),
              (ae.markers = Jt),
              (ae.ratio = _e),
              (ae.autoSpeed = Ve),
              (y.style.willChange = "transform")),
            ae
          );
        };
      gt(),
        re.addEventListener("killAll", gt),
        ge.delayedCall(0.5, function () {
          return (B = 0);
        }),
        (this.scrollTop = ne),
        (this.scrollTo = function (M, y, O) {
          var q = ge.utils.clamp(
            0,
            kr(),
            isNaN(M) ? t.offset(M, O, !!y && !m) : +M
          );
          y
            ? m
              ? ge.to(t, {
                  duration: P,
                  scrollTop: q,
                  overwrite: "auto",
                  ease: Bn,
                })
              : I(q)
            : ne(q);
        }),
        (this.offset = function (M, y, O) {
          M = Kr(M)[0];
          var q = M.style.cssText,
            H = re.create({ trigger: M, start: y || "top top" }),
            J;
          return (
            f && (B ? re.refresh() : Zt([H], !0)),
            (J = H.start / (O ? Y : 1)),
            H.kill(!1),
            (M.style.cssText = q),
            (ge.core.getCache(M).uncache = 1),
            J
          );
        });
      function C() {
        return (
          (h = d.clientHeight),
          (d.style.overflow = "visible"),
          (cr.style.height = ft.innerHeight + (h - ft.innerHeight) / Y + "px"),
          h - ft.innerHeight
        );
      }
      (this.content = function (M) {
        if (arguments.length) {
          var y =
            Kr(M || "#smooth-content")[0] ||
            console.warn("ScrollSmoother needs a valid content element.") ||
            cr.children[0];
          return (
            y !== d &&
              ((d = y),
              (E = d.getAttribute("style") || ""),
              Z && Z.observe(d),
              ge.set(d, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0",
              }),
              P || ge.set(d, { clearProps: "transform" })),
            this
          );
        }
        return d;
      }),
        (this.wrapper = function (M) {
          return arguments.length
            ? ((p = Kr(M || "#smooth-wrapper")[0] || Ic(d)),
              (w = p.getAttribute("style") || ""),
              C(),
              ge.set(
                p,
                P
                  ? {
                      overflow: "hidden",
                      position: "fixed",
                      height: "100%",
                      width: "100%",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }
                  : {
                      overflow: "visible",
                      position: "relative",
                      width: "100%",
                      height: "auto",
                      top: "auto",
                      bottom: "auto",
                      left: "auto",
                      right: "auto",
                    }
              ),
              this)
            : p;
        }),
        (this.effects = function (M, y) {
          var O;
          if ((f || (f = []), !M)) return f.slice(0);
          (M = Kr(M)),
            M.forEach(function (_e) {
              for (var ae = f.length; ae--; )
                f[ae].trigger === _e && f[ae].kill();
            }),
            (y = y || {});
          var q = y,
            H = q.speed,
            J = q.lag,
            se = q.effectsPadding,
            Le = [],
            te,
            Ce;
          for (te = 0; te < M.length; te++)
            (Ce = mt(M[te], H, J, te, se)), Ce && Le.push(Ce);
          return (
            (O = f).push.apply(O, Le), y.refresh !== !1 && re.refresh(), Le
          );
        }),
        (this.sections = function (M, y) {
          var O;
          if ((g || (g = []), !M)) return g.slice(0);
          var q = Kr(M).map(function (H) {
            return re.create({
              trigger: H,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: function (se) {
                (H.style.opacity = se.isActive ? "1" : "0"),
                  (H.style.pointerEvents = se.isActive ? "all" : "none");
              },
            });
          });
          return y && y.add ? (O = g).push.apply(O, q) : (g = q.slice(0)), q;
        }),
        this.content(e.content),
        this.wrapper(e.wrapper),
        (this.render = function (M) {
          return qe(M || M === 0 ? M : $);
        }),
        (this.getVelocity = function () {
          return L.getVelocity(-$);
        }),
        re.scrollerProxy(p, {
          scrollTop: ne,
          scrollHeight: function () {
            return C() && cr.scrollHeight;
          },
          fixedMarkers: e.fixedMarkers !== !1 && !!P,
          content: d,
          getBoundingClientRect: function () {
            return {
              top: 0,
              left: 0,
              width: ft.innerWidth,
              height: ft.innerHeight,
            };
          },
        }),
        re.defaults({ scroller: p });
      var ot = re.getAll().filter(function (M) {
        return M.scroller === ft || M.scroller === p;
      });
      ot.forEach(function (M) {
        return M.revert(!0, !0);
      }),
        (_ = re.create({
          animation: ge.fromTo(
            T,
            {
              y: function () {
                return (b = 0), 0;
              },
            },
            {
              y: function () {
                return (b = 1), -C();
              },
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function () {
                if (b) {
                  var y = ie;
                  y && (ye(_), (T.y = $)), qe(T.y, y), G(), n && !m && n(A);
                }
              },
            }
          ),
          onRefreshInit: function (y) {
            if (!a.isRefreshing) {
              if (((a.isRefreshing = !0), f)) {
                var O = re.getAll().filter(function (H) {
                  return !!H.pin;
                });
                f.forEach(function (H) {
                  H.vars.pinnedContainer ||
                    O.forEach(function (J) {
                      if (J.pin.contains(H.trigger)) {
                        var se = H.vars;
                        (se.pinnedContainer = J.pin),
                          (H.vars = null),
                          H.init(se, H.animation);
                      }
                    });
                });
              }
              var q = y.getTween();
              (v = q && q._end > q._dp._time),
                (k = $),
                (T.y = 0),
                P &&
                  (re.isTouch === 1 && (p.style.position = "absolute"),
                  (p.scrollTop = 0),
                  re.isTouch === 1 && (p.style.position = "fixed"));
            }
          },
          onRefresh: function (y) {
            y.animation.invalidate(),
              y.setPositions(y.start, C() / Y),
              v || ye(y),
              (T.y = -I() * Y),
              qe(T.y),
              B ||
                (v && (ie = !1),
                y.animation.progress(ge.utils.clamp(0, 1, k / Y / -y.end))),
              v && ((y.progress -= 0.001), y.update()),
              (a.isRefreshing = !1);
          },
          id: "ScrollSmoother",
          scroller: ft,
          invalidateOnRefresh: !0,
          start: 0,
          refreshPriority: -9999,
          end: function () {
            return C() / Y;
          },
          onScrubComplete: function () {
            L.reset(), s && s(t);
          },
          scrub: P || !0,
        })),
        (this.smooth = function (M) {
          return (
            arguments.length &&
              ((P = M || 0), (Y = (P && +e.speed) || 1), _.scrubDuration(M)),
            _.getTween() ? _.getTween().duration() : 0
          );
        }),
        _.getTween() && (_.getTween().vars.ease = e.ease || Bn),
        (this.scrollTrigger = _),
        e.effects &&
          this.effects(
            e.effects === !0
              ? "[data-" + S + "speed], [data-" + S + "lag]"
              : e.effects,
            { effectsPadding: e.effectsPadding, refresh: !1 }
          ),
        e.sections &&
          this.sections(e.sections === !0 ? "[data-section]" : e.sections),
        ot.forEach(function (M) {
          (M.vars.scroller = p), M.revert(!1, !0), M.init(M.vars, M.animation);
        }),
        (this.paused = function (M, y) {
          return arguments.length
            ? (!!m !== M &&
                (M
                  ? (_.getTween() && _.getTween().pause(),
                    I(-$ / Y),
                    L.reset(),
                    (F = re.normalizeScroll()),
                    F && F.disable(),
                    (m = re.observe({
                      preventDefault: !0,
                      type: "wheel,touch,scroll",
                      debounce: !1,
                      allowClicks: !0,
                      onChangeY: function () {
                        return ne(-$);
                      },
                    })),
                    (m.nested = fa(Ki, "wheel,touch,scroll", !0, y !== !1)))
                  : (m.nested.kill(),
                    m.kill(),
                    (m = 0),
                    F && F.enable(),
                    (_.progress = (-$ / Y - _.start) / (_.end - _.start)),
                    ye(_))),
              this)
            : !!m;
        }),
        (this.kill = this.revert =
          function () {
            t.paused(!1), ye(_), _.kill();
            for (var M = (f || []).concat(g || []), y = M.length; y--; )
              M[y].kill();
            re.scrollerProxy(p),
              re.removeEventListener("killAll", gt),
              re.removeEventListener("refresh", je),
              (p.style.cssText = w),
              (d.style.cssText = E);
            var O = re.defaults({});
            O && O.scroller === p && re.defaults({ scroller: ft }),
              t.normalizer && re.normalizeScroll(!1),
              clearInterval(x),
              (dr = null),
              Z && Z.disconnect(),
              cr.style.removeProperty("height"),
              ft.removeEventListener("focusin", de);
          }),
        (this.refresh = function (M, y) {
          return _.refresh(M, y);
        }),
        l &&
          (this.normalizer = re.normalizeScroll(
            l === !0 ? { debounce: !0, content: !P && d } : l
          )),
        re.config(e),
        "overscrollBehavior" in ft.getComputedStyle(cr) &&
          ge.set([cr, Ki], { overscrollBehavior: "none" }),
        "scrollBehavior" in ft.getComputedStyle(cr) &&
          ge.set([cr, Ki], { scrollBehavior: "auto" }),
        ft.addEventListener("focusin", de),
        (x = setInterval(G, 250)),
        wi.readyState === "loading" ||
          requestAnimationFrame(function () {
            return re.refresh();
          });
    }
    return (
      (a.register = function (t) {
        return (
          Ln ||
            ((ge = t || Xu()),
            Uu() &&
              window.document &&
              ((ft = window),
              (wi = document),
              (Ki = wi.documentElement),
              (cr = wi.body)),
            ge &&
              ((Kr = ge.utils.toArray),
              (la = ge.utils.clamp),
              (Bn = ge.parseEase("expo")),
              (ha = ge.core.context || function () {}),
              (re = ge.core.globals().ScrollTrigger),
              ge.core.globals("ScrollSmoother", a),
              cr &&
                re &&
                ((da = ge
                  .delayedCall(0.2, function () {
                    return re.isRefreshing || (dr && dr.refresh());
                  })
                  .pause()),
                (ca = re.core._getVelocityProp),
                (fa = re.core._inputObserver),
                (a.refresh = re.refresh),
                (Ln = 1)))),
          Ln
        );
      }),
      Bc(a, [
        {
          key: "progress",
          get: function () {
            return this.scrollTrigger
              ? this.scrollTrigger.animation._time / 100
              : 0;
          },
        },
      ]),
      a
    );
  })();
hi.version = "3.12.5";
hi.create = function (a) {
  return dr && a && dr.content() === Kr(a.content)[0] ? dr : new hi(a);
};
hi.get = function () {
  return dr;
};
Xu() && ge.registerPlugin(hi);
class $c {
  constructor() {
    V.registerPlugin(le, hi);
  }
  create() {}
  smoothScroll() {
    this.scrollEl = hi.create({ smooth: 1, effects: !0, smoothTouch: 0.1 });
  }
}
const Hu = (a, e, t, r) =>
    Array.from({ length: r }, (i, n) => ({
      type: "image",
      name: `image${n + 1}`,
      path: `${a}/${e}(${n + 1}).${t}`,
    })),
  Yc = Hu("../assets/images-sequence/final", "SuperFile_", "jpg", 526),
  qc = Hu("../assets/images-sequence/mobile", "SuperFile_", "jpg", 530);
class bo {
  constructor() {
    (this.callbacks = {}), (this.callbacks.base = {});
  }
  on(e, t) {
    return typeof e > "u" || e === ""
      ? (console.warn("wrong names"), !1)
      : typeof t > "u"
      ? (console.warn("wrong callback"), !1)
      : (this.resolveNames(e).forEach((i) => {
          const n = this.resolveName(i);
          this.callbacks[n.namespace] instanceof Object ||
            (this.callbacks[n.namespace] = {}),
            this.callbacks[n.namespace][n.value] instanceof Array ||
              (this.callbacks[n.namespace][n.value] = []),
            this.callbacks[n.namespace][n.value].push(t);
        }),
        this);
  }
  off(e) {
    return typeof e > "u" || e === ""
      ? (console.warn("wrong name"), !1)
      : (this.resolveNames(e).forEach((r) => {
          const i = this.resolveName(r);
          if (i.namespace !== "base" && i.value === "")
            delete this.callbacks[i.namespace];
          else if (i.namespace === "base")
            for (const n in this.callbacks)
              this.callbacks[n] instanceof Object &&
                this.callbacks[n][i.value] instanceof Array &&
                (delete this.callbacks[n][i.value],
                Object.keys(this.callbacks[n]).length === 0 &&
                  delete this.callbacks[n]);
          else
            this.callbacks[i.namespace] instanceof Object &&
              this.callbacks[i.namespace][i.value] instanceof Array &&
              (delete this.callbacks[i.namespace][i.value],
              Object.keys(this.callbacks[i.namespace]).length === 0 &&
                delete this.callbacks[i.namespace]);
        }),
        this);
  }
  trigger(e, t) {
    if (typeof e > "u" || e === "") return console.warn("wrong name"), !1;
    let r = null;
    const i = t instanceof Array ? t : [];
    let n = this.resolveNames(e);
    if (((n = this.resolveName(n[0])), n.namespace === "base"))
      for (const s in this.callbacks)
        this.callbacks[s] instanceof Object &&
          this.callbacks[s][n.value] instanceof Array &&
          this.callbacks[s][n.value].forEach(function (o) {
            o.apply(this, i);
          });
    else if (this.callbacks[n.namespace] instanceof Object) {
      if (n.value === "") return console.warn("wrong name"), this;
      this.callbacks[n.namespace][n.value].forEach(function (s) {
        s.apply(this, i);
      });
    }
    return r;
  }
  resolveNames(e) {
    let t = e;
    return (
      (t = t.replace(/[^a-zA-Z0-9 ,/.]/g, "")),
      (t = t.replace(/[,/]+/g, " ")),
      (t = t.split(" ")),
      t
    );
  }
  resolveName(e) {
    const t = {},
      r = e.split(".");
    return (
      (t.original = e),
      (t.value = r[0]),
      (t.namespace = "base"),
      r.length > 1 && r[1] !== "" && (t.namespace = r[1]),
      t
    );
  }
}
class Vc extends bo {
  constructor(e) {
    super(),
      (this.sources = e),
      (this.items = {}),
      (this.toLoad = this.sources.length),
      (this.loaded = 0),
      this.startLoading();
  }
  startLoading() {
    for (const e of this.sources) {
      const t = new Image();
      (t.src = e.path),
        (t.onload = () => {
          this.assetLoaded(e, t, "image");
        }),
        (t.onerror = (r) => {
          console.error(`Error loading ${e.path}:`, r);
        });
    }
  }
  assetLoaded(e, t, r) {
    r === "image" && (this.items[e.name] = t), this.loaded++;
    const i = this.loaded / this.toLoad;
    this.trigger("progress", [i]),
      this.loaded === this.toLoad && this.trigger("ready");
  }
}
class Uc extends bo {
  constructor(e) {
    super(),
      (this.resources = e.resources),
      this.init(),
      this.resources.on("progress", (t) => {
        this.update(t);
      }),
      Promise.all([this.getData(), this.getGlobalData()]).then(() =>
        this.trigger("allDataLoaded")
      );
  }
  init() {
    (document.querySelector("body").style.overflow = "hidden"),
      (document.querySelector("body").style.opacity = 1),
      (this.percentText = document.querySelector(".preloader__text span")),
      (this.loadingText = document.querySelector(".preloader__text p")),
      (this.canvas = document.querySelector("#canvas")),
      (this.preloaderLogo = document.querySelector(".preloader__logo svg ")),
      (this.circleFill = document.querySelector(".fill-circle")),
      (this.circle = document.querySelector(".circle-path")),
      (this.circleLength = 2 * Math.PI * this.circle.getAttribute("r")),
      V.set(this.circle, {
        strokeDasharray: this.circleLength,
        strokeDashoffset: this.circleLength,
      });
  }
  async getGlobalData() {
    try {
      let r = await (
        await fetch(
          "https://admin.SuperFile.com/api/global?populate[defaultSeo][populate]=*&populate[topNavigation][populate]=*",
          { method: "GET", headers: { Accept: "application/json" } }
        )
      ).json();
      (document.title = `${r.data.defaultSeo.metaTitle}`),
        document
          .querySelector('meta[name="description"]')
          .setAttribute("content", r.data.defaultSeo.metaDescription);
      const i = document.querySelector(".header-logo");
      i.href = `${r.data.topNavigation.logoTitle.href}`;
      const n = document.querySelector(".header-nav");
      r.data.topNavigation.navItems.forEach((u) => {
        const l = document.createElement("li"),
          c = document.createElement("a");
        (c.textContent = u.label),
          (c.href = u.href),
          l.appendChild(c),
          n.appendChild(l);
      });
      const s = document.querySelector(".header-cta"),
        o = document.querySelector(".header-cta p");
      return (
        (s.href = `${r.data.topNavigation.cta.href}`),
        (o.textContent = `${r.data.topNavigation.cta.label}`),
        this.trigger("homeDataLoaded", [r]),
        this.checkAllDataLoaded(),
        r
      );
    } catch (e) {
      console.log(e);
    }
  }
  async getData() {
    try {
      let r = await (
        await fetch(
          "https://admin.SuperFile.com/api/home-page?populate[blocks][on][blocks.intro][populate]=*&populate[blocks][on][blocks.vortex][populate]=*&populate[newsletter_form][populate]=*",
          { method: "GET", headers: { Accept: "application/json" } }
        )
      ).json();
      const i = document.querySelector(".intro"),
        n = document.querySelector(".two"),
        s = document.querySelector(".intro-subheading"),
        o = document.querySelector(".intro-description");
      (s.textContent = `${r.data.blocks[0].subHeading}`),
        (o.textContent = `${r.data.blocks[0].description}`),
        setTimeout(() => {
          i.classList.remove("hidden"), n.classList.remove("hidden");
        }, 1500);
      const u = document.querySelector(".vortex"),
        l = document.querySelector(".vortex-main"),
        c = document.querySelector(".vortex-one-title"),
        d = document.querySelector(".vortex-one-description"),
        p = document.querySelector(".vortex-two-title"),
        h = document.querySelector(".vortex-two-description"),
        _ = document.querySelector(".vortex-three-title"),
        f = document.querySelector(".vortex-three-description");
      (l.innerHTML = `${r.data.blocks[1].title}`),
        (c.innerHTML = `${r.data.blocks[2].title}`),
        (d.textContent = `${r.data.blocks[2].description}`),
        (p.innerHTML = `${r.data.blocks[3].title}`),
        (h.textContent = `${r.data.blocks[3].description}`),
        (_.innerHTML = `${r.data.blocks[4].title}`),
        (f.textContent = `${r.data.blocks[4].description}`),
        setTimeout(() => {
          u.classList.remove("hidden");
        }, 500);
      const g = document.querySelector(".cta-label");
      g.textContent = `${r.data.cta_label}`;
      const x = document.querySelector(".outro"),
        w = document.querySelector(".outro-title"),
        E = document.querySelector(".outro-description"),
        m = document.querySelector(".outro-btn-label");
      return (
        (w.innerHTML = `${r.data.newsletter_form.title}`),
        (E.textContent = `${r.data.newsletter_form.description}`),
        (m.textContent = `${r.data.newsletter_form.button_label}`),
        x.classList.remove("hidden"),
        this.trigger("globalDataLoaded", [r]),
        this.checkAllDataLoaded(),
        r
      );
    } catch (e) {
      console.log(e);
    }
  }
  checkAllDataLoaded() {
    this.dataLoadedCount++,
      this.dataLoadedCount === 2 && this.trigger("allDataLoaded");
  }
  update(e) {
    const t = Math.floor(e * 100);
    V.to(this.circle, {
      strokeDashoffset: this.circleLength * (1 - e),
      ease: "linear",
    }),
      V.to(this.circleFill, { scale: e, ease: "expo.out" }),
      (this.percentText.textContent = `${t} %`);
  }
  outro() {
    (this.outroTl = V.timeline({
      delay: 1,
      onComplete: () => {
        document.querySelector(".preloader").remove();
      },
    })),
      this.outroTl.to(
        this.circle,
        { strokeDashoffset: -this.circleLength, duration: 0.3, ease: "linear" },
        "<"
      ),
      this.outroTl.to(
        this.percentText,
        { autoAlpha: 0, ease: "expo.out", duration: 0.3 },
        "<"
      ),
      this.outroTl.to(
        this.loadingText,
        { autoAlpha: 0, yPercent: 25, ease: "expo.out", duration: 0.3 },
        "<"
      ),
      this.outroTl.to(this.preloaderLogo, { autoAlpha: 0, duration: 0.3 }, "<"),
      this.outroTl.to(
        this.circleFill,
        { scale: "20", duration: 1.5, ease: "expo.out" },
        "<.2"
      ),
      this.outroTl.to(
        this.canvas,
        { clipPath: "circle(100%)", duration: 2.5, ease: "expo.out" },
        "<.3"
      );
  }
}
class Xc {
  constructor(e) {
    (this.resources = e),
      (this.canvas = document.createElement("canvas")),
      (this.context = this.canvas.getContext("2d")),
      (this.images = []),
      (this.currentFrame = 0),
      (this.startFrame = 0),
      (this.isLoading = !0),
      (this.totalFrames = 526),
      this.initialize();
  }
  initialize() {
    (this.canvas = document.querySelector("#canvas")),
      (this.context = this.canvas.getContext("2d")),
      this.setupContext(),
      this.resize(),
      this.loadImagesFromResources();
  }
  setupContext() {
    (this.context.imageSmoothingEnabled = !0),
      (this.context.imageSmoothingQuality = "high");
  }
  loadImagesFromResources() {
    for (let e = 1; e <= this.totalFrames; e++) {
      const t = `image${e}`;
      this.resources[t] && this.images.push(this.resources[t]);
    }
    this.images.length === this.totalFrames
      ? ((this.isLoading = !1), this.render(this.startFrame))
      : console.error("Mismatch in total frames and loaded resources");
  }
  calculateCoverDimensions(e, t, r, i) {
    const n = e / t,
      s = r / i;
    let o,
      u,
      l = 0,
      c = 0;
    return (
      s > n
        ? ((o = r), (u = r / n), (c = (i - u) / 2))
        : ((u = i), (o = i * n), (l = (r - o) / 2)),
      { renderWidth: o, renderHeight: u, offsetX: l, offsetY: c }
    );
  }
  render(e) {
    if (this.isLoading || !this.images[e]) return;
    const t = this.images[e],
      {
        renderWidth: r,
        renderHeight: i,
        offsetX: n,
        offsetY: s,
      } = this.calculateCoverDimensions(
        t.naturalWidth,
        t.naturalHeight,
        this.canvas.width / (window.devicePixelRatio || 1),
        this.canvas.height / (window.devicePixelRatio || 1)
      );
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
      this.context.drawImage(t, n, s, r, i);
  }
  updateFrame(e) {
    const t = this.totalFrames - this.startFrame,
      r = this.startFrame + Math.min(Math.floor(e * t), t);
    this.render(r);
  }
  resize() {
    const e = window.devicePixelRatio || 1,
      t = window.innerWidth * e,
      r = window.innerHeight * e;
    (this.canvas.width = t),
      (this.canvas.height = r),
      this.context.scale(e, e),
      this.isLoading || this.render(this.currentFrame);
  }
}
class Hc extends bo {
  constructor() {
    super(),
      (this.width = window.innerWidth),
      (this.height = window.innerHeight),
      (this.pixelRatio = Math.min(window.devicePixelRatio, 2)),
      window.addEventListener("resize", () => {
        (this.width = window.innerWidth),
          (this.height = window.innerHeight),
          (this.pixelRatio = Math.min(window.devicePixelRatio, 2)),
          this.trigger("resize");
      });
  }
}
class Wc {
  constructor() {
    this.sizes = new Hc();
    const t = window.innerWidth <= 1080 ? qc : Yc;
    (this.resources = new Vc(t)),
      (this.preloader = new Uc(this)),
      this.sizes.on("resize", () => {
        this.resize();
      }),
      this.resources.on("ready", () => {
        this.preloader.outro(), (this.images = new Xc(this.resources.items));
      });
  }
  resize() {
    this.images && this.images.resize();
  }
}
class Gc extends $c {
  constructor() {
    super(),
      (this.experience = new Wc()),
      (this.images = null),
      (this.firstSectionLoop = null),
      (this.firstSectionFrames = { start: 56, end: 104 }),
      (this.secondSectionLoop = null),
      (this.secondSectionFrames = { start: 248, end: 296 }),
      (this.currentSection = 0),
      (this.totalSections = 6),
      (this.introComplete = !1),
      (this.loopAnimation = null),
      (this.isInVortex = !1),
      (this.isLeavingVortexAnimation = !1),
      (this.scrollIndicator = document.querySelector(".scroll-indicator")),
      this.updateProgressCircle(0),
      this.waitForImages(),
      V.registerPlugin(le, Qr),
      (this.preloader = this.experience.preloader),
      (this.dataAndImagesLoaded = !1),
      (this.sectionMapping = {
        1: "Intro",
        2: "SuperFile",
        3: "Trackable",
        4: "Unhackable",
        5: "Takebackable",
        6: "Launch App",
      }),
      Promise.all([
        new Promise((e) => {
          this.preloader.on("allDataLoaded", () => {
            this.initSplitText(), e();
          });
        }),
        this.waitForImages(),
      ]).then(() => {
        (this.dataAndImagesLoaded = !0), this.create();
      }),
      this.postData();
  }
  initSplitText() {
    (this.splitText = new Qr(".text-spilt", {
      type: "chars words",
      charsClass: "chars",
      wordsClass: "word",
    })),
      (this.splitText1 = new Qr(".text-spilt-1", {
        type: "chars words",
        charsClass: "chars",
        wordsClass: "word",
      })),
      (this.splitText2 = new Qr(".text-spilt-2", {
        type: "chars words",
        charsClass: "chars",
        wordsClass: "word",
      })),
      (this.splitText3 = new Qr(".text-spilt-3", {
        type: "chars words",
        charsClass: "chars",
        wordsClass: "word",
      }));
  }
  setupScroll() {
    let e = !1,
      t = Date.now(),
      r,
      i = 0,
      n = 0,
      s = null,
      o = null;
    const u = 800,
      l = 50,
      c = 300,
      d = () => {
        r && clearTimeout(r), o && cancelAnimationFrame(o), s && s.kill();
      },
      p = (b) => {
        document.querySelectorAll(".pagination p").forEach((S, I) => {
          let P = this.sectionMapping[b],
            Y = S.textContent.trim() === P,
            $ = I - (b - 1),
            K = $ * -40,
            B = $ * 35,
            L = 1 - Math.abs($) * 0.1;
          Y
            ? (S.classList.add("active"),
              (S.style.transform = "translateY(0px) rotateX(0deg) scale(1)"),
              (S.style.opacity = 1))
            : (S.classList.remove("active"),
              (S.style.transform = `translateY(${B}px) rotateX(${K}deg) scale(${L})`),
              (S.style.opacity = 0.25));
        });
      },
      h = (b) => (
        d(),
        (e = !0),
        this.updateProgressCircle(b),
        p(b),
        (s = new Promise((A) => {
          this.animateToSection(b, () => {
            r = setTimeout(() => {
              (e = !1), (this.currentSection = b), (s = null), A();
            }, c);
          });
        })),
        s
      );
    let _ = !1;
    this.scrollIndicator.addEventListener("click", () => {
      _ ||
        ((_ = !0),
        h(this.currentSection + 1).then(() => {
          _ = !1;
        }));
    });
    const f = (b) => {
        var I, P;
        if (
          this.isLeavingVortexAnimation ||
          !this.introComplete ||
          e ||
          ((I = this.vortexState) != null && I.isTransitioning) ||
          ((P = this.vortexState) != null && P.isEntering)
        )
          return !1;
        const A = Date.now();
        if (A - t < u) return !1;
        const S = Math.max(
          0,
          Math.min(this.currentSection + b, this.totalSections)
        );
        return S === this.currentSection ? !1 : ((t = A), h(S), !0);
      },
      g = (b) => {
        o = requestAnimationFrame(() => {
          f(b.deltaY > 0 ? 1 : -1) && b.preventDefault();
        });
      },
      x = (b) => {
        (i = b.touches[0].clientY), (n = b.touches[0].clientX);
      },
      w = (b) => {
        if (!i || !n) return;
        const A = b.touches[0].clientY;
        b.touches[0].clientX;
        const S = i - A,
          I = Math.abs(n - b.touches[0].clientX);
        Math.abs(S) <= l ||
          Math.abs(S) <= I ||
          (o = requestAnimationFrame(() => {
            f(S > 0 ? 1 : -1) && (b.preventDefault(), (i = null), (n = null));
          }));
      },
      E = () => {
        (i = null), (n = null);
      };
    window.addEventListener("wheel", g, { passive: !1 }),
      window.addEventListener("touchstart", x, { passive: !0 }),
      window.addEventListener("touchmove", w, { passive: !1 }),
      window.addEventListener("touchend", E, { passive: !0 });
    const m = document.querySelector(".arrow-next"),
      F = document.querySelector(".arrow-prev"),
      k = () => {
        f(1);
      },
      v = () => {
        f(-1);
      };
    m.addEventListener("click", k),
      F.addEventListener("click", v),
      (this.cleanupScroll = () => {
        d(),
          window.removeEventListener("wheel", g),
          window.removeEventListener("touchstart", x),
          window.removeEventListener("touchmove", w),
          window.removeEventListener("touchend", E),
          m.removeEventListener("click", k),
          F.removeEventListener("click", v);
      });
  }
  animateToSection(e, t) {
    const r = {
        0: { start: 0, end: 56 },
        1: { start: 57, end: 248 },
        2: { start: 249, end: 380 },
        3: { start: 380, end: 380 },
        4: { start: 380, end: 380 },
        5: { start: 380, end: 380 },
        6: { start: 380, end: 525 },
      },
      { start: i, end: n } = r[e],
      s = e === 2 && this.currentSection < 2,
      o = e === 6,
      u = this.currentSection === 6 && e === 5,
      l = e >= 2 && e <= 5,
      c = V.timeline({
        onComplete: () => {
          t && t();
        },
      });
    if (o) {
      this.stopLoopAnimation(),
        V.to(".arrow-next", {
          autoAlpha: 0.5,
          duration: 0.5,
          pointerEvents: "none",
          ease: "power2.out",
        }),
        (this.vortexState = {
          isTransitioning: !0,
          isLeaving: !0,
          animationComplete: !1,
        }),
        V.to(".scroll-indicator", {
          rotate: 180,
          duration: 1,
          ease: "power2.out",
        });
      const d = V.timeline({
        onComplete: () => {
          t && t();
        },
      });
      d.to(".six h2, .six p", {
        opacity: 0,
        scale: 1.4,
        filter: "blur(10px)",
        duration: 1,
        ease: "power2.out",
      }),
        d.set(".take-action", { display: "flex" }, 2),
        d.to(".take-action", {
          opacity: "1",
          y: 0,
          duration: 1,
          ease: "expo.out",
        }),
        V.to(this.images, {
          currentFrame: 525,
          duration: 3,
          ease: "power2.inOut",
          onUpdate: () => {
            this.vortexState.isTransitioning &&
              this.images.updateFrame(
                this.images.currentFrame / this.images.totalFrames
              );
          },
          onComplete: () => {
            this.vortexState.isTransitioning &&
              ((this.vortexState.animationComplete = !0),
              (this.vortexState.isLeaving = !1),
              (this.vortexState.isTransitioning = !1),
              (this.isInVortex = !1),
              this.loopAnimation && this.stopLoopAnimation());
          },
        });
      return;
    }
    if (u) {
      V.to(".arrow-next", {
        pointerEvents: "all",
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
      }),
        (this.vortexState = {
          isTransitioning: !0,
          isReturning: !0,
          animationComplete: !1,
        }),
        V.to(".scroll-indicator", {
          rotate: 0,
          duration: 1,
          ease: "power2.out",
        });
      const d = V.timeline({
        onComplete: () => {
          t && t();
        },
      });
      d.to(".take-action", {
        opacity: "0",
        y: "-20px",
        duration: 1,
        ease: "expo.out",
      }),
        d.set(".take-action", { display: "none" }),
        d
          .to(
            ".six h2",
            {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "expo.out",
              startAt: { scale: 0.5, filter: "blur(5px)" },
            },
            1
          )
          .to(
            ".six p",
            {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "expo.out",
              startAt: { scale: 0.5, filter: "blur(5px)" },
            },
            "<+=0.2"
          ),
        V.to(this.images, {
          currentFrame: 380,
          duration: 2,
          ease: "power2.inOut",
          onUpdate: () => {
            if (!this.vortexState.isTransitioning) return;
            const p = this.images.currentFrame / this.images.totalFrames;
            this.images.updateFrame(p);
          },
          onComplete: () => {
            this.vortexState.isTransitioning &&
              ((this.vortexState.animationComplete = !0),
              (this.vortexState.isReturning = !1),
              (this.vortexState.isTransitioning = !1),
              (this.isInVortex = !0),
              this.startLoopAnimation());
          },
        });
      return;
    }
    e === 0
      ? (this.stopLoopAnimation(),
        this.animateIntroSection(c),
        this.animateFrames(n),
        this.secondSectionLoop && this.stopSecondSectionLoop())
      : e === 1
      ? (this.firstSectionLoop && this.stopFirstSectionLoop(),
        this.stopLoopAnimation(),
        this.animateSecondSection(c),
        this.animateFrames(n))
      : s
      ? (this.secondSectionLoop && this.stopSecondSectionLoop(),
        this.animateEnterVortex(c, t))
      : o
      ? this.animateLeaveVortex(c, t)
      : l && this.handleVortexSectionTransition(e, c);
  }
  animateLeaveVortex(e, t) {
    this.stopLoopAnimation(),
      e
        .to(this.splitText3.chars, {
          y: "105%",
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.003,
        })
        .to(
          ".four h2, .four p, .five h2, .five p, .six h2, .six p",
          { opacity: 0, scale: 0, duration: 0.5, ease: "power2.out" },
          0
        )
        .to(
          this.splitText2.chars,
          { y: 0, duration: 1.3, ease: "power2.out", stagger: 0.01 },
          1
        ),
      V.to(this.images, {
        currentFrame: 248,
        duration: 2,
        ease: "linear",
        onUpdate: () => {
          const r = this.images.currentFrame / this.images.totalFrames;
          this.images.updateFrame(r);
        },
        onComplete: () => {
          (this.isInVortex = !1), t && t();
        },
      });
  }
  handleVortexSectionTransition(e, t) {
    const r = this.currentSection > e;
    this.loopAnimation || this.startLoopAnimation();
    const i = 1.5,
      n = 1,
      s = "power3.out",
      o = 0.5,
      u = 1.2,
      l = 1;
    e === 2
      ? t
          .to(
            this.splitText3.chars,
            { y: 0, autoAlpha: 1, duration: 1, ease: s, stagger: 0.01 },
            1
          )
          .to(
            ".four h2, .four p, .five h2, .five p",
            { opacity: 0, scale: u, duration: n, ease: s },
            0
          )
      : e === 3
      ? r
        ? t
            .to(".five h2, .five p", {
              opacity: 0,
              scale: u,
              filter: "blur(10px)",
              duration: n,
              ease: s,
            })
            .to(
              ".four h2",
              {
                opacity: 1,
                scale: l,
                duration: i,
                filter: "blur(0px)",
                ease: "expo.out",
                startAt: { scale: u, filter: "blur(5px)" },
              },
              ">"
            )
            .to(
              ".four p",
              {
                opacity: 1,
                scale: l,
                duration: i,
                filter: "blur(0px)",
                ease: "expo.out",
                startAt: { scale: u, filter: "blur(5px)" },
              },
              "<+=0.2"
            )
        : t
            .to(this.splitText3.chars, {
              y: "-105%",
              autoAlpha: 0,
              duration: 1,
              ease: s,
              stagger: 0.003,
            })
            .set(".four h2, .four p", {
              opacity: 0,
              scale: o,
              transformOrigin: "center center",
              filter: "blur(10px)",
            })
            .to(
              ".four h2",
              {
                opacity: 1,
                scale: l,
                duration: i,
                filter: "blur(0px)",
                ease: "expo.out",
              },
              ">"
            )
            .to(
              ".four p",
              {
                opacity: 1,
                scale: l,
                duration: i,
                filter: "blur(0px)",
                ease: "expo.out",
              },
              "<+=0.2"
            )
      : e === 4
      ? r
        ? t
            .to(".six h2, .six p", {
              opacity: 0,
              scale: u,
              filter: "blur(10px)",
              duration: n,
              ease: s,
            })
            .to(
              ".five h2",
              {
                opacity: 1,
                scale: l,
                duration: i,
                filter: "blur(0px)",
                ease: "expo.out",
                startAt: { scale: u, filter: "blur(5px)" },
              },
              ">"
            )
            .to(
              ".five p",
              {
                opacity: 1,
                scale: l,
                duration: i,
                filter: "blur(0px)",
                ease: "expo.out",
                startAt: { scale: u, filter: "blur(5px)" },
              },
              "<+=0.2"
            )
        : t
            .to(".four h2, .four p", {
              opacity: 0,
              scale: u,
              filter: "blur(10px)",
              duration: n,
              ease: s,
            })
            .set(".five h2, .five p", {
              opacity: 0,
              scale: o,
              transformOrigin: "center center",
              filter: "blur(10px)",
            })
            .to(
              ".five h2",
              {
                opacity: 1,
                scale: l,
                duration: i,
                filter: "blur(0px)",
                ease: "expo.out",
              },
              ">"
            )
            .to(
              ".five p",
              {
                opacity: 1,
                scale: l,
                duration: i,
                filter: "blur(0px)",
                ease: "expo.out",
              },
              "<+=0.2"
            )
      : e === 5 &&
        (r
          ? t
              .to(".six h2, .six p", {
                opacity: 0,
                scale: u,
                filter: "blur(10px)",
                duration: n,
                ease: s,
              })
              .to(
                ".five h2",
                {
                  opacity: 1,
                  scale: l,
                  duration: i,
                  filter: "blur(0px)",
                  ease: "expo.out",
                  startAt: { scale: u, filter: "blur(5px)" },
                },
                ">"
              )
              .to(
                ".five p",
                {
                  opacity: 1,
                  scale: l,
                  duration: i,
                  filter: "blur(0px)",
                  ease: "expo.out",
                  startAt: { scale: u, filter: "blur(5px)" },
                },
                "<+=0.2"
              )
          : t
              .to(".five h2, .five p", {
                opacity: 0,
                scale: u,
                filter: "blur(10px)",
                duration: n,
                ease: s,
              })
              .set(".six h2, .six p", {
                opacity: 0,
                scale: o,
                transformOrigin: "center center",
                filter: "blur(10px)",
              })
              .to(
                ".six h2",
                {
                  opacity: 1,
                  scale: l,
                  duration: i,
                  filter: "blur(0px)",
                  ease: "expo.out",
                },
                ">"
              )
              .to(
                ".six p",
                {
                  opacity: 1,
                  scale: l,
                  duration: i,
                  filter: "blur(0px)",
                  ease: "expo.out",
                },
                "<+=0.2"
              ));
  }
  animateFrames(e) {
    V.to(this.images, {
      currentFrame: e,
      duration: 4.5,
      ease: "linear",
      onUpdate: () => {
        this.images.updateFrame(
          this.images.currentFrame / this.images.totalFrames
        );
      },
      onComplete: () => {
        this.currentSection === 0 && e === 56
          ? this.startFirstSectionLoop()
          : e === 248 &&
            (this.currentSection === 0 || this.currentSection >= 2) &&
            this.startSecondSectionLoop();
      },
    });
  }
  animateIntroSection(e) {
    console.log("first secton"),
      e
        .to(
          this.splitText2.chars,
          { y: "105%", duration: 1, ease: "power2.out", stagger: 0.003 },
          0
        )
        .to(
          this.splitText.chars,
          {
            y: 0,
            duration: 2,
            ease: "expo.out",
            stagger: { each: 0.02, from: "start" },
          },
          2
        )
        .to(
          this.splitText1.chars,
          {
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: { each: 0.01, from: "end" },
          },
          2
        )
        .to(".pagination", { opacity: 0, duration: 0.5, ease: "power2.out" }, 0)
        .to(
          ".pagination__arrows",
          { opacity: 0, duration: 0.5, ease: "power2.out" },
          0
        );
  }
  animateSecondSection(e) {
    e.to(".scroll-indicator p", { opacity: 0, duration: 0.5 }, 0)
      .to(
        this.splitText.chars,
        { y: "-110%", duration: 2, ease: "expo.out", stagger: 0.02 },
        0
      )
      .to(
        this.splitText1.chars,
        { y: "-105%", duration: 1, ease: "power2.out", stagger: 0.01 },
        0
      )
      .to(
        this.splitText2.chars,
        { y: 0, duration: 1.3, ease: "power2.out", stagger: 0.01 },
        2.5
      )
      .to(
        this.splitText3.chars,
        {
          y: "105%",
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.003,
        },
        0
      )
      .to(".pagination", { opacity: 1, duration: 1, ease: "power2.out" }, 2.5)
      .to(
        ".pagination__arrows",
        { opacity: 1, duration: 1, ease: "power2.out" },
        2.5
      );
  }
  animateEnterVortex(e, t) {
    this.vortexState = {
      isTransitioning: !0,
      isEntering: !0,
      animationComplete: !1,
    };
    const r = 3;
    e
      .to(this.splitText2.chars, {
        y: "-105%",
        duration: 1,
        ease: "power2.out",
        stagger: 0.003,
      })
      .to(
        this.splitText3.chars,
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.01,
        },
        3
      ),
      V.to(this.images, {
        currentFrame: 380,
        duration: r,
        ease: "linear",
        onUpdate: () => {
          this.vortexState.isTransitioning &&
            this.images.updateFrame(
              this.images.currentFrame / this.images.totalFrames
            );
        },
        onComplete: () => {
          this.vortexState.isTransitioning &&
            (this.startLoopAnimation(),
            (this.vortexState.animationComplete = !0),
            (this.vortexState.isEntering = !1),
            (this.vortexState.isTransitioning = !1));
        },
      });
  }
  animateVortexSection(e, t) {
    var i, n;
    this.loopAnimation || this.startLoopAnimation();
    const r = {
      3: {
        enter: () => {
          t.to(this.splitText3.chars, {
            yPercent: -100,
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.01,
          })
            .to(
              ".four h2",
              { opacity: 1, scale: 1, duration: 1.2, ease: "power1.out" },
              ">"
            )
            .to(
              ".four p",
              { opacity: 1, scale: 1, duration: 1.2, ease: "power1.out" },
              "<"
            );
        },
        exit: () => {
          t.to(".four h2", {
            opacity: 0,
            scale: 0,
            duration: 1.2,
            ease: "power1.out",
          }).to(
            ".four p",
            { opacity: 0, scale: 0, duration: 1.2, ease: "power1.out" },
            "<"
          );
        },
      },
      4: {
        enter: () => {
          t.to(".five h2", {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power1.out",
          }).to(
            ".five p",
            { opacity: 1, scale: 1, duration: 1.2, ease: "power1.out" },
            "<"
          );
        },
      },
    };
    (i = r[e]) != null && i.enter && r[e].enter(),
      this.currentSection !== e &&
        (n = r[this.currentSection]) != null &&
        n.exit &&
        r[this.currentSection].exit();
  }
  startFirstSectionLoop() {
    this.firstSectionLoop && this.firstSectionLoop.kill(),
      (this.images.currentFrame = this.firstSectionFrames.start),
      (this.firstSectionLoop = V.to(this.images, {
        currentFrame: this.firstSectionFrames.end,
        duration: 2,
        ease: "none",
        repeat: -1,
        onUpdate: () => {
          this.images.updateFrame(
            this.images.currentFrame / this.images.totalFrames
          );
        },
        onRepeat: () => {
          this.images.currentFrame = this.firstSectionFrames.start;
        },
      }));
  }
  stopFirstSectionLoop() {
    this.firstSectionLoop &&
      (this.firstSectionLoop.kill(), (this.firstSectionLoop = null));
  }
  startSecondSectionLoop() {
    this.secondSectionLoop && this.secondSectionLoop.kill(),
      (this.images.currentFrame = this.secondSectionFrames.start),
      (this.secondSectionLoop = V.to(this.images, {
        currentFrame: this.secondSectionFrames.end,
        duration: 2,
        ease: "none",
        repeat: -1,
        onUpdate: () => {
          this.images.updateFrame(
            this.images.currentFrame / this.images.totalFrames
          );
        },
        onRepeat: () => {
          this.images.currentFrame = this.secondSectionFrames.start;
        },
      }));
  }
  stopSecondSectionLoop() {
    this.secondSectionLoop &&
      (this.secondSectionLoop.kill(), (this.secondSectionLoop = null));
  }
  startLoopAnimation() {
    this.stopLoopAnimation(),
      (this.images.currentFrame = 380),
      (this.loopAnimation = V.to(this.images, {
        currentFrame: 440,
        duration: 2,
        ease: "none",
        repeat: -1,
        onUpdate: () => {
          this.images.updateFrame(
            this.images.currentFrame / this.images.totalFrames
          );
        },
      }));
  }
  stopLoopAnimation() {
    this.loopAnimation &&
      (this.loopAnimation.kill(),
      (this.loopAnimation = null),
      (this.images.currentFrame = 380));
  }
  updateProgressCircle(e) {
    const t = document.querySelector(".progress-circle");
    if (!t) return;
    const r = { 0: 100, 1: 83, 3: 50, 4: 33, 5: 17, 6: 0 };
    t.style.strokeDashoffset = r[e];
  }
  async waitForImages() {
    return new Promise((e) => {
      const t = setInterval(() => {
        this.experience.images &&
          (clearInterval(t), (this.images = this.experience.images), e());
      }, 50);
    });
  }
  create() {
    this.dataAndImagesLoaded &&
      (super.create(),
      this.introAnim(),
      this.takeAction(),
      this.skipToContact());
  }
  introAnim() {
    const e = window.innerWidth <= 1080;
    V.to(this.images, {
      currentFrame: 56,
      duration: e ? 3 : 2.5,
      ease: "linear",
      delay: 1.5,
      onUpdate: () => {
        this.images.updateFrame(
          this.images.currentFrame / this.images.totalFrames
        );
      },
      onComplete: () => {
        (this.introComplete = !0),
          this.setupScroll(),
          this.startFirstSectionLoop();
      },
    }),
      V.set(".header", { display: "flex" }),
      V.to(".header", { y: 0, duration: 2, ease: "expo.out", delay: 2.5 }),
      V.to(this.splitText.chars, {
        y: 0,
        duration: 2,
        ease: "expo.out",
        stagger: 0.1,
        delay: 2.6,
      }),
      V.to(this.splitText1.chars, {
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.03,
        delay: 2.6,
      }),
      V.to(".scroll-indicator", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 3,
      });
  }
  takeAction() {
    (this.takeActionBtn = document.querySelector(".take-action__btn")),
      this.takeActionBtn.addEventListener("click", () => {
        V.to(".pagination", { opacity: 0, y: "20px", duration: 0.5 }),
          V.to(".pagination__arrows", { opacity: 0, y: "20px", duration: 0.5 }),
          this.Outro();
      }),
      document.querySelectorAll("a[href='#contact']").forEach((e) => {
        e.addEventListener("click", (t) => {
          this.Outro();
        });
      });
  }
  removeAction() {
    V.fromTo(
      ".take-action__btn",
      { scale: 1 },
      { scale: 0, ease: "expo.out", duration: 1 }
    ),
      V.set(".take-action", { display: "none" });
  }
  Outro() {
    (document.querySelector(".scroll-indicator").style.display = "none"),
      (document.querySelector("body").style.overflow = "hidden"),
      (this.videoOutro = document.querySelector(".outro-video"));
    const e = document.querySelector(".skip");
    V.set([".outro__content", ".developed-by"], { autoAlpha: 0, y: 100 }),
      V.set(".outro", { display: "block" }),
      V.to("#canvas", { autoAlpha: 0, duration: 0.5 }),
      V.to(".take-action", { autoAlpha: 0, duration: 0.5 }),
      V.to(this.videoOutro, { opacity: 1, ease: "expo.out", duration: 1.5 });
    const t = () => {
        V.to(e, {
          autoAlpha: 0,
          duration: 0.3,
          onComplete: () => {
            e.style.display = "none";
          },
        }),
          V.to(".outro__content", {
            autoAlpha: 1,
            y: 0,
            ease: "expo.out",
            duration: 1.5,
          }),
          V.to(".developed-by", {
            autoAlpha: 1,
            y: 0,
            ease: "expo.out",
            duration: 1,
          });
      },
      r = () => {
        const i = this.videoOutro.duration;
        (this.videoOutro.currentTime = i - 9.5), t();
      };
    e.addEventListener("click", r),
      this.videoOutro.play(),
      this.videoOutro.addEventListener("timeupdate", () => {
        const i = this.videoOutro.duration;
        i - this.videoOutro.currentTime <= 12 &&
          !this.formShown &&
          (t(), (this.formShown = !0)),
          this.videoOutro.currentTime >= i - 0.01 &&
            ((this.videoOutro.currentTime = i - 9), this.videoOutro.play()),
          window.innerWidth <= 640 &&
            this.videoOutro.currentTime >= i - 12.5 &&
            (this.videoOutro.style.objectPosition = "25%");
      });
  }
  skipToContact() {
    const e = document.querySelector(".header-cta"),
      t = document.querySelector(".outro-video"),
      r = () => {
        t.duration && t.duration > 0
          ? ((t.currentTime = t.duration - 9.5),
            t.play(),
            t.addEventListener("timeupdate", function () {
              t.currentTime >= t.duration - 0.01 &&
                ((t.currentTime = t.duration - 9), t.play());
            }))
          : console.log("Video duration not available yet.");
      };
    e.addEventListener("click", (i) => {
      i.preventDefault(),
        console.log("skip to contact"),
        V.set(".scroll-indicator", { display: "none" }),
        V.set(".skip", { display: "none" }),
        V.set(".pagination", { display: "none" }),
        V.set(".pagination__arrows", { display: "none" }),
        V.to(".intro", { opacity: 0, display: "none", duration: 0.5 }),
        V.to(canvas, { opacity: 0, display: "none", duration: 0.5 }),
        V.to(".intro", { opacity: 0, display: "none", duration: 0.5 }),
        V.to(".two", { opacity: 0, display: "none", duration: 0.5 }),
        V.to(".vortex", { opacity: 0, display: "none", duration: 0.5 }),
        V.to(".take-action", { opacity: 0, display: "none", duration: 0.5 }),
        V.to(".outro video", { opacity: 1, duration: 0.5 }),
        V.to(".outro", { opacity: 1, display: "block", delay: 1 }),
        t.readyState >= 1
          ? r()
          : t.addEventListener("loadedmetadata", r, { once: !0 });
    });
  }
  async postData() {
    try {
      const e = "https://admin.SuperFile.com",
        t = document.querySelector(".newsletter-form"),
        r = t.querySelector("input"),
        i = document.querySelector(".form-message"),
        n = document.querySelector(".outro-btn-label");
      let s = "";
      t.addEventListener("submit", async (o) => {
        (n.disabled = !0), o.preventDefault(), (s = { email: r.value });
        const u = await fetch(`${e}/api/newsletter`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(s),
        });
        try {
          const l = await u.json();
          (i.textContent = l.message), l.status !== 200 && (n.disabled = !1);
        } catch {
          (i.textContent = "Something went wrong. Try again later."),
            (n.disabled = !1);
        }
      });
    } catch (e) {
      (msg.textContent = "Something went wrong. Try again later."),
        (btn.disabled = !1),
        console.log(e);
    }
  }
}
class jc {
  constructor() {
    this.createContent(), this.createPages();
  }
  createContent() {
    (this.content = document.querySelector(".content")),
      (this.template = this.content.getAttribute("data-template"));
  }
  createPages() {
    if (this.template) {
      switch (this.template) {
        case "home":
          this.page = new Gc();
          break;
      }
      this.page && this.page.create();
    }
  }
}
new jc();

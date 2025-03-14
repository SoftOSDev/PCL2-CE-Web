/*!
 * Trigger.js v1.0.8
 * Copyright (c) 2021 Steven Lei
 * Released under the MIT License.
 * https://github.com/triggerjs/trigger
*/
/*!
 * The formatter is Xihao Hua
 * Handing Co. 2025
 * https://borisy.bar
*/
(() => {
    var t = {
            635: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, {
                    get: () => o
                });
                var n = r(105);

                function o(t) {
                    if ("string" == typeof t) {
                        if (t.indexOf(",") > -1) {
                            var e = t.split(",");
                            if (4 !== e.length) throw new Error("Bezier function expected 4 arguments, but got ".concat(e.length, "."));
                            return e
                        }
                        if (!n.Si.hasOwnProperty(t)) throw new Error("The default value of the bezier function does not exist！");
                        return t
                    }
                }
            },
            234: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, {
                    get: () => n
                });

                function n(t) {
                    return t && ["cover", "inset"].includes(t) || (t = "cover"), t
                }
            },
            921: (t, e, r) => {
                "use strict";

                function n(t) {
                    var e = {
                        mode: "retain",
                        values: []
                    };
                    return "string" == typeof t && "" !== t.trim() && ("!" === t.substring(t.length - 1) && (e.mode = "exact", t = t.substring(0, t.length - 1)), t = t.replace(/!/g, ""), e.values = t.split(",").map((function(t) {
                        return Number(t.trim())
                    }))), e
                }
                r.r(e), r.d(e, {
                    get: () => n
                })
            },
            551: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, {
                    get: () => o
                });
                var n = r(381);

                function o(t) {
                    if (!t) return null;
                    var e = document.querySelector("[".concat((0, n.G)(), 'ref="').concat(t, '"]'));
                    return !e || e.hasAttribute("".concat((0, n.G)(), "follow")) ? null : e
                }
            },
            705: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, {
                    get: () => n
                });

                function n(t) {
                    return t ? Number(t) : 0
                }
            },
            661: (t, e, r) => {
                "use strict";

                function n(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null == r) return;
                        var n, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (r = r.call(t); !(u = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); u = !0);
                        } catch (t) {
                            a = !0, o = t
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }(t, e) || function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return o(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e)
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                    return n
                }

                function i(t, e) {
                    var r = {};
                    return "string" == typeof t && "" !== t.trim() && t.split(";").forEach((function(t) {
                        var o = t.split(":");
                        if (2 === o.length)
                            if (o[0].indexOf(",") > -1) o[0].split(",").forEach((function(t) {
                                r[t.trim()] = o[1].trim()
                            }));
                            else if (o[0].indexOf("...") > -1)
                            for (var i = n(o[0].split("...").map((function(t) {
                                    return +t
                                })).sort((function(t, e) {
                                    return t - e
                                })), 2), u = i[0], a = i[1], c = u; c <= a;) c = Number(c.toFixed((null == e ? void 0 : e.decimals) || 2)), r[c] = o[1].trim(), c += (null == e ? void 0 : e.increment) || .01;
                        else r[o[0].trim()] = o[1].trim()
                    })), r
                }
                r.r(e), r.d(e, {
                    get: () => i
                })
            },
            424: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, {
                    get: () => o
                });
                var n = r(381);

                function o(t) {
                    return t || console.warn("".concat((0, n.G)(), "name is not set")), "--" === t.substring(0, 2) ? t : "--".concat(t)
                }
            },
            146: (t, e, r) => {
                "use strict";

                function n(t) {
                    return t || null
                }
                r.r(e), r.d(e, {
                    get: () => n
                })
            },
            414: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, {
                    get: () => n
                });

                function n(t) {
                    return t ? Number(t) : 0
                }
            },
            158: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, {
                    get: () => n
                });

                function n(t) {
                    var e = t ? Number(t) : 100;
                    return 0 === e && (e = 100), e
                }
            },
            604: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, {
                    get: () => n
                });

                function n(t) {
                    return t ? Number(t) : 1
                }
            },
            105: (t, e, r) => {
                "use strict";

                function n(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null == r) return;
                        var n, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (r = r.call(t); !(u = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); u = !0);
                        } catch (t) {
                            a = !0, o = t
                        } finally {
                            try {
                                u || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }(t, e) || function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return o(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e)
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                    return n
                }

                function i(t, e, r, n) {
                    var o = 1e-6,
                        i = 3 * t - 3 * r + 1,
                        u = 3 * r - 6 * t,
                        a = 3 * t,
                        c = 3 * e - 3 * n + 1,
                        l = 3 * n - 6 * e,
                        s = 3 * e;

                    function f(t) {
                        return ((i * t + u) * t + a) * t
                    }
                    return function(t) {
                        return e = function(t) {
                            for (var e, r, n, c = t, l = 0; l < 8; l++) {
                                if (r = f(c) - t, Math.abs(r) < o) return c;
                                if (e = (3 * i * (n = c) + 2 * u) * n + a, Math.abs(e) < o) break;
                                c -= r / e
                            }
                            var s = 1,
                                d = 0;
                            for (c = t; s > d;) {
                                if (r = f(c) - t, Math.abs(r) < o) return c;
                                r > 0 ? s = c : d = c, c = (s + d) / 2
                            }
                            return c
                        }(t), ((c * e + l) * e + s) * e;
                        var e
                    }
                }
                r.d(e, {
                    Si: () => u,
                    $p: () => a
                });
                i(.25, .1, .25, 1), i(.42, 0, 1, 1), i(0, 0, .58, 1), i(.42, 0, .58, 1);
                var u = {
                    ease: i(.25, .1, .25, 1),
                    easeIn: i(.42, 0, 1, 1),
                    easeOut: i(0, 0, .58, 1),
                    easeInOut: i(.42, 0, .58, 1)
                };

                function a(t, e) {
                    if ("string" == typeof t) e = u[t](e);
                    else {
                        var r = n(t, 4);
                        e = i(r[0], r[1], r[2], r[3])(e)
                    }
                    return e
                }
            },
            381: (t, e, r) => {
                "use strict";
                r.d(e, {
                    P: () => o,
                    G: () => i
                });
                var n = "tg";

                function o() {
                    var t = document.body && document.body.getAttribute("data-trigger-prefix");
                    t && function(t) {
                        if ("string" != typeof t || !(t = t.trim())) return;
                        n = t
                    }(t)
                }

                function i() {
                    return "".concat(n, "-")
                }
            },
            523: (t, e, r) => {
                var n = {
                    "./tg-bezier.ts": 635,
                    "./tg-edge.ts": 234,
                    "./tg-filter.ts": 921,
                    "./tg-follow.ts": 551,
                    "./tg-from.ts": 705,
                    "./tg-map.ts": 661,
                    "./tg-name.ts": 424,
                    "./tg-ref.ts": 146,
                    "./tg-step.ts": 414,
                    "./tg-steps.ts": 158,
                    "./tg-to.ts": 604
                };

                function o(t) {
                    var e = i(t);
                    return r(e)
                }

                function i(t) {
                    if (!r.o(n, t)) {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return n[t]
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.resolve = i, t.exports = o, o.id = 523
            }
        },
        e = {};

    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var i = e[n] = {
            exports: {}
        };
        return t[n](i, i.exports, r), i.exports
    }
    r.d = (t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var n = {};
    (() => {
        "use strict";
        r.r(n);
        var t = r(381);
        var e = ["tg-follow", "tg-ref"],
            o = {},
            i = r(523);

        function u(r, n, i) {
            var u = n;
            if ("tg-" !== u.substring(0, 3)) {
                var a = (0, t.G)();
                u = "tg-".concat(u.replace(a, ""))
            }
            if (void 0 === o[u]) return null;
            var c = function(t, r, n) {
                    if (t.hasAttribute(r) || e.includes(n)) return t;
                    var o = t;
                    for (;
                        (o = o.parentElement) !== document.body;)
                        if (o.hasAttribute(r)) return o;
                    return t
                }(r, n, u),
                l = c.hasAttribute(n) ? c.getAttribute(n) : null;
            return o[u].get(l, i)
        }
        i.keys().map((function(t) {
            var e, r = null === (e = t.match(/tg-[^.]+/)) || void 0 === e ? void 0 : e[0];
            r && (o[r] = i(t))
        }));
        var a = r(105);

        function c(e) {
            var r, n = (0, t.G)(),
                o = u(e, "".concat(n, "follow")) || e,
                i = getComputedStyle(o),
                a = +i.getPropertyValue("--".concat(n, "top")),
                c = +i.getPropertyValue("--".concat(n, "height")),
                l = u(e, "".concat(n, "name")),
                s = u(o, "".concat(n, "from")),
                f = u(o, "".concat(n, "to")),
                d = u(o, "".concat(n, "steps")),
                m = u(o, "".concat(n, "step")),
                g = u(o, "".concat(n, "bezier")),
                p = u(e, "".concat(n, "filter")),
                v = u(o, "".concat(n, "edge")),
                y = Math.abs(f - s),
                b = 0 === m ? y / d : m,
                h = y / b,
                w = (r = b, Math.floor(r) === r ? 0 : r.toString().split(".")[1].length || 0),
                A = s > f ? -1 : 1;
            return {
                el: e,
                top: a,
                height: c,
                name: l,
                from: s,
                to: f,
                steps: d,
                step: m,
                mapping: u(e, "".concat(n, "map"), {
                    increment: b,
                    decimals: w
                }),
                filter: p,
                edge: v,
                range: y,
                increment: b,
                segments: h,
                decimals: w,
                multiplier: A,
                lastValue: null,
                bezier: g
            }
        }

        function l(t) {
            var e = document.documentElement,
                r = e.scrollTop,
                n = e.clientHeight;
            t.forEach((function(t) {
                var e = t.el,
                    o = t.top,
                    i = t.height,
                    u = t.increment,
                    c = t.segments,
                    l = t.decimals,
                    s = t.multiplier,
                    f = t.name,
                    d = t.from,
                    m = t.mapping,
                    g = t.filter,
                    p = t.edge,
                    v = t.lastValue,
                    y = t.bezier;
                if ("--_" !== f) {
                    var b, h = "cover" === p ? Math.min(Math.max((r + n - o) / (n + i), 0), 1) : Math.min(Math.max((r - o) / (i - n), 0), 1);
                    h = y ? (0, a.$p)(y, h) : h, b = +(d + Math.floor((c + 1) * h) * u * s).toFixed(l), g.values.length > 0 && !g.values.includes(b) ? "exact" === g.mode && (t.lastValue = null, e.style.removeProperty(f)) : (void 0 !== m[b] && (b = m[b]), v != b && (e.style.setProperty(f, "".concat(b)), e.dispatchEvent(new CustomEvent("tg", {
                        target: e,
                        detail: {
                            value: b
                        }
                    })), t.lastValue = b))
                }
            }))
        }
        var s = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };

        function f(e, r) {
            r && "function" == typeof r.before && r.before();
            var n = (0, t.G)();
            document.querySelectorAll("[".concat(n, "name]")).forEach((function(t) {
                var r = t.getBoundingClientRect(),
                    o = r.top,
                    i = r.height;
                t.style.setProperty("--".concat(n, "top"), "".concat(o + window.scrollY)), t.style.setProperty("--".concat(n, "height"), "".concat(i)), e && e.observe(t)
            })), r && "function" == typeof r.after && r.after()
        }

        function d(t) {
            return function(t) {
                if (Array.isArray(t)) return m(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || function(t, e) {
                if (!t) return;
                if ("string" == typeof t) return m(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r) return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function m(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n
        }
        var g = [],
            p = null;

        function v() {
            var t;
            t = function(t) {
                t.forEach((function(t) {
                    var e = t.target;
                    t.isIntersecting ? g.push(c(e)) : g = g.filter((function(t) {
                        return t.el !== e
                    }))
                }))
            }, p = "undefined" == typeof IntersectionObserver ? (console.warn("IntersectionObserver is not supported in this browser"), null) : new IntersectionObserver(t, s)
        }(0, t.P)();
        ({
            start: function() {
                document.body ? (v(), window.addEventListener("DOMContentLoaded", (function() {
                    f(p), setTimeout((function() {
                        l(d(document.querySelectorAll("[".concat((0, t.G)(), "name]"))).map((function(t) {
                            return c(t)
                        })))
                    }))
                })), window.addEventListener("resize", (function() {
                    f(p, {
                        before: function() {
                            g.forEach((function(t) {
                                var e;
                                null === (e = p) || void 0 === e || e.unobserve(t.el)
                            })), g = []
                        }
                    })
                })), window.addEventListener("scroll", (function(t) {
                    l(g)
                }))) : console.warn("Unable to initialise, document.body does not exist.")
            }
        }).start()
    })(), window.Trigger = n
})();

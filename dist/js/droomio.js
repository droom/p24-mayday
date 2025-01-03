/*! droom-portfolio-2016/7 2017-05-29 */
!(function (a, b) {
    function c(a) {
        return J.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    function d(a) {
        if (!rb[a]) {
            var b = G.body,
                c = J("<" + a + ">").appendTo(b),
                d = c.css("display");
            c.remove(),
                ("none" === d || "" === d) &&
                    (nb || ((nb = G.createElement("iframe")), (nb.frameBorder = nb.width = nb.height = 0)),
                    b.appendChild(nb),
                    (ob && nb.createElement) || ((ob = (nb.contentWindow || nb.contentDocument).document), ob.write(("CSS1Compat" === G.compatMode ? "<!doctype html>" : "") + "<html><body>"), ob.close()),
                    (c = ob.createElement(a)),
                    ob.body.appendChild(c),
                    (d = J.css(c, "display")),
                    b.removeChild(nb)),
                (rb[a] = d);
        }
        return rb[a];
    }
    function e(a, b) {
        var c = {};
        return (
            J.each(ub.concat.apply([], ub.slice(0, b)), function () {
                c[this] = a;
            }),
            c
        );
    }
    function f() {
        qb = b;
    }
    function g() {
        return setTimeout(f, 0), (qb = J.now());
    }
    function h() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    function i() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function j(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = a.dataTypes,
            m = {},
            n = l.length,
            o = l[0];
        for (d = 1; n > d; d++) {
            if (1 === d) for (e in a.converters) "string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
            if (((g = o), (o = l[d]), "*" === o)) o = g;
            else if ("*" !== g && g !== o) {
                if (((h = g + " " + o), (i = m[h] || m["* " + o]), !i)) {
                    k = b;
                    for (j in m)
                        if (((f = j.split(" ")), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o]))) {
                            (j = m[j]), j === !0 ? (i = k) : k === !0 && (i = j);
                            break;
                        }
                }
                !i && !k && J.error("No conversion from " + h.replace(" ", " to ")), i !== !0 && (c = i ? i(c) : k(j(c)));
            }
        }
        return c;
    }
    function k(a, c, d) {
        var e,
            f,
            g,
            h,
            i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        for (; "*" === j[0]; ) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break;
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break;
                }
                h || (h = f);
            }
            g = g || h;
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0;
    }
    function l(a, b, c, d) {
        if (J.isArray(b))
            J.each(b, function (b, e) {
                c || Ra.test(a) ? d(a, e) : l(a + "[" + ("object" == typeof e || J.isArray(e) ? b : "") + "]", e, c, d);
            });
        else if (c || null == b || "object" != typeof b) d(a, b);
        else for (var e in b) l(a + "[" + e + "]", b[e], c, d);
    }
    function m(a, c) {
        var d,
            e,
            f = J.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && J.extend(!0, a, e);
    }
    function n(a, c, d, e, f, g) {
        (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === eb; k > j && (l || !h); j++) (h = i[j](c, d, e)), "string" == typeof h && (!l || g[h] ? (h = b) : (c.dataTypes.unshift(h), (h = n(a, c, d, e, h, g))));
        return (l || !h) && !g["*"] && (h = n(a, c, d, e, "*", g)), h;
    }
    function o(a) {
        return function (b, c) {
            if (("string" != typeof b && ((c = b), (b = "*")), J.isFunction(c)))
                for (var d, e, f, g = b.toLowerCase().split(ab), h = 0, i = g.length; i > h; h++) (d = g[h]), (f = /^\+/.test(d)), f && (d = d.substr(1) || "*"), (e = a[d] = a[d] || []), e[f ? "unshift" : "push"](c);
        };
    }
    function p(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            e = "width" === b ? Ma : Na;
        return d > 0
            ? ("border" !== c &&
                  J.each(e, function () {
                      c || (d -= parseFloat(J.css(a, "padding" + this)) || 0), "margin" === c ? (d += parseFloat(J.css(a, c + this)) || 0) : (d -= parseFloat(J.css(a, "border" + this + "Width")) || 0);
                  }),
              d + "px")
            : ((d = Ca(a, b, b)),
              (0 > d || null == d) && (d = a.style[b] || 0),
              (d = parseFloat(d) || 0),
              c &&
                  J.each(e, function () {
                      (d += parseFloat(J.css(a, "padding" + this)) || 0), "padding" !== c && (d += parseFloat(J.css(a, "border" + this + "Width")) || 0), "margin" === c && (d += parseFloat(J.css(a, c + this)) || 0);
                  }),
              d + "px");
    }
    function q(a, b) {
        b.src ? J.ajax({ url: b.src, async: !1, dataType: "script" }) : J.globalEval((b.text || b.textContent || b.innerHTML || "").replace(za, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b);
    }
    function r(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? s(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), s);
    }
    function s(a) {
        ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked);
    }
    function t(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : [];
    }
    function u(a, b) {
        var c;
        1 === b.nodeType &&
            (b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a),
            (c = b.nodeName.toLowerCase()),
            "object" === c
                ? (b.outerHTML = a.outerHTML)
                : "input" !== c || ("checkbox" !== a.type && "radio" !== a.type)
                ? "option" === c
                    ? (b.selected = a.defaultSelected)
                    : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
                : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)),
            b.removeAttribute(J.expando));
    }
    function v(a, b) {
        if (1 === b.nodeType && J.hasData(a)) {
            var c,
                d,
                e,
                f = J._data(a),
                g = J._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, (g.events = {});
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) J.event.add(b, c + (h[c][d].namespace ? "." : "") + h[c][d].namespace, h[c][d], h[c][d].data);
            }
            g.data && (g.data = J.extend({}, g.data));
        }
    }
    function w(a, b) {
        return J.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function x(a) {
        var b = na.split(" "),
            c = a.createDocumentFragment();
        if (c.createElement) for (; b.length; ) c.createElement(b.pop());
        return c;
    }
    function y(a, b, c) {
        if (((b = b || 0), J.isFunction(b)))
            return J.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c;
            });
        if (b.nodeType)
            return J.grep(a, function (a, d) {
                return (a === b) === c;
            });
        if ("string" == typeof b) {
            var d = J.grep(a, function (a) {
                return 1 === a.nodeType;
            });
            if (ja.test(b)) return J.filter(b, d, !c);
            b = J.filter(b, d);
        }
        return J.grep(a, function (a, d) {
            return J.inArray(a, b) >= 0 === c;
        });
    }
    function z(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType;
    }
    function A() {
        return !0;
    }
    function B() {
        return !1;
    }
    function C(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            f = b + "mark",
            g = J._data(a, d);
        !(
            !g ||
            ("queue" !== c && J._data(a, e)) ||
            ("mark" !== c && J._data(a, f)) ||
            !setTimeout(function () {
                !J._data(a, e) && !J._data(a, f) && (J.removeData(a, d, !0), g.fire());
            }, 0)
        );
    }
    function D(a) {
        for (var b in a) if (("data" !== b || !J.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function E(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(N, "-$1").toLowerCase();
            if (((d = a.getAttribute(e)), "string" == typeof d)) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : J.isNumeric(d) ? parseFloat(d) : M.test(d) ? J.parseJSON(d) : d;
                } catch (f) {}
                J.data(a, c, d);
            } else d = b;
        }
        return d;
    }
    function F(a) {
        var b,
            c,
            d = (K[a] = {});
        for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++) d[a[b]] = !0;
        return d;
    }
    var G = a.document,
        H = a.navigator,
        I = a.location,
        J = (function () {
            function c() {
                if (!h.isReady) {
                    try {
                        G.documentElement.doScroll("left");
                    } catch (a) {
                        return void setTimeout(c, 1);
                    }
                    h.ready();
                }
            }
            var d,
                e,
                f,
                g,
                h = function (a, b) {
                    return new h.fn.init(a, b, d);
                },
                i = a.jQuery,
                j = a.$,
                k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                l = /\S/,
                m = /^\s+/,
                n = /\s+$/,
                o = /\d/,
                p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                q = /^[\],:{}\s]*$/,
                r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                s = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                t = /(?:^|:|,)(?:\s*\[)+/g,
                u = /(webkit)[ \/]([\w.]+)/,
                v = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                w = /(msie) ([\w.]+)/,
                x = /(mozilla)(?:.*? rv:([\w.]+))?/,
                y = /-([a-z]|[0-9])/gi,
                z = /^-ms-/,
                A = function (a, b) {
                    return (b + "").toUpperCase();
                },
                B = H.userAgent,
                C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                I = String.prototype.trim,
                J = Array.prototype.indexOf,
                K = {};
            return (
                (h.fn = h.prototype = {
                    constructor: h,
                    init: function (a, c, d) {
                        var e, f, g, i;
                        if (!a) return this;
                        if (a.nodeType) return (this.context = this[0] = a), (this.length = 1), this;
                        if ("body" === a && !c && G.body) return (this.context = G), (this[0] = G.body), (this.selector = a), (this.length = 1), this;
                        if ("string" == typeof a) {
                            if (((e = "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || a.length < 3 ? k.exec(a) : [null, a, null]), e && (e[1] || !c))) {
                                if (e[1])
                                    return (
                                        (c = c instanceof h ? c[0] : c),
                                        (i = c ? c.ownerDocument || c : G),
                                        (g = p.exec(a)),
                                        g
                                            ? h.isPlainObject(c)
                                                ? ((a = [G.createElement(g[1])]), h.fn.attr.call(a, c, !0))
                                                : (a = [i.createElement(g[1])])
                                            : ((g = h.buildFragment([e[1]], [i])), (a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes)),
                                        h.merge(this, a)
                                    );
                                if (((f = G.getElementById(e[2])), f && f.parentNode)) {
                                    if (f.id !== e[2]) return d.find(a);
                                    (this.length = 1), (this[0] = f);
                                }
                                return (this.context = G), (this.selector = a), this;
                            }
                            return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                        }
                        return h.isFunction(a) ? d.ready(a) : (a.selector !== b && ((this.selector = a.selector), (this.context = a.context)), h.makeArray(a, this));
                    },
                    selector: "",
                    jquery: "1.7",
                    length: 0,
                    size: function () {
                        return this.length;
                    },
                    toArray: function () {
                        return F.call(this, 0);
                    },
                    get: function (a) {
                        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
                    },
                    pushStack: function (a, b, c) {
                        var d = this.constructor();
                        return (
                            h.isArray(a) ? E.apply(d, a) : h.merge(d, a),
                            (d.prevObject = this),
                            (d.context = this.context),
                            "find" === b ? (d.selector = this.selector + (this.selector ? " " : "") + c) : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                            d
                        );
                    },
                    each: function (a, b) {
                        return h.each(this, a, b);
                    },
                    ready: function (a) {
                        return h.bindReady(), f.add(a), this;
                    },
                    eq: function (a) {
                        return -1 === a ? this.slice(a) : this.slice(a, +a + 1);
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    slice: function () {
                        return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","));
                    },
                    map: function (a) {
                        return this.pushStack(
                            h.map(this, function (b, c) {
                                return a.call(b, c, b);
                            })
                        );
                    },
                    end: function () {
                        return this.prevObject || this.constructor(null);
                    },
                    push: E,
                    sort: [].sort,
                    splice: [].splice,
                }),
                (h.fn.init.prototype = h.fn),
                (h.extend = h.fn.extend = function () {
                    var a,
                        c,
                        d,
                        e,
                        f,
                        g,
                        i = arguments[0] || {},
                        j = 1,
                        k = arguments.length,
                        l = !1;
                    for ("boolean" == typeof i && ((l = i), (i = arguments[1] || {}), (j = 2)), "object" != typeof i && !h.isFunction(i) && (i = {}), k === j && ((i = this), --j); k > j; j++)
                        if (null != (a = arguments[j]))
                            for (c in a)
                                (d = i[c]),
                                    (e = a[c]),
                                    i !== e &&
                                        (l && e && (h.isPlainObject(e) || (f = h.isArray(e)))
                                            ? (f ? ((f = !1), (g = d && h.isArray(d) ? d : [])) : (g = d && h.isPlainObject(d) ? d : {}), (i[c] = h.extend(l, g, e)))
                                            : e !== b && (i[c] = e));
                    return i;
                }),
                h.extend({
                    noConflict: function (b) {
                        return a.$ === h && (a.$ = j), b && a.jQuery === h && (a.jQuery = i), h;
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (a) {
                        a ? h.readyWait++ : h.ready(!0);
                    },
                    ready: function (a) {
                        if ((a === !0 && !--h.readyWait) || (a !== !0 && !h.isReady)) {
                            if (!G.body) return setTimeout(h.ready, 1);
                            if (((h.isReady = !0), a !== !0 && --h.readyWait > 0)) return;
                            f.fireWith(G, [h]), h.fn.trigger && h(G).trigger("ready").unbind("ready");
                        }
                    },
                    bindReady: function () {
                        if (!f) {
                            if (((f = h.Callbacks("once memory")), "complete" === G.readyState)) return setTimeout(h.ready, 1);
                            if (G.addEventListener) G.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1);
                            else if (G.attachEvent) {
                                G.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
                                var b = !1;
                                try {
                                    b = null == a.frameElement;
                                } catch (d) {}
                                G.documentElement.doScroll && b && c();
                            }
                        }
                    },
                    isFunction: function (a) {
                        return "function" === h.type(a);
                    },
                    isArray:
                        Array.isArray ||
                        function (a) {
                            return "array" === h.type(a);
                        },
                    isWindow: function (a) {
                        return a && "object" == typeof a && "setInterval" in a;
                    },
                    isNumeric: function (a) {
                        return null != a && o.test(a) && !isNaN(a);
                    },
                    type: function (a) {
                        return null == a ? String(a) : K[C.call(a)] || "object";
                    },
                    isPlainObject: function (a) {
                        if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return !1;
                        try {
                            if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1;
                        } catch (c) {
                            return !1;
                        }
                        var d;
                        for (d in a);
                        return d === b || D.call(a, d);
                    },
                    isEmptyObject: function (a) {
                        for (var b in a) return !1;
                        return !0;
                    },
                    error: function (a) {
                        throw a;
                    },
                    parseJSON: function (b) {
                        return "string" == typeof b && b
                            ? ((b = h.trim(b)), a.JSON && a.JSON.parse ? a.JSON.parse(b) : q.test(b.replace(r, "@").replace(s, "]").replace(t, "")) ? new Function("return " + b)() : void h.error("Invalid JSON: " + b))
                            : null;
                    },
                    parseXML: function (c) {
                        var d, e;
                        try {
                            a.DOMParser ? ((e = new DOMParser()), (d = e.parseFromString(c, "text/xml"))) : ((d = new ActiveXObject("Microsoft.XMLDOM")), (d.async = "false"), d.loadXML(c));
                        } catch (f) {
                            d = b;
                        }
                        return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + c), d;
                    },
                    noop: function () {},
                    globalEval: function (b) {
                        b &&
                            l.test(b) &&
                            (
                                a.execScript ||
                                function (b) {
                                    a.eval.call(a, b);
                                }
                            )(b);
                    },
                    camelCase: function (a) {
                        return a.replace(z, "ms-").replace(y, A);
                    },
                    nodeName: function (a, b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
                    },
                    each: function (a, c, d) {
                        var e,
                            f = 0,
                            g = a.length,
                            i = g === b || h.isFunction(a);
                        if (d)
                            if (i) {
                                for (e in a) if (c.apply(a[e], d) === !1) break;
                            } else for (; g > f && c.apply(a[f++], d) !== !1; );
                        else if (i) {
                            for (e in a) if (c.call(a[e], e, a[e]) === !1) break;
                        } else for (; g > f && c.call(a[f], f, a[f++]) !== !1; );
                        return a;
                    },
                    trim: I
                        ? function (a) {
                              return null == a ? "" : I.call(a);
                          }
                        : function (a) {
                              return null == a ? "" : (a + "").replace(m, "").replace(n, "");
                          },
                    makeArray: function (a, b) {
                        var c = b || [];
                        if (null != a) {
                            var d = h.type(a);
                            null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? E.call(c, a) : h.merge(c, a);
                        }
                        return c;
                    },
                    inArray: function (a, b, c) {
                        var d;
                        if (b) {
                            if (J) return J.call(b, a, c);
                            for (d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0; d > c; c++) if (c in b && b[c] === a) return c;
                        }
                        return -1;
                    },
                    merge: function (a, c) {
                        var d = a.length,
                            e = 0;
                        if ("number" == typeof c.length) for (var f = c.length; f > e; e++) a[d++] = c[e];
                        else for (; c[e] !== b; ) a[d++] = c[e++];
                        return (a.length = d), a;
                    },
                    grep: function (a, b, c) {
                        var d,
                            e = [];
                        c = !!c;
                        for (var f = 0, g = a.length; g > f; f++) (d = !!b(a[f], f)), c !== d && e.push(a[f]);
                        return e;
                    },
                    map: function (a, c, d) {
                        var e,
                            f,
                            g = [],
                            i = 0,
                            j = a.length,
                            k = a instanceof h || (j !== b && "number" == typeof j && ((j > 0 && a[0] && a[j - 1]) || 0 === j || h.isArray(a)));
                        if (k) for (; j > i; i++) (e = c(a[i], i, d)), null != e && (g[g.length] = e);
                        else for (f in a) (e = c(a[f], f, d)), null != e && (g[g.length] = e);
                        return g.concat.apply([], g);
                    },
                    guid: 1,
                    proxy: function (a, c) {
                        if ("string" == typeof c) {
                            var d = a[c];
                            (c = a), (a = d);
                        }
                        if (!h.isFunction(a)) return b;
                        var e = F.call(arguments, 2),
                            f = function () {
                                return a.apply(c, e.concat(F.call(arguments)));
                            };
                        return (f.guid = a.guid = a.guid || f.guid || h.guid++), f;
                    },
                    access: function (a, c, d, e, f, g) {
                        var i = a.length;
                        if ("object" == typeof c) {
                            for (var j in c) h.access(a, j, c[j], e, f, d);
                            return a;
                        }
                        if (d !== b) {
                            e = !g && e && h.isFunction(d);
                            for (var k = 0; i > k; k++) f(a[k], c, e ? d.call(a[k], k, f(a[k], c)) : d, g);
                            return a;
                        }
                        return i ? f(a[0], c) : b;
                    },
                    now: function () {
                        return new Date().getTime();
                    },
                    uaMatch: function (a) {
                        a = a.toLowerCase();
                        var b = u.exec(a) || v.exec(a) || w.exec(a) || (a.indexOf("compatible") < 0 && x.exec(a)) || [];
                        return { browser: b[1] || "", version: b[2] || "0" };
                    },
                    sub: function () {
                        function a(b, c) {
                            return new a.fn.init(b, c);
                        }
                        h.extend(!0, a, this),
                            (a.superclass = this),
                            (a.fn = a.prototype = this()),
                            (a.fn.constructor = a),
                            (a.sub = this.sub),
                            (a.fn.init = function (c, d) {
                                return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b);
                            }),
                            (a.fn.init.prototype = a.fn);
                        var b = a(G);
                        return a;
                    },
                    browser: {},
                }),
                h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                    K["[object " + b + "]"] = b.toLowerCase();
                }),
                (e = h.uaMatch(B)),
                e.browser && ((h.browser[e.browser] = !0), (h.browser.version = e.version)),
                h.browser.webkit && (h.browser.safari = !0),
                l.test(" ") && ((m = /^[\s\xA0]+/), (n = /[\s\xA0]+$/)),
                (d = h(G)),
                G.addEventListener
                    ? (g = function () {
                          G.removeEventListener("DOMContentLoaded", g, !1), h.ready();
                      })
                    : G.attachEvent &&
                      (g = function () {
                          "complete" === G.readyState && (G.detachEvent("onreadystatechange", g), h.ready());
                      }),
                "function" == typeof define &&
                    define.amd &&
                    define.amd.jQuery &&
                    define("jquery", [], function () {
                        return h;
                    }),
                h
            );
        })(),
        K = {};
    J.Callbacks = function (a) {
        a = a ? K[a] || F(a) : {};
        var c,
            d,
            e,
            f,
            g,
            h = [],
            i = [],
            j = function (b) {
                var c, d, e, f;
                for (c = 0, d = b.length; d > c; c++) (e = b[c]), (f = J.type(e)), "array" === f ? j(e) : "function" === f && (!a.unique || !l.has(e)) && h.push(e);
            },
            k = function (b, j) {
                for (j = j || [], c = !a.memory || [b, j], d = !0, g = e || 0, e = 0, f = h.length; h && f > g; g++)
                    if (h[g].apply(b, j) === !1 && a.stopOnFalse) {
                        c = !0;
                        break;
                    }
                (d = !1), h && (a.once ? (c === !0 ? l.disable() : (h = [])) : i && i.length && ((c = i.shift()), l.fireWith(c[0], c[1])));
            },
            l = {
                add: function () {
                    if (h) {
                        var a = h.length;
                        j(arguments), d ? (f = h.length) : c && c !== !0 && ((e = a), k(c[0], c[1]));
                    }
                    return this;
                },
                remove: function () {
                    if (h) for (var b = arguments, c = 0, e = b.length; e > c; c++) for (var i = 0; i < h.length && (b[c] !== h[i] || (d && f >= i && (f--, g >= i && g--), h.splice(i--, 1), !a.unique)); i++);
                    return this;
                },
                has: function (a) {
                    if (h) for (var b = 0, c = h.length; c > b; b++) if (a === h[b]) return !0;
                    return !1;
                },
                empty: function () {
                    return (h = []), this;
                },
                disable: function () {
                    return (h = i = c = b), this;
                },
                disabled: function () {
                    return !h;
                },
                lock: function () {
                    return (i = b), (!c || c === !0) && l.disable(), this;
                },
                locked: function () {
                    return !i;
                },
                fireWith: function (b, e) {
                    return i && (d ? a.once || i.push([b, e]) : (!a.once || !c) && k(b, e)), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!c;
                },
            };
        return l;
    };
    var L = [].slice;
    J.extend({
        Deferred: function (a) {
            var b,
                c = J.Callbacks("once memory"),
                d = J.Callbacks("once memory"),
                e = J.Callbacks("memory"),
                f = "pending",
                g = { resolve: c, reject: d, notify: e },
                h = {
                    done: c.add,
                    fail: d.add,
                    progress: e.add,
                    state: function () {
                        return f;
                    },
                    isResolved: c.fired,
                    isRejected: d.fired,
                    then: function (a, b, c) {
                        return i.done(a).fail(b).progress(c), this;
                    },
                    always: function () {
                        return i.done.apply(i, arguments).fail.apply(i, arguments);
                    },
                    pipe: function (a, b, c) {
                        return J.Deferred(function (d) {
                            J.each({ done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"] }, function (a, b) {
                                var c,
                                    e = b[0],
                                    f = b[1];
                                J.isFunction(e)
                                    ? i[a](function () {
                                          (c = e.apply(this, arguments)), c && J.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [c]);
                                      })
                                    : i[a](d[f]);
                            });
                        }).promise();
                    },
                    promise: function (a) {
                        if (null == a) a = h;
                        else for (var b in h) a[b] = h[b];
                        return a;
                    },
                },
                i = h.promise({});
            for (b in g) (i[b] = g[b].fire), (i[b + "With"] = g[b].fireWith);
            return (
                i
                    .done(
                        function () {
                            f = "resolved";
                        },
                        d.disable,
                        e.lock
                    )
                    .fail(
                        function () {
                            f = "rejected";
                        },
                        c.disable,
                        e.lock
                    ),
                a && a.call(i, i),
                i
            );
        },
        when: function (a) {
            function b(a) {
                return function (b) {
                    (g[a] = arguments.length > 1 ? L.call(arguments, 0) : b), i.notifyWith(j, g);
                };
            }
            function c(a) {
                return function (b) {
                    (d[a] = arguments.length > 1 ? L.call(arguments, 0) : b), --h || i.resolveWith(i, d);
                };
            }
            var d = L.call(arguments, 0),
                e = 0,
                f = d.length,
                g = Array(f),
                h = f,
                i = 1 >= f && a && J.isFunction(a.promise) ? a : J.Deferred(),
                j = i.promise();
            if (f > 1) {
                for (; f > e; e++) d[e] && d[e].promise && J.isFunction(d[e].promise) ? d[e].promise().then(c(e), i.reject, b(e)) : --h;
                h || i.resolveWith(i, d);
            } else i !== a && i.resolveWith(i, f ? [a] : []);
            return j;
        },
    }),
        (J.support = (function () {
            var a,
                b,
                c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = G.createElement("div"),
                r = G.documentElement;
            if (
                (q.setAttribute("className", "t"),
                (q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>"),
                (a = q.getElementsByTagName("*")),
                (b = q.getElementsByTagName("a")[0]),
                !a || !a.length || !b)
            )
                return {};
            (c = G.createElement("select")),
                (d = c.appendChild(G.createElement("option"))),
                (e = q.getElementsByTagName("input")[0]),
                (g = {
                    leadingWhitespace: 3 === q.firstChild.nodeType,
                    tbody: !q.getElementsByTagName("tbody").length,
                    htmlSerialize: !!q.getElementsByTagName("link").length,
                    style: /top/.test(b.getAttribute("style")),
                    hrefNormalized: "/a" === b.getAttribute("href"),
                    opacity: /^0.55/.test(b.style.opacity),
                    cssFloat: !!b.style.cssFloat,
                    unknownElems: !!q.getElementsByTagName("nav").length,
                    checkOn: "on" === e.value,
                    optSelected: d.selected,
                    getSetAttribute: "t" !== q.className,
                    enctype: !!G.createElement("form").enctype,
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                }),
                (e.checked = !0),
                (g.noCloneChecked = e.cloneNode(!0).checked),
                (c.disabled = !0),
                (g.optDisabled = !d.disabled);
            try {
                delete q.test;
            } catch (s) {
                g.deleteExpando = !1;
            }
            !q.addEventListener &&
                q.attachEvent &&
                q.fireEvent &&
                (q.attachEvent("onclick", function () {
                    g.noCloneEvent = !1;
                }),
                q.cloneNode(!0).fireEvent("onclick")),
                (e = G.createElement("input")),
                (e.value = "t"),
                e.setAttribute("type", "radio"),
                (g.radioValue = "t" === e.value),
                e.setAttribute("checked", "checked"),
                q.appendChild(e),
                (h = G.createDocumentFragment()),
                h.appendChild(q.lastChild),
                (g.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (q.innerHTML = ""),
                (q.style.width = q.style.paddingLeft = "1px"),
                (i = G.getElementsByTagName("body")[0]),
                (k = G.createElement(i ? "div" : "body")),
                (l = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }),
                i && J.extend(l, { position: "absolute", left: "-999px", top: "-999px" });
            for (o in l) k.style[o] = l[o];
            if (
                (k.appendChild(q),
                (j = i || r),
                j.insertBefore(k, j.firstChild),
                (g.appendChecked = e.checked),
                (g.boxModel = 2 === q.offsetWidth),
                "zoom" in q.style &&
                    ((q.style.display = "inline"), (q.style.zoom = 1), (g.inlineBlockNeedsLayout = 2 === q.offsetWidth), (q.style.display = ""), (q.innerHTML = "<div style='width:4px;'></div>"), (g.shrinkWrapBlocks = 2 !== q.offsetWidth)),
                (q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"),
                (m = q.getElementsByTagName("td")),
                (p = 0 === m[0].offsetHeight),
                (m[0].style.display = ""),
                (m[1].style.display = "none"),
                (g.reliableHiddenOffsets = p && 0 === m[0].offsetHeight),
                (q.innerHTML = ""),
                G.defaultView &&
                    G.defaultView.getComputedStyle &&
                    ((f = G.createElement("div")),
                    (f.style.width = "0"),
                    (f.style.marginRight = "0"),
                    q.appendChild(f),
                    (g.reliableMarginRight = 0 === (parseInt((G.defaultView.getComputedStyle(f, null) || { marginRight: 0 }).marginRight, 10) || 0))),
                q.attachEvent)
            )
                for (o in { submit: 1, change: 1, focusin: 1 }) (n = "on" + o), (p = n in q), p || (q.setAttribute(n, "return;"), (p = "function" == typeof q[n])), (g[o + "Bubbles"] = p);
            return (
                J(function () {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f = 1,
                        h = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
                        j = "visibility:hidden;border:0;",
                        l = "style='" + h + "border:5px solid #000;padding:0;'",
                        m = "<div " + l + "><div></div></div><table " + l + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                    (i = G.getElementsByTagName("body")[0]),
                        !i ||
                            ((a = G.createElement("div")),
                            (a.style.cssText = j + "width:0;height:0;position:static;top:0;margin-top:" + f + "px"),
                            i.insertBefore(a, i.firstChild),
                            (k = G.createElement("div")),
                            (k.style.cssText = h + j),
                            (k.innerHTML = m),
                            a.appendChild(k),
                            (b = k.firstChild),
                            (c = b.firstChild),
                            (d = b.nextSibling.firstChild.firstChild),
                            (e = { doesNotAddBorder: 5 !== c.offsetTop, doesAddBorderForTableAndCells: 5 === d.offsetTop }),
                            (c.style.position = "fixed"),
                            (c.style.top = "20px"),
                            (e.fixedPosition = 20 === c.offsetTop || 15 === c.offsetTop),
                            (c.style.position = c.style.top = ""),
                            (b.style.overflow = "hidden"),
                            (b.style.position = "relative"),
                            (e.subtractsBorderForOverflowNotVisible = -5 === c.offsetTop),
                            (e.doesNotIncludeMarginInBodyOffset = i.offsetTop !== f),
                            i.removeChild(a),
                            (k = a = null),
                            J.extend(g, e));
                }),
                (k.innerHTML = ""),
                j.removeChild(k),
                (k = h = c = d = i = f = q = e = null),
                g
            );
        })()),
        (J.boxModel = J.support.boxModel);
    var M = /^(?:\{.*\}|\[.*\])$/,
        N = /([A-Z])/g;
    J.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
        hasData: function (a) {
            return (a = a.nodeType ? J.cache[a[J.expando]] : a[J.expando]), !!a && !D(a);
        },
        data: function (a, c, d, e) {
            if (J.acceptData(a)) {
                var f,
                    g,
                    h,
                    i = (J.expando, "string" == typeof c),
                    j = a.nodeType,
                    k = j ? J.cache : a,
                    l = j ? a[J.expando] : a[J.expando] && J.expando,
                    m = "events" === c;
                if (!((l && k[l] && (m || e || k[l].data)) || !i || d !== b)) return;
                return (
                    l || (j ? (a[J.expando] = l = ++J.uuid) : (l = J.expando)),
                    k[l] || ((k[l] = {}), j || (k[l].toJSON = J.noop)),
                    ("object" == typeof c || "function" == typeof c) && (e ? (k[l] = J.extend(k[l], c)) : (k[l].data = J.extend(k[l].data, c))),
                    (f = g = k[l]),
                    e || (g.data || (g.data = {}), (g = g.data)),
                    d !== b && (g[J.camelCase(c)] = d),
                    m && !g[c] ? f.events : (i ? ((h = g[c]), null == h && (h = g[J.camelCase(c)])) : (h = g), h)
                );
            }
        },
        removeData: function (a, b, c) {
            if (J.acceptData(a)) {
                var d,
                    e,
                    f,
                    g = (J.expando, a.nodeType),
                    h = g ? J.cache : a,
                    i = g ? a[J.expando] : J.expando;
                if (!h[i]) return;
                if (b && (d = c ? h[i] : h[i].data)) {
                    J.isArray(b) ? (b = b) : b in d ? (b = [b]) : ((b = J.camelCase(b)), (b = b in d ? [b] : b.split(" ")));
                    for (e = 0, f = b.length; f > e; e++) delete d[b[e]];
                    if (!(c ? D : J.isEmptyObject)(d)) return;
                }
                if (!c && (delete h[i].data, !D(h[i]))) return;
                J.support.deleteExpando || !h.setInterval ? delete h[i] : (h[i] = null), g && (J.support.deleteExpando ? delete a[J.expando] : a.removeAttribute ? a.removeAttribute(J.expando) : (a[J.expando] = null));
            }
        },
        _data: function (a, b, c) {
            return J.data(a, b, c, !0);
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = J.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b;
            }
            return !0;
        },
    }),
        J.fn.extend({
            data: function (a, c) {
                var d,
                    e,
                    f,
                    g = null;
                if ("undefined" == typeof a) {
                    if (this.length && ((g = J.data(this[0])), 1 === this[0].nodeType && !J._data(this[0], "parsedAttrs"))) {
                        e = this[0].attributes;
                        for (var h = 0, i = e.length; i > h; h++) (f = e[h].name), 0 === f.indexOf("data-") && ((f = J.camelCase(f.substring(5))), E(this[0], f, g[f]));
                        J._data(this[0], "parsedAttrs", !0);
                    }
                    return g;
                }
                return "object" == typeof a
                    ? this.each(function () {
                          J.data(this, a);
                      })
                    : ((d = a.split(".")),
                      (d[1] = d[1] ? "." + d[1] : ""),
                      c === b
                          ? ((g = this.triggerHandler("getData" + d[1] + "!", [d[0]])), g === b && this.length && ((g = J.data(this[0], a)), (g = E(this[0], a, g))), g === b && d[1] ? this.data(d[0]) : g)
                          : this.each(function () {
                                var b = J(this),
                                    e = [d[0], c];
                                b.triggerHandler("setData" + d[1] + "!", e), J.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e);
                            }));
            },
            removeData: function (a) {
                return this.each(function () {
                    J.removeData(this, a);
                });
            },
        }),
        J.extend({
            _mark: function (a, b) {
                a && ((b = (b || "fx") + "mark"), J._data(a, b, (J._data(a, b) || 0) + 1));
            },
            _unmark: function (a, b, c) {
                if ((a !== !0 && ((c = b), (b = a), (a = !1)), b)) {
                    c = c || "fx";
                    var d = c + "mark",
                        e = a ? 0 : (J._data(b, d) || 1) - 1;
                    e ? J._data(b, d, e) : (J.removeData(b, d, !0), C(b, c, "mark"));
                }
            },
            queue: function (a, b, c) {
                var d;
                return a ? ((b = (b || "fx") + "queue"), (d = J._data(a, b)), c && (!d || J.isArray(c) ? (d = J._data(a, b, J.makeArray(c))) : d.push(c)), d || []) : void 0;
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = J.queue(a, b),
                    d = c.shift(),
                    e = {};
                "inprogress" === d && (d = c.shift()),
                    d &&
                        ("fx" === b && c.unshift("inprogress"),
                        J._data(a, b + ".run", e),
                        d.call(
                            a,
                            function () {
                                J.dequeue(a, b);
                            },
                            e
                        )),
                    c.length || (J.removeData(a, b + "queue " + b + ".run", !0), C(a, b, "queue"));
            },
        }),
        J.fn.extend({
            queue: function (a, c) {
                return (
                    "string" != typeof a && ((c = a), (a = "fx")),
                    c === b
                        ? J.queue(this[0], a)
                        : this.each(function () {
                              var b = J.queue(this, a, c);
                              "fx" === a && "inprogress" !== b[0] && J.dequeue(this, a);
                          })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    J.dequeue(this, a);
                });
            },
            delay: function (a, b) {
                return (
                    (a = J.fx ? J.fx.speeds[a] || a : a),
                    (b = b || "fx"),
                    this.queue(b, function (b, c) {
                        var d = setTimeout(b, a);
                        c.stop = function () {
                            clearTimeout(d);
                        };
                    })
                );
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, c) {
                function d() {
                    --i || f.resolveWith(g, [g]);
                }
                "string" != typeof a && ((c = a), (a = b)), (a = a || "fx");
                for (var e, f = J.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--; )
                    (e = J.data(g[h], j, b, !0) || ((J.data(g[h], k, b, !0) || J.data(g[h], l, b, !0)) && J.data(g[h], j, J.Callbacks("once memory"), !0))) && (i++, e.add(d));
                return d(), f.promise();
            },
        });
    var O,
        P,
        Q,
        R = /[\n\t\r]/g,
        S = /\s+/,
        T = /\r/g,
        U = /^(?:button|input)$/i,
        V = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea)?$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Y = J.support.getSetAttribute;
    J.fn.extend({
        attr: function (a, b) {
            return J.access(this, a, b, !0, J.attr);
        },
        removeAttr: function (a) {
            return this.each(function () {
                J.removeAttr(this, a);
            });
        },
        prop: function (a, b) {
            return J.access(this, a, b, !0, J.prop);
        },
        removeProp: function (a) {
            return (
                (a = J.propFix[a] || a),
                this.each(function () {
                    try {
                        (this[a] = b), delete this[a];
                    } catch (c) {}
                })
            );
        },
        addClass: function (a) {
            var b, c, d, e, f, g, h;
            if (J.isFunction(a))
                return this.each(function (b) {
                    J(this).addClass(a.call(this, b, this.className));
                });
            if (a && "string" == typeof a)
                for (b = a.split(S), c = 0, d = this.length; d > c; c++)
                    if (((e = this[c]), 1 === e.nodeType))
                        if (e.className || 1 !== b.length) {
                            for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                            e.className = J.trim(f);
                        } else e.className = a;
            return this;
        },
        removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if (J.isFunction(a))
                return this.each(function (b) {
                    J(this).removeClass(a.call(this, b, this.className));
                });
            if ((a && "string" == typeof a) || a === b)
                for (c = (a || "").split(S), d = 0, e = this.length; e > d; d++)
                    if (((f = this[d]), 1 === f.nodeType && f.className))
                        if (a) {
                            for (g = (" " + f.className + " ").replace(R, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                            f.className = J.trim(g);
                        } else f.className = "";
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return J.isFunction(a)
                ? this.each(function (c) {
                      J(this).toggleClass(a.call(this, c, this.className, b), b);
                  })
                : this.each(function () {
                      if ("string" === c) for (var e, f = 0, g = J(this), h = b, i = a.split(S); (e = i[f++]); ) (h = d ? h : !g.hasClass(e)), g[h ? "addClass" : "removeClass"](e);
                      else ("undefined" === c || "boolean" === c) && (this.className && J._data(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : J._data(this, "__className__") || ""));
                  });
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(R, " ").indexOf(b) > -1) return !0;
            return !1;
        },
        val: function (a) {
            var c,
                d,
                e,
                f = this[0];
            return arguments.length
                ? ((e = J.isFunction(a)),
                  this.each(function (d) {
                      var f,
                          g = J(this);
                      1 === this.nodeType &&
                          ((f = e ? a.call(this, d, g.val()) : a),
                          null == f
                              ? (f = "")
                              : "number" == typeof f
                              ? (f += "")
                              : J.isArray(f) &&
                                (f = J.map(f, function (a) {
                                    return null == a ? "" : a + "";
                                })),
                          (c = J.valHooks[this.nodeName.toLowerCase()] || J.valHooks[this.type]),
                          (c && "set" in c && c.set(this, f, "value") !== b) || (this.value = f));
                  }))
                : f
                ? ((c = J.valHooks[f.nodeName.toLowerCase()] || J.valHooks[f.type]), c && "get" in c && (d = c.get(f, "value")) !== b ? d : ((d = f.value), "string" == typeof d ? d.replace(T, "") : null == d ? "" : d))
                : b;
        },
    }),
        J.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text;
                    },
                },
                select: {
                    get: function (a) {
                        var b,
                            c,
                            d,
                            e,
                            f = a.selectedIndex,
                            g = [],
                            h = a.options,
                            i = "select-one" === a.type;
                        if (0 > f) return null;
                        for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)
                            if (((e = h[c]), !(!e.selected || (J.support.optDisabled ? e.disabled : null !== e.getAttribute("disabled")) || (e.parentNode.disabled && J.nodeName(e.parentNode, "optgroup"))))) {
                                if (((b = J(e).val()), i)) return b;
                                g.push(b);
                            }
                        return i && !g.length && h.length ? J(h[f]).val() : g;
                    },
                    set: function (a, b) {
                        var c = J.makeArray(b);
                        return (
                            J(a)
                                .find("option")
                                .each(function () {
                                    this.selected = J.inArray(J(this).val(), c) >= 0;
                                }),
                            c.length || (a.selectedIndex = -1),
                            c
                        );
                    },
                },
            },
            attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 },
            attr: function (a, c, d, e) {
                var f,
                    g,
                    h,
                    i = a.nodeType;
                return a && 3 !== i && 8 !== i && 2 !== i
                    ? e && c in J.attrFn
                        ? J(a)[c](d)
                        : "getAttribute" in a
                        ? ((h = 1 !== i || !J.isXMLDoc(a)),
                          h && ((c = c.toLowerCase()), (g = J.attrHooks[c] || (X.test(c) ? P : O))),
                          d !== b
                              ? null === d
                                  ? (J.removeAttr(a, c), b)
                                  : g && "set" in g && h && (f = g.set(a, d, c)) !== b
                                  ? f
                                  : (a.setAttribute(c, "" + d), d)
                              : g && "get" in g && h && null !== (f = g.get(a, c))
                              ? f
                              : ((f = a.getAttribute(c)), null === f ? b : f))
                        : J.prop(a, c, d)
                    : b;
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e,
                    f,
                    g = 0;
                if (1 === a.nodeType) for (d = (b || "").split(S), f = d.length; f > g; g++) (e = d[g].toLowerCase()), (c = J.propFix[e] || e), J.attr(a, e, ""), a.removeAttribute(Y ? e : c), X.test(e) && c in a && (a[c] = !1);
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (U.test(a.nodeName) && a.parentNode) J.error("type property can't be changed");
                        else if (!J.support.radioValue && "radio" === b && J.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b;
                        }
                    },
                },
                value: {
                    get: function (a, b) {
                        return O && J.nodeName(a, "button") ? O.get(a, b) : b in a ? a.value : null;
                    },
                    set: function (a, b, c) {
                        return O && J.nodeName(a, "button") ? O.set(a, b, c) : void (a.value = b);
                    },
                },
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable",
            },
            prop: function (a, c, d) {
                var e,
                    f,
                    g,
                    h = a.nodeType;
                return a && 3 !== h && 8 !== h && 2 !== h
                    ? ((g = 1 !== h || !J.isXMLDoc(a)),
                      g && ((c = J.propFix[c] || c), (f = J.propHooks[c])),
                      d !== b ? (f && "set" in f && (e = f.set(a, d, c)) !== b ? e : (a[c] = d)) : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c])
                    : b;
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : V.test(a.nodeName) || (W.test(a.nodeName) && a.href) ? 0 : b;
                    },
                },
            },
        }),
        (J.attrHooks.tabindex = J.propHooks.tabIndex),
        (P = {
            get: function (a, c) {
                var d,
                    e = J.prop(a, c);
                return e === !0 || ("boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1) ? c.toLowerCase() : b;
            },
            set: function (a, b, c) {
                var d;
                return b === !1 ? J.removeAttr(a, c) : ((d = J.propFix[c] || c), d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c;
            },
        }),
        Y ||
            ((Q = { name: !0, id: !0 }),
            (O = J.valHooks.button = {
                get: function (a, c) {
                    var d;
                    return (d = a.getAttributeNode(c)), d && (Q[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b;
                },
                set: function (a, b, c) {
                    var d = a.getAttributeNode(c);
                    return d || ((d = G.createAttribute(c)), a.setAttributeNode(d)), (d.nodeValue = b + "");
                },
            }),
            (J.attrHooks.tabindex.set = O.set),
            J.each(["width", "height"], function (a, b) {
                J.attrHooks[b] = J.extend(J.attrHooks[b], {
                    set: function (a, c) {
                        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
                    },
                });
            }),
            (J.attrHooks.contenteditable = {
                get: O.get,
                set: function (a, b, c) {
                    "" === b && (b = "false"), O.set(a, b, c);
                },
            })),
        J.support.hrefNormalized ||
            J.each(["href", "src", "width", "height"], function (a, c) {
                J.attrHooks[c] = J.extend(J.attrHooks[c], {
                    get: function (a) {
                        var d = a.getAttribute(c, 2);
                        return null === d ? b : d;
                    },
                });
            }),
        J.support.style ||
            (J.attrHooks.style = {
                get: function (a) {
                    return a.style.cssText.toLowerCase() || b;
                },
                set: function (a, b) {
                    return (a.style.cssText = "" + b);
                },
            }),
        J.support.optSelected ||
            (J.propHooks.selected = J.extend(J.propHooks.selected, {
                get: function (a) {
                    var b = a.parentNode;
                    return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
                },
            })),
        J.support.enctype || (J.propFix.enctype = "encoding"),
        J.support.checkOn ||
            J.each(["radio", "checkbox"], function () {
                J.valHooks[this] = {
                    get: function (a) {
                        return null === a.getAttribute("value") ? "on" : a.value;
                    },
                };
            }),
        J.each(["radio", "checkbox"], function () {
            J.valHooks[this] = J.extend(J.valHooks[this], {
                set: function (a, b) {
                    return J.isArray(b) ? (a.checked = J.inArray(J(a).val(), b) >= 0) : void 0;
                },
            });
        });
    var Z = /^(?:textarea|input|select)$/i,
        $ = /^([^\.]*)?(?:\.(.+))?$/,
        _ = /\bhover(\.\S+)?/,
        aa = /^key/,
        ba = /^(?:mouse|contextmenu)|click/,
        ca = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        da = function (a) {
            var b = ca.exec(a);
            return b && ((b[1] = (b[1] || "").toLowerCase()), (b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"))), b;
        },
        ea = function (a, b) {
            return !((b[1] && a.nodeName.toLowerCase() !== b[1]) || (b[2] && a.id !== b[2]) || (b[3] && !b[3].test(a.className)));
        },
        fa = function (a) {
            return J.event.special.hover ? a : a.replace(_, "mouseenter$1 mouseleave$1");
        };
    (J.event = {
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = J._data(a))) {
                for (
                    d.handler && ((o = d), (d = o.handler)),
                        d.guid || (d.guid = J.guid++),
                        i = g.events,
                        i || (g.events = i = {}),
                        h = g.handle,
                        h ||
                            ((g.handle = h = function (a) {
                                return "undefined" == typeof J || (a && J.event.triggered === a.type) ? b : J.event.dispatch.apply(h.elem, arguments);
                            }),
                            (h.elem = a)),
                        c = fa(c).split(" "),
                        j = 0;
                    j < c.length;
                    j++
                )
                    (k = $.exec(c[j]) || []),
                        (l = k[1]),
                        (m = (k[2] || "").split(".").sort()),
                        (q = J.event.special[l] || {}),
                        (l = (f ? q.delegateType : q.bindType) || l),
                        (q = J.event.special[l] || {}),
                        (n = J.extend({ type: l, origType: k[1], data: e, handler: d, guid: d.guid, selector: f, namespace: m.join(".") }, o)),
                        f && ((n.quick = da(f)), !n.quick && J.expr.match.POS.test(f) && (n.isPositional = !0)),
                        (p = i[l]),
                        p || ((p = i[l] = []), (p.delegateCount = 0), (q.setup && q.setup.call(a, e, m, h) !== !1) || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))),
                        q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
                        f ? p.splice(p.delegateCount++, 0, n) : p.push(n),
                        (J.event.global[l] = !0);
                a = null;
            }
        },
        global: {},
        remove: function (a, b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p = J.hasData(a) && J._data(a);
            if (p && (k = p.events)) {
                for (b = fa(b || "").split(" "), e = 0; e < b.length; e++) {
                    if (((f = $.exec(b[e]) || []), (g = f[1]), (h = f[2]), !g)) {
                        h = h ? "." + h : "";
                        for (j in k) J.event.remove(a, j + h, c, d);
                        return;
                    }
                    if (
                        ((l = J.event.special[g] || {}),
                        (g = (d ? l.delegateType : l.bindType) || g),
                        (n = k[g] || []),
                        (i = n.length),
                        (h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null),
                        c || h || d || l.remove)
                    )
                        for (j = 0; j < n.length; j++)
                            (o = n[j]),
                                (c && c.guid !== o.guid) || ((!h || h.test(o.namespace)) && (!d || d === o.selector || ("**" === d && o.selector)) && (n.splice(j--, 1), o.selector && n.delegateCount--, l.remove && l.remove.call(a, o)));
                    else n.length = 0;
                    0 === n.length && i !== n.length && ((!l.teardown || l.teardown.call(a, h) === !1) && J.removeEvent(a, g, p.handle), delete k[g]);
                }
                J.isEmptyObject(k) && ((m = p.handle), m && (m.elem = null), J.removeData(a, ["events", "handle"], !0));
            }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function (c, d, e, f) {
            if (!e || (3 !== e.nodeType && 8 !== e.nodeType)) {
                var g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q = c.type || c,
                    r = [];
                if ((q.indexOf("!") >= 0 && ((q = q.slice(0, -1)), (h = !0)), q.indexOf(".") >= 0 && ((r = q.split(".")), (q = r.shift()), r.sort()), (!e || J.event.customEvent[q]) && !J.event.global[q])) return;
                if (
                    ((c = "object" == typeof c ? (c[J.expando] ? c : new J.Event(q, c)) : new J.Event(q)),
                    (c.type = q),
                    (c.isTrigger = !0),
                    (c.exclusive = h),
                    (c.namespace = r.join(".")),
                    (c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null),
                    (l = q.indexOf(":") < 0 ? "on" + q : ""),
                    (f || !e) && c.preventDefault(),
                    !e)
                ) {
                    g = J.cache;
                    for (i in g) g[i].events && g[i].events[q] && J.event.trigger(c, d, g[i].handle.elem, !0);
                    return;
                }
                if (((c.result = b), c.target || (c.target = e), (d = null != d ? J.makeArray(d) : []), d.unshift(c), (m = J.event.special[q] || {}), m.trigger && m.trigger.apply(e, d) === !1)) return;
                if (((o = [[e, m.bindType || q]]), !f && !m.noBubble && !J.isWindow(e))) {
                    for (p = m.delegateType || q, k = null, j = e.parentNode; j; j = j.parentNode) o.push([j, p]), (k = j);
                    k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p]);
                }
                for (
                    i = 0;
                    i < o.length &&
                    ((j = o[i][0]), (c.type = o[i][1]), (n = (J._data(j, "events") || {})[c.type] && J._data(j, "handle")), n && n.apply(j, d), (n = l && j[l]), n && J.acceptData(j) && n.apply(j, d), !c.isPropagationStopped());
                    i++
                );
                return (
                    (c.type = q),
                    c.isDefaultPrevented() ||
                        ((!m._default || m._default.apply(e.ownerDocument, d) === !1) &&
                            ("click" !== q || !J.nodeName(e, "a")) &&
                            J.acceptData(e) &&
                            l &&
                            e[q] &&
                            (("focus" !== q && "blur" !== q) || 0 !== c.target.offsetWidth) &&
                            !J.isWindow(e) &&
                            ((k = e[l]), k && (e[l] = null), (J.event.triggered = q), e[q](), (J.event.triggered = b), k && (e[l] = k))),
                    c.result
                );
            }
        },
        dispatch: function (c) {
            c = J.event.fix(c || a.event);
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n = (J._data(this, "events") || {})[c.type] || [],
                o = n.delegateCount,
                p = [].slice.call(arguments, 0),
                q = !c.exclusive && !c.namespace,
                r = (J.event.special[c.type] || {}).handle,
                s = [];
            if (((p[0] = c), (c.delegateTarget = this), o && !c.target.disabled && (!c.button || "click" !== c.type)))
                for (f = c.target; f != this; f = f.parentNode || this) {
                    for (h = {}, j = [], d = 0; o > d; d++) (k = n[d]), (l = k.selector), (m = h[l]), k.isPositional ? (m = (m || (h[l] = J(l))).index(f) >= 0) : m === b && (m = h[l] = k.quick ? ea(f, k.quick) : J(f).is(l)), m && j.push(k);
                    j.length && s.push({ elem: f, matches: j });
                }
            for (n.length > o && s.push({ elem: this, matches: n.slice(o) }), d = 0; d < s.length && !c.isPropagationStopped(); d++)
                for (i = s[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++)
                    (k = i.matches[e]),
                        (q || (!c.namespace && !k.namespace) || (c.namespace_re && c.namespace_re.test(k.namespace))) &&
                            ((c.data = k.data), (c.handleObj = k), (g = (r || k.handler).apply(i.elem, p)), g !== b && ((c.result = g), g === !1 && (c.preventDefault(), c.stopPropagation())));
            return c.result;
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
            filter: function (a, c) {
                var d,
                    e,
                    f,
                    g = c.button,
                    h = c.fromElement;
                return (
                    null == a.pageX &&
                        null != c.clientX &&
                        ((d = a.target.ownerDocument || G),
                        (e = d.documentElement),
                        (f = d.body),
                        (a.pageX = c.clientX + ((e && e.scrollLeft) || (f && f.scrollLeft) || 0) - ((e && e.clientLeft) || (f && f.clientLeft) || 0)),
                        (a.pageY = c.clientY + ((e && e.scrollTop) || (f && f.scrollTop) || 0) - ((e && e.clientTop) || (f && f.clientTop) || 0))),
                    !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h),
                    !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                    a
                );
            },
        },
        fix: function (a) {
            if (a[J.expando]) return a;
            var c,
                d,
                e = a,
                f = J.event.fixHooks[a.type] || {},
                g = f.props ? this.props.concat(f.props) : this.props;
            for (a = J.Event(e), c = g.length; c; ) (d = g[--c]), (a[d] = e[d]);
            return a.target || (a.target = e.srcElement || G), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a;
        },
        special: {
            ready: { setup: J.bindReady },
            focus: { delegateType: "focusin", noBubble: !0 },
            blur: { delegateType: "focusout", noBubble: !0 },
            beforeunload: {
                setup: function (a, b, c) {
                    J.isWindow(this) && (this.onbeforeunload = c);
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null);
                },
            },
        },
        simulate: function (a, b, c, d) {
            var e = J.extend(new J.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? J.event.trigger(e, null, b) : J.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        },
    }),
        (J.event.handle = J.event.dispatch),
        (J.removeEvent = G.removeEventListener
            ? function (a, b, c) {
                  a.removeEventListener && a.removeEventListener(b, c, !1);
              }
            : function (a, b, c) {
                  a.detachEvent && a.detachEvent("on" + b, c);
              }),
        (J.Event = function (a, b) {
            return this instanceof J.Event
                ? (a && a.type ? ((this.originalEvent = a), (this.type = a.type), (this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || (a.getPreventDefault && a.getPreventDefault()) ? A : B)) : (this.type = a),
                  b && J.extend(this, b),
                  (this.timeStamp = (a && a.timeStamp) || J.now()),
                  (this[J.expando] = !0),
                  void 0)
                : new J.Event(a, b);
        }),
        (J.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = A;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
            },
            stopPropagation: function () {
                this.isPropagationStopped = A;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                (this.isImmediatePropagationStopped = A), this.stopPropagation();
            },
            isDefaultPrevented: B,
            isPropagationStopped: B,
            isImmediatePropagationStopped: B,
        }),
        J.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) {
            J.event.special[a] = J.event.special[b] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var b,
                        c,
                        d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    f.selector;
                    return (!e || f.origType === a.type || (e !== d && !J.contains(d, e))) && ((b = a.type), (a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
                },
            };
        }),
        J.support.submitBubbles ||
            (J.event.special.submit = {
                setup: function () {
                    return J.nodeName(this, "form")
                        ? !1
                        : void J.event.add(this, "click._submit keypress._submit", function (a) {
                              var c = a.target,
                                  d = J.nodeName(c, "input") || J.nodeName(c, "button") ? c.form : b;
                              d &&
                                  !d._submit_attached &&
                                  (J.event.add(d, "submit._submit", function (a) {
                                      this.parentNode && J.event.simulate("submit", this.parentNode, a, !0);
                                  }),
                                  (d._submit_attached = !0));
                          });
                },
                teardown: function () {
                    return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit");
                },
            }),
        J.support.changeBubbles ||
            (J.event.special.change = {
                setup: function () {
                    return Z.test(this.nodeName)
                        ? (("checkbox" === this.type || "radio" === this.type) &&
                              (J.event.add(this, "propertychange._change", function (a) {
                                  "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
                              }),
                              J.event.add(this, "click._change", function (a) {
                                  this._just_changed && ((this._just_changed = !1), J.event.simulate("change", this, a, !0));
                              })),
                          !1)
                        : void J.event.add(this, "beforeactivate._change", function (a) {
                              var b = a.target;
                              Z.test(b.nodeName) &&
                                  !b._change_attached &&
                                  (J.event.add(b, "change._change", function (a) {
                                      this.parentNode && !a.isSimulated && J.event.simulate("change", this.parentNode, a, !0);
                                  }),
                                  (b._change_attached = !0));
                          });
                },
                handle: function (a) {
                    var b = a.target;
                    return this !== b || a.isSimulated || a.isTrigger || ("radio" !== b.type && "checkbox" !== b.type) ? a.handleObj.handler.apply(this, arguments) : void 0;
                },
                teardown: function () {
                    return J.event.remove(this, "._change"), Z.test(this.nodeName);
                },
            }),
        J.support.focusinBubbles ||
            J.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                var c = 0,
                    d = function (a) {
                        J.event.simulate(b, a.target, J.event.fix(a), !0);
                    };
                J.event.special[b] = {
                    setup: function () {
                        0 === c++ && G.addEventListener(a, d, !0);
                    },
                    teardown: function () {
                        0 === --c && G.removeEventListener(a, d, !0);
                    },
                };
            }),
        J.fn.extend({
            on: function (a, c, d, e, f) {
                var g, h;
                if ("object" == typeof a) {
                    "string" != typeof c && ((d = c), (c = b));
                    for (h in a) this.on(h, c, d, a[h], f);
                    return this;
                }
                if ((null == d && null == e ? ((e = c), (d = c = b)) : null == e && ("string" == typeof c ? ((e = d), (d = b)) : ((e = d), (d = c), (c = b))), e === !1)) e = B;
                else if (!e) return this;
                return (
                    1 === f &&
                        ((g = e),
                        (e = function (a) {
                            return J().off(a), g.apply(this, arguments);
                        }),
                        (e.guid = g.guid || (g.guid = J.guid++))),
                    this.each(function () {
                        J.event.add(this, a, e, d, c);
                    })
                );
            },
            one: function (a, b, c, d) {
                return this.on.call(this, a, b, c, d, 1);
            },
            off: function (a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    return J(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler), this;
                }
                if ("object" == typeof a) {
                    for (var f in a) this.off(f, c, a[f]);
                    return this;
                }
                return (
                    (c === !1 || "function" == typeof c) && ((d = c), (c = b)),
                    d === !1 && (d = B),
                    this.each(function () {
                        J.event.remove(this, a, d, c);
                    })
                );
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            live: function (a, b, c) {
                return J(this.context).on(a, this.selector, b, c), this;
            },
            die: function (a, b) {
                return J(this.context).off(a, this.selector || "**", b), this;
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c);
            },
            trigger: function (a, b) {
                return this.each(function () {
                    J.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                return this[0] ? J.event.trigger(a, b, this[0], !0) : void 0;
            },
            toggle: function (a) {
                var b = arguments,
                    c = a.guid || J.guid++,
                    d = 0,
                    e = function (c) {
                        var e = (J._data(this, "lastToggle" + a.guid) || 0) % d;
                        return J._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1;
                    };
                for (e.guid = c; d < b.length; ) b[d++].guid = c;
                return this.click(e);
            },
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
        }),
        J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            a,
            b
        ) {
            (J.fn[b] = function (a, c) {
                return null == c && ((c = a), (a = null)), arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b);
            }),
                J.attrFn && (J.attrFn[b] = !0),
                aa.test(b) && (J.event.fixHooks[b] = J.event.keyHooks),
                ba.test(b) && (J.event.fixHooks[b] = J.event.mouseHooks);
        }),
        (function () {
            function a(a, b, c, d, f, g) {
                for (var h = 0, i = d.length; i > h; h++) {
                    var j = d[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j; ) {
                            if (j[e] === c) {
                                k = d[j.sizset];
                                break;
                            }
                            if (1 === j.nodeType)
                                if ((g || ((j[e] = c), (j.sizset = h)), "string" != typeof b)) {
                                    if (j === b) {
                                        k = !0;
                                        break;
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break;
                                }
                            j = j[a];
                        }
                        d[h] = k;
                    }
                }
            }
            function c(a, b, c, d, f, g) {
                for (var h = 0, i = d.length; i > h; h++) {
                    var j = d[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j; ) {
                            if (j[e] === c) {
                                k = d[j.sizset];
                                break;
                            }
                            if ((1 === j.nodeType && !g && ((j[e] = c), (j.sizset = h)), j.nodeName.toLowerCase() === b)) {
                                k = j;
                                break;
                            }
                            j = j[a];
                        }
                        d[h] = k;
                    }
                }
            }
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = "sizcache" + (Math.random() + "").replace(".", ""),
                f = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function () {
                return (i = !1), 0;
            });
            var m = function (a, b, c, e) {
                (c = c || []), (b = b || G);
                var f = b;
                if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                if (!a || "string" != typeof a) return c;
                var h,
                    i,
                    j,
                    k,
                    l,
                    n,
                    q,
                    r,
                    t = !0,
                    u = m.isXML(b),
                    v = [],
                    x = a;
                do
                    if ((d.exec(""), (h = d.exec(x)), h && ((x = h[3]), v.push(h[1]), h[2]))) {
                        k = h[3];
                        break;
                    }
                while (h);
                if (v.length > 1 && p.exec(a))
                    if (2 === v.length && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
                    else for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length; ) (a = v.shift()), o.relative[a] && (a += v.shift()), (i = w(a, i, e));
                else if ((!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && ((l = m.find(v.shift(), b, u)), (b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0])), b))
                    for (
                        l = e ? { expr: v.pop(), set: s(e) } : m.find(v.pop(), 1 !== v.length || ("~" !== v[0] && "+" !== v[0]) || !b.parentNode ? b : b.parentNode, u),
                            i = l.expr ? m.filter(l.expr, l.set) : l.set,
                            v.length > 0 ? (j = s(i)) : (t = !1);
                        v.length;

                    )
                        (n = v.pop()), (q = n), o.relative[n] ? (q = v.pop()) : (n = ""), null == q && (q = b), o.relative[n](j, q, u);
                else j = v = [];
                if ((j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j)))
                    if (t)
                        if (b && 1 === b.nodeType) for (r = 0; null != j[r]; r++) j[r] && (j[r] === !0 || (1 === j[r].nodeType && m.contains(b, j[r]))) && c.push(i[r]);
                        else for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
                    else c.push.apply(c, j);
                else s(j, c);
                return k && (m(k, f, c, e), m.uniqueSort(c)), c;
            };
            (m.uniqueSort = function (a) {
                if (u && ((h = i), a.sort(u), h)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a;
            }),
                (m.matches = function (a, b) {
                    return m(a, null, null, b);
                }),
                (m.matchesSelector = function (a, b) {
                    return m(b, null, null, [a]).length > 0;
                }),
                (m.find = function (a, b, c) {
                    var d, e, f, g, h, i;
                    if (!a) return [];
                    for (e = 0, f = o.order.length; f > e; e++)
                        if (((h = o.order[e]), (g = o.leftMatch[h].exec(a)) && ((i = g[1]), g.splice(1, 1), "\\" !== i.substr(i.length - 1) && ((g[1] = (g[1] || "").replace(j, "")), (d = o.find[h](g, b, c)), null != d)))) {
                            a = a.replace(o.match[h], "");
                            break;
                        }
                    return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), { set: d, expr: a };
                }),
                (m.filter = function (a, c, d, e) {
                    for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length; ) {
                        for (h in o.filter)
                            if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                                if (((k = o.filter[h]), (l = f[1]), (g = !1), f.splice(1, 1), "\\" === l.substr(l.length - 1))) continue;
                                if ((s === r && (r = []), o.preFilter[h]))
                                    if ((f = o.preFilter[h](f, s, d, r, e, t))) {
                                        if (f === !0) continue;
                                    } else g = i = !0;
                                if (f) for (n = 0; null != (j = s[n]); n++) j && ((i = k(j, f, n, s)), (p = e ^ i), d && null != i ? (p ? (g = !0) : (s[n] = !1)) : p && (r.push(j), (g = !0)));
                                if (i !== b) {
                                    if ((d || (s = r), (a = a.replace(o.match[h], "")), !g)) return [];
                                    break;
                                }
                            }
                        if (a === q) {
                            if (null != g) break;
                            m.error(a);
                        }
                        q = a;
                    }
                    return s;
                }),
                (m.error = function (a) {
                    throw "Syntax error, unrecognized expression: " + a;
                });
            var n = (m.getText = function (a) {
                    var b,
                        c,
                        d = a.nodeType,
                        e = "";
                    if (d) {
                        if (1 === d) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a);
                        } else if (3 === d || 4 === d) return a.nodeValue;
                    } else for (b = 0; (c = a[b]); b++) 8 !== c.nodeType && (e += n(c));
                    return e;
                }),
                o = (m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
                    },
                    leftMatch: {},
                    attrMap: { class: "className", for: "htmlFor" },
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute("href");
                        },
                        type: function (a) {
                            return a.getAttribute("type");
                        },
                    },
                    relative: {
                        "+": function (a, b) {
                            var c = "string" == typeof b,
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f, g = 0, h = a.length; h > g; g++)
                                if ((f = a[g])) {
                                    for (; (f = f.previousSibling) && 1 !== f.nodeType; );
                                    a[g] = e || (f && f.nodeName.toLowerCase() === b) ? f || !1 : f === b;
                                }
                            e && m.filter(b, a, !0);
                        },
                        ">": function (a, b) {
                            var c,
                                d = "string" == typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                for (b = b.toLowerCase(); f > e; e++)
                                    if ((c = a[e])) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1;
                                    }
                            } else {
                                for (; f > e; e++) (c = a[e]), c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0);
                            }
                        },
                        "": function (b, d, e) {
                            var g,
                                h = f++,
                                i = a;
                            "string" == typeof d && !l.test(d) && ((d = d.toLowerCase()), (g = d), (i = c)), i("parentNode", d, h, b, g, e);
                        },
                        "~": function (b, d, e) {
                            var g,
                                h = f++,
                                i = a;
                            "string" == typeof d && !l.test(d) && ((d = d.toLowerCase()), (g = d), (i = c)), i("previousSibling", d, h, b, g, e);
                        },
                    },
                    find: {
                        ID: function (a, b, c) {
                            if ("undefined" != typeof b.getElementById && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : [];
                            }
                        },
                        NAME: function (a, b) {
                            if ("undefined" != typeof b.getElementsByName) {
                                for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return 0 === c.length ? null : c;
                            }
                        },
                        TAG: function (a, b) {
                            return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0;
                        },
                    },
                    preFilter: {
                        CLASS: function (a, b, c, d, e, f) {
                            if (((a = " " + a[1].replace(j, "") + " "), f)) return a;
                            for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                            return !1;
                        },
                        ID: function (a) {
                            return a[1].replace(j, "");
                        },
                        TAG: function (a, b) {
                            return a[1].replace(j, "").toLowerCase();
                        },
                        CHILD: function (a) {
                            if ("nth" === a[1]) {
                                a[2] || m.error(a[0]), (a[2] = a[2].replace(/^\+|\s*/g, ""));
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(("even" === a[2] && "2n") || ("odd" === a[2] && "2n+1") || (!/\D/.test(a[2]) && "0n+" + a[2]) || a[2]);
                                (a[2] = b[1] + (b[2] || 1) - 0), (a[3] = b[3] - 0);
                            } else a[2] && m.error(a[0]);
                            return (a[0] = f++), a;
                        },
                        ATTR: function (a, b, c, d, e, f) {
                            var g = (a[1] = a[1].replace(j, ""));
                            return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), (a[4] = (a[4] || a[5] || "").replace(j, "")), "~=" === a[2] && (a[4] = " " + a[4] + " "), a;
                        },
                        PSEUDO: function (a, b, c, e, f) {
                            if ("not" === a[1]) {
                                if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                    var g = m.filter(a[3], b, c, !0 ^ f);
                                    return c || e.push.apply(e, g), !1;
                                }
                                a[3] = m(a[3], null, null, b);
                            } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return !0;
                            return a;
                        },
                        POS: function (a) {
                            return a.unshift(!0), a;
                        },
                    },
                    filters: {
                        enabled: function (a) {
                            return a.disabled === !1 && "hidden" !== a.type;
                        },
                        disabled: function (a) {
                            return a.disabled === !0;
                        },
                        checked: function (a) {
                            return a.checked === !0;
                        },
                        selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                        },
                        parent: function (a) {
                            return !!a.firstChild;
                        },
                        empty: function (a) {
                            return !a.firstChild;
                        },
                        has: function (a, b, c) {
                            return !!m(c[3], a).length;
                        },
                        header: function (a) {
                            return /h\d/i.test(a.nodeName);
                        },
                        text: function (a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b);
                        },
                        radio: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type;
                        },
                        checkbox: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type;
                        },
                        file: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type;
                        },
                        password: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type;
                        },
                        submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type;
                        },
                        image: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "image" === a.type;
                        },
                        reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type;
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b && "button" === a.type) || "button" === b;
                        },
                        input: function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName);
                        },
                        focus: function (a) {
                            return a === a.ownerDocument.activeElement;
                        },
                    },
                    setFilters: {
                        first: function (a, b) {
                            return 0 === b;
                        },
                        last: function (a, b, c, d) {
                            return b === d.length - 1;
                        },
                        even: function (a, b) {
                            return b % 2 === 0;
                        },
                        odd: function (a, b) {
                            return b % 2 === 1;
                        },
                        lt: function (a, b, c) {
                            return b < c[3] - 0;
                        },
                        gt: function (a, b, c) {
                            return b > c[3] - 0;
                        },
                        nth: function (a, b, c) {
                            return c[3] - 0 === b;
                        },
                        eq: function (a, b, c) {
                            return c[3] - 0 === b;
                        },
                    },
                    filter: {
                        PSEUDO: function (a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                            if ("not" === e) {
                                for (var g = b[3], h = 0, i = g.length; i > h; h++) if (g[h] === a) return !1;
                                return !0;
                            }
                            m.error(e);
                        },
                        CHILD: function (a, b) {
                            var c,
                                d,
                                f,
                                g,
                                h,
                                i,
                                j = b[1],
                                k = a;
                            switch (j) {
                                case "only":
                                case "first":
                                    for (; (k = k.previousSibling); ) if (1 === k.nodeType) return !1;
                                    if ("first" === j) return !0;
                                    k = a;
                                case "last":
                                    for (; (k = k.nextSibling); ) if (1 === k.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (((c = b[2]), (d = b[3]), 1 === c && 0 === d)) return !0;
                                    if (((f = b[0]), (g = a.parentNode), g && (g[e] !== f || !a.nodeIndex))) {
                                        for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                        g[e] = f;
                                    }
                                    return (i = a.nodeIndex - d), 0 === c ? 0 === i : i % c === 0 && i / c >= 0;
                            }
                        },
                        ID: function (a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b;
                        },
                        TAG: function (a, b) {
                            return ("*" === b && 1 === a.nodeType) || (!!a.nodeName && a.nodeName.toLowerCase() === b);
                        },
                        CLASS: function (a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1;
                        },
                        ATTR: function (a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return null == d
                                ? "!=" === f
                                : !f && m.attr
                                ? null != d
                                : "=" === f
                                ? e === g
                                : "*=" === f
                                ? e.indexOf(g) >= 0
                                : "~=" === f
                                ? (" " + e + " ").indexOf(g) >= 0
                                : g
                                ? "!=" === f
                                    ? e !== g
                                    : "^=" === f
                                    ? 0 === e.indexOf(g)
                                    : "$=" === f
                                    ? e.substr(e.length - g.length) === g
                                    : "|=" === f
                                    ? e === g || e.substr(0, g.length + 1) === g + "-"
                                    : !1
                                : e && d !== !1;
                        },
                        POS: function (a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            return f ? f(a, c, b, d) : void 0;
                        },
                    },
                }),
                p = o.match.POS,
                q = function (a, b) {
                    return "\\" + (b - 0 + 1);
                };
            for (var r in o.match) (o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source)), (o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q)));
            var s = function (a, b) {
                return (a = Array.prototype.slice.call(a, 0)), b ? (b.push.apply(b, a), b) : a;
            };
            try {
                Array.prototype.slice.call(G.documentElement.childNodes, 0)[0].nodeType;
            } catch (t) {
                s = function (a, b) {
                    var c = 0,
                        d = b || [];
                    if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                    else if ("number" == typeof a.length) for (var e = a.length; e > c; c++) d.push(a[c]);
                    else for (; a[c]; c++) d.push(a[c]);
                    return d;
                };
            }
            var u, v;
            G.documentElement.compareDocumentPosition
                ? (u = function (a, b) {
                      return a === b ? ((h = !0), 0) : a.compareDocumentPosition && b.compareDocumentPosition ? (4 & a.compareDocumentPosition(b) ? -1 : 1) : a.compareDocumentPosition ? -1 : 1;
                  })
                : ((u = function (a, b) {
                      if (a === b) return (h = !0), 0;
                      if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                      var c,
                          d,
                          e = [],
                          f = [],
                          g = a.parentNode,
                          i = b.parentNode,
                          j = g;
                      if (g === i) return v(a, b);
                      if (!g) return -1;
                      if (!i) return 1;
                      for (; j; ) e.unshift(j), (j = j.parentNode);
                      for (j = i; j; ) f.unshift(j), (j = j.parentNode);
                      (c = e.length), (d = f.length);
                      for (var k = 0; c > k && d > k; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
                      return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
                  }),
                  (v = function (a, b, c) {
                      if (a === b) return c;
                      for (var d = a.nextSibling; d; ) {
                          if (d === b) return -1;
                          d = d.nextSibling;
                      }
                      return 1;
                  })),
                (function () {
                    var a = G.createElement("div"),
                        c = "script" + new Date().getTime(),
                        d = G.documentElement;
                    (a.innerHTML = "<a name='" + c + "'/>"),
                        d.insertBefore(a, d.firstChild),
                        G.getElementById(c) &&
                            ((o.find.ID = function (a, c, d) {
                                if ("undefined" != typeof c.getElementById && !d) {
                                    var e = c.getElementById(a[1]);
                                    return e ? (e.id === a[1] || ("undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1]) ? [e] : b) : [];
                                }
                            }),
                            (o.filter.ID = function (a, b) {
                                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                return 1 === a.nodeType && c && c.nodeValue === b;
                            })),
                        d.removeChild(a),
                        (d = a = null);
                })(),
                (function () {
                    var a = G.createElement("div");
                    a.appendChild(G.createComment("")),
                        a.getElementsByTagName("*").length > 0 &&
                            (o.find.TAG = function (a, b) {
                                var c = b.getElementsByTagName(a[1]);
                                if ("*" === a[1]) {
                                    for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                                    c = d;
                                }
                                return c;
                            }),
                        (a.innerHTML = "<a href='#'></a>"),
                        a.firstChild &&
                            "undefined" != typeof a.firstChild.getAttribute &&
                            "#" !== a.firstChild.getAttribute("href") &&
                            (o.attrHandle.href = function (a) {
                                return a.getAttribute("href", 2);
                            }),
                        (a = null);
                })(),
                G.querySelectorAll &&
                    (function () {
                        var a = m,
                            b = G.createElement("div"),
                            c = "__sizzle__";
                        if (((b.innerHTML = "<p class='TEST'></p>"), !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length)) {
                            m = function (b, d, e, f) {
                                if (((d = d || G), !f && !m.isXML(d))) {
                                    var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                    if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                                        if (g[1]) return s(d.getElementsByTagName(b), e);
                                        if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e);
                                    }
                                    if (9 === d.nodeType) {
                                        if ("body" === b && d.body) return s([d.body], e);
                                        if (g && g[3]) {
                                            var h = d.getElementById(g[3]);
                                            if (!h || !h.parentNode) return s([], e);
                                            if (h.id === g[3]) return s([h], e);
                                        }
                                        try {
                                            return s(d.querySelectorAll(b), e);
                                        } catch (i) {}
                                    } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                                        var j = d,
                                            k = d.getAttribute("id"),
                                            l = k || c,
                                            n = d.parentNode,
                                            p = /^\s*[+~]/.test(b);
                                        k ? (l = l.replace(/'/g, "\\$&")) : d.setAttribute("id", l), p && n && (d = d.parentNode);
                                        try {
                                            if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e);
                                        } catch (q) {
                                        } finally {
                                            k || j.removeAttribute("id");
                                        }
                                    }
                                }
                                return a(b, d, e, f);
                            };
                            for (var d in a) m[d] = a[d];
                            b = null;
                        }
                    })(),
                (function () {
                    var a = G.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var c = !b.call(G.createElement("div"), "div"),
                            d = !1;
                        try {
                            b.call(G.documentElement, "[test!='']:sizzle");
                        } catch (e) {
                            d = !0;
                        }
                        m.matchesSelector = function (a, e) {
                            if (((e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")), !m.isXML(a)))
                                try {
                                    if (d || (!o.match.PSEUDO.test(e) && !/!=/.test(e))) {
                                        var f = b.call(a, e);
                                        if (f || !c || (a.document && 11 !== a.document.nodeType)) return f;
                                    }
                                } catch (g) {}
                            return m(e, null, null, [a]).length > 0;
                        };
                    }
                })(),
                (function () {
                    var a = G.createElement("div");
                    if (((a.innerHTML = "<div class='test e'></div><div class='test'></div>"), a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length)) {
                        if (((a.lastChild.className = "e"), 1 === a.getElementsByClassName("e").length)) return;
                        o.order.splice(1, 0, "CLASS"),
                            (o.find.CLASS = function (a, b, c) {
                                return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1]);
                            }),
                            (a = null);
                    }
                })(),
                G.documentElement.contains
                    ? (m.contains = function (a, b) {
                          return a !== b && (a.contains ? a.contains(b) : !0);
                      })
                    : G.documentElement.compareDocumentPosition
                    ? (m.contains = function (a, b) {
                          return !!(16 & a.compareDocumentPosition(b));
                      })
                    : (m.contains = function () {
                          return !1;
                      }),
                (m.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? "HTML" !== b.nodeName : !1;
                });
            var w = function (a, b, c) {
                for (var d, e = [], f = "", g = b.nodeType ? [b] : b; (d = o.match.PSEUDO.exec(a)); ) (f += d[0]), (a = a.replace(o.match.PSEUDO, ""));
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; i > h; h++) m(a, g[h], e, c);
                return m.filter(f, e);
            };
            (m.attr = J.attr), (m.selectors.attrMap = {}), (J.find = m), (J.expr = m.selectors), (J.expr[":"] = J.expr.filters), (J.unique = m.uniqueSort), (J.text = m.getText), (J.isXMLDoc = m.isXML), (J.contains = m.contains);
        })();
    var ga = /Until$/,
        ha = /^(?:parents|prevUntil|prevAll)/,
        ia = /,/,
        ja = /^.[^:#\[\.,]*$/,
        ka = Array.prototype.slice,
        la = J.expr.match.POS,
        ma = { children: !0, contents: !0, next: !0, prev: !0 };
    J.fn.extend({
        find: function (a) {
            var b,
                c,
                d = this;
            if ("string" != typeof a)
                return J(a).filter(function () {
                    for (b = 0, c = d.length; c > b; b++) if (J.contains(d[b], this)) return !0;
                });
            var e,
                f,
                g,
                h = this.pushStack("", "find", a);
            for (b = 0, c = this.length; c > b; b++)
                if (((e = h.length), J.find(a, this[b], h), b > 0))
                    for (f = e; f < h.length; f++)
                        for (g = 0; e > g; g++)
                            if (h[g] === h[f]) {
                                h.splice(f--, 1);
                                break;
                            }
            return h;
        },
        has: function (a) {
            var b = J(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; c > a; a++) if (J.contains(this, b[a])) return !0;
            });
        },
        not: function (a) {
            return this.pushStack(y(this, a, !1), "not", a);
        },
        filter: function (a) {
            return this.pushStack(y(this, a, !0), "filter", a);
        },
        is: function (a) {
            return !!a && ("string" == typeof a ? (la.test(a) ? J(a, this.context).index(this[0]) >= 0 : J.filter(a, this).length > 0) : this.filter(a).length > 0);
        },
        closest: function (a, b) {
            var c,
                d,
                e = [],
                f = this[0];
            if (J.isArray(a)) {
                for (var g = 1; f && f.ownerDocument && f !== b; ) {
                    for (c = 0; c < a.length; c++) J(f).is(a[c]) && e.push({ selector: a[c], elem: f, level: g });
                    (f = f.parentNode), g++;
                }
                return e;
            }
            var h = la.test(a) || "string" != typeof a ? J(a, b || this.context) : 0;
            for (c = 0, d = this.length; d > c; c++)
                for (f = this[c]; f; ) {
                    if (h ? h.index(f) > -1 : J.find.matchesSelector(f, a)) {
                        e.push(f);
                        break;
                    }
                    if (((f = f.parentNode), !f || !f.ownerDocument || f === b || 11 === f.nodeType)) break;
                }
            return (e = e.length > 1 ? J.unique(e) : e), this.pushStack(e, "closest", a);
        },
        index: function (a) {
            return a ? ("string" == typeof a ? J.inArray(this[0], J(a)) : J.inArray(a.jquery ? a[0] : a, this)) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
        },
        add: function (a, b) {
            var c = "string" == typeof a ? J(a, b) : J.makeArray(a && a.nodeType ? [a] : a),
                d = J.merge(this.get(), c);
            return this.pushStack(z(c[0]) || z(d[0]) ? d : J.unique(d));
        },
        andSelf: function () {
            return this.add(this.prevObject);
        },
    }),
        J.each(
            {
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null;
                },
                parents: function (a) {
                    return J.dir(a, "parentNode");
                },
                parentsUntil: function (a, b, c) {
                    return J.dir(a, "parentNode", c);
                },
                next: function (a) {
                    return J.nth(a, 2, "nextSibling");
                },
                prev: function (a) {
                    return J.nth(a, 2, "previousSibling");
                },
                nextAll: function (a) {
                    return J.dir(a, "nextSibling");
                },
                prevAll: function (a) {
                    return J.dir(a, "previousSibling");
                },
                nextUntil: function (a, b, c) {
                    return J.dir(a, "nextSibling", c);
                },
                prevUntil: function (a, b, c) {
                    return J.dir(a, "previousSibling", c);
                },
                siblings: function (a) {
                    return J.sibling(a.parentNode.firstChild, a);
                },
                children: function (a) {
                    return J.sibling(a.firstChild);
                },
                contents: function (a) {
                    return J.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : J.makeArray(a.childNodes);
                },
            },
            function (a, b) {
                J.fn[a] = function (c, d) {
                    var e = J.map(this, b, c),
                        f = ka.call(arguments);
                    return (
                        ga.test(a) || (d = c),
                        d && "string" == typeof d && (e = J.filter(d, e)),
                        (e = this.length > 1 && !ma[a] ? J.unique(e) : e),
                        (this.length > 1 || ia.test(d)) && ha.test(a) && (e = e.reverse()),
                        this.pushStack(e, a, f.join(","))
                    );
                };
            }
        ),
        J.extend({
            filter: function (a, b, c) {
                return c && (a = ":not(" + a + ")"), 1 === b.length ? (J.find.matchesSelector(b[0], a) ? [b[0]] : []) : J.find.matches(a, b);
            },
            dir: function (a, c, d) {
                for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !J(f).is(d)); ) 1 === f.nodeType && e.push(f), (f = f[c]);
                return e;
            },
            nth: function (a, b, c, d) {
                b = b || 1;
                for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
                return a;
            },
            sibling: function (a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c;
            },
        });
    var na = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        oa = / jQuery\d+="(?:\d+|null)"/g,
        pa = /^\s+/,
        qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ra = /<([\w:]+)/,
        sa = /<tbody/i,
        ta = /<|&#?\w+;/,
        ua = /<(?:script|style)/i,
        va = /<(?:script|object|embed|option|style)/i,
        wa = new RegExp("<(?:" + na.replace(" ", "|") + ")", "i"),
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /\/(java|ecma)script/i,
        za = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Aa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""],
        },
        Ba = x(G);
    (Aa.optgroup = Aa.option),
        (Aa.tbody = Aa.tfoot = Aa.colgroup = Aa.caption = Aa.thead),
        (Aa.th = Aa.td),
        J.support.htmlSerialize || (Aa._default = [1, "div<div>", "</div>"]),
        J.fn.extend({
            text: function (a) {
                return J.isFunction(a)
                    ? this.each(function (b) {
                          var c = J(this);
                          c.text(a.call(this, b, c.text()));
                      })
                    : "object" != typeof a && a !== b
                    ? this.empty().append(((this[0] && this[0].ownerDocument) || G).createTextNode(a))
                    : J.text(this);
            },
            wrapAll: function (a) {
                if (J.isFunction(a))
                    return this.each(function (b) {
                        J(this).wrapAll(a.call(this, b));
                    });
                if (this[0]) {
                    var b = J(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b
                            .map(function () {
                                for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                                return a;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (a) {
                return J.isFunction(a)
                    ? this.each(function (b) {
                          J(this).wrapInner(a.call(this, b));
                      })
                    : this.each(function () {
                          var b = J(this),
                              c = b.contents();
                          c.length ? c.wrapAll(a) : b.append(a);
                      });
            },
            wrap: function (a) {
                return this.each(function () {
                    J(this).wrapAll(a);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
            append: function () {
                return this.domManip(arguments, !0, function (a) {
                    1 === this.nodeType && this.appendChild(a);
                });
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (a) {
                    1 === this.nodeType && this.insertBefore(a, this.firstChild);
                });
            },
            before: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this);
                    });
                if (arguments.length) {
                    var a = J(arguments[0]);
                    return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments);
                }
            },
            after: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this.nextSibling);
                    });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    return a.push.apply(a, J(arguments[0]).toArray()), a;
                }
            },
            remove: function (a, b) {
                for (var c, d = 0; null != (c = this[d]); d++) (!a || J.filter(a, [c]).length) && (!b && 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), J.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
                return this;
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) for (1 === a.nodeType && J.cleanData(a.getElementsByTagName("*")); a.firstChild; ) a.removeChild(a.firstChild);
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null == a ? !1 : a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return J.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(oa, "") : null;
                if ("string" != typeof a || ua.test(a) || (!J.support.leadingWhitespace && pa.test(a)) || Aa[(ra.exec(a) || ["", ""])[1].toLowerCase()])
                    J.isFunction(a)
                        ? this.each(function (b) {
                              var c = J(this);
                              c.html(a.call(this, b, c.html()));
                          })
                        : this.empty().append(a);
                else {
                    a = a.replace(qa, "<$1></$2>");
                    try {
                        for (var c = 0, d = this.length; d > c; c++) 1 === this[c].nodeType && (J.cleanData(this[c].getElementsByTagName("*")), (this[c].innerHTML = a));
                    } catch (e) {
                        this.empty().append(a);
                    }
                }
                return this;
            },
            replaceWith: function (a) {
                return this[0] && this[0].parentNode
                    ? J.isFunction(a)
                        ? this.each(function (b) {
                              var c = J(this),
                                  d = c.html();
                              c.replaceWith(a.call(this, b, d));
                          })
                        : ("string" != typeof a && (a = J(a).detach()),
                          this.each(function () {
                              var b = this.nextSibling,
                                  c = this.parentNode;
                              J(this).remove(), b ? J(b).before(a) : J(c).append(a);
                          }))
                    : this.length
                    ? this.pushStack(J(J.isFunction(a) ? a() : a), "replaceWith", a)
                    : this;
            },
            detach: function (a) {
                return this.remove(a, !0);
            },
            domManip: function (a, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i = a[0],
                    j = [];
                if (!J.support.checkClone && 3 === arguments.length && "string" == typeof i && xa.test(i))
                    return this.each(function () {
                        J(this).domManip(a, c, d, !0);
                    });
                if (J.isFunction(i))
                    return this.each(function (e) {
                        var f = J(this);
                        (a[0] = i.call(this, e, c ? f.html() : b)), f.domManip(a, c, d);
                    });
                if (this[0]) {
                    if (
                        ((h = i && i.parentNode),
                        (e = J.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? { fragment: h } : J.buildFragment(a, this, j)),
                        (g = e.fragment),
                        (f = 1 === g.childNodes.length ? (g = g.firstChild) : g.firstChild),
                        f)
                    ) {
                        c = c && J.nodeName(f, "tr");
                        for (var k = 0, l = this.length, m = l - 1; l > k; k++) d.call(c ? w(this[k], f) : this[k], e.cacheable || (l > 1 && m > k) ? J.clone(g, !0, !0) : g);
                    }
                    j.length && J.each(j, q);
                }
                return this;
            },
        }),
        (J.buildFragment = function (a, b, c) {
            var d,
                e,
                f,
                g,
                h = a[0];
            return (
                b && b[0] && (g = b[0].ownerDocument || b[0]),
                g.createDocumentFragment || (g = G),
                1 === a.length &&
                    "string" == typeof h &&
                    h.length < 512 &&
                    g === G &&
                    "<" === h.charAt(0) &&
                    !va.test(h) &&
                    (J.support.checkClone || !xa.test(h)) &&
                    !J.support.unknownElems &&
                    wa.test(h) &&
                    ((e = !0), (f = J.fragments[h]), f && 1 !== f && (d = f)),
                d || ((d = g.createDocumentFragment()), J.clean(a, g, d, c)),
                e && (J.fragments[h] = f ? d : 1),
                { fragment: d, cacheable: e }
            );
        }),
        (J.fragments = {}),
        J.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
            J.fn[a] = function (c) {
                var d = [],
                    e = J(c),
                    f = 1 === this.length && this[0].parentNode;
                if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
                for (var g = 0, h = e.length; h > g; g++) {
                    var i = (g > 0 ? this.clone(!0) : this).get();
                    J(e[g])[b](i), (d = d.concat(i));
                }
                return this.pushStack(d, a, e.selector);
            };
        }),
        J.extend({
            clone: function (a, b, c) {
                var d,
                    e,
                    f,
                    g = a.cloneNode(!0);
                if (!((J.support.noCloneEvent && J.support.noCloneChecked) || (1 !== a.nodeType && 11 !== a.nodeType) || J.isXMLDoc(a))) for (u(a, g), d = t(a), e = t(g), f = 0; d[f]; ++f) e[f] && u(d[f], e[f]);
                if (b && (v(a, g), c)) for (d = t(a), e = t(g), f = 0; d[f]; ++f) v(d[f], e[f]);
                return (d = e = null), g;
            },
            clean: function (a, b, c, d) {
                var e;
                (b = b || G), "undefined" == typeof b.createElement && (b = b.ownerDocument || (b[0] && b[0].ownerDocument) || G);
                for (var f, g, h = [], i = 0; null != (g = a[i]); i++)
                    if (("number" == typeof g && (g += ""), g)) {
                        if ("string" == typeof g)
                            if (ta.test(g)) {
                                g = g.replace(qa, "<$1></$2>");
                                var j = (ra.exec(g) || ["", ""])[1].toLowerCase(),
                                    k = Aa[j] || Aa._default,
                                    l = k[0],
                                    m = b.createElement("div");
                                for (b === G ? Ba.appendChild(m) : x(b).appendChild(m), m.innerHTML = k[1] + g + k[2]; l--; ) m = m.lastChild;
                                if (!J.support.tbody) {
                                    var n = sa.test(g),
                                        o = "table" !== j || n ? ("<table>" !== k[1] || n ? [] : m.childNodes) : m.firstChild && m.firstChild.childNodes;
                                    for (f = o.length - 1; f >= 0; --f) J.nodeName(o[f], "tbody") && !o[f].childNodes.length && o[f].parentNode.removeChild(o[f]);
                                }
                                !J.support.leadingWhitespace && pa.test(g) && m.insertBefore(b.createTextNode(pa.exec(g)[0]), m.firstChild), (g = m.childNodes);
                            } else g = b.createTextNode(g);
                        var p;
                        if (!J.support.appendChecked)
                            if (g[0] && "number" == typeof (p = g.length)) for (f = 0; p > f; f++) r(g[f]);
                            else r(g);
                        g.nodeType ? h.push(g) : (h = J.merge(h, g));
                    }
                if (c)
                    for (
                        e = function (a) {
                            return !a.type || ya.test(a.type);
                        },
                            i = 0;
                        h[i];
                        i++
                    )
                        if (!d || !J.nodeName(h[i], "script") || (h[i].type && "text/javascript" !== h[i].type.toLowerCase())) {
                            if (1 === h[i].nodeType) {
                                var q = J.grep(h[i].getElementsByTagName("script"), e);
                                h.splice.apply(h, [i + 1, 0].concat(q));
                            }
                            c.appendChild(h[i]);
                        } else d.push(h[i].parentNode ? h[i].parentNode.removeChild(h[i]) : h[i]);
                return h;
            },
            cleanData: function (a) {
                for (var b, c, d, e = J.cache, f = J.event.special, g = J.support.deleteExpando, h = 0; null != (d = a[h]); h++)
                    if ((!d.nodeName || !J.noData[d.nodeName.toLowerCase()]) && (c = d[J.expando])) {
                        if (((b = e[c]), b && b.events)) {
                            for (var i in b.events) f[i] ? J.event.remove(d, i) : J.removeEvent(d, i, b.handle);
                            b.handle && (b.handle.elem = null);
                        }
                        g ? delete d[J.expando] : d.removeAttribute && d.removeAttribute(J.expando), delete e[c];
                    }
            },
        });
    var Ca,
        Da,
        Ea,
        Fa = /alpha\([^)]*\)/i,
        Ga = /opacity=([^)]*)/,
        Ha = /([A-Z]|^ms)/g,
        Ia = /^-?\d+(?:px)?$/i,
        Ja = /^-?\d/,
        Ka = /^([\-+])=([\-+.\de]+)/,
        La = { position: "absolute", visibility: "hidden", display: "block" },
        Ma = ["Left", "Right"],
        Na = ["Top", "Bottom"];
    (J.fn.css = function (a, c) {
        return 2 === arguments.length && c === b
            ? this
            : J.access(this, a, c, !0, function (a, c, d) {
                  return d !== b ? J.style(a, c, d) : J.css(a, c);
              });
    }),
        J.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = Ca(a, "opacity", "opacity");
                            return "" === c ? "1" : c;
                        }
                        return a.style.opacity;
                    },
                },
            },
            cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: J.support.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f,
                        g,
                        h = J.camelCase(c),
                        i = a.style,
                        j = J.cssHooks[h];
                    if (((c = J.cssProps[h] || h), d === b)) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
                    if (((g = typeof d), "string" === g && (f = Ka.exec(d)) && ((d = +(f[1] + 1) * +f[2] + parseFloat(J.css(a, c))), (g = "number")), null == d || ("number" === g && isNaN(d)))) return;
                    if (("number" === g && !J.cssNumber[h] && (d += "px"), !(j && "set" in j && (d = j.set(a, d)) === b)))
                        try {
                            i[c] = d;
                        } catch (k) {}
                }
            },
            css: function (a, c, d) {
                var e, f;
                return (c = J.camelCase(c)), (f = J.cssHooks[c]), (c = J.cssProps[c] || c), "cssFloat" === c && (c = "float"), f && "get" in f && (e = f.get(a, !0, d)) !== b ? e : Ca ? Ca(a, c) : void 0;
            },
            swap: function (a, b, c) {
                var d = {};
                for (var e in b) (d[e] = a.style[e]), (a.style[e] = b[e]);
                c.call(a);
                for (e in b) a.style[e] = d[e];
            },
        }),
        (J.curCSS = J.css),
        J.each(["height", "width"], function (a, b) {
            J.cssHooks[b] = {
                get: function (a, c, d) {
                    var e;
                    return c
                        ? 0 !== a.offsetWidth
                            ? p(a, b, d)
                            : (J.swap(a, La, function () {
                                  e = p(a, b, d);
                              }),
                              e)
                        : void 0;
                },
                set: function (a, b) {
                    return Ia.test(b) ? ((b = parseFloat(b)), b >= 0 ? b + "px" : void 0) : b;
                },
            };
        }),
        J.support.opacity ||
            (J.cssHooks.opacity = {
                get: function (a, b) {
                    return Ga.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "";
                },
                set: function (a, b) {
                    var c = a.style,
                        d = a.currentStyle,
                        e = J.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                        f = (d && d.filter) || c.filter || "";
                    (c.zoom = 1), (b >= 1 && "" === J.trim(f.replace(Fa, "")) && (c.removeAttribute("filter"), d && !d.filter)) || (c.filter = Fa.test(f) ? f.replace(Fa, e) : f + " " + e);
                },
            }),
        J(function () {
            J.support.reliableMarginRight ||
                (J.cssHooks.marginRight = {
                    get: function (a, b) {
                        var c;
                        return (
                            J.swap(a, { display: "inline-block" }, function () {
                                c = b ? Ca(a, "margin-right", "marginRight") : a.style.marginRight;
                            }),
                            c
                        );
                    },
                });
        }),
        G.defaultView &&
            G.defaultView.getComputedStyle &&
            (Da = function (a, c) {
                var d, e, f;
                return (
                    (c = c.replace(Ha, "-$1").toLowerCase()),
                    (e = a.ownerDocument.defaultView) ? ((f = e.getComputedStyle(a, null)) && ((d = f.getPropertyValue(c)), "" === d && !J.contains(a.ownerDocument.documentElement, a) && (d = J.style(a, c))), d) : b
                );
            }),
        G.documentElement.currentStyle &&
            (Ea = function (a, b) {
                var c,
                    d,
                    e,
                    f = a.currentStyle && a.currentStyle[b],
                    g = a.style;
                return (
                    null === f && g && (e = g[b]) && (f = e),
                    !Ia.test(f) &&
                        Ja.test(f) &&
                        ((c = g.left),
                        (d = a.runtimeStyle && a.runtimeStyle.left),
                        d && (a.runtimeStyle.left = a.currentStyle.left),
                        (g.left = "fontSize" === b ? "1em" : f || 0),
                        (f = g.pixelLeft + "px"),
                        (g.left = c),
                        d && (a.runtimeStyle.left = d)),
                    "" === f ? "auto" : f
                );
            }),
        (Ca = Da || Ea),
        J.expr &&
            J.expr.filters &&
            ((J.expr.filters.hidden = function (a) {
                var b = a.offsetWidth,
                    c = a.offsetHeight;
                return (0 === b && 0 === c) || (!J.support.reliableHiddenOffsets && "none" === ((a.style && a.style.display) || J.css(a, "display")));
            }),
            (J.expr.filters.visible = function (a) {
                return !J.expr.filters.hidden(a);
            }));
    var Oa,
        Pa,
        Qa = /%20/g,
        Ra = /\[\]$/,
        Sa = /\r?\n/g,
        Ta = /#.*$/,
        Ua = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Va = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Wa = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Xa = /^(?:GET|HEAD)$/,
        Ya = /^\/\//,
        Za = /\?/,
        $a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        _a = /^(?:select|textarea)/i,
        ab = /\s+/,
        bb = /([?&])_=[^&]*/,
        cb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        db = J.fn.load,
        eb = {},
        fb = {},
        gb = ["*/"] + ["*"];
    try {
        Oa = I.href;
    } catch (hb) {
        (Oa = G.createElement("a")), (Oa.href = ""), (Oa = Oa.href);
    }
    (Pa = cb.exec(Oa.toLowerCase()) || []),
        J.fn.extend({
            load: function (a, c, d) {
                if ("string" != typeof a && db) return db.apply(this, arguments);
                if (!this.length) return this;
                var e = a.indexOf(" ");
                if (e >= 0) {
                    var f = a.slice(e, a.length);
                    a = a.slice(0, e);
                }
                var g = "GET";
                c && (J.isFunction(c) ? ((d = c), (c = b)) : "object" == typeof c && ((c = J.param(c, J.ajaxSettings.traditional)), (g = "POST")));
                var h = this;
                return (
                    J.ajax({
                        url: a,
                        type: g,
                        dataType: "html",
                        data: c,
                        complete: function (a, b, c) {
                            (c = a.responseText),
                                a.isResolved() &&
                                    (a.done(function (a) {
                                        c = a;
                                    }),
                                    h.html(f ? J("<div>").append(c.replace($a, "")).find(f) : c)),
                                d && h.each(d, [c, b, a]);
                        },
                    }),
                    this
                );
            },
            serialize: function () {
                return J.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? J.makeArray(this.elements) : this;
                })
                    .filter(function () {
                        return this.name && !this.disabled && (this.checked || _a.test(this.nodeName) || Va.test(this.type));
                    })
                    .map(function (a, b) {
                        var c = J(this).val();
                        return null == c
                            ? null
                            : J.isArray(c)
                            ? J.map(c, function (a, c) {
                                  return { name: b.name, value: a.replace(Sa, "\r\n") };
                              })
                            : { name: b.name, value: c.replace(Sa, "\r\n") };
                    })
                    .get();
            },
        }),
        J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
            J.fn[b] = function (a) {
                return this.bind(b, a);
            };
        }),
        J.each(["get", "post"], function (a, c) {
            J[c] = function (a, d, e, f) {
                return J.isFunction(d) && ((f = f || e), (e = d), (d = b)), J.ajax({ type: c, url: a, data: d, success: e, dataType: f });
            };
        }),
        J.extend({
            getScript: function (a, c) {
                return J.get(a, b, c, "script");
            },
            getJSON: function (a, b, c) {
                return J.get(a, b, c, "json");
            },
            ajaxSetup: function (a, b) {
                return b ? m(a, J.ajaxSettings) : ((b = a), (a = J.ajaxSettings)), m(a, b), a;
            },
            ajaxSettings: {
                url: Oa,
                isLocal: Wa.test(Pa[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": gb },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: "responseXML", text: "responseText" },
                converters: { "* text": a.String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML },
                flatOptions: { context: !0, url: !0 },
            },
            ajaxPrefilter: o(eb),
            ajaxTransport: o(fb),
            ajax: function (a, c) {
                function d(a, c, d, g) {
                    if (2 !== x) {
                        (x = 2), i && clearTimeout(i), (h = b), (f = g || ""), (y.readyState = a > 0 ? 4 : 0);
                        var l,
                            n,
                            o,
                            v,
                            w,
                            z = c,
                            A = d ? k(p, y, d) : b;
                        if ((a >= 200 && 300 > a) || 304 === a)
                            if ((p.ifModified && ((v = y.getResponseHeader("Last-Modified")) && (J.lastModified[e] = v), (w = y.getResponseHeader("Etag")) && (J.etag[e] = w)), 304 === a)) (z = "notmodified"), (l = !0);
                            else
                                try {
                                    (n = j(p, A)), (z = "success"), (l = !0);
                                } catch (B) {
                                    (z = "parsererror"), (o = B);
                                }
                        else (o = z), (!z || a) && ((z = "error"), 0 > a && (a = 0));
                        (y.status = a),
                            (y.statusText = "" + (c || z)),
                            l ? s.resolveWith(q, [n, z, y]) : s.rejectWith(q, [y, z, o]),
                            y.statusCode(u),
                            (u = b),
                            m && r.trigger("ajax" + (l ? "Success" : "Error"), [y, p, l ? n : o]),
                            t.fireWith(q, [y, z]),
                            m && (r.trigger("ajaxComplete", [y, p]), --J.active || J.event.trigger("ajaxStop"));
                    }
                }
                "object" == typeof a && ((c = a), (a = b)), (c = c || {});
                var e,
                    f,
                    g,
                    h,
                    i,
                    l,
                    m,
                    o,
                    p = J.ajaxSetup({}, c),
                    q = p.context || p,
                    r = q !== p && (q.nodeType || q instanceof J) ? J(q) : J.event,
                    s = J.Deferred(),
                    t = J.Callbacks("once memory"),
                    u = p.statusCode || {},
                    v = {},
                    w = {},
                    x = 0,
                    y = {
                        readyState: 0,
                        setRequestHeader: function (a, b) {
                            if (!x) {
                                var c = a.toLowerCase();
                                (a = w[c] = w[c] || a), (v[a] = b);
                            }
                            return this;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === x ? f : null;
                        },
                        getResponseHeader: function (a) {
                            var c;
                            if (2 === x) {
                                if (!g) for (g = {}; (c = Ua.exec(f)); ) g[c[1].toLowerCase()] = c[2];
                                c = g[a.toLowerCase()];
                            }
                            return c === b ? null : c;
                        },
                        overrideMimeType: function (a) {
                            return x || (p.mimeType = a), this;
                        },
                        abort: function (a) {
                            return (a = a || "abort"), h && h.abort(a), d(0, a), this;
                        },
                    };
                if (
                    (s.promise(y),
                    (y.success = y.done),
                    (y.error = y.fail),
                    (y.complete = t.add),
                    (y.statusCode = function (a) {
                        if (a) {
                            var b;
                            if (2 > x) for (b in a) u[b] = [u[b], a[b]];
                            else (b = a[y.status]), y.then(b, b);
                        }
                        return this;
                    }),
                    (p.url = ((a || p.url) + "").replace(Ta, "").replace(Ya, Pa[1] + "//")),
                    (p.dataTypes = J.trim(p.dataType || "*")
                        .toLowerCase()
                        .split(ab)),
                    null == p.crossDomain && ((l = cb.exec(p.url.toLowerCase())), (p.crossDomain = !(!l || (l[1] == Pa[1] && l[2] == Pa[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Pa[3] || ("http:" === Pa[1] ? 80 : 443)))))),
                    p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)),
                    n(eb, p, c, y),
                    2 === x)
                )
                    return !1;
                if (
                    ((m = p.global),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !Xa.test(p.type)),
                    m && 0 === J.active++ && J.event.trigger("ajaxStart"),
                    !p.hasContent && (p.data && ((p.url += (Za.test(p.url) ? "&" : "?") + p.data), delete p.data), (e = p.url), p.cache === !1))
                ) {
                    var z = J.now(),
                        A = p.url.replace(bb, "$1_=" + z);
                    p.url = A + (A === p.url ? (Za.test(p.url) ? "&" : "?") + "_=" + z : "");
                }
                ((p.data && p.hasContent && p.contentType !== !1) || c.contentType) && y.setRequestHeader("Content-Type", p.contentType),
                    p.ifModified && ((e = e || p.url), J.lastModified[e] && y.setRequestHeader("If-Modified-Since", J.lastModified[e]), J.etag[e] && y.setRequestHeader("If-None-Match", J.etag[e])),
                    y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + gb + "; q=0.01" : "") : p.accepts["*"]);
                for (o in p.headers) y.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(q, y, p) === !1 || 2 === x)) return y.abort(), !1;
                for (o in { success: 1, error: 1, complete: 1 }) y[o](p[o]);
                if ((h = n(fb, p, c, y))) {
                    (y.readyState = 1),
                        m && r.trigger("ajaxSend", [y, p]),
                        p.async &&
                            p.timeout > 0 &&
                            (i = setTimeout(function () {
                                y.abort("timeout");
                            }, p.timeout));
                    try {
                        (x = 1), h.send(v, d);
                    } catch (B) {
                        2 > x ? d(-1, B) : J.error(B);
                    }
                } else d(-1, "No Transport");
                return y;
            },
            param: function (a, c) {
                var d = [],
                    e = function (a, b) {
                        (b = J.isFunction(b) ? b() : b), (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
                    };
                if ((c === b && (c = J.ajaxSettings.traditional), J.isArray(a) || (a.jquery && !J.isPlainObject(a))))
                    J.each(a, function () {
                        e(this.name, this.value);
                    });
                else for (var f in a) l(f, a[f], c, e);
                return d.join("&").replace(Qa, "+");
            },
        }),
        J.extend({ active: 0, lastModified: {}, etag: {} });
    var ib = J.now(),
        jb = /(\=)\?(&|$)|\?\?/i;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return J.expando + "_" + ib++;
        },
    }),
        J.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
            if ("jsonp" === b.dataTypes[0] || (b.jsonp !== !1 && (jb.test(b.url) || (e && jb.test(b.data))))) {
                var f,
                    g = (b.jsonpCallback = J.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
                    h = a[g],
                    i = b.url,
                    j = b.data,
                    k = "$1" + g + "$2";
                return (
                    b.jsonp !== !1 && ((i = i.replace(jb, k)), b.url === i && (e && (j = j.replace(jb, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))),
                    (b.url = i),
                    (b.data = j),
                    (a[g] = function (a) {
                        f = [a];
                    }),
                    d.always(function () {
                        (a[g] = h), f && J.isFunction(h) && a[g](f[0]);
                    }),
                    (b.converters["script json"] = function () {
                        return f || J.error(g + " was not called"), f[0];
                    }),
                    (b.dataTypes[0] = "json"),
                    "script"
                );
            }
        }),
        J.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /javascript|ecmascript/ },
            converters: {
                "text script": function (a) {
                    return J.globalEval(a), a;
                },
            },
        }),
        J.ajaxPrefilter("script", function (a) {
            a.cache === b && (a.cache = !1), a.crossDomain && ((a.type = "GET"), (a.global = !1));
        }),
        J.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var c,
                    d = G.head || G.getElementsByTagName("head")[0] || G.documentElement;
                return {
                    send: function (e, f) {
                        (c = G.createElement("script")),
                            (c.async = "async"),
                            a.scriptCharset && (c.charset = a.scriptCharset),
                            (c.src = a.url),
                            (c.onload = c.onreadystatechange = function (a, e) {
                                (e || !c.readyState || /loaded|complete/.test(c.readyState)) && ((c.onload = c.onreadystatechange = null), d && c.parentNode && d.removeChild(c), (c = b), e || f(200, "success"));
                            }),
                            d.insertBefore(c, d.firstChild);
                    },
                    abort: function () {
                        c && c.onload(0, 1);
                    },
                };
            }
        });
    var kb,
        lb = a.ActiveXObject
            ? function () {
                  for (var a in kb) kb[a](0, 1);
              }
            : !1,
        mb = 0;
    (J.ajaxSettings.xhr = a.ActiveXObject
        ? function () {
              return (!this.isLocal && i()) || h();
          }
        : i),
        (function (a) {
            J.extend(J.support, { ajax: !!a, cors: !!a && "withCredentials" in a });
        })(J.ajaxSettings.xhr()),
        J.support.ajax &&
            J.ajaxTransport(function (c) {
                if (!c.crossDomain || J.support.cors) {
                    var d;
                    return {
                        send: function (e, f) {
                            var g,
                                h,
                                i = c.xhr();
                            if ((c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                            c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (h in e) i.setRequestHeader(h, e[h]);
                            } catch (j) {}
                            i.send((c.hasContent && c.data) || null),
                                (d = function (a, e) {
                                    var h, j, k, l, m;
                                    try {
                                        if (d && (e || 4 === i.readyState))
                                            if (((d = b), g && ((i.onreadystatechange = J.noop), lb && delete kb[g]), e)) 4 !== i.readyState && i.abort();
                                            else {
                                                (h = i.status), (k = i.getAllResponseHeaders()), (l = {}), (m = i.responseXML), m && m.documentElement && (l.xml = m), (l.text = i.responseText);
                                                try {
                                                    j = i.statusText;
                                                } catch (n) {
                                                    j = "";
                                                }
                                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : (h = l.text ? 200 : 404);
                                            }
                                    } catch (o) {
                                        e || f(-1, o);
                                    }
                                    l && f(h, j, l, k);
                                }),
                                c.async && 4 !== i.readyState ? ((g = ++mb), lb && (kb || ((kb = {}), J(a).unload(lb)), (kb[g] = d)), (i.onreadystatechange = d)) : d();
                        },
                        abort: function () {
                            d && d(0, 1);
                        },
                    };
                }
            });
    var nb,
        ob,
        pb,
        qb,
        rb = {},
        sb = /^(?:toggle|show|hide)$/,
        tb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        ub = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    J.fn.extend({
        show: function (a, b, c) {
            var f, g;
            if (a || 0 === a) return this.animate(e("show", 3), a, b, c);
            for (var h = 0, i = this.length; i > h; h++)
                (f = this[h]), f.style && ((g = f.style.display), !J._data(f, "olddisplay") && "none" === g && (g = f.style.display = ""), "" === g && "none" === J.css(f, "display") && J._data(f, "olddisplay", d(f.nodeName)));
            for (h = 0; i > h; h++) (f = this[h]), f.style && ((g = f.style.display), ("" === g || "none" === g) && (f.style.display = J._data(f, "olddisplay") || ""));
            return this;
        },
        hide: function (a, b, c) {
            if (a || 0 === a) return this.animate(e("hide", 3), a, b, c);
            for (var d, f, g = 0, h = this.length; h > g; g++) (d = this[g]), d.style && ((f = J.css(d, "display")), "none" !== f && !J._data(d, "olddisplay") && J._data(d, "olddisplay", f));
            for (g = 0; h > g; g++) this[g].style && (this[g].style.display = "none");
            return this;
        },
        _toggle: J.fn.toggle,
        toggle: function (a, b, c) {
            var d = "boolean" == typeof a;
            return (
                J.isFunction(a) && J.isFunction(b)
                    ? this._toggle.apply(this, arguments)
                    : null == a || d
                    ? this.each(function () {
                          var b = d ? a : J(this).is(":hidden");
                          J(this)[b ? "show" : "hide"]();
                      })
                    : this.animate(e("toggle", 3), a, b, c),
                this
            );
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, e) {
            function f() {
                g.queue === !1 && J._mark(this);
                var b,
                    c,
                    e,
                    f,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m = J.extend({}, g),
                    n = 1 === this.nodeType,
                    o = n && J(this).is(":hidden");
                m.animatedProperties = {};
                for (e in a) {
                    if (
                        ((b = J.camelCase(e)),
                        e !== b && ((a[b] = a[e]), delete a[e]),
                        (c = a[b]),
                        J.isArray(c) ? ((m.animatedProperties[b] = c[1]), (c = a[b] = c[0])) : (m.animatedProperties[b] = (m.specialEasing && m.specialEasing[b]) || m.easing || "swing"),
                        ("hide" === c && o) || ("show" === c && !o))
                    )
                        return m.complete.call(this);
                    n &&
                        ("height" === b || "width" === b) &&
                        ((m.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY]),
                        "inline" === J.css(this, "display") && "none" === J.css(this, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== d(this.nodeName) ? (this.style.zoom = 1) : (this.style.display = "inline-block")));
                }
                null != m.overflow && (this.style.overflow = "hidden");
                for (e in a)
                    (f = new J.fx(this, m, e)),
                        (c = a[e]),
                        sb.test(c)
                            ? ((l = J._data(this, "toggle" + e) || ("toggle" === c ? (o ? "show" : "hide") : 0)), l ? (J._data(this, "toggle" + e, "show" === l ? "hide" : "show"), f[l]()) : f[c]())
                            : ((h = tb.exec(c)),
                              (i = f.cur()),
                              h
                                  ? ((j = parseFloat(h[2])),
                                    (k = h[3] || (J.cssNumber[e] ? "" : "px")),
                                    "px" !== k && (J.style(this, e, (j || 1) + k), (i = ((j || 1) / f.cur()) * i), J.style(this, e, i + k)),
                                    h[1] && (j = ("-=" === h[1] ? -1 : 1) * j + i),
                                    f.custom(i, j, k))
                                  : f.custom(i, c, ""));
                return !0;
            }
            var g = J.speed(b, c, e);
            return J.isEmptyObject(a) ? this.each(g.complete, [!1]) : ((a = J.extend({}, a)), g.queue === !1 ? this.each(f) : this.queue(g.queue, f));
        },
        stop: function (a, c, d) {
            return (
                "string" != typeof a && ((d = c), (c = a), (a = b)),
                c && a !== !1 && this.queue(a || "fx", []),
                this.each(function () {
                    function b(a, b, c) {
                        var e = b[c];
                        J.removeData(a, c, !0), e.stop(d);
                    }
                    var c,
                        e = !1,
                        f = J.timers,
                        g = J._data(this);
                    if ((d || J._unmark(!0, this), null == a)) for (c in g) g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                    else g[(c = a + ".run")] && g[c].stop && b(this, g, c);
                    for (c = f.length; c--; ) f[c].elem === this && (null == a || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), (e = !0), f.splice(c, 1));
                    (!d || !e) && J.dequeue(this, a);
                })
            );
        },
    }),
        J.each({ slideDown: e("show", 1), slideUp: e("hide", 1), slideToggle: e("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
            J.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d);
            };
        }),
        J.extend({
            speed: function (a, b, c) {
                var d = a && "object" == typeof a ? J.extend({}, a) : { complete: c || (!c && b) || (J.isFunction(a) && a), duration: a, easing: (c && b) || (b && !J.isFunction(b) && b) };
                return (
                    (d.duration = J.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in J.fx.speeds ? J.fx.speeds[d.duration] : J.fx.speeds._default),
                    (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                    (d.old = d.complete),
                    (d.complete = function (a) {
                        J.isFunction(d.old) && d.old.call(this), d.queue ? J.dequeue(this, d.queue) : a !== !1 && J._unmark(this);
                    }),
                    d
                );
            },
            easing: {
                linear: function (a, b, c, d) {
                    return c + d * a;
                },
                swing: function (a, b, c, d) {
                    return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c;
                },
            },
            timers: [],
            fx: function (a, b, c) {
                (this.options = b), (this.elem = a), (this.prop = c), (b.orig = b.orig || {});
            },
        }),
        (J.fx.prototype = {
            update: function () {
                this.options.step && this.options.step.call(this.elem, this.now, this), (J.fx.step[this.prop] || J.fx.step._default)(this);
            },
            cur: function () {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var a,
                    b = J.css(this.elem, this.prop);
                return isNaN((a = parseFloat(b))) ? (b && "auto" !== b ? b : 0) : a;
            },
            custom: function (a, c, d) {
                function e(a) {
                    return f.step(a);
                }
                var f = this,
                    h = J.fx;
                (this.startTime = qb || g()),
                    (this.end = c),
                    (this.now = this.start = a),
                    (this.pos = this.state = 0),
                    (this.unit = d || this.unit || (J.cssNumber[this.prop] ? "" : "px")),
                    (e.queue = this.options.queue),
                    (e.elem = this.elem),
                    (e.saveState = function () {
                        f.options.hide && J._data(f.elem, "fxshow" + f.prop) === b && J._data(f.elem, "fxshow" + f.prop, f.start);
                    }),
                    e() && J.timers.push(e) && !pb && (pb = setInterval(h.tick, h.interval));
            },
            show: function () {
                var a = J._data(this.elem, "fxshow" + this.prop);
                (this.options.orig[this.prop] = a || J.style(this.elem, this.prop)),
                    (this.options.show = !0),
                    a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()),
                    J(this.elem).show();
            },
            hide: function () {
                (this.options.orig[this.prop] = J._data(this.elem, "fxshow" + this.prop) || J.style(this.elem, this.prop)), (this.options.hide = !0), this.custom(this.cur(), 0);
            },
            step: function (a) {
                var b,
                    c,
                    d,
                    e = qb || g(),
                    f = !0,
                    h = this.elem,
                    i = this.options;
                if (a || e >= i.duration + this.startTime) {
                    (this.now = this.end), (this.pos = this.state = 1), this.update(), (i.animatedProperties[this.prop] = !0);
                    for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (f = !1);
                    if (f) {
                        if (
                            (null != i.overflow &&
                                !J.support.shrinkWrapBlocks &&
                                J.each(["", "X", "Y"], function (a, b) {
                                    h.style["overflow" + b] = i.overflow[a];
                                }),
                            i.hide && J(h).hide(),
                            i.hide || i.show)
                        )
                            for (b in i.animatedProperties) J.style(h, b, i.orig[b]), J.removeData(h, "fxshow" + b, !0), J.removeData(h, "toggle" + b, !0);
                        (d = i.complete), d && ((i.complete = !1), d.call(h));
                    }
                    return !1;
                }
                return (
                    i.duration == 1 / 0
                        ? (this.now = e)
                        : ((c = e - this.startTime), (this.state = c / i.duration), (this.pos = J.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration)), (this.now = this.start + (this.end - this.start) * this.pos)),
                    this.update(),
                    !0
                );
            },
        }),
        J.extend(J.fx, {
            tick: function () {
                for (var a, b = J.timers, c = 0; c < b.length; c++) (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
                b.length || J.fx.stop();
            },
            interval: 13,
            stop: function () {
                clearInterval(pb), (pb = null);
            },
            speeds: { slow: 600, fast: 200, _default: 400 },
            step: {
                opacity: function (a) {
                    J.style(a.elem, "opacity", a.now);
                },
                _default: function (a) {
                    a.elem.style && null != a.elem.style[a.prop] ? (a.elem.style[a.prop] = a.now + a.unit) : (a.elem[a.prop] = a.now);
                },
            },
        }),
        J.each(["width", "height"], function (a, b) {
            J.fx.step[b] = function (a) {
                J.style(a.elem, b, Math.max(0, a.now));
            };
        }),
        J.expr &&
            J.expr.filters &&
            (J.expr.filters.animated = function (a) {
                return J.grep(J.timers, function (b) {
                    return a === b.elem;
                }).length;
            });
    var vb = /^t(?:able|d|h)$/i,
        wb = /^(?:body|html)$/i;
    "getBoundingClientRect" in G.documentElement
        ? (J.fn.offset = function (a) {
              var b,
                  d = this[0];
              if (a)
                  return this.each(function (b) {
                      J.offset.setOffset(this, a, b);
                  });
              if (!d || !d.ownerDocument) return null;
              if (d === d.ownerDocument.body) return J.offset.bodyOffset(d);
              try {
                  b = d.getBoundingClientRect();
              } catch (e) {}
              var f = d.ownerDocument,
                  g = f.documentElement;
              if (!b || !J.contains(g, d)) return b ? { top: b.top, left: b.left } : { top: 0, left: 0 };
              var h = f.body,
                  i = c(f),
                  j = g.clientTop || h.clientTop || 0,
                  k = g.clientLeft || h.clientLeft || 0,
                  l = i.pageYOffset || (J.support.boxModel && g.scrollTop) || h.scrollTop,
                  m = i.pageXOffset || (J.support.boxModel && g.scrollLeft) || h.scrollLeft,
                  n = b.top + l - j,
                  o = b.left + m - k;
              return { top: n, left: o };
          })
        : (J.fn.offset = function (a) {
              var b = this[0];
              if (a)
                  return this.each(function (b) {
                      J.offset.setOffset(this, a, b);
                  });
              if (!b || !b.ownerDocument) return null;
              if (b === b.ownerDocument.body) return J.offset.bodyOffset(b);
              for (
                  var c, d = b.offsetParent, e = b, f = b.ownerDocument, g = f.documentElement, h = f.body, i = f.defaultView, j = i ? i.getComputedStyle(b, null) : b.currentStyle, k = b.offsetTop, l = b.offsetLeft;
                  (b = b.parentNode) && b !== h && b !== g && (!J.support.fixedPosition || "fixed" !== j.position);

              )
                  (c = i ? i.getComputedStyle(b, null) : b.currentStyle),
                      (k -= b.scrollTop),
                      (l -= b.scrollLeft),
                      b === d &&
                          ((k += b.offsetTop),
                          (l += b.offsetLeft),
                          J.support.doesNotAddBorder && (!J.support.doesAddBorderForTableAndCells || !vb.test(b.nodeName)) && ((k += parseFloat(c.borderTopWidth) || 0), (l += parseFloat(c.borderLeftWidth) || 0)),
                          (e = d),
                          (d = b.offsetParent)),
                      J.support.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && ((k += parseFloat(c.borderTopWidth) || 0), (l += parseFloat(c.borderLeftWidth) || 0)),
                      (j = c);
              return (
                  ("relative" === j.position || "static" === j.position) && ((k += h.offsetTop), (l += h.offsetLeft)),
                  J.support.fixedPosition && "fixed" === j.position && ((k += Math.max(g.scrollTop, h.scrollTop)), (l += Math.max(g.scrollLeft, h.scrollLeft))),
                  { top: k, left: l }
              );
          }),
        (J.offset = {
            bodyOffset: function (a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                return J.support.doesNotIncludeMarginInBodyOffset && ((b += parseFloat(J.css(a, "marginTop")) || 0), (c += parseFloat(J.css(a, "marginLeft")) || 0)), { top: b, left: c };
            },
            setOffset: function (a, b, c) {
                var d = J.css(a, "position");
                "static" === d && (a.style.position = "relative");
                var e,
                    f,
                    g = J(a),
                    h = g.offset(),
                    i = J.css(a, "top"),
                    j = J.css(a, "left"),
                    k = ("absolute" === d || "fixed" === d) && J.inArray("auto", [i, j]) > -1,
                    l = {},
                    m = {};
                k ? ((m = g.position()), (e = m.top), (f = m.left)) : ((e = parseFloat(i) || 0), (f = parseFloat(j) || 0)),
                    J.isFunction(b) && (b = b.call(a, c, h)),
                    null != b.top && (l.top = b.top - h.top + e),
                    null != b.left && (l.left = b.left - h.left + f),
                    "using" in b ? b.using.call(a, l) : g.css(l);
            },
        }),
        J.fn.extend({
            position: function () {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = wb.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
                return (
                    (c.top -= parseFloat(J.css(a, "marginTop")) || 0),
                    (c.left -= parseFloat(J.css(a, "marginLeft")) || 0),
                    (d.top += parseFloat(J.css(b[0], "borderTopWidth")) || 0),
                    (d.left += parseFloat(J.css(b[0], "borderLeftWidth")) || 0),
                    { top: c.top - d.top, left: c.left - d.left }
                );
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent || G.body; a && !wb.test(a.nodeName) && "static" === J.css(a, "position"); ) a = a.offsetParent;
                    return a;
                });
            },
        }),
        J.each(["Left", "Top"], function (a, d) {
            var e = "scroll" + d;
            J.fn[e] = function (d) {
                var f, g;
                return d === b
                    ? (f = this[0])
                        ? ((g = c(f)), g ? ("pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : (J.support.boxModel && g.document.documentElement[e]) || g.document.body[e]) : f[e])
                        : null
                    : this.each(function () {
                          (g = c(this)), g ? g.scrollTo(a ? J(g).scrollLeft() : d, a ? d : J(g).scrollTop()) : (this[e] = d);
                      });
            };
        }),
        J.each(["Height", "Width"], function (a, c) {
            var d = c.toLowerCase();
            (J.fn["inner" + c] = function () {
                var a = this[0];
                return a ? (a.style ? parseFloat(J.css(a, d, "padding")) : this[d]()) : null;
            }),
                (J.fn["outer" + c] = function (a) {
                    var b = this[0];
                    return b ? (b.style ? parseFloat(J.css(b, d, a ? "margin" : "border")) : this[d]()) : null;
                }),
                (J.fn[d] = function (a) {
                    var e = this[0];
                    if (!e) return null == a ? null : this;
                    if (J.isFunction(a))
                        return this.each(function (b) {
                            var c = J(this);
                            c[d](a.call(this, b, c[d]()));
                        });
                    if (J.isWindow(e)) {
                        var f = e.document.documentElement["client" + c],
                            g = e.document.body;
                        return ("CSS1Compat" === e.document.compatMode && f) || (g && g["client" + c]) || f;
                    }
                    if (9 === e.nodeType) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
                    if (a === b) {
                        var h = J.css(e, d),
                            i = parseFloat(h);
                        return J.isNumeric(i) ? i : h;
                    }
                    return this.css(d, "string" == typeof a ? a : a + "px");
                });
        }),
        (a.jQuery = a.$ = J);
})(window),
    (jQuery.easing.jswing = jQuery.easing.swing),
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
        },
        easeInQuad: function (a, b, c, d, e) {
            return d * (b /= e) * b + c;
        },
        easeOutQuad: function (a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c;
        },
        easeInOutQuad: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c;
        },
        easeInCubic: function (a, b, c, d, e) {
            return d * (b /= e) * b * b + c;
        },
        easeOutCubic: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c;
        },
        easeInOutCubic: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (d / 2) * b * b * b + c : (d / 2) * ((b -= 2) * b * b + 2) + c;
        },
        easeInQuart: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c;
        },
        easeOutQuart: function (a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c;
        },
        easeInOutQuart: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (d / 2) * b * b * b * b + c : (-d / 2) * ((b -= 2) * b * b * b - 2) + c;
        },
        easeInQuint: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c;
        },
        easeOutQuint: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
        },
        easeInOutQuint: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (d / 2) * b * b * b * b * b + c : (d / 2) * ((b -= 2) * b * b * b * b + 2) + c;
        },
        easeInSine: function (a, b, c, d, e) {
            return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c;
        },
        easeOutSine: function (a, b, c, d, e) {
            return d * Math.sin((b / e) * (Math.PI / 2)) + c;
        },
        easeInOutSine: function (a, b, c, d, e) {
            return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c;
        },
        easeInExpo: function (a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
        },
        easeOutExpo: function (a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, (-10 * b) / e) + 1) + c;
        },
        easeInOutExpo: function (a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? (d / 2) * Math.pow(2, 10 * (b - 1)) + c : (d / 2) * (-Math.pow(2, -10 * --b) + 2) + c;
        },
        easeInCirc: function (a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
        },
        easeOutCirc: function (a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
        },
        easeInOutCirc: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c : (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
        },
        easeInElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if ((g || (g = 0.3 * e), h < Math.abs(d))) {
                h = d;
                var f = g / 4;
            } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((2 * (b * e - f) * Math.PI) / g)) + c;
        },
        easeOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if ((g || (g = 0.3 * e), h < Math.abs(d))) {
                h = d;
                var f = g / 4;
            } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((2 * (b * e - f) * Math.PI) / g) + d + c;
        },
        easeInOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if ((g || (g = 0.3 * e * 1.5), h < Math.abs(d))) {
                h = d;
                var f = g / 4;
            } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
            return 1 > b ? -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((2 * (b * e - f) * Math.PI) / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((2 * (b * e - f) * Math.PI) / g) * 0.5 + d + c;
        },
        easeInBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c;
        },
        easeOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
        },
        easeInOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? (d / 2) * b * b * (((f *= 1.525) + 1) * b - f) + c : (d / 2) * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c;
        },
        easeInBounce: function (a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
        },
        easeOutBounce: function (a, b, c, d, e) {
            return (b /= e) < 1 / 2.75
                ? 7.5625 * d * b * b + c
                : 2 / 2.75 > b
                ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c
                : 2.5 / 2.75 > b
                ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c
                : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c;
        },
        easeInOutBounce: function (a, b, c, d, e) {
            return e / 2 > b ? 0.5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : 0.5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + 0.5 * d + c;
        },
    }),
    (function (a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? (module.exports = a(require("jquery"))) : a(jQuery);
    })(function (a) {
        "use strict";
        var b = window.Slick || {};
        (b = (function () {
            function b(b, d) {
                var e,
                    f = this;
                (f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (a, b) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>";
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (f.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    a.extend(f, f.initials),
                    (f.activeBreakpoint = null),
                    (f.animType = null),
                    (f.animProp = null),
                    (f.breakpoints = []),
                    (f.breakpointSettings = []),
                    (f.cssTransitions = !1),
                    (f.hidden = "hidden"),
                    (f.paused = !1),
                    (f.positionProp = null),
                    (f.respondTo = null),
                    (f.rowCount = 1),
                    (f.shouldClick = !0),
                    (f.$slider = a(b)),
                    (f.$slidesCache = null),
                    (f.transformType = null),
                    (f.transitionType = null),
                    (f.visibilityChange = "visibilitychange"),
                    (f.windowWidth = 0),
                    (f.windowTimer = null),
                    (e = a(b).data("slick") || {}),
                    (f.options = a.extend({}, f.defaults, e, d)),
                    (f.currentSlide = f.options.initialSlide),
                    (f.originalSettings = f.options),
                    "undefined" != typeof document.mozHidden
                        ? ((f.hidden = "mozHidden"), (f.visibilityChange = "mozvisibilitychange"))
                        : "undefined" != typeof document.webkitHidden && ((f.hidden = "webkitHidden"), (f.visibilityChange = "webkitvisibilitychange")),
                    (f.autoPlay = a.proxy(f.autoPlay, f)),
                    (f.autoPlayClear = a.proxy(f.autoPlayClear, f)),
                    (f.changeSlide = a.proxy(f.changeSlide, f)),
                    (f.clickHandler = a.proxy(f.clickHandler, f)),
                    (f.selectHandler = a.proxy(f.selectHandler, f)),
                    (f.setPosition = a.proxy(f.setPosition, f)),
                    (f.swipeHandler = a.proxy(f.swipeHandler, f)),
                    (f.dragHandler = a.proxy(f.dragHandler, f)),
                    (f.keyHandler = a.proxy(f.keyHandler, f)),
                    (f.autoPlayIterator = a.proxy(f.autoPlayIterator, f)),
                    (f.instanceUid = c++),
                    (f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    f.registerBreakpoints(),
                    f.init(!0),
                    f.checkResponsive(!0);
            }
            var c = 0;
            return b;
        })()),
            (b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
                var e = this;
                if ("boolean" == typeof c) (d = c), (c = null);
                else if (0 > c || c >= e.slideCount) return !1;
                e.unload(),
                    "number" == typeof c
                        ? 0 === c && 0 === e.$slides.length
                            ? a(b).appendTo(e.$slideTrack)
                            : d
                            ? a(b).insertBefore(e.$slides.eq(c))
                            : a(b).insertAfter(e.$slides.eq(c))
                        : d === !0
                        ? a(b).prependTo(e.$slideTrack)
                        : a(b).appendTo(e.$slideTrack),
                    (e.$slides = e.$slideTrack.children(this.options.slide)),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slideTrack.append(e.$slides),
                    e.$slides.each(function (b, c) {
                        a(c).attr("data-slick-index", b);
                    }),
                    (e.$slidesCache = e.$slides),
                    e.reinit();
            }),
            (b.prototype.animateHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.animate({ height: b }, a.options.speed);
                }
            }),
            (b.prototype.animateSlide = function (b, c) {
                var d = {},
                    e = this;
                e.animateHeight(),
                    e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
                    e.transformsEnabled === !1
                        ? e.options.vertical === !1
                            ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c)
                            : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c)
                        : e.cssTransitions === !1
                        ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
                          a({ animStart: e.currentLeft }).animate(
                              { animStart: b },
                              {
                                  duration: e.options.speed,
                                  easing: e.options.easing,
                                  step: function (a) {
                                      (a = Math.ceil(a)), e.options.vertical === !1 ? ((d[e.animType] = "translate(" + a + "px, 0px)"), e.$slideTrack.css(d)) : ((d[e.animType] = "translate(0px," + a + "px)"), e.$slideTrack.css(d));
                                  },
                                  complete: function () {
                                      c && c.call();
                                  },
                              }
                          ))
                        : (e.applyTransition(),
                          (b = Math.ceil(b)),
                          e.options.vertical === !1 ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)") : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
                          e.$slideTrack.css(d),
                          c &&
                              setTimeout(function () {
                                  e.disableTransition(), c.call();
                              }, e.options.speed));
            }),
            (b.prototype.asNavFor = function (b) {
                var c = this,
                    d = c.options.asNavFor;
                d && null !== d && (d = a(d).not(c.$slider)),
                    null !== d &&
                        "object" == typeof d &&
                        d.each(function () {
                            var c = a(this).slick("getSlick");
                            c.unslicked || c.slideHandler(b, !0);
                        });
            }),
            (b.prototype.applyTransition = function (a) {
                var b = this,
                    c = {};
                b.options.fade === !1 ? (c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase) : (c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase),
                    b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
            }),
            (b.prototype.autoPlay = function () {
                var a = this;
                a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
            }),
            (b.prototype.autoPlayClear = function () {
                var a = this;
                a.autoPlayTimer && clearInterval(a.autoPlayTimer);
            }),
            (b.prototype.autoPlayIterator = function () {
                var a = this;
                a.options.infinite === !1
                    ? 1 === a.direction
                        ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll))
                        : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll))
                    : a.slideHandler(a.currentSlide + a.options.slidesToScroll);
            }),
            (b.prototype.buildArrows = function () {
                var b = this;
                b.options.arrows === !0 &&
                    ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
                    (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
                    b.slideCount > b.options.slidesToShow
                        ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
                          b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
                          b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (b.prototype.buildDots = function () {
                var b,
                    c,
                    d = this;
                if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                    for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1) c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
                    (c += "</ul>"), (d.$dots = a(c).appendTo(d.options.appendDots)), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
                }
            }),
            (b.prototype.buildOut = function () {
                var b = this;
                (b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (b.slideCount = b.$slides.length),
                    b.$slides.each(function (b, c) {
                        a(c)
                            .attr("data-slick-index", b)
                            .data("originalStyling", a(c).attr("style") || "");
                    }),
                    (b.$slidesCache = b.$slides),
                    b.$slider.addClass("slick-slider"),
                    (b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
                    b.$slideTrack.css("opacity", 0),
                    (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
                    a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
                    b.setupInfinite(),
                    b.buildArrows(),
                    b.buildDots(),
                    b.updateDots(),
                    b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                    b.options.draggable === !0 && b.$list.addClass("draggable");
            }),
            (b.prototype.buildRows = function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = this;
                if (((d = document.createDocumentFragment()), (f = h.$slider.children()), h.options.rows > 1)) {
                    for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                        var i = document.createElement("div");
                        for (b = 0; b < h.options.rows; b++) {
                            var j = document.createElement("div");
                            for (c = 0; c < h.options.slidesPerRow; c++) {
                                var k = a * g + (b * h.options.slidesPerRow + c);
                                f.get(k) && j.appendChild(f.get(k));
                            }
                            i.appendChild(j);
                        }
                        d.appendChild(i);
                    }
                    h.$slider.html(d),
                        h.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / h.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (b.prototype.checkResponsive = function (b, c) {
                var d,
                    e,
                    f,
                    g = this,
                    h = !1,
                    i = g.$slider.width(),
                    j = window.innerWidth || a(window).width();
                if (("window" === g.respondTo ? (f = j) : "slider" === g.respondTo ? (f = i) : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive)) {
                    e = null;
                    for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                    null !== e
                        ? null !== g.activeBreakpoint
                            ? (e !== g.activeBreakpoint || c) &&
                              ((g.activeBreakpoint = e),
                              "unslick" === g.breakpointSettings[e] ? g.unslick(e) : ((g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e])), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)),
                              (h = e))
                            : ((g.activeBreakpoint = e),
                              "unslick" === g.breakpointSettings[e] ? g.unslick(e) : ((g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e])), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)),
                              (h = e))
                        : null !== g.activeBreakpoint && ((g.activeBreakpoint = null), (g.options = g.originalSettings), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), (h = e)),
                        b || h === !1 || g.$slider.trigger("breakpoint", [g, h]);
                }
            }),
            (b.prototype.changeSlide = function (b, c) {
                var d,
                    e,
                    f,
                    g = this,
                    h = a(b.target);
                switch ((h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), (f = g.slideCount % g.options.slidesToScroll !== 0), (d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll), b.data.message)) {
                    case "previous":
                        (e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d), g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                        break;
                    case "next":
                        (e = 0 === d ? g.options.slidesToScroll : d), g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                        break;
                    case "index":
                        var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                        g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (b.prototype.checkNavigable = function (a) {
                var b,
                    c,
                    d = this;
                if (((b = d.getNavigableIndexes()), (c = 0), a > b[b.length - 1])) a = b[b.length - 1];
                else
                    for (var e in b) {
                        if (a < b[e]) {
                            a = c;
                            break;
                        }
                        c = b[e];
                    }
                return a;
            }),
            (b.prototype.cleanUpEvents = function () {
                var b = this;
                b.options.dots &&
                    null !== b.$dots &&
                    (a("li", b.$dots).off("click.slick", b.changeSlide),
                    b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))),
                    b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
                    b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
                    b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
                    b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
                    b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
                    b.$list.off("click.slick", b.clickHandler),
                    a(document).off(b.visibilityChange, b.visibility),
                    b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)),
                    b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)),
                    b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
                    a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
                    a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
                    a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
                    a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
                    a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
            }),
            (b.prototype.cleanUpRows = function () {
                var a,
                    b = this;
                b.options.rows > 1 && ((a = b.$slides.children().children()), a.removeAttr("style"), b.$slider.html(a));
            }),
            (b.prototype.clickHandler = function (a) {
                var b = this;
                b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
            }),
            (b.prototype.destroy = function (b) {
                var c = this;
                c.autoPlayClear(),
                    (c.touchObject = {}),
                    c.cleanUpEvents(),
                    a(".slick-cloned", c.$slider).detach(),
                    c.$dots && c.$dots.remove(),
                    c.options.arrows === !0 &&
                        (c.$prevArrow &&
                            c.$prevArrow.length &&
                            (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
                        c.$nextArrow &&
                            c.$nextArrow.length &&
                            (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove())),
                    c.$slides &&
                        (c.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                a(this).attr("style", a(this).data("originalStyling"));
                            }),
                        c.$slideTrack.children(this.options.slide).detach(),
                        c.$slideTrack.detach(),
                        c.$list.detach(),
                        c.$slider.append(c.$slides)),
                    c.cleanUpRows(),
                    c.$slider.removeClass("slick-slider"),
                    c.$slider.removeClass("slick-initialized"),
                    (c.unslicked = !0),
                    b || c.$slider.trigger("destroy", [c]);
            }),
            (b.prototype.disableTransition = function (a) {
                var b = this,
                    c = {};
                (c[b.transitionType] = ""), b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
            }),
            (b.prototype.fadeSlide = function (a, b) {
                var c = this;
                c.cssTransitions === !1
                    ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
                    : (c.applyTransition(a),
                      c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
                      b &&
                          setTimeout(function () {
                              c.disableTransition(a), b.call();
                          }, c.options.speed));
            }),
            (b.prototype.fadeSlideOut = function (a) {
                var b = this;
                b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
            }),
            (b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
                var b = this;
                null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
            }),
            (b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
                var a = this;
                return a.currentSlide;
            }),
            (b.prototype.getDotCount = function () {
                var a = this,
                    b = 0,
                    c = 0,
                    d = 0;
                if (a.options.infinite === !0) for (; b < a.slideCount; ) ++d, (b = c + a.options.slidesToShow), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
                else if (a.options.centerMode === !0) d = a.slideCount;
                else for (; b < a.slideCount; ) ++d, (b = c + a.options.slidesToShow), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
                return d - 1;
            }),
            (b.prototype.getLeft = function (a) {
                var b,
                    c,
                    d,
                    e = this,
                    f = 0;
                return (
                    (e.slideOffset = 0),
                    (c = e.$slides.first().outerHeight(!0)),
                    e.options.infinite === !0
                        ? (e.slideCount > e.options.slidesToShow && ((e.slideOffset = e.slideWidth * e.options.slidesToShow * -1), (f = c * e.options.slidesToShow * -1)),
                          e.slideCount % e.options.slidesToScroll !== 0 &&
                              a + e.options.slidesToScroll > e.slideCount &&
                              e.slideCount > e.options.slidesToShow &&
                              (a > e.slideCount
                                  ? ((e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1), (f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1))
                                  : ((e.slideOffset = (e.slideCount % e.options.slidesToScroll) * e.slideWidth * -1), (f = (e.slideCount % e.options.slidesToScroll) * c * -1))))
                        : a + e.options.slidesToShow > e.slideCount && ((e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth), (f = (a + e.options.slidesToShow - e.slideCount) * c)),
                    e.slideCount <= e.options.slidesToShow && ((e.slideOffset = 0), (f = 0)),
                    e.options.centerMode === !0 && e.options.infinite === !0
                        ? (e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth)
                        : e.options.centerMode === !0 && ((e.slideOffset = 0), (e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2))),
                    (b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f),
                    e.options.variableWidth === !0 &&
                        ((d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow)),
                        (b = d[0] ? -1 * d[0].offsetLeft : 0),
                        e.options.centerMode === !0 &&
                            ((d = e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1)),
                            (b = d[0] ? -1 * d[0].offsetLeft : 0),
                            (b += (e.$list.width() - d.outerWidth()) / 2))),
                    b
                );
            }),
            (b.prototype.getOption = b.prototype.slickGetOption = function (a) {
                var b = this;
                return b.options[a];
            }),
            (b.prototype.getNavigableIndexes = function () {
                var a,
                    b = this,
                    c = 0,
                    d = 0,
                    e = [];
                for (b.options.infinite === !1 ? (a = b.slideCount) : ((c = -1 * b.options.slidesToScroll), (d = -1 * b.options.slidesToScroll), (a = 2 * b.slideCount)); a > c; )
                    e.push(c), (c = d + b.options.slidesToScroll), (d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow);
                return e;
            }),
            (b.prototype.getSlick = function () {
                return this;
            }),
            (b.prototype.getSlideCount = function () {
                var b,
                    c,
                    d,
                    e = this;
                return (
                    (d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0),
                    e.options.swipeToSlide === !0
                        ? (e.$slideTrack.find(".slick-slide").each(function (b, f) {
                              return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? ((c = f), !1) : void 0;
                          }),
                          (b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1))
                        : e.options.slidesToScroll
                );
            }),
            (b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
                var c = this;
                c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
            }),
            (b.prototype.init = function (b) {
                var c = this;
                a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()),
                    b && c.$slider.trigger("init", [c]),
                    c.options.accessibility === !0 && c.initADA();
            }),
            (b.prototype.initArrowEvents = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.on("click.slick", { message: "next" }, a.changeSlide));
            }),
            (b.prototype.initDotEvents = function () {
                var b = this;
                b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
                    b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1));
            }),
            (b.prototype.initializeEvents = function () {
                var b = this;
                b.initArrowEvents(),
                    b.initDotEvents(),
                    b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler),
                    b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler),
                    b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler),
                    b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler),
                    b.$list.on("click.slick", b.clickHandler),
                    a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
                    b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)),
                    b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)),
                    b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                    a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
                    a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
                    a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
                    a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
                    a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
            }),
            (b.prototype.initUI = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()),
                    a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(),
                    a.options.autoplay === !0 && a.autoPlay();
            }),
            (b.prototype.keyHandler = function (a) {
                var b = this;
                a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: "next" } }));
            }),
            (b.prototype.lazyLoad = function () {
                function b(b) {
                    a("img[data-lazy]", b).each(function () {
                        var b = a(this),
                            c = a(this).attr("data-lazy"),
                            d = document.createElement("img");
                        (d.onload = function () {
                            b.animate({ opacity: 0 }, 100, function () {
                                b.attr("src", c).animate({ opacity: 1 }, 200, function () {
                                    b.removeAttr("data-lazy").removeClass("slick-loading");
                                });
                            });
                        }),
                            (d.src = c);
                    });
                }
                var c,
                    d,
                    e,
                    f,
                    g = this;
                g.options.centerMode === !0
                    ? g.options.infinite === !0
                        ? ((e = g.currentSlide + (g.options.slidesToShow / 2 + 1)), (f = e + g.options.slidesToShow + 2))
                        : ((e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1))), (f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide))
                    : ((e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide), (f = e + g.options.slidesToShow), g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)),
                    (c = g.$slider.find(".slick-slide").slice(e, f)),
                    b(c),
                    g.slideCount <= g.options.slidesToShow
                        ? ((d = g.$slider.find(".slick-slide")), b(d))
                        : g.currentSlide >= g.slideCount - g.options.slidesToShow
                        ? ((d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow)), b(d))
                        : 0 === g.currentSlide && ((d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow)), b(d));
            }),
            (b.prototype.loadSlider = function () {
                var a = this;
                a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
            }),
            (b.prototype.next = b.prototype.slickNext = function () {
                var a = this;
                a.changeSlide({ data: { message: "next" } });
            }),
            (b.prototype.orientationChange = function () {
                var a = this;
                a.checkResponsive(), a.setPosition();
            }),
            (b.prototype.pause = b.prototype.slickPause = function () {
                var a = this;
                a.autoPlayClear(), (a.paused = !0);
            }),
            (b.prototype.play = b.prototype.slickPlay = function () {
                var a = this;
                (a.paused = !1), a.autoPlay();
            }),
            (b.prototype.postSlide = function (a) {
                var b = this;
                b.$slider.trigger("afterChange", [b, a]), (b.animating = !1), b.setPosition(), (b.swipeLeft = null), b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA();
            }),
            (b.prototype.prev = b.prototype.slickPrev = function () {
                var a = this;
                a.changeSlide({ data: { message: "previous" } });
            }),
            (b.prototype.preventDefault = function (a) {
                a.preventDefault();
            }),
            (b.prototype.progressiveLazyLoad = function () {
                var b,
                    c,
                    d = this;
                (b = a("img[data-lazy]", d.$slider).length),
                    b > 0 &&
                        ((c = a("img[data-lazy]", d.$slider).first()),
                        c
                            .attr("src", c.attr("data-lazy"))
                            .removeClass("slick-loading")
                            .load(function () {
                                c.removeAttr("data-lazy"), d.progressiveLazyLoad(), d.options.adaptiveHeight === !0 && d.setPosition();
                            })
                            .error(function () {
                                c.removeAttr("data-lazy"), d.progressiveLazyLoad();
                            }));
            }),
            (b.prototype.refresh = function (b) {
                var c = this,
                    d = c.currentSlide;
                c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
            }),
            (b.prototype.registerBreakpoints = function () {
                var b,
                    c,
                    d,
                    e = this,
                    f = e.options.responsive || null;
                if ("array" === a.type(f) && f.length) {
                    e.respondTo = e.options.respondTo || "window";
                    for (b in f)
                        if (((d = e.breakpoints.length - 1), (c = f[b].breakpoint), f.hasOwnProperty(b))) {
                            for (; d >= 0; ) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                            e.breakpoints.push(c), (e.breakpointSettings[c] = f[b].settings);
                        }
                    e.breakpoints.sort(function (a, b) {
                        return e.options.mobileFirst ? a - b : b - a;
                    });
                }
            }),
            (b.prototype.reinit = function () {
                var b = this;
                (b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide")),
                    (b.slideCount = b.$slides.length),
                    b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
                    b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
                    b.registerBreakpoints(),
                    b.setProps(),
                    b.setupInfinite(),
                    b.buildArrows(),
                    b.updateArrows(),
                    b.initArrowEvents(),
                    b.buildDots(),
                    b.updateDots(),
                    b.initDotEvents(),
                    b.checkResponsive(!1, !0),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                    b.setSlideClasses(0),
                    b.setPosition(),
                    b.$slider.trigger("reInit", [b]),
                    b.options.autoplay === !0 && b.focusHandler();
            }),
            (b.prototype.resize = function () {
                var b = this;
                a(window).width() !== b.windowWidth &&
                    (clearTimeout(b.windowDelay),
                    (b.windowDelay = window.setTimeout(function () {
                        (b.windowWidth = a(window).width()), b.checkResponsive(), b.unslicked || b.setPosition();
                    }, 50)));
            }),
            (b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
                var d = this;
                return (
                    "boolean" == typeof a ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1)) : (a = b === !0 ? --a : a),
                    d.slideCount < 1 || 0 > a || a > d.slideCount - 1
                        ? !1
                        : (d.unload(),
                          c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
                          (d.$slides = d.$slideTrack.children(this.options.slide)),
                          d.$slideTrack.children(this.options.slide).detach(),
                          d.$slideTrack.append(d.$slides),
                          (d.$slidesCache = d.$slides),
                          void d.reinit())
                );
            }),
            (b.prototype.setCSS = function (a) {
                var b,
                    c,
                    d = this,
                    e = {};
                d.options.rtl === !0 && (a = -a),
                    (b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px"),
                    (c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px"),
                    (e[d.positionProp] = a),
                    d.transformsEnabled === !1
                        ? d.$slideTrack.css(e)
                        : ((e = {}), d.cssTransitions === !1 ? ((e[d.animType] = "translate(" + b + ", " + c + ")"), d.$slideTrack.css(e)) : ((e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)"), d.$slideTrack.css(e)));
            }),
            (b.prototype.setDimensions = function () {
                var a = this;
                a.options.vertical === !1
                    ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding })
                    : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })),
                    (a.listWidth = a.$list.width()),
                    (a.listHeight = a.$list.height()),
                    a.options.vertical === !1 && a.options.variableWidth === !1
                        ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)))
                        : a.options.variableWidth === !0
                        ? a.$slideTrack.width(5e3 * a.slideCount)
                        : ((a.slideWidth = Math.ceil(a.listWidth)), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
                var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
                a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
            }),
            (b.prototype.setFade = function () {
                var b,
                    c = this;
                c.$slides.each(function (d, e) {
                    (b = c.slideWidth * d * -1),
                        c.options.rtl === !0 ? a(e).css({ position: "relative", right: b, top: 0, zIndex: c.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: b, top: 0, zIndex: c.options.zIndex - 2, opacity: 0 });
                }),
                    c.$slides.eq(c.currentSlide).css({ zIndex: c.options.zIndex - 1, opacity: 1 });
            }),
            (b.prototype.setHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.css("height", b);
                }
            }),
            (b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
                var e,
                    f,
                    g = this;
                if ("responsive" === b && "array" === a.type(c))
                    for (f in c)
                        if ("array" !== a.type(g.options.responsive)) g.options.responsive = [c[f]];
                        else {
                            for (e = g.options.responsive.length - 1; e >= 0; ) g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1), e--;
                            g.options.responsive.push(c[f]);
                        }
                else g.options[b] = c;
                d === !0 && (g.unload(), g.reinit());
            }),
            (b.prototype.setPosition = function () {
                var a = this;
                a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
            }),
            (b.prototype.setProps = function () {
                var a = this,
                    b = document.body.style;
                (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
                    "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
                    (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
                    a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : (a.options.zIndex = a.defaults.zIndex)),
                    void 0 !== b.OTransform && ((a.animType = "OTransform"), (a.transformType = "-o-transform"), (a.transitionType = "OTransition"), void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                    void 0 !== b.MozTransform &&
                        ((a.animType = "MozTransform"), (a.transformType = "-moz-transform"), (a.transitionType = "MozTransition"), void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
                    void 0 !== b.webkitTransform &&
                        ((a.animType = "webkitTransform"), (a.transformType = "-webkit-transform"), (a.transitionType = "webkitTransition"), void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                    void 0 !== b.msTransform && ((a.animType = "msTransform"), (a.transformType = "-ms-transform"), (a.transitionType = "msTransition"), void 0 === b.msTransform && (a.animType = !1)),
                    void 0 !== b.transform && a.animType !== !1 && ((a.animType = "transform"), (a.transformType = "transform"), (a.transitionType = "transition")),
                    (a.transformsEnabled = null !== a.animType && a.animType !== !1);
            }),
            (b.prototype.setSlideClasses = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f = this;
                (c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")),
                    f.$slides.eq(a).addClass("slick-current"),
                    f.options.centerMode === !0
                        ? ((b = Math.floor(f.options.slidesToShow / 2)),
                          f.options.infinite === !0 &&
                              (a >= b && a <= f.slideCount - 1 - b
                                  ? f.$slides
                                        .slice(a - b, a + b + 1)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")
                                  : ((d = f.options.slidesToShow + a),
                                    c
                                        .slice(d - b + 1, d + b + 2)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")),
                              0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")),
                          f.$slides.eq(a).addClass("slick-center"))
                        : a >= 0 && a <= f.slideCount - f.options.slidesToShow
                        ? f.$slides
                              .slice(a, a + f.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : c.length <= f.options.slidesToShow
                        ? c.addClass("slick-active").attr("aria-hidden", "false")
                        : ((e = f.slideCount % f.options.slidesToShow),
                          (d = f.options.infinite === !0 ? f.options.slidesToShow + a : a),
                          f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow
                              ? c
                                    .slice(d - (f.options.slidesToShow - e), d + e)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : c
                                    .slice(d, d + f.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")),
                    "ondemand" === f.options.lazyLoad && f.lazyLoad();
            }),
            (b.prototype.setupInfinite = function () {
                var b,
                    c,
                    d,
                    e = this;
                if ((e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && ((c = null), e.slideCount > e.options.slidesToShow))) {
                    for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1)
                        (c = b - 1),
                            a(e.$slides[c])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", c - e.slideCount)
                                .prependTo(e.$slideTrack)
                                .addClass("slick-cloned");
                    for (b = 0; d > b; b += 1)
                        (c = b),
                            a(e.$slides[c])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", c + e.slideCount)
                                .appendTo(e.$slideTrack)
                                .addClass("slick-cloned");
                    e.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            a(this).attr("id", "");
                        });
                }
            }),
            (b.prototype.setPaused = function (a) {
                var b = this;
                b.options.autoplay === !0 && b.options.pauseOnHover === !0 && ((b.paused = a), a ? b.autoPlayClear() : b.autoPlay());
            }),
            (b.prototype.selectHandler = function (b) {
                var c = this,
                    d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                    e = parseInt(d.attr("data-slick-index"));
                return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
            }),
            (b.prototype.slideHandler = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h = null,
                    i = this;
                return (
                    (b = b || !1),
                    (i.animating === !0 && i.options.waitForAnimate === !0) || (i.options.fade === !0 && i.currentSlide === a) || i.slideCount <= i.options.slidesToShow
                        ? void 0
                        : (b === !1 && i.asNavFor(a),
                          (d = a),
                          (h = i.getLeft(d)),
                          (g = i.getLeft(i.currentSlide)),
                          (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
                          i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
                              ? void (
                                    i.options.fade === !1 &&
                                    ((d = i.currentSlide),
                                    c !== !0
                                        ? i.animateSlide(g, function () {
                                              i.postSlide(d);
                                          })
                                        : i.postSlide(d))
                                )
                              : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll)
                              ? void (
                                    i.options.fade === !1 &&
                                    ((d = i.currentSlide),
                                    c !== !0
                                        ? i.animateSlide(g, function () {
                                              i.postSlide(d);
                                          })
                                        : i.postSlide(d))
                                )
                              : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer),
                                (e =
                                    0 > d
                                        ? i.slideCount % i.options.slidesToScroll !== 0
                                            ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                                            : i.slideCount + d
                                        : d >= i.slideCount
                                        ? i.slideCount % i.options.slidesToScroll !== 0
                                            ? 0
                                            : d - i.slideCount
                                        : d),
                                (i.animating = !0),
                                i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                                (f = i.currentSlide),
                                (i.currentSlide = e),
                                i.setSlideClasses(i.currentSlide),
                                i.updateDots(),
                                i.updateArrows(),
                                i.options.fade === !0
                                    ? (c !== !0
                                          ? (i.fadeSlideOut(f),
                                            i.fadeSlide(e, function () {
                                                i.postSlide(e);
                                            }))
                                          : i.postSlide(e),
                                      void i.animateHeight())
                                    : void (c !== !0
                                          ? i.animateSlide(h, function () {
                                                i.postSlide(e);
                                            })
                                          : i.postSlide(e))))
                );
            }),
            (b.prototype.startLoad = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()),
                    a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
                    a.$slider.addClass("slick-loading");
            }),
            (b.prototype.swipeDirection = function () {
                var a,
                    b,
                    c,
                    d,
                    e = this;
                return (
                    (a = e.touchObject.startX - e.touchObject.curX),
                    (b = e.touchObject.startY - e.touchObject.curY),
                    (c = Math.atan2(b, a)),
                    (d = Math.round((180 * c) / Math.PI)),
                    0 > d && (d = 360 - Math.abs(d)),
                    45 >= d && d >= 0
                        ? e.options.rtl === !1
                            ? "left"
                            : "right"
                        : 360 >= d && d >= 315
                        ? e.options.rtl === !1
                            ? "left"
                            : "right"
                        : d >= 135 && 225 >= d
                        ? e.options.rtl === !1
                            ? "right"
                            : "left"
                        : e.options.verticalSwiping === !0
                        ? d >= 35 && 135 >= d
                            ? "left"
                            : "right"
                        : "vertical"
                );
            }),
            (b.prototype.swipeEnd = function (a) {
                var b,
                    c = this;
                if (((c.dragging = !1), (c.shouldClick = c.touchObject.swipeLength > 10 ? !1 : !0), void 0 === c.touchObject.curX)) return !1;
                if ((c.touchObject.edgeHit === !0 && c.$slider.trigger("edge", [c, c.swipeDirection()]), c.touchObject.swipeLength >= c.touchObject.minSwipe))
                    switch (c.swipeDirection()) {
                        case "left":
                            (b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide + c.getSlideCount()) : c.currentSlide + c.getSlideCount()),
                                c.slideHandler(b),
                                (c.currentDirection = 0),
                                (c.touchObject = {}),
                                c.$slider.trigger("swipe", [c, "left"]);
                            break;
                        case "right":
                            (b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide - c.getSlideCount()) : c.currentSlide - c.getSlideCount()),
                                c.slideHandler(b),
                                (c.currentDirection = 1),
                                (c.touchObject = {}),
                                c.$slider.trigger("swipe", [c, "right"]);
                    }
                else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), (c.touchObject = {}));
            }),
            (b.prototype.swipeHandler = function (a) {
                var b = this;
                if (!(b.options.swipe === !1 || ("ontouchend" in document && b.options.swipe === !1) || (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))))
                    switch (
                        ((b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1),
                        (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
                        b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
                        a.data.action)
                    ) {
                        case "start":
                            b.swipeStart(a);
                            break;
                        case "move":
                            b.swipeMove(a);
                            break;
                        case "end":
                            b.swipeEnd(a);
                    }
            }),
            (b.prototype.swipeMove = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = this;
                return (
                    (f = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
                    !g.dragging || (f && 1 !== f.length)
                        ? !1
                        : ((b = g.getLeft(g.currentSlide)),
                          (g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX),
                          (g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY),
                          (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2)))),
                          g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))),
                          (c = g.swipeDirection()),
                          "vertical" !== c
                              ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(),
                                (e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1)),
                                g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1),
                                (d = g.touchObject.swipeLength),
                                (g.touchObject.edgeHit = !1),
                                g.options.infinite === !1 &&
                                    ((0 === g.currentSlide && "right" === c) || (g.currentSlide >= g.getDotCount() && "left" === c)) &&
                                    ((d = g.touchObject.swipeLength * g.options.edgeFriction), (g.touchObject.edgeHit = !0)),
                                g.options.vertical === !1 ? (g.swipeLeft = b + d * e) : (g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e),
                                g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e),
                                g.options.fade === !0 || g.options.touchMove === !1 ? !1 : g.animating === !0 ? ((g.swipeLeft = null), !1) : void g.setCSS(g.swipeLeft))
                              : void 0)
                );
            }),
            (b.prototype.swipeStart = function (a) {
                var b,
                    c = this;
                return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow
                    ? ((c.touchObject = {}), !1)
                    : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]),
                      (c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX),
                      (c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY),
                      void (c.dragging = !0));
            }),
            (b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
                var a = this;
                null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
            }),
            (b.prototype.unload = function () {
                var b = this;
                a(".slick-cloned", b.$slider).remove(),
                    b.$dots && b.$dots.remove(),
                    b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
                    b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
                    b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (b.prototype.unslick = function (a) {
                var b = this;
                b.$slider.trigger("unslick", [b, a]), b.destroy();
            }),
            (b.prototype.updateArrows = function () {
                var a,
                    b = this;
                (a = Math.floor(b.options.slidesToShow / 2)),
                    b.options.arrows === !0 &&
                        b.slideCount > b.options.slidesToShow &&
                        !b.options.infinite &&
                        (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === b.currentSlide
                            ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1
                            ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : b.currentSlide >= b.slideCount - 1 &&
                              b.options.centerMode === !0 &&
                              (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (b.prototype.updateDots = function () {
                var a = this;
                null !== a.$dots &&
                    (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
                    a.$dots
                        .find("li")
                        .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
                        .addClass("slick-active")
                        .attr("aria-hidden", "false"));
            }),
            (b.prototype.visibility = function () {
                var a = this;
                document[a.hidden] ? ((a.paused = !0), a.autoPlayClear()) : a.options.autoplay === !0 && ((a.paused = !1), a.autoPlay());
            }),
            (b.prototype.initADA = function () {
                var b = this;
                b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    b.$slideTrack.attr("role", "listbox"),
                    b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                        a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
                    }),
                    null !== b.$dots &&
                        b.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (c) {
                                a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
                            })
                            .first()
                            .attr("aria-selected", "true")
                            .end()
                            .find("button")
                            .attr("role", "button")
                            .end()
                            .closest("div")
                            .attr("role", "toolbar"),
                    b.activateADA();
            }),
            (b.prototype.activateADA = function () {
                var a = this,
                    b = a.$slider.find("*").is(":focus");
                a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false", tabindex: "0" }).find("a, input, button, select").attr({ tabindex: "0" }), b && a.$slideTrack.find(".slick-active").focus();
            }),
            (b.prototype.focusHandler = function () {
                var b = this;
                b.$slider.on("focus.slick blur.slick", "*", function (c) {
                    c.stopImmediatePropagation();
                    var d = a(this);
                    setTimeout(function () {
                        b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), (b.paused = !0)) : ((b.paused = !1), b.autoPlay()));
                    }, 0);
                });
            }),
            (a.fn.slick = function () {
                var a,
                    c = this,
                    d = arguments[0],
                    e = Array.prototype.slice.call(arguments, 1),
                    f = c.length,
                    g = 0;
                for (g; f > g; g++) if (("object" == typeof d || "undefined" == typeof d ? (c[g].slick = new b(c[g], d)) : (a = c[g].slick[d].apply(c[g].slick, e)), "undefined" != typeof a)) return a;
                return c;
            });
    }),
    (function () {
        "use strict";
        function a(d) {
            if (!d) throw new Error("No options passed to Waypoint constructor");
            if (!d.element) throw new Error("No element option passed to Waypoint constructor");
            if (!d.handler) throw new Error("No handler option passed to Waypoint constructor");
            (this.key = "waypoint-" + b),
                (this.options = a.Adapter.extend({}, a.defaults, d)),
                (this.element = this.options.element),
                (this.adapter = new a.Adapter(this.element)),
                (this.callback = d.handler),
                (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
                (this.enabled = this.options.enabled),
                (this.triggerPoint = null),
                (this.group = a.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
                (this.context = a.Context.findOrCreateByElement(this.options.context)),
                a.offsetAliases[this.options.offset] && (this.options.offset = a.offsetAliases[this.options.offset]),
                this.group.add(this),
                this.context.add(this),
                (c[this.key] = this),
                (b += 1);
        }
        var b = 0,
            c = {};
        (a.prototype.queueTrigger = function (a) {
            this.group.queueTrigger(this, a);
        }),
            (a.prototype.trigger = function (a) {
                this.enabled && this.callback && this.callback.apply(this, a);
            }),
            (a.prototype.destroy = function () {
                this.context.remove(this), this.group.remove(this), delete c[this.key];
            }),
            (a.prototype.disable = function () {
                return (this.enabled = !1), this;
            }),
            (a.prototype.enable = function () {
                return this.context.refresh(), (this.enabled = !0), this;
            }),
            (a.prototype.next = function () {
                return this.group.next(this);
            }),
            (a.prototype.previous = function () {
                return this.group.previous(this);
            }),
            (a.invokeAll = function (a) {
                var b = [];
                for (var d in c) b.push(c[d]);
                for (var e = 0, f = b.length; f > e; e++) b[e][a]();
            }),
            (a.destroyAll = function () {
                a.invokeAll("destroy");
            }),
            (a.disableAll = function () {
                a.invokeAll("disable");
            }),
            (a.enableAll = function () {
                a.invokeAll("enable");
            }),
            (a.refreshAll = function () {
                a.Context.refreshAll();
            }),
            (a.viewportHeight = function () {
                return window.innerHeight || document.documentElement.clientHeight;
            }),
            (a.viewportWidth = function () {
                return document.documentElement.clientWidth;
            }),
            (a.adapters = []),
            (a.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
            (a.offsetAliases = {
                "bottom-in-view": function () {
                    return this.context.innerHeight() - this.adapter.outerHeight();
                },
                "right-in-view": function () {
                    return this.context.innerWidth() - this.adapter.outerWidth();
                },
            }),
            (window.Waypoint = a);
    })(),
    (function () {
        "use strict";
        function a(a) {
            window.setTimeout(a, 1e3 / 60);
        }
        function b(a) {
            (this.element = a),
                (this.Adapter = e.Adapter),
                (this.adapter = new this.Adapter(a)),
                (this.key = "waypoint-context-" + c),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (a.waypointContextKey = this.key),
                (d[a.waypointContextKey] = this),
                (c += 1),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var c = 0,
            d = {},
            e = window.Waypoint,
            f = window.onload;
        (b.prototype.add = function (a) {
            var b = a.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[b][a.key] = a), this.refresh();
        }),
            (b.prototype.checkEmpty = function () {
                var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    b = this.Adapter.isEmptyObject(this.waypoints.vertical);
                a && b && (this.adapter.off(".waypoints"), delete d[this.key]);
            }),
            (b.prototype.createThrottledResizeHandler = function () {
                function a() {
                    b.handleResize(), (b.didResize = !1);
                }
                var b = this;
                this.adapter.on("resize.waypoints", function () {
                    b.didResize || ((b.didResize = !0), e.requestAnimationFrame(a));
                });
            }),
            (b.prototype.createThrottledScrollHandler = function () {
                function a() {
                    b.handleScroll(), (b.didScroll = !1);
                }
                var b = this;
                this.adapter.on("scroll.waypoints", function () {
                    (!b.didScroll || e.isTouch) && ((b.didScroll = !0), e.requestAnimationFrame(a));
                });
            }),
            (b.prototype.handleResize = function () {
                e.Context.refreshAll();
            }),
            (b.prototype.handleScroll = function () {
                var a = {},
                    b = {
                        horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                        vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                    };
                for (var c in b) {
                    var d = b[c],
                        e = d.newScroll > d.oldScroll,
                        f = e ? d.forward : d.backward;
                    for (var g in this.waypoints[c]) {
                        var h = this.waypoints[c][g],
                            i = d.oldScroll < h.triggerPoint,
                            j = d.newScroll >= h.triggerPoint,
                            k = i && j,
                            l = !i && !j;
                        (k || l) && (h.queueTrigger(f), (a[h.group.id] = h.group));
                    }
                }
                for (var m in a) a[m].flushTriggers();
                this.oldScroll = { x: b.horizontal.newScroll, y: b.vertical.newScroll };
            }),
            (b.prototype.innerHeight = function () {
                return this.element == this.element.window ? e.viewportHeight() : this.adapter.innerHeight();
            }),
            (b.prototype.remove = function (a) {
                delete this.waypoints[a.axis][a.key], this.checkEmpty();
            }),
            (b.prototype.innerWidth = function () {
                return this.element == this.element.window ? e.viewportWidth() : this.adapter.innerWidth();
            }),
            (b.prototype.destroy = function () {
                var a = [];
                for (var b in this.waypoints) for (var c in this.waypoints[b]) a.push(this.waypoints[b][c]);
                for (var d = 0, e = a.length; e > d; d++) a[d].destroy();
            }),
            (b.prototype.refresh = function () {
                var a,
                    b = this.element == this.element.window,
                    c = b ? void 0 : this.adapter.offset(),
                    d = {};
                this.handleScroll(),
                    (a = {
                        horizontal: { contextOffset: b ? 0 : c.left, contextScroll: b ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" },
                        vertical: { contextOffset: b ? 0 : c.top, contextScroll: b ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" },
                    });
                for (var f in a) {
                    var g = a[f];
                    for (var h in this.waypoints[f]) {
                        var i,
                            j,
                            k,
                            l,
                            m,
                            n = this.waypoints[f][h],
                            o = n.options.offset,
                            p = n.triggerPoint,
                            q = 0,
                            r = null == p;
                        n.element !== n.element.window && (q = n.adapter.offset()[g.offsetProp]),
                            "function" == typeof o ? (o = o.apply(n)) : "string" == typeof o && ((o = parseFloat(o)), n.options.offset.indexOf("%") > -1 && (o = Math.ceil((g.contextDimension * o) / 100))),
                            (i = g.contextScroll - g.contextOffset),
                            (n.triggerPoint = q + i - o),
                            (j = p < g.oldScroll),
                            (k = n.triggerPoint >= g.oldScroll),
                            (l = j && k),
                            (m = !j && !k),
                            !r && l
                                ? (n.queueTrigger(g.backward), (d[n.group.id] = n.group))
                                : !r && m
                                ? (n.queueTrigger(g.forward), (d[n.group.id] = n.group))
                                : r && g.oldScroll >= n.triggerPoint && (n.queueTrigger(g.forward), (d[n.group.id] = n.group));
                    }
                }
                return (
                    e.requestAnimationFrame(function () {
                        for (var a in d) d[a].flushTriggers();
                    }),
                    this
                );
            }),
            (b.findOrCreateByElement = function (a) {
                return b.findByElement(a) || new b(a);
            }),
            (b.refreshAll = function () {
                for (var a in d) d[a].refresh();
            }),
            (b.findByElement = function (a) {
                return d[a.waypointContextKey];
            }),
            (window.onload = function () {
                f && f(), b.refreshAll();
            }),
            (e.requestAnimationFrame = function (b) {
                var c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || a;
                c.call(window, b);
            }),
            (e.Context = b);
    })(),
    (function () {
        "use strict";
        function a(a, b) {
            return a.triggerPoint - b.triggerPoint;
        }
        function b(a, b) {
            return b.triggerPoint - a.triggerPoint;
        }
        function c(a) {
            (this.name = a.name), (this.axis = a.axis), (this.id = this.name + "-" + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (d[this.axis][this.name] = this);
        }
        var d = { vertical: {}, horizontal: {} },
            e = window.Waypoint;
        (c.prototype.add = function (a) {
            this.waypoints.push(a);
        }),
            (c.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (c.prototype.flushTriggers = function () {
                for (var c in this.triggerQueues) {
                    var d = this.triggerQueues[c],
                        e = "up" === c || "left" === c;
                    d.sort(e ? b : a);
                    for (var f = 0, g = d.length; g > f; f += 1) {
                        var h = d[f];
                        (h.options.continuous || f === d.length - 1) && h.trigger([c]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (c.prototype.next = function (b) {
                this.waypoints.sort(a);
                var c = e.Adapter.inArray(b, this.waypoints),
                    d = c === this.waypoints.length - 1;
                return d ? null : this.waypoints[c + 1];
            }),
            (c.prototype.previous = function (b) {
                this.waypoints.sort(a);
                var c = e.Adapter.inArray(b, this.waypoints);
                return c ? this.waypoints[c - 1] : null;
            }),
            (c.prototype.queueTrigger = function (a, b) {
                this.triggerQueues[b].push(a);
            }),
            (c.prototype.remove = function (a) {
                var b = e.Adapter.inArray(a, this.waypoints);
                b > -1 && this.waypoints.splice(b, 1);
            }),
            (c.prototype.first = function () {
                return this.waypoints[0];
            }),
            (c.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (c.findOrCreate = function (a) {
                return d[a.axis][a.name] || new c(a);
            }),
            (e.Group = c);
    })(),
    (function () {
        "use strict";
        function a(a) {
            this.$element = b(a);
        }
        var b = window.jQuery,
            c = window.Waypoint;
        b.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (b, c) {
            a.prototype[c] = function () {
                var a = Array.prototype.slice.call(arguments);
                return this.$element[c].apply(this.$element, a);
            };
        }),
            b.each(["extend", "inArray", "isEmptyObject"], function (c, d) {
                a[d] = b[d];
            }),
            c.adapters.push({ name: "jquery", Adapter: a }),
            (c.Adapter = a);
    })(),
    (function () {
        "use strict";
        function a(a) {
            return function () {
                var c = [],
                    d = arguments[0];
                return (
                    a.isFunction(arguments[0]) && ((d = a.extend({}, arguments[1])), (d.handler = arguments[0])),
                    this.each(function () {
                        var e = a.extend({}, d, { element: this });
                        "string" == typeof e.context && (e.context = a(this).closest(e.context)[0]), c.push(new b(e));
                    }),
                    c
                );
            };
        }
        var b = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto));
    })(),
    !(function (a, b, c) {
        function d(a, b) {
            return typeof a === b;
        }
        function e() {
            var a, b, c, e, f, g, h;
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    if (((a = []), (b = t[i]), b.name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length))) for (c = 0; c < b.options.aliases.length; c++) a.push(b.options.aliases[c].toLowerCase());
                    for (e = d(b.fn, "function") ? b.fn() : b.fn, f = 0; f < a.length; f++)
                        (g = a[f]), (h = g.split(".")), 1 === h.length ? (v[h[0]] = e) : (!v[h[0]] || v[h[0]] instanceof Boolean || (v[h[0]] = new Boolean(v[h[0]])), (v[h[0]][h[1]] = e)), s.push((e ? "" : "no-") + h.join("-"));
                }
        }
        function f(a) {
            var b = w.className,
                c = v._config.classPrefix || "";
            if ((x && (b = b.baseVal), v._config.enableJSClass)) {
                var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");
                b = b.replace(d, "$1" + c + "js$2");
            }
            v._config.enableClasses && ((b += " " + c + a.join(" " + c)), x ? (w.className.baseVal = b) : (w.className = b));
        }
        function g() {
            return "function" != typeof b.createElement ? b.createElement(arguments[0]) : x ? b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]) : b.createElement.apply(b, arguments);
        }
        function h(a) {
            return a
                .replace(/([a-z])-([a-z])/g, function (a, b, c) {
                    return b + c.toUpperCase();
                })
                .replace(/^-/, "");
        }
        function i(a, b) {
            return !!~("" + a).indexOf(b);
        }
        function j(a, b) {
            return function () {
                return a.apply(b, arguments);
            };
        }
        function k(a, b, c) {
            var e;
            for (var f in a) if (a[f] in b) return c === !1 ? a[f] : ((e = b[a[f]]), d(e, "function") ? j(e, c || b) : e);
            return !1;
        }
        function l(a) {
            return a
                .replace(/([A-Z])/g, function (a, b) {
                    return "-" + b.toLowerCase();
                })
                .replace(/^ms-/, "-ms-");
        }
        function m() {
            var a = b.body;
            return a || ((a = g(x ? "svg" : "body")), (a.fake = !0)), a;
        }
        function n(a, c, d, e) {
            var f,
                h,
                i,
                j,
                k = "modernizr",
                l = g("div"),
                n = m();
            if (parseInt(d, 10)) for (; d--; ) (i = g("div")), (i.id = e ? e[d] : k + (d + 1)), l.appendChild(i);
            return (
                (f = g("style")),
                (f.type = "text/css"),
                (f.id = "s" + k),
                (n.fake ? n : l).appendChild(f),
                n.appendChild(l),
                f.styleSheet ? (f.styleSheet.cssText = a) : f.appendChild(b.createTextNode(a)),
                (l.id = k),
                n.fake && ((n.style.background = ""), (n.style.overflow = "hidden"), (j = w.style.overflow), (w.style.overflow = "hidden"), w.appendChild(n)),
                (h = c(l, a)),
                n.fake ? (n.parentNode.removeChild(n), (w.style.overflow = j), w.offsetHeight) : l.parentNode.removeChild(l),
                !!h
            );
        }
        function o(b, d) {
            var e = b.length;
            if ("CSS" in a && "supports" in a.CSS) {
                for (; e--; ) if (a.CSS.supports(l(b[e]), d)) return !0;
                return !1;
            }
            if ("CSSSupportsRule" in a) {
                for (var f = []; e--; ) f.push("(" + l(b[e]) + ":" + d + ")");
                return (
                    (f = f.join(" or ")),
                    n("@supports (" + f + ") { #modernizr { position: absolute; } }", function (a) {
                        return "absolute" == getComputedStyle(a, null).position;
                    })
                );
            }
            return c;
        }
        function p(a, b, e, f) {
            function j() {
                l && (delete E.style, delete E.modElem);
            }
            if (((f = d(f, "undefined") ? !1 : f), !d(e, "undefined"))) {
                var k = o(a, e);
                if (!d(k, "undefined")) return k;
            }
            for (var l, m, n, p, q, r = ["modernizr", "tspan", "samp"]; !E.style && r.length; ) (l = !0), (E.modElem = g(r.shift())), (E.style = E.modElem.style);
            for (n = a.length, m = 0; n > m; m++)
                if (((p = a[m]), (q = E.style[p]), i(p, "-") && (p = h(p)), E.style[p] !== c)) {
                    if (f || d(e, "undefined")) return j(), "pfx" == b ? p : !0;
                    try {
                        E.style[p] = e;
                    } catch (s) {}
                    if (E.style[p] != q) return j(), "pfx" == b ? p : !0;
                }
            return j(), !1;
        }
        function q(a, b, c, e, f) {
            var g = a.charAt(0).toUpperCase() + a.slice(1),
                h = (a + " " + A.join(g + " ") + g).split(" ");
            return d(b, "string") || d(b, "undefined") ? p(h, b, e, f) : ((h = (a + " " + B.join(g + " ") + g).split(" ")), k(h, b, c));
        }
        function r(a, b, d) {
            return q(a, c, c, b, d);
        }
        var s = [],
            t = [],
            u = {
                _version: "3.3.1",
                _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
                _q: [],
                on: function (a, b) {
                    var c = this;
                    setTimeout(function () {
                        b(c[a]);
                    }, 0);
                },
                addTest: function (a, b, c) {
                    t.push({ name: a, fn: b, options: c });
                },
                addAsyncTest: function (a) {
                    t.push({ name: null, fn: a });
                },
            },
            v = function () {};
        (v.prototype = u), (v = new v());
        var w = b.documentElement,
            x = "svg" === w.nodeName.toLowerCase(),
            y = u._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        (u._prefixes = y),
            v.addTest("cssgradients", function () {
                for (var a, b = "background-image:", c = "gradient(linear,left top,right bottom,from(#9f9),to(white));", d = "", e = 0, f = y.length - 1; f > e; e++)
                    (a = 0 === e ? "to " : ""), (d += b + y[e] + "linear-gradient(" + a + "left top, #9f9, white);");
                v._config.usePrefixes && (d += b + "-webkit-" + c);
                var h = g("a"),
                    i = h.style;
                return (i.cssText = d), ("" + i.backgroundImage).indexOf("gradient") > -1;
            }),
            v.addTest("multiplebgs", function () {
                var a = g("a").style;
                return (a.cssText = "background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(a.background);
            });
        var z = "Moz O ms Webkit",
            A = u._config.usePrefixes ? z.split(" ") : [];
        u._cssomPrefixes = A;
        var B = u._config.usePrefixes ? z.toLowerCase().split(" ") : [];
        u._domPrefixes = B;
        var C = function (b) {
            var d,
                e = y.length,
                f = a.CSSRule;
            if ("undefined" == typeof f) return c;
            if (!b) return !1;
            if (((b = b.replace(/^@/, "")), (d = b.replace(/-/g, "_").toUpperCase() + "_RULE"), d in f)) return "@" + b;
            for (var g = 0; e > g; g++) {
                var h = y[g],
                    i = h.toUpperCase() + "_" + d;
                if (i in f) return "@-" + h.toLowerCase() + "-" + b;
            }
            return !1;
        };
        u.atRule = C;
        var D = { elem: g("modernizr") };
        v._q.push(function () {
            delete D.elem;
        });
        var E = { style: D.elem.style };
        v._q.unshift(function () {
            delete E.style;
        }),
            (u.testAllProps = q),
            (u.testAllProps = r),
            v.addTest("cssanimations", r("animationName", "a", !0)),
            v.addTest("flexbox", r("flexBasis", "1px", !0));
        var F = (u.prefixed = function (a, b, c) {
            return 0 === a.indexOf("@") ? C(a) : (-1 != a.indexOf("-") && (a = h(a)), b ? q(a, b, c) : q(a, "pfx"));
        });
        v.addTest("backgroundblendmode", F("backgroundBlendMode", "text")), e(), f(s), delete u.addTest, delete u.addAsyncTest;
        for (var G = 0; G < v._q.length; G++) v._q[G]();
        a.Modernizr = v;
    })(window, document);
var Konami = function (a) {
    var b = {
        addEvent: function (a, b, c, d) {
            a.addEventListener
                ? a.addEventListener(b, c, !1)
                : a.attachEvent &&
                  ((a["e" + b + c] = c),
                  (a[b + c] = function () {
                      a["e" + b + c](window.event, d);
                  }),
                  a.attachEvent("on" + b, a[b + c]));
        },
        input: "",
        pattern: "38384040373937396665",
        load: function (a) {
            this.addEvent(
                document,
                "keydown",
                function (c, d) {
                    return (
                        d && (b = d),
                        (b.input += c ? c.keyCode : event.keyCode),
                        b.input.length > b.pattern.length && (b.input = b.input.substr(b.input.length - b.pattern.length)),
                        b.input == b.pattern ? (b.code(a), (b.input = ""), c.preventDefault(), !1) : void 0
                    );
                },
                this
            ),
                this.iphone.load(a);
        },
        code: function (a) {
            window.location = a;
        },
        iphone: {
            start_x: 0,
            start_y: 0,
            stop_x: 0,
            stop_y: 0,
            tap: !1,
            capture: !1,
            orig_keys: "",
            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
            code: function (a) {
                b.code(a);
            },
            load: function (a) {
                (this.orig_keys = this.keys),
                    b.addEvent(document, "touchmove", function (a) {
                        if (1 == a.touches.length && 1 == b.iphone.capture) {
                            var c = a.touches[0];
                            (b.iphone.stop_x = c.pageX), (b.iphone.stop_y = c.pageY), (b.iphone.tap = !1), (b.iphone.capture = !1), b.iphone.check_direction();
                        }
                    }),
                    b.addEvent(
                        document,
                        "touchend",
                        function (c) {
                            1 == b.iphone.tap && b.iphone.check_direction(a);
                        },
                        !1
                    ),
                    b.addEvent(document, "touchstart", function (a) {
                        (b.iphone.start_x = a.changedTouches[0].pageX), (b.iphone.start_y = a.changedTouches[0].pageY), (b.iphone.tap = !0), (b.iphone.capture = !0);
                    });
            },
            check_direction: function (a) {
                (x_magnitude = Math.abs(this.start_x - this.stop_x)),
                    (y_magnitude = Math.abs(this.start_y - this.stop_y)),
                    (x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT"),
                    (y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP"),
                    (result = x_magnitude > y_magnitude ? x : y),
                    (result = 1 == this.tap ? "TAP" : result),
                    result == this.keys[0] && (this.keys = this.keys.slice(1, this.keys.length)),
                    0 == this.keys.length && ((this.keys = this.orig_keys), this.code(a));
            },
        },
    };
    return "string" == typeof a && b.load(a), "function" == typeof a && ((b.code = a), b.load()), b;
};
$(document).ready(function () {
    if ($("#gg-views").length) {
        new Waypoint({
            element: document.getElementById("gg-views"),
            handler: function () {
                $("#gg-views .hand").removeClass("play");
            },
            offset: 160,
        }),
            new Waypoint({
                element: document.getElementById("gg-views"),
                handler: function () {
                    $("#gg-views .hand").addClass("play");
                },
                offset: 150,
            }),
            new Waypoint({
                element: document.getElementById("gg-views"),
                handler: function () {
                    $("#gg-views .hand").removeClass("play");
                },
                offset: -100,
            });
    }
}),
    $(document).ready(function () {
        function a() {
            var a = $(window).height(),
                b = $(window).width(),
                c = $(".cover-title").height(),
                d = $(".cover-aside").height(),
                e = ($(".cover-photo").height(), a - parseInt(c + d)),
                f = parseInt(a - c);
            b > 585 ? $(".cover-photo").css("height", f) : $(".cover-photo").css("height", e);
        }
        $(window).resize(function () {
            a();
        }),
            a();
    }),
    $(document).ready(function () {
        function a() {
            var a = $("<div>", { class: "flash" });
            $("body").append(a);
        }
        console.log("konami load");
        var b = document.createElement("audio");
        b.setAttribute("src", "konami/coin.wav"), b.load(), "true" === localStorage.konami && $("html").addClass("konami");
        new Konami(function () {
            return "true" !== localStorage.konami ? (console.log("konami fire"), $("html").addClass("konami"), a(), (localStorage.konami = "true"), void b.play()) : void 0;
        });
        $(document).keyup(function (b) {
            27 === b.keyCode && (console.log("escape"), $("html").removeClass("konami"), a(), (localStorage.konami = "false"));
        });
    }),
    $(document).ready(function () {
        function a() {
            "tile" === localStorage.menu ? (b.addClass("tile"), d.addClass("rotate")) : (b.removeClass("tile"), d.removeClass("rotate"));
        }
        localStorage.menu;
        var b = $("ul#menu"),
            c = $("a#menu-btn-img"),
            d = $("a#menu-btn-img .unit");
        a(),
            $(c).click(function (a) {
                a.preventDefault(),
                    d.toggleClass("rotate"),
                    b.toggleClass("animate-1"),
                    b.toggleClass("animate-2"),
                    b.toggleClass("tile"),
                    b.hasClass("tile") ? (localStorage.menu = "tile") : (localStorage.menu = "list"),
                    console.log(localStorage.menu);
            });
    }),
    $(document).on("ready", function () {
        function a() {
            v.addClass("enabled");
        }
        function b() {
            v.children().addClass("set"), z.addClass("set");
        }
        function c() {
            v.children().removeClass("set"), z.removeClass("set");
        }
        function d() {
            w.addClass("enabled");
        }
        function e() {
            w.removeClass("enabled");
        }
        function f() {
            w.children().addClass("set"), A.addClass("set");
        }
        function g() {
            w.children().removeClass("set"), A.removeClass("set");
        }
        function h() {
            x.addClass("enabled"), D.css("display", "block");
        }
        function i() {
            x.removeClass("enabled"), D.css("display", "none");
        }
        function j() {
            x.children().addClass("set"), B.addClass("set");
        }
        function k() {
            x.children().removeClass("set"), B.removeClass("set");
        }
        function l() {
            y.addClass("enabled");
        }
        function m() {
            y.removeClass("enabled");
        }
        function n() {
            y.children().addClass("set"), C.addClass("set");
        }
        function o() {
            y.children().removeClass("set"), C.removeClass("set");
        }
        function p() {
            0 === E && (c(), g(), k(), o(), a(), e(), i(), m()),
                1 === E && (b(), g(), k(), o(), a(), d(), i(), m()),
                2 === E && (b(), f(), k(), o(), a(), d(), h(), m(), $(".container").removeClass("review")),
                3 === E && (b(), f(), j(), o(), a(), d(), h(), l(), $(".container").addClass("review")),
                4 === E && (b(), f(), j(), n(), a(), d(), h(), l());
        }
        $(".container").mixItUp({ load: { filter: ".open" }, controls: { toggleFilterButtons: !1 } });
        var q = $(".tick-btn.tick-1#tick-1"),
            r = $(".tick-btn.tick-2#tick-2"),
            s = $(".tick-btn.tick-3#tick-3"),
            t = $(".tick-btn.tick-4#tick-4"),
            u = $("#reopen-btn"),
            v = $(".tick-btn.tick-1"),
            w = $(".tick-btn.tick-2"),
            x = $(".tick-btn.tick-3"),
            y = $(".tick-btn.tick-4"),
            z = $(".terminal-a"),
            A = $(".terminal-b"),
            B = $(".terminal-c"),
            C = $(".terminal-d"),
            D = $(".tick-btn.tick-3#tick-3 img");
        v.addClass("enabled"),
            D.css("display", "none"),
            $(".tick-btn").click(function (a) {
                a.preventDefault();
            }),
            $(".reopen-btn").click(function (a) {
                a.preventDefault();
            });
        var E = 0;
        $(q).click(function () {
            (E = 0 === E ? 1 : 0), p();
        }),
            $(r).click(function () {
                1 === E ? (E = 2) : 2 === E && (E = 1), p();
            }),
            $(s).click(function () {
                2 === E ? (E = 3) : 3 === E && (E = 2), p();
            }),
            $(u).click(function () {
                (E = 2), p();
            }),
            $(t).click(function () {
                3 === E ? (E = 4) : 4 === E && (E = 3), p();
            });
    }),
    $(document).ready(function () {
        function a() {
            $(".total").text(c);
        }
        var b = [],
            c = 0,
            d = 0;
        $(".note").click(function () {
            var e = 10,
                f = -10,
                g = Math.floor(Math.random() * (e - f + 1)) + f,
                h = parseInt($(this).data("value")),
                i = parseInt($(this).data("type"));
            b.push(h), (c += h), a(), d++, $(".notes").append('<div class="note note-' + i + '" data-add="' + i + '" data-count="' + d + '"></div>');
            var j = $('[data-count="' + d + '"]');
            $(j).css("-webkit-transform", "rotate(" + g + "deg)");
        }),
            $(".pot").click(function () {
                b.length > 0 ? ((c -= b.slice(-1)[0]), b.pop(), a()) : console.log("There's no money on the pot");
                var e = $('[data-count="' + d + '"]'),
                    f = parseInt($(e).data("add"));
                e.attr("data-return", f),
                    setTimeout(function () {
                        e.remove();
                    }, 400),
                    d > 0 && d--;
            });
    }),
    $(document).ready(function () {
        if ($("#checkpoint").length) {
            new Waypoint({
                element: document.getElementById("checkpoint"),
                handler: function () {
                    $("#top").addClass("show");
                },
                offset: 0,
            }),
                new Waypoint({
                    element: document.getElementById("checkpoint"),
                    handler: function () {
                        $("#top").removeClass("show");
                    },
                    offset: 56,
                });
        }
        $(".glide").click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                if (((a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")), a.length)) return $("html, body").animate({ scrollTop: a.offset().top }, 300, "easeOutExpo"), !1;
            }
        }),
            $(".glide-slow").click(function () {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var a = $(this.hash);
                    if (((a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")), a.length)) return $("html, body").animate({ scrollTop: a.offset().top }, 600, "easeOutExpo"), !1;
                }
            });
    }),
    $(document).ready(function () {
        function a() {
            $("a.reflow.before").addClass("active"), $("a.reflow.after").removeClass("active"), $("#reflow").addClass("before"), $("#reflow").removeClass("after");
        }
        function b() {
            $("a.reflow.after").addClass("active"), $("a.reflow.before").removeClass("active"), $("#reflow").addClass("after"), $("#reflow").removeClass("before");
        }
        if (
            ($("a.reflow.before").click(function (b) {
                b.preventDefault(), a(), console.log("reflow click");
            }),
            $("a.reflow.after").click(function (a) {
                a.preventDefault(), b();
            }),
            $("#checkpoint-reflow").length)
        ) {
            new Waypoint({
                element: document.getElementById("checkpoint-reflow"),
                handler: function () {
                    console.log("fAfter"), b();
                },
                offset: 130,
            }),
                new Waypoint({
                    element: document.getElementById("checkpoint-reflow"),
                    handler: function () {
                        console.log("fBefore"), a();
                    },
                    offset: 135,
                });
        }
    }),
    $(document).on("ready", function () {
        $("#ih-product").slick({
            dots: !1,
            infinite: !0,
            centerMode: !0,
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: "#ih-words",
            responsive: [
                { breakpoint: 900, settings: { slidesToShow: 3 } },
                { breakpoint: 450, settings: { slidesToShow: 1 } },
            ],
        }),
            $("#ih-words").slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, fade: !0, asNavFor: "#ih-product" });
    });

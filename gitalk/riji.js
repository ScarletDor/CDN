!
function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Gitalk = t() : e.Gitalk = t()
} (this,
function() {
	return function(e) {
		function t(a) {
			if (n[a]) return n[a].exports;
			var i = n[a] = {
				i: a,
				l: !1,
				exports: {}
			};
			return e[a].call(i.exports, i, i.exports, t),
			i.l = !0,
			i.exports
		}
		var n = {};
		return t.m = e,
		t.c = n,
		t.d = function(e, n, a) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: a
			})
		},
		t.n = function(e) {
			var n = e && e.__esModule ?
			function() {
				return e.
			default
			}:
			function() {
				return e
			};
			return t.d(n, "a", n),
			n
		},
		t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		t.p = "/dist",
		t(t.s = 191)
	} ([function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s": "") + " required, but only " + t.length + " present")
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			i.a(1, arguments);
			var t = Object.prototype.toString.call(e);
			return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
		}
		t.a = a;
		var i = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return function(t) {
				var n = t || {},
				a = n.width ? String(n.width) : e.defaultWidth;
				return e.formats[a] || e.formats[e.defaultWidth]
			}
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return function(t, n) {
				var a, i = n || {},
				r = i.context ? String(i.context) : "standalone";
				if ("formatting" === r && e.formattingValues) {
					var o = e.defaultFormattingWidth || e.defaultWidth,
					u = i.width ? String(i.width) : o;
					a = e.formattingValues[u] || e.formattingValues[o]
				} else {
					var s = e.defaultWidth,
					d = i.width ? String(i.width) : e.defaultWidth;
					a = e.values[d] || e.values[s]
				}
				return a[e.argumentCallback ? e.argumentCallback(t) : t]
			}
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return function(t, n) {
				var a = String(t),
				i = n || {},
				r = a.match(e.matchPattern);
				if (!r) return null;
				var o = r[0],
				u = a.match(e.parsePattern);
				if (!u) return null;
				var s = e.valueCallback ? e.valueCallback(u[0]) : u[0];
				return s = i.valueCallback ? i.valueCallback(s) : s,
				{
					value: s,
					rest: a.slice(o.length)
				}
			}
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return function(t, n) {
				var a = String(t),
				o = n || {},
				u = o.width,
				s = u && e.matchPatterns[u] || e.matchPatterns[e.defaultMatchWidth],
				d = a.match(s);
				if (!d) return null;
				var c, l = d[0],
				m = u && e.parsePatterns[u] || e.parsePatterns[e.defaultParseWidth];
				return c = "[object Array]" === Object.prototype.toString.call(m) ? r(m,
				function(e) {
					return e.test(l)
				}) : i(m,
				function(e) {
					return e.test(l)
				}),
				c = e.valueCallback ? e.valueCallback(c) : c,
				c = o.valueCallback ? o.valueCallback(c) : c,
				{
					value: c,
					rest: a.slice(l.length)
				}
			}
		}
		function i(e, t) {
			for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n
		}
		function r(e, t) {
			for (var n = 0; n < e.length; n++) if (t(e[n])) return n
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			if (null === e || !0 === e || !1 === e) return NaN;
			var t = Number(e);
			return isNaN(t) ? t: t < 0 ? Math.ceil(t) : Math.floor(t)
		}
		t.a = a
	},
	function(e, t) {
		var n = e.exports = {
			version: "2.6.11"
		};
		"number" == typeof __e && (__e = n)
	},
	function(e, t) {
		var n = e.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
		"number" == typeof __g && (__g = n)
	},
	function(e, t, n) {
		var a = n(74)("wks"),
		i = n(52),
		r = n(8).Symbol,
		o = "function" == typeof r; (e.exports = function(e) {
			return a[e] || (a[e] = o && r[e] || (o ? r: i)("Symbol." + e))
		}).store = a
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return "[object Array]" === x.call(e)
		}
		function i(e) {
			return void 0 === e
		}
		function r(e) {
			return null !== e && !i(e) && null !== e.constructor && !i(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
		}
		function o(e) {
			return "[object ArrayBuffer]" === x.call(e)
		}
		function u(e) {
			return "undefined" != typeof FormData && e instanceof FormData
		}
		function s(e) {
			return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
		}
		function d(e) {
			return "string" == typeof e
		}
		function c(e) {
			return "number" == typeof e
		}
		function l(e) {
			return null !== e && "object" == typeof e
		}
		function m(e) {
			return "[object Date]" === x.call(e)
		}
		function f(e) {
			return "[object File]" === x.call(e)
		}
		function h(e) {
			return "[object Blob]" === x.call(e)
		}
		function p(e) {
			return "[object Function]" === x.call(e)
		}
		function g(e) {
			return l(e) && p(e.pipe)
		}
		function v(e) {
			return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
		}
		function w(e) {
			return e.replace(/^\s*/, "").replace(/\s*$/, "")
		}
		function b() {
			return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
		}
		function y(e, t) {
			if (null !== e && void 0 !== e) if ("object" != typeof e && (e = [e]), a(e)) for (var n = 0,
			i = e.length; n < i; n++) t.call(null, e[n], n, e);
			else for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
		}
		function M() {
			function e(e, n) {
				"object" == typeof t[n] && "object" == typeof e ? t[n] = M(t[n], e) : t[n] = e
			}
			for (var t = {},
			n = 0,
			a = arguments.length; n < a; n++) y(arguments[n], e);
			return t
		}
		function k() {
			function e(e, n) {
				"object" == typeof t[n] && "object" == typeof e ? t[n] = k(t[n], e) : t[n] = "object" == typeof e ? k({},
				e) : e
			}
			for (var t = {},
			n = 0,
			a = arguments.length; n < a; n++) y(arguments[n], e);
			return t
		}
		function P(e, t, n) {
			return y(t,
			function(t, a) {
				e[a] = n && "function" == typeof t ? W(t, n) : t
			}),
			e
		}
		var W = n(122),
		x = Object.prototype.toString;
		e.exports = {
			isArray: a,
			isArrayBuffer: o,
			isBuffer: r,
			isFormData: u,
			isArrayBufferView: s,
			isString: d,
			isNumber: c,
			isObject: l,
			isUndefined: i,
			isDate: m,
			isFile: f,
			isBlob: h,
			isFunction: p,
			isStream: g,
			isURLSearchParams: v,
			isStandardBrowserEnv: b,
			forEach: y,
			merge: M,
			deepMerge: k,
			extend: P,
			trim: w
		}
	},
	function(e, t, n) {
		var a = n(8),
		i = n(7),
		r = n(29),
		o = n(23),
		u = n(24),
		s = function(e, t, n) {
			var d, c, l, m = e & s.F,
			f = e & s.G,
			h = e & s.S,
			p = e & s.P,
			g = e & s.B,
			v = e & s.W,
			w = f ? i: i[t] || (i[t] = {}),
			b = w.prototype,
			y = f ? a: h ? a[t] : (a[t] || {}).prototype;
			f && (n = t);
			for (d in n)(c = !m && y && void 0 !== y[d]) && u(w, d) || (l = c ? y[d] : n[d], w[d] = f && "function" != typeof y[d] ? n[d] : g && c ? r(l, a) : v && y[d] == l ?
			function(e) {
				var t = function(t, n, a) {
					if (this instanceof e) {
						switch (arguments.length) {
						case 0:
							return new e;
						case 1:
							return new e(t);
						case 2:
							return new e(t, n)
						}
						return new e(t, n, a)
					}
					return e.apply(this, arguments)
				};
				return t.prototype = e.prototype,
				t
			} (l) : p && "function" == typeof l ? r(Function.call, l) : l, p && ((w.virtual || (w.virtual = {}))[d] = l, e & s.R && b && !b[d] && o(b, d, l)))
		};
		s.F = 1,
		s.G = 2,
		s.S = 4,
		s.P = 8,
		s.B = 16,
		s.W = 32,
		s.U = 64,
		s.R = 128,
		e.exports = s
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		function(e) {
			function a() {
				return null
			}
			function i(e) {
				var t = e.nodeName,
				n = e.attributes;
				e.attributes = {},
				t.defaultProps && M(e.attributes, t.defaultProps),
				n && M(e.attributes, n)
			}
			function r(e, t) {
				var n, a, i;
				if (t) {
					for (i in t) if (n = R.test(i)) break;
					if (n) {
						a = e.attributes = {};
						for (i in t) t.hasOwnProperty(i) && (a[R.test(i) ? i.replace(/([A-Z0-9])/, "-$1").toLowerCase() : i] = t[i])
					}
				}
			}
			function o(e, t, n) {
				var a = t && t._preactCompatRendered && t._preactCompatRendered.base;
				a && a.parentNode !== t && (a = null),
				a || (a = t.children[0]);
				for (var i = t.childNodes.length; i--;) t.childNodes[i] !== a && t.removeChild(t.childNodes[i]);
				var r = I.render(e, t, a);
				return t && (t._preactCompatRendered = r && (r._component || {
					base: r
				})),
				"function" == typeof n && n(),
				r && r._component || r
			}
			function u(e, t, n, a) {
				var i = I.h(V, {
					context: e.context
				},
				t),
				r = o(i, n);
				return a && a(r),
				r._component || r.base
			}
			function s(e) {
				var t = e._preactCompatRendered && e._preactCompatRendered.base;
				return ! (!t || t.parentNode !== e) && (I.render(I.h(a), e, t), !0)
			}
			function d(e) {
				return h.bind(null, e)
			}
			function c(e, t) {
				for (var n = t || 0; n < e.length; n++) {
					var a = e[n];
					Array.isArray(a) ? c(a) : a && "object" == typeof a && !v(a) && (a.props && a.type || a.attributes && a.nodeName || a.children) && (e[n] = h(a.type || a.nodeName, a.props || a.attributes, a.children))
				}
			}
			function l(e) {
				return "function" == typeof e && !(e.prototype && e.prototype.render)
			}
			function m(e) {
				return x({
					displayName: e.displayName || e.name,
					render: function() {
						return e(this.props, this.context)
					}
				})
			}
			function f(e) {
				var t = e[q];
				return t ? !0 === t ? e: t: (t = m(e), Object.defineProperty(t, q, {
					configurable: !0,
					value: !0
				}), t.displayName = e.displayName, t.propTypes = e.propTypes, t.defaultProps = e.defaultProps, Object.defineProperty(e, q, {
					configurable: !0,
					value: t
				}), t)
			}
			function h() {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				return c(e, 2),
				p(I.h.apply(void 0, e))
			}
			function p(e) {
				e.preactCompatNormalized = !0,
				y(e),
				l(e.nodeName) && (e.nodeName = f(e.nodeName));
				var t = e.attributes.ref,
				n = t && typeof t;
				return ! Q || "string" !== n && "number" !== n || (e.attributes.ref = w(t, Q)),
				b(e),
				e
			}
			function g(e, t) {
				for (var n = [], a = arguments.length - 2; a-->0;) n[a] = arguments[a + 2];
				if (!v(e)) return e;
				var i = e.attributes || e.props,
				r = I.h(e.nodeName || e.type, i, e.children || i && i.children),
				o = [r, t];
				return n && n.length ? o.push(n) : t && t.children && o.push(t.children),
				p(I.cloneElement.apply(void 0, o))
			}
			function v(e) {
				return e && (e instanceof J || e.$$typeof === L)
			}
			function w(e, t) {
				return t._refProxies[e] || (t._refProxies[e] = function(n) {
					t && t.refs && (t.refs[e] = n, null === n && (delete t._refProxies[e], t = null))
				})
			}
			function b(e) {
				var t = e.nodeName,
				n = e.attributes;
				if (n && "string" == typeof t) {
					var a = {};
					for (var i in n) a[i.toLowerCase()] = i;
					if (a.ondoubleclick && (n.ondblclick = n[a.ondoubleclick], delete n[a.ondoubleclick]), a.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type))) {
						var r = a.oninput || "oninput";
						n[r] || (n[r] = z([n[r], n[a.onchange]]), delete n[a.onchange])
					}
				}
			}
			function y(e) {
				var t = e.attributes;
				if (t) {
					var n = t.className || t.class;
					n && (t.className = n)
				}
			}
			function M(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
				return e
			}
			function k(e, t) {
				for (var n in e) if (! (n in t)) return ! 0;
				for (var a in t) if (e[a] !== t[a]) return ! 0;
				return ! 1
			}
			function P(e) {
				return e && e.base || e
			}
			function W() {}
			function x(e) {
				function t(e, t) {
					S(this),
					A.call(this, e, t, U),
					N.call(this, e, t)
				}
				return e = M({
					constructor: t
				},
				e),
				e.mixins && T(e, j(e.mixins)),
				e.statics && M(t, e.statics),
				e.propTypes && (t.propTypes = e.propTypes),
				e.defaultProps && (t.defaultProps = e.defaultProps),
				e.getDefaultProps && (t.defaultProps = e.getDefaultProps()),
				W.prototype = A.prototype,
				t.prototype = M(new W, e),
				t.displayName = e.displayName || "Component",
				t
			}
			function j(e) {
				for (var t = {},
				n = 0; n < e.length; n++) {
					var a = e[n];
					for (var i in a) a.hasOwnProperty(i) && "function" == typeof a[i] && (t[i] || (t[i] = [])).push(a[i])
				}
				return t
			}
			function T(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = z(t[n].concat(e[n] || Z), "getDefaultProps" === n || "getInitialState" === n || "getChildContext" === n))
			}
			function S(e) {
				for (var t in e) {
					var n = e[t];
					"function" != typeof n || n.__bound || G.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !0)
				}
			}
			function C(e, t, n) {
				if ("string" == typeof t && (t = e.constructor.prototype[t]), "function" == typeof t) return t.apply(e, n)
			}
			function z(e, t) {
				return function() {
					for (var n, a = arguments,
					i = this,
					r = 0; r < e.length; r++) {
						var o = C(i, e[r], a);
						if (t && null != o) {
							n || (n = {});
							for (var u in o) o.hasOwnProperty(u) && (n[u] = o[u])
						} else void 0 !== o && (n = o)
					}
					return n
				}
			}
			function N(e, t) {
				D.call(this, e, t),
				this.componentWillReceiveProps = z([D, this.componentWillReceiveProps || "componentWillReceiveProps"]),
				this.render = z([D, E, this.render || "render", H])
			}
			function D(e, t) {
				if (e) {
					var n = e.children;
					if (n && Array.isArray(n) && 1 === n.length && (e.children = n[0], e.children && "object" == typeof e.children && (e.children.length = 1, e.children[0] = e.children)), K) {
						var a = "function" == typeof this ? this: this.constructor,
						i = this.propTypes || a.propTypes,
						r = this.displayName || a.name;
						i && X.a.checkPropTypes(i, e, "prop", r)
					}
				}
			}
			function E(e) {
				Q = this
			}
			function H() {
				Q === this && (Q = null)
			}
			function A(e, t, n) {
				I.Component.call(this, e, t),
				this.state = this.getInitialState ? this.getInitialState() : {},
				this.refs = {},
				this._refProxies = {},
				n !== U && N.call(this, e, t)
			}
			function _(e, t) {
				A.call(this, e, t)
			}
			n.d(t, "version",
			function() {
				return Y
			}),
			n.d(t, "DOM",
			function() {
				return te
			}),
			n.d(t, "Children",
			function() {
				return ee
			}),
			n.d(t, "render",
			function() {
				return o
			}),
			n.d(t, "createClass",
			function() {
				return x
			}),
			n.d(t, "createFactory",
			function() {
				return d
			}),
			n.d(t, "createElement",
			function() {
				return h
			}),
			n.d(t, "cloneElement",
			function() {
				return g
			}),
			n.d(t, "isValidElement",
			function() {
				return v
			}),
			n.d(t, "findDOMNode",
			function() {
				return P
			}),
			n.d(t, "unmountComponentAtNode",
			function() {
				return s
			}),
			n.d(t, "Component",
			function() {
				return A
			}),
			n.d(t, "PureComponent",
			function() {
				return _
			}),
			n.d(t, "unstable_renderSubtreeIntoContainer",
			function() {
				return u
			});
			var O = n(195),
			X = n.n(O),
			I = n(202);
			n.n(I);
			n.d(t, "PropTypes",
			function() {
				return X.a
			});
			var Y = "15.1.0",
			F = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),
			L = "undefined" != typeof Symbol && Symbol.
			for && Symbol.
			for ("react.element") || 60103,
			q = "undefined" != typeof Symbol ? Symbol.
			for ("__preactCompatWrapper") : "__preactCompatWrapper",
			G = {
				constructor: 1,
				render: 1,
				shouldComponentUpdate: 1,
				componentWillReceiveProps: 1,
				componentWillUpdate: 1,
				componentDidUpdate: 1,
				componentWillMount: 1,
				componentDidMount: 1,
				componentWillUnmount: 1,
				componentDidUnmount: 1
			},
			R = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/,
			U = {},
			K = void 0 === e || !e.env || "production" !== e.env.NODE_ENV,
			J = I.h("a", null).constructor;
			J.prototype.$$typeof = L,
			J.prototype.preactCompatUpgraded = !1,
			J.prototype.preactCompatNormalized = !1,
			Object.defineProperty(J.prototype, "type", {
				get: function() {
					return this.nodeName
				},
				set: function(e) {
					this.nodeName = e
				},
				configurable: !0
			}),
			Object.defineProperty(J.prototype, "props", {
				get: function() {
					return this.attributes
				},
				set: function(e) {
					this.attributes = e
				},
				configurable: !0
			});
			var B = I.options.event;
			I.options.event = function(e) {
				return B && (e = B(e)),
				e.persist = Object,
				e.nativeEvent = e,
				e
			};
			var $ = I.options.vnode;
			I.options.vnode = function(e) {
				if (!e.preactCompatUpgraded) {
					e.preactCompatUpgraded = !0;
					var t = e.nodeName,
					n = e.attributes = M({},
					e.attributes);
					"function" == typeof t ? (!0 === t[q] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), e.preactCompatNormalized || p(e), i(e)) : (e.children && "" === String(e.children) && (e.children = void 0), e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), r(e, n))
				}
				$ && $(e)
			};
			var V = function() {};
			V.prototype.getChildContext = function() {
				return this.props.context
			},
			V.prototype.render = function(e) {
				return e.children[0]
			};
			for (var Q, Z = [], ee = {
				map: function(e, t, n) {
					return null == e ? null: (e = ee.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t))
				},
				forEach: function(e, t, n) {
					if (null == e) return null;
					e = ee.toArray(e),
					n && n !== e && (t = t.bind(n)),
					e.forEach(t)
				},
				count: function(e) {
					return e && e.length || 0
				},
				only: function(e) {
					if (e = ee.toArray(e), 1 !== e.length) throw new Error("Children.only() expects only one child.");
					return e[0]
				},
				toArray: function(e) {
					return null == e ? [] : Array.isArray && Array.isArray(e) ? e: Z.concat(e)
				}
			},
			te = {},
			ne = F.length; ne--;) te[F[ne]] = d(F[ne]);
			M(A.prototype = new I.Component, {
				constructor: A,
				isReactComponent: {},
				replaceState: function(e, t) {
					var n = this;
					this.setState(e, t);
					for (var a in n.state) a in e || delete n.state[a]
				},
				getDOMNode: function() {
					return this.base
				},
				isMounted: function() {
					return !! this.base
				}
			}),
			W.prototype = A.prototype,
			_.prototype = new W,
			_.prototype.isPureReactComponent = !0,
			_.prototype.shouldComponentUpdate = function(e, t) {
				return k(this.props, e) || k(this.state, t)
			};
			var ae = {
				version: Y,
				DOM: te,
				PropTypes: X.a,
				Children: ee,
				render: o,
				createClass: x,
				createFactory: d,
				createElement: h,
				cloneElement: g,
				isValidElement: v,
				findDOMNode: P,
				unmountComponentAtNode: s,
				Component: A,
				PureComponent: _,
				unstable_renderSubtreeIntoContainer: u
			};
			t.
		default = ae
		}.call(t, n(18))
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			r.a(2, arguments);
			var a = i.a(e, n),
			o = i.a(t, n);
			return a.getTime() === o.getTime()
		}
		t.a = a;
		var i = n(50),
		r = n(0)
	},
	function(e, t, n) {
		var a = n(20);
		e.exports = function(e) {
			if (!a(e)) throw TypeError(e + " is not an object!");
			return e
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return ! isNaN(t)
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		var a = n(14),
		i = n(98),
		r = n(67),
		o = Object.defineProperty;
		t.f = n(17) ? Object.defineProperty: function(e, t, n) {
			if (a(e), t = r(t, !0), a(n), i) try {
				return o(e, t, n)
			} catch(e) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (e[t] = n.value),
			e
		}
	},
	function(e, t, n) {
		e.exports = !n(30)(function() {
			return 7 != Object.defineProperty({},
			"a", {
				get: function() {
					return 7
				}
			}).a
		})
	},
	function(e, t) {
		function n() {
			throw new Error("setTimeout has not been defined")
		}
		function a() {
			throw new Error("clearTimeout has not been defined")
		}
		function i(e) {
			if (c === setTimeout) return setTimeout(e, 0);
			if ((c === n || !c) && setTimeout) return c = setTimeout,
			setTimeout(e, 0);
			try {
				return c(e, 0)
			} catch(t) {
				try {
					return c.call(null, e, 0)
				} catch(t) {
					return c.call(this, e, 0)
				}
			}
		}
		function r(e) {
			if (l === clearTimeout) return clearTimeout(e);
			if ((l === a || !l) && clearTimeout) return l = clearTimeout,
			clearTimeout(e);
			try {
				return l(e)
			} catch(t) {
				try {
					return l.call(null, e)
				} catch(t) {
					return l.call(this, e)
				}
			}
		}
		function o() {
			p && f && (p = !1, f.length ? h = f.concat(h) : g = -1, h.length && u())
		}
		function u() {
			if (!p) {
				var e = i(o);
				p = !0;
				for (var t = h.length; t;) {
					for (f = h, h = []; ++g < t;) f && f[g].run();
					g = -1,
					t = h.length
				}
				f = null,
				p = !1,
				r(e)
			}
		}
		function s(e, t) {
			this.fun = e,
			this.array = t
		}
		function d() {}
		var c, l, m = e.exports = {}; !
		function() {
			try {
				c = "function" == typeof setTimeout ? setTimeout: n
			} catch(e) {
				c = n
			}
			try {
				l = "function" == typeof clearTimeout ? clearTimeout: a
			} catch(e) {
				l = a
			}
		} ();
		var f, h = [],
		p = !1,
		g = -1;
		m.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			h.push(new s(e, t)),
			1 !== h.length || p || i(u)
		},
		s.prototype.run = function() {
			this.fun.apply(null, this.array)
		},
		m.title = "browser",
		m.browser = !0,
		m.env = {},
		m.argv = [],
		m.version = "",
		m.versions = {},
		m.on = d,
		m.addListener = d,
		m.once = d,
		m.off = d,
		m.removeListener = d,
		m.removeAllListeners = d,
		m.emit = d,
		m.prependListener = d,
		m.prependOnceListener = d,
		m.listeners = function(e) {
			return []
		},
		m.binding = function(e) {
			throw new Error("process.binding is not supported")
		},
		m.cwd = function() {
			return "/"
		},
		m.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		},
		m.umask = function() {
			return 0
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e.getTime() % r
		}
		function i(e) {
			var t = new Date(e.getTime()),
			n = Math.ceil(t.getTimezoneOffset());
			t.setSeconds(0, 0);
			var i = n > 0,
			o = i ? (r + a(t)) % r: a(t);
			return n * r + o
		}
		t.a = i;
		var r = 6e4
	},
	function(e, t) {
		e.exports = function(e) {
			return "object" == typeof e ? null !== e: "function" == typeof e
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			return isNaN(a) ? new Date(NaN) : a ? (n.setDate(n.getDate() + a), n) : n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(1, arguments);
			var n = t || {},
			a = n.locale,
			u = a && a.options && a.options.weekStartsOn,
			s = null == u ? 0 : r.a(u),
			d = null == n.weekStartsOn ? s: r.a(n.weekStartsOn);
			if (! (d >= 0 && d <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
			var c = i.a(e),
			l = c.getDay(),
			m = (l < d ? 7 : 0) + l - d;
			return c.setDate(c.getDate() - m),
			c.setHours(0, 0, 0, 0),
			c
		}
		t.a = a;
		var i = n(1),
		r = n(6),
		o = n(0)
	},
	function(e, t, n) {
		var a = n(16),
		i = n(39);
		e.exports = n(17) ?
		function(e, t, n) {
			return a.f(e, t, i(1, n))
		}: function(e, t, n) {
			return e[t] = n,
			e
		}
	},
	function(e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return n.call(e, t)
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e, {
				weekStartsOn: 1
			})
		}
		t.a = a;
		var i = n(22),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = r.a(t),
			s = n.getTime() - i.a(n),
			d = a.getTime() - i.a(a);
			return Math.round((s - d) / u)
		}
		t.a = a;
		var i = n(19),
		r = n(57),
		o = n(0),
		u = 864e5
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t),
			o = n.getTime() - a.getTime();
			return o < 0 ? -1 : o > 0 ? 1 : o
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		var a = n(48),
		i = n(339),
		r = n(35),
		o = n(36),
		u = n(37),
		s = {
			code: "en-US",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		var a = n(51);
		e.exports = function(e, t, n) {
			if (a(e), void 0 === t) return e;
			switch (n) {
			case 1:
				return function(n) {
					return e.call(t, n)
				};
			case 2:
				return function(n, a) {
					return e.call(t, n, a)
				};
			case 3:
				return function(n, a, i) {
					return e.call(t, n, a, i)
				}
			}
			return function() {
				return e.apply(t, arguments)
			}
		}
	},
	function(e, t) {
		e.exports = function(e) {
			try {
				return !! e()
			} catch(e) {
				return ! 0
			}
		}
	},
	function(e, t) {
		e.exports = {}
	},
	function(e, t, n) {
		var a = n(104),
		i = n(70);
		e.exports = function(e) {
			return a(i(e))
		}
	},
	function(e, t, n) {
		var a = n(70);
		e.exports = function(e) {
			return Object(a(e))
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear(),
			a = new Date(0);
			a.setFullYear(n + 1, 0, 4),
			a.setHours(0, 0, 0, 0);
			var u = r.a(a),
			s = new Date(0);
			s.setFullYear(n, 0, 4),
			s.setHours(0, 0, 0, 0);
			var d = r.a(s);
			return t.getTime() >= u.getTime() ? n + 1 : t.getTime() >= d.getTime() ? n: n - 1
		}
		t.a = a;
		var i = n(1),
		r = n(25),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'last' eeee 'at' p",
			yesterday: "'yesterday at' p",
			today: "'today at' p",
			tomorrow: "'tomorrow at' p",
			nextWeek: "eeee 'at' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = n % 100;
			if (a > 20 || a < 10) switch (a % 10) {
			case 1:
				return n + "st";
			case 2:
				return n + "nd";
			case 3:
				return n + "rd"
			}
			return n + "th"
		}
		var i = n(3),
		r = {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		},
		s = {
			narrow: ["S", "M", "T", "W", "T", "F", "S"],
			short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(th|st|nd|rd)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		s = {
			any: [/^b/i, /^(a|c)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](th|st|nd|rd)? quarter/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
			wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[smtwf]/i,
			short: /^(su|mo|tu|we|th|fr|sa)/i,
			abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
			wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
		},
		h = {
			narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
			any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
		},
		p = {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			for (var n = e < 0 ? "-": "", a = Math.abs(e).toString(); a.length < t;) a = "0" + a;
			return n + a
		}
		t.a = a
	},
	function(e, t) {
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(210)(!0);
		n(101)(String, "String",
		function(e) {
			this._t = String(e),
			this._i = 0
		},
		function() {
			var e, t = this._t,
			n = this._i;
			return n >= t.length ? {
				value: void 0,
				done: !0
			}: (e = a(t, n), this._i += e.length, {
				value: e,
				done: !1
			})
		})
	},
	function(e, t) {
		e.exports = !0
	},
	function(e, t, n) {
		var a = n(103),
		i = n(75);
		e.exports = Object.keys ||
		function(e) {
			return a(e, i)
		}
	},
	function(e, t) {
		var n = {}.toString;
		e.exports = function(e) {
			return n.call(e).slice(8, -1)
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			if (isNaN(a)) return new Date(NaN);
			if (!a) return n;
			var u = n.getDate(),
			s = new Date(n.getTime());
			return s.setMonth(n.getMonth() + a + 1, 0),
			u >= s.getDate() ? s: (n.setFullYear(s.getFullYear(), s.getMonth(), u), n)
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e).getTime(),
			a = i.a(t);
			return new Date(n + a)
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = i.a(e),
			n = new Date(0);
			return n.setFullYear(t, 0, 4),
			n.setHours(0, 0, 0, 0),
			r.a(n)
		}
		t.a = a;
		var i = n(34),
		r = n(25),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() === a.getTime()
		}
		t.a = a;
		var i = n(57),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "in " + a: a + " ago": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "less than a second",
				other: "less than {{count}} seconds"
			},
			xSeconds: {
				one: "1 second",
				other: "{{count}} seconds"
			},
			halfAMinute: "half a minute",
			lessThanXMinutes: {
				one: "less than a minute",
				other: "less than {{count}} minutes"
			},
			xMinutes: {
				one: "1 minute",
				other: "{{count}} minutes"
			},
			aboutXHours: {
				one: "about 1 hour",
				other: "about {{count}} hours"
			},
			xHours: {
				one: "1 hour",
				other: "{{count}} hours"
			},
			xDays: {
				one: "1 day",
				other: "{{count}} days"
			},
			aboutXWeeks: {
				one: "about 1 week",
				other: "about {{count}} weeks"
			},
			xWeeks: {
				one: "1 week",
				other: "{{count}} weeks"
			},
			aboutXMonths: {
				one: "about 1 month",
				other: "about {{count}} months"
			},
			xMonths: {
				one: "1 month",
				other: "{{count}} months"
			},
			aboutXYears: {
				one: "about 1 year",
				other: "about {{count}} years"
			},
			xYears: {
				one: "1 year",
				other: "{{count}} years"
			},
			overXYears: {
				one: "over 1 year",
				other: "over {{count}} years"
			},
			almostXYears: {
				one: "almost 1 year",
				other: "almost {{count}} years"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(45),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(1, arguments);
			var n = t || {},
			a = n.locale,
			u = a && a.options && a.options.weekStartsOn,
			s = null == u ? 0 : i.a(u),
			d = null == n.weekStartsOn ? s: i.a(n.weekStartsOn);
			if (! (d >= 0 && d <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
			var c = r.a(e),
			l = c.getUTCDay(),
			m = (l < d ? 7 : 0) + l - d;
			return c.setUTCDate(c.getUTCDate() - m),
			c.setUTCHours(0, 0, 0, 0),
			c
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t) {
		e.exports = function(e) {
			if ("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	},
	function(e, t) {
		var n = 0,
		a = Math.random();
		e.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "": e, ")_", (++n + a).toString(36))
		}
	},
	function(e, t, n) {
		var a = n(16).f,
		i = n(24),
		r = n(9)("toStringTag");
		e.exports = function(e, t, n) {
			e && !i(e = n ? e: e.prototype, r) && a(e, r, {
				configurable: !0,
				value: t
			})
		}
	},
	function(e, t, n) {
		n(215);
		for (var a = n(8), i = n(23), r = n(31), o = n(9)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
			var d = u[s],
			c = a[d],
			l = c && c.prototype;
			l && !l[o] && i(l, o, d),
			r[d] = r.Array
		}
	},
	function(e, t) {
		t.f = {}.propertyIsEnumerable
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getDay();
			return 0 === n || 6 === n
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t),
			a = 7 * n;
			return r.a(e, a)
		}
		t.a = a;
		var i = n(6),
		r = n(21),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() - a.getTime()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(2, arguments);
			var n = i.a(e),
			a = i.a(t),
			s = o.a(n, a),
			d = Math.abs(r.a(n, a));
			n.setMonth(n.getMonth() - s * d);
			var c = o.a(n, a) === -s,
			l = s * (d - c);
			return 0 === l ? 0 : l
		}
		t.a = a;
		var i = n(1),
		r = n(140),
		o = n(27),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e, t) / 1e3;
			return n > 0 ? Math.floor(n) : Math.ceil(n)
		}
		t.a = a;
		var i = n(59),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setDate(1),
			t.setHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getUTCDay(),
			a = (n < 1 ? 7 : 0) + n - 1;
			return t.setUTCDate(t.getUTCDate() - a),
			t.setUTCHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		t.__esModule = !0,
		t.
	default = function(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
	},
	function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var a = n(192),
		i = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a);
		t.
	default = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1,
					a.configurable = !0,
					"value" in a && (a.writable = !0),
					(0, i.
				default)(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n),
				a && e(t, a),
				t
			}
		} ()
	},
	function(e, t, n) {
		var a = n(20),
		i = n(8).document,
		r = a(i) && a(i.createElement);
		e.exports = function(e) {
			return r ? i.createElement(e) : {}
		}
	},
	function(e, t, n) {
		var a = n(20);
		e.exports = function(e, t) {
			if (!a(e)) return e;
			var n, i;
			if (t && "function" == typeof(n = e.toString) && !a(i = n.call(e))) return i;
			if ("function" == typeof(n = e.valueOf) && !a(i = n.call(e))) return i;
			if (!t && "function" == typeof(n = e.toString) && !a(i = n.call(e))) return i;
			throw TypeError("Can't convert object to primitive value")
		}
	},
	function(e, t, n) {
		"use strict";
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	},
	function(e, t) {
		var n = Math.ceil,
		a = Math.floor;
		e.exports = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? a: n)(e)
		}
	},
	function(e, t) {
		e.exports = function(e) {
			if (void 0 == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	},
	function(e, t, n) {
		var a = n(14),
		i = n(212),
		r = n(75),
		o = n(73)("IE_PROTO"),
		u = function() {},
		s = function() {
			var e, t = n(66)("iframe"),
			a = r.length;
			for (t.style.display = "none", n(105).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; a--;) delete s.prototype[r[a]];
			return s()
		};
		e.exports = Object.create ||
		function(e, t) {
			var n;
			return null !== e ? (u.prototype = a(e), n = new u, u.prototype = null, n[o] = e) : n = s(),
			void 0 === t ? n: i(n, t)
		}
	},
	function(e, t, n) {
		var a = n(69),
		i = Math.min;
		e.exports = function(e) {
			return e > 0 ? i(a(e), 9007199254740991) : 0
		}
	},
	function(e, t, n) {
		var a = n(74)("keys"),
		i = n(52);
		e.exports = function(e) {
			return a[e] || (a[e] = i(e))
		}
	},
	function(e, t, n) {
		var a = n(7),
		i = n(8),
		r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {}); (e.exports = function(e, t) {
			return r[e] || (r[e] = void 0 !== t ? t: {})
		})("versions", []).push({
			version: a.version,
			mode: n(41) ? "pure": "global",
			copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
		})
	},
	function(e, t) {
		e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	},
	function(e, t, n) {
		var a = n(43),
		i = n(9)("toStringTag"),
		r = "Arguments" == a(function() {
			return arguments
		} ()),
		o = function(e, t) {
			try {
				return e[t]
			} catch(e) {}
		};
		e.exports = function(e) {
			var t, n, u;
			return void 0 === e ? "Undefined": null === e ? "Null": "string" == typeof(n = o(t = Object(e), i)) ? n: r ? a(t) : "Object" == (u = a(t)) && "function" == typeof t.callee ? "Arguments": u
		}
	},
	function(e, t, n) {
		var a = n(76),
		i = n(9)("iterator"),
		r = n(31);
		e.exports = n(7).getIteratorMethod = function(e) {
			if (void 0 != e) return e[i] || e["@@iterator"] || r[a(e)]
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t, n;
			this.promise = new e(function(e, a) {
				if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
				t = e,
				n = a
			}),
			this.resolve = i(t),
			this.reject = i(n)
		}
		var i = n(51);
		e.exports.f = function(e) {
			return new a(e)
		}
	},
	function(e, t) {
		t.f = Object.getOwnPropertySymbols
	},
	function(e, t, n) {
		t.f = n(9)
	},
	function(e, t, n) {
		var a = n(8),
		i = n(7),
		r = n(41),
		o = n(80),
		u = n(16).f;
		e.exports = function(e) {
			var t = i.Symbol || (i.Symbol = r ? {}: a.Symbol || {});
			"_" == e.charAt(0) || e in t || u(t, e, {
				value: o.f(e)
			})
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
			n = {};
			return Object.keys(e).forEach(function(a) { - 1 === t.indexOf(a) && (n[a] = e[a])
			}),
			n
		}
		function i(e, t) {
			if (e === t) return ! 0;
			var n = !Array.isArray(e) || !Array.isArray(t),
			a = e.length !== t.length;
			return ! n && !a && e.every(function(e, n) {
				return e === t[n]
			})
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.omit = a,
		t.arraysEqual = i;
		t.isElementAnSFC = function(e) {
			return ! ("string" == typeof e.type || e.type.prototype.isReactComponent)
		},
		t.hyphenate = function(e) {
			var t = {};
			return function(n) {
				return t[n] || (t[n] = e(n)),
				t[n]
			}
		} (function(e) {
			return e.replace(/([A-Z])/g, "-$1").toLowerCase()
		})
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			0 === i.a(e).getDay()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, n * u)
		}
		t.a = a;
		var i = n(6),
		r = n(45),
		o = n(0),
		u = 36e5
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t),
			a = 3 * n;
			return r.a(e, a)
		}
		t.a = a;
		var i = n(6),
		r = n(44),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
			return n < 0 ? -1 : n > 0 ? 1 : n
		}
		function i(e, t) {
			u.a(2, arguments);
			var n = r.a(e),
			i = r.a(t),
			s = a(n, i),
			d = Math.abs(o.a(n, i));
			n.setDate(n.getDate() - s * d);
			var c = a(n, i) === -s,
			l = s * (d - c);
			return 0 === l ? 0 : l
		}
		t.a = i;
		var r = n(1),
		o = n(26),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getMonth(),
			a = n - n % 3;
			return t.setMonth(a, 1),
			t.setHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			u.a(1, arguments);
			for (var t = i.a(e), n = [], a = 0; a < t.length;) {
				var s = t[a++];
				o.a(s) && (n.push(s), r.a(s) && (a += 5))
			}
			return n
		}
		t.a = a;
		var i = n(148),
		r = n(83),
		o = n(56),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getMonth();
			return t.setFullYear(t.getFullYear(), n + 1, 0),
			t.setHours(23, 59, 59, 999),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = new Date(0);
			return n.setFullYear(t.getFullYear(), 0, 1),
			n.setHours(0, 0, 0, 0),
			n
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setHours(23, 59, 59, 999),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(1, arguments);
			var n = r.a(e, t),
			a = n.getUTCFullYear(),
			s = t || {},
			d = s.locale,
			c = d && d.options && d.options.firstWeekContainsDate,
			l = null == c ? 1 : i.a(c),
			m = null == s.firstWeekContainsDate ? l: i.a(s.firstWeekContainsDate);
			if (! (m >= 1 && m <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
			var f = new Date(0);
			f.setUTCFullYear(a + 1, 0, m),
			f.setUTCHours(0, 0, 0, 0);
			var h = o.a(f, t),
			p = new Date(0);
			p.setUTCFullYear(a, 0, m),
			p.setUTCHours(0, 0, 0, 0);
			var g = o.a(p, t);
			return n.getTime() >= h.getTime() ? a + 1 : n.getTime() >= g.getTime() ? a: a - 1
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(50),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(1, arguments);
			var n = t || {},
			a = n.locale,
			s = a && a.options && a.options.firstWeekContainsDate,
			d = null == s ? 1 : o.a(s),
			c = null == n.firstWeekContainsDate ? d: o.a(n.firstWeekContainsDate),
			l = i.a(e, t),
			m = new Date(0);
			return m.setFullYear(l, 0, c),
			m.setHours(0, 0, 0, 0),
			r.a(m, t)
		}
		t.a = a;
		var i = n(170),
		r = n(22),
		o = n(6),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(21),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			r.a(2, arguments);
			var a = i.a(e, n),
			o = i.a(t, n);
			return a.getTime() === o.getTime()
		}
		t.a = a;
		var i = n(22),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(2, arguments);
			var n = r.a(e),
			a = i.a(t),
			s = n.getFullYear(),
			d = n.getDate(),
			c = new Date(0);
			c.setFullYear(s, a, 15),
			c.setHours(0, 0, 0, 0);
			var l = o.a(c);
			return n.setMonth(a, Math.min(d, l)),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(164),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = h.localeToNumber(e),
			n = h.numberToLocale(t);
			switch (t % 10) {
			case 2:
			case 3:
			case 4:
			case 6:
			case 1:
			case 5:
			case 7:
			case 8:
			case 9:
			case 0:
				return n
			}
		}
		function i(e) {
			var t = e.toString().replace(/[१२३४५६७८९०]/g,
			function(e) {
				return u.number[e]
			});
			return Number(t)
		}
		function r(e) {
			return e.toString().replace(/\d/g,
			function(e) {
				return u.locale[e]
			})
		}
		var o = n(3),
		u = {
			locale: {
				1 : "१",
				2 : "२",
				3 : "३",
				4 : "४",
				5 : "५",
				6 : "६",
				7 : "७",
				8 : "८",
				9 : "९",
				0 : "०"
			},
			number: {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			}
		},
		s = {
			narrow: ["ईसा-पूर्व", "ईस्वी"],
			abbreviated: ["ईसा-पूर्व", "ईस्वी"],
			wide: ["ईसा-पूर्व", "ईसवी सन"]
		},
		d = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["ति1", "ति2", "ति3", "ति4"],
			wide: ["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"]
		},
		c = {
			narrow: ["ज", "फ़", "मा", "अ", "मई", "जू", "जु", "अग", "सि", "अक्तू", "न", "दि"],
			abbreviated: ["जन", "फ़र", "मार्च", "अप्रैल", "मई", "जून", "जुल", "अग", "सित", "अक्तू", "नव", "दिस"],
			wide: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्तूबर", "नवंबर", "दिसंबर"]
		},
		l = {
			narrow: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
			short: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
			abbreviated: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
			wide: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
		},
		m = {
			narrow: {
				am: "पूर्वाह्न",
				pm: "अपराह्न",
				midnight: "मध्यरात्रि",
				noon: "दोपहर",
				morning: "सुबह",
				afternoon: "दोपहर",
				evening: "शाम",
				night: "रात"
			},
			abbreviated: {
				am: "पूर्वाह्न",
				pm: "अपराह्न",
				midnight: "मध्यरात्रि",
				noon: "दोपहर",
				morning: "सुबह",
				afternoon: "दोपहर",
				evening: "शाम",
				night: "रात"
			},
			wide: {
				am: "पूर्वाह्न",
				pm: "अपराह्न",
				midnight: "मध्यरात्रि",
				noon: "दोपहर",
				morning: "सुबह",
				afternoon: "दोपहर",
				evening: "शाम",
				night: "रात"
			}
		},
		f = {
			narrow: {
				am: "पूर्वाह्न",
				pm: "अपराह्न",
				midnight: "मध्यरात्रि",
				noon: "दोपहर",
				morning: "सुबह",
				afternoon: "दोपहर",
				evening: "शाम",
				night: "रात"
			},
			abbreviated: {
				am: "पूर्वाह्न",
				pm: "अपराह्न",
				midnight: "मध्यरात्रि",
				noon: "दोपहर",
				morning: "सुबह",
				afternoon: "दोपहर",
				evening: "शाम",
				night: "रात"
			},
			wide: {
				am: "पूर्वाह्न",
				pm: "अपराह्न",
				midnight: "मध्यरात्रि",
				noon: "दोपहर",
				morning: "सुबह",
				afternoon: "दोपहर",
				evening: "शाम",
				night: "रात"
			}
		},
		h = {
			localeToNumber: i,
			numberToLocale: r,
			ordinalNumber: a,
			era: o.a({
				values: s,
				defaultWidth: "wide"
			}),
			quarter: o.a({
				values: d,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: o.a({
				values: c,
				defaultWidth: "wide"
			}),
			day: o.a({
				values: l,
				defaultWidth: "wide"
			}),
			dayPeriod: o.a({
				values: m,
				defaultWidth: "wide",
				formattingValues: f,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = h
	},
	function(e, t, n) {
		e.exports = !n(17) && !n(30)(function() {
			return 7 != Object.defineProperty(n(66)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	},
	function(e, t, n) {
		"use strict"; (function(t) {
			"production" === t.env.NODE_ENV ? e.exports = n(196) : e.exports = n(197)
		}).call(t, n(18))
	},
	function(e, t) {},
	function(e, t, n) {
		"use strict";
		var a = n(41),
		i = n(11),
		r = n(102),
		o = n(23),
		u = n(31),
		s = n(211),
		d = n(53),
		c = n(106),
		l = n(9)("iterator"),
		m = !([].keys && "next" in [].keys()),
		f = function() {
			return this
		};
		e.exports = function(e, t, n, h, p, g, v) {
			s(n, t, h);
			var w, b, y, M = function(e) {
				if (!m && e in x) return x[e];
				switch (e) {
				case "keys":
				case "values":
					return function() {
						return new n(this, e)
					}
				}
				return function() {
					return new n(this, e)
				}
			},
			k = t + " Iterator",
			P = "values" == p,
			W = !1,
			x = e.prototype,
			j = x[l] || x["@@iterator"] || p && x[p],
			T = j || M(p),
			S = p ? P ? M("entries") : T: void 0,
			C = "Array" == t ? x.entries || j: j;
			if (C && (y = c(C.call(new e))) !== Object.prototype && y.next && (d(y, k, !0), a || "function" == typeof y[l] || o(y, l, f)), P && j && "values" !== j.name && (W = !0, T = function() {
				return j.call(this)
			}), a && !v || !m && !W && x[l] || o(x, l, T), u[t] = T, u[k] = f, p) if (w = {
				values: P ? T: M("values"),
				keys: g ? T: M("keys"),
				entries: S
			},
			v) for (b in w) b in x || r(x, b, w[b]);
			else i(i.P + i.F * (m || W), t, w);
			return w
		}
	},
	function(e, t, n) {
		e.exports = n(23)
	},
	function(e, t, n) {
		var a = n(24),
		i = n(32),
		r = n(213)(!1),
		o = n(73)("IE_PROTO");
		e.exports = function(e, t) {
			var n, u = i(e),
			s = 0,
			d = [];
			for (n in u) n != o && a(u, n) && d.push(n);
			for (; t.length > s;) a(u, n = t[s++]) && (~r(d, n) || d.push(n));
			return d
		}
	},
	function(e, t, n) {
		var a = n(43);
		e.exports = Object("z").propertyIsEnumerable(0) ? Object: function(e) {
			return "String" == a(e) ? e.split("") : Object(e)
		}
	},
	function(e, t, n) {
		var a = n(8).document;
		e.exports = a && a.documentElement
	},
	function(e, t, n) {
		var a = n(24),
		i = n(33),
		r = n(73)("IE_PROTO"),
		o = Object.prototype;
		e.exports = Object.getPrototypeOf ||
		function(e) {
			return e = i(e),
			a(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype: e instanceof Object ? o: null
		}
	},
	function(e, t, n) {
		var a = n(14);
		e.exports = function(e, t, n, i) {
			try {
				return i ? t(a(n)[0], n[1]) : t(n)
			} catch(t) {
				var r = e.
				return;
				throw void 0 !== r && a(r.call(e)),
				t
			}
		}
	},
	function(e, t, n) {
		var a = n(31),
		i = n(9)("iterator"),
		r = Array.prototype;
		e.exports = function(e) {
			return void 0 !== e && (a.Array === e || r[i] === e)
		}
	},
	function(e, t, n) {
		var a = n(14),
		i = n(51),
		r = n(9)("species");
		e.exports = function(e, t) {
			var n, o = a(e).constructor;
			return void 0 === o || void 0 == (n = a(o)[r]) ? t: i(n)
		}
	},
	function(e, t, n) {
		var a, i, r, o = n(29),
		u = n(221),
		s = n(105),
		d = n(66),
		c = n(8),
		l = c.process,
		m = c.setImmediate,
		f = c.clearImmediate,
		h = c.MessageChannel,
		p = c.Dispatch,
		g = 0,
		v = {},
		w = function() {
			var e = +this;
			if (v.hasOwnProperty(e)) {
				var t = v[e];
				delete v[e],
				t()
			}
		},
		b = function(e) {
			w.call(e.data)
		};
		m && f || (m = function(e) {
			for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
			return v[++g] = function() {
				u("function" == typeof e ? e: Function(e), t)
			},
			a(g),
			g
		},
		f = function(e) {
			delete v[e]
		},
		"process" == n(43)(l) ? a = function(e) {
			l.nextTick(o(w, e, 1))
		}: p && p.now ? a = function(e) {
			p.now(o(w, e, 1))
		}: h ? (i = new h, r = i.port2, i.port1.onmessage = b, a = o(r.postMessage, r, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (a = function(e) {
			c.postMessage(e + "", "*")
		},
		c.addEventListener("message", b, !1)) : a = "onreadystatechange" in d("script") ?
		function(e) {
			s.appendChild(d("script")).onreadystatechange = function() {
				s.removeChild(this),
				w.call(e)
			}
		}: function(e) {
			setTimeout(o(w, e, 1), 0)
		}),
		e.exports = {
			set: m,
			clear: f
		}
	},
	function(e, t) {
		e.exports = function(e) {
			try {
				return {
					e: !1,
					v: e()
				}
			} catch(e) {
				return {
					e: !0,
					v: e
				}
			}
		}
	},
	function(e, t, n) {
		var a = n(14),
		i = n(20),
		r = n(78);
		e.exports = function(e, t) {
			if (a(e), i(t) && t.constructor === e) return t;
			var n = r.f(e);
			return (0, n.resolve)(t),
			n.promise
		}
	},
	function(e, t, n) {
		var a = n(9)("iterator"),
		i = !1;
		try {
			var r = [7][a]();
			r.
			return = function() {
				i = !0
			},
			Array.from(r,
			function() {
				throw 2
			})
		} catch(e) {}
		e.exports = function(e, t) {
			if (!t && !i) return ! 1;
			var n = !1;
			try {
				var r = [7],
				o = r[a]();
				o.next = function() {
					return {
						done: n = !0
					}
				},
				r[a] = function() {
					return o
				},
				e(r)
			} catch(e) {}
			return n
		}
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(232),
			__esModule: !0
		}
	},
	function(e, t, n) {
		var a = n(11),
		i = n(7),
		r = n(30);
		e.exports = function(e, t) {
			var n = (i.Object || {})[e] || Object[e],
			o = {};
			o[e] = t(n),
			a(a.S + a.F * r(function() {
				n(1)
			}), "Object", o)
		}
	},
	function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var a = n(117),
		i = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a);
		t.
	default = function(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" !== (void 0 === t ? "undefined": (0, i.
		default)(t)) && "function" != typeof t ? e: t
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		t.__esModule = !0;
		var i = n(234),
		r = a(i),
		o = n(236),
		u = a(o),
		s = "function" == typeof u.
	default && "symbol" == typeof r.
	default ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof u.
		default && e.constructor === u.
		default && e !== u.
		default.prototype ? "symbol": typeof e
		};
		t.
	default = "function" == typeof u.
	default && "symbol" === s(r.
	default) ?
		function(e) {
			return void 0 === e ? "undefined": s(e)
		}: function(e) {
			return e && "function" == typeof u.
		default && e.constructor === u.
		default && e !== u.
		default.prototype ? "symbol": void 0 === e ? "undefined": s(e)
		}
	},
	function(e, t, n) {
		var a = n(103),
		i = n(75).concat("length", "prototype");
		t.f = Object.getOwnPropertyNames ||
		function(e) {
			return a(e, i)
		}
	},
	function(e, t, n) {
		var a = n(55),
		i = n(39),
		r = n(32),
		o = n(67),
		u = n(24),
		s = n(98),
		d = Object.getOwnPropertyDescriptor;
		t.f = n(17) ? d: function(e, t) {
			if (e = r(e), t = o(t, !0), s) try {
				return d(e, t)
			} catch(e) {}
			if (u(e, t)) return i(!a.f.call(e, t), e[t])
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		t.__esModule = !0;
		var i = n(245),
		r = a(i),
		o = n(249),
		u = a(o),
		s = n(117),
		d = a(s);
		t.
	default = function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": (0, d.
		default)(t)));
			e.prototype = (0, u.
		default)(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (r.
		default ? (0, r.
		default)(e, t) : e.__proto__ = t)
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.hasClassInParent = t.formatErrorMsg = t.getMetaContent = t.axiosGithub = t.axiosJSON = t.queryStringify = t.queryParse = void 0;
		var i = n(272),
		r = a(i),
		o = n(275),
		u = a(o),
		s = n(282),
		d = a(s);
		t.queryParse = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
			if (!e) return {};
			var t = "?" === e[0] ? e.substring(1) : e,
			n = {};
			return t.split("&").forEach(function(e) {
				var t = e.split("="),
				a = (0, u.
			default)(t, 2),
				i = a[0],
				r = a[1];
				i && (n[decodeURIComponent(i)] = decodeURIComponent(r))
			}),
			n
		},
		t.queryStringify = function(e) {
			return (0, r.
		default)(e).map(function(t) {
				return t + "=" + encodeURIComponent(e[t] || "")
			}).join("&")
		},
		t.axiosJSON = d.
	default.create({
			headers:
			{
				Accept:
				"application/json"
			}
		}),
		t.axiosGithub = d.
	default.create({
			baseURL:
			"https://api.github.com",
			headers: {
				Accept: "application/json"
			}
		}),
		t.getMetaContent = function(e, t) {
			t || (t = "content");
			var n = window.document.querySelector("meta[name='" + e + "']");
			return n && n.getAttribute(t)
		},
		t.formatErrorMsg = function(e) {
			var t = "Error: ";
			return e.response && e.response.data && e.response.data.message ? (t += e.response.data.message + ". ", e.response.data.errors && (t += e.response.data.errors.map(function(e) {
				return e.message
			}).join(", "))) : t += e.message,
			t
		},
		t.hasClassInParent = function e(t) {
			for (var n = arguments.length,
			a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
			var r = !1;
			if (void 0 === t.className) return ! 1;
			var o = t.className.split(" ");
			return a.forEach(function(e, t) {
				r = r || o.indexOf(e) >= 0
			}),
			r || t.parentNode && e(t.parentNode, a)
		}
	},
	function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return function() {
				for (var n = new Array(arguments.length), a = 0; a < n.length; a++) n[a] = arguments[a];
				return e.apply(t, n)
			}
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
		}
		var i = n(10);
		e.exports = function(e, t, n) {
			if (!t) return e;
			var r;
			if (n) r = n(t);
			else if (i.isURLSearchParams(t)) r = t.toString();
			else {
				var o = [];
				i.forEach(t,
				function(e, t) {
					null !== e && void 0 !== e && (i.isArray(e) ? t += "[]": e = [e], i.forEach(e,
					function(e) {
						i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)),
						o.push(a(t) + "=" + a(e))
					}))
				}),
				r = o.join("&")
			}
			if (r) {
				var u = e.indexOf("#"); - 1 !== u && (e = e.slice(0, u)),
				e += ( - 1 === e.indexOf("?") ? "?": "&") + r
			}
			return e
		}
	},
	function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return ! (!e || !e.__CANCEL__)
		}
	},
	function(e, t, n) {
		"use strict"; (function(t) {
			function a(e, t) { ! i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
			}
			var i = n(10),
			r = n(288),
			o = {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			u = {
				adapter: function() {
					var e;
					return "undefined" != typeof XMLHttpRequest ? e = n(126) : void 0 !== t && "[object process]" === Object.prototype.toString.call(t) && (e = n(126)),
					e
				} (),
				transformRequest: [function(e, t) {
					return r(t, "Accept"),
					r(t, "Content-Type"),
					i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e: i.isArrayBufferView(e) ? e.buffer: i.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
				}],
				transformResponse: [function(e) {
					if ("string" == typeof e) try {
						e = JSON.parse(e)
					} catch(e) {}
					return e
				}],
				timeout: 0,
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN",
				maxContentLength: -1,
				validateStatus: function(e) {
					return e >= 200 && e < 300
				}
			};
			u.headers = {
				common: {
					Accept: "application/json, text/plain, */*"
				}
			},
			i.forEach(["delete", "get", "head"],
			function(e) {
				u.headers[e] = {}
			}),
			i.forEach(["post", "put", "patch"],
			function(e) {
				u.headers[e] = i.merge(o)
			}),
			e.exports = u
		}).call(t, n(18))
	},
	function(e, t, n) {
		"use strict";
		var a = n(10),
		i = n(289),
		r = n(123),
		o = n(291),
		u = n(294),
		s = n(295),
		d = n(127);
		e.exports = function(e) {
			return new Promise(function(t, c) {
				var l = e.data,
				m = e.headers;
				a.isFormData(l) && delete m["Content-Type"];
				var f = new XMLHttpRequest;
				if (e.auth) {
					var h = e.auth.username || "",
					p = e.auth.password || "";
					m.Authorization = "Basic " + btoa(h + ":" + p)
				}
				var g = o(e.baseURL, e.url);
				if (f.open(e.method.toUpperCase(), r(g, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f.onreadystatechange = function() {
					if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
						var n = "getAllResponseHeaders" in f ? u(f.getAllResponseHeaders()) : null,
						a = e.responseType && "text" !== e.responseType ? f.response: f.responseText,
						r = {
							data: a,
							status: f.status,
							statusText: f.statusText,
							headers: n,
							config: e,
							request: f
						};
						i(t, c, r),
						f = null
					}
				},
				f.onabort = function() {
					f && (c(d("Request aborted", e, "ECONNABORTED", f)), f = null)
				},
				f.onerror = function() {
					c(d("Network Error", e, null, f)),
					f = null
				},
				f.ontimeout = function() {
					var t = "timeout of " + e.timeout + "ms exceeded";
					e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
					c(d(t, e, "ECONNABORTED", f)),
					f = null
				},
				a.isStandardBrowserEnv()) {
					var v = n(296),
					w = (e.withCredentials || s(g)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
					w && (m[e.xsrfHeaderName] = w)
				}
				if ("setRequestHeader" in f && a.forEach(m,
				function(e, t) {
					void 0 === l && "content-type" === t.toLowerCase() ? delete m[t] : f.setRequestHeader(t, e)
				}), a.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), e.responseType) try {
					f.responseType = e.responseType
				} catch(t) {
					if ("json" !== e.responseType) throw t
				}
				"function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress),
				"function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress),
				e.cancelToken && e.cancelToken.promise.then(function(e) {
					f && (f.abort(), c(e), f = null)
				}),
				void 0 === l && (l = null),
				f.send(l)
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(290);
		e.exports = function(e, t, n, i, r) {
			var o = new Error(e);
			return a(o, t, n, i, r)
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(10);
		e.exports = function(e, t) {
			t = t || {};
			var n = {},
			i = ["url", "method", "params", "data"],
			r = ["headers", "auth", "proxy"],
			o = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
			a.forEach(i,
			function(e) {
				void 0 !== t[e] && (n[e] = t[e])
			}),
			a.forEach(r,
			function(i) {
				a.isObject(t[i]) ? n[i] = a.deepMerge(e[i], t[i]) : void 0 !== t[i] ? n[i] = t[i] : a.isObject(e[i]) ? n[i] = a.deepMerge(e[i]) : void 0 !== e[i] && (n[i] = e[i])
			}),
			a.forEach(o,
			function(a) {
				void 0 !== t[a] ? n[a] = t[a] : void 0 !== e[a] && (n[a] = e[a])
			});
			var u = i.concat(r).concat(o),
			s = Object.keys(t).filter(function(e) {
				return - 1 === u.indexOf(e)
			});
			return a.forEach(s,
			function(a) {
				void 0 !== t[a] ? n[a] = t[a] : void 0 !== e[a] && (n[a] = e[a])
			}),
			n
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			this.message = e
		}
		a.prototype.toString = function() {
			return "Cancel" + (this.message ? ": " + this.message: "")
		},
		a.prototype.__CANCEL__ = !0,
		e.exports = a
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = n(12),
		i = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a);
		t.
	default = function(e) {
			var t = e.src,
			n = e.className,
			a = e.alt,
			r = e.defaultSrc,
			o = void 0 === r ? "//cdn.jsdelivr.net/npm/gitalk@1/src/assets/icon/github.svg": r;
			return i.
		default.createElement("div", {
				className: "gt-avatar " + n
			},
			i.
		default.createElement("img", {
				src: t || o,
				alt: "@" + a,
				onError: function(e) {
					e.target.src = o
				}
			}))
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = n(12),
		i = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a);
		t.
	default = function(e) {
			var t = e.className,
			a = e.text,
			r = e.name;
			return i.
		default.createElement("span", {
				className: "gt-ico " + t
			},
			i.
		default.createElement("span", {
				className: "gt-svg",
				dangerouslySetInnerHTML: {
					__html: n(302)("./" + r + ".svg")
				}
			}), a && i.
		default.createElement("span", {
				className: "gt-ico-text"
			},
			a))
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(2, arguments);
			var n = r.a(e),
			a = i.a(n),
			c = o.a(t);
			if (isNaN(c)) return new Date(NaN);
			var l = n.getHours(),
			m = c < 0 ? -1 : 1,
			f = o.a(c / 5);
			n.setDate(n.getDate() + 7 * f);
			for (var h = Math.abs(c % 5); h > 0;) n.setDate(n.getDate() + m),
			i.a(n) || (h -= 1);
			return a && i.a(n) && 0 !== c && (d.a(n) && n.setDate(n.getDate() + (m < 0 ? 2 : -1)), s.a(n) && n.setDate(n.getDate() + (m < 0 ? 1 : -2))),
			n.setHours(l),
			n
		}
		t.a = a;
		var i = n(56),
		r = n(1),
		o = n(6),
		u = n(0),
		s = n(83),
		d = n(133)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			6 === i.a(e).getDay()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(2, arguments);
			var n = i.a(t);
			return o.a(e, r.a(e) + n)
		}
		t.a = a;
		var i = n(6),
		r = n(34),
		o = n(135),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			s.a(2, arguments);
			var n = r.a(e),
			a = i.a(t),
			d = u.a(n, o.a(n)),
			c = new Date(0);
			return c.setFullYear(a, 0, 4),
			c.setHours(0, 0, 0, 0),
			n = o.a(c),
			n.setDate(n.getDate() + d),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(46),
		u = n(26),
		s = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, n * u)
		}
		t.a = a;
		var i = n(6),
		r = n(45),
		o = n(0),
		u = 6e4
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, 1e3 * n)
		}
		t.a = a;
		var i = n(6),
		r = n(45),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, 12 * n)
		}
		t.a = a;
		var i = n(6),
		r = n(44),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return r.a(2, arguments),
			i.a(e) - i.a(t)
		}
		t.a = a;
		var i = n(34),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return 12 * (n.getFullYear() - a.getFullYear()) + (n.getMonth() - a.getMonth())
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return Math.floor(t.getMonth() / 3) + 1
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			o.a(2, arguments);
			var a = i.a(e, n),
			s = i.a(t, n),
			d = a.getTime() - r.a(a),
			c = s.getTime() - r.a(s);
			return Math.round((d - c) / u)
		}
		t.a = a;
		var i = n(22),
		r = n(19),
		o = n(0),
		u = 6048e5
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getFullYear() - a.getFullYear()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e, t) / o;
			return n > 0 ? Math.floor(n) : Math.ceil(n)
		}
		t.a = a;
		var i = n(59),
		r = n(0),
		o = 36e5
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(134),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e, t) / o;
			return n > 0 ? Math.floor(n) : Math.ceil(n)
		}
		t.a = a;
		var i = n(59),
		r = n(0),
		o = 6e4
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(2, arguments);
			var n = i.a(e),
			a = i.a(t),
			s = o.a(n, a),
			d = Math.abs(r.a(n, a));
			n.setFullYear("1584"),
			a.setFullYear("1584");
			var c = o.a(n, a) === -s,
			l = s * (d - c);
			return 0 === l ? 0 : l
		}
		t.a = a;
		var i = n(1),
		r = n(143),
		o = n(27),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(1, arguments);
			var n = e || {},
			a = i.a(n.start),
			o = i.a(n.end),
			u = o.getTime();
			if (! (a.getTime() <= u)) throw new RangeError("Invalid interval");
			var s = [],
			d = a;
			d.setHours(0, 0, 0, 0);
			var c = t && "step" in t ? Number(t.step) : 1;
			if (c < 1 || isNaN(c)) throw new RangeError("`options.step` must be a number greater than 1");
			for (; d.getTime() <= u;) s.push(i.a(d)),
			d.setDate(d.getDate() + c),
			d.setHours(0, 0, 0, 0);
			return s
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear();
			return t.setFullYear(n + 1, 0, 0),
			t.setHours(23, 59, 59, 999),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(1, arguments);
			var n = t || {},
			a = n.locale,
			u = a && a.options && a.options.weekStartsOn,
			s = null == u ? 0 : r.a(u),
			d = null == n.weekStartsOn ? s: r.a(n.weekStartsOn);
			if (! (d >= 0 && d <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
			var c = i.a(e),
			l = c.getDay(),
			m = 6 + (l < d ? -7 : 0) - (l - d);
			return c.setDate(c.getDate() + m),
			c.setHours(23, 59, 59, 999),
			c
		}
		t.a = a;
		var i = n(1),
		r = n(6),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			h.a(2, arguments);
			var a = String(t),
			v = n || {},
			w = v.locale || o.a,
			y = w.options && w.options.firstWeekContainsDate,
			M = null == y ? 1 : f.a(y),
			k = null == v.firstWeekContainsDate ? M: f.a(v.firstWeekContainsDate);
			if (! (k >= 1 && k <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
			var P = w.options && w.options.weekStartsOn,
			W = null == P ? 0 : f.a(P),
			x = null == v.weekStartsOn ? W: f.a(v.weekStartsOn);
			if (! (x >= 0 && x <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
			if (!w.localize) throw new RangeError("locale must contain localize property");
			if (!w.formatLong) throw new RangeError("locale must contain formatLong property");
			var j = s.a(e);
			if (!r.a(j)) throw new RangeError("Invalid time value");
			var T = l.a(j),
			S = u.a(j, T),
			C = {
				firstWeekContainsDate: k,
				weekStartsOn: x,
				locale: w,
				_originalDate: j
			};
			return a.match(g).map(function(e) {
				var t = e[0];
				if ("p" === t || "P" === t) {
					return (0, c.a[t])(e, w.formatLong, C)
				}
				return e
			}).join("").match(p).map(function(n) {
				if ("''" === n) return "'";
				var a = n[0];
				if ("'" === a) return i(n);
				var r = d.a[a];
				if (r) return ! v.useAdditionalWeekYearTokens && m.b(n) && m.c(n, t, e),
				!v.useAdditionalDayOfYearTokens && m.a(n) && m.c(n, t, e),
				r(S, n, w.localize, C);
				if (a.match(b)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
				return n
			}).join("")
		}
		function i(e) {
			return e.match(v)[1].replace(w, "'")
		}
		t.a = a;
		var r = n(15),
		o = n(28),
		u = n(49),
		s = n(1),
		d = n(340),
		c = n(156),
		l = n(19),
		m = n(157),
		f = n(6),
		h = n(0),
		p = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
		g = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
		v = /^'([^]*?)'?$/,
		w = /''/g,
		b = /[a-zA-Z]/
	},
	function(e, t, n) {
		"use strict";
		var a = n(38),
		i = {
			y: function(e, t) {
				var n = e.getUTCFullYear(),
				i = n > 0 ? n: 1 - n;
				return a.a("yy" === t ? i % 100 : i, t.length)
			},
			M: function(e, t) {
				var n = e.getUTCMonth();
				return "M" === t ? String(n + 1) : a.a(n + 1, 2)
			},
			d: function(e, t) {
				return a.a(e.getUTCDate(), t.length)
			},
			a: function(e, t) {
				var n = e.getUTCHours() / 12 >= 1 ? "pm": "am";
				switch (t) {
				case "a":
				case "aa":
				case "aaa":
					return n.toUpperCase();
				case "aaaaa":
					return n[0];
				case "aaaa":
				default:
					return "am" === n ? "a.m.": "p.m."
				}
			},
			h: function(e, t) {
				return a.a(e.getUTCHours() % 12 || 12, t.length)
			},
			H: function(e, t) {
				return a.a(e.getUTCHours(), t.length)
			},
			m: function(e, t) {
				return a.a(e.getUTCMinutes(), t.length)
			},
			s: function(e, t) {
				return a.a(e.getUTCSeconds(), t.length)
			},
			S: function(e, t) {
				var n = t.length,
				i = e.getUTCMilliseconds(),
				r = Math.floor(i * Math.pow(10, n - 3));
				return a.a(r, t.length)
			}
		};
		t.a = i
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			u.a(1, arguments);
			var t = i.a(e),
			n = r.a(t).getTime() - o.a(t).getTime();
			return Math.round(n / s) + 1
		}
		t.a = a;
		var i = n(1),
		r = n(63),
		o = n(342),
		u = n(0),
		s = 6048e5
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = i.a(e),
			n = t.getUTCFullYear(),
			a = new Date(0);
			a.setUTCFullYear(n + 1, 0, 4),
			a.setUTCHours(0, 0, 0, 0);
			var u = r.a(a),
			s = new Date(0);
			s.setUTCFullYear(n, 0, 4),
			s.setUTCHours(0, 0, 0, 0);
			var d = r.a(s);
			return t.getTime() >= u.getTime() ? n + 1 : t.getTime() >= d.getTime() ? n: n - 1
		}
		t.a = a;
		var i = n(1),
		r = n(63),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(1, arguments);
			var n = i.a(e),
			a = r.a(n, t).getTime() - o.a(n, t).getTime();
			return Math.round(a / s) + 1
		}
		t.a = a;
		var i = n(1),
		r = n(50),
		o = n(343),
		u = n(0),
		s = 6048e5
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			switch (e) {
			case "P":
				return t.date({
					width:
					"short"
				});
			case "PP":
				return t.date({
					width:
					"medium"
				});
			case "PPP":
				return t.date({
					width:
					"long"
				});
			case "PPPP":
			default:
				return t.date({
					width:
					"full"
				})
			}
		}
		function i(e, t) {
			switch (e) {
			case "p":
				return t.time({
					width:
					"short"
				});
			case "pp":
				return t.time({
					width:
					"medium"
				});
			case "ppp":
				return t.time({
					width:
					"long"
				});
			case "pppp":
			default:
				return t.time({
					width:
					"full"
				})
			}
		}
		function r(e, t) {
			var n = e.match(/(P+)(p+)?/),
			r = n[1],
			o = n[2];
			if (!o) return a(e, t);
			var u;
			switch (r) {
			case "P":
				u = t.dateTime({
					width: "short"
				});
				break;
			case "PP":
				u = t.dateTime({
					width: "medium"
				});
				break;
			case "PPP":
				u = t.dateTime({
					width: "long"
				});
				break;
			case "PPPP":
			default:
				u = t.dateTime({
					width: "full"
				})
			}
			return u.replace("{{date}}", a(r, t)).replace("{{time}}", i(o, t))
		}
		var o = {
			p: i,
			P: r
		};
		t.a = o
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return - 1 !== o.indexOf(e)
		}
		function i(e) {
			return - 1 !== u.indexOf(e)
		}
		function r(e, t, n) {
			if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
			if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
			if ("D" === e) throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"));
			if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"))
		}
		t.a = a,
		t.b = i,
		t.c = r;
		var o = ["D", "DD"],
		u = ["YY", "YYYY"]
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			l.a(2, arguments);
			var a = n || {},
			g = a.locale || u.a;
			if (!g.formatDistance) throw new RangeError("locale must contain formatDistance property");
			var v = i.a(e, t);
			if (isNaN(v)) throw new RangeError("Invalid time value");
			var w = d.a(a);
			w.addSuffix = Boolean(a.addSuffix),
			w.comparison = v;
			var b, y;
			v > 0 ? (b = s.a(t), y = s.a(e)) : (b = s.a(e), y = s.a(t));
			var M, k = o.a(y, b),
			P = (c.a(y) - c.a(b)) / 1e3,
			W = Math.round((k - P) / 60);
			if (W < 2) return a.includeSeconds ? k < 5 ? g.formatDistance("lessThanXSeconds", 5, w) : k < 10 ? g.formatDistance("lessThanXSeconds", 10, w) : k < 20 ? g.formatDistance("lessThanXSeconds", 20, w) : k < 40 ? g.formatDistance("halfAMinute", null, w) : k < 60 ? g.formatDistance("lessThanXMinutes", 1, w) : g.formatDistance("xMinutes", 1, w) : 0 === W ? g.formatDistance("lessThanXMinutes", 1, w) : g.formatDistance("xMinutes", W, w);
			if (W < 45) return g.formatDistance("xMinutes", W, w);
			if (W < 90) return g.formatDistance("aboutXHours", 1, w);
			if (W < m) {
				var x = Math.round(W / 60);
				return g.formatDistance("aboutXHours", x, w)
			}
			if (W < f) return g.formatDistance("xDays", 1, w);
			if (W < h) {
				var j = Math.round(W / m);
				return g.formatDistance("xDays", j, w)
			}
			if (W < p) return M = Math.round(W / h),
			g.formatDistance("aboutXMonths", M, w);
			if ((M = r.a(y, b)) < 12) {
				var T = Math.round(W / h);
				return g.formatDistance("xMonths", T, w)
			}
			var S = M % 12,
			C = Math.floor(M / 12);
			return S < 3 ? g.formatDistance("aboutXYears", C, w) : S < 9 ? g.formatDistance("overXYears", C, w) : g.formatDistance("almostXYears", C + 1, w)
		}
		t.a = a;
		var i = n(27),
		r = n(60),
		o = n(61),
		u = n(28),
		s = n(1),
		d = n(159),
		c = n(19),
		l = n(0),
		m = 1440,
		f = 2520,
		h = 43200,
		p = 86400
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return i.a({},
			e)
		}
		t.a = a;
		var i = n(160)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (null == e) throw new TypeError("assign requires that input parameter not be null or undefined");
			t = t || {};
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
			return e
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			c.a(2, arguments);
			var a = n || {},
			h = a.locale || d.a;
			if (!h.formatDistance) throw new RangeError("locale must contain localize.formatDistance property");
			var p = r.a(e, t);
			if (isNaN(p)) throw new RangeError("Invalid time value");
			var g = s.a(a);
			g.addSuffix = Boolean(a.addSuffix),
			g.comparison = p;
			var v, w;
			p > 0 ? (v = o.a(t), w = o.a(e)) : (v = o.a(e), w = o.a(t));
			var b, y = null == a.roundingMethod ? "round": String(a.roundingMethod);
			if ("floor" === y) b = Math.floor;
			else if ("ceil" === y) b = Math.ceil;
			else {
				if ("round" !== y) throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
				b = Math.round
			}
			var M, k = u.a(w, v),
			P = (i.a(w) - i.a(v)) / 1e3,
			W = b((k - P) / 60);
			if ("second" === (M = null == a.unit ? W < 1 ? "second": W < 60 ? "minute": W < l ? "hour": W < m ? "day": W < f ? "month": "year": String(a.unit))) return h.formatDistance("xSeconds", k, g);
			if ("minute" === M) return h.formatDistance("xMinutes", W, g);
			if ("hour" === M) {
				var x = b(W / 60);
				return h.formatDistance("xHours", x, g)
			}
			if ("day" === M) {
				var j = b(W / l);
				return h.formatDistance("xDays", j, g)
			}
			if ("month" === M) {
				var T = b(W / m);
				return h.formatDistance("xMonths", T, g)
			}
			if ("year" === M) {
				var S = b(W / f);
				return h.formatDistance("xYears", S, g)
			}
			throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")
		}
		t.a = a;
		var i = n(19),
		r = n(27),
		o = n(1),
		u = n(61),
		s = n(159),
		d = n(28),
		c = n(0),
		l = 1440,
		m = 43200,
		f = 525600
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getDate()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getDay()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear(),
			a = t.getMonth(),
			o = new Date(0);
			return o.setFullYear(n, a + 1, 0),
			o.setHours(0, 0, 0, 0),
			o.getDate()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear();
			return n % 400 == 0 || n % 4 == 0 && n % 100 != 0
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getDay();
			return 0 === n && (n = 7),
			n
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			u.a(1, arguments);
			var t = i.a(e),
			n = r.a(t).getTime() - o.a(t).getTime();
			return Math.round(n / s) + 1
		}
		t.a = a;
		var i = n(1),
		r = n(25),
		o = n(46),
		u = n(0),
		s = 6048e5
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getTime()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(1, arguments);
			var n = o.a(e),
			a = i.a(n, t).getTime() - r.a(n, t).getTime();
			return Math.round(a / s) + 1
		}
		t.a = a;
		var i = n(22),
		r = n(93),
		o = n(1),
		u = n(0),
		s = 6048e5
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(1, arguments);
			var n = r.a(e),
			a = n.getFullYear(),
			s = t || {},
			d = s.locale,
			c = d && d.options && d.options.firstWeekContainsDate,
			l = null == c ? 1 : o.a(c),
			m = null == s.firstWeekContainsDate ? l: o.a(s.firstWeekContainsDate);
			if (! (m >= 1 && m <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
			var f = new Date(0);
			f.setFullYear(a + 1, 0, m),
			f.setHours(0, 0, 0, 0);
			var h = i.a(f, t),
			p = new Date(0);
			p.setFullYear(a, 0, m),
			p.setHours(0, 0, 0, 0);
			var g = i.a(p, t);
			return n.getTime() >= h.getTime() ? a + 1 : n.getTime() >= g.getTime() ? a: a - 1
		}
		t.a = a;
		var i = n(22),
		r = n(1),
		o = n(6),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getMonth();
			return t.setFullYear(t.getFullYear(), n + 1, 0),
			t.setHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (u.a(2, arguments), !t || "object" != typeof t) return new Date(NaN);
			var n = "years" in t ? s.a(t.years) : 0,
			a = "months" in t ? s.a(t.months) : 0,
			d = "weeks" in t ? s.a(t.weeks) : 0,
			c = "days" in t ? s.a(t.days) : 0,
			l = "hours" in t ? s.a(t.hours) : 0,
			m = "minutes" in t ? s.a(t.minutes) : 0,
			f = "seconds" in t ? s.a(t.seconds) : 0,
			h = r.a(o.a(e), a + 12 * n),
			p = i.a(h, c + 7 * d),
			g = m + 60 * l,
			v = f + 60 * g,
			w = 1e3 * v;
			return new Date(p.getTime() - w)
		}
		t.a = a;
		var i = n(94),
		r = n(173),
		o = n(1),
		u = n(0),
		s = n(6)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(44),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			p.a(3, arguments);
			var b = String(e),
			y = String(t),
			P = a || {},
			W = P.locale || o.a;
			if (!W.match) throw new RangeError("locale must contain match property");
			var x = W.options && W.options.firstWeekContainsDate,
			j = null == x ? 1 : f.a(x),
			T = null == P.firstWeekContainsDate ? j: f.a(P.firstWeekContainsDate);
			if (! (T >= 1 && T <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
			var S = W.options && W.options.weekStartsOn,
			C = null == S ? 0 : f.a(S),
			z = null == P.weekStartsOn ? C: f.a(P.weekStartsOn);
			if (! (z >= 0 && z <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
			if ("" === y) return "" === b ? s.a(n) : new Date(NaN);
			var N, D = {
				firstWeekContainsDate: T,
				weekStartsOn: z,
				locale: W
			},
			E = [{
				priority: g,
				subPriority: -1,
				set: i,
				index: 0
			}],
			H = y.match(w).map(function(e) {
				var t = e[0];
				if ("p" === t || "P" === t) {
					return (0, c.a[t])(e, W.formatLong, D)
				}
				return e
			}).join("").match(v),
			A = [];
			for (N = 0; N < H.length; N++) {
				var _ = H[N]; ! P.useAdditionalWeekYearTokens && m.b(_) && m.c(_, y, e),
				!P.useAdditionalDayOfYearTokens && m.a(_) && m.c(_, y, e);
				var O = _[0],
				X = h.a[O];
				if (X) {
					var I = X.incompatibleTokens;
					if (Array.isArray(I)) {
						for (var Y = void 0,
						F = 0; F < A.length; F++) {
							var L = A[F].token;
							if ( - 1 !== I.indexOf(L) || L === O) {
								Y = A[F];
								break
							}
						}
						if (Y) throw new RangeError("The format string mustn't contain `".concat(Y.fullToken, "` and `").concat(_, "` at the same time"))
					} else if ("*" === X.incompatibleTokens && A.length) throw new RangeError("The format string mustn't contain `".concat(_, "` and any other token at the same time"));
					A.push({
						token: O,
						fullToken: _
					});
					var q = X.parse(b, _, W.match, D);
					if (!q) return new Date(NaN);
					E.push({
						priority: X.priority,
						subPriority: X.subPriority || 0,
						set: X.set,
						validate: X.validate,
						value: q.value,
						index: E.length
					}),
					b = q.rest
				} else {
					if (O.match(k)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + O + "`");
					if ("''" === _ ? _ = "'": "'" === O && (_ = r(_)), 0 !== b.indexOf(_)) return new Date(NaN);
					b = b.slice(_.length)
				}
			}
			if (b.length > 0 && M.test(b)) return new Date(NaN);
			var G = E.map(function(e) {
				return e.priority
			}).sort(function(e, t) {
				return t - e
			}).filter(function(e, t, n) {
				return n.indexOf(e) === t
			}).map(function(e) {
				return E.filter(function(t) {
					return t.priority === e
				}).sort(function(e, t) {
					return t.subPriority - e.subPriority
				})
			}).map(function(e) {
				return e[0]
			}),
			R = s.a(n);
			if (isNaN(R)) return new Date(NaN);
			var U = u.a(R, l.a(R)),
			K = {};
			for (N = 0; N < G.length; N++) {
				var J = G[N];
				if (J.validate && !J.validate(U, J.value, D)) return new Date(NaN);
				var B = J.set(U, K, J.value, D);
				B[0] ? (U = B[0], d.a(K, B[1])) : U = B
			}
			return U
		}
		function i(e, t) {
			if (t.timestampIsSet) return e;
			var n = new Date(0);
			return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
			n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
			n
		}
		function r(e) {
			return e.match(b)[1].replace(y, "'")
		}
		t.a = a;
		var o = n(28),
		u = n(49),
		s = n(1),
		d = n(160),
		c = n(156),
		l = n(19),
		m = n(157),
		f = n(6),
		h = n(379),
		p = n(0),
		g = 10,
		v = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
		w = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
		b = /^'([^]*?)'?$/,
		y = /''/g,
		M = /\S/,
		k = /[a-zA-Z]/
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() === a.getTime()
		}
		t.a = a;
		var i = n(176),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setMinutes(0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return r.a(2, arguments),
			i.a(e, t, {
				weekStartsOn: 1
			})
		}
		t.a = a;
		var i = n(95),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() === a.getTime()
		}
		t.a = a;
		var i = n(179),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setSeconds(0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() === a.getTime()
		}
		t.a = a;
		var i = n(87),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() === a.getTime()
		}
		t.a = a;
		var i = n(183),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setMilliseconds(0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getFullYear() === a.getFullYear()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(1, arguments);
			var n = t || {},
			a = n.locale,
			u = a && a.options && a.options.weekStartsOn,
			s = null == u ? 0 : r.a(u),
			d = null == n.weekStartsOn ? s: r.a(n.weekStartsOn);
			if (! (d >= 0 && d <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6");
			var c = i.a(e),
			l = c.getDay(),
			m = 6 + (l < d ? -7 : 0) - (l - d);
			return c.setHours(0, 0, 0, 0),
			c.setDate(c.getDate() + m),
			c
		}
		t.a = a;
		var i = n(1),
		r = n(6),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (e > 18 && e <= 31) return t + "শে";
			switch (e) {
			case 1:
				return t + "লা";
			case 2:
			case 3:
				return t + "রা";
			case 4:
				return t + "ঠা";
			default:
				return t + "ই"
			}
		}
		function i(e, t) {
			var n = p.localeToNumber(e),
			i = p.numberToLocale(n);
			if ("date" === t.unit) return a(n, i);
			if (n > 10 || 0 === n) return i + "তম";
			switch (n % 10) {
			case 2:
			case 3:
				return i + "য়";
			case 4:
				return i + "র্থ";
			case 6:
				return i + "ষ্ঠ";
			case 1:
			case 5:
			case 7:
			case 8:
			case 9:
			case 0:
				return i + "ম"
			}
		}
		function r(e) {
			var t = e.toString().replace(/[১২৩৪৫৬৭৮৯০]/g,
			function(e) {
				return s.number[e]
			});
			return Number(t)
		}
		function o(e) {
			return e.toString().replace(/\d/g,
			function(e) {
				return s.locale[e]
			})
		}
		var u = n(3),
		s = {
			locale: {
				1 : "১",
				2 : "২",
				3 : "৩",
				4 : "৪",
				5 : "৫",
				6 : "৬",
				7 : "৭",
				8 : "৮",
				9 : "৯",
				0 : "০"
			},
			number: {
				"১": "1",
				"২": "2",
				"৩": "3",
				"৪": "4",
				"৫": "5",
				"৬": "6",
				"৭": "7",
				"৮": "8",
				"৯": "9",
				"০": "0"
			}
		},
		d = {
			narrow: ["খ্রিঃপূঃ", "খ্রিঃ"],
			abbreviated: ["খ্রিঃপূর্ব", "খ্রিঃ"],
			wide: ["খ্রিস্টপূর্ব", "খ্রিস্টাব্দ"]
		},
		c = {
			narrow: ["১", "২", "৩", "৪"],
			abbreviated: ["১ত্রৈ", "২ত্রৈ", "৩ত্রৈ", "৪ত্রৈ"],
			wide: ["১ম ত্রৈমাসিক", "২য় ত্রৈমাসিক", "৩য় ত্রৈমাসিক", "৪র্থ ত্রৈমাসিক"]
		},
		l = {
			narrow: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্ট", "অক্টো", "নভে", "ডিসে"],
			abbreviated: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্ট", "অক্টো", "নভে", "ডিসে"],
			wide: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]
		},
		m = {
			narrow: ["র", "সো", "ম", "বু", "বৃ", "শু", "শ"],
			short: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"],
			abbreviated: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"],
			wide: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার ", "শুক্রবার", "শনিবার"]
		},
		f = {
			narrow: {
				am: "পূ",
				pm: "অপ",
				midnight: "মধ্যরাত",
				noon: "মধ্যাহ্ন",
				morning: "সকাল",
				afternoon: "বিকাল",
				evening: "সন্ধ্যা",
				night: "রাত"
			},
			abbreviated: {
				am: "পূর্বাহ্ন",
				pm: "অপরাহ্ন",
				midnight: "মধ্যরাত",
				noon: "মধ্যাহ্ন",
				morning: "সকাল",
				afternoon: "বিকাল",
				evening: "সন্ধ্যা",
				night: "রাত"
			},
			wide: {
				am: "পূর্বাহ্ন",
				pm: "অপরাহ্ন",
				midnight: "মধ্যরাত",
				noon: "মধ্যাহ্ন",
				morning: "সকাল",
				afternoon: "বিকাল",
				evening: "সন্ধ্যা",
				night: "রাত"
			}
		},
		h = {
			narrow: {
				am: "পূ",
				pm: "অপ",
				midnight: "মধ্যরাত",
				noon: "মধ্যাহ্ন",
				morning: "সকাল",
				afternoon: "বিকাল",
				evening: "সন্ধ্যা",
				night: "রাত"
			},
			abbreviated: {
				am: "পূর্বাহ্ন",
				pm: "অপরাহ্ন",
				midnight: "মধ্যরাত",
				noon: "মধ্যাহ্ন",
				morning: "সকাল",
				afternoon: "বিকাল",
				evening: "সন্ধ্যা",
				night: "রাত"
			},
			wide: {
				am: "পূর্বাহ্ন",
				pm: "অপরাহ্ন",
				midnight: "মধ্যরাত",
				noon: "মধ্যাহ্ন",
				morning: "সকাল",
				afternoon: "বিকাল",
				evening: "সন্ধ্যা",
				night: "রাত"
			}
		},
		p = {
			localeToNumber: r,
			numberToLocale: o,
			ordinalNumber: i,
			era: u.a({
				values: d,
				defaultWidth: "wide"
			}),
			quarter: u.a({
				values: c,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: u.a({
				values: l,
				defaultWidth: "wide"
			}),
			day: u.a({
				values: m,
				defaultWidth: "wide"
			}),
			dayPeriod: u.a({
				values: f,
				defaultWidth: "wide",
				formattingValues: h,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = p
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "dans " + a: "il y a " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "moins d’une seconde",
				other: "moins de {{count}} secondes"
			},
			xSeconds: {
				one: "1 seconde",
				other: "{{count}} secondes"
			},
			halfAMinute: "30 secondes",
			lessThanXMinutes: {
				one: "moins d’une minute",
				other: "moins de {{count}} minutes"
			},
			xMinutes: {
				one: "1 minute",
				other: "{{count}} minutes"
			},
			aboutXHours: {
				one: "environ 1 heure",
				other: "environ {{count}} heures"
			},
			xHours: {
				one: "1 heure",
				other: "{{count}} heures"
			},
			xDays: {
				one: "1 jour",
				other: "{{count}} jours"
			},
			aboutXWeeks: {
				one: "environ 1 semaine",
				other: "environ {{count}} semaines"
			},
			xWeeks: {
				one: "1 semaine",
				other: "{{count}} semaines"
			},
			aboutXMonths: {
				one: "environ 1 mois",
				other: "environ {{count}} mois"
			},
			xMonths: {
				one: "1 mois",
				other: "{{count}} mois"
			},
			aboutXYears: {
				one: "environ 1 an",
				other: "environ {{count}} ans"
			},
			xYears: {
				one: "1 an",
				other: "{{count}} ans"
			},
			overXYears: {
				one: "plus d’un an",
				other: "plus de {{count}} ans"
			},
			almostXYears: {
				one: "presqu’un an",
				other: "presque {{count}} ans"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'dernier à' p",
			yesterday: "'hier à' p",
			today: "'aujourd’hui à' p",
			tomorrow: "'demain à' p'",
			nextWeek: "eeee 'prochain à' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n, a = Number(e),
			i = t || {},
			r = String(i.unit);
			return 0 === a ? a: (n = "year" === r || "hour" === r || "week" === r ? 1 === a ? "ère": "ème": 1 === a ? "er": "ème", a + n)
		}
		var i = n(3),
		r = {
			narrow: ["av. J.-C", "ap. J.-C"],
			abbreviated: ["av. J.-C", "ap. J.-C"],
			wide: ["avant Jésus-Christ", "après Jésus-Christ"]
		},
		o = {
			narrow: ["T1", "T2", "T3", "T4"],
			abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."],
			wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
			wide: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
		},
		s = {
			narrow: ["D", "L", "M", "M", "J", "V", "S"],
			short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
			abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
			wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
		},
		d = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "mat.",
				afternoon: "ap.m.",
				evening: "soir",
				night: "mat."
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "matin",
				afternoon: "après-midi",
				evening: "soir",
				night: "matin"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "du matin",
				afternoon: "de l’après-midi",
				evening: "du soir",
				night: "du matin"
			}
		},
		c = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide"
			})
		};
		t.a = c
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(ième|ère|ème|er|e)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
			abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
			wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
		},
		s = {
			any: [/^av/i, /^ap/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^t[1234]/i,
			wide: /^[1234](er|ème|e)? trimestre/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
			wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[lmjvsd]/i,
			short: /^(di|lu|ma|me|je|ve|sa)/i,
			abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
			wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
		},
		h = {
			narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
			any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
		},
		p = {
			narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
			any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^min/i,
				noon: /^mid/i,
				morning: /mat/i,
				afternoon: /ap/i,
				evening: /soir/i,
				night: /nuit/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		var i = n(64),
		r = a(i),
		o = n(65),
		u = a(o),
		s = n(12),
		d = a(s),
		c = n(12);
		n(203);
		var l = n(207),
		m = a(l),
		f = function() {
			function e() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; (0, r.
			default)(this, e),
				this.options = t
			}
			return (0, u.
		default)(e, [{
				key: "render",
				value: function(e, t) {
					var n = null;
					if (! (e = e || this.options.container)) throw new Error("Container is required: " + e);
					if (e instanceof HTMLElement) n = e;
					else if (! (n = window.document.getElementById(e))) throw new Error("Container not found, window.document.getElementById: " + e);
					return t || (t = function() {}),
					(0, c.render)(d.
				default.createElement(m.
				default, {
						options: this.options
					}), n, t)
				}
			}]),
			e
		} ();
		e.exports = f
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(193),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(194);
		var a = n(7).Object;
		e.exports = function(e, t, n) {
			return a.defineProperty(e, t, n)
		}
	},
	function(e, t, n) {
		var a = n(11);
		a(a.S + a.F * !n(17), "Object", {
			defineProperty: n(16).f
		})
	},
	function(e, t, n) { (function(t) {
			if ("production" !== t.env.NODE_ENV) {
				var a = n(99);
				e.exports = n(198)(a.isElement, !0)
			} else e.exports = n(201)()
		}).call(t, n(18))
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			if ("object" == typeof e && null !== e) {
				var t = e.$$typeof;
				switch (t) {
				case o:
					switch (e = e.type) {
					case f:
					case h:
					case s:
					case c:
					case d:
					case g:
						return e;
					default:
						switch (e = e && e.$$typeof) {
						case m:
						case p:
						case b:
						case w:
						case l:
							return e;
						default:
							return t
						}
					}
				case u:
					return t
				}
			}
		}
		function i(e) {
			return a(e) === h
		}
		/** @license React v16.12.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = "function" == typeof Symbol && Symbol.
		for,
		o = r ? Symbol.
		for ("react.element") : 60103,
		u = r ? Symbol.
		for ("react.portal") : 60106,
		s = r ? Symbol.
		for ("react.fragment") : 60107,
		d = r ? Symbol.
		for ("react.strict_mode") : 60108,
		c = r ? Symbol.
		for ("react.profiler") : 60114,
		l = r ? Symbol.
		for ("react.provider") : 60109,
		m = r ? Symbol.
		for ("react.context") : 60110,
		f = r ? Symbol.
		for ("react.async_mode") : 60111,
		h = r ? Symbol.
		for ("react.concurrent_mode") : 60111,
		p = r ? Symbol.
		for ("react.forward_ref") : 60112,
		g = r ? Symbol.
		for ("react.suspense") : 60113,
		v = r ? Symbol.
		for ("react.suspense_list") : 60120,
		w = r ? Symbol.
		for ("react.memo") : 60115,
		b = r ? Symbol.
		for ("react.lazy") : 60116,
		y = r ? Symbol.
		for ("react.fundamental") : 60117,
		M = r ? Symbol.
		for ("react.responder") : 60118,
		k = r ? Symbol.
		for ("react.scope") : 60119;
		t.typeOf = a,
		t.AsyncMode = f,
		t.ConcurrentMode = h,
		t.ContextConsumer = m,
		t.ContextProvider = l,
		t.Element = o,
		t.ForwardRef = p,
		t.Fragment = s,
		t.Lazy = b,
		t.Memo = w,
		t.Portal = u,
		t.Profiler = c,
		t.StrictMode = d,
		t.Suspense = g,
		t.isValidElementType = function(e) {
			return "string" == typeof e || "function" == typeof e || e === s || e === h || e === c || e === d || e === g || e === v || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === w || e.$$typeof === l || e.$$typeof === m || e.$$typeof === p || e.$$typeof === y || e.$$typeof === M || e.$$typeof === k)
		},
		t.isAsyncMode = function(e) {
			return i(e) || a(e) === f
		},
		t.isConcurrentMode = i,
		t.isContextConsumer = function(e) {
			return a(e) === m
		},
		t.isContextProvider = function(e) {
			return a(e) === l
		},
		t.isElement = function(e) {
			return "object" == typeof e && null !== e && e.$$typeof === o
		},
		t.isForwardRef = function(e) {
			return a(e) === p
		},
		t.isFragment = function(e) {
			return a(e) === s
		},
		t.isLazy = function(e) {
			return a(e) === b
		},
		t.isMemo = function(e) {
			return a(e) === w
		},
		t.isPortal = function(e) {
			return a(e) === u
		},
		t.isProfiler = function(e) {
			return a(e) === c
		},
		t.isStrictMode = function(e) {
			return a(e) === d
		},
		t.isSuspense = function(e) {
			return a(e) === g
		}
	},
	function(e, t, n) {
		"use strict"; (function(e) {
			/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
			"production" !== e.env.NODE_ENV &&
			function() {
				function e(e) {
					return "string" == typeof e || "function" == typeof e || e === b || e === x || e === M || e === y || e === T || e === S || "object" == typeof e && null !== e && (e.$$typeof === z || e.$$typeof === C || e.$$typeof === k || e.$$typeof === P || e.$$typeof === j || e.$$typeof === N || e.$$typeof === D || e.$$typeof === E)
				}
				function n(e) {
					if ("object" == typeof e && null !== e) {
						var t = e.$$typeof;
						switch (t) {
						case v:
							var n = e.type;
							switch (n) {
							case W:
							case x:
							case b:
							case M:
							case y:
							case T:
								return n;
							default:
								var a = n && n.$$typeof;
								switch (a) {
								case P:
								case j:
								case z:
								case C:
								case k:
									return a;
								default:
									return t
								}
							}
						case w:
							return t
						}
					}
				}
				function a(e) {
					return $ || ($ = !0, _(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),
					i(e) || n(e) === W
				}
				function i(e) {
					return n(e) === x
				}
				function r(e) {
					return n(e) === P
				}
				function o(e) {
					return n(e) === k
				}
				function u(e) {
					return "object" == typeof e && null !== e && e.$$typeof === v
				}
				function s(e) {
					return n(e) === j
				}
				function d(e) {
					return n(e) === b
				}
				function c(e) {
					return n(e) === z
				}
				function l(e) {
					return n(e) === C
				}
				function m(e) {
					return n(e) === w
				}
				function f(e) {
					return n(e) === M
				}
				function h(e) {
					return n(e) === y
				}
				function p(e) {
					return n(e) === T
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var g = "function" == typeof Symbol && Symbol.
				for,
				v = g ? Symbol.
				for ("react.element") : 60103,
				w = g ? Symbol.
				for ("react.portal") : 60106,
				b = g ? Symbol.
				for ("react.fragment") : 60107,
				y = g ? Symbol.
				for ("react.strict_mode") : 60108,
				M = g ? Symbol.
				for ("react.profiler") : 60114,
				k = g ? Symbol.
				for ("react.provider") : 60109,
				P = g ? Symbol.
				for ("react.context") : 60110,
				W = g ? Symbol.
				for ("react.async_mode") : 60111,
				x = g ? Symbol.
				for ("react.concurrent_mode") : 60111,
				j = g ? Symbol.
				for ("react.forward_ref") : 60112,
				T = g ? Symbol.
				for ("react.suspense") : 60113,
				S = g ? Symbol.
				for ("react.suspense_list") : 60120,
				C = g ? Symbol.
				for ("react.memo") : 60115,
				z = g ? Symbol.
				for ("react.lazy") : 60116,
				N = g ? Symbol.
				for ("react.fundamental") : 60117,
				D = g ? Symbol.
				for ("react.responder") : 60118,
				E = g ? Symbol.
				for ("react.scope") : 60119,
				H = function() {},
				A = function(e) {
					for (var t = arguments.length,
					n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
					var i = 0,
					r = "Warning: " + e.replace(/%s/g,
					function() {
						return n[i++]
					});
					"undefined" != typeof console && console.warn(r);
					try {
						throw new Error(r)
					} catch(e) {}
				};
				H = function(e, t) {
					if (void 0 === t) throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");
					if (!e) {
						for (var n = arguments.length,
						a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) a[i - 2] = arguments[i];
						A.apply(void 0, [t].concat(a))
					}
				};
				var _ = H,
				O = W,
				X = x,
				I = P,
				Y = k,
				F = v,
				L = j,
				q = b,
				G = z,
				R = C,
				U = w,
				K = M,
				J = y,
				B = T,
				$ = !1;
				t.typeOf = n,
				t.AsyncMode = O,
				t.ConcurrentMode = X,
				t.ContextConsumer = I,
				t.ContextProvider = Y,
				t.Element = F,
				t.ForwardRef = L,
				t.Fragment = q,
				t.Lazy = G,
				t.Memo = R,
				t.Portal = U,
				t.Profiler = K,
				t.StrictMode = J,
				t.Suspense = B,
				t.isValidElementType = e,
				t.isAsyncMode = a,
				t.isConcurrentMode = i,
				t.isContextConsumer = r,
				t.isContextProvider = o,
				t.isElement = u,
				t.isForwardRef = s,
				t.isFragment = d,
				t.isLazy = c,
				t.isMemo = l,
				t.isPortal = m,
				t.isProfiler = f,
				t.isStrictMode = h,
				t.isSuspense = p
			} ()
		}).call(t, n(18))
	},
	function(e, t, n) {
		"use strict"; (function(t) {
			function a() {
				return null
			}
			var i = n(99),
			r = n(199),
			o = n(68),
			u = n(200),
			s = Function.call.bind(Object.prototype.hasOwnProperty),
			d = function() {};
			"production" !== t.env.NODE_ENV && (d = function(e) {
				var t = "Warning: " + e;
				"undefined" != typeof console && console.error(t);
				try {
					throw new Error(t)
				} catch(e) {}
			}),
			e.exports = function(e, n) {
				function c(e) {
					var t = e && (S && e[S] || e[C]);
					if ("function" == typeof t) return t
				}
				function l(e, t) {
					return e === t ? 0 !== e || 1 / e == 1 / t: e !== e && t !== t
				}
				function m(e) {
					this.message = e,
					this.stack = ""
				}
				function f(e) {
					function a(a, u, s, c, l, f, h) {
						if (c = c || z, f = f || s, h !== o) {
							if (n) {
								var p = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
								throw p.name = "Invariant Violation",
								p
							}
							if ("production" !== t.env.NODE_ENV && "undefined" != typeof console) {
								var g = c + ":" + s; ! i[g] && r < 3 && (d("You are manually calling a React.PropTypes validation function for the `" + f + "` prop on `" + c + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), i[g] = !0, r++)
							}
						}
						return null == u[s] ? a ? new m(null === u[s] ? "The " + l + " `" + f + "` is marked as required in `" + c + "`, but its value is `null`.": "The " + l + " `" + f + "` is marked as required in `" + c + "`, but its value is `undefined`.") : null: e(u, s, c, l, f)
					}
					if ("production" !== t.env.NODE_ENV) var i = {},
					r = 0;
					var u = a.bind(null, !1);
					return u.isRequired = a.bind(null, !0),
					u
				}
				function h(e) {
					function t(t, n, a, i, r, o) {
						var u = t[n];
						if (W(u) !== e) return new m("Invalid " + i + " `" + r + "` of type `" + x(u) + "` supplied to `" + a + "`, expected `" + e + "`.");
						return null
					}
					return f(t)
				}
				function p(e) {
					function t(t, n, a, i, r) {
						if ("function" != typeof e) return new m("Property `" + r + "` of component `" + a + "` has invalid PropType notation inside arrayOf.");
						var u = t[n];
						if (!Array.isArray(u)) {
							return new m("Invalid " + i + " `" + r + "` of type `" + W(u) + "` supplied to `" + a + "`, expected an array.")
						}
						for (var s = 0; s < u.length; s++) {
							var d = e(u, s, a, i, r + "[" + s + "]", o);
							if (d instanceof Error) return d
						}
						return null
					}
					return f(t)
				}
				function g(e) {
					function t(t, n, a, i, r) {
						if (! (t[n] instanceof e)) {
							var o = e.name || z;
							return new m("Invalid " + i + " `" + r + "` of type `" + T(t[n]) + "` supplied to `" + a + "`, expected instance of `" + o + "`.")
						}
						return null
					}
					return f(t)
				}
				function v(e) {
					function n(t, n, a, i, r) {
						for (var o = t[n], u = 0; u < e.length; u++) if (l(o, e[u])) return null;
						var s = JSON.stringify(e,
						function(e, t) {
							return "symbol" === x(t) ? String(t) : t
						});
						return new m("Invalid " + i + " `" + r + "` of value `" + String(o) + "` supplied to `" + a + "`, expected one of " + s + ".")
					}
					return Array.isArray(e) ? f(n) : ("production" !== t.env.NODE_ENV && d(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).": "Invalid argument supplied to oneOf, expected an array."), a)
				}
				function w(e) {
					function t(t, n, a, i, r) {
						if ("function" != typeof e) return new m("Property `" + r + "` of component `" + a + "` has invalid PropType notation inside objectOf.");
						var u = t[n],
						d = W(u);
						if ("object" !== d) return new m("Invalid " + i + " `" + r + "` of type `" + d + "` supplied to `" + a + "`, expected an object.");
						for (var c in u) if (s(u, c)) {
							var l = e(u, c, a, i, r + "." + c, o);
							if (l instanceof Error) return l
						}
						return null
					}
					return f(t)
				}
				function b(e) {
					function n(t, n, a, i, r) {
						for (var u = 0; u < e.length; u++) {
							if (null == (0, e[u])(t, n, a, i, r, o)) return null
						}
						return new m("Invalid " + i + " `" + r + "` supplied to `" + a + "`.")
					}
					if (!Array.isArray(e)) return "production" !== t.env.NODE_ENV && d("Invalid argument supplied to oneOfType, expected an instance of array."),
					a;
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						if ("function" != typeof r) return d("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + j(r) + " at index " + i + "."),
						a
					}
					return f(n)
				}
				function y(e) {
					function t(t, n, a, i, r) {
						var u = t[n],
						s = W(u);
						if ("object" !== s) return new m("Invalid " + i + " `" + r + "` of type `" + s + "` supplied to `" + a + "`, expected `object`.");
						for (var d in e) {
							var c = e[d];
							if (c) {
								var l = c(u, d, a, i, r + "." + d, o);
								if (l) return l
							}
						}
						return null
					}
					return f(t)
				}
				function M(e) {
					function t(t, n, a, i, u) {
						var s = t[n],
						d = W(s);
						if ("object" !== d) return new m("Invalid " + i + " `" + u + "` of type `" + d + "` supplied to `" + a + "`, expected `object`.");
						var c = r({},
						t[n], e);
						for (var l in c) {
							var f = e[l];
							if (!f) return new m("Invalid " + i + " `" + u + "` key `" + l + "` supplied to `" + a + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
							var h = f(s, l, a, i, u + "." + l, o);
							if (h) return h
						}
						return null
					}
					return f(t)
				}
				function k(t) {
					switch (typeof t) {
					case "number":
					case "string":
					case "undefined":
						return ! 0;
					case "boolean":
						return ! t;
					case "object":
						if (Array.isArray(t)) return t.every(k);
						if (null === t || e(t)) return ! 0;
						var n = c(t);
						if (!n) return ! 1;
						var a, i = n.call(t);
						if (n !== t.entries) {
							for (; ! (a = i.next()).done;) if (!k(a.value)) return ! 1
						} else for (; ! (a = i.next()).done;) {
							var r = a.value;
							if (r && !k(r[1])) return ! 1
						}
						return ! 0;
					default:
						return ! 1
					}
				}
				function P(e, t) {
					return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
				}
				function W(e) {
					var t = typeof e;
					return Array.isArray(e) ? "array": e instanceof RegExp ? "object": P(t, e) ? "symbol": t
				}
				function x(e) {
					if (void 0 === e || null === e) return "" + e;
					var t = W(e);
					if ("object" === t) {
						if (e instanceof Date) return "date";
						if (e instanceof RegExp) return "regexp"
					}
					return t
				}
				function j(e) {
					var t = x(e);
					switch (t) {
					case "array":
					case "object":
						return "an " + t;
					case "boolean":
					case "date":
					case "regexp":
						return "a " + t;
					default:
						return t
					}
				}
				function T(e) {
					return e.constructor && e.constructor.name ? e.constructor.name: z
				}
				var S = "function" == typeof Symbol && Symbol.iterator,
				C = "@@iterator",
				z = "<<anonymous>>",
				N = {
					array: h("array"),
					bool: h("boolean"),
					func: h("function"),
					number: h("number"),
					object: h("object"),
					string: h("string"),
					symbol: h("symbol"),
					any: function() {
						return f(a)
					} (),
					arrayOf: p,
					element: function() {
						function t(t, n, a, i, r) {
							var o = t[n];
							if (!e(o)) {
								return new m("Invalid " + i + " `" + r + "` of type `" + W(o) + "` supplied to `" + a + "`, expected a single ReactElement.")
							}
							return null
						}
						return f(t)
					} (),
					elementType: function() {
						function e(e, t, n, a, r) {
							var o = e[t];
							if (!i.isValidElementType(o)) {
								return new m("Invalid " + a + " `" + r + "` of type `" + W(o) + "` supplied to `" + n + "`, expected a single ReactElement type.")
							}
							return null
						}
						return f(e)
					} (),
					instanceOf: g,
					node: function() {
						function e(e, t, n, a, i) {
							return k(e[t]) ? null: new m("Invalid " + a + " `" + i + "` supplied to `" + n + "`, expected a ReactNode.")
						}
						return f(e)
					} (),
					objectOf: w,
					oneOf: v,
					oneOfType: b,
					shape: y,
					exact: M
				};
				return m.prototype = Error.prototype,
				N.checkPropTypes = u,
				N.resetWarningCache = u.resetWarningCache,
				N.PropTypes = N,
				N
			}
		}).call(t, n(18))
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(e)
		}
		/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
		var i = Object.getOwnPropertySymbols,
		r = Object.prototype.hasOwnProperty,
		o = Object.prototype.propertyIsEnumerable;
		e.exports = function() {
			try {
				if (!Object.assign) return ! 1;
				var e = new String("abc");
				if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return ! 1;
				for (var t = {},
				n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
				if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
					return t[e]
				}).join("")) return ! 1;
				var a = {};
				return "abcdefghijklmnopqrst".split("").forEach(function(e) {
					a[e] = e
				}),
				"abcdefghijklmnopqrst" === Object.keys(Object.assign({},
				a)).join("")
			} catch(e) {
				return ! 1
			}
		} () ? Object.assign: function(e, t) {
			for (var n, u, s = a(e), d = 1; d < arguments.length; d++) {
				n = Object(arguments[d]);
				for (var c in n) r.call(n, c) && (s[c] = n[c]);
				if (i) {
					u = i(n);
					for (var l = 0; l < u.length; l++) o.call(n, u[l]) && (s[u[l]] = n[u[l]])
				}
			}
			return s
		}
	},
	function(e, t, n) {
		"use strict"; (function(t) {
			function a(e, n, a, s, d) {
				if ("production" !== t.env.NODE_ENV) for (var c in e) if (u(e, c)) {
					var l;
					try {
						if ("function" != typeof e[c]) {
							var m = Error((s || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.");
							throw m.name = "Invariant Violation",
							m
						}
						l = e[c](n, c, s, a, null, r)
					} catch(e) {
						l = e
					}
					if (!l || l instanceof Error || i((s || "React class") + ": type specification of " + a + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), l instanceof Error && !(l.message in o)) {
						o[l.message] = !0;
						var f = d ? d() : "";
						i("Failed " + a + " type: " + l.message + (null != f ? f: ""))
					}
				}
			}
			var i = function() {};
			if ("production" !== t.env.NODE_ENV) {
				var r = n(68),
				o = {},
				u = Function.call.bind(Object.prototype.hasOwnProperty);
				i = function(e) {
					var t = "Warning: " + e;
					"undefined" != typeof console && console.error(t);
					try {
						throw new Error(t)
					} catch(e) {}
				}
			}
			a.resetWarningCache = function() {
				"production" !== t.env.NODE_ENV && (o = {})
			},
			e.exports = a
		}).call(t, n(18))
	},
	function(e, t, n) {
		"use strict";
		function a() {}
		function i() {}
		var r = n(68);
		i.resetWarningCache = a,
		e.exports = function() {
			function e(e, t, n, a, i, o) {
				if (o !== r) {
					var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw u.name = "Invariant Violation",
					u
				}
			}
			function t() {
				return e
			}
			e.isRequired = e;
			var n = {
				array: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: t,
				element: e,
				elementType: e,
				instanceOf: t,
				node: e,
				objectOf: t,
				oneOf: t,
				oneOfType: t,
				shape: t,
				exact: t,
				checkPropTypes: i,
				resetWarningCache: a
			};
			return n.PropTypes = n,
			n
		}
	},
	function(e, t, n) { !
		function() {
			"use strict";
			function t() {}
			function n(e, n) {
				var a, i, r, o, u = E;
				for (o = arguments.length; o-->2;) D.push(arguments[o]);
				for (n && null != n.children && (D.length || D.push(n.children), delete n.children); D.length;) if ((i = D.pop()) && void 0 !== i.pop) for (o = i.length; o--;) D.push(i[o]);
				else ! 0 !== i && !1 !== i || (i = null),
				(r = "function" != typeof e) && (null == i ? i = "": "number" == typeof i ? i = String(i) : "string" != typeof i && (r = !1)),
				r && a ? u[u.length - 1] += i: u === E ? u = [i] : u.push(i),
				a = r;
				var s = new t;
				return s.nodeName = e,
				s.children = u,
				s.attributes = null == n ? void 0 : n,
				s.key = null == n ? void 0 : n.key,
				void 0 !== N.vnode && N.vnode(s),
				s
			}
			function a(e, t) {
				for (var n in t) e[n] = t[n];
				return e
			}
			function i(e, t) {
				return n(e.nodeName, a(a({},
				e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
			}
			function r(e) { ! e.__d && (e.__d = !0) && 1 == A.push(e) && (N.debounceRendering || setTimeout)(o)
			}
			function o() {
				var e, t = A;
				for (A = []; e = t.pop();) e.__d && j(e)
			}
			function u(e, t, n) {
				return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText: "string" == typeof t.nodeName ? !e._componentConstructor && s(e, t.nodeName) : n || e._componentConstructor === t.nodeName
			}
			function s(e, t) {
				return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase()
			}
			function d(e) {
				var t = a({},
				e.attributes);
				t.children = e.children;
				var n = e.nodeName.defaultProps;
				if (void 0 !== n) for (var i in n) void 0 === t[i] && (t[i] = n[i]);
				return t
			}
			function c(e, t) {
				var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
				return n.__n = e,
				n
			}
			function l(e) {
				e.parentNode && e.parentNode.removeChild(e)
			}
			function m(e, t, n, a, i) {
				if ("className" === t && (t = "class"), "key" === t);
				else if ("ref" === t) n && n(null),
				a && a(e);
				else if ("class" !== t || i) if ("style" === t) {
					if (a && "string" != typeof a && "string" != typeof n || (e.style.cssText = a || ""), a && "object" == typeof a) {
						if ("string" != typeof n) for (var r in n) r in a || (e.style[r] = "");
						for (var r in a) e.style[r] = "number" == typeof a[r] && !1 === H.test(r) ? a[r] + "px": a[r]
					}
				} else if ("dangerouslySetInnerHTML" === t) a && (e.innerHTML = a.__html || "");
				else if ("o" == t[0] && "n" == t[1]) {
					var o = t !== (t = t.replace(/Capture$/, ""));
					t = t.toLowerCase().substring(2),
					a ? n || e.addEventListener(t, h, o) : e.removeEventListener(t, h, o),
					(e.__l || (e.__l = {}))[t] = a
				} else if ("list" !== t && "type" !== t && !i && t in e) f(e, t, null == a ? "": a),
				null != a && !1 !== a || e.removeAttribute(t);
				else {
					var u = i && t !== (t = t.replace(/^xlink\:?/, ""));
					null == a || !1 === a ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof a && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), a) : e.setAttribute(t, a))
				} else e.className = a || ""
			}
			function f(e, t, n) {
				try {
					e[t] = n
				} catch(e) {}
			}
			function h(e) {
				return this.__l[e.type](N.event && N.event(e) || e)
			}
			function p() {
				for (var e; e = _.pop();) N.afterMount && N.afterMount(e),
				e.componentDidMount && e.componentDidMount()
			}
			function g(e, t, n, a, i, r) {
				O++||(X = null != i && void 0 !== i.ownerSVGElement, I = null != e && !("__preactattr_" in e));
				var o = v(e, t, n, a, r);
				return i && o.parentNode !== i && i.appendChild(o),
				--O || (I = !1, r || p()),
				o
			}
			function v(e, t, n, a, i) {
				var r = e,
				o = X;
				if (null == t && (t = ""), "string" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || i) ? e.nodeValue != t && (e.nodeValue = t) : (r = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(r, e), b(e, !0))),
				r.__preactattr_ = !0,
				r;
				if ("function" == typeof t.nodeName) return T(e, t, n, a);
				if (X = "svg" === t.nodeName || "foreignObject" !== t.nodeName && X, (!e || !s(e, String(t.nodeName))) && (r = c(String(t.nodeName), X), e)) {
					for (; e.firstChild;) r.appendChild(e.firstChild);
					e.parentNode && e.parentNode.replaceChild(r, e),
					b(e, !0)
				}
				var u = r.firstChild,
				d = r.__preactattr_ || (r.__preactattr_ = {}),
				l = t.children;
				return ! I && l && 1 === l.length && "string" == typeof l[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != l[0] && (u.nodeValue = l[0]) : (l && l.length || null != u) && w(r, l, n, a, I || null != d.dangerouslySetInnerHTML),
				M(r, t.attributes, d),
				X = o,
				r
			}
			function w(e, t, n, a, i) {
				var r, o, s, d, c = e.childNodes,
				m = [],
				f = {},
				h = 0,
				p = 0,
				g = c.length,
				w = 0,
				y = t ? t.length: 0;
				if (0 !== g) for (var M = 0; M < g; M++) {
					var k = c[M],
					P = k.__preactattr_,
					W = y && P ? k._component ? k._component.__k: P.key: null;
					null != W ? (h++, f[W] = k) : (P || (void 0 !== k.splitText ? !i || k.nodeValue.trim() : i)) && (m[w++] = k)
				}
				if (0 !== y) for (var M = 0; M < y; M++) {
					s = t[M],
					d = null;
					var W = s.key;
					if (null != W) h && void 0 !== f[W] && (d = f[W], f[W] = void 0, h--);
					else if (!d && p < w) for (r = p; r < w; r++) if (void 0 !== m[r] && u(o = m[r], s, i)) {
						d = o,
						m[r] = void 0,
						r === w - 1 && w--,
						r === p && p++;
						break
					}
					d = v(d, s, n, a),
					d && d !== e && (M >= g ? e.appendChild(d) : d !== c[M] && (d === c[M + 1] ? l(c[M]) : e.insertBefore(d, c[M] || null)))
				}
				if (h) for (var M in f) void 0 !== f[M] && b(f[M], !1);
				for (; p <= w;) void 0 !== (d = m[w--]) && b(d, !1)
			}
			function b(e, t) {
				var n = e._component;
				n ? S(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || l(e), y(e))
			}
			function y(e) {
				for (e = e.lastChild; e;) {
					var t = e.previousSibling;
					b(e, !0),
					e = t
				}
			}
			function M(e, t, n) {
				var a;
				for (a in n) t && null != t[a] || null == n[a] || m(e, a, n[a], n[a] = void 0, X);
				for (a in t)"children" === a || "innerHTML" === a || a in n && t[a] === ("value" === a || "checked" === a ? e[a] : n[a]) || m(e, a, n[a], n[a] = t[a], X)
			}
			function k(e) {
				var t = e.constructor.name; (Y[t] || (Y[t] = [])).push(e)
			}
			function P(e, t, n) {
				var a, i = Y[e.name];
				if (e.prototype && e.prototype.render ? (a = new e(t, n), C.call(a, t, n)) : (a = new C(t, n), a.constructor = e, a.render = W), i) for (var r = i.length; r--;) if (i[r].constructor === e) {
					a.__b = i[r].__b,
					i.splice(r, 1);
					break
				}
				return a
			}
			function W(e, t, n) {
				return this.constructor(e, n)
			}
			function x(e, t, n, a, i) {
				e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, a), a && a !== e.context && (e.__c || (e.__c = e.context), e.context = a), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === N.syncComponentUpdates && e.base ? r(e) : j(e, 1, i)), e.__r && e.__r(e))
			}
			function j(e, t, n, i) {
				if (!e.__x) {
					var r, o, u, s = e.props,
					c = e.state,
					l = e.context,
					m = e.__p || s,
					f = e.__s || c,
					h = e.__c || l,
					v = e.base,
					w = e.__b,
					y = v || w,
					M = e._component,
					k = !1;
					if (v && (e.props = m, e.state = f, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, c, l) ? k = !0 : e.componentWillUpdate && e.componentWillUpdate(s, c, l), e.props = s, e.state = c, e.context = l), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !k) {
						r = e.render(s, c, l),
						e.getChildContext && (l = a(a({},
						l), e.getChildContext()));
						var W, T, C = r && r.nodeName;
						if ("function" == typeof C) {
							var z = d(r);
							o = M,
							o && o.constructor === C && z.key == o.__k ? x(o, z, 1, l, !1) : (W = o, e._component = o = P(C, z, l), o.__b = o.__b || w, o.__u = e, x(o, z, 0, l, !1), j(o, 1, n, !0)),
							T = o.base
						} else u = y,
						W = M,
						W && (u = e._component = null),
						(y || 1 === t) && (u && (u._component = null), T = g(u, r, l, n || !v, y && y.parentNode, !0));
						if (y && T !== y && o !== M) {
							var D = y.parentNode;
							D && T !== D && (D.replaceChild(T, y), W || (y._component = null, b(y, !1)))
						}
						if (W && S(W), e.base = T, T && !i) {
							for (var E = e,
							H = e; H = H.__u;)(E = H).base = T;
							T._component = E,
							T._componentConstructor = E.constructor
						}
					}
					if (!v || n ? _.unshift(e) : k || (p(), e.componentDidUpdate && e.componentDidUpdate(m, f, h), N.afterUpdate && N.afterUpdate(e)), null != e.__h) for (; e.__h.length;) e.__h.pop().call(e);
					O || i || p()
				}
			}
			function T(e, t, n, a) {
				for (var i = e && e._component,
				r = i,
				o = e,
				u = i && e._componentConstructor === t.nodeName,
				s = u,
				c = d(t); i && !s && (i = i.__u);) s = i.constructor === t.nodeName;
				return i && s && (!a || i._component) ? (x(i, c, 3, n, a), e = i.base) : (r && !u && (S(r), e = o = null), i = P(t.nodeName, c, n), e && !i.__b && (i.__b = e, o = null), x(i, c, 1, n, a), e = i.base, o && e !== o && (o._component = null, b(o, !1))),
				e
			}
			function S(e) {
				N.beforeUnmount && N.beforeUnmount(e);
				var t = e.base;
				e.__x = !0,
				e.componentWillUnmount && e.componentWillUnmount(),
				e.base = null;
				var n = e._component;
				n ? S(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, l(t), k(e), y(t)),
				e.__r && e.__r(null)
			}
			function C(e, t) {
				this.__d = !0,
				this.context = t,
				this.props = e,
				this.state = this.state || {}
			}
			function z(e, t, n) {
				return g(n, e, {},
				!1, t, !1)
			}
			var N = {},
			D = [],
			E = [],
			H = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
			A = [],
			_ = [],
			O = 0,
			X = !1,
			I = !1,
			Y = {};
			a(C.prototype, {
				setState: function(e, t) {
					var n = this.state;
					this.__s || (this.__s = a({},
					n)),
					a(n, "function" == typeof e ? e(n, this.props) : e),
					t && (this.__h = this.__h || []).push(t),
					r(this)
				},
				forceUpdate: function(e) {
					e && (this.__h = this.__h || []).push(e),
					j(this, 2)
				},
				render: function() {}
			});
			var F = {
				h: n,
				createElement: n,
				cloneElement: i,
				Component: C,
				render: z,
				rerender: o,
				options: N
			};
			e.exports = F
		} ()
	},
	function(e, t, n) {
		"use strict";
		e.exports = n(204).polyfill()
	},
	function(e, t, n) { (function(t, a) {
			/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
			!
			function(t, n) {
				e.exports = n()
			} (0,
			function() {
				"use strict";
				function e(e) {
					var t = typeof e;
					return null !== e && ("object" === t || "function" === t)
				}
				function i(e) {
					return "function" == typeof e
				}
				function r(e) {
					R = e
				}
				function o(e) {
					U = e
				}
				function u() {
					return void 0 !== G ?
					function() {
						G(d)
					}: s()
				}
				function s() {
					var e = setTimeout;
					return function() {
						return e(d, 1)
					}
				}
				function d() {
					for (var e = 0; e < q; e += 2) { (0, Q[e])(Q[e + 1]),
						Q[e] = void 0,
						Q[e + 1] = void 0
					}
					q = 0
				}
				function c(e, t) {
					var n = arguments,
					a = this,
					i = new this.constructor(m);
					void 0 === i[ee] && N(i);
					var r = a._state;
					return r ?
					function() {
						var e = n[r - 1];
						U(function() {
							return S(r, i, e, a._result)
						})
					} () : W(a, i, e, t),
					i
				}
				function l(e) {
					var t = this;
					if (e && "object" == typeof e && e.constructor === t) return e;
					var n = new t(m);
					return y(n, e),
					n
				}
				function m() {}
				function f() {
					return new TypeError("You cannot resolve a promise with itself")
				}
				function h() {
					return new TypeError("A promises callback cannot return that same promise.")
				}
				function p(e) {
					try {
						return e.then
					} catch(e) {
						return ie.error = e,
						ie
					}
				}
				function g(e, t, n, a) {
					try {
						e.call(t, n, a)
					} catch(e) {
						return e
					}
				}
				function v(e, t, n) {
					U(function(e) {
						var a = !1,
						i = g(n, t,
						function(n) {
							a || (a = !0, t !== n ? y(e, n) : k(e, n))
						},
						function(t) {
							a || (a = !0, P(e, t))
						},
						"Settle: " + (e._label || " unknown promise")); ! a && i && (a = !0, P(e, i))
					},
					e)
				}
				function w(e, t) {
					t._state === ne ? k(e, t._result) : t._state === ae ? P(e, t._result) : W(t, void 0,
					function(t) {
						return y(e, t)
					},
					function(t) {
						return P(e, t)
					})
				}
				function b(e, t, n) {
					t.constructor === e.constructor && n === c && t.constructor.resolve === l ? w(e, t) : n === ie ? (P(e, ie.error), ie.error = null) : void 0 === n ? k(e, t) : i(n) ? v(e, t, n) : k(e, t)
				}
				function y(t, n) {
					t === n ? P(t, f()) : e(n) ? b(t, n, p(n)) : k(t, n)
				}
				function M(e) {
					e._onerror && e._onerror(e._result),
					x(e)
				}
				function k(e, t) {
					e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && U(x, e))
				}
				function P(e, t) {
					e._state === te && (e._state = ae, e._result = t, U(M, e))
				}
				function W(e, t, n, a) {
					var i = e._subscribers,
					r = i.length;
					e._onerror = null,
					i[r] = t,
					i[r + ne] = n,
					i[r + ae] = a,
					0 === r && e._state && U(x, e)
				}
				function x(e) {
					var t = e._subscribers,
					n = e._state;
					if (0 !== t.length) {
						for (var a = void 0,
						i = void 0,
						r = e._result,
						o = 0; o < t.length; o += 3) a = t[o],
						i = t[o + n],
						a ? S(n, a, i, r) : i(r);
						e._subscribers.length = 0
					}
				}
				function j() {
					this.error = null
				}
				function T(e, t) {
					try {
						return e(t)
					} catch(e) {
						return re.error = e,
						re
					}
				}
				function S(e, t, n, a) {
					var r = i(n),
					o = void 0,
					u = void 0,
					s = void 0,
					d = void 0;
					if (r) {
						if (o = T(n, a), o === re ? (d = !0, u = o.error, o.error = null) : s = !0, t === o) return void P(t, h())
					} else o = a,
					s = !0;
					t._state !== te || (r && s ? y(t, o) : d ? P(t, u) : e === ne ? k(t, o) : e === ae && P(t, o))
				}
				function C(e, t) {
					try {
						t(function(t) {
							y(e, t)
						},
						function(t) {
							P(e, t)
						})
					} catch(t) {
						P(e, t)
					}
				}
				function z() {
					return oe++
				}
				function N(e) {
					e[ee] = oe++,
					e._state = void 0,
					e._result = void 0,
					e._subscribers = []
				}
				function D(e, t) {
					this._instanceConstructor = e,
					this.promise = new e(m),
					this.promise[ee] || N(this.promise),
					L(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && k(this.promise, this._result))) : P(this.promise, E())
				}
				function E() {
					return new Error("Array Methods must be provided an Array")
				}
				function H(e) {
					return new D(this, e).promise
				}
				function A(e) {
					var t = this;
					return new t(L(e) ?
					function(n, a) {
						for (var i = e.length,
						r = 0; r < i; r++) t.resolve(e[r]).then(n, a)
					}: function(e, t) {
						return t(new TypeError("You must pass an array to race."))
					})
				}
				function _(e) {
					var t = this,
					n = new t(m);
					return P(n, e),
					n
				}
				function O() {
					throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
				}
				function X() {
					throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
				}
				function I(e) {
					this[ee] = z(),
					this._result = this._state = void 0,
					this._subscribers = [],
					m !== e && ("function" != typeof e && O(), this instanceof I ? C(this, e) : X())
				}
				function Y() {
					var e = void 0;
					if (void 0 !== a) e = a;
					else if ("undefined" != typeof self) e = self;
					else try {
						e = Function("return this")()
					} catch(e) {
						throw new Error("polyfill failed because global object is unavailable in this environment")
					}
					var t = e.Promise;
					if (t) {
						var n = null;
						try {
							n = Object.prototype.toString.call(t.resolve())
						} catch(e) {}
						if ("[object Promise]" === n && !t.cast) return
					}
					e.Promise = I
				}
				var F = void 0;
				F = Array.isArray ? Array.isArray: function(e) {
					return "[object Array]" === Object.prototype.toString.call(e)
				};
				var L = F,
				q = 0,
				G = void 0,
				R = void 0,
				U = function(e, t) {
					Q[q] = e,
					Q[q + 1] = t,
					2 === (q += 2) && (R ? R(d) : Z())
				},
				K = "undefined" != typeof window ? window: void 0,
				J = K || {},
				B = J.MutationObserver || J.WebKitMutationObserver,
				$ = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
				V = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
				Q = new Array(1e3),
				Z = void 0;
				Z = $ ?
				function() {
					return function() {
						return t.nextTick(d)
					}
				} () : B ?
				function() {
					var e = 0,
					t = new B(d),
					n = document.createTextNode("");
					return t.observe(n, {
						characterData: !0
					}),
					function() {
						n.data = e = ++e % 2
					}
				} () : V ?
				function() {
					var e = new MessageChannel;
					return e.port1.onmessage = d,
					function() {
						return e.port2.postMessage(0)
					}
				} () : void 0 === K ?
				function() {
					try {
						var e = n(206);
						return G = e.runOnLoop || e.runOnContext,
						u()
					} catch(e) {
						return s()
					}
				} () : s();
				var ee = Math.random().toString(36).substring(16),
				te = void 0,
				ne = 1,
				ae = 2,
				ie = new j,
				re = new j,
				oe = 0;
				return D.prototype._enumerate = function(e) {
					for (var t = 0; this._state === te && t < e.length; t++) this._eachEntry(e[t], t)
				},
				D.prototype._eachEntry = function(e, t) {
					var n = this._instanceConstructor,
					a = n.resolve;
					if (a === l) {
						var i = p(e);
						if (i === c && e._state !== te) this._settledAt(e._state, t, e._result);
						else if ("function" != typeof i) this._remaining--,
						this._result[t] = e;
						else if (n === I) {
							var r = new n(m);
							b(r, e, i),
							this._willSettleAt(r, t)
						} else this._willSettleAt(new n(function(t) {
							return t(e)
						}), t)
					} else this._willSettleAt(a(e), t)
				},
				D.prototype._settledAt = function(e, t, n) {
					var a = this.promise;
					a._state === te && (this._remaining--, e === ae ? P(a, n) : this._result[t] = n),
					0 === this._remaining && k(a, this._result)
				},
				D.prototype._willSettleAt = function(e, t) {
					var n = this;
					W(e, void 0,
					function(e) {
						return n._settledAt(ne, t, e)
					},
					function(e) {
						return n._settledAt(ae, t, e)
					})
				},
				I.all = H,
				I.race = A,
				I.resolve = l,
				I.reject = _,
				I._setScheduler = r,
				I._setAsap = o,
				I._asap = U,
				I.prototype = {
					constructor: I,
					then: c,
					catch: function(e) {
						return this.then(null, e)
					}
				},
				I.polyfill = Y,
				I.Promise = I,
				I
			})
		}).call(t, n(18), n(205))
	},
	function(e, t) {
		var n;
		n = function() {
			return this
		} ();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch(e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	},
	function(e, t) {},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		var i = n(208),
		r = a(i),
		o = n(228),
		u = a(o),
		s = n(114),
		d = a(s),
		c = n(64),
		l = a(c),
		m = n(65),
		f = a(m),
		h = n(116),
		p = a(h),
		g = n(120),
		v = a(g),
		w = n(12),
		b = a(w),
		y = n(252),
		M = a(y),
		k = n(259),
		P = a(k),
		W = n(260),
		x = a(W);
		n(271);
		var j = n(121),
		T = n(130),
		S = a(T),
		C = n(299),
		z = a(C),
		N = n(300),
		D = a(N),
		E = n(301),
		H = a(E),
		A = n(131),
		_ = a(A),
		O = n(856),
		X = n(857),
		I = a(X),
		Y = function(e) {
			function t(e) { (0, l.
			default)(this, t);
				var n = (0, p.
			default)(this, (t.__proto__ || (0, d.
			default)(t)).call(this, e));
				n.state = {
					user: null,
					issue: null,
					comments: [],
					localComments: [],
					comment: "",
					page: 1,
					pagerDirection: "last",
					cursor: null,
					previewHtml: "",
					isNoInit: !1,
					isIniting: !0,
					isCreating: !1,
					isLoading: !1,
					isLoadMore: !1,
					isLoadOver: !1,
					isIssueCreating: !1,
					isPopupVisible: !1,
					isInputFocused: !1,
					isPreview: !1,
					isOccurError: !1,
					errorMsg: ""
				},
				n.getCommentsV3 = function(e) {
					var t = n.options,
					a = t.clientID,
					i = t.clientSecret,
					r = t.perPage,
					o = n.state.page;
					return n.getIssue().then(function(e) {
						if (e) return j.axiosGithub.get(e.comments_url, {
							headers: {
								Accept: "application/vnd.github.v3.full+json"
							},
							auth: {
								username: a,
								password: i
							},
							params: {
								per_page: r,
								page: o
							}
						}).then(function(e) {
							var t = n.state,
							a = t.comments,
							i = t.issue,
							u = !1,
							s = a.concat(e.data);
							return (s.length >= i.comments || e.data.length < r) && (u = !0),
							n.setState({
								comments: s,
								isLoadOver: u,
								page: o + 1
							}),
							s
						})
					})
				},
				n.getRef = function(e) {
					n.publicBtnEL = e
				},
				n.reply = function(e) {
					return function() {
						var t = n.state.comment,
						a = e.body,
						i = a.split("\n");
						i.unshift("@" + e.user.login),
						i = i.map(function(e) {
							return "> " + e
						}),
						i.push(""),
						i.push(""),
						t && i.unshift(""),
						n.setState({
							comment: t + i.join("\n")
						},
						function() {
							P.
						default.update(n.commentEL),
							n.commentEL.focus()
						})
					}
				},
				n.handlePopup = function(e) {
					e.preventDefault(),
					e.stopPropagation();
					var t = !n.state.isPopupVisible,
					a = function e(t) { (0, j.hasClassInParent)(t.target, "gt-user", "gt-popup") || (window.document.removeEventListener("click", e), n.setState({
							isPopupVisible: !1
						}))
					};
					n.setState({
						isPopupVisible: t
					}),
					t ? window.document.addEventListener("click", a) : window.document.removeEventListener("click", a)
				},
				n.handleLogin = function() {
					var e = n.state.comment;
					window.localStorage.setItem(O.GT_COMMENT, encodeURIComponent(e)),
					window.location.href = n.loginLink
				},
				n.handleIssueCreate = function() {
					n.setState({
						isIssueCreating: !0
					}),
					n.createIssue().then(function(e) {
						return n.setState({
							isIssueCreating: !1,
							isOccurError: !1
						}),
						n.getComments(e)
					}).
					catch(function(e) {
						n.setState({
							isIssueCreating: !1,
							isOccurError: !0,
							errorMsg: (0, j.formatErrorMsg)(e)
						})
					}).then(function(e) {
						e && n.setState({
							isNoInit: !1
						})
					})
				},
				n.handleCommentCreate = function(e) {
					if (!n.state.comment.length) return e && e.preventDefault(),
					void n.commentEL.focus();
					n.setState(function(e) {
						if (!e.isCreating) return n.createComment().then(function() {
							return n.setState({
								isCreating: !1,
								isOccurError: !1
							})
						}).
						catch(function(e) {
							n.setState({
								isCreating: !1,
								isOccurError: !0,
								errorMsg: (0, j.formatErrorMsg)(e)
							})
						}),
						{
							isCreating: !0
						}
					})
				},
				n.handleCommentPreview = function(e) {
					n.setState({
						isPreview: !n.state.isPreview
					}),
					j.axiosGithub.post("/markdown", {
						text: n.state.comment
					},
					{
						headers: n.accessToken && {
							Authorization: "token " + n.accessToken
						}
					}).then(function(e) {
						n.setState({
							previewHtml: e.data
						})
					}).
					catch(function(e) {
						n.setState({
							isOccurError: !0,
							errorMsg: (0, j.formatErrorMsg)(e)
						})
					})
				},
				n.handleCommentLoad = function() {
					var e = n.state,
					t = e.issue;
					e.isLoadMore || (n.setState({
						isLoadMore: !0
					}), n.getComments(t).then(function() {
						return n.setState({
							isLoadMore: !1
						})
					}))
				},
				n.handleCommentChange = function(e) {
					return n.setState({
						comment: e.target.value
					})
				},
				n.handleLogout = function() {
					n.logout(),
					window.location.reload()
				},
				n.handleCommentFocus = function(e) {
					if (!n.options.distractionFreeMode) return e.preventDefault();
					n.setState({
						isInputFocused: !0
					})
				},
				n.handleCommentBlur = function(e) {
					if (!n.options.distractionFreeMode) return e.preventDefault();
					n.setState({
						isInputFocused: !1
					})
				},
				n.handleSort = function(e) {
					return function(t) {
						n.setState({
							pagerDirection: e
						})
					}
				},
				n.handleCommentKeyDown = function(e) {
					n.options.enableHotKey && (e.metaKey || e.ctrlKey) && 13 === e.keyCode && (n.publicBtnEL && n.publicBtnEL.focus(), n.handleCommentCreate())
				},
				n.options = (0, u.
			default)({},
				{
					id: window.location.href,
					number: -1,
					labels: ["Gitalk"],
					title: window.document.title,
					body: "",
					language: window.navigator.language || window.navigator.userLanguage,
					perPage: 10,
					pagerDirection: "last",
					createIssueManually: !1,
					distractionFreeMode: !1,
					proxy: "https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token",
					flipMoveOptions: {
						staggerDelayBy: 150,
						appearAnimation: "accordionVertical",
						enterAnimation: "accordionVertical",
						leaveAnimation: "accordionVertical"
					},
					enableHotKey: !0,
					url: window.location.href,
					defaultAuthor: {
						avatarUrl: "//avatars1.githubusercontent.com/u/29697133?s=50",
						login: "null",
						url: ""
					},
					updateCountCallback: null
				},
				e.options),
				n.state.pagerDirection = n.options.pagerDirection;
				var a = window.localStorage.getItem(O.GT_COMMENT);
				a && (n.state.comment = decodeURIComponent(a), window.localStorage.removeItem(O.GT_COMMENT));
				var i = (0, j.queryParse)();
				if (i.code) {
					var r = i.code;
					delete i.code;
					var o = "" + window.location.origin + window.location.pathname + (0, j.queryStringify)(i) + window.location.hash;
					history.replaceState(null, null, o),
					n.options = (0, u.
				default)({},
					n.options, {
						url: o,
						id: o
					},
					e.options),
					j.axiosJSON.post(n.options.proxy, {
						code: r,
						client_id: n.options.clientID,
						client_secret: n.options.clientSecret
					}).then(function(e) {
						e.data && e.data.access_token ? (n.accessToken = e.data.access_token, n.getInit().then(function() {
							return n.setState({
								isIniting: !1
							})
						}).
						catch(function(e) {
							console.log("err:", e),
							n.setState({
								isIniting: !1,
								isOccurError: !0,
								errorMsg: (0, j.formatErrorMsg)(e)
							})
						})) : (console.log("res.data err:", e.data), n.setState({
							isOccurError: !0,
							errorMsg: (0, j.formatErrorMsg)(new Error("no access token"))
						}))
					}).
					catch(function(e) {
						console.log("err: ", e),
						n.setState({
							isOccurError: !0,
							errorMsg: (0, j.formatErrorMsg)(e)
						})
					})
				} else n.getInit().then(function() {
					return n.setState({
						isIniting: !1
					})
				}).
				catch(function(e) {
					console.log("err:", e),
					n.setState({
						isIniting: !1,
						isOccurError: !0,
						errorMsg: (0, j.formatErrorMsg)(e)
					})
				});
				return n.i18n = (0, x.
			default)(n.options.language),
				n
			}
			return (0, v.
		default)(t, e),
			(0, f.
		default)(t, [{
				key: "componentDidUpdate",
				value: function() {
					this.commentEL && (0, P.
				default)(this.commentEL)
				}
			},
			{
				key: "getInit",
				value: function() {
					var e = this;
					return this.getUserInfo().then(function() {
						return e.getIssue()
					}).then(function(t) {
						return e.getComments(t)
					})
				}
			},
			{
				key: "getUserInfo",
				value: function() {
					var e = this;
					return this.accessToken ? j.axiosGithub.get("/user", {
						headers: {
							Authorization: "token " + this.accessToken
						}
					}).then(function(t) {
						e.setState({
							user: t.data
						})
					}).
					catch(function(t) {
						e.logout()
					}) : new r.
				default(function(e) {
						e()
					})
				}
			},
			{
				key: "getIssueById",
				value: function() {
					var e = this,
					t = this.options,
					n = t.owner,
					a = t.repo,
					i = t.number,
					o = t.clientID,
					u = t.clientSecret,
					s = "/repos/" + n + "/" + a + "/issues/" + i;
					return new r.
				default(function(t, n) {
						j.axiosGithub.get(s, {
							auth: {
								username: o,
								password: u
							},
							params: {
								t: Date.now()
							}
						}).then(function(n) {
							var a = null;
							n && n.data && n.data.number === i && (a = n.data, e.setState({
								issue: a,
								isNoInit: !1
							})),
							t(a)
						}).
						catch(function(e) {
							404 === e.response.status && t(null),
							n(e)
						})
					})
				}
			},
			{
				key: "getIssueByLabels",
				value: function() {
					var e = this,
					t = this.options,
					n = t.owner,
					a = t.repo,
					i = t.id,
					r = t.labels,
					o = t.clientID,
					u = t.clientSecret;
					return j.axiosGithub.get("/repos/" + n + "/" + a + "/issues", {
						auth: {
							username: o,
							password: u
						},
						params: {
							labels: r.concat(i).join(","),
							t: Date.now()
						}
					}).then(function(t) {
						var n = e.options.createIssueManually,
						a = !1,
						i = null;
						if (t && t.data && t.data.length) i = t.data[0];
						else {
							if (!n && e.isAdmin) return e.createIssue();
							a = !0
						}
						return e.setState({
							issue: i,
							isNoInit: a
						}),
						i
					})
				}
			},
			{
				key: "getIssue",
				value: function() {
					var e = this,
					t = this.options.number,
					n = this.state.issue;
					return n ? (this.setState({
						isNoInit: !1
					}), r.
				default.resolve(n)):
					"number" == typeof t && t > 0 ? this.getIssueById().then(function(t) {
						return t || e.getIssueByLabels()
					}) : this.getIssueByLabels()
				}
			},
			{
				key: "createIssue",
				value: function() {
					var e = this,
					t = this.options,
					n = t.owner,
					a = t.repo,
					i = t.title,
					r = t.body,
					o = t.id,
					u = t.labels,
					s = t.url;
					return j.axiosGithub.post("/repos/" + n + "/" + a + "/issues", {
						title: i,
						labels: u.concat(o),
						body: r || s + " \n\n " + ((0, j.getMetaContent)("description") || (0, j.getMetaContent)("description", "og:description") || "")
					},
					{
						headers: {
							Authorization: "token " + this.accessToken
						}
					}).then(function(t) {
						return e.setState({
							issue: t.data
						}),
						t.data
					})
				}
			},
			{
				key: "getComments",
				value: function(e) {
					if (e) return this.accessToken ? I.
				default.call(this, e) : this.getCommentsV3(e)
				}
			},
			{
				key: "createComment",
				value: function() {
					var e = this,
					t = this.state,
					n = t.comment,
					a = t.localComments,
					i = t.comments;
					return this.getIssue().then(function(t) {
						return j.axiosGithub.post(t.comments_url, {
							body: n
						},
						{
							headers: {
								Accept: "application/vnd.github.v3.full+json",
								Authorization: "token " + e.accessToken
							}
						})
					}).then(function(t) {
						e.setState({
							comment: "",
							comments: i.concat(t.data),
							localComments: a.concat(t.data)
						})
					})
				}
			},
			{
				key: "logout",
				value: function() {
					this.setState({
						user: null
					}),
					window.localStorage.removeItem(O.GT_ACCESS_TOKEN)
				}
			},
			{
				key: "like",
				value: function(e) {
					var t = this,
					n = this.options,
					a = n.owner,
					i = n.repo,
					r = this.state.user,
					o = this.state.comments;
					j.axiosGithub.post("/repos/" + a + "/" + i + "/issues/comments/" + e.id + "/reactions", {
						content: "heart"
					},
					{
						headers: {
							Authorization: "token " + this.accessToken,
							Accept: "application/vnd.github.squirrel-girl-preview"
						}
					}).then(function(n) {
						o = o.map(function(t) {
							return t.id === e.id ? (t.reactions ? ~t.reactions.nodes.findIndex(function(e) {
								return e.user.login === r.login
							}) || (t.reactions.totalCount += 1) : (t.reactions = {
								nodes: []
							},
							t.reactions.totalCount = 1), t.reactions.nodes.push(n.data), t.reactions.viewerHasReacted = !0, (0, u.
						default)({},
							t)) : t
						}),
						t.setState({
							comments: o
						})
					})
				}
			},
			{
				key: "unLike",
				value: function(e) {
					var t = this,
					n = this.state.user,
					a = this.state.comments;
					j.axiosGithub.post("/graphql",
					function(e) {
						return {
							operationName: "RemoveReaction",
							query: '\n          mutation RemoveReaction{\n            removeReaction (input:{\n              subjectId: "' + e + '",\n              content: HEART\n            }) {\n              reaction {\n                content\n              }\n            }\n          }\n        '
						}
					} (e.gId), {
						headers: {
							Authorization: "bearer " + this.accessToken
						}
					}).then(function(i) {
						i.data && (a = a.map(function(t) {
							if (t.id === e.id) {
								var a = t.reactions.nodes.findIndex(function(e) {
									return e.user.login === n.login
								});
								return~a && (t.reactions.totalCount -= 1, t.reactions.nodes.splice(a, 1)),
								t.reactions.viewerHasReacted = !1,
								(0, u.
							default)({},
								t)
							}
							return t
						}), t.setState({
							comments: a
						}))
					})
				}
			},
			{
				key: "initing",
				value: function() {
					return b.
				default.createElement("div", {
						className: "gt-initing"
					},
					b.
				default.createElement("i", {
						className: "gt-loader"
					}), b.
				default.createElement("p", {
						className: "gt-initing-text"
					},
					this.i18n.t("init")))
				}
			},
			{
				key: "noInit",
				value: function() {
					var e = this.state,
					t = e.user,
					n = e.isIssueCreating,
					a = this.options,
					i = a.owner,
					r = a.repo,
					o = a.admin;
					return b.
				default.createElement("div", {
						className: "gt-no-init",
						key: "no-init"
					},
					b.
				default.createElement("p", {
						dangerouslySetInnerHTML: {
							__html: this.i18n.t("no-found-related", {
								link: '<a href="https://github.com/' + i + "/" + r + '/issues">Issues</a>'
							})
						}
					}), b.
				default.createElement("p", null, this.i18n.t("please-contact", {
						user: [].concat(o).map(function(e) {
							return "@" + e
						}).join(" ")
					})), this.isAdmin ? b.
				default.createElement("p", null, b.
				default.createElement(z.
				default, {
						onClick: this.handleIssueCreate,
						isLoading: n,
						text: this.i18n.t("init-issue")
					})) : null, !t && b.
				default.createElement(z.
				default, {
						className: "gt-btn-login",
						onClick: this.handleLogin,
						text: this.i18n.t("login-with-github")
					}))
				}
			},
			{
				key: "header",
				value: function() {
					var e = this,
					t = this.state,
					n = t.user,
					a = t.comment,
					i = t.isCreating,
					r = t.previewHtml,
					o = t.isPreview;
					return b.
				default.createElement("div", {
						className: "gt-header",
						key: "header"
					},
					n ? b.
				default.createElement(S.
				default, {
						className: "gt-header-avatar",
						src: n.avatar_url,
						alt: n.login
					}) : b.
				default.createElement("a", {
						className: "gt-avatar-github",
						onClick: this.handleLogin
					},
					b.
				default.createElement(_.
				default, {
						className: "gt-ico-github",
						name: "github"
					})), b.
				default.createElement("div", {
						className: "gt-header-comment"
					},
					b.
				default.createElement("textarea", {
						ref: function(t) {
							e.commentEL = t
						},
						className: "gt-header-textarea " + (o ? "hide": ""),
						value: a,
						onChange: this.handleCommentChange,
						onFocus: this.handleCommentFocus,
						onBlur: this.handleCommentBlur,
						onKeyDown: this.handleCommentKeyDown,
						placeholder: this.i18n.t("leave-a-comment")
					}), b.
				default.createElement("div", {
						className: "gt-header-preview markdown-body " + (o ? "": "hide"),
						dangerouslySetInnerHTML: {
							__html: r
						}
					}), b.
				default.createElement("div", {
						className: "gt-header-controls"
					},
					b.
				default.createElement("a", {
						className: "gt-header-controls-tip",
						href: "https://guides.github.com/features/mastering-markdown/",
						target: "_blank",
						rel: "noopener noreferrer"
					},
					b.
				default.createElement(_.
				default, {
						className: "gt-ico-tip",
						name: "tip",
						text: this.i18n.t("support-markdown")
					})), n && b.
				default.createElement(z.
				default, {
						getRef: this.getRef,
						className: "gt-btn-public",
						onClick: this.handleCommentCreate,
						text: this.i18n.t("comment"),
						isLoading: i
					}), b.
				default.createElement(z.
				default, {
						className: "gt-btn-preview",
						onClick: this.handleCommentPreview,
						text: o ? this.i18n.t("edit") : this.i18n.t("preview")
					}), !n && b.
				default.createElement(z.
				default, {
						className: "gt-btn-login",
						onClick: this.handleLogin,
						text: this.i18n.t("login-with-github")
					}))))
				}
			},
			{
				key: "comments",
				value: function() {
					var e = this,
					t = this.state,
					n = t.user,
					a = t.comments,
					i = t.isLoadOver,
					r = t.isLoadMore,
					o = t.pagerDirection,
					u = this.options,
					s = u.language,
					d = u.flipMoveOptions,
					c = u.admin,
					l = a.concat([]);
					return "last" === o && this.accessToken && l.reverse(),
					b.
				default.createElement("div", {
						className: "gt-comments",
						key: "comments"
					},
					b.
				default.createElement(M.
				default, d, l.map(function(t) {
						return b.
					default.createElement(H.
					default, {
							comment: t,
							key: t.id,
							user: n,
							language: s,
							commentedText: e.i18n.t("commented"),
							admin: c,
							replyCallback: e.reply(t),
							likeCallback: t.reactions && t.reactions.viewerHasReacted ? e.unLike.bind(e, t) : e.like.bind(e, t)
						})
					})), !l.length && b.
				default.createElement("p", {
						className: "gt-comments-null"
					},
					this.i18n.t("first-comment-person")), !i && l.length ? b.
				default.createElement("div", {
						className: "gt-comments-controls"
					},
					b.
				default.createElement(z.
				default, {
						className: "gt-btn-loadmore",
						onClick: this.handleCommentLoad,
						isLoading: r,
						text: this.i18n.t("load-more")
					})) : null)
				}
			},
			{
				key: "meta",
				value: function() {
					var e = this.state,
					t = e.user,
					n = e.issue,
					a = e.isPopupVisible,
					i = e.pagerDirection,
					r = e.localComments,
					o = (n && n.comments) + r.length,
					u = "last" === i,
					s = this.options.updateCountCallback;
					if (s && "[object Function]" === {}.toString.call(s)) try {
						s(o)
					} catch(e) {
						console.log("An error occurred executing the updateCountCallback:", e)
					}
					return b.
				default.createElement("div", {
						className: "gt-meta",
						key: "meta"
					},
					b.
				default.createElement("span", {
						className: "gt-counts",
						dangerouslySetInnerHTML: {
							__html: this.i18n.t("counts", {
								counts: '<a class="gt-link gt-link-counts" href="' + (n && n.html_url) + '" target="_blank" rel="noopener noreferrer">' + o + "</a>",
								smart_count: o
							})
						}
					}), a && b.
				default.createElement("div", {
						className: "gt-popup"
					},
					t ? b.
				default.createElement(D.
				default, {
						className: "gt-action-sortasc" + (u ? "": " is--active"),
						onClick: this.handleSort("first"),
						text: this.i18n.t("sort-asc")
					}) : null, t ? b.
				default.createElement(D.
				default, {
						className: "gt-action-sortdesc" + (u ? " is--active": ""),
						onClick: this.handleSort("last"),
						text: this.i18n.t("sort-desc")
					}) : null, t ? b.
				default.createElement(D.
				default, {
						className: "gt-action-logout",
						onClick: this.handleLogout,
						text: this.i18n.t("logout")
					}) : b.
				default.createElement("a", {
						className: "gt-action gt-action-login",
						onClick: this.handleLogin
					},
					this.i18n.t("login-with-github")), b.
				default.createElement("div", {
						className: "gt-copyright"
					},
					b.
				default.createElement("a", {
						className: "gt-link gt-link-project",
						href: "https://github.com/gitalk/gitalk",
						target: "_blank",
						rel: "noopener noreferrer"
					},
					"Gitalk"), b.
				default.createElement("span", {
						className: "gt-version"
					},
					O.GT_VERSION))), b.
				default.createElement("div", {
						className: "gt-user"
					},
					t ? b.
				default.createElement("div", {
						className: a ? "gt-user-inner is--poping": "gt-user-inner",
						onClick: this.handlePopup
					},
					b.
				default.createElement("span", {
						className: "gt-user-name"
					},
					t.login), b.
				default.createElement(_.
				default, {
						className: "gt-ico-arrdown",
						name: "arrow_down"
					})) : b.
				default.createElement("div", {
						className: a ? "gt-user-inner is--poping": "gt-user-inner",
						onClick: this.handlePopup
					},
					b.
				default.createElement("span", {
						className: "gt-user-name"
					},
					this.i18n.t("anonymous")), b.
				default.createElement(_.
				default, {
						className: "gt-ico-arrdown",
						name: "arrow_down"
					}))))
				}
			},
			{
				key: "render",
				value: function() {
					var e = this.state,
					t = e.isIniting,
					n = e.isNoInit,
					a = e.isOccurError,
					i = e.errorMsg,
					r = e.isInputFocused;
					return b.
				default.createElement("div", {
						className: "gt-container" + (r ? " gt-input-focused": "")
					},
					t && this.initing(), !t && (n ? [] : [this.meta()]), a && b.
				default.createElement("div", {
						className: "gt-error"
					},
					i), !t && (n ? [this.noInit()] : [this.header(), this.comments()]))
				}
			},
			{
				key: "accessToken",
				get: function() {
					return this._accessToke || window.localStorage.getItem(O.GT_ACCESS_TOKEN)
				},
				set: function(e) {
					window.localStorage.setItem(O.GT_ACCESS_TOKEN, e),
					this._accessToken = e
				}
			},
			{
				key: "loginLink",
				get: function() {
					var e = this.options.clientID,
					t = {
						client_id: e,
						redirect_uri: window.location.href,
						scope: "public_repo"
					};
					return "https://github.com/login/oauth/authorize?" + (0, j.queryStringify)(t)
				}
			},
			{
				key: "isAdmin",
				get: function() {
					var e = this.options.admin,
					t = this.state.user;
					return t && ~ [].concat(e).map(function(e) {
						return e.toLowerCase()
					}).indexOf(t.login.toLowerCase())
				}
			}]),
			t
		} (w.Component);
		e.exports = Y
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(209),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(100),
		n(40),
		n(54),
		n(218),
		n(226),
		n(227),
		e.exports = n(7).Promise
	},
	function(e, t, n) {
		var a = n(69),
		i = n(70);
		e.exports = function(e) {
			return function(t, n) {
				var r, o, u = String(i(t)),
				s = a(n),
				d = u.length;
				return s < 0 || s >= d ? e ? "": void 0 : (r = u.charCodeAt(s), r < 55296 || r > 56319 || s + 1 === d || (o = u.charCodeAt(s + 1)) < 56320 || o > 57343 ? e ? u.charAt(s) : r: e ? u.slice(s, s + 2) : o - 56320 + (r - 55296 << 10) + 65536)
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(71),
		i = n(39),
		r = n(53),
		o = {};
		n(23)(o, n(9)("iterator"),
		function() {
			return this
		}),
		e.exports = function(e, t, n) {
			e.prototype = a(o, {
				next: i(1, n)
			}),
			r(e, t + " Iterator")
		}
	},
	function(e, t, n) {
		var a = n(16),
		i = n(14),
		r = n(42);
		e.exports = n(17) ? Object.defineProperties: function(e, t) {
			i(e);
			for (var n, o = r(t), u = o.length, s = 0; u > s;) a.f(e, n = o[s++], t[n]);
			return e
		}
	},
	function(e, t, n) {
		var a = n(32),
		i = n(72),
		r = n(214);
		e.exports = function(e) {
			return function(t, n, o) {
				var u, s = a(t),
				d = i(s.length),
				c = r(o, d);
				if (e && n != n) {
					for (; d > c;) if ((u = s[c++]) != u) return ! 0
				} else for (; d > c; c++) if ((e || c in s) && s[c] === n) return e || c || 0;
				return ! e && -1
			}
		}
	},
	function(e, t, n) {
		var a = n(69),
		i = Math.max,
		r = Math.min;
		e.exports = function(e, t) {
			return e = a(e),
			e < 0 ? i(e + t, 0) : r(e, t)
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(216),
		i = n(217),
		r = n(31),
		o = n(32);
		e.exports = n(101)(Array, "Array",
		function(e, t) {
			this._t = o(e),
			this._i = 0,
			this._k = t
		},
		function() {
			var e = this._t,
			t = this._k,
			n = this._i++;
			return ! e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
		},
		"values"),
		r.Arguments = r.Array,
		a("keys"),
		a("values"),
		a("entries")
	},
	function(e, t) {
		e.exports = function() {}
	},
	function(e, t) {
		e.exports = function(e, t) {
			return {
				value: t,
				done: !!e
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a, i, r, o, u = n(41),
		s = n(8),
		d = n(29),
		c = n(76),
		l = n(11),
		m = n(20),
		f = n(51),
		h = n(219),
		p = n(220),
		g = n(109),
		v = n(110).set,
		w = n(222)(),
		b = n(78),
		y = n(111),
		M = n(223),
		k = n(112),
		P = s.TypeError,
		W = s.process,
		x = W && W.versions,
		j = x && x.v8 || "",
		T = s.Promise,
		S = "process" == c(W),
		C = function() {},
		z = i = b.f,
		N = !!
		function() {
			try {
				var e = T.resolve(1),
				t = (e.constructor = {})[n(9)("species")] = function(e) {
					e(C, C)
				};
				return (S || "function" == typeof PromiseRejectionEvent) && e.then(C) instanceof t && 0 !== j.indexOf("6.6") && -1 === M.indexOf("Chrome/66")
			} catch(e) {}
		} (),
		D = function(e) {
			var t;
			return ! (!m(e) || "function" != typeof(t = e.then)) && t
		},
		E = function(e, t) {
			if (!e._n) {
				e._n = !0;
				var n = e._c;
				w(function() {
					for (var a = e._v,
					i = 1 == e._s,
					r = 0; n.length > r;) !
					function(t) {
						var n, r, o, u = i ? t.ok: t.fail,
						s = t.resolve,
						d = t.reject,
						c = t.domain;
						try {
							u ? (i || (2 == e._h && _(e), e._h = 1), !0 === u ? n = a: (c && c.enter(), n = u(a), c && (c.exit(), o = !0)), n === t.promise ? d(P("Promise-chain cycle")) : (r = D(n)) ? r.call(n, s, d) : s(n)) : d(a)
						} catch(e) {
							c && !o && c.exit(),
							d(e)
						}
					} (n[r++]);
					e._c = [],
					e._n = !1,
					t && !e._h && H(e)
				})
			}
		},
		H = function(e) {
			v.call(s,
			function() {
				var t, n, a, i = e._v,
				r = A(e);
				if (r && (t = y(function() {
					S ? W.emit("unhandledRejection", i, e) : (n = s.onunhandledrejection) ? n({
						promise: e,
						reason: i
					}) : (a = s.console) && a.error && a.error("Unhandled promise rejection", i)
				}), e._h = S || A(e) ? 2 : 1), e._a = void 0, r && t.e) throw t.v
			})
		},
		A = function(e) {
			return 1 !== e._h && 0 === (e._a || e._c).length
		},
		_ = function(e) {
			v.call(s,
			function() {
				var t;
				S ? W.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({
					promise: e,
					reason: e._v
				})
			})
		},
		O = function(e) {
			var t = this;
			t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), E(t, !0))
		},
		X = function(e) {
			var t, n = this;
			if (!n._d) {
				n._d = !0,
				n = n._w || n;
				try {
					if (n === e) throw P("Promise can't be resolved itself"); (t = D(e)) ? w(function() {
						var a = {
							_w: n,
							_d: !1
						};
						try {
							t.call(e, d(X, a, 1), d(O, a, 1))
						} catch(e) {
							O.call(a, e)
						}
					}) : (n._v = e, n._s = 1, E(n, !1))
				} catch(e) {
					O.call({
						_w: n,
						_d: !1
					},
					e)
				}
			}
		};
		N || (T = function(e) {
			h(this, T, "Promise", "_h"),
			f(e),
			a.call(this);
			try {
				e(d(X, this, 1), d(O, this, 1))
			} catch(e) {
				O.call(this, e)
			}
		},
		a = function(e) {
			this._c = [],
			this._a = void 0,
			this._s = 0,
			this._d = !1,
			this._v = void 0,
			this._h = 0,
			this._n = !1
		},
		a.prototype = n(224)(T.prototype, {
			then: function(e, t) {
				var n = z(g(this, T));
				return n.ok = "function" != typeof e || e,
				n.fail = "function" == typeof t && t,
				n.domain = S ? W.domain: void 0,
				this._c.push(n),
				this._a && this._a.push(n),
				this._s && E(this, !1),
				n.promise
			},
			catch: function(e) {
				return this.then(void 0, e)
			}
		}), r = function() {
			var e = new a;
			this.promise = e,
			this.resolve = d(X, e, 1),
			this.reject = d(O, e, 1)
		},
		b.f = z = function(e) {
			return e === T || e === o ? new r(e) : i(e)
		}),
		l(l.G + l.W + l.F * !N, {
			Promise: T
		}),
		n(53)(T, "Promise"),
		n(225)("Promise"),
		o = n(7).Promise,
		l(l.S + l.F * !N, "Promise", {
			reject: function(e) {
				var t = z(this);
				return (0, t.reject)(e),
				t.promise
			}
		}),
		l(l.S + l.F * (u || !N), "Promise", {
			resolve: function(e) {
				return k(u && this === o ? T: this, e)
			}
		}),
		l(l.S + l.F * !(N && n(113)(function(e) {
			T.all(e).
			catch(C)
		})), "Promise", {
			all: function(e) {
				var t = this,
				n = z(t),
				a = n.resolve,
				i = n.reject,
				r = y(function() {
					var n = [],
					r = 0,
					o = 1;
					p(e, !1,
					function(e) {
						var u = r++,
						s = !1;
						n.push(void 0),
						o++,
						t.resolve(e).then(function(e) {
							s || (s = !0, n[u] = e, --o || a(n))
						},
						i)
					}),
					--o || a(n)
				});
				return r.e && i(r.v),
				n.promise
			},
			race: function(e) {
				var t = this,
				n = z(t),
				a = n.reject,
				i = y(function() {
					p(e, !1,
					function(e) {
						t.resolve(e).then(n.resolve, a)
					})
				});
				return i.e && a(i.v),
				n.promise
			}
		})
	},
	function(e, t) {
		e.exports = function(e, t, n, a) {
			if (! (e instanceof t) || void 0 !== a && a in e) throw TypeError(n + ": incorrect invocation!");
			return e
		}
	},
	function(e, t, n) {
		var a = n(29),
		i = n(107),
		r = n(108),
		o = n(14),
		u = n(72),
		s = n(77),
		d = {},
		c = {},
		t = e.exports = function(e, t, n, l, m) {
			var f, h, p, g, v = m ?
			function() {
				return e
			}: s(e),
			w = a(n, l, t ? 2 : 1),
			b = 0;
			if ("function" != typeof v) throw TypeError(e + " is not iterable!");
			if (r(v)) {
				for (f = u(e.length); f > b; b++) if ((g = t ? w(o(h = e[b])[0], h[1]) : w(e[b])) === d || g === c) return g
			} else for (p = v.call(e); ! (h = p.next()).done;) if ((g = i(p, w, h.value, t)) === d || g === c) return g
		};
		t.BREAK = d,
		t.RETURN = c
	},
	function(e, t) {
		e.exports = function(e, t, n) {
			var a = void 0 === n;
			switch (t.length) {
			case 0:
				return a ? e() : e.call(n);
			case 1:
				return a ? e(t[0]) : e.call(n, t[0]);
			case 2:
				return a ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
			case 3:
				return a ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
			case 4:
				return a ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
			}
			return e.apply(n, t)
		}
	},
	function(e, t, n) {
		var a = n(8),
		i = n(110).set,
		r = a.MutationObserver || a.WebKitMutationObserver,
		o = a.process,
		u = a.Promise,
		s = "process" == n(43)(o);
		e.exports = function() {
			var e, t, n, d = function() {
				var a, i;
				for (s && (a = o.domain) && a.exit(); e;) {
					i = e.fn,
					e = e.next;
					try {
						i()
					} catch(a) {
						throw e ? n() : t = void 0,
						a
					}
				}
				t = void 0,
				a && a.enter()
			};
			if (s) n = function() {
				o.nextTick(d)
			};
			else if (!r || a.navigator && a.navigator.standalone) if (u && u.resolve) {
				var c = u.resolve(void 0);
				n = function() {
					c.then(d)
				}
			} else n = function() {
				i.call(a, d)
			};
			else {
				var l = !0,
				m = document.createTextNode("");
				new r(d).observe(m, {
					characterData: !0
				}),
				n = function() {
					m.data = l = !l
				}
			}
			return function(a) {
				var i = {
					fn: a,
					next: void 0
				};
				t && (t.next = i),
				e || (e = i, n()),
				t = i
			}
		}
	},
	function(e, t, n) {
		var a = n(8),
		i = a.navigator;
		e.exports = i && i.userAgent || ""
	},
	function(e, t, n) {
		var a = n(23);
		e.exports = function(e, t, n) {
			for (var i in t) n && e[i] ? e[i] = t[i] : a(e, i, t[i]);
			return e
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(8),
		i = n(7),
		r = n(16),
		o = n(17),
		u = n(9)("species");
		e.exports = function(e) {
			var t = "function" == typeof i[e] ? i[e] : a[e];
			o && t && !t[u] && r.f(t, u, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(11),
		i = n(7),
		r = n(8),
		o = n(109),
		u = n(112);
		a(a.P + a.R, "Promise", {
			finally: function(e) {
				var t = o(this, i.Promise || r.Promise),
				n = "function" == typeof e;
				return this.then(n ?
				function(n) {
					return u(t, e()).then(function() {
						return n
					})
				}: e, n ?
				function(n) {
					return u(t, e()).then(function() {
						throw n
					})
				}: e)
			}
		})
	},
	function(e, t, n) {
		"use strict";
		var a = n(11),
		i = n(78),
		r = n(111);
		a(a.S, "Promise", {
			try: function(e) {
				var t = i.f(this),
				n = r(e);
				return (n.e ? t.reject: t.resolve)(n.v),
				t.promise
			}
		})
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(229),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(230),
		e.exports = n(7).Object.assign
	},
	function(e, t, n) {
		var a = n(11);
		a(a.S + a.F, "Object", {
			assign: n(231)
		})
	},
	function(e, t, n) {
		"use strict";
		var a = n(17),
		i = n(42),
		r = n(79),
		o = n(55),
		u = n(33),
		s = n(104),
		d = Object.assign;
		e.exports = !d || n(30)(function() {
			var e = {},
			t = {},
			n = Symbol(),
			a = "abcdefghijklmnopqrst";
			return e[n] = 7,
			a.split("").forEach(function(e) {
				t[e] = e
			}),
			7 != d({},
			e)[n] || Object.keys(d({},
			t)).join("") != a
		}) ?
		function(e, t) {
			for (var n = u(e), d = arguments.length, c = 1, l = r.f, m = o.f; d > c;) for (var f, h = s(arguments[c++]), p = l ? i(h).concat(l(h)) : i(h), g = p.length, v = 0; g > v;) f = p[v++],
			a && !m.call(h, f) || (n[f] = h[f]);
			return n
		}: d
	},
	function(e, t, n) {
		n(233),
		e.exports = n(7).Object.getPrototypeOf
	},
	function(e, t, n) {
		var a = n(33),
		i = n(106);
		n(115)("getPrototypeOf",
		function() {
			return function(e) {
				return i(a(e))
			}
		})
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(235),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(40),
		n(54),
		e.exports = n(80).f("iterator")
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(237),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(238),
		n(100),
		n(243),
		n(244),
		e.exports = n(7).Symbol
	},
	function(e, t, n) {
		"use strict";
		var a = n(8),
		i = n(24),
		r = n(17),
		o = n(11),
		u = n(102),
		s = n(239).KEY,
		d = n(30),
		c = n(74),
		l = n(53),
		m = n(52),
		f = n(9),
		h = n(80),
		p = n(81),
		g = n(240),
		v = n(241),
		w = n(14),
		b = n(20),
		y = n(33),
		M = n(32),
		k = n(67),
		P = n(39),
		W = n(71),
		x = n(242),
		j = n(119),
		T = n(79),
		S = n(16),
		C = n(42),
		z = j.f,
		N = S.f,
		D = x.f,
		E = a.Symbol,
		H = a.JSON,
		A = H && H.stringify,
		_ = f("_hidden"),
		O = f("toPrimitive"),
		X = {}.propertyIsEnumerable,
		I = c("symbol-registry"),
		Y = c("symbols"),
		F = c("op-symbols"),
		L = Object.prototype,
		q = "function" == typeof E && !!T.f,
		G = a.QObject,
		R = !G || !G.prototype || !G.prototype.findChild,
		U = r && d(function() {
			return 7 != W(N({},
			"a", {
				get: function() {
					return N(this, "a", {
						value: 7
					}).a
				}
			})).a
		}) ?
		function(e, t, n) {
			var a = z(L, t);
			a && delete L[t],
			N(e, t, n),
			a && e !== L && N(L, t, a)
		}: N,
		K = function(e) {
			var t = Y[e] = W(E.prototype);
			return t._k = e,
			t
		},
		J = q && "symbol" == typeof E.iterator ?
		function(e) {
			return "symbol" == typeof e
		}: function(e) {
			return e instanceof E
		},
		B = function(e, t, n) {
			return e === L && B(F, t, n),
			w(e),
			t = k(t, !0),
			w(n),
			i(Y, t) ? (n.enumerable ? (i(e, _) && e[_][t] && (e[_][t] = !1), n = W(n, {
				enumerable: P(0, !1)
			})) : (i(e, _) || N(e, _, P(1, {})), e[_][t] = !0), U(e, t, n)) : N(e, t, n)
		},
		$ = function(e, t) {
			w(e);
			for (var n, a = g(t = M(t)), i = 0, r = a.length; r > i;) B(e, n = a[i++], t[n]);
			return e
		},
		V = function(e, t) {
			return void 0 === t ? W(e) : $(W(e), t)
		},
		Q = function(e) {
			var t = X.call(this, e = k(e, !0));
			return ! (this === L && i(Y, e) && !i(F, e)) && (!(t || !i(this, e) || !i(Y, e) || i(this, _) && this[_][e]) || t)
		},
		Z = function(e, t) {
			if (e = M(e), t = k(t, !0), e !== L || !i(Y, t) || i(F, t)) {
				var n = z(e, t);
				return ! n || !i(Y, t) || i(e, _) && e[_][t] || (n.enumerable = !0),
				n
			}
		},
		ee = function(e) {
			for (var t, n = D(M(e)), a = [], r = 0; n.length > r;) i(Y, t = n[r++]) || t == _ || t == s || a.push(t);
			return a
		},
		te = function(e) {
			for (var t, n = e === L,
			a = D(n ? F: M(e)), r = [], o = 0; a.length > o;) ! i(Y, t = a[o++]) || n && !i(L, t) || r.push(Y[t]);
			return r
		};
		q || (E = function() {
			if (this instanceof E) throw TypeError("Symbol is not a constructor!");
			var e = m(arguments.length > 0 ? arguments[0] : void 0),
			t = function(n) {
				this === L && t.call(F, n),
				i(this, _) && i(this[_], e) && (this[_][e] = !1),
				U(this, e, P(1, n))
			};
			return r && R && U(L, e, {
				configurable: !0,
				set: t
			}),
			K(e)
		},
		u(E.prototype, "toString",
		function() {
			return this._k
		}), j.f = Z, S.f = B, n(118).f = x.f = ee, n(55).f = Q, T.f = te, r && !n(41) && u(L, "propertyIsEnumerable", Q, !0), h.f = function(e) {
			return K(f(e))
		}),
		o(o.G + o.W + o.F * !q, {
			Symbol: E
		});
		for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ae = 0; ne.length > ae;) f(ne[ae++]);
		for (var ie = C(f.store), re = 0; ie.length > re;) p(ie[re++]);
		o(o.S + o.F * !q, "Symbol", {
			for: function(e) {
				return i(I, e += "") ? I[e] : I[e] = E(e)
			},
			keyFor: function(e) {
				if (!J(e)) throw TypeError(e + " is not a symbol!");
				for (var t in I) if (I[t] === e) return t
			},
			useSetter: function() {
				R = !0
			},
			useSimple: function() {
				R = !1
			}
		}),
		o(o.S + o.F * !q, "Object", {
			create: V,
			defineProperty: B,
			defineProperties: $,
			getOwnPropertyDescriptor: Z,
			getOwnPropertyNames: ee,
			getOwnPropertySymbols: te
		});
		var oe = d(function() {
			T.f(1)
		});
		o(o.S + o.F * oe, "Object", {
			getOwnPropertySymbols: function(e) {
				return T.f(y(e))
			}
		}),
		H && o(o.S + o.F * (!q || d(function() {
			var e = E();
			return "[null]" != A([e]) || "{}" != A({
				a: e
			}) || "{}" != A(Object(e))
		})), "JSON", {
			stringify: function(e) {
				for (var t, n, a = [e], i = 1; arguments.length > i;) a.push(arguments[i++]);
				if (n = t = a[1], (b(t) || void 0 !== e) && !J(e)) return v(t) || (t = function(e, t) {
					if ("function" == typeof n && (t = n.call(this, e, t)), !J(t)) return t
				}),
				a[1] = t,
				A.apply(H, a)
			}
		}),
		E.prototype[O] || n(23)(E.prototype, O, E.prototype.valueOf),
		l(E, "Symbol"),
		l(Math, "Math", !0),
		l(a.JSON, "JSON", !0)
	},
	function(e, t, n) {
		var a = n(52)("meta"),
		i = n(20),
		r = n(24),
		o = n(16).f,
		u = 0,
		s = Object.isExtensible ||
		function() {
			return ! 0
		},
		d = !n(30)(function() {
			return s(Object.preventExtensions({}))
		}),
		c = function(e) {
			o(e, a, {
				value: {
					i: "O" + ++u,
					w: {}
				}
			})
		},
		l = function(e, t) {
			if (!i(e)) return "symbol" == typeof e ? e: ("string" == typeof e ? "S": "P") + e;
			if (!r(e, a)) {
				if (!s(e)) return "F";
				if (!t) return "E";
				c(e)
			}
			return e[a].i
		},
		m = function(e, t) {
			if (!r(e, a)) {
				if (!s(e)) return ! 0;
				if (!t) return ! 1;
				c(e)
			}
			return e[a].w
		},
		f = function(e) {
			return d && h.NEED && s(e) && !r(e, a) && c(e),
			e
		},
		h = e.exports = {
			KEY: a,
			NEED: !1,
			fastKey: l,
			getWeak: m,
			onFreeze: f
		}
	},
	function(e, t, n) {
		var a = n(42),
		i = n(79),
		r = n(55);
		e.exports = function(e) {
			var t = a(e),
			n = i.f;
			if (n) for (var o, u = n(e), s = r.f, d = 0; u.length > d;) s.call(e, o = u[d++]) && t.push(o);
			return t
		}
	},
	function(e, t, n) {
		var a = n(43);
		e.exports = Array.isArray ||
		function(e) {
			return "Array" == a(e)
		}
	},
	function(e, t, n) {
		var a = n(32),
		i = n(118).f,
		r = {}.toString,
		o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
		u = function(e) {
			try {
				return i(e)
			} catch(e) {
				return o.slice()
			}
		};
		e.exports.f = function(e) {
			return o && "[object Window]" == r.call(e) ? u(e) : i(a(e))
		}
	},
	function(e, t, n) {
		n(81)("asyncIterator")
	},
	function(e, t, n) {
		n(81)("observable")
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(246),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(247),
		e.exports = n(7).Object.setPrototypeOf
	},
	function(e, t, n) {
		var a = n(11);
		a(a.S, "Object", {
			setPrototypeOf: n(248).set
		})
	},
	function(e, t, n) {
		var a = n(20),
		i = n(14),
		r = function(e, t) {
			if (i(e), !a(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
		};
		e.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ?
			function(e, t, a) {
				try {
					a = n(29)(Function.call, n(119).f(Object.prototype, "__proto__").set, 2),
					a(e, []),
					t = !(e instanceof Array)
				} catch(e) {
					t = !0
				}
				return function(e, n) {
					return r(e, n),
					t ? e.__proto__ = n: a(e, n),
					e
				}
			} ({},
			!1) : void 0),
			check: r
		}
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(250),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(251);
		var a = n(7).Object;
		e.exports = function(e, t) {
			return a.create(e, t)
		}
	},
	function(e, t, n) {
		var a = n(11);
		a(a.S, "Object", {
			create: n(71)
		})
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = n(253),
		i = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a);
		t.
	default = i.
	default,
		e.exports = t.
	default
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		function i(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function r(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" != typeof t && "function" != typeof t ? e: t
		}
		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		function u(e) {
			return e.key || ""
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = function() {
			function e(e, t) {
				var n = [],
				a = !0,
				i = !1,
				r = void 0;
				try {
					for (var o, u = e[Symbol.iterator](); ! (a = (o = u.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0);
				} catch(e) {
					i = !0,
					r = e
				} finally {
					try { ! a && u.
						return && u.
						return ()
					} finally {
						if (i) throw r
					}
				}
				return n
			}
			return function(t, n) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return e(t, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		} (),
		d = Object.assign ||
		function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		},
		c = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1,
					a.configurable = !0,
					"value" in a && (a.writable = !0),
					Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n),
				a && e(t, a),
				t
			}
		} (),
		l = n(12),
		m = a(l);
		n(254);
		var f = n(255),
		h = a(f),
		p = n(258),
		g = n(82),
		v = (0, p.whichTransitionEvent)(),
		w = !v,
		b = function(e) {
			function t() {
				var e, n, a, o;
				i(this, t);
				for (var c = arguments.length,
				m = Array(c), f = 0; f < c; f++) m[f] = arguments[f];
				return n = a = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(m))),
				a.state = {
					children: l.Children.toArray(a.props.children).map(function(e) {
						return d({},
						e, {
							element: e,
							appearing: !0
						})
					})
				},
				a.childrenData = {},
				a.parentData = {
					domNode: null,
					boundingBox: null
				},
				a.heightPlaceholderData = {
					domNode: null
				},
				a.remainingAnimations = 0,
				a.childrenToAnimate = [],
				a.runAnimation = function() {
					a.state.children.filter(a.doesChildNeedToBeAnimated).forEach(function(e, t) {
						a.remainingAnimations += 1,
						a.childrenToAnimate.push(u(e)),
						a.animateChild(e, t)
					}),
					"function" == typeof a.props.onStartAll && a.callChildrenHook(a.props.onStartAll)
				},
				a.doesChildNeedToBeAnimated = function(e) {
					if (!u(e)) return ! 1;
					var t = a.getChildData(u(e)),
					n = t.domNode,
					i = t.boundingBox,
					r = a.parentData.boundingBox;
					if (!n) return ! 1;
					var o = a.props,
					d = o.appearAnimation,
					c = o.enterAnimation,
					l = o.leaveAnimation,
					m = o.getPosition,
					f = e.appearing && d,
					h = e.entering && c,
					g = e.leaving && l;
					if (f || h || g) return ! 0;
					var v = (0, p.getPositionDelta)({
						childDomNode: n,
						childBoundingBox: i,
						parentBoundingBox: r,
						getPosition: m
					}),
					w = s(v, 2),
					b = w[0],
					y = w[1];
					return 0 !== b || 0 !== y
				},
				o = n,
				r(a, o)
			}
			return o(t, e),
			c(t, [{
				key: "componentDidMount",
				value: function() {
					this.props.appearAnimation && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation())
				}
			},
			{
				key: "componentWillReceiveProps",
				value: function(e) {
					this.updateBoundingBoxCaches();
					var t = l.Children.toArray(e.children);
					this.setState({
						children: this.isAnimationDisabled(e) ? t.map(function(e) {
							return d({},
							e, {
								element: e
							})
						}) : this.calculateNextSetOfChildren(t)
					})
				}
			},
			{
				key: "componentDidUpdate",
				value: function(e) {
					var t = l.Children.toArray(this.props.children).map(function(e) {
						return e.key
					}),
					n = l.Children.toArray(e.children).map(function(e) {
						return e.key
					}); ! (0, g.arraysEqual)(t, n) && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation())
				}
			},
			{
				key: "calculateNextSetOfChildren",
				value: function(e) {
					var t = this,
					n = e.map(function(e) {
						var n = t.findChildByKey(e.key || ""),
						a = !n || n.leaving;
						return d({},
						e, {
							element: e,
							entering: a
						})
					}),
					a = 0;
					return this.state.children.forEach(function(i, r) {
						if (!e.find(function(e) {
							return e.key === u(i)
						}) && t.props.leaveAnimation) {
							var o = d({},
							i, {
								leaving: !0
							}),
							s = r + a;
							n.splice(s, 0, o),
							a += 1
						}
					}),
					n
				}
			},
			{
				key: "prepForAnimation",
				value: function() {
					var e = this,
					t = this.props,
					n = t.leaveAnimation,
					a = t.maintainContainerHeight,
					i = t.getPosition;
					if (n) {
						this.state.children.filter(function(e) {
							return e.leaving
						}).forEach(function(t) {
							var n = e.getChildData(u(t));
							n.boundingBox && (0, p.removeNodeFromDOMFlow)(n, e.props.verticalAlignment)
						}),
						a && this.heightPlaceholderData.domNode && (0, p.updateHeightPlaceholder)({
							domNode: this.heightPlaceholderData.domNode,
							parentData: this.parentData,
							getPosition: i
						})
					}
					this.state.children.forEach(function(t) {
						var n = e.getChildData(u(t)),
						a = n.domNode;
						a && (t.entering || t.leaving || (0, p.applyStylesToDOMNode)({
							domNode: a,
							styles: {
								transition: ""
							}
						}))
					})
				}
			},
			{
				key: "animateChild",
				value: function(e, t) {
					var n = this,
					a = this.getChildData(u(e)),
					i = a.domNode;
					i && ((0, p.applyStylesToDOMNode)({
						domNode: i,
						styles: this.computeInitialStyles(e)
					}), this.props.onStart && this.props.onStart(e, i), requestAnimationFrame(function() {
						requestAnimationFrame(function() {
							var a = {
								transition: (0, p.createTransitionString)(t, n.props),
								transform: "",
								opacity: ""
							};
							e.appearing && n.props.appearAnimation ? a = d({},
							a, n.props.appearAnimation.to) : e.entering && n.props.enterAnimation ? a = d({},
							a, n.props.enterAnimation.to) : e.leaving && n.props.leaveAnimation && (a = d({},
							a, n.props.leaveAnimation.to)),
							(0, p.applyStylesToDOMNode)({
								domNode: i,
								styles: a
							})
						})
					}), this.bindTransitionEndHandler(e))
				}
			},
			{
				key: "bindTransitionEndHandler",
				value: function(e) {
					var t = this,
					n = this.getChildData(u(e)),
					a = n.domNode;
					if (a) {
						var i = function n(i) {
							i.target === a && (a.style.transition = "", t.triggerFinishHooks(e, a), a.removeEventListener(v, n), e.leaving && t.removeChildData(u(e)))
						};
						a.addEventListener(v, i)
					}
				}
			},
			{
				key: "triggerFinishHooks",
				value: function(e, t) {
					var n = this;
					if (this.props.onFinish && this.props.onFinish(e, t), this.remainingAnimations -= 1, 0 === this.remainingAnimations) {
						var a = this.state.children.filter(function(e) {
							return ! e.leaving
						}).map(function(e) {
							return d({},
							e, {
								appearing: !1,
								entering: !1
							})
						});
						this.setState({
							children: a
						},
						function() {
							"function" == typeof n.props.onFinishAll && n.callChildrenHook(n.props.onFinishAll),
							n.childrenToAnimate = []
						}),
						this.heightPlaceholderData.domNode && (this.heightPlaceholderData.domNode.style.height = "0")
					}
				}
			},
			{
				key: "callChildrenHook",
				value: function(e) {
					var t = this,
					n = [],
					a = [];
					this.childrenToAnimate.forEach(function(e) {
						var i = t.findChildByKey(e);
						i && (n.push(i), t.hasChildData(e) && a.push(t.getChildData(e).domNode))
					}),
					e(n, a)
				}
			},
			{
				key: "updateBoundingBoxCaches",
				value: function() {
					var e = this,
					t = this.parentData.domNode;
					t && (this.parentData.boundingBox = this.props.getPosition(t), this.state.children.forEach(function(n) {
						var a = u(n);
						if (a && e.hasChildData(a)) {
							var i = e.getChildData(a);
							i.domNode && n && e.setChildData(a, {
								boundingBox: (0, p.getRelativeBoundingBox)({
									childDomNode: i.domNode,
									parentDomNode: t,
									getPosition: e.props.getPosition
								})
							})
						}
					}))
				}
			},
			{
				key: "computeInitialStyles",
				value: function(e) {
					if (e.appearing) return this.props.appearAnimation ? this.props.appearAnimation.from: {};
					if (e.entering) return this.props.enterAnimation ? d({
						position: "",
						top: "",
						left: "",
						right: "",
						bottom: ""
					},
					this.props.enterAnimation.from) : {};
					if (e.leaving) return this.props.leaveAnimation ? this.props.leaveAnimation.from: {};
					var t = this.getChildData(u(e)),
					n = t.domNode,
					a = t.boundingBox,
					i = this.parentData.boundingBox;
					if (!n) return {};
					var r = (0, p.getPositionDelta)({
						childDomNode: n,
						childBoundingBox: a,
						parentBoundingBox: i,
						getPosition: this.props.getPosition
					}),
					o = s(r, 2);
					return {
						transform: "translate(" + o[0] + "px, " + o[1] + "px)"
					}
				}
			},
			{
				key: "isAnimationDisabled",
				value: function(e) {
					return w || e.disableAllAnimations || 0 === e.duration && 0 === e.delay && 0 === e.staggerDurationBy && 0 === e.staggerDelayBy
				}
			},
			{
				key: "findChildByKey",
				value: function(e) {
					return this.state.children.find(function(t) {
						return u(t) === e
					})
				}
			},
			{
				key: "hasChildData",
				value: function(e) {
					return Object.prototype.hasOwnProperty.call(this.childrenData, e)
				}
			},
			{
				key: "getChildData",
				value: function(e) {
					return this.hasChildData(e) ? this.childrenData[e] : {}
				}
			},
			{
				key: "setChildData",
				value: function(e, t) {
					this.childrenData[e] = d({},
					this.getChildData(e), t)
				}
			},
			{
				key: "removeChildData",
				value: function(e) {
					delete this.childrenData[e]
				}
			},
			{
				key: "createHeightPlaceholder",
				value: function() {
					var e = this,
					t = this.props.typeName,
					n = "ul" === t || "ol" === t,
					a = n ? "li": "div";
					return m.
				default.createElement(a, {
						key: "height-placeholder",
						ref: function(t) {
							e.heightPlaceholderData.domNode = t
						},
						style: {
							visibility: "hidden",
							height: 0
						}
					})
				}
			},
			{
				key: "childrenWithRefs",
				value: function() {
					var e = this;
					return this.state.children.map(function(t) {
						return m.
					default.cloneElement(t.element, {
							ref: function(n) {
								if (n) {
									var a = (0, p.getNativeNode)(n);
									e.setChildData(u(t), {
										domNode: a
									})
								}
							}
						})
					})
				}
			},
			{
				key: "render",
				value: function() {
					var e = this,
					t = this.props,
					n = t.typeName,
					a = t.delegated,
					i = t.leaveAnimation,
					r = t.maintainContainerHeight,
					o = d({},
					a, {
						ref: function(t) {
							e.parentData.domNode = t
						}
					}),
					u = this.childrenWithRefs();
					return i && r && u.push(this.createHeightPlaceholder()),
					m.
				default.createElement(n, o, u)
				}
			}]),
			t
		} (l.Component);
		t.
	default = (0, h.
	default)(b),
		e.exports = t.
	default
	},
	function(e, t, n) {
		"use strict";
		Array.prototype.find || (Array.prototype.find = function(e) {
			if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
			if ("function" != typeof e) throw new TypeError("predicate must be a function");
			for (var t = Object(this), n = t.length >>> 0, a = arguments[1], i = void 0, r = 0; r < n; r++) if (i = t[r], e.call(a, i, r, t)) return i
		}),
		Array.prototype.every || (Array.prototype.every = function(e, t) {
			var n, a;
			if (null == this) throw new TypeError("this is null or not defined");
			var i = Object(this),
			r = i.length >>> 0;
			if ("function" != typeof e) throw new TypeError;
			for (arguments.length > 1 && (n = t), a = 0; a < r;) {
				var o;
				if (a in i) {
					o = i[a];
					if (!e.call(n, o, a, i)) return ! 1
				}
				a++
			}
			return ! 0
		}),
		Array.isArray || (Array.isArray = function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		})
	},
	function(e, t, n) {
		"use strict"; (function(a) {
			function i(e, t) {
				if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			function r(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return ! t || "object" != typeof t && "function" != typeof t ? e: t
			}
			function o(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}),
				t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}
			function u(e) {
				var t, n;
				return n = t = function(t) {
					function n() {
						return i(this, n),
						r(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
					}
					return o(n, t),
					c(n, [{
						key: "checkForStatelessFunctionalComponents",
						value: function(e) {
							if ("production" !== g) {
								l.Children.toArray(e).every(function(e) {
									return ! (0, p.isElementAnSFC)(e) || void 0 === e.key
								}) || (0, f.statelessFunctionalComponentSupplied)()
							}
						}
					},
					{
						key: "convertProps",
						value: function(e) {
							var t = {
								children: e.children,
								easing: e.easing,
								onStart: e.onStart,
								onFinish: e.onFinish,
								onStartAll: e.onStartAll,
								onFinishAll: e.onFinishAll,
								typeName: e.typeName,
								disableAllAnimations: e.disableAllAnimations,
								getPosition: e.getPosition,
								maintainContainerHeight: e.maintainContainerHeight,
								verticalAlignment: e.verticalAlignment,
								duration: this.convertTimingProp("duration"),
								delay: this.convertTimingProp("delay"),
								staggerDurationBy: this.convertTimingProp("staggerDurationBy"),
								staggerDelayBy: this.convertTimingProp("staggerDelayBy"),
								appearAnimation: this.convertAnimationProp(e.appearAnimation, h.appearPresets),
								enterAnimation: this.convertAnimationProp(e.enterAnimation, h.enterPresets),
								leaveAnimation: this.convertAnimationProp(e.leaveAnimation, h.leavePresets),
								delegated: {}
							};
							this.checkForStatelessFunctionalComponents(t.children),
							void 0 !== e.disableAnimations && ("production" !== g && (0, f.deprecatedDisableAnimations)(), t.disableAllAnimations = e.disableAnimations);
							var n = Object.keys(t),
							a = (0, p.omit)(this.props, n);
							return a.style = d({
								position: "relative"
							},
							a.style),
							t.delegated = a,
							t
						}
					},
					{
						key: "convertTimingProp",
						value: function(e) {
							var t = this.props[e],
							a = "number" == typeof t ? t: parseInt(t, 10);
							if (isNaN(a)) {
								var i = n.defaultProps[e];
								return "production" !== g && (0, f.invalidTypeForTimingProp)({
									prop: e,
									value: t,
									defaultValue: i
								}),
								i
							}
							return a
						}
					},
					{
						key: "convertAnimationProp",
						value: function(e, t) {
							switch (void 0 === e ? "undefined": s(e)) {
							case "boolean":
								return t[e ? h.defaultPreset: h.disablePreset];
							case "string":
								var n = Object.keys(t);
								return - 1 === n.indexOf(e) ? ("production" !== g && (0, f.invalidEnterLeavePreset)({
									value: e,
									acceptableValues: n.join(", "),
									defaultValue: h.defaultPreset
								}), t[h.defaultPreset]) : t[e];
							default:
								return e
							}
						}
					},
					{
						key: "render",
						value: function() {
							return m.
						default.createElement(e, this.convertProps(this.props))
						}
					}]),
					n
				} (l.Component),
				t.defaultProps = {
					easing: "ease-in-out",
					duration: 350,
					delay: 0,
					staggerDurationBy: 0,
					staggerDelayBy: 0,
					typeName: "div",
					enterAnimation: h.defaultPreset,
					leaveAnimation: h.defaultPreset,
					disableAllAnimations: !1,
					getPosition: function(e) {
						return e.getBoundingClientRect()
					},
					maintainContainerHeight: !1,
					verticalAlignment: "top"
				},
				n
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			}: function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
			},
			d = Object.assign ||
			function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
				}
				return e
			},
			c = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var a = t[n];
						a.enumerable = a.enumerable || !1,
						a.configurable = !0,
						"value" in a && (a.writable = !0),
						Object.defineProperty(e, a.key, a)
					}
				}
				return function(t, n, a) {
					return n && e(t.prototype, n),
					a && e(t, a),
					t
				}
			} (),
			l = n(12),
			m = function(e) {
				return e && e.__esModule ? e: {
				default:
					e
				}
			} (l),
			f = n(256),
			h = n(257),
			p = n(82),
			g = void 0;
			try {
				g = a.env.NODE_ENV
			} catch(e) {
				g = "development"
			}
			t.
		default = u,
			e.exports = t.
		default
		}).call(t, n(18))
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = !1;
			return function() {
				t || (console.warn(e), t = !0)
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.statelessFunctionalComponentSupplied = a("\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren't supported, because Flip Move needs access to the backing instances via refs, and SFCs don't have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n"),
		t.invalidTypeForTimingProp = function(e) {
			return console.error("\n>> Error, via react-flip-move <<\n\nThe prop you provided for '" + e.prop + "' is invalid. It needs to be a positive integer, or a string that can be resolved to a number. The value you provided is '" + e.value + "'.\n\nAs a result,  the default value for this parameter will be used, which is '" + e.defaultValue + "'.\n")
		},
		t.deprecatedDisableAnimations = a("\n>> Warning, via react-flip-move <<\n\nThe 'disableAnimations' prop you provided is deprecated. Please switch to use 'disableAllAnimations'.\n\nThis will become a silent error in future versions of react-flip-move.\n"),
		t.invalidEnterLeavePreset = function(e) {
			return console.error("\n>> Error, via react-flip-move <<\n\nThe enter/leave preset you provided is invalid. We don't currently have a '" + e.value + " preset.'\n\nAcceptable values are " + e.acceptableValues + ". The default value of '" + e.defaultValue + "' will be used.\n")
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = t.enterPresets = {
			elevator: {
				from: {
					transform: "scale(0)",
					opacity: "0"
				},
				to: {
					transform: "",
					opacity: ""
				}
			},
			fade: {
				from: {
					opacity: "0"
				},
				to: {
					opacity: ""
				}
			},
			accordionVertical: {
				from: {
					transform: "scaleY(0)",
					transformOrigin: "center top"
				},
				to: {
					transform: "",
					transformOrigin: "center top"
				}
			},
			accordionHorizontal: {
				from: {
					transform: "scaleX(0)",
					transformOrigin: "left center"
				},
				to: {
					transform: "",
					transformOrigin: "left center"
				}
			},
			none: null
		},
		i = t.leavePresets = {
			elevator: {
				from: {
					transform: "scale(1)",
					opacity: "1"
				},
				to: {
					transform: "scale(0)",
					opacity: "0"
				}
			},
			fade: {
				from: {
					opacity: "1"
				},
				to: {
					opacity: "0"
				}
			},
			accordionVertical: {
				from: {
					transform: "scaleY(1)",
					transformOrigin: "center top"
				},
				to: {
					transform: "scaleY(0)",
					transformOrigin: "center top"
				}
			},
			accordionHorizontal: {
				from: {
					transform: "scaleX(1)",
					transformOrigin: "left center"
				},
				to: {
					transform: "scaleX(0)",
					transformOrigin: "left center"
				}
			},
			none: null
		};
		t.appearPresets = a;
		a.accordianVertical = a.accordionVertical,
		a.accordianHorizontal = a.accordionHorizontal,
		i.accordianVertical = i.accordionVertical,
		i.accordianHorizontal = i.accordionHorizontal;
		t.defaultPreset = "elevator",
		t.disablePreset = "none"
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n,
			e
		}
		function i(e) {
			var t = e.domNode,
			n = e.styles;
			Object.keys(n).forEach(function(e) {
				t.style.setProperty((0, s.hyphenate)(e), n[e])
			})
		}
		function r() {
			var e = {
				transition: "transitionend",
				"-o-transition": "oTransitionEnd",
				"-moz-transition": "transitionend",
				"-webkit-transition": "webkitTransitionEnd"
			};
			if ("undefined" == typeof document) return "";
			var t = document.createElement("fakeelement"),
			n = Object.keys(e).find(function(e) {
				return void 0 !== t.style.getPropertyValue(e)
			});
			return n ? e[n] : ""
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.createTransitionString = t.getNativeNode = t.updateHeightPlaceholder = t.removeNodeFromDOMFlow = t.getPositionDelta = t.getRelativeBoundingBox = void 0;
		var o = Object.assign ||
		function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		};
		t.applyStylesToDOMNode = i,
		t.whichTransitionEvent = r;
		var u = n(12),
		s = n(82);
		t.getRelativeBoundingBox = function(e) {
			var t = e.childDomNode,
			n = e.parentDomNode,
			a = e.getPosition,
			i = a(n),
			r = a(t),
			o = r.top,
			u = r.left,
			s = r.right,
			d = r.bottom,
			c = r.width,
			l = r.height;
			return {
				top: o - i.top,
				left: u - i.left,
				right: i.right - s,
				bottom: i.bottom - d,
				width: c,
				height: l
			}
		},
		t.getPositionDelta = function(e) {
			var t = e.childDomNode,
			n = e.childBoundingBox,
			a = e.parentBoundingBox,
			i = e.getPosition,
			r = {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				height: 0,
				width: 0
			},
			o = n || r,
			u = a || r,
			s = i(t),
			d = {
				top: s.top - u.top,
				left: s.left - u.left
			};
			return [o.left - d.left, o.top - d.top]
		},
		t.removeNodeFromDOMFlow = function(e, t) {
			var n = e.domNode,
			r = e.boundingBox;
			if (n && r) {
				var u = window.getComputedStyle(n),
				s = ["margin-top", "margin-left", "margin-right"],
				d = s.reduce(function(e, t) {
					var n = u.getPropertyValue(t);
					return o({},
					e, a({},
					t, Number(n.replace("px", ""))))
				},
				{});
				i({
					domNode: n,
					styles: {
						position: "absolute",
						top: ("bottom" === t ? r.top - r.height: r.top) - d["margin-top"] + "px",
						left: r.left - d["margin-left"] + "px",
						right: r.right - d["margin-right"] + "px"
					}
				})
			}
		},
		t.updateHeightPlaceholder = function(e) {
			var t = e.domNode,
			n = e.parentData,
			a = e.getPosition,
			r = n.domNode,
			o = n.boundingBox;
			if (r && o) {
				i({
					domNode: t,
					styles: {
						height: "0"
					}
				});
				var u = o.height,
				s = a(r).height,
				d = u - s;
				i({
					domNode: t,
					styles: {
						height: d > 0 ? d + "px": "0"
					}
				})
			}
		},
		t.getNativeNode = function(e) {
			if ("undefined" == typeof HTMLElement) return null;
			if (e instanceof HTMLElement) return e;
			var t = (0, u.findDOMNode)(e);
			return t instanceof HTMLElement ? t: null
		},
		t.createTransitionString = function(e, t) {
			var n = t.delay,
			a = t.duration,
			i = t.staggerDurationBy,
			r = t.staggerDelayBy,
			o = t.easing;
			return n += e * r,
			a += e * i,
			["transform", "opacity"].map(function(e) {
				return e + " " + a + "ms " + o + " " + n + "ms"
			}).join(", ")
		}
	},
	function(e, t, n) {
		var a, i, r;
		/*!
	Autosize 3.0.21
	license: MIT
	http://www.jacklmoore.com/autosize
*/
		!
		function(n, o) {
			i = [t, e],
			a = o,
			void 0 !== (r = "function" == typeof a ? a.apply(t, i) : a) && (e.exports = r)
		} (0,
		function(e, t) {
			"use strict";
			function n(e) {
				function t(t) {
					var n = e.style.width;
					e.style.width = "0px",
					e.offsetWidth,
					e.style.width = n,
					e.style.overflowY = t
				}
				function n(e) {
					for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
						node: e.parentNode,
						scrollTop: e.parentNode.scrollTop
					}),
					e = e.parentNode;
					return t
				}
				function a() {
					var t = e.style.height,
					a = n(e),
					i = document.documentElement && document.documentElement.scrollTop;
					e.style.height = "auto";
					var r = e.scrollHeight + u;
					if (0 === e.scrollHeight) return void(e.style.height = t);
					e.style.height = r + "px",
					s = e.clientWidth,
					a.forEach(function(e) {
						e.node.scrollTop = e.scrollTop
					}),
					i && (document.documentElement.scrollTop = i)
				}
				function i() {
					a();
					var n = Math.round(parseFloat(e.style.height)),
					i = window.getComputedStyle(e, null),
					r = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : e.offsetHeight;
					if (r !== n ? "hidden" === i.overflowY && (t("scroll"), a(), r = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== i.overflowY && (t("hidden"), a(), r = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), d !== r) {
						d = r;
						var u = o("autosize:resized");
						try {
							e.dispatchEvent(u)
						} catch(e) {}
					}
				}
				if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
					var u = null,
					s = e.clientWidth,
					d = null,
					c = function() {
						e.clientWidth !== s && i()
					},
					l = function(t) {
						window.removeEventListener("resize", c, !1),
						e.removeEventListener("input", i, !1),
						e.removeEventListener("keyup", i, !1),
						e.removeEventListener("autosize:destroy", l, !1),
						e.removeEventListener("autosize:update", i, !1),
						Object.keys(t).forEach(function(n) {
							e.style[n] = t[n]
						}),
						r.delete(e)
					}.bind(e, {
						height: e.style.height,
						resize: e.style.resize,
						overflowY: e.style.overflowY,
						overflowX: e.style.overflowX,
						wordWrap: e.style.wordWrap
					});
					e.addEventListener("autosize:destroy", l, !1),
					"onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", i, !1),
					window.addEventListener("resize", c, !1),
					e.addEventListener("input", i, !1),
					e.addEventListener("autosize:update", i, !1),
					e.style.overflowX = "hidden",
					e.style.wordWrap = "break-word",
					r.set(e, {
						destroy: l,
						update: i
					}),
					function() {
						var t = window.getComputedStyle(e, null);
						"vertical" === t.resize ? e.style.resize = "none": "both" === t.resize && (e.style.resize = "horizontal"),
						u = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth),
						isNaN(u) && (u = 0),
						i()
					} ()
				}
			}
			function a(e) {
				var t = r.get(e);
				t && t.destroy()
			}
			function i(e) {
				var t = r.get(e);
				t && t.update()
			}
			var r = "function" == typeof Map ? new Map: function() {
				var e = [],
				t = [];
				return {
					has: function(t) {
						return e.indexOf(t) > -1
					},
					get: function(n) {
						return t[e.indexOf(n)]
					},
					set: function(n, a) { - 1 === e.indexOf(n) && (e.push(n), t.push(a))
					},
					delete: function(n) {
						var a = e.indexOf(n);
						a > -1 && (e.splice(a, 1), t.splice(a, 1))
					}
				}
			} (),
			o = function(e) {
				return new Event(e, {
					bubbles: !0
				})
			};
			try {
				new Event("test")
			} catch(e) {
				o = function(e) {
					var t = document.createEvent("Event");
					return t.initEvent(e, !0, !1),
					t
				}
			}
			var u = null;
			"undefined" == typeof window || "function" != typeof window.getComputedStyle ? (u = function(e) {
				return e
			},
			u.destroy = function(e) {
				return e
			},
			u.update = function(e) {
				return e
			}) : (u = function(e, t) {
				return e && Array.prototype.forEach.call(e.length ? e: [e],
				function(e) {
					return n(e)
				}),
				e
			},
			u.destroy = function(e) {
				return e && Array.prototype.forEach.call(e.length ? e: [e], a),
				e
			},
			u.update = function(e) {
				return e && Array.prototype.forEach.call(e.length ? e: [e], i),
				e
			}),
			t.exports = u
		})
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.
	default = function(e) {
			return new r.
		default({
				phrases:
				W[e] || W.en,
				locale: e
			})
		};
		var i = n(261),
		r = a(i),
		o = n(262),
		u = a(o),
		s = n(263),
		d = a(s),
		c = n(264),
		l = a(c),
		m = n(265),
		f = a(m),
		h = n(266),
		p = a(h),
		g = n(267),
		v = a(g),
		w = n(268),
		b = a(w),
		y = n(269),
		M = a(y),
		k = n(270),
		P = a(k),
		W = {
			zh: u.
		default,
			"zh-CN": u.
		default,
			"zh-TW": d.
		default,
			en: l.
		default,
			"es-ES": f.
		default,
			fr: p.
		default,
			ru: v.
		default,
			de: b.
		default,
			pl: M.
		default,
			ko: P.
		default
		}
	},
	function(e, t, n) {
		var a, i; !
		function(n, r) {
			a = [],
			void 0 !== (i = function() {
				return r(n)
			}.apply(t, a)) && (e.exports = i)
		} (this,
		function(e) {
			"use strict";
			function t(e) {
				e = e || {},
				this.phrases = {},
				this.extend(e.phrases || {}),
				this.currentLocale = e.locale || "en",
				this.allowMissing = !!e.allowMissing,
				this.warn = e.warn || s
			}
			function n(e) {
				var t, n, a, i = {};
				for (t in e) if (e.hasOwnProperty(t)) {
					n = e[t];
					for (a in n) i[n[a]] = t
				}
				return i
			}
			function a(e) {
				var t = /^\s+|\s+$/g;
				return e.replace(t, "")
			}
			function i(e, t, n) {
				var i, r, u;
				return null != n && e ? (r = e.split(c), u = r[o(t, n)] || r[0], i = a(u)) : i = e,
				i
			}
			function r(e) {
				var t = n(m);
				return t[e] || t.en
			}
			function o(e, t) {
				return l[r(e)](t)
			}
			function u(e, t) {
				for (var n in t)"_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}", "g"), t[n]));
				return e
			}
			function s(t) {
				e.console && e.console.warn && e.console.warn("WARNING: " + t)
			}
			function d(e) {
				var t = {};
				for (var n in e) t[n] = e[n];
				return t
			}
			t.VERSION = "0.4.3",
			t.prototype.locale = function(e) {
				return e && (this.currentLocale = e),
				this.currentLocale
			},
			t.prototype.extend = function(e, t) {
				var n;
				for (var a in e) e.hasOwnProperty(a) && (n = e[a], t && (a = t + "." + a), "object" == typeof n ? this.extend(n, a) : this.phrases[a] = n)
			},
			t.prototype.clear = function() {
				this.phrases = {}
			},
			t.prototype.replace = function(e) {
				this.clear(),
				this.extend(e)
			},
			t.prototype.t = function(e, t) {
				var n, a;
				return t = null == t ? {}: t,
				"number" == typeof t && (t = {
					smart_count: t
				}),
				"string" == typeof this.phrases[e] ? n = this.phrases[e] : "string" == typeof t._ ? n = t._: this.allowMissing ? n = e: (this.warn('Missing translation for key: "' + e + '"'), a = e),
				"string" == typeof n && (t = d(t), a = i(n, this.currentLocale, t.smart_count), a = u(a, t)),
				a
			},
			t.prototype.has = function(e) {
				return e in this.phrases
			};
			var c = "||||",
			l = {
				chinese: function(e) {
					return 0
				},
				german: function(e) {
					return 1 !== e ? 1 : 0
				},
				french: function(e) {
					return e > 1 ? 1 : 0
				},
				russian: function(e) {
					return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
				},
				czech: function(e) {
					return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
				},
				polish: function(e) {
					return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
				},
				icelandic: function(e) {
					return e % 10 != 1 || e % 100 == 11 ? 1 : 0
				}
			},
			m = {
				chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
				german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
				french: ["fr", "tl", "pt-br"],
				russian: ["hr", "ru"],
				czech: ["cs"],
				polish: ["pl"],
				icelandic: ["is"]
			};
			return t
		})
	},
	function(e, t) {
		e.exports = {
			init: "Gitalk 加载中 ...",
			"no-found-related": "未找到相关的 %{link} 进行评论",
			"please-contact": "请联系 %{user} 初始化创建",
			"init-issue": "初始化 Issue",
			"leave-a-comment": "请先使用Github登录哦~",
			preview: "预览",
			edit: "编辑",
			comment: "评论",
			"support-markdown": "支持 Markdown 语法",
			"login-with-github": "使用 GitHub 登录",
			"first-comment-person": "来做第一个留言的人吧！",
			commented: "发表于",
			"load-more": "加载更多",
			counts: "共计 %{counts} 条动态",
			"sort-asc": "从旧到新排序",
			"sort-desc": "从新到旧排序",
			logout: "注销",
			anonymous: "还没登录哦"
		}
	},
	function(e, t) {
		e.exports = {
			init: "Gitalk 載入中…",
			"no-found-related": "未找到相關的 %{link}",
			"please-contact": "請聯絡 %{user} 初始化評論",
			"init-issue": "初始化 Issue",
			"leave-a-comment": "寫點什麼",
			preview: "預覽",
			edit: "編輯",
			comment: "評論",
			"support-markdown": "支援 Markdown 語法",
			"login-with-github": "使用 GitHub 登入",
			"first-comment-person": "成為首個留言的人吧！",
			commented: "評論於",
			"load-more": "載入更多",
			counts: "%{counts} 筆評論",
			"sort-asc": "從舊至新排序",
			"sort-desc": "從新至舊排序",
			logout: "登出",
			anonymous: "訪客"
		}
	},
	function(e, t) {
		e.exports = {
			init: "Gitalking ...",
			"no-found-related": "Related %{link} not found",
			"please-contact": "Please contact %{user} to initialize the comment",
			"init-issue": "Init Issue",
			"leave-a-comment": "Leave a comment",
			preview: "Preview",
			edit: "Edit",
			comment: "Comment",
			"support-markdown": "Markdown is supported",
			"login-with-github": "Login with GitHub",
			"first-comment-person": "Be the first person to leave a comment!",
			commented: "commented",
			"load-more": "Load more",
			counts: "%{counts} comment |||| %{counts} comments",
			"sort-asc": "Sort by Oldest",
			"sort-desc": "Sort by Latest",
			logout: "Logout",
			anonymous: "Anonymous"
		}
	},
	function(e, t) {
		e.exports = {
			init: "Gitalking ...",
			"no-found-related": "Link %{link} no encontrado",
			"please-contact": "Por favor contacta con %{user} para inicializar el comentario",
			"init-issue": "Iniciar Issue",
			"leave-a-comment": "Deja un comentario",
			preview: "Avance",
			edit: "Editar",
			comment: "Comentario",
			"support-markdown": "Markdown es soportado",
			"login-with-github": "Entrar con GitHub",
			"first-comment-person": "Sé el primero en dejar un comentario!",
			commented: "comentó",
			"load-more": "Cargar más",
			counts: "%{counts} comentario |||| %{counts} comentarios",
			"sort-asc": "Ordenar por Antiguos",
			"sort-desc": "Ordenar por Recientes",
			logout: "Salir",
			anonymous: "Anónimo"
		}
	},
	function(e, t) {
		e.exports = {
			init: "Gitalking ...",
			"no-found-related": "Lien %{link} non trouvé",
			"please-contact": "S’il vous plaît contactez %{user} pour initialiser les commentaires",
			"init-issue": "Initialisation des issues",
			"leave-a-comment": "Laisser un commentaire",
			preview: "Aperçu",
			edit: "Modifier",
			comment: "Commentaire",
			"support-markdown": "Markdown est supporté",
			"login-with-github": "Se connecter avec GitHub",
			"first-comment-person": "Être le premier à laisser un commentaire !",
			commented: "commenter",
			"load-more": "Charger plus",
			counts: "%{counts} commentaire |||| %{counts} commentaires",
			"sort-asc": "Trier par plus ancien",
			"sort-desc": "Trier par plus récent",
			logout: "Déconnexion",
			anonymous: "Anonyme"
		}
	},
	function(e, t) {
		e.exports = {
			init: "Gitalking ...",
			"no-found-related": "Связанные %{link} не найдены",
			"please-contact": "Пожалуйста, свяжитесь с %{user} чтобы инициализировать комментарий",
			"init-issue": "Выпуск инициализации",
			"leave-a-comment": "Оставить комментарий",
			preview: "Предварительный просмотр",
			edit: "Pедактировать",
			comment: "Комментарий",
			"support-markdown": "Поддерживается Markdown",
			"login-with-github": "Вход через GitHub",
			"first-comment-person": "Будьте первым, кто оставил комментарий",
			commented: "прокомментированный",
			"load-more": "Загрузить ещё",
			counts: "%{counts} комментарий |||| %{counts} комментариев",
			"sort-asc": "Сортировать по старым",
			"sort-desc": "Сортировать по последним",
			logout: "Выход",
			anonymous: "Анонимный"
		}
	},
	function(e, t) {
		e.exports = {
			init: "Gitalking ...",
			"no-found-related": "Zugehöriger %{link} nicht gefunden",
			"please-contact": "Bitte kontaktiere %{user} um den Kommentar zu initialisieren",
			"init-issue": "Initialisiere Issue",
			"leave-a-comment": "Hinterlasse einen Kommentar",
			preview: "Vorschau",
			edit: "Editieren",
			comment: "Kommentieren",
			"support-markdown": "Markdown wird unterstützt",
			"login-with-github": "Mit GitHub-Account anmelden",
			"first-comment-person": "Sei die erste Person, welche einen Kommentar hinterlässt!",
			commented: "kommentierte",
			"load-more": "Zeige mehr",
			counts: "%{counts} Kommentar |||| %{counts} Kommentare",
			"sort-asc": "Älteste zuerst",
			"sort-desc": "Neuste zuerst",
			logout: "Abmelden",
			anonymous: "Anonym"
		}
	},
	function(e, t) {
		e.exports = {
			init: "Gitalking ...",
			"no-found-related": "Nie znaleziono powiązanego zgłoszenia: %{link}",
			"please-contact": "Skontaktuj się z %{user}, aby umożliwić komentowanie",
			"init-issue": "Utwórz zgłoszenie (GitHub Issue)",
			"leave-a-comment": "Skomentuj",
			preview: "Podgląd",
			edit: "Edytuj",
			comment: "Wyślij",
			"support-markdown": "Możesz użyć składni Markdown",
			"login-with-github": "Zaloguj się poprzez GitHub",
			"first-comment-person": "Skomentuj jako pierwszy!",
			commented: "skomentowany",
			"load-more": "Załaduj więcej",
			counts: "%{counts} komentarz |||| %{counts} komentarze |||| %{counts} komentarzy",
			"sort-asc": "Sortuj od najstarszych",
			"sort-desc": "Sortuj od najnowszych",
			logout: "Wyloguj",
			anonymous: "Anonimowy"
		}
	},
	function(e, t) {
		e.exports = {
			init: "초기화 중 ...",
			"no-found-related": "관련 링크를 찾을 수 없습니다: %{link} ",
			"please-contact": "초기화를 위해 %{user} 에게 연락해 주세요",
			"init-issue": "이슈 초기화",
			"leave-a-comment": "댓글을 남겨보세요",
			preview: "미리보기",
			edit: "수정하기",
			comment: "댓글 달기",
			"support-markdown": "마크다운(Markdown) 문법 지원",
			"login-with-github": "GitHub로 로그인하기",
			"first-comment-person": "첫 번째로 댓글을 남겨보세요!",
			commented: "님이 작성함",
			"load-more": "더 보기",
			counts: "댓글 %{counts} 개",
			"sort-asc": "오래된 댓글 먼저",
			"sort-desc": "최신 댓글 먼저",
			logout: "로그아웃",
			anonymous: "익명"
		}
	},
	function(e, t) {},
	function(e, t, n) {
		e.exports = {
		default:
			n(273),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(274),
		e.exports = n(7).Object.keys
	},
	function(e, t, n) {
		var a = n(33),
		i = n(42);
		n(115)("keys",
		function() {
			return function(e) {
				return i(a(e))
			}
		})
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		t.__esModule = !0;
		var i = n(276),
		r = a(i),
		o = n(279),
		u = a(o);
		t.
	default = function() {
			function e(e, t) {
				var n = [],
				a = !0,
				i = !1,
				r = void 0;
				try {
					for (var o, s = (0, u.
				default)(e); ! (a = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0);
				} catch(e) {
					i = !0,
					r = e
				} finally {
					try { ! a && s.
						return && s.
						return ()
					} finally {
						if (i) throw r
					}
				}
				return n
			}
			return function(t, n) {
				if (Array.isArray(t)) return t;
				if ((0, r.
			default)(Object(t))) return e(t, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		} ()
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(277),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(54),
		n(40),
		e.exports = n(278)
	},
	function(e, t, n) {
		var a = n(76),
		i = n(9)("iterator"),
		r = n(31);
		e.exports = n(7).isIterable = function(e) {
			var t = Object(e);
			return void 0 !== t[i] || "@@iterator" in t || r.hasOwnProperty(a(t))
		}
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(280),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(54),
		n(40),
		e.exports = n(281)
	},
	function(e, t, n) {
		var a = n(14),
		i = n(77);
		e.exports = n(7).getIterator = function(e) {
			var t = i(e);
			if ("function" != typeof t) throw TypeError(e + " is not iterable!");
			return a(t.call(e))
		}
	},
	function(e, t, n) {
		e.exports = n(283)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = new o(e),
			n = r(o.prototype.request, t);
			return i.extend(n, o.prototype, t),
			i.extend(n, t),
			n
		}
		var i = n(10),
		r = n(122),
		o = n(284),
		u = n(128),
		s = n(125),
		d = a(s);
		d.Axios = o,
		d.create = function(e) {
			return a(u(d.defaults, e))
		},
		d.Cancel = n(129),
		d.CancelToken = n(297),
		d.isCancel = n(124),
		d.all = function(e) {
			return Promise.all(e)
		},
		d.spread = n(298),
		e.exports = d,
		e.exports.
	default = d
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			this.defaults = e,
			this.interceptors = {
				request: new o,
				response: new o
			}
		}
		var i = n(10),
		r = n(123),
		o = n(285),
		u = n(286),
		s = n(128);
		a.prototype.request = function(e) {
			"string" == typeof e ? (e = arguments[1] || {},
			e.url = arguments[0]) : e = e || {},
			e = s(this.defaults, e),
			e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
			var t = [u, void 0],
			n = Promise.resolve(e);
			for (this.interceptors.request.forEach(function(e) {
				t.unshift(e.fulfilled, e.rejected)
			}), this.interceptors.response.forEach(function(e) {
				t.push(e.fulfilled, e.rejected)
			}); t.length;) n = n.then(t.shift(), t.shift());
			return n
		},
		a.prototype.getUri = function(e) {
			return e = s(this.defaults, e),
			r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
		},
		i.forEach(["delete", "get", "head", "options"],
		function(e) {
			a.prototype[e] = function(t, n) {
				return this.request(i.merge(n || {},
				{
					method: e,
					url: t
				}))
			}
		}),
		i.forEach(["post", "put", "patch"],
		function(e) {
			a.prototype[e] = function(t, n, a) {
				return this.request(i.merge(a || {},
				{
					method: e,
					url: t,
					data: n
				}))
			}
		}),
		e.exports = a
	},
	function(e, t, n) {
		"use strict";
		function a() {
			this.handlers = []
		}
		var i = n(10);
		a.prototype.use = function(e, t) {
			return this.handlers.push({
				fulfilled: e,
				rejected: t
			}),
			this.handlers.length - 1
		},
		a.prototype.eject = function(e) {
			this.handlers[e] && (this.handlers[e] = null)
		},
		a.prototype.forEach = function(e) {
			i.forEach(this.handlers,
			function(t) {
				null !== t && e(t)
			})
		},
		e.exports = a
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			e.cancelToken && e.cancelToken.throwIfRequested()
		}
		var i = n(10),
		r = n(287),
		o = n(124),
		u = n(125);
		e.exports = function(e) {
			return a(e),
			e.headers = e.headers || {},
			e.data = r(e.data, e.headers, e.transformRequest),
			e.headers = i.merge(e.headers.common || {},
			e.headers[e.method] || {},
			e.headers),
			i.forEach(["delete", "get", "head", "post", "put", "patch", "common"],
			function(t) {
				delete e.headers[t]
			}),
			(e.adapter || u.adapter)(e).then(function(t) {
				return a(e),
				t.data = r(t.data, t.headers, e.transformResponse),
				t
			},
			function(t) {
				return o(t) || (a(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))),
				Promise.reject(t)
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(10);
		e.exports = function(e, t, n) {
			return a.forEach(n,
			function(n) {
				e = n(e, t)
			}),
			e
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(10);
		e.exports = function(e, t) {
			a.forEach(e,
			function(n, a) {
				a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a])
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(127);
		e.exports = function(e, t, n) {
			var i = n.config.validateStatus; ! i || i(n.status) ? e(n) : t(a("Request failed with status code " + n.status, n.config, null, n.request, n))
		}
	},
	function(e, t, n) {
		"use strict";
		e.exports = function(e, t, n, a, i) {
			return e.config = t,
			n && (e.code = n),
			e.request = a,
			e.response = i,
			e.isAxiosError = !0,
			e.toJSON = function() {
				return {
					message: this.message,
					name: this.name,
					description: this.description,
					number: this.number,
					fileName: this.fileName,
					lineNumber: this.lineNumber,
					columnNumber: this.columnNumber,
					stack: this.stack,
					config: this.config,
					code: this.code
				}
			},
			e
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(292),
		i = n(293);
		e.exports = function(e, t) {
			return e && !a(t) ? i(e, t) : t
		}
	},
	function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
		}
	},
	function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(10),
		i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
		e.exports = function(e) {
			var t, n, r, o = {};
			return e ? (a.forEach(e.split("\n"),
			function(e) {
				if (r = e.indexOf(":"), t = a.trim(e.substr(0, r)).toLowerCase(), n = a.trim(e.substr(r + 1)), t) {
					if (o[t] && i.indexOf(t) >= 0) return;
					o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n: n
				}
			}), o) : o
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(10);
		e.exports = a.isStandardBrowserEnv() ?
		function() {
			function e(e) {
				var t = e;
				return n && (i.setAttribute("href", t), t = i.href),
				i.setAttribute("href", t),
				{
					href: i.href,
					protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
					host: i.host,
					search: i.search ? i.search.replace(/^\?/, "") : "",
					hash: i.hash ? i.hash.replace(/^#/, "") : "",
					hostname: i.hostname,
					port: i.port,
					pathname: "/" === i.pathname.charAt(0) ? i.pathname: "/" + i.pathname
				}
			}
			var t, n = /(msie|trident)/i.test(navigator.userAgent),
			i = document.createElement("a");
			return t = e(window.location.href),
			function(n) {
				var i = a.isString(n) ? e(n) : n;
				return i.protocol === t.protocol && i.host === t.host
			}
		} () : function() {
			return function() {
				return ! 0
			}
		} ()
	},
	function(e, t, n) {
		"use strict";
		var a = n(10);
		e.exports = a.isStandardBrowserEnv() ?
		function() {
			return {
				write: function(e, t, n, i, r, o) {
					var u = [];
					u.push(e + "=" + encodeURIComponent(t)),
					a.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
					a.isString(i) && u.push("path=" + i),
					a.isString(r) && u.push("domain=" + r),
					!0 === o && u.push("secure"),
					document.cookie = u.join("; ")
				},
				read: function(e) {
					var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
					return t ? decodeURIComponent(t[3]) : null
				},
				remove: function(e) {
					this.write(e, "", Date.now() - 864e5)
				}
			}
		} () : function() {
			return {
				write: function() {},
				read: function() {
					return null
				},
				remove: function() {}
			}
		} ()
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			if ("function" != typeof e) throw new TypeError("executor must be a function.");
			var t;
			this.promise = new Promise(function(e) {
				t = e
			});
			var n = this;
			e(function(e) {
				n.reason || (n.reason = new i(e), t(n.reason))
			})
		}
		var i = n(129);
		a.prototype.throwIfRequested = function() {
			if (this.reason) throw this.reason
		},
		a.source = function() {
			var e;
			return {
				token: new a(function(t) {
					e = t
				}),
				cancel: e
			}
		},
		e.exports = a
	},
	function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return function(t) {
				return e.apply(null, t)
			}
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = n(12),
		i = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a);
		t.
	default = function(e) {
			var t = e.className,
			n = e.getRef,
			a = e.onClick,
			r = e.onMouseDown,
			o = e.text,
			u = e.isLoading;
			return i.
		default.createElement("button", {
				ref: function(e) {
					return n && n(e)
				},
				className: "gt-btn " + t,
				onClick: a,
				onMouseDown: r
			},
			i.
		default.createElement("span", {
				className: "gt-btn-text"
			},
			o), u && i.
		default.createElement("span", {
				className: "gt-btn-loading gt-spinner"
			}))
		}
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = n(12),
		i = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a);
		t.
	default = function(e) {
			var t = e.className,
			n = e.onClick,
			a = e.text;
			return i.
		default.createElement("a", {
				className: "gt-action " + t,
				onClick: n
			},
			i.
		default.createElement("span", {
				className: "gt-action-text"
			},
			a))
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(114),
		r = a(i),
		o = n(64),
		u = a(o),
		s = n(65),
		d = a(s),
		c = n(116),
		l = a(c),
		m = n(120),
		f = a(m),
		h = n(12),
		p = a(h),
		g = n(130),
		v = a(g),
		w = n(131),
		b = a(w),
		y = n(310),
		M = n(439);
		n(855),
		"undefined" != typeof window && (window.GT_i18n_LocaleMap = {
			zh: M.zhCN,
			"zh-CN": M.zhCN,
			"zh-TW": M.zhTW,
			"es-ES": M.es,
			fr: M.fr,
			ru: M.ru,
			pl: M.pl,
			ko: M.ko,
			de: M.de
		});
		var k = function(e) {
			function t() {
				return (0, u.
			default)(this, t),
				(0, l.
			default)(this, (t.__proto__ || (0, r.
			default)(t)).apply(this, arguments))
			}
			return (0, f.
		default)(t, e),
			(0, d.
		default)(t, [{
				key: "shouldComponentUpdate",
				value: function(e) {
					return e.comment !== this.props.comment
				}
			},
			{
				key: "componentDidMount",
				value: function() {
					var e = this.node,
					t = e.querySelector(".email-hidden-toggle>a");
					t && t.addEventListener("click",
					function(t) {
						t.preventDefault(),
						e.querySelector(".email-hidden-reply").classList.toggle("expanded")
					},
					!0)
				}
			},
			{
				key: "render",
				value: function() {
					var e = this,
					t = this.props,
					n = t.comment,
					a = t.user,
					i = t.language,
					r = t.commentedText,
					o = void 0 === r ? "": r,
					u = t.admin,
					s = void 0 === u ? [] : u,
					d = t.replyCallback,
					c = t.likeCallback,
					l = a && n.user.login === a.login,
					m = ~ [].concat(s).map(function(e) {
						return e.toLowerCase()
					}).indexOf(n.user.login.toLowerCase()),
					f = n.reactions,
					h = "";
					return f && f.totalCount && (h = f.totalCount, 100 === f.totalCount && f.pageInfo && f.pageInfo.hasNextPage && (h = "100+")),
					p.
				default.createElement("div", {
						ref: function(t) {
							e.node = t
						},
						className: "gt-comment " + (m ? "gt-comment-admin": "")
					},
					p.
				default.createElement(v.
				default, {
						className: "gt-comment-avatar",
						src: n.user && n.user.avatar_url,
						alt: n.user && n.user.login
					}), p.
				default.createElement("div", {
						className: "gt-comment-content"
					},
					p.
				default.createElement("div", {
						className: "gt-comment-header"
					},
					p.
				default.createElement("div", {
						className: "gt-comment-block-" + (a ? "2": "1")
					}), p.
				default.createElement("a", {
						className: "gt-comment-username",
						href: n.user && n.user.html_url
					},
					n.user && n.user.login), p.
				default.createElement("span", {
						className: "gt-comment-text"
					},
					o), p.
				default.createElement("span", {
						className: "gt-comment-date"
					},
					(0, y.formatDistanceToNow)((0, y.parseISO)(n.created_at), {
						addSuffix: !0,
						locale: window.GT_i18n_LocaleMap[i]
					})), f && p.
				default.createElement("a", {
						className: "gt-comment-like",
						title: "Like",
						onClick: c
					},
					f.viewerHasReacted ? p.
				default.createElement(b.
				default, {
						className: "gt-ico-heart",
						name: "heart_on",
						text: h
					}) : p.
				default.createElement(b.
				default, {
						className: "gt-ico-heart",
						name: "heart",
						text: h
					})), l ? p.
				default.createElement("a", {
						href: n.html_url,
						className: "gt-comment-edit",
						title: "Edit",
						target: "_blank",
						rel: "noopener noreferrer"
					},
					p.
				default.createElement(b.
				default, {
						className: "gt-ico-edit",
						name: "edit"
					})) : p.
				default.createElement("a", {
						className: "gt-comment-reply",
						title: "Reply",
						onClick: d
					},
					p.
				default.createElement(b.
				default, {
						className: "gt-ico-reply",
						name: "reply"
					}))), p.
				default.createElement("div", {
						className: "gt-comment-body markdown-body",
						dangerouslySetInnerHTML: {
							__html: n.body_html
						}
					})))
				}
			}]),
			t
		} (h.Component);
		t.
	default = k
	},
	function(e, t, n) {
		function a(e) {
			return n(i(e))
		}
		function i(e) {
			var t = r[e];
			if (! (t + 1)) throw new Error("Cannot find module '" + e + "'.");
			return t
		}
		var r = {
			"./arrow_down.svg": 303,
			"./edit.svg": 304,
			"./github.svg": 305,
			"./heart.svg": 306,
			"./heart_on.svg": 307,
			"./reply.svg": 308,
			"./tip.svg": 309
		};
		a.keys = function() {
			return Object.keys(r)
		},
		a.resolve = i,
		e.exports = a,
		a.id = 302
	},
	function(e, t) {
		e.exports = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1619"><path d="M511.872 676.8c-0.003 0-0.006 0-0.008 0-9.137 0-17.379-3.829-23.21-9.97l-251.277-265.614c-5.415-5.72-8.743-13.464-8.744-21.984 0-17.678 14.33-32.008 32.008-32.008 9.157 0 17.416 3.845 23.25 10.009l228.045 241.103 228.224-241.088c5.855-6.165 14.113-10.001 23.266-10.001 8.516 0 16.256 3.32 21.998 8.736 12.784 12.145 13.36 32.434 1.264 45.233l-251.52 265.6c-5.844 6.155-14.086 9.984-23.223 9.984-0.025 0-0.051 0-0.076 0z" p-id="1620"></path></svg>'
	},
	function(e, t) {
		e.exports = '<svg t="1632882466041" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1983" width="16" height="16"><path d="M371.16416 915.39968l456.46336-453.76512-2.41664 382.65344-65.20832 67.49184z m513.4336-669.184l-389.27872 388.49536a73.83552 73.83552 0 0 1-18.70336 13.75744L367.23712 702.976c-11.58656 5.77536-17.76128-0.768-11.68384-12.36992l56.23296-107.32544a74.56768 74.56768 0 0 1 13.312-17.72032l389.74464-388.98176c16.04096-16.01024 35.48672-22.56384 43.42784-14.63296l41.00096 40.91904c7.936 7.91552 1.36704 27.32032-14.67392 43.33056z" fill="#F4CA1C" p-id="1984"></path><path d="M846.8736 448.48128a36.1472 36.1472 0 0 0-36.19328 36.10112v313.9584a86.912 86.912 0 0 1-86.92736 86.7072H220.75392a86.912 86.912 0 0 1-86.92224-86.70208V296.86272a86.912 86.912 0 0 1 86.92224-86.70208H535.552a36.10112 36.10112 0 1 0 0-72.192H220.75392A159.28832 159.28832 0 0 0 61.44 296.86272v501.6832A159.28832 159.28832 0 0 0 220.75392 957.44h502.99904a159.28832 159.28832 0 0 0 159.31904-158.8992v-313.9584a36.15232 36.15232 0 0 0-36.1984-36.10112z m87.94624-276.92032l-82.72896-82.5088a77.48096 77.48096 0 0 0-109.22496 0L353.46944 477.43488l-0.04608 0.0512-0.04096 0.03072c-0.06144 0.06144-0.09728 0.13312-0.15872 0.19456a76.8768 76.8768 0 0 0-20.48 37.27872L302.67392 648.192a56.63232 56.63232 0 0 0 55.26016 68.98688 57.37984 57.37984 0 0 0 10.89024-1.024l137.17504-26.58816a77.056 77.056 0 0 0 39.88992-21.1456l0.08704-0.08192 388.84352-387.83488a76.98432 76.98432 0 0 0 0-108.94336zM394.6752 569.344l57.63584 57.10336-73.728 14.28992z m488.96-339.8656L520.192 591.9232 430.336 502.87616l363.71968-362.76736a4.85888 4.85888 0 0 1 6.85056 0l82.72384 82.50368a4.82816 4.82816 0 0 1 0 6.84032z" fill="#595BB3" p-id="1985"></path></svg>\n'
	},
	function(e, t) {
		e.exports = '<svg t="1632885314685" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6535" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FC8BA4" p-id="6536"></path><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FC8BA4" p-id="6537"></path><path d="M516 1022.4c80.8 0 156.8-18.4 224-52-12-115.2-108.8-204.8-227.2-204.8-117.6 0-213.6 88-227.2 202.4 69.6 34.4 147.2 54.4 230.4 54.4z" fill="#F74541" p-id="6538"></path><path d="M304 840c-17.6 0-32-14.4-32-32V411.2c0-17.6 6.4-44.8 13.6-60.8 0 0 91.2-189.6 228.8-189.6 137.6 0 231.2 189.6 231.2 189.6 8 16 14.4 43.2 14.4 60.8V808c0 17.6-14.4 32-32 32H304z" fill="#633C22" p-id="6539"></path><path d="M516 1022.4c80.8 0 156.8-18.4 224-52-12-115.2-108.8-204.8-227.2-204.8-117.6 0-213.6 88-227.2 202.4 69.6 34.4 147.2 54.4 230.4 54.4z" fill="#F74541" p-id="6540"></path><path d="M552 795.2c0 18.4-16 28.8-32 28.8s-32-10.4-32-28.8v-71.2c0-18.4 16-28 32-28s32 9.6 32 28v71.2zM228.8 506.4c0 24 19.2 43.2 43.2 43.2 24 0 43.2-21.6 43.2-45.6S296 462.4 272 462.4c-24 0.8-43.2 20-43.2 44zM804 506.4c0 24-19.2 43.2-43.2 43.2-24 0-43.2-21.6-43.2-45.6s19.2-41.6 43.2-41.6c24 0.8 43.2 20 43.2 44z" fill="#F9D4CA" p-id="6541"></path><path d="M514.4 217.6c119.2 0 216 96.8 216 216V520c0 119.2-96.8 216-216 216s-216-96.8-216-216V433.6c0.8-119.2 96.8-216 216-216z" fill="#F9D4CA" p-id="6542"></path><path d="M360 528c0-16.8 14.4-32 32-32s32 15.2 32 32h-64z" p-id="6543"></path><path d="M514.4 690.4c-119.2 0-216-96.8-216-216v44.8c0 119.2 96.8 216 216 216s216-96.8 216-216v-44.8c0 120-96.8 216-216 216z" fill="#EFBFB4" p-id="6544"></path><path d="M592 528c0-16.8 14.4-32 32-32s32 15.2 32 32h-64z" p-id="6545"></path><path d="M568 616c0 27.2-20 48-48 48s-48-20.8-48-48h96z" fill="#FFFFFF" p-id="6546"></path><path d="M400 572c0 11.2-8 20-18.4 20h-27.2C344 592 336 583.2 336 572s8-20 18.4-20h27.2c10.4 0 18.4 8.8 18.4 20zM696 572c0 11.2-8 20-18.4 20h-27.2C640 592 632 583.2 632 572s8-20 18.4-20h27.2c10.4 0 18.4 8.8 18.4 20z" fill="#F29F8F" p-id="6547"></path><path d="M416 464h-48c-4 0-8-3.2-8-8s3.2-8 8-8h48c4 0 8 3.2 8 8s-3.2 8-8 8zM655.2 464H600c-4.8 0-8.8-3.2-8.8-8s4-8 8.8-8h55.2c4.8 0 8.8 3.2 8.8 8s-4 8-8.8 8z" fill="#442611" p-id="6548"></path><path d="M514.4 160.8C292 160.8 280 384 280 387.2v281.6h40V409.6h392.8v259.2H752V409.6s4-248.8-237.6-248.8z" fill="#633C22" p-id="6549"></path><path d="M692 944.8c-3.2 0-6.4-1.6-7.2-4.8-4.8-12-9.6-22.4-14.4-32-2.4-4-0.8-8.8 3.2-11.2 4-2.4 8.8-0.8 11.2 3.2 5.6 10.4 10.4 21.6 15.2 34.4 1.6 4-0.8 8.8-4.8 10.4-0.8-0.8-2.4 0-3.2 0zM659.2 883.2c-2.4 0-4.8-0.8-6.4-3.2-20.8-28-44.8-40.8-64.8-49.6-4-1.6-5.6-6.4-4-10.4 1.6-4 6.4-5.6 10.4-4 22.4 10.4 48 23.2 71.2 55.2 2.4 3.2 1.6 8.8-1.6 11.2-1.6 0.8-3.2 0.8-4.8 0.8z" fill="#FF9E99" p-id="6550"></path><path d="M712 350.4c-3.2 0-6.4-2.4-7.2-5.6-14.4-40.8-42.4-77.6-78.4-102.4-4-2.4-4.8-7.2-2.4-11.2 2.4-4 7.2-4.8 11.2-2.4 39.2 26.4 68.8 65.6 84.8 110.4 1.6 4-0.8 8.8-4.8 10.4-1.6 0.8-2.4 0.8-3.2 0.8zM578.4 218.4c-0.8 0-1.6 0-2.4-0.8-20.8-7.2-41.6-10.4-63.2-10.4-4.8 0-8-3.2-8-8s3.2-8 8-8c23.2 0 46.4 4 68 11.2 4 1.6 6.4 5.6 4.8 10.4-0.8 3.2-4 5.6-7.2 5.6z" fill="#915B36" p-id="6551"></path><path d="M720 416H312c-4.8 0-8-3.2-8-8s3.2-8 8-8h408c4.8 0 8 3.2 8 8s-3.2 8-8 8z" fill="#442611" p-id="6552"></path><path d="M536 568c0 8.8-8 16-16 16s-16-7.2-16-16v-40c0-8.8 8-16 16-16s16 7.2 16 16v40z" fill="#EFBFB4" p-id="6553"></path><path d="M940 425.6c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c4.8-0.8 8.8-4 8.8-7.2zM220 657.6c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-1.6 16c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c4-1.6 8-4.8 8-8zM168 376c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 7.2-16.8 16.8 0 9.6 8 16.8 16.8 16.8 9.6 0 16.8-7.2 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8zM784 232c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 7.2-16.8 16.8 0 9.6 8 16.8 16.8 16.8 9.6 0 16.8-7.2 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8zM856 720c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 7.2-16.8 16.8 0 9.6 8 16.8 16.8 16.8 9.6 0 16.8-7.2 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8z" fill="#FFFFFF" opacity=".5" p-id="6554"></path><path d="M808 504c0-25.6-15.2-44.8-40-48v-44.8-0.8h-0.8c0-0.8 0.8-1.6 0.8-2.4 0-143.2-111.2-255.2-253.6-255.2C374.4 152.8 264 264.8 264 408c0 0.8 0 1.6 0.8 2.4H264V456c-24.8 4-40 22.4-40 48s15.2 52 40 56v248c0 22.4 17.6 40 40 40h23.2c-25.6 32.8-43.2 72-48.8 116 4.8 2.4 10.4 5.6 15.2 8C304 869.6 381.6 791.2 480 776v18.4c0 21.6 16.8 36.8 40 36.8s40-15.2 40-36.8v-16c91.2 20 161.6 97.6 172 195.2 4.8-2.4 10.4-4.8 15.2-7.2-5.6-44.8-23.2-85.6-49.6-119.2H728c22.4 0 40-17.6 40-40v-248c24.8-3.2 40-29.6 40-55.2z m-568 0c0-16.8 8-28 24-32v72c-16-4-24-23.2-24-40z m304 291.2c0 16-12.8 20.8-24 20.8s-24-5.6-24-20.8v-53.6c6.4 0.8 17.6 2.4 24 2.4 9.6 0 14.4-2.4 24-4v55.2z m208-384V808c0 13.6-10.4 24-24 24h-44c-32.8-35.2-76-59.2-124-69.6v-25.6c85.6-17.6 153.6-84 172.8-168h-16.8C693.6 659.2 617.6 728 520 728s-184.8-68.8-207.2-158.4H296c20 88 92.8 156 183.2 170.4V760c-54.4 7.2-103.2 33.6-139.2 72H304c-13.6 0-24-10.4-24-24V411.2v-0.8h-0.8c0-0.8 0.8-1.6 0.8-2.4 0-134.4 103.2-239.2 234.4-239.2C648 168.8 752 273.6 752 408v3.2zM768 544v-72c16 3.2 24 15.2 24 32s-8 36.8-24 40z" fill="#442611" p-id="6555"></path><path d="M280 563.2h40v105.6h-40zM712.8 563.2H752v105.6h-39.2z" fill="#633C22" p-id="6556"></path></svg>\n'
	},
	function(e, t) {
		e.exports = '<svg t="1632882541221" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2360" width="16" height="16"><path d="M462.62784 723.82464a135.26016 135.26016 0 0 1 0-191.30368l177.03424-177.00352a135.30624 135.30624 0 0 1 191.32928 0 135.25504 135.25504 0 0 1 0 191.29856l-177.03424 177.00864a135.31136 135.31136 0 0 1-191.32928 0z" fill="#F4CA1C" p-id="2361"></path><path d="M514.56 911.36a77.28128 77.28128 0 0 1-54.784-22.62528l-327.296-326.84032A260.32128 260.32128 0 1 1 500.736 193.85344l13.824 13.824 13.824-13.824a260.31616 260.31616 0 1 1 368.26112 368.03072L569.344 888.73472A77.312 77.312 0 0 1 514.56 911.36zM316.60032 190.32064a187.5456 187.5456 0 0 0-132.7616 320.22528l327.28576 326.83008a4.86912 4.86912 0 0 0 6.87616 0L845.312 510.5408a187.69408 187.69408 0 0 0-265.53344-265.34912l-24.94976 24.9344a57.00096 57.00096 0 0 1-80.49152 0l-24.95488-24.93952a187.25376 187.25376 0 0 0-132.78208-54.86592z" fill="#595BB3" p-id="2362"></path></svg>\n'
	},
	function(e, t) {
		e.exports = '<svg t="1632884375142" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2599" width="16" height="16"><path d="M650.8544 602.9824m-281.4464 0a281.4464 281.4464 0 1 0 562.8928 0 281.4464 281.4464 0 1 0-562.8928 0Z" fill="#C0E1C6" p-id="2600"></path><path d="M512 937.1648c-26.7264 0-51.8656-10.3936-70.7584-29.3376l-313.9584-313.9584c-109.6192-109.6192-109.6192-288 0-397.6192 105.4208-105.4208 274.432-109.4656 384.768-12.1344 110.2848-97.3312 279.296-93.3376 384.7168 12.1344 109.6192 109.6192 109.6192 288 0 397.6192l-313.9584 313.9584c-18.944 18.944-44.0832 29.3376-70.8096 29.3376zM326.0928 175.4624c-56.2688 0-112.5376 21.4016-155.392 64.256-85.6576 85.6576-85.6576 225.0752 0 310.7328l313.9584 313.9584a38.33344 38.33344 0 0 0 27.3408 11.3152c10.3424 0 20.0192-4.0448 27.3408-11.3152l313.9584-313.9584c85.6576-85.6576 85.6576-225.0752 0-310.7328-85.6576-85.6576-225.0752-85.6576-310.7328 0l-8.8064 8.8576a30.65344 30.65344 0 0 1-43.4176 0l-8.8576-8.8576c-42.8544-42.8544-99.1744-64.256-155.392-64.256z" fill="#4F4F4F" p-id="2601"></path><path d="M827.6992 471.6032c-2.56 0-5.2224-0.3072-7.8336-1.024a30.70976 30.70976 0 0 1-21.9136-37.5296c10.1888-38.656-1.0752-80.2304-29.2864-108.4928a112.98816 112.98816 0 0 0-86.9888-32.768c-16.9472 1.1264-31.5392-11.7248-32.6144-28.672s11.7248-31.5392 28.672-32.6144c50.0224-3.2256 99.0208 15.2064 134.4 50.6368 43.6224 43.6224 60.9792 107.8272 45.2608 167.5264a30.73024 30.73024 0 0 1-29.696 22.9376z" fill="#4F4F4F" p-id="2602"></path></svg>\n'
	},
	function(e, t) {
		e.exports = '<svg t="1632884696040" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2839" width="16" height="16"><path d="M820.8896 807.9872H487.46496a39.64928 39.64928 0 0 0-22.58944 7.07072l-135.75168 94.13632a39.7056 39.7056 0 0 1-61.39392-24.19712l-10.10176-45.74208a39.7824 39.7824 0 0 0-38.80448-31.26784l0.19968-148.992a146.5344 146.5344 0 0 1 146.24256-146.62656h535.1168a39.82848 39.82848 0 0 1 39.74656 39.90528v136.00768a119.4752 119.4752 0 0 1-119.23968 119.7056z" fill="#F4CA1C" p-id="2840"></path><path d="M815.39072 112.64H198.3744A157.83936 157.83936 0 0 0 40.96 270.55104v379.78112a157.84448 157.84448 0 0 0 157.4144 157.91104h14.79168a1.62816 1.62816 0 0 1 1.57696 1.27488l10.10688 45.71648a77.77792 77.77792 0 0 0 120.32 47.3856l135.78752-94.08512a1.62816 1.62816 0 0 1 0.9216-0.29184h333.5168A157.83936 157.83936 0 0 0 972.8 650.33216V270.55104A157.83936 157.83936 0 0 0 815.39072 112.64zM896.512 650.33216a81.35168 81.35168 0 0 1-81.13152 81.408H481.87904a77.42464 77.42464 0 0 0-44.27264 13.824L301.81888 839.68a1.61792 1.61792 0 0 1-2.50368-0.98816l-10.10688-45.71648a77.47584 77.47584 0 0 0-76.04736-61.23008h-14.78656a81.3568 81.3568 0 0 1-81.13664-81.408V270.55104a81.3568 81.3568 0 0 1 81.13664-81.408h617.01632a81.35168 81.35168 0 0 1 81.13152 81.408v379.78112zM337.98656 424.68352a49.24416 49.24416 0 1 0 49.08544 49.24416 49.152 49.152 0 0 0-49.08544-49.24416z m184.0896 0a49.24416 49.24416 0 1 0 49.09056 49.24416 49.152 49.152 0 0 0-49.09056-49.24416z m177.07008 0a49.24416 49.24416 0 1 0 49.09056 49.24416 49.152 49.152 0 0 0-49.09056-49.24416z" fill="#595BB3" p-id="2841"></path></svg>\n'
	},
	function(e, t) {
		e.exports = '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\n  <path d="M512 366.949535c-16.065554 0-29.982212 13.405016-29.982212 29.879884l0 359.070251c0 16.167882 13.405016 29.879884 29.982212 29.879884 15.963226 0 29.879884-13.405016 29.879884-29.879884L541.879884 396.829419C541.879884 380.763865 528.474868 366.949535 512 366.949535L512 366.949535z"\n    p-id="3083"></path>\n  <path d="M482.017788 287.645048c0-7.776956 3.274508-15.553912 8.80024-21.181973 5.525732-5.525732 13.302688-8.80024 21.181973-8.80024 7.776956 0 15.553912 3.274508 21.079644 8.80024 5.525732 5.62806 8.80024 13.405016 8.80024 21.181973 0 7.776956-3.274508 15.656241-8.80024 21.181973-5.525732 5.525732-13.405016 8.697911-21.079644 8.697911-7.879285 0-15.656241-3.274508-21.181973-8.697911C485.292295 303.301289 482.017788 295.524333 482.017788 287.645048L482.017788 287.645048z"\n    p-id="3084"></path>\n  <path d="M512 946.844409c-239.8577 0-434.895573-195.037873-434.895573-434.895573 0-239.8577 195.037873-434.895573 434.895573-434.895573 239.755371 0 434.895573 195.037873 434.895573 434.895573C946.895573 751.806535 751.755371 946.844409 512 946.844409zM512 126.17088c-212.740682 0-385.880284 173.037274-385.880284 385.777955 0 212.740682 173.037274 385.777955 385.880284 385.777955 212.740682 0 385.777955-173.037274 385.777955-385.777955C897.777955 299.208154 724.740682 126.17088 512 126.17088z"\n    p-id="3085"></path>\n</svg>\n'
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = n(311);
		n.d(t, "add",
		function() {
			return a.a
		});
		var i = n(132);
		n.d(t, "addBusinessDays",
		function() {
			return i.a
		});
		var r = n(21);
		n.d(t, "addDays",
		function() {
			return r.a
		});
		var o = n(84);
		n.d(t, "addHours",
		function() {
			return o.a
		});
		var u = n(134);
		n.d(t, "addISOWeekYears",
		function() {
			return u.a
		});
		var s = n(45);
		n.d(t, "addMilliseconds",
		function() {
			return s.a
		});
		var d = n(136);
		n.d(t, "addMinutes",
		function() {
			return d.a
		});
		var c = n(44);
		n.d(t, "addMonths",
		function() {
			return c.a
		});
		var l = n(85);
		n.d(t, "addQuarters",
		function() {
			return l.a
		});
		var m = n(137);
		n.d(t, "addSeconds",
		function() {
			return m.a
		});
		var f = n(58);
		n.d(t, "addWeeks",
		function() {
			return f.a
		});
		var h = n(138);
		n.d(t, "addYears",
		function() {
			return h.a
		});
		var p = n(312);
		n.d(t, "areIntervalsOverlapping",
		function() {
			return p.a
		});
		var g = n(313);
		n.d(t, "closestIndexTo",
		function() {
			return g.a
		});
		var v = n(314);
		n.d(t, "closestTo",
		function() {
			return v.a
		});
		var w = n(27);
		n.d(t, "compareAsc",
		function() {
			return w.a
		});
		var b = n(315);
		n.d(t, "compareDesc",
		function() {
			return b.a
		});
		var y = n(316);
		n.d(t, "differenceInBusinessDays",
		function() {
			return y.a
		});
		var M = n(26);
		n.d(t, "differenceInCalendarDays",
		function() {
			return M.a
		});
		var k = n(139);
		n.d(t, "differenceInCalendarISOWeekYears",
		function() {
			return k.a
		});
		var P = n(317);
		n.d(t, "differenceInCalendarISOWeeks",
		function() {
			return P.a
		});
		var W = n(140);
		n.d(t, "differenceInCalendarMonths",
		function() {
			return W.a
		});
		var x = n(318);
		n.d(t, "differenceInCalendarQuarters",
		function() {
			return x.a
		});
		var j = n(142);
		n.d(t, "differenceInCalendarWeeks",
		function() {
			return j.a
		});
		var T = n(143);
		n.d(t, "differenceInCalendarYears",
		function() {
			return T.a
		});
		var S = n(86);
		n.d(t, "differenceInDays",
		function() {
			return S.a
		});
		var C = n(144);
		n.d(t, "differenceInHours",
		function() {
			return C.a
		});
		var z = n(319);
		n.d(t, "differenceInISOWeekYears",
		function() {
			return z.a
		});
		var N = n(59);
		n.d(t, "differenceInMilliseconds",
		function() {
			return N.a
		});
		var D = n(146);
		n.d(t, "differenceInMinutes",
		function() {
			return D.a
		});
		var E = n(60);
		n.d(t, "differenceInMonths",
		function() {
			return E.a
		});
		var H = n(320);
		n.d(t, "differenceInQuarters",
		function() {
			return H.a
		});
		var A = n(61);
		n.d(t, "differenceInSeconds",
		function() {
			return A.a
		});
		var _ = n(321);
		n.d(t, "differenceInWeeks",
		function() {
			return _.a
		});
		var O = n(147);
		n.d(t, "differenceInYears",
		function() {
			return O.a
		});
		var X = n(148);
		n.d(t, "eachDayOfInterval",
		function() {
			return X.a
		});
		var I = n(322);
		n.d(t, "eachHourOfInterval",
		function() {
			return I.a
		});
		var Y = n(323);
		n.d(t, "eachMonthOfInterval",
		function() {
			return Y.a
		});
		var F = n(324);
		n.d(t, "eachQuarterOfInterval",
		function() {
			return F.a
		});
		var L = n(325);
		n.d(t, "eachWeekOfInterval",
		function() {
			return L.a
		});
		var q = n(88);
		n.d(t, "eachWeekendOfInterval",
		function() {
			return q.a
		});
		var G = n(326);
		n.d(t, "eachWeekendOfMonth",
		function() {
			return G.a
		});
		var R = n(327);
		n.d(t, "eachWeekendOfYear",
		function() {
			return R.a
		});
		var U = n(328);
		n.d(t, "eachYearOfInterval",
		function() {
			return U.a
		});
		var K = n(91);
		n.d(t, "endOfDay",
		function() {
			return K.a
		});
		var J = n(329);
		n.d(t, "endOfDecade",
		function() {
			return J.a
		});
		var B = n(330);
		n.d(t, "endOfHour",
		function() {
			return B.a
		});
		var $ = n(331);
		n.d(t, "endOfISOWeek",
		function() {
			return $.a
		});
		var V = n(332);
		n.d(t, "endOfISOWeekYear",
		function() {
			return V.a
		});
		var Q = n(333);
		n.d(t, "endOfMinute",
		function() {
			return Q.a
		});
		var Z = n(89);
		n.d(t, "endOfMonth",
		function() {
			return Z.a
		});
		var ee = n(334);
		n.d(t, "endOfQuarter",
		function() {
			return ee.a
		});
		var te = n(335);
		n.d(t, "endOfSecond",
		function() {
			return te.a
		});
		var ne = n(336);
		n.d(t, "endOfToday",
		function() {
			return ne.a
		});
		var ae = n(337);
		n.d(t, "endOfTomorrow",
		function() {
			return ae.a
		});
		var ie = n(150);
		n.d(t, "endOfWeek",
		function() {
			return ie.a
		});
		var re = n(149);
		n.d(t, "endOfYear",
		function() {
			return re.a
		});
		var oe = n(338);
		n.d(t, "endOfYesterday",
		function() {
			return oe.a
		});
		var ue = n(151);
		n.d(t, "format",
		function() {
			return ue.a
		});
		var se = n(158);
		n.d(t, "formatDistance",
		function() {
			return se.a
		});
		var de = n(161);
		n.d(t, "formatDistanceStrict",
		function() {
			return de.a
		});
		var ce = n(344);
		n.d(t, "formatDistanceToNow",
		function() {
			return ce.a
		});
		var le = n(345);
		n.d(t, "formatDistanceToNowStrict",
		function() {
			return le.a
		});
		var me = n(346);
		n.d(t, "formatDuration",
		function() {
			return me.a
		});
		var fe = n(347);
		n.d(t, "formatISO",
		function() {
			return fe.a
		});
		var he = n(348);
		n.d(t, "formatISO9075",
		function() {
			return he.a
		});
		var pe = n(349);
		n.d(t, "formatISODuration",
		function() {
			return pe.a
		});
		var ge = n(350);
		n.d(t, "formatRFC3339",
		function() {
			return ge.a
		});
		var ve = n(351);
		n.d(t, "formatRFC7231",
		function() {
			return ve.a
		});
		var we = n(352);
		n.d(t, "formatRelative",
		function() {
			return we.a
		});
		var be = n(353);
		n.d(t, "fromUnixTime",
		function() {
			return be.a
		});
		var ye = n(162);
		n.d(t, "getDate",
		function() {
			return ye.a
		});
		var Me = n(163);
		n.d(t, "getDay",
		function() {
			return Me.a
		});
		var ke = n(354);
		n.d(t, "getDayOfYear",
		function() {
			return ke.a
		});
		var Pe = n(164);
		n.d(t, "getDaysInMonth",
		function() {
			return Pe.a
		});
		var We = n(355);
		n.d(t, "getDaysInYear",
		function() {
			return We.a
		});
		var xe = n(356);
		n.d(t, "getDecade",
		function() {
			return xe.a
		});
		var je = n(357);
		n.d(t, "getHours",
		function() {
			return je.a
		});
		var Te = n(166);
		n.d(t, "getISODay",
		function() {
			return Te.a
		});
		var Se = n(167);
		n.d(t, "getISOWeek",
		function() {
			return Se.a
		});
		var Ce = n(34);
		n.d(t, "getISOWeekYear",
		function() {
			return Ce.a
		});
		var ze = n(358);
		n.d(t, "getISOWeeksInYear",
		function() {
			return ze.a
		});
		var Ne = n(359);
		n.d(t, "getMilliseconds",
		function() {
			return Ne.a
		});
		var De = n(360);
		n.d(t, "getMinutes",
		function() {
			return De.a
		});
		var Ee = n(361);
		n.d(t, "getMonth",
		function() {
			return Ee.a
		});
		var He = n(362);
		n.d(t, "getOverlappingDaysInIntervals",
		function() {
			return He.a
		});
		var Ae = n(141);
		n.d(t, "getQuarter",
		function() {
			return Ae.a
		});
		var _e = n(363);
		n.d(t, "getSeconds",
		function() {
			return _e.a
		});
		var Oe = n(168);
		n.d(t, "getTime",
		function() {
			return Oe.a
		});
		var Xe = n(364);
		n.d(t, "getUnixTime",
		function() {
			return Xe.a
		});
		var Ie = n(169);
		n.d(t, "getWeek",
		function() {
			return Ie.a
		});
		var Ye = n(365);
		n.d(t, "getWeekOfMonth",
		function() {
			return Ye.a
		});
		var Fe = n(170);
		n.d(t, "getWeekYear",
		function() {
			return Fe.a
		});
		var Le = n(366);
		n.d(t, "getWeeksInMonth",
		function() {
			return Le.a
		});
		var qe = n(367);
		n.d(t, "getYear",
		function() {
			return qe.a
		});
		var Ge = n(368);
		n.d(t, "intervalToDuration",
		function() {
			return Ge.a
		});
		var Re = n(369);
		n.d(t, "isAfter",
		function() {
			return Re.a
		});
		var Ue = n(370);
		n.d(t, "isBefore",
		function() {
			return Ue.a
		});
		var Ke = n(371);
		n.d(t, "isDate",
		function() {
			return Ke.a
		});
		var Je = n(372);
		n.d(t, "isEqual",
		function() {
			return Je.a
		});
		var Be = n(373);
		n.d(t, "isExists",
		function() {
			return Be.a
		});
		var $e = n(374);
		n.d(t, "isFirstDayOfMonth",
		function() {
			return $e.a
		});
		var Ve = n(375);
		n.d(t, "isFriday",
		function() {
			return Ve.a
		});
		var Qe = n(376);
		n.d(t, "isFuture",
		function() {
			return Qe.a
		});
		var Ze = n(377);
		n.d(t, "isLastDayOfMonth",
		function() {
			return Ze.a
		});
		var et = n(165);
		n.d(t, "isLeapYear",
		function() {
			return et.a
		});
		var tt = n(378);
		n.d(t, "isMatch",
		function() {
			return tt.a
		});
		var nt = n(384);
		n.d(t, "isMonday",
		function() {
			return nt.a
		});
		var at = n(385);
		n.d(t, "isPast",
		function() {
			return at.a
		});
		var it = n(47);
		n.d(t, "isSameDay",
		function() {
			return it.a
		});
		var rt = n(175);
		n.d(t, "isSameHour",
		function() {
			return rt.a
		});
		var ot = n(177);
		n.d(t, "isSameISOWeek",
		function() {
			return ot.a
		});
		var ut = n(386);
		n.d(t, "isSameISOWeekYear",
		function() {
			return ut.a
		});
		var st = n(178);
		n.d(t, "isSameMinute",
		function() {
			return st.a
		});
		var dt = n(180);
		n.d(t, "isSameMonth",
		function() {
			return dt.a
		});
		var ct = n(181);
		n.d(t, "isSameQuarter",
		function() {
			return ct.a
		});
		var lt = n(182);
		n.d(t, "isSameSecond",
		function() {
			return lt.a
		});
		var mt = n(95);
		n.d(t, "isSameWeek",
		function() {
			return mt.a
		});
		var ft = n(184);
		n.d(t, "isSameYear",
		function() {
			return ft.a
		});
		var ht = n(133);
		n.d(t, "isSaturday",
		function() {
			return ht.a
		});
		var pt = n(83);
		n.d(t, "isSunday",
		function() {
			return pt.a
		});
		var gt = n(387);
		n.d(t, "isThisHour",
		function() {
			return gt.a
		});
		var vt = n(388);
		n.d(t, "isThisISOWeek",
		function() {
			return vt.a
		});
		var wt = n(389);
		n.d(t, "isThisMinute",
		function() {
			return wt.a
		});
		var bt = n(390);
		n.d(t, "isThisMonth",
		function() {
			return bt.a
		});
		var yt = n(391);
		n.d(t, "isThisQuarter",
		function() {
			return yt.a
		});
		var Mt = n(392);
		n.d(t, "isThisSecond",
		function() {
			return Mt.a
		});
		var kt = n(393);
		n.d(t, "isThisWeek",
		function() {
			return kt.a
		});
		var Pt = n(394);
		n.d(t, "isThisYear",
		function() {
			return Pt.a
		});
		var Wt = n(395);
		n.d(t, "isThursday",
		function() {
			return Wt.a
		});
		var xt = n(396);
		n.d(t, "isToday",
		function() {
			return xt.a
		});
		var jt = n(397);
		n.d(t, "isTomorrow",
		function() {
			return jt.a
		});
		var Tt = n(398);
		n.d(t, "isTuesday",
		function() {
			return Tt.a
		});
		var St = n(15);
		n.d(t, "isValid",
		function() {
			return St.a
		});
		var Ct = n(399);
		n.d(t, "isWednesday",
		function() {
			return Ct.a
		});
		var zt = n(56);
		n.d(t, "isWeekend",
		function() {
			return zt.a
		});
		var Nt = n(400);
		n.d(t, "isWithinInterval",
		function() {
			return Nt.a
		});
		var Dt = n(401);
		n.d(t, "isYesterday",
		function() {
			return Dt.a
		});
		var Et = n(402);
		n.d(t, "lastDayOfDecade",
		function() {
			return Et.a
		});
		var Ht = n(403);
		n.d(t, "lastDayOfISOWeek",
		function() {
			return Ht.a
		});
		var At = n(404);
		n.d(t, "lastDayOfISOWeekYear",
		function() {
			return At.a
		});
		var _t = n(171);
		n.d(t, "lastDayOfMonth",
		function() {
			return _t.a
		});
		var Ot = n(405);
		n.d(t, "lastDayOfQuarter",
		function() {
			return Ot.a
		});
		var Xt = n(185);
		n.d(t, "lastDayOfWeek",
		function() {
			return Xt.a
		});
		var It = n(406);
		n.d(t, "lastDayOfYear",
		function() {
			return It.a
		});
		var Yt = n(407);
		n.d(t, "lightFormat",
		function() {
			return Yt.a
		});
		var Ft = n(408);
		n.d(t, "max",
		function() {
			return Ft.a
		});
		var Lt = n(409);
		n.d(t, "min",
		function() {
			return Lt.a
		});
		var qt = n(174);
		n.d(t, "parse",
		function() {
			return qt.a
		});
		var Gt = n(410);
		n.d(t, "parseISO",
		function() {
			return Gt.a
		});
		var Rt = n(411);
		n.d(t, "parseJSON",
		function() {
			return Rt.a
		});
		var Ut = n(412);
		n.d(t, "roundToNearestMinutes",
		function() {
			return Ut.a
		});
		var Kt = n(413);
		n.d(t, "set",
		function() {
			return Kt.a
		});
		var Jt = n(414);
		n.d(t, "setDate",
		function() {
			return Jt.a
		});
		var Bt = n(415);
		n.d(t, "setDay",
		function() {
			return Bt.a
		});
		var $t = n(416);
		n.d(t, "setDayOfYear",
		function() {
			return $t.a
		});
		var Vt = n(417);
		n.d(t, "setHours",
		function() {
			return Vt.a
		});
		var Qt = n(418);
		n.d(t, "setISODay",
		function() {
			return Qt.a
		});
		var Zt = n(419);
		n.d(t, "setISOWeek",
		function() {
			return Zt.a
		});
		var en = n(135);
		n.d(t, "setISOWeekYear",
		function() {
			return en.a
		});
		var tn = n(420);
		n.d(t, "setMilliseconds",
		function() {
			return tn.a
		});
		var nn = n(421);
		n.d(t, "setMinutes",
		function() {
			return nn.a
		});
		var an = n(96);
		n.d(t, "setMonth",
		function() {
			return an.a
		});
		var rn = n(422);
		n.d(t, "setQuarter",
		function() {
			return rn.a
		});
		var on = n(423);
		n.d(t, "setSeconds",
		function() {
			return on.a
		});
		var un = n(424);
		n.d(t, "setWeek",
		function() {
			return un.a
		});
		var sn = n(425);
		n.d(t, "setWeekYear",
		function() {
			return sn.a
		});
		var dn = n(426);
		n.d(t, "setYear",
		function() {
			return dn.a
		});
		var cn = n(57);
		n.d(t, "startOfDay",
		function() {
			return cn.a
		});
		var ln = n(427);
		n.d(t, "startOfDecade",
		function() {
			return ln.a
		});
		var mn = n(176);
		n.d(t, "startOfHour",
		function() {
			return mn.a
		});
		var fn = n(25);
		n.d(t, "startOfISOWeek",
		function() {
			return fn.a
		});
		var hn = n(46);
		n.d(t, "startOfISOWeekYear",
		function() {
			return hn.a
		});
		var pn = n(179);
		n.d(t, "startOfMinute",
		function() {
			return pn.a
		});
		var gn = n(62);
		n.d(t, "startOfMonth",
		function() {
			return gn.a
		});
		var vn = n(87);
		n.d(t, "startOfQuarter",
		function() {
			return vn.a
		});
		var wn = n(183);
		n.d(t, "startOfSecond",
		function() {
			return wn.a
		});
		var bn = n(428);
		n.d(t, "startOfToday",
		function() {
			return bn.a
		});
		var yn = n(429);
		n.d(t, "startOfTomorrow",
		function() {
			return yn.a
		});
		var Mn = n(22);
		n.d(t, "startOfWeek",
		function() {
			return Mn.a
		});
		var kn = n(93);
		n.d(t, "startOfWeekYear",
		function() {
			return kn.a
		});
		var Pn = n(90);
		n.d(t, "startOfYear",
		function() {
			return Pn.a
		});
		var Wn = n(430);
		n.d(t, "startOfYesterday",
		function() {
			return Wn.a
		});
		var xn = n(172);
		n.d(t, "sub",
		function() {
			return xn.a
		});
		var jn = n(431);
		n.d(t, "subBusinessDays",
		function() {
			return jn.a
		});
		var Tn = n(94);
		n.d(t, "subDays",
		function() {
			return Tn.a
		});
		var Sn = n(432);
		n.d(t, "subHours",
		function() {
			return Sn.a
		});
		var Cn = n(145);
		n.d(t, "subISOWeekYears",
		function() {
			return Cn.a
		});
		var zn = n(49);
		n.d(t, "subMilliseconds",
		function() {
			return zn.a
		});
		var Nn = n(433);
		n.d(t, "subMinutes",
		function() {
			return Nn.a
		});
		var Dn = n(173);
		n.d(t, "subMonths",
		function() {
			return Dn.a
		});
		var En = n(434);
		n.d(t, "subQuarters",
		function() {
			return En.a
		});
		var Hn = n(435);
		n.d(t, "subSeconds",
		function() {
			return Hn.a
		});
		var An = n(436);
		n.d(t, "subWeeks",
		function() {
			return An.a
		});
		var _n = n(437);
		n.d(t, "subYears",
		function() {
			return _n.a
		});
		var On = n(1);
		n.d(t, "toDate",
		function() {
			return On.a
		});
		var Xn = n(438);
		n.d(t, "maxTime",
		function() {
			return Xn.a
		}),
		n.d(t, "minTime",
		function() {
			return Xn.b
		})
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (u.a(2, arguments), !t || "object" != typeof t) return new Date(NaN);
			var n = "years" in t ? s.a(t.years) : 0,
			a = "months" in t ? s.a(t.months) : 0,
			d = "weeks" in t ? s.a(t.weeks) : 0,
			c = "days" in t ? s.a(t.days) : 0,
			l = "hours" in t ? s.a(t.hours) : 0,
			m = "minutes" in t ? s.a(t.minutes) : 0,
			f = "seconds" in t ? s.a(t.seconds) : 0,
			h = o.a(e),
			p = a || n ? r.a(h, a + 12 * n) : h,
			g = c || d ? i.a(p, c + 7 * d) : p,
			v = m + 60 * l,
			w = f + 60 * v,
			b = 1e3 * w;
			return new Date(g.getTime() + b)
		}
		t.a = a;
		var i = n(21),
		r = n(44),
		o = n(1),
		u = n(0),
		s = n(6)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
			r.a(2, arguments);
			var a = e || {},
			o = t || {},
			u = i.a(a.start).getTime(),
			s = i.a(a.end).getTime(),
			d = i.a(o.start).getTime(),
			c = i.a(o.end).getTime();
			if (! (u <= s && d <= c)) throw new RangeError("Invalid interval");
			return n.inclusive ? u <= c && d <= s: u < c && d < s
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e);
			if (isNaN(n)) return NaN;
			var a, o = n.getTime();
			a = null == t ? [] : "function" == typeof t.forEach ? t: Array.prototype.slice.call(t);
			var u, s;
			return a.forEach(function(e, t) {
				var n = i.a(e);
				if (isNaN(n)) return u = NaN,
				void(s = NaN);
				var a = Math.abs(o - n.getTime()); (null == u || a < s) && (u = t, s = a)
			}),
			u
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e);
			if (isNaN(n)) return new Date(NaN);
			var a, o = n.getTime();
			a = null == t ? [] : "function" == typeof t.forEach ? t: Array.prototype.slice.call(t);
			var u, s;
			return a.forEach(function(e) {
				var t = i.a(e);
				if (isNaN(t)) return u = new Date(NaN),
				void(s = NaN);
				var n = Math.abs(o - t.getTime()); (null == u || n < s) && (u = t, s = n)
			}),
			u
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t),
			o = n.getTime() - a.getTime();
			return o > 0 ? -1 : o < 0 ? 1 : o
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			l.a(2, arguments);
			var n = o.a(e),
			a = o.a(t);
			if (!i.a(n) || !i.a(a)) return new Date(NaN);
			var m = u.a(n, a),
			f = m < 0 ? -1 : 1,
			h = c.a(m / 7),
			p = 5 * h;
			for (a = s.a(a, 7 * h); ! d.a(n, a);) p += r.a(a) ? 0 : f,
			a = s.a(a, f);
			return 0 === p ? 0 : p
		}
		t.a = a;
		var i = n(15),
		r = n(56),
		o = n(1),
		u = n(26),
		s = n(21),
		d = n(47),
		c = n(6),
		l = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = r.a(t),
			s = n.getTime() - i.a(n),
			d = a.getTime() - i.a(a);
			return Math.round((s - d) / u)
		}
		t.a = a;
		var i = n(19),
		r = n(25),
		o = n(0),
		u = 6048e5
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = r.a(t);
			return 4 * (n.getFullYear() - a.getFullYear()) + (i.a(n) - i.a(a))
		}
		t.a = a;
		var i = n(141),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			s.a(2, arguments);
			var n = i.a(e),
			a = i.a(t),
			d = o.a(n, a),
			c = Math.abs(r.a(n, a));
			n = u.a(n, d * c);
			var l = o.a(n, a) === -d,
			m = d * (c - l);
			return 0 === m ? 0 : m
		}
		t.a = a;
		var i = n(1),
		r = n(139),
		o = n(27),
		u = n(145),
		s = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e, t) / 3;
			return n > 0 ? Math.floor(n) : Math.ceil(n)
		}
		t.a = a;
		var i = n(60),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e, t) / 7;
			return n > 0 ? Math.floor(n) : Math.ceil(n)
		}
		t.a = a;
		var i = n(86),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(1, arguments);
			var n = e || {},
			a = r.a(n.start),
			u = r.a(n.end),
			s = a.getTime(),
			d = u.getTime();
			if (! (s <= d)) throw new RangeError("Invalid interval");
			var c = [],
			l = a;
			l.setMinutes(0, 0, 0);
			var m = t && "step" in t ? Number(t.step) : 1;
			if (m < 1 || isNaN(m)) throw new RangeError("`options.step` must be a number greater than 1");
			for (; l.getTime() <= d;) c.push(r.a(l)),
			l = i.a(l, m);
			return c
		}
		t.a = a;
		var i = n(84),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = e || {},
			n = i.a(t.start),
			a = i.a(t.end),
			o = a.getTime();
			if (! (n.getTime() <= o)) throw new RangeError("Invalid interval");
			var u = [],
			s = n;
			for (s.setHours(0, 0, 0, 0), s.setDate(1); s.getTime() <= o;) u.push(i.a(s)),
			s.setMonth(s.getMonth() + 1);
			return u
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			u.a(1, arguments);
			var t = e || {},
			n = o.a(t.start),
			a = o.a(t.end),
			s = a.getTime();
			if (! (n.getTime() <= s)) throw new RangeError("Invalid interval");
			var d = r.a(n);
			s = r.a(a).getTime();
			for (var c = [], l = d; l.getTime() <= s;) c.push(o.a(l)),
			l = i.a(l, 1);
			return c
		}
		t.a = a;
		var i = n(85),
		r = n(87),
		o = n(1),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(1, arguments);
			var n = e || {},
			a = o.a(n.start),
			s = o.a(n.end),
			d = s.getTime();
			if (! (a.getTime() <= d)) throw new RangeError("Invalid interval");
			var c = r.a(a, t),
			l = r.a(s, t);
			c.setHours(15),
			l.setHours(15),
			d = l.getTime();
			for (var m = [], f = c; f.getTime() <= d;) f.setHours(0),
			m.push(o.a(f)),
			f = i.a(f, 1),
			f.setHours(15);
			return m
		}
		t.a = a;
		var i = n(58),
		r = n(22),
		o = n(1),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			u.a(1, arguments);
			var t = r.a(e);
			if (isNaN(t)) throw new RangeError("The passed date is invalid");
			var n = o.a(e);
			return i.a({
				start: t,
				end: n
			})
		}
		t.a = a;
		var i = n(88),
		r = n(62),
		o = n(89),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			u.a(1, arguments);
			var t = r.a(e);
			if (isNaN(t)) throw new RangeError("The passed date is invalid");
			var n = o.a(e);
			return i.a({
				start: t,
				end: n
			})
		}
		t.a = a;
		var i = n(88),
		r = n(90),
		o = n(149),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = e || {},
			n = i.a(t.start),
			a = i.a(t.end),
			o = a.getTime();
			if (! (n.getTime() <= o)) throw new RangeError("Invalid interval");
			var u = [],
			s = n;
			for (s.setHours(0, 0, 0, 0), s.setMonth(0, 1); s.getTime() <= o;) u.push(i.a(s)),
			s.setFullYear(s.getFullYear() + 1);
			return u
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear(),
			a = 9 + 10 * Math.floor(n / 10);
			return t.setFullYear(a, 11, 31),
			t.setHours(23, 59, 59, 999),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setMinutes(59, 59, 999),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e, {
				weekStartsOn: 1
			})
		}
		t.a = a;
		var i = n(150),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = i.a(e),
			n = new Date(0);
			n.setFullYear(t + 1, 0, 4),
			n.setHours(0, 0, 0, 0);
			var a = r.a(n);
			return a.setMilliseconds(a.getMilliseconds() - 1),
			a
		}
		t.a = a;
		var i = n(34),
		r = n(25),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setSeconds(59, 999),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getMonth(),
			a = n - n % 3 + 3;
			return t.setMonth(a, 0),
			t.setHours(23, 59, 59, 999),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e);
			return t.setMilliseconds(999),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a() {
			return i.a(Date.now())
		}
		t.a = a;
		var i = n(91)
	},
	function(e, t, n) {
		"use strict";
		function a() {
			var e = new Date,
			t = e.getFullYear(),
			n = e.getMonth(),
			a = e.getDate(),
			i = new Date(0);
			return i.setFullYear(t, n, a + 1),
			i.setHours(23, 59, 59, 999),
			i
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a() {
			var e = new Date,
			t = e.getFullYear(),
			n = e.getMonth(),
			a = e.getDate(),
			i = new Date(0);
			return i.setFullYear(t, n, a - 1),
			i.setHours(23, 59, 59, 999),
			i
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = e > 0 ? "-": "+",
			a = Math.abs(e),
			i = Math.floor(a / 60),
			r = a % 60;
			if (0 === r) return n + String(i);
			var o = t || "";
			return n + String(i) + o + m.a(r, 2)
		}
		function i(e, t) {
			if (e % 60 == 0) {
				return (e > 0 ? "-": "+") + m.a(Math.abs(e) / 60, 2)
			}
			return r(e, t)
		}
		function r(e, t) {
			var n = t || "",
			a = e > 0 ? "-": "+",
			i = Math.abs(e);
			return a + m.a(Math.floor(i / 60), 2) + n + m.a(i % 60, 2)
		}
		var o = n(152),
		u = n(341),
		s = n(153),
		d = n(154),
		c = n(155),
		l = n(92),
		m = n(38),
		f = {
			am: "am",
			pm: "pm",
			midnight: "midnight",
			noon: "noon",
			morning: "morning",
			afternoon: "afternoon",
			evening: "evening",
			night: "night"
		},
		h = {
			G: function(e, t, n) {
				var a = e.getUTCFullYear() > 0 ? 1 : 0;
				switch (t) {
				case "G":
				case "GG":
				case "GGG":
					return n.era(a, {
						width: "abbreviated"
					});
				case "GGGGG":
					return n.era(a, {
						width: "narrow"
					});
				case "GGGG":
				default:
					return n.era(a, {
						width: "wide"
					})
				}
			},
			y: function(e, t, n) {
				if ("yo" === t) {
					var a = e.getUTCFullYear(),
					i = a > 0 ? a: 1 - a;
					return n.ordinalNumber(i, {
						unit: "year"
					})
				}
				return o.a.y(e, t)
			},
			Y: function(e, t, n, a) {
				var i = l.a(e, a),
				r = i > 0 ? i: 1 - i;
				if ("YY" === t) {
					var o = r % 100;
					return m.a(o, 2)
				}
				return "Yo" === t ? n.ordinalNumber(r, {
					unit: "year"
				}) : m.a(r, t.length)
			},
			R: function(e, t) {
				var n = d.a(e);
				return m.a(n, t.length)
			},
			u: function(e, t) {
				var n = e.getUTCFullYear();
				return m.a(n, t.length)
			},
			Q: function(e, t, n) {
				var a = Math.ceil((e.getUTCMonth() + 1) / 3);
				switch (t) {
				case "Q":
					return String(a);
				case "QQ":
					return m.a(a, 2);
				case "Qo":
					return n.ordinalNumber(a, {
						unit: "quarter"
					});
				case "QQQ":
					return n.quarter(a, {
						width: "abbreviated",
						context: "formatting"
					});
				case "QQQQQ":
					return n.quarter(a, {
						width: "narrow",
						context: "formatting"
					});
				case "QQQQ":
				default:
					return n.quarter(a, {
						width: "wide",
						context: "formatting"
					})
				}
			},
			q: function(e, t, n) {
				var a = Math.ceil((e.getUTCMonth() + 1) / 3);
				switch (t) {
				case "q":
					return String(a);
				case "qq":
					return m.a(a, 2);
				case "qo":
					return n.ordinalNumber(a, {
						unit: "quarter"
					});
				case "qqq":
					return n.quarter(a, {
						width: "abbreviated",
						context: "standalone"
					});
				case "qqqqq":
					return n.quarter(a, {
						width: "narrow",
						context: "standalone"
					});
				case "qqqq":
				default:
					return n.quarter(a, {
						width: "wide",
						context: "standalone"
					})
				}
			},
			M: function(e, t, n) {
				var a = e.getUTCMonth();
				switch (t) {
				case "M":
				case "MM":
					return o.a.M(e, t);
				case "Mo":
					return n.ordinalNumber(a + 1, {
						unit: "month"
					});
				case "MMM":
					return n.month(a, {
						width: "abbreviated",
						context: "formatting"
					});
				case "MMMMM":
					return n.month(a, {
						width: "narrow",
						context: "formatting"
					});
				case "MMMM":
				default:
					return n.month(a, {
						width: "wide",
						context: "formatting"
					})
				}
			},
			L: function(e, t, n) {
				var a = e.getUTCMonth();
				switch (t) {
				case "L":
					return String(a + 1);
				case "LL":
					return m.a(a + 1, 2);
				case "Lo":
					return n.ordinalNumber(a + 1, {
						unit: "month"
					});
				case "LLL":
					return n.month(a, {
						width: "abbreviated",
						context: "standalone"
					});
				case "LLLLL":
					return n.month(a, {
						width: "narrow",
						context: "standalone"
					});
				case "LLLL":
				default:
					return n.month(a, {
						width: "wide",
						context: "standalone"
					})
				}
			},
			w: function(e, t, n, a) {
				var i = c.a(e, a);
				return "wo" === t ? n.ordinalNumber(i, {
					unit: "week"
				}) : m.a(i, t.length)
			},
			I: function(e, t, n) {
				var a = s.a(e);
				return "Io" === t ? n.ordinalNumber(a, {
					unit: "week"
				}) : m.a(a, t.length)
			},
			d: function(e, t, n) {
				return "do" === t ? n.ordinalNumber(e.getUTCDate(), {
					unit: "date"
				}) : o.a.d(e, t)
			},
			D: function(e, t, n) {
				var a = u.a(e);
				return "Do" === t ? n.ordinalNumber(a, {
					unit: "dayOfYear"
				}) : m.a(a, t.length)
			},
			E: function(e, t, n) {
				var a = e.getUTCDay();
				switch (t) {
				case "E":
				case "EE":
				case "EEE":
					return n.day(a, {
						width: "abbreviated",
						context: "formatting"
					});
				case "EEEEE":
					return n.day(a, {
						width: "narrow",
						context: "formatting"
					});
				case "EEEEEE":
					return n.day(a, {
						width: "short",
						context: "formatting"
					});
				case "EEEE":
				default:
					return n.day(a, {
						width: "wide",
						context: "formatting"
					})
				}
			},
			e: function(e, t, n, a) {
				var i = e.getUTCDay(),
				r = (i - a.weekStartsOn + 8) % 7 || 7;
				switch (t) {
				case "e":
					return String(r);
				case "ee":
					return m.a(r, 2);
				case "eo":
					return n.ordinalNumber(r, {
						unit: "day"
					});
				case "eee":
					return n.day(i, {
						width: "abbreviated",
						context: "formatting"
					});
				case "eeeee":
					return n.day(i, {
						width: "narrow",
						context: "formatting"
					});
				case "eeeeee":
					return n.day(i, {
						width: "short",
						context: "formatting"
					});
				case "eeee":
				default:
					return n.day(i, {
						width: "wide",
						context: "formatting"
					})
				}
			},
			c: function(e, t, n, a) {
				var i = e.getUTCDay(),
				r = (i - a.weekStartsOn + 8) % 7 || 7;
				switch (t) {
				case "c":
					return String(r);
				case "cc":
					return m.a(r, t.length);
				case "co":
					return n.ordinalNumber(r, {
						unit: "day"
					});
				case "ccc":
					return n.day(i, {
						width: "abbreviated",
						context: "standalone"
					});
				case "ccccc":
					return n.day(i, {
						width: "narrow",
						context: "standalone"
					});
				case "cccccc":
					return n.day(i, {
						width: "short",
						context: "standalone"
					});
				case "cccc":
				default:
					return n.day(i, {
						width: "wide",
						context: "standalone"
					})
				}
			},
			i: function(e, t, n) {
				var a = e.getUTCDay(),
				i = 0 === a ? 7 : a;
				switch (t) {
				case "i":
					return String(i);
				case "ii":
					return m.a(i, t.length);
				case "io":
					return n.ordinalNumber(i, {
						unit: "day"
					});
				case "iii":
					return n.day(a, {
						width: "abbreviated",
						context: "formatting"
					});
				case "iiiii":
					return n.day(a, {
						width: "narrow",
						context: "formatting"
					});
				case "iiiiii":
					return n.day(a, {
						width: "short",
						context: "formatting"
					});
				case "iiii":
				default:
					return n.day(a, {
						width: "wide",
						context: "formatting"
					})
				}
			},
			a: function(e, t, n) {
				var a = e.getUTCHours(),
				i = a / 12 >= 1 ? "pm": "am";
				switch (t) {
				case "a":
				case "aa":
				case "aaa":
					return n.dayPeriod(i, {
						width: "abbreviated",
						context: "formatting"
					});
				case "aaaaa":
					return n.dayPeriod(i, {
						width: "narrow",
						context: "formatting"
					});
				case "aaaa":
				default:
					return n.dayPeriod(i, {
						width: "wide",
						context: "formatting"
					})
				}
			},
			b: function(e, t, n) {
				var a, i = e.getUTCHours();
				switch (a = 12 === i ? f.noon: 0 === i ? f.midnight: i / 12 >= 1 ? "pm": "am", t) {
				case "b":
				case "bb":
				case "bbb":
					return n.dayPeriod(a, {
						width: "abbreviated",
						context: "formatting"
					});
				case "bbbbb":
					return n.dayPeriod(a, {
						width: "narrow",
						context: "formatting"
					});
				case "bbbb":
				default:
					return n.dayPeriod(a, {
						width: "wide",
						context: "formatting"
					})
				}
			},
			B: function(e, t, n) {
				var a, i = e.getUTCHours();
				switch (a = i >= 17 ? f.evening: i >= 12 ? f.afternoon: i >= 4 ? f.morning: f.night, t) {
				case "B":
				case "BB":
				case "BBB":
					return n.dayPeriod(a, {
						width: "abbreviated",
						context: "formatting"
					});
				case "BBBBB":
					return n.dayPeriod(a, {
						width: "narrow",
						context: "formatting"
					});
				case "BBBB":
				default:
					return n.dayPeriod(a, {
						width: "wide",
						context: "formatting"
					})
				}
			},
			h: function(e, t, n) {
				if ("ho" === t) {
					var a = e.getUTCHours() % 12;
					return 0 === a && (a = 12),
					n.ordinalNumber(a, {
						unit: "hour"
					})
				}
				return o.a.h(e, t)
			},
			H: function(e, t, n) {
				return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), {
					unit: "hour"
				}) : o.a.H(e, t)
			},
			K: function(e, t, n) {
				var a = e.getUTCHours() % 12;
				return "Ko" === t ? n.ordinalNumber(a, {
					unit: "hour"
				}) : m.a(a, t.length)
			},
			k: function(e, t, n) {
				var a = e.getUTCHours();
				return 0 === a && (a = 24),
				"ko" === t ? n.ordinalNumber(a, {
					unit: "hour"
				}) : m.a(a, t.length)
			},
			m: function(e, t, n) {
				return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), {
					unit: "minute"
				}) : o.a.m(e, t)
			},
			s: function(e, t, n) {
				return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), {
					unit: "second"
				}) : o.a.s(e, t)
			},
			S: function(e, t) {
				return o.a.S(e, t)
			},
			X: function(e, t, n, a) {
				var o = a._originalDate || e,
				u = o.getTimezoneOffset();
				if (0 === u) return "Z";
				switch (t) {
				case "X":
					return i(u);
				case "XXXX":
				case "XX":
					return r(u);
				case "XXXXX":
				case "XXX":
				default:
					return r(u, ":")
				}
			},
			x: function(e, t, n, a) {
				var o = a._originalDate || e,
				u = o.getTimezoneOffset();
				switch (t) {
				case "x":
					return i(u);
				case "xxxx":
				case "xx":
					return r(u);
				case "xxxxx":
				case "xxx":
				default:
					return r(u, ":")
				}
			},
			O: function(e, t, n, i) {
				var o = i._originalDate || e,
				u = o.getTimezoneOffset();
				switch (t) {
				case "O":
				case "OO":
				case "OOO":
					return "GMT" + a(u, ":");
				case "OOOO":
				default:
					return "GMT" + r(u, ":")
				}
			},
			z: function(e, t, n, i) {
				var o = i._originalDate || e,
				u = o.getTimezoneOffset();
				switch (t) {
				case "z":
				case "zz":
				case "zzz":
					return "GMT" + a(u, ":");
				case "zzzz":
				default:
					return "GMT" + r(u, ":")
				}
			},
			t: function(e, t, n, a) {
				var i = a._originalDate || e,
				r = Math.floor(i.getTime() / 1e3);
				return m.a(r, t.length)
			},
			T: function(e, t, n, a) {
				var i = a._originalDate || e,
				r = i.getTime();
				return m.a(r, t.length)
			}
		};
		t.a = h
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getTime();
			t.setUTCMonth(0, 1),
			t.setUTCHours(0, 0, 0, 0);
			var a = t.getTime(),
			u = n - a;
			return Math.floor(u / o) + 1
		}
		t.a = a;
		var i = n(1),
		r = n(0),
		o = 864e5
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = i.a(e),
			n = new Date(0);
			return n.setUTCFullYear(t, 0, 4),
			n.setUTCHours(0, 0, 0, 0),
			r.a(n)
		}
		t.a = a;
		var i = n(154),
		r = n(63),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(1, arguments);
			var n = t || {},
			a = n.locale,
			s = a && a.options && a.options.firstWeekContainsDate,
			d = null == s ? 1 : i.a(s),
			c = null == n.firstWeekContainsDate ? d: i.a(n.firstWeekContainsDate),
			l = r.a(e, t),
			m = new Date(0);
			return m.setUTCFullYear(l, 0, c),
			m.setUTCHours(0, 0, 0, 0),
			o.a(m, t)
		}
		t.a = a;
		var i = n(6),
		r = n(92),
		o = n(50),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return r.a(1, arguments),
			i.a(e, Date.now(), t)
		}
		t.a = a;
		var i = n(158),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return r.a(1, arguments),
			i.a(e, Date.now(), t)
		}
		t.a = a;
		var i = n(161),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (arguments.length < 1) throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
			var n = t.format || r,
			a = t.locale || i.a,
			o = t.zero || !1,
			u = t.delimiter || " ";
			return n.reduce(function(t, n) {
				var i = "x".concat(n.replace(/(^.)/,
				function(e) {
					return e.toUpperCase()
				}));
				return "number" == typeof e[n] && (o || e[n]) ? t.concat(a.formatDistance(i, e[n])) : t
			},
			[]).join(u)
		}
		t.a = a;
		var i = n(28),
		r = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"]
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (arguments.length < 1) throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
			var n = i.a(e);
			if (!r.a(n)) throw new RangeError("Invalid time value");
			var a = t || {},
			u = null == a.format ? "extended": String(a.format),
			s = null == a.representation ? "complete": String(a.representation);
			if ("extended" !== u && "basic" !== u) throw new RangeError("format must be 'extended' or 'basic'");
			if ("date" !== s && "time" !== s && "complete" !== s) throw new RangeError("representation must be 'date', 'time', or 'complete'");
			var d = "",
			c = "",
			l = "extended" === u ? "-": "",
			m = "extended" === u ? ":": "";
			if ("time" !== s) {
				var f = o.a(n.getDate(), 2),
				h = o.a(n.getMonth() + 1, 2);
				d = "".concat(o.a(n.getFullYear(), 4)).concat(l).concat(h).concat(l).concat(f)
			}
			if ("date" !== s) {
				var p = n.getTimezoneOffset();
				if (0 !== p) {
					var g = Math.abs(p),
					v = o.a(Math.floor(g / 60), 2),
					w = o.a(g % 60, 2);
					c = "".concat(p < 0 ? "+": "-").concat(v, ":").concat(w)
				} else c = "Z";
				var b = o.a(n.getHours(), 2),
				y = o.a(n.getMinutes(), 2),
				M = o.a(n.getSeconds(), 2),
				k = "" === d ? "": "T",
				P = [b, y, M].join(m);
				d = "".concat(d).concat(k).concat(P).concat(c)
			}
			return d
		}
		t.a = a;
		var i = n(1),
		r = n(15),
		o = n(38)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (arguments.length < 1) throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
			var n = i.a(e);
			if (!r.a(n)) throw new RangeError("Invalid time value");
			var a = t || {},
			u = null == a.format ? "extended": String(a.format),
			s = null == a.representation ? "complete": String(a.representation);
			if ("extended" !== u && "basic" !== u) throw new RangeError("format must be 'extended' or 'basic'");
			if ("date" !== s && "time" !== s && "complete" !== s) throw new RangeError("representation must be 'date', 'time', or 'complete'");
			var d = "",
			c = "extended" === u ? "-": "",
			l = "extended" === u ? ":": "";
			if ("time" !== s) {
				var m = o.a(n.getDate(), 2),
				f = o.a(n.getMonth() + 1, 2);
				d = "".concat(o.a(n.getFullYear(), 4)).concat(c).concat(f).concat(c).concat(m)
			}
			if ("date" !== s) {
				var h = o.a(n.getHours(), 2),
				p = o.a(n.getMinutes(), 2),
				g = o.a(n.getSeconds(), 2),
				v = "" === d ? "": " ";
				d = "".concat(d).concat(v).concat(h).concat(l).concat(p).concat(l).concat(g)
			}
			return d
		}
		t.a = a;
		var i = n(1),
		r = n(15),
		o = n(38)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			if (i.a(1, arguments), "object" != typeof e) throw new Error("Duration must be an object");
			var t = e.years,
			n = void 0 === t ? 0 : t,
			a = e.months,
			r = void 0 === a ? 0 : a,
			o = e.days,
			u = void 0 === o ? 0 : o,
			s = e.hours,
			d = void 0 === s ? 0 : s,
			c = e.minutes,
			l = void 0 === c ? 0 : c,
			m = e.seconds,
			f = void 0 === m ? 0 : m;
			return "P".concat(n, "Y").concat(r, "M").concat(u, "DT").concat(d, "H").concat(l, "M").concat(f, "S")
		}
		t.a = a;
		var i = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (arguments.length < 1) throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
			var n = i.a(e);
			if (!r.a(n)) throw new RangeError("Invalid time value");
			var a = t || {},
			s = null == a.fractionDigits ? 0 : u.a(a.fractionDigits);
			if (! (s >= 0 && s <= 3)) throw new RangeError("fractionDigits must be between 0 and 3 inclusively");
			var d = o.a(n.getDate(), 2),
			c = o.a(n.getMonth() + 1, 2),
			l = n.getFullYear(),
			m = o.a(n.getHours(), 2),
			f = o.a(n.getMinutes(), 2),
			h = o.a(n.getSeconds(), 2),
			p = "";
			if (s > 0) {
				var g = n.getMilliseconds(),
				v = Math.floor(g * Math.pow(10, s - 3));
				p = "." + o.a(v, s)
			}
			var w = "",
			b = n.getTimezoneOffset();
			if (0 !== b) {
				var y = Math.abs(b),
				M = o.a(u.a(y / 60), 2),
				k = o.a(y % 60, 2);
				w = "".concat(b < 0 ? "+": "-").concat(M, ":").concat(k)
			} else w = "Z";
			return "".concat(l, "-").concat(c, "-").concat(d, "T").concat(m, ":").concat(f, ":").concat(h).concat(p).concat(w)
		}
		t.a = a;
		var i = n(1),
		r = n(15),
		o = n(38),
		u = n(6)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			if (arguments.length < 1) throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
			var t = i.a(e);
			if (!r.a(t)) throw new RangeError("Invalid time value");
			var n = u[t.getUTCDay()],
			a = o.a(t.getUTCDate(), 2),
			d = s[t.getUTCMonth()],
			c = t.getUTCFullYear(),
			l = o.a(t.getUTCHours(), 2),
			m = o.a(t.getUTCMinutes(), 2),
			f = o.a(t.getUTCSeconds(), 2);
			return "".concat(n, ", ").concat(a, " ").concat(d, " ").concat(c, " ").concat(l, ":").concat(m, ":").concat(f, " GMT")
		}
		t.a = a;
		var i = n(1),
		r = n(15),
		o = n(38),
		u = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			c.a(2, arguments);
			var a = s.a(e),
			l = s.a(t),
			m = n || {},
			f = m.locale || o.a;
			if (!f.localize) throw new RangeError("locale must contain localize property");
			if (!f.formatLong) throw new RangeError("locale must contain formatLong property");
			if (!f.formatRelative) throw new RangeError("locale must contain formatRelative property");
			var h = i.a(a, l);
			if (isNaN(h)) throw new RangeError("Invalid time value");
			var p;
			p = h < -6 ? "other": h < -1 ? "lastWeek": h < 0 ? "yesterday": h < 1 ? "today": h < 2 ? "tomorrow": h < 7 ? "nextWeek": "other";
			var g = u.a(a, d.a(a)),
			v = u.a(l, d.a(l)),
			w = f.formatRelative(p, g, v, m);
			return r.a(a, w, m)
		}
		t.a = a;
		var i = n(26),
		r = n(151),
		o = n(28),
		u = n(49),
		s = n(1),
		d = n(19),
		c = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = r.a(e);
			return i.a(1e3 * t)
		}
		t.a = a;
		var i = n(1),
		r = n(6),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			u.a(1, arguments);
			var t = i.a(e);
			return o.a(t, r.a(t)) + 1
		}
		t.a = a;
		var i = n(1),
		r = n(90),
		o = n(26),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = i.a(e);
			return isNaN(t) ? NaN: r.a(t) ? 366 : 365
		}
		t.a = a;
		var i = n(1),
		r = n(165),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear();
			return 10 * Math.floor(n / 10)
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getHours()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = i.a(e),
			n = i.a(r.a(t, 60)),
			a = n.valueOf() - t.valueOf();
			return Math.round(a / u)
		}
		t.a = a;
		var i = n(46),
		r = n(58),
		o = n(0),
		u = 6048e5
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getMilliseconds()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getMinutes()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getMonth()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = e || {},
			a = t || {},
			u = i.a(n.start).getTime(),
			s = i.a(n.end).getTime(),
			d = i.a(a.start).getTime(),
			c = i.a(a.end).getTime();
			if (! (u <= s && d <= c)) throw new RangeError("Invalid interval");
			if (! (u < c && d < s)) return 0;
			var l = d < u ? u: d,
			m = c > s ? s: c,
			f = m - l;
			return Math.ceil(f / o)
		}
		t.a = a;
		var i = n(1),
		r = n(0),
		o = 864e5
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getSeconds()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			Math.floor(i.a(e) / 1e3)
		}
		t.a = a;
		var i = n(168),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			s.a(1, arguments);
			var n = t || {},
			a = n.locale,
			d = a && a.options && a.options.weekStartsOn,
			c = null == d ? 0 : u.a(d),
			l = null == n.weekStartsOn ? c: u.a(n.weekStartsOn);
			if (! (l >= 0 && l <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
			var m = i.a(e);
			if (isNaN(m)) return m;
			var f = r.a(o.a(e)),
			h = 0;
			h = f >= l ? l + 7 - f: l - f;
			var p = 1;
			if (m > h) {
				var g = m - h;
				p += Math.ceil(g / 7)
			}
			return p
		}
		t.a = a;
		var i = n(162),
		r = n(163),
		o = n(62),
		u = n(6),
		s = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return u.a(1, arguments),
			i.a(r.a(e), o.a(e), t) + 1
		}
		t.a = a;
		var i = n(142),
		r = n(171),
		o = n(62),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getFullYear()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = e.start,
			n = e.end;
			m.a(1, arguments);
			var a = f.a(t),
			p = f.a(n);
			if (!l.a(a)) throw new RangeError("Start Date is invalid");
			if (!l.a(p)) throw new RangeError("End Date is invalid");
			var g = {
				years: 0,
				months: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			},
			v = i.a(a, p);
			g.years = Math.abs(r.a(a, p));
			var w = h.a(a, {
				years: v * g.years
			});
			g.months = Math.abs(o.a(w, p));
			var b = h.a(w, {
				months: v * g.months
			});
			g.days = Math.abs(u.a(b, p));
			var y = h.a(b, {
				days: v * g.days
			});
			g.hours = Math.abs(s.a(y, p));
			var M = h.a(y, {
				hours: v * g.hours
			});
			g.minutes = Math.abs(d.a(M, p));
			var k = h.a(M, {
				minutes: v * g.minutes
			});
			return g.seconds = Math.abs(c.a(k, p)),
			g
		}
		t.a = a;
		var i = n(27),
		r = n(147),
		o = n(60),
		u = n(86),
		s = n(144),
		d = n(146),
		c = n(61),
		l = n(15),
		m = n(0),
		f = n(1),
		h = n(172)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() > a.getTime()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() < a.getTime()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return i.a(1, arguments),
			e instanceof Date || "object" == typeof e && "[object Date]" === Object.prototype.toString.call(e)
		}
		t.a = a;
		var i = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() === a.getTime()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			if (arguments.length < 3) throw new TypeError("3 argument required, but only " + arguments.length + " present");
			var a = new Date(e, t, n);
			return a.getFullYear() === e && a.getMonth() === t && a.getDate() === n
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			1 === i.a(e).getDate()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			5 === i.a(e).getDay()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getTime() > Date.now()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			u.a(1, arguments);
			var t = i.a(e);
			return r.a(t).getTime() === o.a(t).getTime()
		}
		t.a = a;
		var i = n(1),
		r = n(91),
		o = n(89),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			return o.a(2, arguments),
			r.a(i.a(e, t, new Date, n))
		}
		t.a = a;
		var i = n(174),
		r = n(15),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			var a = t.match(e);
			if (!a) return null;
			var i = parseInt(a[0], 10);
			return {
				value: n ? n(i) : i,
				rest: t.slice(a[0].length)
			}
		}
		function i(e, t) {
			var n = t.match(e);
			if (!n) return null;
			if ("Z" === n[0]) return {
				value: 0,
				rest: t.slice(1)
			};
			var a = "+" === n[1] ? 1 : -1,
			i = n[2] ? parseInt(n[2], 10) : 0,
			r = n[3] ? parseInt(n[3], 10) : 0,
			o = n[5] ? parseInt(n[5], 10) : 0;
			return {
				value: a * (i * w + r * b + o * y),
				rest: t.slice(n[0].length)
			}
		}
		function r(e, t) {
			return a(M.anyDigitsSigned, e, t)
		}
		function o(e, t, n) {
			switch (e) {
			case 1:
				return a(M.singleDigit, t, n);
			case 2:
				return a(M.twoDigits, t, n);
			case 3:
				return a(M.threeDigits, t, n);
			case 4:
				return a(M.fourDigits, t, n);
			default:
				return a(new RegExp("^\\d{1," + e + "}"), t, n)
			}
		}
		function u(e, t, n) {
			switch (e) {
			case 1:
				return a(M.singleDigitSigned, t, n);
			case 2:
				return a(M.twoDigitsSigned, t, n);
			case 3:
				return a(M.threeDigitsSigned, t, n);
			case 4:
				return a(M.fourDigitsSigned, t, n);
			default:
				return a(new RegExp("^-?\\d{1," + e + "}"), t, n)
			}
		}
		function s(e) {
			switch (e) {
			case "morning":
				return 4;
			case "evening":
				return 17;
			case "pm":
			case "noon":
			case "afternoon":
				return 12;
			case "am":
			case "midnight":
			case "night":
			default:
				return 0
			}
		}
		function d(e, t) {
			var n, a = t > 0,
			i = a ? t: 1 - t;
			if (i <= 50) n = e || 100;
			else {
				var r = i + 50;
				n = e + 100 * Math.floor(r / 100) - (e >= r % 100 ? 100 : 0)
			}
			return a ? n: 1 - n
		}
		function c(e) {
			return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
		}
		var l = n(92),
		m = n(380),
		f = n(381),
		h = n(382),
		p = n(383),
		g = n(63),
		v = n(50),
		w = 36e5,
		b = 6e4,
		y = 1e3,
		M = {
			month: /^(1[0-2]|0?\d)/,
			date: /^(3[0-1]|[0-2]?\d)/,
			dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
			week: /^(5[0-3]|[0-4]?\d)/,
			hour23h: /^(2[0-3]|[0-1]?\d)/,
			hour24h: /^(2[0-4]|[0-1]?\d)/,
			hour11h: /^(1[0-1]|0?\d)/,
			hour12h: /^(1[0-2]|0?\d)/,
			minute: /^[0-5]?\d/,
			second: /^[0-5]?\d/,
			singleDigit: /^\d/,
			twoDigits: /^\d{1,2}/,
			threeDigits: /^\d{1,3}/,
			fourDigits: /^\d{1,4}/,
			anyDigitsSigned: /^-?\d+/,
			singleDigitSigned: /^-?\d/,
			twoDigitsSigned: /^-?\d{1,2}/,
			threeDigitsSigned: /^-?\d{1,3}/,
			fourDigitsSigned: /^-?\d{1,4}/
		},
		k = {
			basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
			basic: /^([+-])(\d{2})(\d{2})|Z/,
			basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
			extended: /^([+-])(\d{2}):(\d{2})|Z/,
			extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
		},
		P = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		W = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		x = {
			G: {
				priority: 140,
				parse: function(e, t, n, a) {
					switch (t) {
					case "G":
					case "GG":
					case "GGG":
						return n.era(e, {
							width: "abbreviated"
						}) || n.era(e, {
							width: "narrow"
						});
					case "GGGGG":
						return n.era(e, {
							width: "narrow"
						});
					case "GGGG":
					default:
						return n.era(e, {
							width: "wide"
						}) || n.era(e, {
							width: "abbreviated"
						}) || n.era(e, {
							width: "narrow"
						})
					}
				},
				set: function(e, t, n, a) {
					return t.era = n,
					e.setUTCFullYear(n, 0, 1),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["R", "u", "t", "T"]
			},
			y: {
				priority: 130,
				parse: function(e, t, n, a) {
					var i = function(e) {
						return {
							year: e,
							isTwoDigitYear: "yy" === t
						}
					};
					switch (t) {
					case "y":
						return o(4, e, i);
					case "yo":
						return n.ordinalNumber(e, {
							unit: "year",
							valueCallback: i
						});
					default:
						return o(t.length, e, i)
					}
				},
				validate: function(e, t, n) {
					return t.isTwoDigitYear || t.year > 0
				},
				set: function(e, t, n, a) {
					var i = e.getUTCFullYear();
					if (n.isTwoDigitYear) {
						var r = d(n.year, i);
						return e.setUTCFullYear(r, 0, 1),
						e.setUTCHours(0, 0, 0, 0),
						e
					}
					var o = "era" in t && 1 !== t.era ? 1 - n.year: n.year;
					return e.setUTCFullYear(o, 0, 1),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]
			},
			Y: {
				priority: 130,
				parse: function(e, t, n, a) {
					var i = function(e) {
						return {
							year: e,
							isTwoDigitYear: "YY" === t
						}
					};
					switch (t) {
					case "Y":
						return o(4, e, i);
					case "Yo":
						return n.ordinalNumber(e, {
							unit: "year",
							valueCallback: i
						});
					default:
						return o(t.length, e, i)
					}
				},
				validate: function(e, t, n) {
					return t.isTwoDigitYear || t.year > 0
				},
				set: function(e, t, n, a) {
					var i = l.a(e, a);
					if (n.isTwoDigitYear) {
						var r = d(n.year, i);
						return e.setUTCFullYear(r, 0, a.firstWeekContainsDate),
						e.setUTCHours(0, 0, 0, 0),
						v.a(e, a)
					}
					var o = "era" in t && 1 !== t.era ? 1 - n.year: n.year;
					return e.setUTCFullYear(o, 0, a.firstWeekContainsDate),
					e.setUTCHours(0, 0, 0, 0),
					v.a(e, a)
				},
				incompatibleTokens: ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
			},
			R: {
				priority: 130,
				parse: function(e, t, n, a) {
					return "R" === t ? u(4, e) : u(t.length, e)
				},
				set: function(e, t, n, a) {
					var i = new Date(0);
					return i.setUTCFullYear(n, 0, 4),
					i.setUTCHours(0, 0, 0, 0),
					g.a(i)
				},
				incompatibleTokens: ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
			},
			u: {
				priority: 130,
				parse: function(e, t, n, a) {
					return "u" === t ? u(4, e) : u(t.length, e)
				},
				set: function(e, t, n, a) {
					return e.setUTCFullYear(n, 0, 1),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
			},
			Q: {
				priority: 120,
				parse: function(e, t, n, a) {
					switch (t) {
					case "Q":
					case "QQ":
						return o(t.length, e);
					case "Qo":
						return n.ordinalNumber(e, {
							unit: "quarter"
						});
					case "QQQ":
						return n.quarter(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.quarter(e, {
							width: "narrow",
							context: "formatting"
						});
					case "QQQQQ":
						return n.quarter(e, {
							width: "narrow",
							context: "formatting"
						});
					case "QQQQ":
					default:
						return n.quarter(e, {
							width: "wide",
							context: "formatting"
						}) || n.quarter(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.quarter(e, {
							width: "narrow",
							context: "formatting"
						})
					}
				},
				validate: function(e, t, n) {
					return t >= 1 && t <= 4
				},
				set: function(e, t, n, a) {
					return e.setUTCMonth(3 * (n - 1), 1),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
			},
			q: {
				priority: 120,
				parse: function(e, t, n, a) {
					switch (t) {
					case "q":
					case "qq":
						return o(t.length, e);
					case "qo":
						return n.ordinalNumber(e, {
							unit: "quarter"
						});
					case "qqq":
						return n.quarter(e, {
							width: "abbreviated",
							context: "standalone"
						}) || n.quarter(e, {
							width: "narrow",
							context: "standalone"
						});
					case "qqqqq":
						return n.quarter(e, {
							width: "narrow",
							context: "standalone"
						});
					case "qqqq":
					default:
						return n.quarter(e, {
							width: "wide",
							context: "standalone"
						}) || n.quarter(e, {
							width: "abbreviated",
							context: "standalone"
						}) || n.quarter(e, {
							width: "narrow",
							context: "standalone"
						})
					}
				},
				validate: function(e, t, n) {
					return t >= 1 && t <= 4
				},
				set: function(e, t, n, a) {
					return e.setUTCMonth(3 * (n - 1), 1),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
			},
			M: {
				priority: 110,
				parse: function(e, t, n, i) {
					var r = function(e) {
						return e - 1
					};
					switch (t) {
					case "M":
						return a(M.month, e, r);
					case "MM":
						return o(2, e, r);
					case "Mo":
						return n.ordinalNumber(e, {
							unit: "month",
							valueCallback: r
						});
					case "MMM":
						return n.month(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.month(e, {
							width: "narrow",
							context: "formatting"
						});
					case "MMMMM":
						return n.month(e, {
							width: "narrow",
							context: "formatting"
						});
					case "MMMM":
					default:
						return n.month(e, {
							width: "wide",
							context: "formatting"
						}) || n.month(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.month(e, {
							width: "narrow",
							context: "formatting"
						})
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 11
				},
				set: function(e, t, n, a) {
					return e.setUTCMonth(n, 1),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]
			},
			L: {
				priority: 110,
				parse: function(e, t, n, i) {
					var r = function(e) {
						return e - 1
					};
					switch (t) {
					case "L":
						return a(M.month, e, r);
					case "LL":
						return o(2, e, r);
					case "Lo":
						return n.ordinalNumber(e, {
							unit: "month",
							valueCallback: r
						});
					case "LLL":
						return n.month(e, {
							width: "abbreviated",
							context: "standalone"
						}) || n.month(e, {
							width: "narrow",
							context: "standalone"
						});
					case "LLLLL":
						return n.month(e, {
							width: "narrow",
							context: "standalone"
						});
					case "LLLL":
					default:
						return n.month(e, {
							width: "wide",
							context: "standalone"
						}) || n.month(e, {
							width: "abbreviated",
							context: "standalone"
						}) || n.month(e, {
							width: "narrow",
							context: "standalone"
						})
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 11
				},
				set: function(e, t, n, a) {
					return e.setUTCMonth(n, 1),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]
			},
			w: {
				priority: 100,
				parse: function(e, t, n, i) {
					switch (t) {
					case "w":
						return a(M.week, e);
					case "wo":
						return n.ordinalNumber(e, {
							unit: "week"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return t >= 1 && t <= 53
				},
				set: function(e, t, n, a) {
					return v.a(p.a(e, n, a), a)
				},
				incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
			},
			I: {
				priority: 100,
				parse: function(e, t, n, i) {
					switch (t) {
					case "I":
						return a(M.week, e);
					case "Io":
						return n.ordinalNumber(e, {
							unit: "week"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return t >= 1 && t <= 53
				},
				set: function(e, t, n, a) {
					return g.a(h.a(e, n, a), a)
				},
				incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
			},
			d: {
				priority: 90,
				subPriority: 1,
				parse: function(e, t, n, i) {
					switch (t) {
					case "d":
						return a(M.date, e);
					case "do":
						return n.ordinalNumber(e, {
							unit: "date"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					var a = e.getUTCFullYear(),
					i = c(a),
					r = e.getUTCMonth();
					return i ? t >= 1 && t <= W[r] : t >= 1 && t <= P[r]
				},
				set: function(e, t, n, a) {
					return e.setUTCDate(n),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
			},
			D: {
				priority: 90,
				subPriority: 1,
				parse: function(e, t, n, i) {
					switch (t) {
					case "D":
					case "DD":
						return a(M.dayOfYear, e);
					case "Do":
						return n.ordinalNumber(e, {
							unit: "date"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return c(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365
				},
				set: function(e, t, n, a) {
					return e.setUTCMonth(0, n),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
			},
			E: {
				priority: 90,
				parse: function(e, t, n, a) {
					switch (t) {
					case "E":
					case "EE":
					case "EEE":
						return n.day(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.day(e, {
							width: "short",
							context: "formatting"
						}) || n.day(e, {
							width: "narrow",
							context: "formatting"
						});
					case "EEEEE":
						return n.day(e, {
							width: "narrow",
							context: "formatting"
						});
					case "EEEEEE":
						return n.day(e, {
							width: "short",
							context: "formatting"
						}) || n.day(e, {
							width: "narrow",
							context: "formatting"
						});
					case "EEEE":
					default:
						return n.day(e, {
							width: "wide",
							context: "formatting"
						}) || n.day(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.day(e, {
							width: "short",
							context: "formatting"
						}) || n.day(e, {
							width: "narrow",
							context: "formatting"
						})
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 6
				},
				set: function(e, t, n, a) {
					return e = m.a(e, n, a),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["D", "i", "e", "c", "t", "T"]
			},
			e: {
				priority: 90,
				parse: function(e, t, n, a) {
					var i = function(e) {
						var t = 7 * Math.floor((e - 1) / 7);
						return (e + a.weekStartsOn + 6) % 7 + t
					};
					switch (t) {
					case "e":
					case "ee":
						return o(t.length, e, i);
					case "eo":
						return n.ordinalNumber(e, {
							unit: "day",
							valueCallback: i
						});
					case "eee":
						return n.day(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.day(e, {
							width: "short",
							context: "formatting"
						}) || n.day(e, {
							width: "narrow",
							context: "formatting"
						});
					case "eeeee":
						return n.day(e, {
							width: "narrow",
							context: "formatting"
						});
					case "eeeeee":
						return n.day(e, {
							width: "short",
							context: "formatting"
						}) || n.day(e, {
							width: "narrow",
							context: "formatting"
						});
					case "eeee":
					default:
						return n.day(e, {
							width: "wide",
							context: "formatting"
						}) || n.day(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.day(e, {
							width: "short",
							context: "formatting"
						}) || n.day(e, {
							width: "narrow",
							context: "formatting"
						})
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 6
				},
				set: function(e, t, n, a) {
					return e = m.a(e, n, a),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
			},
			c: {
				priority: 90,
				parse: function(e, t, n, a) {
					var i = function(e) {
						var t = 7 * Math.floor((e - 1) / 7);
						return (e + a.weekStartsOn + 6) % 7 + t
					};
					switch (t) {
					case "c":
					case "cc":
						return o(t.length, e, i);
					case "co":
						return n.ordinalNumber(e, {
							unit: "day",
							valueCallback: i
						});
					case "ccc":
						return n.day(e, {
							width: "abbreviated",
							context: "standalone"
						}) || n.day(e, {
							width: "short",
							context: "standalone"
						}) || n.day(e, {
							width: "narrow",
							context: "standalone"
						});
					case "ccccc":
						return n.day(e, {
							width: "narrow",
							context: "standalone"
						});
					case "cccccc":
						return n.day(e, {
							width: "short",
							context: "standalone"
						}) || n.day(e, {
							width: "narrow",
							context: "standalone"
						});
					case "cccc":
					default:
						return n.day(e, {
							width: "wide",
							context: "standalone"
						}) || n.day(e, {
							width: "abbreviated",
							context: "standalone"
						}) || n.day(e, {
							width: "short",
							context: "standalone"
						}) || n.day(e, {
							width: "narrow",
							context: "standalone"
						})
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 6
				},
				set: function(e, t, n, a) {
					return e = m.a(e, n, a),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
			},
			i: {
				priority: 90,
				parse: function(e, t, n, a) {
					var i = function(e) {
						return 0 === e ? 7 : e
					};
					switch (t) {
					case "i":
					case "ii":
						return o(t.length, e);
					case "io":
						return n.ordinalNumber(e, {
							unit: "day"
						});
					case "iii":
						return n.day(e, {
							width: "abbreviated",
							context: "formatting",
							valueCallback: i
						}) || n.day(e, {
							width: "short",
							context: "formatting",
							valueCallback: i
						}) || n.day(e, {
							width: "narrow",
							context: "formatting",
							valueCallback: i
						});
					case "iiiii":
						return n.day(e, {
							width: "narrow",
							context: "formatting",
							valueCallback: i
						});
					case "iiiiii":
						return n.day(e, {
							width: "short",
							context: "formatting",
							valueCallback: i
						}) || n.day(e, {
							width: "narrow",
							context: "formatting",
							valueCallback: i
						});
					case "iiii":
					default:
						return n.day(e, {
							width: "wide",
							context: "formatting",
							valueCallback: i
						}) || n.day(e, {
							width: "abbreviated",
							context: "formatting",
							valueCallback: i
						}) || n.day(e, {
							width: "short",
							context: "formatting",
							valueCallback: i
						}) || n.day(e, {
							width: "narrow",
							context: "formatting",
							valueCallback: i
						})
					}
				},
				validate: function(e, t, n) {
					return t >= 1 && t <= 7
				},
				set: function(e, t, n, a) {
					return e = f.a(e, n, a),
					e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
			},
			a: {
				priority: 80,
				parse: function(e, t, n, a) {
					switch (t) {
					case "a":
					case "aa":
					case "aaa":
						return n.dayPeriod(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						});
					case "aaaaa":
						return n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						});
					case "aaaa":
					default:
						return n.dayPeriod(e, {
							width: "wide",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						})
					}
				},
				set: function(e, t, n, a) {
					return e.setUTCHours(s(n), 0, 0, 0),
					e
				},
				incompatibleTokens: ["b", "B", "H", "K", "k", "t", "T"]
			},
			b: {
				priority: 80,
				parse: function(e, t, n, a) {
					switch (t) {
					case "b":
					case "bb":
					case "bbb":
						return n.dayPeriod(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						});
					case "bbbbb":
						return n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						});
					case "bbbb":
					default:
						return n.dayPeriod(e, {
							width: "wide",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						})
					}
				},
				set: function(e, t, n, a) {
					return e.setUTCHours(s(n), 0, 0, 0),
					e
				},
				incompatibleTokens: ["a", "B", "H", "K", "k", "t", "T"]
			},
			B: {
				priority: 80,
				parse: function(e, t, n, a) {
					switch (t) {
					case "B":
					case "BB":
					case "BBB":
						return n.dayPeriod(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						});
					case "BBBBB":
						return n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						});
					case "BBBB":
					default:
						return n.dayPeriod(e, {
							width: "wide",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "abbreviated",
							context: "formatting"
						}) || n.dayPeriod(e, {
							width: "narrow",
							context: "formatting"
						})
					}
				},
				set: function(e, t, n, a) {
					return e.setUTCHours(s(n), 0, 0, 0),
					e
				},
				incompatibleTokens: ["a", "b", "t", "T"]
			},
			h: {
				priority: 70,
				parse: function(e, t, n, i) {
					switch (t) {
					case "h":
						return a(M.hour12h, e);
					case "ho":
						return n.ordinalNumber(e, {
							unit: "hour"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return t >= 1 && t <= 12
				},
				set: function(e, t, n, a) {
					var i = e.getUTCHours() >= 12;
					return i && n < 12 ? e.setUTCHours(n + 12, 0, 0, 0) : i || 12 !== n ? e.setUTCHours(n, 0, 0, 0) : e.setUTCHours(0, 0, 0, 0),
					e
				},
				incompatibleTokens: ["H", "K", "k", "t", "T"]
			},
			H: {
				priority: 70,
				parse: function(e, t, n, i) {
					switch (t) {
					case "H":
						return a(M.hour23h, e);
					case "Ho":
						return n.ordinalNumber(e, {
							unit: "hour"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 23
				},
				set: function(e, t, n, a) {
					return e.setUTCHours(n, 0, 0, 0),
					e
				},
				incompatibleTokens: ["a", "b", "h", "K", "k", "t", "T"]
			},
			K: {
				priority: 70,
				parse: function(e, t, n, i) {
					switch (t) {
					case "K":
						return a(M.hour11h, e);
					case "Ko":
						return n.ordinalNumber(e, {
							unit: "hour"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 11
				},
				set: function(e, t, n, a) {
					return e.getUTCHours() >= 12 && n < 12 ? e.setUTCHours(n + 12, 0, 0, 0) : e.setUTCHours(n, 0, 0, 0),
					e
				},
				incompatibleTokens: ["a", "b", "h", "H", "k", "t", "T"]
			},
			k: {
				priority: 70,
				parse: function(e, t, n, i) {
					switch (t) {
					case "k":
						return a(M.hour24h, e);
					case "ko":
						return n.ordinalNumber(e, {
							unit: "hour"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return t >= 1 && t <= 24
				},
				set: function(e, t, n, a) {
					var i = n <= 24 ? n % 24 : n;
					return e.setUTCHours(i, 0, 0, 0),
					e
				},
				incompatibleTokens: ["a", "b", "h", "H", "K", "t", "T"]
			},
			m: {
				priority: 60,
				parse: function(e, t, n, i) {
					switch (t) {
					case "m":
						return a(M.minute, e);
					case "mo":
						return n.ordinalNumber(e, {
							unit: "minute"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 59
				},
				set: function(e, t, n, a) {
					return e.setUTCMinutes(n, 0, 0),
					e
				},
				incompatibleTokens: ["t", "T"]
			},
			s: {
				priority: 50,
				parse: function(e, t, n, i) {
					switch (t) {
					case "s":
						return a(M.second, e);
					case "so":
						return n.ordinalNumber(e, {
							unit: "second"
						});
					default:
						return o(t.length, e)
					}
				},
				validate: function(e, t, n) {
					return t >= 0 && t <= 59
				},
				set: function(e, t, n, a) {
					return e.setUTCSeconds(n, 0),
					e
				},
				incompatibleTokens: ["t", "T"]
			},
			S: {
				priority: 30,
				parse: function(e, t, n, a) {
					var i = function(e) {
						return Math.floor(e * Math.pow(10, 3 - t.length))
					};
					return o(t.length, e, i)
				},
				set: function(e, t, n, a) {
					return e.setUTCMilliseconds(n),
					e
				},
				incompatibleTokens: ["t", "T"]
			},
			X: {
				priority: 10,
				parse: function(e, t, n, a) {
					switch (t) {
					case "X":
						return i(k.basicOptionalMinutes, e);
					case "XX":
						return i(k.basic, e);
					case "XXXX":
						return i(k.basicOptionalSeconds, e);
					case "XXXXX":
						return i(k.extendedOptionalSeconds, e);
					case "XXX":
					default:
						return i(k.extended, e)
					}
				},
				set: function(e, t, n, a) {
					return t.timestampIsSet ? e: new Date(e.getTime() - n)
				},
				incompatibleTokens: ["t", "T", "x"]
			},
			x: {
				priority: 10,
				parse: function(e, t, n, a) {
					switch (t) {
					case "x":
						return i(k.basicOptionalMinutes, e);
					case "xx":
						return i(k.basic, e);
					case "xxxx":
						return i(k.basicOptionalSeconds, e);
					case "xxxxx":
						return i(k.extendedOptionalSeconds, e);
					case "xxx":
					default:
						return i(k.extended, e)
					}
				},
				set: function(e, t, n, a) {
					return t.timestampIsSet ? e: new Date(e.getTime() - n)
				},
				incompatibleTokens: ["t", "T", "X"]
			},
			t: {
				priority: 40,
				parse: function(e, t, n, a) {
					return r(e)
				},
				set: function(e, t, n, a) {
					return [new Date(1e3 * n), {
						timestampIsSet: !0
					}]
				},
				incompatibleTokens: "*"
			},
			T: {
				priority: 20,
				parse: function(e, t, n, a) {
					return r(e)
				},
				set: function(e, t, n, a) {
					return [new Date(n), {
						timestampIsSet: !0
					}]
				},
				incompatibleTokens: "*"
			}
		};
		t.a = x
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			o.a(2, arguments);
			var a = n || {},
			u = a.locale,
			s = u && u.options && u.options.weekStartsOn,
			d = null == s ? 0 : i.a(s),
			c = null == a.weekStartsOn ? d: i.a(a.weekStartsOn);
			if (! (c >= 0 && c <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
			var l = r.a(e),
			m = i.a(t),
			f = l.getUTCDay(),
			h = m % 7,
			p = (h + 7) % 7,
			g = (p < c ? 7 : 0) + m - f;
			return l.setUTCDate(l.getUTCDate() + g),
			l
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			n % 7 == 0 && (n -= 7);
			var a = r.a(e),
			u = a.getUTCDay(),
			s = n % 7,
			d = (s + 7) % 7,
			c = (d < 1 ? 7 : 0) + n - u;
			return a.setUTCDate(a.getUTCDate() + c),
			a
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(2, arguments);
			var n = r.a(e),
			a = i.a(t),
			s = o.a(n) - a;
			return n.setUTCDate(n.getUTCDate() - 7 * s),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(153),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			u.a(2, arguments);
			var a = r.a(e),
			s = i.a(t),
			d = o.a(a, n) - s;
			return a.setUTCDate(a.getUTCDate() - 7 * d),
			a
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(155),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			1 === i.a(e).getDay()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e).getTime() < Date.now()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = i.a(e),
			a = i.a(t);
			return n.getTime() === a.getTime()
		}
		t.a = a;
		var i = n(46),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(Date.now(), e)
		}
		t.a = a;
		var i = n(175),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e, Date.now())
		}
		t.a = a;
		var i = n(177),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(Date.now(), e)
		}
		t.a = a;
		var i = n(178),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(Date.now(), e)
		}
		t.a = a;
		var i = n(180),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(Date.now(), e)
		}
		t.a = a;
		var i = n(181),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(Date.now(), e)
		}
		t.a = a;
		var i = n(182),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return r.a(1, arguments),
			i.a(e, Date.now(), t)
		}
		t.a = a;
		var i = n(95),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e, Date.now())
		}
		t.a = a;
		var i = n(184),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			4 === i.a(e).getDay()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e, Date.now())
		}
		t.a = a;
		var i = n(47),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return o.a(1, arguments),
			r.a(e, i.a(Date.now(), 1))
		}
		t.a = a;
		var i = n(21),
		r = n(47),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			2 === i.a(e).getDay()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			3 === i.a(e).getDay()
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			r.a(2, arguments);
			var n = t || {},
			a = i.a(e).getTime(),
			o = i.a(n.start).getTime(),
			u = i.a(n.end).getTime();
			if (! (o <= u)) throw new RangeError("Invalid interval");
			return a >= o && a <= u
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return o.a(1, arguments),
			i.a(e, r.a(Date.now(), 1))
		}
		t.a = a;
		var i = n(47),
		r = n(94),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear(),
			a = 9 + 10 * Math.floor(n / 10);
			return t.setFullYear(a + 1, 0, 0),
			t.setHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return r.a(1, arguments),
			i.a(e, {
				weekStartsOn: 1
			})
		}
		t.a = a;
		var i = n(185),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			o.a(1, arguments);
			var t = i.a(e),
			n = new Date(0);
			n.setFullYear(t + 1, 0, 4),
			n.setHours(0, 0, 0, 0);
			var a = r.a(n);
			return a.setDate(a.getDate() - 1),
			a
		}
		t.a = a;
		var i = n(34),
		r = n(25),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getMonth(),
			a = n - n % 3 + 3;
			return t.setMonth(a, 0),
			t.setHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear();
			return t.setFullYear(n + 1, 0, 0),
			t.setHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			c.a(2, arguments);
			var n = String(t),
			a = r.a(e);
			if (!s.a(a)) throw new RangeError("Invalid time value");
			var m = u.a(a),
			f = d.a(a, m);
			return n.match(l).map(function(e) {
				if ("''" === e) return "'";
				var t = e[0];
				if ("'" === t) return i(e);
				var n = o.a[t];
				if (n) return n(f, e, null, {});
				if (t.match(h)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
				return e
			}).join("")
		}
		function i(e) {
			return e.match(m)[1].replace(f, "'")
		}
		t.a = a;
		var r = n(1),
		o = n(152),
		u = n(19),
		s = n(15),
		d = n(49),
		c = n(0),
		l = /(\w)\1*|''|'(''|[^'])+('|$)|./g,
		m = /^'([^]*?)'?$/,
		f = /''/g,
		h = /[a-zA-Z]/
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t;
			if (e && "function" == typeof e.forEach) t = e;
			else {
				if ("object" != typeof e || null === e) return new Date(NaN);
				t = Array.prototype.slice.call(e)
			}
			var n;
			return t.forEach(function(e) {
				var t = i.a(e); (void 0 === n || n < t || isNaN(t)) && (n = t)
			}),
			n || new Date(NaN)
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t;
			if (e && "function" == typeof e.forEach) t = e;
			else {
				if ("object" != typeof e || null === e) return new Date(NaN);
				t = Array.prototype.slice.call(e)
			}
			var n;
			return t.forEach(function(e) {
				var t = i.a(e); (void 0 === n || n > t || isNaN(t)) && (n = t)
			}),
			n || new Date(NaN)
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			b.a(1, arguments);
			var n = t || {},
			a = null == n.additionalDigits ? k: w.a(n.additionalDigits);
			if (2 !== a && 1 !== a && 0 !== a) throw new RangeError("additionalDigits must be 0, 1 or 2");
			if ("string" != typeof e && "[object String]" !== Object.prototype.toString.call(e)) return new Date(NaN);
			var u, d = i(e);
			if (d.date) {
				var l = r(d.date, a);
				u = o(l.restDateString, l.year)
			}
			if (isNaN(u) || !u) return new Date(NaN);
			var m, f = u.getTime(),
			h = 0;
			if (d.time && (h = s(d.time), isNaN(h) || null === h)) return new Date(NaN);
			if (!d.timezone) {
				var p = new Date(f + h),
				g = new Date(p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate(), p.getUTCHours(), p.getUTCMinutes(), p.getUTCSeconds(), p.getUTCMilliseconds());
				return g.setFullYear(p.getUTCFullYear()),
				g
			}
			return m = c(d.timezone),
			isNaN(m) ? new Date(NaN) : new Date(f + h + m)
		}
		function i(e) {
			var t, n = {},
			a = e.split(P.dateTimeDelimiter);
			if (a.length > 2) return n;
			if (/:/.test(a[0]) ? (n.date = null, t = a[0]) : (n.date = a[0], t = a[1], P.timeZoneDelimiter.test(n.date) && (n.date = e.split(P.timeZoneDelimiter)[0], t = e.substr(n.date.length, e.length))), t) {
				var i = P.timezone.exec(t);
				i ? (n.time = t.replace(i[1], ""), n.timezone = i[1]) : n.time = t
			}
			return n
		}
		function r(e, t) {
			var n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
			a = e.match(n);
			if (!a) return {
				year: null
			};
			var i = a[1] && parseInt(a[1]),
			r = a[2] && parseInt(a[2]);
			return {
				year: null == r ? i: 100 * r,
				restDateString: e.slice((a[1] || a[2]).length)
			}
		}
		function o(e, t) {
			if (null === t) return null;
			var n = e.match(W);
			if (!n) return null;
			var a = !!n[4],
			i = u(n[1]),
			r = u(n[2]) - 1,
			o = u(n[3]),
			s = u(n[4]),
			d = u(n[5]) - 1;
			if (a) return p(t, s, d) ? l(t, s, d) : new Date(NaN);
			var c = new Date(0);
			return f(t, r, o) && h(t, i) ? (c.setUTCFullYear(t, r, Math.max(i, o)), c) : new Date(NaN)
		}
		function u(e) {
			return e ? parseInt(e) : 1
		}
		function s(e) {
			var t = e.match(x);
			if (!t) return null;
			var n = d(t[1]),
			a = d(t[2]),
			i = d(t[3]);
			return g(n, a, i) ? n * y + a * M + 1e3 * i: NaN
		}
		function d(e) {
			return e && parseFloat(e.replace(",", ".")) || 0
		}
		function c(e) {
			if ("Z" === e) return 0;
			var t = e.match(j);
			if (!t) return 0;
			var n = "+" === t[1] ? -1 : 1,
			a = parseInt(t[2]),
			i = t[3] && parseInt(t[3]) || 0;
			return v(a, i) ? n * (a * y + i * M) : NaN
		}
		function l(e, t, n) {
			var a = new Date(0);
			a.setUTCFullYear(e, 0, 4);
			var i = a.getUTCDay() || 7,
			r = 7 * (t - 1) + n + 1 - i;
			return a.setUTCDate(a.getUTCDate() + r),
			a
		}
		function m(e) {
			return e % 400 == 0 || e % 4 == 0 && e % 100
		}
		function f(e, t, n) {
			return t >= 0 && t <= 11 && n >= 1 && n <= (T[t] || (m(e) ? 29 : 28))
		}
		function h(e, t) {
			return t >= 1 && t <= (m(e) ? 366 : 365)
		}
		function p(e, t, n) {
			return t >= 1 && t <= 53 && n >= 0 && n <= 6
		}
		function g(e, t, n) {
			return 24 === e ? 0 === t && 0 === n: n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25
		}
		function v(e, t) {
			return t >= 0 && t <= 59
		}
		t.a = a;
		var w = n(6),
		b = n(0),
		y = 36e5,
		M = 6e4,
		k = 2,
		P = {
			dateTimeDelimiter: /[T ]/,
			timeZoneDelimiter: /[Z ]/i,
			timezone: /([Z+-].*)$/
		},
		W = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
		x = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
		j = /^([+-])(\d{2})(?::?(\d{2}))?$/,
		T = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			if (r.a(1, arguments), "string" == typeof e) {
				var t = e.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|\+00:?00)?/);
				return t ? new Date(Date.UTC( + t[1], t[2] - 1, +t[3], +t[4], +t[5], +t[6], +((t[7] || "0") + "00").substring(0, 3))) : new Date(NaN)
			}
			return i.a(e)
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (arguments.length < 1) throw new TypeError("1 argument required, but only none provided present");
			var n = t && "nearestTo" in t ? r.a(t.nearestTo) : 1;
			if (n < 1 || n > 30) throw new RangeError("`options.nearestTo` must be between 1 and 30");
			var a = i.a(e),
			o = a.getSeconds(),
			u = a.getMinutes() + o / 60,
			s = Math.floor(u / n) * n,
			d = u % n,
			c = Math.round(d / n) * n;
			return new Date(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), s + c)
		}
		t.a = a;
		var i = n(1),
		r = n(6)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (u.a(2, arguments), "object" != typeof t || null === t) throw new RangeError("values parameter must be an object");
			var n = i.a(e);
			return isNaN(n) ? new Date(NaN) : (null != t.year && n.setFullYear(t.year), null != t.month && (n = r.a(n, t.month)), null != t.date && n.setDate(o.a(t.date)), null != t.hours && n.setHours(o.a(t.hours)), null != t.minutes && n.setMinutes(o.a(t.minutes)), null != t.seconds && n.setSeconds(o.a(t.seconds)), null != t.milliseconds && n.setMilliseconds(o.a(t.milliseconds)), n)
		}
		t.a = a;
		var i = n(1),
		r = n(96),
		o = n(6),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			return n.setDate(a),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			u.a(2, arguments);
			var a = n || {},
			s = a.locale,
			d = s && s.options && s.options.weekStartsOn,
			c = null == d ? 0 : o.a(d),
			l = null == a.weekStartsOn ? c: o.a(a.weekStartsOn);
			if (! (l >= 0 && l <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
			var m = r.a(e, a),
			f = o.a(t),
			h = m.getDay(),
			p = f % 7,
			g = (p + 7) % 7,
			v = 7 - l,
			w = f < 0 || f > 6 ? f - (h + v) % 7 : (g + v) % 7 - (h + v) % 7;
			return i.a(m, w, a)
		}
		t.a = a;
		var i = n(21),
		r = n(1),
		o = n(6),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			return n.setMonth(0),
			n.setDate(a),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			return n.setHours(a),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			s.a(2, arguments);
			var n = r.a(e),
			a = i.a(t),
			d = u.a(n),
			c = a - d;
			return o.a(n, c)
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(21),
		u = n(166),
		s = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(2, arguments);
			var n = r.a(e),
			a = i.a(t),
			s = o.a(n) - a;
			return n.setDate(n.getDate() - 7 * s),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(167),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			return n.setMilliseconds(a),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			return n.setMinutes(a),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			u.a(2, arguments);
			var n = r.a(e),
			a = i.a(t),
			s = Math.floor(n.getMonth() / 3) + 1,
			d = a - s;
			return o.a(n, n.getMonth() + 3 * d)
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(96),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			return n.setSeconds(a),
			n
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			u.a(2, arguments);
			var a = r.a(e),
			s = o.a(t),
			d = i.a(a, n) - s;
			return a.setDate(a.getDate() - 7 * d),
			a
		}
		t.a = a;
		var i = n(169),
		r = n(1),
		o = n(6),
		u = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			s.a(2, arguments);
			var a = n || {},
			d = a.locale,
			c = d && d.options && d.options.firstWeekContainsDate,
			l = null == c ? 1 : u.a(c),
			m = null == a.firstWeekContainsDate ? l: u.a(a.firstWeekContainsDate),
			f = o.a(e),
			h = u.a(t),
			p = i.a(f, r.a(f, n)),
			g = new Date(0);
			return g.setFullYear(h, 0, m),
			g.setHours(0, 0, 0, 0),
			f = r.a(g, n),
			f.setDate(f.getDate() + p),
			f
		}
		t.a = a;
		var i = n(26),
		r = n(93),
		o = n(1),
		u = n(6),
		s = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = r.a(e),
			a = i.a(t);
			return isNaN(n) ? new Date(NaN) : (n.setFullYear(a), n)
		}
		t.a = a;
		var i = n(6),
		r = n(1),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			r.a(1, arguments);
			var t = i.a(e),
			n = t.getFullYear(),
			a = 10 * Math.floor(n / 10);
			return t.setFullYear(a, 0, 1),
			t.setHours(0, 0, 0, 0),
			t
		}
		t.a = a;
		var i = n(1),
		r = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a() {
			return i.a(Date.now())
		}
		t.a = a;
		var i = n(57)
	},
	function(e, t, n) {
		"use strict";
		function a() {
			var e = new Date,
			t = e.getFullYear(),
			n = e.getMonth(),
			a = e.getDate(),
			i = new Date(0);
			return i.setFullYear(t, n, a + 1),
			i.setHours(0, 0, 0, 0),
			i
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a() {
			var e = new Date,
			t = e.getFullYear(),
			n = e.getMonth(),
			a = e.getDate(),
			i = new Date(0);
			return i.setFullYear(t, n, a - 1),
			i.setHours(0, 0, 0, 0),
			i
		}
		t.a = a
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(132),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(84),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(136),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(85),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(137),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(58),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			o.a(2, arguments);
			var n = i.a(t);
			return r.a(e, -n)
		}
		t.a = a;
		var i = n(6),
		r = n(138),
		o = n(0)
	},
	function(e, t, n) {
		"use strict";
		n.d(t, "a",
		function() {
			return a
		}),
		n.d(t, "b",
		function() {
			return i
		});
		var a = 24 * Math.pow(10, 8) * 60 * 60 * 1e3,
		i = -a
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = n(440);
		n.d(t, "af",
		function() {
			return a.a
		});
		var i = n(446);
		n.d(t, "arDZ",
		function() {
			return i.a
		});
		var r = n(452);
		n.d(t, "arMA",
		function() {
			return r.a
		});
		var o = n(458);
		n.d(t, "arSA",
		function() {
			return o.a
		});
		var u = n(464);
		n.d(t, "az",
		function() {
			return u.a
		});
		var s = n(470);
		n.d(t, "be",
		function() {
			return s.a
		});
		var d = n(476);
		n.d(t, "bg",
		function() {
			return d.a
		});
		var c = n(482);
		n.d(t, "bn",
		function() {
			return c.a
		});
		var l = n(487);
		n.d(t, "ca",
		function() {
			return l.a
		});
		var m = n(493);
		n.d(t, "cs",
		function() {
			return m.a
		});
		var f = n(499);
		n.d(t, "cy",
		function() {
			return f.a
		});
		var h = n(505);
		n.d(t, "da",
		function() {
			return h.a
		});
		var p = n(511);
		n.d(t, "de",
		function() {
			return p.a
		});
		var g = n(517);
		n.d(t, "el",
		function() {
			return g.a
		});
		var v = n(523);
		n.d(t, "enAU",
		function() {
			return v.a
		});
		var w = n(525);
		n.d(t, "enCA",
		function() {
			return w.a
		});
		var b = n(528);
		n.d(t, "enGB",
		function() {
			return b.a
		});
		var y = n(530);
		n.d(t, "enIN",
		function() {
			return y.a
		});
		var M = n(532);
		n.d(t, "enNZ",
		function() {
			return M.a
		});
		var k = n(28);
		n.d(t, "enUS",
		function() {
			return k.a
		});
		var P = n(534);
		n.d(t, "eo",
		function() {
			return P.a
		});
		var W = n(540);
		n.d(t, "es",
		function() {
			return W.a
		});
		var x = n(546);
		n.d(t, "et",
		function() {
			return x.a
		});
		var j = n(552);
		n.d(t, "eu",
		function() {
			return j.a
		});
		var T = n(558);
		n.d(t, "faIR",
		function() {
			return T.a
		});
		var S = n(564);
		n.d(t, "fi",
		function() {
			return S.a
		});
		var C = n(570);
		n.d(t, "fr",
		function() {
			return C.a
		});
		var z = n(572);
		n.d(t, "frCA",
		function() {
			return z.a
		});
		var N = n(574);
		n.d(t, "frCH",
		function() {
			return N.a
		});
		var D = n(580);
		n.d(t, "gd",
		function() {
			return D.a
		});
		var E = n(586);
		n.d(t, "gl",
		function() {
			return E.a
		});
		var H = n(592);
		n.d(t, "gu",
		function() {
			return H.a
		});
		var A = n(598);
		n.d(t, "he",
		function() {
			return A.a
		});
		var _ = n(604);
		n.d(t, "hi",
		function() {
			return _.a
		});
		var O = n(609);
		n.d(t, "hr",
		function() {
			return O.a
		});
		var X = n(615);
		n.d(t, "hu",
		function() {
			return X.a
		});
		var I = n(621);
		n.d(t, "hy",
		function() {
			return I.a
		});
		var Y = n(627);
		n.d(t, "id",
		function() {
			return Y.a
		});
		var F = n(633);
		n.d(t, "is",
		function() {
			return F.a
		});
		var L = n(639);
		n.d(t, "it",
		function() {
			return L.a
		});
		var q = n(645);
		n.d(t, "ja",
		function() {
			return q.a
		});
		var G = n(651);
		n.d(t, "ka",
		function() {
			return G.a
		});
		var R = n(657);
		n.d(t, "kk",
		function() {
			return R.a
		});
		var U = n(663);
		n.d(t, "kn",
		function() {
			return U.a
		});
		var K = n(669);
		n.d(t, "ko",
		function() {
			return K.a
		});
		var J = n(675);
		n.d(t, "lb",
		function() {
			return J.a
		});
		var B = n(681);
		n.d(t, "lt",
		function() {
			return B.a
		});
		var $ = n(687);
		n.d(t, "lv",
		function() {
			return $.a
		});
		var V = n(693);
		n.d(t, "mk",
		function() {
			return V.a
		});
		var Q = n(699);
		n.d(t, "ms",
		function() {
			return Q.a
		});
		var Z = n(705);
		n.d(t, "mt",
		function() {
			return Z.a
		});
		var ee = n(711);
		n.d(t, "nb",
		function() {
			return ee.a
		});
		var te = n(717);
		n.d(t, "nl",
		function() {
			return te.a
		});
		var ne = n(723);
		n.d(t, "nlBE",
		function() {
			return ne.a
		});
		var ae = n(729);
		n.d(t, "nn",
		function() {
			return ae.a
		});
		var ie = n(735);
		n.d(t, "pl",
		function() {
			return ie.a
		});
		var re = n(741);
		n.d(t, "pt",
		function() {
			return re.a
		});
		var oe = n(747);
		n.d(t, "ptBR",
		function() {
			return oe.a
		});
		var ue = n(753);
		n.d(t, "ro",
		function() {
			return ue.a
		});
		var se = n(759);
		n.d(t, "ru",
		function() {
			return se.a
		});
		var de = n(765);
		n.d(t, "sk",
		function() {
			return de.a
		});
		var ce = n(771);
		n.d(t, "sl",
		function() {
			return ce.a
		});
		var le = n(777);
		n.d(t, "sr",
		function() {
			return le.a
		});
		var me = n(783);
		n.d(t, "srLatn",
		function() {
			return me.a
		});
		var fe = n(789);
		n.d(t, "sv",
		function() {
			return fe.a
		});
		var he = n(795);
		n.d(t, "ta",
		function() {
			return he.a
		});
		var pe = n(801);
		n.d(t, "te",
		function() {
			return pe.a
		});
		var ge = n(807);
		n.d(t, "th",
		function() {
			return ge.a
		});
		var ve = n(813);
		n.d(t, "tr",
		function() {
			return ve.a
		});
		var we = n(819);
		n.d(t, "ug",
		function() {
			return we.a
		});
		var be = n(825);
		n.d(t, "uk",
		function() {
			return be.a
		});
		var ye = n(831);
		n.d(t, "uz",
		function() {
			return ye.a
		});
		var Me = n(837);
		n.d(t, "vi",
		function() {
			return Me.a
		});
		var ke = n(843);
		n.d(t, "zhCN",
		function() {
			return ke.a
		});
		var Pe = n(849);
		n.d(t, "zhTW",
		function() {
			return Pe.a
		})
	},
	function(e, t, n) {
		"use strict";
		var a = n(441),
		i = n(442),
		r = n(443),
		o = n(444),
		u = n(445),
		s = {
			code: "af",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "oor " + a: a + " gelede": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "minder as 'n sekonde",
				other: "minder as {{count}} sekondes"
			},
			xSeconds: {
				one: "1 sekonde",
				other: "{{count}} sekondes"
			},
			halfAMinute: "'n halwe minuut",
			lessThanXMinutes: {
				one: "minder as 'n minuut",
				other: "minder as {{count}} minute"
			},
			xMinutes: {
				one: "'n minuut",
				other: "{{count}} minute"
			},
			aboutXHours: {
				one: "ongeveer 1 uur",
				other: "ongeveer {{count}} ure"
			},
			xHours: {
				one: "1 uur",
				other: "{{count}} ure"
			},
			xDays: {
				one: "1 dag",
				other: "{{count}} dae"
			},
			aboutXWeeks: {
				one: "ongeveer 1 week",
				other: "ongeveer {{count}} weke"
			},
			xWeeks: {
				one: "1 week",
				other: "{{count}} weke"
			},
			aboutXMonths: {
				one: "ongeveer 1 maand",
				other: "ongeveer {{count}} maande"
			},
			xMonths: {
				one: "1 maand",
				other: "{{count}} maande"
			},
			aboutXYears: {
				one: "ongeveer 1 jaar",
				other: "ongeveer {{count}} jaar"
			},
			xYears: {
				one: "1 jaar",
				other: "{{count}} jaar"
			},
			overXYears: {
				one: "meer as 1 jaar",
				other: "meer as {{count}} jaar"
			},
			almostXYears: {
				one: "byna 1 jaar",
				other: "byna {{count}} jaar"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "yyyy/MM/dd"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'om' {{time}}",
			long: "{{date}} 'om' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'verlede' eeee 'om' p",
			yesterday: "'gister om' p",
			today: "'vandag om' p",
			tomorrow: "'môre om' p",
			nextWeek: "eeee 'om' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e),
			n = t % 100;
			if (n < 20) switch (n) {
			case 1:
			case 8:
				return t + "ste";
			default:
				return t + "de"
			}
			return t + "ste"
		}
		var i = n(3),
		r = {
			narrow: ["vC", "nC"],
			abbreviated: ["vC", "nC"],
			wide: ["voor Christus", "na Christus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["K1", "K2", "K3", "K4"],
			wide: ["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
			wide: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"]
		},
		s = {
			narrow: ["S", "M", "D", "W", "D", "V", "S"],
			short: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"],
			abbreviated: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"],
			wide: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"]
		},
		d = {
			narrow: {
				am: "vm",
				pm: "nm",
				midnight: "middernag",
				noon: "middaguur",
				morning: "oggend",
				afternoon: "middag",
				evening: "laat middag",
				night: "aand"
			},
			abbreviated: {
				am: "vm",
				pm: "nm",
				midnight: "middernag",
				noon: "middaguur",
				morning: "oggend",
				afternoon: "middag",
				evening: "laat middag",
				night: "aand"
			},
			wide: {
				am: "vm",
				pm: "nm",
				midnight: "middernag",
				noon: "middaguur",
				morning: "oggend",
				afternoon: "middag",
				evening: "laat middag",
				night: "aand"
			}
		},
		c = {
			narrow: {
				am: "vm",
				pm: "nm",
				midnight: "middernag",
				noon: "uur die middag",
				morning: "uur die oggend",
				afternoon: "uur die middag",
				evening: "uur die aand",
				night: "uur die aand"
			},
			abbreviated: {
				am: "vm",
				pm: "nm",
				midnight: "middernag",
				noon: "uur die middag",
				morning: "uur die oggend",
				afternoon: "uur die middag",
				evening: "uur die aand",
				night: "uur die aand"
			},
			wide: {
				am: "vm",
				pm: "nm",
				midnight: "middernag",
				noon: "uur die middag",
				morning: "uur die oggend",
				afternoon: "uur die middag",
				evening: "uur die aand",
				night: "uur die aand"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(ste|de)?/i,
		o = /\d+/i,
		u = {
			narrow: /^([vn]\.? ?C\.?)/,
			abbreviated: /^([vn]\. ?C\.?)/,
			wide: /^((voor|na) Christus)/
		},
		s = {
			any: [/^v/, /^n/]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^K[1234]/i,
			wide: /^[1234](st|d)e kwartaal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,
			wide: /^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i
		},
		m = {
			narrow: [/^J/i, /^F/i, /^M/i, /^A/i, /^M/i, /^J/i, /^J/i, /^A/i, /^S/i, /^O/i, /^N/i, /^D/i],
			any: [/^Jan/i, /^Feb/i, /^Mrt/i, /^Apr/i, /^Mei/i, /^Jun/i, /^Jul/i, /^Aug/i, /^Sep/i, /^Okt/i, /^Nov/i, /^Dec/i]
		},
		f = {
			narrow: /^[smdwv]/i,
			short: /^(So|Ma|Di|Wo|Do|Vr|Sa)/i,
			abbreviated: /^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,
			wide: /^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i
		},
		h = {
			narrow: [/^S/i, /^M/i, /^D/i, /^W/i, /^D/i, /^V/i, /^S/i],
			any: [/^So/i, /^Ma/i, /^Di/i, /^Wo/i, /^Do/i, /^Vr/i, /^Sa/i]
		},
		p = {
			any: /^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i
		},
		g = {
			any: {
				am: /^vm/i,
				pm: /^nm/i,
				midnight: /^middernag/i,
				noon: /^middaguur/i,
				morning: /oggend/i,
				afternoon: /middag/i,
				evening: /laat middag/i,
				night: /aand/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(447),
		i = n(448),
		r = n(449),
		o = n(450),
		u = n(451),
		s = {
			code: "ar-DZ",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: 2 === t ? i[e].two: t <= 10 ? i[e].threeToTen.replace("{{count}}", t) : i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "في خلال " + a: "منذ " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "أقل من ثانية واحدة",
				two: "أقل من ثانتين",
				threeToTen: "أقل من {{count}} ثواني",
				other: "أقل من {{count}} ثانية"
			},
			xSeconds: {
				one: "ثانية واحدة",
				two: "ثانتين",
				threeToTen: "{{count}} ثواني",
				other: "{{count}} ثانية"
			},
			halfAMinute: "نصف دقيقة",
			lessThanXMinutes: {
				one: "أقل من دقيقة",
				two: "أقل من دقيقتين",
				threeToTen: "أقل من {{count}} دقائق",
				other: "أقل من {{count}} دقيقة"
			},
			xMinutes: {
				one: "دقيقة واحدة",
				two: "دقيقتين",
				threeToTen: "{{count}} دقائق",
				other: "{{count}} دقيقة"
			},
			aboutXHours: {
				one: "ساعة واحدة تقريباً",
				two: "ساعتين تقريباً",
				threeToTen: "{{count}} ساعات تقريباً",
				other: "{{count}} ساعة تقريباً"
			},
			xHours: {
				one: "ساعة واحدة",
				two: "ساعتين",
				threeToTen: "{{count}} ساعات",
				other: "{{count}} ساعة"
			},
			xDays: {
				one: "يوم واحد",
				two: "يومين",
				threeToTen: "{{count}} أيام",
				other: "{{count}} يوم"
			},
			aboutXWeeks: {
				one: "أسبوع واحد تقريباً",
				two: "أسبوعين تقريباً",
				threeToTen: "{{count}} أسابيع تقريباً",
				other: "{{count}} أسبوع تقريباً"
			},
			xWeeks: {
				one: "أسبوع واحد",
				two: "أسبوعين",
				threeToTen: "{{count}} أسابيع",
				other: "{{count}} أسبوع"
			},
			aboutXMonths: {
				one: "شهر واحد تقريباً",
				two: "شهرين تقريباً",
				threeToTen: "{{count}} أشهر تقريباً",
				other: "{{count}} شهر تقريباً"
			},
			xMonths: {
				one: "شهر واحد",
				two: "شهرين",
				threeToTen: "{{count}} أشهر",
				other: "{{count}} شهر"
			},
			aboutXYears: {
				one: "عام واحد تقريباً",
				two: "عامين تقريباً",
				threeToTen: "{{count}} أعوام تقريباً",
				other: "{{count}} عام تقريباً"
			},
			xYears: {
				one: "عام واحد",
				two: "عامين",
				threeToTen: "{{count}} أعوام",
				other: "{{count}} عام"
			},
			overXYears: {
				one: "أكثر من عام",
				two: "أكثر من عامين",
				threeToTen: "أكثر من {{count}} أعوام",
				other: "أكثر من {{count}} عام"
			},
			almostXYears: {
				one: "عام واحد تقريباً",
				two: "عامين تقريباً",
				threeToTen: "{{count}} أعوام تقريباً",
				other: "{{count}} عام تقريباً"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'عند' {{time}}",
			long: "{{date}} 'عند' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'أخر' eeee 'عند' p",
			yesterday: "'أمس عند' p",
			today: "'اليوم عند' p",
			tomorrow: "'غداً عند' p",
			nextWeek: "eeee 'عند' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return String(e)
		}
		var i = n(3),
		r = {
			narrow: ["ق", "ب"],
			abbreviated: ["ق.م.", "ب.م."],
			wide: ["قبل الميلاد", "بعد الميلاد"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["ر1", "ر2", "ر3", "ر4"],
			wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
		},
		u = {
			narrow: ["ج", "ف", "م", "أ", "م", "ج", "ج", "أ", "س", "أ", "ن", "د"],
			abbreviated: ["جانـ", "فيفـ", "مارس", "أفريل", "مايـ", "جوانـ", "جويـ", "أوت", "سبتـ", "أكتـ", "نوفـ", "ديسـ"],
			wide: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
		},
		s = {
			narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
			short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
			abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"],
			wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
		},
		d = {
			narrow: {
				am: "ص",
				pm: "م",
				midnight: "ن",
				noon: "ظ",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			},
			abbreviated: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			},
			wide: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			}
		},
		c = {
			narrow: {
				am: "ص",
				pm: "م",
				midnight: "ن",
				noon: "ظ",
				morning: "في الصباح",
				afternoon: "بعد الظـهر",
				evening: "في المساء",
				night: "في الليل"
			},
			abbreviated: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "في الصباح",
				evening: "في المساء",
				night: "في الليل"
			},
			wide: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				afternoon: "بعد الظـهر",
				evening: "في المساء",
				night: "في الليل"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(th|st|nd|rd)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ق|ب)/i,
			abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
			wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
		},
		s = {
			any: [/^قبل/i, /^بعد/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^ر[1234]/i,
			wide: /^الربع [1234]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[جفمأسند]/i,
			abbreviated: /^(جان|فيف|مار|أفر|ماي|جوا|جوي|أوت|سبت|أكت|نوف|ديس)/i,
			wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/i
		},
		m = {
			narrow: [/^ج/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ج/i, /^ج/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
			any: [/^جان/i, /^فيف/i, /^مار/i, /^أفر/i, /^ماي/i, /^جوا/i, /^جوي/i, /^أوت/i, /^سبت/i, /^أكت/i, /^نوف/i, /^ديس/i]
		},
		f = {
			narrow: /^[حنثرخجس]/i,
			short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
			abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,
			wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
		},
		h = {
			narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
			wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
			any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
		},
		p = {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(453),
		i = n(454),
		r = n(455),
		o = n(456),
		u = n(457),
		s = {
			code: "ar-MA",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: 2 === t ? i[e].two: t <= 10 ? i[e].threeToTen.replace("{{count}}", t) : i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "في خلال " + a: "منذ " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "أقل من ثانية واحدة",
				two: "أقل من ثانتين",
				threeToTen: "أقل من {{count}} ثواني",
				other: "أقل من {{count}} ثانية"
			},
			xSeconds: {
				one: "ثانية واحدة",
				two: "ثانتين",
				threeToTen: "{{count}} ثواني",
				other: "{{count}} ثانية"
			},
			halfAMinute: "نصف دقيقة",
			lessThanXMinutes: {
				one: "أقل من دقيقة",
				two: "أقل من دقيقتين",
				threeToTen: "أقل من {{count}} دقائق",
				other: "أقل من {{count}} دقيقة"
			},
			xMinutes: {
				one: "دقيقة واحدة",
				two: "دقيقتين",
				threeToTen: "{{count}} دقائق",
				other: "{{count}} دقيقة"
			},
			aboutXHours: {
				one: "ساعة واحدة تقريباً",
				two: "ساعتين تقريباً",
				threeToTen: "{{count}} ساعات تقريباً",
				other: "{{count}} ساعة تقريباً"
			},
			xHours: {
				one: "ساعة واحدة",
				two: "ساعتين",
				threeToTen: "{{count}} ساعات",
				other: "{{count}} ساعة"
			},
			xDays: {
				one: "يوم واحد",
				two: "يومين",
				threeToTen: "{{count}} أيام",
				other: "{{count}} يوم"
			},
			aboutXWeeks: {
				one: "أسبوع واحد تقريباً",
				two: "أسبوعين تقريباً",
				threeToTen: "{{count}} أسابيع تقريباً",
				other: "{{count}} أسبوع تقريباً"
			},
			xWeeks: {
				one: "أسبوع واحد",
				two: "أسبوعين",
				threeToTen: "{{count}} أسابيع",
				other: "{{count}} أسبوع"
			},
			aboutXMonths: {
				one: "شهر واحد تقريباً",
				two: "شهرين تقريباً",
				threeToTen: "{{count}} أشهر تقريباً",
				other: "{{count}} شهر تقريباً"
			},
			xMonths: {
				one: "شهر واحد",
				two: "شهرين",
				threeToTen: "{{count}} أشهر",
				other: "{{count}} شهر"
			},
			aboutXYears: {
				one: "عام واحد تقريباً",
				two: "عامين تقريباً",
				threeToTen: "{{count}} أعوام تقريباً",
				other: "{{count}} عام تقريباً"
			},
			xYears: {
				one: "عام واحد",
				two: "عامين",
				threeToTen: "{{count}} أعوام",
				other: "{{count}} عام"
			},
			overXYears: {
				one: "أكثر من عام",
				two: "أكثر من عامين",
				threeToTen: "أكثر من {{count}} أعوام",
				other: "أكثر من {{count}} عام"
			},
			almostXYears: {
				one: "عام واحد تقريباً",
				two: "عامين تقريباً",
				threeToTen: "{{count}} أعوام تقريباً",
				other: "{{count}} عام تقريباً"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'عند' {{time}}",
			long: "{{date}} 'عند' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'أخر' eeee 'عند' p",
			yesterday: "'أمس عند' p",
			today: "'اليوم عند' p",
			tomorrow: "'غداً عند' p",
			nextWeek: "eeee 'عند' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return String(e)
		}
		var i = n(3),
		r = {
			narrow: ["ق", "ب"],
			abbreviated: ["ق.م.", "ب.م."],
			wide: ["قبل الميلاد", "بعد الميلاد"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["ر1", "ر2", "ر3", "ر4"],
			wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
		},
		u = {
			narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "غ", "ش", "أ", "ن", "د"],
			abbreviated: ["ينا", "فبر", "مارس", "أبريل", "ماي", "يونـ", "يولـ", "غشت", "شتنـ", "أكتـ", "نونـ", "دجنـ"],
			wide: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليوز", "غشت", "شتنبر", "أكتوبر", "نونبر", "دجنبر"]
		},
		s = {
			narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
			short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
			abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"],
			wide: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
		},
		d = {
			narrow: {
				am: "ص",
				pm: "م",
				midnight: "ن",
				noon: "ظ",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			},
			abbreviated: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			},
			wide: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			}
		},
		c = {
			narrow: {
				am: "ص",
				pm: "م",
				midnight: "ن",
				noon: "ظ",
				morning: "في الصباح",
				afternoon: "بعد الظـهر",
				evening: "في المساء",
				night: "في الليل"
			},
			abbreviated: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "في الصباح",
				evening: "في المساء",
				night: "في الليل"
			},
			wide: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				afternoon: "بعد الظـهر",
				evening: "في المساء",
				night: "في الليل"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(th|st|nd|rd)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ق|ب)/i,
			abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
			wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
		},
		s = {
			any: [/^قبل/i, /^بعد/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^ر[1234]/i,
			wide: /^الربع [1234]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[يفمأمسند]/i,
			abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i,
			wide: /^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i
		},
		m = {
			narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^غ/i, /^ش/i, /^أ/i, /^ن/i, /^د/i],
			any: [/^ين/i, /^فب/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^غشت/i, /^ش/i, /^أك/i, /^ن/i, /^د/i]
		},
		f = {
			narrow: /^[حنثرخجس]/i,
			short: /^(أحد|إثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
			abbreviated: /^(أحد|إثن|ثلا|أرب|خمي|جمعة|سبت)/i,
			wide: /^(الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
		},
		h = {
			narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
			wide: [/^الأحد/i, /^الإثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
			any: [/^أح/i, /^إث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
		},
		p = {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(459),
		i = n(460),
		r = n(461),
		o = n(462),
		u = n(463),
		s = {
			code: "ar-SA",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: 2 === t ? i[e].two: t <= 10 ? i[e].threeToTen.replace("{{count}}", t) : i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "في خلال " + a: "منذ " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "أقل من ثانية واحدة",
				two: "أقل من ثانتين",
				threeToTen: "أقل من {{count}} ثواني",
				other: "أقل من {{count}} ثانية"
			},
			xSeconds: {
				one: "ثانية واحدة",
				two: "ثانتين",
				threeToTen: "{{count}} ثواني",
				other: "{{count}} ثانية"
			},
			halfAMinute: "نصف دقيقة",
			lessThanXMinutes: {
				one: "أقل من دقيقة",
				two: "أقل من دقيقتين",
				threeToTen: "أقل من {{count}} دقائق",
				other: "أقل من {{count}} دقيقة"
			},
			xMinutes: {
				one: "دقيقة واحدة",
				two: "دقيقتين",
				threeToTen: "{{count}} دقائق",
				other: "{{count}} دقيقة"
			},
			aboutXHours: {
				one: "ساعة واحدة تقريباً",
				two: "ساعتين تقريباً",
				threeToTen: "{{count}} ساعات تقريباً",
				other: "{{count}} ساعة تقريباً"
			},
			xHours: {
				one: "ساعة واحدة",
				two: "ساعتين",
				threeToTen: "{{count}} ساعات",
				other: "{{count}} ساعة"
			},
			xDays: {
				one: "يوم واحد",
				two: "يومين",
				threeToTen: "{{count}} أيام",
				other: "{{count}} يوم"
			},
			aboutXWeeks: {
				one: "أسبوع واحد تقريباً",
				two: "أسبوعين تقريباً",
				threeToTen: "{{count}} أسابيع تقريباً",
				other: "{{count}} أسبوع تقريباً"
			},
			xWeeks: {
				one: "أسبوع واحد",
				two: "أسبوعين",
				threeToTen: "{{count}} أسابيع",
				other: "{{count}} أسبوع"
			},
			aboutXMonths: {
				one: "شهر واحد تقريباً",
				two: "شهرين تقريباً",
				threeToTen: "{{count}} أشهر تقريباً",
				other: "{{count}} شهر تقريباً"
			},
			xMonths: {
				one: "شهر واحد",
				two: "شهرين",
				threeToTen: "{{count}} أشهر",
				other: "{{count}} شهر"
			},
			aboutXYears: {
				one: "عام واحد تقريباً",
				two: "عامين تقريباً",
				threeToTen: "{{count}} أعوام تقريباً",
				other: "{{count}} عام تقريباً"
			},
			xYears: {
				one: "عام واحد",
				two: "عامين",
				threeToTen: "{{count}} أعوام",
				other: "{{count}} عام"
			},
			overXYears: {
				one: "أكثر من عام",
				two: "أكثر من عامين",
				threeToTen: "أكثر من {{count}} أعوام",
				other: "أكثر من {{count}} عام"
			},
			almostXYears: {
				one: "عام واحد تقريباً",
				two: "عامين تقريباً",
				threeToTen: "{{count}} أعوام تقريباً",
				other: "{{count}} عام تقريباً"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'عند' {{time}}",
			long: "{{date}} 'عند' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'أخر' eeee 'عند' p",
			yesterday: "'أمس عند' p",
			today: "'اليوم عند' p",
			tomorrow: "'غداً عند' p",
			nextWeek: "eeee 'عند' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return String(e)
		}
		var i = n(3),
		r = {
			narrow: ["ق", "ب"],
			abbreviated: ["ق.م.", "ب.م."],
			wide: ["قبل الميلاد", "بعد الميلاد"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["ر1", "ر2", "ر3", "ر4"],
			wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
		},
		u = {
			narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"],
			abbreviated: ["ينا", "فبر", "مارس", "أبريل", "مايو", "يونـ", "يولـ", "أغسـ", "سبتـ", "أكتـ", "نوفـ", "ديسـ"],
			wide: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
		},
		s = {
			narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
			short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
			abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"],
			wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
		},
		d = {
			narrow: {
				am: "ص",
				pm: "م",
				midnight: "ن",
				noon: "ظ",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			},
			abbreviated: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			},
			wide: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "صباحاً",
				afternoon: "بعد الظهر",
				evening: "مساءاً",
				night: "ليلاً"
			}
		},
		c = {
			narrow: {
				am: "ص",
				pm: "م",
				midnight: "ن",
				noon: "ظ",
				morning: "في الصباح",
				afternoon: "بعد الظـهر",
				evening: "في المساء",
				night: "في الليل"
			},
			abbreviated: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				morning: "في الصباح",
				evening: "في المساء",
				night: "في الليل"
			},
			wide: {
				am: "ص",
				pm: "م",
				midnight: "نصف الليل",
				noon: "ظهر",
				afternoon: "بعد الظـهر",
				evening: "في المساء",
				night: "في الليل"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(th|st|nd|rd)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ق|ب)/i,
			abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
			wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
		},
		s = {
			any: [/^قبل/i, /^بعد/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^ر[1234]/i,
			wide: /^الربع [1234]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[يفمأمسند]/i,
			abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i,
			wide: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i
		},
		m = {
			narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
			any: [/^ين/i, /^ف/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^أغ/i, /^س/i, /^أك/i, /^ن/i, /^د/i]
		},
		f = {
			narrow: /^[حنثرخجس]/i,
			short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
			abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,
			wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
		},
		h = {
			narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
			wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
			any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
		},
		p = {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(465),
		i = n(466),
		r = n(467),
		o = n(468),
		u = n(469),
		s = {
			code: "az",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + " əvvəl": a + " sonra": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "bir saniyədən az",
				other: "{{count}} bir saniyədən az"
			},
			xSeconds: {
				one: "1 saniyə",
				other: "{{count}} saniyə"
			},
			halfAMinute: "yarım dəqiqə",
			lessThanXMinutes: {
				one: "bir dəqiqədən az",
				other: "{{count}} bir dəqiqədən az"
			},
			xMinutes: {
				one: "bir dəqiqə",
				other: "{{count}} dəqiqə"
			},
			aboutXHours: {
				one: "təxminən 1 saat",
				other: "təxminən {{count}} saat"
			},
			xHours: {
				one: "1 saat",
				other: "{{count}} saat"
			},
			xDays: {
				one: "1 gün",
				other: "{{count}} gün"
			},
			aboutXWeeks: {
				one: "təxminən 1 həftə",
				other: "təxminən {{count}} həftə"
			},
			xWeeks: {
				one: "1 həftə",
				other: "{{count}} həftə"
			},
			aboutXMonths: {
				one: "təxminən 1 ay",
				other: "təxminən {{count}} ay"
			},
			xMonths: {
				one: "1 ay",
				other: "{{count}} ay"
			},
			aboutXYears: {
				one: "təxminən 1 il",
				other: "təxminən {{count}} il"
			},
			xYears: {
				one: "1 il",
				other: "{{count}} il"
			},
			overXYears: {
				one: "1 ildən çox",
				other: "{{count}} ildən çox"
			},
			almostXYears: {
				one: "demək olar ki 1 il",
				other: "demək olar ki {{count}} il"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM y 'il'",
			long: "do MMMM y 'il'",
			medium: "d MMM y 'il'",
			short: "dd.MM.yyyy"
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			full: "{{date}} {{time}} - 'də'",
			long: "{{date}} {{time}} - 'də'",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'sonuncu' eeee p -'də'",
			yesterday: "'dünən' p -'də'",
			today: "'bugün' p -'də'",
			tomorrow: "'sabah' p -'də'",
			nextWeek: "eeee p -'də'",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			if (0 === e) return e + "-ıncı";
			var t = e % 10,
			n = e % 100 - t,
			a = e >= 100 ? 100 : null;
			return m[t] || m[n] || m[a]
		}
		function i(e, t) {
			var n = Number(e);
			return n + a(n)
		}
		var r = n(3),
		o = {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Hz. İsa'dan öncə", "Anno Domini"]
		},
		u = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["K1", "K2", "K3", "K4"],
			wide: ["1ci kvartal", "2ci kvartal", "3cü kvartal", "4cü kvartal"]
		},
		s = {
			narrow: ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
			abbreviated: ["Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul", "Avq", "Sen", "Okt", "Noy", "Dek"],
			wide: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
		},
		d = {
			narrow: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."],
			short: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."],
			abbreviated: ["Baz", "Baz.e", "Çər.a", "Çər", "Cüm.a", "Cüm", "Şə"],
			wide: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
		},
		c = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "gecəyarı",
				noon: "gün",
				morning: "səhər",
				afternoon: "gündüz",
				evening: "axşam",
				night: "gecə"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "gecəyarı",
				noon: "gün",
				morning: "səhər",
				afternoon: "gündüz",
				evening: "axşam",
				night: "gecə"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "gecəyarı",
				noon: "gün",
				morning: "səhər",
				afternoon: "gündüz",
				evening: "axşam",
				night: "gecə"
			}
		},
		l = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "gecəyarı",
				noon: "gün",
				morning: "səhər",
				afternoon: "gündüz",
				evening: "axşam",
				night: "gecə"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "gecəyarı",
				noon: "gün",
				morning: "səhər",
				afternoon: "gündüz",
				evening: "axşam",
				night: "gecə"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "gecəyarı",
				noon: "gün",
				morning: "səhər",
				afternoon: "gündüz",
				evening: "axşam",
				night: "gecə"
			}
		},
		m = {
			1 : "-inci",
			5 : "-inci",
			8 : "-inci",
			70 : "-inci",
			80 : "-inci",
			2 : "-nci",
			7 : "-nci",
			20 : "-nci",
			50 : "-nci",
			3 : "-üncü",
			4 : "-üncü",
			100 : "-üncü",
			6 : "-ncı",
			9 : "-uncu",
			10 : "-uncu",
			30 : "-uncu",
			60 : "-ıncı",
			90 : "-ıncı"
		},
		f = {
			ordinalNumber: i,
			era: r.a({
				values: o,
				defaultWidth: "wide"
			}),
			quarter: r.a({
				values: u,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: r.a({
				values: s,
				defaultWidth: "wide"
			}),
			day: r.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: r.a({
				values: c,
				defaultWidth: "wide",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = f
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,
		o = /\d+/i,
		u = {
			narrow: /^(b|a)$/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,
			wide: /^(Hz. İsa'dan öncə|ümumi eradan əvvəl|anno domini|ümumi dövr)$/i
		},
		s = {
			any: [/^b$/i, /^(a|c)$/i]
		},
		d = {
			narrow: /^[1234]$/i,
			abbreviated: /^K[1234]$/i,
			wide: /^[1234](ci)? kvartal$/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[(?-i)yfmaisond]$/i,
			abbreviated: /^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,
			wide: /^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i
		},
		m = {
			narrow: [/^[(?-i)y]$/i, /^[(?-i)f]$/i, /^[(?-i)m]$/i, /^[(?-i)a]$/i, /^[(?-i)m]$/i, /^[(?-i)i]$/i, /^[(?-i)i]$/i, /^[(?-i)a]$/i, /^[(?-i)s]$/i, /^[(?-i)o]$/i, /^[(?-i)n]$/i, /^[(?-i)d]$/i],
			abbreviated: [/^Yan$/i, /^Fev$/i, /^Mar$/i, /^Apr$/i, /^May$/i, /^İyun$/i, /^İyul$/i, /^Avg$/i, /^Sen$/i, /^Okt$/i, /^Noy$/i, /^Dek$/i],
			wide: [/^Yanvar$/i, /^Fevral$/i, /^Mart$/i, /^Aprel$/i, /^May$/i, /^İyun$/i, /^İyul$/i, /^Avgust$/i, /^Sentyabr$/i, /^Oktyabr$/i, /^Noyabr$/i, /^Dekabr$/i]
		},
		f = {
			narrow: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
			short: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
			abbreviated: /^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,
			wide: /^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i
		},
		h = {
			narrow: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i],
			abbreviated: [/^Baz\.e$/i, /^Çər$/i, /^Çər\.a$/i, /^Cüm$/i, /^Cüm\.a$/i, /^Şə$/i],
			wide: [/^Bazar$/i, /^Bazar ertəsi$/i, /^Çərşənbə axşamı$/i, /^Çərşənbə$/i, /^Cümə axşamı$/i, /^Cümə$/i, /^Şənbə$/i],
			any: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i]
		},
		p = {
			narrow: /^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,
			any: /^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i
		},
		g = {
			any: {
				am: /^a$/i,
				pm: /^p$/i,
				midnight: /^gecəyarı$/i,
				noon: /^gün$/i,
				morning: /səhər$/i,
				afternoon: /gündüz$/i,
				evening: /axşam$/i,
				night: /gecə$/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(471),
		i = n(472),
		r = n(473),
		o = n(474),
		u = n(475),
		s = {
			code: "be",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (void 0 !== e.one && 1 === t) return e.one;
			var n = t % 10,
			a = t % 100;
			return 1 === n && 11 !== a ? e.singularNominative.replace("{{count}}", t) : n >= 2 && n <= 4 && (a < 10 || a > 20) ? e.singularGenitive.replace("{{count}}", t) : e.pluralGenitive.replace("{{count}}", t)
		}
		function i(e) {
			return function(t, n) {
				return n.addSuffix ? n.comparison > 0 ? e.future ? a(e.future, t) : "праз " + a(e.regular, t) : e.past ? a(e.past, t) : a(e.regular, t) + " таму": a(e.regular, t)
			}
		}
		function r(e, t, n) {
			return n = n || {},
			o[e](t, n)
		}
		t.a = r;
		var o = {
			lessThanXSeconds: i({
				regular: {
					one: "менш за секунду",
					singularNominative: "менш за {{count}} секунду",
					singularGenitive: "менш за {{count}} секунды",
					pluralGenitive: "менш за {{count}} секунд"
				},
				future: {
					one: "менш, чым праз секунду",
					singularNominative: "менш, чым праз {{count}} секунду",
					singularGenitive: "менш, чым праз {{count}} секунды",
					pluralGenitive: "менш, чым праз {{count}} секунд"
				}
			}),
			xSeconds: i({
				regular: {
					singularNominative: "{{count}} секунда",
					singularGenitive: "{{count}} секунды",
					pluralGenitive: "{{count}} секунд"
				},
				past: {
					singularNominative: "{{count}} секунду таму",
					singularGenitive: "{{count}} секунды таму",
					pluralGenitive: "{{count}} секунд таму"
				},
				future: {
					singularNominative: "праз {{count}} секунду",
					singularGenitive: "праз {{count}} секунды",
					pluralGenitive: "праз {{count}} секунд"
				}
			}),
			halfAMinute: function(e, t) {
				return t.addSuffix ? t.comparison > 0 ? "праз паўхвіліны": "паўхвіліны таму": "паўхвіліны"
			},
			lessThanXMinutes: i({
				regular: {
					one: "менш за хвіліну",
					singularNominative: "менш за {{count}} хвіліну",
					singularGenitive: "менш за {{count}} хвіліны",
					pluralGenitive: "менш за {{count}} хвілін"
				},
				future: {
					one: "менш, чым праз хвіліну",
					singularNominative: "менш, чым праз {{count}} хвіліну",
					singularGenitive: "менш, чым праз {{count}} хвіліны",
					pluralGenitive: "менш, чым праз {{count}} хвілін"
				}
			}),
			xMinutes: i({
				regular: {
					singularNominative: "{{count}} хвіліна",
					singularGenitive: "{{count}} хвіліны",
					pluralGenitive: "{{count}} хвілін"
				},
				past: {
					singularNominative: "{{count}} хвіліну таму",
					singularGenitive: "{{count}} хвіліны таму",
					pluralGenitive: "{{count}} хвілін таму"
				},
				future: {
					singularNominative: "праз {{count}} хвіліну",
					singularGenitive: "праз {{count}} хвіліны",
					pluralGenitive: "праз {{count}} хвілін"
				}
			}),
			aboutXHours: i({
				regular: {
					singularNominative: "каля {{count}} гадзіны",
					singularGenitive: "каля {{count}} гадзін",
					pluralGenitive: "каля {{count}} гадзін"
				},
				future: {
					singularNominative: "прыблізна праз {{count}} гадзіну",
					singularGenitive: "прыблізна праз {{count}} гадзіны",
					pluralGenitive: "прыблізна праз {{count}} гадзін"
				}
			}),
			xHours: i({
				regular: {
					singularNominative: "{{count}} гадзіна",
					singularGenitive: "{{count}} гадзіны",
					pluralGenitive: "{{count}} гадзін"
				},
				past: {
					singularNominative: "{{count}} гадзіну таму",
					singularGenitive: "{{count}} гадзіны таму",
					pluralGenitive: "{{count}} гадзін таму"
				},
				future: {
					singularNominative: "праз {{count}} гадзіну",
					singularGenitive: "праз {{count}} гадзіны",
					pluralGenitive: "праз {{count}} гадзін"
				}
			}),
			xDays: i({
				regular: {
					singularNominative: "{{count}} дзень",
					singularGenitive: "{{count}} дні",
					pluralGenitive: "{{count}} дзён"
				}
			}),
			aboutXWeeks: i({
				regular: {
					singularNominative: "каля {{count}} месяца",
					singularGenitive: "каля {{count}} месяцаў",
					pluralGenitive: "каля {{count}} месяцаў"
				},
				future: {
					singularNominative: "прыблізна праз {{count}} месяц",
					singularGenitive: "прыблізна праз {{count}} месяцы",
					pluralGenitive: "прыблізна праз {{count}} месяцаў"
				}
			}),
			xWeeks: i({
				regular: {
					singularNominative: "{{count}} месяц",
					singularGenitive: "{{count}} месяцы",
					pluralGenitive: "{{count}} месяцаў"
				}
			}),
			aboutXMonths: i({
				regular: {
					singularNominative: "каля {{count}} месяца",
					singularGenitive: "каля {{count}} месяцаў",
					pluralGenitive: "каля {{count}} месяцаў"
				},
				future: {
					singularNominative: "прыблізна праз {{count}} месяц",
					singularGenitive: "прыблізна праз {{count}} месяцы",
					pluralGenitive: "прыблізна праз {{count}} месяцаў"
				}
			}),
			xMonths: i({
				regular: {
					singularNominative: "{{count}} месяц",
					singularGenitive: "{{count}} месяцы",
					pluralGenitive: "{{count}} месяцаў"
				}
			}),
			aboutXYears: i({
				regular: {
					singularNominative: "каля {{count}} года",
					singularGenitive: "каля {{count}} гадоў",
					pluralGenitive: "каля {{count}} гадоў"
				},
				future: {
					singularNominative: "прыблізна праз {{count}} год",
					singularGenitive: "прыблізна праз {{count}} гады",
					pluralGenitive: "прыблізна праз {{count}} гадоў"
				}
			}),
			xYears: i({
				regular: {
					singularNominative: "{{count}} год",
					singularGenitive: "{{count}} гады",
					pluralGenitive: "{{count}} гадоў"
				}
			}),
			overXYears: i({
				regular: {
					singularNominative: "больш за {{count}} год",
					singularGenitive: "больш за {{count}} гады",
					pluralGenitive: "больш за {{count}} гадоў"
				},
				future: {
					singularNominative: "больш, чым праз {{count}} год",
					singularGenitive: "больш, чым праз {{count}} гады",
					pluralGenitive: "больш, чым праз {{count}} гадоў"
				}
			}),
			almostXYears: i({
				regular: {
					singularNominative: "амаль {{count}} год",
					singularGenitive: "амаль {{count}} гады",
					pluralGenitive: "амаль {{count}} гадоў"
				},
				future: {
					singularNominative: "амаль праз {{count}} год",
					singularGenitive: "амаль праз {{count}} гады",
					pluralGenitive: "амаль праз {{count}} гадоў"
				}
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM y 'г.'",
			long: "d MMMM y 'г.'",
			medium: "d MMM y 'г.'",
			short: "dd.MM.y"
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			any: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "any"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 5:
			case 6:
				return "'у мінулую " + t + " а' p";
			case 1:
			case 2:
			case 4:
				return "'у мінулы " + t + " а' p"
			}
		}
		function i(e) {
			return "'у " + s[e] + " а' p"
		}
		function r(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 5:
			case 6:
				return "'у наступную " + t + " а' p";
			case 1:
			case 2:
			case 4:
				return "'у наступны " + t + " а' p"
			}
		}
		function o(e, t, n, a) {
			var i = d[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = ["нядзелю", "панядзелак", "аўторак", "сераду", "чацвер", "пятніцу", "суботу"],
		d = {
			lastWeek: function(e, t, n) {
				var r = e.getUTCDay();
				return u.a(e, t, n) ? i(r) : a(r)
			},
			yesterday: "'учора а' p",
			today: "'сёння а' p",
			tomorrow: "'заўтра а' p",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return u.a(e, t, n) ? i(a) : r(a)
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n, a = t || {},
			i = String(a.unit),
			r = Number(e);
			return n = "date" === i ? "-га": "hour" === i || "minute" === i || "second" === i ? "-я": r % 10 != 2 && r % 10 != 3 || r % 100 == 12 || r % 100 == 13 ? "-ы": "-і",
			r + n
		}
		var i = n(3),
		r = {
			narrow: ["да н.э.", "н.э."],
			abbreviated: ["да н. э.", "н. э."],
			wide: ["да нашай эры", "нашай эры"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1-ы кв.", "2-і кв.", "3-і кв.", "4-ы кв."],
			wide: ["1-ы квартал", "2-і квартал", "3-і квартал", "4-ы квартал"]
		},
		u = {
			narrow: ["С", "Л", "С", "К", "М", "Ч", "Л", "Ж", "В", "К", "Л", "С"],
			abbreviated: ["студз.", "лют.", "сак.", "крас.", "май", "чэрв.", "ліп.", "жн.", "вер.", "кастр.", "ліст.", "снеж."],
			wide: ["студзень", "люты", "сакавік", "красавік", "май", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань"]
		},
		s = {
			narrow: ["С", "Л", "С", "К", "М", "Ч", "Л", "Ж", "В", "К", "Л", "С"],
			abbreviated: ["студз.", "лют.", "сак.", "крас.", "мая", "чэрв.", "ліп.", "жн.", "вер.", "кастр.", "ліст.", "снеж."],
			wide: ["студзеня", "лютага", "сакавіка", "красавіка", "мая", "чэрвеня", "ліпеня", "жніўня", "верасня", "кастрычніка", "лістапада", "снежня"]
		},
		d = {
			narrow: ["Н", "П", "А", "С", "Ч", "П", "С"],
			short: ["нд", "пн", "аў", "ср", "чц", "пт", "сб"],
			abbreviated: ["нядз", "пан", "аўт", "сер", "чац", "пят", "суб"],
			wide: ["нядзеля", "панядзелак", "аўторак", "серада", "чацвер", "пятніца", "субота"]
		},
		c = {
			narrow: {
				am: "ДП",
				pm: "ПП",
				midnight: "поўн.",
				noon: "поўд.",
				morning: "ран.",
				afternoon: "дзень",
				evening: "веч.",
				night: "ноч"
			},
			abbreviated: {
				am: "ДП",
				pm: "ПП",
				midnight: "поўн.",
				noon: "поўд.",
				morning: "ран.",
				afternoon: "дзень",
				evening: "веч.",
				night: "ноч"
			},
			wide: {
				am: "ДП",
				pm: "ПП",
				midnight: "поўнач",
				noon: "поўдзень",
				morning: "раніца",
				afternoon: "дзень",
				evening: "вечар",
				night: "ноч"
			}
		},
		l = {
			narrow: {
				am: "ДП",
				pm: "ПП",
				midnight: "поўн.",
				noon: "поўд.",
				morning: "ран.",
				afternoon: "дня",
				evening: "веч.",
				night: "ночы"
			},
			abbreviated: {
				am: "ДП",
				pm: "ПП",
				midnight: "поўн.",
				noon: "поўд.",
				morning: "ран.",
				afternoon: "дня",
				evening: "веч.",
				night: "ночы"
			},
			wide: {
				am: "ДП",
				pm: "ПП",
				midnight: "поўнач",
				noon: "поўдзень",
				morning: "раніцы",
				afternoon: "дня",
				evening: "вечара",
				night: "ночы"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide",
				formattingValues: s,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: c,
				defaultWidth: "any",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i,
		o = /\d+/i,
		u = {
			narrow: /^((да )?н\.?\s?э\.?)/i,
			abbreviated: /^((да )?н\.?\s?э\.?)/i,
			wide: /^(да нашай эры|нашай эры|наша эра)/i
		},
		s = {
			any: [/^д/i, /^н/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234](-?[ыі]?)? кв.?/i,
			wide: /^[1234](-?[ыі]?)? квартал/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[слкмчжв]/i,
			abbreviated: /^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i,
			wide: /^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i
		},
		m = {
			narrow: [/^с/i, /^л/i, /^с/i, /^к/i, /^м/i, /^ч/i, /^л/i, /^ж/i, /^в/i, /^к/i, /^л/i, /^с/i],
			any: [/^ст/i, /^лю/i, /^са/i, /^кр/i, /^ма/i, /^ч/i, /^ліп/i, /^ж/i, /^в/i, /^ка/i, /^ліс/i, /^сн/i]
		},
		f = {
			narrow: /^[нпасч]/i,
			short: /^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,
			abbreviated: /^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i,
			wide: /^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i
		},
		h = {
			narrow: [/^н/i, /^п/i, /^а/i, /^с/i, /^ч/i, /^п/i, /^с/i],
			any: [/^н/i, /^п[ан]/i, /^а/i, /^с[ер]/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
		},
		p = {
			narrow: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
			abbreviated: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
			wide: /^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i
		},
		g = {
			any: {
				am: /^дп/i,
				pm: /^пп/i,
				midnight: /^поўн/i,
				noon: /^поўд/i,
				morning: /^р/i,
				afternoon: /^д[зн]/i,
				evening: /^в/i,
				night: /^н/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "wide",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(477),
		i = n(478),
		r = n(479),
		o = n(480),
		u = n(481),
		s = {
			code: "bg",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "след " + a: "преди " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "по-малко от секунда",
				other: "по-малко от {{count}} секунди"
			},
			xSeconds: {
				one: "1 секунда",
				other: "{{count}} секунди"
			},
			halfAMinute: "половин минута",
			lessThanXMinutes: {
				one: "по-малко от минута",
				other: "по-малко от {{count}} минути"
			},
			xMinutes: {
				one: "1 минута",
				other: "{{count}} минути"
			},
			aboutXHours: {
				one: "около час",
				other: "около {{count}} часа"
			},
			xHours: {
				one: "1 час",
				other: "{{count}} часа"
			},
			xDays: {
				one: "1 ден",
				other: "{{count}} дни"
			},
			aboutXWeeks: {
				one: "около седмица",
				other: "около {{count}} седмици"
			},
			xWeeks: {
				one: "1 седмица",
				other: "{{count}} седмици"
			},
			aboutXMonths: {
				one: "около месец",
				other: "около {{count}} месеца"
			},
			xMonths: {
				one: "1 месец",
				other: "{{count}} месеца"
			},
			aboutXYears: {
				one: "около година",
				other: "около {{count}} години"
			},
			xYears: {
				one: "1 година",
				other: "{{count}} години"
			},
			overXYears: {
				one: "над година",
				other: "над {{count}} години"
			},
			almostXYears: {
				one: "почти година",
				other: "почти {{count}} години"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, dd MMMM yyyy",
			long: "dd MMMM yyyy",
			medium: "dd MMM yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "H:mm"
		},
		o = {
			any: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "any"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 6:
				return "'миналата " + t + " в' p";
			case 1:
			case 2:
			case 4:
			case 5:
				return "'миналия " + t + " в' p"
			}
		}
		function i(e) {
			var t = s[e];
			return 2 === e ? "'във " + t + " в' p": "'в " + t + " в' p"
		}
		function r(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 6:
				return "'следващата " + t + " в' p";
			case 1:
			case 2:
			case 4:
			case 5:
				return "'следващия " + t + " в' p"
			}
		}
		function o(e, t, n, a) {
			var i = d[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"],
		d = {
			lastWeek: function(e, t, n) {
				var r = e.getUTCDay();
				return u.a(e, t, n) ? i(r) : a(r)
			},
			yesterday: "'вчера в' p",
			today: "'днес в' p",
			tomorrow: "'утре в' p",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return u.a(e, t, n) ? i(a) : r(a)
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return "year" === e || "week" === e || "minute" === e || "second" === e
		}
		function i(e) {
			return "quarter" === e
		}
		function r(e, t, n, r, o) {
			return e + "-" + (i(t) ? o: a(t) ? r: n)
		}
		function o(e, t) {
			var n = t || {},
			a = String(n.unit),
			i = Number(e);
			if (0 === i) return r(0, a, "ев", "ева", "ево");
			if (i % 1e3 == 0) return r(i, a, "ен", "на", "но");
			if (i % 100 == 0) return r(i, a, "тен", "тна", "тно");
			var o = i % 100;
			if (o > 20 || o < 10) switch (o % 10) {
			case 1:
				return r(i, a, "ви", "ва", "во");
			case 2:
				return r(i, a, "ри", "ра", "ро");
			case 7:
			case 8:
				return r(i, a, "ми", "ма", "мо")
			}
			return r(i, a, "ти", "та", "то")
		}
		var u = n(3),
		s = {
			narrow: ["пр.н.е.", "н.е."],
			abbreviated: ["преди н. е.", "н. е."],
			wide: ["преди новата ера", "новата ера"]
		},
		d = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1-во тримес.", "2-ро тримес.", "3-то тримес.", "4-то тримес."],
			wide: ["1-во тримесечие", "2-ро тримесечие", "3-то тримесечие", "4-то тримесечие"]
		},
		c = {
			abbreviated: ["яну", "фев", "мар", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"],
			wide: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"]
		},
		l = {
			narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
			short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
			abbreviated: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"],
			wide: ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"]
		},
		m = {
			wide: {
				am: "преди обяд",
				pm: "след обяд",
				midnight: "в полунощ",
				noon: "на обяд",
				morning: "сутринта",
				afternoon: "следобед",
				evening: "вечерта",
				night: "през нощта"
			}
		},
		f = {
			ordinalNumber: o,
			era: u.a({
				values: s,
				defaultWidth: "wide"
			}),
			quarter: u.a({
				values: d,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: u.a({
				values: c,
				defaultWidth: "wide"
			}),
			day: u.a({
				values: l,
				defaultWidth: "wide"
			}),
			dayPeriod: u.a({
				values: m,
				defaultWidth: "wide"
			})
		};
		t.a = f
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,
		o = /\d+/i,
		u = {
			narrow: /^((пр)?н\.?\s?е\.?)/i,
			abbreviated: /^((пр)?н\.?\s?е\.?)/i,
			wide: /^(преди новата ера|новата ера|нова ера)/i
		},
		s = {
			any: [/^п/i, /^н/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
			wide: /^[1234](-?[врт]?о?)? тримесечие/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[нпвсч]/i,
			short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
			abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
			wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i
		},
		m = {
			narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
			any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i]
		},
		f = {
			abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
			wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i
		},
		h = {
			any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]
		},
		p = {
			any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i
		},
		g = {
			any: {
				am: /^преди о/i,
				pm: /^след о/i,
				midnight: /^в пол/i,
				noon: /^на об/i,
				morning: /^сут/i,
				afternoon: /^следо/i,
				evening: /^веч/i,
				night: /^през н/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(483),
		i = n(484),
		r = n(485),
		o = n(186),
		u = n(486),
		s = {
			code: "bn",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof r[e] ? r[e] : 1 === t ? r[e].one: r[e].other.replace("{{count}}", i.a.numberToLocale(t)),
			n.addSuffix ? n.comparison > 0 ? a + " এর মধ্যে": a + " আগে": a
		}
		t.a = a;
		var i = n(186),
		r = {
			lessThanXSeconds: {
				one: "প্রায় ১ সেকেন্ড",
				other: "প্রায় {{count}} সেকেন্ড"
			},
			xSeconds: {
				one: "১ সেকেন্ড",
				other: "{{count}} সেকেন্ড"
			},
			halfAMinute: "আধ মিনিট",
			lessThanXMinutes: {
				one: "প্রায় ১ মিনিট",
				other: "প্রায় {{count}} মিনিট"
			},
			xMinutes: {
				one: "১ মিনিট",
				other: "{{count}} মিনিট"
			},
			aboutXHours: {
				one: "প্রায় ১ ঘন্টা",
				other: "প্রায় {{count}} ঘন্টা"
			},
			xHours: {
				one: "১ ঘন্টা",
				other: "{{count}} ঘন্টা"
			},
			xDays: {
				one: "১ দিন",
				other: "{{count}} দিন"
			},
			aboutXWeeks: {
				one: "প্রায় ১ সপ্তাহ",
				other: "প্রায় {{count}} সপ্তাহ"
			},
			xWeeks: {
				one: "১ সপ্তাহ",
				other: "{{count}} সপ্তাহ"
			},
			aboutXMonths: {
				one: "প্রায় ১ মাস",
				other: "প্রায় {{count}} মাস"
			},
			xMonths: {
				one: "১ মাস",
				other: "{{count}} মাস"
			},
			aboutXYears: {
				one: "প্রায় ১ বছর",
				other: "প্রায় {{count}} বছর"
			},
			xYears: {
				one: "১ বছর",
				other: "{{count}} বছর"
			},
			overXYears: {
				one: "১ বছরের বেশি",
				other: "{{count}} বছরের বেশি"
			},
			almostXYears: {
				one: "প্রায় ১ বছর",
				other: "প্রায় {{count}} বছর"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} {{time}} 'সময়'",
			long: "{{date}} {{time}} 'সময়'",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'গত' eeee 'সময়' p",
			yesterday: "'গতকাল' 'সময়' p",
			today: "'আজ' 'সময়' p",
			tomorrow: "'আগামীকাল' 'সময়' p",
			nextWeek: "eeee 'সময়' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(খ্রিঃপূঃ|খ্রিঃ)/i,
			abbreviated: /^(খ্রিঃপূর্ব|খ্রিঃ)/i,
			wide: /^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i
		},
		s = {
			narrow: [/^খ্রিঃপূঃ/i, /^খ্রিঃ/i],
			abbreviated: [/^খ্রিঃপূর্ব/i, /^খ্রিঃ/i],
			wide: [/^খ্রিস্টপূর্ব/i, /^খ্রিস্টাব্দ/i]
		},
		d = {
			narrow: /^[১২৩৪]/i,
			abbreviated: /^[১২৩৪]ত্রৈ/i,
			wide: /^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i
		},
		c = {
			any: [/১/i, /২/i, /৩/i, /৪/i]
		},
		l = {
			narrow: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
			abbreviated: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
			wide: /^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i
		},
		m = {
			any: [/^জানু/i, /^ফেব্রু/i, /^মার্চ/i, /^এপ্রিল/i, /^মে/i, /^জুন/i, /^জুলাই/i, /^আগস্ট/i, /^সেপ্ট/i, /^অক্টো/i, /^নভে/i, /^ডিসে/i]
		},
		f = {
			narrow: /^(র|সো|ম|বু|বৃ|শু|শ)+/i,
			short: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
			abbreviated: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
			wide: /^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i
		},
		h = {
			narrow: [/^র/i, /^সো/i, /^ম/i, /^বু/i, /^বৃ/i, /^শু/i, /^শ/i],
			short: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i],
			abbreviated: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i],
			wide: [/^রবিবার/i, /^সোমবার/i, /^মঙ্গলবার/i, /^বুধবার/i, /^বৃহস্পতিবার /i, /^শুক্রবার/i, /^শনিবার/i]
		},
		p = {
			narrow: /^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
			abbreviated: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
			wide: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i
		},
		g = {
			any: {
				am: /^পূ/i,
				pm: /^অপ/i,
				midnight: /^মধ্যরাত/i,
				noon: /^মধ্যাহ্ন/i,
				morning: /সকাল/i,
				afternoon: /বিকাল/i,
				evening: /সন্ধ্যা/i,
				night: /রাত/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(488),
		i = n(489),
		r = n(490),
		o = n(491),
		u = n(492),
		s = {
			code: "ca",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: 11 === t && i[e].eleven ? i[e].eleven: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "en " + a: "fa " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "menys d'un segon",
				eleven: "menys d'onze segons",
				other: "menys de {{count}} segons"
			},
			xSeconds: {
				one: "1 segon",
				other: "{{count}} segons"
			},
			halfAMinute: "mig minut",
			lessThanXMinutes: {
				one: "menys d'un minut",
				eleven: "menys d'onze minuts",
				other: "menys de {{count}} minuts"
			},
			xMinutes: {
				one: "1 minut",
				other: "{{count}} minuts"
			},
			aboutXHours: {
				one: "aproximadament una hora",
				other: "aproximadament {{count}} hores"
			},
			xHours: {
				one: "1 hora",
				other: "{{count}} hores"
			},
			xDays: {
				one: "1 dia",
				other: "{{count}} dies"
			},
			aboutXWeeks: {
				one: "aproximadament una setmana",
				other: "aproximadament {{count}} setmanes"
			},
			xWeeks: {
				one: "1 setmana",
				other: "{{count}} setmanes"
			},
			aboutXMonths: {
				one: "aproximadament un mes",
				other: "aproximadament {{count}} mesos"
			},
			xMonths: {
				one: "1 mes",
				other: "{{count}} mesos"
			},
			aboutXYears: {
				one: "aproximadament un any",
				other: "aproximadament {{count}} anys"
			},
			xYears: {
				one: "1 any",
				other: "{{count}} anys"
			},
			overXYears: {
				one: "més d'un any",
				eleven: "més d'onze anys",
				other: "més de {{count}} anys"
			},
			almostXYears: {
				one: "gairebé un any",
				other: "gairebé {{count}} anys"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d 'de' MMMM y",
			long: "d 'de' MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'a les' {{time}}",
			long: "{{date}} 'a les' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return 1 !== t.getUTCHours() ? r[e] : i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'el' eeee 'passat a la' LT",
			yesterday: "'ahir a la' p",
			today: "'avui a la' p",
			tomorrow: "'demà a la' p",
			nextWeek: "eeee 'a la' p",
			other: "P"
		},
		r = {
			lastWeek: "'el' eeee 'passat a les' p",
			yesterday: "'ahir a les' p",
			today: "'avui a les' p",
			tomorrow: "'demà a les' p",
			nextWeek: "eeee 'a les' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = n % 100;
			if (a > 20 || a < 10) switch (a % 10) {
			case 1:
				return n + "r";
			case 2:
				return n + "n";
			case 3:
				return n + "r";
			case 4:
				return n + "t"
			}
			return n + "è"
		}
		var i = n(3),
		r = {
			narrow: ["aC", "dC"],
			abbreviated: ["a. de C.", "d. de C."],
			wide: ["abans de Crist", "després de Crist"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["T1", "T2", "T3", "T4"],
			wide: ["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"]
		},
		u = {
			narrow: ["GN", "FB", "MÇ", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"],
			abbreviated: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."],
			wide: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"]
		},
		s = {
			narrow: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
			short: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
			abbreviated: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
			wide: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"]
		},
		d = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "mitjanit",
				noon: "migdia",
				morning: "matí",
				afternoon: "tarda",
				evening: "vespre",
				night: "nit"
			},
			abbreviated: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "mitjanit",
				noon: "migdia",
				morning: "matí",
				afternoon: "tarda",
				evening: "vespre",
				night: "nit"
			},
			wide: {
				am: "ante meridiem",
				pm: "post meridiem",
				midnight: "mitjanit",
				noon: "migdia",
				morning: "matí",
				afternoon: "tarda",
				evening: "vespre",
				night: "nit"
			}
		},
		c = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "de la mitjanit",
				noon: "del migdia",
				morning: "del matí",
				afternoon: "de la tarda",
				evening: "del vespre",
				night: "de la nit"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "de la mitjanit",
				noon: "del migdia",
				morning: "del matí",
				afternoon: "de la tarda",
				evening: "del vespre",
				night: "de la nit"
			},
			wide: {
				am: "ante meridiem",
				pm: "post meridiem",
				midnight: "de la mitjanit",
				noon: "del migdia",
				morning: "del matí",
				afternoon: "de la tarda",
				evening: "del vespre",
				night: "de la nit"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)(è|r|n|r|t)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(aC|dC)/i,
			abbreviated: /^(a. de C.|d. de C.)/i,
			wide: /^(abans de Crist|despr[eé]s de Crist)/i
		},
		s = {
			narrow: [/^aC/i, /^dC/i],
			abbreviated: [/^(a. de C.)/i, /^(d. de C.)/i],
			wide: [/^(abans de Crist)/i, /^(despr[eé]s de Crist)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^T[1234]/i,
			wide: /^[1234](è|r|n|r|t)? trimestre/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,
			abbreviated: /^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,
			wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i
		},
		m = {
			narrow: [/^GN/i, /^FB/i, /^MÇ/i, /^AB/i, /^MG/i, /^JN/i, /^JL/i, /^AG/i, /^ST/i, /^OC/i, /^NV/i, /^DS/i],
			abbreviated: [/^gen./i, /^febr./i, /^març/i, /^abr./i, /^maig/i, /^juny/i, /^jul./i, /^ag./i, /^set./i, /^oct./i, /^nov./i, /^des./i],
			wide: [/^gener/i, /^febrer/i, /^març/i, /^abril/i, /^maig/i, /^juny/i, /^juliol/i, /^agost/i, /^setembre/i, /^octubre/i, /^novembre/i, /^desembre/i]
		},
		f = {
			narrow: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
			short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
			abbreviated: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
			wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i
		},
		h = {
			narrow: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
			abbreviated: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
			wide: [/^diumenge/i, /^dilluns/i, /^dimarts/i, /^dimecres/i, /^dijous/i, /^divendres/i, /^disssabte/i]
		},
		p = {
			narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,
			abbreviated: /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,
			wide: /^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mitjanit/i,
				noon: /^migdia/i,
				morning: /matí/i,
				afternoon: /tarda/i,
				evening: /vespre/i,
				night: /nit/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(494),
		i = n(495),
		r = n(496),
		o = n(497),
		u = n(498),
		s = {
			code: "cs",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a, r = i[e];
			a = "object" == typeof r.other ? "other": 1 === t ? "one": t > 1 && t < 5 || 0 === t ? "few": "many";
			var o, u = !0 === n.addSuffix,
			s = n.comparison;
			return o = u && -1 === s ? "past": u && 1 === s ? "future": "regular",
			r[a][o].replace("{{count}}", t)
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: {
					regular: "méně než vteřina",
					past: "před méně než vteřinou",
					future: "za méně než vteřinu"
				},
				few: {
					regular: "méně než {{count}} vteřiny",
					past: "před méně než {{count}} vteřinami",
					future: "za méně než {{count}} vteřiny"
				},
				many: {
					regular: "méně než {{count}} vteřin",
					past: "před méně než {{count}} vteřinami",
					future: "za méně než {{count}} vteřin"
				}
			},
			xSeconds: {
				one: {
					regular: "vteřina",
					past: "před vteřinou",
					future: "za vteřinu"
				},
				few: {
					regular: "{{count}} vteřiny",
					past: "před {{count}} vteřinami",
					future: "za {{count}} vteřiny"
				},
				many: {
					regular: "{{count}} vteřin",
					past: "před {{count}} vteřinami",
					future: "za {{count}} vteřin"
				}
			},
			halfAMinute: {
				other: {
					regular: "půl minuty",
					past: "před půl minutou",
					future: "za půl minuty"
				}
			},
			lessThanXMinutes: {
				one: {
					regular: "méně než minuta",
					past: "před méně než minutou",
					future: "za méně než minutu"
				},
				few: {
					regular: "méně než {{count}} minuty",
					past: "před méně než {{count}} minutami",
					future: "za méně než {{count}} minuty"
				},
				many: {
					regular: "méně než {{count}} minut",
					past: "před méně než {{count}} minutami",
					future: "za méně než {{count}} minut"
				}
			},
			xMinutes: {
				one: {
					regular: "minuta",
					past: "před minutou",
					future: "za minutu"
				},
				few: {
					regular: "{{count}} minuty",
					past: "před {{count}} minutami",
					future: "za {{count}} minuty"
				},
				many: {
					regular: "{{count}} minut",
					past: "před {{count}} minutami",
					future: "za {{count}} minut"
				}
			},
			aboutXHours: {
				one: {
					regular: "přibližně hodina",
					past: "přibližně před hodinou",
					future: "přibližně za hodinu"
				},
				few: {
					regular: "přibližně {{count}} hodiny",
					past: "přibližně před {{count}} hodinami",
					future: "přibližně za {{count}} hodiny"
				},
				many: {
					regular: "přibližně {{count}} hodin",
					past: "přibližně před {{count}} hodinami",
					future: "přibližně za {{count}} hodin"
				}
			},
			xHours: {
				one: {
					regular: "hodina",
					past: "před hodinou",
					future: "za hodinu"
				},
				few: {
					regular: "{{count}} hodiny",
					past: "před {{count}} hodinami",
					future: "za {{count}} hodiny"
				},
				many: {
					regular: "{{count}} hodin",
					past: "před {{count}} hodinami",
					future: "za {{count}} hodin"
				}
			},
			xDays: {
				one: {
					regular: "den",
					past: "před dnem",
					future: "za den"
				},
				few: {
					regular: "{{count}} dny",
					past: "před {{count}} dny",
					future: "za {{count}} dny"
				},
				many: {
					regular: "{{count}} dní",
					past: "před {{count}} dny",
					future: "za {{count}} dní"
				}
			},
			aboutXWeeks: {
				one: {
					regular: "přibližně týden",
					past: "přibližně před týdnem",
					future: "přibližně za týden"
				},
				few: {
					regular: "přibližně {{count}} týdny",
					past: "přibližně před {{count}} týdny",
					future: "přibližně za {{count}} týdny"
				},
				many: {
					regular: "přibližně {{count}} týdnů",
					past: "přibližně před {{count}} týdny",
					future: "přibližně za {{count}} týdnů"
				}
			},
			xWeeks: {
				one: {
					regular: "týden",
					past: "před týdnem",
					future: "za týden"
				},
				few: {
					regular: "{{count}} týdny",
					past: "před {{count}} týdny",
					future: "za {{count}} týdny"
				},
				many: {
					regular: "{{count}} týdnů",
					past: "před {{count}} týdny",
					future: "za {{count}} týdnů"
				}
			},
			aboutXMonths: {
				one: {
					regular: "přibližně měsíc",
					past: "přibližně před měsícem",
					future: "přibližně za měsíc"
				},
				few: {
					regular: "přibližně {{count}} měsíce",
					past: "přibližně před {{count}} měsíci",
					future: "přibližně za {{count}} měsíce"
				},
				many: {
					regular: "přibližně {{count}} měsíců",
					past: "přibližně před {{count}} měsíci",
					future: "přibližně za {{count}} měsíců"
				}
			},
			xMonths: {
				one: {
					regular: "měsíc",
					past: "před měsícem",
					future: "za měsíc"
				},
				few: {
					regular: "{{count}} měsíce",
					past: "před {{count}} měsíci",
					future: "za {{count}} měsíce"
				},
				many: {
					regular: "{{count}} měsíců",
					past: "před {{count}} měsíci",
					future: "za {{count}} měsíců"
				}
			},
			aboutXYears: {
				one: {
					regular: "přibližně rok",
					past: "přibližně před rokem",
					future: "přibližně za rok"
				},
				few: {
					regular: "přibližně {{count}} roky",
					past: "přibližně před {{count}} roky",
					future: "přibližně za {{count}} roky"
				},
				many: {
					regular: "přibližně {{count}} roků",
					past: "přibližně před {{count}} roky",
					future: "přibližně za {{count}} roků"
				}
			},
			xYears: {
				one: {
					regular: "rok",
					past: "před rokem",
					future: "za rok"
				},
				few: {
					regular: "{{count}} roky",
					past: "před {{count}} roky",
					future: "za {{count}} roky"
				},
				many: {
					regular: "{{count}} roků",
					past: "před {{count}} roky",
					future: "za {{count}} roků"
				}
			},
			overXYears: {
				one: {
					regular: "více než rok",
					past: "před více než rokem",
					future: "za více než rok"
				},
				few: {
					regular: "více než {{count}} roky",
					past: "před více než {{count}} roky",
					future: "za více než {{count}} roky"
				},
				many: {
					regular: "více než {{count}} roků",
					past: "před více než {{count}} roky",
					future: "za více než {{count}} roků"
				}
			},
			almostXYears: {
				one: {
					regular: "skoro rok",
					past: "skoro před rokem",
					future: "skoro za rok"
				},
				few: {
					regular: "skoro {{count}} roky",
					past: "skoro před {{count}} roky",
					future: "skoro za {{count}} roky"
				},
				many: {
					regular: "skoro {{count}} roků",
					past: "skoro před {{count}} roky",
					future: "skoro za {{count}} roků"
				}
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d. MMMM yyyy",
			long: "d. MMMM yyyy",
			medium: "d.M.yyyy",
			short: "d.M.yy"
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			full: "{{date}} 'v' {{time}}",
			long: "{{date}} 'v' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var i = r[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = a;
		var i = ["neděli", "pondělí", "úterý", "středu", "čtvrtek", "pátek", "sobotu"],
		r = {
			lastWeek: "'poslední' eeee 've' p",
			yesterday: "'včera v' p",
			today: "'dnes v' p",
			tomorrow: "'zítra v' p",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return "'v " + i[a] + " o' p"
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["př. n. l.", "n. l."],
			abbreviated: ["př. n. l.", "n. l."],
			wide: ["před naším letopočtem", "našeho letopočtu"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"],
			wide: ["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"]
		},
		u = {
			narrow: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
			abbreviated: ["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"],
			wide: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"]
		},
		s = {
			narrow: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
			abbreviated: ["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"],
			wide: ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]
		},
		d = {
			narrow: ["ne", "po", "út", "st", "čt", "pá", "so"],
			short: ["ne", "po", "út", "st", "čt", "pá", "so"],
			abbreviated: ["ned", "pon", "úte", "stř", "čtv", "pát", "sob"],
			wide: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"]
		},
		c = {
			narrow: {
				am: "dop.",
				pm: "odp.",
				midnight: "půlnoc",
				noon: "poledne",
				morning: "ráno",
				afternoon: "odpoledne",
				evening: "večer",
				night: "noc"
			},
			abbreviated: {
				am: "dop.",
				pm: "odp.",
				midnight: "půlnoc",
				noon: "poledne",
				morning: "ráno",
				afternoon: "odpoledne",
				evening: "večer",
				night: "noc"
			},
			wide: {
				am: "dopoledne",
				pm: "odpoledne",
				midnight: "půlnoc",
				noon: "poledne",
				morning: "ráno",
				afternoon: "odpoledne",
				evening: "večer",
				night: "noc"
			}
		},
		l = {
			narrow: {
				am: "dop.",
				pm: "odp.",
				midnight: "půlnoc",
				noon: "poledne",
				morning: "ráno",
				afternoon: "odpoledne",
				evening: "večer",
				night: "noc"
			},
			abbreviated: {
				am: "dop.",
				pm: "odp.",
				midnight: "půlnoc",
				noon: "poledne",
				morning: "ráno",
				afternoon: "odpoledne",
				evening: "večer",
				night: "noc"
			},
			wide: {
				am: "dopoledne",
				pm: "odpoledne",
				midnight: "půlnoc",
				noon: "poledne",
				morning: "ráno",
				afternoon: "odpoledne",
				evening: "večer",
				night: "noc"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide",
				formattingValues: s,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: c,
				defaultWidth: "wide",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)\.?/i,
		o = /\d+/i,
		u = {
			narrow: /^(p[řr]ed Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
			abbreviated: /^(pe[řr]ed Kr\.|pe[řr]ed n\. l\.|po Kr\.|n\. l\.)/i,
			wide: /^(p[řr]ed Kristem|pred na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i
		},
		s = {
			any: [/^p[řr]/i, /^(po|n)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i,
			wide: /^[1234]\. [čc]tvrtlet[íi]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[lúubdkčcszřrlp]/i,
			abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,
			wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i
		},
		m = {
			narrow: [/^l/i, /^[úu]/i, /^b/i, /^d/i, /^k/i, /^[čc]/i, /^[čc]/i, /^s/i, /^z/i, /^[řr]/i, /^l/i, /^p/i],
			any: [/^led/i, /^[úu]n/i, /^b[řr]e/i, /^dub/i, /^kv[ěe]/i, /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i, /^[čc]vc|[čc]erven(ec|ce)/i, /^srp/i, /^z[áa][řr]/i, /^[řr][íi]j/i, /^lis/i, /^pro/i]
		},
		f = {
			narrow: /^[npuúsčps]/i,
			short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
			abbreviated: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
			wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i
		},
		h = {
			narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i],
			any: [/^ne/i, /^po/i, /^ut/i, /^st/i, /^[čc]t/i, /^p/i, /^so/i]
		},
		p = {
			any: /^dopoledne|dop\.?|odpoledne|odp\.?|půlnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci/i
		},
		g = {
			any: {
				am: /^dop/i,
				pm: /^odp/i,
				midnight: /^p[ůu]lnoc/i,
				noon: /^poledne/i,
				morning: /r[áa]no/i,
				afternoon: /odpoledne/i,
				evening: /ve[čc]er/i,
				night: /noc/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(500),
		i = n(501),
		r = n(502),
		o = n(503),
		u = n(504),
		s = {
			code: "cy",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: 2 === t && i[e].two ? i[e].two: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "mewn " + a: a + " yn ôl": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "llai na eiliad",
				other: "llai na {{count}} eiliad"
			},
			xSeconds: {
				one: "1 eiliad",
				other: "{{count}} eiliad"
			},
			halfAMinute: "hanner munud",
			lessThanXMinutes: {
				one: "llai na munud",
				two: "llai na 2 funud",
				other: "llai na {{count}} munud"
			},
			xMinutes: {
				one: "1 munud",
				two: "2 funud",
				other: "{{count}} munud"
			},
			aboutXHours: {
				one: "tua 1 awr",
				other: "tua {{count}} awr"
			},
			xHours: {
				one: "1 awr",
				other: "{{count}} awr"
			},
			xDays: {
				one: "1 diwrnod",
				two: "2 ddiwrnod",
				other: "{{count}} diwrnod"
			},
			aboutXWeeks: {
				one: "tua 1 wythnos",
				two: "tua pythefnos",
				other: "tua {{count}} wythnos"
			},
			xWeeks: {
				one: "1 wythnos",
				two: "pythefnos",
				other: "{{count}} wythnos"
			},
			aboutXMonths: {
				one: "tua 1 mis",
				two: "tua 2 fis",
				other: "tua {{count}} mis"
			},
			xMonths: {
				one: "1 mis",
				two: "2 fis",
				other: "{{count}} mis"
			},
			aboutXYears: {
				one: "tua 1 flwyddyn",
				two: "tua 2 flynedd",
				other: "tua {{count}} mlynedd"
			},
			xYears: {
				one: "1 flwyddyn",
				two: "2 flynedd",
				other: "{{count}} mlynedd"
			},
			overXYears: {
				one: "dros 1 flwyddyn",
				two: "dros 2 flynedd",
				other: "dros {{count}} mlynedd"
			},
			almostXYears: {
				one: "bron 1 flwyddyn",
				two: "bron 2 flynedd",
				other: "bron {{count}} mlynedd"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'am' {{time}}",
			long: "{{date}} 'am' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'diwethaf am' p",
			yesterday: "'ddoe am' p",
			today: "'heddiw am' p",
			tomorrow: "'yfory am' p",
			nextWeek: "eeee 'am' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e);
			if (n < 20) switch (n) {
			case 0:
				return n + "fed";
			case 1:
				return n + "af";
			case 2:
				return n + "ail";
			case 3:
			case 4:
				return n + "ydd";
			case 5:
			case 6:
				return n + "ed";
			case 7:
			case 8:
			case 9:
			case 10:
			case 12:
			case 15:
			case 18:
				return n + "fed";
			case 11:
			case 13:
			case 14:
			case 16:
			case 17:
			case 19:
				return n + "eg"
			} else if (n >= 50 && n <= 60 || 80 === n || n >= 100) return n + "fed";
			return n + "ain"
		}
		var i = n(3),
		r = {
			narrow: ["C", "O"],
			abbreviated: ["CC", "OC"],
			wide: ["Cyn Crist", "Ar ôl Crist"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Ch1", "Ch2", "Ch3", "Ch4"],
			wide: ["Chwarter 1af", "2ail chwarter", "3ydd chwarter", "4ydd chwarter"]
		},
		u = {
			narrow: ["I", "Ch", "Ma", "E", "Mi", "Me", "G", "A", "Md", "H", "T", "Rh"],
			abbreviated: ["Ion", "Chwe", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rhag"],
			wide: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"]
		},
		s = {
			narrow: ["S", "Ll", "M", "M", "I", "G", "S"],
			short: ["Su", "Ll", "Ma", "Me", "Ia", "Gw", "Sa"],
			abbreviated: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
			wide: ["dydd Sul", "dydd Llun", "dydd Mawrth", "dydd Mercher", "dydd Iau", "dydd Gwener", "dydd Sadwrn"]
		},
		d = {
			narrow: {
				am: "b",
				pm: "h",
				midnight: "hn",
				noon: "hd",
				morning: "bore",
				afternoon: "prynhawn",
				evening: "gyda'r nos",
				night: "nos"
			},
			abbreviated: {
				am: "yb",
				pm: "yh",
				midnight: "hanner nos",
				noon: "hanner dydd",
				morning: "bore",
				afternoon: "prynhawn",
				evening: "gyda'r nos",
				night: "nos"
			},
			wide: {
				am: "y.b.",
				pm: "y.h.",
				midnight: "hanner nos",
				noon: "hanner dydd",
				morning: "bore",
				afternoon: "prynhawn",
				evening: "gyda'r nos",
				night: "nos"
			}
		},
		c = {
			narrow: {
				am: "b",
				pm: "h",
				midnight: "hn",
				noon: "hd",
				morning: "yn y bore",
				afternoon: "yn y prynhawn",
				evening: "gyda'r nos",
				night: "yn y nos"
			},
			abbreviated: {
				am: "yb",
				pm: "yh",
				midnight: "hanner nos",
				noon: "hanner dydd",
				morning: "yn y bore",
				afternoon: "yn y prynhawn",
				evening: "gyda'r nos",
				night: "yn y nos"
			},
			wide: {
				am: "y.b.",
				pm: "y.h.",
				midnight: "hanner nos",
				noon: "hanner dydd",
				morning: "yn y bore",
				afternoon: "yn y prynhawn",
				evening: "gyda'r nos",
				night: "yn y nos"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(c|o)/i,
			abbreviated: /^(c\.?\s?c\.?|o\.?\s?c\.?)/i,
			wide: /^(cyn christ|ar ôl crist|ar ol crist)/i
		},
		s = {
			wide: [/^c/i, /^(ar ôl crist|ar ol crist)/i],
			any: [/^c/i, /^o/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^ch[1234]/i,
			wide: /^(chwarter 1af)|([234](ail|ydd)? chwarter)/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(i|ch|m|e|g|a|h|t|rh)/i,
			abbreviated: /^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,
			wide: /^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i
		},
		m = {
			narrow: [/^i/i, /^ch/i, /^m/i, /^e/i, /^m/i, /^m/i, /^g/i, /^a/i, /^m/i, /^h/i, /^t/i, /^rh/i],
			any: [/^io/i, /^ch/i, /^maw/i, /^e/i, /^mai/i, /^meh/i, /^g/i, /^a/i, /^med/i, /^h/i, /^t/i, /^rh/i]
		},
		f = {
			narrow: /^(s|ll|m|i|g)/i,
			short: /^(su|ll|ma|me|ia|gw|sa)/i,
			abbreviated: /^(sul|llun|maw|mer|iau|gwe|sad)/i,
			wide: /^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i
		},
		h = {
			narrow: [/^s/i, /^ll/i, /^m/i, /^m/i, /^i/i, /^g/i, /^s/i],
			wide: [/^dydd su/i, /^dydd ll/i, /^dydd ma/i, /^dydd me/i, /^dydd i/i, /^dydd g/i, /^dydd sa/i],
			any: [/^su/i, /^ll/i, /^ma/i, /^me/i, /^i/i, /^g/i, /^sa/i]
		},
		p = {
			narrow: /^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,
			any: /^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i
		},
		g = {
			any: {
				am: /^b|(y\.?\s?b\.?)/i,
				pm: /^h|(y\.?\s?h\.?)|(yr hwyr)/i,
				midnight: /^hn|hanner nos/i,
				noon: /^hd|hanner dydd/i,
				morning: /bore/i,
				afternoon: /prynhawn/i,
				evening: /^gyda'r nos$/i,
				night: /blah/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(506),
		i = n(507),
		r = n(508),
		o = n(509),
		u = n(510),
		s = {
			code: "da",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "om " + a: a + " siden": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "mindre end ét sekund",
				other: "mindre end {{count}} sekunder"
			},
			xSeconds: {
				one: "1 sekund",
				other: "{{count}} sekunder"
			},
			halfAMinute: "ét halvt minut",
			lessThanXMinutes: {
				one: "mindre end ét minut",
				other: "mindre end {{count}} minutter"
			},
			xMinutes: {
				one: "1 minut",
				other: "{{count}} minutter"
			},
			aboutXHours: {
				one: "cirka 1 time",
				other: "cirka {{count}} timer"
			},
			xHours: {
				one: "1 time",
				other: "{{count}} timer"
			},
			xDays: {
				one: "1 dag",
				other: "{{count}} dage"
			},
			aboutXWeeks: {
				one: "cirka 1 uge",
				other: "cirka {{count}} uger"
			},
			xWeeks: {
				one: "1 uge",
				other: "{{count}} uger"
			},
			aboutXMonths: {
				one: "cirka 1 måned",
				other: "cirka {{count}} måneder"
			},
			xMonths: {
				one: "1 måned",
				other: "{{count}} måneder"
			},
			aboutXYears: {
				one: "cirka 1 år",
				other: "cirka {{count}} år"
			},
			xYears: {
				one: "1 år",
				other: "{{count}} år"
			},
			overXYears: {
				one: "over 1 år",
				other: "over {{count}} år"
			},
			almostXYears: {
				one: "næsten 1 år",
				other: "næsten {{count}} år"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE 'den' d. MMMM y",
			long: "d. MMMM y",
			medium: "d. MMM y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'kl'. {{time}}",
			long: "{{date}} 'kl'. {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'sidste' eeee 'kl.' p",
			yesterday: "'i går kl.' p",
			today: "'i dag kl.' p",
			tomorrow: "'i morgen kl.' p",
			nextWeek: "'på' eeee 'kl.' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["fvt", "vt"],
			abbreviated: ["f.v.t.", "v.t."],
			wide: ["før vesterlandsk tidsregning", "vesterlandsk tidsregning"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."],
			wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
			wide: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
		},
		s = {
			narrow: ["S", "M", "T", "O", "T", "F", "L"],
			short: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
			abbreviated: ["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."],
			wide: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "midnat",
				noon: "middag",
				morning: "morgen",
				afternoon: "eftermiddag",
				evening: "aften",
				night: "nat"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnat",
				noon: "middag",
				morning: "morgen",
				afternoon: "eftermiddag",
				evening: "aften",
				night: "nat"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnat",
				noon: "middag",
				morning: "morgen",
				afternoon: "eftermiddag",
				evening: "aften",
				night: "nat"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "midnat",
				noon: "middag",
				morning: "om morgenen",
				afternoon: "om eftermiddagen",
				evening: "om aftenen",
				night: "om natten"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnat",
				noon: "middag",
				morning: "om morgenen",
				afternoon: "om eftermiddagen",
				evening: "om aftenen",
				night: "om natten"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnat",
				noon: "middag",
				morning: "om morgenen",
				afternoon: "om eftermiddagen",
				evening: "om aftenen",
				night: "om natten"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)(\.)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(fKr|fvt|eKr|vt)/i,
			abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,
			wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i
		},
		s = {
			any: [/^f/i, /^(v|e)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]. kvt\./i,
			wide: /^[1234]\.? kvartal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
			wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[smtofl]/i,
			short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,
			abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
			wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
		},
		h = {
			narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i],
			any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
		},
		p = {
			narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,
			any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /midnat/i,
				noon: /middag/i,
				morning: /morgen/i,
				afternoon: /eftermiddag/i,
				evening: /aften/i,
				night: /nat/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(512),
		i = n(513),
		r = n(514),
		o = n(515),
		u = n(516),
		s = {
			code: "de",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a, r = n.addSuffix ? i[e].withPreposition: i[e].standalone;
			return a = "string" == typeof r ? r: 1 === t ? r.one: r.other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "in " + a: "vor " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				standalone: {
					one: "weniger als eine Sekunde",
					other: "weniger als {{count}} Sekunden"
				},
				withPreposition: {
					one: "weniger als einer Sekunde",
					other: "weniger als {{count}} Sekunden"
				}
			},
			xSeconds: {
				standalone: {
					one: "eine Sekunde",
					other: "{{count}} Sekunden"
				},
				withPreposition: {
					one: "einer Sekunde",
					other: "{{count}} Sekunden"
				}
			},
			halfAMinute: {
				standalone: "eine halbe Minute",
				withPreposition: "einer halben Minute"
			},
			lessThanXMinutes: {
				standalone: {
					one: "weniger als eine Minute",
					other: "weniger als {{count}} Minuten"
				},
				withPreposition: {
					one: "weniger als einer Minute",
					other: "weniger als {{count}} Minuten"
				}
			},
			xMinutes: {
				standalone: {
					one: "eine Minute",
					other: "{{count}} Minuten"
				},
				withPreposition: {
					one: "einer Minute",
					other: "{{count}} Minuten"
				}
			},
			aboutXHours: {
				standalone: {
					one: "etwa eine Stunde",
					other: "etwa {{count}} Stunden"
				},
				withPreposition: {
					one: "etwa einer Stunde",
					other: "etwa {{count}} Stunden"
				}
			},
			xHours: {
				standalone: {
					one: "eine Stunde",
					other: "{{count}} Stunden"
				},
				withPreposition: {
					one: "einer Stunde",
					other: "{{count}} Stunden"
				}
			},
			xDays: {
				standalone: {
					one: "ein Tag",
					other: "{{count}} Tage"
				},
				withPreposition: {
					one: "einem Tag",
					other: "{{count}} Tagen"
				}
			},
			aboutXWeeks: {
				standalone: {
					one: "etwa ein Woche",
					other: "etwa {{count}} Wochen"
				},
				withPreposition: {
					one: "etwa einem Woche",
					other: "etwa {{count}} Wochen"
				}
			},
			xWeeks: {
				standalone: {
					one: "ein Woche",
					other: "{{count}} Wochen"
				},
				withPreposition: {
					one: "einem Woche",
					other: "{{count}} Wochen"
				}
			},
			aboutXMonths: {
				standalone: {
					one: "etwa ein Monat",
					other: "etwa {{count}} Monate"
				},
				withPreposition: {
					one: "etwa einem Monat",
					other: "etwa {{count}} Monaten"
				}
			},
			xMonths: {
				standalone: {
					one: "ein Monat",
					other: "{{count}} Monate"
				},
				withPreposition: {
					one: "einem Monat",
					other: "{{count}} Monaten"
				}
			},
			aboutXYears: {
				standalone: {
					one: "etwa ein Jahr",
					other: "etwa {{count}} Jahre"
				},
				withPreposition: {
					one: "etwa einem Jahr",
					other: "etwa {{count}} Jahren"
				}
			},
			xYears: {
				standalone: {
					one: "ein Jahr",
					other: "{{count}} Jahre"
				},
				withPreposition: {
					one: "einem Jahr",
					other: "{{count}} Jahren"
				}
			},
			overXYears: {
				standalone: {
					one: "mehr als ein Jahr",
					other: "mehr als {{count}} Jahre"
				},
				withPreposition: {
					one: "mehr als einem Jahr",
					other: "mehr als {{count}} Jahren"
				}
			},
			almostXYears: {
				standalone: {
					one: "fast ein Jahr",
					other: "fast {{count}} Jahre"
				},
				withPreposition: {
					one: "fast einem Jahr",
					other: "fast {{count}} Jahren"
				}
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM y",
			long: "do MMMM y",
			medium: "do MMM. y",
			short: "dd.MM.y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'um' {{time}}",
			long: "{{date}} 'um' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'letzten' eeee 'um' p",
			yesterday: "'gestern um' p",
			today: "'heute um' p",
			tomorrow: "'morgen um' p",
			nextWeek: "eeee 'um' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["v.Chr.", "n.Chr."],
			abbreviated: ["v.Chr.", "n.Chr."],
			wide: ["vor Christus", "nach Christus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
			wide: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
		},
		s = {
			narrow: ["S", "M", "D", "M", "D", "F", "S"],
			short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
			abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
			wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
		},
		d = {
			narrow: {
				am: "vm.",
				pm: "nm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachm.",
				evening: "Abend",
				night: "Nacht"
			},
			abbreviated: {
				am: "vorm.",
				pm: "nachm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachmittag",
				evening: "Abend",
				night: "Nacht"
			},
			wide: {
				am: "vormittags",
				pm: "nachmittags",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "Morgen",
				afternoon: "Nachmittag",
				evening: "Abend",
				night: "Nacht"
			}
		},
		c = {
			narrow: {
				am: "vm.",
				pm: "nm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachm.",
				evening: "abends",
				night: "nachts"
			},
			abbreviated: {
				am: "vorm.",
				pm: "nachm.",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachmittags",
				evening: "abends",
				night: "nachts"
			},
			wide: {
				am: "vormittags",
				pm: "nachmittags",
				midnight: "Mitternacht",
				noon: "Mittag",
				morning: "morgens",
				afternoon: "nachmittags",
				evening: "abends",
				night: "nachts"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(\.)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
			abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
			wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
		},
		s = {
			any: [/^v/i, /^n/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](\.)? Quartal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mär|apr|mai|jun|jul|aug|sep|okt|nov|dez)/i,
			wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[smdmf]/i,
			short: /^(so|mo|di|mi|do|fr|sa)/i,
			abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
			wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
		},
		h = {
			any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
		},
		p = {
			narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
			abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
			wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
		},
		g = {
			any: {
				am: /^v/i,
				pm: /^n/i,
				midnight: /^Mitte/i,
				noon: /^Mitta/i,
				morning: /morgens/i,
				afternoon: /nachmittags/i,
				evening: /abends/i,
				night: /nachts/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "wide",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(518),
		i = n(519),
		r = n(520),
		o = n(521),
		u = n(522),
		s = {
			code: "el",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "σε " + a: a + " πριν": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "λιγότερο από ένα δευτερόλεπτο",
				other: "λιγότερο από {{count}} δευτερόλεπτα"
			},
			xSeconds: {
				one: "1 δευτερόλεπτο",
				other: "{{count}} δευτερόλεπτα"
			},
			halfAMinute: "μισό λεπτό",
			lessThanXMinutes: {
				one: "λιγότερο από ένα λεπτό",
				other: "λιγότερο από {{count}} λεπτά"
			},
			xMinutes: {
				one: "1 λεπτό",
				other: "{{count}} λεπτά"
			},
			aboutXHours: {
				one: "περίπου 1 ώρα",
				other: "περίπου {{count}} ώρες"
			},
			xHours: {
				one: "1 ώρα",
				other: "{{count}} ώρες"
			},
			xDays: {
				one: "1 ημέρα",
				other: "{{count}} ημέρες"
			},
			aboutXWeeks: {
				one: "περίπου 1 εβδομάδα",
				other: "περίπου {{count}} εβδομάδες"
			},
			xWeeks: {
				one: "1 εβδομάδα",
				other: "{{count}} εβδομάδες"
			},
			aboutXMonths: {
				one: "περίπου 1 μήνας",
				other: "περίπου {{count}} μήνες"
			},
			xMonths: {
				one: "1 μήνας",
				other: "{{count}} μήνες"
			},
			aboutXYears: {
				one: "περίπου 1 χρόνο",
				other: "περίπου {{count}} χρόνια"
			},
			xYears: {
				one: "1 χρόνο",
				other: "{{count}} χρόνια"
			},
			overXYears: {
				one: "πάνω από 1 χρόνο",
				other: "πάνω από {{count}} χρόνια"
			},
			almostXYears: {
				one: "περίπου 1 χρόνο",
				other: "περίπου {{count}} χρόνια"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "d/M/yy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} - {{time}}",
			long: "{{date}} - {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var r = i[e];
			return "function" == typeof r ? r(t, n, a) : r
		}
		t.a = a;
		var i = {
			lastWeek: function(e) {
				switch (e.getUTCDay()) {
				case 6:
					return "'το προηγούμενο' eeee 'στις' p";
				default:
					return "'την προηγούμενη' eeee 'στις' p"
				}
			},
			yesterday: "'χθες στις' p",
			today: "'σήμερα στις' p",
			tomorrow: "'αύριο στις' p",
			nextWeek: "eeee 'στις' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n, a = t || {},
			i = String(a.unit);
			return n = "year" === i || "month" === i ? "ος": "week" === i || "dayOfYear" === i || "day" === i || "hour" === i || "date" === i ? "η": "ο",
			e + n
		}
		var i = n(3),
		r = {
			narrow: ["πΧ", "μΧ"],
			abbreviated: ["π.Χ.", "μ.Χ."],
			wide: ["προ Χριστού", "μετά Χριστόν"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Τ1", "Τ2", "Τ3", "Τ4"],
			wide: ["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"]
		},
		u = {
			narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
			abbreviated: ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"],
			wide: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"]
		},
		s = {
			narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
			abbreviated: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαΐ", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
			wide: ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"]
		},
		d = {
			narrow: ["Κ", "Δ", "T", "Τ", "Π", "Π", "Σ"],
			short: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"],
			abbreviated: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
			wide: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
		},
		c = {
			narrow: {
				am: "πμ",
				pm: "μμ",
				midnight: "μεσάνυχτα",
				noon: "μεσημέρι",
				morning: "πρωί",
				afternoon: "απόγευμα",
				evening: "βράδυ",
				night: "νύχτα"
			},
			abbreviated: {
				am: "π.μ.",
				pm: "μ.μ.",
				midnight: "μεσάνυχτα",
				noon: "μεσημέρι",
				morning: "πρωί",
				afternoon: "απόγευμα",
				evening: "βράδυ",
				night: "νύχτα"
			},
			wide: {
				am: "π.μ.",
				pm: "μ.μ.",
				midnight: "μεσάνυχτα",
				noon: "μεσημέρι",
				morning: "πρωί",
				afternoon: "απόγευμα",
				evening: "βράδυ",
				night: "νύχτα"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide",
				formattingValues: s,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: c,
				defaultWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(ος|η|ο)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(πΧ|μΧ)/i,
			abbreviated: /^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i,
			wide: /^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i
		},
		s = {
			any: [/^π/i, /^(μ|κ)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^τ[1234]/i,
			wide: /^[1234]ο? τρ(ί|ι)μηνο/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[ιφμαμιιασονδ]/i,
			abbreviated: /^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i,
			wide: /^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i
		},
		m = {
			narrow: [/^ι/i, /^φ/i, /^μ/i, /^α/i, /^μ/i, /^ι/i, /^ι/i, /^α/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i],
			any: [/^ια/i, /^φ/i, /^μ[άα]ρ/i, /^απ/i, /^μ[άα][ιΐ]/i, /^ιο[ύυ]ν/i, /^ιο[ύυ]λ/i, /^α[ύυ]/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i]
		},
		f = {
			narrow: /^[κδτπσ]/i,
			short: /^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i,
			abbreviated: /^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i,
			wide: /^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i
		},
		h = {
			narrow: [/^κ/i, /^δ/i, /^τ/i, /^τ/i, /^π/i, /^π/i, /^σ/i],
			any: [/^κ/i, /^δ/i, /^τρ/i, /^τε/i, /^π[εέ]/i, /^π[αά]/i, /^σ/i]
		},
		p = {
			narrow: /^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i,
			any: /^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i
		},
		g = {
			any: {
				am: /^πμ|π\.\s?μ\./i,
				pm: /^μμ|μ\.\s?μ\./i,
				midnight: /^μεσάν/i,
				noon: /^μεσημ(έ|ε)/i,
				morning: /πρω(ί|ι)/i,
				afternoon: /απ(ό|ο)γευμα/i,
				evening: /βρ(ά|α)δυ/i,
				night: /ν(ύ|υ)χτα/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(48),
		i = n(524),
		r = n(35),
		o = n(36),
		u = n(37),
		s = {
			code: "en-AU",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		var a = n(526),
		i = n(527),
		r = n(35),
		o = n(36),
		u = n(37),
		s = {
			code: "en-CA",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "in " + a: a + " ago": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "less than a second",
				other: "less than {{count}} seconds"
			},
			xSeconds: {
				one: "a second",
				other: "{{count}} seconds"
			},
			halfAMinute: "half a minute",
			lessThanXMinutes: {
				one: "less than a minute",
				other: "less than {{count}} minutes"
			},
			xMinutes: {
				one: "a minute",
				other: "{{count}} minutes"
			},
			aboutXHours: {
				one: "about an hour",
				other: "about {{count}} hours"
			},
			xHours: {
				one: "an hour",
				other: "{{count}} hours"
			},
			xDays: {
				one: "a day",
				other: "{{count}} days"
			},
			aboutXWeeks: {
				one: "about a week",
				other: "about {{count}} weeks"
			},
			xWeeks: {
				one: "a week",
				other: "{{count}} weeks"
			},
			aboutXMonths: {
				one: "about a month",
				other: "about {{count}} months"
			},
			xMonths: {
				one: "a month",
				other: "{{count}} months"
			},
			aboutXYears: {
				one: "about a year",
				other: "about {{count}} years"
			},
			xYears: {
				one: "a year",
				other: "{{count}} years"
			},
			overXYears: {
				one: "over a year",
				other: "over {{count}} years"
			},
			almostXYears: {
				one: "almost a year",
				other: "almost {{count}} years"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM do, yyyy",
			long: "MMMM do, yyyy",
			medium: "MMM d, yyyy",
			short: "yyyy-MM-dd"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		var a = n(48),
		i = n(529),
		r = n(35),
		o = n(36),
		u = n(37),
		s = {
			code: "en-GB",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		var a = n(48),
		i = n(531),
		r = n(35),
		o = n(36),
		u = n(37),
		s = {
			code: "en-IN",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM, yyyy",
			medium: "d MMM, yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		var a = n(48),
		i = n(533),
		r = n(35),
		o = n(36),
		u = n(37),
		s = {
			code: "en-NZ",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		var a = n(535),
		i = n(536),
		r = n(537),
		o = n(538),
		u = n(539),
		s = {
			code: "eo",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "post " + a: "antaŭ " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "malpli ol sekundo",
				other: "malpli ol {{count}} sekundoj"
			},
			xSeconds: {
				one: "1 sekundo",
				other: "{{count}} sekundoj"
			},
			halfAMinute: "duonminuto",
			lessThanXMinutes: {
				one: "malpli ol minuto",
				other: "malpli ol {{count}} minutoj"
			},
			xMinutes: {
				one: "1 minuto",
				other: "{{count}} minutoj"
			},
			aboutXHours: {
				one: "proksimume 1 horo",
				other: "proksimume {{count}} horoj"
			},
			xHours: {
				one: "1 horo",
				other: "{{count}} horoj"
			},
			xDays: {
				one: "1 tago",
				other: "{{count}} tagoj"
			},
			aboutXMonths: {
				one: "proksimume 1 monato",
				other: "proksimume {{count}} monatoj"
			},
			xWeeks: {
				one: "1 semajno",
				other: "{{count}} semajnoj"
			},
			aboutXWeeks: {
				one: "proksimume 1 semajno",
				other: "proksimume {{count}} semajnoj"
			},
			xMonths: {
				one: "1 monato",
				other: "{{count}} monatoj"
			},
			aboutXYears: {
				one: "proksimume 1 jaro",
				other: "proksimume {{count}} jaroj"
			},
			xYears: {
				one: "1 jaro",
				other: "{{count}} jaroj"
			},
			overXYears: {
				one: "pli ol 1 jaro",
				other: "pli ol {{count}} jaroj"
			},
			almostXYears: {
				one: "preskaŭ 1 jaro",
				other: "preskaŭ {{count}} jaroj"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do 'de' MMMM y",
			long: "y-MMMM-dd",
			medium: "y-MMM-dd",
			short: "yyyy-MM-dd"
		},
		r = {
			full: "Ho 'horo kaj' m:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			any: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "any"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'pasinta' eeee 'je' p",
			yesterday: "'hieraŭ je' p",
			today: "'hodiaŭ je' p",
			tomorrow: "'morgaŭ je' p",
			nextWeek: "eeee 'je' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "-a"
		}
		var i = n(3),
		r = {
			narrow: ["aK", "pK"],
			abbreviated: ["a.K.E.", "p.K.E."],
			wide: ["antaŭ Komuna Erao", "Komuna Erao"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["K1", "K2", "K3", "K4"],
			wide: ["1-a kvaronjaro", "2-a kvaronjaro", "3-a kvaronjaro", "4-a kvaronjaro"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aŭg", "sep", "okt", "nov", "dec"],
			wide: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro"]
		},
		s = {
			narrow: ["D", "L", "M", "M", "Ĵ", "V", "S"],
			short: ["di", "lu", "ma", "me", "ĵa", "ve", "sa"],
			abbreviated: ["dim", "lun", "mar", "mer", "ĵaŭ", "ven", "sab"],
			wide: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "noktomezo",
				noon: "tagmezo",
				morning: "matene",
				afternoon: "posttagmeze",
				evening: "vespere",
				night: "nokte"
			},
			abbreviated: {
				am: "a.t.m.",
				pm: "p.t.m.",
				midnight: "noktomezo",
				noon: "tagmezo",
				morning: "matene",
				afternoon: "posttagmeze",
				evening: "vespere",
				night: "nokte"
			},
			wide: {
				am: "antaŭtagmeze",
				pm: "posttagmeze",
				midnight: "noktomezo",
				noon: "tagmezo",
				morning: "matene",
				afternoon: "posttagmeze",
				evening: "vespere",
				night: "nokte"
			}
		},
		c = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide"
			})
		};
		t.a = c
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(-?a)?/i,
		o = /\d+/i,
		u = {
			narrow: /^([ap]k)/i,
			abbreviated: /^([ap]\.?\s?k\.?\s?e\.?)/i,
			wide: /^((antaǔ |post )?komuna erao)/i
		},
		s = {
			any: [/^a/i, /^[kp]/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^k[1234]/i,
			wide: /^[1234](-?a)? kvaronjaro/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,
			wide: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^a(u|ŭ)/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[dlmĵjvs]/i,
			short: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,
			abbreviated: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,
			wide: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i
		},
		h = {
			narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^(j|ĵ)/i, /^v/i, /^s/i],
			any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i]
		},
		p = {
			narrow: /^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
			abbreviated: /^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
			wide: /^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^noktom/i,
				noon: /^t/i,
				morning: /^m/i,
				afternoon: /^posttagmeze/i,
				evening: /^v/i,
				night: /^n/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "wide",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(541),
		i = n(542),
		r = n(543),
		o = n(544),
		u = n(545),
		s = {
			code: "es",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "en " + a: "hace " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "menos de un segundo",
				other: "menos de {{count}} segundos"
			},
			xSeconds: {
				one: "1 segundo",
				other: "{{count}} segundos"
			},
			halfAMinute: "medio minuto",
			lessThanXMinutes: {
				one: "menos de un minuto",
				other: "menos de {{count}} minutos"
			},
			xMinutes: {
				one: "1 minuto",
				other: "{{count}} minutos"
			},
			aboutXHours: {
				one: "alrededor de 1 hora",
				other: "alrededor de {{count}} horas"
			},
			xHours: {
				one: "1 hora",
				other: "{{count}} horas"
			},
			xDays: {
				one: "1 día",
				other: "{{count}} días"
			},
			aboutXWeeks: {
				one: "alrededor de 1 semana",
				other: "alrededor de {{count}} semanas"
			},
			xWeeks: {
				one: "1 semana",
				other: "{{count}} semanas"
			},
			aboutXMonths: {
				one: "alrededor de 1 mes",
				other: "alrededor de {{count}} meses"
			},
			xMonths: {
				one: "1 mes",
				other: "{{count}} meses"
			},
			aboutXYears: {
				one: "alrededor de 1 año",
				other: "alrededor de {{count}} años"
			},
			xYears: {
				one: "1 año",
				other: "{{count}} años"
			},
			overXYears: {
				one: "más de 1 año",
				other: "más de {{count}} años"
			},
			almostXYears: {
				one: "casi 1 año",
				other: "casi {{count}} años"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'a las' {{time}}",
			long: "{{date}} 'a las' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return 1 !== t.getUTCHours() ? r[e] : i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'el' eeee 'pasado a la' LT",
			yesterday: "'ayer a la' p",
			today: "'hoy a la' p",
			tomorrow: "'mañana a la' p",
			nextWeek: "eeee 'a la' p",
			other: "P"
		},
		r = {
			lastWeek: "'el' eeee 'pasado a las' p",
			yesterday: "'ayer a las' p",
			today: "'hoy a las' p",
			tomorrow: "'mañana a las' p",
			nextWeek: "eeee 'a las' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "º"
		}
		var i = n(3),
		r = {
			narrow: ["AC", "DC"],
			abbreviated: ["AC", "DC"],
			wide: ["antes de cristo", "después de cristo"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["T1", "T2", "T3", "T4"],
			wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
		},
		u = {
			narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
			abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
			wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
		},
		s = {
			narrow: ["d", "l", "m", "m", "j", "v", "s"],
			short: ["do", "lu", "ma", "mi", "ju", "vi", "sa"],
			abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
			wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "mañana",
				afternoon: "tarde",
				evening: "tarde",
				night: "noche"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "medianoche",
				noon: "mediodia",
				morning: "mañana",
				afternoon: "tarde",
				evening: "tarde",
				night: "noche"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "medianoche",
				noon: "mediodia",
				morning: "mañana",
				afternoon: "tarde",
				evening: "tarde",
				night: "noche"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "de la mañana",
				afternoon: "de la tarde",
				evening: "de la tarde",
				night: "de la noche"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "medianoche",
				noon: "mediodia",
				morning: "de la mañana",
				afternoon: "de la tarde",
				evening: "de la tarde",
				night: "de la noche"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "medianoche",
				noon: "mediodia",
				morning: "de la mañana",
				afternoon: "de la tarde",
				evening: "de la tarde",
				night: "de la noche"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(º)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ac|dc|a|d)/i,
			abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
			wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
		},
		s = {
			any: [/^ac/i, /^dc/i],
			wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^T[1234]/i,
			wide: /^[1234](º)? trimestre/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[efmajsond]/i,
			abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
			wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
		},
		m = {
			narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
		},
		f = {
			narrow: /^[dlmjvs]/i,
			short: /^(do|lu|ma|mi|ju|vi|sa)/i,
			abbreviated: /^(dom|lun|mar|mie|jue|vie|sab)/i,
			wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
		},
		h = {
			narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
			any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
		},
		p = {
			narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
			any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn/i,
				noon: /^md/i,
				morning: /mañana/i,
				afternoon: /tarde/i,
				evening: /tarde/i,
				night: /noche/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(547),
		i = n(548),
		r = n(549),
		o = n(550),
		u = n(551),
		s = {
			code: "et",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a, r = n.addSuffix ? i[e].withPreposition: i[e].standalone;
			return a = "string" == typeof r ? r: 1 === t ? r.one: r.other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + " pärast": a + " eest": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				standalone: {
					one: "vähem kui üks sekund",
					other: "vähem kui {{count}} sekundit"
				},
				withPreposition: {
					one: "vähem kui ühe sekundi",
					other: "vähem kui {{count}} sekundi"
				}
			},
			xSeconds: {
				standalone: {
					one: "üks sekund",
					other: "{{count}} sekundit"
				},
				withPreposition: {
					one: "ühe sekundi",
					other: "{{count}} sekundi"
				}
			},
			halfAMinute: {
				standalone: "pool minutit",
				withPreposition: "poole minuti"
			},
			lessThanXMinutes: {
				standalone: {
					one: "vähem kui üks minut",
					other: "vähem kui {{count}} minutit"
				},
				withPreposition: {
					one: "vähem kui ühe minuti",
					other: "vähem kui {{count}} minuti"
				}
			},
			xMinutes: {
				standalone: {
					one: "üks minut",
					other: "{{count}} minutit"
				},
				withPreposition: {
					one: "ühe minuti",
					other: "{{count}} minuti"
				}
			},
			aboutXHours: {
				standalone: {
					one: "umbes üks tund",
					other: "umbes {{count}} tundi"
				},
				withPreposition: {
					one: "umbes ühe tunni",
					other: "umbes {{count}} tunni"
				}
			},
			xHours: {
				standalone: {
					one: "üks tund",
					other: "{{count}} tundi"
				},
				withPreposition: {
					one: "ühe tunni",
					other: "{{count}} tunni"
				}
			},
			xDays: {
				standalone: {
					one: "üks päev",
					other: "{{count}} päeva"
				},
				withPreposition: {
					one: "ühe päeva",
					other: "{{count}} päeva"
				}
			},
			aboutXWeeks: {
				standalone: {
					one: "umbes üks nädal",
					other: "umbes {{count}} nädalat"
				},
				withPreposition: {
					one: "umbes ühe nädala",
					other: "umbes {{count}} nädala"
				}
			},
			xWeeks: {
				standalone: {
					one: "üks nädal",
					other: "{{count}} nädalat"
				},
				withPreposition: {
					one: "ühe nädala",
					other: "{{count}} nädala"
				}
			},
			aboutXMonths: {
				standalone: {
					one: "umbes üks kuu",
					other: "umbes {{count}} kuud"
				},
				withPreposition: {
					one: "umbes ühe kuu",
					other: "umbes {{count}} kuu"
				}
			},
			xMonths: {
				standalone: {
					one: "üks kuu",
					other: "{{count}} kuud"
				},
				withPreposition: {
					one: "ühe kuu",
					other: "{{count}} kuu"
				}
			},
			aboutXYears: {
				standalone: {
					one: "umbes üks aasta",
					other: "umbes {{count}} aastat"
				},
				withPreposition: {
					one: "umbes ühe aasta",
					other: "umbes {{count}} aasta"
				}
			},
			xYears: {
				standalone: {
					one: "üks aasta",
					other: "{{count}} aastat"
				},
				withPreposition: {
					one: "ühe aasta",
					other: "{{count}} aasta"
				}
			},
			overXYears: {
				standalone: {
					one: "rohkem kui üks aasta",
					other: "rohkem kui {{count}} aastat"
				},
				withPreposition: {
					one: "rohkem kui ühe aasta",
					other: "rohkem kui {{count}} aasta"
				}
			},
			almostXYears: {
				standalone: {
					one: "peaaegu üks aasta",
					other: "peaaegu {{count}} aastat"
				},
				withPreposition: {
					one: "peaaegu ühe aasta",
					other: "peaaegu {{count}} aasta"
				}
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "eeee, d. MMMM y",
			long: "d. MMMM y",
			medium: "d. MMM y",
			short: "dd.MM.y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'kell' {{time}}",
			long: "{{date}} 'kell' {{time}}",
			medium: "{{date}}. {{time}}",
			short: "{{date}}. {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'eelmine' eeee 'kell' p",
			yesterday: "'eile kell' p",
			today: "'täna kell' p",
			tomorrow: "'homme kell' p",
			nextWeek: "'järgmine' eeee 'kell' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["e.m.a", "m.a.j"],
			abbreviated: ["e.m.a", "m.a.j"],
			wide: ["enne meie ajaarvamist", "meie ajaarvamise järgi"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["K1", "K2", "K3", "K4"],
			wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
		},
		u = {
			narrow: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"],
			wide: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"]
		},
		s = {
			narrow: ["P", "E", "T", "K", "N", "R", "L"],
			short: ["P", "E", "T", "K", "N", "R", "L"],
			abbreviated: ["pühap.", "esmasp.", "teisip.", "kolmap.", "neljap.", "reede.", "laup."],
			wide: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"]
		},
		d = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "kesköö",
				noon: "keskpäev",
				morning: "hommik",
				afternoon: "pärastlõuna",
				evening: "õhtu",
				night: "öö"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "kesköö",
				noon: "keskpäev",
				morning: "hommik",
				afternoon: "pärastlõuna",
				evening: "õhtu",
				night: "öö"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "kesköö",
				noon: "keskpäev",
				morning: "hommik",
				afternoon: "pärastlõuna",
				evening: "õhtu",
				night: "öö"
			}
		},
		c = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "keskööl",
				noon: "keskpäeval",
				morning: "hommikul",
				afternoon: "pärastlõunal",
				evening: "õhtul",
				night: "öösel"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "keskööl",
				noon: "keskpäeval",
				morning: "hommikul",
				afternoon: "pärastlõunal",
				evening: "õhtul",
				night: "öösel"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "keskööl",
				noon: "keskpäeval",
				morning: "hommikul",
				afternoon: "pärastlõunal",
				evening: "õhtul",
				night: "öösel"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				formattingValues: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				formattingValues: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				formattingValues: c,
				defaultWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^\d+\./i,
		o = /\d+/i,
		u = {
			narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
			abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
			wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i
		},
		s = {
			any: [/^e/i, /^(m|p)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^K[1234]/i,
			wide: /^[1234](\.)? kvartal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jvmasond]/i,
			abbreviated: /^('jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets')/i,
			wide: /^('jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember')/i
		},
		m = {
			narrow: [/^j/i, /^v/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^v/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[petknrl]/i,
			short: /^[petknrl]/i,
			abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,
			wide: /^('pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev')/i
		},
		h = {
			any: [/^p/i, /^e/i, /^t/i, /^k/i, /^n/i, /^r/i, /^l/i]
		},
		p = {
			any: /^(am|pm|kesköö|keskpäev|hommik|pärastlõuna|õhtu|öö)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^keskö/i,
				noon: /^keskp/i,
				morning: /hommik/i,
				afternoon: /pärastlõuna/i,
				evening: /õhtu/i,
				night: /öö/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(553),
		i = n(554),
		r = n(555),
		o = n(556),
		u = n(557),
		s = {
			code: "eu",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "en " + a: "duela " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "segundo bat baino gutxiago",
				other: "{{count}} segundo baino gutxiago"
			},
			xSeconds: {
				one: "1 segundo",
				other: "{{count}} segundo"
			},
			halfAMinute: "minutu erdi",
			lessThanXMinutes: {
				one: "minutu bat baino gutxiago",
				other: "{{count}} minutu baino gutxiago"
			},
			xMinutes: {
				one: "1 minutu",
				other: "{{count}} minutu"
			},
			aboutXHours: {
				one: "1 ordu gutxi gorabehera",
				other: "{{count}} ordu gutxi gorabehera"
			},
			xHours: {
				one: "1 ordu",
				other: "{{count}} ordu"
			},
			xDays: {
				one: "1 egun",
				other: "{{count}} egun"
			},
			aboutXWeeks: {
				one: "aste 1 inguru",
				other: "{{count}} aste inguru"
			},
			xWeeks: {
				one: "1 aste",
				other: "{{count}} astean"
			},
			aboutXMonths: {
				one: "1 hilabete gutxi gorabehera",
				other: "{{count}} hilabete gutxi gorabehera"
			},
			xMonths: {
				one: "1 hilabete",
				other: "{{count}} hilabete"
			},
			aboutXYears: {
				one: "1 urte gutxi gorabehera",
				other: "{{count}} urte gutxi gorabehera"
			},
			xYears: {
				one: "1 urte",
				other: "{{count}} urte"
			},
			overXYears: {
				one: "1 urte baino gehiago",
				other: "{{count}} urte baino gehiago"
			},
			almostXYears: {
				one: "ia 1 urte",
				other: "ia {{count}} urte"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d 'de' MMMM y",
			long: "d 'de' MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'tan' {{time}}",
			long: "{{date}} 'tan' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return 1 !== t.getUTCHours() ? r[e] : i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'joan den' eeee, LT",
			yesterday: "'atzo,' p",
			today: "'gaur,' p",
			tomorrow: "'bihar,' p",
			nextWeek: "eeee, p",
			other: "P"
		},
		r = {
			lastWeek: "'joan den' eeee, p",
			yesterday: "'atzo,' p",
			today: "'gaur,' p",
			tomorrow: "'bihar,' p",
			nextWeek: "eeee, p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["k.a.", "k.o."],
			abbreviated: ["k.a.", "k.o."],
			wide: ["kristo aurretik", "kristo ondoren"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1H", "2H", "3H", "4H"],
			wide: ["1. hiruhilekoa", "2. hiruhilekoa", "3. hiruhilekoa", "4. hiruhilekoa"]
		},
		u = {
			narrow: ["u", "o", "m", "a", "m", "e", "u", "a", "i", "u", "a", "a"],
			abbreviated: ["urt", "ots", "mar", "api", "mai", "eka", "uzt", "abu", "ira", "urr", "aza", "abe"],
			wide: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"]
		},
		s = {
			narrow: ["i", "a", "a", "a", "o", "o", "l"],
			short: ["ig", "al", "as", "az", "og", "or", "lr"],
			abbreviated: ["iga", "ast", "ast", "ast", "ost", "ost", "lar"],
			wide: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "ge",
				noon: "eg",
				morning: "goiza",
				afternoon: "arratsaldea",
				evening: "arratsaldea",
				night: "gaua"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "gauerdia",
				noon: "eguerdia",
				morning: "goiza",
				afternoon: "arratsaldea",
				evening: "arratsaldea",
				night: "gaua"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "gauerdia",
				noon: "eguerdia",
				morning: "goiza",
				afternoon: "arratsaldea",
				evening: "arratsaldea",
				night: "gaua"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "ge",
				noon: "eg",
				morning: "goizean",
				afternoon: "arratsaldean",
				evening: "arratsaldean",
				night: "gauean"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "gauerdia",
				noon: "eguerdia",
				morning: "goizean",
				afternoon: "arratsaldean",
				evening: "arratsaldean",
				night: "gauean"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "gauerdia",
				noon: "eguerdia",
				morning: "goizean",
				afternoon: "arratsaldean",
				evening: "arratsaldean",
				night: "gauean"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(.)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(k.a.|k.o.)/i,
			abbreviated: /^(k.a.|k.o.)/i,
			wide: /^(kristo aurretik|kristo ondoren)/i
		},
		s = {
			narrow: [/^k.a./i, /^k.o./i],
			abbreviated: [/^(k.a.)/i, /^(k.o.)/i],
			wide: [/^(kristo aurretik)/i, /^(kristo ondoren)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]H/i,
			wide: /^[1234](.)? hiruhilekoa/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[uomaei]/i,
			abbreviated: /^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,
			wide: /^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i
		},
		m = {
			narrow: [/^u/i, /^o/i, /^m/i, /^a/i, /^m/i, /^e/i, /^u/i, /^a/i, /^i/i, /^u/i, /^a/i, /^a/i],
			any: [/^urt/i, /^ots/i, /^mar/i, /^api/i, /^mai/i, /^eka/i, /^uzt/i, /^abu/i, /^ira/i, /^urr/i, /^aza/i, /^abe/i]
		},
		f = {
			narrow: /^[iaol]/i,
			short: /^(ig|al|as|az|og|or|lr)/i,
			abbreviated: /^(iga|ast|ast|ast|ost|ost|lar)/i,
			wide: /^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i
		},
		h = {
			narrow: [/^i/i, /^a/i, /^a/i, /^a/i, /^o/i, /^o/i, /^l/i],
			short: [/^ig/i, /^al/i, /^as/i, /^az/i, /^og/i, /^or/i, /^lr/i],
			abbreviated: [/^iga/i, /^ast/i, /^ast/i, /^ast/i, /^ost/i, /^ost/i, /^lar/i],
			wide: [/^igandea/i, /^astelehena/i, /^asteartea/i, /^asteazkena/i, /^osteguna/i, /^ostirala/i, /^larunbata/i]
		},
		p = {
			narrow: /^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,
			any: /^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i
		},
		g = {
			narrow: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^ge/i,
				noon: /^eg/i,
				morning: /goiz/i,
				afternoon: /arratsaldea/i,
				evening: /arratsaldea/i,
				night: /gau/i
			},
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^gauerdia/i,
				noon: /^eguerdia/i,
				morning: /goiz/i,
				afternoon: /arratsaldea/i,
				evening: /arratsaldea/i,
				night: /gau/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(559),
		i = n(560),
		r = n(561),
		o = n(562),
		u = n(563),
		s = {
			code: "fa-IR",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "در " + a: a + " قبل": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "کمتر از یک ثانیه",
				other: "کمتر از {{count}} ثانیه"
			},
			xSeconds: {
				one: "1 ثانیه",
				other: "{{count}} ثانیه"
			},
			halfAMinute: "نیم دقیقه",
			lessThanXMinutes: {
				one: "کمتر از یک دقیقه",
				other: "کمتر از {{count}} دقیقه"
			},
			xMinutes: {
				one: "1 دقیقه",
				other: "{{count}} دقیقه"
			},
			aboutXHours: {
				one: "حدود 1 ساعت",
				other: "حدود {{count}} ساعت"
			},
			xHours: {
				one: "1 ساعت",
				other: "{{count}} ساعت"
			},
			xDays: {
				one: "1 روز",
				other: "{{count}} روز"
			},
			aboutXWeeks: {
				one: "حدود 1 هفته",
				other: "حدود {{count}} هفته"
			},
			xWeeks: {
				one: "1 هفته",
				other: "{{count}} هفته"
			},
			aboutXMonths: {
				one: "حدود 1 ماه",
				other: "حدود {{count}} ماه"
			},
			xMonths: {
				one: "1 ماه",
				other: "{{count}} ماه"
			},
			aboutXYears: {
				one: "حدود 1 سال",
				other: "حدود {{count}} سال"
			},
			xYears: {
				one: "1 سال",
				other: "{{count}} سال"
			},
			overXYears: {
				one: "بیشتر از 1 سال",
				other: "بیشتر از {{count}} سال"
			},
			almostXYears: {
				one: "نزدیک 1 سال",
				other: "نزدیک {{count}} سال"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE do MMMM y",
			long: "do MMMM y",
			medium: "d MMM y",
			short: "yyyy/MM/dd"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'در' {{time}}",
			long: "{{date}} 'در' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'گذشته در' p",
			yesterday: "'دیروز در' p",
			today: "'امروز در' p",
			tomorrow: "'فردا در' p",
			nextWeek: "eeee 'در' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return String(e)
		}
		var i = n(3),
		r = {
			narrow: ["ق", "ب"],
			abbreviated: ["ق.م.", "ب.م."],
			wide: ["قبل از میلاد", "بعد از میلاد"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["س‌م1", "س‌م2", "س‌م3", "س‌م4"],
			wide: ["سه‌ماهه 1", "سه‌ماهه 2", "سه‌ماهه 3", "سه‌ماهه 4"]
		},
		u = {
			narrow: ["ژ", "ف", "م", "آ", "م", "ج", "ج", "آ", "س", "ا", "ن", "د"],
			abbreviated: ["ژانـ", "فور", "مارس", "آپر", "می", "جون", "جولـ", "آگو", "سپتـ", "اکتـ", "نوامـ", "دسامـ"],
			wide: ["ژانویه", "فوریه", "مارس", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"]
		},
		s = {
			narrow: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
			short: ["1ش", "2ش", "3ش", "4ش", "5ش", "ج", "ش"],
			abbreviated: ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
			wide: ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
		},
		d = {
			narrow: {
				am: "ق",
				pm: "ب",
				midnight: "ن",
				noon: "ظ",
				morning: "ص",
				afternoon: "ب.ظ.",
				evening: "ع",
				night: "ش"
			},
			abbreviated: {
				am: "ق.ظ.",
				pm: "ب.ظ.",
				midnight: "نیمه‌شب",
				noon: "ظهر",
				morning: "صبح",
				afternoon: "بعدازظهر",
				evening: "عصر",
				night: "شب"
			},
			wide: {
				am: "قبل‌ازظهر",
				pm: "بعدازظهر",
				midnight: "نیمه‌شب",
				noon: "ظهر",
				morning: "صبح",
				afternoon: "بعدازظهر",
				evening: "عصر",
				night: "شب"
			}
		},
		c = {
			narrow: {
				am: "ق",
				pm: "ب",
				midnight: "ن",
				noon: "ظ",
				morning: "ص",
				afternoon: "ب.ظ.",
				evening: "ع",
				night: "ش"
			},
			abbreviated: {
				am: "ق.ظ.",
				pm: "ب.ظ.",
				midnight: "نیمه‌شب",
				noon: "ظهر",
				morning: "صبح",
				afternoon: "بعدازظهر",
				evening: "عصر",
				night: "شب"
			},
			wide: {
				am: "قبل‌ازظهر",
				pm: "بعدازظهر",
				midnight: "نیمه‌شب",
				noon: "ظهر",
				morning: "صبح",
				afternoon: "بعدازظهر",
				evening: "عصر",
				night: "شب"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(th|st|nd|rd)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ق|ب)/i,
			abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i,
			wide: /^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i
		},
		s = {
			any: [/^قبل/i, /^بعد/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^س‌م[1234]/i,
			wide: /^سه‌ماهه [1234]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[جژفمآاماسند]/i,
			abbreviated: /^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i,
			wide: /^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i
		},
		m = {
			narrow: [/^(ژ|ج)/i, /^ف/i, /^م/i, /^(آ|ا)/i, /^م/i, /^(ژ|ج)/i, /^(ج|ژ)/i, /^(آ|ا)/i, /^س/i, /^ا/i, /^ن/i, /^د/i],
			any: [/^ژا/i, /^ف/i, /^ما/i, /^آپ/i, /^(می|مه)/i, /^(ژوئن|جون)/i, /^(ژوئی|جول)/i, /^(اوت|آگ)/i, /^س/i, /^(اوک|اک)/i, /^ن/i, /^د/i]
		},
		f = {
			narrow: /^[شیدسچپج]/i,
			short: /^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i,
			abbreviated: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i,
			wide: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i
		},
		h = {
			narrow: [/^ی/i, /^دو/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
			any: [/^(ی|1ش|یکشنبه)/i, /^(د|2ش|دوشنبه)/i, /^(س|3ش|سه‌شنبه)/i, /^(چ|4ش|چهارشنبه)/i, /^(پ|5ش|پنجشنبه)/i, /^(ج|جمعه)/i, /^(ش|شنبه)/i]
		},
		p = {
			narrow: /^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i,
			abbreviated: /^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i,
			wide: /^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i
		},
		g = {
			any: {
				am: /^(ق|ق.ظ.|قبل‌ازظهر)/i,
				pm: /^(ب|ب.ظ.|بعدازظهر)/i,
				midnight: /^(‌نیمه‌شب|ن)/i,
				noon: /^(ظ|ظهر)/i,
				morning: /(ص|صبح)/i,
				afternoon: /(ب|ب.ظ.|بعدازظهر)/i,
				evening: /(ع|عصر)/i,
				night: /(ش|شب)/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(565),
		i = n(566),
		r = n(567),
		o = n(568),
		u = n(569),
		s = {
			code: "fi",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return e.replace(/sekuntia?/, "sekunnin")
		}
		function i(e) {
			return e.replace(/minuuttia?/, "minuutin")
		}
		function r(e) {
			return e.replace(/tuntia?/, "tunnin")
		}
		function o(e) {
			return e.replace(/päivää?/, "päivän")
		}
		function u(e) {
			return e.replace(/(viikko|viikkoa)/, "viikon")
		}
		function s(e) {
			return e.replace(/(kuukausi|kuukautta)/, "kuukauden")
		}
		function d(e) {
			return e.replace(/(vuosi|vuotta)/, "vuoden")
		}
		function c(e, t, n) {
			n = n || {};
			var a = l[e],
			i = 1 === t ? a.one: a.other.replace("{{count}}", t);
			return n.addSuffix ? n.comparison > 0 ? a.futureTense(i) + " kuluttua": i + " sitten": i
		}
		t.a = c;
		var l = {
			lessThanXSeconds: {
				one: "alle sekunti",
				other: "alle {{count}} sekuntia",
				futureTense: a
			},
			xSeconds: {
				one: "sekunti",
				other: "{{count}} sekuntia",
				futureTense: a
			},
			halfAMinute: {
				one: "puoli minuuttia",
				other: "puoli minuuttia",
				futureTense: function(e) {
					return "puolen minuutin"
				}
			},
			lessThanXMinutes: {
				one: "alle minuutti",
				other: "alle {{count}} minuuttia",
				futureTense: i
			},
			xMinutes: {
				one: "minuutti",
				other: "{{count}} minuuttia",
				futureTense: i
			},
			aboutXHours: {
				one: "noin tunti",
				other: "noin {{count}} tuntia",
				futureTense: r
			},
			xHours: {
				one: "tunti",
				other: "{{count}} tuntia",
				futureTense: r
			},
			xDays: {
				one: "päivä",
				other: "{{count}} päivää",
				futureTense: o
			},
			aboutXWeeks: {
				one: "noin viikko",
				other: "noin {{count}} viikkoa",
				futureTense: u
			},
			xWeeks: {
				one: "viikko",
				other: "{{count}} viikkoa",
				futureTense: u
			},
			aboutXMonths: {
				one: "noin kuukausi",
				other: "noin {{count}} kuukautta",
				futureTense: s
			},
			xMonths: {
				one: "kuukausi",
				other: "{{count}} kuukautta",
				futureTense: s
			},
			aboutXYears: {
				one: "noin vuosi",
				other: "noin {{count}} vuotta",
				futureTense: d
			},
			xYears: {
				one: "vuosi",
				other: "{{count}} vuotta",
				futureTense: d
			},
			overXYears: {
				one: "yli vuosi",
				other: "yli {{count}} vuotta",
				futureTense: d
			},
			almostXYears: {
				one: "lähes vuosi",
				other: "lähes {{count}} vuotta",
				futureTense: d
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "eeee d. MMMM y",
			long: "d. MMMM y",
			medium: "d. MMM y",
			short: "d.M.y"
		},
		r = {
			full: "HH.mm.ss zzzz",
			long: "HH.mm.ss z",
			medium: "HH.mm.ss",
			short: "HH.mm"
		},
		o = {
			full: "{{date}} 'klo' {{time}}",
			long: "{{date}} 'klo' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'viime' eeee 'klo' p",
			yesterday: "'eilen klo' p",
			today: "'tänään klo' p",
			tomorrow: "'huomenna klo' p",
			nextWeek: "'ensi' eeee 'klo' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["eaa.", "jaa."],
			abbreviated: ["eaa.", "jaa."],
			wide: ["ennen ajanlaskun alkua", "jälkeen ajanlaskun alun"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"]
		},
		u = {
			narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
			abbreviated: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"],
			wide: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"]
		},
		s = {
			narrow: u.narrow,
			abbreviated: u.abbreviated,
			wide: u.wide.map(function(e) {
				return e + "ta"
			})
		},
		d = {
			narrow: ["S", "M", "T", "K", "T", "P", "L"],
			short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
			abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],
			wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
		},
		c = {
			narrow: d.narrow,
			short: d.short,
			abbreviated: d.abbreviated,
			wide: d.wide.map(function(e) {
				return e + "na"
			})
		},
		l = {
			narrow: {
				am: "ap",
				pm: "ip",
				midnight: "keskiyö",
				noon: "keskipäivä",
				morning: "ap",
				afternoon: "ip",
				evening: "illalla",
				night: "yöllä"
			},
			abbreviated: {
				am: "ap",
				pm: "ip",
				midnight: "keskiyö",
				noon: "keskipäivä",
				morning: "ap",
				afternoon: "ip",
				evening: "illalla",
				night: "yöllä"
			},
			wide: {
				am: "ap",
				pm: "ip",
				midnight: "keskiyöllä",
				noon: "keskipäivällä",
				morning: "aamupäivällä",
				afternoon: "iltapäivällä",
				evening: "illalla",
				night: "yöllä"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				formattingValues: s,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: d,
				formattingValues: c,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: l,
				defaultWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(\.)/i,
		o = /\d+/i,
		u = {
			narrow: /^(e|j)/i,
			abbreviated: /^(eaa.|jaa.)/i,
			wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i
		},
		s = {
			any: [/^e/i, /^j/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234]\.? kvartaali/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[thmkeslj]/i,
			abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
			wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i
		},
		m = {
			narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i],
			any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i]
		},
		f = {
			narrow: /^[smtkpl]/i,
			short: /^(su|ma|ti|ke|to|pe|la)/i,
			abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
			wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i
		},
		h = {
			narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
			any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]
		},
		p = {
			narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
			any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i
		},
		g = {
			any: {
				am: /^ap/i,
				pm: /^ip/i,
				midnight: /^keskiyö/i,
				noon: /^keskipäivä/i,
				morning: /aamupäivällä/i,
				afternoon: /iltapäivällä/i,
				evening: /illalla/i,
				night: /yöllä/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(187),
		i = n(571),
		r = n(188),
		o = n(189),
		u = n(190),
		s = {
			code: "fr",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'à' {{time}}",
			long: "{{date}} 'à' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		var a = n(187),
		i = n(188),
		r = n(189),
		o = n(190),
		u = n(573),
		s = {
			code: "fr-CA",
			formatDistance: a.a,
			formatLong: u.a,
			formatRelative: i.a,
			localize: r.a,
			match: o.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "yy-MM-dd"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'à' {{time}}",
			long: "{{date}} 'à' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		var a = n(575),
		i = n(576),
		r = n(577),
		o = n(578),
		u = n(579),
		s = {
			code: "fr-CH",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "dans " + a: "il y a " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "moins d’une seconde",
				other: "moins de {{count}} secondes"
			},
			xSeconds: {
				one: "1 seconde",
				other: "{{count}} secondes"
			},
			halfAMinute: "30 secondes",
			lessThanXMinutes: {
				one: "moins d’une minute",
				other: "moins de {{count}} minutes"
			},
			xMinutes: {
				one: "1 minute",
				other: "{{count}} minutes"
			},
			aboutXHours: {
				one: "environ 1 heure",
				other: "environ {{count}} heures"
			},
			xHours: {
				one: "1 heure",
				other: "{{count}} heures"
			},
			xDays: {
				one: "1 jour",
				other: "{{count}} jours"
			},
			aboutXWeeks: {
				one: "environ 1 semaine",
				other: "environ {{count}} semaines"
			},
			xWeeks: {
				one: "1 semaine",
				other: "{{count}} semaines"
			},
			aboutXMonths: {
				one: "environ 1 mois",
				other: "environ {{count}} mois"
			},
			xMonths: {
				one: "1 mois",
				other: "{{count}} mois"
			},
			aboutXYears: {
				one: "environ 1 an",
				other: "environ {{count}} ans"
			},
			xYears: {
				one: "1 an",
				other: "{{count}} ans"
			},
			overXYears: {
				one: "plus d’un an",
				other: "plus de {{count}} ans"
			},
			almostXYears: {
				one: "presqu’un an",
				other: "presque {{count}} ans"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd.MM.y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'à' {{time}}",
			long: "{{date}} 'à' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'la semaine dernière à' p",
			yesterday: "'hier à' p",
			today: "'aujourd’hui à' p",
			tomorrow: "'demain à' p'",
			nextWeek: "eeee 'la semaine prochaine à' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n, a = Number(e),
			i = t || {},
			r = String(i.unit);
			return 0 === a ? a: (n = "year" === r || "hour" === r || "week" === r ? 1 === a ? "ère": "ème": 1 === a ? "er": "ème", a + n)
		}
		var i = n(3),
		r = {
			narrow: ["av. J.-C", "ap. J.-C"],
			abbreviated: ["av. J.-C", "ap. J.-C"],
			wide: ["avant Jésus-Christ", "après Jésus-Christ"]
		},
		o = {
			narrow: ["T1", "T2", "T3", "T4"],
			abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."],
			wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
			wide: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
		},
		s = {
			narrow: ["D", "L", "M", "M", "J", "V", "S"],
			short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
			abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
			wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
		},
		d = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "mat.",
				afternoon: "ap.m.",
				evening: "soir",
				night: "mat."
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "matin",
				afternoon: "après-midi",
				evening: "soir",
				night: "matin"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "minuit",
				noon: "midi",
				morning: "du matin",
				afternoon: "de l’après-midi",
				evening: "du soir",
				night: "du matin"
			}
		},
		c = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide"
			})
		};
		t.a = c
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(ième|ère|ème|er|e)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
			abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
			wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
		},
		s = {
			any: [/^av/i, /^ap/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^t[1234]/i,
			wide: /^[1234](er|ème|e)? trimestre/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
			wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[lmjvsd]/i,
			short: /^(di|lu|ma|me|je|ve|sa)/i,
			abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
			wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
		},
		h = {
			narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
			any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
		},
		p = {
			narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
			any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^min/i,
				noon: /^mid/i,
				morning: /mat/i,
				afternoon: /ap/i,
				evening: /soir/i,
				night: /nuit/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(581),
		i = n(582),
		r = n(583),
		o = n(584),
		u = n(585),
		s = {
			code: "gd",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: 2 === t && i[e].two ? i[e].two: 9 === t && i[e].nine ? i[e].nine: 20 === t && i[e].twenty ? i[e].twenty: 30 === t && i[e].thirty ? i[e].thirty: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "ann an " + a: "o chionn " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "nas lugha na diog",
				other: "nas lugha na {{count}} diogan"
			},
			xSeconds: {
				one: "1 diog",
				two: "2 dhiog",
				twenty: "20 diog",
				other: "{{count}} diogan"
			},
			halfAMinute: "leth mhionaid",
			lessThanXMinutes: {
				one: "nas lugha na mionaid",
				other: "nas lugha na {{count}} mionaidean"
			},
			xMinutes: {
				one: "1 mionaid",
				two: "2 mhionaid",
				twenty: "20 mionaid",
				other: "{{count}} mionaidean"
			},
			aboutXHours: {
				one: "mu uair de thìde",
				other: "mu {{count}} uairean de thìde"
			},
			xHours: {
				one: "1 uair de thìde",
				two: "2 uair de thìde",
				twenty: "20 uair de thìde",
				other: "{{count}} uairean de thìde"
			},
			xDays: {
				one: "1 là",
				other: "{{count}} là"
			},
			aboutXWeeks: {
				one: "mu 1 seachdain",
				other: "mu {{count}} seachdainean"
			},
			xWeeks: {
				one: "1 seachdain",
				other: "{{count}} seachdainean"
			},
			aboutXMonths: {
				one: "mu mhìos",
				other: "mu {{count}} mìosan"
			},
			xMonths: {
				one: "1 mìos",
				other: "{{count}} mìosan"
			},
			aboutXYears: {
				one: "mu bhliadhna",
				other: "mu {{count}} bliadhnaichean"
			},
			xYears: {
				one: "1 bhliadhna",
				other: "{{count}} bliadhna"
			},
			overXYears: {
				one: "còrr is bliadhna",
				other: "còrr is {{count}} bliadhnaichean"
			},
			almostXYears: {
				one: "cha mhòr bliadhna",
				other: "cha mhòr {{count}} bliadhnaichean"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'aig' {{time}}",
			long: "{{date}} 'aig' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'mu dheireadh' eeee 'aig' p",
			yesterday: "'an-dè aig' p",
			today: "'an-diugh aig' p",
			tomorrow: "'a-màireach aig' p",
			nextWeek: "eeee 'aig' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = n % 100;
			if (a > 20 || a < 10) switch (a % 10) {
			case 1:
				return n + "d";
			case 2:
				return n + "na"
			}
			return 12 === a ? n + "na": n + "mh"
		}
		var i = n(3),
		r = {
			narrow: ["R", "A"],
			abbreviated: ["RC", "AD"],
			wide: ["ro Chrìosta", "anno domini"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["C1", "C2", "C3", "C4"],
			wide: ["a' chiad chairteal", "an dàrna cairteal", "an treas cairteal", "an ceathramh cairteal"]
		},
		u = {
			narrow: ["F", "G", "M", "G", "C", "Ò", "I", "L", "S", "D", "S", "D"],
			abbreviated: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
			wide: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]
		},
		s = {
			narrow: ["D", "L", "M", "C", "A", "H", "S"],
			short: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
			abbreviated: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
			wide: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]
		},
		d = {
			narrow: {
				am: "m",
				pm: "f",
				midnight: "m.o.",
				noon: "m.l.",
				morning: "madainn",
				afternoon: "feasgar",
				evening: "feasgar",
				night: "oidhche"
			},
			abbreviated: {
				am: "M.",
				pm: "F.",
				midnight: "meadhan oidhche",
				noon: "meadhan là",
				morning: "madainn",
				afternoon: "feasgar",
				evening: "feasgar",
				night: "oidhche"
			},
			wide: {
				am: "m.",
				pm: "f.",
				midnight: "meadhan oidhche",
				noon: "meadhan là",
				morning: "madainn",
				afternoon: "feasgar",
				evening: "feasgar",
				night: "oidhche"
			}
		},
		c = {
			narrow: {
				am: "m",
				pm: "f",
				midnight: "m.o.",
				noon: "m.l.",
				morning: "sa mhadainn",
				afternoon: "feasgar",
				evening: "feasgar",
				night: "air an oidhche"
			},
			abbreviated: {
				am: "M.",
				pm: "F.",
				midnight: "meadhan oidhche",
				noon: "meadhan là",
				morning: "sa mhadainn",
				afternoon: "feasgar",
				evening: "feasgar",
				night: "air an oidhche"
			},
			wide: {
				am: "m.",
				pm: "f.",
				midnight: "meadhan oidhche",
				noon: "meadhan là",
				morning: "sa mhadainn",
				afternoon: "feasgar",
				evening: "feasgar",
				night: "air an oidhche"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(d|na|tr|mh)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(r|a)/i,
			abbreviated: /^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,
			wide: /^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i
		},
		s = {
			any: [/^b/i, /^(a|c)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^c[1234]/i,
			wide: /^[1234](cd|na|tr|mh)? cairteal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[fgmcòilsd]/i,
			abbreviated: /^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i,
			wide: /^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i
		},
		m = {
			narrow: [/^f/i, /^g/i, /^m/i, /^g/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^s/i, /^d/i, /^s/i, /^d/i],
			any: [/^fa/i, /^ge/i, /^mà/i, /^gi/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^su/i, /^d/i, /^sa/i, /^d/i]
		},
		f = {
			narrow: /^[dlmcahs]/i,
			short: /^(dò|lu|mà|ci|ar|ha|sa)/i,
			abbreviated: /^(did|dil|dim|dic|dia|dih|dis)/i,
			wide: /^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i
		},
		h = {
			narrow: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i],
			any: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i]
		},
		p = {
			narrow: /^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,
			any: /^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i
		},
		g = {
			any: {
				am: /^m/i,
				pm: /^f/i,
				midnight: /^meadhan oidhche/i,
				noon: /^meadhan là/i,
				morning: /sa mhadainn/i,
				afternoon: /feasgar/i,
				evening: /feasgar/i,
				night: /air an oidhche/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(587),
		i = n(588),
		r = n(589),
		o = n(590),
		u = n(591),
		s = {
			code: "gl",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "en " + a: "hai " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "menos dun segundo",
				other: "menos de {{count}} segundos"
			},
			xSeconds: {
				one: "1 segundo",
				other: "{{count}} segundos"
			},
			halfAMinute: "medio minuto",
			lessThanXMinutes: {
				one: "menos dun minuto",
				other: "menos de {{count}} minutos"
			},
			xMinutes: {
				one: "1 minuto",
				other: "{{count}} minutos"
			},
			aboutXHours: {
				one: "arredor dunha hora",
				other: "arredor de {{count}} horas"
			},
			xHours: {
				one: "1 hora",
				other: "{{count}} horas"
			},
			xDays: {
				one: "1 día",
				other: "{{count}} días"
			},
			aboutXWeeks: {
				one: "arredor dunha semana",
				other: "arredor de {{count}} semanas"
			},
			xWeeks: {
				one: "1 semana",
				other: "{{count}} semanas"
			},
			aboutXMonths: {
				one: "arredor de 1 mes",
				other: "arredor de {{count}} meses"
			},
			xMonths: {
				one: "1 mes",
				other: "{{count}} meses"
			},
			aboutXYears: {
				one: "arredor dun ano",
				other: "arredor de {{count}} anos"
			},
			xYears: {
				one: "1 ano",
				other: "{{count}} anos"
			},
			overXYears: {
				one: "máis dun ano",
				other: "máis de {{count}} anos"
			},
			almostXYears: {
				one: "case un ano",
				other: "case {{count}} anos"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d 'de' MMMM y",
			long: "d 'de' MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'ás' {{time}}",
			long: "{{date}} 'ás' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return 1 !== t.getUTCHours() ? r[e] : i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'o' eeee 'pasado á' LT",
			yesterday: "'onte á' p",
			today: "'hoxe á' p",
			tomorrow: "'mañá á' p",
			nextWeek: "eeee 'á' p",
			other: "P"
		},
		r = {
			lastWeek: "'o' eeee 'pasado ás' p",
			yesterday: "'onte ás' p",
			today: "'hoxe ás' p",
			tomorrow: "'mañá ás' p",
			nextWeek: "eeee 'ás' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "º"
		}
		var i = n(3),
		r = {
			narrow: ["AC", "DC"],
			abbreviated: ["AC", "DC"],
			wide: ["antes de cristo", "despois de cristo"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["T1", "T2", "T3", "T4"],
			wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
		},
		u = {
			narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
			abbreviated: ["xan", "feb", "mar", "abr", "mai", "xun", "xul", "ago", "set", "out", "nov", "dec"],
			wide: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"]
		},
		s = {
			narrow: ["d", "l", "m", "m", "j", "v", "s"],
			short: ["do", "lu", "ma", "me", "xo", "ve", "sa"],
			abbreviated: ["dom", "lun", "mar", "mer", "xov", "ven", "sab"],
			wide: ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "mañá",
				afternoon: "tarde",
				evening: "tarde",
				night: "noite"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "medianoite",
				noon: "mediodía",
				morning: "mañá",
				afternoon: "tarde",
				evening: "tardiña",
				night: "noite"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "medianoite",
				noon: "mediodía",
				morning: "mañá",
				afternoon: "tarde",
				evening: "tardiña",
				night: "noite"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "da mañá",
				afternoon: "da tarde",
				evening: "da tardiña",
				night: "da noite"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "medianoite",
				noon: "mediodía",
				morning: "da mañá",
				afternoon: "da tarde",
				evening: "da tardiña",
				night: "da noite"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "medianoite",
				noon: "mediodía",
				morning: "da mañá",
				afternoon: "da tarde",
				evening: "da tardiña",
				night: "da noite"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(º)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ac|dc|a|d)/i,
			abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
			wide: /^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i
		},
		s = {
			any: [/^ac/i, /^dc/i],
			wide: [/^(antes de cristo|antes da era com[uú]n)/i, /^(despois de cristo|era com[uú]n)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^T[1234]/i,
			wide: /^[1234](º)? trimestre/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[xfmasond]/i,
			abbreviated: /^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,
			wide: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i
		},
		m = {
			narrow: [/^x/i, /^f/i, /^m/i, /^a/i, /^m/i, /^x/i, /^x/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xun/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i]
		},
		f = {
			narrow: /^[dlmxvs]/i,
			short: /^(do|lu|ma|me|xo|ve|sa)/i,
			abbreviated: /^(dom|lun|mar|mer|xov|ven|sab)/i,
			wide: /^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i
		},
		h = {
			narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^x/i, /^v/i, /^s/i],
			any: [/^do/i, /^lu/i, /^ma/i, /^me/i, /^xo/i, /^ve/i, /^sa/i]
		},
		p = {
			narrow: /^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i,
			any: /^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn/i,
				noon: /^md/i,
				morning: /mañ[aá]/i,
				afternoon: /tarde/i,
				evening: /tardiña/i,
				night: /noite/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(593),
		i = n(594),
		r = n(595),
		o = n(596),
		u = n(597),
		s = {
			code: "gu",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + "માં": a + " પહેલાં": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "હમણાં",
				other: "​આશરે {{count}} સેકંડ"
			},
			xSeconds: {
				one: "1 સેકંડ",
				other: "{{count}} સેકંડ"
			},
			halfAMinute: "અડધી મિનિટ",
			lessThanXMinutes: {
				one: "આ મિનિટ",
				other: "​આશરે {{count}} મિનિટ"
			},
			xMinutes: {
				one: "1 મિનિટ",
				other: "{{count}} મિનિટ"
			},
			aboutXHours: {
				one: "​આશરે 1 કલાક",
				other: "​આશરે {{count}} કલાક"
			},
			xHours: {
				one: "1 કલાક",
				other: "{{count}} કલાક"
			},
			xDays: {
				one: "1 દિવસ",
				other: "{{count}} દિવસ"
			},
			aboutXWeeks: {
				one: "આશરે 1 અઠવાડિયું",
				other: "આશરે {{count}} અઠવાડિયા"
			},
			xWeeks: {
				one: "1 અઠવાડિયું",
				other: "{{count}} અઠવાડિયા"
			},
			aboutXMonths: {
				one: "આશરે 1 મહિનો",
				other: "આશરે {{count}} મહિના"
			},
			xMonths: {
				one: "1 મહિનો",
				other: "{{count}} મહિના"
			},
			aboutXYears: {
				one: "આશરે 1 વર્ષ",
				other: "આશરે {{count}} વર્ષ"
			},
			xYears: {
				one: "1 વર્ષ",
				other: "{{count}} વર્ષ"
			},
			overXYears: {
				one: "1 વર્ષથી વધુ",
				other: "{{count}} વર્ષથી વધુ"
			},
			almostXYears: {
				one: "લગભગ 1 વર્ષ",
				other: "લગભગ {{count}} વર્ષ"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM, y",
			long: "d MMMM, y",
			medium: "d MMM, y",
			short: "d/M/yy"
		},
		r = {
			full: "hh:mm:ss a zzzz",
			long: "hh:mm:ss a z",
			medium: "hh:mm:ss a",
			short: "hh:mm a"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'પાછલા' eeee p",
			yesterday: "'ગઈકાલે' p",
			today: "'આજે' p",
			tomorrow: "'આવતીકાલે' p",
			nextWeek: "eeee p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e)
		}
		var i = n(3),
		r = {
			narrow: ["ઈસપૂ", "ઈસ"],
			abbreviated: ["ઈ.સ.પૂર્વે", "ઈ.સ."],
			wide: ["ઈસવીસન પૂર્વે", "ઈસવીસન"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1લો ત્રિમાસ", "2જો ત્રિમાસ", "3જો ત્રિમાસ", "4થો ત્રિમાસ"]
		},
		u = {
			narrow: ["જા", "ફે", "મા", "એ", "મે", "જૂ", "જુ", "ઓ", "સ", "ઓ", "ન", "ડિ"],
			abbreviated: ["જાન્યુ", "ફેબ્રુ", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઑગસ્ટ", "સપ્ટે", "ઓક્ટો", "નવે", "ડિસે"],
			wide: ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઇ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"]
		},
		s = {
			narrow: ["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"],
			short: ["ર", "સો", "મં", "બુ", "ગુ", "શુ", "શ"],
			abbreviated: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
			wide: ["રવિવાર", "સોમવાર", "મંગળવાર", "બુધવાર", "ગુરુવાર", "શુક્રવાર", "શનિવાર"]
		},
		d = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "મ.રાત્રિ",
				noon: "બ.",
				morning: "સવારે",
				afternoon: "બપોરે",
				evening: "સાંજે",
				night: "રાત્રે"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "​મધ્યરાત્રિ",
				noon: "બપોરે",
				morning: "સવારે",
				afternoon: "બપોરે",
				evening: "સાંજે",
				night: "રાત્રે"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "​મધ્યરાત્રિ",
				noon: "બપોરે",
				morning: "સવારે",
				afternoon: "બપોરે",
				evening: "સાંજે",
				night: "રાત્રે"
			}
		},
		c = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "મ.રાત્રિ",
				noon: "બપોરે",
				morning: "સવારે",
				afternoon: "બપોરે",
				evening: "સાંજે",
				night: "રાત્રે"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "મધ્યરાત્રિ",
				noon: "બપોરે",
				morning: "સવારે",
				afternoon: "બપોરે",
				evening: "સાંજે",
				night: "રાત્રે"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "​મધ્યરાત્રિ",
				noon: "બપોરે",
				morning: "સવારે",
				afternoon: "બપોરે",
				evening: "સાંજે",
				night: "રાત્રે"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ઈસપૂ|ઈસ)/i,
			abbreviated: /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,
			wide: /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i
		},
		s = {
			any: [/^(ઈસપૂ|ઈસ)/i, /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i, /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](લો|જો|થો)? ત્રિમાસ/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[જાફેમાએમેજૂજુઓસઓનડિ]/i,
			abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,
			wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i
		},
		m = {
			narrow: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i],
			any: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i]
		},
		f = {
			narrow: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
			short: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
			abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,
			wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i
		},
		h = {
			narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i],
			any: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i]
		},
		p = {
			narrow: /^(a|p|મ\.?|સ|બ|સાં|રા)/i,
			any: /^(a|p|મ\.?|સ|બ|સાં|રા)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^મ\.?/i,
				noon: /^બ/i,
				morning: /સ/i,
				afternoon: /બ/i,
				evening: /સાં/i,
				night: /રા/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(599),
		i = n(600),
		r = n(601),
		o = n(602),
		u = n(603),
		s = {
			code: "he",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			if (n = n || {},
			"xDays" === e && n.addSuffix && t <= 2) {
				var a = {
					1 : "אתמול",
					2 : "שלשום"
				},
				r = {
					1 : "מחר",
					2 : "מחרתיים"
				};
				return n.comparison > 0 ? r[t] : a[t]
			}
			var o;
			return o = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: 2 === t ? i[e].two: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "בעוד " + o: "לפני " + o: o
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "פחות משנייה",
				two: "פחות משתי שניות",
				other: "פחות מ־{{count}} שניות"
			},
			xSeconds: {
				one: "שנייה",
				two: "שתי שניות",
				other: "{{count}} שניות"
			},
			halfAMinute: "חצי דקה",
			lessThanXMinutes: {
				one: "פחות מדקה",
				two: "פחות משתי דקות",
				other: "פחות מ־{{count}} דקות"
			},
			xMinutes: {
				one: "דקה",
				two: "שתי דקות",
				other: "{{count}} דקות"
			},
			aboutXHours: {
				one: "כשעה",
				two: "כשעתיים",
				other: "כ־{{count}} שעות"
			},
			xHours: {
				one: "שעה",
				two: "שעתיים",
				other: "{{count}} שעות"
			},
			xDays: {
				one: "יום",
				two: "יומיים",
				other: "{{count}} ימים"
			},
			aboutXWeeks: {
				one: "כשבוע",
				two: "כשבועיים",
				other: "כ־{{count}} שבועות"
			},
			xWeeks: {
				one: "שבוע",
				two: "שבועיים",
				other: "{{count}} שבועות"
			},
			aboutXMonths: {
				one: "כחודש",
				two: "כחודשיים",
				other: "כ־{{count}} חודשים"
			},
			xMonths: {
				one: "חודש",
				two: "חודשיים",
				other: "{{count}} חודשים"
			},
			aboutXYears: {
				one: "כשנה",
				two: "כשנתיים",
				other: "כ־{{count}} שנים"
			},
			xYears: {
				one: "שנה",
				two: "שנתיים",
				other: "{{count}} שנים"
			},
			overXYears: {
				one: "יותר משנה",
				two: "יותר משנתיים",
				other: "יותר מ־{{count}} שנים"
			},
			almostXYears: {
				one: "כמעט שנה",
				two: "כמעט שנתיים",
				other: "כמעט {{count}} שנים"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d בMMMM y",
			long: "d בMMMM y",
			medium: "d בMMM y",
			short: "d.M.y"
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			full: "{{date}} 'בשעה' {{time}}",
			long: "{{date}} 'בשעה' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'שעבר בשעה' p",
			yesterday: "'אתמול בשעה' p",
			today: "'היום בשעה' p",
			tomorrow: "'מחר בשעה' p",
			nextWeek: "eeee 'בשעה' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e);
			if (n <= 0 || n > 10) return n;
			var a = t || {},
			i = String(a.unit),
			r = ["year", "hour", "minute", "second"].indexOf(i) >= 0,
			o = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שביעי", "שמיני", "תשיעי", "עשירי"],
			u = ["ראשונה", "שנייה", "שלישית", "רביעית", "חמישית", "שישית", "שביעית", "שמינית", "תשיעית", "עשירית"],
			s = n - 1;
			return r ? u[s] : o[s]
		}
		var i = n(3),
		r = {
			narrow: ["לפנה״ס", "לספירה"],
			abbreviated: ["לפנה״ס", "לספירה"],
			wide: ["לפני הספירה", "לספירה"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["רבעון 1", "רבעון 2", "רבעון 3", "רבעון 4"]
		},
		u = {
			narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			abbreviated: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"],
			wide: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"]
		},
		s = {
			narrow: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
			short: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
			abbreviated: ["יום א׳", "יום ב׳", "יום ג׳", "יום ד׳", "יום ה׳", "יום ו׳", "שבת"],
			wide: ["יום ראשון", "יום שני", "יום שלישי", "יום רביעי", "יום חמישי", "יום שישי", "יום שבת"]
		},
		d = {
			narrow: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בוקר",
				afternoon: "אחר הצהריים",
				evening: "ערב",
				night: "לילה"
			},
			abbreviated: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בוקר",
				afternoon: "אחר הצהריים",
				evening: "ערב",
				night: "לילה"
			},
			wide: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בוקר",
				afternoon: "אחר הצהריים",
				evening: "ערב",
				night: "לילה"
			}
		},
		c = {
			narrow: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בבוקר",
				afternoon: "בצהריים",
				evening: "בערב",
				night: "בלילה"
			},
			abbreviated: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בבוקר",
				afternoon: "אחר הצהריים",
				evening: "בערב",
				night: "בלילה"
			},
			wide: {
				am: "לפנה״צ",
				pm: "אחה״צ",
				midnight: "חצות",
				noon: "צהריים",
				morning: "בבוקר",
				afternoon: "אחר הצהריים",
				evening: "בערב",
				night: "בלילה"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i,
		o = /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i,
		u = {
			narrow: /^ל(ספירה|פנה״ס)/i,
			abbreviated: /^ל(ספירה|פנה״ס)/i,
			wide: /^ל(פני ה)?ספירה/i
		},
		s = {
			any: [/^לפ/i, /^לס/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^רבעון [1234]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^\d+/i,
			abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,
			wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i
		},
		m = {
			narrow: [/^1$/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
			any: [/^ינ/i, /^פ/i, /^מר/i, /^אפ/i, /^מא/i, /^יונ/i, /^יול/i, /^אוג/i, /^ס/i, /^אוק/i, /^נ/i, /^ד/i]
		},
		f = {
			narrow: /^[אבגדהוש]׳/i,
			short: /^[אבגדהוש]׳/i,
			abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,
			wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i
		},
		h = {
			abbreviated: [/א׳$/i, /ב׳$/i, /ג׳$/i, /ד׳$/i, /ה׳$/i, /ו׳$/i, /^ש/i],
			wide: [/ן$/i, /ני$/i, /לישי$/i, /עי$/i, /מישי$/i, /שישי$/i, /ת$/i],
			any: [/^א/i, /^ב/i, /^ג/i, /^ד/i, /^ה/i, /^ו/i, /^ש/i]
		},
		p = {
			any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i
		},
		g = {
			any: {
				am: /^לפ/i,
				pm: /^אחה/i,
				midnight: /^ח/i,
				noon: /^צ/i,
				morning: /בוקר/i,
				afternoon: /בצ|אחר/i,
				evening: /ערב/i,
				night: /לילה/i
			}
		},
		v = ["רא", "שנ", "של", "רב", "ח", "שי", "שב", "שמ", "ת", "ע"],
		w = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					var t = parseInt(e, 10);
					return isNaN(t) ? v.indexOf(e) + 1 : t
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = w
	},
	function(e, t, n) {
		"use strict";
		var a = n(605),
		i = n(606),
		r = n(607),
		o = n(97),
		u = n(608),
		s = {
			code: "hi",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof r[e] ? r[e] : 1 === t ? r[e].one: r[e].other.replace("{{count}}", i.a.numberToLocale(t)),
			n.addSuffix ? n.comparison > 0 ? a + "मे ": a + " पहले": a
		}
		t.a = a;
		var i = n(97),
		r = {
			lessThanXSeconds: {
				one: "१ सेकंड से कम",
				other: "{{count}} सेकंड से कम"
			},
			xSeconds: {
				one: "१ सेकंड",
				other: "{{count}} सेकंड"
			},
			halfAMinute: "आधा मिनट",
			lessThanXMinutes: {
				one: "१ मिनट से कम",
				other: "{{count}} मिनट से कम"
			},
			xMinutes: {
				one: "१ मिनट",
				other: "{{count}} मिनट"
			},
			aboutXHours: {
				one: "लगभग १ घंटा",
				other: "लगभग {{count}} घंटे"
			},
			xHours: {
				one: "१ घंटा",
				other: "{{count}} घंटे"
			},
			xDays: {
				one: "१ दिन",
				other: "{{count}} दिन"
			},
			aboutXWeeks: {
				one: "लगभग १ सप्ताह",
				other: "लगभग {{count}} सप्ताह"
			},
			xWeeks: {
				one: "१ सप्ताह",
				other: "{{count}} सप्ताह"
			},
			aboutXMonths: {
				one: "लगभग १ महीना",
				other: "लगभग {{count}} महीने"
			},
			xMonths: {
				one: "१ महीना",
				other: "{{count}} महीने"
			},
			aboutXYears: {
				one: "लगभग १ वर्ष",
				other: "लगभग {{count}} वर्ष"
			},
			xYears: {
				one: "१ वर्ष",
				other: "{{count}} वर्ष"
			},
			overXYears: {
				one: "१ वर्ष से अधिक",
				other: "{{count}} वर्ष से अधिक"
			},
			almostXYears: {
				one: "लगभग १ वर्ष",
				other: "लगभग {{count}} वर्ष"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM, y",
			long: "do MMMM, y",
			medium: "d MMM, y",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'को' {{time}}",
			long: "{{date}} 'को' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'पिछले' eeee p",
			yesterday: "'कल' p",
			today: "'आज' p",
			tomorrow: "'कल' p",
			nextWeek: "eeee 'को' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = n(97),
		o = /^[०१२३४५६७८९]+/i,
		u = /^[०१२३४५६७८९]+/i,
		s = {
			narrow: /^(ईसा-पूर्व|ईस्वी)/i,
			abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,
			wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i
		},
		d = {
			any: [/^b/i, /^(a|c)/i]
		},
		c = {
			narrow: /^[1234]/i,
			abbreviated: /^ति[1234]/i,
			wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i
		},
		l = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		m = {
			narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,
			abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,
			wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i
		},
		f = {
			narrow: [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i],
			any: [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i]
		},
		h = {
			narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i,
			short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
			abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
			wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i
		},
		p = {
			narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i],
			any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i]
		},
		g = {
			narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,
			any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i
		},
		v = {
			any: {
				am: /^पूर्वाह्न/i,
				pm: /^अपराह्न/i,
				midnight: /^मध्य/i,
				noon: /^दो/i,
				morning: /सु/i,
				afternoon: /दो/i,
				evening: /शा/i,
				night: /रा/i
			}
		},
		w = {
			ordinalNumber: a.a({
				matchPattern: o,
				parsePattern: u,
				valueCallback: r.a.localeToNumber
			}),
			era: i.a({
				matchPatterns: s,
				defaultMatchWidth: "wide",
				parsePatterns: d,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: c,
				defaultMatchWidth: "wide",
				parsePatterns: l,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: m,
				defaultMatchWidth: "wide",
				parsePatterns: f,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: h,
				defaultMatchWidth: "wide",
				parsePatterns: p,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: g,
				defaultMatchWidth: "any",
				parsePatterns: v,
				defaultParseWidth: "any"
			})
		};
		t.a = w
	},
	function(e, t, n) {
		"use strict";
		var a = n(610),
		i = n(611),
		r = n(612),
		o = n(613),
		u = n(614),
		s = {
			code: "hr",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? n.addSuffix ? n.comparison > 0 ? i[e].one.withPrepositionIn: i[e].one.withPrepositionAgo: i[e].one.standalone: t % 10 > 1 && t % 10 < 5 && "1" !== String(t).substr( - 2, 1) ? i[e].dual.replace("{{count}}", t) : i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "za " + a: "prije " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: {
					standalone: "manje od 1 sekunde",
					withPrepositionAgo: "manje od 1 sekunde",
					withPrepositionIn: "manje od 1 sekundu"
				},
				dual: "manje od {{count}} sekunde",
				other: "manje od {{count}} sekundi"
			},
			xSeconds: {
				one: {
					standalone: "1 sekunda",
					withPrepositionAgo: "1 sekunde",
					withPrepositionIn: "1 sekundu"
				},
				dual: "{{count}} sekunde",
				other: "{{count}} sekundi"
			},
			halfAMinute: "pola minute",
			lessThanXMinutes: {
				one: {
					standalone: "manje od 1 minute",
					withPrepositionAgo: "manje od 1 minute",
					withPrepositionIn: "manje od 1 minutu"
				},
				dual: "manje od {{count}} minute",
				other: "manje od {{count}} minuta"
			},
			xMinutes: {
				one: {
					standalone: "1 minuta",
					withPrepositionAgo: "1 minute",
					withPrepositionIn: "1 minutu"
				},
				dual: "{{count}} minute",
				other: "{{count}} minuta"
			},
			aboutXHours: {
				one: {
					standalone: "oko 1 sat",
					withPrepositionAgo: "oko 1 sat",
					withPrepositionIn: "oko 1 sat"
				},
				dual: "oko {{count}} sata",
				other: "oko {{count}} sati"
			},
			xHours: {
				one: {
					standalone: "1 sat",
					withPrepositionAgo: "1 sat",
					withPrepositionIn: "1 sat"
				},
				dual: "{{count}} sata",
				other: "{{count}} sati"
			},
			xDays: {
				one: {
					standalone: "1 dan",
					withPrepositionAgo: "1 dan",
					withPrepositionIn: "1 dan"
				},
				dual: "{{count}} dana",
				other: "{{count}} dana"
			},
			aboutXWeeks: {
				one: {
					standalone: "oko 1 tjedan",
					withPrepositionAgo: "oko 1 tjedan",
					withPrepositionIn: "oko 1 tjedan"
				},
				dual: "oko {{count}} tjedna",
				other: "oko {{count}} tjedana"
			},
			xWeeks: {
				one: {
					standalone: "1 tjedan",
					withPrepositionAgo: "1 tjedan",
					withPrepositionIn: "1 tjedan"
				},
				dual: "{{count}} tjedna",
				other: "{{count}} tjedana"
			},
			aboutXMonths: {
				one: {
					standalone: "oko 1 mjesec",
					withPrepositionAgo: "oko 1 mjesec",
					withPrepositionIn: "oko 1 mjesec"
				},
				dual: "oko {{count}} mjeseca",
				other: "oko {{count}} mjeseci"
			},
			xMonths: {
				one: {
					standalone: "1 mjesec",
					withPrepositionAgo: "1 mjesec",
					withPrepositionIn: "1 mjesec"
				},
				dual: "{{count}} mjeseca",
				other: "{{count}} mjeseci"
			},
			aboutXYears: {
				one: {
					standalone: "oko 1 godinu",
					withPrepositionAgo: "oko 1 godinu",
					withPrepositionIn: "oko 1 godinu"
				},
				dual: "oko {{count}} godine",
				other: "oko {{count}} godina"
			},
			xYears: {
				one: {
					standalone: "1 godina",
					withPrepositionAgo: "1 godine",
					withPrepositionIn: "1 godinu"
				},
				dual: "{{count}} godine",
				other: "{{count}} godina"
			},
			overXYears: {
				one: {
					standalone: "preko 1 godinu",
					withPrepositionAgo: "preko 1 godinu",
					withPrepositionIn: "preko 1 godinu"
				},
				dual: "preko {{count}} godine",
				other: "preko {{count}} godina"
			},
			almostXYears: {
				one: {
					standalone: "gotovo 1 godinu",
					withPrepositionAgo: "gotovo 1 godinu",
					withPrepositionIn: "gotovo 1 godinu"
				},
				dual: "gotovo {{count}} godine",
				other: "gotovo {{count}} godina"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d. MMMM y.",
			long: "d. MMMM y.",
			medium: "d. MMM y.",
			short: "dd. MM. y."
		},
		r = {
			full: "HH:mm:ss (zzzz)",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'u' {{time}}",
			long: "{{date}} 'u' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var r = i[e];
			return "function" == typeof r ? r(t) : r
		}
		t.a = a;
		var i = {
			lastWeek: function(e) {
				switch (e.getUTCDay()) {
				case 0:
					return "'prošlu nedjelju u' p";
				case 3:
					return "'prošlu srijedu u' p";
				case 6:
					return "'prošlu subotu u' p";
				default:
					return "'prošli' EEEE 'u' p"
				}
			},
			yesterday: "'jučer u' p",
			today: "'danas u' p",
			tomorrow: "'sutra u' p",
			nextWeek: function(e) {
				switch (e.getUTCDay()) {
				case 0:
					return "'iduću nedjelju u' p";
				case 3:
					return "'iduću srijedu u' p";
				case 6:
					return "'iduću subotu u' p";
				default:
					return "'prošli' EEEE 'u' p"
				}
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e);
			return String(t).concat(".")
		}
		var i = n(3),
		r = {
			narrow: ["pr.n.e.", "AD"],
			abbreviated: ["pr. Kr.", "po. Kr."],
			wide: ["Prije Krista", "Poslije Krista"]
		},
		o = {
			narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
			abbreviated: ["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"],
			wide: ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"]
		},
		u = {
			narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
			abbreviated: ["sij", "velj", "ožu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"],
			wide: ["siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"]
		},
		s = {
			narrow: ["1.", "2.", "3.", "4."],
			abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
			wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
		},
		d = {
			narrow: ["N", "P", "U", "S", "Č", "P", "S"],
			short: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
			abbreviated: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
			wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"]
		},
		c = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutro",
				afternoon: "popodne",
				evening: "navečer",
				night: "noću"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutro",
				afternoon: "popodne",
				evening: "navečer",
				night: "noću"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutro",
				afternoon: "poslije podne",
				evening: "navečer",
				night: "noću"
			}
		},
		l = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutro",
				afternoon: "popodne",
				evening: "navečer",
				night: "noću"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutro",
				afternoon: "popodne",
				evening: "navečer",
				night: "noću"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutro",
				afternoon: "poslije podne",
				evening: "navečer",
				night: "noću"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: s,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: o,
				defaultWidth: "wide",
				formattingValues: u,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: l,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)\./i,
		o = /\d+/i,
		u = {
			narrow: /^(pr\.n\.e\.|AD)/i,
			abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,
			wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i
		},
		s = {
			any: [/^pr/i, /^(po|nova)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]\.\s?kv\.?/i,
			wide: /^[1234]\. kvartal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(10|11|12|[123456789])\./i,
			abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
			wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i
		},
		m = {
			narrow: [/(10|11|12|[123456789])/i],
			abbreviated: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i],
			wide: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i]
		},
		f = {
			narrow: /^[npusčc]/i,
			short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
			abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
			wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
		},
		h = {
			narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
			any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
		},
		p = {
			any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^pono/i,
				noon: /^pod/i,
				morning: /jutro/i,
				afternoon: /(poslije\s|po)+podne/i,
				evening: /(navece|naveče)/i,
				night: /(nocu|noću)/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "wide"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(616),
		i = n(617),
		r = n(618),
		o = n(619),
		u = n(620),
		s = {
			code: "hu",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var i = t ? u[n][a] : o[n];
			return "halfaminute" === n ? i: e + i
		}
		function i(e, t, n) {
			n = n || {};
			var i, o = e.match(/about|over|almost|lessthan/i),
			u = e.replace(o, "");
			return i = a(t, n.addSuffix, u.toLowerCase(), n.comparison),
			o && (i = r[o[0].toLowerCase()] + " " + i),
			i
		}
		t.a = i;
		var r = {
			about: "körülbelül",
			over: "több mint",
			almost: "majdnem",
			lessthan: "kevesebb mint"
		},
		o = {
			xseconds: " másodperc",
			halfaminute: "fél perc",
			xminutes: " perc",
			xhours: " óra",
			xdays: " nap",
			xweeks: " hét",
			xmonths: " hónap",
			xyears: " év"
		},
		u = {
			xseconds: {
				"-1": " másodperccel ezelőtt",
				1 : " másodperc múlva",
				0 : " másodperce"
			},
			halfaminute: {
				"-1": "fél perccel ezelőtt",
				1 : "fél perc múlva",
				0 : "fél perce"
			},
			xminutes: {
				"-1": " perccel ezelőtt",
				1 : " perc múlva",
				0 : " perce"
			},
			xhours: {
				"-1": " órával ezelőtt",
				1 : " óra múlva",
				0 : " órája"
			},
			xdays: {
				"-1": " nappal ezelőtt",
				1 : " nap múlva",
				0 : " napja"
			},
			xweeks: {
				"-1": " héttel ezelőtt",
				1 : " hét múlva",
				0 : " hete"
			},
			xmonths: {
				"-1": " hónappal ezelőtt",
				1 : " hónap múlva",
				0 : " hónapja"
			},
			xyears: {
				"-1": " évvel ezelőtt",
				1 : " év múlva",
				0 : " éve"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "y. MMMM d., EEEE",
			long: "y. MMMM d.",
			medium: "y. MMM d.",
			short: "y. MM. dd."
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return function(t, n, a) {
				var i = t.getUTCDay();
				return (e ? "": "'múlt' ") + "'" + r[i] + "' p'-kor'"
			}
		}
		function i(e, t, n, a) {
			var i = o[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = i;
		var r = ["vasárnap", "hétfőn", "kedden", "szerdán", "csütörtökön", "pénteken", "szombaton"],
		o = {
			lastWeek: a(!1),
			yesterday: "'tegnap' p'-kor'",
			today: "'ma' p'-kor'",
			tomorrow: "'holnap' p'-kor'",
			nextWeek: a(!0),
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["ie.", "isz."],
			abbreviated: ["i. e.", "i. sz."],
			wide: ["Krisztus előtt", "időszámításunk szerint"]
		},
		o = {
			narrow: ["1.", "2.", "3.", "4."],
			abbreviated: ["1. n.év", "2. n.év", "3. n.év", "4. n.év"],
			wide: ["1. negyedév", "2. negyedév", "3. negyedév", "4. negyedév"]
		},
		u = {
			narrow: ["I.", "II.", "III.", "IV."],
			abbreviated: ["I. n.év", "II. n.év", "III. n.év", "IV. n.év"],
			wide: ["I. negyedév", "II. negyedév", "III. negyedév", "IV. negyedév"]
		},
		s = {
			narrow: ["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"],
			abbreviated: ["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."],
			wide: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"]
		},
		d = {
			narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
			short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
			abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
			wide: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
		},
		c = {
			narrow: {
				am: "de.",
				pm: "du.",
				midnight: "éjfél",
				noon: "dél",
				morning: "reggel",
				afternoon: "du.",
				evening: "este",
				night: "éjjel"
			},
			abbreviated: {
				am: "de.",
				pm: "du.",
				midnight: "éjfél",
				noon: "dél",
				morning: "reggel",
				afternoon: "du.",
				evening: "este",
				night: "éjjel"
			},
			wide: {
				am: "de.",
				pm: "du.",
				midnight: "éjfél",
				noon: "dél",
				morning: "reggel",
				afternoon: "délután",
				evening: "este",
				night: "éjjel"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				formattingValues: u,
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: c,
				defaultWidth: "wide",
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)\.?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ie\.|isz\.)/i,
			abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
			wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i
		},
		s = {
			narrow: [/ie/i, /isz/i],
			abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i],
			any: [/előtt/i, /(szerint|i. sz.)/i]
		},
		d = {
			narrow: /^[1234]\.?/i,
			abbreviated: /^[1234]?\.?\s?n\.év/i,
			wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i
		},
		c = {
			any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i]
		},
		l = {
			narrow: /^[jfmaásond]|sz/i,
			abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
			wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a|á/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s|sz/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^már/i, /^áp/i, /^máj/i, /^jún/i, /^júl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^([vhkpc]|sz|cs|sz)/i,
			short: /^([vhkp]|sze|cs|szo)/i,
			abbreviated: /^([vhkp]|sze|cs|szo)/i,
			wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i
		},
		h = {
			narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i],
			any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i]
		},
		p = {
			any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i
		},
		g = {
			any: {
				am: /^de\.?/i,
				pm: /^du\.?/i,
				midnight: /^éjf/i,
				noon: /^dé/i,
				morning: /reg/i,
				afternoon: /^délu\.?/i,
				evening: /es/i,
				night: /éjj/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(622),
		i = n(623),
		r = n(624),
		o = n(625),
		u = n(626),
		s = {
			code: "hy",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + " հետո": a + " առաջ": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "ավելի քիչ քան 1 վայրկյան",
				other: "ավելի քիչ քան {{count}} վայրկյան"
			},
			xSeconds: {
				one: "1 վայրկյան",
				other: "{{count}} վայրկյան"
			},
			halfAMinute: "կես րոպե",
			lessThanXMinutes: {
				one: "ավելի քիչ քան 1 րոպե",
				other: "ավելի քիչ քան {{count}} րոպե"
			},
			xMinutes: {
				one: "1 րոպե",
				other: "{{count}} րոպե"
			},
			aboutXHours: {
				one: "մոտ 1 ժամ",
				other: "մոտ {{count}} ժամ"
			},
			xHours: {
				one: "1 ժամ",
				other: "{{count}} ժամ"
			},
			xDays: {
				one: "1 օր",
				other: "{{count}} օր"
			},
			aboutXWeeks: {
				one: "մոտ 1 շաբաթ",
				other: "մոտ {{count}} շաբաթ"
			},
			xWeeks: {
				one: "1 շաբաթ",
				other: "{{count}} շաբաթ"
			},
			aboutXMonths: {
				one: "մոտ 1 ամիս",
				other: "մոտ {{count}} ամիս"
			},
			xMonths: {
				one: "1 ամիս",
				other: "{{count}} ամիս"
			},
			aboutXYears: {
				one: "մոտ 1 տարի",
				other: "մոտ {{count}} տարի"
			},
			xYears: {
				one: "1 տարի",
				other: "{{count}} տարի"
			},
			overXYears: {
				one: "ավելի քան 1 տարի",
				other: "ավելի քան {{count}} տարի"
			},
			almostXYears: {
				one: "համարյա 1 տարի",
				other: "համարյա {{count}} տարի"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "d MMMM, y, EEEE",
			long: "d MMMM, y",
			medium: "d MMM, y",
			short: "dd.MM.yyyy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'ժ․'{{time}}",
			long: "{{date}} 'ժ․'{{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'նախորդ' eeee p'֊ին'",
			yesterday: "'երեկ' p'֊ին'",
			today: "'այսօր' p'֊ին'",
			tomorrow: "'վաղը' p'֊ին'",
			nextWeek: "'հաջորդ' eeee p'֊ին'",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = n % 100;
			return a < 10 && a % 10 == 1 ? n + "֊ին": n + "֊րդ"
		}
		var i = n(3),
		r = {
			narrow: ["Ք", "Մ"],
			abbreviated: ["ՔԱ", "ՄԹ"],
			wide: ["Քրիստոսից առաջ", "Մեր թվարկության"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Ք1", "Ք2", "Ք3", "Ք4"],
			wide: ["1֊ին քառորդ", "2֊րդ քառորդ", "3֊րդ քառորդ", "4֊րդ քառորդ"]
		},
		u = {
			narrow: ["Հ", "Փ", "Մ", "Ա", "Մ", "Հ", "Հ", "Օ", "Ս", "Հ", "Ն", "Դ"],
			abbreviated: ["հուն", "փետ", "մար", "ապր", "մայ", "հուն", "հուլ", "օգս", "սեպ", "հոկ", "նոյ", "դեկ"],
			wide: ["հունվար", "փետրվար", "մարտ", "ապրիլ", "մայիս", "հունիս", "հուլիս", "օգոստոս", "սեպտեմբեր", "հոկտեմբեր", "նոյեմբեր", "դեկտեմբեր"]
		},
		s = {
			narrow: ["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"],
			short: ["կր", "եր", "եք", "չք", "հգ", "ուր", "շբ"],
			abbreviated: ["կիր", "երկ", "երք", "չոր", "հնգ", "ուրբ", "շաբ"],
			wide: ["կիրակի", "երկուշաբթի", "երեքշաբթի", "չորեքշաբթի", "հինգշաբթի", "ուրբաթ", "շաբաթ"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "կեսգշ",
				noon: "կեսօր",
				morning: "առավոտ",
				afternoon: "ցերեկ",
				evening: "երեկո",
				night: "գիշեր"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "կեսգիշեր",
				noon: "կեսօր",
				morning: "առավոտ",
				afternoon: "ցերեկ",
				evening: "երեկո",
				night: "գիշեր"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "կեսգիշեր",
				noon: "կեսօր",
				morning: "առավոտ",
				afternoon: "ցերեկ",
				evening: "երեկո",
				night: "գիշեր"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "կեսգշ",
				noon: "կեսօր",
				morning: "առավոտը",
				afternoon: "ցերեկը",
				evening: "երեկոյան",
				night: "գիշերը"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "կեսգիշերին",
				noon: "կեսօրին",
				morning: "առավոտը",
				afternoon: "ցերեկը",
				evening: "երեկոյան",
				night: "գիշերը"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "կեսգիշերին",
				noon: "կեսօրին",
				morning: "առավոտը",
				afternoon: "ցերեկը",
				evening: "երեկոյան",
				night: "գիշերը"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)((-|֊)?(ին|րդ))?/i,
		o = /\d+/i,
		u = {
			narrow: /^(Ք|Մ)/i,
			abbreviated: /^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,
			wide: /^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i
		},
		s = {
			any: [/^(ք|մ)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^ք[1234]/i,
			wide: /^[1234]((-|֊)?(ին|րդ)) քառորդ/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[հփմաօսնդ]/i,
			abbreviated: /^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,
			wide: /^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i
		},
		m = {
			narrow: [/^հ/i, /^փ/i, /^մ/i, /^ա/i, /^մ/i, /^հ/i, /^հ/i, /^օ/i, /^ս/i, /^հ/i, /^ն/i, /^դ/i],
			any: [/^հու/i, /^փ/i, /^մար/i, /^ա/i, /^մայ/i, /^հուն/i, /^հուլ/i, /^օ/i, /^ս/i, /^հոկ/i, /^ն/i, /^դ/i]
		},
		f = {
			narrow: /^[եչհոշկ]/i,
			short: /^(կր|եր|եք|չք|հգ|ուր|շբ)/i,
			abbreviated: /^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,
			wide: /^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i
		},
		h = {
			narrow: [/^կ/i, /^ե/i, /^ե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
			short: [/^կ/i, /^եր/i, /^եք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
			abbreviated: [/^կ/i, /^երկ/i, /^երք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
			wide: [/^կ/i, /^երկ/i, /^երե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i]
		},
		p = {
			narrow: /^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,
			any: /^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /կեսգիշեր/i,
				noon: /կեսօր/i,
				morning: /առավոտ/i,
				afternoon: /ցերեկ/i,
				evening: /երեկո/i,
				night: /գիշեր/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(628),
		i = n(629),
		r = n(630),
		o = n(631),
		u = n(632),
		s = {
			code: "id",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "dalam waktu " + a: a + " yang lalu": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "kurang dari 1 detik",
				other: "kurang dari {{count}} detik"
			},
			xSeconds: {
				one: "1 detik",
				other: "{{count}} detik"
			},
			halfAMinute: "setengah menit",
			lessThanXMinutes: {
				one: "kurang dari 1 menit",
				other: "kurang dari {{count}} menit"
			},
			xMinutes: {
				one: "1 menit",
				other: "{{count}} menit"
			},
			aboutXHours: {
				one: "sekitar 1 jam",
				other: "sekitar {{count}} jam"
			},
			xHours: {
				one: "1 jam",
				other: "{{count}} jam"
			},
			xDays: {
				one: "1 hari",
				other: "{{count}} hari"
			},
			aboutXWeeks: {
				one: "sekitar 1 minggu",
				other: "sekitar {{count}} minggu"
			},
			xWeeks: {
				one: "1 minggu",
				other: "{{count}} minggu"
			},
			aboutXMonths: {
				one: "sekitar 1 bulan",
				other: "sekitar {{count}} bulan"
			},
			xMonths: {
				one: "1 bulan",
				other: "{{count}} bulan"
			},
			aboutXYears: {
				one: "sekitar 1 tahun",
				other: "sekitar {{count}} tahun"
			},
			xYears: {
				one: "1 tahun",
				other: "{{count}} tahun"
			},
			overXYears: {
				one: "lebih dari 1 tahun",
				other: "lebih dari {{count}} tahun"
			},
			almostXYears: {
				one: "hampir 1 tahun",
				other: "hampir {{count}} tahun"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "d/M/yyyy"
		},
		r = {
			full: "HH.mm.ss",
			long: "HH.mm.ss",
			medium: "HH.mm",
			short: "HH.mm"
		},
		o = {
			full: "{{date}} 'pukul' {{time}}",
			long: "{{date}} 'pukul' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'lalu pukul' p",
			yesterday: "'Kemarin pukul' p",
			today: "'Hari ini pukul' p",
			tomorrow: "'Besok pukul' p",
			nextWeek: "eeee 'pukul' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e);
			return "ke-" + n
		}
		var i = n(3),
		r = {
			narrow: ["SM", "M"],
			abbreviated: ["SM", "M"],
			wide: ["Sebelum Masehi", "Masehi"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["K1", "K2", "K3", "K4"],
			wide: ["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
			wide: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
		},
		s = {
			narrow: ["M", "S", "S", "R", "K", "J", "S"],
			short: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
			abbreviated: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
			wide: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
		},
		d = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			}
		},
		c = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "siang",
				evening: "sore",
				night: "malam"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^ke-(\d+)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(sm|m)/i,
			abbreviated: /^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,
			wide: /^(sebelum masehi|sebelum era umum|masehi|era umum)/i
		},
		s = {
			any: [/^s/i, /^(m|e)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^K-?\s[1234]/i,
			wide: /^Kuartal ke-?\s?[1234]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,
			wide: /^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[srkjm]/i,
			short: /^(min|sen|sel|rab|kam|jum|sab)/i,
			abbreviated: /^(min|sen|sel|rab|kam|jum|sab)/i,
			wide: /^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i
		},
		h = {
			narrow: [/^m/i, /^s/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i],
			any: [/^m/i, /^sen/i, /^sel/i, /^r/i, /^k/i, /^j/i, /^sa/i]
		},
		p = {
			narrow: /^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,
			any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^pm/i,
				midnight: /^tengah m/i,
				noon: /^tengah h/i,
				morning: /pagi/i,
				afternoon: /siang/i,
				evening: /sore/i,
				night: /malam/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(634),
		i = n(635),
		r = n(636),
		o = n(637),
		u = n(638),
		s = {
			code: "is",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "í " + a: a + " síðan": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "minna en 1 sekúnda",
				other: "minna en {{count}} sekúndur"
			},
			xSeconds: {
				one: "1 sekúnda",
				other: "{{count}} sekúndur"
			},
			halfAMinute: "hálf mínúta",
			lessThanXMinutes: {
				one: "minna en 1 mínúta",
				other: "minna en {{count}} mínútur"
			},
			xMinutes: {
				one: "1 mínúta",
				other: "{{count}} mínútur"
			},
			aboutXHours: {
				one: "u.þ.b. 1 klukkustund",
				other: "u.þ.b. {{count}} klukkustundir"
			},
			xHours: {
				one: "1 klukkustund",
				other: "{{count}} klukkustundir"
			},
			xDays: {
				one: "1 dagur",
				other: "{{count}} dagar"
			},
			aboutXWeeks: {
				one: "um viku",
				other: "um {{count}} vikur"
			},
			xWeeks: {
				one: "1 viku",
				other: "{{count}} vikur"
			},
			aboutXMonths: {
				one: "u.þ.b. 1 mánuður",
				other: "u.þ.b. {{count}} mánuðir"
			},
			xMonths: {
				one: "1 mánuður",
				other: "{{count}} mánuðir"
			},
			aboutXYears: {
				one: "u.þ.b. 1 ár",
				other: "u.þ.b. {{count}} ár"
			},
			xYears: {
				one: "1 ár",
				other: "{{count}} ár"
			},
			overXYears: {
				one: "meira en 1 ár",
				other: "meira en {{count}} ár"
			},
			almostXYears: {
				one: "næstum 1 ár",
				other: "næstum {{count}} ár"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM y",
			long: "do MMMM y",
			medium: "do MMM y",
			short: "d.MM.y"
		},
		r = {
			full: "'kl'. HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'kl.' {{time}}",
			long: "{{date}} 'kl.' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'síðasta' dddd 'kl.' p",
			yesterday: "'í gær kl.' p",
			today: "'í dag kl.' p",
			tomorrow: "'á morgun kl.' p",
			nextWeek: "dddd 'kl.' p",
			other: "L"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["f.Kr.", "e.Kr."],
			abbreviated: ["f.Kr.", "e.Kr."],
			wide: ["fyrir Krist", "eftir Krist"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1F", "2F", "3F", "4F"],
			wide: ["1. fjórðungur", "2. fjórðungur", "3. fjórðungur", "4. fjórðungur"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "Á", "S", "Ó", "N", "D"],
			abbreviated: ["jan.", "feb.", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "sept.", "okt.", "nóv.", "des."],
			wide: ["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"]
		},
		s = {
			narrow: ["S", "M", "Þ", "M", "F", "F", "L"],
			short: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
			abbreviated: ["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau"],
			wide: ["sunnudagur", "mánudagur", "þriðjudagur", "miðvikudagur", "fimmtudagur", "föstudagur", "laugardagur"]
		},
		d = {
			narrow: {
				am: "f",
				pm: "e",
				midnight: "miðnætti",
				noon: "hádegi",
				morning: "morgunn",
				afternoon: "síðdegi",
				evening: "kvöld",
				night: "nótt"
			},
			abbreviated: {
				am: "f.h.",
				pm: "e.h.",
				midnight: "miðnætti",
				noon: "hádegi",
				morning: "morgunn",
				afternoon: "síðdegi",
				evening: "kvöld",
				night: "nótt"
			},
			wide: {
				am: "fyrir hádegi",
				pm: "eftir hádegi",
				midnight: "miðnætti",
				noon: "hádegi",
				morning: "morgunn",
				afternoon: "síðdegi",
				evening: "kvöld",
				night: "nótt"
			}
		},
		c = {
			narrow: {
				am: "f",
				pm: "e",
				midnight: "á miðnætti",
				noon: "á hádegi",
				morning: "að morgni",
				afternoon: "síðdegis",
				evening: "um kvöld",
				night: "um nótt"
			},
			abbreviated: {
				am: "f.h.",
				pm: "e.h.",
				midnight: "á miðnætti",
				noon: "á hádegi",
				morning: "að morgni",
				afternoon: "síðdegis",
				evening: "um kvöld",
				night: "um nótt"
			},
			wide: {
				am: "fyrir hádegi",
				pm: "eftir hádegi",
				midnight: "á miðnætti",
				noon: "á hádegi",
				morning: "að morgni",
				afternoon: "síðdegis",
				evening: "um kvöld",
				night: "um nótt"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(th|st|nd|rd)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(f\.Kr\.|e\.Kr\.)/i,
			abbreviated: /^(f\.Kr\.|e\.Kr\.)/i,
			wide: /^(fyrir Krist|eftir Krist)/i
		},
		s = {
			any: [/^(f\.Kr\.|e\.Kr\.)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234] fjórðungur/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmásónd]/i,
			abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,
			wide: /^(januar|februar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^á/i, /^s/i, /^ó/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maí/i, /^jún/i, /^júl/i, /^áu/i, /^s/i, /^ó/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[smtwf]/i,
			short: /^(su|má|þr|mi|fi|fö|la)/i,
			abbreviated: /^(sun|mán|þri|mið|fim|fös|lau)\.?/i,
			wide: /^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i
		},
		h = {
			narrow: [/^s/i, /^m/i, /^þ/i, /^m/i, /^f/i, /^f/i, /^l/i],
			any: [/^su/i, /^má/i, /^þr/i, /^mi/i, /^fi/i, /^fö/i, /^la/i]
		},
		p = {
			narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,
			any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i
		},
		g = {
			any: {
				am: /^f/i,
				pm: /^e/i,
				midnight: /^mi/i,
				noon: /^há/i,
				morning: /morgunn/i,
				afternoon: /síðdegi/i,
				evening: /kvöld/i,
				night: /nótt/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(640),
		i = n(641),
		r = n(642),
		o = n(643),
		u = n(644),
		s = {
			code: "it",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "tra " + a: a + " fa": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "meno di un secondo",
				other: "meno di {{count}} secondi"
			},
			xSeconds: {
				one: "un secondo",
				other: "{{count}} secondi"
			},
			halfAMinute: "alcuni secondi",
			lessThanXMinutes: {
				one: "meno di un minuto",
				other: "meno di {{count}} minuti"
			},
			xMinutes: {
				one: "un minuto",
				other: "{{count}} minuti"
			},
			aboutXHours: {
				one: "circa un'ora",
				other: "circa {{count}} ore"
			},
			xHours: {
				one: "un'ora",
				other: "{{count}} ore"
			},
			xDays: {
				one: "un giorno",
				other: "{{count}} giorni"
			},
			aboutXWeeks: {
				one: "circa una settimana",
				other: "circa {{count}} settimane"
			},
			xWeeks: {
				one: "una settimana",
				other: "{{count}} settimane"
			},
			aboutXMonths: {
				one: "circa un mese",
				other: "circa {{count}} mesi"
			},
			xMonths: {
				one: "un mese",
				other: "{{count}} mesi"
			},
			aboutXYears: {
				one: "circa un anno",
				other: "circa {{count}} anni"
			},
			xYears: {
				one: "un anno",
				other: "{{count}} anni"
			},
			overXYears: {
				one: "più di un anno",
				other: "più di {{count}} anni"
			},
			almostXYears: {
				one: "quasi un anno",
				other: "quasi {{count}} anni"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			switch (e) {
			case 0:
				return "'domenica scorsa alle' p";
			default:
				return "'" + s[e] + " scorso alle' p"
			}
		}
		function i(e) {
			return "'" + s[e] + " alle' p"
		}
		function r(e) {
			switch (e) {
			case 0:
				return "'domenica prossima alle' p";
			default:
				return "'" + s[e] + " prossimo alle' p"
			}
		}
		function o(e, t, n, a) {
			var i = d[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
		d = {
			lastWeek: function(e, t, n) {
				var r = e.getUTCDay();
				return u.a(e, t, n) ? i(r) : a(r)
			},
			yesterday: "'ieri alle' p",
			today: "'oggi alle' p",
			tomorrow: "'domani alle' p",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return u.a(e, t, n) ? i(a) : r(a)
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "º"
		}
		var i = n(3),
		r = {
			narrow: ["aC", "dC"],
			abbreviated: ["a.C.", "d.C."],
			wide: ["avanti Cristo", "dopo Cristo"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["T1", "T2", "T3", "T4"],
			wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
		},
		u = {
			narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
			abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
			wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
		},
		s = {
			narrow: ["D", "L", "M", "M", "G", "V", "S"],
			short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
			abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
			wide: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
		},
		d = {
			narrow: {
				am: "m.",
				pm: "p.",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "mattina",
				afternoon: "pomeriggio",
				evening: "sera",
				night: "notte"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "mattina",
				afternoon: "pomeriggio",
				evening: "sera",
				night: "notte"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "mattina",
				afternoon: "pomeriggio",
				evening: "sera",
				night: "notte"
			}
		},
		c = {
			narrow: {
				am: "m.",
				pm: "p.",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "di mattina",
				afternoon: "del pomeriggio",
				evening: "di sera",
				night: "di notte"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "di mattina",
				afternoon: "del pomeriggio",
				evening: "di sera",
				night: "di notte"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "mezzanotte",
				noon: "mezzogiorno",
				morning: "di mattina",
				afternoon: "del pomeriggio",
				evening: "di sera",
				night: "di notte"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(º)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(aC|dC)/i,
			abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
			wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
		},
		s = {
			any: [/^a/i, /^(d|e)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^t[1234]/i,
			wide: /^[1234](º)? trimestre/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[gfmalsond]/i,
			abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
			wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
		},
		m = {
			narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[dlmgvs]/i,
			short: /^(do|lu|ma|me|gi|ve|sa)/i,
			abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
			wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
		},
		h = {
			narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
			any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
		},
		p = {
			narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
			any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mezza/i,
				noon: /^mezzo/i,
				morning: /mattina/i,
				afternoon: /pomeriggio/i,
				evening: /sera/i,
				night: /notte/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(646),
		i = n(647),
		r = n(648),
		o = n(649),
		u = n(650),
		s = {
			code: "ja",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? n.addSuffix && i[e].oneWithSuffix ? i[e].oneWithSuffix: i[e].one: n.addSuffix && i[e].otherWithSuffix ? i[e].otherWithSuffix.replace("{{count}}", t) : i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + "後": a + "前": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "1秒未満",
				other: "{{count}}秒未満",
				oneWithSuffix: "約1秒",
				otherWithSuffix: "約{{count}}秒"
			},
			xSeconds: {
				one: "1秒",
				other: "{{count}}秒"
			},
			halfAMinute: "30秒",
			lessThanXMinutes: {
				one: "1分未満",
				other: "{{count}}分未満",
				oneWithSuffix: "約1分",
				otherWithSuffix: "約{{count}}分"
			},
			xMinutes: {
				one: "1分",
				other: "{{count}}分"
			},
			aboutXHours: {
				one: "約1時間",
				other: "約{{count}}時間"
			},
			xHours: {
				one: "1時間",
				other: "{{count}}時間"
			},
			xDays: {
				one: "1日",
				other: "{{count}}日"
			},
			aboutXWeeks: {
				one: "約1週間",
				other: "約{{count}}週間"
			},
			xWeeks: {
				one: "1週間",
				other: "{{count}}週間"
			},
			aboutXMonths: {
				one: "約1か月",
				other: "約{{count}}か月"
			},
			xMonths: {
				one: "1か月",
				other: "{{count}}か月"
			},
			aboutXYears: {
				one: "約1年",
				other: "約{{count}}年"
			},
			xYears: {
				one: "1年",
				other: "{{count}}年"
			},
			overXYears: {
				one: "1年以上",
				other: "{{count}}年以上"
			},
			almostXYears: {
				one: "1年近く",
				other: "{{count}}年近く"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "y年M月d日EEEE",
			long: "y年M月d日",
			medium: "y/MM/dd",
			short: "y/MM/dd"
		},
		r = {
			full: "H時mm分ss秒 zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "先週のeeeeのp",
			yesterday: "昨日のp",
			today: "今日のp",
			tomorrow: "明日のp",
			nextWeek: "翌週のeeeeのp",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = t || {};
			return "date" === String(a.unit) ? n + "日": n
		}
		var i = n(3),
		r = {
			narrow: ["BC", "AC"],
			abbreviated: ["紀元前", "西暦"],
			wide: ["紀元前", "西暦"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
		},
		u = {
			narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
			wide: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
		},
		s = {
			narrow: ["日", "月", "火", "水", "木", "金", "土"],
			short: ["日", "月", "火", "水", "木", "金", "土"],
			abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
			wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
		},
		d = {
			narrow: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			},
			abbreviated: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			},
			wide: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			}
		},
		c = {
			narrow: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			},
			abbreviated: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			},
			wide: {
				am: "午前",
				pm: "午後",
				midnight: "深夜",
				noon: "正午",
				morning: "朝",
				afternoon: "午後",
				evening: "夜",
				night: "深夜"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^第?\d+(日)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(B\.?C\.?|A\.?D\.?)/i,
			abbreviated: /^(紀元[前後]|西暦)/i,
			wide: /^(紀元[前後]|西暦)/i
		},
		s = {
			narrow: [/^B/i, /^A/i],
			any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^Q[1234]/i,
			wide: /^第[1234一二三四１２３４]四半期/i
		},
		c = {
			any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
		},
		l = {
			narrow: /^([123456789]|1[012])/,
			abbreviated: /^([123456789]|1[012])月/i,
			wide: /^([123456789]|1[012])月/i
		},
		m = {
			any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
		},
		f = {
			narrow: /^[日月火水木金土]/,
			short: /^[日月火水木金土]/,
			abbreviated: /^[日月火水木金土]/,
			wide: /^[日月火水木金土]曜日/
		},
		h = {
			any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
		},
		p = {
			any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
		},
		g = {
			any: {
				am: /^(A|午前)/i,
				pm: /^(P|午後)/i,
				midnight: /^深夜|真夜中/i,
				noon: /^正午/i,
				morning: /^朝/i,
				afternoon: /^午後/i,
				evening: /^夜/i,
				night: /^深夜/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(652),
		i = n(653),
		r = n(654),
		o = n(655),
		u = n(656),
		s = {
			code: "ka",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			return "string" == typeof i[e] ? i[e] : n.addSuffix && n.comparison > 0 ? i[e].future.replace("{{count}}", t) : n.addSuffix && n.comparison <= 0 ? i[e].past.replace("{{count}}", t) : i[e].present.replace("{{count}}", t)
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				past: "{{count}} წამზე ნაკლები ხნის წინ",
				present: "{{count}} წამზე ნაკლები",
				future: "{{count}} წამზე ნაკლებში"
			},
			xSeconds: {
				past: "{{count}} წამის წინ",
				present: "{{count}} წამი",
				future: "{{count}} წამში"
			},
			halfAMinute: {
				past: "ნახევარი წუთის წინ",
				present: "ნახევარი წუთი",
				future: "ნახევარი წუთში"
			},
			lessThanXMinutes: {
				past: "{{count}} წუთზე ნაკლები ხნის წინ",
				present: "{{count}} წუთზე ნაკლები",
				future: "{{count}} წუთზე ნაკლებში"
			},
			xMinutes: {
				past: "{{count}} წუთის წინ",
				present: "{{count}} წუთი",
				future: "{{count}} წუთში"
			},
			aboutXHours: {
				past: "დაახლოებით {{count}} საათის წინ",
				present: "დაახლოებით {{count}} საათი",
				future: "დაახლოებით {{count}} საათში"
			},
			xHours: {
				past: "{{count}} საათის წინ",
				present: "{{count}} საათი",
				future: "{{count}} საათში"
			},
			xDays: {
				past: "{{count}} დღის წინ",
				present: "{{count}} დღე",
				future: "{{count}} დღეში"
			},
			aboutXWeeks: {
				past: "დაახლოებით {{count}} კვირას წინ",
				present: "დაახლოებით {{count}} კვირა",
				future: "დაახლოებით {{count}} კვირაში"
			},
			xWeeks: {
				past: "{{count}} კვირას კვირა",
				present: "{{count}} კვირა",
				future: "{{count}} კვირაში"
			},
			aboutXMonths: {
				past: "დაახლოებით {{count}} თვის წინ",
				present: "დაახლოებით {{count}} თვე",
				future: "დაახლოებით {{count}} თვეში"
			},
			xMonths: {
				past: "{{count}} თვის წინ",
				present: "{{count}} თვე",
				future: "{{count}} თვეში"
			},
			aboutXYears: {
				past: "დაახლოებით {{count}} წლის წინ",
				present: "დაახლოებით {{count}} წელი",
				future: "დაახლოებით {{count}} წელში"
			},
			xYears: {
				past: "{{count}} წლის წინ",
				present: "{{count}} წელი",
				future: "{{count}} წელში"
			},
			overXYears: {
				past: "{{count}} წელზე მეტი ხნის წინ",
				present: "{{count}} წელზე მეტი",
				future: "{{count}} წელზე მეტი ხნის შემდეგ"
			},
			almostXYears: {
				past: "თითქმის {{count}} წლის წინ",
				present: "თითქმის {{count}} წელი",
				future: "თითქმის {{count}} წელში"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM, y",
			long: "do, MMMM, y",
			medium: "d, MMM, y",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} {{time}}'-ზე'",
			long: "{{date}} {{time}}'-ზე'",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'წინა' eeee LT'-ზე'",
			yesterday: "'გუშინ' LT'-ზე'",
			today: "'დღეს' LT'-ზე'",
			tomorrow: "'ხვალ' LT'-ზე'",
			nextWeek: "'შემდეგი' eeee LT'-ზე'",
			other: "L"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e);
			return 1 === n ? n + "-ლი": n + "-ე"
		}
		var i = n(3),
		r = {
			narrow: ["ჩ.წ-მდე", "ჩ.წ"],
			abbreviated: ["ჩვ.წ-მდე", "ჩვ.წ"],
			wide: ["ჩვენს წელთაღრიცხვამდე", "ჩვენი წელთაღრიცხვით"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1-ლი კვ", "2-ე კვ", "3-ე კვ", "4-ე კვ"],
			wide: ["1-ლი კვარტალი", "2-ე კვარტალი", "3-ე კვარტალი", "4-ე კვარტალი"]
		},
		u = {
			narrow: ["ია", "თე", "მა", "აპ", "მს", "ვნ", "ვლ", "აგ", "სე", "ოქ", "ნო", "დე"],
			abbreviated: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"],
			wide: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"]
		},
		s = {
			narrow: ["კვ", "ორ", "სა", "ოთ", "ხუ", "პა", "შა"],
			short: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
			abbreviated: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
			wide: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "შუაღამე",
				noon: "შუადღე",
				morning: "დილა",
				afternoon: "საღამო",
				evening: "საღამო",
				night: "ღამე"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "შუაღამე",
				noon: "შუადღე",
				morning: "დილა",
				afternoon: "საღამო",
				evening: "საღამო",
				night: "ღამე"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "შუაღამე",
				noon: "შუადღე",
				morning: "დილა",
				afternoon: "საღამო",
				evening: "საღამო",
				night: "ღამე"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "შუაღამით",
				noon: "შუადღისას",
				morning: "დილით",
				afternoon: "ნაშუადღევს",
				evening: "საღამოს",
				night: "ღამით"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "შუაღამით",
				noon: "შუადღისას",
				morning: "დილით",
				afternoon: "ნაშუადღევს",
				evening: "საღამოს",
				night: "ღამით"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "შუაღამით",
				noon: "შუადღისას",
				morning: "დილით",
				afternoon: "ნაშუადღევს",
				evening: "საღამოს",
				night: "ღამით"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(-ლი|-ე)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ჩვ?\.წ)/i,
			abbreviated: /^(ჩვ?\.წ)/i,
			wide: /^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i
		},
		s = {
			any: [/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i, /^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]-(ლი|ე)? კვ/i,
			wide: /^[1234]-(ლი|ე)? კვარტალი/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			any: /^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i
		},
		m = {
			any: [/^ია/i, /^თ/i, /^მარ/i, /^აპ/i, /^მაი/i, /^ი?ვნ/i, /^ი?ვლ/i, /^აგ/i, /^ს/i, /^ო/i, /^ნ/i, /^დ/i]
		},
		f = {
			narrow: /^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i,
			short: /^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i,
			long: /^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i
		},
		h = {
			any: [/^კვ/i, /^ორ/i, /^სა/i, /^ოთ/i, /^ხუ/i, /^პა/i, /^შა/i]
		},
		p = {
			any: /^([ap]\.?\s?m\.?|შუაღ|დილ)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^შუაღ/i,
				noon: /^შუადღ/i,
				morning: /^დილ/i,
				afternoon: /ნაშუადღევს/i,
				evening: /საღამო/i,
				night: /ღამ/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(658),
		i = n(659),
		r = n(660),
		o = n(661),
		u = n(662),
		s = {
			code: "kk",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (void 0 !== e.one && 1 === t) return e.one;
			var n = t % 10,
			a = t % 100;
			return 1 === n && 11 !== a ? e.singularNominative.replace("{{count}}", t) : n >= 2 && n <= 4 && (a < 10 || a > 20) ? e.singularGenitive.replace("{{count}}", t) : e.pluralGenitive.replace("{{count}}", t)
		}
		function i(e) {
			return function(t, n) {
				return n.addSuffix ? n.comparison > 0 ? e.future ? a(e.future, t) : a(e.regular, t) + " кейін": e.past ? a(e.past, t) : a(e.regular, t) + " бұрын": a(e.regular, t)
			}
		}
		function r(e, t, n) {
			return n = n || {},
			o[e](t, n)
		}
		t.a = r;
		var o = {
			lessThanXSeconds: i({
				regular: {
					one: "1 секундтан аз",
					singularNominative: "{{count}} секундтан аз",
					singularGenitive: "{{count}} секундтан аз",
					pluralGenitive: "{{count}} секундтан аз"
				},
				future: {
					one: "бір секундтан кейін",
					singularNominative: "{{count}} секундтан кейін",
					singularGenitive: "{{count}} секундтан кейін",
					pluralGenitive: "{{count}} секундтан кейін"
				}
			}),
			xSeconds: i({
				regular: {
					singularNominative: "{{count}} секунд",
					singularGenitive: "{{count}} секунд",
					pluralGenitive: "{{count}} секунд"
				},
				past: {
					singularNominative: "{{count}} секунд бұрын",
					singularGenitive: "{{count}} секунд бұрын",
					pluralGenitive: "{{count}} секунд бұрын"
				},
				future: {
					singularNominative: "{{count}} секундтан кейін",
					singularGenitive: "{{count}} секундтан кейін",
					pluralGenitive: "{{count}} секундтан кейін"
				}
			}),
			halfAMinute: function(e, t) {
				return t.addSuffix ? t.comparison > 0 ? "жарты минут ішінде": "жарты минут бұрын": "жарты минут"
			},
			lessThanXMinutes: i({
				regular: {
					one: "1 минуттан аз",
					singularNominative: "{{count}} минуттан аз",
					singularGenitive: "{{count}} минуттан аз",
					pluralGenitive: "{{count}} минуттан аз"
				},
				future: {
					one: "минуттан кем ",
					singularNominative: "{{count}} минуттан кем",
					singularGenitive: "{{count}} минуттан кем",
					pluralGenitive: "{{count}} минуттан кем"
				}
			}),
			xMinutes: i({
				regular: {
					singularNominative: "{{count}} минут",
					singularGenitive: "{{count}} минут",
					pluralGenitive: "{{count}} минут"
				},
				past: {
					singularNominative: "{{count}} минут бұрын",
					singularGenitive: "{{count}} минут бұрын",
					pluralGenitive: "{{count}} минут бұрын"
				},
				future: {
					singularNominative: "{{count}} минуттан кейін",
					singularGenitive: "{{count}} минуттан кейін",
					pluralGenitive: "{{count}} минуттан кейін"
				}
			}),
			aboutXHours: i({
				regular: {
					singularNominative: "шамамен {{count}} сағат",
					singularGenitive: "шамамен {{count}} сағат",
					pluralGenitive: "шамамен {{count}} сағат"
				},
				future: {
					singularNominative: "шамамен {{count}} сағаттан кейін",
					singularGenitive: "шамамен {{count}} сағаттан кейін",
					pluralGenitive: "шамамен {{count}} сағаттан кейін"
				}
			}),
			xHours: i({
				regular: {
					singularNominative: "{{count}} сағат",
					singularGenitive: "{{count}} сағат",
					pluralGenitive: "{{count}} сағат"
				}
			}),
			xDays: i({
				regular: {
					singularNominative: "{{count}} күн",
					singularGenitive: "{{count}} күн",
					pluralGenitive: "{{count}} күн"
				},
				future: {
					singularNominative: "{{count}} күннен кейін",
					singularGenitive: "{{count}} күннен кейін",
					pluralGenitive: "{{count}} күннен кейін"
				}
			}),
			aboutXWeeks: {
				one: "шамамен 1 апта",
				other: "шамамен {{count}} апта"
			},
			xWeeks: {
				one: "1 апта",
				other: "{{count}} апта"
			},
			aboutXMonths: i({
				regular: {
					singularNominative: "шамамен {{count}} ай",
					singularGenitive: "шамамен {{count}} ай",
					pluralGenitive: "шамамен {{count}} ай"
				},
				future: {
					singularNominative: "шамамен {{count}} айдан кейін",
					singularGenitive: "шамамен {{count}} айдан кейін",
					pluralGenitive: "шамамен {{count}} айдан кейін"
				}
			}),
			xMonths: i({
				regular: {
					singularNominative: "{{count}} ай",
					singularGenitive: "{{count}} ай",
					pluralGenitive: "{{count}} ай"
				}
			}),
			aboutXYears: i({
				regular: {
					singularNominative: "шамамен {{count}} жыл",
					singularGenitive: "шамамен {{count}} жыл",
					pluralGenitive: "шамамен {{count}} жыл"
				},
				future: {
					singularNominative: "шамамен {{count}} жылдан кейін",
					singularGenitive: "шамамен {{count}} жылдан кейін",
					pluralGenitive: "шамамен {{count}} жылдан кейін"
				}
			}),
			xYears: i({
				regular: {
					singularNominative: "{{count}} жыл",
					singularGenitive: "{{count}} жыл",
					pluralGenitive: "{{count}} жыл"
				},
				future: {
					singularNominative: "{{count}} жылдан кейін",
					singularGenitive: "{{count}} жылдан кейін",
					pluralGenitive: "{{count}} жылдан кейін"
				}
			}),
			overXYears: i({
				regular: {
					singularNominative: "{{count}} жылдан астам",
					singularGenitive: "{{count}} жылдан астам",
					pluralGenitive: "{{count}} жылдан астам"
				},
				future: {
					singularNominative: "{{count}} жылдан астам",
					singularGenitive: "{{count}} жылдан астам",
					pluralGenitive: "{{count}} жылдан астам"
				}
			}),
			almostXYears: i({
				regular: {
					singularNominative: "{{count}} жылға жақын",
					singularGenitive: "{{count}} жылға жақын",
					pluralGenitive: "{{count}} жылға жақын"
				},
				future: {
					singularNominative: "{{count}} жылдан кейін",
					singularGenitive: "{{count}} жылдан кейін",
					pluralGenitive: "{{count}} жылдан кейін"
				}
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM y 'ж.'",
			long: "do MMMM y 'ж.'",
			medium: "d MMM y 'ж.'",
			short: "dd.MM.yyyy"
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			any: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "any"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return "'өткен " + s[e] + " сағат' p'-де'"
		}
		function i(e) {
			return "'" + s[e] + " сағат' p'-де'"
		}
		function r(e) {
			return "'келесі " + s[e] + " сағат' p'-де'"
		}
		function o(e, t, n, a) {
			var i = d[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = ["жексенбіде", "дүйсенбіде", "сейсенбіде", "сәрсенбіде", "бейсенбіде", "жұмада", "сенбіде"],
		d = {
			lastWeek: function(e, t, n) {
				var r = e.getUTCDay();
				return u.a(e, t, n) ? i(r) : a(r)
			},
			yesterday: "'кеше сағат' p'-де'",
			today: "'бүгін сағат' p'-де'",
			tomorrow: "'ертең сағат' p'-де'",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return u.a(e, t, n) ? i(a) : r(a)
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n, a = t || {};
			String(a.unit);
			return n = "-ші",
			e + n
		}
		var i = n(3),
		r = {
			narrow: ["б.з.д.", "б.з."],
			abbreviated: ["б.з.д.", "б.з."],
			wide: ["біздің заманымызға дейін", "біздің заманымыз"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1-ші тоқ.", "2-ші тоқ.", "3-ші тоқ.", "4-ші тоқ."],
			wide: ["1-ші тоқсан", "2-ші тоқсан", "3-ші тоқсан", "4-ші тоқсан"]
		},
		u = {
			narrow: ["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"],
			abbreviated: ["қаң", "ақп", "нау", "сәу", "мам", "мау", "шіл", "там", "қыр", "қаз", "қар", "жел"],
			wide: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"]
		},
		s = {
			narrow: ["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"],
			abbreviated: ["қаң", "ақп", "нау", "сәу", "мам", "мау", "шіл", "там", "қыр", "қаз", "қар", "жел"],
			wide: ["қаңтар", "ақпан", "наурыз", "сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"]
		},
		d = {
			narrow: ["Ж", "Д", "С", "С", "Б", "Ж", "С"],
			short: ["жс", "дс", "сс", "ср", "бс", "жм", "сб"],
			abbreviated: ["жс", "дс", "сс", "ср", "бс", "жм", "сб"],
			wide: ["жексенбі", "дүйсенбі", "сейсенбі", "сәрсенбі", "бейсенбі", "жұма", "сенбі"]
		},
		c = {
			narrow: {
				am: "ТД",
				pm: "ТК",
				midnight: "түн ортасы",
				noon: "түс",
				morning: "таң",
				afternoon: "күндіз",
				evening: "кеш",
				night: "түн"
			},
			wide: {
				am: "ТД",
				pm: "ТК",
				midnight: "түн ортасы",
				noon: "түс",
				morning: "таң",
				afternoon: "күндіз",
				evening: "кеш",
				night: "түн"
			}
		},
		l = {
			narrow: {
				am: "ТД",
				pm: "ТК",
				midnight: "түн ортасында",
				noon: "түс",
				morning: "таң",
				afternoon: "күн",
				evening: "кеш",
				night: "түн"
			},
			wide: {
				am: "ТД",
				pm: "ТК",
				midnight: "түн ортасында",
				noon: "түсте",
				morning: "таңертең",
				afternoon: "күндіз",
				evening: "кеште",
				night: "түнде"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide",
				formattingValues: s,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: c,
				defaultWidth: "any",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(-?(ші|шы))?/i,
		o = /\d+/i,
		u = {
			narrow: /^((б )?з\.?\s?д\.?)/i,
			abbreviated: /^((б )?з\.?\s?д\.?)/i,
			wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i
		},
		s = {
			any: [/^б/i, /^з/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234](-?ші)? тоқ.?/i,
			wide: /^[1234](-?ші)? тоқсан/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,
			abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,
			wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i
		},
		m = {
			narrow: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i],
			abbreviated: [/^қаң/i, /^ақп/i, /^нау/i, /^сәу/i, /^мам/i, /^мау/i, /^шіл/i, /^там/i, /^қыр/i, /^қаз/i, /^қар/i, /^жел/i],
			any: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i]
		},
		f = {
			narrow: /^(ж|д|с|с|б|ж|с)/i,
			short: /^(жс|дс|сс|ср|бс|жм|сб)/i,
			wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i
		},
		h = {
			narrow: [/^ж/i, /^д/i, /^с/i, /^с/i, /^б/i, /^ж/i, /^с/i],
			short: [/^жс/i, /^дс/i, /^сс/i, /^ср/i, /^бс/i, /^жм/i, /^сб/i],
			any: [/^ж[ек]/i, /^д[үй]/i, /^сe[й]/i, /^сә[р]/i, /^б[ей]/i, /^ж[ұм]/i, /^се[н]/i]
		},
		p = {
			narrow: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
			wide: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
			any: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i
		},
		g = {
			any: {
				am: /^ТД/i,
				pm: /^ТК/i,
				midnight: /^түн орта/i,
				noon: /^күндіз/i,
				morning: /таң/i,
				afternoon: /түс/i,
				evening: /кеш/i,
				night: /түн/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "wide",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(664),
		i = n(665),
		r = n(666),
		o = n(667),
		u = n(668),
		s = {
			code: "kn",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return t.addSuffix ? t.comparison > 0 ? e.future: e.past: e.
		default
		}
		function i(e, t, n) {
			n = n || {};
			var i;
			return i = "string" == typeof r[e] ? r[e] : 1 === t ? a(r[e].one, n) : a(r[e].other, n),
			i.replace("{{count}}", t)
		}
		t.a = i;
		var r = {
			lessThanXSeconds: {
				one: {
				default:
					"1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
					future: "1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
					past: "1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ"
				},
				other: {
				default:
					"{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
					future: "{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",
					past: "{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ"
				}
			},
			xSeconds: {
				one: {
				default:
					"1 ಸೆಕೆಂಡ್",
					future: "1 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ",
					past: "1 ಸೆಕೆಂಡ್ ಹಿಂದೆ"
				},
				other: {
				default:
					"{{count}} ಸೆಕೆಂಡುಗಳು",
					future: "{{count}} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ",
					past: "{{count}} ಸೆಕೆಂಡ್ ಹಿಂದೆ"
				}
			},
			halfAMinute: {
				other: {
				default:
					"ಅರ್ಧ ನಿಮಿಷ",
					future: "ಅರ್ಧ ನಿಮಿಷದಲ್ಲಿ",
					past: "ಅರ್ಧ ನಿಮಿಷದ ಹಿಂದೆ"
				}
			},
			lessThanXMinutes: {
				one: {
				default:
					"1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
					future: "1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
					past: "1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ"
				},
				other: {
				default:
					"{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
					future: "{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",
					past: "{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ"
				}
			},
			xMinutes: {
				one: {
				default:
					"1 ನಿಮಿಷ",
					future: "1 ನಿಮಿಷದಲ್ಲಿ",
					past: "1 ನಿಮಿಷದ ಹಿಂದೆ"
				},
				other: {
				default:
					"{{count}} ನಿಮಿಷಗಳು",
					future: "{{count}} ನಿಮಿಷಗಳಲ್ಲಿ",
					past: "{{count}} ನಿಮಿಷಗಳ ಹಿಂದೆ"
				}
			},
			aboutXHours: {
				one: {
				default:
					"ಸುಮಾರು 1 ಗಂಟೆ",
					future: "ಸುಮಾರು 1 ಗಂಟೆಯಲ್ಲಿ",
					past: "ಸುಮಾರು 1 ಗಂಟೆ ಹಿಂದೆ"
				},
				other: {
				default:
					"ಸುಮಾರು {{count}} ಗಂಟೆಗಳು",
					future: "ಸುಮಾರು {{count}} ಗಂಟೆಗಳಲ್ಲಿ",
					past: "ಸುಮಾರು {{count}} ಗಂಟೆಗಳ ಹಿಂದೆ"
				}
			},
			xHours: {
				one: {
				default:
					"1 ಗಂಟೆ",
					future: "1 ಗಂಟೆಯಲ್ಲಿ",
					past: "1 ಗಂಟೆ ಹಿಂದೆ"
				},
				other: {
				default:
					"{{count}} ಗಂಟೆಗಳು",
					future: "{{count}} ಗಂಟೆಗಳಲ್ಲಿ",
					past: "{{count}} ಗಂಟೆಗಳ ಹಿಂದೆ"
				}
			},
			xDays: {
				one: {
				default:
					"1 ದಿನ",
					future: "1 ದಿನದಲ್ಲಿ",
					past: "1 ದಿನದ ಹಿಂದೆ"
				},
				other: {
				default:
					"{{count}} ದಿನಗಳು",
					future: "{{count}} ದಿನಗಳಲ್ಲಿ",
					past: "{{count}} ದಿನಗಳ ಹಿಂದೆ"
				}
			},
			aboutXMonths: {
				one: {
				default:
					"ಸುಮಾರು 1 ತಿಂಗಳು",
					future: "ಸುಮಾರು 1 ತಿಂಗಳಲ್ಲಿ",
					past: "ಸುಮಾರು 1 ತಿಂಗಳ ಹಿಂದೆ"
				},
				other: {
				default:
					"ಸುಮಾರು {{count}} ತಿಂಗಳು",
					future: "ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳಲ್ಲಿ",
					past: "ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ"
				}
			},
			xMonths: {
				one: {
				default:
					"1 ತಿಂಗಳು",
					future: "1 ತಿಂಗಳಲ್ಲಿ",
					past: "1 ತಿಂಗಳ ಹಿಂದೆ"
				},
				other: {
				default:
					"{{count}} ತಿಂಗಳು",
					future: "{{count}} ತಿಂಗಳುಗಳಲ್ಲಿ",
					past: "{{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ"
				}
			},
			aboutXYears: {
				one: {
				default:
					"ಸುಮಾರು 1 ವರ್ಷ",
					future: "ಸುಮಾರು 1 ವರ್ಷದಲ್ಲಿ",
					past: "ಸುಮಾರು 1 ವರ್ಷದ ಹಿಂದೆ"
				},
				other: {
				default:
					"ಸುಮಾರು {{count}} ವರ್ಷಗಳು",
					future: "ಸುಮಾರು {{count}} ವರ್ಷಗಳಲ್ಲಿ",
					past: "ಸುಮಾರು {{count}} ವರ್ಷಗಳ ಹಿಂದೆ"
				}
			},
			xYears: {
				one: {
				default:
					"1 ವರ್ಷ",
					future: "1 ವರ್ಷದಲ್ಲಿ",
					past: "1 ವರ್ಷದ ಹಿಂದೆ"
				},
				other: {
				default:
					"{{count}} ವರ್ಷಗಳು",
					future: "{{count}} ವರ್ಷಗಳಲ್ಲಿ",
					past: "{{count}} ವರ್ಷಗಳ ಹಿಂದೆ"
				}
			},
			overXYears: {
				one: {
				default:
					"1 ವರ್ಷದ ಮೇಲೆ",
					future: "1 ವರ್ಷದ ಮೇಲೆ",
					past: "1 ವರ್ಷದ ಮೇಲೆ"
				},
				other: {
				default:
					"{{count}} ವರ್ಷಗಳ ಮೇಲೆ",
					future: "{{count}} ವರ್ಷಗಳ ಮೇಲೆ",
					past: "{{count}} ವರ್ಷಗಳ ಮೇಲೆ"
				}
			},
			almostXYears: {
				one: {
				default:
					"ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",
					future: "ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",
					past: "ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ"
				},
				other: {
				default:
					"ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",
					future: "ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",
					past: "ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ"
				}
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM d, y",
			long: "MMMM d, y",
			medium: "MMM d, y",
			short: "d/M/yy"
		},
		r = {
			full: "hh:mm:ss a zzzz",
			long: "hh:mm:ss a z",
			medium: "hh:mm:ss a",
			short: "hh:mm a"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'ಕಳೆದ' eeee p 'ಕ್ಕೆ'",
			yesterday: "'ನಿನ್ನೆ' p 'ಕ್ಕೆ'",
			today: "'ಇಂದು' p 'ಕ್ಕೆ'",
			tomorrow: "'ನಾಳೆ' p 'ಕ್ಕೆ'",
			nextWeek: "eeee p 'ಕ್ಕೆ'",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "ನೇ"
		}
		var i = n(3),
		r = {
			narrow: ["ಕ್ರಿ.ಪೂ", "ಕ್ರಿ.ಶ"],
			abbreviated: ["ಕ್ರಿ.ಪೂ", "ಕ್ರಿ.ಶ"],
			wide: ["ಕ್ರಿಸ್ತ ಪೂರ್ವ", "ಕ್ರಿಸ್ತ ಶಕ"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["ತ್ರೈ 1", "ತ್ರೈ 2", "ತ್ರೈ 3", "ತ್ರೈ 4"],
			wide: ["1ನೇ ತ್ರೈಮಾಸಿಕ", "2ನೇ ತ್ರೈಮಾಸಿಕ", "3ನೇ ತ್ರೈಮಾಸಿಕ", "4ನೇ ತ್ರೈಮಾಸಿಕ"]
		},
		u = {
			narrow: ["ಜ", "ಫೆ", "ಮಾ", "ಏ", "ಮೇ", "ಜೂ", "ಜು", "ಆ", "ಸೆ", "ಅ", "ನ", "ಡಿ"],
			abbreviated: ["ಜನ", "ಫೆಬ್ರ", "ಮಾರ್ಚ್", "ಏಪ್ರಿ", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗ", "ಸೆಪ್ಟೆಂ", "ಅಕ್ಟೋ", "ನವೆಂ", "ಡಿಸೆಂ"],
			wide: ["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"]
		},
		s = {
			narrow: ["ಭಾ", "ಸೋ", "ಮಂ", "ಬು", "ಗು", "ಶು", "ಶ"],
			short: ["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"],
			abbreviated: ["ಭಾನು", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"],
			wide: ["ಭಾನುವಾರ", "ಸೋಮವಾರ", "ಮಂಗಳವಾರ", "ಬುಧವಾರ", "ಗುರುವಾರ", "ಶುಕ್ರವಾರ", "ಶನಿವಾರ"]
		},
		d = {
			narrow: {
				am: "ಪೂರ್ವಾಹ್ನ",
				pm: "ಅಪರಾಹ್ನ",
				midnight: "ಮಧ್ಯರಾತ್ರಿ",
				noon: "ಮಧ್ಯಾಹ್ನ",
				morning: "ಬೆಳಗ್ಗೆ",
				afternoon: "ಮಧ್ಯಾಹ್ನ",
				evening: "ಸಂಜೆ",
				night: "ರಾತ್ರಿ"
			},
			abbreviated: {
				am: "ಪೂರ್ವಾಹ್ನ",
				pm: "ಅಪರಾಹ್ನ",
				midnight: "ಮಧ್ಯರಾತ್ರಿ",
				noon: "ಮಧ್ಯಾನ್ಹ",
				morning: "ಬೆಳಗ್ಗೆ",
				afternoon: "ಮಧ್ಯಾನ್ಹ",
				evening: "ಸಂಜೆ",
				night: "ರಾತ್ರಿ"
			},
			wide: {
				am: "ಪೂರ್ವಾಹ್ನ",
				pm: "ಅಪರಾಹ್ನ",
				midnight: "ಮಧ್ಯರಾತ್ರಿ",
				noon: "ಮಧ್ಯಾನ್ಹ",
				morning: "ಬೆಳಗ್ಗೆ",
				afternoon: "ಮಧ್ಯಾನ್ಹ",
				evening: "ಸಂಜೆ",
				night: "ರಾತ್ರಿ"
			}
		},
		c = {
			narrow: {
				am: "ಪೂ",
				pm: "ಅ",
				midnight: "ಮಧ್ಯರಾತ್ರಿ",
				noon: "ಮಧ್ಯಾನ್ಹ",
				morning: "ಬೆಳಗ್ಗೆ",
				afternoon: "ಮಧ್ಯಾನ್ಹ",
				evening: "ಸಂಜೆ",
				night: "ರಾತ್ರಿ"
			},
			abbreviated: {
				am: "ಪೂರ್ವಾಹ್ನ",
				pm: "ಅಪರಾಹ್ನ",
				midnight: "ಮಧ್ಯ ರಾತ್ರಿ",
				noon: "ಮಧ್ಯಾನ್ಹ",
				morning: "ಬೆಳಗ್ಗೆ",
				afternoon: "ಮಧ್ಯಾನ್ಹ",
				evening: "ಸಂಜೆ",
				night: "ರಾತ್ರಿ"
			},
			wide: {
				am: "ಪೂರ್ವಾಹ್ನ",
				pm: "ಅಪರಾಹ್ನ",
				midnight: "ಮಧ್ಯ ರಾತ್ರಿ",
				noon: "ಮಧ್ಯಾನ್ಹ",
				morning: "ಬೆಳಗ್ಗೆ",
				afternoon: "ಮಧ್ಯಾನ್ಹ",
				evening: "ಸಂಜೆ",
				night: "ರಾತ್ರಿ"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(ನೇ|ನೆ)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i,
			abbreviated: /^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i,
			wide: /^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i
		},
		s = {
			any: [/^ಪೂ/i, /^(ಶ|ಪ್ರ)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i,
			wide: /^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i,
			abbreviated: /^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i,
			wide: /^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i
		},
		m = {
			narrow: [/^ಜ$/i, /^ಫೆ/i, /^ಮಾ/i, /^ಏ/i, /^ಮೇ/i, /^ಜೂ/i, /^ಜು$/i, /^ಆ/i, /^ಸೆ/i, /^ಅ/i, /^ನ/i, /^ಡಿ/i],
			any: [/^ಜನ/i, /^ಫೆ/i, /^ಮಾ/i, /^ಏ/i, /^ಮೇ/i, /^ಜೂನ್/i, /^ಜುಲೈ/i, /^ಆ/i, /^ಸೆ/i, /^ಅ/i, /^ನ/i, /^ಡಿ/i]
		},
		f = {
			narrow: /^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i,
			short: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,
			abbreviated: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,
			wide: /^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i
		},
		h = {
			narrow: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i],
			any: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i]
		},
		p = {
			narrow: /^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i,
			any: /^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i
		},
		g = {
			any: {
				am: /^ಪೂ/i,
				pm: /^ಅ/i,
				midnight: /ಮಧ್ಯರಾತ್ರಿ/i,
				noon: /ಮಧ್ಯಾನ್ಹ/i,
				morning: /ಬೆಳಗ್ಗೆ/i,
				afternoon: /ಮಧ್ಯಾನ್ಹ/i,
				evening: /ಸಂಜೆ/i,
				night: /ರಾತ್ರಿ/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(670),
		i = n(671),
		r = n(672),
		o = n(673),
		u = n(674),
		s = {
			code: "ko",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + " 후": a + " 전": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "1초 미만",
				other: "{{count}}초 미만"
			},
			xSeconds: {
				one: "1초",
				other: "{{count}}초"
			},
			halfAMinute: "30초",
			lessThanXMinutes: {
				one: "1분 미만",
				other: "{{count}}분 미만"
			},
			xMinutes: {
				one: "1분",
				other: "{{count}}분"
			},
			aboutXHours: {
				one: "약 1시간",
				other: "약 {{count}}시간"
			},
			xHours: {
				one: "1시간",
				other: "{{count}}시간"
			},
			xDays: {
				one: "1일",
				other: "{{count}}일"
			},
			aboutXWeeks: {
				one: "약 1주",
				other: "약 {{count}}주"
			},
			xWeeks: {
				one: "1주",
				other: "{{count}}주"
			},
			aboutXMonths: {
				one: "약 1개월",
				other: "약 {{count}}개월"
			},
			xMonths: {
				one: "1개월",
				other: "{{count}}개월"
			},
			aboutXYears: {
				one: "약 1년",
				other: "약 {{count}}년"
			},
			xYears: {
				one: "1년",
				other: "{{count}}년"
			},
			overXYears: {
				one: "1년 이상",
				other: "{{count}}년 이상"
			},
			almostXYears: {
				one: "거의 1년",
				other: "거의 {{count}}년"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "y년 M월 d일 EEEE",
			long: "y년 M월 d일",
			medium: "y.MM.dd",
			short: "y.MM.dd"
		},
		r = {
			full: "a H시 mm분 ss초 zzzz",
			long: "a H:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'지난' eeee p",
			yesterday: "'어제' p",
			today: "'오늘' p",
			tomorrow: "'내일' p",
			nextWeek: "'다음' eeee p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = t || {};
			switch (String(a.unit)) {
			case "minute":
			case "second":
				return n;
			case "date":
				return n + "일";
			default:
				return n + "번째"
			}
		}
		var i = n(3),
		r = {
			narrow: ["BC", "AD"],
			abbreviated: ["BC", "AD"],
			wide: ["기원전", "서기"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1분기", "2분기", "3분기", "4분기"]
		},
		u = {
			narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			abbreviated: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			wide: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
		},
		s = {
			narrow: ["일", "월", "화", "수", "목", "금", "토"],
			short: ["일", "월", "화", "수", "목", "금", "토"],
			abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
			wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
		},
		d = {
			narrow: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			},
			abbreviated: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			},
			wide: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			}
		},
		c = {
			narrow: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			},
			abbreviated: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			},
			wide: {
				am: "오전",
				pm: "오후",
				midnight: "자정",
				noon: "정오",
				morning: "아침",
				afternoon: "오후",
				evening: "저녁",
				night: "밤"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(일|번째)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(기원전|서기)/i
		},
		s = {
			any: [/^(bc|기원전)/i, /^(ad|서기)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234]사?분기/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(1[012]|[123456789])/,
			abbreviated: /^(1[012]|[123456789])월/i,
			wide: /^(1[012]|[123456789])월/i
		},
		m = {
			any: [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
		},
		f = {
			narrow: /^[일월화수목금토]/,
			short: /^[일월화수목금토]/,
			abbreviated: /^[일월화수목금토]/,
			wide: /^[일월화수목금토]요일/
		},
		h = {
			any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
		},
		p = {
			any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
		},
		g = {
			any: {
				am: /^(am|오전)/i,
				pm: /^(pm|오후)/i,
				midnight: /^자정/i,
				noon: /^정오/i,
				morning: /^아침/i,
				afternoon: /^오후/i,
				evening: /^저녁/i,
				night: /^밤/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(676),
		i = n(677),
		r = n(678),
		o = n(679),
		u = n(680),
		s = {
			code: "lb",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = e.charAt(0).toLowerCase();
			if ( - 1 != u.indexOf(t) || -1 != o.indexOf(t)) return ! 0;
			var n = e.split(" ")[0],
			a = parseInt(n);
			return ! isNaN(a) && -1 != s.indexOf(a % 10) && -1 == d.indexOf(parseInt(n.substring(0, 2)))
		}
		function i(e, t, n) {
			n = n || {};
			var i, o = n.addSuffix ? r[e].withPreposition: r[e].standalone;
			return i = "string" == typeof o ? o: 1 === t ? o.one: o.other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "a" + (a(i) ? "n": "") + " " + i: "viru" + (a(i) ? "n": "") + " " + i: i
		}
		t.a = i;
		var r = {
			lessThanXSeconds: {
				standalone: {
					one: "manner wéi eng Sekonn",
					other: "manner wéi {{count}} Sekonnen"
				},
				withPreposition: {
					one: "manner wéi enger Sekonn",
					other: "manner wéi {{count}} Sekonnen"
				}
			},
			xSeconds: {
				standalone: {
					one: "eng Sekonn",
					other: "{{count}} Sekonnen"
				},
				withPreposition: {
					one: "enger Sekonn",
					other: "{{count}} Sekonnen"
				}
			},
			halfAMinute: {
				standalone: "eng hallef Minutt",
				withPreposition: "enger hallwer Minutt"
			},
			lessThanXMinutes: {
				standalone: {
					one: "manner wéi eng Minutt",
					other: "manner wéi {{count}} Minutten"
				},
				withPreposition: {
					one: "manner wéi enger Minutt",
					other: "manner wéi {{count}} Minutten"
				}
			},
			xMinutes: {
				standalone: {
					one: "eng Minutt",
					other: "{{count}} Minutten"
				},
				withPreposition: {
					one: "enger Minutt",
					other: "{{count}} Minutten"
				}
			},
			aboutXHours: {
				standalone: {
					one: "ongeféier eng Stonn",
					other: "ongeféier {{count}} Stonnen"
				},
				withPreposition: {
					one: "ongeféier enger Stonn",
					other: "ongeféier {{count}} Stonnen"
				}
			},
			xHours: {
				standalone: {
					one: "eng Stonn",
					other: "{{count}} Stonnen"
				},
				withPreposition: {
					one: "enger Stonn",
					other: "{{count}} Stonnen"
				}
			},
			xDays: {
				standalone: {
					one: "een Dag",
					other: "{{count}} Deeg"
				},
				withPreposition: {
					one: "engem Dag",
					other: "{{count}} Deeg"
				}
			},
			aboutXWeeks: {
				standalone: {
					one: "ongeféier eng Woch",
					other: "ongeféier {{count}} Wochen"
				},
				withPreposition: {
					one: "ongeféier enger Woche",
					other: "ongeféier {{count}} Wochen"
				}
			},
			xWeeks: {
				standalone: {
					one: "eng Woch",
					other: "{{count}} Wochen"
				},
				withPreposition: {
					one: "enger Woch",
					other: "{{count}} Wochen"
				}
			},
			aboutXMonths: {
				standalone: {
					one: "ongeféier ee Mount",
					other: "ongeféier {{count}} Méint"
				},
				withPreposition: {
					one: "ongeféier engem Mount",
					other: "ongeféier {{count}} Méint"
				}
			},
			xMonths: {
				standalone: {
					one: "ee Mount",
					other: "{{count}} Méint"
				},
				withPreposition: {
					one: "engem Mount",
					other: "{{count}} Méint"
				}
			},
			aboutXYears: {
				standalone: {
					one: "ongeféier ee Joer",
					other: "ongeféier {{count}} Joer"
				},
				withPreposition: {
					one: "ongeféier engem Joer",
					other: "ongeféier {{count}} Joer"
				}
			},
			xYears: {
				standalone: {
					one: "ee Joer",
					other: "{{count}} Joer"
				},
				withPreposition: {
					one: "engem Joer",
					other: "{{count}} Joer"
				}
			},
			overXYears: {
				standalone: {
					one: "méi wéi ee Joer",
					other: "méi wéi {{count}} Joer"
				},
				withPreposition: {
					one: "méi wéi engem Joer",
					other: "méi wéi {{count}} Joer"
				}
			},
			almostXYears: {
				standalone: {
					one: "bal ee Joer",
					other: "bal {{count}} Joer"
				},
				withPreposition: {
					one: "bal engem Joer",
					other: "bal {{count}} Joer"
				}
			}
		},
		o = ["d", "h", "n", "t", "z"],
		u = ["a,", "e", "i", "o", "u"],
		s = [0, 1, 2, 3, 8, 9],
		d = [40, 50, 60, 70]
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM y",
			long: "do MMMM y",
			medium: "do MMM y",
			short: "dd.MM.yy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'um' {{time}}",
			long: "{{date}} 'um' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var r = i[e];
			return "function" == typeof r ? r(t) : r
		}
		t.a = a;
		var i = {
			lastWeek: function(e) {
				var t = e.getUTCDay(),
				n = "'läschte";
				return 2 !== t && 4 !== t || (n += "n"),
				n += "' eeee 'um' p"
			},
			yesterday: "'gëschter um' p",
			today: "'haut um' p",
			tomorrow: "'moien um' p",
			nextWeek: "eeee 'um' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["v.Chr.", "n.Chr."],
			abbreviated: ["v.Chr.", "n.Chr."],
			wide: ["viru Christus", "no Christus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["Jan", "Feb", "Mäe", "Abr", "Mee", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
			wide: ["Januar", "Februar", "Mäerz", "Abrëll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
		},
		s = {
			narrow: ["S", "M", "D", "M", "D", "F", "S"],
			short: ["So", "Mé", "Dë", "Më", "Do", "Fr", "Sa"],
			abbreviated: ["So.", "Mé.", "Dë.", "Më.", "Do.", "Fr.", "Sa."],
			wide: ["Sonndeg", "Méindeg", "Dënschdeg", "Mëttwoch", "Donneschdeg", "Freideg", "Samschdeg"]
		},
		d = {
			narrow: {
				am: "mo.",
				pm: "nomë.",
				midnight: "Mëtternuecht",
				noon: "Mëtteg",
				morning: "Moien",
				afternoon: "Nomëtteg",
				evening: "Owend",
				night: "Nuecht"
			},
			abbreviated: {
				am: "moies",
				pm: "nomëttes",
				midnight: "Mëtternuecht",
				noon: "Mëtteg",
				morning: "Moien",
				afternoon: "Nomëtteg",
				evening: "Owend",
				night: "Nuecht"
			},
			wide: {
				am: "moies",
				pm: "nomëttes",
				midnight: "Mëtternuecht",
				noon: "Mëtteg",
				morning: "Moien",
				afternoon: "Nomëtteg",
				evening: "Owend",
				night: "Nuecht"
			}
		},
		c = {
			narrow: {
				am: "mo.",
				pm: "nom.",
				midnight: "Mëtternuecht",
				noon: "mëttes",
				morning: "moies",
				afternoon: "nomëttes",
				evening: "owes",
				night: "nuets"
			},
			abbreviated: {
				am: "moies",
				pm: "nomëttes",
				midnight: "Mëtternuecht",
				noon: "mëttes",
				morning: "moies",
				afternoon: "nomëttes",
				evening: "owes",
				night: "nuets"
			},
			wide: {
				am: "moies",
				pm: "nomëttes",
				midnight: "Mëtternuecht",
				noon: "mëttes",
				morning: "moies",
				afternoon: "nomëttes",
				evening: "owes",
				night: "nuets"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(\.)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
			abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
			wide: /^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i
		},
		s = {
			any: [/^v/i, /^n/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](\.)? Quartal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,
			wide: /^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mä/i, /^ab/i, /^me/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[smdf]/i,
			short: /^(so|mé|dë|më|do|fr|sa)/i,
			abbreviated: /^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i,
			wide: /^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i
		},
		h = {
			any: [/^so/i, /^mé/i, /^dë/i, /^më/i, /^do/i, /^f/i, /^sa/i]
		},
		p = {
			narrow: /^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,
			abbreviated: /^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,
			wide: /^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i
		},
		g = {
			any: {
				am: /^m/i,
				pm: /^n/i,
				midnight: /^Mëtter/i,
				noon: /^mëttes/i,
				morning: /moies/i,
				afternoon: /nomëttes/i,
				evening: /owes/i,
				night: /nuets/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "wide",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(682),
		i = n(683),
		r = n(684),
		o = n(685),
		u = n(686),
		s = {
			code: "lt",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return t ? a ? "kelių sekundžių": "kelias sekundes": "kelios sekundės"
		}
		function i(e, t, n, a) {
			return t ? a ? o(n)[1] : o(n)[2] : o(n)[0]
		}
		function r(e) {
			return e % 10 == 0 || e > 10 && e < 20
		}
		function o(e) {
			return c[e].split("_")
		}
		function u(e, t, n, a) {
			var u = e + " ";
			return 1 === e ? u + i(e, t, n[0], a) : t ? a ? u + o(n)[1] : u + (r(e) ? o(n)[1] : o(n)[2]) : u + (r(e) ? o(n)[1] : o(n)[0])
		}
		function s(e, t, n) {
			n = n || {};
			var a, i = e.match(/about|over|almost|lessthan/i),
			r = e.replace(i, "");
			return a = "string" == typeof d[e] ? d[e] : 1 === t ? d[e].one(t, n.addSuffix, r.toLowerCase() + "_one") : d[e].other(t, n.addSuffix, r.toLowerCase() + "_other"),
			i && (a = c[i[0].toLowerCase()] + " " + a),
			n.addSuffix ? n.comparison > 0 ? "po " + a: "prieš " + a: a
		}
		t.a = s;
		var d = {
			lessThanXSeconds: {
				one: a,
				other: u
			},
			xSeconds: {
				one: a,
				other: u
			},
			halfAMinute: "pusė minutės",
			lessThanXMinutes: {
				one: i,
				other: u
			},
			xMinutes: {
				one: i,
				other: u
			},
			aboutXHours: {
				one: i,
				other: u
			},
			xHours: {
				one: i,
				other: u
			},
			xDays: {
				one: i,
				other: u
			},
			aboutWeeks: {
				one: i,
				other: u
			},
			xWeeks: {
				one: i,
				other: u
			},
			aboutXMonths: {
				one: i,
				other: u
			},
			xMonths: {
				one: i,
				other: u
			},
			aboutXYears: {
				one: i,
				other: u
			},
			xYears: {
				one: i,
				other: u
			},
			overXYears: {
				one: i,
				other: u
			},
			almostXYears: {
				one: i,
				other: u
			}
		},
		c = {
			xseconds_other: "sekundė_sekundžių_sekundes",
			xminutes_one: "minutė_minutės_minutę",
			xminutes_other: "minutės_minučių_minutes",
			xhours_one: "valanda_valandos_valandą",
			xhours_other: "valandos_valandų_valandas",
			xdays_one: "diena_dienos_dieną",
			xdays_other: "dienos_dienų_dienas",
			xweeks_one: "savaitė_savaitės_savaitę",
			xweeks_other: "savaitės_savaičių_savaites",
			xmonths_one: "mėnuo_mėnesio_mėnesį",
			xmonths_other: "mėnesiai_mėnesių_mėnesius",
			xyears_one: "metai_metų_metus",
			xyears_other: "metai_metų_metus",
			about: "apie",
			over: "daugiau nei",
			almost: "beveik",
			lessthan: "mažiau nei"
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "y 'm'. MMMM d 'd'., EEEE",
			long: "y 'm'. MMMM d 'd'.",
			medium: "y-MM-dd",
			short: "y-MM-dd"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'Praėjusį' eeee p",
			yesterday: "'Vakar' p",
			today: "'Šiandien' p",
			tomorrow: "'Rytoj' p",
			nextWeek: "eeee p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "-oji"
		}
		var i = n(3),
		r = {
			narrow: ["pr. Kr.", "po Kr."],
			abbreviated: ["pr. Kr.", "po Kr."],
			wide: ["prieš Kristų", "po Kristaus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
			wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
		},
		u = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["I k.", "II k.", "III k.", "IV k."],
			wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
		},
		s = {
			narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
			abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."],
			wide: ["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis"]
		},
		d = {
			narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
			abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."],
			wide: ["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"]
		},
		c = {
			narrow: ["S", "P", "A", "T", "K", "P", "Š"],
			short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
			abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
			wide: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"]
		},
		l = {
			narrow: ["S", "P", "A", "T", "K", "P", "Š"],
			short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
			abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
			wide: ["sekmadienį", "pirmadienį", "antradienį", "trečiadienį", "ketvirtadienį", "penktadienį", "šeštadienį"]
		},
		m = {
			narrow: {
				am: "pr. p.",
				pm: "pop.",
				midnight: "vidurnaktis",
				noon: "vidurdienis",
				morning: "rytas",
				afternoon: "diena",
				evening: "vakaras",
				night: "naktis"
			},
			abbreviated: {
				am: "priešpiet",
				pm: "popiet",
				midnight: "vidurnaktis",
				noon: "vidurdienis",
				morning: "rytas",
				afternoon: "diena",
				evening: "vakaras",
				night: "naktis"
			},
			wide: {
				am: "priešpiet",
				pm: "popiet",
				midnight: "vidurnaktis",
				noon: "vidurdienis",
				morning: "rytas",
				afternoon: "diena",
				evening: "vakaras",
				night: "naktis"
			}
		},
		f = {
			narrow: {
				am: "pr. p.",
				pm: "pop.",
				midnight: "vidurnaktis",
				noon: "perpiet",
				morning: "rytas",
				afternoon: "popietė",
				evening: "vakaras",
				night: "naktis"
			},
			abbreviated: {
				am: "priešpiet",
				pm: "popiet",
				midnight: "vidurnaktis",
				noon: "perpiet",
				morning: "rytas",
				afternoon: "popietė",
				evening: "vakaras",
				night: "naktis"
			},
			wide: {
				am: "priešpiet",
				pm: "popiet",
				midnight: "vidurnaktis",
				noon: "perpiet",
				morning: "rytas",
				afternoon: "popietė",
				evening: "vakaras",
				night: "naktis"
			}
		},
		h = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				formattingValues: u,
				defaultFormattingWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: s,
				defaultWidth: "wide",
				formattingValues: d,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: c,
				defaultWidth: "wide",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			}),
			dayPeriod: i.a({
				values: m,
				defaultWidth: "wide",
				formattingValues: f,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = h
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(-oji)?/i,
		o = /\d+/i,
		u = {
			narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
			abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,
			wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i
		},
		s = {
			wide: [/prieš/i, /(po|mūsų)/i],
			any: [/^pr/i, /^(po|m)/i]
		},
		d = {
			narrow: /^([1234])/i,
			abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
			wide: /^(I|II|III|IV)\s?ketvirtis/i
		},
		c = {
			narrow: [/1/i, /2/i, /3/i, /4/i],
			any: [/I$/i, /II$/i, /III/i, /IV/i]
		},
		l = {
			narrow: /^[svkbglr]/i,
			abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
			wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i
		},
		m = {
			narrow: [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i],
			any: [/^saus/i, /^vas/i, /^kov/i, /^bal/i, /^geg/i, /^birž/i, /^liep/i, /^rugp/i, /^rugs/i, /^spal/i, /^lapkr/i, /^gruod/i]
		},
		f = {
			narrow: /^[spatkš]/i,
			short: /^(sk|pr|an|tr|kt|pn|št)/i,
			abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i,
			wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i
		},
		h = {
			narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i],
			wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i],
			any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i]
		},
		p = {
			narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
			any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i
		},
		g = {
			narrow: {
				am: /^pr/i,
				pm: /^pop./i,
				midnight: /^vidurnaktis/i,
				noon: /^(vidurdienis|perp)/i,
				morning: /rytas/i,
				afternoon: /(die|popietė)/i,
				evening: /vakaras/i,
				night: /naktis/i
			},
			any: {
				am: /^pr/i,
				pm: /^popiet$/i,
				midnight: /^vidurnaktis/i,
				noon: /^(vidurdienis|perp)/i,
				morning: /rytas/i,
				afternoon: /(die|popietė)/i,
				evening: /vakaras/i,
				night: /naktis/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(688),
		i = n(689),
		r = n(690),
		o = n(691),
		u = n(692),
		s = {
			code: "lv",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return function(t, n) {
				if (1 === t) return n.addSuffix ? e.one[0].replace("{{time}}", e.one[2]) : e.one[0].replace("{{time}}", e.one[1]);
				var a = t % 10 == 1 && t % 100 != 11;
				return n.addSuffix ? e.other[0].replace("{{time}}", a ? e.other[3] : e.other[4]).replace("{{count}}", t) : e.other[0].replace("{{time}}", a ? e.other[1] : e.other[2]).replace("{{count}}", t)
			}
		}
		function i(e, t, n) {
			n = n || {};
			var a = r[e](t, n);
			return n.addSuffix ? n.comparison > 0 ? "pēc " + a: "pirms " + a: a
		}
		t.a = i;
		var r = {
			lessThanXSeconds: a({
				one: ["mazāk par {{time}}", "sekundi", "sekundi"],
				other: ["mazāk nekā {{count}} {{time}}", "sekunde", "sekundes", "sekundes", "sekundēm"]
			}),
			xSeconds: a({
				one: ["1 {{time}}", "sekunde", "sekundes"],
				other: ["{{count}} {{time}}", "sekunde", "sekundes", "sekundes", "sekundēm"]
			}),
			halfAMinute: function(e, t) {
				return t.addSuffix ? "pusminūtes": "pusminūte"
			},
			lessThanXMinutes: a({
				one: ["mazāk par {{time}}", "minūti", "minūti"],
				other: ["mazāk nekā {{count}} {{time}}", "minūte", "minūtes", "minūtes", "minūtēm"]
			}),
			xMinutes: a({
				one: ["1 {{time}}", "minūte", "minūtes"],
				other: ["{{count}} {{time}}", "minūte", "minūtes", "minūtes", "minūtēm"]
			}),
			aboutXHours: a({
				one: ["apmēram 1 {{time}}", "stunda", "stundas"],
				other: ["apmēram {{count}} {{time}}", "stunda", "stundas", "stundas", "stundām"]
			}),
			xHours: a({
				one: ["1 {{time}}", "stunda", "stundas"],
				other: ["{{count}} {{time}}", "stunda", "stundas", "stundas", "stundām"]
			}),
			xDays: a({
				one: ["1 {{time}}", "diena", "dienas"],
				other: ["{{count}} {{time}}", "diena", "dienas", "dienas", "dienām"]
			}),
			aboutXWeeks: a({
				one: ["apmēram 1 {{time}}", "nedēļa", "nedēļas"],
				other: ["apmēram {{count}} {{time}}", "nedēļa", "nedēļu", "nedēļas", "nedēļām"]
			}),
			xWeeks: a({
				one: ["1 {{time}}", "nedēļa", "nedēļas"],
				other: ["{{count}} {{time}}", "nedēļa", "nedēļu", "nedēļas", "nedēļām"]
			}),
			aboutXMonths: a({
				one: ["apmēram 1 {{time}}", "mēnesis", "mēneša"],
				other: ["apmēram {{count}} {{time}}", "mēnesis", "mēneši", "mēneša", "mēnešiem"]
			}),
			xMonths: a({
				one: ["1 {{time}}", "mēnesis", "mēneša"],
				other: ["{{count}} {{time}}", "mēnesis", "mēneši", "mēneša", "mēnešiem"]
			}),
			aboutXYears: a({
				one: ["apmēram 1 {{time}}", "gads", "gada"],
				other: ["apmēram {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
			}),
			xYears: a({
				one: ["1 {{time}}", "gads", "gada"],
				other: ["{{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
			}),
			overXYears: a({
				one: ["ilgāk par 1 {{time}}", "gadu", "gadu"],
				other: ["vairāk nekā {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
			}),
			almostXYears: a({
				one: ["gandrīz 1 {{time}}", "gads", "gada"],
				other: ["vairāk nekā {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "y. 'gada' M. MMMM., EEEE",
			long: "y. 'gada' M. MMMM",
			medium: "dd.MM.y.",
			short: "dd.MM.y."
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'plkst.' {{time}}",
			long: "{{date}} 'plkst.' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var i = o[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = a;
		var i = n(13),
		r = ["svētdienā", "pirmdienā", "otrdienā", "trešdienā", "ceturtdienā", "piektdienā", "sestdienā"],
		o = {
			lastWeek: function(e, t, n) {
				return i.a(e, t, n) ? "eeee 'plkst.' p": "'Pagājušā " + r[e.getUTCDay()] + " plkst.' p"
			},
			yesterday: "'Vakar plkst.' p",
			today: "'Šodien plkst.' p",
			tomorrow: "'Rīt plkst.' p",
			nextWeek: function(e, t, n) {
				return i.a(e, t, n) ? "eeee 'plkst.' p": "'Nākamajā " + r[e.getUTCDay()] + " plkst.' p"
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return e + "."
		}
		var i = n(3),
		r = {
			narrow: ["p.m.ē", "m.ē"],
			abbreviated: ["p. m. ē.", "m. ē."],
			wide: ["pirms mūsu ēras", "mūsu ērā"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."],
			wide: ["pirmais ceturksnis", "otrais ceturksnis", "trešais ceturksnis", "ceturtais ceturksnis"]
		},
		u = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."],
			wide: ["pirmajā ceturksnī", "otrajā ceturksnī", "trešajā ceturksnī", "ceturtajā ceturksnī"]
		},
		s = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["janv.", "febr.", "marts", "apr.", "maijs", "jūn.", "jūl.", "aug.", "sept.", "okt.", "nov.", "dec."],
			wide: ["janvāris", "februāris", "marts", "aprīlis", "maijs", "jūnijs", "jūlijs", "augusts", "septembris", "oktobris", "novembris", "decembris"]
		},
		d = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["janv.", "febr.", "martā", "apr.", "maijs", "jūn.", "jūl.", "aug.", "sept.", "okt.", "nov.", "dec."],
			wide: ["janvārī", "februārī", "martā", "aprīlī", "maijā", "jūnijā", "jūlijā", "augustā", "septembrī", "oktobrī", "novembrī", "decembrī"]
		},
		c = {
			narrow: ["S", "P", "O", "T", "C", "P", "S"],
			short: ["Sv", "P", "O", "T", "C", "Pk", "S"],
			abbreviated: ["svētd.", "pirmd.", "otrd.", "trešd.", "ceturtd.", "piektd.", "sestd."],
			wide: ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"]
		},
		l = {
			narrow: ["S", "P", "O", "T", "C", "P", "S"],
			short: ["Sv", "P", "O", "T", "C", "Pk", "S"],
			abbreviated: ["svētd.", "pirmd.", "otrd.", "trešd.", "ceturtd.", "piektd.", "sestd."],
			wide: ["svētdienā", "pirmdienā", "otrdienā", "trešdienā", "ceturtdienā", "piektdienā", "sestdienā"]
		},
		m = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "pusn.",
				noon: "pusd.",
				morning: "rīts",
				afternoon: "diena",
				evening: "vakars",
				night: "nakts"
			},
			abbreviated: {
				am: "am",
				pm: "pm",
				midnight: "pusn.",
				noon: "pusd.",
				morning: "rīts",
				afternoon: "pēcpusd.",
				evening: "vakars",
				night: "nakts"
			},
			wide: {
				am: "am",
				pm: "pm",
				midnight: "pusnakts",
				noon: "pusdienlaiks",
				morning: "rīts",
				afternoon: "pēcpusdiena",
				evening: "vakars",
				night: "nakts"
			}
		},
		f = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "pusn.",
				noon: "pusd.",
				morning: "rītā",
				afternoon: "dienā",
				evening: "vakarā",
				night: "naktī"
			},
			abbreviated: {
				am: "am",
				pm: "pm",
				midnight: "pusn.",
				noon: "pusd.",
				morning: "rītā",
				afternoon: "pēcpusd.",
				evening: "vakarā",
				night: "naktī"
			},
			wide: {
				am: "am",
				pm: "pm",
				midnight: "pusnaktī",
				noon: "pusdienlaikā",
				morning: "rītā",
				afternoon: "pēcpusdienā",
				evening: "vakarā",
				night: "naktī"
			}
		},
		h = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				formattingValues: u,
				defaultFormattingWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: s,
				defaultWidth: "wide",
				formattingValues: d,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: c,
				defaultWidth: "wide",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			}),
			dayPeriod: i.a({
				values: m,
				defaultWidth: "wide",
				formattingValues: f,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = h
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)\./i,
		o = /\d+/i,
		u = {
			narrow: /^(p\.m\.ē|m\.ē)/i,
			abbreviated: /^(p\. m\. ē\.|m\. ē\.)/i,
			wide: /^(pirms mūsu ēras|mūsu ērā)/i
		},
		s = {
			any: [/^p/i, /^m/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234](\. cet\.)/i,
			wide: /^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i
		},
		c = {
			narrow: [/^1/i, /^2/i, /^3/i, /^4/i],
			abbreviated: [/^1/i, /^2/i, /^3/i, /^4/i],
			wide: [/^p/i, /^o/i, /^t/i, /^c/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,
			wide: /^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jūn/i, /^jūl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[spotc]/i,
			short: /^(sv|pi|o|t|c|pk|s)/i,
			abbreviated: /^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i,
			wide: /^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i
		},
		h = {
			narrow: [/^s/i, /^p/i, /^o/i, /^t/i, /^c/i, /^p/i, /^s/i],
			any: [/^sv/i, /^pi/i, /^o/i, /^t/i, /^c/i, /^p/i, /^se/i]
		},
		p = {
			narrow: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/,
			abbreviated: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/,
			wide: /^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i
		},
		g = {
			any: {
				am: /^am/i,
				pm: /^pm/i,
				midnight: /^pusn/i,
				noon: /^pusd/i,
				morning: /^r/i,
				afternoon: /^(d|pēc)/i,
				evening: /^v/i,
				night: /^n/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(694),
		i = n(695),
		r = n(696),
		o = n(697),
		u = n(698),
		s = {
			code: "mk",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "за " + a: "пред " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "помалку од секунда",
				other: "помалку од {{count}} секунди"
			},
			xSeconds: {
				one: "1 секунда",
				other: "{{count}} секунди"
			},
			halfAMinute: "половина минута",
			lessThanXMinutes: {
				one: "помалку од минута",
				other: "помалку од {{count}} минути"
			},
			xMinutes: {
				one: "1 минута",
				other: "{{count}} минути"
			},
			aboutXHours: {
				one: "околу 1 час",
				other: "околу {{count}} часа"
			},
			xHours: {
				one: "1 час",
				other: "{{count}} часа"
			},
			xDays: {
				one: "1 ден",
				other: "{{count}} дена"
			},
			aboutXWeeks: {
				one: "околу 1 недела",
				other: "околу {{count}} месеци"
			},
			xWeeks: {
				one: "1 недела",
				other: "{{count}} недели"
			},
			aboutXMonths: {
				one: "околу 1 месец",
				other: "околу {{count}} недели"
			},
			xMonths: {
				one: "1 месец",
				other: "{{count}} месеци"
			},
			aboutXYears: {
				one: "околу 1 година",
				other: "околу {{count}} години"
			},
			xYears: {
				one: "1 година",
				other: "{{count}} години"
			},
			overXYears: {
				one: "повеќе од 1 година",
				other: "повеќе од {{count}} години"
			},
			almostXYears: {
				one: "безмалку 1 година",
				other: "безмалку {{count}} години"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, dd MMMM yyyy",
			long: "dd MMMM yyyy",
			medium: "dd MMM yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "H:mm"
		},
		o = {
			any: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "any"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 6:
				return "'минатата " + t + " во' p";
			case 1:
			case 2:
			case 4:
			case 5:
				return "'минатиот " + t + " во' p"
			}
		}
		function i(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 6:
				return "'ова " + t + " вo' p";
			case 1:
			case 2:
			case 4:
			case 5:
				return "'овој " + t + " вo' p"
			}
		}
		function r(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 6:
				return "'следната " + t + " вo' p";
			case 1:
			case 2:
			case 4:
			case 5:
				return "'следниот " + t + " вo' p"
			}
		}
		function o(e, t, n, a) {
			var i = d[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
		d = {
			lastWeek: function(e, t, n) {
				var r = e.getUTCDay();
				return u.a(e, t, n) ? i(r) : a(r)
			},
			yesterday: "'вчера во' p",
			today: "'денес во' p",
			tomorrow: "'утре во' p",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return u.a(e, t, n) ? i(a) : r(a)
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e),
			n = t % 100;
			if (n > 20 || n < 10) switch (n % 10) {
			case 1:
				return t + "-ви";
			case 2:
				return t + "-ри";
			case 7:
			case 8:
				return t + "-ми"
			}
			return t + "-ти"
		}
		var i = n(3),
		r = {
			narrow: ["пр.н.е.", "н.е."],
			abbreviated: ["пред н. е.", "н. е."],
			wide: ["пред нашата ера", "нашата ера"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1-ви кв.", "2-ри кв.", "3-ти кв.", "4-ти кв."],
			wide: ["1-ви квартал", "2-ри квартал", "3-ти квартал", "4-ти квартал"]
		},
		u = {
			abbreviated: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "септ", "окт", "ноем", "дек"],
			wide: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"]
		},
		s = {
			narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
			short: ["не", "по", "вт", "ср", "че", "пе", "са"],
			abbreviated: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
			wide: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"]
		},
		d = {
			wide: {
				am: "претпладне",
				pm: "попладне",
				midnight: "полноќ",
				noon: "напладне",
				morning: "наутро",
				afternoon: "попладне",
				evening: "навечер",
				night: "ноќе"
			}
		},
		c = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide"
			})
		};
		t.a = c
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)(-?[врмт][и])?/i,
		o = /\d+/i,
		u = {
			narrow: /^((пр)?н\.?\s?е\.?)/i,
			abbreviated: /^((пр)?н\.?\s?е\.?)/i,
			wide: /^(пред нашата ера|нашата ера)/i
		},
		s = {
			any: [/^п/i, /^н/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234](-?[врт]?и?)? кв.?/i,
			wide: /^[1234](-?[врт]?и?)? квартал/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[нпвсч]/i,
			short: /^(не|по|вт|ср|че|пе|са)/i,
			abbreviated: /^(нед|пон|вто|сре|чет|пет|саб)/i,
			wide: /^(недела|понеделник|вторник|среда|четврток|петок|сабота)/i
		},
		m = {
			narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
			any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[аб]/i]
		},
		f = {
			abbreviated: /^(јан|фев|мар|апр|мај|јун|јул|авг|сеп|окт|ноем|дек)/i,
			wide: /^(јануари|февруари|март|април|мај|јуни|јули|август|септември|октомври|ноември|декември)/i
		},
		h = {
			any: [/^ја/i, /^Ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]
		},
		p = {
			any: /^(претп|попл|полноќ|утро|пладне|вечер|ноќ)/i
		},
		g = {
			any: {
				am: /претпладне/i,
				pm: /попладне/i,
				midnight: /полноќ/i,
				noon: /напладне/i,
				morning: /наутро/i,
				afternoon: /попладне/i,
				evening: /навечер/i,
				night: /ноќе/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(700),
		i = n(701),
		r = n(702),
		o = n(703),
		u = n(704),
		s = {
			code: "ms",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "dalam masa " + a: a + " yang lalu": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "kurang dari 1 saat",
				other: "kurang dari {{count}} saat"
			},
			xSeconds: {
				one: "1 saat",
				other: "{{count}} saat"
			},
			halfAMinute: "setengah minit",
			lessThanXMinutes: {
				one: "kurang dari 1 minit",
				other: "kurang dari {{count}} minit"
			},
			xMinutes: {
				one: "1 minit",
				other: "{{count}} minit"
			},
			aboutXHours: {
				one: "sekitar 1 jam",
				other: "sekitar {{count}} jam"
			},
			xHours: {
				one: "1 jam",
				other: "{{count}} jam"
			},
			xDays: {
				one: "1 hari",
				other: "{{count}} hari"
			},
			aboutXWeeks: {
				one: "sekitar 1 minggu",
				other: "sekitar {{count}} minggu"
			},
			xWeeks: {
				one: "1 minggu",
				other: "{{count}} minggu"
			},
			aboutXMonths: {
				one: "sekitar 1 bulan",
				other: "sekitar {{count}} bulan"
			},
			xMonths: {
				one: "1 bulan",
				other: "{{count}} bulan"
			},
			aboutXYears: {
				one: "sekitar 1 tahun",
				other: "sekitar {{count}} tahun"
			},
			xYears: {
				one: "1 tahun",
				other: "{{count}} tahun"
			},
			overXYears: {
				one: "lebih dari 1 tahun",
				other: "lebih dari {{count}} tahun"
			},
			almostXYears: {
				one: "hampir 1 tahun",
				other: "hampir {{count}} tahun"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "d/M/yyyy"
		},
		r = {
			full: "HH.mm.ss",
			long: "HH.mm.ss",
			medium: "HH.mm",
			short: "HH.mm"
		},
		o = {
			full: "{{date}} 'pukul' {{time}}",
			long: "{{date}} 'pukul' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'lepas pada jam' p",
			yesterday: "'Semalam pada jam' p",
			today: "'Hari ini pada jam' p",
			tomorrow: "'Esok pada jam' p",
			nextWeek: "eeee 'pada jam' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e);
			return "ke-" + n
		}
		var i = n(3),
		r = {
			narrow: ["SM", "M"],
			abbreviated: ["SM", "M"],
			wide: ["Sebelum Masihi", "Masihi"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["S1", "S2", "S3", "S4"],
			wide: ["Suku pertama", "Suku kedua", "Suku ketiga", "Suku keempat"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"],
			abbreviated: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
			wide: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"]
		},
		s = {
			narrow: ["A", "I", "S", "R", "K", "J", "S"],
			short: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
			abbreviated: ["Ahd", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
			wide: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"]
		},
		d = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "tgh malam",
				noon: "tgh hari",
				morning: "pagi",
				afternoon: "tengah hari",
				evening: "petang",
				night: "malam"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "tengah hari",
				evening: "petang",
				night: "malam"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "tengah hari",
				evening: "petang",
				night: "malam"
			}
		},
		c = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "tengah hari",
				evening: "petang",
				night: "malam"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "tengah hari",
				evening: "petang",
				night: "malam"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "tengah malam",
				noon: "tengah hari",
				morning: "pagi",
				afternoon: "tengah hari",
				evening: "petang",
				night: "malam"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^ke-(\d+)?/i,
		o = /petama|\d+/i,
		u = {
			narrow: /^(sm|m)/i,
			abbreviated: /^(s\.?\s?m\.?|m\.?)/i,
			wide: /^(sebelum masihi|masihi)/i
		},
		s = {
			any: [/^s/i, /^(m)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^S[1234]/i,
			wide: /Suku (pertama|kedua|ketiga|keempat)/i
		},
		c = {
			any: [/pertama|1/i, /kedua|2/i, /ketiga|3/i, /keempat|4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mac|apr|mei|jun|jul|ogo|sep|okt|nov|dis)/i,
			wide: /^(januari|februari|mac|april|mei|jun|julai|ogos|september|oktober|november|disember)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^o/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^ma/i, /^ap/i, /^me/i, /^jun/i, /^jul/i, /^og/i, /^s/i, /^ok/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[aisrkj]/i,
			short: /^(ahd|isn|sel|rab|kha|jum|sab)/i,
			abbreviated: /^(ahd|isn|sel|rab|kha|jum|sab)/i,
			wide: /^(ahad|isnin|selasa|rabu|khamis|jumaat|sabtu)/i
		},
		h = {
			narrow: [/^a/i, /^i/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i],
			any: [/^a/i, /^i/i, /^se/i, /^r/i, /^k/i, /^j/i, /^sa/i]
		},
		p = {
			narrow: /^(am|pm|tengah malam|tengah hari|pagi|petang|malam)/i,
			any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|pagi|petang|malam)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^pm/i,
				midnight: /^tengah m/i,
				noon: /^tengah h/i,
				morning: /pa/i,
				afternoon: /tengah h/i,
				evening: /pe/i,
				night: /m/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(706),
		i = n(707),
		r = n(708),
		o = n(709),
		u = n(710),
		s = {
			code: "mt",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a, r = e.match(/years/i);
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: 2 === t && r ? i[e].two: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "f'" + a: a + " ilu": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "inqas minn sekonda",
				other: "inqas minn {{count}} sekondi"
			},
			xSeconds: {
				one: "sekonda",
				other: "{{count}} sekondi"
			},
			halfAMinute: "nofs minuta",
			lessThanXMinutes: {
				one: "inqas minn minuta",
				other: "inqas minn {{count}} minuti"
			},
			xMinutes: {
				one: "minuta",
				other: "{{count}} minuti"
			},
			aboutXHours: {
				one: "madwar siegħa",
				other: "madwar {{count}} siegħat"
			},
			xHours: {
				one: "siegħa",
				other: "{{count}} siegħat"
			},
			xDays: {
				one: "ġurnata",
				other: "{{count}} ġranet"
			},
			aboutXWeeks: {
				one: "madwar ġimgħa",
				other: "madwar {{count}} ġimgħat"
			},
			xWeeks: {
				one: "ġimgħa",
				other: "{{count}} ġimgħat"
			},
			aboutXMonths: {
				one: "madwar xahar",
				other: "madwar {{count}} xhur"
			},
			xMonths: {
				one: "xahar",
				other: "{{count}} xhur"
			},
			aboutXYears: {
				one: "madwar sena",
				two: "madwar sentejn",
				other: "madwar {{count}} snin"
			},
			xYears: {
				one: "sena",
				two: "sentejn",
				other: "{{count}} snin"
			},
			overXYears: {
				one: "aktar minn sena",
				two: "aktar minn sentejn",
				other: "aktar minn {{count}} snin"
			},
			almostXYears: {
				one: "kważi sena",
				two: "kważi sentejn",
				other: "kważi {{count}} snin"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'li għadda' 'fil-'p",
			yesterday: "'Il-bieraħ fil-'p",
			today: "'Illum fil-'p",
			tomorrow: "'Għada fil-'p",
			nextWeek: "eeee 'fil-'p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "º"
		}
		var i = n(3),
		r = {
			narrow: ["Q", "W"],
			abbreviated: ["QK", "WK"],
			wide: ["qabel Kristu", "wara Kristu"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["K1", "K2", "K3", "K4"],
			wide: ["1. kwart", "2. kwart", "3. kwart", "4. kwart"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "Ġ", "L", "A", "S", "O", "N", "D"],
			abbreviated: ["Jan", "Fra", "Mar", "Apr", "Mej", "Ġun", "Lul", "Aww", "Set", "Ott", "Nov", "Diċ"],
			wide: ["Jannar", "Frar", "Marzu", "April", "Mejju", "Ġunju", "Lulju", "Awwissu", "Settembru", "Ottubru", "Novembru", "Diċembru"]
		},
		s = {
			narrow: ["Ħ", "T", "T", "E", "Ħ", "Ġ", "S"],
			short: ["Ħa", "Tn", "Tl", "Er", "Ħa", "Ġi", "Si"],
			abbreviated: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
			wide: ["Il-Ħadd", "It-Tnejn", "It-Tlieta", "L-Erbgħa", "Il-Ħamis", "Il-Ġimgħa", "Is-Sibt"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "nofsillejl",
				noon: "nofsinhar",
				morning: "għodwa",
				afternoon: "wara nofsinhar",
				evening: "filgħaxija",
				night: "lejl"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "nofsillejl",
				noon: "nofsinhar",
				morning: "għodwa",
				afternoon: "wara nofsinhar",
				evening: "filgħaxija",
				night: "lejl"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "nofsillejl",
				noon: "nofsinhar",
				morning: "għodwa",
				afternoon: "wara nofsinhar",
				evening: "filgħaxija",
				night: "lejl"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "f'nofsillejl",
				noon: "f'nofsinhar",
				morning: "filgħodu",
				afternoon: "wara nofsinhar",
				evening: "filgħaxija",
				night: "billejl"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "f'nofsillejl",
				noon: "f'nofsinhar",
				morning: "filgħodu",
				afternoon: "wara nofsinhar",
				evening: "filgħaxija",
				night: "billejl"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "f'nofsillejl",
				noon: "f'nofsinhar",
				morning: "filgħodu",
				afternoon: "wara nofsinhar",
				evening: "filgħaxija",
				night: "billejl"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(º)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(q|w)/i,
			abbreviated: /^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,
			wide: /^(qabel kristu|before common era|wara kristu|common era)/i
		},
		s = {
			any: [/^(q|b)/i, /^(w|c)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^k[1234]/i,
			wide: /^[1234](\.)? kwart/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmaglsond]/i,
			abbreviated: /^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,
			wide: /^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^ġ/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mej/i, /^ġ/i, /^l/i, /^aw/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[ħteġs]/i,
			short: /^(ħa|tn|tl|er|ħa|ġi|si)/i,
			abbreviated: /^(ħad|tne|tli|erb|ħam|ġim|sib)/i,
			wide: /^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i
		},
		h = {
			narrow: [/^ħ/i, /^t/i, /^t/i, /^e/i, /^ħ/i, /^ġ/i, /^s/i],
			any: [/^(il-)?ħad/i, /^(it-)?tn/i, /^(it-)?tl/i, /^(l-)?er/i, /^(il-)?ham/i, /^(il-)?ġi/i, /^(is-)?si/i]
		},
		p = {
			narrow: /^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,
			any: /^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^f'nofsillejl/i,
				noon: /^f'nofsinhar/i,
				morning: /għodwa/i,
				afternoon: /wara(\s.*)nofsinhar/i,
				evening: /filgħaxija/i,
				night: /lejl/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(712),
		i = n(713),
		r = n(714),
		o = n(715),
		u = n(716),
		s = {
			code: "nb",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {
				onlyNumeric: !1
			};
			var a, o = i[e];
			return a = "string" == typeof o ? o: 0 === t || t > 1 ? n.onlyNumeric ? o.plural.replace("{{count}}", t) : o.plural.replace("{{count}}", t < 13 ? r[t] : t) : o.singular,
			n.addSuffix ? n.comparison > 0 ? "om " + a: a + " siden": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				singular: "mindre enn ett sekund",
				plural: "mindre enn {{count}} sekunder"
			},
			xSeconds: {
				singular: "ett sekund",
				plural: "{{count}} sekunder"
			},
			halfAMinute: "et halvt minutt",
			lessThanXMinutes: {
				singular: "mindre enn ett minutt",
				plural: "mindre enn {{count}} minutter"
			},
			xMinutes: {
				singular: "ett minutt",
				plural: "{{count}} minutter"
			},
			aboutXHours: {
				singular: "omtrent en time",
				plural: "omtrent {{count}} timer"
			},
			xHours: {
				singular: "en time",
				plural: "{{count}} timer"
			},
			xDays: {
				singular: "en dag",
				plural: "{{count}} dager"
			},
			aboutXWeeks: {
				singular: "omtrent en uke",
				plural: "omtrent {{count}} uker"
			},
			xWeeks: {
				singular: "en uke",
				plural: "{{count}} uker"
			},
			aboutXMonths: {
				singular: "omtrent en måned",
				plural: "omtrent {{count}} måneder"
			},
			xMonths: {
				singular: "en måned",
				plural: "{{count}} måneder"
			},
			aboutXYears: {
				singular: "omtrent ett år",
				plural: "omtrent {{count}} år"
			},
			xYears: {
				singular: "ett år",
				plural: "{{count}} år"
			},
			overXYears: {
				singular: "over ett år",
				plural: "over {{count}} år"
			},
			almostXYears: {
				singular: "nesten ett år",
				plural: "nesten {{count}} år"
			}
		},
		r = ["null", "en", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni", "ti", "elleve", "tolv"]
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d. MMMM y",
			long: "d. MMMM y",
			medium: "d. MMM y",
			short: "dd.MM.y"
		},
		r = {
			full: "'kl'. HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'kl.' {{time}}",
			long: "{{date}} 'kl.' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'forrige' eeee 'kl.' p",
			yesterday: "'i går kl.' p",
			today: "'i dag kl.' p",
			tomorrow: "'i morgen kl.' p",
			nextWeek: "EEEE 'kl.' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["f.Kr.", "e.Kr."],
			abbreviated: ["f.Kr.", "e.Kr."],
			wide: ["før Kristus", "etter Kristus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."],
			wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
		},
		s = {
			narrow: ["S", "M", "T", "O", "T", "F", "L"],
			short: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
			abbreviated: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
			wide: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morg.",
				afternoon: "på etterm.",
				evening: "på kvelden",
				night: "på natten"
			},
			abbreviated: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morg.",
				afternoon: "på etterm.",
				evening: "på kvelden",
				night: "på natten"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morgenen",
				afternoon: "på ettermiddagen",
				evening: "på kvelden",
				night: "på natten"
			}
		},
		c = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide"
			})
		};
		t.a = c
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)\.?/i,
		o = /\d+/i,
		u = {
			narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
			abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
			wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
		},
		s = {
			any: [/^f/i, /^e/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](\.)? kvartal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
			wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[smtofl]/i,
			short: /^(sø|ma|ti|on|to|fr|lø)/i,
			abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
			wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
		},
		h = {
			any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
		},
		p = {
			narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
			any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i
		},
		g = {
			any: {
				am: /^a(\.?\s?m\.?)?$/i,
				pm: /^p(\.?\s?m\.?)?$/i,
				midnight: /^midn/i,
				noon: /^midd/i,
				morning: /morgen/i,
				afternoon: /ettermiddag/i,
				evening: /kveld/i,
				night: /natt/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(718),
		i = n(719),
		r = n(720),
		o = n(721),
		u = n(722),
		s = {
			code: "nl",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "over " + a: a + " geleden": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "minder dan een seconde",
				other: "minder dan {{count}} seconden"
			},
			xSeconds: {
				one: "1 seconde",
				other: "{{count}} seconden"
			},
			halfAMinute: "een halve minuut",
			lessThanXMinutes: {
				one: "minder dan een minuut",
				other: "minder dan {{count}} minuten"
			},
			xMinutes: {
				one: "een minuut",
				other: "{{count}} minuten"
			},
			aboutXHours: {
				one: "ongeveer 1 uur",
				other: "ongeveer {{count}} uur"
			},
			xHours: {
				one: "1 uur",
				other: "{{count}} uur"
			},
			xDays: {
				one: "1 dag",
				other: "{{count}} dagen"
			},
			aboutXWeeks: {
				one: "ongeveer 1 week",
				other: "ongeveer {{count}} weken"
			},
			xWeeks: {
				one: "1 week",
				other: "{{count}} weken"
			},
			aboutXMonths: {
				one: "ongeveer 1 maand",
				other: "ongeveer {{count}} maanden"
			},
			xMonths: {
				one: "1 maand",
				other: "{{count}} maanden"
			},
			aboutXYears: {
				one: "ongeveer 1 jaar",
				other: "ongeveer {{count}} jaar"
			},
			xYears: {
				one: "1 jaar",
				other: "{{count}} jaar"
			},
			overXYears: {
				one: "meer dan 1 jaar",
				other: "meer dan {{count}} jaar"
			},
			almostXYears: {
				one: "bijna 1 jaar",
				other: "bijna {{count}} jaar"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd-MM-y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'om' {{time}}",
			long: "{{date}} 'om' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'afgelopen' eeee 'om' p",
			yesterday: "'gisteren om' p",
			today: "'vandaag om' p",
			tomorrow: "'morgen om' p",
			nextWeek: "eeee 'om' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "e"
		}
		var i = n(3),
		r = {
			narrow: ["v.C.", "n.C."],
			abbreviated: ["v.Chr.", "n.Chr."],
			wide: ["voor Christus", "na Christus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["K1", "K2", "K3", "K4"],
			wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
			wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
		},
		s = {
			narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
			short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
			abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
			wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
		},
		d = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middaguur",
				morning: "'s ochtends",
				afternoon: "'s middags",
				evening: "'s avonds",
				night: "'s nachts"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middaguur",
				morning: "'s ochtends",
				afternoon: "'s middags",
				evening: "'s avonds",
				night: "'s nachts"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middaguur",
				morning: "'s ochtends",
				afternoon: "'s middags",
				evening: "'s avonds",
				night: "'s nachts"
			}
		},
		c = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide"
			})
		};
		t.a = c
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)e?/i,
		o = /\d+/i,
		u = {
			narrow: /^([vn]\.? ?C\.?)/,
			abbreviated: /^([vn]\. ?Chr\.?)/,
			wide: /^((voor|na) Christus)/
		},
		s = {
			any: [/^v/, /^n/]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^K[1234]/i,
			wide: /^[1234]e kwartaal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
			wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
		},
		f = {
			narrow: /^[zmdwv]/i,
			short: /^(zo|ma|di|wo|do|vr|za)/i,
			abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
			wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
		},
		h = {
			narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i],
			any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]
		},
		p = {
			any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i
		},
		g = {
			any: {
				am: /^am/i,
				pm: /^pm/i,
				midnight: /^middernacht/i,
				noon: /^het middaguur/i,
				morning: /ochtend/i,
				afternoon: /middag/i,
				evening: /avond/i,
				night: /nacht/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(724),
		i = n(725),
		r = n(726),
		o = n(727),
		u = n(728),
		s = {
			code: "nl-BE",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "over " + a: a + " geleden": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "minder dan een seconde",
				other: "minder dan {{count}} seconden"
			},
			xSeconds: {
				one: "1 seconde",
				other: "{{count}} seconden"
			},
			halfAMinute: "een halve minuut",
			lessThanXMinutes: {
				one: "minder dan een minuut",
				other: "minder dan {{count}} minuten"
			},
			xMinutes: {
				one: "een minuut",
				other: "{{count}} minuten"
			},
			aboutXHours: {
				one: "ongeveer 1 uur",
				other: "ongeveer {{count}} uur"
			},
			xHours: {
				one: "1 uur",
				other: "{{count}} uur"
			},
			xDays: {
				one: "1 dag",
				other: "{{count}} dagen"
			},
			aboutXWeeks: {
				one: "ongeveer 1 week",
				other: "ongeveer {{count}} weken"
			},
			xWeeks: {
				one: "1 week",
				other: "{{count}} weken"
			},
			aboutXMonths: {
				one: "ongeveer 1 maand",
				other: "ongeveer {{count}} maanden"
			},
			xMonths: {
				one: "1 maand",
				other: "{{count}} maanden"
			},
			aboutXYears: {
				one: "ongeveer 1 jaar",
				other: "ongeveer {{count}} jaar"
			},
			xYears: {
				one: "1 jaar",
				other: "{{count}} jaar"
			},
			overXYears: {
				one: "meer dan 1 jaar",
				other: "meer dan {{count}} jaar"
			},
			almostXYears: {
				one: "bijna 1 jaar",
				other: "bijna {{count}} jaar"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd-MM-y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'om' {{time}}",
			long: "{{date}} 'om' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'vorige' eeee 'om' p",
			yesterday: "'gisteren om' p",
			today: "'vandaag om' p",
			tomorrow: "'morgen om' p",
			nextWeek: "eeee 'om' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "e"
		}
		var i = n(3),
		r = {
			narrow: ["v.C.", "n.C."],
			abbreviated: ["v.Chr.", "n.Chr."],
			wide: ["voor Christus", "na Christus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["K1", "K2", "K3", "K4"],
			wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
			wide: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
		},
		s = {
			narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
			short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
			abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
			wide: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
		},
		d = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middag",
				morning: "'s ochtends",
				afternoon: "'s namiddags",
				evening: "'s avonds",
				night: "'s nachts"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middag",
				morning: "'s ochtends",
				afternoon: "'s namiddags",
				evening: "'s avonds",
				night: "'s nachts"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "middernacht",
				noon: "het middag",
				morning: "'s ochtends",
				afternoon: "'s namiddags",
				evening: "'s avonds",
				night: "'s nachts"
			}
		},
		c = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide"
			})
		};
		t.a = c
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)e?/i,
		o = /\d+/i,
		u = {
			narrow: /^([vn]\.? ?C\.?)/,
			abbreviated: /^([vn]\. ?Chr\.?)/,
			wide: /^((voor|na) Christus)/
		},
		s = {
			any: [/^v/, /^n/]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^K[1234]/i,
			wide: /^[1234]e kwartaal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
			wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mei/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
		},
		f = {
			narrow: /^[zmdwv]/i,
			short: /^(zo|ma|di|wo|do|vr|za)/i,
			abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
			wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
		},
		h = {
			narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i],
			any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]
		},
		p = {
			any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i
		},
		g = {
			any: {
				am: /^am/i,
				pm: /^pm/i,
				midnight: /^middernacht/i,
				noon: /^het middaguur/i,
				morning: /ochtend/i,
				afternoon: /middag/i,
				evening: /avond/i,
				night: /nacht/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(730),
		i = n(731),
		r = n(732),
		o = n(733),
		u = n(734),
		s = {
			code: "nn",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {
				onlyNumeric: !1
			};
			var a, o = i[e];
			return a = "string" == typeof o ? o: 0 === t || t > 1 ? n.onlyNumeric ? o.plural.replace("{{count}}", t) : o.plural.replace("{{count}}", t < 13 ? r[t] : t) : o.singular,
			n.addSuffix ? n.comparison > 0 ? "om " + a: a + " sidan": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				singular: "mindre enn eitt sekund",
				plural: "mindre enn {{count}} sekund"
			},
			xSeconds: {
				singular: "eitt sekund",
				plural: "{{count}} sekund"
			},
			halfAMinute: "eit halvt minutt",
			lessThanXMinutes: {
				singular: "mindre enn eitt minutt",
				plural: "mindre enn {{count}} minutt"
			},
			xMinutes: {
				singular: "eitt minutt",
				plural: "{{count}} minutt"
			},
			aboutXHours: {
				singular: "omtrent ein time",
				plural: "omtrent {{count}} timar"
			},
			xHours: {
				singular: "ein time",
				plural: "{{count}} timar"
			},
			xDays: {
				singular: "ein dag",
				plural: "{{count}} dagar"
			},
			aboutXWeeks: {
				singular: "omtrent ei veke",
				plural: "omtrent {{count}} veker"
			},
			xWeeks: {
				singular: "ei veke",
				plural: "{{count}} veker"
			},
			aboutXMonths: {
				singular: "omtrent ein månad",
				plural: "omtrent {{count}} månader"
			},
			xMonths: {
				singular: "ein månad",
				plural: "{{count}} månader"
			},
			aboutXYears: {
				singular: "omtrent eitt år",
				plural: "omtrent {{count}} år"
			},
			xYears: {
				singular: "eitt år",
				plural: "{{count}} år"
			},
			overXYears: {
				singular: "over eitt år",
				plural: "over {{count}} år"
			},
			almostXYears: {
				singular: "nesten eitt år",
				plural: "nesten {{count}} år"
			}
		},
		r = ["null", "ein", "to", "tre", "fire", "fem", "seks", "sju", "åtte", "ni", "ti", "elleve", "tolv"]
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d. MMMM y",
			long: "d. MMMM y",
			medium: "d. MMM y",
			short: "dd.MM.y"
		},
		r = {
			full: "'kl'. HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'kl.' {{time}}",
			long: "{{date}} 'kl.' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'førre' eeee 'kl.' p",
			yesterday: "'i går kl.' p",
			today: "'i dag kl.' p",
			tomorrow: "'i morgon kl.' p",
			nextWeek: "EEEE 'kl.' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["f.Kr.", "e.Kr."],
			abbreviated: ["f.Kr.", "e.Kr."],
			wide: ["før Kristus", "etter Kristus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."],
			wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
		},
		s = {
			narrow: ["S", "M", "T", "O", "T", "F", "L"],
			short: ["su", "må", "ty", "on", "to", "fr", "lau"],
			abbreviated: ["sun", "mån", "tys", "ons", "tor", "fre", "laur"],
			wide: ["sundag", "måndag", "tysdag", "onsdag", "torsdag", "fredag", "laurdag"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morg.",
				afternoon: "på etterm.",
				evening: "på kvelden",
				night: "på natta"
			},
			abbreviated: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morg.",
				afternoon: "på etterm.",
				evening: "på kvelden",
				night: "på natta"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morgonen",
				afternoon: "på ettermiddagen",
				evening: "på kvelden",
				night: "på natta"
			}
		},
		c = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide"
			})
		};
		t.a = c
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)\.?/i,
		o = /\d+/i,
		u = {
			narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
			abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
			wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
		},
		s = {
			any: [/^f/i, /^e/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](\.)? kvartal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
			wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[smtofl]/i,
			short: /^(su|må|ty|on|to|fr|la)/i,
			abbreviated: /^(sun|mån|tys|ons|tor|fre|laur)/i,
			wide: /^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i
		},
		h = {
			any: [/^s/i, /^m/i, /^ty/i, /^o/i, /^to/i, /^f/i, /^l/i]
		},
		p = {
			narrow: /^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,
			any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i
		},
		g = {
			any: {
				am: /^a(\.?\s?m\.?)?$/i,
				pm: /^p(\.?\s?m\.?)?$/i,
				midnight: /^midn/i,
				noon: /^midd/i,
				morning: /morgon/i,
				afternoon: /ettermiddag/i,
				evening: /kveld/i,
				night: /natt/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(736),
		i = n(737),
		r = n(738),
		o = n(739),
		u = n(740),
		s = {
			code: "pl",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (1 === t) return e.one;
			var n = t % 100;
			if (n <= 20 && n > 10) return e.other;
			var a = n % 10;
			return a >= 2 && a <= 4 ? e.twoFour: e.other
		}
		function i(e, t, n) {
			n = n || "regular";
			var i = a(e, t);
			return (i[n] || i).replace("{{count}}", t)
		}
		function r(e, t, n) {
			n = n || {};
			var a = o[e];
			return n.addSuffix ? n.comparison > 0 ? "za " + i(a, t, "future") : i(a, t, "past") + " temu": i(a, t)
		}
		t.a = r;
		var o = {
			lessThanXSeconds: {
				one: {
					regular: "mniej niż sekunda",
					past: "mniej niż sekundę",
					future: "mniej niż sekundę"
				},
				twoFour: "mniej niż {{count}} sekundy",
				other: "mniej niż {{count}} sekund"
			},
			xSeconds: {
				one: {
					regular: "sekunda",
					past: "sekundę",
					future: "sekundę"
				},
				twoFour: "{{count}} sekundy",
				other: "{{count}} sekund"
			},
			halfAMinute: {
				one: "pół minuty",
				twoFour: "pół minuty",
				other: "pół minuty"
			},
			lessThanXMinutes: {
				one: {
					regular: "mniej niż minuta",
					past: "mniej niż minutę",
					future: "mniej niż minutę"
				},
				twoFour: "mniej niż {{count}} minuty",
				other: "mniej niż {{count}} minut"
			},
			xMinutes: {
				one: {
					regular: "minuta",
					past: "minutę",
					future: "minutę"
				},
				twoFour: "{{count}} minuty",
				other: "{{count}} minut"
			},
			aboutXHours: {
				one: {
					regular: "około godzina",
					past: "około godziny",
					future: "około godzinę"
				},
				twoFour: "około {{count}} godziny",
				other: "około {{count}} godzin"
			},
			xHours: {
				one: {
					regular: "godzina",
					past: "godzinę",
					future: "godzinę"
				},
				twoFour: "{{count}} godziny",
				other: "{{count}} godzin"
			},
			xDays: {
				one: {
					regular: "dzień",
					past: "dzień",
					future: "1 dzień"
				},
				twoFour: "{{count}} dni",
				other: "{{count}} dni"
			},
			aboutXWeeks: {
				one: "około tygodnia",
				twoFour: "około {{count}} tygodni",
				other: "około {{count}} tygodni"
			},
			xWeeks: {
				one: "tydzień",
				twoFour: "{{count}} tygodnie",
				other: "{{count}} tygodni"
			},
			aboutXMonths: {
				one: "około miesiąc",
				twoFour: "około {{count}} miesiące",
				other: "około {{count}} miesięcy"
			},
			xMonths: {
				one: "miesiąc",
				twoFour: "{{count}} miesiące",
				other: "{{count}} miesięcy"
			},
			aboutXYears: {
				one: "około rok",
				twoFour: "około {{count}} lata",
				other: "około {{count}} lat"
			},
			xYears: {
				one: "rok",
				twoFour: "{{count}} lata",
				other: "{{count}} lat"
			},
			overXYears: {
				one: "ponad rok",
				twoFour: "ponad {{count}} lata",
				other: "ponad {{count}} lat"
			},
			almostXYears: {
				one: "prawie rok",
				twoFour: "prawie {{count}} lata",
				other: "prawie {{count}} lat"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM y",
			long: "do MMMM y",
			medium: "do MMM y",
			short: "dd.MM.y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			if (u.a(t, n, a)) return d;
			if ("lastWeek" === e) return s;
			if ("nextWeek" === e) return c;
			throw new Error("Cannot determine adjectives for token ".concat(e))
		}
		function i(e, t, n, i) {
			var r = t.getUTCDay();
			return a(e, t, n, i)[l[r]]
		}
		function r(e, t, n, a) {
			return "'".concat(i(e, t, n, a), "' eeee 'o' p")
		}
		function o(e, t, n, a) {
			var i = m[e];
			return "function" == typeof i ? i(e, t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = {
			masculine: "ostatni",
			feminine: "ostatnia"
		},
		d = {
			masculine: "ten",
			feminine: "ta"
		},
		c = {
			masculine: "następny",
			feminine: "następna"
		},
		l = {
			0 : "feminine",
			1 : "masculine",
			2 : "masculine",
			3 : "feminine",
			4 : "masculine",
			5 : "masculine",
			6 : "feminine"
		},
		m = {
			lastWeek: r,
			yesterday: "'wczoraj o' p",
			today: "'dzisiaj o' p",
			tomorrow: "'jutro o' p",
			nextWeek: r,
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e);
			return String(t)
		}
		var i = n(3),
		r = {
			narrow: ["p.n.e.", "n.e."],
			abbreviated: ["p.n.e.", "n.e."],
			wide: ["przed naszą erą", "naszej ery"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
			wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]
		},
		u = {
			narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
			abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
			wide: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]
		},
		s = {
			narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
			abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
			wide: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
		},
		d = {
			narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
			short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
			abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
			wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
		},
		c = {
			narrow: ["n", "p", "w", "ś", "c", "p", "s"],
			short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
			abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
			wide: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
		},
		l = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "półn.",
				noon: "poł",
				morning: "rano",
				afternoon: "popoł.",
				evening: "wiecz.",
				night: "noc"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "północ",
				noon: "południe",
				morning: "rano",
				afternoon: "popołudnie",
				evening: "wieczór",
				night: "noc"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "północ",
				noon: "południe",
				morning: "rano",
				afternoon: "popołudnie",
				evening: "wieczór",
				night: "noc"
			}
		},
		m = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "o półn.",
				noon: "w poł.",
				morning: "rano",
				afternoon: "po poł.",
				evening: "wiecz.",
				night: "w nocy"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "o północy",
				noon: "w południe",
				morning: "rano",
				afternoon: "po południu",
				evening: "wieczorem",
				night: "w nocy"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "o północy",
				noon: "w południe",
				morning: "rano",
				afternoon: "po południu",
				evening: "wieczorem",
				night: "w nocy"
			}
		},
		f = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide",
				formattingValues: s,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			}),
			dayPeriod: i.a({
				values: l,
				defaultWidth: "wide",
				formattingValues: m,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = f
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
			abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
			wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
		},
		s = {
			any: [/^p/i, /^n/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
			wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
		},
		c = {
			narrow: [/1/i, /2/i, /3/i, /4/i],
			any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
		},
		l = {
			narrow: /^[slmkcwpg]/i,
			abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
			wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
		},
		m = {
			narrow: [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i],
			any: [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i]
		},
		f = {
			narrow: /^[npwścs]/i,
			short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
			abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
			wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
		},
		h = {
			narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
			abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
			any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
		},
		p = {
			narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
			any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
		},
		g = {
			narrow: {
				am: /^a$/i,
				pm: /^p$/i,
				midnight: /pó(ł|l)n/i,
				noon: /po(ł|l)/i,
				morning: /rano/i,
				afternoon: /po\s*po(ł|l)/i,
				evening: /wiecz/i,
				night: /noc/i
			},
			any: {
				am: /^am/i,
				pm: /^pm/i,
				midnight: /pó(ł|l)n/i,
				noon: /po(ł|l)/i,
				morning: /rano/i,
				afternoon: /po\s*po(ł|l)/i,
				evening: /wiecz/i,
				night: /noc/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(742),
		i = n(743),
		r = n(744),
		o = n(745),
		u = n(746),
		s = {
			code: "pt",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "daqui a " + a: "há " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "menos de um segundo",
				other: "menos de {{count}} segundos"
			},
			xSeconds: {
				one: "1 segundo",
				other: "{{count}} segundos"
			},
			halfAMinute: "meio minuto",
			lessThanXMinutes: {
				one: "menos de um minuto",
				other: "menos de {{count}} minutos"
			},
			xMinutes: {
				one: "1 minuto",
				other: "{{count}} minutos"
			},
			aboutXHours: {
				one: "aproximadamente 1 hora",
				other: "aproximadamente {{count}} horas"
			},
			xHours: {
				one: "1 hora",
				other: "{{count}} horas"
			},
			xDays: {
				one: "1 dia",
				other: "{{count}} dias"
			},
			aboutXWeeks: {
				one: "aproximadamente 1 mês",
				other: "aproximadamente {{count}} meses"
			},
			xWeeks: {
				one: "1 mês",
				other: "{{count}} meses"
			},
			aboutXMonths: {
				one: "aproximadamente 1 mês",
				other: "aproximadamente {{count}} meses"
			},
			xMonths: {
				one: "1 mês",
				other: "{{count}} meses"
			},
			aboutXYears: {
				one: "aproximadamente 1 ano",
				other: "aproximadamente {{count}} anos"
			},
			xYears: {
				one: "1 ano",
				other: "{{count}} anos"
			},
			overXYears: {
				one: "mais de 1 ano",
				other: "mais de {{count}} anos"
			},
			almostXYears: {
				one: "quase 1 ano",
				other: "quase {{count}} anos"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d 'de' MMM 'de' y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'às' {{time}}",
			long: "{{date}} 'às' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'na última' eeee 'às' p",
			yesterday: "'ontem às' p",
			today: "'hoje às' p",
			tomorrow: "'amanhã às' p",
			nextWeek: "eeee 'às' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e) + "º"
		}
		var i = n(3),
		r = {
			narrow: ["aC", "dC"],
			abbreviated: ["a.C.", "d.C."],
			wide: ["antes de Cristo", "depois de Cristo"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["T1", "T2", "T3", "T4"],
			wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
		},
		u = {
			narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
			abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
			wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
		},
		s = {
			narrow: ["d", "s", "t", "q", "q", "s", "s"],
			short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
			abbreviated: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
			wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
		},
		d = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "manhã",
				afternoon: "tarde",
				evening: "noite",
				night: "madrugada"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "manhã",
				afternoon: "tarde",
				evening: "noite",
				night: "madrugada"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "manhã",
				afternoon: "tarde",
				evening: "noite",
				night: "madrugada"
			}
		},
		c = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da noite",
				night: "da madrugada"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da noite",
				night: "da madrugada"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da noite",
				night: "da madrugada"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(º|ª)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ac|dc|a|d)/i,
			abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
			wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i
		},
		s = {
			any: [/^ac/i, /^dc/i],
			wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^T[1234]/i,
			wide: /^[1234](º|ª)? trimestre/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
			wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ab/i, /^mai/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[dstq]/i,
			short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
			abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
			wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i
		},
		h = {
			narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i],
			any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[áa]/i]
		},
		p = {
			narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
			any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^meia/i,
				noon: /^meio/i,
				morning: /manh[ãa]/i,
				afternoon: /tarde/i,
				evening: /noite/i,
				night: /madrugada/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(748),
		i = n(749),
		r = n(750),
		o = n(751),
		u = n(752),
		s = {
			code: "pt-BR",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "em " + a: "há " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "menos de um segundo",
				other: "menos de {{count}} segundos"
			},
			xSeconds: {
				one: "1 segundo",
				other: "{{count}} segundos"
			},
			halfAMinute: "meio minuto",
			lessThanXMinutes: {
				one: "menos de um minuto",
				other: "menos de {{count}} minutos"
			},
			xMinutes: {
				one: "1 minuto",
				other: "{{count}} minutos"
			},
			aboutXHours: {
				one: "cerca de 1 hora",
				other: "cerca de {{count}} horas"
			},
			xHours: {
				one: "1 hora",
				other: "{{count}} horas"
			},
			xDays: {
				one: "1 dia",
				other: "{{count}} dias"
			},
			aboutXWeeks: {
				one: "cerca de 1 mês",
				other: "cerca de {{count}} meses"
			},
			xWeeks: {
				one: "1 mês",
				other: "{{count}} meses"
			},
			aboutXMonths: {
				one: "cerca de 1 mês",
				other: "cerca de {{count}} meses"
			},
			xMonths: {
				one: "1 mês",
				other: "{{count}} meses"
			},
			aboutXYears: {
				one: "cerca de 1 ano",
				other: "cerca de {{count}} anos"
			},
			xYears: {
				one: "1 ano",
				other: "{{count}} anos"
			},
			overXYears: {
				one: "mais de 1 ano",
				other: "mais de {{count}} anos"
			},
			almostXYears: {
				one: "quase 1 ano",
				other: "quase {{count}} anos"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'às' {{time}}",
			long: "{{date}} 'às' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var r = i[e];
			return "function" == typeof r ? r(t, n, a) : r
		}
		t.a = a;
		var i = {
			lastWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return "'" + (0 === a || 6 === a ? "último": "última") + "' eeee 'às' p"
			},
			yesterday: "'ontem às' p",
			today: "'hoje às' p",
			tomorrow: "'amanhã às' p",
			nextWeek: "eeee 'às' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = t || {},
			i = String(a.unit);
			return "week" === i || "isoWeek" === i ? n + "ª": n + "º"
		}
		var i = n(3),
		r = {
			narrow: ["AC", "DC"],
			abbreviated: ["AC", "DC"],
			wide: ["antes de cristo", "depois de cristo"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["T1", "T2", "T3", "T4"],
			wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
		},
		u = {
			narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
			abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
			wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
		},
		s = {
			narrow: ["do", "2ª", "3ª", "4ª", "5ª", "6ª", "sá"],
			short: ["do", "2ª", "3ª", "4ª", "5ª", "6ª", "sá"],
			abbreviated: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
			wide: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "manhã",
				afternoon: "tarde",
				evening: "tarde",
				night: "noite"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "manhã",
				afternoon: "tarde",
				evening: "tarde",
				night: "noite"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "manhã",
				afternoon: "tarde",
				evening: "tarde",
				night: "noite"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "md",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da tarde",
				night: "da noite"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da tarde",
				night: "da noite"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "meia-noite",
				noon: "meio-dia",
				morning: "da manhã",
				afternoon: "da tarde",
				evening: "da tarde",
				night: "da noite"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)[ºªo]?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ac|dc|a|d)/i,
			abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
			wide: /^(antes de cristo|depois de cristo)/i
		},
		s = {
			any: [/^ac/i, /^dc/i],
			wide: [/^antes de cristo/i, /^depois de cristo/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^T[1234]/i,
			wide: /^[1234](º)? trimestre/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmajsond]/i,
			abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
			wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
		},
		f = {
			narrow: /^(dom|[23456]ª?|s[aá]b)/i,
			short: /^(dom|[23456]ª?|s[aá]b)/i,
			abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
			wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
		},
		h = {
			short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
			narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
			any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
		},
		p = {
			narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
			any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn|^meia[-\s]noite/i,
				noon: /^md|^meio[-\s]dia/i,
				morning: /manhã/i,
				afternoon: /tarde/i,
				evening: /tarde/i,
				night: /noite/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(754),
		i = n(755),
		r = n(756),
		o = n(757),
		u = n(758),
		s = {
			code: "ro",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "în " + a: a + " în urmă": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "mai puțin de o secundă",
				other: "mai puțin de {{count}} secunde"
			},
			xSeconds: {
				one: "1 secundă",
				other: "{{count}} secunde"
			},
			halfAMinute: "jumătate de minut",
			lessThanXMinutes: {
				one: "mai puțin de un minut",
				other: "mai puțin de {{count}} minute"
			},
			xMinutes: {
				one: "1 minut",
				other: "{{count}} minute"
			},
			aboutXHours: {
				one: "circa 1 oră",
				other: "circa {{count}} ore"
			},
			xHours: {
				one: "1 oră",
				other: "{{count}} ore"
			},
			xDays: {
				one: "1 zi",
				other: "{{count}} zile"
			},
			aboutXWeeks: {
				one: "circa o săptămână",
				other: "circa {{count}} săptămâni"
			},
			xWeeks: {
				one: "1 săptămână",
				other: "{{count}} săptămâni"
			},
			aboutXMonths: {
				one: "circa 1 lună",
				other: "circa {{count}} luni"
			},
			xMonths: {
				one: "1 lună",
				other: "{{count}} luni"
			},
			aboutXYears: {
				one: "circa 1 an",
				other: "circa {{count}} ani"
			},
			xYears: {
				one: "1 an",
				other: "{{count}} ani"
			},
			overXYears: {
				one: "peste 1 an",
				other: "peste {{count}} ani"
			},
			almostXYears: {
				one: "aproape 1 an",
				other: "aproape {{count}} ani"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM yyyy",
			long: "d MMMM yyyy",
			medium: "d MMM yyyy",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'la' {{time}}",
			long: "{{date}} 'la' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'trecută la' p",
			yesterday: "'ieri la' p",
			today: "'astăzi la' p",
			tomorrow: "'mâine la' p",
			nextWeek: "eeee 'viitoare la' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e);
			return String(t)
		}
		var i = n(3),
		r = {
			narrow: ["Î", "D"],
			abbreviated: ["Î.d.C.", "D.C."],
			wide: ["Înainte de Cristos", "După Cristos"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["T1", "T2", "T3", "T4"],
			wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"]
		},
		u = {
			narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
			abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"],
			wide: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"]
		},
		s = {
			narrow: ["d", "l", "m", "m", "j", "v", "s"],
			short: ["du", "lu", "ma", "mi", "jo", "vi", "sâ"],
			abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "sâm"],
			wide: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "ami",
				morning: "dim",
				afternoon: "da",
				evening: "s",
				night: "n"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "miezul nopții",
				noon: "amiază",
				morning: "dimineață",
				afternoon: "după-amiază",
				evening: "seară",
				night: "noapte"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "miezul nopții",
				noon: "amiază",
				morning: "dimineață",
				afternoon: "după-amiază",
				evening: "seară",
				night: "noapte"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mn",
				noon: "amiază",
				morning: "dimineață",
				afternoon: "după-amiază",
				evening: "seară",
				night: "noapte"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "miezul nopții",
				noon: "amiază",
				morning: "dimineață",
				afternoon: "după-amiază",
				evening: "seară",
				night: "noapte"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "miezul nopții",
				noon: "amiază",
				morning: "dimineață",
				afternoon: "după-amiază",
				evening: "seară",
				night: "noapte"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(Î|D)/i,
			abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
			wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i
		},
		s = {
			any: [/^ÎC/i, /^DC/i],
			wide: [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^T[1234]/i,
			wide: /^trimestrul [1234]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[ifmaasond]/i,
			abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
			wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i
		},
		m = {
			narrow: [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[dlmjvs]/i,
			short: /^(d|l|ma|mi|j|v|s)/i,
			abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i,
			wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i
		},
		h = {
			narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
			any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i]
		},
		p = {
			narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,
			any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn/i,
				noon: /amiaza/i,
				morning: /dimineaţa/i,
				afternoon: /după-amiaza/i,
				evening: /seara/i,
				night: /noaptea/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(760),
		i = n(761),
		r = n(762),
		o = n(763),
		u = n(764),
		s = {
			code: "ru",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (void 0 !== e.one && 1 === t) return e.one;
			var n = t % 10,
			a = t % 100;
			return 1 === n && 11 !== a ? e.singularNominative.replace("{{count}}", t) : n >= 2 && n <= 4 && (a < 10 || a > 20) ? e.singularGenitive.replace("{{count}}", t) : e.pluralGenitive.replace("{{count}}", t)
		}
		function i(e) {
			return function(t, n) {
				return n.addSuffix ? n.comparison > 0 ? e.future ? a(e.future, t) : "через " + a(e.regular, t) : e.past ? a(e.past, t) : a(e.regular, t) + " назад": a(e.regular, t)
			}
		}
		function r(e, t, n) {
			return n = n || {},
			o[e](t, n)
		}
		t.a = r;
		var o = {
			lessThanXSeconds: i({
				regular: {
					one: "меньше секунды",
					singularNominative: "меньше {{count}} секунды",
					singularGenitive: "меньше {{count}} секунд",
					pluralGenitive: "меньше {{count}} секунд"
				},
				future: {
					one: "меньше, чем через секунду",
					singularNominative: "меньше, чем через {{count}} секунду",
					singularGenitive: "меньше, чем через {{count}} секунды",
					pluralGenitive: "меньше, чем через {{count}} секунд"
				}
			}),
			xSeconds: i({
				regular: {
					singularNominative: "{{count}} секунда",
					singularGenitive: "{{count}} секунды",
					pluralGenitive: "{{count}} секунд"
				},
				past: {
					singularNominative: "{{count}} секунду назад",
					singularGenitive: "{{count}} секунды назад",
					pluralGenitive: "{{count}} секунд назад"
				},
				future: {
					singularNominative: "через {{count}} секунду",
					singularGenitive: "через {{count}} секунды",
					pluralGenitive: "через {{count}} секунд"
				}
			}),
			halfAMinute: function(e, t) {
				return t.addSuffix ? t.comparison > 0 ? "через полминуты": "полминуты назад": "полминуты"
			},
			lessThanXMinutes: i({
				regular: {
					one: "меньше минуты",
					singularNominative: "меньше {{count}} минуты",
					singularGenitive: "меньше {{count}} минут",
					pluralGenitive: "меньше {{count}} минут"
				},
				future: {
					one: "меньше, чем через минуту",
					singularNominative: "меньше, чем через {{count}} минуту",
					singularGenitive: "меньше, чем через {{count}} минуты",
					pluralGenitive: "меньше, чем через {{count}} минут"
				}
			}),
			xMinutes: i({
				regular: {
					singularNominative: "{{count}} минута",
					singularGenitive: "{{count}} минуты",
					pluralGenitive: "{{count}} минут"
				},
				past: {
					singularNominative: "{{count}} минуту назад",
					singularGenitive: "{{count}} минуты назад",
					pluralGenitive: "{{count}} минут назад"
				},
				future: {
					singularNominative: "через {{count}} минуту",
					singularGenitive: "через {{count}} минуты",
					pluralGenitive: "через {{count}} минут"
				}
			}),
			aboutXHours: i({
				regular: {
					singularNominative: "около {{count}} часа",
					singularGenitive: "около {{count}} часов",
					pluralGenitive: "около {{count}} часов"
				},
				future: {
					singularNominative: "приблизительно через {{count}} час",
					singularGenitive: "приблизительно через {{count}} часа",
					pluralGenitive: "приблизительно через {{count}} часов"
				}
			}),
			xHours: i({
				regular: {
					singularNominative: "{{count}} час",
					singularGenitive: "{{count}} часа",
					pluralGenitive: "{{count}} часов"
				}
			}),
			xDays: i({
				regular: {
					singularNominative: "{{count}} день",
					singularGenitive: "{{count}} дня",
					pluralGenitive: "{{count}} дней"
				}
			}),
			aboutXWeeks: i({
				regular: {
					singularNominative: "около {{count}} недели",
					singularGenitive: "около {{count}} недель",
					pluralGenitive: "около {{count}} недель"
				},
				future: {
					singularNominative: "приблизительно через {{count}} неделю",
					singularGenitive: "приблизительно через {{count}} недели",
					pluralGenitive: "приблизительно через {{count}} недель"
				}
			}),
			xWeeks: i({
				regular: {
					singularNominative: "{{count}} неделя",
					singularGenitive: "{{count}} недели",
					pluralGenitive: "{{count}} недель"
				}
			}),
			aboutXMonths: i({
				regular: {
					singularNominative: "около {{count}} месяца",
					singularGenitive: "около {{count}} месяцев",
					pluralGenitive: "около {{count}} месяцев"
				},
				future: {
					singularNominative: "приблизительно через {{count}} месяц",
					singularGenitive: "приблизительно через {{count}} месяца",
					pluralGenitive: "приблизительно через {{count}} месяцев"
				}
			}),
			xMonths: i({
				regular: {
					singularNominative: "{{count}} месяц",
					singularGenitive: "{{count}} месяца",
					pluralGenitive: "{{count}} месяцев"
				}
			}),
			aboutXYears: i({
				regular: {
					singularNominative: "около {{count}} года",
					singularGenitive: "около {{count}} лет",
					pluralGenitive: "около {{count}} лет"
				},
				future: {
					singularNominative: "приблизительно через {{count}} год",
					singularGenitive: "приблизительно через {{count}} года",
					pluralGenitive: "приблизительно через {{count}} лет"
				}
			}),
			xYears: i({
				regular: {
					singularNominative: "{{count}} год",
					singularGenitive: "{{count}} года",
					pluralGenitive: "{{count}} лет"
				}
			}),
			overXYears: i({
				regular: {
					singularNominative: "больше {{count}} года",
					singularGenitive: "больше {{count}} лет",
					pluralGenitive: "больше {{count}} лет"
				},
				future: {
					singularNominative: "больше, чем через {{count}} год",
					singularGenitive: "больше, чем через {{count}} года",
					pluralGenitive: "больше, чем через {{count}} лет"
				}
			}),
			almostXYears: i({
				regular: {
					singularNominative: "почти {{count}} год",
					singularGenitive: "почти {{count}} года",
					pluralGenitive: "почти {{count}} лет"
				},
				future: {
					singularNominative: "почти через {{count}} год",
					singularGenitive: "почти через {{count}} года",
					pluralGenitive: "почти через {{count}} лет"
				}
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM y 'г.'",
			long: "do MMMM y 'г.'",
			medium: "d MMM y 'г.'",
			short: "dd.MM.y"
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			any: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "any"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = s[e];
			switch (e) {
			case 0:
				return "'в прошлое " + t + " в' p";
			case 1:
			case 2:
			case 4:
				return "'в прошлый " + t + " в' p";
			case 3:
			case 5:
			case 6:
				return "'в прошлую " + t + " в' p"
			}
		}
		function i(e) {
			var t = s[e];
			return 2 === e ? "'во " + t + " в' p": "'в " + t + " в' p"
		}
		function r(e) {
			var t = s[e];
			switch (e) {
			case 0:
				return "'в следующее " + t + " в' p";
			case 1:
			case 2:
			case 4:
				return "'в следующий " + t + " в' p";
			case 3:
			case 5:
			case 6:
				return "'в следующую " + t + " в' p"
			}
		}
		function o(e, t, n, a) {
			var i = d[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"],
		d = {
			lastWeek: function(e, t, n) {
				var r = e.getUTCDay();
				return u.a(e, t, n) ? i(r) : a(r)
			},
			yesterday: "'вчера в' p",
			today: "'сегодня в' p",
			tomorrow: "'завтра в' p",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return u.a(e, t, n) ? i(a) : r(a)
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n, a = t || {},
			i = String(a.unit);
			return n = "date" === i ? "-е": "week" === i || "minute" === i || "second" === i ? "-я": "-й",
			e + n
		}
		var i = n(3),
		r = {
			narrow: ["до н.э.", "н.э."],
			abbreviated: ["до н. э.", "н. э."],
			wide: ["до нашей эры", "нашей эры"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
			wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
		},
		u = {
			narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
			abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
			wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
		},
		s = {
			narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
			abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
			wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
		},
		d = {
			narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
			short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
			abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
			wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
		},
		c = {
			narrow: {
				am: "ДП",
				pm: "ПП",
				midnight: "полн.",
				noon: "полд.",
				morning: "утро",
				afternoon: "день",
				evening: "веч.",
				night: "ночь"
			},
			abbreviated: {
				am: "ДП",
				pm: "ПП",
				midnight: "полн.",
				noon: "полд.",
				morning: "утро",
				afternoon: "день",
				evening: "веч.",
				night: "ночь"
			},
			wide: {
				am: "ДП",
				pm: "ПП",
				midnight: "полночь",
				noon: "полдень",
				morning: "утро",
				afternoon: "день",
				evening: "вечер",
				night: "ночь"
			}
		},
		l = {
			narrow: {
				am: "ДП",
				pm: "ПП",
				midnight: "полн.",
				noon: "полд.",
				morning: "утра",
				afternoon: "дня",
				evening: "веч.",
				night: "ночи"
			},
			abbreviated: {
				am: "ДП",
				pm: "ПП",
				midnight: "полн.",
				noon: "полд.",
				morning: "утра",
				afternoon: "дня",
				evening: "веч.",
				night: "ночи"
			},
			wide: {
				am: "ДП",
				pm: "ПП",
				midnight: "полночь",
				noon: "полдень",
				morning: "утра",
				afternoon: "дня",
				evening: "вечера",
				night: "ночи"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide",
				formattingValues: s,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: c,
				defaultWidth: "any",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
		o = /\d+/i,
		u = {
			narrow: /^((до )?н\.?\s?э\.?)/i,
			abbreviated: /^((до )?н\.?\s?э\.?)/i,
			wide: /^(до нашей эры|нашей эры|наша эра)/i
		},
		s = {
			any: [/^д/i, /^н/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
			wide: /^[1234](-?[ыои]?й?)? квартал/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[яфмаисонд]/i,
			abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)/i,
			wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
		},
		m = {
			narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
			any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
		},
		f = {
			narrow: /^[впсч]/i,
			short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
			abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
			wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
		},
		h = {
			narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
			any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
		},
		p = {
			narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
			abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
			wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
		},
		g = {
			any: {
				am: /^дп/i,
				pm: /^пп/i,
				midnight: /^полн/i,
				noon: /^полд/i,
				morning: /^у/i,
				afternoon: /^д[ен]/i,
				evening: /^в/i,
				night: /^н/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "wide",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(766),
		i = n(767),
		r = n(768),
		o = n(769),
		u = n(770),
		s = {
			code: "sk",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return 1 === t ? e.one: t >= 2 && t <= 4 ? e.twoFour: e.other
		}
		function i(e, t, n) {
			var i = a(e, t);
			return (i[n] || i).replace("{{count}}", t)
		}
		function r(e) {
			return ["lessThan", "about", "over", "almost"].filter(function(t) {
				return !! e.match(new RegExp("^" + t))
			})[0]
		}
		function o(e) {
			var t = "";
			return "almost" === e && (t = "takmer"),
			"about" === e && (t = "približne"),
			t.length > 0 ? t + " ": ""
		}
		function u(e) {
			var t = "";
			return "lessThan" === e && (t = "menej než"),
			"over" === e && (t = "viac než"),
			t.length > 0 ? t + " ": ""
		}
		function s(e) {
			return e.charAt(0).toLowerCase() + e.slice(1)
		}
		function d(e, t, n) {
			n = n || {};
			var a = r(e) || "",
			d = s(e.substring(a.length)),
			l = c[d];
			return n.addSuffix ? n.comparison > 0 ? o(a) + "o " + u(a) + i(l, t, "future") : o(a) + "pred " + u(a) + i(l, t, "past") : o(a) + u(a) + i(l, t, "regular")
		}
		t.a = d;
		var c = {
			xSeconds: {
				one: {
					regular: "sekunda",
					past: "sekundou",
					future: "sekundu"
				},
				twoFour: {
					regular: "{{count}} sekundy",
					past: "{{count}} sekundami",
					future: "{{count}} sekundy"
				},
				other: {
					regular: "{{count}} sekúnd",
					past: "{{count}} sekundami",
					future: "{{count}} sekúnd"
				}
			},
			halfAMinute: {
				other: {
					regular: "pol minúty",
					past: "pol minútou",
					future: "pol minúty"
				}
			},
			xMinutes: {
				one: {
					regular: "minúta",
					past: "minútou",
					future: "minútu"
				},
				twoFour: {
					regular: "{{count}} minúty",
					past: "{{count}} minútami",
					future: "{{count}} minúty"
				},
				other: {
					regular: "{{count}} minút",
					past: "{{count}} minútami",
					future: "{{count}} minút"
				}
			},
			xHours: {
				one: {
					regular: "hodina",
					past: "hodinou",
					future: "hodinu"
				},
				twoFour: {
					regular: "{{count}} hodiny",
					past: "{{count}} hodinami",
					future: "{{count}} hodiny"
				},
				other: {
					regular: "{{count}} hodín",
					past: "{{count}} hodinami",
					future: "{{count}} hodín"
				}
			},
			xDays: {
				one: {
					regular: "deň",
					past: "dňom",
					future: "deň"
				},
				twoFour: {
					regular: "{{count}} dni",
					past: "{{count}} dňami",
					future: "{{count}} dni"
				},
				other: {
					regular: "{{count}} dní",
					past: "{{count}} dňami",
					future: "{{count}} dní"
				}
			},
			xWeeks: {
				one: {
					regular: "mesiac",
					past: "mesiacom",
					future: "mesiac"
				},
				twoFour: {
					regular: "{{count}} mesiace",
					past: "{{count}} mesiacmi",
					future: "{{count}} mesiace"
				},
				other: {
					regular: "{{count}} mesiacov",
					past: "{{count}} mesiacmi",
					future: "{{count}} mesiacov"
				}
			},
			xMonths: {
				one: {
					regular: "mesiac",
					past: "mesiacom",
					future: "mesiac"
				},
				twoFour: {
					regular: "{{count}} mesiace",
					past: "{{count}} mesiacmi",
					future: "{{count}} mesiace"
				},
				other: {
					regular: "{{count}} mesiacov",
					past: "{{count}} mesiacmi",
					future: "{{count}} mesiacov"
				}
			},
			xYears: {
				one: {
					regular: "rok",
					past: "rokom",
					future: "rok"
				},
				twoFour: {
					regular: "{{count}} roky",
					past: "{{count}} rokmi",
					future: "{{count}} roky"
				},
				other: {
					regular: "{{count}} rokov",
					past: "{{count}} rokmi",
					future: "{{count}} rokov"
				}
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d. MMMM y",
			long: "d. MMMM y",
			medium: "d. M. y",
			short: "d. M. y"
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			full: "{{date}}, {{time}}",
			long: "{{date}}, {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 6:
				return "'minulú " + t + " o' p";
			default:
				return "'minulý' eeee 'o' p"
			}
		}
		function i(e) {
			var t = s[e];
			return 4 === e ? "'vo' eeee 'o' p": "'v " + t + " o' p"
		}
		function r(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 4:
			case 6:
				return "'budúcu' " + t + " 'o' p";
			default:
				return "'budúci' eeee 'o' p"
			}
		}
		function o(e, t, n, a) {
			var i = d[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = ["nedeľu", "pondelok", "utorok", "stredu", "štvrtok", "piatok", "sobotu"],
		d = {
			lastWeek: function(e, t, n) {
				var r = e.getUTCDay();
				return u.a(e, t, n) ? i(r) : a(r)
			},
			yesterday: "'včera o' p",
			today: "'dnes o' p",
			tomorrow: "'zajtra o' p",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return u.a(e, t, n) ? i(a) : r(a)
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			narrow: ["pred Kr.", "po Kr."],
			abbreviated: ["pred Kr.", "po Kr."],
			wide: ["pred Kristom", "po Kristovi"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1. štvrťrok", "2. štvrťrok", "3. štvrťrok", "4. štvrťrok"]
		},
		u = {
			narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
			abbreviated: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
			wide: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"]
		},
		s = {
			narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
			abbreviated: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
			wide: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"]
		},
		d = {
			narrow: ["n", "p", "u", "s", "š", "p", "s"],
			short: ["ne", "po", "ut", "st", "št", "pi", "so"],
			abbreviated: ["ne", "po", "ut", "st", "št", "pi", "so"],
			wide: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"]
		},
		c = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "poln.",
				noon: "pol.",
				morning: "ráno",
				afternoon: "pop.",
				evening: "več.",
				night: "noc"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "poln.",
				noon: "pol.",
				morning: "ráno",
				afternoon: "popol.",
				evening: "večer",
				night: "noc"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "polnoc",
				noon: "poludnie",
				morning: "ráno",
				afternoon: "popoludnie",
				evening: "večer",
				night: "noc"
			}
		},
		l = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "o poln.",
				noon: "nap.",
				morning: "ráno",
				afternoon: "pop.",
				evening: "več.",
				night: "v n."
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "o poln.",
				noon: "napol.",
				morning: "ráno",
				afternoon: "popol.",
				evening: "večer",
				night: "v noci"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "o polnoci",
				noon: "napoludnie",
				morning: "ráno",
				afternoon: "popoludní",
				evening: "večer",
				night: "v noci"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide",
				formattingValues: s,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: c,
				defaultWidth: "wide",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)\.?/i,
		o = /\d+/i,
		u = {
			narrow: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
			abbreviated: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
			wide: /^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i
		},
		s = {
			any: [/^pr/i, /^(po|n)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234]\. [šs]tvr[ťt]rok/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,
			wide: /^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^m[áa]j/i, /^j[úu]n/i, /^j[úu]l/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[npusšp]/i,
			short: /^(ne|po|ut|st|št|pi|so)/i,
			abbreviated: /^(ne|po|ut|st|št|pi|so)/i,
			wide: /^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i
		},
		h = {
			narrow: [/^n/i, /^p/i, /^u/i, /^s/i, /^š/i, /^p/i, /^s/i],
			any: [/^n/i, /^po/i, /^u/i, /^st/i, /^(št|stv)/i, /^pi/i, /^so/i]
		},
		p = {
			narrow: /^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,
			abbreviated: /^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,
			any: /^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i
		},
		g = {
			any: {
				am: /^am/i,
				pm: /^pm/i,
				midnight: /poln/i,
				noon: /^(nap|(na)?pol(\.|u))/i,
				morning: /^r[áa]no/i,
				afternoon: /^pop/i,
				evening: /^ve[čc]/i,
				night: /^(noc|v n\.)/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(772),
		i = n(773),
		r = n(774),
		o = n(775),
		u = n(776),
		s = {
			code: "sl",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			switch (e % 100) {
			case 1:
				return "one";
			case 2:
				return "two";
			case 3:
			case 4:
				return "few";
			default:
				return "other"
			}
		}
		function i(e, t, n) {
			n = n || {};
			var i = r,
			s = "";
			if (n.addSuffix && (n.comparison > 0 ? (i = u, s += "čez ") : (i = o, s += "pred ")), "string" == typeof i[e]) s += i[e];
			else {
				var d = a(t);
				s += i[e][d].replace("{{count}}", t)
			}
			return s
		}
		t.a = i;
		var r = {
			lessThanXSeconds: {
				one: "manj kot {{count}} sekunda",
				two: "manj kot {{count}} sekundi",
				few: "manj kot {{count}} sekunde",
				other: "manj kot {{count}} sekund"
			},
			xSeconds: {
				one: "{{count}} sekunda",
				two: "{{count}} sekundi",
				few: "{{count}} sekunde",
				other: "{{count}} sekund"
			},
			halfAMinute: "pol minute",
			lessThanXMinutes: {
				one: "manj kot {{count}} minuta",
				two: "manj kot {{count}} minuti",
				few: "manj kot {{count}} minute",
				other: "manj kot {{count}} minut"
			},
			xMinutes: {
				one: "{{count}} minuta",
				two: "{{count}} minuti",
				few: "{{count}} minute",
				other: "{{count}} minut"
			},
			aboutXHours: {
				one: "približno {{count}} ura",
				two: "približno {{count}} uri",
				few: "približno {{count}} ure",
				other: "približno {{count}} ur"
			},
			xHours: {
				one: "{{count}} ura",
				two: "{{count}} uri",
				few: "{{count}} ure",
				other: "{{count}} ur"
			},
			xDays: {
				one: "{{count}} dan",
				two: "{{count}} dni",
				few: "{{count}} dni",
				other: "{{count}} dni"
			},
			aboutXWeeks: {
				one: "približno {{count}} teden",
				two: "približno {{count}} tedna",
				few: "približno {{count}} tedne",
				other: "približno {{count}} tednov"
			},
			xWeeks: {
				one: "{{count}} teden",
				two: "{{count}} tedna",
				few: "{{count}} tedne",
				other: "{{count}} tednov"
			},
			aboutXMonths: {
				one: "približno {{count}} mesec",
				two: "približno {{count}} meseca",
				few: "približno {{count}} mesece",
				other: "približno {{count}} mesecev"
			},
			xMonths: {
				one: "{{count}} mesec",
				two: "{{count}} meseca",
				few: "{{count}} meseci",
				other: "{{count}} mesecev"
			},
			aboutXYears: {
				one: "približno {{count}} leto",
				two: "približno {{count}} leti",
				few: "približno {{count}} leta",
				other: "približno {{count}} let"
			},
			xYears: {
				one: "{{count}} leto",
				two: "{{count}} leti",
				few: "{{count}} leta",
				other: "{{count}} let"
			},
			overXYears: {
				one: "več kot {{count}} leto",
				two: "več kot {{count}} leti",
				few: "več kot {{count}} leta",
				other: "več kot {{count}} let"
			},
			almostXYears: {
				one: "skoraj {{count}} leto",
				two: "skoraj {{count}} leti",
				few: "skoraj {{count}} leta",
				other: "skoraj {{count}} let"
			}
		},
		o = {
			lessThanXSeconds: {
				one: "manj kot {{count}} sekundo",
				two: "manj kot {{count}} sekundama",
				few: "manj kot {{count}} sekundami",
				other: "manj kot {{count}} sekundami"
			},
			xSeconds: {
				one: "{{count}} sekundo",
				two: "{{count}} sekundama",
				few: "{{count}} sekundami",
				other: "{{count}} sekundami"
			},
			halfAMinute: "pol minute",
			lessThanXMinutes: {
				one: "manj kot {{count}} minuto",
				two: "manj kot {{count}} minutama",
				few: "manj kot {{count}} minutami",
				other: "manj kot {{count}} minutami"
			},
			xMinutes: {
				one: "{{count}} minuto",
				two: "{{count}} minutama",
				few: "{{count}} minutami",
				other: "{{count}} minutami"
			},
			aboutXHours: {
				one: "približno {{count}} uro",
				two: "približno {{count}} urama",
				few: "približno {{count}} urami",
				other: "približno {{count}} urami"
			},
			xHours: {
				one: "{{count}} uro",
				two: "{{count}} urama",
				few: "{{count}} urami",
				other: "{{count}} urami"
			},
			xDays: {
				one: "{{count}} dnem",
				two: "{{count}} dnevoma",
				few: "{{count}} dnevi",
				other: "{{count}} dnevi"
			},
			aboutXMonths: {
				one: "približno {{count}} mesecem",
				two: "približno {{count}} mesecema",
				few: "približno {{count}} meseci",
				other: "približno {{count}} meseci"
			},
			xMonths: {
				one: "{{count}} mesecem",
				two: "{{count}} mesecema",
				few: "{{count}} meseci",
				other: "{{count}} meseci"
			},
			aboutXYears: {
				one: "približno {{count}} letom",
				two: "približno {{count}} letoma",
				few: "približno {{count}} leti",
				other: "približno {{count}} leti"
			},
			xYears: {
				one: "{{count}} letom",
				two: "{{count}} letoma",
				few: "{{count}} leti",
				other: "{{count}} leti"
			},
			overXYears: {
				one: "več kot {{count}} letom",
				two: "več kot {{count}} letoma",
				few: "več kot {{count}} leti",
				other: "več kot {{count}} leti"
			},
			almostXYears: {
				one: "skoraj {{count}} letom",
				two: "skoraj {{count}} letoma",
				few: "skoraj {{count}} leti",
				other: "skoraj {{count}} leti"
			}
		},
		u = {
			lessThanXSeconds: {
				one: "manj kot {{count}} sekundo",
				two: "manj kot {{count}} sekundi",
				few: "manj kot {{count}} sekunde",
				other: "manj kot {{count}} sekund"
			},
			xSeconds: {
				one: "{{count}} sekundo",
				two: "{{count}} sekundi",
				few: "{{count}} sekunde",
				other: "{{count}} sekund"
			},
			halfAMinute: "pol minute",
			lessThanXMinutes: {
				one: "manj kot {{count}} minuto",
				two: "manj kot {{count}} minuti",
				few: "manj kot {{count}} minute",
				other: "manj kot {{count}} minut"
			},
			xMinutes: {
				one: "{{count}} minuto",
				two: "{{count}} minuti",
				few: "{{count}} minute",
				other: "{{count}} minut"
			},
			aboutXHours: {
				one: "približno {{count}} uro",
				two: "približno {{count}} uri",
				few: "približno {{count}} ure",
				other: "približno {{count}} ur"
			},
			xHours: {
				one: "{{count}} uro",
				two: "{{count}} uri",
				few: "{{count}} ure",
				other: "{{count}} ur"
			},
			xDays: {
				one: "{{count}} dan",
				two: "{{count}} dni",
				few: "{{count}} dni",
				other: "{{count}} dni"
			},
			aboutXMonths: {
				one: "približno {{count}} mesec",
				two: "približno {{count}} meseca",
				few: "približno {{count}} mesece",
				other: "približno {{count}} mesecev"
			},
			xMonths: {
				one: "{{count}} mesec",
				two: "{{count}} meseca",
				few: "{{count}} mesece",
				other: "{{count}} mesecev"
			},
			aboutXYears: {
				one: "približno {{count}} leto",
				two: "približno {{count}} leti",
				few: "približno {{count}} leta",
				other: "približno {{count}} let"
			},
			xYears: {
				one: "{{count}} leto",
				two: "{{count}} leti",
				few: "{{count}} leta",
				other: "{{count}} let"
			},
			overXYears: {
				one: "več kot {{count}} leto",
				two: "več kot {{count}} leti",
				few: "več kot {{count}} leta",
				other: "več kot {{count}} let"
			},
			almostXYears: {
				one: "skoraj {{count}} leto",
				two: "skoraj {{count}} leti",
				few: "skoraj {{count}} leta",
				other: "skoraj {{count}} let"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, dd. MMMM y",
			long: "dd. MMMM y",
			medium: "d. MMM y",
			short: "d. MM. yy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var r = i[e];
			return "function" == typeof r ? r(t) : r
		}
		t.a = a;
		var i = {
			lastWeek: function(e) {
				switch (e.getUTCDay()) {
				case 0:
					return "'prejšnjo nedeljo ob' p";
				case 3:
					return "'prejšnjo sredo ob' p";
				case 6:
					return "'prejšnjo soboto ob' p";
				default:
					return "'prejšnji' EEEE 'ob' p"
				}
			},
			yesterday: "'včeraj ob' p",
			today: "'danes ob' p",
			tomorrow: "'jutri ob' p",
			nextWeek: function(e) {
				switch (e.getUTCDay()) {
				case 0:
					return "'naslednjo nedeljo ob' p";
				case 3:
					return "'naslednjo sredo ob' p";
				case 6:
					return "'naslednjo soboto ob' p";
				default:
					return "'naslednji' EEEE 'ob' p"
				}
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e);
			return String(t).concat(".")
		}
		var i = n(3),
		r = {
			narrow: ["pr. n. št.", "po n. št."],
			abbreviated: ["pr. n. št.", "po n. št."],
			wide: ["pred našim štetjem", "po našem štetju"]
		},
		o = {
			narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
			abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."],
			wide: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"]
		},
		u = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1. čet.", "2. čet.", "3. čet.", "4. čet."],
			wide: ["1. četrtletje", "2. četrtletje", "3. četrtletje", "4. četrtletje"]
		},
		s = {
			narrow: ["n", "p", "t", "s", "č", "p", "s"],
			short: ["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."],
			abbreviated: ["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."],
			wide: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"]
		},
		d = {
			narrow: {
				am: "d",
				pm: "p",
				midnight: "24.00",
				noon: "12.00",
				morning: "j",
				afternoon: "p",
				evening: "v",
				night: "n"
			},
			abbreviated: {
				am: "dop.",
				pm: "pop.",
				midnight: "poln.",
				noon: "pold.",
				morning: "jut.",
				afternoon: "pop.",
				evening: "več.",
				night: "noč"
			},
			wide: {
				am: "dop.",
				pm: "pop.",
				midnight: "polnoč",
				noon: "poldne",
				morning: "jutro",
				afternoon: "popoldne",
				evening: "večer",
				night: "noč"
			}
		},
		c = {
			narrow: {
				am: "d",
				pm: "p",
				midnight: "24.00",
				noon: "12.00",
				morning: "zj",
				afternoon: "p",
				evening: "zv",
				night: "po"
			},
			abbreviated: {
				am: "dop.",
				pm: "pop.",
				midnight: "opoln.",
				noon: "opold.",
				morning: "zjut.",
				afternoon: "pop.",
				evening: "zveč.",
				night: "ponoči"
			},
			wide: {
				am: "dop.",
				pm: "pop.",
				midnight: "opolnoči",
				noon: "opoldne",
				morning: "zjutraj",
				afternoon: "popoldan",
				evening: "zvečer",
				night: "ponoči"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: u,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: o,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)\./i,
		o = /\d+/i,
		u = {
			abbreviated: /^(pr\. n\. št\.|po n\. št\.)/i,
			wide: /^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i
		},
		s = {
			any: [/^pr/i, /^(po|na[sš]em)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]\.\s?[čc]et\.?/i,
			wide: /^[1234]\. [čc]etrtletje/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,
			wide: /^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			abbreviated: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i],
			wide: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[nptsčc]/i,
			short: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
			abbreviated: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
			wide: /^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i
		},
		h = {
			narrow: [/^n/i, /^p/i, /^t/i, /^s/i, /^[cč]/i, /^p/i, /^s/i],
			any: [/^n/i, /^po/i, /^t/i, /^sr/i, /^[cč]/i, /^pe/i, /^so/i]
		},
		p = {
			narrow: /^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,
			any: /^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i
		},
		g = {
			narrow: {
				am: /^d/i,
				pm: /^p/i,
				midnight: /^24/i,
				noon: /^12/i,
				morning: /^(z?j)/i,
				afternoon: /^p/i,
				evening: /^(z?v)/i,
				night: /^(n|po)/i
			},
			any: {
				am: /^dop\./i,
				pm: /^pop\./i,
				midnight: /^o?poln/i,
				noon: /^o?pold/i,
				morning: /j/i,
				afternoon: /^pop\./i,
				evening: /^z?ve/i,
				night: /(po)?no/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "wide"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(778),
		i = n(779),
		r = n(780),
		o = n(781),
		u = n(782),
		s = {
			code: "sr",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? n.addSuffix ? n.comparison > 0 ? i[e].one.withPrepositionIn: i[e].one.withPrepositionAgo: i[e].one.standalone: t % 10 > 1 && t % 10 < 5 && "1" !== String(t).substr( - 2, 1) ? i[e].dual.replace("{{count}}", t) : i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "за " + a: "пре " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: {
					standalone: "мање од 1 секунде",
					withPrepositionAgo: "мање од 1 секунде",
					withPrepositionIn: "мање од 1 секунду"
				},
				dual: "мање од {{count}} секунде",
				other: "мање од {{count}} секунди"
			},
			xSeconds: {
				one: {
					standalone: "1 секунда",
					withPrepositionAgo: "1 секунде",
					withPrepositionIn: "1 секунду"
				},
				dual: "{{count}} секунде",
				other: "{{count}} секунди"
			},
			halfAMinute: "пола минуте",
			lessThanXMinutes: {
				one: {
					standalone: "мање од 1 минуте",
					withPrepositionAgo: "мање од 1 минуте",
					withPrepositionIn: "мање од 1 минуту"
				},
				dual: "мање од {{count}} минуте",
				other: "мање од {{count}} минута"
			},
			xMinutes: {
				one: {
					standalone: "1 минута",
					withPrepositionAgo: "1 минуте",
					withPrepositionIn: "1 минуту"
				},
				dual: "{{count}} минуте",
				other: "{{count}} минута"
			},
			aboutXHours: {
				one: {
					standalone: "око 1 сат",
					withPrepositionAgo: "око 1 сат",
					withPrepositionIn: "око 1 сат"
				},
				dual: "око {{count}} сата",
				other: "око {{count}} сати"
			},
			xHours: {
				one: {
					standalone: "1 сат",
					withPrepositionAgo: "1 сат",
					withPrepositionIn: "1 сат"
				},
				dual: "{{count}} сата",
				other: "{{count}} сати"
			},
			xDays: {
				one: {
					standalone: "1 дан",
					withPrepositionAgo: "1 дан",
					withPrepositionIn: "1 дан"
				},
				dual: "{{count}} дана",
				other: "{{count}} дана"
			},
			aboutXWeeks: {
				one: {
					standalone: "око 1 недељу",
					withPrepositionAgo: "око 1 недељу",
					withPrepositionIn: "око 1 недељу"
				},
				dual: "око {{count}} недеље",
				other: "око {{count}} недеље"
			},
			xWeeks: {
				one: {
					standalone: "1 недељу",
					withPrepositionAgo: "1 недељу",
					withPrepositionIn: "1 недељу"
				},
				dual: "{{count}} недеље",
				other: "{{count}} недеље"
			},
			aboutXMonths: {
				one: {
					standalone: "око 1 месец",
					withPrepositionAgo: "око 1 месец",
					withPrepositionIn: "око 1 месец"
				},
				dual: "око {{count}} месеца",
				other: "око {{count}} месеци"
			},
			xMonths: {
				one: {
					standalone: "1 месец",
					withPrepositionAgo: "1 месец",
					withPrepositionIn: "1 месец"
				},
				dual: "{{count}} месеца",
				other: "{{count}} месеци"
			},
			aboutXYears: {
				one: {
					standalone: "око 1 годину",
					withPrepositionAgo: "око 1 годину",
					withPrepositionIn: "око 1 годину"
				},
				dual: "око {{count}} године",
				other: "око {{count}} година"
			},
			xYears: {
				one: {
					standalone: "1 година",
					withPrepositionAgo: "1 године",
					withPrepositionIn: "1 годину"
				},
				dual: "{{count}} године",
				other: "{{count}} година"
			},
			overXYears: {
				one: {
					standalone: "преко 1 годину",
					withPrepositionAgo: "преко 1 годину",
					withPrepositionIn: "преко 1 годину"
				},
				dual: "преко {{count}} године",
				other: "преко {{count}} година"
			},
			almostXYears: {
				one: {
					standalone: "готово 1 годину",
					withPrepositionAgo: "готово 1 годину",
					withPrepositionIn: "готово 1 годину"
				},
				dual: "готово {{count}} године",
				other: "готово {{count}} година"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d. MMMM yyyy.",
			long: "d. MMMM yyyy.",
			medium: "d. MMM yy.",
			short: "dd. MM. yy."
		},
		r = {
			full: "HH:mm:ss (zzzz)",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'у' {{time}}",
			long: "{{date}} 'у' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var r = i[e];
			return "function" == typeof r ? r(t) : r
		}
		t.a = a;
		var i = {
			lastWeek: function(e) {
				switch (e.getUTCDay()) {
				case 0:
					return "'прошле недеље у' p";
				case 3:
					return "'прошле среде у' p";
				case 6:
					return "'прошле суботе у' p";
				default:
					return "'прошли' EEEE 'у' p"
				}
			},
			yesterday: "'јуче у' p",
			today: "'данас у' p",
			tomorrow: "'сутра у' p",
			nextWeek: function(e) {
				switch (e.getUTCDay()) {
				case 0:
					return "'следеће недеље у' p";
				case 3:
					return "'следећу среду у' p";
				case 6:
					return "'следећу суботу у' p";
				default:
					return "'следећи' EEEE 'у' p"
				}
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e);
			return String(t).concat(".")
		}
		var i = n(3),
		r = {
			narrow: ["пр.н.е.", "АД"],
			abbreviated: ["пр. Хр.", "по. Хр."],
			wide: ["Пре Христа", "После Христа"]
		},
		o = {
			narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
			abbreviated: ["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"],
			wide: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"]
		},
		u = {
			narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
			abbreviated: ["јан", "феб", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "нов", "дец"],
			wide: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"]
		},
		s = {
			narrow: ["1.", "2.", "3.", "4."],
			abbreviated: ["1. кв.", "2. кв.", "3. кв.", "4. кв."],
			wide: ["1. квартал", "2. квартал", "3. квартал", "4. квартал"]
		},
		d = {
			narrow: ["Н", "П", "У", "С", "Ч", "П", "С"],
			short: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
			abbreviated: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
			wide: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"]
		},
		c = {
			narrow: {
				am: "АМ",
				pm: "ПМ",
				midnight: "поноћ",
				noon: "подне",
				morning: "ујутру",
				afternoon: "поподне",
				evening: "увече",
				night: "ноћу"
			},
			abbreviated: {
				am: "АМ",
				pm: "ПМ",
				midnight: "поноћ",
				noon: "подне",
				morning: "ујутру",
				afternoon: "поподне",
				evening: "увече",
				night: "ноћу"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "поноћ",
				noon: "подне",
				morning: "ујутру",
				afternoon: "после подне",
				evening: "увече",
				night: "ноћу"
			}
		},
		l = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "поноћ",
				noon: "подне",
				morning: "ујутру",
				afternoon: "поподне",
				evening: "увече",
				night: "ноћу"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "поноћ",
				noon: "подне",
				morning: "ујутру",
				afternoon: "поподне",
				evening: "увече",
				night: "ноћу"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "поноћ",
				noon: "подне",
				morning: "ујутру",
				afternoon: "после подне",
				evening: "увече",
				night: "ноћу"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: s,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: o,
				defaultWidth: "wide",
				formattingValues: u,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: l,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)\./i,
		o = /\d+/i,
		u = {
			narrow: /^(пр\.н\.е\.|АД)/i,
			abbreviated: /^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,
			wide: /^(Пре Христа|пре нове ере|После Христа|нова ера)/i
		},
		s = {
			any: [/^пр/i, /^(по|нова)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]\.\s?кв\.?/i,
			wide: /^[1234]\. квартал/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(10|11|12|[123456789])\./i,
			abbreviated: /^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,
			wide: /^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i
		},
		m = {
			narrow: [/(10|11|12|[123456789])/i],
			any: [/^ја/i, /^ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^авг/i, /^с/i, /^о/i, /^н/i, /^д/i]
		},
		f = {
			narrow: /^[пусчн]/i,
			short: /^(нед|пон|уто|сре|чет|пет|суб)/i,
			abbreviated: /^(нед|пон|уто|сре|чет|пет|суб)/i,
			wide: /^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i
		},
		h = {
			narrow: [/^п/i, /^у/i, /^с/i, /^ч/i, /^н/i],
			any: [/^нед/i, /^пон/i, /^уто/i, /^сре/i, /^чет/i, /^пет/i, /^суб/i]
		},
		p = {
			any: /^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^поно/i,
				noon: /^под/i,
				morning: /ујутру/i,
				afternoon: /(после\s|по)+подне/i,
				evening: /(увече)/i,
				night: /(ноћу)/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(784),
		i = n(785),
		r = n(786),
		o = n(787),
		u = n(788),
		s = {
			code: "sr-Latn",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? n.addSuffix ? n.comparison > 0 ? i[e].one.withPrepositionIn: i[e].one.withPrepositionAgo: i[e].one.standalone: t % 10 > 1 && t % 10 < 5 && "1" !== String(t).substr( - 2, 1) ? i[e].dual.replace("{{count}}", t) : i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "za " + a: "pre " + a: a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: {
					standalone: "manje od 1 sekunde",
					withPrepositionAgo: "manje od 1 sekunde",
					withPrepositionIn: "manje od 1 sekundu"
				},
				dual: "manje od {{count}} sekunde",
				other: "manje od {{count}} sekundi"
			},
			xSeconds: {
				one: {
					standalone: "1 sekunda",
					withPrepositionAgo: "1 sekunde",
					withPrepositionIn: "1 sekundu"
				},
				dual: "{{count}} sekunde",
				other: "{{count}} sekundi"
			},
			halfAMinute: "pola minute",
			lessThanXMinutes: {
				one: {
					standalone: "manje od 1 minute",
					withPrepositionAgo: "manje od 1 minute",
					withPrepositionIn: "manje od 1 minutu"
				},
				dual: "manje od {{count}} minute",
				other: "manje od {{count}} minuta"
			},
			xMinutes: {
				one: {
					standalone: "1 minuta",
					withPrepositionAgo: "1 minute",
					withPrepositionIn: "1 minutu"
				},
				dual: "{{count}} minute",
				other: "{{count}} minuta"
			},
			aboutXHours: {
				one: {
					standalone: "oko 1 sat",
					withPrepositionAgo: "oko 1 sat",
					withPrepositionIn: "oko 1 sat"
				},
				dual: "oko {{count}} sata",
				other: "oko {{count}} sati"
			},
			xHours: {
				one: {
					standalone: "1 sat",
					withPrepositionAgo: "1 sat",
					withPrepositionIn: "1 sat"
				},
				dual: "{{count}} sata",
				other: "{{count}} sati"
			},
			xDays: {
				one: {
					standalone: "1 dan",
					withPrepositionAgo: "1 dan",
					withPrepositionIn: "1 dan"
				},
				dual: "{{count}} dana",
				other: "{{count}} dana"
			},
			aboutXWeeks: {
				one: {
					standalone: "oko 1 nedelju",
					withPrepositionAgo: "oko 1 nedelju",
					withPrepositionIn: "oko 1 nedelju"
				},
				dual: "oko {{count}} nedelje",
				other: "oko {{count}} nedelje"
			},
			xWeeks: {
				one: {
					standalone: "1 nedelju",
					withPrepositionAgo: "1 nedelju",
					withPrepositionIn: "1 nedelju"
				},
				dual: "{{count}} nedelje",
				other: "{{count}} nedelje"
			},
			aboutXMonths: {
				one: {
					standalone: "oko 1 mesec",
					withPrepositionAgo: "oko 1 mesec",
					withPrepositionIn: "oko 1 mesec"
				},
				dual: "oko {{count}} meseca",
				other: "oko {{count}} meseci"
			},
			xMonths: {
				one: {
					standalone: "1 mesec",
					withPrepositionAgo: "1 mesec",
					withPrepositionIn: "1 mesec"
				},
				dual: "{{count}} meseca",
				other: "{{count}} meseci"
			},
			aboutXYears: {
				one: {
					standalone: "oko 1 godinu",
					withPrepositionAgo: "oko 1 godinu",
					withPrepositionIn: "oko 1 godinu"
				},
				dual: "oko {{count}} godine",
				other: "oko {{count}} godina"
			},
			xYears: {
				one: {
					standalone: "1 godina",
					withPrepositionAgo: "1 godine",
					withPrepositionIn: "1 godinu"
				},
				dual: "{{count}} godine",
				other: "{{count}} godina"
			},
			overXYears: {
				one: {
					standalone: "preko 1 godinu",
					withPrepositionAgo: "preko 1 godinu",
					withPrepositionIn: "preko 1 godinu"
				},
				dual: "preko {{count}} godine",
				other: "preko {{count}} godina"
			},
			almostXYears: {
				one: {
					standalone: "gotovo 1 godinu",
					withPrepositionAgo: "gotovo 1 godinu",
					withPrepositionIn: "gotovo 1 godinu"
				},
				dual: "gotovo {{count}} godine",
				other: "gotovo {{count}} godina"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d. MMMM yyyy.",
			long: "d. MMMM yyyy.",
			medium: "d. MMM yy.",
			short: "dd. MM. yy."
		},
		r = {
			full: "HH:mm:ss (zzzz)",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'u' {{time}}",
			long: "{{date}} 'u' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			var r = i[e];
			return "function" == typeof r ? r(t) : r
		}
		t.a = a;
		var i = {
			lastWeek: function(e) {
				switch (e.getUTCDay()) {
				case 0:
					return "'prošle nedelje u' p";
				case 3:
					return "'prošle srede u' p";
				case 6:
					return "'prošle subote u' p";
				default:
					return "'prošli' EEEE 'u' p"
				}
			},
			yesterday: "'juče u' p",
			today: "'danas u' p",
			tomorrow: "'sutra u' p",
			nextWeek: function(e) {
				switch (e.getUTCDay()) {
				case 0:
					return "'sledeće nedelje u' p";
				case 3:
					return "'sledeću sredu u' p";
				case 6:
					return "'sledeću subotu u' p";
				default:
					return "'sledeći' EEEE 'u' p"
				}
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e);
			return String(t).concat(".")
		}
		var i = n(3),
		r = {
			narrow: ["pr.n.e.", "AD"],
			abbreviated: ["pr. Hr.", "po. Hr."],
			wide: ["Pre Hrista", "Posle Hrista"]
		},
		o = {
			narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
			abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
			wide: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"]
		},
		u = {
			narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
			abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
			wide: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"]
		},
		s = {
			narrow: ["1.", "2.", "3.", "4."],
			abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
			wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
		},
		d = {
			narrow: ["N", "P", "U", "S", "Č", "P", "S"],
			short: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
			abbreviated: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
			wide: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"]
		},
		c = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutru",
				afternoon: "popodne",
				evening: "uveče",
				night: "noću"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutru",
				afternoon: "popodne",
				evening: "uveče",
				night: "noću"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutru",
				afternoon: "posle podne",
				evening: "uveče",
				night: "noću"
			}
		},
		l = {
			narrow: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutru",
				afternoon: "popodne",
				evening: "uveče",
				night: "noću"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutru",
				afternoon: "popodne",
				evening: "uveče",
				night: "noću"
			},
			wide: {
				am: "AM",
				pm: "PM",
				midnight: "ponoć",
				noon: "podne",
				morning: "ujutru",
				afternoon: "posle podne",
				evening: "uveče",
				night: "noću"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: s,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: o,
				defaultWidth: "wide",
				formattingValues: u,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: l,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(5),
		i = n(4),
		r = /^(\d+)\./i,
		o = /\d+/i,
		u = {
			narrow: /^(pr\.n\.e\.|AD)/i,
			abbreviated: /^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,
			wide: /^(Pre Hrista|pre nove ere|Posle Hrista|nova era)/i
		},
		s = {
			any: [/^pr/i, /^(po|nova)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]\.\s?kv\.?/i,
			wide: /^[1234]\. kvartal/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(10|11|12|[123456789])\./i,
			abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,
			wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i
		},
		m = {
			narrow: [/(10|11|12|[123456789])/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[npusčc]/i,
			short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
			abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
			wide: /^(nedelja|ponedeljak|utorak|sreda|(četvrtak|cetvrtak)|petak|subota)/i
		},
		h = {
			narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
			any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
		},
		p = {
			any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|posle podne|ujutru)/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^pono/i,
				noon: /^pod/i,
				morning: /jutro/i,
				afternoon: /(posle\s|po)+podne/i,
				evening: /(uvece|uveče)/i,
				night: /(nocu|noću)/i
			}
		},
		v = {
			ordinalNumber: i.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: a.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: a.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: a.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: a.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: a.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(790),
		i = n(791),
		r = n(792),
		o = n(793),
		u = n(794),
		s = {
			code: "sv",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {
				onlyNumeric: !1
			};
			var a, o = i[e];
			return a = "string" == typeof o ? o: 0 === t || t > 1 ? n.onlyNumeric ? o.plural.replace("{{count}}", t) : o.plural.replace("{{count}}", t < 13 ? r[t] : t) : o.singular,
			n.addSuffix ? n.comparison > 0 ? "om " + a: a + " sedan": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				singular: "mindre än en sekund",
				plural: "mindre än {{count}} sekunder"
			},
			xSeconds: {
				singular: "en sekund",
				plural: "{{count}} sekunder"
			},
			halfAMinute: "en halv minut",
			lessThanXMinutes: {
				singular: "mindre än en minut",
				plural: "mindre än {{count}} minuter"
			},
			xMinutes: {
				singular: "en minut",
				plural: "{{count}} minuter"
			},
			aboutXHours: {
				singular: "ungefär en timme",
				plural: "ungefär {{count}} timmar"
			},
			xHours: {
				singular: "en timme",
				plural: "{{count}} timmar"
			},
			xDays: {
				singular: "en dag",
				plural: "{{count}} dagar"
			},
			aboutXWeeks: {
				singular: "ungefär en vecka",
				plural: "ungefär {{count}} vecka"
			},
			xWeeks: {
				singular: "en vecka",
				plural: "{{count}} vecka"
			},
			aboutXMonths: {
				singular: "ungefär en månad",
				plural: "ungefär {{count}} månader"
			},
			xMonths: {
				singular: "en månad",
				plural: "{{count}} månader"
			},
			aboutXYears: {
				singular: "ungefär ett år",
				plural: "ungefär {{count}} år"
			},
			xYears: {
				singular: "ett år",
				plural: "{{count}} år"
			},
			overXYears: {
				singular: "över ett år",
				plural: "över {{count}} år"
			},
			almostXYears: {
				singular: "nästan ett år",
				plural: "nästan {{count}} år"
			}
		},
		r = ["noll", "en", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio", "elva", "tolv"]
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "y-MM-dd"
		},
		r = {
			full: "'kl'. HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'kl.' {{time}}",
			long: "{{date}} 'kl.' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'i' EEEE's kl.' p",
			yesterday: "'igår kl.' p",
			today: "'idag kl.' p",
			tomorrow: "'imorgon kl.' p",
			nextWeek: "EEEE 'kl.' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = Number(e),
			n = t % 100;
			if (n > 20 || n < 10) switch (n % 10) {
			case 1:
			case 2:
				return t + ":a"
			}
			return t + ":e"
		}
		var i = n(3),
		r = {
			narrow: ["f.Kr.", "e.Kr."],
			abbreviated: ["f.Kr.", "e.Kr."],
			wide: ["före Kristus", "efter Kristus"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"]
		},
		u = {
			narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
			abbreviated: ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."],
			wide: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
		},
		s = {
			narrow: ["S", "M", "T", "O", "T", "F", "L"],
			short: ["sö", "må", "ti", "on", "to", "fr", "lö"],
			abbreviated: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
			wide: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]
		},
		d = {
			narrow: {
				am: "fm",
				pm: "em",
				midnight: "midnatt",
				noon: "middag",
				morning: "morg.",
				afternoon: "efterm.",
				evening: "kväll",
				night: "natt"
			},
			abbreviated: {
				am: "f.m.",
				pm: "e.m.",
				midnight: "midnatt",
				noon: "middag",
				morning: "morgon",
				afternoon: "efterm.",
				evening: "kväll",
				night: "natt"
			},
			wide: {
				am: "förmiddag",
				pm: "eftermiddag",
				midnight: "midnatt",
				noon: "middag",
				morning: "morgon",
				afternoon: "eftermiddag",
				evening: "kväll",
				night: "natt"
			}
		},
		c = {
			narrow: {
				am: "fm",
				pm: "em",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morg.",
				afternoon: "på efterm.",
				evening: "på kvällen",
				night: "på natten"
			},
			abbreviated: {
				am: "fm",
				pm: "em",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morg.",
				afternoon: "på efterm.",
				evening: "på kvällen",
				night: "på natten"
			},
			wide: {
				am: "fm",
				pm: "em",
				midnight: "midnatt",
				noon: "middag",
				morning: "på morgonen",
				afternoon: "på eftermiddagen",
				evening: "på kvällen",
				night: "på natten"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(:a|:e)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
			abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
			wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i
		},
		s = {
			any: [/^f/i, /^[ev]/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](:a|:e)? kvartalet/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\.?/i,
			wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i
		},
		m = {
			narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[smtofl]/i,
			short: /^(sö|må|ti|on|to|fr|lö)/i,
			abbreviated: /^(sön|mån|tis|ons|tor|fre|lör)/i,
			wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
		},
		h = {
			any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
		},
		p = {
			any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i
		},
		g = {
			any: {
				am: /^f/i,
				pm: /^e/i,
				midnight: /^midn/i,
				noon: /^midd/i,
				morning: /morgon/i,
				afternoon: /eftermiddag/i,
				evening: /kväll/i,
				night: /natt/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(796),
		i = n(797),
		r = n(798),
		o = n(799),
		u = n(800),
		s = {
			code: "ta",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return t.addSuffix ? t.comparison > 0 ? e. in :e.ago: e.
		default
		}
		function i(e, t) {
			var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
			return n = r[e].
		default ? a(r[e], i) : 1 === t ? a(r[e].one, i) : a(r[e].other, i),
			n.replace("{{count}}", t)
		}
		t.a = i;
		var r = {
			lessThanXSeconds: {
				one: {
				default:
					"ஒரு வினாடிக்கு குறைவாக",
					in:"ஒரு வினாடிக்குள்",
					ago: "ஒரு வினாடிக்கு முன்பு"
				},
				other: {
				default:
					"{{count}} வினாடிகளுக்கு குறைவாக",
					in:"{{count}} வினாடிகளுக்குள்",
					ago: "{{count}} வினாடிகளுக்கு முன்பு"
				}
			},
			xSeconds: {
				one: {
				default:
					"1 வினாடி",
					in:"1 வினாடியில்",
					ago: "1 வினாடி முன்பு"
				},
				other: {
				default:
					"{{count}} விநாடிகள்",
					in:"{{count}} வினாடிகளில்",
					ago: "{{count}} விநாடிகளுக்கு முன்பு"
				}
			},
			halfAMinute: {
			default:
				"அரை நிமிடம்",
				in:"அரை நிமிடத்தில்",
				ago: "அரை நிமிடம் முன்பு"
			},
			lessThanXMinutes: {
				one: {
				default:
					"ஒரு நிமிடத்திற்கும் குறைவாக",
					in:"ஒரு நிமிடத்திற்குள்",
					ago: "ஒரு நிமிடத்திற்கு முன்பு"
				},
				other: {
				default:
					"{{count}} நிமிடங்களுக்கும் குறைவாக",
					in:"{{count}} நிமிடங்களுக்குள்",
					ago: "{{count}} நிமிடங்களுக்கு முன்பு"
				}
			},
			xMinutes: {
				one: {
				default:
					"1 நிமிடம்",
					in:"1 நிமிடத்தில்",
					ago: "1 நிமிடம் முன்பு"
				},
				other: {
				default:
					"{{count}} நிமிடங்கள்",
					in:"{{count}} நிமிடங்களில்",
					ago: "{{count}} நிமிடங்களுக்கு முன்பு"
				}
			},
			aboutXHours: {
				one: {
				default:
					"சுமார் 1 மணி நேரம்",
					in:"சுமார் 1 மணி நேரத்தில்",
					ago: "சுமார் 1 மணி நேரத்திற்கு முன்பு"
				},
				other: {
				default:
					"சுமார் {{count}} மணி நேரம்",
					in:"சுமார் {{count}} மணி நேரத்திற்கு முன்பு",
					ago: "சுமார் {{count}} மணி நேரத்தில்"
				}
			},
			xHours: {
				one: {
				default:
					"1 மணி நேரம்",
					in:"1 மணி நேரத்தில்",
					ago: "1 மணி நேரத்திற்கு முன்பு"
				},
				other: {
				default:
					"{{count}} மணி நேரம்",
					in:"{{count}} மணி நேரத்தில்",
					ago: "{{count}} மணி நேரத்திற்கு முன்பு"
				}
			},
			xDays: {
				one: {
				default:
					"1 நாள்",
					in:"1 நாளில்",
					ago: "1 நாள் முன்பு"
				},
				other: {
				default:
					"{{count}} நாட்கள்",
					in:"{{count}} நாட்களில்",
					ago: "{{count}} நாட்களுக்கு முன்பு"
				}
			},
			aboutXWeeks: {
				one: {
				default:
					"சுமார் 1 வாரம்",
					in:"சுமார் 1 வாரத்தில்",
					ago: "சுமார் 1 வாரம் முன்பு"
				},
				other: {
				default:
					"சுமார் {{count}} வாரங்கள்",
					in:"சுமார் {{count}} வாரங்களில்",
					ago: "சுமார் {{count}} வாரங்களுக்கு முன்பு"
				}
			},
			xWeeks: {
				one: {
				default:
					"1 வாரம்",
					in:"1 வாரத்தில்",
					ago: "1 வாரம் முன்பு"
				},
				other: {
				default:
					"{{count}} வாரங்கள்",
					in:"{{count}} வாரங்களில்",
					ago: "{{count}} வாரங்களுக்கு முன்பு"
				}
			},
			aboutXMonths: {
				one: {
				default:
					"சுமார் 1 மாதம்",
					in:"சுமார் 1 மாதத்தில்",
					ago: "சுமார் 1 மாதத்திற்கு முன்பு"
				},
				other: {
				default:
					"சுமார் {{count}} மாதங்கள்",
					in:"சுமார் {{count}} மாதங்களில்",
					ago: "சுமார் {{count}} மாதங்களுக்கு முன்பு"
				}
			},
			xMonths: {
				one: {
				default:
					"1 மாதம்",
					in:"1 மாதத்தில்",
					ago: "1 மாதம் முன்பு"
				},
				other: {
				default:
					"{{count}} மாதங்கள்",
					in:"{{count}} மாதங்களில்",
					ago: "{{count}} மாதங்களுக்கு முன்பு"
				}
			},
			aboutXYears: {
				one: {
				default:
					"சுமார் 1 வருடம்",
					in:"சுமார் 1 ஆண்டில்",
					ago: "சுமார் 1 வருடம் முன்பு"
				},
				other: {
				default:
					"சுமார் {{count}} ஆண்டுகள்",
					in:"சுமார் {{count}} ஆண்டுகளில்",
					ago: "சுமார் {{count}} ஆண்டுகளுக்கு முன்பு"
				}
			},
			xYears: {
				one: {
				default:
					"1 வருடம்",
					in:"1 ஆண்டில்",
					ago: "1 வருடம் முன்பு"
				},
				other: {
				default:
					"{{count}} ஆண்டுகள்",
					in:"{{count}} ஆண்டுகளில்",
					ago: "{{count}} ஆண்டுகளுக்கு முன்பு"
				}
			},
			overXYears: {
				one: {
				default:
					"1 வருடத்திற்கு மேல்",
					in:"1 வருடத்திற்கும் மேலாக",
					ago: "1 வருடம் முன்பு"
				},
				other: {
				default:
					"{{count}} ஆண்டுகளுக்கும் மேலாக",
					in:"{{count}} ஆண்டுகளில்",
					ago: "{{count}} ஆண்டுகளுக்கு முன்பு"
				}
			},
			almostXYears: {
				one: {
				default:
					"கிட்டத்தட்ட 1 வருடம்",
					in:"கிட்டத்தட்ட 1 ஆண்டில்",
					ago: "கிட்டத்தட்ட 1 வருடம் முன்பு"
				},
				other: {
				default:
					"கிட்டத்தட்ட {{count}} ஆண்டுகள்",
					in:"கிட்டத்தட்ட {{count}} ஆண்டுகளில்",
					ago: "கிட்டத்தட்ட {{count}} ஆண்டுகளுக்கு முன்பு"
				}
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, d MMMM, y",
			long: "d MMMM, y",
			medium: "d MMM, y",
			short: "d/M/yy"
		},
		r = {
			full: "a h:mm:ss zzzz",
			long: "a h:mm:ss z",
			medium: "a h:mm:ss",
			short: "a h:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'கடந்த' eeee p 'மணிக்கு'",
			yesterday: "'நேற்று ' p 'மணிக்கு'",
			today: "'இன்று ' p 'மணிக்கு'",
			tomorrow: "'நாளை ' p 'மணிக்கு'",
			nextWeek: "eeee p 'மணிக்கு'",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e)
		}
		var i = n(3),
		r = {
			narrow: ["கி.மு.", "கி.பி."],
			abbreviated: ["கி.மு.", "கி.பி."],
			wide: ["கிறிஸ்துவுக்கு முன்", "அன்னோ டோமினி"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["காலா.1", "காலா.2", "காலா.3", "காலா.4"],
			wide: ["ஒன்றாம் காலாண்டு", "இரண்டாம் காலாண்டு", "மூன்றாம் காலாண்டு", "நான்காம் காலாண்டு"]
		},
		u = {
			narrow: ["ஜ", "பி", "மா", "ஏ", "மே", "ஜூ", "ஜூ", "ஆ", "செ", "அ", "ந", "டி"],
			abbreviated: ["ஜன.", "பிப்.", "மார்.", "ஏப்.", "மே", "ஜூன்", "ஜூலை", "ஆக.", "செப்.", "அக்.", "நவ.", "டிச."],
			wide: ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"]
		},
		s = {
			narrow: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],
			short: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],
			abbreviated: ["ஞாயி.", "திங்.", "செவ்.", "புத.", "வியா.", "வெள்.", "சனி"],
			wide: ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"]
		},
		d = {
			narrow: {
				am: "மு.ப",
				pm: "பி.ப",
				midnight: "நள்.",
				noon: "நண்.",
				morning: "கா.",
				afternoon: "மதி.",
				evening: "மா.",
				night: "இர."
			},
			abbreviated: {
				am: "முற்பகல்",
				pm: "பிற்பகல்",
				midnight: "நள்ளிரவு",
				noon: "நண்பகல்",
				morning: "காலை",
				afternoon: "மதியம்",
				evening: "மாலை",
				night: "இரவு"
			},
			wide: {
				am: "முற்பகல்",
				pm: "பிற்பகல்",
				midnight: "நள்ளிரவு",
				noon: "நண்பகல்",
				morning: "காலை",
				afternoon: "மதியம்",
				evening: "மாலை",
				night: "இரவு"
			}
		},
		c = {
			narrow: {
				am: "மு.ப",
				pm: "பி.ப",
				midnight: "நள்.",
				noon: "நண்.",
				morning: "கா.",
				afternoon: "மதி.",
				evening: "மா.",
				night: "இர."
			},
			abbreviated: {
				am: "முற்பகல்",
				pm: "பிற்பகல்",
				midnight: "நள்ளிரவு",
				noon: "நண்பகல்",
				morning: "காலை",
				afternoon: "மதியம்",
				evening: "மாலை",
				night: "இரவு"
			},
			wide: {
				am: "முற்பகல்",
				pm: "பிற்பகல்",
				midnight: "நள்ளிரவு",
				noon: "நண்பகல்",
				morning: "காலை",
				afternoon: "மதியம்",
				evening: "மாலை",
				night: "இரவு"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(வது)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(கி.மு.|கி.பி.)/i,
			abbreviated: /^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/,
			wide: /^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i
		},
		s = {
			any: [/கி\.?\s?மு\.?/, /கி\.?\s?பி\.?/]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^காலா.[1234]/i,
			wide: /^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i
		},
		c = {
			narrow: [/1/i, /2/i, /3/i, /4/i],
			any: [/(1|காலா.1|ஒன்றாம்)/i, /(2|காலா.2|இரண்டாம்)/i, /(3|காலா.3|மூன்றாம்)/i, /(4|காலா.4|நான்காம்)/i]
		},
		l = {
			narrow: /^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i,
			abbreviated: /^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i,
			wide: /^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i
		},
		m = {
			narrow: [/^ஜ$/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூ/i, /^ஜூ/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i],
			any: [/^ஜன/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூன்/i, /^ஜூலை/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i]
		},
		f = {
			narrow: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
			short: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
			abbreviated: /^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i,
			wide: /^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i
		},
		h = {
			narrow: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i],
			any: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i]
		},
		p = {
			narrow: /^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i,
			any: /^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i
		},
		g = {
			any: {
				am: /^மு/i,
				pm: /^பி/i,
				midnight: /^நள்/i,
				noon: /^நண்/i,
				morning: /காலை/i,
				afternoon: /மதியம்/i,
				evening: /மாலை/i,
				night: /இரவு/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(802),
		i = n(803),
		r = n(804),
		o = n(805),
		u = n(806),
		s = {
			code: "te",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a, r = n.addSuffix ? i[e].withPreposition: i[e].standalone;
			return a = "string" == typeof r ? r: 1 === t ? r.one: r.other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + "లో": a + " క్రితం": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				standalone: {
					one: "సెకను కన్నా తక్కువ",
					other: "{{count}} సెకన్ల కన్నా తక్కువ"
				},
				withPreposition: {
					one: "సెకను",
					other: "{{count}} సెకన్ల"
				}
			},
			xSeconds: {
				standalone: {
					one: "ఒక సెకను",
					other: "{{count}} సెకన్ల"
				},
				withPreposition: {
					one: "ఒక సెకను",
					other: "{{count}} సెకన్ల"
				}
			},
			halfAMinute: {
				standalone: "అర నిమిషం",
				withPreposition: "అర నిమిషం"
			},
			lessThanXMinutes: {
				standalone: {
					one: "ఒక నిమిషం కన్నా తక్కువ",
					other: "{{count}} నిమిషాల కన్నా తక్కువ"
				},
				withPreposition: {
					one: "ఒక నిమిషం",
					other: "{{count}} నిమిషాల"
				}
			},
			xMinutes: {
				standalone: {
					one: "ఒక నిమిషం",
					other: "{{count}} నిమిషాలు"
				},
				withPreposition: {
					one: "ఒక నిమిషం",
					other: "{{count}} నిమిషాల"
				}
			},
			aboutXHours: {
				standalone: {
					one: "సుమారు ఒక గంట",
					other: "సుమారు {{count}} గంటలు"
				},
				withPreposition: {
					one: "సుమారు ఒక గంట",
					other: "సుమారు {{count}} గంటల"
				}
			},
			xHours: {
				standalone: {
					one: "ఒక గంట",
					other: "{{count}} గంటలు"
				},
				withPreposition: {
					one: "ఒక గంట",
					other: "{{count}} గంటల"
				}
			},
			xDays: {
				standalone: {
					one: "ఒక రోజు",
					other: "{{count}} రోజులు"
				},
				withPreposition: {
					one: "ఒక రోజు",
					other: "{{count}} రోజుల"
				}
			},
			aboutXWeeks: {
				standalone: {
					one: "సుమారు ఒక వారం",
					other: "సుమారు {{count}} వారాలు"
				},
				withPreposition: {
					one: "సుమారు ఒక వారం",
					other: "సుమారు {{count}} వారాలల"
				}
			},
			xWeeks: {
				standalone: {
					one: "ఒక వారం",
					other: "{{count}} వారాలు"
				},
				withPreposition: {
					one: "ఒక వారం",
					other: "{{count}} వారాలల"
				}
			},
			aboutXMonths: {
				standalone: {
					one: "సుమారు ఒక నెల",
					other: "సుమారు {{count}} నెలలు"
				},
				withPreposition: {
					one: "సుమారు ఒక నెల",
					other: "సుమారు {{count}} నెలల"
				}
			},
			xMonths: {
				standalone: {
					one: "ఒక నెల",
					other: "{{count}} నెలలు"
				},
				withPreposition: {
					one: "ఒక నెల",
					other: "{{count}} నెలల"
				}
			},
			aboutXYears: {
				standalone: {
					one: "సుమారు ఒక సంవత్సరం",
					other: "సుమారు {{count}} సంవత్సరాలు"
				},
				withPreposition: {
					one: "సుమారు ఒక సంవత్సరం",
					other: "సుమారు {{count}} సంవత్సరాల"
				}
			},
			xYears: {
				standalone: {
					one: "ఒక సంవత్సరం",
					other: "{{count}} సంవత్సరాలు"
				},
				withPreposition: {
					one: "ఒక సంవత్సరం",
					other: "{{count}} సంవత్సరాల"
				}
			},
			overXYears: {
				standalone: {
					one: "ఒక సంవత్సరం పైగా",
					other: "{{count}} సంవత్సరాలకు పైగా"
				},
				withPreposition: {
					one: "ఒక సంవత్సరం",
					other: "{{count}} సంవత్సరాల"
				}
			},
			almostXYears: {
				standalone: {
					one: "దాదాపు ఒక సంవత్సరం",
					other: "దాదాపు {{count}} సంవత్సరాలు"
				},
				withPreposition: {
					one: "దాదాపు ఒక సంవత్సరం",
					other: "దాదాపు {{count}} సంవత్సరాల"
				}
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "d, MMMM y, EEEE",
			long: "d MMMM, y",
			medium: "d MMM, y",
			short: "dd-MM-yy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} {{time}}'కి'",
			long: "{{date}} {{time}}'కి'",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'గత' eeee p",
			yesterday: "'నిన్న' p",
			today: "'ఈ రోజు' p",
			tomorrow: "'రేపు' p",
			nextWeek: "'తదుపరి' eeee p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "వ"
		}
		var i = n(3),
		r = {
			narrow: ["క్రీ.పూ.", "క్రీ.శ."],
			abbreviated: ["క్రీ.పూ.", "క్రీ.శ."],
			wide: ["క్రీస్తు పూర్వం", "క్రీస్తుశకం"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["త్రై1", "త్రై2", "త్రై3", "త్రై4"],
			wide: ["1వ త్రైమాసికం", "2వ త్రైమాసికం", "3వ త్రైమాసికం", "4వ త్రైమాసికం"]
		},
		u = {
			narrow: ["జ", "ఫి", "మా", "ఏ", "మే", "జూ", "జు", "ఆ", "సె", "అ", "న", "డి"],
			abbreviated: ["జన", "ఫిబ్ర", "మార్చి", "ఏప్రి", "మే", "జూన్", "జులై", "ఆగ", "సెప్టెం", "అక్టో", "నవం", "డిసెం"],
			wide: ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జులై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"]
		},
		s = {
			narrow: ["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"],
			short: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"],
			abbreviated: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"],
			wide: ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"]
		},
		d = {
			narrow: {
				am: "పూర్వాహ్నం",
				pm: "అపరాహ్నం",
				midnight: "అర్ధరాత్రి",
				noon: "మిట్టమధ్యాహ్నం",
				morning: "ఉదయం",
				afternoon: "మధ్యాహ్నం",
				evening: "సాయంత్రం",
				night: "రాత్రి"
			},
			abbreviated: {
				am: "పూర్వాహ్నం",
				pm: "అపరాహ్నం",
				midnight: "అర్ధరాత్రి",
				noon: "మిట్టమధ్యాహ్నం",
				morning: "ఉదయం",
				afternoon: "మధ్యాహ్నం",
				evening: "సాయంత్రం",
				night: "రాత్రి"
			},
			wide: {
				am: "పూర్వాహ్నం",
				pm: "అపరాహ్నం",
				midnight: "అర్ధరాత్రి",
				noon: "మిట్టమధ్యాహ్నం",
				morning: "ఉదయం",
				afternoon: "మధ్యాహ్నం",
				evening: "సాయంత్రం",
				night: "రాత్రి"
			}
		},
		c = {
			narrow: {
				am: "పూర్వాహ్నం",
				pm: "అపరాహ్నం",
				midnight: "అర్ధరాత్రి",
				noon: "మిట్టమధ్యాహ్నం",
				morning: "ఉదయం",
				afternoon: "మధ్యాహ్నం",
				evening: "సాయంత్రం",
				night: "రాత్రి"
			},
			abbreviated: {
				am: "పూర్వాహ్నం",
				pm: "అపరాహ్నం",
				midnight: "అర్ధరాత్రి",
				noon: "మిట్టమధ్యాహ్నం",
				morning: "ఉదయం",
				afternoon: "మధ్యాహ్నం",
				evening: "సాయంత్రం",
				night: "రాత్రి"
			},
			wide: {
				am: "పూర్వాహ్నం",
				pm: "అపరాహ్నం",
				midnight: "అర్ధరాత్రి",
				noon: "మిట్టమధ్యాహ్నం",
				morning: "ఉదయం",
				afternoon: "మధ్యాహ్నం",
				evening: "సాయంత్రం",
				night: "రాత్రి"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(వ)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(క్రీ\.పూ\.|క్రీ\.శ\.)/i,
			abbreviated: /^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i,
			wide: /^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i
		},
		s = {
			any: [/^(పూ|శ)/i, /^సా/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^త్రై[1234]/i,
			wide: /^[1234](వ)? త్రైమాసికం/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i,
			abbreviated: /^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i,
			wide: /^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i
		},
		m = {
			narrow: [/^జ/i, /^ఫి/i, /^మా/i, /^ఏ/i, /^మే/i, /^జూ/i, /^జు/i, /^ఆ/i, /^సె/i, /^అ/i, /^న/i, /^డి/i],
			any: [/^జన/i, /^ఫి/i, /^మా/i, /^ఏ/i, /^మే/i, /^జూన్/i, /^జులై/i, /^ఆగ/i, /^సె/i, /^అ/i, /^న/i, /^డి/i]
		},
		f = {
			narrow: /^(ఆ|సో|మ|బు|గు|శు|శ)/i,
			short: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,
			abbreviated: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,
			wide: /^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i
		},
		h = {
			narrow: [/^ఆ/i, /^సో/i, /^మ/i, /^బు/i, /^గు/i, /^శు/i, /^శ/i],
			any: [/^ఆది/i, /^సోమ/i, /^మం/i, /^బుధ/i, /^గురు/i, /^శుక్ర/i, /^శని/i]
		},
		p = {
			narrow: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,
			any: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i
		},
		g = {
			any: {
				am: /^పూర్వాహ్నం/i,
				pm: /^అపరాహ్నం/i,
				midnight: /^అర్ధ/i,
				noon: /^మిట్ట/i,
				morning: /ఉదయం/i,
				afternoon: /మధ్యాహ్నం/i,
				evening: /సాయంత్రం/i,
				night: /రాత్రి/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(808),
		i = n(809),
		r = n(810),
		o = n(811),
		u = n(812),
		s = {
			code: "th",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? "halfAMinute" === e ? "ใน" + a: "ใน " + a: a + "ที่ผ่านมา": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "น้อยกว่า 1 วินาที",
				other: "น้อยกว่า {{count}} วินาที"
			},
			xSeconds: {
				one: "1 วินาที",
				other: "{{count}} วินาที"
			},
			halfAMinute: "ครึ่งนาที",
			lessThanXMinutes: {
				one: "น้อยกว่า 1 นาที",
				other: "น้อยกว่า {{count}} นาที"
			},
			xMinutes: {
				one: "1 นาที",
				other: "{{count}} นาที"
			},
			aboutXHours: {
				one: "ประมาณ 1 ชั่วโมง",
				other: "ประมาณ {{count}} ชั่วโมง"
			},
			xHours: {
				one: "1 ชั่วโมง",
				other: "{{count}} ชั่วโมง"
			},
			xDays: {
				one: "1 วัน",
				other: "{{count}} วัน"
			},
			aboutXWeeks: {
				one: "ประมาณ 1 สัปดาห์",
				other: "ประมาณ {{count}} สัปดาห์"
			},
			xWeeks: {
				one: "1 สัปดาห์",
				other: "{{count}} สัปดาห์"
			},
			aboutXMonths: {
				one: "ประมาณ 1 เดือน",
				other: "ประมาณ {{count}} เดือน"
			},
			xMonths: {
				one: "1 เดือน",
				other: "{{count}} เดือน"
			},
			aboutXYears: {
				one: "ประมาณ 1 ปี",
				other: "ประมาณ {{count}} ปี"
			},
			xYears: {
				one: "1 ปี",
				other: "{{count}} ปี"
			},
			overXYears: {
				one: "มากกว่า 1 ปี",
				other: "มากกว่า {{count}} ปี"
			},
			almostXYears: {
				one: "เกือบ 1 ปี",
				other: "เกือบ {{count}} ปี"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "วันEEEEที่ do MMMM y",
			long: "do MMMM y",
			medium: "d MMM y",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "H:mm:ss น. zzzz",
			long: "H:mm:ss น. z",
			medium: "H:mm:ss น.",
			short: "H:mm น."
		},
		o = {
			full: "{{date}} 'เวลา' {{time}}",
			long: "{{date}} 'เวลา' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "medium"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee'ที่แล้วเวลา' p",
			yesterday: "'เมื่อวานนี้เวลา' p",
			today: "'วันนี้เวลา' p",
			tomorrow: "'พรุ่งนี้เวลา' p",
			nextWeek: "eeee 'เวลา' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			return Number(e)
		}
		var i = n(3),
		r = {
			narrow: ["B", "คศ"],
			abbreviated: ["BC", "ค.ศ."],
			wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["ไตรมาสแรก", "ไตรมาสที่สอง", "ไตรมาสที่สาม", "ไตรมาสที่สี่"]
		},
		u = {
			narrow: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
			short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
			abbreviated: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
			wide: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
		},
		s = {
			narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
			abbreviated: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
			wide: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
		},
		d = {
			narrow: {
				am: "ก่อนเที่ยง",
				pm: "หลังเที่ยง",
				midnight: "เที่ยงคืน",
				noon: "เที่ยง",
				morning: "เช้า",
				afternoon: "บ่าย",
				evening: "เย็น",
				night: "กลางคืน"
			},
			abbreviated: {
				am: "ก่อนเที่ยง",
				pm: "หลังเที่ยง",
				midnight: "เที่ยงคืน",
				noon: "เที่ยง",
				morning: "เช้า",
				afternoon: "บ่าย",
				evening: "เย็น",
				night: "กลางคืน"
			},
			wide: {
				am: "ก่อนเที่ยง",
				pm: "หลังเที่ยง",
				midnight: "เที่ยงคืน",
				noon: "เที่ยง",
				morning: "เช้า",
				afternoon: "บ่าย",
				evening: "เย็น",
				night: "กลางคืน"
			}
		},
		c = {
			narrow: {
				am: "ก่อนเที่ยง",
				pm: "หลังเที่ยง",
				midnight: "เที่ยงคืน",
				noon: "เที่ยง",
				morning: "ตอนเช้า",
				afternoon: "ตอนกลางวัน",
				evening: "ตอนเย็น",
				night: "ตอนกลางคืน"
			},
			abbreviated: {
				am: "ก่อนเที่ยง",
				pm: "หลังเที่ยง",
				midnight: "เที่ยงคืน",
				noon: "เที่ยง",
				morning: "ตอนเช้า",
				afternoon: "ตอนกลางวัน",
				evening: "ตอนเย็น",
				night: "ตอนกลางคืน"
			},
			wide: {
				am: "ก่อนเที่ยง",
				pm: "หลังเที่ยง",
				midnight: "เที่ยงคืน",
				noon: "เที่ยง",
				morning: "ตอนเช้า",
				afternoon: "ตอนกลางวัน",
				evening: "ตอนเย็น",
				night: "ตอนกลางคืน"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^\d+/i,
		o = /\d+/i,
		u = {
			narrow: /^([bB]|[aA]|คศ)/i,
			abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
			wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
		},
		s = {
			any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^ไตรมาส(ที่)? ?[1234]/i
		},
		c = {
			any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]
		},
		l = {
			narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
			abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
			wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
		},
		m = {
			wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i],
			any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i]
		},
		f = {
			narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
			short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
			abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
			wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
		},
		h = {
			wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
			any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i]
		},
		p = {
			any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i
		},
		g = {
			any: {
				am: /^ก่อนเที่ยง/i,
				pm: /^หลังเที่ยง/i,
				midnight: /^เที่ยงคืน/i,
				noon: /^เที่ยง/i,
				morning: /เช้า/i,
				afternoon: /บ่าย/i,
				evening: /เย็น/i,
				night: /กลางคืน/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(814),
		i = n(815),
		r = n(816),
		o = n(817),
		u = n(818),
		s = {
			code: "tr",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + " sonra": a + " önce": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "bir saniyeden az",
				other: "{{count}} saniyeden az"
			},
			xSeconds: {
				one: "1 saniye",
				other: "{{count}} saniye"
			},
			halfAMinute: "yarım dakika",
			lessThanXMinutes: {
				one: "bir dakikadan az",
				other: "{{count}} dakikadan az"
			},
			xMinutes: {
				one: "1 dakika",
				other: "{{count}} dakika"
			},
			aboutXHours: {
				one: "yaklaşık 1 saat",
				other: "yaklaşık {{count}} saat"
			},
			xHours: {
				one: "1 saat",
				other: "{{count}} saat"
			},
			xDays: {
				one: "1 gün",
				other: "{{count}} gün"
			},
			aboutXWeeks: {
				one: "yaklaşık 1 hafta",
				other: "yaklaşık {{count}} hafta"
			},
			xWeeks: {
				one: "1 hafta",
				other: "{{count}} hafta"
			},
			aboutXMonths: {
				one: "yaklaşık 1 ay",
				other: "yaklaşık {{count}} ay"
			},
			xMonths: {
				one: "1 ay",
				other: "{{count}} ay"
			},
			aboutXYears: {
				one: "yaklaşık 1 yıl",
				other: "yaklaşık {{count}} yıl"
			},
			xYears: {
				one: "1 yıl",
				other: "{{count}} yıl"
			},
			overXYears: {
				one: "1 yıldan fazla",
				other: "{{count}} yıldan fazla"
			},
			almostXYears: {
				one: "neredeyse 1 yıl",
				other: "neredeyse {{count}} yıl"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "d MMMM y EEEE",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd.MM.yyyy"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} 'saat' {{time}}",
			long: "{{date}} 'saat' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'geçen hafta' eeee 'saat' p",
			yesterday: "'dün saat' p",
			today: "'bugün saat' p",
			tomorrow: "'yarın saat' p",
			nextWeek: "eeee 'saat' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e) + "."
		}
		var i = n(3),
		r = {
			abbreviated: ["MÖ", "MS"],
			narrow: ["MÖ", "MS"],
			wide: ["Milattan Önce", "Milattan Sonra"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1Ç", "2Ç", "3Ç", "4Ç"],
			wide: ["İlk çeyrek", "İkinci Çeyrek", "Üçüncü çeyrek", "Son çeyrek"]
		},
		u = {
			narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
			abbreviated: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
			wide: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
		},
		s = {
			narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
			short: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
			abbreviated: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
			wide: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
		},
		d = {
			narrow: {
				am: "öö",
				pm: "ös",
				midnight: "gy",
				noon: "ö",
				morning: "sa",
				afternoon: "ös",
				evening: "ak",
				night: "ge"
			},
			abbreviated: {
				am: "ÖÖ",
				pm: "ÖS",
				midnight: "gece yarısı",
				noon: "öğle",
				morning: "sabah",
				afternoon: "öğleden sonra",
				evening: "akşam",
				night: "gece"
			},
			wide: {
				am: "Ö.Ö.",
				pm: "Ö.S.",
				midnight: "gece yarısı",
				noon: "öğle",
				morning: "sabah",
				afternoon: "öğleden sonra",
				evening: "akşam",
				night: "gece"
			}
		},
		c = {
			narrow: {
				am: "öö",
				pm: "ös",
				midnight: "gy",
				noon: "ö",
				morning: "sa",
				afternoon: "ös",
				evening: "ak",
				night: "ge"
			},
			abbreviated: {
				am: "ÖÖ",
				pm: "ÖS",
				midnight: "gece yarısı",
				noon: "öğlen",
				morning: "sabahleyin",
				afternoon: "öğleden sonra",
				evening: "akşamleyin",
				night: "geceleyin"
			},
			wide: {
				am: "ö.ö.",
				pm: "ö.s.",
				midnight: "gece yarısı",
				noon: "öğlen",
				morning: "sabahleyin",
				afternoon: "öğleden sonra",
				evening: "akşamleyin",
				night: "geceleyin"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaulFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(\.)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(mö|ms)/i,
			abbreviated: /^(mö|ms)/i,
			wide: /^(milattan önce|milattan sonra)/i
		},
		s = {
			any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234]ç/i,
			wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i],
			abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
			wide: [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i]
		},
		l = {
			narrow: /^[oşmnhtaek]/i,
			abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
			wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
		},
		m = {
			narrow: [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i],
			any: [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i]
		},
		f = {
			narrow: /^[psçc]/i,
			short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
			abbreviated: /^(paz|pts|sal|çar|per|cum|cts)/i,
			wide: /^(pazar|pazartesi|salı|çarşamba|perşembe|cuma|cumartesi)/i
		},
		h = {
			narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
			any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
			wide: [/^pazar/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma/i, /cumartesi/i]
		},
		p = {
			narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
			any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
		},
		g = {
			any: {
				am: /^ö\.?ö\.?/i,
				pm: /^ö\.?s\.?/i,
				midnight: /^(gy|gece yarısı)/i,
				noon: /^öğ/i,
				morning: /^sa/i,
				afternoon: /^öğleden sonra/i,
				evening: /^ak/i,
				night: /^ge/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(820),
		i = n(821),
		r = n(822),
		o = n(823),
		u = n(824),
		s = {
			code: "ug",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 0,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a: a + " بولدى": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "بىر سىكۇنت ئىچىدە",
				other: "سىكۇنت ئىچىدە {{count}}"
			},
			xSeconds: {
				one: "بىر سىكۇنت",
				other: "سىكۇنت {{count}}"
			},
			halfAMinute: "يىرىم مىنۇت",
			lessThanXMinutes: {
				one: "بىر مىنۇت ئىچىدە",
				other: "مىنۇت ئىچىدە {{count}}"
			},
			xMinutes: {
				one: "بىر مىنۇت",
				other: "مىنۇت {{count}}"
			},
			aboutXHours: {
				one: "تەخمىنەن بىر سائەت",
				other: "سائەت {{count}} تەخمىنەن"
			},
			xHours: {
				one: "بىر سائەت",
				other: "سائەت {{count}}"
			},
			xDays: {
				one: "بىر كۈن",
				other: "كۈن {{count}}"
			},
			aboutXWeeks: {
				one: "تەخمىنەن بىرھەپتە",
				other: "ھەپتە {{count}} تەخمىنەن"
			},
			xWeeks: {
				one: "بىرھەپتە",
				other: "ھەپتە {{count}}"
			},
			aboutXMonths: {
				one: "تەخمىنەن بىر ئاي",
				other: "ئاي {{count}} تەخمىنەن"
			},
			xMonths: {
				one: "بىر ئاي",
				other: "ئاي {{count}}"
			},
			aboutXYears: {
				one: "تەخمىنەن بىر يىل",
				other: "يىل {{count}} تەخمىنەن"
			},
			xYears: {
				one: "بىر يىل",
				other: "يىل {{count}}"
			},
			overXYears: {
				one: "بىر يىلدىن ئارتۇق",
				other: "يىلدىن ئارتۇق {{count}}"
			},
			almostXYears: {
				one: "ئاساسەن بىر يىل",
				other: "يىل {{count}} ئاساسەن"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		r = {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		o = {
			full: "{{date}} 'دە' {{time}}",
			long: "{{date}} 'دە' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'ئ‍ۆتكەن' eeee 'دە' p",
			yesterday: "'تۈنۈگۈن دە' p",
			today: "'بۈگۈن دە' p",
			tomorrow: "'ئەتە دە' p",
			nextWeek: "eeee 'دە' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return String(e)
		}
		var i = n(3),
		r = {
			narrow: ["ب", "ك"],
			abbreviated: ["ب", "ك"],
			wide: ["مىيلادىدىن بۇرۇن", "مىيلادىدىن كىيىن"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1", "2", "3", "4"],
			wide: ["بىرىنجى چارەك", "ئىككىنجى چارەك", "ئۈچىنجى چارەك", "تۆتىنجى چارەك"]
		},
		u = {
			narrow: ["ي", "ف", "م", "ا", "م", "ى", "ى", "ا", "س", "ۆ", "ن", "د"],
			abbreviated: ["يانۋار", "فېۋىرال", "مارت", "ئاپرىل", "ماي", "ئىيۇن", "ئىيول", "ئاۋغۇست", "سىنتەبىر", "ئۆكتەبىر", "نويابىر", "دىكابىر"],
			wide: ["يانۋار", "فېۋىرال", "مارت", "ئاپرىل", "ماي", "ئىيۇن", "ئىيول", "ئاۋغۇست", "سىنتەبىر", "ئۆكتەبىر", "نويابىر", "دىكابىر"]
		},
		s = {
			narrow: ["ي", "د", "س", "چ", "پ", "ج", "ش"],
			short: ["ي", "د", "س", "چ", "پ", "ج", "ش"],
			abbreviated: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"],
			wide: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"]
		},
		d = {
			narrow: {
				am: "ئە",
				pm: "چ",
				midnight: "ك",
				noon: "چ",
				morning: "ئەتىگەن",
				afternoon: "چۈشتىن كىيىن",
				evening: "ئاخشىم",
				night: "كىچە"
			},
			abbreviated: {
				am: "ئە",
				pm: "چ",
				midnight: "ك",
				noon: "چ",
				morning: "ئەتىگەن",
				afternoon: "چۈشتىن كىيىن",
				evening: "ئاخشىم",
				night: "كىچە"
			},
			wide: {
				am: "ئە",
				pm: "چ",
				midnight: "ك",
				noon: "چ",
				morning: "ئەتىگەن",
				afternoon: "چۈشتىن كىيىن",
				evening: "ئاخشىم",
				night: "كىچە"
			}
		},
		c = {
			narrow: {
				am: "ئە",
				pm: "چ",
				midnight: "ك",
				noon: "چ",
				morning: "ئەتىگەندە",
				afternoon: "چۈشتىن كىيىن",
				evening: "ئاخشامدا",
				night: "كىچىدە"
			},
			abbreviated: {
				am: "ئە",
				pm: "چ",
				midnight: "ك",
				noon: "چ",
				morning: "ئەتىگەندە",
				afternoon: "چۈشتىن كىيىن",
				evening: "ئاخشامدا",
				night: "كىچىدە"
			},
			wide: {
				am: "ئە",
				pm: "چ",
				midnight: "ك",
				noon: "چ",
				morning: "ئەتىگەندە",
				afternoon: "چۈشتىن كىيىن",
				evening: "ئاخشامدا",
				night: "كىچىدە"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(th|st|nd|rd)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(ب|ك)/i,
			wide: /^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i
		},
		s = {
			any: [/^بۇرۇن/i, /^كىيىن/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^چ[1234]/i,
			wide: /^چارەك [1234]/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[يفمئامئ‍ئاسۆند]/i,
			abbreviated: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,
			wide: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i
		},
		m = {
			narrow: [/^ي/i, /^ف/i, /^م/i, /^ا/i, /^م/i, /^ى‍/i, /^ى‍/i, /^ا‍/i, /^س/i, /^ۆ/i, /^ن/i, /^د/i],
			any: [/^يان/i, /^فېۋ/i, /^مار/i, /^ئاپ/i, /^ماي/i, /^ئىيۇن/i, /^ئىيول/i, /^ئاۋ/i, /^سىن/i, /^ئۆك/i, /^نوي/i, /^دىك/i]
		},
		f = {
			narrow: /^[دسچپجشي]/i,
			short: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
			abbreviated: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
			wide: /^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i
		},
		h = {
			narrow: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
			any: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i]
		},
		p = {
			narrow: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,
			any: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i
		},
		g = {
			any: {
				am: /^ئە/i,
				pm: /^چ/i,
				midnight: /^ك/i,
				noon: /^چ/i,
				morning: /ئەتىگەن/i,
				afternoon: /چۈشتىن كىيىن/i,
				evening: /ئاخشىم/i,
				night: /كىچە/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(826),
		i = n(827),
		r = n(828),
		o = n(829),
		u = n(830),
		s = {
			code: "uk",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			if (void 0 !== e.one && 1 === t) return e.one;
			var n = t % 10,
			a = t % 100;
			return 1 === n && 11 !== a ? e.singularNominative.replace("{{count}}", t) : n >= 2 && n <= 4 && (a < 10 || a > 20) ? e.singularGenitive.replace("{{count}}", t) : e.pluralGenitive.replace("{{count}}", t)
		}
		function i(e) {
			return function(t, n) {
				return n.addSuffix ? n.comparison > 0 ? e.future ? a(e.future, t) : "за " + a(e.regular, t) : e.past ? a(e.past, t) : a(e.regular, t) + " тому": a(e.regular, t)
			}
		}
		function r(e, t, n) {
			return n = n || {},
			o[e](t, n)
		}
		t.a = r;
		var o = {
			lessThanXSeconds: i({
				regular: {
					one: "менше секунди",
					singularNominative: "менше {{count}} секунди",
					singularGenitive: "менше {{count}} секунд",
					pluralGenitive: "менше {{count}} секунд"
				},
				future: {
					one: "менше, ніж за секунду",
					singularNominative: "менше, ніж за {{count}} секунду",
					singularGenitive: "менше, ніж за {{count}} секунди",
					pluralGenitive: "менше, ніж за {{count}} секунд"
				}
			}),
			xSeconds: i({
				regular: {
					singularNominative: "{{count}} секунда",
					singularGenitive: "{{count}} секунди",
					pluralGenitive: "{{count}} секунд"
				},
				past: {
					singularNominative: "{{count}} секунду тому",
					singularGenitive: "{{count}} секунди тому",
					pluralGenitive: "{{count}} секунд тому"
				},
				future: {
					singularNominative: "за {{count}} секунду",
					singularGenitive: "за {{count}} секунди",
					pluralGenitive: "за {{count}} секунд"
				}
			}),
			halfAMinute: function(e, t) {
				return t.addSuffix ? t.comparison > 0 ? "за півхвилини": "півхвилини тому": "півхвилини"
			},
			lessThanXMinutes: i({
				regular: {
					one: "менше хвилини",
					singularNominative: "менше {{count}} хвилини",
					singularGenitive: "менше {{count}} хвилин",
					pluralGenitive: "менше {{count}} хвилин"
				},
				future: {
					one: "менше, ніж за хвилину",
					singularNominative: "менше, ніж за {{count}} хвилину",
					singularGenitive: "менше, ніж за {{count}} хвилини",
					pluralGenitive: "менше, ніж за {{count}} хвилин"
				}
			}),
			xMinutes: i({
				regular: {
					singularNominative: "{{count}} хвилина",
					singularGenitive: "{{count}} хвилини",
					pluralGenitive: "{{count}} хвилин"
				},
				past: {
					singularNominative: "{{count}} хвилину тому",
					singularGenitive: "{{count}} хвилини тому",
					pluralGenitive: "{{count}} хвилин тому"
				},
				future: {
					singularNominative: "за {{count}} хвилину",
					singularGenitive: "за {{count}} хвилини",
					pluralGenitive: "за {{count}} хвилин"
				}
			}),
			aboutXHours: i({
				regular: {
					singularNominative: "близько {{count}} години",
					singularGenitive: "близько {{count}} годин",
					pluralGenitive: "близько {{count}} годин"
				},
				future: {
					singularNominative: "приблизно за {{count}} годину",
					singularGenitive: "приблизно за {{count}} години",
					pluralGenitive: "приблизно за {{count}} годин"
				}
			}),
			xHours: i({
				regular: {
					singularNominative: "{{count}} годину",
					singularGenitive: "{{count}} години",
					pluralGenitive: "{{count}} годин"
				}
			}),
			xDays: i({
				regular: {
					singularNominative: "{{count}} день",
					singularGenitive: "{{count}} дня",
					pluralGenitive: "{{count}} днів"
				}
			}),
			aboutXWeeks: i({
				regular: {
					singularNominative: "близько {{count}} тижня",
					singularGenitive: "близько {{count}} тижнів",
					pluralGenitive: "близько {{count}} тижнів"
				},
				future: {
					singularNominative: "приблизно за {{count}} тиждень",
					singularGenitive: "приблизно за {{count}} тижні",
					pluralGenitive: "приблизно за {{count}} тижні"
				}
			}),
			xWeeks: i({
				regular: {
					singularNominative: "{{count}} тиждень",
					singularGenitive: "{{count}} тижня",
					pluralGenitive: "{{count}} тижні"
				}
			}),
			aboutXMonths: i({
				regular: {
					singularNominative: "близько {{count}} місяця",
					singularGenitive: "близько {{count}} місяців",
					pluralGenitive: "близько {{count}} місяців"
				},
				future: {
					singularNominative: "приблизно за {{count}} місяць",
					singularGenitive: "приблизно за {{count}} місяця",
					pluralGenitive: "приблизно за {{count}} місяців"
				}
			}),
			xMonths: i({
				regular: {
					singularNominative: "{{count}} місяць",
					singularGenitive: "{{count}} місяця",
					pluralGenitive: "{{count}} місяців"
				}
			}),
			aboutXYears: i({
				regular: {
					singularNominative: "близько {{count}} року",
					singularGenitive: "близько {{count}} років",
					pluralGenitive: "близько {{count}} років"
				},
				future: {
					singularNominative: "приблизно за {{count}} рік",
					singularGenitive: "приблизно за {{count}} роки",
					pluralGenitive: "приблизно за {{count}} років"
				}
			}),
			xYears: i({
				regular: {
					singularNominative: "{{count}} рік",
					singularGenitive: "{{count}} роки",
					pluralGenitive: "{{count}} років"
				}
			}),
			overXYears: i({
				regular: {
					singularNominative: "більше {{count}} року",
					singularGenitive: "більше {{count}} років",
					pluralGenitive: "більше {{count}} років"
				},
				future: {
					singularNominative: "більше, ніж за {{count}} рік",
					singularGenitive: "більше, ніж за {{count}} роки",
					pluralGenitive: "більше, ніж за {{count}} років"
				}
			}),
			almostXYears: i({
				regular: {
					singularNominative: "майже {{count}} рік",
					singularGenitive: "майже {{count}} роки",
					pluralGenitive: "майже {{count}} років"
				},
				future: {
					singularNominative: "майже за {{count}} рік",
					singularGenitive: "майже за {{count}} роки",
					pluralGenitive: "майже за {{count}} років"
				}
			})
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM y 'р.'",
			long: "do MMMM y 'р.'",
			medium: "d MMM y 'р.'",
			short: "dd.MM.y"
		},
		r = {
			full: "H:mm:ss zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		o = {
			full: "{{date}} 'о' {{time}}",
			long: "{{date}} 'о' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 5:
			case 6:
				return "'у минулу " + t + " о' p";
			case 1:
			case 2:
			case 4:
				return "'у минулий " + t + " о' p"
			}
		}
		function i(e) {
			return "'у " + s[e] + " о' p"
		}
		function r(e) {
			var t = s[e];
			switch (e) {
			case 0:
			case 3:
			case 5:
			case 6:
				return "'у наступну " + t + " о' p";
			case 1:
			case 2:
			case 4:
				return "'у наступний " + t + " о' p"
			}
		}
		function o(e, t, n, a) {
			var i = d[e];
			return "function" == typeof i ? i(t, n, a) : i
		}
		t.a = o;
		var u = n(13),
		s = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п’ятницю", "суботу"],
		d = {
			lastWeek: function(e, t, n) {
				var r = e.getUTCDay();
				return u.a(e, t, n) ? i(r) : a(r)
			},
			yesterday: "'вчора о' p",
			today: "'сьогодні о' p",
			tomorrow: "'завтра о' p",
			nextWeek: function(e, t, n) {
				var a = e.getUTCDay();
				return u.a(e, t, n) ? i(a) : r(a)
			},
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n, a = t || {},
			i = String(a.unit);
			return n = "date" === i ? 3 === e || 23 === e ? "-є": "-е": "minute" === i || "second" === i || "hour" === i ? "-а": "-й",
			e + n
		}
		var i = n(3),
		r = {
			narrow: ["до н.е.", "н.е."],
			abbreviated: ["до н. е.", "н. е."],
			wide: ["до нашої ери", "нашої ери"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
			wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
		},
		u = {
			narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
			abbreviated: ["січ.", "лют.", "берез.", "квіт.", "трав.", "черв.", "лип.", "серп.", "верес.", "жовт.", "листоп.", "груд."],
			wide: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"]
		},
		s = {
			narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
			abbreviated: ["січ.", "лют.", "берез.", "квіт.", "трав.", "черв.", "лип.", "серп.", "верес.", "жовт.", "листоп.", "груд."],
			wide: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
		},
		d = {
			narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
			short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
			abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
			wide: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"]
		},
		c = {
			narrow: {
				am: "ДП",
				pm: "ПП",
				midnight: "півн.",
				noon: "пол.",
				morning: "ранок",
				afternoon: "день",
				evening: "веч.",
				night: "ніч"
			},
			abbreviated: {
				am: "ДП",
				pm: "ПП",
				midnight: "півн.",
				noon: "пол.",
				morning: "ранок",
				afternoon: "день",
				evening: "веч.",
				night: "ніч"
			},
			wide: {
				am: "ДП",
				pm: "ПП",
				midnight: "північ",
				noon: "полудень",
				morning: "ранок",
				afternoon: "день",
				evening: "вечір",
				night: "ніч"
			}
		},
		l = {
			narrow: {
				am: "ДП",
				pm: "ПП",
				midnight: "півн.",
				noon: "пол.",
				morning: "ранку",
				afternoon: "дня",
				evening: "веч.",
				night: "ночі"
			},
			abbreviated: {
				am: "ДП",
				pm: "ПП",
				midnight: "півн.",
				noon: "пол.",
				morning: "ранку",
				afternoon: "дня",
				evening: "веч.",
				night: "ночі"
			},
			wide: {
				am: "ДП",
				pm: "ПП",
				midnight: "північ",
				noon: "полудень",
				morning: "ранку",
				afternoon: "дня",
				evening: "веч.",
				night: "ночі"
			}
		},
		m = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide",
				formattingValues: s,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: d,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: c,
				defaultWidth: "any",
				formattingValues: l,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = m
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(-?(е|й|є|а|я))?/i,
		o = /\d+/i,
		u = {
			narrow: /^((до )?н\.?\s?е\.?)/i,
			abbreviated: /^((до )?н\.?\s?е\.?)/i,
			wide: /^(до нашої ери|нашої ери|наша ера)/i
		},
		s = {
			any: [/^д/i, /^н/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
			wide: /^[1234](-?[иі]?й?)? квартал/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[слбктчвжг]/i,
			abbreviated: /^(січ|лют|бер|берез|кві|трав?|чер|лип|сер|вер|жов|лис(топ)?|груд)\.?/i,
			wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопада?|грудень|грудня)/i
		},
		m = {
			narrow: [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i],
			any: [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i]
		},
		f = {
			narrow: /^[нпвсч]/i,
			short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
			abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
			wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i
		},
		h = {
			narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
			any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i]
		},
		p = {
			narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
			abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
			wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i
		},
		g = {
			any: {
				am: /^дп/i,
				pm: /^пп/i,
				midnight: /^півн/i,
				noon: /^пол/i,
				morning: /^р/i,
				afternoon: /^д[ен]/i,
				evening: /^в/i,
				night: /^н/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "wide",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(832),
		i = n(833),
		r = n(834),
		o = n(835),
		u = n(836),
		s = {
			code: "uz",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + " dan keyin": a + " oldin": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "sekunddan kam",
				other: "{{count}} sekunddan kam"
			},
			xSeconds: {
				one: "1 sekund",
				other: "{{count}} sekund"
			},
			halfAMinute: "yarim minut",
			lessThanXMinutes: {
				one: "bir minutdan kam",
				other: "{{count}} minutdan kam"
			},
			xMinutes: {
				one: "1 minut",
				other: "{{count}} minut"
			},
			aboutXHours: {
				one: "tahminan 1 soat",
				other: "tahminan {{count}} soat"
			},
			xHours: {
				one: "1 soat",
				other: "{{count}} soat"
			},
			xDays: {
				one: "1 kun",
				other: "{{count}} kun"
			},
			aboutXWeeks: {
				one: "tahminan 1 hafta",
				other: "tahminan {{count}} hafta"
			},
			xWeeks: {
				one: "1 hafta",
				other: "{{count}} hafta"
			},
			aboutXMonths: {
				one: "tahminan 1 oy",
				other: "tahminan {{count}} oy"
			},
			xMonths: {
				one: "1 oy",
				other: "{{count}} oy"
			},
			aboutXYears: {
				one: "tahminan 1 yil",
				other: "tahminan {{count}} yil"
			},
			xYears: {
				one: "1 yil",
				other: "{{count}} yil"
			},
			overXYears: {
				one: "1 yildan ko'p",
				other: "{{count}} yildan ko'p"
			},
			almostXYears: {
				one: "deyarli 1 yil",
				other: "deyarli {{count}} yil"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, do MMMM, y",
			long: "do MMMM, y",
			medium: "d MMM, y",
			short: "dd/MM/yyyy"
		},
		r = {
			full: "h:mm:ss zzzz",
			long: "h:mm:ss z",
			medium: "h:mm:ss",
			short: "h:mm"
		},
		o = {
			any: "{{date}}, {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "any"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'oldingi' eeee p 'da'",
			yesterday: "'kecha' p 'da'",
			today: "'bugun' p 'da'",
			tomorrow: "'ertaga' p 'da'",
			nextWeek: "eeee p 'da'",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			return Number(e)
		}
		var i = n(3),
		r = {
			narrow: ["M.A", "M."],
			abbreviated: ["M.A", "M."],
			wide: ["Miloddan Avvalgi", "Milodiy"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["CH.1", "CH.2", "CH.3", "CH.4"],
			wide: ["1-chi chorak", "2-chi chorak", "3-chi chorak", "4-chi chorak"]
		},
		u = {
			narrow: ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
			abbreviated: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"],
			wide: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
		},
		s = {
			narrow: ["Y", "D", "S", "CH", "P", "J", "SH"],
			short: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
			abbreviated: ["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"],
			wide: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
		},
		d = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "y.t",
				noon: "p.",
				morning: "ertalab",
				afternoon: "tushdan keyin",
				evening: "kechqurun",
				night: "tun"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "yarim tun",
				noon: "peshin",
				morning: "ertalab",
				afternoon: "tushdan keyin",
				evening: "kechqurun",
				night: "tun"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "yarim tun",
				noon: "peshin",
				morning: "ertalab",
				afternoon: "tushdan keyin",
				evening: "kechqurun",
				night: "tun"
			}
		},
		c = {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "y.t",
				noon: "p.",
				morning: "ertalab",
				afternoon: "tushdan keyin",
				evening: "kechqurun",
				night: "tun"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "yarim tun",
				noon: "peshin",
				morning: "ertalab",
				afternoon: "tushdan keyin",
				evening: "kechqurun",
				night: "tun"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "yarim tun",
				noon: "peshin",
				morning: "ertalab",
				afternoon: "tushdan keyin",
				evening: "kechqurun",
				night: "tun"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)(chi)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(m\.a|m\.)/i,
			abbreviated: /^(m\.a\.?\s?m\.?)/i,
			wide: /^(miloddan avval|miloddan keyin)/i
		},
		s = {
			any: [/^b/i, /^(a|c)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](chi)? chorak/i
		},
		c = {
			any: [/1/i, /2/i, /3/i, /4/i]
		},
		l = {
			narrow: /^[yfmasond]/i,
			abbreviated: /^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,
			wide: /^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i
		},
		m = {
			narrow: [/^y/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
			any: [/^ya/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^iyun/i, /^iyul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i]
		},
		f = {
			narrow: /^[ydschj]/i,
			short: /^(ya|du|se|cho|pa|ju|sha)/i,
			abbreviated: /^(yak|dush|sesh|chor|pay|jum|shan)/i,
			wide: /^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i
		},
		h = {
			narrow: [/^y/i, /^d/i, /^s/i, /^ch/i, /^p/i, /^j/i, /^sh/i],
			any: [/^ya/i, /^d/i, /^se/i, /^ch/i, /^p/i, /^j/i, /^sh/i]
		},
		p = {
			narrow: /^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,
			any: /^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i
		},
		g = {
			any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^y\.t/i,
				noon: /^pe/i,
				morning: /ertalab/i,
				afternoon: /tushdan keyin/i,
				evening: /kechqurun/i,
				night: /tun/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(838),
		i = n(839),
		r = n(840),
		o = n(841),
		u = n(842),
		s = {
			code: "vi",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 1
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + " nữa": a + " trước": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "dưới 1 giây",
				other: "dưới {{count}} giây"
			},
			xSeconds: {
				one: "1 giây",
				other: "{{count}} giây"
			},
			halfAMinute: "nửa phút",
			lessThanXMinutes: {
				one: "dưới 1 phút",
				other: "dưới {{count}} phút"
			},
			xMinutes: {
				one: "1 phút",
				other: "{{count}} phút"
			},
			aboutXHours: {
				one: "khoảng 1 giờ",
				other: "khoảng {{count}} giờ"
			},
			xHours: {
				one: "1 giờ",
				other: "{{count}} giờ"
			},
			xDays: {
				one: "1 ngày",
				other: "{{count}} ngày"
			},
			aboutXWeeks: {
				one: "khoảng 1 tuần",
				other: "khoảng {{count}} tuần"
			},
			xWeeks: {
				one: "1 tuần",
				other: "{{count}} tuần"
			},
			aboutXMonths: {
				one: "khoảng 1 tháng",
				other: "khoảng {{count}} tháng"
			},
			xMonths: {
				one: "1 tháng",
				other: "{{count}} tháng"
			},
			aboutXYears: {
				one: "khoảng 1 năm",
				other: "khoảng {{count}} năm"
			},
			xYears: {
				one: "1 năm",
				other: "{{count}} năm"
			},
			overXYears: {
				one: "hơn 1 năm",
				other: "hơn {{count}} năm"
			},
			almostXYears: {
				one: "gần 1 năm",
				other: "gần {{count}} năm"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "EEEE, 'ngày' d MMMM 'năm' y",
			long: "'ngày' d MMMM 'năm' y",
			medium: "d MMM 'năm' y",
			short: "dd/MM/y"
		},
		r = {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "eeee 'tuần trước vào lúc' p",
			yesterday: "'hôm qua vào lúc' p",
			today: "'hôm nay vào lúc' p",
			tomorrow: "'ngày mai vào lúc' p",
			nextWeek: "eeee 'tới vào lúc' p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = t || {},
			a = String(n.unit),
			i = parseInt(e, 10);
			if ("quarter" === a) switch (i) {
			case 1:
				return "I";
			case 2:
				return "II";
			case 3:
				return "III";
			case 4:
				return "IV"
			} else if ("day" === a) switch (i) {
			case 1:
				return "thứ 2";
			case 2:
				return "thứ 3";
			case 3:
				return "thứ 4";
			case 4:
				return "thứ 5";
			case 5:
				return "thứ 6";
			case 6:
				return "thứ 7";
			case 7:
				return "chủ nhật"
			} else {
				if ("week" === a) return 1 === i ? "thứ nhất": "thứ " + i;
				if ("dayOfYear" === a) return 1 === i ? "đầu tiên": "thứ " + i
			}
			return i
		}
		var i = n(3),
		r = {
			narrow: ["TCN", "SCN"],
			abbreviated: ["trước CN", "sau CN"],
			wide: ["trước Công Nguyên", "sau Công Nguyên"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"]
		},
		u = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["Q1", "Q2", "Q3", "Q4"],
			wide: ["quý I", "quý II", "quý III", "quý IV"]
		},
		s = {
			narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			abbreviated: ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"],
			wide: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"]
		},
		d = {
			narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
			abbreviated: ["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"],
			wide: ["tháng 01", "tháng 02", "tháng 03", "tháng 04", "tháng 05", "tháng 06", "tháng 07", "tháng 08", "tháng 09", "tháng 10", "tháng 11", "tháng 12"]
		},
		c = {
			narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
			short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
			abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
			wide: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
		},
		l = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "nửa đêm",
				noon: "tr",
				morning: "sg",
				afternoon: "ch",
				evening: "tối",
				night: "đêm"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "nửa đêm",
				noon: "trưa",
				morning: "sáng",
				afternoon: "chiều",
				evening: "tối",
				night: "đêm"
			},
			wide: {
				am: "SA",
				pm: "CH",
				midnight: "nửa đêm",
				noon: "trưa",
				morning: "sáng",
				afternoon: "chiều",
				evening: "tối",
				night: "đêm"
			}
		},
		m = {
			narrow: {
				am: "am",
				pm: "pm",
				midnight: "nửa đêm",
				noon: "tr",
				morning: "sg",
				afternoon: "ch",
				evening: "tối",
				night: "đêm"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "nửa đêm",
				noon: "trưa",
				morning: "sáng",
				afternoon: "chiều",
				evening: "tối",
				night: "đêm"
			},
			wide: {
				am: "SA",
				pm: "CH",
				midnight: "nửa đêm",
				noon: "giữa trưa",
				morning: "vào buổi sáng",
				afternoon: "vào buổi chiều",
				evening: "vào buổi tối",
				night: "vào ban đêm"
			}
		},
		f = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				formattingValues: u,
				defaultFormattingWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: s,
				defaultWidth: "wide",
				formattingValues: d,
				defaultFormattingWidth: "wide"
			}),
			day: i.a({
				values: c,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: l,
				defaultWidth: "wide",
				formattingValues: m,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = f
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(\d+)/i,
		o = /\d+/i,
		u = {
			narrow: /^(tcn|scn)/i,
			abbreviated: /^(trước CN|sau CN)/i,
			wide: /^(trước Công Nguyên|sau Công Nguyên)/i
		},
		s = {
			any: [/^t/i, /^s/i]
		},
		d = {
			narrow: /^([1234]|i{1,3}v?)/i,
			abbreviated: /^q([1234]|i{1,3}v?)/i,
			wide: /^quý ([1234]|i{1,3}v?)/i
		},
		c = {
			any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
		},
		l = {
			narrow: /^(0?[2-9]|10|11|12|0?1)/i,
			abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
			wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
		},
		m = {
			narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
			abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i],
			wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i]
		},
		f = {
			narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
			short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
			abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
			wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
		},
		h = {
			narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
			short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
			abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
			wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
		},
		p = {
			narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
			abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
			wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
		},
		g = {
			any: {
				am: /^(a|sa)/i,
				pm: /^(p|ch[^i]*)/i,
				midnight: /nửa đêm/i,
				noon: /trưa/i,
				morning: /sáng/i,
				afternoon: /chiều/i,
				evening: /tối/i,
				night: /^đêm/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(844),
		i = n(845),
		r = n(846),
		o = n(847),
		u = n(848),
		s = {
			code: "zh-CN",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + "内": a + "前": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "不到 1 秒",
				other: "不到 {{count}} 秒"
			},
			xSeconds: {
				one: "1 秒",
				other: "{{count}} 秒"
			},
			halfAMinute: "半分钟",
			lessThanXMinutes: {
				one: "不到 1 分钟",
				other: "不到 {{count}} 分钟"
			},
			xMinutes: {
				one: "1 分钟",
				other: "{{count}} 分钟"
			},
			xHours: {
				one: "1 小时",
				other: "{{count}} 小时"
			},
			aboutXHours: {
				one: "大约 1 小时",
				other: "大约 {{count}} 小时"
			},
			xDays: {
				one: "1 天",
				other: "{{count}} 天"
			},
			aboutXWeeks: {
				one: "大约 1 个星期",
				other: "大约 {{count}} 个星期"
			},
			xWeeks: {
				one: "1 个星期",
				other: "{{count}} 个星期"
			},
			aboutXMonths: {
				one: "大约 1 个月",
				other: "大约 {{count}} 个月"
			},
			xMonths: {
				one: "1 个月",
				other: "{{count}} 个月"
			},
			aboutXYears: {
				one: "大约 1 年",
				other: "大约 {{count}} 年"
			},
			xYears: {
				one: "1 年",
				other: "{{count}} 年"
			},
			overXYears: {
				one: "超过 1 年",
				other: "超过 {{count}} 年"
			},
			almostXYears: {
				one: "将近 1 年",
				other: "将近 {{count}} 年"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "y'年'M'月'd'日' EEEE",
			long: "y'年'M'月'd'日'",
			medium: "yyyy-MM-dd",
			short: "yy-MM-dd"
		},
		r = {
			full: "zzzz a h:mm:ss",
			long: "z a h:mm:ss",
			medium: "a h:mm:ss",
			short: "a h:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return r.a(e, t, n) ? a: e.getTime() > t.getTime() ? "'下个'" + a: "'上个'" + a
		}
		function i(e, t, n, a) {
			var i = o[e];
			return "function" == typeof i ? i(t, n, a, "eeee p") : i
		}
		t.a = i;
		var r = n(13),
		o = {
			lastWeek: a,
			yesterday: "'昨天' p",
			today: "'今天' p",
			tomorrow: "'明天' p",
			nextWeek: a,
			other: "PP p"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = t || {};
			switch (String(a.unit)) {
			case "date":
				return n.toString() + "日";
			case "hour":
				return n.toString() + "时";
			case "minute":
				return n.toString() + "分";
			case "second":
				return n.toString() + "秒";
			default:
				return "第 " + n.toString()
			}
		}
		var i = n(3),
		r = {
			narrow: ["前", "公元"],
			abbreviated: ["前", "公元"],
			wide: ["公元前", "公元"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"],
			wide: ["第一刻钟", "第二刻钟", "第三刻钟", "第四刻钟"]
		},
		u = {
			narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
			abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
			wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
		},
		s = {
			narrow: ["日", "一", "二", "三", "四", "五", "六"],
			short: ["日", "一", "二", "三", "四", "五", "六"],
			abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
			wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
		},
		d = {
			narrow: {
				am: "上",
				pm: "下",
				midnight: "凌晨",
				noon: "午",
				morning: "早",
				afternoon: "下午",
				evening: "晚",
				night: "夜"
			},
			abbreviated: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜间"
			},
			wide: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜间"
			}
		},
		c = {
			narrow: {
				am: "上",
				pm: "下",
				midnight: "凌晨",
				noon: "午",
				morning: "早",
				afternoon: "下午",
				evening: "晚",
				night: "夜"
			},
			abbreviated: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜间"
			},
			wide: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜间"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(第\s*)?\d+(日|时|分|秒)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(前)/i,
			abbreviated: /^(前)/i,
			wide: /^(公元前|公元)/i
		},
		s = {
			any: [/^(前)/i, /^(公元)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^第[一二三四]刻/i,
			wide: /^第[一二三四]刻钟/i
		},
		c = {
			any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
		},
		l = {
			narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
			abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
			wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
		},
		m = {
			narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
			any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
		},
		f = {
			narrow: /^[一二三四五六日]/i,
			short: /^[一二三四五六日]/i,
			abbreviated: /^周[一二三四五六日]/i,
			wide: /^星期[一二三四五六日]/i
		},
		h = {
			any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
		},
		p = {
			any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
		},
		g = {
			any: {
				am: /^上午?/i,
				pm: /^下午?/i,
				midnight: /^午夜/i,
				noon: /^[中正]午/i,
				morning: /^早上/i,
				afternoon: /^下午/i,
				evening: /^晚上?/i,
				night: /^凌晨/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t, n) {
		"use strict";
		var a = n(850),
		i = n(851),
		r = n(852),
		o = n(853),
		u = n(854),
		s = {
			code: "zh-TW",
			formatDistance: a.a,
			formatLong: i.a,
			formatRelative: r.a,
			localize: o.a,
			match: u.a,
			options: {
				weekStartsOn: 1,
				firstWeekContainsDate: 4
			}
		};
		t.a = s
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n) {
			n = n || {};
			var a;
			return a = "string" == typeof i[e] ? i[e] : 1 === t ? i[e].one: i[e].other.replace("{{count}}", t),
			n.addSuffix ? n.comparison > 0 ? a + "內": a + "前": a
		}
		t.a = a;
		var i = {
			lessThanXSeconds: {
				one: "少於 1 秒",
				other: "少於 {{count}} 秒"
			},
			xSeconds: {
				one: "1 秒",
				other: "{{count}} 秒"
			},
			halfAMinute: "半分鐘",
			lessThanXMinutes: {
				one: "少於 1 分鐘",
				other: "少於 {{count}} 分鐘"
			},
			xMinutes: {
				one: "1 分鐘",
				other: "{{count}} 分鐘"
			},
			xHours: {
				one: "1 小時",
				other: "{{count}} 小時"
			},
			aboutXHours: {
				one: "大約 1 小時",
				other: "大約 {{count}} 小時"
			},
			xDays: {
				one: "1 天",
				other: "{{count}} 天"
			},
			aboutXWeeks: {
				one: "大約 1 个星期",
				other: "大約 {{count}} 个星期"
			},
			xWeeks: {
				one: "1 个星期",
				other: "{{count}} 个星期"
			},
			aboutXMonths: {
				one: "大約 1 個月",
				other: "大約 {{count}} 個月"
			},
			xMonths: {
				one: "1 個月",
				other: "{{count}} 個月"
			},
			aboutXYears: {
				one: "大約 1 年",
				other: "大約 {{count}} 年"
			},
			xYears: {
				one: "1 年",
				other: "{{count}} 年"
			},
			overXYears: {
				one: "超過 1 年",
				other: "超過 {{count}} 年"
			},
			almostXYears: {
				one: "將近 1 年",
				other: "將近 {{count}} 年"
			}
		}
	},
	function(e, t, n) {
		"use strict";
		var a = n(2),
		i = {
			full: "y'年'M'月'd'日' EEEE",
			long: "y'年'M'月'd'日'",
			medium: "yyyy-MM-dd",
			short: "yy-MM-dd"
		},
		r = {
			full: "zzzz a h:mm:ss",
			long: "z a h:mm:ss",
			medium: "a h:mm:ss",
			short: "a h:mm"
		},
		o = {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		u = {
			date: a.a({
				formats: i,
				defaultWidth: "full"
			}),
			time: a.a({
				formats: r,
				defaultWidth: "full"
			}),
			dateTime: a.a({
				formats: o,
				defaultWidth: "full"
			})
		};
		t.a = u
	},
	function(e, t, n) {
		"use strict";
		function a(e, t, n, a) {
			return i[e]
		}
		t.a = a;
		var i = {
			lastWeek: "'上個' eeee p",
			yesterday: "'昨天' p",
			today: "'今天' p",
			tomorrow: "'明天' p",
			nextWeek: "'下個' eeee p",
			other: "P"
		}
	},
	function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = Number(e),
			a = t || {};
			switch (String(a.unit)) {
			case "date":
				return n.toString() + "日";
			case "hour":
				return n.toString() + "時";
			case "minute":
				return n.toString() + "分";
			case "second":
				return n.toString() + "秒";
			default:
				return "第 " + n.toString()
			}
		}
		var i = n(3),
		r = {
			narrow: ["前", "公元"],
			abbreviated: ["前", "公元"],
			wide: ["公元前", "公元"]
		},
		o = {
			narrow: ["1", "2", "3", "4"],
			abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"],
			wide: ["第一刻鐘", "第二刻鐘", "第三刻鐘", "第四刻鐘"]
		},
		u = {
			narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
			abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
			wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
		},
		s = {
			narrow: ["日", "一", "二", "三", "四", "五", "六"],
			short: ["日", "一", "二", "三", "四", "五", "六"],
			abbreviated: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
			wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
		},
		d = {
			narrow: {
				am: "上",
				pm: "下",
				midnight: "凌晨",
				noon: "午",
				morning: "早",
				afternoon: "下午",
				evening: "晚",
				night: "夜"
			},
			abbreviated: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜間"
			},
			wide: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜間"
			}
		},
		c = {
			narrow: {
				am: "上",
				pm: "下",
				midnight: "凌晨",
				noon: "午",
				morning: "早",
				afternoon: "下午",
				evening: "晚",
				night: "夜"
			},
			abbreviated: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜間"
			},
			wide: {
				am: "上午",
				pm: "下午",
				midnight: "凌晨",
				noon: "中午",
				morning: "早晨",
				afternoon: "中午",
				evening: "晚上",
				night: "夜間"
			}
		},
		l = {
			ordinalNumber: a,
			era: i.a({
				values: r,
				defaultWidth: "wide"
			}),
			quarter: i.a({
				values: o,
				defaultWidth: "wide",
				argumentCallback: function(e) {
					return Number(e) - 1
				}
			}),
			month: i.a({
				values: u,
				defaultWidth: "wide"
			}),
			day: i.a({
				values: s,
				defaultWidth: "wide"
			}),
			dayPeriod: i.a({
				values: d,
				defaultWidth: "wide",
				formattingValues: c,
				defaultFormattingWidth: "wide"
			})
		};
		t.a = l
	},
	function(e, t, n) {
		"use strict";
		var a = n(4),
		i = n(5),
		r = /^(第\s*)?\d+(日|時|分|秒)?/i,
		o = /\d+/i,
		u = {
			narrow: /^(前)/i,
			abbreviated: /^(前)/i,
			wide: /^(公元前|公元)/i
		},
		s = {
			any: [/^(前)/i, /^(公元)/i]
		},
		d = {
			narrow: /^[1234]/i,
			abbreviated: /^第[一二三四]刻/i,
			wide: /^第[一二三四]刻鐘/i
		},
		c = {
			any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
		},
		l = {
			narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
			abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
			wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
		},
		m = {
			narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
			any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
		},
		f = {
			narrow: /^[一二三四五六日]/i,
			short: /^[一二三四五六日]/i,
			abbreviated: /^週[一二三四五六日]/i,
			wide: /^星期[一二三四五六日]/i
		},
		h = {
			any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
		},
		p = {
			any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i
		},
		g = {
			any: {
				am: /^上午?/i,
				pm: /^下午?/i,
				midnight: /^午夜/i,
				noon: /^[中正]午/i,
				morning: /^早上/i,
				afternoon: /^下午/i,
				evening: /^晚上?/i,
				night: /^凌晨/i
			}
		},
		v = {
			ordinalNumber: a.a({
				matchPattern: r,
				parsePattern: o,
				valueCallback: function(e) {
					return parseInt(e, 10)
				}
			}),
			era: i.a({
				matchPatterns: u,
				defaultMatchWidth: "wide",
				parsePatterns: s,
				defaultParseWidth: "any"
			}),
			quarter: i.a({
				matchPatterns: d,
				defaultMatchWidth: "wide",
				parsePatterns: c,
				defaultParseWidth: "any",
				valueCallback: function(e) {
					return e + 1
				}
			}),
			month: i.a({
				matchPatterns: l,
				defaultMatchWidth: "wide",
				parsePatterns: m,
				defaultParseWidth: "any"
			}),
			day: i.a({
				matchPatterns: f,
				defaultMatchWidth: "wide",
				parsePatterns: h,
				defaultParseWidth: "any"
			}),
			dayPeriod: i.a({
				matchPatterns: p,
				defaultMatchWidth: "any",
				parsePatterns: g,
				defaultParseWidth: "any"
			})
		};
		t.a = v
	},
	function(e, t) {},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.GT_ACCESS_TOKEN = "GT_ACCESS_TOKEN",
		t.GT_VERSION = "1.7.2",
		t.GT_COMMENT = "GT_COMMENT"
	},
	function(e, t, n) {
		"use strict";
		function a(e) {
			var t = this,
			n = this.options,
			a = n.owner,
			i = n.repo,
			s = n.perPage,
			d = n.pagerDirection,
			c = n.defaultAuthor,
			l = this.state,
			m = l.cursor,
			f = l.comments;
			return o.axiosGithub.post("/graphql", u({
				owner: a,
				repo: i,
				id: e.number,
				pageSize: s,
				cursor: m
			},
			d), {
				headers: {
					Authorization: "bearer " + this.accessToken
				}
			}).then(function(n) {
				var o = n.data.data.repository.issue.comments,
				u = o.nodes.map(function(t) {
					var n = t.author || c;
					return {
						id: t.databaseId,
						gId: t.id,
						user: {
							avatar_url: n.avatarUrl,
							login: n.login,
							html_url: n.url
						},
						created_at: t.createdAt,
						body_html: t.bodyHTML,
						body: t.body,
						html_url: "https://github.com/" + a + "/" + i + "/issues/" + e.number + "#issuecomment-" + t.databaseId,
						reactions: t.reactions
					}
				}),
				s = void 0;
				s = "last" === d ? [].concat((0, r.
			default)(u), (0, r.
			default)(f)):
				[].concat((0, r.
			default)(f), (0, r.
			default)(u));
				var l = !1 === o.pageInfo.hasPreviousPage || !1 === o.pageInfo.hasNextPage;
				return t.setState({
					comments: s,
					isLoadOver: l,
					cursor: o.pageInfo.startCursor || o.pageInfo.endCursor
				}),
				s
			})
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(858),
		r = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (i),
		o = n(121),
		u = function(e, t) {
			var n = "last" === t ? "before": "after",
			a = "\n  query getIssueAndComments(\n    $owner: String!,\n    $repo: String!,\n    $id: Int!,\n    $cursor: String,\n    $pageSize: Int!\n  ) {\n    repository(owner: $owner, name: $repo) {\n      issue(number: $id) {\n        title\n        url\n        bodyHTML\n        createdAt\n        comments(" + t + ": $pageSize, " + n + ": $cursor) {\n          totalCount\n          pageInfo {\n            " + ("last" === t ? "hasPreviousPage": "hasNextPage") + "\n            " + ("before" === n ? "startCursor": "endCursor") + "\n          }\n          nodes {\n            id\n            databaseId\n            author {\n              avatarUrl\n              login\n              url\n            }\n            bodyHTML\n            body\n            createdAt\n            reactions(first: 100, content: HEART) {\n              totalCount\n              viewerHasReacted\n              pageInfo{\n                hasNextPage\n              }\n              nodes {\n                id\n                databaseId\n                user {\n                  login\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  ";
			return null === e.cursor && delete e.cursor,
			{
				operationName: "getIssueAndComments",
				query: a,
				variables: e
			}
		};
		t.
	default = a
	},
	function(e, t, n) {
		"use strict";
		t.__esModule = !0;
		var a = n(859),
		i = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a);
		t.
	default = function(e) {
			if (Array.isArray(e)) {
				for (var t = 0,
				n = Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
			return (0, i.
		default)(e)
		}
	},
	function(e, t, n) {
		e.exports = {
		default:
			n(860),
			__esModule: !0
		}
	},
	function(e, t, n) {
		n(40),
		n(861),
		e.exports = n(7).Array.from
	},
	function(e, t, n) {
		"use strict";
		var a = n(29),
		i = n(11),
		r = n(33),
		o = n(107),
		u = n(108),
		s = n(72),
		d = n(862),
		c = n(77);
		i(i.S + i.F * !n(113)(function(e) {
			Array.from(e)
		}), "Array", {
			from: function(e) {
				var t, n, i, l, m = r(e),
				f = "function" == typeof this ? this: Array,
				h = arguments.length,
				p = h > 1 ? arguments[1] : void 0,
				g = void 0 !== p,
				v = 0,
				w = c(m);
				if (g && (p = a(p, h > 2 ? arguments[2] : void 0, 2)), void 0 == w || f == Array && u(w)) for (t = s(m.length), n = new f(t); t > v; v++) d(n, v, g ? p(m[v], v) : m[v]);
				else for (l = w.call(m), n = new f; ! (i = l.next()).done; v++) d(n, v, g ? o(l, p, [i.value, v], !0) : i.value);
				return n.length = v,
				n
			}
		})
	},
	function(e, t, n) {
		"use strict";
		var a = n(16),
		i = n(39);
		e.exports = function(e, t, n) {
			t in e ? a.f(e, t, i(0, n)) : e[t] = n
		}
	}])
});
//# sourceMappingURL=gitalk.min.js.map

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
	"use strict";
	"object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	} : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
	"use strict";
	var c = [],
	    d = a.document,
	    e = Object.getPrototypeOf,
	    f = c.slice,
	    g = c.concat,
	    h = c.push,
	    i = c.indexOf,
	    j = {},
	    k = j.toString,
	    l = j.hasOwnProperty,
	    m = l.toString,
	    n = m.call(Object),
	    o = {};function p(a, b) {
		b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
	}var q = "3.2.1",
	    r = function r(a, b) {
		return new r.fn.init(a, b);
	},
	    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    t = /^-ms-/,
	    u = /-([a-z])/g,
	    v = function v(a, b) {
		return b.toUpperCase();
	};r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
			return f.call(this);
		}, get: function get(a) {
			return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
		}, pushStack: function pushStack(a) {
			var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
		}, each: function each(a) {
			return r.each(this, a);
		}, map: function map(a) {
			return this.pushStack(r.map(this, function (b, c) {
				return a.call(b, c, b);
			}));
		}, slice: function slice() {
			return this.pushStack(f.apply(this, arguments));
		}, first: function first() {
			return this.eq(0);
		}, last: function last() {
			return this.eq(-1);
		}, eq: function eq(a) {
			var b = this.length,
			    c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
		}, end: function end() {
			return this.prevObject || this.constructor();
		}, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
		var a,
		    b,
		    c,
		    d,
		    e,
		    f,
		    g = arguments[0] || {},
		    h = 1,
		    i = arguments.length,
		    j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
			if (null != (a = arguments[h])) for (b in a) {
				c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
			}
		}return g;
	}, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
			throw new Error(a);
		}, noop: function noop() {}, isFunction: function isFunction(a) {
			return "function" === r.type(a);
		}, isWindow: function isWindow(a) {
			return null != a && a === a.window;
		}, isNumeric: function isNumeric(a) {
			var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
		}, isPlainObject: function isPlainObject(a) {
			var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
		}, isEmptyObject: function isEmptyObject(a) {
			var b;for (b in a) {
				return !1;
			}return !0;
		}, type: function type(a) {
			return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
		}, globalEval: function globalEval(a) {
			p(a);
		}, camelCase: function camelCase(a) {
			return a.replace(t, "ms-").replace(u, v);
		}, each: function each(a, b) {
			var c,
			    d = 0;if (w(a)) {
				for (c = a.length; d < c; d++) {
					if (b.call(a[d], d, a[d]) === !1) break;
				}
			} else for (d in a) {
				if (b.call(a[d], d, a[d]) === !1) break;
			}return a;
		}, trim: function trim(a) {
			return null == a ? "" : (a + "").replace(s, "");
		}, makeArray: function makeArray(a, b) {
			var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
		}, inArray: function inArray(a, b, c) {
			return null == b ? -1 : i.call(b, a, c);
		}, merge: function merge(a, b) {
			for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
				a[e++] = b[d];
			}return a.length = e, a;
		}, grep: function grep(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
				d = !b(a[f], f), d !== h && e.push(a[f]);
			}return e;
		}, map: function map(a, b, c) {
			var d,
			    e,
			    f = 0,
			    h = [];if (w(a)) for (d = a.length; f < d; f++) {
				e = b(a[f], f, c), null != e && h.push(e);
			} else for (f in a) {
				e = b(a[f], f, c), null != e && h.push(e);
			}return g.apply([], h);
		}, guid: 1, proxy: function proxy(a, b) {
			var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
				return a.apply(b || this, d.concat(f.call(arguments)));
			}, e.guid = a.guid = a.guid || r.guid++, e;
		}, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
		j["[object " + b + "]"] = b.toLowerCase();
	});function w(a) {
		var b = !!a && "length" in a && a.length,
		    c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
	}var x = function (a) {
		var b,
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
		    q,
		    r,
		    s,
		    t,
		    u = "sizzle" + 1 * new Date(),
		    v = a.document,
		    w = 0,
		    x = 0,
		    y = ha(),
		    z = ha(),
		    A = ha(),
		    B = function B(a, b) {
			return a === b && (l = !0), 0;
		},
		    C = {}.hasOwnProperty,
		    D = [],
		    E = D.pop,
		    F = D.push,
		    G = D.push,
		    H = D.slice,
		    I = function I(a, b) {
			for (var c = 0, d = a.length; c < d; c++) {
				if (a[c] === b) return c;
			}return -1;
		},
		    J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    K = "[\\x20\\t\\r\\n\\f]",
		    L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
		    M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
		    N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
		    O = new RegExp(K + "+", "g"),
		    P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
		    Q = new RegExp("^" + K + "*," + K + "*"),
		    R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
		    S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
		    T = new RegExp(N),
		    U = new RegExp("^" + L + "$"),
		    V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
		    W = /^(?:input|select|textarea|button)$/i,
		    X = /^h\d$/i,
		    Y = /^[^{]+\{\s*\[native \w/,
		    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    $ = /[+~]/,
		    _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
		    aa = function aa(a, b, c) {
			var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
		},
		    ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    ca = function ca(a, b) {
			return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
		},
		    da = function da() {
			m();
		},
		    ea = ta(function (a) {
			return a.disabled === !0 && ("form" in a || "label" in a);
		}, { dir: "parentNode", next: "legend" });try {
			G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
		} catch (fa) {
			G = { apply: D.length ? function (a, b) {
					F.apply(a, H.call(b));
				} : function (a, b) {
					var c = a.length,
					    d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
				} };
		}function ga(a, b, d, e) {
			var f,
			    h,
			    j,
			    k,
			    l,
			    o,
			    r,
			    s = b && b.ownerDocument,
			    w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
				if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
					if (9 === w) {
						if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
					} else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
				} else {
					if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
				}if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
					if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
						(k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
							o[h] = "#" + k + " " + sa(o[h]);
						}r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
					}if (r) try {
						return G.apply(d, s.querySelectorAll(r)), d;
					} catch (x) {} finally {
						k === u && b.removeAttribute("id");
					}
				}
			}return i(a.replace(P, "$1"), b, d, e);
		}function ha() {
			var a = [];function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
			}return b;
		}function ia(a) {
			return a[u] = !0, a;
		}function ja(a) {
			var b = n.createElement("fieldset");try {
				return !!a(b);
			} catch (c) {
				return !1;
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null;
			}
		}function ka(a, b) {
			var c = a.split("|"),
			    e = c.length;while (e--) {
				d.attrHandle[c[e]] = b;
			}
		}function la(a, b) {
			var c = b && a,
			    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
				if (c === b) return -1;
			}return a ? 1 : -1;
		}function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
			};
		}function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
			};
		}function oa(a) {
			return function (b) {
				return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
			};
		}function pa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e,
					    f = a([], c.length, b),
					    g = f.length;while (g--) {
						c[e = f[g]] && (c[e] = !(d[e] = c[e]));
					}
				});
			});
		}function qa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a;
		}c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
		}, m = ga.setDocument = function (a) {
			var b,
			    e,
			    g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className");
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
			}), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
			}), c.getById ? (d.filter.ID = function (a) {
				var b = a.replace(_, aa);return function (a) {
					return a.getAttribute("id") === b;
				};
			}, d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);return c ? [c] : [];
				}
			}) : (d.filter.ID = function (a) {
				var b = a.replace(_, aa);return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
				};
			}, d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c,
					    d,
					    e,
					    f = b.getElementById(a);if (f) {
						if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
							if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
						}
					}return [];
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
			} : function (a, b) {
				var c,
				    d = [],
				    e = 0,
				    f = b.getElementsByTagName(a);if ("*" === a) {
					while (c = f[e++]) {
						1 === c.nodeType && d.push(c);
					}return d;
				}return f;
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
			}, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
			}), ja(function (a) {
				a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
			})), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
				    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
			} : function (a, b) {
				if (b) while (b = b.parentNode) {
					if (b === a) return !0;
				}return !1;
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
			} : function (a, b) {
				if (a === b) return l = !0, 0;var c,
				    d = 0,
				    e = a.parentNode,
				    f = b.parentNode,
				    g = [a],
				    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
					g.unshift(c);
				}c = b;while (c = c.parentNode) {
					h.unshift(c);
				}while (g[d] === h[d]) {
					d++;
				}return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
			}, n) : n;
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b);
		}, ga.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
				var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
			} catch (e) {}return ga(b, n, null, [a]).length > 0;
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b);
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
			    f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
		}, ga.escape = function (a) {
			return (a + "").replace(ba, ca);
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a);
		}, ga.uniqueSort = function (a) {
			var b,
			    d = [],
			    e = 0,
			    f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) {
					b === a[f] && (e = d.push(f));
				}while (e--) {
					a.splice(d[e], 1);
				}
			}return k = null, a;
		}, e = ga.getText = function (a) {
			var b,
			    c = "",
			    d = 0,
			    f = a.nodeType;if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
						c += e(a);
					}
				} else if (3 === f || 4 === f) return a.nodeValue;
			} else while (b = a[d++]) {
				c += e(b);
			}return c;
		}, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
					return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
				}, CHILD: function CHILD(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
				}, PSEUDO: function PSEUDO(a) {
					var b,
					    c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
				} }, filter: { TAG: function TAG(a) {
					var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
						return !0;
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b;
					};
				}, CLASS: function CLASS(a) {
					var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
					});
				}, ATTR: function ATTR(a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
					};
				}, CHILD: function CHILD(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					    g = "last" !== a.slice(-4),
					    h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode;
					} : function (b, c, i) {
						var j,
						    k,
						    l,
						    m,
						    n,
						    o,
						    p = f !== g ? "nextSibling" : "previousSibling",
						    q = b.parentNode,
						    r = h && b.nodeName.toLowerCase(),
						    s = !i && !h,
						    t = !1;if (q) {
							if (f) {
								while (p) {
									m = b;while (m = m[p]) {
										if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
									}o = p = "only" === a && !o && "nextSibling";
								}return !0;
							}if (o = [g ? q.firstChild : q.lastChild], g && s) {
								m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
									if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];break;
									}
								}
							} else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
								if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
							}return t -= e, t === d || t % d === 0 && t / d >= 0;
						}
					};
				}, PSEUDO: function PSEUDO(a, b) {
					var c,
					    e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d,
						    f = e(a, b),
						    g = f.length;while (g--) {
							d = I(a, f[g]), a[d] = !(c[d] = f[g]);
						}
					}) : function (a) {
						return e(a, 0, c);
					}) : e;
				} }, pseudos: { not: ia(function (a) {
					var b = [],
					    c = [],
					    d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
						var f,
						    g = d(a, null, e, []),
						    h = a.length;while (h--) {
							(f = g[h]) && (a[h] = !(b[h] = f));
						}
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
					};
				}), has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0;
					};
				}), contains: ia(function (a) {
					return a = a.replace(_, aa), function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
					};
				}), lang: ia(function (a) {
					return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
						var c;do {
							if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
						} while ((b = b.parentNode) && 1 === b.nodeType);return !1;
					};
				}), target: function target(b) {
					var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
				}, root: function root(a) {
					return a === o;
				}, focus: function focus(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
				}, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
				}, selected: function selected(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
				}, empty: function empty(a) {
					for (a = a.firstChild; a; a = a.nextSibling) {
						if (a.nodeType < 6) return !1;
					}return !0;
				}, parent: function parent(a) {
					return !d.pseudos.empty(a);
				}, header: function header(a) {
					return X.test(a.nodeName);
				}, input: function input(a) {
					return W.test(a.nodeName);
				}, button: function button(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
				}, text: function text(a) {
					var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
				}, first: pa(function () {
					return [0];
				}), last: pa(function (a, b) {
					return [b - 1];
				}), eq: pa(function (a, b, c) {
					return [c < 0 ? c + b : c];
				}), even: pa(function (a, b) {
					for (var c = 0; c < b; c += 2) {
						a.push(c);
					}return a;
				}), odd: pa(function (a, b) {
					for (var c = 1; c < b; c += 2) {
						a.push(c);
					}return a;
				}), lt: pa(function (a, b, c) {
					for (var d = c < 0 ? c + b : c; --d >= 0;) {
						a.push(d);
					}return a;
				}), gt: pa(function (a, b, c) {
					for (var d = c < 0 ? c + b : c; ++d < b;) {
						a.push(d);
					}return a;
				}) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
			d.pseudos[b] = ma(b);
		}for (b in { submit: !0, reset: !0 }) {
			d.pseudos[b] = na(b);
		}function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
			var c,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
				c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
					!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
				}if (!c) break;
			}return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
		};function sa(a) {
			for (var b = 0, c = a.length, d = ""; b < c; b++) {
				d += a[b].value;
			}return d;
		}function ta(a, b, c) {
			var d = b.dir,
			    e = b.next,
			    f = e || d,
			    g = c && "parentNode" === f,
			    h = x++;return b.first ? function (b, c, e) {
				while (b = b[d]) {
					if (1 === b.nodeType || g) return a(b, c, e);
				}return !1;
			} : function (b, c, i) {
				var j,
				    k,
				    l,
				    m = [w, h];if (i) {
					while (b = b[d]) {
						if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
					}
				} else while (b = b[d]) {
					if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
						if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
					}
				}return !1;
			};
		}function ua(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;while (e--) {
					if (!a[e](b, c, d)) return !1;
				}return !0;
			} : a[0];
		}function va(a, b, c) {
			for (var d = 0, e = b.length; d < e; d++) {
				ga(a, b[d], c);
			}return c;
		}function wa(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
				(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
			}return g;
		}function xa(a, b, c, d, e, f) {
			return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
				var j,
				    k,
				    l,
				    m = [],
				    n = [],
				    o = g.length,
				    p = f || va(b || "*", h.nodeType ? [h] : h, []),
				    q = !a || !f && b ? p : wa(p, m, a, h, i),
				    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
					j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
						(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
					}
				}if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;while (k--) {
								(l = r[k]) && j.push(q[k] = l);
							}e(null, r = [], j, i);
						}k = r.length;while (k--) {
							(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
						}
					}
				} else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
			});
		}function ya(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
				return a === b;
			}, h, !0), l = ta(function (a) {
				return I(b, a) > -1;
			}, h, !0), m = [function (a, c, d) {
				var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
			}]; i < f; i++) {
				if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; e < f; e++) {
							if (d.relative[a[e].type]) break;
						}return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
					}m.push(c);
				}
			}return ua(m);
		}function za(a, b) {
			var c = b.length > 0,
			    e = a.length > 0,
			    f = function f(_f, g, h, i, k) {
				var l,
				    o,
				    q,
				    r = 0,
				    s = "0",
				    t = _f && [],
				    u = [],
				    v = j,
				    x = _f || e && d.find.TAG("*", k),
				    y = w += null == v ? 1 : Math.random() || .1,
				    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
					if (e && l) {
						o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
							if (q(l, g || n, h)) {
								i.push(l);break;
							}
						}k && (w = y);
					}c && ((l = !q && l) && r--, _f && t.push(l));
				}if (r += s, c && s !== r) {
					o = 0;while (q = b[o++]) {
						q(t, u, g, h);
					}if (_f) {
						if (r > 0) while (s--) {
							t[s] || u[s] || (u[s] = E.call(i));
						}u = wa(u);
					}G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
				}return k && (w = y, j = v), t;
			};return c ? ia(f) : f;
		}return h = ga.compile = function (a, b) {
			var c,
			    d = [],
			    e = [],
			    f = A[a + " "];if (!f) {
				b || (b = g(a)), c = b.length;while (c--) {
					f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
				}f = A(a, za(e, d)), f.selector = a;
			}return f;
		}, i = ga.select = function (a, b, c, e) {
			var f,
			    i,
			    j,
			    k,
			    l,
			    m = "function" == typeof a && a,
			    n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
				if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
					if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
				}f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
					if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
						if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
					}
				}
			}return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
		}) || ka("type|href|height|width", function (a, b, c) {
			if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
		}) || ka("value", function (a, b, c) {
			if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
		}), ja(function (a) {
			return null == a.getAttribute("disabled");
		}) || ka(J, function (a, b, c) {
			var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
		}), ga;
	}(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
		var d = [],
		    e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
			if (1 === a.nodeType) {
				if (e && r(a).is(c)) break;d.push(a);
			}
		}return d;
	},
	    z = function z(a, b) {
		for (var c = []; a; a = a.nextSibling) {
			1 === a.nodeType && a !== b && c.push(a);
		}return c;
	},
	    A = r.expr.match.needsContext;function B(a, b) {
		return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	}var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
	    D = /^.[^:#\[\.,]*$/;function E(a, b, c) {
		return r.isFunction(b) ? r.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c;
		}) : b.nodeType ? r.grep(a, function (a) {
			return a === b !== c;
		}) : "string" != typeof b ? r.grep(a, function (a) {
			return i.call(b, a) > -1 !== c;
		}) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
			return i.call(b, a) > -1 !== c && 1 === a.nodeType;
		}));
	}r.filter = function (a, b, c) {
		var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
			return 1 === a.nodeType;
		}));
	}, r.fn.extend({ find: function find(a) {
			var b,
			    c,
			    d = this.length,
			    e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
				for (b = 0; b < d; b++) {
					if (r.contains(e[b], this)) return !0;
				}
			}));for (c = this.pushStack([]), b = 0; b < d; b++) {
				r.find(a, e[b], c);
			}return d > 1 ? r.uniqueSort(c) : c;
		}, filter: function filter(a) {
			return this.pushStack(E(this, a || [], !1));
		}, not: function not(a) {
			return this.pushStack(E(this, a || [], !0));
		}, is: function is(a) {
			return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
		} });var F,
	    G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    H = r.fn.init = function (a, b, c) {
		var e, f;if (!a) return this;if (c = c || F, "string" == typeof a) {
			if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
				if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
					r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
				}return this;
			}return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
		}return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
	};H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,
	    J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
			var b = r(a, this),
			    c = b.length;return this.filter(function () {
				for (var a = 0; a < c; a++) {
					if (r.contains(this, b[a])) return !0;
				}
			});
		}, closest: function closest(a, b) {
			var c,
			    d = 0,
			    e = this.length,
			    f = [],
			    g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
				for (c = this[d]; c && c !== b; c = c.parentNode) {
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
						f.push(c);break;
					}
				}
			}return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
		}, index: function index(a) {
			return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function add(a, b) {
			return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
		}, addBack: function addBack(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
		} });function K(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	}r.each({ parent: function parent(a) {
			var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
		}, parents: function parents(a) {
			return y(a, "parentNode");
		}, parentsUntil: function parentsUntil(a, b, c) {
			return y(a, "parentNode", c);
		}, next: function next(a) {
			return K(a, "nextSibling");
		}, prev: function prev(a) {
			return K(a, "previousSibling");
		}, nextAll: function nextAll(a) {
			return y(a, "nextSibling");
		}, prevAll: function prevAll(a) {
			return y(a, "previousSibling");
		}, nextUntil: function nextUntil(a, b, c) {
			return y(a, "nextSibling", c);
		}, prevUntil: function prevUntil(a, b, c) {
			return y(a, "previousSibling", c);
		}, siblings: function siblings(a) {
			return z((a.parentNode || {}).firstChild, a);
		}, children: function children(a) {
			return z(a.firstChild);
		}, contents: function contents(a) {
			return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
		} }, function (a, b) {
		r.fn[a] = function (c, d) {
			var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
		};
	});var L = /[^\x20\t\r\n\f]+/g;function M(a) {
		var b = {};return r.each(a.match(L) || [], function (a, c) {
			b[c] = !0;
		}), b;
	}r.Callbacks = function (a) {
		a = "string" == typeof a ? M(a) : r.extend({}, a);var b,
		    c,
		    d,
		    e,
		    f = [],
		    g = [],
		    h = -1,
		    i = function i() {
			for (e = e || a.once, d = b = !0; g.length; h = -1) {
				c = g.shift();while (++h < f.length) {
					f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
				}
			}a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
		},
		    j = { add: function add() {
				return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
					r.each(b, function (b, c) {
						r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
					});
				}(arguments), c && !b && i()), this;
			}, remove: function remove() {
				return r.each(arguments, function (a, b) {
					var c;while ((c = r.inArray(b, f, c)) > -1) {
						f.splice(c, 1), c <= h && h--;
					}
				}), this;
			}, has: function has(a) {
				return a ? r.inArray(a, f) > -1 : f.length > 0;
			}, empty: function empty() {
				return f && (f = []), this;
			}, disable: function disable() {
				return e = g = [], f = c = "", this;
			}, disabled: function disabled() {
				return !f;
			}, lock: function lock() {
				return e = g = [], c || b || (f = c = ""), this;
			}, locked: function locked() {
				return !!e;
			}, fireWith: function fireWith(a, c) {
				return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
			}, fire: function fire() {
				return j.fireWith(this, arguments), this;
			}, fired: function fired() {
				return !!d;
			} };return j;
	};function N(a) {
		return a;
	}function O(a) {
		throw a;
	}function P(a, b, c, d) {
		var e;try {
			a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
		} catch (a) {
			c.apply(void 0, [a]);
		}
	}r.extend({ Deferred: function Deferred(b) {
			var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
			    d = "pending",
			    e = { state: function state() {
					return d;
				}, always: function always() {
					return f.done(arguments).fail(arguments), this;
				}, "catch": function _catch(a) {
					return e.then(null, a);
				}, pipe: function pipe() {
					var a = arguments;return r.Deferred(function (b) {
						r.each(c, function (c, d) {
							var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
								var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
							});
						}), a = null;
					}).promise();
				}, then: function then(b, d, e) {
					var f = 0;function g(b, c, d, e) {
						return function () {
							var h = this,
							    i = arguments,
							    j = function j() {
								var a, j;if (!(b < f)) {
									if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
								}
							},
							    k = e ? j : function () {
								try {
									j();
								} catch (a) {
									r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
								}
							};b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
						};
					}return r.Deferred(function (a) {
						c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
					}).promise();
				}, promise: function promise(a) {
					return null != a ? r.extend(a, e) : e;
				} },
			    f = {};return r.each(c, function (a, b) {
				var g = b[2],
				    h = b[5];e[b[1]] = g.add, h && g.add(function () {
					d = h;
				}, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
					return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
				}, f[b[0] + "With"] = g.fireWith;
			}), e.promise(f), b && b.call(f, f), f;
		}, when: function when(a) {
			var b = arguments.length,
			    c = b,
			    d = Array(c),
			    e = f.call(arguments),
			    g = r.Deferred(),
			    h = function h(a) {
				return function (c) {
					d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
				};
			};if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
				P(e[c], h(c), g.reject);
			}return g.promise();
		} });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
		a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
	}, r.readyException = function (b) {
		a.setTimeout(function () {
			throw b;
		});
	};var R = r.Deferred();r.fn.ready = function (a) {
		return R.then(a)["catch"](function (a) {
			r.readyException(a);
		}), this;
	}, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {
			(a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
		} }), r.ready.then = R.then;function S() {
		d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
	}"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));var T = function T(a, b, c, d, e, f, g) {
		var h = 0,
		    i = a.length,
		    j = null == c;if ("object" === r.type(c)) {
			e = !0;for (h in c) {
				T(a, b, h, c[h], !0, f, g);
			}
		} else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
			return j.call(r(a), c);
		})), b)) for (; h < i; h++) {
			b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		}return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	},
	    U = function U(a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	};function V() {
		this.expando = r.expando + V.uid++;
	}V.uid = 1, V.prototype = { cache: function cache(a) {
			var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
		}, set: function set(a, b, c) {
			var d,
			    e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
				e[r.camelCase(d)] = b[d];
			}return e;
		}, get: function get(a, b) {
			return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
		}, access: function access(a, b, c) {
			return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
		}, remove: function remove(a, b) {
			var c,
			    d = a[this.expando];if (void 0 !== d) {
				if (void 0 !== b) {
					Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {
						delete d[b[c]];
					}
				}(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
			}
		}, hasData: function hasData(a) {
			var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
		} };var W = new V(),
	    X = new V(),
	    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    Z = /[A-Z]/g;function $(a) {
		return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
	}function _(a, b, c) {
		var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
			try {
				c = $(c);
			} catch (e) {}X.set(a, b, c);
		} else c = void 0;return c;
	}r.extend({ hasData: function hasData(a) {
			return X.hasData(a) || W.hasData(a);
		}, data: function data(a, b, c) {
			return X.access(a, b, c);
		}, removeData: function removeData(a, b) {
			X.remove(a, b);
		}, _data: function _data(a, b, c) {
			return W.access(a, b, c);
		}, _removeData: function _removeData(a, b) {
			W.remove(a, b);
		} }), r.fn.extend({ data: function data(a, b) {
			var c,
			    d,
			    e,
			    f = this[0],
			    g = f && f.attributes;if (void 0 === a) {
				if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
					c = g.length;while (c--) {
						g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
					}W.set(f, "hasDataAttrs", !0);
				}return e;
			}return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
				X.set(this, a);
			}) : T(this, function (b) {
				var c;if (f && void 0 === b) {
					if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;
				} else this.each(function () {
					X.set(this, a, b);
				});
			}, null, b, arguments.length > 1, null, !0);
		}, removeData: function removeData(a) {
			return this.each(function () {
				X.remove(this, a);
			});
		} }), r.extend({ queue: function queue(a, b, c) {
			var d;if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
		}, dequeue: function dequeue(a, b) {
			b = b || "fx";var c = r.queue(a, b),
			    d = c.length,
			    e = c.shift(),
			    f = r._queueHooks(a, b),
			    g = function g() {
				r.dequeue(a, b);
			};"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
		}, _queueHooks: function _queueHooks(a, b) {
			var c = b + "queueHooks";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () {
					W.remove(a, [b + "queue", c]);
				}) });
		} }), r.fn.extend({ queue: function queue(a, b) {
			var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
			});
		}, dequeue: function dequeue(a) {
			return this.each(function () {
				r.dequeue(this, a);
			});
		}, clearQueue: function clearQueue(a) {
			return this.queue(a || "fx", []);
		}, promise: function promise(a, b) {
			var c,
			    d = 1,
			    e = r.Deferred(),
			    f = this,
			    g = this.length,
			    h = function h() {
				--d || e.resolveWith(f, [f]);
			};"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
				c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			}return h(), e.promise(b);
		} });var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
	    ca = ["Top", "Right", "Bottom", "Left"],
	    da = function da(a, b) {
		return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
	},
	    ea = function ea(a, b, c, d) {
		var e,
		    f,
		    g = {};for (f in b) {
			g[f] = a.style[f], a.style[f] = b[f];
		}e = c.apply(a, d || []);for (f in b) {
			a.style[f] = g[f];
		}return e;
	};function fa(a, b, c, d) {
		var e,
		    f = 1,
		    g = 20,
		    h = d ? function () {
			return d.cur();
		} : function () {
			return r.css(a, b, "");
		},
		    i = h(),
		    j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
		    k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;do {
				f = f || ".5", k /= f, r.style(a, b, k + j);
			} while (f !== (f = h() / i) && 1 !== f && --g);
		}return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	}var ga = {};function ha(a) {
		var b,
		    c = a.ownerDocument,
		    d = a.nodeName,
		    e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
	}function ia(a, b) {
		for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
			d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
		}for (f = 0; f < g; f++) {
			null != e[f] && (a[f].style.display = e[f]);
		}return a;
	}r.fn.extend({ show: function show() {
			return ia(this, !0);
		}, hide: function hide() {
			return ia(this);
		}, toggle: function toggle(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				da(this) ? r(this).show() : r(this).hide();
			});
		} });var ja = /^(?:checkbox|radio)$/i,
	    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
	    la = /^$|\/(?:java|ecma)script/i,
	    ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {
		var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
	}function oa(a, b) {
		for (var c = 0, d = a.length; c < d; c++) {
			W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
		}
	}var pa = /<|&#?\w+;/;function qa(a, b, c, d, e) {
		for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
			if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
				g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
					g = g.lastChild;
				}r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
			} else m.push(b.createTextNode(f));
		}l.textContent = "", n = 0;while (f = m[n++]) {
			if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
				k = 0;while (f = g[k++]) {
					la.test(f.type || "") && c.push(f);
				}
			}
		}return l;
	}!function () {
		var a = d.createDocumentFragment(),
		    b = a.appendChild(d.createElement("div")),
		    c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	}();var ra = d.documentElement,
	    sa = /^key/,
	    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    ua = /^([^.]*)(?:\.(.+)|)/;function va() {
		return !0;
	}function wa() {
		return !1;
	}function xa() {
		try {
			return d.activeElement;
		} catch (a) {}
	}function ya(a, b, c, d, e, f) {
		var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
			"string" != typeof c && (d = d || c, c = void 0);for (h in b) {
				ya(a, h, c, d, b[h], f);
			}return a;
		}if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
			return r().off(a), g.apply(this, arguments);
		}, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
			r.event.add(this, b, e, d, c);
		});
	}r.event = { global: {}, add: function add(a, b, c, d, e) {
			var f,
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
			    q = W.get(a);if (q) {
				c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
					return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
				}), b = (b || "").match(L) || [""], j = b.length;while (j--) {
					h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
				}
			}
		}, remove: function remove(a, b, c, d, e) {
			var f,
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
			    q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {
				b = (b || "").match(L) || [""], j = b.length;while (j--) {
					if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
							k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						}g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
					} else for (n in i) {
						r.event.remove(a, n + b[j], c, d, !0);
					}
				}r.isEmptyObject(i) && W.remove(a, "handle events");
			}
		}, dispatch: function dispatch(a) {
			var b = r.event.fix(a),
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = new Array(arguments.length),
			    j = (W.get(this, "events") || {})[b.type] || [],
			    k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
				i[c] = arguments[c];
			}if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
				h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
					b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
						b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
					}
				}return k.postDispatch && k.postDispatch.call(this, b), b.result;
			}
		}, handlers: function handlers(a, b) {
			var c,
			    d,
			    e,
			    f,
			    g,
			    h = [],
			    i = b.delegateCount,
			    j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
				if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
					for (f = [], g = {}, c = 0; c < i; c++) {
						d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
					}f.length && h.push({ elem: j, handlers: f });
				}
			}return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
		}, addProp: function addProp(a, b) {
			Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
					if (this.originalEvent) return b(this.originalEvent);
				} : function () {
					if (this.originalEvent) return this.originalEvent[a];
				}, set: function set(b) {
					Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
				} });
		}, fix: function fix(a) {
			return a[r.expando] ? a : new r.Event(a);
		}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
					if (this !== xa() && this.focus) return this.focus(), !1;
				}, delegateType: "focusin" }, blur: { trigger: function trigger() {
					if (this === xa() && this.blur) return this.blur(), !1;
				}, delegateType: "focusout" }, click: { trigger: function trigger() {
					if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
				}, _default: function _default(a) {
					return B(a.target, "a");
				} }, beforeunload: { postDispatch: function postDispatch(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
				} } } }, r.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c);
	}, r.Event = function (a, b) {
		return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
	}, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {
			var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
		}, stopPropagation: function stopPropagation() {
			var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
		}, stopImmediatePropagation: function stopImmediatePropagation() {
			var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
		} }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
			var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
		} }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
		r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
				var c,
				    d = this,
				    e = a.relatedTarget,
				    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
			} };
	}), r.fn.extend({ on: function on(a, b, c, d) {
			return ya(this, a, b, c, d);
		}, one: function one(a, b, c, d) {
			return ya(this, a, b, c, d, 1);
		}, off: function off(a, b, c) {
			var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
				for (e in a) {
					this.off(e, b, a[e]);
				}return this;
			}return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
				r.event.remove(this, a, c, b);
			});
		} });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	    Aa = /<script|<style|<link/i,
	    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    Ca = /^true\/(.*)/,
	    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a, b) {
		return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
	}function Fa(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	}function Ga(a) {
		var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	}function Ha(a, b) {
		var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
			if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};for (e in j) {
					for (c = 0, d = j[e].length; c < d; c++) {
						r.event.add(b, e, j[e][c]);
					}
				}
			}X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
		}
	}function Ia(a, b) {
		var c = b.nodeName.toLowerCase();"input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	}function Ja(a, b, c, d) {
		b = g.apply([], b);var e,
		    f,
		    h,
		    i,
		    j,
		    k,
		    l = 0,
		    m = a.length,
		    n = m - 1,
		    q = b[0],
		    s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
			var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
		});if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
			for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
				j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
			}if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
				j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
			}
		}return a;
	}function Ka(a, b, c) {
		for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
			c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
		}return a;
	}r.extend({ htmlPrefilter: function htmlPrefilter(a) {
			return a.replace(za, "<$1></$2>");
		}, clone: function clone(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.cloneNode(!0),
			    i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
				Ia(f[d], g[d]);
			}if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
				Ha(f[d], g[d]);
			} else Ha(a, h);return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
		}, cleanData: function cleanData(a) {
			for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
				if (U(c)) {
					if (b = c[W.expando]) {
						if (b.events) for (d in b.events) {
							e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
						}c[W.expando] = void 0;
					}c[X.expando] && (c[X.expando] = void 0);
				}
			}
		} }), r.fn.extend({ detach: function detach(a) {
			return Ka(this, a, !0);
		}, remove: function remove(a) {
			return Ka(this, a);
		}, text: function text(a) {
			return T(this, function (a) {
				return void 0 === a ? r.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
				});
			}, null, a, arguments.length);
		}, append: function append() {
			return Ja(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ea(this, a);b.appendChild(a);
				}
			});
		}, prepend: function prepend() {
			return Ja(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ea(this, a);b.insertBefore(a, b.firstChild);
				}
			});
		}, before: function before() {
			return Ja(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this);
			});
		}, after: function after() {
			return Ja(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
			});
		}, empty: function empty() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
			}return this;
		}, clone: function clone(a, b) {
			return a = null != a && a, b = null == b ? a : b, this.map(function () {
				return r.clone(this, a, b);
			});
		}, html: function html(a) {
			return T(this, function (a) {
				var b = this[0] || {},
				    c = 0,
				    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = r.htmlPrefilter(a);try {
						for (; c < d; c++) {
							b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
						}b = 0;
					} catch (e) {}
				}b && this.empty().append(a);
			}, null, a, arguments.length);
		}, replaceWith: function replaceWith() {
			var a = [];return Ja(this, arguments, function (b) {
				var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
			}, a);
		} }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
		r.fn[a] = function (a) {
			for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
				c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
			}return this.pushStack(d);
		};
	});var La = /^margin/,
	    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
	    Na = function Na(b) {
		var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
	};!function () {
		function b() {
			if (i) {
				i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
			}
		}var c,
		    e,
		    f,
		    g,
		    h = d.createElement("div"),
		    i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
				return b(), c;
			}, boxSizingReliable: function boxSizingReliable() {
				return b(), e;
			}, pixelMarginRight: function pixelMarginRight() {
				return b(), f;
			}, reliableMarginLeft: function reliableMarginLeft() {
				return b(), g;
			} }));
	}();function Oa(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	}function Pa(a, b) {
		return { get: function get() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments);
			} };
	}var Qa = /^(none|table(?!-c[ea]).+)/,
	    Ra = /^--/,
	    Sa = { position: "absolute", visibility: "hidden", display: "block" },
	    Ta = { letterSpacing: "0", fontWeight: "400" },
	    Ua = ["Webkit", "Moz", "ms"],
	    Va = d.createElement("div").style;function Wa(a) {
		if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),
		    c = Ua.length;while (c--) {
			if (a = Ua[c] + b, a in Va) return a;
		}
	}function Xa(a) {
		var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;
	}function Ya(a, b, c) {
		var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
	}function Za(a, b, c, d, e) {
		var f,
		    g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
			"margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
		}return g;
	}function $a(a, b, c) {
		var d,
		    e = Na(a),
		    f = Oa(a, b, e),
		    g = "border-box" === r.css(a, "boxSizing", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
	}r.extend({ cssHooks: { opacity: { get: function get(a, b) {
					if (b) {
						var c = Oa(a, "opacity");return "" === c ? "1" : c;
					}
				} } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e,
				    f,
				    g,
				    h = r.camelCase(b),
				    i = Ra.test(b),
				    j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
			}
		}, css: function css(a, b, c, d) {
			var e,
			    f,
			    g,
			    h = r.camelCase(b),
			    i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
		} }), r.each(["height", "width"], function (a, b) {
		r.cssHooks[b] = { get: function get(a, c, d) {
				if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
					return $a(a, b, d);
				});
			}, set: function set(a, c, d) {
				var e,
				    f = d && Na(a),
				    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
			} };
	}), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
		if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {
			return a.getBoundingClientRect().left;
		})) + "px";
	}), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
		r.cssHooks[a + b] = { expand: function expand(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
					e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
				}return e;
			} }, La.test(a) || (r.cssHooks[a + b].set = Ya);
	}), r.fn.extend({ css: function css(a, b) {
			return T(this, function (a, b, c) {
				var d,
				    e,
				    f = {},
				    g = 0;if (Array.isArray(b)) {
					for (d = Na(a), e = b.length; g < e; g++) {
						f[b[g]] = r.css(a, b[g], !1, d);
					}return f;
				}return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
			}, a, b, arguments.length > 1);
		} });function _a(a, b, c, d, e) {
		return new _a.prototype.init(a, b, c, d, e);
	}r.Tween = _a, _a.prototype = { constructor: _a, init: function init(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
		}, cur: function cur() {
			var a = _a.propHooks[this.prop];return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
		}, run: function run(a) {
			var b,
			    c = _a.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
		} }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function get(a) {
				var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
			}, set: function set(a) {
				r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
			} } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function set(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
		} }, r.easing = { linear: function linear(a) {
			return a;
		}, swing: function swing(a) {
			return .5 - Math.cos(a * Math.PI) / 2;
		}, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};var ab,
	    bb,
	    cb = /^(?:toggle|show|hide)$/,
	    db = /queueHooks$/;function eb() {
		bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
	}function fb() {
		return a.setTimeout(function () {
			ab = void 0;
		}), ab = r.now();
	}function gb(a, b) {
		var c,
		    d = 0,
		    e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
			c = ca[d], e["margin" + c] = e["padding" + c] = a;
		}return b && (e.opacity = e.width = a), e;
	}function hb(a, b, c) {
		for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
			if (d = e[f].call(c, b, a)) return d;
		}
	}function ib(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l = "width" in b || "height" in b,
		    m = this,
		    n = {},
		    o = a.style,
		    p = a.nodeType && da(a),
		    q = W.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
			g.unqueued || h();
		}), g.unqueued++, m.always(function () {
			m.always(function () {
				g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
			});
		}));for (d in b) {
			if (e = b[d], cb.test(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
				}n[d] = q && q[d] || r.style(a, d);
			}
		}if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
			l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
				o.display = j;
			}), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
				o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
			})), i = !1;for (d in n) {
				i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
					p || ia([a]), W.remove(a, "fxshow");for (d in n) {
						r.style(a, d, n[d]);
					}
				})), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
			}
		}
	}function jb(a, b) {
		var c, d, e, f, g;for (c in a) {
			if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];for (c in f) {
					c in a || (a[c] = f[c], b[c] = e);
				}
			} else b[d] = e;
		}
	}function kb(a, b, c) {
		var d,
		    e,
		    f = 0,
		    g = kb.prefilters.length,
		    h = r.Deferred().always(function () {
			delete i.elem;
		}),
		    i = function i() {
			if (e) return !1;for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
				j.tweens[g].run(f);
			}return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
		},
		    j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
				var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
			}, stop: function stop(b) {
				var c = 0,
				    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
					j.tweens[c].run(1);
				}return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
			} }),
		    k = j.props;for (jb(k, j.opts.specialEasing); f < g; f++) {
			if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
		}return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j;
	}r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) {
				var c = this.createTween(a, b);return fa(c.elem, a, ba.exec(b), c), c;
			}] }, tweener: function tweener(a, b) {
			r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);for (var c, d = 0, e = a.length; d < e; d++) {
				c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
			}
		}, prefilters: [ib], prefilter: function prefilter(a, b) {
			b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
		} }), r.speed = function (a, b, c) {
		var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
		}, d;
	}, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
			return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
		}, animate: function animate(a, b, c, d) {
			var e = r.isEmptyObject(a),
			    f = r.speed(b, c, d),
			    g = function g() {
				var b = kb(this, r.extend({}, a), f);(e || W.get(this, "finish")) && b.stop(!0);
			};return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
		}, stop: function stop(a, b, c) {
			var d = function d(a) {
				var b = a.stop;delete a.stop, b(c);
			};return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
				    e = null != a && a + "queueHooks",
				    f = r.timers,
				    g = W.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
					g[e] && g[e].stop && db.test(e) && d(g[e]);
				}for (e = f.length; e--;) {
					f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				}!b && c || r.dequeue(this, a);
			});
		}, finish: function finish(a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b,
				    c = W.get(this),
				    d = c[a + "queue"],
				    e = c[a + "queueHooks"],
				    f = r.timers,
				    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
					f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				}for (b = 0; b < g; b++) {
					d[b] && d[b].finish && d[b].finish.call(this);
				}delete c.finish;
			});
		} }), r.each(["toggle", "show", "hide"], function (a, b) {
		var c = r.fn[b];r.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
		};
	}), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
		r.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d);
		};
	}), r.timers = [], r.fx.tick = function () {
		var a,
		    b = 0,
		    c = r.timers;for (ab = r.now(); b < c.length; b++) {
			a = c[b], a() || c[b] !== a || c.splice(b--, 1);
		}c.length || r.fx.stop(), ab = void 0;
	}, r.fx.timer = function (a) {
		r.timers.push(a), r.fx.start();
	}, r.fx.interval = 13, r.fx.start = function () {
		bb || (bb = !0, eb());
	}, r.fx.stop = function () {
		bb = null;
	}, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
		return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
			var e = a.setTimeout(c, b);d.stop = function () {
				a.clearTimeout(e);
			};
		});
	}, function () {
		var a = d.createElement("input"),
		    b = d.createElement("select"),
		    c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
	}();var lb,
	    mb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
			return T(this, r.attr, a, b, arguments.length > 1);
		}, removeAttr: function removeAttr(a) {
			return this.each(function () {
				r.removeAttr(this, a);
			});
		} }), r.extend({ attr: function attr(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
		}, attrHooks: { type: { set: function set(a, b) {
					if (!o.radioValue && "radio" === b && B(a, "input")) {
						var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
					}
				} } }, removeAttr: function removeAttr(a, b) {
			var c,
			    d = 0,
			    e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {
				a.removeAttribute(c);
			}
		} }), lb = { set: function set(a, b, c) {
			return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
		} }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = mb[b] || r.find.attr;mb[b] = function (a, b, d) {
			var e,
			    f,
			    g = b.toLowerCase();return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
		};
	});var nb = /^(?:input|select|textarea|button)$/i,
	    ob = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
			return T(this, r.prop, a, b, arguments.length > 1);
		}, removeProp: function removeProp(a) {
			return this.each(function () {
				delete this[r.propFix[a] || a];
			});
		} }), r.extend({ prop: function prop(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
		}, propHooks: { tabIndex: { get: function get(a) {
					var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
				} } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
			var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
		}, set: function set(a) {
			var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
		} }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		r.propFix[this.toLowerCase()] = this;
	});function pb(a) {
		var b = a.match(L) || [];return b.join(" ");
	}function qb(a) {
		return a.getAttribute && a.getAttribute("class") || "";
	}r.fn.extend({ addClass: function addClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = 0;if (r.isFunction(a)) return this.each(function (b) {
				r(this).addClass(a.call(this, b, qb(this)));
			});if ("string" == typeof a && a) {
				b = a.match(L) || [];while (c = this[i++]) {
					if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
						g = 0;while (f = b[g++]) {
							d.indexOf(" " + f + " ") < 0 && (d += f + " ");
						}h = pb(d), e !== h && c.setAttribute("class", h);
					}
				}
			}return this;
		}, removeClass: function removeClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = 0;if (r.isFunction(a)) return this.each(function (b) {
				r(this).removeClass(a.call(this, b, qb(this)));
			});if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
				b = a.match(L) || [];while (c = this[i++]) {
					if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
						g = 0;while (f = b[g++]) {
							while (d.indexOf(" " + f + " ") > -1) {
								d = d.replace(" " + f + " ", " ");
							}
						}h = pb(d), e !== h && c.setAttribute("class", h);
					}
				}
			}return this;
		}, toggleClass: function toggleClass(a, b) {
			var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
				r(this).toggleClass(a.call(this, c, qb(this), b), b);
			}) : this.each(function () {
				var b, d, e, f;if ("string" === c) {
					d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {
						e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
					}
				} else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
			});
		}, hasClass: function hasClass(a) {
			var b,
			    c,
			    d = 0;b = " " + a + " ";while (c = this[d++]) {
				if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
			}return !1;
		} });var rb = /\r/g;r.fn.extend({ val: function val(a) {
			var b,
			    c,
			    d,
			    e = this[0];{
				if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
					var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
						return null == a ? "" : a + "";
					})), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
				});if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
			}
		} }), r.extend({ valHooks: { option: { get: function get(a) {
					var b = r.find.attr(a, "value");return null != b ? b : pb(r.text(a));
				} }, select: { get: function get(a) {
					var b,
					    c,
					    d,
					    e = a.options,
					    f = a.selectedIndex,
					    g = "select-one" === a.type,
					    h = g ? null : [],
					    i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
						if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
							if (b = r(c).val(), g) return b;h.push(b);
						}
					}return h;
				}, set: function set(a, b) {
					var c,
					    d,
					    e = a.options,
					    f = r.makeArray(b),
					    g = e.length;while (g--) {
						d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
					}return c || (a.selectedIndex = -1), f;
				} } } }), r.each(["radio", "checkbox"], function () {
		r.valHooks[this] = { set: function set(a, b) {
				if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
			} }, o.checkOn || (r.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value;
		});
	});var sb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
			var g,
			    h,
			    i,
			    j,
			    k,
			    m,
			    n,
			    o = [e || d],
			    p = l.call(b, "type") ? b.type : b,
			    q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
				if (!f && !n.noBubble && !r.isWindow(e)) {
					for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
						o.push(h), i = h;
					}i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
				}g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
					b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
				}return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
			}
		}, simulate: function simulate(a, b, c) {
			var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
		} }), r.fn.extend({ trigger: function trigger(a, b) {
			return this.each(function () {
				r.event.trigger(a, b, this);
			});
		}, triggerHandler: function triggerHandler(a, b) {
			var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
		} }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
		r.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
		};
	}), r.fn.extend({ hover: function hover(a, b) {
			return this.mouseenter(a).mouseleave(b || a);
		} }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
		var c = function c(a) {
			r.event.simulate(b, a.target, r.event.fix(a));
		};r.event.special[b] = { setup: function setup() {
				var d = this.ownerDocument || this,
				    e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
			}, teardown: function teardown() {
				var d = this.ownerDocument || this,
				    e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
			} };
	});var tb = a.location,
	    ub = r.now(),
	    vb = /\?/;r.parseXML = function (b) {
		var c;if (!b || "string" != typeof b) return null;try {
			c = new a.DOMParser().parseFromString(b, "text/xml");
		} catch (d) {
			c = void 0;
		}return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
	};var wb = /\[\]$/,
	    xb = /\r?\n/g,
	    yb = /^(?:submit|button|image|reset|file)$/i,
	    zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
		var e;if (Array.isArray(b)) r.each(b, function (b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
		});else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
			Ab(a + "[" + e + "]", b[e], c, d);
		}
	}r.param = function (a, b) {
		var c,
		    d = [],
		    e = function e(a, b) {
			var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
		};if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
			e(this.name, this.value);
		});else for (c in a) {
			Ab(c, a[c], b, e);
		}return d.join("&");
	}, r.fn.extend({ serialize: function serialize() {
			return r.param(this.serializeArray());
		}, serializeArray: function serializeArray() {
			return this.map(function () {
				var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
			}).filter(function () {
				var a = this.type;return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
			}).map(function (a, b) {
				var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
					return { name: b.name, value: a.replace(xb, "\r\n") };
				}) : { name: b.name, value: c.replace(xb, "\r\n") };
			}).get();
		} });var Bb = /%20/g,
	    Cb = /#.*$/,
	    Db = /([?&])_=[^&]*/,
	    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    Gb = /^(?:GET|HEAD)$/,
	    Hb = /^\/\//,
	    Ib = {},
	    Jb = {},
	    Kb = "*/".concat("*"),
	    Lb = d.createElement("a");Lb.href = tb.href;function Mb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");var d,
			    e = 0,
			    f = b.toLowerCase().match(L) || [];if (r.isFunction(c)) while (d = f[e++]) {
				"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
			}
		};
	}function Nb(a, b, c, d) {
		var e = {},
		    f = a === Jb;function g(h) {
			var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
			}), i;
		}return g(b.dataTypes[0]) || !e["*"] && g("*");
	}function Ob(a, b) {
		var c,
		    d,
		    e = r.ajaxSettings.flatOptions || {};for (c in b) {
			void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		}return d && r.extend(!0, a, d), a;
	}function Pb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.contents,
		    i = a.dataTypes;while ("*" === i[0]) {
			i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		}if (d) for (e in h) {
			if (h[e] && h[e].test(d)) {
				i.unshift(e);break;
			}
		}if (i[0] in c) f = i[0];else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;break;
				}g || (g = e);
			}f = f || g;
		}if (f) return f !== i[0] && i.unshift(f), c[f];
	}function Qb(a, b, c, d) {
		var e,
		    f,
		    g,
		    h,
		    i,
		    j = {},
		    k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
			j[g.toLowerCase()] = a.converters[g];
		}f = k.shift();while (f) {
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
				if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
					}
				}if (g !== !0) if (g && a["throws"]) b = g(b);else try {
					b = g(b);
				} catch (l) {
					return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
				}
			}
		}return { state: "success", data: b };
	}r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
			return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
		}, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function ajax(b, c) {
			"object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    n,
			    o = r.ajaxSetup({}, c),
			    p = o.context || o,
			    q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
			    s = r.Deferred(),
			    t = r.Callbacks("once memory"),
			    u = o.statusCode || {},
			    v = {},
			    w = {},
			    x = "canceled",
			    y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
					var b;if (k) {
						if (!h) {
							h = {};while (b = Eb.exec(g)) {
								h[b[1].toLowerCase()] = b[2];
							}
						}b = h[a.toLowerCase()];
					}return null == b ? null : b;
				}, getAllResponseHeaders: function getAllResponseHeaders() {
					return k ? g : null;
				}, setRequestHeader: function setRequestHeader(a, b) {
					return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
				}, overrideMimeType: function overrideMimeType(a) {
					return null == k && (o.mimeType = a), this;
				}, statusCode: function statusCode(a) {
					var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
						u[b] = [u[b], a[b]];
					}return this;
				}, abort: function abort(a) {
					var b = a || x;return e && e.abort(b), A(0, b), this;
				} };if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
				j = d.createElement("a");try {
					j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
				} catch (z) {
					o.crossDomain = !0;
				}
			}if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
				y.setRequestHeader(m, o.headers[m]);
			}if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
				if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
					y.abort("timeout");
				}, o.timeout));try {
					k = !1, e.send(v, A);
				} catch (z) {
					if (k) throw z;A(-1, z);
				}
			} else A(-1, "No Transport");function A(b, c, d, h) {
				var j,
				    m,
				    n,
				    v,
				    w,
				    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
			}return y;
		}, getJSON: function getJSON(a, b, c) {
			return r.get(a, b, c, "json");
		}, getScript: function getScript(a, b) {
			return r.get(a, void 0, b, "script");
		} }), r.each(["get", "post"], function (a, b) {
		r[b] = function (a, c, d, e) {
			return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
		};
	}), r._evalUrl = function (a) {
		return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
	}, r.fn.extend({ wrapAll: function wrapAll(a) {
			var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;while (a.firstElementChild) {
					a = a.firstElementChild;
				}return a;
			}).append(this)), this;
		}, wrapInner: function wrapInner(a) {
			return r.isFunction(a) ? this.each(function (b) {
				r(this).wrapInner(a.call(this, b));
			}) : this.each(function () {
				var b = r(this),
				    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
			});
		}, wrap: function wrap(a) {
			var b = r.isFunction(a);return this.each(function (c) {
				r(this).wrapAll(b ? a.call(this, c) : a);
			});
		}, unwrap: function unwrap(a) {
			return this.parent(a).not("body").each(function () {
				r(this).replaceWith(this.childNodes);
			}), this;
		} }), r.expr.pseudos.hidden = function (a) {
		return !r.expr.pseudos.visible(a);
	}, r.expr.pseudos.visible = function (a) {
		return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
	}, r.ajaxSettings.xhr = function () {
		try {
			return new a.XMLHttpRequest();
		} catch (b) {}
	};var Rb = { 0: 200, 1223: 204 },
	    Sb = r.ajaxSettings.xhr();o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
		var _c, d;if (o.cors || Sb && !b.crossDomain) return { send: function send(e, f) {
				var g,
				    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
					h[g] = b.xhrFields[g];
				}b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
					h.setRequestHeader(g, e[g]);
				}_c = function c(a) {
					return function () {
						_c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
					};
				}, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
					4 === h.readyState && a.setTimeout(function () {
						_c && d();
					});
				}, _c = _c("abort");try {
					h.send(b.hasContent && b.data || null);
				} catch (i) {
					if (_c) throw i;
				}
			}, abort: function abort() {
				_c && _c();
			} };
	}), r.ajaxPrefilter(function (a) {
		a.crossDomain && (a.contents.script = !1);
	}), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
				return r.globalEval(a), a;
			} } }), r.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	}), r.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, _c2;return { send: function send(e, f) {
					b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
						b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
					}), d.head.appendChild(b[0]);
				}, abort: function abort() {
					_c2 && _c2();
				} };
		}
	});var Tb = [],
	    Ub = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
			var a = Tb.pop() || r.expando + "_" + ub++;return this[a] = !0, a;
		} }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e,
		    f,
		    g,
		    h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || r.error(e + " was not called"), g[0];
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments;
		}, d.always(function () {
			void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
		}), "script";
	}), o.createHTMLDocument = function () {
		var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
	}(), r.parseHTML = function (a, b, c) {
		if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
	}, r.fn.load = function (a, b, c) {
		var d,
		    e,
		    f,
		    g = this,
		    h = a.indexOf(" ");return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
			f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
		}).always(c && function (a, b) {
			g.each(function () {
				c.apply(this, f || [a.responseText, b, a]);
			});
		}), this;
	}, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		r.fn[b] = function (a) {
			return this.on(b, a);
		};
	}), r.expr.pseudos.animated = function (a) {
		return r.grep(r.timers, function (b) {
			return a === b.elem;
		}).length;
	}, r.offset = { setOffset: function setOffset(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = r.css(a, "position"),
			    l = r(a),
			    m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
		} }, r.fn.extend({ offset: function offset(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				r.offset.setOffset(this, a, b);
			});var b,
			    c,
			    d,
			    e,
			    f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };
		}, position: function position() {
			if (this[0]) {
				var a,
				    b,
				    c = this[0],
				    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
			}
		}, offsetParent: function offsetParent() {
			return this.map(function () {
				var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
					a = a.offsetParent;
				}return a || ra;
			});
		} }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
		var c = "pageYOffset" === b;r.fn[a] = function (d) {
			return T(this, function (a, d, e) {
				var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
			}, a, d, arguments.length);
		};
	}), r.each(["top", "left"], function (a, b) {
		r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
			if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
		});
	}), r.each({ Height: "height", Width: "width" }, function (a, b) {
		r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
			r.fn[d] = function (e, f) {
				var g = arguments.length && (c || "boolean" != typeof e),
				    h = c || (e === !0 || f === !0 ? "margin" : "border");return T(this, function (b, c, e) {
					var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
				}, b, g ? e : void 0, g);
			};
		});
	}), r.fn.extend({ bind: function bind(a, b, c) {
			return this.on(a, null, b, c);
		}, unbind: function unbind(a, b) {
			return this.off(a, null, b);
		}, delegate: function delegate(a, b, c, d) {
			return this.on(b, a, c, d);
		}, undelegate: function undelegate(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
		} }), r.holdReady = function (a) {
		a ? r.readyWait++ : r.ready(!0);
	}, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () {
		return r;
	});var Vb = a.jQuery,
	    Wb = a.$;return r.noConflict = function (b) {
		return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
	}, b || (a.jQuery = a.$ = r), r;
});

/*!
 * Customized version of iScroll.js 0.0.1
 * It fixes bugs affecting its integration with fullpage.js
 */
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (g, q, f) {
	function p(a, b) {
		this.wrapper = "string" == typeof a ? q.querySelector(a) : a;this.scroller = this.wrapper.children[0];this.scrollerStyle = this.scroller.style;this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: .334, disablePointer: !d.hasPointer, disableTouch: d.hasPointer || !d.hasTouch, disableMouse: d.hasPointer || d.hasTouch, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/ },
			HWCompositing: !0, useTransition: !0, useTransform: !0, bindToWrapper: "undefined" === typeof g.onmousedown };for (var c in b) {
			this.options[c] = b[c];
		}this.translateZ = this.options.HWCompositing && d.hasPerspective ? " translateZ(0)" : "";this.options.useTransition = d.hasTransition && this.options.useTransition;this.options.useTransform = d.hasTransform && this.options.useTransform;this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough;this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY;this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX;this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? d.ease[this.options.bounceEasing] || d.ease.circular : this.options.bounceEasing;this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling;!0 === this.options.tap && (this.options.tap = "tap");this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative");"scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1);this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;this.directionY = this.directionX = this.y = this.x = 0;this._events = {};this._init();this.refresh();this.scrollTo(this.options.startX, this.options.startY);this.enable();
	}function u(a, b, c) {
		var e = q.createElement("div"),
		    d = q.createElement("div");!0 === c && (e.style.cssText = "position:absolute;z-index:9999", d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px");d.className = "iScrollIndicator";"h" == a ? (!0 === c && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", d.style.height = "100%"), e.className = "iScrollHorizontalScrollbar") : (!0 === c && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", d.style.width = "100%"), e.className = "iScrollVerticalScrollbar");e.style.cssText += ";overflow:hidden";b || (e.style.pointerEvents = "none");e.appendChild(d);return e;
	}function v(a, b) {
		this.wrapper = "string" == typeof b.el ? q.querySelector(b.el) : b.el;this.wrapperStyle = this.wrapper.style;this.indicator = this.wrapper.children[0];this.indicatorStyle = this.indicator.style;this.scroller = a;this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 };for (var c in b) {
			this.options[c] = b[c];
		}this.sizeRatioY = this.sizeRatioX = 1;this.maxPosY = this.maxPosX = 0;this.options.interactive && (this.options.disableTouch || (d.addEvent(this.indicator, "touchstart", this), d.addEvent(g, "touchend", this)), this.options.disablePointer || (d.addEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this), d.addEvent(g, d.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (d.addEvent(this.indicator, "mousedown", this), d.addEvent(g, "mouseup", this)));if (this.options.fade) {
			this.wrapperStyle[d.style.transform] = this.scroller.translateZ;var e = d.style.transitionDuration;if (e) {
				this.wrapperStyle[e] = d.isBadAndroid ? "0.0001ms" : "0ms";var f = this;d.isBadAndroid && t(function () {
					"0.0001ms" === f.wrapperStyle[e] && (f.wrapperStyle[e] = "0s");
				});this.wrapperStyle.opacity = "0";
			}
		}
	}var t = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame || function (a) {
		g.setTimeout(a, 1E3 / 60);
	},
	    d = function () {
		function a(a) {
			return !1 === e ? !1 : "" === e ? a : e + a.charAt(0).toUpperCase() + a.substr(1);
		}var b = {},
		    c = q.createElement("div").style,
		    e = function () {
			for (var a = ["t", "webkitT", "MozT", "msT", "OT"], b, e = 0, d = a.length; e < d; e++) {
				if (b = a[e] + "ransform", b in c) return a[e].substr(0, a[e].length - 1);
			}return !1;
		}();b.getTime = Date.now || function () {
			return new Date().getTime();
		};b.extend = function (a, b) {
			for (var c in b) {
				a[c] = b[c];
			}
		};b.addEvent = function (a, b, c, e) {
			a.addEventListener(b, c, !!e);
		};b.removeEvent = function (a, b, c, e) {
			a.removeEventListener(b, c, !!e);
		};b.prefixPointerEvent = function (a) {
			return g.MSPointerEvent ? "MSPointer" + a.charAt(7).toUpperCase() + a.substr(8) : a;
		};b.momentum = function (a, b, c, e, d, k) {
			b = a - b;c = f.abs(b) / c;var g;k = void 0 === k ? 6E-4 : k;g = a + c * c / (2 * k) * (0 > b ? -1 : 1);k = c / k;g < e ? (g = d ? e - d / 2.5 * (c / 8) : e, b = f.abs(g - a), k = b / c) : 0 < g && (g = d ? d / 2.5 * (c / 8) : 0, b = f.abs(a) + g, k = b / c);return { destination: f.round(g), duration: k };
		};var d = a("transform");b.extend(b, { hasTransform: !1 !== d, hasPerspective: a("perspective") in c, hasTouch: "ontouchstart" in g, hasPointer: !(!g.PointerEvent && !g.MSPointerEvent), hasTransition: a("transition") in c });b.isBadAndroid = function () {
			var a = g.navigator.appVersion;return (/Android/.test(a) && !/Chrome\/\d/.test(a) ? (a = a.match(/Safari\/(\d+.\d)/)) && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && 2 <= a.length ? 535.19 > parseFloat(a[1]) : !0 : !1
			);
		}();b.extend(b.style = {}, { transform: d, transitionTimingFunction: a("transitionTimingFunction"), transitionDuration: a("transitionDuration"),
			transitionDelay: a("transitionDelay"), transformOrigin: a("transformOrigin") });b.hasClass = function (a, b) {
			return new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className);
		};b.addClass = function (a, c) {
			if (!b.hasClass(a, c)) {
				var e = a.className.split(" ");e.push(c);a.className = e.join(" ");
			}
		};b.removeClass = function (a, c) {
			b.hasClass(a, c) && (a.className = a.className.replace(new RegExp("(^|\\s)" + c + "(\\s|$)", "g"), " "));
		};b.offset = function (a) {
			for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) {
				b -= a.offsetLeft, c -= a.offsetTop;
			}return { left: b, top: c };
		};b.preventDefaultException = function (a, b) {
			for (var c in b) {
				if (b[c].test(a[c])) return !0;
			}return !1;
		};b.extend(b.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 });b.extend(b.ease = {}, { quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function fn(a) {
					return a * (2 - a);
				} }, circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function fn(a) {
					return f.sqrt(1 - --a * a);
				} }, back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
				fn: function fn(a) {
					return --a * a * (5 * a + 4) + 1;
				} }, bounce: { style: "", fn: function fn(a) {
					return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
				} }, elastic: { style: "", fn: function fn(a) {
					return 0 === a ? 0 : 1 == a ? 1 : .4 * f.pow(2, -10 * a) * f.sin(2 * (a - .055) * f.PI / .22) + 1;
				} } });b.tap = function (a, b) {
			var c = q.createEvent("Event");c.initEvent(b, !0, !0);c.pageX = a.pageX;c.pageY = a.pageY;a.target.dispatchEvent(c);
		};b.click = function (a) {
			var b = a.target,
			    c;/(SELECT|INPUT|TEXTAREA)/i.test(b.tagName) || (c = q.createEvent(g.MouseEvent ? "MouseEvents" : "Event"), c.initEvent("click", !0, !0), c.view = a.view || g, c.detail = 1, c.screenX = b.screenX || 0, c.screenY = b.screenY || 0, c.clientX = b.clientX || 0, c.clientY = b.clientY || 0, c.ctrlKey = !!a.ctrlKey, c.altKey = !!a.altKey, c.shiftKey = !!a.shiftKey, c.metaKey = !!a.metaKey, c.button = 0, c.relatedTarget = null, c._constructed = !0, b.dispatchEvent(c));
		};return b;
	}();p.prototype = { version: "5.2.0", _init: function _init() {
			this._initEvents();(this.options.scrollbars || this.options.indicators) && this._initIndicators();
			this.options.mouseWheel && this._initWheel();this.options.snap && this._initSnap();this.options.keyBindings && this._initKeys();
		}, destroy: function destroy() {
			this._initEvents(!0);clearTimeout(this.resizeTimeout);this.resizeTimeout = null;this._execEvent("destroy");
		}, _transitionEnd: function _transitionEnd(a) {
			a.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")));
		}, _start: function _start(a) {
			if (!(1 != d.eventType[a.type] && 0 !== (a.which ? a.button : 2 > a.button ? 0 : 4 == a.button ? 1 : 2) || !this.enabled || this.initiated && d.eventType[a.type] !== this.initiated)) {
				!this.options.preventDefault || d.isBadAndroid || d.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();var b = a.touches ? a.touches[0] : a;this.initiated = d.eventType[a.type];this.moved = !1;this.directionLocked = this.directionY = this.directionX = this.distY = this.distX = 0;this.startTime = d.getTime();this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, a = this.getComputedPosition(), this._translate(f.round(a.x), f.round(a.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd"));this.startX = this.x;this.startY = this.y;this.absStartX = this.x;this.absStartY = this.y;this.pointX = b.pageX;this.pointY = b.pageY;this._execEvent("beforeScrollStart");
			}
		}, _move: function _move(a) {
			if (this.enabled && d.eventType[a.type] === this.initiated) {
				this.options.preventDefault && a.preventDefault();
				var b = a.touches ? a.touches[0] : a,
				    c = b.pageX - this.pointX,
				    e = b.pageY - this.pointY,
				    k = d.getTime(),
				    h;this.pointX = b.pageX;this.pointY = b.pageY;this.distX += c;this.distY += e;b = f.abs(this.distX);h = f.abs(this.distY);if (!(300 < k - this.endTime && 10 > b && 10 > h)) {
					this.directionLocked || this.options.freeScroll || (this.directionLocked = b > h + this.options.directionLockThreshold ? "h" : h >= b + this.options.directionLockThreshold ? "v" : "n");if ("h" == this.directionLocked) {
						if ("vertical" == this.options.eventPassthrough) a.preventDefault();else if ("horizontal" == this.options.eventPassthrough) {
							this.initiated = !1;return;
						}e = 0;
					} else if ("v" == this.directionLocked) {
						if ("horizontal" == this.options.eventPassthrough) a.preventDefault();else if ("vertical" == this.options.eventPassthrough) {
							this.initiated = !1;return;
						}c = 0;
					}c = this.hasHorizontalScroll ? c : 0;e = this.hasVerticalScroll ? e : 0;a = this.x + c;b = this.y + e;if (0 < a || a < this.maxScrollX) a = this.options.bounce ? this.x + c / 3 : 0 < a ? 0 : this.maxScrollX;if (0 < b || b < this.maxScrollY) b = this.options.bounce ? this.y + e / 3 : 0 < b ? 0 : this.maxScrollY;this.directionX = 0 < c ? -1 : 0 > c ? 1 : 0;this.directionY = 0 < e ? -1 : 0 > e ? 1 : 0;this.moved || this._execEvent("scrollStart");this.moved = !0;this._translate(a, b);300 < k - this.startTime && (this.startTime = k, this.startX = this.x, this.startY = this.y);
				}
			}
		}, _end: function _end(a) {
			if (this.enabled && d.eventType[a.type] === this.initiated) {
				this.options.preventDefault && !d.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();var b, c;c = d.getTime() - this.startTime;var e = f.round(this.x),
				    k = f.round(this.y),
				    h = f.abs(e - this.startX),
				    g = f.abs(k - this.startY);b = 0;var l = "";this.initiated = this.isInTransition = 0;this.endTime = d.getTime();if (!this.resetPosition(this.options.bounceTime)) if (this.scrollTo(e, k), this.moved) {
					if (this._events.flick && 200 > c && 100 > h && 100 > g) this._execEvent("flick");else if (this.options.momentum && 300 > c && (b = this.hasHorizontalScroll ? d.momentum(this.x, this.startX, c, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: e, duration: 0 }, c = this.hasVerticalScroll ? d.momentum(this.y, this.startY, c, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: k, duration: 0 }, e = b.destination, k = c.destination, b = f.max(b.duration, c.duration), this.isInTransition = 1), this.options.snap && (this.currentPage = l = this._nearestSnap(e, k), b = this.options.snapSpeed || f.max(f.max(f.min(f.abs(e - l.x), 1E3), f.min(f.abs(k - l.y), 1E3)), 300), e = l.x, k = l.y, this.directionY = this.directionX = 0, l = this.options.bounceEasing), e != this.x || k != this.y) {
						if (0 < e || e < this.maxScrollX || 0 < k || k < this.maxScrollY) l = d.ease.quadratic;this.scrollTo(e, k, b, l);
					} else this._execEvent("scrollEnd");
				} else this.options.tap && d.tap(a, this.options.tap), this.options.click && d.click(a), this._execEvent("scrollCancel");
			}
		}, _resize: function _resize() {
			var a = this;clearTimeout(this.resizeTimeout);this.resizeTimeout = setTimeout(function () {
				a.refresh();
			}, this.options.resizePolling);
		}, resetPosition: function resetPosition(a) {
			var b = this.x,
			    c = this.y;!this.hasHorizontalScroll || 0 < this.x ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX);!this.hasVerticalScroll || 0 < this.y ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY);if (b == this.x && c == this.y) return !1;this.scrollTo(b, c, a || 0, this.options.bounceEasing);return !0;
		}, disable: function disable() {
			this.enabled = !1;
		}, enable: function enable() {
			this.enabled = !0;
		}, refresh: function refresh() {
			this.wrapperWidth = this.wrapper.clientWidth;this.wrapperHeight = this.wrapper.clientHeight;this.scrollerWidth = this.scroller.offsetWidth;this.scrollerHeight = this.scroller.offsetHeight;this.maxScrollX = this.wrapperWidth - this.scrollerWidth;this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
			this.hasHorizontalScroll = this.options.scrollX && 0 > this.maxScrollX;this.hasVerticalScroll = this.options.scrollY && 0 > this.maxScrollY;this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth);this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight);this.directionY = this.directionX = this.endTime = 0;this.wrapperOffset = d.offset(this.wrapper);this._execEvent("refresh");this.resetPosition();
		}, on: function on(a, b) {
			this._events[a] || (this._events[a] = []);this._events[a].push(b);
		},
		off: function off(a, b) {
			if (this._events[a]) {
				var c = this._events[a].indexOf(b);-1 < c && this._events[a].splice(c, 1);
			}
		}, _execEvent: function _execEvent(a) {
			if (this._events[a]) {
				var b = 0,
				    c = this._events[a].length;if (c) for (; b < c; b++) {
					this._events[a][b].apply(this, [].slice.call(arguments, 1));
				}
			}
		}, scrollBy: function scrollBy(a, b, c, e) {
			a = this.x + a;b = this.y + b;this.scrollTo(a, b, c || 0, e);
		}, scrollTo: function scrollTo(a, b, c, e) {
			e = e || d.ease.circular;this.isInTransition = this.options.useTransition && 0 < c;var f = this.options.useTransition && e.style;!c || f ? (f && (this._transitionTimingFunction(e.style), this._transitionTime(c)), this._translate(a, b)) : this._animate(a, b, c, e.fn);
		}, scrollToElement: function scrollToElement(a, b, c, e, k) {
			if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
				var h = d.offset(a);h.left -= this.wrapperOffset.left;h.top -= this.wrapperOffset.top;!0 === c && (c = f.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2));!0 === e && (e = f.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2));h.left -= c || 0;h.top -= e || 0;h.left = 0 < h.left ? 0 : h.left < this.maxScrollX ? this.maxScrollX : h.left;h.top = 0 < h.top ? 0 : h.top < this.maxScrollY ? this.maxScrollY : h.top;b = void 0 === b || null === b || "auto" === b ? f.max(f.abs(this.x - h.left), f.abs(this.y - h.top)) : b;this.scrollTo(h.left, h.top, b, k);
			}
		}, _transitionTime: function _transitionTime(a) {
			if (this.options.useTransition) {
				a = a || 0;var b = d.style.transitionDuration;if (b) {
					this.scrollerStyle[b] = a + "ms";if (!a && d.isBadAndroid) {
						this.scrollerStyle[b] = "0.0001ms";var c = this;t(function () {
							"0.0001ms" === c.scrollerStyle[b] && (c.scrollerStyle[b] = "0s");
						});
					}if (this.indicators) for (var e = this.indicators.length; e--;) {
						this.indicators[e].transitionTime(a);
					}
				}
			}
		}, _transitionTimingFunction: function _transitionTimingFunction(a) {
			this.scrollerStyle[d.style.transitionTimingFunction] = a;if (this.indicators) for (var b = this.indicators.length; b--;) {
				this.indicators[b].transitionTimingFunction(a);
			}
		}, _translate: function _translate(a, b) {
			this.options.useTransform ? this.scrollerStyle[d.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ : (a = f.round(a), b = f.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px");this.x = a;this.y = b;if (this.indicators) for (var c = this.indicators.length; c--;) {
				this.indicators[c].updatePosition();
			}
		}, _initEvents: function _initEvents(a) {
			a = a ? d.removeEvent : d.addEvent;var b = this.options.bindToWrapper ? this.wrapper : g;a(g, "orientationchange", this);a(g, "resize", this);this.options.click && a(this.wrapper, "click", this, !0);this.options.disableMouse || (a(this.wrapper, "mousedown", this), a(b, "mousemove", this), a(b, "mousecancel", this), a(b, "mouseup", this));d.hasPointer && !this.options.disablePointer && (a(this.wrapper, d.prefixPointerEvent("pointerdown"), this), a(b, d.prefixPointerEvent("pointermove"), this), a(b, d.prefixPointerEvent("pointercancel"), this), a(b, d.prefixPointerEvent("pointerup"), this));d.hasTouch && !this.options.disableTouch && (a(this.wrapper, "touchstart", this), a(b, "touchmove", this), a(b, "touchcancel", this), a(b, "touchend", this));a(this.scroller, "transitionend", this);a(this.scroller, "webkitTransitionEnd", this);a(this.scroller, "oTransitionEnd", this);a(this.scroller, "MSTransitionEnd", this);
		}, getComputedPosition: function getComputedPosition() {
			var a = g.getComputedStyle(this.scroller, null),
			    b;this.options.useTransform ? (a = a[d.style.transform].split(")")[0].split(", "), b = +(a[12] || a[4]), a = +(a[13] || a[5])) : (b = +a.left.replace(/[^-\d.]/g, ""), a = +a.top.replace(/[^-\d.]/g, ""));return { x: b, y: a };
		}, _initIndicators: function _initIndicators() {
			function a(a) {
				if (f.indicators) for (var b = f.indicators.length; b--;) {
					a.call(f.indicators[b]);
				}
			}var b = this.options.interactiveScrollbars,
			    c = "string" != typeof this.options.scrollbars,
			    e = [],
			    d,
			    f = this;this.indicators = [];this.options.scrollbars && (this.options.scrollY && (d = { el: u("v", b, this.options.scrollbars), interactive: b, defaultScrollbars: !0, customStyle: c, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars,
				fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(d.el), e.push(d)), this.options.scrollX && (d = { el: u("h", b, this.options.scrollbars), interactive: b, defaultScrollbars: !0, customStyle: c, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(d.el), e.push(d)));this.options.indicators && (e = e.concat(this.options.indicators));for (b = e.length; b--;) {
				this.indicators.push(new v(this, e[b]));
			}this.options.fadeScrollbars && (this.on("scrollEnd", function () {
				a(function () {
					this.fade();
				});
			}), this.on("scrollCancel", function () {
				a(function () {
					this.fade();
				});
			}), this.on("scrollStart", function () {
				a(function () {
					this.fade(1);
				});
			}), this.on("beforeScrollStart", function () {
				a(function () {
					this.fade(1, !0);
				});
			}));this.on("refresh", function () {
				a(function () {
					this.refresh();
				});
			});this.on("destroy", function () {
				a(function () {
					this.destroy();
				});delete this.indicators;
			});
		}, _initWheel: function _initWheel() {
			d.addEvent(this.wrapper, "wheel", this);d.addEvent(this.wrapper, "mousewheel", this);d.addEvent(this.wrapper, "DOMMouseScroll", this);this.on("destroy", function () {
				clearTimeout(this.wheelTimeout);this.wheelTimeout = null;d.removeEvent(this.wrapper, "wheel", this);d.removeEvent(this.wrapper, "mousewheel", this);d.removeEvent(this.wrapper, "DOMMouseScroll", this);
			});
		}, _wheel: function _wheel(a) {
			if (this.enabled) {
				var b,
				    c,
				    e,
				    d = this;void 0 === this.wheelTimeout && d._execEvent("scrollStart");clearTimeout(this.wheelTimeout);this.wheelTimeout = setTimeout(function () {
					d.options.snap || d._execEvent("scrollEnd");d.wheelTimeout = void 0;
				}, 400);if ("deltaX" in a) 1 === a.deltaMode ? (b = -a.deltaX * this.options.mouseWheelSpeed, a = -a.deltaY * this.options.mouseWheelSpeed) : (b = -a.deltaX, a = -a.deltaY);else if ("wheelDeltaX" in a) b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed, a = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed;else if ("wheelDelta" in a) b = a = a.wheelDelta / 120 * this.options.mouseWheelSpeed;else if ("detail" in a) b = a = -a.detail / 3 * this.options.mouseWheelSpeed;else return;b *= this.options.invertWheelDirection;a *= this.options.invertWheelDirection;
				this.hasVerticalScroll || (b = a, a = 0);this.options.snap ? (c = this.currentPage.pageX, e = this.currentPage.pageY, 0 < b ? c-- : 0 > b && c++, 0 < a ? e-- : 0 > a && e++, this.goToPage(c, e)) : (c = this.x + f.round(this.hasHorizontalScroll ? b : 0), e = this.y + f.round(this.hasVerticalScroll ? a : 0), this.directionX = 0 < b ? -1 : 0 > b ? 1 : 0, this.directionY = 0 < a ? -1 : 0 > a ? 1 : 0, 0 < c ? c = 0 : c < this.maxScrollX && (c = this.maxScrollX), 0 < e ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY), this.scrollTo(c, e, 0));
			}
		}, _initSnap: function _initSnap() {
			this.currentPage = {};"string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap));this.on("refresh", function () {
				var a = 0,
				    b,
				    c = 0,
				    e,
				    d,
				    g,
				    n = 0,
				    l;e = this.options.snapStepX || this.wrapperWidth;var m = this.options.snapStepY || this.wrapperHeight;this.pages = [];if (this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
					if (!0 === this.options.snap) for (d = f.round(e / 2), g = f.round(m / 2); n > -this.scrollerWidth;) {
						this.pages[a] = [];for (l = b = 0; l > -this.scrollerHeight;) {
							this.pages[a][b] = { x: f.max(n, this.maxScrollX), y: f.max(l, this.maxScrollY), width: e, height: m, cx: n - d, cy: l - g }, l -= m, b++;
						}n -= e;a++;
					} else for (m = this.options.snap, b = m.length, e = -1; a < b; a++) {
						if (0 === a || m[a].offsetLeft <= m[a - 1].offsetLeft) c = 0, e++;this.pages[c] || (this.pages[c] = []);n = f.max(-m[a].offsetLeft, this.maxScrollX);l = f.max(-m[a].offsetTop, this.maxScrollY);d = n - f.round(m[a].offsetWidth / 2);g = l - f.round(m[a].offsetHeight / 2);this.pages[c][e] = { x: n, y: l, width: m[a].offsetWidth, height: m[a].offsetHeight, cx: d, cy: g };n > this.maxScrollX && c++;
					}this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);0 === this.options.snapThreshold % 1 ? this.snapThresholdY = this.snapThresholdX = this.options.snapThreshold : (this.snapThresholdX = f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold));
				}
			});this.on("flick", function () {
				var a = this.options.snapSpeed || f.max(f.max(f.min(f.abs(this.x - this.startX), 1E3), f.min(f.abs(this.y - this.startY), 1E3)), 300);this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a);
			});
		}, _nearestSnap: function _nearestSnap(a, b) {
			if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };var c = 0,
			    e = this.pages.length,
			    d = 0;if (f.abs(a - this.absStartX) < this.snapThresholdX && f.abs(b - this.absStartY) < this.snapThresholdY) return this.currentPage;0 < a ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX);0 < b ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY);for (; c < e; c++) {
				if (a >= this.pages[c][0].cx) {
					a = this.pages[c][0].x;
					break;
				}
			}for (e = this.pages[c].length; d < e; d++) {
				if (b >= this.pages[0][d].cy) {
					b = this.pages[0][d].y;break;
				}
			}c == this.currentPage.pageX && (c += this.directionX, 0 > c ? c = 0 : c >= this.pages.length && (c = this.pages.length - 1), a = this.pages[c][0].x);d == this.currentPage.pageY && (d += this.directionY, 0 > d ? d = 0 : d >= this.pages[0].length && (d = this.pages[0].length - 1), b = this.pages[0][d].y);return { x: a, y: b, pageX: c, pageY: d };
		}, goToPage: function goToPage(a, b, c, d) {
			d = d || this.options.bounceEasing;a >= this.pages.length ? a = this.pages.length - 1 : 0 > a && (a = 0);b >= this.pages[a].length ? b = this.pages[a].length - 1 : 0 > b && (b = 0);var g = this.pages[a][b].x,
			    h = this.pages[a][b].y;c = void 0 === c ? this.options.snapSpeed || f.max(f.max(f.min(f.abs(g - this.x), 1E3), f.min(f.abs(h - this.y), 1E3)), 300) : c;this.currentPage = { x: g, y: h, pageX: a, pageY: b };this.scrollTo(g, h, c, d);
		}, next: function next(a, b) {
			var c = this.currentPage.pageX,
			    d = this.currentPage.pageY;c++;c >= this.pages.length && this.hasVerticalScroll && (c = 0, d++);this.goToPage(c, d, a, b);
		}, prev: function prev(a, b) {
			var c = this.currentPage.pageX,
			    d = this.currentPage.pageY;c--;0 > c && this.hasVerticalScroll && (c = 0, d--);this.goToPage(c, d, a, b);
		}, _initKeys: function _initKeys(a) {
			a = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };var b;if ("object" == _typeof(this.options.keyBindings)) for (b in this.options.keyBindings) {
				"string" == typeof this.options.keyBindings[b] && (this.options.keyBindings[b] = this.options.keyBindings[b].toUpperCase().charCodeAt(0));
			} else this.options.keyBindings = {};for (b in a) {
				this.options.keyBindings[b] = this.options.keyBindings[b] || a[b];
			}d.addEvent(g, "keydown", this);this.on("destroy", function () {
				d.removeEvent(g, "keydown", this);
			});
		}, _key: function _key(a) {
			if (this.enabled) {
				var b = this.options.snap,
				    c = b ? this.currentPage.pageX : this.x,
				    e = b ? this.currentPage.pageY : this.y,
				    g = d.getTime(),
				    h = this.keyTime || 0,
				    n;this.options.useTransition && this.isInTransition && (n = this.getComputedPosition(), this._translate(f.round(n.x), f.round(n.y)), this.isInTransition = !1);this.keyAcceleration = 200 > g - h ? f.min(this.keyAcceleration + .25, 50) : 0;switch (a.keyCode) {case this.options.keyBindings.pageUp:
						this.hasHorizontalScroll && !this.hasVerticalScroll ? c += b ? 1 : this.wrapperWidth : e += b ? 1 : this.wrapperHeight;break;case this.options.keyBindings.pageDown:
						this.hasHorizontalScroll && !this.hasVerticalScroll ? c -= b ? 1 : this.wrapperWidth : e -= b ? 1 : this.wrapperHeight;break;case this.options.keyBindings.end:
						c = b ? this.pages.length - 1 : this.maxScrollX;e = b ? this.pages[0].length - 1 : this.maxScrollY;break;case this.options.keyBindings.home:
						e = c = 0;break;case this.options.keyBindings.left:
						c += b ? -1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.up:
						e += b ? 1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.right:
						c -= b ? -1 : 5 + this.keyAcceleration >> 0;break;case this.options.keyBindings.down:
						e -= b ? 1 : 5 + this.keyAcceleration >> 0;break;default:
						return;}b ? this.goToPage(c, e) : (0 < c ? this.keyAcceleration = c = 0 : c < this.maxScrollX && (c = this.maxScrollX, this.keyAcceleration = 0), 0 < e ? this.keyAcceleration = e = 0 : e < this.maxScrollY && (e = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(c, e, 0), this.keyTime = g);
			}
		}, _animate: function _animate(a, b, c, e) {
			function f() {
				var r = d.getTime(),
				    p;r >= q ? (g.isAnimating = !1, g._translate(a, b), g.resetPosition(g.options.bounceTime) || g._execEvent("scrollEnd")) : (r = (r - m) / c, p = e(r), r = (a - n) * p + n, p = (b - l) * p + l, g._translate(r, p), g.isAnimating && t(f));
			}var g = this,
			    n = this.x,
			    l = this.y,
			    m = d.getTime(),
			    q = m + c;this.isAnimating = !0;f();
		}, handleEvent: function handleEvent(a) {
			switch (a.type) {case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":
					this._start(a);break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":
					this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":
					this._end(a);
					break;case "orientationchange":case "resize":
					this._resize();break;case "transitionend":case "webkitTransitionEnd":case "oTransitionEnd":case "MSTransitionEnd":
					this._transitionEnd(a);break;case "wheel":case "DOMMouseScroll":case "mousewheel":
					this._wheel(a);break;case "keydown":
					this._key(a);break;case "click":
					this.enabled && !a._constructed && (a.preventDefault(), a.stopPropagation());}
		} };v.prototype = { handleEvent: function handleEvent(a) {
			switch (a.type) {case "touchstart":case "pointerdown":case "MSPointerDown":case "mousedown":
					this._start(a);
					break;case "touchmove":case "pointermove":case "MSPointerMove":case "mousemove":
					this._move(a);break;case "touchend":case "pointerup":case "MSPointerUp":case "mouseup":case "touchcancel":case "pointercancel":case "MSPointerCancel":case "mousecancel":
					this._end(a);}
		}, destroy: function destroy() {
			this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null);this.options.interactive && (d.removeEvent(this.indicator, "touchstart", this), d.removeEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this), d.removeEvent(this.indicator, "mousedown", this), d.removeEvent(g, "touchmove", this), d.removeEvent(g, d.prefixPointerEvent("pointermove"), this), d.removeEvent(g, "mousemove", this), d.removeEvent(g, "touchend", this), d.removeEvent(g, d.prefixPointerEvent("pointerup"), this), d.removeEvent(g, "mouseup", this));this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper);
		}, _start: function _start(a) {
			var b = a.touches ? a.touches[0] : a;a.preventDefault();a.stopPropagation();this.transitionTime();this.initiated = !0;this.moved = !1;this.lastPointX = b.pageX;this.lastPointY = b.pageY;this.startTime = d.getTime();this.options.disableTouch || d.addEvent(g, "touchmove", this);this.options.disablePointer || d.addEvent(g, d.prefixPointerEvent("pointermove"), this);this.options.disableMouse || d.addEvent(g, "mousemove", this);this.scroller._execEvent("beforeScrollStart");
		}, _move: function _move(a) {
			var b = a.touches ? a.touches[0] : a,
			    c,
			    e;d.getTime();this.moved || this.scroller._execEvent("scrollStart");this.moved = !0;c = b.pageX - this.lastPointX;this.lastPointX = b.pageX;e = b.pageY - this.lastPointY;this.lastPointY = b.pageY;this._pos(this.x + c, this.y + e);a.preventDefault();a.stopPropagation();
		}, _end: function _end(a) {
			if (this.initiated) {
				this.initiated = !1;a.preventDefault();a.stopPropagation();d.removeEvent(g, "touchmove", this);d.removeEvent(g, d.prefixPointerEvent("pointermove"), this);d.removeEvent(g, "mousemove", this);if (this.scroller.options.snap) {
					a = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);var b = this.options.snapSpeed || f.max(f.max(f.min(f.abs(this.scroller.x - a.x), 1E3), f.min(f.abs(this.scroller.y - a.y), 1E3)), 300);if (this.scroller.x != a.x || this.scroller.y != a.y) this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = a, this.scroller.scrollTo(a.x, a.y, b, this.scroller.options.bounceEasing);
				}this.moved && this.scroller._execEvent("scrollEnd");
			}
		}, transitionTime: function transitionTime(a) {
			a = a || 0;var b = d.style.transitionDuration;if (b && (this.indicatorStyle[b] = a + "ms", !a && d.isBadAndroid)) {
				this.indicatorStyle[b] = "0.0001ms";var c = this;t(function () {
					"0.0001ms" === c.indicatorStyle[b] && (c.indicatorStyle[b] = "0s");
				});
			}
		}, transitionTimingFunction: function transitionTimingFunction(a) {
			this.indicatorStyle[d.style.transitionTimingFunction] = a;
		}, refresh: function refresh() {
			this.transitionTime();this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none";this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (d.addClass(this.wrapper, "iScrollBothScrollbars"), d.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (d.removeClass(this.wrapper, "iScrollBothScrollbars"), d.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = f.max(f.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX);this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = f.max(f.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY);this.updatePosition();
		}, updatePosition: function updatePosition() {
			var a = this.options.listenX && f.round(this.sizeRatioX * this.scroller.x) || 0,
			    b = this.options.listenY && f.round(this.sizeRatioY * this.scroller.y) || 0;this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = f.max(this.indicatorWidth + a, 8), this.indicatorStyle.width = this.width + "px"), a = this.minBoundaryX) : a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = f.max(this.indicatorWidth - (a - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = f.max(this.indicatorHeight + 3 * b, 8), this.indicatorStyle.height = this.height + "px"), b = this.minBoundaryY) : b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = f.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px"));this.x = a;this.y = b;this.scroller.options.useTransform ? this.indicatorStyle[d.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = a + "px", this.indicatorStyle.top = b + "px");
		}, _pos: function _pos(a, b) {
			0 > a ? a = 0 : a > this.maxPosX && (a = this.maxPosX);0 > b ? b = 0 : b > this.maxPosY && (b = this.maxPosY);a = this.options.listenX ? f.round(a / this.sizeRatioX) : this.scroller.x;b = this.options.listenY ? f.round(b / this.sizeRatioY) : this.scroller.y;this.scroller.scrollTo(a, b);
		}, fade: function fade(a, b) {
			if (!b || this.visible) {
				clearTimeout(this.fadeTimeout);this.fadeTimeout = null;var c = a ? 0 : 300;this.wrapperStyle[d.style.transitionDuration] = (a ? 250 : 500) + "ms";this.fadeTimeout = setTimeout(function (a) {
					this.wrapperStyle.opacity = a;this.visible = +a;
				}.bind(this, a ? "1" : "0"), c);
			}
		} };p.utils = d;"undefined" != typeof module && module.exports ? module.exports = p : "function" == typeof define && define.amd ? define(function () {
		return p;
	}) : g.IScroll = p;
})(window, document, Math);

/*!
 * fullPage 2.9.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function (e, n) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], function (t) {
		return n(t, e, e.document, e.Math);
	}) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math);
}("undefined" != typeof window ? window : undefined, function (e, n, t, o, i) {
	"use strict";
	var a = "fullpage-wrapper",
	    r = "." + a,
	    l = "fp-scrollable",
	    s = "." + l,
	    c = "fp-responsive",
	    d = "fp-notransition",
	    f = "fp-destroyed",
	    u = "fp-enabled",
	    h = "fp-viewing",
	    p = "active",
	    v = "." + p,
	    g = "fp-completely",
	    m = "." + g,
	    w = ".section",
	    S = "fp-section",
	    y = "." + S,
	    b = y + v,
	    x = y + ":first",
	    C = y + ":last",
	    T = "fp-tableCell",
	    k = "." + T,
	    I = "fp-auto-height",
	    L = "fp-normal-scroll",
	    E = "fp-nav",
	    M = "#" + E,
	    O = "fp-tooltip",
	    A = "." + O,
	    R = "fp-show-active",
	    H = ".slide",
	    B = "fp-slide",
	    z = "." + B,
	    D = z + v,
	    P = "fp-slides",
	    q = "." + P,
	    F = "fp-slidesContainer",
	    V = "." + F,
	    W = "fp-table",
	    U = "fp-slidesNav",
	    Y = "." + U,
	    j = Y + " a",
	    N = "fp-controlArrow",
	    X = "." + N,
	    K = "fp-prev",
	    Q = "." + K,
	    G = N + " " + K,
	    J = X + Q,
	    Z = "fp-next",
	    $ = "." + Z,
	    _ = N + " " + Z,
	    ee = X + $,
	    ne = e(n),
	    te = e(t),
	    oe = { scrollbars: !0, mouseWheel: !0, hideScrollbars: !1, fadeScrollbars: !1, disableMouse: !0, interactiveScrollbars: !0 };e.fn.fullpage = function (l) {
		function s(n, t) {
			n || nt(0), rt("autoScrolling", n, t);var o = e(b);l.autoScrolling && !l.scrollBar ? (ct.css({ overflow: "hidden", height: "100%" }), N(Bt.recordHistory, "internal"), St.css({ "-ms-touch-action": "none", "touch-action": "none" }), o.length && nt(o.position().top)) : (ct.css({ overflow: "visible", height: "initial" }), N(!1, "internal"), St.css({ "-ms-touch-action": "", "touch-action": "" }), o.length && ct.scrollTop(o.position().top));
		}function N(e, n) {
			rt("recordHistory", e, n);
		}function Q(e, n) {
			rt("scrollingSpeed", e, n);
		}function Z(e, n) {
			rt("fitToSection", e, n);
		}function $(e) {
			l.lockAnchors = e;
		}function ae(e) {
			e ? (Kn(), Qn()) : (Xn(), Gn());
		}function re(n, t) {
			"undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function (e, t) {
				ot(n, t, "m");
			})) : n ? (ae(!0), Jn()) : (ae(!1), Zn());
		}function le(n, t) {
			"undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function (e, t) {
				ot(n, t, "k");
			})) : l.keyboardScrolling = n;
		}function se() {
			var n = e(b).prev(y);n.length || !l.loopTop && !l.continuousVertical || (n = e(y).last()), n.length && Ke(n, null, !0);
		}function ce() {
			var n = e(b).next(y);n.length || !l.loopBottom && !l.continuousVertical || (n = e(y).first()), n.length && Ke(n, null, !1);
		}function de(e, n) {
			Q(0, "internal"), fe(e, n), Q(Bt.scrollingSpeed, "internal");
		}function fe(e, n) {
			var t = Dn(e);"undefined" != typeof n ? qn(e, n) : t.length > 0 && Ke(t);
		}function ue(e) {
			je("right", e);
		}function he(e) {
			je("left", e);
		}function pe(n) {
			if (!St.hasClass(f)) {
				bt = !0, yt = ne.height(), e(y).each(function () {
					var n = e(this).find(q),
					    t = e(this).find(z);l.verticalCentered && e(this).find(k).css("height", Bn(e(this)) + "px"), e(this).css("height", yt + "px"), l.scrollOverflow && (t.length ? t.each(function () {
						Rn(e(this));
					}) : Rn(e(this))), t.length > 1 && Sn(n, n.find(D));
				});var t = e(b),
				    o = t.index(y);o && de(o + 1), bt = !1, e.isFunction(l.afterResize) && n && l.afterResize.call(St), e.isFunction(l.afterReBuild) && !n && l.afterReBuild.call(St);
			}
		}function ve(n) {
			var t = dt.hasClass(c);n ? t || (s(!1, "internal"), Z(!1, "internal"), e(M).hide(), dt.addClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(St, n)) : t && (s(Bt.autoScrolling, "internal"), Z(Bt.autoScrolling, "internal"), e(M).show(), dt.removeClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(St, n));
		}function ge() {
			l.css3 && (l.css3 = Nn()), l.scrollBar = l.scrollBar || l.hybrid, we(), Se(), re(!0), s(l.autoScrolling, "internal"), Tn(), jn(), "complete" === t.readyState && rn(), ne.on("load", rn);
		}function me() {
			ne.on("scroll", Re).on("hashchange", ln).blur(pn).resize(Cn), te.keydown(sn).keyup(dn).on("click touchstart", M + " a", vn).on("click touchstart", j, gn).on("click", A, cn), e(y).on("click touchstart", X, hn), l.normalScrollElements && (te.on("mouseenter", l.normalScrollElements, function () {
				ae(!1);
			}), te.on("mouseleave", l.normalScrollElements, function () {
				ae(!0);
			}));
		}function we() {
			var n = St.find(l.sectionSelector);l.anchors.length || (l.anchors = n.filter("[data-anchor]").map(function () {
				return e(this).data("anchor").toString();
			}).get()), l.navigationTooltips.length || (l.navigationTooltips = n.filter("[data-tooltip]").map(function () {
				return e(this).data("tooltip").toString();
			}).get());
		}function Se() {
			St.css({ height: "100%", position: "relative" }), St.addClass(a), e("html").addClass(u), yt = ne.height(), St.removeClass(f), Ce(), e(y).each(function (n) {
				var t = e(this),
				    o = t.find(z),
				    i = o.length;be(t, n), xe(t, n), i > 0 ? ye(t, o, i) : l.verticalCentered && Hn(t);
			}), l.fixedElements && l.css3 && e(l.fixedElements).appendTo(dt), l.navigation && ke(), Le(), l.scrollOverflow ? ("complete" === t.readyState && Ie(), ne.on("load", Ie)) : Oe();
		}function ye(n, t, o) {
			var i = 100 * o,
			    a = 100 / o;t.wrapAll('<div class="' + F + '" />'), t.parent().wrap('<div class="' + P + '" />'), n.find(V).css("width", i + "%"), o > 1 && (l.controlArrows && Te(n), l.slidesNavigation && Vn(n, o)), t.each(function (n) {
				e(this).css("width", a + "%"), l.verticalCentered && Hn(e(this));
			});var r = n.find(D);r.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== r.index()) ? et(r, "internal") : t.eq(0).addClass(p);
		}function be(n, t) {
			t || 0 !== e(b).length || n.addClass(p), vt = e(b), n.css("height", yt + "px"), l.paddingTop && n.css("padding-top", l.paddingTop), l.paddingBottom && n.css("padding-bottom", l.paddingBottom), "undefined" != typeof l.sectionsColor[t] && n.css("background-color", l.sectionsColor[t]), "undefined" != typeof l.anchors[t] && n.attr("data-anchor", l.anchors[t]);
		}function xe(n, t) {
			"undefined" != typeof l.anchors[t] && n.hasClass(p) && Mn(l.anchors[t], t), l.menu && l.css3 && e(l.menu).closest(r).length && e(l.menu).appendTo(dt);
		}function Ce() {
			St.find(l.sectionSelector).addClass(S), St.find(l.slideSelector).addClass(B);
		}function Te(e) {
			e.find(q).after('<div class="' + G + '"></div><div class="' + _ + '"></div>'), "#fff" != l.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + l.controlArrowColor), e.find(J).css("border-color", "transparent " + l.controlArrowColor + " transparent transparent")), l.loopHorizontal || e.find(J).hide();
		}function ke() {
			dt.append('<div id="' + E + '"><ul></ul></div>');var n = e(M);n.addClass(function () {
				return l.showActiveTooltip ? R + " " + l.navigationPosition : l.navigationPosition;
			});for (var t = 0; t < e(y).length; t++) {
				var o = "";l.anchors.length && (o = l.anchors[t]);var i = '<li><a href="#' + o + '"><span></span></a>',
				    a = l.navigationTooltips[t];"undefined" != typeof a && "" !== a && (i += '<div class="' + O + " " + l.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i);
			}e(M).css("margin-top", "-" + e(M).height() / 2 + "px"), e(M).find("li").eq(e(b).index(y)).find("a").addClass(p);
		}function Ie() {
			e(y).each(function () {
				var n = e(this).find(z);n.length ? n.each(function () {
					Rn(e(this));
				}) : Rn(e(this));
			}), Oe();
		}function Le() {
			St.find('iframe[src*="youtube.com/embed/"]').each(function () {
				Ee(e(this), "enablejsapi=1");
			});
		}function Ee(e, n) {
			var t = e.attr("src");e.attr("src", t + Me(t) + n);
		}function Me(e) {
			return (/\?/.test(e) ? "&" : "?"
			);
		}function Oe() {
			var n = e(b);n.addClass(g), l.scrollOverflowHandler.afterRender && l.scrollOverflowHandler.afterRender(n), en(n), nn(n), l.scrollOverflowHandler.afterLoad(), Ae() && e.isFunction(l.afterLoad) && l.afterLoad.call(n, n.data("anchor"), n.index(y) + 1), e.isFunction(l.afterRender) && l.afterRender.call(St);
		}function Ae() {
			var e = n.location.hash.replace("#", "").split("/"),
			    t = Dn(decodeURIComponent(e[0]));return !t.length || t.length && t.index() === vt.index();
		}function Re() {
			var n;if (!l.autoScrolling || l.scrollBar) {
				var o = ne.scrollTop(),
				    i = ze(o),
				    a = 0,
				    r = o + ne.height() / 2,
				    s = dt.height() - ne.height() === o,
				    c = t.querySelectorAll(y);if (s) a = c.length - 1;else if (o) for (var d = 0; d < c.length; ++d) {
					var f = c[d];f.offsetTop <= r && (a = d);
				} else a = 0;if (Be(i) && (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)), n = e(c).eq(a), !n.hasClass(p)) {
					zt = !0;var u,
					    h,
					    v = e(b),
					    m = v.index(y) + 1,
					    w = On(n),
					    S = n.data("anchor"),
					    x = n.index(y) + 1,
					    C = n.find(D);C.length && (h = C.data("anchor"), u = C.index()), Ct && (n.addClass(p).siblings().removeClass(p), e.isFunction(l.onLeave) && l.onLeave.call(v, m, x, w), e.isFunction(l.afterLoad) && l.afterLoad.call(n, S, x), on(v), en(n), nn(n), Mn(S, x - 1), l.anchors.length && (ut = S), Wn(u, h, S, x)), clearTimeout(Mt), Mt = setTimeout(function () {
						zt = !1;
					}, 100);
				}l.fitToSection && (clearTimeout(Ot), Ot = setTimeout(function () {
					l.fitToSection && He();
				}, l.fitToSectionDelay));
			}
		}function He() {
			Ct && (bt = !0, Ke(e(b)), bt = !1);
		}function Be(n) {
			var t = e(b).position().top,
			    o = t + ne.height();return "up" == n ? o >= ne.scrollTop() + ne.height() : t <= ne.scrollTop();
		}function ze(e) {
			var n = e > Dt ? "down" : "up";return Dt = e, Ut = e, n;
		}function De(e, n) {
			if (kt.m[e]) {
				var t = "down" === e ? "bottom" : "top",
				    o = "down" === e ? ce : se;if (n.length > 0) {
					if (!l.scrollOverflowHandler.isScrolled(t, n)) return !0;o();
				} else o();
			}
		}function Pe(e) {
			var n = e.originalEvent;!Fe(e.target) && l.autoScrolling && Ve(n) && e.preventDefault();
		}function qe(n) {
			var t = n.originalEvent,
			    i = e(t.target).closest(y);if (!Fe(n.target) && Ve(t)) {
				l.autoScrolling && n.preventDefault();var a = l.scrollOverflowHandler.scrollable(i),
				    r = _n(t);Ft = r.y, Vt = r.x, i.find(q).length && o.abs(qt - Vt) > o.abs(Pt - Ft) ? !gt && o.abs(qt - Vt) > ne.outerWidth() / 100 * l.touchSensitivity && (qt > Vt ? kt.m.right && ue(i) : kt.m.left && he(i)) : l.autoScrolling && Ct && o.abs(Pt - Ft) > ne.height() / 100 * l.touchSensitivity && (Pt > Ft ? De("down", a) : Ft > Pt && De("up", a));
			}
		}function Fe(n, t) {
			t = t || 0;var o = e(n).parent();return t < l.normalScrollElementTouchThreshold && o.is(l.normalScrollElements) ? !0 : t == l.normalScrollElementTouchThreshold ? !1 : Fe(o, ++t);
		}function Ve(e) {
			return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
		}function We(e) {
			var n = e.originalEvent;if (l.fitToSection && ct.stop(), Ve(n)) {
				var t = _n(n);Pt = t.y, qt = t.x;
			}
		}function Ue(e, n) {
			for (var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0; a < i.length; a++) {
				t += i[a];
			}return o.ceil(t / n);
		}function Ye(t) {
			var i = new Date().getTime(),
			    a = e(m).hasClass(L);if (l.autoScrolling && !pt && !a) {
				t = t || n.event;var r = t.wheelDelta || -t.deltaY || -t.detail,
				    s = o.max(-1, o.min(1, r)),
				    c = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
				    d = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !c;Tt.length > 149 && Tt.shift(), Tt.push(o.abs(r)), l.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);var f = e(b),
				    u = l.scrollOverflowHandler.scrollable(f),
				    h = i - Wt;if (Wt = i, h > 200 && (Tt = []), Ct) {
					var p = Ue(Tt, 10),
					    v = Ue(Tt, 70),
					    g = p >= v;g && d && (0 > s ? De("down", u) : De("up", u));
				}return !1;
			}l.fitToSection && ct.stop();
		}function je(n, t) {
			var o = "undefined" == typeof t ? e(b) : t,
			    i = o.find(q),
			    a = i.find(z).length;if (!(!i.length || gt || 2 > a)) {
				var r = i.find(D),
				    s = null;if (s = "left" === n ? r.prev(z) : r.next(z), !s.length) {
					if (!l.loopHorizontal) return;s = "left" === n ? r.siblings(":last") : r.siblings(":first");
				}gt = !0, Sn(i, s, n);
			}
		}function Ne() {
			e(D).each(function () {
				et(e(this), "internal");
			});
		}function Xe(e) {
			var n = e.position(),
			    t = n.top,
			    o = n.top > Ut,
			    i = t - yt + e.outerHeight(),
			    a = l.bigSectionsDestination;return e.outerHeight() > yt ? (!o && !a || "bottom" === a) && (t = i) : (o || bt && e.is(":last-child")) && (t = i), Ut = t, t;
		}function Ke(n, t, o) {
			if ("undefined" != typeof n) {
				var i,
				    a,
				    r = Xe(n),
				    s = { element: n, callback: t, isMovementUp: o, dtop: r, yMovement: On(n), anchorLink: n.data("anchor"), sectionIndex: n.index(y), activeSlide: n.find(D), activeSection: e(b), leavingSection: e(b).index(y) + 1, localIsResizing: bt };s.activeSection.is(n) && !bt || l.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(I) || (s.activeSlide.length && (i = s.activeSlide.data("anchor"), a = s.activeSlide.index()), l.autoScrolling && l.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = Je(s)), (!e.isFunction(l.onLeave) || s.localIsResizing || l.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) !== !1) && (s.localIsResizing || on(s.activeSection), l.scrollOverflowHandler.beforeLeave(), n.addClass(p).siblings().removeClass(p), en(n), l.scrollOverflowHandler.onLeave(), Ct = !1, Wn(a, i, s.anchorLink, s.sectionIndex), Qe(s), ut = s.anchorLink, Mn(s.anchorLink, s.sectionIndex)));
			}
		}function Qe(n) {
			if (l.css3 && l.autoScrolling && !l.scrollBar) {
				var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";zn(t, !0), l.scrollingSpeed ? (clearTimeout(Lt), Lt = setTimeout(function () {
					$e(n);
				}, l.scrollingSpeed)) : $e(n);
			} else {
				var i = Ge(n);e(i.element).animate(i.options, l.scrollingSpeed, l.easing).promise().done(function () {
					l.scrollBar ? setTimeout(function () {
						$e(n);
					}, 30) : $e(n);
				});
			}
		}function Ge(e) {
			var n = {};return l.autoScrolling && !l.scrollBar ? (n.options = { top: -e.dtop }, n.element = r) : (n.options = { scrollTop: e.dtop }, n.element = "html, body"), n;
		}function Je(n) {
			return n.isMovementUp ? e(b).before(n.activeSection.nextAll(y)) : e(b).after(n.activeSection.prevAll(y).get().reverse()), nt(e(b).position().top), Ne(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = On(n.element), n;
		}function Ze(n) {
			n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(x).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements), nt(e(b).position().top), Ne());
		}function $e(n) {
			Ze(n), e.isFunction(l.afterLoad) && !n.localIsResizing && l.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), l.scrollOverflowHandler.afterLoad(), n.localIsResizing || nn(n.element), n.element.addClass(g).siblings().removeClass(g), Ct = !0, e.isFunction(n.callback) && n.callback.call(this);
		}function _e(e, n) {
			e.attr(n, e.data(n)).removeAttr("data-" + n);
		}function en(n) {
			if (l.lazyLoading) {
				var t,
				    o = an(n);o.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function () {
					t = e(this), e.each(["src", "srcset"], function (e, n) {
						var o = t.attr("data-" + n);"undefined" != typeof o && o && _e(t, n);
					}), t.is("source") && t.closest("video").get(0).load();
				});
			}
		}function nn(n) {
			var t = an(n);t.find("video, audio").each(function () {
				var n = e(this).get(0);n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play();
			}), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
				var n = e(this).get(0);n.hasAttribute("data-autoplay") && tn(n), n.onload = function () {
					n.hasAttribute("data-autoplay") && tn(n);
				};
			});
		}function tn(e) {
			e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
		}function on(n) {
			var t = an(n);t.find("video, audio").each(function () {
				var n = e(this).get(0);n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause();
			}), t.find('iframe[src*="youtube.com/embed/"]').each(function () {
				var n = e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
			});
		}function an(n) {
			var t = n.find(D);return t.length && (n = e(t)), n;
		}function rn() {
			var e = n.location.hash.replace("#", "").split("/"),
			    t = decodeURIComponent(e[0]),
			    o = decodeURIComponent(e[1]);t && (l.animateAnchor ? qn(t, o) : de(t, o));
		}function ln() {
			if (!zt && !l.lockAnchors) {
				var e = n.location.hash.replace("#", "").split("/"),
				    t = decodeURIComponent(e[0]),
				    o = decodeURIComponent(e[1]),
				    i = "undefined" == typeof ut,
				    a = "undefined" == typeof ut && "undefined" == typeof o && !gt;t.length && (t && t !== ut && !i || a || !gt && ht != o) && qn(t, o);
			}
		}function sn(n) {
			clearTimeout(At);var t = e(":focus");if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && l.keyboardScrolling && l.autoScrolling) {
				var o = n.which,
				    i = [40, 38, 32, 33, 34];e.inArray(o, i) > -1 && n.preventDefault(), pt = n.ctrlKey, At = setTimeout(function () {
					mn(n);
				}, 150);
			}
		}function cn() {
			e(this).prev().trigger("click");
		}function dn(e) {
			xt && (pt = e.ctrlKey);
		}function fn(e) {
			2 == e.which && (Yt = e.pageY, St.on("mousemove", wn));
		}function un(e) {
			2 == e.which && St.off("mousemove");
		}function hn() {
			var n = e(this).closest(y);e(this).hasClass(K) ? kt.m.left && he(n) : kt.m.right && ue(n);
		}function pn() {
			xt = !1, pt = !1;
		}function vn(n) {
			n.preventDefault();var t = e(this).parent().index();Ke(e(y).eq(t));
		}function gn(n) {
			n.preventDefault();var t = e(this).closest(y).find(q),
			    o = t.find(z).eq(e(this).closest("li").index());Sn(t, o);
		}function mn(n) {
			var t = n.shiftKey;if (Ct || !([37, 39].indexOf(n.which) < 0)) switch (n.which) {case 38:case 33:
					kt.k.up && se();break;case 32:
					if (t && kt.k.up) {
						se();break;
					}case 40:case 34:
					kt.k.down && ce();break;case 36:
					kt.k.up && fe(1);break;case 35:
					kt.k.down && fe(e(y).length);break;case 37:
					kt.k.left && he();break;case 39:
					kt.k.right && ue();break;default:
					return;}
		}function wn(e) {
			Ct && (e.pageY < Yt && kt.m.up ? se() : e.pageY > Yt && kt.m.down && ce()), Yt = e.pageY;
		}function Sn(n, t, o) {
			var i = n.closest(y),
			    a = { slides: n, destiny: t, direction: o, destinyPos: t.position(), slideIndex: t.index(), section: i, sectionIndex: i.index(y), anchorLink: i.data("anchor"), slidesNav: i.find(Y), slideAnchor: Yn(t), prevSlide: i.find(D), prevSlideIndex: i.find(D).index(), localIsResizing: bt };return a.xMovement = An(a.prevSlideIndex, a.slideIndex), a.localIsResizing || (Ct = !1), l.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(l.onSlideLeave) && l.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.xMovement, a.slideIndex) === !1 ? void (gt = !1) : (t.addClass(p).siblings().removeClass(p), a.localIsResizing || (on(a.prevSlide), en(t)), !l.loopHorizontal && l.controlArrows && (i.find(J).toggle(0 !== a.slideIndex), i.find(ee).toggle(!t.is(":last-child"))), i.hasClass(p) && !a.localIsResizing && Wn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), void bn(n, a, !0));
		}function yn(n) {
			xn(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(l.afterSlideLoad) && l.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), Ct = !0, nn(n.destiny)), gt = !1;
		}function bn(e, n, t) {
			var i = n.destinyPos;if (l.css3) {
				var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";kn(e.find(V)).css(tt(a)), Et = setTimeout(function () {
					t && yn(n);
				}, l.scrollingSpeed, l.easing);
			} else e.animate({ scrollLeft: o.round(i.left) }, l.scrollingSpeed, l.easing, function () {
				t && yn(n);
			});
		}function xn(e, n) {
			e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p);
		}function Cn() {
			if (Tn(), mt) {
				var n = e(t.activeElement);if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
					var i = ne.height();o.abs(i - jt) > 20 * o.max(jt, i) / 100 && (pe(!0), jt = i);
				}
			} else clearTimeout(It), It = setTimeout(function () {
				pe(!0);
			}, 350);
		}function Tn() {
			var e = l.responsive || l.responsiveWidth,
			    n = l.responsiveHeight,
			    t = e && ne.outerWidth() < e,
			    o = n && ne.height() < n;e && n ? ve(t || o) : e ? ve(t) : n && ve(o);
		}function kn(e) {
			var n = "all " + l.scrollingSpeed + "ms " + l.easingcss3;return e.removeClass(d), e.css({ "-webkit-transition": n, transition: n });
		}function In(e) {
			return e.addClass(d);
		}function Ln(n, t) {
			l.navigation && (e(M).find(v).removeClass(p), n ? e(M).find('a[href="#' + n + '"]').addClass(p) : e(M).find("li").eq(t).find("a").addClass(p));
		}function En(n) {
			l.menu && (e(l.menu).find(v).removeClass(p), e(l.menu).find('[data-menuanchor="' + n + '"]').addClass(p));
		}function Mn(e, n) {
			En(e), Ln(e, n);
		}function On(n) {
			var t = e(b).index(y),
			    o = n.index(y);return t == o ? "none" : t > o ? "up" : "down";
		}function An(e, n) {
			return e == n ? "none" : e > n ? "left" : "right";
		}function Rn(e) {
			if (!e.hasClass("fp-noscroll")) {
				e.css("overflow", "hidden");var n,
				    t = l.scrollOverflowHandler,
				    o = t.wrapContent(),
				    i = e.closest(y),
				    a = t.scrollable(e);a.length ? n = t.scrollHeight(e) : (n = e.get(0).scrollHeight, l.verticalCentered && (n = e.find(k).get(0).scrollHeight));var r = yt - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));n > r ? a.length ? t.update(e, r) : (l.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o), t.create(e, r)) : t.remove(e), e.css("overflow", "");
			}
		}function Hn(e) {
			e.hasClass(W) || e.addClass(W).wrapInner('<div class="' + T + '" style="height:' + Bn(e) + 'px;" />');
		}function Bn(e) {
			var n = yt;if (l.paddingTop || l.paddingBottom) {
				var t = e;t.hasClass(S) || (t = e.closest(y));var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));n = yt - o;
			}return n;
		}function zn(e, n) {
			n ? kn(St) : In(St), St.css(tt(e)), setTimeout(function () {
				St.removeClass(d);
			}, 10);
		}function Dn(n) {
			if (!n) return [];var t = St.find(y + '[data-anchor="' + n + '"]');return t.length || (t = e(y).eq(n - 1)), t;
		}function Pn(e, n) {
			var t = n.find(q),
			    o = t.find(z + '[data-anchor="' + e + '"]');return o.length || (o = t.find(z).eq(e)), o;
		}function qn(e, n) {
			var t = Dn(e);t.length && ("undefined" == typeof n && (n = 0), e === ut || t.hasClass(p) ? Fn(t, n) : Ke(t, function () {
				Fn(t, n);
			}));
		}function Fn(e, n) {
			if ("undefined" != typeof n) {
				var t = e.find(q),
				    o = Pn(n, e);o.length && Sn(t, o);
			}
		}function Vn(e, n) {
			e.append('<div class="' + U + '"><ul></ul></div>');var t = e.find(Y);t.addClass(l.slidesNavPosition);for (var o = 0; n > o; o++) {
				t.find("ul").append('<li><a href="#"><span></span></a></li>');
			}t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(p);
		}function Wn(e, n, t, o) {
			var i = "";l.anchors.length && !l.lockAnchors && (e ? ("undefined" != typeof t && (i = t), "undefined" == typeof n && (n = e), ht = n, Un(i + "/" + n)) : "undefined" != typeof e ? (ht = n, Un(t)) : Un(t)), jn();
		}function Un(e) {
			if (l.recordHistory) location.hash = e;else if (mt || wt) n.history.replaceState(i, i, "#" + e);else {
				var t = n.location.href.split("#")[0];n.location.replace(t + "#" + e);
			}
		}function Yn(e) {
			var n = e.data("anchor"),
			    t = e.index();return "undefined" == typeof n && (n = t), n;
		}function jn() {
			var n = e(b),
			    t = n.find(D),
			    o = Yn(n),
			    i = Yn(t),
			    a = String(o);t.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");var r = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");dt[0].className = dt[0].className.replace(r, ""), dt.addClass(h + "-" + a);
		}function Nn() {
			var e,
			    o = t.createElement("p"),
			    a = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };t.body.insertBefore(o, null);for (var r in a) {
				o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(a[r]));
			}return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e;
		}function Xn() {
			t.addEventListener ? (t.removeEventListener("mousewheel", Ye, !1), t.removeEventListener("wheel", Ye, !1), t.removeEventListener("MozMousePixelScroll", Ye, !1)) : t.detachEvent("onmousewheel", Ye);
		}function Kn() {
			var e,
			    o = "";n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");var a = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";"DOMMouseScroll" == a ? t[e](o + "MozMousePixelScroll", Ye, !1) : t[e](o + a, Ye, !1);
		}function Qn() {
			St.on("mousedown", fn).on("mouseup", un);
		}function Gn() {
			St.off("mousedown", fn).off("mouseup", un);
		}function Jn() {
			(mt || wt) && (l.autoScrolling && dt.off(Ht.touchmove).on(Ht.touchmove, Pe), e(r).off(Ht.touchstart).on(Ht.touchstart, We).off(Ht.touchmove).on(Ht.touchmove, qe));
		}function Zn() {
			(mt || wt) && e(r).off(Ht.touchstart).off(Ht.touchmove);
		}function $n() {
			var e;return e = n.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" };
		}function _n(e) {
			var n = [];return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, wt && Ve(e) && l.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n;
		}function et(e, n) {
			Q(0, "internal"), "undefined" != typeof n && (bt = !0), Sn(e.closest(q), e), "undefined" != typeof n && (bt = !1), Q(Bt.scrollingSpeed, "internal");
		}function nt(e) {
			var n = o.round(e);if (l.css3 && l.autoScrolling && !l.scrollBar) {
				var t = "translate3d(0px, -" + n + "px, 0px)";zn(t, !1);
			} else l.autoScrolling && !l.scrollBar ? St.css("top", -n) : ct.scrollTop(n);
		}function tt(e) {
			return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
		}function ot(e, n, t) {
			switch (n) {case "up":
					kt[t].up = e;break;case "down":
					kt[t].down = e;break;case "left":
					kt[t].left = e;break;case "right":
					kt[t].right = e;break;case "all":
					"m" == t ? re(e) : le(e);}
		}function it(n) {
			s(!1, "internal"), re(!1), le(!1), St.addClass(f), clearTimeout(Et), clearTimeout(Lt), clearTimeout(It), clearTimeout(Mt), clearTimeout(Ot), ne.off("scroll", Re).off("hashchange", ln).off("resize", Cn), te.off("click touchstart", M + " a").off("mouseenter", M + " li").off("mouseleave", M + " li").off("click touchstart", j).off("mouseover", l.normalScrollElements).off("mouseout", l.normalScrollElements), e(y).off("click touchstart", X), clearTimeout(Et), clearTimeout(Lt), n && at();
		}function at() {
			nt(0), St.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
				_e(e(this), "src");
			}), St.find("img[data-srcset]").each(function () {
				_e(e(this), "srcset");
			}), e(M + ", " + Y + ", " + X).remove(), e(y).css({ height: "", "background-color": "", padding: "" }), e(z).css({ width: "" }), St.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), ct.css({ overflow: "", height: "" }), e("html").removeClass(u), dt.removeClass(c), e.each(dt.get(0).className.split(/\s+/), function (e, n) {
				0 === n.indexOf(h) && dt.removeClass(n);
			}), e(y + ", " + z).each(function () {
				l.scrollOverflowHandler.remove(e(this)), e(this).removeClass(W + " " + p);
			}), In(St), St.find(k + ", " + V + ", " + q).each(function () {
				e(this).replaceWith(this.childNodes);
			}), St.css({ "-webkit-transition": "none", transition: "none" }), ct.scrollTop(0);var n = [S, B, F];e.each(n, function (n, t) {
				e("." + t).removeClass(t);
			});
		}function rt(e, n, t) {
			l[e] = n, "internal" !== t && (Bt[e] = n);
		}function lt() {
			var n = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];return e("html").hasClass(u) ? void st("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (l.continuousVertical && (l.loopTop || l.loopBottom) && (l.continuousVertical = !1, st("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), l.scrollBar && l.scrollOverflow && st("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !l.continuousVertical || !l.scrollBar && l.autoScrolling || (l.continuousVertical = !1, st("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(n, function (e, n) {
				l[n] && st("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n);
			}), void e.each(l.anchors, function (n, t) {
				var o = te.find("[name]").filter(function () {
					return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase();
				}),
				    i = te.find("[id]").filter(function () {
					return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase();
				});(i.length || o.length) && (st("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && st("error", '"' + t + '" is is being used by another element `id` property'), o.length && st("error", '"' + t + '" is is being used by another element `name` property'));
			}));
		}function st(e, n) {
			console && console[e] && console[e]("fullPage: " + n);
		}if (e("html").hasClass(u)) return void lt();var ct = e("html, body"),
		    dt = e("body"),
		    ft = e.fn.fullpage;l = e.extend({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowReset: !1, scrollOverflowHandler: ie, scrollOverflowOptions: null, touchSensitivity: 5, normalScrollElementTouchThreshold: 5, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, sectionSelector: w, slideSelector: H, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: !0 }, l);var ut,
		    ht,
		    pt,
		    vt,
		    gt = !1,
		    mt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
		    wt = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
		    St = e(this),
		    yt = ne.height(),
		    bt = !1,
		    xt = !0,
		    Ct = !0,
		    Tt = [],
		    kt = {};kt.m = { up: !0, down: !0, left: !0, right: !0 }, kt.k = e.extend(!0, {}, kt.m);var It,
		    Lt,
		    Et,
		    Mt,
		    Ot,
		    At,
		    Rt = $n(),
		    Ht = { touchmove: "ontouchmove" in n ? "touchmove" : Rt.move, touchstart: "ontouchstart" in n ? "touchstart" : Rt.down },
		    Bt = e.extend(!0, {}, l);lt(), oe.click = wt, oe = e.extend(oe, l.scrollOverflowOptions), e.extend(e.easing, { easeInOutCubic: function easeInOutCubic(e, n, t, o, i) {
				return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t;
			} }), e(this).length && (ft.setAutoScrolling = s, ft.setRecordHistory = N, ft.setScrollingSpeed = Q, ft.setFitToSection = Z, ft.setLockAnchors = $, ft.setMouseWheelScrolling = ae, ft.setAllowScrolling = re, ft.setKeyboardScrolling = le, ft.moveSectionUp = se, ft.moveSectionDown = ce, ft.silentMoveTo = de, ft.moveTo = fe, ft.moveSlideRight = ue, ft.moveSlideLeft = he, ft.fitToSection = He, ft.reBuild = pe, ft.setResponsive = ve, ft.destroy = it, ge(), me());var zt = !1,
		    Dt = 0,
		    Pt = 0,
		    qt = 0,
		    Ft = 0,
		    Vt = 0,
		    Wt = new Date().getTime(),
		    Ut = 0,
		    Yt = 0,
		    jt = yt;
	}, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
		this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this);
	}, IScroll.prototype.wheelOff = function () {
		this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this);
	});var ie = { refreshId: null, iScrollInstances: [], toggleWheel: function toggleWheel(n) {
			var t = e(b).find(s);t.each(function () {
				var t = e(this).data("iscrollInstance");"undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff());
			});
		}, onLeave: function onLeave() {
			ie.toggleWheel(!1);
		}, beforeLeave: function beforeLeave() {
			ie.onLeave();
		}, afterLoad: function afterLoad() {
			ie.toggleWheel(!0);
		}, create: function create(n, t) {
			var o = n.find(s);o.height(t), o.each(function () {
				var n = e(this),
				    t = n.data("iscrollInstance");t && e.each(ie.iScrollInstances, function () {
					e(this).destroy();
				}), t = new IScroll(n.get(0), oe), ie.iScrollInstances.push(t), t.wheelOff(), n.data("iscrollInstance", t);
			});
		}, isScrolled: function isScrolled(e, n) {
			var t = n.data("iscrollInstance");return t ? "top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0 : !0;
		}, scrollable: function scrollable(e) {
			return e.find(q).length ? e.find(D).find(s) : e.find(s);
		}, scrollHeight: function scrollHeight(e) {
			return e.find(s).children().first().get(0).scrollHeight;
		}, remove: function remove(e) {
			var n = e.find(s);if (n.length) {
				var t = n.data("iscrollInstance");t.destroy(), n.data("iscrollInstance", null);
			}e.find(s).children().first().children().first().unwrap().unwrap();
		}, update: function update(n, t) {
			clearTimeout(ie.refreshId), ie.refreshId = setTimeout(function () {
				e.each(ie.iScrollInstances, function () {
					e(this).get(0).refresh();
				});
			}, 150), n.find(s).css("height", t + "px").parent().css("height", t + "px");
		}, wrapContent: function wrapContent() {
			return '<div class="' + l + '"><div class="fp-scroller"></div></div>';
		} };
});
//# sourceMappingURL=jquery.fullpage.min.js.map

/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.17
 */
(function () {
	if (window && window.addEventListener) {
		var c = Object.create(null),
		    l,
		    p,
		    a = function a() {
			clearTimeout(p);p = setTimeout(l, 100);
		},
		    q = function q() {},
		    t = function t() {
			var e;window.addEventListener("resize", a, !1);window.addEventListener("orientationchange", a, !1);window.MutationObserver ? (e = new MutationObserver(a), e.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 }), q = function q() {
				try {
					e.disconnect(), window.removeEventListener("resize", a, !1), window.removeEventListener("orientationchange", a, !1);
				} catch (c) {}
			}) : (document.documentElement.addEventListener("DOMSubtreeModified", a, !1), q = function q() {
				document.documentElement.removeEventListener("DOMSubtreeModified", a, !1);window.removeEventListener("resize", a, !1);window.removeEventListener("orientationchange", a, !1);
			});
		},
		    u = function u(e) {
			var c,
			    a = location.hostname;if (window.XMLHttpRequest) {
				c = new XMLHttpRequest();var m = document.createElement("a");m.href = e;e = m.hostname;c = void 0 === c.withCredentials && "" !== e && e !== a ? XDomainRequest || void 0 : XMLHttpRequest;
			}return c;
		};
		l = function l() {
			function e() {
				--n;0 === n && t();
			}function a(b) {
				return function () {
					!0 !== c[b.base] && b.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + b.hash);
				};
			}function l(b) {
				return function () {
					var c = document.body,
					    a = document.createElement("x");b.onload = null;a.innerHTML = b.responseText;if (a = a.getElementsByTagName("svg")[0]) a.setAttribute("aria-hidden", "true"), a.style.position = "absolute", a.style.width = 0, a.style.height = 0, a.style.overflow = "hidden", c.insertBefore(a, c.firstChild);e();
				};
			}function m(a) {
				return function () {
					a.onerror = null;a.ontimeout = null;e();
				};
			}var d,
			    f,
			    g,
			    h,
			    n = 0,
			    b,
			    k;q();k = document.getElementsByTagName("use");for (h = 0; h < k.length; h += 1) {
				try {
					f = k[h].getBoundingClientRect();
				} catch (v) {
					f = !1;
				}g = k[h].getAttributeNS("http://www.w3.org/1999/xlink", "href").split("#");d = g[0];g = g[1];b = f && 0 === f.left && 0 === f.right && 0 === f.top && 0 === f.bottom;f && 0 === f.width && 0 === f.height && !b ? d.length && (b = c[d], !0 !== b && setTimeout(a({ useEl: k[h], base: d, hash: g }), 0), void 0 === b && (g = u(d), void 0 !== g && (b = new g(), c[d] = b, b.onload = l(b), b.onerror = m(b), b.ontimeout = m(b), b.open("GET", d), b.send(), n += 1))) : b || (void 0 === c[d] ? c[d] = !0 : c[d].onload && (c[d].abort(), c[d].onload = void 0, c[d] = !0));
			}k = "";n += 1;e();
		};window.addEventListener("load", function r() {
			window.removeEventListener("load", r, !1);p = setTimeout(l, 0);
		}, !1);
	}
})();
$(function () {

	var $body = $('body');

	function detectScrollWidth() {
		var outer = $('<div class="outer">').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
		    inner = $('<div>').css({ width: '100%' }).appendTo(outer).outerWidth();

		outer.remove();
		return 100 - inner;
	}

	function offBodyScroll() {
		$body.addClass('is-overflow').css('padding-right', detectScrollWidth() + 'px');
	}

	function onBodyScroll() {
		$body.removeClass('is-overflow').removeAttr('style');
	}

	// popup
	var open = 'is-open';

	var Popup = function () {
		function Popup(el) {
			_classCallCheck(this, Popup);

			this.el = $(el);
			this.close = $('.js-popup-close');

			this._openPopup();
			this._closePopup();
		}

		_createClass(Popup, [{
			key: "_openPopup",
			value: function _openPopup() {
				var _this = this;

				this.el.click(function (e) {
					e.preventDefault();
					offBodyScroll();
					$(".js-popup[data-index=\"" + _this.el.data('popup') + "\"]").addClass(open);
				});
			}
		}, {
			key: "_closePopup",
			value: function _closePopup() {
				this.close.click(function (e) {
					e.preventDefault();
					var parent = $(this).closest('.js-popup');

					if (parent.hasClass(open)) {
						parent.removeClass(open);
						onBodyScroll();
					}
				});
			}
		}]);

		return Popup;
	}();

	$('.js-open-popup').each(function () {
		new Popup(this);
	});
});

$(function () {

	function initFullpage() {
		var $homeFullpage = $('.js-home-fullpage'),
		    screenDelay = 1000,
		    navDelay = 0,
		    $timeoutId = void 0,
		    $animationIsFinished = false,
		    $header = $('.js-header'),
		    $logoBlack = $('.js-logo-black'),
		    $logoWhite = $('.js-logo-white'),
		    $hamburger = $('.js-hamburger'),
		    $nav = $('.js-nav'),
		    $nextSectionBtn = $('.js-next-section');

		if ($homeFullpage.length) {
			$homeFullpage.fullpage({
				sectionSelector: 'fp-section',
				menu: '.js-fp-nav',
				paddingTop: '125px',
				scrollOverflow: true,
				scrollingSpeed: 1000,
				fitToSectionDelay: 1000,
				verticalCentered: true,
				onLeave: function onLeave(index, nextIndex, direction) {

					if (index === 1 && direction === 'down') {
						clearTimeout($timeoutId);

						$timeoutId = setTimeout(function () {
							$animationIsFinished = true;
							$.fn.fullpage.moveTo(nextIndex);
						}, screenDelay);

						$hamburger.removeClass('is-active');
						$nav.removeClass('is-open');
						$logoWhite.slideUp(600);

						setTimeout(function () {
							$header.addClass('header_inside');
							$logoBlack.slideDown(800);
							$nav.addClass('nav_inside');
						}, 800);

						return $animationIsFinished;
					} else if (index === 2 && direction === 'up') {
						$header.removeClass('header_inside');

						navDelay = setInterval(function () {
							$nav.slideUp();
						}, 0);

						setTimeout(function () {
							clearInterval(navDelay);
							$nav.slideDown().removeClass('nav_inside');
						}, 300);

						$logoBlack.slideUp(200);

						setTimeout(function () {
							$logoWhite.slideDown();
						}, 1200);

						setTimeout(function () {
							$hamburger.addClass('is-active');
							$nav.addClass('is-open');
						}, 1200);
					}
				}
			});

			$nextSectionBtn.on('click', function () {
				$.fn.fullpage.moveSectionDown();
			});

			if ($(window).width() <= 767) {
				$.fn.fullpage.destroy('all');
			}
			if ($(window).height() <= 600) {
				$.fn.fullpage.setAutoScrolling(false);
			}
		}
	}

	initFullpage();

	function navToggling() {
		var $hamburger = $('.js-hamburger'),
		    $nav = $('.js-nav');

		$hamburger.on('click', function () {
			$(this).toggleClass('is-active');
			$nav.toggleClass('is-open');
		});

		$(window).on('resize', function () {
			$hamburger.removeClass('is-active');
			$nav.removeClass('is-open');
		});

		$(function () {

			if ($(window).width() >= 767) {
				setTimeout(function () {
					$hamburger.trigger('click');
				}, 600);
			}
		});
	}

	navToggling();

	function initBlackHeader() {
		var $header = $('.js-header'),
		    $headerInside = $header.hasClass('header_inside'),
		    $nav = $('.js-nav'),
		    $bodyInside = $('body').hasClass('is-inside'),
		    windowWidth = 767;

		$(window).on('resize', function () {
			if ($(window).width() <= windowWidth && $headerInside) {
				$header.removeClass('header_inside');
				$nav.removeClass('nav_inside');
			}
		});

		$(function () {
			if ($(window).width() <= windowWidth && $headerInside && $bodyInside) {
				$header.removeClass('header_inside');
				$nav.removeClass('nav_inside');
			}
		});
	}

	initBlackHeader();

	//catalog tabs
	function initCatalog() {
		var $catBtn = $('.js-catalog-nav').find('li');
		var $catContent = $('.js-catalog-content').children('div');

		$catContent.hide();

		$catBtn.each(function () {
			if ($(this).hasClass('is-active')) {
				$(this).trigger('click');
				$catContent.eq($(this).index()).fadeIn(600);
			}
		});

		$catBtn.on('click', function (e) {
			e.preventDefault();
			var $index = $(this).index();
			var $_this = $(this);

			$_this.hasClass('is-active') ? $_this.removeClass('is-active') : $_this.addClass('is-active').siblings().removeClass('is-active');

			$catContent.eq($index).slideToggle(600);
			$catContent.hide().eq($index).slideToggle(600);
		});
	}

	initCatalog();

	// cart quantity
	var max = { number: Infinity };
	// add/remove item from basket
	function countItemQuantity() {
		var counter = $('.js-quantity');

		counter.click(function (e) {
			var input = $(this).find('input'),
			    val = input.val(),
			    decrease = $(e.target).parents('.js-remove-item').length,
			    increase = $(e.target).parents('.js-add-item').length;

			if (decrease) {
				if (val > 1) {
					input.val(Number(input.val()) - 1).trigger('change');
				}
			} else if (increase) {
				if (val < max.number) {
					input.val(Number(input.val()) + 1).trigger('change');
				}
			}
		});
	}

	countItemQuantity();
});
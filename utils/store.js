"use strict";
var TYPE_ARRAY = "[object Array]", TYPE_OBJECT = "[object Object]", _typeOf = function (e) {
        return Object.prototype.toString.call(e)
    }, _deepClone = function (e) {
        return JSON.parse(JSON.stringify(e))
    }, diff = function (e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {}, o = 1 < arguments.length && void 0 !== t ? t : {}, r = {};
        return updateDiff(n, o, "", r), nullDiff(n, o, "", r), r
    }, updateDiff = function r(e, t, n, o) {
        var i = 0 < arguments.length && void 0 !== e ? e : {}, a = 1 < arguments.length && void 0 !== t ? t : {},
            s = 2 < arguments.length && void 0 !== n ? n : "", l = 3 < arguments.length && void 0 !== o ? o : {};
        if (_typeOf(i) !== TYPE_ARRAY || (_typeOf(a) !== TYPE_ARRAY || i.length === a.length) && _typeOf(a) === TYPE_ARRAY) return Object.entries(i).forEach(function (e) {
            var t = e[0], n = e[1], o = "" === s ? t : s + "." + t;
            _typeOf(i) === TYPE_ARRAY && (o = "" === s ? t : s + "[" + t + "]"), a.hasOwnProperty(t) ? _typeOf(a[t]) === TYPE_OBJECT && _typeOf(i[t]) === TYPE_OBJECT || _typeOf(a[t]) === TYPE_ARRAY && _typeOf(i[t]) === TYPE_ARRAY ? r(i[t], a[t], o, l) : a[t] !== i[t] && (l[o] = n) : l[o] = n
        }), l;
        l[s] = i
    }, nullDiff = function o(e, t, n, r) {
        var i = 0 < arguments.length && void 0 !== e ? e : {}, a = 1 < arguments.length && void 0 !== t ? t : {},
            s = 2 < arguments.length && void 0 !== n ? n : "", l = 3 < arguments.length && void 0 !== r ? r : {};
        if (_typeOf(i) !== TYPE_ARRAY || (_typeOf(a) !== TYPE_ARRAY || i.length === a.length) && _typeOf(a) === TYPE_ARRAY) return Object.entries(a).forEach(function (e) {
            var t = e[0], n = "" === s ? t : s + "." + t;
            _typeOf(i) === TYPE_ARRAY && (n = "" === s ? t : s + "[" + t + "]"), i.hasOwnProperty(t) ? (_typeOf(a[t]) === TYPE_OBJECT && _typeOf(i[t]) === TYPE_OBJECT || _typeOf(a[t]) === TYPE_ARRAY && _typeOf(i[t]) === TYPE_ARRAY) && o(i[t], a[t], n, l) : l[n] = null
        }), l
    }, name = "wxministore", version = "1.2.9", description = "小程序全局状态管理工具", main = "./lib/store.js",
    repository = {type: "git", url: "git+https://github.com/yx675258207/wxMiniStore.git"}, scripts = {
        start: "rollup -c -w",
        build: "rollup -c",
        test: "mocha --require babel-core/register ./test/diff.test.js"
    }, files = ["lib"], keywords = ["store", "wxstore", "wxministore"], author = "Leisure", license = "MIT",
    bugs = {url: "https://github.com/yx675258207/wxMiniStore/issues"},
    homepage = "https://github.com/yx675258207/wxMiniStore#readme", devDependencies = {
        "@rollup/plugin-json": "^4.0.0",
        "babel-core": "^6.26.3",
        "babel-plugin-external-helpers": "^6.22.0",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        chai: "^4.2.0",
        mocha: "^6.2.2",
        rollup: "^1.27.5",
        "rollup-plugin-babel": "^3.0.7",
        "rollup-plugin-commonjs": "^10.1.0",
        "rollup-plugin-node-resolve": "^5.2.0",
        "rollup-plugin-uglify": "^6.0.3"
    }, pkg = {
        name: name,
        version: version,
        description: description,
        main: main,
        repository: repository,
        scripts: scripts,
        files: files,
        keywords: keywords,
        author: author,
        license: license,
        bugs: bugs,
        homepage: homepage,
        devDependencies: devDependencies
    }, classCallCheck = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, createClass = function () {
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        return function (e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e
        }
    }(), toConsumableArray = function (e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }, Version = pkg.version;
console.log("当前wxministore版本：" + Version);
var Store = function () {
    function b(e) {
        classCallCheck(this, b), this.version = Version, this.$state = {}, this.$r = [];
        var t = e.openPart, n = void 0 !== t && t, u = e.behavior, o = e.methods, f = void 0 === o ? {} : o,
            r = e.pageLisener, a = void 0 === r ? {} : r, i = e.nonWritable, s = void 0 !== i && i, l = e.debug,
            c = void 0 === l || l;
        this.debug = c, this.$state = {}, _typeOf(e.state) === TYPE_OBJECT && (this.$state = Object.assign({}, _deepClone(e.state))), this.$r = [];

        function p(e, t) {
            var n = 1 < arguments.length && void 0 !== t ? t : {};
            e.$store = {};
            var o = n.useProp;
            n.hasOwnProperty("useProp") && (o && "string" == typeof o || _typeOf(o) === TYPE_ARRAY ? e.$store.useProp = [].concat(o) : e.$store.useProp = []), e.$store.useStore = g(n), g(n) && (d.$r.push(e), e.$store.useProp ? e.setData({
                $state: _filterKey(d.$state, e.$store.useProp, function (e, t) {
                    return e === t
                })
            }) : e.setData({$state: d.$state}))
        }

        function h(t) {
            var e = d.$r.findIndex(function (e) {
                return e === t
            });
            -1 < e && d.$r.splice(e, 1)
        }

        this.$openPart = n;
        var d = this,
            y = ["data", "onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap"],
            g = function (e) {
                return !0 === n && !0 === (0 < arguments.length && void 0 !== e ? e : {}).useStore || !n
            }, v = Page, m = Component;
        if (App.Page = function () {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
            var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            g(o) && (o.data = Object.assign(o.data || {}, {$state: d.$state})), Object.keys(f).forEach(function (t) {
                "function" != typeof f[t] || y.some(function (e) {
                    return e === t
                }) || (o[t] = f[t])
            });
            var r = o.onLoad;
            o.onLoad = function () {
                p(this, o), r && r.apply(this, arguments)
            };
            var i = o.onUnload;
            o.onUnload = function () {
                h(this), i && i.apply(this, arguments)
            }, Object.keys(a).forEach(function (t) {
                if ("function" == typeof a[t] && y.some(function (e) {
                    return e === t
                })) {
                    var e = o[t];
                    o[t] = function () {
                        a[t].apply(this, arguments), e && e.apply(this, arguments)
                    }
                }
            }), v.apply(void 0, [o].concat(t))
        }, !s) try {
            Page = App.Page
        } catch (e) {
        }
        if (App.Component = function () {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
            var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            g(o) && (o.data = Object.assign(o.data || {}, {$state: d.$state})), Object.keys(f).forEach(function (t) {
                "function" != typeof f[t] || y.some(function (e) {
                    return e === t
                }) || (o.methods || (o.methods = {}), o.methods[t] = f[t])
            }), u && (o.behaviors = [u].concat(toConsumableArray(o.behaviors || [])));

            function r() {
                p(this, o), l && l.apply(this, arguments)
            }

            function i() {
                h(this), c && c.apply(this, arguments)
            }

            var a = o.lifetimes, s = void 0 === a ? {} : a, l = s.attached || o.attached, c = s.detached || o.detached;
            _typeOf(o.lifetimes) === TYPE_OBJECT ? (o.lifetimes.attached = r, o.lifetimes.detached = i) : (o.attached = r, o.detached = i), m.apply(void 0, [o].concat(t))
        }, !s) try {
            Component = App.Component
        } catch (e) {
        }
    }

    return createClass(b, [{
        key: "setState", value: function (e, t) {
            var n = 1 < arguments.length && void 0 !== t ? t : function () {
            };
            if (_typeOf(e) !== TYPE_OBJECT) throw new Error("setState的第一个参数须为object!");
            this.debug && console.time && console.time("setState");
            var o = this.$state, r = setData(e, o);
            if (this.$state = r, 0 < this.$r.length) {
                var i = diff(r, o);
                this.debug && console.log("diff后实际设置的值：", _deepClone(i));
                var a = Object.keys(i);
                if (0 < a.length) {
                    var s = {};
                    a.forEach(function (e) {
                        s["$state." + e] = i[e]
                    });
                    var l = this.$r.map(function (t) {
                        if (t.$store.hasOwnProperty("useProp")) {
                            var n = _filterKey(s, t.$store.useProp, function (e, t) {
                                return e === "$state." + t || !!e.match(new RegExp("^[$]state." + t + "[.|[]", "g"))
                            });
                            return 0 < Object.keys(n).length ? new Promise(function (e) {
                                t.setData(n, e)
                            }) : Promise.resolve()
                        }
                        return new Promise(function (e) {
                            t.setData(s, e)
                        })
                    });
                    Promise.all(l).then(n)
                } else n()
            } else n();
            this.debug && console.timeEnd && console.timeEnd("setState")
        }
    }, {
        key: "getState", value: function () {
            return _deepClone(this.$state)
        }
    }]), b
}(), _filterKey = function (t, e, n) {
    var o = 1 < arguments.length && void 0 !== e ? e : [], r = n, i = {};
    return Object.keys(t).filter(function (t) {
        return o.some(function (e) {
            return r(t, e)
        })
    }).forEach(function (e) {
        i[e] = t[e]
    }), i
}, setData = function (e, t) {
    var n = _deepClone(t), o = _deepClone(e);
    return Object.keys(o).forEach(function (e) {
        dataHandler(e, o[e], n)
    }), n
}, dataHandler = function (e, t, n) {
    for (var o = pathHandler(e), r = n, i = 0; i < o.length - 1; i++) keyToData(o[i], o[i + 1], r), r = r[o[i]];
    r[o[o.length - 1]] = t
}, pathHandler = function (e) {
    for (var t = "", n = [], o = 0, r = e.length; o < r; o++) {
        if ("[" === e[0]) throw new Error("key值不能以[]开头");
        e[o].match(/\.|\[/g) && (cleanAndPush(t, n), t = ""), t += e[o]
    }
    return cleanAndPush(t, n), n
}, cleanAndPush = function (e, t) {
    var n = cleanKey(e);
    "" !== n && t.push(n)
}, keyToData = function (e, t, n) {
    if ("" !== e) {
        var o = _typeOf(n[e]);
        "number" == typeof t && o !== TYPE_ARRAY ? n[e] = [] : "string" == typeof t && o !== TYPE_OBJECT && (n[e] = {})
    }
}, cleanKey = function (e) {
    if (e.match(/\[\S+\]/g)) {
        var t = e.replace(/\[|\]/g, "");
        if (Number.isNaN(parseInt(t))) throw new Error("[]中必须为数字");
        return +t
    }
    return e.replace(/\[|\.|\]| /g, "")
};
module.exports = Store;
//# sourceMappingURL=store.js.map

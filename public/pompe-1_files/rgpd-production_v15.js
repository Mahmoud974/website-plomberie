window.pdl = window.pdl || {};
window.pdl.requireConsent = true;
window.pdl.consent = {
  defaultPreset: {
    PA: 'opt-in'
  }
};

var pianoAnalytics = function(L) {
    "use strict";
    var H = {
        site: "",
        collectDomain: "",
        path: "event",
        visitorStorageMode: "fixed",
        storageLifetimeVisitor: 395,
        storageLifetimeUser: 395,
        storageLifetimePrivacy: 395,
        privacyDefaultMode: "optin",
        sendEventWhenOptout: !0,
        isVisitorClientSide: !0,
        enableCallbacks: !0,
        cookieDomain: "",
        cookieSecure: !0,
        cookiePath: "/",
        cookieSameSite: "lax",
        encodeStorageBase64: !1,
        addEventURL: "withoutQS",
        clickAutoManagement: !0,
        enableUTMTracking: !0,
        campaignPrefix: ["at_"],
        storageVisitor: "pa_vid",
        storageUser: "pa_user",
        version: "6.9.0",
        minHeartbeat: 5,
        minBufferingHeartbeat: 1,
        queueVarName: "_paq",
        allowHighEntropyClientHints: !0,
        sendEmptyProperties: !0,
        privacy: {
            storageKey: "pa_privacy",
            legacyKeys: {
                pa_vid: !0,
                pa_privacy: !0,
                atuserid: !0
            },
            storageKeys: {
                pa_user: !0
            },
            modes: {
                optin: {
                    name: "optin",
                    properties: {
                        include: {
                            visitor_privacy_consent: !0,
                            visitor_privacy_mode: "optin"
                        },
                        allowed: {
                            "*": {
                                "*": !0
                            }
                        },
                        forbidden: {
                            "*": {}
                        }
                    },
                    storage: {
                        allowed: {
                            "*": !0
                        },
                        forbidden: {}
                    },
                    events: {
                        allowed: {
                            "*": !0
                        },
                        forbidden: {}
                    }
                },
                optout: {
                    name: "optout",
                    visitorId: "OPT-OUT",
                    properties: {
                        include: {
                            visitor_privacy_consent: !1,
                            visitor_privacy_mode: "optout"
                        },
                        allowed: {
                            "*": {}
                        },
                        forbidden: {
                            "*": {}
                        }
                    },
                    storage: {
                        allowed: {
                            pa_vid: !0,
                            pa_privacy: !0
                        },
                        forbidden: {}
                    },
                    events: {
                        allowed: {
                            "*": !0
                        },
                        forbidden: {}
                    }
                },
                "no-consent": {
                    name: "no-consent",
                    visitorId: "no-consent",
                    properties: {
                        include: {
                            visitor_privacy_consent: !1,
                            visitor_privacy_mode: "no-consent"
                        },
                        allowed: {
                            "*": {}
                        },
                        forbidden: {
                            "*": {}
                        }
                    },
                    storage: {
                        allowed: {},
                        forbidden: {
                            "*": !0
                        }
                    },
                    events: {
                        allowed: {
                            "*": !0
                        },
                        forbidden: {}
                    }
                },
                "no-storage": {
                    name: "no-storage",
                    visitorId: "no-storage",
                    properties: {
                        include: {
                            visitor_privacy_consent: !1,
                            visitor_privacy_mode: "no-storage"
                        },
                        allowed: {
                            "*": {
                                "*": !0
                            }
                        },
                        forbidden: {
                            "*": {}
                        }
                    },
                    storage: {
                        allowed: {},
                        forbidden: {
                            "*": !0
                        }
                    },
                    events: {
                        allowed: {
                            "*": !0
                        },
                        forbidden: {}
                    }
                },
                exempt: {
                    name: "exempt",
                    properties: {
                        include: {
                            visitor_privacy_consent: !1,
                            visitor_privacy_mode: "exempt"
                        },
                        allowed: {
                            "*": {
                                app_crash: !0,
                                app_crash_class: !0,
                                app_crash_screen: !0,
                                app_version: !0,
                                browser: !0,
                                browser_cookie_acceptance: !0,
                                browser_group: !0,
                                browser_version: !0,
                                click: !0,
                                click_chapter1: !0,
                                click_chapter2: !0,
                                click_chapter3: !0,
                                click_full_name: !0,
                                connection_monitor: !0,
                                connection_organisation: !0,
                                date: !0,
                                date_day: !0,
                                date_daynumber: !0,
                                date_month: !0,
                                date_monthnumber: !0,
                                date_week: !0,
                                date_year: !0,
                                date_yearofweek: !0,
                                device_brand: !0,
                                device_display_height: !0,
                                device_display_width: !0,
                                device_name: !0,
                                device_name_tech: !0,
                                device_screen_diagonal: !0,
                                device_screen_height: !0,
                                device_screen_width: !0,
                                device_type: !0,
                                event_collection_platform: !0,
                                event_collection_version: !0,
                                event_hour: !0,
                                event_id: !0,
                                event_minute: !0,
                                event_position: !0,
                                event_second: !0,
                                event_time: !0,
                                event_time_utc: !0,
                                event_url: !0,
                                event_url_domain: !0,
                                event_url_full: !0,
                                exclusion_cause: !0,
                                exclusion_type: !0,
                                geo_city: !0,
                                geo_continent: !0,
                                geo_country: !0,
                                geo_metro: !0,
                                geo_region: !0,
                                goal_type: !0,
                                hit_time_utc: !0,
                                os: !0,
                                os_group: !0,
                                os_version: !0,
                                os_version_name: !0,
                                page: !0,
                                page_chapter1: !0,
                                page_chapter2: !0,
                                page_chapter3: !0,
                                page_duration: !0,
                                page_full_name: !0,
                                page_position: !0,
                                page_title_html: !0,
                                page_url: !0,
                                pageview_id: !0,
                                previous_url: !0,
                                privacy_status: !0,
                                site: !0,
                                site_env: !0,
                                site_id: !0,
                                site_platform: !0,
                                src: !0,
                                src_detail: !0,
                                src_direct_access: !0,
                                src_organic: !0,
                                src_organic_detail: !0,
                                src_portal_domain: !0,
                                src_portal_site: !0,
                                src_portal_site_id: !0,
                                src_portal_url: !0,
                                src_referrer_site_domain: !0,
                                src_referrer_site_url: !0,
                                src_referrer_url: !0,
                                src_se: !0,
                                src_se_category: !0,
                                src_se_country: !0,
                                src_type: !0,
                                src_url: !0,
                                src_url_domain: !0,
                                src_webmail: !0
                            }
                        },
                        forbidden: {
                            "*": {}
                        }
                    },
                    storage: {
                        allowed: {
                            pa_vid: !0,
                            pa_privacy: !0,
                            atuserid: !0
                        },
                        forbidden: {}
                    },
                    events: {
                        allowed: {
                            "click.exit": !0,
                            "click.navigation": !0,
                            "click.download": !0,
                            "click.action": !0,
                            "page.display": !0
                        },
                        forbidden: {}
                    }
                },
                "*": {
                    properties: {
                        allowed: {
                            "*": {
                                connection_type: !0,
                                device_timestamp_utc: !0,
                                visitor_privacy_consent: !0,
                                visitor_privacy_mode: !0,
                                "ch_ua*": !0
                            }
                        },
                        forbidden: {
                            "*": {}
                        }
                    },
                    storage: {
                        allowed: {},
                        forbidden: {}
                    },
                    events: {
                        allowed: {},
                        forbidden: {}
                    }
                }
            }
        }
    };
    function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function b(e, t) {
        var n, r, o, i, a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (a)
            return r = !(n = !0),
            {
                s: function() {
                    a = a.call(e)
                },
                n: function() {
                    var e = a.next();
                    return n = e.done,
                    e
                },
                e: function(e) {
                    r = !0,
                    o = e
                },
                f: function() {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (r)
                            throw o
                    }
                }
            };
        if (Array.isArray(e) || (a = function(e, t) {
            var n;
            if (e)
                return "string" == typeof e ? U(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U(e, t) : void 0
        }(e)) || t && e && "number" == typeof e.length)
            return a && (e = a),
            i = 0,
            {
                s: t = function() {}
                ,
                n: function() {
                    return i >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[i++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: t
            };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var I = function e(t, n) {
        if ("object" !== c(t) || null === t || t instanceof Date)
            return t;
        var r, o = new t.constructor;
        for (r in t)
            !Object.prototype.hasOwnProperty.call(t, r) || void 0 === r || n && void 0 === t[r] || (o[r] = e(t[r]));
        return o
    };
    var B, R = {
        post: function(e, t) {
            var n = !1;
            !(n = window.navigator && "function" == typeof window.navigator.sendBeacon ? window.navigator.sendBeacon(e, t) : n) && window.fetch && window.fetch(e, {
                method: "POST",
                body: t,
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8"
                }
            })
        }
    }, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", V = {
        encodeURIComponent: window.encodeURIComponent,
        utf8: {
            encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t += String.fromCharCode(r) : t = 127 < r && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192)) + String.fromCharCode(63 & r | 128) : (t = (t += String.fromCharCode(r >> 12 | 224)) + String.fromCharCode(r >> 6 & 63 | 128)) + String.fromCharCode(63 & r | 128)
                }
                return t
            },
            decode: function(e) {
                var t, n, r, o = "", i = 0;
                for (t = 0; i < e.length; )
                    (r = e.charCodeAt(i)) < 128 ? (o += String.fromCharCode(r),
                    i++) : 191 < r && r < 224 ? (t = e.charCodeAt(i + 1),
                    o += String.fromCharCode((31 & r) << 6 | 63 & t),
                    i += 2) : (t = e.charCodeAt(i + 1),
                    n = e.charCodeAt(i + 2),
                    o += String.fromCharCode((15 & r) << 12 | (63 & t) << 6 | 63 & n),
                    i += 3);
                return o
            }
        },
        base64: {
            encode: function(e) {
                var t, n, r, o, i, a, s = "", u = 0;
                for (e = V.utf8.encode(e); u < e.length; )
                    r = (t = e.charCodeAt(u++)) >> 2,
                    o = (3 & t) << 4 | (t = e.charCodeAt(u++)) >> 4,
                    i = (15 & t) << 2 | (n = e.charCodeAt(u++)) >> 6,
                    a = 63 & n,
                    isNaN(t) ? i = a = 64 : isNaN(n) && (a = 64),
                    s = s + l.charAt(r) + l.charAt(o) + l.charAt(i) + l.charAt(a);
                return s
            },
            decode: function(e) {
                var t, n, r, o, i, a, s = "", u = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length; )
                    r = l.indexOf(e.charAt(u++)),
                    t = (15 & (o = l.indexOf(e.charAt(u++)))) << 4 | (i = l.indexOf(e.charAt(u++))) >> 2,
                    n = (3 & i) << 6 | (a = l.indexOf(e.charAt(u++))),
                    s += String.fromCharCode(r << 2 | o >> 4),
                    64 != i && (s += String.fromCharCode(t)),
                    64 != a && (s += String.fromCharCode(n));
                return s = V.utf8.decode(s)
            }
        }
    }, K = (B = window.crypto || window.msCrypto,
    {
        v4: function() {
            try {
                if (null !== B && "object" === c(B))
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
                        return (e ^ B.getRandomValues(new Uint32Array(1))[0] & 15 >> e / 4).toString(16)
                    })
            } catch (e) {
                console.error(e)
            }
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }
    });
    function Y(e) {
        var n = e;
        function r(e, t) {
            null !== t && "" !== t && void 0 !== t && (n[e] = t)
        }
        return {
            setConfiguration: r,
            setConfigurations: function(e) {
                for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && r(t, e[t])
            },
            getConfiguration: function(e) {
                return void 0 !== n[e] ? I(n[e]) : null
            },
            cloneData: function() {
                return I(n)
            },
            deleteProperty: function(e) {
                delete n[e]
            }
        }
    }
    function q(t) {
        var n = [];
        return {
            push: function(e) {
                n.push(e),
                1 === n.length && t[e[0]].apply(t, e.slice(1))
            },
            next: function() {
                var e;
                n.shift(),
                0 < n.length && t[(e = n[0])[0]].apply(t, e.slice(1))
            }
        }
    }
    function J(r, e, t) {
        this.properties = I(r._properties),
        this.setProperty = function(e, t, n) {
            r._privacy.call("isPropAllowed", e) && (this.properties[e] = {
                value: t,
                options: n || {}
            })
        }
        ,
        this.hasProperty = function(e) {
            return Object.prototype.hasOwnProperty.call(this.properties, e)
        }
        ,
        this.getConfiguration = t.getConfiguration,
        this.setConfiguration = t.setConfiguration,
        this.options = e.options || {},
        this.visitorId = null,
        this.build = {
            url: "",
            data: {}
        },
        this.events = e.events || []
    }
    function w(e, t, n, r) {
        !1 !== r && 0 < n.length && "function" == typeof n[0] ? n[0](e, t, n.slice(1)) : e._queue.next()
    }
    function F(e, t, n) {
        var r = t.getConfiguration("collectDomain")
          , o = r.startsWith("https://") || r.startsWith("http://") ? "" : "https://"
          , o = "".concat(o).concat(r, "/").concat(t.getConfiguration("path"))
          , r = "?s=".concat(t.getConfiguration("site")).concat(t.visitorId ? "&idclient=" + t.visitorId : "");
        t.build.url = o + r,
        t.build.data = {
            events: t.events
        },
        w(e, t, n)
    }
    function W(e, t, n, r, o) {
        var i, a = function(e, t, n) {
            for (var r = {}, o = new RegExp("[&#?]{1}([^&=#?]*)=([^&#]*)?","g"), i = o.exec(t); null !== i; )
                0 === i[1].indexOf(e) && (r[n + i[1].substring(e.length)] = window.decodeURIComponent(i[2])),
                i = o.exec(t);
            return r
        }(r, n, o), s = !1;
        for (i in a)
            Object.prototype.hasOwnProperty.call(a, i) && !t.properties[i] && t.setProperty(i, a[i], {
                persistent: !0
            }),
            s = !0;
        return s
    }
    function z(e, t, n) {
        var r, o = document.location.href, i = b(t.getConfiguration("campaignPrefix"));
        try {
            for (i.s(); !(r = i.n()).done; )
                if (W(0, t, o, r.value, "src_"))
                    break
        } catch (e) {
            i.e(e)
        } finally {
            i.f()
        }
        t.getConfiguration("enableUTMTracking") && W(0, t, o, "utm_", "utm_"),
        w(e, t, n)
    }
    function $(e) {
        return 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
        Z(e)
    }
    var X, G = function(e) {
        function t(e) {
            e && r.setDate(r.getDate() + e)
        }
        var n, r = new Date;
        return e instanceof Date ? r = e : "number" == typeof e ? t(e) : (n = e.days,
        e = e.minutes,
        t(n),
        e && r.setMinutes(r.getMinutes() + e)),
        r
    }, Z = function(t) {
        t = t.replace(/\+/g, " ").replace(/^\s+|\s+$/g, "");
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return t
        }
    }, h = (X = "_cookie_test",
    {
        set: ee,
        get: ne,
        getNames: function() {
            var t = [];
            return te(function(e) {
                t.push(e)
            }),
            t
        },
        remove: re,
        getTopLevelDomain: function(e) {
            void 0 === e && (e = []);
            var t = window.location.hostname.split(".")
              , n = (new Date).getTime().toString(36) + Math.round(2147483647 * Math.random()).toString(36)
              , r = new Date;
            r.setSeconds(r.getSeconds() + 30);
            for (var o = 0; o < t.length; o++)
                try {
                    var i = t.slice(-(o + 1)).join(".");
                    if (!e.includes(i)) {
                        ee(X, n, {
                            expires: r,
                            path: "/",
                            domain: i
                        });
                        var a = ne(X) === n;
                        if (re(X, {
                            path: "/",
                            domain: i
                        }),
                        a)
                            return i
                    }
                } catch (e) {}
        },
        __private__: {
            _generateCookieString: Q
        }
    });
    function Q(e, t, n) {
        var r = (n = void 0 === n ? {} : n).path
          , o = n.domain
          , i = n.expires
          , a = n.secure
          , s = n.samesite;
        return ((n = n.raw) ? e : encodeURIComponent(e)) + "=" + (n ? t : encodeURIComponent(t)) + (i ? "; expires=".concat(G(i).toUTCString()) : "") + (r ? "; path=".concat(r) : "") + (o ? "; domain=".concat(o) : "") + (a ? "; secure" : "") + (s ? "boolean" == typeof s ? "; sameSite" : "; sameSite=".concat(s) : "")
    }
    function ee(e, t, n, r) {
        void 0 === t || void 0 !== r && encodeURI(t).split(/%(?:u[\dA-F]{2})?[\dA-F]{2}|./).length - 1 > r || (document.cookie = Q(e, t, n))
    }
    function te(e) {
        for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            var r = t[n].split("=");
            if (e(Z(r[0]), r[1] || ""))
                return
        }
    }
    function ne(n) {
        var r = null
          , o = {};
        return te(function(e, t) {
            if (n)
                return e === n && (r = $(t),
                1);
            o[e] = $(t)
        }),
        n ? r : o
    }
    function re(e, t) {
        ee(e, "", Object.assign({}, t, {
            expires: -1
        }))
    }
    t = "_ls_ttl",
    oe = function() {
        try {
            var e = window.localStorage.getItem(t);
            return e ? JSON.parse(e) : null
        } catch (e) {
            return null
        }
    }
    ,
    ie = function(e) {
        try {
            Object.keys(e).length ? window.localStorage.setItem(t, JSON.stringify(e)) : window.localStorage.removeItem(t)
        } catch (e) {}
    }
    ,
    se();
    var t, oe, ie, ae = {
        get: function(e) {
            var t;
            se();
            try {
                return null != (t = window.localStorage.getItem(e)) ? t : null
            } catch (e) {
                return null
            }
        },
        set: function(e, t, n) {
            if (r = e,
            n = (n = void 0 === n ? {} : n).expires,
            o = oe(),
            void 0 === n ? (null != o && o[r] && (delete o[r],
            ie(o)),
            !0) : (n = G(n).getTime()) > Date.now() && ((o = o || {})[r] = n.toString(36),
            ie(o),
            !0))
                try {
                    window.localStorage.setItem(e, t)
                } catch (e) {}
            var r, o
        },
        getNames: ue,
        remove: function(e) {
            try {
                window.localStorage.removeItem(e)
            } catch (e) {}
            se()
        },
        expires: se,
        __protected__: {
            get ttlName() {
                return t
            }
        }
    };
    function se() {
        var n = ue()
          , r = oe()
          , o = {};
        r && (Object.keys(r).forEach(function(e) {
            if (n.includes(e)) {
                var t = r[e] ? parseInt(r[e], 36) : null;
                if (!(t = t) || t > Date.now())
                    o[e] = r[e];
                else
                    try {
                        window.localStorage.removeItem(e)
                    } catch (e) {}
            }
        }),
        JSON.stringify(r) !== JSON.stringify(o)) && ie(o)
    }
    function ue() {
        try {
            return Object.keys(window.localStorage)
        } catch (e) {
            return []
        }
    }
    function n(t, e) {
        return {
            cookieName: e = void 0 === e ? "_pctx" : e,
            readonly: !1,
            init: function(e) {
                return null != (e = null != e ? e : t) ? e : null
            },
            refresh: function(e) {
                return e
            },
            update: function(e) {
                return e
            },
            set: function(e) {
                return e
            },
            get: function(e) {
                return e
            }
        }
    }
    function e(e) {
        return m(m({}, n(e)), {
            cookieName: null
        })
    }
    function ce() {
        var t = {};
        return {
            add: function(e) {
                t[e] = !0
            },
            values: function() {
                return f(t)
            }
        }
    }
    function le(n, r) {
        var o, i = NaN, a = NaN;
        return function(e) {
            var t = null == r ? void 0 : r();
            return e === a && i === t || (i = t,
            o = n(a = e)),
            o
        }
    }
    function fe(n) {
        var r;
        return function(e) {
            var t = n();
            t !== r && e(r = t)
        }
    }
    function de(e) {
        return y(e, function(e) {
            return "CX" !== (null == e ? void 0 : e.type)
        })
    }
    function pe(e, t) {
        return t({
            protect: !0
        }),
        v()
    }
    function ve(t, n) {
        return function(e) {
            return n(t + e)
        }
    }
    function ge(e, t) {
        void 0 === t && (t = Be);
        var n = je[e.toLowerCase()];
        return void 0 !== n ? u[n].name : (t('"'.concat(e, '" is not found')),
        null)
    }
    function he(o, i) {
        var e;
        return void 0 === i && (i = Be),
        o ? (e = {},
        o.products && (d(o.products) ? e.products = o.products.reduce(function(e, t) {
            t = ge(t, ve("consent.products: ", i));
            return t && e.push(t),
            e
        }, []) : i("consent.products: should be an array")),
        o.defaultPreset && (e.defaultPreset = f(o.defaultPreset).reduce(function(e, t) {
            var n = ge(t, ve("consent.defaultPreset: ", i))
              , r = Re(o.defaultPreset[t]);
            return r || i("consent.defaultPreset: " + Ue(t, Le)),
            n && r && (e[n] = r),
            e
        }, {})),
        e) : null
    }
    function me(e) {
        return e.reduce(function(e, t, n) {
            return m(m({}, e), ((e = {})[n] = {
                mode: qe[t]
            },
            e))
        }, {})
    }
    function ye() {
        return ze()[0].preset
    }
    function _e() {
        return g().consent_modifiers || null
    }
    function be() {
        return !!g().requireConsent
    }
    function we(n) {
        return Xe().reduce(function(e, t) {
            return e[t.id] = n[t.id] || ye()[t.id],
            e
        }, {})
    }
    function Ce(e) {
        var t = Number(e);
        return Number.isNaN(t) ? String(e) : t
    }
    function ke(e) {
        return d(e) ? e : e.split(",").map(function(e) {
            return e.trim().replace(/^['"](.+)['"]$/, "$1")
        })
    }
    function r(e) {
        return e
    }
    var o, Pe, Oe = {
        get: function(e) {
            try {
                return window.sessionStorage.getItem(e)
            } catch (e) {
                return null
            }
        },
        set: function(e, t) {
            try {
                window.sessionStorage.setItem(e, t)
            } catch (e) {}
        },
        getNames: function() {
            try {
                return Object.keys(window.sessionStorage)
            } catch (e) {
                return []
            }
        },
        remove: function(e) {
            try {
                window.sessionStorage.removeItem(e)
            } catch (e) {}
        }
    }, m = function() {
        return (m = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, Ae = n("anon"), f = function(e) {
        return Object.keys(e)
    }, d = function(e) {
        return Array.isArray(e)
    }, xe = function(e) {
        return null != e
    }, a = function(e) {
        return "object" === c(e)
    }, p = function(e) {
        return "string" == typeof e
    }, v = function() {
        for (var e = (new Date).getTime().toString(36); e.length < 16; )
            e += Math.round(2147483647 * Math.random()).toString(36);
        return e.substr(0, 16)
    }, y = function(n, t) {
        return n && f(n).filter(function(e) {
            return t(n[e])
        }).reduce(function(e, t) {
            return m(m({}, e), ((e = {})[t] = n[t],
            e))
        }, {})
    }, Se = function(o, i) {
        return a(o) ? f(o).reduce(function(e, t) {
            var n = o[t]
              , r = i[t]
              , r = r && r(n);
            return void 0 !== r && (e[t] = r),
            e
        }, {}) : o
    }, Ie = function(e) {
        return "true" === e || !0 === e
    }, i = function t(e, n) {
        try {
            return e()
        } catch (e) {
            return n ? t(n) : null
        }
    }, De = function(e, t) {
        return void 0 === t && (t = !1),
        i(function() {
            return JSON.parse(e)
        }, function() {
            return t ? JSON.parse(window.atob(e)) : null
        }) || null
    }, Me = function(e, t) {
        void 0 === t && (t = !1);
        var n = JSON.stringify(e);
        return i(function() {
            return t ? window.btoa(n) : n
        }) || n
    }, s = m(m({}, n(null)), {
        init: function(e) {
            return de(e || null)
        },
        refresh: de,
        set: function(e, t) {
            return null === e ? null : y(m(m({}, t), e), function(e) {
                return null !== e
            })
        }
    }), Ee = "pdl", g = function() {
        return window[Ee] || {}
    }, Ne = m(m({}, e()), {
        init: function(e, t) {
            return t({
                protect: !0
            }),
            g().pageViewId || v()
        },
        refresh: pe,
        update: pe,
        set: function(e, t, n) {
            return n({
                protect: !0
            }),
            e
        }
    }), Te = m(m({}, n(null, "_pcid")), {
        init: function(e, t) {
            return t({
                protect: !0
            }),
            e || v()
        },
        update: function(e, t) {
            return t({
                protect: !0
            }),
            v()
        },
        set: function(e, t, n) {
            return n({
                protect: !0
            }),
            e
        }
    }), u = ["PA", "DMP", "COMPOSER", "ID", "VX", "ESP", "Social Flow", "DL"].map(function(e, t) {
        return {
            name: e,
            id: t
        }
    }), je = u.reduce(function(e, t, n) {
        t = t.name;
        return m(m({}, e), ((e = {})[t] = n,
        e[t.toLowerCase()] = n,
        e))
    }, {}), Le = ["opt-in", "opt-out", "essential"], He = ["include", "exclude", "obfuscate"], Ue = function(e, t) {
        return '"'.concat(e, '" should be one of ').concat(t.join(", "))
    }, Be = function() {}, Re = function(e) {
        return Le.includes(e) ? e : null
    }, Ve = function(e, i) {
        void 0 === i && (i = Be);
        var t = e.source
          , e = e.patches || [];
        return Re(t) || (i(Ue("source", Le)),
        t = "opt-in"),
        d(e) || (i('"patches" should be an array'),
        e = []),
        {
            source: t,
            patches: e = e.reduce(function(e, t, n) {
                var r, o;
                return !a(t) || d(t) ? i("patch[".concat(n, "]: should be type of {action, item, with?}")) : (r = t.action,
                o = t.item,
                He.includes(r) ? o && a(o) && o.key && o.type ? e.push(t) : i("patch[".concat(n, ']: "item" should be type of {key, type}')) : i("patch[".concat(n, "]: ") + Ue("action", He))),
                e
            }, [])
        }
    }, Ke = le(he), Ye = function(o, i) {
        return void 0 === i && (i = Be),
        f(o || {}).reduce(function(e, t) {
            var n = null == o ? void 0 : o[t]
              , r = ge((null == n ? void 0 : n.source) || "", i);
            return e[t] = m(m({}, n), {
                source: r
            }),
            e
        }, {})
    }, qe = ["opt-in", "essential", "opt-out"].reduce(function(e, t, n) {
        return m(m({}, e), ((e = {})[n] = t,
        e))
    }, {}), Je = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 2, 2, 2, 2, 0], [1, 2, 2, 2, 2, 2, 2, 1], [0, 2, 0, 2, 2, 2, 0, 0], [1, 2, 2, 2, 2, 2, 1, 1], [2, 0, 0, 2, 2, 2, 2, 0], [2, 0, 2, 2, 2, 2, 2, 0], [2, 2, 2, 2, 2, 2, 0, 2], [2, 2, 0, 0, 0, 0, 2, 0], [2, 2, 1, 2, 1, 2, 2, 1], [2, 2, 1, 1, 2, 2, 2, 1]], Fe = Je.map(function(e, t) {
        return {
            id: t,
            preset: me(e)
        }
    }), We = fe(function() {
        var e;
        return null == (e = Ke(g().consent)) ? void 0 : e.defaultPreset
    }), ze = (o = Fe,
    function() {
        return We(function(n) {
            o = Fe.slice(),
            n && (o[0] = {
                id: 0,
                preset: m({}, o[0].preset)
            },
            f(n).forEach(function(e) {
                var t = n[e]
                  , e = je[e];
                o[0].preset[e] = {
                    mode: t
                }
            }))
        }),
        o
    }
    ), $e = fe(function() {
        var e;
        return null == (e = Ke(g().consent)) ? void 0 : e.products
    }), Xe = (Pe = u,
    function() {
        return $e(function(t) {
            Pe = t ? u.filter(function(e) {
                return t.includes(e.name) || "DL" === e.name
            }) : u
        }),
        Pe
    }
    ), Ge = m(m({}, n(null, "_pprv")), {
        init: function(e) {
            return be() && e ? we(m(m({}, ye()), e)) : null
        },
        set: function(e, t) {
            var n, o, r;
            return be() ? null != e && (n = "number" == typeof e ? (null == (n = ze()[e]) ? void 0 : n.preset) || null : d(e) ? (r = null,
            e.forEach(function(e) {
                var n = Je[e];
                !r && n ? r = n : r && n && (r = r.map(function(e, t) {
                    return void 0 === n[t] ? e : Math.min(e, n[t])
                }))
            }),
            r && me(r)) : f(o = e).reduce(function(e, t) {
                var n = o[t]
                  , r = Number(t);
                return (!Number.isNaN(r) || void 0 !== (r = je[t.toLowerCase()])) && (t = n.mode,
                ["opt-in", "essential", "opt-out", "custom"].includes(t)) ? m(m({}, e), ((t = {})[r] = {
                    mode: n.mode
                },
                t)) : e
            }, null)) ? we(m(m({}, t), n)) : t : null
        },
        get: le(function(o) {
            return o && f(o).reduce(function(e, t) {
                var n, r = u[Number(t)].name, t = m({}, o[Number(t)]);
                return "custom" === t.mode && (t.modifier = (null == (n = _e()) ? void 0 : n[r]) || null),
                e[r] = t,
                e
            }, {})
        }, _e)
    }), Ze = m(m({}, e()), {
        init: ze,
        set: ze
    }), Qe = m(m({}, e()), {
        init: Xe,
        set: Xe
    }), et = m(m({}, e(null)), {
        readonly: !0,
        set: function() {
            return null
        },
        get: _e
    }), tt = {
        id: r,
        type: r,
        zone: r,
        createdAt: Ce,
        modifiedAt: Ce,
        authors: ke,
        section: r,
        tags: ke,
        keywords: ke,
        title: r,
        description: r,
        isNative: Ie
    }, nt = function(e) {
        return "first" === e
    }, rt = function(e) {
        return "last" === e
    };
    function ot(e, t) {
        return void 0 === e && (e = "meta"),
        nt(t) ? document.querySelector(e) : (e = document.querySelectorAll(e),
        rt(t) ? e[e.length - 1] : Array.from(e))
    }
    function it(e) {
        var r = e.getContent || function(e) {
            return e.content
        }
        ;
        if (e.selector)
            return (t = ot(e.selector, e.take || "first")) && r(t) || null;
        var o = st.find(e.attr || ["name"], e.hasContent)
          , t = e.names || []
          , i = !("all" === e.take)
          , a = rt(e.take);
        if (o)
            for (var n = 0, s = t; n < s.length; n++) {
                var u = function(e) {
                    var t, n = [], e = o[e];
                    if (e) {
                        if (i)
                            return t = e[a ? e.length - 1 : 0],
                            {
                                value: r(t) || ""
                            };
                        e.forEach(function(e) {
                            n = n.concat(r(e) || "")
                        })
                    }
                    if (n.length)
                        return {
                            value: n
                        }
                }(s[n]);
                if ("object" === c(u))
                    return u.value
            }
        return null
    }
    function at(e) {
        var t = e.replace(/DAY/g, "(0?[1-9]|[12][0-9]|3[01])").replace(/MONTHLONG/g, "(" + f(ft).join("|") + ")").replace(/MONTH/g, "(0?[1-9]|1[012])").replace(/YEAR2/g, "([0-9][0-9])").replace(/YEAR/g, "(197[1-9]|19[8-9][0-9]|20[0-9][0-9])").replace(/TIME/g, "([0-9][0-9]):([0-9][0-9]):([0-9][0-9])(?:\\.[0-9][0-9][0-9])?([zZ]|[+-][0-9][0-9](?::?[0-9][0-9])?)?")
          , e = e.replace(/.*?([YMD])(EAR|ONTH|AY).*?/g, "$1").substring(0, 3);
        return [new RegExp(t), e]
    }
    function _(e) {
        return e && parseInt(e, 10) || 0
    }
    C = null;
    var C, st = {
        refresh: function() {
            (C = ot() || null) && setTimeout(function() {
                C = null
            }, 0)
        },
        find: function(a, s) {
            return void 0 === s && (s = !1),
            C ? C.reduce(function(e, t) {
                for (var n = 0, r = a; n < r.length; n++) {
                    var o = r[n]
                      , o = (("name" === o ? t.name : t.getAttribute(o)) || "").trim().toLowerCase()
                      , i = t.content;
                    if (o && (!s || i)) {
                        e[o] || (e[o] = []),
                        e[o].push(t);
                        break
                    }
                }
                return e
            }, {}) : null
        }
    }, ut = function(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t]
              , r = it(r);
            if (r)
                return r
        }
    }, k = function(e, t, n) {
        var r, o = tt[t];
        !Boolean(e[t]) && o && (o = (r = ("function" == typeof n ? n : function() {
            return (d(n) ? ut : it)(n)
        }
        )()) && o(r)) && (e[t] = o)
    }, ct = function(e) {
        return {
            attr: ["property"],
            names: [e]
        }
    }, lt = function(e) {
        return {
            names: [e]
        }
    }, ft = {
        januar: "01",
        january: "01",
        jan: "01",
        februar: "02",
        february: "02",
        feb: "02",
        mars: "03",
        march: "03",
        mar: "03",
        april: "04",
        apr: "04",
        mai: "05",
        may: "05",
        juni: "06",
        june: "06",
        jun: "06",
        juli: "07",
        july: "07",
        jul: "07",
        august: "08",
        aug: "08",
        september: "09",
        sept: "09",
        sep: "09",
        oktober: "10",
        october: "10",
        okt: "10",
        oct: "10",
        november: "11",
        nov: "11",
        desember: "12",
        december: "12",
        dec: "12",
        des: "12"
    }, dt = ["\\bDAY\\.MONTH\\.YEAR\\b", "\\bDAY\\.?\\s{0,3}MONTHLONG\\.?\\s{1,3}YEAR\\b", "\\bYEAR-MONTH-DAY(?:[tT]|\\b)", "\\bMONTHLONG\\.?\\s{0,3}DAY(?:st|nd|rd|th)?,?\\s{1,3}YEAR\\b", "\\bDAY(?:st|nd|rd|th|\\.)?\\s{0,3}MONTHLONG\\.?,?\\s{1,3}YEAR\\b", "\\bYEAR[/å¹´]MONTH[/æœˆ]DAY(?=\\b|æ—¥)", "\\bDAY\\.MONTH\\.YEAR2\\b", "\\bDAY/MONTH/YEAR\\b"].map(at), pt = at("YEAR-MONTH-DAY[tT]TIME")[0];
    function vt(e, t, n, r, o, i, a) {
        e = new Date(Date.UTC(_(e), _(t) - 1, _(n), _(r), _(o), _(i))),
        t = (a || "").match(/^([+-][0-9][0-9])(?::?([0-9][0-9])?)$/),
        t && (e = new Date(e.getTime() - 36e5 * Number(t[1]) - 6e4 * (Number(t[2]) || 0))),
        n = Date.now() - e.getTime();
        return 0 < n || -n < 1728e5 ? e.toISOString() : null
    }
    var gt = function(e) {
        return e.replace(/<\/?[^>?]*\/?>/g, " ").replace(/\s+/g, " ").trim()
    };
    function ht(e) {
        return gt((e = void 0 === e ? "" : e).replace(/,(?=\s*(jr|sr)(\.?)\b)/g, " "))
    }
    function mt(e) {
        return m(m({}, e), {
            take: "last"
        })
    }
    function P(e) {
        return m(m({}, e), {
            take: "last",
            hasContent: !0,
            getContent: function(e) {
                return gt(e.content || "")
            }
        })
    }
    function yt(e) {
        k(e, "createdAt", function() {
            var e = ut(Ot);
            if (!e)
                return null;
            var t = e.toLowerCase()
              , e = (t = t.toLowerCase()).match(pt);
            if (e)
                return vt(e[1], e[2], e[3], e[4], e[5], e[6], e[7]);
            for (var n = 0, r = dt; n < r.length; n++) {
                var o = r[n]
                  , i = t.match(o[0]);
                if (i)
                    return vt(2 === (i = "DMY" === o[1] ? ["", i[3], i[2], i[1]] : "MDY" === o[1] ? ["", i[3], i[1], i[2]] : i)[1].length ? (_(i[1]) < 60 ? "20" : "19") + i[1] : i[1], i[2].length <= 2 ? i[2] : ft[i[2]], i[3])
            }
        }),
        k(e, "modifiedAt", At),
        k(e, "authors", xt),
        k(e, "keywords", function() {
            var e = ut(St);
            return e && e.length <= 1024 ? e : null
        }),
        k(e, "title", Dt),
        k(e, "description", It)
    }
    function _t() {
        var e, t = Array.from(document.querySelectorAll("meta[property^=content]")).reduce(function(e, t) {
            var n = null == (n = null == t ? void 0 : t.getAttribute("property")) ? void 0 : n.split(":").pop()
              , r = tt[n];
            return r && t && (e[n] = r((null == t ? void 0 : t.getAttribute("content")) || "")),
            e
        }, {});
        return st.refresh(),
        k(e = t, "type", ct("og:type")),
        k(e, "section", lt("section")),
        k(e, "id", lt("id")),
        k(e, "authors", lt("author")),
        yt(t),
        t
    }
    function bt(e) {
        return e.getTime().toString(36)
    }
    function wt(e) {
        return e ? i(function() {
            return new Date(parseInt(e, 36))
        }) : null
    }
    function Ct(e, t, n) {
        return void 0 === n && (n = !1),
        {
            cookieName: e,
            consent: t = void 0 === t ? "optional" : t,
            encode: function(e) {
                return Me(e, n)
            },
            decode: function(e) {
                return De(e, !0)
            }
        }
    }
    function kt(e) {
        function r(e) {
            return m(m({}, f), y(e || {}, xe))
        }
        function n(e, t) {
            var n = e && t;
            !p() && n && v(),
            p() && !n && g(),
            p() && n && !u && v(),
            a = e,
            c = t
        }
        var o = e.cookieName
          , t = e.consent
          , i = h.get(o)
          , a = !!i
          , s = Tt(i, e)
          , u = !!s.fixedAt
          , c = a
          , l = null
          , f = m({}, Nt)
          , d = null
          , p = function() {
            return a && c
        }
          , v = function(e) {
            var t, e = r(e), n = l || (d ? s.encode(d, e) : "");
            n || (t = h.get(o),
            n = (t = s.decode(t || "")) ? s.encode(t, e) : ""),
            n && (u = !0,
            h.set(o, n, s.bindOptions(e)))
        }
          , g = function(e) {
            h.remove(o, r(e))
        };
        return s.onChange(function() {
            p() && (u = !1,
            v())
        }),
        {
            get cookieName() {
                return o
            },
            get cookieEnabled() {
                return p()
            },
            get fixedAt() {
                return s.fixedAt
            },
            get consent() {
                return t
            },
            set: function(e, t) {
                d = e,
                p() && v(t)
            },
            get: function() {
                return s.decode(h.get(o) || "")
            },
            remove: g,
            setCookieOptions: function(e) {
                f = r(e),
                p() && v()
            },
            setCookieEnabled: function(e, t) {
                void 0 === t && (t = null),
                l = e ? t : null,
                n(e, c)
            },
            lazyActive: function() {
                n(a, !0)
            },
            setFixedMode: function(e) {
                s.setMode(e)
            }
        }
    }
    var Pt, Ot = [mt({
        attr: ["name", "property", "itemprop"],
        names: ["cxenseparse:publishtime", "cxenseparse:recs:publishtime", "article:published_time", "date", "dc.date", "dc.date.created", "dc.terms.issued", "pub_date", "article.published", "datepublished", "og:article:published_time"]
    }), mt({
        selector: "time.published[datetime],time[pubdate][datetime]",
        getContent: function(e) {
            return e.getAttribute("datetime")
        }
    }), mt({
        selector: "time[datetime]",
        getContent: function(e) {
            return e.getAttribute("datetime")
        }
    })], At = {
        selector: 'meta[property="article:modified_time"]'
    }, xt = [{
        attr: ["property", "name"],
        names: ["cxenseparse:author", "og:article:author", "article:author", "og:book:author", "book:author", "author", "dc.creator", "article.author"],
        take: "all",
        getContent: function(e) {
            var t = e.getAttribute("data-separator")
              , e = e.content;
            return t ? ht(e).split(t) : ht((t = void 0 === (t = e) ? "" : t).replace(/\n+/, ";").replace(/(\<|&lt;)br(\>|&gt;)/, ";").replace(/\b(and|und|og)\b/g, ";")).split(/[,;]/)
        }
    }], St = [P({
        names: ["cxenseparse:keywords"]
    }), P({
        attr: ["property", "name"],
        names: ["news_keywords"]
    }), P({
        names: ["keywords"]
    })], It = [P({
        names: ["cxenseparse:description"]
    }), P({
        attr: ["property"],
        names: ["og:description"]
    }), P({
        names: ["description"]
    })], Dt = [{
        names: ["cxenseparse:title"]
    }, mt({
        attr: ["property", "name"],
        names: ["og:title"]
    })], Mt = m(m({}, e(null)), {
        init: _t,
        set: function(e, t) {
            return null === e ? {} : y(m(m({}, t), e), function(e) {
                return null != e
            })
        }
    }), Et = m(m({}, n(null, "_pcus")), {
        init: function(e) {
            return (e = void 0 === e ? null : e) && y(e, function(e) {
                return a(e) && Array.isArray(e.segments)
            })
        }
    }), Ne = {
        pageViewId: Ne,
        browserId: Te,
        users: s,
        userStatus: Ae,
        siteId: n(),
        consent: Ge,
        consentPresets: Ze,
        products: Qe,
        consentModifiers: et,
        content: Mt,
        userSegments: Et
    }, Nt = {
        path: "/",
        expires: 395,
        samesite: "lax",
        secure: "https:" === window.location.protocol,
        domain: h.getTopLevelDomain(["pantheon.io", "go-vip.net", "go-vip.co"])
    }, Tt = function(e, t) {
        function n(e) {
            return a = a || function(e) {
                var t = new Date;
                if (e instanceof Date)
                    t = e;
                else {
                    if ("number" != typeof e)
                        return null;
                    t.setDate(t.getDate() + e)
                }
                return t
            }(e.expires)
        }
        var r = t.encode
          , o = t.decode
          , i = !1
          , a = null
          , s = null
          , u = null;
        (t = null == (t = o(e || "")) ? void 0 : t._t) && (t = t.split("|"),
        a = wt(t[0]),
        s = wt(t[1]),
        i = !!a);
        return {
            get fixedAt() {
                return i ? [s, a] : null
            },
            onChange: function(e) {
                u = e
            },
            setMode: function(e) {
                var t = i;
                (i = e) !== t && (s = a = null) != u && u(i)
            },
            bindOptions: function(e) {
                return i && (a = n(e)) ? m(m({}, e), {
                    expires: a
                }) : e
            },
            decode: function(e) {
                e = o(e);
                return null != e && e._t && delete e._t,
                e
            },
            encode: function(e, t) {
                return i ? (a = n(t)) && (e._t = bt(a) + "|" + bt(s = s || new Date)) : delete e._t,
                r(e)
            }
        }
    }, jt = String.fromCharCode, Lt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", Ht = {};
    (Pt = Pt || {}).URI = "URI";
    function Ut() {
        function r(r, o, i) {
            void 0 === i && (i = !1);
            var a = [];
            return f(o).forEach(function(e) {
                var t = o[e]
                  , n = !u.has(e) || u.get(e) === r || i;
                t && n ? u.set(e, r) : !t && n ? u.delete(e) : a.push(e)
            }),
            0 < a.length ? a : null
        }
        var i = sn()
          , a = {}
          , s = null
          , o = new Map
          , u = new Map
          , c = [];
        return function(e, t) {
            var n = v();
            return o.set(n, e),
            t && i.register(t),
            a = m(m({}, i.get()), a),
            {
                getInitCookieData: function() {
                    return a
                },
                getCachedData: function() {
                    return s || fn
                },
                setProtectionData: function(e) {
                    return r(n, e)
                },
                setProtectionDataUnsafe: function(e) {
                    return r(n, e, !0)
                },
                updateData: function(e) {
                    return n = {},
                    r = {},
                    f(t = e).forEach(function(e) {
                        u.has(e) ? n[e] = (null == s ? void 0 : s[e]) || null : r[e] = t[e]
                    }),
                    e = s || a,
                    o = m(m({}, s), r),
                    ln(o, e) || (i.set(o, e),
                    s = o,
                    c.forEach(function(e) {
                        return (0,
                        e[1])(r)
                    })),
                    0 < f(n).length ? n : null;
                    var t, n, r, o
                },
                onUpdateData: function(e) {
                    c.push([n, e])
                },
                terminate: function() {
                    var t;
                    t = n,
                    c = c.filter(function(e) {
                        return e[0] !== t
                    }),
                    o.delete(n)
                },
                setCookieOptions: function() {
                    return null
                },
                setCookieEnabled: function() {
                    return null
                },
                get registeredCookiesWrapper() {
                    return i.wrappers
                }
            }
        }
    }
    function Bt(t) {
        return f(t).filter(pn).map(function(e) {
            return vn(e, t[e])
        })
    }
    function Rt(e, t) {
        switch (e) {
        case "opt-in":
            return !0;
        case "essential":
            return "essential" === t || "mandatory" === t;
        case "opt-out":
            return "mandatory" === t;
        default:
            return !0
        }
    }
    function Vt(e) {
        function t(e) {
            return i(function() {
                return window.localStorage.getItem(e)
            })
        }
        var n = t(e)
          , r = i(function() {
            return parseInt(De(t("_ls_ttl"))[e], 36)
        });
        return r && r <= Date.now() ? null : n
    }
    function Kt(e) {
        var t = e && e.length;
        return 16 === t || 36 === t ? e : null
    }
    function Yt(o) {
        var e, i = m(m({}, _n), Ye(null == (e = g()) ? void 0 : e.migration));
        f(i).forEach(function(e) {
            var t = o.params.get(e)
              , n = i[e] === _n[e]
              , r = null == (r = i[e]) ? void 0 : r.source
              , r = r && (null == (r = yn[r]) ? void 0 : r[e]) || [];
            t && r.length && (r = mn(r)) && (t.readonly = !1,
            o.updateValues(e, r, !0),
            t.readonly = !n)
        })
    }
    function qt() {
        function n(e) {
            return Se(e, {
                path: String,
                domain: String,
                secure: Ie,
                expires: function(e) {
                    return e instanceof Date ? e : Number(e)
                },
                samesite: function(e) {
                    return p(e) ? e : Ie(e)
                }
            })
        }
        var r = m({}, window[Ee]);
        return null != r && r.cookies && (r.cookies = f(r.cookies).reduce(function(e, t) {
            return e[t] = n(r.cookies[t]),
            e
        }, {})),
        null != r && r.cookieDefault && (r.cookieDefault = n(r.cookieDefault)),
        r
    }
    function Jt(n) {
        function e(e) {
            return e || (null == (e = n.get("consent")) ? void 0 : e.DL) || null
        }
        function t(e) {
            var t, r = Cn(), o = null == (t = n.getConnection()) ? void 0 : t.registeredCookiesWrapper;
            o && (t = f(o).map(function(e) {
                return o[e].cookieName
            }),
            i(t, e).forEach(function(e) {
                var t = e.name
                  , n = e.allowed
                  , e = e.data
                  , n = n && !r[t];
                o[t].setCookieEnabled(n, e || null)
            }))
        }
        var r = f(an).reduce(function(e, t) {
            return e[t] = an[t].consent,
            e
        }, {})
          , i = hn({
            items: r,
            type: "cookie",
            getConsent: e
        })
          , o = e();
        n.addChangeListener("consent", function(e) {
            e = (null == e ? void 0 : e.DL) || null;
            (null == o ? void 0 : o.mode) !== (null === e ? void 0 : e.mode) && t(o = e)
        }),
        t(o)
    }
    var Ft, Wt, zt, O, $t, Xt, A, Gt, x, S, D, Zt, M, E, Qt, en, tn, nn, N, rn = {
        URI: {
            prefix: "{u}",
            compress: function(e) {
                if (null == e)
                    return "";
                var t = e
                  , n = 6
                  , r = function(e) {
                    return Lt.charAt(e)
                };
                if (null == t)
                    return "";
                for (var o, i, a, s, u = {}, c = {}, l = "", f = 2, d = 3, p = 2, v = [], g = 0, h = 0, m = 0; m < t.length; m += 1)
                    if (a = t.charAt(m),
                    Object.prototype.hasOwnProperty.call(u, a) || (u[a] = d++,
                    c[a] = !0),
                    s = l + a,
                    Object.prototype.hasOwnProperty.call(u, s))
                        l = s;
                    else {
                        if (Object.prototype.hasOwnProperty.call(c, l)) {
                            if (l.charCodeAt(0) < 256) {
                                for (o = 0; o < p; o++)
                                    g <<= 1,
                                    h == n - 1 ? (h = 0,
                                    v.push(r(g)),
                                    g = 0) : h++;
                                for (i = l.charCodeAt(0),
                                o = 0; o < 8; o++)
                                    g = g << 1 | 1 & i,
                                    h == n - 1 ? (h = 0,
                                    v.push(r(g)),
                                    g = 0) : h++,
                                    i >>= 1
                            } else {
                                for (i = 1,
                                o = 0; o < p; o++)
                                    g = g << 1 | i,
                                    h == n - 1 ? (h = 0,
                                    v.push(r(g)),
                                    g = 0) : h++,
                                    i = 0;
                                for (i = l.charCodeAt(0),
                                o = 0; o < 16; o++)
                                    g = g << 1 | 1 & i,
                                    h == n - 1 ? (h = 0,
                                    v.push(r(g)),
                                    g = 0) : h++,
                                    i >>= 1
                            }
                            0 == --f && (f = Math.pow(2, p),
                            p++),
                            delete c[l]
                        } else
                            for (i = u[l],
                            o = 0; o < p; o++)
                                g = g << 1 | 1 & i,
                                h == n - 1 ? (h = 0,
                                v.push(r(g)),
                                g = 0) : h++,
                                i >>= 1;
                        0 == --f && (f = Math.pow(2, p),
                        p++),
                        u[s] = d++,
                        l = String(a)
                    }
                if ("" !== l) {
                    if (Object.prototype.hasOwnProperty.call(c, l)) {
                        if (l.charCodeAt(0) < 256) {
                            for (o = 0; o < p; o++)
                                g <<= 1,
                                h == n - 1 ? (h = 0,
                                v.push(r(g)),
                                g = 0) : h++;
                            for (i = l.charCodeAt(0),
                            o = 0; o < 8; o++)
                                g = g << 1 | 1 & i,
                                h == n - 1 ? (h = 0,
                                v.push(r(g)),
                                g = 0) : h++,
                                i >>= 1
                        } else {
                            for (i = 1,
                            o = 0; o < p; o++)
                                g = g << 1 | i,
                                h == n - 1 ? (h = 0,
                                v.push(r(g)),
                                g = 0) : h++,
                                i = 0;
                            for (i = l.charCodeAt(0),
                            o = 0; o < 16; o++)
                                g = g << 1 | 1 & i,
                                h == n - 1 ? (h = 0,
                                v.push(r(g)),
                                g = 0) : h++,
                                i >>= 1
                        }
                        0 == --f && (f = Math.pow(2, p),
                        p++),
                        delete c[l]
                    } else
                        for (i = u[l],
                        o = 0; o < p; o++)
                            g = g << 1 | 1 & i,
                            h == n - 1 ? (h = 0,
                            v.push(r(g)),
                            g = 0) : h++,
                            i >>= 1;
                    0 == --f && (f = Math.pow(2, p),
                    p++)
                }
                for (i = 2,
                o = 0; o < p; o++)
                    g = g << 1 | 1 & i,
                    h == n - 1 ? (h = 0,
                    v.push(r(g)),
                    g = 0) : h++,
                    i >>= 1;
                for (; ; ) {
                    if (g <<= 1,
                    h == n - 1) {
                        v.push(r(g));
                        break
                    }
                    h++
                }
                return v.join("")
            },
            decompress: function(r) {
                if (null == r)
                    return "";
                if ("" == r)
                    return null;
                for (var e, t, n, o, i, a, s = (r = r.replace(/ /g, "+")).length, u = 32, c = function(e) {
                    var t = Lt
                      , e = r.charAt(e);
                    if (!Ht[t]) {
                        Ht[t] = {};
                        for (var n = 0; n < t.length; n++)
                            Ht[t][t.charAt(n)] = n
                    }
                    return Ht[t][e]
                }, l = [], f = 4, d = 4, p = 3, v = "", g = [], h = {
                    val: c(0),
                    position: u,
                    index: 1
                }, m = 0; m < 3; m += 1)
                    l[m] = m;
                for (t = 0,
                o = Math.pow(2, 2),
                i = 1; i != o; )
                    n = h.val & h.position,
                    h.position >>= 1,
                    0 == h.position && (h.position = u,
                    h.val = c(h.index++)),
                    t |= (0 < n ? 1 : 0) * i,
                    i <<= 1;
                switch (t) {
                case 0:
                    for (t = 0,
                    o = Math.pow(2, 8),
                    i = 1; i != o; )
                        n = h.val & h.position,
                        h.position >>= 1,
                        0 == h.position && (h.position = u,
                        h.val = c(h.index++)),
                        t |= (0 < n ? 1 : 0) * i,
                        i <<= 1;
                    a = jt(t);
                    break;
                case 1:
                    for (t = 0,
                    o = Math.pow(2, 16),
                    i = 1; i != o; )
                        n = h.val & h.position,
                        h.position >>= 1,
                        0 == h.position && (h.position = u,
                        h.val = c(h.index++)),
                        t |= (0 < n ? 1 : 0) * i,
                        i <<= 1;
                    a = jt(t);
                    break;
                case 2:
                    return ""
                }
                for (e = l[3] = a,
                g.push(a); ; ) {
                    if (s < h.index)
                        return "";
                    for (t = 0,
                    o = Math.pow(2, p),
                    i = 1; i != o; )
                        n = h.val & h.position,
                        h.position >>= 1,
                        0 == h.position && (h.position = u,
                        h.val = c(h.index++)),
                        t |= (0 < n ? 1 : 0) * i,
                        i <<= 1;
                    switch (a = t) {
                    case 0:
                        for (t = 0,
                        o = Math.pow(2, 8),
                        i = 1; i != o; )
                            n = h.val & h.position,
                            h.position >>= 1,
                            0 == h.position && (h.position = u,
                            h.val = c(h.index++)),
                            t |= (0 < n ? 1 : 0) * i,
                            i <<= 1;
                        l[d++] = jt(t),
                        a = d - 1,
                        f--;
                        break;
                    case 1:
                        for (t = 0,
                        o = Math.pow(2, 16),
                        i = 1; i != o; )
                            n = h.val & h.position,
                            h.position >>= 1,
                            0 == h.position && (h.position = u,
                            h.val = c(h.index++)),
                            t |= (0 < n ? 1 : 0) * i,
                            i <<= 1;
                        l[d++] = jt(t),
                        a = d - 1,
                        f--;
                        break;
                    case 2:
                        return g.join("")
                    }
                    if (0 == f && (f = Math.pow(2, p),
                    p++),
                    l[a])
                        v = l[a];
                    else {
                        if (a !== d)
                            return null;
                        v = e + e.charAt(0)
                    }
                    g.push(v),
                    l[d++] = e + v.charAt(0),
                    e = v,
                    0 == --f && (f = Math.pow(2, p),
                    p++)
                }
            }
        }
    }, on = f(rn).reduce(function(e, t) {
        return e[rn[t].prefix] = rn[t],
        e
    }, {}), Te = {
        cookieName: "_pctx",
        consent: "mandatory",
        encode: function(e, t) {
            void 0 === t && (t = Pt.URI);
            e = JSON.stringify(e),
            e = rn[t].compress(e);
            return rn[t].prefix + e
        },
        decode: function(e) {
            e = function(e) {
                var t = e.slice(0, 3)
                  , e = e.slice(3);
                if (!on[t])
                    return null;
                t = on[t].decompress(e);
                if (!t)
                    return null;
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return null
                }
            }(e || "");
            return a(e) ? e : null
        }
    }, an = {
        _pprv: Ct("_pprv", "mandatory", !!(null == (s = null == (s = g().cookies) ? void 0 : s._pprv) || !s.jsonOnly)),
        _pcid: Ct("_pcid", "essential"),
        _pcus: Ct("_pcus", "optional", !0),
        _pctx: Te
    }, Ae = f(Ft = an).reduce(function(e, t) {
        return e[t] = kt(Ft[t]),
        e
    }, {}), sn = function() {
        var a = null
          , s = null;
        return {
            register: function(e) {
                return a = m(m({}, e.fields), a),
                s = m(m({}, e.cookieByName), s)
            },
            get wrappers() {
                return s
            },
            get: function() {
                var t = {};
                return s && f(s).forEach(function(e) {
                    t = m(m({}, t), s[e].get())
                }),
                t
            },
            set: function(r, o) {
                void 0 === o && (o = null);
                var i = {};
                f(r).forEach(function(e) {
                    var t = r[e]
                      , n = null == a ? void 0 : a[e];
                    n && (i[n] || (i[n] = {
                        wrapper: null == s ? void 0 : s[n],
                        data: {},
                        update: !1
                    }),
                    i[n].data[e] = t,
                    o && (i[n].update || t === o[e]) || (i[n].update = !0))
                }),
                f(i).forEach(function(e) {
                    var t = i[e]
                      , n = t.wrapper;
                    t.update && n.set(i[e].data)
                })
            }
        }
    }, un = "__pctx_connection__", cn = "uvm42pas28m", ln = function(t, n) {
        var e, r;
        return t === n || (t && n ? (e = f(t),
        r = f(n),
        e.length === r.length && !e.some(function(e) {
            return t[e] !== n[e]
        })) : null)
    }, fn = {}, dn = (void 0 === Wt && (Wt = !1),
    function(e, t) {
        var n = Ut();
        try {
            Object.defineProperty(window, un, {
                configurable: Wt,
                set: function(e) {
                    var t = e();
                    t === cn ? e(n) : "mrlqf5trgho" === t && (n = Ut())
                }
            })
        } catch (e) {}
        return window[un] = function(e) {
            return e && (n = e),
            cn
        }
        ,
        n(e, t)
    }
    ), pn = function(e) {
        return e.includes("*")
    }, vn = function(e, t) {
        return [new RegExp("^" + e.replace(/\*/g, ".*") + "$"), t]
    }, gn = function(e, t) {
        for (var n = 0, r = t; n < r.length; n++) {
            var o = r[n];
            if (o[0].test(e))
                return o[1]
        }
        return null
    }, hn = function(c) {
        function l(e) {
            return t[e] || gn(e, n) || "optional"
        }
        var t = Object.assign({}, c.items)
          , n = Bt(t);
        return function(e, t) {
            var o, i, n, r = g().requireConsent, a = !d(e), s = a ? [e] : e, e = (n = t || c.getConsent()) ? "custom" === n.mode ? (o = function(e, t, n) {
                t = t && Ve(t, n);
                if (!t)
                    return null;
                for (var r = [], o = {}, i = 0, a = t.patches; i < a.length; i++) {
                    var s = a[i]
                      , u = s.action
                      , c = s.with
                      , s = s.item;
                    s.type === e && (o[s.key] = u = {
                        action: u,
                        data: void 0 === c ? null : c
                    },
                    pn(s.key)) && r.push(vn(s.key, u))
                }
                return {
                    source: t.source,
                    getModifier: function(e) {
                        return o[e] || gn(e, r)
                    }
                }
            }(c.type, n.modifier, c.log)) ? (i = o.source,
            s.map(function(e) {
                var t = o.getModifier(e)
                  , n = (n = null == t ? void 0 : t.action,
                r = null == t ? void 0 : t.data,
                "obfuscate" === n ? r : null)
                  , r = {
                    name: e,
                    allowed: null != t && t.action ? function(e) {
                        switch (e) {
                        case "include":
                            return !0;
                        case "exclude":
                            return !1;
                        case "obfuscate":
                            return !0
                        }
                    }(t.action) : Rt(i, l(e))
                };
                return null !== n && (r.data = n),
                r
            })) : u() : s.map(function(e) {
                return {
                    name: e,
                    allowed: Rt(n.mode, l(e))
                }
            }) : u();
            function u() {
                return s.map(function(e) {
                    return {
                        name: e,
                        allowed: !r
                    }
                })
            }
            return a ? e[0] : e
        }
    }, Ge = Object.freeze({
        __proto__: null,
        createCheckConsentWrapper: hn,
        createMask: vn,
        getByMask: gn,
        isMask: pn,
        itemsToMask: Bt
    }), mn = (zt = {
        pa_vid: function(e) {
            return Kt(De(e || "", !0) || e)
        },
        atuserid: function(e) {
            return Kt((null == (e = De(e || "", !0)) ? void 0 : e.val) || "")
        }
    },
    function(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var r = function(e) {
                try {
                    var t = e.ls ? Vt(e.ls) || null : (n = h.get(e),
                    zt[e] && n ? zt[e](n) : n);
                    if (t)
                        return {
                            value: t
                        }
                } catch (e) {}
                var n
            }(n[t]);
            if ("object" === c(r))
                return r.value
        }
        return null
    }
    ), Ze = [{
        ls: "_cX_P"
    }, "cX_P"], yn = {
        PA: {
            browserId: ["pa_vid", "atuserid"].concat(Ze)
        },
        DMP: {
            browserId: Ze
        }
    }, _n = {
        browserId: {
            source: "DMP"
        }
    }, Qe = "@@Data-layer/", bn = Qe + "update_value", wn = Qe + "refresh_value", Cn = function() {
        return {
            _pprv: !g().requireConsent
        }
    }, T = ($t = function(e) {
        Jt(e),
        Yt(e)
    }
    ,
    et = et = Ae,
    Gt = {
        fields: f(Xt = O = Ne).reduce(function(e, t) {
            var n = Xt[t].cookieName;
            return null !== n && (e[t] = n),
            e
        }, {}),
        cookieByName: et
    },
    x = dn("data-layer", Gt),
    S = !1,
    D = new Map,
    Zt = new Set,
    M = new Map,
    E = function() {
        if (x)
            return x;
        throw new Error("DataLayer can't be connected")
    }
    ,
    Qt = function(e) {
        var t = E().registeredCookiesWrapper;
        t && e(t)
    }
    ,
    en = function(e) {
        Qt(function(t) {
            e.forEach(function(e) {
                e = t[e];
                e && e.lazyActive()
            })
        })
    }
    ,
    tn = function() {
        function t(r) {
            return f(o).reduce(function(e, t) {
                var n = o[t];
                return void 0 !== n[r] && (e[t] = n[r]),
                e
            }, {})
        }
        var o = {};
        return {
            add: function(e, t) {
                o[e] = t
            },
            call: function() {
                var e;
                e = t("protect"),
                0 < f(e).length && E().setProtectionData(e),
                e = t("protectUnsafe"),
                0 < f(e).length && E().setProtectionDataUnsafe(e)
            }
        }
    }
    ,
    nn = function(o, i) {
        return f(o).reduce(function(e, t) {
            var n = M.get(t)
              , r = o[t];
            return n && (e[t] = i ? i(n, r) : n.get(r)),
            e
        }, {})
    }
    ,
    N = function(e, t, n) {
        void 0 === n && (n = !1);
        var r, i = e, a = ce(), s = (p(e) && ((r = {})[e] = t,
        i = r),
        tn()), u = tn(), i = f(i).reduce(function(e, t) {
            var n = i[t]
              , r = M.get(t)
              , o = t;
            return null != r && r.readonly || (r && r.cookieName && a.add(r.cookieName),
            r && n !== A[t] && (n === wn ? (e[t] = r.refresh(A[t], function(e) {
                u.add(o, e)
            }),
            e[t] !== A[t] && s.add(o, {
                protectUnsafe: !1
            })) : e[t] = n === bn ? r.update(A[t], function(e) {
                u.add(o, e)
            }) : r.set(n, A[t], function(e) {
                u.add(o, e)
            }))),
            e
        }, {}), e = (en(a.values()),
        s.call(),
        E().updateData(i));
        return e && n && (t = f(e).reduce(function(e, t) {
            return m(m({}, e), ((e = {})[t] = !1,
            e))
        }, {}),
        E().setProtectionDataUnsafe(t),
        E().updateData(i)),
        u.call(),
        e && nn(e)
    }
    ,
    {
        init: function(e) {
            var a, s, o, i, u, c;
            void 0 === e && (e = {}),
            S || (x = x || dn("data-layer", Gt),
            a = m(m({}, e), qt()),
            s = a.cookieDefault,
            Qt(function(i) {
                f(i).forEach(function(e) {
                    var t, n, r = i[e].cookieName, o = null == (o = a.cookies) ? void 0 : o[r], r = "fixed" === (null == (r = a.cookies) ? void 0 : r.storageMode);
                    null != (n = (t = i[e]).setFixedMode) && n.call(t, r),
                    (s || o) && i[e].setCookieOptions(m(m({}, s), o))
                })
            }),
            S = !0,
            f(O).forEach(function(e) {
                var t = O[e];
                D.set(e, new Set),
                M.set(e, t)
            }),
            o = !1,
            i = E().getInitCookieData(),
            u = E().getCachedData(),
            c = tn(),
            e = f(O).reduce(function(e, t) {
                var n = t
                  , r = O[t];
                return e[t] = (null == u ? void 0 : u[n]) || r.init(null == i ? void 0 : i[n], function(e) {
                    c.add(n, e)
                }),
                null != u && u[n] || (o = !0),
                e
            }, {}),
            A = e,
            o && E().updateData(e),
            c.call(),
            E().onUpdateData(On),
            null != $t && $t(Pn()))
        },
        set: function(e, t) {
            return N(e, t, !1)
        },
        get: An,
        update: function(e) {
            return xn(e)
        },
        refresh: function() {
            var n, e;
            return !E().setProtectionData(((e = {})["@@Data-layer/refresh_locked_key"] = !0,
            e)) && (n = [],
            M.forEach(function(e, t) {
                return n.push(t)
            }),
            e = n.reduce(function(e, t) {
                return e[t] = wn,
                e
            }, {}),
            N(e),
            !0)
        },
        protect: function(e, t) {
            return Sn(e, t)
        },
        addChangeListener: In,
        removeChangeListener: function(t) {
            Zt.delete(t),
            D.forEach(function(e) {
                return e.delete(t)
            })
        },
        terminate: function() {
            null != x && x.terminate(),
            D.clear(),
            Zt.clear(),
            x = null,
            S = !1,
            A = {}
        },
        updateMigration: function() {
            S && Yt(Pn())
        },
        get isReady() {
            return S
        },
        utils: {
            validateModifier: Ve,
            validateConsent: he,
            checkConsent: Ge
        },
        get cookies() {
            return kn()
        },
        get cookieEnabled() {
            return kn()
        },
        setUnsafe: function(e, t) {
            N(e, t, !0)
        },
        protectUnsafe: function(e, t) {
            return Sn(e, t, !0)
        },
        updateUnsafe: function(e) {
            return xn(e, !0)
        },
        setCookieEnabled: function(r) {
            Qt(function(n) {
                var e = f(r);
                e.length ? e.forEach(function(e) {
                    var t = n[e];
                    t && t.setCookieEnabled(r[e])
                }) : f(n).forEach(function(e) {
                    n[e].setCookieEnabled(r)
                })
            })
        }
    });
    function kn() {
        var e = null;
        return Qt(function(o) {
            e = f(o).reduce(function(e, t) {
                var n = o[t].cookieEnabled
                  , r = o[t].fixedAt || null;
                return e[o[t].cookieName] = n ? {
                    enabled: n,
                    fixedAt: r
                } : null,
                e
            }, {})
        }),
        e
    }
    function Pn() {
        return {
            params: M,
            getConnection: E,
            addChangeListener: In,
            get: An,
            updateValues: N
        }
    }
    function On(r) {
        var o = !1;
        f(r).forEach(function(e) {
            var t, n = M.get(e);
            n && (t = r[e],
            A[e] !== t) && (A[e] = t,
            o = !0,
            null != (e = D.get(e))) && e.forEach(function(e) {
                return e(n.get(t))
            })
        }),
        o && Zt.forEach(function(e) {
            return e(nn(A))
        })
    }
    function An(e) {
        var n = ce()
          , t = p(e)
          , r = void 0 === e ? A : t ? ((r = {})[e] = A[e],
        r) : e.reduce(function(e, t) {
            return M.has(t) && (e[t] = A[t]),
            e
        }, {});
        return r = nn(r, function(e, t) {
            return e.cookieName && n.add(e.cookieName),
            e.get(t)
        }),
        en(n.values()),
        t ? r[e] : r
    }
    function xn(e, t) {
        void 0 === t && (t = !1);
        var n = e;
        return d(e) || (n = [e]),
        N(n.reduce(function(e, t) {
            return e[t] = bn,
            e
        }, {}), void 0, t)
    }
    function Sn(e, t, n) {
        var r, n = (n = void 0 === n ? !1 : n) ? E().setProtectionDataUnsafe : E().setProtectionData, o = e;
        return p(e) && ((r = {})[e] = t,
        o = r),
        n(o)
    }
    function In(e, t) {
        var n;
        p(e) ? null != (n = D.get(e)) && n.add(t) : Zt.add(e)
    }
    function Dn(t, n, r) {
        n.setProperty("event_collection_platform", "js"),
        n.setProperty("event_collection_version", n.getConfiguration("version"));
        var e, o = new Date, i = (n.setProperty("device_timestamp_utc", o.getTime()),
        n.setProperty("device_local_hour", o.getTime()),
        n.setProperty("device_hour", o.getHours()),
        T.get("content"));
        for (e in i)
            if (Object.prototype.hasOwnProperty.call(i, e)) {
                var a, s = "createdAt" === e || "tags" === e ? {
                    createdAt: "content_publication_date",
                    tags: "tags_array"
                }[e] : "content_".concat(e).replace(/[\w]([A-Z])/g, function(e) {
                    return e[0] + "_" + e[1]
                }).toLowerCase(), u = b(n.events);
                try {
                    for (u.s(); !(a = u.n()).done; ) {
                        var c = a.value
                          , l = !1;
                        if (n.hasProperty(s)) {
                            var f = n.properties[s].options.events;
                            if (f)
                                if (-1 < f.indexOf(c.name))
                                    l = !0;
                                else {
                                    var d, p = b(f);
                                    try {
                                        for (p.s(); !(d = p.n()).done; ) {
                                            var v = d.value;
                                            if ("*" === v.charAt(v.length - 1) && 0 === c.name.indexOf(v.substring(0, v.length - 1))) {
                                                l = !0;
                                                break
                                            }
                                        }
                                    } catch (e) {
                                        p.e(e)
                                    } finally {
                                        p.f()
                                    }
                                }
                            else
                                l = !0
                        }
                        var g = void 0 !== c.data[s];
                        l || g || t._privacy.call("isPropAllowed", name) && (c.data[s] = i[e])
                    }
                } catch (e) {
                    u.e(e)
                } finally {
                    u.f()
                }
            }
        n.setProperty("has_access", T.get("userStatus")),
        n.setProperty("pageview_id", T.get("pageViewId")),
        n.setProperty("device_screen_width", window.screen.width),
        n.setProperty("device_screen_height", window.screen.height),
        n.setProperty("device_display_width", window.innerWidth || document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : ""),
        n.setProperty("device_display_height", window.innerHeight || document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : "");
        var h, o = function(e, t) {
            var n, r = b(t);
            try {
                for (r.s(); !(n = r.n()).done; ) {
                    var o, i = n.value;
                    if (-1 < e.indexOf(i))
                        return [(o = e.split(i))[0], o.slice(1).join(i)]
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return ["", ""]
        }(window.navigator ? window.navigator.language || window.navigator.userLanguage : "", ["-", "_"]), o = (n.setProperty("browser_language", o[0]),
        n.setProperty("browser_language_local", o[1]),
        n.setProperty("previous_url", document.referrer || ""),
        document.title && n.setProperty("page_title_html", document.title),
        "true" === n.getConfiguration("addEventURL").toString());
        !o && "withoutQS" !== n.getConfiguration("addEventURL") || n.setProperty("page_url", o ? window.location.href.split("#")[0] : "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname));
        try {
            t.getConfiguration("allowHighEntropyClientHints") ? window.navigator.userAgentData.getHighEntropyValues(["architecture", "bitness", "brands", "mobile", "model", "platform", "platformVersion", "uaFullVersion", "fullVersionList"]).then(function(e) {
                En(n, e)
            }).finally(function() {
                w(t, n, r)
            }) : (h = {
                brands: window.navigator.userAgentData.brands,
                platform: window.navigator.userAgentData.platform,
                mobile: window.navigator.userAgentData.mobile
            },
            En(n, h),
            w(t, n, r))
        } catch (e) {
            w(t, n, r)
        }
    }
    function Mn(e) {
        return void 0 !== e
    }
    function En(e, t) {
        var n = [{
            metric: "brands",
            property: "ch_ua"
        }, {
            metric: "architecture",
            property: "ch_ua_arch"
        }, {
            metric: "bitness",
            property: "ch_ua_bitness"
        }, {
            metric: "fullVersionList",
            property: "ch_ua_full_version_list"
        }, {
            metric: "mobile",
            property: "ch_ua_mobile"
        }, {
            metric: "model",
            property: "ch_ua_model"
        }, {
            metric: "platform",
            property: "ch_ua_platform"
        }, {
            metric: "platformVersion",
            property: "ch_ua_platform_version"
        }, {
            metric: "uaFullVersion",
            property: "ch_ua_full_version"
        }];
        if (Mn(t))
            for (var r = 0; r < n.length; r++)
                Mn(t[n[r].metric]) && e.setProperty(n[r].property, t[n[r].metric])
    }
    function Nn(t, n, r) {
        function e(e) {
            w(t, n, r, e)
        }
        n.options && n.options.onBeforeBuild ? n.options.onBeforeBuild(t, n, e) : e()
    }
    function Tn(t, n, r) {
        function e(e) {
            w(t, n, r, e)
        }
        n.options && n.options.onBeforeSend ? n.options.onBeforeSend(t, n, e) : e()
    }
    function jn(e, t, n) {
        e._privacy.call("filterEvents", t.events),
        e._privacy.call("filterProps", t.properties);
        for (var r = t.events, o = 0; o < r.length; o++) {
            e._privacy.call("filterProps", r[o].data, r[o].name);
            var i, a = e._privacy.call("getModeMetadata") || {};
            for (i in a)
                Object.prototype.hasOwnProperty.call(a, i) && t.setProperty(i, a[i])
        }
        w(e, t, n)
    }
    function Ln(e, t, n) {
        var r, o = [];
        for (r in t.properties)
            if (Object.prototype.hasOwnProperty.call(t.properties, r)) {
                var i, a = !1, s = b(t.events);
                try {
                    for (s.s(); !(i = s.n()).done; ) {
                        var u = i.value
                          , c = !1
                          , l = t.properties[r].options.events;
                        if (l)
                            if (-1 < l.indexOf(u.name))
                                c = !0;
                            else {
                                var f, d = b(l);
                                try {
                                    for (d.s(); !(f = d.n()).done; ) {
                                        var p = f.value;
                                        if ("*" === p.charAt(p.length - 1) && 0 === u.name.indexOf(p.substring(0, p.length - 1))) {
                                            c = !0;
                                            break
                                        }
                                    }
                                } catch (e) {
                                    d.e(e)
                                } finally {
                                    d.f()
                                }
                            }
                        else
                            c = !0;
                        c && (u.data[r] = t.properties[r].value,
                        a = !0)
                    }
                } catch (e) {
                    s.e(e)
                } finally {
                    s.f()
                }
                a && !t.properties[r].options.persistent && o.push(r)
            }
        for (var v = 0, g = o; v < g.length; v++)
            delete e._properties[g[v]];
        if (!t.getConfiguration("sendEmptyProperties")) {
            var h, m = b(t.events);
            try {
                for (m.s(); !(h = m.n()).done; ) {
                    var y, _ = h.value;
                    for (y in _.data)
                        !Object.prototype.hasOwnProperty.call(_.data, y) || "" !== _.data[y] && void 0 !== _.data[y] || delete _.data[y]
                }
            } catch (e) {
                m.e(e)
            } finally {
                m.f()
            }
        }
        w(e, t, n)
    }
    function Hn(e, t, n) {
        (e._privacy.call("getMode") !== e._privacy.modeEnum.OPTOUT || e._privacy.call("getMode") === e._privacy.modeEnum.OPTOUT && t.getConfiguration("sendEventWhenOptout")) && 0 < t.build.data.events.length && R.post(t.build.url, JSON.stringify(t.build.data)),
        w(e, t, n)
    }
    function Un(n, r, o) {
        void 0 !== r.properties.user_id ? w(n, r, o) : n.getUser(function(e) {
            var t;
            null !== e && (r.setProperty("user_id", e.id, t = {
                persistent: !0
            }),
            r.setProperty("user_category", e.category, t),
            r.setProperty("user_recognition", !0, t)),
            w(n, r, o)
        })
    }
    function Bn(n, r, o) {
        n._storage.getItem(r.getConfiguration("storageVisitor"), function(e) {
            var t;
            r.getConfiguration("isVisitorClientSide") && (r.visitorId = r.getConfiguration("visitorId") || T.get("browserId"),
            r.getConfiguration("isLegacyPrivacy") || "opt-out" !== n.consent.getMode() || (r.visitorId = "OPT-OUT"),
            t = "OPT-OUT" !== r.visitorId && "no-consent" !== r.visitorId && "no-storage" !== r.visitorId && r.visitorId !== r.getConfiguration("visitorId"),
            r.visitorId !== T.get("browserId")) && t && (r.visitorId = r.visitorId + "-NO"),
            w(n, r, o)
        })
    }
    function Rn(o, e, t) {
        function n(e) {
            null != (e = i(Fn(t.dataLayer, t.items, o.getNames), e)) && e.forEach(function(e) {
                e.allowed ? e.data && o.set(e.name, e.data) : o.remove(e.name)
            })
        }
        var r = Yn(t)
          , i = Jn(t.dataLayer, {
            items: t.items,
            type: e,
            getConsent: r
        });
        return e = void 0 === t.checkConsentOnInit && t.enableAutoRemove,
        t.enableAutoRemove && qn(t, n),
        e && n(r()),
        Object.assign({}, o, {
            set: function(e, t, n) {
                var r = i(e);
                null != r && r.allowed && (r = null != (r = r.data) ? r : t,
                o.set.apply(null, n ? [e, r, n] : [e, r]))
            },
            check: i
        })
    }
    function Vn(e, t) {
        return {
            check: Jn(t.dataLayer, {
                items: t.items,
                type: e,
                getConsent: Yn(t)
            })
        }
    }
    var Kn = function(o) {
        this.setItem = function(e, t, n, r) {
            e = "".concat(e, "=").concat(o.getConfiguration("encodeStorageBase64") ? V.base64.encode(JSON.stringify(t)) : encodeURIComponent(JSON.stringify(t))),
            e = (e = (e = (e = (e += ";path=".concat(o.getConfiguration("cookiePath"))) + ";domain=".concat(o.getConfiguration("cookieDomain"))) + (o.getConfiguration("cookieSecure") ? ";secure" : "")) + ";samesite=".concat(o.getConfiguration("cookieSameSite"))) + (n ? ";expires=".concat(n.toUTCString()) : "");
            document.cookie = e,
            r && r()
        }
        ,
        this.getItem = function(t, e) {
            var n = null
              , t = new RegExp("(?:^| )".concat(t, "=([^;]+)")).exec(document.cookie) || null;
            if (t)
                try {
                    n = JSON.parse(decodeURIComponent(t[1]))
                } catch (e) {
                    n = JSON.parse(V.base64.decode(t[1]))
                }
            e && e(n)
        }
        ,
        this.deleteItem = function(e, t) {
            var n = new Date;
            n.setTime(n.getTime() - 1e3),
            this.setItem(e, "", n, t)
        }
    }
      , Yn = function(t) {
        return function() {
            var e = t.dataLayer.get("consent");
            return e && e[t.productName] || null
        }
    }
      , qn = function(t, n) {
        function e(e) {
            (e = (null == e ? void 0 : e[t.productName]) || null) !== r && n(r = e)
        }
        var r = null;
        return t.dataLayer.addChangeListener("consent", e),
        function() {
            t.dataLayer.removeChangeListener(e)
        }
    }
      , Jn = function(e, t) {
        return e.utils.checkConsent.createCheckConsentWrapper(t)
    }
      , Fn = function(e, t, n) {
        var r = e.utils.checkConsent
          , o = r.itemsToMask(t)
          , i = Object.keys(t).filter(function(e) {
            return !r.isMask(e)
        });
        return n().filter(function(e) {
            return i.includes(e) || r.getByMask(e, o)
        })
    }
      , Wn = {
        createLocalStorage: function(e) {
            t = e.dataLayer,
            o = ae.__protected__.ttlName,
            r = Jn((t = {
                dataLayer: t,
                productName: "DL"
            }).dataLayer, {
                items: ((n = {})[o] = "mandatory",
                n),
                type: "localStorage",
                getConsent: Yn(t)
            }),
            i = function() {
                var e = r(o);
                return e.allowed && !e.data
            }
            ,
            a = !0,
            qn(t, u),
            u();
            var t, n, r, o, i, a, s = function() {
                return a
            };
            function u() {
                (a = i()) || ae.remove(o)
            }
            var c = Rn(ae, "localStorage", e);
            return Object.assign({}, c, {
                set: function(e, t, n) {
                    var r = n;
                    return null != n && n.expires && !s() && delete (r = Object.assign({}, n)).expires,
                    c.set(e, t, r)
                }
            })
        },
        createProperty: function(e) {
            return Vn("property", e)
        },
        createCookie: function(a) {
            function e(e) {
                null != (e = i(Fn(a.dataLayer, l, h.getNames), e)) && e.forEach(function(e) {
                    function t() {
                        return u[e.name] || s.getByMask(e.name, c) || r
                    }
                    e.allowed ? e.data && h.set(e.name, e.data, t()) : h.remove(e.name, t())
                })
            }
            var t, s = a.dataLayer.utils.checkConsent, n = Yn(a), u = {}, c = [], l = {}, r = {}, i = (Object.keys(a.items).forEach(function(e) {
                var t, n, r, o, i = a.items[e];
                i.type ? (t = i.type,
                n = i.domain,
                r = i.path,
                o = {},
                l[e] = t,
                n && (o.domain = n),
                r && (o.path = r),
                s.isMask(e) ? c.push(s.createMask(e, o)) : u[e] = o) : l[e] = i
            }),
            Jn(a.dataLayer, {
                items: l,
                type: "cookie",
                getConsent: n
            }));
            t = !(void 0 !== a.checkConsentOnInit || !a.enableAutoRemove),
            a.enableAutoRemove && (r = a.enableAutoRemove,
            qn(a, e)),
            t && e(n());
            return Object.assign({}, h, {
                check: i,
                set: function(e, t, n, r) {
                    var o = i(e);
                    null != o && o.allowed && h.set(e, null != (e = o.data) ? e : t, n, r)
                }
            })
        },
        createSessionStorage: function(e) {
            return Rn(Oe, "sessionStorage", e)
        },
        createEvent: function(e) {
            return Vn("event", e)
        }
    }
      , zn = {
        "*": "optional",
        pa_vid: "mandatory",
        pa_privacy: "mandatory",
        atuserid: "essential"
    }
      , $n = {
        "click.exit": "mandatory",
        "click.navigation": "mandatory",
        "click.download": "mandatory",
        "click.action": "mandatory",
        "page.display": "mandatory"
    }
      , Xn = {
        "*": "optional",
        connection_type: "mandatory",
        device_timestamp_utc: "mandatory",
        visitor_privacy_consent: "mandatory",
        visitor_privacy_mode: "mandatory",
        ch_ua: "mandatory",
        ch_ua_arch: "mandatory",
        ch_ua_bitness: "mandatory",
        ch_ua_full_version: "mandatory",
        ch_ua_full_version_list: "mandatory",
        ch_ua_mobile: "mandatory",
        ch_ua_model: "mandatory",
        ch_ua_platform: "mandatory",
        ch_ua_platform_version: "mandatory",
        app_crash: "essential",
        app_crash_class: "essential",
        app_crash_screen: "essential",
        app_version: "essential",
        browser: "essential",
        browser_cookie_acceptance: "essential",
        browser_group: "essential",
        browser_version: "essential",
        click: "essential",
        click_chapter1: "essential",
        click_chapter2: "essential",
        click_chapter3: "essential",
        click_full_name: "essential",
        connection_monitor: "essential",
        connection_organisation: "essential",
        date: "essential",
        date_day: "essential",
        date_daynumber: "essential",
        date_month: "essential",
        date_monthnumber: "essential",
        date_week: "essential",
        date_year: "essential",
        date_yearofweek: "essential",
        device_brand: "essential",
        device_display_height: "essential",
        device_display_width: "essential",
        device_name: "essential",
        device_name_tech: "essential",
        device_screen_diagonal: "essential",
        device_screen_height: "essential",
        device_screen_width: "essential",
        device_type: "essential",
        event_collection_platform: "essential",
        event_collection_version: "essential",
        event_hour: "essential",
        event_id: "essential",
        event_minute: "essential",
        event_position: "essential",
        event_second: "essential",
        event_time: "essential",
        event_time_utc: "essential",
        event_url: "essential",
        event_url_domain: "essential",
        event_url_full: "essential",
        exclusion_cause: "essential",
        exclusion_type: "essential",
        geo_city: "essential",
        geo_continent: "essential",
        geo_country: "essential",
        geo_metro: "essential",
        geo_region: "essential",
        goal_type: "essential",
        hit_time_utc: "essential",
        os: "essential",
        os_group: "essential",
        os_version: "essential",
        os_version_name: "essential",
        page: "essential",
        page_chapter1: "essential",
        page_chapter2: "essential",
        page_chapter3: "essential",
        page_duration: "essential",
        page_full_name: "essential",
        page_position: "essential",
        page_title_html: "essential",
        page_url: "essential",
        pageview_id: "essential",
        previous_url: "essential",
        privacy_status: "essential",
        site: "essential",
        site_env: "essential",
        site_id: "essential",
        site_platform: "essential",
        src: "essential",
        src_detail: "essential",
        src_direct_access: "essential",
        src_organic: "essential",
        src_organic_detail: "essential",
        src_portal_domain: "essential",
        src_portal_site: "essential",
        src_portal_site_id: "essential",
        src_portal_url: "essential",
        src_referrer_site_domain: "essential",
        src_referrer_site_url: "essential",
        src_referrer_url: "essential",
        src_se: "essential",
        src_se_category: "essential",
        src_se_country: "essential",
        src_type: "essential",
        src_url: "essential",
        src_url_domain: "essential",
        src_webmail: "essential"
    };
    function Gn(e, t) {
        var n;
        return n = t,
        window.pdl && window.pdl.consent_items && window.pdl.consent_items.PA && window.pdl.consent_items.PA[n] && Object.assign(e, window.pdl.consent_items.PA[t]),
        e
    }
    function Zn(o) {
        this.storageKeys = ["pa_vid", "pa_user", "pa_privacy", "atuserid"],
        this.propertyConsent = {},
        this.eventConsent = {},
        this.storageConsent = {},
        this.consentItems = {
            propertyItems: {},
            eventItems: {},
            cookieItems: {}
        },
        this.modeMetadata = {
            "opt-in": {
                visitor_privacy_consent: !0,
                visitor_privacy_mode: "optin"
            },
            "opt-out": {
                visitor_privacy_consent: !1,
                visitor_privacy_mode: "optout"
            },
            essential: {
                visitor_privacy_consent: !1,
                visitor_privacy_mode: "exempt"
            },
            custom: {
                visitor_privacy_consent: !1,
                visitor_privacy_mode: "custom"
            }
        },
        this.init = function() {
            this.consentItems = {
                propertyItems: Gn(Xn, "properties"),
                eventItems: Gn($n, "events"),
                cookieItems: Gn(zn, "storages")
            },
            this.propertyConsent = Wn.createProperty({
                dataLayer: T,
                productName: "PA",
                items: this.consentItems.propertyItems
            }),
            this.eventConsent = Wn.createEvent({
                dataLayer: T,
                productName: "PA",
                items: this.consentItems.eventItems
            }),
            this.storageConsent = Wn.createCookie({
                dataLayer: T,
                productName: "PA",
                items: this.consentItems.cookieItems
            }),
            o.getConfiguration("isLegacyPrivacy") || (this.initMode(),
            this.filterKeys())
        }
        ,
        this.initMode = function() {
            null === T.get("consent") && (window.pdl.consent && window.pdl.consent.defaultPreset ? T.set("consent", 0) : this.setMode("opt-in"))
        }
        ,
        this.setMode = function(e) {
            T.set("consent", {
                PA: {
                    mode: e
                }
            }),
            this.filterKeys()
        }
        ,
        this.setPresets = function(e) {
            T.set("consent", e),
            this.filterKeys()
        }
        ,
        this.getMode = function() {
            var e = "opt-in"
              , t = T.get("consent");
            return e = t && t.PA && t.PA.mode ? T.get("consent").PA.mode : e
        }
        ,
        this.setCustomModeMetadata = function(e, t) {
            this.modeMetadata.custom.visitor_privacy_mode = t || "custom",
            this.modeMetadata.custom.visitor_privacy_consent = e
        }
        ,
        this.getModeMetadata = function() {
            return this.modeMetadata[this.getMode()] || {}
        }
        ,
        this.getConsentItems = function() {
            return this.consentItems
        }
        ,
        this.isPropAllowed = function(e) {
            return this.propertyConsent.check(e).allowed
        }
        .bind(this),
        this.isEventAllowed = function(e) {
            return this.eventConsent.check(e).allowed
        }
        .bind(this),
        this.isKeyAllowed = function(e) {
            return this.storageConsent.check(e).allowed
        }
        .bind(this),
        this.filterProps = function(e) {
            for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && !this.isPropAllowed(t) && delete e[t]
        }
        ,
        this.filterEvents = function(e) {
            for (var t = e.length - 1; 0 <= t; t--)
                this.isEventAllowed(e[t].name) || e.splice(t, 1)
        }
        ,
        this.filterKeys = function() {
            var e, t = b(this.storageKeys);
            try {
                for (t.s(); !(e = t.n()).done; ) {
                    var n = e.value;
                    this.isKeyAllowed(n) || o._storage.deleteItem(n)
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
        }
        ,
        this.setItem = function(e, t, n, r) {
            this.isKeyAllowed(e) ? o._storage.setItem(e, t, n, r) : r && r()
        }
        ,
        this.dl = T,
        this.init()
    }
    function Qn(e, t, n, r) {
        var o = e[t[0]];
        return void 0 === o || (1 === t.length ? (o.apply(r || e, n),
        !1) : Qn(o, t.slice(1), n, r))
    }
    function er(t, e, n, r) {
        var o = n ? null : t
          , i = e || []
          , a = !1
          , s = !1;
        if (0 < i.length) {
            for (var u = 0; u < i.length; u++) {
                var c = i[u];
                Qn(t, c[0].split("."), c.slice(1), o) ? s = !0 : a = !0
            }
            s && a && console.error("Piano Analytics SDK - window.".concat(r, ' is used for Piano Analytics integration and somewhere else. Please check "queueVarName" configuration if needed.'))
        }
        n && (window[r] = {
            push: function(e) {
                Qn(t, e[0].split("."), e.slice(1))
            }
        })
    }
    function tr(o) {
        function n(e, t, n, r) {
            return n = u(t[n].events[e], r),
            t = u(t["*"].events[e], r),
            n || t
        }
        function r(e, t, n, r, o) {
            var i, o = o ? (i = c(t[n].properties, e, r, o),
            c(t["*"].properties, e, r, o)) : (i = l(t[n].properties, e, r),
            l(t["*"].properties, e, r));
            return i || o
        }
        function i(e, t, n, r) {
            return n = f(t[n].storage, e, r),
            t = f(t["*"].storage, e, r),
            n || t
        }
        var a = o.getConfiguration("privacy")
          , s = (this.currentMode = "",
        this.modes = a.modes,
        this._storageKeys = Object.assign(a.legacyKeys, a.storageKeys),
        this.init = function() {
            o.getConfiguration("isLegacyPrivacy") && (window._pac = window._pac || {
                privacy: []
            },
            er(this, window._pac.privacy),
            o._storage.getItem(a.storageKey, function(e) {
                this.setMode(e && this.modes[e] ? e : o.getConfiguration("privacyDefaultMode"))
            }
            .bind(this)))
        }
        ,
        this.setMode = function(t) {
            t !== this.currentMode && this.modes[t] && (this.currentMode = t,
            o._storage.getItem(a.storageKey, function(e) {
                "optout" === t || "no-consent" === t || "no-storage" === t ? o.setConfiguration("visitorId", this.modes[t].visitorId) : "OPT-OUT" !== o.getConfiguration("visitorId") && "no-consent" !== o.getConfiguration("visitorId") && "no-storage" !== o.getConfiguration("visitorId") || o.cfg.deleteProperty("visitorId"),
                this.filterProps(o._properties),
                this.filterKeys(),
                e !== t && ((e = new Date).setTime(e.getTime() + 24 * o.getConfiguration("storageLifetimePrivacy") * 60 * 60 * 1e3),
                this.setItem(a.storageKey, t, e))
            }
            .bind(this)))
        }
        ,
        this.createMode = function(e, t) {
            var n;
            this.modes[e] || ((n = I(this.modes.exempt)).name = e,
            n.properties.include.visitor_privacy_mode = e,
            n.properties.include.visitor_privacy_consent = t,
            this.modes[e] = n)
        }
        ,
        this.getMode = function() {
            return this.currentMode
        }
        ,
        function(e, t, n, r, o, i) {
            var a = ["*"]
              , s = ["*"]
              , u = "properties"
              , c = r ? "forbidden" : "allowed";
            t && (a = "string" == typeof t ? [t] : t),
            n && (s = "string" == typeof n ? [n] : n),
            o && (u = "storage"),
            i && (u = "events");
            for (var l = 0; l < a.length; l++)
                if (void 0 !== this.modes[a[l]])
                    for (var f = this.modes[a[l]], d = 0; d < s.length; d++) {
                        var p = f[u][c];
                        void 0 !== p[s[d]] || o || i || (p[s[d]] = {});
                        for (var v = 0; v < e.length; v++)
                            o || i ? p[e[v]] = !0 : p[s[d]][e[v]] = !0
                    }
        }
        .bind(this))
          , u = (this.include = {
            properties: function(e, t, n) {
                s(e, t, n)
            },
            property: function(e, t, n) {
                s([e], t, n)
            },
            storageKeys: function(e, t) {
                s(e, t, null, !1, !0)
            },
            storageKey: function(e, t) {
                s([e], t, null, !1, !0)
            },
            events: function(e, t) {
                s(e, t, null, !1, !1, !0)
            },
            event: function(e, t) {
                s([e], t, null, !1, !1, !0)
            }
        },
        this.exclude = {
            properties: function(e, t, n) {
                s(e, t, n, !0)
            },
            property: function(e, t, n) {
                s([e], t, n, !0)
            },
            storageKeys: function(e, t) {
                s(e, t, null, !0, !0)
            },
            storageKey: function(e, t) {
                s([e], t, null, !0, !0)
            },
            events: function(e, t) {
                s(e, t, null, !0, !1, !0)
            },
            event: function(e, t) {
                s([e], t, null, !0, !1, !0)
            }
        },
        function(e, t) {
            if (e[t])
                return !0;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n) && "*" === n.charAt(n.length - 1) && 0 === t.indexOf(n.substring(0, n.length - 1)))
                    return !0;
            return !1
        }
        )
          , c = (this.isEventAllowed = function(e) {
            var t = n("forbidden", this.modes, this.currentMode, e)
              , e = n("allowed", this.modes, this.currentMode, e);
            return !t && e
        }
        ,
        function(e, t, n, r) {
            var o, i = e[t];
            if (i[r] && i[r][n] || i["*"][n])
                return !0;
            for (o in i)
                if (Object.prototype.hasOwnProperty.call(i, o) && "*" === o.charAt(o.length - 1) && 0 === r.indexOf(o.substring(0, o.length - 1)) || o === r)
                    for (var a in i[o])
                        if (Object.prototype.hasOwnProperty.call(i[o], a) && ("*" === a.charAt(a.length - 1) && 0 === n.indexOf(a.substring(0, a.length - 1)) || n === a))
                            return !0;
            return !1
        }
        )
          , l = function(e, t, n) {
            if ("forbidden" === t && e[t]["*"][n])
                return !0;
            for (var r in e[t])
                if (Object.prototype.hasOwnProperty.call(e[t], r)) {
                    if (e[t][r][n])
                        return !0;
                    for (var o in e[t][r])
                        if ("*" === o.charAt(o.length - 1) && 0 === n.indexOf(o.substring(0, o.length - 1)))
                            return !0
                }
            return !1
        }
          , f = (this.isPropAllowed = function(e, t) {
            var n = r("forbidden", this.modes, this.currentMode, e, t)
              , e = r("allowed", this.modes, this.currentMode, e, t);
            return !n && e
        }
        ,
        function(e, t, n) {
            var r, o = e[t];
            if (o[n])
                return !0;
            for (r in o)
                if (Object.prototype.hasOwnProperty.call(o, r) && "*" === r.charAt(r.length - 1) && 0 === n.indexOf(r.substring(0, r.length - 1)))
                    return !0;
            return !1
        }
        );
        this.isKeyAllowed = function(e) {
            var t = i("forbidden", this.modes, this.currentMode, e)
              , e = i("allowed", this.modes, this.currentMode, e);
            return !t && e
        }
        ,
        this.setItem = function(e, t, n, r) {
            this.isKeyAllowed(e) ? o._storage.setItem(e, t, n, r) : r && r()
        }
        ,
        this.filterProps = function(e, t) {
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && !this.isPropAllowed(n, t || void 0) && delete e[n]
        }
        ,
        this.filterKeys = function() {
            for (var e in this._storageKeys)
                Object.prototype.hasOwnProperty.call(this._storageKeys, e) && !this.isKeyAllowed(e) && o._storage.deleteItem(e)
        }
        ,
        this.filterEvents = function(e) {
            for (var t = e.length - 1; 0 <= t; t--)
                this.isEventAllowed(e[t].name) || e.splice(t, 1)
        }
        ,
        this.getModeMetadata = function() {
            return this.modes[this.getMode()].properties.include
        }
        ,
        this.init()
    }
    function nr(i) {
        this.modeEnum = {
            OPTOUT: i.getConfiguration("isLegacyPrivacy") ? "optout" : "opt-out"
        },
        this.call = function(e) {
            for (var t = i.getConfiguration("isLegacyPrivacy") ? "privacy" : "consent", n = arguments.length, r = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++)
                r[o - 1] = arguments[o];
            return i[t][e].apply(i[t], r)
        }
    }
    function rr(o) {
        var i = o.getConfiguration("storageUser");
        this.setUser = function(e, t, n) {
            var r = {
                id: e,
                category: t
            };
            o.setProperties({
                user_id: e,
                user_category: t,
                user_recognition: !1
            }, {
                persistent: !0
            }),
            !1 !== n && ((e = new Date).setTime(e.getTime() + 24 * o.getConfiguration("storageLifetimeUser") * 60 * 60 * 1e3),
            o._privacy.call("setItem", i, r, e))
        }
        ,
        this.getUser = function(n) {
            o._storage.getItem(i, function(e) {
                var t = e;
                !e && o._properties.user_id && (t = {
                    id: o._properties.user_id.value,
                    category: o._properties.user_category.value
                }),
                n && n(t)
            })
        }
        ,
        this.deleteUser = function(e) {
            o.deleteProperty("user_id"),
            o.deleteProperty("user_category"),
            o.deleteProperty("user_recognition"),
            o._storage.deleteItem(i, function() {
                e && e()
            })
        }
    }
    function or(w) {
        function C() {
            this.debugError = {
                trigger: "AvInsights:Media:setContentValues:Error",
                level: "ERROR",
                messageObject: "Not an object"
            },
            this.processHeartbeatValue = function(e, t) {
                e = parseInt(e, 10);
                return e ? Math.max(e, t) : 0
            }
            ,
            this.value2Number = function(e) {
                var t = 0;
                return isNaN(Number(e)) || (t = Number(e)),
                Math.max(t, 0)
            }
        }
        var k = {
            minHeartbeat: w.getConfiguration("minHeartbeat"),
            minBufferingHeartbeat: w.getConfiguration("minBufferingHeartbeat")
        }
          , P = "_ATVALUE"
          , O = "_ATPREFIX";
        function A(e, t) {
            var n, e = e.length < 2 || ":" !== e[1] ? (n = "",
            e) : e.length < 4 || ":" !== e[3] ? (n = e.substring(0, 1),
            e.substring(2, e.length)) : (n = e.substring(0, 3),
            e.substring(4, e.length));
            return t && (n = n.toLowerCase(),
            e = e.toLowerCase()),
            {
                prefix: n,
                key: e
            }
        }
        function x(e) {
            return null !== e && "object" === c(e) && !(e instanceof Array)
        }
        function S(e, t, n, r, o) {
            var i, a, s, u = "", c = "", l = "", f = 0;
            for (s in e)
                if (Object.prototype.hasOwnProperty.call(e, s))
                    if (u = (i = A(s, o)).prefix || r || "",
                    c = (t ? t + "_" : "") + i.key,
                    x(e[s]))
                        S(e[s], c, n, u, o);
                    else {
                        for (a = c.split("_"),
                        l = "",
                        f = 0; f < a.length; f++)
                            u = (i = A(a[f], o)).prefix || u,
                            l += i.key + (f < a.length - 1 ? "_" : "");
                        n[c = l || c] = n[c] || {},
                        n[c][P] = e[s],
                        n[c][O] = u
                    }
        }
        w.avInsights = {},
        w.avInsights.Media = function(e, t, n) {
            function r(e) {
                e ? d.delayBufferingConfiguration = I(d.delayBufferingConfigurationBackup) : d.delayConfiguration = I(d.delayConfigurationBackup)
            }
            function o(e, t) {
                if (t) {
                    h(e);
                    var n, r = {};
                    for (n in x(t) ? r = t : isNaN(t) ? r = JSON.parse(t) : r[0] = t,
                    r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e ? d.delayBufferingConfiguration.push({
                            delay: f.processHeartbeatValue(n, 0),
                            number: 0,
                            timeout: -1,
                            refresh: f.processHeartbeatValue(r[n], k.minBufferingHeartbeat)
                        }) : d.delayConfiguration.push({
                            delay: f.processHeartbeatValue(n, 0),
                            number: 0,
                            timeout: -1,
                            refresh: f.processHeartbeatValue(r[n], k.minHeartbeat)
                        }));
                    m(e),
                    g(e)
                }
            }
            function i(e, t, n, r) {
                var o = I(v)
                  , t = (o.av_session_id = {},
                o.av_session_id[P] = d.sessionId,
                o.av_session_id[O] = "",
                t && (_(o),
                d.previousEvent = e),
                x(r) && S(r, null, o, null, !0),
                b(o));
                w.sendEvent(e, t, n)
            }
            function a() {
                var e = this
                  , t = 0
                  , n = 0;
                e.getEventDuration = function() {
                    var e = (new Date).getTime() - t - n;
                    return n += e,
                    e
                }
                ,
                e.initBaseTime = function() {
                    0 === t && (t = (new Date).getTime())
                }
                ,
                e.resetProperties = function() {
                    n = t = 0
                }
                ,
                e.initHeartbeatTimer = function(e, t) {
                    var n = t ? d.delayBufferingConfiguration : d.delayConfiguration;
                    0 < n.length && (y(t),
                    clearTimeout(n[0].timeout),
                    n[0].timeout = setTimeout(function() {
                        0 === n[0].number && n.splice(0, 1),
                        e && e()
                    }, 1e3 * n[0].refresh))
                }
                ,
                e.stopHeartbeatTimer = function(e) {
                    for (var t = e ? d.delayBufferingConfiguration : d.delayConfiguration, n = 0; n < t.length; n++)
                        clearTimeout(t[n].timeout),
                        t[n].timeout = -1
                }
            }
            function s(e, t, n, r, o) {
                p.initBaseTime(),
                d.eventDuration = p.getEventDuration(),
                d.previousCursorPosition = d.currentCursorPosition,
                d.currentCursorPosition = e ? d.previousCursorPosition + Math.floor(d.playbackSpeed * d.eventDuration) : n,
                t && p.initHeartbeatTimer(function() {
                    s(!0, !0)
                }, !1),
                i("av.heartbeat", !0, r, o)
            }
            function u(e, t, n) {
                p.initBaseTime(),
                d.eventDuration = p.getEventDuration(),
                e && p.initHeartbeatTimer(function() {
                    u(!0)
                }, !0),
                i("av.buffer.heartbeat", !0, t, n)
            }
            function c(e, t, n) {
                p.initBaseTime(),
                d.eventDuration = p.getEventDuration(),
                d.previousCursorPosition = d.currentCursorPosition,
                e && p.initHeartbeatTimer(function() {
                    c(!0)
                }, !0),
                i("av.rebuffer.heartbeat", !0, t, n)
            }
            var l = this
              , f = new C
              , d = null
              , p = null
              , v = null
              , g = function(e) {
                e ? d.delayBufferingConfigurationBackup = I(d.delayBufferingConfiguration) : d.delayConfigurationBackup = I(d.delayConfiguration)
            }
              , h = function(e) {
                e ? (d.delayBufferingConfiguration = [],
                d.delayBufferingConfigurationBackup = []) : (d.delayConfiguration = [],
                d.delayConfigurationBackup = [])
            }
              , m = function(e) {
                (e ? d.delayBufferingConfiguration : d.delayConfiguration).sort(function(e, t) {
                    return e.delay < t.delay ? -1 : e.delay > t.delay ? 1 : 0
                })
            }
              , y = function(e) {
                var t, e = e ? d.delayBufferingConfiguration : d.delayConfiguration;
                void 0 === (t = void 0 !== e[1] ? e[1].delay : t) ? e[0].number = 1 : 0 < e[0].number ? e[0].number-- : "number" == typeof t && (e[0].number = Math.floor(60 * (t - e[0].delay) / e[0].refresh) - 1)
            }
              , _ = function(e) {
                e.av_previous_position = {},
                e.av_previous_position[P] = d.previousCursorPosition,
                e.av_previous_position[O] = "",
                e.av_position = {},
                e.av_position[P] = d.currentCursorPosition,
                e.av_position[O] = "",
                e.av_duration = {},
                e.av_duration[P] = d.eventDuration,
                e.av_duration[O] = "",
                e.av_previous_event = {},
                e.av_previous_event[P] = d.previousEvent,
                e.av_previous_event[O] = ""
            }
              , b = function(e) {
                var t, n = {};
                for (t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (Object.prototype.hasOwnProperty.call(e[t], P) ? n[e[t][O] ? "".concat(e[t][O], ":").concat(t) : t] = e[t][P] : n[t] = e[t]);
                return n
            };
            l.set = function(e, t) {
                e = A(e, !0);
                v[e.key] = v[e.key] || {},
                v[e.key][P] = t,
                v[e.key][O] = e.prefix
            }
            ,
            l.get = function(e) {
                var t = null
                  , e = A(e, !0);
                return t = void 0 !== v[e.key] ? v[e.key][P] : t
            }
            ,
            l.del = function(e) {
                e = A(e, !0);
                void 0 !== v[e.key] && delete v[e.key]
            }
            ,
            l.setProps = function(e) {
                x(e) && S(e, null, v, null, !0)
            }
            ,
            l.getProps = function() {
                var e, t = null;
                for (e in v)
                    Object.prototype.hasOwnProperty.call(v, e) && ((t = t || {})[e] = v[e][P]);
                return t
            }
            ,
            l.delProps = function() {
                v = {}
            }
            ;
            l.setPlaybackSpeed = function(e) {
                e = f.value2Number(e) || d.playbackSpeed;
                e !== d.playbackSpeed && (p.stopHeartbeatTimer(!1),
                d.isPlaying && (s(!0, !1),
                p.initHeartbeatTimer(function() {
                    s(!0, !0)
                }, !1)),
                d.playbackSpeed = e)
            }
            ,
            l.getSessionID = function() {
                return d.sessionId
            }
            ,
            l.track = function(e, t, n, r) {
                var o = t || {};
                switch (e) {
                case "av.heartbeat":
                    l.heartbeat(o.av_position, n, r);
                    break;
                case "av.buffer.heartbeat":
                    l.bufferHeartbeat(n, r);
                    break;
                case "av.rebuffer.heartbeat":
                    l.rebufferHeartbeat(n, r);
                    break;
                case "av.play":
                    l.play(o.av_position, n, r);
                    break;
                case "av.buffer.start":
                    l.bufferStart(o.av_position, n, r);
                    break;
                case "av.start":
                    l.playbackStart(o.av_position, n, r);
                    break;
                case "av.resume":
                    l.playbackResumed(o.av_position, n, r);
                    break;
                case "av.pause":
                    l.playbackPaused(o.av_position, n, r);
                    break;
                case "av.stop":
                    l.playbackStopped(o.av_position, n, r);
                    break;
                case "av.backward":
                    l.seekBackward(o.av_previous_position, o.av_position, n, r);
                    break;
                case "av.forward":
                    l.seekForward(o.av_previous_position, o.av_position, n, r);
                    break;
                case "av.seek.start":
                    l.seekStart(o.av_previous_position, n, r);
                    break;
                case "av.error":
                    l.error(o.av_player_error, n, r);
                    break;
                default:
                    i(e, !1, n, r)
                }
            }
            ,
            l.heartbeat = function(e, t, n) {
                var r, o = !0;
                null != e && 0 <= e && (o = !1,
                r = f.value2Number(e)),
                s(o, !1, r, t, n)
            }
            ,
            l.bufferHeartbeat = function(e, t) {
                u(!1, e, t)
            }
            ,
            l.rebufferHeartbeat = function(e, t) {
                c(!1, e, t)
            }
            ,
            l.play = function(e, t, n) {
                p.initBaseTime();
                e = f.value2Number(e);
                d.eventDuration = 0,
                d.previousCursorPosition = e,
                d.currentCursorPosition = e,
                d.isPlaying = !1,
                d.isPlaybackActivated = !1,
                p.stopHeartbeatTimer(!1),
                p.stopHeartbeatTimer(!0),
                i("av.play", !0, t, n)
            }
            ,
            l.bufferStart = function(e, t, n) {
                p.initBaseTime();
                e = f.value2Number(e);
                d.eventDuration = p.getEventDuration(),
                d.previousCursorPosition = d.currentCursorPosition,
                d.currentCursorPosition = e,
                p.stopHeartbeatTimer(!1),
                p.stopHeartbeatTimer(!0),
                d.isPlaybackActivated ? (p.initHeartbeatTimer(function() {
                    c(!0)
                }, !0),
                i("av.rebuffer.start", !0, t, n)) : (p.initHeartbeatTimer(function() {
                    u(!0)
                }, !0),
                i("av.buffer.start", !0, t, n))
            }
            ,
            l.playbackStart = function(e, t, n) {
                p.initBaseTime();
                e = f.value2Number(e);
                d.eventDuration = p.getEventDuration(),
                d.previousCursorPosition = e,
                d.currentCursorPosition = e,
                d.isPlaying = !0,
                d.isPlaybackActivated = !0,
                p.stopHeartbeatTimer(!1),
                p.stopHeartbeatTimer(!0),
                p.initHeartbeatTimer(function() {
                    s(!0, !0)
                }, !1),
                i("av.start", !0, t, n)
            }
            ,
            l.playbackResumed = function(e, t, n) {
                p.initBaseTime();
                e = f.value2Number(e);
                d.eventDuration = p.getEventDuration(),
                d.previousCursorPosition = d.currentCursorPosition,
                d.currentCursorPosition = e,
                d.isPlaying = !0,
                d.isPlaybackActivated = !0,
                p.stopHeartbeatTimer(!1),
                p.stopHeartbeatTimer(!0),
                p.initHeartbeatTimer(function() {
                    s(!0, !0)
                }, !1),
                i("av.resume", !0, t, n)
            }
            ,
            l.playbackPaused = function(e, t, n) {
                p.initBaseTime();
                e = f.value2Number(e);
                d.eventDuration = p.getEventDuration(),
                d.previousCursorPosition = d.currentCursorPosition,
                d.currentCursorPosition = e,
                d.isPlaying = !1,
                d.isPlaybackActivated = !0,
                p.stopHeartbeatTimer(!1),
                p.stopHeartbeatTimer(!0),
                i("av.pause", !0, t, n)
            }
            ,
            l.playbackStopped = function(e, t, n) {
                p.initBaseTime();
                e = f.value2Number(e);
                d.eventDuration = p.getEventDuration(),
                d.previousCursorPosition = d.currentCursorPosition,
                d.currentCursorPosition = e,
                d.isPlaying = !1,
                d.isPlaybackActivated = !1,
                p.stopHeartbeatTimer(!1),
                p.stopHeartbeatTimer(!0),
                p.resetProperties(),
                r(!1),
                r(!0),
                i("av.stop", !0, t, n),
                d.previousCursorPosition = 0,
                d.currentCursorPosition = 0,
                d.eventDuration = 0,
                d.previousEvent = "",
                d.sessionId = K.v4()
            }
            ,
            l.seek = function(e, t, n, r) {
                e = f.value2Number(e),
                t = f.value2Number(t);
                t < e ? l.seekBackward(e, t, n, r) : l.seekForward(e, t, n, r)
            }
            ,
            l.seekBackward = function(e, t, n, r) {
                l.seekStart(e, null, r),
                d.eventDuration = 0,
                d.previousCursorPosition = f.value2Number(e),
                d.currentCursorPosition = f.value2Number(t),
                i("av.backward", !0, n, r)
            }
            ,
            l.seekForward = function(e, t, n, r) {
                l.seekStart(e, null, r),
                d.eventDuration = 0,
                d.previousCursorPosition = f.value2Number(e),
                d.currentCursorPosition = f.value2Number(t),
                i("av.forward", !0, n, r)
            }
            ,
            l.seekStart = function(e, t, n) {
                e = f.value2Number(e);
                d.previousCursorPosition = d.currentCursorPosition,
                d.currentCursorPosition = e,
                d.isPlaying ? d.eventDuration = p.getEventDuration() : d.eventDuration = 0,
                i("av.seek.start", !0, t, n)
            }
            ,
            l.adClick = function(e, t) {
                i("av.ad.click", !1, e, t)
            }
            ,
            l.adSkip = function(e, t) {
                i("av.ad.skip", !1, e, t)
            }
            ,
            l.error = function(e, t, n) {
                var r = {};
                (r = x(n) ? n : r).av_player_error = String(e),
                i("av.error", !1, t, r)
            }
            ,
            l.display = function(e, t) {
                i("av.display", !1, e, t)
            }
            ,
            l.close = function(e, t) {
                i("av.close", !1, e, t)
            }
            ,
            l.volume = function(e, t) {
                i("av.volume", !1, e, t)
            }
            ,
            l.subtitleOn = function(e, t) {
                i("av.subtitle.on", !1, e, t)
            }
            ,
            l.subtitleOff = function(e, t) {
                i("av.subtitle.off", !1, e, t)
            }
            ,
            l.fullscreenOn = function(e, t) {
                i("av.fullscreen.on", !1, e, t)
            }
            ,
            l.fullscreenOff = function(e, t) {
                i("av.fullscreen.off", !1, e, t)
            }
            ,
            l.quality = function(e, t) {
                i("av.quality", !1, e, t)
            }
            ,
            l.speed = function(e, t) {
                i("av.speed", !1, e, t)
            }
            ,
            l.share = function(e, t) {
                i("av.share", !1, e, t)
            }
            ,
            o(!(d = {
                previousCursorPosition: 0,
                currentCursorPosition: 0,
                eventDuration: 0,
                playbackSpeed: 1,
                previousEvent: "",
                isPlaybackActivated: !1,
                isPlaying: !1,
                sessionId: "",
                delayConfiguration: [],
                delayConfigurationBackup: [],
                delayBufferingConfiguration: [],
                delayBufferingConfigurationBackup: []
            }), e),
            o(!0, t),
            d.sessionId = n || K.v4(),
            p = new a,
            e = window,
            t = "unload",
            n = function() {
                p.stopHeartbeatTimer(!1),
                p.stopHeartbeatTimer(!0)
            }
            ,
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n),
            v = {}
        }
    }
    function j(e) {
        var t, n = this;
        for (t in n.cfg = new Y(I(e) || H),
        n.setConfiguration = n.cfg.setConfiguration,
        n.setConfigurations = n.cfg.setConfigurations,
        n.getConfiguration = n.cfg.getConfiguration,
        window._pac = window._pac || {
            privacy: []
        },
        window._pac)
            Object.prototype.hasOwnProperty.call(window._pac, t) && "privacy" !== t && n.setConfiguration(t, window._pac[t]);
        this._storage = new Kn(this),
        this._queue = new q(this),
        this._properties = {},
        this._sendEvent = ir;
        var r, e = this;
        e.setConfiguration("isLegacyPrivacy", !0),
        void 0 === window.pdl ? window.pdl = {
            migration: {
                browserId: {
                    source: "PA"
                }
            },
            cookies: {
                storageMode: "fixed"
            }
        } : window.pdl && window.pdl.requireConsent && e.setConfiguration("isLegacyPrivacy", !1),
        T.init({
            cookieDefault: {
                domain: e.getConfiguration("cookieDomain"),
                secure: e.getConfiguration("cookieSecure"),
                path: e.getConfiguration("cookiePath"),
                samesite: e.getConfiguration("cookieSameSite")
            },
            cookies: {
                _pcid: {
                    expires: e.getConfiguration("storageLifetimeVisitor")
                }
            }
        }),
        e.privacy = new tr(e),
        e.consent = new Zn(e),
        e._privacy = new nr(e),
        this.user = new rr(this),
        or(this),
        r = (e = this).getConfiguration("queueVarName"),
        window[r] = window[r] || [],
        er(e, window[r], !0, r)
    }
    function ir(e, t) {
        for (var n = [jn, Bn, Un, z, Dn, Ln, Nn, F, Tn, Hn], r = 0; r < e.length; r++) {
            var o = {
                name: "",
                data: {}
            };
            if ("string" == typeof e[r])
                o.name = e[r];
            else {
                if (void 0 !== e[r].data)
                    continue;
                o.name = e[r].name
            }
            e[r] = o
        }
        var i, t = {
            events: e,
            options: t
        };
        0 < n.length && "function" == typeof n[0] && (i = new Y(this.cfg.cloneData()),
        n[0](this, new J(this,t,i), n.slice(1)))
    }
    j.prototype.setProperty = function(e, t, n) {
        this._privacy.call("isPropAllowed", e) && (this._properties[e] = {
            value: t,
            options: n || {}
        })
    }
    ,
    j.prototype.setProperties = function(e, t) {
        for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && this.setProperty(n, e[n], t)
    }
    ,
    j.prototype.deleteProperty = function(e) {
        delete this._properties[e]
    }
    ,
    j.prototype.sendEvent = function(e, t, n) {
        this._queue.push(["_sendEvent", [{
            name: e,
            data: t
        }], n])
    }
    ,
    j.prototype.sendEvents = function(e, t) {
        this._queue.push(["_sendEvent", e, t])
    }
    ,
    j.prototype.getVisitorId = function(e) {
        var t, n = this.getConfiguration("visitorId") || null;
        if (n = n || T.get("browserId"),
        (t = e) && t(n),
        void 0 === e)
            return n
    }
    ,
    j.prototype.setVisitorId = function(e) {
        this.setConfiguration("visitorId", e);
        var t = new Date;
        t.setTime(t.getTime() + 24 * this.getConfiguration("storageLifetimeVisitor") * 60 * 60 * 1e3),
        this._privacy.call("setItem", this.getConfiguration("storageVisitor"), e, t, function() {
            T.updateMigration()
        })
    }
    ,
    j.prototype.setUser = function(e, t, n) {
        this.user.setUser(e, t, n)
    }
    ,
    j.prototype.getUser = function(e) {
        this.user.getUser(e)
    }
    ,
    j.prototype.deleteUser = function() {
        this.user.deleteUser()
    }
    ,
    (j.prototype.PA = j).prototype.refresh = function() {
        T.refresh()
    }
    ,
    j.prototype.setContentProperty = function(e, t) {
        var n = {};
        "content_publication_date" === e || "tags_array" === e ? n[{
            content_publication_date: "createdAt",
            tags_array: "tags"
        }[e]] = t : n[e] = t,
        T.set("content", n)
    }
    ,
    j.prototype.setContentProperties = function(e) {
        for (var t in e)
            Object.prototype.hasOwnProperty.call(e, t) && this.setContentProperty(t, e[t])
    }
    ;
    Mt = new j(H),
    window && !window.pa && (window.pa = Mt);
    Et = Mt;
    return L.pianoAnalytics = Et,
    Object.defineProperty(L, "__esModule", {
        value: !0
    }),
    L
}({});

/////////////  Site part


function getEpj() {
    var externalId = dmAPI.getSiteExternalId();
    if (externalId !== null) {
        var ids = externalId.split('|');
        return ids[1];
    }
    return '';
}

function getClickRdvId() {
    var externalId = dmAPI.getSiteExternalId();
    var name = dmAPI.getSiteName();
    if (externalId !== null) {
        var ids = externalId.split('|');
        var idClickRdv = ids[3];
        if (idClickRdv === 'V2') {
            return "Sites.pagesjaunes" + ";" + "SOWEB" + ";" + ids[0] + ";" + ids[1] + ";" + name + ";" + document.domain;
        }
        return idClickRdv;
    }
    return '';
}

function isParution() {
    if (document.domain.indexOf("my.eu.duda.co") >= 0 || document.domain.indexOf("solocaldudaadmin.eu-responsivesiteeditor.com") >= 0 || document.domain.indexOf("eu-multiscreensite") >= 0) {
        return false;
    }
    return true;
}

function getEpj() {
    var externalId = dmAPI.getSiteExternalId();
    if (externalId !== null) {
        var ids = externalId.split('|');
        return ids[1];
    }
    return '';
}

function getGamme() {
    var externalId = dmAPI.getSiteExternalId();
    if (externalId !== null) {
        var ids = externalId.split('|');
        return ids[0];
    }
    return '';
}

function getSiteName() {
    var name = dmAPI.getSiteName();
    return name;
}


function includeProperties(){
    pa.privacy.include.property('product_id');
    pa.privacy.include.property('Page_url');
    pa.privacy.include.property('cms')
    pa.privacy.include.property('epj');
    pa.privacy.include.property('nom_de_domaine');
    pa.privacy.include.property('site_level2');
    pa.privacy.include.property('previous_url');
    pa.privacy.include.property('src_campaign');
    pa.privacy.include.property('src_medium');
    pa.privacy.include.property('src_type');
    pa.privacy.include.property('src_campaign_group');
    
}

function setTags() {
    includeProperties();
    
	var epj = getEpj();
	var gamme = getGamme();
    var domain = document.domain;
	if(!domain.toLowerCase().startsWith("www.")){
		domain = "www." + domain;
	}
    var siteName = getSiteName();
    if (isParution() && epj != '') {
	
        var gamme = getGamme();
		var level = defineLevelFromGamme(gamme);

		if(level !== 'unknown'){
			if(level === 6){
				domain = domain.replace("www.", "https://");
			}
			
			pa.sendEvent('page.display', // Event name
			  {
				'product_id': siteName,
				'epj': epj,
				'nom_de_domaine': domain,
				'cms' : 'DUDA',
				'site_level2' : level,
				
			  }
			);
		}
		
	}
}

function defineLevelFromGamme(gamme) {
	var level = 'unknown';
	if(gamme !== ''){
		if (gamme.toLowerCase() === 'essentiel'|| gamme.toLowerCase() === 'essentiel-ecom' || gamme.toLowerCase() === 'siteconnect' || gamme.toLowerCase() === 'siteconnect-ecom') {
			level = 'Essentiel';
		}
		else if (gamme.toLowerCase() === 'premium'|| gamme.toLowerCase() === 'premium-ecom') {
			level = 'Premium';
		} else if(gamme.toLowerCase() == 'minisite'){
			level = 'Mini-sites';
		} else if(gamme.toLowerCase() == 'privilege' || gamme.toLowerCase() === 'privilege-ecom'){
			level = 'Privilège';
		} else if(gamme.toLowerCase() == 'initial' ){
			level = 'Initial';
		} else if(gamme.toLowerCase() == 'essentielplus'){
			level = 'Essentiel +';
		}
		else if(gamme.toLowerCase() == 'start'){
			level = 'Start';
		}
		else if(gamme.toLowerCase() == 'performance'){
			level = 'Performance';
		}
		
		if(gamme.toLowerCase() == 'lpboostercontact' ){
		    level = '';
			pa.setConfigurations({
				// Basic configuration to send events for lps booster
				site: 591430,
				collectDomain: 'https://at.pagesjaunes.fr'
			});
		} else if(gamme.toLowerCase() == 'lpsoms') {
			level = '';
			pa.setConfigurations({
				// Basic configuration to send events for lpsoms
				site: 644198,
				collectDomain: 'https://at.pagesjaunes.fr'
			});
		}else {
			pa.setConfigurations({
				// Basic configuration to send events for sites
				site: 594386,
				collectDomain: 'https://at.pagesjaunes.fr'
			});
		}
	}
	return level;
}

function getLinkType(href, email, phone) {
	if(href !== null && href !== undefined) {
		if (href.indexOf('tel:') === 0) {
			return 'CONTACTER_APPELER';
		} else if(href.indexOf('mailto:') === 0){
			return 'CONTACTER_EMAIL';
		} 
	} else if(email !== null && email !== undefined){
		return 'CONTACTER_EMAIL'
	} else if(phone !== null && phone !== undefined){
		return 'CONTACTER_APPELER'
	}
	return null;
}

function sendClickTag(linkType) {
	var epj = getEpj();
	var level = defineLevelFromGamme(getGamme());
	var siteName = getSiteName();
	if (isParution() && epj != '' && level !== 'unknown') {
	    pa.sendEvent('click.action', // Event name
    	  {
    	    click: window.location.pathname,
			product_id:siteName, 
			click_chapter1:siteName,
			click_chapter2:linkType,           
			site_level2: level,
			type: 'action',
			event: event
    	  }
    	);
	}
}

function setOptMode(mode){
    pa.consent.setMode(mode);	
}

function creerCookie(nom, valeur, jours) {
    // Le nombre de jours est spécifié
    if (jours) {
        var date = new Date();
        // Converti le nombre de jour en millisecondes
        date.setTime(date.getTime() + (jours * 24 * 60 * 60 * 1000));
        var expire = "; expire=" + date.toGMTString();
    } else var expire = "";
    document.cookie = nom + "=" + valeur + expire + "; path=/";
}


function getCookieValue(nomCookie) {
    deb = document.cookie.indexOf(nomCookie + "=")
    if (deb >= 0) {
        deb += nomCookie.length + 1
        fin = document.cookie.indexOf(";", deb)
        if (fin < 0) fin = document.cookie.length
        return unescape(document.cookie.substring(deb, fin))
    } else return ""
}

function lireCookie(nom) {
    // Ajoute le signe égale virgule au nom
    // pour la recherche
    var nom2 = nom + "=";
    // Array contenant tous les cookies
    var arrCookies = document.cookie.split(';');
    // Cherche l'array pour le cookie en question
    for (var i = 0; i < arrCookies.length; i++) {
        var a = arrCookies[i];
        // Si c'est un espace, enlever
        while (a.charAt(0) == ' ') {
            a = a.substring(1, a.length);
        }
        if (a.indexOf(nom2) == 0) {
            return a.substring(nom2.length, a.length);
        }
    }
    // Aucun cookie trouvé
    return null;
}

dmAPI.runOnReady('name', function() {
    $("#audianceCookieValidationOk").on("change", function() {
	    var audiance = $('input[name = audianceCookieValidation]:checked').val();
    	creerCookie('audianceCookies', audiance, 360);
        if(!this.checked){
            setOptMode('essential');
        } else{
            setOptMode('opt-out');
        }
        
	});
	
	setTags();
	
	$('a').click(function(e){
		var addressValueHref = $(this).attr("href");
		var email = $(this).attr("email");
		var phone = $(this).attr("phone");
		const linkType = getLinkType(addressValueHref, email, phone);
		if(linkType !== null) {
			sendClickTag(linkType);
		}
    });
	
	$('nav > ul').click(function(){
		 $(this).children().each(function  () {
			 var elm = $(this).hasClass('focus');
			 if(elm === true) {
				 $(this).children().each(function(){
					 if($(this).is('a')){
						var href = $(this).attr("href");
						const linkType = getLinkType(href, null, null);
						if(linkType !== null) {
							sendClickTag(linkType);
						}
					 }
				 });
			 }
		 });
	});
});

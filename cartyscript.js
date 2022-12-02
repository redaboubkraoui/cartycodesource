'use strict';
/** @type {function(!Object): ?} */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(type) {
  return typeof type;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
if (true) {
  !function(canCreateDiscussions) {
    /**
     * @param {!AudioNode} t
     * @param {!Function} e
     * @return {undefined}
     */
    function log(t, e) {
      if (!(t instanceof e)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {!Function} e
     * @param {string} date
     * @return {undefined}
     */
    function n(e, date) {
      /** @type {number} */
      var i = 0;
      for (; i < date.length; i++) {
        var descriptor = date[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(e, descriptor.key, descriptor);
      }
    }
    /**
     * @param {!Function} e
     * @param {!Function} t
     * @param {!Function} o
     * @return {?}
     */
    function t(e, t, o) {
      return t && n(e.prototype, t), o && n(e, o), Object.defineProperty(e, "prototype", {
        writable : false
      }), e;
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {string} value
     * @return {?}
     */
    function callback(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    /**
     * @param {!Function} t
     * @param {!Object} e
     * @return {undefined}
     */
    function forEach(t, e) {
      if ("function" != typeof e && null !== e) {
        throw new TypeError("Super expression must either be null or a function");
      }
      /** @type {!Object} */
      t.prototype = Object.create(e && e.prototype, {
        constructor : {
          value : t,
          writable : true,
          configurable : true
        }
      });
      Object.defineProperty(t, "prototype", {
        writable : false
      });
      if (e) {
        f(t, e);
      }
    }
    /**
     * @param {!Object} type
     * @return {?}
     */
    function parse(type) {
      return parse = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(node) {
        return node.__proto__ || Object.getPrototypeOf(node);
      }, parse(type);
    }
    /**
     * @param {!Array} t
     * @param {!Object} m
     * @return {?}
     */
    function f(t, m) {
      return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, a) {
        return m.__proto__ = a, m;
      }, f(t, m);
    }
    /**
     * @param {!Array} e
     * @param {?} value
     * @return {?}
     */
    function resolve(e, value) {
      if (value && ("object" == (typeof value === "undefined" ? "undefined" : _typeof(value)) || "function" == typeof value)) {
        return value;
      }
      if (void 0 !== value) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function(error) {
        if (void 0 === error) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return error;
      }(e);
    }
    /**
     * @param {string} code
     * @return {?}
     */
    function build(code) {
      var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if ("function" == typeof Proxy) {
          return true;
        }
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e) {
          return false;
        }
      }();
      return function() {
        var ret;
        var fn = parse(code);
        if (t) {
          var ctor = parse(this).constructor;
          ret = Reflect.construct(fn, arguments, ctor);
        } else {
          ret = fn.apply(this, arguments);
        }
        return resolve(this, ret);
      };
    }
    var v3 = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isInsideThemeEditor",
        value : function disable() {
          return window.Shopify && window.Shopify.designMode;
        }
      }, {
        key : "getShop",
        value : function getMessageTs() {
          if (e._isShopGlobalAvailable()) {
            return e._shopGlobal();
          }
          if (e._isDocumentDomainAvailable()) {
            return e._documentDomain();
          }
          if (e._isDocumentLocationAvailable()) {
            return e._documentLocation();
          }
          throw new Error("Shop domain matching *.myshopify.com not found");
        }
      }, {
        key : "getPresentmentCurrency",
        value : function parseXml() {
          return window.Shopify && window.Shopify.currency && window.Shopify.currency.active ? window.Shopify.currency.active : "";
        }
      }, {
        key : "getRoute",
        value : function catchEvents() {
          return window.Shopify && window.Shopify.routes && window.Shopify.routes.root ? window.Shopify.routes.root : "";
        }
      }, {
        key : "_isShopGlobalAvailable",
        value : function almost_equals() {
          return true;
        }
      }, {
        key : "_isDocumentDomainAvailable",
        value : function leadingImageNode() {
          return false;
        }
      }, {
        key : "_isDocumentLocationAvailable",
        value : function leadingImageNode() {
          return false;
        }
      }, {
        key : "_shopGlobal",
        value : function value() {
          return "mysilicondreams.myshopify.com";
        }
      }, {
        key : "_documentDomain",
        value : function getDomain() {
          return document.domain;
        }
      }, {
        key : "_documentLocation",
        value : function currURL() {
          return document.location.href;
        }
      }]), e;
    }();
    var util = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isEmpty",
        value : function guard(value) {
          return !e.isNotEmpty(value);
        }
      }, {
        key : "isNotEmpty",
        value : function decamelize$1(str) {
          return str && str.length > 0;
        }
      }, {
        key : "arrayFrom",
        value : function value(key) {
          return Array.prototype.slice.call(key);
        }
      }, {
        key : "find",
        value : function value(key, name) {
          var allElementsWithName = key.filter(name);
          return allElementsWithName.length > 0 ? allElementsWithName[0] : null;
        }
      }, {
        key : "distinct",
        value : function getAffectsFilters(value) {
          return value.filter(function(sceneUid, canCreateDiscussions, scenes) {
            return scenes.indexOf(sceneUid) === canCreateDiscussions;
          });
        }
      }, {
        key : "arrayEquals",
        value : function key(value, name) {
          return Array.isArray(value) && Array.isArray(name) && value.length === name.length && value.every(function(o, key) {
            return o == name[key];
          });
        }
      }, {
        key : "removeDuplicates",
        value : function getAffectsFilters(value) {
          return value.filter(function(i, match) {
            return value.indexOf(i) === match;
          });
        }
      }, {
        key : "cleanEmptyElements",
        value : function keyDown$(key) {
          return key.filter(function(canCreateDiscussions) {
            return null != canCreateDiscussions;
          });
        }
      }]), e;
    }();
    var assert = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isNotEmpty",
        value : function getNonNullString(value) {
          return !e.isEmpty(value);
        }
      }, {
        key : "isEmpty",
        value : function extractObjectOrArray(value) {
          return null == value || "null" === value || 0 === e._removeWhiteSpaces(value).length;
        }
      }, {
        key : "endsWith",
        value : function key(value, type) {
          return !e.isEmpty(value) && !e.isEmpty(type) && -1 !== value.indexOf(type, value.length - type.length);
        }
      }, {
        key : "_removeWhiteSpaces",
        value : function friendlyTypeName(value) {
          return null == value ? value : value.replace(/&nbsp;/g, " ").trim();
        }
      }]), e;
    }();
    callback(assert, "replaceLast", function(s, t, format) {
      if (assert.isEmpty(s) || assert.isEmpty(t)) {
        return s;
      }
      var p = s.lastIndexOf(t);
      return -1 !== p ? s.substring(0, p) + format : s;
    });
    var root;
    var factory;
    var ngTranslationProvider = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "getInternationalContext",
        value : function isExecutable(value) {
          return assert.isNotEmpty(value) ? e._removeTrailingSlash(value) : "";
        }
      }, {
        key : "_removeTrailingSlash",
        value : function _extractInput(str) {
          return assert.replaceLast(str, "/", "");
        }
      }]), e;
    }();
    var that = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "removeLocalizedContext",
        value : function guard(value, name) {
          var field = ngTranslationProvider.getInternationalContext(name);
          return assert.isNotEmpty(field) ? value.replace(field, "") : value;
        }
      }]), e;
    }();
    var m = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isDemoPage",
        value : function is_http_iri(value) {
          var t = that.removeLocalizedContext(value, "/");
          return null !== t.match(/^\/.*\/test.html/) || null !== t.match(/^\/.*\/demo\//);
        }
      }, {
        key : "isCollectionPage",
        value : function validatorsFor(value, name) {
          var n = that.removeLocalizedContext(value, name);
          return null !== n.match(/^\/collections(\/)?.*/) && null === n.match(/^\/.*\/products\/.*/);
        }
      }, {
        key : "isHomePage",
        value : function is_http_iri(value, type) {
          var n = that.removeLocalizedContext(value, type);
          return n.length <= 1 || null !== n.match(/^\/index/) || null !== n.match(/^\/pages\/home/);
        }
      }, {
        key : "isSearchResultsPage",
        value : function validatorsFor(value, name) {
          var n = that.removeLocalizedContext(value, name);
          return null !== n.match(/\/search\/?$/) || null !== n.match(/\/search-results-page\/?$/);
        }
      }, {
        key : "isProductPage",
        value : function validatorsFor(value, name) {
          var n = that.removeLocalizedContext(value, name);
          return null !== n.match(/^\/products\/.*/) || null !== n.match(/^\/.*\/products\/.*/) || null !== n.match(/^\/products_preview.*/);
        }
      }, {
        key : "isCartPage",
        value : function validatorsFor(value, name) {
          return null !== that.removeLocalizedContext(value, name).match(/^\/cart/);
        }
      }]), e;
    }();
    var node = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "hasParameterInUrl",
        value : function getElementIdFromLocation(value) {
          /** @type {string} */
          var name = document.location.href;
          return e.hasParameter(name, value);
        }
      }, {
        key : "getParameterInUrl",
        value : function getElementIdFromLocation(value) {
          /** @type {string} */
          var n = document.location.href;
          return e.getParameter(n, value);
        }
      }, {
        key : "hasParameter",
        value : function _checkDataType(value, type) {
          return (new RegExp("[?|&]" + type + "=([^&]*)")).test(value);
        }
      }, {
        key : "getParameter",
        value : function countGroupsInRegExp(value, name) {
          return e.hasParameter(value, name) ? (new RegExp("[?|&]" + name + "=([^&]*)")).exec(value)[1] : "";
        }
      }, {
        key : "removeParameters",
        value : function getStyledSegments(str) {
          return str.split("?")[0];
        }
      }, {
        key : "_shopifyServletPath",
        value : function arxivPostTranslator() {
          return null == window.__st || null == window.__st.pageurl ? location.pathname : e.servletPath(window.__st.pageurl);
        }
      }, {
        key : "servletPath",
        value : function value(str) {
          if (assert.isEmpty(str)) {
            return "";
          }
          var t = str.indexOf("/");
          if (-1 == t) {
            return "/";
          }
          var firstcomment = str.indexOf("?");
          return -1 == firstcomment && (firstcomment = str.length), str.substring(t, firstcomment);
        }
      }, {
        key : "isDemoPage",
        value : function repsonseJsonApi() {
          /** @type {string} */
          var u = location.pathname;
          return m.isDemoPage(u);
        }
      }, {
        key : "isHomePage",
        value : function fixie() {
          var _messageNode = e._shopifyServletPath();
          var _actualImmediatelyAfterFloInvokation = v3.getRoute();
          return m.isHomePage(_messageNode, _actualImmediatelyAfterFloInvokation);
        }
      }, {
        key : "isProductPage",
        value : function fixie() {
          var _messageNode = e._shopifyServletPath();
          var _actualImmediatelyAfterFloInvokation = v3.getRoute();
          return m.isProductPage(_messageNode, _actualImmediatelyAfterFloInvokation);
        }
      }, {
        key : "isCartPage",
        value : function fixie() {
          var _messageNode = e._shopifyServletPath();
          var _actualImmediatelyAfterFloInvokation = v3.getRoute();
          return m.isCartPage(_messageNode, _actualImmediatelyAfterFloInvokation);
        }
      }, {
        key : "isCollectionPage",
        value : function fixie() {
          var _messageNode = e._shopifyServletPath();
          var _actualImmediatelyAfterFloInvokation = v3.getRoute();
          return m.isCollectionPage(_messageNode, _actualImmediatelyAfterFloInvokation);
        }
      }, {
        key : "isSearchResultsPage",
        value : function fixie() {
          var _messageNode = e._shopifyServletPath();
          var _actualImmediatelyAfterFloInvokation = v3.getRoute();
          return m.isSearchResultsPage(_messageNode, _actualImmediatelyAfterFloInvokation);
        }
      }, {
        key : "getInternationalContext",
        value : function fixie() {
          var values = v3.getRoute();
          return ngTranslationProvider.getInternationalContext(values);
        }
      }, {
        key : "getCartPage",
        value : function visibleGame() {
          return e.getInternationalContext() + "/cart";
        }
      }, {
        key : "getCheckoutPage",
        value : function checkout() {
          return e.getInternationalContext() + "/checkout";
        }
      }, {
        key : "getProductPage",
        value : function comment(value) {
          return e.getInternationalContext() + "/products/" + value;
        }
      }]), e;
    }();
    var gl = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "getTimestamp",
        value : function Controller() {
          /** @type {string} */
          var ext = "1666071873";
          return ext ? gl.getParameter(ext.src, "timestamp") : null;
        }
      }, {
        key : "hasNgrokScriptTag",
        value : function getInstallationPath() {
          return (document.currentScript && document.currentScript.src ? document.currentScript.src : "").includes(options.ngrokUrl());
        }
      }, {
        key : "hasDevScriptTag",
        value : function getInstallationPath() {
          return (document.currentScript && document.currentScript.src ? document.currentScript.src : "").includes(options.devUrl());
        }
      }, {
        key : "isMainLoaded",
        value : function get() {
          var e = util.arrayFrom(document.getElementsByTagName("script"));
          var newDatumFieldLabel = (options.cdnUrl() + "/js/core/main.min.js").replace("https:", "").replace("http:", "");
          return null != util.find(e, function(data) {
            return data && data.src && -1 !== data.src.indexOf(newDatumFieldLabel);
          });
        }
      }, {
        key : "_getShopifyAppScriptTag",
        value : function get() {
          var e = util.arrayFrom(document.getElementsByTagName("script"));
          var newDatumFieldLabel = options.cdnUrl().replace("https:", "").replace("http:", "");
          return util.find(e, function(data) {
            return data && data.src && -1 !== data.src.indexOf(newDatumFieldLabel);
          });
        }
      }]), e;
    }();
    var options = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "cdnUrl",
        value : function value() {
          return e._isLocalhost() ? e.LOCAL_URL : e.isNgrok() ? e.NGROK_CDN_URL : e._isDev() ? e.DEV_CDN_URL : e.PRODUCTION_CDN_URL;
        }
      }, {
        key : "ngrokUrl",
        value : function value() {
          return e.NGROK_CDN_URL;
        }
      }, {
        key : "devUrl",
        value : function value() {
          return e.DEV_CDN_URL;
        }
      }, {
        key : "appId",
        value : function value() {
          return e.APP_ID;
        }
      }, {
        key : "cssClassPrefix",
        value : function value() {
          return e.APP_CSS_CLASS_PREFIX;
        }
      }, {
        key : "isNgrok",
        value : function value() {
          return gl.hasNgrokScriptTag();
        }
      }, {
        key : "_isLocalhost",
        value : function maybeUpdateHash_() {
          /** @type {string} */
          var frag = location.href;
          return null !== frag.match(/\/\/localhost/) || null !== frag.match(/\/\/bs-local.com/) || null !== frag.match(/\/\/192.168.*/);
        }
      }, {
        key : "_isDev",
        value : function value() {
          return gl.hasDevScriptTag();
        }
      }]), e;
    }();
    callback(options, "PRODUCTION_CDN_URL", "https://collections-add-to-cart.incubate.dev");
    callback(options, "NGROK_CDN_URL", "https://****-**-*-***-***.eu.ngrok.io/collections-add-to-cart");
    callback(options, "DEV_CDN_URL", "https://dev-collections-add-to-cart.incubate.dev");
    callback(options, "LOCAL_URL", "http://localhost:8080/collections-add-to-cart");
    callback(options, "APP_ID", "collections-add-to-cart");
    callback(options, "APP_CSS_CLASS_PREFIX", "cleverapps-collections-add-to-cart-");
    callback(options, "AVOID_WIDGET_TAG", "avoid-cleverapps-add-to-cart-button");
    callback(options, "FORCE_WIDGET_TAG", "show-cleverapps-add-to-cart-button");
    callback(options, "DIFFERENT_BUTTON_TEXT_TAG", "cleverapps-add-to-cart-button-text:");
    callback(options, "BUTTON_REDIRECT_TO_PRODUCT_PAGE_TAG", "cleverapps-add-to-cart-button-redirect-to-product-page");
    callback(options, "BUTTON_REMAIN_ON_PAGE_TAG", "cleverapps-add-to-cart-button-remain-on-page");
    callback(options, "BUTTON_REDIRECT_TO_CHECKOUT_TAG", "cleverapps-add-to-cart-button-redirect-to-checkout");
    callback(options, "BUTTON_REDIRECT_TO_CART_TAG", "cleverapps-add-to-cart-button-redirect-to-cart");
    callback(options, "PROCESSED_BY_INCUBATE_CLASS", "processed-by-incubate");
    callback(options, "PROCESSED_BY_INCUBATE_SELECTOR", "." + options.PROCESSED_BY_INCUBATE_CLASS);
    /** @type {(Window|undefined)} */
    root = "undefined" != typeof window ? window : void 0;
    /**
     * @param {!Object} window
     * @param {?} screen
     * @return {?}
     */
    factory = function init(window, screen) {
      /**
       * @param {string} name
       * @param {!Object} obj
       * @param {!Object} doc
       * @return {undefined}
       */
      function test(name, obj, doc) {
        var key;
        var scriptsrc;
        var script = (doc = doc || document).createElement("script");
        if (script.text = name, obj) {
          for (key in obj) {
            if (scriptsrc = obj[key] || obj.getAttribute && obj.getAttribute(key)) {
              script.setAttribute(key, scriptsrc);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      /**
       * @param {!Object} value
       * @return {?}
       */
      function type(value) {
        return null == value ? value + "" : "object" == (typeof value === "undefined" ? "undefined" : _typeof(value)) || "function" == typeof value ? class2type[toString.call(value)] || "object" : typeof value === "undefined" ? "undefined" : _typeof(value);
      }
      /**
       * @param {!Object} obj
       * @return {?}
       */
      function isArray(obj) {
        var length = !!obj && "length" in obj && obj.length;
        var ltype = type(obj);
        return !isFunction(obj) && !each(obj) && ("array" === ltype || 0 === length || "number" == typeof length && 0 < length && length - 1 in obj);
      }
      /**
       * @param {!Object} value
       * @param {string} name
       * @return {?}
       */
      function $(value, name) {
        return value.nodeName && value.nodeName.toLowerCase() === name.toLowerCase();
      }
      /**
       * @param {!Array} options
       * @param {?} value
       * @param {boolean} not
       * @return {?}
       */
      function filter(options, value, not) {
        return isFunction(value) ? jQuery.grep(options, function(context, i) {
          return !!value.call(context, i, context) !== not;
        }) : value.nodeType ? jQuery.grep(options, function(elem) {
          return elem === value !== not;
        }) : "string" != typeof value ? jQuery.grep(options, function(name) {
          return -1 < indexOf.call(value, name) !== not;
        }) : jQuery.filter(value, options, not);
      }
      /**
       * @param {(Array|Element)} cur
       * @param {number} dir
       * @return {?}
       */
      function sibling(cur, dir) {
        for (; (cur = cur[dir]) && 1 !== cur.nodeType;) {
        }
        return cur;
      }
      /**
       * @param {?} options
       * @return {?}
       */
      function options(options) {
        return options;
      }
      /**
       * @param {?} state
       * @return {?}
       */
      function undefined(state) {
        throw state;
      }
      /**
       * @param {!Object} obj
       * @param {!Function} test
       * @param {!Function} state
       * @param {boolean} r
       * @return {undefined}
       */
      function resolve(obj, test, state, r) {
        var fn;
        try {
          if (obj && isFunction(fn = obj.promise)) {
            fn.call(obj).done(test).fail(state);
          } else {
            if (obj && isFunction(fn = obj.then)) {
              fn.call(obj, test, state);
            } else {
              test.apply(void 0, [obj].slice(r));
            }
          }
        } catch (todo) {
          state.apply(void 0, [todo]);
        }
      }
      /**
       * @return {undefined}
       */
      function $__jsx_onload() {
        document.removeEventListener("DOMContentLoaded", $__jsx_onload);
        window.removeEventListener("load", $__jsx_onload);
        jQuery.ready();
      }
      /**
       * @param {?} _
       * @param {string} t
       * @return {?}
       */
      function idUrl(_, t) {
        return t.toUpperCase();
      }
      /**
       * @param {!Object} str
       * @return {?}
       */
      function camelCase(str) {
        return str.replace(_kerningNamesHash_escapeEscape, "ms-").replace(rcharset, idUrl);
      }
      /**
       * @return {undefined}
       */
      function Data() {
        this.expando = jQuery.expando + Data.uid++;
      }
      /**
       * @param {!Object} elem
       * @param {!Object} name
       * @param {?} content
       * @return {?}
       */
      function set(elem, name, content) {
        var key;
        var value;
        if (void 0 === content && 1 === elem.nodeType) {
          if (key = "data-" + name.replace(dashExpr, "-$&").toLowerCase(), "string" == typeof(content = elem.getAttribute(key))) {
            try {
              /** @type {*} */
              content = "true" === (value = content) || "false" !== value && ("null" === value ? null : value === +value + "" ? +value : trueRE.test(value) ? JSON.parse(value) : value);
            } catch (e) {
            }
            self.set(elem, name, content);
          } else {
            content = void 0;
          }
        }
        return content;
      }
      /**
       * @param {!Object} elem
       * @param {string} prop
       * @param {!Object} valueParts
       * @param {!Object} tween
       * @return {?}
       */
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted;
        var scale;
        /** @type {number} */
        var o = 20;
        /** @type {function(): ?} */
        var currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        };
        var initial = currentValue();
        var unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px");
        var initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || "px" !== unit && +initial) && regex.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          /** @type {number} */
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          /** @type {number} */
          initialInUnit = +initial || 1;
          for (; o--;) {
            jQuery.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) {
              /** @type {number} */
              o = 0;
            }
            /** @type {number} */
            initialInUnit = initialInUnit / scale;
          }
          /** @type {number} */
          initialInUnit = initialInUnit * 2;
          jQuery.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted;
      }
      /**
       * @param {!Array} elements
       * @param {boolean} input
       * @return {?}
       */
      function show(elements, input) {
        var y;
        var elem;
        var element;
        var temp;
        var document;
        var tagName;
        var display;
        /** @type {!Array} */
        var values = [];
        /** @type {number} */
        var i = 0;
        var eL = elements.length;
        for (; i < eL; i++) {
          if ((elem = elements[i]).style) {
            y = elem.style.display;
            if (input) {
              if ("none" === y) {
                values[i] = dataPriv.get(elem, "display") || null;
                if (!values[i]) {
                  /** @type {string} */
                  elem.style.display = "";
                }
              }
              if ("" === elem.style.display && isHidden(elem)) {
                values[i] = (display = document = temp = void 0, document = (element = elem).ownerDocument, tagName = element.nodeName, (display = elemdisplay[tagName]) || (temp = document.body.appendChild(document.createElement(tagName)), display = jQuery.css(temp, "display"), temp.parentNode.removeChild(temp), "none" === display && (display = "block"), elemdisplay[tagName] = display));
              }
            } else {
              if ("none" !== y) {
                /** @type {string} */
                values[i] = "none";
                dataPriv.set(elem, "display", y);
              }
            }
          }
        }
        /** @type {number} */
        i = 0;
        for (; i < eL; i++) {
          if (null != values[i]) {
            elements[i].style.display = values[i];
          }
        }
        return elements;
      }
      /**
       * @param {!Object} context
       * @param {?} tag
       * @return {?}
       */
      function getAll(context, tag) {
        var n;
        return n = void 0 !== context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : void 0 !== context.querySelectorAll ? context.querySelectorAll(tag || "*") : [], void 0 === tag || tag && $(context, tag) ? jQuery.merge([context], n) : n;
      }
      /**
       * @param {number} elems
       * @param {!NodeList} refElements
       * @return {undefined}
       */
      function setGlobalEval(elems, refElements) {
        /** @type {number} */
        var i = 0;
        var length = elems.length;
        for (; i < length; i++) {
          dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
        }
      }
      /**
       * @param {!Array} elements
       * @param {!Object} context
       * @param {!Array} node
       * @param {!Object} result
       * @param {string} ignored
       * @return {?}
       */
      function buildFragment(elements, context, node, result, ignored) {
        var elem;
        var tmp;
        var tag;
        var ops;
        var idx;
        var op;
        var fragment = context.createDocumentFragment();
        /** @type {!Array} */
        var results = [];
        /** @type {number} */
        var i = 0;
        var eL = elements.length;
        for (; i < eL; i++) {
          if ((elem = elements[i]) || 0 === elem) {
            if ("object" === type(elem)) {
              jQuery.merge(results, elem.nodeType ? [elem] : elem);
            } else {
              if (re_commas.test(elem)) {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (regPseudo.exec(elem) || ["", ""])[1].toLowerCase();
                ops = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = ops[1] + jQuery.htmlPrefilter(elem) + ops[2];
                op = ops[0];
                for (; op--;) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(results, tmp.childNodes);
                /** @type {string} */
                (tmp = fragment.firstChild).textContent = "";
              } else {
                results.push(context.createTextNode(elem));
              }
            }
          }
        }
        /** @type {string} */
        fragment.textContent = "";
        /** @type {number} */
        i = 0;
        for (; elem = results[i++];) {
          if (result && -1 < jQuery.inArray(elem, result)) {
            if (ignored) {
              ignored.push(elem);
            }
          } else {
            if (idx = contains(elem), tmp = getAll(fragment.appendChild(elem), "script"), idx && setGlobalEval(tmp), node) {
              /** @type {number} */
              op = 0;
              for (; elem = tmp[op++];) {
                if (opacityRe.test(elem.type || "")) {
                  node.push(elem);
                }
              }
            }
          }
        }
        return fragment;
      }
      /**
       * @return {?}
       */
      function returnTrue() {
        return true;
      }
      /**
       * @return {?}
       */
      function returnFalse() {
        return false;
      }
      /**
       * @param {?} onMove
       * @param {string} first
       * @return {?}
       */
      function constructor(onMove, first) {
        return onMove === function() {
          try {
            return document.activeElement;
          } catch (e) {
          }
        }() == ("focus" === first);
      }
      /**
       * @param {!Object} info
       * @param {!Object} data
       * @param {!Object} value
       * @param {!Object} key
       * @param {!Object} val
       * @param {number} m
       * @return {?}
       */
      function debug(info, data, value, key, val, m) {
        var fn;
        var i;
        if ("object" == (typeof data === "undefined" ? "undefined" : _typeof(data))) {
          for (i in "string" != typeof value && (key = key || value, value = void 0), data) {
            debug(info, i, value, key, data[i], m);
          }
          return info;
        }
        if (null == key && null == val ? (val = value, key = value = void 0) : null == val && ("string" == typeof value ? (val = key, key = void 0) : (val = key, key = value, value = void 0)), false === val) {
          /** @type {function(): ?} */
          val = returnFalse;
        } else {
          if (!val) {
            return info;
          }
        }
        return 1 === m && (fn = val, (val = function f(name) {
          return jQuery().off(name), fn.apply(this, arguments);
        }).guid = fn.guid || (fn.guid = jQuery.guid++)), info.each(function() {
          jQuery.event.add(this, data, val, key, value);
        });
      }
      /**
       * @param {undefined} elem
       * @param {string} type
       * @param {!Function} fn
       * @return {undefined}
       */
      function addEventListener(elem, type, fn) {
        if (fn) {
          dataPriv.set(elem, type, false);
          jQuery.event.add(elem, type, {
            namespace : false,
            handler : function handler(event) {
              var promise;
              var attr;
              var data = dataPriv.get(this, type);
              if (1 & event.isTrigger && this[type]) {
                if (data.length) {
                  if ((jQuery.event.special[type] || {}).delegateType) {
                    event.stopPropagation();
                  }
                } else {
                  if (data = slice.call(arguments), dataPriv.set(this, type, data), promise = fn(this, type), this[type](), data !== (attr = dataPriv.get(this, type)) || promise ? dataPriv.set(this, type, false) : attr = {}, data !== attr) {
                    return event.stopImmediatePropagation(), event.preventDefault(), attr.value;
                  }
                }
              } else {
                if (data.length) {
                  dataPriv.set(this, type, {
                    value : jQuery.event.trigger(jQuery.extend(data[0], jQuery.Event.prototype), data.slice(1), this)
                  });
                  event.stopImmediatePropagation();
                }
              }
            }
          });
        } else {
          if (void 0 === dataPriv.get(elem, type)) {
            jQuery.event.add(elem, type, returnTrue);
          }
        }
      }
      /**
       * @param {undefined} elem
       * @param {!Object} selector
       * @return {?}
       */
      function add(elem, selector) {
        return $(elem, "table") && $(11 !== selector.nodeType ? selector : selector.firstChild, "tr") && jQuery(elem).children("tbody")[0] || elem;
      }
      /**
       * @param {!Element} elem
       * @return {?}
       */
      function next(elem) {
        return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
      }
      /**
       * @param {!Object} left
       * @return {?}
       */
      function p(left) {
        return "true/" === (left.type || "").slice(0, 5) ? left.type = left.type.slice(5) : left.removeAttribute("type"), left;
      }
      /**
       * @param {string} node
       * @param {!Object} elem
       * @return {undefined}
       */
      function init(node, elem) {
        var i;
        var tableslen;
        var type;
        var p;
        var token;
        var events;
        if (1 === elem.nodeType) {
          if (dataPriv.hasData(node) && (events = dataPriv.get(node).events)) {
            for (type in dataPriv.remove(elem, "handle events"), events) {
              /** @type {number} */
              i = 0;
              tableslen = events[type].length;
              for (; i < tableslen; i++) {
                jQuery.event.add(elem, type, events[type][i]);
              }
            }
          }
          if (self.hasData(node)) {
            p = self.access(node);
            token = jQuery.extend({}, p);
            self.set(elem, token);
          }
        }
      }
      /**
       * @param {!Object} collection
       * @param {!Array} args
       * @param {!Function} callback
       * @param {string} ignored
       * @return {?}
       */
      function domManip(collection, args, callback, ignored) {
        args = clone(args);
        var fragment;
        var first;
        var element;
        var itl;
        var node;
        var e;
        /** @type {number} */
        var key = 0;
        var result = collection.length;
        /** @type {number} */
        var index = result - 1;
        var n = args[0];
        var func = isFunction(n);
        if (func || 1 < result && "string" == typeof n && !support.checkClone && reValidName.test(n)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (func) {
              args[0] = n.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (result && (first = (fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored)).firstChild, 1 === fragment.childNodes.length && (fragment = first), first || ignored)) {
          itl = (element = jQuery.map(getAll(fragment, "script"), next)).length;
          for (; key < result; key++) {
            node = fragment;
            if (key !== index) {
              node = jQuery.clone(node, true, true);
              if (itl) {
                jQuery.merge(element, getAll(node, "script"));
              }
            }
            callback.call(collection[key], node, key);
          }
          if (itl) {
            e = element[element.length - 1].ownerDocument;
            jQuery.map(element, p);
            /** @type {number} */
            key = 0;
            for (; key < itl; key++) {
              node = element[key];
              if (opacityRe.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(e, node)) {
                if (node.src && "module" !== (node.type || "").toLowerCase()) {
                  if (jQuery._evalUrl && !node.noModule) {
                    jQuery._evalUrl(node.src, {
                      nonce : node.nonce || node.getAttribute("nonce")
                    }, e);
                  }
                } else {
                  test(node.textContent.replace(codePoint, ""), node, e);
                }
              }
            }
          }
        }
        return collection;
      }
      /**
       * @param {?} val
       * @param {?} fn
       * @param {string} table
       * @return {?}
       */
      function remove(val, fn, table) {
        var elem;
        var value = fn ? jQuery.filter(fn, val) : val;
        /** @type {number} */
        var name = 0;
        for (; null != (elem = value[name]); name++) {
          if (!(table || 1 !== elem.nodeType)) {
            jQuery.cleanData(getAll(elem));
          }
          if (elem.parentNode) {
            if (table && contains(elem)) {
              setGlobalEval(getAll(elem, "script"));
            }
            elem.parentNode.removeChild(elem);
          }
        }
        return val;
      }
      /**
       * @param {!Object} elem
       * @param {string} name
       * @param {!Object} computed
       * @return {?}
       */
      function curCSS(elem, name, computed) {
        var minWidth;
        var width;
        var maxWidth;
        var ret;
        var style = elem.style;
        return (computed = computed || getStyles(elem)) && ("" !== (ret = computed.getPropertyValue(name) || computed[name]) || contains(elem) || (ret = jQuery.style(elem, name)), !support.pixelBoxStyles() && rnumnonpx.test(ret) && inlineAttributeIgnoreCommentRegex.test(name) && (minWidth = style.width, width = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = minWidth, style.minWidth = width, style.maxWidth = maxWidth)), 
        void 0 !== ret ? ret + "" : ret;
      }
      /**
       * @param {?} conditionFn
       * @param {!Function} hookFn
       * @return {?}
       */
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get : function get() {
            if (!conditionFn()) {
              return (this.get = hookFn).apply(this, arguments);
            }
            delete this.get;
          }
        };
      }
      /**
       * @param {string} name
       * @return {?}
       */
      function camelize(name) {
        return jQuery.cssProps[name] || aSupports[name] || (name in testStyle ? name : aSupports[name] = function(p) {
          var prop = p[0].toUpperCase() + p.slice(1);
          /** @type {number} */
          var i = prefixes.length;
          for (; i--;) {
            if ((p = prefixes[i] + prop) in testStyle) {
              return p;
            }
          }
        }(name) || name);
      }
      /**
       * @param {!Object} context
       * @param {!Object} value
       * @param {string} str
       * @return {?}
       */
      function done(context, value, str) {
        /** @type {(Array<string>|null)} */
        var matches = regex.exec(value);
        return matches ? Math.max(0, matches[2] - (str || 0)) + (matches[3] || "px") : value;
      }
      /**
       * @param {!Object} elem
       * @param {string} name
       * @param {string} extra
       * @param {boolean} isBorderBox
       * @param {!Object} styles
       * @param {number} themeName
       * @return {?}
       */
      function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles, themeName) {
        /** @type {number} */
        var i = "width" === name ? 1 : 0;
        /** @type {number} */
        var value = 0;
        /** @type {number} */
        var val = 0;
        if (extra === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i = i + 2) {
          if ("margin" === extra) {
            val = val + jQuery.css(elem, extra + cssExpand[i], true, styles);
          }
          if (isBorderBox) {
            if ("content" === extra) {
              /** @type {number} */
              val = val - jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if ("margin" !== extra) {
              /** @type {number} */
              val = val - jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            val = val + jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if ("padding" !== extra) {
              val = val + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              value = value + jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        return !isBorderBox && 0 <= themeName && (val = val + (Math.max(0, Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - themeName - val - value - .5)) || 0)), val;
      }
      /**
       * @param {!Element} elem
       * @param {string} name
       * @param {!Object} extra
       * @return {?}
       */
      function load(elem, name, extra) {
        var styles = getStyles(elem);
        var isBorderBox = (!support.boxSizingReliable() || extra) && "border-box" === jQuery.css(elem, "boxSizing", false, styles);
        var valueIsBorderBox = isBorderBox;
        var value = curCSS(elem, name, styles);
        var prop = "offset" + name[0].toUpperCase() + name.slice(1);
        if (rnumnonpx.test(value)) {
          if (!extra) {
            return value;
          }
          /** @type {string} */
          value = "auto";
        }
        return (!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && $(elem, "tr") || "auto" === value || !parseFloat(value) && "inline" === jQuery.css(elem, "display", false, styles)) && elem.getClientRects().length && (isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles), (valueIsBorderBox = prop in elem) && (value = elem[prop])), (value = parseFloat(value) || 0) + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), 
        valueIsBorderBox, styles, value) + "px";
      }
      /**
       * @param {!Object} type
       * @param {string} context
       * @param {string} object
       * @param {!Object} end
       * @param {string} easing
       * @return {?}
       */
      function Tween(type, context, object, end, easing) {
        return new Tween.prototype.init(type, context, object, end, easing);
      }
      /**
       * @return {undefined}
       */
      function step() {
        if (nt) {
          if (false === document.hidden && window.requestAnimationFrame) {
            window.requestAnimationFrame(step);
          } else {
            window.setTimeout(step, jQuery.fx.interval);
          }
          jQuery.fx.tick();
        }
      }
      /**
       * @return {?}
       */
      function createFxNow() {
        return window.setTimeout(function() {
          fxNow = void 0;
        }), fxNow = Date.now();
      }
      /**
       * @param {string} type
       * @param {number} includeWidth
       * @return {?}
       */
      function genFx(type, includeWidth) {
        var which;
        /** @type {number} */
        var i = 0;
        var attrs = {
          height : type
        };
        /** @type {number} */
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i = i + (2 - includeWidth)) {
          attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
        }
        return includeWidth && (attrs.opacity = attrs.width = type), attrs;
      }
      /**
       * @param {?} value
       * @param {string} prop
       * @param {?} animation
       * @return {?}
       */
      function createTween(value, prop, animation) {
        var tween;
        var r = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
        /** @type {number} */
        var i = 0;
        var br = r.length;
        for (; i < br; i++) {
          if (tween = r[i].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      /**
       * @param {!Object} elem
       * @param {?} properties
       * @param {!Object} options
       * @return {?}
       */
      function Animation(elem, properties, options) {
        var result;
        var a;
        /** @type {number} */
        var index = 0;
        var ncells = Animation.prefilters.length;
        var deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        });
        /**
         * @return {?}
         */
        var tick = function tick() {
          if (a) {
            return false;
          }
          var currentTime = fxNow || createFxNow();
          /** @type {number} */
          var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
          /** @type {number} */
          var percent = 1 - (remaining / animation.duration || 0);
          /** @type {number} */
          var i = 0;
          var length = animation.tweens.length;
          for (; i < length; i++) {
            animation.tweens[i].run(percent);
          }
          return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (length || deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation]), false);
        };
        var animation = deferred.promise({
          elem : elem,
          props : jQuery.extend({}, properties),
          opts : jQuery.extend(true, {
            specialEasing : {},
            easing : jQuery.easing._default
          }, options),
          originalProperties : properties,
          originalOptions : options,
          startTime : fxNow || createFxNow(),
          duration : options.duration,
          tweens : [],
          createTween : function tick(prop, end) {
            var result = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            return animation.tweens.push(result), result;
          },
          stop : function tick(value) {
            /** @type {number} */
            var i = 0;
            var mid = value ? animation.tweens.length : 0;
            if (a) {
              return this;
            }
            /** @type {boolean} */
            a = true;
            for (; i < mid; i++) {
              animation.tweens[i].run(1);
            }
            return value ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, value])) : deferred.rejectWith(elem, [animation, value]), this;
          }
        });
        var props = animation.props;
        (function(res, object) {
          var key;
          var name;
          var value;
          var obj;
          var hooks;
          for (key in res) {
            if (value = object[name = camelCase(key)], obj = res[key], Array.isArray(obj) && (value = obj[1], obj = res[key] = obj[0]), key !== name && (res[name] = obj, delete res[key]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks) {
              for (key in obj = hooks.expand(obj), delete res[name], obj) {
                if (!(key in res)) {
                  res[key] = obj[key];
                  object[key] = value;
                }
              }
            } else {
              object[name] = value;
            }
          }
        })(props, animation.opts.specialEasing);
        for (; index < ncells; index++) {
          if (result = Animation.prefilters[index].call(animation, elem, props, animation.opts)) {
            return isFunction(result.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result)), result;
          }
        }
        return jQuery.map(props, createTween, animation), isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
          elem : elem,
          anim : animation,
          queue : animation.opts.queue
        })), animation;
      }
      /**
       * @param {string} name
       * @return {?}
       */
      function map(name) {
        return (name.match(a) || []).join(" ");
      }
      /**
       * @param {!Node} element
       * @return {?}
       */
      function getClass(element) {
        return element.getAttribute && element.getAttribute("class") || "";
      }
      /**
       * @param {!Object} val
       * @return {?}
       */
      function format(val) {
        return Array.isArray(val) ? val : "string" == typeof val && val.match(a) || [];
      }
      /**
       * @param {string} v
       * @param {!Object} data
       * @param {string} key
       * @param {!Function} callback
       * @return {undefined}
       */
      function serialize(v, data, key, callback) {
        var i;
        if (Array.isArray(data)) {
          jQuery.each(data, function(s, value) {
            if (key || regIsJS.test(v)) {
              callback(v, value);
            } else {
              serialize(v + "[" + ("object" == (typeof value === "undefined" ? "undefined" : _typeof(value)) && null != value ? s : "") + "]", value, key, callback);
            }
          });
        } else {
          if (key || "object" !== type(data)) {
            callback(v, data);
          } else {
            for (i in data) {
              serialize(v + "[" + i + "]", data[i], key, callback);
            }
          }
        }
      }
      /**
       * @param {!Object} structure
       * @return {?}
       */
      function addToPrefiltersOrTransports(structure) {
        return function(name, n) {
          if ("string" != typeof name) {
            /** @type {string} */
            n = name;
            /** @type {string} */
            name = "*";
          }
          var type;
          /** @type {number} */
          var c = 0;
          var replies = name.toLowerCase().match(a) || [];
          if (isFunction(n)) {
            for (; type = replies[c++];) {
              if ("+" === type[0]) {
                type = type.slice(1) || "*";
                (structure[type] = structure[type] || []).unshift(n);
              } else {
                (structure[type] = structure[type] || []).push(n);
              }
            }
          }
        };
      }
      /**
       * @param {!Object} structure
       * @param {?} options
       * @param {!Object} originalOptions
       * @param {?} jqXHR
       * @return {?}
       */
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        /**
         * @param {string} dataType
         * @return {?}
         */
        function inspect(dataType) {
          var selected;
          return inspected[dataType] = true, jQuery.each(structure[dataType] || [], function(canCreateDiscussions, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), false);
          }), selected;
        }
        var inspected = {};
        /** @type {boolean} */
        var seekingTransport = structure === transports;
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      /**
       * @param {?} target
       * @param {?} opts
       * @return {?}
       */
      function ajaxExtend(target, opts) {
        var key;
        var deep;
        var flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in opts) {
          if (void 0 !== opts[key]) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = opts[key];
          }
        }
        return deep && jQuery.extend(true, target, deep), target;
      }
      /** @type {!Array} */
      var arr = [];
      /** @type {function(!Object): (Object|null)} */
      var getProto = Object.getPrototypeOf;
      /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
      var slice = arr.slice;
      /** @type {function(!Array): ?} */
      var clone = arr.flat ? function(prev) {
        return arr.flat.call(prev);
      } : function(input) {
        return arr.concat.apply([], input);
      };
      /** @type {function(this:IArrayLike<T>, ...T): number} */
      var push = arr.push;
      /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
      var indexOf = arr.indexOf;
      var class2type = {};
      /** @type {function(this:*): string} */
      var toString = class2type.toString;
      /** @type {function(this:Object, *): boolean} */
      var hasOwn = class2type.hasOwnProperty;
      /** @type {function(this:!Function): string} */
      var fnToString = hasOwn.toString;
      /** @type {string} */
      var Mixin2 = fnToString.call(Object);
      var support = {};
      /**
       * @param {!Object} name
       * @return {?}
       */
      var isFunction = function h(name) {
        return "function" == typeof name && "number" != typeof name.nodeType;
      };
      /**
       * @param {!Object} obj
       * @return {?}
       */
      var each = function isCurrentWindow(obj) {
        return null != obj && obj === obj.window;
      };
      var document = window.document;
      var obj = {
        type : true,
        src : true,
        nonce : true,
        noModule : true
      };
      /** @type {string} */
      var core_version = "3.5.1";
      /**
       * @param {!Object} elem
       * @param {string} context
       * @return {?}
       */
      var jQuery = function $(elem, context) {
        return new $.fn.init(elem, context);
      };
      jQuery.fn = jQuery.prototype = {
        jquery : core_version,
        constructor : jQuery,
        length : 0,
        toArray : function setupFloppy() {
          return slice.call(this);
        },
        get : function get(num) {
          return null == num ? slice.call(this) : num < 0 ? this[num + this.length] : this[num];
        },
        pushStack : function createSchema(name) {
          var ret = jQuery.merge(this.constructor(), name);
          return ret.prevObject = this, ret;
        },
        each : function disablemouse(e) {
          return jQuery.each(this, e);
        },
        map : function find(fn) {
          return this.pushStack(jQuery.map(this, function(elem, event) {
            return fn.call(elem, event, elem);
          }));
        },
        slice : function parent() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first : function isEqual() {
          return this.eq(0);
        },
        last : function isEqual() {
          return this.eq(-1);
        },
        even : function initEditors() {
          return this.pushStack(jQuery.grep(this, function(canCreateDiscussions, isSlidingUp) {
            return (isSlidingUp + 1) % 2;
          }));
        },
        odd : function initEditors() {
          return this.pushStack(jQuery.grep(this, function(canCreateDiscussions, isSlidingUp) {
            return isSlidingUp % 2;
          }));
        },
        eq : function last(i) {
          var len = this.length;
          var end = +i + (i < 0 ? len : 0);
          return this.pushStack(0 <= end && end < len ? [this[end]] : []);
        },
        end : function end() {
          return this.prevObject || this.constructor();
        },
        push : push,
        sort : arr.sort,
        splice : arr.splice
      };
      /** @type {function(): ?} */
      jQuery.extend = jQuery.fn.extend = function() {
        var options;
        var name;
        var value;
        var copy;
        var copyIsArray;
        var clone;
        var target = arguments[0] || {};
        /** @type {number} */
        var i = 1;
        /** @type {number} */
        var length = arguments.length;
        /** @type {boolean} */
        var deep = false;
        if ("boolean" == typeof target) {
          /** @type {boolean} */
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (!("object" == (typeof target === "undefined" ? "undefined" : _typeof(target)) || isFunction(target))) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if (null != (options = arguments[i])) {
            for (name in options) {
              copy = options[name];
              if ("__proto__" !== name && target !== copy) {
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  value = target[name];
                  clone = copyIsArray && !Array.isArray(value) ? [] : copyIsArray || jQuery.isPlainObject(value) ? value : {};
                  /** @type {boolean} */
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else {
                  if (void 0 !== copy) {
                    target[name] = copy;
                  }
                }
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        expando : "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        isReady : true,
        error : function error(value) {
          throw new Error(value);
        },
        noop : function setupFloppy() {
        },
        isPlainObject : function isPlainObject(obj) {
          var proto;
          var hasOwnProperty;
          return !(!obj || "[object Object]" !== toString.call(obj) || (proto = getProto(obj)) && ("function" != typeof(hasOwnProperty = hasOwn.call(proto, "constructor") && proto.constructor) || fnToString.call(hasOwnProperty) !== Mixin2));
        },
        isEmptyObject : function isEmptyObject(obj) {
          var key;
          for (key in obj) {
            return false;
          }
          return true;
        },
        globalEval : function format(string, data, f) {
          test(string, {
            nonce : data && data.nonce
          }, f);
        },
        each : function each(obj, fn) {
          var i;
          /** @type {number} */
          var n = 0;
          if (isArray(obj)) {
            i = obj.length;
            for (; n < i && false !== fn.call(obj[n], n, obj[n]); n++) {
            }
          } else {
            for (n in obj) {
              if (false === fn.call(obj[n], n, obj[n])) {
                break;
              }
            }
          }
          return obj;
        },
        makeArray : function makeArray(value, array) {
          var results = array || [];
          return null != value && (isArray(Object(value)) ? jQuery.merge(results, "string" == typeof value ? [value] : value) : push.call(results, value)), results;
        },
        inArray : function inArray(elem, arr, i) {
          return null == arr ? -1 : indexOf.call(arr, elem, i);
        },
        merge : function merge(data, params) {
          /** @type {number} */
          var extendedCount = +params.length;
          /** @type {number} */
          var i = 0;
          var index = data.length;
          for (; i < extendedCount; i++) {
            data[index++] = params[i];
          }
          return data.length = index, data;
        },
        grep : function grep(array, callback, a) {
          /** @type {!Array} */
          var ret = [];
          /** @type {number} */
          var i = 0;
          var length = array.length;
          /** @type {boolean} */
          var booA = !a;
          for (; i < length; i++) {
            if (!callback(array[i], i) !== booA) {
              ret.push(array[i]);
            }
          }
          return ret;
        },
        map : function parse(input, t, type) {
          var inpLen;
          var value;
          /** @type {number} */
          var i = 0;
          /** @type {!Array} */
          var a = [];
          if (isArray(input)) {
            inpLen = input.length;
            for (; i < inpLen; i++) {
              if (null != (value = t(input[i], i, type))) {
                a.push(value);
              }
            }
          } else {
            for (i in input) {
              if (null != (value = t(input[i], i, type))) {
                a.push(value);
              }
            }
          }
          return clone(a);
        },
        guid : 1,
        support : support
      });
      if ("function" == typeof Symbol) {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(canCreateDiscussions, p_Interval) {
        class2type["[object " + p_Interval + "]"] = p_Interval.toLowerCase();
      });
      var Sizzle = function(window) {
        /**
         * @param {string} selector
         * @param {!Object} context
         * @param {!Array} results
         * @param {!Array} seed
         * @return {?}
         */
        function Sizzle(selector, context, results, seed) {
          var m;
          var i;
          var elem;
          var nid;
          var match;
          var groups;
          var newSelector;
          var newContext = context && context.ownerDocument;
          var undefined = context ? context.nodeType : 9;
          if (results = results || [], "string" != typeof selector || !selector || 1 !== undefined && 9 !== undefined && 11 !== undefined) {
            return results;
          }
          if (!seed && (find(context), context = context || doc, documentIsHTML)) {
            if (11 !== undefined && (match = customSelectorReg.exec(selector))) {
              if (m = match[1]) {
                if (9 === undefined) {
                  if (!(elem = context.getElementById(m))) {
                    return results;
                  }
                  if (elem.id === m) {
                    return results.push(elem), results;
                  }
                } else {
                  if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                    return results.push(elem), results;
                  }
                }
              } else {
                if (match[2]) {
                  return push.apply(results, context.getElementsByTagName(selector)), results;
                }
                if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                  return push.apply(results, context.getElementsByClassName(m)), results;
                }
              }
            }
            if (support.qsa && !isUndefined[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (1 !== undefined || "object" !== context.nodeName.toLowerCase())) {
              if (newSelector = selector, newContext = context, 1 === undefined && (negativeRegex.test(selector) || RE_PSEUDOS.test(selector))) {
                if (!((newContext = $.test(selector) && testContext(context.parentNode) || context) === context && support.scope)) {
                  if (nid = context.getAttribute("id")) {
                    nid = nid.replace(rcssescape, fcssescape);
                  } else {
                    context.setAttribute("id", nid = expando);
                  }
                }
                i = (groups = tokenize(selector)).length;
                for (; i--;) {
                  /** @type {string} */
                  groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                }
                newSelector = groups.join(",");
              }
              try {
                return push.apply(results, newContext.querySelectorAll(newSelector)), results;
              } catch (t) {
                isUndefined(selector, true);
              } finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
          return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
         * @return {?}
         */
        function random() {
          /** @type {!Array} */
          var messages = [];
          return function cache(attr, fn) {
            return messages.push(attr + " ") > Expr.cacheLength && delete cache[messages.shift()], cache[attr + " "] = fn;
          };
        }
        /**
         * @param {!Function} fn
         * @return {?}
         */
        function markFunction(fn) {
          return fn[expando] = true, fn;
        }
        /**
         * @param {!Function} expect
         * @return {?}
         */
        function assert(expect) {
          var wrap = doc.createElement("fieldset");
          try {
            return !!expect(wrap);
          } catch (e) {
            return false;
          } finally {
            if (wrap.parentNode) {
              wrap.parentNode.removeChild(wrap);
            }
            /** @type {null} */
            wrap = null;
          }
        }
        /**
         * @param {string} attrs
         * @param {!Function} handler
         * @return {undefined}
         */
        function addHandle(attrs, handler) {
          var arr = attrs.split("|");
          var i = arr.length;
          for (; i--;) {
            /** @type {!Function} */
            Expr.attrHandle[arr[i]] = handler;
          }
        }
        /**
         * @param {!Object} a
         * @param {!Object} b
         * @return {?}
         */
        function siblingCheck(a, b) {
          var cur = b && a;
          var .num_const = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
          if (.num_const) {
            return .num_const;
          }
          if (cur) {
            for (; cur = cur.nextSibling;) {
              if (cur === b) {
                return -1;
              }
            }
          }
          return a ? 1 : -1;
        }
        /**
         * @param {!Object} name
         * @return {?}
         */
        function jQuerify(name) {
          return function(section) {
            return "input" === section.nodeName.toLowerCase() && section.type === name;
          };
        }
        /**
         * @param {!Object} type
         * @return {?}
         */
        function createButtonPseudo(type) {
          return function(section) {
            var undefined = section.nodeName.toLowerCase();
            return ("input" === undefined || "button" === undefined) && section.type === type;
          };
        }
        /**
         * @param {boolean} disabled
         * @return {?}
         */
        function createDisabledPseudo(disabled) {
          return function(elem) {
            return "form" in elem ? elem.parentNode && false === elem.disabled ? "label" in elem ? "label" in elem.parentNode ? elem.parentNode.disabled === disabled : elem.disabled === disabled : elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled : elem.disabled === disabled : "label" in elem && elem.disabled === disabled;
          };
        }
        /**
         * @param {!Function} fn
         * @return {?}
         */
        function createPositionalPseudo(fn) {
          return markFunction(function(y) {
            return y = +y, markFunction(function(credentials, host) {
              var port;
              var p = fn([], credentials.length, y);
              var i = p.length;
              for (; i--;) {
                if (credentials[port = p[i]]) {
                  /** @type {boolean} */
                  credentials[port] = !(host[port] = credentials[port]);
                }
              }
            });
          });
        }
        /**
         * @param {!Node} context
         * @return {?}
         */
        function testContext(context) {
          return context && void 0 !== context.getElementsByTagName && context;
        }
        /**
         * @return {undefined}
         */
        function setFilters() {
        }
        /**
         * @param {!Array} tokens
         * @return {?}
         */
        function toSelector(tokens) {
          /** @type {number} */
          var i = 0;
          var numTokens = tokens.length;
          /** @type {string} */
          var selector = "";
          for (; i < numTokens; i++) {
            /** @type {string} */
            selector = selector + tokens[i].value;
          }
          return selector;
        }
        /**
         * @param {!Function} matcher
         * @param {!Object} combinator
         * @param {string} base
         * @return {?}
         */
        function addCombinator(matcher, combinator, base) {
          var dir = combinator.dir;
          var skip = combinator.next;
          var key = skip || dir;
          var checkNonElements = base && "parentNode" === key;
          /** @type {number} */
          var Z = callId++;
          return combinator.first ? function(elem, stat, context) {
            for (; elem = elem[dir];) {
              if (1 === elem.nodeType || checkNonElements) {
                return matcher(elem, stat, context);
              }
            }
            return false;
          } : function(elem, stat, context) {
            var a;
            var out;
            var outerCache;
            /** @type {!Array} */
            var ret = [dirruns, Z];
            if (context) {
              for (; elem = elem[dir];) {
                if ((1 === elem.nodeType || checkNonElements) && matcher(elem, stat, context)) {
                  return true;
                }
              }
            } else {
              for (; elem = elem[dir];) {
                if (1 === elem.nodeType || checkNonElements) {
                  if (out = (outerCache = elem[expando] || (elem[expando] = {}))[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), skip && skip === elem.nodeName.toLowerCase()) {
                    elem = elem[dir] || elem;
                  } else {
                    if ((a = out[key]) && a[0] === dirruns && a[1] === Z) {
                      return ret[2] = a[2];
                    }
                    if ((out[key] = ret)[2] = matcher(elem, stat, context)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
        /**
         * @param {!Object} matchers
         * @return {?}
         */
        function elementMatcher(matchers) {
          return 1 < matchers.length ? function(elem, context, xml) {
            var i = matchers.length;
            for (; i--;) {
              if (!matchers[i](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        /**
         * @param {!Array} result
         * @param {!Object} selector
         * @param {!Function} format
         * @param {string} context
         * @param {boolean} target
         * @return {?}
         */
        function callback(result, selector, format, context, target) {
          var a;
          /** @type {!Array} */
          var b = [];
          /** @type {number} */
          var i = 0;
          var trlen = result.length;
          /** @type {boolean} */
          var isDrawLayerVisibled = null != selector;
          for (; i < trlen; i++) {
            if (a = result[i]) {
              if (!(format && !format(a, context, target))) {
                b.push(a);
                if (isDrawLayerVisibled) {
                  selector.push(i);
                }
              }
            }
          }
          return b;
        }
        /**
         * @param {!Function} data
         * @param {!Object} obj
         * @param {string} cb
         * @param {!Object} node
         * @param {!Object} fn
         * @param {!Object} process
         * @return {?}
         */
        function traverse(data, obj, cb, node, fn, process) {
          return node && !node[expando] && (node = traverse(node)), fn && !fn[expando] && (fn = traverse(fn, process)), markFunction(function(name, object, context, res) {
            var key;
            var i;
            var value;
            /** @type {!Array} */
            var response = [];
            /** @type {!Array} */
            var map = [];
            var n = object.length;
            var options = name || function(selector, set, results) {
              /** @type {number} */
              var i = 0;
              var l = set.length;
              for (; i < l; i++) {
                Sizzle(selector, set[i], results);
              }
              return results;
            }(obj || "*", context.nodeType ? [context] : context, []);
            var o = !data || !name && obj ? options : callback(options, response, data, context, res);
            var result = cb ? fn || (name ? data : n || node) ? [] : object : o;
            if (cb && cb(o, result, context, res), node) {
              key = callback(result, map);
              node(key, [], context, res);
              i = key.length;
              for (; i--;) {
                if (value = key[i]) {
                  /** @type {boolean} */
                  result[map[i]] = !(o[map[i]] = value);
                }
              }
            }
            if (name) {
              if (fn || data) {
                if (fn) {
                  /** @type {!Array} */
                  key = [];
                  i = result.length;
                  for (; i--;) {
                    if (value = result[i]) {
                      key.push(o[i] = value);
                    }
                  }
                  fn(null, result = [], key, res);
                }
                i = result.length;
                for (; i--;) {
                  if ((value = result[i]) && -1 < (key = fn ? indexOf(name, value) : response[i])) {
                    /** @type {boolean} */
                    name[key] = !(object[key] = value);
                  }
                }
              }
            } else {
              result = callback(result === object ? result.splice(n, result.length) : result);
              if (fn) {
                fn(null, object, result, res);
              } else {
                push.apply(object, result);
              }
            }
          });
        }
        /**
         * @param {!Array} tokens
         * @return {?}
         */
        function matcherFromTokens(tokens) {
          var checkContext;
          var matcher;
          var j;
          var len = tokens.length;
          var leadingRelative = Expr.relative[tokens[0].type];
          var implicitRelative = leadingRelative || Expr.relative[" "];
          /** @type {number} */
          var i = leadingRelative ? 1 : 0;
          var matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true);
          var matchAnyContext = addCombinator(function(props) {
            return -1 < indexOf(checkContext, props);
          }, implicitRelative, true);
          /** @type {!Array} */
          var matchers = [function(elem, context, xml) {
            var a = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            return checkContext = null, a;
          }];
          for (; i < len; i++) {
            if (matcher = Expr.relative[tokens[i].type]) {
              /** @type {!Array} */
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
                /** @type {number} */
                j = ++i;
                for (; j < len && !Expr.relative[tokens[j].type]; j++) {
                }
                return traverse(1 < i && elementMatcher(matchers), 1 < i && toSelector(tokens.slice(0, i - 1).concat({
                  value : " " === tokens[i - 2].type ? "*" : ""
                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        var i;
        var support;
        var Expr;
        var attr;
        var isNative;
        var tokenize;
        var compile;
        var select;
        var outermostContext;
        var sortInput;
        var stability;
        var find;
        var doc;
        var el;
        var documentIsHTML;
        var rbuggyQSA;
        var rbuggyMatches;
        var matches;
        var contains;
        /** @type {string} */
        var expando = "sizzle" + 1 * new Date;
        var document = window.document;
        /** @type {number} */
        var dirruns = 0;
        /** @type {number} */
        var callId = 0;
        var b = random();
        var next = random();
        var compilerCache = random();
        var isUndefined = random();
        /**
         * @param {?} type
         * @param {?} code
         * @return {?}
         */
        var girls = function run(type, code) {
          return type === code && (stability = true), 0;
        };
        /** @type {function(this:Object, *): boolean} */
        var hasOwn = {}.hasOwnProperty;
        /** @type {!Array} */
        var arr = [];
        /** @type {function(this:IArrayLike<T>): T} */
        var pop = arr.pop;
        /** @type {function(this:IArrayLike<T>, ...T): number} */
        var push_native = arr.push;
        /** @type {function(this:IArrayLike<T>, ...T): number} */
        var push = arr.push;
        /** @type {function(this:(IArrayLike<T>|string), *=, *=): !Array<T>} */
        var slice = arr.slice;
        /**
         * @param {string} list
         * @param {!Object} func
         * @return {?}
         */
        var indexOf = function QueryStringParser$maybeArrayIndex(list, func) {
          /** @type {number} */
          var v = 0;
          var n = list.length;
          for (; v < n; v++) {
            if (list[v] === func) {
              return v;
            }
          }
          return -1;
        };
        /** @type {string} */
        var value = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
        /** @type {string} */
        var _test = "[ \\t\\r\\n\\f]";
        /** @type {string} */
        var escRightBracket = "(?:\\\\[\\da-fA-F]{1,6}" + _test + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\u007f])+";
        /** @type {string} */
        var _end2 = "\\[" + _test + "*(" + escRightBracket + ")(?:" + _test + "*([*^$|!~]?=)" + _test + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + escRightBracket + "))|)" + _test + "*\\]";
        /** @type {string} */
        var pseudos = ":(" + escRightBracket + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _end2 + ")*)|.*)\\)|)";
        /** @type {!RegExp} */
        var entityEscapeRegExp = new RegExp(_test + "+", "g");
        /** @type {!RegExp} */
        var rtrim = new RegExp("^" + _test + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _test + "+$", "g");
        /** @type {!RegExp} */
        var rquickIs = new RegExp("^" + _test + "*," + _test + "*");
        /** @type {!RegExp} */
        var RE_PSEUDOS = new RegExp("^" + _test + "*([>+~]|" + _test + ")" + _test + "*");
        /** @type {!RegExp} */
        var negativeRegex = new RegExp(_test + "|>");
        /** @type {!RegExp} */
        var rpseudo = new RegExp(pseudos);
        /** @type {!RegExp} */
        var ridentifier = new RegExp("^" + escRightBracket + "$");
        var matchExpr = {
          ID : new RegExp("^#(" + escRightBracket + ")"),
          CLASS : new RegExp("^\\.(" + escRightBracket + ")"),
          TAG : new RegExp("^(" + escRightBracket + "|[*])"),
          ATTR : new RegExp("^" + _end2),
          PSEUDO : new RegExp("^" + pseudos),
          CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _test + "*(even|odd|(([+-]|)(\\d*)n|)" + _test + "*(?:([+-]|)" + _test + "*(\\d+)|))" + _test + "*\\)|)", "i"),
          bool : new RegExp("^(?:" + value + ")$", "i"),
          needsContext : new RegExp("^" + _test + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _test + "*((?:-\\d)?\\d*)" + _test + "*\\)|)(?=[^-]|$)", "i")
        };
        /** @type {!RegExp} */
        var reKeyword = /HTML$/i;
        /** @type {!RegExp} */
        var inputNodeNames = /^(?:input|select|textarea|button)$/i;
        /** @type {!RegExp} */
        var srsRegex = /^h\d$/i;
        /** @type {!RegExp} */
        var rnative = /^[^{]+\{\s*\[native \w/;
        /** @type {!RegExp} */
        var customSelectorReg = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
        /** @type {!RegExp} */
        var $ = /[+~]/;
        /** @type {!RegExp} */
        var name = new RegExp("\\\\[\\da-fA-F]{1,6}" + _test + "?|\\\\([^\\r\\n\\f])", "g");
        /**
         * @param {string} query
         * @param {string} reRender
         * @return {?}
         */
        var data = function filter(query, reRender) {
          /** @type {number} */
          var charCodeUpperA = "0x" + query.slice(1) - 65536;
          return reRender || (charCodeUpperA < 0 ? String.fromCharCode(charCodeUpperA + 65536) : String.fromCharCode(charCodeUpperA >> 10 | 55296, 1023 & charCodeUpperA | 56320));
        };
        /** @type {!RegExp} */
        var rcssescape = /([\0-\u001f\u007f]|^-?\d)|^-$|[^\0-\u001f\u007f-\uffff\w-]/g;
        /**
         * @param {string} text
         * @param {string} textOnly
         * @return {?}
         */
        var fcssescape = function set(text, textOnly) {
          return textOnly ? "\x00" === text ? "\ufffd" : text.slice(0, -1) + "\\" + text.charCodeAt(text.length - 1).toString(16) + " " : "\\" + text;
        };
        /**
         * @return {undefined}
         */
        var fn = function Sizzle() {
          find();
        };
        var disabledAncestor = addCombinator(function(e) {
          return true === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
          dir : "parentNode",
          next : "legend"
        });
        try {
          push.apply(arr = slice.call(document.childNodes), document.childNodes);
          arr[document.childNodes.length].nodeType;
        } catch (t) {
          push = {
            apply : arr.length ? function(target, arr) {
              push_native.apply(target, slice.call(arr));
            } : function(target, a) {
              var j = target.length;
              /** @type {number} */
              var cnt = 0;
              for (; target[j++] = a[cnt++];) {
              }
              /** @type {number} */
              target.length = j - 1;
            }
          };
        }
        for (i in support = Sizzle.support = {}, isNative = Sizzle.isXML = function(elem) {
          var nodeName = elem.namespaceURI;
          var xmlNode = (elem.ownerDocument || elem).documentElement;
          return !reKeyword.test(nodeName || xmlNode && xmlNode.nodeName || "HTML");
        }, find = Sizzle.setDocument = function(node) {
          var inverseFlag;
          var window;
          var target = node ? node.ownerDocument || node : document;
          return target != doc && 9 === target.nodeType && target.documentElement && (el = (doc = target).documentElement, documentIsHTML = !isNative(doc), document != doc && (window = doc.defaultView) && window.top !== window && (window.addEventListener ? window.addEventListener("unload", fn, false) : window.attachEvent && window.attachEvent("onunload", fn)), support.scope = assert(function(group) {
            return el.appendChild(group).appendChild(doc.createElement("div")), void 0 !== group.querySelectorAll && !group.querySelectorAll(":scope fieldset div").length;
          }), support.attributes = assert(function(elm) {
            return elm.className = "i", !elm.getAttribute("className");
          }), support.getElementsByTagName = assert(function(testee) {
            return testee.appendChild(doc.createComment("")), !testee.getElementsByTagName("*").length;
          }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName), support.getById = assert(function(line) {
            return el.appendChild(line).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length;
          }), support.getById ? (Expr.filter.ID = function(elem) {
            var match = elem.replace(name, data);
            return function(e) {
              return e.getAttribute("id") === match;
            };
          }, Expr.find.ID = function(elem, context) {
            if (void 0 !== context.getElementById && documentIsHTML) {
              var c_style = context.getElementById(elem);
              return c_style ? [c_style] : [];
            }
          }) : (Expr.filter.ID = function(elem) {
            var n = elem.replace(name, data);
            return function(elem) {
              var exported = void 0 !== elem.getAttributeNode && elem.getAttributeNode("id");
              return exported && exported.value === n;
            };
          }, Expr.find.ID = function(value, context) {
            if (void 0 !== context.getElementById && documentIsHTML) {
              var attr;
              var r;
              var ret;
              var tmp = context.getElementById(value);
              if (tmp) {
                if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
                  return [tmp];
                }
                ret = context.getElementsByName(value);
                /** @type {number} */
                r = 0;
                for (; tmp = ret[r++];) {
                  if ((attr = tmp.getAttributeNode("id")) && attr.value === value) {
                    return [tmp];
                  }
                }
              }
              return [];
            }
          }), Expr.find.TAG = support.getElementsByTagName ? function(v, g) {
            return void 0 !== g.getElementsByTagName ? g.getElementsByTagName(v) : support.qsa ? g.querySelectorAll(v) : void 0;
          } : function(token, o) {
            var n;
            /** @type {!Array} */
            var results = [];
            /** @type {number} */
            var i = 0;
            var args = o.getElementsByTagName(token);
            if ("*" === token) {
              for (; n = args[i++];) {
                if (1 === n.nodeType) {
                  results.push(n);
                }
              }
              return results;
            }
            return args;
          }, Expr.find.CLASS = support.getElementsByClassName && function(val, docDom) {
            if (void 0 !== docDom.getElementsByClassName && documentIsHTML) {
              return docDom.getElementsByClassName(val);
            }
          }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(frag) {
            var element;
            /** @type {string} */
            el.appendChild(frag).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (frag.querySelectorAll("[msallowcapture^='']").length) {
              rbuggyQSA.push("[*^$]=" + _test + "*(?:''|\"\")");
            }
            if (!frag.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + _test + "*(?:value|" + value + ")");
            }
            if (!frag.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            (element = doc.createElement("input")).setAttribute("name", "");
            frag.appendChild(element);
            if (!frag.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + _test + "*name" + _test + "*=" + _test + "*(?:''|\"\")");
            }
            if (!frag.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            if (!frag.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            frag.querySelectorAll("\\\f");
            rbuggyQSA.push("[\\r\\n\\f]");
          }), assert(function(element) {
            /** @type {string} */
            element.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var input = doc.createElement("input");
            input.setAttribute("type", "hidden");
            element.appendChild(input).setAttribute("name", "D");
            if (element.querySelectorAll("[name=d]").length) {
              rbuggyQSA.push("name" + _test + "*[*^$|!~]?=");
            }
            if (2 !== element.querySelectorAll(":enabled").length) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            /** @type {boolean} */
            el.appendChild(element).disabled = true;
            if (2 !== element.querySelectorAll(":disabled").length) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            element.querySelectorAll("*,:x");
            rbuggyQSA.push(",.*:");
          })), (support.matchesSelector = rnative.test(matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.oMatchesSelector || el.msMatchesSelector)) && assert(function(el) {
            support.disconnectedMatch = matches.call(el, "*");
            matches.call(el, "[s!='']:x");
            rbuggyMatches.push("!=", pseudos);
          }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), inverseFlag = rnative.test(el.compareDocumentPosition), contains = inverseFlag || rnative.test(el.contains) ? function(a, n) {
            var name = 9 === a.nodeType ? a.documentElement : a;
            var b = n && n.parentNode;
            return a === b || !(!b || 1 !== b.nodeType || !(name.contains ? name.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)));
          } : function(id, b) {
            if (b) {
              for (; b = b.parentNode;) {
                if (b === id) {
                  return true;
                }
              }
            }
            return false;
          }, girls = inverseFlag ? function(a, b) {
            if (a === b) {
              return stability = true, 0;
            }
            /** @type {number} */
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            return compare || (1 & (compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a == doc || a.ownerDocument == document && contains(document, a) ? -1 : b == doc || b.ownerDocument == document && contains(document, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1);
          } : function(a, b) {
            if (a === b) {
              return stability = true, 0;
            }
            var cur;
            /** @type {number} */
            var i = 0;
            var aup = a.parentNode;
            var bup = b.parentNode;
            /** @type {!Array} */
            var ap = [a];
            /** @type {!Array} */
            var bp = [b];
            if (!aup || !bup) {
              return a == doc ? -1 : b == doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
            }
            if (aup === bup) {
              return siblingCheck(a, b);
            }
            /** @type {!Object} */
            cur = a;
            for (; cur = cur.parentNode;) {
              ap.unshift(cur);
            }
            /** @type {!Object} */
            cur = b;
            for (; cur = cur.parentNode;) {
              bp.unshift(cur);
            }
            for (; ap[i] === bp[i];) {
              i++;
            }
            return i ? siblingCheck(ap[i], bp[i]) : ap[i] == document ? -1 : bp[i] == document ? 1 : 0;
          }), doc;
        }, Sizzle.matches = function(expr, set) {
          return Sizzle(expr, null, null, set);
        }, Sizzle.matchesSelector = function(elem, expr) {
          if (find(elem), support.matchesSelector && documentIsHTML && !isUndefined[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) {
                return ret;
              }
            } catch (e) {
              isUndefined(expr, true);
            }
          }
          return 0 < Sizzle(expr, doc, null, [elem]).length;
        }, Sizzle.contains = function(el, value) {
          return (el.ownerDocument || el) != doc && find(el), contains(el, value);
        }, Sizzle.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != doc) {
            find(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()];
          var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }, Sizzle.escape = function(text) {
          return (text + "").replace(rcssescape, fcssescape);
        }, Sizzle.error = function(value) {
          throw new Error("Syntax error, unrecognized expression: " + value);
        }, Sizzle.uniqueSort = function(arr) {
          var x;
          /** @type {!Array} */
          var p = [];
          /** @type {number} */
          var j = 0;
          /** @type {number} */
          var i = 0;
          if (stability = !support.detectDuplicates, sortInput = !support.sortStable && arr.slice(0), arr.sort(girls), stability) {
            for (; x = arr[i++];) {
              if (x === arr[i]) {
                /** @type {number} */
                j = p.push(i);
              }
            }
            for (; j--;) {
              arr.splice(p[j], 1);
            }
          }
          return sortInput = null, arr;
        }, attr = Sizzle.getText = function(d) {
          var x;
          /** @type {string} */
          var str = "";
          /** @type {number} */
          var e = 0;
          var type = d.nodeType;
          if (type) {
            if (1 === type || 9 === type || 11 === type) {
              if ("string" == typeof d.textContent) {
                return d.textContent;
              }
              d = d.firstChild;
              for (; d; d = d.nextSibling) {
                str = str + attr(d);
              }
            } else {
              if (3 === type || 4 === type) {
                return d.nodeValue;
              }
            }
          } else {
            for (; x = d[e++];) {
              str = str + attr(x);
            }
          }
          return str;
        }, (Expr = Sizzle.selectors = {
          cacheLength : 50,
          createPseudo : markFunction,
          match : matchExpr,
          attrHandle : {},
          find : {},
          relative : {
            ">" : {
              dir : "parentNode",
              first : true
            },
            " " : {
              dir : "parentNode"
            },
            "+" : {
              dir : "previousSibling",
              first : true
            },
            "~" : {
              dir : "previousSibling"
            }
          },
          preFilter : {
            ATTR : function getRevFileName(values) {
              return values[1] = values[1].replace(name, data), values[3] = (values[3] || values[4] || values[5] || "").replace(name, data), "~=" === values[2] && (values[3] = " " + values[3] + " "), values.slice(0, 4);
            },
            CHILD : function CHILD(match) {
              return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
            },
            PSEUDO : function process(match) {
              var excess;
              var unquoted = !match[6] && match[2];
              return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
            }
          },
          filter : {
            TAG : function TAG(elem) {
              var nodeName = elem.replace(name, data).toLowerCase();
              return "*" === elem ? function() {
                return true;
              } : function(elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
              };
            },
            CLASS : function init(a) {
              var right = b[a + " "];
              return right || (right = new RegExp("(^|" + _test + ")" + a + "(" + _test + "|$)")) && b(a, function(e) {
                return right.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            },
            ATTR : function ATTR(name, string, value) {
              return function(elem) {
                var key = Sizzle.attr(elem, name);
                return null == key ? "!=" === string : !string || (key = key + "", "=" === string ? key === value : "!=" === string ? key !== value : "^=" === string ? value && 0 === key.indexOf(value) : "*=" === string ? value && -1 < key.indexOf(value) : "$=" === string ? value && key.slice(-value.length) === value : "~=" === string ? -1 < (" " + key.replace(entityEscapeRegExp, " ") + " ").indexOf(value) : "|=" === string && (key === value || key.slice(0, value.length + 1) === value + "-"));
              };
            },
            CHILD : function CHILD(type, elem, match, first, last) {
              /** @type {boolean} */
              var simple = "nth" !== type.slice(0, 3);
              /** @type {boolean} */
              var forward = "last" !== type.slice(-4);
              /** @type {boolean} */
              var isStrict = "of-type" === elem;
              return 1 === first && 0 === last ? function(tplDiv) {
                return !!tplDiv.parentNode;
              } : function(elem, n, isParentStrict) {
                var cache;
                var uniqueCache;
                var outerCache;
                var node;
                var nodeIndex;
                var start;
                /** @type {string} */
                var dir = simple !== forward ? "nextSibling" : "previousSibling";
                var parent = elem.parentNode;
                var iteratedVal = isStrict && elem.nodeName.toLowerCase();
                /** @type {boolean} */
                var useCache = !isParentStrict && !isStrict;
                /** @type {boolean} */
                var diff = false;
                if (parent) {
                  if (simple) {
                    for (; dir;) {
                      /** @type {!Node} */
                      node = elem;
                      for (; node = node[dir];) {
                        if (isStrict ? node.nodeName.toLowerCase() === iteratedVal : 1 === node.nodeType) {
                          return false;
                        }
                      }
                      /** @type {(boolean|string)} */
                      start = dir = "only" === type && !start && "nextSibling";
                    }
                    return true;
                  }
                  if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                    diff = (nodeIndex = (cache = (uniqueCache = (outerCache = (node = parent)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]) && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    for (; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();) {
                      if (1 === node.nodeType && ++diff && node === elem) {
                        /** @type {!Array} */
                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache && (diff = nodeIndex = (cache = (uniqueCache = (outerCache = (node = elem)[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] || [])[0] === dirruns && cache[1]), false === diff) {
                      for (; (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((isStrict ? node.nodeName.toLowerCase() !== iteratedVal : 1 !== node.nodeType) || !++diff || (useCache && ((uniqueCache = (outerCache = node[expando] || (node[expando] = {}))[node.uniqueID] || (outerCache[node.uniqueID] = {}))[type] = [dirruns, diff]), node !== elem));) {
                      }
                    }
                  }
                  return (diff = diff - last) === first || diff % first == 0 && 0 <= diff / first;
                }
              };
            },
            PSEUDO : function PSEUDO(pseudo, argument) {
              var args;
              var fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
              return fn[expando] ? fn(argument) : 1 < fn.length ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, result) {
                var j;
                var matched = fn(seed, argument);
                var i = matched.length;
                for (; i--;) {
                  /** @type {boolean} */
                  seed[j = indexOf(seed, matched[i])] = !(result[j] = matched[i]);
                }
              }) : function(responce) {
                return fn(responce, 0, args);
              }) : fn;
            }
          },
          pseudos : {
            not : markFunction(function(selector) {
              /** @type {!Array} */
              var a = [];
              /** @type {!Array} */
              var results = [];
              var matcher = compile(selector.replace(rtrim, "$1"));
              return matcher[expando] ? markFunction(function(a, resolvedDeps, n, context) {
                var name;
                var result = matcher(a, null, context, []);
                var i = a.length;
                for (; i--;) {
                  if (name = result[i]) {
                    /** @type {boolean} */
                    a[i] = !(resolvedDeps[i] = name);
                  }
                }
              }) : function(sNewObjName, a, context) {
                return a[0] = sNewObjName, matcher(a, null, context, results), a[0] = null, !results.pop();
              };
            }),
            has : markFunction(function(selector) {
              return function(elem) {
                return 0 < Sizzle(selector, elem).length;
              };
            }),
            contains : markFunction(function(widget) {
              return widget = widget.replace(name, data), function(element) {
                return -1 < (element.textContent || attr(element)).indexOf(widget);
              };
            }),
            lang : markFunction(function(lang) {
              return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(name, data).toLowerCase(), function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-");
                  }
                } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                return false;
              };
            }),
            target : function target(value) {
              var charListNotLatin = window.location && window.location.hash;
              return charListNotLatin && charListNotLatin.slice(1) === value.id;
            },
            root : function getSectionVals(key) {
              return key === el;
            },
            focus : function focus(elem) {
              return elem === doc.activeElement && (!doc.hasFocus || doc.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            enabled : createDisabledPseudo(false),
            disabled : createDisabledPseudo(true),
            checked : function checked(elem) {
              var custom = elem.nodeName.toLowerCase();
              return "input" === custom && !!elem.checked || "option" === custom && !!elem.selected;
            },
            selected : function selected(elem) {
              return elem.parentNode && elem.parentNode.selectedIndex, true === elem.selected;
            },
            empty : function empty(elem) {
              elem = elem.firstChild;
              for (; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent : function filter(fn) {
              return !Expr.pseudos.empty(fn);
            },
            header : function getCoreTestFilePath(module) {
              return srsRegex.test(module.nodeName);
            },
            input : function synthesizeMethod(target) {
              return inputNodeNames.test(target.nodeName);
            },
            button : function button(elem) {
              var left = elem.nodeName.toLowerCase();
              return "input" === left && "button" === elem.type || "button" === left;
            },
            text : function text(elem) {
              var EXT;
              return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (EXT = elem.getAttribute("type")) || "text" === EXT.toLowerCase());
            },
            first : createPositionalPseudo(function() {
              return [0];
            }),
            last : createPositionalPseudo(function(canCreateDiscussions, isSlidingUp) {
              return [isSlidingUp - 1];
            }),
            eq : createPositionalPseudo(function(canCreateDiscussions, pageHeight, srcY) {
              return [srcY < 0 ? srcY + pageHeight : srcY];
            }),
            even : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
              /** @type {number} */
              var value = 0;
              for (; value < inclusiveMin; value = value + 2) {
                lastshuffle.push(value);
              }
              return lastshuffle;
            }),
            odd : createPositionalPseudo(function(lastshuffle, inclusiveMin) {
              /** @type {number} */
              var value = 1;
              for (; value < inclusiveMin; value = value + 2) {
                lastshuffle.push(value);
              }
              return lastshuffle;
            }),
            lt : createPositionalPseudo(function(newNodeLists, total, n) {
              var itemNodeList = n < 0 ? n + total : total < n ? total : n;
              for (; 0 <= --itemNodeList;) {
                newNodeLists.push(itemNodeList);
              }
              return newNodeLists;
            }),
            gt : createPositionalPseudo(function(newNodeLists, pageHeight, srcY) {
              var itemNodeList = srcY < 0 ? srcY + pageHeight : srcY;
              for (; ++itemNodeList < pageHeight;) {
                newNodeLists.push(itemNodeList);
              }
              return newNodeLists;
            })
          }
        }).pseudos.nth = Expr.pseudos.eq, {
          radio : true,
          checkbox : true,
          file : true,
          password : true,
          image : true
        }) {
          Expr.pseudos[i] = jQuerify(i);
        }
        for (i in{
          submit : true,
          reset : true
        }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(node, root) {
          var e;
          var match;
          var tokens;
          var type;
          var selector;
          var groups;
          var preFilters;
          var name = next[node + " "];
          if (name) {
            return root ? 0 : name.slice(0);
          }
          /** @type {!Object} */
          selector = node;
          /** @type {!Array} */
          groups = [];
          preFilters = Expr.preFilter;
          for (; selector;) {
            for (type in e && !(match = rquickIs.exec(selector)) || (match && (selector = selector.slice(match[0].length) || selector), groups.push(tokens = [])), e = false, (match = RE_PSEUDOS.exec(selector)) && (e = match.shift(), tokens.push({
              value : e,
              type : match[0].replace(rtrim, " ")
            }), selector = selector.slice(e.length)), Expr.filter) {
              if (!(!(match = matchExpr[type].exec(selector)) || preFilters[type] && !(match = preFilters[type](match)))) {
                e = match.shift();
                tokens.push({
                  value : e,
                  type : type,
                  matches : match
                });
                selector = selector.slice(e.length);
              }
            }
            if (!e) {
              break;
            }
          }
          return root ? selector.length : selector ? Sizzle.error(node) : next(node, groups).slice(0);
        }, compile = Sizzle.compile = function(selector, group) {
          var i;
          var elementMatchers;
          var setMatchers;
          var bySet;
          var out;
          var superMatcher;
          /** @type {!Array} */
          var res = [];
          /** @type {!Array} */
          var cacheStore = [];
          var cached = compilerCache[selector + " "];
          if (!cached) {
            if (!group) {
              group = tokenize(selector);
            }
            i = group.length;
            for (; i--;) {
              if ((cached = matcherFromTokens(group[i]))[expando]) {
                res.push(cached);
              } else {
                cacheStore.push(cached);
              }
            }
            /** @type {string} */
            (cached = compilerCache(selector, (elementMatchers = cacheStore, bySet = 0 < (setMatchers = res).length, out = 0 < elementMatchers.length, superMatcher = function select(e, context, xml, results, n) {
              var elem;
              var j;
              var matcher;
              /** @type {number} */
              var matchedCount = 0;
              /** @type {string} */
              var i = "0";
              var unmatched = e && [];
              /** @type {!Array} */
              var data = [];
              var contextBackup = outermostContext;
              var args = e || out && Expr.find.TAG("*", n);
              var dirrunsUnique = dirruns = dirruns + (null == contextBackup ? 1 : Math.random() || .1);
              var endIdx = args.length;
              if (n) {
                outermostContext = context == doc || context || n;
              }
              for (; i !== endIdx && null != (elem = args[i]); i++) {
                if (out && elem) {
                  /** @type {number} */
                  j = 0;
                  if (!(context || elem.ownerDocument == doc)) {
                    find(elem);
                    /** @type {boolean} */
                    xml = !documentIsHTML;
                  }
                  for (; matcher = elementMatchers[j++];) {
                    if (matcher(elem, context || doc, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (n) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (e) {
                    unmatched.push(elem);
                  }
                }
              }
              if (matchedCount = matchedCount + i, bySet && i !== matchedCount) {
                /** @type {number} */
                j = 0;
                for (; matcher = setMatchers[j++];) {
                  matcher(unmatched, data, context, xml);
                }
                if (e) {
                  if (0 < matchedCount) {
                    for (; i--;) {
                      if (!(unmatched[i] || data[i])) {
                        data[i] = pop.call(results);
                      }
                    }
                  }
                  data = callback(data);
                }
                push.apply(results, data);
                if (n && !e && 0 < data.length && 1 < matchedCount + setMatchers.length) {
                  Sizzle.uniqueSort(results);
                }
              }
              return n && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched;
            }, bySet ? markFunction(superMatcher) : superMatcher))).selector = selector;
          }
          return cached;
        }, select = Sizzle.select = function(selector, context, results, key) {
          var i;
          var tokens;
          var token;
          var type;
          var callback;
          /** @type {(!Function|boolean)} */
          var compiled = "function" == typeof selector && selector;
          var match = !key && tokenize(selector = compiled.selector || selector);
          if (results = results || [], 1 === match.length) {
            if (2 < (tokens = match[0] = match[0].slice(0)).length && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
              if (!(context = (Expr.find.ID(token.matches[0].replace(name, data), context) || [])[0])) {
                return results;
              }
              if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            for (; i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
              if ((callback = Expr.find[type]) && (key = callback(token.matches[0].replace(name, data), $.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                if (tokens.splice(i, 1), !(selector = key.length && toSelector(tokens))) {
                  return push.apply(results, key), results;
                }
                break;
              }
            }
          }
          return (compiled || compile(selector, match))(key, context, !documentIsHTML, results, !context || $.test(selector) && testContext(context.parentNode) || context), results;
        }, support.sortStable = expando.split("").sort(girls).join("") === expando, support.detectDuplicates = !!stability, find(), support.sortDetached = assert(function(html) {
          return 1 & html.compareDocumentPosition(doc.createElement("fieldset"));
        }), assert(function(aItem) {
          return aItem.innerHTML = "<a href='#'></a>", "#" === aItem.firstChild.getAttribute("href");
        }) || addHandle("type|href|height|width", function(e, t, n) {
          if (!n) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }
        }), support.attributes && assert(function(aItem) {
          return aItem.innerHTML = "<input/>", aItem.firstChild.setAttribute("value", ""), "" === aItem.firstChild.getAttribute("value");
        }) || addHandle("value", function(src, canCreateDiscussions, n) {
          if (!n && "input" === src.nodeName.toLowerCase()) {
            return src.defaultValue;
          }
        }), assert(function(e) {
          return null == e.getAttribute("disabled");
        }) || addHandle(value, function(elem, name, n) {
          var val;
          if (!n) {
            return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          }
        }), Sizzle;
      }(window);
      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      jQuery.escapeSelector = Sizzle.escape;
      /**
       * @param {!Object} a
       * @param {string} t
       * @param {?} x
       * @return {?}
       */
      var callback = function S(a, t, x) {
        /** @type {!Array} */
        var s = [];
        /** @type {boolean} */
        var taskOpen = void 0 !== x;
        for (; (a = a[t]) && 9 !== a.nodeType;) {
          if (1 === a.nodeType) {
            if (taskOpen && jQuery(a).is(x)) {
              break;
            }
            s.push(a);
          }
        }
        return s;
      };
      /**
       * @param {!Object} obj
       * @param {!Object} node
       * @return {?}
       */
      var _sibling = function traverseChildNodes(obj, node) {
        /** @type {!Array} */
        var result = [];
        for (; obj; obj = obj.nextSibling) {
          if (1 === obj.nodeType && obj !== node) {
            result.push(obj);
          }
        }
        return result;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      /** @type {!RegExp} */
      var rsingleTag = /^<([a-z][^\/\0>: \t\r\n\f]*)[ \t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      /**
       * @param {(!Function|string)} expr
       * @param {!Array} elems
       * @param {string} not
       * @return {?}
       */
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(nodeToInspect) {
          return 1 === nodeToInspect.nodeType;
        }));
      };
      jQuery.fn.extend({
        find : function find(elem) {
          var i;
          var ret;
          var l = this.length;
          var self = this;
          if ("string" != typeof elem) {
            return this.pushStack(jQuery(elem).filter(function() {
              /** @type {number} */
              i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          /** @type {number} */
          i = 0;
          for (; i < l; i++) {
            jQuery.find(elem, self[i], ret);
          }
          return 1 < l ? jQuery.uniqueSort(ret) : ret;
        },
        filter : function last(name) {
          return this.pushStack(filter(this, name || [], false));
        },
        not : function last(args) {
          return this.pushStack(filter(this, args || [], true));
        },
        is : function is(arg) {
          return !!filter(this, "string" == typeof arg && rneedsContext.test(arg) ? jQuery(arg) : arg || [], false).length;
        }
      });
      var rootjQuery;
      /** @type {!RegExp} */
      var customSelectorReg = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (jQuery.fn.init = function(selector, context, root) {
        var match;
        var a;
        if (!selector) {
          return this;
        }
        if (root = root || rootjQuery, "string" == typeof selector) {
          if (!(match = "<" === selector[0] && ">" === selector[selector.length - 1] && 3 <= selector.length ? [null, selector, null] : customSelectorReg.exec(selector)) || !match[1] && context) {
            return !context || context.jquery ? (context || root).find(selector) : this.constructor(context).find(selector);
          }
          if (match[1]) {
            if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (isFunction(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          }
          return (a = document.getElementById(match[2])) && (this[0] = a, this.length = 1), this;
        }
        return selector.nodeType ? (this[0] = selector, this.length = 1, this) : isFunction(selector) ? void 0 !== root.ready ? root.ready(selector) : selector(jQuery) : jQuery.makeArray(selector, this);
      }).prototype = jQuery.fn;
      rootjQuery = jQuery(document);
      /** @type {!RegExp} */
      var testRxp = /^(?:parents|prev(?:Until|All))/;
      var guaranteedUnique = {
        children : true,
        contents : true,
        next : true,
        prev : true
      };
      jQuery.fn.extend({
        has : function has(name) {
          var targets = jQuery(name, this);
          var l = targets.length;
          return this.filter(function() {
            /** @type {number} */
            var i = 0;
            for (; i < l; i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest : function find(selector, context) {
          var cur;
          /** @type {number} */
          var i = 0;
          var l = this.length;
          /** @type {!Array} */
          var ret = [];
          var pos = "string" != typeof selector && jQuery(selector);
          if (!rneedsContext.test(selector)) {
            for (; i < l; i++) {
              cur = this[i];
              for (; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (pos ? -1 < pos.index(cur) : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selector))) {
                  ret.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(1 < ret.length ? jQuery.uniqueSort(ret) : ret);
        },
        index : function run(elem) {
          return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add : function find(elem, context) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(elem, context))));
        },
        addBack : function end(string) {
          return this.add(null == string ? this.prevObject : this.prevObject.filter(string));
        }
      });
      jQuery.each({
        parent : function parent(n) {
          var level = n.parentNode;
          return level && 11 !== level.nodeType ? level : null;
        },
        parents : function up(tx) {
          return callback(tx, "parentNode");
        },
        parentsUntil : function up(e, fn, t) {
          return callback(e, "parentNode", t);
        },
        next : function next(elem) {
          return sibling(elem, "nextSibling");
        },
        prev : function next(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll : function move(dir) {
          return callback(dir, "nextSibling");
        },
        prevAll : function next(cur) {
          return callback(cur, "previousSibling");
        },
        nextUntil : function create(dir, type, selector) {
          return callback(dir, "nextSibling", selector);
        },
        prevUntil : function move(headers, keys, dir) {
          return callback(headers, "previousSibling", dir);
        },
        siblings : function siblings(elem) {
          return _sibling((elem.parentNode || {}).firstChild, elem);
        },
        children : function siblings(elem) {
          return _sibling(elem.firstChild);
        },
        contents : function init(e) {
          return null != e.contentDocument && getProto(e.contentDocument) ? e.contentDocument : ($(e, "template") && (e = e.content || e), jQuery.merge([], e.childNodes));
        }
      }, function(name, t) {
        /**
         * @param {!Function} s
         * @param {!Function} string
         * @return {?}
         */
        jQuery.fn[name] = function(s, string) {
          var ret = jQuery.map(this, t, s);
          return "Until" !== name.slice(-5) && (string = s), string && "string" == typeof string && (ret = jQuery.filter(string, ret)), 1 < this.length && (guaranteedUnique[name] || jQuery.uniqueSort(ret), testRxp.test(name) && ret.reverse()), this.pushStack(ret);
        };
      });
      /** @type {!RegExp} */
      var a = /[^ \t\r\n\f]+/g;
      /**
       * @param {string} options
       * @return {?}
       */
      jQuery.Callbacks = function(options) {
        var result;
        var pred;
        options = "string" == typeof options ? (result = options, pred = {}, jQuery.each(result.match(a) || [], function(canCreateDiscussions, v) {
          /** @type {boolean} */
          pred[v] = true;
        }), pred) : jQuery.extend({}, options);
        var r;
        var b;
        var j;
        var err;
        /** @type {!Array} */
        var c = [];
        /** @type {!Array} */
        var payload = [];
        /** @type {number} */
        var t = -1;
        /**
         * @return {undefined}
         */
        var f = function fire() {
          err = err || options.once;
          /** @type {boolean} */
          j = r = true;
          for (; payload.length; t = -1) {
            b = payload.shift();
            for (; ++t < c.length;) {
              if (false === c[t].apply(b[0], b[1]) && options.stopOnFalse) {
                t = c.length;
                /** @type {boolean} */
                b = false;
              }
            }
          }
          if (!options.memory) {
            /** @type {boolean} */
            b = false;
          }
          /** @type {boolean} */
          r = false;
          if (err) {
            /** @type {(Array|string)} */
            c = b ? [] : "";
          }
        };
        var self = {
          add : function add() {
            return c && (b && !r && (t = c.length - 1, payload.push(b)), function add(n) {
              jQuery.each(n, function(n, name) {
                if (isFunction(name)) {
                  if (!(options.unique && self.has(name))) {
                    c.push(name);
                  }
                } else {
                  if (name && name.length && "string" !== type(name)) {
                    add(name);
                  }
                }
              });
            }(arguments), b && !r && f()), this;
          },
          remove : function encodeSearch() {
            return jQuery.each(arguments, function(canCreateDiscussions, t) {
              var s;
              for (; -1 < (s = jQuery.inArray(t, c, s));) {
                c.splice(s, 1);
                if (s <= t) {
                  t--;
                }
              }
            }), this;
          },
          has : function remove(e) {
            return e ? -1 < jQuery.inArray(e, c) : 0 < c.length;
          },
          empty : function fire() {
            return c && (c = []), this;
          },
          disable : function remove() {
            return err = payload = [], c = b = "", this;
          },
          disabled : function disabled() {
            return !c;
          },
          lock : function remove() {
            return err = payload = [], b || r || (c = b = ""), this;
          },
          locked : function fire() {
            return !!err;
          },
          fireWith : function fire(data, e) {
            return err || (e = [data, (e = e || []).slice ? e.slice() : e], payload.push(e), r || f()), this;
          },
          fire : function fire() {
            return self.fireWith(this, arguments), this;
          },
          fired : function fire() {
            return !!j;
          }
        };
        return self;
      };
      jQuery.extend({
        Deferred : function Deferred(func) {
          /** @type {!Array} */
          var n = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]];
          /** @type {string} */
          var state = "pending";
          var promise = {
            state : function attach() {
              return state;
            },
            always : function always() {
              return deferred.done(arguments).fail(arguments), this;
            },
            catch : function progress(fn) {
              return promise.then(null, fn);
            },
            pipe : function get() {
              /** @type {!Arguments} */
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(n, function(n, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                /** @type {null} */
                fns = null;
              }).promise();
            },
            then : function get(error, url, w) {
              /**
               * @param {number} deps
               * @param {!Object} d
               * @param {!Function} method
               * @param {boolean} doc
               * @return {?}
               */
              function callback(deps, d, method, doc) {
                return function() {
                  var self = this;
                  /** @type {!Arguments} */
                  var args = arguments;
                  /**
                   * @return {undefined}
                   */
                  var start = function dispatch() {
                    var value;
                    var path;
                    if (!(deps < name)) {
                      if ((value = method.apply(self, args)) === d.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      path = value && ("object" == (typeof value === "undefined" ? "undefined" : _typeof(value)) || "function" == typeof value) && value.then;
                      if (isFunction(path)) {
                        if (doc) {
                          path.call(value, callback(name, d, options, doc), callback(name, d, undefined, doc));
                        } else {
                          name++;
                          path.call(value, callback(name, d, options, doc), callback(name, d, undefined, doc), callback(name, d, options, d.notifyWith));
                        }
                      } else {
                        if (method !== options) {
                          self = void 0;
                          /** @type {!Array} */
                          args = [value];
                        }
                        (doc || d.resolveWith)(self, args);
                      }
                    }
                  };
                  /** @type {function(): undefined} */
                  var handler = doc ? start : function() {
                    try {
                      start();
                    } catch (context) {
                      if (jQuery.Deferred.exceptionHook) {
                        jQuery.Deferred.exceptionHook(context, handler.stackTrace);
                      }
                      if (name <= deps + 1) {
                        if (method !== undefined) {
                          self = void 0;
                          /** @type {!Array} */
                          args = [context];
                        }
                        d.rejectWith(self, args);
                      }
                    }
                  };
                  if (deps) {
                    handler();
                  } else {
                    if (jQuery.Deferred.getStackHook) {
                      handler.stackTrace = jQuery.Deferred.getStackHook();
                    }
                    window.setTimeout(handler);
                  }
                };
              }
              /** @type {number} */
              var name = 0;
              return jQuery.Deferred(function(result) {
                n[0][3].add(callback(0, result, isFunction(w) ? w : options, result.notifyWith));
                n[1][3].add(callback(0, result, isFunction(error) ? error : options));
                n[2][3].add(callback(0, result, isFunction(url) ? url : undefined));
              }).promise();
            },
            promise : function state(context) {
              return null != context ? jQuery.extend(context, promise) : promise;
            }
          };
          var deferred = {};
          return jQuery.each(n, function(i, tuple) {
            var list = tuple[2];
            var stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(function() {
                state = stateString;
              }, n[3 - i][2].disable, n[3 - i][3].disable, n[0][2].lock, n[0][3].lock);
            }
            list.add(tuple[3].fire);
            /**
             * @return {?}
             */
            deferred[tuple[0]] = function() {
              return deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments), this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
        },
        when : function start(next) {
          /** @type {number} */
          var sampleSize = arguments.length;
          var i = sampleSize;
          /** @type {!Array} */
          var elements = Array(i);
          /** @type {!Array<?>} */
          var args = slice.call(arguments);
          var d = jQuery.Deferred();
          /**
           * @param {undefined} i
           * @return {?}
           */
          var updateFn = function updateFn(i) {
            return function(value) {
              elements[i] = this;
              args[i] = 1 < arguments.length ? slice.call(arguments) : value;
              if (!--sampleSize) {
                d.resolveWith(elements, args);
              }
            };
          };
          if (sampleSize <= 1 && (resolve(next, d.done(updateFn(i)).resolve, d.reject, !sampleSize), "pending" === d.state() || isFunction(args[i] && args[i].then))) {
            return d.then();
          }
          for (; i--;) {
            resolve(args[i], updateFn(i), d.reject);
          }
          return d.promise();
        }
      });
      /** @type {!RegExp} */
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      /**
       * @param {?} error
       * @param {?} stack
       * @return {undefined}
       */
      jQuery.Deferred.exceptionHook = function(error, stack) {
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
          window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
      };
      /**
       * @param {?} error
       * @return {undefined}
       */
      jQuery.readyException = function(error) {
        window.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery.Deferred();
      /**
       * @param {!Function} fn
       * @return {?}
       */
      jQuery.fn.ready = function(fn) {
        return readyList.then(fn).catch(function(e) {
          jQuery.readyException(e);
        }), this;
      };
      jQuery.extend({
        isReady : false,
        readyWait : 1,
        ready : function wrap(prepend) {
          if (!((true === prepend ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = true) !== prepend && 0 < --jQuery.readyWait)) {
            readyList.resolveWith(document, [jQuery]);
          }
        }
      });
      jQuery.ready.then = readyList.then;
      if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) {
        window.setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", $__jsx_onload);
        window.addEventListener("load", $__jsx_onload);
      }
      /**
       * @param {string} elems
       * @param {!Function} fn
       * @param {!Object} key
       * @param {?} value
       * @param {number} chainable
       * @param {string} emptyGet
       * @param {boolean} raw
       * @return {?}
       */
      var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
        /** @type {number} */
        var i = 0;
        var len = elems.length;
        /** @type {boolean} */
        var bulk = null == key;
        if ("object" === type(key)) {
          for (i in chainable = true, key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else {
          if (void 0 !== value && (chainable = true, isFunction(value) || (raw = true), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function fn(elem, o, value) {
            return bulk.call(jQuery(elem), value);
          })), fn)) {
            for (; i < len; i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
      };
      /** @type {!RegExp} */
      var _kerningNamesHash_escapeEscape = /^-ms-/;
      /** @type {!RegExp} */
      var rcharset = /-([a-z])/g;
      /**
       * @param {!Object} type
       * @return {?}
       */
      var cb = function attachTouchEvents(type) {
        return 1 === type.nodeType || 9 === type.nodeType || !+type.nodeType;
      };
      /** @type {number} */
      Data.uid = 1;
      Data.prototype = {
        cache : function extract(elem) {
          var value = elem[this.expando];
          return value || (value = {}, cb(elem) && (elem.nodeType ? elem[this.expando] = value : Object.defineProperty(elem, this.expando, {
            value : value,
            configurable : true
          }))), value;
        },
        set : function set(owner, key, type) {
          var name;
          var obj = this.cache(owner);
          if ("string" == typeof key) {
            /** @type {string} */
            obj[camelCase(key)] = type;
          } else {
            for (name in key) {
              obj[camelCase(name)] = key[name];
            }
          }
          return obj;
        },
        get : function get(owner, key) {
          return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access : function access(elem, fn, value) {
          return void 0 === fn || fn && "string" == typeof fn && void 0 === value ? this.get(elem, fn) : (this.set(elem, fn, value), void 0 !== value ? value : fn);
        },
        remove : function remove(owner, name) {
          var i;
          var cache = owner[this.expando];
          if (void 0 !== cache) {
            if (void 0 !== name) {
              i = (name = Array.isArray(name) ? name.map(camelCase) : (name = camelCase(name)) in cache ? [name] : name.match(a) || []).length;
              for (; i--;) {
                delete cache[name[i]];
              }
            }
            if (void 0 === name || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          }
        },
        hasData : function uuid(owner) {
          var cache = owner[this.expando];
          return void 0 !== cache && !jQuery.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data;
      var self = new Data;
      /** @type {!RegExp} */
      var trueRE = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
      /** @type {!RegExp} */
      var dashExpr = /[A-Z]/g;
      jQuery.extend({
        hasData : function off(elem) {
          return self.hasData(elem) || dataPriv.hasData(elem);
        },
        data : function prop(elem, type, value) {
          return self.access(elem, type, value);
        },
        removeData : function groupToJSONCleanChat(group, user) {
          self.remove(group, user);
        },
        _data : function prop(elem, type, i) {
          return dataPriv.access(elem, type, i);
        },
        _removeData : function _removeData(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        data : function set(key, value) {
          var w;
          var name;
          var data;
          var elem = this[0];
          var root = elem && elem.attributes;
          if (void 0 === key) {
            if (this.length && (data = self.get(elem), 1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs"))) {
              w = root.length;
              for (; w--;) {
                if (root[w] && 0 === (name = root[w].name).indexOf("data-")) {
                  name = camelCase(name.slice(5));
                  set(elem, name, data[name]);
                }
              }
              dataPriv.set(elem, "hasDataAttrs", true);
            }
            return data;
          }
          return "object" == (typeof key === "undefined" ? "undefined" : _typeof(key)) ? this.each(function() {
            self.set(this, key);
          }) : access(this, function(name) {
            var result;
            if (elem && void 0 === name) {
              return void 0 !== (result = self.get(elem, key)) || void 0 !== (result = set(elem, key)) ? result : void 0;
            }
            this.each(function() {
              self.set(this, key, name);
            });
          }, null, value, 1 < arguments.length, null, true);
        },
        removeData : function softShowFieldDetails(e) {
          return this.each(function() {
            self.remove(this, e);
          });
        }
      });
      jQuery.extend({
        queue : function refresh(elem, type, data) {
          var q;
          if (elem) {
            return type = (type || "fx") + "queue", q = dataPriv.get(elem, type), data && (!q || Array.isArray(data) ? q = dataPriv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || [];
          }
        },
        dequeue : function move(elem, type) {
          type = type || "fx";
          var item = jQuery.queue(elem, type);
          var enabled = item.length;
          var animate = item.shift();
          var target = jQuery._queueHooks(elem, type);
          if ("inprogress" === animate) {
            animate = item.shift();
            enabled--;
          }
          if (animate) {
            if ("fx" === type) {
              item.unshift("inprogress");
            }
            delete target.stop;
            animate.call(elem, function() {
              jQuery.dequeue(elem, type);
            }, target);
          }
          if (!enabled && target) {
            target.empty.fire();
          }
        },
        _queueHooks : function init(elem, type) {
          /** @type {string} */
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty : jQuery.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery.fn.extend({
        queue : function jump(type, data) {
          /** @type {number} */
          var setter = 2;
          return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if ("fx" === type && "inprogress" !== queue[0]) {
              jQuery.dequeue(this, type);
            }
          });
        },
        dequeue : function reload(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue : function jump(type) {
          return this.queue(type || "fx", []);
        },
        promise : function promise(type, obj) {
          var sel;
          /** @type {number} */
          var r = 1;
          var defer = jQuery.Deferred();
          var elements = this;
          var i = this.length;
          /**
           * @return {undefined}
           */
          var resolve = function resolve() {
            if (!--r) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if ("string" != typeof type) {
            /** @type {string} */
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          for (; i--;) {
            if ((sel = dataPriv.get(elements[i], type + "queueHooks")) && sel.empty) {
              r++;
              sel.empty.add(resolve);
            }
          }
          return resolve(), defer.promise(obj);
        }
      });
      /** @type {string} */
      var FSSource = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      /** @type {!RegExp} */
      var regex = new RegExp("^(?:([+-])=|)(" + FSSource + ")([a-z%]*)$", "i");
      /** @type {!Array} */
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var node = document.documentElement;
      /**
       * @param {!Object} elem
       * @return {?}
       */
      var contains = function hasEmbedExt(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
      };
      var element = {
        composed : true
      };
      if (node.getRootNode) {
        /**
         * @param {!Object} node
         * @return {?}
         */
        contains = function init(node) {
          return jQuery.contains(node.ownerDocument, node) || node.getRootNode(element) === node.ownerDocument;
        };
      }
      /**
       * @param {!Object} element
       * @param {!Object} target
       * @return {?}
       */
      var isHidden = function onShow(element, target) {
        return "none" === (element = target || element).style.display || "" === element.style.display && contains(element) && "none" === jQuery.css(element, "display");
      };
      var elemdisplay = {};
      jQuery.fn.extend({
        show : function alert() {
          return show(this, true);
        },
        hide : function alert() {
          return show(this);
        },
        toggle : function update(state) {
          return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
            if (isHidden(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      var content_elem;
      var input;
      /** @type {!RegExp} */
      var path = /^(?:checkbox|radio)$/i;
      /** @type {!RegExp} */
      var regPseudo = /<([a-z][^\/\0> \t\r\n\f]*)/i;
      /** @type {!RegExp} */
      var opacityRe = /^$|^module$|\/(?:java|ecma)script/i;
      content_elem = document.createDocumentFragment().appendChild(document.createElement("div"));
      (input = document.createElement("input")).setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "t");
      content_elem.appendChild(input);
      support.checkClone = content_elem.cloneNode(true).cloneNode(true).lastChild.checked;
      /** @type {string} */
      content_elem.innerHTML = "<textarea>x</textarea>";
      /** @type {boolean} */
      support.noCloneChecked = !!content_elem.cloneNode(true).lastChild.defaultValue;
      /** @type {string} */
      content_elem.innerHTML = "<option></option>";
      /** @type {boolean} */
      support.option = !!content_elem.lastChild;
      var wrapMap = {
        thead : [1, "<table>", "</table>"],
        col : [2, "<table><colgroup>", "</colgroup></table>"],
        tr : [2, "<table><tbody>", "</tbody></table>"],
        td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default : [0, "", ""]
      };
      /** @type {!Array} */
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      /** @type {!Array} */
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        /** @type {!Array} */
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      /** @type {!RegExp} */
      var re_commas = /<|&#?\w+;/;
      /** @type {!RegExp} */
      var receivedErrorEvents = /^key/;
      /** @type {!RegExp} */
      var receivedOpenEvents = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
      /** @type {!RegExp} */
      var result = /^([^.]*)(?:\.(.+)|)/;
      jQuery.event = {
        global : {},
        add : function add(elem, item, handler, data, selector) {
          var handleObjIn;
          var eventHandle;
          var BROWSER_ENGINES;
          var events;
          var i;
          var handleObj;
          var special;
          var handlers;
          var type;
          var h;
          var origType;
          var elemData = dataPriv.get(elem);
          if (cb(elem)) {
            if (handler.handler) {
              handler = (handleObjIn = handler).handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(node, selector);
            }
            if (!handler.guid) {
              /** @type {number} */
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              /** @type {!Object} */
              events = elemData.events = Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              /** @type {function(!Object): ?} */
              eventHandle = elemData.handle = function(e) {
                return void 0 !== jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            i = (item = (item || "").match(a) || [""]).length;
            for (; i--;) {
              type = origType = (BROWSER_ENGINES = result.exec(item[i]) || [])[1];
              h = (BROWSER_ENGINES[2] || "").split(".").sort();
              if (type) {
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                  type : type,
                  origType : origType,
                  data : data,
                  handler : handler,
                  guid : handler.guid,
                  selector : selector,
                  needsContext : selector && jQuery.expr.match.needsContext.test(selector),
                  namespace : h.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                  /** @type {number} */
                  (handlers = events[type] = []).delegateCount = 0;
                  if (!(special.setup && false !== special.setup.call(elem, data, h, eventHandle))) {
                    if (elem.addEventListener) {
                      elem.addEventListener(type, eventHandle);
                    }
                  }
                }
                if (special.add) {
                  special.add.call(elem, handleObj);
                  if (!handleObj.handler.guid) {
                    handleObj.handler.guid = handler.guid;
                  }
                }
                if (selector) {
                  handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                  handlers.push(handleObj);
                }
                /** @type {boolean} */
                jQuery.event.global[type] = true;
              }
            }
          }
        },
        remove : function init(elem, data, fn, selector, is_enabled) {
          var i;
          var _;
          var tmp;
          var events;
          var t;
          var handleObj;
          var special;
          var handlers;
          var type;
          var h;
          var origType;
          var elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (elemData && (events = elemData.events)) {
            t = (data = (data || "").match(a) || [""]).length;
            for (; t--;) {
              if (type = origType = (tmp = result.exec(data[t]) || [])[1], h = (tmp[2] || "").split(".").sort(), type) {
                special = jQuery.event.special[type] || {};
                handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                _ = i = handlers.length;
                for (; i--;) {
                  handleObj = handlers[i];
                  if (!(!is_enabled && origType !== handleObj.origType || fn && fn.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector))) {
                    handlers.splice(i, 1);
                    if (handleObj.selector) {
                      handlers.delegateCount--;
                    }
                    if (special.remove) {
                      special.remove.call(elem, handleObj);
                    }
                  }
                }
                if (_ && !handlers.length) {
                  if (!(special.teardown && false !== special.teardown.call(elem, h, elemData.handle))) {
                    jQuery.removeEvent(elem, type, elemData.handle);
                  }
                  delete events[type];
                }
              } else {
                for (type in events) {
                  jQuery.event.remove(elem, type + data[t], fn, selector, true);
                }
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          }
        },
        dispatch : function handler(e) {
          var i;
          var j;
          var code;
          var matched;
          var handleObj;
          var handlerQueue;
          /** @type {!Array} */
          var data = new Array(arguments.length);
          var event = jQuery.event.fix(e);
          var handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [];
          var special = jQuery.event.special[event.type] || {};
          data[0] = event;
          /** @type {number} */
          i = 1;
          for (; i < arguments.length; i++) {
            data[i] = arguments[i];
          }
          if (event.delegateTarget = this, !special.preDispatch || false !== special.preDispatch.call(this, event)) {
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            /** @type {number} */
            i = 0;
            for (; (matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
              event.currentTarget = matched.elem;
              /** @type {number} */
              j = 0;
              for (; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
                if (!(event.rnamespace && false !== handleObj.namespace && !event.rnamespace.test(handleObj.namespace))) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  if (void 0 !== (code = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, data)) && false === (event.result = code)) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
            return special.postDispatch && special.postDispatch.call(this, event), event.result;
          }
        },
        handlers : function _dispatchEvent(event, handlers) {
          var i;
          var handleObj;
          var name;
          var matches;
          var fieldOrdinals;
          /** @type {!Array} */
          var handlerQueue = [];
          var delegateCount = handlers.delegateCount;
          var cur = event.target;
          if (delegateCount && cur.nodeType && !("click" === event.type && 1 <= event.button)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (1 === cur.nodeType && ("click" !== event.type || true !== cur.disabled)) {
                /** @type {!Array} */
                matches = [];
                fieldOrdinals = {};
                /** @type {number} */
                i = 0;
                for (; i < delegateCount; i++) {
                  if (void 0 === fieldOrdinals[name = (handleObj = handlers[i]).selector + " "]) {
                    fieldOrdinals[name] = handleObj.needsContext ? -1 < jQuery(name, this).index(cur) : jQuery.find(name, this, null, [cur]).length;
                  }
                  if (fieldOrdinals[name]) {
                    matches.push(handleObj);
                  }
                }
                if (matches.length) {
                  handlerQueue.push({
                    elem : cur,
                    handlers : matches
                  });
                }
              }
            }
          }
          return cur = this, delegateCount < handlers.length && handlerQueue.push({
            elem : cur,
            handlers : handlers.slice(delegateCount)
          }), handlerQueue;
        },
        addProp : function init(prop, handler) {
          Object.defineProperty(jQuery.Event.prototype, prop, {
            enumerable : true,
            configurable : true,
            get : isFunction(handler) ? function() {
              if (this.originalEvent) {
                return handler(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[prop];
              }
            },
            set : function DataNumber(s) {
              Object.defineProperty(this, prop, {
                enumerable : true,
                configurable : true,
                writable : true,
                value : s
              });
            }
          });
        },
        fix : function fire(originalEvent) {
          return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special : {
          load : {
            noBubble : true
          },
          click : {
            setup : function doClick(event) {
              var type = this || event;
              return path.test(type.type) && type.click && $(type, "input") && addEventListener(type, "click", returnTrue), false;
            },
            trigger : function doClick(event) {
              var type = this || event;
              return path.test(type.type) && type.click && $(type, "input") && addEventListener(type, "click"), true;
            },
            _default : function onClick(event) {
              var node = event.target;
              return path.test(node.type) && node.click && $(node, "input") && dataPriv.get(node, "click") || $(node, "a");
            }
          },
          beforeunload : {
            postDispatch : function absorbEvent_(event) {
              if (void 0 !== event.result && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      /**
       * @param {!Object} elem
       * @param {!Object} type
       * @param {?} fn
       * @return {undefined}
       */
      jQuery.removeEvent = function(elem, type, fn) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, fn);
        }
      };
      /**
       * @param {!Object} src
       * @param {string} props
       * @return {?}
       */
      jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
          return new jQuery.Event(src, props);
        }
        if (src && src.type) {
          /** @type {!Object} */
          this.originalEvent = src;
          this.type = src.type;
          /** @type {function(): ?} */
          this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? returnTrue : returnFalse;
          this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          /** @type {!Object} */
          this.type = src;
        }
        if (props) {
          jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        /** @type {boolean} */
        this[jQuery.expando] = true;
      };
      jQuery.Event.prototype = {
        constructor : jQuery.Event,
        isDefaultPrevented : returnFalse,
        isPropagationStopped : returnFalse,
        isImmediatePropagationStopped : returnFalse,
        isSimulated : false,
        preventDefault : function eventHandler() {
          var e = this.originalEvent;
          /** @type {function(): ?} */
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation : function stopPropagation() {
          var e = this.originalEvent;
          /** @type {function(): ?} */
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation : function eventHandler() {
          var e = this.originalEvent;
          /** @type {function(): ?} */
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        altKey : true,
        bubbles : true,
        cancelable : true,
        changedTouches : true,
        ctrlKey : true,
        detail : true,
        eventPhase : true,
        metaKey : true,
        pageX : true,
        pageY : true,
        shiftKey : true,
        view : true,
        char : true,
        code : true,
        charCode : true,
        key : true,
        keyCode : true,
        button : true,
        buttons : true,
        clientX : true,
        clientY : true,
        offsetX : true,
        offsetY : true,
        pointerId : true,
        pointerType : true,
        screenX : true,
        screenY : true,
        targetTouches : true,
        toElement : true,
        touches : true,
        which : function onKeyPress(e) {
          var button = e.button;
          return null == e.which && receivedErrorEvents.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== button && receivedOpenEvents.test(e.type) ? 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0 : e.which;
        }
      }, jQuery.event.addProp);
      jQuery.each({
        focus : "focusin",
        blur : "focusout"
      }, function(name, fix) {
        jQuery.event.special[name] = {
          setup : function go_to_require() {
            return addEventListener(this, name, constructor), false;
          },
          trigger : function go_to_require() {
            return addEventListener(this, name), true;
          },
          delegateType : fix
        };
      });
      jQuery.each({
        mouseenter : "mouseover",
        mouseleave : "mouseout",
        pointerenter : "pointerover",
        pointerleave : "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType : fix,
          bindType : fix,
          handle : function handle(event) {
            var _ref12;
            var target = event.relatedTarget;
            var handleObj = event.handleObj;
            return target && (target === this || jQuery.contains(this, target)) || (event.type = handleObj.origType, _ref12 = handleObj.handler.apply(this, arguments), event.type = fix), _ref12;
          }
        };
      });
      jQuery.fn.extend({
        on : function notify(key, data, obj, args) {
          return debug(this, key, data, obj, args);
        },
        one : function add(fn, size, type, args) {
          return debug(this, fn, size, type, args, 1);
        },
        off : function off(types, callback, fn) {
          var handleObj;
          var type;
          if (types && types.preventDefault && types.handleObj) {
            return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
          }
          if ("object" == (typeof types === "undefined" ? "undefined" : _typeof(types))) {
            for (type in types) {
              this.off(type, callback, types[type]);
            }
            return this;
          }
          return false !== callback && "function" != typeof callback || (fn = callback, callback = void 0), false === fn && (fn = returnFalse), this.each(function() {
            jQuery.event.remove(this, types, fn, callback);
          });
        }
      });
      /** @type {!RegExp} */
      var _tacet = /<script|<style|<link/i;
      /** @type {!RegExp} */
      var reValidName = /checked\s*(?:[^=]|=\s*.checked.)/i;
      /** @type {!RegExp} */
      var codePoint = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      jQuery.extend({
        htmlPrefilter : function jsonFixer(value) {
          return value;
        },
        clone : function remove(elem, array, n) {
          var i;
          var l;
          var srcElements;
          var destElements;
          var src;
          var target;
          var undefined;
          var clone = elem.cloneNode(true);
          var inPage = contains(elem);
          if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) {
            destElements = getAll(clone);
            /** @type {number} */
            i = 0;
            l = (srcElements = getAll(elem)).length;
            for (; i < l; i++) {
              src = srcElements[i];
              if ("input" === (undefined = (target = destElements[i]).nodeName.toLowerCase()) && path.test(src.type)) {
                target.checked = src.checked;
              } else {
                if (!("input" !== undefined && "textarea" !== undefined)) {
                  target.defaultValue = src.defaultValue;
                }
              }
            }
          }
          if (array) {
            if (n) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              /** @type {number} */
              i = 0;
              l = srcElements.length;
              for (; i < l; i++) {
                init(srcElements[i], destElements[i]);
              }
            } else {
              init(elem, clone);
            }
          }
          return 0 < (destElements = getAll(clone, "script")).length && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone;
        },
        cleanData : function handler(tmp) {
          var data;
          var elem;
          var type;
          var special = jQuery.event.special;
          /** @type {number} */
          var i = 0;
          for (; void 0 !== (elem = tmp[i]); i++) {
            if (cb(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[self.expando]) {
                elem[self.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        detach : function remove(key) {
          return remove(this, key, true);
        },
        remove : function remove(selector) {
          return remove(this, selector);
        },
        text : function html(value) {
          return access(this, function(value) {
            return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
              if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
                this.textContent = value;
              }
            });
          }, null, value, arguments.length);
        },
        append : function append() {
          return domManip(this, arguments, function(name) {
            if (!(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType)) {
              add(this, name).appendChild(name);
            }
          });
        },
        prepend : function replaceWith() {
          return domManip(this, arguments, function(td) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var tr = add(this, td);
              tr.insertBefore(td, tr.firstChild);
            }
          });
        },
        before : function replaceWith() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after : function replaceWith() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty : function remove() {
          var elem;
          /** @type {number} */
          var i = 0;
          for (; null != (elem = this[i]); i++) {
            if (1 === elem.nodeType) {
              jQuery.cleanData(getAll(elem, false));
              /** @type {string} */
              elem.textContent = "";
            }
          }
          return this;
        },
        clone : function layout(e, i) {
          return e = null != e && e, i = null == i ? e : i, this.map(function() {
            return jQuery.clone(this, e, i);
          });
        },
        html : function initialize(value) {
          return access(this, function(value) {
            var elem = this[0] || {};
            /** @type {number} */
            var thatpos = 0;
            var i = this.length;
            if (void 0 === value && 1 === elem.nodeType) {
              return elem.innerHTML;
            }
            if ("string" == typeof value && !_tacet.test(value) && !wrapMap[(regPseudo.exec(value) || ["", ""])[1].toLowerCase()]) {
              value = jQuery.htmlPrefilter(value);
              try {
                for (; thatpos < i; thatpos++) {
                  if (1 === (elem = this[thatpos] || {}).nodeType) {
                    jQuery.cleanData(getAll(elem, false));
                    /** @type {number} */
                    elem.innerHTML = value;
                  }
                }
                /** @type {number} */
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value);
            }
          }, null, value, arguments.length);
        },
        replaceWith : function render() {
          /** @type {!Array} */
          var ignored = [];
          return domManip(this, arguments, function(t) {
            var p = this.parentNode;
            if (jQuery.inArray(this, ignored) < 0) {
              jQuery.cleanData(getAll(this));
              if (p) {
                p.replaceChild(t, this);
              }
            }
          }, ignored);
        }
      });
      jQuery.each({
        appendTo : "append",
        prependTo : "prepend",
        insertBefore : "before",
        insertAfter : "after",
        replaceAll : "replaceWith"
      }, function(original, n) {
        /**
         * @param {!Object} e
         * @return {?}
         */
        jQuery.fn[original] = function(e) {
          var what;
          /** @type {!Array} */
          var stack = [];
          var a = jQuery(e);
          /** @type {number} */
          var last = a.length - 1;
          /** @type {number} */
          var i = 0;
          for (; i <= last; i++) {
            what = i === last ? this : this.clone(true);
            jQuery(a[i])[n](what);
            push.apply(stack, what.get());
          }
          return this.pushStack(stack);
        };
      });
      /** @type {!RegExp} */
      var rnumnonpx = new RegExp("^(" + FSSource + ")(?!px)[a-z%]+$", "i");
      /**
       * @param {!Object} elem
       * @return {?}
       */
      var getStyles = function open(elem) {
        var win = elem.ownerDocument.defaultView;
        return win && win.opener || (win = window), win.getComputedStyle(elem);
      };
      /**
       * @param {!HTMLElement} context
       * @param {!Array} obj
       * @param {!Function} f
       * @return {?}
       */
      var swap = function subscribe(context, obj, f) {
        var request;
        var key;
        var pyobj = {};
        for (key in obj) {
          pyobj[key] = context.style[key];
          context.style[key] = obj[key];
        }
        for (key in request = f.call(context), obj) {
          context.style[key] = pyobj[key];
        }
        return request;
      };
      /** @type {!RegExp} */
      var inlineAttributeIgnoreCommentRegex = new RegExp(cssExpand.join("|"), "i");
      !function() {
        /**
         * @return {undefined}
         */
        function computeStyleTests() {
          if (div) {
            /** @type {string} */
            parent.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            /** @type {string} */
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            node.appendChild(parent).appendChild(div);
            var style = window.getComputedStyle(div);
            /** @type {boolean} */
            r = "1%" !== style.top;
            /** @type {boolean} */
            s = 12 === parseRound(style.marginLeft);
            /** @type {string} */
            div.style.right = "60%";
            /** @type {boolean} */
            o = 36 === parseRound(style.right);
            /** @type {boolean} */
            a = 36 === parseRound(style.width);
            /** @type {string} */
            div.style.position = "absolute";
            /** @type {boolean} */
            i = 12 === parseRound(div.offsetWidth / 3);
            node.removeChild(parent);
            /** @type {null} */
            div = null;
          }
        }
        /**
         * @param {number} fontSize
         * @return {?}
         */
        function parseRound(fontSize) {
          return Math.round(parseFloat(fontSize));
        }
        var r;
        var a;
        var i;
        var o;
        var u;
        var s;
        var parent = document.createElement("div");
        var div = document.createElement("div");
        if (div.style) {
          /** @type {string} */
          div.style.backgroundClip = "content-box";
          /** @type {string} */
          div.cloneNode(true).style.backgroundClip = "";
          /** @type {boolean} */
          support.clearCloneStyle = "content-box" === div.style.backgroundClip;
          jQuery.extend(support, {
            boxSizingReliable : function boxSizingReliable() {
              return computeStyleTests(), a;
            },
            pixelBoxStyles : function pixelPosition() {
              return computeStyleTests(), o;
            },
            pixelPosition : function pixelPosition() {
              return computeStyleTests(), r;
            },
            reliableMarginLeft : function reliableMarginLeft() {
              return computeStyleTests(), s;
            },
            scrollboxSize : function pixelPosition() {
              return computeStyleTests(), i;
            },
            reliableTrDimensions : function _findLineHeight() {
              var c;
              var e;
              var r;
              var a;
              return null == u && (c = document.createElement("table"), e = document.createElement("tr"), r = document.createElement("div"), c.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", r.style.height = "9px", node.appendChild(c).appendChild(e).appendChild(r), a = window.getComputedStyle(e), u = 3 < parseInt(a.height), node.removeChild(c)), u;
            }
          });
        }
      }();
      /** @type {!Array} */
      var prefixes = ["Webkit", "Moz", "ms"];
      var testStyle = document.createElement("div").style;
      var aSupports = {};
      /** @type {!RegExp} */
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
      /** @type {!RegExp} */
      var ngTranslationProvider = /^--/;
      var cssShow = {
        position : "absolute",
        visibility : "hidden",
        display : "block"
      };
      var cssNormalTransform = {
        letterSpacing : "0",
        fontWeight : "400"
      };
      jQuery.extend({
        cssHooks : {
          opacity : {
            get : function show(elem, data) {
              if (data) {
                var to = curCSS(elem, "opacity");
                return "" === to ? "1" : to;
              }
            }
          }
        },
        cssNumber : {
          animationIterationCount : true,
          columnCount : true,
          fillOpacity : true,
          flexGrow : true,
          flexShrink : true,
          fontWeight : true,
          gridArea : true,
          gridColumn : true,
          gridColumnEnd : true,
          gridColumnStart : true,
          gridRow : true,
          gridRowEnd : true,
          gridRowStart : true,
          lineHeight : true,
          opacity : true,
          order : true,
          orphans : true,
          widows : true,
          zIndex : true,
          zoom : true
        },
        cssProps : {},
        style : function style(elem, name, value, extra) {
          if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
            var ret;
            var current;
            var hooks;
            var prop = camelCase(name);
            /** @type {boolean} */
            var s = ngTranslationProvider.test(name);
            var style = elem.style;
            if (s || (name = camelize(prop)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[prop], void 0 === value) {
              return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, extra)) ? ret : style[name];
            }
            if ("string" == (current = typeof value === "undefined" ? "undefined" : _typeof(value)) && (ret = regex.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              /** @type {string} */
              current = "number";
            }
            if (null != value && value == value) {
              if (!("number" !== current || s)) {
                /** @type {string} */
                value = value + (ret && ret[3] || (jQuery.cssNumber[prop] ? "" : "px"));
              }
              if (!(support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background"))) {
                /** @type {string} */
                style[name] = "inherit";
              }
              if (!(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)))) {
                if (s) {
                  style.setProperty(name, value);
                } else {
                  /** @type {string} */
                  style[name] = value;
                }
              }
            }
          }
        },
        css : function css(key, name, value, styles) {
          var val;
          var length;
          var hooks;
          var prop = camelCase(name);
          return ngTranslationProvider.test(name) || (name = camelize(prop)), (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[prop]) && "get" in hooks && (val = hooks.get(key, true, value)), void 0 === val && (val = curCSS(key, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === value || value ? (length = parseFloat(val), true === value || isFinite(length) ? length || 0 : val) : val;
        }
      });
      jQuery.each(["height", "width"], function(canCreateDiscussions, name) {
        jQuery.cssHooks[name] = {
          get : function start(elem, data, options) {
            if (data) {
              return !rdisplayswap.test(jQuery.css(elem, "display")) || elem.getClientRects().length && elem.getBoundingClientRect().width ? load(elem, name, options) : swap(elem, cssShow, function() {
                return load(elem, name, options);
              });
            }
          },
          set : function init(elem, value, fn) {
            var matches;
            var styles = getStyles(elem);
            /** @type {boolean} */
            var delegator = !support.scrollboxSize() && "absolute" === styles.position;
            var valueIsBorderBox = (delegator || fn) && "border-box" === jQuery.css(elem, "boxSizing", false, styles);
            var res = fn ? augmentWidthOrHeight(elem, name, fn, valueIsBorderBox, styles) : 0;
            return valueIsBorderBox && delegator && (res = res - Math.ceil(elem["offset" + name[0].toUpperCase() + name.slice(1)] - parseFloat(styles[name]) - augmentWidthOrHeight(elem, name, "border", false, styles) - .5)), res && (matches = regex.exec(value)) && "px" !== (matches[3] || "px") && (elem.style[name] = value, value = jQuery.css(elem, name)), done(0, value, res);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, canCreateDiscussions) {
        if (canCreateDiscussions) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft : 0
          }, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      });
      jQuery.each({
        margin : "",
        padding : "",
        border : "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          expand : function expand(expected) {
            /** @type {number} */
            var i = 0;
            var expanded = {};
            /** @type {!Array} */
            var stops = "string" == typeof expected ? expected.split(" ") : [expected];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = stops[i] || stops[i - 2] || stops[0];
            }
            return expanded;
          }
        };
        if ("margin" !== prefix) {
          /** @type {function(!Object, !Object, string): ?} */
          jQuery.cssHooks[prefix + suffix].set = done;
        }
      });
      jQuery.fn.extend({
        css : function add(name, value) {
          return access(this, function(elem, name, undefined) {
            var styles;
            var l;
            var map = {};
            /** @type {number} */
            var i = 0;
            if (Array.isArray(name)) {
              styles = getStyles(elem);
              l = name.length;
              for (; i < l; i++) {
                map[name[i]] = jQuery.css(elem, name[i], false, styles);
              }
              return map;
            }
            return void 0 !== undefined ? jQuery.style(elem, name, undefined) : jQuery.css(elem, name);
          }, name, value, 1 < arguments.length);
        }
      });
      ((jQuery.Tween = Tween).prototype = {
        constructor : Tween,
        init : function init(domElem, options, prop, end, easing, unit) {
          /** @type {!Element} */
          this.elem = domElem;
          /** @type {!Object} */
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          /** @type {!Object} */
          this.options = options;
          this.start = this.now = this.cur();
          /** @type {number} */
          this.end = end;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur : function handler() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run : function run(percent) {
          var eased;
          var hooks = Tween.propHooks[this.prop];
          return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
        }
      }).init.prototype = Tween.prototype;
      (Tween.propHooks = {
        _default : {
          get : function get(s) {
            var fitWidth;
            return 1 !== s.elem.nodeType || null != s.elem[s.prop] && null == s.elem.style[s.prop] ? s.elem[s.prop] : (fitWidth = jQuery.css(s.elem, s.prop, "")) && "auto" !== fitWidth ? fitWidth : 0;
          },
          set : function set(tween) {
            if (jQuery.fx.step[tween.prop]) {
              jQuery.fx.step[tween.prop](tween);
            } else {
              if (1 !== tween.elem.nodeType || !jQuery.cssHooks[tween.prop] && null == tween.elem.style[camelize(tween.prop)]) {
                tween.elem[tween.prop] = tween.now;
              } else {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              }
            }
          }
        }
      }).scrollTop = Tween.propHooks.scrollLeft = {
        set : function set(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery.easing = {
        linear : function jsonFixer(value) {
          return value;
        },
        swing : function swing(p) {
          return .5 - Math.cos(p * Math.PI) / 2;
        },
        _default : "swing"
      };
      /** @type {function(!Element, !Object, !Object, number, string, !Object): undefined} */
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow;
      var nt;
      var elem;
      var opt;
      /** @type {!RegExp} */
      var contribRegex = /^(?:toggle|show|hide)$/;
      /** @type {!RegExp} */
      var rrun = /queueHooks$/;
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners : {
          "*" : [function(prop, value) {
            var tween = this.createTween(prop, value);
            return adjustCSS(tween.elem, prop, regex.exec(value), tween), tween;
          }]
        },
        tweener : function comboFromEvent(item, e) {
          if (isFunction(item)) {
            /** @type {!Object} */
            e = item;
            /** @type {!Array} */
            item = ["*"];
          } else {
            item = item.match(a);
          }
          var prop;
          /** @type {number} */
          var j = 0;
          var z = item.length;
          for (; j < z; j++) {
            prop = item[j];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(e);
          }
        },
        prefilters : [function(elem, props, config) {
          var prop;
          var value;
          var matched;
          var hooks;
          var oldfire;
          var tween;
          var restoreDisplay;
          var display;
          /** @type {boolean} */
          var d = "width" in props || "height" in props;
          var anim = this;
          var orig = {};
          var style = elem.style;
          var hidden = elem.nodeType && isHidden(elem);
          var dataShow = dataPriv.get(elem, "fxshow");
          for (prop in config.queue || (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          }), hooks.unqueued++, anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          })), props) {
            if (value = props[prop], contribRegex.test(value)) {
              if (delete props[prop], matched = matched || "toggle" === value, value === (hidden ? "hide" : "show")) {
                if ("show" !== value || !dataShow || void 0 === dataShow[prop]) {
                  continue;
                }
                /** @type {boolean} */
                hidden = true;
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          if ((tween = !jQuery.isEmptyObject(props)) || !jQuery.isEmptyObject(orig)) {
            for (prop in d && 1 === elem.nodeType && (config.overflow = [style.overflow, style.overflowX, style.overflowY], null == (restoreDisplay = dataShow && dataShow.display) && (restoreDisplay = dataPriv.get(elem, "display")), "none" === (display = jQuery.css(elem, "display")) && (restoreDisplay ? display = restoreDisplay : (show([elem], true), restoreDisplay = elem.style.display || restoreDisplay, display = jQuery.css(elem, "display"), show([elem]))), ("inline" === display || "inline-block" === 
            display && null != restoreDisplay) && "none" === jQuery.css(elem, "float") && (tween || (anim.done(function() {
              style.display = restoreDisplay;
            }), null == restoreDisplay && (display = style.display, restoreDisplay = "none" === display ? "" : display)), style.display = "inline-block")), config.overflow && (style.overflow = "hidden", anim.always(function() {
              style.overflow = config.overflow[0];
              style.overflowX = config.overflow[1];
              style.overflowY = config.overflow[2];
            })), tween = false, orig) {
              if (!tween) {
                if (dataShow) {
                  if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                  }
                } else {
                  dataShow = dataPriv.access(elem, "fxshow", {
                    display : restoreDisplay
                  });
                }
                if (matched) {
                  /** @type {boolean} */
                  dataShow.hidden = !hidden;
                }
                if (hidden) {
                  show([elem], true);
                }
                anim.done(function() {
                  for (prop in hidden || show([elem]), dataPriv.remove(elem, "fxshow"), orig) {
                    jQuery.style(elem, prop, orig[prop]);
                  }
                });
              }
              tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
              if (!(prop in dataShow)) {
                dataShow[prop] = tween.start;
                if (hidden) {
                  tween.end = tween.start;
                  /** @type {number} */
                  tween.start = 0;
                }
              }
            }
          }
        }],
        prefilter : function remove(callback, sid) {
          if (sid) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      /**
       * @param {string} value
       * @param {string} easing
       * @param {string} fn
       * @return {?}
       */
      jQuery.speed = function(value, easing, fn) {
        var opt = value && "object" == (typeof value === "undefined" ? "undefined" : _typeof(value)) ? jQuery.extend({}, value) : {
          complete : fn || !fn && easing || isFunction(value) && value,
          duration : value,
          easing : fn && easing || easing && !isFunction(easing) && easing
        };
        return jQuery.fx.off ? opt.duration = 0 : "number" != typeof opt.duration && (opt.duration in jQuery.fx.speeds ? opt.duration = jQuery.fx.speeds[opt.duration] : opt.duration = jQuery.fx.speeds._default), null != opt.queue && true !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        }, opt;
      };
      jQuery.fn.extend({
        fadeTo : function animate(fn, val, delay, callback) {
          return this.filter(isHidden).css("opacity", 0).show().end().animate({
            opacity : val
          }, fn, delay, callback);
        },
        animate : function animate(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop);
          var optall = jQuery.speed(speed, easing, callback);
          /**
           * @return {undefined}
           */
          var args = function doAnimation() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          return args.finish = args, empty || false === optall.queue ? this.each(args) : this.queue(optall.queue, args);
        },
        stop : function init(type, t, i) {
          /**
           * @param {!Object} element
           * @return {undefined}
           */
          var printUpdate = function setUpElement(element) {
            var state = element.stop;
            delete element.stop;
            state(i);
          };
          return "string" != typeof type && (i = t, t = type, type = void 0), t && this.queue(type || "fx", []), this.each(function() {
            /** @type {boolean} */
            var s = true;
            /** @type {(boolean|string)} */
            var index = null != type && type + "queueHooks";
            /** @type {!Array} */
            var timers = jQuery.timers;
            var data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                printUpdate(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  printUpdate(data[index]);
                }
              }
            }
            /** @type {number} */
            index = timers.length;
            for (; index--;) {
              if (!(timers[index].elem !== this || null != type && timers[index].queue !== type)) {
                timers[index].anim.stop(i);
                /** @type {boolean} */
                s = false;
                timers.splice(index, 1);
              }
            }
            if (!(!s && i)) {
              jQuery.dequeue(this, type);
            }
          });
        },
        finish : function init(type) {
          return false !== type && (type = type || "fx"), this.each(function() {
            var index;
            var data = dataPriv.get(this);
            var queue = data[type + "queue"];
            var hooks = data[type + "queueHooks"];
            /** @type {!Array} */
            var timers = jQuery.timers;
            var length = queue ? queue.length : 0;
            /** @type {boolean} */
            data.finish = true;
            jQuery.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            /** @type {number} */
            index = timers.length;
            for (; index--;) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            /** @type {number} */
            index = 0;
            for (; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function(canCreateDiscussions, name) {
        var cssFn = jQuery.fn[name];
        /**
         * @param {!Object} x
         * @param {string} callback
         * @param {string} options
         * @return {?}
         */
        jQuery.fn[name] = function(x, callback, options) {
          return null == x || "boolean" == typeof x ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), x, callback, options);
        };
      });
      jQuery.each({
        slideDown : genFx("show"),
        slideUp : genFx("hide"),
        slideToggle : genFx("toggle"),
        fadeIn : {
          opacity : "show"
        },
        fadeOut : {
          opacity : "hide"
        },
        fadeToggle : {
          opacity : "toggle"
        }
      }, function(original, props) {
        /**
         * @param {!Function} speed
         * @param {string} callback
         * @param {string} options
         * @return {?}
         */
        jQuery.fn[original] = function(speed, callback, options) {
          return this.animate(props, speed, callback, options);
        };
      });
      /** @type {!Array} */
      jQuery.timers = [];
      /**
       * @return {undefined}
       */
      jQuery.fx.tick = function() {
        var maxBet;
        /** @type {number} */
        var i = 0;
        /** @type {!Array} */
        var timers = jQuery.timers;
        /** @type {number} */
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          if (!((maxBet = timers[i])() || timers[i] !== maxBet)) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = void 0;
      };
      /**
       * @param {?} url
       * @return {undefined}
       */
      jQuery.fx.timer = function(url) {
        jQuery.timers.push(url);
        jQuery.fx.start();
      };
      /** @type {number} */
      jQuery.fx.interval = 13;
      /**
       * @return {undefined}
       */
      jQuery.fx.start = function() {
        if (!nt) {
          /** @type {boolean} */
          nt = true;
          step();
        }
      };
      /**
       * @return {undefined}
       */
      jQuery.fx.stop = function() {
        /** @type {null} */
        nt = null;
      };
      jQuery.fx.speeds = {
        slow : 600,
        fast : 200,
        _default : 400
      };
      /**
       * @param {!Object} time
       * @param {!Object} type
       * @return {?}
       */
      jQuery.fn.delay = function(time, type) {
        return time = jQuery.fx && jQuery.fx.speeds[time] || time, type = type || "fx", this.queue(type, function(n, incoming_item) {
          var id = window.setTimeout(n, time);
          /**
           * @return {undefined}
           */
          incoming_item.stop = function() {
            window.clearTimeout(id);
          };
        });
      };
      elem = document.createElement("input");
      opt = document.createElement("select").appendChild(document.createElement("option"));
      /** @type {string} */
      elem.type = "checkbox";
      /** @type {boolean} */
      support.checkOn = "" !== elem.value;
      support.optSelected = opt.selected;
      /** @type {string} */
      (elem = document.createElement("input")).value = "t";
      /** @type {string} */
      elem.type = "radio";
      /** @type {boolean} */
      support.radioValue = "t" === elem.value;
      var boolHook;
      var attrHandle = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        attr : function prop(value, name) {
          return access(this, jQuery.attr, value, name, 1 < arguments.length);
        },
        removeAttr : function removeAttr(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        attr : function test(elem, name, value) {
          var ret;
          var hooks;
          var type = elem.nodeType;
          if (3 !== type && 8 !== type && 2 !== type) {
            return void 0 === elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === type && jQuery.isXMLDoc(elem) || (hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? 
            ret : null == (ret = jQuery.find.attr(elem, name)) ? void 0 : ret);
          }
        },
        attrHooks : {
          type : {
            set : function save(item, value) {
              if (!support.radioValue && "radio" === value && $(item, "input")) {
                var n = item.value;
                return item.setAttribute("type", value), n && (item.value = n), value;
              }
            }
          }
        },
        removeAttr : function _treeWalkerFilter(node, element) {
          var b;
          /** @type {number} */
          var r = 0;
          var ret = element && element.match(a);
          if (ret && 1 === node.nodeType) {
            for (; b = ret[r++];) {
              node.removeAttribute(b);
            }
          }
        }
      });
      boolHook = {
        set : function set(elem, value, name) {
          return false === value ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), name;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(canCreateDiscussions, name) {
        var n = attrHandle[name] || jQuery.find.attr;
        /**
         * @param {undefined} prev
         * @param {string} status
         * @param {number} s
         * @return {?}
         */
        attrHandle[name] = function(prev, status, s) {
          var ret;
          var handle;
          var lowercaseName = status.toLowerCase();
          return s || (handle = attrHandle[lowercaseName], attrHandle[lowercaseName] = ret, ret = null != n(prev, status, s) ? lowercaseName : null, attrHandle[lowercaseName] = handle), ret;
        };
      });
      /** @type {!RegExp} */
      var inputNodeNames = /^(?:input|select|textarea|button)$/i;
      /** @type {!RegExp} */
      var srsRegex = /^(?:a|area)$/i;
      jQuery.fn.extend({
        prop : function prop(name, value) {
          return access(this, jQuery.prop, name, value, 1 < arguments.length);
        },
        removeProp : function collapseOrExpand(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        prop : function prop(elem, name, value) {
          var ret;
          var hooks;
          var type = elem.nodeType;
          if (3 !== type && 8 !== type && 2 !== type) {
            return 1 === type && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
          }
        },
        propHooks : {
          tabIndex : {
            get : function get(target) {
              var b = jQuery.find.attr(target, "tabindex");
              return b ? parseInt(b, 10) : inputNodeNames.test(target.nodeName) || srsRegex.test(target.nodeName) && target.href ? 0 : -1;
            }
          }
        },
        propFix : {
          for : "htmlFor",
          class : "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          get : function get(elem) {
            var parent = elem.parentNode;
            return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
          },
          set : function set(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });
      jQuery.fn.extend({
        addClass : function init(value) {
          var result;
          var elem;
          var d;
          var i;
          var e;
          var j;
          var set;
          /** @type {number} */
          var s = 0;
          if (isFunction(value)) {
            return this.each(function(i) {
              jQuery(this).addClass(value.call(this, i, getClass(this)));
            });
          }
          if ((result = format(value)).length) {
            for (; elem = this[s++];) {
              if (i = getClass(elem), d = 1 === elem.nodeType && " " + map(i) + " ") {
                /** @type {number} */
                j = 0;
                for (; e = result[j++];) {
                  if (d.indexOf(" " + e + " ") < 0) {
                    /** @type {string} */
                    d = d + (e + " ");
                  }
                }
                if (i !== (set = map(d))) {
                  elem.setAttribute("class", set);
                }
              }
            }
          }
          return this;
        },
        removeClass : function init(value) {
          var result;
          var elem;
          var p;
          var i;
          var activeObserveHandle;
          var j;
          var r;
          /** @type {number} */
          var s = 0;
          if (isFunction(value)) {
            return this.each(function(i) {
              jQuery(this).removeClass(value.call(this, i, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          if ((result = format(value)).length) {
            for (; elem = this[s++];) {
              if (i = getClass(elem), p = 1 === elem.nodeType && " " + map(i) + " ") {
                /** @type {number} */
                j = 0;
                for (; activeObserveHandle = result[j++];) {
                  for (; -1 < p.indexOf(" " + activeObserveHandle + " ");) {
                    /** @type {string} */
                    p = p.replace(" " + activeObserveHandle + " ", " ");
                  }
                }
                if (i !== (r = map(p))) {
                  elem.setAttribute("class", r);
                }
              }
            }
          }
          return this;
        },
        toggleClass : function init(value, stateVal) {
          var undefined = typeof value === "undefined" ? "undefined" : _typeof(value);
          /** @type {boolean} */
          var r = "string" === undefined || Array.isArray(value);
          return "boolean" == typeof stateVal && r ? stateVal ? this.addClass(value) : this.removeClass(value) : isFunction(value) ? this.each(function(i) {
            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
          }) : this.each(function() {
            var className;
            var checked;
            var $body;
            var query;
            if (r) {
              /** @type {number} */
              checked = 0;
              $body = jQuery(this);
              query = format(value);
              for (; className = query[checked++];) {
                if ($body.hasClass(className)) {
                  $body.removeClass(className);
                } else {
                  $body.addClass(className);
                }
              }
            } else {
              if (!(void 0 !== value && "boolean" !== undefined)) {
                if (className = getClass(this)) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute("class", className || false === value ? "" : dataPriv.get(this, "__className__") || "");
                }
              }
            }
          });
        },
        hasClass : function recurse(elem) {
          var exactLanguageCode;
          var object;
          /** @type {number} */
          var r = 0;
          /** @type {string} */
          exactLanguageCode = " " + elem + " ";
          for (; object = this[r++];) {
            if (1 === object.nodeType && -1 < (" " + map(getClass(object)) + " ").indexOf(exactLanguageCode)) {
              return true;
            }
          }
          return false;
        }
      });
      /** @type {!RegExp} */
      var n = /\r/g;
      jQuery.fn.extend({
        val : function setup(name) {
          var hooks;
          var value;
          var m;
          var elem = this[0];
          return arguments.length ? (m = isFunction(name), this.each(function(nameFn) {
            var value;
            if (1 === this.nodeType) {
              if (null == (value = m ? name.call(this, nameFn, jQuery(this).val()) : name)) {
                /** @type {string} */
                value = "";
              } else {
                if ("number" == typeof value) {
                  /** @type {string} */
                  value = value + "";
                } else {
                  if (Array.isArray(value)) {
                    value = jQuery.map(value, function(value) {
                      return null == value ? "" : value + "";
                    });
                  }
                }
              }
              if (!((hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && void 0 !== hooks.set(this, value, "value"))) {
                this.value = value;
              }
            }
          })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && void 0 !== (value = hooks.get(elem, "value")) ? value : "string" == typeof(value = elem.value) ? value.replace(n, "") : null == value ? "" : value : void 0;
        }
      });
      jQuery.extend({
        valHooks : {
          option : {
            get : function get(value) {
              var decodedValue = jQuery.find.attr(value, "value");
              return null != decodedValue ? decodedValue : map(jQuery.text(value));
            }
          },
          select : {
            get : function select(el) {
              var result;
              var o;
              var i;
              var ops = el.options;
              var index = el.selectedIndex;
              /** @type {boolean} */
              var one = "select-one" === el.type;
              /** @type {(Array|null)} */
              var values = one ? null : [];
              var max = one ? index + 1 : ops.length;
              i = index < 0 ? max : one ? index : 0;
              for (; i < max; i++) {
                if (((o = ops[i]).selected || i === index) && !o.disabled && (!o.parentNode.disabled || !$(o.parentNode, "optgroup"))) {
                  if (result = jQuery(o).val(), one) {
                    return result;
                  }
                  values.push(result);
                }
              }
              return values;
            },
            set : function set(context, value) {
              var outputFn;
              var b;
              var a = context.options;
              var result = jQuery.makeArray(value);
              var i = a.length;
              for (; i--;) {
                if ((b = a[i]).selected = -1 < jQuery.inArray(jQuery.valHooks.option.get(b), result)) {
                  /** @type {boolean} */
                  outputFn = true;
                }
              }
              return outputFn || (context.selectedIndex = -1), result;
            }
          }
        }
      });
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
          set : function set(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = -1 < jQuery.inArray(jQuery(elem).val(), value);
            }
          }
        };
        if (!support.checkOn) {
          /**
           * @param {!Object} elem
           * @return {?}
           */
          jQuery.valHooks[this].get = function(elem) {
            return null === elem.getAttribute("value") ? "on" : elem.value;
          };
        }
      });
      /** @type {boolean} */
      support.focusin = "onfocusin" in window;
      /** @type {!RegExp} */
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
      /**
       * @param {!Event} e
       * @return {undefined}
       */
      var fn = function handleSignleFingerTouch(e) {
        e.stopPropagation();
      };
      jQuery.extend(jQuery.event, {
        trigger : function handler(event, data, elem, onlyHandlers) {
          var i;
          var cur;
          var tmp;
          var bubbleType;
          var ontype;
          var handle;
          var special;
          var next;
          /** @type {!Array} */
          var eventPath = [elem || document];
          var type = hasOwn.call(event, "type") ? event.type : event;
          var parts = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          if (cur = next = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (-1 < type.indexOf(".") && (type = (parts = type.split(".")).shift(), parts.sort()), ontype = type.indexOf(":") < 0 && "on" + type, (event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == (typeof event === "undefined" ? "undefined" : _typeof(event)) && event)).isTrigger = onlyHandlers ? 2 : 3, event.namespace = parts.join("."), 
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + parts.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || false !== special.trigger.apply(elem, data))) {
            if (!onlyHandlers && !special.noBubble && !each(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window);
              }
            }
            /** @type {number} */
            i = 0;
            for (; (cur = eventPath[i++]) && !event.isPropagationStopped();) {
              next = cur;
              event.type = 1 < i ? bubbleType : special.bindType || type;
              if (handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle")) {
                handle.apply(cur, data);
              }
              if ((handle = ontype && cur[ontype]) && handle.apply && cb(cur)) {
                event.result = handle.apply(cur, data);
                if (false === event.result) {
                  event.preventDefault();
                }
              }
            }
            return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && false !== special._default.apply(eventPath.pop(), data) || !cb(elem) || ontype && isFunction(elem[type]) && !each(elem) && ((tmp = elem[ontype]) && (elem[ontype] = null), jQuery.event.triggered = type, event.isPropagationStopped() && next.addEventListener(type, fn), elem[type](), event.isPropagationStopped() && next.removeEventListener(type, fn), jQuery.event.triggered = void 0, tmp && (elem[ontype] = 
            tmp)), event.result;
          }
        },
        simulate : function simulate(type, node, options) {
          var r = jQuery.extend(new jQuery.Event, options, {
            type : type,
            isSimulated : true
          });
          jQuery.event.trigger(r, null, node);
        }
      });
      jQuery.fn.extend({
        trigger : function trigger(event, data) {
          return this.each(function() {
            jQuery.event.trigger(event, data, this);
          });
        },
        triggerHandler : function onmessage(type, msg) {
          var parent = this[0];
          if (parent) {
            return jQuery.event.trigger(type, msg, parent, true);
          }
        }
      });
      if (!support.focusin) {
        jQuery.each({
          focus : "focusin",
          blur : "focusout"
        }, function(orig, name) {
          /**
           * @param {(Object|string)} event
           * @return {undefined}
           */
          var focusListener = function handler(event) {
            jQuery.event.simulate(name, event.target, jQuery.event.fix(event));
          };
          jQuery.event.special[name] = {
            setup : function AHB_init() {
              var doc = this.ownerDocument || this.document || this;
              var a = dataPriv.access(doc, name);
              if (!a) {
                doc.addEventListener(orig, focusListener, true);
              }
              dataPriv.access(doc, name, (a || 0) + 1);
            },
            teardown : function AHB_destroy() {
              var doc = this.ownerDocument || this.document || this;
              /** @type {number} */
              var attaches = dataPriv.access(doc, name) - 1;
              if (attaches) {
                dataPriv.access(doc, name, attaches);
              } else {
                doc.removeEventListener(orig, focusListener, true);
                dataPriv.remove(doc, name);
              }
            }
          };
        });
      }
      var location = window.location;
      var _enum = {
        guid : Date.now()
      };
      /** @type {!RegExp} */
      var rquery = /\?/;
      /**
       * @param {string} data
       * @return {?}
       */
      jQuery.parseXML = function(data) {
        var xml;
        if (!data || "string" != typeof data) {
          return null;
        }
        try {
          xml = (new window.DOMParser).parseFromString(data, "text/xml");
        } catch (t) {
          xml = void 0;
        }
        return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
      };
      /** @type {!RegExp} */
      var regIsJS = /\[\]$/;
      /** @type {!RegExp} */
      var reVowels = /\r?\n/g;
      /** @type {!RegExp} */
      var reHasHexPrefix = /^(?:submit|button|image|reset|file)$/i;
      /** @type {!RegExp} */
      var rsubmittable = /^(?:input|select|textarea|keygen)/i;
      /**
       * @param {?} obj
       * @param {string} traditional
       * @return {?}
       */
      jQuery.param = function(obj, traditional) {
        var key;
        /** @type {!Array} */
        var displayUsedBy = [];
        /**
         * @param {?} e
         * @param {undefined} value
         * @return {undefined}
         */
        var add = function add(e, value) {
          var url = isFunction(value) ? value() : value;
          /** @type {string} */
          displayUsedBy[displayUsedBy.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == url ? "" : url);
        };
        if (null == obj) {
          return "";
        }
        if (Array.isArray(obj) || obj.jquery && !jQuery.isPlainObject(obj)) {
          jQuery.each(obj, function() {
            add(this.name, this.value);
          });
        } else {
          for (key in obj) {
            serialize(key, obj[key], traditional, add);
          }
        }
        return displayUsedBy.join("&");
      };
      jQuery.fn.extend({
        serialize : function serialize() {
          return jQuery.param(this.serializeArray());
        },
        serializeArray : function refresh() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var string = this.type;
            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !reHasHexPrefix.test(string) && (this.checked || !path.test(string));
          }).map(function(canCreateDiscussions, ctlParams) {
            var val = jQuery(this).val();
            return null == val ? null : Array.isArray(val) ? jQuery.map(val, function(val) {
              return {
                name : ctlParams.name,
                value : val.replace(reVowels, "\r\n")
              };
            }) : {
              name : ctlParams.name,
              value : val.replace(reVowels, "\r\n")
            };
          }).get();
        }
      });
      /** @type {!RegExp} */
      var jsre = /%20/g;
      /** @type {!RegExp} */
      var rhash = /#.*$/;
      /** @type {!RegExp} */
      var rts = /([?&])_=[^&]*/;
      /** @type {!RegExp} */
      var rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm;
      /** @type {!RegExp} */
      var re = /^(?:GET|HEAD)$/;
      /** @type {!RegExp} */
      var rprotocol = /^\/\//;
      var prefilters = {};
      var transports = {};
      /** @type {string} */
      var Ft = "*/".concat("*");
      var originAnchor = document.createElement("a");
      originAnchor.href = location.href;
      jQuery.extend({
        active : 0,
        lastModified : {},
        etag : {},
        ajaxSettings : {
          url : location.href,
          type : "GET",
          isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(location.protocol),
          global : true,
          processData : true,
          async : true,
          contentType : "application/x-www-form-urlencoded; charset=UTF-8",
          accepts : {
            "*" : Ft,
            text : "text/plain",
            html : "text/html",
            xml : "application/xml, text/xml",
            json : "application/json, text/javascript"
          },
          contents : {
            xml : /\bxml\b/,
            html : /\bhtml/,
            json : /\bjson\b/
          },
          responseFields : {
            xml : "responseXML",
            text : "responseText",
            json : "responseJSON"
          },
          converters : {
            "* text" : String,
            "text html" : true,
            "text json" : JSON.parse,
            "text xml" : jQuery.parseXML
          },
          flatOptions : {
            url : true,
            context : true
          }
        },
        ajaxSetup : function ajaxSetup(target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
        ajaxTransport : addToPrefiltersOrTransports(transports),
        ajax : function init(url, options) {
          /**
           * @param {number} status
           * @param {!Object} nativeStatusText
           * @param {!Array} responses
           * @param {!Object} headers
           * @return {undefined}
           */
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess;
            var success;
            var error;
            var response;
            var modified;
            /** @type {!Object} */
            var statusText = nativeStatusText;
            if (!completed) {
              /** @type {boolean} */
              completed = true;
              if (showAboveTimeout) {
                window.clearTimeout(showAboveTimeout);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              /** @type {number} */
              jqXHR.readyState = 0 < status ? 4 : 0;
              /** @type {boolean} */
              isSuccess = 200 <= status && status < 300 || 304 === status;
              if (responses) {
                response = function(s, ajaxRequest, responses) {
                  var ct;
                  var type;
                  var finalDataType;
                  var firstDataType;
                  var contents = s.contents;
                  var dataTypes = s.dataTypes;
                  for (; "*" === dataTypes[0];) {
                    dataTypes.shift();
                    if (void 0 === ct) {
                      ct = s.mimeType || ajaxRequest.getResponseHeader("Content-Type");
                    }
                  }
                  if (ct) {
                    for (type in contents) {
                      if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                      }
                    }
                  }
                  if (dataTypes[0] in responses) {
                    finalDataType = dataTypes[0];
                  } else {
                    for (type in responses) {
                      if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        /** @type {string} */
                        finalDataType = type;
                        break;
                      }
                      if (!firstDataType) {
                        /** @type {string} */
                        firstDataType = type;
                      }
                    }
                    /** @type {(string|undefined)} */
                    finalDataType = finalDataType || firstDataType;
                  }
                  if (finalDataType) {
                    return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
                  }
                }(s, jqXHR, responses);
              }
              if (!isSuccess && -1 < jQuery.inArray("script", s.dataTypes)) {
                /**
                 * @return {undefined}
                 */
                s.converters["text script"] = function() {
                };
              }
              response = function(s, response, jqXHR, isSuccess) {
                var conv2;
                var current;
                var conv;
                var data;
                var prev;
                var converters = {};
                var l = s.dataTypes.slice();
                if (l[1]) {
                  for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv];
                  }
                }
                current = l.shift();
                for (; current;) {
                  if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = l.shift()) {
                    if ("*" === current) {
                      current = prev;
                    } else {
                      if ("*" !== prev && prev !== current) {
                        if (!(conv = converters[prev + " " + current] || converters["* " + current])) {
                          for (conv2 in converters) {
                            if ((data = conv2.split(" "))[1] === current && (conv = converters[prev + " " + data[0]] || converters["* " + data[0]])) {
                              if (true === conv) {
                                conv = converters[conv2];
                              } else {
                                if (true !== converters[conv2]) {
                                  /** @type {string} */
                                  current = data[0];
                                  l.unshift(data[1]);
                                }
                              }
                              break;
                            }
                          }
                        }
                        if (true !== conv) {
                          if (conv && s.throws) {
                            response = conv(response);
                          } else {
                            try {
                              response = conv(response);
                            } catch (e) {
                              return {
                                state : "parsererror",
                                error : conv ? e : "No conversion from " + prev + " to " + current
                              };
                            }
                          }
                        }
                      }
                    }
                  }
                }
                return {
                  state : "success",
                  data : response
                };
              }(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  if (modified = jqXHR.getResponseHeader("Last-Modified")) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  if (modified = jqXHR.getResponseHeader("etag")) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (204 === status || "HEAD" === s.type) {
                  /** @type {string} */
                  statusText = "nocontent";
                } else {
                  if (304 === status) {
                    /** @type {string} */
                    statusText = "notmodified";
                  } else {
                    statusText = response.state;
                    success = response.data;
                    /** @type {boolean} */
                    isSuccess = !(error = response.error);
                  }
                }
              } else {
                error = statusText;
                if (!(!status && statusText)) {
                  /** @type {string} */
                  statusText = "error";
                  if (status < 0) {
                    /** @type {number} */
                    status = 0;
                  }
                }
              }
              /** @type {number} */
              jqXHR.status = status;
              /** @type {string} */
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(obj, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(obj, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (l) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
              }
              completeDeferred.fireWith(obj, [jqXHR, statusText]);
              if (l) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
          }
          if ("object" == (typeof url === "undefined" ? "undefined" : _typeof(url))) {
            /** @type {!Object} */
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport;
          var cacheURL;
          var responseHeadersString;
          var marks;
          var showAboveTimeout;
          var urlAnchor;
          var completed;
          var l;
          var i;
          var uncached;
          var s = jQuery.ajaxSetup({}, options);
          var obj = s.context || s;
          var globalEventContext = s.context && (obj.nodeType || obj.jquery) ? jQuery(obj) : jQuery.event;
          var deferred = jQuery.Deferred();
          var completeDeferred = jQuery.Callbacks("once memory");
          var statusCode = s.statusCode || {};
          var p = {};
          var requestHeadersNames = {};
          /** @type {string} */
          var status = "canceled";
          var jqXHR = {
            readyState : 0,
            getResponseHeader : function handle_browserify(header) {
              var match;
              if (completed) {
                if (!marks) {
                  marks = {};
                  for (; match = rheaders.exec(responseHeadersString);) {
                    marks[match[1].toLowerCase() + " "] = (marks[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = marks[header.toLowerCase() + " "];
              }
              return null == match ? null : match.join(", ");
            },
            getAllResponseHeaders : function disablemouse() {
              return completed ? responseHeadersString : null;
            },
            setRequestHeader : function setRequestHeader(name, value) {
              return null == completed && (name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name, p[name] = value), this;
            },
            overrideMimeType : function createItem(type) {
              return null == completed && (s.mimeType = type), this;
            },
            statusCode : function asyncRegister(map) {
              var tmp;
              if (map) {
                if (completed) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (tmp in map) {
                    /** @type {!Array} */
                    statusCode[tmp] = [statusCode[tmp], map[tmp]];
                  }
                }
              }
              return this;
            },
            abort : function abort(type) {
              var statusText = type || status;
              return transport && transport.abort(statusText), done(0, statusText), this;
            }
          };
          if (deferred.promise(jqXHR), s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = (s.dataType || "*").toLowerCase().match(a) || [""], null == s.crossDomain) {
            urlAnchor = document.createElement("a");
            try {
              /** @type {string} */
              urlAnchor.href = s.url;
              /** @type {string} */
              urlAnchor.href = urlAnchor.href;
              /** @type {boolean} */
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (t) {
              /** @type {boolean} */
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), completed) {
            return jqXHR;
          }
          for (i in(l = jQuery.event && s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !re.test(s.type), cacheURL = s.url.replace(rhash, ""), s.hasContent ? s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (s.data = s.data.replace(jsre, "+")) : (uncached = s.url.slice(cacheURL.length), s.data && (s.processData || "string" == typeof s.data) && (cacheURL = cacheURL + ((rquery.test(cacheURL) ? 
          "&" : "?") + s.data), delete s.data), false === s.cache && (cacheURL = cacheURL.replace(rts, "$1"), uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + _enum.guid++ + uncached), s.url = cacheURL + uncached), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && false !== s.contentType || options.contentType) && 
          jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : s.accepts["*"]), s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (false === s.beforeSend.call(obj, jqXHR, s) || completed)) {
            return jqXHR.abort();
          }
          if (status = "abort", completeDeferred.add(s.complete), jqXHR.done(s.success), jqXHR.fail(s.error), transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
            if (jqXHR.readyState = 1, l && globalEventContext.trigger("ajaxSend", [jqXHR, s]), completed) {
              return jqXHR;
            }
            if (s.async && 0 < s.timeout) {
              showAboveTimeout = window.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              /** @type {boolean} */
              completed = false;
              transport.send(p, done);
            } catch (success) {
              if (completed) {
                throw success;
              }
              done(-1, success);
            }
          } else {
            done(-1, "No Transport");
          }
          return jqXHR;
        },
        getJSON : function _ResolveContext(id, output, callback) {
          return jQuery.get(id, output, callback, "json");
        },
        getScript : function loadWebScript(src, callback) {
          return jQuery.get(src, void 0, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function(canCreateDiscussions, method) {
        /**
         * @param {!Object} url
         * @param {!Object} n
         * @param {!Object} s
         * @param {!Object} o
         * @return {?}
         */
        jQuery[method] = function(url, n, s, o) {
          return isFunction(n) && (o = o || s, s = n, n = void 0), jQuery.ajax(jQuery.extend({
            url : url,
            type : method,
            dataType : o,
            data : n,
            success : s
          }, jQuery.isPlainObject(url) && url));
        };
      });
      jQuery.ajaxPrefilter(function(settings) {
        var name;
        for (name in settings.headers) {
          if ("content-type" === name.toLowerCase()) {
            settings.contentType = settings.headers[name] || "";
          }
        }
      });
      /**
       * @param {string} value
       * @param {string} name
       * @param {!Object} url
       * @return {?}
       */
      jQuery._evalUrl = function(value, name, url) {
        return jQuery.ajax({
          url : value,
          type : "GET",
          dataType : "script",
          cache : true,
          async : false,
          global : false,
          converters : {
            "text script" : function textScript() {
            }
          },
          dataFilter : function loadSVG(data) {
            jQuery.globalEval(data, name, url);
          }
        });
      };
      jQuery.fn.extend({
        wrapAll : function show(element) {
          var t;
          return this[0] && (isFunction(element) && (element = element.call(this[0])), t = jQuery(element, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            var input = this;
            for (; input.firstElementChild;) {
              input = input.firstElementChild;
            }
            return input;
          }).append(this)), this;
        },
        wrapInner : function init(array) {
          return isFunction(array) ? this.each(function(i) {
            jQuery(this).wrapInner(array.call(this, i));
          }) : this.each(function() {
            var t = jQuery(this);
            var res = t.contents();
            if (res.length) {
              res.wrapAll(array);
            } else {
              t.append(array);
            }
          });
        },
        wrap : function init(parent) {
          var func = isFunction(parent);
          return this.each(function(args) {
            jQuery(this).wrapAll(func ? parent.call(this, args) : parent);
          });
        },
        unwrap : function fn(e) {
          return this.parent(e).not("body").each(function() {
            jQuery(this).replaceWith(this.childNodes);
          }), this;
        }
      });
      /**
       * @param {string} value
       * @return {?}
       */
      jQuery.expr.pseudos.hidden = function(value) {
        return !jQuery.expr.pseudos.visible(value);
      };
      /**
       * @param {!Element} elem
       * @return {?}
       */
      jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      /**
       * @return {?}
       */
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new window.XMLHttpRequest;
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        0 : 200,
        1223 : 204
      };
      var xhrSupported = jQuery.ajaxSettings.xhr();
      /** @type {boolean} */
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      /** @type {boolean} */
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(s) {
        var callback;
        var errorCallback;
        if (support.cors || xhrSupported && !s.crossDomain) {
          return {
            send : function makeRequest(headers, callback) {
              var i;
              var xhr = s.xhr();
              if (xhr.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields) {
                for (i in s.xhrFields) {
                  xhr[i] = s.xhrFields[i];
                }
              }
              for (i in s.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(s.mimeType), s.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              /**
               * @param {string} event
               * @return {?}
               */
              callback = function callback(event) {
                return function() {
                  if (callback) {
                    /** @type {null} */
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if ("abort" === event) {
                      xhr.abort();
                    } else {
                      if ("error" === event) {
                        if ("number" != typeof xhr.status) {
                          callback(0, "error");
                        } else {
                          callback(xhr.status, xhr.statusText);
                        }
                      } else {
                        callback(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                          binary : xhr.response
                        } : {
                          text : xhr.responseText
                        }, xhr.getAllResponseHeaders());
                      }
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (void 0 !== xhr.onabort) {
                xhr.onabort = errorCallback;
              } else {
                /**
                 * @return {undefined}
                 */
                xhr.onreadystatechange = function() {
                  if (4 === xhr.readyState) {
                    window.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(s.hasContent && s.data || null);
              } catch (a) {
                if (callback) {
                  throw a;
                }
              }
            },
            abort : function _setEditorContent() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain) {
          /** @type {boolean} */
          options.contents.script = false;
        }
      });
      jQuery.ajaxSetup({
        accepts : {
          script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents : {
          script : /\b(?:java|ecma)script\b/
        },
        converters : {
          "text script" : function process(value) {
            return jQuery.globalEval(value), value;
          }
        }
      });
      jQuery.ajaxPrefilter("script", function(settings) {
        if (void 0 === settings.cache) {
          /** @type {boolean} */
          settings.cache = false;
        }
        if (settings.crossDomain) {
          /** @type {string} */
          settings.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(options) {
        var fileElem;
        var callback;
        if (options.crossDomain || options.scriptAttrs) {
          return {
            send : function f(trace, callback) {
              fileElem = jQuery("<script>").attr(options.scriptAttrs || {}).prop({
                charset : options.scriptCharset,
                src : options.url
              }).on("load error", callback = function onerror(result) {
                fileElem.remove();
                /** @type {null} */
                callback = null;
                if (result) {
                  callback("error" === result.type ? 404 : 200, result.type);
                }
              });
              document.head.appendChild(fileElem[0]);
            },
            abort : function extractPresetLocal() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var summary;
      /** @type {!Array} */
      var oldCallbacks = [];
      /** @type {!RegExp} */
      var rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp : "callback",
        jsonpCallback : function poll() {
          var indexLookupKey = oldCallbacks.pop() || jQuery.expando + "_" + _enum.guid++;
          return this[indexLookupKey] = true, indexLookupKey;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, scanners) {
        var callbackName;
        var overwritten;
        var responseContainer;
        /** @type {(boolean|string)} */
        var jsonProp = false !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || "jsonp" === s.dataTypes[0]) {
          return callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : false !== s.jsonp && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
            return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
          }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
            /** @type {!Arguments} */
            responseContainer = arguments;
          }, scanners.always(function() {
            if (void 0 === overwritten) {
              jQuery(window).removeProp(callbackName);
            } else {
              window[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          }), "script";
        }
      });
      /** @type {boolean} */
      support.createHTMLDocument = ((summary = document.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === summary.childNodes.length);
      /**
       * @param {string} data
       * @param {!Object} context
       * @param {!Object} keepScripts
       * @return {?}
       */
      jQuery.parseHTML = function(data, context, keepScripts) {
        return "string" != typeof data ? [] : ("boolean" == typeof context && (keepScripts = context, context = false), context || (support.createHTMLDocument ? ((target = (context = document.implementation.createHTMLDocument("")).createElement("base")).href = document.location.href, context.head.appendChild(target)) : context = document), scripts = !keepScripts && [], (parsed = rsingleTag.exec(data)) ? [context.createElement(parsed[1])] : (parsed = buildFragment([data], context, scripts), scripts && 
        scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes)));
        var target;
        var parsed;
        var scripts;
      };
      /**
       * @param {!Object} key
       * @param {string} value
       * @param {string} callback
       * @return {?}
       */
      jQuery.fn.load = function(key, value, callback) {
        var selector;
        var method;
        var args;
        var self = this;
        var n = key.indexOf(" ");
        return -1 < n && (selector = map(key.slice(n)), key = key.slice(0, n)), isFunction(value) ? (callback = value, value = void 0) : value && "object" == (typeof value === "undefined" ? "undefined" : _typeof(value)) && (method = "POST"), 0 < self.length && jQuery.ajax({
          url : key,
          type : method || "GET",
          dataType : "html",
          data : value
        }).done(function(responseText) {
          /** @type {!Arguments} */
          args = arguments;
          self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(elem, type) {
          self.each(function() {
            callback.apply(this, args || [elem.responseText, type, elem]);
          });
        }), this;
      };
      /**
       * @param {?} elem
       * @return {?}
       */
      jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery.offset = {
        setOffset : function create(c, options, x) {
          var curPosition;
          var curLeft;
          var max;
          var curTop;
          var curOffset;
          var num;
          var b = jQuery.css(c, "position");
          var a = jQuery(c);
          var props = {};
          if ("static" === b) {
            /** @type {string} */
            c.style.position = "relative";
          }
          curOffset = a.offset();
          max = jQuery.css(c, "top");
          num = jQuery.css(c, "left");
          if (("absolute" === b || "fixed" === b) && -1 < (max + num).indexOf("auto")) {
            curTop = (curPosition = a.position()).top;
            curLeft = curPosition.left;
          } else {
            /** @type {number} */
            curTop = parseFloat(max) || 0;
            /** @type {number} */
            curLeft = parseFloat(num) || 0;
          }
          if (isFunction(options)) {
            options = options.call(c, x, jQuery.extend({}, curOffset));
          }
          if (null != options.top) {
            /** @type {number} */
            props.top = options.top - curOffset.top + curTop;
          }
          if (null != options.left) {
            /** @type {number} */
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(c, props);
          } else {
            if ("number" == typeof props.top) {
              props.top += "px";
            }
            if ("number" == typeof props.left) {
              props.left += "px";
            }
            a.css(props);
          }
        }
      };
      jQuery.fn.extend({
        offset : function offset(y) {
          if (arguments.length) {
            return void 0 === y ? this : this.each(function(i) {
              jQuery.offset.setOffset(this, y, i);
            });
          }
          var box;
          var win;
          var aTarget = this[0];
          return aTarget ? aTarget.getClientRects().length ? (box = aTarget.getBoundingClientRect(), win = aTarget.ownerDocument.defaultView, {
            top : box.top + win.pageYOffset,
            left : box.left + win.pageXOffset
          }) : {
            top : 0,
            left : 0
          } : void 0;
        },
        position : function getPosition() {
          if (this[0]) {
            var el;
            var offset;
            var node;
            var element = this[0];
            var parentOffset = {
              top : 0,
              left : 0
            };
            if ("fixed" === jQuery.css(element, "position")) {
              offset = element.getBoundingClientRect();
            } else {
              offset = this.offset();
              node = element.ownerDocument;
              el = element.offsetParent || node.documentElement;
              for (; el && (el === node.body || el === node.documentElement) && "static" === jQuery.css(el, "position");) {
                el = el.parentNode;
              }
              if (el && el !== element && 1 === el.nodeType) {
                (parentOffset = jQuery(el).offset()).top += jQuery.css(el, "borderTopWidth", true);
                parentOffset.left += jQuery.css(el, "borderLeftWidth", true);
              }
            }
            return {
              top : offset.top - parentOffset.top - jQuery.css(element, "marginTop", true),
              left : offset.left - parentOffset.left - jQuery.css(element, "marginLeft", true)
            };
          }
        },
        offsetParent : function link() {
          return this.map(function() {
            var parent = this.offsetParent;
            for (; parent && "static" === jQuery.css(parent, "position");) {
              parent = parent.offsetParent;
            }
            return parent || node;
          });
        }
      });
      jQuery.each({
        scrollLeft : "pageXOffset",
        scrollTop : "pageYOffset"
      }, function(type, prop) {
        /** @type {boolean} */
        var top = "pageYOffset" === prop;
        /**
         * @param {?} value
         * @return {?}
         */
        jQuery.fn[type] = function(value) {
          return access(this, function(doc, method, val) {
            var win;
            if (each(doc) ? win = doc : 9 === doc.nodeType && (win = doc.defaultView), void 0 === val) {
              return win ? win[prop] : doc[method];
            }
            if (win) {
              win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset);
            } else {
              /** @type {number} */
              doc[method] = val;
            }
          }, type, value, arguments.length);
        };
      });
      jQuery.each(["top", "left"], function(canCreateDiscussions, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, val) {
          if (val) {
            return val = curCSS(elem, prop), rnumnonpx.test(val) ? jQuery(elem).position()[prop] + "px" : val;
          }
        });
      });
      jQuery.each({
        Height : "height",
        Width : "width"
      }, function(name, type) {
        jQuery.each({
          padding : "inner" + name,
          content : type,
          "" : "outer" + name
        }, function(defaultExtra, type) {
          /**
           * @param {boolean} margin
           * @param {(number|string)} boardManager
           * @return {?}
           */
          jQuery.fn[type] = function(margin, boardManager) {
            var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
            var extra = defaultExtra || (true === margin || true === boardManager ? "margin" : "border");
            return access(this, function(el, offset, undefined) {
              var doc;
              return each(el) ? 0 === type.indexOf("outer") ? el["inner" + name] : el.document.documentElement["client" + name] : 9 === el.nodeType ? (doc = el.documentElement, Math.max(el.body["scroll" + name], doc["scroll" + name], el.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === undefined ? jQuery.css(el, offset, extra) : jQuery.style(el, offset, undefined, extra);
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(canCreateDiscussions, type) {
        /**
         * @param {string} volumeChange
         * @return {?}
         */
        jQuery.fn[type] = function(volumeChange) {
          return this.on(type, volumeChange);
        };
      });
      jQuery.fn.extend({
        bind : function fastFind(path, data, callback) {
          return this.on(path, null, data, callback);
        },
        unbind : function unsubscribe(type, fn) {
          return this.off(type, null, fn);
        },
        delegate : function delegate(event, selector, fn, callback) {
          return this.on(selector, event, fn, callback);
        },
        undelegate : function undelegate(selector, event, callback) {
          return 1 === arguments.length ? this.off(selector, "**") : this.off(event, selector || "**", callback);
        },
        hover : function hover(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(canCreateDiscussions, type) {
        /**
         * @param {!Object} data
         * @param {!Object} callback
         * @return {?}
         */
        jQuery.fn[type] = function(data, callback) {
          return 0 < arguments.length ? this.on(type, null, data, callback) : this.trigger(type);
        };
      });
      /** @type {!RegExp} */
      var REGEX_ESCAPE_EXPR = /^[\s\ufeff\u00a0]+|[\s\ufeff\u00a0]+$/g;
      /**
       * @param {!Object} f
       * @param {undefined} c
       * @return {?}
       */
      jQuery.proxy = function(f, c) {
        var j;
        var headArgs;
        var i;
        if ("string" == typeof c && (j = f[c], c = f, f = j), isFunction(f)) {
          return headArgs = slice.call(arguments, 2), (i = function proxyFn() {
            return f.apply(c || this, headArgs.concat(slice.call(arguments)));
          }).guid = f.guid = f.guid || jQuery.guid++, i;
        }
      };
      /**
       * @param {?} hold
       * @return {undefined}
       */
      jQuery.holdReady = function(hold) {
        if (hold) {
          jQuery.readyWait++;
        } else {
          jQuery.ready(true);
        }
      };
      /** @type {function(*): boolean} */
      jQuery.isArray = Array.isArray;
      /** @type {function(this:JSONType, string, function(string, *): *=): *} */
      jQuery.parseJSON = JSON.parse;
      /** @type {function(!Object, string): ?} */
      jQuery.nodeName = $;
      /** @type {function(!Object, ?): ?} */
      jQuery.isFunction = isFunction;
      /** @type {function(!Object): ?} */
      jQuery.isWindow = each;
      /** @type {function(!Object): ?} */
      jQuery.camelCase = camelCase;
      /** @type {function(!Object): ?} */
      jQuery.type = type;
      /** @type {function(): number} */
      jQuery.now = Date.now;
      /**
       * @param {string} value
       * @return {?}
       */
      jQuery.isNumeric = function(value) {
        var undefined = jQuery.type(value);
        return ("number" === undefined || "string" === undefined) && !isNaN(value - parseFloat(value));
      };
      /**
       * @param {string} text
       * @return {?}
       */
      jQuery.trim = function(text) {
        return null == text ? "" : (text + "").replace(REGEX_ESCAPE_EXPR, "");
      };
      if ("function" == typeof define && define.amd) {
        define("jquery", [], function() {
          return jQuery;
        });
      }
      var _jQuery = window.jQuery;
      var old$ = window.$;
      return jQuery.noConflict = function(deep) {
        return window.$ === jQuery && (window.$ = old$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery;
      }, void 0 === screen && (window.jQuery = window.$ = jQuery), jQuery;
    };
    if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports)) {
      module.exports = root.document ? factory(root, true) : function(global) {
        if (!global.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(global);
      };
    } else {
      factory(root);
    }
    var jQuery = $.noConflict(true);
    var element = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "jsonGetPromise",
        value : function init(key, type, opts) {
          return new Promise(function(cb, proceed) {
            var options = {
              dataType : "json",
              url : key,
              cache : true,
              headers : opts || {},
              data : type || {},
              timeout : e.HTTP_TIMEOUT_MS,
              success : function f(value) {
                return cb(value);
              },
              error : function error(value) {
                return proceed("Failed call to " + key + " : " + value.statusText + " " + value.status);
              }
            };
            jQuery.ajax(options);
          });
        }
      }]), e;
    }();
    callback(element, "HTTP_TIMEOUT_MS", 3e4);
    var browser = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isMobile",
        value : function init() {
          var t = navigator.userAgent || navigator.vendor || window.opera;
          return e.MOBILE_FULL_PATTERN.test(t) || e.MOBILE_SHORT_PATTERN.test(t.substr(0, 4));
        }
      }, {
        key : "isSafari",
        value : function parse() {
          return /Safari/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Edg\/\d/.test(navigator.userAgent);
        }
      }, {
        key : "isIE",
        value : function getBrowser() {
          return navigator.appVersion && (navigator.appVersion.indexOf("MSIE") > 0 || navigator.appVersion.indexOf("Trident") > 0);
        }
      }, {
        key : "getLanguage",
        value : function getDefaultLanguage() {
          return window.navigator.language;
        }
      }]), e;
    }();
    callback(browser, "MOBILE_FULL_PATTERN", /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i);
    callback(browser, "MOBILE_SHORT_PATTERN", /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i);
    var self = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isPreviewAndHasParam",
        value : function saveAnnotation(value) {
          return e.isPreview() && node.hasParameterInUrl(value);
        }
      }, {
        key : "isPreview",
        value : function value() {
          return node.hasParameterInUrl("previewCollectionsApp");
        }
      }]), e;
    }();
    var dojo = function() {
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      function render(options) {
        /** @type {string} */
        options.theme = "Impulse";
        log(this, render);
        this.customCss = options.custom_css;
        this.customJs = options.custom_js;
        /** @type {string} */
        this.theme = options.theme;
        this.moneyFormat = options.money_format;
        var opts = {
          "align" : true,
          "theme" : "Impulse",
          "button_added_text" : "Added",
          "button_background_color" : "#0c0d0d",
          "button_border_color" : "#ffffff",
          "button_border_radius" : 0,
          "button_border_size" : "1",
          "button_font_color" : "#ff0000",
          "button_font_family" : "",
          "button_font_size" : 14,
          "button_font_style" : "BOLD",
          "button_recovery" : true === undefined ? false : true,
          "button_text" : "Add to Cart",
          "mobile_target" : "",
          "mobile_target_placement" : "LAST_CHILD",
          "quantity_selector_background_color" : "#ffffff",
          "quantity_selector_border_color" : "#000000",
          "quantity_selector_border_radius" : 0,
          "quantity_selector_border_size" : 1,
          "quantity_selector_default_quantity" : "1",
          "quantity_selector_font_color" : "#000000",
          "quantity_selector_font_family" : "",
          "quantity_selector_font_size" : 14,
          "quantity_selector_font_style" : "NORMAL",
          "redirect_policy" : "REDIRECT_TO_PRODUCT_PAGE",
          "show_drawer_cart" : "false",
          "show_on_homepage" : true === undefined ? false : true,
          "show_on_product_page" : true === undefined ? false : true,
          "show_on_search_results_page" : true === undefined ? false : true,
          "show_quantity_selector" : true === undefined ? false : true,
          "show_variant_selector" : true === undefined ? false : true,
          "target" : "",
          "target_placement" : "LAST_CHILD",
          "variant_selector_background_color" : "#0f57ff",
          "variant_selector_border_color" : "#0f57ff",
          "variant_selector_border_radius" : 0,
          "variant_selector_border_size" : "1",
          "variant_selector_font_color" : "#ffffff",
          "variant_selector_font_family" : "",
          "variant_selector_font_size" : 14,
          "variant_selector_font_style" : "NORMAL",
          "enable_multiple_variant_selectors" : undefined === undefined ? false : true,
          "show_variant_selector_label" : true === undefined ? false : true,
          "update_variant_image" : undefined === undefined ? false : true,
          "sold_out_button_text" : "Sold Out",
          "show_sold_out_button" : undefined === undefined ? false : true,
          "sold_out_button_border_size" : "1",
          "sold_out_button_border_color" : "#000000",
          "sold_out_button_border_radius" : "0",
          "sold_out_button_background_color" : "#000000",
          "sold_out_button_font_size" : "14",
          "sold_out_button_font_color" : "#ffffff",
          "sold_out_button_font_style" : "NORMAL",
          "sold_out_button_font_family" : "",
          "show_variant_price" : undefined === undefined ? false : true,
          "show_all_variants" : undefined === undefined ? false : true,
          "variant_selector_label_font_size" : "",
          "variant_selector_label_font_style" : "NORMAL",
          "variant_selector_label_font_color" : "#000000",
          "variant_selector_label_font_Family" : ""
        };
        this.target = render._target(opts);
        this.targetPlacement = render._targetPlacement(opts);
        /** @type {boolean} */
        this.showOnHomepage = opts.show_on_homepage;
        /** @type {boolean} */
        this.showOnSearchResultsPage = opts.show_on_search_results_page;
        /** @type {boolean} */
        this.showOnProductPage = opts.show_on_product_page;
        this.showOnCartPage = opts.show_on_cart_page;
        this.redirectPolicy = render._valuePreferences("redirectPolicy", opts.redirect_policy);
        this.showDrawerCart = render._booleanPreferences("showDrawerCart", "true");
        this.alignWidgets = render._booleanPreferences("align", opts.align);
        this.buttonText = render._valuePreferences("buttonText", opts.button_text);
        this.buttonAddedText = render._valuePreferences("buttonAddedText", opts.button_added_text);
        this.buttonRecovery = render._valuePreferences("buttonRecovery", opts.button_recovery);
        this.buttonBorderSize = render._valuePreferences("buttonBorderSize", opts.button_border_size);
        this.buttonBorderColor = render._valuePreferences("buttonBorderColor", opts.button_border_color);
        this.buttonBorderRadius = render._valuePreferences("buttonBorderRadius", opts.button_border_radius);
        this.buttonBackgroundColor = render._valuePreferences("buttonBackgroundColor", opts.button_background_color);
        this.buttonFontSize = render._valuePreferences("buttonFontSize", opts.button_font_size);
        this.buttonFontColor = render._valuePreferences("buttonFontColor", opts.button_font_color);
        this.buttonFontStyle = render._valuePreferences("buttonFontStyle", opts.button_font_style);
        this.buttonFontFamily = render._valuePreferences("buttonFontFamily", opts.button_font_family);
        this.showSoldOutButton = render._booleanPreferences("showSoldOutButton", opts.show_sold_out_button);
        this.soldOutButtonText = render._valuePreferences("soldOutButtonText", opts.sold_out_button_text);
        this.soldOutButtonBorderSize = render._valuePreferences("soldOutButtonBorderSize", opts.sold_out_button_border_size);
        this.soldOutButtonBorderColor = render._valuePreferences("soldOutButtonBorderColor", opts.sold_out_button_border_color);
        this.soldOutButtonBorderRadius = render._valuePreferences("soldOutButtonBorderRadius", opts.sold_out_button_border_radius);
        this.soldOutButtonBackgroundColor = render._valuePreferences("soldOutButtonBackgroundColor", opts.sold_out_button_background_color);
        this.soldOutButtonFontSize = render._valuePreferences("soldOutButtonFontSize", opts.sold_out_button_font_size);
        this.soldOutButtonFontColor = render._valuePreferences("soldOutButtonFontColor", opts.sold_out_button_font_color);
        this.soldOutButtonFontStyle = render._valuePreferences("soldOutButtonFontStyle", opts.sold_out_button_font_style);
        this.soldOutButtonFontFamily = render._valuePreferences("soldOutButtonFontFamily", opts.sold_out_button_font_family);
        this.showVariantSelector = render._booleanPreferences("showVariantSelector", opts.show_variant_selector);
        this.variantSelectorBorderSize = render._valuePreferences("variantSelectorBorderSize", opts.variant_selector_border_size);
        this.variantSelectorBorderColor = render._valuePreferences("variantSelectorBorderColor", opts.variant_selector_border_color);
        this.variantSelectorBorderRadius = render._valuePreferences("variantSelectorBorderRadius", opts.variant_selector_border_radius);
        this.variantSelectorBackgroundColor = render._valuePreferences("variantSelectorBackgroundColor", opts.variant_selector_background_color);
        this.variantSelectorFontSize = render._valuePreferences("variantSelectorFontSize", opts.variant_selector_font_size);
        this.variantSelectorFontColor = render._valuePreferences("variantSelectorFontColor", opts.variant_selector_font_color);
        this.variantSelectorFontStyle = render._valuePreferences("variantSelectorFontStyle", opts.variant_selector_font_style);
        this.variantSelectorFontFamily = render._valuePreferences("variantSelectorFontFamily", opts.variant_selector_font_family);
        this.showVariantPrice = render._booleanPreferences("showVariantPrice", opts.show_variant_price);
        this.updateVariantImage = render._booleanPreferences("updateVariantImage", opts.update_variant_image);
        this.showAllVariants = render._booleanPreferences("showAllVariants", opts.show_all_variants);
        this.enableMultipleVariantSelectors = render._booleanPreferences("enableMultipleVariantSelectors", opts.enable_multiple_variant_selectors);
        this.showVariantSelectorLabel = render._booleanPreferences("showVariantSelectorLabel", opts.show_variant_selector_label);
        this.variantSelectorLabelFontSize = render._valuePreferences("variantSelectorLabelFontSize", opts.variant_selector_label_font_size);
        this.variantSelectorLabelFontColor = render._valuePreferences("variantSelectorLabelFontColor", opts.variant_selector_label_font_color);
        this.variantSelectorLabelFontStyle = render._valuePreferences("variantSelectorLabelFontStyle", opts.variant_selector_label_font_style);
        this.variantSelectorLabelFontFamily = render._valuePreferences("variantSelectorLabelFontFamily", opts.variant_selector_label_font_family);
        this.showQuantitySelector = render._booleanPreferences("showQuantitySelector", opts.show_quantity_selector);
        this.quantitySelectorBorderSize = render._valuePreferences("quantitySelectorBorderSize", opts.quantity_selector_border_size);
        this.quantitySelectorBorderColor = render._valuePreferences("quantitySelectorBorderColor", opts.quantity_selector_border_color);
        this.quantitySelectorBorderRadius = render._valuePreferences("quantitySelectorBorderRadius", opts.quantity_selector_border_radius);
        this.quantitySelectorBackgroundColor = render._valuePreferences("quantitySelectorBackgroundColor", opts.quantity_selector_background_color);
        this.quantitySelectorFontSize = render._valuePreferences("quantitySelectorFontSize", opts.quantity_selector_font_size);
        this.quantitySelectorFontColor = render._valuePreferences("quantitySelectorFontColor", opts.quantity_selector_font_color);
        this.quantitySelectorFontStyle = render._valuePreferences("quantitySelectorFontStyle", opts.quantity_selector_font_style);
        this.quantitySelectorFontFamily = render._valuePreferences("quantitySelectorFontFamily", opts.quantity_selector_font_family);
        this.quantitySelectorDefaultQuantity = render._valuePreferences("quantitySelectorDefaultQuantity", opts.quantity_selector_default_quantity);
      }
      return t(render, null, [{
        key : "_target",
        value : function show(value) {
          var consoleArgs = render._valuePreferences("mobileTarget", value.mobile_target);
          var ngEl = render._valuePreferences("target", value.target);
          return browser.isMobile() && assert.isNotEmpty(consoleArgs) ? consoleArgs : ngEl;
        }
      }, {
        key : "_targetPlacement",
        value : function show(value) {
          var n = render._valuePreferences("mobileTarget", value.mobile_target_placement);
          var ngEl = render._valuePreferences("target", value.target_placement);
          return browser.isMobile() && assert.isNotEmpty(value.mobile_target) ? n : ngEl;
        }
      }, {
        key : "fromJson",
        value : function link(value) {
          return value.error ? null : new render(value);
        }
      }, {
        key : "_valuePreferences",
        value : function parseValue(value, type) {
          if (self.isPreviewAndHasParam(value)) {
            var escapedString = node.getParameterInUrl(value);
            return decodeURIComponent(escapedString);
          }
          return type;
        }
      }, {
        key : "_booleanPreferences",
        value : function parseValue(value, type) {
          if (self.isPreviewAndHasParam(value)) {
            var escapedString = node.getParameterInUrl(value);
            return decodeURIComponent(escapedString);
          }
          return !self.isPreviewAndHasParam("_" + value) && type;
        }
      }]), render;
    }();
    var mockObjectLoader = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "load",
        value : function initialize() {
          var i = options.cdnUrl() + "/json/preferences.json";
          var params = {
            shop : v3.getShop(),
            timestamp : "1666071873"
          };
          if (self.isPreview()) {
            jQuery.extend(params, {
              preview : true
            });
          }
          var p = {};
          return options.isNgrok() && (p = {
            "ngrok-skip-browser-warning" : "localtunnel"
          }, i = "/apps/collections-add-to-cart/json/preferences.json"), element.jsonGetPromise(i, params, p).then(function(inComponents) {
            return dojo.fromJson(inComponents);
          });
        }
      }]), e;
    }();
    var parent = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "setProperty",
        value : function interpolationHandler(elem, name) {
          e._setGlobalProperty(elem, name);
        }
      }, {
        key : "getProperty",
        value : function safeGetOffsetRect(elem) {
          return e._getGlobalProperty(elem);
        }
      }, {
        key : "_getGlobalProperty",
        value : function slotSelectionBtnClicked(value) {
          return e._createGlobalIncubateIfRequired(), void 0 === window.incubate[value] && (window.incubate[value] = {}), window.incubate[value];
        }
      }, {
        key : "_setGlobalProperty",
        value : function addNewLinkName(key, type) {
          e._createGlobalIncubateIfRequired();
          /** @type {string} */
          window.incubate[key] = type;
        }
      }, {
        key : "_createGlobalIncubateIfRequired",
        value : function value() {
          if (!window.incubate) {
            window.incubate = {};
          }
        }
      }]), e;
    }();
    var identifierPositions = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "hasLoadedBefore",
        value : function value() {
          return !!e._hasLoadedBefore() || (e._markAsLoaded(), false);
        }
      }, {
        key : "_hasLoadedBefore",
        value : function checkPanelIsOpen() {
          return true === parent.getProperty(e.FLAG);
        }
      }, {
        key : "_markAsLoaded",
        value : function hydrateExtraProperties() {
          parent.setProperty(e.FLAG, true);
        }
      }]), e;
    }();
    callback(identifierPositions, "FLAG", options.appId() + "-loaded");
    var me = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isRightPage",
        value : function safeGetOffsetRect(elem) {
          return node.isDemoPage() || e._isCollectionPageAndCollectionIsNotDisabled(elem) || e._isHomePageAndPreferenceEnabled(elem) || e._isSearchPageAndPreferenceEnabled(elem) || e._isProductPageAndPreferenceEnabled(elem) || e._isCartPageAndPreferenceEnabled(elem) || e.isWidgetForced();
        }
      }, {
        key : "isWidgetForced",
        value : function preloadImgs() {
          return jQuery(e.FORCE_WIDGET_SELECTOR).length > 0;
        }
      }, {
        key : "_isCollectionPageAndCollectionIsNotDisabled",
        value : function value() {
          return node.isCollectionPage() && e._isCollectionAllowed();
        }
      }, {
        key : "_isHomePageAndPreferenceEnabled",
        value : function camelize$1(str) {
          return str.showOnHomepage && node.isHomePage();
        }
      }, {
        key : "_isSearchPageAndPreferenceEnabled",
        value : function camelize$1(str) {
          return str.showOnSearchResultsPage && node.isSearchResultsPage();
        }
      }, {
        key : "_isProductPageAndPreferenceEnabled",
        value : function camelize$1(str) {
          return str.showOnProductPage && node.isProductPage();
        }
      }, {
        key : "_isCartPageAndPreferenceEnabled",
        value : function camelize$1(str) {
          return str.showOnCartPage && node.isCartPage();
        }
      }, {
        key : "_isCollectionAllowed",
        value : function value() {
          return !e._isCollectionDisabled();
        }
      }, {
        key : "_isCollectionDisabled",
        value : function preloadImgs() {
          return jQuery(e.COLLECTION_DISABLED_SELECTOR).length > 0;
        }
      }]), e;
    }();
    callback(me, "COLLECTION_DISABLED_SELECTOR", "." + options.AVOID_WIDGET_TAG);
    callback(me, "FORCE_WIDGET_SELECTOR", "." + options.FORCE_WIDGET_TAG);
    var I = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "shouldStartApp",
        value : function value() {
          return e._doesPageEnforceAppLoading() && e._notInsideThemeEditor() && e._isRightPage();
        }
      }, {
        key : "_doesPageEnforceAppLoading",
        value : function value() {
          return e._notLoadedBefore() || e._pageContentHasBeenReloadedInsteadOfNavigatingToADifferentPage();
        }
      }, {
        key : "_notLoadedBefore",
        value : function value() {
          return !identifierPositions.hasLoadedBefore();
        }
      }, {
        key : "_notInsideThemeEditor",
        value : function value() {
          return !v3.isInsideThemeEditor();
        }
      }, {
        key : "_isRightPage",
        value : function value() {
          return node.isDemoPage() || node.isCollectionPage() || node.isHomePage() || node.isSearchResultsPage() || node.isProductPage() || node.isCartPage() || me.isWidgetForced();
        }
      }, {
        key : "_pageContentHasBeenReloadedInsteadOfNavigatingToADifferentPage",
        value : function listener() {
          var href;
          return performance && performance.getEntriesByType("navigation") && performance.getEntriesByType("navigation")[0] && (href = performance.getEntriesByType("navigation")[0].name), href && href !== location.href;
        }
      }]), e;
    }();
    var O = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "publishIncubateJqueryIfRequired",
        value : function value() {
          if (!window.incubateJquery) {
            window.incubateJquery = jQuery;
          }
        }
      }]), e;
    }();
    var areaHelper = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "href",
        value : function setlink(value) {
          return jQuery(value).attr("href");
        }
      }, {
        key : "hrefPathname",
        value : function setupReference(value) {
          return node.removeParameters(e.href(value));
        }
      }, {
        key : "isVisible",
        value : function confirmWindowActive(value) {
          return jQuery(value).is(":visible");
        }
      }]), e;
    }();
    var QuickBase = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isValid",
        value : function slotSelectionBtnClicked(value) {
          return e._isNotSocialNetworkUrl(value) && e._isNotImage(value);
        }
      }, {
        key : "_isNotSocialNetworkUrl",
        value : function value(key) {
          return !key.startsWith("//www.facebook.com") && !key.startsWith("//twitter.com") && !key.startsWith("//pinterest.com");
        }
      }, {
        key : "_isNotImage",
        value : function containsEndingWith(value) {
          var newWord = node.removeParameters(value);
          return !newWord.endsWith(".jpg") && !newWord.endsWith(".png") && !newWord.endsWith(".jpeg");
        }
      }]), e;
    }();
    var credential_list = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "findUnprocessedProductLinks",
        value : function convertRequireOptionValuesToCliValues() {
          return e._productLinkElements().not(options.PROCESSED_BY_INCUBATE_SELECTOR).toArray().filter(function(inEditorWidth) {
            return e._isProductLinkElementValid(inEditorWidth);
          });
        }
      }, {
        key : "_productLinkElements",
        value : function preloadImgs() {
          var itemRender = jQuery(e.COLLECTION_PRODUCT_LINK_SELECTORS.join(","));
          return 0 === itemRender.length && (itemRender = jQuery(e.COLLECTION_DEFAULT_PRODUCT_LINK_SELECTOR)), itemRender;
        }
      }, {
        key : "_isProductLinkElementValid",
        value : function update(key) {
          var val = areaHelper.href(key);
          return areaHelper.isVisible(key) && QuickBase.isValid(val);
        }
      }]), e;
    }();
    callback(credential_list, "COLLECTION_PRODUCT_LINK_SELECTORS", ['#shopify-section-collection-template a[href*="/products/"]', '#shopify-section-static-collection a[href*="/products/"]', '#shopify-section-collection a[href*="/products/"]', '.cleverapps-collections-add-to-cart-section a[href*="/products/"]']);
    callback(credential_list, "COLLECTION_DEFAULT_PRODUCT_LINK_SELECTOR", 'a[href*="/products/"]');
    var UIUtil = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "getDefaultCss",
        value : function create() {
          return {
            "word-wrap" : "break-word",
            "white-space" : "normal",
            "text-decoration" : "none",
            "line-height" : "1.2",
            "letter-spacing" : "0px"
          };
        }
      }, {
        key : "applyFontStyle",
        value : function render(text, type) {
          if ("NORMAL" === type) {
            text.css("font-weight", "normal");
            text.css("font-style", "normal");
          } else {
            if ("BOLD" === type) {
              text.css("font-weight", "bold");
              text.css("font-style", "normal");
            } else {
              if ("ITALIC" === type) {
                text.css("font-weight", "normal");
                text.css("font-style", "italic");
              } else {
                if ("BOLD_ITALIC" === type) {
                  text.css("font-weight", "bold");
                  text.css("font-style", "italic");
                }
              }
            }
          }
        }
      }, {
        key : "applyFontFamily",
        value : function getLayout(value, name) {
          /** @type {string} */
          var index = name ? name + ",Lato,'Helvetica Neue',Arial,Helvetica,sans-serif" : "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif";
          value.css("font-family", index);
        }
      }]), e;
    }();
    var path = function() {
      /**
       * @return {undefined}
       */
      function self() {
        log(this, self);
      }
      return t(self, null, [{
        key : "getCart",
        value : function init(value) {
          if (!node.isDemoPage()) {
            return element.jsonGetPromise(self.CART_API_URL, null);
          }
          setTimeout(function() {
            return value();
          }, 1e3);
        }
      }, {
        key : "addVariant",
        value : function handle(value, name, selector, data, res) {
          if (node.isDemoPage()) {
            setTimeout(function() {
              return data();
            }, 1e3);
          } else {
            var data = {
              items : [{
                id : value,
                quantity : name
              }]
            };
            data = self._addStoreCustomParametersToCartItems(data);
            jQuery.post(self.CART_API_ADD_URL, data, function(whilstNext) {
              return self._handleSuccess(data, whilstNext);
            }, "json").fail(function(xhr) {
              return self._handleError(xhr.responseJSON, res);
            });
          }
        }
      }, {
        key : "findLastAddedProduct",
        value : function getParentsUntil(elem, selector) {
          var i;
          for (i in elem.items) {
            if (elem.items[i].id === selector) {
              return elem.items[i];
            }
          }
          return elem.items[0];
        }
      }, {
        key : "_handleSuccess",
        value : function reference(elem, name) {
          if (elem) {
            elem(name);
          }
        }
      }, {
        key : "_handleError",
        value : function value(key, type) {
          if (key && key.status) {
            type(key.description);
          } else {
            type("An error happened while adding products to the shopping cart");
          }
        }
      }, {
        key : "_addStoreCustomParametersToCartItems",
        value : function camelize$1(str) {
          return window.incubate && window.incubate.addStoreCustomParametersToCartItems ? window.incubate.addStoreCustomParametersToCartItems(str) : str;
        }
      }]), self;
    }();
    callback(path, "CART_API_URL", node.getInternationalContext() + "/cart.js");
    callback(path, "CART_API_ADD_URL", node.getInternationalContext() + "/cart/add.js");
    var at = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function loadSlideScript(value, name, callback) {
          true;
        }
      }, {
        key : "_isCompatibleVersion",
        value : function initialize() {
          return window.theme && window.theme.Product && window.theme.Product.prototype._setupCartPopup;
        }
      }, {
        key : "_refreshCartPopup",
        value : function init(value, type) {
          path.getCart().then(function(r) {
            var a = jQuery(e.DEBUT_FAKE_CONTAINER_HTML);
            jQuery("body").append(a);
            var key = path.findLastAddedProduct(r, value);
            /** @type {(Element|null)} */
            var messages = document.querySelector("#cleverapps-debut-fake-container");
            var subject = new window.theme.Product(messages);
            try {
              subject._hideCartPopup({
                detail : 1
              });
            } catch (e) {
            }
            jQuery("[data-cart-popup-image-wrapper]").html("");
            if (document.querySelector("[data-cart-routes]")) {
              /** @type {*} */
              subject.cartRoutes = JSON.parse(document.querySelector("[data-cart-routes]").innerHTML);
            }
            subject._setupCartPopup(key);
            jQuery("span[data-cart-popup-quantity]").html(type);
            a.remove();
          });
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function generate_actions(key) {
          var value = key.item_count;
          jQuery(".site-header__cart-count span").first().html(value);
          if (value > 0) {
            jQuery(".site-header__cart-count").removeClass("hide");
          }
        }
      }]), e;
    }();
    callback(at, "DEBUT_FAKE_CONTAINER_HTML", '\n        <div id="cleverapps-debut-fake-container" style="display: none">\n            <p data-loader-status=""></p>\n            <div data-image-loading-animation></div>\n            <form data-product-form="">\n                <button data-add-to-cart="">\n                    <span data-add-to-cart-text=""> Add to cart </span>\n                    <span class="hide" data-loader=""> </span>\n                </button>\n            </form>\n        </div>');
    var movedNextItem = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          true;
        }
      }, {
        key : "_loadCart",
        value : function runRenderTest() {
          if (window.ajaxCart) {
            window.ajaxCart.load();
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function LiveDetectWindowSize(value) {
          if (value.item_count > 0) {
            jQuery(".cart-link__bubble").addClass("cart-link__bubble--visible");
          }
        }
      }]), e;
    }();
    var loadingPlugins = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function runRenderTest() {
          if (window.ajaxCart) {
            window.ajaxCart.load();
          } else {
            if (window.HsCartDrawer) {
              window.HsCartDrawer.updateSlideCart();
              window.HsCartDrawer.showCartPopup(1, window.$);
            }
          }
        }
      }, {
        key : "_updateCart",
        value : function value() {
          if (window.HsCartDrawer) {
            window.HsCartDrawer.updateSlideCart();
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function LiveDetectWindowSize(value) {
          if (value.item_count > 0) {
            jQuery(".site-header__cart").addClass("cart-bubble--visible");
          }
        }
      }]), e;
    }();
    var courseToDelete = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          if (str) {
            if (e._isNewVersionDrawerCart()) {
              e._loadNewDrawerCart();
            } else {
              if (e._isOldVersionDrawerCart()) {
                e._loadOldDrawerCart();
              }
            }
          } else {
            if (e._isNewVersionDrawerCart()) {
              e._updateNewDrawerCart();
            }
          }
        }
      }, {
        key : "_isNewVersionDrawerCart",
        value : function innerMapJSONValues() {
          return "object" == _typeof(window.wetheme) && "object" == _typeof(window.wetheme.cartDrawer) && "function" == typeof window.wetheme.updateCartDrawer;
        }
      }, {
        key : "_isOldVersionDrawerCart",
        value : function initialize() {
          return "function" == typeof window.Product && null !== document.querySelector("#product-box");
        }
      }, {
        key : "_loadNewDrawerCart",
        value : function render() {
          path.getCart().then(function(e) {
            window.wetheme.updateCartDrawer(e);
            window.wetheme.cartDrawer.element.dispatchEvent(new CustomEvent("cart:open"));
          });
        }
      }, {
        key : "_loadOldDrawerCart",
        value : function ProductFormComponent() {
          (new window.Product(document.querySelector("#product-box"))).update_cart();
        }
      }, {
        key : "_updateNewDrawerCart",
        value : function tapped_callback() {
          path.getCart().then(function(e) {
            window.wetheme.updateCartDrawer(e);
          });
        }
      }]), e;
    }();
    var capstone = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function loadSlideScript(value, name, callback) {
          e._updateCartIcon();
        }
      }, {
        key : "_ajaxCartEnabled",
        value : function value() {
          /** @type {boolean} */
          var e = null !== document.querySelector("[data-header-cart]");
          var isIE = window.headerCartBuildProduct && "function" == typeof window.headerCartBuildProduct;
          return e && isIE;
        }
      }, {
        key : "_refreshAjaxCart",
        value : function value(key, type) {
          /** @type {boolean} */
          var checkBufferInterval = null !== document.querySelector('[data-header-cart-item="' + key + '"]');
          path.getCart().then(function(r) {
            var value = path.findLastAddedProduct(r, key);
            window.headerCartBuildProduct(r, checkBufferInterval, value, type);
          });
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("span#cartItemCount").html(value.item_count);
        }
      }]), e;
    }();
    var person = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          true;
        }
      }, {
        key : "_showNotification",
        value : function UISwitch() {
          if (window.theme && window.theme.Notify) {
            window.theme.Notify.open("success", false, true);
          }
        }
      }, {
        key : "_isNotificationEnabled",
        value : function onQuietReady() {
          /** @type {(Element|null)} */
          var form = document.querySelector(e.PRODUCT_SECTION_SELECTOR);
          return form && "true" === form.getAttribute("data-ajax");
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function doDeleteConfirmation(value) {
          if (value.item_count > 0) {
            jQuery(".site-header__cart-indicator").removeClass("hide");
          }
        }
      }]), e;
    }();
    callback(person, "PRODUCT_SECTION_SELECTOR", "#ProductSection-product-template");
    var M = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("span#CartCount").html(value.item_count);
        }
      }]), e;
    }();
    var tempStyleElement = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._openDrawerCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_openDrawerCart",
        value : function render() {
          if (window.theme && window.theme.sections && window.theme.sections.instances) {
            var $scope = window.theme.sections.instances[0];
            $scope.refresh();
            $scope.drawerOpen();
            $scope.$ajaxCart.removeClass("cart-drawer--empty");
          }
        }
      }, {
        key : "_updateCart",
        value : function parse() {
          if (window.theme && window.theme.sections && window.theme.sections.instances) {
            window.theme.sections.instances[0].refresh();
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function LiveDetectWindowSize(value) {
          if (value.item_count > 0) {
            jQuery(".site-header__cart-bubble").addClass("site-header__cart-bubble--visible");
          }
        }
      }]), e;
    }();
    var $deepPage = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function showLargeImage() {
          jQuery("#ajaxifyCart").load('/cart form[action="/cart"]', function() {
            if (document.querySelectorAll(".cart-toggle")) {
              document.querySelectorAll(".cart-toggle")[0].click();
            }
          });
        }
      }, {
        key : "_updateCart",
        value : function showLargeImage() {
          jQuery("#ajaxifyCart").load('/cart form[action="/cart"]');
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showTaskDetails(value) {
          var filename = value.item_count;
          jQuery(".cart-toggle .cart-count").html(filename);
          if (filename > 0) {
            jQuery(".cart-toggle .cart-count").removeClass("hidden-count");
          }
        }
      }]), e;
    }();
    var $tweakPanel = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._triggerProductAddedEvent();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_triggerProductAddedEvent",
        value : function finishUpAndReturn() {
          document.dispatchEvent(new CustomEvent("product:added", {
            bubbles : true,
            detail : {
              variant : 123,
              quantity : 1
            }
          }));
        }
      }, {
        key : "_updateCart",
        value : function finishUpAndReturn() {
          document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
            bubbles : true
          }));
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function show(value) {
          var filename = value.item_count;
          jQuery("span.Header__CartCount").html(filename);
          if (filename > 0) {
            jQuery("span.Header__CartDot").addClass("is-visible");
          }
        }
      }]), e;
    }();
    var Q = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(function(inEditorWidth) {
            e._updateCartSummary(inEditorWidth);
            e._triggerCurrencyConversion();
          });
        }
      }, {
        key : "_updateCartSummary",
        value : function assignVar(data) {
          e._updateCartCount(data.item_count);
          e._updateCartTotal(data.total_price);
        }
      }, {
        key : "_updateCartCount",
        value : function resetFolder(value) {
          jQuery("#CartCount").html(value);
        }
      }, {
        key : "_updateCartTotal",
        value : function exports(value) {
          var t = jQuery("#CartCost");
          var n = window.theme.Currency.formatMoney(value, window.theme.moneyFormat);
          t.html(n);
        }
      }, {
        key : "_triggerCurrencyConversion",
        value : function Function_define() {
          if ("function" == typeof convertCurrencies) {
            convertCurrencies();
          }
        }
      }]), e;
    }();
    var categoriesTitleElement = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          true;
        }
      }, {
        key : "_loadCart",
        value : function tapped_callback() {
          if (e._drawerCartExists()) {
            e._openDrawerCart();
            path.getCart().then(function() {
              return window.timber.cartUpdatePopup;
            });
          }
        }
      }, {
        key : "_drawerCartExists",
        value : function generateKey_() {
          return window.timber && window.timber.RightDrawer && window.timber.RightDrawer.config;
        }
      }, {
        key : "_openDrawerCart",
        value : function generateKey_() {
          window.timber.RightDrawer.config.onDrawerOpen();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          var filename = value.item_count;
          jQuery(".CartCount").html(filename);
        }
      }]), e;
    }();
    var X = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function popUpChildMenu(value) {
          var i = value.item_count;
          var t = jQuery(".site-header-cart--count");
          if (0 === i) {
            t.removeClass("visible");
          } else {
            t.attr("data-header-cart-count", i).addClass("visible");
          }
        }
      }]), e;
    }();
    var _oUtils = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function interpolationHandler(elem, name) {
          e._updateCartIcon();
          if (name) {
            e._displayAjaxCart(elem);
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(function(inEditorWidth) {
            e._updateCartSummary(inEditorWidth);
            e._triggerCurrencyConversion();
          });
        }
      }, {
        key : "_displayAjaxCart",
        value : function key(value) {
          path.getCart().then(function(inEditorWidth) {
            e._updateCartSummary(inEditorWidth);
            e._showCartPreview(inEditorWidth, value);
            e._triggerCurrencyConversion();
          });
        }
      }, {
        key : "_updateCartSummary",
        value : function assignVar(data) {
          e._updateCartTotal(data.total_price);
          e._updateCartCount(data.item_count);
        }
      }, {
        key : "_showCartPreview",
        value : function interpolationHandler(elem, name) {
          if (e._cartPreviewEnabled()) {
            e._triggerCartPreview(elem, name);
          }
        }
      }, {
        key : "_triggerCurrencyConversion",
        value : function formatNumber() {
          if (e._themeCurrencyConverterEnabled()) {
            var artistTrack = window.StyleHatch.shopCurrency;
            var minbox = jQuery("[name=currencies]");
            window.Currency.convertAll(artistTrack, minbox.val());
          }
        }
      }, {
        key : "_updateCartTotal",
        value : function exports(value) {
          var options = window.StyleHatch.currencyFormat;
          var removedEvent = window.theme.Currency.formatMoney(value, options);
          var tweets_container = jQuery("#CartCost");
          tweets_container.empty();
          tweets_container.html('<span class="money">' + removedEvent + "</span>");
        }
      }, {
        key : "_updateCartCount",
        value : function resetFolder(value) {
          jQuery("#CartCount").html(value);
        }
      }, {
        key : "_cartPreviewEnabled",
        value : function Function_define() {
          return "function" == typeof window.StyleHatch.AjaxCart.showCartPreview;
        }
      }, {
        key : "_triggerCartPreview",
        value : function persistToLocalstorage(key, type) {
          var n = path.findLastAddedProduct(key, type);
          if (n) {
            /** @type {string} */
            var matrixX = JSON.stringify(n);
            window.StyleHatch.AjaxCart.showCartPreview(matrixX, key);
          }
        }
      }, {
        key : "_themeCurrencyConverterEnabled",
        value : function formatNumber() {
          return window.StyleHatch && window.StyleHatch.currencyConverter && window.Currency;
        }
      }]), e;
    }();
    var J = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery(".icon_cart .tcount").html(value.item_count);
        }
      }]), e;
    }();
    callback(J, "ajaxCart", function(canCreateDiscussions) {
      J._updateCartIcon();
      if (canCreateDiscussions && J._ajaxCartEnabled()) {
        J._refreshAjaxCart();
      }
    });
    callback(J, "_ajaxCartEnabled", function() {
      return window.geckoShopify && "object" == _typeof(window.geckoShopify) && window.geckoShopify.onCartUpdate && "function" == typeof window.geckoShopify.onCartUpdate;
    });
    callback(J, "_refreshAjaxCart", function() {
      window.geckoShopify.onCartUpdate(1, 1);
    });
    var relatedVideo = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
            e._updateCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function callback() {
          document.dispatchEvent(new CustomEvent("ajaxProduct:added", {
            detail : {
              addToCartBtn : null
            }
          }));
          if (window.$) {
            window.$(document.body).trigger("added.ajaxProduct");
            window.theme.cart.getCart().then(function(boneData) {
              window.$(document.body).trigger("updateCart", boneData);
            });
          }
        }
      }, {
        key : "_updateCart",
        value : function render() {
          if (window.theme && window.theme.cart && window.theme.cart.getCart) {
            window.theme.cart.getCart().then(function(props) {
              e._updateCartBubble(props);
              document.dispatchEvent(new CustomEvent("updateCart.ajaxcart", {
                detail : {
                  items : props.items
                }
              }));
            });
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function value(key) {
          /** @type {(Element|null)} */
          var prettyPrintButton = document.querySelector(".cart-link__bubble");
          var count = key.item_count;
          /** @type {string} */
          var doc = "cart-link__bubble--visible";
          if (0 == count) {
            prettyPrintButton.classList.remove(doc);
          } else {
            prettyPrintButton.classList.add(doc);
          }
          /** @type {(Element|null)} */
          var timeCounter = document.querySelector(".cart-link__count");
          if (timeCounter) {
            timeCounter.textContent = count;
          }
        }
      }]), e;
    }();
    var clickedPlaylist = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function tapped_callback() {
          if (window.Shopify && window.Shopify.updateQuickCart) {
            path.getCart().then(window.Shopify.updateQuickCart);
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartCount);
        }
      }, {
        key : "_updateCartCount",
        value : function dayHovering(value) {
          var t = jQuery(".cart-icon .count");
          var i = value.item_count;
          if (0 === i) {
            t.addClass("hidden");
          } else {
            t.html(i).removeClass("hidden");
          }
        }
      }]), e;
    }();
    var chaiWrapper = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function value() {
          var RHSong = e._getLoadFunction();
          if (RHSong) {
            RHSong();
          }
        }
      }, {
        key : "_getLoadFunction",
        value : function Rondell() {
          return window.ajaxCart && window.ajaxCart.load && "function" == typeof window.ajaxCart.load ? window.ajaxCart.load : window.theme.ajaxCart && window.theme.ajaxCart.update && "function" == typeof window.theme.ajaxCart.update ? window.theme.ajaxCart.update : null;
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showSelectedInfo(value) {
          var filename = value.item_count;
          $(".cart-link .cart-count").html(filename);
          var $userElement = $(".cart-link .cart-link__bubble");
          /** @type {string} */
          var READONLY_CLS = "cart-bubble--visible";
          if (0 == filename) {
            $userElement.removeClass(READONLY_CLS);
          } else {
            $userElement.addClass(READONLY_CLS);
          }
        }
      }]), e;
    }();
    var joystickIDs = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          } else {
            e._renderCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function finishUpAndReturn() {
          e._renderCart();
          document.dispatchEvent(new CustomEvent("productAddedToCart"));
        }
      }, {
        key : "_renderCart",
        value : function isPortDuplicated() {
          window.carts.forEach(function(canCreateDiscussions) {
            canCreateDiscussions.onCartUpdated();
          });
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showTaskDetails(value) {
          var filename = value.item_count;
          jQuery(".header__cart-count-bubble span[data-cart-count]").html(filename);
          if (filename > 0) {
            jQuery(".header__cart-count-bubble").removeClass("hide");
          }
        }
      }]), e;
    }();
    var _collabDiv = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._triggerProductAddedEvent();
          }
        }
      }, {
        key : "_triggerProductAddedEvent",
        value : function finishUpAndReturn() {
          /** @type {!CustomEvent} */
          var wdoYoutubePlayerReadyEvent = new CustomEvent("product:added", {
            bubbles : true,
            detail : {
              quantity : 1
            }
          });
          document.documentElement.dispatchEvent(wdoYoutubePlayerReadyEvent);
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery(".span.header__cart-count").html(value.item_count);
        }
      }]), e;
    }();
    var CustomContracts = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
        }
      }, {
        key : "_getThemeInstance",
        value : function innerMapJSONValues() {
          return window.f && "object" == _typeof(window.f) && "function" == typeof window.f.getPopupShoppingCart ? window.f : window.ella && "object" == _typeof(window.ella) && "function" == typeof window.ella.getPopupShoppingCart ? window.ella : null;
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery(".header-bottom span.cartCount").html(value.item_count);
        }
      }]), e;
    }();
    var locationsIds = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
        }
      }, {
        key : "_refreshAjaxCart",
        value : function tapped_callback() {
          path.getCart().then(function(t) {
            window.refreshCart(t);
            e._manualShowAjaxCart();
          });
        }
      }, {
        key : "_manualShowAjaxCart",
        value : function popUpChildMenu() {
          if (jQuery("#header").is(":visible")) {
            jQuery("#header .cart-container, #header .cart_container").addClass("active_link");
          } else {
            if (jQuery(".sticky_nav--stick").length) {
              jQuery(".sticky_nav .cart-container, .sticky_nav .cart_container").addClass("active_link");
            } else {
              jQuery(".top-bar .cart-container, .top-bar .cart_container, .top_bar .cart_container").addClass("active_link");
            }
          }
        }
      }]), e;
    }();
    callback(locationsIds, "_ajaxCartEnabled", function() {
      return window.refreshCart && "function" == typeof window.refreshCart;
    });
    var jrow = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str && e._ajaxCartEnabled()) {
            e._showAjaxCart();
          }
        }
      }, {
        key : "_ajaxCartEnabled",
        value : function innerMapJSONValues() {
          return window.ajaxCart && "object" == _typeof(window.ajaxCart) && window.theme && "object" == _typeof(window.theme) && "function" == typeof window.theme.mfpOpen;
        }
      }, {
        key : "_showAjaxCart",
        value : function set() {
          window.ajaxCart.load();
          setTimeout(function() {
            window.theme.mfpOpen("cart");
          }, 100);
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("span#CartCount").html(value.item_count);
        }
      }]), e;
    }();
    var codeService = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str && e._ajaxCartEnabled()) {
            e._refreshAjaxCart();
          } else {
            e._updateAjaxCart();
          }
        }
      }, {
        key : "_ajaxCartEnabled",
        value : function init() {
          return window.Shopify.theme.jsAjaxCart && window.Shopify.theme.jsAjaxCart.cart_action && ("drawer" === window.Shopify.theme.jsAjaxCart.cart_action || "mini_cart" === window.Shopify.theme.jsAjaxCart.cart_action) && window.Shopify.theme.jsAjaxCart.showDrawer && "function" == typeof window.Shopify.theme.jsAjaxCart.showDrawer && window.Shopify.theme.jsAjaxCart.updateView && "function" == typeof window.Shopify.theme.jsAjaxCart.updateView;
        }
      }, {
        key : "_refreshAjaxCart",
        value : function set() {
          Shopify.theme.jsAjaxCart.updateView();
          Shopify.theme.jsAjaxCart.showDrawer();
          e._showMiniCart();
        }
      }, {
        key : "_updateAjaxCart",
        value : function Projector() {
          if (window.Shopify.theme.jsAjaxCart && window.Shopify.theme.jsAjaxCart.updateView) {
            Shopify.theme.jsAjaxCart.updateView();
          }
        }
      }, {
        key : "_showMiniCart",
        value : function LiveDetectWindowSize() {
          jQuery(".header-cart").addClass("show-mini-cart");
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showTaskDetails(value) {
          var self = jQuery("span.header-cart__count--badge");
          if (value.item_count > 0) {
            jQuery("div.header-cart").addClass("has-cart-count");
          } else {
            jQuery("div.header-cart").removeClass("has-cart-count");
          }
          self.html(value.item_count);
        }
      }]), e;
    }();
    var se = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function delayStateChange(elem, type) {
          e._updateCartIcon();
          if (type && e._isDrawerCart()) {
            e._loadDrawerCartSections(elem);
          } else {
            if (type && e._isCartNotification()) {
              e._loadCartNotificationSections(elem);
            }
          }
        }
      }, {
        key : "_isDrawerCart",
        value : function value() {
          return !!e._getDrawerCart();
        }
      }, {
        key : "_isCartNotification",
        value : function controller() {
          return window.customElements && window.customElements.get("cart-notification") && "function" == typeof window.customElements.get("cart-notification");
        }
      }, {
        key : "_getDrawerCart",
        value : function TSTBase_getFirstNormalTab() {
          return document.querySelector("cart-drawer");
        }
      }, {
        key : "_getCartNotification",
        value : function isGeneratedBy() {
          /** @type {(Element|null)} */
          var e = document.querySelector("cart-notification");
          return e || new CartNotification;
        }
      }, {
        key : "_getNotificationParams",
        value : function value() {
          return "sections=" + e.HEADER_ICON_SECTION + ",cart-notification-product,cart-notification-button";
        }
      }, {
        key : "_getDrawerParams",
        value : function value() {
          return "sections=" + e.HEADER_ICON_SECTION + ",cart-drawer";
        }
      }, {
        key : "_loadDrawerCartSections",
        value : function key(value) {
          var reject = e._getDrawerParams();
          element.jsonGetPromise("/", reject).then(function(inEditorHeight) {
            e._loadDrawer(value, inEditorHeight);
          });
        }
      }, {
        key : "_loadCartNotificationSections",
        value : function key(value) {
          var reject = e._getNotificationParams();
          element.jsonGetPromise("/", reject).then(function(inEditorHeight) {
            e._loadNotification(value, inEditorHeight);
          });
        }
      }, {
        key : "_loadNotification",
        value : function value(key, type) {
          path.getCart().then(function(directory) {
            var s = path.findLastAddedProduct(directory, key);
            e._getCartNotification().renderContents({
              id : key,
              key : s.key,
              sections : type
            });
          });
        }
      }, {
        key : "_loadDrawer",
        value : function value(key, type) {
          path.getCart().then(function(directory) {
            var s = path.findLastAddedProduct(directory, key);
            var back = e._getDrawerCart();
            back.classList.remove("is-empty");
            back.renderContents({
              id : key,
              key : s.key,
              sections : type
            });
          });
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function value(elem) {
          var self = jQuery("#cart-icon-bubble .cart-count-bubble span");
          if (0 === jQuery("#cart-icon-bubble .cart-count-bubble").length) {
            jQuery("#cart-icon-bubble").append(jQuery('<div class="cart-count-bubble"><span aria-hidden="true">0</span><span class="visually-hidden">0 items</span></div>'));
          }
          self.html(elem.item_count);
          jQuery("#cart-icon-bubble .cart-count-bubble span.visually-hidden").html(elem.item_count + "items");
        }
      }]), e;
    }();
    callback(se, "HEADER_ICON_SECTION", "cart-icon-bubble");
    var SEA = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function delayStateChange(elem, type) {
          if (type && e._hasAddedCallback()) {
            e._fireAddedCallback(elem);
          }
        }
      }, {
        key : "_hasAddedCallback",
        value : function ObservableArray() {
          return window.Shopify.onItemAdded && "function" == typeof window.Shopify.onItemAdded;
        }
      }, {
        key : "_fireAddedCallback",
        value : function addItem(value) {
          path.getCart().then(function(level) {
            var index = path.findLastAddedProduct(level, value);
            window.Shopify.onItemAdded(index);
          });
        }
      }]), e;
    }();
    var backupPage = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str && e._isDrawerCart()) {
            e._showDrawer();
          }
        }
      }, {
        key : "_isDrawerCart",
        value : function value() {
          return e._is2xVersion() || e._is5xVersion() || e._isNewVersion();
        }
      }, {
        key : "_is2xVersion",
        value : function Function_define() {
          return window.addToCartSuccessCallback && "function" == typeof window.addToCartSuccessCallback;
        }
      }, {
        key : "_is5xVersion",
        value : function mapStateToProps() {
          return window.theme && window.theme.partials && window.theme.partials.cart && window.theme.partials.cart.recentCartItemPopUp && "function" == typeof window.theme.partials.cart.recentCartItemPopUp;
        }
      }, {
        key : "_isNewVersion",
        value : function renderTemplate() {
          return window.theme && window.theme.partials && window.theme.partials.Cart && window.theme.partials.Cart.updateAllHtml && "function" == typeof window.theme.partials.Cart.updateAllHtml && window.theme.partials.Product && window.theme.partials.Product.addProductComplete && "function" == typeof window.theme.partials.Product.addProductComplete;
        }
      }, {
        key : "_showDrawer",
        value : function init() {
          if (e._is2xVersion()) {
            window.addToCartSuccessCallback();
          } else {
            if (e._is5xVersion()) {
              window.theme.partials.cart.recentCartItemPopUp();
            } else {
              if (e._isNewVersion()) {
                window.theme.partials.Cart.updateAllHtml(function() {
                  window.theme.partials.Product.addProductComplete();
                });
              }
            }
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function voContentWatchAction(value) {
          jQuery("span.cart--external--total-items").html(value.item_count);
          jQuery(".header--cart-link .number-wrapper").attr("data-item-count", value.item_count);
          jQuery(".header--cart-link .number-wrapper").attr("style", "");
          jQuery("span.header--cart-number").attr("data-item-count", value.item_count);
        }
      }]), e;
    }();
    var readingPaneMenu = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str && (e._isNewVersion() || e._isOldVersion())) {
            e._loadCart();
          }
        }
      }, {
        key : "_isNewVersion",
        value : function value() {
          var id = e._findConfig();
          return !!id && (e._isDrawerCart(id) || e._isModalCart(id));
        }
      }, {
        key : "_findConfig",
        value : function handleVideoLoad() {
          /** @type {(Element|null)} */
          var appContainer = document.getElementById("cart-config");
          return appContainer ? JSON.parse(appContainer.innerHTML) : null;
        }
      }, {
        key : "_isDrawerCart",
        value : function transition(value) {
          return "drawer" === value.cart_action;
        }
      }, {
        key : "_isModalCart",
        value : function camelize$1(str) {
          return "modal_cart" === str.cart_action;
        }
      }, {
        key : "_isOldVersion",
        value : function ViewReviewViewModel() {
          return window.ajaxCart && window.ajaxCart.load && "function" == typeof window.ajaxCart.load;
        }
      }, {
        key : "_loadCart",
        value : function runRenderTest() {
          if (e._isNewVersion()) {
            e._showNewVersion();
          } else {
            if (e._isOldVersion()) {
              window.ajaxCart.load();
            }
          }
        }
      }, {
        key : "_showNewVersion",
        value : function init() {
          path.getCart().then(function(props) {
            var posX = e._findConfig();
            window.Shopify.theme.ajaxCart.updateView(posX, props);
            if (e._isDrawerCart(posX)) {
              window.Shopify.theme.ajaxCart.showDrawer(posX);
            } else {
              if (e._isModalCart(posX)) {
                window.Shopify.theme.ajaxCart.showModal(posX);
              }
            }
          });
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("span.js-cart-count").html(value.item_count);
        }
      }]), e;
    }();
    var $hashcashField = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str && e._isDrawerCart()) {
            e._loadCart();
          }
        }
      }, {
        key : "_isDrawerCart",
        value : function Function_define() {
          return window.ajaxifyShopify && window.ajaxifyShopify.cartUpdateCallback && "function" == typeof window.ajaxifyShopify.cartUpdateCallback;
        }
      }, {
        key : "_loadCart",
        value : function tapped_callback() {
          path.getCart().then(function(e) {
            window.ajaxifyShopify.cartUpdateCallback(e);
          });
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showTaskDetails(value) {
          var self = jQuery("span.cart-count");
          if (value.item_count > 0) {
            jQuery("span.hidden-count").removeClass("hidden-count");
          } else {
            jQuery("span.hidden-count").addClass("hidden-count");
          }
          self.html(value.item_count);
        }
      }]), e;
    }();
    var ObjectOperation = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function addNewLinkName(key, type) {
          e._updateCartIcon();
          if (key && e._isAjaxCart()) {
            e._loadAjaxCart(type);
          }
        }
      }, {
        key : "_isAjaxCart",
        value : function value() {
          var t = e._isOldVersion();
          var types = e._isNewVersion();
          return t || types;
        }
      }, {
        key : "_isOldVersion",
        value : function Function_define() {
          return window.addToCartOkay && "function" == typeof window.addToCartOkay;
        }
      }, {
        key : "_isNewVersion",
        value : function checkout() {
          return window.cart && window.cart.getCart && "function" == typeof window.cart.getCart && window.cart.openCartDropdown && "function" == typeof window.cart.openCartDropdown;
        }
      }, {
        key : "_loadOldNotification",
        value : function value(key) {
          path.getCart().then(function(assetRoot) {
            var filePath = path.findLastAddedProduct(assetRoot, key);
            window.addToCartOkay(filePath);
          });
        }
      }, {
        key : "_loadAjaxCart",
        value : function redraw(value) {
          if (e._isOldVersion()) {
            e._loadOldNotification(value);
          } else {
            if (e._isNewVersion()) {
              window.cart.getCart();
              window.cart.openCartDropdown();
            }
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showLargeImage(value) {
          var self = jQuery("span.header__cart__status");
          self.html(value.item_count);
          self.attr("data-header-cart-count", value.item_count);
        }
      }]), e;
    }();
    var pinsync = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function addNewLinkName(key, type) {
          e._updateCartIcon();
          if (key) {
            e._triggerAjaxCart(type);
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_triggerAjaxCart",
        value : function go(value) {
          path.getCart().then(function(normal) {
            var str = path.findLastAddedProduct(normal, value);
            document.dispatchEvent(new CustomEvent("theme:cart:popdown", {
              detail : {
                variant : str
              }
            }));
          });
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function exports(data) {
          jQuery("span[data-header-cart-count]").html("(" + data.item_count + ")");
          var t = jQuery("span[data-header-cart-price]");
          var n = window.theme.Currency && window.theme.Currency.formatMoney ? window.theme.Currency.formatMoney(data.total_price, window.theme.moneyFormat) : data.total_price;
          t.html(n);
        }
      }, {
        key : "_updateCart",
        value : function doInit() {
          path.getCart().then(function(cart) {
            document.dispatchEvent(new CustomEvent("theme:cart:change", {
              detail : {
                cart : cart
              },
              bubbles : true
            }));
          });
        }
      }]), e;
    }();
    var aioIdentityService = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          if (str) {
            e._showDrawer();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_showDrawer",
        value : function TestRecordsIntegrity() {
          if (window.wetheme && window.wetheme.toggleRightDrawer) {
            path.getCart().then(function(cart) {
              return window.wetheme.toggleRightDrawer("cart", true, {
                cart : cart
              });
            });
          }
        }
      }, {
        key : "_updateCart",
        value : function tapped_callback() {
          if (window.wetheme && window.wetheme.updateCartDrawer) {
            path.getCart().then(function(e) {
              return window.wetheme.updateCartDrawer(e);
            });
          }
        }
      }]), e;
    }();
    var b = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "debug",
        value : function _register(value) {
          if (e.DEBUG) {
            e.log(value);
          }
        }
      }, {
        key : "log",
        value : function setSortingCriteria(key) {
          try {
            console.log(key);
          } catch (e) {
          }
        }
      }, {
        key : "enableDebug",
        value : function getFlightRegistry() {
          /** @type {boolean} */
          e.DEBUG = true;
        }
      }, {
        key : "disableDebug",
        value : function getFlightRegistry() {
          /** @type {boolean} */
          e.DEBUG = false;
        }
      }]), e;
    }();
    callback(b, "DEBUG", false);
    var simpleselect = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCart();
          if (str) {
            e._loadCart();
          }
        }
      }, {
        key : "_updateCart",
        value : function init() {
          if (window.Avatar && window.Avatar.theme && window.Avatar.theme.sections && window.Avatar.theme.sections.SliderCart && window.Avatar.theme.sections.SliderCart.instance && window.Avatar.theme.sections.SliderCart.instance.refreshCartSlider) {
            window.Avatar.theme.sections.SliderCart.instance.refreshCartSlider();
          }
        }
      }, {
        key : "_loadCart",
        value : function init() {
          if (window.Avatar && window.Avatar.theme && window.Avatar.theme.sections && window.Avatar.theme.sections.SliderCart && window.Avatar.theme.sections.SliderCart.instance && window.Avatar.theme.sections.SliderCart.instance.openSliderCart) {
            window.Avatar.theme.sections.SliderCart.instance.openSliderCart();
          }
        }
      }]), e;
    }();
    var livefyreUser = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function preloadImgs() {
          if (jQuery(".icon-cart").length > 0) {
            jQuery(".icon-cart")[0].click();
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          if (jQuery("header a.icon-cart span.cart_count").length > 0) {
            var t = value.items.length;
            jQuery("header a.icon-cart span.cart_count").html(t);
          }
        }
      }]), e;
    }();
    var currentBp = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function DockerData() {
          if (window.ajaxCart && window.ajaxCart.load) {
            window.ajaxCart.load();
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery(".num-items-in-cart .number").html(value.item_count);
        }
      }]), e;
    }();
    var selectedUserAgent = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          if (str) {
            e._loadCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function cleanup() {
          if (window.$ && window.$.magnificPopup && Shopify.loadQuickCart) {
            path.getCart().then(function(page) {
              Shopify.loadQuickCart(page);
              window.$.magnificPopup.close();
            });
          }
        }
      }, {
        key : "_updateCart",
        value : function tapped_callback() {
          if (Shopify.loadQuickCart) {
            path.getCart().then(function(page) {
              Shopify.loadQuickCart(page);
            });
          }
        }
      }]), e;
    }();
    var rulerToolbar = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function onload() {
          setTimeout(function() {
            return window.$("a.icon-cart.cart-button").click();
          }, 300);
        }
      }, {
        key : "_updateCart",
        value : function tapped_callback() {
          if (window.refreshCart) {
            path.getCart().then(function(e) {
              return window.refreshCart(e);
            });
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery(".cart .icon-cart > span").html(value.item_count);
        }
      }]), e;
    }();
    var Selectivity = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function delayStateChange(elem, type) {
          e._updateCartIcon();
          if (type) {
            e._loadCart(elem);
          }
        }
      }, {
        key : "_loadCart",
        value : function render(value) {
          if (window.theme && window.theme.Nav && window.theme.Shopify && window.theme.Shopify.formatImage && window.showThemeModal) {
            path.getCart().then(function(tx) {
              var data = path.findLastAddedProduct(tx, value);
              var newNodeLists = "inline" !== window.theme.Nav().bar.getPositionSetting() ? window.theme.Nav().bar.height() : 25;
              var testMiddlewares = window.theme.Shopify.formatImage(data.image, "300x");
              window.showThemeModal(['<div id="added-to-cart" class="theme-modal theme-modal--small" role="dialog" aria-modal="true" aria-labelledby="added-to-cart-title">', '<div class="inner" style="top:'.concat(newNodeLists, 'px">'), '<a href="#" data-modal-close class="modal-close">\u00d7</a>', '<h4 id="added-to-cart-title">' + window.theme.icons.tick + window.theme.strings.productAddedToCart + "</h4>", '<div class="cart-product">', '<div class="cart-product__image"><img src="'.concat(testMiddlewares, 
              '" alt="').concat(data.featured_image.alt, '"/></div>'), '<div class="cart-product__content"><p class="cart-product__content__title">', data.product_title, "</p>" + "".concat("") + "</div>", "</div>", '<p class="links '.concat("", '">'), '<a href="' + window.theme.routes.cart_url + '" class="button '.concat("alt", '">') + window.theme.strings.viewCart + "</a>", '<a href="' + window.theme.routes.checkout + '" class="button button--checkout" [data-cc-checkout-button]>' + window.theme.strings.popupCheckout + 
              "</a> ", "</p>", "</div>", "</div>"].join(""), null, null, false, true);
            });
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("a.cart-icon--basket1 > div").html(value.item_count);
          jQuery("div.nav-right-side a.cart div").html(value.item_count);
        }
      }]), e;
    }();
    var lineGuidesToolbar = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          if (str) {
            e._loadCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function _drop_func() {
          if (window.theme && window.theme.CartDrawer && window.theme.CartDrawer.prototype.buildCart) {
            var allTraps = new window.theme.CartDrawer;
            path.getCart().then(function(t) {
              return allTraps.buildCart(t, true);
            });
          }
        }
      }, {
        key : "_updateCart",
        value : function _drop_func() {
          if (window.theme && window.theme.CartDrawer && window.theme.CartDrawer.prototype.buildCart) {
            var allTraps = new window.theme.CartDrawer;
            path.getCart().then(function(t) {
              return allTraps.buildCart(t, false);
            });
          }
        }
      }]), e;
    }();
    var colorPickerToolbar = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function presentGeoIpHook() {
          if (window.$) {
            window.$("#cartTotal").click();
          }
        }
      }, {
        key : "_updateCart",
        value : function tapped_callback() {
          if (window.Cart && window.Cart.getCart && window.Cart.buildCart) {
            window.Cart.getCart(window.Cart.buildCart);
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showHoverCorner(value) {
          if (value.item_count > 0) {
            jQuery(".header-icons .cartToggle--empty .icon-cart path:last-child").css("opacity", 1);
          }
        }
      }]), e;
    }();
    var xe = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          var filename = value.item_count;
          jQuery("a.sidebar__cart-handle>span.count").html(filename);
        }
      }]), e;
    }();
    var Te = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          var filename = value.item_count;
          jQuery(".header-cart__count").html(filename);
        }
      }]), e;
    }();
    var Ae = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          if (jQuery(".cartsummary__inner span.numitems").length > 0) {
            jQuery(".cartsummary__inner span.numitems").html("(" + value.item_count + ")");
          }
        }
      }]), e;
    }();
    var Ee = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showSidebarTab(value) {
          if (value.item_count > 0) {
            jQuery("span.header-cart-count").addClass("active");
          }
        }
      }]), e;
    }();
    var Pe = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showTaskDetails(value) {
          if (value.item_count > 0) {
            jQuery(".cart-page-link .cart-count").removeClass("hidden-count");
            jQuery(".cart-page-link .cart-count").html(value.item_count);
          }
        }
      }]), e;
    }();
    var Ie = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function showTaskDetails(value) {
          if (value.item_count > 0) {
            jQuery("a.cart span.item-count").removeClass("empty");
            jQuery("a.cart span.item-count").html(value.item_count);
          }
        }
      }]), e;
    }();
    var Oe = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("a.cart_button span.cart_count").html(value.item_count);
        }
      }]), e;
    }();
    var De = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("div.header__cart-count span").html(value.item_count);
        }
      }]), e;
    }();
    var Be = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("span.enj-cartcount").html(value.item_count);
        }
      }]), e;
    }();
    var je = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("div.cart-info a em").html(value.item_count);
        }
      }]), e;
    }();
    var Le = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function preloadImgs() {
          if (jQuery("a.cart-count .beside-svg").length > 0) {
            path.getCart().then(e._updateCartBubble);
          } else {
            path.getCart().then(e._updateNewCartBubble);
          }
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          if (jQuery("a.cart-count .beside-svg").length > 0) {
            jQuery("a.cart-count .beside-svg").html("(" + value.item_count + ")");
            jQuery("a.cart-count .cart-count__text").html("(" + value.item_count + ")");
          }
        }
      }, {
        key : "_updateNewCartBubble",
        value : function value(elem) {
          if (jQuery(".cart-link__count").length > 0) {
            jQuery(".cart-link__count").html(elem.item_count);
          } else {
            var $adjacentLis = jQuery('<span class="cart-link__count">' + elem.item_count + "</span>");
            jQuery(".cart-link__icon").append($adjacentLis);
          }
        }
      }]), e;
    }();
    var $newelem = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function value() {
          e._updateCartIcon();
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function exports(data) {
          jQuery("span.cartCountSelector").html(data.item_count);
          if (window.theme && window.Shopify && window.Shopify.formatMoney && window.theme.moneyFormat) {
            jQuery(".cartTotalSelector").html(window.Shopify.formatMoney(data.total_price, window.theme.moneyFormat));
          }
        }
      }]), e;
    }();
    var parenttr = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          if (str) {
            e._loadCart();
          } else {
            e._updateCart();
          }
        }
      }, {
        key : "_loadCart",
        value : function init() {
          fetch("?section_id=cart-helper").then(function(e) {
            return e.text();
          }).then(function(svgString) {
            /** @type {(Document|null)} */
            var doc = (new DOMParser).parseFromString(svgString, "text/html");
            /** @type {string} */
            var inactiveButton = doc.getElementById("AjaxCartForm").innerHTML;
            /** @type {string} */
            var origNav = doc.getElementById("AjaxCartSubtotal").innerHTML;
            /** @type {(Element|null)} */
            var button = document.getElementById("AjaxCartForm");
            /** @type {string} */
            button.innerHTML = inactiveButton;
            button.ajaxifyCartItems();
            /** @type {string} */
            document.getElementById("AjaxCartSubtotal").innerHTML = origNav;
            window.preloadImages(button);
            /** @type {string} */
            document.querySelector("[data-header-cart-count]").textContent = document.querySelector("#AjaxCartForm [data-cart-count]").textContent;
            /** @type {(Element|null)} */
            var $innerblock = document.getElementById("site-cart");
            document.getElementById("site-cart-handle").setAttribute("aria-expanded", "true");
            $innerblock.show();
          });
        }
      }, {
        key : "_updateCart",
        value : function init() {
          fetch("?section_id=cart-helper").then(function(e) {
            return e.text();
          }).then(function(svgString) {
            /** @type {(Document|null)} */
            var doc = (new DOMParser).parseFromString(svgString, "text/html");
            /** @type {string} */
            var inactiveButton = doc.getElementById("AjaxCartForm").innerHTML;
            /** @type {string} */
            var origNav = doc.getElementById("AjaxCartSubtotal").innerHTML;
            /** @type {(Element|null)} */
            var button = document.getElementById("AjaxCartForm");
            /** @type {string} */
            button.innerHTML = inactiveButton;
            button.ajaxifyCartItems();
            /** @type {string} */
            document.getElementById("AjaxCartSubtotal").innerHTML = origNav;
            window.preloadImages(button);
            /** @type {string} */
            document.querySelector("[data-header-cart-count]").textContent = document.querySelector("#AjaxCartForm [data-cart-count]").textContent;
          });
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function resetFolder(value) {
          jQuery("span [data-header-cart-count]").html(value.item_count);
        }
      }]), e;
    }();
    var deletingLaunches = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function camelize$1(str) {
          e._updateCartIcon();
          e._updateCart();
          if (str) {
            e._loadCart();
          }
        }
      }, {
        key : "_isCompatibleVersion",
        value : function construct() {
          return window.theme && window.theme.partials && window.theme.partials.Cart && window.theme.partials.Cart;
        }
      }, {
        key : "_updateCart",
        value : function renderTemplate() {
          if (e._isCompatibleVersion() && "function" == typeof window.theme.partials.Cart.updateTotals) {
            window.theme.partials.Cart.updateTotals();
          }
        }
      }, {
        key : "_loadCart",
        value : function render() {
          var t = this;
          if (e._isCompatibleVersion() && "function" == typeof window.theme.partials.Cart.updateAllHtml) {
            window.theme.partials.Cart.updateAllHtml(function() {
              window.theme.partials.OffCanvas.right_sidebar.attr("data-active", "cart");
              if ("closed" === window.theme.partials.OffCanvas.state) {
                /** @type {string} */
                window.theme.partials.OffCanvas.right_sidebar_view = "cart";
                window.theme.partials.OffCanvas.openRight();
                window.theme.partials.OffCanvas.last_trigger = t.primary_button;
              }
            });
          }
        }
      }, {
        key : "_updateCartIcon",
        value : function tapped_callback() {
          path.getCart().then(e._updateCartBubble);
        }
      }, {
        key : "_updateCartBubble",
        value : function value(key) {
          var color = key.item_count;
          jQuery(".header--cart-number").setAttribute("data-item-count", color);
          jQuery(".header--cart-number .cart--external--total-items").html("(" + color + ")");
        }
      }]), e;
    }();
    var old_ctx = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function CreateBones(key) {
          if (theme && theme.updateCartSummaries) {
            theme.updateCartSummaries(key, true, void 0);
          }
        }
      }]), e;
    }();
    var $scope = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "afterAddingToCart",
        value : function key(value, type, selector) {
          if (window.incubate && window.incubate.afterAddingToCart) {
            window.incubate.afterAddingToCart(value, type, selector);
          }
        }
      }, {
        key : "ajaxCart",
        value : function key(value, type, data, handler) {
          var i = e._normalizeTheme(value);
          e._triggerAjaxCart(i, handler, type, data);
        }
      }, {
        key : "_triggerAjaxCart",
        value : function init(value, id, val, type) {
          /** @type {string} */
          id = "true";
          try {
            switch(value) {
              case "avatar":
                simpleselect.ajaxCart(id);
                break;
              case "avenue":
                $newelem.ajaxCart(id);
                break;
              case "debut":
                at.ajaxCart(val, type, id);
                break;
              case "brooklyn":
                movedNextItem.ajaxCart(id);
                break;
              case "boundless":
                loadingPlugins.ajaxCart(id);
                break;
              case "canopy":
                old_ctx.ajaxCart(id);
                break;
              case "envy":
                courseToDelete.ajaxCart(id);
                break;
              case "fastlane":
                capstone.ajaxCart(val, type, id);
                break;
              case "venture":
                person.ajaxCart(id);
                break;
              case "simple":
                M.ajaxCart();
                break;
              case "narrative":
                tempStyleElement.ajaxCart(id);
                break;
              case "supply":
                $deepPage.ajaxCart(id);
                break;
              case "split":
                parenttr.ajaxCart(id);
                break;
              case "prestige":
                $tweakPanel.ajaxCart(id);
                break;
              case "booster":
                Q.ajaxCart();
                break;
              case "shoptimized":
                categoriesTitleElement.ajaxCart(id);
                break;
              case "empire":
                X.ajaxCart();
                break;
              case "district":
                _oUtils.ajaxCart(val, id);
                break;
              case "gecko":
              case "kalles":
                J.ajaxCart(id);
                break;
              case "impulse":
              case "motion":
              case "streamline":
              case "expanse":
                relatedVideo.ajaxCart(id);
                break;
              case "showtime":
                clickedPlaylist.ajaxCart(id);
                break;
              case "debutify":
                chaiWrapper.ajaxCart(id);
                break;
              case "express":
                joystickIDs.ajaxCart(id);
                break;
              case "warehouse":
                _collabDiv.ajaxCart(id);
                break;
              case "ella":
                CustomContracts.ajaxCart(id);
                break;
              case "turbo":
                locationsIds.ajaxCart(id);
                break;
              case "venue":
                jrow.ajaxCart(id);
                break;
              case "flex":
                codeService.ajaxCart(id);
                break;
              case "dawn":
              case "crave":
              case "sense":
              case "craft":
              case "taste":
              case "studio":
              case "ride":
              case "colorblock":
              case "refresh":
                console.log(id);
                console.log(val);
                se.ajaxCart(val, id);
                break;
              case "wokiee":
                SEA.ajaxCart(val, id);
                break;
              case "blockshop":
                backupPage.ajaxCart(id);
                break;
              case "icon":
              case "testament":
                readingPaneMenu.ajaxCart(id);
                break;
              case "speedfly theme":
                $hashcashField.ajaxCart(id);
                break;
              case "broadcast":
                ObjectOperation.ajaxCart(id, val);
                break;
              case "pipeline":
                pinsync.ajaxCart(id, val);
                break;
              case "flow":
                aioIdentityService.ajaxCart(id);
                break;
              case "exotic":
                livefyreUser.ajaxCart(id);
                break;
              case "galleria":
                selectedUserAgent.ajaxCart(id);
                break;
              case "oars":
                currentBp.ajaxCart(id);
                break;
              case "parallax":
                rulerToolbar.ajaxCart(id);
                break;
              case "showcase":
                Selectivity.ajaxCart(val, id);
                break;
              case "wonify":
                lineGuidesToolbar.ajaxCart(id);
                break;
              case "modular":
                colorPickerToolbar.ajaxCart(id);
                break;
              case "boost":
                Te.ajaxCart();
                break;
              case "kingdom":
                xe.ajaxCart();
                break;
              case "launch":
                Ee.ajaxCart();
                break;
              case "mansory":
                Ae.ajaxCart();
                break;
              case "minimal":
                Pe.ajaxCart();
                break;
              case "providence":
                Ie.ajaxCart();
                break;
              case "responsive":
                Oe.ajaxCart();
                break;
              case "spark":
                De.ajaxCart();
                break;
              case "sunmi":
                Be.ajaxCart();
                break;
              case "sunrise":
                je.ajaxCart();
                break;
              case "symmetry":
                Le.ajaxCart();
                break;
              case "maker":
                deletingLaunches.ajaxCart(id);
                break;
              default:
                e._otherAjaxCarts();
            }
          } catch (controlFlowAction) {
            b.log("Failed to display the Ajax cart in " + value + " (Error:" + controlFlowAction.message + ").");
          }
        }
      }, {
        key : "_otherAjaxCarts",
        value : function handleLimitedSelection() {
          path.getCart().then(function(result) {
            jQuery("div#atharva_minicart_count span").html(result.item_count);
            jQuery("a span.floating-cart-bubble").html(result.item_count);
            jQuery(".cart-count").html(result.item_count);
            jQuery(".cart-count").removeClass("tw-hidden");
          });
        }
      }, {
        key : "_normalizeTheme",
        value : function _pretty_print_properties(name) {
          return assert.isNotEmpty(name) ? name.toLowerCase() : "";
        }
      }]), e;
    }();
    var EditRoute = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "defaultButtonTextOrTextFromTag",
        value : function value(str, type) {
          var r = e._findDifferentButtonTextTag(type);
          if (r) {
            var opt_value = r.replace(options.DIFFERENT_BUTTON_TEXT_TAG, "").trim();
            return opt_value || str;
          }
          return str;
        }
      }, {
        key : "_findDifferentButtonTextTag",
        value : function getFingerprint(key) {
          return key && Array.isArray(key) && key.find(function(e) {
            return e.includes(options.DIFFERENT_BUTTON_TEXT_TAG);
          });
        }
      }]), e;
    }();
    var He = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "ajaxCart",
        value : function yesNoToBool(value) {
          /** @type {string} */
          value = "false";
          e._updateDrawerCartSafely();
        }
      }, {
        key : "_updateDrawerCartSafely",
        value : function value() {
          try {
            e._updateDrawerCart();
          } catch (e) {
          }
        }
      }, {
        key : "_showDrawerCartSafely",
        value : function onImageUpdated() {
          try {
            e._showDrawerCart();
            setTimeout(function() {
              e._updateDrawerCart();
            }, 600);
          } catch (e) {
          }
        }
      }, {
        key : "_updateDrawerCart",
        value : function value() {
          if (window.SLIDECART_UPDATE) {
            window.SLIDECART_UPDATE();
          }
        }
      }, {
        key : "_showDrawerCart",
        value : function value() {
          if (window.SLIDECART_OPEN) {
            window.SLIDECART_OPEN();
          }
        }
      }]), e;
    }();
    var supportedQualities = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "defaultButtonRedirectPolicyOrRedirectPolicyFromTag",
        value : function value(str, type) {
          var url = e._hasAnotherRedirectTag(type);
          return url ? e._normalizeRedirectTag(url) : str;
        }
      }, {
        key : "_hasAnotherRedirectTag",
        value : function writeMultipleValue(value) {
          return value && Array.isArray(value) && value.find(function(e) {
            return e.includes(options.BUTTON_REDIRECT_TO_PRODUCT_PAGE_TAG) || e.includes(options.BUTTON_REDIRECT_TO_CHECKOUT_TAG) || e.includes(options.BUTTON_REDIRECT_TO_CART_TAG) || e.includes(options.BUTTON_REMAIN_ON_PAGE_TAG);
          });
        }
      }, {
        key : "_normalizeRedirectTag",
        value : function value(key) {
          return key.replace("cleverapps-add-to-cart-button-", "").replace(/-/g, "_").toUpperCase();
        }
      }]), e;
    }();
    var Error = function() {
      /**
       * @param {?} r
       * @param {!Object} isStatic
       * @param {!Object} key
       * @param {string} hash
       * @param {?} item
       * @param {?} event
       * @return {undefined}
       */
      function e(r, isStatic, key, hash, item, event) {
        log(this, e);
        this.selectedVariantId = r;
        /** @type {!Object} */
        this.errorUI = isStatic;
        /** @type {string} */
        this.preferences = hash;
        /** @type {!Object} */
        this.quantitySelectorUI = key;
        this.buttonText = EditRoute.defaultButtonTextOrTextFromTag(this.preferences.buttonText, item);
        this.productHandle = event;
        this.redirectPolicy = supportedQualities.defaultButtonRedirectPolicyOrRedirectPolicyFromTag(this.preferences.redirectPolicy, item);
        this._build();
      }
      return t(e, [{
        key : "addToCartButton",
        value : function value() {
          return this.$addToCartButton;
        }
      }, {
        key : "updateSelectedVariantId",
        value : function camelize$1(str) {
          /** @type {!Object} */
          this.selectedVariantId = str;
        }
      }, {
        key : "_build",
        value : function build_enable_buttons() {
          this.$addToCartButton = new jQuery("<button></button>");
          this.$addToCartButton.addClass(e.ADD_TO_CART_BUTTON_CLASS);
          this.$addToCartButton.text(this.buttonText);
          this._setStyles();
          this._setClickCallback();
        }
      }, {
        key : "_setClickCallback",
        value : function getDebugTransaction() {
          var _characterDiv = this;
          this.$addToCartButton.click(function(e) {
            if (_characterDiv._isValidForm()) {
              _characterDiv._clickFunction(e);
            } else {
              _characterDiv._showValidationMessages();
            }
          });
        }
      }, {
        key : "_isValidForm",
        value : function value() {
          return this.quantitySelectorUI.isValidQuantity();
        }
      }, {
        key : "_showValidationMessages",
        value : function revalidate() {
          this.quantitySelectorUI.reportValidity();
        }
      }, {
        key : "_clickFunction",
        value : function TSTBMService_onTabsDrop(value) {
          var touchSystem = this;
          value.preventDefault();
          value.stopPropagation();
          this._disableAndStartAnimation();
          var fileToInline = this._addProductCallback(this.selectedVariantId);
          path.addVariant(this.selectedVariantId, this.quantitySelectorUI.quantity(), this.preferences.theme, fileToInline, function(e) {
            return touchSystem._restoreAfterErrorMessage(e);
          });
        }
      }, {
        key : "_addProductCallback",
        value : function init() {
          var data = this;
          /** @type {string} */
          data.preferences.showDrawerCart = "true";
          return "REDIRECT_TO_CHECKOUT" === this.redirectPolicy ? function() {
            return document.location.href = node.isDemoPage() ? location.href : node.getCheckoutPage();
          } : "REDIRECT_TO_PRODUCT_PAGE" === this.redirectPolicy ? function() {
            return document.location.href = node.isDemoPage() ? location.href : node.getProductPage(data.productHandle);
          } : "REDIRECT_TO_CART" === this.redirectPolicy || node.isCartPage() ? function() {
            return document.location.href = node.isDemoPage() ? location.href : node.getCartPage();
          } : function(canCreateDiscussions) {
            $scope.afterAddingToCart(data.selectedVariantId, data.quantitySelectorUI.quantity(), data.preferences.showDrawerCart);
            $scope.ajaxCart(data.preferences.theme, data.selectedVariantId, data.quantitySelectorUI.quantity(), data.preferences.showDrawerCart);
            He.ajaxCart(data.preferences.showDrawerCart);
            data._changeToAddedButtonAndResetAfterACertainTimeIfRequired();
          };
        }
      }, {
        key : "_setStyles",
        value : function init() {
          /** @type {string} */
          this.preferences.buttonText = "Add to Cart";
          /** @type {string} */
          this.preferences.showOnSearchResultsPage = "true";
          /** @type {boolean} */
          this.preferences.showQuantitySelector = true === undefined ? false : true;
          /** @type {string} */
          this.preferences.fastLoading = "true";
          /** @type {string} */
          this.preferences.alignWidgets = "true";
          /** @type {number} */
          this.preferences.buttonFontSize = 14;
          /** @type {string} */
          this.preferences.buttonRecovery = "true";
          /** @type {string} */
          this.preferences.redirectPolicy = "REDIRECT_TO_PRODUCT_PAGE";
          /** @type {boolean} */
          this.preferences.showDrawerCart = true;
          /** @type {boolean} */
          this.preferences.showOnHomepage = true === undefined ? false : true;
          /** @type {string} */
          this.preferences.buttonAddedText = "Added";
          /** @type {string} */
          this.preferences.buttonFontColor = "#ff0000";
          /** @type {string} */
          this.preferences.buttonFontStyle = "BOLD";
          /** @type {string} */
          this.preferences.buttonBorderSize = "1";
          /** @type {string} */
          this.preferences.buttonFontFamily = "";
          /** @type {string} */
          this.preferences.buttonBorderColor = "#ffffff";
          /** @type {boolean} */
          this.preferences.showOnProductPage = true === undefined ? false : true;
          /** @type {number} */
          this.preferences.buttonBorderRadius = 0;
          /** @type {boolean} */
          this.preferences.showVariantSelector = true === undefined ? false : true;
          /** @type {string} */
          this.preferences.buttonBackgroundColor = "#0c0d0d";
          /** @type {boolean} */
          this.preferences.showOnSearchResultsPage = true === undefined ? false : true;
          /** @type {number} */
          this.preferences.variantSelectorFontSize = 14;
          /** @type {number} */
          this.preferences.quantitySelectorFontSize = 14;
          /** @type {string} */
          this.preferences.variantSelectorFontColor = "#ffffff";
          /** @type {string} */
          this.preferences.variantSelectorFontStyle = "NORMAL";
          /** @type {string} */
          this.preferences.quantitySelectorFontColor = "#000000";
          /** @type {string} */
          this.preferences.quantitySelectorFontStyle = "NORMAL";
          /** @type {string} */
          this.preferences.variantSelectorBorderSize = "1";
          /** @type {string} */
          this.preferences.variantSelectorFontFamily = "";
          /** @type {number} */
          this.preferences.quantitySelectorBorderSize = 1;
          /** @type {string} */
          this.preferences.quantitySelectorFontFamily = "";
          /** @type {string} */
          this.preferences.variantSelectorBorderColor = "#000000";
          /** @type {string} */
          this.preferences.quantitySelectorBorderColor = "#000000";
          /** @type {number} */
          this.preferences.variantSelectorBorderRadius = 0;
          /** @type {number} */
          this.preferences.quantitySelectorBorderRadius = 0;
          /** @type {string} */
          this.preferences.variantSelectorBackgroundColor = "#0f57ff";
          /** @type {string} */
          this.preferences.quantitySelectorBackgroundColor = "#ffffff";
          /** @type {number} */
          this.preferences.quantitySelectorDefaultQuantity = 1;
          /** @type {boolean} */
          this.preferences.enableMultipleVariantSelectors = undefined === undefined ? false : true;
          /** @type {boolean} */
          this.preferences.showVariantSelectorLabel = true === undefined ? false : true;
          /** @type {boolean} */
          this.preferences.updateVariantImage = undefined === undefined ? false : true;
          /** @type {string} */
          this.preferences.soldOutButtonText = "Sold Out";
          /** @type {number} */
          this.preferences.soldOutButtonBorderSize = 1;
          /** @type {string} */
          this.preferences.target = "";
          /** @type {string} */
          this.preferences.targetPlacement = "LAST_CHILD";
          /** @type {string} */
          this.preferences.soldOutButtonBorderColor = "#000000";
          /** @type {number} */
          this.preferences.soldOutButtonBorderRadius = 0;
          /** @type {string} */
          this.preferences.soldOutButtonBackgroundColor = "#000000";
          /** @type {number} */
          this.preferences.soldOutButtonFontSize = 14;
          /** @type {string} */
          this.preferences.soldOutButtonFontColor = "#ffffff";
          /** @type {string} */
          this.preferences.soldOutButtonFontStyle = "NORMAL";
          /** @type {string} */
          this.preferences.soldOutButtonFontFamily = "";
          /** @type {boolean} */
          this.preferences._showSoldOutButton = undefined === undefined ? false : true;
          /** @type {boolean} */
          this.preferences.showVariantPrice = undefined === undefined ? false : true;
          /** @type {boolean} */
          this.preferences.showAllVariants = undefined === undefined ? false : true;
          /** @type {string} */
          this.preferences.variantSelectorLabelFontSize = "";
          /** @type {string} */
          this.preferences.variantSelectorLabelFontStyle = "NORMAL";
          /** @type {string} */
          this.preferences.variantSelectorLabelFontColor = "#000000";
          /** @type {string} */
          this.preferences.variantSelectorLabelFontFamily = "";
          this.$addToCartButton.css(UIUtil.getDefaultCss());
          this.$addToCartButton.css("width", "100%");
          this.$addToCartButton.css("height", "40px");
          this.$addToCartButton.css("min-height", "40px");
          UIUtil.applyFontStyle(this.$addToCartButton, this.preferences.buttonFontStyle);
          UIUtil.applyFontFamily(this.$addToCartButton, this.preferences.buttonFontFamily);
          this.$addToCartButton.css("font-size", this.preferences.buttonFontSize);
          this.$addToCartButton.css("color", this.preferences.buttonFontColor);
          this.$addToCartButton.css("background-color", this.preferences.buttonBackgroundColor ? this.preferences.buttonBackgroundColor : "transparent");
          this.$addToCartButton.css("border-width", this.preferences.buttonBorderSize);
          this.$addToCartButton.css("border-color", this.preferences.buttonBorderColor ? this.preferences.buttonBorderColor : "transparent");
          this.$addToCartButton.css("border-radius", this.preferences.buttonBorderRadius);
          this.$addToCartButton.css("border-style", "solid");
          this.$addToCartButton.css("cursor", "pointer");
          this.$addToCartButton.css("margin", "10px 0 0 0");
          this.$addToCartButton.css("padding", "0px");
          this.$addToCartButton.hover(function(event) {
            return jQuery(jQuery(event.currentTarget)).css("opacity", "0.7");
          }, function(event) {
            return jQuery(jQuery(event.currentTarget)).css("opacity", "1");
          });
        }
      }, {
        key : "_disableAndStartAnimation",
        value : function setup() {
          this.buttonText = this.$addToCartButton.text();
          this.$addToCartButton.prop("disabled", true);
          this.$addToCartButton.css("cursor", "wait");
          this.$addToCartButton.text("\u2022\u2022\u2022");
        }
      }, {
        key : "_changeToAddedButtonAndResetAfterACertainTimeIfRequired",
        value : function authenticate_pass() {
          var t = this;
          this._changeToAddedButton();
          if (this.preferences.buttonRecovery) {
            setTimeout(function() {
              return t._resetWithAnimation();
            }, e.ADDED_TEXT_TIME);
          }
        }
      }, {
        key : "_changeToAddedButton",
        value : function updateCheckBtn() {
          this.$addToCartButton.css("cursor", "default");
          this.$addToCartButton.text(this.preferences.buttonAddedText);
        }
      }, {
        key : "_resetWithAnimation",
        value : function _toggleTransfer() {
          var postListCacheStore = this;
          this.$addToCartButton.text(this.buttonText);
          this.$addToCartButton.animate({
            opacity : 1
          }, 300, function() {
            return postListCacheStore._reset();
          });
        }
      }, {
        key : "_reset",
        value : function updatePicture() {
          this.$addToCartButton.prop("disabled", false);
          this.$addToCartButton.css("cursor", "pointer");
          this.$addToCartButton.css("opacity", "1");
        }
      }, {
        key : "_restoreAfterErrorMessage",
        value : function done(key) {
          this.errorUI.flash(key);
          this.$addToCartButton.prop("disabled", false);
          this.$addToCartButton.css("cursor", "pointer");
          this.$addToCartButton.css("opacity", "1");
          this.$addToCartButton.text(this.buttonText);
        }
      }]), e;
    }();
    callback(Error, "ADD_TO_CART_BUTTON_CLASS", options.cssClassPrefix() + "add-to-cart-button");
    callback(Error, "ADDED_TEXT_TIME", 1500);
    var a = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
        this._build();
      }
      return t(e, [{
        key : "errorBox",
        value : function value() {
          return this.$error;
        }
      }, {
        key : "flash",
        value : function doShow(value) {
          var exports = this;
          this._show(value);
          setTimeout(function() {
            return exports._hide();
          }, e.FLASH_MESSAGE_MILLIS);
        }
      }, {
        key : "_build",
        value : function resize() {
          this.$error = jQuery("<div></div>");
          this.$error.addClass(e.CLASS);
          this.$error.css({
            display : "none",
            "background-color" : "#ffb6c1",
            "border-radius" : "4px",
            padding : "1em",
            "margin-top" : "10px"
          });
        }
      }, {
        key : "_show",
        value : function render(value) {
          this.$error.html(value);
          this.$error.fadeIn();
        }
      }, {
        key : "_hide",
        value : function resize() {
          this.$error.fadeOut();
        }
      }]), e;
    }();
    callback(a, "CLASS", options.cssClassPrefix() + "error");
    callback(a, "FLASH_MESSAGE_MILLIS", 5e3);
    var item = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "isAvailable",
        value : function write(value) {
          return value && value.available;
        }
      }, {
        key : "hasMoreThanOneVariants",
        value : function setSelected(value) {
          return value && value.variants && value.variants.length > 1;
        }
      }, {
        key : "availableVariants",
        value : function setSelected(value) {
          return value && value.variants ? value.variants.filter(function(addressesDoc) {
            return addressesDoc.available;
          }) : [];
        }
      }, {
        key : "allVariants",
        value : function setSelected(value) {
          return value && value.variants ? value.variants : [];
        }
      }, {
        key : "isVariantAvailable",
        value : function value(elem, type) {
          return e.availableVariants(elem).find(function(cmp) {
            return cmp.id == type;
          });
        }
      }, {
        key : "hasTag",
        value : function syncChallengeToUser(data, type) {
          return data && data.tags && data.tags.includes(type);
        }
      }, {
        key : "getVariantImage",
        value : function link(value, name) {
          var image = value && value.variants && value.variants.find(function(branch) {
            return branch.id == name;
          });
          return image && image.featured_image && image.featured_image.src ? image.featured_image.src : null;
        }
      }, {
        key : "getFirstVariantImage",
        value : function Image(value) {
          var image = value && value.variants && value.variants[0];
          return image && image.featured_image && image.featured_image.src ? image.featured_image.src : null;
        }
      }, {
        key : "getFeatureImage",
        value : function processData(value) {
          return value && value.featured_image ? value.featured_image : null;
        }
      }, {
        key : "getFirstImageInProductImagesArray",
        value : function rest3dToTree(data) {
          return data && data.images && data.images[0] ? data.images[0] : null;
        }
      }]), e;
    }();
    var Buffer = function() {
      /**
       * @param {string} hash
       * @return {undefined}
       */
      function e(hash) {
        log(this, e);
        /** @type {string} */
        this.preferences = hash;
      }
      return t(e, [{
        key : "build",
        value : function wrap_list_input() {
          this.$quantitySelectorContainer = this._quantitySelectorContainer();
          this.$quantityInput = this._quantityInput();
          this.$minusButton = this._minusButton();
          this.$plusButton = this._plusButton();
          this.$quantitySelectorContainer.append(this.$minusButton);
          this.$quantitySelectorContainer.append(this.$quantityInput);
          this.$quantitySelectorContainer.append(this.$plusButton);
        }
      }, {
        key : "quantitySelector",
        value : function value() {
          return this.$quantitySelectorContainer;
        }
      }, {
        key : "quantity",
        value : function customInputEvents() {
          return this.preferences.showQuantitySelector ? parseInt(this.$quantityInput.val()) : 1;
        }
      }, {
        key : "isValidQuantity",
        value : function compile() {
          return !this.preferences.showQuantitySelector || this.$quantityInput[0].checkValidity();
        }
      }, {
        key : "reportValidity",
        value : function revalidate() {
          this.$quantityInput[0].reportValidity();
        }
      }, {
        key : "_quantitySelectorContainer",
        value : function init() {
          var element = new jQuery("<div></div>");
          return element.addClass(e.QUANTITY_SELECTOR_CONTAINER_CLASS), element.css(UIUtil.getDefaultCss()), element.css("height", "40px"), element.css("min-height", "40px"), UIUtil.applyFontStyle(element, this.preferences.quantitySelectorFontStyle), UIUtil.applyFontFamily(element, this.preferences.quantitySelectorFontFamily), element.css("font-size", this.preferences.quantitySelectorFontSize), element.css("color", this.preferences.quantitySelectorFontColor), element.css("background-color", this.preferences.quantitySelectorBackgroundColor ? 
          this.preferences.quantitySelectorBackgroundColor : "transparent"), element.css("border-width", this.preferences.quantitySelectorBorderSize), element.css("border-color", this.preferences.quantitySelectorBorderColor ? this.preferences.quantitySelectorBorderColor : "transparent"), element.css("border-radius", this.preferences.quantitySelectorBorderRadius), element.css("border-style", "solid"), element.css("margin", "10px 10px 0 0"), element.css("display", "flex"), element.css("align-items", 
          "center"), element.click(function(event) {
            return event.preventDefault();
          }), element;
        }
      }, {
        key : "_quantityInput",
        value : function init() {
          var touchSystem = this;
          var $this = new jQuery('<input type="text" required/>');
          return $this.addClass(e.QUANTITY_SELECTOR_INPUT_CLASS), $this.val(this.preferences.quantitySelectorDefaultQuantity), $this.css("border-width", "0"), $this.css("padding", "0px"), $this.css("width", "30px"), $this.css("text-align", "center"), $this.css("outline", "none"), $this.css("margin", "0px"), UIUtil.applyFontStyle($this, this.preferences.quantitySelectorFontStyle), UIUtil.applyFontFamily($this, this.preferences.quantitySelectorFontFamily), $this.css("font-size", this.preferences.quantitySelectorFontSize), 
          $this.css("color", this.preferences.quantitySelectorFontColor), $this.css("background-color", this.preferences.quantitySelectorBackgroundColor ? this.preferences.quantitySelectorBackgroundColor : "transparent"), $this.keypress(function(e) {
            return touchSystem._onlyNumbers(e);
          }), $this;
        }
      }, {
        key : "_minusButton",
        value : function init() {
          var self = this;
          var element = new jQuery("<span>-</span>");
          return element.addClass(e.QUANTITY_SELECTOR_MINUS_BUTTON_CLASS), this._addQuantityButtonStyles(element), element.click(function() {
            return self._updateInputValue(-1);
          }), element.css("padding-right", "0px"), element;
        }
      }, {
        key : "_plusButton",
        value : function initialize() {
          var self = this;
          var element = new jQuery("<span>+</span>");
          return element.addClass(e.QUANTITY_SELECTOR_PLUS_BUTTON_CLASS), this._addQuantityButtonStyles(element), element.click(function() {
            return self._updateInputValue(1);
          }), element.css("padding-left", "0px"), element;
        }
      }, {
        key : "_addQuantityButtonStyles",
        value : function animate(elem, type) {
          elem.css("padding", "0 10px");
          elem.css("cursor", "pointer");
          elem.css("opacity", "0.7");
          elem.css("margin", "0px");
          elem.hover(function(event) {
            return jQuery(jQuery(event.currentTarget)).css("opacity", "1.0");
          }, function(event) {
            return jQuery(jQuery(event.currentTarget)).css("opacity", "0.7");
          });
        }
      }, {
        key : "_updateInputValue",
        value : function value(str) {
          var result = this.quantity() + str;
          this.$quantityInput.val(result >= 1 ? result : 1);
        }
      }, {
        key : "_onlyNumbers",
        value : function enterTextAndTriggerKeyUp(key) {
          return !(8 != key.which && 0 != key.which && (key.which < 48 || key.which > 57));
        }
      }]), e;
    }();
    callback(Buffer, "QUANTITY_SELECTOR_CONTAINER_CLASS", options.cssClassPrefix() + "quantity-selector-container");
    callback(Buffer, "QUANTITY_SELECTOR_INPUT_CLASS", options.cssClassPrefix() + "quantity-selector-input");
    callback(Buffer, "QUANTITY_SELECTOR_MINUS_BUTTON_CLASS", options.cssClassPrefix() + "quantity-selector-minus-button");
    callback(Buffer, "QUANTITY_SELECTOR_PLUS_BUTTON_CLASS", options.cssClassPrefix() + "quantity-selector-plus-button");
    var RE_comparison = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "exists",
        value : function parseElement(elem) {
          if (!elem.jquery) {
            throw new Error("This function only works for jQuery objects");
          }
          return elem && elem[0];
        }
      }, {
        key : "existsVisible",
        value : function handleImportCall(value) {
          return e.exists(value) && value.is(":visible");
        }
      }]), e;
    }();
    var v = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "find",
        value : function key(value, type) {
          var promise = e._findConfiguredTarget(value, type);
          if (e._isValidTarget(promise)) {
            return promise;
          }
          var y = e._findDefaultTarget(value);
          return e._isValidTarget(y) ? y : null;
        }
      }, {
        key : "_findConfiguredTarget",
        value : function bind_elem_mouse_hover(elem, type) {
          return type ? jQuery(elem).closest(type) : null;
        }
      }, {
        key : "_findDefaultTarget",
        value : function select(value) {
          return e._discardUnwantedTargets(value).closest(e.COLLECTION_PRODUCT_ANCESTOR_SELECTORS.join(", ")).first();
        }
      }, {
        key : "_discardUnwantedTargets",
        value : function value(key) {
          return e.UNWANTED_COLLECTION_PRODUCT_ANCESTOR_SELECTORS.forEach(function(SECTION_SEL) {
            return key = key.filter(function(canCreateDiscussions, srcElement) {
              return 0 === jQuery(srcElement).closest(SECTION_SEL).length;
            });
          }), key;
        }
      }, {
        key : "_isValidTarget",
        value : function camelize$1(str) {
          return str && RE_comparison.existsVisible(str);
        }
      }]), e;
    }();
    callback(v, "COLLECTION_PRODUCT_ANCESTOR_SELECTORS", [".grid-uniform > .grid__item > div", ".grid__item", ".grid-item", ".grid .card", ".ProductList .ProductItem", ".collection .product-item", ".collection-products .product", ".o-layout__item", ".products-grid .product", ".productgrid--items .productgrid--item .productitem", ".grid-collection .grid-product", ".product__grid-item", ".thumbnail", ".product--root", ".product-thumb", ".product-grid-item", ".product-block__inner", 'div[data-label="Product"]', 
    ".products .product-inner", "li"]);
    callback(v, "UNWANTED_COLLECTION_PRODUCT_ANCESTOR_SELECTORS", ["header", "#shopify-section-header", "nav", ".featured-product", ".feature-row", ".cleverapps-smart-ai-recommendations-container", ".cleverapps-viewed-products-assistant-container", "#shopify-section-footer", ".cbb-also-bought-slider-container", ".cbb-frequently-bought-container", ".cleverapps-collections-add-to-cart-ignore", ".ajaxcart__product", ".ajax-cart__cart-items", "#CartDrawer"]);
    var _ = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "find",
        value : function select(value, type, view) {
          var a = v.find(value, type);
          var i = e._normalizeImage(view);
          var n = e.IMAGE_ELEMENT_SELECTORS.join(",").replaceAll(e.IMAGE_REPLACER, i);
          return a.find(n).first();
        }
      }, {
        key : "_normalizeImage",
        value : function value(key) {
          var m = node.removeParameters(key);
          var h = m.lastIndexOf(".");
          return h > 0 ? m.substring(0, h) : m;
        }
      }]), e;
    }();
    callback(_, "IMAGE_REPLACER", "_image_");
    callback(_, "IMAGE_ELEMENT_SELECTORS", ['img[srcset*="'.concat(_.IMAGE_REPLACER, '"]'), 'img[src*="'.concat(_.IMAGE_REPLACER, '"]')]);
    var result = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "getSizes",
        value : function render(value) {
          return value.split(",").map(function(commentToCheck) {
            return commentToCheck.trim().split(" ");
          }).filter(function(inRevIdx) {
            return 2 == inRevIdx.length;
          }).map(function(commentLines) {
            return commentLines[1].trim().replace("w", "");
          });
        }
      }, {
        key : "generateFrom",
        value : function render(value, type) {
          var k = e._getImageUrlWithoutExtension(value);
          var textWidth = e._getImageExtensionAndParams(value);
          return type.map(function(width) {
            return k + "_" + width + "x" + textWidth + " " + width + "w";
          }).join(", ");
        }
      }, {
        key : "_getImageUrlWithoutExtension",
        value : function value(key) {
          var m = node.removeParameters(key);
          var h = m.lastIndexOf(".");
          return h > 0 ? m.substring(0, h) : m;
        }
      }, {
        key : "_getImageExtensionAndParams",
        value : function value(str) {
          var m = node.removeParameters(str);
          var n = m.lastIndexOf(".");
          return n > 0 ? str.substring(n) : str.substring(m.length);
        }
      }]), e;
    }();
    var Client = function() {
      /**
       * @param {string} i
       * @param {string} n
       * @param {string} a
       * @return {undefined}
       */
      function e(i, n, a) {
        log(this, e);
        /** @type {boolean} */
        this.imageElementFound = false;
        /** @type {string} */
        this.product = i;
        /** @type {string} */
        this.$productLinkElement = n;
        /** @type {string} */
        this.target = a;
      }
      return t(e, [{
        key : "update",
        value : function Notification(value) {
          this._tryToFindImageElementIfRequired();
          if (this.imageElementFound) {
            this._updateVariantImage(value || this.defaultImage);
          }
        }
      }, {
        key : "_tryToFindImageElementIfRequired",
        value : function value() {
          if (!this.imageElementFound) {
            this._tryToFindImageElement();
          }
        }
      }, {
        key : "_tryToFindImageElement",
        value : function Controller() {
          var e = item.getFeatureImage(this.product);
          if (e) {
            this._initializeValues(e);
          }
          e = item.getFirstImageInProductImagesArray(this.product);
          if (!this.imageElementFound && e) {
            this._initializeValues(e);
          }
          e = item.getFirstVariantImage(this.product);
          if (!this.imageElementFound && e) {
            this._initializeValues(e);
          }
        }
      }, {
        key : "_initializeValues",
        value : function Notification(value) {
          this.$imageElement = _.find(this.$productLinkElement, this.target, value);
          /** @type {!Object} */
          this.defaultImage = value;
          /** @type {!Object} */
          this.currentImage = value;
          this.imageElementFound = this.$imageElement && this.$imageElement.length > 0;
        }
      }, {
        key : "_updateVariantImage",
        value : function camelize$1(str) {
          if (!this._tryToChangeImageSrcSet(str)) {
            this._tryToChangeImageSrc(str);
          }
        }
      }, {
        key : "_tryToChangeImageSrcSet",
        value : function check(value) {
          var first = this.$imageElement.attr("srcset");
          if (!first) {
            return false;
          }
          var element = result.getSizes(first);
          var i = result.generateFrom(value, element);
          return first != i && (this.$imageElement.attr("srcset", i), this.currentImage = value, true);
        }
      }, {
        key : "_tryToChangeImageSrc",
        value : function render(value) {
          var children = this.$imageElement.attr("src");
          return !!children && children != value && (this.$imageElement.attr("src", value), this.currentImage = value, true);
        }
      }]), e;
    }();
    var ElementNode = function() {
      /**
       * @param {string} hash
       * @return {undefined}
       */
      function e(hash) {
        log(this, e);
        /** @type {string} */
        this.preferences = hash;
        this._build();
      }
      return t(e, [{
        key : "soldOutButton",
        value : function value() {
          return this.$soldOutButton;
        }
      }, {
        key : "_build",
        value : function build_enable_buttons() {
          this.$soldOutButton = new jQuery("<button></button>");
          this.$soldOutButton.addClass(e.SOLD_OUT_BUTTON_CLASS);
          this.$soldOutButton.text(this.preferences.soldOutButtonText);
          this._setStyles();
        }
      }, {
        key : "_setStyles",
        value : function init() {
          this.$soldOutButton.css(UIUtil.getDefaultCss());
          this.$soldOutButton.css("width", "100%");
          this.$soldOutButton.css("height", "40px");
          this.$soldOutButton.css("min-height", "40px");
          UIUtil.applyFontStyle(this.$soldOutButton, this.preferences.soldOutButtonFontStyle);
          UIUtil.applyFontFamily(this.$soldOutButton, this.preferences.soldOutButtonFontFamily);
          this.$soldOutButton.css("font-size", this.preferences.soldOutButtonFontSize);
          this.$soldOutButton.css("color", this.preferences.soldOutButtonFontColor);
          this.$soldOutButton.css("background-color", this.preferences.soldOutButtonBackgroundColor ? this.preferences.soldOutButtonBackgroundColor : "transparent");
          this.$soldOutButton.css("border-width", this.preferences.soldOutButtonBorderSize);
          this.$soldOutButton.css("border-color", this.preferences.soldOutButtonBorderColor ? this.preferences.soldOutButtonBorderColor : "transparent");
          this.$soldOutButton.css("border-radius", this.preferences.soldOutButtonBorderRadius);
          this.$soldOutButton.css("border-style", "solid");
          this.$soldOutButton.css("margin", "10px 0 0 0");
          this.$soldOutButton.css("padding", "0px");
          this.$soldOutButton.css("opacity", "0.7");
        }
      }]), e;
    }();
    callback(ElementNode, "SOLD_OUT_BUTTON_CLASS", options.cssClassPrefix() + "sold-out-button");
    var StringFce = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "format",
        value : function priceFormatter(value) {
          return (new Intl.NumberFormat(browser.getLanguage(), {
            style : "currency",
            currency : v3.getPresentmentCurrency(),
            currencyDisplay : e._currencyDisplay()
          })).format(value);
        }
      }, {
        key : "_currencyDisplay",
        value : function isEverGreen() {
          return browser.isSafari() || browser.isIE() ? "symbol" : "narrowSymbol";
        }
      }]), e;
    }();
    var Util = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "numberWithThousandSeparator",
        value : function value(key, type) {
          return key.toString().replace(/\B(?=(\d{3})+(?!\d))/g, type);
        }
      }]), e;
    }();
    var level = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "format",
        value : function value(str) {
          var pp = str.toFixed(2).split(".");
          var type = pp[0];
          var eventName = Util.numberWithThousandSeparator(type, e.THOUSAND_SEPARATOR);
          var prop = pp[1];
          return eventName + e.DECIMAL_SEPARATOR + prop;
        }
      }]), e;
    }();
    callback(level, "THOUSAND_SEPARATOR", ",");
    callback(level, "DECIMAL_SEPARATOR", ".");
    var R = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "format",
        value : function value(str) {
          var pp = str.toFixed(2).split(".");
          var type = pp[0];
          var eventName = Util.numberWithThousandSeparator(type, e.THOUSAND_SEPARATOR);
          var prop = pp[1];
          return eventName + e.DECIMAL_SEPARATOR + prop;
        }
      }]), e;
    }();
    callback(R, "THOUSAND_SEPARATOR", ".");
    callback(R, "DECIMAL_SEPARATOR", ",");
    var dt = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "format",
        value : function value(str) {
          var pp = str.toFixed(2).split(".");
          var type = pp[0];
          var eventName = Util.numberWithThousandSeparator(type, e.THOUSAND_SEPARATOR);
          var prop = pp[1];
          return eventName + e.DECIMAL_SEPARATOR + prop;
        }
      }]), e;
    }();
    callback(dt, "THOUSAND_SEPARATOR", "'");
    callback(dt, "DECIMAL_SEPARATOR", ".");
    var it = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "format",
        value : function value(str) {
          var currentTimeStr = str.toFixed(0);
          return Util.numberWithThousandSeparator(currentTimeStr, e.THOUSAND_SEPARATOR);
        }
      }]), e;
    }();
    callback(it, "THOUSAND_SEPARATOR", ",");
    var olContext = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "format",
        value : function value(str) {
          var currentTimeStr = str.toFixed(0);
          return Util.numberWithThousandSeparator(currentTimeStr, e.THOUSAND_SEPARATOR);
        }
      }]), e;
    }();
    callback(olContext, "THOUSAND_SEPARATOR", ".");
    var E = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "format",
        value : function value(key, type) {
          if (type) {
            if (type.includes(e.SHOPIFY_AMOUNT_FORMAT)) {
              var n = level.format(key);
              return e._replaceAmount(type, e.SHOPIFY_AMOUNT_FORMAT, n);
            }
            if (type.includes(e.SHOPIFY_AMOUNT_WITH_COMMA_SEPARATOR_FORMAT)) {
              var n = R.format(key);
              return e._replaceAmount(type, e.SHOPIFY_AMOUNT_WITH_COMMA_SEPARATOR_FORMAT, n);
            }
            if (type.includes(e.SHOPIFY_AMOUNT_WITH_APOSTROPHE_SEPARATOR_FORMAT)) {
              var n = dt.format(key);
              return e._replaceAmount(type, e.SHOPIFY_AMOUNT_WITH_APOSTROPHE_SEPARATOR_FORMAT, n);
            }
            if (type.includes(e.SHOPIFY_AMOUNT_NO_DECIMALS_FORMAT)) {
              var n = it.format(key);
              return e._replaceAmount(type, e.SHOPIFY_AMOUNT_NO_DECIMALS_FORMAT, n);
            }
            if (type.includes(e.SHOPIFY_AMOUNT_NO_DECIMALS_WITH_COMMA_SEPARATOR_FORMAT)) {
              var n = olContext.format(key);
              return e._replaceAmount(type, e.SHOPIFY_AMOUNT_NO_DECIMALS_WITH_COMMA_SEPARATOR_FORMAT, n);
            }
            return StringFce.format(key);
          }
          return StringFce.format(key);
        }
      }, {
        key : "_replaceAmount",
        value : function value(key, type, n) {
          return key.replace(type, n);
        }
      }]), e;
    }();
    callback(E, "SHOPIFY_AMOUNT_FORMAT", "{{amount}}");
    callback(E, "SHOPIFY_AMOUNT_WITH_COMMA_SEPARATOR_FORMAT", "{{amount_with_comma_separator}}");
    callback(E, "SHOPIFY_AMOUNT_WITH_APOSTROPHE_SEPARATOR_FORMAT", "{{amount_with_apostrophe_separator}}");
    callback(E, "SHOPIFY_AMOUNT_NO_DECIMALS_FORMAT", "{{amount_no_decimals}}");
    callback(E, "SHOPIFY_AMOUNT_NO_DECIMALS_WITH_COMMA_SEPARATOR_FORMAT", "{{amount_no_decimals_with_comma_separator}}");
    var event = function() {
      /**
       * @param {?} type
       * @param {?} value
       * @param {string} hash
       * @param {?} msg
       * @param {!Object} opts
       * @return {undefined}
       */
      function e(type, value, hash, msg, opts) {
        log(this, e);
        this.variants = type;
        this.allVariants = value;
        /** @type {string} */
        this.preferences = hash;
        this.variantChangedCallback = msg;
        /** @type {!Object} */
        this.options = opts;
        /** @type {!Array} */
        this.$variantLabels = [];
      }
      return t(e, [{
        key : "build",
        value : function value() {
        }
      }, {
        key : "variantSelector",
        value : function value() {
          return this.$variantSelector;
        }
      }, {
        key : "getSelectedVariantId",
        value : function set_input_value() {
          return this.$variantSelector ? this.$variantSelector.val() : 0;
        }
      }, {
        key : "getClassName",
        value : function camelize$1(str) {
          switch(str) {
            case 2:
              return e.VARIANT_SELECTOR_OPTION_2_CLASS;
            case 3:
              return e.VARIANT_SELECTOR_OPTION_3_CLASS;
            default:
              return e.VARIANT_SELECTOR_OPTION_1_CLASS;
          }
        }
      }, {
        key : "_createLabelContainer",
        value : function redraw(value) {
          var $this = new jQuery("<div></div>");
          $this.addClass(e.VARIANT_LABEL_OPTION_CLASS);
          $this.html(value);
          $this.css("margin", "5px 0 0 0");
          $this.css("font-size", this.preferences.variantSelectorLabelFontSize);
          $this.css("color", this.preferences.variantSelectorLabelFontColor);
          UIUtil.applyFontStyle($this, this.preferences.variantSelectorLabelFontStyle);
          UIUtil.applyFontFamily($this, this.preferences.variantSelectorLabelFontFamily);
          this.$variantLabels.push($this);
        }
      }, {
        key : "_setStyles",
        value : function init(element) {
          element.css(UIUtil.getDefaultCss());
          element.css("width", "100%");
          element.css("height", "40px");
          UIUtil.applyFontStyle(element, this.preferences.variantSelectorFontStyle);
          UIUtil.applyFontFamily(element, this.preferences.variantSelectorFontFamily);
          element.css("font-size", this.preferences.variantSelectorFontSize);
          element.css("color", this.preferences.variantSelectorFontColor);
          element.css("background-color", this.preferences.variantSelectorBackgroundColor ? this.preferences.variantSelectorBackgroundColor : "transparent");
          element.css("border-width", this.preferences.variantSelectorBorderSize);
          element.css("border-color", this.preferences.variantSelectorBorderColor ? this.preferences.variantSelectorBorderColor : "transparent");
          element.css("border-radius", this.preferences.variantSelectorBorderRadius);
          element.css("border-style", "solid");
          element.css("margin", "5px 0 0 0");
          element.css("padding", "0px 10px");
          element.css("cursor", "pointer");
          this._setArrowStyles(element);
        }
      }, {
        key : "_setArrowStyles",
        value : function initialize(element) {
          element.css("background-image", "linear-gradient(45deg, transparent 50%, #333 50%), linear-gradient(135deg, #333 50%, transparent 50%)");
          element.css("background-position", "calc(100% - 14px) calc(1em + 2px), calc(100% - 10px) calc(1em + 2px)");
          element.css("background-size", "4px 4px");
          element.css("background-repeat", "no-repeat");
          element.css("-webkit-appearance", "none");
          element.css("-moz-appearance", "none");
          element.css("text-indent", "1px");
          element.css("text-overflow", "");
        }
      }, {
        key : "_disableVariant",
        value : function buildRecursive(value, target) {
          if (this.preferences.showAllVariants && !value) {
            target.attr("disabled", "disabled");
            target.addClass(e.OPTION_DISABLED_CLASS);
            target.css("color", "rgb(170,170,170)");
          }
        }
      }, {
        key : "_defaultOption",
        value : function handler(value) {
          var result = jQuery("<option />");
          result.val("-1");
          result.html("----");
          result.attr("selected", "true");
          value.append(result);
        }
      }, {
        key : "_priceText",
        value : function render(value) {
          if (this._shouldShowVariantPrices()) {
            /** @type {number} */
            var start = value.price / 100;
            return e.PRICE_SEPARATOR + E.format(start, this.preferences.moneyFormat);
          }
          return "";
        }
      }, {
        key : "_shouldShowVariantPrices",
        value : function preSaveUser() {
          return this.preferences.showVariantPrice && this._hasDifferentPrices();
        }
      }, {
        key : "_hasDifferentPrices",
        value : function getTypes() {
          var selector = this.allVariants.map(function(foundProduct) {
            return foundProduct.price;
          });
          return util.distinct(selector).length > 1;
        }
      }]), e;
    }();
    callback(event, "VARIANT_SELECTOR_OPTION_1_CLASS", options.cssClassPrefix() + "variant-selector");
    callback(event, "VARIANT_SELECTOR_OPTION_2_CLASS", options.cssClassPrefix() + "variant-selector-option-2");
    callback(event, "VARIANT_SELECTOR_OPTION_3_CLASS", options.cssClassPrefix() + "variant-selector-option-3");
    callback(event, "VARIANT_LABEL_OPTION_CLASS", options.cssClassPrefix() + "variant-label");
    callback(event, "PRICE_SEPARATOR", "   -   ");
    callback(event, "OPTION_DISABLED_CLASS", options.cssClassPrefix() + "option-disabled");
    var cc = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "getOptionsByPosition",
        value : function key(value, type, id, obj) {
          switch(type) {
            case 1:
              return e.getOptionsLevel1(value);
            case 2:
              return e.getOptionsLevel2(value, id);
            case 3:
              return e.getOptionsLevel3(value, id, obj);
          }
        }
      }, {
        key : "getOptionsLevel3",
        value : function link(value, name, context) {
          var field = value.filter(function(variant) {
            return variant.option2 === context && variant.option1 === name && assert.isNotEmpty(variant.option3);
          });
          return util.isNotEmpty(field) ? util.removeDuplicates(field.map(function(variant) {
            return variant.option3;
          })) : void 0;
        }
      }, {
        key : "getOptionsLevel2",
        value : function reducer(value, name) {
          var field = value.filter(function(variant) {
            return variant.option1 === name && assert.isNotEmpty(variant.option2);
          });
          return util.isNotEmpty(field) ? util.removeDuplicates(field.map(function(line) {
            return line.option2;
          })) : void 0;
        }
      }, {
        key : "getOptionsLevel1",
        value : function reducer(value) {
          var field = value.filter(function(data) {
            return assert.isNotEmpty(data.option1);
          });
          return util.isNotEmpty(field) ? util.removeDuplicates(field.map(function(data) {
            return data.option1;
          })) : void 0;
        }
      }, {
        key : "getVariantByOptions",
        value : function value(key, name, type, hash) {
          return key.find(function(v) {
            return v.option1 === name && v.option2 === type && v.option3 === hash;
          });
        }
      }, {
        key : "getVariant",
        value : function value(key, type) {
          return key.find(function(cmp) {
            return cmp.id == type;
          });
        }
      }, {
        key : "hasNotVariants",
        value : function safeGetOffsetRect(elem) {
          return !e.hasVariants(elem);
        }
      }, {
        key : "hasVariants",
        value : function decamelize$1(str) {
          return str.length > 0;
        }
      }, {
        key : "availableVariantsByPosition",
        value : function value(key, type, n, a, m) {
          switch(type) {
            case 1:
              return key.find(function(options) {
                return options.option1 === m;
              });
            case 2:
              return key.find(function($scope) {
                return $scope.option1 === n && $scope.option2 === m;
              });
            case 3:
              return key.find(function(options) {
                return options.option1 === n && options.option2 === a && options.option3 === m;
              });
          }
        }
      }]), e;
    }();
    var Event = function(f) {
      /**
       * @param {?} scope
       * @param {!Object} i
       * @param {?} x
       * @param {?} y
       * @param {string} id
       * @param {?} height
       * @return {?}
       */
      function value(scope, i, x, y, id, height) {
        var self;
        return log(this, value), (self = context.call(this, scope, i, x, y, height)).$variantSelectors = [], self.variantSelectedId = id || i[0].id, self._defaultOptionSelected(), self._initializeOptions(), self._lastPosition(), self._addLabel(), self;
      }
      forEach(value, f);
      var context = build(value);
      return t(value, [{
        key : "build",
        value : function isExecutable() {
          if (util.isNotEmpty(this.options1)) {
            this._buildVariantAndPopulateSelector(1);
          }
          if (util.isNotEmpty(this.options2)) {
            this._buildVariantAndPopulateSelector(2);
          }
          if (util.isNotEmpty(this.options3)) {
            this._buildVariantAndPopulateSelector(3);
          }
        }
      }, {
        key : "variantSelector",
        value : function generateNextDue() {
          var outputData = this;
          return this.preferences.showVariantSelectorLabel ? this.$variantLabels.map(function(canCreateDiscussions, n) {
            return [canCreateDiscussions, outputData.$variantSelectors[n + 1]];
          }).flat() : this.$variantSelectors;
        }
      }, {
        key : "getSelectedVariantId",
        value : function value() {
          return this.variantSelectedId;
        }
      }, {
        key : "_addLabel",
        value : function generateNextDue() {
          var moduleTasks = this;
          if (this.preferences.showVariantSelectorLabel) {
            jQuery.map(this.options, function(module) {
              return moduleTasks._createLabelContainer(module.name);
            });
          }
        }
      }, {
        key : "_defaultOptionSelected",
        value : function processMsg() {
          var variant = cc.getVariant(this.allVariants, this.variantSelectedId);
          this.option1Selected = variant.option1;
          this.option2Selected = variant.option2;
          this.option3Selected = variant.option3;
        }
      }, {
        key : "_initializeOptions",
        value : function value() {
          this.options1 = cc.getOptionsLevel1(this._variants());
          this.options2 = cc.getOptionsLevel2(this._variants(), this.option1Selected);
          this.options3 = cc.getOptionsLevel3(this._variants(), this.option1Selected, this.option2Selected);
        }
      }, {
        key : "_variants",
        value : function expand_mode() {
          return this.preferences.showAllVariants ? this.allVariants : this.variants;
        }
      }, {
        key : "_lastPosition",
        value : function onMouseMove() {
          /** @type {number} */
          this.lastPosition = util.isNotEmpty(this.options1) ? 1 : 0;
          /** @type {number} */
          this.lastPosition = util.isNotEmpty(this.options2) ? 2 : this.lastPosition;
          /** @type {number} */
          this.lastPosition = util.isNotEmpty(this.options3) ? 3 : this.lastPosition;
        }
      }, {
        key : "_buildVariantAndPopulateSelector",
        value : function init(value) {
          this.$variantSelectors[value] = this._buildVariantSelector(value);
          this._populateSelect(value);
        }
      }, {
        key : "_buildVariantSelector",
        value : function render(key) {
          var osmKeys = this;
          var node = new jQuery("<select></select>");
          return node.addClass(this.getClassName(key)), this._setStyles(node), node.change(function() {
            return osmKeys._changeSelector(key);
          }), node;
        }
      }, {
        key : "_changeSelector",
        value : function init(value) {
          this.option1Selected = this.$variantSelectors[1] ? this.$variantSelectors[1].val() : null;
          this.option2Selected = this.$variantSelectors[2] ? this.$variantSelectors[2].val() : null;
          this.option3Selected = this.$variantSelectors[3] ? this.$variantSelectors[3].val() : null;
          for (; value < this.lastPosition; value++) {
            var valueDash = value + 1;
            this._populateSelect(valueDash);
          }
          var wunderlist_list = cc.getVariantByOptions(this.allVariants, this.option1Selected, this.option2Selected, this.option3Selected);
          if (wunderlist_list) {
            this.variantSelectedId = wunderlist_list.id;
          }
          if (wunderlist_list) {
            this.variantChangedCallback(this.getSelectedVariantId());
          }
        }
      }, {
        key : "_populateSelect",
        value : function redraw(value) {
          var _this = this;
          var allThemes = cc.getOptionsByPosition(this._variants(), value, this.option1Selected, this.option2Selected);
          var list = this.$variantSelectors[value];
          list.empty();
          allThemes.forEach(function(text) {
            return list.append(_this._createOption(value, text));
          });
          if ((list.val() ? list.val() : -1) < 0) {
            this._defaultOption(list);
          }
        }
      }, {
        key : "_createOption",
        value : function editLineText(value, type) {
          var node = jQuery("<option />");
          return node.attr("selected", this._isOptionSelected(value, type)), node.html(this._optionText(value, type)), node.val(type), this._disabledVariantByPosition(value, type, node), node;
        }
      }, {
        key : "_disabledVariantByPosition",
        value : function getPreference(key, name, id) {
          var artistTrack = !!cc.availableVariantsByPosition(this.variants, key, this.option1Selected, this.option2Selected, name) || this.preferences.showSoldOutButton && cc.hasNotVariants(this.variants) && !this._isLastPosition(key);
          this._disableVariant(artistTrack, id);
        }
      }, {
        key : "_optionText",
        value : function key(value, type) {
          /** @type {string} */
          var result = type;
          if (this._isLastPosition(value)) {
            var i = this._getVariantId(value, type);
            var re = cc.getVariant(this.allVariants, i);
            result = result + this._priceText(re);
          }
          return result;
        }
      }, {
        key : "_isOptionSelected",
        value : function addNewLinkName(key, type) {
          return cc.getVariant(this.allVariants, this.variantSelectedId) === this._getVariantId(key, type);
        }
      }, {
        key : "_isLastPosition",
        value : function render(value) {
          return value === this.lastPosition;
        }
      }, {
        key : "_getVariantId",
        value : function duOption(value, name) {
          var eventName = 1 === value ? name : this.option1Selected;
          var url = 2 === value ? name : this.option2Selected;
          var className = 3 === value ? name : this.option3Selected;
          var wrapper = cc.getVariantByOptions(this.allVariants, eventName, url, className);
          return wrapper ? wrapper.id : void 0;
        }
      }]), value;
    }(event);
    var Array = function(f) {
      /**
       * @param {?} n
       * @param {?} i
       * @param {?} url
       * @param {?} z
       * @param {?} o
       * @return {?}
       */
      function value(n, i, url, z, o) {
        return log(this, value), data.call(this, n, i, url, z, o);
      }
      forEach(value, f);
      var data = build(value);
      return t(value, [{
        key : "build",
        value : function init() {
          var e = this;
          this.$variantSelector = new jQuery("<select></select>");
          this.$variantSelector.addClass(event.VARIANT_SELECTOR_OPTION_1_CLASS);
          this._setStyles(this.$variantSelector);
          this._populateSelect();
          this._addLabel();
          this.$variantSelector.change(function() {
            return e.variantChangedCallback(e.getSelectedVariantId());
          });
        }
      }, {
        key : "variantSelector",
        value : function getNewField() {
          return jQuery.merge(this.$variantLabels, this.$variantSelector);
        }
      }, {
        key : "getSelectedVariantId",
        value : function set_input_value() {
          return this.$variantSelector ? this.$variantSelector.val() : 0;
        }
      }, {
        key : "_populateSelect",
        value : function preSaveUser() {
          if (this.preferences.showAllVariants) {
            if (cc.hasNotVariants(this.variants)) {
              this._defaultOption(this.$variantSelector);
            }
            this._populateVariants(this.allVariants);
          } else {
            this._populateVariants(this.variants);
          }
        }
      }, {
        key : "_addLabel",
        value : function buildStateFromSegments() {
          if (this.preferences.showVariantSelectorLabel) {
            var e = jQuery.map(this.options, function(engineDiscovery) {
              return engineDiscovery.name;
            }).join(" / ");
            this._createLabelContainer(e);
          }
        }
      }, {
        key : "_populateVariants",
        value : function createSymbolIcon(value) {
          var _this = this;
          value.forEach(function(item) {
            var n = _this._createOption(item);
            _this._disableVariant(item.available, n);
            _this.$variantSelector.append(n);
          });
        }
      }, {
        key : "_createOption",
        value : function editLineText(value) {
          var t = jQuery("<option />");
          return t.val(value.id), t.html(this._optionText(value)), t.attr("data-variant-id", value.id), t;
        }
      }, {
        key : "_optionText",
        value : function safeGetOffsetRect(elem) {
          return elem.title + this._priceText(elem);
        }
      }]), value;
    }(event);
    callback(Array, "PRICE_SEPARATOR", "   -   ");
    var Node = function() {
      /**
       * @param {string} data
       * @param {!Function} hash
       * @param {!Object} type
       * @return {undefined}
       */
      function e(data, hash, type) {
        log(this, e);
        /** @type {string} */
        this.product = data;
        /** @type {!Function} */
        this.preferences = hash;
        /** @type {!Object} */
        this.$productLinkElement = type;
        this.errorUI = new a;
        this._buildVariants(data);
        this.variantImageUpdater = new Client(data, type, hash.target);
        this.quantitySelectorUI = new Buffer(hash);
        this.soldOutButtonUI = new ElementNode(hash);
        if (this._hasAvailableVariant()) {
          this.addToCartButtonUI = new Error(this.defaultVariantId, this.errorUI, this.quantitySelectorUI, hash, data.tags, this.product.handle);
        }
        this._build();
      }
      return t(e, [{
        key : "_buildVariants",
        value : function init(key) {
          var touchSystem = this;
          var p = areaHelper.href(this.$productLinkElement);
          var name = node.getParameter(p, "variant");
          /** @type {string} */
          this.id = name ? e.WIDGET_CLASS + "-" + key.id + "-" + name : e.WIDGET_CLASS + "-" + key.id;
          var i = item.availableVariants(key);
          var metricStats = item.allVariants(key);
          if (i.length > 0) {
            this.defaultVariantId = name || i[0].id;
          }
          this.variantSelectorUI = this._getVariantUI(i, metricStats, function(e) {
            return touchSystem._variantChanged(e);
          }, key.options);
        }
      }, {
        key : "_hasAvailableVariant",
        value : function value() {
          return this.defaultVariantId;
        }
      }, {
        key : "widget",
        value : function value() {
          return this.$widget;
        }
      }, {
        key : "getId",
        value : function getTexturesCacheId() {
          return this.id;
        }
      }, {
        key : "_build",
        value : function initialise() {
          this.$widget = new jQuery("<div></div>");
          this.$widget.addClass(e.WIDGET_CLASS);
          this.$widget.attr("id", this.id);
          this._appendVariantSelectorIfRequired();
          this._appendErrorBox();
          this._appendAddToCartButton();
          this._appendQuantitySelectorIfRequired();
          this.$widget.css("padding", "1px 5px 30px 5px");
          this.$widget.css("width", "100%");
        }
      }, {
        key : "_getVariantUI",
        value : function change(value, type, msg, obj) {
          return this.preferences.enableMultipleVariantSelectors ? new Event(value, type, this.preferences, msg, this.defaultVariantId, obj) : new Array(value, type, this.preferences, msg, obj);
        }
      }, {
        key : "_appendVariantSelectorIfRequired",
        value : function onUpdate() {
          var isPayment = item.hasMoreThanOneVariants(this.product);
          /** @type {boolean} */
          var isAccount = item.availableVariants(this.product).length > 0;
          if (this.preferences.showVariantSelector && isPayment && (isAccount || this.preferences.showAllVariants)) {
            this.variantSelectorUI.build();
            this.$widget.append(this.variantSelectorUI.variantSelector());
          }
        }
      }, {
        key : "_appendErrorBox",
        value : function onUpdate() {
          this.$widget.append(this.errorUI.errorBox());
        }
      }, {
        key : "_appendAddToCartButton",
        value : function open() {
          this.$buttonContainer = new jQuery("<div></div>");
          this.$buttonContainer.addClass(e.BUTTON_SUPER_CONTAINER);
          this.$buttonContainer.css("display", "flex");
          this.$buttonContainer.css("flex-direction", "row");
          if (this._shouldAppendAddToCartButton()) {
            this.$buttonContainer.append(this.addToCartButtonUI.addToCartButton());
            this.$widget.append(this.$buttonContainer);
          } else {
            this.$buttonContainer.append(this.soldOutButtonUI.soldOutButton());
            this.$widget.append(this.$buttonContainer);
          }
        }
      }, {
        key : "_appendQuantitySelectorIfRequired",
        value : function StripeButtons() {
          if (this.preferences.showQuantitySelector && this._shouldAppendAddToCartButton()) {
            this.quantitySelectorUI.build();
            this.$buttonContainer.prepend(this.quantitySelectorUI.quantitySelector());
          }
        }
      }, {
        key : "_variantChanged",
        value : function closeChal(key) {
          this.addToCartButtonUI.updateSelectedVariantId(key);
          if (this.preferences.updateVariantImage) {
            this.variantImageUpdater.update(item.getVariantImage(this.product, key));
          }
        }
      }, {
        key : "_shouldAppendAddToCartButton",
        value : function init() {
          var p = areaHelper.href(this.$productLinkElement);
          var path = node.getParameter(p, "variant");
          return path ? item.isVariantAvailable(this.product, path) : item.isAvailable(this.product);
        }
      }]), e;
    }();
    callback(Node, "WIDGET_CLASS", options.cssClassPrefix() + "widget");
    callback(Node, "BUTTON_SUPER_CONTAINER", options.cssClassPrefix() + "button-super-container");
    var domConstruct = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "place",
        value : function numberPolyfill(elem, type, properties) {
          var a = e._targetElement(type);
          if ("LAST_CHILD" === properties) {
            elem.appendTo(a);
          } else {
            elem.insertAfter(a);
          }
        }
      }, {
        key : "_targetElement",
        value : function repositionMyTooltips(value) {
          var t = jQuery(value);
          var expRecords = t.filter(":visible").filter(":first");
          return expRecords.length > 0 ? expRecords : t.filter(":first");
        }
      }]), e;
    }();
    var _this = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "place",
        value : function value(key, type, opts, obj) {
          var win = v.find(type, opts);
          if (win) {
            e._placeOnFoundTarget(key, opts, obj, win);
          }
        }
      }, {
        key : "_placeOnFoundTarget",
        value : function constructor(value, type, i, x) {
          if (e._isConfiguredTarget(x, type)) {
            domConstruct.place(value, x, i);
          } else {
            x.append(value);
          }
        }
      }, {
        key : "_isConfiguredTarget",
        value : function isA(value, type) {
          return value.is(jQuery(type));
        }
      }]), e;
    }();
    var $mmaModSurveyOffline = function() {
      /**
       * @return {undefined}
       */
      function self() {
        log(this, self);
      }
      return t(self, null, [{
        key : "build",
        value : function text(value, name, properties) {
          self._buildSafely(jQuery(value), name, properties);
        }
      }, {
        key : "_buildSafely",
        value : function value(key, type, a) {
          try {
            self._buildIfPossible(key, type, a);
          } catch (conv_reverse_sort) {
            console.log(conv_reverse_sort);
          }
        }
      }, {
        key : "_buildIfPossible",
        value : function init(value, tag, type) {
          var name = areaHelper.href(value);
          var path = node.getParameter(name, "variant");
          if (self._shouldBuildWidget(tag, path, type)) {
            self._build(value, tag, type);
          }
        }
      }, {
        key : "_shouldBuildWidget",
        value : function resize(type, name, attr) {
          return !item.hasTag(type, options.AVOID_WIDGET_TAG) && (name ? attr.showSoldOutButton || item.isVariantAvailable(type, name) : attr.showSoldOutButton || item.isAvailable(type));
        }
      }, {
        key : "_build",
        value : function create(value, type, parent) {
          var r = new Node(type, parent, value);
          _this.place(r.widget(), value, parent.target, parent.targetPlacement);
          self._removePossibleWidgetSimilarSiblings(r);
          self._removePossibleWidgetSimilarRelatives(r, value, parent.target);
        }
      }, {
        key : "_removePossibleWidgetSimilarSiblings",
        value : function init(value) {
          value.widget().siblings("." + Node.WIDGET_CLASS).remove();
        }
      }, {
        key : "_removePossibleWidgetSimilarRelatives",
        value : function init(value, type, a) {
          var link = v.find(type, a);
          if (link) {
            link.find("#" + value.getId()).not(value.widget()).remove();
            link.siblings("#" + value.getId()).not(value.widget()).remove();
          }
        }
      }]), self;
    }();
    var Object = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "areProductsInRegularGrid",
        value : function safeGetOffsetRect(elem) {
          return e._areAllProductsSimilarWidth(elem);
        }
      }, {
        key : "gridRows",
        value : function initialize(value) {
          var attribute = value.map(function(canCreateDiscussions, insertButton) {
            return jQuery(insertButton).offset().top;
          }).toArray();
          var association = util.distinct(attribute);
          /** @type {!Array} */
          var r = [];
          return association.forEach(function(st) {
            var n = value.filter(function(canCreateDiscussions, insertButton) {
              return jQuery(insertButton).offset().top == st;
            });
            r.push(n);
          }), r;
        }
      }, {
        key : "_areAllProductsSimilarWidth",
        value : function PlotPreparer(value) {
          var n = value.map(function(canCreateDiscussions, $window) {
            return jQuery($window).innerWidth();
          });
          return Math.max.apply(Math, n) / Math.min.apply(Math, n) < e.WIDTH_DIFFERENCE_RATIO_THRESHOLD;
        }
      }]), e;
    }();
    callback(Object, "WIDTH_DIFFERENCE_RATIO_THRESHOLD", 2);
    var links = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "alignIfRequiredAndPossible",
        value : function camelize$1(str) {
          if (str) {
            e._alignIfPossible();
          }
        }
      }, {
        key : "_alignIfPossible",
        value : function LiveDetectWindowSize() {
          var t = jQuery(e.WIDGET_SELECTOR);
          var image_re = t.parent();
          if (e._canWidgetsMarginTopBeAligned(image_re)) {
            e._alignWidgetsAndTryToRealignWhenNecessary(t);
          }
        }
      }, {
        key : "_canWidgetsMarginTopBeAligned",
        value : function camelize$1(str) {
          return Object.areProductsInRegularGrid(str);
        }
      }, {
        key : "_alignWidgetsAndTryToRealignWhenNecessary",
        value : function fullHeightToggled(value) {
          e._alignWidgets(value);
          setTimeout(function() {
            return e._alignWidgets(value);
          }, 100);
          setTimeout(function() {
            return e._alignWidgets(value);
          }, 500);
          setTimeout(function() {
            return e._alignWidgets(value);
          }, 1e3);
          window.addEventListener("resize", function() {
            return e._alignWidgets(value);
          });
        }
      }, {
        key : "_alignWidgets",
        value : function proxyquireTransformer(value) {
          var langLocaleMap = value.parent();
          Object.gridRows(langLocaleMap).forEach(function(t) {
            var n = t.find(e.WIDGET_SELECTOR);
            if (n.length > 1) {
              e._resetMarginTop(n);
              e._alignRowWidgets(n);
            }
          });
        }
      }, {
        key : "_alignRowWidgets",
        value : function show(value) {
          var start = value.map(function(canCreateDiscussions, insertButton) {
            return jQuery(insertButton).offset().top;
          });
          /** @type {number} */
          var spy = Math.max.apply(Math, start);
          value.each(function(canCreateDiscussions, t) {
            var fhTop = jQuery(t).offset().top;
            /** @type {number} */
            var tt_top = spy - fhTop + 0;
            jQuery(t).css("padding-top", tt_top + "px");
          });
        }
      }, {
        key : "_resetMarginTop",
        value : function close(value) {
          value.each(function(canCreateDiscussions, t) {
            jQuery(t).css("padding-top", "0px");
          });
        }
      }]), e;
    }();
    callback(links, "WIDGET_SELECTOR", "." + Node.WIDGET_CLASS);
    var exerproto = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "fix",
        value : function LiveDetectWindowSize() {
          var t = jQuery("." + Node.WIDGET_CLASS);
          e._clearPreviousElementMarginBottom(t);
        }
      }, {
        key : "_clearPreviousElementMarginBottom",
        value : function initialize(value) {
          value.prev().css("margin-bottom", "0px");
          value.prev().css("padding-bottom", "0px");
        }
      }]), e;
    }();
    var selected = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "product",
        value : function _downloadRegistry(value) {
          /** @type {string} */
          var __dirname = value + ".js";
          var dir = node.isDemoPage() ? e.DEMO_URL : __dirname;
          return element.jsonGetPromise(dir).catch(function(canCreateDiscussions) {
            return Promise.resolve({});
          }).then(function(inEditorWidth) {
            return e._productWithUrl(inEditorWidth, value);
          });
        }
      }, {
        key : "_productWithUrl",
        value : function expandUrlButtonOnenter(value, name) {
          return value.url = name, value;
        }
      }]), e;
    }();
    callback(selected, "DEMO_URL", options.cdnUrl() + "/support/demo/product.json");
    var e = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "product",
        value : function cache(key) {
          return e.CACHE[key] ? Promise.resolve(e.CACHE[key]) : selected.product(key).then(function(knownModel) {
            return e.CACHE[key] = knownModel, knownModel;
          });
        }
      }]), e;
    }();
    callback(e, "CACHE", []);
    var Deferred = function() {
      /**
       * @param {?} hash
       * @return {undefined}
       */
      function e(hash) {
        log(this, e);
        this.preferences = hash;
      }
      return t(e, [{
        key : "build",
        value : function value() {
          var e = credential_list.findUnprocessedProductLinks();
          var parsed_expression = this._productUrls(e);
          if (window.incubate && window.incubate.enableSequentialLoading) {
            this._sequentialLoad(parsed_expression, e);
          } else {
            this._parallelLoad(parsed_expression, e);
          }
        }
      }, {
        key : "_sequentialLoad",
        value : function run(value, type) {
          var self = this;
          value.forEach(function(results) {
            e.product(results).then(function(whilstNext) {
              return self._buildWidget(type, whilstNext);
            });
          });
          this._afterBuildingProcess();
        }
      }, {
        key : "_parallelLoad",
        value : function value(key, type) {
          var console = this;
          var settingPromises = key.map(function(results) {
            return e.product(results);
          });
          Promise.all(settingPromises).then(function(originServerAccessTokenResponse) {
            return console._buildWidgets(type, originServerAccessTokenResponse);
          }).then(function() {
            return console._afterBuildingProcess();
          });
        }
      }, {
        key : "_productUrls",
        value : function unique(value) {
          var selector = value.map(function(name) {
            return areaHelper.hrefPathname(name);
          });
          return util.distinct(selector);
        }
      }, {
        key : "_buildWidgets",
        value : function value(key, type) {
          var storage = this;
          key.forEach(function(name) {
            var packagesDefinition = type.find(function(chat_histories) {
              return chat_histories.url == areaHelper.hrefPathname(name);
            });
            storage._buildSingleWidget(name, packagesDefinition);
          });
        }
      }, {
        key : "_buildWidget",
        value : function key(value, type) {
          var n = value.find(function(name) {
            return type.url == areaHelper.hrefPathname(name);
          });
          this._buildSingleWidget(n, type);
        }
      }, {
        key : "_buildSingleWidget",
        value : function duOption(value, name) {
          $mmaModSurveyOffline.build(value, name, this.preferences);
          this._markProductLinkAsProcessed(value);
        }
      }, {
        key : "_afterBuildingProcess",
        value : function apply() {
          exerproto.fix();
          links.alignIfRequiredAndPossible(this.preferences.alignWidgets);
        }
      }, {
        key : "_markProductLinkAsProcessed",
        value : function LiveDetectWindowSize(value) {
          jQuery(value).addClass(options.PROCESSED_BY_INCUBATE_CLASS);
        }
      }]), e;
    }();
    var NPMPackages = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "addScriptCode",
        value : function loadPartTwo(value) {
          /** @type {!Element} */
          var node = document.createElement("script");
          /** @type {string} */
          node.type = "text/javascript";
          /** @type {!Object} */
          node.innerHTML = value;
          document.getElementsByTagName("head")[0].appendChild(node);
        }
      }]), e;
    }();
    var UI = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "addStyles",
        value : function initFrameCSS(value) {
          /** @type {!Element} */
          var t = document.createElement("style");
          /** @type {!Object} */
          t.innerHTML = value;
          document.getElementsByTagName("head")[0].appendChild(t);
        }
      }]), e;
    }();
    var loader = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "addScripts",
        value : function locate(elem, name) {
          if (assert.isNotEmpty(elem)) {
            UI.addStyles(elem);
          }
          if (assert.isNotEmpty(name)) {
            NPMPackages.addScriptCode(name);
          }
        }
      }]), e;
    }();
    var thisWalker = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "start",
        value : function _executeCallbackAfterASufficientIdlePeriod(value) {
          setInterval(function() {
            return e._executeCallbackIfPageProductLinksChanged(value);
          }, e.RELOAD_CHECKING_INTERVAL);
        }
      }, {
        key : "_executeCallbackIfPageProductLinksChanged",
        value : function defaultSeriesIterator(elem) {
          if (e._isThereAnyUnprocessedProductLink()) {
            elem();
          }
        }
      }, {
        key : "_isThereAnyUnprocessedProductLink",
        value : function writeTextArgs() {
          return credential_list.findUnprocessedProductLinks().length > 0;
        }
      }]), e;
    }();
    callback(thisWalker, "RELOAD_CHECKING_INTERVAL", 300);
    var $this = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "cssFixer",
        value : function key(value) {
          if (assert.isEmpty(value)) {
            return "";
          }
          switch(value.toLowerCase()) {
            case "craft":
            case "crave":
            case "dawn":
            case "sense":
            case "studio":
            case "taste":
            case "ride":
            case "colorblock":
              return ".cleverapps-collections-add-to-cart-widget {\n                            position: relative; \n                            z-index: 1;\n                        }";
            case "refresh":
              return ".cleverapps-collections-add-to-cart-widget {\n                            position: relative; \n                            z-index: 1;\n                        }\n                        .cleverapps-collections-add-to-cart-sold-out-button,\n                        .cleverapps-collections-add-to-cart-add-to-cart-button,\n                        .cleverapps-collections-add-to-cart-quantity-selector-container,\n                        .cleverapps-collections-add-to-cart-variant-selector,\n                        .cleverapps-collections-add-to-cart-variant-selector-option-2,\n                        .cleverapps-collections-add-to-cart-variant-selector-option-3 {\n                            border-radius: 0.8rem !important;\n                        }";
            case "expanse":
              return ".grid-item.grid-product {\n                            flex-direction: column !important;\n                        }";
            default:
              return "";
          }
        }
      }]), e;
    }();
    var ourSelection = function() {
      /**
       * @return {undefined}
       */
      function e() {
        log(this, e);
      }
      return t(e, null, [{
        key : "start",
        value : function init() {
          if (node.isDemoPage()) {
            setTimeout(function() {
              return e._start();
            }, 100);
          } else {
            e._start();
          }
        }
      }, {
        key : "_start",
        value : function value() {
          if (I.shouldStartApp()) {
            e._loadPreferencesAndBuildWidgets();
          }
        }
      }, {
        key : "_loadPreferencesAndBuildWidgets",
        value : function _outboxList() {
          O.publishIncubateJqueryIfRequired();
          mockObjectLoader.load().then(function(inEditorWidth) {
            return e._buildWidgetsIfRequired(inEditorWidth);
          }).catch(function(error) {
            return e._logError(error);
          });
        }
      }, {
        key : "_buildWidgetsIfRequired",
        value : function safeGetOffsetRect(elem) {
          if (e._shouldBuildWidgets(elem)) {
            e._buildWidgets(elem);
          }
        }
      }, {
        key : "_buildWidgets",
        value : function show(value) {
          var ret = new Deferred(value);
          ret.build();
          thisWalker.start(function() {
            return ret.build();
          });
          e._addCustomScripts(value);
        }
      }, {
        key : "_shouldBuildWidgets",
        value : function getNeighbourItem(value) {
          return value && me.isRightPage(value);
        }
      }, {
        key : "_addCustomScripts",
        value : function onWidgetUpdate(data) {
          loader.addScripts(data.customCss, data.customJs);
          loader.addScripts($this.cssFixer(data.theme), "");
        }
      }, {
        key : "_logError",
        value : function setSortingCriteria(key) {
          console.log("Error when starting Collections Add to Cart Button app:");
          console.log(key);
        }
      }]), e;
    }();
    new (t(function error() {
      log(this, error);
      ourSelection.start();
    }));
  }("undefined" == typeof collectionsAddToCart ? collectionsAddToCart = {} : collectionsAddToCart);
}
;

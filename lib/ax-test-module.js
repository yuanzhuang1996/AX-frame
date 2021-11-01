module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _createSuper; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = JSON.parse("{\"app\":\"demo-modules\",\"module\":\"test-module\",\"themesPath\":\"/assets/themes/\"}");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-search");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-select");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-badge");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-components/lib/ax-checkbox");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@ax/app-demo-modules/lib/ax-demo-modules");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./modules/test-module/src/index.vue?vue&type=template&id=cd2d9b8e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "test_module app_demo_modules flex:1 flex items-center justify-center align-middle align-text-purple-800"
    },
    [
      _c("div", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.testLang.t("title")))
      ]),
      _vm._v(" "),
      _c("i", { staticClass: "i_d_mod i_d_mod_province" }),
      _vm._v(" "),
      _c("ax-badge", {
        model: {
          value: _vm.badge,
          callback: function($$v) {
            _vm.badge = $$v
          },
          expression: "badge"
        }
      }),
      _vm._v(" "),
      _c("ax-checkbox", [_vm._v("单选框")]),
      _vm._v(" "),
      _c("div", { staticClass: "css_demo" }, [
        _vm._v(
          "\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n    assumenda beatae corporis deserunt distinctio ducimus ea earum, eos error\n    est iusto, magnam maiores natus nihil praesentium rem, repudiandae\n    similique voluptas!\n  "
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        [_c("ax-select", { attrs: { options: _vm.options, type: "button" } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./modules/test-module/src/index.vue?vue&type=template&id=cd2d9b8e&

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-search"
var ax_search_ = __webpack_require__(9);
var ax_search_default = /*#__PURE__*/__webpack_require__.n(ax_search_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-select"
var ax_select_ = __webpack_require__(10);
var ax_select_default = /*#__PURE__*/__webpack_require__.n(ax_select_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-badge"
var ax_badge_ = __webpack_require__(11);
var ax_badge_default = /*#__PURE__*/__webpack_require__.n(ax_badge_);

// EXTERNAL MODULE: external "@ax/app-core-components/lib/ax-checkbox"
var ax_checkbox_ = __webpack_require__(12);
var ax_checkbox_default = /*#__PURE__*/__webpack_require__.n(ax_checkbox_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 5 modules
var createSuper = __webpack_require__(6);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(0);

// EXTERNAL MODULE: external "@ax/app-demo-modules/lib/ax-demo-modules"
var ax_demo_modules_ = __webpack_require__(13);
var ax_demo_modules_default = /*#__PURE__*/__webpack_require__.n(ax_demo_modules_);

// CONCATENATED MODULE: ./modules/test-module/src/lang.ts
 // 当前模块国际化对象

var TestLang = app_core_framework_["AxLocale"].create(app_core_framework_["AxLocale"].getModuleKey(__webpack_require__(8)));
TestLang.t('tips.delete.confirm.single');
/* harmony default export */ var lang = (TestLang);
// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--1-1!./node_modules/vue-loader/lib??vue-loader-options!./modules/test-module/src/index.vue?vue&type=script&lang=ts&














var srcvue_type_script_lang_ts_TestModule = /*#__PURE__*/function (_AxVueBase) {
  Object(inherits["a" /* default */])(TestModule, _AxVueBase);

  var _super = Object(createSuper["a" /* default */])(TestModule);

  function TestModule() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TestModule);

    _this = _super.apply(this, arguments);
    _this.btnText = '按钮';
    _this.a = {
      foo: function foo() {}
    };
    _this.badge = 23;
    _this.testLang = lang;
    _this.options = [{
      text: '123',
      key: 123
    }]; //#endregion

    return _this;
  }
  /**
   * Api测试
   */


  Object(createClass["a" /* default */])(TestModule, [{
    key: "testApi",
    value: function testApi() {
      ax_demo_modules_default.a.DemoApi.getData('123', 'kkk').then();
    } //#region 生命周期

  }, {
    key: "created",
    value: function created() {
      console.log(lang); // 导入 CSS 文件

      this.importCss(this, ['index.css'], __webpack_require__(8));
    }
  }]);

  return TestModule;
}(app_core_framework_["AxVueBase"]);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Inject"])('voo')], srcvue_type_script_lang_ts_TestModule.prototype, "voo", void 0);

Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Inject"])({
  from: 'optional',
  default: 'default'
})], srcvue_type_script_lang_ts_TestModule.prototype, "optional", void 0);

srcvue_type_script_lang_ts_TestModule = Object(external_tslib_["__decorate"])([Object(external_vue_property_decorator_["Component"])({
  components: {
    AxCheckbox: ax_checkbox_default.a,
    AxBadge: ax_badge_default.a,
    AxSelect: ax_select_default.a,
    AxSearch: ax_search_default.a
  }
})], srcvue_type_script_lang_ts_TestModule);
/* harmony default export */ var srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_TestModule);
// CONCATENATED MODULE: ./modules/test-module/src/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var test_module_srcvue_type_script_lang_ts_ = (srcvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./modules/test-module/src/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  test_module_srcvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "modules/test-module/src/index.vue"
/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./modules/test-module/index.ts

/* harmony default export */ var test_module = __webpack_exports__["default"] = (src);

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("@ax/app-core-framework");

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./modules/core-module/export.ts
var export_namespaceObject = {};
__webpack_require__.r(export_namespaceObject);
__webpack_require__.d(export_namespaceObject, "Core", function() { return core_Core; });
__webpack_require__.d(export_namespaceObject, "DemoApi", function() { return demo_DemoApi; });
__webpack_require__.d(export_namespaceObject, "CasApi", function() { return cas_CasApi; });
__webpack_require__.d(export_namespaceObject, "EDemoEnum", function() { return EDemoEnum; });
__webpack_require__.d(export_namespaceObject, "APP_ID", function() { return APP_ID; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: external "@ax/app-core-framework"
var app_core_framework_ = __webpack_require__(0);

// CONCATENATED MODULE: ./modules/core-module/src/core/index.ts



var SystemCenter = app_core_framework_["AxCore"].SystemCenter; // 模块核心

var core_module = SystemCenter.getModule('demo-modules'); // 下达事件处理 FIXME: demo演示，开发时记得删掉

core_module.dispatcher.on('received', function (evt) {
  // eslint-disable-next-line no-console
  console.log('收到', evt);
}); // 核心模块，用来处理应用模块和主系统之前的消息处理

var core_Core = /*#__PURE__*/function () {
  function Core() {
    Object(classCallCheck["a" /* default */])(this, Core);
  }
  /**
   * 获取模块
   * @returns {SystemModule}
   */


  Object(createClass["a" /* default */])(Core, null, [{
    key: "module",
    get: function get() {
      return core_module;
    }
  }]);

  return Core;
}();
/**
 * 上报消息
 * @type {{redirect(): void}}
 */



core_Core.emit = {
  redirect: function redirect() {
    core_module.emit(new app_core_framework_["AxEvent"](core_module, 'redirect', 'login'));
  }
};
// CONCATENATED MODULE: ./modules/core-module/src/api/index.ts


var HttpConfig = app_core_framework_["AxConfig"].HttpConfig; // 项目要用到的请求host地址

var hostConfig = {
  // 默认登录cas使用请求地址
  HOST_CAS: 'http://183.3.129.44:30048/',
  // 工作流请求地址
  HOST_FlOW: 'http://183.3.129.44:30055/'
}; // 设置请求配置

var httpConfig = new HttpConfig({
  host: hostConfig
}); // Cas请求服务

var CasService = new app_core_framework_["AxRequest"]({
  baseUrl: httpConfig.host.HOST_CAS,
  redirect: core_Core.emit.redirect
}); // Mgt请求服务

var MgtService = new app_core_framework_["AxRequest"]({
  baseUrl: httpConfig.host.HOST_FlOW,
  redirect: core_Core.emit.redirect
});
/**
 * Cas请求
 * @param cmd
 * @param params
 * @returns {Promise<T>}
 */

function requestCas(cmd, params) {
  // 返回接口结果
  return CasService.httpRequest('get', app_core_framework_["AxVuexUser"].token, "xxx/".concat(cmd), app_core_framework_["AxVuexApp"].lang, params, []);
}
/**
 * 默认POST请求模板
 * @param cmd
 * @param data
 * @returns {Promise<T>}
 */

function requestMgt(cmd) {
  for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    data[_key - 1] = arguments[_key];
  }

  return MgtService.httpRequest('post', app_core_framework_["AxVuexUser"].token, "api/json/mgt/".concat(cmd), app_core_framework_["AxVuexApp"].lang, {}, data);
}
// CONCATENATED MODULE: ./modules/core-module/src/api/demo.ts


 // demo

var demo_DemoApi = /*#__PURE__*/function () {
  // 禁止实例化使用
  function DemoApi() {
    Object(classCallCheck["a" /* default */])(this, DemoApi);
  }

  Object(createClass["a" /* default */])(DemoApi, null, [{
    key: "getData",
    value: function getData(id, key) {
      var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return requestMgt('preplanIndexPage-get', id, key, sort);
    }
  }]);

  return DemoApi;
}();


// CONCATENATED MODULE: ./modules/core-module/src/api/cas.ts


 // Cas相关接口

var cas_CasApi = /*#__PURE__*/function () {
  // 禁止实例化使用
  function CasApi() {
    Object(classCallCheck["a" /* default */])(this, CasApi);
  }

  Object(createClass["a" /* default */])(CasApi, null, [{
    key: "getUserInfo",
    value: function getUserInfo(id) {
      return requestCas('get-user-info', {
        id: id
      });
    }
  }]);

  return CasApi;
}();


// CONCATENATED MODULE: ./modules/core-module/src/const/demo.ts
var EDemoEnum;

(function (EDemoEnum) {
  EDemoEnum[EDemoEnum["ACTIVE"] = 0] = "ACTIVE";
  EDemoEnum[EDemoEnum["DISABLE"] = 1] = "DISABLE";
})(EDemoEnum || (EDemoEnum = {}));

var APP_ID = 'demo-module';
// CONCATENATED MODULE: ./modules/core-module/src/const/index.ts

// CONCATENATED MODULE: ./modules/core-module/src/interfaces/demo.ts

// CONCATENATED MODULE: ./modules/core-module/src/interfaces/index.ts

// CONCATENATED MODULE: ./modules/core-module/export.ts


 // 导出核心模块

 // 导出api

 // 导出常量定义

 // 导出类型定义

 // 导出工具类
// export { Foo };
// CONCATENATED MODULE: ./modules/core-module/index.ts
 // 为了生成的申明文件统一归在一个namespace里面

/* harmony default export */ var modules_core_module = __webpack_exports__["default"] = (export_namespaceObject);

/***/ }),

/***/ 2:
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

/***/ })

/******/ });
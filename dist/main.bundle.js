/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  font-family: 'Arial', sans-serif;\n  padding: 40px;\n\n  --bg-colour: #f4f7fa;\n  --form-colour: #ffffff;\n  --btn-colour: #007BFF;\n  --day-colour: rgb(121, 208, 255);\n  --day-colour: #f7f9fc;\n  --text-primary: #333;\n  --text-secondary: #777;\n  --border-colour: #e0e0e0;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--bg-colour);\n  color: var(--text-primary);\n}\n\n.content {\n  display: flex;\n  min-width: 600px;\n  flex-direction: column;\n  padding: 20px;\n}\n\n\n.top-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form-container, .switch {\n  margin: 1rem 0 1rem 0;\n}\n\n/* FORM */\n\n.form-background {\n  flex: 1 0 auto;\n}\n\n.form-container {\n  flex: 1 0 auto;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin: 0 auto;\n\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n\n  background-color: var(--form-colour);\n  max-width: 400px;\n}\n\n.location-div {\n  display: flex;\n  height: fit-content;\n  align-items: center;\n  gap: 10px;\n}\n\n.edit-form-btn {\n  font-size: 16px;\n  height: fit-content;\n\n  width: 100%;\n  padding: 12px;\n  background-color: var(--btn-colour);\n  color: var(--form-colour);\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.edit-form-btn:hover {\n  background-color: #0056b3;\n}\n\nlabel[for=\"location-input\"] {\n  flex: 1;\n  font-size: 16px;\n  margin-right: 10px;\n}\n\ninput[type=\"text\"] {\n  flex: 2;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #d1d5da;\n  border-radius: 4px;\n  outline: none;\n  transition: border-color 0.3s;\n}\n\ninput[type=\"text\"]:focus {\n  border-color: #007BFF;\n}\n\n/* TOGGLE */\n\n/* The container for temperature elements */\n.temp-container {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* WEATHER CONTAINER */\n\n.weather-content {\n  display: flex;\n    gap: 30px;\n    overflow: auto;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    border: none;\n}\n\n.day-div:first-child {\n  margin-left: auto;\n}\n\n.day-div:last-child {\n  margin-right: auto;\n}\n\n.day-div {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  gap: 10px;\n  background-color: var(--day-colour);\n  min-width: 200px;\n}\n\n.day-div {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background-color: var(--day-colour);\n  padding: 15px;\n  border-radius: 6px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  border: 1px solid var(--border-colour);\n}\n\n.day-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  color: var(--text-primary);\n}\n\n.time-div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.time-div:last-child {\n  margin-bottom: 1rem;\n}\n\nh5 {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin-bottom: 5px; /* Adds a little space between the h5 and the info-div */\n  margin-left: 10px;\n}\n\n.info-div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-left: 30px; /* Indentation to the right */\n}\n\np {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-secondary);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dataManager.js":
/*!****************************!*\
  !*** ./src/dataManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   processCurrentData: () => (/* binding */ processCurrentData),\n/* harmony export */   processForecastData: () => (/* binding */ processForecastData)\n/* harmony export */ });\n// Process the data returned from the API request for forecast data\nfunction processForecastData(data) {\n  // Destructure the data object to extract only key properties\n  const { name: location } = data.city;\n  const { list: rawArray } = data;\n  // For each element in the raw array extract the key data and repackage\n  const forecastArray = rawArray.map((obj) => {\n    // Destructure the object for the 3 hour forecast to extract the key properties\n    const {\n      dt: date,\n      dt_txt: dateText,\n      main: tempInfo,\n      rain,\n      weather: weatherArray,\n    } = obj;\n    // Get the \"main\" and \"description\" properties from the weather array\n    const { main: overview, description } = weatherArray[0];\n    // Assign the properties to a new object\n    const newObj = { date, dateText, overview, description, tempInfo, rain };\n    // Return the new object as past of the new array\n    return newObj;\n  });\n  // Assign the extracted and processed data to a new forecast object\n  const forecastData = { location, forecastArray };\n  // Return the object\n  return forecastData;\n}\n\n// Process the data returned from the API request for current data\nfunction processCurrentData(data) {\n  // Destructure the data object to extract only key properties\n  const { main: tempInfo, name: location, weather: weatherArray } = data;\n  // Assign the extracted properties to new object\n  const currentData = { tempInfo, location, weatherArray };\n  // Return the object\n  return currentData;\n}\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/dataManager.js?");

/***/ }),

/***/ "./src/displayManager.js":
/*!*******************************!*\
  !*** ./src/displayManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Function for getting the day name from a string\nfunction getDayName(dateString) {\n  const date = new Date(dateString);\n  return date.toLocaleDateString(\"en-US\", { weekday: \"long\" }); // e.g., \"Monday\"\n}\n\n// Function for displaying weather data\nfunction displayData(weatherData) {\n  // Get the content div\n  const weatherContent = document.querySelector(\".weather-content\");\n  // Get the checkbox status\n  const toggleStatus = document.querySelector(\".checkbox\").checked;\n\n  // Empty weather content div\n  while (weatherContent.firstChild) {\n    weatherContent.removeChild(weatherContent.firstChild);\n  }\n\n  // Get the forecast array from the weather data\n  const { forecastArray } = weatherData;\n\n  // Get today's date\n  const today = new Date();\n  // Convert date to YYY-MM-DD format\n  const todayStr = today.toISOString().slice(8, 10);\n\n  const addedDates = new Set();\n\n  forecastArray.forEach((forecast) => {\n    // Destructure the object for obtain the properties\n    const { date, dateText, description, overview, tempInfo } = forecast;\n    // Extract YYYY-MM-DD from dateText\n    const forecastDateStr = dateText.slice(0, 10);\n    // Get the day name\n    const dayName = getDayName(forecastDateStr); // Get the day name\n    // Destructure the tempInfo object\n    const { temp } = tempInfo;\n    // Convert the temperature to celsius\n    const tempC = Math.round(1 * temp - 273.15);\n    // Convert the temperature to fahrenheit\n    const tempF = Math.round((tempC * 9) / 5 + 32);\n\n    const tempDisplay = toggleStatus ? `${tempF} \\u2109` : `${tempC} \\u2103`;\n\n    let dayDiv;\n\n    if (!addedDates.has(forecastDateStr)) {\n      addedDates.add(forecastDateStr);\n\n      // Add div to the DOM\n      dayDiv = document.createElement(\"div\");\n      dayDiv.classList.add(\"day-div\");\n      dayDiv.setAttribute(\"data-date\", forecastDateStr); // Set a data attribute\n      // Add day title\n      const dayTitle = document.createElement(\"h4\");\n      dayTitle.classList.add(\"day-title\");\n      dayTitle.textContent = `${dayName}, ${forecastDateStr}`;\n      dayDiv.appendChild(dayTitle);\n      weatherContent.appendChild(dayDiv);\n    } else {\n      dayDiv = document.querySelector(`div[data-date='${forecastDateStr}']`);\n    }\n\n    // Add 3-hour forecast div to the respective day div\n    const threeHourDiv = document.createElement(\"div\");\n    threeHourDiv.classList.add(\"time-div\");\n    // Hourly display title\n    const hour = document.createElement(\"h5\");\n    hour.textContent = forecast.dateText.slice(11, 16);\n    threeHourDiv.appendChild(hour);\n    // Weather details\n    const infoDiv = document.createElement(\"div\");\n    infoDiv.classList.add(\"info-div\");\n    const overviewText = document.createElement(\"p\");\n    overviewText.textContent = `Overview: ${overview}`;\n    const tempText = document.createElement(\"p\");\n    tempText.textContent = `Temperature: ${tempDisplay}`;\n    infoDiv.appendChild(overviewText);\n    infoDiv.appendChild(tempText);\n    threeHourDiv.appendChild(infoDiv);\n    dayDiv.appendChild(threeHourDiv);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);\n\n\n//# sourceURL=webpack://odin-weather/./src/displayManager.js?");

/***/ }),

/***/ "./src/formManager.js":
/*!****************************!*\
  !*** ./src/formManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dataManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataManager */ \"./src/dataManager.js\");\n/* harmony import */ var _displayManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayManager */ \"./src/displayManager.js\");\n\n\n\n// function for getting the weather data\nasync function getWeatherData(location = \"london\") {\n  try {\n    // Get the weather data from API request using the location input\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/forecast?q=${location.toLowerCase()}&appid=37b1a357549e4bdfda789736f18214b3`,\n      { mode: \"cors\" },\n    );\n    // Extract the data from the API response\n    const weatherData = await response.json();\n\n    // console.log(\"raw data\", weatherData);\n\n    // Assign processed data to object\n    const dataObj = (0,_dataManager__WEBPACK_IMPORTED_MODULE_0__.processForecastData)(weatherData);\n\n    // Return the data object\n    return dataObj;\n  } catch (error) {\n    console.log(error);\n    throw error;\n  }\n}\n\n// Function for generating toggle slider\nfunction createToggle() {\n  // Create container for switch\n  const tempContainer = document.createElement(\"div\");\n  tempContainer.classList.add(\"temp-container\");\n\n  // Create switch\n  const label = document.createElement(\"label\");\n  label.classList.add(\"switch\");\n\n  const checkbox = document.createElement(\"input\");\n  checkbox.setAttribute(\"type\", \"checkbox\"); // Ensure the type is set to checkbox\n  checkbox.classList.add(\"checkbox\");\n  label.appendChild(checkbox);\n\n  const slider = document.createElement(\"span\");\n  slider.classList.add(\"slider\");\n  label.appendChild(slider);\n\n  // Add an event listener to the label\n  label.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n\n    checkbox.checked = !checkbox.checked;\n\n    // Get the location input\n    const locationInput = document.querySelector(\"#location-input\");\n\n    // Check if the input is empty\n    if (locationInput.value.trim() === \"\") {\n      alert(\"Please enter a location.\"); // Optional: Alert the user\n      return; // Exit the function\n    }\n\n    (async () => {\n      // Get the weather data\n      const weatherData = await getWeatherData(\n        locationInput.value.toLowerCase(),\n      );\n\n      // Display the weather data\n      (0,_displayManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData);\n\n      // console.log(locationInput.value);\n    })();\n  });\n\n  // Create text for temp units\n  const cels = document.createElement(\"p\");\n  cels.textContent = \"Celsius\";\n  const fahr = document.createElement(\"p\");\n  fahr.textContent = \"Fahrenheit\";\n\n  // Add elements in order to temp container\n  tempContainer.appendChild(cels);\n  tempContainer.appendChild(label);\n  tempContainer.appendChild(fahr);\n\n  return tempContainer;\n}\n\n// Function for initialising form\nfunction initForm() {\n  // Create form container\n  const formContainer = document.createElement(\"form\");\n  formContainer.classList.add(\"form-container\");\n\n  // Add form container to document\n  const topContent = document.querySelector(\".top-content\");\n  topContent.appendChild(formContainer);\n\n  // Create toggle and add to document\n  topContent.appendChild(createToggle());\n}\n\n// Add inputs for form\nfunction addInputs() {\n  // Get the form container\n  const formContainer = document.querySelector(\".form-container\");\n\n  // Add container for location input\n  const locationDiv = document.createElement(\"div\");\n  locationDiv.classList.add(\"location-div\");\n  // Add label for location\n  const locationLabel = document.createElement(\"label\");\n  locationLabel.setAttribute(\"for\", \"location-input\");\n  locationLabel.textContent = \"Location:\";\n  // Add input for location\n  const locationInput = document.createElement(\"input\");\n  locationInput.setAttribute(\"type\", \"text\");\n  locationInput.setAttribute(\"id\", \"location-input\");\n  locationInput.setAttribute(\"name\", \"location-input\");\n  // Set input as required\n  locationInput.required = true;\n\n  // Append both label and input for location to container\n  locationDiv.appendChild(locationLabel);\n  locationDiv.appendChild(locationInput);\n  // Append container to form container\n  formContainer.appendChild(locationDiv);\n}\n\n// Add submit button\nfunction addButton() {\n  // Get the form container\n  const formContainer = document.querySelector(\".form-container\");\n\n  // Add input element of type submit\n  const submitBtn = document.createElement(\"input\");\n  submitBtn.setAttribute(\"type\", \"submit\");\n  submitBtn.classList.add(\"edit-form-btn\");\n\n  // Add event listener to submit button\n  submitBtn.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n\n    // Get the location input\n    const locationInput = document.querySelector(\"#location-input\");\n\n    // Check if the input is empty\n    if (locationInput.value.trim() === \"\") {\n      alert(\"Please enter a location.\"); // Optional: Alert the user\n      return; // Exit the function\n    }\n\n    (async () => {\n      // Get the weather data\n      const weatherData = await getWeatherData(\n        locationInput.value.toLowerCase(),\n      );\n\n      // Display the weather data\n      (0,_displayManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData);\n    })();\n  });\n\n  // Add submit button to the form container div\n  formContainer.appendChild(submitBtn);\n}\n\n// Function for generating the location form\nfunction generateForm() {\n  // Initiliase form\n  initForm();\n\n  // Add inputs\n  addInputs();\n\n  // Add button\n  addButton();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateForm);\n\n\n//# sourceURL=webpack://odin-weather/./src/formManager.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _formManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formManager */ \"./src/formManager.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_formManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://odin-weather/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
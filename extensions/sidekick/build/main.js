/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./extensions/sidekick/index.js":
/*!**************************************!*\
  !*** ./extensions/sidekick/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {api, type, Extension} = __webpack_require__(/*! scratch-extension */ \"scratch-extension\");\nclass ExtensionSidekick extends Extension {\n    onInit() {\n\n        api.addCategory({\n            categoryId: 'sidekick.category',\n            messageId: 'sidekick.category',\n            color: '#b6d597'\n        });\n\n        api.addBlock({\n            opcode: 'sidekick.returnvalue',\n            type: type.BlockType.REPORTER,\n            messageId: 'sidekick.returnvalue',\n            categoryId: 'sidekick.category',\n            param: {\n                VALUE: {\n                    type: type.ParameterType.STRING,\n                    default: 'MOIN!'\n                }\n            },\n            function: args => this.ReturnValue(args.VALUE)\n        });\n\n        api.addBlock({\n            opcode: 'sidekick.helloworld',\n            type: type.BlockType.COMMAND,\n            messageId: 'sidekick.helloworld',\n            categoryId: 'sidekick.category',\n            function: args => this.HelloWorld()\n        });\n    }\n    onUninit() {\n        api.removeCategory('sidekick.category');\n        // api.removeInstance('sidekick');\n        \n    }\n    ReturnValue(VALUE) {\n        return VALUE;\n    }\n    HelloWorld() {\n        console.log(\"MOIN!\");\n        alert(\"MOIN!\");\n    }\n}\nmodule.exports = ExtensionSidekick;\n\n//# sourceURL=webpack://scratch-extension-tool/./extensions/sidekick/index.js?");

/***/ }),

/***/ "scratch-extension":
/*!***********************************!*\
  !*** external "ScratchExtension" ***!
  \***********************************/
/***/ ((module) => {

module.exports = self["ScratchExtension"];

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./extensions/sidekick/index.js");
/******/ module.exports = __webpack_exports__;
/******/ 

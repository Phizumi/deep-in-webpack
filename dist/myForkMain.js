(function () {
  var __webpack_modules__ = {
    "./src/a.js":
      (module, exports, __webpack_require__) => {
        // __webpack_require__.r(__webpack_exports__);
        const webpack_default = () => {
          console.log('hello a')
        }

        const secParam = {
          default: () => webpack_default
        }

        __webpack_require__.d(exports, secParam);
      }
  };

  function __webpack_require__(moduleId) {
    var module = {
      exports: {}
    };

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  (() => {
    // __webpack_require__.r(__webpack_exports__);

    // result === module.exports
    // result["default"] === executor
    var result = __webpack_require__("./src/a.js");
    result["default"]()
  })();
})();
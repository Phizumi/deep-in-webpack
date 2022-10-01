(function () {
  var __webpack_modules__ = {
    "./src/a.js":
      (module, exports, __webpack_require__) => {
        // __webpack_require__.r(__webpack_exports__);
        exports.default = () => {
          console.log('hello a')
        }
        // const webpack_default = () => {
        //   console.log('hello a')
        // }

        // const secParam = {
        //   default: () => webpack_default
        // }

        // __webpack_require__.d(exports, secParam);
      }
  };

  // (() => {
  //   // define getter functions for harmony exports
  //   __webpack_require__.d = (exports, definition) => {
  //     exports.default = definition['default']
  //     // for (var key in definition) {
  //     //   Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
  //     // }
  //   };
  // })();

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

    // import executor from './a'
    // result === module.exports
    // result["default"] === executor
    var result = __webpack_require__("./src/a.js");
    result["default"]()
  })();
})();
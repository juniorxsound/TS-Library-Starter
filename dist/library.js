(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Library = {}));
}(this, function (exports) { 'use strict';

  /** A small multiply utility to test our library 🏋🏾‍♀️ */
  function multiply(a, b) {
    return a * b;
  }

  exports.multiply = multiply;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library.js.map

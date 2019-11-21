older code:
```js
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
  'use strict';
  /* unused harmony export square */
  /* harmony export (immutable) */ __webpack_exports__['a'] = cube;
  function square(x) {
    return x * x;
  }

  function cube(x) {
    return x * x * x;
  }
});
```

newer code: webpack version 4.41.2 (npm info webpack)
```js
/***/ "./src/math.js":
  /*!*********************!*\
!*** ./src/math.js ***!
\*********************/
  /*! exports provided: square, cube */
  /*! exports used: cube */
  /***/ function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  eval(
    '/* unused harmony export square */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cube; });\nfunction square(x) {\n  return x * x;\n}\n\nfunction cube(x) {\n  return x * x * x;\n}\n\n\n//# sourceURL=webpack:///./src/math.js?'
  );
/******/
```
展开
```js
/* unused harmony export square */
  /* harmony export (binding) */
  __webpack_require__.d(__webpack_exports__, "a", function() {
    return cube;
  });
  function square(x) {
    return x * x;
  }
  function cube(x) {
    return x * x * x;
  }//# sourceURL=webpack:///./src/math.js?
}
```

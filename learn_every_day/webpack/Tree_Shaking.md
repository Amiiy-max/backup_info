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

## [Mark the file as side-effect-free](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free)
> A "side effect" is defined as code that performs a special behavior when imported, other than exposing one or more exports. An example of this are polyfills, which affect the global scope and usually do not provide an export.

> Note that any imported file is subject to tree shaking. This means if you use something like css-loader in your project and import a CSS file, it needs to be added to the side effect list so it will not be unintentionally dropped in production mode:

The array accepts relative, absolute, and glob patterns to the relevant files. It uses [micromatch](https://github.com/micromatch/micromatch#matching-features) under the hood.

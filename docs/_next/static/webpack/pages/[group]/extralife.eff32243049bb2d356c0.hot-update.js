webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkIfEventIsLive; });
function checkIfEventIsLive(start, end) {
  var now = new Date();
  console.log(start, end, now, start < now, now < end);
  return start < now && now < end;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNoZWNrSWZFdmVudElzTGl2ZSIsInN0YXJ0IiwiZW5kIiwibm93IiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWUsU0FBU0Esa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DQyxHQUFuQyxFQUF3QztBQUNyRCxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaLEVBQW1CQyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkJGLEtBQUssR0FBR0UsR0FBckMsRUFBMENBLEdBQUcsR0FBR0QsR0FBaEQ7QUFDQSxTQUFPRCxLQUFLLEdBQUdFLEdBQVIsSUFBZUEsR0FBRyxHQUFHRCxHQUE1QjtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLmVmZjMyMjQzMDQ5YmIyZDM1NmMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0lmRXZlbnRJc0xpdmUoc3RhcnQsIGVuZCkge1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc29sZS5sb2coc3RhcnQsIGVuZCwgbm93LCBzdGFydCA8IG5vdywgbm93IDwgZW5kKTtcclxuICByZXR1cm4gc3RhcnQgPCBub3cgJiYgbm93IDwgZW5kO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
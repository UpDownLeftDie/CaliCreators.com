webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/atoms/progress-bar.jsx":
/*!*******************************************!*\
  !*** ./components/atoms/progress-bar.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\progress-bar.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      goal = _ref.goal,
      height = _ref.height,
      progressText = _ref.progressText,
      goalText = _ref.goalText,
      isMoney = _ref.isMoney,
      width = _ref.width;
  var percent = (progress / goal * 100).toFixed(1);
  var progressTextCombined = null;
  var goalTextCombined = null;

  if (progressText) {
    progressTextCombined = "".concat(progressText, " ").concat(isMoney ? '$' : null).concat(progress);
  }

  if (goalText) {
    goalTextCombined = "".concat(goalText, " ").concat(isMoney ? '$' : null).concat(goal);
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2638612448", [width, height, percent, height / 2, height / 2, height]]]) + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2638612448", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, progressTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2638612448", [width, height, percent, height / 2, height / 2, height]]]) + " " + "goalText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, goalTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2638612448", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2638612448", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2638612448",
    dynamic: [width, height, percent, height / 2, height / 2, height],
    __self: _this
  }, ".wrapper.__jsx-style-dynamic-selector{width:".concat(width, "%;max-width:800px;margin:0 auto;}.progressText.__jsx-style-dynamic-selector{float:left;font-size:1rem;margin-left:10px;}.goalText.__jsx-style-dynamic-selector{float:right;font-size:1rem;margin-right:10px;}.progressBar.__jsx-style-dynamic-selector{position:relative;background:#1a4c6d;overflow:hidden;height:").concat(height, "px;border-radius:300px;width:100%;}.progress.__jsx-style-dynamic-selector{width:").concat(percent, "%;background:#26c2eb;height:100%;text-align:right;background-image:linear-gradient( -45deg, rgba(255,255,255,0.17) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.17) 50%, rgba(255,255,255,0.17) 75%, transparent 75% );background-size:").concat(height / 2, "px ").concat(height / 2, "px;overflow:hidden;-webkit-animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;}@-webkit-keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}@keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJTLEFBR2lELEFBS3pCLEFBS0MsQUFLTSxBQVFrQixBQW9CbUIsV0FyQ3hDLENBS0EsTUFLSSxRQVRGLENBS0MsU0FYRixBQXVCRyxDQVBILE1BVGxCLEVBS0EsT0FYZ0IsQ0FnQndCLEFBMEJ0QyxFQW5CWSxXQXRCZCxDQXVCbUIsaUJBU2hCLE9BaEJtQixvQkFDVCxXQUNiLDRJQWVnRiw4RUFDOUQsZ0JBQ3dCLGtKQUMxQyIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFxwcm9ncmVzcy1iYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbnVtYmVyLCBzdHJpbmcsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFByb2dyZXNzQmFyID0gKHtcclxuICBwcm9ncmVzcyxcclxuICBnb2FsLFxyXG4gIGhlaWdodCxcclxuICBwcm9ncmVzc1RleHQsXHJcbiAgZ29hbFRleHQsXHJcbiAgaXNNb25leSxcclxuICB3aWR0aCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHBlcmNlbnQgPSAoKHByb2dyZXNzIC8gZ29hbCkgKiAxMDApLnRvRml4ZWQoMSk7XHJcbiAgbGV0IHByb2dyZXNzVGV4dENvbWJpbmVkID0gbnVsbDtcclxuICBsZXQgZ29hbFRleHRDb21iaW5lZCA9IG51bGw7XHJcblxyXG4gIGlmIChwcm9ncmVzc1RleHQpIHtcclxuICAgIHByb2dyZXNzVGV4dENvbWJpbmVkID0gYCR7cHJvZ3Jlc3NUZXh0fSAke2lzTW9uZXkgPyAnJCcgOiBudWxsfSR7cHJvZ3Jlc3N9YDtcclxuICB9XHJcbiAgaWYgKGdvYWxUZXh0KSB7XHJcbiAgICBnb2FsVGV4dENvbWJpbmVkID0gYCR7Z29hbFRleHR9ICR7aXNNb25leSA/ICckJyA6IG51bGx9JHtnb2FsfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NUZXh0XCI+e3Byb2dyZXNzVGV4dENvbWJpbmVkfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvYWxUZXh0XCI+e2dvYWxUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9JTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29hbFRleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzQmFyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0YzZkO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xyXG4gIHByb2dyZXNzOiBudW1iZXIsXHJcbiAgZ29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBzdHJpbmcsXHJcbiAgZ29hbFRleHQ6IHN0cmluZyxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */")));
};

_c = ProgressBar;
ProgressBar.defaultProps = {
  progress: 0,
  height: 40,
  progressText: null,
  goalText: null,
  isMoney: false,
  width: 100
};
ProgressBar.propTypes = {
  progress: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  goal: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  progressText: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  goalText: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isMoney: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"]
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

var _c;

$RefreshReg$(_c, "ProgressBar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXIuanN4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJnb2FsIiwiaGVpZ2h0IiwicHJvZ3Jlc3NUZXh0IiwiZ29hbFRleHQiLCJpc01vbmV5Iiwid2lkdGgiLCJwZXJjZW50IiwidG9GaXhlZCIsInByb2dyZXNzVGV4dENvbWJpbmVkIiwiZ29hbFRleHRDb21iaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BUWQ7QUFBQSxNQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxNQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxNQUxKQyxNQUtJLFFBTEpBLE1BS0k7QUFBQSxNQUpKQyxZQUlJLFFBSkpBLFlBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxPQUVJLFFBRkpBLE9BRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUcsQ0FBRVAsUUFBUSxHQUFHQyxJQUFaLEdBQW9CLEdBQXJCLEVBQTBCTyxPQUExQixDQUFrQyxDQUFsQyxDQUFoQjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7O0FBRUEsTUFBSVAsWUFBSixFQUFrQjtBQUNoQk0sd0JBQW9CLGFBQU1OLFlBQU4sY0FBc0JFLE9BQU8sR0FBRyxHQUFILEdBQVMsSUFBdEMsU0FBNkNMLFFBQTdDLENBQXBCO0FBQ0Q7O0FBQ0QsTUFBSUksUUFBSixFQUFjO0FBQ1pNLG9CQUFnQixhQUFNTixRQUFOLGNBQWtCQyxPQUFPLEdBQUcsR0FBSCxHQUFTLElBQWxDLFNBQXlDSixJQUF6QyxDQUFoQjtBQUNEOztBQUVELFNBQ0U7QUFBQSxnR0FTaUJLLEtBVGpCLEVBMkJrQkosTUEzQmxCLEVBZ0NpQkssT0FoQ2pCLEVBNkMyQkwsTUFBTSxHQUFHLENBN0NwQyxFQTZDMkNBLE1BQU0sR0FBRyxDQTdDcEQsRUFvRGlDQSxNQXBEakMsYUFBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLGdHQVFlSSxLQVJmLEVBMEJnQkosTUExQmhCLEVBK0JlSyxPQS9CZixFQTRDeUJMLE1BQU0sR0FBRyxDQTVDbEMsRUE0Q3lDQSxNQUFNLEdBQUcsQ0E1Q2xELEVBbUQrQkEsTUFuRC9CLGFBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCTyxvQkFBL0IsQ0FERixFQUVFO0FBQUEsZ0dBT2VILEtBUGYsRUF5QmdCSixNQXpCaEIsRUE4QmVLLE9BOUJmLEVBMkN5QkwsTUFBTSxHQUFHLENBM0NsQyxFQTJDeUNBLE1BQU0sR0FBRyxDQTNDbEQsRUFrRCtCQSxNQWxEL0IsYUFBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJRLGdCQUEzQixDQUZGLEVBR0U7QUFBQSxnR0FNZUosS0FOZixFQXdCZ0JKLE1BeEJoQixFQTZCZUssT0E3QmYsRUEwQ3lCTCxNQUFNLEdBQUcsQ0ExQ2xDLEVBMEN5Q0EsTUFBTSxHQUFHLENBMUNsRCxFQWlEK0JBLE1BakQvQixhQUFlLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsZ0dBS2FJLEtBTGIsRUF1QmNKLE1BdkJkLEVBNEJhSyxPQTVCYixFQXlDdUJMLE1BQU0sR0FBRyxDQXpDaEMsRUF5Q3VDQSxNQUFNLEdBQUcsQ0F6Q2hELEVBZ0Q2QkEsTUFoRDdCLGFBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRjtBQUFBO0FBQUEsY0FTaUJJLEtBVGpCLEVBMkJrQkosTUEzQmxCLEVBZ0NpQkssT0FoQ2pCLEVBNkMyQkwsTUFBTSxHQUFHLENBN0NwQyxFQTZDMkNBLE1BQU0sR0FBRyxDQTdDcEQsRUFvRGlDQSxNQXBEakM7QUFBQTtBQUFBLDJEQVNpQkksS0FUakIsZ1VBMkJrQkosTUEzQmxCLDZGQWdDaUJLLE9BaENqQixpUUE2QzJCTCxNQUFNLEdBQUcsQ0E3Q3BDLGdCQTZDMkNBLE1BQU0sR0FBRyxDQTdDcEQsdVFBb0RpQ0EsTUFwRGpDLGdHQW9EaUNBLE1BcERqQyxrN0lBREY7QUE0REQsQ0FoRkQ7O0tBQU1ILFc7QUFrRk5BLFdBQVcsQ0FBQ1ksWUFBWixHQUEyQjtBQUN6QlgsVUFBUSxFQUFFLENBRGU7QUFFekJFLFFBQU0sRUFBRSxFQUZpQjtBQUd6QkMsY0FBWSxFQUFFLElBSFc7QUFJekJDLFVBQVEsRUFBRSxJQUplO0FBS3pCQyxTQUFPLEVBQUUsS0FMZ0I7QUFNekJDLE9BQUssRUFBRTtBQU5rQixDQUEzQjtBQVNBUCxXQUFXLENBQUNhLFNBQVosR0FBd0I7QUFDdEJaLFVBQVEsRUFBRWEsaURBRFk7QUFFdEJaLE1BQUksRUFBRVksaURBQU0sQ0FBQ0MsVUFGUztBQUd0QlosUUFBTSxFQUFFVyxpREFIYztBQUl0QlYsY0FBWSxFQUFFWSxpREFKUTtBQUt0QlgsVUFBUSxFQUFFVyxpREFMWTtBQU10QlYsU0FBTyxFQUFFVywrQ0FOYTtBQU90QlYsT0FBSyxFQUFFTyxpREFBTUE7QUFQUyxDQUF4QjtBQVVlZCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS41Zjc4OTJjNTViNmY5ZTVjNDc4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbnVtYmVyLCBzdHJpbmcsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFByb2dyZXNzQmFyID0gKHtcclxuICBwcm9ncmVzcyxcclxuICBnb2FsLFxyXG4gIGhlaWdodCxcclxuICBwcm9ncmVzc1RleHQsXHJcbiAgZ29hbFRleHQsXHJcbiAgaXNNb25leSxcclxuICB3aWR0aCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHBlcmNlbnQgPSAoKHByb2dyZXNzIC8gZ29hbCkgKiAxMDApLnRvRml4ZWQoMSk7XHJcbiAgbGV0IHByb2dyZXNzVGV4dENvbWJpbmVkID0gbnVsbDtcclxuICBsZXQgZ29hbFRleHRDb21iaW5lZCA9IG51bGw7XHJcblxyXG4gIGlmIChwcm9ncmVzc1RleHQpIHtcclxuICAgIHByb2dyZXNzVGV4dENvbWJpbmVkID0gYCR7cHJvZ3Jlc3NUZXh0fSAke2lzTW9uZXkgPyAnJCcgOiBudWxsfSR7cHJvZ3Jlc3N9YDtcclxuICB9XHJcbiAgaWYgKGdvYWxUZXh0KSB7XHJcbiAgICBnb2FsVGV4dENvbWJpbmVkID0gYCR7Z29hbFRleHR9ICR7aXNNb25leSA/ICckJyA6IG51bGx9JHtnb2FsfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NUZXh0XCI+e3Byb2dyZXNzVGV4dENvbWJpbmVkfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvYWxUZXh0XCI+e2dvYWxUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9JTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29hbFRleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzQmFyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0YzZkO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xyXG4gIHByb2dyZXNzOiBudW1iZXIsXHJcbiAgZ29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBzdHJpbmcsXHJcbiAgZ29hbFRleHQ6IHN0cmluZyxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
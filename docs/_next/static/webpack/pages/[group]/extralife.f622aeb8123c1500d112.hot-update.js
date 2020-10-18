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
    progressTextCombined = "".concat(progressText, " ").concat(isMoney ? '$' : '').concat(progress);
  }

  if (goalText) {
    goalTextCombined = "".concat(goalText, " ").concat(isMoney ? '$' : '').concat(goal);
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["328299784", [width, height, percent, height / 2, height / 2, height]]]) + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["328299784", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, progressTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["328299784", [width, height, percent, height / 2, height / 2, height]]]) + " " + "goalText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, goalTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["328299784", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["328299784", [width, height, percent, height / 2, height / 2, height]]]) + " " + "middleText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "".concat(isMoney ? '$' : '').concat(progress)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["328299784", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "328299784",
    dynamic: [width, height, percent, height / 2, height / 2, height],
    __self: _this
  }, ".wrapper.__jsx-style-dynamic-selector{width:".concat(width, "%;max-width:800px;}.progressText.__jsx-style-dynamic-selector{float:left;font-size:1rem;margin-left:10px;}.goalText.__jsx-style-dynamic-selector{float:right;font-size:1rem;margin-right:10px;}.progressBar.__jsx-style-dynamic-selector{position:relative;background:#1a4c6d;overflow:hidden;height:").concat(height, "px;border-radius:300px;width:100%;}.middleText.__jsx-style-dynamic-selector{position:absolute;font-size:0.8rem;color:#eee;}.progress.__jsx-style-dynamic-selector{width:").concat(percent, "%;background:#26c2eb;height:100%;text-align:right;background-image:linear-gradient( -45deg, rgba(255,255,255,0.17) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.17) 50%, rgba(255,255,255,0.17) 75%, transparent 75% );background-size:").concat(height / 2, "px ").concat(height / 2, "px;overflow:hidden;-webkit-animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;}@-webkit-keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}@keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JTLEFBR2lELEFBSXpCLEFBS0MsQUFLTSxBQVFBLEFBS2tCLEFBb0JtQixXQTFDeEMsQ0FLQSxNQUtJLEFBUUYsUUFqQkEsQ0FLQyxRQWFQLENBdkJLLEFBMkJHLENBWkgsTUFUbEIsRUFLQSxDQWFBLE1BdkJBLENBZXdDLEFBK0J0QyxFQW5CWSxZQUNLLGlCQVNoQixPQXJCbUIsb0JBQ1QsV0FDYiw0SUFvQmdGLDhFQUM5RCxnQkFDd0Isa0pBQzFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBudW1iZXIsIHN0cmluZywgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAoe1xyXG4gIHByb2dyZXNzLFxyXG4gIGdvYWwsXHJcbiAgaGVpZ2h0LFxyXG4gIHByb2dyZXNzVGV4dCxcclxuICBnb2FsVGV4dCxcclxuICBpc01vbmV5LFxyXG4gIHdpZHRoLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgcGVyY2VudCA9ICgocHJvZ3Jlc3MgLyBnb2FsKSAqIDEwMCkudG9GaXhlZCgxKTtcclxuICBsZXQgcHJvZ3Jlc3NUZXh0Q29tYmluZWQgPSBudWxsO1xyXG4gIGxldCBnb2FsVGV4dENvbWJpbmVkID0gbnVsbDtcclxuXHJcbiAgaWYgKHByb2dyZXNzVGV4dCkge1xyXG4gICAgcHJvZ3Jlc3NUZXh0Q29tYmluZWQgPSBgJHtwcm9ncmVzc1RleHR9ICR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICB9XHJcbiAgaWYgKGdvYWxUZXh0KSB7XHJcbiAgICBnb2FsVGV4dENvbWJpbmVkID0gYCR7Z29hbFRleHR9ICR7aXNNb25leSA/ICckJyA6ICcnfSR7Z29hbH1gO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzVGV4dFwiPntwcm9ncmVzc1RleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb2FsVGV4dFwiPntnb2FsVGV4dENvbWJpbmVkfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzQmFyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWlkZGxlVGV4dFwiPntgJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gfTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9JTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc1RleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb2FsVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NCYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTRjNmQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5taWRkbGVUZXh0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xyXG4gIHByb2dyZXNzOiBudW1iZXIsXHJcbiAgZ29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBzdHJpbmcsXHJcbiAgZ29hbFRleHQ6IHN0cmluZyxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXIuanN4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJnb2FsIiwiaGVpZ2h0IiwicHJvZ3Jlc3NUZXh0IiwiZ29hbFRleHQiLCJpc01vbmV5Iiwid2lkdGgiLCJwZXJjZW50IiwidG9GaXhlZCIsInByb2dyZXNzVGV4dENvbWJpbmVkIiwiZ29hbFRleHRDb21iaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BUWQ7QUFBQSxNQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxNQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxNQUxKQyxNQUtJLFFBTEpBLE1BS0k7QUFBQSxNQUpKQyxZQUlJLFFBSkpBLFlBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxPQUVJLFFBRkpBLE9BRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUcsQ0FBRVAsUUFBUSxHQUFHQyxJQUFaLEdBQW9CLEdBQXJCLEVBQTBCTyxPQUExQixDQUFrQyxDQUFsQyxDQUFoQjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7O0FBRUEsTUFBSVAsWUFBSixFQUFrQjtBQUNoQk0sd0JBQW9CLGFBQU1OLFlBQU4sY0FBc0JFLE9BQU8sR0FBRyxHQUFILEdBQVMsRUFBdEMsU0FBMkNMLFFBQTNDLENBQXBCO0FBQ0Q7O0FBQ0QsTUFBSUksUUFBSixFQUFjO0FBQ1pNLG9CQUFnQixhQUFNTixRQUFOLGNBQWtCQyxPQUFPLEdBQUcsR0FBSCxHQUFTLEVBQWxDLFNBQXVD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ZXMvW2dyb3VwXS9leHRyYWxpZmUuZjYyMmFlYjgxMjNjMTUwMGQxMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlzTW9uZXksXHJcbiAgd2lkdGgsXHJcbn0pID0+IHtcclxuICBjb25zdCBwZXJjZW50ID0gKChwcm9ncmVzcyAvIGdvYWwpICogMTAwKS50b0ZpeGVkKDEpO1xyXG4gIGxldCBwcm9ncmVzc1RleHRDb21iaW5lZCA9IG51bGw7XHJcbiAgbGV0IGdvYWxUZXh0Q29tYmluZWQgPSBudWxsO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NUZXh0KSB7XHJcbiAgICBwcm9ncmVzc1RleHRDb21iaW5lZCA9IGAke3Byb2dyZXNzVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gO1xyXG4gIH1cclxuICBpZiAoZ29hbFRleHQpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NUZXh0XCI+e3Byb2dyZXNzVGV4dENvbWJpbmVkfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvYWxUZXh0XCI+e2dvYWxUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGVUZXh0XCI+e2Ake2lzTW9uZXkgPyAnJCcgOiAnJ30ke3Byb2dyZXNzfWB9PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH0lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvYWxUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc0JhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhNGM2ZDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1pZGRsZVRleHQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3BlcmNlbnR9JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIC00NWRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDI1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNzUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDc1JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7aGVpZ2h0IC8gMn1weCAke2hlaWdodCAvIDJ9cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYmFyYmVycG9sZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBiYXJiZXJwb2xlIHtcclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtoZWlnaHR9cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2dyZXNzOiAwLFxyXG4gIGhlaWdodDogNDAsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBudWxsLFxyXG4gIGdvYWxUZXh0OiBudWxsLFxyXG4gIGlzTW9uZXk6IGZhbHNlLFxyXG4gIHdpZHRoOiAxMDAsXHJcbn07XHJcblxyXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZ3Jlc3M6IG51bWJlcixcclxuICBnb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICBwcm9ncmVzc1RleHQ6IHN0cmluZyxcclxuICBnb2FsVGV4dDogc3RyaW5nLFxyXG4gIGlzTW9uZXk6IGJvb2wsXHJcbiAgd2lkdGg6IG51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
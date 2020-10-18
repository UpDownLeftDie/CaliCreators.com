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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["778561543", [width, height, percent, height / 2, height / 2, height]]]) + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["778561543", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, progressTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["778561543", [width, height, percent, height / 2, height / 2, height]]]) + " " + "goalText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, goalTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["778561543", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["778561543", [width, height, percent, height / 2, height / 2, height]]]) + " " + "middleText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "".concat(isMoney ? '$' : '').concat(progress)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["778561543", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "778561543",
    dynamic: [width, height, percent, height / 2, height / 2, height],
    __self: _this
  }, ".wrapper.__jsx-style-dynamic-selector{width:".concat(width, "%;max-width:800px;}.progressText.__jsx-style-dynamic-selector{float:left;font-size:1rem;margin-left:10px;}.goalText.__jsx-style-dynamic-selector{float:right;font-size:1rem;margin-right:10px;}.progressBar.__jsx-style-dynamic-selector{position:relative;background:#1a4c6d;overflow:hidden;height:").concat(height, "px;border-radius:300px;width:100%;}.middleText.__jsx-style-dynamic-selector{position:absolute;}.progress.__jsx-style-dynamic-selector{width:").concat(percent, "%;background:#26c2eb;height:100%;text-align:right;background-image:linear-gradient( -45deg, rgba(255,255,255,0.17) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.17) 50%, rgba(255,255,255,0.17) 75%, transparent 75% );background-size:").concat(height / 2, "px ").concat(height / 2, "px;overflow:hidden;-webkit-animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;}@-webkit-keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}@keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JTLEFBR2lELEFBSXpCLEFBS0MsQUFLTSxBQVFBLEFBR2tCLEFBb0JtQixXQXhDeEMsQ0FLQSxNQUtJLEFBUXJCLFFBakJtQixDQUtDLFNBVkYsQUF5QkcsQ0FWSCxNQVRsQixFQUtBLE9BVkEsQ0Fld0MsQUE2QnRDLEVBbkJZLFlBQ0ssaUJBU2hCLE9BbkJtQixvQkFDVCxXQUNiLDRJQWtCZ0YsOEVBQzlELGdCQUN3QixrSkFDMUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xccHJvZ3Jlc3MtYmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlzTW9uZXksXHJcbiAgd2lkdGgsXHJcbn0pID0+IHtcclxuICBjb25zdCBwZXJjZW50ID0gKChwcm9ncmVzcyAvIGdvYWwpICogMTAwKS50b0ZpeGVkKDEpO1xyXG4gIGxldCBwcm9ncmVzc1RleHRDb21iaW5lZCA9IG51bGw7XHJcbiAgbGV0IGdvYWxUZXh0Q29tYmluZWQgPSBudWxsO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NUZXh0KSB7XHJcbiAgICBwcm9ncmVzc1RleHRDb21iaW5lZCA9IGAke3Byb2dyZXNzVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gO1xyXG4gIH1cclxuICBpZiAoZ29hbFRleHQpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NUZXh0XCI+e3Byb2dyZXNzVGV4dENvbWJpbmVkfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvYWxUZXh0XCI+e2dvYWxUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGVUZXh0XCI+e2Ake2lzTW9uZXkgPyAnJCcgOiAnJ30ke3Byb2dyZXNzfWB9PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH0lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvYWxUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc0JhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhNGM2ZDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1pZGRsZVRleHQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xyXG4gIHByb2dyZXNzOiBudW1iZXIsXHJcbiAgZ29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBzdHJpbmcsXHJcbiAgZ29hbFRleHQ6IHN0cmluZyxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXIuanN4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJnb2FsIiwiaGVpZ2h0IiwicHJvZ3Jlc3NUZXh0IiwiZ29hbFRleHQiLCJpc01vbmV5Iiwid2lkdGgiLCJwZXJjZW50IiwidG9GaXhlZCIsInByb2dyZXNzVGV4dENvbWJpbmVkIiwiZ29hbFRleHRDb21iaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BUWQ7QUFBQSxNQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxNQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxNQUxKQyxNQUtJLFFBTEpBLE1BS0k7QUFBQSxNQUpKQyxZQUlJLFFBSkpBLFlBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxPQUVJLFFBRkpBLE9BRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUcsQ0FBRVAsUUFBUSxHQUFHQyxJQUFaLEdBQW9CLEdBQXJCLEVBQTBCTyxPQUExQixDQUFrQyxDQUFsQyxDQUFoQjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7O0FBRUEsTUFBSVAsWUFBSixFQUFrQjtBQUNoQk0sd0JBQW9CLGFBQU1OLFlBQU4sY0FBc0JFLE9BQU8sR0FBRyxHQUFILEdBQVMsRUFBdEMsU0FBMkNMLFFBQTNDLENBQXBCO0FBQ0Q7O0FBQ0QsTUFBSUksUUFBSixFQUFjO0FBQ1pNLG9CQUFnQixhQUFNTixRQUFOLGNBQWtCQyxPQUFPLEdBQUcsR0FBSCxHQUFTLEVBQWxDLFNBQXVD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ZXMvW2dyb3VwXS9leHRyYWxpZmUuMTgwOTFhYTg0NWQ5NzdlYzk2ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlzTW9uZXksXHJcbiAgd2lkdGgsXHJcbn0pID0+IHtcclxuICBjb25zdCBwZXJjZW50ID0gKChwcm9ncmVzcyAvIGdvYWwpICogMTAwKS50b0ZpeGVkKDEpO1xyXG4gIGxldCBwcm9ncmVzc1RleHRDb21iaW5lZCA9IG51bGw7XHJcbiAgbGV0IGdvYWxUZXh0Q29tYmluZWQgPSBudWxsO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NUZXh0KSB7XHJcbiAgICBwcm9ncmVzc1RleHRDb21iaW5lZCA9IGAke3Byb2dyZXNzVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gO1xyXG4gIH1cclxuICBpZiAoZ29hbFRleHQpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NUZXh0XCI+e3Byb2dyZXNzVGV4dENvbWJpbmVkfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvYWxUZXh0XCI+e2dvYWxUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGVUZXh0XCI+e2Ake2lzTW9uZXkgPyAnJCcgOiAnJ30ke3Byb2dyZXNzfWB9PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH0lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmdvYWxUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc0JhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhNGM2ZDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1pZGRsZVRleHQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xyXG4gIHByb2dyZXNzOiBudW1iZXIsXHJcbiAgZ29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBzdHJpbmcsXHJcbiAgZ29hbFRleHQ6IHN0cmluZyxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
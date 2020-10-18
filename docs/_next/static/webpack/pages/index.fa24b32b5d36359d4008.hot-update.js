webpackHotUpdate_N_E("pages/index",{

/***/ "./components/molecules/charity-banner.jsx":
/*!*************************************************!*\
  !*** ./components/molecules/charity-banner.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\molecules\\charity-banner.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */



var CharityBanner = function CharityBanner(_ref) {
  var charity = _ref.charity;
  var url = charity.url,
      image = charity.image;
  if (!url) return null;
  var isInternalLink = !url.toLowerCase().startsWith('http'); // eslint-disable-next-line react/prop-types

  var WrapperLink = function WrapperLink(_ref2) {
    var children = _ref2.children;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children);
  };

  if (isInternalLink) {
    // eslint-disable-next-line react/prop-types
    WrapperLink = function WrapperLink(_ref3) {
      var children = _ref3.children;
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 14
        }
      }, children);
    };
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(WrapperLink, {
    className: "jsx-1827689548",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: isInternalLink ? null : url,
    target: isInternalLink ? null : '_blank',
    rel: "noreferrer",
    className: "jsx-1827689548",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: image,
    alt: "Extra Life",
    className: "jsx-1827689548",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1827689548",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Extra Life Team"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1827689548",
    __self: _this
  }, "a.jsx-1827689548{width:100%;height:80px;top:-40px;position:absolute;text-align:center;background:#ffffff;color:#1d5b7d;cursor:pointer;border-radius:20px 20px 0 0;-webkit-transition:all 150ms,-webkit-transform 150ms cubic-bezier(0,0,0.2,1);-webkit-transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);-webkit-text-decoration:none;text-decoration:none;}a.jsx-1827689548:hover{top:-60px;}img.jsx-1827689548{position:absolute;width:auto;height:calc(100% - 40px);left:10px;top:10px;}span.jsx-1827689548{font-size:20px;line-height:60px;}@media (max-width:900px){a.jsx-1827689548{top:-60px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcbW9sZWN1bGVzXFxjaGFyaXR5LWJhbm5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NTLEFBR3dCLEFBYUQsQUFHUSxBQU9ILEFBS0gsVUFkZCxBQWVFLENBNUJZLElBdUJLLEdBUE4sS0FmRCxNQWdCZSxHQU8zQixDQXRCb0Isa0JBQ0EsR0FlUixVQUNELEtBZlUsSUFnQnJCLGVBZmdCLGNBQ0MsZUFDYSw0QkFDcUMsK01BQzVDLGtEQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXG1vbGVjdWxlc1xcY2hhcml0eS1iYW5uZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHN0cmluZywgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IENoYXJpdHlCYW5uZXIgPSAoeyBjaGFyaXR5IH0pID0+IHtcclxuICBjb25zdCB7IHVybCwgaW1hZ2UgfSA9IGNoYXJpdHk7XHJcbiAgaWYgKCF1cmwpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGlzSW50ZXJuYWxMaW5rID0gIXVybC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuICBsZXQgV3JhcHBlckxpbmsgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG4gIH07XHJcblxyXG4gIGlmIChpc0ludGVybmFsTGluaykge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuICAgIFdyYXBwZXJMaW5rID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgICByZXR1cm4gPExpbmsgaHJlZj17dXJsfT57Y2hpbGRyZW59PC9MaW5rPjtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFdyYXBwZXJMaW5rPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPXtpc0ludGVybmFsTGluayA/IG51bGwgOiB1cmx9XHJcbiAgICAgICAgICB0YXJnZXQ9e2lzSW50ZXJuYWxMaW5rID8gbnVsbCA6ICdfYmxhbmsnfVxyXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJFeHRyYSBMaWZlXCIgLz5cclxuICAgICAgICAgIDxzcGFuPkV4dHJhIExpZmUgVGVhbTwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvV3JhcHBlckxpbms+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICB0b3A6IC00MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgY29sb3I6ICMxZDViN2Q7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zLCB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICB0b3A6IC02MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdG9wOiAtNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQ2hhcml0eUJhbm5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hhcml0eTogc2hhcGUoe1xyXG4gICAgaW1hZ2U6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdXJsOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcml0eUJhbm5lcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\molecules\\\\charity-banner.jsx */"));
};

_c = CharityBanner;
CharityBanner.propTypes = {
  charity: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    image: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CharityBanner);

var _c;

$RefreshReg$(_c, "CharityBanner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvY2hhcml0eS1iYW5uZXIuanN4Il0sIm5hbWVzIjpbIkNoYXJpdHlCYW5uZXIiLCJjaGFyaXR5IiwidXJsIiwiaW1hZ2UiLCJpc0ludGVybmFsTGluayIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsIldyYXBwZXJMaW5rIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFBQSxNQUM3QkMsR0FENkIsR0FDZEQsT0FEYyxDQUM3QkMsR0FENkI7QUFBQSxNQUN4QkMsS0FEd0IsR0FDZEYsT0FEYyxDQUN4QkUsS0FEd0I7QUFFckMsTUFBSSxDQUFDRCxHQUFMLEVBQVUsT0FBTyxJQUFQO0FBQ1YsTUFBTUUsY0FBYyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csV0FBSixHQUFrQkMsVUFBbEIsQ0FBNkIsTUFBN0IsQ0FBeEIsQ0FIcUMsQ0FLckM7O0FBQ0EsTUFBSUMsV0FBVyxHQUFHLDRCQUFrQjtBQUFBLFFBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNsQyxXQUFPLG1FQUFHQSxRQUFILENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQUlKLGNBQUosRUFBb0I7QUFDbEI7QUFDQUcsZUFBVyxHQUFHLDRCQUFrQjtBQUFBLFVBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUM5QixhQUFPLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUVOLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrQk0sUUFBbEIsQ0FBUDtBQUNELEtBRkQ7QUFHRDs7QUFFRCxTQUNFLG1FQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBRUosY0FBYyxHQUFHLElBQUgsR0FBVUYsR0FEaEM7QUFFRSxVQUFNLEVBQUVFLGNBQWMsR0FBRyxJQUFILEdBQVUsUUFGbEM7QUFHRSxPQUFHLEVBQUMsWUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLE9BQUcsRUFBRUQsS0FBVjtBQUFpQixPQUFHLEVBQUMsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLHF2SUFERjtBQWtERCxDQW5FRDs7S0FBTUgsYTtBQXFFTkEsYUFBYSxDQUFDUyxTQUFkLEdBQTBCO0FBQ3hCUixTQUFPLEVBQUVTLHdEQUFLLENBQUM7QUFDYlAsU0FBSyxFQUFFUSxpREFBTSxDQUFDQyxVQUREO0FBRWJWLE9BQUcsRUFBRVMsaURBQU0sQ0FBQ0M7QUFGQyxHQUFELENBQUwsQ0FHTkE7QUFKcUIsQ0FBMUI7QUFPZVosNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmEyNGIzMmI1ZDM2MzU5ZDQwMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBzdHJpbmcsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBDaGFyaXR5QmFubmVyID0gKHsgY2hhcml0eSB9KSA9PiB7XHJcbiAgY29uc3QgeyB1cmwsIGltYWdlIH0gPSBjaGFyaXR5O1xyXG4gIGlmICghdXJsKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBpc0ludGVybmFsTGluayA9ICF1cmwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdodHRwJyk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbiAgbGV0IFdyYXBwZXJMaW5rID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcclxuICB9O1xyXG5cclxuICBpZiAoaXNJbnRlcm5hbExpbmspIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbiAgICBXcmFwcGVyTGluayA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e3VybH0+e2NoaWxkcmVufTwvTGluaz47XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxXcmFwcGVyTGluaz5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj17aXNJbnRlcm5hbExpbmsgPyBudWxsIDogdXJsfVxyXG4gICAgICAgICAgdGFyZ2V0PXtpc0ludGVybmFsTGluayA/IG51bGwgOiAnX2JsYW5rJ31cclxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiRXh0cmEgTGlmZVwiIC8+XHJcbiAgICAgICAgICA8c3Bhbj5FeHRyYSBMaWZlIFRlYW08L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L1dyYXBwZXJMaW5rPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgdG9wOiAtNDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMWQ1YjdkO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcywgdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgdG9wOiAtNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIHRvcDogLTYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkNoYXJpdHlCYW5uZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoYXJpdHk6IHNoYXBlKHtcclxuICAgIGltYWdlOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHVybDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJpdHlCYW5uZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
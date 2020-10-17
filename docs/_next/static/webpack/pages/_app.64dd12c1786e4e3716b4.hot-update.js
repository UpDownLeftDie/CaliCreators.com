webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/gtag */ "./lib/gtag.js");






var _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/jsx-filename-extension */



next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.on('routeChangeComplete', function (url) {
  return _lib_gtag__WEBPACK_IMPORTED_MODULE_10__["pageview"](url);
});

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx("div", {
        className: "jsx-1615098348" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        className: "jsx-1615098348" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      })), __jsx("div", {
        className: "jsx-1615098348" + " " + "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }
      }, __jsx("p", {
        className: "jsx-1615098348",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }
      }, "This site is not affiliated or endorsed by Twitch, Facebook, or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1615098348",
        __self: this
      }, "html{min-height:100%;}html,body,#__next{height:100%;width:100%;margin:0;padding:0;}body{background-color:#7230d3;color:#fff;font-family:'Kanit',sans-serif,Avenir Next,Avenir,Helvetica, sans-serif;}.container::before{content:'';z-index:-999;background-image:url('/funky-lines.png');background-size:700px;position:absolute;top:0px;right:0px;bottom:0px;left:0px;opacity:0.25;}.container{position:relative;min-height:100% min-width:480px;padding:50px 16px 16px 16px;box-sizing:border-box;display:grid;grid-template-rows:1fr auto;justify-items:center;}.footer{color:#fff;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-size:14px;padding-top:50px;}.footer>p{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJXLEFBRytCLEFBS0osQUFNYSxBQU1kLEFBWU8sQUFVUCxBQVVGLFNBQ1gsRUFoQ2UsQUFzQkosQ0FsQ0UsSUFMYixFQThCa0IsRUFVTCxHQWxDRixDQVlnQyxDQVA5QixNQThCTyxDQWxDUixJQU1FLE1BTGQsT0FrQ2tCLENBWFksZUFaTixBQXdCSixhQVhJLEtBWVAsSUF4QkcsV0F5QkQsRUFaSixLQVpMLEdBUFYsS0FRWSxBQVlrQixFQVk5QixRQXZCYSxXQUNGLE9BV1ksRUFWUixhQUNmLE1BVUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJy4uL2xpYi9ndGFnJztcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAodXJsKSA9PiBndGFnLnBhZ2V2aWV3KHVybCkpO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBUaGlzIHNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgb3IgZW5kb3JzZWQgYnkgVHdpdGNoLCBGYWNlYm9vaywgb3JcclxuICAgICAgICAgICAgTWVldHVwLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodG1sLFxyXG4gICAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMzBkMztcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZiwgQXZlbmlyIE5leHQsIEF2ZW5pciwgSGVsdmV0aWNhLFxyXG4gICAgICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IC05OTk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvZnVua3ktbGluZXMucG5nJyk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA3MDBweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJVxyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAxNnB4IDE2cHggMTZweDtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3RlciA+IHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\_app.js */"));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInVybCIsImd0YWciLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsVUFBQ0MsR0FBRDtBQUFBLFNBQVNDLG1EQUFBLENBQWNELEdBQWQsQ0FBVDtBQUFBLENBQXhDOztJQUVNRSxLOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUEsd0JBQzBCLEtBQUtDLEtBRC9CO0FBQUEsVUFDQ0MsU0FERCxlQUNDQSxTQUREO0FBQUEsVUFDWUMsU0FEWixlQUNZQSxTQURaO0FBR1AsYUFDRTtBQUFBLDRDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsU0FBRCx5RkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixFQUVFO0FBQUEsNENBQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1GQURGLENBRkY7QUFBQTtBQUFBO0FBQUEseXFKQURGO0FBbUVEOzs7O0VBdkVpQkMsK0M7O0FBMEVMSixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY0ZGQxMmMxNzg2ZTRlMzcxNmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLi9saWIvZ3RhZyc7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKHVybCkgPT4gZ3RhZy5wYWdldmlldyh1cmwpKTtcclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgVGhpcyBzaXRlIGlzIG5vdCBhZmZpbGlhdGVkIG9yIGVuZG9yc2VkIGJ5IFR3aXRjaCwgRmFjZWJvb2ssIG9yXHJcbiAgICAgICAgICAgIE1lZXR1cC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHRtbCxcclxuICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjMwZDM7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWYsIEF2ZW5pciBOZXh0LCBBdmVuaXIsIEhlbHZldGljYSxcclxuICAgICAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICB6LWluZGV4OiAtOTk5O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Z1bmt5LWxpbmVzLnBuZycpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNzAwcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCVcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XHJcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXIgPiBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
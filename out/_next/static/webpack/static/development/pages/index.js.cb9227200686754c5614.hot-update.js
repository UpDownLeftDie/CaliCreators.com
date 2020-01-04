webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/charity-banner.js":
/*!**************************************!*\
  !*** ./components/charity-banner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var CharityBanner = function CharityBanner(props) {
  var charity = props.charity;
  if (!charity) return null;
  var url = charity.url,
      image = charity.image;
  if (!url) return null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", {
    href: url,
    target: "_blank",
    className: "jsx-1601756527"
  }, __jsx("img", {
    src: image,
    className: "jsx-1601756527"
  }), __jsx("span", {
    className: "jsx-1601756527"
  }, "Extra Life Team")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1601756527"
  }, "a.jsx-1601756527{width:100%;height:80px;top:-40px;position:absolute;text-align:center;background:#ffffff;color:#1d5b7d;border-radius:20px 20px 0 0;-webkit-transition:all 150ms,-webkit-transform 150ms cubic-bezier(0,0,0.2,1);-webkit-transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);-webkit-text-decoration:none;text-decoration:none;}a.jsx-1601756527:hover{top:-60px;}img.jsx-1601756527{position:absolute;width:auto;height:calc(100% - 40px);left:10px;top:10px;}span.jsx-1601756527{font-size:20px;line-height:60px;}@media (max-width:900px){a.jsx-1601756527{top:-60px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvY2EtY3JlYXRvcnMvY29tcG9uZW50cy9jaGFyaXR5LWJhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhUyxBQUd3QixBQVlELEFBR1EsQUFPSCxBQUtILFVBZGQsQUFlRSxDQTNCWSxJQXNCSyxHQVBOLEtBZEQsTUFlZSxHQU8zQixDQXJCb0Isa0JBQ0EsR0FjUixVQUNELEtBZFUsSUFlckIsZUFkZ0IsY0FDYyw0QkFDcUMsK01BQzVDLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvamFyZWRrb3RvZmYvcGVyc29uYWwvZ2l0L2NhLWNyZWF0b3JzL2NvbXBvbmVudHMvY2hhcml0eS1iYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDaGFyaXR5QmFubmVyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNoYXJpdHkgfSA9IHByb3BzO1xuICBpZiAoIWNoYXJpdHkpIHJldHVybiBudWxsO1xuICBjb25zdCB7IHVybCwgaW1hZ2UgfSA9IGNoYXJpdHk7XG4gIGlmICghdXJsKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgIDxzcGFuPkV4dHJhIExpZmUgVGVhbTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIHRvcDogLTQwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMxZDViN2Q7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zLCB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdG9wOiAtNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHRvcDogLTYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDaGFyaXR5QmFubmVyO1xuIl19 */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/ca-creators/components/charity-banner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CharityBanner);

/***/ })

})
//# sourceMappingURL=index.js.cb9227200686754c5614.hot-update.js.map
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
    className: "jsx-1303487181"
  }, __jsx("img", {
    src: image,
    className: "jsx-1303487181"
  }), __jsx("span", {
    className: "jsx-1303487181"
  }, "Extra Life Team")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1303487181"
  }, "a.jsx-1303487181{width:100%;height:80px;top:-40px;position:absolute;text-align:center;background:#ffffff;color:#1d5b7d;border-radius:20px 20px 0 0;-webkit-transition:all 150ms,-webkit-transform 150ms cubic-bezier(0,0,0.2,1);-webkit-transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);-webkit-text-decoration:none;text-decoration:none;}a.jsx-1303487181:hover{top:-60px;}img.jsx-1303487181{position:absolute;width:auto;height:calc(100% - 40px);left:10px;top:10px;}span.jsx-1303487181{font-size:20px;line-height:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvY2EtY3JlYXRvcnMvY29tcG9uZW50cy9jaGFyaXR5LWJhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhUyxBQUd3QixBQVlELEFBR1EsQUFPSCxVQVRqQixDQVpjLElBc0JLLEdBUE4sS0FkRCxNQWVlLEdBTzNCLENBckJvQixrQkFDQSxHQWNSLFVBQ0QsS0FkVSxJQWVyQixlQWRnQixjQUNjLDRCQUNxQywrTUFDNUMsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvY2EtY3JlYXRvcnMvY29tcG9uZW50cy9jaGFyaXR5LWJhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENoYXJpdHlCYW5uZXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2hhcml0eSB9ID0gcHJvcHM7XG4gIGlmICghY2hhcml0eSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHsgdXJsLCBpbWFnZSB9ID0gY2hhcml0eTtcbiAgaWYgKCF1cmwpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgPHNwYW4+RXh0cmEgTGlmZSBUZWFtPC9zcGFuPlxuICAgICAgPC9hPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgdG9wOiAtNDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBjb2xvcjogIzFkNWI3ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMsIHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0b3A6IC02MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENoYXJpdHlCYW5uZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/ca-creators/components/charity-banner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CharityBanner);

/***/ })

})
//# sourceMappingURL=index.js.15a5635ece78b3989485.hot-update.js.map
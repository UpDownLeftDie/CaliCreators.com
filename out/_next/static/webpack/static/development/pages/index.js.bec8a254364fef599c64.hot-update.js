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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3130910406"
  }, __jsx("img", {
    src: image,
    className: "jsx-3130910406"
  }), __jsx("span", {
    className: "jsx-3130910406"
  }, "Extra Life Team")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3130910406"
  }, "div.jsx-3130910406{width:100%;height:80px;top:-40px;position:absolute;text-align:center;background:#ffffff;color:#1d5b7d;border-radius:20px 20px 0 0;-webkit-transition:all 150ms,-webkit-transform 150ms cubic-bezier(0,0,0.2,1);-webkit-transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);}div.jsx-3130910406:hover{top:-60px;}img.jsx-3130910406{position:absolute;width:auto;height:calc(100% - 40px);left:10px;top:10px;}span.jsx-3130910406{font-size:20px;line-height:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvY2EtY3JlYXRvcnMvY29tcG9uZW50cy9jaGFyaXR5LWJhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhUyxBQUd3QixBQVdELEFBR1EsQUFPSCxVQVRqQixDQVhjLElBcUJLLEdBUE4sS0FiRCxNQWNlLEdBTzNCLENBcEJvQixrQkFDQSxHQWFSLFVBQ0QsS0FiVSxJQWNyQixlQWJnQixjQUNjLDRCQUNxQywrTUFDbkUiLCJmaWxlIjoiL1VzZXJzL2phcmVka290b2ZmL3BlcnNvbmFsL2dpdC9jYS1jcmVhdG9ycy9jb21wb25lbnRzL2NoYXJpdHktYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2hhcml0eUJhbm5lciA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjaGFyaXR5IH0gPSBwcm9wcztcbiAgaWYgKCFjaGFyaXR5KSByZXR1cm4gbnVsbDtcbiAgY29uc3QgeyB1cmwsIGltYWdlIH0gPSBjaGFyaXR5O1xuICBpZiAoIXVybCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICA8c3Bhbj5FeHRyYSBMaWZlIFRlYW08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgdG9wOiAtNDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBjb2xvcjogIzFkNWI3ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMsIHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2OmhvdmVyIHtcbiAgICAgICAgICAgIHRvcDogLTYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2hhcml0eUJhbm5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/ca-creators/components/charity-banner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CharityBanner);

/***/ })

})
//# sourceMappingURL=index.js.bec8a254364fef599c64.hot-update.js.map
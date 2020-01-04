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
    className: "jsx-2270464069"
  }, __jsx("img", {
    src: image,
    className: "jsx-2270464069"
  }), __jsx("span", {
    className: "jsx-2270464069"
  }, "Extra Life Team")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2270464069"
  }, "div.jsx-2270464069{width:100%;height:80px;top:-40px;position:absolute;text-align:center;background:#ffffff;color:#1d5b7d;border-radius:20px 20px 0 0;-webkit-transition:all 150ms,-webkit-transform 150ms cubic-bezier(0,0,0.2,1);-webkit-transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);transition:all 150ms,transform 150ms cubic-bezier(0,0,0.2,1);}div.jsx-2270464069:hover{top:-60px;}img.jsx-2270464069{position:absolute;width:auto;height:calc(100% - 40px);left:5px;top:10px;}span.jsx-2270464069{line-height:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvY2EtY3JlYXRvcnMvY29tcG9uZW50cy9jaGFyaXR5LWJhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhUyxBQUd3QixBQVdELEFBR1EsQUFPRCxVQVRuQixDQVhjLE1BcUJkLENBUGEsS0FiRCxNQWNlLElBYlAsa0JBQ0EsR0FhVCxTQUNBLE1BYlUsR0FjckIsZ0JBYmdCLGNBQ2MsNEJBQ3FDLCtNQUNuRSIsImZpbGUiOiIvVXNlcnMvamFyZWRrb3RvZmYvcGVyc29uYWwvZ2l0L2NhLWNyZWF0b3JzL2NvbXBvbmVudHMvY2hhcml0eS1iYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDaGFyaXR5QmFubmVyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNoYXJpdHkgfSA9IHByb3BzO1xuICBpZiAoIWNoYXJpdHkpIHJldHVybiBudWxsO1xuICBjb25zdCB7IHVybCwgaW1hZ2UgfSA9IGNoYXJpdHk7XG4gIGlmICghdXJsKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgIDxzcGFuPkV4dHJhIExpZmUgVGVhbTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB0b3A6IC00MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMWQ1YjdkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcywgdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXY6aG92ZXIge1xuICAgICAgICAgICAgdG9wOiAtNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENoYXJpdHlCYW5uZXI7XG4iXX0= */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/ca-creators/components/charity-banner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CharityBanner);

/***/ })

})
//# sourceMappingURL=index.js.312288fabb867610e5f6.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/social-icons.js":
/*!************************************!*\
  !*** ./components/social-icons.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var SocialIcons = function SocialIcons(_ref) {
  var links = _ref.links,
      groupName = _ref.groupName;
  var icons = links.map(function (link) {
    return __jsx("a", {
      href: link.url,
      key: link.site,
      "aria-label": "".concat(groupName, "'s ").concat(link.site),
      target: "_blank",
      rel: "noopener"
    }, __jsx("i", {
      className: "fab fa-".concat(link.site)
    }));
  });
  return __jsx("div", {
    className: "jsx-595379923" + " " + "socialicons"
  }, icons, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "595379923"
  }, ".socialicons.jsx-595379923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;font-size:36px;padding:10px;}@supports not (-ms-ime-align:auto){.jsx-595379923{-webkit-box-pack:space-evenly !important;-webkit-justify-content:space-evenly !important;-ms-flex-pack:space-evenly !important;justify-content:space-evenly !important;}}.socialicons.jsx-595379923 a{color:#fff;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:-webkit-transform 150ms;-webkit-transition:transform 150ms;transition:transform 150ms;}.socialicons.jsx-595379923 a:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}@media (max-width:900px){.socialicons.jsx-595379923{padding:0 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvY2EtY3JlYXRvcnMvY29tcG9uZW50cy9zb2NpYWwtaWNvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUd3QixBQU8yQixBQUc3QixBQUtVLEFBSUosV0FSSSxJQVNyQiw4Q0FSMkIsYUFYRSxDQWUvQiwyRkFIQSxDQUxBLDhCQU5pQixlQUNGLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2phcmVka290b2ZmL3BlcnNvbmFsL2dpdC9jYS1jcmVhdG9ycy9jb21wb25lbnRzL3NvY2lhbC1pY29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU29jaWFsSWNvbnMgPSAoeyBsaW5rcywgZ3JvdXBOYW1lIH0pID0+IHtcbiAgY29uc3QgaWNvbnMgPSBsaW5rcy5tYXAobGluayA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2xpbmsudXJsfVxuICAgICAgICBrZXk9e2xpbmsuc2l0ZX1cbiAgICAgICAgYXJpYS1sYWJlbD17YCR7Z3JvdXBOYW1lfSdzICR7bGluay5zaXRlfWB9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFiIGZhLSR7bGluay5zaXRlfWB9IC8+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxpY29uc1wiPlxuICAgICAge2ljb25zfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc29jaWFsaWNvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAc3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsaWNvbnMgOmdsb2JhbChhKSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcztcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsaWNvbnMgOmdsb2JhbChhKTpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgIC5zb2NpYWxpY29ucyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxJY29ucztcbiJdfQ== */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/ca-creators/components/social-icons.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialIcons);

/***/ })

})
//# sourceMappingURL=index.js.542ca3f152d9437375b9.hot-update.js.map
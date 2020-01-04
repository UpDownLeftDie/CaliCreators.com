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
    className: "jsx-3263188680" + " " + "socialicons"
  }, icons, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3263188680"
  }, ".socialicons.jsx-3263188680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;font-size:36px;padding:10px;}@supports not (-ms-ime-align:auto){.jsx-3263188680{-webkit-box-pack:space-evenly !important;-webkit-justify-content:space-evenly !important;-ms-flex-pack:space-evenly !important;justify-content:space-evenly !important;}}.socialicons.jsx-3263188680 a{color:#fff;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:-webkit-transform 200ms;-webkit-transition:transform 200ms;transition:transform 200ms;}.socialicons.jsx-3263188680 a:hover{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}@media (max-width:900px){.socialicons.jsx-3263188680{padding:0 10px 75px;}.socialicons.jsx-3263188680:last-of-type{padding:0 10px 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvY2EtY3JlYXRvcnMvY29tcG9uZW50cy9zb2NpYWwtaWNvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUd3QixBQU8yQixBQUc3QixBQUtVLEFBSUMsQUFHQSxXQVhELFNBU3JCLEFBR0EseUNBWDJCLGFBWEUsQ0FlL0IsMkZBSEEsQ0FMQSw4QkFOaUIsZUFDRixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvY2EtY3JlYXRvcnMvY29tcG9uZW50cy9zb2NpYWwtaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNvY2lhbEljb25zID0gKHsgbGlua3MsIGdyb3VwTmFtZSB9KSA9PiB7XG4gIGNvbnN0IGljb25zID0gbGlua3MubWFwKGxpbmsgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBocmVmPXtsaW5rLnVybH1cbiAgICAgICAga2V5PXtsaW5rLnNpdGV9XG4gICAgICAgIGFyaWEtbGFiZWw9e2Ake2dyb3VwTmFtZX0ncyAke2xpbmsuc2l0ZX1gfVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke2xpbmsuc2l0ZX1gfSAvPlxuICAgICAgPC9hPlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsaWNvbnNcIj5cbiAgICAgIHtpY29uc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNvY2lhbGljb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbGljb25zIDpnbG9iYWwoYSkge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbGljb25zIDpnbG9iYWwoYSk6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAuc29jaWFsaWNvbnMge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDc1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zb2NpYWxpY29uczpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxJY29ucztcbiJdfQ== */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/ca-creators/components/social-icons.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialIcons);

/***/ })

})
//# sourceMappingURL=index.js.65279449290c39cb5dfa.hot-update.js.map
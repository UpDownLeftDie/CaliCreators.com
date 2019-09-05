webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jared\\twitch-socal\\components\\card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var links = [{
  href: 'https://meetups.twitch.tv/los-angeles/',
  name: 'Twitch LA'
}, {
  href: 'https://www.meetup.com/ocstreamers',
  name: 'OC Streamers'
}, {
  href: 'https://meetups.twitch.tv/san-diego/',
  name: 'Twitch SD'
}];
var images = [{
  name: 'Twitch LA',
  path: 'la.jpg'
}];

var Card = function Card(props) {
  var link = links.find(function (l) {
    return l.name.toLowerCase() === props.name.toLowerCase();
  });
  var img = images.find(function (i) {
    return i.name.toLowerCase() === props.name.toLowerCase();
  });
  if (!link) link = {
    href: 'https://meetups.twitch.tv/',
    name: 'Twitch Meetups'
  };
  var backgroundImage = '';
  if (img) backgroundImage = "background-image: url('/staic/".concat(img.path, "');");
  var nextEventDate = 'TBD'; // TODO: get next event info

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link.href,
    name: link.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["127031812", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["127031812", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, link.name), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["127031812", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Next Event"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["127031812", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, nextEventDate))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "127031812",
    dynamic: [backgroundImage],
    __self: this
  }, ".card.__jsx-style-dynamic-selector{padding:18px;width:180px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(backgroundImage, " transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;padding:6px 0 0;font-size:18px;color:#fff;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2tCLEFBR3dCLEFBYVMsQUFJYixBQVFPLEFBS1AsU0FaRSxBQWFLLElBOUJKLEdBeUJHLElBUEEsS0FqQkYsQUE4QkUsTUFMQyxJQVBBLEdBakJMLEVBOEJBLE9BTGIsRUF4QmtCLEVBaUJFLEFBYUYsY0E3QkssRUE4QnZCLEVBYmMsU0FSa0MsR0FTaEQsa0NBakJxQixtQkFFc0IsNENBTzNDLHlCQU5nRCxvR0FDM0IsbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9sb3MtYW5nZWxlcy8nLCBuYW1lOiAnVHdpdGNoIExBJyB9LFxyXG4gIHsgaHJlZjogJ2h0dHBzOi8vd3d3Lm1lZXR1cC5jb20vb2NzdHJlYW1lcnMnLCBuYW1lOiAnT0MgU3RyZWFtZXJzJyB9LFxyXG4gIHsgaHJlZjogJ2h0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvc2FuLWRpZWdvLycsIG5hbWU6ICdUd2l0Y2ggU0QnIH1cclxuXTtcclxuXHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICB7bmFtZTogJ1R3aXRjaCBMQScsIHBhdGg6ICdsYS5qcGcnfVxyXG5dO1xyXG5cclxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xyXG4gIGxldCBsaW5rID0gbGlua3MuZmluZChsID0+IGwubmFtZS50b0xvd2VyQ2FzZSgpID09PSBwcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGxldCBpbWcgPSBpbWFnZXMuZmluZChpID0+IGkubmFtZS50b0xvd2VyQ2FzZSgpID09PSBwcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGlmICghbGluaykgbGluayA9IHsgaHJlZjonaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di8nLCBuYW1lOiAnVHdpdGNoIE1lZXR1cHMnIH07XHJcblxyXG4gIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPSAnJztcclxuICBpZiAoaW1nKSBiYWNrZ3JvdW5kSW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhaWMvJHtpbWcucGF0aH0nKTtgO1xyXG5cclxuICBsZXQgbmV4dEV2ZW50RGF0ZSA9ICdUQkQnO1xyXG4gIC8vIFRPRE86IGdldCBuZXh0IGV2ZW50IGluZm9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2xpbmsuaHJlZn0gbmFtZT17bGluay5uYW1lfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J2NhcmQnPlxyXG4gICAgICAgICAgPGgzPntsaW5rLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxoND5OZXh0IEV2ZW50PC9oND5cclxuICAgICAgICAgIDxwPntuZXh0RXZlbnREYXRlfTwvcD5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz4gIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgcGFkZGluZzogMThweDtcclxuICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjYwMDAwO1xyXG4gICAgICAgICAgJHtiYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTUwbXMsIHRyYW5zZm9ybSAyMDBtcztcclxuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA1cHggM3B4IHJnYmEoMCwwLDAsMC40KSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDhweCA2cHggcmdiYSgwLDAsMCwwLjMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMCAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\components\\card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.7755c228b8a8f10441a7.hot-update.js.map
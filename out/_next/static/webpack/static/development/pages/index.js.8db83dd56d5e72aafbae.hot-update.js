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
  image: ''
}];

var Card = function Card(props) {
  var link = links.find(function (l) {
    return l.name.toLowerCase() === props.name.toLowerCase();
  });
  if (!link) link = {
    href: 'https://meetups.twitch.tv/',
    name: 'Twitch Meetups'
  };
  var nextEventDate = 'TBD'; // TODO: get next event info

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link.href,
    name: link.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4031682147" + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4031682147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, link.name), __jsx("h4", {
    className: "jsx-4031682147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Next Event"), __jsx("p", {
    className: "jsx-4031682147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, nextEventDate))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4031682147",
    __self: this
  }, ".card.jsx-4031682147{padding:18px;width:180px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;-webkit-transition:filter 150ms,-webkit-transform 200ms;-webkit-transition:filter 150ms,transform 200ms;transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;}.card.jsx-4031682147:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.jsx-4031682147 h3.jsx-4031682147{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.jsx-4031682147 h4.jsx-4031682147{font-weight:700;font-size:20px;margin:12px 0 0;}.card.jsx-4031682147 p.jsx-4031682147{margin:0;padding:6px 0 0;font-size:18px;color:#fff;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR3dCLEFBWVMsQUFJYixBQVFPLEFBS1AsU0FaRSxBQWFLLElBN0JKLEdBd0JHLElBUEEsS0FoQkYsQUE2QkUsTUFMQyxJQVBBLEdBaEJMLEVBNkJBLE9BTGIsRUF2QmtCLEVBZ0JFLEFBYUYsY0E1QkssRUE2QnZCLEVBYmMsU0FSa0MsR0FTaEQsa0NBaEJxQixtQkFDc0IsNENBTzNDLG9HQU5nRCxvR0FDM0IsbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9sb3MtYW5nZWxlcy8nLCBuYW1lOiAnVHdpdGNoIExBJyB9LFxyXG4gIHsgaHJlZjogJ2h0dHBzOi8vd3d3Lm1lZXR1cC5jb20vb2NzdHJlYW1lcnMnLCBuYW1lOiAnT0MgU3RyZWFtZXJzJyB9LFxyXG4gIHsgaHJlZjogJ2h0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvc2FuLWRpZWdvLycsIG5hbWU6ICdUd2l0Y2ggU0QnIH1cclxuXTtcclxuXHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICB7bmFtZTogJ1R3aXRjaCBMQScsIGltYWdlOiAnJ31cclxuXTtcclxuXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuICBsZXQgbGluayA9IGxpbmtzLmZpbmQobCA9PiBsLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICBpZiAoIWxpbmspIGxpbmsgPSB7IGhyZWY6J2h0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvJywgbmFtZTogJ1R3aXRjaCBNZWV0dXBzJyB9O1xyXG5cclxuICBsZXQgbmV4dEV2ZW50RGF0ZSA9ICdUQkQnO1xyXG4gIC8vIFRPRE86IGdldCBuZXh0IGV2ZW50IGluZm9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2xpbmsuaHJlZn0gbmFtZT17bGluay5uYW1lfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J2NhcmQnPlxyXG4gICAgICAgICAgPGgzPntsaW5rLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxoND5OZXh0IEV2ZW50PC9oND5cclxuICAgICAgICAgIDxwPntuZXh0RXZlbnREYXRlfTwvcD5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz4gIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgcGFkZGluZzogMThweDtcclxuICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjYwMDAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDE1MG1zLCB0cmFuc2Zvcm0gMjAwbXM7XHJcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDNweCByZ2JhKDAsMCwwLDAuNCkpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcclxuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA4cHggNnB4IHJnYmEoMCwwLDAsMC4zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgaDQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTJweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDAgMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\components\\card.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.8db83dd56d5e72aafbae.hot-update.js.map
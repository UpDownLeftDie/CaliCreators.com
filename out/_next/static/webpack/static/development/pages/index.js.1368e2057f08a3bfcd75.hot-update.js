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
}, {
  name: 'OC Streamers',
  path: 'oc.jpg'
}, {
  name: 'Twitch SD',
  path: 'sd.jpg'
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
  if (img) backgroundImage = "background-image: url('/static/".concat(img.path, "');");
  var nextEventDate = 'TBD'; // TODO: get next event info

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link.href,
    name: link.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2480280742", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2480280742", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, link.name), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2480280742", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Next Event"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2480280742", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, nextEventDate))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2480280742",
    dynamic: [backgroundImage],
    __self: this
  }, ".card.__jsx-style-dynamic-selector{padding:18px;width:180px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:filter 150ms,-webkit-transform 200ms;-webkit-transition:filter 150ms,transform 200ms;transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;padding:6px 0 0;font-size:18px;color:#fff;font-weight:400;}@media (max-width:840px){.card.__jsx-style-dynamic-selector{width:80%;margin-bottom:25px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR3dCLEFBZVMsQUFJYixBQVFPLEFBS1AsQUFRRyxBQUlLLFNBeEJOLEFBYUssQ0FRSyxHQXhDVCxFQTRDWixDQWpCZSxJQVBBLEtBbkJGLEFBZ0NFLElBUWYsRUFiZ0IsSUFQQSxHQW5CTCxFQWdDQSxPQUxiLEVBMUJrQixFQW1CRSxBQWFGLGNBL0JLLEVBZ0N2QixFQWJjLFNBUmtDLEdBU2hELGtDQW5CcUIsbUJBRUcsNENBU3hCLE9BUjZCLDJCQUNjLGdKQUNLLG9HQUMzQixtQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcdHdpdGNoLXNvY2FsXFxjb21wb25lbnRzXFxjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBsaW5rcyA9IFtcclxuICB7IGhyZWY6ICdodHRwczovL21lZXR1cHMudHdpdGNoLnR2L2xvcy1hbmdlbGVzLycsIG5hbWU6ICdUd2l0Y2ggTEEnIH0sXHJcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cubWVldHVwLmNvbS9vY3N0cmVhbWVycycsIG5hbWU6ICdPQyBTdHJlYW1lcnMnIH0sXHJcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9zYW4tZGllZ28vJywgbmFtZTogJ1R3aXRjaCBTRCcgfVxyXG5dO1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gIHtuYW1lOiAnVHdpdGNoIExBJywgcGF0aDogJ2xhLmpwZyd9LFxyXG4gIHtuYW1lOiAnT0MgU3RyZWFtZXJzJywgcGF0aDogJ29jLmpwZyd9LFxyXG4gIHtuYW1lOiAnVHdpdGNoIFNEJywgcGF0aDogJ3NkLmpwZyd9XHJcbl07XHJcblxyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgbGV0IGxpbmsgPSBsaW5rcy5maW5kKGwgPT4gbC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHByb3BzLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgbGV0IGltZyA9IGltYWdlcy5maW5kKGkgPT4gaS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHByb3BzLm5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgaWYgKCFsaW5rKSBsaW5rID0geyBocmVmOidodHRwczovL21lZXR1cHMudHdpdGNoLnR2LycsIG5hbWU6ICdUd2l0Y2ggTWVldHVwcycgfTtcclxuXHJcbiAgbGV0IGJhY2tncm91bmRJbWFnZSA9ICcnO1xyXG4gIGlmIChpbWcpIGJhY2tncm91bmRJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvJHtpbWcucGF0aH0nKTtgO1xyXG5cclxuICBsZXQgbmV4dEV2ZW50RGF0ZSA9ICdUQkQnO1xyXG4gIC8vIFRPRE86IGdldCBuZXh0IGV2ZW50IGluZm9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2xpbmsuaHJlZn0gbmFtZT17bGluay5uYW1lfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J2NhcmQnPlxyXG4gICAgICAgICAgPGgzPntsaW5rLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxoND5OZXh0IEV2ZW50PC9oND5cclxuICAgICAgICAgIDxwPntuZXh0RXZlbnREYXRlfTwvcD5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz4gIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgcGFkZGluZzogMThweDtcclxuICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjYwMDAwO1xyXG4gICAgICAgICAgJHtiYWNrZ3JvdW5kSW1hZ2V9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDE1MG1zLCB0cmFuc2Zvcm0gMjAwbXM7XHJcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDNweCByZ2JhKDAsMCwwLDAuNCkpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcclxuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA4cHggNnB4IHJnYmEoMCwwLDAsMC4zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgaDQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMTJweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDAgMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\components\\card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.1368e2057f08a3bfcd75.hot-update.js.map
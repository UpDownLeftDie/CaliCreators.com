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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2628899170", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2628899170", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, link.name), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2628899170", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Next Event"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2628899170", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, nextEventDate))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2628899170",
    dynamic: [backgroundImage],
    __self: this
  }, ".card.__jsx-style-dynamic-selector{padding:18px;width:180px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:filter 150ms,-webkit-transform 200ms;-webkit-transition:filter 150ms,transform 200ms;transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;text-shadow:0 2px 20px rgba(0,0,0,0.8);}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;padding:6px 0 0;font-size:18px;color:#fff;font-weight:400;}@media (max-width:840px){.card.__jsx-style-dynamic-selector{width:80%;margin-bottom:25px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:28px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR3dCLEFBZ0JTLEFBSWIsQUFRTyxBQUtQLEFBUUcsQUFJSyxBQUdBLEFBR0EsU0E5Qk4sQUFhSyxDQVFLLEdBekNULEVBNkNaLEFBR0EsQUFHQSxDQXZCZSxJQVBBLEtBcEJGLEFBaUNFLElBUWYsRUFiZ0IsSUFQQSxHQXBCTCxFQWlDQSxPQUxiLEVBM0JrQixFQW9CRSxBQWFGLGNBaENLLEVBaUN2QixFQWJjLFNBUmtDLEdBU2hELGtDQXBCcUIsbUJBRUcsNENBVXhCLE9BVDZCLDJCQUNjLGdKQUNLLG9HQUMzQixtQkFDb0IsdUNBQ3pDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9sb3MtYW5nZWxlcy8nLCBuYW1lOiAnVHdpdGNoIExBJyB9LFxyXG4gIHsgaHJlZjogJ2h0dHBzOi8vd3d3Lm1lZXR1cC5jb20vb2NzdHJlYW1lcnMnLCBuYW1lOiAnT0MgU3RyZWFtZXJzJyB9LFxyXG4gIHsgaHJlZjogJ2h0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvc2FuLWRpZWdvLycsIG5hbWU6ICdUd2l0Y2ggU0QnIH1cclxuXTtcclxuXHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICB7bmFtZTogJ1R3aXRjaCBMQScsIHBhdGg6ICdsYS5qcGcnfSxcclxuICB7bmFtZTogJ09DIFN0cmVhbWVycycsIHBhdGg6ICdvYy5qcGcnfSxcclxuICB7bmFtZTogJ1R3aXRjaCBTRCcsIHBhdGg6ICdzZC5qcGcnfVxyXG5dO1xyXG5cclxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xyXG4gIGxldCBsaW5rID0gbGlua3MuZmluZChsID0+IGwubmFtZS50b0xvd2VyQ2FzZSgpID09PSBwcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGxldCBpbWcgPSBpbWFnZXMuZmluZChpID0+IGkubmFtZS50b0xvd2VyQ2FzZSgpID09PSBwcm9wcy5uYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gIGlmICghbGluaykgbGluayA9IHsgaHJlZjonaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di8nLCBuYW1lOiAnVHdpdGNoIE1lZXR1cHMnIH07XHJcblxyXG4gIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPSAnJztcclxuICBpZiAoaW1nKSBiYWNrZ3JvdW5kSW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljLyR7aW1nLnBhdGh9Jyk7YDtcclxuXHJcbiAgbGV0IG5leHRFdmVudERhdGUgPSAnVEJEJztcclxuICAvLyBUT0RPOiBnZXQgbmV4dCBldmVudCBpbmZvXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9IG5hbWU9e2xpbmsubmFtZX0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPSdjYXJkJz5cclxuICAgICAgICAgIDxoMz57bGluay5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8aDQ+TmV4dCBFdmVudDwvaDQ+XHJcbiAgICAgICAgICA8cD57bmV4dEV2ZW50RGF0ZX08L3A+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+ICBcclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzY2MDAwMDtcclxuICAgICAgICAgICR7YmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAxNTBtcywgdHJhbnNmb3JtIDIwMG1zO1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCAzcHggcmdiYSgwLDAsMCwwLjQpKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgOHB4IDZweCByZ2JhKDAsMCwwLDAuMykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkIGg0IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEycHggMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAwIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xyXG4gICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZCBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\components\\card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.9b6871cba022772ba6ff.hot-update.js.map
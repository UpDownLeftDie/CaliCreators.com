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
  label: 'Twitch LA'
}, {
  href: 'https://www.meetup.com/ocstreamers',
  label: 'OC Streamers'
}, {
  href: 'https://meetups.twitch.tv/san-diego/',
  label: 'Twitch SD'
}];

var Card = function Card(props) {
  var name = props.name;
  var link = links.find(link === name);
  if (!link) link = {
    href: 'https://meetups.twitch.tv/',
    lable: 'Twitch Meetups'
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: link.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4031682147" + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-4031682147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name), __jsx("h4", {
    className: "jsx-4031682147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Next Event"), __jsx("p", {
    className: "jsx-4031682147",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "TBD"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4031682147",
    __self: this
  }, ".card.jsx-4031682147{padding:18px;width:180px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;-webkit-transition:filter 150ms,-webkit-transform 200ms;-webkit-transition:filter 150ms,transform 200ms;transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;}.card.jsx-4031682147:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.jsx-4031682147 h3.jsx-4031682147{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.jsx-4031682147 h4.jsx-4031682147{font-weight:700;font-size:20px;margin:12px 0 0;}.card.jsx-4031682147 p.jsx-4031682147{margin:0;padding:6px 0 0;font-size:18px;color:#fff;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBR3dCLEFBWVMsQUFJYixBQVFPLEFBS1AsU0FaRSxBQWFLLElBN0JKLEdBd0JHLElBUEEsS0FoQkYsQUE2QkUsTUFMQyxJQVBBLEdBaEJMLEVBNkJBLE9BTGIsRUF2QmtCLEVBZ0JFLEFBYUYsY0E1QkssRUE2QnZCLEVBYmMsU0FSa0MsR0FTaEQsa0NBaEJxQixtQkFDc0IsNENBTzNDLG9HQU5nRCxvR0FDM0IsbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9sb3MtYW5nZWxlcy8nLCBsYWJlbDogJ1R3aXRjaCBMQScgfSxcclxuICB7IGhyZWY6ICdodHRwczovL3d3dy5tZWV0dXAuY29tL29jc3RyZWFtZXJzJywgbGFiZWw6ICdPQyBTdHJlYW1lcnMnIH0sXHJcbiAgeyBocmVmOiAnaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9zYW4tZGllZ28vJywgbGFiZWw6ICdUd2l0Y2ggU0QnIH1cclxuXTtcclxuXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7bmFtZX0gPSBwcm9wcztcclxuICBsZXQgbGluayA9IGxpbmtzLmZpbmQobGluayA9PT0gbmFtZSk7XHJcbiAgaWYgKCFsaW5rKSBsaW5rID0ge2hyZWY6J2h0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvJywgbGFibGU6ICdUd2l0Y2ggTWVldHVwcyd9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpbmsgaHJlZj17bGluay5ocmVmfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J2NhcmQnPlxyXG4gICAgICAgICAgPGgzPntuYW1lfTwvaDM+XHJcbiAgICAgICAgICA8aDQ+TmV4dCBFdmVudDwvaDQ+XHJcbiAgICAgICAgICA8cD5UQkQ8L3A+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+ICBcclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzY2MDAwMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAxNTBtcywgdHJhbnNmb3JtIDIwMG1zO1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCAzcHggcmdiYSgwLDAsMCwwLjQpKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgOHB4IDZweCByZ2JhKDAsMCwwLDAuMykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkIGg0IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEycHggMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCAwIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\components\\card.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.b27b74c224d50d865310.hot-update.js.map
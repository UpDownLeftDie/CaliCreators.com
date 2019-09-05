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
  if (img) backgroundImage = "background-image: url('/static/".concat(img.path, "');");
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3273401086", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3273401086", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, link.name), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3273401086", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Next Event"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3273401086", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, nextEventDate))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3273401086",
    dynamic: [backgroundImage],
    __self: this
  }, ".card.__jsx-style-dynamic-selector{padding:18px;width:180px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:filter 150ms,-webkit-transform 200ms;-webkit-transition:filter 150ms,transform 200ms;transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;padding:6px 0 0;font-size:18px;color:#fff;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2tCLEFBR3dCLEFBZVMsQUFJYixBQVFPLEFBS1AsU0FaRSxBQWFLLElBaENKLEdBMkJHLElBUEEsS0FuQkYsQUFnQ0UsTUFMQyxJQVBBLEdBbkJMLEVBZ0NBLE9BTGIsRUExQmtCLEVBbUJFLEFBYUYsY0EvQkssRUFnQ3ZCLEVBYmMsU0FSa0MsR0FTaEQsa0NBbkJxQixtQkFFRyw0Q0FTeEIsT0FSNkIsMkJBQ2MsZ0pBQ0ssb0dBQzNCLG1CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFx0d2l0Y2gtc29jYWxcXGNvbXBvbmVudHNcXGNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IGxpbmtzID0gW1xyXG4gIHsgaHJlZjogJ2h0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvbG9zLWFuZ2VsZXMvJywgbmFtZTogJ1R3aXRjaCBMQScgfSxcclxuICB7IGhyZWY6ICdodHRwczovL3d3dy5tZWV0dXAuY29tL29jc3RyZWFtZXJzJywgbmFtZTogJ09DIFN0cmVhbWVycycgfSxcclxuICB7IGhyZWY6ICdodHRwczovL21lZXR1cHMudHdpdGNoLnR2L3Nhbi1kaWVnby8nLCBuYW1lOiAnVHdpdGNoIFNEJyB9XHJcbl07XHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAge25hbWU6ICdUd2l0Y2ggTEEnLCBwYXRoOiAnbGEuanBnJ31cclxuXTtcclxuXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuICBsZXQgbGluayA9IGxpbmtzLmZpbmQobCA9PiBsLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICBsZXQgaW1nID0gaW1hZ2VzLmZpbmQoaSA9PiBpLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICBpZiAoIWxpbmspIGxpbmsgPSB7IGhyZWY6J2h0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvJywgbmFtZTogJ1R3aXRjaCBNZWV0dXBzJyB9O1xyXG5cclxuICBsZXQgYmFja2dyb3VuZEltYWdlID0gJyc7XHJcbiAgaWYgKGltZykgYmFja2dyb3VuZEltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy8ke2ltZy5wYXRofScpO2A7XHJcblxyXG4gIGxldCBuZXh0RXZlbnREYXRlID0gJ1RCRCc7XHJcbiAgLy8gVE9ETzogZ2V0IG5leHQgZXZlbnQgaW5mb1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpbmsgaHJlZj17bGluay5ocmVmfSBuYW1lPXtsaW5rLm5hbWV9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT0nY2FyZCc+XHJcbiAgICAgICAgICA8aDM+e2xpbmsubmFtZX08L2gzPlxyXG4gICAgICAgICAgPGg0Pk5leHQgRXZlbnQ8L2g0PlxyXG4gICAgICAgICAgPHA+e25leHRFdmVudERhdGV9PC9wPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPiAgXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjAwMDA7XHJcbiAgICAgICAgICAke2JhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTUwbXMsIHRyYW5zZm9ybSAyMDBtcztcclxuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA1cHggM3B4IHJnYmEoMCwwLDAsMC40KSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDhweCA2cHggcmdiYSgwLDAsMCwwLjMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMCAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\components\\card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.6ae29c7c4428eb25e5b0.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/social-icons */ "./components/social-icons.js");

var _jsxFileName = "/Users/jaredkotoff/personal/git/twitchsocal/components/card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var groupsInfo = [{
  groupName: 'Twitch LA',
  path: 'la.webp',
  links: [{
    site: 'twitter',
    href: 'https://twitter.com/TwitchLosAngele'
  }, {
    site: 'discord',
    href: 'https://discord.gg/8E75rA5'
  }, {
    site: 'instagram',
    href: 'https://www.instagram.com/twitch_LA'
  }]
}, {
  groupName: 'OC Streamers',
  path: 'oc.webp',
  links: [{
    site: 'twitter',
    href: 'https://twitter.com/OCStreamers'
  }, {
    site: 'discord',
    href: 'https://discord.gg/a5SUFUK'
  }, {
    site: 'instagram',
    href: 'https://www.instagram.com/ocstreamers'
  }]
}, {
  groupName: 'Twitch SD',
  path: 'sd.webp',
  links: [{
    site: 'twitch',
    href: 'https://www.twitch.tv/twitch_sandiego'
  }, {
    site: 'twitter',
    href: 'https://twitter.com/TwitchSanDiego'
  }, {
    site: 'discord',
    href: 'https://t.co/m0wLLQNnk8'
  }]
}];

var findNextEvent = function findNextEvent(city, upcomingEvents) {
  return upcomingEvents.find(function (event) {
    if (event.chapter.city === city) return true;
    return false;
  });
};

var Card = function Card(_ref) {
  var groupName = _ref.groupName,
      city = _ref.city,
      href = _ref.href,
      upcomingEvents = _ref.upcomingEvents;
  var group = groupsInfo.find(function (i) {
    return i.groupName.toLowerCase() === groupName.toLowerCase();
  });
  var backgroundImage = '';

  if (group) {
    backgroundImage = "background-image: url('/static/".concat(group.path, "');");
  }

  var nextEventInfo = findNextEvent(city, upcomingEvents);
  var nextEvent = {
    title: 'TBA',
    date: 'Click here for updates',
    url: href
  };

  if (nextEventInfo) {
    var url = nextEventInfo.url,
        start_date = nextEventInfo.start_date,
        title = nextEventInfo.title;
    nextEvent = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nextEvent, {
      title: title,
      date: moment__WEBPACK_IMPORTED_MODULE_3___default()(start_date).format("MMM Do YYYY"),
      url: url
    });
  }

  return __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1341708009", [backgroundImage]]]) + " " + "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    href: nextEvent.url,
    name: groupName,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1341708009", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1341708009", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1341708009", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, groupName), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1341708009", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Next Event"), __jsx("h5", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1341708009", [backgroundImage]]]) + " " + "event-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, nextEvent.title), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1341708009", [backgroundImage]]]) + " " + "event-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, nextEvent.date))), __jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    links: group.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1341708009",
    dynamic: [backgroundImage],
    __self: this
  }, "a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{width:200px;height:300px;padding:18px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#3D2769;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:all 150ms,-webkit-transform 200ms;-webkit-transition:all 150ms,transform 200ms;transition:all 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;text-shadow:0 2px 10px rgba(0,0,0,0.8);word-break:break-word;}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector .event-date.__jsx-style-dynamic-selector{font-size:18px;color:#fff;font-weight:400;-webkit-text-decoration:overline;text-decoration:overline;margin-top:8px;display:block;}.card.__jsx-style-dynamic-selector .event-title.__jsx-style-dynamic-selector{font-weight:700;font-size:2em;margin:12px 0 0;overflow:hidden;max-height:180px;line-height:35px;}@media (max-width:840px){.card-container.__jsx-style-dynamic-selector{width:80%;}.card.__jsx-style-dynamic-selector{width:auto;margin-bottom:15px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:28px;}.card.__jsx-style-dynamic-selector .event-title.__jsx-style-dynamic-selector{max-height:145px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvdHdpdGNoc29jYWwvY29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGa0IsQUFFc0MsQUFFZixBQWlCVSxBQUliLEFBUU8sQUFLRCxBQVFDLEFBVWpCLEFBRWMsQUFJSSxBQUdBLEFBR0UsQUFHRixTQTdDTixDQThCWCxDQUdxQixDQXREUixHQWtDRixBQXdCWCxBQUdBLEFBTUEsQ0F0Q2UsQUFhRCxDQXNCZCxHQTFDZSxLQXJCRixDQWtDRyxJQVFBLEFBWWhCLENBekJnQixJQVBBLEdBckJMLElBa0NjLElBUVQsQ0FibEIsRUE1QmtCLENBTlksQ0EyQlYsV0FxQkQsR0F6Q0ksSUFxQlQsU0FSa0MsQ0E2QjdCLEVBcEJuQixlQXFCQSxJQVZpQixlQWhDSSxBQWlDTCxjQUNoQixLQWhDd0IsNENBV3hCLE9BVjZCLDJCQUNXLHVJQUNRLG9HQUMzQixtQkFDb0IsdUNBQ2pCLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvamFyZWRrb3RvZmYvcGVyc29uYWwvZ2l0L3R3aXRjaHNvY2FsL2NvbXBvbmVudHMvY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gJy4uL2NvbXBvbmVudHMvc29jaWFsLWljb25zJ1xuXG5jb25zdCBncm91cHNJbmZvID0gW1xuICB7IGdyb3VwTmFtZTogJ1R3aXRjaCBMQScsIHBhdGg6ICdsYS53ZWJwJywgbGlua3M6IFtcbiAgICB7IFxuICAgICAgc2l0ZTogJ3R3aXR0ZXInLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vdHdpdHRlci5jb20vVHdpdGNoTG9zQW5nZWxlJyBcbiAgICB9LFxuICAgIHtcbiAgICAgIHNpdGU6ICdkaXNjb3JkJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2Rpc2NvcmQuZ2cvOEU3NXJBNScgXG4gICAgfSxcbiAgICB7XG4gICAgICBzaXRlOiAnaW5zdGFncmFtJyxcbiAgICAgIGhyZWY6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3R3aXRjaF9MQSdcbiAgICB9XG4gIF19LFxuICB7IGdyb3VwTmFtZTogJ09DIFN0cmVhbWVycycsIHBhdGg6ICdvYy53ZWJwJywgbGlua3M6IFtcbiAgICB7IFxuICAgICAgc2l0ZTogJ3R3aXR0ZXInLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vdHdpdHRlci5jb20vT0NTdHJlYW1lcnMnIFxuICAgIH0sXG4gICAge1xuICAgICAgc2l0ZTogJ2Rpc2NvcmQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vZGlzY29yZC5nZy9hNVNVRlVLJyBcbiAgICB9LFxuICAgIHtcbiAgICAgIHNpdGU6ICdpbnN0YWdyYW0nLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb2NzdHJlYW1lcnMnXG4gICAgfVxuICBdfSxcbiAgeyBncm91cE5hbWU6ICdUd2l0Y2ggU0QnLCBwYXRoOiAnc2Qud2VicCcsIGxpbmtzOiBbXG4gICAgeyBcbiAgICAgIHNpdGU6ICd0d2l0Y2gnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LnR3aXRjaC50di90d2l0Y2hfc2FuZGllZ28nIFxuICAgIH0sXG4gICAgeyBcbiAgICAgIHNpdGU6ICd0d2l0dGVyJyxcbiAgICAgIGhyZWY6ICdodHRwczovL3R3aXR0ZXIuY29tL1R3aXRjaFNhbkRpZWdvJyBcbiAgICB9LFxuICAgIHtcbiAgICAgIHNpdGU6ICdkaXNjb3JkJyxcbiAgICAgIGhyZWY6ICdodHRwczovL3QuY28vbTB3TExRTm5rOCdcbiAgICB9XG4gIF19XG5dO1xuXG5jb25zdCBmaW5kTmV4dEV2ZW50ID0gKGNpdHksIHVwY29taW5nRXZlbnRzKSA9PiB7XG4gIHJldHVybiB1cGNvbWluZ0V2ZW50cy5maW5kKGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQuY2hhcHRlci5jaXR5ID09PSBjaXR5KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pXG59XG5cbmNvbnN0IENhcmQgPSAoe2dyb3VwTmFtZSwgY2l0eSwgaHJlZiwgdXBjb21pbmdFdmVudHN9KSA9PiB7XG4gIGNvbnN0IGdyb3VwID0gZ3JvdXBzSW5mby5maW5kKGkgPT4gaS5ncm91cE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZ3JvdXBOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgYmFja2dyb3VuZEltYWdlID0gJyc7XG4gIGlmIChncm91cCkge1xuICAgIGJhY2tncm91bmRJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvJHtncm91cC5wYXRofScpO2A7XG5cbiAgfVxuXG4gIGNvbnN0IG5leHRFdmVudEluZm8gPSBmaW5kTmV4dEV2ZW50KGNpdHksIHVwY29taW5nRXZlbnRzKTtcbiAgbGV0IG5leHRFdmVudCA9IHtcbiAgICB0aXRsZTogJ1RCQScsXG4gICAgZGF0ZTogJ0NsaWNrIGhlcmUgZm9yIHVwZGF0ZXMnLFxuICAgIHVybDogaHJlZlxuICB9XG4gIGlmIChuZXh0RXZlbnRJbmZvKSB7XG4gICAgY29uc3Qge3VybCwgc3RhcnRfZGF0ZSwgdGl0bGV9ID0gbmV4dEV2ZW50SW5mbztcblxuICAgIG5leHRFdmVudCA9IHtcbiAgICAgIC4uLm5leHRFdmVudCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGF0ZTogbW9tZW50KHN0YXJ0X2RhdGUpLmZvcm1hdChcIk1NTSBEbyBZWVlZXCIpLFxuICAgICAgdXJsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgICAgPGEgaHJlZj17bmV4dEV2ZW50LnVybH0gbmFtZT17Z3JvdXBOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgIDxoMz57Z3JvdXBOYW1lfTwvaDM+XG4gICAgICAgICAgPGg0Pk5leHQgRXZlbnQ8L2g0PlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJldmVudC10aXRsZVwiPntuZXh0RXZlbnQudGl0bGV9PC9oNT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1kYXRlXCI+e25leHRFdmVudC5kYXRlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICA8U29jaWFsSWNvbnMgbGlua3M9e2dyb3VwLmxpbmtzfS8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGE6bGluayB7IHRleHQtZGVjb3JhdGlvbjogbm9uZSB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzRDI3Njk7XG4gICAgICAgICAgJHtiYWNrZ3JvdW5kSW1hZ2V9XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zLCB0cmFuc2Zvcm0gMjAwbXM7XG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCAzcHggcmdiYSgwLDAsMCwwLjQpKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC44KTtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA4cHggNnB4IHJnYmEoMCwwLDAsMC4zKSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIGg0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDEycHggMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIC5ldmVudC1kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCAuZXZlbnQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xuICAgICAgICAgIC5jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiA4MCVcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgLmV2ZW50LXRpdGxlIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE0NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zcGFuPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXX0= */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/twitchsocal/components/card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.dfaaaf353d1ea1eee4f2.hot-update.js.map
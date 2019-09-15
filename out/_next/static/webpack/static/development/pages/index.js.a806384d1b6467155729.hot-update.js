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
    site: 'twitch',
    href: 'https://www.twitch.tv/twitchla'
  }, {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2982911723", [backgroundImage]]]) + " " + "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("a", {
    href: nextEvent.url,
    name: groupName,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2982911723", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2982911723", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2982911723", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, groupName), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2982911723", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Next Event"), __jsx("h5", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2982911723", [backgroundImage]]]) + " " + "event-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, nextEvent.title), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2982911723", [backgroundImage]]]) + " " + "event-date",
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
    id: "2982911723",
    dynamic: [backgroundImage],
    __self: this
  }, "a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{width:200px;height:300px;padding:18px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#3D2769;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:all 150ms,-webkit-transform 200ms;-webkit-transition:all 150ms,transform 200ms;transition:all 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;text-shadow:0 2px 10px rgba(0,0,0,0.8);word-break:break-word;}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector .event-date.__jsx-style-dynamic-selector{font-size:18px;color:#fff;font-weight:400;-webkit-text-decoration:overline;text-decoration:overline;margin-top:8px;display:block;}.card.__jsx-style-dynamic-selector .event-title.__jsx-style-dynamic-selector{font-weight:700;font-size:2em;margin:12px 0 0;overflow:hidden;max-height:180px;line-height:35px;}@media (max-width:840px){.card-container.__jsx-style-dynamic-selector{width:80%;}.card.__jsx-style-dynamic-selector{width:auto;margin-bottom:10px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:28px;}.card.__jsx-style-dynamic-selector .event-title.__jsx-style-dynamic-selector{max-height:145px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvdHdpdGNoc29jYWwvY29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGa0IsQUFFc0MsQUFFZixBQWlCVSxBQUliLEFBUU8sQUFLRCxBQVFDLEFBVWpCLEFBRWMsQUFJSSxBQUdBLEFBR0UsQUFHRixTQTdDTixDQThCWCxDQUdxQixDQXREUixHQWtDRixBQXdCWCxBQUdBLEFBTUEsQ0F0Q2UsQUFhRCxDQXNCZCxHQTFDZSxLQXJCRixDQWtDRyxJQVFBLEFBWWhCLENBekJnQixJQVBBLEdBckJMLElBa0NjLElBUVQsQ0FibEIsRUE1QmtCLENBTlksQ0EyQlYsV0FxQkQsR0F6Q0ksSUFxQlQsU0FSa0MsQ0E2QjdCLEVBcEJuQixlQXFCQSxJQVZpQixlQWhDSSxBQWlDTCxjQUNoQixLQWhDd0IsNENBV3hCLE9BVjZCLDJCQUNXLHVJQUNRLG9HQUMzQixtQkFDb0IsdUNBQ2pCLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvamFyZWRrb3RvZmYvcGVyc29uYWwvZ2l0L3R3aXRjaHNvY2FsL2NvbXBvbmVudHMvY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IFNvY2lhbEljb25zIGZyb20gJy4uL2NvbXBvbmVudHMvc29jaWFsLWljb25zJ1xuXG5jb25zdCBncm91cHNJbmZvID0gW1xuICB7IGdyb3VwTmFtZTogJ1R3aXRjaCBMQScsIHBhdGg6ICdsYS53ZWJwJywgbGlua3M6IFtcbiAgICB7IFxuICAgICAgc2l0ZTogJ3R3aXRjaCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly93d3cudHdpdGNoLnR2L3R3aXRjaGxhJyBcbiAgICB9LFxuICAgIHsgXG4gICAgICBzaXRlOiAndHdpdHRlcicsXG4gICAgICBocmVmOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9Ud2l0Y2hMb3NBbmdlbGUnIFxuICAgIH0sXG4gICAge1xuICAgICAgc2l0ZTogJ2Rpc2NvcmQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vZGlzY29yZC5nZy84RTc1ckE1JyBcbiAgICB9LFxuICAgIHtcbiAgICAgIHNpdGU6ICdpbnN0YWdyYW0nLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHdpdGNoX0xBJ1xuICAgIH1cbiAgXX0sXG4gIHsgZ3JvdXBOYW1lOiAnT0MgU3RyZWFtZXJzJywgcGF0aDogJ29jLndlYnAnLCBsaW5rczogW1xuICAgIHsgXG4gICAgICBzaXRlOiAndHdpdHRlcicsXG4gICAgICBocmVmOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9PQ1N0cmVhbWVycycgXG4gICAgfSxcbiAgICB7XG4gICAgICBzaXRlOiAnZGlzY29yZCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL2E1U1VGVUsnIFxuICAgIH0sXG4gICAge1xuICAgICAgc2l0ZTogJ2luc3RhZ3JhbScsXG4gICAgICBocmVmOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9vY3N0cmVhbWVycydcbiAgICB9XG4gIF19LFxuICB7IGdyb3VwTmFtZTogJ1R3aXRjaCBTRCcsIHBhdGg6ICdzZC53ZWJwJywgbGlua3M6IFtcbiAgICB7IFxuICAgICAgc2l0ZTogJ3R3aXR0ZXInLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vdHdpdHRlci5jb20vVHdpdGNoU2FuRGllZ28nIFxuICAgIH0sXG4gICAge1xuICAgICAgc2l0ZTogJ2Rpc2NvcmQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vdC5jby9tMHdMTFFObms4J1xuICAgIH1cbiAgXX1cbl07XG5cbmNvbnN0IGZpbmROZXh0RXZlbnQgPSAoY2l0eSwgdXBjb21pbmdFdmVudHMpID0+IHtcbiAgcmV0dXJuIHVwY29taW5nRXZlbnRzLmZpbmQoZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5jaGFwdGVyLmNpdHkgPT09IGNpdHkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSlcbn1cblxuY29uc3QgQ2FyZCA9ICh7Z3JvdXBOYW1lLCBjaXR5LCBocmVmLCB1cGNvbWluZ0V2ZW50c30pID0+IHtcbiAgY29uc3QgZ3JvdXAgPSBncm91cHNJbmZvLmZpbmQoaSA9PiBpLmdyb3VwTmFtZS50b0xvd2VyQ2FzZSgpID09PSBncm91cE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgaWYgKGdyb3VwKSB7XG4gICAgYmFja2dyb3VuZEltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy8ke2dyb3VwLnBhdGh9Jyk7YDtcblxuICB9XG5cbiAgY29uc3QgbmV4dEV2ZW50SW5mbyA9IGZpbmROZXh0RXZlbnQoY2l0eSwgdXBjb21pbmdFdmVudHMpO1xuICBsZXQgbmV4dEV2ZW50ID0ge1xuICAgIHRpdGxlOiAnVEJBJyxcbiAgICBkYXRlOiAnQ2xpY2sgaGVyZSBmb3IgdXBkYXRlcycsXG4gICAgdXJsOiBocmVmXG4gIH1cbiAgaWYgKG5leHRFdmVudEluZm8pIHtcbiAgICBjb25zdCB7dXJsLCBzdGFydF9kYXRlLCB0aXRsZX0gPSBuZXh0RXZlbnRJbmZvO1xuXG4gICAgbmV4dEV2ZW50ID0ge1xuICAgICAgLi4ubmV4dEV2ZW50LFxuICAgICAgdGl0bGUsXG4gICAgICBkYXRlOiBtb21lbnQoc3RhcnRfZGF0ZSkuZm9ybWF0KFwiTU1NIERvIFlZWVlcIiksXG4gICAgICB1cmxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgICA8YSBocmVmPXtuZXh0RXZlbnQudXJsfSBuYW1lPXtncm91cE5hbWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICAgICAgPGgzPntncm91cE5hbWV9PC9oMz5cbiAgICAgICAgICA8aDQ+TmV4dCBFdmVudDwvaDQ+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImV2ZW50LXRpdGxlXCI+e25leHRFdmVudC50aXRsZX08L2g1PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57bmV4dEV2ZW50LmRhdGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICAgIDxTb2NpYWxJY29ucyBsaW5rcz17Z3JvdXAubGlua3N9Lz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYTpsaW5rIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzNEMjc2OTtcbiAgICAgICAgICAke2JhY2tncm91bmRJbWFnZX1cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMsIHRyYW5zZm9ybSAyMDBtcztcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDNweCByZ2JhKDAsMCwwLDAuNCkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjgpO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDhweCA2cHggcmdiYSgwLDAsMCwwLjMpKTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTJweCAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgLmV2ZW50LWRhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIC5ldmVudC10aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICBtYXJnaW46IDEycHggMCAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgLmNhcmQtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDgwJVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCAuZXZlbnQtdGl0bGUge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NwYW4+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdfQ== */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/twitchsocal/components/card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.a806384d1b6467155729.hot-update.js.map
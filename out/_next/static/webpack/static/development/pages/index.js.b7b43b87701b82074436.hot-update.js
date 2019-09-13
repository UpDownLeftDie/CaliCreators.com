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

var _jsxFileName = "/Users/jaredkotoff/personal/git/twitchsocal/components/card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // import Link from 'next/link'

var images = [{
  groupName: 'Twitch LA',
  path: 'la.webp'
}, {
  groupName: 'OC Streamers',
  path: 'oc.webp'
}, {
  groupName: 'Twitch SD',
  path: 'sd.webp'
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
  var img = images.find(function (i) {
    return i.groupName.toLowerCase() === groupName.toLowerCase();
  });
  var backgroundImage = '';
  if (img) backgroundImage = "background-image: url('/static/".concat(img.path, "');");
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("a", {
    href: nextEvent.url,
    name: groupName,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3081847841", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3081847841", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3081847841", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, groupName), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3081847841", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Next Event"), __jsx("h5", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3081847841", [backgroundImage]]]) + " " + "event-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, nextEvent.title), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3081847841", [backgroundImage]]]) + " " + "event-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, nextEvent.date))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3081847841",
    dynamic: [backgroundImage],
    __self: this
  }, "a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{padding:18px;width:200px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:filter 150ms,-webkit-transform 200ms;-webkit-transition:filter 150ms,transform 200ms;transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;text-shadow:0 2px 10px rgba(0,0,0,0.8);}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector .event-date.__jsx-style-dynamic-selector{font-size:18px;color:#fff;font-weight:400;-webkit-text-decoration:overline;text-decoration:overline;margin-top:8px;display:block;}.card.__jsx-style-dynamic-selector .event-title.__jsx-style-dynamic-selector{font-weight:700;font-size:2em;margin:12px 0 0;overlflow:hidden;max-height:185px;}@media (max-width:840px){a.__jsx-style-dynamic-selector{width:80%;}.card.__jsx-style-dynamic-selector{width:auto;margin-bottom:25px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:28px;}.card.__jsx-style-dynamic-selector .event-title.__jsx-style-dynamic-selector{max-height:160px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvdHdpdGNoc29jYWwvY29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEa0IsQUFFc0MsQUFFZCxBQWdCUyxBQUliLEFBUU8sQUFLRCxBQVFDLEFBT0gsQUFFQSxBQUlJLEFBR0EsQUFHRSxBQUdGLFNBMUNOLENBMkJHLENBR08sRUFsRFQsRUFpQ0QsQUFxQlgsQUFHQSxBQU1BLENBbkNlLEFBYUQsQ0FtQmQsR0F2Q2UsS0FwQkYsQ0FpQ0csSUFRQSxBQVNoQixDQXRCZ0IsSUFQQSxHQXBCTCxJQWlDYyxJQVFSLENBYm5CLEVBM0JrQixDQU5ZLENBMEJWLFlBcUJELEVBeENJLElBb0JULFNBUmtDLEVBNkJoRCxDQXBCQSxtQkFXaUIsZUEvQkksQUFnQ0wsY0FDaEIsS0EvQndCLDRDQVV4QixPQVQ2QiwyQkFDYyxnSkFDSyxvR0FDM0IsbUJBQ29CLHVDQUN6QyIsImZpbGUiOiIvVXNlcnMvamFyZWRrb3RvZmYvcGVyc29uYWwvZ2l0L3R3aXRjaHNvY2FsL2NvbXBvbmVudHMvY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtncm91cE5hbWU6ICdUd2l0Y2ggTEEnLCBwYXRoOiAnbGEud2VicCd9LFxuICB7Z3JvdXBOYW1lOiAnT0MgU3RyZWFtZXJzJywgcGF0aDogJ29jLndlYnAnfSxcbiAge2dyb3VwTmFtZTogJ1R3aXRjaCBTRCcsIHBhdGg6ICdzZC53ZWJwJ31cbl07XG5cbmNvbnN0IGZpbmROZXh0RXZlbnQgPSAoY2l0eSwgdXBjb21pbmdFdmVudHMpID0+IHtcbiAgcmV0dXJuIHVwY29taW5nRXZlbnRzLmZpbmQoZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5jaGFwdGVyLmNpdHkgPT09IGNpdHkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSlcbn1cblxuY29uc3QgQ2FyZCA9ICh7Z3JvdXBOYW1lLCBjaXR5LCBocmVmLCB1cGNvbWluZ0V2ZW50c30pID0+IHtcbiAgbGV0IGltZyA9IGltYWdlcy5maW5kKGkgPT4gaS5ncm91cE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZ3JvdXBOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgYmFja2dyb3VuZEltYWdlID0gJyc7XG4gIGlmIChpbWcpIGJhY2tncm91bmRJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvJHtpbWcucGF0aH0nKTtgO1xuXG4gIGNvbnN0IG5leHRFdmVudEluZm8gPSBmaW5kTmV4dEV2ZW50KGNpdHksIHVwY29taW5nRXZlbnRzKTtcbiAgbGV0IG5leHRFdmVudCA9IHtcbiAgICB0aXRsZTogJ1RCQScsXG4gICAgZGF0ZTogJ0NsaWNrIGhlcmUgZm9yIHVwZGF0ZXMnLFxuICAgIHVybDogaHJlZlxuICB9XG4gIGlmIChuZXh0RXZlbnRJbmZvKSB7XG4gICAgY29uc3Qge3VybCwgc3RhcnRfZGF0ZSwgdGl0bGV9ID0gbmV4dEV2ZW50SW5mbztcblxuICAgIG5leHRFdmVudCA9IHtcbiAgICAgIC4uLm5leHRFdmVudCxcbiAgICAgIHRpdGxlLFxuICAgICAgZGF0ZTogbW9tZW50KHN0YXJ0X2RhdGUpLmZvcm1hdChcIk1NTSBEbyBZWVlZXCIpLFxuICAgICAgdXJsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGEgaHJlZj17bmV4dEV2ZW50LnVybH0gbmFtZT17Z3JvdXBOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgIDxoMz57Z3JvdXBOYW1lfTwvaDM+XG4gICAgICAgICAgPGg0Pk5leHQgRXZlbnQ8L2g0PlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJldmVudC10aXRsZVwiPntuZXh0RXZlbnQudGl0bGV9PC9oNT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1kYXRlXCI+e25leHRFdmVudC5kYXRlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+ICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYTpsaW5rIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzY2MDAwMDtcbiAgICAgICAgICAke2JhY2tncm91bmRJbWFnZX1cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTUwbXMsIHRyYW5zZm9ybSAyMDBtcztcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDNweCByZ2JhKDAsMCwwLDAuNCkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjgpO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA4cHggNnB4IHJnYmEoMCwwLDAsMC4zKSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIGg0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDEycHggMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIC5ldmVudC1kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCAuZXZlbnQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMDtcbiAgICAgICAgICBvdmVybGZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxODVweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICBhIHsgd2lkdGg6IDgwJSB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgLmV2ZW50LXRpdGxlIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdfQ== */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/twitchsocal/components/card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.b7b43b87701b82074436.hot-update.js.map
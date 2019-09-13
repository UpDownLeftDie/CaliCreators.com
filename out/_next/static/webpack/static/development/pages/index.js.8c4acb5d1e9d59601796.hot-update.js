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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["807994549", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["807994549", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["807994549", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, groupName), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["807994549", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Next Event"), __jsx("h5", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["807994549", [backgroundImage]]]) + " " + "event-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, nextEvent.title), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["807994549", [backgroundImage]]]) + " " + "event-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, nextEvent.date))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "807994549",
    dynamic: [backgroundImage],
    __self: this
  }, "a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{padding:18px;width:200px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:filter 150ms,-webkit-transform 200ms;-webkit-transition:filter 150ms,transform 200ms;transition:filter 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;text-shadow:0 2px 10px rgba(0,0,0,0.8);word-break:break-word;}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3));}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector .event-date.__jsx-style-dynamic-selector{font-size:18px;color:#fff;font-weight:400;-webkit-text-decoration:overline;text-decoration:overline;margin-top:8px;display:block;}.card.__jsx-style-dynamic-selector .event-title.__jsx-style-dynamic-selector{font-weight:700;font-size:2em;margin:12px 0 0;overflow:hidden;max-height:185px;}@media (max-width:840px){a.__jsx-style-dynamic-selector{width:80%;}.card.__jsx-style-dynamic-selector{width:auto;margin-bottom:25px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:28px;}.card.__jsx-style-dynamic-selector .event-title.__jsx-style-dynamic-selector{max-height:160px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvdHdpdGNoc29jYWwvY29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEa0IsQUFFc0MsQUFFZCxBQWlCUyxBQUliLEFBUU8sQUFLRCxBQVFDLEFBT0gsQUFFQSxBQUlJLEFBR0EsQUFHRSxBQUdGLFNBMUNOLENBMkJHLENBR08sRUFuRFQsRUFrQ0QsQUFxQlgsQUFHQSxBQU1BLENBbkNlLEFBYUQsQ0FtQmQsR0F2Q2UsS0FyQkYsQ0FrQ0csSUFRQSxBQVNoQixDQXRCZ0IsSUFQQSxHQXJCTCxJQWtDYyxJQVFULENBYmxCLEVBNUJrQixDQU5ZLENBMkJWLFdBcUJELEdBekNJLElBcUJULFNBUmtDLENBNkJoRCxFQXBCQSxtQkFXaUIsZUFoQ0ksQUFpQ0wsY0FDaEIsS0FoQ3dCLDRDQVd4QixPQVY2QiwyQkFDYyxnSkFDSyxvR0FDM0IsbUJBQ29CLHVDQUNqQixzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2phcmVka290b2ZmL3BlcnNvbmFsL2dpdC90d2l0Y2hzb2NhbC9jb21wb25lbnRzL2NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgaW1hZ2VzID0gW1xuICB7Z3JvdXBOYW1lOiAnVHdpdGNoIExBJywgcGF0aDogJ2xhLndlYnAnfSxcbiAge2dyb3VwTmFtZTogJ09DIFN0cmVhbWVycycsIHBhdGg6ICdvYy53ZWJwJ30sXG4gIHtncm91cE5hbWU6ICdUd2l0Y2ggU0QnLCBwYXRoOiAnc2Qud2VicCd9XG5dO1xuXG5jb25zdCBmaW5kTmV4dEV2ZW50ID0gKGNpdHksIHVwY29taW5nRXZlbnRzKSA9PiB7XG4gIHJldHVybiB1cGNvbWluZ0V2ZW50cy5maW5kKGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQuY2hhcHRlci5jaXR5ID09PSBjaXR5KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pXG59XG5cbmNvbnN0IENhcmQgPSAoe2dyb3VwTmFtZSwgY2l0eSwgaHJlZiwgdXBjb21pbmdFdmVudHN9KSA9PiB7XG4gIGxldCBpbWcgPSBpbWFnZXMuZmluZChpID0+IGkuZ3JvdXBOYW1lLnRvTG93ZXJDYXNlKCkgPT09IGdyb3VwTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IGJhY2tncm91bmRJbWFnZSA9ICcnO1xuICBpZiAoaW1nKSBiYWNrZ3JvdW5kSW1hZ2UgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljLyR7aW1nLnBhdGh9Jyk7YDtcblxuICBjb25zdCBuZXh0RXZlbnRJbmZvID0gZmluZE5leHRFdmVudChjaXR5LCB1cGNvbWluZ0V2ZW50cyk7XG4gIGxldCBuZXh0RXZlbnQgPSB7XG4gICAgdGl0bGU6ICdUQkEnLFxuICAgIGRhdGU6ICdDbGljayBoZXJlIGZvciB1cGRhdGVzJyxcbiAgICB1cmw6IGhyZWZcbiAgfVxuICBpZiAobmV4dEV2ZW50SW5mbykge1xuICAgIGNvbnN0IHt1cmwsIHN0YXJ0X2RhdGUsIHRpdGxlfSA9IG5leHRFdmVudEluZm87XG5cbiAgICBuZXh0RXZlbnQgPSB7XG4gICAgICAuLi5uZXh0RXZlbnQsXG4gICAgICB0aXRsZSxcbiAgICAgIGRhdGU6IG1vbWVudChzdGFydF9kYXRlKS5mb3JtYXQoXCJNTU0gRG8gWVlZWVwiKSxcbiAgICAgIHVybFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhIGhyZWY9e25leHRFdmVudC51cmx9IG5hbWU9e2dyb3VwTmFtZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cbiAgICAgICAgICA8aDM+e2dyb3VwTmFtZX08L2gzPlxuICAgICAgICAgIDxoND5OZXh0IEV2ZW50PC9oND5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZXZlbnQtdGl0bGVcIj57bmV4dEV2ZW50LnRpdGxlfTwvaDU+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtZGF0ZVwiPntuZXh0RXZlbnQuZGF0ZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPiAgXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGE6bGluayB7IHRleHQtZGVjb3JhdGlvbjogbm9uZSB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjAwMDA7XG4gICAgICAgICAgJHtiYWNrZ3JvdW5kSW1hZ2V9XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDE1MG1zLCB0cmFuc2Zvcm0gMjAwbXM7XG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCAzcHggcmdiYSgwLDAsMCwwLjQpKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC44KTtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA4cHggNnB4IHJnYmEoMCwwLDAsMC4zKSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIGg0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDEycHggMCAwO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkIC5ldmVudC1kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZCAuZXZlbnQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDE4NXB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xuICAgICAgICAgIGEgeyB3aWR0aDogODAlIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCAuZXZlbnQtdGl0bGUge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19 */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/twitchsocal/components/card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.8c4acb5d1e9d59601796.hot-update.js.map
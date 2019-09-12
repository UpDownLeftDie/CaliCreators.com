webpackHotUpdate("static\\development\\pages\\index.js",{

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

var _jsxFileName = "C:\\Users\\jared\\twitch-socal\\components\\card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // import Link from 'next/link'

var images = [{
  groupName: 'Twitch LA',
  path: 'la.jpg'
}, {
  groupName: 'OC Streamers',
  path: 'oc.jpg'
}, {
  groupName: 'Twitch SD',
  path: 'sd.jpg'
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
    date: '',
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["944115707", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["944115707", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["944115707", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, groupName), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["944115707", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Next Event"), __jsx("h5", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["944115707", [backgroundImage]]]) + " " + "event-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, nextEvent.title), nextEvent.date ? __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["944115707", [backgroundImage]]]) + " " + "event-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, nextEvent.date) : '')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "944115707",
    dynamic: [backgroundImage],
    __self: this
  }, "a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{padding:18px;width:200px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:all 150ms,-webkit-transform 200ms;-webkit-transition:all 150ms,transform 200ms;transition:all 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;text-shadow:0 2px 10px rgba(0,0,0,0.8);}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3)) blur(0.5em);filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3)) blur(0.5em);}.card.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::after{content:\"test\";display:block;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector .event-date.__jsx-style-dynamic-selector{font-size:18px;color:#fff;font-weight:400;-webkit-text-decoration:overline;text-decoration:overline;margin-top:8px;display:block;}.card.__jsx-style-dynamic-selector h5.__jsx-style-dynamic-selector{font-weight:700;font-size:2em;margin:12px 0 0;}@media (max-width:840px){a.__jsx-style-dynamic-selector{width:80%;}.card.__jsx-style-dynamic-selector{width:auto;margin-bottom:25px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:28px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGtCLEFBRXNDLEFBRWQsQUFnQlMsQUFJUCxBQUlOLEFBUU8sQUFLRCxBQVFDLEFBS0gsQUFFQSxBQUlJLEFBR0EsQUFHQSxTQXJDTixDQXlCRyxDQUdPLEVBcERULEVBb0JFLEFBaUJILEFBbUJYLEFBR0EsQUFHQSxDQTlCZSxBQWFELElBcEJDLEtBeEJGLENBcUNHLEdBakJsQixDQXlCa0IsQUFPaEIsQ0FwQmdCLElBUEEsR0F4QkwsSUFxQ2MsSUFRM0IsQ0FiQSxFQS9Ca0IsQ0FOWSxDQThCVixjQXZCRyxJQXdCVCxTQVo4QyxHQWE1RCxtQkFXaUIsZUFuQ0ksQUFvQ0wsY0FDaEIsS0FuQ3dCLG1EQUNLLGlCQVM3QixVQVJ3Qyx1SUFDUSxvR0FDM0IsbUJBQ29CLHVDQUN6QyIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFx0d2l0Y2gtc29jYWxcXGNvbXBvbmVudHNcXGNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAge2dyb3VwTmFtZTogJ1R3aXRjaCBMQScsIHBhdGg6ICdsYS5qcGcnfSxcclxuICB7Z3JvdXBOYW1lOiAnT0MgU3RyZWFtZXJzJywgcGF0aDogJ29jLmpwZyd9LFxyXG4gIHtncm91cE5hbWU6ICdUd2l0Y2ggU0QnLCBwYXRoOiAnc2QuanBnJ31cclxuXTtcclxuXHJcbmNvbnN0IGZpbmROZXh0RXZlbnQgPSAoY2l0eSwgdXBjb21pbmdFdmVudHMpID0+IHtcclxuICByZXR1cm4gdXBjb21pbmdFdmVudHMuZmluZChldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY2hhcHRlci5jaXR5ID09PSBjaXR5KSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBDYXJkID0gKHtncm91cE5hbWUsIGNpdHksIGhyZWYsIHVwY29taW5nRXZlbnRzfSkgPT4ge1xyXG4gIGxldCBpbWcgPSBpbWFnZXMuZmluZChpID0+IGkuZ3JvdXBOYW1lLnRvTG93ZXJDYXNlKCkgPT09IGdyb3VwTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICBsZXQgYmFja2dyb3VuZEltYWdlID0gJyc7XHJcbiAgaWYgKGltZykgYmFja2dyb3VuZEltYWdlID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy8ke2ltZy5wYXRofScpO2A7XHJcblxyXG4gIGNvbnN0IG5leHRFdmVudEluZm8gPSBmaW5kTmV4dEV2ZW50KGNpdHksIHVwY29taW5nRXZlbnRzKTtcclxuICBsZXQgbmV4dEV2ZW50ID0ge1xyXG4gICAgdGl0bGU6ICdUQkEnLFxyXG4gICAgZGF0ZTogJycsXHJcbiAgICB1cmw6IGhyZWZcclxuICB9XHJcbiAgaWYgKG5leHRFdmVudEluZm8pIHtcclxuICAgIGNvbnN0IHt1cmwsIHN0YXJ0X2RhdGUsIHRpdGxlfSA9IG5leHRFdmVudEluZm87XHJcblxyXG4gICAgbmV4dEV2ZW50ID0ge1xyXG4gICAgICAuLi5uZXh0RXZlbnQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkYXRlOiBtb21lbnQoc3RhcnRfZGF0ZSkuZm9ybWF0KFwiTU1NIERvIFlZWVlcIiksXHJcbiAgICAgIHVybFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIGhyZWY9e25leHRFdmVudC51cmx9IG5hbWU9e2dyb3VwTmFtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxyXG4gICAgICAgICAgPGgzPntncm91cE5hbWV9PC9oMz5cclxuICAgICAgICAgIDxoND5OZXh0IEV2ZW50PC9oND5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJldmVudC10aXRsZVwiPntuZXh0RXZlbnQudGl0bGV9PC9oNT5cclxuICAgICAgICAgIHtuZXh0RXZlbnQuZGF0ZSA/IDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57bmV4dEV2ZW50LmRhdGV9PC9zcGFuPiA6ICcnIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hPiAgXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhOmxpbmsgeyB0ZXh0LWRlY29yYXRpb246IG5vbmUgfVxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzY2MDAwMDtcclxuICAgICAgICAgICR7YmFja2dyb3VuZEltYWdlfVxyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcywgdHJhbnNmb3JtIDIwMG1zO1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCAzcHggcmdiYSgwLDAsMCwwLjQpKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgOHB4IDZweCByZ2JhKDAsMCwwLDAuMykpIGJsdXIoMC41ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZDpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJ0ZXN0XCI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgLmV2ZW50LWRhdGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBoNSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDEycHggMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAgICAgICAgIGEgeyB3aWR0aDogODAlIH1cclxuICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJkIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\components\\card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.3275ef0e4384f010384b.hot-update.js.map
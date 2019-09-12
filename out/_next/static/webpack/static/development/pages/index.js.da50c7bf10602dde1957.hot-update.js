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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3314093155", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3314093155", [backgroundImage]]]) + " " + 'card-wrapper',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3314093155", [backgroundImage]]]) + " " + 'card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3314093155", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, groupName), __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3314093155", [backgroundImage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Next Event"), __jsx("h5", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3314093155", [backgroundImage]]]) + " " + "event-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, nextEvent.title), nextEvent.date ? __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3314093155", [backgroundImage]]]) + " " + "event-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, nextEvent.date) : ''))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3314093155",
    dynamic: [backgroundImage],
    __self: this
  }, "a.__jsx-style-dynamic-selector:link{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{padding:18px;width:200px;height:300px;color:#fff;text-align:left;-webkit-text-decoration:none;text-decoration:none;background:#660000;".concat(backgroundImage, " background-size:cover;background-position:center;-webkit-transition:all 150ms,-webkit-transform 200ms;-webkit-transition:all 150ms,transform 200ms;transition:all 150ms,transform 200ms;-webkit-filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 3px rgba(0,0,0,0.4));border-radius:20px;text-shadow:0 2px 10px rgba(0,0,0,0.8);}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.06);-ms-transform:scale(1.06);transform:scale(1.06);-webkit-filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3)) blur(0.5em);filter:drop-shadow(0 8px 6px rgba(0,0,0,0.3)) blur(0.5em);}.card-wrapper.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::after{position:absolute;content:\"test\";display:block;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:22px;font-weight:700;position:absolute;bottom:10px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-weight:700;font-size:20px;margin:12px 0 0;}.card.__jsx-style-dynamic-selector .event-date.__jsx-style-dynamic-selector{font-size:18px;color:#fff;font-weight:400;-webkit-text-decoration:overline;text-decoration:overline;margin-top:8px;display:block;}.card.__jsx-style-dynamic-selector h5.__jsx-style-dynamic-selector{font-weight:700;font-size:2em;margin:12px 0 0;}@media (max-width:840px){a.__jsx-style-dynamic-selector{width:80%;}.card.__jsx-style-dynamic-selector{width:auto;margin-bottom:25px;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{font-size:30px;}.card.__jsx-style-dynamic-selector h4.__jsx-style-dynamic-selector{font-size:28px;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{font-size:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBRXNDLEFBRWQsQUFnQlMsQUFJSixBQUtULEFBUU8sQUFLRCxBQVFDLEFBS0gsQUFFQSxBQUlJLEFBR0EsQUFHQSxTQXJDTixDQXlCRyxDQUdPLEVBckRULEVBc0NELEFBbUJYLEFBR0EsQUFHQSxDQTlCZSxBQWFELEVBMUJDLEVBTUEsS0F6QkYsQ0FzQ0csSUFRQSxBQU9oQixDQXBCZ0IsRUFiRixFQU1FLEdBekJMLElBc0NjLElBUTNCLENBMUJBLEFBYUEsRUFoQ2tCLENBTlksQ0ErQlYsY0F4QkcsSUF5QlQsU0FiOEMsR0FjNUQsbUJBV2lCLGVBcENJLEFBcUNMLGNBQ2hCLEtBcEN3QixtREFDSyxpQkFTN0IsVUFSd0MsdUlBQ1Esb0dBQzNCLG1CQUNvQix1Q0FDekMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcdHdpdGNoLXNvY2FsXFxjb21wb25lbnRzXFxjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gIHtncm91cE5hbWU6ICdUd2l0Y2ggTEEnLCBwYXRoOiAnbGEuanBnJ30sXHJcbiAge2dyb3VwTmFtZTogJ09DIFN0cmVhbWVycycsIHBhdGg6ICdvYy5qcGcnfSxcclxuICB7Z3JvdXBOYW1lOiAnVHdpdGNoIFNEJywgcGF0aDogJ3NkLmpwZyd9XHJcbl07XHJcblxyXG5jb25zdCBmaW5kTmV4dEV2ZW50ID0gKGNpdHksIHVwY29taW5nRXZlbnRzKSA9PiB7XHJcbiAgcmV0dXJuIHVwY29taW5nRXZlbnRzLmZpbmQoZXZlbnQgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmNoYXB0ZXIuY2l0eSA9PT0gY2l0eSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgQ2FyZCA9ICh7Z3JvdXBOYW1lLCBjaXR5LCBocmVmLCB1cGNvbWluZ0V2ZW50c30pID0+IHtcclxuICBsZXQgaW1nID0gaW1hZ2VzLmZpbmQoaSA9PiBpLmdyb3VwTmFtZS50b0xvd2VyQ2FzZSgpID09PSBncm91cE5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgbGV0IGJhY2tncm91bmRJbWFnZSA9ICcnO1xyXG4gIGlmIChpbWcpIGJhY2tncm91bmRJbWFnZSA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvJHtpbWcucGF0aH0nKTtgO1xyXG5cclxuICBjb25zdCBuZXh0RXZlbnRJbmZvID0gZmluZE5leHRFdmVudChjaXR5LCB1cGNvbWluZ0V2ZW50cyk7XHJcbiAgbGV0IG5leHRFdmVudCA9IHtcclxuICAgIHRpdGxlOiAnVEJBJyxcclxuICAgIGRhdGU6ICcnLFxyXG4gICAgdXJsOiBocmVmXHJcbiAgfVxyXG4gIGlmIChuZXh0RXZlbnRJbmZvKSB7XHJcbiAgICBjb25zdCB7dXJsLCBzdGFydF9kYXRlLCB0aXRsZX0gPSBuZXh0RXZlbnRJbmZvO1xyXG5cclxuICAgIG5leHRFdmVudCA9IHtcclxuICAgICAgLi4ubmV4dEV2ZW50LFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGF0ZTogbW9tZW50KHN0YXJ0X2RhdGUpLmZvcm1hdChcIk1NTSBEbyBZWVlZXCIpLFxyXG4gICAgICB1cmxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YSBocmVmPXtuZXh0RXZlbnQudXJsfSBuYW1lPXtncm91cE5hbWV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXdyYXBwZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxyXG4gICAgICAgICAgICA8aDM+e2dyb3VwTmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8aDQ+TmV4dCBFdmVudDwvaDQ+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJldmVudC10aXRsZVwiPntuZXh0RXZlbnQudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAge25leHRFdmVudC5kYXRlID8gPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtZGF0ZVwiPntuZXh0RXZlbnQuZGF0ZX08L3NwYW4+IDogJycgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT4gIFxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYTpsaW5rIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lIH1cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjAwMDA7XHJcbiAgICAgICAgICAke2JhY2tncm91bmRJbWFnZX1cclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMsIHRyYW5zZm9ybSAyMDBtcztcclxuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA1cHggM3B4IHJnYmEoMCwwLDAsMC40KSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDhweCA2cHggcmdiYSgwLDAsMCwwLjMpKSBibHVyKDAuNWVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtd3JhcHBlcjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgY29udGVudDogXCJ0ZXN0XCI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBoNCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQgLmV2ZW50LWRhdGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZCBoNSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDEycHggMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAgICAgICAgIGEgeyB3aWR0aDogODAlIH1cclxuICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJkIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\components\\card.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.da50c7bf10602dde1957.hot-update.js.map
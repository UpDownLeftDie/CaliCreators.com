webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/atoms/stream-card.jsx":
/*!******************************************!*\
  !*** ./components/atoms/stream-card.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./components/atoms/card.jsx");
/* harmony import */ var _extralife_member_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extralife-member-buttons */ "./components/atoms/extralife-member-buttons.jsx");
var _s = $RefreshSig$(),
    _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\stream-card.jsx",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function useWindowWidth() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      windowWidth = _useState[0],
      setWindowWidth = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateWidth);
    updateWidth();
    return function () {
      return window.removeEventListener('resize', updateWidth);
    };
  }, []);
  return windowWidth;
}

_s(useWindowWidth, "Zj+xTgnj9/vJvHy3SKqWOQFQUoU=");

var StreamCard = function StreamCard(_ref) {
  _s2();

  var twitchUsername = _ref.twitchUsername,
      timeStart = _ref.timeStart,
      timeEnd = _ref.timeEnd,
      streamIsLive = _ref.streamIsLive,
      streamer = _ref.streamer,
      avatarImageURL = _ref.avatarImageURL,
      links = _ref.links;
  var windowWidth = useWindowWidth();
  var breakPoint = 600;
  var options = {
    hour: 'numeric',
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };
  var startDate = null;
  var endDate = null;
  {
    var tempStart = new Date(timeStart);
    var tempEnd = new Date(timeEnd);
    startDate = tempStart.toLocaleDateString(undefined, options);
    endDate = tempEnd.toLocaleDateString(undefined, options);
  }
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]) + " " + "cardWrapper  ".concat(streamIsLive ? 'isLive' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isGlowing: streamIsLive,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.twitch.tv/".concat(twitchUsername || streamer),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]) + " " + "streamCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(streamer, "'s profile"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]) + " " + "streamerAvatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]) + " " + "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, streamer), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]) + " " + "times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "Starts: "), __jsx("u", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, startDate)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "\xA0Till: "), __jsx("u", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["988171750", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, endDate)))), __jsx(_extralife_member_buttons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    streamIsLive: streamIsLive,
    links: {
      donate: links.donate
    },
    columnLayout: windowWidth > breakPoint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "988171750",
    dynamic: [breakPoint],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{color:black;-webkit-text-decoration:none;text-decoration:none;}.cardWrapper.__jsx-style-dynamic-selector{display:grid;width:80%;min-width:300px;}.streamCard.__jsx-style-dynamic-selector{border-radius:20px;box-sizing:border-box;display:grid;grid-template-columns:1fr 2fr 1fr;grid-auto-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}.isLive.__jsx-style-dynamic-selector{width:100%;}.streamerAvatar.__jsx-style-dynamic-selector{border-radius:50%;border:#000 solid 3px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:start;object-fit:cover;width:100px;max-height:100%;}.isLive.__jsx-style-dynamic-selector .streamerAvatar.__jsx-style-dynamic-selector{border:red solid 3px;}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;place-items:center;}h3.__jsx-style-dynamic-selector{padding:0;margin:0;}@media (max-width:".concat(breakPoint, "px){.streamCard.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;place-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRVMsQUFHeUIsQUFJQyxBQUtNLEFBV1IsQUFHTyxBQVNHLEFBR1IsQUFPSCxBQUtLLFVBSk4sQ0F0QlgsQ0FwQnVCLENBSVgsS0FtQlksQ0FkQSxBQWtDeEIsRUFYQSxFQTNCa0IsZ0JBQ2xCLENBa0JvQixDQWRMLGFBQ3FCLFFBVnBDLFlBa0N3QixBQVlFLGNBbkNGLHNCQUNILENBWUEsbUJBQ0YsaUJBQ0wsS0FTTyxBQVlFLE9BcEJMLFlBU2xCLEFBWUEsSUFwQkEsNEJBZmdCLGNBQ08scUJBQ0wsd0NBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzdHJpbmcsIGJvb2wsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCBFeHRyYUxpZmVNZW1iZXJCdXR0b25zIGZyb20gJy4vZXh0cmFsaWZlLW1lbWJlci1idXR0b25zJztcclxuXHJcbmZ1bmN0aW9uIHVzZVdpbmRvd1dpZHRoKCkge1xyXG4gIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVdpZHRoKCkge1xyXG4gICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlV2lkdGgpO1xyXG4gICAgdXBkYXRlV2lkdGgoKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlV2lkdGgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gd2luZG93V2lkdGg7XHJcbn1cclxuXHJcbmNvbnN0IFN0cmVhbUNhcmQgPSAoe1xyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHRpbWVTdGFydCxcclxuICB0aW1lRW5kLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICBzdHJlYW1lcixcclxuICBhdmF0YXJJbWFnZVVSTCxcclxuICBsaW5rcyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gdXNlV2luZG93V2lkdGgoKTtcclxuICBjb25zdCBicmVha1BvaW50ID0gNjAwO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICB3ZWVrZGF5OiAnc2hvcnQnLFxyXG4gICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICB9O1xyXG4gIGxldCBzdGFydERhdGUgPSBudWxsO1xyXG4gIGxldCBlbmREYXRlID0gbnVsbDtcclxuICB7XHJcbiAgICBjb25zdCB0ZW1wU3RhcnQgPSBuZXcgRGF0ZSh0aW1lU3RhcnQpO1xyXG4gICAgY29uc3QgdGVtcEVuZCA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gICAgc3RhcnREYXRlID0gdGVtcFN0YXJ0LnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gICAgZW5kRGF0ZSA9IHRlbXBFbmQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmRXcmFwcGVyICAke3N0cmVhbUlzTGl2ZSA/ICdpc0xpdmUnIDogJyd9YH0+XHJcbiAgICAgIDxDYXJkIGlzR2xvd2luZz17c3RyZWFtSXNMaXZlfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lIHx8IHN0cmVhbWVyfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1DYXJkXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdHJlYW1lckF2YXRhclwiXHJcbiAgICAgICAgICAgICAgc3JjPXthdmF0YXJJbWFnZVVSTH1cclxuICAgICAgICAgICAgICBhbHQ9e2Ake3N0cmVhbWVyfSdzIHByb2ZpbGVgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Yj5TdGFydHM6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPHU+e3N0YXJ0RGF0ZX08L3U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiPiZuYnNwO1RpbGw6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPHU+e2VuZERhdGV9PC91PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RXh0cmFMaWZlTWVtYmVyQnV0dG9uc1xyXG4gICAgICAgICAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICAgICAgICAgIGxpbmtzPXt7IGRvbmF0ZTogbGlua3MuZG9uYXRlIH19XHJcbiAgICAgICAgICAgICAgY29sdW1uTGF5b3V0PXt3aW5kb3dXaWR0aCA+IGJyZWFrUG9pbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNhcmRXcmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1DYXJkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc0xpdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lckF2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAjMDAwIHNvbGlkIDNweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzTGl2ZSAuc3RyZWFtZXJBdmF0YXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IHJlZCBzb2xpZCAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lcyB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke2JyZWFrUG9pbnR9cHgpIHtcclxuICAgICAgICAgICAgLnN0cmVhbUNhcmQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxuICBhdmF0YXJJbWFnZVVSTDpcclxuICAgICdodHRwczovL2Fzc2V0cy5kb25vcmRyaXZlLmNvbS9jbGllbnRzL2V4dHJhbGlmZS9pbWcvYXZhdGFyLWNvbnN0aXR1ZW50LWRlZmF1bHQuZ2lmJyxcclxufTtcclxuXHJcblN0cmVhbUNhcmQucHJvcFR5cGVzID0ge1xyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgdGltZVN0YXJ0OiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aW1lRW5kOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3RyZWFtZXI6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcsXHJcbiAgbGlua3M6IHNoYXBlKHtcclxuICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgc3RyZWFtOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\stream-card.jsx */")));
};

_s2(StreamCard, "SMxGJ/jjFm9yFKpSmRkHC6SLq4s=", false, function () {
  return [useWindowWidth];
});

_c = StreamCard;
StreamCard.defaultProps = {
  twitchUsername: null,
  streamIsLive: false,
  avatarImageURL: 'https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif'
};
StreamCard.propTypes = {
  twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  timeStart: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  timeEnd: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  streamIsLive: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  streamer: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  links: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    donate: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    stream: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StreamCard);

var _c;

$RefreshReg$(_c, "StreamCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9zdHJlYW0tY2FyZC5qc3giXSwibmFtZXMiOlsidXNlV2luZG93V2lkdGgiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1cGRhdGVXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlN0cmVhbUNhcmQiLCJ0d2l0Y2hVc2VybmFtZSIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJzdHJlYW1Jc0xpdmUiLCJzdHJlYW1lciIsImF2YXRhckltYWdlVVJMIiwibGlua3MiLCJicmVha1BvaW50Iiwib3B0aW9ucyIsImhvdXIiLCJ3ZWVrZGF5IiwibW9udGgiLCJkYXkiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidGVtcFN0YXJ0IiwiRGF0ZSIsInRlbXBFbmQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ1bmRlZmluZWQiLCJkb25hdGUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsInNoYXBlIiwic3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFFeEJDLCtEQUFlLENBQUMsWUFBTTtBQUNwQixhQUFTQyxXQUFULEdBQXVCO0FBQ3JCRixvQkFBYyxDQUFDRyxNQUFNLENBQUNDLFVBQVIsQ0FBZDtBQUNEOztBQUNERCxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxXQUFsQztBQUNBQSxlQUFXO0FBQ1gsV0FBTztBQUFBLGFBQU1DLE1BQU0sQ0FB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YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLjU5MWI5YTBjOTRhYzgzMGY0MzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc3RyaW5nLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQgRXh0cmFMaWZlTWVtYmVyQnV0dG9ucyBmcm9tICcuL2V4dHJhbGlmZS1tZW1iZXItYnV0dG9ucyc7XHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dXaWR0aCgpIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVXaWR0aCgpIHtcclxuICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICAgIHVwZGF0ZVdpZHRoKCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIHdpbmRvd1dpZHRoO1xyXG59XHJcblxyXG5jb25zdCBTdHJlYW1DYXJkID0gKHtcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICB0aW1lU3RhcnQsXHJcbiAgdGltZUVuZCxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgc3RyZWFtZXIsXHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgbGlua3MsXHJcbn0pID0+IHtcclxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XHJcbiAgY29uc3QgYnJlYWtQb2ludCA9IDYwMDtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgd2Vla2RheTogJ3Nob3J0JyxcclxuICAgIG1vbnRoOiAnc2hvcnQnLFxyXG4gICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgfTtcclxuICBsZXQgc3RhcnREYXRlID0gbnVsbDtcclxuICBsZXQgZW5kRGF0ZSA9IG51bGw7XHJcbiAge1xyXG4gICAgY29uc3QgdGVtcFN0YXJ0ID0gbmV3IERhdGUodGltZVN0YXJ0KTtcclxuICAgIGNvbnN0IHRlbXBFbmQgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICAgIHN0YXJ0RGF0ZSA9IHRlbXBTdGFydC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICAgIGVuZERhdGUgPSB0ZW1wRW5kLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkV3JhcHBlciAgJHtzdHJlYW1Jc0xpdmUgPyAnaXNMaXZlJyA6ICcnfWB9PlxyXG4gICAgICA8Q2FyZCBpc0dsb3dpbmc9e3N0cmVhbUlzTGl2ZX0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZSB8fCBzdHJlYW1lcn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtQ2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RyZWFtZXJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgIHNyYz17YXZhdGFySW1hZ2VVUkx9XHJcbiAgICAgICAgICAgICAgYWx0PXtgJHtzdHJlYW1lcn0ncyBwcm9maWxlYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+e3N0cmVhbWVyfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGI+U3RhcnRzOiA8L2I+XHJcbiAgICAgICAgICAgICAgICAgIDx1PntzdGFydERhdGV9PC91PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Yj4mbmJzcDtUaWxsOiA8L2I+XHJcbiAgICAgICAgICAgICAgICAgIDx1PntlbmREYXRlfTwvdT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEV4dHJhTGlmZU1lbWJlckJ1dHRvbnNcclxuICAgICAgICAgICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgICAgICAgICBsaW5rcz17eyBkb25hdGU6IGxpbmtzLmRvbmF0ZSB9fVxyXG4gICAgICAgICAgICAgIGNvbHVtbkxheW91dD17d2luZG93V2lkdGggPiBicmVha1BvaW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJkV3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtQ2FyZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJBdmF0YXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogIzAwMCBzb2xpZCAzcHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc0xpdmUgLnN0cmVhbWVyQXZhdGFyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGltZXMge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHticmVha1BvaW50fXB4KSB7XHJcbiAgICAgICAgICAgIC5zdHJlYW1DYXJkIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbUNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgYXZhdGFySW1hZ2VVUkw6XHJcbiAgICAnaHR0cHM6Ly9hc3NldHMuZG9ub3Jkcml2ZS5jb20vY2xpZW50cy9leHRyYWxpZmUvaW1nL2F2YXRhci1jb25zdGl0dWVudC1kZWZhdWx0LmdpZicsXHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLnByb3BUeXBlcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG4gIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
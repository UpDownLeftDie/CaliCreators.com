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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]) + " " + "cardWrapper  ".concat(streamIsLive ? 'isLive' : ''),
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
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]) + " " + "streamCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.twitch.tv/".concat(twitchUsername || streamer),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(streamer, "'s profile"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]) + " " + "streamerAvatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]) + " " + "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, streamer), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]) + " " + "times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "Starts: "), __jsx("u", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, startDate)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "\xA0Till: "), __jsx("u", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3072810150", [breakPoint]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, endDate))))), __jsx(_extralife_member_buttons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    streamIsLive: streamIsLive,
    links: {
      donate: links.donate
    },
    columnLayout: windowWidth > breakPoint,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3072810150",
    dynamic: [breakPoint],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{color:black;-webkit-text-decoration:none;text-decoration:none;}.cardWrapper.__jsx-style-dynamic-selector{display:grid;width:80%;min-width:260px;}.streamCard.__jsx-style-dynamic-selector{border-radius:20px;box-sizing:border-box;display:grid;grid-template-columns:auto 100px;grid-auto-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}.isLive.__jsx-style-dynamic-selector{width:100%;}a.__jsx-style-dynamic-selector{display:grid;grid-template-columns:100px auto;grid-auto-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.streamerAvatar.__jsx-style-dynamic-selector{border-radius:50%;border:#000 solid 3px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:start;object-fit:cover;width:100px;max-height:100%;}.isLive.__jsx-style-dynamic-selector .streamerAvatar.__jsx-style-dynamic-selector{border:red solid 3px;}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;place-items:center;}h3.__jsx-style-dynamic-selector{padding:0;margin:0;}@media (max-width:".concat(breakPoint, "px){a.__jsx-style-dynamic-selector,.streamCard.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;place-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRVMsQUFHeUIsQUFJQyxBQUtNLEFBV1IsQUFHRSxBQU1LLEFBU0csQUFHUixBQU9ILEFBS0ssVUFKTixDQTVCWCxDQXBCdUIsQ0FJWCxBQW1CdUIsS0FNWCxDQXBCQSxBQXdDeEIsRUFYQSxFQWpDa0IsZ0JBQ2xCLENBd0JvQixDQXBCTCxLQWNTLFFBYlcsUUFWbkMsTUF3QnFCLE1BZ0JHLEFBWUUsYUF6Q0Ysc0JBQ0gsRUFrQkEsbUJBQ0YsaUJBQ0wsS0FTTyxBQVlFLE9BcEJMLEVBUmxCLFVBaUJBLEFBWUEsSUFwQkEsMkJBckJnQixjQUNPLHFCQUNMLHdDQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFxzdHJlYW0tY2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc3RyaW5nLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQgRXh0cmFMaWZlTWVtYmVyQnV0dG9ucyBmcm9tICcuL2V4dHJhbGlmZS1tZW1iZXItYnV0dG9ucyc7XHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dXaWR0aCgpIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVXaWR0aCgpIHtcclxuICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICAgIHVwZGF0ZVdpZHRoKCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIHdpbmRvd1dpZHRoO1xyXG59XHJcblxyXG5jb25zdCBTdHJlYW1DYXJkID0gKHtcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICB0aW1lU3RhcnQsXHJcbiAgdGltZUVuZCxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgc3RyZWFtZXIsXHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgbGlua3MsXHJcbn0pID0+IHtcclxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XHJcbiAgY29uc3QgYnJlYWtQb2ludCA9IDYwMDtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgd2Vla2RheTogJ3Nob3J0JyxcclxuICAgIG1vbnRoOiAnc2hvcnQnLFxyXG4gICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgfTtcclxuICBsZXQgc3RhcnREYXRlID0gbnVsbDtcclxuICBsZXQgZW5kRGF0ZSA9IG51bGw7XHJcbiAge1xyXG4gICAgY29uc3QgdGVtcFN0YXJ0ID0gbmV3IERhdGUodGltZVN0YXJ0KTtcclxuICAgIGNvbnN0IHRlbXBFbmQgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICAgIHN0YXJ0RGF0ZSA9IHRlbXBTdGFydC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICAgIGVuZERhdGUgPSB0ZW1wRW5kLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkV3JhcHBlciAgJHtzdHJlYW1Jc0xpdmUgPyAnaXNMaXZlJyA6ICcnfWB9PlxyXG4gICAgICA8Q2FyZCBpc0dsb3dpbmc9e3N0cmVhbUlzTGl2ZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1DYXJkXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lIHx8IHN0cmVhbWVyfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdHJlYW1lckF2YXRhclwiXHJcbiAgICAgICAgICAgICAgc3JjPXthdmF0YXJJbWFnZVVSTH1cclxuICAgICAgICAgICAgICBhbHQ9e2Ake3N0cmVhbWVyfSdzIHByb2ZpbGVgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Yj5TdGFydHM6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPHU+e3N0YXJ0RGF0ZX08L3U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiPiZuYnNwO1RpbGw6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPHU+e2VuZERhdGV9PC91PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPEV4dHJhTGlmZU1lbWJlckJ1dHRvbnNcclxuICAgICAgICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgICAgICAgIGxpbmtzPXt7IGRvbmF0ZTogbGlua3MuZG9uYXRlIH19XHJcbiAgICAgICAgICAgIGNvbHVtbkxheW91dD17d2luZG93V2lkdGggPiBicmVha1BvaW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZFdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbUNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTAwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyQXZhdGFyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6ICMwMDAgc29saWQgM3B4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIC5zdHJlYW1lckF2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogcmVkIHNvbGlkIDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWVzIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7YnJlYWtQb2ludH1weCkge1xyXG4gICAgICAgICAgICBhLCAuc3RyZWFtQ2FyZCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIGF2YXRhckltYWdlVVJMOlxyXG4gICAgJ2h0dHBzOi8vYXNzZXRzLmRvbm9yZHJpdmUuY29tL2NsaWVudHMvZXh0cmFsaWZlL2ltZy9hdmF0YXItY29uc3RpdHVlbnQtZGVmYXVsdC5naWYnLFxyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZyxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8vIHN0cmVhbTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbUNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\stream-card.jsx */")));
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
    donate: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired // stream: string.isRequired,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9zdHJlYW0tY2FyZC5qc3giXSwibmFtZXMiOlsidXNlV2luZG93V2lkdGgiLCJ1c2VTdGF0ZSIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1cGRhdGVXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlN0cmVhbUNhcmQiLCJ0d2l0Y2hVc2VybmFtZSIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJzdHJlYW1Jc0xpdmUiLCJzdHJlYW1lciIsImF2YXRhckltYWdlVVJMIiwibGlua3MiLCJicmVha1BvaW50Iiwib3B0aW9ucyIsImhvdXIiLCJ3ZWVrZGF5IiwibW9udGgiLCJkYXkiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidGVtcFN0YXJ0IiwiRGF0ZSIsInRlbXBFbmQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ1bmRlZmluZWQiLCJkb25hdGUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFFeEJDLCtEQUFlLENBQUMsWUFBTTtBQUNwQixhQUFTQyxXQUFULEdBQXVCO0FBQ3JCRixvQkFBYyxDQUFDRyxNQUFNLENBQUNDLFVBQVIsQ0FBZDtBQUNEOztBQUNERCxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxXQUFsQztBQUNBQSxlQUFXO0FBQ1gsV0FBTztBQUFBLGFBQU1DLE1BQU0sQ0FBQ0csbUJBQVAs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cm91cF0vZXh0cmFsaWZlLjdjZjI4NmYxMWEzOTFhNWM5YTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc3RyaW5nLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQgRXh0cmFMaWZlTWVtYmVyQnV0dG9ucyBmcm9tICcuL2V4dHJhbGlmZS1tZW1iZXItYnV0dG9ucyc7XHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dXaWR0aCgpIHtcclxuICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVXaWR0aCgpIHtcclxuICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICAgIHVwZGF0ZVdpZHRoKCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVdpZHRoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIHdpbmRvd1dpZHRoO1xyXG59XHJcblxyXG5jb25zdCBTdHJlYW1DYXJkID0gKHtcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICB0aW1lU3RhcnQsXHJcbiAgdGltZUVuZCxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgc3RyZWFtZXIsXHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgbGlua3MsXHJcbn0pID0+IHtcclxuICBjb25zdCB3aW5kb3dXaWR0aCA9IHVzZVdpbmRvd1dpZHRoKCk7XHJcbiAgY29uc3QgYnJlYWtQb2ludCA9IDYwMDtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgd2Vla2RheTogJ3Nob3J0JyxcclxuICAgIG1vbnRoOiAnc2hvcnQnLFxyXG4gICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgfTtcclxuICBsZXQgc3RhcnREYXRlID0gbnVsbDtcclxuICBsZXQgZW5kRGF0ZSA9IG51bGw7XHJcbiAge1xyXG4gICAgY29uc3QgdGVtcFN0YXJ0ID0gbmV3IERhdGUodGltZVN0YXJ0KTtcclxuICAgIGNvbnN0IHRlbXBFbmQgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICAgIHN0YXJ0RGF0ZSA9IHRlbXBTdGFydC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICAgIGVuZERhdGUgPSB0ZW1wRW5kLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkV3JhcHBlciAgJHtzdHJlYW1Jc0xpdmUgPyAnaXNMaXZlJyA6ICcnfWB9PlxyXG4gICAgICA8Q2FyZCBpc0dsb3dpbmc9e3N0cmVhbUlzTGl2ZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1DYXJkXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lIHx8IHN0cmVhbWVyfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdHJlYW1lckF2YXRhclwiXHJcbiAgICAgICAgICAgICAgc3JjPXthdmF0YXJJbWFnZVVSTH1cclxuICAgICAgICAgICAgICBhbHQ9e2Ake3N0cmVhbWVyfSdzIHByb2ZpbGVgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Yj5TdGFydHM6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPHU+e3N0YXJ0RGF0ZX08L3U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiPiZuYnNwO1RpbGw6IDwvYj5cclxuICAgICAgICAgICAgICAgICAgPHU+e2VuZERhdGV9PC91PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPEV4dHJhTGlmZU1lbWJlckJ1dHRvbnNcclxuICAgICAgICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgICAgICAgIGxpbmtzPXt7IGRvbmF0ZTogbGlua3MuZG9uYXRlIH19XHJcbiAgICAgICAgICAgIGNvbHVtbkxheW91dD17d2luZG93V2lkdGggPiBicmVha1BvaW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZFdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbUNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTAwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyQXZhdGFyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6ICMwMDAgc29saWQgM3B4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIC5zdHJlYW1lckF2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogcmVkIHNvbGlkIDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWVzIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR7YnJlYWtQb2ludH1weCkge1xyXG4gICAgICAgICAgICBhLCAuc3RyZWFtQ2FyZCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIGF2YXRhckltYWdlVVJMOlxyXG4gICAgJ2h0dHBzOi8vYXNzZXRzLmRvbm9yZHJpdmUuY29tL2NsaWVudHMvZXh0cmFsaWZlL2ltZy9hdmF0YXItY29uc3RpdHVlbnQtZGVmYXVsdC5naWYnLFxyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZyxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIC8vIHN0cmVhbTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
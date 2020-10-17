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
var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\stream-card.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var StreamCard = function StreamCard(_ref) {
  var twitchUsername = _ref.twitchUsername,
      timeStart = _ref.timeStart,
      timeEnd = _ref.timeEnd,
      streamIsLive = _ref.streamIsLive,
      streamer = _ref.streamer,
      avatarImageURL = _ref.avatarImageURL;
  var avatarUrl = avatarImageURL ? "https:".concat(avatarImageURL) : 'https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif';
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var temp = new Date(timeStart);
  var startDate = temp.toLocaleDateString(undefined, options);
  var endDate = Date.parse(timeEnd);
  console.log(startDate);
  return __jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.twitch.tv/".concat(twitchUsername || streamer),
    className: "jsx-4247340454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4247340454" + " " + "streamCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: avatarUrl,
    alt: "".concat(streamer, "'s profile"),
    className: "jsx-4247340454" + " " + "streamerAvatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-4247340454" + " " + "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-4247340454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, streamer), __jsx("div", {
    className: "jsx-4247340454" + " " + "times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-4247340454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Starts:"), __jsx("div", {
    className: "jsx-4247340454",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Till:")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4247340454",
    __self: _this
  }, ".jsx-4247340454{width:100%;}.streamCard.jsx-4247340454{background:#fff;border-radius:20px;width:80%;padding:15px;display:grid;grid-template-columns:100px auto;grid-template-rows:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}.isLive.jsx-4247340454{width:100%;}.streamerAvatar.jsx-4247340454{border-radius:50%;grid-column-start:1;place-self:center;object-fit:cover;width:100%;max-height:100%;}.right.jsx-4247340454{grid-column-start:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h3.jsx-4247340454{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRFMsQUFFc0IsQUFFTyxBQWFMLEFBR08sQUFRRSxBQUtWLFVBQ0QsQ0FoQlgsQUFvQkYsS0FqQ3VCLEVBZ0JDLENBY3RCLENBTmUsZUF2QkgsR0FnQlEsT0FmTCxXQWdCSSxFQWZKLGFBQ29CLEVBZXRCLFdBQ0ssVUFLTSxNQUp4QixJQWhCMEIsd0JBQ0wsNENBb0JyQixpREFuQmdCLGNBQ08scUJBQ0wsd0NBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgU3RyZWFtQ2FyZCA9ICh7XHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgdGltZVN0YXJ0LFxyXG4gIHRpbWVFbmQsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHN0cmVhbWVyLFxyXG4gIGF2YXRhckltYWdlVVJMLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgYXZhdGFyVXJsID0gYXZhdGFySW1hZ2VVUkxcclxuICAgID8gYGh0dHBzOiR7YXZhdGFySW1hZ2VVUkx9YFxyXG4gICAgOiAnaHR0cHM6Ly9hc3NldHMuZG9ub3Jkcml2ZS5jb20vY2xpZW50cy9leHRyYWxpZmUvaW1nL2F2YXRhci1jb25zdGl0dWVudC1kZWZhdWx0LmdpZic7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICB9O1xyXG4gIGNvbnN0IHRlbXAgPSBuZXcgRGF0ZSh0aW1lU3RhcnQpO1xyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IHRlbXAudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IERhdGUucGFyc2UodGltZUVuZCk7XHJcbiAgY29uc29sZS5sb2coc3RhcnREYXRlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgIGhyZWY9e2BodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZSB8fCBzdHJlYW1lcn1gfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmVhbUNhcmRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdHJlYW1lckF2YXRhclwiXHJcbiAgICAgICAgICBzcmM9e2F2YXRhclVybH1cclxuICAgICAgICAgIGFsdD17YCR7c3RyZWFtZXJ9J3MgcHJvZmlsZWB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8aDM+e3N0cmVhbWVyfTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVzXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgU3RhcnRzOlxyXG4gICAgICAgICAgICAgIHsvKiB7c3RhcnREYXRlLnRvTG9jYWxlRm9ybWF0KCclQSwgJUIgJWUsICVZJyl9ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICBUaWxsOlxyXG4gICAgICAgICAgICAgIHsvKiB7ZW5kRGF0ZX0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIC5zdHJlYW1DYXJkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJBdmF0YXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxufTtcclxuXHJcblN0cmVhbUNhcmQucHJvcFR5cGVzID0ge1xyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgdGltZVN0YXJ0OiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0aW1lRW5kOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3RyZWFtZXI6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbUNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\stream-card.jsx */"));
};

_c = StreamCard;
StreamCard.defaultProps = {
  twitchUsername: null,
  streamIsLive: false
};
StreamCard.propTypes = {
  twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  timeStart: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  timeEnd: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  streamIsLive: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  streamer: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9zdHJlYW0tY2FyZC5qc3giXSwibmFtZXMiOlsiU3RyZWFtQ2FyZCIsInR3aXRjaFVzZXJuYW1lIiwidGltZVN0YXJ0IiwidGltZUVuZCIsInN0cmVhbUlzTGl2ZSIsInN0cmVhbWVyIiwiYXZhdGFySW1hZ2VVUkwiLCJhdmF0YXJVcmwiLCJvcHRpb25zIiwid2Vla2RheSIsInllYXIiLCJtb250aCIsImRheSIsInRlbXAiLCJEYXRlIiwic3RhcnREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidW5kZWZpbmVkIiwiZW5kRGF0ZSIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BT2I7QUFBQSxNQU5KQyxjQU1JLFFBTkpBLGNBTUk7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFNBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxZQUdJLFFBSEpBLFlBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxjQUNJLFFBREpBLGNBQ0k7QUFDSixNQUFNQyxTQUFTLEdBQUdELGNBQWMsbUJBQ25CQSxjQURtQixJQUU1QixvRkFGSjtBQUdBLE1BQU1FLE9BQU8sR0FBRztBQUNkQyxXQUFPLEVBQUUsTUFESztBQUVkQyxRQUFJLEVBQUUsU0FGUTtBQUdkQyxTQUFLLEVBQUUsTUFITztBQUlkQyxPQUFHLEVBQUU7QUFKUyxHQUFoQjtBQU1BLE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNaLFNBQVQsQ0FBYjtBQUNBLE1BQU1hLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxrQkFBTCxDQUF3QkMsU0FBeEIsRUFBbUNULE9BQW5DLENBQWxCO0FBQ0EsTUFBTVUsT0FBTyxHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FBV2hCLE9BQVgsQ0FBaEI7QUFDQWlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaO0FBQ0EsU0FDRTtBQUNFLFVBQU0sRUFBQyxRQURUO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFHRSxRQUFJLGtDQUEyQmQsY0FBYyxJQUFJSSxRQUE3QyxDQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUEsd0NBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFFRSxPQUFHLEVBQUVFLFNBRlA7QUFHRSxPQUFHLFlBQUtGLFFBQUwsZUFITDtBQUFBLHdDQUNZLGdCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUEsd0NBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLFFBQUwsQ0FERixFQUVFO0FBQUEsd0NBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixDQUZGLENBTkYsQ0FMRjtBQUFBO0FBQUE7QUFBQSxveEtBREY7QUFvRUQsQ0F6RkQ7O0tBQU1MLFU7QUEyRk5BLFVBQVUsQ0FBQ3NCLFlBQVgsR0FBMEI7QUFDeEJyQixnQkFBYyxFQUFFLElBRFE7QUFFeEJHLGNBQVksRUFBRTtBQUZVLENBQTFCO0FBS0FKLFVBQVUsQ0FBQ3VCLFNBQVgsR0FBdUI7QUFDckJ0QixnQkFBYyxFQUFFdUIsaURBREs7QUFFckJ0QixXQUFTLEVBQUVzQixpREFBTSxDQUFDQyxVQUZHO0FBR3JCdEIsU0FBTyxFQUFFcUIsaURBQU0sQ0FBQ0MsVUFISztBQUlyQnJCLGNBQVksRUFBRXNCLCtDQUpPO0FBS3JCckIsVUFBUSxFQUFFbUIsaURBQU0sQ0FBQ0MsVUFMSTtBQU1yQm5CLGdCQUFjLEVBQUVrQixpREFBTSxDQUFDQztBQU5GLENBQXZCO0FBU2V6Qix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS5hYzMyYmQ3ODdiYzVmZjAyMGU0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBTdHJlYW1DYXJkID0gKHtcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICB0aW1lU3RhcnQsXHJcbiAgdGltZUVuZCxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgc3RyZWFtZXIsXHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbn0pID0+IHtcclxuICBjb25zdCBhdmF0YXJVcmwgPSBhdmF0YXJJbWFnZVVSTFxyXG4gICAgPyBgaHR0cHM6JHthdmF0YXJJbWFnZVVSTH1gXHJcbiAgICA6ICdodHRwczovL2Fzc2V0cy5kb25vcmRyaXZlLmNvbS9jbGllbnRzL2V4dHJhbGlmZS9pbWcvYXZhdGFyLWNvbnN0aXR1ZW50LWRlZmF1bHQuZ2lmJztcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgbW9udGg6ICdsb25nJyxcclxuICAgIGRheTogJ251bWVyaWMnLFxyXG4gIH07XHJcbiAgY29uc3QgdGVtcCA9IG5ldyBEYXRlKHRpbWVTdGFydCk7XHJcbiAgY29uc3Qgc3RhcnREYXRlID0gdGVtcC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICBjb25zdCBlbmREYXRlID0gRGF0ZS5wYXJzZSh0aW1lRW5kKTtcclxuICBjb25zb2xlLmxvZyhzdGFydERhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lIHx8IHN0cmVhbWVyfWB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtQ2FyZFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN0cmVhbWVyQXZhdGFyXCJcclxuICAgICAgICAgIHNyYz17YXZhdGFyVXJsfVxyXG4gICAgICAgICAgYWx0PXtgJHtzdHJlYW1lcn0ncyBwcm9maWxlYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXNcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICBTdGFydHM6XHJcbiAgICAgICAgICAgICAgey8qIHtzdGFydERhdGUudG9Mb2NhbGVGb3JtYXQoJyVBLCAlQiAlZSwgJVknKX0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIFRpbGw6XHJcbiAgICAgICAgICAgICAgey8qIHtlbmREYXRlfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLnN0cmVhbUNhcmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc0xpdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lckF2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
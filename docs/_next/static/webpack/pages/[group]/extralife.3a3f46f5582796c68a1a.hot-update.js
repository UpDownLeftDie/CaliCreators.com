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
    className: "jsx-3673312720" + " " + "cardWrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isGlowing: streamIsLive,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.twitch.tv/".concat(twitchUsername || streamer),
    className: "jsx-3673312720",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3673312720" + " " + "streamCard ".concat(streamIsLive ? 'isLive' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(streamer, "'s profile"),
    className: "jsx-3673312720" + " " + "streamerAvatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3673312720" + " " + "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-3673312720",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, streamer), __jsx("div", {
    className: "jsx-3673312720" + " " + "times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3673312720",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Starts:\xA0", startDate), __jsx("div", {
    className: "jsx-3673312720",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Till:\xA0", endDate)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3673312720",
    __self: _this
  }, ".cardWrapper.jsx-3673312720{display:grid;width:80%;min-width:300px;}.streamCard.jsx-3673312720{border-radius:20px;box-sizing:border-box;display:grid;grid-template-columns:100px auto;grid-template-rows:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}.isLive.jsx-3673312720{width:100%;}.streamerAvatar.jsx-3673312720{border-radius:50%;grid-column-start:1;place-self:center;object-fit:cover;width:100%;max-height:100%;}.right.jsx-3673312720{grid-column-start:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h3.jsx-3673312720{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RFMsQUFHMEIsQUFLTSxBQVdSLEFBR08sQUFRRSxBQUtWLFVBQ0QsQ0FoQlgsRUFoQlksS0FtQlUsQ0FkRSxBQTRCeEIsQ0FOZSxHQTFCRyxlQW1CRSxDQWxCcEIsRUFJZSxhQUNvQixFQWNoQixpQkFDTixXQUNLLEdBZlEsT0FvQkYsTUFKeEIsV0FmcUIsNkRBb0JyQixnQ0FuQmdCLGNBQ08scUJBQ0wsd0NBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgU3RyZWFtQ2FyZCA9ICh7XHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgdGltZVN0YXJ0LFxyXG4gIHRpbWVFbmQsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHN0cmVhbWVyLFxyXG4gIGF2YXRhckltYWdlVVJMLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgIHdlZWtkYXk6ICdzaG9ydCcsXHJcbiAgICBtb250aDogJ3Nob3J0JyxcclxuICAgIGRheTogJ251bWVyaWMnLFxyXG4gIH07XHJcbiAgbGV0IHN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgbGV0IGVuZERhdGUgPSBudWxsO1xyXG4gIHtcclxuICAgIGNvbnN0IHRlbXBTdGFydCA9IG5ldyBEYXRlKHRpbWVTdGFydCk7XHJcbiAgICBjb25zdCB0ZW1wRW5kID0gbmV3IERhdGUodGltZUVuZCk7XHJcbiAgICBzdGFydERhdGUgPSB0ZW1wU3RhcnQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XHJcbiAgICBlbmREYXRlID0gdGVtcEVuZC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRXcmFwcGVyXCI+XHJcbiAgICAgIDxDYXJkIGlzR2xvd2luZz17c3RyZWFtSXNMaXZlfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lIHx8IHN0cmVhbWVyfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdHJlYW1DYXJkICR7c3RyZWFtSXNMaXZlID8gJ2lzTGl2ZScgOiAnJ31gfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0cmVhbWVyQXZhdGFyXCJcclxuICAgICAgICAgICAgICBzcmM9e2F2YXRhckltYWdlVVJMfVxyXG4gICAgICAgICAgICAgIGFsdD17YCR7c3RyZWFtZXJ9J3MgcHJvZmlsZWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICA8aDM+e3N0cmVhbWVyfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgU3RhcnRzOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICB7c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICBUaWxsOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICB7ZW5kRGF0ZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY2FyZFdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbUNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc0xpdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lckF2YXRhciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbUNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgYXZhdGFySW1hZ2VVUkw6XHJcbiAgICAnaHR0cHM6Ly9hc3NldHMuZG9ub3Jkcml2ZS5jb20vY2xpZW50cy9leHRyYWxpZmUvaW1nL2F2YXRhci1jb25zdGl0dWVudC1kZWZhdWx0LmdpZicsXHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLnByb3BUeXBlcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG4gIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\stream-card.jsx */"));
};

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
  avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9zdHJlYW0tY2FyZC5qc3giXSwibmFtZXMiOlsiU3RyZWFtQ2FyZCIsInR3aXRjaFVzZXJuYW1lIiwidGltZVN0YXJ0IiwidGltZUVuZCIsInN0cmVhbUlzTGl2ZSIsInN0cmVhbWVyIiwiYXZhdGFySW1hZ2VVUkwiLCJvcHRpb25zIiwiaG91ciIsIndlZWtkYXkiLCJtb250aCIsImRheSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ0ZW1wU3RhcnQiLCJEYXRlIiwidGVtcEVuZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BT2I7QUFBQSxNQU5KQyxjQU1JLFFBTkpBLGNBTUk7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFNBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxZQUdJLFFBSEpBLFlBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxjQUNJLFFBREpBLGNBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUc7QUFDZEMsUUFBSSxFQUFFLFNBRFE7QUFFZEMsV0FBTyxFQUFFLE9BRks7QUFHZEMsU0FBSyxFQUFFLE9BSE87QUFJZEMsT0FBRyxFQUFFO0FBSlMsR0FBaEI7QUFNQSxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBO0FBQ0UsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU2IsU0FBVCxDQUFsQjtBQUNBLFFBQU1jLE9BQU8sR0FBRyxJQUFJRCxJQUFKLENBQVNaLE9BQVQsQ0FBaEI7QUFDQVMsYUFBUyxHQUFHRSxTQUFTLENBQUNHLGtCQUFWLENBQTZCQyxTQUE3QixFQUF3Q1gsT0FBeEMsQ0FBWjtBQUNBTSxXQUFPLEdBQUdHLE9BQU8sQ0FBQ0Msa0JBQVIsQ0FBMkJDLFNBQTNCLEVBQXNDWCxPQUF0QyxDQUFWO0FBQ0Q7QUFFRCxTQUNFO0FBQUEsd0NBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFNLGFBQVMsRUFBRUgsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsVUFBTSxFQUFDLFFBRFQ7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUdFLFFBQUksa0NBQTJCSCxjQUFjLElBQUlJLFFBQTdDLENBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBQSw2REFBOEJELFlBQVksR0FBRyxRQUFILEdBQWMsRUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBRUUsT0FBRyxFQUFFRSxjQUZQO0FBR0UsT0FBRyxZQUFLRCxRQUFMLGVBSEw7QUFBQSx3Q0FDWSxnQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxRQUFMLENBREYsRUFFRTtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFR08sU0FGSCxDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVHQyxPQUZILENBTEYsQ0FGRixDQU5GLENBTEYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLCtzTEFERjtBQXdFRCxDQS9GRDs7S0FBTWIsVTtBQWlHTkEsVUFBVSxDQUFDbUIsWUFBWCxHQUEwQjtBQUN4QmxCLGdCQUFjLEVBQUUsSUFEUTtBQUV4QkcsY0FBWSxFQUFFLEtBRlU7QUFHeEJFLGdCQUFjLEVBQ1o7QUFKc0IsQ0FBMUI7QUFPQU4sVUFBVSxDQUFDb0IsU0FBWCxHQUF1QjtBQUNyQm5CLGdCQUFjLEVBQUVvQixpREFESztBQUVyQm5CLFdBQVMsRUFBRW1CLGlEQUFNLENBQUNDLFVBRkc7QUFHckJuQixTQUFPLEVBQUVrQixpREFBTSxDQUFDQyxVQUhLO0FBSXJCbEIsY0FBWSxFQUFFbUIsK0NBSk87QUFLckJsQixVQUFRLEVBQUVnQixpREFBTSxDQUFDQyxVQUxJO0FBTXJCaEIsZ0JBQWMsRUFBRWUsaURBQU1BO0FBTkQsQ0FBdkI7QUFTZXJCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLjNhM2Y0NmY1NTgyNzk2YzY4YTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFN0cmVhbUNhcmQgPSAoe1xyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHRpbWVTdGFydCxcclxuICB0aW1lRW5kLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICBzdHJlYW1lcixcclxuICBhdmF0YXJJbWFnZVVSTCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICB3ZWVrZGF5OiAnc2hvcnQnLFxyXG4gICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICB9O1xyXG4gIGxldCBzdGFydERhdGUgPSBudWxsO1xyXG4gIGxldCBlbmREYXRlID0gbnVsbDtcclxuICB7XHJcbiAgICBjb25zdCB0ZW1wU3RhcnQgPSBuZXcgRGF0ZSh0aW1lU3RhcnQpO1xyXG4gICAgY29uc3QgdGVtcEVuZCA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gICAgc3RhcnREYXRlID0gdGVtcFN0YXJ0LnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gICAgZW5kRGF0ZSA9IHRlbXBFbmQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkV3JhcHBlclwiPlxyXG4gICAgICA8Q2FyZCBpc0dsb3dpbmc9e3N0cmVhbUlzTGl2ZX0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZSB8fCBzdHJlYW1lcn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3RyZWFtQ2FyZCAke3N0cmVhbUlzTGl2ZSA/ICdpc0xpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdHJlYW1lckF2YXRhclwiXHJcbiAgICAgICAgICAgICAgc3JjPXthdmF0YXJJbWFnZVVSTH1cclxuICAgICAgICAgICAgICBhbHQ9e2Ake3N0cmVhbWVyfSdzIHByb2ZpbGVgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGgzPntzdHJlYW1lcn08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXJ0czombmJzcDtcclxuICAgICAgICAgICAgICAgICAge3N0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgVGlsbDombmJzcDtcclxuICAgICAgICAgICAgICAgICAge2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmNhcmRXcmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1DYXJkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNMaXZlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJBdmF0YXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIGF2YXRhckltYWdlVVJMOlxyXG4gICAgJ2h0dHBzOi8vYXNzZXRzLmRvbm9yZHJpdmUuY29tL2NsaWVudHMvZXh0cmFsaWZlL2ltZy9hdmF0YXItY29uc3RpdHVlbnQtZGVmYXVsdC5naWYnLFxyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
    className: "jsx-2192308264" + " " + "cardWrapper  ".concat(streamIsLive ? 'isLive' : ''),
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
    className: "jsx-2192308264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2192308264" + " " + "streamCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(streamer, "'s profile"),
    className: "jsx-2192308264" + " " + "streamerAvatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2192308264" + " " + "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-2192308264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, streamer), __jsx("div", {
    className: "jsx-2192308264" + " " + "times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-2192308264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Starts:\xA0", startDate), __jsx("div", {
    className: "jsx-2192308264",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Till:\xA0", endDate)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2192308264",
    __self: _this
  }, "a.jsx-2192308264{color:black;-webkit-text-decoration:none;text-decoration:none;}.cardWrapper.jsx-2192308264{display:grid;width:80%;min-width:300px;}.streamCard.jsx-2192308264{border-radius:20px;box-sizing:border-box;display:grid;grid-template-columns:100px auto;grid-template-rows:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}.isLive.jsx-2192308264{width:100%;}.streamerAvatar.jsx-2192308264{-webkit-clip-path:circle();clip-path:circle();grid-column-start:1;place-self:center;object-fit:cover;width:100%;max-height:100%;}.right.jsx-2192308264{grid-column-start:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h3.jsx-2192308264{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RFMsQUFHeUIsQUFJQyxBQUtNLEFBV1IsQUFHUSxBQVFDLEFBS1YsVUFDRCxDQWhCWCxDQXBCdUIsQ0FJWCxNQUtZLEFBNEJ4QixDQU5lLEdBMUJHLGdCQUNsQixFQUllLEtBYU8sUUFaYSxRQVZuQyxJQXVCb0Isa0JBQ0QsR0FiTyxPQW9CRixPQU5YLFVBYlEsQ0FjSCxnQkFDbEIsNENBS0EsZ0NBbkJnQixjQUNPLHFCQUNMLHdDQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFxzdHJlYW0tY2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFN0cmVhbUNhcmQgPSAoe1xyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHRpbWVTdGFydCxcclxuICB0aW1lRW5kLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICBzdHJlYW1lcixcclxuICBhdmF0YXJJbWFnZVVSTCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICB3ZWVrZGF5OiAnc2hvcnQnLFxyXG4gICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICB9O1xyXG4gIGxldCBzdGFydERhdGUgPSBudWxsO1xyXG4gIGxldCBlbmREYXRlID0gbnVsbDtcclxuICB7XHJcbiAgICBjb25zdCB0ZW1wU3RhcnQgPSBuZXcgRGF0ZSh0aW1lU3RhcnQpO1xyXG4gICAgY29uc3QgdGVtcEVuZCA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gICAgc3RhcnREYXRlID0gdGVtcFN0YXJ0LnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gICAgZW5kRGF0ZSA9IHRlbXBFbmQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkV3JhcHBlciAgJHtzdHJlYW1Jc0xpdmUgPyAnaXNMaXZlJyA6ICcnfWB9PlxyXG4gICAgICA8Q2FyZCBpc0dsb3dpbmc9e3N0cmVhbUlzTGl2ZX0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZSB8fCBzdHJlYW1lcn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtQ2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RyZWFtZXJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgIHNyYz17YXZhdGFySW1hZ2VVUkx9XHJcbiAgICAgICAgICAgICAgYWx0PXtgJHtzdHJlYW1lcn0ncyBwcm9maWxlYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICBTdGFydHM6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIHtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIFRpbGw6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIHtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJkV3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtQ2FyZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0bztcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzTGl2ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyQXZhdGFyIHtcclxuICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoKTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbUNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgYXZhdGFySW1hZ2VVUkw6XHJcbiAgICAnaHR0cHM6Ly9hc3NldHMuZG9ub3Jkcml2ZS5jb20vY2xpZW50cy9leHRyYWxpZmUvaW1nL2F2YXRhci1jb25zdGl0dWVudC1kZWZhdWx0LmdpZicsXHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLnByb3BUeXBlcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG4gIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\stream-card.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9zdHJlYW0tY2FyZC5qc3giXSwibmFtZXMiOlsiU3RyZWFtQ2FyZCIsInR3aXRjaFVzZXJuYW1lIiwidGltZVN0YXJ0IiwidGltZUVuZCIsInN0cmVhbUlzTGl2ZSIsInN0cmVhbWVyIiwiYXZhdGFySW1hZ2VVUkwiLCJvcHRpb25zIiwiaG91ciIsIndlZWtkYXkiLCJtb250aCIsImRheSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ0ZW1wU3RhcnQiLCJEYXRlIiwidGVtcEVuZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BT2I7QUFBQSxNQU5KQyxjQU1JLFFBTkpBLGNBTUk7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFNBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxZQUdJLFFBSEpBLFlBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxjQUNJLFFBREpBLGNBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUc7QUFDZEMsUUFBSSxFQUFFLFNBRFE7QUFFZEMsV0FBTyxFQUFFLE9BRks7QUFHZEMsU0FBSyxFQUFFLE9BSE87QUFJZEMsT0FBRyxFQUFFO0FBSlMsR0FBaEI7QUFNQSxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBO0FBQ0UsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU2IsU0FBVCxDQUFsQjtBQUNBLFFBQU1jLE9BQU8sR0FBRyxJQUFJRCxJQUFKLENBQVNaLE9BQVQsQ0FBaEI7QUFDQVMsYUFBUyxHQUFHRSxTQUFTLENBQUNHLGtCQUFWLENBQTZCQyxTQUE3QixFQUF3Q1gsT0FBeEMsQ0FBWjtBQUNBTSxXQUFPLEdBQUdHLE9BQU8sQ0FBQ0Msa0JBQVIsQ0FBMkJDLFNBQTNCLEVBQXNDWCxPQUF0QyxDQUFWO0FBQ0Q7QUFFRCxTQUNFO0FBQUEsK0RBQWdDSCxZQUFZLEdBQUcsUUFBSCxHQUFjLEVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQU0sYUFBUyxFQUFFQSxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxVQUFNLEVBQUMsUUFEVDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBR0UsUUFBSSxrQ0FBMkJILGNBQWMsSUFBSUksUUFBN0MsQ0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBLHdDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBRUUsT0FBRyxFQUFFQyxjQUZQO0FBR0UsT0FBRyxZQUFLRCxRQUFMLGVBSEw7QUFBQSx3Q0FDWSxnQkFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxRQUFMLENBREYsRUFFRTtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFR08sU0FGSCxDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVHQyxPQUZILENBTEYsQ0FGRixDQU5GLENBTEYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLG05TEFERjtBQTRFRCxDQW5HRDs7S0FBTWIsVTtBQXFHTkEsVUFBVSxDQUFDbUIsWUFBWCxHQUEwQjtBQUN4QmxCLGdCQUFjLEVBQUUsSUFEUTtBQUV4QkcsY0FBWSxFQUFFLEtBRlU7QUFHeEJFLGdCQUFjLEVBQ1o7QUFKc0IsQ0FBMUI7QUFPQU4sVUFBVSxDQUFDb0IsU0FBWCxHQUF1QjtBQUNyQm5CLGdCQUFjLEVBQUVvQixpREFESztBQUVyQm5CLFdBQVMsRUFBRW1CLGlEQUFNLENBQUNDLFVBRkc7QUFHckJuQixTQUFPLEVBQUVrQixpREFBTSxDQUFDQyxVQUhLO0FBSXJCbEIsY0FBWSxFQUFFbUIsK0NBSk87QUFLckJsQixVQUFRLEVBQUVnQixpREFBTSxDQUFDQyxVQUxJO0FBTXJCaEIsZ0JBQWMsRUFBRWUsaURBQU1BO0FBTkQsQ0FBdkI7QUFTZXJCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLjA4ZjVhOTdlYjljNTE3ZmVjMDQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFN0cmVhbUNhcmQgPSAoe1xyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHRpbWVTdGFydCxcclxuICB0aW1lRW5kLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICBzdHJlYW1lcixcclxuICBhdmF0YXJJbWFnZVVSTCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICB3ZWVrZGF5OiAnc2hvcnQnLFxyXG4gICAgbW9udGg6ICdzaG9ydCcsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICB9O1xyXG4gIGxldCBzdGFydERhdGUgPSBudWxsO1xyXG4gIGxldCBlbmREYXRlID0gbnVsbDtcclxuICB7XHJcbiAgICBjb25zdCB0ZW1wU3RhcnQgPSBuZXcgRGF0ZSh0aW1lU3RhcnQpO1xyXG4gICAgY29uc3QgdGVtcEVuZCA9IG5ldyBEYXRlKHRpbWVFbmQpO1xyXG4gICAgc3RhcnREYXRlID0gdGVtcFN0YXJ0LnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gICAgZW5kRGF0ZSA9IHRlbXBFbmQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkV3JhcHBlciAgJHtzdHJlYW1Jc0xpdmUgPyAnaXNMaXZlJyA6ICcnfWB9PlxyXG4gICAgICA8Q2FyZCBpc0dsb3dpbmc9e3N0cmVhbUlzTGl2ZX0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZSB8fCBzdHJlYW1lcn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtQ2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3RyZWFtZXJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgIHNyYz17YXZhdGFySW1hZ2VVUkx9XHJcbiAgICAgICAgICAgICAgYWx0PXtgJHtzdHJlYW1lcn0ncyBwcm9maWxlYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICBTdGFydHM6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIHtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIFRpbGw6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgIHtlbmREYXRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJkV3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtQ2FyZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0bztcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzTGl2ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyQXZhdGFyIHtcclxuICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoKTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbUNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgYXZhdGFySW1hZ2VVUkw6XHJcbiAgICAnaHR0cHM6Ly9hc3NldHMuZG9ub3Jkcml2ZS5jb20vY2xpZW50cy9leHRyYWxpZmUvaW1nL2F2YXRhci1jb25zdGl0dWVudC1kZWZhdWx0LmdpZicsXHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLnByb3BUeXBlcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG4gIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
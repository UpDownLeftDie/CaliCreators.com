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
  return __jsx(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isGlowing: streamIsLive,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.twitch.tv/".concat(twitchUsername || streamer),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1494508335", [streamIsLive ? '100%' : '80%']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1494508335", [streamIsLive ? '100%' : '80%']]]) + " " + "streamCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(streamer, "'s profile"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1494508335", [streamIsLive ? '100%' : '80%']]]) + " " + "streamerAvatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1494508335", [streamIsLive ? '100%' : '80%']]]) + " " + "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1494508335", [streamIsLive ? '100%' : '80%']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, streamer), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1494508335", [streamIsLive ? '100%' : '80%']]]) + " " + "times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1494508335", [streamIsLive ? '100%' : '80%']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Starts:\xA0", startDate), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1494508335", [streamIsLive ? '100%' : '80%']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Till:\xA0", endDate)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1494508335",
    dynamic: [streamIsLive ? '100%' : '80%'],
    __self: _this
  }, ".__jsx-style-dynamic-selector{width:".concat(streamIsLive ? '100%' : '80%', ";box-sizing:border-box;}.streamCard{border-radius:20px;width:100%;min-width:300px;display:grid;grid-template-columns:100px auto;grid-template-rows:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;grid-column-gap:20px;-webkit-column-gap:20px;column-gap:20px;}.isLive{width:100%;}.streamerAvatar{border-radius:50%;grid-column-start:1;place-self:center;object-fit:cover;width:100%;max-height:100%;}.right{grid-column-start:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h3.__jsx-style-dynamic-selector{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHN0cmVhbS1jYXJkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RFcsQUFHa0QsQUFJaEIsQUFZUixBQUdPLEFBUUUsQUFLVixVQUNELENBaEJYLE9BR3NCLENBZlQsQUE2QmIsQ0FOZSxVQXRCRyxLQUxNLEdBb0JKLFFBZEwsVUFlSSxDQXBCbkIsRUFNbUMsY0FldEIsV0FDSyxRQWZRLEVBb0JGLE1BSnhCLGdCQWZxQix3REFvQnJCLHFDQW5CZ0IsY0FDTyxxQkFDTCx3Q0FDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xcc3RyZWFtLWNhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XHJcblxyXG5jb25zdCBTdHJlYW1DYXJkID0gKHtcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICB0aW1lU3RhcnQsXHJcbiAgdGltZUVuZCxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgc3RyZWFtZXIsXHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbn0pID0+IHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgd2Vla2RheTogJ3Nob3J0JyxcclxuICAgIG1vbnRoOiAnc2hvcnQnLFxyXG4gICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgfTtcclxuICBsZXQgc3RhcnREYXRlID0gbnVsbDtcclxuICBsZXQgZW5kRGF0ZSA9IG51bGw7XHJcbiAge1xyXG4gICAgY29uc3QgdGVtcFN0YXJ0ID0gbmV3IERhdGUodGltZVN0YXJ0KTtcclxuICAgIGNvbnN0IHRlbXBFbmQgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICAgIHN0YXJ0RGF0ZSA9IHRlbXBTdGFydC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICAgIGVuZERhdGUgPSB0ZW1wRW5kLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGlzR2xvd2luZz17c3RyZWFtSXNMaXZlfT5cclxuICAgICAgPGFcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIGhyZWY9e2BodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZSB8fCBzdHJlYW1lcn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1DYXJkXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0cmVhbWVyQXZhdGFyXCJcclxuICAgICAgICAgICAgc3JjPXthdmF0YXJJbWFnZVVSTH1cclxuICAgICAgICAgICAgYWx0PXtgJHtzdHJlYW1lcn0ncyBwcm9maWxlYH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBTdGFydHM6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICB7c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBUaWxsOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAge2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAmIHtcclxuICAgICAgICAgICAgICB3aWR0aDogJHtzdHJlYW1Jc0xpdmUgPyAnMTAwJScgOiAnODAlJ307XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6Z2xvYmFsKC5zdHJlYW1DYXJkKSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpnbG9iYWwoLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpnbG9iYWwoLnN0cmVhbWVyQXZhdGFyKSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpnbG9iYWwoLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIGF2YXRhckltYWdlVVJMOlxyXG4gICAgJ2h0dHBzOi8vYXNzZXRzLmRvbm9yZHJpdmUuY29tL2NsaWVudHMvZXh0cmFsaWZlL2ltZy9hdmF0YXItY29uc3RpdHVlbnQtZGVmYXVsdC5naWYnLFxyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbUNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\stream-card.jsx */"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9zdHJlYW0tY2FyZC5qc3giXSwibmFtZXMiOlsiU3RyZWFtQ2FyZCIsInR3aXRjaFVzZXJuYW1lIiwidGltZVN0YXJ0IiwidGltZUVuZCIsInN0cmVhbUlzTGl2ZSIsInN0cmVhbWVyIiwiYXZhdGFySW1hZ2VVUkwiLCJvcHRpb25zIiwiaG91ciIsIndlZWtkYXkiLCJtb250aCIsImRheSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ0ZW1wU3RhcnQiLCJEYXRlIiwidGVtcEVuZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInVuZGVmaW5lZCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BT2I7QUFBQSxNQU5KQyxjQU1JLFFBTkpBLGNBTUk7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFNBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxZQUdJLFFBSEpBLFlBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQURKQyxjQUNJLFFBREpBLGNBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUc7QUFDZEMsUUFBSSxFQUFFLFNBRFE7QUFFZEMsV0FBTyxFQUFFLE9BRks7QUFHZEMsU0FBSyxFQUFFLE9BSE87QUFJZEMsT0FBRyxFQUFFO0FBSlMsR0FBaEI7QUFNQSxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBO0FBQ0UsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU2IsU0FBVCxDQUFsQjtBQUNBLFFBQU1jLE9BQU8sR0FBRyxJQUFJRCxJQUFKLENBQVNaLE9BQVQsQ0FBaEI7QUFDQVMsYUFBUyxHQUFHRSxTQUFTLENBQUNHLGtCQUFWLENBQTZCQyxTQUE3QixFQUF3Q1gsT0FBeEMsQ0FBWjtBQUNBTSxXQUFPLEdBQUdHLE9BQU8sQ0FBQ0Msa0JBQVIsQ0FBMkJDLFNBQTNCLEVBQXNDWCxPQUF0QyxDQUFWO0FBQ0Q7QUFFRCxTQUNFLE1BQUMsNkNBQUQ7QUFBTSxhQUFTLEVBQUVILFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFVBQU0sRUFBQyxRQURUO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFHRSxRQUFJLGtDQUEyQkgsY0FBYyxJQUFJSSxRQUE3QyxDQUhOO0FBQUEsZ0dBNkJpQkQsWUFBWSxHQUFHLE1BQUgsR0FBWSxLQTdCekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUEsZ0dBd0JlQSxZQUFZLEdBQUcsTUFBSCxHQUFZLEtBeEJ2QyxhQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBRUUsT0FBRyxFQUFFRSxjQUZQO0FBR0UsT0FBRyxZQUFLRCxRQUFMLGVBSEw7QUFBQSxnR0F1QmFELFlBQVksR0FBRyxNQUFILEdBQVksS0F2QnJDLGFBQ1ksZ0JBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBQSxnR0FrQmFBLFlBQVksR0FBRyxNQUFILEdBQVksS0FsQnJDLGFBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSxnR0FpQldBLFlBQVksR0FBRyxNQUFILEdBQVksS0FqQm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0MsUUFBTCxDQURGLEVBRUU7QUFBQSxnR0FnQldELFlBQVksR0FBRyxNQUFILEdBQVksS0FoQm5DLGFBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSxnR0FlU0EsWUFBWSxHQUFHLE1BQUgsR0FBWSxLQWZqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUVHUSxTQUZILENBREYsRUFLRTtBQUFBLGdHQVdTUixZQUFZLEdBQUcsTUFBSCxHQUFZLEtBWGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUdTLE9BRkgsQ0FMRixDQUZGLENBTkYsQ0FMRjtBQUFBO0FBQUEsY0E2QmlCVCxZQUFZLEdBQUcsTUFBSCxHQUFZLEtBN0J6QztBQUFBO0FBQUEsbURBNkJpQkEsWUFBWSxHQUFHLE1BQUgsR0FBWSxLQTdCekMsd3FMQURGLENBREY7QUF5RUQsQ0FoR0Q7O0tBQU1KLFU7QUFrR05BLFVBQVUsQ0FBQ21CLFlBQVgsR0FBMEI7QUFDeEJsQixnQkFBYyxFQUFFLElBRFE7QUFFeEJHLGNBQVksRUFBRSxLQUZVO0FBR3hCRSxnQkFBYyxFQUNaO0FBSnNCLENBQTFCO0FBT0FOLFVBQVUsQ0FBQ29CLFNBQVgsR0FBdUI7QUFDckJuQixnQkFBYyxFQUFFb0IsaURBREs7QUFFckJuQixXQUFTLEVBQUVtQixpREFBTSxDQUFDQyxVQUZHO0FBR3JCbkIsU0FBTyxFQUFFa0IsaURBQU0sQ0FBQ0MsVUFISztBQUlyQmxCLGNBQVksRUFBRW1CLCtDQUpPO0FBS3JCbEIsVUFBUSxFQUFFZ0IsaURBQU0sQ0FBQ0MsVUFMSTtBQU1yQmhCLGdCQUFjLEVBQUVlLGlEQUFNQTtBQU5ELENBQXZCO0FBU2VyQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS4yMWNlMGEyN2M2NjRlMDViYmRlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XHJcblxyXG5jb25zdCBTdHJlYW1DYXJkID0gKHtcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICB0aW1lU3RhcnQsXHJcbiAgdGltZUVuZCxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgc3RyZWFtZXIsXHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbn0pID0+IHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgd2Vla2RheTogJ3Nob3J0JyxcclxuICAgIG1vbnRoOiAnc2hvcnQnLFxyXG4gICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgfTtcclxuICBsZXQgc3RhcnREYXRlID0gbnVsbDtcclxuICBsZXQgZW5kRGF0ZSA9IG51bGw7XHJcbiAge1xyXG4gICAgY29uc3QgdGVtcFN0YXJ0ID0gbmV3IERhdGUodGltZVN0YXJ0KTtcclxuICAgIGNvbnN0IHRlbXBFbmQgPSBuZXcgRGF0ZSh0aW1lRW5kKTtcclxuICAgIHN0YXJ0RGF0ZSA9IHRlbXBTdGFydC50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcclxuICAgIGVuZERhdGUgPSB0ZW1wRW5kLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGlzR2xvd2luZz17c3RyZWFtSXNMaXZlfT5cclxuICAgICAgPGFcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIGhyZWY9e2BodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZSB8fCBzdHJlYW1lcn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1DYXJkXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0cmVhbWVyQXZhdGFyXCJcclxuICAgICAgICAgICAgc3JjPXthdmF0YXJJbWFnZVVSTH1cclxuICAgICAgICAgICAgYWx0PXtgJHtzdHJlYW1lcn0ncyBwcm9maWxlYH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxoMz57c3RyZWFtZXJ9PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBTdGFydHM6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICB7c3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBUaWxsOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAge2VuZERhdGV9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAmIHtcclxuICAgICAgICAgICAgICB3aWR0aDogJHtzdHJlYW1Jc0xpdmUgPyAnMTAwJScgOiAnODAlJ307XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6Z2xvYmFsKC5zdHJlYW1DYXJkKSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpnbG9iYWwoLmlzTGl2ZSkge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpnbG9iYWwoLnN0cmVhbWVyQXZhdGFyKSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDpnbG9iYWwoLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1DYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIGF2YXRhckltYWdlVVJMOlxyXG4gICAgJ2h0dHBzOi8vYXNzZXRzLmRvbm9yZHJpdmUuY29tL2NsaWVudHMvZXh0cmFsaWZlL2ltZy9hdmF0YXItY29uc3RpdHVlbnQtZGVmYXVsdC5naWYnLFxyXG59O1xyXG5cclxuU3RyZWFtQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
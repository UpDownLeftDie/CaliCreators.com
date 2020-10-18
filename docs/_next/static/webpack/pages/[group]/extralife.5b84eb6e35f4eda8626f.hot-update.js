webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/organisms/streamer-schedule.jsx":
/*!****************************************************!*\
  !*** ./components/organisms/streamer-schedule.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_stream_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/stream-card */ "./components/atoms/stream-card.jsx");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/utils */ "./src/utils.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\organisms\\streamer-schedule.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var StreamerSchedule = function StreamerSchedule(_ref) {
  var schedule = _ref.schedule,
      teamMembers = _ref.teamMembers;
  if (!schedule) return null;
  var streams = schedule.map(function (stream) {
    var teamMember = teamMembers.find(function (member) {
      if (!(member === null || member === void 0 ? void 0 : member.twitchUsername)) return false;
      return stream.streamer.toLowerCase() === member.twitchUsername.toLowerCase();
    }) || {};
    var timeStart = stream.timeStart,
        timeEnd = stream.timeEnd,
        streamer = stream.streamer;
    var twitchUsername = teamMember.twitchUsername,
        avatarImageURL = teamMember.avatarImageURL;
    var streamIsLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(timeStart, timeEnd);
    console.log(streamer, streamIsLive, timeStart, timeEnd);
    return __jsx(_atoms_stream_card__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: streamer
    }, {
      twitchUsername: twitchUsername,
      timeStart: timeStart,
      timeEnd: timeEnd,
      streamIsLive: streamIsLive,
      streamer: streamer,
      avatarImageURL: avatarImageURL
    }, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }));
  });
  return __jsx("div", {
    className: "jsx-8241576",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, streams, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "8241576",
    __self: _this
  }, ".jsx-8241576{display:grid;grid-row-gap:20px;row-gap:20px;width:100%;justify-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcb3JnYW5pc21zXFxzdHJlYW1lci1zY2hlZHVsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NTLEFBRXdCLGFBQ0ssa0JBQ0wsYUFDRixXQUNVLHFCQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXG9yZ2FuaXNtc1xcc3RyZWFtZXItc2NoZWR1bGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJyYXlPZiwgc2hhcGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgU3RyZWFtQ2FyZCBmcm9tICcuLi9hdG9tcy9zdHJlYW0tY2FyZCc7XHJcbmltcG9ydCBjaGVja0lmRXZlbnRJc0xpdmUgZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IFN0cmVhbWVyU2NoZWR1bGUgPSAoeyBzY2hlZHVsZSwgdGVhbU1lbWJlcnMgfSkgPT4ge1xyXG4gIGlmICghc2NoZWR1bGUpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHN0cmVhbXMgPSBzY2hlZHVsZS5tYXAoKHN0cmVhbSkgPT4ge1xyXG4gICAgY29uc3QgdGVhbU1lbWJlciA9XHJcbiAgICAgIHRlYW1NZW1iZXJzLmZpbmQoKG1lbWJlcikgPT4ge1xyXG4gICAgICAgIGlmICghbWVtYmVyPy50d2l0Y2hVc2VybmFtZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBzdHJlYW0uc3RyZWFtZXIudG9Mb3dlckNhc2UoKSA9PT0gbWVtYmVyLnR3aXRjaFVzZXJuYW1lLnRvTG93ZXJDYXNlKClcclxuICAgICAgICApO1xyXG4gICAgICB9KSB8fCB7fTtcclxuICAgIGNvbnN0IHsgdGltZVN0YXJ0LCB0aW1lRW5kLCBzdHJlYW1lciB9ID0gc3RyZWFtO1xyXG4gICAgY29uc3QgeyB0d2l0Y2hVc2VybmFtZSwgYXZhdGFySW1hZ2VVUkwgfSA9IHRlYW1NZW1iZXI7XHJcbiAgICBjb25zdCBzdHJlYW1Jc0xpdmUgPSBjaGVja0lmRXZlbnRJc0xpdmUodGltZVN0YXJ0LCB0aW1lRW5kKTtcclxuICAgIGNvbnNvbGUubG9nKHN0cmVhbWVyLCBzdHJlYW1Jc0xpdmUsIHRpbWVTdGFydCwgdGltZUVuZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3RyZWFtQ2FyZFxyXG4gICAgICAgIGtleT17c3RyZWFtZXJ9XHJcbiAgICAgICAgey4uLntcclxuICAgICAgICAgIHR3aXRjaFVzZXJuYW1lLFxyXG4gICAgICAgICAgdGltZVN0YXJ0LFxyXG4gICAgICAgICAgdGltZUVuZCxcclxuICAgICAgICAgIHN0cmVhbUlzTGl2ZSxcclxuICAgICAgICAgIHN0cmVhbWVyLFxyXG4gICAgICAgICAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzdHJlYW1zfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgcm93LWdhcDogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3RyZWFtZXJTY2hlZHVsZS5wcm9wVHlwZXMgPSB7XHJcbiAgc2NoZWR1bGU6IGFycmF5T2YoXHJcbiAgICBzaGFwZSh7XHJcbiAgICAgIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgdGltZVN0YXJ0OiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB9KVxyXG4gICkuaXNSZXF1aXJlZCxcclxuICB0ZWFtTWVtYmVyczogYXJyYXlPZihcclxuICAgIHNoYXBlKHtcclxuICAgICAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICAgICAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB9KVxyXG4gICkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbWVyU2NoZWR1bGU7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\organisms\\\\streamer-schedule.jsx */"));
};

_c = StreamerSchedule;
StreamerSchedule.propTypes = {
  schedule: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    streamer: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
    timeStart: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
    timeEnd: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired
  })).isRequired,
  teamMembers: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    displayName: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
    avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (StreamerSchedule);

var _c;

$RefreshReg$(_c, "StreamerSchedule");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUuanN4Il0sIm5hbWVzIjpbIlN0cmVhbWVyU2NoZWR1bGUiLCJzY2hlZHVsZSIsInRlYW1NZW1iZXJzIiwic3RyZWFtcyIsIm1hcCIsInN0cmVhbSIsInRlYW1NZW1iZXIiLCJmaW5kIiwibWVtYmVyIiwidHdpdGNoVXNlcm5hbWUiLCJzdHJlYW1lciIsInRvTG93ZXJDYXNlIiwidGltZVN0YXJ0IiwidGltZUVuZCIsImF2YXRhckltYWdlVVJMIiwic3RyZWFtSXNMaXZlIiwiY2hlY2tJZkV2ZW50SXNMaXZlIiwiY29uc29sZSIsImxvZyIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQStCO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDdEQsTUFBSSxDQUFDRCxRQUFMLEVBQWUsT0FBTyxJQUFQO0FBQ2YsTUFBTUUsT0FBTyxHQUFHRixRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFDQyxNQUFELEVBQVk7QUFDdkMsUUFBTUMsVUFBVSxHQUNkSixXQUFXLENBQUNLLElBQVosQ0FBaUIsVUFBQ0MsTUFBRCxFQUFZO0FBQzNCLFVBQUksRUFBQ0EsTUFBRCxhQUFDQSxNQUFELHVCQUFDQSxNQUFNLENBQUVDLGNBQVQsQ0FBSixFQUE2QixPQUFPLEtBQVA7QUFDN0IsYUFDRUosTUFBTSxDQUFDSyxRQUFQLENBQWdCQyxXQUFoQixPQUFrQ0gsTUFBTSxDQUFDQyxjQUFQLENBQXNCRSxXQUF0QixFQURwQztBQUdELEtBTEQsS0FLTSxFQU5SO0FBRHVDLFFBUS9CQyxTQVIrQixHQVFFUCxNQVJGLENBUS9CTyxTQVIrQjtBQUFBLFFBUXBCQyxPQVJvQixHQVFFUixNQVJGLENBUXBCUSxPQVJvQjtBQUFBLFFBUVhILFFBUlcsR0FRRUwsTUFSRixDQVFYSyxRQVJXO0FBQUEsUUFTL0JELGNBVCtCLEdBU0lILFVBVEosQ0FTL0JHLGNBVCtCO0FBQUEsUUFTZkssY0FUZSxHQVNJUixVQVRKLENBU2ZRLGNBVGU7QUFVdkMsUUFBTUMsWUFBWSxHQUFHQywwREFBa0IsQ0FBQ0osU0FBRCxFQUFZQyxPQUFaLENBQXZDO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaLEVBQXNCSyxZQUF0QixFQUFvQ0gsU0FBcEMsRUFBK0NDLE9BQS9DO0FBQ0EsV0FDRSxNQUFDLDBEQUFEO0FBQ0UsU0FBRyxFQUFFSDtBQURQLE9BRU07QUFDRkQsb0JBQWMsRUFBZEEsY0FERTtBQUVGRyxlQUFTLEVBQVRBLFNBRkU7QUFHRkMsYUFBTyxFQUFQQSxPQUhFO0FBSUZFLGtCQUFZLEVBQVpBLFlBSkU7QUFLRkwsY0FBUSxFQUFSQSxRQUxFO0FBTUZJLG9CQUFjLEVBQWRBO0FBTkUsS0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFhRCxHQXpCZSxDQUFoQjtBQTBCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxPQURIO0FBQUE7QUFBQTtBQUFBLHdtR0FERjtBQWNELENBMUNEOztLQUFNSCxnQjtBQTRDTkEsZ0JBQWdCLENBQUNtQixTQUFqQixHQUE2QjtBQUMzQmxCLFVBQVEsRUFBRW1CLDBEQUFPLENBQ2ZDLHdEQUFLLENBQUM7QUFDSlgsWUFBUSxFQUFFWSxpREFBTSxDQUFDQyxVQURiO0FBRUpYLGFBQVMsRUFBRVUsaURBQU0sQ0FBQ0MsVUFGZDtBQUdKVixXQUFPLEVBQUVTLGlEQUFNLENBQUNDO0FBSFosR0FBRCxDQURVLENBQVAsQ0FNUkEsVUFQeUI7QUFRM0JyQixhQUFXLEVBQUVrQiwwREFBTyxDQUNsQkMsd0RBQUssQ0FBQztBQUNKWixrQkFBYyxFQUFFYSxpREFEWjtBQUVKRSxlQUFXLEVBQUVGLGlEQUFNLENBQUNDLFVBRmhCO0FBR0pULGtCQUFjLEVBQUVRLGlEQUFNLENBQUNDO0FBSG5CLEdBQUQsQ0FEYSxDQUFQLENBTVhBO0FBZHlCLENBQTdCO0FBaUJldkIsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuNWI4NGViNmUzNWY0ZWRhODYyNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFycmF5T2YsIHNoYXBlLCBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFN0cmVhbUNhcmQgZnJvbSAnLi4vYXRvbXMvc3RyZWFtLWNhcmQnO1xyXG5pbXBvcnQgY2hlY2tJZkV2ZW50SXNMaXZlIGZyb20gJy4uLy4uL3NyYy91dGlscyc7XHJcblxyXG5jb25zdCBTdHJlYW1lclNjaGVkdWxlID0gKHsgc2NoZWR1bGUsIHRlYW1NZW1iZXJzIH0pID0+IHtcclxuICBpZiAoIXNjaGVkdWxlKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBzdHJlYW1zID0gc2NoZWR1bGUubWFwKChzdHJlYW0pID0+IHtcclxuICAgIGNvbnN0IHRlYW1NZW1iZXIgPVxyXG4gICAgICB0ZWFtTWVtYmVycy5maW5kKChtZW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoIW1lbWJlcj8udHdpdGNoVXNlcm5hbWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgc3RyZWFtLnN0cmVhbWVyLnRvTG93ZXJDYXNlKCkgPT09IG1lbWJlci50d2l0Y2hVc2VybmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSkgfHwge307XHJcbiAgICBjb25zdCB7IHRpbWVTdGFydCwgdGltZUVuZCwgc3RyZWFtZXIgfSA9IHN0cmVhbTtcclxuICAgIGNvbnN0IHsgdHdpdGNoVXNlcm5hbWUsIGF2YXRhckltYWdlVVJMIH0gPSB0ZWFtTWVtYmVyO1xyXG4gICAgY29uc3Qgc3RyZWFtSXNMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKHRpbWVTdGFydCwgdGltZUVuZCk7XHJcbiAgICBjb25zb2xlLmxvZyhzdHJlYW1lciwgc3RyZWFtSXNMaXZlLCB0aW1lU3RhcnQsIHRpbWVFbmQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0cmVhbUNhcmRcclxuICAgICAgICBrZXk9e3N0cmVhbWVyfVxyXG4gICAgICAgIHsuLi57XHJcbiAgICAgICAgICB0d2l0Y2hVc2VybmFtZSxcclxuICAgICAgICAgIHRpbWVTdGFydCxcclxuICAgICAgICAgIHRpbWVFbmQsXHJcbiAgICAgICAgICBzdHJlYW1Jc0xpdmUsXHJcbiAgICAgICAgICBzdHJlYW1lcixcclxuICAgICAgICAgIGF2YXRhckltYWdlVVJMLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c3RyZWFtc31cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtcm93LWdhcDogMjBweDtcclxuICAgICAgICAgIHJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbWVyU2NoZWR1bGUucHJvcFR5cGVzID0ge1xyXG4gIHNjaGVkdWxlOiBhcnJheU9mKFxyXG4gICAgc2hhcGUoe1xyXG4gICAgICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSlcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgdGVhbU1lbWJlcnM6IGFycmF5T2YoXHJcbiAgICBzaGFwZSh7XHJcbiAgICAgIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSlcclxuICApLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJlYW1lclNjaGVkdWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
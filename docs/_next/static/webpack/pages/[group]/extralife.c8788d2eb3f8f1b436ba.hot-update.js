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
    className: "jsx-3884419830",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, streams, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3884419830",
    __self: _this
  }, ".jsx-3884419830{display:grid;grid-row-gap:20px;row-gap:20px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcb3JnYW5pc21zXFxzdHJlYW1lci1zY2hlZHVsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NTLEFBRXdCLGFBQ0ssa0JBQ0wsYUFDRixXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcb3JnYW5pc21zXFxzdHJlYW1lci1zY2hlZHVsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheU9mLCBzaGFwZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTdHJlYW1DYXJkIGZyb20gJy4uL2F0b21zL3N0cmVhbS1jYXJkJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgU3RyZWFtZXJTY2hlZHVsZSA9ICh7IHNjaGVkdWxlLCB0ZWFtTWVtYmVycyB9KSA9PiB7XHJcbiAgaWYgKCFzY2hlZHVsZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3Qgc3RyZWFtcyA9IHNjaGVkdWxlLm1hcCgoc3RyZWFtKSA9PiB7XHJcbiAgICBjb25zdCB0ZWFtTWVtYmVyID1cclxuICAgICAgdGVhbU1lbWJlcnMuZmluZCgobWVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZW1iZXI/LnR3aXRjaFVzZXJuYW1lKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIHN0cmVhbS5zdHJlYW1lci50b0xvd2VyQ2FzZSgpID09PSBtZW1iZXIudHdpdGNoVXNlcm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pIHx8IHt9O1xyXG4gICAgY29uc3QgeyB0aW1lU3RhcnQsIHRpbWVFbmQsIHN0cmVhbWVyIH0gPSBzdHJlYW07XHJcbiAgICBjb25zdCB7IHR3aXRjaFVzZXJuYW1lLCBhdmF0YXJJbWFnZVVSTCB9ID0gdGVhbU1lbWJlcjtcclxuICAgIGNvbnN0IHN0cmVhbUlzTGl2ZSA9IGNoZWNrSWZFdmVudElzTGl2ZSh0aW1lU3RhcnQsIHRpbWVFbmQpO1xyXG4gICAgY29uc29sZS5sb2coc3RyZWFtZXIsIHN0cmVhbUlzTGl2ZSwgdGltZVN0YXJ0LCB0aW1lRW5kKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHJlYW1DYXJkXHJcbiAgICAgICAga2V5PXtzdHJlYW1lcn1cclxuICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgICAgICAgICB0aW1lU3RhcnQsXHJcbiAgICAgICAgICB0aW1lRW5kLFxyXG4gICAgICAgICAgc3RyZWFtSXNMaXZlLFxyXG4gICAgICAgICAgc3RyZWFtZXIsXHJcbiAgICAgICAgICBhdmF0YXJJbWFnZVVSTCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3N0cmVhbXN9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgICByb3ctZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TdHJlYW1lclNjaGVkdWxlLnByb3BUeXBlcyA9IHtcclxuICBzY2hlZHVsZTogYXJyYXlPZihcclxuICAgIHNoYXBlKHtcclxuICAgICAgc3RyZWFtZXI6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICB0aW1lRW5kOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIH0pXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIHRlYW1NZW1iZXJzOiBhcnJheU9mKFxyXG4gICAgc2hhcGUoe1xyXG4gICAgICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG4gICAgICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIH0pXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtZXJTY2hlZHVsZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\organisms\\\\streamer-schedule.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUuanN4Il0sIm5hbWVzIjpbIlN0cmVhbWVyU2NoZWR1bGUiLCJzY2hlZHVsZSIsInRlYW1NZW1iZXJzIiwic3RyZWFtcyIsIm1hcCIsInN0cmVhbSIsInRlYW1NZW1iZXIiLCJmaW5kIiwibWVtYmVyIiwidHdpdGNoVXNlcm5hbWUiLCJzdHJlYW1lciIsInRvTG93ZXJDYXNlIiwidGltZVN0YXJ0IiwidGltZUVuZCIsImF2YXRhckltYWdlVVJMIiwic3RyZWFtSXNMaXZlIiwiY2hlY2tJZkV2ZW50SXNMaXZlIiwiY29uc29sZSIsImxvZyIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQStCO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDdEQsTUFBSSxDQUFDRCxRQUFMLEVBQWUsT0FBTyxJQUFQO0FBQ2YsTUFBTUUsT0FBTyxHQUFHRixRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFDQyxNQUFELEVBQVk7QUFDdkMsUUFBTUMsVUFBVSxHQUNkSixXQUFXLENBQUNLLElBQVosQ0FBaUIsVUFBQ0MsTUFBRCxFQUFZO0FBQzNCLFVBQUksRUFBQ0EsTUFBRCxhQUFDQSxNQUFELHVCQUFDQSxNQUFNLENBQUVDLGNBQVQsQ0FBSixFQUE2QixPQUFPLEtBQVA7QUFDN0IsYUFDRUosTUFBTSxDQUFDSyxRQUFQLENBQWdCQyxXQUFoQixPQUFrQ0gsTUFBTSxDQUFDQyxjQUFQLENBQXNCRSxXQUF0QixFQURwQztBQUdELEtBTEQsS0FLTSxFQU5SO0FBRHVDLFFBUS9CQyxTQVIrQixHQVFFUCxNQVJGLENBUS9CTyxTQVIrQjtBQUFBLFFBUXBCQyxPQVJvQixHQVFFUixNQVJGLENBUXBCUSxPQVJvQjtBQUFBLFFBUVhILFFBUlcsR0FRRUwsTUFSRixDQVFYSyxRQVJXO0FBQUEsUUFTL0JELGNBVCtCLEdBU0lILFVBVEosQ0FTL0JHLGNBVCtCO0FBQUEsUUFTZkssY0FUZSxHQVNJUixVQVRKLENBU2ZRLGNBVGU7QUFVdkMsUUFBTUMsWUFBWSxHQUFHQywwREFBa0IsQ0FBQ0osU0FBRCxFQUFZQyxPQUFaLENBQXZDO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaLEVBQXNCSyxZQUF0QixFQUFvQ0gsU0FBcEMsRUFBK0NDLE9BQS9DO0FBQ0EsV0FDRSxNQUFDLDBEQUFEO0FBQ0UsU0FBRyxFQUFFSDtBQURQLE9BRU07QUFDRkQsb0JBQWMsRUFBZEEsY0FERTtBQUVGRyxlQUFTLEVBQVRBLFNBRkU7QUFHRkMsYUFBTyxFQUFQQSxPQUhFO0FBSUZFLGtCQUFZLEVBQVpBLFlBSkU7QUFLRkwsY0FBUSxFQUFSQSxRQUxFO0FBTUZJLG9CQUFjLEVBQWRBO0FBTkUsS0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFhRCxHQXpCZSxDQUFoQjtBQTBCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxPQURIO0FBQUE7QUFBQTtBQUFBLDBoR0FERjtBQWFELENBekNEOztLQUFNSCxnQjtBQTJDTkEsZ0JBQWdCLENBQUNtQixTQUFqQixHQUE2QjtBQUMzQmxCLFVBQVEsRUFBRW1CLDBEQUFPLENBQ2ZDLHdEQUFLLENBQUM7QUFDSlgsWUFBUSxFQUFFWSxpREFBTSxDQUFDQyxVQURiO0FBRUpYLGFBQVMsRUFBRVUsaURBQU0sQ0FBQ0MsVUFGZDtBQUdKVixXQUFPLEVBQUVTLGlEQUFNLENBQUNDO0FBSFosR0FBRCxDQURVLENBQVAsQ0FNUkEsVUFQeUI7QUFRM0JyQixhQUFXLEVBQUVrQiwwREFBTyxDQUNsQkMsd0RBQUssQ0FBQztBQUNKWixrQkFBYyxFQUFFYSxpREFEWjtBQUVKRSxlQUFXLEVBQUVGLGlEQUFNLENBQUNDLFVBRmhCO0FBR0pULGtCQUFjLEVBQUVRLGlEQUFNLENBQUNDO0FBSG5CLEdBQUQsQ0FEYSxDQUFQLENBTVhBO0FBZHlCLENBQTdCO0FBaUJldkIsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuYzg3ODhkMmViM2Y4ZjFiNDM2YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFycmF5T2YsIHNoYXBlLCBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFN0cmVhbUNhcmQgZnJvbSAnLi4vYXRvbXMvc3RyZWFtLWNhcmQnO1xyXG5pbXBvcnQgY2hlY2tJZkV2ZW50SXNMaXZlIGZyb20gJy4uLy4uL3NyYy91dGlscyc7XHJcblxyXG5jb25zdCBTdHJlYW1lclNjaGVkdWxlID0gKHsgc2NoZWR1bGUsIHRlYW1NZW1iZXJzIH0pID0+IHtcclxuICBpZiAoIXNjaGVkdWxlKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBzdHJlYW1zID0gc2NoZWR1bGUubWFwKChzdHJlYW0pID0+IHtcclxuICAgIGNvbnN0IHRlYW1NZW1iZXIgPVxyXG4gICAgICB0ZWFtTWVtYmVycy5maW5kKChtZW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoIW1lbWJlcj8udHdpdGNoVXNlcm5hbWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgc3RyZWFtLnN0cmVhbWVyLnRvTG93ZXJDYXNlKCkgPT09IG1lbWJlci50d2l0Y2hVc2VybmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSkgfHwge307XHJcbiAgICBjb25zdCB7IHRpbWVTdGFydCwgdGltZUVuZCwgc3RyZWFtZXIgfSA9IHN0cmVhbTtcclxuICAgIGNvbnN0IHsgdHdpdGNoVXNlcm5hbWUsIGF2YXRhckltYWdlVVJMIH0gPSB0ZWFtTWVtYmVyO1xyXG4gICAgY29uc3Qgc3RyZWFtSXNMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKHRpbWVTdGFydCwgdGltZUVuZCk7XHJcbiAgICBjb25zb2xlLmxvZyhzdHJlYW1lciwgc3RyZWFtSXNMaXZlLCB0aW1lU3RhcnQsIHRpbWVFbmQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0cmVhbUNhcmRcclxuICAgICAgICBrZXk9e3N0cmVhbWVyfVxyXG4gICAgICAgIHsuLi57XHJcbiAgICAgICAgICB0d2l0Y2hVc2VybmFtZSxcclxuICAgICAgICAgIHRpbWVTdGFydCxcclxuICAgICAgICAgIHRpbWVFbmQsXHJcbiAgICAgICAgICBzdHJlYW1Jc0xpdmUsXHJcbiAgICAgICAgICBzdHJlYW1lcixcclxuICAgICAgICAgIGF2YXRhckltYWdlVVJMLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c3RyZWFtc31cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtcm93LWdhcDogMjBweDtcclxuICAgICAgICAgIHJvdy1nYXA6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbWVyU2NoZWR1bGUucHJvcFR5cGVzID0ge1xyXG4gIHNjaGVkdWxlOiBhcnJheU9mKFxyXG4gICAgc2hhcGUoe1xyXG4gICAgICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSlcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgdGVhbU1lbWJlcnM6IGFycmF5T2YoXHJcbiAgICBzaGFwZSh7XHJcbiAgICAgIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSlcclxuICApLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJlYW1lclNjaGVkdWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
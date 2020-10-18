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
        avatarImageURL = teamMember.avatarImageURL,
        links = teamMember.links;
    var streamIsLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_5__["default"])(timeStart, timeEnd);
    return __jsx(_atoms_stream_card__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: streamer
    }, {
      twitchUsername: twitchUsername,
      timeStart: timeStart,
      timeEnd: timeEnd,
      streamIsLive: streamIsLive,
      streamer: streamer,
      avatarImageURL: avatarImageURL,
      links: links
    }, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }));
  });
  return __jsx("div", {
    className: "jsx-734974999",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, streams, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "734974999",
    __self: _this
  }, ".jsx-734974999{display:grid;grid-row-gap:10px;row-gap:10px;width:100%;justify-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcb3JnYW5pc21zXFxzdHJlYW1lci1zY2hlZHVsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NTLEFBRXdCLGFBQ0ssa0JBQ0wsYUFDRixXQUNVLHFCQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXG9yZ2FuaXNtc1xcc3RyZWFtZXItc2NoZWR1bGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJyYXlPZiwgbnVtYmVyLCBzaGFwZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBTdHJlYW1DYXJkIGZyb20gJy4uL2F0b21zL3N0cmVhbS1jYXJkJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgU3RyZWFtZXJTY2hlZHVsZSA9ICh7IHNjaGVkdWxlLCB0ZWFtTWVtYmVycyB9KSA9PiB7XHJcbiAgaWYgKCFzY2hlZHVsZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3Qgc3RyZWFtcyA9IHNjaGVkdWxlLm1hcCgoc3RyZWFtKSA9PiB7XHJcbiAgICBjb25zdCB0ZWFtTWVtYmVyID1cclxuICAgICAgdGVhbU1lbWJlcnMuZmluZCgobWVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKCFtZW1iZXI/LnR3aXRjaFVzZXJuYW1lKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIHN0cmVhbS5zdHJlYW1lci50b0xvd2VyQ2FzZSgpID09PSBtZW1iZXIudHdpdGNoVXNlcm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pIHx8IHt9O1xyXG4gICAgY29uc3QgeyB0aW1lU3RhcnQsIHRpbWVFbmQsIHN0cmVhbWVyIH0gPSBzdHJlYW07XHJcbiAgICBjb25zdCB7IHR3aXRjaFVzZXJuYW1lLCBhdmF0YXJJbWFnZVVSTCwgbGlua3MgfSA9IHRlYW1NZW1iZXI7XHJcbiAgICBjb25zdCBzdHJlYW1Jc0xpdmUgPSBjaGVja0lmRXZlbnRJc0xpdmUodGltZVN0YXJ0LCB0aW1lRW5kKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHJlYW1DYXJkXHJcbiAgICAgICAga2V5PXtzdHJlYW1lcn1cclxuICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgICAgICAgICB0aW1lU3RhcnQsXHJcbiAgICAgICAgICB0aW1lRW5kLFxyXG4gICAgICAgICAgc3RyZWFtSXNMaXZlLFxyXG4gICAgICAgICAgc3RyZWFtZXIsXHJcbiAgICAgICAgICBhdmF0YXJJbWFnZVVSTCxcclxuICAgICAgICAgIGxpbmtzLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c3RyZWFtc31cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcclxuICAgICAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN0cmVhbWVyU2NoZWR1bGUucHJvcFR5cGVzID0ge1xyXG4gIHNjaGVkdWxlOiBhcnJheU9mKFxyXG4gICAgc2hhcGUoe1xyXG4gICAgICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHRpbWVFbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSlcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgdGVhbU1lbWJlcnM6IGFycmF5T2YoXHJcbiAgICBzaGFwZSh7XHJcbiAgICAgIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICAgICAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgbGlua3M6IHNoYXBlKHtcclxuICAgICAgICBkb25hdGU6IHN0cmluZyxcclxuICAgICAgICBzdHJlYW06IHN0cmluZyxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbWVyU2NoZWR1bGU7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\organisms\\\\streamer-schedule.jsx */"));
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
    avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
    sumDonations: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
    fundraisingGoal: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    links: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
      donate: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
      stream: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUuanN4Il0sIm5hbWVzIjpbIlN0cmVhbWVyU2NoZWR1bGUiLCJzY2hlZHVsZSIsInRlYW1NZW1iZXJzIiwic3RyZWFtcyIsIm1hcCIsInN0cmVhbSIsInRlYW1NZW1iZXIiLCJmaW5kIiwibWVtYmVyIiwidHdpdGNoVXNlcm5hbWUiLCJzdHJlYW1lciIsInRvTG93ZXJDYXNlIiwidGltZVN0YXJ0IiwidGltZUVuZCIsImF2YXRhckltYWdlVVJMIiwibGlua3MiLCJzdHJlYW1Jc0xpdmUiLCJjaGVja0lmRXZlbnRJc0xpdmUiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGlzcGxheU5hbWUiLCJzdW1Eb25hdGlvbnMiLCJudW1iZXIiLCJmdW5kcmFpc2luZ0dvYWwiLCJkb25hdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUErQjtBQUFBLE1BQTVCQyxRQUE0QixRQUE1QkEsUUFBNEI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ3RELE1BQUksQ0FBQ0QsUUFBTCxFQUFlLE9BQU8sSUFBUDtBQUNmLE1BQU1FLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZDLFFBQU1DLFVBQVUsR0FDZEosV0FBVyxDQUFDSyxJQUFaLENBQWlCLFVBQUNDLE1BQUQsRUFBWTtBQUMzQixVQUFJLEVBQUNBLE1BQUQsYUFBQ0EsTUFBRCx1QkFBQ0EsTUFBTSxDQUFFQyxjQUFULENBQUosRUFBNkIsT0FBTyxLQUFQO0FBQzdCLGFBQ0VKLE1BQU0sQ0FBQ0ssUUFBUCxDQUFnQkMsV0FBaEIsT0FBa0NILE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkUsV0FBdEIsRUFEcEM7QUFHRCxLQUxELEtBS00sRUFOUjtBQUR1QyxRQVEvQkMsU0FSK0IsR0FRRVAsTUFSRixDQVEvQk8sU0FSK0I7QUFBQSxRQVFwQkMsT0FSb0IsR0FRRVIsTUFSRixDQVFwQlEsT0FSb0I7QUFBQSxRQVFYSCxRQVJXLEdBUUVMLE1BUkYsQ0FRWEssUUFSVztBQUFBLFFBUy9CRCxjQVQrQixHQVNXSCxVQVRYLENBUy9CRyxjQVQrQjtBQUFBLFFBU2ZLLGNBVGUsR0FTV1IsVUFUWCxDQVNmUSxjQVRlO0FBQUEsUUFTQ0MsS0FURCxHQVNXVCxVQVRYLENBU0NTLEtBVEQ7QUFVdkMsUUFBTUMsWUFBWSxHQUFHQywwREFBa0IsQ0FBQ0wsU0FBRCxFQUFZQyxPQUFaLENBQXZDO0FBQ0EsV0FDRSxNQUFDLDBEQUFEO0FBQ0UsU0FBRyxFQUFFSDtBQURQLE9BRU07QUFDRkQsb0JBQWMsRUFBZEEsY0FERTtBQUVGRyxlQUFTLEVBQVRBLFNBRkU7QUFHRkMsYUFBTyxFQUFQQSxPQUhFO0FBSUZHLGtCQUFZLEVBQVpBLFlBSkU7QUFLRk4sY0FBUSxFQUFSQSxRQUxFO0FBTUZJLG9CQUFjLEVBQWRBLGNBTkU7QUFPRkMsV0FBSyxFQUFMQTtBQVBFLEtBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBY0QsR0F6QmUsQ0FBaEI7QUEwQkEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osT0FESDtBQUFBO0FBQUE7QUFBQSxreUdBREY7QUFjRCxDQTFDRDs7S0FBTUgsZ0I7QUE0Q05BLGdCQUFnQixDQUFDa0IsU0FBakIsR0FBNkI7QUFDM0JqQixVQUFRLEVBQUVrQiwwREFBTyxDQUNmQyx3REFBSyxDQUFDO0FBQ0pWLFlBQVEsRUFBRVcsaURBQU0sQ0FBQ0MsVUFEYjtBQUVKVixhQUFTLEVBQUVTLGlEQUFNLENBQUNDLFVBRmQ7QUFHSlQsV0FBTyxFQUFFUSxpREFBTSxDQUFDQztBQUhaLEdBQUQsQ0FEVSxDQUFQLENBTVJBLFVBUHlCO0FBUTNCcEIsYUFBVyxFQUFFaUIsMERBQU8sQ0FDbEJDLHdEQUFLLENBQUM7QUFDSlgsa0JBQWMsRUFBRVksaURBRFo7QUFFSkUsZUFBVyxFQUFFRixpREFBTSxDQUFDQyxVQUZoQjtBQUdKUixrQkFBYyxFQUFFTyxpREFBTSxDQUFDQyxVQUhuQjtBQUlKRSxnQkFBWSxFQUFFQyxpREFKVjtBQUtKQyxtQkFBZSxFQUFFRCxpREFBTSxDQUFDSCxVQUxwQjtBQU1KUCxTQUFLLEVBQUVLLHdEQUFLLENBQUM7QUFDWE8sWUFBTSxFQUFFTixpREFERztBQUVYaEIsWUFBTSxFQUFFZ0IsaURBQU1BO0FBRkgsS0FBRDtBQU5SLEdBQUQsQ0FEYSxDQUFQLENBWVhDO0FBcEJ5QixDQUE3QjtBQXVCZXRCLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLjQ2ODRmMjA4M2JjYjNiZTEwZWZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheU9mLCBudW1iZXIsIHNoYXBlLCBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFN0cmVhbUNhcmQgZnJvbSAnLi4vYXRvbXMvc3RyZWFtLWNhcmQnO1xyXG5pbXBvcnQgY2hlY2tJZkV2ZW50SXNMaXZlIGZyb20gJy4uLy4uL3NyYy91dGlscyc7XHJcblxyXG5jb25zdCBTdHJlYW1lclNjaGVkdWxlID0gKHsgc2NoZWR1bGUsIHRlYW1NZW1iZXJzIH0pID0+IHtcclxuICBpZiAoIXNjaGVkdWxlKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBzdHJlYW1zID0gc2NoZWR1bGUubWFwKChzdHJlYW0pID0+IHtcclxuICAgIGNvbnN0IHRlYW1NZW1iZXIgPVxyXG4gICAgICB0ZWFtTWVtYmVycy5maW5kKChtZW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoIW1lbWJlcj8udHdpdGNoVXNlcm5hbWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgc3RyZWFtLnN0cmVhbWVyLnRvTG93ZXJDYXNlKCkgPT09IG1lbWJlci50d2l0Y2hVc2VybmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSkgfHwge307XHJcbiAgICBjb25zdCB7IHRpbWVTdGFydCwgdGltZUVuZCwgc3RyZWFtZXIgfSA9IHN0cmVhbTtcclxuICAgIGNvbnN0IHsgdHdpdGNoVXNlcm5hbWUsIGF2YXRhckltYWdlVVJMLCBsaW5rcyB9ID0gdGVhbU1lbWJlcjtcclxuICAgIGNvbnN0IHN0cmVhbUlzTGl2ZSA9IGNoZWNrSWZFdmVudElzTGl2ZSh0aW1lU3RhcnQsIHRpbWVFbmQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0cmVhbUNhcmRcclxuICAgICAgICBrZXk9e3N0cmVhbWVyfVxyXG4gICAgICAgIHsuLi57XHJcbiAgICAgICAgICB0d2l0Y2hVc2VybmFtZSxcclxuICAgICAgICAgIHRpbWVTdGFydCxcclxuICAgICAgICAgIHRpbWVFbmQsXHJcbiAgICAgICAgICBzdHJlYW1Jc0xpdmUsXHJcbiAgICAgICAgICBzdHJlYW1lcixcclxuICAgICAgICAgIGF2YXRhckltYWdlVVJMLFxyXG4gICAgICAgICAgbGlua3MsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzdHJlYW1zfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3RyZWFtZXJTY2hlZHVsZS5wcm9wVHlwZXMgPSB7XHJcbiAgc2NoZWR1bGU6IGFycmF5T2YoXHJcbiAgICBzaGFwZSh7XHJcbiAgICAgIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgdGltZVN0YXJ0OiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB9KVxyXG4gICkuaXNSZXF1aXJlZCxcclxuICB0ZWFtTWVtYmVyczogYXJyYXlPZihcclxuICAgIHNoYXBlKHtcclxuICAgICAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICAgICAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHN1bURvbmF0aW9uczogbnVtYmVyLFxyXG4gICAgICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBsaW5rczogc2hhcGUoe1xyXG4gICAgICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtZXJTY2hlZHVsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
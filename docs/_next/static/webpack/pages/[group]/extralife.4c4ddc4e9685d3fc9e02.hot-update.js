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


var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\organisms\\streamer-schedule.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var StreamerSchedule = function StreamerSchedule(_ref) {
  var schedule = _ref.schedule,
      teamMembers = _ref.teamMembers;
  if (!schedule) return null;
  var sortedSchedule = schedule.sort(function (a, b) {
    return new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime();
  });
  console.log({
    sortedSchedule: sortedSchedule
  });
  var streams = sortedSchedule.map(function (stream) {
    var teamMember = teamMembers.find(function (member) {
      if (!(member === null || member === void 0 ? void 0 : member.twitchUsername)) return false;
      return stream.streamer.toLowerCase() === member.twitchUsername.toLowerCase();
    }) || {};
    var timeStart = stream.timeStart,
        timeEnd = stream.timeEnd,
        streamer = stream.streamer;
    var twitchUsername = teamMember.twitchUsername,
        streamIsLive = teamMember.streamIsLive,
        avatarImageURL = teamMember.avatarImageURL;
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
        lineNumber: 21,
        columnNumber: 7
      }
    }));
  });
  return __jsx("div", {
    className: "jsx-2513700217",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, streams, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2513700217",
    __self: _this
  }, ".jsx-2513700217{display:grid;grid-row-gap:20px;row-gap:20px;width:100%;max-width:800px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcb3JnYW5pc21zXFxzdHJlYW1lci1zY2hlZHVsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNTLEFBRXdCLGFBQ0ssa0JBQ0wsYUFDRixXQUNLLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXG9yZ2FuaXNtc1xcc3RyZWFtZXItc2NoZWR1bGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJyYXlPZiwgc2hhcGUsIHN0cmluZywgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFN0cmVhbUNhcmQgZnJvbSAnLi4vYXRvbXMvc3RyZWFtLWNhcmQnO1xuXG5jb25zdCBTdHJlYW1lclNjaGVkdWxlID0gKHsgc2NoZWR1bGUsIHRlYW1NZW1iZXJzIH0pID0+IHtcbiAgaWYgKCFzY2hlZHVsZSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHNvcnRlZFNjaGVkdWxlID0gc2NoZWR1bGUuc29ydChcbiAgICAoYSwgYikgPT4gbmV3IERhdGUoYS50aW1lU3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIudGltZVN0YXJ0KS5nZXRUaW1lKClcbiAgKTtcbiAgY29uc29sZS5sb2coeyBzb3J0ZWRTY2hlZHVsZSB9KTtcbiAgY29uc3Qgc3RyZWFtcyA9IHNvcnRlZFNjaGVkdWxlLm1hcCgoc3RyZWFtKSA9PiB7XG4gICAgY29uc3QgdGVhbU1lbWJlciA9XG4gICAgICB0ZWFtTWVtYmVycy5maW5kKChtZW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCFtZW1iZXI/LnR3aXRjaFVzZXJuYW1lKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgc3RyZWFtLnN0cmVhbWVyLnRvTG93ZXJDYXNlKCkgPT09IG1lbWJlci50d2l0Y2hVc2VybmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICB9KSB8fCB7fTtcbiAgICBjb25zdCB7IHRpbWVTdGFydCwgdGltZUVuZCwgc3RyZWFtZXIgfSA9IHN0cmVhbTtcbiAgICBjb25zdCB7IHR3aXRjaFVzZXJuYW1lLCBzdHJlYW1Jc0xpdmUsIGF2YXRhckltYWdlVVJMIH0gPSB0ZWFtTWVtYmVyO1xuICAgIHJldHVybiAoXG4gICAgICA8U3RyZWFtQ2FyZFxuICAgICAgICBrZXk9e3N0cmVhbWVyfVxuICAgICAgICB7Li4ue1xuICAgICAgICAgIHR3aXRjaFVzZXJuYW1lLFxuICAgICAgICAgIHRpbWVTdGFydCxcbiAgICAgICAgICB0aW1lRW5kLFxuICAgICAgICAgIHN0cmVhbUlzTGl2ZSxcbiAgICAgICAgICBzdHJlYW1lcixcbiAgICAgICAgICBhdmF0YXJJbWFnZVVSTCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtzdHJlYW1zfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtcm93LWdhcDogMjBweDtcbiAgICAgICAgICByb3ctZ2FwOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU3RyZWFtZXJTY2hlZHVsZS5wcm9wVHlwZXMgPSB7XG4gIHNjaGVkdWxlOiBhcnJheU9mKFxuICAgIHNoYXBlKHtcbiAgICAgIHN0cmVhbWVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIHRpbWVTdGFydDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0aW1lRW5kOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KVxuICApLmlzUmVxdWlyZWQsXG4gIHRlYW1NZW1iZXJzOiBhcnJheU9mKFxuICAgIHNoYXBlKHtcbiAgICAgIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXG4gICAgICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzdHJlYW1Jc0xpdmU6IGJvb2wsXG4gICAgICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSlcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtZXJTY2hlZHVsZTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\organisms\\\\streamer-schedule.jsx */"));
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
    streamIsLive: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUuanN4Il0sIm5hbWVzIjpbIlN0cmVhbWVyU2NoZWR1bGUiLCJzY2hlZHVsZSIsInRlYW1NZW1iZXJzIiwic29ydGVkU2NoZWR1bGUiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwidGltZVN0YXJ0IiwiZ2V0VGltZSIsImNvbnNvbGUiLCJsb2ciLCJzdHJlYW1zIiwibWFwIiwic3RyZWFtIiwidGVhbU1lbWJlciIsImZpbmQiLCJtZW1iZXIiLCJ0d2l0Y2hVc2VybmFtZSIsInN0cmVhbWVyIiwidG9Mb3dlckNhc2UiLCJ0aW1lRW5kIiwic3RyZWFtSXNMaXZlIiwiYXZhdGFySW1hZ2VVUkwiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGlzcGxheU5hbWUiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBK0I7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN0RCxNQUFJLENBQUNELFFBQUwsRUFBZSxPQUFPLElBQVA7QUFDZixNQUFNRSxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUNyQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVLElBQUlDLElBQUosQ0FBU0YsQ0FBQyxDQUFDRyxTQUFYLEVBQXNCQyxPQUF0QixLQUFrQyxJQUFJRixJQUFKLENBQVNELENBQUMsQ0FBQ0UsU0FBWCxFQUFzQkMsT0FBdEIsRUFBNUM7QUFBQSxHQURxQixDQUF2QjtBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFUixrQkFBYyxFQUFkQTtBQUFGLEdBQVo7QUFDQSxNQUFNUyxPQUFPLEdBQUdULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQixVQUFDQyxNQUFELEVBQVk7QUFDN0MsUUFBTUMsVUFBVSxHQUNkYixXQUFXLENBQUNjLElBQVosQ0FBaUIsVUFBQ0MsTUFBRCxFQUFZO0FBQzNCLFVBQUksRUFBQ0EsTUFBRCxhQUFDQSxNQUFELHVCQUFDQSxNQUFNLENBQUVDLGNBQVQsQ0FBSixFQUE2QixPQUFPLEtBQVA7QUFDN0IsYUFDRUosTUFBTSxDQUFDSyxRQUFQLENBQWdCQyxXQUFoQixPQUFrQ0gsTUFBTSxDQUFDQyxjQUFQLENBQXNCRSxXQUF0QixFQURwQztBQUdELEtBTEQsS0FLTSxFQU5SO0FBRDZDLFFBUXJDWixTQVJxQyxHQVFKTSxNQVJJLENBUXJDTixTQVJxQztBQUFBLFFBUTFCYSxPQVIwQixHQVFKUCxNQVJJLENBUTFCTyxPQVIwQjtBQUFBLFFBUWpCRixRQVJpQixHQVFKTCxNQVJJLENBUWpCSyxRQVJpQjtBQUFBLFFBU3JDRCxjQVRxQyxHQVNZSCxVQVRaLENBU3JDRyxjQVRxQztBQUFBLFFBU3JCSSxZQVRxQixHQVNZUCxVQVRaLENBU3JCTyxZQVRxQjtBQUFBLFFBU1BDLGNBVE8sR0FTWVIsVUFUWixDQVNQUSxjQVRPO0FBVTdDLFdBQ0UsTUFBQywwREFBRDtBQUNFLFNBQUcsRUFBRUo7QUFEUCxPQUVNO0FBQ0ZELG9CQUFjLEVBQWRBLGNBREU7QUFFRlYsZUFBUyxFQUFUQSxTQUZFO0FBR0ZhLGFBQU8sRUFBUEEsT0FIRTtBQUlGQyxrQkFBWSxFQUFaQSxZQUpFO0FBS0ZILGNBQVEsRUFBUkEsUUFMRTtBQU1GSSxvQkFBYyxFQUFkQTtBQU5FLEtBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBYUQsR0F2QmUsQ0FBaEI7QUF3QkEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsT0FESDtBQUFBO0FBQUE7QUFBQSxrK0ZBREY7QUFjRCxDQTVDRDs7S0FBTVosZ0I7QUE4Q05BLGdCQUFnQixDQUFDd0IsU0FBakIsR0FBNkI7QUFDM0J2QixVQUFRLEVBQUV3QiwwREFBTyxDQUNmQyx3REFBSyxDQUFDO0FBQ0pQLFlBQVEsRUFBRVEsaURBQU0sQ0FBQ0MsVUFEYjtBQUVKcEIsYUFBUyxFQUFFbUIsaURBQU0sQ0FBQ0MsVUFGZDtBQUdKUCxXQUFPLEVBQUVNLGlEQUFNLENBQUNDO0FBSFosR0FBRCxDQURVLENBQVAsQ0FNUkEsVUFQeUI7QUFRM0IxQixhQUFXLEVBQUV1QiwwREFBTyxDQUNsQkMsd0RBQUssQ0FBQztBQUNKUixrQkFBYyxFQUFFUyxpREFEWjtBQUVKRSxlQUFXLEVBQUVGLGlEQUFNLENBQUNDLFVBRmhCO0FBR0pOLGdCQUFZLEVBQUVRLCtDQUhWO0FBSUpQLGtCQUFjLEVBQUVJLGlEQUFNLENBQUNDO0FBSm5CLEdBQUQsQ0FEYSxDQUFQLENBT1hBO0FBZnlCLENBQTdCO0FBa0JlNUIsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuNGM0ZGRjNGU5Njg1ZDNmYzllMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFycmF5T2YsIHNoYXBlLCBzdHJpbmcsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTdHJlYW1DYXJkIGZyb20gJy4uL2F0b21zL3N0cmVhbS1jYXJkJztcblxuY29uc3QgU3RyZWFtZXJTY2hlZHVsZSA9ICh7IHNjaGVkdWxlLCB0ZWFtTWVtYmVycyB9KSA9PiB7XG4gIGlmICghc2NoZWR1bGUpIHJldHVybiBudWxsO1xuICBjb25zdCBzb3J0ZWRTY2hlZHVsZSA9IHNjaGVkdWxlLnNvcnQoXG4gICAgKGEsIGIpID0+IG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXG4gICk7XG4gIGNvbnNvbGUubG9nKHsgc29ydGVkU2NoZWR1bGUgfSk7XG4gIGNvbnN0IHN0cmVhbXMgPSBzb3J0ZWRTY2hlZHVsZS5tYXAoKHN0cmVhbSkgPT4ge1xuICAgIGNvbnN0IHRlYW1NZW1iZXIgPVxuICAgICAgdGVhbU1lbWJlcnMuZmluZCgobWVtYmVyKSA9PiB7XG4gICAgICAgIGlmICghbWVtYmVyPy50d2l0Y2hVc2VybmFtZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHN0cmVhbS5zdHJlYW1lci50b0xvd2VyQ2FzZSgpID09PSBtZW1iZXIudHdpdGNoVXNlcm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSkgfHwge307XG4gICAgY29uc3QgeyB0aW1lU3RhcnQsIHRpbWVFbmQsIHN0cmVhbWVyIH0gPSBzdHJlYW07XG4gICAgY29uc3QgeyB0d2l0Y2hVc2VybmFtZSwgc3RyZWFtSXNMaXZlLCBhdmF0YXJJbWFnZVVSTCB9ID0gdGVhbU1lbWJlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0cmVhbUNhcmRcbiAgICAgICAga2V5PXtzdHJlYW1lcn1cbiAgICAgICAgey4uLntcbiAgICAgICAgICB0d2l0Y2hVc2VybmFtZSxcbiAgICAgICAgICB0aW1lU3RhcnQsXG4gICAgICAgICAgdGltZUVuZCxcbiAgICAgICAgICBzdHJlYW1Jc0xpdmUsXG4gICAgICAgICAgc3RyZWFtZXIsXG4gICAgICAgICAgYXZhdGFySW1hZ2VVUkwsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c3RyZWFtc31cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgICAgICAgcm93LWdhcDogMjBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblN0cmVhbWVyU2NoZWR1bGUucHJvcFR5cGVzID0ge1xuICBzY2hlZHVsZTogYXJyYXlPZihcbiAgICBzaGFwZSh7XG4gICAgICBzdHJlYW1lcjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICB0aW1lU3RhcnQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgdGltZUVuZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSlcbiAgKS5pc1JlcXVpcmVkLFxuICB0ZWFtTWVtYmVyczogYXJyYXlPZihcbiAgICBzaGFwZSh7XG4gICAgICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxuICAgICAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgc3RyZWFtSXNMaXZlOiBib29sLFxuICAgICAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmVhbWVyU2NoZWR1bGU7XG4iXSwic291cmNlUm9vdCI6IiJ9
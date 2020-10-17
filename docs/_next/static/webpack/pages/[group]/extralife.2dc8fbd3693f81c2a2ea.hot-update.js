webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/atoms/team-member-card.jsx":
/*!***********************************************!*\
  !*** ./components/atoms/team-member-card.jsx ***!
  \***********************************************/
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
/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar */ "./components/atoms/progress-bar.jsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\team-member-card.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      links = _ref.links,
      streamIsLive = _ref.streamIsLive,
      twitchUsername = _ref.twitchUsername;

  if (links === null || links === void 0 ? void 0 : links.page) {
    var href = links.page;

    if (streamIsLive && twitchUsername) {
      href = "https://www.twitch.tv/".concat(twitchUsername);
    }

    return __jsx("a", {
      href: href,
      target: "_blank",
      rel: "noreferrer",
      style: {
        display: 'grid'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, children);
  }

  return children;
};

_c = Wrapper;

var TeamMemberCard = function TeamMemberCard(_ref2) {
  var avatarImageURL = _ref2.avatarImageURL,
      displayName = _ref2.displayName,
      fundraisingGoal = _ref2.fundraisingGoal,
      links = _ref2.links,
      streamIsLive = _ref2.streamIsLive,
      twitchUsername = _ref2.twitchUsername,
      sumDonations = _ref2.sumDonations;
  return __jsx(Wrapper, {
    links: links,
    streamIsLive: streamIsLive,
    twitchUsername: twitchUsername,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-146597999" + " " + "team-member-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(displayName, "'s profile"),
    className: "jsx-146597999",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-146597999" + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, displayName), __jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    progress: sumDonations || 0,
    goal: fundraisingGoal,
    height: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "146597999",
    __self: _this
  }, "a.jsx-146597999{display:grid;}.team-member-card{width:200px;min-height:200px;border-radius:20px;box-sizing:border-box;color:#000;background:#fff;display:grid;place-items:center;padding:10px 15px;margin:10px;}img.jsx-146597999{border-radius:50%;width:100px;height:100px;box-shadow:0px 4px 8px rgba(0,0,0,0.5);margin:0 10px 10px;}.name.jsx-146597999{font-size:1.1rem;line-height:1;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUcwQixBQUdELEFBWU0sQUFPRCxZQWxCQSxDQUhuQixJQXNCZ0IsQ0FQRixXQVhPLENBWU4sQ0FPSyxZQU53QixLQVpwQixDQW1CeEIscUJBbEJhLFdBQ0ssQ0FXRyxlQVZOLElBV2YsU0FWcUIsbUJBQ0Qsa0JBQ04sWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIC8vIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXthdmF0YXJJbWFnZVVSTH0gYWx0PXtgJHtkaXNwbGF5TmFtZX0ncyBwcm9maWxlYH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZGlzcGxheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICBwcm9ncmVzcz17c3VtRG9uYXRpb25zIHx8IDB9XHJcbiAgICAgICAgICBnb2FsPXtmdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLnRlYW0tbWVtYmVyLWNhcmQpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIC8vIGlzVGVhbUNhcHRhaW46IGZhbHNlLFxyXG4gIGxpbmtzOiB7fSxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIHN1bURvbmF0aW9uczogMCxcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLnByb3BUeXBlcyA9IHtcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZ1bmRyYWlzaW5nR29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgLy8gaXNUZWFtQ2FwdGFpbjogYm9vbCxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBzdHJpbmcsXHJcbiAgICBzdHJlYW06IHN0cmluZyxcclxuICB9KSxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3VtRG9uYXRpb25zOiBudW1iZXIsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXJDYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
};

_c2 = TeamMemberCard;
TeamMemberCard.defaultProps = {
  // isTeamCaptain: false,
  links: {},
  streamIsLive: false,
  sumDonations: 0,
  twitchUsername: null
};
TeamMemberCard.propTypes = {
  avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  fundraisingGoal: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  // isTeamCaptain: bool,
  links: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    donate: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    page: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    stream: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
  }),
  streamIsLive: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  sumDonations: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (TeamMemberCard);

var _c, _c2;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "TeamMemberCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90ZWFtLW1lbWJlci1jYXJkLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwiY2hpbGRyZW4iLCJsaW5rcyIsInN0cmVhbUlzTGl2ZSIsInR3aXRjaFVzZXJuYW1lIiwicGFnZSIsImhyZWYiLCJkaXNwbGF5IiwiVGVhbU1lbWJlckNhcmQiLCJhdmF0YXJJbWFnZVVSTCIsImRpc3BsYXlOYW1lIiwiZnVuZHJhaXNpbmdHb2FsIiwic3VtRG9uYXRpb25zIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsInNoYXBlIiwiZG9uYXRlIiwic3RyZWFtIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF1RDtBQUFBLE1BQXBEQyxRQUFvRCxRQUFwREEsUUFBb0Q7QUFBQSxNQUExQ0MsS0FBMEMsUUFBMUNBLEtBQTBDO0FBQUEsTUFBbkNDLFlBQW1DLFFBQW5DQSxZQUFtQztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7O0FBQ3JFLE1BQUlGLEtBQUosYUFBSUEsS0FBSix1QkFBSUEsS0FBSyxDQUFFRyxJQUFYLEVBQWlCO0FBQ2YsUUFBSUMsSUFBSSxHQUFHSixLQUFLLENBQUNHLElBQWpCOztBQUNBLFFBQUlGLFlBQVksSUFBSUMsY0FBcEIsRUFBb0M7QUFDbENFLFVBQUksbUNBQTRCRixjQUE1QixDQUFKO0FBQ0Q7O0FBQ0QsV0FDRTtBQUNFLFVBQUksRUFBRUUsSUFEUjtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBR0UsU0FBRyxFQUFDLFlBSE47QUFJRSxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUdOLFFBTkgsQ0FERjtBQVVEOztBQUNELFNBQU9BLFFBQVA7QUFDRCxDQWxCRDs7S0FBTUQsTzs7QUFvQk4sSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixRQVNqQjtBQUFBLE1BUkpDLGNBUUksU0FSSkEsY0FRSTtBQUFBLE1BUEpDLFdBT0ksU0FQSkEsV0FPSTtBQUFBLE1BTkpDLGVBTUksU0FOSkEsZUFNSTtBQUFBLE1BSkpULEtBSUksU0FKSkEsS0FJSTtBQUFBLE1BSEpDLFlBR0ksU0FISkEsWUFHSTtBQUFBLE1BRkpDLGNBRUksU0FGSkEsY0FFSTtBQUFBLE1BREpRLFlBQ0ksU0FESkEsWUFDSTtBQUNKLFNBQ0UsTUFBQyxPQUFEO0FBQ0UsU0FBSyxFQUFFVixLQURUO0FBRUUsZ0JBQVksRUFBRUMsWUFGaEI7QUFHRSxrQkFBYyxFQUFFQyxjQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBQSx1Q0FBZSxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVLLGNBQVY7QUFBMEIsT0FBRyxZQUFLQyxXQUFMLGVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQSx1Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJBLFdBQXZCLENBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQ0UsWUFBUSxFQUFFRSxZQUFZLElBQUksQ0FENUI7QUFFRSxRQUFJLEVBQUVELGVBRlI7QUFHRSxVQUFNLEVBQUUsRUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FMRjtBQUFBO0FBQUE7QUFBQSwyckpBREY7QUFnREQsQ0ExREQ7O01BQU1ILGM7QUE0RE5BLGNBQWMsQ0FBQ0ssWUFBZixHQUE4QjtBQUM1QjtBQUNBWCxPQUFLLEVBQUUsRUFGcUI7QUFHNUJDLGNBQVksRUFBRSxLQUhjO0FBSTVCUyxjQUFZLEVBQUUsQ0FKYztBQUs1QlIsZ0JBQWMsRUFBRTtBQUxZLENBQTlCO0FBUUFJLGNBQWMsQ0FBQ00sU0FBZixHQUEyQjtBQUN6QkwsZ0JBQWMsRUFBRU0saURBQU0sQ0FBQ0MsVUFERTtBQUV6Qk4sYUFBVyxFQUFFSyxpREFBTSxDQUFDQyxVQUZLO0FBR3pCTCxpQkFBZSxFQUFFTSxpREFBTSxDQUFDRCxVQUhDO0FBSXpCO0FBQ0FkLE9BQUssRUFBRWdCLHdEQUFLLENBQUM7QUFDWEMsVUFBTSxFQUFFSixpREFERztBQUVYVixRQUFJLEVBQUVVLGlEQUZLO0FBR1hLLFVBQU0sRUFBRUwsaURBQU1BO0FBSEgsR0FBRCxDQUxhO0FBVXpCWixjQUFZLEVBQUVrQiwrQ0FWVztBQVd6QlQsY0FBWSxFQUFFSyxpREFYVztBQVl6QmIsZ0JBQWMsRUFBRVcsaURBQU1BO0FBWkcsQ0FBM0I7QUFlZVAsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuMmRjOGZiZDM2OTNmODFjMmEyZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIC8vIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXthdmF0YXJJbWFnZVVSTH0gYWx0PXtgJHtkaXNwbGF5TmFtZX0ncyBwcm9maWxlYH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZGlzcGxheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICBwcm9ncmVzcz17c3VtRG9uYXRpb25zIHx8IDB9XHJcbiAgICAgICAgICBnb2FsPXtmdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLnRlYW0tbWVtYmVyLWNhcmQpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIC8vIGlzVGVhbUNhcHRhaW46IGZhbHNlLFxyXG4gIGxpbmtzOiB7fSxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIHN1bURvbmF0aW9uczogMCxcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLnByb3BUeXBlcyA9IHtcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZ1bmRyYWlzaW5nR29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgLy8gaXNUZWFtQ2FwdGFpbjogYm9vbCxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBzdHJpbmcsXHJcbiAgICBzdHJlYW06IHN0cmluZyxcclxuICB9KSxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3VtRG9uYXRpb25zOiBudW1iZXIsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXJDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/atoms/team-member-card.jsx":
/*!***********************************************!*\
  !*** ./components/atoms/team-member-card.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-bar */ "./components/atoms/progress-bar.jsx");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card */ "./components/atoms/card.jsx");
/* harmony import */ var _extralife_member_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extralife-member-buttons */ "./components/atoms/extralife-member-buttons.jsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\team-member-card.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var LinkWrapper = function LinkWrapper(_ref) {
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
      className: "jsx-3625122276",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3625122276",
      __self: _this
    }, ".jsx-3625122276{display:grid;-webkit-text-decoration:none;text-decoration:none;place-items:center;min-height:200px;color:#444;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVXLEFBRTBCLGFBQ1Esa0RBQ0YsbUJBQ0YsaUJBQ04sV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQgRXh0cmFMaWZlTWVtYmVyQnV0dG9ucyBmcm9tICcuL2V4dHJhbGlmZS1tZW1iZXItYnV0dG9ucyc7XHJcblxyXG5jb25zdCBMaW5rV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhIGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW4nLFxyXG4gICAgICBjb2xvcjogJyNlMGJkMDAnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHN0cmVhbUlzTGl2ZSkge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdMaXZlIG5vdyEnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCByaWJib249e3JpYmJvbn0gaXNHbG93aW5nPXtzdHJlYW1Jc0xpdmV9IGxlZnRTaWRlPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbU1lbWJlckNhcmRcIj5cclxuICAgICAgICAgIDxMaW5rV3JhcHBlclxyXG4gICAgICAgICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgICAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICAgICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJJbWFnZVVSTH0gYWx0PXtgJHtkaXNwbGF5TmFtZX0ncyBwcm9maWxlYH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgICBwcm9ncmVzcz17c3VtRG9uYXRpb25zIHx8IDB9XHJcbiAgICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgaXNNb25leVxyXG4gICAgICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlQZXJjZW50PXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGlua1dyYXBwZXI+XHJcbiAgICAgICAgICA8RXh0cmFMaWZlTWVtYmVyQnV0dG9ucyBsaW5rcz17bGlua3N9IHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICA6Z2xvYmFsKC50ZWFtTWVtYmVyQ2FyZCkge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc1RlYW1DYXB0YWluOiBmYWxzZSxcclxuICBsaW5rczoge30sXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxuICBzdW1Eb25hdGlvbnM6IDAsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzVGVhbUNhcHRhaW46IGJvb2wsXHJcbiAgbGlua3M6IHNoYXBlKHtcclxuICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgcGFnZTogc3RyaW5nLFxyXG4gICAgc3RyZWFtOiBzdHJpbmcsXHJcbiAgfSksXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN1bURvbmF0aW9uczogbnVtYmVyLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTWVtYmVyQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
  }

  return children;
};

_c = LinkWrapper;

var TeamMemberCard = function TeamMemberCard(_ref2) {
  var avatarImageURL = _ref2.avatarImageURL,
      displayName = _ref2.displayName,
      fundraisingGoal = _ref2.fundraisingGoal,
      isTeamCaptain = _ref2.isTeamCaptain,
      links = _ref2.links,
      streamIsLive = _ref2.streamIsLive,
      twitchUsername = _ref2.twitchUsername,
      sumDonations = _ref2.sumDonations;
  var ribbon = {};

  if (isTeamCaptain) {
    ribbon = _objectSpread(_objectSpread({}, ribbon), {}, {
      text: 'Team Captain',
      color: '#e0bd00'
    });
  }

  if (streamIsLive) {
    ribbon = _objectSpread(_objectSpread({}, ribbon), {}, {
      text: 'Live now!'
    });
  }

  return __jsx(_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ribbon: ribbon,
    isGlowing: streamIsLive,
    leftSide: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3231930272" + " " + "teamMemberCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(LinkWrapper, {
    links: links,
    streamIsLive: streamIsLive,
    twitchUsername: twitchUsername,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(displayName, "'s profile"),
    className: "jsx-3231930272",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3231930272" + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, displayName), __jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    progress: sumDonations || 0,
    goal: fundraisingGoal,
    height: 20,
    isMoney: true,
    displayProgress: true,
    displayPercent: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })), __jsx(_extralife_member_buttons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    links: links,
    streamIsLive: streamIsLive,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3231930272",
    __self: _this
  }, ".teamMemberCard{width:200px;box-sizing:border-box;color:#000;}img.jsx-3231930272{border-radius:50%;width:100px;height:100px;box-shadow:0px 4px 8px rgba(0,0,0,0.5);margin:0 10px 10px;}.name.jsx-3231930272{font-size:1.1rem;line-height:1;text-align:center;font-weight:bold;-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFVyxBQUcyQixBQUtNLEFBT0QsWUFYSyxLQVlSLENBUEYsWUFDQyxDQU9LLEdBWlAsU0FNK0IsRUFMNUMsSUFZbUIsaUJBQ0csZ0JBUEQsbUJBQ3JCLDBDQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5nLCBudW1iZXIsIGJvb2wsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCBFeHRyYUxpZmVNZW1iZXJCdXR0b25zIGZyb20gJy4vZXh0cmFsaWZlLW1lbWJlci1idXR0b25zJztcclxuXHJcbmNvbnN0IExpbmtXcmFwcGVyID0gKHsgY2hpbGRyZW4sIGxpbmtzLCBzdHJlYW1Jc0xpdmUsIHR3aXRjaFVzZXJuYW1lIH0pID0+IHtcclxuICBpZiAobGlua3M/LnBhZ2UpIHtcclxuICAgIGxldCBocmVmID0gbGlua3MucGFnZTtcclxuICAgIGlmIChzdHJlYW1Jc0xpdmUgJiYgdHdpdGNoVXNlcm5hbWUpIHtcclxuICAgICAgaHJlZiA9IGBodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZX1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGEgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvYT5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmNvbnN0IFRlYW1NZW1iZXJDYXJkID0gKHtcclxuICBhdmF0YXJJbWFnZVVSTCxcclxuICBkaXNwbGF5TmFtZSxcclxuICBmdW5kcmFpc2luZ0dvYWwsXHJcbiAgaXNUZWFtQ2FwdGFpbixcclxuICBsaW5rcyxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgc3VtRG9uYXRpb25zLFxyXG59KSA9PiB7XHJcbiAgbGV0IHJpYmJvbiA9IHt9O1xyXG4gIGlmIChpc1RlYW1DYXB0YWluKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ1RlYW0gQ2FwdGFpbicsXHJcbiAgICAgIGNvbG9yOiAnI2UwYmQwMCcsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHJpYmJvbj17cmliYm9ufSBpc0dsb3dpbmc9e3N0cmVhbUlzTGl2ZX0gbGVmdFNpZGU+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtTWVtYmVyQ2FyZFwiPlxyXG4gICAgICAgICAgPExpbmtXcmFwcGVyXHJcbiAgICAgICAgICAgIGxpbmtzPXtsaW5rc31cclxuICAgICAgICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgICAgICAgIHR3aXRjaFVzZXJuYW1lPXt0d2l0Y2hVc2VybmFtZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhckltYWdlVVJMfSBhbHQ9e2Ake2Rpc3BsYXlOYW1lfSdzIHByb2ZpbGVgfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZGlzcGxheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgICAgIHByb2dyZXNzPXtzdW1Eb25hdGlvbnMgfHwgMH1cclxuICAgICAgICAgICAgICBnb2FsPXtmdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICBpc01vbmV5XHJcbiAgICAgICAgICAgICAgZGlzcGxheVByb2dyZXNzXHJcbiAgICAgICAgICAgICAgZGlzcGxheVBlcmNlbnQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaW5rV3JhcHBlcj5cclxuICAgICAgICAgIDxFeHRyYUxpZmVNZW1iZXJCdXR0b25zIGxpbmtzPXtsaW5rc30gc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIDpnbG9iYWwoLnRlYW1NZW1iZXJDYXJkKSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzVGVhbUNhcHRhaW46IGZhbHNlLFxyXG4gIGxpbmtzOiB7fSxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIHN1bURvbmF0aW9uczogMCxcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLnByb3BUeXBlcyA9IHtcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZ1bmRyYWlzaW5nR29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNUZWFtQ2FwdGFpbjogYm9vbCxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBzdHJpbmcsXHJcbiAgICBzdHJlYW06IHN0cmluZyxcclxuICB9KSxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3VtRG9uYXRpb25zOiBudW1iZXIsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXJDYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */")));
};

_c2 = TeamMemberCard;
TeamMemberCard.defaultProps = {
  isTeamCaptain: false,
  links: {},
  streamIsLive: false,
  sumDonations: 0,
  twitchUsername: null
};
TeamMemberCard.propTypes = {
  avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  fundraisingGoal: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
  isTeamCaptain: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  links: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    donate: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    page: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    stream: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  }),
  streamIsLive: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  sumDonations: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
  twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (TeamMemberCard);

var _c, _c2;

$RefreshReg$(_c, "LinkWrapper");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90ZWFtLW1lbWJlci1jYXJkLmpzeCJdLCJuYW1lcyI6WyJMaW5rV3JhcHBlciIsImNoaWxkcmVuIiwibGlua3MiLCJzdHJlYW1Jc0xpdmUiLCJ0d2l0Y2hVc2VybmFtZSIsInBhZ2UiLCJocmVmIiwiVGVhbU1lbWJlckNhcmQiLCJhdmF0YXJJbWFnZVVSTCIsImRpc3BsYXlOYW1lIiwiZnVuZHJhaXNpbmdHb2FsIiwiaXNUZWFtQ2FwdGFpbiIsInN1bURvbmF0aW9ucyIsInJpYmJvbiIsInRleHQiLCJjb2xvciIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJib29sIiwic2hhcGUiLCJkb25hdGUiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF1RDtBQUFBLE1BQXBEQyxRQUFvRCxRQUFwREEsUUFBb0Q7QUFBQSxNQUExQ0MsS0FBMEMsUUFBMUNBLEtBQTBDO0FBQUEsTUFBbkNDLFlBQW1DLFFBQW5DQSxZQUFtQztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7O0FBQ3pFLE1BQUlGLEtBQUosYUFBSUEsS0FBSix1QkFBSUEsS0FBSyxDQUFFRyxJQUFYLEVBQWlCO0FBQ2YsUUFBSUMsSUFBSSxHQUFHSixLQUFLLENBQUNHLElBQWpCOztBQUNBLFFBQUlGLFlBQVksSUFBSUMsY0FBcEIsRUFBb0M7QUFDbENFLFVBQUksbUNBQTRCRixjQUE1QixDQUFKO0FBQ0Q7O0FBQ0QsV0FDRTtBQUFHLFVBQUksRUFBRUUsSUFBVDtBQUFlLFlBQU0sRUFBQyxRQUF0QjtBQUErQixTQUFHLEVBQUMsWUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dM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VCxjQUFZLEVBQUVRLGlEQVhXO0FBWXpCaEIsZ0JBQWMsRUFBRWMsaURBQU1BO0FBWkcsQ0FBM0I7QUFlZVgsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuMTQ0ZjM2MjY0OGEwOTU5NmE4NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQgRXh0cmFMaWZlTWVtYmVyQnV0dG9ucyBmcm9tICcuL2V4dHJhbGlmZS1tZW1iZXItYnV0dG9ucyc7XHJcblxyXG5jb25zdCBMaW5rV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhIGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW4nLFxyXG4gICAgICBjb2xvcjogJyNlMGJkMDAnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHN0cmVhbUlzTGl2ZSkge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdMaXZlIG5vdyEnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCByaWJib249e3JpYmJvbn0gaXNHbG93aW5nPXtzdHJlYW1Jc0xpdmV9IGxlZnRTaWRlPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbU1lbWJlckNhcmRcIj5cclxuICAgICAgICAgIDxMaW5rV3JhcHBlclxyXG4gICAgICAgICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgICAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICAgICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJJbWFnZVVSTH0gYWx0PXtgJHtkaXNwbGF5TmFtZX0ncyBwcm9maWxlYH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgICBwcm9ncmVzcz17c3VtRG9uYXRpb25zIHx8IDB9XHJcbiAgICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgaXNNb25leVxyXG4gICAgICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlQZXJjZW50PXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGlua1dyYXBwZXI+XHJcbiAgICAgICAgICA8RXh0cmFMaWZlTWVtYmVyQnV0dG9ucyBsaW5rcz17bGlua3N9IHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICA6Z2xvYmFsKC50ZWFtTWVtYmVyQ2FyZCkge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc1RlYW1DYXB0YWluOiBmYWxzZSxcclxuICBsaW5rczoge30sXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxuICBzdW1Eb25hdGlvbnM6IDAsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzVGVhbUNhcHRhaW46IGJvb2wsXHJcbiAgbGlua3M6IHNoYXBlKHtcclxuICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgcGFnZTogc3RyaW5nLFxyXG4gICAgc3RyZWFtOiBzdHJpbmcsXHJcbiAgfSksXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN1bURvbmF0aW9uczogbnVtYmVyLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTWVtYmVyQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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


var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\team-member-card.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





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
        lineNumber: 12,
        columnNumber: 7
      }
    }, children);
  }

  return children;
};

_c = Wrapper;

var getButton = function getButton(link, text) {
  return __jsx("a", {
    style: {
      textDecoration: 'none'
    },
    href: link,
    target: "_blank",
    rel: "noreferrer",
    className: "jsx-3428448279" + " " + "memberButton ".concat(text),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, text, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3428448279",
    __self: _this
  }, ".memberButton.jsx-3428448279{width:100%;padding:5px;border-radius:8px;box-sizing:border-box;height:40px;place-items:center;font-weight:bold;display:grid;background:#26c2eb;color:#ffffff;-webkit-text-decoration:none;text-decoration:none;}.Twitch.jsx-3428448279{background:#772ce8;}.Twitch.jsx-3428448279:hover,.Twitch.jsx-3428448279:focus{background:#541da5;}.Donate.jsx-3428448279{background:#7fd836;}.Donate.jsx-3428448279:hover{background:#47b200;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DUyxBQU13QixBQWFRLEFBSUEsQUFHQSxBQUdBLFdBdEJQLFFBYWQsQUFJQSxBQUdBLEFBR0EsSUF0Qm9CLGtCQUNJLHNCQUNWLFlBQ08sbUJBQ0YsaUJBQ0osYUFDTSxtQkFDTCxjQUNPLGtEQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XHJcbiAgICAgIGhyZWY9e2xpbmt9XHJcbiAgICAgIGNsYXNzTmFtZT17YG1lbWJlckJ1dHRvbiAke3RleHR9YH1cclxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICA+XHJcbiAgICAgIHt0ZXh0fVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVtYmVyQnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjZjMmViO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NzJjZTg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuVHdpdGNoOmhvdmVyLFxyXG4gICAgICAgICAgLlR3aXRjaDpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NDFkYTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzdmZDgzNjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Eb25hdGU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDdiMjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFR3aXRjaEJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ1R3aXRjaCcpO1xyXG5jb25zdCBnZXREb25hdGVCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdEb25hdGUnKTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbnMgPSAobGlua3MsIHN0cmVhbUlzTGl2ZSkgPT4ge1xyXG4gIGlmICghbGlua3M/LmRvbmF0ZSB8fCAhbGlua3M/LnN0cmVhbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZG9uYXRlQnV0dG9uID0gbGlua3M/LmRvbmF0ZSA/IGdldERvbmF0ZUJ1dHRvbihsaW5rcy5kb25hdGUpIDogbnVsbDtcclxuICBsZXQgdHdpdGNoQnV0dG9uID0gbnVsbDtcclxuICBpZiAoIXN0cmVhbUlzTGl2ZSAmJiBsaW5rcz8uc3RyZWFtKSB7XHJcbiAgICB0d2l0Y2hCdXR0b24gPSBnZXRUd2l0Y2hCdXR0b24obGlua3Muc3RyZWFtKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIHt0d2l0Y2hCdXR0b259XHJcbiAgICAgIHtkb25hdGVCdXR0b259XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6ICcjZTBiZDAwJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChzdHJlYW1Jc0xpdmUpIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnTGl2ZSBub3chJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBnZXRCdXR0b25zKGxpbmtzLCBzdHJlYW1Jc0xpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkIHJpYmJvbj17cmliYm9ufT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlci1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJJbWFnZVVSTH0gYWx0PXtgJHtkaXNwbGF5TmFtZX0ncyBwcm9maWxlYH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgICBwcm9ncmVzcz17c3VtRG9uYXRpb25zIHx8IDB9XHJcbiAgICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtidXR0b25zfVxyXG4gICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDpnbG9iYWwoLnRlYW0tbWVtYmVyLWNhcmQpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc1RlYW1DYXB0YWluOiBmYWxzZSxcclxuICBsaW5rczoge30sXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxuICBzdW1Eb25hdGlvbnM6IDAsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzVGVhbUNhcHRhaW46IGJvb2wsXHJcbiAgbGlua3M6IHNoYXBlKHtcclxuICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgcGFnZTogc3RyaW5nLFxyXG4gICAgc3RyZWFtOiBzdHJpbmcsXHJcbiAgfSksXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN1bURvbmF0aW9uczogbnVtYmVyLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTWVtYmVyQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
};

var getTwitchButton = function getTwitchButton(link) {
  return getButton(link, 'Twitch');
};

var getDonateButton = function getDonateButton(link) {
  return getButton(link, 'Donate');
};

var getButtons = function getButtons(links, streamIsLive) {
  if (!(links === null || links === void 0 ? void 0 : links.donate) || !(links === null || links === void 0 ? void 0 : links.stream)) return null;
  var donateButton = (links === null || links === void 0 ? void 0 : links.donate) ? getDonateButton(links.donate) : null;
  var twitchButton = null;

  if (!streamIsLive && (links === null || links === void 0 ? void 0 : links.stream)) {
    twitchButton = getTwitchButton(links.stream);
  }

  return __jsx("div", {
    className: "jsx-1016144638" + " " + "buttonContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, twitchButton, donateButton, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1016144638",
    __self: _this
  }, ".buttonContainer{margin-top:5px;display:grid;grid-auto-columns:1fr 1fr;grid-auto-flow:column;grid-row:1;grid-column-gap:7px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGUyxBQUc0QixlQUNGLGFBQ2EsMEJBQ0osc0JBQ1gsV0FDUyxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xcdGVhbS1tZW1iZXItY2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIG51bWJlciwgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgbGlua3MsIHN0cmVhbUlzTGl2ZSwgdHdpdGNoVXNlcm5hbWUgfSkgPT4ge1xyXG4gIGlmIChsaW5rcz8ucGFnZSkge1xyXG4gICAgbGV0IGhyZWYgPSBsaW5rcy5wYWdlO1xyXG4gICAgaWYgKHN0cmVhbUlzTGl2ZSAmJiB0d2l0Y2hVc2VybmFtZSkge1xyXG4gICAgICBocmVmID0gYGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnV0dG9uID0gKGxpbmssIHRleHQpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxyXG4gICAgICBocmVmPXtsaW5rfVxyXG4gICAgICBjbGFzc05hbWU9e2BtZW1iZXJCdXR0b24gJHt0ZXh0fWB9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbWJlckJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Ud2l0Y2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzcyY2U4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaDpob3ZlcixcclxuICAgICAgICAgIC5Ud2l0Y2g6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTQxZGE1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkRvbmF0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmQ4MzY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ3YjIwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUd2l0Y2hCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdUd2l0Y2gnKTtcclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgfHwgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGVhbU1lbWJlckNhcmQgPSAoe1xyXG4gIGF2YXRhckltYWdlVVJMLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGZ1bmRyYWlzaW5nR29hbCxcclxuICBpc1RlYW1DYXB0YWluLFxyXG4gIGxpbmtzLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICBzdW1Eb25hdGlvbnMsXHJcbn0pID0+IHtcclxuICBsZXQgcmliYm9uID0ge307XHJcbiAgaWYgKGlzVGVhbUNhcHRhaW4pIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnVGVhbSBDYXB0YWlucycsXHJcbiAgICAgIGNvbG9yOiAnI2UwYmQwMCcsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gZ2V0QnV0dG9ucyhsaW5rcywgc3RyZWFtSXNMaXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgdHdpdGNoVXNlcm5hbWU9e3R3aXRjaFVzZXJuYW1lfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntkaXNwbGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICAgIGdvYWw9e2Z1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
};

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
      text: 'Team Captains',
      color: '#e0bd00'
    });
  }

  if (streamIsLive) {
    ribbon = _objectSpread(_objectSpread({}, ribbon), {}, {
      text: 'Live now!'
    });
  }

  var buttons = getButtons(links, streamIsLive);
  return __jsx(Wrapper, {
    links: links,
    streamIsLive: streamIsLive,
    twitchUsername: twitchUsername,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ribbon: ribbon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2660580708" + " " + "team-member-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(displayName, "'s profile"),
    className: "jsx-2660580708",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2660580708" + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, displayName), __jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    progress: sumDonations || 0,
    goal: fundraisingGoal,
    height: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  })), buttons, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2660580708",
    __self: _this
  }, "a.jsx-2660580708{display:grid;}.team-member-card{width:200px;min-height:200px;box-sizing:border-box;color:#000;display:grid;place-items:center;}img.jsx-2660580708{border-radius:50%;width:100px;height:100px;box-shadow:0px 4px 8px rgba(0,0,0,0.5);margin:0 10px 10px;}.name.jsx-2660580708{font-size:1.1rem;line-height:1;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKYSxBQUc4QixBQUdELEFBUU0sQUFPRCxZQWRBLENBSG5CLElBa0JnQixDQVBGLFdBUFUsQ0FRVCxDQU9LLFlBTndCLE1BTzVDLEVBZmEsV0FDRSxhQUNNLE9BT0EsWUFOckIsT0FPQSIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XHJcbiAgICAgIGhyZWY9e2xpbmt9XHJcbiAgICAgIGNsYXNzTmFtZT17YG1lbWJlckJ1dHRvbiAke3RleHR9YH1cclxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICA+XHJcbiAgICAgIHt0ZXh0fVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVtYmVyQnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjZjMmViO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NzJjZTg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuVHdpdGNoOmhvdmVyLFxyXG4gICAgICAgICAgLlR3aXRjaDpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NDFkYTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzdmZDgzNjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Eb25hdGU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDdiMjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFR3aXRjaEJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ1R3aXRjaCcpO1xyXG5jb25zdCBnZXREb25hdGVCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdEb25hdGUnKTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbnMgPSAobGlua3MsIHN0cmVhbUlzTGl2ZSkgPT4ge1xyXG4gIGlmICghbGlua3M/LmRvbmF0ZSB8fCAhbGlua3M/LnN0cmVhbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZG9uYXRlQnV0dG9uID0gbGlua3M/LmRvbmF0ZSA/IGdldERvbmF0ZUJ1dHRvbihsaW5rcy5kb25hdGUpIDogbnVsbDtcclxuICBsZXQgdHdpdGNoQnV0dG9uID0gbnVsbDtcclxuICBpZiAoIXN0cmVhbUlzTGl2ZSAmJiBsaW5rcz8uc3RyZWFtKSB7XHJcbiAgICB0d2l0Y2hCdXR0b24gPSBnZXRUd2l0Y2hCdXR0b24obGlua3Muc3RyZWFtKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIHt0d2l0Y2hCdXR0b259XHJcbiAgICAgIHtkb25hdGVCdXR0b259XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6ICcjZTBiZDAwJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChzdHJlYW1Jc0xpdmUpIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnTGl2ZSBub3chJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBnZXRCdXR0b25zKGxpbmtzLCBzdHJlYW1Jc0xpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkIHJpYmJvbj17cmliYm9ufT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlci1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJJbWFnZVVSTH0gYWx0PXtgJHtkaXNwbGF5TmFtZX0ncyBwcm9maWxlYH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgICBwcm9ncmVzcz17c3VtRG9uYXRpb25zIHx8IDB9XHJcbiAgICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtidXR0b25zfVxyXG4gICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDpnbG9iYWwoLnRlYW0tbWVtYmVyLWNhcmQpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc1RlYW1DYXB0YWluOiBmYWxzZSxcclxuICBsaW5rczoge30sXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxuICBzdW1Eb25hdGlvbnM6IDAsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzVGVhbUNhcHRhaW46IGJvb2wsXHJcbiAgbGlua3M6IHNoYXBlKHtcclxuICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgcGFnZTogc3RyaW5nLFxyXG4gICAgc3RyZWFtOiBzdHJpbmcsXHJcbiAgfSksXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN1bURvbmF0aW9uczogbnVtYmVyLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTWVtYmVyQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90ZWFtLW1lbWJlci1jYXJkLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwiY2hpbGRyZW4iLCJsaW5rcyIsInN0cmVhbUlzTGl2ZSIsInR3aXRjaFVzZXJuYW1lIiwicGFnZSIsImhyZWYiLCJkaXNwbGF5IiwiZ2V0QnV0dG9uIiwibGluayIsInRleHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImdldFR3aXRjaEJ1dHRvbiIsImdldERvbmF0ZUJ1dHRvbiIsImdldEJ1dHRvbnMiLCJkb25hdGUiLCJzdHJlYW0iLCJkb25hdGVCdXR0b24iLCJ0d2l0Y2hCdXR0b24iLCJUZWFtTWVtYmVyQ2FyZCIsImF2YXRhckltYWdlVVJMIiwiZGlzcGxheU5hbWUiLCJmdW5kcmFpc2luZ0dvYWwiLCJpc1RlYW1DYXB0YWluIiwic3VtRG9uYXRpb25zIiwicmliYm9uIiwiY29sb3IiLCJidXR0b25zIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImJvb2wiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXVEO0FBQUEsTUFBcERDLFFBQW9ELFFBQXBEQSxRQUFvRDtBQUFBLE1BQTFDQyxLQUEwQyxRQUExQ0EsS0FBMEM7QUFBQSxNQUFuQ0MsWUFBbUMsUUFBbkNBLFlBQW1DO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjs7QUFDckUsTUFBSUYsS0FBSixhQUFJQSxLQUFKLHVCQUFJQSxLQUFLLENBQUVHLElBQVgsRUFBaUI7QUFDZixRQUFJQyxJQUFJLEdBQUdKLEtBQUssQ0FBQ0csSUFBakI7O0FBQ0EsUUFBSUYsWUFBWSxJQUFJQyxjQUFwQixFQUFvQztBQUNsQ0UsVUFBSSxtQ0FBNEJGLGNBQTVCLENBQUo7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LGlCQUFlLEVBQUVVLGlEQUFNLENBQUNELFVBSEM7QUFJekJSLGVBQWEsRUFBRVUsK0NBSlU7QUFLekIvQixPQUFLLEVBQUVnQyx3REFBSyxDQUFDO0FBQ1huQixVQUFNLEVBQUVlLGlEQURHO0FBRVh6QixRQUFJLEVBQUV5QixpREFGSztBQUdYZCxVQUFNLEVBQUVjLGlEQUFNQTtBQUhILEdBQUQsQ0FMYTtBQVV6QjNCLGNBQVksRUFBRThCLCtDQVZXO0FBV3pCVCxjQUFZLEVBQUVRLGlEQVhXO0FBWXpCNUIsZ0JBQWMsRUFBRTBCLGlEQUFNQTtBQVpHLENBQTNCO0FBZWVYLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLjJkNDUwNTg5ZDEwZWVmMmM3MGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIG51bWJlciwgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgbGlua3MsIHN0cmVhbUlzTGl2ZSwgdHdpdGNoVXNlcm5hbWUgfSkgPT4ge1xyXG4gIGlmIChsaW5rcz8ucGFnZSkge1xyXG4gICAgbGV0IGhyZWYgPSBsaW5rcy5wYWdlO1xyXG4gICAgaWYgKHN0cmVhbUlzTGl2ZSAmJiB0d2l0Y2hVc2VybmFtZSkge1xyXG4gICAgICBocmVmID0gYGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnV0dG9uID0gKGxpbmssIHRleHQpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxyXG4gICAgICBocmVmPXtsaW5rfVxyXG4gICAgICBjbGFzc05hbWU9e2BtZW1iZXJCdXR0b24gJHt0ZXh0fWB9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbWJlckJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Ud2l0Y2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzcyY2U4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaDpob3ZlcixcclxuICAgICAgICAgIC5Ud2l0Y2g6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTQxZGE1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkRvbmF0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmQ4MzY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ3YjIwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUd2l0Y2hCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdUd2l0Y2gnKTtcclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgfHwgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGVhbU1lbWJlckNhcmQgPSAoe1xyXG4gIGF2YXRhckltYWdlVVJMLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGZ1bmRyYWlzaW5nR29hbCxcclxuICBpc1RlYW1DYXB0YWluLFxyXG4gIGxpbmtzLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICBzdW1Eb25hdGlvbnMsXHJcbn0pID0+IHtcclxuICBsZXQgcmliYm9uID0ge307XHJcbiAgaWYgKGlzVGVhbUNhcHRhaW4pIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnVGVhbSBDYXB0YWlucycsXHJcbiAgICAgIGNvbG9yOiAnI2UwYmQwMCcsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gZ2V0QnV0dG9ucyhsaW5rcywgc3RyZWFtSXNMaXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgdHdpdGNoVXNlcm5hbWU9e3R3aXRjaFVzZXJuYW1lfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntkaXNwbGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICAgIGdvYWw9e2Z1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
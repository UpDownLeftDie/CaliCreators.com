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
  var gridColumn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#26c2eb';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noreferrer",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4244655178", [gridColumn, gridColumn, color]]]) + " " + "memberButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4244655178",
    dynamic: [gridColumn, gridColumn, color],
    __self: _this
  }, ".__jsx-style-dynamic-selector{grid-column:".concat(gridColumn, ";tab-index:").concat(gridColumn, ";background:").concat(color, ";}.memberButton{width:100%;padding:5px;border-radius:8px;color:white;box-sizing:border-box;height:40px;place-items:center;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;display:inline-grid;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCUyxBQUd3QixBQVc0QixXQVYzQixZQUNNLGtCQUNOLEFBU3lCLFlBUmYsc0JBQ1YsS0FRMEIsT0FQbkIsbUJBQ0UsY0FPekIsb0NBTnFCLGlCQUNHLG9CQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCwgZ3JpZENvbHVtbiA9IDEsIGNvbG9yID0gJyMyNmMyZWInKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cIm1lbWJlckJ1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9hPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5tZW1iZXJCdXR0b24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBncmlkLWNvbHVtbjogJHtncmlkQ29sdW1ufTtcclxuICAgICAgICAgIHRhYi1pbmRleDogJHtncmlkQ29sdW1ufTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJywgMSwgJyM3YWU1MjInKTtcclxuY29uc3QgZ2V0VHdpdGNoQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnVHdpdGNoJywgMiwgJyM3NzJjZTgnKTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbnMgPSAobGlua3MsIHN0cmVhbUlzTGl2ZSkgPT4ge1xyXG4gIGlmICghbGlua3M/LmRvbmF0ZSB8fCAhbGlua3M/LnN0cmVhbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZG9uYXRlQnV0dG9uID0gbGlua3M/LmRvbmF0ZSA/IGdldERvbmF0ZUJ1dHRvbihsaW5rcy5kb25hdGUpIDogbnVsbDtcclxuICBsZXQgdHdpdGNoQnV0dG9uID0gbnVsbDtcclxuICBpZiAoIXN0cmVhbUlzTGl2ZSAmJiBsaW5rcz8uc3RyZWFtKSB7XHJcbiAgICB0d2l0Y2hCdXR0b24gPSBnZXRUd2l0Y2hCdXR0b24obGlua3Muc3RyZWFtKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIHt0d2l0Y2hCdXR0b259XHJcbiAgICAgIHtkb25hdGVCdXR0b259XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6XHJcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNGRURCMzcgMCUsICNGREI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOEE2RTJGIDQwJSwgdHJhbnNwYXJlbnQgODAlKSxyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNGRkZGRkYgMCUsICNGRkZGQUMgOCUsICNEMUI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpOycsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gZ2V0QnV0dG9ucyhsaW5rcywgc3RyZWFtSXNMaXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgdHdpdGNoVXNlcm5hbWU9e3R3aXRjaFVzZXJuYW1lfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntkaXNwbGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICAgIGdvYWw9e2Z1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */")));
};

var getDonateButton = function getDonateButton(link) {
  return getButton(link, 'Donate', 1, '#7ae522');
};

var getTwitchButton = function getTwitchButton(link) {
  return getButton(link, 'Twitch', 2, '#772ce8');
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, twitchButton, donateButton, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1016144638",
    __self: _this
  }, ".buttonContainer{margin-top:5px;display:grid;grid-auto-columns:1fr 1fr;grid-auto-flow:column;grid-row:1;grid-column-gap:7px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FUyxBQUc0QixlQUNGLGFBQ2EsMEJBQ0osc0JBQ1gsV0FDUyxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xcdGVhbS1tZW1iZXItY2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIG51bWJlciwgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgbGlua3MsIHN0cmVhbUlzTGl2ZSwgdHdpdGNoVXNlcm5hbWUgfSkgPT4ge1xyXG4gIGlmIChsaW5rcz8ucGFnZSkge1xyXG4gICAgbGV0IGhyZWYgPSBsaW5rcy5wYWdlO1xyXG4gICAgaWYgKHN0cmVhbUlzTGl2ZSAmJiB0d2l0Y2hVc2VybmFtZSkge1xyXG4gICAgICBocmVmID0gYGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnV0dG9uID0gKGxpbmssIHRleHQsIGdyaWRDb2x1bW4gPSAxLCBjb2xvciA9ICcjMjZjMmViJykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YSBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJtZW1iZXJCdXR0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCgubWVtYmVyQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46ICR7Z3JpZENvbHVtbn07XHJcbiAgICAgICAgICB0YWItaW5kZXg6ICR7Z3JpZENvbHVtbn07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yfTtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldERvbmF0ZUJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ0RvbmF0ZScsIDEsICcjN2FlNTIyJyk7XHJcbmNvbnN0IGdldFR3aXRjaEJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ1R3aXRjaCcsIDIsICcjNzcyY2U4Jyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgfHwgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGVhbU1lbWJlckNhcmQgPSAoe1xyXG4gIGF2YXRhckltYWdlVVJMLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGZ1bmRyYWlzaW5nR29hbCxcclxuICBpc1RlYW1DYXB0YWluLFxyXG4gIGxpbmtzLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICBzdW1Eb25hdGlvbnMsXHJcbn0pID0+IHtcclxuICBsZXQgcmliYm9uID0ge307XHJcbiAgaWYgKGlzVGVhbUNhcHRhaW4pIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnVGVhbSBDYXB0YWlucycsXHJcbiAgICAgIGNvbG9yOlxyXG4gICAgICAgICdyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgcmlnaHQgYm90dG9tLCAjRkVEQjM3IDAlLCAjRkRCOTMxIDglLCAjOWY3OTI4IDMwJSwgIzhBNkUyRiA0MCUsIHRyYW5zcGFyZW50IDgwJSkscmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IGxlZnQgdG9wLCAjRkZGRkZGIDAlLCAjRkZGRkFDIDglLCAjRDFCNDY0IDI1JSwgIzVkNGExZiA2Mi41JSwgIzVkNGExZiAxMDAlKTsnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHN0cmVhbUlzTGl2ZSkge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdMaXZlIG5vdyEnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgYnV0dG9ucyA9IGdldEJ1dHRvbnMobGlua3MsIHN0cmVhbUlzTGl2ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyXHJcbiAgICAgIGxpbmtzPXtsaW5rc31cclxuICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgIHR3aXRjaFVzZXJuYW1lPXt0d2l0Y2hVc2VybmFtZX1cclxuICAgID5cclxuICAgICAgPENhcmQgcmliYm9uPXtyaWJib259PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyLWNhcmRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhckltYWdlVVJMfSBhbHQ9e2Ake2Rpc3BsYXlOYW1lfSdzIHByb2ZpbGVgfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZGlzcGxheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgICAgIHByb2dyZXNzPXtzdW1Eb25hdGlvbnMgfHwgMH1cclxuICAgICAgICAgICAgICBnb2FsPXtmdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOmdsb2JhbCgudGVhbS1tZW1iZXItY2FyZCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzVGVhbUNhcHRhaW46IGZhbHNlLFxyXG4gIGxpbmtzOiB7fSxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIHN1bURvbmF0aW9uczogMCxcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLnByb3BUeXBlcyA9IHtcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZ1bmRyYWlzaW5nR29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNUZWFtQ2FwdGFpbjogYm9vbCxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBzdHJpbmcsXHJcbiAgICBzdHJlYW06IHN0cmluZyxcclxuICB9KSxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3VtRG9uYXRpb25zOiBudW1iZXIsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXJDYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
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
      color: 'radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);'
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
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ribbon: ribbon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2660580708" + " " + "team-member-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(displayName, "'s profile"),
    className: "jsx-2660580708",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2660580708" + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, displayName), __jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    progress: sumDonations || 0,
    goal: fundraisingGoal,
    height: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  })), buttons, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2660580708",
    __self: _this
  }, "a.jsx-2660580708{display:grid;}.team-member-card{width:200px;min-height:200px;box-sizing:border-box;color:#000;display:grid;place-items:center;}img.jsx-2660580708{border-radius:50%;width:100px;height:100px;box-shadow:0px 4px 8px rgba(0,0,0,0.5);margin:0 10px 10px;}.name.jsx-2660580708{font-size:1.1rem;line-height:1;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJYSxBQUc4QixBQUdELEFBUU0sQUFPRCxZQWRBLENBSG5CLElBa0JnQixDQVBGLFdBUFUsQ0FRVCxDQU9LLFlBTndCLE1BTzVDLEVBZmEsV0FDRSxhQUNNLE9BT0EsWUFOckIsT0FPQSIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCwgZ3JpZENvbHVtbiA9IDEsIGNvbG9yID0gJyMyNmMyZWInKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cIm1lbWJlckJ1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9hPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5tZW1iZXJCdXR0b24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBncmlkLWNvbHVtbjogJHtncmlkQ29sdW1ufTtcclxuICAgICAgICAgIHRhYi1pbmRleDogJHtncmlkQ29sdW1ufTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJywgMSwgJyM3YWU1MjInKTtcclxuY29uc3QgZ2V0VHdpdGNoQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnVHdpdGNoJywgMiwgJyM3NzJjZTgnKTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbnMgPSAobGlua3MsIHN0cmVhbUlzTGl2ZSkgPT4ge1xyXG4gIGlmICghbGlua3M/LmRvbmF0ZSB8fCAhbGlua3M/LnN0cmVhbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZG9uYXRlQnV0dG9uID0gbGlua3M/LmRvbmF0ZSA/IGdldERvbmF0ZUJ1dHRvbihsaW5rcy5kb25hdGUpIDogbnVsbDtcclxuICBsZXQgdHdpdGNoQnV0dG9uID0gbnVsbDtcclxuICBpZiAoIXN0cmVhbUlzTGl2ZSAmJiBsaW5rcz8uc3RyZWFtKSB7XHJcbiAgICB0d2l0Y2hCdXR0b24gPSBnZXRUd2l0Y2hCdXR0b24obGlua3Muc3RyZWFtKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIHt0d2l0Y2hCdXR0b259XHJcbiAgICAgIHtkb25hdGVCdXR0b259XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6XHJcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNGRURCMzcgMCUsICNGREI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOEE2RTJGIDQwJSwgdHJhbnNwYXJlbnQgODAlKSxyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNGRkZGRkYgMCUsICNGRkZGQUMgOCUsICNEMUI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpOycsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gZ2V0QnV0dG9ucyhsaW5rcywgc3RyZWFtSXNMaXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgdHdpdGNoVXNlcm5hbWU9e3R3aXRjaFVzZXJuYW1lfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntkaXNwbGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICAgIGdvYWw9e2Z1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90ZWFtLW1lbWJlci1jYXJkLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwiY2hpbGRyZW4iLCJsaW5rcyIsInN0cmVhbUlzTGl2ZSIsInR3aXRjaFVzZXJuYW1lIiwicGFnZSIsImhyZWYiLCJkaXNwbGF5IiwiZ2V0QnV0dG9uIiwibGluayIsInRleHQiLCJncmlkQ29sdW1uIiwiY29sb3IiLCJnZXREb25hdGVCdXR0b24iLCJnZXRUd2l0Y2hCdXR0b24iLCJnZXRCdXR0b25zIiwiZG9uYXRlIiwic3RyZWFtIiwiZG9uYXRlQnV0dG9uIiwidHdpdGNoQnV0dG9uIiwiVGVhbU1lbWJlckNhcmQiLCJhdmF0YXJJbWFnZVVSTCIsImRpc3BsYXlOYW1lIiwiZnVuZHJhaXNpbmdHb2FsIiwiaXNUZWFtQ2FwdGFpbiIsInN1bURvbmF0aW9ucyIsInJpYmJvbiIsImJ1dHRvbnMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiYm9vbCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBdUQ7QUFBQSxNQUFwREMsUUFBb0QsUUFBcERBLFFBQW9EO0FBQUEsTUFBMUNDLEtBQTBDLFFBQTFDQSxLQUEwQztBQUFBLE1BQW5DQyxZQUFtQyxRQUFuQ0EsWUFBbUM7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCOztBQUNyRSxNQUFJRixLQUFKLGFBQUlBLEtBQUosdUJBQUlBLEtBQUssQ0FBRUcsSUFBWCxFQUFpQjtBQUNmLFFBQUlDLElBQUksR0FBR0osS0FBSyxDQUFDRyxJQUFqQjs7QUFDQSxRQUFJRixZQUFZLElBQUlDLGNBQXBCLEVBQW9DO0FBQ2xDRSxVQUFJLG1DQUE0QkYsY0FBNUIsQ0FBSjtBQUNE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LGVBQWEsRUFBRSxLQURhO0FBRTVCdEIsT0FBSyxFQUFFLEVBRnFCO0FBRzVCQyxjQUFZLEVBQUUsS0FIYztBQUk1QnNCLGNBQVksRUFBRSxDQUpjO0FBSzVCckIsZ0JBQWMsRUFBRTtBQUxZLENBQTlCO0FBUUFnQixjQUFjLENBQUNTLFNBQWYsR0FBMkI7QUFDekJSLGdCQUFjLEVBQUVTLGlEQUFNLENBQUNDLFVBREU7QUFFekJULGFBQVcsRUFBRVEsaURBQU0sQ0FBQ0MsVUFGSztBQUd6QlIsaUJBQWUsRUFBRVMsaURBQU0sQ0FBQ0QsVUFIQztBQUl6QlAsZUFBYSxFQUFFUywrQ0FKVTtBQUt6Qi9CLE9BQUssRUFBRWdDLHdEQUFLLENBQUM7QUFDWGxCLFVBQU0sRUFBRWMsaURBREc7QUFFWHpCLFFBQUksRUFBRXlCLGlEQUZLO0FBR1hiLFVBQU0sRUFBRWEsaURBQU1BO0FBSEgsR0FBRCxDQUxhO0FBVXpCM0IsY0FBWSxFQUFFOEIsK0NBVlc7QUFXekJSLGNBQVksRUFBRU8saURBWFc7QUFZekI1QixnQkFBYyxFQUFFMEIsaURBQU1BO0FBWkcsQ0FBM0I7QUFlZVYsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuMzNiZjg2NTRjYTgzZTAyMDk4ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCwgZ3JpZENvbHVtbiA9IDEsIGNvbG9yID0gJyMyNmMyZWInKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cIm1lbWJlckJ1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9hPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5tZW1iZXJCdXR0b24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBncmlkLWNvbHVtbjogJHtncmlkQ29sdW1ufTtcclxuICAgICAgICAgIHRhYi1pbmRleDogJHtncmlkQ29sdW1ufTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJywgMSwgJyM3YWU1MjInKTtcclxuY29uc3QgZ2V0VHdpdGNoQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnVHdpdGNoJywgMiwgJyM3NzJjZTgnKTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbnMgPSAobGlua3MsIHN0cmVhbUlzTGl2ZSkgPT4ge1xyXG4gIGlmICghbGlua3M/LmRvbmF0ZSB8fCAhbGlua3M/LnN0cmVhbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZG9uYXRlQnV0dG9uID0gbGlua3M/LmRvbmF0ZSA/IGdldERvbmF0ZUJ1dHRvbihsaW5rcy5kb25hdGUpIDogbnVsbDtcclxuICBsZXQgdHdpdGNoQnV0dG9uID0gbnVsbDtcclxuICBpZiAoIXN0cmVhbUlzTGl2ZSAmJiBsaW5rcz8uc3RyZWFtKSB7XHJcbiAgICB0d2l0Y2hCdXR0b24gPSBnZXRUd2l0Y2hCdXR0b24obGlua3Muc3RyZWFtKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIHt0d2l0Y2hCdXR0b259XHJcbiAgICAgIHtkb25hdGVCdXR0b259XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6XHJcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNGRURCMzcgMCUsICNGREI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOEE2RTJGIDQwJSwgdHJhbnNwYXJlbnQgODAlKSxyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNGRkZGRkYgMCUsICNGRkZGQUMgOCUsICNEMUI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpOycsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gZ2V0QnV0dG9ucyhsaW5rcywgc3RyZWFtSXNMaXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgdHdpdGNoVXNlcm5hbWU9e3R3aXRjaFVzZXJuYW1lfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntkaXNwbGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICAgIGdvYWw9e2Z1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
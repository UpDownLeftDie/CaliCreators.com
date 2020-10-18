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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3487462605", [gridColumn, color]]]) + " " + "memberButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3487462605",
    dynamic: [gridColumn, color],
    __self: _this
  }, ".__jsx-style-dynamic-selector{grid-column:".concat(gridColumn, ";background:").concat(color, ";}.memberButton{width:100%;padding:5px;border-radius:8px;color:white;box-sizing:border-box;height:40px;place-items:center;-webkit-text-decoration:none;text-decoration:none;display:inline-grid;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCUyxBQUd3QixBQVc0QixXQVYzQixZQUNNLGtCQUNOLEFBUzBCLFlBUmhCLHNCQUNWLE1BUWhCLE1BUHVCLG1CQUNFLGtEQUNELG9CQUNDLGtEQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCwgZ3JpZENvbHVtbiA9IDEsIGNvbG9yID0gJyMyNmMyZWInKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cIm1lbWJlckJ1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9hPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5tZW1iZXJCdXR0b24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46ICR7Z3JpZENvbHVtbn07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yfTtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldERvbmF0ZUJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ0RvbmF0ZScsIDEsICcjN2FlNTIyJyk7XHJcbmNvbnN0IGdldFR3aXRjaEJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ1R3aXRjaCcsIDIsICcjNzcyY2U4Jyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgfHwgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6XHJcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNGRURCMzcgMCUsICNGREI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOEE2RTJGIDQwJSwgdHJhbnNwYXJlbnQgODAlKSxyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNGRkZGRkYgMCUsICNGRkZGQUMgOCUsICNEMUI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpOycsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gZ2V0QnV0dG9ucyhsaW5rcywgc3RyZWFtSXNMaXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgdHdpdGNoVXNlcm5hbWU9e3R3aXRjaFVzZXJuYW1lfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntkaXNwbGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICAgIGdvYWw9e2Z1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */")));
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
    className: "jsx-586585515" + " " + "buttonContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, twitchButton, donateButton, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "586585515",
    __self: _this
  }, ".buttonContainer{margin-top:5px;display:grid;grid-auto-columns:1fr 1fr;grid-auto-flow:column;grid-row:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FUyxBQUc0QixlQUNGLGFBQ2EsMEJBQ0osc0JBQ1gsV0FDYiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCwgZ3JpZENvbHVtbiA9IDEsIGNvbG9yID0gJyMyNmMyZWInKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cIm1lbWJlckJ1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9hPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5tZW1iZXJCdXR0b24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46ICR7Z3JpZENvbHVtbn07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yfTtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldERvbmF0ZUJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ0RvbmF0ZScsIDEsICcjN2FlNTIyJyk7XHJcbmNvbnN0IGdldFR3aXRjaEJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ1R3aXRjaCcsIDIsICcjNzcyY2U4Jyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgfHwgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6XHJcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNGRURCMzcgMCUsICNGREI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOEE2RTJGIDQwJSwgdHJhbnNwYXJlbnQgODAlKSxyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNGRkZGRkYgMCUsICNGRkZGQUMgOCUsICNEMUI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpOycsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gZ2V0QnV0dG9ucyhsaW5rcywgc3RyZWFtSXNMaXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgdHdpdGNoVXNlcm5hbWU9e3R3aXRjaFVzZXJuYW1lfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntkaXNwbGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICAgIGdvYWw9e2Z1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
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
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ribbon: ribbon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2660580708" + " " + "team-member-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(displayName, "'s profile"),
    className: "jsx-2660580708",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2660580708" + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, displayName), __jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    progress: sumDonations || 0,
    goal: fundraisingGoal,
    height: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })), buttons, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2660580708",
    __self: _this
  }, "a.jsx-2660580708{display:grid;}.team-member-card{width:200px;min-height:200px;box-sizing:border-box;color:#000;display:grid;place-items:center;}img.jsx-2660580708{border-radius:50%;width:100px;height:100px;box-shadow:0px 4px 8px rgba(0,0,0,0.5);margin:0 10px 10px;}.name.jsx-2660580708{font-size:1.1rem;line-height:1;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThIYSxBQUc4QixBQUdELEFBUU0sQUFPRCxZQWRBLENBSG5CLElBa0JnQixDQVBGLFdBUFUsQ0FRVCxDQU9LLFlBTndCLE1BTzVDLEVBZmEsV0FDRSxhQUNNLE9BT0EsWUFOckIsT0FPQSIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCwgZ3JpZENvbHVtbiA9IDEsIGNvbG9yID0gJyMyNmMyZWInKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIGhyZWY9e2xpbmt9IGNsYXNzTmFtZT1cIm1lbWJlckJ1dHRvblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9hPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5tZW1iZXJCdXR0b24pIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46ICR7Z3JpZENvbHVtbn07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yfTtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldERvbmF0ZUJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ0RvbmF0ZScsIDEsICcjN2FlNTIyJyk7XHJcbmNvbnN0IGdldFR3aXRjaEJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ1R3aXRjaCcsIDIsICcjNzcyY2U4Jyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgfHwgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6XHJcbiAgICAgICAgJ3JhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCByaWdodCBib3R0b20sICNGRURCMzcgMCUsICNGREI5MzEgOCUsICM5Zjc5MjggMzAlLCAjOEE2RTJGIDQwJSwgdHJhbnNwYXJlbnQgODAlKSxyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgbGVmdCB0b3AsICNGRkZGRkYgMCUsICNGRkZGQUMgOCUsICNEMUI0NjQgMjUlLCAjNWQ0YTFmIDYyLjUlLCAjNWQ0YTFmIDEwMCUpOycsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoc3RyZWFtSXNMaXZlKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ0xpdmUgbm93IScsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zdCBidXR0b25zID0gZ2V0QnV0dG9ucyhsaW5rcywgc3RyZWFtSXNMaXZlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJcclxuICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgdHdpdGNoVXNlcm5hbWU9e3R3aXRjaFVzZXJuYW1lfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCByaWJib249e3JpYmJvbn0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPntkaXNwbGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICAgIGdvYWw9e2Z1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YnV0dG9uc31cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90ZWFtLW1lbWJlci1jYXJkLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwiY2hpbGRyZW4iLCJsaW5rcyIsInN0cmVhbUlzTGl2ZSIsInR3aXRjaFVzZXJuYW1lIiwicGFnZSIsImhyZWYiLCJkaXNwbGF5IiwiZ2V0QnV0dG9uIiwibGluayIsInRleHQiLCJncmlkQ29sdW1uIiwiY29sb3IiLCJnZXREb25hdGVCdXR0b24iLCJnZXRUd2l0Y2hCdXR0b24iLCJnZXRCdXR0b25zIiwiZG9uYXRlIiwic3RyZWFtIiwiZG9uYXRlQnV0dG9uIiwidHdpdGNoQnV0dG9uIiwiVGVhbU1lbWJlckNhcmQiLCJhdmF0YXJJbWFnZVVSTCIsImRpc3BsYXlOYW1lIiwiZnVuZHJhaXNpbmdHb2FsIiwiaXNUZWFtQ2FwdGFpbiIsInN1bURvbmF0aW9ucyIsInJpYmJvbiIsImJ1dHRvbnMiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiYm9vbCIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBdUQ7QUFBQSxNQUFwREMsUUFBb0QsUUFBcERBLFFBQW9EO0FBQUEsTUFBMUNDLEtBQTBDLFFBQTFDQSxLQUEwQztBQUFBLE1BQW5DQyxZQUFtQyxRQUFuQ0EsWUFBbUM7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCOztBQUNyRSxNQUFJRixLQUFKLGFBQUlBLEtBQUosdUJBQUlBLEtBQUssQ0FBRUcsSUFBWCxFQUFpQjtBQUNmLFFBQUlDLElBQUksR0FBR0osS0FBSyxDQUFDRyxJQUFqQjs7QUFDQSxRQUFJRixZQUFZLElBQUlDLGNBQXBCLEVBQW9DO0FBQ2xDRSxVQUFJLG1DQUE0QkYsY0FBNUIsQ0FBSjtBQUNE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LGNBQVksRUFBRSxLQUhjO0FBSTVCc0IsY0FBWSxFQUFFLENBSmM7QUFLNUJyQixnQkFBYyxFQUFFO0FBTFksQ0FBOUI7QUFRQWdCLGNBQWMsQ0FBQ1MsU0FBZixHQUEyQjtBQUN6QlIsZ0JBQWMsRUFBRVMsaURBQU0sQ0FBQ0MsVUFERTtBQUV6QlQsYUFBVyxFQUFFUSxpREFBTSxDQUFDQyxVQUZLO0FBR3pCUixpQkFBZSxFQUFFUyxpREFBTSxDQUFDRCxVQUhDO0FBSXpCUCxlQUFhLEVBQUVTLCtDQUpVO0FBS3pCL0IsT0FBSyxFQUFFZ0Msd0RBQUssQ0FBQztBQUNYbEIsVUFBTSxFQUFFYyxpREFERztBQUVYekIsUUFBSSxFQUFFeUIsaURBRks7QUFHWGIsVUFBTSxFQUFFYSxpREFBTUE7QUFISCxHQUFELENBTGE7QUFVekIzQixjQUFZLEVBQUU4QiwrQ0FWVztBQVd6QlIsY0FBWSxFQUFFTyxpREFYVztBQVl6QjVCLGdCQUFjLEVBQUUwQixpREFBTUE7QUFaRyxDQUEzQjtBQWVlViw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS5hZjg5YWE1YzBjMjE4ZmU0YTgzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5nLCBudW1iZXIsIGJvb2wsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gKHsgY2hpbGRyZW4sIGxpbmtzLCBzdHJlYW1Jc0xpdmUsIHR3aXRjaFVzZXJuYW1lIH0pID0+IHtcclxuICBpZiAobGlua3M/LnBhZ2UpIHtcclxuICAgIGxldCBocmVmID0gbGlua3MucGFnZTtcclxuICAgIGlmIChzdHJlYW1Jc0xpdmUgJiYgdHdpdGNoVXNlcm5hbWUpIHtcclxuICAgICAgaHJlZiA9IGBodHRwczovL3d3dy50d2l0Y2gudHYvJHt0d2l0Y2hVc2VybmFtZX1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGFcclxuICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbiA9IChsaW5rLCB0ZXh0LCBncmlkQ29sdW1uID0gMSwgY29sb3IgPSAnIzI2YzJlYicpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGEgaHJlZj17bGlua30gY2xhc3NOYW1lPVwibWVtYmVyQnV0dG9uXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLm1lbWJlckJ1dHRvbikge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBncmlkLWNvbHVtbjogJHtncmlkQ29sdW1ufTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJywgMSwgJyM3YWU1MjInKTtcclxuY29uc3QgZ2V0VHdpdGNoQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnVHdpdGNoJywgMiwgJyM3NzJjZTgnKTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbnMgPSAobGlua3MsIHN0cmVhbUlzTGl2ZSkgPT4ge1xyXG4gIGlmICghbGlua3M/LmRvbmF0ZSB8fCAhbGlua3M/LnN0cmVhbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZG9uYXRlQnV0dG9uID0gbGlua3M/LmRvbmF0ZSA/IGdldERvbmF0ZUJ1dHRvbihsaW5rcy5kb25hdGUpIDogbnVsbDtcclxuICBsZXQgdHdpdGNoQnV0dG9uID0gbnVsbDtcclxuICBpZiAoIXN0cmVhbUlzTGl2ZSAmJiBsaW5rcz8uc3RyZWFtKSB7XHJcbiAgICB0d2l0Y2hCdXR0b24gPSBnZXRUd2l0Y2hCdXR0b24obGlua3Muc3RyZWFtKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIHt0d2l0Y2hCdXR0b259XHJcbiAgICAgIHtkb25hdGVCdXR0b259XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRlYW1NZW1iZXJDYXJkID0gKHtcclxuICBhdmF0YXJJbWFnZVVSTCxcclxuICBkaXNwbGF5TmFtZSxcclxuICBmdW5kcmFpc2luZ0dvYWwsXHJcbiAgaXNUZWFtQ2FwdGFpbixcclxuICBsaW5rcyxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgc3VtRG9uYXRpb25zLFxyXG59KSA9PiB7XHJcbiAgbGV0IHJpYmJvbiA9IHt9O1xyXG4gIGlmIChpc1RlYW1DYXB0YWluKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ1RlYW0gQ2FwdGFpbnMnLFxyXG4gICAgICBjb2xvcjpcclxuICAgICAgICAncmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IHJpZ2h0IGJvdHRvbSwgI0ZFREIzNyAwJSwgI0ZEQjkzMSA4JSwgIzlmNzkyOCAzMCUsICM4QTZFMkYgNDAlLCB0cmFuc3BhcmVudCA4MCUpLHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBsZWZ0IHRvcCwgI0ZGRkZGRiAwJSwgI0ZGRkZBQyA4JSwgI0QxQjQ2NCAyNSUsICM1ZDRhMWYgNjIuNSUsICM1ZDRhMWYgMTAwJSk7JyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChzdHJlYW1Jc0xpdmUpIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnTGl2ZSBub3chJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBnZXRCdXR0b25zKGxpbmtzLCBzdHJlYW1Jc0xpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkIHJpYmJvbj17cmliYm9ufT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlci1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJJbWFnZVVSTH0gYWx0PXtgJHtkaXNwbGF5TmFtZX0ncyBwcm9maWxlYH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgICBwcm9ncmVzcz17c3VtRG9uYXRpb25zIHx8IDB9XHJcbiAgICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtidXR0b25zfVxyXG4gICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDpnbG9iYWwoLnRlYW0tbWVtYmVyLWNhcmQpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc1RlYW1DYXB0YWluOiBmYWxzZSxcclxuICBsaW5rczoge30sXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxuICBzdW1Eb25hdGlvbnM6IDAsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzVGVhbUNhcHRhaW46IGJvb2wsXHJcbiAgbGlua3M6IHNoYXBlKHtcclxuICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgcGFnZTogc3RyaW5nLFxyXG4gICAgc3RyZWFtOiBzdHJpbmcsXHJcbiAgfSksXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN1bURvbmF0aW9uczogbnVtYmVyLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTWVtYmVyQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
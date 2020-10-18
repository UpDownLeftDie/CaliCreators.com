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
    href: link,
    target: "_blank",
    rel: "noreferrer",
    className: "jsx-1748069581" + " " + "memberButton ".concat(text),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, text, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1748069581",
    __self: _this
  }, "{color:#ffffff;-webkit-text-decoration:none;text-decoration:none;}.memberButton{width:100%;padding:5px;border-radius:8px;box-sizing:border-box;height:40px;place-items:center;font-weight:bold;display:grid;background:#26c2eb;}.Twitch{background:#772ce8;}.Twitch:hover,.Twitch:focus{background:#541da5;}.Donate{background:#7fd836;}.Donate:hover{background:#47b200;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDUyxBQUV5QixBQUlELEFBV1EsQUFJQSxBQUdBLEFBR0EsV0FwQlAsR0FKTyxLQWVyQixBQUlBLEFBR0EsQUFHQSxJQXBCb0Isa0JBQ0ksc0JBQ1YsQ0FtQmhCLFdBbEJ1QixtQkFDRixpQkFDSixhQUNNLG1CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPXtsaW5rfVxyXG4gICAgICBjbGFzc05hbWU9e2BtZW1iZXJCdXR0b24gJHt0ZXh0fWB9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgIC5tZW1iZXJCdXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuVHdpdGNoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzc3MmNlODtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Ud2l0Y2g6aG92ZXIsXHJcbiAgICAgICAgICAuVHdpdGNoOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU0MWRhNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Eb25hdGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2ZkODM2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkRvbmF0ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0N2IyMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VHdpdGNoQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnVHdpdGNoJyk7XHJcbmNvbnN0IGdldERvbmF0ZUJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ0RvbmF0ZScpO1xyXG5cclxuY29uc3QgZ2V0QnV0dG9ucyA9IChsaW5rcywgc3RyZWFtSXNMaXZlKSA9PiB7XHJcbiAgaWYgKCFsaW5rcz8uZG9uYXRlIHx8ICFsaW5rcz8uc3RyZWFtKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBkb25hdGVCdXR0b24gPSBsaW5rcz8uZG9uYXRlID8gZ2V0RG9uYXRlQnV0dG9uKGxpbmtzLmRvbmF0ZSkgOiBudWxsO1xyXG4gIGxldCB0d2l0Y2hCdXR0b24gPSBudWxsO1xyXG4gIGlmICghc3RyZWFtSXNMaXZlICYmIGxpbmtzPy5zdHJlYW0pIHtcclxuICAgIHR3aXRjaEJ1dHRvbiA9IGdldFR3aXRjaEJ1dHRvbihsaW5rcy5zdHJlYW0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Db250YWluZXJcIj5cclxuICAgICAge3R3aXRjaEJ1dHRvbn1cclxuICAgICAge2RvbmF0ZUJ1dHRvbn1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCguYnV0dG9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRlYW1NZW1iZXJDYXJkID0gKHtcclxuICBhdmF0YXJJbWFnZVVSTCxcclxuICBkaXNwbGF5TmFtZSxcclxuICBmdW5kcmFpc2luZ0dvYWwsXHJcbiAgaXNUZWFtQ2FwdGFpbixcclxuICBsaW5rcyxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgc3VtRG9uYXRpb25zLFxyXG59KSA9PiB7XHJcbiAgbGV0IHJpYmJvbiA9IHt9O1xyXG4gIGlmIChpc1RlYW1DYXB0YWluKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ1RlYW0gQ2FwdGFpbnMnLFxyXG4gICAgICBjb2xvcjogJyNlMGJkMDAnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHN0cmVhbUlzTGl2ZSkge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdMaXZlIG5vdyEnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgYnV0dG9ucyA9IGdldEJ1dHRvbnMobGlua3MsIHN0cmVhbUlzTGl2ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyXHJcbiAgICAgIGxpbmtzPXtsaW5rc31cclxuICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgIHR3aXRjaFVzZXJuYW1lPXt0d2l0Y2hVc2VybmFtZX1cclxuICAgID5cclxuICAgICAgPENhcmQgcmliYm9uPXtyaWJib259PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyLWNhcmRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhckltYWdlVVJMfSBhbHQ9e2Ake2Rpc3BsYXlOYW1lfSdzIHByb2ZpbGVgfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZGlzcGxheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgICAgIHByb2dyZXNzPXtzdW1Eb25hdGlvbnMgfHwgMH1cclxuICAgICAgICAgICAgICBnb2FsPXtmdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOmdsb2JhbCgudGVhbS1tZW1iZXItY2FyZCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzVGVhbUNhcHRhaW46IGZhbHNlLFxyXG4gIGxpbmtzOiB7fSxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIHN1bURvbmF0aW9uczogMCxcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLnByb3BUeXBlcyA9IHtcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZ1bmRyYWlzaW5nR29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNUZWFtQ2FwdGFpbjogYm9vbCxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBzdHJpbmcsXHJcbiAgICBzdHJlYW06IHN0cmluZyxcclxuICB9KSxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3VtRG9uYXRpb25zOiBudW1iZXIsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXJDYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
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
      lineNumber: 80,
      columnNumber: 5
    }
  }, twitchButton, donateButton, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1016144638",
    __self: _this
  }, ".buttonContainer{margin-top:5px;display:grid;grid-auto-columns:1fr 1fr;grid-auto-flow:column;grid-row:1;grid-column-gap:7px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GUyxBQUc0QixlQUNGLGFBQ2EsMEJBQ0osc0JBQ1gsV0FDUyxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xcdGVhbS1tZW1iZXItY2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIG51bWJlciwgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgbGlua3MsIHN0cmVhbUlzTGl2ZSwgdHdpdGNoVXNlcm5hbWUgfSkgPT4ge1xyXG4gIGlmIChsaW5rcz8ucGFnZSkge1xyXG4gICAgbGV0IGhyZWYgPSBsaW5rcy5wYWdlO1xyXG4gICAgaWYgKHN0cmVhbUlzTGl2ZSAmJiB0d2l0Y2hVc2VybmFtZSkge1xyXG4gICAgICBocmVmID0gYGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnV0dG9uID0gKGxpbmssIHRleHQpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17bGlua31cclxuICAgICAgY2xhc3NOYW1lPXtgbWVtYmVyQnV0dG9uICR7dGV4dH1gfVxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgID5cclxuICAgICAge3RleHR9XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAubWVtYmVyQnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjZjMmViO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NzJjZTg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuVHdpdGNoOmhvdmVyLFxyXG4gICAgICAgICAgLlR3aXRjaDpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NDFkYTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzdmZDgzNjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Eb25hdGU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDdiMjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFR3aXRjaEJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ1R3aXRjaCcpO1xyXG5jb25zdCBnZXREb25hdGVCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdEb25hdGUnKTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbnMgPSAobGlua3MsIHN0cmVhbUlzTGl2ZSkgPT4ge1xyXG4gIGlmICghbGlua3M/LmRvbmF0ZSB8fCAhbGlua3M/LnN0cmVhbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZG9uYXRlQnV0dG9uID0gbGlua3M/LmRvbmF0ZSA/IGdldERvbmF0ZUJ1dHRvbihsaW5rcy5kb25hdGUpIDogbnVsbDtcclxuICBsZXQgdHdpdGNoQnV0dG9uID0gbnVsbDtcclxuICBpZiAoIXN0cmVhbUlzTGl2ZSAmJiBsaW5rcz8uc3RyZWFtKSB7XHJcbiAgICB0d2l0Y2hCdXR0b24gPSBnZXRUd2l0Y2hCdXR0b24obGlua3Muc3RyZWFtKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIHt0d2l0Y2hCdXR0b259XHJcbiAgICAgIHtkb25hdGVCdXR0b259XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW5zJyxcclxuICAgICAgY29sb3I6ICcjZTBiZDAwJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChzdHJlYW1Jc0xpdmUpIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnTGl2ZSBub3chJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBnZXRCdXR0b25zKGxpbmtzLCBzdHJlYW1Jc0xpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgIHN0cmVhbUlzTGl2ZT17c3RyZWFtSXNMaXZlfVxyXG4gICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkIHJpYmJvbj17cmliYm9ufT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlci1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJJbWFnZVVSTH0gYWx0PXtgJHtkaXNwbGF5TmFtZX0ncyBwcm9maWxlYH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgICBwcm9ncmVzcz17c3VtRG9uYXRpb25zIHx8IDB9XHJcbiAgICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtidXR0b25zfVxyXG4gICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDpnbG9iYWwoLnRlYW0tbWVtYmVyLWNhcmQpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc1RlYW1DYXB0YWluOiBmYWxzZSxcclxuICBsaW5rczoge30sXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxuICBzdW1Eb25hdGlvbnM6IDAsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzVGVhbUNhcHRhaW46IGJvb2wsXHJcbiAgbGlua3M6IHNoYXBlKHtcclxuICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgcGFnZTogc3RyaW5nLFxyXG4gICAgc3RyZWFtOiBzdHJpbmcsXHJcbiAgfSksXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN1bURvbmF0aW9uczogbnVtYmVyLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTWVtYmVyQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
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
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx(_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ribbon: ribbon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2660580708" + " " + "team-member-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(displayName, "'s profile"),
    className: "jsx-2660580708",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2660580708" + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, displayName), __jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    progress: sumDonations || 0,
    goal: fundraisingGoal,
    height: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  })), buttons, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2660580708",
    __self: _this
  }, "a.jsx-2660580708{display:grid;}.team-member-card{width:200px;min-height:200px;box-sizing:border-box;color:#000;display:grid;place-items:center;}img.jsx-2660580708{border-radius:50%;width:100px;height:100px;box-shadow:0px 4px 8px rgba(0,0,0,0.5);margin:0 10px 10px;}.name.jsx-2660580708{font-size:1.1rem;line-height:1;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJYSxBQUc4QixBQUdELEFBUU0sQUFPRCxZQWRBLENBSG5CLElBa0JnQixDQVBGLFdBUFUsQ0FRVCxDQU9LLFlBTndCLE1BTzVDLEVBZmEsV0FDRSxhQUNNLE9BT0EsWUFOckIsT0FPQSIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPXtsaW5rfVxyXG4gICAgICBjbGFzc05hbWU9e2BtZW1iZXJCdXR0b24gJHt0ZXh0fWB9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgIC5tZW1iZXJCdXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuVHdpdGNoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzc3MmNlODtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Ud2l0Y2g6aG92ZXIsXHJcbiAgICAgICAgICAuVHdpdGNoOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU0MWRhNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Eb25hdGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2ZkODM2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkRvbmF0ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0N2IyMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VHdpdGNoQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnVHdpdGNoJyk7XHJcbmNvbnN0IGdldERvbmF0ZUJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ0RvbmF0ZScpO1xyXG5cclxuY29uc3QgZ2V0QnV0dG9ucyA9IChsaW5rcywgc3RyZWFtSXNMaXZlKSA9PiB7XHJcbiAgaWYgKCFsaW5rcz8uZG9uYXRlIHx8ICFsaW5rcz8uc3RyZWFtKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBkb25hdGVCdXR0b24gPSBsaW5rcz8uZG9uYXRlID8gZ2V0RG9uYXRlQnV0dG9uKGxpbmtzLmRvbmF0ZSkgOiBudWxsO1xyXG4gIGxldCB0d2l0Y2hCdXR0b24gPSBudWxsO1xyXG4gIGlmICghc3RyZWFtSXNMaXZlICYmIGxpbmtzPy5zdHJlYW0pIHtcclxuICAgIHR3aXRjaEJ1dHRvbiA9IGdldFR3aXRjaEJ1dHRvbihsaW5rcy5zdHJlYW0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Db250YWluZXJcIj5cclxuICAgICAge3R3aXRjaEJ1dHRvbn1cclxuICAgICAge2RvbmF0ZUJ1dHRvbn1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCguYnV0dG9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRlYW1NZW1iZXJDYXJkID0gKHtcclxuICBhdmF0YXJJbWFnZVVSTCxcclxuICBkaXNwbGF5TmFtZSxcclxuICBmdW5kcmFpc2luZ0dvYWwsXHJcbiAgaXNUZWFtQ2FwdGFpbixcclxuICBsaW5rcyxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgc3VtRG9uYXRpb25zLFxyXG59KSA9PiB7XHJcbiAgbGV0IHJpYmJvbiA9IHt9O1xyXG4gIGlmIChpc1RlYW1DYXB0YWluKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ1RlYW0gQ2FwdGFpbnMnLFxyXG4gICAgICBjb2xvcjogJyNlMGJkMDAnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHN0cmVhbUlzTGl2ZSkge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdMaXZlIG5vdyEnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgYnV0dG9ucyA9IGdldEJ1dHRvbnMobGlua3MsIHN0cmVhbUlzTGl2ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyXHJcbiAgICAgIGxpbmtzPXtsaW5rc31cclxuICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgIHR3aXRjaFVzZXJuYW1lPXt0d2l0Y2hVc2VybmFtZX1cclxuICAgID5cclxuICAgICAgPENhcmQgcmliYm9uPXtyaWJib259PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyLWNhcmRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhckltYWdlVVJMfSBhbHQ9e2Ake2Rpc3BsYXlOYW1lfSdzIHByb2ZpbGVgfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZGlzcGxheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgICAgIHByb2dyZXNzPXtzdW1Eb25hdGlvbnMgfHwgMH1cclxuICAgICAgICAgICAgICBnb2FsPXtmdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOmdsb2JhbCgudGVhbS1tZW1iZXItY2FyZCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzVGVhbUNhcHRhaW46IGZhbHNlLFxyXG4gIGxpbmtzOiB7fSxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIHN1bURvbmF0aW9uczogMCxcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLnByb3BUeXBlcyA9IHtcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZ1bmRyYWlzaW5nR29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNUZWFtQ2FwdGFpbjogYm9vbCxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBzdHJpbmcsXHJcbiAgICBzdHJlYW06IHN0cmluZyxcclxuICB9KSxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3VtRG9uYXRpb25zOiBudW1iZXIsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXJDYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90ZWFtLW1lbWJlci1jYXJkLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwiY2hpbGRyZW4iLCJsaW5rcyIsInN0cmVhbUlzTGl2ZSIsInR3aXRjaFVzZXJuYW1lIiwicGFnZSIsImhyZWYiLCJkaXNwbGF5IiwiZ2V0QnV0dG9uIiwibGluayIsInRleHQiLCJnZXRUd2l0Y2hCdXR0b24iLCJnZXREb25hdGVCdXR0b24iLCJnZXRCdXR0b25zIiwiZG9uYXRlIiwic3RyZWFtIiwiZG9uYXRlQnV0dG9uIiwidHdpdGNoQnV0dG9uIiwiVGVhbU1lbWJlckNhcmQiLCJhdmF0YXJJbWFnZVVSTCIsImRpc3BsYXlOYW1lIiwiZnVuZHJhaXNpbmdHb2FsIiwiaXNUZWFtQ2FwdGFpbiIsInN1bURvbmF0aW9ucyIsInJpYmJvbiIsImNvbG9yIiwiYnV0dG9ucyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJib29sIiwic2hhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF1RDtBQUFBLE1BQXBEQyxRQUFvRCxRQUFwREEsUUFBb0Q7QUFBQSxNQUExQ0MsS0FBMEMsUUFBMUNBLEtBQTBDO0FBQUEsTUFBbkNDLFlBQW1DLFFBQW5DQSxZQUFtQztBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7O0FBQ3JFLE1BQUlGLEtBQUosYUFBSUEsS0FBSix1QkFBSUEsS0FBSyxDQUFFRyxJQUFYLEVBQWlCO0FBQ2YsUUFBSUMsSUFBSSxHQUFHSixLQUFLLENBQUNHLElBQWpCOztBQUNBLFFBQUlGLFlBQVksSUFBSUMsY0FBcEIsRUFBb0M7QUFDbENFLFVBQUksbUNBQTRCRixjQUE1QixDQUFKO0FBQ0Q7O0FBQ0QsV0FDRTtB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LE9BQUssRUFBRStCLHdEQUFLLENBQUM7QUFDWG5CLFVBQU0sRUFBRWUsaURBREc7QUFFWHhCLFFBQUksRUFBRXdCLGlEQUZLO0FBR1hkLFVBQU0sRUFBRWMsaURBQU1BO0FBSEgsR0FBRCxDQUxhO0FBVXpCMUIsY0FBWSxFQUFFNkIsK0NBVlc7QUFXekJULGNBQVksRUFBRVEsaURBWFc7QUFZekIzQixnQkFBYyxFQUFFeUIsaURBQU1BO0FBWkcsQ0FBM0I7QUFlZVgsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuN2ZiOTdiNmFlYmE4MDUyMzNkMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPXtsaW5rfVxyXG4gICAgICBjbGFzc05hbWU9e2BtZW1iZXJCdXR0b24gJHt0ZXh0fWB9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgIC5tZW1iZXJCdXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuVHdpdGNoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzc3MmNlODtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Ud2l0Y2g6aG92ZXIsXHJcbiAgICAgICAgICAuVHdpdGNoOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU0MWRhNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Eb25hdGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2ZkODM2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkRvbmF0ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0N2IyMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VHdpdGNoQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnVHdpdGNoJyk7XHJcbmNvbnN0IGdldERvbmF0ZUJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ0RvbmF0ZScpO1xyXG5cclxuY29uc3QgZ2V0QnV0dG9ucyA9IChsaW5rcywgc3RyZWFtSXNMaXZlKSA9PiB7XHJcbiAgaWYgKCFsaW5rcz8uZG9uYXRlIHx8ICFsaW5rcz8uc3RyZWFtKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCBkb25hdGVCdXR0b24gPSBsaW5rcz8uZG9uYXRlID8gZ2V0RG9uYXRlQnV0dG9uKGxpbmtzLmRvbmF0ZSkgOiBudWxsO1xyXG4gIGxldCB0d2l0Y2hCdXR0b24gPSBudWxsO1xyXG4gIGlmICghc3RyZWFtSXNMaXZlICYmIGxpbmtzPy5zdHJlYW0pIHtcclxuICAgIHR3aXRjaEJ1dHRvbiA9IGdldFR3aXRjaEJ1dHRvbihsaW5rcy5zdHJlYW0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Db250YWluZXJcIj5cclxuICAgICAge3R3aXRjaEJ1dHRvbn1cclxuICAgICAge2RvbmF0ZUJ1dHRvbn1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgOmdsb2JhbCguYnV0dG9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRlYW1NZW1iZXJDYXJkID0gKHtcclxuICBhdmF0YXJJbWFnZVVSTCxcclxuICBkaXNwbGF5TmFtZSxcclxuICBmdW5kcmFpc2luZ0dvYWwsXHJcbiAgaXNUZWFtQ2FwdGFpbixcclxuICBsaW5rcyxcclxuICBzdHJlYW1Jc0xpdmUsXHJcbiAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgc3VtRG9uYXRpb25zLFxyXG59KSA9PiB7XHJcbiAgbGV0IHJpYmJvbiA9IHt9O1xyXG4gIGlmIChpc1RlYW1DYXB0YWluKSB7XHJcbiAgICByaWJib24gPSB7XHJcbiAgICAgIC4uLnJpYmJvbixcclxuICAgICAgdGV4dDogJ1RlYW0gQ2FwdGFpbnMnLFxyXG4gICAgICBjb2xvcjogJyNlMGJkMDAnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHN0cmVhbUlzTGl2ZSkge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdMaXZlIG5vdyEnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgYnV0dG9ucyA9IGdldEJ1dHRvbnMobGlua3MsIHN0cmVhbUlzTGl2ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyXHJcbiAgICAgIGxpbmtzPXtsaW5rc31cclxuICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgIHR3aXRjaFVzZXJuYW1lPXt0d2l0Y2hVc2VybmFtZX1cclxuICAgID5cclxuICAgICAgPENhcmQgcmliYm9uPXtyaWJib259PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyLWNhcmRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhckltYWdlVVJMfSBhbHQ9e2Ake2Rpc3BsYXlOYW1lfSdzIHByb2ZpbGVgfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZGlzcGxheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgICAgIHByb2dyZXNzPXtzdW1Eb25hdGlvbnMgfHwgMH1cclxuICAgICAgICAgICAgICBnb2FsPXtmdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOmdsb2JhbCgudGVhbS1tZW1iZXItY2FyZCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzVGVhbUNhcHRhaW46IGZhbHNlLFxyXG4gIGxpbmtzOiB7fSxcclxuICBzdHJlYW1Jc0xpdmU6IGZhbHNlLFxyXG4gIHN1bURvbmF0aW9uczogMCxcclxuICB0d2l0Y2hVc2VybmFtZTogbnVsbCxcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLnByb3BUeXBlcyA9IHtcclxuICBhdmF0YXJJbWFnZVVSTDogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGZ1bmRyYWlzaW5nR29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNUZWFtQ2FwdGFpbjogYm9vbCxcclxuICBsaW5rczogc2hhcGUoe1xyXG4gICAgZG9uYXRlOiBzdHJpbmcsXHJcbiAgICBwYWdlOiBzdHJpbmcsXHJcbiAgICBzdHJlYW06IHN0cmluZyxcclxuICB9KSxcclxuICBzdHJlYW1Jc0xpdmU6IGJvb2wsXHJcbiAgc3VtRG9uYXRpb25zOiBudW1iZXIsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXJDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
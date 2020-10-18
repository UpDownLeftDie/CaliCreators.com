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
        display: 'grid',
        textDecoration: 'none'
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
    className: "jsx-1104411948" + " " + "memberButton ".concat(text),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, text, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1104411948",
    __self: _this
  }, ".memberButton.jsx-1104411948{width:100%;padding:5px;border-radius:8px;box-sizing:border-box;height:40px;place-items:center;font-weight:bold;display:grid;background:#26c2eb;color:#ffffff;-webkit-text-decoration:none !important;text-decoration:none !important;}.Twitch.jsx-1104411948{background:#772ce8;}.Twitch.jsx-1104411948:hover,.Twitch.jsx-1104411948:focus{background:#541da5;}.Donate.jsx-1104411948{background:#7fd836;}.Donate.jsx-1104411948:hover{background:#47b200;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDUyxBQU13QixBQWFRLEFBSUEsQUFHQSxBQUdBLFdBdEJQLFFBYWQsQUFJQSxBQUdBLEFBR0EsSUF0Qm9CLGtCQUNJLHNCQUNWLFlBQ08sbUJBQ0YsaUJBQ0osYUFDTSxtQkFDTCxjQUNrQix3RUFDbEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xcdGVhbS1tZW1iZXItY2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIG51bWJlciwgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgbGlua3MsIHN0cmVhbUlzTGl2ZSwgdHdpdGNoVXNlcm5hbWUgfSkgPT4ge1xyXG4gIGlmIChsaW5rcz8ucGFnZSkge1xyXG4gICAgbGV0IGhyZWYgPSBsaW5rcy5wYWdlO1xyXG4gICAgaWYgKHN0cmVhbUlzTGl2ZSAmJiB0d2l0Y2hVc2VybmFtZSkge1xyXG4gICAgICBocmVmID0gYGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnV0dG9uID0gKGxpbmssIHRleHQpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17bGlua31cclxuICAgICAgY2xhc3NOYW1lPXtgbWVtYmVyQnV0dG9uICR7dGV4dH1gfVxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgID5cclxuICAgICAge3RleHR9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZW1iZXJCdXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Ud2l0Y2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzcyY2U4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaDpob3ZlcixcclxuICAgICAgICAgIC5Ud2l0Y2g6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTQxZGE1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkRvbmF0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmQ4MzY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ3YjIwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUd2l0Y2hCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdUd2l0Y2gnKTtcclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgJiYgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGVhbU1lbWJlckNhcmQgPSAoe1xyXG4gIGF2YXRhckltYWdlVVJMLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGZ1bmRyYWlzaW5nR29hbCxcclxuICBpc1RlYW1DYXB0YWluLFxyXG4gIGxpbmtzLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICBzdW1Eb25hdGlvbnMsXHJcbn0pID0+IHtcclxuICBsZXQgcmliYm9uID0ge307XHJcbiAgaWYgKGlzVGVhbUNhcHRhaW4pIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnVGVhbSBDYXB0YWluJyxcclxuICAgICAgY29sb3I6ICcjZTBiZDAwJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChzdHJlYW1Jc0xpdmUpIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnTGl2ZSBub3chJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBnZXRCdXR0b25zKGxpbmtzLCBzdHJlYW1Jc0xpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCByaWJib249e3JpYmJvbn0gaXNHbG93aW5nPXtzdHJlYW1Jc0xpdmV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyLWNhcmRcIj5cclxuICAgICAgICA8V3JhcHBlclxyXG4gICAgICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2F2YXRhckltYWdlVVJMfSBhbHQ9e2Ake2Rpc3BsYXlOYW1lfSdzIHByb2ZpbGVgfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgIHByb2dyZXNzPXtzdW1Eb25hdGlvbnMgfHwgMH1cclxuICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
};

var getTwitchButton = function getTwitchButton(link) {
  return getButton(link, 'Twitch');
};

var getDonateButton = function getDonateButton(link) {
  return getButton(link, 'Donate');
};

var getButtons = function getButtons(links, streamIsLive) {
  if (!(links === null || links === void 0 ? void 0 : links.donate) && !(links === null || links === void 0 ? void 0 : links.stream)) return null;
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
      lineNumber: 82,
      columnNumber: 5
    }
  }, twitchButton, donateButton, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1016144638",
    __self: _this
  }, ".buttonContainer{margin-top:5px;display:grid;grid-auto-columns:1fr 1fr;grid-auto-flow:column;grid-row:1;grid-column-gap:7px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGUyxBQUc0QixlQUNGLGFBQ2EsMEJBQ0osc0JBQ1gsV0FDUyxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xcdGVhbS1tZW1iZXItY2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIG51bWJlciwgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgbGlua3MsIHN0cmVhbUlzTGl2ZSwgdHdpdGNoVXNlcm5hbWUgfSkgPT4ge1xyXG4gIGlmIChsaW5rcz8ucGFnZSkge1xyXG4gICAgbGV0IGhyZWYgPSBsaW5rcy5wYWdlO1xyXG4gICAgaWYgKHN0cmVhbUlzTGl2ZSAmJiB0d2l0Y2hVc2VybmFtZSkge1xyXG4gICAgICBocmVmID0gYGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnV0dG9uID0gKGxpbmssIHRleHQpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17bGlua31cclxuICAgICAgY2xhc3NOYW1lPXtgbWVtYmVyQnV0dG9uICR7dGV4dH1gfVxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgID5cclxuICAgICAge3RleHR9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZW1iZXJCdXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Ud2l0Y2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzcyY2U4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaDpob3ZlcixcclxuICAgICAgICAgIC5Ud2l0Y2g6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTQxZGE1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkRvbmF0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmQ4MzY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ3YjIwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUd2l0Y2hCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdUd2l0Y2gnKTtcclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgJiYgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGVhbU1lbWJlckNhcmQgPSAoe1xyXG4gIGF2YXRhckltYWdlVVJMLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGZ1bmRyYWlzaW5nR29hbCxcclxuICBpc1RlYW1DYXB0YWluLFxyXG4gIGxpbmtzLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICBzdW1Eb25hdGlvbnMsXHJcbn0pID0+IHtcclxuICBsZXQgcmliYm9uID0ge307XHJcbiAgaWYgKGlzVGVhbUNhcHRhaW4pIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnVGVhbSBDYXB0YWluJyxcclxuICAgICAgY29sb3I6ICcjZTBiZDAwJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChzdHJlYW1Jc0xpdmUpIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnTGl2ZSBub3chJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBnZXRCdXR0b25zKGxpbmtzLCBzdHJlYW1Jc0xpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCByaWJib249e3JpYmJvbn0gaXNHbG93aW5nPXtzdHJlYW1Jc0xpdmV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyLWNhcmRcIj5cclxuICAgICAgICA8V3JhcHBlclxyXG4gICAgICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2F2YXRhckltYWdlVVJMfSBhbHQ9e2Ake2Rpc3BsYXlOYW1lfSdzIHByb2ZpbGVgfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgIHByb2dyZXNzPXtzdW1Eb25hdGlvbnMgfHwgMH1cclxuICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
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
      text: 'Team Captain',
      color: '#e0bd00'
    });
  }

  if (streamIsLive) {
    ribbon = _objectSpread(_objectSpread({}, ribbon), {}, {
      text: 'Live now!'
    });
  }

  var buttons = getButtons(links, streamIsLive);
  return __jsx(_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ribbon: ribbon,
    isGlowing: streamIsLive,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2903822725" + " " + "team-member-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(Wrapper, {
    links: links,
    streamIsLive: streamIsLive,
    twitchUsername: twitchUsername,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: avatarImageURL,
    alt: "".concat(displayName, "'s profile"),
    className: "jsx-2903822725",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-2903822725" + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, displayName), __jsx(_progress_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    progress: sumDonations || 0,
    goal: fundraisingGoal,
    height: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  })), buttons), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2903822725",
    __self: _this
  }, ".team-member-card{width:200px;min-height:200px;box-sizing:border-box;color:#000;}a.jsx-2903822725{-webkit-text-decoration:none;text-decoration:none;display:grid;place-items:center;}img.jsx-2903822725{border-radius:50%;width:100px;height:100px;box-shadow:0px 4px 8px rgba(0,0,0,0.5);margin:0 10px 10px;}.name.jsx-2903822725{font-size:1.1rem;line-height:1;text-align:center;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHRlYW0tbWVtYmVyLWNhcmQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKUyxBQUd5QixBQU1TLEFBS0gsQUFPRCxZQWpCQSxLQWtCSCxDQVBGLFdBVlUsQ0FXVCxDQU9LLFlBTndCLE1BT3pCLENBZEosQ0FKRixXQUNiLENBSXFCLEdBY3JCLGdCQWJBLEFBTXFCLG1CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXGF0b21zXFx0ZWFtLW1lbWJlci1jYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBib29sLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBsaW5rcywgc3RyZWFtSXNMaXZlLCB0d2l0Y2hVc2VybmFtZSB9KSA9PiB7XHJcbiAgaWYgKGxpbmtzPy5wYWdlKSB7XHJcbiAgICBsZXQgaHJlZiA9IGxpbmtzLnBhZ2U7XHJcbiAgICBpZiAoc3RyZWFtSXNMaXZlICYmIHR3aXRjaFVzZXJuYW1lKSB7XHJcbiAgICAgIGhyZWYgPSBgaHR0cHM6Ly93d3cudHdpdGNoLnR2LyR7dHdpdGNoVXNlcm5hbWV9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn07XHJcblxyXG5jb25zdCBnZXRCdXR0b24gPSAobGluaywgdGV4dCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YVxyXG4gICAgICBocmVmPXtsaW5rfVxyXG4gICAgICBjbGFzc05hbWU9e2BtZW1iZXJCdXR0b24gJHt0ZXh0fWB9XHJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbWJlckJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3NzJjZTg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuVHdpdGNoOmhvdmVyLFxyXG4gICAgICAgICAgLlR3aXRjaDpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NDFkYTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzdmZDgzNjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Eb25hdGU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDdiMjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFR3aXRjaEJ1dHRvbiA9IChsaW5rKSA9PiBnZXRCdXR0b24obGluaywgJ1R3aXRjaCcpO1xyXG5jb25zdCBnZXREb25hdGVCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdEb25hdGUnKTtcclxuXHJcbmNvbnN0IGdldEJ1dHRvbnMgPSAobGlua3MsIHN0cmVhbUlzTGl2ZSkgPT4ge1xyXG4gIGlmICghbGlua3M/LmRvbmF0ZSAmJiAhbGlua3M/LnN0cmVhbSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgZG9uYXRlQnV0dG9uID0gbGlua3M/LmRvbmF0ZSA/IGdldERvbmF0ZUJ1dHRvbihsaW5rcy5kb25hdGUpIDogbnVsbDtcclxuICBsZXQgdHdpdGNoQnV0dG9uID0gbnVsbDtcclxuICBpZiAoIXN0cmVhbUlzTGl2ZSAmJiBsaW5rcz8uc3RyZWFtKSB7XHJcbiAgICB0d2l0Y2hCdXR0b24gPSBnZXRUd2l0Y2hCdXR0b24obGlua3Muc3RyZWFtKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIHt0d2l0Y2hCdXR0b259XHJcbiAgICAgIHtkb25hdGVCdXR0b259XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLmJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBUZWFtTWVtYmVyQ2FyZCA9ICh7XHJcbiAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgZGlzcGxheU5hbWUsXHJcbiAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gIGlzVGVhbUNhcHRhaW4sXHJcbiAgbGlua3MsXHJcbiAgc3RyZWFtSXNMaXZlLFxyXG4gIHR3aXRjaFVzZXJuYW1lLFxyXG4gIHN1bURvbmF0aW9ucyxcclxufSkgPT4ge1xyXG4gIGxldCByaWJib24gPSB7fTtcclxuICBpZiAoaXNUZWFtQ2FwdGFpbikge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdUZWFtIENhcHRhaW4nLFxyXG4gICAgICBjb2xvcjogJyNlMGJkMDAnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHN0cmVhbUlzTGl2ZSkge1xyXG4gICAgcmliYm9uID0ge1xyXG4gICAgICAuLi5yaWJib24sXHJcbiAgICAgIHRleHQ6ICdMaXZlIG5vdyEnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29uc3QgYnV0dG9ucyA9IGdldEJ1dHRvbnMobGlua3MsIHN0cmVhbUlzTGl2ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHJpYmJvbj17cmliYm9ufSBpc0dsb3dpbmc9e3N0cmVhbUlzTGl2ZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXItY2FyZFwiPlxyXG4gICAgICAgIDxXcmFwcGVyXHJcbiAgICAgICAgICBsaW5rcz17bGlua3N9XHJcbiAgICAgICAgICBzdHJlYW1Jc0xpdmU9e3N0cmVhbUlzTGl2ZX1cclxuICAgICAgICAgIHR3aXRjaFVzZXJuYW1lPXt0d2l0Y2hVc2VybmFtZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YXZhdGFySW1hZ2VVUkx9IGFsdD17YCR7ZGlzcGxheU5hbWV9J3MgcHJvZmlsZWB9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57ZGlzcGxheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgICAgcHJvZ3Jlc3M9e3N1bURvbmF0aW9ucyB8fCAwfVxyXG4gICAgICAgICAgICBnb2FsPXtmdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgICB7YnV0dG9uc31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIDpnbG9iYWwoLnRlYW0tbWVtYmVyLWNhcmQpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc1RlYW1DYXB0YWluOiBmYWxzZSxcclxuICBsaW5rczoge30sXHJcbiAgc3RyZWFtSXNMaXZlOiBmYWxzZSxcclxuICBzdW1Eb25hdGlvbnM6IDAsXHJcbiAgdHdpdGNoVXNlcm5hbWU6IG51bGwsXHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzVGVhbUNhcHRhaW46IGJvb2wsXHJcbiAgbGlua3M6IHNoYXBlKHtcclxuICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgcGFnZTogc3RyaW5nLFxyXG4gICAgc3RyZWFtOiBzdHJpbmcsXHJcbiAgfSksXHJcbiAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gIHN1bURvbmF0aW9uczogbnVtYmVyLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtTWVtYmVyQ2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\team-member-card.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy90ZWFtLW1lbWJlci1jYXJkLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwiY2hpbGRyZW4iLCJsaW5rcyIsInN0cmVhbUlzTGl2ZSIsInR3aXRjaFVzZXJuYW1lIiwicGFnZSIsImhyZWYiLCJkaXNwbGF5IiwidGV4dERlY29yYXRpb24iLCJnZXRCdXR0b24iLCJsaW5rIiwidGV4dCIsImdldFR3aXRjaEJ1dHRvbiIsImdldERvbmF0ZUJ1dHRvbiIsImdldEJ1dHRvbnMiLCJkb25hdGUiLCJzdHJlYW0iLCJkb25hdGVCdXR0b24iLCJ0d2l0Y2hCdXR0b24iLCJUZWFtTWVtYmVyQ2FyZCIsImF2YXRhckltYWdlVVJMIiwiZGlzcGxheU5hbWUiLCJmdW5kcmFpc2luZ0dvYWwiLCJpc1RlYW1DYXB0YWluIiwic3VtRG9uYXRpb25zIiwicmliYm9uIiwiY29sb3IiLCJidXR0b25zIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImJvb2wiLCJzaGFwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXVEO0FBQUEsTUFBcERDLFFBQW9ELFFBQXBEQSxRQUFvRDtBQUFBLE1BQTFDQyxLQUEwQyxRQUExQ0EsS0FBMEM7QUFBQSxNQUFuQ0MsWUFBbUMsUUFBbkNBLFlBQW1DO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjs7QUFDckUsTUFBSUYsS0FBSixhQUFJQSxLQUFKLHVCQUFJQSxLQUFLLENBQUVHLElBQVgsRUFBaUI7QUFDZixRQUFJQyxJQUFJLEdBQUdKLEtBQUssQ0FBQ0csSUFBakI7O0FBQ0EsUUFBSUYsWUFBWSxJQUFJQyxjQUFwQixFQUFvQztBQUNsQ0UsVUFBSSxtQ0FBNEJGLGNBQTVCLENBQUo7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LEVBQUVVLGlEQUFNLENBQUNELFVBSEM7QUFJekJSLGVBQWEsRUFBRVUsK0NBSlU7QUFLekIvQixPQUFLLEVBQUVnQyx3REFBSyxDQUFDO0FBQ1huQixVQUFNLEVBQUVlLGlEQURHO0FBRVh6QixRQUFJLEVBQUV5QixpREFGSztBQUdYZCxVQUFNLEVBQUVjLGlEQUFNQTtBQUhILEdBQUQsQ0FMYTtBQVV6QjNCLGNBQVksRUFBRThCLCtDQVZXO0FBV3pCVCxjQUFZLEVBQUVRLGlEQVhXO0FBWXpCNUIsZ0JBQWMsRUFBRTBCLGlEQUFNQTtBQVpHLENBQTNCO0FBZWVYLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLjNiYjJiZWE1MGYxMjc2NjZiNzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJpbmcsIG51bWJlciwgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgbGlua3MsIHN0cmVhbUlzTGl2ZSwgdHdpdGNoVXNlcm5hbWUgfSkgPT4ge1xyXG4gIGlmIChsaW5rcz8ucGFnZSkge1xyXG4gICAgbGV0IGhyZWYgPSBsaW5rcy5wYWdlO1xyXG4gICAgaWYgKHN0cmVhbUlzTGl2ZSAmJiB0d2l0Y2hVc2VybmFtZSkge1xyXG4gICAgICBocmVmID0gYGh0dHBzOi8vd3d3LnR3aXRjaC50di8ke3R3aXRjaFVzZXJuYW1lfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnV0dG9uID0gKGxpbmssIHRleHQpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGFcclxuICAgICAgaHJlZj17bGlua31cclxuICAgICAgY2xhc3NOYW1lPXtgbWVtYmVyQnV0dG9uICR7dGV4dH1gfVxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgID5cclxuICAgICAge3RleHR9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZW1iZXJCdXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Ud2l0Y2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzcyY2U4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLlR3aXRjaDpob3ZlcixcclxuICAgICAgICAgIC5Ud2l0Y2g6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTQxZGE1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkRvbmF0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmQ4MzY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuRG9uYXRlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ3YjIwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRUd2l0Y2hCdXR0b24gPSAobGluaykgPT4gZ2V0QnV0dG9uKGxpbmssICdUd2l0Y2gnKTtcclxuY29uc3QgZ2V0RG9uYXRlQnV0dG9uID0gKGxpbmspID0+IGdldEJ1dHRvbihsaW5rLCAnRG9uYXRlJyk7XHJcblxyXG5jb25zdCBnZXRCdXR0b25zID0gKGxpbmtzLCBzdHJlYW1Jc0xpdmUpID0+IHtcclxuICBpZiAoIWxpbmtzPy5kb25hdGUgJiYgIWxpbmtzPy5zdHJlYW0pIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IGRvbmF0ZUJ1dHRvbiA9IGxpbmtzPy5kb25hdGUgPyBnZXREb25hdGVCdXR0b24obGlua3MuZG9uYXRlKSA6IG51bGw7XHJcbiAgbGV0IHR3aXRjaEJ1dHRvbiA9IG51bGw7XHJcbiAgaWYgKCFzdHJlYW1Jc0xpdmUgJiYgbGlua3M/LnN0cmVhbSkge1xyXG4gICAgdHdpdGNoQnV0dG9uID0gZ2V0VHdpdGNoQnV0dG9uKGxpbmtzLnN0cmVhbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICB7dHdpdGNoQnV0dG9ufVxyXG4gICAgICB7ZG9uYXRlQnV0dG9ufVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5idXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVGVhbU1lbWJlckNhcmQgPSAoe1xyXG4gIGF2YXRhckltYWdlVVJMLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGZ1bmRyYWlzaW5nR29hbCxcclxuICBpc1RlYW1DYXB0YWluLFxyXG4gIGxpbmtzLFxyXG4gIHN0cmVhbUlzTGl2ZSxcclxuICB0d2l0Y2hVc2VybmFtZSxcclxuICBzdW1Eb25hdGlvbnMsXHJcbn0pID0+IHtcclxuICBsZXQgcmliYm9uID0ge307XHJcbiAgaWYgKGlzVGVhbUNhcHRhaW4pIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnVGVhbSBDYXB0YWluJyxcclxuICAgICAgY29sb3I6ICcjZTBiZDAwJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChzdHJlYW1Jc0xpdmUpIHtcclxuICAgIHJpYmJvbiA9IHtcclxuICAgICAgLi4ucmliYm9uLFxyXG4gICAgICB0ZXh0OiAnTGl2ZSBub3chJyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBnZXRCdXR0b25zKGxpbmtzLCBzdHJlYW1Jc0xpdmUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCByaWJib249e3JpYmJvbn0gaXNHbG93aW5nPXtzdHJlYW1Jc0xpdmV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyLWNhcmRcIj5cclxuICAgICAgICA8V3JhcHBlclxyXG4gICAgICAgICAgbGlua3M9e2xpbmtzfVxyXG4gICAgICAgICAgc3RyZWFtSXNMaXZlPXtzdHJlYW1Jc0xpdmV9XHJcbiAgICAgICAgICB0d2l0Y2hVc2VybmFtZT17dHdpdGNoVXNlcm5hbWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2F2YXRhckltYWdlVVJMfSBhbHQ9e2Ake2Rpc3BsYXlOYW1lfSdzIHByb2ZpbGVgfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+e2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICAgIHByb2dyZXNzPXtzdW1Eb25hdGlvbnMgfHwgMH1cclxuICAgICAgICAgICAgZ29hbD17ZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAge2J1dHRvbnN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICA6Z2xvYmFsKC50ZWFtLW1lbWJlci1jYXJkKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5UZWFtTWVtYmVyQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNUZWFtQ2FwdGFpbjogZmFsc2UsXHJcbiAgbGlua3M6IHt9LFxyXG4gIHN0cmVhbUlzTGl2ZTogZmFsc2UsXHJcbiAgc3VtRG9uYXRpb25zOiAwLFxyXG4gIHR3aXRjaFVzZXJuYW1lOiBudWxsLFxyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZnVuZHJhaXNpbmdHb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gIGxpbmtzOiBzaGFwZSh7XHJcbiAgICBkb25hdGU6IHN0cmluZyxcclxuICAgIHBhZ2U6IHN0cmluZyxcclxuICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gIH0pLFxyXG4gIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICB0d2l0Y2hVc2VybmFtZTogc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
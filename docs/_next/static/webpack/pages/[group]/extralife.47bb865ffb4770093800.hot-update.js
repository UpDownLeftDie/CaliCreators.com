webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/atoms/progress-bar.jsx":
/*!*******************************************!*\
  !*** ./components/atoms/progress-bar.jsx ***!
  \*******************************************/
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
var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\atoms\\progress-bar.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      goal = _ref.goal,
      height = _ref.height,
      progressText = _ref.progressText,
      goalText = _ref.goalText,
      isMoney = _ref.isMoney,
      displayProgress = _ref.displayProgress,
      displayPercent = _ref.displayPercent,
      width = _ref.width;
  var percent = (progress / goal * 100).toFixed(1);
  var progressTextCombined = null;
  var goalTextCombined = null;

  if (progressText || progressText === '') {
    progressTextCombined = "".concat(progressText, " ").concat(isMoney ? '$' : '').concat(progress);
  }

  if (goalText) {
    goalTextCombined = "".concat(goalText, " ").concat(isMoney ? '$' : '').concat(goal);
  }

  var barProgressText = null;

  if (displayProgress) {
    var str = "".concat(percent, "%");
    if (!displayPercent) str = "".concat(isMoney ? '$' : '').concat(progress);
    barProgressText = __jsx("span", {
      className: "jsx-3186651850" + " " + "barProgressText",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, str, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3186651850",
      __self: _this
    }, ".barProgressText.jsx-3186651850{position:absolute;font-size:90%;color:#fff;text-shadow:0 0 5px black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JXLEFBR2lDLGtCQUNKLGNBQ0gsV0FDZSwwQkFDNUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xccHJvZ3Jlc3MtYmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlzTW9uZXksXHJcbiAgZGlzcGxheVByb2dyZXNzLFxyXG4gIGRpc3BsYXlQZXJjZW50LFxyXG4gIHdpZHRoLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgcGVyY2VudCA9ICgocHJvZ3Jlc3MgLyBnb2FsKSAqIDEwMCkudG9GaXhlZCgxKTtcclxuICBsZXQgcHJvZ3Jlc3NUZXh0Q29tYmluZWQgPSBudWxsO1xyXG4gIGxldCBnb2FsVGV4dENvbWJpbmVkID0gbnVsbDtcclxuXHJcbiAgaWYgKHByb2dyZXNzVGV4dCB8fCBwcm9ncmVzc1RleHQgPT09ICcnKSB7XHJcbiAgICBwcm9ncmVzc1RleHRDb21iaW5lZCA9IGAke3Byb2dyZXNzVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gO1xyXG4gIH1cclxuICBpZiAoZ29hbFRleHQpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG4gIGxldCBiYXJQcm9ncmVzc1RleHQgPSBudWxsO1xyXG4gIGlmIChkaXNwbGF5UHJvZ3Jlc3MpIHtcclxuICAgIGxldCBzdHIgPSBgJHtwZXJjZW50fSVgO1xyXG4gICAgaWYgKCFkaXNwbGF5UGVyY2VudCkgc3RyID0gYCR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICAgIGJhclByb2dyZXNzVGV4dCA9IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyUHJvZ3Jlc3NUZXh0XCI+XHJcbiAgICAgICAge3N0cn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmJhclByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1RleHRcIj57cHJvZ3Jlc3NUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29hbFRleHRcIj57Z29hbFRleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIHtiYXJQcm9ncmVzc1RleHR9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofSU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29hbFRleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzQmFyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0YzZkO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpbmxpbmVUZXh0OiBmYWxzZSxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG4gIGRpc3BsYXlQcm9ncmVzczogZmFsc2UsXHJcbiAgZGlzcGxheVBlcmNlbnQ6IHRydWUsXHJcbn07XHJcblxyXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZ3Jlc3M6IG51bWJlcixcclxuICBnb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICBwcm9ncmVzc1RleHQ6IHN0cmluZyxcclxuICBnb2FsVGV4dDogc3RyaW5nLFxyXG4gIGlubGluZVRleHQ6IGJvb2wsXHJcbiAgaXNNb25leTogYm9vbCxcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGRpc3BsYXlQcm9ncmVzczogYm9vbCxcclxuICBkaXNwbGF5UGVyY2VudDogYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */"));
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, progressTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "goalText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, goalTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, barProgressText, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["482666932", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "482666932",
    dynamic: [width, height, percent, height / 2, height / 2, height],
    __self: _this
  }, ".wrapper.__jsx-style-dynamic-selector{width:".concat(width, "%;max-width:800px;}.progressText.__jsx-style-dynamic-selector{float:left;font-size:1rem;margin-left:10px;}.goalText.__jsx-style-dynamic-selector{float:right;font-size:1rem;margin-right:10px;}.progressBar.__jsx-style-dynamic-selector{position:relative;background:#1a4c6d;overflow:hidden;height:").concat(height, "px;border-radius:300px;width:100%;display:grid;place-items:center;}.progress.__jsx-style-dynamic-selector{width:").concat(percent, "%;background:#26c2eb;height:100%;text-align:right;justify-self:start;background-image:linear-gradient( -45deg, rgba(255,255,255,0.17) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.17) 50%, rgba(255,255,255,0.17) 75%, transparent 75% );background-size:").concat(height / 2, "px ").concat(height / 2, "px;overflow:hidden;-webkit-animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;}@-webkit-keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}@keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RTLEFBR2lELEFBSXpCLEFBS0MsQUFLTSxBQVVrQixBQXFCbUIsV0F4Q3hDLENBS0EsTUFLSSxRQVRGLENBS0MsU0FWRixBQXdCRyxDQVRILE1BVGxCLEVBS0EsT0FWQSxDQWV3QyxBQTZCdEMsRUFwQlksWUFDSyxpQkFDRSxPQVZDLFlBbUJuQixRQWxCVSxXQUNFLGFBQ00sbUJBQ3JCLCtIQWdCZ0YsOEVBQzlELGdCQUN3QixrSkFDMUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xccHJvZ3Jlc3MtYmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlzTW9uZXksXHJcbiAgZGlzcGxheVByb2dyZXNzLFxyXG4gIGRpc3BsYXlQZXJjZW50LFxyXG4gIHdpZHRoLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgcGVyY2VudCA9ICgocHJvZ3Jlc3MgLyBnb2FsKSAqIDEwMCkudG9GaXhlZCgxKTtcclxuICBsZXQgcHJvZ3Jlc3NUZXh0Q29tYmluZWQgPSBudWxsO1xyXG4gIGxldCBnb2FsVGV4dENvbWJpbmVkID0gbnVsbDtcclxuXHJcbiAgaWYgKHByb2dyZXNzVGV4dCB8fCBwcm9ncmVzc1RleHQgPT09ICcnKSB7XHJcbiAgICBwcm9ncmVzc1RleHRDb21iaW5lZCA9IGAke3Byb2dyZXNzVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gO1xyXG4gIH1cclxuICBpZiAoZ29hbFRleHQpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG4gIGxldCBiYXJQcm9ncmVzc1RleHQgPSBudWxsO1xyXG4gIGlmIChkaXNwbGF5UHJvZ3Jlc3MpIHtcclxuICAgIGxldCBzdHIgPSBgJHtwZXJjZW50fSVgO1xyXG4gICAgaWYgKCFkaXNwbGF5UGVyY2VudCkgc3RyID0gYCR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICAgIGJhclByb2dyZXNzVGV4dCA9IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyUHJvZ3Jlc3NUZXh0XCI+XHJcbiAgICAgICAge3N0cn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmJhclByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1RleHRcIj57cHJvZ3Jlc3NUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29hbFRleHRcIj57Z29hbFRleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIHtiYXJQcm9ncmVzc1RleHR9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofSU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29hbFRleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzQmFyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0YzZkO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpbmxpbmVUZXh0OiBmYWxzZSxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG4gIGRpc3BsYXlQcm9ncmVzczogZmFsc2UsXHJcbiAgZGlzcGxheVBlcmNlbnQ6IHRydWUsXHJcbn07XHJcblxyXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZ3Jlc3M6IG51bWJlcixcclxuICBnb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICBwcm9ncmVzc1RleHQ6IHN0cmluZyxcclxuICBnb2FsVGV4dDogc3RyaW5nLFxyXG4gIGlubGluZVRleHQ6IGJvb2wsXHJcbiAgaXNNb25leTogYm9vbCxcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGRpc3BsYXlQcm9ncmVzczogYm9vbCxcclxuICBkaXNwbGF5UGVyY2VudDogYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */")));
};

_c = ProgressBar;
ProgressBar.defaultProps = {
  progress: 0,
  height: 40,
  progressText: null,
  goalText: null,
  inlineText: false,
  isMoney: false,
  width: 100,
  displayProgress: false,
  displayPercent: true
};
ProgressBar.propTypes = {
  progress: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  goal: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  progressText: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  goalText: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  inlineText: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  isMoney: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  displayProgress: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  displayPercent: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"]
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

var _c;

$RefreshReg$(_c, "ProgressBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXIuanN4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJnb2FsIiwiaGVpZ2h0IiwicHJvZ3Jlc3NUZXh0IiwiZ29hbFRleHQiLCJpc01vbmV5IiwiZGlzcGxheVByb2dyZXNzIiwiZGlzcGxheVBlcmNlbnQiLCJ3aWR0aCIsInBlcmNlbnQiLCJ0b0ZpeGVkIiwicHJvZ3Jlc3NUZXh0Q29tYmluZWQiLCJnb2FsVGV4dENvbWJpbmVkIiwiYmFyUHJvZ3Jlc3NUZXh0Iiwic3RyIiwiZGVmYXVsdFByb3BzIiwiaW5saW5lVGV4dCIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BVWQ7QUFBQSxNQVRKQyxRQVNJLFFBVEpBLFFBU0k7QUFBQSxNQVJKQyxJQVFJLFFBUkpBLElBUUk7QUFBQSxNQVBKQyxNQU9JLFFBUEpBLE1BT0k7QUFBQSxNQU5KQyxZQU1JLFFBTkpBLFlBTUk7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxlQUdJLFFBSEpBLGVBR0k7QUFBQSxNQUZKQyxjQUVJLFFBRkpBLGNBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUcsQ0FBRVQsUUFBUSxHQUFHQyxJQUFaLEdBQW9CLEdBQXJCLEVBQTBCUyxPQUExQixDQUFrQyxDQUFsQyxDQUFoQjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7O0FBRUEsTUFBSVQsWUFBWSxJQUFJQSxZQUFZLEtBQUssRUFBckMsRUFBeUM7QUFDdkNRLHdCQUFvQixhQUFN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RSxLQVJRO0FBU3pCQyxnQkFBYyxFQUFFO0FBVFMsQ0FBM0I7QUFZQVIsV0FBVyxDQUFDa0IsU0FBWixHQUF3QjtBQUN0QmpCLFVBQVEsRUFBRWtCLGlEQURZO0FBRXRCakIsTUFBSSxFQUFFaUIsaURBQU0sQ0FBQ0MsVUFGUztBQUd0QmpCLFFBQU0sRUFBRWdCLGlEQUhjO0FBSXRCZixjQUFZLEVBQUVpQixpREFKUTtBQUt0QmhCLFVBQVEsRUFBRWdCLGlEQUxZO0FBTXRCSixZQUFVLEVBQUVLLCtDQU5VO0FBT3RCaEIsU0FBTyxFQUFFZ0IsK0NBUGE7QUFRdEJiLE9BQUssRUFBRVUsaURBUmU7QUFTdEJaLGlCQUFlLEVBQUVlLCtDQVRLO0FBVXRCZCxnQkFBYyxFQUFFYywrQ0FBSUE7QUFWRSxDQUF4QjtBQWFldEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuNDdiYjg2NWZmYjQ3NzAwOTM4MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlzTW9uZXksXHJcbiAgZGlzcGxheVByb2dyZXNzLFxyXG4gIGRpc3BsYXlQZXJjZW50LFxyXG4gIHdpZHRoLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgcGVyY2VudCA9ICgocHJvZ3Jlc3MgLyBnb2FsKSAqIDEwMCkudG9GaXhlZCgxKTtcclxuICBsZXQgcHJvZ3Jlc3NUZXh0Q29tYmluZWQgPSBudWxsO1xyXG4gIGxldCBnb2FsVGV4dENvbWJpbmVkID0gbnVsbDtcclxuXHJcbiAgaWYgKHByb2dyZXNzVGV4dCB8fCBwcm9ncmVzc1RleHQgPT09ICcnKSB7XHJcbiAgICBwcm9ncmVzc1RleHRDb21iaW5lZCA9IGAke3Byb2dyZXNzVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtwcm9ncmVzc31gO1xyXG4gIH1cclxuICBpZiAoZ29hbFRleHQpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG4gIGxldCBiYXJQcm9ncmVzc1RleHQgPSBudWxsO1xyXG4gIGlmIChkaXNwbGF5UHJvZ3Jlc3MpIHtcclxuICAgIGxldCBzdHIgPSBgJHtwZXJjZW50fSVgO1xyXG4gICAgaWYgKCFkaXNwbGF5UGVyY2VudCkgc3RyID0gYCR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICAgIGJhclByb2dyZXNzVGV4dCA9IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyUHJvZ3Jlc3NUZXh0XCI+XHJcbiAgICAgICAge3N0cn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmJhclByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1RleHRcIj57cHJvZ3Jlc3NUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29hbFRleHRcIj57Z29hbFRleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIHtiYXJQcm9ncmVzc1RleHR9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofSU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NUZXh0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ29hbFRleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2dyZXNzQmFyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE0YzZkO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtwZXJjZW50fSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAtNDVkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDUwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDc1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NSVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAke2hlaWdodCAvIDJ9cHggJHtoZWlnaHQgLyAyfXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGJhcmJlcnBvbGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgYmFyYmVycG9sZSB7XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICR7aGVpZ2h0fXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9ncmVzczogMCxcclxuICBoZWlnaHQ6IDQwLFxyXG4gIHByb2dyZXNzVGV4dDogbnVsbCxcclxuICBnb2FsVGV4dDogbnVsbCxcclxuICBpbmxpbmVUZXh0OiBmYWxzZSxcclxuICBpc01vbmV5OiBmYWxzZSxcclxuICB3aWR0aDogMTAwLFxyXG4gIGRpc3BsYXlQcm9ncmVzczogZmFsc2UsXHJcbiAgZGlzcGxheVBlcmNlbnQ6IHRydWUsXHJcbn07XHJcblxyXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZ3Jlc3M6IG51bWJlcixcclxuICBnb2FsOiBudW1iZXIuaXNSZXF1aXJlZCxcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICBwcm9ncmVzc1RleHQ6IHN0cmluZyxcclxuICBnb2FsVGV4dDogc3RyaW5nLFxyXG4gIGlubGluZVRleHQ6IGJvb2wsXHJcbiAgaXNNb25leTogYm9vbCxcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGRpc3BsYXlQcm9ncmVzczogYm9vbCxcclxuICBkaXNwbGF5UGVyY2VudDogYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
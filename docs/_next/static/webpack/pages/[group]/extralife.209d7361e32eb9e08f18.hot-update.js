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
      inlineText = _ref.inlineText,
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

  if (goalText || goalText === '') {
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
        lineNumber: 30,
        columnNumber: 7
      }
    }, str, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3186651850",
      __self: _this
    }, ".barProgressText.jsx-3186651850{position:absolute;font-size:90%;color:#fff;text-shadow:0 0 5px black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NXLEFBR2lDLGtCQUNKLGNBQ0gsV0FDZSwwQkFDNUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xccHJvZ3Jlc3MtYmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlubGluZVRleHQsXHJcbiAgaXNNb25leSxcclxuICBkaXNwbGF5UHJvZ3Jlc3MsXHJcbiAgZGlzcGxheVBlcmNlbnQsXHJcbiAgd2lkdGgsXHJcbn0pID0+IHtcclxuICBjb25zdCBwZXJjZW50ID0gKChwcm9ncmVzcyAvIGdvYWwpICogMTAwKS50b0ZpeGVkKDEpO1xyXG4gIGxldCBwcm9ncmVzc1RleHRDb21iaW5lZCA9IG51bGw7XHJcbiAgbGV0IGdvYWxUZXh0Q29tYmluZWQgPSBudWxsO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NUZXh0IHx8IHByb2dyZXNzVGV4dCA9PT0gJycpIHtcclxuICAgIHByb2dyZXNzVGV4dENvbWJpbmVkID0gYCR7cHJvZ3Jlc3NUZXh0fSAke2lzTW9uZXkgPyAnJCcgOiAnJ30ke3Byb2dyZXNzfWA7XHJcbiAgfVxyXG4gIGlmIChnb2FsVGV4dCB8fCBnb2FsVGV4dCA9PT0gJycpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG4gIGxldCBiYXJQcm9ncmVzc1RleHQgPSBudWxsO1xyXG4gIGlmIChkaXNwbGF5UHJvZ3Jlc3MpIHtcclxuICAgIGxldCBzdHIgPSBgJHtwZXJjZW50fSVgO1xyXG4gICAgaWYgKCFkaXNwbGF5UGVyY2VudCkgc3RyID0gYCR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICAgIGJhclByb2dyZXNzVGV4dCA9IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyUHJvZ3Jlc3NUZXh0XCI+XHJcbiAgICAgICAge3N0cn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmJhclByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1RleHRcIj57cHJvZ3Jlc3NUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29hbFRleHRcIj57Z29hbFRleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIHtiYXJQcm9ncmVzc1RleHR9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofSU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc1RleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb2FsVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NCYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTRjNmQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3BlcmNlbnR9JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIC00NWRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDI1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNzUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDc1JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7aGVpZ2h0IC8gMn1weCAke2hlaWdodCAvIDJ9cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYmFyYmVycG9sZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBiYXJiZXJwb2xlIHtcclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtoZWlnaHR9cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2dyZXNzOiAwLFxyXG4gIGhlaWdodDogNDAsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBudWxsLFxyXG4gIGdvYWxUZXh0OiBudWxsLFxyXG4gIGlubGluZVRleHQ6IGZhbHNlLFxyXG4gIGlzTW9uZXk6IGZhbHNlLFxyXG4gIHdpZHRoOiAxMDAsXHJcbiAgZGlzcGxheVByb2dyZXNzOiBmYWxzZSxcclxuICBkaXNwbGF5UGVyY2VudDogdHJ1ZSxcclxufTtcclxuXHJcblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcclxuICBwcm9ncmVzczogbnVtYmVyLFxyXG4gIGdvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhlaWdodDogbnVtYmVyLFxyXG4gIHByb2dyZXNzVGV4dDogc3RyaW5nLFxyXG4gIGdvYWxUZXh0OiBzdHJpbmcsXHJcbiAgaW5saW5lVGV4dDogYm9vbCxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgZGlzcGxheVByb2dyZXNzOiBib29sLFxyXG4gIGRpc3BsYXlQZXJjZW50OiBib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */"));
  }

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3334538052", [width, height, percent, height / 2, height / 2, height]]]) + " " + "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3334538052", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, progressTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3334538052", [width, height, percent, height / 2, height / 2, height]]]) + " " + "goalText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, goalTextCombined), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3334538052", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progressBar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, barProgressText, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3334538052", [width, height, percent, height / 2, height / 2, height]]]) + " " + "progress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3334538052",
    dynamic: [width, height, percent, height / 2, height / 2, height],
    __self: _this
  }, ".wrapper.__jsx-style-dynamic-selector{width:".concat(width, "%;max-width:800px;position:relative;}.progressText.__jsx-style-dynamic-selector{float:left;font-size:1rem;margin-left:10px;z-index:1;}.goalText.__jsx-style-dynamic-selector{float:right;font-size:1rem;margin-right:10px;z-index:1;}.progressBar.__jsx-style-dynamic-selector{position:relative;background:#1a4c6d;overflow:hidden;height:").concat(height, "px;border-radius:300px;width:100%;display:grid;place-items:center;}.progress.__jsx-style-dynamic-selector{width:").concat(percent, "%;background:#26c2eb;height:100%;text-align:right;justify-self:start;background-image:linear-gradient( -45deg, rgba(255,255,255,0.17) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.17) 50%, rgba(255,255,255,0.17) 75%, transparent 75% );background-size:").concat(height / 2, "px ").concat(height / 2, "px;overflow:hidden;-webkit-animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;animation:barberpole-__jsx-style-dynamic-selector 2s linear infinite;}@-webkit-keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}@keyframes barberpole-__jsx-style-dynamic-selector{100%{background-position:").concat(height, "px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcYXRvbXNcXHByb2dyZXNzLWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURTLEFBR2lELEFBS3pCLEFBTUMsQUFNTSxBQVVrQixBQXFCbUIsV0ExQ3hDLENBTUEsTUFNSSxRQVhGLENBTUMsU0FaRixBQTJCRyxDQVRILE1BWE4sRUFNQSxPQVpRLENBT3BCLEFBV3dDLEFBNkJ0QyxFQWxDRixBQWNjLFlBQ0ssR0EzQm5CLGNBNEJxQixPQVZDLFlBbUJuQixRQWxCVSxXQUNFLGFBQ00sbUJBQ3JCLCtIQWdCZ0YsOEVBQzlELGdCQUN3QixrSkFDMUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxjb21wb25lbnRzXFxhdG9tc1xccHJvZ3Jlc3MtYmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlubGluZVRleHQsXHJcbiAgaXNNb25leSxcclxuICBkaXNwbGF5UHJvZ3Jlc3MsXHJcbiAgZGlzcGxheVBlcmNlbnQsXHJcbiAgd2lkdGgsXHJcbn0pID0+IHtcclxuICBjb25zdCBwZXJjZW50ID0gKChwcm9ncmVzcyAvIGdvYWwpICogMTAwKS50b0ZpeGVkKDEpO1xyXG4gIGxldCBwcm9ncmVzc1RleHRDb21iaW5lZCA9IG51bGw7XHJcbiAgbGV0IGdvYWxUZXh0Q29tYmluZWQgPSBudWxsO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NUZXh0IHx8IHByb2dyZXNzVGV4dCA9PT0gJycpIHtcclxuICAgIHByb2dyZXNzVGV4dENvbWJpbmVkID0gYCR7cHJvZ3Jlc3NUZXh0fSAke2lzTW9uZXkgPyAnJCcgOiAnJ30ke3Byb2dyZXNzfWA7XHJcbiAgfVxyXG4gIGlmIChnb2FsVGV4dCB8fCBnb2FsVGV4dCA9PT0gJycpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG4gIGxldCBiYXJQcm9ncmVzc1RleHQgPSBudWxsO1xyXG4gIGlmIChkaXNwbGF5UHJvZ3Jlc3MpIHtcclxuICAgIGxldCBzdHIgPSBgJHtwZXJjZW50fSVgO1xyXG4gICAgaWYgKCFkaXNwbGF5UGVyY2VudCkgc3RyID0gYCR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICAgIGJhclByb2dyZXNzVGV4dCA9IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyUHJvZ3Jlc3NUZXh0XCI+XHJcbiAgICAgICAge3N0cn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmJhclByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1RleHRcIj57cHJvZ3Jlc3NUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29hbFRleHRcIj57Z29hbFRleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIHtiYXJQcm9ncmVzc1RleHR9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofSU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc1RleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb2FsVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NCYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTRjNmQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3BlcmNlbnR9JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIC00NWRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDI1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNzUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDc1JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7aGVpZ2h0IC8gMn1weCAke2hlaWdodCAvIDJ9cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYmFyYmVycG9sZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBiYXJiZXJwb2xlIHtcclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtoZWlnaHR9cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2dyZXNzOiAwLFxyXG4gIGhlaWdodDogNDAsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBudWxsLFxyXG4gIGdvYWxUZXh0OiBudWxsLFxyXG4gIGlubGluZVRleHQ6IGZhbHNlLFxyXG4gIGlzTW9uZXk6IGZhbHNlLFxyXG4gIHdpZHRoOiAxMDAsXHJcbiAgZGlzcGxheVByb2dyZXNzOiBmYWxzZSxcclxuICBkaXNwbGF5UGVyY2VudDogdHJ1ZSxcclxufTtcclxuXHJcblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcclxuICBwcm9ncmVzczogbnVtYmVyLFxyXG4gIGdvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhlaWdodDogbnVtYmVyLFxyXG4gIHByb2dyZXNzVGV4dDogc3RyaW5nLFxyXG4gIGdvYWxUZXh0OiBzdHJpbmcsXHJcbiAgaW5saW5lVGV4dDogYm9vbCxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgZGlzcGxheVByb2dyZXNzOiBib29sLFxyXG4gIGRpc3BsYXlQZXJjZW50OiBib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\atoms\\\\progress-bar.jsx */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXIuanN4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJnb2FsIiwiaGVpZ2h0IiwicHJvZ3Jlc3NUZXh0IiwiZ29hbFRleHQiLCJpbmxpbmVUZXh0IiwiaXNNb25leSIsImRpc3BsYXlQcm9ncmVzcyIsImRpc3BsYXlQZXJjZW50Iiwid2lkdGgiLCJwZXJjZW50IiwidG9GaXhlZCIsInByb2dyZXNzVGV4dENvbWJpbmVkIiwiZ29hbFRleHRDb21iaW5lZCIsImJhclByb2dyZXNzVGV4dCIsInN0ciIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BV2Q7QUFBQSxNQVZKQyxRQVVJLFFBVkpBLFFBVUk7QUFBQSxNQVRKQyxJQVNJLFFBVEpBLElBU0k7QUFBQSxNQVJKQyxNQVFJLFFBUkpBLE1BUUk7QUFBQSxNQVBKQyxZQU9JLFFBUEpBLFlBT0k7QUFBQSxNQU5KQyxRQU1JLFFBTkpBLFFBTUk7QUFBQSxNQUxKQyxVQUtJLFFBTEpBLFVBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxlQUdJLFFBSEpBLGVBR0k7QUFBQSxNQUZKQyxjQUVJLFFBRkpBLGNBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUcsQ0FBRVYsUUFBUSxHQUFHQyxJQUFaLEdBQW9CLEdBQXJCLEVBQTBCVSxPQUExQixDQUFrQyxDQUFsQyxDQUFoQjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLElBQTNCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7O0FBRUEsTUFBSVYsWUFBWSxJQUFJQSxZQUFZLEtBQUssRUFB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TyxFQUFFLEtBTmdCO0FBT3pCRyxPQUFLLEVBQUUsR0FQa0I7QUFRekJGLGlCQUFlLEVBQUUsS0FSUTtBQVN6QkMsZ0JBQWMsRUFBRTtBQVRTLENBQTNCO0FBWUFULFdBQVcsQ0FBQ2tCLFNBQVosR0FBd0I7QUFDdEJqQixVQUFRLEVBQUVrQixpREFEWTtBQUV0QmpCLE1BQUksRUFBRWlCLGlEQUFNLENBQUNDLFVBRlM7QUFHdEJqQixRQUFNLEVBQUVnQixpREFIYztBQUl0QmYsY0FBWSxFQUFFaUIsaURBSlE7QUFLdEJoQixVQUFRLEVBQUVnQixpREFMWTtBQU10QmYsWUFBVSxFQUFFZ0IsK0NBTlU7QUFPdEJmLFNBQU8sRUFBRWUsK0NBUGE7QUFRdEJaLE9BQUssRUFBRVMsaURBUmU7QUFTdEJYLGlCQUFlLEVBQUVjLCtDQVRLO0FBVXRCYixnQkFBYyxFQUFFYSwrQ0FBSUE7QUFWRSxDQUF4QjtBQWFldEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuMjA5ZDczNjFlMzJlYjllMDhmMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG51bWJlciwgc3RyaW5nLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBQcm9ncmVzc0JhciA9ICh7XHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZ29hbCxcclxuICBoZWlnaHQsXHJcbiAgcHJvZ3Jlc3NUZXh0LFxyXG4gIGdvYWxUZXh0LFxyXG4gIGlubGluZVRleHQsXHJcbiAgaXNNb25leSxcclxuICBkaXNwbGF5UHJvZ3Jlc3MsXHJcbiAgZGlzcGxheVBlcmNlbnQsXHJcbiAgd2lkdGgsXHJcbn0pID0+IHtcclxuICBjb25zdCBwZXJjZW50ID0gKChwcm9ncmVzcyAvIGdvYWwpICogMTAwKS50b0ZpeGVkKDEpO1xyXG4gIGxldCBwcm9ncmVzc1RleHRDb21iaW5lZCA9IG51bGw7XHJcbiAgbGV0IGdvYWxUZXh0Q29tYmluZWQgPSBudWxsO1xyXG5cclxuICBpZiAocHJvZ3Jlc3NUZXh0IHx8IHByb2dyZXNzVGV4dCA9PT0gJycpIHtcclxuICAgIHByb2dyZXNzVGV4dENvbWJpbmVkID0gYCR7cHJvZ3Jlc3NUZXh0fSAke2lzTW9uZXkgPyAnJCcgOiAnJ30ke3Byb2dyZXNzfWA7XHJcbiAgfVxyXG4gIGlmIChnb2FsVGV4dCB8fCBnb2FsVGV4dCA9PT0gJycpIHtcclxuICAgIGdvYWxUZXh0Q29tYmluZWQgPSBgJHtnb2FsVGV4dH0gJHtpc01vbmV5ID8gJyQnIDogJyd9JHtnb2FsfWA7XHJcbiAgfVxyXG4gIGxldCBiYXJQcm9ncmVzc1RleHQgPSBudWxsO1xyXG4gIGlmIChkaXNwbGF5UHJvZ3Jlc3MpIHtcclxuICAgIGxldCBzdHIgPSBgJHtwZXJjZW50fSVgO1xyXG4gICAgaWYgKCFkaXNwbGF5UGVyY2VudCkgc3RyID0gYCR7aXNNb25leSA/ICckJyA6ICcnfSR7cHJvZ3Jlc3N9YDtcclxuICAgIGJhclByb2dyZXNzVGV4dCA9IChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyUHJvZ3Jlc3NUZXh0XCI+XHJcbiAgICAgICAge3N0cn1cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmJhclByb2dyZXNzVGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1RleHRcIj57cHJvZ3Jlc3NUZXh0Q29tYmluZWR9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29hbFRleHRcIj57Z29hbFRleHRDb21iaW5lZH08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc0JhclwiPlxyXG4gICAgICAgIHtiYXJQcm9ncmVzc1RleHR9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofSU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzc1RleHQge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nb2FsVGV4dCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZ3Jlc3NCYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTRjNmQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3BlcmNlbnR9JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIC00NWRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTcpIDI1JSxcclxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyNSUsXHJcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNTAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNykgNzUlLFxyXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDc1JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7aGVpZ2h0IC8gMn1weCAke2hlaWdodCAvIDJ9cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYmFyYmVycG9sZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBiYXJiZXJwb2xlIHtcclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtoZWlnaHR9cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2dyZXNzOiAwLFxyXG4gIGhlaWdodDogNDAsXHJcbiAgcHJvZ3Jlc3NUZXh0OiBudWxsLFxyXG4gIGdvYWxUZXh0OiBudWxsLFxyXG4gIGlubGluZVRleHQ6IGZhbHNlLFxyXG4gIGlzTW9uZXk6IGZhbHNlLFxyXG4gIHdpZHRoOiAxMDAsXHJcbiAgZGlzcGxheVByb2dyZXNzOiBmYWxzZSxcclxuICBkaXNwbGF5UGVyY2VudDogdHJ1ZSxcclxufTtcclxuXHJcblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcclxuICBwcm9ncmVzczogbnVtYmVyLFxyXG4gIGdvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhlaWdodDogbnVtYmVyLFxyXG4gIHByb2dyZXNzVGV4dDogc3RyaW5nLFxyXG4gIGdvYWxUZXh0OiBzdHJpbmcsXHJcbiAgaW5saW5lVGV4dDogYm9vbCxcclxuICBpc01vbmV5OiBib29sLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgZGlzcGxheVByb2dyZXNzOiBib29sLFxyXG4gIGRpc3BsYXlQZXJjZW50OiBib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
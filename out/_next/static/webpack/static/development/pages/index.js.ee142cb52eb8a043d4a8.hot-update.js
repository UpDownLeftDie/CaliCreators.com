webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "/Users/jaredkotoff/personal/git/twitchsocal/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




var siteTitle = "Twitch SoCal";
var description = "We're the meetup groups for Twitch in Southern California!<br/>Find the closest one to you or come to all our events!";
var url = "https://twitchsocal.com";

var Home = function Home(_ref) {
  var upcomingEvents = _ref.upcomingEvents;
  return __jsx("div", {
    style: {
      minHeight: '100%',
      position: 'absolute',
      width: '100%'
    },
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, siteTitle, ".com"), __jsx("meta", {
    name: "Description",
    content: description.replace('<br/>', ' '),
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: siteTitle,
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(url, "/static/twitchsocal.gif"),
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:width",
    content: "800",
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:height",
    content: "800",
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description.replace('<br/>', ' '),
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-826854460" + " " + 'hero',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-826854460" + " " + "title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-826854460" + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-826854460" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-826854460" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    groupName: "Twitch La",
    city: "Los Angeles",
    href: "https://meetups.twitch.tv/los-angeles/",
    upcomingEvents: upcomingEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    groupName: "OC Streamers",
    city: "Orange",
    href: "https://www.meetup.com/ocstreamers",
    upcomingEvents: upcomingEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    groupName: "Twitch SD",
    city: "San Diego",
    href: "https://meetups.twitch.tv/san-diego/",
    upcomingEvents: upcomingEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-826854460" + " " + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-826854460",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "This site is not affiliated or endorsed by Twitch or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "826854460",
    __self: this
  }, "html,body{height:100%;margin:0;padding:0;}body{background-color:#5F3F9F;background-image:url('/static/cubes_@2X.webp');font-family:'Kanit',sans-serif,Avenir Next,Avenir, Helvetica,sans-serif;}.hero.jsx-826854460{width:100%;color:#fff;}.title.jsx-826854460{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:'Knewave',sans-serif;-webkit-animation:colorwipe-jsx-826854460 6s infinite;animation:colorwipe-jsx-826854460 6s infinite;background:rgb(255,255,255);background:linear-gradient(15deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 15%,rgba(131,58,180,1) 25%,rgba(253,29,29,1) 50%,rgba(252,176,69,1) 75%,rgba(255,255,255,1) 80%,rgba(255,255,255,1) 100%);background-size:900%;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-826854460{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;}.title.jsx-826854460,.description.jsx-826854460{text-align:center;}.description.jsx-826854460{font-size:22px;font-weight:300;font-family:'Kanit',sans-serif;}.row.jsx-826854460{max-width:880px;margin:40px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.footer.jsx-826854460{color:#ddd;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}@media (max-width:840px){.row.jsx-826854460{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-826854460{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-826854460{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvdHdpdGNoc29jYWwvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQixBQUdxQixBQUthLEFBTWQsQUFJRixBQWVxQyxBQUs1QixBQUdILEFBS0MsQUFPTCxBQVdlLEFBS0MsQUFDQyxBQUNFLFNBcERuQixFQUpBLEFBdUNPLENBbERULEdBc0NPLENBS0MsRUFSbkIsRUFuQmtCLENBZk4sQ0FXWixDQXFEOEIsQUFDQyxFQTdEa0IsQUE4RGhCLElBaEJ0QixFQWpEWCxBQXFDa0MsRUFLbkIsR0EzQkksRUFtQ04sV0FDTyxJQW5DSCxTQXNCakIsS0Fja0IsQ0FuQ2tCLElBWlgsTUFzREEsS0FOTCxpQkF6QkosQ0FWa0IsQUFvQ1QsTUFYSixPQWRyQixVQTBCQSxvQkFqREEsMkJBc0RJLEtBaEIyQix5QkF6QkQsNEJBQ2lMLHNFQXlCL00sZ0lBeEJ1QixxQkFDRSx1QkFDTSw2QkFDTyxvQ0FDdEMiLCJmaWxlIjoiL1VzZXJzL2phcmVka290b2ZmL3BlcnNvbmFsL2dpdC90d2l0Y2hzb2NhbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5jb25zdCBzaXRlVGl0bGUgPSBcIlR3aXRjaCBTb0NhbFwiO1xuY29uc3QgZGVzY3JpcHRpb24gPSBcIldlJ3JlIHRoZSBtZWV0dXAgZ3JvdXBzIGZvciBUd2l0Y2ggaW4gU291dGhlcm4gQ2FsaWZvcm5pYSE8YnIvPkZpbmQgdGhlIGNsb3Nlc3Qgb25lIHRvIHlvdSBvciBjb21lIHRvIGFsbCBvdXIgZXZlbnRzIVwiO1xuY29uc3QgdXJsID0gXCJodHRwczovL3R3aXRjaHNvY2FsLmNvbVwiO1xuXG5jb25zdCBIb21lID0gKHt1cGNvbWluZ0V2ZW50c30pID0+IChcbiAgPGRpdiBzdHlsZT17e1xuICAgIG1pbkhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICcxMDAlJ1xuICB9fT5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfS5jb208L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZSgnPGJyLz4nLCAnICcpfT48L21ldGE+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfT48L21ldGE+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0+PC9tZXRhPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake3VybH0vc3RhdGljL3R3aXRjaHNvY2FsLmdpZmB9PjwvbWV0YT5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiODAwXCI+PC9tZXRhPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiODAwXCI+PC9tZXRhPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uLnJlcGxhY2UoJzxici8+JywgJyAnKX0+PC9tZXRhPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvJz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlLXdyYXBwZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPntzaXRlVGl0bGV9PC9oMT5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkZXNjcmlwdGlvbn19PjwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxDYXJkIGdyb3VwTmFtZT17XCJUd2l0Y2ggTGFcIn0gY2l0eT17XCJMb3MgQW5nZWxlc1wifSBocmVmPXtcImh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvbG9zLWFuZ2VsZXMvXCJ9IHVwY29taW5nRXZlbnRzPXt1cGNvbWluZ0V2ZW50c30gLz4gXG4gICAgICAgIDxDYXJkIGdyb3VwTmFtZT17XCJPQyBTdHJlYW1lcnNcIn0gY2l0eT17XCJPcmFuZ2VcIn0gaHJlZj17XCJodHRwczovL3d3dy5tZWV0dXAuY29tL29jc3RyZWFtZXJzXCJ9IHVwY29taW5nRXZlbnRzPXt1cGNvbWluZ0V2ZW50c30gLz4gXG4gICAgICAgIDxDYXJkIGdyb3VwTmFtZT17XCJUd2l0Y2ggU0RcIn0gY2l0eT17XCJTYW4gRGllZ29cIn0gaHJlZj17XCJodHRwczovL21lZXR1cHMudHdpdGNoLnR2L3Nhbi1kaWVnby9cIn0gdXBjb21pbmdFdmVudHM9e3VwY29taW5nRXZlbnRzfSAvPiBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPlxuICAgICAgICA8cD5UaGlzIHNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgb3IgZW5kb3JzZWQgYnkgVHdpdGNoIG9yIE1lZXR1cC48L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICA6Z2xvYmFsKGh0bWwsIGJvZHkpIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVGM0Y5RjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2N1YmVzX0AyWC53ZWJwJyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmLCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIC5oZXJvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLbmV3YXZlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgYW5pbWF0aW9uOiBjb2xvcndpcGUgNnMgaW5maW5pdGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxNSUsIHJnYmEoMTMxLDU4LDE4MCwxKSAyNSUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTIsMTc2LDY5LDEpIDc1JSwgcmdiYSgyNTUsMjU1LDI1NSwxKSA4MCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogOTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA1cHggNXB4IHJnYmEoMCwwLDAsMC40KSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLnRpdGxlLFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgY29sb3I6ICNkZGQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIGNvbG9yd2lwZSB7XG4gICAgICAgIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7IH1cbiAgICAgICAgMzUlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7IH1cbiAgICAgICAgMTAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTsgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnN0IG1lZXR1cENvbVJlcSA9IGZldGNoKCdodHRwczovL2FwaS5tZWV0dXAuY29tL29jc3RyZWFtZXJzL2V2ZW50cz8mc2lnbj10cnVlJnBob3RvLWhvc3Q9c2VjdXJlJnBhZ2U9NSZoYXNfZW5kZWQ9ZmFsc2UnLFxuICAgIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9KTtcblxuICBjb25zdCB0d2l0Y2hSZXEgPSBmZXRjaChcbiAgICBgaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9hcGkvc2VhcmNoLz9yZXN1bHRfdHlwZXM9dXBjb21pbmdfZXZlbnQmY291bnRyeV9jb2RlPUVhcnRoJiR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YCwgXG4gICAge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH0pO1xuICBcbiAgY29uc3QgbWVldHVwQ29tID0gYXdhaXQgbWVldHVwQ29tUmVxO1xuICBjb25zdCB0d2l0Y2ggPSBhd2FpdCB0d2l0Y2hSZXE7XG5cbiAgY29uc3QgbWVldHVwQ29tSnNvbiA9IGF3YWl0IG1lZXR1cENvbS5qc29uKCk7XG4gIGNvbnN0IHR3aXRjaEpzb24gPSBhd2FpdCB0d2l0Y2guanNvbigpO1xuICBjb25zdCB1cGNvbWluZ0V2ZW50cyA9IG1lcmdlRXZlbnRMaXN0cyh0d2l0Y2hKc29uLCBtZWV0dXBDb21Kc29uKTtcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodHdpdGNoSnNvbikpO1xuICByZXR1cm4geyB1cGNvbWluZ0V2ZW50cyB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlRXZlbnRMaXN0cyh0d2l0Y2gsIG1lZXR1cCkge1xuICBsZXQgZXZlbnRMaXN0ID0gdHdpdGNoLnJlc3VsdHM7XG4gIGNvbnN0IG1lZXR1cExpc3QgPSBtZWV0dXAubWFwKGV2ZW50ID0+IHtcbiAgICBjb25zdCBjaXR5ID0gZXZlbnQuZ3JvdXAubG9jYWxpemVkX2xvY2F0aW9uLnNwbGl0KCcsJylbMF07XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXB0ZXI6IHtcbiAgICAgICAgY2l0eVxuICAgICAgfSxcbiAgICAgIHVybDogZXZlbnQubGluayxcbiAgICAgIHN0YXJ0X2RhdGU6IGV2ZW50LmxvY2FsX2RhdGUsXG4gICAgICB0aXRsZTogZXZlbnQubmFtZVxuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZXZlbnRMaXN0LmNvbmNhdChtZWV0dXBMaXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/twitchsocal/pages/index.js */"));
};

Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var meetupComReq, twitchReq, meetupCom, twitch, meetupComJson, twitchJson, upcomingEvents;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          meetupComReq = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false', {
            mode: 'cors'
          });
          twitchReq = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth&".concat(Math.floor(Math.random() * 1000)), {
            mode: 'cors'
          });
          _context.next = 4;
          return meetupComReq;

        case 4:
          meetupCom = _context.sent;
          _context.next = 7;
          return twitchReq;

        case 7:
          twitch = _context.sent;
          _context.next = 10;
          return meetupCom.json();

        case 10:
          meetupComJson = _context.sent;
          _context.next = 13;
          return twitch.json();

        case 13:
          twitchJson = _context.sent;
          upcomingEvents = mergeEventLists(twitchJson, meetupComJson);
          console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(twitchJson));
          return _context.abrupt("return", {
            upcomingEvents: upcomingEvents
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

function mergeEventLists(twitch, meetup) {
  var eventList = twitch.results;
  var meetupList = meetup.map(function (event) {
    var city = event.group.localized_location.split(',')[0];
    return {
      chapter: {
        city: city
      },
      url: event.link,
      start_date: event.local_date,
      title: event.name
    };
  });
  return eventList.concat(meetupList);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ee142cb52eb8a043d4a8.hot-update.js.map
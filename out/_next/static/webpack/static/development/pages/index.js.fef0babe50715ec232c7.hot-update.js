webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\jared\\twitch-socal\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




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
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, siteTitle, ".com"), __jsx("meta", {
    name: "Description",
    content: description.replace('<br/>', ' '),
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: siteTitle,
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(url, "/static/twitchsocal.gif"),
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:width",
    content: "800",
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:height",
    content: "800",
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description.replace('<br/>', ' '),
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2367925135" + " " + 'hero',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2367925135" + " " + "title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2367925135" + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-2367925135" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2367925135" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    groupName: "Twitch La",
    city: "Los Angeles",
    href: "https://meetups.twitch.tv/los-angeles/",
    upcomingEvents: upcomingEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    groupName: "OC Streamers",
    city: "Orange",
    href: "https://www.meetup.com/ocstreamers",
    upcomingEvents: upcomingEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    className: "jsx-2367925135" + " " + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2367925135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "This site is not affiliated or endorsed by Twitch or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2367925135",
    __self: this
  }, "html,body{height:100%;margin:0;padding:0;}body{background-color:#9146FF;background-image:url('/static/funky-lines.webp');background-size:200%;font-family:'Kanit',sans-serif,Avenir Next,Avenir, Helvetica,sans-serif;}.hero.jsx-2367925135{width:100%;color:#fff;}.title.jsx-2367925135{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:'Knewave',sans-serif;-webkit-animation:colorwipe-jsx-2367925135 6s infinite;animation:colorwipe-jsx-2367925135 6s infinite;background:rgb(255,255,255);background:linear-gradient(15deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 15%,rgba(131,58,180,1) 25%,rgba(253,29,29,1) 50%,rgba(252,176,69,1) 75%,rgba(255,255,255,1) 80%,rgba(255,255,255,1) 100%);background-size:900%;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-2367925135{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;}.title.jsx-2367925135,.description.jsx-2367925135{text-align:center;}.description.jsx-2367925135{font-size:22px;font-weight:300;font-family:'Kanit',sans-serif;}.row.jsx-2367925135{max-width:880px;margin:40px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.footer.jsx-2367925135{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}@media (max-width:840px){.row.jsx-2367925135{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-2367925135{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-2367925135{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDZ0IsQUFHcUIsQUFLYSxBQU9kLEFBSUYsQUFlcUMsQUFLNUIsQUFHSCxBQUtDLEFBT0wsQUFXZSxBQUtDLEFBQ0MsQUFDRSxTQXBEbkIsRUFKQSxBQXVDTyxDQW5EVCxHQXVDTyxDQUtDLEVBUm5CLEVBbkJrQixDQWhCTixDQVlaLENBcUQ4QixBQUNDLEVBOURvQixBQStEbEIsSUFoQnRCLEVBbERYLEFBc0NrQyxFQUtuQixHQTNCSSxFQW1DTixXQUNPLElBbkNILFNBc0JqQixLQWNrQixDQW5Da0IsTUFkYixJQXdERSxLQU5MLFlBaERLLEtBdUJULENBVmtCLEFBb0NULE1BWEosT0FkckIsVUEwQkEsMkNBakRBLElBc0RJLEtBaEIyQiwyQkF6QkQsNEJBQ2lMLG9FQXlCL00sa0lBeEJ1QixxQkFDRSx1QkFDTSw2QkFDTyxvQ0FDdEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcdHdpdGNoLXNvY2FsXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmNvbnN0IHNpdGVUaXRsZSA9IFwiVHdpdGNoIFNvQ2FsXCI7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gXCJXZSdyZSB0aGUgbWVldHVwIGdyb3VwcyBmb3IgVHdpdGNoIGluIFNvdXRoZXJuIENhbGlmb3JuaWEhPGJyLz5GaW5kIHRoZSBjbG9zZXN0IG9uZSB0byB5b3Ugb3IgY29tZSB0byBhbGwgb3VyIGV2ZW50cyFcIjtcclxuY29uc3QgdXJsID0gXCJodHRwczovL3R3aXRjaHNvY2FsLmNvbVwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICh7dXBjb21pbmdFdmVudHN9KSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17e1xyXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB3aWR0aDogJzEwMCUnXHJcbiAgfX0+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICA8dGl0bGU+e3NpdGVUaXRsZX0uY29tPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZSgnPGJyLz4nLCAnICcpfT48L21ldGE+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9PjwvbWV0YT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9PjwvbWV0YT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake3VybH0vc3RhdGljL3R3aXRjaHNvY2FsLmdpZmB9PjwvbWV0YT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI4MDBcIj48L21ldGE+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjgwMFwiPjwvbWV0YT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uLnJlcGxhY2UoJzxici8+JywgJyAnKX0+PC9tZXRhPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVybyc+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlLXdyYXBwZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+e3NpdGVUaXRsZX08L2gxPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkZXNjcmlwdGlvbn19PjwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgIDxDYXJkIGdyb3VwTmFtZT17XCJUd2l0Y2ggTGFcIn0gY2l0eT17XCJMb3MgQW5nZWxlc1wifSBocmVmPXtcImh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvbG9zLWFuZ2VsZXMvXCJ9IHVwY29taW5nRXZlbnRzPXt1cGNvbWluZ0V2ZW50c30gLz4gXHJcbiAgICAgICAgPENhcmQgZ3JvdXBOYW1lPXtcIk9DIFN0cmVhbWVyc1wifSBjaXR5PXtcIk9yYW5nZVwifSBocmVmPXtcImh0dHBzOi8vd3d3Lm1lZXR1cC5jb20vb2NzdHJlYW1lcnNcIn0gdXBjb21pbmdFdmVudHM9e3VwY29taW5nRXZlbnRzfSAvPiBcclxuICAgICAgICA8Q2FyZCBncm91cE5hbWU9e1wiVHdpdGNoIFNEXCJ9IGNpdHk9e1wiU2FuIERpZWdvXCJ9IGhyZWY9e1wiaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9zYW4tZGllZ28vXCJ9IHVwY29taW5nRXZlbnRzPXt1cGNvbWluZ0V2ZW50c30gLz4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cclxuICAgICAgICA8cD5UaGlzIHNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgb3IgZW5kb3JzZWQgYnkgVHdpdGNoIG9yIE1lZXR1cC48L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIDpnbG9iYWwoaHRtbCwgYm9keSkge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE0NkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9mdW5reS1saW5lcy53ZWJwJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmLCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxyXG4gICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZXJvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0tuZXdhdmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGFuaW1hdGlvbjogY29sb3J3aXBlIDZzIGluZmluaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1ZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDE1JSwgcmdiYSgxMzEsNTgsMTgwLDEpIDI1JSwgcmdiYSgyNTMsMjksMjksMSkgNTAlLCByZ2JhKDI1MiwxNzYsNjksMSkgNzUlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDgwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDkwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZS13cmFwcGVyIHtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuNCkpO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSxcclxuICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICAucm93IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xyXG4gICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcclxuICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgY29sb3J3aXBlIHtcclxuICAgICAgICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAlOyB9XHJcbiAgICAgICAgMzUlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7IH1cclxuICAgICAgICAxMDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlOyB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYygpID0+IHtcclxuICBjb25zdCBtZWV0dXBDb21SZXEgPSBmZXRjaCgnaHR0cHM6Ly9hcGkubWVldHVwLmNvbS9vY3N0cmVhbWVycy9ldmVudHM/JnNpZ249dHJ1ZSZwaG90by1ob3N0PXNlY3VyZSZwYWdlPTUmaGFzX2VuZGVkPWZhbHNlJyxcclxuICAgIHtcclxuICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHR3aXRjaFJlcSA9IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvYXBpL3NlYXJjaC8/cmVzdWx0X3R5cGVzPXVwY29taW5nX2V2ZW50JmNvdW50cnlfY29kZT1FYXJ0aCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWAsXHJcbiAgICB7XHJcbiAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgIH0pO1xyXG4gIFxyXG4gIGNvbnN0IG1lZXR1cENvbSA9IGF3YWl0IG1lZXR1cENvbVJlcTtcclxuICBjb25zdCB0d2l0Y2ggPSBhd2FpdCB0d2l0Y2hSZXE7XHJcblxyXG4gIGNvbnN0IG1lZXR1cENvbUpzb24gPSBhd2FpdCBtZWV0dXBDb20uanNvbigpO1xyXG4gIGNvbnN0IHR3aXRjaEpzb24gPSBhd2FpdCB0d2l0Y2guanNvbigpO1xyXG4gIGNvbnN0IHVwY29taW5nRXZlbnRzID0gbWVyZ2VFdmVudExpc3RzKHR3aXRjaEpzb24sIG1lZXR1cENvbUpzb24pO1xyXG4gIHJldHVybiB7IHVwY29taW5nRXZlbnRzIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2VFdmVudExpc3RzKHR3aXRjaCwgbWVldHVwKSB7XHJcbiAgbGV0IGV2ZW50TGlzdCA9IHR3aXRjaC5yZXN1bHRzO1xyXG4gIGNvbnN0IG1lZXR1cExpc3QgPSBtZWV0dXAubWFwKGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IGNpdHkgPSBldmVudC5ncm91cC5sb2NhbGl6ZWRfbG9jYXRpb24uc3BsaXQoJywnKVswXTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICBjaXR5XHJcbiAgICAgIH0sXHJcbiAgICAgIHVybDogZXZlbnQubGluayxcclxuICAgICAgc3RhcnRfZGF0ZTogZXZlbnQubG9jYWxfZGF0ZSxcclxuICAgICAgdGl0bGU6IGV2ZW50Lm5hbWVcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICByZXR1cm4gZXZlbnRMaXN0LmNvbmNhdChtZWV0dXBMaXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\pages\\index.js */"));
};

Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var meetupComReq, twitchReq, meetupCom, twitch, meetupComJson, twitchJson, upcomingEvents;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          meetupComReq = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false', {
            mode: 'cors'
          });
          twitchReq = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth&".concat(Math.floor(Math.random() * 1000)), {
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
          return _context.abrupt("return", {
            upcomingEvents: upcomingEvents
          });

        case 16:
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
//# sourceMappingURL=index.js.fef0babe50715ec232c7.hot-update.js.map
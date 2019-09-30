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
    className: "jsx-3917544561",
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
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, siteTitle, ".com"), __jsx("meta", {
    name: "Description",
    content: description.replace('<br/>', ' '),
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: siteTitle,
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(url, "/static/twitchsocal.gif"),
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:width",
    content: "800",
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:height",
    content: "800",
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description.replace('<br/>', ' '),
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3917544561" + " " + 'hero',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3917544561" + " " + "title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3917544561" + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-3917544561" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3917544561" + " " + 'row',
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
    className: "jsx-3917544561" + " " + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3917544561",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "This site is not affiliated or endorsed by Twitch or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3917544561",
    __self: this
  }, "html,body{height:100%;margin:0;padding:0;}body{background-color:#9146FF;background-image:url('/static/funky-lines.webp');background-size:600px;font-family:'Kanit',sans-serif,Avenir Next,Avenir, Helvetica,sans-serif;}.hero.jsx-3917544561{width:100%;color:#fff;}.title.jsx-3917544561{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:'Knewave',sans-serif;-webkit-animation:colorwipe-jsx-3917544561 6s infinite;animation:colorwipe-jsx-3917544561 6s infinite;background:rgb(255,255,255);background:linear-gradient(15deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 15%,rgba(131,58,180,1) 25%,rgba(253,29,29,1) 50%,rgba(252,176,69,1) 75%,rgba(255,255,255,1) 80%,rgba(255,255,255,1) 100%);background-size:900%;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-3917544561{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;}.title.jsx-3917544561,.description.jsx-3917544561{text-align:center;}.description.jsx-3917544561{font-size:22px;font-weight:300;font-family:'Kanit',sans-serif;}.row.jsx-3917544561{max-width:880px;margin:40px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.footer.jsx-3917544561{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}@media (max-width:840px){.row.jsx-3917544561{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-3917544561{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-3917544561{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDZ0IsQUFHcUIsQUFLYSxBQU9kLEFBSUYsQUFlcUMsQUFLNUIsQUFHSCxBQUtDLEFBT0wsQUFXZSxBQUtDLEFBQ0MsQUFDRSxTQXBEbkIsRUFKQSxBQXVDTyxDQW5EVCxHQXVDTyxDQUtDLEVBUm5CLEVBbkJrQixDQWhCTixDQVlaLENBcUQ4QixBQUNDLEVBOURvQixBQStEbEIsSUFoQnRCLEVBbERYLEFBc0NrQyxFQUtuQixHQTNCSSxFQW1DTixXQUNPLElBbkNILFNBc0JqQixLQWNrQixDQW5Da0IsTUFkWixJQXdEQyxLQU5MLGFBaERLLElBdUJULENBVmtCLEFBb0NULE1BWEosT0FkckIsVUEwQkEsNENBakRBLEdBc0RJLEtBaEIyQiwyQkF6QkQsNEJBQ2lMLG9FQXlCL00sa0lBeEJ1QixxQkFDRSx1QkFDTSw2QkFDTyxvQ0FDdEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcdHdpdGNoLXNvY2FsXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmNvbnN0IHNpdGVUaXRsZSA9IFwiVHdpdGNoIFNvQ2FsXCI7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gXCJXZSdyZSB0aGUgbWVldHVwIGdyb3VwcyBmb3IgVHdpdGNoIGluIFNvdXRoZXJuIENhbGlmb3JuaWEhPGJyLz5GaW5kIHRoZSBjbG9zZXN0IG9uZSB0byB5b3Ugb3IgY29tZSB0byBhbGwgb3VyIGV2ZW50cyFcIjtcclxuY29uc3QgdXJsID0gXCJodHRwczovL3R3aXRjaHNvY2FsLmNvbVwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICh7dXBjb21pbmdFdmVudHN9KSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17e1xyXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB3aWR0aDogJzEwMCUnXHJcbiAgfX0+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICA8dGl0bGU+e3NpdGVUaXRsZX0uY29tPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZSgnPGJyLz4nLCAnICcpfT48L21ldGE+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9PjwvbWV0YT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXt1cmx9PjwvbWV0YT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake3VybH0vc3RhdGljL3R3aXRjaHNvY2FsLmdpZmB9PjwvbWV0YT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI4MDBcIj48L21ldGE+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjgwMFwiPjwvbWV0YT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uLnJlcGxhY2UoJzxici8+JywgJyAnKX0+PC9tZXRhPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVybyc+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlLXdyYXBwZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+e3NpdGVUaXRsZX08L2gxPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkZXNjcmlwdGlvbn19PjwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgIDxDYXJkIGdyb3VwTmFtZT17XCJUd2l0Y2ggTGFcIn0gY2l0eT17XCJMb3MgQW5nZWxlc1wifSBocmVmPXtcImh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvbG9zLWFuZ2VsZXMvXCJ9IHVwY29taW5nRXZlbnRzPXt1cGNvbWluZ0V2ZW50c30gLz4gXHJcbiAgICAgICAgPENhcmQgZ3JvdXBOYW1lPXtcIk9DIFN0cmVhbWVyc1wifSBjaXR5PXtcIk9yYW5nZVwifSBocmVmPXtcImh0dHBzOi8vd3d3Lm1lZXR1cC5jb20vb2NzdHJlYW1lcnNcIn0gdXBjb21pbmdFdmVudHM9e3VwY29taW5nRXZlbnRzfSAvPiBcclxuICAgICAgICA8Q2FyZCBncm91cE5hbWU9e1wiVHdpdGNoIFNEXCJ9IGNpdHk9e1wiU2FuIERpZWdvXCJ9IGhyZWY9e1wiaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9zYW4tZGllZ28vXCJ9IHVwY29taW5nRXZlbnRzPXt1cGNvbWluZ0V2ZW50c30gLz4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cclxuICAgICAgICA8cD5UaGlzIHNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgb3IgZW5kb3JzZWQgYnkgVHdpdGNoIG9yIE1lZXR1cC48L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIDpnbG9iYWwoaHRtbCwgYm9keSkge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE0NkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9mdW5reS1saW5lcy53ZWJwJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZiwgQXZlbmlyIE5leHQsIEF2ZW5pcixcclxuICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICAuaGVybyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLbmV3YXZlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBhbmltYXRpb246IGNvbG9yd2lwZSA2cyBpbmZpbml0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxNSUsIHJnYmEoMTMxLDU4LDE4MCwxKSAyNSUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTIsMTc2LDY5LDEpIDc1JSwgcmdiYSgyNTUsMjU1LDI1NSwxKSA4MCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5MDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUtd3JhcHBlciB7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCA1cHggcmdiYSgwLDAsMCwwLjQpKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUsXHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcclxuICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIGNvbG9yd2lwZSB7XHJcbiAgICAgICAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTsgfVxyXG4gICAgICAgIDM1JSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAlOyB9XHJcbiAgICAgICAgMTAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTsgfVxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoKSA9PiB7XHJcbiAgY29uc3QgbWVldHVwQ29tUmVxID0gZmV0Y2goJ2h0dHBzOi8vYXBpLm1lZXR1cC5jb20vb2NzdHJlYW1lcnMvZXZlbnRzPyZzaWduPXRydWUmcGhvdG8taG9zdD1zZWN1cmUmcGFnZT01Jmhhc19lbmRlZD1mYWxzZScsXHJcbiAgICB7XHJcbiAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCB0d2l0Y2hSZXEgPSBmZXRjaChcclxuICAgIGBodHRwczovL21lZXR1cHMudHdpdGNoLnR2L2FwaS9zZWFyY2gvP3Jlc3VsdF90eXBlcz11cGNvbWluZ19ldmVudCZjb3VudHJ5X2NvZGU9RWFydGgmJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1gLFxyXG4gICAge1xyXG4gICAgICBtb2RlOiAnY29ycycsXHJcbiAgICB9KTtcclxuICBcclxuICBjb25zdCBtZWV0dXBDb20gPSBhd2FpdCBtZWV0dXBDb21SZXE7XHJcbiAgY29uc3QgdHdpdGNoID0gYXdhaXQgdHdpdGNoUmVxO1xyXG5cclxuICBjb25zdCBtZWV0dXBDb21Kc29uID0gYXdhaXQgbWVldHVwQ29tLmpzb24oKTtcclxuICBjb25zdCB0d2l0Y2hKc29uID0gYXdhaXQgdHdpdGNoLmpzb24oKTtcclxuICBjb25zdCB1cGNvbWluZ0V2ZW50cyA9IG1lcmdlRXZlbnRMaXN0cyh0d2l0Y2hKc29uLCBtZWV0dXBDb21Kc29uKTtcclxuICByZXR1cm4geyB1cGNvbWluZ0V2ZW50cyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlRXZlbnRMaXN0cyh0d2l0Y2gsIG1lZXR1cCkge1xyXG4gIGxldCBldmVudExpc3QgPSB0d2l0Y2gucmVzdWx0cztcclxuICBjb25zdCBtZWV0dXBMaXN0ID0gbWVldHVwLm1hcChldmVudCA9PiB7XHJcbiAgICBjb25zdCBjaXR5ID0gZXZlbnQuZ3JvdXAubG9jYWxpemVkX2xvY2F0aW9uLnNwbGl0KCcsJylbMF07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICB9LFxyXG4gICAgICB1cmw6IGV2ZW50LmxpbmssXHJcbiAgICAgIHN0YXJ0X2RhdGU6IGV2ZW50LmxvY2FsX2RhdGUsXHJcbiAgICAgIHRpdGxlOiBldmVudC5uYW1lXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgcmV0dXJuIGV2ZW50TGlzdC5jb25jYXQobWVldHVwTGlzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl19 */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\pages\\index.js */"));
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
//# sourceMappingURL=index.js.7bc1371da400468e65e8.hot-update.js.map
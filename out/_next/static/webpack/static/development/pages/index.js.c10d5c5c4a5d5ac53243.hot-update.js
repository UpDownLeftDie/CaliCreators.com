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


var _jsxFileName = "/Users/jaredkotoff/personal/git/twitchsocal/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var siteTitle = "Twitch SoCal";
var description = "We're the meetup groups for Twitch in Southern California!<br/>Find the closest one to you or come to all our events!";
var url = "https://twitchsocal.com";

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      upcomingEvents = _useState[0],
      setEvents = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUpcomingEvents().then(function (events) {
      setEvents(events);
    });
  }, []);
  return __jsx("div", {
    style: {
      minHeight: "100%",
      position: "absolute",
      width: "100%"
    },
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, siteTitle, ".com"), __jsx("meta", {
    name: "Description",
    content: description.replace("<br/>", " "),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: siteTitle,
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(url, "/static/twitchsocal.gif"),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:width",
    content: "800",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:height",
    content: "800",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description.replace("<br/>", " "),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3866817834" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3866817834" + " " + "title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3866817834" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-3866817834" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3866817834" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    groupName: "Twitch La",
    city: "Los Angeles",
    href: "https://meetups.twitch.tv/los-angeles/",
    upcomingEvents: upcomingEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    groupName: "OC Streamers",
    city: "Orange",
    href: "https://www.meetup.com/ocstreamers",
    upcomingEvents: upcomingEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    groupName: "Twitch SD",
    city: "San Diego",
    href: "https://meetups.twitch.tv/san-diego/",
    upcomingEvents: upcomingEvents,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3866817834" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "This site is not affiliated or endorsed by Twitch or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3866817834",
    __self: this
  }, "html,body{height:100%;margin:0;padding:0;}body{background-color:#9146ff;background-image:url(\"/static/funky-lines.webp\");background-size:600px;font-family:\"Kanit\",sans-serif,Avenir Next,Avenir,Helvetica, sans-serif;}.hero.jsx-3866817834{width:100%;color:#fff;}.title.jsx-3866817834{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:\"Knewave\",sans-serif;-webkit-animation:colorwipe-jsx-3866817834 6s infinite;animation:colorwipe-jsx-3866817834 6s infinite;background:rgb(255,255,255);background:linear-gradient( 15deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(131,58,180,1) 25%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 75%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100% );background-size:900%;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-3866817834{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;}.title.jsx-3866817834,.description.jsx-3866817834{text-align:center;}.description.jsx-3866817834{font-size:22px;font-weight:300;font-family:\"Kanit\",sans-serif;}.row.jsx-3866817834{max-width:880px;margin:40px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.footer.jsx-3866817834{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}@media (max-width:840px){.row.jsx-3866817834{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-3866817834{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-3866817834{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvdHdpdGNoc29jYWwvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZrQixBQUd1QixBQUthLEFBT2QsQUFJRixBQXdCd0MsQUFLL0IsQUFHSCxBQUtDLEFBT0wsQUFXYSxBQU1DLEFBR0EsQUFHRSxTQWxFaEIsRUFKQSxBQWdETyxDQTVEVCxHQWdETyxDQUtDLEVBUm5CLEVBNUJrQixDQWhCTixDQVlaLENBZ0VFLEFBR0EsRUEzRWlELEFBOEVqRCxJQXRCUyxFQTNEWCxBQStDa0MsRUFLbkIsR0FwQ0ksRUE0Q04sV0FDTyxJQTVDSCxTQStCakIsS0Fja0IsQ0E1Q2tCLE1BZFosSUFpRUQsS0FOSCxhQXpETixJQWdDRSxDQW5Ca0IsQUE2Q1QsTUFYSixPQWRyQixVQTBCQSw0Q0ExREEsR0ErREUsS0FoQjZCLDJCQWxDQyw0QkFVN0Isb0VBeUJILDJJQXhCdUIscUJBQ0UsdUJBQ00sNkJBQ08sb0NBQ3RDIiwiZmlsZSI6Ii9Vc2Vycy9qYXJlZGtvdG9mZi9wZXJzb25hbC9naXQvdHdpdGNoc29jYWwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3Qgc2l0ZVRpdGxlID0gXCJUd2l0Y2ggU29DYWxcIjtcbmNvbnN0IGRlc2NyaXB0aW9uID1cbiAgXCJXZSdyZSB0aGUgbWVldHVwIGdyb3VwcyBmb3IgVHdpdGNoIGluIFNvdXRoZXJuIENhbGlmb3JuaWEhPGJyLz5GaW5kIHRoZSBjbG9zZXN0IG9uZSB0byB5b3Ugb3IgY29tZSB0byBhbGwgb3VyIGV2ZW50cyFcIjtcbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly90d2l0Y2hzb2NhbC5jb21cIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3VwY29taW5nRXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXBjb21pbmdFdmVudHMoKS50aGVuKGV2ZW50cyA9PiB7XG4gICAgICBzZXRFdmVudHMoZXZlbnRzKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWluSGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfS5jb208L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZShcIjxici8+XCIsIFwiIFwiKX1cbiAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0+PC9tZXRhPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0+PC9tZXRhPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9e2Ake3VybH0vc3RhdGljL3R3aXRjaHNvY2FsLmdpZmB9XG4gICAgICAgID48L21ldGE+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiODAwXCI+PC9tZXRhPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI4MDBcIj48L21ldGE+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZShcIjxici8+XCIsIFwiIFwiKX1cbiAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L2gxPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgPjwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICBncm91cE5hbWU9e1wiVHdpdGNoIExhXCJ9XG4gICAgICAgICAgICBjaXR5PXtcIkxvcyBBbmdlbGVzXCJ9XG4gICAgICAgICAgICBocmVmPXtcImh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvbG9zLWFuZ2VsZXMvXCJ9XG4gICAgICAgICAgICB1cGNvbWluZ0V2ZW50cz17dXBjb21pbmdFdmVudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgZ3JvdXBOYW1lPXtcIk9DIFN0cmVhbWVyc1wifVxuICAgICAgICAgICAgY2l0eT17XCJPcmFuZ2VcIn1cbiAgICAgICAgICAgIGhyZWY9e1wiaHR0cHM6Ly93d3cubWVldHVwLmNvbS9vY3N0cmVhbWVyc1wifVxuICAgICAgICAgICAgdXBjb21pbmdFdmVudHM9e3VwY29taW5nRXZlbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGdyb3VwTmFtZT17XCJUd2l0Y2ggU0RcIn1cbiAgICAgICAgICAgIGNpdHk9e1wiU2FuIERpZWdvXCJ9XG4gICAgICAgICAgICBocmVmPXtcImh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvc2FuLWRpZWdvL1wifVxuICAgICAgICAgICAgdXBjb21pbmdFdmVudHM9e3VwY29taW5nRXZlbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8cD5UaGlzIHNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgb3IgZW5kb3JzZWQgYnkgVHdpdGNoIG9yIE1lZXR1cC48L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICA6Z2xvYmFsKGh0bWwsIGJvZHkpIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkxNDZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2Z1bmt5LWxpbmVzLndlYnBcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MDBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmLCBBdmVuaXIgTmV4dCwgQXZlbmlyLCBIZWx2ZXRpY2EsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJLbmV3YXZlXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYW5pbWF0aW9uOiBjb2xvcndpcGUgNnMgaW5maW5pdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDE1ZGVnLFxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSxcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTUlLFxuICAgICAgICAgICAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDI1JSxcbiAgICAgICAgICAgIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcbiAgICAgICAgICAgIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSA3NSUsXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDgwJSxcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5MDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yd2lwZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIDM1JSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0VXBjb21pbmdFdmVudHMoKSB7XG4gIGNvbnN0IGNhY2hlQnVzdGVyID0gYCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XG4gIGxldCBtZWV0dXBDb21SZXEgPSBmZXRjaChcbiAgICBgaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkubWVldHVwLmNvbS9vY3N0cmVhbWVycy9ldmVudHM/JnNpZ249dHJ1ZSZwaG90by1ob3N0PXNlY3VyZSZwYWdlPTUmaGFzX2VuZGVkPWZhbHNlJHtjYWNoZUJ1c3Rlcn1gXG4gICkuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9KTtcbiAgbGV0IHR3aXRjaFJlcSA9IGZldGNoKFxuICAgIGBodHRwczovL21lZXR1cHMudHdpdGNoLnR2L2FwaS9zZWFyY2gvP3Jlc3VsdF90eXBlcz11cGNvbWluZ19ldmVudCZjb3VudHJ5X2NvZGU9RWFydGgke2NhY2hlQnVzdGVyfWBcbiAgKS5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xuXG4gIGNvbnN0IG1lZXR1cENvbSA9IGF3YWl0IG1lZXR1cENvbVJlcTtcbiAgY29uc3QgdHdpdGNoID0gYXdhaXQgdHdpdGNoUmVxO1xuICBjb25zdCB0d2l0Y2hKc29uID0gYXdhaXQgdHdpdGNoLmpzb24oKTtcblxuICBpZiAobWVldHVwQ29tKSB7XG4gICAgY29uc3QgbWVldHVwQ29tSnNvbiA9IGF3YWl0IG1lZXR1cENvbS5qc29uKCk7XG4gICAgY29uc3QgbWVldHVwRXZlbnRzID0gY29udmVydE1lZXR1cFRvVHdpdGNoKG1lZXR1cENvbUpzb24pO1xuICAgIGNvbnN0IGV2ZW50TGlzdCA9IHR3aXRjaEpzb24ucmVzdWx0cztcbiAgICByZXR1cm4gZXZlbnRMaXN0LmNvbmNhdChtZWV0dXBFdmVudHMpO1xuICB9IGVsc2UgaWYgKHR3aXRjaEpzb24pIHtcbiAgICByZXR1cm4gdHdpdGNoSnNvbi5yZXN1bHRzO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0TWVldHVwVG9Ud2l0Y2gobWVldHVwKSB7XG4gIGNvbnN0IG1lZXR1cExpc3QgPSBtZWV0dXAubWFwKGV2ZW50ID0+IHtcbiAgICBjb25zdCBjaXR5ID0gZXZlbnQuZ3JvdXAubG9jYWxpemVkX2xvY2F0aW9uLnNwbGl0KFwiLFwiKVswXTtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhcHRlcjoge1xuICAgICAgICBjaXR5XG4gICAgICB9LFxuICAgICAgdXJsOiBldmVudC5saW5rLFxuICAgICAgc3RhcnRfZGF0ZTogZXZlbnQubG9jYWxfZGF0ZSxcbiAgICAgIHRpdGxlOiBldmVudC5uYW1lXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1lZXR1cExpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/jaredkotoff/personal/git/twitchsocal/pages/index.js */"));
};

function getUpcomingEvents() {
  return _getUpcomingEvents.apply(this, arguments);
}

function _getUpcomingEvents() {
  _getUpcomingEvents = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var cacheBuster, meetupComReq, twitchReq, meetupCom, twitch, twitchJson, meetupComJson, meetupEvents, eventList;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000));
            meetupComReq = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://cors-anywhere.herokuapp.com/https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false".concat(cacheBuster))["catch"](function (err) {
              console.log(err);
            });
            twitchReq = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth".concat(cacheBuster))["catch"](function (err) {
              console.log(err);
            });
            _context.next = 5;
            return meetupComReq;

          case 5:
            meetupCom = _context.sent;
            _context.next = 8;
            return twitchReq;

          case 8:
            twitch = _context.sent;
            _context.next = 11;
            return twitch.json();

          case 11:
            twitchJson = _context.sent;

            if (!meetupCom) {
              _context.next = 21;
              break;
            }

            _context.next = 15;
            return meetupCom.json();

          case 15:
            meetupComJson = _context.sent;
            meetupEvents = convertMeetupToTwitch(meetupComJson);
            eventList = twitchJson.results;
            return _context.abrupt("return", eventList.concat(meetupEvents));

          case 21:
            if (!twitchJson) {
              _context.next = 23;
              break;
            }

            return _context.abrupt("return", twitchJson.results);

          case 23:
            return _context.abrupt("return", []);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUpcomingEvents.apply(this, arguments);
}

function convertMeetupToTwitch(meetup) {
  var meetupList = meetup.map(function (event) {
    var city = event.group.localized_location.split(",")[0];
    return {
      chapter: {
        city: city
      },
      url: event.link,
      start_date: event.local_date,
      title: event.name
    };
  });
  return meetupList;
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c10d5c5c4a5d5ac53243.hot-update.js.map
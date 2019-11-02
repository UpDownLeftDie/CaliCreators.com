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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\jared\\ca-creators\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var groups = __webpack_require__(/*! ../groups.json */ "./groups.json");

var siteTitle = "CA Creators";
var description = "We're the meetup groups for Twitch, Mixer, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!";
var url = "https://cacreators.com";

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      upcomingTwitchEvents = _useState[0],
      setTwitchEvents = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      upcomingMeetupEvents = _useState2[0],
      setMeetupEvents = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUpcomingTwitchEvents().then(function (twithcEvents) {
      setTwitchEvents(twithcEvents);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUpcomingMeetupEvents().then(function (meetupEvents) {
      setMeetupEvents(meetupEvents);
    });
  }, []);

  var findNextEvent = function findNextEvent(city, upcomingEvents) {
    return upcomingEvents.find(function (event) {
      if (event.chapter.city === city) return true;
      return false;
    });
  };

  var renderCards = function renderCards() {
    var upcomingEvents = upcomingTwitchEvents.concat(upcomingMeetupEvents);
    var nextEvents = groups.map(function (group) {
      return findNextEvent(group.city, upcomingEvents);
    }); // .sort((a, b) => {
    //   new Date(a.start_date) < new Date(b.start_date);
    // });

    console.log("nextEvents", nextEvents); // return (
    //   <Fragment>
    //     <Card
    //       groupName={"Twitch La"}
    //       city={"Los Angeles"}
    //       href={"https://meetups.twitch.tv/los-angeles/"}
    //       upcomingEvents={upcomingTwitchEvents}
    //     />
    //     <Card
    //       groupName={"OC Streamers"}
    //       city={"Orange"}
    //       href={"https://www.meetup.com/ocstreamers"}
    //       upcomingEvents={upcomingMeetupEvents}
    //     />
    //     <Card
    //       groupName={"Twitch SD"}
    //       city={"San Diego"}
    //       href={"https://meetups.twitch.tv/san-diego/"}
    //       upcomingEvents={upcomingTwitchEvents}
    //     />
    //   </Fragment>
    // );
  };

  return __jsx("div", {
    style: {
      minHeight: "100%",
      position: "absolute",
      width: "100%"
    },
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, siteTitle, ".com"), __jsx("meta", {
    name: "Description",
    content: description.replace("<br/>", " "),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: siteTitle,
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(url, "/static/twitchsocal.gif"),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:width",
    content: "800",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image:height",
    content: "800",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: description.replace("<br/>", " "),
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3866817834" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3866817834" + " " + "title-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3866817834" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-3866817834" + " " + "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3866817834" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, renderCards())), __jsx("div", {
    className: "jsx-3866817834" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3866817834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "This site is not affiliated or endorsed by Twitch, Mixer, or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3866817834",
    __self: this
  }, "html,body{height:100%;margin:0;padding:0;}body{background-color:#9146ff;background-image:url(\"/static/funky-lines.webp\");background-size:600px;font-family:\"Kanit\",sans-serif,Avenir Next,Avenir,Helvetica, sans-serif;}.hero.jsx-3866817834{width:100%;color:#fff;}.title.jsx-3866817834{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:\"Knewave\",sans-serif;-webkit-animation:colorwipe-jsx-3866817834 6s infinite;animation:colorwipe-jsx-3866817834 6s infinite;background:rgb(255,255,255);background:linear-gradient( 15deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(131,58,180,1) 25%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 75%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100% );background-size:900%;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-3866817834{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;}.title.jsx-3866817834,.description.jsx-3866817834{text-align:center;}.description.jsx-3866817834{font-size:22px;font-weight:300;font-family:\"Kanit\",sans-serif;}.row.jsx-3866817834{max-width:880px;margin:40px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.footer.jsx-3866817834{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}@media (max-width:840px){.row.jsx-3866817834{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-3866817834{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-3866817834{0%{background-position:0%;}35%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXGNhLWNyZWF0b3JzXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0hrQixBQUd1QixBQUthLEFBT2QsQUFJRixBQXdCd0MsQUFLL0IsQUFHSCxBQUtDLEFBT0wsQUFXYSxBQU1DLEFBR0EsQUFHRSxTQWxFaEIsRUFKQSxBQWdETyxDQTVEVCxHQWdETyxDQUtDLEVBUm5CLEVBNUJrQixDQWhCTixDQVlaLENBZ0VFLEFBR0EsRUEzRWlELEFBOEVqRCxJQXRCUyxFQTNEWCxBQStDa0MsRUFLbkIsR0FwQ0ksRUE0Q04sV0FDTyxJQTVDSCxTQStCakIsS0Fja0IsQ0E1Q2tCLE1BZFosSUFpRUQsS0FOSCxhQXpETixJQWdDRSxDQW5Ca0IsQUE2Q1QsTUFYSixPQWRyQixVQTBCQSw0Q0ExREEsR0ErREUsS0FoQjZCLDJCQWxDQyw0QkFVN0Isb0VBeUJILDJJQXhCdUIscUJBQ0UsdUJBQ00sNkJBQ08sb0NBQ3RDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXGNhLWNyZWF0b3JzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5sZXQgZ3JvdXBzID0gcmVxdWlyZShcIi4uL2dyb3Vwcy5qc29uXCIpO1xyXG5cclxuY29uc3Qgc2l0ZVRpdGxlID0gXCJDQSBDcmVhdG9yc1wiO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgXCJXZSdyZSB0aGUgbWVldHVwIGdyb3VwcyBmb3IgVHdpdGNoLCBNaXhlciwgc3RyZWFtZXJzLCBhbmQgZ2FtZXJzIGluIENhbGlmb3JuaWEhPGJyLz5GaW5kIHRoZSBjbG9zZXN0IG9uZSB0byB5b3Ugb3IgY29tZSB0byBhbGwgb3VyIGV2ZW50cyFcIjtcclxuY29uc3QgdXJsID0gXCJodHRwczovL2NhY3JlYXRvcnMuY29tXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1cGNvbWluZ1R3aXRjaEV2ZW50cywgc2V0VHdpdGNoRXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXBjb21pbmdNZWV0dXBFdmVudHMsIHNldE1lZXR1cEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRVcGNvbWluZ1R3aXRjaEV2ZW50cygpLnRoZW4odHdpdGhjRXZlbnRzID0+IHtcclxuICAgICAgc2V0VHdpdGNoRXZlbnRzKHR3aXRoY0V2ZW50cyk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRVcGNvbWluZ01lZXR1cEV2ZW50cygpLnRoZW4obWVldHVwRXZlbnRzID0+IHtcclxuICAgICAgc2V0TWVldHVwRXZlbnRzKG1lZXR1cEV2ZW50cyk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZpbmROZXh0RXZlbnQgPSAoY2l0eSwgdXBjb21pbmdFdmVudHMpID0+IHtcclxuICAgIHJldHVybiB1cGNvbWluZ0V2ZW50cy5maW5kKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmNoYXB0ZXIuY2l0eSA9PT0gY2l0eSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXBjb21pbmdFdmVudHMgPSB1cGNvbWluZ1R3aXRjaEV2ZW50cy5jb25jYXQodXBjb21pbmdNZWV0dXBFdmVudHMpO1xyXG4gICAgY29uc3QgbmV4dEV2ZW50cyA9IGdyb3Vwcy5tYXAoZ3JvdXAgPT5cclxuICAgICAgZmluZE5leHRFdmVudChncm91cC5jaXR5LCB1cGNvbWluZ0V2ZW50cylcclxuICAgICk7XHJcbiAgICAvLyAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgLy8gICBuZXcgRGF0ZShhLnN0YXJ0X2RhdGUpIDwgbmV3IERhdGUoYi5zdGFydF9kYXRlKTtcclxuICAgIC8vIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJuZXh0RXZlbnRzXCIsIG5leHRFdmVudHMpO1xyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgPEZyYWdtZW50PlxyXG4gICAgLy8gICAgIDxDYXJkXHJcbiAgICAvLyAgICAgICBncm91cE5hbWU9e1wiVHdpdGNoIExhXCJ9XHJcbiAgICAvLyAgICAgICBjaXR5PXtcIkxvcyBBbmdlbGVzXCJ9XHJcbiAgICAvLyAgICAgICBocmVmPXtcImh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvbG9zLWFuZ2VsZXMvXCJ9XHJcbiAgICAvLyAgICAgICB1cGNvbWluZ0V2ZW50cz17dXBjb21pbmdUd2l0Y2hFdmVudHN9XHJcbiAgICAvLyAgICAgLz5cclxuICAgIC8vICAgICA8Q2FyZFxyXG4gICAgLy8gICAgICAgZ3JvdXBOYW1lPXtcIk9DIFN0cmVhbWVyc1wifVxyXG4gICAgLy8gICAgICAgY2l0eT17XCJPcmFuZ2VcIn1cclxuICAgIC8vICAgICAgIGhyZWY9e1wiaHR0cHM6Ly93d3cubWVldHVwLmNvbS9vY3N0cmVhbWVyc1wifVxyXG4gICAgLy8gICAgICAgdXBjb21pbmdFdmVudHM9e3VwY29taW5nTWVldHVwRXZlbnRzfVxyXG4gICAgLy8gICAgIC8+XHJcbiAgICAvLyAgICAgPENhcmRcclxuICAgIC8vICAgICAgIGdyb3VwTmFtZT17XCJUd2l0Y2ggU0RcIn1cclxuICAgIC8vICAgICAgIGNpdHk9e1wiU2FuIERpZWdvXCJ9XHJcbiAgICAvLyAgICAgICBocmVmPXtcImh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvc2FuLWRpZWdvL1wifVxyXG4gICAgLy8gICAgICAgdXBjb21pbmdFdmVudHM9e3VwY29taW5nVHdpdGNoRXZlbnRzfVxyXG4gICAgLy8gICAgIC8+XHJcbiAgICAvLyAgIDwvRnJhZ21lbnQ+XHJcbiAgICAvLyApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9LmNvbTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PXtkZXNjcmlwdGlvbi5yZXBsYWNlKFwiPGJyLz5cIiwgXCIgXCIpfVxyXG4gICAgICAgID48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfT48L21ldGE+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YCR7dXJsfS9zdGF0aWMvdHdpdGNoc29jYWwuZ2lmYH1cclxuICAgICAgICA+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiODAwXCI+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjgwMFwiPjwvbWV0YT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PXtkZXNjcmlwdGlvbi5yZXBsYWNlKFwiPGJyLz5cIiwgXCIgXCIpfVxyXG4gICAgICAgID48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L2gxPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgID48L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3JlbmRlckNhcmRzKCl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVGhpcyBzaXRlIGlzIG5vdCBhZmZpbGlhdGVkIG9yIGVuZG9yc2VkIGJ5IFR3aXRjaCwgTWl4ZXIsIG9yIE1lZXR1cC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIDpnbG9iYWwoaHRtbCwgYm9keSkge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE0NmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9mdW5reS1saW5lcy53ZWJwXCIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MDBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWYsIEF2ZW5pciBOZXh0LCBBdmVuaXIsIEhlbHZldGljYSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiS25ld2F2ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBjb2xvcndpcGUgNnMgaW5maW5pdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDE1ZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDE1JSxcclxuICAgICAgICAgICAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDI1JSxcclxuICAgICAgICAgICAgcmdiYSgyNTMsIDI5LCAyOSwgMSkgNTAlLFxyXG4gICAgICAgICAgICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgNzUlLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDgwJSxcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA5MDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlLXdyYXBwZXIge1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBjb2xvcndpcGUge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM1JSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXBjb21pbmdUd2l0Y2hFdmVudHMoKSB7XHJcbiAgY29uc3QgY2FjaGVCdXN0ZXIgPSBgJiR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YDtcclxuICBjb25zdCB0d2l0Y2hSZXEgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL21lZXR1cHMudHdpdGNoLnR2L2FwaS9zZWFyY2gvP3Jlc3VsdF90eXBlcz11cGNvbWluZ19ldmVudCZjb3VudHJ5X2NvZGU9RWFydGgke2NhY2hlQnVzdGVyfWBcclxuICApLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0d2l0Y2hKc29uID0gYXdhaXQgdHdpdGNoUmVxLmpzb24oKTtcclxuXHJcbiAgaWYgKHR3aXRjaEpzb24pIHtcclxuICAgIHJldHVybiB0d2l0Y2hKc29uLnJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVwY29taW5nTWVldHVwRXZlbnRzKCkge1xyXG4gIGNvbnN0IGNhY2hlQnVzdGVyID0gYCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XHJcbiAgLy8gVE9ETyByZW1vdmUgaGFyZGNvZGVkIGdyb3VwIG5hbWUsIGR5bmFtaWNhbGx5IGdldCBmcm9tIGdyb3Vwcy5qc29uXHJcbiAgY29uc3QgbWVldHVwQ29tUmVxID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9zaGllbGRlZC1wbGF0ZWF1LTA2MTY3Lmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9hcGkubWVldHVwLmNvbS9vY3N0cmVhbWVycy9ldmVudHM/JnNpZ249dHJ1ZSZwaG90by1ob3N0PXNlY3VyZSZwYWdlPTUmaGFzX2VuZGVkPWZhbHNlJHtjYWNoZUJ1c3Rlcn1gXHJcbiAgKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG1lZXR1cENvbVJlcSkge1xyXG4gICAgY29uc3QgbWVldHVwQ29tSnNvbiA9IGF3YWl0IG1lZXR1cENvbVJlcS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhtZWV0dXBDb21Kc29uKTtcclxuICAgIHJldHVybiBjb252ZXJ0TWVldHVwVG9Ud2l0Y2gobWVldHVwQ29tSnNvbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRNZWV0dXBUb1R3aXRjaChtZWV0dXApIHtcclxuICBjb25zdCBtZWV0dXBMaXN0ID0gbWVldHVwLm1hcChldmVudCA9PiB7XHJcbiAgICBjb25zdCBjaXR5ID0gZXZlbnQuZ3JvdXAubG9jYWxpemVkX2xvY2F0aW9uLnNwbGl0KFwiLFwiKVswXTtcclxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG1vbWVudFxyXG4gICAgICAudXRjKGV2ZW50LnRpbWUpXHJcbiAgICAgIC51dGNPZmZzZXQoZXZlbnQudXRjX29mZnNldCAvIDM2MDAwMDApXHJcbiAgICAgIC5mb3JtYXQoKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXJ0RGF0ZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFwdGVyOiB7XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICB9LFxyXG4gICAgICB1cmw6IGV2ZW50LmxpbmssXHJcbiAgICAgIHN0YXJ0X2RhdGU6IHN0YXJ0RGF0ZSxcclxuICAgICAgdGl0bGU6IGV2ZW50Lm5hbWVcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtZWV0dXBMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\jared\\ca-creators\\pages\\index.js */"));
};

function getUpcomingTwitchEvents() {
  return _getUpcomingTwitchEvents.apply(this, arguments);
}

function _getUpcomingTwitchEvents() {
  _getUpcomingTwitchEvents = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var cacheBuster, twitchReq, twitchJson;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000));
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth".concat(cacheBuster))["catch"](function (err) {
              console.log(err);
            });

          case 3:
            twitchReq = _context.sent;
            _context.next = 6;
            return twitchReq.json();

          case 6:
            twitchJson = _context.sent;

            if (!twitchJson) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", twitchJson.results);

          case 9:
            return _context.abrupt("return", []);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUpcomingTwitchEvents.apply(this, arguments);
}

function getUpcomingMeetupEvents() {
  return _getUpcomingMeetupEvents.apply(this, arguments);
}

function _getUpcomingMeetupEvents() {
  _getUpcomingMeetupEvents = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var cacheBuster, meetupComReq, meetupComJson;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000)); // TODO remove hardcoded group name, dynamically get from groups.json

            _context2.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://shielded-plateau-06167.herokuapp.com/https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false".concat(cacheBuster))["catch"](function (err) {
              console.log(err);
            });

          case 3:
            meetupComReq = _context2.sent;

            if (!meetupComReq) {
              _context2.next = 10;
              break;
            }

            _context2.next = 7;
            return meetupComReq.json();

          case 7:
            meetupComJson = _context2.sent;
            console.log(meetupComJson);
            return _context2.abrupt("return", convertMeetupToTwitch(meetupComJson));

          case 10:
            return _context2.abrupt("return", []);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUpcomingMeetupEvents.apply(this, arguments);
}

function convertMeetupToTwitch(meetup) {
  var meetupList = meetup.map(function (event) {
    var city = event.group.localized_location.split(",")[0];
    var startDate = moment__WEBPACK_IMPORTED_MODULE_7___default.a.utc(event.time).utcOffset(event.utc_offset / 3600000).format();
    console.log(startDate);
    return {
      chapter: {
        city: city
      },
      url: event.link,
      start_date: startDate,
      title: event.name
    };
  });
  return meetupList;
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.302e3f029709aff44e89.hot-update.js.map
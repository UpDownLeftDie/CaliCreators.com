webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var groups = __webpack_require__(/*! ../groups.json */ "./groups.json");

var siteTitle = 'CA Creators';
var description = "We're the meetup groups for Twitch, Mixer, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!";
var url = 'https://cacreators.com';

var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    events: [],
    loading: true
  }),
      upcomingTwitchEvents = _useState[0],
      setTwitchEvents = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    events: [],
    loading: true
  }),
      upcomingMeetupEvents = _useState2[0],
      setMeetupEvents = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getUpcomingTwitchEvents().then(function (twitchEvents) {
      setTwitchEvents({
        events: twitchEvents,
        loading: false
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getUpcomingMeetupEvents().then(function (meetupEvents) {
      setMeetupEvents({
        events: meetupEvents,
        loading: false
      });
    });
  }, []);

  var findNextEvent = function findNextEvent(groups, upcomingEvents) {
    return groups.map(function (group) {
      var nextEvent = upcomingEvents.find(function (event) {
        if (event.chapter.city === group.city) return true;
        return false;
      });
      return _objectSpread(_objectSpread({}, group), {}, {
        nextEvent: nextEvent || {}
      });
    });
  };

  var renderCards = function renderCards() {
    var upcomingEvents = upcomingTwitchEvents.events.concat(upcomingMeetupEvents.events);
    var loading = upcomingTwitchEvents.loading || upcomingMeetupEvents.loading;
    var groupsWithEvents = findNextEvent(groups, upcomingEvents).sort(function (a, b) {
      if (!a.nextEvent.start_date) return 1;
      if (!b.nextEvent.start_date) return -1;
      return new Date(a.nextEvent.start_date) - new Date(b.nextEvent.start_date);
    });
    return groupsWithEvents.map(function (groupWithEvent, i) {
      return __jsx(_components_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: groupWithEvent.name,
        group: groupWithEvent,
        loading: loading,
        totalCards: groupsWithEvents.length,
        position: i + 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 7
        }
      });
    });
  };

  return __jsx("div", {
    style: {
      minHeight: '100%',
      position: 'absolute',
      width: '100%'
    },
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("title", {
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, siteTitle, ".com"), __jsx("meta", {
    name: "Description",
    content: description.replace('<br/>', ' '),
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: siteTitle,
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: url,
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(url, "/twitchsocal.gif"),
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "800",
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "800",
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description.replace('<br/>', ' '),
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-2435362639" + " " + "hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-2435362639" + " " + "title-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-2435362639" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-2435362639" + " " + "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2435362639" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, renderCards())), __jsx("div", {
    className: "jsx-2435362639" + " " + "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-2435362639",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "This site is not affiliated or endorsed by Twitch, Mixer, or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2435362639",
    __self: _this
  }, ".hero.jsx-2435362639{width:100%;color:#fff;}.title.jsx-2435362639{margin:0;width:100%;margin-top:50px;line-height:1.15;font-size:48px;font-family:'Knewave',sans-serif;-webkit-animation:colorwipe-jsx-2435362639 6s infinite;animation:colorwipe-jsx-2435362639 6s infinite;background:rgb(255,255,255);background:linear-gradient( 15deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(131,58,180,1) 25%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 75%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100% );background-size:2400px;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-2435362639{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;width:270px;margin:0 auto;}.title.jsx-2435362639,.description.jsx-2435362639{text-align:center;}.description.jsx-2435362639{font-size:22px;font-weight:300;font-family:'Kanit',sans-serif;}.row.jsx-2435362639{max-width:1000px;margin:65px auto;position:relative;min-height:410px;}.footer.jsx-2435362639{color:#fff;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}@media (max-width:900px){.row.jsx-2435362639{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-2435362639{0%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-2435362639{0%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIa0IsQUFHc0IsQUFJRixBQXdCd0MsQUFPL0IsQUFHSCxBQUtFLEFBTU4sQUFXSSxBQVFVLEFBR0UsU0FsRWhCLEVBSkEsQUFpRE8sSUFYRixFQUtDLENBUm5CLEVBOUJrQixFQUpsQixDQW1FRSxFQUdBLElBckJTLEVBWHVCLEdBS2QsRUF0Q0QsRUE2Q04sV0FDTyxHQVBELENBdENGLFNBaUNqQixLQWFrQixDQTdDa0IsQ0FzQ3BDLEtBY3VCLFNBTkgsaUJBMUJKLENBbkJrQixBQThDVCxhQTFCWCxVQTJCZCxFQTFCZ0IsY0FDaEIsR0E4QjBCLDREQW5ETSxrQkFvRFQsVUExQ3BCLG1GQTJDRCw0SEExQ3VCLHVCQUNBLHVCQUNNLDZCQUNPLG9DQUN0QyIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5sZXQgZ3JvdXBzID0gcmVxdWlyZSgnLi4vZ3JvdXBzLmpzb24nKTtcclxuXHJcbmNvbnN0IHNpdGVUaXRsZSA9ICdDQSBDcmVhdG9ycyc7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID1cclxuICBcIldlJ3JlIHRoZSBtZWV0dXAgZ3JvdXBzIGZvciBUd2l0Y2gsIE1peGVyLCBzdHJlYW1lcnMsIGFuZCBnYW1lcnMgaW4gQ2FsaWZvcm5pYSE8YnIvPkZpbmQgdGhlIGNsb3Nlc3Qgb25lIHRvIHlvdSBvciBjb21lIHRvIGFsbCBvdXIgZXZlbnRzIVwiO1xyXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9jYWNyZWF0b3JzLmNvbSc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1cGNvbWluZ1R3aXRjaEV2ZW50cywgc2V0VHdpdGNoRXZlbnRzXSA9IHVzZVN0YXRlKHtcclxuICAgIGV2ZW50czogW10sXHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFt1cGNvbWluZ01lZXR1cEV2ZW50cywgc2V0TWVldHVwRXZlbnRzXSA9IHVzZVN0YXRlKHtcclxuICAgIGV2ZW50czogW10sXHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VXBjb21pbmdUd2l0Y2hFdmVudHMoKS50aGVuKCh0d2l0Y2hFdmVudHMpID0+IHtcclxuICAgICAgc2V0VHdpdGNoRXZlbnRzKHsgZXZlbnRzOiB0d2l0Y2hFdmVudHMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VXBjb21pbmdNZWV0dXBFdmVudHMoKS50aGVuKChtZWV0dXBFdmVudHMpID0+IHtcclxuICAgICAgc2V0TWVldHVwRXZlbnRzKHsgZXZlbnRzOiBtZWV0dXBFdmVudHMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmaW5kTmV4dEV2ZW50ID0gKGdyb3VwcywgdXBjb21pbmdFdmVudHMpID0+IHtcclxuICAgIHJldHVybiBncm91cHMubWFwKChncm91cCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXh0RXZlbnQgPSB1cGNvbWluZ0V2ZW50cy5maW5kKChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5jaGFwdGVyLmNpdHkgPT09IGdyb3VwLmNpdHkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZ3JvdXAsXHJcbiAgICAgICAgbmV4dEV2ZW50OiBuZXh0RXZlbnQgfHwge30sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVwY29taW5nRXZlbnRzID0gdXBjb21pbmdUd2l0Y2hFdmVudHMuZXZlbnRzLmNvbmNhdChcclxuICAgICAgdXBjb21pbmdNZWV0dXBFdmVudHMuZXZlbnRzLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPVxyXG4gICAgICB1cGNvbWluZ1R3aXRjaEV2ZW50cy5sb2FkaW5nIHx8IHVwY29taW5nTWVldHVwRXZlbnRzLmxvYWRpbmc7XHJcbiAgICBjb25zdCBncm91cHNXaXRoRXZlbnRzID0gZmluZE5leHRFdmVudChncm91cHMsIHVwY29taW5nRXZlbnRzKS5zb3J0KFxyXG4gICAgICAoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmICghYS5uZXh0RXZlbnQuc3RhcnRfZGF0ZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgaWYgKCFiLm5leHRFdmVudC5zdGFydF9kYXRlKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIG5ldyBEYXRlKGEubmV4dEV2ZW50LnN0YXJ0X2RhdGUpIC0gbmV3IERhdGUoYi5uZXh0RXZlbnQuc3RhcnRfZGF0ZSlcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiBncm91cHNXaXRoRXZlbnRzLm1hcCgoZ3JvdXBXaXRoRXZlbnQsIGkpID0+IChcclxuICAgICAgPENhcmRcclxuICAgICAgICBrZXk9e2dyb3VwV2l0aEV2ZW50Lm5hbWV9XHJcbiAgICAgICAgZ3JvdXA9e2dyb3VwV2l0aEV2ZW50fVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgdG90YWxDYXJkcz17Z3JvdXBzV2l0aEV2ZW50cy5sZW5ndGh9XHJcbiAgICAgICAgcG9zaXRpb249e2kgKyAxfVxyXG4gICAgICAvPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICB9fT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfS5jb208L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZSgnPGJyLz4nLCAnICcpfT48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsfT48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2Ake3VybH0vdHdpdGNoc29jYWwuZ2lmYH0+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiODAwXCI+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjgwMFwiPjwvbWV0YT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PXtkZXNjcmlwdGlvbi5yZXBsYWNlKCc8YnIvPicsICcgJyl9PjwvbWV0YT5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57c2l0ZVRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19PjwvcD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj57cmVuZGVyQ2FyZHMoKX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBUaGlzIHNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgb3IgZW5kb3JzZWQgYnkgVHdpdGNoLCBNaXhlciwgb3IgTWVldHVwLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdLbmV3YXZlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGFuaW1hdGlvbjogY29sb3J3aXBlIDZzIGluZmluaXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAxNWRlZyxcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSxcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxNSUsXHJcbiAgICAgICAgICAgIHJnYmEoMTMxLCA1OCwgMTgwLCAxKSAyNSUsXHJcbiAgICAgICAgICAgIHJnYmEoMjUzLCAyOSwgMjksIDEpIDUwJSxcclxuICAgICAgICAgICAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDc1JSxcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA4MCUsXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjQwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlLXdyYXBwZXIge1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA2NXB4IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yd2lwZSB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXBjb21pbmdUd2l0Y2hFdmVudHMoKSB7XHJcbiAgY29uc3QgY2FjaGVCdXN0ZXIgPSBgJiR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YDtcclxuICBjb25zdCB0d2l0Y2hSZXEgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL21lZXR1cHMudHdpdGNoLnR2L2FwaS9zZWFyY2gvP3Jlc3VsdF90eXBlcz11cGNvbWluZ19ldmVudCZjb3VudHJ5X2NvZGU9RWFydGgke2NhY2hlQnVzdGVyfWAsXHJcbiAgKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0d2l0Y2hKc29uID0gYXdhaXQgdHdpdGNoUmVxLmpzb24oKTtcclxuXHJcbiAgaWYgKHR3aXRjaEpzb24pIHtcclxuICAgIHJldHVybiB0d2l0Y2hKc29uLnJlc3VsdHM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVwY29taW5nTWVldHVwRXZlbnRzKCkge1xyXG4gIGNvbnN0IGNhY2hlQnVzdGVyID0gYCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XHJcbiAgLy8gVE9ETyByZW1vdmUgaGFyZGNvZGVkIGdyb3VwIG5hbWUsIGR5bmFtaWNhbGx5IGdldCBmcm9tIGdyb3Vwcy5qc29uXHJcbiAgbGV0IG1lZXR1cFVybCA9IGBodHRwczovL2FwaS5tZWV0dXAuY29tL29jc3RyZWFtZXJzL2V2ZW50cz8mc2lnbj10cnVlJnBob3RvLWhvc3Q9c2VjdXJlJnBhZ2U9NSZoYXNfZW5kZWQ9ZmFsc2Uke2NhY2hlQnVzdGVyfWA7XHJcbiAgaWYgKHByb2Nlc3MuZW52LkVOViAhPT0gJ2RldmVsb3BtZW50JylcclxuICAgIG1lZXR1cFVybCA9IGBodHRwczovL2x5bTIwbmhiOGouZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vZGV2P3VybD0ke21lZXR1cFVybH1gO1xyXG4gIGNvbnN0IG1lZXR1cENvbVJlcSA9IGF3YWl0IGZldGNoKG1lZXR1cFVybCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG1lZXR1cENvbVJlcSkge1xyXG4gICAgY29uc3QgbWVldHVwQ29tSnNvbiA9IGF3YWl0IG1lZXR1cENvbVJlcS5qc29uKCk7XHJcbiAgICByZXR1cm4gY29udmVydE1lZXR1cFRvVHdpdGNoKG1lZXR1cENvbUpzb24pO1xyXG4gIH1cclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKSk7XHJcblxyXG4gIHJldHVybiBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydE1lZXR1cFRvVHdpdGNoKG1lZXR1cCkge1xyXG4gIGNvbnN0IG1lZXR1cExpc3QgPSBtZWV0dXAubWFwKChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgY2l0eSA9IGV2ZW50Lmdyb3VwLmxvY2FsaXplZF9sb2NhdGlvbi5zcGxpdCgnLCcpWzBdO1xyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbW9tZW50XHJcbiAgICAgIC51dGMoZXZlbnQudGltZSlcclxuICAgICAgLnV0Y09mZnNldChldmVudC51dGNfb2Zmc2V0IC8gMzYwMDAwMClcclxuICAgICAgLmZvcm1hdCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgIGNpdHksXHJcbiAgICAgIH0sXHJcbiAgICAgIHVybDogZXZlbnQubGluayxcclxuICAgICAgc3RhcnRfZGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICB0aXRsZTogZXZlbnQubmFtZSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtZWV0dXBMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\index.js */"));
};

_s(Home, "uAzSvysfHVz0TLzQiWY9k07bqbQ=");

_c = Home;

function getUpcomingTwitchEvents() {
  return _getUpcomingTwitchEvents.apply(this, arguments);
}

function _getUpcomingTwitchEvents() {
  _getUpcomingTwitchEvents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var cacheBuster, twitchReq, twitchJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000));
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth".concat(cacheBuster))["catch"](function (err) {
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
  _getUpcomingMeetupEvents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var cacheBuster, meetupUrl, meetupComReq, meetupComJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000)); // TODO remove hardcoded group name, dynamically get from groups.json

            meetupUrl = "https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false".concat(cacheBuster);
            if (false) {}
            _context2.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()(meetupUrl)["catch"](function (err) {
              console.log(err);
            });

          case 5:
            meetupComReq = _context2.sent;

            if (!meetupComReq) {
              _context2.next = 11;
              break;
            }

            _context2.next = 9;
            return meetupComReq.json();

          case 9:
            meetupComJson = _context2.sent;
            return _context2.abrupt("return", convertMeetupToTwitch(meetupComJson));

          case 11:
            _context2.next = 13;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 3000);
            });

          case 13:
            return _context2.abrupt("return", []);

          case 14:
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
    var city = event.group.localized_location.split(',')[0];
    var startDate = moment__WEBPACK_IMPORTED_MODULE_8___default.a.utc(event.time).utcOffset(event.utc_offset / 3600000).format();
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

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ3JvdXBzIiwicmVxdWlyZSIsInNpdGVUaXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiSG9tZSIsInVzZVN0YXRlIiwiZXZlbnRzIiwibG9hZGluZyIsInVwY29taW5nVHdpdGNoRXZlbnRzIiwic2V0VHdpdGNoRXZlbnRzIiwidXBjb21pbmdNZWV0dXBFdmVudHMiLCJzZXRNZWV0dXBFdmVudHMiLCJ1c2VFZmZlY3QiLCJnZXRVcGNvbWluZ1R3aXRjaEV2ZW50cyIsInRoZW4iLCJ0d2l0Y2hFdmVudHMiLCJnZXRVcGNvbWluZ01lZXR1cEV2ZW50cyIsIm1lZXR1cEV2ZW50cyIsImZpbmROZXh0RXZlbnQiLCJ1cGNvbWluZ0V2ZW50cyIsIm1hcCIsImdyb3VwIiwibmV4dEV2ZW50IiwiZmluZCIsImV2ZW50IiwiY2hhcHRlciIsImNpdHkiLCJyZW5kZXJDYXJkcyIsImNvbmNhdCIsImdyb3Vwc1dpdGhFdmVudHMiLCJzb3J0IiwiYSIsImIiLCJzdGFydF9kYXRlIiwiRGF0ZSIsImdyb3VwV2l0aEV2ZW50IiwiaSIsIm5hbWUiLCJsZW5ndGgiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsIndpZHRoIiwicmVwbGFjZSIsIl9faHRtbCIsImNhY2hlQnVzdGVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZmV0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidHdpdGNoUmVxIiwianNvbiIsInR3aXRjaEpzb24iLCJyZXN1bHRzIiwibWVldHVwVXJsIiwicHJvY2VzcyIsIm1lZXR1cENvbVJlcSIsIm1lZXR1cENvbUpzb24iLCJjb252ZXJ0TWVldHVwVG9Ud2l0Y2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJtZWV0dXAiLCJtZWV0dXBMaXN0IiwibG9jYWxpemVkX2xvY2F0aW9uIiwic3BsaXQiLCJzdGFydERhdGUiLCJtb21lbnQiLCJ1dGMiLCJ0aW1lIiwi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LEVBQUVtQyxTQUxQO0FBTUxRLFdBQUssRUFBRXBELEtBQUssQ0FBQ2E7QUFOUixLQUFQO0FBUUQsR0Fka0IsQ0FBbkI7QUFnQkEsU0FBTzRCLFVBQVA7QUFDRDs7QUFFYzdELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3ZTkwZWFmY2I1MGI2NGE4MjA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxubGV0IGdyb3VwcyA9IHJlcXVpcmUoJy4uL2dyb3Vwcy5qc29uJyk7XHJcblxyXG5jb25zdCBzaXRlVGl0bGUgPSAnQ0EgQ3JlYXRvcnMnO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgXCJXZSdyZSB0aGUgbWVldHVwIGdyb3VwcyBmb3IgVHdpdGNoLCBNaXhlciwgc3RyZWFtZXJzLCBhbmQgZ2FtZXJzIGluIENhbGlmb3JuaWEhPGJyLz5GaW5kIHRoZSBjbG9zZXN0IG9uZSB0byB5b3Ugb3IgY29tZSB0byBhbGwgb3VyIGV2ZW50cyFcIjtcclxuY29uc3QgdXJsID0gJ2h0dHBzOi8vY2FjcmVhdG9ycy5jb20nO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXBjb21pbmdUd2l0Y2hFdmVudHMsIHNldFR3aXRjaEV2ZW50c10gPSB1c2VTdGF0ZSh7XHJcbiAgICBldmVudHM6IFtdLFxyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCBbdXBjb21pbmdNZWV0dXBFdmVudHMsIHNldE1lZXR1cEV2ZW50c10gPSB1c2VTdGF0ZSh7XHJcbiAgICBldmVudHM6IFtdLFxyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFVwY29taW5nVHdpdGNoRXZlbnRzKCkudGhlbigodHdpdGNoRXZlbnRzKSA9PiB7XHJcbiAgICAgIHNldFR3aXRjaEV2ZW50cyh7IGV2ZW50czogdHdpdGNoRXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFVwY29taW5nTWVldHVwRXZlbnRzKCkudGhlbigobWVldHVwRXZlbnRzKSA9PiB7XHJcbiAgICAgIHNldE1lZXR1cEV2ZW50cyh7IGV2ZW50czogbWVldHVwRXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmluZE5leHRFdmVudCA9IChncm91cHMsIHVwY29taW5nRXZlbnRzKSA9PiB7XHJcbiAgICByZXR1cm4gZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcclxuICAgICAgY29uc3QgbmV4dEV2ZW50ID0gdXBjb21pbmdFdmVudHMuZmluZCgoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuY2hhcHRlci5jaXR5ID09PSBncm91cC5jaXR5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmdyb3VwLFxyXG4gICAgICAgIG5leHRFdmVudDogbmV4dEV2ZW50IHx8IHt9LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cGNvbWluZ0V2ZW50cyA9IHVwY29taW5nVHdpdGNoRXZlbnRzLmV2ZW50cy5jb25jYXQoXHJcbiAgICAgIHVwY29taW5nTWVldHVwRXZlbnRzLmV2ZW50cyxcclxuICAgICk7XHJcbiAgICBjb25zdCBsb2FkaW5nID1cclxuICAgICAgdXBjb21pbmdUd2l0Y2hFdmVudHMubG9hZGluZyB8fCB1cGNvbWluZ01lZXR1cEV2ZW50cy5sb2FkaW5nO1xyXG4gICAgY29uc3QgZ3JvdXBzV2l0aEV2ZW50cyA9IGZpbmROZXh0RXZlbnQoZ3JvdXBzLCB1cGNvbWluZ0V2ZW50cykuc29ydChcclxuICAgICAgKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoIWEubmV4dEV2ZW50LnN0YXJ0X2RhdGUpIHJldHVybiAxO1xyXG4gICAgICAgIGlmICghYi5uZXh0RXZlbnQuc3RhcnRfZGF0ZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBuZXcgRGF0ZShhLm5leHRFdmVudC5zdGFydF9kYXRlKSAtIG5ldyBEYXRlKGIubmV4dEV2ZW50LnN0YXJ0X2RhdGUpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gZ3JvdXBzV2l0aEV2ZW50cy5tYXAoKGdyb3VwV2l0aEV2ZW50LCBpKSA9PiAoXHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAga2V5PXtncm91cFdpdGhFdmVudC5uYW1lfVxyXG4gICAgICAgIGdyb3VwPXtncm91cFdpdGhFdmVudH1cclxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIHRvdGFsQ2FyZHM9e2dyb3Vwc1dpdGhFdmVudHMubGVuZ3RofVxyXG4gICAgICAgIHBvc2l0aW9uPXtpICsgMX1cclxuICAgICAgLz5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgfX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX0uY29tPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uLnJlcGxhY2UoJzxici8+JywgJyAnKX0+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9PjwvbWV0YT5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHt1cmx9L3R3aXRjaHNvY2FsLmdpZmB9PjwvbWV0YT5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjgwMFwiPjwvbWV0YT5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI4MDBcIj48L21ldGE+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb24ucmVwbGFjZSgnPGJyLz4nLCAnICcpfT48L21ldGE+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L2gxPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fT48L3A+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3JlbmRlckNhcmRzKCl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVGhpcyBzaXRlIGlzIG5vdCBhZmZpbGlhdGVkIG9yIGVuZG9yc2VkIGJ5IFR3aXRjaCwgTWl4ZXIsIG9yIE1lZXR1cC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZXJvIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnS25ld2F2ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBhbmltYXRpb246IGNvbG9yd2lwZSA2cyBpbmZpbml0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMTVkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTUlLFxyXG4gICAgICAgICAgICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMjUlLFxyXG4gICAgICAgICAgICByZ2JhKDI1MywgMjksIDI5LCAxKSA1MCUsXHJcbiAgICAgICAgICAgIHJnYmEoMjUyLCAxNzYsIDY5LCAxKSA3NSUsXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgODAlLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0MDBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZS13cmFwcGVyIHtcclxuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KSk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogNjVweCBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBjb2xvcndpcGUge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFVwY29taW5nVHdpdGNoRXZlbnRzKCkge1xyXG4gIGNvbnN0IGNhY2hlQnVzdGVyID0gYCYke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XHJcbiAgY29uc3QgdHdpdGNoUmVxID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tZWV0dXBzLnR3aXRjaC50di9hcGkvc2VhcmNoLz9yZXN1bHRfdHlwZXM9dXBjb21pbmdfZXZlbnQmY291bnRyeV9jb2RlPUVhcnRoJHtjYWNoZUJ1c3Rlcn1gLFxyXG4gICkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdHdpdGNoSnNvbiA9IGF3YWl0IHR3aXRjaFJlcS5qc29uKCk7XHJcblxyXG4gIGlmICh0d2l0Y2hKc29uKSB7XHJcbiAgICByZXR1cm4gdHdpdGNoSnNvbi5yZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVcGNvbWluZ01lZXR1cEV2ZW50cygpIHtcclxuICBjb25zdCBjYWNoZUJ1c3RlciA9IGAmJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1gO1xyXG4gIC8vIFRPRE8gcmVtb3ZlIGhhcmRjb2RlZCBncm91cCBuYW1lLCBkeW5hbWljYWxseSBnZXQgZnJvbSBncm91cHMuanNvblxyXG4gIGxldCBtZWV0dXBVcmwgPSBgaHR0cHM6Ly9hcGkubWVldHVwLmNvbS9vY3N0cmVhbWVycy9ldmVudHM/JnNpZ249dHJ1ZSZwaG90by1ob3N0PXNlY3VyZSZwYWdlPTUmaGFzX2VuZGVkPWZhbHNlJHtjYWNoZUJ1c3Rlcn1gO1xyXG4gIGlmIChwcm9jZXNzLmVudi5FTlYgIT09ICdkZXZlbG9wbWVudCcpXHJcbiAgICBtZWV0dXBVcmwgPSBgaHR0cHM6Ly9seW0yMG5oYjhqLmV4ZWN1dGUtYXBpLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tL2Rldj91cmw9JHttZWV0dXBVcmx9YDtcclxuICBjb25zdCBtZWV0dXBDb21SZXEgPSBhd2FpdCBmZXRjaChtZWV0dXBVcmwpLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChtZWV0dXBDb21SZXEpIHtcclxuICAgIGNvbnN0IG1lZXR1cENvbUpzb24gPSBhd2FpdCBtZWV0dXBDb21SZXEuanNvbigpO1xyXG4gICAgcmV0dXJuIGNvbnZlcnRNZWV0dXBUb1R3aXRjaChtZWV0dXBDb21Kc29uKTtcclxuICB9XHJcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRNZWV0dXBUb1R3aXRjaChtZWV0dXApIHtcclxuICBjb25zdCBtZWV0dXBMaXN0ID0gbWVldHVwLm1hcCgoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGNpdHkgPSBldmVudC5ncm91cC5sb2NhbGl6ZWRfbG9jYXRpb24uc3BsaXQoJywnKVswXTtcclxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG1vbWVudFxyXG4gICAgICAudXRjKGV2ZW50LnRpbWUpXHJcbiAgICAgIC51dGNPZmZzZXQoZXZlbnQudXRjX29mZnNldCAvIDM2MDAwMDApXHJcbiAgICAgIC5mb3JtYXQoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICBjaXR5LFxyXG4gICAgICB9LFxyXG4gICAgICB1cmw6IGV2ZW50LmxpbmssXHJcbiAgICAgIHN0YXJ0X2RhdGU6IHN0YXJ0RGF0ZSxcclxuICAgICAgdGl0bGU6IGV2ZW50Lm5hbWUsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWVldHVwTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
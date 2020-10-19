webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_organisms_group_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/organisms/group-card */ "./components/organisms/group-card.jsx");




var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var data = __webpack_require__(/*! ./data.json */ "./pages/data.json");

var siteTitle = 'Cali Creators MeetUps';
var description = "We're the meetup groups for Twitch, Facebook, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!";

function convertMeetupToTwitch(meetup) {
  var meetupList = meetup.map(function (event) {
    var city = event.group.localized_location.split(',')[0];
    var startDate = moment__WEBPACK_IMPORTED_MODULE_7___default.a.utc(event.time).utcOffset(event.utc_offset / 3600000).format();
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

function getUpcomingTwitchEvents() {
  return _getUpcomingTwitchEvents.apply(this, arguments);
}

function _getUpcomingTwitchEvents() {
  _getUpcomingTwitchEvents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var cacheBuster, twitchReq, twitchJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
  _getUpcomingMeetupEvents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var cacheBuster, meetupUrl, meetupComReq, meetupComJson;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cacheBuster = "&".concat(Math.floor(Math.random() * 1000)); // TODO remove hardcoded group name, dynamically get from data.json

            meetupUrl = "https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false".concat(cacheBuster);
            if (false) {}
            _context2.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(meetupUrl)["catch"](function (err) {
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
    var cachedData = JSON.parse(localStorage.getItem('twitchEvents') || '{}');

    if (cachedData === null || cachedData === void 0 ? void 0 : cachedData.updatedAt) {
      var fiveMinsAgo = new Date(Date.now() - 5 * 60000);

      if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
        setTwitchEvents({
          events: cachedData.events,
          loading: false
        });
        return;
      }
    }

    getUpcomingTwitchEvents().then(function (twitchEvents) {
      localStorage.setItem('twitchEvents', JSON.stringify({
        events: twitchEvents,
        updatedAt: Date.now()
      }));
      setTwitchEvents({
        events: twitchEvents,
        loading: false
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var cachedData = JSON.parse(localStorage.getItem('twitchEvents') || '{}');

    if (cachedData === null || cachedData === void 0 ? void 0 : cachedData.updatedAt) {
      var fiveMinsAgo = new Date(Date.now() - 5 * 60000);

      if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
        setMeetupEvents({
          events: cachedData.events,
          loading: false
        });
        return;
      }
    }

    getUpcomingMeetupEvents().then(function (meetupEvents) {
      localStorage.setItem('meetupEvents', JSON.stringify({
        events: meetupEvents,
        updatedAt: Date.now()
      }));
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
    var groupsWithEvents = findNextEvent(data.groups, upcomingEvents).sort(function (a, b) {
      if (!a.nextEvent.start_date) return 1;
      if (!b.nextEvent.start_date) return -1;
      return new Date(a.nextEvent.start_date) - new Date(b.nextEvent.start_date);
    });
    return groupsWithEvents.map(function (groupWithEvent, i) {
      return __jsx(_components_organisms_group_card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: groupWithEvent.name,
        group: groupWithEvent,
        loading: loading,
        totalCards: groupsWithEvents.length,
        position: i + 1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 7
        }
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "preconnect",
    href: "https://lym20nhb8j.execute-api.us-west-2.amazonaws.com",
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "preconnect",
    href: "https://meetups.twitch.tv",
    className: "jsx-640232234",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-640232234" + " " + "hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-640232234" + " " + "title-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-640232234" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, siteTitle)), __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: description
    },
    className: "jsx-640232234" + " " + "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-640232234" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, renderCards())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "640232234",
    __self: _this
  }, ".hero.jsx-640232234{color:#fff;min-height:100%;width:100%;}.title.jsx-640232234{margin:0;width:100%;min-height:120px;line-height:1.15;font-size:48px;font-family:'Knewave',sans-serif;-webkit-animation:colorwipe-jsx-640232234 6s infinite;animation:colorwipe-jsx-640232234 6s infinite;background:rgb(255,255,255);background:linear-gradient( 40deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(131,58,180,1) 30%, rgba(253,29,29,1) 55%, rgba(252,176,69,1) 70%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100% );background-size:2400px;background-position:0%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.title-wrapper.jsx-640232234{-webkit-filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));filter:drop-shadow(0 5px 5px rgba(0,0,0,0.4));display:block;width:300px;margin:0 auto;}.title.jsx-640232234,.description.jsx-640232234{text-align:center;}.description.jsx-640232234{font-size:22px;font-weight:300;font-family:'Kanit',sans-serif;}.row.jsx-640232234{max-width:1000px;margin:65px auto;position:relative;min-height:410px;}@media (max-width:900px){.row.jsx-640232234{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}@-webkit-keyframes colorwipe-jsx-640232234{0%{background-position:0%;}100%{background-position:100%;}}@keyframes colorwipe-jsx-640232234{0%{background-position:0%;}100%{background-position:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTFMsQUFHd0IsQUFLRixBQXdCd0MsQUFPL0IsQUFHSCxBQUtFLEFBUUYsQUFRVSxBQUdFLFNBekRoQixFQUxLLElBdUNBLEVBS0MsQ0FSbkIsRUE5Qm1CLEdBc0RqQixFQUdBLEVBOURXLElBdUNxQixHQUtkLEdBdENELENBTG5CLGNBNENtQixFQXRDRixRQWlDakIsT0FoQ29DLEFBc0NwQyxLQUt1QiwwQkF2QlAsRUFuQmtCLFlBb0JwQixZQUNFLGNBQ2hCLEdBcUIwQiwyREExQ00sbUJBMkNULFNBakNwQixvRkFrQ0QsMkhBakN1Qix1QkFDQSx1QkFDTSw2QkFDTyxvQ0FDdEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBHcm91cENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvZ3JvdXAtY2FyZCc7XHJcblxyXG5jb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kYXRhLmpzb24nKTtcclxuXHJcbmNvbnN0IHNpdGVUaXRsZSA9ICdDYWxpIENyZWF0b3JzIE1lZXRVcHMnO1xyXG5jb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgXCJXZSdyZSB0aGUgbWVldHVwIGdyb3VwcyBmb3IgVHdpdGNoLCBGYWNlYm9vaywgc3RyZWFtZXJzLCBhbmQgZ2FtZXJzIGluIENhbGlmb3JuaWEhPGJyLz5GaW5kIHRoZSBjbG9zZXN0IG9uZSB0byB5b3Ugb3IgY29tZSB0byBhbGwgb3VyIGV2ZW50cyFcIjtcclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRNZWV0dXBUb1R3aXRjaChtZWV0dXApIHtcclxuICBjb25zdCBtZWV0dXBMaXN0ID0gbWVldHVwLm1hcCgoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGNpdHkgPSBldmVudC5ncm91cC5sb2NhbGl6ZWRfbG9jYXRpb24uc3BsaXQoJywnKVswXTtcclxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG1vbWVudFxyXG4gICAgICAudXRjKGV2ZW50LnRpbWUpXHJcbiAgICAgIC51dGNPZmZzZXQoZXZlbnQudXRjX29mZnNldCAvIDM2MDAwMDApXHJcbiAgICAgIC5mb3JtYXQoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNoYXB0ZXI6IHtcclxuICAgICAgICBjaXR5LFxyXG4gICAgICB9LFxyXG4gICAgICB1cmw6IGV2ZW50LmxpbmssXHJcbiAgICAgIHN0YXJ0X2RhdGU6IHN0YXJ0RGF0ZSxcclxuICAgICAgdGl0bGU6IGV2ZW50Lm5hbWUsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWVldHVwTGlzdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXBjb21pbmdUd2l0Y2hFdmVudHMoKSB7XHJcbiAgY29uc3QgY2FjaGVCdXN0ZXIgPSBgJiR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YDtcclxuICBjb25zdCB0d2l0Y2hSZXEgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL21lZXR1cHMudHdpdGNoLnR2L2FwaS9zZWFyY2gvP3Jlc3VsdF90eXBlcz11cGNvbWluZ19ldmVudCZjb3VudHJ5X2NvZGU9RWFydGgke2NhY2hlQnVzdGVyfWBcclxuICApLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHR3aXRjaEpzb24gPSBhd2FpdCB0d2l0Y2hSZXEuanNvbigpO1xyXG5cclxuICBpZiAodHdpdGNoSnNvbikge1xyXG4gICAgcmV0dXJuIHR3aXRjaEpzb24ucmVzdWx0cztcclxuICB9XHJcblxyXG4gIHJldHVybiBbXTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXBjb21pbmdNZWV0dXBFdmVudHMoKSB7XHJcbiAgY29uc3QgY2FjaGVCdXN0ZXIgPSBgJiR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YDtcclxuICAvLyBUT0RPIHJlbW92ZSBoYXJkY29kZWQgZ3JvdXAgbmFtZSwgZHluYW1pY2FsbHkgZ2V0IGZyb20gZGF0YS5qc29uXHJcbiAgbGV0IG1lZXR1cFVybCA9IGBodHRwczovL2FwaS5tZWV0dXAuY29tL29jc3RyZWFtZXJzL2V2ZW50cz8mc2lnbj10cnVlJnBob3RvLWhvc3Q9c2VjdXJlJnBhZ2U9NSZoYXNfZW5kZWQ9ZmFsc2Uke2NhY2hlQnVzdGVyfWA7XHJcbiAgaWYgKHByb2Nlc3MuZW52LkVOViAhPT0gJ2RldmVsb3BtZW50JylcclxuICAgIG1lZXR1cFVybCA9IGBodHRwczovL2x5bTIwbmhiOGouZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vZGV2P3VybD0ke21lZXR1cFVybH1gO1xyXG4gIGNvbnN0IG1lZXR1cENvbVJlcSA9IGF3YWl0IGZldGNoKG1lZXR1cFVybCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG1lZXR1cENvbVJlcSkge1xyXG4gICAgY29uc3QgbWVldHVwQ29tSnNvbiA9IGF3YWl0IG1lZXR1cENvbVJlcS5qc29uKCk7XHJcbiAgICByZXR1cm4gY29udmVydE1lZXR1cFRvVHdpdGNoKG1lZXR1cENvbUpzb24pO1xyXG4gIH1cclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKSk7XHJcblxyXG4gIHJldHVybiBbXTtcclxufVxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXBjb21pbmdUd2l0Y2hFdmVudHMsIHNldFR3aXRjaEV2ZW50c10gPSB1c2VTdGF0ZSh7XHJcbiAgICBldmVudHM6IFtdLFxyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCBbdXBjb21pbmdNZWV0dXBFdmVudHMsIHNldE1lZXR1cEV2ZW50c10gPSB1c2VTdGF0ZSh7XHJcbiAgICBldmVudHM6IFtdLFxyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0d2l0Y2hFdmVudHMnKSB8fCAne30nKTtcclxuICAgIGlmIChjYWNoZWREYXRhPy51cGRhdGVkQXQpIHtcclxuICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgaWYgKG5ldyBEYXRlKGNhY2hlZERhdGEudXBkYXRlZEF0KSA+IGZpdmVNaW5zQWdvKSB7XHJcbiAgICAgICAgc2V0VHdpdGNoRXZlbnRzKHsgZXZlbnRzOiBjYWNoZWREYXRhLmV2ZW50cywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRVcGNvbWluZ1R3aXRjaEV2ZW50cygpLnRoZW4oKHR3aXRjaEV2ZW50cykgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAndHdpdGNoRXZlbnRzJyxcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBldmVudHM6IHR3aXRjaEV2ZW50cyxcclxuICAgICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBzZXRUd2l0Y2hFdmVudHMoeyBldmVudHM6IHR3aXRjaEV2ZW50cywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYWNoZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHdpdGNoRXZlbnRzJykgfHwgJ3t9Jyk7XHJcbiAgICBpZiAoY2FjaGVkRGF0YT8udXBkYXRlZEF0KSB7XHJcbiAgICAgIGNvbnN0IGZpdmVNaW5zQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDUgKiA2MDAwMCk7XHJcbiAgICAgIGlmIChuZXcgRGF0ZShjYWNoZWREYXRhLnVwZGF0ZWRBdCkgPiBmaXZlTWluc0Fnbykge1xyXG4gICAgICAgIHNldE1lZXR1cEV2ZW50cyh7IGV2ZW50czogY2FjaGVkRGF0YS5ldmVudHMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVwY29taW5nTWVldHVwRXZlbnRzKCkudGhlbigobWVldHVwRXZlbnRzKSA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICdtZWV0dXBFdmVudHMnLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGV2ZW50czogbWVldHVwRXZlbnRzLFxyXG4gICAgICAgICAgdXBkYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHNldE1lZXR1cEV2ZW50cyh7IGV2ZW50czogbWVldHVwRXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmluZE5leHRFdmVudCA9IChncm91cHMsIHVwY29taW5nRXZlbnRzKSA9PiB7XHJcbiAgICByZXR1cm4gZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcclxuICAgICAgY29uc3QgbmV4dEV2ZW50ID0gdXBjb21pbmdFdmVudHMuZmluZCgoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuY2hhcHRlci5jaXR5ID09PSBncm91cC5jaXR5KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmdyb3VwLFxyXG4gICAgICAgIG5leHRFdmVudDogbmV4dEV2ZW50IHx8IHt9LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cGNvbWluZ0V2ZW50cyA9IHVwY29taW5nVHdpdGNoRXZlbnRzLmV2ZW50cy5jb25jYXQoXHJcbiAgICAgIHVwY29taW5nTWVldHVwRXZlbnRzLmV2ZW50c1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPVxyXG4gICAgICB1cGNvbWluZ1R3aXRjaEV2ZW50cy5sb2FkaW5nIHx8IHVwY29taW5nTWVldHVwRXZlbnRzLmxvYWRpbmc7XHJcbiAgICBjb25zdCBncm91cHNXaXRoRXZlbnRzID0gZmluZE5leHRFdmVudChkYXRhLmdyb3VwcywgdXBjb21pbmdFdmVudHMpLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhLm5leHRFdmVudC5zdGFydF9kYXRlKSByZXR1cm4gMTtcclxuICAgICAgICBpZiAoIWIubmV4dEV2ZW50LnN0YXJ0X2RhdGUpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgbmV3IERhdGUoYS5uZXh0RXZlbnQuc3RhcnRfZGF0ZSkgLSBuZXcgRGF0ZShiLm5leHRFdmVudC5zdGFydF9kYXRlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gZ3JvdXBzV2l0aEV2ZW50cy5tYXAoKGdyb3VwV2l0aEV2ZW50LCBpKSA9PiAoXHJcbiAgICAgIDxHcm91cENhcmRcclxuICAgICAgICBrZXk9e2dyb3VwV2l0aEV2ZW50Lm5hbWV9XHJcbiAgICAgICAgZ3JvdXA9e2dyb3VwV2l0aEV2ZW50fVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgdG90YWxDYXJkcz17Z3JvdXBzV2l0aEV2ZW50cy5sZW5ndGh9XHJcbiAgICAgICAgcG9zaXRpb249e2kgKyAxfVxyXG4gICAgICAvPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2x5bTIwbmhiOGouZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL21lZXR1cHMudHdpdGNoLnR2XCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57c2l0ZVRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPntyZW5kZXJDYXJkcygpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLbmV3YXZlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBjb2xvcndpcGUgNnMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDQwZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAyNSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxMzEsIDU4LCAxODAsIDEpIDMwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1MywgMjksIDI5LCAxKSA1NSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTIsIDE3NiwgNjksIDEpIDcwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDc1JSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNDAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSxcclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjVweCBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGNvbG9yd2lwZSB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\index.jsx */"));
};

_s(Home, "uAzSvysfHVz0TLzQiWY9k07bqbQ=");

_c = Home;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwic2l0ZVRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb252ZXJ0TWVldHVwVG9Ud2l0Y2giLCJtZWV0dXAiLCJtZWV0dXBMaXN0IiwibWFwIiwiZXZlbnQiLCJjaXR5IiwiZ3JvdXAiLCJsb2NhbGl6ZWRfbG9jYXRpb24iLCJzcGxpdCIsInN0YXJ0RGF0ZSIsIm1vbWVudCIsInV0YyIsInRpbWUiLCJ1dGNPZmZzZXQiLCJ1dGNfb2Zmc2V0IiwiZm9ybWF0IiwiY2hhcHRlciIsInVybCIsImxpbmsiLCJzdGFydF9kYXRlIiwidGl0bGUiLCJuYW1lIiwiZ2V0VXBjb21pbmdUd2l0Y2hFdmVudHMiLCJjYWNoZUJ1c3RlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImZldGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInR3aXRjaFJlcSIsImpzb24iLCJ0d2l0Y2hKc29uIiwicmVzdWx0cyIsImdldFVwY29taW5nTWVldHVwRXZlbnRzIiwibWVldHVwVXJsIiwicHJvY2VzcyIsIm1lZXR1cENvbVJlcSIsIm1lZXR1cENvbUpzb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJIb21lIiwidXNlU3RhdGUiLCJldmVudHMiLCJsb2FkaW5nIiwidXBjb21pbmdUd2l0Y2hFdmVudHMiLCJzZXRUd2l0Y2hFdmVudHMiLCJ1cGNvbWluZ01lZXR1cEV2ZW50cyIsInNldE1lZXR1cEV2ZW50cyIsInVzZUVmZmVjdCIsImNhY2hlZERhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXBkYXRlZEF0IiwiZml2ZU1pbnNBZ28iLCJEYXRlIiwibm93IiwidGhlbiIsInR3aXRjaEV2ZW50cyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJtZWV0dXBFdmVudHMiLCJmaW5kTmV4dEV2ZW50IiwiZ3JvdXBzIiwidXBjb21pbmdFdmVudHMiLCJuZXh0RXZlbnQiLCJmaW5kIiwicmVuZGVyQ2FyZHMiLCJjb25jYXQiLCJncm91cHNXaXRoRXZlbnRzIiwic29ydCIsImEiLCJiIiwiZ3JvdXBXaXRoRXZlbnQiLCJpIiwibGVuZ3RoIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHNDQUFELENBQXBCOztBQUVBLElBQU1DLFNBQVMsR0FBRyx1QkFBbEI7QUFDQSxJQUFNQyxXQUFXLEdBQ2YsK0lBREY7O0FBR0EsU0FBU0MscUJBQVQsQ0FBK0JDLE1BQS9CLEVBQXVDO0FBQ3JDLE1BQU1DLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZDLFFBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGtCQUFaLENBQStCQyxLQUEvQixDQUFxQyxHQUFyQyxFQUEwQyxDQUExQyxDQUFiO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyw2Q0FBTSxDQUNyQkMsR0FEZSxDQUNYUCxLQUFLLENBQUNRLElBREssRUFFZkMsU0FGZSxDQUVMVCxLQUFLLENBQUNVLFVBQU4sR0FBbUIsT0FGZCxFQUdmQyxNQUhlLEVBQWxCO0FBSUEsV0FBTztBQUNMQyxhQUFPLEVBQUU7QUFDUFgsWUFBSSxFQUFKQTtBQURPLE9BREo7QUFJTFksU0FBRyxFQUFFYixLQUFLLENBQUNjLElBSk47QUFLTEMsZ0JBQVUsRUFBRVYsU0FMUDtBQU1MVyxXQUFLLEVBQUVoQixLQUFLLENBQUNpQjtBQU5SLEtBQVA7QUFRRCxHQWRrQixDQUFuQjtBQWdCQSxTQUFPbkIsVUFBUDtBQUNEOztTQUVjb0IsdUI7Ozs7OzhNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyx1QkFEUixjQUMwQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FB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QUE7QUFBQSxLQUFzQndFLFdBQVcsRUFBakMsQ0FSRixDQVJGO0FBQUE7QUFBQTtBQUFBLGk0WkFERjtBQTRGRCxDQXhMRDs7R0FBTTVCLEk7O0tBQUFBLEk7QUEwTFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5ZDRiNzYxYjYxOTM2NmNkZDA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEdyb3VwQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL29yZ2FuaXNtcy9ncm91cC1jYXJkJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3Qgc2l0ZVRpdGxlID0gJ0NhbGkgQ3JlYXRvcnMgTWVldFVwcyc7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID1cclxuICBcIldlJ3JlIHRoZSBtZWV0dXAgZ3JvdXBzIGZvciBUd2l0Y2gsIEZhY2Vib29rLCBzdHJlYW1lcnMsIGFuZCBnYW1lcnMgaW4gQ2FsaWZvcm5pYSE8YnIvPkZpbmQgdGhlIGNsb3Nlc3Qgb25lIHRvIHlvdSBvciBjb21lIHRvIGFsbCBvdXIgZXZlbnRzIVwiO1xyXG5cclxuZnVuY3Rpb24gY29udmVydE1lZXR1cFRvVHdpdGNoKG1lZXR1cCkge1xyXG4gIGNvbnN0IG1lZXR1cExpc3QgPSBtZWV0dXAubWFwKChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgY2l0eSA9IGV2ZW50Lmdyb3VwLmxvY2FsaXplZF9sb2NhdGlvbi5zcGxpdCgnLCcpWzBdO1xyXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbW9tZW50XHJcbiAgICAgIC51dGMoZXZlbnQudGltZSlcclxuICAgICAgLnV0Y09mZnNldChldmVudC51dGNfb2Zmc2V0IC8gMzYwMDAwMClcclxuICAgICAgLmZvcm1hdCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hhcHRlcjoge1xyXG4gICAgICAgIGNpdHksXHJcbiAgICAgIH0sXHJcbiAgICAgIHVybDogZXZlbnQubGluayxcclxuICAgICAgc3RhcnRfZGF0ZTogc3RhcnREYXRlLFxyXG4gICAgICB0aXRsZTogZXZlbnQubmFtZSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtZWV0dXBMaXN0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVcGNvbWluZ1R3aXRjaEV2ZW50cygpIHtcclxuICBjb25zdCBjYWNoZUJ1c3RlciA9IGAmJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1gO1xyXG4gIGNvbnN0IHR3aXRjaFJlcSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHYvYXBpL3NlYXJjaC8/cmVzdWx0X3R5cGVzPXVwY29taW5nX2V2ZW50JmNvdW50cnlfY29kZT1FYXJ0aCR7Y2FjaGVCdXN0ZXJ9YFxyXG4gICkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdHdpdGNoSnNvbiA9IGF3YWl0IHR3aXRjaFJlcS5qc29uKCk7XHJcblxyXG4gIGlmICh0d2l0Y2hKc29uKSB7XHJcbiAgICByZXR1cm4gdHdpdGNoSnNvbi5yZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVcGNvbWluZ01lZXR1cEV2ZW50cygpIHtcclxuICBjb25zdCBjYWNoZUJ1c3RlciA9IGAmJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1gO1xyXG4gIC8vIFRPRE8gcmVtb3ZlIGhhcmRjb2RlZCBncm91cCBuYW1lLCBkeW5hbWljYWxseSBnZXQgZnJvbSBkYXRhLmpzb25cclxuICBsZXQgbWVldHVwVXJsID0gYGh0dHBzOi8vYXBpLm1lZXR1cC5jb20vb2NzdHJlYW1lcnMvZXZlbnRzPyZzaWduPXRydWUmcGhvdG8taG9zdD1zZWN1cmUmcGFnZT01Jmhhc19lbmRlZD1mYWxzZSR7Y2FjaGVCdXN0ZXJ9YDtcclxuICBpZiAocHJvY2Vzcy5lbnYuRU5WICE9PSAnZGV2ZWxvcG1lbnQnKVxyXG4gICAgbWVldHVwVXJsID0gYGh0dHBzOi8vbHltMjBuaGI4ai5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9kZXY/dXJsPSR7bWVldHVwVXJsfWA7XHJcbiAgY29uc3QgbWVldHVwQ29tUmVxID0gYXdhaXQgZmV0Y2gobWVldHVwVXJsKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAobWVldHVwQ29tUmVxKSB7XHJcbiAgICBjb25zdCBtZWV0dXBDb21Kc29uID0gYXdhaXQgbWVldHVwQ29tUmVxLmpzb24oKTtcclxuICAgIHJldHVybiBjb252ZXJ0TWVldHVwVG9Ud2l0Y2gobWVldHVwQ29tSnNvbik7XHJcbiAgfVxyXG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMDApKTtcclxuXHJcbiAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1cGNvbWluZ1R3aXRjaEV2ZW50cywgc2V0VHdpdGNoRXZlbnRzXSA9IHVzZVN0YXRlKHtcclxuICAgIGV2ZW50czogW10sXHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFt1cGNvbWluZ01lZXR1cEV2ZW50cywgc2V0TWVldHVwRXZlbnRzXSA9IHVzZVN0YXRlKHtcclxuICAgIGV2ZW50czogW10sXHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY2FjaGVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3R3aXRjaEV2ZW50cycpIHx8ICd7fScpO1xyXG4gICAgaWYgKGNhY2hlZERhdGE/LnVwZGF0ZWRBdCkge1xyXG4gICAgICBjb25zdCBmaXZlTWluc0FnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA1ICogNjAwMDApO1xyXG4gICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICBzZXRUd2l0Y2hFdmVudHMoeyBldmVudHM6IGNhY2hlZERhdGEuZXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFVwY29taW5nVHdpdGNoRXZlbnRzKCkudGhlbigodHdpdGNoRXZlbnRzKSA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICd0d2l0Y2hFdmVudHMnLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGV2ZW50czogdHdpdGNoRXZlbnRzLFxyXG4gICAgICAgICAgdXBkYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFR3aXRjaEV2ZW50cyh7IGV2ZW50czogdHdpdGNoRXZlbnRzLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0d2l0Y2hFdmVudHMnKSB8fCAne30nKTtcclxuICAgIGlmIChjYWNoZWREYXRhPy51cGRhdGVkQXQpIHtcclxuICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgaWYgKG5ldyBEYXRlKGNhY2hlZERhdGEudXBkYXRlZEF0KSA+IGZpdmVNaW5zQWdvKSB7XHJcbiAgICAgICAgc2V0TWVldHVwRXZlbnRzKHsgZXZlbnRzOiBjYWNoZWREYXRhLmV2ZW50cywgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBjb21pbmdNZWV0dXBFdmVudHMoKS50aGVuKChtZWV0dXBFdmVudHMpID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgJ21lZXR1cEV2ZW50cycsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZXZlbnRzOiBtZWV0dXBFdmVudHMsXHJcbiAgICAgICAgICB1cGRhdGVkQXQ6IERhdGUubm93KCksXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgc2V0TWVldHVwRXZlbnRzKHsgZXZlbnRzOiBtZWV0dXBFdmVudHMsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmaW5kTmV4dEV2ZW50ID0gKGdyb3VwcywgdXBjb21pbmdFdmVudHMpID0+IHtcclxuICAgIHJldHVybiBncm91cHMubWFwKChncm91cCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXh0RXZlbnQgPSB1cGNvbWluZ0V2ZW50cy5maW5kKChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5jaGFwdGVyLmNpdHkgPT09IGdyb3VwLmNpdHkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZ3JvdXAsXHJcbiAgICAgICAgbmV4dEV2ZW50OiBuZXh0RXZlbnQgfHwge30sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVwY29taW5nRXZlbnRzID0gdXBjb21pbmdUd2l0Y2hFdmVudHMuZXZlbnRzLmNvbmNhdChcclxuICAgICAgdXBjb21pbmdNZWV0dXBFdmVudHMuZXZlbnRzXHJcbiAgICApO1xyXG4gICAgY29uc3QgbG9hZGluZyA9XHJcbiAgICAgIHVwY29taW5nVHdpdGNoRXZlbnRzLmxvYWRpbmcgfHwgdXBjb21pbmdNZWV0dXBFdmVudHMubG9hZGluZztcclxuICAgIGNvbnN0IGdyb3Vwc1dpdGhFdmVudHMgPSBmaW5kTmV4dEV2ZW50KGRhdGEuZ3JvdXBzLCB1cGNvbWluZ0V2ZW50cykuc29ydChcclxuICAgICAgKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoIWEubmV4dEV2ZW50LnN0YXJ0X2RhdGUpIHJldHVybiAxO1xyXG4gICAgICAgIGlmICghYi5uZXh0RXZlbnQuc3RhcnRfZGF0ZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBuZXcgRGF0ZShhLm5leHRFdmVudC5zdGFydF9kYXRlKSAtIG5ldyBEYXRlKGIubmV4dEV2ZW50LnN0YXJ0X2RhdGUpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBncm91cHNXaXRoRXZlbnRzLm1hcCgoZ3JvdXBXaXRoRXZlbnQsIGkpID0+IChcclxuICAgICAgPEdyb3VwQ2FyZFxyXG4gICAgICAgIGtleT17Z3JvdXBXaXRoRXZlbnQubmFtZX1cclxuICAgICAgICBncm91cD17Z3JvdXBXaXRoRXZlbnR9XHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICB0b3RhbENhcmRzPXtncm91cHNXaXRoRXZlbnRzLmxlbmd0aH1cclxuICAgICAgICBwb3NpdGlvbj17aSArIDF9XHJcbiAgICAgIC8+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbHltMjBuaGI4ai5leGVjdXRlLWFwaS51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vbWVldHVwcy50d2l0Y2gudHZcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntzaXRlVGl0bGV9PC9oMT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3JlbmRlckNhcmRzKCl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaGVybyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0tuZXdhdmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGNvbG9yd2lwZSA2cyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgNDBkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDI1JSxcclxuICAgICAgICAgICAgICByZ2JhKDEzMSwgNTgsIDE4MCwgMSkgMzAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjUzLCAyOSwgMjksIDEpIDU1JSxcclxuICAgICAgICAgICAgICByZ2JhKDI1MiwgMTc2LCA2OSwgMSkgNzAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNzUlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlLFxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2NXB4IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBrZXlmcmFtZXMgY29sb3J3aXBlIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
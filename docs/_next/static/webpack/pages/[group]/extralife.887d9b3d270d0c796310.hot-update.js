webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./pages/[group]/extralife.jsx":
/*!*************************************!*\
  !*** ./pages/[group]/extralife.jsx ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/molecules/team-member-cards */ "./components/molecules/team-member-cards.jsx");
/* harmony import */ var _components_atoms_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/atoms/header */ "./components/atoms/header.jsx");
/* harmony import */ var _components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/atoms/loading-icon */ "./components/atoms/loading-icon.jsx");
/* harmony import */ var _components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/atoms/progress-bar */ "./components/atoms/progress-bar.jsx");
/* harmony import */ var _components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/organisms/streamer-schedule */ "./components/organisms/streamer-schedule.jsx");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/utils */ "./src/utils.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\pages\\[group]\\extralife.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable jsx-a11y/anchor-is-valid */












var data = __webpack_require__(/*! ./data.json */ "./pages/[group]/data.json");

var EXTRA_LIFE_ORG = 'https://www.extra-life.org';
var API_BASE = "".concat(EXTRA_LIFE_ORG, "/api");

function sortSchedule(schedule) {
  return schedule.filter(function (stream) {
    return new Date() < new Date(stream.timeEnd);
  }).sort(function (a, b) {
    return new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime();
  });
}

function getScheduleTimeRange(schedule) {
  var start = new Date(schedule[0].timeStart);
  var end = new Date(schedule[schedule.length - 1].timeEnd);
  return {
    start: start,
    end: end
  };
}

function sortParticipants(participants) {
  return participants.sort(function (a, b) {
    if (a.streamIsLive && !b.streamIsLive) return -1;
    if (b.streamIsLive && !a.streamIsLive) return 1;
    var donationsDiff = b.sumDonations - a.sumDonations;
    if (donationsDiff === 0) return a.displayName.localeCompare(b.displayName);
    return donationsDiff;
  }).map(function (member) {
    var _member$links;

    var newMember = _objectSpread(_objectSpread({}, member), {}, {
      avatarImageURL: "https:".concat(member.avatarImageURL)
    });

    if (member === null || member === void 0 ? void 0 : (_member$links = member.links) === null || _member$links === void 0 ? void 0 : _member$links.stream) {
      var stream = member.links.stream;
      var regex = stream.match(/channel=(.*)/);

      if (regex === null || regex === void 0 ? void 0 : regex[1]) {
        newMember = _objectSpread(_objectSpread({}, newMember), {}, {
          twitchUsername: regex[1]
        });
        return newMember;
      }
    }

    return newMember;
  });
}

var ExtraLifeTeam = function ExtraLifeTeam(_ref) {
  _s();

  var _groupData$schedule;

  var name = _ref.name;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var group = router.query.group;
  var groupData = data[group];
  var schedule = (groupData === null || groupData === void 0 ? void 0 : (_groupData$schedule = groupData.schedule) === null || _groupData$schedule === void 0 ? void 0 : _groupData$schedule.length) ? sortSchedule(groupData.schedule) : [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: name
  }),
      team = _useState[0],
      setTeam = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function fetchTeam() {
      return _fetchTeam.apply(this, arguments);
    }

    function _fetchTeam() {
      _fetchTeam = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, fetchedTeam;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(API_BASE, "/teams/").concat(groupData.id));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                fetchedTeam = _context.sent;
                return _context.abrupt("return", fetchedTeam);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchTeam.apply(this, arguments);
    }

    function fetchTeamMembers() {
      return _fetchTeamMembers.apply(this, arguments);
    }

    function _fetchTeamMembers() {
      _fetchTeamMembers = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, fetchedTeamMembers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("".concat(API_BASE, "/teams/").concat(groupData.id, "/participants"));

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.json();

              case 5:
                fetchedTeamMembers = _context2.sent;
                return _context2.abrupt("return", fetchedTeamMembers);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _fetchTeamMembers.apply(this, arguments);
    }

    function getData() {
      return _getData.apply(this, arguments);
    }

    function _getData() {
      _getData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var storageKey, cachedData, fiveMinsAgo, results, participants, newTeam, teamStorage;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                storageKey = "".concat(group, "-extralife");
                cachedData = JSON.parse(localStorage.getItem(storageKey) || '{}');

                if (!(cachedData === null || cachedData === void 0 ? void 0 : cachedData.updatedAt)) {
                  _context3.next = 7;
                  break;
                }

                fiveMinsAgo = new Date(Date.now() - 5 * 60000);

                if (!(new Date(cachedData.updatedAt) > fiveMinsAgo)) {
                  _context3.next = 7;
                  break;
                }

                setTeam(cachedData.team);
                return _context3.abrupt("return");

              case 7:
                _context3.next = 9;
                return Promise.all([fetchTeam(), fetchTeamMembers()]);

              case 9:
                results = _context3.sent;
                participants = sortParticipants(results[1]);
                newTeam = _objectSpread(_objectSpread({}, results[0]), {}, {
                  participants: participants
                });
                teamStorage = {
                  team: newTeam,
                  updatedAt: Date.now()
                };
                localStorage.setItem(storageKey, JSON.stringify(teamStorage));
                setTeam(newTeam);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _getData.apply(this, arguments);
    }

    if (groupData === null || groupData === void 0 ? void 0 : groupData.id) getData();
  }, [group, groupData]);
  console.log('asdasdasdasd', name);
  var siteTitle = "".concat(team.name, " Extra Life Team | Cali Creators");
  var description = "".concat(team.name, " Extra Life Team Page. We're raising money to help our local children's hospital!");
  var url = 'https://calicreators.com';
  var pageUrl = "".concat(url).concat(router.asPath);

  var head = __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("title", {
    key: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, siteTitle), __jsx("meta", {
    property: "og:title",
    key: "og:title",
    content: siteTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:description",
    key: "og:description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "Description",
    key: "description",
    content: "".concat(team.name, " ").concat(description),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:url",
    key: "og:url",
    content: pageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    key: "og:image",
    content: "".concat(url, "/extralife-icon.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:width",
    key: "og:image:width",
    content: "254",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image:height",
    key: "og:image:height",
    content: "213",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "preconnect",
    href: EXTRA_LIFE_ORG,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }));

  var pageContents = __jsx("div", {
    className: "jsx-3839373705",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, __jsx(_components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3839373705",
    __self: _this
  }, ".jsx-3839373705{display:grid;place-items:center;font-size:10rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0pTLEFBRXdCLGFBQ00sbUJBQ0gsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBUZWFtTWVtYmVyQ2FyZHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvdGVhbS1tZW1iZXItY2FyZHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvaGVhZGVyJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvbG9hZGluZy1pY29uJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IFN0cmVhbWVyU2NoZWR1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUnO1xyXG5pbXBvcnQgY2hlY2tJZkV2ZW50SXNMaXZlIGZyb20gJy4uLy4uL3NyYy91dGlscyc7XHJcblxyXG5jb25zdCBkYXRhID0gcmVxdWlyZSgnLi9kYXRhLmpzb24nKTtcclxuXHJcbmNvbnN0IEVYVFJBX0xJRkVfT1JHID0gJ2h0dHBzOi8vd3d3LmV4dHJhLWxpZmUub3JnJztcclxuY29uc3QgQVBJX0JBU0UgPSBgJHtFWFRSQV9MSUZFX09SR30vYXBpYDtcclxuXHJcbmZ1bmN0aW9uIHNvcnRTY2hlZHVsZShzY2hlZHVsZSkge1xyXG4gIHJldHVybiBzY2hlZHVsZVxyXG4gICAgLmZpbHRlcigoc3RyZWFtKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpIDwgbmV3IERhdGUoc3RyZWFtLnRpbWVFbmQpO1xyXG4gICAgfSlcclxuICAgIC5zb3J0KFxyXG4gICAgICAoYSwgYikgPT5cclxuICAgICAgICBuZXcgRGF0ZShhLnRpbWVTdGFydCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi50aW1lU3RhcnQpLmdldFRpbWUoKVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2NoZWR1bGVUaW1lUmFuZ2Uoc2NoZWR1bGUpIHtcclxuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHNjaGVkdWxlWzBdLnRpbWVTdGFydCk7XHJcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoc2NoZWR1bGVbc2NoZWR1bGUubGVuZ3RoIC0gMV0udGltZUVuZCk7XHJcbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0UGFydGljaXBhbnRzKHBhcnRpY2lwYW50cykge1xyXG4gIHJldHVybiBwYXJ0aWNpcGFudHNcclxuICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGlmIChhLnN0cmVhbUlzTGl2ZSAmJiAhYi5zdHJlYW1Jc0xpdmUpIHJldHVybiAtMTtcclxuICAgICAgaWYgKGIuc3RyZWFtSXNMaXZlICYmICFhLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIDE7XHJcbiAgICAgIGNvbnN0IGRvbmF0aW9uc0RpZmYgPSBiLnN1bURvbmF0aW9ucyAtIGEuc3VtRG9uYXRpb25zO1xyXG4gICAgICBpZiAoZG9uYXRpb25zRGlmZiA9PT0gMClcclxuICAgICAgICByZXR1cm4gYS5kaXNwbGF5TmFtZS5sb2NhbGVDb21wYXJlKGIuZGlzcGxheU5hbWUpO1xyXG4gICAgICByZXR1cm4gZG9uYXRpb25zRGlmZjtcclxuICAgIH0pXHJcbiAgICAubWFwKChtZW1iZXIpID0+IHtcclxuICAgICAgbGV0IG5ld01lbWJlciA9IHtcclxuICAgICAgICAuLi5tZW1iZXIsXHJcbiAgICAgICAgYXZhdGFySW1hZ2VVUkw6IGBodHRwczoke21lbWJlci5hdmF0YXJJbWFnZVVSTH1gLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAobWVtYmVyPy5saW5rcz8uc3RyZWFtKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdHJlYW0gfSA9IG1lbWJlci5saW5rcztcclxuICAgICAgICBjb25zdCByZWdleCA9IHN0cmVhbS5tYXRjaCgvY2hhbm5lbD0oLiopLyk7XHJcbiAgICAgICAgaWYgKHJlZ2V4Py5bMV0pIHtcclxuICAgICAgICAgIG5ld01lbWJlciA9IHsgLi4ubmV3TWVtYmVyLCB0d2l0Y2hVc2VybmFtZTogcmVnZXhbMV0gfTtcclxuICAgICAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgRXh0cmFMaWZlVGVhbSA9ICh7IG5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZ3JvdXAgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBncm91cERhdGEgPSBkYXRhW2dyb3VwXTtcclxuICBjb25zdCBzY2hlZHVsZSA9IGdyb3VwRGF0YT8uc2NoZWR1bGU/Lmxlbmd0aFxyXG4gICAgPyBzb3J0U2NoZWR1bGUoZ3JvdXBEYXRhLnNjaGVkdWxlKVxyXG4gICAgOiBbXTtcclxuICBjb25zdCBbdGVhbSwgc2V0VGVhbV0gPSB1c2VTdGF0ZSh7IG5hbWUgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlYW0oKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH1gKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gZmV0Y2hlZFRlYW07XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlYW1NZW1iZXJzKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9L3BhcnRpY2lwYW50c2ApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbU1lbWJlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gZmV0Y2hlZFRlYW1NZW1iZXJzO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgY29uc3Qgc3RvcmFnZUtleSA9IGAke2dyb3VwfS1leHRyYWxpZmVgO1xyXG4gICAgICBjb25zdCBjYWNoZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KSB8fCAne30nKTtcclxuICAgICAgaWYgKGNhY2hlZERhdGE/LnVwZGF0ZWRBdCkge1xyXG4gICAgICAgIGNvbnN0IGZpdmVNaW5zQWdvID0gbmV3IERhdGUoRGF0ZS5ub3coKSAtIDUgKiA2MDAwMCk7XHJcbiAgICAgICAgaWYgKG5ldyBEYXRlKGNhY2hlZERhdGEudXBkYXRlZEF0KSA+IGZpdmVNaW5zQWdvKSB7XHJcbiAgICAgICAgICBzZXRUZWFtKGNhY2hlZERhdGEudGVhbSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hUZWFtKCksIGZldGNoVGVhbU1lbWJlcnMoKV0pO1xyXG4gICAgICBjb25zdCBwYXJ0aWNpcGFudHMgPSBzb3J0UGFydGljaXBhbnRzKHJlc3VsdHNbMV0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3VGVhbSA9IHtcclxuICAgICAgICAuLi5yZXN1bHRzWzBdLFxyXG4gICAgICAgIHBhcnRpY2lwYW50cyxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgdGVhbVN0b3JhZ2UgPSB7XHJcbiAgICAgICAgdGVhbTogbmV3VGVhbSxcclxuICAgICAgICB1cGRhdGVkQXQ6IERhdGUubm93KCksXHJcbiAgICAgIH07XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHRlYW1TdG9yYWdlKSk7XHJcbiAgICAgIHNldFRlYW0obmV3VGVhbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ3JvdXBEYXRhPy5pZCkgZ2V0RGF0YSgpO1xyXG4gIH0sIFtncm91cCwgZ3JvdXBEYXRhXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdhc2Rhc2Rhc2Rhc2QnLCBuYW1lKTtcclxuICBjb25zdCBzaXRlVGl0bGUgPSBgJHt0ZWFtLm5hbWV9IEV4dHJhIExpZmUgVGVhbSB8IENhbGkgQ3JlYXRvcnNgO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYCR7dGVhbS5uYW1lfSBFeHRyYSBMaWZlIFRlYW0gUGFnZS4gV2UncmUgcmFpc2luZyBtb25leSB0byBoZWxwIG91ciBsb2NhbCBjaGlsZHJlbidzIGhvc3BpdGFsIWA7XHJcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vY2FsaWNyZWF0b3JzLmNvbSc7XHJcbiAgY29uc3QgcGFnZVVybCA9IGAke3VybH0ke3JvdXRlci5hc1BhdGh9YDtcclxuICBjb25zdCBoZWFkID0gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZSBrZXk9XCJ0aXRsZVwiPntzaXRlVGl0bGV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGtleT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGtleT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjb250ZW50PXtkZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGtleT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjb250ZW50PXtgJHt0ZWFtLm5hbWV9ICR7ZGVzY3JpcHRpb259YH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBrZXk9XCJvZzp1cmxcIiBjb250ZW50PXtwYWdlVXJsfSAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGtleT1cIm9nOmltYWdlXCJcclxuICAgICAgICBjb250ZW50PXtgJHt1cmx9L2V4dHJhbGlmZS1pY29uLnBuZ2B9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBrZXk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIyNTRcIiAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGtleT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCIyMTNcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj17RVhUUkFfTElGRV9PUkd9IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxuXHJcbiAgbGV0IHBhZ2VDb250ZW50cyA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMb2FkaW5nSWNvbiAvPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgbGV0IGlzRXZlbnRMaXZlID0gZmFsc2U7XHJcbiAgaWYgKHNjaGVkdWxlPy5sZW5ndGgpIHtcclxuICAgIGNvbnN0IHNjaGVkdWxlVGltZVJhbmdlID0gZ2V0U2NoZWR1bGVUaW1lUmFuZ2Uoc2NoZWR1bGUpIHx8IHt9O1xyXG4gICAgaXNFdmVudExpdmUgPSBjaGVja0lmRXZlbnRJc0xpdmUoXHJcbiAgICAgIHNjaGVkdWxlVGltZVJhbmdlLnN0YXJ0LFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5lbmRcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmICh0ZWFtPy5wYXJ0aWNpcGFudHMpXHJcbiAgICBwYWdlQ29udGVudHMgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICAgIHByb2dyZXNzPXt0ZWFtLnN1bURvbmF0aW9uc31cclxuICAgICAgICAgIGdvYWw9e3RlYW0uZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgICAgcHJvZ3Jlc3NUZXh0PVwiUmFpc2VkXCJcclxuICAgICAgICAgIGdvYWxUZXh0PVwiR29hbFwiXHJcbiAgICAgICAgICBpc01vbmV5XHJcbiAgICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgICAgICBkaXNwbGF5UHJvZ3Jlc3NcclxuICAgICAgICAvPlxyXG4gICAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoID4gMCAmJiBpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmVhbWVyU2NoZWR1bGUgbGl2ZVwiPlxyXG4gICAgICAgICAgICA8aDI+TGl2ZSBTY2hlZHVsZTwvaDI+XHJcbiAgICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICAgIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtTWVtYmVyc1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj17dGVhbS5saW5rcy5wYWdlfSBjbGFzc05hbWU9XCJ0ZWFtTGlua1wiPlxyXG4gICAgICAgICAgICBKb2luIFRlYW1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxoMj5UZWFtIE1lbWJlcnM8L2gyPlxyXG4gICAgICAgICAgPFRlYW1NZW1iZXJDYXJkcyB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmICFpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmVhbWVyU2NoZWR1bGUgdXBjb21pbmdcIj5cclxuICAgICAgICAgICAgPGgyPlVwY29taW5nIEV2ZW50PC9oMj5cclxuICAgICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2hlYWR9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxIZWFkZXIgdGl0bGU9e3RlYW0ubmFtZSB8fCBuYW1lfSAvPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5FeHRyYSBMaWZlIFRlYW08L2gyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob21lTGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHtwYWdlQ29udGVudHN9XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbWVMaW5rIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2EyYzg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZ3JvdXBzID0ge1xyXG4gICAgb2M6IHsgbmFtZTogJ09DIFN0cmVhbWVycycgfSxcclxuICAgIHNkOiB7IG5hbWU6ICdUd2l0Y2ggU2FuIERpZWdvJyB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi4oZ3JvdXBzW3BhcmFtcy5ncm91cF0gfHwge30pIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));

  var isEventLive = false;

  if (schedule === null || schedule === void 0 ? void 0 : schedule.length) {
    var scheduleTimeRange = getScheduleTimeRange(schedule) || {};
    isEventLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_14__["default"])(scheduleTimeRange.start, scheduleTimeRange.end);
  }

  if (team === null || team === void 0 ? void 0 : team.participants) pageContents = __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, ' ', __jsx(_components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    progress: team.sumDonations,
    goal: team.fundraisingGoal,
    progressText: "Raised",
    goalText: "Goal",
    isMoney: true,
    width: 80,
    displayProgress: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) > 0 && isEventLive && __jsx("div", {
    className: "streamerSchedule live",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, "Live Schedule"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_13__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "teamMembers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: team.links.page,
    className: "teamLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, "Join Team"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, "Team Members"), __jsx(_components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_9__["default"], {
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  })), (schedule === null || schedule === void 0 ? void 0 : schedule.length) > 0 && !isEventLive && __jsx("div", {
    className: "streamerSchedule upcoming",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, "Upcoming Event"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_13__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  })));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, head, __jsx("div", {
    className: "jsx-1920776943" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx(_components_atoms_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: team.name || name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }), __jsx("h2", {
    className: "jsx-1920776943" + " " + "subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, "Extra Life Team"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-1920776943" + " " + "homeLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, "Home")), pageContents, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1920776943",
    __self: _this
  }, ".page.jsx-1920776943{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.subheader.jsx-1920776943{padding:0;margin:0;}.homeLink.jsx-1920776943{color:#fff;font-size:18px;}.teamLink.jsx-1920776943{color:#fff;padding:15px;border-radius:8px;font-size:24px;background:#26c2eb;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;}.teamLink.jsx-1920776943:hover{background:#13a2c8;}.teamMembers.jsx-1920776943{margin-top:40px;text-align:center;position:relative;}.streamerSchedule.jsx-1920776943{margin-top:40px;width:100%;max-width:800px;}.streamerSchedule.upcoming.jsx-1920776943 h2.jsx-1920776943{margin-left:10%;}@media (max-width:600px){.streamerSchedule.upcoming.jsx-1920776943 h2.jsx-1920776943{text-align:center;margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb05XLEFBR3dCLEFBT0QsQUFJQyxBQUlBLEFBU1EsQUFHSCxBQUtBLEFBS0EsQUFJSSxVQWpDWCxDQVBJLEFBV0UsQUFJRixLQVlLLEFBS1AsQUFLYixFQUlrQixDQWpDbEIsQUFnQkEsS0FSb0IsRUFKcEIsQ0FxQmtCLEtBU2xCLEVBZG9CLFFBWEgsQ0FpQmpCLFNBTEEsS0FYcUIsbUJBQ0UsU0FsQkMseUNBbUJMLGlCQUNuQixvQkFuQnVCLHFCQUNGLDZGQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXHBhZ2VzXFxbZ3JvdXBdXFxleHRyYWxpZmUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckNhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RlYW0tbWVtYmVyLWNhcmRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2hlYWRlcic7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2xvYWRpbmctaWNvbic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBTdHJlYW1lclNjaGVkdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0cmVhbWVyLXNjaGVkdWxlJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBFWFRSQV9MSUZFX09SRyA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZyc7XHJcbmNvbnN0IEFQSV9CQVNFID0gYCR7RVhUUkFfTElGRV9PUkd9L2FwaWA7XHJcblxyXG5mdW5jdGlvbiBzb3J0U2NoZWR1bGUoc2NoZWR1bGUpIHtcclxuICByZXR1cm4gc2NoZWR1bGVcclxuICAgIC5maWx0ZXIoKHN0cmVhbSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoKSA8IG5ldyBEYXRlKHN0cmVhbS50aW1lRW5kKTtcclxuICAgIH0pXHJcbiAgICAuc29ydChcclxuICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgbmV3IERhdGUoYS50aW1lU3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIudGltZVN0YXJ0KS5nZXRUaW1lKClcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzY2hlZHVsZVswXS50aW1lU3RhcnQpO1xyXG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHNjaGVkdWxlW3NjaGVkdWxlLmxlbmd0aCAtIDFdLnRpbWVFbmQpO1xyXG4gIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydFBhcnRpY2lwYW50cyhwYXJ0aWNpcGFudHMpIHtcclxuICByZXR1cm4gcGFydGljaXBhbnRzXHJcbiAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYS5zdHJlYW1Jc0xpdmUgJiYgIWIuc3RyZWFtSXNMaXZlKSByZXR1cm4gLTE7XHJcbiAgICAgIGlmIChiLnN0cmVhbUlzTGl2ZSAmJiAhYS5zdHJlYW1Jc0xpdmUpIHJldHVybiAxO1xyXG4gICAgICBjb25zdCBkb25hdGlvbnNEaWZmID0gYi5zdW1Eb25hdGlvbnMgLSBhLnN1bURvbmF0aW9ucztcclxuICAgICAgaWYgKGRvbmF0aW9uc0RpZmYgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIGEuZGlzcGxheU5hbWUubG9jYWxlQ29tcGFyZShiLmRpc3BsYXlOYW1lKTtcclxuICAgICAgcmV0dXJuIGRvbmF0aW9uc0RpZmY7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgobWVtYmVyKSA9PiB7XHJcbiAgICAgIGxldCBuZXdNZW1iZXIgPSB7XHJcbiAgICAgICAgLi4ubWVtYmVyLFxyXG4gICAgICAgIGF2YXRhckltYWdlVVJMOiBgaHR0cHM6JHttZW1iZXIuYXZhdGFySW1hZ2VVUkx9YCxcclxuICAgICAgfTtcclxuICAgICAgaWYgKG1lbWJlcj8ubGlua3M/LnN0cmVhbSkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RyZWFtIH0gPSBtZW1iZXIubGlua3M7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBzdHJlYW0ubWF0Y2goL2NoYW5uZWw9KC4qKS8pO1xyXG4gICAgICAgIGlmIChyZWdleD8uWzFdKSB7XHJcbiAgICAgICAgICBuZXdNZW1iZXIgPSB7IC4uLm5ld01lbWJlciwgdHdpdGNoVXNlcm5hbWU6IHJlZ2V4WzFdIH07XHJcbiAgICAgICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IEV4dHJhTGlmZVRlYW0gPSAoeyBuYW1lIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdyb3VwIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YVtncm91cF07XHJcbiAgY29uc3Qgc2NoZWR1bGUgPSBncm91cERhdGE/LnNjaGVkdWxlPy5sZW5ndGhcclxuICAgID8gc29ydFNjaGVkdWxlKGdyb3VwRGF0YS5zY2hlZHVsZSlcclxuICAgIDogW107XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoeyBuYW1lIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtTWVtYmVycygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfS9wYXJ0aWNpcGFudHNgKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW1NZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtTWVtYmVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBgJHtncm91cH0tZXh0cmFsaWZlYDtcclxuICAgICAgY29uc3QgY2FjaGVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgfHwgJ3t9Jyk7XHJcbiAgICAgIGlmIChjYWNoZWREYXRhPy51cGRhdGVkQXQpIHtcclxuICAgICAgICBjb25zdCBmaXZlTWluc0FnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA1ICogNjAwMDApO1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZShjYWNoZWREYXRhLnVwZGF0ZWRBdCkgPiBmaXZlTWluc0Fnbykge1xyXG4gICAgICAgICAgc2V0VGVhbShjYWNoZWREYXRhLnRlYW0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoVGVhbSgpLCBmZXRjaFRlYW1NZW1iZXJzKCldKTtcclxuICAgICAgY29uc3QgcGFydGljaXBhbnRzID0gc29ydFBhcnRpY2lwYW50cyhyZXN1bHRzWzFdKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1RlYW0gPSB7XHJcbiAgICAgICAgLi4ucmVzdWx0c1swXSxcclxuICAgICAgICBwYXJ0aWNpcGFudHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHRlYW1TdG9yYWdlID0ge1xyXG4gICAgICAgIHRlYW06IG5ld1RlYW0sXHJcbiAgICAgICAgdXBkYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgICB9O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh0ZWFtU3RvcmFnZSkpO1xyXG4gICAgICBzZXRUZWFtKG5ld1RlYW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwRGF0YT8uaWQpIGdldERhdGEoKTtcclxuICB9LCBbZ3JvdXAsIGdyb3VwRGF0YV0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnYXNkYXNkYXNkYXNkJywgbmFtZSk7XHJcbiAgY29uc3Qgc2l0ZVRpdGxlID0gYCR7dGVhbS5uYW1lfSBFeHRyYSBMaWZlIFRlYW0gfCBDYWxpIENyZWF0b3JzYDtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIFBhZ2UuIFdlJ3JlIHJhaXNpbmcgbW9uZXkgdG8gaGVscCBvdXIgbG9jYWwgY2hpbGRyZW4ncyBob3NwaXRhbCFgO1xyXG4gIGNvbnN0IHVybCA9ICdodHRwczovL2NhbGljcmVhdG9ycy5jb20nO1xyXG4gIGNvbnN0IHBhZ2VVcmwgPSBgJHt1cmx9JHtyb3V0ZXIuYXNQYXRofWA7XHJcbiAgY29uc3QgaGVhZCA9IChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGUga2V5PVwidGl0bGVcIj57c2l0ZVRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBrZXk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICBrZXk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb259XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICBrZXk9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17YCR7dGVhbS5uYW1lfSAke2Rlc2NyaXB0aW9ufWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIga2V5PVwib2c6dXJsXCIgY29udGVudD17cGFnZVVybH0gLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICBrZXk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgY29udGVudD17YCR7dXJsfS9leHRyYWxpZmUtaWNvbi5wbmdgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIga2V5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMjU0XCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBrZXk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMjEzXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9e0VYVFJBX0xJRkVfT1JHfSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcblxyXG4gIGxldCBwYWdlQ29udGVudHMgPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TG9hZGluZ0ljb24gLz5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAodGVhbT8ucGFydGljaXBhbnRzKVxyXG4gICAgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHsnICd9XHJcbiAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICBwcm9ncmVzcz17dGVhbS5zdW1Eb25hdGlvbnN9XHJcbiAgICAgICAgICBnb2FsPXt0ZWFtLmZ1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgIHByb2dyZXNzVGV4dD1cIlJhaXNlZFwiXHJcbiAgICAgICAgICBnb2FsVGV4dD1cIkdvYWxcIlxyXG4gICAgICAgICAgaXNNb25leVxyXG4gICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgZGlzcGxheVByb2dyZXNzXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIGxpdmVcIj5cclxuICAgICAgICAgICAgPGgyPkxpdmUgU2NoZWR1bGU8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbU1lbWJlcnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9e3RlYW0ubGlua3MucGFnZX0gY2xhc3NOYW1lPVwidGVhbUxpbmtcIj5cclxuICAgICAgICAgICAgSm9pbiBUZWFtXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8aDI+VGVhbSBNZW1iZXJzPC9oMj5cclxuICAgICAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoID4gMCAmJiAhaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIHVwY29taW5nXCI+XHJcbiAgICAgICAgICAgIDxoMj5VcGNvbWluZyBFdmVudDwvaDI+XHJcbiAgICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICAgIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWUgfHwgbmFtZX0gLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+RXh0cmEgTGlmZSBUZWFtPC9oMj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZUxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cGFnZUNvbnRlbnRzfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1YmhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob21lTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTNhMmM4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1NZW1iZXJzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlLnVwY29taW5nIGgyIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRyYUxpZmVUZWFtO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW3sgcGFyYW1zOiB7IGdyb3VwOiAnb2MnIH0gfSwgeyBwYXJhbXM6IHsgZ3JvdXA6ICdzZCcgfSB9XSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGdyb3VwcyA9IHtcclxuICAgIG9jOiB7IG5hbWU6ICdPQyBTdHJlYW1lcnMnIH0sXHJcbiAgICBzZDogeyBuYW1lOiAnVHdpdGNoIFNhbiBEaWVnbycgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgLi4uKGdyb3Vwc1twYXJhbXMuZ3JvdXBdIHx8IHt9KSB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */")));
};

_s(ExtraLifeTeam, "unPgApiCFauAta50NpTCMEcb3dw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = ExtraLifeTeam;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ExtraLifeTeam);

var _c;

$RefreshReg$(_c, "ExtraLifeTeam");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwiRVhUUkFfTElGRV9PUkciLCJBUElfQkFTRSIsInNvcnRTY2hlZHVsZSIsInNjaGVkdWxlIiwiZmlsdGVyIiwic3RyZWFtIiwiRGF0ZSIsInRpbWVFbmQiLCJzb3J0IiwiYSIsImIiLCJ0aW1lU3RhcnQiLCJnZXRUaW1lIiwiZ2V0U2NoZWR1bGVUaW1lUmFuZ2UiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsInNvcnRQYXJ0aWNpcGFudHMiLCJwYXJ0aWNpcGFudHMiLCJzdHJlYW1Jc0xpdmUiLCJkb25hdGlvbnNEaWZmIiwic3VtRG9uYXRpb25zIiwiZGlzcGxheU5hbWUiLCJsb2NhbGVDb21wYXJlIiwibWFwIiwibWVtYmVyIiwibmV3TWVtYmVyIiwiYXZhdGFySW1hZ2VVUkwiLCJsaW5rcyIsInJlZ2V4IiwibWF0Y2giLCJ0d2l0Y2hVc2VybmFtZSIsIkV4dHJhTGlmZVRlYW0iLCJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ3JvdXAiLCJxdWVyeSIsImdyb3VwRGF0YSIsInVzZVN0YXRlIiwidGVhbSIsInNldFRlYW0iLCJ1c2VFZmZlY3QiLCJmZXRjaFRlYW0iLCJmZXRjaCIsImlkIiwicmVzIiwianNvbiIsImZldGNoZWRUZWFtIiwiZmV0Y2hUZWFtTWVtYmVycyIsImZldGNoZWRUZWFtTWVtYmVycyIsImdldERhdGEiLCJzdG9yYWdlS2V5IiwiY2FjaGVkRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cGRhdGVkQXQiLCJmaXZlTWluc0FnbyIsIm5vdyIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwibmV3VGVhbSIsInRlYW1TdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJzaXRlVGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsInBhZ2VVcmwiLCJhc1BhdGgiLCJoZWFkIiwicGFnZUNvbnRlbnRzIiwiaXNFdmVudExpdmUiLCJzY2hlZHVsZVRpbWVSYW5nZSIsImNoZWNrSWZFdmVudElzTGl2ZSIsImZ1bmRyYWlzaW5nR29hbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDhDQUFELENBQXBCOztBQUVBLElBQU1DLGNBQWMsR0FBRyw0QkFBdkI7QUFDQSxJQUFNQyxRQUFRLGFBQU1ELGNBQU4sU0FBZDs7QUFFQSxTQUFTRSxZQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUM5QixTQUFPQSxRQUFRLENBQ1pDLE1BREksQ0FDRyxVQUFDQyxNQUFELEVBQVk7QUFDbEIsV0FBTyxJQUFJQyxJQUFKLEtBQWEsSUFBSUEsSUFBSixDQUFTRCxNQUFNLENBQUNFLE9BQWhCLENBQXBCO0FBQ0QsR0FISSxFQUlKQyxJQUpJLENBS0gsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDRSxJQUFJSixJQUFKLENBQVNHLENBQUMsQ0FBQ0UsU0FBWCxFQUFzQkMsT0FBdEIsS0FBa0MsSUFBSU4sSUFBSixDQUFTSSxDQUFDLENBQUNDLFNBQVgsRUFBc0JDLE9BQXRCLEVBRHBDO0FBQUEsR0FMRyxDQUFQO0FBUUQ7O0FBRUQsU0FBU0Msb0JBQVQsQ0FBOEJWLFFBQTlCLEVBQXdDO0FBQ3RDLE1BQU1XLEtBQUssR0FBRyxJQUFJUixJQUFKLENBQVNILFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWVEsU0FBckIsQ0FBZDtBQUNBLE1BQU1JLEdBQUcsR0FBRyxJQUFJVCxJQUFKLENBQVNILFFBQVEsQ0FBQ0EsUUFBUSxDQUFDYSxNQUFULEdBQWtCLENBQW5CLENBQVIsQ0FBOEJULE9BQXZDLENBQVo7QUFDQSxT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Q0U7QUFBQSx3Q0FBYSxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQUhGLEVBTUcyQyxZQU5IO0FBQUE7QUFBQTtBQUFBLDBsYkFGRixDQURGO0FBOERELENBek1EOztHQUFNNUMsYTtVQUNXRyxxRDs7O0tBRFhILGE7O0FBMk1TQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS44ODdkOWIzZDI3MGQwYzc5NjMxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckNhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RlYW0tbWVtYmVyLWNhcmRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2hlYWRlcic7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2xvYWRpbmctaWNvbic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBTdHJlYW1lclNjaGVkdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0cmVhbWVyLXNjaGVkdWxlJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBFWFRSQV9MSUZFX09SRyA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZyc7XHJcbmNvbnN0IEFQSV9CQVNFID0gYCR7RVhUUkFfTElGRV9PUkd9L2FwaWA7XHJcblxyXG5mdW5jdGlvbiBzb3J0U2NoZWR1bGUoc2NoZWR1bGUpIHtcclxuICByZXR1cm4gc2NoZWR1bGVcclxuICAgIC5maWx0ZXIoKHN0cmVhbSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoKSA8IG5ldyBEYXRlKHN0cmVhbS50aW1lRW5kKTtcclxuICAgIH0pXHJcbiAgICAuc29ydChcclxuICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgbmV3IERhdGUoYS50aW1lU3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIudGltZVN0YXJ0KS5nZXRUaW1lKClcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzY2hlZHVsZVswXS50aW1lU3RhcnQpO1xyXG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHNjaGVkdWxlW3NjaGVkdWxlLmxlbmd0aCAtIDFdLnRpbWVFbmQpO1xyXG4gIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydFBhcnRpY2lwYW50cyhwYXJ0aWNpcGFudHMpIHtcclxuICByZXR1cm4gcGFydGljaXBhbnRzXHJcbiAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYS5zdHJlYW1Jc0xpdmUgJiYgIWIuc3RyZWFtSXNMaXZlKSByZXR1cm4gLTE7XHJcbiAgICAgIGlmIChiLnN0cmVhbUlzTGl2ZSAmJiAhYS5zdHJlYW1Jc0xpdmUpIHJldHVybiAxO1xyXG4gICAgICBjb25zdCBkb25hdGlvbnNEaWZmID0gYi5zdW1Eb25hdGlvbnMgLSBhLnN1bURvbmF0aW9ucztcclxuICAgICAgaWYgKGRvbmF0aW9uc0RpZmYgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIGEuZGlzcGxheU5hbWUubG9jYWxlQ29tcGFyZShiLmRpc3BsYXlOYW1lKTtcclxuICAgICAgcmV0dXJuIGRvbmF0aW9uc0RpZmY7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgobWVtYmVyKSA9PiB7XHJcbiAgICAgIGxldCBuZXdNZW1iZXIgPSB7XHJcbiAgICAgICAgLi4ubWVtYmVyLFxyXG4gICAgICAgIGF2YXRhckltYWdlVVJMOiBgaHR0cHM6JHttZW1iZXIuYXZhdGFySW1hZ2VVUkx9YCxcclxuICAgICAgfTtcclxuICAgICAgaWYgKG1lbWJlcj8ubGlua3M/LnN0cmVhbSkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RyZWFtIH0gPSBtZW1iZXIubGlua3M7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBzdHJlYW0ubWF0Y2goL2NoYW5uZWw9KC4qKS8pO1xyXG4gICAgICAgIGlmIChyZWdleD8uWzFdKSB7XHJcbiAgICAgICAgICBuZXdNZW1iZXIgPSB7IC4uLm5ld01lbWJlciwgdHdpdGNoVXNlcm5hbWU6IHJlZ2V4WzFdIH07XHJcbiAgICAgICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IEV4dHJhTGlmZVRlYW0gPSAoeyBuYW1lIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdyb3VwIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YVtncm91cF07XHJcbiAgY29uc3Qgc2NoZWR1bGUgPSBncm91cERhdGE/LnNjaGVkdWxlPy5sZW5ndGhcclxuICAgID8gc29ydFNjaGVkdWxlKGdyb3VwRGF0YS5zY2hlZHVsZSlcclxuICAgIDogW107XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoeyBuYW1lIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtTWVtYmVycygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfS9wYXJ0aWNpcGFudHNgKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW1NZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtTWVtYmVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBgJHtncm91cH0tZXh0cmFsaWZlYDtcclxuICAgICAgY29uc3QgY2FjaGVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgfHwgJ3t9Jyk7XHJcbiAgICAgIGlmIChjYWNoZWREYXRhPy51cGRhdGVkQXQpIHtcclxuICAgICAgICBjb25zdCBmaXZlTWluc0FnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA1ICogNjAwMDApO1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZShjYWNoZWREYXRhLnVwZGF0ZWRBdCkgPiBmaXZlTWluc0Fnbykge1xyXG4gICAgICAgICAgc2V0VGVhbShjYWNoZWREYXRhLnRlYW0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoVGVhbSgpLCBmZXRjaFRlYW1NZW1iZXJzKCldKTtcclxuICAgICAgY29uc3QgcGFydGljaXBhbnRzID0gc29ydFBhcnRpY2lwYW50cyhyZXN1bHRzWzFdKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1RlYW0gPSB7XHJcbiAgICAgICAgLi4ucmVzdWx0c1swXSxcclxuICAgICAgICBwYXJ0aWNpcGFudHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHRlYW1TdG9yYWdlID0ge1xyXG4gICAgICAgIHRlYW06IG5ld1RlYW0sXHJcbiAgICAgICAgdXBkYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgICB9O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh0ZWFtU3RvcmFnZSkpO1xyXG4gICAgICBzZXRUZWFtKG5ld1RlYW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwRGF0YT8uaWQpIGdldERhdGEoKTtcclxuICB9LCBbZ3JvdXAsIGdyb3VwRGF0YV0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnYXNkYXNkYXNkYXNkJywgbmFtZSk7XHJcbiAgY29uc3Qgc2l0ZVRpdGxlID0gYCR7dGVhbS5uYW1lfSBFeHRyYSBMaWZlIFRlYW0gfCBDYWxpIENyZWF0b3JzYDtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIFBhZ2UuIFdlJ3JlIHJhaXNpbmcgbW9uZXkgdG8gaGVscCBvdXIgbG9jYWwgY2hpbGRyZW4ncyBob3NwaXRhbCFgO1xyXG4gIGNvbnN0IHVybCA9ICdodHRwczovL2NhbGljcmVhdG9ycy5jb20nO1xyXG4gIGNvbnN0IHBhZ2VVcmwgPSBgJHt1cmx9JHtyb3V0ZXIuYXNQYXRofWA7XHJcbiAgY29uc3QgaGVhZCA9IChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGUga2V5PVwidGl0bGVcIj57c2l0ZVRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBrZXk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICBrZXk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb259XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICBrZXk9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17YCR7dGVhbS5uYW1lfSAke2Rlc2NyaXB0aW9ufWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIga2V5PVwib2c6dXJsXCIgY29udGVudD17cGFnZVVybH0gLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICBrZXk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgY29udGVudD17YCR7dXJsfS9leHRyYWxpZmUtaWNvbi5wbmdgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIga2V5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMjU0XCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBrZXk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMjEzXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9e0VYVFJBX0xJRkVfT1JHfSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcblxyXG4gIGxldCBwYWdlQ29udGVudHMgPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TG9hZGluZ0ljb24gLz5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAodGVhbT8ucGFydGljaXBhbnRzKVxyXG4gICAgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHsnICd9XHJcbiAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICBwcm9ncmVzcz17dGVhbS5zdW1Eb25hdGlvbnN9XHJcbiAgICAgICAgICBnb2FsPXt0ZWFtLmZ1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgIHByb2dyZXNzVGV4dD1cIlJhaXNlZFwiXHJcbiAgICAgICAgICBnb2FsVGV4dD1cIkdvYWxcIlxyXG4gICAgICAgICAgaXNNb25leVxyXG4gICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgZGlzcGxheVByb2dyZXNzXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIGxpdmVcIj5cclxuICAgICAgICAgICAgPGgyPkxpdmUgU2NoZWR1bGU8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbU1lbWJlcnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9e3RlYW0ubGlua3MucGFnZX0gY2xhc3NOYW1lPVwidGVhbUxpbmtcIj5cclxuICAgICAgICAgICAgSm9pbiBUZWFtXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8aDI+VGVhbSBNZW1iZXJzPC9oMj5cclxuICAgICAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoID4gMCAmJiAhaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIHVwY29taW5nXCI+XHJcbiAgICAgICAgICAgIDxoMj5VcGNvbWluZyBFdmVudDwvaDI+XHJcbiAgICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICAgIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWUgfHwgbmFtZX0gLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+RXh0cmEgTGlmZSBUZWFtPC9oMj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZUxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cGFnZUNvbnRlbnRzfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1YmhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob21lTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNmMyZWI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTNhMmM4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1NZW1iZXJzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlLnVwY29taW5nIGgyIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRyYUxpZmVUZWFtO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW3sgcGFyYW1zOiB7IGdyb3VwOiAnb2MnIH0gfSwgeyBwYXJhbXM6IHsgZ3JvdXA6ICdzZCcgfSB9XSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGdyb3VwcyA9IHtcclxuICAgIG9jOiB7IG5hbWU6ICdPQyBTdHJlYW1lcnMnIH0sXHJcbiAgICBzZDogeyBuYW1lOiAnVHdpdGNoIFNhbiBEaWVnbycgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgLi4uKGdyb3Vwc1twYXJhbXMuZ3JvdXBdIHx8IHt9KSB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
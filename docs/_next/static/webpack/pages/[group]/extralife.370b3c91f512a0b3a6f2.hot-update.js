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
    className: "jsx-1295781539",
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
    id: "1295781539",
    __self: _this
  }, ".jsx-1295781539{margin-top:0px;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:grid;place-items:center;font-size:10rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0pTLEFBRTBCLGVBQ0csa0JBQ1YsUUFDbUIsNkZBQ2QsYUFDTSxtQkFDSCxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcW2dyb3VwXVxcZXh0cmFsaWZlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy90ZWFtLW1lbWJlci1jYXJkcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkZXInO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9sb2FkaW5nLWljb24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgU3RyZWFtZXJTY2hlZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zdHJlYW1lci1zY2hlZHVsZSc7XHJcbmltcG9ydCBjaGVja0lmRXZlbnRJc0xpdmUgZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3QgRVhUUkFfTElGRV9PUkcgPSAnaHR0cHM6Ly93d3cuZXh0cmEtbGlmZS5vcmcnO1xyXG5jb25zdCBBUElfQkFTRSA9IGAke0VYVFJBX0xJRkVfT1JHfS9hcGlgO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgY29uc3QgZG9uYXRpb25zRGlmZiA9IGIuc3VtRG9uYXRpb25zIC0gYS5zdW1Eb25hdGlvbnM7XHJcbiAgICAgIGlmIChkb25hdGlvbnNEaWZmID09PSAwKVxyXG4gICAgICAgIHJldHVybiBhLmRpc3BsYXlOYW1lLmxvY2FsZUNvbXBhcmUoYi5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIHJldHVybiBkb25hdGlvbnNEaWZmO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBncm91cCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGFbZ3JvdXBdO1xyXG4gIGNvbnN0IHNjaGVkdWxlID0gZ3JvdXBEYXRhPy5zY2hlZHVsZT8ubGVuZ3RoXHJcbiAgICA/IHNvcnRTY2hlZHVsZShncm91cERhdGEuc2NoZWR1bGUpXHJcbiAgICA6IFtdO1xyXG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKHsgbmFtZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfWApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbU1lbWJlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH0vcGFydGljaXBhbnRzYCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtTWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbU1lbWJlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7Z3JvdXB9LWV4dHJhbGlmZWA7XHJcbiAgICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8ICd7fScpO1xyXG4gICAgICBpZiAoY2FjaGVkRGF0YT8udXBkYXRlZEF0KSB7XHJcbiAgICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICAgIHNldFRlYW0oY2FjaGVkRGF0YS50ZWFtKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaFRlYW0oKSwgZmV0Y2hUZWFtTWVtYmVycygpXSk7XHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHNvcnRQYXJ0aWNpcGFudHMocmVzdWx0c1sxXSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdUZWFtID0ge1xyXG4gICAgICAgIC4uLnJlc3VsdHNbMF0sXHJcbiAgICAgICAgcGFydGljaXBhbnRzLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB0ZWFtU3RvcmFnZSA9IHtcclxuICAgICAgICB0ZWFtOiBuZXdUZWFtLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGVhbVN0b3JhZ2UpKTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwLCBncm91cERhdGFdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2FzZGFzZGFzZGFzZCcsIG5hbWUpO1xyXG4gIGNvbnN0IHNpdGVUaXRsZSA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIHwgQ2FsaSBDcmVhdG9yc2A7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgJHt0ZWFtLm5hbWV9IEV4dHJhIExpZmUgVGVhbSBQYWdlLiBXZSdyZSByYWlzaW5nIG1vbmV5IHRvIGhlbHAgb3VyIGxvY2FsIGNoaWxkcmVuJ3MgaG9zcGl0YWwhYDtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jYWxpY3JlYXRvcnMuY29tJztcclxuICBjb25zdCBwYWdlVXJsID0gYCR7dXJsfSR7cm91dGVyLmFzUGF0aH1gO1xyXG4gIGNvbnN0IGhlYWQgPSAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIga2V5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3RlYW0ubmFtZX0gJHtkZXNjcmlwdGlvbn1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGtleT1cIm9nOnVybFwiIGNvbnRlbnQ9e3BhZ2VVcmx9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAga2V5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3VybH0vZXh0cmFsaWZlLWljb24ucG5nYH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGtleT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjI1NFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIga2V5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjIxM1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPXtFWFRSQV9MSUZFX09SR30gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICBsZXQgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvYWRpbmdJY29uIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoZmFsc2UgJiYgdGVhbT8ucGFydGljaXBhbnRzKVxyXG4gICAgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICAgIGlzTW9uZXlcclxuICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmIGlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSBsaXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW1NZW1iZXJzXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGgyPlRlYW0gTWVtYmVyczwvaDI+XHJcbiAgICAgICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgIWlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSB1cGNvbWluZ1wiPlxyXG4gICAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2EyYzg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWUgfHwgbmFtZX0gLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+RXh0cmEgTGlmZSBUZWFtPC9oMj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZUxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cGFnZUNvbnRlbnRzfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJoZWFkZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ob21lTGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZ3JvdXBzID0ge1xyXG4gICAgb2M6IHsgbmFtZTogJ09DIFN0cmVhbWVycycgfSxcclxuICAgIHNkOiB7IG5hbWU6ICdUd2l0Y2ggU2FuIERpZWdvJyB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi4oZ3JvdXBzW3BhcmFtcy5ncm91cF0gfHwge30pIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));

  var isEventLive = false;

  if (schedule === null || schedule === void 0 ? void 0 : schedule.length) {
    var scheduleTimeRange = getScheduleTimeRange(schedule) || {};
    isEventLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_14__["default"])(scheduleTimeRange.start, scheduleTimeRange.end);
  }

  if (false) {}
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, head, __jsx("div", {
    className: "jsx-466912392" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, __jsx(_components_atoms_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: team.name || name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }), __jsx("h2", {
    className: "jsx-466912392" + " " + "subheader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, "Extra Life Team"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-466912392" + " " + "homeLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }, "Home")), pageContents, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "466912392",
    __self: _this
  }, ".page.jsx-466912392{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.subheader.jsx-466912392{padding:0;margin:0;}.homeLink.jsx-466912392{color:#fff;font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVBXLEFBRzBCLEFBT0QsQUFJQyxVQUhGLENBUEksQUFXRSxRQUhqQixPQUlBLDJEQVh3Qiw4RUFDRCxxQkFDRiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcW2dyb3VwXVxcZXh0cmFsaWZlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy90ZWFtLW1lbWJlci1jYXJkcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkZXInO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9sb2FkaW5nLWljb24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgU3RyZWFtZXJTY2hlZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zdHJlYW1lci1zY2hlZHVsZSc7XHJcbmltcG9ydCBjaGVja0lmRXZlbnRJc0xpdmUgZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3QgRVhUUkFfTElGRV9PUkcgPSAnaHR0cHM6Ly93d3cuZXh0cmEtbGlmZS5vcmcnO1xyXG5jb25zdCBBUElfQkFTRSA9IGAke0VYVFJBX0xJRkVfT1JHfS9hcGlgO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgY29uc3QgZG9uYXRpb25zRGlmZiA9IGIuc3VtRG9uYXRpb25zIC0gYS5zdW1Eb25hdGlvbnM7XHJcbiAgICAgIGlmIChkb25hdGlvbnNEaWZmID09PSAwKVxyXG4gICAgICAgIHJldHVybiBhLmRpc3BsYXlOYW1lLmxvY2FsZUNvbXBhcmUoYi5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIHJldHVybiBkb25hdGlvbnNEaWZmO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBncm91cCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGFbZ3JvdXBdO1xyXG4gIGNvbnN0IHNjaGVkdWxlID0gZ3JvdXBEYXRhPy5zY2hlZHVsZT8ubGVuZ3RoXHJcbiAgICA/IHNvcnRTY2hlZHVsZShncm91cERhdGEuc2NoZWR1bGUpXHJcbiAgICA6IFtdO1xyXG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKHsgbmFtZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfWApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbU1lbWJlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH0vcGFydGljaXBhbnRzYCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtTWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbU1lbWJlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7Z3JvdXB9LWV4dHJhbGlmZWA7XHJcbiAgICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8ICd7fScpO1xyXG4gICAgICBpZiAoY2FjaGVkRGF0YT8udXBkYXRlZEF0KSB7XHJcbiAgICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICAgIHNldFRlYW0oY2FjaGVkRGF0YS50ZWFtKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaFRlYW0oKSwgZmV0Y2hUZWFtTWVtYmVycygpXSk7XHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHNvcnRQYXJ0aWNpcGFudHMocmVzdWx0c1sxXSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdUZWFtID0ge1xyXG4gICAgICAgIC4uLnJlc3VsdHNbMF0sXHJcbiAgICAgICAgcGFydGljaXBhbnRzLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB0ZWFtU3RvcmFnZSA9IHtcclxuICAgICAgICB0ZWFtOiBuZXdUZWFtLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGVhbVN0b3JhZ2UpKTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwLCBncm91cERhdGFdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2FzZGFzZGFzZGFzZCcsIG5hbWUpO1xyXG4gIGNvbnN0IHNpdGVUaXRsZSA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIHwgQ2FsaSBDcmVhdG9yc2A7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgJHt0ZWFtLm5hbWV9IEV4dHJhIExpZmUgVGVhbSBQYWdlLiBXZSdyZSByYWlzaW5nIG1vbmV5IHRvIGhlbHAgb3VyIGxvY2FsIGNoaWxkcmVuJ3MgaG9zcGl0YWwhYDtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jYWxpY3JlYXRvcnMuY29tJztcclxuICBjb25zdCBwYWdlVXJsID0gYCR7dXJsfSR7cm91dGVyLmFzUGF0aH1gO1xyXG4gIGNvbnN0IGhlYWQgPSAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIga2V5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3RlYW0ubmFtZX0gJHtkZXNjcmlwdGlvbn1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGtleT1cIm9nOnVybFwiIGNvbnRlbnQ9e3BhZ2VVcmx9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAga2V5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3VybH0vZXh0cmFsaWZlLWljb24ucG5nYH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGtleT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjI1NFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIga2V5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjIxM1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPXtFWFRSQV9MSUZFX09SR30gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICBsZXQgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvYWRpbmdJY29uIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoZmFsc2UgJiYgdGVhbT8ucGFydGljaXBhbnRzKVxyXG4gICAgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICAgIGlzTW9uZXlcclxuICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmIGlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSBsaXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW1NZW1iZXJzXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGgyPlRlYW0gTWVtYmVyczwvaDI+XHJcbiAgICAgICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgIWlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSB1cGNvbWluZ1wiPlxyXG4gICAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2EyYzg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWUgfHwgbmFtZX0gLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+RXh0cmEgTGlmZSBUZWFtPC9oMj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZUxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cGFnZUNvbnRlbnRzfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJoZWFkZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ob21lTGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZ3JvdXBzID0ge1xyXG4gICAgb2M6IHsgbmFtZTogJ09DIFN0cmVhbWVycycgfSxcclxuICAgIHNkOiB7IG5hbWU6ICdUd2l0Y2ggU2FuIERpZWdvJyB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi4oZ3JvdXBzW3BhcmFtcy5ncm91cF0gfHwge30pIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwiRVhUUkFfTElGRV9PUkciLCJBUElfQkFTRSIsInNvcnRTY2hlZHVsZSIsInNjaGVkdWxlIiwiZmlsdGVyIiwic3RyZWFtIiwiRGF0ZSIsInRpbWVFbmQiLCJzb3J0IiwiYSIsImIiLCJ0aW1lU3RhcnQiLCJnZXRUaW1lIiwiZ2V0U2NoZWR1bGVUaW1lUmFuZ2UiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsInNvcnRQYXJ0aWNpcGFudHMiLCJwYXJ0aWNpcGFudHMiLCJzdHJlYW1Jc0xpdmUiLCJkb25hdGlvbnNEaWZmIiwic3VtRG9uYXRpb25zIiwiZGlzcGxheU5hbWUiLCJsb2NhbGVDb21wYXJlIiwibWFwIiwibWVtYmVyIiwibmV3TWVtYmVyIiwiYXZhdGFySW1hZ2VVUkwiLCJsaW5rcyIsInJlZ2V4IiwibWF0Y2giLCJ0d2l0Y2hVc2VybmFtZSIsIkV4dHJhTGlmZVRlYW0iLCJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ3JvdXAiLCJxdWVyeSIsImdyb3VwRGF0YSIsInVzZVN0YXRlIiwidGVhbSIsInNldFRlYW0iLCJ1c2VFZmZlY3QiLCJmZXRjaFRlYW0iLCJmZXRjaCIsImlkIiwicmVzIiwianNvbiIsImZldGNoZWRUZWFtIiwiZmV0Y2hUZWFtTWVtYmVycyIsImZldGNoZWRUZWFtTWVtYmVycyIsImdldERhdGEiLCJzdG9yYWdlS2V5IiwiY2FjaGVkRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cGRhdGVkQXQiLCJmaXZlTWluc0FnbyIsIm5vdyIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwibmV3VGVhbSIsInRlYW1TdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJzaXRlVGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsInBhZ2VVcmwiLCJhc1BhdGgiLCJoZWFkIiwicGFnZUNvbnRlbnRzIiwiaXNFdmVudExpdmUiLCJzY2hlZHVsZVRpbWVSYW5nZSIsImNoZWNrSWZFdmVudElzTGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsOENBQUQsQ0FBcEI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLDRCQUF2QjtBQUNBLElBQU1DLFFBQVEsYUFBTUQsY0FBTixTQUFkOztBQUVBLFNBQVNFLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQWdDO0FBQzlCLFNBQU9BLFFBQVEsQ0FDWkMsTUFESSxDQUNHLFVBQUNDLE1BQUQsRUFBWTtBQUNsQixXQUFPLElBQUlDLElBQUosS0FBYSxJQUFJQSxJQUFKLENBQVNELE1BQU0sQ0FBQ0UsT0FBaEIsQ0FBcEI7QUFDRCxHQUhJLEVBSUpDLElBSkksQ0FLSCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNFLElBQUlKLElBQUosQ0FBU0csQ0FBQyxDQUFDRSxTQUFYLEVBQXNCQyxPQUF0QixLQUFrQyxJQUFJTixJQUFKLENBQVNJLENBQUMsQ0FBQ0MsU0FBWCxFQUFzQkMsT0FBdEIsRUFEcEM7QUFBQSxHQUxHLENBQVA7QUFRRDs7QUFFRCxTQUFTQyxvQkFBVCxDQUE4QlYsUUFBOUIsRUFBd0M7QUFDdEMsTUFBTVcsS0FBSyxHQUFHLElBQUlSLElBQUosQ0FBU0gsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZUSxTQUFyQixDQUFkO0FBQ0EsTUFBTUksR0FBRyxHQUFHLElBQUlULElBQUosQ0FBU0gsUUFBUSxDQUFDQSxRQUFRLENBQUNhLE1BQVQsR0FBa0IsQ0FBbkIsQ0FBUixDQUE4QlQsT0FBdkMsQ0FBWjtBQUNBLFNBQU87QUFBRU8sU0FBSyxFQUFMQSxLQUFG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QUFDQSxNQUFJMUUsUUFBSixhQUFJQSxRQUFKLHVCQUFJQSxRQUFRLENBQUVhLE1BQWQsRUFBc0I7QUFDcEIsUUFBTThELGlCQUFpQixHQUFHakUsb0JBQW9CLENBQUNWLFFBQUQsQ0FBcEIsSUFBa0MsRUFBNUQ7QUFDQTBFLGVBQVcsR0FBR0UsMkRBQWtCLENBQzlCRCxpQkFBaUIsQ0FBQ2hFLEtBRFksRUFFOUJnRSxpQkFBaUIsQ0FBQy9ELEdBRlksQ0FBaEM7QUFJRDs7QUFDRCxNQUFJLEtBQUosRUFDRTZELEVBQUE7QUF1RUYsU0FDRSxtRUFDR0QsSUFESCxFQUVFO0FBQUEsdUNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFRLFNBQUssRUFBRW5DLElBQUksQ0FBQ1AsSUFBTCxJQUFhQSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBLHVDQUFjLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixFQUdFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBYSxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQUhGLEVBTUcyQyxZQU5IO0FBQUE7QUFBQTtBQUFBLDZtYUFGRixDQURGO0FBZ0NELENBOU1EOztHQUFNNUMsYTtVQUNXRyxxRDs7O0tBRFhILGE7O0FBZ05TQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bZ3JvdXBdL2V4dHJhbGlmZS4zNzBiM2M5MWY1MTJhMGIzYTZmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckNhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RlYW0tbWVtYmVyLWNhcmRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2hlYWRlcic7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2xvYWRpbmctaWNvbic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBTdHJlYW1lclNjaGVkdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0cmVhbWVyLXNjaGVkdWxlJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBFWFRSQV9MSUZFX09SRyA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZyc7XHJcbmNvbnN0IEFQSV9CQVNFID0gYCR7RVhUUkFfTElGRV9PUkd9L2FwaWA7XHJcblxyXG5mdW5jdGlvbiBzb3J0U2NoZWR1bGUoc2NoZWR1bGUpIHtcclxuICByZXR1cm4gc2NoZWR1bGVcclxuICAgIC5maWx0ZXIoKHN0cmVhbSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoKSA8IG5ldyBEYXRlKHN0cmVhbS50aW1lRW5kKTtcclxuICAgIH0pXHJcbiAgICAuc29ydChcclxuICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgbmV3IERhdGUoYS50aW1lU3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIudGltZVN0YXJ0KS5nZXRUaW1lKClcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzY2hlZHVsZVswXS50aW1lU3RhcnQpO1xyXG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHNjaGVkdWxlW3NjaGVkdWxlLmxlbmd0aCAtIDFdLnRpbWVFbmQpO1xyXG4gIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydFBhcnRpY2lwYW50cyhwYXJ0aWNpcGFudHMpIHtcclxuICByZXR1cm4gcGFydGljaXBhbnRzXHJcbiAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYS5zdHJlYW1Jc0xpdmUgJiYgIWIuc3RyZWFtSXNMaXZlKSByZXR1cm4gLTE7XHJcbiAgICAgIGlmIChiLnN0cmVhbUlzTGl2ZSAmJiAhYS5zdHJlYW1Jc0xpdmUpIHJldHVybiAxO1xyXG4gICAgICBjb25zdCBkb25hdGlvbnNEaWZmID0gYi5zdW1Eb25hdGlvbnMgLSBhLnN1bURvbmF0aW9ucztcclxuICAgICAgaWYgKGRvbmF0aW9uc0RpZmYgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIGEuZGlzcGxheU5hbWUubG9jYWxlQ29tcGFyZShiLmRpc3BsYXlOYW1lKTtcclxuICAgICAgcmV0dXJuIGRvbmF0aW9uc0RpZmY7XHJcbiAgICB9KVxyXG4gICAgLm1hcCgobWVtYmVyKSA9PiB7XHJcbiAgICAgIGxldCBuZXdNZW1iZXIgPSB7XHJcbiAgICAgICAgLi4ubWVtYmVyLFxyXG4gICAgICAgIGF2YXRhckltYWdlVVJMOiBgaHR0cHM6JHttZW1iZXIuYXZhdGFySW1hZ2VVUkx9YCxcclxuICAgICAgfTtcclxuICAgICAgaWYgKG1lbWJlcj8ubGlua3M/LnN0cmVhbSkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RyZWFtIH0gPSBtZW1iZXIubGlua3M7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBzdHJlYW0ubWF0Y2goL2NoYW5uZWw9KC4qKS8pO1xyXG4gICAgICAgIGlmIChyZWdleD8uWzFdKSB7XHJcbiAgICAgICAgICBuZXdNZW1iZXIgPSB7IC4uLm5ld01lbWJlciwgdHdpdGNoVXNlcm5hbWU6IHJlZ2V4WzFdIH07XHJcbiAgICAgICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IEV4dHJhTGlmZVRlYW0gPSAoeyBuYW1lIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdyb3VwIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YVtncm91cF07XHJcbiAgY29uc3Qgc2NoZWR1bGUgPSBncm91cERhdGE/LnNjaGVkdWxlPy5sZW5ndGhcclxuICAgID8gc29ydFNjaGVkdWxlKGdyb3VwRGF0YS5zY2hlZHVsZSlcclxuICAgIDogW107XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoeyBuYW1lIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtTWVtYmVycygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfS9wYXJ0aWNpcGFudHNgKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW1NZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtTWVtYmVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBgJHtncm91cH0tZXh0cmFsaWZlYDtcclxuICAgICAgY29uc3QgY2FjaGVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgfHwgJ3t9Jyk7XHJcbiAgICAgIGlmIChjYWNoZWREYXRhPy51cGRhdGVkQXQpIHtcclxuICAgICAgICBjb25zdCBmaXZlTWluc0FnbyA9IG5ldyBEYXRlKERhdGUubm93KCkgLSA1ICogNjAwMDApO1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZShjYWNoZWREYXRhLnVwZGF0ZWRBdCkgPiBmaXZlTWluc0Fnbykge1xyXG4gICAgICAgICAgc2V0VGVhbShjYWNoZWREYXRhLnRlYW0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoVGVhbSgpLCBmZXRjaFRlYW1NZW1iZXJzKCldKTtcclxuICAgICAgY29uc3QgcGFydGljaXBhbnRzID0gc29ydFBhcnRpY2lwYW50cyhyZXN1bHRzWzFdKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1RlYW0gPSB7XHJcbiAgICAgICAgLi4ucmVzdWx0c1swXSxcclxuICAgICAgICBwYXJ0aWNpcGFudHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHRlYW1TdG9yYWdlID0ge1xyXG4gICAgICAgIHRlYW06IG5ld1RlYW0sXHJcbiAgICAgICAgdXBkYXRlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgICB9O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh0ZWFtU3RvcmFnZSkpO1xyXG4gICAgICBzZXRUZWFtKG5ld1RlYW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwRGF0YT8uaWQpIGdldERhdGEoKTtcclxuICB9LCBbZ3JvdXAsIGdyb3VwRGF0YV0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnYXNkYXNkYXNkYXNkJywgbmFtZSk7XHJcbiAgY29uc3Qgc2l0ZVRpdGxlID0gYCR7dGVhbS5uYW1lfSBFeHRyYSBMaWZlIFRlYW0gfCBDYWxpIENyZWF0b3JzYDtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIFBhZ2UuIFdlJ3JlIHJhaXNpbmcgbW9uZXkgdG8gaGVscCBvdXIgbG9jYWwgY2hpbGRyZW4ncyBob3NwaXRhbCFgO1xyXG4gIGNvbnN0IHVybCA9ICdodHRwczovL2NhbGljcmVhdG9ycy5jb20nO1xyXG4gIGNvbnN0IHBhZ2VVcmwgPSBgJHt1cmx9JHtyb3V0ZXIuYXNQYXRofWA7XHJcbiAgY29uc3QgaGVhZCA9IChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGUga2V5PVwidGl0bGVcIj57c2l0ZVRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBrZXk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICBrZXk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17ZGVzY3JpcHRpb259XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICBrZXk9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD17YCR7dGVhbS5uYW1lfSAke2Rlc2NyaXB0aW9ufWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIga2V5PVwib2c6dXJsXCIgY29udGVudD17cGFnZVVybH0gLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICBrZXk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgY29udGVudD17YCR7dXJsfS9leHRyYWxpZmUtaWNvbi5wbmdgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIga2V5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMjU0XCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBrZXk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMjEzXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9e0VYVFJBX0xJRkVfT1JHfSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcblxyXG4gIGxldCBwYWdlQ29udGVudHMgPSAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TG9hZGluZ0ljb24gLz5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgbGV0IGlzRXZlbnRMaXZlID0gZmFsc2U7XHJcbiAgaWYgKHNjaGVkdWxlPy5sZW5ndGgpIHtcclxuICAgIGNvbnN0IHNjaGVkdWxlVGltZVJhbmdlID0gZ2V0U2NoZWR1bGVUaW1lUmFuZ2Uoc2NoZWR1bGUpIHx8IHt9O1xyXG4gICAgaXNFdmVudExpdmUgPSBjaGVja0lmRXZlbnRJc0xpdmUoXHJcbiAgICAgIHNjaGVkdWxlVGltZVJhbmdlLnN0YXJ0LFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5lbmRcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChmYWxzZSAmJiB0ZWFtPy5wYXJ0aWNpcGFudHMpXHJcbiAgICBwYWdlQ29udGVudHMgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgICBwcm9ncmVzcz17dGVhbS5zdW1Eb25hdGlvbnN9XHJcbiAgICAgICAgICBnb2FsPXt0ZWFtLmZ1bmRyYWlzaW5nR29hbH1cclxuICAgICAgICAgIHByb2dyZXNzVGV4dD1cIlJhaXNlZFwiXHJcbiAgICAgICAgICBnb2FsVGV4dD1cIkdvYWxcIlxyXG4gICAgICAgICAgaXNNb25leVxyXG4gICAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAgICAgZGlzcGxheVByb2dyZXNzXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIGxpdmVcIj5cclxuICAgICAgICAgICAgPGgyPkxpdmUgU2NoZWR1bGU8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbU1lbWJlcnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9e3RlYW0ubGlua3MucGFnZX0gY2xhc3NOYW1lPVwidGVhbUxpbmtcIj5cclxuICAgICAgICAgICAgSm9pbiBUZWFtXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8aDI+VGVhbSBNZW1iZXJzPC9oMj5cclxuICAgICAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoID4gMCAmJiAhaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIHVwY29taW5nXCI+XHJcbiAgICAgICAgICAgIDxoMj5VcGNvbWluZyBFdmVudDwvaDI+XHJcbiAgICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICAgIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgLnRlYW1MaW5rIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjZjMmViO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1MaW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzEzYTJjODtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTWVtYmVycyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlLnVwY29taW5nIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2hlYWR9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxIZWFkZXIgdGl0bGU9e3RlYW0ubmFtZSB8fCBuYW1lfSAvPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJoZWFkZXJcIj5FeHRyYSBMaWZlIFRlYW08L2gyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob21lTGlua1wiPkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHtwYWdlQ29udGVudHN9XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhvbWVMaW5rIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0cmFMaWZlVGVhbTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFt7IHBhcmFtczogeyBncm91cDogJ29jJyB9IH0sIHsgcGFyYW1zOiB7IGdyb3VwOiAnc2QnIH0gfV0sXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBncm91cHMgPSB7XHJcbiAgICBvYzogeyBuYW1lOiAnT0MgU3RyZWFtZXJzJyB9LFxyXG4gICAgc2Q6IHsgbmFtZTogJ1R3aXRjaCBTYW4gRGllZ28nIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IC4uLihncm91cHNbcGFyYW1zLmdyb3VwXSB8fCB7fSkgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
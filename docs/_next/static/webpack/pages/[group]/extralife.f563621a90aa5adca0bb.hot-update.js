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
  }, ".jsx-1295781539{margin-top:0px;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:grid;place-items:center;font-size:10rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0pTLEFBRTBCLGVBQ0csa0JBQ1YsUUFDbUIsNkZBQ2QsYUFDTSxtQkFDSCxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcW2dyb3VwXVxcZXh0cmFsaWZlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy90ZWFtLW1lbWJlci1jYXJkcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkZXInO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9sb2FkaW5nLWljb24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgU3RyZWFtZXJTY2hlZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zdHJlYW1lci1zY2hlZHVsZSc7XHJcbmltcG9ydCBjaGVja0lmRXZlbnRJc0xpdmUgZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3QgRVhUUkFfTElGRV9PUkcgPSAnaHR0cHM6Ly93d3cuZXh0cmEtbGlmZS5vcmcnO1xyXG5jb25zdCBBUElfQkFTRSA9IGAke0VYVFJBX0xJRkVfT1JHfS9hcGlgO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgY29uc3QgZG9uYXRpb25zRGlmZiA9IGIuc3VtRG9uYXRpb25zIC0gYS5zdW1Eb25hdGlvbnM7XHJcbiAgICAgIGlmIChkb25hdGlvbnNEaWZmID09PSAwKVxyXG4gICAgICAgIHJldHVybiBhLmRpc3BsYXlOYW1lLmxvY2FsZUNvbXBhcmUoYi5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIHJldHVybiBkb25hdGlvbnNEaWZmO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBncm91cCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGFbZ3JvdXBdO1xyXG4gIGNvbnN0IHNjaGVkdWxlID0gZ3JvdXBEYXRhPy5zY2hlZHVsZT8ubGVuZ3RoXHJcbiAgICA/IHNvcnRTY2hlZHVsZShncm91cERhdGEuc2NoZWR1bGUpXHJcbiAgICA6IFtdO1xyXG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKHsgbmFtZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfWApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbU1lbWJlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH0vcGFydGljaXBhbnRzYCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtTWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbU1lbWJlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7Z3JvdXB9LWV4dHJhbGlmZWA7XHJcbiAgICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8ICd7fScpO1xyXG4gICAgICBpZiAoY2FjaGVkRGF0YT8udXBkYXRlZEF0KSB7XHJcbiAgICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICAgIHNldFRlYW0oY2FjaGVkRGF0YS50ZWFtKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaFRlYW0oKSwgZmV0Y2hUZWFtTWVtYmVycygpXSk7XHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHNvcnRQYXJ0aWNpcGFudHMocmVzdWx0c1sxXSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdUZWFtID0ge1xyXG4gICAgICAgIC4uLnJlc3VsdHNbMF0sXHJcbiAgICAgICAgcGFydGljaXBhbnRzLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB0ZWFtU3RvcmFnZSA9IHtcclxuICAgICAgICB0ZWFtOiBuZXdUZWFtLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGVhbVN0b3JhZ2UpKTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwLCBncm91cERhdGFdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2FzZGFzZGFzZGFzZCcsIG5hbWUpO1xyXG4gIGNvbnN0IHNpdGVUaXRsZSA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIHwgQ2FsaSBDcmVhdG9yc2A7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgJHt0ZWFtLm5hbWV9IEV4dHJhIExpZmUgVGVhbSBQYWdlLiBXZSdyZSByYWlzaW5nIG1vbmV5IHRvIGhlbHAgb3VyIGxvY2FsIGNoaWxkcmVuJ3MgaG9zcGl0YWwhYDtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jYWxpY3JlYXRvcnMuY29tJztcclxuICBjb25zdCBwYWdlVXJsID0gYCR7dXJsfSR7cm91dGVyLmFzUGF0aH1gO1xyXG4gIGNvbnN0IGhlYWQgPSAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIga2V5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3RlYW0ubmFtZX0gJHtkZXNjcmlwdGlvbn1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGtleT1cIm9nOnVybFwiIGNvbnRlbnQ9e3BhZ2VVcmx9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAga2V5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3VybH0vZXh0cmFsaWZlLWljb24ucG5nYH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGtleT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjI1NFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIga2V5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjIxM1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPXtFWFRSQV9MSUZFX09SR30gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICBsZXQgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvYWRpbmdJY29uIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAodGVhbT8ucGFydGljaXBhbnRzKVxyXG4gICAgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICAgIGlzTW9uZXlcclxuICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmIGlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSBsaXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW1NZW1iZXJzXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGgyPlRlYW0gTWVtYmVyczwvaDI+XHJcbiAgICAgICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgIWlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSB1cGNvbWluZ1wiPlxyXG4gICAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2EyYzg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWUgfHwgbmFtZX0gLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+RXh0cmEgTGlmZSBUZWFtPC9oMj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZUxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cGFnZUNvbnRlbnRzfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJoZWFkZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ob21lTGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZ3JvdXBzID0ge1xyXG4gICAgb2M6IHsgbmFtZTogJ09DIFN0cmVhbWVycycgfSxcclxuICAgIHNkOiB7IG5hbWU6ICdUd2l0Y2ggU2FuIERpZWdvJyB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi4oZ3JvdXBzW3BhcmFtcy5ncm91cF0gfHwge30pIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));

  var isEventLive = false;

  if (schedule === null || schedule === void 0 ? void 0 : schedule.length) {
    var scheduleTimeRange = getScheduleTimeRange(schedule) || {};
    isEventLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_14__["default"])(scheduleTimeRange.start, scheduleTimeRange.end);
  }

  if (team === null || team === void 0 ? void 0 : team.participants) pageContents = __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      lineNumber: 168,
      columnNumber: 9
    }
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) > 0 && isEventLive && __jsx("div", {
    className: "jsx-3644837704" + " " + "streamerSchedule live",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3644837704",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, "Live Schedule"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_13__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-3644837704" + " " + "teamMembers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: team.links.page,
    className: "jsx-3644837704" + " " + "teamLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, "Join Team"), __jsx("h2", {
    className: "jsx-3644837704",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, "Team Members"), __jsx(_components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_9__["default"], {
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  })), (schedule === null || schedule === void 0 ? void 0 : schedule.length) > 0 && !isEventLive && __jsx("div", {
    className: "jsx-3644837704" + " " + "streamerSchedule upcoming",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-3644837704",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, "Upcoming Event"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_13__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3644837704",
    __self: _this
  }, ".teamLink.jsx-3644837704{color:#fff;padding:15px;border-radius:8px;font-size:24px;background:#26c2eb;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;}.teamLink.jsx-3644837704:hover{background:#13a2c8;}.teamMembers.jsx-3644837704{margin-top:40px;text-align:center;position:relative;}.streamerSchedule.jsx-3644837704{margin-top:40px;width:100%;max-width:800px;}.streamerSchedule.upcoming.jsx-3644837704 h2.jsx-3644837704{margin-left:10%;}@media (max-width:600px){.streamerSchedule.upcoming.jsx-3644837704 h2.jsx-3644837704{text-align:center;margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBME1XLEFBRXdCLEFBU1EsQUFHSCxBQUtBLEFBS0EsQUFJSSxXQXpCUCxLQVlLLEFBS1AsQUFLYixFQUlrQixDQWpCbEIsS0FSb0IsR0FpQkYsS0FTbEIsRUFkb0IsUUFYSCxDQWlCakIsU0FMQSxLQVhxQixtQkFDRSxrREFDSixpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcW2dyb3VwXVxcZXh0cmFsaWZlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy90ZWFtLW1lbWJlci1jYXJkcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkZXInO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9sb2FkaW5nLWljb24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgU3RyZWFtZXJTY2hlZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zdHJlYW1lci1zY2hlZHVsZSc7XHJcbmltcG9ydCBjaGVja0lmRXZlbnRJc0xpdmUgZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3QgRVhUUkFfTElGRV9PUkcgPSAnaHR0cHM6Ly93d3cuZXh0cmEtbGlmZS5vcmcnO1xyXG5jb25zdCBBUElfQkFTRSA9IGAke0VYVFJBX0xJRkVfT1JHfS9hcGlgO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgY29uc3QgZG9uYXRpb25zRGlmZiA9IGIuc3VtRG9uYXRpb25zIC0gYS5zdW1Eb25hdGlvbnM7XHJcbiAgICAgIGlmIChkb25hdGlvbnNEaWZmID09PSAwKVxyXG4gICAgICAgIHJldHVybiBhLmRpc3BsYXlOYW1lLmxvY2FsZUNvbXBhcmUoYi5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIHJldHVybiBkb25hdGlvbnNEaWZmO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBncm91cCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGFbZ3JvdXBdO1xyXG4gIGNvbnN0IHNjaGVkdWxlID0gZ3JvdXBEYXRhPy5zY2hlZHVsZT8ubGVuZ3RoXHJcbiAgICA/IHNvcnRTY2hlZHVsZShncm91cERhdGEuc2NoZWR1bGUpXHJcbiAgICA6IFtdO1xyXG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKHsgbmFtZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfWApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbU1lbWJlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH0vcGFydGljaXBhbnRzYCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtTWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbU1lbWJlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7Z3JvdXB9LWV4dHJhbGlmZWA7XHJcbiAgICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8ICd7fScpO1xyXG4gICAgICBpZiAoY2FjaGVkRGF0YT8udXBkYXRlZEF0KSB7XHJcbiAgICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICAgIHNldFRlYW0oY2FjaGVkRGF0YS50ZWFtKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaFRlYW0oKSwgZmV0Y2hUZWFtTWVtYmVycygpXSk7XHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHNvcnRQYXJ0aWNpcGFudHMocmVzdWx0c1sxXSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdUZWFtID0ge1xyXG4gICAgICAgIC4uLnJlc3VsdHNbMF0sXHJcbiAgICAgICAgcGFydGljaXBhbnRzLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB0ZWFtU3RvcmFnZSA9IHtcclxuICAgICAgICB0ZWFtOiBuZXdUZWFtLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGVhbVN0b3JhZ2UpKTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwLCBncm91cERhdGFdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2FzZGFzZGFzZGFzZCcsIG5hbWUpO1xyXG4gIGNvbnN0IHNpdGVUaXRsZSA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIHwgQ2FsaSBDcmVhdG9yc2A7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgJHt0ZWFtLm5hbWV9IEV4dHJhIExpZmUgVGVhbSBQYWdlLiBXZSdyZSByYWlzaW5nIG1vbmV5IHRvIGhlbHAgb3VyIGxvY2FsIGNoaWxkcmVuJ3MgaG9zcGl0YWwhYDtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jYWxpY3JlYXRvcnMuY29tJztcclxuICBjb25zdCBwYWdlVXJsID0gYCR7dXJsfSR7cm91dGVyLmFzUGF0aH1gO1xyXG4gIGNvbnN0IGhlYWQgPSAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIga2V5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3RlYW0ubmFtZX0gJHtkZXNjcmlwdGlvbn1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGtleT1cIm9nOnVybFwiIGNvbnRlbnQ9e3BhZ2VVcmx9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAga2V5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3VybH0vZXh0cmFsaWZlLWljb24ucG5nYH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGtleT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjI1NFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIga2V5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjIxM1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPXtFWFRSQV9MSUZFX09SR30gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICBsZXQgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvYWRpbmdJY29uIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAodGVhbT8ucGFydGljaXBhbnRzKVxyXG4gICAgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICAgIGlzTW9uZXlcclxuICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmIGlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSBsaXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW1NZW1iZXJzXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGgyPlRlYW0gTWVtYmVyczwvaDI+XHJcbiAgICAgICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgIWlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSB1cGNvbWluZ1wiPlxyXG4gICAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2EyYzg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWUgfHwgbmFtZX0gLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+RXh0cmEgTGlmZSBUZWFtPC9oMj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZUxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cGFnZUNvbnRlbnRzfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJoZWFkZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ob21lTGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZ3JvdXBzID0ge1xyXG4gICAgb2M6IHsgbmFtZTogJ09DIFN0cmVhbWVycycgfSxcclxuICAgIHNkOiB7IG5hbWU6ICdUd2l0Y2ggU2FuIERpZWdvJyB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi4oZ3JvdXBzW3BhcmFtcy5ncm91cF0gfHwge30pIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));
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
  }, ".page.jsx-466912392{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.subheader.jsx-466912392{padding:0;margin:0;}.homeLink.jsx-466912392{color:#fff;font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVBXLEFBRzBCLEFBT0QsQUFJQyxVQUhGLENBUEksQUFXRSxRQUhqQixPQUlBLDJEQVh3Qiw4RUFDRCxxQkFDRiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcW2dyb3VwXVxcZXh0cmFsaWZlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy90ZWFtLW1lbWJlci1jYXJkcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkZXInO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9sb2FkaW5nLWljb24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgU3RyZWFtZXJTY2hlZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zdHJlYW1lci1zY2hlZHVsZSc7XHJcbmltcG9ydCBjaGVja0lmRXZlbnRJc0xpdmUgZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3QgRVhUUkFfTElGRV9PUkcgPSAnaHR0cHM6Ly93d3cuZXh0cmEtbGlmZS5vcmcnO1xyXG5jb25zdCBBUElfQkFTRSA9IGAke0VYVFJBX0xJRkVfT1JHfS9hcGlgO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgY29uc3QgZG9uYXRpb25zRGlmZiA9IGIuc3VtRG9uYXRpb25zIC0gYS5zdW1Eb25hdGlvbnM7XHJcbiAgICAgIGlmIChkb25hdGlvbnNEaWZmID09PSAwKVxyXG4gICAgICAgIHJldHVybiBhLmRpc3BsYXlOYW1lLmxvY2FsZUNvbXBhcmUoYi5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIHJldHVybiBkb25hdGlvbnNEaWZmO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBncm91cCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGFbZ3JvdXBdO1xyXG4gIGNvbnN0IHNjaGVkdWxlID0gZ3JvdXBEYXRhPy5zY2hlZHVsZT8ubGVuZ3RoXHJcbiAgICA/IHNvcnRTY2hlZHVsZShncm91cERhdGEuc2NoZWR1bGUpXHJcbiAgICA6IFtdO1xyXG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKHsgbmFtZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfWApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbU1lbWJlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH0vcGFydGljaXBhbnRzYCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtTWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbU1lbWJlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7Z3JvdXB9LWV4dHJhbGlmZWA7XHJcbiAgICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8ICd7fScpO1xyXG4gICAgICBpZiAoY2FjaGVkRGF0YT8udXBkYXRlZEF0KSB7XHJcbiAgICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICAgIHNldFRlYW0oY2FjaGVkRGF0YS50ZWFtKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaFRlYW0oKSwgZmV0Y2hUZWFtTWVtYmVycygpXSk7XHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHNvcnRQYXJ0aWNpcGFudHMocmVzdWx0c1sxXSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdUZWFtID0ge1xyXG4gICAgICAgIC4uLnJlc3VsdHNbMF0sXHJcbiAgICAgICAgcGFydGljaXBhbnRzLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB0ZWFtU3RvcmFnZSA9IHtcclxuICAgICAgICB0ZWFtOiBuZXdUZWFtLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGVhbVN0b3JhZ2UpKTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwLCBncm91cERhdGFdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2FzZGFzZGFzZGFzZCcsIG5hbWUpO1xyXG4gIGNvbnN0IHNpdGVUaXRsZSA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIHwgQ2FsaSBDcmVhdG9yc2A7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgJHt0ZWFtLm5hbWV9IEV4dHJhIExpZmUgVGVhbSBQYWdlLiBXZSdyZSByYWlzaW5nIG1vbmV5IHRvIGhlbHAgb3VyIGxvY2FsIGNoaWxkcmVuJ3MgaG9zcGl0YWwhYDtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jYWxpY3JlYXRvcnMuY29tJztcclxuICBjb25zdCBwYWdlVXJsID0gYCR7dXJsfSR7cm91dGVyLmFzUGF0aH1gO1xyXG4gIGNvbnN0IGhlYWQgPSAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIga2V5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3RlYW0ubmFtZX0gJHtkZXNjcmlwdGlvbn1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGtleT1cIm9nOnVybFwiIGNvbnRlbnQ9e3BhZ2VVcmx9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAga2V5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3VybH0vZXh0cmFsaWZlLWljb24ucG5nYH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGtleT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjI1NFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIga2V5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjIxM1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPXtFWFRSQV9MSUZFX09SR30gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICBsZXQgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvYWRpbmdJY29uIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAodGVhbT8ucGFydGljaXBhbnRzKVxyXG4gICAgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICAgIGlzTW9uZXlcclxuICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmIGlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSBsaXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW1NZW1iZXJzXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGgyPlRlYW0gTWVtYmVyczwvaDI+XHJcbiAgICAgICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgIWlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSB1cGNvbWluZ1wiPlxyXG4gICAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2EyYzg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWUgfHwgbmFtZX0gLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+RXh0cmEgTGlmZSBUZWFtPC9oMj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZUxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cGFnZUNvbnRlbnRzfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJoZWFkZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ob21lTGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZ3JvdXBzID0ge1xyXG4gICAgb2M6IHsgbmFtZTogJ09DIFN0cmVhbWVycycgfSxcclxuICAgIHNkOiB7IG5hbWU6ICdUd2l0Y2ggU2FuIERpZWdvJyB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi4oZ3JvdXBzW3BhcmFtcy5ncm91cF0gfHwge30pIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwiRVhUUkFfTElGRV9PUkciLCJBUElfQkFTRSIsInNvcnRTY2hlZHVsZSIsInNjaGVkdWxlIiwiZmlsdGVyIiwic3RyZWFtIiwiRGF0ZSIsInRpbWVFbmQiLCJzb3J0IiwiYSIsImIiLCJ0aW1lU3RhcnQiLCJnZXRUaW1lIiwiZ2V0U2NoZWR1bGVUaW1lUmFuZ2UiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsInNvcnRQYXJ0aWNpcGFudHMiLCJwYXJ0aWNpcGFudHMiLCJzdHJlYW1Jc0xpdmUiLCJkb25hdGlvbnNEaWZmIiwic3VtRG9uYXRpb25zIiwiZGlzcGxheU5hbWUiLCJsb2NhbGVDb21wYXJlIiwibWFwIiwibWVtYmVyIiwibmV3TWVtYmVyIiwiYXZhdGFySW1hZ2VVUkwiLCJsaW5rcyIsInJlZ2V4IiwibWF0Y2giLCJ0d2l0Y2hVc2VybmFtZSIsIkV4dHJhTGlmZVRlYW0iLCJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ3JvdXAiLCJxdWVyeSIsImdyb3VwRGF0YSIsInVzZVN0YXRlIiwidGVhbSIsInNldFRlYW0iLCJ1c2VFZmZlY3QiLCJmZXRjaFRlYW0iLCJmZXRjaCIsImlkIiwicmVzIiwianNvbiIsImZldGNoZWRUZWFtIiwiZmV0Y2hUZWFtTWVtYmVycyIsImZldGNoZWRUZWFtTWVtYmVycyIsImdldERhdGEiLCJzdG9yYWdlS2V5IiwiY2FjaGVkRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cGRhdGVkQXQiLCJmaXZlTWluc0FnbyIsIm5vdyIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwibmV3VGVhbSIsInRlYW1TdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJzaXRlVGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsInBhZ2VVcmwiLCJhc1BhdGgiLCJoZWFkIiwicGFnZUNvbnRlbnRzIiwiaXNFdmVudExpdmUiLCJzY2hlZHVsZVRpbWVSYW5nZSIsImNoZWNrSWZFdmVudElzTGl2ZSIsImZ1bmRyYWlzaW5nR29hbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDhDQUFELENBQXBCOztBQUVBLElBQU1DLGNBQWMsR0FBRyw0QkFBdkI7QUFDQSxJQUFNQyxRQUFRLGFBQU1ELGNBQU4sU0FBZDs7QUFFQSxTQUFTRSxZQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUM5QixTQUFPQSxRQUFRLENBQ1pDLE1BREksQ0FDRyxVQUFDQyxNQUFELEVBQVk7QUFDbEIsV0FBTyxJQUFJQyxJQUFKLEtBQWEsSUFBSUEsSUFBSixDQUFTRCxNQUFNLENBQUNFLE9BQWhCLENBQXBCO0FBQ0QsR0FISSxFQUlKQyxJQUpJLENBS0gsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDRSxJQUFJSixJQUFKLENBQVNHLENBQUMsQ0FBQ0UsU0FBWCxFQUFzQkMsT0FBdEIsS0FBa0MsSUFBSU4sSUFBSixDQUFTSSxDQUFDLENBQUNDLFNBQVgsRUFBc0JDLE9BQXRCLEVBRHBDO0FBQUEsR0FMRyxDQUFQO0FBUUQ7O0FBRUQsU0FBU0Msb0JBQVQsQ0FBOEJWLFFBQTlCLEVBQXdDO0FBQ3RDLE1BQU1XLEtBQUssR0FBRyxJQUFJUixJQUFKLENBQVNILFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWVEsU0FBckIsQ0FBZDtBQUNBLE1BQU1JLEdBQUcsR0FBRyxJQUFJVCxJQUFKLENBQVNILFFBQVEsQ0FBQ0EsUUFBUSxDQUFDYSxNQUFULEdBQWtCLENBQW5CLENBQVIsQ0FBOEJULE9BQXZDLENBQVo7QUFDQSxT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QUFBQSxLQUNFO0FBQUEsdUNBQWEsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FIRixFQU1HMkMsWUFOSDtBQUFBO0FBQUE7QUFBQSxpbWFBRkYsQ0FERjtBQWdDRCxDQTlNRDs7R0FBTTVDLGE7VUFDV0cscUQ7OztLQURYSCxhOztBQWdOU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuZjU2MzYyMWE5MGFhNWFkY2EwYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy90ZWFtLW1lbWJlci1jYXJkcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9oZWFkZXInO1xyXG5pbXBvcnQgTG9hZGluZ0ljb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9sb2FkaW5nLWljb24nO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgU3RyZWFtZXJTY2hlZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL29yZ2FuaXNtcy9zdHJlYW1lci1zY2hlZHVsZSc7XHJcbmltcG9ydCBjaGVja0lmRXZlbnRJc0xpdmUgZnJvbSAnLi4vLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3QgRVhUUkFfTElGRV9PUkcgPSAnaHR0cHM6Ly93d3cuZXh0cmEtbGlmZS5vcmcnO1xyXG5jb25zdCBBUElfQkFTRSA9IGAke0VYVFJBX0xJRkVfT1JHfS9hcGlgO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgY29uc3QgZG9uYXRpb25zRGlmZiA9IGIuc3VtRG9uYXRpb25zIC0gYS5zdW1Eb25hdGlvbnM7XHJcbiAgICAgIGlmIChkb25hdGlvbnNEaWZmID09PSAwKVxyXG4gICAgICAgIHJldHVybiBhLmRpc3BsYXlOYW1lLmxvY2FsZUNvbXBhcmUoYi5kaXNwbGF5TmFtZSk7XHJcbiAgICAgIHJldHVybiBkb25hdGlvbnNEaWZmO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBsZXQgbmV3TWVtYmVyID0ge1xyXG4gICAgICAgIC4uLm1lbWJlcixcclxuICAgICAgICBhdmF0YXJJbWFnZVVSTDogYGh0dHBzOiR7bWVtYmVyLmF2YXRhckltYWdlVVJMfWAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChtZW1iZXI/LmxpbmtzPy5zdHJlYW0pIHtcclxuICAgICAgICBjb25zdCB7IHN0cmVhbSB9ID0gbWVtYmVyLmxpbmtzO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyZWFtLm1hdGNoKC9jaGFubmVsPSguKikvKTtcclxuICAgICAgICBpZiAocmVnZXg/LlsxXSkge1xyXG4gICAgICAgICAgbmV3TWVtYmVyID0geyAuLi5uZXdNZW1iZXIsIHR3aXRjaFVzZXJuYW1lOiByZWdleFsxXSB9O1xyXG4gICAgICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld01lbWJlcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBFeHRyYUxpZmVUZWFtID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBncm91cCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGFbZ3JvdXBdO1xyXG4gIGNvbnN0IHNjaGVkdWxlID0gZ3JvdXBEYXRhPy5zY2hlZHVsZT8ubGVuZ3RoXHJcbiAgICA/IHNvcnRTY2hlZHVsZShncm91cERhdGEuc2NoZWR1bGUpXHJcbiAgICA6IFtdO1xyXG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKHsgbmFtZSB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfWApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbU1lbWJlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH0vcGFydGljaXBhbnRzYCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtTWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbU1lbWJlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCBzdG9yYWdlS2V5ID0gYCR7Z3JvdXB9LWV4dHJhbGlmZWA7XHJcbiAgICAgIGNvbnN0IGNhY2hlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpIHx8ICd7fScpO1xyXG4gICAgICBpZiAoY2FjaGVkRGF0YT8udXBkYXRlZEF0KSB7XHJcbiAgICAgICAgY29uc3QgZml2ZU1pbnNBZ28gPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gNSAqIDYwMDAwKTtcclxuICAgICAgICBpZiAobmV3IERhdGUoY2FjaGVkRGF0YS51cGRhdGVkQXQpID4gZml2ZU1pbnNBZ28pIHtcclxuICAgICAgICAgIHNldFRlYW0oY2FjaGVkRGF0YS50ZWFtKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmZXRjaFRlYW0oKSwgZmV0Y2hUZWFtTWVtYmVycygpXSk7XHJcbiAgICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHNvcnRQYXJ0aWNpcGFudHMocmVzdWx0c1sxXSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdUZWFtID0ge1xyXG4gICAgICAgIC4uLnJlc3VsdHNbMF0sXHJcbiAgICAgICAgcGFydGljaXBhbnRzLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCB0ZWFtU3RvcmFnZSA9IHtcclxuICAgICAgICB0ZWFtOiBuZXdUZWFtLFxyXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgICAgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGVhbVN0b3JhZ2UpKTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwLCBncm91cERhdGFdKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2FzZGFzZGFzZGFzZCcsIG5hbWUpO1xyXG4gIGNvbnN0IHNpdGVUaXRsZSA9IGAke3RlYW0ubmFtZX0gRXh0cmEgTGlmZSBUZWFtIHwgQ2FsaSBDcmVhdG9yc2A7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgJHt0ZWFtLm5hbWV9IEV4dHJhIExpZmUgVGVhbSBQYWdlLiBXZSdyZSByYWlzaW5nIG1vbmV5IHRvIGhlbHAgb3VyIGxvY2FsIGNoaWxkcmVuJ3MgaG9zcGl0YWwhYDtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9jYWxpY3JlYXRvcnMuY29tJztcclxuICBjb25zdCBwYWdlVXJsID0gYCR7dXJsfSR7cm91dGVyLmFzUGF0aH1gO1xyXG4gIGNvbnN0IGhlYWQgPSAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+e3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIga2V5PVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3RlYW0ubmFtZX0gJHtkZXNjcmlwdGlvbn1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGtleT1cIm9nOnVybFwiIGNvbnRlbnQ9e3BhZ2VVcmx9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAga2V5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Ake3VybH0vZXh0cmFsaWZlLWljb24ucG5nYH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGtleT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjI1NFwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIga2V5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjIxM1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPXtFWFRSQV9MSUZFX09SR30gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICBsZXQgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvYWRpbmdJY29uIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGxldCBpc0V2ZW50TGl2ZSA9IGZhbHNlO1xyXG4gIGlmIChzY2hlZHVsZT8ubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKSB8fCB7fTtcclxuICAgIGlzRXZlbnRMaXZlID0gY2hlY2tJZkV2ZW50SXNMaXZlKFxyXG4gICAgICBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCxcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2UuZW5kXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAodGVhbT8ucGFydGljaXBhbnRzKVxyXG4gICAgcGFnZUNvbnRlbnRzID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxQcm9ncmVzc0JhclxyXG4gICAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgICBwcm9ncmVzc1RleHQ9XCJSYWlzZWRcIlxyXG4gICAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICAgIGlzTW9uZXlcclxuICAgICAgICAgIHdpZHRoPXs4MH1cclxuICAgICAgICAgIGRpc3BsYXlQcm9ncmVzc1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmIGlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSBsaXZlXCI+XHJcbiAgICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgICBzY2hlZHVsZT17c2NoZWR1bGV9XHJcbiAgICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW1NZW1iZXJzXCI+XHJcbiAgICAgICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgICAgIEpvaW4gVGVhbVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGgyPlRlYW0gTWVtYmVyczwvaDI+XHJcbiAgICAgICAgICA8VGVhbU1lbWJlckNhcmRzIHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2NoZWR1bGU/Lmxlbmd0aCA+IDAgJiYgIWlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyZWFtZXJTY2hlZHVsZSB1cGNvbWluZ1wiPlxyXG4gICAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZVxyXG4gICAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2YzJlYjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2EyYzg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbU1lbWJlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RyZWFtZXJTY2hlZHVsZS51cGNvbWluZyBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUudXBjb21pbmcgaDIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWUgfHwgbmFtZX0gLz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+RXh0cmEgTGlmZSBUZWFtPC9oMj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG9tZUxpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cGFnZUNvbnRlbnRzfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJoZWFkZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ob21lTGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZ3JvdXBzID0ge1xyXG4gICAgb2M6IHsgbmFtZTogJ09DIFN0cmVhbWVycycgfSxcclxuICAgIHNkOiB7IG5hbWU6ICdUd2l0Y2ggU2FuIERpZWdvJyB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi4oZ3JvdXBzW3BhcmFtcy5ncm91cF0gfHwge30pIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/molecules/team-member-cards */ "./components/molecules/team-member-cards.jsx");
/* harmony import */ var _components_atoms_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/atoms/header */ "./components/atoms/header.jsx");
/* harmony import */ var _components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/atoms/loading-icon */ "./components/atoms/loading-icon.jsx");
/* harmony import */ var _components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/atoms/progress-bar */ "./components/atoms/progress-bar.jsx");
/* harmony import */ var _components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/organisms/streamer-schedule */ "./components/organisms/streamer-schedule.jsx");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/utils */ "./src/utils.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\pages\\[group]\\extralife.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import Head from 'next/head';








var data = __webpack_require__(/*! ./data.json */ "./pages/[group]/data.json");

var API_BASE = 'https://www.extra-life.org/api';

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
    return a.displayName.localeCompare(b.displayName);
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

var ExtraLifeTeam = function ExtraLifeTeam() {
  _s();

  var _groupData$schedule;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var group = router.query.group;
  var groupData = data[group];
  var schedule = (groupData === null || groupData === void 0 ? void 0 : (_groupData$schedule = groupData.schedule) === null || _groupData$schedule === void 0 ? void 0 : _groupData$schedule.length) ? sortSchedule(groupData.schedule) : [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_BASE, "/teams/").concat(groupData.id));

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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_BASE, "/teams/").concat(groupData.id, "/participants"));

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
        var results, participants, newTeam;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all([fetchTeam(), fetchTeamMembers()]);

              case 2:
                results = _context3.sent;
                //! TEST
                // TODO REMOVE THIS
                // results[1][11].streamIsLive = true;
                //!
                participants = sortParticipants(results[1]);
                newTeam = _objectSpread(_objectSpread({}, results[0]), {}, {
                  participants: participants
                });
                setTeam(newTeam);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _getData.apply(this, arguments);
    }

    if (groupData === null || groupData === void 0 ? void 0 : groupData.id) getData();
  }, [groupData]);
  if (!(team === null || team === void 0 ? void 0 : team.participants)) return __jsx(_components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 35
    }
  });
  var isEventLive = false;

  if (schedule === null || schedule === void 0 ? void 0 : schedule.length) {
    var scheduleTimeRange = getScheduleTimeRange(schedule) || {};
    isEventLive = Object(_src_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(scheduleTimeRange.start, scheduleTimeRange.end);
  }

  return __jsx("div", {
    className: "jsx-2136913643" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(_components_atoms_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: team.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), __jsx("a", {
    href: team.links.page,
    className: "jsx-2136913643" + " " + "teamLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, "Join Team"), __jsx(_components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    progress: team.sumDonations,
    goal: team.fundraisingGoal,
    progressText: "Raised",
    goalText: "Goal",
    isMoney: true,
    width: 80,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) > 0 && isEventLive && __jsx("div", {
    className: "jsx-2136913643" + " " + "streamerSchedule live",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2136913643",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "Live Schedule"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-2136913643" + " " + "teamMembers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "jsx-2136913643",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "Team Members"), __jsx(_components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__["default"], {
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })), (schedule === null || schedule === void 0 ? void 0 : schedule.length) > 0 && !isEventLive && __jsx("div", {
    className: "jsx-2136913643" + " " + "streamerSchedule upcoming",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2136913643",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Upcoming Event"), __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2136913643",
    __self: _this
  }, ".page.jsx-2136913643{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.teamLink.jsx-2136913643{color:#fff;font-size:24px;}.teamMembers.jsx-2136913643{margin-top:40px;text-align:center;}.streamerSchedule.jsx-2136913643{margin-top:40px;width:100%;max-width:800px;}.streamerSchedule.upcoming.jsx-2136913643 h2.jsx-2136913643{margin-left:10%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMklTLEFBR3dCLEFBT0EsQUFJSyxBQUlBLEFBS0EsV0FuQkgsQUFPRSxLQUlHLEFBSVAsQUFLYixVQVpBLENBUWtCLE9BSmxCLFNBS0EsMENBaEJ3Qiw4RUFDRCxxQkFDRiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqYXJlZFxcRG9jdW1lbnRzXFxHaXRIdWJcXENBQ3JlYXRvcnMuY29tXFxwYWdlc1xcW2dyb3VwXVxcZXh0cmFsaWZlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckNhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RlYW0tbWVtYmVyLWNhcmRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2hlYWRlcic7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2xvYWRpbmctaWNvbic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBTdHJlYW1lclNjaGVkdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0cmVhbWVyLXNjaGVkdWxlJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBBUElfQkFTRSA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZy9hcGknO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgcmV0dXJuIGEuZGlzcGxheU5hbWUubG9jYWxlQ29tcGFyZShiLmRpc3BsYXlOYW1lKTtcclxuICAgIH0pXHJcbiAgICAubWFwKChtZW1iZXIpID0+IHtcclxuICAgICAgbGV0IG5ld01lbWJlciA9IHtcclxuICAgICAgICAuLi5tZW1iZXIsXHJcbiAgICAgICAgYXZhdGFySW1hZ2VVUkw6IGBodHRwczoke21lbWJlci5hdmF0YXJJbWFnZVVSTH1gLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAobWVtYmVyPy5saW5rcz8uc3RyZWFtKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdHJlYW0gfSA9IG1lbWJlci5saW5rcztcclxuICAgICAgICBjb25zdCByZWdleCA9IHN0cmVhbS5tYXRjaCgvY2hhbm5lbD0oLiopLyk7XHJcbiAgICAgICAgaWYgKHJlZ2V4Py5bMV0pIHtcclxuICAgICAgICAgIG5ld01lbWJlciA9IHsgLi4ubmV3TWVtYmVyLCB0d2l0Y2hVc2VybmFtZTogcmVnZXhbMV0gfTtcclxuICAgICAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgRXh0cmFMaWZlVGVhbSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdyb3VwIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YVtncm91cF07XHJcbiAgY29uc3Qgc2NoZWR1bGUgPSBncm91cERhdGE/LnNjaGVkdWxlPy5sZW5ndGhcclxuICAgID8gc29ydFNjaGVkdWxlKGdyb3VwRGF0YS5zY2hlZHVsZSlcclxuICAgIDogW107XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtTWVtYmVycygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfS9wYXJ0aWNpcGFudHNgKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW1NZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtTWVtYmVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hUZWFtKCksIGZldGNoVGVhbU1lbWJlcnMoKV0pO1xyXG4gICAgICAvLyEgVEVTVFxyXG4gICAgICAvLyBUT0RPIFJFTU9WRSBUSElTXHJcbiAgICAgIC8vIHJlc3VsdHNbMV1bMTFdLnN0cmVhbUlzTGl2ZSA9IHRydWU7XHJcbiAgICAgIC8vIVxyXG4gICAgICBjb25zdCBwYXJ0aWNpcGFudHMgPSBzb3J0UGFydGljaXBhbnRzKHJlc3VsdHNbMV0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3VGVhbSA9IHtcclxuICAgICAgICAuLi5yZXN1bHRzWzBdLFxyXG4gICAgICAgIHBhcnRpY2lwYW50cyxcclxuICAgICAgfTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwRGF0YV0pO1xyXG4gIGlmICghdGVhbT8ucGFydGljaXBhbnRzKSByZXR1cm4gPExvYWRpbmdJY29uIC8+O1xyXG5cclxuICBsZXQgaXNFdmVudExpdmUgPSBmYWxzZTtcclxuICBpZiAoc2NoZWR1bGU/Lmxlbmd0aCkge1xyXG4gICAgY29uc3Qgc2NoZWR1bGVUaW1lUmFuZ2UgPSBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkgfHwge307XHJcbiAgICBpc0V2ZW50TGl2ZSA9IGNoZWNrSWZFdmVudElzTGl2ZShcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2Uuc3RhcnQsXHJcbiAgICAgIHNjaGVkdWxlVGltZVJhbmdlLmVuZFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWV9IC8+XHJcbiAgICAgIDxhIGhyZWY9e3RlYW0ubGlua3MucGFnZX0gY2xhc3NOYW1lPVwidGVhbUxpbmtcIj5cclxuICAgICAgICBKb2luIFRlYW1cclxuICAgICAgPC9hPlxyXG4gICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICBwcm9ncmVzcz17dGVhbS5zdW1Eb25hdGlvbnN9XHJcbiAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgcHJvZ3Jlc3NUZXh0PVwiUmFpc2VkXCJcclxuICAgICAgICBnb2FsVGV4dD1cIkdvYWxcIlxyXG4gICAgICAgIGlzTW9uZXlcclxuICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoID4gMCAmJiBpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIGxpdmVcIj5cclxuICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtTWVtYmVyc1wiPlxyXG4gICAgICAgIDxoMj5UZWFtIE1lbWJlcnM8L2gyPlxyXG4gICAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmICFpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIHVwY29taW5nXCI+XHJcbiAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1NZW1iZXJzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlLnVwY29taW5nIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));
};

_s(ExtraLifeTeam, "kDlXXRrZHuZkgo2sTus0O9zmC6U=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwiQVBJX0JBU0UiLCJzb3J0U2NoZWR1bGUiLCJzY2hlZHVsZSIsImZpbHRlciIsInN0cmVhbSIsIkRhdGUiLCJ0aW1lRW5kIiwic29ydCIsImEiLCJiIiwidGltZVN0YXJ0IiwiZ2V0VGltZSIsImdldFNjaGVkdWxlVGltZVJhbmdlIiwic3RhcnQiLCJlbmQiLCJsZW5ndGgiLCJzb3J0UGFydGljaXBhbnRzIiwicGFydGljaXBhbnRzIiwic3RyZWFtSXNMaXZlIiwiZGlzcGxheU5hbWUiLCJsb2NhbGVDb21wYXJlIiwibWFwIiwibWVtYmVyIiwibmV3TWVtYmVyIiwiYXZhdGFySW1hZ2VVUkwiLCJsaW5rcyIsInJlZ2V4IiwibWF0Y2giLCJ0d2l0Y2hVc2VybmFtZSIsIkV4dHJhTGlmZVRlYW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJncm91cCIsInF1ZXJ5IiwiZ3JvdXBEYXRhIiwidXNlU3RhdGUiLCJ0ZWFtIiwic2V0VGVhbSIsInVzZUVmZmVjdCIsImZldGNoVGVhbSIsImZldGNoIiwiaWQiLCJyZXMiLCJqc29uIiwiZmV0Y2hlZFRlYW0iLCJmZXRjaFRlYW1NZW1iZXJzIiwiZmV0Y2hlZFRlYW1NZW1iZXJzIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwibmV3VGVhbSIsImlzRXZlbnRMaXZlIiwic2NoZWR1bGVUaW1lUmFuZ2UiLCJjaGVja0lmRXZlbnRJc0xpdmUiLCJuYW1lIiwicGFnZSIsInN1bURvbmF0aW9ucyIsImZ1bmRyYWlzaW5nR29hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMs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c0JBREYsRUFFRSxNQUFDLGdGQUFEO0FBQ0UsWUFBUSxFQUFFbEQsUUFEWjtBQUVFLGVBQVcsRUFBRWtDLElBQUksQ0FBQ25CLFlBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQTNCSjtBQUFBO0FBQUE7QUFBQSxtb1JBREY7QUFpRUQsQ0EvR0Q7O0dBQU1ZLGE7VUFDV0UscUQ7OztLQURYRixhOztBQWlIU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuOGE4YzQ1NmY5NDMyMmRlNzQwNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckNhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RlYW0tbWVtYmVyLWNhcmRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2hlYWRlcic7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2xvYWRpbmctaWNvbic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBTdHJlYW1lclNjaGVkdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0cmVhbWVyLXNjaGVkdWxlJztcclxuaW1wb3J0IGNoZWNrSWZFdmVudElzTGl2ZSBmcm9tICcuLi8uLi9zcmMvdXRpbHMnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBBUElfQkFTRSA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZy9hcGknO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlXHJcbiAgICAuZmlsdGVyKChzdHJlYW0pID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkgPCBuZXcgRGF0ZShzdHJlYW0udGltZUVuZCk7XHJcbiAgICB9KVxyXG4gICAgLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgcmV0dXJuIGEuZGlzcGxheU5hbWUubG9jYWxlQ29tcGFyZShiLmRpc3BsYXlOYW1lKTtcclxuICAgIH0pXHJcbiAgICAubWFwKChtZW1iZXIpID0+IHtcclxuICAgICAgbGV0IG5ld01lbWJlciA9IHtcclxuICAgICAgICAuLi5tZW1iZXIsXHJcbiAgICAgICAgYXZhdGFySW1hZ2VVUkw6IGBodHRwczoke21lbWJlci5hdmF0YXJJbWFnZVVSTH1gLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAobWVtYmVyPy5saW5rcz8uc3RyZWFtKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdHJlYW0gfSA9IG1lbWJlci5saW5rcztcclxuICAgICAgICBjb25zdCByZWdleCA9IHN0cmVhbS5tYXRjaCgvY2hhbm5lbD0oLiopLyk7XHJcbiAgICAgICAgaWYgKHJlZ2V4Py5bMV0pIHtcclxuICAgICAgICAgIG5ld01lbWJlciA9IHsgLi4ubmV3TWVtYmVyLCB0d2l0Y2hVc2VybmFtZTogcmVnZXhbMV0gfTtcclxuICAgICAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgRXh0cmFMaWZlVGVhbSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdyb3VwIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YVtncm91cF07XHJcbiAgY29uc3Qgc2NoZWR1bGUgPSBncm91cERhdGE/LnNjaGVkdWxlPy5sZW5ndGhcclxuICAgID8gc29ydFNjaGVkdWxlKGdyb3VwRGF0YS5zY2hlZHVsZSlcclxuICAgIDogW107XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtTWVtYmVycygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfS9wYXJ0aWNpcGFudHNgKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW1NZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtTWVtYmVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hUZWFtKCksIGZldGNoVGVhbU1lbWJlcnMoKV0pO1xyXG4gICAgICAvLyEgVEVTVFxyXG4gICAgICAvLyBUT0RPIFJFTU9WRSBUSElTXHJcbiAgICAgIC8vIHJlc3VsdHNbMV1bMTFdLnN0cmVhbUlzTGl2ZSA9IHRydWU7XHJcbiAgICAgIC8vIVxyXG4gICAgICBjb25zdCBwYXJ0aWNpcGFudHMgPSBzb3J0UGFydGljaXBhbnRzKHJlc3VsdHNbMV0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3VGVhbSA9IHtcclxuICAgICAgICAuLi5yZXN1bHRzWzBdLFxyXG4gICAgICAgIHBhcnRpY2lwYW50cyxcclxuICAgICAgfTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwRGF0YV0pO1xyXG4gIGlmICghdGVhbT8ucGFydGljaXBhbnRzKSByZXR1cm4gPExvYWRpbmdJY29uIC8+O1xyXG5cclxuICBsZXQgaXNFdmVudExpdmUgPSBmYWxzZTtcclxuICBpZiAoc2NoZWR1bGU/Lmxlbmd0aCkge1xyXG4gICAgY29uc3Qgc2NoZWR1bGVUaW1lUmFuZ2UgPSBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkgfHwge307XHJcbiAgICBpc0V2ZW50TGl2ZSA9IGNoZWNrSWZFdmVudElzTGl2ZShcclxuICAgICAgc2NoZWR1bGVUaW1lUmFuZ2Uuc3RhcnQsXHJcbiAgICAgIHNjaGVkdWxlVGltZVJhbmdlLmVuZFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWV9IC8+XHJcbiAgICAgIDxhIGhyZWY9e3RlYW0ubGlua3MucGFnZX0gY2xhc3NOYW1lPVwidGVhbUxpbmtcIj5cclxuICAgICAgICBKb2luIFRlYW1cclxuICAgICAgPC9hPlxyXG4gICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICBwcm9ncmVzcz17dGVhbS5zdW1Eb25hdGlvbnN9XHJcbiAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgcHJvZ3Jlc3NUZXh0PVwiUmFpc2VkXCJcclxuICAgICAgICBnb2FsVGV4dD1cIkdvYWxcIlxyXG4gICAgICAgIGlzTW9uZXlcclxuICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoID4gMCAmJiBpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIGxpdmVcIj5cclxuICAgICAgICAgIDxoMj5MaXZlIFNjaGVkdWxlPC9oMj5cclxuICAgICAgICAgIDxTdHJlYW1lclNjaGVkdWxlXHJcbiAgICAgICAgICAgIHNjaGVkdWxlPXtzY2hlZHVsZX1cclxuICAgICAgICAgICAgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtTWVtYmVyc1wiPlxyXG4gICAgICAgIDxoMj5UZWFtIE1lbWJlcnM8L2gyPlxyXG4gICAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NjaGVkdWxlPy5sZW5ndGggPiAwICYmICFpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1lclNjaGVkdWxlIHVwY29taW5nXCI+XHJcbiAgICAgICAgICA8aDI+VXBjb21pbmcgRXZlbnQ8L2gyPlxyXG4gICAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGVcclxuICAgICAgICAgICAgc2NoZWR1bGU9e3NjaGVkdWxlfVxyXG4gICAgICAgICAgICB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlYW1NZW1iZXJzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN0cmVhbWVyU2NoZWR1bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJlYW1lclNjaGVkdWxlLnVwY29taW5nIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhTGlmZVRlYW07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbeyBwYXJhbXM6IHsgZ3JvdXA6ICdvYycgfSB9LCB7IHBhcmFtczogeyBncm91cDogJ3NkJyB9IH1dLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
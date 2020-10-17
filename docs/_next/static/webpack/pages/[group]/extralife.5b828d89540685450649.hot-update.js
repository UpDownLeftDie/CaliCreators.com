webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./pages/[group]/extralife.jsx":
/*!*************************************!*\
  !*** ./pages/[group]/extralife.jsx ***!
  \*************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/molecules/team-member-cards */ "./components/molecules/team-member-cards.jsx");
/* harmony import */ var _components_atoms_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/atoms/header */ "./components/atoms/header.jsx");
/* harmony import */ var _components_atoms_loading_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/atoms/loading-icon */ "./components/atoms/loading-icon.jsx");
/* harmony import */ var _components_atoms_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/atoms/progress-bar */ "./components/atoms/progress-bar.jsx");
/* harmony import */ var _components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/organisms/streamer-schedule */ "./components/organisms/streamer-schedule.jsx");




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
  return schedule.sort(function (a, b) {
    return new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime();
  });
}

function getScheduleTimeRange(schedule) {
  var start = new Date(schedule[0].timeStart);
  var end = new Date(schedule[schedule.length - 1].timeEnd);
  return [start, end];
}

function checkIfEventIsLive(schedule) {
  var scheduleTimeRange = getScheduleTimeRange(schedule);
  var now = new Date();
  return scheduleTimeRange.start < now < scheduleTimeRange.end;
}

function sortParticipants(participants) {
  return participants.sort(function (a, b) {
    if (a.streamIsLive && !b.streamIsLive) return -1;
    if (b.streamIsLive && !a.streamIsLive) return 1;
    return a.displayName.localeCompare(b.displayName);
  }).map(function (member) {
    var _member$links;

    if (member === null || member === void 0 ? void 0 : (_member$links = member.links) === null || _member$links === void 0 ? void 0 : _member$links.stream) {
      var stream = member.links.stream;
      var regex = stream.match(/channel=(.*)/);

      if (regex === null || regex === void 0 ? void 0 : regex[1]) {
        var newMember = _objectSpread(_objectSpread({}, member), {}, {
          twitchUsername: regex[1]
        });

        return newMember;
      }
    }

    return member;
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
      lineNumber: 89,
      columnNumber: 35
    }
  });
  var isEventLive = checkIfEventIsLive(schedule);
  return __jsx("div", {
    className: "jsx-492432550" + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(_components_atoms_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: team.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }), __jsx("a", {
    href: team.links.page,
    className: "jsx-492432550" + " " + "teamLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 98,
      columnNumber: 7
    }
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) && isEventLive && __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx(_components_molecules_team_member_cards__WEBPACK_IMPORTED_MODULE_7__["default"], {
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }), (schedule === null || schedule === void 0 ? void 0 : schedule.length) && !isEventLive && __jsx(_components_organisms_streamer_schedule__WEBPACK_IMPORTED_MODULE_11__["default"], {
    schedule: schedule,
    teamMembers: team.participants,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "492432550",
    __self: _this
  }, ".page.jsx-492432550{width:100%;display:grid;justify-items:center;min-width:480px;}.teamLink.jsx-492432550{color:#fff;font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxccGFnZXNcXFtncm91cF1cXGV4dHJhbGlmZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhTLEFBR3dCLEFBTUEsV0FMRSxBQU1FLGFBTE0sRUFNdkIsbUJBTGtCLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXHBhZ2VzXFxbZ3JvdXBdXFxleHRyYWxpZmUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBUZWFtTWVtYmVyQ2FyZHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvdGVhbS1tZW1iZXItY2FyZHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvaGVhZGVyJztcclxuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvbG9hZGluZy1pY29uJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IFN0cmVhbWVyU2NoZWR1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvc3RyZWFtZXItc2NoZWR1bGUnO1xyXG5cclxuY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJyk7XHJcblxyXG5jb25zdCBBUElfQkFTRSA9ICdodHRwczovL3d3dy5leHRyYS1saWZlLm9yZy9hcGknO1xyXG5cclxuZnVuY3Rpb24gc29ydFNjaGVkdWxlKHNjaGVkdWxlKSB7XHJcbiAgcmV0dXJuIHNjaGVkdWxlLnNvcnQoXHJcbiAgICAoYSwgYikgPT4gbmV3IERhdGUoYS50aW1lU3RhcnQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIudGltZVN0YXJ0KS5nZXRUaW1lKClcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2NoZWR1bGVbMF0udGltZVN0YXJ0KTtcclxuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzY2hlZHVsZVtzY2hlZHVsZS5sZW5ndGggLSAxXS50aW1lRW5kKTtcclxuICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmRXZlbnRJc0xpdmUoc2NoZWR1bGUpIHtcclxuICBjb25zdCBzY2hlZHVsZVRpbWVSYW5nZSA9IGdldFNjaGVkdWxlVGltZVJhbmdlKHNjaGVkdWxlKTtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIHJldHVybiBzY2hlZHVsZVRpbWVSYW5nZS5zdGFydCA8IG5vdyA8IHNjaGVkdWxlVGltZVJhbmdlLmVuZDtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydFBhcnRpY2lwYW50cyhwYXJ0aWNpcGFudHMpIHtcclxuICByZXR1cm4gcGFydGljaXBhbnRzXHJcbiAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYS5zdHJlYW1Jc0xpdmUgJiYgIWIuc3RyZWFtSXNMaXZlKSByZXR1cm4gLTE7XHJcbiAgICAgIGlmIChiLnN0cmVhbUlzTGl2ZSAmJiAhYS5zdHJlYW1Jc0xpdmUpIHJldHVybiAxO1xyXG4gICAgICByZXR1cm4gYS5kaXNwbGF5TmFtZS5sb2NhbGVDb21wYXJlKGIuZGlzcGxheU5hbWUpO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKG1lbWJlcikgPT4ge1xyXG4gICAgICBpZiAobWVtYmVyPy5saW5rcz8uc3RyZWFtKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdHJlYW0gfSA9IG1lbWJlci5saW5rcztcclxuICAgICAgICBjb25zdCByZWdleCA9IHN0cmVhbS5tYXRjaCgvY2hhbm5lbD0oLiopLyk7XHJcbiAgICAgICAgaWYgKHJlZ2V4Py5bMV0pIHtcclxuICAgICAgICAgIGNvbnN0IG5ld01lbWJlciA9IHsgLi4ubWVtYmVyLCB0d2l0Y2hVc2VybmFtZTogcmVnZXhbMV0gfTtcclxuICAgICAgICAgIHJldHVybiBuZXdNZW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtZW1iZXI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgRXh0cmFMaWZlVGVhbSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGdyb3VwIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgZ3JvdXBEYXRhID0gZGF0YVtncm91cF07XHJcbiAgY29uc3Qgc2NoZWR1bGUgPSBncm91cERhdGE/LnNjaGVkdWxlPy5sZW5ndGhcclxuICAgID8gc29ydFNjaGVkdWxlKGdyb3VwRGF0YS5zY2hlZHVsZSlcclxuICAgIDogW107XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRX0vdGVhbXMvJHtncm91cERhdGEuaWR9YCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZWFtTWVtYmVycygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfS9wYXJ0aWNpcGFudHNgKTtcclxuICAgICAgY29uc3QgZmV0Y2hlZFRlYW1NZW1iZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGZldGNoZWRUZWFtTWVtYmVycztcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hUZWFtKCksIGZldGNoVGVhbU1lbWJlcnMoKV0pO1xyXG4gICAgICAvLyEgVEVTVFxyXG4gICAgICAvLyBUT0RPIFJFTU9WRSBUSElTXHJcbiAgICAgIC8vIHJlc3VsdHNbMV1bMTFdLnN0cmVhbUlzTGl2ZSA9IHRydWU7XHJcbiAgICAgIC8vIVxyXG4gICAgICBjb25zdCBwYXJ0aWNpcGFudHMgPSBzb3J0UGFydGljaXBhbnRzKHJlc3VsdHNbMV0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3VGVhbSA9IHtcclxuICAgICAgICAuLi5yZXN1bHRzWzBdLFxyXG4gICAgICAgIHBhcnRpY2lwYW50cyxcclxuICAgICAgfTtcclxuICAgICAgc2V0VGVhbShuZXdUZWFtKTtcclxuICAgIH1cclxuICAgIGlmIChncm91cERhdGE/LmlkKSBnZXREYXRhKCk7XHJcbiAgfSwgW2dyb3VwRGF0YV0pO1xyXG4gIGlmICghdGVhbT8ucGFydGljaXBhbnRzKSByZXR1cm4gPExvYWRpbmdJY29uIC8+O1xyXG5cclxuICBjb25zdCBpc0V2ZW50TGl2ZSA9IGNoZWNrSWZFdmVudElzTGl2ZShzY2hlZHVsZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPXt0ZWFtLm5hbWV9IC8+XHJcbiAgICAgIDxhIGhyZWY9e3RlYW0ubGlua3MucGFnZX0gY2xhc3NOYW1lPVwidGVhbUxpbmtcIj5cclxuICAgICAgICBKb2luIFRlYW1cclxuICAgICAgPC9hPlxyXG4gICAgICA8UHJvZ3Jlc3NCYXJcclxuICAgICAgICBwcm9ncmVzcz17dGVhbS5zdW1Eb25hdGlvbnN9XHJcbiAgICAgICAgZ29hbD17dGVhbS5mdW5kcmFpc2luZ0dvYWx9XHJcbiAgICAgICAgcHJvZ3Jlc3NUZXh0PVwiUmFpc2VkXCJcclxuICAgICAgICBnb2FsVGV4dD1cIkdvYWxcIlxyXG4gICAgICAgIGlzTW9uZXlcclxuICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoICYmIGlzRXZlbnRMaXZlICYmIChcclxuICAgICAgICA8U3RyZWFtZXJTY2hlZHVsZSBzY2hlZHVsZT17c2NoZWR1bGV9IHRlYW1NZW1iZXJzPXt0ZWFtLnBhcnRpY2lwYW50c30gLz5cclxuICAgICAgKX1cclxuICAgICAgPFRlYW1NZW1iZXJDYXJkcyB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9IC8+XHJcbiAgICAgIHtzY2hlZHVsZT8ubGVuZ3RoICYmICFpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGUgc2NoZWR1bGU9e3NjaGVkdWxlfSB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0ODBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZWFtTGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRyYUxpZmVUZWFtO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\pages\\\\[group]\\\\extralife.jsx */"));
};

_s(ExtraLifeTeam, "kDlXXRrZHuZkgo2sTus0O9zmC6U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = ExtraLifeTeam;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuanN4Il0sIm5hbWVzIjpbImRhdGEiLCJyZXF1aXJlIiwiQVBJX0JBU0UiLCJzb3J0U2NoZWR1bGUiLCJzY2hlZHVsZSIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJ0aW1lU3RhcnQiLCJnZXRUaW1lIiwiZ2V0U2NoZWR1bGVUaW1lUmFuZ2UiLCJzdGFydCIsImVuZCIsImxlbmd0aCIsInRpbWVFbmQiLCJjaGVja0lmRXZlbnRJc0xpdmUiLCJzY2hlZHVsZVRpbWVSYW5nZSIsIm5vdyIsInNvcnRQYXJ0aWNpcGFudHMiLCJwYXJ0aWNpcGFudHMiLCJzdHJlYW1Jc0xpdmUiLCJkaXNwbGF5TmFtZSIsImxvY2FsZUNvbXBhcmUiLCJtYXAiLCJtZW1iZXIiLCJsaW5rcyIsInN0cmVhbSIsInJlZ2V4IiwibWF0Y2giLCJuZXdNZW1iZXIiLCJ0d2l0Y2hVc2VybmFtZSIsIkV4dHJhTGlmZVRlYW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJncm91cCIsInF1ZXJ5IiwiZ3JvdXBEYXRhIiwidXNlU3RhdGUiLCJ0ZWFtIiwic2V0VGVhbSIsInVzZUVmZmVjdCIsImZldGNoVGVhbSIsImZldGNoIiwiaWQiLCJyZXMiLCJqc29uIiwiZmV0Y2hlZFRlYW0iLCJmZXRjaFRlYW1NZW1iZXJzIiwiZmV0Y2hlZFRlYW1NZW1iZXJzIiwiZ2V0RGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwibmV3VGVhbSIsImlzRXZlbnRMaXZlIiwibmFtZSIsInBhZ2UiLCJzdW1Eb25hdGlvbnMiLCJmdW5kcmFpc2luZ0dvYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsOENBQUQsQ0FBcEI7O0FBRUEsSUFBTUMsUUFB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LFlBQUFBLFFBQVEsQ0FBRVUsTUFBVixLQUFvQnlDLFdBQXBCLElBQ0MsTUFBQyxnRkFBRDtBQUFrQixZQUFRLEVBQUVuRCxRQUE1QjtBQUFzQyxlQUFXLEVBQUVtQyxJQUFJLENBQUNuQixZQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEosRUFnQkUsTUFBQywrRUFBRDtBQUFpQixlQUFXLEVBQUVtQixJQUFJLENBQUNuQixZQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBaUJHLENBQUFoQixRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRVUsTUFBVixLQUFvQixDQUFDeUMsV0FBckIsSUFDQyxNQUFDLGdGQUFEO0FBQWtCLFlBQVEsRUFBRW5ELFFBQTVCO0FBQXNDLGVBQVcsRUFBRW1DLElBQUksQ0FBQ25CLFlBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQko7QUFBQTtBQUFBO0FBQUEsbzBNQURGO0FBcUNELENBNUVEOztHQUFNWSxhO1VBQ1dFLHFEOzs7S0FEWEYsYTtBQThFU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2dyb3VwXS9leHRyYWxpZmUuNWI4MjhkODk1NDA2ODU0NTA2NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVGVhbU1lbWJlckNhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3RlYW0tbWVtYmVyLWNhcmRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2hlYWRlcic7XHJcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL2xvYWRpbmctaWNvbic7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F0b21zL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCBTdHJlYW1lclNjaGVkdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvb3JnYW5pc21zL3N0cmVhbWVyLXNjaGVkdWxlJztcclxuXHJcbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpO1xyXG5cclxuY29uc3QgQVBJX0JBU0UgPSAnaHR0cHM6Ly93d3cuZXh0cmEtbGlmZS5vcmcvYXBpJztcclxuXHJcbmZ1bmN0aW9uIHNvcnRTY2hlZHVsZShzY2hlZHVsZSkge1xyXG4gIHJldHVybiBzY2hlZHVsZS5zb3J0KFxyXG4gICAgKGEsIGIpID0+IG5ldyBEYXRlKGEudGltZVN0YXJ0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLnRpbWVTdGFydCkuZ2V0VGltZSgpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2NoZWR1bGVUaW1lUmFuZ2Uoc2NoZWR1bGUpIHtcclxuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHNjaGVkdWxlWzBdLnRpbWVTdGFydCk7XHJcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoc2NoZWR1bGVbc2NoZWR1bGUubGVuZ3RoIC0gMV0udGltZUVuZCk7XHJcbiAgcmV0dXJuIFtzdGFydCwgZW5kXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZkV2ZW50SXNMaXZlKHNjaGVkdWxlKSB7XHJcbiAgY29uc3Qgc2NoZWR1bGVUaW1lUmFuZ2UgPSBnZXRTY2hlZHVsZVRpbWVSYW5nZShzY2hlZHVsZSk7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICByZXR1cm4gc2NoZWR1bGVUaW1lUmFuZ2Uuc3RhcnQgPCBub3cgPCBzY2hlZHVsZVRpbWVSYW5nZS5lbmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRQYXJ0aWNpcGFudHMocGFydGljaXBhbnRzKSB7XHJcbiAgcmV0dXJuIHBhcnRpY2lwYW50c1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgaWYgKGEuc3RyZWFtSXNMaXZlICYmICFiLnN0cmVhbUlzTGl2ZSkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoYi5zdHJlYW1Jc0xpdmUgJiYgIWEuc3RyZWFtSXNMaXZlKSByZXR1cm4gMTtcclxuICAgICAgcmV0dXJuIGEuZGlzcGxheU5hbWUubG9jYWxlQ29tcGFyZShiLmRpc3BsYXlOYW1lKTtcclxuICAgIH0pXHJcbiAgICAubWFwKChtZW1iZXIpID0+IHtcclxuICAgICAgaWYgKG1lbWJlcj8ubGlua3M/LnN0cmVhbSkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RyZWFtIH0gPSBtZW1iZXIubGlua3M7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBzdHJlYW0ubWF0Y2goL2NoYW5uZWw9KC4qKS8pO1xyXG4gICAgICAgIGlmIChyZWdleD8uWzFdKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdNZW1iZXIgPSB7IC4uLm1lbWJlciwgdHdpdGNoVXNlcm5hbWU6IHJlZ2V4WzFdIH07XHJcbiAgICAgICAgICByZXR1cm4gbmV3TWVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWVtYmVyO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IEV4dHJhTGlmZVRlYW0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBncm91cCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGdyb3VwRGF0YSA9IGRhdGFbZ3JvdXBdO1xyXG4gIGNvbnN0IHNjaGVkdWxlID0gZ3JvdXBEYXRhPy5zY2hlZHVsZT8ubGVuZ3RoXHJcbiAgICA/IHNvcnRTY2hlZHVsZShncm91cERhdGEuc2NoZWR1bGUpXHJcbiAgICA6IFtdO1xyXG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbSgpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9L3RlYW1zLyR7Z3JvdXBEYXRhLmlkfWApO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVGVhbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGVhbU1lbWJlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfS90ZWFtcy8ke2dyb3VwRGF0YS5pZH0vcGFydGljaXBhbnRzYCk7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRUZWFtTWVtYmVycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmZXRjaGVkVGVhbU1lbWJlcnM7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoVGVhbSgpLCBmZXRjaFRlYW1NZW1iZXJzKCldKTtcclxuICAgICAgLy8hIFRFU1RcclxuICAgICAgLy8gVE9ETyBSRU1PVkUgVEhJU1xyXG4gICAgICAvLyByZXN1bHRzWzFdWzExXS5zdHJlYW1Jc0xpdmUgPSB0cnVlO1xyXG4gICAgICAvLyFcclxuICAgICAgY29uc3QgcGFydGljaXBhbnRzID0gc29ydFBhcnRpY2lwYW50cyhyZXN1bHRzWzFdKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld1RlYW0gPSB7XHJcbiAgICAgICAgLi4ucmVzdWx0c1swXSxcclxuICAgICAgICBwYXJ0aWNpcGFudHMsXHJcbiAgICAgIH07XHJcbiAgICAgIHNldFRlYW0obmV3VGVhbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ3JvdXBEYXRhPy5pZCkgZ2V0RGF0YSgpO1xyXG4gIH0sIFtncm91cERhdGFdKTtcclxuICBpZiAoIXRlYW0/LnBhcnRpY2lwYW50cykgcmV0dXJuIDxMb2FkaW5nSWNvbiAvPjtcclxuXHJcbiAgY29uc3QgaXNFdmVudExpdmUgPSBjaGVja0lmRXZlbnRJc0xpdmUoc2NoZWR1bGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgPEhlYWRlciB0aXRsZT17dGVhbS5uYW1lfSAvPlxyXG4gICAgICA8YSBocmVmPXt0ZWFtLmxpbmtzLnBhZ2V9IGNsYXNzTmFtZT1cInRlYW1MaW5rXCI+XHJcbiAgICAgICAgSm9pbiBUZWFtXHJcbiAgICAgIDwvYT5cclxuICAgICAgPFByb2dyZXNzQmFyXHJcbiAgICAgICAgcHJvZ3Jlc3M9e3RlYW0uc3VtRG9uYXRpb25zfVxyXG4gICAgICAgIGdvYWw9e3RlYW0uZnVuZHJhaXNpbmdHb2FsfVxyXG4gICAgICAgIHByb2dyZXNzVGV4dD1cIlJhaXNlZFwiXHJcbiAgICAgICAgZ29hbFRleHQ9XCJHb2FsXCJcclxuICAgICAgICBpc01vbmV5XHJcbiAgICAgICAgd2lkdGg9ezgwfVxyXG4gICAgICAvPlxyXG4gICAgICB7c2NoZWR1bGU/Lmxlbmd0aCAmJiBpc0V2ZW50TGl2ZSAmJiAoXHJcbiAgICAgICAgPFN0cmVhbWVyU2NoZWR1bGUgc2NoZWR1bGU9e3NjaGVkdWxlfSB0ZWFtTWVtYmVycz17dGVhbS5wYXJ0aWNpcGFudHN9IC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxUZWFtTWVtYmVyQ2FyZHMgdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICB7c2NoZWR1bGU/Lmxlbmd0aCAmJiAhaXNFdmVudExpdmUgJiYgKFxyXG4gICAgICAgIDxTdHJlYW1lclNjaGVkdWxlIHNjaGVkdWxlPXtzY2hlZHVsZX0gdGVhbU1lbWJlcnM9e3RlYW0ucGFydGljaXBhbnRzfSAvPlxyXG4gICAgICApfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGVhbUxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0cmFMaWZlVGVhbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
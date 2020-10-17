webpackHotUpdate_N_E("pages/[group]/extralife",{

/***/ "./components/molecules/team-member-cards.jsx":
/*!****************************************************!*\
  !*** ./components/molecules/team-member-cards.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_team_member_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/team-member-card */ "./components/atoms/team-member-card.jsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\jared\\Documents\\GitHub\\CACreators.com\\components\\molecules\\team-member-cards.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var TeamMemberCards = function TeamMemberCards(_ref) {
  var teamMembers = _ref.teamMembers;
  var cards = teamMembers.map(function (teamMember) {
    var displayName = teamMember.displayName,
        avatarImageURL = teamMember.avatarImageURL,
        fundraisingGoal = teamMember.fundraisingGoal,
        isTeamCaptain = teamMember.isTeamCaptain,
        links = teamMember.links,
        streamIsLive = teamMember.streamIsLive,
        sumDonations = teamMember.sumDonations,
        twitchUsername = teamMember.twitchUsername;
    return __jsx(_atoms_team_member_card__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: teamMember.displayName
    }, {
      displayName: displayName,
      avatarImageURL: avatarImageURL,
      fundraisingGoal: fundraisingGoal,
      isTeamCaptain: isTeamCaptain,
      links: links,
      streamIsLive: streamIsLive,
      sumDonations: sumDonations,
      twitchUsername: twitchUsername
    }, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }));
  }) || [];
  return __jsx("div", {
    className: "jsx-3154538592",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, cards, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3154538592",
    __self: _this
  }, ".jsx-3154538592{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXERvY3VtZW50c1xcR2l0SHViXFxDQUNyZWF0b3JzLmNvbVxcY29tcG9uZW50c1xcbW9sZWN1bGVzXFx0ZWFtLW1lbWJlci1jYXJkcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNTLEFBRXdCLDBFQUNFLHlEQUNRLG1HQUNQLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGphcmVkXFxEb2N1bWVudHNcXEdpdEh1YlxcQ0FDcmVhdG9ycy5jb21cXGNvbXBvbmVudHNcXG1vbGVjdWxlc1xcdGVhbS1tZW1iZXItY2FyZHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJyYXlPZiwgc2hhcGUsIHN0cmluZywgbnVtYmVyLCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUZWFtTWVtYmVyQ2FyZCBmcm9tICcuLi9hdG9tcy90ZWFtLW1lbWJlci1jYXJkJztcclxuXHJcbmNvbnN0IFRlYW1NZW1iZXJDYXJkcyA9ICh7IHRlYW1NZW1iZXJzIH0pID0+IHtcclxuICBjb25zdCBjYXJkcyA9XHJcbiAgICB0ZWFtTWVtYmVycy5tYXAoKHRlYW1NZW1iZXIpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGRpc3BsYXlOYW1lLFxyXG4gICAgICAgIGF2YXRhckltYWdlVVJMLFxyXG4gICAgICAgIGZ1bmRyYWlzaW5nR29hbCxcclxuICAgICAgICBpc1RlYW1DYXB0YWluLFxyXG4gICAgICAgIGxpbmtzLFxyXG4gICAgICAgIHN0cmVhbUlzTGl2ZSxcclxuICAgICAgICBzdW1Eb25hdGlvbnMsXHJcbiAgICAgICAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgICAgIH0gPSB0ZWFtTWVtYmVyO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUZWFtTWVtYmVyQ2FyZFxyXG4gICAgICAgICAga2V5PXt0ZWFtTWVtYmVyLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgey4uLntcclxuICAgICAgICAgICAgZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgIGF2YXRhckltYWdlVVJMLFxyXG4gICAgICAgICAgICBmdW5kcmFpc2luZ0dvYWwsXHJcbiAgICAgICAgICAgIGlzVGVhbUNhcHRhaW4sXHJcbiAgICAgICAgICAgIGxpbmtzLFxyXG4gICAgICAgICAgICBzdHJlYW1Jc0xpdmUsXHJcbiAgICAgICAgICAgIHN1bURvbmF0aW9ucyxcclxuICAgICAgICAgICAgdHdpdGNoVXNlcm5hbWUsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KSB8fCBbXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjYXJkc31cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblRlYW1NZW1iZXJDYXJkcy5wcm9wVHlwZXMgPSB7XHJcbiAgdGVhbU1lbWJlcnM6IGFycmF5T2YoXHJcbiAgICBzaGFwZSh7XHJcbiAgICAgIGF2YXRhckltYWdlVVJMOiBzdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgZGlzcGxheU5hbWU6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBmdW5kcmFpc2luZ0dvYWw6IG51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBpc1RlYW1DYXB0YWluOiBib29sLFxyXG4gICAgICBsaW5rczogc2hhcGUoe1xyXG4gICAgICAgIGRvbmF0ZTogc3RyaW5nLFxyXG4gICAgICAgIHBhZ2U6IHN0cmluZyxcclxuICAgICAgICBzdHJlYW06IHN0cmluZyxcclxuICAgICAgfSksXHJcbiAgICAgIHN0cmVhbUlzTGl2ZTogYm9vbCxcclxuICAgICAgc3VtRG9uYXRpb25zOiBudW1iZXIsXHJcbiAgICAgIHR3aXRjaFVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgICB9KVxyXG4gICkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1NZW1iZXJDYXJkcztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jared\\\\Documents\\\\GitHub\\\\CACreators.com\\\\components\\\\molecules\\\\team-member-cards.jsx */"));
};

_c = TeamMemberCards;
TeamMemberCards.propTypes = {
  teamMembers: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    avatarImageURL: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
    displayName: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
    fundraisingGoal: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    isTeamCaptain: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
    links: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
      donate: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
      page: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
      stream: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
    }),
    streamIsLive: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
    sumDonations: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
    twitchUsername: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TeamMemberCards);

var _c;

$RefreshReg$(_c, "TeamMemberCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvdGVhbS1tZW1iZXItY2FyZHMuanN4Il0sIm5hbWVzIjpbIlRlYW1NZW1iZXJDYXJkcyIsInRlYW1NZW1iZXJzIiwiY2FyZHMiLCJtYXAiLCJ0ZWFtTWVtYmVyIiwiZGlzcGxheU5hbWUiLCJhdmF0YXJJbWFnZVVSTCIsImZ1bmRyYWlzaW5nR29hbCIsImlzVGVhbUNhcHRhaW4iLCJsaW5rcyIsInN0cmVhbUlzTGl2ZSIsInN1bURvbmF0aW9ucyIsInR3aXRjaFVzZXJuYW1lIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImJvb2wiLCJkb25hdGUiLCJwYWdlIiwic3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQzNDLE1BQU1DLEtBQUssR0FDVEQsV0FBVyxDQUFDRSxHQUFaLENBQWdCLFVBQUNDLFVBQUQsRUFBZ0I7QUFBQSxRQUU1QkMsV0FGNEIsR0FVMUJELFVBVjBCLENBRTVCQyxXQUY0QjtBQUFBLFFBRzVCQyxjQUg0QixHQVUxQkYsVUFWMEIsQ0FHNUJFLGNBSDRCO0FBQUEsUUFJNUJDLGVBSjRCLEdBVTFCSCxVQVYwQixDQUk1QkcsZUFKNEI7QUFBQSxRQUs1QkMsYUFMNEIsR0FVMUJKLFVBVjBCLENBSzVCSSxhQUw0QjtBQUFBLFFBTTVCQyxLQU40QixHQVUxQkwsVUFWMEIsQ0FNNUJLLEtBTjRCO0FBQUEsUUFPNUJDLFlBUDRCLEdBVTFCTixVQVYwQixDQU81Qk0sWUFQNEI7QUFBQSxRQVE1QkMsWUFSNEIsR0FVMUJQLFVBVjBCLENBUTVCTyxZQVI0QjtBQUFBLFFBUzVCQyxjQVQ0QixHQVUxQlIsVUFWMEIsQ0FTNUJRLGNBVDRCO0FBVzlCLFdBQ0UsTUFBQywrREFBRDtBQUNFLFNBQUcsRUFBRVIsVUFBVSxDQUFDQztBQURsQixPQUVNO0FBQ0ZBLGlCQUFXLEVBQVhBLFdBREU7QUFFRkMsb0JBQWMsRUFBZEEsY0FGRTtBQUdGQyxxQkFBZSxFQUFmQSxlQUhFO0FBSUZDLG1CQUFhLEVBQWJBLGFBSkU7QUFLRkMsV0FBSyxFQUFMQSxLQUxFO0FBTUZDLGtCQUFZLEVBQVpBLFlBTkU7QUFPRkMsa0JBQVksRUFBWkEsWUFQRTtBQVFGQyxvQkFBYyxFQUFkQTtBQVJFLEtBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBZUQsR0ExQkQsS0EwQk0sRUEzQlI7QUE2QkEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1YsS0FESDtBQUFBO0FBQUE7QUFBQSxxakdBREY7QUFhRCxDQTNDRDs7S0FBTUYsZTtBQTZDTkEsZUFBZSxDQUFDYSxTQUFoQixHQUE0QjtBQUMxQlosYUFBVyxFQUFFYSwwREFBTyxDQUNsQkMsd0RBQUssQ0FBQztBQUNKVCxrQkFBYyxFQUFFVSxpREFBTSxDQUFDQyxVQURuQjtBQUVKWixlQUFXLEVBQUVXLGlEQUFNLENBQUNDLFVBRmhCO0FBR0pWLG1CQUFlLEVBQUVXLGlEQUFNLENBQUNELFVBSHBCO0FBSUpULGlCQUFhLEVBQUVXLCtDQUpYO0FBS0pWLFNBQUssRUFBRU0sd0RBQUssQ0FBQztBQUNYSyxZQUFNLEVBQUVKLGlEQURHO0FBRVhLLFVBQUksRUFBRUwsaURBRks7QUFHWE0sWUFBTSxFQUFFTixpREFBTUE7QUFISCxLQUFELENBTFI7QUFVSk4sZ0JBQVksRUFBRVMsK0NBVlY7QUFXSlIsZ0JBQVksRUFBRU8saURBWFY7QUFZSk4sa0JBQWMsRUFBRUksaURBQU1BO0FBWmxCLEdBQUQsQ0FEYSxDQUFQLENBZVhDO0FBaEJ3QixDQUE1QjtBQW1CZWpCLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tncm91cF0vZXh0cmFsaWZlLmM1NDY5NjJjYWUwYTA4OWExMjIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJheU9mLCBzaGFwZSwgc3RyaW5nLCBudW1iZXIsIGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFRlYW1NZW1iZXJDYXJkIGZyb20gJy4uL2F0b21zL3RlYW0tbWVtYmVyLWNhcmQnO1xyXG5cclxuY29uc3QgVGVhbU1lbWJlckNhcmRzID0gKHsgdGVhbU1lbWJlcnMgfSkgPT4ge1xyXG4gIGNvbnN0IGNhcmRzID1cclxuICAgIHRlYW1NZW1iZXJzLm1hcCgodGVhbU1lbWJlcikgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgZGlzcGxheU5hbWUsXHJcbiAgICAgICAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgICAgICAgZnVuZHJhaXNpbmdHb2FsLFxyXG4gICAgICAgIGlzVGVhbUNhcHRhaW4sXHJcbiAgICAgICAgbGlua3MsXHJcbiAgICAgICAgc3RyZWFtSXNMaXZlLFxyXG4gICAgICAgIHN1bURvbmF0aW9ucyxcclxuICAgICAgICB0d2l0Y2hVc2VybmFtZSxcclxuICAgICAgfSA9IHRlYW1NZW1iZXI7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRlYW1NZW1iZXJDYXJkXHJcbiAgICAgICAgICBrZXk9e3RlYW1NZW1iZXIuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICB7Li4ue1xyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgYXZhdGFySW1hZ2VVUkwsXHJcbiAgICAgICAgICAgIGZ1bmRyYWlzaW5nR29hbCxcclxuICAgICAgICAgICAgaXNUZWFtQ2FwdGFpbixcclxuICAgICAgICAgICAgbGlua3MsXHJcbiAgICAgICAgICAgIHN0cmVhbUlzTGl2ZSxcclxuICAgICAgICAgICAgc3VtRG9uYXRpb25zLFxyXG4gICAgICAgICAgICB0d2l0Y2hVc2VybmFtZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pIHx8IFtdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2NhcmRzfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuVGVhbU1lbWJlckNhcmRzLnByb3BUeXBlcyA9IHtcclxuICB0ZWFtTWVtYmVyczogYXJyYXlPZihcclxuICAgIHNoYXBlKHtcclxuICAgICAgYXZhdGFySW1hZ2VVUkw6IHN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBkaXNwbGF5TmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGZ1bmRyYWlzaW5nR29hbDogbnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIGlzVGVhbUNhcHRhaW46IGJvb2wsXHJcbiAgICAgIGxpbmtzOiBzaGFwZSh7XHJcbiAgICAgICAgZG9uYXRlOiBzdHJpbmcsXHJcbiAgICAgICAgcGFnZTogc3RyaW5nLFxyXG4gICAgICAgIHN0cmVhbTogc3RyaW5nLFxyXG4gICAgICB9KSxcclxuICAgICAgc3RyZWFtSXNMaXZlOiBib29sLFxyXG4gICAgICBzdW1Eb25hdGlvbnM6IG51bWJlcixcclxuICAgICAgdHdpdGNoVXNlcm5hbWU6IHN0cmluZyxcclxuICAgIH0pXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbU1lbWJlckNhcmRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
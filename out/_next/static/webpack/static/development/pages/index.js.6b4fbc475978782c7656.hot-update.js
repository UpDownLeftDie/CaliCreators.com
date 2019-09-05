webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\jared\\twitch-socal\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Home = function Home() {
  return __jsx("div", {
    style: {
      minHeight: '100%',
      position: 'relative'
    },
    className: "jsx-1006742245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1006742245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-1006742245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "TwtichSoCal.com"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Kanit:300,400,700|Knewave&display=swap",
    rel: "stylesheet",
    className: "jsx-1006742245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1006742245" + " " + 'hero',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1006742245" + " " + 'title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Twitch SoCal"), __jsx("p", {
    className: "jsx-1006742245" + " " + 'description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "We're the meetup group for Twitch in Southern California!", __jsx("br", {
    className: "jsx-1006742245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "Find the closest one to you or come to all our events!"), __jsx("div", {
    className: "jsx-1006742245" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Twitch La",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "OC Streamers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Twitch SD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1006742245" + " " + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1006742245",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "This site is not affiliated or endorsed by Twitch or Meetup.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1006742245",
    __self: this
  }, "html,body{height:100%;margin:0;padding:0;}body{background-color:#5F3F9F;background-image:url('/static/cubes_@2X.png');font-family:'Kanit',sans-serif,Avenir Next,Avenir, Helvetica,sans-serif;}.hero.jsx-1006742245{width:100%;color:#fff;}.title.jsx-1006742245{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;font-family:'Knewave',sans-serif;text-shadow:0 5px 5px rgba(0,0,0,0.4);}.title.jsx-1006742245,.description.jsx-1006742245{text-align:center;}.description.jsx-1006742245{font-size:22px;font-weight:300;font-family:'Kanit',sans-serif;}.row.jsx-1006742245{max-width:880px;margin:40px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.footer.jsx-1006742245{color:#ddd;position:absolute;bottom:0;width:100%;text-align:center;font-weight:100;font-style:italic;font-family:sans-serif;}@media (max-width:840px){.row.jsx-1006742245{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZ0IsQUFHcUIsQUFLYSxBQU1kLEFBSUYsQUFVUyxBQUdILEFBS0MsQUFPTCxBQVdlLFNBbkNmLEVBSkEsQUE2Qk8sQ0F4Q1QsR0E0Qk8sQ0FLQyxFQVJuQixFQVRtQixDQWZQLENBV1osR0FQZ0QsSUFvQ3JDLEVBdkNYLEFBMkJrQyxFQUtuQixJQWpCSSxDQXlCTixXQUNPLEtBekJILFFBWWpCLEtBY2tCLEVBekJrQixFQVpYLE9BNENBLEtBTkwsa0JBQ0ssQ0ExQmUsS0FlbkIsaUJBWXJCLGdCQTFCQSxHQWJBLDRCQTRDSSxLQWhCMkIsMkhBQy9CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamFyZWRcXHR3aXRjaC1zb2NhbFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJ1xyXG5pbXBvcnQgeyByZWxhdGl2ZSB9IGZyb20gJ3BhdGgnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e3tcclxuICAgIG1pbkhlaWdodDogJzEwMCUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gIH19PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgPHRpdGxlPlR3dGljaFNvQ2FsLmNvbTwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2FuaXQ6MzAwLDQwMCw3MDB8S25ld2F2ZSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvJz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPlR3aXRjaCBTb0NhbDwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPlxyXG4gICAgICAgIFdlJ3JlIHRoZSBtZWV0dXAgZ3JvdXAgZm9yIFR3aXRjaCBpbiBTb3V0aGVybiBDYWxpZm9ybmlhITxici8+RmluZCB0aGUgY2xvc2VzdCBvbmUgdG8geW91IG9yIGNvbWUgdG8gYWxsIG91ciBldmVudHMhXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgIDxDYXJkIG5hbWU9e1wiVHdpdGNoIExhXCJ9IC8+IFxyXG4gICAgICAgIDxDYXJkIG5hbWU9e1wiT0MgU3RyZWFtZXJzXCJ9IC8+IFxyXG4gICAgICAgIDxDYXJkIG5hbWU9e1wiVHdpdGNoIFNEXCJ9IC8+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XHJcbiAgICAgICAgPHA+VGhpcyBzaXRlIGlzIG5vdCBhZmZpbGlhdGVkIG9yIGVuZG9yc2VkIGJ5IFR3aXRjaCBvciBNZWV0dXAuPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICA6Z2xvYmFsKGh0bWwsIGJvZHkpIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVGM0Y5RjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvY3ViZXNfQDJYLnBuZycpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmLCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxyXG4gICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZXJvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLbmV3YXZlJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUsXHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgLnJvdyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcclxuICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\jared\\twitch-socal\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6b4fbc475978782c7656.hot-update.js.map
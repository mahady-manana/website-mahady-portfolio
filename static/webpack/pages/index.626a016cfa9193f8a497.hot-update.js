/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utils */ \"./components/utils/index.ts\");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style */ \"./styles/style.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/fano/Desktop/MANANA/PORTFOLIO/website-mahady/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n  _s();\n\n  var classes = (0,_styles_style__WEBPACK_IMPORTED_MODULE_3__.useStyles)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      dur = _useState2[0],\n      setDur = _useState2[1];\n\n  var Prev = function Prev(event) {\n    event.preventDefault();\n    setDur('.5s');\n    setIndex(function (prev) {\n      return prev === 1 ? 4 : prev - 1;\n    });\n  };\n\n  var Next = function Next(event) {\n    event.preventDefault();\n    setDur('.5s');\n    setIndex(function (prev) {\n      return prev === 4 ? 1 : prev + 1;\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTimeout(function () {\n      return setDur('');\n    }, 300);\n  }, [index]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils__WEBPACK_IMPORTED_MODULE_2__.CustomHead, {\n        title: \"Homepage\",\n        descriptionContent: \"Description content\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_utils__WEBPACK_IMPORTED_MODULE_2__.NormalContainer, {\n        className: classes.root,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"This will work smoothly\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: classes.container,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classes.wrapper,\n            style: {\n              transform: \"translate3d(\".concat(-index * 100, \"px,0,0)\"),\n              transition: \"\".concat(dur)\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: classes.item,\n              style: {\n                background: '#f00'\n              },\n              children: \"Slide item 4 clone\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: classes.item,\n              style: {\n                background: '#000'\n              },\n              children: \"Slide item 1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: classes.item,\n              style: {\n                background: 'rgb(38 86 45)'\n              },\n              children: \"Slide item 2\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: classes.item,\n              style: {\n                background: 'rgb(86 81 38)'\n              },\n              children: \"Slide item 3\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: classes.item,\n              style: {\n                background: '#f00'\n              },\n              children: \"Slide item 4\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: classes.item,\n              style: {\n                background: '#000'\n              },\n              children: \"Slide item 1 clone\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: Prev,\n            children: \"Prev\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: Next,\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"NDKpzbsNm7e8Q1TPrBaoZMsYP+o=\", false, function () {\n  return [_styles_style__WEBPACK_IMPORTED_MODULE_3__.useStyles];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJkdXIiLCJzZXREdXIiLCJQcmV2IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByZXYiLCJOZXh0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInJvb3QiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsIml0ZW0iLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHQyx3REFBUyxFQUF6Qjs7QUFENkIsa0JBRUhDLCtDQUFRLENBQUMsQ0FBRCxDQUZMO0FBQUEsTUFFdEJDLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFBQSxtQkFHUEYsK0NBQVEsQ0FBQyxFQUFELENBSEQ7QUFBQSxNQUd0QkcsR0FIc0I7QUFBQSxNQUdqQkMsTUFIaUI7O0FBSzdCLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBZ0Q7QUFDM0RBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSCxVQUFNLENBQUMsS0FBRCxDQUFOO0FBQ0FGLFlBQVEsQ0FBQyxVQUFDTSxJQUFEO0FBQUEsYUFBV0EsSUFBSSxLQUFLLENBQVQsR0FBYSxDQUFiLEdBQWlCQSxJQUFJLEdBQUcsQ0FBbkM7QUFBQSxLQUFELENBQVI7QUFDRCxHQUpEOztBQUtBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNILEtBQUQsRUFBZ0Q7QUFDM0RBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSCxVQUFNLENBQUMsS0FBRCxDQUFOO0FBQ0FGLFlBQVEsQ0FBQyxVQUFDTSxJQUFEO0FBQUEsYUFBV0EsSUFBSSxLQUFLLENBQVQsR0FBYSxDQUFiLEdBQWlCQSxJQUFJLEdBQUcsQ0FBbkM7QUFBQSxLQUFELENBQVI7QUFDRCxHQUpEOztBQUtBRSxrREFBUyxDQUFDLFlBQU07QUFDZEMsY0FBVSxDQUFDO0FBQUEsYUFBTVAsTUFBTSxDQUFDLEVBQUQsQ0FBWjtBQUFBLEtBQUQsRUFBbUIsR0FBbkIsQ0FBVjtBQUNELEdBRlEsRUFFTixDQUFDSCxLQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSw4REFBQyx5REFBRDtBQUNFLGFBQUssRUFBQyxVQURSO0FBRUUsMEJBQWtCLEVBQUM7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQUEsNkJBQ0UsOERBQUMsOERBQUQ7QUFBaUIsaUJBQVMsRUFBRUgsT0FBTyxDQUFDYyxJQUFwQztBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFFZCxPQUFPLENBQUNlLFNBQXhCO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFZixPQUFPLENBQUNnQixPQURyQjtBQUVFLGlCQUFLLEVBQUU7QUFDTEMsdUJBQVMsd0JBQWlCLENBQUNkLEtBQUQsR0FBUyxHQUExQixZQURKO0FBRUxlLHdCQUFVLFlBQUtiLEdBQUw7QUFGTCxhQUZUO0FBQUEsb0NBT0U7QUFDRSx1QkFBUyxFQUFFTCxPQUFPLENBQUNtQixJQURyQjtBQUVFLG1CQUFLLEVBQUU7QUFBRUMsMEJBQVUsRUFBRTtBQUFkLGVBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsZUFhRTtBQUNFLHVCQUFTLEVBQUVwQixPQUFPLENBQUNtQixJQURyQjtBQUVFLG1CQUFLLEVBQUU7QUFBRUMsMEJBQVUsRUFBRTtBQUFkLGVBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkYsZUFtQkU7QUFDRSx1QkFBUyxFQUFFcEIsT0FBTyxDQUFDbUIsSUFEckI7QUFFRSxtQkFBSyxFQUFFO0FBQUVDLDBCQUFVLEVBQUU7QUFBZCxlQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5CRixlQXlCRTtBQUNFLHVCQUFTLEVBQUVwQixPQUFPLENBQUNtQixJQURyQjtBQUVFLG1CQUFLLEVBQUU7QUFBRUMsMEJBQVUsRUFBRTtBQUFkLGVBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekJGLGVBK0JFO0FBQ0UsdUJBQVMsRUFBRXBCLE9BQU8sQ0FBQ21CLElBRHJCO0FBRUUsbUJBQUssRUFBRTtBQUFFQywwQkFBVSxFQUFFO0FBQWQsZUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEvQkYsZUFxQ0U7QUFDRSx1QkFBUyxFQUFFcEIsT0FBTyxDQUFDbUIsSUFEckI7QUFFRSxtQkFBSyxFQUFFO0FBQUVDLDBCQUFVLEVBQUU7QUFBZCxlQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBa0RFO0FBQUEsa0NBQ0U7QUFBUSxtQkFBTyxFQUFFYixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQVEsbUJBQU8sRUFBRUksSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQSxrQkFERjtBQW1FRDs7R0FyRnVCWixJO1VBQ05FLG9EOzs7S0FETUYsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ3VzdG9tSGVhZCwgTm9ybWFsQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy91dGlscyc7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvc3R5bGUnO1xuaW1wb3J0IHsgVGVzdCB9IGZyb20gJ0BzaXR5bS9mdXR1cmUtc2xpZGVyL3BhY2thZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbZHVyLCBzZXREdXJdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFByZXYgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXREdXIoJy41cycpO1xuICAgIHNldEluZGV4KChwcmV2KSA9PiAocHJldiA9PT0gMSA/IDQgOiBwcmV2IC0gMSkpO1xuICB9O1xuICBjb25zdCBOZXh0ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0RHVyKCcuNXMnKTtcbiAgICBzZXRJbmRleCgocHJldikgPT4gKHByZXYgPT09IDQgPyAxIDogcHJldiArIDEpKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldER1cignJyksIDMwMCk7XG4gIH0sIFtpbmRleF0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Q3VzdG9tSGVhZFxuICAgICAgICAgIHRpdGxlPVwiSG9tZXBhZ2VcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uQ29udGVudD1cIkRlc2NyaXB0aW9uIGNvbnRlbnRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPE5vcm1hbENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UaGlzIHdpbGwgd29yayBzbW9vdGhseTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHstaW5kZXggKiAxMDB9cHgsMCwwKWAsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYCR7ZHVyfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2YwMCcgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNsaWRlIGl0ZW0gNCBjbG9uZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMDAwJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2xpZGUgaXRlbSAxXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigzOCA4NiA0NSknIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTbGlkZSBpdGVtIDJcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDg2IDgxIDM4KScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNsaWRlIGl0ZW0gM1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZjAwJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2xpZGUgaXRlbSA0XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJyMwMDAnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTbGlkZSBpdGVtIDEgY2xvbmVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtQcmV2fT5QcmV2PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e05leHR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Ob3JtYWxDb250YWluZXI+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
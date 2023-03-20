"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utility_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utility/socket */ \"./src/utility/socket.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [isSocketConnected, setIsSocketConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utility_socket__WEBPACK_IMPORTED_MODULE_2__.socket.connected);\n    const [notificationList, setNotificationList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function onConnect() {\n            setIsSocketConnected(true);\n        }\n        function onDisconnect() {\n            setIsSocketConnected(false);\n        }\n        function onMessage(value) {\n            console.log(value);\n            setNotificationList((previous)=>[\n                    ...previous,\n                    value\n                ]);\n        }\n        _utility_socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"connect\", onConnect);\n        _utility_socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"disconnect\", onDisconnect);\n        _utility_socket__WEBPACK_IMPORTED_MODULE_2__.socket.on(\"broadcast\", onMessage);\n        return ()=>{\n            _utility_socket__WEBPACK_IMPORTED_MODULE_2__.socket.off(\"connect\", onConnect);\n            _utility_socket__WEBPACK_IMPORTED_MODULE_2__.socket.off(\"disconnect\", onDisconnect);\n            _utility_socket__WEBPACK_IMPORTED_MODULE_2__.socket.off(\"broadcast\", onMessage);\n        };\n    }, []);\n    /*if (websocket){\n    websocket.onopen = function(e: any) {\n      console.log(\"[open] Connection established\");\n      console.log(\"Sending to server\");\n      websocket.send(\"My name is John\");\n    };\n\n    websocket.onclose = function(event: any) {\n      if (event.wasClean) {\n        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);\n      } else {\n        console.log('[close] Connection died');\n      }\n    };\n\n    websocket.onerror = function(error: any) {\n      console.log(error);\n    };\n  }*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n                fileName: \"/Users/aakashsaha/workplace/projects/work-genius/web-app/src/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/aakashsaha/workplace/projects/work-genius/web-app/src/pages/index.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"/GtF4FQZ6v2OlTeZ29GKhnNm8eo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkM7QUFFSztBQUNSO0FBRTNCLFNBQVNLLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR0osK0NBQVFBLENBQUNDLDZEQUFnQjtJQUMzRSxNQUFNLENBQUNLLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFFckVELGdEQUFTQSxDQUFDLElBQU07UUFDZCxTQUFTUyxZQUFZO1lBQ25CSixxQkFBcUIsSUFBSTtRQUMzQjtRQUVBLFNBQVNLLGVBQWU7WUFDdEJMLHFCQUFxQixLQUFLO1FBQzVCO1FBRUEsU0FBU00sVUFBVUMsS0FBYSxFQUFFO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pKLG9CQUFvQk8sQ0FBQUEsV0FBWTt1QkFBSUE7b0JBQVVIO2lCQUFNO1FBQ3REO1FBRUFWLHNEQUFTLENBQUMsV0FBV087UUFDckJQLHNEQUFTLENBQUMsY0FBY1E7UUFDeEJSLHNEQUFTLENBQUMsYUFBYVM7UUFFdkIsT0FBTyxJQUFNO1lBQ1hULHVEQUFVLENBQUMsV0FBV087WUFDdEJQLHVEQUFVLENBQUMsY0FBY1E7WUFDekJSLHVEQUFVLENBQUMsYUFBYVM7UUFDMUI7SUFDRixHQUFHLEVBQUU7SUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JDLEdBRUQscUJBQ0U7a0JBQ0UsNEVBQUNPO1lBQUlDLFdBQVdyQiw0RUFBa0I7c0JBQzlCLDRFQUFDdUI7Ozs7Ozs7Ozs7O0FBSVgsQ0FBQztHQXZEdUJsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBOb3RpZmljYXRpb25WaWV3ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uVmlld2VyL05vdGlmaWNhdGlvblZpZXdlcidcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tICdAL3V0aWxpdHkvc29ja2V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lzU29ja2V0Q29ubmVjdGVkLCBzZXRJc1NvY2tldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShzb2NrZXQuY29ubmVjdGVkKTtcbiAgY29uc3QgW25vdGlmaWNhdGlvbkxpc3QsIHNldE5vdGlmaWNhdGlvbkxpc3RdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9uQ29ubmVjdCgpIHtcbiAgICAgIHNldElzU29ja2V0Q29ubmVjdGVkKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGlzY29ubmVjdCgpIHtcbiAgICAgIHNldElzU29ja2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgc2V0Tm90aWZpY2F0aW9uTGlzdChwcmV2aW91cyA9PiBbLi4ucHJldmlvdXMsIHZhbHVlXSk7XG4gICAgfVxuXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgIHNvY2tldC5vbignYnJvYWRjYXN0Jywgb25NZXNzYWdlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQub2ZmKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgIHNvY2tldC5vZmYoJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgICAgc29ja2V0Lm9mZignYnJvYWRjYXN0Jywgb25NZXNzYWdlKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIC8qaWYgKHdlYnNvY2tldCl7XG4gICAgd2Vic29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uKGU6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coXCJbb3Blbl0gQ29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyB0byBzZXJ2ZXJcIik7XG4gICAgICB3ZWJzb2NrZXQuc2VuZChcIk15IG5hbWUgaXMgSm9oblwiKTtcbiAgICB9O1xuXG4gICAgd2Vic29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbihldmVudDogYW55KSB7XG4gICAgICBpZiAoZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coYFtjbG9zZV0gQ29ubmVjdGlvbiBjbG9zZWQgY2xlYW5seSwgY29kZT0ke2V2ZW50LmNvZGV9IHJlYXNvbj0ke2V2ZW50LnJlYXNvbn1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbY2xvc2VdIENvbm5lY3Rpb24gZGllZCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3ZWJzb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9O1xuICB9Ki9cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDx1bD48L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzb2NrZXQiLCJIb21lIiwiaXNTb2NrZXRDb25uZWN0ZWQiLCJzZXRJc1NvY2tldENvbm5lY3RlZCIsImNvbm5lY3RlZCIsIm5vdGlmaWNhdGlvbkxpc3QiLCJzZXROb3RpZmljYXRpb25MaXN0Iiwib25Db25uZWN0Iiwib25EaXNjb25uZWN0Iiwib25NZXNzYWdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicHJldmlvdXMiLCJvbiIsIm9mZiIsImRpdiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
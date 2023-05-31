"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_otp-email_tsx";
exports.ids = ["emails_otp-email_tsx"];
exports.modules = {

/***/ "./emails/otp-email.tsx":
/*!******************************!*\
  !*** ./emails/otp-email.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"renderOtpEmail\": () => (/* binding */ renderOtpEmail)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_email_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-email/render */ \"@react-email/render\");\n/* harmony import */ var _react_email_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_email_render__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst OTPEmail = ({ otp =\"123456\"  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Preview, {\n                children: \"One time password\"\n            }, void 0, false, {\n                fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                    style: container,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                            style: h1,\n                            children: \"Login to CompanyName\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                marginBottom: \"14px\"\n                            },\n                            children: \"Your one time password is\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            style: code,\n                            children: otp\n                        }, void 0, false, {\n                            fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                color: \"#ababab\",\n                                marginTop: \"12px\",\n                                marginBottom: \"0px\"\n                            },\n                            children: \"Copy and paste this code to login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            style: {\n                                ...text,\n                                color: \"#ababab\",\n                                marginTop: \"14px\",\n                                marginBottom: \"16px\"\n                            },\n                            children: \"If you didn't try to login, you can safely ignore this email.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, undefined);\nconst renderOtpEmail = ({ otp  })=>{\n    return (0,_react_email_render__WEBPACK_IMPORTED_MODULE_2__.render)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OTPEmail, {\n        otp: otp\n    }, void 0, false, {\n        fileName: \"/Users/rajat/experiments/sst-app/packages/frontend-emails/.react-email/emails/otp-email.tsx\",\n        lineNumber: 57,\n        columnNumber: 17\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OTPEmail);\nconst main = {\n    backgroundColor: \"#ffffff\"\n};\nconst container = {\n    paddingLeft: \"12px\",\n    paddingRight: \"12px\",\n    margin: \"0 auto\"\n};\nconst h1 = {\n    color: \"#333\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"24px\",\n    fontWeight: \"bold\",\n    margin: \"40px 0\",\n    padding: \"0\"\n};\nconst text = {\n    color: \"#333\",\n    fontFamily: \"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif\",\n    fontSize: \"14px\",\n    margin: \"24px 0\"\n};\nconst code = {\n    display: \"inline-block\",\n    padding: \"16px 3%\",\n    width: \"90.5%\",\n    backgroundColor: \"#f4f4f4\",\n    borderRadius: \"5px\",\n    border: \"1px solid #eee\",\n    color: \"#333\",\n    fontSize: \"24px\",\n    letterSpacing: \"2px\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbWFpbHMvb3RwLWVtYWlsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFVaUM7QUFDWTtBQUNkO0FBTS9CLE1BQU1TLFdBQVcsQ0FBQyxFQUFFQyxLQUFNLFNBQVEsRUFBa0IsaUJBQ2xELDhEQUFDTix5REFBSUE7OzBCQUNILDhEQUFDRix5REFBSUE7Ozs7OzBCQUNMLDhEQUFDRyw0REFBT0E7MEJBQUM7Ozs7OzswQkFDVCw4REFBQ0wseURBQUlBO2dCQUFDVyxPQUFPQzswQkFDWCw0RUFBQ1gsOERBQVNBO29CQUFDVSxPQUFPRTs7c0NBQ2hCLDhEQUFDViw0REFBT0E7NEJBQUNRLE9BQU9HO3NDQUFJOzs7Ozs7c0NBQ3BCLDhEQUFDUix5REFBSUE7NEJBQUNLLE9BQU87Z0NBQUUsR0FBR0ksSUFBSTtnQ0FBRUMsY0FBYzs0QkFBTztzQ0FBRzs7Ozs7O3NDQUdoRCw4REFBQ0M7NEJBQUtOLE9BQU9NO3NDQUFPUDs7Ozs7O3NDQUNwQiw4REFBQ0oseURBQUlBOzRCQUNISyxPQUFPO2dDQUNMLEdBQUdJLElBQUk7Z0NBQ1BHLE9BQU87Z0NBQ1BDLFdBQVc7Z0NBQ1hILGNBQWM7NEJBQ2hCO3NDQUNEOzs7Ozs7c0NBR0QsOERBQUNWLHlEQUFJQTs0QkFDSEssT0FBTztnQ0FDTCxHQUFHSSxJQUFJO2dDQUNQRyxPQUFPO2dDQUNQQyxXQUFXO2dDQUNYSCxjQUFjOzRCQUNoQjtzQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTRixNQUFNSSxpQkFBaUIsQ0FBQyxFQUFDVixJQUFHLEVBQWlCLEdBQUs7SUFDdkQsT0FBT0gsMkRBQU1BLGVBQUMsOERBQUNFO1FBQVNDLEtBQUtBOzs7Ozs7QUFDL0IsRUFBQztBQUVELGlFQUFlRCxRQUFRQSxFQUFDO0FBRXhCLE1BQU1HLE9BQU87SUFDWFMsaUJBQWlCO0FBQ25CO0FBRUEsTUFBTVIsWUFBWTtJQUNoQlMsYUFBYTtJQUNiQyxjQUFjO0lBQ2RDLFFBQVE7QUFDVjtBQUVBLE1BQU1WLEtBQUs7SUFDVEksT0FBTztJQUNQTyxZQUNFO0lBQ0ZDLFVBQVU7SUFDVkMsWUFBWTtJQUNaSCxRQUFRO0lBQ1JJLFNBQVM7QUFDWDtBQUVBLE1BQU1iLE9BQU87SUFDWEcsT0FBTztJQUNQTyxZQUNFO0lBQ0ZDLFVBQVU7SUFDVkYsUUFBUTtBQUNWO0FBRUEsTUFBTVAsT0FBTztJQUNYWSxTQUFTO0lBQ1RELFNBQVM7SUFDVEUsT0FBTztJQUNQVCxpQkFBaUI7SUFDakJVLGNBQWM7SUFDZEMsUUFBUTtJQUNSZCxPQUFPO0lBQ1BRLFVBQVU7SUFDVk8sZUFBZTtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLXByZXZpZXcvLi9lbWFpbHMvb3RwLWVtYWlsLnRzeD83MDY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRhaW5lcixcbiAgSGVhZCxcbiAgSGVhZGluZyxcbiAgSHRtbCxcbiAgSW1nLFxuICBMaW5rLFxuICBQcmV2aWV3LFxuICBUZXh0LFxufSBmcm9tICdAcmVhY3QtZW1haWwvY29tcG9uZW50cyc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdAcmVhY3QtZW1haWwvcmVuZGVyJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIE9UUEVtYWlsUHJvcHMge1xuICBvdHA6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuY29uc3QgT1RQRW1haWwgPSAoeyBvdHAgPSAnMTIzNDU2JyB9IDogT1RQRW1haWxQcm9wcykgPT4gKFxuICA8SHRtbD5cbiAgICA8SGVhZCAvPlxuICAgIDxQcmV2aWV3Pk9uZSB0aW1lIHBhc3N3b3JkPC9QcmV2aWV3PlxuICAgIDxCb2R5IHN0eWxlPXttYWlufT5cbiAgICAgIDxDb250YWluZXIgc3R5bGU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkaW5nIHN0eWxlPXtoMX0+TG9naW4gdG8gQ29tcGFueU5hbWU8L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IHN0eWxlPXt7IC4uLnRleHQsIG1hcmdpbkJvdHRvbTogJzE0cHgnIH19PlxuICAgICAgICAgIFlvdXIgb25lIHRpbWUgcGFzc3dvcmQgaXNcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Y29kZSBzdHlsZT17Y29kZX0+e290cH08L2NvZGU+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRleHQsXG4gICAgICAgICAgICBjb2xvcjogJyNhYmFiYWInLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTJweCcsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwcHgnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENvcHkgYW5kIHBhc3RlIHRoaXMgY29kZSB0byBsb2dpblxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRleHQsXG4gICAgICAgICAgICBjb2xvcjogJyNhYmFiYWInLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTRweCcsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgSWYgeW91IGRpZG4mYXBvczt0IHRyeSB0byBsb2dpbiwgeW91IGNhbiBzYWZlbHkgaWdub3JlIHRoaXMgZW1haWwuXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm9keT5cbiAgPC9IdG1sPlxuKTtcblxuXG5leHBvcnQgY29uc3QgcmVuZGVyT3RwRW1haWwgPSAoe290cH0gOiBPVFBFbWFpbFByb3BzKSA9PiB7XG4gIHJldHVybiByZW5kZXIoPE9UUEVtYWlsIG90cD17b3RwfSAvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgT1RQRW1haWw7XG5cbmNvbnN0IG1haW4gPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICBwYWRkaW5nTGVmdDogJzEycHgnLFxuICBwYWRkaW5nUmlnaHQ6ICcxMnB4JyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbn07XG5cbmNvbnN0IGgxID0ge1xuICBjb2xvcjogJyMzMzMnLFxuICBmb250RmFtaWx5OlxuICAgIFwiLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZlwiLFxuICBmb250U2l6ZTogJzI0cHgnLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIG1hcmdpbjogJzQwcHggMCcsXG4gIHBhZGRpbmc6ICcwJyxcbn07XG5cbmNvbnN0IHRleHQgPSB7XG4gIGNvbG9yOiAnIzMzMycsXG4gIGZvbnRGYW1pbHk6XG4gICAgXCItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIG1hcmdpbjogJzI0cHggMCcsXG59O1xuXG5jb25zdCBjb2RlID0ge1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgcGFkZGluZzogJzE2cHggMyUnLFxuICB3aWR0aDogJzkwLjUlJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2Y0ZjRmNCcsXG4gIGJvcmRlclJhZGl1czogJzVweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgY29sb3I6ICcjMzMzJyxcbiAgZm9udFNpemU6ICcyNHB4JyxcbiAgbGV0dGVyU3BhY2luZzogJzJweCdcbn07XG4iXSwibmFtZXMiOlsiQm9keSIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkaW5nIiwiSHRtbCIsIlByZXZpZXciLCJUZXh0IiwicmVuZGVyIiwiUmVhY3QiLCJPVFBFbWFpbCIsIm90cCIsInN0eWxlIiwibWFpbiIsImNvbnRhaW5lciIsImgxIiwidGV4dCIsIm1hcmdpbkJvdHRvbSIsImNvZGUiLCJjb2xvciIsIm1hcmdpblRvcCIsInJlbmRlck90cEVtYWlsIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW4iLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicGFkZGluZyIsImRpc3BsYXkiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImxldHRlclNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./emails/otp-email.tsx\n");

/***/ })

};
;
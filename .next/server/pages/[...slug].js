"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[...slug]";
exports.ids = ["pages/[...slug]"];
exports.modules = {

/***/ "./pages/[...slug].jsx":
/*!*****************************!*\
  !*** ./pages/[...slug].jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontaid_content_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontaid.content.json */ \"./frontaid.content.json\");\n\n\n\nfunction Page({ page  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        page.title,\n                        \" | \",\n                        _frontaid_content_json__WEBPACK_IMPORTED_MODULE_2__.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/thain/documents/thain-site/pages/[...slug].jsx\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/thain/documents/thain-site/pages/[...slug].jsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: page.title\n            }, void 0, false, {\n                fileName: \"/home/thain/documents/thain-site/pages/[...slug].jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: page.content\n                }\n            }, void 0, false, {\n                fileName: \"/home/thain/documents/thain-site/pages/[...slug].jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\nasync function getStaticPaths() {\n    const paths = _frontaid_content_json__WEBPACK_IMPORTED_MODULE_2__.pages.map((page)=>{\n        const slug = page.path.split(\"/\").slice(1);\n        return {\n            params: {\n                slug\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: true\n    };\n}\nasync function getStaticProps({ params  }) {\n    const currentPath = `/${params.slug.join(\"/\")}`;\n    const page1 = _frontaid_content_json__WEBPACK_IMPORTED_MODULE_2__.pages.find((page)=>page.path === currentPath\n    ) || {\n        notfound: true\n    };\n    return {\n        props: {\n            page: page1\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDa0I7QUFFaEMsU0FBU0UsSUFBSSxDQUFDLEVBQUNDLElBQUksR0FBQyxFQUFFO0lBQ25DLHFCQUNJOzswQkFDRSw4REFBQ0gsa0RBQUk7MEJBQ0gsNEVBQUNJLE9BQUs7O3dCQUFFRCxJQUFJLENBQUNDLEtBQUs7d0JBQUMsS0FBRzt3QkFBQ0gseURBQWE7Ozs7Ozt3QkFBUzs7Ozs7b0JBQ3hDOzBCQUNQLDhEQUFDSSxJQUFFOzBCQUFFRixJQUFJLENBQUNDLEtBQUs7Ozs7O29CQUFNOzBCQUNyQiw4REFBQ0UsS0FBRztnQkFBQ0MsdUJBQXVCLEVBQUU7b0JBQUNDLE1BQU0sRUFBRUwsSUFBSSxDQUFDRixPQUFPO2lCQUFDOzs7OztvQkFBUTs7b0JBQzNELENBQ0w7Q0FDSDtBQUVNLGVBQWVRLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxLQUFLLEdBQUdULDZEQUFpQixDQUFDRSxDQUFBQSxJQUFJLEdBQUk7UUFDdEMsTUFBTVUsSUFBSSxHQUFHVixJQUFJLENBQUNXLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU87WUFBQ0MsTUFBTSxFQUFFO2dCQUFDSixJQUFJO2FBQUM7U0FBQyxDQUFDO0tBQ3pCLENBQUM7SUFDRixPQUFPO1FBQUNILEtBQUs7UUFBRVEsUUFBUSxFQUFFLElBQUk7S0FBQyxDQUFDO0NBQ2hDO0FBRU0sZUFBZUMsY0FBYyxDQUFDLEVBQUNGLE1BQU0sR0FBQyxFQUFFO0lBQzdDLE1BQU1HLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRUgsTUFBTSxDQUFDSixJQUFJLENBQUNRLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE1BQU1sQixLQUFJLEdBQUdGLDhEQUFrQixDQUFDRSxDQUFBQSxJQUFJLEdBQUlBLElBQUksQ0FBQ1csSUFBSSxLQUFLTSxXQUFXO0lBQUEsQ0FBQyxJQUFJO1FBQUNHLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDdEYsT0FBTztRQUFDQyxLQUFLLEVBQUU7WUFBQ3JCLElBQUksRUFBSkEsS0FBSTtTQUFDO0tBQUMsQ0FBQztDQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250YWlkLW5leHQvLi9wYWdlcy9bLi4uc2x1Z10uanN4PzM5ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBjb250ZW50IGZyb20gJy4uL2Zyb250YWlkLmNvbnRlbnQuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2Uoe3BhZ2V9KSB7XG4gIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3BhZ2UudGl0bGV9IHwge2NvbnRlbnQudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aDE+e3BhZ2UudGl0bGV9PC9oMT5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcGFnZS5jb250ZW50fX0+PC9kaXY+XG4gICAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGNvbnRlbnQucGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgIGNvbnN0IHNsdWcgPSBwYWdlLnBhdGguc3BsaXQoJy8nKS5zbGljZSgxKTtcbiAgICByZXR1cm4ge3BhcmFtczoge3NsdWd9fTtcbiAgfSk7XG4gIHJldHVybiB7cGF0aHMsIGZhbGxiYWNrOiB0cnVlfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gYC8ke3BhcmFtcy5zbHVnLmpvaW4oJy8nKX1gO1xuICBjb25zdCBwYWdlID0gY29udGVudC5wYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5wYXRoID09PSBjdXJyZW50UGF0aCkgfHwge25vdGZvdW5kOiB0cnVlfTtcbiAgcmV0dXJuIHtwcm9wczoge3BhZ2V9fTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiY29udGVudCIsIlBhZ2UiLCJwYWdlIiwidGl0bGUiLCJoMSIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsInBhZ2VzIiwibWFwIiwic2x1ZyIsInBhdGgiLCJzcGxpdCIsInNsaWNlIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImN1cnJlbnRQYXRoIiwiam9pbiIsImZpbmQiLCJub3Rmb3VuZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...slug].jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./frontaid.content.json":
/*!*******************************!*\
  !*** ./frontaid.content.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"FrontAid CMS with Next.js","index":{"title":"Index Page","content":"<p>Some <strong>index</strong> content...</p>"},"pages":[{"title":"Foo Page","path":"/foo","content":"<p>Foo content...</p><h2>Heading</h2><p>Some other content...</p>"},{"title":"Bar Page","path":"/bar","content":"<p><strong>Bar</strong> content...</p>"},{"title":"Baz Page","path":"/baz","content":"<p><strong>Baz</strong> content...</p>"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[...slug].jsx"));
module.exports = __webpack_exports__;

})();
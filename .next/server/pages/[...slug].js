"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frontaid_content_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(956);



function Page({ page  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        page.name,
                        " | ",
                        _frontaid_content_json__WEBPACK_IMPORTED_MODULE_2__/* .name */ .u2
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: page.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: page.content
                }
            })
        ]
    });
};
async function getStaticPaths() {
    const paths = _frontaid_content_json__WEBPACK_IMPORTED_MODULE_2__/* .pages.map */ .L1.map((page)=>{
        const slug = page.path.split("/").slice(1);
        return {
            params: {
                slug
            }
        };
    });
    return {
        paths,
        fallback: true
    };
}
async function getStaticProps({ params  }) {
    const currentPath = `/${params.slug.join("/")}`;
    const page1 = _frontaid_content_json__WEBPACK_IMPORTED_MODULE_2__/* .pages.find */ .L1.find((page)=>page.path === currentPath
    ) || {
        notfound: true
    };
    return {
        props: {
            page: page1
        }
    };
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 956:
/***/ ((module) => {

module.exports = JSON.parse('{"u2":"Liam Chung // Thain","Kz":{"u":"Index Page","k":"<p>Some <strong>index</strong> content...</p>"},"L1":[{"name":"Foo Page","path":"/foo","content":"<p>Foo content...</p><h2>Heading</h2><p>Some other content...</p>"},{"name":"Bar Page","path":"/bar","content":"<p><strong>Bar</strong> content...</p>"},{"name":"Baz Page","path":"/baz","content":"<p><strong>Baz</strong> content...</p>"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(721));
module.exports = __webpack_exports__;

})();
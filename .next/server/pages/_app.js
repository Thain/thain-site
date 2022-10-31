"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/dist/shared/lib/styled-jsx"
const styled_jsx_namespaceObject = require("next/dist/shared/lib/styled-jsx");
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./frontaid.content.json
var frontaid_content = __webpack_require__(956);
;// CONCATENATED MODULE: external "next-page-transitions"
const external_next_page_transitions_namespaceObject = require("next-page-transitions");
;// CONCATENATED MODULE: external "jquery/dist/jquery.min.js"
const jquery_min_js_namespaceObject = require("jquery/dist/jquery.min.js");
;// CONCATENATED MODULE: ./pages/_app.jsx













function MyApp({ Component , router , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_page_transitions_namespaceObject.PageTransition, {
                timeout: 450,
                classNames: "page-transition",
                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "jsx-1525834a4dba1a9b",
                    children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                        ...pageProps,
                        key: router.route,
                        className: "jsx-1525834a4dba1a9b" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                    })
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "1525834a4dba1a9b",
                children: ".page-transition-enter{opacity:0}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 450ms;-moz-transition:opacity 450ms;-o-transition:opacity 450ms;transition:opacity 450ms}.page-transition-exit{opacity:1}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 450ms;-moz-transition:opacity 450ms;-o-transition:opacity 450ms;transition:opacity 450ms}"
            })
        ]
    });
};


/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,956], () => (__webpack_exec__(561)));
module.exports = __webpack_exports__;

})();
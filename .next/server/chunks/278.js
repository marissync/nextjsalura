"use strict";
exports.id = 278;
exports.ids = [278];
exports.modules = {

/***/ 6278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Link)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/Link/LinkEstlizado.js


const LinkEstilizado = /*#__PURE__*/ external_react_default().forwardRef(({ onClick , href , children  }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        onClick: onClick,
        ref: ref,
        children: children
    });
});
/* harmony default export */ const LinkEstlizado = (LinkEstilizado);

;// CONCATENATED MODULE: ./src/components/Link/index.js

// Componente Link


function Link({ children , href , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(LinkEstlizado, {
            ...props,
            children: children
        })
    });
};


/***/ })

};
;
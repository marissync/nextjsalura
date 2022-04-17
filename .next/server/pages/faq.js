"use strict";
(() => {
var exports = {};
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 8147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ faq),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/patterns/footer/index.js
var footer = __webpack_require__(7385);
// EXTERNAL MODULE: ./src/components/Link/index.js + 1 modules
var Link = __webpack_require__(6278);
// EXTERNAL MODULE: ./src/theme/theme.js
var theme = __webpack_require__(4610);
// EXTERNAL MODULE: ./src/theme/components.js
var components = __webpack_require__(981);
;// CONCATENATED MODULE: ./src/screens/FAQScreen/index.js

// FAQScreen.js




function FAQScreen({ faq: faq1  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components/* Box */.xu, {
        styleSheet: {
            backgroundColor: theme/* theme.colors.neutral.050 */.r.colors.neutral["050"]
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(components/* Box */.xu, {
            as: "main",
            styleSheet: {
                flex: 1,
                maxWidth: theme/* theme.space.xcontainer_xl */.r.space.xcontainer_xl,
                marginHorizontal: "auto",
                paddingHorizontal: {
                    xs: theme/* theme.space.x4 */.r.space.x4,
                    sm: theme/* theme.space.x6 */.r.space.x6,
                    lg: theme/* theme.space.x8 */.r.space.x8
                },
                paddingVertical: {
                    xs: theme/* theme.space.x16 */.r.space.x16,
                    lg: theme/* theme.space.x20 */.r.space.x20
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Box */.xu, {
                styleSheet: {
                    display: "grid",
                    gridTemplateColumns: {
                        lg: "repeat(3,minmax(0,1fr))"
                    },
                    gap: {
                        lg: theme/* theme.space.x8 */.r.space.x8
                    }
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Box */.xu, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                                as: "h2",
                                styleSheet: {
                                    textVariant: theme/* theme.typography.variants.heading2 */.r.typography.variants.heading2,
                                    color: theme/* theme.colors.neutral.900 */.r.colors.neutral[900]
                                },
                                children: "FAQ: Perguntas Frequentes"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Text */.xv, {
                                as: "p",
                                styleSheet: {
                                    marginTop: theme/* theme.space.x4 */.r.space.x4,
                                    textVariant: theme/* theme.typography.variants.body1 */.r.typography.variants.body1,
                                    color: theme/* theme.colors.neutral.500 */.r.colors.neutral[500]
                                },
                                children: [
                                    "N\xe3o consegue encontrar a resposta que procura? entre em contato com nosso",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                        href: "mailto:contato@alura.com.br",
                                        styleSheet: {
                                            color: theme/* theme.colors.primary.400 */.r.colors.primary[400],
                                            hover: {
                                                color: theme/* theme.colors.primary.300 */.r.colors.primary[300]
                                            }
                                        },
                                        children: "time de suporte ao consumidor"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                                as: "p",
                                styleSheet: {
                                    marginTop: theme/* theme.space.x4 */.r.space.x4,
                                    textVariant: theme/* theme.typography.variants.body1 */.r.typography.variants.body1,
                                    color: theme/* theme.colors.neutral.500 */.r.colors.neutral[500]
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                    href: "/",
                                    styleSheet: {
                                        color: theme/* theme.colors.primary.400 */.r.colors.primary[400],
                                        fontWeight: "500",
                                        hover: {
                                            color: theme/* theme.colors.primary.300 */.r.colors.primary[300]
                                        }
                                    },
                                    children: "Voltar para home"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Box */.xu, {
                        styleSheet: {
                            marginTop: {
                                xs: theme/* theme.space.x12 */.r.space.x12,
                                lg: theme/* theme.space.x0 */.r.space.x0
                            },
                            gridColumn: {
                                lg: "span 2 / span 2;"
                            }
                        },
                        children: [
                            faq1.length === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Box */.xu, {
                                styleSheet: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    borderTop: {
                                        xs: `${theme/* theme.space.xpx */.r.space.xpx} solid ${theme/* theme.colors.neutral.200 */.r.colors.neutral[200]}`,
                                        sm: "none"
                                    },
                                    paddingTop: {
                                        xs: theme/* theme.space.x6 */.r.space.x6,
                                        sm: 0
                                    },
                                    borderLeft: {
                                        sm: `${theme/* theme.space.xpx */.r.space.xpx} solid ${theme/* theme.colors.neutral.200 */.r.colors.neutral[200]}`
                                    },
                                    paddingLeft: {
                                        sm: theme/* theme.space.x6 */.r.space.x6
                                    },
                                    textAlign: "center",
                                    minHeight: theme/* theme.space.x1/1 */.r.space["x1/1"]
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                                        as: "h1",
                                        styleSheet: {
                                            textVariant: theme/* theme.typography.variants.heading1 */.r.typography.variants.heading1
                                        },
                                        children: "Nada por aqui"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                                        as: "p",
                                        styleSheet: {
                                            marginTop: theme/* theme.space.x1 */.r.space.x1,
                                            textVariant: theme/* theme.typography.variants.body1 */.r.typography.variants.body1,
                                            color: theme/* theme.colors.neutral.500 */.r.colors.neutral[500]
                                        },
                                        children: "Talvez ainda n\xe3o existam d\xfavidas frequentes."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components/* Box */.xu, {
                                as: "dl",
                                children: faq1.map((faq)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Box */.xu, {
                                        styleSheet: {
                                            marginBottom: theme/* theme.space.x12 */.r.space.x12
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                                                as: "dt",
                                                styleSheet: {
                                                    textVariant: theme/* theme.typography.variants.heading4 */.r.typography.variants.heading4,
                                                    color: theme/* theme.colors.neutral.900 */.r.colors.neutral[900]
                                                },
                                                children: faq.question
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(components/* Text */.xv, {
                                                as: "dd",
                                                styleSheet: {
                                                    marginTop: theme/* theme.space.x2 */.r.space.x2,
                                                    textVariant: theme/* theme.typography.variants.body1 */.r.typography.variants.body1,
                                                    color: theme/* theme.colors.neutral.500 */.r.colors.neutral[500]
                                                },
                                                children: faq.answer
                                            })
                                        ]
                                    }, faq.question)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
};
FAQScreen.defaultProps = {
    faqs: []
};

;// CONCATENATED MODULE: ./pages/faq.js

/* harmony default export */ const faq = (FAQScreen);
// import { faZ } from '@fortawesome/free-solid-svg-icons';
// import { useEffect, useState } from 'react';
// import NextLink from '../src/components/Link';
// import PageTitle from '../src/components/PageTitle'
//getStaticProps
//o next por meio de SSR vai sincronizar o load disso com o do html = instantâneo
//podemos usar p/ carregar a parte + importante da página
//mesmo que a api esteja fora será gerado um json com o seu conteúdo no build e o site sempre vai ficar no ar
async function getServerSideProps() {
    const FAQ_API_URL = "https:gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    var faq = await fetch(FAQ_API_URL).then((response)=>response.json()
    ).then((response)=>response
    );
    console.log("dei um fatch no faq");
    return {
        props: {
            faq
        }
    };
} // export default function FaqPage({faq}){
 //     console.log(faq)
 //     //const [faq, setFaq] = useState([]);
 //     /*
 //      //sem parâmetros, vai acontecer apenas quando carregar
 //      useEffect(() => {
 //         const FAQ_API_URL = "https:gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
 //         //timeout foi posto pra observar melhoro delay 
 //         setTimeout(() => {
 //             fetch(FAQ_API_URL)
 //             .then((response) => response.json())
 //             .then((response) => {
 //                 setFaq(response);
 //             });
 //         }, 2000);
 //     }, []); 
 //    */
 //     return(
 //         <div>
 //             <PageTitle>FAQ - Alura Cases</PageTitle>
 //             <h1>Alura cases - Página de Perguntas FAQ</h1>
 //            <NextLink href='/'>
 //                 Ir para a Home
 //            </NextLink>
 //            <ul>
 //                {faq.map(({ answer, question }) => (
 //                     <li key={question}>
 //                         <article>
 //                             <h2>{question}</h2>
 //                             <h2>{answer}</h2>
 //                         </article>
 //                     </li>
 //                ))}
 //            </ul>
 //         </div>
 //     )
 // }


/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,385,278], () => (__webpack_exec__(8147)));
module.exports = __webpack_exports__;

})();
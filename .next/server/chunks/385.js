"use strict";
exports.id = 385;
exports.ids = [385];
exports.modules = {

/***/ 7385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4610);
/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(981);



function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
        as: "footer",
        styleSheet: {
            backgroundColor: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.colors.neutral[900] */ .r.colors.neutral[900]
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .xu, {
            styleSheet: {
                overflow: "hidden",
                maxWidth: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.xcontainer_xl */ .r.space.xcontainer_xl,
                marginLeft: "auto",
                marginRight: "auto",
                paddingVertical: {
                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x12 */ .r.space.x12
                },
                paddingHorizontal: {
                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x4 */ .r.space.x4,
                    sm: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x6 */ .r.space.x6,
                    lg: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.space.x8 */ .r.space.x8
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv, {
                as: "p",
                styleSheet: {
                    textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.typography.variants.body3 */ .r.typography.variants.body3,
                    textAlign: "center",
                    color: _theme_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.colors.neutral[400] */ .r.colors.neutral[400]
                },
                children: [
                    "\xa9 ",
                    new Date().getFullYear(),
                    " DevSoutinho. Todos os direitos reservados."
                ]
            })
        })
    });
};


/***/ }),

/***/ 981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xu": () => (/* binding */ Box),
/* harmony export */   "JO": () => (/* binding */ Icon),
/* harmony export */   "xv": () => (/* binding */ Text),
/* harmony export */   "Ee": () => (/* binding */ Image),
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "zx": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4610);






function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function renderCSSValue(cssPropName, cssPropValue) {
    if (cssPropName.includes("horizontal")) {
        return `
      ${cssPropName.replace("horizontal", "left")}: ${cssPropValue};
      ${cssPropName.replace("horizontal", "right")}: ${cssPropValue};
    `;
    }
    if (cssPropName.includes("vertical")) {
        return `
      ${cssPropName.replace("vertical", "top")}: ${cssPropValue};
      ${cssPropName.replace("vertical", "bottom")}: ${cssPropValue};
    `;
    }
    return cssPropName + ":" + cssPropValue + ";";
}
function renderCSS(props, currentBreakpoint) {
    if (!props) return "";
    return Object.keys(props).map((prop)=>{
        const cssPropName = prop.split(/(?=[A-Z])/).join("-").toLowerCase();
        const cssPropValue = props[prop];
        const isCssPropValueAnObject = Object.prototype.toString.call(cssPropValue) === "[object Object]";
        const currentCssPropValue = cssPropValue[currentBreakpoint];
        if (currentBreakpoint == "xs" && !isCssPropValueAnObject) {
            return renderCSSValue(cssPropName, cssPropValue);
        }
        if (currentCssPropValue) {
            return renderCSSValue(cssPropName, currentCssPropValue);
        }
    }).filter(Boolean).join("");
}
function Box({ as , styleSheet: { focus , hover , srOnly , ...styleSheet } , ...props }) {
    const Tag = as || "div";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
                ...props,
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "e1b14bb9f7c4d3a3",
                        [
                            Tag,
                            renderCSS(styleSheet, "xs"),
                            Tag,
                            renderCSS(hover, "xs"),
                            Tag,
                            renderCSS(focus, "xs"),
                            _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.sm"] */ .r.breakpoints["Breakpoints.sm"],
                            Tag,
                            renderCSS(styleSheet, "sm"),
                            Tag,
                            renderCSS(hover, "sm"),
                            Tag,
                            renderCSS(focus, "sm"),
                            _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.md"] */ .r.breakpoints["Breakpoints.md"],
                            Tag,
                            renderCSS(styleSheet, "md"),
                            Tag,
                            renderCSS(hover, "md"),
                            Tag,
                            renderCSS(focus, "md"),
                            _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.lg"] */ .r.breakpoints["Breakpoints.lg"],
                            Tag,
                            renderCSS(styleSheet, "lg"),
                            Tag,
                            renderCSS(hover, "lg"),
                            Tag,
                            renderCSS(focus, "lg"),
                            _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.xl"] */ .r.breakpoints["Breakpoints.xl"],
                            Tag,
                            renderCSS(styleSheet, "xl"),
                            Tag,
                            renderCSS(hover, "xl"),
                            Tag,
                            renderCSS(focus, "xl")
                        ]
                    ]
                ]) + " " + `${props.className ? props.className : ""} ${srOnly ? "sr-only" : ""}`
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "e1b14bb9f7c4d3a3",
                dynamic: [
                    Tag,
                    renderCSS(styleSheet, "xs"),
                    Tag,
                    renderCSS(hover, "xs"),
                    Tag,
                    renderCSS(focus, "xs"),
                    _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.sm"] */ .r.breakpoints["Breakpoints.sm"],
                    Tag,
                    renderCSS(styleSheet, "sm"),
                    Tag,
                    renderCSS(hover, "sm"),
                    Tag,
                    renderCSS(focus, "sm"),
                    _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.md"] */ .r.breakpoints["Breakpoints.md"],
                    Tag,
                    renderCSS(styleSheet, "md"),
                    Tag,
                    renderCSS(hover, "md"),
                    Tag,
                    renderCSS(focus, "md"),
                    _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.lg"] */ .r.breakpoints["Breakpoints.lg"],
                    Tag,
                    renderCSS(styleSheet, "lg"),
                    Tag,
                    renderCSS(hover, "lg"),
                    Tag,
                    renderCSS(focus, "lg"),
                    _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.xl"] */ .r.breakpoints["Breakpoints.xl"],
                    Tag,
                    renderCSS(styleSheet, "xl"),
                    Tag,
                    renderCSS(hover, "xl"),
                    Tag,
                    renderCSS(focus, "xl")
                ],
                children: `${Tag}.__jsx-style-dynamic-selector{${renderCSS(styleSheet, "xs")};}${Tag}.__jsx-style-dynamic-selector:hover{${renderCSS(hover, "xs")};}${Tag}.__jsx-style-dynamic-selector:focus{${renderCSS(focus, "xs")};}@media screen and (min-width:${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.sm"] */ .r.breakpoints["Breakpoints.sm"]}px){${Tag}.__jsx-style-dynamic-selector{${renderCSS(styleSheet, "sm")};}${Tag}.__jsx-style-dynamic-selector:hover{${renderCSS(hover, "sm")};}${Tag}.__jsx-style-dynamic-selector:focus{${renderCSS(focus, "sm")};}}@media screen and (min-width:${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.md"] */ .r.breakpoints["Breakpoints.md"]}px){${Tag}.__jsx-style-dynamic-selector{${renderCSS(styleSheet, "md")};}${Tag}.__jsx-style-dynamic-selector:hover{${renderCSS(hover, "md")};}${Tag}.__jsx-style-dynamic-selector:focus{${renderCSS(focus, "md")};}}@media screen and (min-width:${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.lg"] */ .r.breakpoints["Breakpoints.lg"]}px){${Tag}.__jsx-style-dynamic-selector{${renderCSS(styleSheet, "lg")};}${Tag}.__jsx-style-dynamic-selector:hover{${renderCSS(hover, "lg")};}${Tag}.__jsx-style-dynamic-selector:focus{${renderCSS(focus, "lg")};}}@media screen and (min-width:${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.breakpoints["Breakpoints.xl"] */ .r.breakpoints["Breakpoints.xl"]}px){${Tag}.__jsx-style-dynamic-selector{${renderCSS(styleSheet, "xl")};}${Tag}.__jsx-style-dynamic-selector:hover{${renderCSS(hover, "xl")};}${Tag}.__jsx-style-dynamic-selector:focus{${renderCSS(focus, "xl")};}}`
            })
        ]
    });
}
/* @media screen and (min-width: ${theme.breakpoints['Breakpoints.md']}px) {
          ${renderCSS(styleSheet, 'md')};
          :hover {
            ${renderCSS(hover, 'md')};
          }
          :focus {
            ${renderCSS(focus, 'md')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.lg']}px) {
          ${renderCSS(styleSheet, 'lg')};
          :hover {
            ${renderCSS(hover, 'lg')};
          }
          :focus {
            ${renderCSS(focus, 'lg')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.xl']}px) {
          ${renderCSS(styleSheet, 'xl')};
          :hover {
            ${renderCSS(hover, 'xl')};
          }
          :focus {
            ${renderCSS(focus, 'xl')};
          }
        } */ Box.defaultProps = {
    styleSheet: {}
};
function Icon({ as , styleSheet , ...props }) {
    const { iconVariant , ...restStyleSheet } = styleSheet;
    const styleSheetUpdated = restStyleSheet;
    console.log("iconVariant", iconVariant);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Box, {
        as: _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[`fa${capitalize(iconVariant)}`],
        crossOrigin: "anonymous",
        styleSheet: {
            width: "1.5ch",
            height: "1.5ch",
            ...styleSheetUpdated
        },
        ...props
    });
}
function Text({ as , styleSheet , ...props }) {
    const { textVariant ={
        fontSize: "inherit"
    } , ...restStyleSheet } = styleSheet;
    const styleSheetUpdated = {
        ...textVariant,
        ...restStyleSheet
    };
    const tag = as || "span";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Box, {
        as: tag,
        styleSheet: styleSheetUpdated,
        ...props
    });
}
Text.defaultProps = {
    styleSheet: {}
};
function Image({ as , ...props }) {
    const tag = as || "img";
    const { children , dangerouslySetInnerHTML , ...imageProps } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Box, {
        as: tag,
        ...imageProps
    });
}
Image.defaultProps = {
    styleSheet: {}
};
function Input({ as , styleSheet , ...props }) {
    const tag = "input";
    const finalStyleSheet = {
        transition: "all 0.2s ease-in-out",
        outline: 0,
        textVariant: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.typography.variants.body2 */ .r.typography.variants.body2,
        color: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.neutral[900] */ .r.colors.neutral[900],
        boxShadow: `0 5px 7px -5px ${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.neutral[999] */ .r.colors.neutral[999]}43`,
        display: "block",
        width: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space["x1/1"] */ .r.space["x1/1"],
        border: `1px solid ${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.neutral[300] */ .r.colors.neutral[300]}`,
        borderRadius: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space.x2 */ .r.space.x2,
        paddingHorizontal: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space.x5 */ .r.space.x5,
        paddingVertical: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space.x3 */ .r.space.x3,
        focus: {
            border: `1px solid ${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.primary[500] */ .r.colors.primary[500]}`,
            boxShadow: `0 5px 10px -5px ${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.neutral[999] */ .r.colors.neutral[999]}43`
        },
        ...styleSheet
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
        as: tag,
        styleSheet: finalStyleSheet,
        ...props
    });
}
Input.defaultProps = {
    styleSheet: {}
};
function Button({ as , styleSheet , ...props }) {
    const { buttonVariant ="primary" , ...restStyleSheet } = styleSheet;
    const tag = "button";
    const finalStyleSheet = {
        cursor: "pointer",
        textVariant: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.typography.variants.body2 */ .r.typography.variants.body2,
        color: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.neutral["000"] */ .r.colors.neutral["000"],
        boxShadow: `0 5px 7px -5px ${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.neutral[999] */ .r.colors.neutral[999]}43`,
        display: "block",
        outline: 0,
        width: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space["x1/1"] */ .r.space["x1/1"],
        border: `${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space.xpx */ .r.space.xpx} solid ${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors */ .r.colors[buttonVariant][900]}`,
        borderRadius: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space.x2 */ .r.space.x2,
        paddingHorizontal: {
            xs: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space.x5 */ .r.space.x5,
            sm: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space.x10 */ .r.space.x10
        },
        paddingVertical: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.space.x3 */ .r.space.x3,
        transition: "all 0.2s ease-in-out",
        backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors */ .r.colors[buttonVariant][600],
        hover: {
            backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors */ .r.colors[buttonVariant][500],
            boxShadow: `0 5px 10px -5px ${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.neutral[999] */ .r.colors.neutral[999]}73`
        },
        focus: {
            backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors */ .r.colors[buttonVariant][700],
            boxShadow: `0 5px 10px -5px ${_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.colors.neutral[999] */ .r.colors.neutral[999]}93`
        },
        ...restStyleSheet
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
        as: tag,
        styleSheet: finalStyleSheet,
        ...props
    });
}
Button.defaultProps = {
    styleSheet: {}
};


/***/ }),

/***/ 4610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
const partition = {
    "x1/1": "100%",
    "x1/2": "50%",
    "x1/3": "33.333333%",
    "x2/3": "66.666667%",
    "x1/4": "25%",
    "x2/4": "50%",
    "x3/4": "75%",
    "x1/5": "20%",
    "x2/5": "40%",
    "x3/5": "60%",
    "x4/5": "80%",
    "x1/6": "16.666667%",
    "x2/6": "33.333333%",
    "x3/6": "50%",
    "x4/6": "66.666667%",
    "x5/6": "83.333333%",
    "x1/12": "8.333333%",
    "x2/12": "16.666667%",
    "x3/12": "25%",
    "x4/12": "33.333333%",
    "x5/12": "41.666667%",
    "x6/12": "50%",
    "x7/12": "58.333333%",
    "x8/12": "66.666667%",
    "x9/12": "75%",
    "x10/12": "83.333333%",
    "x11/12": "91.666667%"
};
const container = {
    xcontainer_xs: "0",
    xcontainer_sm: "640px" /* 40rem */ ,
    xcontainer_md: "768px" /* 48rem */ ,
    xcontainer_lg: "1024px" /* 64rem */ ,
    xcontainer_xl: "1280px" /* 80rem */ 
};
const space = {
    ...partition,
    ...container,
    x0: "0",
    xpx: "1px",
    "x0.5": "2px",
    x1: "4px",
    "x1.5": "6px",
    x2: "8px",
    "x2.5": "10px",
    x3: "12px",
    "x3.5": "14px",
    x4: "16px",
    x5: "20px",
    x6: "24px",
    x7: "1.75rem",
    x8: "32px",
    x9: "36px",
    x10: "40px",
    x11: "44px",
    x12: "48px",
    x14: "56px",
    x16: "64px",
    x20: "80px",
    x24: "96px",
    x28: "112px",
    x32: "128px",
    x36: "144px",
    x40: "160px",
    x44: "176px",
    x48: "192px",
    x52: "208px",
    x56: "224px",
    x60: "240px",
    x64: "256px",
    x72: "288px",
    x80: "320px",
    x96: "384px"
};
const theme = {
    breakpoints: {
        "Breakpoints.xs": 0,
        "Breakpoints.sm": 480,
        "Breakpoints.md": 768,
        "Breakpoints.lg": 992,
        "Breakpoints.xl": 1200
    },
    colors: {
        primary: {
            "050": "#EAE2F8",
            "100": "#CFBCF2",
            "200": "#A081D9",
            "300": "#8662C7",
            "400": "#724BB7",
            "500": "#653CAD",
            "600": "#51279B",
            "700": "#421987",
            "800": "#34126F",
            "900": "#240754"
        },
        neutral: {
            "000": "#FFFFFF",
            "050": "#F7F7F7",
            "100": "#E1E1E1",
            "200": "#CFCFCF",
            "300": "#B1B1B1",
            "400": "#9E9E9E",
            "500": "#7E7E7E",
            "600": "#626262",
            "700": "#515151",
            "800": "#3B3B3B",
            "900": "#222222",
            "999": "#111111"
        }
    },
    typography: {
        fontFamily: "Open Sans",
        variants: {
            display1: {
                fontSize: {
                    xs: "48px",
                    md: "60px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "900"
                }
            },
            heading1: {
                fontSize: {
                    xs: "36px",
                    md: "48px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "900"
                }
            },
            heading2: {
                fontSize: {
                    xs: "24px",
                    md: "36px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "900"
                }
            },
            heading3: {
                fontSize: {
                    xs: "20px",
                    md: "30px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "bold"
                }
            },
            heading4: {
                fontSize: {
                    xs: "16px",
                    md: "20px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "bold"
                }
            },
            heading5: {
                fontSize: {
                    xs: "14px",
                    md: "16px"
                },
                letterSpacing: {
                    xs: "-0.04px"
                },
                fontWeight: {
                    xs: "bold"
                }
            },
            body1: {
                fontSize: {
                    xs: "18px"
                },
                fontWeight: {
                    xs: "400"
                }
            },
            body2: {
                fontSize: {
                    xs: "16px"
                },
                fontWeight: {
                    xs: "400"
                }
            },
            body3: {
                fontSize: {
                    xs: "14px"
                },
                fontWeight: {
                    xs: "400"
                }
            },
            body4: {
                fontSize: {
                    xs: "12px"
                },
                fontWeight: {
                    xs: "400"
                }
            }
        }
    },
    space
};


/***/ })

};
;
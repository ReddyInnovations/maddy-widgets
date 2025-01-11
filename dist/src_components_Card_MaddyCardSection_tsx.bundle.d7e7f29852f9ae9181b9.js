"use strict";
(self["webpackChunkmaddy_widgets"] = self["webpackChunkmaddy_widgets"] || []).push([["src_components_Card_MaddyCardSection_tsx"],{

/***/ "./src/components/Card/MaddyCard.tsx":
/*!*******************************************!*\
  !*** ./src/components/Card/MaddyCard.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const MaddyCard = _ref => {
  let {
    title,
    subTitle,
    details,
    duration,
    linkTitle,
    url,
    borderColor
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "card",
    style: {
      border: `1px solid ${borderColor || '#003366'}`,
      borderLeft: `5px solid ${borderColor || '#003366'}`
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
      className: "card-title",
      children: title
    }), subTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
      className: "card-subtitle",
      children: subTitle
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
      className: "card-details",
      children: details.map((detail, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
        children: detail
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      className: "card-duration",
      children: duration
    }), url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      href: url,
      className: "card-link",
      style: {
        color: `${borderColor || '#003366'}`
      },
      children: `${linkTitle || 'View'}`
    })]
  });
};
_c2 = MaddyCard;
_c = MaddyCard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaddyCard);
var _c;
__webpack_require__.$Refresh$.register(_c, "MaddyCard");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "MaddyCard");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/Card/MaddyCardSection.tsx":
/*!**************************************************!*\
  !*** ./src/components/Card/MaddyCardSection.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MaddyCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaddyCard */ "./src/components/Card/MaddyCard.tsx");
/* harmony import */ var _styles_css_CardSection_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/css/CardSection.css */ "./src/styles/css/CardSection.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const MaddyCardSection = _ref => {
  let {
    title,
    subtitle,
    cardInfoList,
    borderColor
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "card-section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-section-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "card-section-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "card-section-subtitle",
        children: subtitle
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "card-section-grid",
      children: cardInfoList.map((cardInfo, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MaddyCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
        ...cardInfo,
        borderColor: borderColor
      }, index))
    })]
  });
};
_c2 = MaddyCardSection;
_c = MaddyCardSection;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaddyCardSection);
var _c;
__webpack_require__.$Refresh$.register(_c, "MaddyCardSection");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "MaddyCardSection");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/css/CardSection.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/css/CardSection.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `    :root {
      --personal-border-color: #ff9800;
      --professional-border-color: #003366;
      --background-color: #f4f8fb;
      --text-color: #333;
      --box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    .card-section {
      margin-bottom: 60px;
    }

    .card-section-header {
      text-align: center;
      margin-bottom: 20px;
    }

    .card-section-title {
      font-size: 2.5rem;
      color: var(--professional-border-color);
      font-weight: bold;
    }

    .card-section-subtitle {
      font-size: 1.2rem;
      color: #666;
    }

    .card-section-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .card {
      background-color: #ffffff;
      border-radius: 15px;
      padding: 25px;
      box-shadow: var(--box-shadow);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .card-title {
      font-size: 1.5rem;
      color: var(--professional-border-color);
      margin-bottom: 15px;
      font-weight: bold;
    }

    .card-subtitle {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 15px;
      font-weight: 500;
    }


    .card-details {
      /* list-style: none; */
      padding: 10 px;
      margin: 0 0 20px 0;
    }

    .card-details li {
      margin-bottom: 10px;
      font-size: 1rem;
      color: #555;
    }

    .card-duration {
      font-size: 0.9rem;
      color: #777;
      font-style: italic;
      text-align: right;
    }

    .card-link {
      display: inline-block;
      margin-top: 10px;
      text-decoration: none;
      font-weight: bold;
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
      .card-section-title {
        font-size: 2rem;
      }

      .card-section-grid {
        grid-template-columns: 1fr;
        /* Single column layout for smaller screens */
      }
    }`, "",{"version":3,"sources":["webpack://./src/styles/css/CardSection.css"],"names":[],"mappings":"IAAI;MACE,gCAAgC;MAChC,oCAAoC;MACpC,2BAA2B;MAC3B,kBAAkB;MAClB,2CAA2C;IAC7C;;IAEA;MACE,mBAAmB;IACrB;;IAEA;MACE,kBAAkB;MAClB,mBAAmB;IACrB;;IAEA;MACE,iBAAiB;MACjB,uCAAuC;MACvC,iBAAiB;IACnB;;IAEA;MACE,iBAAiB;MACjB,WAAW;IACb;;IAEA;MACE,aAAa;MACb,2DAA2D;MAC3D,SAAS;MACT,iBAAiB;MACjB,cAAc;IAChB;;IAEA;MACE,yBAAyB;MACzB,mBAAmB;MACnB,aAAa;MACb,6BAA6B;MAC7B,qDAAqD;IACvD;;IAEA;MACE,4BAA4B;MAC5B,2CAA2C;IAC7C;;IAEA;MACE,iBAAiB;MACjB,uCAAuC;MACvC,mBAAmB;MACnB,iBAAiB;IACnB;;IAEA;MACE,iBAAiB;MACjB,WAAW;MACX,mBAAmB;MACnB,gBAAgB;IAClB;;;IAGA;MACE,sBAAsB;MACtB,cAAc;MACd,kBAAkB;IACpB;;IAEA;MACE,mBAAmB;MACnB,eAAe;MACf,WAAW;IACb;;IAEA;MACE,iBAAiB;MACjB,WAAW;MACX,kBAAkB;MAClB,iBAAiB;IACnB;;IAEA;MACE,qBAAqB;MACrB,gBAAgB;MAChB,qBAAqB;MACrB,iBAAiB;IACnB;;IAEA,0BAA0B;IAC1B;MACE;QACE,eAAe;MACjB;;MAEA;QACE,0BAA0B;QAC1B,6CAA6C;MAC/C;IACF","sourcesContent":["    :root {\r\n      --personal-border-color: #ff9800;\r\n      --professional-border-color: #003366;\r\n      --background-color: #f4f8fb;\r\n      --text-color: #333;\r\n      --box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\r\n    }\r\n\r\n    .card-section {\r\n      margin-bottom: 60px;\r\n    }\r\n\r\n    .card-section-header {\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n    }\r\n\r\n    .card-section-title {\r\n      font-size: 2.5rem;\r\n      color: var(--professional-border-color);\r\n      font-weight: bold;\r\n    }\r\n\r\n    .card-section-subtitle {\r\n      font-size: 1.2rem;\r\n      color: #666;\r\n    }\r\n\r\n    .card-section-grid {\r\n      display: grid;\r\n      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n      gap: 30px;\r\n      max-width: 1200px;\r\n      margin: 0 auto;\r\n    }\r\n\r\n    .card {\r\n      background-color: #ffffff;\r\n      border-radius: 15px;\r\n      padding: 25px;\r\n      box-shadow: var(--box-shadow);\r\n      transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n    }\r\n\r\n    .card:hover {\r\n      transform: translateY(-10px);\r\n      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);\r\n    }\r\n\r\n    .card-title {\r\n      font-size: 1.5rem;\r\n      color: var(--professional-border-color);\r\n      margin-bottom: 15px;\r\n      font-weight: bold;\r\n    }\r\n\r\n    .card-subtitle {\r\n      font-size: 1.2rem;\r\n      color: #666;\r\n      margin-bottom: 15px;\r\n      font-weight: 500;\r\n    }\r\n\r\n\r\n    .card-details {\r\n      /* list-style: none; */\r\n      padding: 10 px;\r\n      margin: 0 0 20px 0;\r\n    }\r\n\r\n    .card-details li {\r\n      margin-bottom: 10px;\r\n      font-size: 1rem;\r\n      color: #555;\r\n    }\r\n\r\n    .card-duration {\r\n      font-size: 0.9rem;\r\n      color: #777;\r\n      font-style: italic;\r\n      text-align: right;\r\n    }\r\n\r\n    .card-link {\r\n      display: inline-block;\r\n      margin-top: 10px;\r\n      text-decoration: none;\r\n      font-weight: bold;\r\n    }\r\n\r\n    /* Mobile Responsiveness */\r\n    @media (max-width: 768px) {\r\n      .card-section-title {\r\n        font-size: 2rem;\r\n      }\r\n\r\n      .card-section-grid {\r\n        grid-template-columns: 1fr;\r\n        /* Single column layout for smaller screens */\r\n      }\r\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/css/CardSection.css":
/*!****************************************!*\
  !*** ./src/styles/css/CardSection.css ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./CardSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/css/CardSection.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!./CardSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/css/CardSection.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./CardSection.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/css/CardSection.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CardSection_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_Card_MaddyCardSection_tsx.bundle.d7e7f29852f9ae9181b9.js.map
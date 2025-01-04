"use strict";
(self["webpackChunkmaddy_solutions"] = self["webpackChunkmaddy_solutions"] || []).push([["src_bootstrap_tsx"],{

/***/ "./node_modules/@mui/material/colors/green.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/material/colors/green.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (green);

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _components_WhatsAppWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/WhatsAppWidget */ "./src/components/WhatsAppWidget.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();

 // Import useNavigate within Router





const App = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AppContent, {})
  });
};
_c3 = App;
_c = App;
const AppContent = () => {
  _s2();
  _s();
  const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      menuLinks: [{
        url: '/',
        label: 'Home'
      }, {
        url: '/about',
        label: 'About'
      }, {
        url: '/services',
        label: 'Services'
      }, {
        url: '/products',
        label: 'Products'
      }, {
        url: '/contact',
        label: 'Contact'
      }],
      logoSrc: 'mainLogo',
      menuOpen: menuOpen,
      setMenuOpen: setMenuOpen,
      onLoginClick: () => console.log('Login Clicked')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_WhatsAppWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
      phoneNumber: "1234567890",
      position: {
        bottom: 50,
        right: 30
      },
      backgroundColor: "#25D366",
      iconColor: "white",
      iconSize: 35,
      tooltipText: "Contact us on WhatsApp",
      draggable: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      address: "No.143, 4th Cross, Prasanth Extension, Whitefield, Bangalore - 560066 (Near Thalassery Restaurant)",
      socialLinks: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com'
      },
      quickLinks: [{
        label: 'Home',
        url: '/home'
      }, {
        label: 'About Us',
        url: '/about'
      }, {
        label: 'Services',
        url: '/services'
      }, {
        label: 'Contact Us',
        url: '/contact'
      }],
      services: [{
        label: 'Consulting & Staffing',
        url: '/consulting'
      }, {
        label: 'Product Development',
        url: '/product-development'
      }, {
        label: 'Web Design And Development',
        url: '/web-design'
      }],
      technologies: [{
        label: 'Master Programs',
        url: '/master-programs'
      }, {
        label: 'Cloud Computing',
        url: '/cloud-computing'
      }, {
        label: 'DevOps',
        url: '/devops'
      }],
      logoSrc: 'mainLogo',
      companyName: "Irasah Innovations",
      themeColors: {
        background: '#333333',
        text: '#ffffff',
        accent: '#FFD700',
        linkHover: '#FFA500'
      }
    })]
  });
};
_s2(AppContent, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c4 = AppContent;
_s(AppContent, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c2 = AppContent;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "App");
__webpack_require__.$Refresh$.register(_c2, "AppContent");
var _c3, _c4;
__webpack_require__.$Refresh$.register(_c3, "App");
__webpack_require__.$Refresh$.register(_c4, "AppContent");

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

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const container = document.getElementById('root');
debugger;
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
console.log('omr : vemireddy maddy-widgets loaded.');
root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {}));

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

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/styles/Header.styles */ "./src/styles/Header.styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const Header = ({
  menuLinks,
  onLoginClick,
  logoSrc,
  menuOpen,
  setMenuOpen,
  theme
}) => {
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_1__.HeaderContainer, {
    theme: theme,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_1__.Logo, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: logoSrc,
        alt: "Logo"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_1__.Nav, {
      menuOpen: menuOpen,
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_1__.NavList, {
        children: menuLinks.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
            to: link.url,
            onClick: closeMenu,
            children: link.label
          })
        }, link.url))
      })
    }), onLoginClick && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_1__.LoginLink, {
      onClick: onLoginClick,
      theme: theme,
      children: "Login"
    }), menuLinks.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_1__.MenuToggle, {
      onClick: toggleMenu,
      theme: theme,
      children: menuOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTimes, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaBars, {})
    })]
  });
};
_c2 = Header;
_c = Header;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
var _c;
__webpack_require__.$Refresh$.register(_c, "Header");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "Header");

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

/***/ "./src/components/WhatsAppWidget.tsx":
/*!*******************************************!*\
  !*** ./src/components/WhatsAppWidget.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-draggable */ "webpack/sharing/consume/default/react-draggable/react-draggable");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "webpack/sharing/consume/default/@mui/material/@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/green.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






const WhatsAppWidget = ({
  phoneNumber,
  position = {
    bottom: 20,
    right: 20
  },
  // Default positioning
  backgroundColor = _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__["default"][500],
  iconColor = 'white',
  iconSize = 30,
  tooltipText = 'Chat with us on WhatsApp',
  draggable = true
}) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  const widgetStyle = {
    position: 'fixed',
    bottom: position.bottom,
    top: position.top,
    right: position.right,
    left: position.left,
    backgroundColor,
    color: iconColor,
    borderRadius: '50%',
    padding: 10,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
    cursor: draggable ? 'grab' : 'pointer'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_draggable__WEBPACK_IMPORTED_MODULE_0___default()), {
    disabled: !draggable,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: widgetStyle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        title: tooltipText,
        "aria-label": "whatsapp",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
          onClick: handleClick,
          sx: {
            backgroundColor,
            color: iconColor,
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__["default"][600],
              boxShadow: 6,
              transform: 'scale(1.1)'
            },
            '&:active': {
              transform: 'scale(0.95)'
            }
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaWhatsapp, {
            size: iconSize
          })
        })
      })
    })
  });
};
_c2 = WhatsAppWidget;
_c = WhatsAppWidget;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatsAppWidget);
var _c;
__webpack_require__.$Refresh$.register(_c, "WhatsAppWidget");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "WhatsAppWidget");

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

/***/ "./src/styles/Header.styles.ts":
/*!*************************************!*\
  !*** ./src/styles/Header.styles.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderContainer: () => (/* binding */ HeaderContainer),
/* harmony export */   LoginLink: () => (/* binding */ LoginLink),
/* harmony export */   Logo: () => (/* binding */ Logo),
/* harmony export */   MenuToggle: () => (/* binding */ MenuToggle),
/* harmony export */   Nav: () => (/* binding */ Nav),
/* harmony export */   NavList: () => (/* binding */ NavList)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "Headerstyles__HeaderContainer",
  componentId: "sc-1o2mo0m-0"
})(["display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background-color:", ";box-shadow:0 2px 5px rgba(0,0,0,0.1);position:fixed;top:0;left:0;width:100%;z-index:1000;box-sizing:border-box;"], ({
  theme
}) => theme?.backgroundColor || '#fff');
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Headerstyles__Logo",
  componentId: "sc-1o2mo0m-1"
})(["img{height:50px;width:auto;}"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({
  displayName: "Headerstyles__Nav",
  componentId: "sc-1o2mo0m-2"
})(["display:flex;justify-content:center;align-items:center;flex:1;gap:20px;@media (max-width:768px){display:", ";flex-direction:column;position:absolute;top:60px;left:0;width:100%;background-color:", ";padding:20px;text-align:center;box-shadow:0 2px 5px rgba(0,0,0,0.2);gap:15px;}"], ({
  menuOpen
}) => menuOpen ? 'flex' : 'none', ({
  theme
}) => theme?.backgroundColor || '#fff');
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "Headerstyles__NavList",
  componentId: "sc-1o2mo0m-3"
})(["list-style:none;display:flex;justify-content:center;align-items:center;gap:20px;flex-wrap:wrap;@media (max-width:768px){flex-direction:column;gap:15px;}li{a{text-decoration:none;color:", ";font-weight:500;&:hover{color:", ";}}}"], ({
  theme
}) => theme?.primaryColor || '#333', ({
  theme
}) => theme?.hoverColor || '#007bff');
const LoginLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Headerstyles__LoginLink",
  componentId: "sc-1o2mo0m-4"
})(["background:none;border:none;font-size:16px;color:", ";cursor:pointer;&:hover{text-decoration:underline;}"], ({
  theme
}) => theme?.secondaryColor || '#007bff');
const MenuToggle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Headerstyles__MenuToggle",
  componentId: "sc-1o2mo0m-5"
})(["background:none;border:none;font-size:24px;display:none;color:", ";@media (max-width:768px){display:block;}"], ({
  theme
}) => theme?.primaryColor || '#333');

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

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ })

}]);
//# sourceMappingURL=src_bootstrap_tsx.bundle.1be02b46a14fbb117a03.js.map
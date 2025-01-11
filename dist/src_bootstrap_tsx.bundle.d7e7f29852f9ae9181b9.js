"use strict";
(self["webpackChunkmaddy_widgets"] = self["webpackChunkmaddy_widgets"] || []).push([["src_bootstrap_tsx"],{

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
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _mock_mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/mock */ "./src/mock/mock.ts");
/* harmony import */ var _components_Card_MaddyCardSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Card/MaddyCardSection */ "./src/components/Card/MaddyCardSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();

 // Import useNavigate within Router








const App = () => {
  _s2();
  _s();
  const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_mock_mock__WEBPACK_IMPORTED_MODULE_6__.headerData.menuOpen);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      menuLinks: _mock_mock__WEBPACK_IMPORTED_MODULE_6__.headerData.menuLinks,
      logoSrc: _mock_mock__WEBPACK_IMPORTED_MODULE_6__.headerData.logoSrc,
      menuOpen: menuOpen,
      setMenuOpen: setMenuOpen,
      onLoginClick: _mock_mock__WEBPACK_IMPORTED_MODULE_6__.headerData.onLoginClick,
      theme: _mock_mock__WEBPACK_IMPORTED_MODULE_6__.headerData.theme
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ..._mock_mock__WEBPACK_IMPORTED_MODULE_6__.profileData
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Card_MaddyCardSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ..._mock_mock__WEBPACK_IMPORTED_MODULE_6__.cardData
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ..._mock_mock__WEBPACK_IMPORTED_MODULE_6__.footerData
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_WhatsAppWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ..._mock_mock__WEBPACK_IMPORTED_MODULE_6__.whatsappData
    })]
  });
};
_s2(App, "vuvWW8RJtV1wcIp4i9efteKrxdQ=");
_c2 = App;
_s(App, "vuvWW8RJtV1wcIp4i9efteKrxdQ=");
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
__webpack_require__.$Refresh$.register(_c, "App");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "App");

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
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
console.log('omr : vemireddy widget started.');
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
/* harmony import */ var _src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/styles/Header.styles */ "./src/styles/Header.styles.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();





const Header = _ref => {
  _s2();
  _s();
  let {
    menuLinks,
    logoSrc,
    menuOpen,
    setMenuOpen,
    onLoginClick,
    theme
  } = _ref;
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.HeaderContainer, {
      theme: theme,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.Logo, {
        children: logoSrc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: logoSrc,
          alt: "Main Logo"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.Nav, {
        theme: theme,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.NavList, {
          theme: theme,
          children: menuLinks.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
              to: link.url,
              children: link.label
            })
          }, link.url))
        })
      }), onLoginClick && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.LoginLink, {
        onClick: onLoginClick,
        theme: theme,
        children: "Login"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.MenuToggle, {
        onClick: toggleMenu,
        theme: theme,
        children: menuOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTimes, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaBars, {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.Sidebar, {
      menuOpen: menuOpen,
      theme: theme,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.SidebarContent, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_styles_Header_styles__WEBPACK_IMPORTED_MODULE_0__.SidebarNavList, {
          theme: theme,
          children: menuLinks.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
              to: link.url,
              onClick: closeMenu,
              children: link.label
            })
          }, link.url))
        })
      })
    })]
  });
};
_s2(Header, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c2 = Header;
_s(Header, "OD7bBpZva5O2jO+Puf00hKivP7c=");
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

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getSocialIcon: () => (/* binding */ getSocialIcon)
/* harmony export */ });
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/styles/profile.styles */ "./src/styles/profile.styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const getSocialIcon = platform => {
  switch (platform) {
    case 'whatsapp':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaWhatsapp, {});
    case 'instagram':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaInstagram, {});
    case 'linkedin':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLinkedin, {});
    case 'gmail':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaEnvelope, {});
    default:
      return null;
  }
};
const Profile = _ref => {
  let {
    profileImage,
    siteTitle,
    socialLinks,
    profileText
  } = _ref;
  const socialLinksData = Object.entries(socialLinks).map(_ref2 => {
    let [key, url] = _ref2;
    return {
      icon: getSocialIcon(key),
      url
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__.Section, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__.Content, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__.Text, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
          children: profileText.greeting
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: profileText.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
          children: ["And I'm a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: profileText.title
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: profileText.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__.SocialIcons, {
          children: socialLinksData.map((link, index) => link.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            children: link.icon
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__.StyledLink, {
          to: profileText.linkURL,
          children: profileText.linkText
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__.ImageContainer, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__.ImageWrapper, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_styles_profile_styles__WEBPACK_IMPORTED_MODULE_0__.ProfileImage, {
            src: profileImage,
            alt: siteTitle
          })
        })
      })]
    })
  });
};
_c2 = Profile;
_c = Profile;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);
var _c;
__webpack_require__.$Refresh$.register(_c, "Profile");
var _c2;
__webpack_require__.$Refresh$.register(_c2, "Profile");

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






const WhatsAppWidget = _ref => {
  let {
    phoneNumber,
    position = {
      bottom: 20,
      right: 20
    },
    backgroundColor = _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__["default"][500],
    iconColor = 'white',
    iconSize = 30,
    tooltipText = 'Chat with us on WhatsApp',
    draggable = true
  } = _ref;
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

/***/ "./src/mock/mock.ts":
/*!**************************!*\
  !*** ./src/mock/mock.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardData: () => (/* binding */ cardData),
/* harmony export */   footerData: () => (/* binding */ footerData),
/* harmony export */   headerData: () => (/* binding */ headerData),
/* harmony export */   modernDarkTheme: () => (/* binding */ modernDarkTheme),
/* harmony export */   profileData: () => (/* binding */ profileData),
/* harmony export */   whatsappData: () => (/* binding */ whatsappData)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

const profileData = {
  profileImage: '/path/to/image.jpg',
  siteTitle: 'My Website',
  socialLinks: {
    whatsapp: 'https://wa.me/1234567890',
    instagram: 'https://instagram.com/username',
    linkedin: 'https://linkedin.com/in/username',
    gmail: 'mailto:someone@example.com'
  },
  profileText: {
    greeting: "Hello, It's Me",
    name: 'Madhava Reddy Vemireddy',
    title: 'Full Stack Developer',
    description: 'I specialize in building responsive frontends with React and scalable backends with .NET C#. My focus is on delivering modern, efficient, and user-friendly web solutions.',
    linkText: 'More About Me',
    linkURL: '/about-me'
  }
};
const whatsappData = {
  phoneNumber: '1234567890',
  position: {
    bottom: 50,
    right: 30
  },
  backgroundColor: '#25D366',
  iconColor: 'white',
  iconSize: 35,
  tooltipText: 'Contact us on WhatsApp',
  draggable: true
};
const modernDarkTheme = {
  headerBackgroundColor: '#121212',
  textColor: '#e0e0e0',
  linkColor: '#bb86fc',
  linkHoverColor: '#6200ee',
  secondaryColor: '#03dac6',
  hoverColor: '#018786',
  sidebarBackgroundColor: '#1f1f1f',
  menuIconColor: '#e0e0e0',
  shadowColor: 'rgba(0, 0, 0, 0.7)',
  backgroundColor: '#121212'
};
const headerData = {
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
  logoSrc: '',
  menuOpen: false,
  setMenuOpen: value => {},
  onLoginClick: () => console.log('Login Clicked'),
  theme: modernDarkTheme
};
const footerData = {
  address: 'No.143, 4th Cross, Prasanth Extension, Whitefield, Bangalore - 560066 (Near Thalassery Restaurant)',
  socialLinks: {
    whatsapp: 'https://wa.me/8886380746',
    instagram: 'https://www.instagram.com/vemireddy_official',
    linkedin: 'https://www.linkedin.com/in/madhava-reddy-vemireddy-9a0826167',
    gmail: 'mailto:vemireddyomr@gmail.com'
  },
  linkSections: [{
    title: 'Quick Links',
    links: [{
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
    }]
  }, {
    title: 'Quick Links',
    links: [{
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
    }]
  }],
  logoSrc: '',
  companyName: 'Irasah Innovations',
  showFooterBottom: true
};
const cardData = {
  title: "Educational Background",
  subtitle: "Highlights of Academic Achievements",
  cardInfoList: [],
  borderColor: "#ff9800"
};

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
/* harmony export */   NavList: () => (/* binding */ NavList),
/* harmony export */   Sidebar: () => (/* binding */ Sidebar),
/* harmony export */   SidebarContent: () => (/* binding */ SidebarContent),
/* harmony export */   SidebarNavList: () => (/* binding */ SidebarNavList)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "Headerstyles__HeaderContainer",
  componentId: "sc-a1cyxu-0"
})(["display:flex;justify-content:space-between;align-items:center;padding:10px 20px;background-color:", ";color:", ";position:sticky;top:0;z-index:1000;box-shadow:0 2px 4px rgba(0,0,0,0.1);"], _ref => {
  let {
    theme
  } = _ref;
  return theme?.headerBackgroundColor || '#2c2c2c';
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme?.textColor || 'lightblue';
});
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Headerstyles__Logo",
  componentId: "sc-a1cyxu-1"
})(["img{max-height:50px;}"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({
  displayName: "Headerstyles__Nav",
  componentId: "sc-a1cyxu-2"
})(["display:flex;align-items:center;transition:left 0.3s ease-in-out;@media (max-width:768px){display:none;}"]);
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "Headerstyles__NavList",
  componentId: "sc-a1cyxu-3"
})(["list-style:none;margin:0;padding:0;display:flex;gap:20px;align-items:center;li{a{color:", ";text-decoration:none;font-size:18px;font-weight:500;&:hover{color:", ";}}}@media (max-width:768px){display:flex;flex-direction:column;justify-content:center;height:100%;}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme?.navLinkColor || 'lightblue';
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme?.navLinkHoverColor || '#00bfff';
});
const LoginLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Headerstyles__LoginLink",
  componentId: "sc-a1cyxu-4"
})(["background:none;border:none;font-size:16px;color:", ";cursor:pointer;padding:10px 20px;&:hover{text-decoration:underline;color:", ";}@media (max-width:768px){display:block;text-align:center;}@media (min-width:769px){display:block;}"], _ref5 => {
  let {
    theme
  } = _ref5;
  return theme?.loginLinkColor || 'lightblue';
}, _ref6 => {
  let {
    theme
  } = _ref6;
  return theme?.loginLinkHoverColor || '#0056b3';
});
const MenuToggle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Headerstyles__MenuToggle",
  componentId: "sc-a1cyxu-5"
})(["background:none;border:none;font-size:24px;color:", ";display:none;@media (max-width:768px){display:block;}"], _ref7 => {
  let {
    theme
  } = _ref7;
  return theme?.menuIconColor || 'lightblue';
});
const Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Headerstyles__Sidebar",
  componentId: "sc-a1cyxu-6"
})(["position:fixed;top:0;left:0;width:250px;height:100vh;background-color:", ";color:", ";transform:", ";transition:transform 0.3s ease-in-out;z-index:1000;display:flex;flex-direction:column;align-items:center;padding:20px;"], _ref8 => {
  let {
    theme
  } = _ref8;
  return theme?.sidebarBackgroundColor || '#2c2c2c';
}, _ref9 => {
  let {
    theme
  } = _ref9;
  return theme?.textColor || 'lightblue';
}, _ref10 => {
  let {
    menuOpen
  } = _ref10;
  return menuOpen ? 'translateX(0)' : 'translateX(-100%)';
});
const SidebarContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Headerstyles__SidebarContent",
  componentId: "sc-a1cyxu-7"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;height:100%;padding:20px;"]);
const SidebarNavList = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(NavList).withConfig({
  displayName: "Headerstyles__SidebarNavList",
  componentId: "sc-a1cyxu-8"
})(["flex-direction:column;gap:20px;padding:0 20px;align-items:center;"]);

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

/***/ "./src/styles/profile.styles.ts":
/*!**************************************!*\
  !*** ./src/styles/profile.styles.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   ImageContainer: () => (/* binding */ ImageContainer),
/* harmony export */   ImageWrapper: () => (/* binding */ ImageWrapper),
/* harmony export */   ProfileImage: () => (/* binding */ ProfileImage),
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   SocialIcons: () => (/* binding */ SocialIcons),
/* harmony export */   StyledLink: () => (/* binding */ StyledLink),
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "webpack/sharing/consume/default/styled-components/styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "profilestyles__Section",
  componentId: "sc-lpewa-0"
})(["background:linear-gradient(135deg,#0a192f,#020c1b);color:#ffffff;height:100vh;display:flex;justify-content:center;align-items:center;padding:0 2rem;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__Content",
  componentId: "sc-lpewa-1"
})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:2rem;max-width:1200px;width:100%;"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__Text",
  componentId: "sc-lpewa-2"
})(["h1{font-size:2.5rem;color:#ffffff;font-weight:300;}h2{font-size:3rem;color:#00aaff;font-weight:bold;}h3{font-size:2rem;margin-top:1rem;span{color:#00d4ff;font-weight:bold;}}p{margin-top:1rem;color:#d9d9d9;line-height:1.8;max-width:500px;}"]);
const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__SocialIcons",
  componentId: "sc-lpewa-3"
})(["margin-top:1.5rem;display:flex;gap:1.5rem;font-size:2rem;svg{color:#00aaff;cursor:pointer;transition:transform 0.3s,color 0.3s;&:hover{color:#ffffff;transform:scale(1.2);}}"]);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link).withConfig({
  displayName: "profilestyles__StyledLink",
  componentId: "sc-lpewa-4"
})(["margin-top:2rem;padding:0.75rem 2rem;background:linear-gradient(to right,#00aaff,#0077cc);border:none;border-radius:30px;color:#ffffff;font-size:1rem;font-weight:bold;text-decoration:none;display:inline-block;text-align:center;transition:background 0.3s,transform 0.3s;&:hover{background:linear-gradient(to right,#0077cc,#005f99);transform:scale(1.05);}"]);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__ImageContainer",
  componentId: "sc-lpewa-5"
})(["display:flex;justify-content:center;align-items:center;"]);
const glow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{box-shadow:0 0 15px #00d4ff,0 0 30px #00d4ff,0 0 60px #ff0066,0 0 90px #ff0066;}50%{box-shadow:0 0 25px #ff0066,0 0 50px #ff0066,0 0 100px #00d4ff,0 0 150px #00d4ff;}100%{box-shadow:0 0 15px #00d4ff,0 0 30px #00d4ff,0 0 60px #ff0066,0 0 90px #ff0066;}"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "profilestyles__ImageWrapper",
  componentId: "sc-lpewa-6"
})(["width:400px;height:400px;border-radius:50%;background:linear-gradient(to right,#00aaff,#ff0066);padding:6px;display:flex;justify-content:center;align-items:center;animation:", " 3s infinite ease-in-out;"], glow);
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "profilestyles__ProfileImage",
  componentId: "sc-lpewa-7"
})(["width:100%;height:100%;object-fit:cover;border-radius:50%;"]);

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
//# sourceMappingURL=src_bootstrap_tsx.bundle.d7e7f29852f9ae9181b9.js.map
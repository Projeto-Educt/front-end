"use strict";
(self["webpackChunkfront_end"] = self["webpackChunkfront_end"] || []).push([["components-infos-confirm-email-stories"],{

/***/ "./src/stories/components/infos/confirm-email.stories.tsx":
/*!****************************************************************!*\
  !*** ./src/stories/components/infos/confirm-email.stories.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/next@14.2.18_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.81.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _components_infos_confirm_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/infos/confirm-email */ "./src/components/infos/confirm-email.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.15_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_pjgw67ghsjl5wdx4rpflhopwhu/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.15_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_pjgw67ghsjl5wdx4rpflhopwhu/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "infos/confirm-email",
  component: _components_infos_confirm_email__WEBPACK_IMPORTED_MODULE_1__["default"],
  args: {
    children: "nao sei"
  },
  argTypes: {
    children: {
      type: "string"
    }
  }
});
const Template = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_infos_confirm_email__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: "/home/staviasz/Desktop/educt/front-end/src/stories/components/infos/confirm-email.stories.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: "/home/staviasz/Desktop/educt/front-end/src/stories/components/infos/confirm-email.stories.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};
_c = Template;
var _c;
__webpack_require__.$Refresh$.register(_c, "Template");
;
const __namedExportsOrder = ["Template"];
Template.parameters = {
  ...Template.parameters,
  docs: {
    ...Template.parameters?.docs,
    source: {
      originalSource: "() => {\n  return <div>\n      <ConfirmEmail />\n    </div>;\n}",
      ...Template.parameters?.docs?.source
    }
  }
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

/***/ "./public/images/confirmar-e-mail.svg":
/*!********************************************!*\
  !*** ./public/images/confirmar-e-mail.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"static/media/public/images/confirmar-e-mail.svg","height":180,"width":180,"blurDataURL":"static/media/public/images/confirmar-e-mail.svg"});

/***/ }),

/***/ "./src/components/infos/confirm-email.tsx":
/*!************************************************!*\
  !*** ./src/components/infos/confirm-email.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmEmail)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/next@14.2.18_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.81.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _public_images_confirmar_e_mail_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @public/images/confirmar-e-mail.svg */ "./public/images/confirmar-e-mail.svg");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/.pnpm/@storybook+nextjs@8.4.5_@swc+core@1.9.3_@swc+helpers@0.5.5__esbuild@0.24.0_next@14.2.18_@babe_levj6hvzra5qpkpahjmwg6mrmq/node_modules/@storybook/nextjs/dist/images/next-image.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.15_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_pjgw67ghsjl5wdx4rpflhopwhu/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.15_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_pjgw67ghsjl5wdx4rpflhopwhu/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js");




function ConfirmEmail() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col items-center sm:items-start max-h-96 max-w-md",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                className: "max-w-48 max-h-48",
                src: _public_images_confirmar_e_mail_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
                alt: "Caixa de Cartas"
            }, void 0, false, {
                fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/confirm-email.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "my-4 text-3xl font-bold",
                children: "Confirme seu e-mail"
            }, void 0, false, {
                fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/confirm-email.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "text-center sm:text-start",
                children: "Quase pronto! Acesse seu e-mail e clique no link que enviamos para continuar. Se n\xe3o encontrar nosso e-mail, verifique sua caixa de spam."
            }, void 0, false, {
                fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/confirm-email.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/confirm-email.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = ConfirmEmail;
ConfirmEmail.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "ConfirmEmail"
};
var _c;
__webpack_require__.$Refresh$.register(_c, "ConfirmEmail");


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

/***/ })

}]);
//# sourceMappingURL=components-infos-confirm-email-stories.iframe.bundle.js.map
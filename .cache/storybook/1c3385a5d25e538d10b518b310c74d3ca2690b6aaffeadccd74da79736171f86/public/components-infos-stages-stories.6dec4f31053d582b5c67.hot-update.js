"use strict";
self["webpackHotUpdatefront_end"]("components-infos-stages-stories",{

/***/ "./src/components/infos/stages.tsx":
/*!*****************************************!*\
  !*** ./src/components/infos/stages.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stages)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/next@14.2.18_@babel+core@7.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.81.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _public_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @public/icons/check.svg */ "./public/icons/check.svg");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/.pnpm/@storybook+nextjs@8.4.5_@swc+core@1.9.3_@swc+helpers@0.5.5__esbuild@0.24.0_next@14.2.18_@babe_levj6hvzra5qpkpahjmwg6mrmq/node_modules/@storybook/nextjs/dist/images/next-image.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.15_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_pjgw67ghsjl5wdx4rpflhopwhu/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.5.15_react-refresh@0.14.2_type-fest@2.19.0_webpack-hot_pjgw67ghsjl5wdx4rpflhopwhu/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js");

"use client";



function Stages({ totalStages, currentStage }) {
    const currentStageIndex = currentStage || 0;
    const stageArray = Array.from({
        length: totalStages
    });
    const lastStage = stageArray.length - 1;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-gray-500 text-xs mb-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: `${currentStageIndex !== 0 && "text-primary-600"}`,
                        children: currentStageIndex
                    }, void 0, false, {
                        fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    "/",
                    totalStages,
                    " -",
                    " ",
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: `${currentStageIndex !== 0 && "text-primary-600"}`,
                        children: "Etapas completadas"
                    }, void 0, false, {
                        fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex gap-1",
                children: stageArray.map((_, index)=>{
                    const isCompleted = index < currentStageIndex;
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex gap-1 items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: `flex items-center justify-center w-6 h-6 rounded-full 
                 text-gray-800 border border-gray-200 text-xs ${isCompleted ? "bg-primary-600" : "bg-white"}`,
                                children: !isCompleted ? index + 1 : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    className: "w-4 h-4",
                                    src: _public_icons_check_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
                                    alt: "Check"
                                }, void 0, false, {
                                    fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                                    lineNumber: 36,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this),
                            lastStage !== index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: `inline-block w-1 h-1 rounded-full  ${isCompleted ? "bg-primary-600" : "bg-gray-200"}`
                                    }, void 0, false, {
                                        fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                                        lineNumber: 40,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: `inline-block w-1 h-1 rounded-full  ${isCompleted ? "bg-primary-600" : "bg-gray-200"}`
                                    }, void 0, false, {
                                        fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: `inline-block w-1 h-1 rounded-full  ${isCompleted ? "bg-primary-600" : "bg-gray-200"}`
                                    }, void 0, false, {
                                        fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                                        lineNumber: 46,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, index, true, {
                        fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "/home/staviasz/Desktop/educt/front-end/src/components/infos/stages.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Stages;
Stages.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Stages",
    "props": {
        "totalStages": {
            "required": true,
            "tsType": {
                "name": "number"
            },
            "description": ""
        },
        "currentStage": {
            "required": false,
            "tsType": {
                "name": "number"
            },
            "description": ""
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Stages");


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

});
//# sourceMappingURL=components-infos-stages-stories.6dec4f31053d582b5c67.hot-update.js.map
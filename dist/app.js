/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function createVueInstance() {
  new Vue({
    el: '#vueSofbox',
    data: {
      logoImage: 'logo-2.png',
      // ITEMS LISTED IN NAV
      navCenterList: ['Home', 'About us', 'Feature', 'Testimonials', 'Contact US'],
      // FLAG FOR INPUT IN NAV
      inputNavFlag: false,
      // COUNTER FOR SHOPPING CART IN NAVBAR
      shoppingCounter: 0,
      //Index for the condition of the blue-line
      activeItemIndex: null,
      //Array of photos in reportinAnalisys section
      reportingAnalisysPhoto: ['509.jpeg', '508.jpeg'],
      //Flag for switch photos in reportingAnalisys section
      reportingAnalisysFlag: 0,
      //flag for switch card in testimonials section
      testimonialFlag: 0,
      //flag for switch card in latest posts section
      latestPostsFlag: 0,
      footerLogo: '35.png',
      footerList1: ['About us', 'Theme', 'Features', 'Pricing', 'Blog'],
      footerList2: ['About Sofbox', 'Roadmap', 'How it Work', 'Team', 'News'],
      footerList3: ['About Us', 'Theme', 'Features', 'Pricing', 'Blog']
    },
    mounted: function mounted() {
      setInterval(this.switchLatestPost, 3000);
    },
    methods: {
      // GENERATE EFFECT OF THE SEARCHBAR IN NAV
      navEffectInput: function navEffectInput() {
        if (this.inputNavFlag == false) {
          this.inputNavFlag = true;
        } else {
          this.inputNavFlag = false;
        }

        console.log(this.inputNavFlag);
      },
      // GENERATE EFFECT OF THE ITEMS LISTED IN NAV
      navEffectItem: function navEffectItem(itemIndex) {
        this.activeItemIndex = itemIndex;
      },
      // INCREASE THE SHOPPING COUNTER IN NAV
      increaseShoppingCart: function increaseShoppingCart() {
        this.shoppingCounter++;
      },
      //SWITCH FIRST PHOTO IN REPORTING ANALISYS
      switchReportingAnalisys1: function switchReportingAnalisys1() {
        this.reportingAnalisysFlag = 0;
        console.log(this.reportingAnalisysFlag);
      },
      //SWITCH SECOND PHOTO IN REPORTING ANALISYS
      switchReportingAnalisys2: function switchReportingAnalisys2() {
        this.reportingAnalisysFlag = 1;
        console.log(this.reportingAnalisysFlag);
      },
      //SWITCH FIRST 2 CARDS IN TESTIMONIALS SECTION
      switchTestimonialBox1: function switchTestimonialBox1() {
        this.testimonialFlag = 0;
      },
      //SWITCH LAST 2 CARDS IN TESTIMONIALS SECTION
      switchTestimonialBox2: function switchTestimonialBox2() {
        this.testimonialFlag = 1;
        console.log(this.testimonialFlag);
      },
      //SWITCH 3 CARDS IN LATEST POSTS SECTION WITH TIMEINTERVAL
      switchLatestPost: function switchLatestPost() {
        if (this.latestPostsFlag == 1) {
          this.latestPostsFlag = 0;
        } else {
          this.latestPostsFlag = 1;
        }
      }
    }
  });
}

function sofbox() {
  createVueInstance();
}

document.addEventListener('DOMContentLoaded', sofbox);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
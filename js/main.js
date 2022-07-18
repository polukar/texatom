/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/forms */ "./src/js/project/forms.js");
/* harmony import */ var _project_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _project_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/video */ "./src/js/project/video.js");
/* harmony import */ var _project_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/slider */ "./src/js/project/slider.js");
/* harmony import */ var _project_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/map */ "./src/js/project/map.js");
/* harmony import */ var _project_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/tabs */ "./src/js/project/tabs.js");
/* harmony import */ var _project_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_project_tabs__WEBPACK_IMPORTED_MODULE_6__);




 // import "./project/header";


 // import "./project/anchor";

/***/ }),

/***/ "./src/js/project/forms.js":
/*!*********************************!*\
  !*** ./src/js/project/forms.js ***!
  \*********************************/
/***/ (function() {

var SEARCH = document.querySelector('.search');

if (SEARCH) {
  var searchInput = SEARCH.querySelector('.search__input input');
  var searchIco = SEARCH.querySelector('.search__ico');
  var searchTrigger = SEARCH.querySelector('.header__search-trigger');
  searchTrigger.addEventListener('click', function () {
    SEARCH.classList.add('-is-active');
  });
  searchInput.addEventListener('focus', function () {
    searchIco.classList.add('-is-active');
  });
  searchInput.addEventListener('blur', function () {
    searchIco.classList.remove('-is-active');
    SEARCH.classList.remove('-is-active');
    searchInput.value = "";
  });
}

var FORM = document.querySelector('.form');

if (FORM) {
  var submit = FORM.querySelector('.form__submit');
  var inputs = FORM.querySelectorAll('.input.requared');
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    inputs.forEach(function (elem) {
      var inputElem = elem.querySelector('input');
      var inputError = elem.querySelector('.input__error');

      if (inputElem.value < 1) {
        inputError.classList.add('-is-active');
      } else {
        inputError.classList.remove('-is-active');
      }
    });
  });
}

/***/ }),

/***/ "./src/js/project/map.js":
/*!*******************************!*\
  !*** ./src/js/project/map.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ymaps */ "./node_modules/ymaps/dist/ymaps.esm.js");

var MAP = document.querySelector('#map');

if (MAP) {
  window.onload = function () {
    ymaps__WEBPACK_IMPORTED_MODULE_0__["default"].load('https://api-maps.yandex.ru/2.1/?apikey=17c2ce43-9cd7-4184-94de-a46354f7f503&lang=ru_RU').then(function (maps) {
      var myMap = new maps.Map('map', {
        center: [59.999723, 30.260379],
        zoom: 13
      });
      var myPlacemark = new maps.Placemark([59.999723, 30.260379], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/marker.svg',
        iconImageSize: [78, 78],
        iconImageOffset: [-40, -70]
      });
      myMap.behaviors.disable('scrollZoom');
      myMap.geoObjects.add(myPlacemark);
    });
  };
}

/***/ }),

/***/ "./src/js/project/slider.js":
/*!**********************************!*\
  !*** ./src/js/project/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var projectSlidersParent = document.querySelectorAll('.tab');

if (projectSlidersParent) {
  var sliderNumberActive = document.querySelector('.slider-active');
  var sliderNumberAll = document.querySelector('.slider-all');
  projectSlidersParent.forEach(function (elem) {
    var slider = elem.querySelector('.project-slider');
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      on: {
        slideChange: function slideChange() {
          var index_currentSlide = swiper.realIndex;

          if (sliderNumberActive) {
            sliderNumberActive.innerHTML = "";
            sliderNumberActive.innerHTML = "".concat(index_currentSlide + 1);
          }
        },
        init: function init() {
          if (sliderNumberAll) {
            var allSlides = elem.querySelectorAll('.swiper-slide');
            sliderNumberAll.innerHTML = "";
            sliderNumberAll.innerHTML = " / ".concat(allSlides.length);
          }
        }
      }
    });
    var NEXT = elem.querySelector('.next');
    var PREV = elem.querySelector('.prev');

    if (NEXT, PREV) {
      NEXT.addEventListener('click', function () {
        swiper.slideNext();
      });
      PREV.addEventListener('click', function () {
        swiper.slidePrev();
      });
    }
  });
}

var mainSlider = document.querySelector('.main__slider');

if (mainSlider) {
  var mainNav = document.querySelector('.slider-nav--main');

  var _sliderNumberActive = mainNav.querySelector('.slider-active');

  var _sliderNumberAll = mainNav.querySelector('.slider-all');

  var mainSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.main__slider', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 35,
    on: {
      slideChange: function slideChange() {
        var index_currentSlide = mainSwiper.realIndex;

        if (_sliderNumberActive) {
          _sliderNumberActive.innerHTML = "";
          _sliderNumberActive.innerHTML = "".concat(index_currentSlide + 1);
        }
      },
      init: function init() {
        if (_sliderNumberAll) {
          var allSlides = document.querySelectorAll('.main__slider .swiper-slide');
          _sliderNumberAll.innerHTML = "";
          _sliderNumberAll.innerHTML = " / ".concat(allSlides.length);
        }
      }
    }
  });
  var NEXT = mainNav.querySelector('.next');
  var PREV = mainNav.querySelector('.prev');

  if (NEXT, PREV) {
    NEXT.addEventListener('click', function () {
      mainSwiper.slideNext();
    });
    PREV.addEventListener('click', function () {
      mainSwiper.slidePrev();
    });
  }
}

var mainActivitesSlider = document.querySelector('.main-activites__slider');

if (mainActivitesSlider) {
  var activitesNav = document.querySelector('.slider-nav--activites');

  var _sliderNumberActive2 = activitesNav.querySelector('.slider-active');

  var _sliderNumberAll2 = activitesNav.querySelector('.slider-all');

  var mainActivitesSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.main-activites__slider', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 35,
    on: {
      slideChange: function slideChange() {
        var index_currentSlide = mainActivitesSwiper.realIndex;

        if (_sliderNumberActive2) {
          _sliderNumberActive2.innerHTML = "";
          _sliderNumberActive2.innerHTML = "".concat(index_currentSlide + 1);
        }
      },
      init: function init() {
        if (_sliderNumberAll2) {
          var allSlides = mainActivitesSlider.querySelectorAll('.swiper-slide');
          _sliderNumberAll2.innerHTML = "";
          _sliderNumberAll2.innerHTML = " / ".concat(allSlides.length / 3);
        }
      }
    }
  });

  var _NEXT = activitesNav.querySelector('.next');

  var _PREV = activitesNav.querySelector('.prev');

  if (_NEXT, _PREV) {
    _NEXT.addEventListener('click', function () {
      mainActivitesSwiper.slideNext();
    });

    _PREV.addEventListener('click', function () {
      mainActivitesSwiper.slidePrev();
    });
  }
}

/***/ }),

/***/ "./src/js/project/tabs.js":
/*!********************************!*\
  !*** ./src/js/project/tabs.js ***!
  \********************************/
/***/ (function() {

var TABS_ITEMS = document.querySelectorAll('.tabs-item');
var TABS = document.querySelectorAll('.tab');

if (TABS_ITEMS && TABS) {
  var clearActive = function clearActive() {
    TABS_ITEMS.forEach(function (elem) {
      elem.classList.remove('-is-active');
    });
    TABS.forEach(function (elem) {
      elem.classList.remove('-is-active');
    });
  };

  TABS_ITEMS.forEach(function (elem, index) {
    elem.addEventListener('click', function () {
      clearActive();
      elem.classList.add('-is-active');
      TABS[index].classList.add('-is-active');
    });
  });
}

/***/ }),

/***/ "./src/js/project/video.js":
/*!*********************************!*\
  !*** ./src/js/project/video.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");

_fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind("[data-fancybox]", {});

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug_starter"] = self["webpackChunkgulp_pug_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
// ==UserScript==
// @name         DO iNTUItive
// @namespace    https://github.com/DO-Tools/iNTUItive
// @version      0.0.3
// @description  NT UI made intuitive & intelligent.
// @author       Silviu Burcea (silviuburceadev@gmail.com)
// @match        https://www.dugout-online.com/competitions/*
// ==/UserScript==


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/iNTUItive.user.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/world-cups.ts":
/*!********************************!*\
  !*** ./src/data/world-cups.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wch = {
    "16": {
        wcqualifiers: {
            "905003840": ["Chile", "Czech Republic", "Netherlands", "New Zealand", "South Africa"],
            "905003841": ["Hungary", "Iceland", "Norway", "Poland"],
            "905003842": ["Bangladesh", "Bosnia and Herzegovina", "Moldova", "Serbia", "Spain"],
            "905003843": ["Belgium", "Canada", "China", "Peru", "Slovakia"],
            "905003844": ["Albania", "Austria", "Brazil", "Malta", "South Korea"],
            "905003845": ["France", "Germany", "Mexico", "Sweden", "Thailand"],
            "905003846": ["Australia", "Ireland", "Portugal", "Slovenia", "Uruguay"],
            "905003847": ["Algeria", "Denmark", "Finland", "Scotland", "Switzerland"],
            "905003848": ["Argentina", "Colombia", "Rep. of Montenegro", "Turkey", "Venezuela"],
            "905003849": ["Croatia", "India", "Israel", "Italy", "Russia"],
            "905003850": ["Bolivia", "England", "Estonia", "Greece", "Romania"],
            "905003851": ["Bulgaria", "Japan", "Latvia", "Lithuania", "United States of America"],
        },
        wcqualifiers21: {
            "906003840": ["Israel", "Romania", "Spain", "Turkey", "United States of America"],
            "906003841": ["Austria", "Belgium", "France", "Thailand", "Venezuela"],
            "906003842": ["Algeria", "Argentina", "Denmark", "Ireland", "Poland"],
            "906003843": ["Canada", "India", "Malta", "Mexico", "Scotland"],
            "906003844": ["Bangladesh", "Hungary", "Lithuania", "Norway", "South Korea"],
            "906003845": ["Bulgaria", "Chile", "Estonia", "Finland", "Switzerland"],
            "906003846": ["Italy", "New Zealand", "Rep. of Montenegro", "Serbia", "South Africa"],
            "906003847": ["Bolivia", "Czech Republic", "England", "Netherlands", "Slovenia"],
            "906003848": ["Albania", "Bosnia and Herzegovina", "China", "Sweden", "Uruguay"],
            "906003849": ["Germany", "Moldova", "Peru", "Russia"],
            "906003850": ["Australia", "Brazil", "Croatia", "Latvia", "Portugal"],
            "906003851": ["Colombia", "Greece", "Iceland", "Japan", "Slovakia"],
        },
        wcqualifiers19: {
            "907003840": ["Bolivia", "Brazil", "Colombia", "Poland", "Sweden"],
            "907003841": ["Austria", "Bangladesh", "Denmark", "Scotland", "Slovakia"],
            "907003842": ["Belgium", "Finland", "Hungary", "New Zealand", "Romania"],
            "907003843": ["Bosnia and Herzegovina", "Canada", "England", "Japan", "Malta"],
            "907003844": ["Iceland", "Netherlands", "Rep. of Montenegro", "United States of America", "Venezuela"],
            "907003845": ["Bulgaria", "Ireland", "Israel", "Portugal", "Thailand"],
            "907003846": ["China", "Estonia", "Greece", "South Africa", "South Korea"],
            "907003847": ["Argentina", "Australia", "Russia", "Spain", "Switzerland"],
            "907003848": ["France", "India", "Latvia", "Lithuania", "Uruguay"],
            "907003849": ["Algeria", "Chile", "Germany", "Moldova", "Serbia"],
            "907003850": ["Albania", "Mexico", "Slovenia", "Turkey"],
            "907003851": ["Croatia", "Czech Republic", "Italy", "Norway", "Peru"],
        },
        wcqualifiers17: {
            "908003840": ["Argentina", "Hungary", "Italy", "Rep. of Montenegro", "Slovenia"],
            "908003841": ["Chile", "China", "Finland", "Portugal", "Serbia"],
            "908003842": ["Brazil", "New Zealand", "Russia", "Scotland", "United States of America"],
            "908003843": ["Algeria", "Colombia", "France", "Iceland", "Poland"],
            "908003844": ["Belgium", "Estonia", "Greece", "Ireland", "South Africa"],
            "908003845": ["Albania", "Bosnia and Herzegovina", "Latvia", "Lithuania", "Venezuela"],
            "908003846": ["Japan", "Moldova", "Peru", "Spain", "Turkey"],
            "908003847": ["Bolivia", "Bulgaria", "Denmark", "Sweden", "Thailand"],
            "908003848": ["Austria", "Croatia", "Czech Republic", "Mexico"],
            "908003849": ["Germany", "Malta", "Norway", "Slovakia", "South Korea"],
            "908003850": ["Australia", "Canada", "Romania", "Switzerland", "Uruguay"],
            "908003851": ["Bangladesh", "England", "India", "Israel", "Netherlands"],
        },
    },
};
exports.default = wch;


/***/ }),

/***/ "./src/lib/iNTUItive.user.ts":
/*!***********************************!*\
  !*** ./src/lib/iNTUItive.user.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var world_cups_1 = __importDefault(__webpack_require__(/*! ../data/world-cups */ "./src/data/world-cups.ts"));
(function () {
    "use strict";
    var competition = document.querySelector("select[name='countrySelect'] option:checked").value;
    var season = document.querySelector("select[name='selectSeason'] option:checked").value;
    var worldCup = world_cups_1.default[season];
    if (worldCup == null) {
        console.log("Could not find world cup data for season " + season);
        return;
    }
    var worldCupDraw = worldCup[competition];
    if (worldCupDraw == null) {
        console.log("Could not find world cup data for competition " + competition);
        return;
    }
    var options = document.querySelectorAll("select[name='divisionSelect'] > option");
    // Enhance the group names with the countries participating
    options.forEach(function (o) {
        var group = worldCupDraw[o.value];
        var countries = group.join(", ");
        o.textContent += " (" + countries + ")";
    });
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvd29ybGQtY3Vwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2lOVFVJdGl2ZS51c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTSxHQUFHLEdBQW9CO0lBQ3pCLElBQUksRUFBRTtRQUNGLFlBQVksRUFBRTtZQUNWLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQztZQUN0RixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFDdkQsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFFLHdCQUF3QixFQUFFLFNBQVMsRUFBRSxR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QUFPLENBQUMsR0FBRyxDQUFDLDhDQUE0QyxNQUFRLENBQUMsQ0FBQztRQUNsRSxPQUFPO0tBQ1Y7SUFDRCxJQUFNLFlBQVksR0FBaUIsUUFBUSxDQUFDLFdBQVcsQ0FBaUIsQ0FBQztJQUN6RSxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBaUQsV0FBYSxDQUFDLENBQUM7UUFDNUUsT0FBTztLQUNWO0lBQ0QsSUFBTSxPQUFPLEdBQWtDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQ25ILDJEQUEyRDtJQUMzRCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztRQUNkLElBQU0sS0FBSyxHQUFrQixZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELElBQU0sU0FBUyxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLFdBQVcsSUFBSSxPQUFLLFNBQVMsTUFBRyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJpTlRVSXRpdmUudXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpYi9pTlRVSXRpdmUudXNlci50c1wiKTtcbiIsImNvbnN0IHdjaDogV29ybGRDdXBIaXN0b3J5ID0ge1xuICAgIFwiMTZcIjoge1xuICAgICAgICB3Y3F1YWxpZmllcnM6IHtcbiAgICAgICAgICAgIFwiOTA1MDAzODQwXCI6IFtcIkNoaWxlXCIsIFwiQ3plY2ggUmVwdWJsaWNcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIk5ldyBaZWFsYW5kXCIsIFwiU291dGggQWZyaWNhXCJdLFxuICAgICAgICAgICAgXCI5MDUwMDM4NDFcIjogW1wiSHVuZ2FyeVwiLCBcIkljZWxhbmRcIiwgXCJOb3J3YXlcIiwgXCJQb2xhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNTAwMzg0MlwiOiBbXCJCYW5nbGFkZXNoXCIsIFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcIk1vbGRvdmFcIiwgXCJTZXJiaWFcIiwgXCJTcGFpblwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQzXCI6IFtcIkJlbGdpdW1cIiwgXCJDYW5hZGFcIiwgXCJDaGluYVwiLCBcIlBlcnVcIiwgXCJTbG92YWtpYVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ0XCI6IFtcIkFsYmFuaWFcIiwgXCJBdXN0cmlhXCIsIFwiQnJhemlsXCIsIFwiTWFsdGFcIiwgXCJTb3V0aCBLb3JlYVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ1XCI6IFtcIkZyYW5jZVwiLCBcIkdlcm1hbnlcIiwgXCJNZXhpY29cIiwgXCJTd2VkZW5cIiwgXCJUaGFpbGFuZFwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ2XCI6IFtcIkF1c3RyYWxpYVwiLCBcIklyZWxhbmRcIiwgXCJQb3J0dWdhbFwiLCBcIlNsb3ZlbmlhXCIsIFwiVXJ1Z3VheVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ3XCI6IFtcIkFsZ2VyaWFcIiwgXCJEZW5tYXJrXCIsIFwiRmlubGFuZFwiLCBcIlNjb3RsYW5kXCIsIFwiU3dpdHplcmxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNTAwMzg0OFwiOiBbXCJBcmdlbnRpbmFcIiwgXCJDb2xvbWJpYVwiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlR1cmtleVwiLCBcIlZlbmV6dWVsYVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ5XCI6IFtcIkNyb2F0aWFcIiwgXCJJbmRpYVwiLCBcIklzcmFlbFwiLCBcIkl0YWx5XCIsIFwiUnVzc2lhXCJdLFxuICAgICAgICAgICAgXCI5MDUwMDM4NTBcIjogW1wiQm9saXZpYVwiLCBcIkVuZ2xhbmRcIiwgXCJFc3RvbmlhXCIsIFwiR3JlZWNlXCIsIFwiUm9tYW5pYVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODUxXCI6IFtcIkJ1bGdhcmlhXCIsIFwiSmFwYW5cIiwgXCJMYXR2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHdjcXVhbGlmaWVyczIxOiB7XG4gICAgICAgICAgICBcIjkwNjAwMzg0MFwiOiBbXCJJc3JhZWxcIiwgXCJSb21hbmlhXCIsIFwiU3BhaW5cIiwgXCJUdXJrZXlcIiwgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIl0sXG4gICAgICAgICAgICBcIjkwNjAwMzg0MVwiOiBbXCJBdXN0cmlhXCIsIFwiQmVsZ2l1bVwiLCBcIkZyYW5jZVwiLCBcIlRoYWlsYW5kXCIsIFwiVmVuZXp1ZWxhXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDJcIjogW1wiQWxnZXJpYVwiLCBcIkFyZ2VudGluYVwiLCBcIkRlbm1hcmtcIiwgXCJJcmVsYW5kXCIsIFwiUG9sYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDNcIjogW1wiQ2FuYWRhXCIsIFwiSW5kaWFcIiwgXCJNYWx0YVwiLCBcIk1leGljb1wiLCBcIlNjb3RsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDRcIjogW1wiQmFuZ2xhZGVzaFwiLCBcIkh1bmdhcnlcIiwgXCJMaXRodWFuaWFcIiwgXCJOb3J3YXlcIiwgXCJTb3V0aCBLb3JlYVwiXSxcbiAgICAgICAgICAgIFwiOTA2MDAzODQ1XCI6IFtcIkJ1bGdhcmlhXCIsIFwiQ2hpbGVcIiwgXCJFc3RvbmlhXCIsIFwiRmlubGFuZFwiLCBcIlN3aXR6ZXJsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDZcIjogW1wiSXRhbHlcIiwgXCJOZXcgWmVhbGFuZFwiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlNlcmJpYVwiLCBcIlNvdXRoIEFmcmljYVwiXSxcbiAgICAgICAgICAgIFwiOTA2MDAzODQ3XCI6IFtcIkJvbGl2aWFcIiwgXCJDemVjaCBSZXB1YmxpY1wiLCBcIkVuZ2xhbmRcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlNsb3ZlbmlhXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDhcIjogW1wiQWxiYW5pYVwiLCBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJDaGluYVwiLCBcIlN3ZWRlblwiLCBcIlVydWd1YXlcIl0sXG4gICAgICAgICAgICBcIjkwNjAwMzg0OVwiOiBbXCJHZXJtYW55XCIsIFwiTW9sZG92YVwiLCBcIlBlcnVcIiwgXCJSdXNzaWFcIl0sXG4gICAgICAgICAgICBcIjkwNjAwMzg1MFwiOiBbXCJBdXN0cmFsaWFcIiwgXCJCcmF6aWxcIiwgXCJDcm9hdGlhXCIsIFwiTGF0dmlhXCIsIFwiUG9ydHVnYWxcIl0sXG4gICAgICAgICAgICBcIjkwNjAwMzg1MVwiOiBbXCJDb2xvbWJpYVwiLCBcIkdyZWVjZVwiLCBcIkljZWxhbmRcIiwgXCJKYXBhblwiLCBcIlNsb3Zha2lhXCJdLFxuICAgICAgICB9LFxuICAgICAgICB3Y3F1YWxpZmllcnMxOToge1xuICAgICAgICAgICAgXCI5MDcwMDM4NDBcIjogW1wiQm9saXZpYVwiLCBcIkJyYXppbFwiLCBcIkNvbG9tYmlhXCIsIFwiUG9sYW5kXCIsIFwiU3dlZGVuXCJdLFxuICAgICAgICAgICAgXCI5MDcwMDM4NDFcIjogW1wiQXVzdHJpYVwiLCBcIkJhbmdsYWRlc2hcIiwgXCJEZW5tYXJrXCIsIFwiU2NvdGxhbmRcIiwgXCJTbG92YWtpYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQyXCI6IFtcIkJlbGdpdW1cIiwgXCJGaW5sYW5kXCIsIFwiSHVuZ2FyeVwiLCBcIk5ldyBaZWFsYW5kXCIsIFwiUm9tYW5pYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQzXCI6IFtcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJDYW5hZGFcIiwgXCJFbmdsYW5kXCIsIFwiSmFwYW5cIiwgXCJNYWx0YVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQ0XCI6IFtcIkljZWxhbmRcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBcIlZlbmV6dWVsYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQ1XCI6IFtcIkJ1bGdhcmlhXCIsIFwiSXJlbGFuZFwiLCBcIklzcmFlbFwiLCBcIlBvcnR1Z2FsXCIsIFwiVGhhaWxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNzAwMzg0NlwiOiBbXCJDaGluYVwiLCBcIkVzdG9uaWFcIiwgXCJHcmVlY2VcIiwgXCJTb3V0aCBBZnJpY2FcIiwgXCJTb3V0aCBLb3JlYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQ3XCI6IFtcIkFyZ2VudGluYVwiLCBcIkF1c3RyYWxpYVwiLCBcIlJ1c3NpYVwiLCBcIlNwYWluXCIsIFwiU3dpdHplcmxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNzAwMzg0OFwiOiBbXCJGcmFuY2VcIiwgXCJJbmRpYVwiLCBcIkxhdHZpYVwiLCBcIkxpdGh1YW5pYVwiLCBcIlVydWd1YXlcIl0sXG4gICAgICAgICAgICBcIjkwNzAwMzg0OVwiOiBbXCJBbGdlcmlhXCIsIFwiQ2hpbGVcIiwgXCJHZXJtYW55XCIsIFwiTW9sZG92YVwiLCBcIlNlcmJpYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODUwXCI6IFtcIkFsYmFuaWFcIiwgXCJNZXhpY29cIiwgXCJTbG92ZW5pYVwiLCBcIlR1cmtleVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODUxXCI6IFtcIkNyb2F0aWFcIiwgXCJDemVjaCBSZXB1YmxpY1wiLCBcIkl0YWx5XCIsIFwiTm9yd2F5XCIsIFwiUGVydVwiXSxcbiAgICAgICAgfSxcbiAgICAgICAgd2NxdWFsaWZpZXJzMTc6IHtcbiAgICAgICAgICAgIFwiOTA4MDAzODQwXCI6IFtcIkFyZ2VudGluYVwiLCBcIkh1bmdhcnlcIiwgXCJJdGFseVwiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlNsb3ZlbmlhXCJdLFxuICAgICAgICAgICAgXCI5MDgwMDM4NDFcIjogW1wiQ2hpbGVcIiwgXCJDaGluYVwiLCBcIkZpbmxhbmRcIiwgXCJQb3J0dWdhbFwiLCBcIlNlcmJpYVwiXSxcbiAgICAgICAgICAgIFwiOTA4MDAzODQyXCI6IFtcIkJyYXppbFwiLCBcIk5ldyBaZWFsYW5kXCIsIFwiUnVzc2lhXCIsIFwiU2NvdGxhbmRcIiwgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg0M1wiOiBbXCJBbGdlcmlhXCIsIFwiQ29sb21iaWFcIiwgXCJGcmFuY2VcIiwgXCJJY2VsYW5kXCIsIFwiUG9sYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDgwMDM4NDRcIjogW1wiQmVsZ2l1bVwiLCBcIkVzdG9uaWFcIiwgXCJHcmVlY2VcIiwgXCJJcmVsYW5kXCIsIFwiU291dGggQWZyaWNhXCJdLFxuICAgICAgICAgICAgXCI5MDgwMDM4NDVcIjogW1wiQWxiYW5pYVwiLCBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJMYXR2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJWZW5lenVlbGFcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg0NlwiOiBbXCJKYXBhblwiLCBcIk1vbGRvdmFcIiwgXCJQZXJ1XCIsIFwiU3BhaW5cIiwgXCJUdXJrZXlcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg0N1wiOiBbXCJCb2xpdmlhXCIsIFwiQnVsZ2FyaWFcIiwgXCJEZW5tYXJrXCIsIFwiU3dlZGVuXCIsIFwiVGhhaWxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg0OFwiOiBbXCJBdXN0cmlhXCIsIFwiQ3JvYXRpYVwiLCBcIkN6ZWNoIFJlcHVibGljXCIsIFwiTWV4aWNvXCJdLFxuICAgICAgICAgICAgXCI5MDgwMDM4NDlcIjogW1wiR2VybWFueVwiLCBcIk1hbHRhXCIsIFwiTm9yd2F5XCIsIFwiU2xvdmFraWFcIiwgXCJTb3V0aCBLb3JlYVwiXSxcbiAgICAgICAgICAgIFwiOTA4MDAzODUwXCI6IFtcIkF1c3RyYWxpYVwiLCBcIkNhbmFkYVwiLCBcIlJvbWFuaWFcIiwgXCJTd2l0emVybGFuZFwiLCBcIlVydWd1YXlcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg1MVwiOiBbXCJCYW5nbGFkZXNoXCIsIFwiRW5nbGFuZFwiLCBcIkluZGlhXCIsIFwiSXNyYWVsXCIsIFwiTmV0aGVybGFuZHNcIl0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCB3Y2g7XG4iLCJpbXBvcnQgd29ybGRDdXBzIGZyb20gXCIuLi9kYXRhL3dvcmxkLWN1cHNcIjtcblxuKCgpOiB2b2lkID0+IHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBjb25zdCBjb21wZXRpdGlvbjogV29ybGRDdXBMZXZlbCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcInNlbGVjdFtuYW1lPSdjb3VudHJ5U2VsZWN0J10gb3B0aW9uOmNoZWNrZWRcIlxuICAgICkgYXMgSFRNTE9wdGlvbkVsZW1lbnQpLnZhbHVlIGFzIFdvcmxkQ3VwTGV2ZWw7XG4gICAgY29uc3Qgc2Vhc29uOiBXb3JsZEN1cFNlYXNvbiA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcInNlbGVjdFtuYW1lPSdzZWxlY3RTZWFzb24nXSBvcHRpb246Y2hlY2tlZFwiXG4gICAgKSBhcyBIVE1MT3B0aW9uRWxlbWVudCkudmFsdWUgYXMgV29ybGRDdXBTZWFzb247XG4gICAgY29uc3Qgd29ybGRDdXA6IFBhcnRpYWw8V29ybGRDdXA+ID0gd29ybGRDdXBzW3NlYXNvbl07XG4gICAgaWYgKHdvcmxkQ3VwID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvdWxkIG5vdCBmaW5kIHdvcmxkIGN1cCBkYXRhIGZvciBzZWFzb24gJHtzZWFzb259YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgd29ybGRDdXBEcmF3OiBXb3JsZEN1cERyYXcgPSB3b3JsZEN1cFtjb21wZXRpdGlvbl0gYXMgV29ybGRDdXBEcmF3O1xuICAgIGlmICh3b3JsZEN1cERyYXcgPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ291bGQgbm90IGZpbmQgd29ybGQgY3VwIGRhdGEgZm9yIGNvbXBldGl0aW9uICR7Y29tcGV0aXRpb259YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uczogTm9kZUxpc3RPZjxIVE1MT3B0aW9uRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W25hbWU9J2RpdmlzaW9uU2VsZWN0J10gPiBvcHRpb25cIik7XG4gICAgLy8gRW5oYW5jZSB0aGUgZ3JvdXAgbmFtZXMgd2l0aCB0aGUgY291bnRyaWVzIHBhcnRpY2lwYXRpbmdcbiAgICBvcHRpb25zLmZvckVhY2goKG8pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXA6IFdvcmxkQ3VwR3JvdXAgPSB3b3JsZEN1cERyYXdbby52YWx1ZV07XG4gICAgICAgIGNvbnN0IGNvdW50cmllczogc3RyaW5nID0gZ3JvdXAuam9pbihcIiwgXCIpO1xuICAgICAgICBvLnRleHRDb250ZW50ICs9IGAgKCR7Y291bnRyaWVzfSlgO1xuICAgIH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
// ==UserScript==
// @name         DO iNTUItive
// @namespace    https://github.com/DO-Tools/iNTUItive
// @version      0.0.4
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var world_cups_1 = __importDefault(__webpack_require__(1));
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


/***/ }),
/* 1 */
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
    "17": {
        wcqualifiers: {
            "905004096": ["Algeria", "Canada", "China", "Ireland", "Russia"],
            "905004097": ["Australia", "Bosnia and Herzegovina", "Japan", "Romania", "New Zealand"],
            "905004098": ["Croatia", "France", "India", "Latvia", "Norway"],
            "905004099": ["Austria", "Greece", "Peru", "Rep. of Montenegro", "Switzerland"],
            "905004100": ["Chile", "Denmark", "Estonia", "Hungary", "Italy"],
            "905004101": ["Bulgaria", "Slovakia", "Slovenia", "South Korea", "Turkey"],
            "905004102": ["Argentina", "Finland", "Germany", "Iceland", "Israel"],
            "905004103": ["Bangladesh", "Belgium", "Brazil", "Malta", "Netherlands"],
            "905004104": ["Czech Republic", "Mexico", "Scotland", "South Africa"],
            "905004105": ["Poland", "Serbia", "Sweden", "Uruguay", "Venezuela"],
            "905004106": ["Colombia", "England", "Portugal", "Spain", "Thailand"],
            "905004107": ["Albania", "Bolivia", "Lithuania", "Moldova", "United States of America"],
        },
        wcqualifiers21: {
            "906004096": ["Argentina", "Finland", "Iceland", "Ireland", "Latvia"],
            "906004097": ["Bosnia and Herzegovina", "China", "India", "Portugal", "Switzerland"],
            "906004098": ["Bangladesh", "Belgium", "Greece", "Peru", "Scotland"],
            "906004099": ["England", "Italy", "Japan", "Moldova", "Romania"],
            "906004100": ["Denmark", "Germany", "Norway", "Poland", "South Africa"],
            "906004101": ["Czech Republic", "Estonia", "Netherlands", "Turkey"],
            "906004102": ["Algeria", "Rep. of Montenegro", "Russia", "Sweden", "United States of America"],
            "906004103": ["Canada", "Mexico", "Serbia", "Uruguay", "Venezuela"],
            "906004104": ["Austria", "Croatia", "France", "Hungary", "Spain"],
            "906004105": ["Albania", "Brazil", "Israel", "South Korea", "Thailand"],
            "906004106": ["Australia", "Bolivia", "Bulgaria", "Lithuania", "New Zealand"],
            "906004107": ["Chile", "Colombia", "Malta", "Slovakia", "Slovenia"],
        },
        wcqualifiers19: {
            "907004096": ["Finland", "Latvia", "Lithuania", "Malta", "Spain"],
            "907004097": ["Austria", "Bosnia and Herzegovina", "Germany", "Rep. of Montenegro", "Turkey"],
            "907004098": ["Albania", "Canada", "Italy", "Peru", "Switzerland"],
            "907004099": ["Bangladesh", "Belgium", "Brazil", "Bulgaria", "China"],
            "907004100": ["Bolivia", "Denmark", "Portugal", "Romania", "Sweden"],
            "907004101": ["Estonia", "Greece", "Ireland", "Russia", "Venezuela"],
            "907004102": ["Algeria", "Croatia", "France", "Israel", "Mexico"],
            "907004103": ["India", "Netherlands", "New Zealand", "Scotland"],
            "907004104": ["Chile", "Serbia", "Slovakia", "Slovenia", "South Africa"],
            "907004105": ["Colombia", "Iceland", "Japan", "Poland", "Uruguay"],
            "907004106": ["Australia", "Moldova", "South Korea", "Thailand", "United States of America"],
            "907004107": ["Argentina", "Czech Republic", "England", "Hungary", "Norway"],
        },
        wcqualifiers17: {
            "908004096": ["Brazil", "Canada", "Moldova", "Serbia", "Slovenia"],
            "908004097": ["Finland", "Latvia", "Slovakia", "Turkey"],
            "908004098": ["Algeria", "Mexico", "Scotland", "South Korea", "Uruguay"],
            "908004099": ["Denmark", "Ireland", "New Zealand", "Spain", "Thailand"],
            "908004100": ["Australia", "Austria", "Greece", "Hungary", "India"],
            "908004101": ["Bulgaria", "Malta", "Portugal", "South Africa", "Venezuela"],
            "908004102": ["Argentina", "Estonia", "Israel", "Japan", "Norway"],
            "908004103": ["Bolivia", "England", "Germany", "Switzerland", "United States of America"],
            "908004104": ["Albania", "Netherlands", "Poland", "Rep. of Montenegro", "Sweden"],
            "908004105": ["Belgium", "Croatia", "Czech Republic", "Lithuania", "Peru"],
            "908004106": ["Chile", "China", "Iceland", "Italy", "Romania"],
            "908004107": ["Bangladesh", "Bosnia and Herzegovina", "Colombia", "France", "Russia"],
        },
    },
};
exports.default = wch;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pTlRVSXRpdmUudXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93b3JsZC1jdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQSwyREFBMkM7QUFFM0MsQ0FBQztJQUNHLFlBQVksQ0FBQztJQUNiLElBQU0sV0FBVyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUN0RCw2Q0FBNkMsQ0FDMUIsQ0FBQyxLQUFzQixDQUFDO0lBQy9DLElBQU0sTUFBTSxHQUFvQixRQUFRLENBQUMsYUFBYSxDQUNsRCw0Q0FBNEMsQ0FDekIsQ0FBQyxLQUF1QixDQUFDO0lBQ2hELElBQU0sUUFBUSxHQUFzQixvQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELElBQUksUUFB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V0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLDBCQUEwQixDQUFDO1lBQ3pGLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQztZQUNqRixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUM7WUFDMUUsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztZQUM5RCxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7U0FDeEY7S0FDSjtDQUNKLENBQUM7QUFFRixrQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiaU5UVUl0aXZlLnVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgd29ybGRDdXBzIGZyb20gXCIuLi9kYXRhL3dvcmxkLWN1cHNcIjtcblxuKCgpOiB2b2lkID0+IHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBjb25zdCBjb21wZXRpdGlvbjogV29ybGRDdXBMZXZlbCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcInNlbGVjdFtuYW1lPSdjb3VudHJ5U2VsZWN0J10gb3B0aW9uOmNoZWNrZWRcIlxuICAgICkgYXMgSFRNTE9wdGlvbkVsZW1lbnQpLnZhbHVlIGFzIFdvcmxkQ3VwTGV2ZWw7XG4gICAgY29uc3Qgc2Vhc29uOiBXb3JsZEN1cFNlYXNvbiA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcInNlbGVjdFtuYW1lPSdzZWxlY3RTZWFzb24nXSBvcHRpb246Y2hlY2tlZFwiXG4gICAgKSBhcyBIVE1MT3B0aW9uRWxlbWVudCkudmFsdWUgYXMgV29ybGRDdXBTZWFzb247XG4gICAgY29uc3Qgd29ybGRDdXA6IFBhcnRpYWw8V29ybGRDdXA+ID0gd29ybGRDdXBzW3NlYXNvbl07XG4gICAgaWYgKHdvcmxkQ3VwID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvdWxkIG5vdCBmaW5kIHdvcmxkIGN1cCBkYXRhIGZvciBzZWFzb24gJHtzZWFzb259YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgd29ybGRDdXBEcmF3OiBXb3JsZEN1cERyYXcgPSB3b3JsZEN1cFtjb21wZXRpdGlvbl0gYXMgV29ybGRDdXBEcmF3O1xuICAgIGlmICh3b3JsZEN1cERyYXcgPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ291bGQgbm90IGZpbmQgd29ybGQgY3VwIGRhdGEgZm9yIGNvbXBldGl0aW9uICR7Y29tcGV0aXRpb259YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uczogTm9kZUxpc3RPZjxIVE1MT3B0aW9uRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W25hbWU9J2RpdmlzaW9uU2VsZWN0J10gPiBvcHRpb25cIik7XG4gICAgLy8gRW5oYW5jZSB0aGUgZ3JvdXAgbmFtZXMgd2l0aCB0aGUgY291bnRyaWVzIHBhcnRpY2lwYXRpbmdcbiAgICBvcHRpb25zLmZvckVhY2goKG8pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXA6IFdvcmxkQ3VwR3JvdXAgPSB3b3JsZEN1cERyYXdbby52YWx1ZV07XG4gICAgICAgIGNvbnN0IGNvdW50cmllczogc3RyaW5nID0gZ3JvdXAuam9pbihcIiwgXCIpO1xuICAgICAgICBvLnRleHRDb250ZW50ICs9IGAgKCR7Y291bnRyaWVzfSlgO1xuICAgIH0pO1xufSkoKTtcbiIsImNvbnN0IHdjaDogV29ybGRDdXBIaXN0b3J5ID0ge1xuICAgIFwiMTZcIjoge1xuICAgICAgICB3Y3F1YWxpZmllcnM6IHtcbiAgICAgICAgICAgIFwiOTA1MDAzODQwXCI6IFtcIkNoaWxlXCIsIFwiQ3plY2ggUmVwdWJsaWNcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIk5ldyBaZWFsYW5kXCIsIFwiU291dGggQWZyaWNhXCJdLFxuICAgICAgICAgICAgXCI5MDUwMDM4NDFcIjogW1wiSHVuZ2FyeVwiLCBcIkljZWxhbmRcIiwgXCJOb3J3YXlcIiwgXCJQb2xhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNTAwMzg0MlwiOiBbXCJCYW5nbGFkZXNoXCIsIFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcIk1vbGRvdmFcIiwgXCJTZXJiaWFcIiwgXCJTcGFpblwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQzXCI6IFtcIkJlbGdpdW1cIiwgXCJDYW5hZGFcIiwgXCJDaGluYVwiLCBcIlBlcnVcIiwgXCJTbG92YWtpYVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ0XCI6IFtcIkFsYmFuaWFcIiwgXCJBdXN0cmlhXCIsIFwiQnJhemlsXCIsIFwiTWFsdGFcIiwgXCJTb3V0aCBLb3JlYVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ1XCI6IFtcIkZyYW5jZVwiLCBcIkdlcm1hbnlcIiwgXCJNZXhpY29cIiwgXCJTd2VkZW5cIiwgXCJUaGFpbGFuZFwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ2XCI6IFtcIkF1c3RyYWxpYVwiLCBcIklyZWxhbmRcIiwgXCJQb3J0dWdhbFwiLCBcIlNsb3ZlbmlhXCIsIFwiVXJ1Z3VheVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ3XCI6IFtcIkFsZ2VyaWFcIiwgXCJEZW5tYXJrXCIsIFwiRmlubGFuZFwiLCBcIlNjb3RsYW5kXCIsIFwiU3dpdHplcmxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNTAwMzg0OFwiOiBbXCJBcmdlbnRpbmFcIiwgXCJDb2xvbWJpYVwiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlR1cmtleVwiLCBcIlZlbmV6dWVsYVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODQ5XCI6IFtcIkNyb2F0aWFcIiwgXCJJbmRpYVwiLCBcIklzcmFlbFwiLCBcIkl0YWx5XCIsIFwiUnVzc2lhXCJdLFxuICAgICAgICAgICAgXCI5MDUwMDM4NTBcIjogW1wiQm9saXZpYVwiLCBcIkVuZ2xhbmRcIiwgXCJFc3RvbmlhXCIsIFwiR3JlZWNlXCIsIFwiUm9tYW5pYVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDAzODUxXCI6IFtcIkJ1bGdhcmlhXCIsIFwiSmFwYW5cIiwgXCJMYXR2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHdjcXVhbGlmaWVyczIxOiB7XG4gICAgICAgICAgICBcIjkwNjAwMzg0MFwiOiBbXCJJc3JhZWxcIiwgXCJSb21hbmlhXCIsIFwiU3BhaW5cIiwgXCJUdXJrZXlcIiwgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIl0sXG4gICAgICAgICAgICBcIjkwNjAwMzg0MVwiOiBbXCJBdXN0cmlhXCIsIFwiQmVsZ2l1bVwiLCBcIkZyYW5jZVwiLCBcIlRoYWlsYW5kXCIsIFwiVmVuZXp1ZWxhXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDJcIjogW1wiQWxnZXJpYVwiLCBcIkFyZ2VudGluYVwiLCBcIkRlbm1hcmtcIiwgXCJJcmVsYW5kXCIsIFwiUG9sYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDNcIjogW1wiQ2FuYWRhXCIsIFwiSW5kaWFcIiwgXCJNYWx0YVwiLCBcIk1leGljb1wiLCBcIlNjb3RsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDRcIjogW1wiQmFuZ2xhZGVzaFwiLCBcIkh1bmdhcnlcIiwgXCJMaXRodWFuaWFcIiwgXCJOb3J3YXlcIiwgXCJTb3V0aCBLb3JlYVwiXSxcbiAgICAgICAgICAgIFwiOTA2MDAzODQ1XCI6IFtcIkJ1bGdhcmlhXCIsIFwiQ2hpbGVcIiwgXCJFc3RvbmlhXCIsIFwiRmlubGFuZFwiLCBcIlN3aXR6ZXJsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDZcIjogW1wiSXRhbHlcIiwgXCJOZXcgWmVhbGFuZFwiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlNlcmJpYVwiLCBcIlNvdXRoIEFmcmljYVwiXSxcbiAgICAgICAgICAgIFwiOTA2MDAzODQ3XCI6IFtcIkJvbGl2aWFcIiwgXCJDemVjaCBSZXB1YmxpY1wiLCBcIkVuZ2xhbmRcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlNsb3ZlbmlhXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDM4NDhcIjogW1wiQWxiYW5pYVwiLCBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJDaGluYVwiLCBcIlN3ZWRlblwiLCBcIlVydWd1YXlcIl0sXG4gICAgICAgICAgICBcIjkwNjAwMzg0OVwiOiBbXCJHZXJtYW55XCIsIFwiTW9sZG92YVwiLCBcIlBlcnVcIiwgXCJSdXNzaWFcIl0sXG4gICAgICAgICAgICBcIjkwNjAwMzg1MFwiOiBbXCJBdXN0cmFsaWFcIiwgXCJCcmF6aWxcIiwgXCJDcm9hdGlhXCIsIFwiTGF0dmlhXCIsIFwiUG9ydHVnYWxcIl0sXG4gICAgICAgICAgICBcIjkwNjAwMzg1MVwiOiBbXCJDb2xvbWJpYVwiLCBcIkdyZWVjZVwiLCBcIkljZWxhbmRcIiwgXCJKYXBhblwiLCBcIlNsb3Zha2lhXCJdLFxuICAgICAgICB9LFxuICAgICAgICB3Y3F1YWxpZmllcnMxOToge1xuICAgICAgICAgICAgXCI5MDcwMDM4NDBcIjogW1wiQm9saXZpYVwiLCBcIkJyYXppbFwiLCBcIkNvbG9tYmlhXCIsIFwiUG9sYW5kXCIsIFwiU3dlZGVuXCJdLFxuICAgICAgICAgICAgXCI5MDcwMDM4NDFcIjogW1wiQXVzdHJpYVwiLCBcIkJhbmdsYWRlc2hcIiwgXCJEZW5tYXJrXCIsIFwiU2NvdGxhbmRcIiwgXCJTbG92YWtpYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQyXCI6IFtcIkJlbGdpdW1cIiwgXCJGaW5sYW5kXCIsIFwiSHVuZ2FyeVwiLCBcIk5ldyBaZWFsYW5kXCIsIFwiUm9tYW5pYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQzXCI6IFtcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJDYW5hZGFcIiwgXCJFbmdsYW5kXCIsIFwiSmFwYW5cIiwgXCJNYWx0YVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQ0XCI6IFtcIkljZWxhbmRcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBcIlZlbmV6dWVsYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQ1XCI6IFtcIkJ1bGdhcmlhXCIsIFwiSXJlbGFuZFwiLCBcIklzcmFlbFwiLCBcIlBvcnR1Z2FsXCIsIFwiVGhhaWxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNzAwMzg0NlwiOiBbXCJDaGluYVwiLCBcIkVzdG9uaWFcIiwgXCJHcmVlY2VcIiwgXCJTb3V0aCBBZnJpY2FcIiwgXCJTb3V0aCBLb3JlYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODQ3XCI6IFtcIkFyZ2VudGluYVwiLCBcIkF1c3RyYWxpYVwiLCBcIlJ1c3NpYVwiLCBcIlNwYWluXCIsIFwiU3dpdHplcmxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNzAwMzg0OFwiOiBbXCJGcmFuY2VcIiwgXCJJbmRpYVwiLCBcIkxhdHZpYVwiLCBcIkxpdGh1YW5pYVwiLCBcIlVydWd1YXlcIl0sXG4gICAgICAgICAgICBcIjkwNzAwMzg0OVwiOiBbXCJBbGdlcmlhXCIsIFwiQ2hpbGVcIiwgXCJHZXJtYW55XCIsIFwiTW9sZG92YVwiLCBcIlNlcmJpYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODUwXCI6IFtcIkFsYmFuaWFcIiwgXCJNZXhpY29cIiwgXCJTbG92ZW5pYVwiLCBcIlR1cmtleVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDAzODUxXCI6IFtcIkNyb2F0aWFcIiwgXCJDemVjaCBSZXB1YmxpY1wiLCBcIkl0YWx5XCIsIFwiTm9yd2F5XCIsIFwiUGVydVwiXSxcbiAgICAgICAgfSxcbiAgICAgICAgd2NxdWFsaWZpZXJzMTc6IHtcbiAgICAgICAgICAgIFwiOTA4MDAzODQwXCI6IFtcIkFyZ2VudGluYVwiLCBcIkh1bmdhcnlcIiwgXCJJdGFseVwiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlNsb3ZlbmlhXCJdLFxuICAgICAgICAgICAgXCI5MDgwMDM4NDFcIjogW1wiQ2hpbGVcIiwgXCJDaGluYVwiLCBcIkZpbmxhbmRcIiwgXCJQb3J0dWdhbFwiLCBcIlNlcmJpYVwiXSxcbiAgICAgICAgICAgIFwiOTA4MDAzODQyXCI6IFtcIkJyYXppbFwiLCBcIk5ldyBaZWFsYW5kXCIsIFwiUnVzc2lhXCIsIFwiU2NvdGxhbmRcIiwgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg0M1wiOiBbXCJBbGdlcmlhXCIsIFwiQ29sb21iaWFcIiwgXCJGcmFuY2VcIiwgXCJJY2VsYW5kXCIsIFwiUG9sYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDgwMDM4NDRcIjogW1wiQmVsZ2l1bVwiLCBcIkVzdG9uaWFcIiwgXCJHcmVlY2VcIiwgXCJJcmVsYW5kXCIsIFwiU291dGggQWZyaWNhXCJdLFxuICAgICAgICAgICAgXCI5MDgwMDM4NDVcIjogW1wiQWxiYW5pYVwiLCBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJMYXR2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJWZW5lenVlbGFcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg0NlwiOiBbXCJKYXBhblwiLCBcIk1vbGRvdmFcIiwgXCJQZXJ1XCIsIFwiU3BhaW5cIiwgXCJUdXJrZXlcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg0N1wiOiBbXCJCb2xpdmlhXCIsIFwiQnVsZ2FyaWFcIiwgXCJEZW5tYXJrXCIsIFwiU3dlZGVuXCIsIFwiVGhhaWxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg0OFwiOiBbXCJBdXN0cmlhXCIsIFwiQ3JvYXRpYVwiLCBcIkN6ZWNoIFJlcHVibGljXCIsIFwiTWV4aWNvXCJdLFxuICAgICAgICAgICAgXCI5MDgwMDM4NDlcIjogW1wiR2VybWFueVwiLCBcIk1hbHRhXCIsIFwiTm9yd2F5XCIsIFwiU2xvdmFraWFcIiwgXCJTb3V0aCBLb3JlYVwiXSxcbiAgICAgICAgICAgIFwiOTA4MDAzODUwXCI6IFtcIkF1c3RyYWxpYVwiLCBcIkNhbmFkYVwiLCBcIlJvbWFuaWFcIiwgXCJTd2l0emVybGFuZFwiLCBcIlVydWd1YXlcIl0sXG4gICAgICAgICAgICBcIjkwODAwMzg1MVwiOiBbXCJCYW5nbGFkZXNoXCIsIFwiRW5nbGFuZFwiLCBcIkluZGlhXCIsIFwiSXNyYWVsXCIsIFwiTmV0aGVybGFuZHNcIl0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcIjE3XCI6IHtcbiAgICAgICAgd2NxdWFsaWZpZXJzOiB7XG4gICAgICAgICAgICBcIjkwNTAwNDA5NlwiOiBbXCJBbGdlcmlhXCIsIFwiQ2FuYWRhXCIsIFwiQ2hpbmFcIiwgXCJJcmVsYW5kXCIsIFwiUnVzc2lhXCJdLFxuICAgICAgICAgICAgXCI5MDUwMDQwOTdcIjogW1wiQXVzdHJhbGlhXCIsIFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcIkphcGFuXCIsIFwiUm9tYW5pYVwiLCBcIk5ldyBaZWFsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDUwMDQwOThcIjogW1wiQ3JvYXRpYVwiLCBcIkZyYW5jZVwiLCBcIkluZGlhXCIsIFwiTGF0dmlhXCIsIFwiTm9yd2F5XCJdLFxuICAgICAgICAgICAgXCI5MDUwMDQwOTlcIjogW1wiQXVzdHJpYVwiLCBcIkdyZWVjZVwiLCBcIlBlcnVcIiwgXCJSZXAuIG9mIE1vbnRlbmVncm9cIiwgXCJTd2l0emVybGFuZFwiXSxcbiAgICAgICAgICAgIFwiOTA1MDA0MTAwXCI6IFtcIkNoaWxlXCIsIFwiRGVubWFya1wiLCBcIkVzdG9uaWFcIiwgXCJIdW5nYXJ5XCIsIFwiSXRhbHlcIl0sXG4gICAgICAgICAgICBcIjkwNTAwNDEwMVwiOiBbXCJCdWxnYXJpYVwiLCBcIlNsb3Zha2lhXCIsIFwiU2xvdmVuaWFcIiwgXCJTb3V0aCBLb3JlYVwiLCBcIlR1cmtleVwiXSxcbiAgICAgICAgICAgIFwiOTA1MDA0MTAyXCI6IFtcIkFyZ2VudGluYVwiLCBcIkZpbmxhbmRcIiwgXCJHZXJtYW55XCIsIFwiSWNlbGFuZFwiLCBcIklzcmFlbFwiXSxcbiAgICAgICAgICAgIFwiOTA1MDA0MTAzXCI6IFtcIkJhbmdsYWRlc2hcIiwgXCJCZWxnaXVtXCIsIFwiQnJhemlsXCIsIFwiTWFsdGFcIiwgXCJOZXRoZXJsYW5kc1wiXSxcbiAgICAgICAgICAgIFwiOTA1MDA0MTA0XCI6IFtcIkN6ZWNoIFJlcHVibGljXCIsIFwiTWV4aWNvXCIsIFwiU2NvdGxhbmRcIiwgXCJTb3V0aCBBZnJpY2FcIl0sXG4gICAgICAgICAgICBcIjkwNTAwNDEwNVwiOiBbXCJQb2xhbmRcIiwgXCJTZXJiaWFcIiwgXCJTd2VkZW5cIiwgXCJVcnVndWF5XCIsIFwiVmVuZXp1ZWxhXCJdLFxuICAgICAgICAgICAgXCI5MDUwMDQxMDZcIjogW1wiQ29sb21iaWFcIiwgXCJFbmdsYW5kXCIsIFwiUG9ydHVnYWxcIiwgXCJTcGFpblwiLCBcIlRoYWlsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDUwMDQxMDdcIjogW1wiQWxiYW5pYVwiLCBcIkJvbGl2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJNb2xkb3ZhXCIsIFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCJdLFxuICAgICAgICB9LFxuICAgICAgICB3Y3F1YWxpZmllcnMyMToge1xuICAgICAgICAgICAgXCI5MDYwMDQwOTZcIjogW1wiQXJnZW50aW5hXCIsIFwiRmlubGFuZFwiLCBcIkljZWxhbmRcIiwgXCJJcmVsYW5kXCIsIFwiTGF0dmlhXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDQwOTdcIjogW1wiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcIkNoaW5hXCIsIFwiSW5kaWFcIiwgXCJQb3J0dWdhbFwiLCBcIlN3aXR6ZXJsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDQwOThcIjogW1wiQmFuZ2xhZGVzaFwiLCBcIkJlbGdpdW1cIiwgXCJHcmVlY2VcIiwgXCJQZXJ1XCIsIFwiU2NvdGxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNjAwNDA5OVwiOiBbXCJFbmdsYW5kXCIsIFwiSXRhbHlcIiwgXCJKYXBhblwiLCBcIk1vbGRvdmFcIiwgXCJSb21hbmlhXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDQxMDBcIjogW1wiRGVubWFya1wiLCBcIkdlcm1hbnlcIiwgXCJOb3J3YXlcIiwgXCJQb2xhbmRcIiwgXCJTb3V0aCBBZnJpY2FcIl0sXG4gICAgICAgICAgICBcIjkwNjAwNDEwMVwiOiBbXCJDemVjaCBSZXB1YmxpY1wiLCBcIkVzdG9uaWFcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlR1cmtleVwiXSxcbiAgICAgICAgICAgIFwiOTA2MDA0MTAyXCI6IFtcIkFsZ2VyaWFcIiwgXCJSZXAuIG9mIE1vbnRlbmVncm9cIiwgXCJSdXNzaWFcIiwgXCJTd2VkZW5cIiwgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIl0sXG4gICAgICAgICAgICBcIjkwNjAwNDEwM1wiOiBbXCJDYW5hZGFcIiwgXCJNZXhpY29cIiwgXCJTZXJiaWFcIiwgXCJVcnVndWF5XCIsIFwiVmVuZXp1ZWxhXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDQxMDRcIjogW1wiQXVzdHJpYVwiLCBcIkNyb2F0aWFcIiwgXCJGcmFuY2VcIiwgXCJIdW5nYXJ5XCIsIFwiU3BhaW5cIl0sXG4gICAgICAgICAgICBcIjkwNjAwNDEwNVwiOiBbXCJBbGJhbmlhXCIsIFwiQnJhemlsXCIsIFwiSXNyYWVsXCIsIFwiU291dGggS29yZWFcIiwgXCJUaGFpbGFuZFwiXSxcbiAgICAgICAgICAgIFwiOTA2MDA0MTA2XCI6IFtcIkF1c3RyYWxpYVwiLCBcIkJvbGl2aWFcIiwgXCJCdWxnYXJpYVwiLCBcIkxpdGh1YW5pYVwiLCBcIk5ldyBaZWFsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDYwMDQxMDdcIjogW1wiQ2hpbGVcIiwgXCJDb2xvbWJpYVwiLCBcIk1hbHRhXCIsIFwiU2xvdmFraWFcIiwgXCJTbG92ZW5pYVwiXSxcbiAgICAgICAgfSxcbiAgICAgICAgd2NxdWFsaWZpZXJzMTk6IHtcbiAgICAgICAgICAgIFwiOTA3MDA0MDk2XCI6IFtcIkZpbmxhbmRcIiwgXCJMYXR2aWFcIiwgXCJMaXRodWFuaWFcIiwgXCJNYWx0YVwiLCBcIlNwYWluXCJdLFxuICAgICAgICAgICAgXCI5MDcwMDQwOTdcIjogW1wiQXVzdHJpYVwiLCBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJHZXJtYW55XCIsIFwiUmVwLiBvZiBNb250ZW5lZ3JvXCIsIFwiVHVya2V5XCJdLFxuICAgICAgICAgICAgXCI5MDcwMDQwOThcIjogW1wiQWxiYW5pYVwiLCBcIkNhbmFkYVwiLCBcIkl0YWx5XCIsIFwiUGVydVwiLCBcIlN3aXR6ZXJsYW5kXCJdLFxuICAgICAgICAgICAgXCI5MDcwMDQwOTlcIjogW1wiQmFuZ2xhZGVzaFwiLCBcIkJlbGdpdW1cIiwgXCJCcmF6aWxcIiwgXCJCdWxnYXJpYVwiLCBcIkNoaW5hXCJdLFxuICAgICAgICAgICAgXCI5MDcwMDQxMDBcIjogW1wiQm9saXZpYVwiLCBcIkRlbm1hcmtcIiwgXCJQb3J0dWdhbFwiLCBcIlJvbWFuaWFcIiwgXCJTd2VkZW5cIl0sXG4gICAgICAgICAgICBcIjkwNzAwNDEwMVwiOiBbXCJFc3RvbmlhXCIsIFwiR3JlZWNlXCIsIFwiSXJlbGFuZFwiLCBcIlJ1c3NpYVwiLCBcIlZlbmV6dWVsYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDA0MTAyXCI6IFtcIkFsZ2VyaWFcIiwgXCJDcm9hdGlhXCIsIFwiRnJhbmNlXCIsIFwiSXNyYWVsXCIsIFwiTWV4aWNvXCJdLFxuICAgICAgICAgICAgXCI5MDcwMDQxMDNcIjogW1wiSW5kaWFcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIk5ldyBaZWFsYW5kXCIsIFwiU2NvdGxhbmRcIl0sXG4gICAgICAgICAgICBcIjkwNzAwNDEwNFwiOiBbXCJDaGlsZVwiLCBcIlNlcmJpYVwiLCBcIlNsb3Zha2lhXCIsIFwiU2xvdmVuaWFcIiwgXCJTb3V0aCBBZnJpY2FcIl0sXG4gICAgICAgICAgICBcIjkwNzAwNDEwNVwiOiBbXCJDb2xvbWJpYVwiLCBcIkljZWxhbmRcIiwgXCJKYXBhblwiLCBcIlBvbGFuZFwiLCBcIlVydWd1YXlcIl0sXG4gICAgICAgICAgICBcIjkwNzAwNDEwNlwiOiBbXCJBdXN0cmFsaWFcIiwgXCJNb2xkb3ZhXCIsIFwiU291dGggS29yZWFcIiwgXCJUaGFpbGFuZFwiLCBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiXSxcbiAgICAgICAgICAgIFwiOTA3MDA0MTA3XCI6IFtcIkFyZ2VudGluYVwiLCBcIkN6ZWNoIFJlcHVibGljXCIsIFwiRW5nbGFuZFwiLCBcIkh1bmdhcnlcIiwgXCJOb3J3YXlcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHdjcXVhbGlmaWVyczE3OiB7XG4gICAgICAgICAgICBcIjkwODAwNDA5NlwiOiBbXCJCcmF6aWxcIiwgXCJDYW5hZGFcIiwgXCJNb2xkb3ZhXCIsIFwiU2VyYmlhXCIsIFwiU2xvdmVuaWFcIl0sXG4gICAgICAgICAgICBcIjkwODAwNDA5N1wiOiBbXCJGaW5sYW5kXCIsIFwiTGF0dmlhXCIsIFwiU2xvdmFraWFcIiwgXCJUdXJrZXlcIl0sXG4gICAgICAgICAgICBcIjkwODAwNDA5OFwiOiBbXCJBbGdlcmlhXCIsIFwiTWV4aWNvXCIsIFwiU2NvdGxhbmRcIiwgXCJTb3V0aCBLb3JlYVwiLCBcIlVydWd1YXlcIl0sXG4gICAgICAgICAgICBcIjkwODAwNDA5OVwiOiBbXCJEZW5tYXJrXCIsIFwiSXJlbGFuZFwiLCBcIk5ldyBaZWFsYW5kXCIsIFwiU3BhaW5cIiwgXCJUaGFpbGFuZFwiXSxcbiAgICAgICAgICAgIFwiOTA4MDA0MTAwXCI6IFtcIkF1c3RyYWxpYVwiLCBcIkF1c3RyaWFcIiwgXCJHcmVlY2VcIiwgXCJIdW5nYXJ5XCIsIFwiSW5kaWFcIl0sXG4gICAgICAgICAgICBcIjkwODAwNDEwMVwiOiBbXCJCdWxnYXJpYVwiLCBcIk1hbHRhXCIsIFwiUG9ydHVnYWxcIiwgXCJTb3V0aCBBZnJpY2FcIiwgXCJWZW5lenVlbGFcIl0sXG4gICAgICAgICAgICBcIjkwODAwNDEwMlwiOiBbXCJBcmdlbnRpbmFcIiwgXCJFc3RvbmlhXCIsIFwiSXNyYWVsXCIsIFwiSmFwYW5cIiwgXCJOb3J3YXlcIl0sXG4gICAgICAgICAgICBcIjkwODAwNDEwM1wiOiBbXCJCb2xpdmlhXCIsIFwiRW5nbGFuZFwiLCBcIkdlcm1hbnlcIiwgXCJTd2l0emVybGFuZFwiLCBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiXSxcbiAgICAgICAgICAgIFwiOTA4MDA0MTA0XCI6IFtcIkFsYmFuaWFcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlBvbGFuZFwiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiLCBcIlN3ZWRlblwiXSxcbiAgICAgICAgICAgIFwiOTA4MDA0MTA1XCI6IFtcIkJlbGdpdW1cIiwgXCJDcm9hdGlhXCIsIFwiQ3plY2ggUmVwdWJsaWNcIiwgXCJMaXRodWFuaWFcIiwgXCJQZXJ1XCJdLFxuICAgICAgICAgICAgXCI5MDgwMDQxMDZcIjogW1wiQ2hpbGVcIiwgXCJDaGluYVwiLCBcIkljZWxhbmRcIiwgXCJJdGFseVwiLCBcIlJvbWFuaWFcIl0sXG4gICAgICAgICAgICBcIjkwODAwNDEwN1wiOiBbXCJCYW5nbGFkZXNoXCIsIFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcIkNvbG9tYmlhXCIsIFwiRnJhbmNlXCIsIFwiUnVzc2lhXCJdLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3Y2g7XG4iXSwic291cmNlUm9vdCI6IiJ9
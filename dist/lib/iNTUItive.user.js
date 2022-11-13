// ==UserScript==
// @name         DO iNTUItive
// @namespace    https://github.com/DO-Tools/iNTUItive
// @version      0.1.0
// @description  NT UI made intuitive & intelligent.
// @author       Silviu Burcea (silviuburceadev@gmail.com)
// @match        https://www.dugout-online.com/competitions/*
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 928:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var wch = {
    "23": {
        wcqualifiers: {
            "905005632": ["Slovenia", "Bangladesh", "Ireland", "Greece", "South Africa"],
            "905005633": ["Estonia", "Serbia", "Colombia", "Bulgaria", "India"],
            "905005634": ["Poland", "Turkey", "Austria", "Bolivia", "Albania"],
            "905005635": ["United States of America", "Canada", "Rep. of Montenegro", "Malta", "Israel"],
            "905005636": ["Denmark", "France", "Italy", "Latvia", "Hungary"],
            "905005637": ["Chile", "China", "Netherlands", "New Zealand", "Czech republic"],
            "905005638": ["England", "Germany", "Romania", "Scotland", "Iceland"],
            "905005639": ["Australia", "Norway", "Sweden", "Peru", "Japan"],
            "905005640": ["Bosnia and Herzegovina", "Brazil", "Finland", "Russia"],
            "905005641": ["Argentina", "Croatia", "Uruguay", "Venezuela", "Thailand"],
            "905005642": ["Belgium", "Spain", "Mexico", "Switzerland", "Algeria"],
            "905005643": ["Portugal", "South Korea", "Slovakia", "Lithuania", "Moldova"],
        },
        wcqualifiers21: {
            "906005632": ["Belgium", "Finland", "Colombia", "Bolivia", "Ireland"],
            "906005633": ["Netherlands", "Scotland", "Slovakia", "United States of America", "Switzerland"],
            "906005634": ["Brazil", "Uruguay", "Albania", "Canada"],
            "906005635": ["Australia", "Portugal", "Turkey", "Mexico", "Rep. of Montenegro"],
            "906005636": ["Serbia", "Slovenia", "Venezuela", "Israel", "Iceland"],
            "906005637": ["Bosnia and Herzegovina", "Latvia", "Poland", "Japan", "Algeria"],
            "906005638": ["Croatia", "France", "New Zealand", "Greece", "Moldova"],
            "906005639": ["Romania", "Chile", "Peru", "South Korea", "Lithuania"],
            "906005640": ["Estonia", "Italy", "Czech republic", "Austria", "South Africa"],
            "906005641": ["Denmark", "China", "Argentina", "Bulgaria", "India"],
            "906005642": ["Germany", "Spain", "Norway", "Bangladesh", "Russia"],
            "906005643": ["England", "Sweden", "Hungary", "Thailand", "Malta"],
        },
        wcqualifiers19: {
            "907005632": ["Bosnia and Herzegovina", "Latvia", "China", "Iceland"],
            "907005633": ["Croatia", "Denmark", "Estonia", "Malta", "Israel"],
            "907005634": ["Brazil", "Spain", "Bangladesh", "Canada", "Thailand"],
            "907005635": ["Peru", "Slovakia", "United States of America", "Lithuania", "Rep. of Montenegro"],
            "907005636": ["France", "Italy", "New Zealand", "Colombia", "Mexico"],
            "907005637": ["Hungary", "Austria", "Australia", "Venezuela", "Moldova"],
            "907005638": ["Chile", "Netherlands", "Slovenia", "Uruguay", "India"],
            "907005639": ["Romania", "South Korea", "Albania", "Switzerland", "South Africa"],
            "907005640": ["Belgium", "Poland", "Ireland", "Russia", "Greece"],
            "907005641": ["Finland", "Portugal", "Japan", "Bulgaria", "Algeria"],
            "907005642": ["Scotland", "Norway", "Czech republic", "Sweden", "Bolivia"],
            "907005643": ["Argentina", "England", "Serbia", "Turkey", "Germany"],
        },
        wcqualifiers17: {
            "908005632": ["Croatia", "Romania", "Slovakia", "Bulgaria", "Thailand"],
            "908005633": ["Denmark", "Uruguay", "Venezuela", "Moldova"],
            "908005634": ["Chile", "Bangladesh", "Canada", "Switzerland", "India"],
            "908005635": ["Colombia", "Austria", "Hungary", "Algeria", "Iceland"],
            "908005636": ["Germany", "Serbia", "Turkey", "Russia", "Greece"],
            "908005637": ["Spain", "Japan", "Bolivia", "Malta", "Israel"],
            "908005638": ["Australia", "Sweden", "Czech republic", "South Korea", "South Africa"],
            "908005639": ["Finland", "New Zealand", "Scotland", "Norway", "United States of America"],
            "908005640": ["Argentina", "England", "Estonia", "Ireland", "Lithuania"],
            "908005641": ["Bosnia and Herzegovina", "China", "France", "Mexico", "Rep. of Montenegro"],
            "908005642": ["Italy", "Latvia", "Netherlands", "Poland", "Slovenia"],
            "908005643": ["Belgium", "Brazil", "Portugal", "Peru", "Albania"],
        },
    },
};
exports["default"] = wch;


/***/ }),

/***/ 727:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var world_cups_1 = __importDefault(__webpack_require__(928));
(function () {
    "use strict";
    var competition = document.querySelector("select[name='countrySelect'] option:checked").value;
    var season = document.querySelector("select[name='selectSeason'] option:checked").value;
    var worldCup = world_cups_1.default[season];
    if (worldCup == null) {
        console.log("Could not find world cup data for season ".concat(season));
        return;
    }
    var worldCupDraw = worldCup[competition];
    if (worldCupDraw == null) {
        console.log("Could not find world cup data for competition ".concat(competition));
        return;
    }
    var options = document.querySelectorAll("select[name='divisionSelect'] > option");
    // Enhance the group names with the countries participating
    options.forEach(function (o) {
        var group = worldCupDraw[o.value];
        var countries = group.join(", ");
        o.textContent += " (".concat(countries, ")");
    });
})();


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(727);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHVpdGl2ZS8uL3NyYy9kYXRhL3dvcmxkLWN1cHMudHMiLCJ3ZWJwYWNrOi8vaW50dWl0aXZlLy4vc3JjL2xpYi9pTlRVSXRpdmUudXNlci50cyIsIndlYnBhY2s6Ly9pbnR1aXRpdmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50dWl0aXZlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaW50dWl0aXZlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9pbnR1aXRpdmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdjaDogV29ybGRDdXBIaXN0b3J5ID0ge1xyXG4gIFwiMjNcIjoge1xyXG4gICAgd2NxdWFsaWZpZXJzOiB7XHJcbiAgICAgIFwiOTA1MDA1NjMyXCI6IFtcIlNsb3ZlbmlhXCIsIFwiQmFuZ2xhZGVzaFwiLCBcIklyZWxhbmRcIiwgXCJHcmVlY2VcIiwgXCJTb3V0aCBBZnJpY2FcIl0sXHJcbiAgICAgIFwiOTA1MDA1NjMzXCI6IFtcIkVzdG9uaWFcIiwgXCJTZXJiaWFcIiwgXCJDb2xvbWJpYVwiLCBcIkJ1bGdhcmlhXCIsIFwiSW5kaWFcIl0sXHJcbiAgICAgIFwiOTA1MDA1NjM0XCI6IFtcIlBvbGFuZFwiLCBcIlR1cmtleVwiLCBcIkF1c3RyaWFcIiwgXCJCb2xpdmlhXCIsIFwiQWxiYW5pYVwiXSxcclxuICAgICAgXCI5MDUwMDU2MzVcIjogW1wiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIFwiQ2FuYWRhXCIsIFwiUmVwLiBvZiBNb250ZW5lZ3JvXCIsIFwiTWFsdGFcIiwgXCJJc3JhZWxcIl0sXHJcbiAgICAgIFwiOTA1MDA1NjM2XCI6IFtcIkRlbm1hcmtcIiwgXCJGcmFuY2VcIiwgXCJJdGFseVwiLCBcIkxhdHZpYVwiLCBcIkh1bmdhcnlcIl0sXHJcbiAgICAgIFwiOTA1MDA1NjM3XCI6IFtcIkNoaWxlXCIsIFwiQ2hpbmFcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIk5ldyBaZWFsYW5kXCIsIFwiQ3plY2ggcmVwdWJsaWNcIl0sXHJcbiAgICAgIFwiOTA1MDA1NjM4XCI6IFtcIkVuZ2xhbmRcIiwgXCJHZXJtYW55XCIsIFwiUm9tYW5pYVwiLCBcIlNjb3RsYW5kXCIsIFwiSWNlbGFuZFwiXSxcclxuICAgICAgXCI5MDUwMDU2MzlcIjogW1wiQXVzdHJhbGlhXCIsIFwiTm9yd2F5XCIsIFwiU3dlZGVuXCIsIFwiUGVydVwiLCBcIkphcGFuXCJdLFxyXG4gICAgICBcIjkwNTAwNTY0MFwiOiBbXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIFwiQnJhemlsXCIsIFwiRmlubGFuZFwiLCBcIlJ1c3NpYVwiXSxcclxuICAgICAgXCI5MDUwMDU2NDFcIjogW1wiQXJnZW50aW5hXCIsIFwiQ3JvYXRpYVwiLCBcIlVydWd1YXlcIiwgXCJWZW5lenVlbGFcIiwgXCJUaGFpbGFuZFwiXSxcclxuICAgICAgXCI5MDUwMDU2NDJcIjogW1wiQmVsZ2l1bVwiLCBcIlNwYWluXCIsIFwiTWV4aWNvXCIsIFwiU3dpdHplcmxhbmRcIiwgXCJBbGdlcmlhXCJdLFxyXG4gICAgICBcIjkwNTAwNTY0M1wiOiBbXCJQb3J0dWdhbFwiLCBcIlNvdXRoIEtvcmVhXCIsIFwiU2xvdmFraWFcIiwgXCJMaXRodWFuaWFcIiwgXCJNb2xkb3ZhXCJdLFxyXG4gICAgfSxcclxuICAgIHdjcXVhbGlmaWVyczIxOiB7XHJcbiAgICAgIFwiOTA2MDA1NjMyXCI6IFtcIkJlbGdpdW1cIiwgXCJGaW5sYW5kXCIsIFwiQ29sb21iaWFcIiwgXCJCb2xpdmlhXCIsIFwiSXJlbGFuZFwiXSxcclxuICAgICAgXCI5MDYwMDU2MzNcIjogW1wiTmV0aGVybGFuZHNcIiwgXCJTY290bGFuZFwiLCBcIlNsb3Zha2lhXCIsIFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIFwiU3dpdHplcmxhbmRcIl0sXHJcbiAgICAgIFwiOTA2MDA1NjM0XCI6IFtcIkJyYXppbFwiLCBcIlVydWd1YXlcIiwgXCJBbGJhbmlhXCIsIFwiQ2FuYWRhXCJdLFxyXG4gICAgICBcIjkwNjAwNTYzNVwiOiBbXCJBdXN0cmFsaWFcIiwgXCJQb3J0dWdhbFwiLCBcIlR1cmtleVwiLCBcIk1leGljb1wiLCBcIlJlcC4gb2YgTW9udGVuZWdyb1wiXSxcclxuICAgICAgXCI5MDYwMDU2MzZcIjogW1wiU2VyYmlhXCIsIFwiU2xvdmVuaWFcIiwgXCJWZW5lenVlbGFcIiwgXCJJc3JhZWxcIiwgXCJJY2VsYW5kXCJdLFxyXG4gICAgICBcIjkwNjAwNTYzN1wiOiBbXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIFwiTGF0dmlhXCIsIFwiUG9sYW5kXCIsIFwiSmFwYW5cIiwgXCJBbGdlcmlhXCJdLFxyXG4gICAgICBcIjkwNjAwNTYzOFwiOiBbXCJDcm9hdGlhXCIsIFwiRnJhbmNlXCIsIFwiTmV3IFplYWxhbmRcIiwgXCJHcmVlY2VcIiwgXCJNb2xkb3ZhXCJdLFxyXG4gICAgICBcIjkwNjAwNTYzOVwiOiBbXCJSb21hbmlhXCIsIFwiQ2hpbGVcIiwgXCJQZXJ1XCIsIFwiU291dGggS29yZWFcIiwgXCJMaXRodWFuaWFcIl0sXHJcbiAgICAgIFwiOTA2MDA1NjQwXCI6IFtcIkVzdG9uaWFcIiwgXCJJdGFseVwiLCBcIkN6ZWNoIHJlcHVibGljXCIsIFwiQXVzdHJpYVwiLCBcIlNvdXRoIEFmcmljYVwiXSxcclxuICAgICAgXCI5MDYwMDU2NDFcIjogW1wiRGVubWFya1wiLCBcIkNoaW5hXCIsIFwiQXJnZW50aW5hXCIsIFwiQnVsZ2FyaWFcIiwgXCJJbmRpYVwiXSxcclxuICAgICAgXCI5MDYwMDU2NDJcIjogW1wiR2VybWFueVwiLCBcIlNwYWluXCIsIFwiTm9yd2F5XCIsIFwiQmFuZ2xhZGVzaFwiLCBcIlJ1c3NpYVwiXSxcclxuICAgICAgXCI5MDYwMDU2NDNcIjogW1wiRW5nbGFuZFwiLCBcIlN3ZWRlblwiLCBcIkh1bmdhcnlcIiwgXCJUaGFpbGFuZFwiLCBcIk1hbHRhXCJdLFxyXG4gICAgfSxcclxuICAgIHdjcXVhbGlmaWVyczE5OiB7XHJcbiAgICAgIFwiOTA3MDA1NjMyXCI6IFtcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJMYXR2aWFcIiwgXCJDaGluYVwiLCBcIkljZWxhbmRcIl0sXHJcbiAgICAgIFwiOTA3MDA1NjMzXCI6IFtcIkNyb2F0aWFcIiwgXCJEZW5tYXJrXCIsIFwiRXN0b25pYVwiLCBcIk1hbHRhXCIsIFwiSXNyYWVsXCJdLFxyXG4gICAgICBcIjkwNzAwNTYzNFwiOiBbXCJCcmF6aWxcIiwgXCJTcGFpblwiLCBcIkJhbmdsYWRlc2hcIiwgXCJDYW5hZGFcIiwgXCJUaGFpbGFuZFwiXSxcclxuICAgICAgXCI5MDcwMDU2MzVcIjogW1wiUGVydVwiLCBcIlNsb3Zha2lhXCIsIFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIFwiTGl0aHVhbmlhXCIsIFwiUmVwLiBvZiBNb250ZW5lZ3JvXCJdLFxyXG4gICAgICBcIjkwNzAwNTYzNlwiOiBbXCJGcmFuY2VcIiwgXCJJdGFseVwiLCBcIk5ldyBaZWFsYW5kXCIsIFwiQ29sb21iaWFcIiwgXCJNZXhpY29cIl0sXHJcbiAgICAgIFwiOTA3MDA1NjM3XCI6IFtcIkh1bmdhcnlcIiwgXCJBdXN0cmlhXCIsIFwiQXVzdHJhbGlhXCIsIFwiVmVuZXp1ZWxhXCIsIFwiTW9sZG92YVwiXSxcclxuICAgICAgXCI5MDcwMDU2MzhcIjogW1wiQ2hpbGVcIiwgXCJOZXRoZXJsYW5kc1wiLCBcIlNsb3ZlbmlhXCIsIFwiVXJ1Z3VheVwiLCBcIkluZGlhXCJdLFxyXG4gICAgICBcIjkwNzAwNTYzOVwiOiBbXCJSb21hbmlhXCIsIFwiU291dGggS29yZWFcIiwgXCJBbGJhbmlhXCIsIFwiU3dpdHplcmxhbmRcIiwgXCJTb3V0aCBBZnJpY2FcIl0sXHJcbiAgICAgIFwiOTA3MDA1NjQwXCI6IFtcIkJlbGdpdW1cIiwgXCJQb2xhbmRcIiwgXCJJcmVsYW5kXCIsIFwiUnVzc2lhXCIsIFwiR3JlZWNlXCJdLFxyXG4gICAgICBcIjkwNzAwNTY0MVwiOiBbXCJGaW5sYW5kXCIsIFwiUG9ydHVnYWxcIiwgXCJKYXBhblwiLCBcIkJ1bGdhcmlhXCIsIFwiQWxnZXJpYVwiXSxcclxuICAgICAgXCI5MDcwMDU2NDJcIjogW1wiU2NvdGxhbmRcIiwgXCJOb3J3YXlcIiwgXCJDemVjaCByZXB1YmxpY1wiLCBcIlN3ZWRlblwiLCBcIkJvbGl2aWFcIl0sXHJcbiAgICAgIFwiOTA3MDA1NjQzXCI6IFtcIkFyZ2VudGluYVwiLCBcIkVuZ2xhbmRcIiwgXCJTZXJiaWFcIiwgXCJUdXJrZXlcIiwgXCJHZXJtYW55XCJdLFxyXG4gICAgfSxcclxuICAgIHdjcXVhbGlmaWVyczE3OiB7XHJcbiAgICAgIFwiOTA4MDA1NjMyXCI6IFtcIkNyb2F0aWFcIiwgXCJSb21hbmlhXCIsIFwiU2xvdmFraWFcIiwgXCJCdWxnYXJpYVwiLCBcIlRoYWlsYW5kXCJdLFxyXG4gICAgICBcIjkwODAwNTYzM1wiOiBbXCJEZW5tYXJrXCIsIFwiVXJ1Z3VheVwiLCBcIlZlbmV6dWVsYVwiLCBcIk1vbGRvdmFcIl0sXHJcbiAgICAgIFwiOTA4MDA1NjM0XCI6IFtcIkNoaWxlXCIsIFwiQmFuZ2xhZGVzaFwiLCBcIkNhbmFkYVwiLCBcIlN3aXR6ZXJsYW5kXCIsIFwiSW5kaWFcIl0sXHJcbiAgICAgIFwiOTA4MDA1NjM1XCI6IFtcIkNvbG9tYmlhXCIsIFwiQXVzdHJpYVwiLCBcIkh1bmdhcnlcIiwgXCJBbGdlcmlhXCIsIFwiSWNlbGFuZFwiXSxcclxuICAgICAgXCI5MDgwMDU2MzZcIjogW1wiR2VybWFueVwiLCBcIlNlcmJpYVwiLCBcIlR1cmtleVwiLCBcIlJ1c3NpYVwiLCBcIkdyZWVjZVwiXSxcclxuICAgICAgXCI5MDgwMDU2MzdcIjogW1wiU3BhaW5cIiwgXCJKYXBhblwiLCBcIkJvbGl2aWFcIiwgXCJNYWx0YVwiLCBcIklzcmFlbFwiXSxcclxuICAgICAgXCI5MDgwMDU2MzhcIjogW1wiQXVzdHJhbGlhXCIsIFwiU3dlZGVuXCIsIFwiQ3plY2ggcmVwdWJsaWNcIiwgXCJTb3V0aCBLb3JlYVwiLCBcIlNvdXRoIEFmcmljYVwiXSxcclxuICAgICAgXCI5MDgwMDU2MzlcIjogW1wiRmlubGFuZFwiLCBcIk5ldyBaZWFsYW5kXCIsIFwiU2NvdGxhbmRcIiwgXCJOb3J3YXlcIiwgXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIl0sXHJcbiAgICAgIFwiOTA4MDA1NjQwXCI6IFtcIkFyZ2VudGluYVwiLCBcIkVuZ2xhbmRcIiwgXCJFc3RvbmlhXCIsIFwiSXJlbGFuZFwiLCBcIkxpdGh1YW5pYVwiXSxcclxuICAgICAgXCI5MDgwMDU2NDFcIjogW1wiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcIkNoaW5hXCIsIFwiRnJhbmNlXCIsIFwiTWV4aWNvXCIsIFwiUmVwLiBvZiBNb250ZW5lZ3JvXCJdLFxyXG4gICAgICBcIjkwODAwNTY0MlwiOiBbXCJJdGFseVwiLCBcIkxhdHZpYVwiLCBcIk5ldGhlcmxhbmRzXCIsIFwiUG9sYW5kXCIsIFwiU2xvdmVuaWFcIl0sXHJcbiAgICAgIFwiOTA4MDA1NjQzXCI6IFtcIkJlbGdpdW1cIiwgXCJCcmF6aWxcIiwgXCJQb3J0dWdhbFwiLCBcIlBlcnVcIiwgXCJBbGJhbmlhXCJdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3Y2g7XHJcbiIsImltcG9ydCB3b3JsZEN1cHMgZnJvbSBcIi4uL2RhdGEvd29ybGQtY3Vwc1wiO1xyXG5cclxuKCgpOiB2b2lkID0+IHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgY29uc3QgY29tcGV0aXRpb246IFdvcmxkQ3VwTGV2ZWwgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcInNlbGVjdFtuYW1lPSdjb3VudHJ5U2VsZWN0J10gb3B0aW9uOmNoZWNrZWRcIlxyXG4gICAgKSBhcyBIVE1MT3B0aW9uRWxlbWVudCkudmFsdWUgYXMgV29ybGRDdXBMZXZlbDtcclxuICAgIGNvbnN0IHNlYXNvbjogV29ybGRDdXBTZWFzb24gPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcInNlbGVjdFtuYW1lPSdzZWxlY3RTZWFzb24nXSBvcHRpb246Y2hlY2tlZFwiXHJcbiAgICApIGFzIEhUTUxPcHRpb25FbGVtZW50KS52YWx1ZSBhcyBXb3JsZEN1cFNlYXNvbjtcclxuICAgIGNvbnN0IHdvcmxkQ3VwOiBQYXJ0aWFsPFdvcmxkQ3VwPiA9IHdvcmxkQ3Vwc1tzZWFzb25dO1xyXG4gICAgaWYgKHdvcmxkQ3VwID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ291bGQgbm90IGZpbmQgd29ybGQgY3VwIGRhdGEgZm9yIHNlYXNvbiAke3NlYXNvbn1gKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB3b3JsZEN1cERyYXc6IFdvcmxkQ3VwRHJhdyA9IHdvcmxkQ3VwW2NvbXBldGl0aW9uXSBhcyBXb3JsZEN1cERyYXc7XHJcbiAgICBpZiAod29ybGRDdXBEcmF3ID09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ291bGQgbm90IGZpbmQgd29ybGQgY3VwIGRhdGEgZm9yIGNvbXBldGl0aW9uICR7Y29tcGV0aXRpb259YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0aW9uczogTm9kZUxpc3RPZjxIVE1MT3B0aW9uRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0W25hbWU9J2RpdmlzaW9uU2VsZWN0J10gPiBvcHRpb25cIik7XHJcbiAgICAvLyBFbmhhbmNlIHRoZSBncm91cCBuYW1lcyB3aXRoIHRoZSBjb3VudHJpZXMgcGFydGljaXBhdGluZ1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ3JvdXA6IFdvcmxkQ3VwR3JvdXAgPSB3b3JsZEN1cERyYXdbby52YWx1ZV07XHJcbiAgICAgICAgY29uc3QgY291bnRyaWVzOiBzdHJpbmcgPSBncm91cC5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgby50ZXh0Q29udGVudCArPSBgICgke2NvdW50cmllc30pYDtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcyNyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
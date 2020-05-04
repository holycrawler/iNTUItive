// ==UserScript==
// @name         DO iNTUItive
// @namespace    https://github.com/DO-Tools/iNTUItive
// @version      0.0.1
// @description  NT UI made intuitive & intelligent.
// @author       Silviu Burcea (silviuburceadev@gmail.com)
// @match        https://www.dugout-online.com/competitions/*
// @grant        GM_getResourceText
// @resource     worldCups https://raw.githubusercontent.com/DO-Tools/iNTUItive/0.0.1/src/data/world-cups.json
// ==/UserScript==

"use strict";
(function () {
    "use strict";
    var worldCups = JSON.parse(GM_getResourceText("worldCups"));
    var competition = document.querySelector("select[name='countrySelect'] option:checked").textContent;
    var season = document.querySelector("select[name='selectSeason'] option:checked").textContent;
    var worldCup = worldCups[season];
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
    options
        .forEach(function (o) {
        var group = worldCupDraw[o.textContent];
        var countries = group.countries.join(", ");
        o.textContent += " (" + countries + ")";
    });
})();

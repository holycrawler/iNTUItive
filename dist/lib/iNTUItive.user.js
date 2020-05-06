// ==UserScript==
// @name         DO iNTUItive
// @namespace    https://github.com/DO-Tools/iNTUItive
// @version      0.0.2
// @description  NT UI made intuitive & intelligent.
// @author       Silviu Burcea (silviuburceadev@gmail.com)
// @match        https://www.dugout-online.com/competitions/*
// @grant        GM_getResourceText
// @resource     worldCups https://raw.githubusercontent.com/DO-Tools/iNTUItive/0.0.2/src/data/world-cups.json
// ==/UserScript==

"use strict";
(function () {
    "use strict";
    var worldCups = JSON.parse(GM_getResourceText("worldCups"));
    var competition = document.querySelector("select[name='countrySelect'] option:checked").value;
    var season = document.querySelector("select[name='selectSeason'] option:checked").value;
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
        var group = worldCupDraw[o.value];
        var countries = group.join(", ");
        o.textContent += " (" + countries + ")";
    });
})();

((): void => {
    "use strict";
    const worldCups: WorldCupHistory = JSON.parse(GM_getResourceText("worldCups"));
    const competition: WorldCupLevel = (document.querySelector("select[name='countrySelect'] option:checked") as HTMLOptionElement).value as WorldCupLevel;
    const season: WorldCupSeason = (document.querySelector("select[name='selectSeason'] option:checked") as HTMLOptionElement).value as WorldCupSeason;
    const worldCup: Partial<WorldCup> = worldCups[season];
    if (worldCup == null) {
        console.log(`Could not find world cup data for season ${season}`);
        return;
    }
    const worldCupDraw: WorldCupDraw = worldCup[competition] as WorldCupDraw;
    if (worldCupDraw == null) {
        console.log(`Could not find world cup data for competition ${competition}`);
        return;
    }
    const options: NodeListOf<HTMLOptionElement> = document.querySelectorAll("select[name='divisionSelect'] > option");
    // Enhance the group names with the countries participating
    options
        .forEach(o => {
            const group: WorldCupGroup = worldCupDraw[o.value];
            const countries: string = group.join(", ");
            o.textContent += ` (${countries})`;
        });
})();
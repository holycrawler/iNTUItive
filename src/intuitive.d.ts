type Country = "Albania" | "Algeria" | "Argentina" | "Australia" | "Austria" | "Bangladesh" | "Belgium" | "Bolivia" | "Bosnia and Herzegovina" | "Brazil" | "Bulgaria" | "Canada" | "Chile" | "China" | "Colombia" | "Croatia" | "Czech Republic" | "Denmark" | "England" | "Estonia" | "Finland" | "France" | "Germany" | "Greece" | "Hungary" | "Iceland" | "India" | "Ireland" | "Israel" | "Italy" | "Japan" | "Latvia" | "Lithuania" | "Malta" | "Mexico" | "Moldova" | "Netherlands" | "New Zealand" | "Norway" | "Peru" | "Poland" | "Portugal" | "Rep. of Montenegro" | "Romania" | "Russia" | "Scotland" | "Serbia" | "Slovakia" | "Slovenia" | "South Africa" | "South Korea" | "Spain" | "Sweden" | "Switzerland" | "Thailand" | "Turkey" | "United States of America" | "Uruguay" | "Venezuela";

interface WorldCupGroup {
    readonly id: number;
    readonly countries: Country[];
}

type GroupName = "Group A" | "Group B" | "Group C" | "Group D" | "Group E" | "Group F" | "Group G" | "Group H" | "Group I" |  "Group J" |  "Group K" |  "Group L";
type WorldCupDraw = Record<GroupName, WorldCupGroup>;

type WorldCupLevel = "World Cup" | "WC Qual." | "World Cup (U21)" | "WC Qual. (U21)" | "World Cup (U19)" | "WC Qual. (U19)" | "World Cup (U17)" | "WC Qual. (U17)";
type WorldCup = Record<WorldCupLevel, WorldCupDraw>;
type WorldCupSeason = "16";
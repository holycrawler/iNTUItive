type Country = "Albania" | "Algeria" | "Argentina" | "Australia" | "Austria" | "Bangladesh" | "Belgium" | "Bolivia" | "Bosnia and Herzegovina" | "Brazil" | "Bulgaria" | "Canada" | "Chile" | "China" | "Colombia" | "Croatia" | "Czech Republic" | "Denmark" | "England" | "Estonia" | "Finland" | "France" | "Germany" | "Greece" | "Hungary" | "Iceland" | "India" | "Ireland" | "Israel" | "Italy" | "Japan" | "Latvia" | "Lithuania" | "Malta" | "Mexico" | "Moldova" | "Netherlands" | "New Zealand" | "Norway" | "Peru" | "Poland" | "Portugal" | "Rep. of Montenegro" | "Romania" | "Russia" | "Scotland" | "Serbia" | "Slovakia" | "Slovenia" | "South Africa" | "South Korea" | "Spain" | "Sweden" | "Switzerland" | "Thailand" | "Turkey" | "United States of America" | "Uruguay" | "Venezuela";
type WorldCupGroup = Country[];
type WorldCupDraw = { [key: string]: WorldCupGroup };

type WorldCupLevel  = "wcup" | "wcup21" | "wcup19" | "wcup17" | "wcqualifiers" | "wcqualifiers21" | "wcqualifiers19" | "wcqualifiers17";
type WorldCup = Record<WorldCupLevel, WorldCupDraw>;
type WorldCupSeason = "16";
// Partial as it can contain qualifications only
type WorldCupHistory = Record<WorldCupSeason, Partial<WorldCup>>;
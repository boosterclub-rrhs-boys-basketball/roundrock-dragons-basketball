export type GameResult = "W" | "L";
export type GameType = "District" | "Regular" | "Tournament" | "Scrimmage";
export type TeamLevel =
  | "Varsity"
  | "JV"
  | "Freshmen Maroon"
  | "Freshmen White"
  | "All Teams";

export type Game = {
  id: string;
  opponent: string;
  date: string;
  endDate?: string;
  location: string;
  home: boolean;
  team: TeamLevel;
  type: GameType;
  result?: GameResult;
  score?: string;
  upcoming?: boolean;
};

export const games: Game[] = [
  {
    id: "2026-02-28-brennan",
    opponent: "San Antonio Brennan",
    date: "2026-02-28",
    location: "Canyon Lake High School",
    home: false,
    team: "Varsity",
    type: "Regular",
    result: "L",
    score: "70-54",
  },
  {
    id: "2026-02-25-lake-travis",
    opponent: "Lake Travis",
    date: "2026-02-25",
    location: "Eastside Early College High School",
    home: false,
    team: "Varsity",
    type: "Regular",
    result: "W",
    score: "62-67",
  },
  {
    id: "2026-02-18-vandegrift-1",
    opponent: "Vandegrift",
    date: "2026-02-18",
    location: "Away",
    home: false,
    team: "Varsity",
    type: "District",
    result: "L",
    score: "52-46",
  },
  {
    id: "2026-02-14-stony-point",
    opponent: "Stony Point",
    date: "2026-02-14",
    location: "Home",
    home: true,
    team: "Varsity",
    type: "District",
    result: "W",
    score: "50-40",
  },
  {
    id: "2026-02-07-westwood",
    opponent: "Westwood",
    date: "2026-02-07",
    location: "Away",
    home: false,
    team: "Varsity",
    type: "District",
    result: "L",
    score: "62-56",
  },
  {
    id: "2026-02-04-hutto",
    opponent: "Hutto",
    date: "2026-02-04",
    location: "Home",
    home: true,
    team: "Varsity",
    type: "District",
    result: "W",
    score: "54-41",
  },
  {
    id: "2025-12-30-houston-christian",
    opponent: "Hangry Joe's Christmas Classic - Houston Christian",
    date: "2025-12-30",
    endDate: "2026-01-01",
    location: "Buda - Bales",
    home: false,
    team: "Varsity",
    type: "Tournament",
    result: "L",
    score: "86-43",
  },
  {
    id: "2025-11-10-liberty-hill",
    opponent: "Liberty Hill Scrimmage",
    date: "2025-11-10",
    location: "Away",
    home: false,
    team: "Varsity",
    type: "Scrimmage",
  },
];

export function getUpcomingGames(limit = 5) {
  const today = new Date().toISOString().slice(0, 10);
  return games
    .filter((g) => g.upcoming || (!g.result && g.date >= today))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit);
}

export function getRecentResults(limit = 20) {
  return games
    .filter((g) => g.result)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function formatGameDate(game: Game) {
  const start = new Date(game.date + "T12:00:00");
  if (game.endDate) {
    const end = new Date(game.endDate + "T12:00:00");
    return `${start.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} – ${end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
  }
  return start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatGameDateLong(game: Game) {
  const start = new Date(game.date + "T12:00:00");
  if (game.endDate) {
    const end = new Date(game.endDate + "T12:00:00");
    const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
    if (sameMonth) {
      return `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${end.getDate()}, ${end.getFullYear()}`;
    }
    return `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${end.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
  }
  return start.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatGameDateShort(game: Game) {
  const start = new Date(game.date + "T12:00:00");
  if (game.endDate) {
    const end = new Date(game.endDate + "T12:00:00");
    const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
    if (sameMonth) {
      return `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${end.getDate()}, ${end.getFullYear()}`;
    }
    return `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${end.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
  }
  return start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function computeSeasonStats(filteredGames: Game[]) {
  const completed = filteredGames.filter((g) => g.result);
  const wins = completed.filter((g) => g.result === "W").length;
  const losses = completed.filter((g) => g.result === "L").length;
  const homeGames = completed.filter((g) => g.home);
  const homeWins = homeGames.filter((g) => g.result === "W").length;
  const homeLosses = homeGames.filter((g) => g.result === "L").length;
  const districtGames = completed.filter((g) => g.type === "District");
  const districtWins = districtGames.filter((g) => g.result === "W").length;
  const districtLosses = districtGames.filter((g) => g.result === "L").length;

  let totalPoints = 0;
  for (const game of completed) {
    if (!game.score) continue;
    const ours = game.home ? game.score.split("-")[0] : game.score.split("-")[1];
    totalPoints += Number.parseInt(ours, 10) || 0;
  }

  const avgPoints = completed.length > 0 ? (totalPoints / completed.length).toFixed(1) : "0.0";

  return {
    overall: `${wins}-${losses}`,
    home: `${homeWins}-${homeLosses}`,
    district: `${districtWins}-${districtLosses}`,
    avgPoints,
  };
}

export function teamMatchesFilter(team: TeamLevel, filter: string) {
  const normalized = filter.trim().toLowerCase();
  if (normalized === "all") return true;

  const map: Record<string, TeamLevel[]> = {
    varsity: ["Varsity"],
    jv: ["JV"],
    "freshmen maroon": ["Freshmen Maroon"],
    "freshmen white": ["Freshmen White"],
  };

  return (map[normalized] ?? [filter as TeamLevel]).some(
    (value) => value.toLowerCase() === team.toLowerCase(),
  );
}

export function isUpcomingGame(game: Game) {
  const today = new Date().toISOString().slice(0, 10);
  return Boolean(game.upcoming || (!game.result && game.date >= today));
}

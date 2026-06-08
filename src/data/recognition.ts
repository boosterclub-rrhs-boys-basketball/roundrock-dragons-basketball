export type RecognitionLevel = "champion" | "standard" | "legacy_dragon";

export type RecognitionEntry = {
  id: string;
  name: string;
  level: RecognitionLevel;
  playerName?: string;
  programRole?: string;
  statement?: string;
  yearsSupporting: number;
  featured?: boolean;
  photo?: string;
};

export const tierConfig: Record<
  RecognitionLevel,
  { label: string; gradient: string; icon: "award" | "heart" }
> = {
  champion: { label: "Champion", gradient: "from-yellow-600 to-yellow-400", icon: "award" },
  standard: { label: "Member", gradient: "from-primary to-primary-light", icon: "heart" },
  legacy_dragon: { label: "Legacy Dragon", gradient: "from-purple-600 to-purple-400", icon: "award" },
};

/** Display order on the recognition wall */
export const tierOrder: RecognitionLevel[] = ["champion", "standard", "legacy_dragon"];

export const recognitionEntries: RecognitionEntry[] = [
  {
    id: "elkins",
    name: "Cynthia Elkins",
    level: "champion",
    playerName: "Collin Elkins",
    programRole: "Parent",
    yearsSupporting: 7,
    statement:
      "Collin Elkins, #30, is our forever #1. We became members to be involved in providing new ideas and taking action towards the betterment of the program. Supporting the booster club means providing solutions to create a bonded community & generate fun while raising monies needed to enhance the program; teambuilding, tournaments, uniforms, aesthetics, etc. Our direct connection is to our son however it easily proliferates to each of the players, all of whom work hard and equally have our support.",
  },
  {
    id: "cassidy",
    name: "The Cassidy Family",
    level: "champion",
    playerName: "Cole Cassidy",
    programRole: "Parent",
    yearsSupporting: 4,
  },
  {
    id: "hargrove",
    name: "Bobby Hargrove",
    level: "standard",
    programRole: "Parent",
    yearsSupporting: 1,
  },
  {
    id: "barnett",
    name: "Barnett Family",
    level: "standard",
    playerName: "Sol / Teyo",
    programRole: "Parent",
    yearsSupporting: 14,
    statement:
      "It has been over a decade since joining the Round Rock Dragons family—a period filled with cherished moments and countless opportunities to support our players through both triumphs and challenges. Throughout this journey, we have been surrounded by a fantastic community. We look forward to continuing our support for the players and contributing to the ongoing growth of this remarkable program.",
  },
  {
    id: "buss",
    name: "Heather Buss",
    level: "standard",
    playerName: "Sebastian",
    programRole: "Parent",
    yearsSupporting: 1,
  },
  {
    id: "cochran",
    name: "Stephanie Cochran",
    level: "standard",
    programRole: "Parent",
    yearsSupporting: 1,
  },
  {
    id: "wallace",
    name: "Wallace Family",
    level: "standard",
    playerName: "Cannon Wallace",
    programRole: "Parent",
    yearsSupporting: 1,
  },
  {
    id: "heaton",
    name: "Heaton family",
    level: "legacy_dragon",
    programRole: "Parent",
    yearsSupporting: 1,
  },
];

export function groupByTier(entries: RecognitionEntry[]) {
  const groups: Partial<Record<RecognitionLevel, RecognitionEntry[]>> = {};
  for (const entry of entries) {
    groups[entry.level] ??= [];
    groups[entry.level]!.push(entry);
  }
  for (const list of Object.values(groups)) {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }
  return tierOrder
    .filter((level) => groups[level]?.length)
    .map((level) => ({ level, entries: groups[level]! }));
}

export function recognitionStats(entries: RecognitionEntry[]) {
  return {
    totalMembers: entries.length,
    yearsOfSupport: entries.reduce((sum, e) => sum + e.yearsSupporting, 0),
    featuredMembers: entries.filter((e) => e.featured).length,
  };
}

export type Team = {
  id: string;
  name: string;
  level: string;
  record: string;
  coach: string;
  description: string;
  achievements: string[];
};

export const teams: Team[] = [
  {
    id: "varsity",
    name: "Varsity Dragons",
    level: "Varsity",
    record: "6-1",
    coach: "Travis Levie",
    description: "Our premier team competing at the highest level of high school basketball.",
    achievements: [
      "District Champions 2023",
      "Regional Semifinalists",
      "State Tournament Qualifiers",
    ],
  },
  {
    id: "jv",
    name: "JV Dragons",
    level: "Junior Varsity",
    record: "4-1",
    coach: "Darrell Hagemann",
    description: "Developing the next generation of Dragons basketball stars.",
    achievements: [
      "JV District Champions",
      "Undefeated at Home",
      "Player Development Program",
    ],
  },
  {
    id: "freshman-maroon",
    name: "Freshman Maroon Dragons",
    level: "Freshman",
    record: "3-2",
    coach: "Frank Fogg",
    description: "Developing skills and basketball IQ for the next level.",
    achievements: [
      "Most Improved Team",
      "Best Sportsmanship Award",
      "Community Service Leaders",
    ],
  },
  {
    id: "freshman-white",
    name: "Freshman White Dragons",
    level: "Freshman",
    record: "1-0",
    coach: "Brad Pugh",
    description: "Building fundamentals and team chemistry for future success.",
    achievements: [
      "Freshman League Champions",
      "Strong Team Chemistry",
      "Character Excellence Award",
    ],
  },
];

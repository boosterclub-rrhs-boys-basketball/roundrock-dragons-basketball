export type SponsorTier =
  | "Dragon Legend"
  | "Captain"
  | "All Star"
  | "Varsity"
  | "Broadway"
  | "Community Partner";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  website?: string;
  featured?: boolean;
};

export const sponsors: Sponsor[] = [
  { name: "Raising Cane's Chicken Fingers", tier: "Varsity", website: "https://www.raisingcanes.com", featured: true },
  { name: "Rock Ridge Family Dentistry", tier: "Captain", website: "https://rockridgefamilydentistry.com" },
  { name: "AirCo Mechanical", tier: "All Star", website: "https://aircoac.com" },
  { name: "Hand Wax and Wash LLC", tier: "Community Partner" },
  { name: "RBC Wealth Management", tier: "Community Partner" },
  { name: "MGA Travel", tier: "Community Partner" },
  { name: "Jet's Pizza", tier: "All Star", website: "https://www.jetspizza.com" },
  { name: "SRI Monogram Inc.", tier: "Broadway" },
];

export const sponsorshipPackages = [
  {
    name: "Dragon Legend",
    subtitle: "Title Partner",
    price: "$10,000+",
    highlights: [
      "Title Partner of WRM Tournament or Community Day (co-branded)",
      "Full-season LED premium rotation + season-long livestream bug",
      "Dragon Broadway prime: 2 signs (entrance + near ticketing)",
      "VIP Parking: your reserved spot for every home varsity game",
      "Concession punch cards for up to 8 reps",
      "VIP moment (meet-the-team photo) + 60–90s mini-doc recap",
    ],
  },
  {
    name: "Captain",
    subtitle: "Theme Night Presenting",
    price: "$5,000+",
    highlights: [
      "Presenting rights to one Theme Night",
      "LED Takeovers on your night",
      "Courtside/scorer's-table banner",
      "Livestream bug at 50% of home games",
      "2 on-site booths (WRM and Community Day)",
      "VIP Parking on your Theme Night",
    ],
  },
  {
    name: "All-Star",
    subtitle: "Digital Courtside – Full LED",
    price: "$2,500+",
    highlights: [
      "Full LED: 8 plays per game across timeouts/quarters/halftime",
      "Livestream lower-third/bug on 4 home broadcasts",
      "1 on-site booth at a marquee event",
      "2 Sponsor Spotlights + 1 email ad block",
      "Concession punch card for up to 4 reps",
    ],
  },
  {
    name: "Varsity",
    subtitle: "LED Lite",
    price: "$1,200+",
    highlights: [
      "LED Lite: 2 plays per home varsity game, pregame only",
      "1 Dragon Broadway sign (premium rotation spot)",
      "2 PA reads + 1 email feature",
      "Concession punch card for up to 2 reps",
    ],
  },
  {
    name: "Broadway Sponsor",
    price: "$500+",
    highlights: [
      "1 Dragon Broadway sign (24″×36″) for the season",
      "1 individual Sponsor Spotlight social post",
      "PA group acknowledgment each home game",
    ],
  },
  {
    name: "Community Partner",
    price: "$250+",
    highlights: [
      "Website logo (footer + Community Partners page)",
      "Quarterly group Thank You social post",
      "Dragon Broadway Community Board (shared listing near entry)",
    ],
  },
];

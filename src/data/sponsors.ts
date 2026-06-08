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
  logo?: string;
  featured?: boolean;
};

export type TierStyle = {
  cardBg: string;
  text: string;
  badge: string;
};

export function getTierStyle(tier: SponsorTier): TierStyle {
  switch (tier) {
    case "Dragon Legend":
      return {
        cardBg: "bg-gradient-to-br from-dragon-maroon-dark to-dragon-maroon",
        text: "text-white",
        badge: "bg-white/20 text-white border border-white/30",
      };
    case "Captain":
      return {
        cardBg: "bg-gradient-to-br from-amber-700 to-amber-500",
        text: "text-white",
        badge: "bg-white/20 text-white border border-white/30",
      };
    case "All Star":
      return {
        cardBg: "bg-gradient-to-br from-dragon-maroon to-dragon-maroon-light",
        text: "text-white",
        badge: "bg-white/20 text-white border border-white/30",
      };
    case "Varsity":
      return {
        cardBg: "bg-gradient-to-br from-dragon-maroon to-accent",
        text: "text-white",
        badge: "bg-white/20 text-white border border-white/30",
      };
    case "Broadway":
      return {
        cardBg: "bg-gradient-to-br from-slate-700 to-slate-500",
        text: "text-white",
        badge: "bg-white/20 text-white border border-white/30",
      };
    case "Community Partner":
      return {
        cardBg: "bg-gradient-to-br from-gray-600 to-gray-500",
        text: "text-white",
        badge: "bg-white/20 text-white border border-white/30",
      };
  }
}

/** Horizontal gradient badges on /sponsors partner cards (matches live tier_configurations). */
export function getTierBadgeGradient(tier: SponsorTier): string {
  switch (tier) {
    case "Dragon Legend":
      return "bg-gradient-to-r from-dragon-maroon-dark to-dragon-maroon";
    case "Captain":
      return "bg-gradient-to-r from-amber-700 to-amber-500";
    case "All Star":
      return "bg-gradient-to-r from-primary to-primary-light";
    case "Varsity":
      return "bg-gradient-to-r from-primary to-accent";
    case "Broadway":
      return "bg-gradient-to-r from-slate-700 to-slate-500";
    case "Community Partner":
      return "bg-gradient-to-r from-gray-600 to-gray-500";
  }
}

export function formatTierBadgeLabel(label: string): { main: string; subtitle?: string } {
  const match = label.match(/^(.*?)\s*(\(.*\))$/);
  if (match) return { main: match[1].trim(), subtitle: match[2] };
  return { main: label };
}

export const featuredSponsorStats = [
  { value: "50K+", label: "Community Reach", icon: "users" as const },
  { value: "95%", label: "Engagement Rate", icon: "trending" as const },
  { value: "Local", label: "Community Focus", icon: "heart" as const },
  { value: "High", label: "Impact Level", icon: "target" as const },
] as const;

export const whySponsorItems = [
  {
    title: "Community Visibility",
    description: "Reach thousands of local families and basketball enthusiasts",
    icon: "users" as const,
  },
  {
    title: "Youth Investment",
    description: "Support character building and athletic development",
    icon: "heart" as const,
  },
  {
    title: "Brand Recognition",
    description: "Logo placement and marketing opportunities at events",
    icon: "target" as const,
  },
] as const;

export const investmentStats = [
  { value: "50K+", label: "People Annually" },
  { value: "15+", label: "Local Events" },
  { value: "500+", label: "Social Media" },
  { value: "Year-Round", label: "Exposure" },
] as const;

export const featuredSponsorBlurb =
  "Proudly supporting Dragons excellence and investing in the future of youth athletics in our community.";

export const sponsors: Sponsor[] = [
  {
    name: "Rock Ridge Family Dentistry",
    tier: "Captain",
    website: "https://rockridgefamilydentistry.com",
    logo: "/sponsors/rock-ridge.png",
    featured: true,
  },
  {
    name: "AirCo Mechanical",
    tier: "All Star",
    website: "https://aircoac.com",
    logo: "/sponsors/airco.png",
    featured: true,
  },
  {
    name: "Jet's Pizza",
    tier: "All Star",
    website: "https://www.jetspizza.com",
    logo: "/sponsors/jets.jpg",
    featured: true,
  },
  {
    name: "Raising Cane's Chicken Fingers",
    tier: "Varsity",
    website: "https://www.raisingcanes.com",
    logo: "/sponsors/raising-canes.png",
    featured: true,
  },
  {
    name: "SRI Monogram Inc.",
    tier: "Broadway",
    website: "https://www.srimonogramming.com",
    logo: "/sponsors/sri.jpg",
    featured: true,
  },
  {
    name: "Hand Wax and Wash LLC",
    tier: "Community Partner",
    website: "https://www.handwaxandwash.com",
    logo: "/sponsors/hand-wax.jpg",
    featured: true,
  },
  {
    name: "RBC Wealth Management",
    tier: "Community Partner",
    website: "https://www.rbcwealthmanagement.com",
    logo: "/sponsors/rbc.png",
    featured: true,
  },
  {
    name: "MGA Travel",
    tier: "Community Partner",
    website: "https://mgatravel.com",
    logo: "/sponsors/mga.jpg",
    featured: true,
  },
];

export const sponsorshipPackages = [
  {
    name: "Dragon Legend",
    subtitle: "(Title Partner)",
    price: "$10,000+",
    highlights: [
      "Title Partner of WRM Tournament or Community Day (co-branded)",
      "Full-season LED premium rotation (double frequency vs. All-Star) + season-long livestream bug",
      "Dragon Broadway prime: 2 signs (entrance + near ticketing)",
      "VIP Parking: your reserved spot for every home varsity game",
      "Concession punch cards: 1 item per home game (for up to 8 reps)",
      "VIP moment (meet-the-team photo) + 60–90s mini-doc recap",
      "Volunteer engagement package (two shift blocks)",
      "Full post-event report with photos, scans, leads, and any redemptions reported",
    ],
  },
  {
    name: "Captain",
    subtitle: "(Theme Night Presenting)",
    price: "$5,000+",
    highlights: [
      "Presenting rights to one Theme Night (e.g., White-Out, Teacher Night, Senior Night)",
      "LED Takeovers on your night (e.g., exclusive 60s pre-game loop + 30s halftime loop)",
      "Courtside/scorer's-table banner (or premium sideline placement)",
      "Livestream bug at 50% of home games",
      "2 on-site booths (WRM and Community Day)",
      "VIP Parking: your reserved parking spot on your Theme Night",
      "Concession punch card: 1 item per home game (for up to 6 reps)",
      "Sponsor Welcome Kit — Elite: certificate + window cling + 6 tees/hats + desk plaque + \"Proud Partner\" desk crystal",
    ],
  },
  {
    name: "All-Star",
    subtitle: "(Digital Courtside – Full LED)",
    price: "$2,500+",
    highlights: [
      "Full LED: 8 plays per game spread across timeouts/quarters/halftime, motion allowed (MP4)",
      "Livestream lower-third/bug on 4 home broadcasts (if streaming)",
      "1 on-site booth at a marquee event (WRM or Community Day)",
      "2 Sponsor Spotlights + 1 email ad block",
      "Concession punch card: 1 item per home game (for up to 4 reps)",
      "Sponsor Welcome Kit — Premium: certificate + window cling + 4 tees/hats + desk plaque",
    ],
  },
  {
    name: "Varsity",
    subtitle: "(LED Lite)",
    price: "$1,200+",
    highlights: [
      "LED Lite: 2 plays per home varsity game, pregame only, static image (PNG/JPG)",
      "1 Dragon Broadway sign (premium rotation spot)",
      "2 PA reads (CTA mentions) + 1 email feature",
      "Concession punch card: 1 item per home game (for up to 2 reps)",
      "Sponsor Welcome Kit — Plus: certificate + window cling + 2 tees/hats + desk plaque",
    ],
  },
  {
    name: "Broadway Sponsor",
    price: "$500+",
    highlights: [
      "1 Dragon Broadway sign (24″×36″) for the season",
      "1 individual \"Sponsor Spotlight\" social post",
      "PA group acknowledgment each home game",
      "Sponsor Welcome Kit — Standard: certificate + window cling + 2 \"Dragon\" tees (or 2 hats)",
    ],
  },
  {
    name: "Community Partner",
    price: "$250+",
    highlights: [
      "Website logo (footer + Community Partners page)",
      "Quarterly group \"Thank You\" social post",
      "Dragon Broadway Community Board (shared listing near entry)",
      "Sponsor Welcome Kit — Lite: certificate + window cling (storefront)",
    ],
  },
];

export function getTierPriority(tier: SponsorTier): number {
  const order: SponsorTier[] = [
    "Dragon Legend",
    "Captain",
    "All Star",
    "Varsity",
    "Broadway",
    "Community Partner",
  ];
  const index = order.indexOf(tier);
  return index === -1 ? order.length : index;
}

export function getSortedSponsors() {
  return [...sponsors].sort((a, b) => getTierPriority(a.tier) - getTierPriority(b.tier));
}

export function getFeaturedSponsors() {
  return sponsors.filter((s) => s.featured);
}

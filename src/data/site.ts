export const site = {
  name: "Round Rock Dragons Basketball",
  shortName: "Rock Hoops",
  tagline: "Building champions on and off the court. Join our legacy of excellence, teamwork, and Dragon pride!",
  url: "https://roundrockbasketball.org",
  email: "boosterclub@roundrockbasketball.org",
  phone: "(512) 537-9290",
  address: {
    line1: "Round Rock High School Boys Basketball Booster Club",
    line2: "301 N Lake Creek Dr.",
    city: "Round Rock",
    state: "TX",
    zip: "78681",
  },
  mission:
    "Supporting excellence in basketball and developing student-athletes both on and off the court. Together we rise as Dragons!",
  disclaimer:
    "This website is maintained by the RRHS Men's Basketball Booster Club and is not a part of Round Rock High School or Round Rock ISD.",
  facebook: "https://www.facebook.com/RRHSBoysBasketball",
  stats: [
    { label: "Championships", value: "12", icon: "trophy" },
    { label: "Players", value: "150", icon: "users" },
    { label: "Games", value: "48", icon: "calendar" },
    { label: "Win Rate", value: "85%", icon: "target" },
  ],
  seasonStats: {
    overall: "67-22",
    home: "32-10",
    district: "43-14",
    avgPoints: "59.9",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/teams", label: "Teams" },
  { href: "/coaches", label: "Coaches" },
  { href: "/members", label: "Members" },
  { href: "/parents", label: "Parents" },
  { href: "/store", label: "Store" },
  { href: "/news", label: "News & Media" },
] as const;

export const getInvolvedLinks = [
  { href: "/join", label: "Join the Booster Club" },
  { href: "/volunteers", label: "Volunteers" },
  { href: "/fundraising", label: "Fundraising" },
  { href: "/donations", label: "Donations" },
  { href: "/sponsors", label: "Sponsors" },
] as const;

export const moreLinks = [
  { href: "/about", label: "About Us" },
  { href: "/recognition", label: "Recognition" },
  { href: "/help", label: "Help" },
] as const;

export const footerLinks = [
  { href: "/teams", label: "Teams" },
  { href: "/schedule", label: "Schedule" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News & Media" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/fundraising", label: "Fundraising" },
  { href: "/store", label: "Store" },
  { href: "/volunteers", label: "Volunteers" },
] as const;

export type MembershipTier = {
  id: string;
  name: string;
  headline: string;
  price: string;
  benefits: string[];
  includesVipParking?: boolean;
  vipParkingAddon?: string;
  ctaLabel: string;
  icon: "star" | "users" | "sparkles" | "crown";
  badge?: "most-popular" | "limited";
};

export type FaqItem = {
  id: string;
  title: string;
  body: string;
};

export type MemberGroup = {
  level: "legacy" | "champion" | "standard";
  label: string;
  icon: "crown" | "sparkles" | "star";
  members: string[];
};

export const joinPage = {
  hero: {
    title: "Join the RRHS Boys Basketball Booster Club (2025-26)",
    subtitle: "Join our community and support the team",
  },
  intro: [
    "Join today to fuel player development, travel, and team experiences—and get perks your family will use on game night.",
    "Prices stayed the same; value increased (extra T-shirt for every tier + VIP Parking options).",
  ],
  tiersTitle: "Membership Tiers",
  vipFaqTitle: "VIP Parking FAQ",
  fulfillmentTitle: "Fulfillment & Pickup",
  membersTitle: "Our Members",
  tiers: [
    {
      id: "white",
      name: "White (Supporter)",
      headline: "Support the team",
      price: "$85.00",
      icon: "star",
      badge: "most-popular",
      benefits: [
        "1 Spirit T-shirt",
        "1 Car decal",
        "Digital recognition (website + game-night slideshow)",
        "Member voting rights & email updates",
      ],
      ctaLabel: "Join White",
    },
    {
      id: "maroon",
      name: "Maroon (Family)",
      headline: "Perfect for families",
      price: "$175.00",
      icon: "users",
      badge: "most-popular",
      benefits: [
        "2 Spirit T-shirts",
        "1 Car decal",
        "Digital recognition + early spirit-wear access",
        "Member voting rights",
        "VIP Parking add-on available (+$75)",
      ],
      ctaLabel: "Join Maroon",
    },
    {
      id: "dragon",
      name: "Dragon (Champion)",
      headline: "Champion supporter",
      price: "$325.00",
      icon: "sparkles",
      includesVipParking: true,
      benefits: [
        "3 Spirit T-shirts",
        "Yard sign",
        "Car decal",
        "2 End-of-Season Banquet tickets",
        "VIP Parking hangtag included",
        "Premium 'Champion Wall' recognition",
        "Member voting rights & email updates",
      ],
      ctaLabel: "Join Dragon",
    },
    {
      id: "legacy",
      name: "Legacy Dragon (Limited)",
      headline: "Elite supporter",
      price: "$550.00",
      icon: "crown",
      badge: "limited",
      includesVipParking: true,
      benefits: [
        "4 Spirit T-shirts",
        "Yard sign",
        "Car decal",
        "4 Banquet tickets (family table)",
        "VIP Parking hangtag included",
        "Lobby banner + website 'Legacy' recognition",
        "Member voting rights & email updates",
      ],
      ctaLabel: "Join Legacy",
    },
  ] satisfies MembershipTier[],
  vipFaq: [
    {
      id: "how",
      title: "How do I receive my hangtag?",
      body: "VIP Parking hangtags are distributed after your membership purchase is confirmed. You will receive pickup instructions by email, and hangtags are typically available at home games or during designated booster club pickup events.",
    },
    {
      id: "what",
      title: "What is VIP Parking?",
      body: "VIP Parking provides reserved parking close to the gym for home games. Hangtags must be displayed on your rearview mirror to access VIP parking areas on game nights.",
    },
    {
      id: "who",
      title: "Who gets VIP Parking?",
      body: "Dragon and Legacy Dragon memberships include VIP Parking. Maroon members may add VIP Parking for an additional fee. White memberships do not include VIP Parking unless purchased as an add-on when available.",
    },
  ] satisfies FaqItem[],
  fulfillmentFaq: [
    {
      id: "banquet",
      title: "Banquet Tickets",
      body: "Banquet tickets included with your membership are distributed before the end-of-season banquet. Watch for email updates from the booster club with redemption details.",
    },
    {
      id: "recognition",
      title: "Recognition",
      body: "Digital and in-venue recognition is updated throughout the season after membership purchase. Champion and Legacy members receive premium placement per tier benefits.",
    },
    {
      id: "signs",
      title: "Yard Signs",
      body: "Yard signs for eligible tiers are available for pickup at designated home games or booster club events. You will receive an email when your sign is ready.",
    },
    {
      id: "tshirts",
      title: "T-shirts & Decals",
      body: "Spirit wear and decals are fulfilled after membership signup. Size information is collected during checkout, and items are distributed at pickup events or home games.",
    },
  ] satisfies FaqItem[],
  memberGroups: [
    {
      level: "legacy",
      label: "legacy",
      icon: "crown",
      members: ["Heaton family"],
    },
    {
      level: "champion",
      label: "champion",
      icon: "sparkles",
      members: ["The Cassidy Family", "Cynthia Elkins"],
    },
    {
      level: "standard",
      label: "standard",
      icon: "star",
      members: ["Bobby Hargrove", "Heather Buss", "Stephanie Cochran", "Wallace Family"],
    },
  ] satisfies MemberGroup[],
};

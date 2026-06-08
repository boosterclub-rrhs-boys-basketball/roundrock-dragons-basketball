import { fundraisingPage, progressPercent, formatCurrency } from "./fundraisingPage";

export type DonationCampaign = {
  id: string;
  name: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  urgent?: boolean;
};

export type DonationTier = {
  icon: "Heart" | "Award" | "Trophy" | "Users" | "Star" | "DragonsLogo";
  name: string;
  color: string;
  amount: number;
  popular?: boolean;
  benefits: string[];
};

export type RecurringOption = {
  label: string;
  value: string;
};

export const donationsPage = {
  hero: {
    title: "Support Our Dragons",
    subtitle:
      "Your donation helps provide equipment, uniforms, travel, and opportunities for our student-athletes",
  },
  progress: {
    title: "Fundraising Progress",
    subtitle: "See how your donations are making a difference",
    completeLabel: (pct: number) => `${pct}% Complete`,
    raisedOfGoal: (raised: number, goal: number) =>
      `of $${formatCurrency(goal)} goal raised`,
  },
  tabs: {
    donate: "Make a Donation",
    tiers: "Giving Levels",
  },
  form: {
    title: "Make Your Donation",
    donationType: "Donation Type",
    oneTime: "One-Time",
    recurring: "Recurring",
    frequency: "Frequency",
    amount: "Donation Amount",
    customAmount: "Custom Amount",
    customPlaceholder: "Enter amount",
    designate: "Designate Your Gift",
    designatePlaceholder: "Select a campaign",
    generalFund: "General Fund",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    message: "Message (Optional)",
    messagePlaceholder: "Share why you're supporting Dragons basketball...",
    anonymous: "Make this donation anonymous",
    newsletter: "Subscribe to Dragons newsletter",
    submit: "Donate with Square",
    processing: "Processing...",
    footnote: "Secure payment processing by Square. Your donation is tax-deductible.",
    phase2Note:
      "Online Square checkout is not yet connected on this preview site. Submitting will open an email to the booster club with your donation details.",
  },
  impact: {
    title: "Your Impact",
    items: [
      { amount: 25, description: "One basketball and practice equipment for a week" },
      { amount: 50, description: "Team meals before away games" },
      { amount: 100, description: "One complete uniform (jersey, shorts, warm-ups)" },
      { amount: 250, description: "Tournament entry fees and travel support" },
    ],
  },
  recentDonors: {
    title: "Recent Donors",
    empty: "No recent donors yet. Be the first to support!",
  },
  tiersSection: {
    title: "Giving Levels",
    subtitle: "Choose a giving level that works for you and receive special recognition and benefits",
    chooseLevel: "Choose This Level",
    popularBadge: "Most Popular",
    allDonorsTitle: "All Donors Receive",
    perks: [
      {
        title: "Tax Deduction",
        description: "Official tax-deductible receipt for your records",
        icon: "target" as const,
      },
      {
        title: "Impact Updates",
        description: "Regular updates on how your donation is making a difference",
        icon: "heart" as const,
      },
      {
        title: "Community Recognition",
        description: "Listed as a supporter in our annual report and website",
        icon: "users" as const,
      },
    ],
  },
  presetAmounts: [25, 50, 100, 250, 500, 1000],
  campaigns: [
    {
      id: "48ab2f1e-08c4-4723-a484-ebfd645edee8",
      name: "New Uniforms",
      description: "Updated uniforms for all three teams",
      targetAmount: 5000,
      currentAmount: 300,
      urgent: false,
    },
    {
      id: "5625b04e-66be-43dd-a46a-90b1e7cfbfe7",
      name: "Equipment & Training Gear",
      description: "Practice equipment, balls, training aids",
      targetAmount: 8000,
      currentAmount: 5200,
      urgent: true,
    },
    {
      id: "76409669-7183-4272-8a77-dbc35a25c02f",
      name: "Team Travel Fund",
      description: "Tournament travel and accommodation",
      targetAmount: 12000,
      currentAmount: 3800,
      urgent: false,
    },
    {
      id: "9ae0d907-1edf-421d-8c1b-345bdfa1a047",
      name: "Facility Improvements",
      description: "Gym upgrades and equipment storage",
      targetAmount: 25000,
      currentAmount: 8900,
      urgent: false,
    },
  ] satisfies DonationCampaign[],
  givingTiers: [
    {
      icon: "Heart",
      name: "Team Supporter",
      color: "text-red-500",
      amount: 25,
      popular: false,
      benefits: ["Monthly newsletter", "Team updates", "Thank you certificate"],
    },
    {
      icon: "Award",
      name: "Team Champion",
      color: "text-blue-500",
      amount: 50,
      popular: true,
      benefits: ["All Team Supporter benefits", "Exclusive team photos", "Season recap video"],
    },
    {
      icon: "Trophy",
      name: "Team Legacy",
      color: "text-yellow-500",
      amount: 100,
      popular: false,
      benefits: [
        "All previous benefits",
        "Recognition at games",
        "Personalized thank you from coach",
      ],
    },
  ] satisfies DonationTier[],
  recurringOptions: [
    { label: "Monthly", value: "monthly" },
    { label: "Quarterly", value: "quarterly" },
    { label: "Annually", value: "annually" },
  ] satisfies RecurringOption[],
  recentDonorsList: [] as { displayName: string; amount: number }[],
};

const eventGoalTotal = fundraisingPage.events.reduce((sum, event) => sum + event.goal, 0);
const campaignTargetTotal = donationsPage.campaigns.reduce((sum, c) => sum + c.targetAmount, 0);

export { formatCurrency } from "./fundraisingPage";

export const donationTotals = {
  raised: donationsPage.recentDonorsList.reduce((sum, d) => sum + d.amount, 0),
  goal: campaignTargetTotal + eventGoalTotal,
  percent: progressPercent(
    donationsPage.recentDonorsList.reduce((sum, d) => sum + d.amount, 0),
    campaignTargetTotal + eventGoalTotal,
  ),
};

export function campaignPercent(current: number, target: number): number {
  return progressPercent(current, target);
}

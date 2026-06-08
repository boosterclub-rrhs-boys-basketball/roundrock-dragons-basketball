export type EventStatus = "active" | "upcoming" | "planning" | "completed";

export type FundraisingEvent = {
  id: string;
  name: string;
  description: string;
  status: EventStatus;
  eventDate: string;
  eventDateLong: string;
  eventTime?: string;
  location: string;
  raised: number;
  goal: number;
  featured?: boolean;
  externalLink?: string;
  image?: string;
};

export type RecentDonor = {
  id: string;
  displayName: string;
  amount: number;
  date: string;
};

export type VolunteerOpportunity = {
  id: string;
  title: string;
  description: string;
  commitment: string;
  whenNeeded: string;
  signupUrl?: string;
};

export const statusColors: Record<EventStatus, string> = {
  active: "bg-green-500",
  upcoming: "bg-blue-500",
  planning: "bg-yellow-500",
  completed: "bg-gray-500",
};

export function progressPercent(raised: number, goal: number): number {
  if (goal <= 0) return 0;
  return Math.min(Math.round((raised / goal) * 100), 100);
}

export function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US");
}

export const fundraisingPage = {
  hero: {
    title: "Fundraising & Volunteers",
    subtitle: "Join us in raising funds and building community to support Dragons basketball",
  },
  tabs: {
    events: "Fundraising Events",
    volunteer: "Volunteer Opportunities",
  },
  eventsSection: {
    title: "Fundraising Events",
    description: "Support Dragons basketball by participating in our fundraising events",
    empty: "No fundraising events available at this time. Check back soon!",
    supportersTitle: "Recent Supporters",
    supportersEmpty: "Be the first to donate!",
    featuredBadge: "Featured Event",
    progressLabel: "Progress",
    raisedLabel: "Raised",
    goalLabel: "Goal",
    percentReached: (pct: number) => `${pct}% of goal reached`,
    learnMore: "Learn More",
    contactCoordinator: "Contact Coordinator",
    contact: "Contact",
    donate: "Donate",
    info: "Info",
  },
  volunteerSection: {
    title: "Volunteer Opportunities",
    description: "Help make Dragons basketball successful by volunteering your time and talents",
    empty: "No volunteer opportunities available at this time. Check back soon!",
    contactCoordinator: "Contact Coordinator",
    signUp: "Sign Up",
    timeCommitment: "Time Commitment",
    when: "When",
    form: {
      title: "General Volunteer Interest",
      subtitle: "Let us know if you're interested in volunteering with Dragons basketball",
      nameLabel: "Your Name *",
      emailLabel: "Email Address *",
      phoneLabel: "Phone Number",
      interestsLabel: "Areas of Interest",
      availabilityLabel: "Availability",
      availabilityPlaceholder: "e.g., Weekends, evenings, specific days",
      messageLabel: "Additional Message",
      messagePlaceholder: "Tell us more about your interests or skills...",
      submitLabel: "Submit Volunteer Application",
      successTitle: "Volunteer application submitted!",
      successDescription: "Thank you for your interest. We'll be in touch soon.",
    },
  },
  contactDialog: {
    title: "Contact Event Coordinator",
    description: (eventName: string) =>
      `Send a message about "${eventName}" — your message will be forwarded to the event coordinator.`,
    volunteerTitle: "Contact Volunteer Coordinator",
    volunteerDescription: (title: string) =>
      `Send a message about "${title}" — your message will be forwarded to the volunteer coordinator.`,
    nameLabel: "Your Name *",
    emailLabel: "Your Email *",
    subjectLabel: "Subject *",
    messageLabel: "Message *",
    cancel: "Cancel",
    send: "Send Message",
    sending: "Sending...",
  },
  events: [
    {
      id: "shoot-a-thon",
      name: "Annual Shoot-a-Thon",
      description:
        "Our biggest fundraiser! Players collect pledges for successful free throws and three-pointers.",
      status: "active",
      eventDate: "Dec 15, 2024",
      eventDateLong: "Friday, December 15, 2024",
      eventTime: "9:00 AM - 3:00 PM",
      location: "Round Rock High School Gym",
      raised: 18500,
      goal: 25000,
      featured: true,
    },
    {
      id: "meet-the-dragons",
      name: "Meet the Dragons Night",
      description:
        "Community event to meet players and coaches. Ticket sales and donations support the program.",
      status: "completed",
      eventDate: "Nov 15, 2024",
      eventDateLong: "Friday, November 15, 2024",
      eventTime: "6:00 PM - 8:00 PM",
      location: "Round Rock High School Gym",
      raised: 4800,
      goal: 5000,
    },
    {
      id: "wrm-concessions",
      name: "WRM Tournament Concessions",
      description:
        "Volunteer at our concession stand during the WRM Tournament. Food sales support the team.",
      status: "upcoming",
      eventDate: "Jan 18, 2025",
      eventDateLong: "Saturday, January 18, 2025",
      eventTime: "All Day",
      location: "Westwood Recreation Center",
      raised: 3200,
      goal: 8000,
    },
    {
      id: "senior-night",
      name: "Senior Night Banquet",
      description:
        "Special dinner honoring our senior players and their families. Ticket sales and silent auction.",
      status: "planning",
      eventDate: "Feb 14, 2025",
      eventDateLong: "Friday, February 14, 2025",
      eventTime: "6:00 PM - 9:00 PM",
      location: "Round Rock Community Center",
      raised: 2100,
      goal: 12000,
    },
  ] satisfies FundraisingEvent[],
  recentDonors: [] satisfies RecentDonor[],
  volunteerOpportunities: [
    {
      id: "concession-stand",
      title: "Concession Stand Workers",
      description: "Help sell food and drinks at home games",
      commitment: "2-3 hours per game",
      whenNeeded: "Game days",
      signupUrl:
        "https://m.signupgenius.com/#!/showSignUp/10C054BA5AB2EAAFAC07-60041472-concession",
    },
    {
      id: "wrm-tournament",
      title: "William Roberts Memorial Tournament; November 20-22, 2025",
      description:
        "Assist with the various efforts to make the William Roberts Memorial (WRM) Tournament a success.",
      commitment: "1-4 hours per event",
      whenNeeded: "Before/after events",
      signupUrl:
        "https://www.signupgenius.com/go/10C054BA5AB2EAAFAC07-58398150-general#/",
    },
    {
      id: "team-parents",
      title: "Team Parents",
      description:
        "TEAM PARENTS: COORDINATE TEAM DINNERS FOR THE NIGHT BEFORE GAMES, WE SUGGEST A TEAM DINNER EVERY OTHER WEEK\n\nTEAM SOCIAL MEDIA SUPPORT: TAKE PHOTOS AND VIDEOS AT GAMES AND ANY SOCIAL/TEAM DINNERS OR EVENTS.",
      commitment: "Flexible, remote",
      whenNeeded: "Ongoing",
      signupUrl:
        "https://www.signupgenius.com/go/10C054BA5AB2EAAFAC07-60101512-team",
    },
  ] satisfies VolunteerOpportunity[],
};

export const sponsorsPage = {
  hero: {
    title: "Partner with Champions",
    subtitle: "Join our community of businesses supporting Dragons basketball excellence",
    becomeLabel: "Become a Sponsor Today",
    downloadLabel: "Download Sponsor Packet",
    packetHref: "/sponsor-packet.pdf",
  },
  whySponsor: {
    title: "Why Sponsor Dragons Basketball?",
    subtitle: "Your investment reaches thousands of families and community members",
    items: [
      {
        title: "5,000+ Reach",
        description:
          "Students, families, and community members attend our games and events annually.",
        icon: "users" as const,
      },
      {
        title: "Year-Round Exposure",
        description:
          "Visibility during 28 games, tournaments, and community events throughout the season.",
        icon: "trending" as const,
      },
      {
        title: "Digital Marketing",
        description:
          "Featured on our website, social media, and digital communications reaching thousands online.",
        icon: "megaphone" as const,
      },
      {
        title: "Community Impact",
        description:
          "Support student-athlete development and show your commitment to local education.",
        icon: "star" as const,
      },
    ],
  },
  packages: {
    title: "Sponsorship Packages",
    subtitle: "Choose the level that works best for your business",
    chooseLabel: "Choose This Package",
  },
  partners: {
    title: "Our Amazing Partners",
    subtitle: "Thank you to these outstanding businesses supporting Dragons basketball",
    visitLabel: "Visit Website",
  },
  cta: {
    title: "Ready to Support Dragons Basketball?",
    subtitle:
      "Contact us today to discuss sponsorship opportunities and how we can work together to support our student-athletes and community.",
    contactLabel: "Contact Sponsor Coordinator",
    downloadLabel: "Download Sponsor Packet",
    contactSubject: "Sponsorship Inquiry",
  },
  contactDialog: {
    title: "Contact Booster Club",
    description: "Send a message to the Round Rock Basketball Booster Club.",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    cancel: "Cancel",
    send: "Send Message",
  },
} as const;

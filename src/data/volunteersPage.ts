import { fundraisingPage } from "./fundraisingPage";

export const volunteerOpportunities = fundraisingPage.volunteerOpportunities;

export const volunteersPage = {
  hero: {
    title: "Volunteer Opportunities",
    subtitle: "Help make Dragons basketball successful by volunteering your time and talents",
  },
  opportunities: {
    title: "Current Opportunities",
    emptyTitle: "No Current Openings",
    emptyMessage: "No volunteer opportunities available at this time. Check back soon!",
    signUp: "Sign Up Online",
    contactCoordinator: "Contact Coordinator",
    timeCommitment: "Time Commitment",
    whenNeeded: "When Needed",
  },
  form: {
    title: "General Volunteer Interest",
    subtitle: "Let us know if you're interested in volunteering with Dragons basketball",
    nameLabel: "Full Name *",
    emailLabel: "Email *",
    phoneLabel: "Phone Number",
    interestsLabel: "Areas of Interest",
    availabilityLabel: "Availability",
    availabilityPlaceholder: "e.g., Weekday evenings, Weekend mornings",
    messageLabel: "Additional Comments",
    messagePlaceholder: "Tell us about your interests, skills, or questions...",
    submitLabel: "Submit Volunteer Application",
    successTitle: "Volunteer application submitted!",
    successDescription: "We'll contact you soon about volunteer opportunities.",
  },
  contactDialog: {
    title: "Contact Volunteer Coordinator",
    description: (title: string) =>
      `Send a message about "${title}" — your message will be forwarded to the volunteer coordinator.`,
    nameLabel: "Your Name *",
    emailLabel: "Your Email *",
    subjectLabel: "Subject *",
    messageLabel: "Message *",
    cancel: "Cancel",
    send: "Send Message",
  },
};

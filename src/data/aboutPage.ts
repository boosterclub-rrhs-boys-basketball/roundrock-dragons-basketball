import { site } from "./site";

export type AboutStat = {
  value: string;
  label: string;
  icon: "trophy" | "users" | "heart" | "target";
};

export type BoardMember = {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
};

function cleanBoardBio(html: string): string {
  return html.replace(/<p>\s*(?:<br\s*\/?>\s*)*<\/p>/gi, "");
}

const boardMembers: BoardMember[] = [
  {
    name: "Maurice Barnett",
    title: "President",
    bio: `<p>Maurice is an accomplished executive leader with over 20 years of experience driving innovation and organizational excellence at top global companies, including Amazon Web Services, Cisco, NVIDIA, and Dell. A graduate of Tuskegee University and a certified NCAA coach, he brings a passion for mentorship, teamwork, and community development to his role as President.</p><p><br></p><p><br></p><p>Maurice applies his expertise in strategic planning, operations, and stakeholder engagement to strengthen the Booster Club's fundraising, sponsorship, and parent participation initiatives. His leadership is guided by a commitment to elevating the Round Rock basketball program and creating lasting impact for student-athletes, families, and sponsors alike.</p>`,
    imageUrl:
      "https://fvszwzqfyoumdwnwmfrb.supabase.co/storage/v1/object/public/site-images/board-members/1759870244092-s1sknqzffuk.jpeg",
  },
  {
    name: "Cynthia Elkins",
    title: "Vice President",
    bio: `<p>Cynthia holds a Bachelor's degree in Business Management which has provided a strong foundation for her distinguished career. With over 30 years of corporate experience, she is a seasoned professional specializing in communications, change management, and strategic team building. Her career spans leadership roles including at Cadence Design Systems where she played a pivotal role in aligning large teams and driving organizational transformation. Her expertise lies in bringing diverse groups together to achieve common goals and guiding teams through periods of change with clarity and purpose. </p><p><br></p><p><br></p><p>Cynthia brings her extensive background in communications and team building to the basketball program – leveraging these strengths to foster collaboration, unity and engagement.</p>`,
    imageUrl:
      "https://fvszwzqfyoumdwnwmfrb.supabase.co/storage/v1/object/public/site-images/board-members/1759863467486-iuuy9yfcrte.jpeg",
  },
  {
    name: "Joe Mitchell",
    title: "Treasurer",
    bio: `<p>Joseph Mitchell brings over two decades of expertise in business analysis, financial reporting, and software development to his role as Treasurer of the Round Rock High School Boys Basketball Organization. With an MBA from the University of Chicago and a proven track record in designing innovative financial solutions for major organizations, Joseph leverages his analytical skills and attention to detail to support the team's financial operations.</p><p><br></p><p><br></p><p>His experience mentoring teams and managing complex budgets ensures the organization's resources are handled with integrity and professionalism, helping the program thrive both on and off the court.</p>`,
    imageUrl:
      "https://fvszwzqfyoumdwnwmfrb.supabase.co/storage/v1/object/public/site-images/board-members/1757317563598-5qq5v65cyl4.jpg",
  },
  {
    name: "Jill Birt",
    title: "Secretary",
    bio: `<p>Jill believes connection, wellness, and community make the perfect combination. She holds a Bachelor's degree in Holistic Nursing and has spent more than 20 years serving the Austin community as a registered nurse. As a holistic nurse and certified yoga instructor, she focuses on bridging the gap between clinical care and whole-person wellness through education and program development. As&nbsp;a&nbsp;lifelong volunteer in the local community, Jill values opportunities that bring people together and strengthen community ties. Her background in healthcare and wellness gives her a unique perspective on collaboration, balance, and communication—qualities she brings to every aspect of her work with the RRHS Men's Basketball Booster Club. As Secretary, </p><p><br></p><p>Jill combines her organizational skills and passion for community to help foster connection and well-being among Rock Hoops athletes, families, and coaches.</p>`,
    imageUrl:
      "https://fvszwzqfyoumdwnwmfrb.supabase.co/storage/v1/object/public/site-images/board-members/1757269795965-38abrbvypqp.jpg",
  },
  {
    name: "Marlena McConnell",
    title: "Social Media Director",
    bio: `<p>Marlena McConnell loves being part of a team that helps others shine! With a degree from the University of Texas in Applied Learning &amp; Development and over 15 years of experience leading and supporting educators, she brings strong communication, organization, and creative skills to her role as Director of Social Media.</p><p><br></p><p><br></p><p>Known for her ability to lead teams, implement effective systems, and inspire collaboration, Marlena ensures that the booster club's online presence reflects the passion, energy, and community spirit of the basketball program. She enjoys using social media to tell our story, highlight our team's hard work and help our community stay connected and inspired throughout the season.</p>`,
    imageUrl:
      "https://fvszwzqfyoumdwnwmfrb.supabase.co/storage/v1/object/public/site-images/board-members/1757266716350-pc3qnvbl8c.png",
  },
].map((member) => ({ ...member, bio: cleanBoardBio(member.bio) }));

export const aboutPage = {
  hero: {
    title: "About Our Booster Club",
    subtitle:
      "Supporting excellence in basketball and developing student-athletes both on and off the court",
  },
  mission: {
    title: "Our Mission",
    paragraphs: [
      "The Round Rock High School Boys Basketball Booster Club exists to support our student-athletes through fundraising, community building, and promoting academic and athletic excellence.",
      "We believe in developing not just skilled basketball players, but outstanding young men who will make positive contributions to their communities throughout their lives.",
    ],
    joinLabel: "Join Our Club",
    joinHref: "/join",
  },
  stats: [
    { value: "15+", label: "Championships Supported", icon: "trophy" },
    { value: "200+", label: "Active Members", icon: "users" },
    { value: "$50K+", label: "Raised Annually", icon: "heart" },
    { value: "45+", label: "Players Supported", icon: "target" },
  ] satisfies AboutStat[],
  board: {
    title: "Booster Club Board",
    subtitle: "Meet the dedicated volunteers leading our organization",
    members: boardMembers,
  },
  history: {
    title: "Program History",
    content:
      "Since 1995, the Round Rock Dragons basketball program has been a cornerstone of our community, developing championship teams and outstanding young men. Our booster club was founded in 2010 to ensure every student-athlete has the resources needed to succeed both on and off the court.",
    timeline: [
      { year: "1995", title: "Program Founded" },
      { year: "2010", title: "Booster Club Established" },
      { year: "2024", title: "Record Fundraising Year" },
    ] satisfies TimelineEntry[],
  },
  contact: {
    title: "Get Involved",
    subtitle:
      "Join our community of dedicated supporters and help make a difference in our student-athletes' lives.",
    visit: {
      title: "Visit Us",
      addressLines: [
        site.address.line1,
        site.address.line2,
        `${site.address.city}, ${site.address.state} ${site.address.zip}`,
      ],
      meetings: "Meetings: 2nd Tuesday each month, 7:00 PM",
      location: "Athletic Conference Room",
    },
    emailCard: {
      title: "Contact Us",
      emailLabel: "Email:",
      phoneLabel: "Phone:",
      sendLabel: "Send Message",
    },
    social: {
      title: "Follow Us",
      description:
        "Stay connected with us on social media for the latest updates, game highlights, and team news.",
      links: [
        { label: "Facebook", href: "https://www.facebook.com/rrhoopsbooster" },
        { label: "Instagram", href: "https://www.instagram.com/rrhoopsbooster/" },
        { label: "X", href: "https://x.com/RRHoopsBooster1" },
      ],
    },
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

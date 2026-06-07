export type Coach = {
  id: string;
  name: string;
  title: string;
  team?: string;
  bio: string;
  credentials: string;
  stats: { label: string; value: string }[];
  quote?: string;
  featured?: boolean;
  careerHighlights?: string[];
};

export const coaches: Coach[] = [
  {
    id: "levie",
    name: "Travis Levie",
    title: "Head Coach",
    team: "Varsity",
    featured: true,
    bio: `Coach Travis Levie, a Temple, Texas native, brings nearly 18 years of coaching experience to Round Rock High School. A former Academic All-American at the University of Texas–Permian Basin, he has built his career through successful stops at the college, middle school, and high school levels, including Pflugerville and Lago Vista. Since returning to RRHS as Head Coach in 2023, he has focused on building a program rooted in excellence, teamwork, and character.

Coach Levie continues to inspire Dragon athletes to strive for greatness, honoring the tradition of Round Rock while preparing the next generation for success.

Beyond basketball, Coach Levie is a devoted husband and father. He and his wife, Jodi, have been married for 16 years and are raising two children, Bryn (13) and Jace (9).`,
    credentials:
      "University of Texas–Permian Basin: Master's in Kinesiology; Bachelor's in History. Certified Basketball Coaching Professional.",
    stats: [
      { label: "Years Experience", value: "17" },
      { label: "Championships", value: "11" },
      { label: "Players Coached", value: "1200+" },
    ],
    quote:
      "Basketball is more than a game - it's about building character, teamwork, and preparing our young men for success in life.",
    careerHighlights: [
      "Assistant Coach at UT–Permian Basin (2006–2008)",
      "Middle School Coordinator at Abell Junior High (2008–2010)",
      "Assistant Coach at Midland Legacy High School (2010–2012)",
      "Assistant Coach at Pflugerville High School (2012–2020)",
      "Assistant Coach at Round Rock High School (2020–2021)",
      "Head Coach at Lago Vista High School (2021–2023)",
      "Qualified for the playoffs 15 of 17 years as a coach",
    ],
  },
  {
    id: "hagemann",
    name: "Darrell Hagemann",
    title: "Head Coach",
    team: "Junior Varsity",
    bio: "Coach Hagemann leads the JV Dragons with a focus on player development and preparing athletes for varsity competition.",
    credentials: "Experienced high school basketball coach.",
    stats: [
      { label: "Years Experience", value: "10+" },
      { label: "Focus", value: "Development" },
    ],
  },
  {
    id: "fogg",
    name: "Frank Fogg",
    title: "Head Coach",
    team: "Freshman Maroon",
    bio: "Coach Fogg develops fundamental skills and basketball IQ for freshman athletes.",
    credentials: "Youth and high school basketball coaching experience.",
    stats: [{ label: "Focus", value: "Fundamentals" }],
  },
  {
    id: "pugh",
    name: "Brad Pugh",
    title: "Head Coach",
    team: "Freshman White",
    bio: "Coach Pugh builds team chemistry and character in our freshman program.",
    credentials: "High school basketball coaching experience.",
    stats: [{ label: "Focus", value: "Team Building" }],
  },
];

export function getCoach(id: string) {
  return coaches.find((c) => c.id === id);
}

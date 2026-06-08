export type Coach = {
  id: string;
  name: string;
  title: string;
  bio: string;
  education?: string;
  certifications?: string;
  photo?: string;
  yearsExperience: number | string;
  championships: number | string;
  playersCoached: number | string;
  /** Optional intro line before a bullet list inside the bio block */
  listIntro?: string;
  listItems?: string[];
  bioAfterList?: string;
  featured?: boolean;
  quote?: string;
  careerHighlights?: string[];
};

export const coaches: Coach[] = [
  {
    id: "levie",
    name: "Coach Levie",
    title: "Head Coach",
    featured: true,
    photo: "/coach-levie.jpg",
    bio: `Coach Travis Levie, a Temple, Texas native, brings nearly 18 years of coaching experience to Round Rock High School. A former Academic All-American at the University of Texas–Permian Basin, he has built his career through successful stops at the college, middle school, and high school levels, including Pflugerville and Lago Vista. Since returning to RRHS as Head Coach in 2023, he has focused on building a program rooted in excellence, teamwork, and character.`,
    listIntro: "Over the past 17 years, he has served in multiple leadership roles:",
    listItems: [
      "Assistant Coach at UT–Permian Basin (2006–2008)",
      "Middle School Coordinator at Abell Junior High (2008–2010)",
      "Assistant Coach at Midland Legacy High School (2010–2012)",
      "Assistant Coach at Pflugerville High School (2012–2020)",
      "Assistant Coach at Round Rock High School (2020–2021)",
      "Head Coach at Lago Vista High School (2021–2023)",
      "Qualified for the playoffs 15 of 17 years as a coach",
    ],
    bioAfterList: `Coach Levie continues to inspire Dragon athletes to strive for greatness, honoring the tradition of Round Rock while preparing the next generation for success.

Beyond basketball, Coach Levie is a devoted husband and father. He and his wife, Jodi, have been married for 16 years and are raising two children, Bryn (13) and Jace (9).`,
    education: "University of Texas–Permian Basin: Master's in Kinesiology; Bachelor's in History",
    certifications: "Certified Basketball Coaching Professional",
    yearsExperience: 17,
    championships: 11,
    playersCoached: 1200,
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
    title: "JV Coach & Varsity Assistant",
    photo: "/coaches/placeholder.jpg",
    bio: `With more than 40 years of coaching experience and an unwavering commitment to developing student-athletes, Coach Darrell Hagemann is one of Central Texas's most respected and accomplished basketball coaches.

Coach Hagemann built an extraordinary legacy at McNeil High School—guiding his teams to the playoffs in 24 of 30 seasons, including an incredible 16 consecutive appearances. Under his leadership, McNeil achieved multiple deep postseason runs, including a state semifinal, two regional finals, and a regional semifinal appearance.

After an exceptional tenure that included hundreds of victories, he came out of retirement to join the Round Rock High School program—driven by his passion for the game and his desire to continue mentoring young athletes.

Beyond basketball, He and his wife, Cheryl, are proud parents of four children and grandparents to six.

Coach Hagemann embodies the heart of Texas high school basketball and brings a wealth of knowledge and leadership to the Dragon program.`,
    education: "Graduate of Llano HS and Angelo State University.",
    certifications: "Certified Basketball Coaching Professional",
    yearsExperience: 41,
    championships: 6,
    playersCoached: 2000,
  },
  {
    id: "fogg",
    name: "Frank Fogg",
    title: "Freshmen Maroon & Varsity Assistant",
    photo: "/coaches/placeholder.jpg",
    bio: `Coach Frank Fogg brings 15 years of coaching experience, deep basketball knowledge, and a strong commitment to player development to the Round Rock Dragons program.

His teams have made playoff appearances in 11 of his 15 seasons, earning multiple postseason honors including a regional quarterfinal berth, two area championships, four bi-district titles, and two district championships.

Respected throughout the coaching community, Coach Fogg has been a featured speaker at the Iowa Basketball Coaches Association Annual Coaching Clinic and is regarded as a trusted resource and mentor for coaches across the country. His energy, technical precision, and passion for the game make him a valued member of the RRHS coaching staff.

Off the court, Coach Fogg and his wife, Megan, are proud parents of three children — Maxfield, Andi, and Tate — and enjoy being active members of the Round Rock community.`,
    education: "A graduate of Ingleside High School and Texas State University",
    certifications: "Certified Basketball Coaching Professional",
    yearsExperience: 15,
    championships: 8,
    playersCoached: 1050,
  },
  {
    id: "pugh",
    name: "Brad Pugh",
    title: "Freshmen White & Varsity Assistant",
    photo: "/coaches/placeholder.jpg",
    bio: `With three decades of teaching and coaching experience across multiple levels of athletics, Coach Pugh brings a wealth of leadership, knowledge, and heart to the Round Rock Dragons basketball program. Now in his fourth year with RRHS, he has served 17 of his 30 years in Round Rock ISD, coaching at both Westwood and Round Rock High Schools. His diverse coaching journey spans three states—Illinois, Michigan, and Texas—and includes experience at seven high schools, two colleges, and even one professional franchise in the Arena Football League.

Off the court, Coach Pugh finds his greatest inspiration in his family. His wife, Jennifer, is a longtime RRISD counselor who embodies compassion and service, and together they have two children: Max, 17, who has a passion for mechanics and football, and Adelynn, 13, who has dedicated nine years to dance.

Guided by faith, purpose, and a deep commitment to helping students reach their potential, Coach Pugh continues to make a lasting impact on the Dragon community.`,
    education: "Master's degree in Athletic Administration from Michigan State University",
    certifications: "Certified Basketball Coaching Professional",
    yearsExperience: 29,
    championships: 3,
    playersCoached: 1300,
  },
];

export function getCoach(id: string) {
  return coaches.find((c) => c.id === id);
}

export function coachLastName(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1] ?? name;
}

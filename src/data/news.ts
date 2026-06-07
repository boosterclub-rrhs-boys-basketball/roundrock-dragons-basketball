export type NewsArticle = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  category: "News" | "Game Recap";
  date: string;
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "chill-for-a-cause",
    title: "Chill for a Cause: Kona Ice + Spirit Wear at tonight's game!",
    excerpt:
      "Nothing beats Friday night lights—and a frosty Kona Ice. Before the Varsity football game tonight (Friday, November 7), swing by the Kona Ice truck on campus from 5:00–7:00 PM and cool off with your favorite shaved ice flavor.",
    body:
      "Nothing beats Friday night lights—and a frosty Kona Ice. Before the Varsity football game tonight (Friday, November 7), swing by the Kona Ice truck on campus from 5:00–7:00 PM and cool off with your favorite shaved ice flavor. Spirit wear will also be available!",
    category: "Game Recap",
    date: "2025-11-06",
    featured: true,
  },
  {
    id: "tylers-team-signing",
    title: "Tyler's Team Signing & Custom Tee Drop: November 12th. 6-8PM",
    excerpt:
      "Meet the Dragons at Tyler's for an exclusive custom tee release and player autographs. Limited quantities—plus, 10% of all sales from 6–8 PM are donated to the RRHS Boys Basketball Booster Club.",
    body:
      "Meet the Dragons at Tyler's for an exclusive custom tee release and player autographs. Limited quantities—plus, 10% of all sales from 6–8 PM are donated to the RRHS Boys Basketball Booster Club.",
    category: "News",
    date: "2025-11-06",
  },
  {
    id: "free-varsity-scrimmage",
    title: "Free Varsity Scrimmage + Concessions Launch — 11/8, 10 AM at the Dragon Gym",
    excerpt:
      "Get a first look at the new Dragons! Join us Saturday at 10 AM for an inter-squad scrimmage, music with our new DJ, and a concessions pop-up—free admission.",
    body:
      "Get a first look at the new Dragons! Join us Saturday at 10 AM for an inter-squad scrimmage, music with our new DJ, and a concessions pop-up—free admission.",
    category: "News",
    date: "2025-11-06",
  },
];

export function getArticle(id: string) {
  return newsArticles.find((a) => a.id === id);
}

export function formatNewsDate(date: string) {
  return new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
}

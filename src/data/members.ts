export type Member = {
  name: string;
  tier: "Member" | "Champion";
  quote: string;
  photo?: string;
};

export const members: Member[] = [
  {
    name: "Cynthia Elkins",
    tier: "Champion",
    quote:
      "Collin Elkins, #30, is our forever #1. We became members to be involved in providing new ideas and taking action towards the betterment of the program. Supporting the booster club means providing solutions to create a bonded community & generate fun while raising monies needed to enhance the program; teambuilding, tournaments, uniforms, aesthetics, etc. Our direct connection is to our son however it easily proliferates to each of the players, all of whom work hard and equally have our support.",
  },
  {
    name: "Barnett Family",
    tier: "Member",
    quote:
      "It has been over a decade since joining the Round Rock Dragons family—a period filled with cherished moments and countless opportunities to support our players through both triumphs and challenges. Throughout this journey, we have been surrounded by a fantastic community. We look forward to continuing our support for the players and contributing to the ongoing growth of this remarkable program.",
  },
];

export const helpPage = {
  hero: {
    title: "Help & Documentation",
    subtitle: "Comprehensive guide to using the Rock Hoops platform",
  },
  searchPlaceholder: "Search documentation...",
  tabs: {
    overview: "Overview",
    features: "Features",
    technology: "Technology",
    database: "Content",
    faq: "FAQ",
  },
  overview: {
    title: "Platform Overview",
    description:
      "Public booster club website for schedules, news, fundraising, and spirit wear — built as a fast static site",
    architectureTitle: "Core Architecture",
    architecture: [
      "Astro static site generator",
      "TypeScript for content and components",
      "Tailwind CSS v4 design system",
      "Static content modules in src/data (Phase 1)",
      "Cloudflare Pages hosting",
      "Square payment integration for store and donations",
    ],
    capabilitiesTitle: "Key Capabilities",
    capabilities: [
      "Public pages (teams, schedule, news, about, sponsors)",
      "Fundraising and volunteer signup flows",
      "Spirit wear store via Square Catalog API",
      "Donation campaigns (Square checkout when configured)",
      "Searchable help and site documentation",
    ],
  },
  features: [
    {
      id: "store",
      title: "Spirit Wear Store",
      icon: "globe",
      description: "Square-powered storefront for spirit wear and booster club products",
      items: [
        "Product catalog loaded from the Square Catalog API",
        "Checkout via Square Web Payments SDK",
        "Inventory and pricing managed in Square Dashboard",
        "Credentials configured as Cloudflare Pages environment variables",
        "No on-site database — orders handled by Square",
      ],
    },
    {
      id: "athletics",
      title: "Schedules & Teams",
      icon: "book",
      description: "Game schedules, rosters, coaches, and team information for families and fans",
      items: [
        "Interactive schedule with filters and season statistics",
        "Varsity, JV, and freshman team pages",
        "Coach profiles and player member listings",
        "Upcoming games highlighted on the homepage",
        "Content sourced from static data modules at build time",
      ],
    },
    {
      id: "fundraising",
      title: "Fundraising & Donations",
      icon: "zap",
      description: "Campaigns, events, and giving flows for booster club support",
      items: [
        "Fundraising events with progress tracking",
        "Donation tiers, campaigns, and recent donor listings",
        "Volunteer opportunity cards with Sign Up Online links",
        "Square checkout when configured; mailto fallback in preview",
        "Contact coordinator dialogs for event-specific questions",
      ],
    },
    {
      id: "community",
      title: "Membership & Community",
      icon: "users",
      description: "Booster club membership, recognition, and parent resources",
      items: [
        "Membership tiers and benefits on the Join page",
        "Recognition Wall for donors and supporters",
        "Parents Hub gated by access code (client-side check)",
        "About, sponsors, news, and media gallery pages",
        "Newsletter-style content editable via src/data modules",
      ],
    },
  ],
  technology: {
    stackTitle: "Technology Stack",
    stackDescription: "Technologies used in the current Astro rebuild (Phase 1)",
    stack: [
      { name: "Astro 6", category: "Frontend", description: "Static multi-page site with .astro components" },
      { name: "TypeScript", category: "Language", description: "Typed content modules and page logic" },
      { name: "Tailwind CSS v4", category: "Styling", description: "Utility-first CSS via @tailwindcss/vite" },
      {
        name: "Custom Astro components",
        category: "UI",
        description: "Hand-built components — not React or shadcn/ui",
      },
      { name: "Cloudflare Pages", category: "Hosting", description: "Global CDN for static builds" },
      { name: "Square API", category: "Payments", description: "Store catalog and checkout processing" },
    ],
    edgeTitle: "Deployment & Content",
    edgeDescription: "How the Phase 1 site is built, hosted, and updated",
    edgeFunctions: [
      { name: "Static generation", description: "Pages pre-rendered at build time for fast loads" },
      { name: "Content updates", description: "Edit TypeScript data files in src/data and redeploy" },
      { name: "Environment config", description: "Square credentials set in Cloudflare Pages settings" },
      { name: "Contact flows", description: "Forms use mailto links until backend integrations are added" },
      { name: "Future phases", description: "Admin tools and dynamic content are planned separately" },
    ],
  },
  database: {
    sections: [
      {
        id: "site",
        title: "Site & Navigation",
        entries: [
          { module: "site.ts", description: "Site name, contact info, social links, nav and footer links" },
          { module: "helpPage.ts", description: "Help page copy and documentation content" },
        ],
      },
      {
        id: "athletics",
        title: "Athletics",
        entries: [
          { module: "games.ts", description: "Game schedule, results, and season statistics helpers" },
          { module: "teams.ts", description: "Varsity, JV, and freshman team listings" },
          { module: "coaches.ts", description: "Coach profiles and featured coach highlight" },
          { module: "members.ts", description: "Player roster entries for member carousels" },
        ],
      },
      {
        id: "content",
        title: "Pages & Media",
        entries: [
          { module: "news.ts / newsPage.ts", description: "News articles and media gallery page copy" },
          { module: "aboutPage.ts", description: "Mission, board members, history timeline, contact cards" },
          { module: "sponsors.ts / sponsorsPage.ts", description: "Sponsor listings, packages, and page sections" },
        ],
      },
      {
        id: "programs",
        title: "Programs & Giving",
        entries: [
          { module: "fundraisingPage.ts", description: "Events, volunteer opportunities, and recent donors" },
          { module: "donationsPage.ts", description: "Donation campaigns, tiers, and form labels" },
          { module: "volunteersPage.ts", description: "Volunteer page copy and opportunity listings" },
          { module: "joinPage.ts", description: "Membership tiers, benefits, and join FAQ" },
          { module: "recognition.ts", description: "Recognition Wall entries grouped by tier" },
          { module: "parentsPage.ts", description: "Parents Hub access gate and contact dialog copy" },
        ],
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Common questions about the current Astro site (Phase 1)",
    items: [
      {
        question: "How do I update content on the website?",
        answer:
          "Edit the TypeScript data files in src/data (for example news.ts, games.ts, or aboutPage.ts), then run npm run build and redeploy to Cloudflare Pages. Changes are baked in at build time — there is no admin dashboard in Phase 1.",
      },
      {
        question: "How does the spirit wear store work?",
        answer:
          "The store page loads products from the Square Catalog API when SQUARE_ACCESS_TOKEN and SQUARE_LOCATION_ID are set in Cloudflare Pages. Products, pricing, and inventory are managed in Square Dashboard. Checkout uses the Square Web Payments SDK — payment data never touches our servers.",
      },
      {
        question: "How do donations work on this site?",
        answer:
          "The donations page shows campaigns, tiers, and progress from donationsPage.ts. When Square is configured, checkout can process payments directly. Until then, submitting the form opens a pre-filled email to the booster club with the donation details.",
      },
      {
        question: "What is the Parents Hub access gate?",
        answer:
          "The /parents page requires an access code before showing parent resources. The check runs in the browser — it is a simple gate for Phase 1, not a full user account system. Contact the booster club if you need the code.",
      },
      {
        question: "How do contact and signup forms work?",
        answer:
          "Most forms (volunteer interest, coordinator contact, sponsor inquiries) compile the submission into a mailto link to boosterclub@roundrockbasketball.org. Volunteer cards also link to SignUpGenius for online signup where available.",
      },
      {
        question: "How is the site built and deployed?",
        answer:
          "The site is a static Astro build output in dist/, hosted on Cloudflare Pages via wrangler.jsonc. Run npm run dev locally for preview, npm run build to generate pages, and push to trigger a Cloudflare Pages deployment.",
      },
    ],
  },
} as const;

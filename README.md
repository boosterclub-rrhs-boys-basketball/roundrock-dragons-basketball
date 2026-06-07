# Round Rock Dragons Basketball Website

A cost-effective rebuild of [roundrockbasketball.org](https://roundrockbasketball.org/) designed to run on **Cloudflare Pages** instead of Lovable + Supabase.

## Why migrate?

| Service | Typical cost | Cloudflare replacement |
|---------|-------------|------------------------|
| Lovable hosting | ~$20–50+/mo | **Cloudflare Pages: $0** (free tier) |
| Supabase | ~$25+/mo (Pro) | **Cloudflare D1: $0** (free tier, 5GB) |
| Square payments | Per transaction | **Keep Square** (no change) |
| Domain DNS | varies | **Cloudflare DNS: $0** |

**Estimated savings: $45–75+/month** while keeping Square for payments.

## What's included

### Phase 1 (built now) — Public website
- Home, Schedule, Teams, Coaches, Members, News, Sponsors
- Get Involved pages (Join, Volunteers, Fundraising, Donations)
- Store page with Square Catalog API integration
- Mobile-responsive design matching current branding (maroon/gold)
- Content editable via `src/data/*.ts` files (no database needed for static content)

### Phase 2 (planned) — Replace Supabase features
- Parent/member login (Cloudflare D1 + secure sessions)
- Ticket validation & scanner
- Order history
- Member voting, minutes, news portal
- Admin content editor

## Quick start

```bash
cd website
npm install
npm run dev
```

Open http://localhost:4321

## Deploy to Cloudflare Pages

### Option A: Connect GitHub (recommended for auto-deploys)

1. Push this repo to GitHub (see below)
2. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **roundrock-dragons-basketball**
3. Go to **Settings** → **Builds & deployments** → **Connect to Git**
4. Select your GitHub repo and use these build settings:

| Setting | Value |
|---------|-------|
| Production branch | `master` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo root is the website folder) |

5. Add environment variables under **Settings** → **Environment variables**:
   - `SQUARE_ACCESS_TOKEN`
   - `SQUARE_LOCATION_ID`

### Option B: Manual deploy via Wrangler

```bash
npm run build
npx wrangler pages deploy dist --project-name roundrock-dragons-basketball --branch master
```

**Live preview:** https://roundrock-dragons-basketball.pages.dev

## Custom domain

Point `roundrockbasketball.org` DNS to Cloudflare Pages:
1. Add the domain in Cloudflare Pages project settings
2. Update nameservers at your registrar (or add CNAME record)
3. SSL is automatic

## Migrating data from Supabase

You'll need access to your Lovable/Supabase project:

1. **Export from Supabase Dashboard** → Table Editor → Export CSV for:
   - games, news, sponsors, members, profiles, tickets, orders
2. **Or use Lovable** → Project Settings → export/download source if available
3. Import into:
   - Static content → edit files in `src/data/`
   - Dynamic content → D1 database (Phase 2)

### Full schedule import

The current site has 80+ games. Export from Supabase and convert to the format in `src/data/games.ts`, or wait for the D1 import script in Phase 2.

## Square store setup

Products are managed in your existing **Square Dashboard** — no Supabase needed. The store page calls `/api/store/products` which reads from Square Catalog API server-side (access token never exposed to browsers).

For full checkout, add Square Web Payments SDK in Phase 2 or link to your Square Online store URL.

## Project structure

```
website/
├── src/
│   ├── components/     # Header, Footer, PageHero
│   ├── data/           # Site content (news, games, teams, etc.)
│   ├── layouts/        # BaseLayout
│   ├── pages/          # All routes
│   └── styles/         # Tailwind + brand colors
├── public/             # Static assets (logo, manifest, PDFs)
├── schema.sql          # D1 database schema (Phase 2)
└── wrangler.jsonc      # Cloudflare configuration
```

## Editing content

Booster club volunteers can update content by editing TypeScript data files:

- **News:** `src/data/news.ts`
- **Schedule:** `src/data/games.ts`
- **Teams:** `src/data/teams.ts`
- **Coaches:** `src/data/coaches.ts`
- **Sponsors:** `src/data/sponsors.ts`
- **Members:** `src/data/members.ts`

A simple admin UI can be added in Phase 2.

## What you'll need from Lovable

To complete the migration, gather:

1. Supabase project credentials (for one-time data export)
2. Square API credentials (Access Token + Location ID)
3. Any uploaded images/assets not on the live site
4. List of parent/member accounts to migrate (Phase 2)

## License

Maintained by the RRHS Men's Basketball Booster Club.

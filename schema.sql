-- Cloudflare D1 schema for Phase 2 features (auth, tickets, orders)
-- Run: npx wrangler d1 execute rrhs-db --file=./schema.sql

CREATE TABLE IF NOT EXISTS profiles (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'parent',
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS news_articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  body TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'News',
  published_at TEXT NOT NULL,
  featured INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS games (
  id TEXT PRIMARY KEY,
  opponent TEXT NOT NULL,
  game_date TEXT NOT NULL,
  end_date TEXT,
  location TEXT,
  home INTEGER NOT NULL DEFAULT 0,
  team TEXT NOT NULL DEFAULT 'Varsity',
  game_type TEXT NOT NULL DEFAULT 'Regular',
  result TEXT,
  score TEXT,
  upcoming INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS tickets (
  id TEXT PRIMARY KEY,
  order_id TEXT,
  event_name TEXT NOT NULL,
  holder_email TEXT,
  qr_code TEXT NOT NULL UNIQUE,
  redeemed_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  square_order_id TEXT,
  user_id TEXT,
  total_cents INTEGER,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES profiles(id)
);

CREATE INDEX IF NOT EXISTS idx_games_date ON games(game_date);
CREATE INDEX IF NOT EXISTS idx_tickets_qr ON tickets(qr_code);

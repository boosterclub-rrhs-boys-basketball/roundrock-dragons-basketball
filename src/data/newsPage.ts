export const newsPage = {
  hero: {
    title: "News & Media",
    subtitle: "Stay updated with the latest Dragons basketball news and highlights",
  },
  tabs: {
    news: "Latest News",
    media: "Photo & Video",
  },
  media: {
    title: "Photo & Video Gallery",
    subtitle: "Highlights, team photos, and memorable moments from Dragons basketball",
    emptyTitle: "No media items yet",
    emptyText: "Media content will appear here once added by administrators.",
    highlightsTitle: "Latest Game Highlights",
    highlightsCaption:
      "Subscribe to our YouTube channel for more game highlights and behind-the-scenes content",
    youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
};

/** Static media gallery items — replace with CMS/API data in Phase 2 */
export type MediaItem = {
  id: string;
  title: string;
  description?: string;
  type: "photo" | "video";
  thumbnailUrl?: string;
  mediaUrl?: string;
  date: string;
  views?: number;
};

export const mediaItems: MediaItem[] = [];

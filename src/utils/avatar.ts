const avatarColors = [
  "hsl(210, 100%, 56%)",
  "hsl(291, 64%, 42%)",
  "hsl(171, 100%, 41%)",
  "hsl(48, 100%, 67%)",
  "hsl(14, 100%, 57%)",
  "hsl(339, 82%, 52%)",
  "hsl(142, 71%, 45%)",
  "hsl(262, 52%, 47%)",
];

export function getInitials(name: string): string {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function getAvatarGradient(name: string): string {
  if (!name) return "hsl(var(--color-primary))";

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const base = avatarColors[Math.abs(hash) % avatarColors.length];
  const match = base.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (!match) return base;

  const [, hue, saturation, lightness] = match;
  const lighter = Math.min(parseInt(lightness, 10) + 15, 85);
  return `linear-gradient(135deg, ${base} 0%, hsl(${hue}, ${saturation}%, ${lighter}%) 100%)`;
}

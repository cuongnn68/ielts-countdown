export const EXAM_TIME = Date.parse('2026-11-28T00:00:00+07:00');
const DAY = 86_400_000;
const OFFSET = 7 * 60 * 60 * 1000;

export const themes = [
  { name: 'Sage / Quiet focus', bg: '#f1f0e8', ink: '#263c30', muted: '#536557', accent: '#536b35', line: '#cbd1c3', display: "'Space Grotesk', sans-serif" },
  { name: 'Midnight / Clear mind', bg: '#171f30', ink: '#f1eee5', muted: '#a8b5ca', accent: '#c2d7f8', line: '#394459', display: "'Manrope', sans-serif" },
  { name: 'Terracotta / Warm ambition', bg: '#f6e7dc', ink: '#633626', muted: '#7f5747', accent: '#ad472b', line: '#ddc2b2', display: "Georgia, serif" },
  { name: 'Lavender / Fresh perspective', bg: '#eeebf6', ink: '#39324f', muted: '#69617e', accent: '#75579c', line: '#d1c9df', display: "'Manrope', sans-serif" },
  { name: 'Ocean / Steady progress', bg: '#e5eff1', ink: '#1c454e', muted: '#4c6970', accent: '#236b7d', line: '#bfd3d8', display: "'Space Grotesk', sans-serif" },
  { name: 'Butter / A little brighter', bg: '#f8efcf', ink: '#4d4125', muted: '#756345', accent: '#8b5d17', line: '#dfd1a5', display: "Georgia, serif" },
  { name: 'Rose / Almost there', bg: '#f2e7e8', ink: '#573540', muted: '#7f5b68', accent: '#a04b65', line: '#dbc3ca', display: "'Manrope', sans-serif" },
];

export function getCountdown(now) {
  const total = Math.max(0, Math.ceil((EXAM_TIME - now) / 1000));
  return { days: Math.floor(total / 86400), hours: Math.floor(total / 3600) % 24, minutes: Math.floor(total / 60) % 60, seconds: total % 60, finished: total === 0 };
}

export function getTheme(now) {
  const day = Math.floor((now + OFFSET) / DAY);
  return themes[((day % themes.length) + themes.length) % themes.length];
}

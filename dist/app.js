import { getCountdown, getTheme } from './countdown.js';

const numbers = Object.fromEntries(['days', 'hours', 'minutes', 'seconds'].map(key => [key, document.getElementById(key)]));
let currentTheme;

function render() {
  const now = Date.now();
  const countdown = getCountdown(now);
  for (const [key, element] of Object.entries(numbers)) {
    const value = String(countdown[key]).padStart(2, '0');
    if (element.textContent !== value) element.textContent = value;
  }
  document.querySelector('.countdown').hidden = countdown.finished;
  document.getElementById('exam-message').hidden = !countdown.finished;
  document.getElementById('heading').hidden = countdown.finished;
  const theme = getTheme(now);
  if (theme !== currentTheme) {
    for (const [key, value] of Object.entries(theme)) {
      if (key !== 'name') document.documentElement.style.setProperty(`--${key}`, value);
    }
    document.getElementById('theme-name').textContent = theme.name;
    document.querySelector('meta[name="theme-color"]').content = theme.bg;
    currentTheme = theme;
  }
}

render();
setInterval(render, 1000);
document.addEventListener('visibilitychange', render);
window.addEventListener('pageshow', render);

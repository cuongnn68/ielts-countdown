# IELTS countdown

Static countdown to 28 November 2026 at 00:00 UTC+7. Seven curated themes rotate at midnight UTC+7. No build, db, or account required. Google Fonts are optional; local fallback fonts work offline.

## Run

```sh
cd ielts-countdown
npm start
```

Open http://localhost:3000. Verify the countdown, mobile layout, and refresh behavior. The target datetime and themes are in `dist/countdown.js`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes `dist/` on pushes to `main`. Set the repo's Settings → Pages → Source to GitHub Actions before the first deployment.

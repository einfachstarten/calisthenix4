# Icon Assets

This folder contains the full icon set generated with PWABuilder. The assets are grouped by platform:

- `ios/` – square icons for favicons, apple-touch icons, and badges
- `android/` – adaptive launcher icons that also serve as PWA shortcuts and notification artwork
- `android/windows11/` – Windows tiles, splash screens, and store artwork

`manifest.json`, `index.html`, and `public/sw.js` reference the icons directly from these folders, so no renaming is required.
Add new icons next to the existing ones if you customise the artwork and keep the same relative paths to stay compatible with the PWA configuration.

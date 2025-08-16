# PWA Documentation (Manual Workbox Setup)

This document explains how to convert a standard Vite application into a Progressive Web App (PWA) using a manual Workbox setup. This method gives you fine-grained control over your service worker.

---

## 1. Install Dependencies

First, you need the `workbox-cli` package. You can install it globally or as a development dependency.

```bash
# Install globally
npm install workbox-cli -g

# Or install as a dev dependency
npm install workbox-cli -D
```

---

## 2. Create Configuration and Assets

You need to create a few files manually in your project root and `public` folder.

### A. Workbox Config (`workbox-config.cjs`)

Create a `workbox-config.cjs` file in your project root. This file tells Workbox what files to cache after you build your project.

**`workbox-config.cjs`:**
```javascript
module.exports = {
  // The directory to look for files to precache. This should be your build output directory.
  globDirectory: 'dist/',

  // The patterns to match for files to precache.
  globPatterns: [
    '**/*.{html,js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest,map}'
  ],

  // The destination for the generated service worker file.
  swDest: 'dist/sw.js',

  // Optionally, ignore certain URL parameters.
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ]
};
```

### B. Web App Manifest (`public/manifest.json`)

Create a `manifest.json` file inside your `public` directory. This file provides the browser with metadata about your PWA.

**`public/manifest.json`:**
```json
{
  "name": "B2Y Portfolio",
  "short_name": "B2Y",
  "description": "Portfolio of B2Y",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": ".",
  "icons": [
    {
      "src": "pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### C. PWA Icons

Add the icons referenced in your manifest (`pwa-192x192.png` and `pwa-512x512.png`) to the `public` directory.

---

## 3. Register the Service Worker

You need to add code to your application to register the service worker in the browser. The best place for this is in your main entry file, `src/main.jsx`.

**`src/main.jsx`:**
```javascript
// Add this code to your existing main.jsx
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(error => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}
```

---

## 4. Link Manifest in `index.html`

Ensure your `public/index.html` file links to the manifest.

**`public/index.html`:**
```html
<head>
  ...
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#ffffff">
  ...
</head>
```

---

## 5. The Build Process

This is a two-step process. You first build your Vite project, and *then* you run Workbox to generate the service worker based on the build output.

1.  **Build the Vite project:**
    ```bash
    npm run build
    ```
    This creates the `dist` directory with your production-ready app.

2.  **Generate the Service Worker:**
    ```bash
    workbox generateSW workbox-config.cjs
    ```
    This reads your `workbox-config.cjs`, scans the `dist` directory, and creates a production-ready `dist/sw.js` file that knows how to cache all your app's assets.

### Recommended: Automate the Build

To make this easier, you should update the `build` script in your `package.json` to run both commands automatically.

**`package.json`:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build && workbox generateSW workbox-config.cjs",
  "lint": "eslint .",
  "preview": "vite preview"
},
```
Now, when you run `npm run build`, it will build the app and generate the service worker in one step.
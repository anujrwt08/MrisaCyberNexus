Deployment to Netlify and Vercel

This repository builds the client into `dist/public` (root build output). When deploying to static hosts you must ensure the host publishes `dist/public` and that SPA routes fallback to `index.html`.

Netlify
- Build command: `npm run build`
- Publish directory: `dist/public`
- `_redirects` file: `client/public/_redirects` is included in the repo; Vite will copy that to `dist/public` during `npm run build`.

netlify.toml (included):
```toml
[build]
  command = "npm run build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Vercel
- Build command: `npm run build`
- Output directory: `dist/public`

`vercel.json` (included) already configures static-build and rewrites all routes to `index.html`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist/public" }
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

Checklist to verify locally before deploying
- Run `npm run build` and confirm `dist/public/index.html` exists.
- Confirm `dist/public/_redirects` exists (Netlify) and contains `/* /index.html 200`.
- If using custom domain, double-check DNS and Vercel/Netlify project settings.

If you want, I can run `npm run build` now and confirm the files exist and show you the resulting `dist/public` contents.
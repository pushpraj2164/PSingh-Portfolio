# AngularPortfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.27.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building & Asset Compression

To build the project for production:

```bash
npm run build
```

The build process includes an automatic `postbuild` hook that generates:
- **Gzip pre-compressed assets** (`.gz`, level 9 maximum compression)
- **Brotli pre-compressed assets** (`.br`, quality 11 maximum compression)

This reduces the JS/CSS/HTML transfer payload by up to **74%**.

To manually run compression on the build output:
```bash
npm run compress
```

## Image Optimization (WebP)

All portfolio and project images have been converted to high-efficiency **WebP** format, reducing initial asset weight from 7.4 MB down to ~717 KB (over **90% reduction**):
- Profile image: `pushpraj-photo.webp` (72 KB vs 1.85 MB)
- All 6 project mockups: `projects/*.webp` (~60-115 KB each vs ~500-700 KB)

To optimize or reconvert newly added images to WebP at any time:
```bash
npm run convert:webp
```

## Production Preview Server (Gzip & Brotli Verified)

To test the production build locally with native Brotli (`Content-Encoding: br`) and Gzip (`Content-Encoding: gzip`) HTTP response streaming:

```bash
npm run preview
# or: npm run serve:prod
```

Navigate to `http://localhost:4200` to preview the production build.

## Production Server Deployment (Nginx / Cloudflare / Netlify)

- **Nginx**: A pre-configured [`nginx.conf`](./nginx.conf) is included with `brotli_static on;` and `gzip_static on;` directives for zero-CPU static serving.
- **Netlify / Cloudflare Pages**: Cache rules and security headers are included in [`public/_headers`](./public/_headers).

## SEO & Answer Engine Optimization (AEO / GEO)

This portfolio is heavily optimized for both classical Search Engines (Google, Bing) and AI Answer Engines (ChatGPT / SearchGPT, Perplexity AI, Google Gemini, Claude, Copilot):

- **Structured JSON-LD (Schema.org)**: Complete multi-entity graph including `Person`, `ProfilePage`, `WebSite`, `ItemList` (projects), and `FAQPage` (for instant AI citation).
- **Robots.txt**: Explicit allow rules for Googlebot, Bingbot, and AI answer bots (`GPTBot`, `ChatGPT-User`, `Google-Extended`, `PerplexityBot`, `ClaudeBot`, `Applebot-Extended`, etc.).
- **Sitemap with Google Images**: Full `sitemap.xml` with `<image:image>` tags indexing the profile photo and all 6 project showcases.
- **AI Context Protocols**: Root `llms.txt` and `llms-full.txt` files providing structured context for LLM crawlers.
- **Semantic Crawlable Fallback**: Non-JS search bots receive full semantic HTML content inside `<app-root>` before Angular client-side hydration.

To run the automated SEO/AEO audit suite:
```bash
npm run validate:seo
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

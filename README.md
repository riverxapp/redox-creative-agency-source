# Creative agency site

Install with `pnpm install`, then run `pnpm dev` for local development.
Run `pnpm build` and `pnpm preview` to check the production site.

The production build copies `index.html` and the complete `assets` directory to
`dist`. The template relies on ordered classic scripts and runtime asset paths,
so every asset must be shipped, including files not imported by JavaScript.

## Vercel

Use the repository root with the **Other** framework preset. `vercel.json` sets
the build command to `pnpm build` and output directory to `dist`. Redeploy after
updating the source; existing deployments retain their previous build output.

Font Awesome Free 6.1.2 fonts are included locally with their license. The
original template's proprietary text fonts were absent from this repository;
the stylesheet uses its existing Google Fonts families and system serif fallbacks
instead. References to absent decorative images from other template variants
have been removed.

`mail.php` requires a PHP server and is not part of this static deployment.

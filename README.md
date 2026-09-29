# Qianyue Wu

A small, static personal homepage built with Astro. The typography and narrow
column are inspired by [Benji Taylor](https://benji.org/) and
[Ben Sage](https://sage.me/).

## Development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Astro prints the local preview URL (normally `http://localhost:4321`).

```sh
npm run build   # Type-check, then generate dist/
npm run preview # Preview the production build
```

Edit the introduction in `src/pages/index.astro`, and the
typography, spacing, and responsive layout in `src/styles/global.css`.
The page uses system fonts. A small client-side script updates the Beijing clock
each minute and switches the illustrated cat between sleeping (00:00–07:59)
and awake (08:00–23:59), always using the `Asia/Shanghai` time zone.
The footer lives in `src/components/LocalTime.astro`; its time logic is in
`src/lib/beijing-time.ts`. Cat animations respect reduced-motion preferences.

## Homepage content

The homepage order is introduction, Research Interests, Research Experience,
Education Background, and Publications. Research and education rows remain
plain text until there are real detail pages to link to.

Edit `researchInterests`, `education`, `publications`, and `researchExperience`
in `src/data/profile.ts`. Timeline entries have a `title`, an optional
`subtitle`, an optional `date`, and an optional `href`.
Research dates represent when each project started, using the month precision
provided in the CV. Education uses enrollment dates from the CV; degree names
appear below institutions. Publications use their publication dates.
Dates can be `YYYY-MM-DD`, `YYYY-MM`, or just `YYYY`: supply only known
precision. Entries group by year, newest first, with the year on the left
and day/month on the right. Month-only entries show the month name; year-only
entries have no extra date. Undated research topics are grouped as Ongoing.
Publications remain empty until real publications are supplied.

`src/components/Timeline.astro` provides the dated sections. Entries without a URL
are plain text. Links may be external or site-relative; only link to existing pages.

During `npm run dev`, open `/preview/timeline` to inspect labelled examples
with multiple years, long titles, Chinese text, and partial dates. The preview
route and sample entries are excluded from production output.

The existing GitHub Pages workflow supplies the site URL and base path at build
time. Homepage links and the favicon work under a repository subpath too.

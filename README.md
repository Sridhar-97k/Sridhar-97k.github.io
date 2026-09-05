# Sridhar Kumar — Personal Website

Personal portfolio site, live at **<https://sridhar-97k.github.io>**.

Built with [Create React App](https://create-react-app.dev/) (React 19) and deployed to
GitHub Pages via the [`gh-pages`](https://github.com/tschaub/gh-pages) package.

## Getting started

```bash
git clone git@github.com:Sridhar-97k/Sridhar-97k.github.io.git
cd Sridhar-97k.github.io
npm install
npm start
```

`npm start` serves the site at <http://localhost:3000> with hot reload.

> On Windows PowerShell, `&&` is not a valid operator — run each command on its own line,
> or separate them with `;`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Dev server on port 3000 with hot reload |
| `npm test` | Jest + React Testing Library in watch mode |
| `npm run build` | Production bundle into `build/` |
| `npm run deploy` | Builds, then publishes `build/` to the `gh-pages` branch |

`npm run deploy` **publishes to the live site.** Only run it when the changes are ready to
be public.

## Project structure

```
public/
  index.html          page shell, <title> and meta description
  favicon.svg         SK monogram, matches the site accent colors
  manifest.json       PWA metadata
  profile-photo.jpg   header photo
src/
  index.js            entry point
  index.css           design tokens (the whole color palette lives here)
  App.js              composes the page and fixes section order
  App.css             page shell and card container
  components/         one .js + matching .css per section
    Header  About  Education  Experience  Skills
    Projects  Publications  Links  Footer
```

Sections render in this order: **About → Education → Experience → Skills → Projects →
Publications → Connect**, followed by the footer. To reorder or remove one, edit the JSX in
`src/App.js`.

## Editing content

Each section keeps its content in a plain array at the top of its component, so adding an
entry means adding an object — no JSX changes needed.

| File | Holds |
| --- | --- |
| `src/components/About.js` | Bio paragraph |
| `src/components/Education.js` | Degrees, with optional `coursework` |
| `src/components/Experience.js` | Roles, with optional `subtitle` and `highlights` |
| `src/components/Skills.js` | Skill categories |
| `src/components/Projects.js` | Projects, with optional `context` and `tags` |
| `src/components/Publications.js` | Citations |
| `src/components/Links.js` | Social links and their inline SVG icons |

Optional fields can be omitted entirely and the markup for them is skipped.

### Adding a project

```javascript
{
  title: 'New Project',
  context: 'Where it was built',   // optional
  description: 'What it does and how.',
  tags: ['React', 'Node']
}
```

### Adding a publication

`status` drives the color of the pill. Use `'Published'` (green) or `'Accepted'` (accent);
anything else renders as amber, for work still in progress.

```javascript
{
  title: 'Paper Title',
  authors: 'A. Author, B. Author, and S. Kumar',
  venue: 'Conference or Journal Name',
  details: 'vol. 1, no. 2, pp. 3-4',   // optional
  location: 'City, ST',                 // optional
  year: '2026',
  status: 'Accepted'
}
```

The author list bolds `S. Kumar` automatically.

## Theming

Every color is a CSS custom property defined once in **`src/index.css`** under `:root`.
No component stylesheet hardcodes a color, so re-theming the whole site means editing that
one block.

```css
--accent-start / --accent-end   the gradient used by headings, borders, the name
--accent-solid                  links and emphasized text
--page-bg                       page background gradient
--surface / --surface-muted     card backgrounds
--heading / --text              text colors
```

If you change `--accent-start`, also update `theme-color` in `public/index.html` and
`public/manifest.json`, plus the two gradient stops in `public/favicon.svg` — those three
sit outside the CSS and will not follow automatically.

## Deploying

```bash
git add .
git commit -m "Describe the change"
git push
npm run deploy
```

`git push` updates the source on `main`. `npm run deploy` is the step that rebuilds and
publishes to `gh-pages`, which is what the live site actually serves — pushing alone does
not update the site.

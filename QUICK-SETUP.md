# Quick Setup

A short cheat sheet for common edits. See [README.md](README.md) for the full picture.

## Run it locally

```bash
cd Sridhar-97k.github.io
npm install     # first time only
npm start       # http://localhost:3000
```

The dev server hot-reloads, so save a file and the browser updates.

> **PowerShell:** `&&` is not a valid operator. Run commands on separate lines, or join
> them with `;`.

> **Port 3000 in use?** Create React App offers the next free port — press `y`. To force
> one: `$env:PORT = "3005"; npm start`.

## Where things live

Every section keeps its content in an array at the top of its component. Adding an entry
means adding an object to that array — no JSX to touch.

| Want to change | Edit |
| --- | --- |
| Bio | `src/components/About.js` |
| Degrees, coursework | `src/components/Education.js` |
| Jobs | `src/components/Experience.js` |
| Skills | `src/components/Skills.js` |
| Projects | `src/components/Projects.js` |
| Papers | `src/components/Publications.js` |
| Social links | `src/components/Links.js` |
| Name, tagline, photo | `src/components/Header.js` |
| Section order | `src/App.js` |
| **All colors** | `src/index.css` |

## Change the colors

Every color is a CSS variable defined once at the top of `src/index.css`. Component
stylesheets reference those variables and hardcode nothing, so editing that one `:root`
block re-themes the entire site.

```css
:root {
  --accent-start: #6366f1;   /* gradient start: headings, borders, your name */
  --accent-end:   #a855f7;   /* gradient end */
  --accent-solid: #7c3aed;   /* links, company and venue names */
  ...
}
```

Three spots live outside the CSS and won't follow automatically:
`theme-color` in `public/index.html`, `theme_color` in `public/manifest.json`, and the two
gradient stops in `public/favicon.svg`.

## Add a project

In `src/components/Projects.js`, add to the `projects` array. `context`, `tags` and `links`
are optional:

```javascript
{
  title: 'New Project',
  context: 'Hackathon or course name',
  description: 'What it does and how you built it.',
  tags: ['React', 'Node'],
  links: [
    { type: 'demo', url: 'https://example.com' },
    { type: 'github', url: 'https://github.com/you/repo' }
  ]
}
```

`type: 'demo'` renders a "Live demo" button, `type: 'github'` renders "Source". Pass a
`label` to override the text. Projects with no `links` simply show no button row.

## Add a publication

In `src/components/Publications.js`. `status` sets the pill color — `'Published'` is green,
`'Accepted'` uses the accent, anything else is amber:

```javascript
{
  title: 'Paper Title',
  authors: 'A. Author, B. Author, and S. Kumar',
  venue: 'Conference Name',
  location: 'City, ST',
  year: '2026',
  status: 'Accepted'
}
```

Your name is bolded automatically wherever `S. Kumar` appears in the author list.

## Check before you ship

```bash
npm test -- --watchAll=false     # tests
npm run build                    # catches anything that breaks the bundle
```

## Publish

```bash
git add .
git commit -m "Describe the change"
git push          # updates source on main
npm run deploy    # rebuilds and publishes to gh-pages — this is what updates the live site
```

`git push` alone does **not** update <https://sridhar-97k.github.io>. The `npm run deploy`
step is what republishes it.

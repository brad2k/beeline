# The Beeline

A cycling route guide for the Bay Area. Content is managed in Sanity Studio and rendered by a Next.js frontend, deployed on Netlify.

## Project Structure

```
beeline/
├── frontend/       # Next.js 16 app (React 19, TypeScript)
├── studio/         # Sanity Studio (content management)
└── netlify.toml    # Deploys frontend/, builds with `npm run build`
```

## Frontend (`frontend/`)

**Stack:** Next.js 16, React 19, TypeScript, CSS Modules, `clsx`, `lucide-react`

**Key directories:**
- `app/components/` — shared UI components (Footer, Header, Layout, RouteList, RoutePreview, ui/)
- `app/routes/[slug]/` — dynamic route detail pages
- `app/lib/sanity.ts` — Sanity client, image URL builder, `Route` type, GROQ queries (`getRoute`, `getRoutes`)

**Dev server:** `cd frontend && npm run dev`
**Lint:** `cd frontend && npm run lint`

## Studio (`studio/`)

**Stack:** Sanity v3, TypeScript

**Schema:** Single `route` document type (`studio/schemaTypes/route.ts`) with fields: title, slug, stravaRouteId, area, image, summary, description (Portable Text), distance, elevation, difficulty, tags.

**Areas:** `sf` | `north` | `south` | `all`
**Difficulty:** `super easy` | `easy` | `moderate` | `difficult`

**Dev server:** `cd studio && npm run dev`

## Environment Variables

Frontend (`.env.local`):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

Studio (`.env`):
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

## Conventions

- Components use CSS Modules (co-located `*.module.css`)
- Images use `next/image`
- Sanity queries live in `frontend/app/lib/sanity.ts`
- The `Route` TypeScript interface is the source of truth for data shape on the frontend
- Each component is a default export in its own folder (`components/Footer/index.tsx`)

# Prime Surface Studio — Website

Production-ready marketing website for **Prime Surface Studio**, a professional car wrap and window tinting company in Montclair, CA.

**Tech:** Next.js 16 · TypeScript · Tailwind CSS · Framer Motion · React Hook Form · Zod · Resend

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy and fill in env vars
cp .env.local.example .env.local
# Edit .env.local with your actual keys

# 3. Run development server
npm run dev
# Open http://localhost:3000
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for contact/quote email delivery |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) — optional |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`) — optional |
| `NEXT_PUBLIC_GADS_ID` | Google Ads account ID (default in code: `AW-18103141318`) |
| `NEXT_PUBLIC_GADS_CONVERSION_LABEL` | `AW-XXX/label` used by the quote-submit conversion event |

Without `RESEND_API_KEY`, form submissions log to the server console (dev only).

### Google Ads tracking — already configured

Two things are hardcoded as defaults in code (no env vars required):

- **Google tag:** `AW-18103141318` loads on every page via `src/app/layout.tsx`
- **Contact conversion:** `AW-18103141318/io6OCKT9qa0cEMaHoLhD` fires on successful **quote form** and **contact form** submissions via `src/lib/analytics.ts`

Override either by setting `NEXT_PUBLIC_GADS_ID` or `NEXT_PUBLIC_GADS_CONVERSION_LABEL` in `.env.local` / Vercel if you ever create new conversion actions.

---

## Deploy to Vercel

```bash
npx vercel
```

Add environment variables in Vercel Dashboard → Settings → Environment Variables.
Vercel auto-provisions SSL. No other configuration needed.

---

## Swapping Assets

### Logo
Replace `public/logo.png` with your actual logo. Both Header and Footer reference `/logo.png`.

### Photos
All placeholder images are Unsplash URLs. Find them with:
```
grep -r "unsplash.com" src/
```
Put real photos in `public/images/` and update the `src` props.

Replace `public/og-default.jpg` with a real branded 1200×630px image.

### Business Info
Everything is in one place — edit `src/lib/site-config.ts` to update phone, email, address, hours, social links, and service area. Changes propagate to the footer, header, contact page, and all JSON-LD schema automatically.

---

## Project Structure

```
src/
├── app/                       # App Router pages
│   ├── layout.tsx             # Root layout (fonts, header, footer, analytics)
│   ├── page.tsx               # Home
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── quote/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── services/
│   │   ├── car-window-tinting/page.tsx
│   │   ├── residential-commercial-window-tinting/page.tsx
│   │   ├── car-wraps/page.tsx
│   │   ├── food-truck-wraps/page.tsx
│   │   ├── fleet-wraps/page.tsx
│   │   └── architectural-wraps/page.tsx
│   ├── api/contact/route.ts   # Form handler — Resend or console fallback
│   ├── sitemap.ts             # Auto-generated /sitemap.xml
│   └── robots.ts              # Auto-generated /robots.txt
├── components/
│   ├── layout/                # Header, Footer, FloatingCTA, CookieBanner
│   ├── sections/              # Reusable page sections
│   ├── forms/                 # ContactForm, QuoteForm (multi-step)
│   ├── ui/                    # Button, Card, Input, Motion wrappers
│   └── seo/                   # JsonLd component
├── content/                   # services.ts, testimonials.ts, faqs.ts
└── lib/                       # site-config.ts, seo.ts, schema.ts, utils.ts
```

---

## Connecting Resend

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (`primesurfacestudio.com`)
3. Create an API key → add as `RESEND_API_KEY`
4. Update the `from` address in `src/app/api/contact/route.ts`

---

## Build & Lint

```bash
npm run build    # Production build
npm run lint     # ESLint
npm run dev      # Dev server at http://localhost:3000
```

# Evendor Landing Page

Production-ready marketing site for **Evendor** — Nigeria's marketplace for event vendors and event halls.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form, and Lucide React.

## Quick start

```bash
npm install
cp .env.example .env.local
# Add your Google Apps Script Web App URL to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo

Place your uploaded Evendor logo at:

```
public/evendor-logo.png
```

Recommended: transparent PNG, ~280×80px or similar aspect ratio. If the file is missing, the site shows a styled text fallback.

## Waitlist & Google Sheets

### 1. Google Sheet

1. Create a new Google Sheet.
2. Add headers in row 1: `Timestamp` | `Name` | `Email` | `Phone` | `Role`

### 2. Apps Script

1. In the sheet: **Extensions → Apps Script**
2. Paste the contents of `google-apps-script/Code.gs`
3. Save the project
4. (Optional) Run `setupSheetHeaders` once if you need to create headers automatically
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the deployment URL (ends with `/exec`)

### 3. Environment variable

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Submissions are stored in the sheet. Notification emails are sent to the address configured in `Code.gs` (not exposed on the website).

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variable:
   - **Name:** `GOOGLE_APPS_SCRIPT_URL`
   - **Value:** your Apps Script Web App URL
5. Click **Deploy**.

### After deploy

- Test the waitlist form on the live URL.
- Confirm new rows appear in Google Sheets.
- Confirm notification emails arrive.

### Custom domain

In the Vercel project: **Settings → Domains** → add your domain and follow DNS instructions.

## Project structure

```
app/
  layout.tsx          # Fonts, SEO metadata
  page.tsx            # Landing page composition
  api/waitlist/       # Proxies submissions to Google Apps Script
components/           # Navbar, Hero, sections, Footer
components/ui/        # Logo, Button, Accordion, counters
lib/                  # Constants, animation variants
google-apps-script/   # Backend for Sheets + email
public/               # Logo and static assets
```

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Development server       |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | ESLint                   |

## Brand

| Token      | Value     |
|------------|-----------|
| Background | `#E5DFD9` |
| Accent     | `#7A2E3D` |
| Cards      | `#FFFFFF` |
| Text       | `#1A1A1A` |
| Muted      | `#666666` |

Headings: **Playfair Display** · Body: **Inter**

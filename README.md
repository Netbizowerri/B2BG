# Blessed2Bless Global Empowerment Organisation (B2BG)

## Run Locally

1. Install dependencies:
   `npm install`
2. Create `.env.local` from `.env.example` and set:
   - `VITE_SITE_URL` to your production domain
3. Start the app:
   `npm run dev`

## Build

- Production build: `npm run build`
- Preview build: `npm run preview`

## Security Notes

- Keep secrets in server-side environments only.
- Do not expose API keys in browser code.
- Static security headers are configured in `public/_headers`.

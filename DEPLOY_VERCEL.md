# Deploying ComputeMore-Website to Vercel (and serving `/projects/nico-life-loyalty`)

This repo is a Nuxt 3 app using file-based routing. Vercel will automatically serve any route that exists under `app/pages/**` after a successful deploy.

## 1) Ensure the route exists in the codebase

To serve:

- `https://computemore.com/projects/nico-life-loyalty`

you need a matching page file:

- `app/pages/projects/nico-life-loyalty/index.vue`

This repo already includes that file and it reuses the existing NicoLife page component (so you don’t duplicate content).

If you want to support both spellings/URLs, you can serve both by having both page files:

- `app/pages/projects/nico-life-loyalty/index.vue`
- `app/pages/projects/nico-llfe-loyalty/index.vue`

## 2) Push your repo to GitHub

From your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

(If your default branch is `master`, push that instead.)

## 3) Import the project into Vercel

1. Go to Vercel Dashboard → **Add New…** → **Project**
2. Select your GitHub repo
3. In **Framework Preset**, choose **Nuxt.js** (Nuxt 3)
4. Keep defaults unless you have a reason to change them:
   - **Install Command**: `npm install`
   - **Build Command**: `npm run build`
   - **Output Directory**: leave empty (Nuxt/Vercel handles this)
5. Click **Deploy**

After deploy, Vercel will give you a preview URL like:

- `https://<project-name>.vercel.app`

Test your route there:

- `https://<project-name>.vercel.app/projects/nico-life-loyalty`

## 4) Point `computemore.com` to Vercel (Custom Domain)

1. In Vercel project → **Settings** → **Domains**
2. Add `computemore.com`
3. Vercel will show the exact DNS records to add at your DNS provider.

Typical setup (Vercel will confirm what *you* should use):

- Apex/root domain (`computemore.com`): **A record** → `76.76.21.21`
- `www.computemore.com`: **CNAME** → `cname.vercel-dns.com`

Wait for DNS to propagate, then Vercel will issue SSL automatically.

## 5) Confirm production path works

Once the custom domain is connected, verify:

- `https://computemore.com/projects/nico-life-loyalty/`

## 6) Automatic deploys on every push

By default, Vercel will:

- Create **Preview Deployments** for every PR/branch push
- Create a **Production Deployment** whenever you push to the production branch (usually `main`)

No extra config is required.

## 7) Serving a subdomain like `ecoride.computemore.com` from the same repo

Vercel supports subdomains in two common ways. Pick the one that matches what you mean by “sites”.

### Option A (simplest): same Nuxt app, multiple domains

Use this if `ecoride.computemore.com` should be served by the same Nuxt build (same repo, same app), just with a different hostname.

1. In your Vercel project → **Settings** → **Domains**
2. Add `ecoride.computemore.com`
3. At your DNS provider, add the record Vercel asks for. Typical setup:
   - `ecoride.computemore.com`: **CNAME** → `cname.vercel-dns.com`
4. Wait for verification/SSL to complete

At this point, the same app is served on both:

- `https://computemore.com/...`
- `https://ecoride.computemore.com/...`

If you want the subdomain to *land on a different page* (e.g. `ecoride.computemore.com/` should show your Ecoride content), you have two choices:

- **Redirect at the app level (recommended for Nuxt)**: implement host-based routing in Nuxt middleware (see Option A.1 below).
- **Redirect at the platform level**: use Vercel redirects/rewrites (works best for simple path mapping).

#### Option A.1: Host-based routing (Nuxt) so the subdomain has its own “home”

Implement a global route middleware that checks the hostname and redirects to the desired route.

Example idea (you would add a file like `app/middleware/domain.global.ts`):

- If host is `ecoride.computemore.com` and path is `/`, redirect to `/projects/ecoride/` (or whatever route you want).

This keeps everything in one deploy while giving each subdomain its own landing page.

### Option B (true monorepo): separate Vercel projects from the same repo

Use this if you want `computemore.com` and `ecoride.computemore.com` to be truly separate apps/builds (different dependencies, different Nuxt apps, different env vars, independent deployments).

1. Organize your repo with separate app roots, for example:
   - `apps/main/` (Nuxt app for `computemore.com`)
   - `apps/ecoride/` (Nuxt app for `ecoride.computemore.com`)
2. In Vercel, create **two projects**, both connected to the same GitHub repo
3. For each Vercel project, set **Root Directory** to the correct app folder (Project → Settings → General → Root Directory)
4. Assign domains:
   - Project “main” → `computemore.com`
   - Project “ecoride” → `ecoride.computemore.com`

With this setup, a single git push can deploy both projects (Vercel builds each project that’s connected to the repo).

## Common gotchas

- **404 after deploy**: the page file path must exactly match the URL path. For example,
  `app/pages/projects/nico-life-loyalty/index.vue` → `/projects/nico-life-loyalty/`.
- **Case sensitivity**: URLs are case-sensitive; keep everything lowercase.
- **Contact form / email config**: the `/api/contact` route uses SMTP (via Nodemailer). Configure these as Vercel Environment Variables (Project → Settings → Environment Variables). The site can still deploy without them, but the contact form will return `503 Email service is not configured` until you set them.
   - `SMTP_HOST` (e.g. `smtp.zoho.com`)
   - `SMTP_PORT` (usually `587` for STARTTLS, or `465` for TLS)
   - `SMTP_SECURE` (`true` for port `465`, `false` for `587`)
   - `SMTP_USER` (SMTP username)
   - `SMTP_PASS` (SMTP password / app password)
   - `SMTP_FROM` (the sender address, e.g. `ComputeMore Website <no-reply@computemore.com>`)
   - `CONTACT_TO` (destination inbox, defaults to `tech@computemore.com`)

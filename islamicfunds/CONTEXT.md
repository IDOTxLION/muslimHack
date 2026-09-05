# Amal Fund — Project Context

Halal equity crowdfunding platform connecting investors with verified Muslim-owned SMEs.
Business model: pay-to-post listings + transaction fees. We provide background checks +
(optional) financial analysis. Equity-based only — no interest/riba.

## Stack
- **Next.js 16.3.4** (App Router, Turbopack) + **React 19** + **TypeScript** + **Tailwind 4**
- **Prisma 6.19.3** ORM → **SQLite** locally (schema is Postgres-compatible for prod)
- **jose** (JWT session cookies) + **bcryptjs** (password hashing) + **zod** (validation)
- Full-stack Next.js — no separate backend server.

> ⚠️ This is a bleeding-edge Next.js 16. Middleware is renamed to **Proxy** (`src/proxy.ts`).
> Read `node_modules/next/dist/docs/` before using framework APIs. Prisma was pinned to
> stable 6.19.3 (install auto-resolved to an unusable Prisma 8-rc — do not upgrade).

## Auth model
Single login flow, three roles on one `User` table: `investor | business | admin`.
- Admin accounts are seed-only (never self-serve signup).
- Session = signed HttpOnly JWT cookie (`src/lib/session.ts`), 7-day expiry.
- **Security is enforced server-side in the DAL** (`src/lib/dal.ts`), not the UI.
- Sensitive financial data is gated in DTOs (`src/lib/dto.ts`): only the owning
  business user + admins can read `FinancialProfile`; investors never see it.

## Key files
- `prisma/schema.prisma` — models: User, Business, FinancialProfile, Investment
- `prisma/seed.mjs` — demo data (`npm run db:seed`)
- `src/lib/db.ts` — Prisma client singleton
- `src/lib/definitions.ts` — roles, statuses, zod schemas, SessionPayload
- `src/lib/session.ts` — encrypt/decrypt/create/deleteSession
- `src/lib/password.ts` — hash/verify
- `src/lib/dal.ts` — verifySession, requireSession, requireRole, getCurrentUser, dashboardPathForRole
- `src/lib/dto.ts` — getPublicBusinesses (no financials), getBusinessWithFinancials (gated)
- `src/app/actions/auth.ts` — signup / login / logout Server Actions
- `src/proxy.ts` — optimistic route protection (cookie-only, no DB)
- `src/app/login`, `src/app/signup` — auth pages (+ `src/app/ui/*` shared form components)
- `src/app/dashboard/investor`, `src/app/dashboard/business`, `src/app/admin` — role dashboards
- `src/app/api/me`, `src/app/api/businesses`, `src/app/api/investments` — Route Handlers

## Business verification lifecycle
`pending → verified → live → funded` (or `rejected`). Set by admins.
Only `verified`/`live` businesses appear in public listings and accept investments.

## Data model (summary)
- **User**: id, email (unique), passwordHash, name, role, timestamps
- **Business**: ownerId→User, name, tagline, description, location, category, imageUrl,
  fundingTarget (int), equityOffered (float %), deadline, status, timestamps
- **FinancialProfile** (1:1 Business, SENSITIVE): annualRevenue, netProfit, monthlyBurn,
  outstandingDebt, notes
- **Investment**: investorId→User, businessId→Business, amount (int), equityPct (float)
- `raised` / `investorCount` / `percentFunded` are computed from Investments (not stored).

## Commands
```
npm run dev            # start dev server
npm run build          # production build
npm run db:seed        # seed demo data
npm run db:reset       # reset DB + re-run migrations (then re-seed)
npx prisma migrate dev --name <name>   # new migration after schema change
```

## Seeded logins (password: `Password123`)
- admin    → admin@amalfund.test
- business → baraka@amalfund.test, nour@amalfund.test
- investor → investor@amalfund.test

## Env (`.env`, gitignored — see `.env.example`)
- `DATABASE_URL="file:./dev.db"`
- `SESSION_SECRET="..."` (generate with `openssl rand -base64 32`; current value is dev-only)

## Status
Backend + auth complete and verified (typecheck, lint, build pass; access-control tested).
Committed on branch **`feat/backend-auth`**.

## Suggested next steps (not yet built)
- Create-business form (Server Action) on the business dashboard
- Invest form (Server Action) on the investor dashboard
- Admin verify/reject actions to move businesses through the lifecycle
- Business detail page (`/businesses/[id]`) with public vs. owner/admin views
- Wire remaining landing-page CTAs to `/signup`; production Postgres + strong SESSION_SECRET

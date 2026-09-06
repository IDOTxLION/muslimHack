# Asaan Fund - Project Recap

Asaan Fund is a halal equity crowdfunding platform connecting investors with
Muslim-owned small and medium-sized businesses. The platform is equity-based,
community-driven, and designed without interest or riba.

This is a hackathon demo. Business verification uses submitted documentation
and admin review; it is not an independent legal, financial, or religious
certification service.

## Stack

- Next.js 16.3.4 App Router with React 19, TypeScript, Tailwind CSS 4, and Turbopack
- Prisma 7.10.0 with `@prisma/adapter-better-sqlite3`
- SQLite for zero-setup local development; the schema is intended to remain portable to Postgres
- `jose` for signed JWT sessions, `bcryptjs` for password hashing, and `zod` for validation
- Full-stack Next.js application with no separate backend server
- Next.js 16 route protection uses `src/proxy.ts` rather than middleware
- Prisma configuration lives in `prisma7.config.ts`; generated client output is in `generated/prisma`

## Authentication And Security

- Passwords are bcrypt-hashed and never stored in plaintext.
- Login always performs a password comparison, including when an email does not exist, to reduce account-enumeration timing leaks.
- Sessions are signed JWTs in an HttpOnly, SameSite=Lax cookie with a seven-day expiry.
- Roles are `investor`, `business`, and `admin`.
- `requireSession()` and `requireRole()` enforce protected access server-side through `src/lib/dal.ts`.
- Wrong-role access redirects users to their own dashboard.
- DTOs in `src/lib/dto.ts` control which fields leave the server.
- `getPublicBusinesses()` and `getPublicBusinessById()` expose no private financials and only allow `verified`, `live`, or `funded` businesses.
- `getBusinessWithFinancials()` exposes sensitive financial profiles only to the owning business user or an admin.
- The investment action rechecks business status server-side and prevents a business owner from investing in their own listing.

## Data Model

- **User:** email, hashed password, name, role, and timestamps
- **Business:** owner, name, description, location, category, image, funding target, equity offered, status, and verification notes
- **FinancialProfile:** private annual revenue, net profit, monthly burn, debt, and notes; one-to-one with Business
- **Investment:** investor, business, amount, equity percentage, and timestamp
- `raised`, `investorCount`, and `percentFunded` are calculated live from Investment rows rather than stored values.

Business statuses follow `pending -> verified/live -> funded`, with `rejected` as an alternate outcome.

## Core Features

### Business Verification

- Business signup creates a User; the listing form creates the Business record.
- Listing creation requires a `.txt` verification document, stored as `verificationNotes`.
- New listings always start as `pending`; the server does not trust a client-provided status.
- Admins can expand each verification document and approve or reject pending businesses.
- Investors cannot see or invest in pending or rejected businesses, including through a guessed URL.

### Business Dashboard

- Shows the owner's listings, status, funding statistics, and private financial profile.
- Prevents another listing while an existing listing is pending.
- Allows a new listing after the previous one is approved or rejected.

### Investor Dashboard And Invest Flow

- `/dashboard/investor` lists eligible businesses with progress, raised amount, percentage funded, investor count, and an Invest Now link.
- `/invest/[businessId]` shows the selected business's image, description, location, funding progress, and equity terms.
- `src/app/actions/investment.ts` validates positive integer amounts, checks status, blocks self-investment, creates the Investment row, revalidates affected pages, and redirects with a success message.
- `src/app/ui/invest-form.tsx` is a client form powered by the server action.
- Funding totals and investor counts update from live database rows after an investment.

Real payment processing is intentionally not implemented. The investment action is a simulated demo transaction; a production equity platform would require payment infrastructure, compliance controls, and authorization under Canadian securities rules, including applicable provincial regulators and crowdfunding exemptions.

### Admin Dashboard

- Shows total users, businesses, pending businesses, and total funded metrics.
- Displays a collapsible All Businesses table with owners, status, verification documents, targets, raised totals, and admin-only revenue figures.
- Displays a collapsible All Users table with name, email, role, and join date.
- Uses native `<details>` and `<summary>` elements with CSS-only caret indicators; no client-side state is needed for table toggles.
- Approve and Reject actions remain wired directly into the business table.

### Landing Page

- Public marketing page with hero section, statistics, How It Works tabs, live campaign cards, trust/compliance content, CTA banner, and footer.
- Start Investing smoothly scrolls to the campaigns section.
- Campaign cards use Canadian locations and Canadian-dollar display conventions.
- The page reflects authenticated state by showing Go to Dashboard instead of Sign In/Get Started where appropriate.

## Demo Data

The repeatable seed creates three Canadian businesses:

- Baraka Bakehouse - Toronto, ON - live
- Nour Tech Solutions - Vancouver, BC - verified
- Ummah Threads - Montreal, QC - pending

Each business has matching Canadian-formatted verification notes. The seed clears
existing local users, businesses, financial profiles, and investments first, so
`prisma db seed` is for local demo data only and must not be run against production data.

All seeded accounts use `Password123`:

- Admin: `admin@asaanfund.test`
- Business: `baraka@asaanfund.test`, `nour@asaanfund.test`
- Investor: `investor@asaanfund.test`
- Team investors: `mikael@asaanfund.test`, `ali@asaanfund.test`, `aaleen@asaanfund.test`, `goher@asaanfund.test`

The current seed display name is still `Amal Fund Team` even though the product
and email domain use Asaan Fund. This is a cosmetic branding cleanup to make
before submission.

Seeded businesses start with $0 raised and zero investors so the live investment
flow can be demonstrated from a clean state.

## Demo Runbook

1. Log in as a business user and create a listing with a verification document.
2. Log in as admin and expand All Businesses.
3. Open the verification document and approve the pending listing.
4. Log in as an investor and open the newly eligible listing.
5. Submit a simulated investment.
6. Return to the investor dashboard and show the updated raised amount and investor count.

Keep a recorded fallback for connectivity or server issues. The demo does not
require live typing; seeded accounts make the flow repeatable.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run db:push
npm run db:seed
npm run db:reset
npx prisma generate
```

## Known Limitations And Future Work

- Investment amounts are validated as positive integers, but the demo does not yet prevent overfunding or enforce investor limits.
- No real payment processing, cap-table management, legal agreements, or regulatory onboarding is implemented.
- The AI financial analyst and investor-business matcher was scoped but intentionally parked; it must only use public listing data and never private financials.
- Production deployment should use Postgres, a strong production `SESSION_SECRET`, secure operational secrets, audit logging, and a formal compliance review.
- Replace the seed admin display name `Amal Fund Team` with `Asaan Fund Team` if Asaan Fund is the final brand.

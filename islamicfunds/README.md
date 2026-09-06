# Asaan Fund

Asaan Fund is a halal, equity-based crowdfunding platform for Muslim-owned small and medium businesses. Investors can browse verified businesses, review campaign information, and make demo investments. Business owners can submit listings, while administrators review and verify businesses before they appear as investment opportunities.

This repository contains a local demonstration version built with Next.js, TypeScript, Prisma, and SQLite.

## Quick Start for Judges

### Requirements

- Node.js 20 or newer
- npm

No separate database server is required. The demo uses a local SQLite database.

### 1. Clone and enter the project

From the repository root:

```bash
git clone <repository-url>
cd muslimHack/islamicfunds
```

If the repository has already been cloned, open a terminal in the `islamicfunds` folder.

### 2. Install dependencies

```bash
npm install
```

### 3. Create the environment file

Copy the example file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Open `.env` and set the session secret. This value is suitable for local judging only:

```env
DATABASE_URL="file:./dev.db"
SESSION_SECRET="asaan-fund-local-judge-secret-change-for-production-2026"
```

For a real deployment, generate a different secret and store it securely. Never reuse this demo value in production.

### 4. Create and seed the database

```bash
npx prisma generate
npm run db:push
npm run db:seed
```

The seed command creates the demo users, businesses, financial profiles, and investments. It resets existing local demo data.

### 5. Start the website

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Judge Accounts

All seeded accounts use this password:

```text
Password123
```

| Role | Email |
| --- | --- |
| Admin | `admin@asaanfund.test` |
| Business owner | `baraka@asaanfund.test` |
| Business owner | `nour@asaanfund.test` |
| Investor | `investor@asaanfund.test` |
| Investor | `mikael@asaanfund.test` |
| Investor | `ali@asaanfund.test` |
| Investor | `aaleen@asaanfund.test` |
| Investor | `goher@asaanfund.test` |

## Suggested Demo Flow

1. Open the landing page and review the active campaigns.
2. Sign in as an investor and open a business listing.
3. Submit an investment and view the confirmation receipt.
4. Return to the investor dashboard to see updated portfolio and funding totals.
5. Sign out and sign in as a business owner.
6. Review the business dashboard and submit a new listing for approval.
7. Sign out and sign in as the admin.
8. Open the admin dashboard, review users and businesses, expand verification details, and approve or reject a pending listing.

## Funding Models in the Demo

- **Baraka Bakehouse** demonstrates Murabaha-style funding for a commercial refrigerator. It is a family-run bakery carrying forward a business inherited from the founder's late father.
- **Nour Tech Solutions** demonstrates Musharakah-style equity funding. It offers 8% of the business and is an early-stage, profitable SaaS company preparing to hire its first employees.

## Security Features

- Passwords are hashed with bcrypt and never stored as plain text.
- Sessions use signed, expiring JWTs stored in HTTP-only cookies.
- SameSite cookie protection is enabled, and cookies are marked Secure in production.
- Server-side role checks protect investor, business-owner, and admin workflows.
- Zod validates signup, login, business, and investment input.
- Public business views exclude private financial profiles.
- Financial profiles are restricted to the owning business user and administrators.
- New businesses begin as pending and require admin verification before becoming public campaigns.
- Prisma provides structured database access without string-built SQL queries.

This is a prototype for demonstration. A production financial platform would also require HTTPS, rate limiting, multi-factor authentication, email verification, monitoring, secure payment processing, backups, secret rotation, and independent security testing.

## Useful Commands

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm run build     # Create a production build
npm run db:push   # Apply the Prisma schema to local SQLite
npm run db:seed   # Reset and populate demo data
npm run db:reset  # Force-reset the local database schema
```

## Project Structure

```text
src/app/              Next.js pages, layouts, API routes, and server actions
src/lib/              Authentication, sessions, validation, database access, and DTOs
prisma/schema.prisma  Database models
prisma/seed.ts        Demo users, businesses, and investments
public/               Static assets
```

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma/client.ts";

const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
const db = new PrismaClient({ adapter });

const PASSWORD = "Password123";

async function main() {
  const passwordHash = await bcrypt.hash(PASSWORD, 10);

  // Wipe existing data for a clean, repeatable seed.
  await db.investment.deleteMany();
  await db.financialProfile.deleteMany();
  await db.business.deleteMany();
  await db.user.deleteMany();

  // --- The company (admin) ---
  const admin = await db.user.create({
    data: {
      name: "Amal Fund Team",
      email: "admin@amalfund.test",
      passwordHash,
      role: "admin",
    },
  });

  // --- Business owners ---
  const baraka = await db.user.create({
    data: {
      name: "Baraka Bakehouse",
      email: "baraka@amalfund.test",
      passwordHash,
      role: "business",
    },
  });

  const nour = await db.user.create({
    data: {
      name: "Nour Tech Solutions",
      email: "nour@amalfund.test",
      passwordHash,
      role: "business",
    },
  });

  // --- Investor ---
  const investor = await db.user.create({
    data: {
      name: "Aisha Rahman",
      email: "investor@amalfund.test",
      passwordHash,
      role: "investor",
    },
  });

  // --- Businesses + private financials ---
  const barakaBiz = await db.business.create({
    data: {
      ownerId: baraka.id,
      name: "Baraka Bakehouse",
      tagline: "Artisan halal bakery expanding to a second location.",
      description:
        "An artisan halal bakery in Birmingham expanding to a second location in the city centre.",
      location: "Birmingham, UK",
      category: "Food & Hospitality",
      imageUrl:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&auto=format",
      fundingTarget: 40000,
      equityOffered: 12,
      status: "live",
      financialProfile: {
        create: {
          annualRevenue: 180000,
          netProfit: 32000,
          monthlyBurn: 9000,
          outstandingDebt: 15000,
          notes: "Second-site lease signed pending funding.",
        },
      },
    },
  });

  const nourBiz = await db.business.create({
    data: {
      ownerId: nour.id,
      name: "Nour Tech Solutions",
      tagline: "SaaS helping mosques manage memberships and events.",
      description:
        "SaaS platform helping small mosques manage memberships and community events.",
      location: "London, UK",
      category: "Technology",
      imageUrl:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format",
      fundingTarget: 80000,
      equityOffered: 8,
      status: "verified",
      financialProfile: {
        create: {
          annualRevenue: 95000,
          netProfit: -12000,
          monthlyBurn: 14000,
          outstandingDebt: 0,
          notes: "Pre-profit, strong MRR growth (18% MoM).",
        },
      },
    },
  });

  // A pending business awaiting admin review (no financials yet).
  await db.business.create({
    data: {
      ownerId: nour.id,
      name: "Ummah Threads",
      tagline: "Ethical modest fashion for everyday wardrobes.",
      description:
        "Ethical modest fashion brand bringing premium quality to everyday Muslim wardrobes.",
      location: "Manchester, UK",
      category: "Fashion & Retail",
      fundingTarget: 35000,
      equityOffered: 15,
      status: "pending",
    },
  });

  // --- Investments ---
  await db.investment.createMany({
    data: [
      { investorId: investor.id, businessId: barakaBiz.id, amount: 5000, equityPct: 1.5 },
      { investorId: investor.id, businessId: nourBiz.id, amount: 8000, equityPct: 0.8 },
    ],
  });

  console.log("Seed complete.");
  console.log("Login with these accounts (password: %s):", PASSWORD);
  console.log("  admin    -> admin@amalfund.test");
  console.log("  business -> baraka@amalfund.test / nour@amalfund.test");
  console.log("  investor -> investor@amalfund.test");
  void admin;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });

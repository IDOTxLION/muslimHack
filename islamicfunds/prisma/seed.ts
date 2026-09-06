import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma/client.ts";

const adapter = new PrismaBetterSqlite3({ url: "file:./prisma/dev.db" });
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
      email: "admin@asaanfund.test",
      passwordHash,
      role: "admin",
    },
  });

  // --- Business owners ---
  const baraka = await db.user.create({
    data: {
      name: "Baraka Bakehouse",
      email: "baraka@asaanfund.test",
      passwordHash,
      role: "business",
    },
  });

  const nour = await db.user.create({
    data: {
      name: "Nour Tech Solutions",
      email: "nour@asaanfund.test",
      passwordHash,
      role: "business",
    },
  });

  // --- Investor ---
  await db.user.create({
    data: {
      name: "Aisha Rahman",
      email: "investor@asaanfund.test",
      passwordHash,
      role: "investor",
    },
  });

  // --- Team investor accounts ---
  const mikael = await db.user.create({
    data: {
      name: "Mikael Hasan Kizilbash",
      email: "mikael@asaanfund.test",
      passwordHash,
      role: "investor",
    },
  });

  const ali = await db.user.create({
    data: {
      name: "Ali Haider",
      email: "ali@asaanfund.test",
      passwordHash,
      role: "investor",
    },
  });

  const aaleen = await db.user.create({
    data: {
      name: "Aaleen Abbas Syed",
      email: "aaleen@asaanfund.test",
      passwordHash,
      role: "investor",
    },
  });

  const goher = await db.user.create({
    data: {
      name: "Goher Ali Syed",
      email: "goher@asaanfund.test",
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
        "Baraka Bakehouse is a family-run halal bakery in Toronto, lovingly carrying forward a store inherited from the founder's late father. His recipes, values, and dedication to serving the community continue to inspire every loaf and pastry. The business is seeking MURABAHA FUNDING to purchase a commercial refrigerator, which will increase storage capacity, reduce food waste, and help the bakery prepare for its second location.",
      location: "Toronto, ON",
      category: "Food & Hospitality",
      imageUrl:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&auto=format",
      fundingTarget: 40000,
      equityOffered: 12,
      status: "live",
      verificationNotes:
        "Business Number: 738291645 RC0001\nRegistered Address: 245 Carlaw Avenue, Toronto, ON, M4M 2S1\nOwner: Amina Farouk\nHalal Certification: Certified by the Halal Monitoring Authority (Ref: HMA-2022-3317)\nTrading since: January 2022\nSubmitted for review: approved by admin.",
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
        "Nour Tech Solutions is an early-stage SaaS business helping small mosques manage memberships and community events. The company is already profitable, has growing recurring revenue, and is ready to hire its first employees to support customers and accelerate product development. It is seeking MUSHARAKAH funding in exchange for 8% of the business, allowing investors to share in the company's future growth and risk.",
      location: "Vancouver, BC",
      category: "Technology",
      imageUrl:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&auto=format",
      fundingTarget: 80000,
      equityOffered: 8,
      status: "verified",
      verificationNotes:
        "Business Number: 592817364 RC0001\nRegistered Address: 1055 West Georgia Street, Vancouver, BC, V6E 3P3\nOwner: Nour Khaled\nGST/HST Number: 592817364 RT0001\nTrading since: August 2023\nSubmitted for review: approved by admin.",
      financialProfile: {
        create: {
          annualRevenue: 95000,
          netProfit: 12000,
          monthlyBurn: 14000,
          outstandingDebt: 0,
          notes: "Early-stage and profitable, with strong MRR growth (18% MoM); funding will support the first hires.",
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
      location: "Montreal, QC",
      category: "Fashion & Retail",
      imageUrl:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop&auto=format",
      fundingTarget: 35000,
      equityOffered: 15,
      status: "pending",
      verificationNotes:
        "Business Number: 461738295 RC0001\nRegistered Address: 4200 Rue Saint-Denis, Montreal, QC, H2J 2K9\nOwner: Layla Ahmadi\nTrading since: May 2024\nSubmitted for review: pending admin approval.",
    },
  });

  // --- Team demo investments ---
  await db.investment.createMany({
    data: [
      { investorId: mikael.id, businessId: barakaBiz.id, amount: 1500, equityPct: 0.45 },
      { investorId: mikael.id, businessId: nourBiz.id, amount: 2500, equityPct: 0.25 },
      { investorId: ali.id, businessId: barakaBiz.id, amount: 2000, equityPct: 0.6 },
      { investorId: ali.id, businessId: nourBiz.id, amount: 3000, equityPct: 0.3 },
      { investorId: aaleen.id, businessId: barakaBiz.id, amount: 2500, equityPct: 0.75 },
      { investorId: aaleen.id, businessId: nourBiz.id, amount: 3500, equityPct: 0.35 },
      { investorId: goher.id, businessId: barakaBiz.id, amount: 3000, equityPct: 0.9 },
      { investorId: goher.id, businessId: nourBiz.id, amount: 4000, equityPct: 0.4 },
    ],
  });

  console.log("Seed complete.");
  console.log("Login with these accounts (password: %s):", PASSWORD);
  console.log("  admin    -> admin@asaanfund.test");
  console.log("  business -> baraka@asaanfund.test / nour@asaanfund.test");
  console.log("  investor -> investor@asaanfund.test");
  console.log("  investor -> mikael@asaanfund.test (Mikael Hasan Kizilbash)");
  console.log("  investor -> ali@asaanfund.test (Ali Haider)");
  console.log("  investor -> aaleen@asaanfund.test (Aaleen Abbas Syed)");
  console.log("  investor -> goher@asaanfund.test (Goher Ali Syed)");
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

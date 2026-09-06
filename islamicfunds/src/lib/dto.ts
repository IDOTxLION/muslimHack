import "server-only";
import { db } from "./db";
import { verifySession } from "./dal";

// Data Transfer Objects: shape what leaves the server so sensitive financial
// data is only ever exposed to authorized viewers.

// Public-safe view of a business for listings/cards. No financials.
export async function getPublicBusinesses() {
  const businesses = await db.business.findMany({
    where: { status: { in: ["verified", "live", "funded"] } },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      tagline: true,
      location: true,
      category: true,
      imageUrl: true,
      fundingTarget: true,
      equityOffered: true,
      deadline: true,
      status: true,
      investments: { select: { amount: true, investorId: true } },
    },
  });

  return businesses.map((b) => {
    const raised = b.investments.reduce((sum, i) => sum + i.amount, 0);
    const uniqueInvestors = new Set(b.investments.map((i) => i.investorId)).size;
    const { investments: _investments, ...rest } = b;
    void _investments;
    return {
      ...rest,
      raised,
      investorCount: uniqueInvestors,
      percentFunded: b.fundingTarget
        ? Math.min(Math.round((raised / b.fundingTarget) * 100), 100)
        : 0,
    };
  });
}

// Public-safe single-business view for the invest page. No financials.
export async function getPublicBusinessById(id: string) {
  const business = await db.business.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      tagline: true,
      description: true,
      location: true,
      category: true,
      imageUrl: true,
      fundingTarget: true,
      equityOffered: true,
      status: true,
      investments: { select: { amount: true, investorId: true } },
    },
  });

  if (!business || !["verified", "live", "funded"].includes(business.status)) {
    return null;
  }

  const raised = business.investments.reduce((sum, i) => sum + i.amount, 0);
  const uniqueInvestors = new Set(
    business.investments.map((i) => i.investorId),
  ).size;
  const { investments: _investments, ...rest } = business;
  void _investments;

  return {
    ...rest,
    raised,
    investorCount: uniqueInvestors,
    percentFunded: business.fundingTarget
      ? Math.min(Math.round((raised / business.fundingTarget) * 100), 100)
      : 0,
  };
}

// Full business view INCLUDING sensitive financials. Only returned to the
// owning business user or an admin. Returns null if the viewer is not allowed.
export async function getBusinessWithFinancials(businessId: string) {
  const session = await verifySession();
  if (!session) return null;

  const business = await db.business.findUnique({
    where: { id: businessId },
    include: { financialProfile: true },
  });
  if (!business) return null;

  const isOwner = business.ownerId === session.userId;
  const isAdmin = session.role === "admin";
  if (!isOwner && !isAdmin) {
    // Not authorized to see financials — strip them out.
    const { financialProfile: _f, ...safe } = business;
    void _f;
    return { ...safe, financialProfile: null, canViewFinancials: false };
  }

  return { ...business, canViewFinancials: true };
}

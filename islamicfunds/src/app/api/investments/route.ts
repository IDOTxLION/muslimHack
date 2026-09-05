import * as z from "zod";
import type { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { verifySession } from "@/lib/dal";

const CreateInvestmentSchema = z.object({
  businessId: z.string().min(1),
  amount: z.number().int().positive(),
  equityPct: z.number().positive().max(100),
});

// POST /api/investments — record an investment. Investor role only.
export async function POST(req: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.role !== "investor") {
    return Response.json(
      { error: "Only investor accounts can invest." },
      { status: 403 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = CreateInvestmentSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Validation failed", details: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  // Only allow investing in businesses that are actually open for funding.
  const business = await db.business.findUnique({
    where: { id: parsed.data.businessId },
    select: { id: true, status: true },
  });
  if (!business || !["verified", "live"].includes(business.status)) {
    return Response.json(
      { error: "This business is not open for investment." },
      { status: 409 },
    );
  }

  const investment = await db.investment.create({
    data: {
      investorId: session.userId,
      businessId: parsed.data.businessId,
      amount: parsed.data.amount,
      equityPct: parsed.data.equityPct,
    },
    select: { id: true, amount: true, equityPct: true, createdAt: true },
  });

  return Response.json({ investment }, { status: 201 });
}

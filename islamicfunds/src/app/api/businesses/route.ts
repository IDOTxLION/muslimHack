import * as z from "zod";
import type { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { verifySession } from "@/lib/dal";
import { getPublicBusinesses } from "@/lib/dto";

// GET /api/businesses — public list of verified campaigns (no financials).
export async function GET() {
  const businesses = await getPublicBusinesses();
  return Response.json({ businesses });
}

const CreateBusinessSchema = z.object({
  name: z.string().min(2),
  tagline: z.string().min(2).max(160),
  description: z.string().min(10),
  location: z.string().min(2),
  category: z.string().min(2),
  imageUrl: z.url().optional(),
  fundingTarget: z.number().int().positive(),
  equityOffered: z.number().positive().max(100),
});

// POST /api/businesses — create a new listing. Business role only.
export async function POST(req: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (session.role !== "business") {
    return Response.json(
      { error: "Only business accounts can create listings." },
      { status: 403 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = CreateBusinessSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Validation failed", details: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  const business = await db.business.create({
    data: {
      ...parsed.data,
      ownerId: session.userId,
      status: "pending", // must be verified by an admin before going live
    },
    select: { id: true, name: true, status: true },
  });

  return Response.json({ business }, { status: 201 });
}

"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import * as z from "zod";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/dal";

const InvestSchema = z.object({
  businessId: z.string().min(1),
  amount: z.number().positive().int(),
});

export type InvestFormState = { error?: string } | undefined;

export async function invest(
  _state: InvestFormState,
  formData: FormData,
): Promise<InvestFormState> {
  const session = await requireRole("investor");

  const parsed = InvestSchema.safeParse({
    businessId: formData.get("businessId"),
    amount: Number(formData.get("amount")),
  });

  if (!parsed.success) {
    return { error: "Please enter a valid investment amount." };
  }

  const { businessId, amount } = parsed.data;

  const business = await db.business.findUnique({
    where: { id: businessId },
    select: { ownerId: true, fundingTarget: true, equityOffered: true, status: true },
  });

  if (!business || !["verified", "live", "funded"].includes(business.status)) {
    return { error: "This business is not currently open for investment." };
  }

  if (business.ownerId === session.userId) {
    return { error: "You can't invest in your own business." };
  }

  const equityPct =
    Math.round(((amount / business.fundingTarget) * business.equityOffered) * 100) / 100;

  await db.investment.create({
    data: { investorId: session.userId, businessId, amount, equityPct },
  });

  revalidatePath("/dashboard/investor");
  revalidatePath(`/invest/${businessId}`);
  redirect(`/invest/${businessId}?success=1`);
}
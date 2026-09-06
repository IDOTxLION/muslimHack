"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { requireRole } from "@/lib/dal";

export async function verifyBusiness(businessId: string): Promise<void> {
  await requireRole("admin");
  await db.business.update({
    where: { id: businessId },
    data: { status: "verified" },
  });
  revalidatePath("/admin");
}

export async function rejectBusiness(businessId: string): Promise<void> {
  await requireRole("admin");
  await db.business.update({
    where: { id: businessId },
    data: { status: "rejected" },
  });
  revalidatePath("/admin");
}

"use server";

import * as z from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { hashPassword, verifyPassword } from "@/lib/password";
import { createSession, deleteSession } from "@/lib/session";
import { dashboardPathForRole } from "@/lib/dal";
import {
  LoginFormSchema,
  SignupFormSchema,
  type FormState,
  type Role,
} from "@/lib/definitions";

export async function signup(
  _state: FormState,
  formData: FormData,
): Promise<FormState> {
  const validated = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  });

  if (!validated.success) {
    return { errors: z.flattenError(validated.error).fieldErrors };
  }

  const { name, email, password, role } = validated.data;

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return { message: "An account with this email already exists." };
  }

  const passwordHash = await hashPassword(password);

  const user = await db.user.create({
    data: { name, email, passwordHash, role },
    select: { id: true, role: true },
  });

  await createSession(user.id, user.role as Role);
  redirect(dashboardPathForRole(user.role as Role));
}

export async function login(
  _state: FormState,
  formData: FormData,
): Promise<FormState> {
  const validated = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return { errors: z.flattenError(validated.error).fieldErrors };
  }

  const { email, password } = validated.data;

  const user = await db.user.findUnique({ where: { email } });
  // Always run a hash comparison to avoid leaking which emails exist via timing.
  const dummyHash =
    "$2a$10$CwTycUXWue0Thq9StjUM0uJ8DiZ8p4uL9wYbLeF5o8m2xkP7bXvS";
  const ok = await verifyPassword(password, user?.passwordHash ?? dummyHash);

  if (!user || !ok) {
    return { message: "Invalid email or password." };
  }

  await createSession(user.id, user.role as Role);
  redirect(dashboardPathForRole(user.role as Role));
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/login");
}

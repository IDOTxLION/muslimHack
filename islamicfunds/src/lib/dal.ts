import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { db } from "./db";
import { decrypt, getSessionCookie } from "./session";
import type { Role } from "./definitions";

// Reads and verifies the session from the cookie. Memoized per-request with
// React `cache` so multiple calls in one render don't re-decrypt.
export const verifySession = cache(async () => {
  const cookie = await getSessionCookie();
  const session = await decrypt(cookie);

  if (!session?.userId) {
    return null;
  }

  return { userId: session.userId, role: session.role as Role };
});

// Like verifySession but redirects unauthenticated users to /login.
export async function requireSession() {
  const session = await verifySession();
  if (!session) redirect("/login");
  return session;
}

// Enforces that the current user has one of the allowed roles.
// Redirects to login if unauthenticated, or to their own dashboard if the
// role doesn't match (prevents cross-role access).
export async function requireRole(...allowed: Role[]) {
  const session = await requireSession();
  if (!allowed.includes(session.role)) {
    redirect(dashboardPathForRole(session.role));
  }
  return session;
}

export function dashboardPathForRole(role: Role): string {
  switch (role) {
    case "admin":
      return "/admin";
    case "business":
      return "/dashboard/business";
    case "investor":
    default:
      return "/dashboard/investor";
  }
}

// Fetches the current user (safe columns only). Memoized per-request.
export const getCurrentUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  return db.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
});

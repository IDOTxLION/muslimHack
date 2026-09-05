import { getCurrentUser } from "@/lib/dal";

// GET /api/me — returns the authenticated user (safe fields only).
export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  return Response.json({ user });
}

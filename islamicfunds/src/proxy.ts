import { NextResponse, type NextRequest } from "next/server";
import { decrypt } from "@/lib/session";

// Proxy (formerly "middleware" in older Next.js) runs before routes render.
// IMPORTANT: this only performs OPTIMISTIC auth checks by reading the signed
// cookie — never hit the database here. Real authorization lives in the Data
// Access Layer (src/lib/dal.ts), close to the data.

const AUTH_PAGES = ["/login", "/signup"];

// Any route beginning with one of these prefixes requires a session.
const PROTECTED_PREFIXES = ["/dashboard", "/admin"];

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtected = PROTECTED_PREFIXES.some(
    (p) => path === p || path.startsWith(p + "/"),
  );
  const isAuthPage = AUTH_PAGES.includes(path);

  if (!isProtected && !isAuthPage) {
    return NextResponse.next();
  }

  const token = req.cookies.get("session")?.value;
  const session = await decrypt(token);

  // Not logged in and trying to reach a protected route -> go to login.
  if (isProtected && !session?.userId) {
    const url = new URL("/login", req.nextUrl);
    url.searchParams.set("redirect", path);
    return NextResponse.redirect(url);
  }

  // Already logged in but on an auth page -> send to the right dashboard.
  if (isAuthPage && session?.userId) {
    const dest =
      session.role === "admin"
        ? "/admin"
        : session.role === "business"
          ? "/dashboard/business"
          : "/dashboard/investor";
    return NextResponse.redirect(new URL(dest, req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals, API routes (they self-guard),
  // and static assets.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg$).*)"],
};

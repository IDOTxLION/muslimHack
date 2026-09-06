import { verifySession, getCurrentUser, dashboardPathForRole } from "@/lib/dal";
import { LandingPage, type LandingAuth } from "@/app/ui/landing-page";

// Server component: reads the session so the landing page can reflect the
// logged-in state (a "Go to Dashboard" link) instead of always showing the
// signed-out nav. Visiting "/" no longer appears to log the user out.
export default async function Home() {
  const session = await verifySession();

  let auth: LandingAuth = null;
  if (session) {
    const user = await getCurrentUser();
    auth = {
      name: user?.name ?? "there",
      dashboardPath: dashboardPathForRole(session.role),
    };
  }

  return <LandingPage auth={auth} />;
}

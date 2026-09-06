import { requireRole, getCurrentUser } from "@/lib/dal";
import { db } from "@/lib/db";
import { DashboardShell } from "@/app/ui/dashboard-header";
import { BusinessListingsSection } from "@/app/ui/business-listings-section";

export default async function BusinessDashboard() {
  const session = await requireRole("business");
  const user = await getCurrentUser();

  // A business user sees only their own businesses + financials.
  const businesses = await db.business.findMany({
    where: { ownerId: session.userId },
    orderBy: { createdAt: "desc" },
    include: { financialProfile: true, investments: { select: { amount: true } } },
  });

  return (
    <DashboardShell name={user?.name ?? "Business"} role="business">
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
        Your campaigns
      </h1>
      <p style={{ color: "var(--muted-foreground)", marginTop: 6, marginBottom: 28 }}>
        Manage your listings and financial profile. Our team reviews each
        submission before it goes live.
      </p>

      <BusinessListingsSection businesses={businesses} />
    </DashboardShell>
  );
}

import { requireRole, getCurrentUser } from "@/lib/dal";
import { db } from "@/lib/db";
import { DashboardShell } from "@/app/ui/dashboard-header";

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  pending: { bg: "#FBF0DA", color: "#8A6D1F" },
  verified: { bg: "#DDE8E2", color: "#123E3A" },
  live: { bg: "#123E3A", color: "#F8F4EC" },
  funded: { bg: "#D86F52", color: "#FFFFFF" },
  rejected: { bg: "#FBE9E6", color: "#B23B2E" },
};

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
      <p style={{ color: "#5C6B64", marginTop: 6, marginBottom: 28 }}>
        Manage your listings and financial profile. Our team reviews each
        submission before it goes live.
      </p>

      {businesses.length === 0 ? (
        <div
          style={{
            border: "1px dashed #D4CEBE",
            borderRadius: 12,
            padding: 40,
            textAlign: "center",
            color: "#5C6B64",
          }}
        >
          You haven&apos;t listed a business yet.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {businesses.map((b) => {
            const raised = b.investments.reduce((s, i) => s + i.amount, 0);
            const badge = STATUS_COLORS[b.status] ?? STATUS_COLORS.pending;
            return (
              <div
                key={b.id}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #D4CEBE",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 style={{ fontWeight: 700, fontSize: 18 }}>{b.name}</h3>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 999,
                      backgroundColor: badge.bg,
                      color: badge.color,
                    }}
                  >
                    {b.status}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#5C6B64", marginTop: 6 }}>
                  {b.tagline}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: 16 }}>
                  <Stat label="Target" value={`£${b.fundingTarget.toLocaleString()}`} />
                  <Stat label="Raised" value={`£${raised.toLocaleString()}`} />
                  <Stat label="Equity offered" value={`${b.equityOffered}%`} />
                  <Stat label="Investors" value={`${b.investments.length}`} />
                </div>

                {/* Sensitive financials — visible only to the owner (here) and admins. */}
                <div
                  style={{
                    marginTop: 16,
                    paddingTop: 16,
                    borderTop: "1px solid #EEE9DF",
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#5C6B64", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Financial profile (private)
                  </span>
                  {b.financialProfile ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: 10 }}>
                      <Stat label="Annual revenue" value={money(b.financialProfile.annualRevenue)} />
                      <Stat label="Net profit" value={money(b.financialProfile.netProfit)} />
                      <Stat label="Monthly burn" value={money(b.financialProfile.monthlyBurn)} />
                      <Stat label="Outstanding debt" value={money(b.financialProfile.outstandingDebt)} />
                    </div>
                  ) : (
                    <p style={{ fontSize: 13, color: "#5C6B64", marginTop: 8 }}>
                      No financial profile added yet.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </DashboardShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 16, fontWeight: 700 }}>{value}</div>
      <div style={{ fontSize: 12, color: "#5C6B64" }}>{label}</div>
    </div>
  );
}

function money(n: number | null): string {
  return n == null ? "—" : `£${n.toLocaleString()}`;
}

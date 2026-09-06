import { requireRole, getCurrentUser } from "@/lib/dal";
import { db } from "@/lib/db";
import { DashboardShell } from "@/app/ui/dashboard-header";
import { rejectBusiness, verifyBusiness } from "@/app/actions/business";

export default async function AdminDashboard() {
  // Only the company (admin role) can reach this page.
  await requireRole("admin");
  const user = await getCurrentUser();

  const [userCount, businesses, investmentAgg] = await Promise.all([
    db.user.count(),
    db.business.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        owner: { select: { name: true, email: true } },
        financialProfile: true,
        investments: { select: { amount: true } },
      },
    }),
    db.investment.aggregate({ _sum: { amount: true } }),
  ]);

  const totalFunded = investmentAgg._sum.amount ?? 0;
  const pending = businesses.filter((b) => b.status === "pending").length;

  return (
    <DashboardShell name={user?.name ?? "Admin"} role="admin">
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
        Company overview
      </h1>
      <p style={{ color: "var(--muted-foreground)", marginTop: 6, marginBottom: 24 }}>
        Verify businesses, review financials, and monitor platform activity.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginBottom: 32 }}>
        <MetricCard label="Total users" value={`${userCount}`} />
        <MetricCard label="Businesses" value={`${businesses.length}`} />
        <MetricCard label="Awaiting review" value={`${pending}`} />
        <MetricCard label="Total funded" value={`£${totalFunded.toLocaleString()}`} />
      </div>

      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
        All businesses
      </h2>
      <div
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ backgroundColor: "var(--muted)", textAlign: "left" }}>
              <Th>Business</Th>
              <Th>Owner</Th>
              <Th>Status</Th>
              <Th>Verification</Th>
              <Th>Target</Th>
              <Th>Raised</Th>
              <Th>Revenue*</Th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b) => {
              const raised = b.investments.reduce((s, i) => s + i.amount, 0);
              return (
                <tr key={b.id} style={{ borderTop: "1px solid var(--muted)" }}>
                  <Td>
                    <strong>{b.name}</strong>
                    <div style={{ color: "var(--muted-foreground)" }}>{b.category}</div>
                  </Td>
                  <Td>
                    {b.owner.name}
                    <div style={{ color: "var(--muted-foreground)" }}>{b.owner.email}</div>
                  </Td>
                  <Td>{b.status}</Td>
                  <Td>
                    {b.verificationNotes ? (
                      <details>
                        <summary style={{ cursor: "pointer", color: "var(--accent)", fontWeight: 600 }}>
                          View document
                        </summary>
                        <p style={{ marginTop: 6, whiteSpace: "pre-wrap", maxWidth: 260 }}>
                          {b.verificationNotes}
                        </p>
                      </details>
                    ) : (
                      "—"
                    )}
                    {b.status === "pending" && (
                      <div className="flex gap-2" style={{ marginTop: 8 }}>
                        <form action={verifyBusiness.bind(null, b.id)}>
                          <button type="submit" style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", border: "1px solid var(--accent)", borderRadius: 6, padding: "4px 10px" }}>
                            Approve
                          </button>
                        </form>
                        <form action={rejectBusiness.bind(null, b.id)}>
                          <button type="submit" style={{ fontSize: 12, fontWeight: 700, color: "var(--destructive, #B23B2E)", border: "1px solid var(--destructive, #B23B2E)", borderRadius: 6, padding: "4px 10px" }}>
                            Reject
                          </button>
                        </form>
                      </div>
                    )}
                  </Td>
                  <Td>£{b.fundingTarget.toLocaleString()}</Td>
                  <Td>£{raised.toLocaleString()}</Td>
                  <Td>
                    {b.financialProfile?.annualRevenue != null
                      ? `£${b.financialProfile.annualRevenue.toLocaleString()}`
                      : "—"}
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 11, color: "var(--muted-foreground)", marginTop: 10 }}>
        * Admins can view private financial data as part of the verification
        process; investors never see these figures.
      </p>
    </DashboardShell>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 20,
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 800, color: "var(--accent)" }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>{label}</div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th style={{ padding: "10px 14px", fontWeight: 700, color: "var(--muted-foreground)" }}>
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return <td style={{ padding: "10px 14px", verticalAlign: "top" }}>{children}</td>;
}

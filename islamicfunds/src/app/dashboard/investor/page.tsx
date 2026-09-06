import { requireRole, getCurrentUser } from "@/lib/dal";
import { getPublicBusinesses } from "@/lib/dto";
import { DashboardShell } from "@/app/ui/dashboard-header";

export default async function InvestorDashboard() {
  // Secure, DB-backed authorization — investors only.
  await requireRole("investor");
  const user = await getCurrentUser();
  const businesses = await getPublicBusinesses();

  return (
    <DashboardShell name={user?.name ?? "Investor"} role="investor">
      <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
        Verified businesses
      </h1>
      <p style={{ color: "var(--muted-foreground)", marginTop: 6, marginBottom: 28 }}>
        Every listing has passed background checks and financial due diligence.
      </p>

      {businesses.length === 0 ? (
        <EmptyState text="No verified campaigns are live yet. Check back soon." />
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {businesses.map((b) => (
            <div
              key={b.id}
              style={{
                backgroundColor: "white",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 20,
              }}
            >
                <span style={{ fontSize: 11, color: "var(--primary)", fontWeight: 600 }}>
                {b.category}
              </span>
              <h3 style={{ fontWeight: 700, fontSize: 16, marginTop: 4 }}>{b.name}</h3>
              <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 6, minHeight: 40 }}>
                {b.tagline}
              </p>

              <div
                className="w-full h-1.5 rounded-full overflow-hidden"
                style={{ backgroundColor: "var(--muted)", marginTop: 12 }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${b.percentFunded}%`, backgroundColor: "var(--primary)" }}
                />
              </div>
              <div
                className="flex justify-between"
                style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 8 }}
              >
                <span>£{b.raised.toLocaleString()} raised</span>
                <span>{b.percentFunded}% of £{b.fundingTarget.toLocaleString()}</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--muted-foreground)", marginTop: 6 }}>
                {b.investorCount} investors · {b.equityOffered}% equity
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardShell>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div
      style={{
        border: "1px dashed var(--border)",
        borderRadius: 12,
        padding: 40,
        textAlign: "center",
        color: "var(--muted-foreground)",
      }}
    >
      {text}
    </div>
  );
}

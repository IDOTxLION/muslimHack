"use client";

import { useState } from "react";
import { CreateBusinessForm } from "./create-business-form";

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  pending: { bg: "color-mix(in srgb, var(--primary) 20%, var(--background))", color: "var(--ring)" },
  verified: { bg: "var(--secondary)", color: "var(--accent)" },
  live: { bg: "var(--accent)", color: "var(--accent-foreground)" },
  funded: { bg: "var(--primary)", color: "var(--primary-foreground)" },
  rejected: { bg: "color-mix(in srgb, var(--primary) 15%, var(--background))", color: "var(--destructive)" },
};

type BusinessRow = {
  id: string;
  name: string;
  tagline: string;
  status: string;
  fundingTarget: number;
  equityOffered: number;
  investments: { amount: number }[];
  financialProfile: {
    annualRevenue: number | null;
    netProfit: number | null;
    monthlyBurn: number | null;
    outstandingDebt: number | null;
  } | null;
};

export function BusinessListingsSection({
  businesses,
}: {
  businesses: BusinessRow[];
}) {
  const [showForm, setShowForm] = useState(businesses.length === 0);
  const hasPending = businesses.some((business) => business.status === "pending");

  return (
    <div className="flex flex-col gap-4">
      {businesses.map((business) => {
        const raised = business.investments.reduce((sum, investment) => sum + investment.amount, 0);
        const badge = STATUS_COLORS[business.status] ?? STATUS_COLORS.pending;

        return (
          <div
            key={business.id}
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <div className="flex items-center justify-between">
              <h3 style={{ fontWeight: 700, fontSize: 18 }}>{business.name}</h3>
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
                {business.status}
              </span>
            </div>
            <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 6 }}>
              {business.tagline}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: 16 }}>
              <Stat label="Target" value={`$${business.fundingTarget.toLocaleString()}`} />
              <Stat label="Raised" value={`$${raised.toLocaleString()}`} />
              <Stat label="Equity offered" value={`${business.equityOffered}%`} />
              <Stat label="Investors" value={`${business.investments.length}`} />
            </div>

            <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--muted)" }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Financial profile (private)
              </span>
              {business.financialProfile ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: 10 }}>
                  <Stat label="Annual revenue" value={money(business.financialProfile.annualRevenue)} />
                  <Stat label="Net profit" value={money(business.financialProfile.netProfit)} />
                  <Stat label="Monthly burn" value={money(business.financialProfile.monthlyBurn)} />
                  <Stat label="Outstanding debt" value={money(business.financialProfile.outstandingDebt)} />
                </div>
              ) : (
                <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 8 }}>
                  No financial profile added yet.
                </p>
              )}
            </div>
          </div>
        );
      })}

      {businesses.length === 0 && (
        <div
          style={{
            border: "1px dashed var(--border)",
            borderRadius: 12,
            padding: 40,
            textAlign: "center",
            color: "var(--muted-foreground)",
          }}
        >
          You haven&apos;t listed a business yet.
        </div>
      )}

      {showForm ? (
        <div
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>
            Create a business listing
          </h3>
          <CreateBusinessForm onSuccess={() => setShowForm(false)} />
        </div>
      ) : hasPending ? (
        <p style={{ fontSize: 13, color: "var(--muted-foreground)", textAlign: "center", padding: "8px 0" }}>
          You have a listing pending review. You can add another once it&apos;s approved.
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          style={{
            border: "1px dashed var(--border)",
            borderRadius: 12,
            padding: 16,
            textAlign: "center",
            color: "var(--accent)",
            fontWeight: 600,
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          + Add another listing
        </button>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 16, fontWeight: 700 }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{label}</div>
    </div>
  );
}

function money(value: number | null): string {
  return value == null ? "—" : `$${value.toLocaleString()}`;
}

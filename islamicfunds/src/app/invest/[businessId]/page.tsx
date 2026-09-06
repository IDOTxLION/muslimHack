import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublicBusinessById } from "@/lib/dto";
import { requireRole } from "@/lib/dal";
import { InvestForm } from "@/app/ui/invest-form";

export default async function InvestPage({
  params,
  searchParams,
}: {
  params: Promise<{ businessId: string }>;
  searchParams: Promise<{ success?: string; amount?: string }>;
}) {
  await requireRole("investor");
  const { businessId } = await params;
  const { success, amount } = await searchParams;

  const business = await getPublicBusinessById(businessId);
  if (!business) notFound();

  if (success) {
    return (
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#DDE8E2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: 28,
          }}
        >
          ✓
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
          Investment confirmed
        </h1>
        <p style={{ color: "#5C6B64", marginBottom: 32 }}>
          Thank you for backing {business.name}.
        </p>

        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #D4CEBE",
            borderRadius: 12,
            padding: 24,
            textAlign: "left",
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#5C6B64",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 16,
            }}
          >
            Receipt
          </h2>
          <ReceiptRow label="Business" value={business.name} />
          <ReceiptRow label="Category" value={business.category} />
          <ReceiptRow label="Location" value={business.location} />
          <ReceiptRow
            label="Amount invested"
            value={`$${Number(amount ?? 0).toLocaleString()}`}
            bold
          />
          <ReceiptRow label="Date" value={new Date().toLocaleDateString()} />
        </div>

        <Link
          href="/dashboard/investor"
          style={{
            display: "inline-block",
            backgroundColor: "#123E3A",
            color: "white",
            padding: "12px 28px",
            borderRadius: 8,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "48px 24px" }}>
      {business.imageUrl && (
        <img
          src={business.imageUrl}
          alt={business.name}
          style={{ width: "100%", height: 240, objectFit: "cover", borderRadius: 12, marginBottom: 24 }}
        />
      )}

      <span style={{ fontSize: 12, color: "#D86F52", fontWeight: 600 }}>{business.category}</span>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginTop: 4 }}>{business.name}</h1>
      <p style={{ fontSize: 13, color: "#5C6B64", marginTop: 4 }}>{business.location}</p>
      <p style={{ fontSize: 15, color: "#333", lineHeight: 1.6, marginTop: 16 }}>
        {business.description}
      </p>

      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#EEE9DF", marginTop: 24 }}>
        <div className="h-full rounded-full" style={{ width: `${business.percentFunded}%`, backgroundColor: "#D86F52" }} />
      </div>
      <div className="flex justify-between" style={{ fontSize: 13, color: "#5C6B64", marginTop: 8 }}>
        <span>${business.raised.toLocaleString()} raised</span>
        <span>{business.percentFunded}% of ${business.fundingTarget.toLocaleString()}</span>
      </div>
      <div style={{ fontSize: 12, color: "#5C6B64", marginTop: 6, marginBottom: 32 }}>
        {business.investorCount} investors · {business.equityOffered}% equity offered
      </div>

      <InvestForm businessId={business.id} />
    </div>
  );
}

function ReceiptRow({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div
      className="flex justify-between"
      style={{ padding: "8px 0", borderTop: "1px solid #EEE9DF", fontSize: 14 }}
    >
      <span style={{ color: "#5C6B64" }}>{label}</span>
      <span style={{ fontWeight: bold ? 700 : 500 }}>{value}</span>
    </div>
  );
}
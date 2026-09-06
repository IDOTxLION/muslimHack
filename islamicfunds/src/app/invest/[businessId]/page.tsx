import { notFound } from "next/navigation";
import { getPublicBusinessById } from "@/lib/dto";
import { requireRole } from "@/lib/dal";
import { InvestForm } from "@/app/ui/invest-form";

export default async function InvestPage({
  params,
  searchParams,
}: {
  params: Promise<{ businessId: string }>;
  searchParams: Promise<{ success?: string }>;
}) {
  await requireRole("investor");
  const { businessId } = await params;
  const { success } = await searchParams;

  const business = await getPublicBusinessById(businessId);
  if (!business) notFound();

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "48px 24px" }}>
      {success && (
        <div style={{ backgroundColor: "#DDE8E2", color: "#123E3A", padding: "12px 16px", borderRadius: 8, marginBottom: 24, fontSize: 14, fontWeight: 600 }}>
          Investment successful! Thank you for backing {business.name}.
        </div>
      )}

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
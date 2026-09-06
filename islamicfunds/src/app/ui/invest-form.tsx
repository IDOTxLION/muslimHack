"use client";

import { useActionState } from "react";
import { invest, type InvestFormState } from "@/app/actions/investment";

export function InvestForm({ businessId }: { businessId: string }) {
  const [state, action, pending] = useActionState<InvestFormState, FormData>(invest, undefined);

  return (
    <form action={action} className="flex flex-col gap-4">
      <input type="hidden" name="businessId" value={businessId} />

      {state?.error && (
        <div style={{ backgroundColor: "#FBE9E6", color: "#B23B2E", fontSize: 13, padding: "10px 12px", borderRadius: 8 }}>
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="amount" style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>
          Investment amount ($)
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          min={1}
          step="1"
          required
          style={{ width: "100%", border: "1px solid #D4CEBE", borderRadius: 8, padding: "12px 14px", fontSize: 16 }}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        style={{ backgroundColor: "#123E3A", color: "white", padding: "14px", borderRadius: 8, fontWeight: 600, fontSize: 15 }}
      >
        {pending ? "Processing..." : "Invest Now"}
      </button>
    </form>
  );
}
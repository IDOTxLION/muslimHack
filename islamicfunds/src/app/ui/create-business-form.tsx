"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateBusinessForm({ onSuccess }: { onSuccess: () => void }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const file = formData.get("verificationFile");

    if (!(file instanceof File) || file.size === 0) {
      setError("Please upload a verification document (.txt).");
      setPending(false);
      return;
    }

    const verificationNotes = await file.text();
    const payload = {
      name: formData.get("name"),
      tagline: formData.get("tagline"),
      description: formData.get("description"),
      location: formData.get("location"),
      category: formData.get("category"),
      fundingTarget: Number(formData.get("fundingTarget")),
      equityOffered: Number(formData.get("equityOffered")),
      verificationNotes,
    };

    try {
      const response = await fetch("/api/businesses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json();
        setError(body.error ?? "Something went wrong.");
        return;
      }

      form.reset();
      onSuccess();
      router.refresh();
    } catch {
      setError("Unable to submit the listing. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div
          style={{
            backgroundColor: "color-mix(in srgb, var(--destructive) 15%, var(--background))",
            color: "var(--destructive)",
            fontSize: 13,
            padding: "10px 12px",
            borderRadius: 8,
          }}
        >
          {error}
        </div>
      )}

      <Field label="Business name" name="name" />
      <Field label="Tagline" name="tagline" />
      <Field label="Description" name="description" textarea />
      <Field label="Location" name="location" />
      <Field label="Category" name="category" />
      <Field label="Funding target (CAD $)" name="fundingTarget" type="number" />
      <Field label="Equity offered (%)" name="equityOffered" type="number" step="0.1" />

      <div>
        <label
          htmlFor="verificationFile"
          style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}
        >
          Verification document (.txt)
        </label>
        <input id="verificationFile" type="file" name="verificationFile" accept=".txt,text/plain" required />
        <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>
          Upload business registration details, ID, or supporting information for review before your listing goes live.
        </p>
      </div>

      <button
        type="submit"
        disabled={pending}
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--accent-foreground)",
          padding: "12px",
          borderRadius: 8,
          fontWeight: 600,
          border: "none",
          cursor: pending ? "wait" : "pointer",
        }}
      >
        {pending ? "Submitting…" : "Submit for review"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  step,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  step?: string;
  textarea?: boolean;
}) {
  const style = {
    width: "100%",
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "10px 12px",
  };

  return (
    <div>
      <label
        htmlFor={name}
        style={{ fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea id={name} name={name} required rows={3} style={style} />
      ) : (
        <input id={name} name={name} type={type} step={step} required style={style} />
      )}
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/app/ui/auth-shell";
import { SignupForm } from "@/app/ui/signup-form";

export const metadata: Metadata = { title: "Create account · Asaan Fund" };

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  const initialRole = role === "business" ? "business" : "investor";

  return (
    <AuthShell
      title="Create your account"
      subtitle="Join Asaan Fund as an investor or list your business."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#123E3A", fontWeight: 600 }}>
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm initialRole={initialRole} />
    </AuthShell>
  );
}

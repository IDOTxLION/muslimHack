"use client";

import { useActionState, useState } from "react";
import { signup } from "@/app/actions/auth";
import {
  fieldStyle,
  labelStyle,
  errorTextStyle,
  submitStyle,
} from "./auth-shell";

export function SignupForm({
  initialRole = "investor",
}: {
  initialRole?: "investor" | "business";
}) {
  const [state, action, pending] = useActionState(signup, undefined);
  const [role, setRole] = useState<"investor" | "business">(initialRole);

  return (
    <form action={action} className="flex flex-col gap-4">
      {state?.message && (
        <div
          style={{
            backgroundColor: "#FBE9E6",
            color: "#B23B2E",
            fontSize: 13,
            padding: "10px 12px",
            borderRadius: 8,
          }}
        >
          {state.message}
        </div>
      )}

      <div>
        <label style={labelStyle}>I want to…</label>
        <div className="flex gap-2">
          {(
            [
              { key: "investor", label: "Invest" },
              { key: "business", label: "Raise funding" },
            ] as const
          ).map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setRole(opt.key)}
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: 8,
                border:
                  role === opt.key ? "1px solid #123E3A" : "1px solid #D4CEBE",
                backgroundColor: role === opt.key ? "#123E3A" : "white",
                color: role === opt.key ? "#F8F4EC" : "#5C6B64",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="role" value={role} />
        {state?.errors?.role && (
          <p style={errorTextStyle}>{state.errors.role[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="name" style={labelStyle}>
          {role === "business" ? "Business / contact name" : "Full name"}
        </label>
        <input id="name" name="name" type="text" style={fieldStyle} required />
        {state?.errors?.name && (
          <p style={errorTextStyle}>{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input id="email" name="email" type="email" style={fieldStyle} required />
        {state?.errors?.email && (
          <p style={errorTextStyle}>{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" style={labelStyle}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          style={fieldStyle}
          required
        />
        {state?.errors?.password && (
          <ul style={{ ...errorTextStyle, paddingLeft: 16, listStyle: "disc" }}>
            {state.errors.password.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>

      <button type="submit" disabled={pending} style={submitStyle}>
        {pending ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}

"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";
import {
  fieldStyle,
  labelStyle,
  errorTextStyle,
  submitStyle,
} from "./auth-shell";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);

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
          <p style={errorTextStyle}>{state.errors.password[0]}</p>
        )}
      </div>

      <button type="submit" disabled={pending} style={submitStyle}>
        {pending ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}

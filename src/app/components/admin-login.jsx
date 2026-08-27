"use client";

import { useState } from "react";
import { LockKeyhole, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Login failed.");
      setLoading(false);
      return;
    }

    router.refresh();
  }

  return (
    <section className="mx-auto max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-300">
        Admin Access
      </p>
      <h1 className="font-section-title mt-3 text-4xl text-pry">
        Dashboard Login
      </h1>
      <p className="mt-3 text-sm text-slate-300">
        Login kore project add, update, delete ar website content manage korte
        parbe.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm text-slate-300">
            <UserRound size={16} />
            Username
          </span>
          <input
            type="text"
            value={form.username}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                username: event.target.value,
              }))
            }
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-violet-400"
            placeholder="admin"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm text-slate-300">
            <LockKeyhole size={16} />
            Password
          </span>
          <input
            type="password"
            value={form.password}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                password: event.target.value,
              }))
            }
            className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 outline-none transition focus:border-violet-400"
            placeholder="********"
            required
          />
        </label>

        {error ? (
          <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-violet-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login to Dashboard"}
        </button>
      </form>
    </section>
  );
}

// FILE: components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser, logout } from "@/lib/auth";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Teams", href: "/teams" },
  { label: "Blog", href: "/blogg" },
  { label: "Create Blog", href: "/blog/create" },
];

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    setUserEmail(getUser()?.email ?? null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1220]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#0b1220] font-extrabold">
            P
          </span>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-wide text-white">
              Porsche Showroom
            </div>
            <div className="text-xs text-white/60">Luxury Performance</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-white text-[#0b1220]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {userEmail ? (
            <>
              <span className="hidden text-xs text-white/60 sm:inline">
                {userEmail}
              </span>
              <button
                onClick={() => {
                  logout();
                  router.push("/login");
                }}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-[#0b1220] hover:bg-white/90"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-ink-900 text-white font-bold">
              CSA
            </span>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wide text-ink-900">
                CIVIC SAFETY ADVISORS
              </div>
              <div className="text-xs text-slate-500">Protecting What Matters Most</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm font-semibold text-slate-700 hover:text-ink-900"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact">Schedule a Consultation</Button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-slate-700" />
              <span className="block h-0.5 w-6 bg-slate-700" />
              <span className="block h-0.5 w-6 bg-slate-700" />
            </div>
          </button>
        </div>

        {open ? (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 pt-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button href="/contact" className="w-full justify-center">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

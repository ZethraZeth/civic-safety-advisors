"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { categoryLabels, type ServiceCategory } from "@/lib/services";
import { industries } from "@/lib/industries";
import { ChevronDown } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/industries", label: "Industries", hasDropdown: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceCategories: Array<{ key: ServiceCategory; label: string }> = [
  { key: "strategy", label: categoryLabels.strategy },
  { key: "policy", label: categoryLabels.policy },
  { key: "physical", label: categoryLabels.physical },
  { key: "emergency", label: categoryLabels.emergency },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

          <nav className="desktop-nav items-center gap-8">
            {nav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-ink-900 hover:text-brass-600 transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </Link>

                {/* Services Dropdown */}
                {item.label === "Services" && activeDropdown === "Services" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                    {serviceCategories.map((cat) => (
                      <Link
                        key={cat.key}
                        href={`/services#${cat.key}`}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brass-600"
                      >
                        {cat.label}
                      </Link>
                    ))}
                    <div className="border-t border-slate-200 mt-2 pt-2">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-slate-50 hover:text-brass-600"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}

                {/* Industries Dropdown */}
                {item.label === "Industries" && activeDropdown === "Industries" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries#${industry.slug}`}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brass-600"
                      >
                        {industry.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="desktop-button">
            <Button href="/contact" variant="brass">Schedule a Consultation</Button>
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
              {nav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 block"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {/* Mobile Services Submenu */}
                  {item.label === "Services" && (
                    <div className="pl-6 mt-1 space-y-1">
                      {serviceCategories.map((cat) => (
                        <Link
                          key={cat.key}
                          href={`/services#${cat.key}`}
                          className="block px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 rounded"
                          onClick={() => setOpen(false)}
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Industries Submenu */}
                  {item.label === "Industries" && (
                    <div className="pl-6 mt-1 space-y-1">
                      {industries.map((industry) => (
                        <Link
                          key={industry.slug}
                          href={`/industries#${industry.slug}`}
                          className="block px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 rounded"
                          onClick={() => setOpen(false)}
                        >
                          {industry.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button href="/contact" variant="brass" className="w-full justify-center">
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

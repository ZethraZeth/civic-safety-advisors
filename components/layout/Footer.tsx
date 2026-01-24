import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/assets/images/csa-logo.png"
                  alt="Civic Safety Advisors Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-sm font-semibold tracking-wider font-serif">
                CIVIC SAFETY ADVISORS
              </div>
            </div>
            <p className="mt-3 text-sm text-white/75 max-w-sm">
              Security consulting for mission-driven organizations—practical assessments,
              clear action plans, and training that builds lasting safety culture.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>
                <span className="font-semibold text-white">Email:</span>{" "}
                info@civicsafetyadvisors.com
              </li>
              <li>
                <span className="font-semibold text-white">Phone:</span>{" "}
                (203) 676-8193
              </li>
              <li>
                <span className="font-semibold text-white">Location:</span>{" "}
                Branford, Connecticut
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-white/10">
          <p className="text-sm text-white/75 max-w-3xl">
            Civic Safety Advisors serves mission-driven organizations throughout Connecticut, New York,
            Massachusetts, and Rhode Island. We also provide virtual consultations nationwide and can
            arrange on-site engagements anywhere in the United States upon request.
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/60 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2025 Civic Safety Advisors. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

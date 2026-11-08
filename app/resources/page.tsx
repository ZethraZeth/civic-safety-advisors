import Link from "next/link";
import { ClipboardCheck, Landmark, BookOpen, ArrowRight } from "lucide-react";
import { JsonLd, breadcrumbLd } from "@/components/seo/JsonLd";

export const metadata = {
  title: "Resources: Free Self-Assessment and Grant Guide",
  description:
    "Free tools from Civic Safety Advisors: a 20-minute security self-assessment with scores by area and a prioritized action list, and a plain-language guide to the federal and Connecticut Nonprofit Security Grant Programs.",
  alternates: { canonical: "/resources" },
};

const items = [
  {
    href: "/assessment",
    Icon: ClipboardCheck,
    title: "Free Security Self-Assessment",
    text: "About 25 questions that take around 20 minutes, with no account required. You get a score for eight security areas, your ten highest-priority fixes with cost ranges, and a summary by email. The full report comes with a free 30-minute consultation.",
    cta: "Start the assessment",
  },
  {
    href: "/connecticut-nonprofit-security-grant",
    Icon: Landmark,
    title: "Connecticut Nonprofit Security Grant Guide",
    text: "The federal NSGP (up to $200,000 per site) and the state CT-NSGP (up to $50,000 per site) side by side: who qualifies, what they pay for, the 2026 and 2027 timelines, and the vulnerability assessment both require.",
    cta: "Read the guide",
  },
  {
    href: "/blog",
    Icon: BookOpen,
    title: "Blog",
    text: "Practical guidance on security planning: emergency response plans, whether to hire guards, what to fix before buying cameras, and the first five priorities for a house of worship.",
    cta: "Browse articles",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbLd([{ name: "Resources", path: "/resources" }])} />
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold tracking-wide text-brass-600 uppercase font-serif">Resources</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">Free tools and guides</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            Two things every organization can use before spending a dollar: a way to see where you stand, and a clear explanation of the grant money available to fix it.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {items.map(({ href, Icon, title, text, cta }) => (
              <Link key={href} href={href} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:border-brass-500">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brass-500/15 text-brass-600"><Icon className="h-5 w-5" /></span>
                <h2 className="mt-4 text-lg font-bold text-ink-900">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink-900 group-hover:text-brass-600">{cta} <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

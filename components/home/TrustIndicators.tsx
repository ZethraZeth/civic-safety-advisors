import { ShieldCheck, Puzzle, Users, FileBadge } from "lucide-react";

const items = [
  {
    title: "Comprehensive Assessments",
    desc: "Facility and policy reviews that prioritize actions after coordinating with public safety partners.",
    Icon: ShieldCheck,
  },
  {
    title: "Customized Solutions",
    desc: "Recommendations tailored to mission, budget reality, and what public resources can already provide.",
    Icon: Puzzle,
  },
  {
    title: "Expert Training Programs",
    desc: "Practical training executed within a defined strategic framework—not one-off drills.",
    Icon: Users,
  },
  {
    title: "Compliance Focused",
    desc: "Guidance built for defensibility and operational clarity, not bureaucracy.",
    Icon: FileBadge,
  },
];

export function TrustIndicators() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-brass-600 uppercase">
            Trusted Security Expertise
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Built for mission-driven organizations
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="rounded-xl bg-white p-6 shadow-soft border border-slate-100"
            >
              <Icon className="h-6 w-6 text-brass-600" aria-hidden="true" />
              <h3 className="mt-4 text-base font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

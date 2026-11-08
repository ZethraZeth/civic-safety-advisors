import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "We know these buildings",
    text:
      "We work only in public-facing facilities with volunteer teams and a culture that has to survive the security program.",
  },
  {
    title: "Recommendations you can act on",
    text:
      "No generic checklists or product catalogs. You get judgment on what not to buy, what public resources can handle, and what actually requires investment.",
  },
  {
    title: "We stay available",
    text:
      "The report is not the end of the engagement. We stay on call as budgets shift, staff turn over, and your relationship with local agencies develops.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why us"
          title="Why choose Civic Safety Advisors"
          subtitle="Guidance fitted to your building and your budget."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-base font-bold text-ink-900">{i.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

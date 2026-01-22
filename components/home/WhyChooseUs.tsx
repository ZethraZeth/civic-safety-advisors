import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Community-focused expertise",
    text:
      "We specialize in mission-driven environments. We understand public-facing facilities, volunteer teams, and the need to protect without disrupting culture.",
  },
  {
    title: "Practical, actionable recommendations",
    text:
      "No generic checklists. You get clear priorities, realistic options, and the “what to do next” that teams can actually execute.",
  },
  {
    title: "Partnership approach",
    text:
      "We can support implementation, train your people, and help you build a sustainable security culture—not just deliver a report.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why us"
          title="Why organizations trust Civic Safety Advisors"
          subtitle="Authoritative guidance, tailored to your environment and your budget reality."
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

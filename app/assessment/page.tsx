import { Button } from "@/components/ui/Button";
import * as Icons from "lucide-react";

const ASSESS_URL = "https://assess.civicsafetyadvisors.com";

export const metadata = {
  title: "Free Security Self-Assessment | Civic Safety Advisors",
  description:
    "A free 20-minute security self-assessment for houses of worship, housing providers, schools, nonprofits, and clinics in Connecticut. Get a score by area, a prioritized action list with costs, and a PDF for your board, insurer, or grant application.",
};

const areas = [
  ["Governance", "Who owns security decisions and whether anyone looks at the whole picture."],
  ["Planning", "Written emergency plans and coordination with police and fire."],
  ["Training & Awareness", "Whether the people in the building know what to do."],
  ["Emergency Response", "Lockdown, lockout, shelter-in-place, alerts, and drills."],
  ["Physical Security", "Keys and codes, doors, lighting, cameras, office layout."],
  ["People & Interactions", "Staff safety with the public, lone work, screening."],
  ["Threat Information", "How you learn about threats before they arrive."],
  ["Incident Reporting", "How incidents get recorded, escalated, and learned from."],
];

const steps = [
  ["Pick your organization type", "House of worship, housing provider, school, nonprofit, or clinic. The questions and examples adjust to your setting."],
  ["Answer about 25 questions", "One screen at a time, about 20 minutes. Each question has a help note and an example for your kind of organization. Your answers save as you go."],
  ["Get your results", "A score for each of the eight areas, your top five no-cost fixes, your top five worth paying for, and an impact-versus-cost chart of everything else."],
  ["Download the PDF", "The report is emailed to you and shown once on screen. Give it to your board, your insurance broker, or attach it to a security grant application."],
];

const faqs = [
  ["Who should fill it out?", "One person who knows the building and the staff: an executive director, property manager, head of school, administrator, or safety committee lead. It helps to walk the building first."],
  ["Is it really free?", "Yes. There is no account, no payment, and no obligation. If you want a site visit afterward, that is a separate conversation."],
  ["What happens to my answers?", "Your organization name, contact details, and answers are encrypted before they are stored. Our records show only a reference code, your organization type, your county, and summary scores. Everything is deleted after 12 months unless you ask us to keep it. We do not sell or share it."],
  ["Can I use this for a security grant?", "The PDF is written to support the federal and Connecticut Nonprofit Security Grant Program applications. It is not a substitute for the site-specific vulnerability assessment the federal program requires, but it is a strong starting point, and we can do the full assessment if you need one."],
  ["How is this different from the CISA tool?", "The questions are adapted from the CISA Houses of Worship Security Self-Assessment, which is public domain. We added questions CISA does not ask about lone workers, aggressive interactions, keys and doors, lighting, and incident reporting; made the scales consistent; added examples for five organization types; and built the scoring, prioritization, and PDF."],
  ["Can I stop and come back?", "Yes. Your answers save automatically and you can resume from the same link until you finish. Once you finish, the link closes and the PDF is your copy."],
];

export default function AssessmentPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-brass-500 uppercase font-serif">Free tool</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">How secure is your organization?</h1>
            <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
              A 20-minute self-assessment for houses of worship, housing providers, schools, nonprofits, and clinics. You get a score for eight security areas, a prioritized list of what to fix first with cost ranges, and a PDF report you can give to your board, your insurer, or a grant application.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={ASSESS_URL} variant="brass" className="justify-center">Start the assessment</Button>
              <span className="text-sm text-white/60">No account. No cost. About 25 questions.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">Why do it</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              ["You find out where you actually stand", "Most organizations have never written down what they do and do not have. The assessment forces the inventory: who has keys, who works alone, what happens when someone gets aggressive, whether police have ever walked the building."],
              ["You get an order of operations", "Security advice usually arrives as a long list. This one is ranked. The top five things that cost nothing come first, then the top five worth paying for, then everything else sorted by impact and cost."],
              ["You get a document people will accept", "Boards, insurance brokers, and grant reviewers ask for evidence of a security program. A dated report with scores by area and a prioritized plan is that evidence, and it is written so it can go to them as-is."],
            ].map(([h, p]) => (
              <div key={h} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-ink-900">{h}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">How it works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {steps.map(([h, p], i) => (
              <li key={h} className="rounded-xl bg-white border border-slate-200 p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brass-500 text-sm font-bold text-ink-900">{i + 1}</div>
                <h3 className="mt-4 font-bold text-ink-900">{h}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">What it covers</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Eight areas. Each gets a score from 1 to 5 and a Low, Medium, or High rating. Questions that score below 4 produce specific recommended actions.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map(([h, p]) => (
              <div key={h} className="rounded-lg border border-slate-200 p-4">
                <h3 className="text-sm font-bold text-ink-900">{h}</h3>
                <p className="mt-1 text-sm text-slate-600">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">What you get</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              [Icons.BarChart3, "Score by area", "An overall maturity rating and a bar for each of the eight areas, with the Low, Medium, and High bands marked."],
              [Icons.ListChecks, "Top five, twice", "The five highest-impact actions that cost nothing but staff time, and the five highest-impact actions worth paying for."],
              [Icons.Grid3x3, "Impact versus cost chart", "Every recommended action placed by how much it reduces risk and what it costs, so you can see where to start."],
              [Icons.FileText, "A PDF report", "Summary, priorities, every recommendation by area, and your answer to every question. Emailed to you and shown once on screen."],
            ].map(([Icon, h, p]) => {
              const I = Icon as React.ComponentType<{ className?: string }>;
              return (
                <div key={h as string} className="flex gap-4 rounded-xl bg-white border border-slate-200 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brass-100 text-brass-600"><I className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-bold text-ink-900">{h as string}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{p as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">Questions people ask</h2>
          <dl className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-xl border border-slate-200 p-6">
                <dt className="font-bold text-ink-900">{q}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Twenty minutes. One person. A plan.</h2>
              <p className="mt-2 text-sm sm:text-base text-white/75">A self-assessment records what you believe about your building. If you want someone to walk it and verify, that is what we do.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={ASSESS_URL} variant="brass">Start the assessment</Button>
              <Button href="/contact" variant="secondary" className="border-white/60 text-white hover:bg-white/10">Ask about a site visit</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

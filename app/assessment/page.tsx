import { Button } from "@/components/ui/Button";
import { SampleResults } from "@/components/assessment/SampleResults";
import { Clock, UserRound, ShieldCheck, FileText } from "lucide-react";
import { JsonLd, faqLd } from "@/components/seo/JsonLd";

const ASSESS_URL = "https://assess.civicsafetyadvisors.com";

export const metadata = {
  title: "Free Security Self-Assessment",
  alternates: { canonical: "/assessment" },
  description:
    "A free 20-minute security self-assessment for houses of worship, housing providers, schools, nonprofits, and clinics in Connecticut. Get a score by area, a prioritized action list with costs, and a PDF for your board, insurer, or grant application.",
};

const facts = [
  { Icon: Clock, text: "20 minutes, about 25 questions" },
  { Icon: UserRound, text: "No account, no cost, no sales call" },
  { Icon: ShieldCheck, text: "Your answers are encrypted and deleted after 12 months" },
  { Icon: FileText, text: "PDF emailed to you when you finish" },
];

const steps = [
  ["Pick your organization type", "House of worship, housing provider, school, nonprofit, or clinic. Questions and examples adjust to your setting."],
  ["Answer the questions", "One screen at a time. Each has a help note and an example. Answers save as you go, so you can stop and come back."],
  ["Enter where the report should go", "Organization name and contact details, encrypted before they are stored."],
  ["Get your results", "Scores on screen, the PDF in your inbox. The link closes once you finish."],
];

const areas = [
  "Governance", "Planning", "Training & Awareness", "Emergency Response",
  "Physical Security", "People & Interactions", "Threat Information", "Incident Reporting",
];

const faqs = [
  ["Who should fill it out?", "One person who knows the building and the staff: an executive director, property manager, head of school, administrator, or safety committee lead. Walk the building first if you can."],
  ["What happens to my answers?", "Organization name, contact details, and answers are encrypted before they are stored. Our records show only a reference code, organization type, county, and summary scores. Everything is deleted after 12 months unless you ask us to keep it. We do not sell or share it."],
  ["Can I use this for a security grant?", "The PDF is written to support federal and Connecticut Nonprofit Security Grant Program applications. It does not replace the site-specific vulnerability assessment the federal program requires, but it is a strong starting point, and we can do the full assessment if you need one. Our Connecticut Nonprofit Security Grant guide at /connecticut-nonprofit-security-grant covers deadlines and eligibility."],
  ["How is this different from the CISA tool?", "The questions are adapted from CISA's public-domain Houses of Worship Security Self-Assessment. We added questions on lone workers, aggressive interactions, keys and doors, lighting, and incident reporting; made the scales consistent; added examples for five organization types; and built the scoring, prioritization, and PDF."],
];

export default function AssessmentPage() {
  return (
    <main>
      <JsonLd data={faqLd(faqs.map(([question, answer]) => ({ question, answer })))} />
      {/* Hero: pitch on the left, sample output on the right */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-sm font-semibold tracking-wide text-brass-600 uppercase font-serif">Free security self-assessment</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">How secure is your organization?</h1>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Answer about 25 questions and get a score for eight security areas, a ranked list of what to fix first with cost ranges, and a PDF you can hand to your board, your insurer, or a grant reviewer.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {facts.map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={ASSESS_URL} variant="brass" className="justify-center whitespace-nowrap px-7">Start the assessment</Button>
                <span className="text-sm text-slate-500">For houses of worship, housing providers, schools, nonprofits, and clinics.</span>
              </div>
            </div>

            <div>
              <SampleResults />
              <p className="mt-3 text-center text-xs text-slate-500">Sample results. Yours are built from your answers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works + what it covers, one compact band */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14">
            <div>
              <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">How it works</h2>
              <ol className="mt-5 grid gap-5 sm:grid-cols-2">
                {steps.map(([h, p], i) => (
                  <li key={h} className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brass-500 text-xs font-bold text-ink-900">{i + 1}</div>
                    <div>
                      <h3 className="text-sm font-bold text-ink-900">{h}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">What it covers</h2>
              <p className="mt-2 text-sm text-slate-600">Eight areas, each scored 1 to 5 and rated Low, Medium, or High. Any question that scores below 4 produces specific recommended actions.</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {areas.map((a) => (
                  <li key={a} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-ink-900">{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why bother */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">Why do it</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {[
              ["You find out where you stand", "Most organizations have never written down what they do and do not have: who has keys, who works alone, what happens when someone gets aggressive, whether police have ever walked the building."],
              ["You get an order of operations", "Security advice usually arrives as a long list. This one is ranked: the top five fixes that cost nothing, then the top five worth paying for, then everything else by impact and cost."],
              ["You get a document people will accept", "Boards, insurance brokers, and grant reviewers ask for evidence of a security program. A dated report with scores by area and a prioritized plan is that evidence."],
            ].map(([h, p]) => (
              <div key={h}>
                <h3 className="font-bold text-ink-900">{h}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">Questions people ask</h2>
          <dl className="mt-5 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {faqs.map(([q, a]) => (
              <div key={q}>
                <dt className="font-bold text-ink-900">{q}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-slate-600">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-12 bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-white">Twenty minutes. One person. A plan.</h2>
              <p className="mt-2 text-sm text-white/75">A self-assessment records what you believe about your building. If you want someone to walk it and verify, that is what we do.</p>
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

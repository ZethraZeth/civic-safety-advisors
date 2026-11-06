import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { JsonLd, faqLd, breadcrumbLd } from "@/components/seo/JsonLd";
import { Byline } from "@/components/blog/Byline";
import { ASSESS_URL } from "@/lib/site";

const PUBLISHED = "2026-11-06";
const UPDATED = "2026-11-06";

export const metadata = {
  title: "Connecticut Nonprofit Security Grant Program 2026: Deadlines, Eligibility, and the Assessment You Need",
  description:
    "Plain-language guide to the federal Nonprofit Security Grant Program (NSGP) and the state CT-NSGP for Connecticut nonprofits and houses of worship: who qualifies, award caps, the 2026 and 2027 timelines, the required vulnerability assessment, and what the money can buy.",
  alternates: { canonical: "/connecticut-nonprofit-security-grant" },
  openGraph: { type: "article", publishedTime: PUBLISHED, modifiedTime: UPDATED, authors: ["Seth Hershman"] },
};

const faqs = [
  {
    question: "Can a Connecticut nonprofit apply for both the federal NSGP and the state CT-NSGP?",
    answer: "Yes. They are separate programs with separate applications. An organization can apply to both in the same year, but cannot be reimbursed twice for the same item.",
  },
  {
    question: "Who can perform the vulnerability assessment?",
    answer: "For the federal NSGP in Connecticut, DEMHS accepts a written assessment conducted within the past three years by local law enforcement, a security contractor, or by completing the CISA Houses of Worship Self-Assessment. The assessment must be specific to the site in the application, and the items you request must trace back to findings in it.",
  },
  {
    question: "Does the grant pay for the assessment itself?",
    answer: "No. The federal NOFO lists risk and vulnerability assessments as an unallowable cost, and pre-award costs are not reimbursed. Budget for the assessment separately; it is usually the smallest line in the project.",
  },
  {
    question: "Can the money pay for security guards?",
    answer: "Under the federal FY2026 NSGP, yes: contracted security personnel are allowable and may use up to 100% of the award, though funds cannot buy equipment for those guards. The state CT-NSGP is for security infrastructure improvements to buildings you own and does not fund personnel.",
  },
  {
    question: "We rent our building. Are we eligible?",
    answer: "For the federal NSGP, equipment can go on property you own or lease. The state CT-NSGP requires that you own the building at the time of application and through project completion.",
  },
  {
    question: "Can we apply every year?",
    answer: "Yes. Both programs run on annual or near-annual cycles and prior awardees can reapply for new projects or additional sites. Federal applications are limited to three sites per funding stream per year.",
  },
  {
    question: "When is the next deadline?",
    answer: "The 2026 state CT-NSGP round closed September 14, 2026 and awards are expected in mid-December 2026. The federal FY2026 round in Connecticut closed July 15, 2026. The next federal cycle (FY2027) is expected to open in spring or early summer 2027 with a Connecticut deadline a few weeks later; the next state round opens when the Bond Commission allocates funds, which has happened in 2021, 2023, 2024, and 2026. Start the assessment and the Investment Justification before the window opens.",
  },
];

const steps = [
  ["Confirm eligibility", "You must be a 501(c)(3) at heightened risk of a terrorist attack, hate crime, or violent act. The state program also requires that you own the building. Public schools are not eligible for the state program."],
  ["Register in EM Grants", "Both programs in Connecticut run through the DESPP EM Grants portal (emgrants.despp.ct.gov). Registration takes a few days to approve, so do it before the application window opens. Federal applicants also need an active SAM.gov registration and a UEI number."],
  ["Get the vulnerability assessment", "A written, site-specific assessment dated within the past three years. Every item you request must trace back to a finding in it. This is the document that makes or breaks the application, and it is not reimbursable."],
  ["Write the Investment Justification", "The federal IJ is a fillable PDF: threat narrative, vulnerabilities, the proposed project, a budget with Authorized Equipment List numbers, a timeline, and how you will sustain it. The state application has a similar Part 1 narrative plus an online self-assessment."],
  ["Submit through EM Grants before the state deadline", "Connecticut's deadline is earlier than FEMA's because DEMHS reviews and forwards applications. In 2026 the federal cutoff for Connecticut was July 15 for a July 24 FEMA deadline."],
  ["If awarded, spend by the rules", "Awards are reimbursements. Keep quotes, invoices, and photos; follow procurement rules; and finish within the period of performance (24 months for FY2026 federal awards)."],
];

export default function NsgpGuidePage() {
  return (
    <main>
      <JsonLd data={[
        faqLd(faqs),
        breadcrumbLd([{ name: "Blog", path: "/blog" }, { name: "Connecticut Nonprofit Security Grant Program guide", path: "/connecticut-nonprofit-security-grant" }]),
        {
          "@context": "https://schema.org", "@type": "Article",
          headline: "Connecticut Nonprofit Security Grant Program 2026: Deadlines, Eligibility, and the Assessment You Need",
          datePublished: PUBLISHED, dateModified: UPDATED,
          author: { "@id": "https://www.civicsafetyadvisors.com/#seth-hershman" },
          publisher: { "@id": "https://www.civicsafetyadvisors.com/#organization" },
          mainEntityOfPage: "https://www.civicsafetyadvisors.com/connecticut-nonprofit-security-grant",
        },
      ]} />

      <article>
        <header className="bg-slate-50 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brass-600 font-serif">Grant guide</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Connecticut Nonprofit Security Grant Program 2026: deadlines, eligibility, and the assessment you need
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700 border-l-4 border-brass-500 pl-4">
              Connecticut nonprofits and houses of worship can apply for two separate security grants: the federal Nonprofit Security Grant Program (NSGP), up to $200,000 per site, and the state CT-NSGP, up to $50,000 per site. Both require a site-specific vulnerability assessment, and both are reimbursement programs with deadlines that fall months before the money arrives.
            </p>
            <Byline publishedAt={PUBLISHED} updatedAt={UPDATED} readTime={9} />
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-14">
          {/* Status box */}
          <section className="rounded-xl border border-brass-500/40 bg-brass-500/5 p-6">
            <h2 className="text-lg font-bold text-ink-900">Where things stand (November 2026)</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li><strong>State CT-NSGP, 2026 round:</strong> $5 million released by Governor Lamont on June 9, 2026. Applications closed September 14, 2026. DEMHS expects to announce awards in mid-December 2026.</li>
              <li><strong>Federal NSGP, FY2026:</strong> Connecticut sub-applications closed July 15, 2026; FEMA deadline July 24, 2026. Period of performance September 1, 2026 to August 31, 2028.</li>
              <li><strong>Next openings:</strong> federal FY2027 is expected in spring or early summer 2027. The state round reopens when the Bond Commission allocates funds; past rounds were 2021, 2023, 2024, and 2026.</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">If you missed 2026, use the next six months to get the assessment done and the application drafted. Organizations that start when the window opens usually run out of time.</p>
          </section>

          {/* Comparison table */}
          <section>
            <h2 className="text-2xl font-bold text-ink-900">Federal NSGP vs. Connecticut CT-NSGP</h2>
            <p className="mt-2 text-slate-600">The two programs are often confused. They have different funders, caps, rules, and timelines.</p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50 text-left">
                  <tr>
                    <th className="p-3 font-semibold text-ink-900 border-b border-slate-200 w-40"></th>
                    <th className="p-3 font-semibold text-ink-900 border-b border-slate-200">Federal NSGP (FEMA, via CT DEMHS)</th>
                    <th className="p-3 font-semibold text-ink-900 border-b border-slate-200">Connecticut CT-NSGP (state bond funds, via DEMHS)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 [&_td]:p-3 [&_td]:align-top [&_td]:border-b [&_td]:border-slate-100 [&_th]:p-3 [&_th]:align-top [&_th]:border-b [&_th]:border-slate-100 [&_th]:font-semibold [&_th]:text-ink-900">
                  <tr><th>Who is eligible</th><td>501(c)(3) organizations at high risk of terrorist or extremist attack. Property can be owned or leased.</td><td>501(c)(3) organizations at heightened risk of a terrorist attack, hate crime, or violent act. Must own the building. Public schools excluded.</td></tr>
                  <tr><th>Award cap</th><td>Up to $200,000 per site, up to 3 sites per funding stream.</td><td>Up to $50,000 per site.</td></tr>
                  <tr><th>Assessment required</th><td>Yes. Site-specific, within the past 3 years. CT accepts local police, a security contractor, or the CISA self-assessment.</td><td>Yes. An online security self-assessment is part of the application, and awards are ranked on demonstrated need.</td></tr>
                  <tr><th>What it pays for</th><td>Approved equipment (Authorized Equipment List), planning, training, exercises, and contracted security personnel (up to 100% of award). Construction capped at 15%.</td><td>Security infrastructure improvements to the building: ballistic glass, cameras, solid-core doors, electronic locks, panic alarms, metal detectors and similar.</td></tr>
                  <tr><th>What it does not pay for</th><td>The assessment itself, pre-award costs, overtime, backfill, travel, equipment for contracted guards.</td><td>Personnel, operating costs, work on buildings you do not own.</td></tr>
                  <tr><th>Match</th><td>None required.</td><td>None stated.</td></tr>
                  <tr><th>How you get paid</th><td>Reimbursement after purchase, over a 24-month period of performance.</td><td>Reimbursement after purchase.</td></tr>
                  <tr><th>2026 deadline</th><td>July 15, 2026 (CT) for the July 24 FEMA deadline. Closed.</td><td>September 14, 2026. Closed; awards mid-December.</td></tr>
                  <tr><th>Where to apply</th><td>EM Grants portal, "NSGP-S". Contact DEMHS.NSGP-S@ct.gov.</td><td>EM Grants portal, "SSBF". Contact DEMHS.CT-NSGP@ct.gov.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Steps */}
          <section>
            <h2 className="text-2xl font-bold text-ink-900">How to apply, in order</h2>
            <ol className="mt-6 space-y-5">
              {steps.map(([h, p], i) => (
                <li key={h} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brass-500 text-sm font-bold text-ink-900">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-ink-900">{h}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Assessment section */}
          <section>
            <h2 className="text-2xl font-bold text-ink-900">The vulnerability assessment: what reviewers look for</h2>
            <p className="mt-3 leading-7 text-slate-700">
              The assessment is not a formality. Reviewers score the application on how clearly the threat, the vulnerabilities, and the requested items line up. A strong assessment for one site includes:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-6 text-slate-700">
              <li>A description of the site, its occupancy, schedule, and the people it serves.</li>
              <li>The specific threats that apply: documented incidents, threats received, hate incidents in the area, and the organization's visibility.</li>
              <li>A walk-through of the building: entries, locks, lighting, cameras, sightlines, parking, communications, and procedures such as key control and visitor management.</li>
              <li>Findings ranked by risk, each tied to a recommended fix with an estimated cost.</li>
              <li>The date, the assessor's name and qualifications, and the method used.</li>
            </ul>
            <p className="mt-4 leading-7 text-slate-700">
              Two ways to get there. Our <Link href="/assessment" className="font-semibold text-ink-900 underline">free 20-minute self-assessment</Link> produces a scored report with a prioritized action list; it is a good starting inventory and mirrors the structure of the CISA self-assessment that Connecticut accepts. For a site-specific written assessment from a security contractor, our <Link href="/services/threat-vulnerability-assessment" className="font-semibold text-ink-900 underline">threat and vulnerability assessment</Link> is written to the NSGP format so the findings map directly onto the Investment Justification.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-ink-900">Questions people ask</h2>
            <dl className="mt-6 space-y-6">
              {faqs.map((f) => (
                <div key={f.question}>
                  <dt className="font-bold text-ink-900">{f.question}</dt>
                  <dd className="mt-1.5 text-sm leading-6 text-slate-700">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Sources */}
          <section className="text-sm text-slate-600">
            <h2 className="text-base font-bold text-ink-900">Sources</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><a className="underline" href="https://portal.ct.gov/demhs/grants/nonprofit-security-grant-program-overview/connecticut-nonprofit-security-grant-program" rel="noopener">CT DEMHS: Connecticut Nonprofit Security Grant Program</a></li>
              <li><a className="underline" href="https://portal.ct.gov/demhs/grants/nonprofit-security-grant-program-overview/connecticut-nonprofit-security-grant-program/apply" rel="noopener">CT DEMHS: CT-NSGP Apply page (2026 window and requirements)</a></li>
              <li><a className="underline" href="https://portal.ct.gov/demhs/grants/nonprofit-security-grant-program-overview/federal-nonprofit-security-grant-program/apply" rel="noopener">CT DEMHS: Federal NSGP Apply page (FY2026 deadline and documents)</a></li>
              <li><a className="underline" href="https://www.fema.gov/grants/preparedness/nonprofit-security" rel="noopener">FEMA: Nonprofit Security Grant Program and FY2026 NOFO</a></li>
              <li><a className="underline" href="https://portal.ct.gov/governor/news/press-releases/2026/06-2026/governor-lamont-announces-new-funding-for-grant-program-to-help-nonprofits" rel="noopener">Governor Lamont, June 9, 2026: $5 million for the nonprofit security grant program</a></li>
            </ul>
            <p className="mt-3">Program rules change each cycle. Check the DEMHS pages for the current notice before you apply. This page was last reviewed on November 6, 2026.</p>
          </section>
        </div>
      </article>

      <section className="py-12 bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-white">Get the assessment done before the window opens</h2>
              <p className="mt-2 text-sm text-white/75">Start with the free self-assessment today, or book a site visit for the written assessment the application requires.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={ASSESS_URL} variant="brass">Free self-assessment</Button>
              <Button href="/contact" variant="secondary" className="border-white/60 text-white hover:bg-white/10">Book a site assessment</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

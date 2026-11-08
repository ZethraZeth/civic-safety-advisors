import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { JsonLd, faqLd } from "@/components/seo/JsonLd";

const faqs = [
  {
    question: "Can you do the vulnerability assessment required for the Nonprofit Security Grant Program?",
    answer:
      "Yes. Both the federal NSGP and the Connecticut NSGP require a site-specific vulnerability assessment, and Connecticut accepts one from a security contractor. We walk the site, write the assessment, and align it to the Investment Justification so the requested items match the documented risks. See our Connecticut Nonprofit Security Grant guide for deadlines and eligibility.",
    href: "/connecticut-nonprofit-security-grant",
  },
  {
    question: "Do you provide virtual safety consulting for nonprofits nationwide?",
    answer:
      "Yes. Our primary service region is Connecticut, New York, Massachusetts, and Rhode Island, but we work remotely with organizations anywhere in the United States. Policy review, training development, strategic planning, and desk-based assessments all work well over video.",
  },
  {
    question: "Can you conduct on-site workshops for our New England school district?",
    answer:
      "Yes. On-site training, tabletop exercises, and workshops are how we normally work in Connecticut, New York, Massachusetts, and Rhode Island. We also travel for on-site work anywhere in the United States when the job needs someone in the building, such as a site assessment or hands-on training.",
  },
  {
    question: "What types of organizations do you work with?",
    answer:
      "Organizations that serve the public: municipal governments and local agencies, nonprofits and social service agencies, K-12 schools and colleges, healthcare facilities, houses of worship, housing providers, and community centers. We do not work with commercial or corporate clients.",
  },
  {
    question: "How do you coordinate with local public safety agencies?",
    answer:
      "That is where every engagement starts. We find out what your municipal police, fire, and emergency management agencies already provide, then identify where a private security measure would add something they do not. That keeps you from paying for the same thing twice and keeps the local responders in the loop on your plan.",
  },
  {
    question: "What makes your approach different from other security consultants?",
    answer:
      "We do not sell guards, cameras, or alarm contracts, so we have no reason to recommend them. Our background is in law enforcement and emergency management policy, which means we know how public safety systems work and where organizations like yours fit in them. You get told what not to buy as often as what to add.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <JsonLd data={faqLd(faqs)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Common Questions About Our Services"
          subtitle="Answers on where we work, who we work with, and how an engagement runs."
        />

        <div className="mt-10 mx-auto max-w-3xl space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-white p-6 shadow-soft border border-slate-100">
              <h3 className="text-lg font-semibold text-ink-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              {"href" in faq && faq.href && (
                <Link href={faq.href} className="mt-2 inline-block text-sm font-semibold text-ink-900 hover:underline">Read the guide →</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

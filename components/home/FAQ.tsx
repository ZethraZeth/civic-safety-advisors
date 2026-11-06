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
      "Yes. While our primary service region is Connecticut, New York, Massachusetts, and Rhode Island, we provide virtual consulting services to mission-driven organizations throughout the United States. Many of our services—including policy review, training program development, strategic planning, and remote assessments—can be delivered effectively through virtual collaboration.",
  },
  {
    question: "Can you conduct on-site workshops for our New England school district?",
    answer:
      "Absolutely. We offer on-site training, tabletop exercises, and workshops throughout the Northeast. For organizations within our primary service region (CT, NY, MA, RI), on-site engagements are our standard approach. We can also arrange travel for on-site work anywhere in the United States when required for thorough assessments or hands-on training delivery.",
  },
  {
    question: "What types of organizations do you work with?",
    answer:
      "We specialize in serving mission-driven organizations—entities that serve the public good. This includes municipal governments and local agencies, nonprofit organizations and social services, K-12 schools and higher education institutions, healthcare facilities, faith-based organizations and houses of worship, and community centers. Our expertise is in helping organizations that serve communities, not commercial or corporate entities.",
  },
  {
    question: "How do you coordinate with local public safety agencies?",
    answer:
      "Strategic coordination with local public safety resources is central to our approach. We help organizations understand what services are already available through municipal police, fire, and emergency management agencies—then identify where private security measures genuinely add value. This approach reduces redundancy, eliminates wasted spending, and ensures your organization maintains strong partnerships with local responders.",
  },
  {
    question: "What makes your approach different from other security consultants?",
    answer:
      "We lead with strategy and coordination, not product sales. Our background in both law enforcement and emergency management policy means we understand public safety systems and how mission-driven organizations fit within them. We emphasize judgment over equipment, coordination over escalation, and practical restraint over over-securitization. You get recommendations on what not to buy, not just what to add.",
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
          subtitle="Learn more about how we serve organizations across the Northeast and beyond."
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

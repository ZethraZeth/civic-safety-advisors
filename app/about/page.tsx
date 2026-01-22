import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

export const metadata = {
  title: "About Us | Civic Safety Advisors",
  description:
    "Learn about Civic Safety Advisors' mission to provide expert security consulting to organizations that serve the public good. Dedicated to protecting what matters most.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              About Civic Safety Advisors
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Dedicated to protecting the organizations that protect our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">
            Our Mission
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
            <p>
              Civic Safety Advisors was founded with a singular purpose: to provide expert
              security consulting to organizations that serve the public good. Houses of
              worship, schools, and community organizations play vital roles in our society—and
              they deserve access to the same caliber of security expertise available to large
              corporations.
            </p>
            <p>
              We believe that every congregation, classroom, and community center should be a
              safe space. Our mission is to make professional security consulting accessible,
              practical, and effective for organizations of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 text-center">
              Our Approach
            </h2>
            <p className="mt-4 text-center text-base text-slate-600 max-w-2xl mx-auto">
              We follow a proven methodology that ensures practical, actionable results for
              every client we serve.
            </p>

            <div className="mt-12 grid gap-8">
              {approachSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500 text-white font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-2 text-base text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">
            Why Choose Civic Safety Advisors
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
            We bring specialized expertise, practical experience, and a deep understanding of
            the unique challenges facing mission-driven organizations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((reason, idx) => (
            <Card key={idx} hover>
              <h3 className="text-lg font-semibold text-ink-900">{reason.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{reason.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Let's Discuss Your Security Needs
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Schedule a free consultation to learn how we can help protect your organization.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" className="bg-brass-500 hover:bg-brass-600 focus:ring-brass-500">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const approachSteps = [
  {
    title: "Listen & Understand",
    description:
      "Every organization is unique. We start by understanding your mission, culture, concerns, and constraints.",
  },
  {
    title: "Assess & Analyze",
    description:
      "We conduct thorough assessments of your policies, physical security, and preparedness using proven methodologies.",
  },
  {
    title: "Recommend & Prioritize",
    description:
      "We deliver clear, actionable recommendations prioritized by risk level and budget considerations.",
  },
  {
    title: "Implement & Train",
    description:
      "We don't just advise—we help you implement changes and train your people to maintain security long-term.",
  },
  {
    title: "Partner & Support",
    description:
      "Security is ongoing. We remain available to support your organization as needs evolve.",
  },
];

const whyChooseUs = [
  {
    title: "Specialized Focus",
    description:
      "We work exclusively with houses of worship, schools, and public organizations—not corporate clients seeking different outcomes.",
  },
  {
    title: "Practical Experience",
    description:
      "Our recommendations are grounded in real-world experience, not theoretical frameworks.",
  },
  {
    title: "Budget-Conscious Solutions",
    description:
      "We understand nonprofit and public organization budgets. Our recommendations include options at various investment levels.",
  },
  {
    title: "Compliance Knowledge",
    description:
      "We stay current on state licensing requirements, regulatory standards, and best practices.",
  },
  {
    title: "Training Excellence",
    description:
      "Our training programs are designed for non-security professionals—your staff, volunteers, and safety team members.",
  },
  {
    title: "Partnership Approach",
    description:
      "We don't just hand you a report and leave. We partner with you to implement changes, train your teams, and build lasting security culture.",
  },
];

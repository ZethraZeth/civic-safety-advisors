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
              Strategic advisors helping organizations coordinate public safety resources with private security investments.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Advisor Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16 items-center">
          {/* Headshot */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-slate-200 flex items-center justify-center">
              <Image
                src="/assets/images/team/seth-hershman.jpg"
                alt="Seth Hershman"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">
              Seth Hershman
            </h2>
            <p className="mt-2 text-lg text-brass-600 font-semibold">
              Founder & Principal Advisor
            </p>

            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Seth Hershman brings a unique combination of law enforcement experience, emergency
                management policy expertise, and practical security operations to Civic Safety Advisors.
                His background positions him to navigate the complex intersection between public safety
                resources and private security needs.
              </p>

              <p>
                As a <strong>Senior Policy Advisor</strong> with the Connecticut Department of Emergency
                Services and Public Protection (DESPP), Seth developed and implemented comprehensive
                emergency management strategies for religious institutions, academic organizations, and
                community entities. He fostered collaborative relationships between government agencies
                and mission-driven organizations, focusing on practical safety measures that respect
                institutional culture and budget constraints.
              </p>

              <p>
                Prior to his policy work, Seth served with the <strong>Yale University Police Department</strong> for
                over six years, advancing from patrol officer to detective. This operational experience
                included emergency response, community policing, comprehensive investigations, and working
                directly with diverse institutional populations. He understands both the tactical realities
                of security operations and the importance of maintaining welcoming environments.
              </p>

              <p>
                Seth holds a <strong>Master of Science in Investigations</strong> from the University of New Haven (2024)
                and maintains a Federal Firearms License (FFL 08), providing deep expertise in regulatory
                compliance, vendor sourcing, and security coordination.
              </p>

              <p>
                Through Civic Safety Advisors, Seth focuses on helping organizations leverage existing public
                safety resources effectively before recommending private security investments—ensuring every
                dollar spent on security genuinely reduces risk rather than duplicating services already
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">
              Our Mission
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
              <p>
                Civic Safety Advisors was founded with a singular purpose: to help mission-driven
                organizations navigate the intersection between public safety resources and private
                security investments. Houses of worship, schools, and community organizations deserve
                strategic guidance that respects their mission, budget reality, and relationship with
                local public safety agencies.
              </p>
              <p>
                We believe that effective security begins with coordination, not equipment. Our mission
                is to provide judgment on what public resources can already provide, when private
                investment makes sense, and how to avoid duplication, gaps, and wasted spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section>
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
    title: "Coordinate & Assess",
    description:
      "We evaluate your relationship with public safety agencies first, then assess policies, physical security, and preparedness to identify what requires investment and what doesn't.",
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
      "We understand nonprofit and public organization budgets. You get judgment on what not to buy, what public resources can handle, and where investment actually reduces risk.",
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

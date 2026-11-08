import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

export const metadata = {
  title: "About Seth Hershman and Civic Safety Advisors",
  alternates: { canonical: "/about" },
  description:
    "Civic Safety Advisors is a security consulting firm in Branford, Connecticut, founded by Seth Hershman, a former Yale University Police detective and Connecticut DESPP policy advisor. We serve houses of worship, schools, property managers, and public organizations in Connecticut, New York, Massachusetts, and Rhode Island.",
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
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Civic Safety Advisors is a security consulting firm in Branford, Connecticut, founded by Seth Hershman, a former Yale University Police detective and Connecticut DESPP policy advisor. We assess risk, write emergency plans, and train staff for houses of worship, schools, property managers, and public organizations, and we do not sell guards, cameras, or alarm systems.
            </p>
            <p className="mt-4 text-sm"><a href="https://www.linkedin.com/in/seth-hershman-08606045/" rel="me noopener" target="_blank" className="font-semibold text-ink-900 underline">Seth Hershman on LinkedIn</a></p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-16 items-center">
            {/* Logo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative h-48 w-48">
                <Image
                  src="/assets/images/csa-logo.png"
                  alt="Civic Safety Advisors Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Mission Content */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight text-ink-900">
                Our Mission
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Civic Safety Advisors exists to help houses of worship, schools, housing providers,
                  and community organizations work out what their local public safety agencies already
                  provide and what they still need to arrange and pay for themselves. Those organizations
                  deserve advice that respects their mission, their budget, and their relationship with
                  the local police and fire departments.
                </p>
                <p>
                  Good security starts with coordination, not equipment. Our job is to give you judgment
                  on what public resources already cover, when private investment makes sense, and how to
                  avoid paying twice or leaving a gap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Advisor Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
                  Seth Hershman has worked on both sides of the line this firm sits on: as a police
                  officer and detective responding to incidents, and as a state policy advisor shaping how
                  emergency management support reaches religious institutions, schools, and community
                  organizations.
                </p>

                <p>
                  As a <strong>Senior Policy Advisor</strong> with the Connecticut Department of Emergency
                  Services and Public Protection (DESPP), Seth developed emergency management strategies
                  for religious institutions, schools, and community organizations and put them into
                  practice. Much of the work was building working relationships between state agencies and
                  the organizations they serve, with an emphasis on measures those organizations could
                  afford and would actually use.
                </p>

                <p>
                  Before that, Seth served with the <strong>Yale University Police Department</strong> for
                  over six years, moving from patrol officer to detective. The work covered emergency
                  response, community policing, investigations, and daily contact with students, staff, and
                  visitors, which is where he learned how security and an open, welcoming environment
                  can coexist.
                </p>

                <p>
                  Seth holds a <strong>Master of Science in Investigations</strong> from the University of New Haven (2024)
                  and maintains a Federal Firearms License (FFL 08), which keeps him current on regulatory
                  compliance, vendor sourcing, and security coordination.
                </p>

                <p>
                  At Civic Safety Advisors, Seth starts every engagement by finding out what public safety
                  resources the organization already has before recommending anything private. The aim is
                  that every dollar spent on security reduces risk rather than paying for something the town
                  already provides.
                </p>
              </div>
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
              Every engagement follows the same five steps.
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
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">
              Why Choose Civic Safety Advisors
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              What you get when you work with us.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Talk to Us About Your Organization
            </h2>
            <p className="mt-4 text-lg text-white/80">
              The first 30-minute call is free. Tell us what is going on and we will tell you where we would start.
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
      "We start by learning your mission, your culture, what worries you, and what you can and cannot change.",
  },
  {
    title: "Coordinate & Assess",
    description:
      "We evaluate your relationship with public safety agencies first, then assess policies, physical security, and preparedness to identify what requires investment and what doesn't.",
  },
  {
    title: "Recommend & Prioritize",
    description:
      "You get recommendations ranked by risk and by cost, so you know what to do first.",
  },
  {
    title: "Implement & Train",
    description:
      "We help you put the changes in place and train the people who will keep them working.",
  },
  {
    title: "Partner & Support",
    description:
      "We stay available as your needs, your staff, and your budget change.",
  },
];

const whyChooseUs = [
  {
    title: "One Kind of Client",
    description:
      "We work only with houses of worship, schools, housing providers, and public organizations. No corporate clients.",
  },
  {
    title: "Practical Experience",
    description:
      "Our recommendations come from police and emergency management work, not from a template.",
  },
  {
    title: "Budget-Conscious Solutions",
    description:
      "We understand nonprofit and public organization budgets. You get judgment on what not to buy, what public resources can handle, and where investment actually reduces risk.",
  },
  {
    title: "Compliance Knowledge",
    description:
      "We stay current on the licensing requirements and regulatory standards in the four states we serve.",
  },
  {
    title: "Training for Non-Specialists",
    description:
      "Our training is written for staff, volunteers, and safety team members, not for security professionals.",
  },
  {
    title: "Partnership Approach",
    description:
      "We stay after the report is delivered: helping you make the changes, training your teams, and checking back.",
  },
];

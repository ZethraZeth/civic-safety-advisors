import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  services,
  getServicesByCategory,
  categoryLabels,
  type ServiceCategory,
} from "@/lib/services";
import Link from "next/link";
import * as Icons from "lucide-react";

export const metadata = {
  title: "Security Consulting Services | Civic Safety Advisors",
  description:
    "Comprehensive security consulting services including policy review, physical security assessment, threat analysis, emergency planning, and staff training for houses of worship, schools, and nonprofits.",
};

export default function ServicesPage() {
  const categories: ServiceCategory[] = ["strategy", "policy", "physical", "emergency"];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We begin with strategy—coordinating public safety resources and private security investments.
              Policy, physical security, and training follow as execution, not the starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category) => {
        const categoryServices = getServicesByCategory(category);

        return (
          <section key={category} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                {categoryLabels[category]}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryServices.map((service) => {
                const IconComponent =
                  Icons[service.icon as keyof typeof Icons] || Icons.FileText;

                return (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <Card hover className="h-full">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brass-500/10 text-brass-600">
                            {/* @ts-ignore */}
                            <IconComponent className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-ink-900">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-sm text-slate-600">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center text-sm font-semibold text-brass-600">
                        Learn more
                        <Icons.ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* How We Work Together Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 text-center">
              Our Engagement Process
            </h2>
            <p className="mt-4 text-center text-base text-slate-600">
              We follow a structured process to ensure every engagement delivers value
            </p>

            <div className="mt-12 space-y-6">
              {engagementSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500 text-white font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-1 text-base text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl bg-ink-900 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Most clients begin with Security Strategy & Public Safety Coordination—establishing
            a clear pathway before investing in equipment or personnel. Contact us for a free initial consultation.
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              variant="primary"
              className="bg-brass-500 hover:bg-brass-600 focus:ring-brass-500"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const engagementSteps = [
  {
    title: "Initial Consultation",
    description: "Free 30-minute call to understand your needs and answer questions",
  },
  {
    title: "Proposal & Scope",
    description: "Detailed proposal with clear deliverables and pricing",
  },
  {
    title: "Assessment & Analysis",
    description: "On-site visits and comprehensive documentation review",
  },
  {
    title: "Report & Recommendations",
    description: "Comprehensive findings with prioritized action plan",
  },
  {
    title: "Implementation Support",
    description: "Guidance on executing recommendations and building capabilities",
  },
  {
    title: "Training & Follow-Up",
    description: "Staff training, drills, and ongoing support as needed",
  },
];

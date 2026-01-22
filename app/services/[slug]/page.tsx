import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import Link from "next/link";
import * as Icons from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Civic Safety Advisors",
    };
  }

  return {
    title: `${service.title} | Civic Safety Advisors`,
    description: service.fullDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(params.slug);
  const IconComponent =
    Icons[service.icon as keyof typeof Icons] || Icons.FileText;

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brass-500/10 text-brass-600">
                {/* @ts-ignore */}
                <IconComponent className="h-8 w-8" />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-3 text-lg text-slate-600">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">Overview</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900">
              What's Included
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Our {service.title.toLowerCase()} service includes the following
              deliverables:
            </p>

            <ul className="mt-6 space-y-3">
              {service.deliverables.map((deliverable, idx) => (
                <li key={idx} className="flex gap-3">
                  <Icons.CheckCircle2 className="h-6 w-6 flex-shrink-0 text-brass-600" />
                  <span className="text-base text-slate-700">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">Our Process</h2>
          <p className="mt-2 text-base text-slate-600">
            We follow a structured approach to ensure comprehensive results:
          </p>

          <div className="mt-8 space-y-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500 text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="pt-1">
                  <p className="text-base text-slate-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900">
              Related Services
            </h2>
            <p className="mt-2 text-base text-slate-600">
              These services complement {service.title.toLowerCase()} and may be of
              interest:
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService) => {
                const RelatedIcon =
                  Icons[relatedService.icon as keyof typeof Icons] || Icons.FileText;

                return (
                  <Link key={relatedService.slug} href={`/services/${relatedService.slug}`}>
                    <Card hover className="h-full">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brass-500/10 text-brass-600">
                            {/* @ts-ignore */}
                            <RelatedIcon className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-ink-900">
                            {relatedService.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {relatedService.shortDescription}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl bg-ink-900 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Request This Service
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Ready to strengthen your organization's security? Contact us to schedule a
            consultation and discuss your specific needs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              href="/contact"
              variant="primary"
              className="bg-brass-500 hover:bg-brass-600 focus:ring-brass-500"
            >
              Schedule a Consultation
            </Button>
            <Button
              href="/services"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-ink-900"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

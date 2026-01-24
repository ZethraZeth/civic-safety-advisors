import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { locations, getLocationBySlug } from "@/lib/locations";
import { industries } from "@/lib/industries";
import Link from "next/link";
import * as Icons from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    return {
      title: "Location Not Found | Civic Safety Advisors",
    };
  }

  return {
    title: `Public Safety Consulting in ${location.name} | Civic Safety Advisors`,
    description: location.metaDescription,
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-wide text-brass-600 uppercase">
              Service Area
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Public Safety Consulting in {location.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {location.description}
            </p>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            Understanding {location.name}'s Public Safety Landscape
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {location.localContext}
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900">
              Who We Serve in {location.name}
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We provide public safety consulting services to mission-driven organizations throughout {location.name}:
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {location.whoWeServe.map((org, idx) => (
                <div key={idx} className="flex gap-3">
                  <Icons.Check className="h-5 w-5 flex-shrink-0 text-brass-600" />
                  <span className="text-sm text-slate-700">{org}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-sm text-slate-600">
                Learn more about services for specific industries:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries#${industry.slug}`}
                    className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            Our Services in {location.name}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We provide comprehensive public safety consulting services to {location.name} organizations:
          </p>
          <div className="mt-8 space-y-6">
            {location.keyServices.map((service, idx) => (
              <Card key={idx}>
                <h3 className="text-lg font-semibold text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.serviceSlug}`}
                  className="mt-3 inline-flex items-center text-sm font-semibold text-brass-600 hover:text-brass-700"
                >
                  Learn more about this service
                  <Icons.ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-ink-900 hover:text-brass-600"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl bg-ink-900 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Schedule a Safety Strategy Call
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Ready to discuss public safety consulting for your {location.name} organization?
            Let's talk about how we can help you develop practical, effective security programs
            that coordinate with local resources and respect your mission.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              href="/contact"
              variant="brass"
            >
              Schedule a Consultation
            </Button>
            <Button
              href="/locations"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-ink-900"
            >
              View All Service Areas
            </Button>
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900">
              We Also Serve
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {locations
                .filter((loc) => loc.slug !== location.slug)
                .map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900 hover:border-brass-500 hover:text-brass-600 transition"
                  >
                    {loc.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

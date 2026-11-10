import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BOOKING_URL, ASSESS_URL, SITE_NAME } from "@/lib/site";
import { industries, getIndustryBySlug } from "@/lib/industries";
import { getServiceBySlug } from "@/lib/services";
import { getPostBySlug } from "@/lib/blog";
import { locationSummaries } from "@/lib/locations";
import { JsonLd, industryServiceLd, faqLd, breadcrumbLd } from "@/components/seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title: industry.heading,
      description: industry.metaDescription,
      url: `/industries/${industry.slug}`,
      images: [{ url: industry.image, alt: industry.title }],
    },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  const services = industry.keyServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s) => s !== undefined);
  const posts = industry.relatedPosts
    .map((slug) => getPostBySlug(slug))
    .filter((p) => p !== undefined);
  const others = industries.filter((i) => i.slug !== industry.slug);

  return (
    <main>
      <JsonLd
        data={[
          industryServiceLd(industry, services.map((s) => s.title)),
          faqLd(industry.faqs),
          breadcrumbLd([
            { name: "Industries", path: "/industries" },
            { name: industry.title, path: `/industries/${industry.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Link href="/industries" className="text-sm font-semibold tracking-wide text-brass-600 uppercase hover:underline">
                Industries
              </Link>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
                {industry.heading}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">{industry.answer ?? industry.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={BOOKING_URL} variant="primary">
                  Schedule a Consultation
                </Button>
                <Button href={ASSESS_URL} variant="secondary">
                  Take the Free Self-Assessment
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with and what they face */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            Why {industry.title} Need a Different Approach
          </h2>
          {industry.answer && (
            <p className="mt-4 text-base leading-7 text-slate-600">{industry.description}</p>
          )}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-ink-900">Who We Work With</h3>
            <ul className="mt-4 space-y-3">
              {industry.whoWeWorkWith.map((who) => (
                <li key={who} className="flex gap-3">
                  <Icons.CheckCircle2 className="h-6 w-6 flex-shrink-0 text-brass-600" />
                  <span className="text-base text-slate-700">{who}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink-900">Common Challenges We Address</h3>
            <ul className="mt-4 space-y-3">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3">
                  <Icons.CheckCircle2 className="h-6 w-6 flex-shrink-0 text-brass-600" />
                  <span className="text-base text-slate-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How the work runs */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900">How We Work With {industry.title}</h2>
            <div className="mt-8 space-y-6">
              {industry.approach.map((step, idx) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-500 text-white font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-1 text-base leading-7 text-slate-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">Services {industry.title} Ask For Most</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const ServiceIcon = Icons[service.icon as keyof typeof Icons] || Icons.FileText;

            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brass-500/10 text-brass-600">
                        {/* @ts-ignore */}
                        <ServiceIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-ink-900">{service.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-slate-600">
          <Link href="/services" className="font-semibold text-ink-900 underline">
            See all services
          </Link>
        </p>

        {industry.grantGuide && (
          <div className="mt-10 rounded-lg border border-brass-500/20 bg-brass-500/5 px-6 py-5">
            <h3 className="text-base font-semibold text-ink-900">Applying for a Nonprofit Security Grant?</h3>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              The federal and Connecticut programs both require a site-specific vulnerability assessment, and every item you
              request has to trace back to it.{" "}
              <Link href="/connecticut-nonprofit-security-grant" className="font-semibold text-ink-900 underline">
                Read our guide to deadlines, eligibility, and the assessment
              </Link>
              .
            </p>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">Questions {industry.title} Ask</h2>
          <dl className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {industry.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-bold text-ink-900">{faq.question}</dt>
                <dd className="mt-1.5 text-sm leading-6 text-slate-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related reading */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">Related Reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card hover className="h-full">
                  <h3 className="font-semibold text-ink-900">{post.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Where we work and other industries */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-900">Where We Work</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We work on site with {industry.title.toLowerCase()} in Connecticut, New York, Massachusetts, and Rhode Island,
              and remotely elsewhere in the United States.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {locationSummaries.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink-900 hover:border-brass-500 hover:text-brass-600 transition"
                >
                  <Icons.MapPin className="h-5 w-5 text-brass-600 flex-shrink-0" />
                  <span>Security Consulting in {location.name}</span>
                </Link>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink-900">Other Industries We Serve</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/industries/${other.slug}`}
                  className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink-900 hover:border-brass-500 hover:text-brass-600 transition"
                >
                  {other.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl bg-ink-900 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">Talk Through Your Building</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Tell us about your building and we will tell you where we would start. The first 30-minute call is free.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button href={BOOKING_URL} variant="primary" className="bg-brass-500 hover:bg-brass-600 focus:ring-brass-500">
              Schedule a Consultation
            </Button>
            <Button href="/industries" variant="secondary" className="border-white text-white hover:bg-white hover:text-ink-900">
              View All Industries
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

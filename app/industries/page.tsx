import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { industries } from "@/lib/industries";
import { getServiceBySlug } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve in CT, NY, MA, RI | Civic Safety Advisors",
  description:
    "Specialized public safety consulting for Connecticut, New York, Massachusetts, and Rhode Island. Serving houses of worship, schools, nonprofits, municipalities, and healthcare organizations with mission-focused security solutions.",
};

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Specialized security consulting for organizations with unique missions and
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, idx) => {
        const services = industry.keyServices
          .map((slug) => getServiceBySlug(slug))
          .filter((s) => s !== undefined);

        return (
          <section
            key={industry.slug}
            id={industry.slug}
            className={`scroll-mt-32 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-bold tracking-tight text-ink-900">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {industry.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-brass-700 bg-brass-500/5 border border-brass-500/20 rounded-lg px-4 py-3">
                    We serve {industry.title.toLowerCase()} throughout Connecticut, New York, Massachusetts, and Rhode Island, with virtual consulting available nationwide.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-ink-900">
                      Common Challenges We Address:
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {industry.challenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex gap-2 text-base text-slate-600">
                          <span className="text-brass-600">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-ink-900">
                      Key Services:
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center rounded-full bg-brass-500/10 px-4 py-2 text-sm font-medium text-brass-700 hover:bg-brass-500/20 transition"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Every Organization Deserves Expert Security Guidance
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              No matter what sector you serve, we're here to help you protect your
              mission, your people, and your community.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="primary"
                className="bg-brass-500 hover:bg-brass-600 focus:ring-brass-500"
              >
                Let's Talk About Your Needs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

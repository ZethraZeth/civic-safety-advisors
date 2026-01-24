import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { locations, locationSummaries } from "@/lib/locations";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Service Areas: CT, NY, MA, RI | Civic Safety Advisors",
  description:
    "Civic Safety Advisors serves mission-driven organizations throughout Connecticut, New York, Massachusetts, and Rhode Island. Virtual consultations nationwide.",
};

export default function LocationsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Service Areas
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We primarily serve mission-driven organizations across Connecticut, New York,
              Massachusetts, and Rhode Island, with virtual consulting nationwide and on-site
              engagements available anywhere in the United States upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900">
            Our Primary Service Region
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We focus on the Northeast, where we maintain strong relationships with local public
            safety agencies and understand the specific challenges facing organizations in each state.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {locationSummaries.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}`}>
              <Card hover className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brass-500/10 text-brass-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ink-900">
                      {location.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {location.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-brass-600">
                      Learn more about services in {location.abbreviation}
                      <span className="ml-1">→</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Virtual & Nationwide Services */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 text-center">
              Virtual Consulting & National Reach
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              While our primary focus is Connecticut, New York, Massachusetts, and Rhode Island,
              we provide virtual consulting services to mission-driven organizations nationwide.
              Many of our services—including policy review, training program development, and
              strategic planning—can be delivered effectively through remote collaboration.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              For organizations outside our primary region requiring on-site assessments,
              training delivery, or tabletop exercises, we arrange travel engagements anywhere
              in the United States. Our approach remains consistent: strategic coordination,
              practical recommendations, and respect for your organization's mission and budget.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="brass">
                Discuss Your Location
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-ink-900 text-center">
            Organizations We Serve
          </h2>
          <p className="mt-4 text-base text-slate-600 text-center">
            Throughout our service region, we work with mission-driven organizations that serve
            their communities:
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Municipal governments and local agencies",
              "Nonprofit organizations and social services",
              "K-12 schools, colleges, and universities",
              "Healthcare facilities and medical centers",
              "Faith-based organizations and houses of worship",
              "Community centers and civic organizations"
            ].map((org, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-brass-600 font-bold">•</span>
                <span className="text-sm text-slate-700">{org}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Discuss Your Organization's Location?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Whether you're in our primary Northeast region or need virtual consulting nationwide,
              we're here to help you develop practical, effective public safety programs.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="brass"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

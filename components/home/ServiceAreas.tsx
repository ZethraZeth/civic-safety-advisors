import { SectionHeading } from "@/components/ui/SectionHeading";
import { locationSummaries } from "@/lib/locations";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function ServiceAreas() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Areas"
          title="Serving the Northeast and Beyond"
          subtitle="Our primary focus is Connecticut, New York, Massachusetts, and Rhode Island, with virtual consulting available nationwide."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locationSummaries.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-brass-600" />
                <h3 className="text-lg font-bold text-ink-900 group-hover:text-brass-600">
                  {location.name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Public safety consulting for {location.abbreviation} municipalities, nonprofits, schools, and healthcare organizations.
              </p>
              <div className="mt-4 flex items-center text-sm font-semibold text-brass-600 group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="text-sm font-semibold text-ink-900 hover:text-brass-600"
          >
            View all service areas and virtual consulting options →
          </Link>
        </div>
      </div>
    </section>
  );
}

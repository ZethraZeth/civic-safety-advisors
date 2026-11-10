import { SectionHeading } from "@/components/ui/SectionHeading";
import { locationSummaries } from "@/lib/locations";
import Link from "next/link";
import Image from "next/image";

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
              <div className="relative h-24 w-full">
                <Image
                  src={location.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 100vw"
                  className="object-contain object-left transition group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-900 group-hover:text-brass-600">
                {location.name}
              </h3>
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

import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Houses of Worship",
    text:
      "Churches, synagogues, mosques, and temples need to stay open and welcoming. We help them do that safely.",
    image: "/assets/images/industries/worship.jpg",
    href: "/industries/houses-of-worship",
  },
  {
    title: "Schools & Educational Institutions",
    text:
      "From K-12 through higher education, we help with controlled entry, drills that do not frighten students, and staff who know the plan.",
    image: "/assets/images/industries/school.jpg",
    href: "/industries/schools-education",
  },
  {
    title: "Property Management & Housing Providers",
    text:
      "Staff who work alone, resident and applicant interactions, and multi-site portfolios. We assess employee safety and property security together.",
    image: "/assets/images/industries/property.jpg",
    href: "/industries/property-management-housing",
  },
  {
    title: "Nonprofits & Public Organizations",
    text:
      "Community centers, libraries, and social service agencies run open buildings with small staffs and tight budgets.",
    image: "/assets/images/industries/nonprofit.jpg",
    href: "/industries/nonprofits-public-organizations",
  },
];

export function IndustriesWeServe() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Dedicated to organizations that serve others"
          subtitle="Security programs that protect people and mission without turning your space into a fortress."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl bg-white shadow-soft border border-slate-100 overflow-hidden">
              <div className="relative h-44">
                <Image src={i.image} alt="" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-ink-900">{i.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{i.text}</p>
                <Link href={i.href} className="mt-4 inline-block text-sm font-semibold text-ink-900 hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

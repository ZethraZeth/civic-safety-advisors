import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Building, GraduationCap, Heart, Church, Users } from "lucide-react";

const organizationTypes = [
  {
    title: "Municipal Governments",
    description: "Local agencies and public safety departments",
    Icon: Building,
  },
  {
    title: "Nonprofit Organizations",
    description: "Social services and community organizations",
    Icon: Heart,
  },
  {
    title: "Educational Institutions",
    description: "K-12 schools, colleges, and universities",
    Icon: GraduationCap,
  },
  {
    title: "Healthcare Facilities",
    description: "Medical centers and healthcare providers",
    Icon: Users,
  },
  {
    title: "Faith-Based Organizations",
    description: "Houses of worship and religious communities",
    Icon: Church,
  },
  {
    title: "Community Centers",
    description: "Civic organizations and social service agencies",
    Icon: MapPin,
  },
];

const states = [
  { name: "Connecticut", abbr: "CT" },
  { name: "New York", abbr: "NY" },
  { name: "Massachusetts", abbr: "MA" },
  { name: "Rhode Island", abbr: "RI" },
];

export function WhoWeServe() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Mission-Driven Organizations Across the Northeast"
          subtitle="We specialize in serving organizations that serve their communities—from municipal agencies to nonprofits, schools, and faith-based institutions."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {organizationTypes.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-xl bg-white p-6 shadow-soft border border-slate-100"
            >
              <Icon className="h-6 w-6 text-brass-600" aria-hidden="true" />
              <h3 className="mt-4 text-base font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-brass-500/5 border border-brass-500/20 p-8 text-center">
          <h3 className="text-xl font-bold text-ink-900">
            Our Primary Service Region
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {states.map((state) => (
              <div
                key={state.abbr}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 shadow-soft"
              >
                <MapPin className="h-5 w-5 text-brass-600" />
                <span className="font-semibold text-ink-900">{state.name}</span>
                <span className="text-slate-500">({state.abbr})</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600 max-w-2xl mx-auto">
            We also provide virtual consultations nationwide and arrange on-site engagements
            anywhere in the United States upon request.
          </p>
        </div>
      </div>
    </section>
  );
}

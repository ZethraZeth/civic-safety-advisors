import Link from "next/link";
import * as Icons from "lucide-react";
import { homeServices } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

function getIcon(name: string) {
  const AnyIcon = (Icons as any)[name] as React.ComponentType<any> | undefined;
  return AnyIcon ?? Icons.Shield;
}

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="How we help protect your organization"
          subtitle="We begin by aligning public safety resources with your private security efforts—establishing strategy before execution. The services below support that coordination, not the other way around."
        />

        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-600">
          Policy and compliance establish the framework. Physical security and training execute within it. Every recommendation reflects what makes strategic sense—not what can be sold.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <Icon className="h-6 w-6 text-ink-900" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-ink-900 group-hover:underline">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {s.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="text-sm font-semibold text-ink-900 hover:underline"
          >
            Explore all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

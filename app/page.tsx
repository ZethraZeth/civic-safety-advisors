import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { IndustriesWeServe } from "@/components/home/IndustriesWeServe";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { RecentInsights } from "@/components/home/RecentInsights";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/slider/slide-1.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-brass-500 uppercase">
              Civic Safety Advisors
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Expert security consulting for organizations that serve our communities
            </h1>
            <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
              Civic Safety Advisors provides comprehensive security assessments, policy development,
              and training programs for houses of worship, schools, and public organizations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" className="justify-center">
                Schedule a Consultation
              </Button>
              <Button href="/services" variant="secondary" className="justify-center border-white text-white hover:bg-white hover:text-ink-900">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustIndicators />
      <ServicesOverview />
      <IndustriesWeServe />
      <WhyChooseUs />
      <RecentInsights />
      <CTABanner />
    </main>
  );
}

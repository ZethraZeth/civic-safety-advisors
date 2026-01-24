import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { IndustriesWeServe } from "@/components/home/IndustriesWeServe";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQ } from "@/components/home/FAQ";
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
            <p className="text-sm font-semibold tracking-wide text-brass-500 uppercase font-serif">
              Civic Safety Advisors
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Practical Security Planning & Preparedness for Houses of Worship, Schools, and Public Organizations
            </h1>
            <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
              We help mission-driven organizations identify real risks, clarify response responsibilities, and make defensible security decisions—before spending money on guards, cameras, or training.
            </p>
            <p className="mt-4 text-sm font-bold text-brass-500">
              Serving Connecticut, New York, Massachusetts, and Rhode Island
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="/contact"
                variant="brass"
                className="justify-center"
              >
                Schedule a Consultation
              </Button>
              <Button
                href="/services"
                variant="secondary"
                className="justify-center bg-white/12 border-white/60 text-white hover:bg-white/22 hover:border-white focus:ring-white/50"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustIndicators />
      <WhoWeServe />
      <ServicesOverview />
      <ServiceAreas />
      <IndustriesWeServe />
      <WhyChooseUs />
      <FAQ />
      <RecentInsights />
      <CTABanner />
    </main>
  );
}

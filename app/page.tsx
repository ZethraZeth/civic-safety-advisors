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
import { AssessmentPromo } from "@/components/home/AssessmentPromo";
import { ScrollStatement } from "@/components/home/ScrollStatement";

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

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-brass-500 uppercase font-serif">
                Civic Safety Advisors
              </p>
              <h1 className="mt-3 text-white">
                <span className="block text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                  Practical Security Planning &amp; Preparedness
                </span>
                <span className="mt-4 block text-lg font-normal leading-snug text-white/80 sm:text-xl">
                  for <span className="font-semibold text-brass-500">houses of worship</span>, <span className="font-semibold text-brass-500">schools</span>, <span className="font-semibold text-brass-500">property managers</span>, and <span className="font-semibold text-brass-500">public organizations</span>
                </span>
              </h1>
              <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
                We help mission-driven organizations identify real risks, clarify response responsibilities, and make defensible security decisions—before spending money on guards, cameras, or training.
              </p>
              <p className="mt-4 text-sm font-bold text-brass-500">
                Serving Connecticut, New York, Massachusetts, and Rhode Island
              </p>
              <div className="mt-8">
                <Button
                  href="/contact"
                  variant="secondary"
                  className="justify-center bg-white/12 border-white/60 text-white hover:bg-white/22 hover:border-white focus:ring-white/50"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <AssessmentPromo />
            </div>
          </div>
        </div>
      </section>

      <TrustIndicators />
      <ScrollStatement />
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

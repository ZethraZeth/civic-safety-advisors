import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="py-14 sm:py-16 bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to strengthen your organization&apos;s security?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/75">
              Schedule a confidential consultation to discuss your security needs.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/contact" variant="brass">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

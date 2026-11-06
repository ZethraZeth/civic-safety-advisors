import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-brass-600 font-serif">404</p>
        <h1 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">That page does not exist</h1>
        <p className="mt-4 text-slate-600">The address may have changed. These are the pages people usually want.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/assessment" variant="brass">Free Security Self-Assessment</Button>
          <Button href="/services" variant="secondary">Services</Button>
          <Button href="/contact" variant="secondary">Contact</Button>
        </div>
        <p className="mt-10 text-sm text-slate-500">Or go back to the <Link href="/" className="underline">home page</Link>.</p>
      </div>
    </main>
  );
}

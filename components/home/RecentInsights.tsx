import Image from "next/image";
import Link from "next/link";
import { recentPosts, categoryLabels } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RecentInsights() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="From our blog"
          subtitle="Practical security guidance and industry insights."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {recentPosts.map((p) => (
            <article key={p.slug} className="rounded-xl bg-white shadow-soft border border-slate-100 overflow-hidden">
              <div className="relative h-44">
                <Image src={p.featuredImage} alt="" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-brass-600 uppercase tracking-wide">
                  {categoryLabels[p.category]}
                </div>
                <h3 className="mt-2 text-base font-bold text-ink-900">
                  <Link href={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`} className="mt-4 inline-block text-sm font-semibold text-ink-900 hover:underline">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/blog" className="text-sm font-semibold text-ink-900 hover:underline">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

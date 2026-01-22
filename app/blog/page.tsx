import { recentPosts } from "@/lib/blog";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Security Insights & Resources | Civic Safety Advisors Blog",
  description:
    "Practical security guidance, industry updates, and expert perspectives on protecting houses of worship, schools, and community organizations.",
};

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Security Insights & Resources
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Practical guidance, industry updates, and expert perspectives on protecting
              your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <BlogGrid posts={recentPosts} />
      </section>
    </main>
  );
}

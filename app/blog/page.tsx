import { recentPosts } from "@/lib/blog";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Security Planning Blog",
  alternates: { canonical: "/blog" },
  description:
    "Practical security planning guidance for houses of worship, schools, housing providers, nonprofits, and municipalities in Connecticut, New York, Massachusetts, and Rhode Island.",
};

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Security Planning Blog
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Emergency plans, hiring guards, what to fix before buying cameras, and where a house
              of worship should start.
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

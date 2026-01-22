import { recentPosts, categoryLabels, getPostBySlug } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return recentPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Civic Safety Advisors Blog",
    };
  }

  return {
    title: `${post.title} | Civic Safety Advisors Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts from the same category
  const relatedPosts = recentPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main>
      {/* Post Header */}
      <article className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-4">
            <span className="inline-flex rounded-full bg-brass-500/10 px-3 py-1 text-sm font-medium text-brass-700">
              {categoryLabels[post.category]}
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Featured Image */}
      <div className="relative aspect-[21/9] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Post Content */}
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="prose prose-slate prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-ink-900">
              Related Articles
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl bg-ink-900 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Need Expert Security Guidance?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Contact us to discuss how we can help strengthen your organization's
            security program.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              href="/contact"
              variant="primary"
              className="bg-brass-500 hover:bg-brass-600 focus:ring-brass-500"
            >
              Schedule a Consultation
            </Button>
            <Button
              href="/blog"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-ink-900"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

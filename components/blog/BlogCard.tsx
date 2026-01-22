import Link from "next/link";
import Image from "next/image";
import { BlogPost, categoryLabels } from "@/lib/blog";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group h-full overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex rounded-full bg-brass-500/10 px-3 py-1 text-xs font-medium text-brass-700">
              {categoryLabels[post.category]}
            </span>
          </div>

          <h3 className="text-xl font-bold text-ink-900 group-hover:text-brass-600 transition-colors">
            {post.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}

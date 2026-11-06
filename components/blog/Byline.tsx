import Image from "next/image";
import Link from "next/link";
import { FOUNDER } from "@/lib/site";

function fmt(d: string) {
  return new Date(d + (d.length === 10 ? "T12:00:00" : "")).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/** Author line with credentials, shown on every post. */
export function Byline({ publishedAt, updatedAt, readTime }: { publishedAt: string; updatedAt?: string; readTime?: number }) {
  return (
    <div className="mt-6 flex items-center gap-4">
      <Link href="/about" className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200">
        <Image src={FOUNDER.image} alt={FOUNDER.name} fill className="object-cover" sizes="48px" />
      </Link>
      <div className="text-sm">
        <p className="font-semibold text-ink-900">
          <Link href="/about" className="hover:underline">{FOUNDER.name}</Link>
          <span className="font-normal text-slate-600"> · {FOUNDER.shortCredentials}</span>
        </p>
        <p className="text-slate-600">
          <time dateTime={publishedAt}>Published {fmt(publishedAt)}</time>
          {updatedAt && updatedAt !== publishedAt && <> · <time dateTime={updatedAt}>Updated {fmt(updatedAt)}</time></>}
          {readTime ? <> · {readTime} min read</> : null}
        </p>
      </div>
    </div>
  );
}

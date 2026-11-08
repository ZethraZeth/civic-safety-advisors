import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";
import { recentPosts } from "@/lib/blog";
import { locations } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/assessment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/connecticut-nonprofit-security-grant`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/locations`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];
  const svc = services.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  const loc = locations.map((l) => ({ url: `${SITE_URL}/locations/${l.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 }));
  const posts = recentPosts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.updatedAt ?? p.publishedAt), changeFrequency: "yearly" as const, priority: 0.6 }));
  return [...fixed, ...svc, ...loc, ...posts];
}

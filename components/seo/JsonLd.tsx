import { SITE_URL, SITE_NAME, PHONE_E164, EMAIL, CITY, FOUNDER, DESCRIPTION, absoluteUrl } from "@/lib/site";

/** Renders one schema.org JSON-LD block. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#seth-hershman`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/assets/images/csa-logo.png"),
    image: absoluteUrl("/og.jpg"),
    description: DESCRIPTION,
    telephone: PHONE_E164,
    email: EMAIL,
    address: { "@type": "PostalAddress", addressLocality: CITY, addressRegion: "CT", addressCountry: "US" },
    areaServed: [
      { "@type": "State", name: "Connecticut" },
      { "@type": "State", name: "New York" },
      { "@type": "State", name: "Massachusetts" },
      { "@type": "State", name: "Rhode Island" },
    ],
    founder: { "@id": PERSON_ID },
    knowsAbout: [
      "security risk assessment", "workplace violence prevention", "emergency response planning",
      "house of worship security", "school security", "property management security",
      "Nonprofit Security Grant Program",
    ],
    priceRange: "$$",
    ...(FOUNDER.linkedin ? { sameAs: [FOUNDER.linkedin] } : {}),
  };
}

export function personLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: FOUNDER.name,
    jobTitle: FOUNDER.title,
    description: FOUNDER.credentials,
    image: absoluteUrl(FOUNDER.image),
    url: `${SITE_URL}/about`,
    worksFor: { "@id": ORG_ID },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of New Haven" },
    ],
    knowsAbout: ["law enforcement", "security policy", "emergency management", "threat and vulnerability assessment"],
    ...(FOUNDER.linkedin ? { sameAs: [FOUNDER.linkedin] } : {}),
  };
}

export function serviceLd(s: { slug: string; title: string; shortDescription: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.shortDescription,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: ["Connecticut", "New York", "Massachusetts", "Rhode Island"],
    serviceType: "Security consulting",
  };
}

export function articleLd(p: { slug: string; title: string; excerpt: string; featuredImage: string; publishedAt: string; updatedAt?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.excerpt,
    image: absoluteUrl(p.featuredImage),
    datePublished: p.publishedAt,
    dateModified: p.updatedAt ?? p.publishedAt,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
  };
}

export function faqLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

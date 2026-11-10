import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd, organizationLd, personLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, DESCRIPTION, OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Security Consulting for Houses of Worship, Schools & Property Managers in Connecticut | Civic Safety Advisors",
    template: "%s | Civic Safety Advisors",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: "Civic Safety Advisors",
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Civic Safety Advisors" }],
  },
  twitter: { card: "summary_large_image", title: "Civic Safety Advisors", description: DESCRIPTION, images: [OG_IMAGE] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts used by the template styles (body: Muli, headings: Roboto Slab) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,600,700|Roboto+Slab:300,400,500&display=swap" />
        {/* Juristic template CSS, pruned to the rules this site uses (was 12 files, 440 KB). */}
        <link rel="stylesheet" href="/assets/css/template.css" />
      </head>
      <body>
        <JsonLd data={[organizationLd(), personLd()]} />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

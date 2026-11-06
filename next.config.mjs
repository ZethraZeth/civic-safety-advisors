/** @type {import('next').NextConfig} */
const ASSESS_ORIGIN = "https://assess.civicsafetyadvisors.com";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 2000],
  },
  // /assessment is this site's landing page. Everything under it (/assessment/start, /assessment/assess/REF,
  // /assessment/api/*, /assessment/_next/*) is the assessment app, served by the proxy below.
  // ?via=site tells the app the request came through the main site, which puts it in teaser mode.
  async rewrites() {
    return {
      afterFiles: [
        { source: "/assessment/:path+", destination: `${ASSESS_ORIGIN}/assessment/:path+?via=site` },
      ],
    };
  },
};

export default nextConfig;

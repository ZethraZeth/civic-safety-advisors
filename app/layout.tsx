import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Public Safety Consulting in CT, NY, MA, RI | Civic Safety Advisors",
  description:
    "Strategic public safety consulting for Connecticut, New York, Massachusetts, and Rhode Island. Serving municipalities, nonprofits, schools, and healthcare organizations with security strategy, emergency planning, and training.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Juristic template CSS (legal-firm look) */}
        <link rel="stylesheet" href="/assets/css/themify-icons.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick-theme.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.transitions.css" />
        <link rel="stylesheet" href="/assets/css/jquery.fancybox.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

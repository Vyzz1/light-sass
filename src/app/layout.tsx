import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "A simple and elegant landing page template for SaaS products",
  openGraph: {
    title: "Light Saas Landing Page",
    description: "A simple and elegant landing page template for SaaS products",
    url: "https://light-sass-landing-two.vercel.app",
    siteName: "Light Saas Landing Page",
    type: "website",
    locale: "en_US",

    images: [
      {
        url: "https://res.cloudinary.com/dl8h3byxa/image/upload/v1748486659/Screenshot_3_gyzdud.png",
        width: 1200,
        height: 630,
        alt: "Light Saas Landing Page",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Light Saas Landing Page",
    description: "A simple and elegant landing page template for SaaS products",

    images: [
      "https://res.cloudinary.com/dl8h3byxa/image/upload/v1748486659/Screenshot_3_gyzdud.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}

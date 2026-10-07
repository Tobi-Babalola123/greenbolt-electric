import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const stackSansNotch = localFont({
  src: [
    {
      path: "./fonts/StackSansNotch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/StackSansNotch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title:
    "Greenbolt Electric | Electrician & Electrical Services in Spicewood, TX",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  description:
    "Greenbolt Electric is a family-owned electrical service company providing reliable electrical repairs, panel upgrades, lighting, remodeling and specialty electrical services throughout Spicewood and the Highland Lakes area of Texas.",

  keywords: [
    "Greenbolt Electric",
    "Greenbolt Electric Spicewood",
    "Greenbolt Electric Texas",
    "electrician Spicewood TX",
    "electrician Spicewood Texas",
    "electrical contractor Spicewood TX",
    "electrical services Spicewood TX",
    "electrician Highland Lakes TX",
    "electrical contractor Highland Lakes",
    "electrical services Highland Lakes",
    "electrician Lakeway TX",
    "electrician Marble Falls TX",
    "electrician Horseshoe Bay TX",
    "electrician Lake Travis TX",
    "residential electrician Texas",
    "residential electrical services",
    "electrical repairs Texas",
    "electrical repair Spicewood TX",
    "panel upgrades Texas",
    "electrical panel upgrade Spicewood",
    "lighting installation Texas",
    "lighting and fixtures Spicewood",
    "home electrical contractor Texas",
    "home electrical repairs",
    "remodeling electrical services",
    "electrical work for remodeling",
    "outdoor electrical services",
    "specialty electrical services",
    "local electrician Texas",
    "family owned electrician Texas",
    "licensed electrician Spicewood",
    "electrical contractor Highland Lakes TX",
    "electrician near Spicewood TX",
  ],

  authors: [
    {
      name: "Greenbolt Electric",
    },
  ],

  creator: "Greenbolt Electric",
  publisher: "Greenbolt Electric",
  applicationName: "Greenbolt Electric",

  category: "Electrical Services",

  metadataBase: new URL("https://greenboltelectric.com"),

  openGraph: {
    title: "Greenbolt Electric | Reliable Electrical Services in Spicewood, TX",

    description:
      "Family-owned electrical service for homes, properties and specialty projects throughout Spicewood and the Highland Lakes area of Texas.",

    url: "https://greenboltelectric.com",

    siteName: "Greenbolt Electric",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Greenbolt Electric | Electrician & Electrical Services in Spicewood, TX",

    description:
      "Family-owned electrical service providing repairs, panel upgrades, lighting, remodeling and specialty electrical services throughout the Highland Lakes area.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export const viewport: Viewport = {
  themeColor: "#0F2744",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={stackSansNotch.variable}>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

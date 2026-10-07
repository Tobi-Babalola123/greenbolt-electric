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
    "CLP Equipment Limited | Construction & Heavy Equipment in Kingston, TN",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  description:
    "CLP Equipment Limited provides construction, mining, road building, forestry and material handling equipment, parts and service solutions in Kingston, Tennessee.",

  keywords: [
    "CLP Equipment Limited",
    "CLP Equipment",
    "CLP Equipment Kingston TN",
    "CLP Equipment Tennessee",
    "heavy equipment Kingston TN",
    "construction equipment Kingston TN",
    "construction equipment Tennessee",
    "heavy machinery Tennessee",
    "heavy equipment dealer Tennessee",
    "construction equipment dealer Tennessee",
    "construction machinery Tennessee",
    "excavators Tennessee",
    "wheel loaders Tennessee",
    "dozers Tennessee",
    "mining equipment Tennessee",
    "mining machinery Tennessee",
    "road construction equipment Tennessee",
    "road building equipment Tennessee",
    "asphalt equipment Tennessee",
    "material handling equipment Tennessee",
    "forestry equipment Tennessee",
    "drilling equipment Tennessee",
    "crushing and screening equipment Tennessee",
    "equipment parts Tennessee",
    "heavy equipment parts Tennessee",
    "equipment service Tennessee",
    "heavy equipment service Tennessee",
    "construction equipment parts",
    "construction equipment service",
    "industrial equipment Tennessee",
    "commercial equipment Tennessee",
    "equipment rental Tennessee",
    "Kingston TN equipment dealer",
    "Roane County equipment dealer",
    "East Tennessee heavy equipment",
  ],

  authors: [
    {
      name: "CLP Equipment Limited",
    },
  ],

  creator: "CLP Equipment Limited",
  publisher: "CLP Equipment Limited",
  applicationName: "CLP Equipment Limited",

  category: "Construction & Heavy Equipment",

  metadataBase: new URL("https://clpequipment.com"),

  openGraph: {
    title: "CLP Equipment Limited | Construction & Heavy Equipment",

    description:
      "Construction, mining, road building, forestry and material handling equipment, parts and service solutions from CLP Equipment Limited in Kingston, Tennessee.",

    url: "https://clpequipment.com",

    siteName: "CLP Equipment Limited",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "CLP Equipment Limited | Heavy Equipment & Construction Equipment",

    description:
      "Explore construction, mining, road building, forestry and material handling equipment, parts and service solutions from CLP Equipment Limited.",
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

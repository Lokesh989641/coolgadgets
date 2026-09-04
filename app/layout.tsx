import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://coolgadgets-mu.vercel.app"),

  title: {
    default: "CoolGadgets — Discover Cool & Useful Products",
    template: "%s | CoolGadgets",
  },

  verification: {
    google: "1vqs3puUME3tuvpFAiMnoyZUySBFVubCaWVy_noi0lU",
  },

  description:
    "Discover cool gadgets, useful accessories, smart home products, travel essentials and unique finds worth knowing about.",

  keywords: [
    "cool gadgets",
    "useful gadgets",
    "best gadgets",
    "interesting products",
    "Amazon gadgets",
    "gadgets India",
    "cool products",
    "tech accessories",
    "home gadgets",
    "travel gadgets",
    "mobile accessories",
  ],

  authors: [{ name: "CoolGadgets" }],
  creator: "CoolGadgets",
  publisher: "CoolGadgets",

  alternates: {
    canonical: "https://coolgadgets-mu.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://coolgadgets-mu.vercel.app/",
    siteName: "CoolGadgets",
    title: "CoolGadgets — Discover Cool & Useful Products",
    description:
      "Discover cool gadgets, useful accessories and unique products worth knowing about.",
  },

  twitter: {
    card: "summary_large_image",
    title: "CoolGadgets — Discover Cool & Useful Products",
    description:
      "Discover cool gadgets, useful accessories and unique products worth knowing about.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        <GoogleAnalytics gaId="G-XYNQ6T7V3M" />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Look Legit. Get More Calls. | SharpSite",
  description:
    "We build websites that make you look legit and bring in more customers. $950 flat fee. Live in 5–7 days. No tech skills needed.",
  keywords: [
    "small business website",
    "affordable web design",
    "mobile web design",
    "local service websites",
    "website for plumbers",
    "contractor website builder",
    "flat fee web design",
    "websites that get calls",
  ],
  authors: [{ name: "SharpSite" }],
  openGraph: {
    title: "Look Legit. Get More Calls.",
    description:
      "SharpSite builds $950 websites for real businesses. Fast, clean, mobile-ready. Stop losing jobs to competitors with better websites.",
    type: "website",
    url: "https://www.sharpsite.co",
    siteName: "SharpSite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Look Legit. Get More Calls. | SharpSite",
    description:
      "Mobile-friendly websites for service businesses. Built fast, priced right, and built to bring in leads.",
      
  },
  icons: {
    icon: "/favicon.ico", 
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}

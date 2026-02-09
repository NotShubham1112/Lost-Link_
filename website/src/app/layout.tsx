import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Lost-Link | Secure P2P Local Network Messaging",
  description: "Chat securely without internet. Lost-Link offers peer-to-peer, end-to-end encrypted messaging for local networks.",
  keywords: ["P2P", "Local Network", "Messaging", "Secure", "Offline", "Chat", "Lost-Link"],
  authors: [{ name: "Shubham", url: "https://github.com/NotShubham1112" }],
  openGraph: {
    title: "Lost-Link | Secure P2P Local Network Messaging",
    description: "Chat securely without internet. Lost-Link offers peer-to-peer, end-to-end encrypted messaging for local networks.",
    url: "https://github.com/NotShubham1112/Lost-Link",
    siteName: "Lost-Link",
    locale: "en_US",
    type: "website",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

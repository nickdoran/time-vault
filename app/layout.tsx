import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Time Vault — The Ultimate Watch Guardian",
  description:
    "A revolutionary portable watch case combining security, self-winding technology, and luxury craftsmanship. Fingerprint lock, GPS tracking, and premium materials. Join the waitlist.",
  keywords: [
    "watch case",
    "watch winder",
    "portable watch case",
    "watch security",
    "luxury watch accessory",
    "GPS watch case",
    "fingerprint watch case",
  ],
  openGraph: {
    title: "Time Vault — The Ultimate Watch Guardian",
    description:
      "Portable. Secure. Self-winding. The world's most advanced watch case.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-vault-black text-vault-text font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

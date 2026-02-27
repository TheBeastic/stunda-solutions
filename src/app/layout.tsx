import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stunda Solutions | Odoo ERP Excellentie",
  description: "Premium IT-consultancybedrijf gespecialiseerd in razendsnelle Odoo ERP implementaties. Ontgrendel uw zakelijk potentieel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

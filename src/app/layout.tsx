import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stunda.be"),
  title: {
    default: "Stunda Solutions | Odoo ERP Implementatie Partner België",
    template: "%s | Stunda Solutions",
  },
  description:
    "Stunda Solutions is uw Odoo ERP implementatie partner in België. Van ROI analyse tot go-live: wij stroomlijnen uw bedrijfsprocessen met bewezen methodologie en meetbaar resultaat.",
  keywords: [
    "Odoo ERP implementatie",
    "Odoo consultant België",
    "Odoo partner Vlaanderen",
    "Business proces optimalisatie",
    "ERP implementatie België",
    "Odoo ROI analyse",
    "Odoo WMS",
    "Odoo CRM",
    "Odoo boekhouding",
    "ERP consultant Limburg",
    "Odoo Nederland",
    "Odoo implementatie partner",
  ],
  authors: [{ name: "Stunda Solutions" }],
  creator: "Stunda Solutions",
  publisher: "Stunda Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://stunda.be" },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://stunda.be",
    siteName: "Stunda Solutions",
    title: "Stunda Solutions | Odoo ERP Implementatie Partner België",
    description:
      "Uw partner voor razendsnelle, succesvolle Odoo ERP implementaties. Van procesanalyse tot go-live in Vlaanderen en Nederland.",
  },
  other: {
    "geo.region": "BE-VLI",
    "geo.placename": "Limburg, Vlaanderen",
    "geo.position": "50.9311;5.3378",
    ICBM: "50.9311, 5.3378",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://stunda.be/#organization",
      name: "Stunda Solutions",
      url: "https://stunda.be",
      telephone: "+32469732933",
      email: "info@stunda.be",
      description:
        "Premium Odoo ERP implementatie partner gespecialiseerd in bedrijfsprocesoptimalisatie voor KMO's in België en Nederland.",
      areaServed: [
        { "@type": "Country", name: "België" },
        { "@type": "Country", name: "Nederland" },
        { "@type": "AdministrativeArea", name: "Vlaanderen" },
        { "@type": "AdministrativeArea", name: "Limburg" },
      ],
      knowsAbout: [
        "Odoo ERP",
        "Business Process Optimization",
        "ERP Implementation",
        "WMS",
        "CRM",
        "MRP",
        "Business Intelligence",
      ],
      founder: {
        "@type": "Person",
        name: "Arda Yatmaz",
        jobTitle: "Founder & Odoo Expert",
        url: "https://www.linkedin.com/in/arda-yatmaz-67a02328a",
      },
      sameAs: [
        "https://www.linkedin.com/company/stunda-solutions/",
      ],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://stunda.be/#website",
      url: "https://stunda.be",
      name: "Stunda Solutions",
      publisher: { "@id": "https://stunda.be/#organization" },
      inLanguage: "nl",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

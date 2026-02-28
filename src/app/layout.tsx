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
    "Stunda Solutions: uw Odoo ERP partner in België. Wij stroomlijnen bedrijfsprocessen van ROI-analyse tot go-live met bewezen resultaat.",
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
      "Uw partner voor succesvolle Odoo ERP implementaties in Vlaanderen en Nederland. Van procesanalyse tot go-live.",
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
        "https://www.linkedin.com/company/stundasolutions/",
      ],
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Odoo ERP Diensten",
        itemListElement: [
          {
            "@type": "Service",
            name: "Odoo ERP Implementatie",
            description: "Volledige Odoo ERP implementatie van procesanalyse tot go-live, inclusief configuratie, data-migratie en maatwerk.",
            url: "https://stunda.be/methode/implementatie",
            provider: { "@id": "https://stunda.be/#organization" },
          },
          {
            "@type": "Service",
            name: "Odoo Voorraad & WMS",
            description: "Warehouse management met barcode scanning, picking strategieën en real-time voorraadbeheer.",
            url: "https://stunda.be/odoo-modules/voorraad-en-wms",
          },
          {
            "@type": "Service",
            name: "Odoo Financiën & Boekhouding",
            description: "Geautomatiseerde boekhouding met bankkoppelingen, facturatie, BTW-aangiften en financiële rapportages.",
            url: "https://stunda.be/odoo-modules/financien",
          },
          {
            "@type": "Service",
            name: "Odoo CRM & Verkoop",
            description: "Lead management, verkooppijplijn, offertes en forecasting in één geïntegreerd CRM-systeem.",
            url: "https://stunda.be/odoo-modules/crm-en-verkoop",
          },
          {
            "@type": "Service",
            name: "Odoo Productie (MRP)",
            description: "Manufacturing Resource Planning met werkorders, stuklijsten en kwaliteitscontrole.",
            url: "https://stunda.be/odoo-modules/productie",
          },
          {
            "@type": "Service",
            name: "Odoo ROI Analyse",
            description: "Gratis procesanalyse en ROI-berekening per Odoo module voor meetbare investeringsbeslissingen.",
            url: "https://stunda.be/methode/roi-analyse",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://stunda.be/#website",
      url: "https://stunda.be",
      name: "Stunda Solutions",
      publisher: { "@id": "https://stunda.be/#organization" },
      inLanguage: "nl",
      dateModified: new Date().toISOString().split("T")[0],
    },
    {
      "@type": "FAQPage",
      "@id": "https://stunda.be/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wat doet Stunda Solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stunda Solutions is een premium Odoo ERP implementatie partner in België. Wij helpen KMO's hun bedrijfsprocessen te optimaliseren met Odoo modules voor voorraadbeheer, boekhouding, CRM, productie, HR en business intelligence.",
          },
        },
        {
          "@type": "Question",
          name: "In welke regio is Stunda Solutions actief?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stunda Solutions is gevestigd in Limburg, Vlaanderen en bedient klanten in heel België en Nederland.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe verloopt een Odoo ERP implementatie bij Stunda Solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Onze bewezen methode bestaat uit 6 fasen: ROI Analyse, Project Kick-off, Implementatie, Go-Live, Tweede Uitrol en Voortgangsrapport. Elke fase wordt begeleid door een dedicated SPOC.",
          },
        },
        {
          "@type": "Question",
          name: "Biedt Stunda Solutions een gratis audit aan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, Stunda Solutions biedt een gratis Odoo Readiness Audit aan. Hierbij analyseren wij uw huidige bedrijfsprocessen en berekenen we de verwachte ROI per Odoo module.",
          },
        },
      ],
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

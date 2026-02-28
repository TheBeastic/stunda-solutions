import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Odoo Voorraad & WMS | Magazijnbeheer en Voorraadbeheer",
    description: "Optimaliseer uw magazijn met Odoo WMS. Real-time voorraadbeheer, barcode scanning, picking strategieën en naadloze integratie. Odoo partner in België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Odoo Financiën & Boekhouding | Geautomatiseerde Administratie",
    description: "Stroomlijn uw financiële administratie met Odoo. Automatische facturatie, bankkoppelingen, BTW-aangiften en real-time financiële rapportages. Odoo consultant België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

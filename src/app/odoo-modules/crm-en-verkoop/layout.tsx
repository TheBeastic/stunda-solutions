import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Odoo CRM & Verkoop | Lead Management en Pipeline",
    description: "Beheer uw volledige verkooppijplijn met Odoo CRM. Lead scoring, offertes, forecasting en naadloze integratie met boekhouding. ERP implementatie partner België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

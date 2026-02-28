import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Odoo Business Intelligence | Data-analyse en Rapportage",
    description: "Maak betere beslissingen met Odoo BI. Cross-module rapportage, aangepaste dashboards en real-time data-analyse. Business Intelligence consultant België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

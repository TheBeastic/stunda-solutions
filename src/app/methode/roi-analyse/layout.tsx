import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ROI Analyse | Odoo ERP Investering Rendement Berekenen",
    description: "Bereken de return on investment van uw Odoo ERP implementatie. Procesanalyse, module selectie en budgettering voor een meetbaar resultaat. Gratis ROI analyse België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Voortgangsrapport | Odoo ERP Evaluatie en Groeistrategie",
    description: "Periodieke evaluatie van uw Odoo ROI met strategische roadmap voor continue groei. Uw lange-termijn Odoo ERP partner in Vlaanderen en Nederland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

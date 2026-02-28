import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Odoo Project Management | Projectplanning en Taakbeheer",
    description: "Organiseer projecten efficiënt met Odoo. Gantt-charts, taakbeheer, tijdsregistratie en klantportaal. Uw Odoo projectmanagement partner in België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

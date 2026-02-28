import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Go-Live | Odoo ERP Livegang en Eindgebruiker Training",
    description: "Een naadloze Odoo go-live met eindgebruikerstraining, floor support en cutover-planning. Minimale downtime, maximale adoptie. ERP go-live specialist België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

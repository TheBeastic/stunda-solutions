import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Kick-off | Stakeholder Alignment en Odoo Training",
    description: "Start uw Odoo implementatie met een gestructureerde kick-off. Stakeholder alignment, SPOC toewijzing en initiële Odoo training. ERP implementatie expert Vlaanderen.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

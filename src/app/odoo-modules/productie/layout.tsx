import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Odoo Productie (MRP) | Manufacturing Resource Planning",
    description: "Digitaliseer uw productieprocessen met Odoo MRP. Werkorders, stuklijsten, kwaliteitscontrole en planning op de werkvloer. Odoo implementatie België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

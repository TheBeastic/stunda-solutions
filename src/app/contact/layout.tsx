import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Odoo ERP Consultant België",
    description: "Neem contact op met Stunda Solutions, uw Odoo ERP implementatie partner in Vlaanderen. Bel ons of plan een gratis adviesgesprek via LinkedIn.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

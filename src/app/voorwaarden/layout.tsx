import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Algemene Voorwaarden",
    description: "Lees de algemene voorwaarden van Stunda Solutions voor onze Odoo ERP consultancy en implementatie diensten.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

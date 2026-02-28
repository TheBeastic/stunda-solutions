import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Implementatie | Odoo ERP Configuratie, Ontwikkeling en Testing",
    description: "De kern van uw Odoo transformatie: iteratieve sprints, data-migratie, maatwerk en intensieve testcycli. 80% van het traject benut voor maximale kwaliteit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

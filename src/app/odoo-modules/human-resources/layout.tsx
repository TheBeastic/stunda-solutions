import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Odoo Human Resources | Personeelsbeheer en Werving",
    description: "Beheer uw personeelsadministratie met Odoo HR. Werving, verlofbeheer, evaluaties en planning. Odoo HR implementatie specialist in Vlaanderen.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

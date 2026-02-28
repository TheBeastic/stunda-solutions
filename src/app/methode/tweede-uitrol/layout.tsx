import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tweede Uitrol | Modulaire Odoo Uitbreiding na Go-Live",
    description: "Na een succesvolle go-live breiden we uw Odoo-systeem modulair uit. Nice-to-haves, geavanceerde automatiseringen en internationale uitrol. Odoo partner België.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

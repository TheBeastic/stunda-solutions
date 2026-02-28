import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacybeleid",
    description: "Lees het privacybeleid van Stunda Solutions. Hoe wij omgaan met uw persoonsgegevens conform de AVG/GDPR wetgeving.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

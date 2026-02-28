export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-brand-indigo mb-8">Algemene Voorwaarden</h1>
                <p className="text-brand-indigo/50 text-sm mb-8">
                    Laatst bijgewerkt: <time dateTime="2026-02-28">28 februari 2026</time>
                </p>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 space-y-6">
                    <h2 className="text-2xl font-bold text-brand-indigo">1. Toepassingsgebied</h2>
                    <p>
                        Deze algemene voorwaarden zijn van toepassing op alle diensten geleverd door Stunda Solutions, gespecialiseerd in Odoo ERP implementatie, consultancy en ondersteuning. Door gebruik te maken van onze diensten, stemt u in met deze voorwaarden.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">2. Diensten</h2>
                    <p>Stunda Solutions biedt de volgende professionele diensten aan:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Odoo ERP implementatie en configuratie</li>
                        <li>Bedrijfsprocesanalyse en ROI-berekening</li>
                        <li>Data-migratie en systeemintegratie</li>
                        <li>Eindgebruikerstraining en SPOC-begeleiding</li>
                        <li>Doorlopend onderhoud en technische ondersteuning</li>
                        <li>Maatwerk module-ontwikkeling</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-brand-indigo">3. Offertes en overeenkomsten</h2>
                    <p>
                        Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen na datum van uitgifte, tenzij anders vermeld. Een overeenkomst komt tot stand na schriftelijke bevestiging door beide partijen.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">4. Intellectueel eigendom</h2>
                    <p>
                        Alle door Stunda Solutions ontwikkelde configuraties, documentatie en maatwerk blijven intellectueel eigendom van Stunda Solutions totdat volledige betaling heeft plaatsgevonden. Na betaling worden gebruiksrechten overgedragen aan de klant.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">5. Aansprakelijkheid</h2>
                    <p>
                        De aansprakelijkheid van Stunda Solutions is beperkt tot het bedrag dat voor de betreffende dienst is gefactureerd. Stunda Solutions is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">6. Vertrouwelijkheid</h2>
                    <p>
                        Beide partijen verbinden zich tot geheimhouding van alle vertrouwelijke informatie die in het kader van de samenwerking wordt uitgewisseld. Deze verplichting blijft geldig na beëindiging van de overeenkomst.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">7. Toepasselijk recht</h2>
                    <p>
                        Op deze voorwaarden is het Belgisch recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechtbanken in België.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">8. Contact</h2>
                    <p>
                        Voor vragen over deze voorwaarden kunt u contact opnemen via <a href="mailto:info@stunda.be" className="text-brand-magenta hover:underline">info@stunda.be</a> of bel 0469 73 29 33.
                    </p>
                </div>
            </div>
        </main>
    );
}

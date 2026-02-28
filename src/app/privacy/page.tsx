export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-brand-indigo mb-8">Privacybeleid</h1>
                <p className="text-brand-indigo/50 text-sm mb-8">
                    Laatst bijgewerkt: <time dateTime="2026-02-28">28 februari 2026</time>
                </p>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 space-y-6">
                    <h2 className="text-2xl font-bold text-brand-indigo">1. Verantwoordelijke</h2>
                    <p>
                        Stunda Solutions, gevestigd in Limburg, België, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid. Voor vragen kunt u contact opnemen via <a href="mailto:info@stunda.be" className="text-brand-magenta hover:underline">info@stunda.be</a> of telefonisch via 0469 73 29 33.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">2. Welke gegevens verzamelen wij?</h2>
                    <p>Wij verzamelen uitsluitend gegevens die u vrijwillig aan ons verstrekt via het contactformulier op onze website:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Naam</li>
                        <li>E-mailadres</li>
                        <li>Telefoonnummer</li>
                        <li>Bedrijfsnaam</li>
                        <li>Uw bericht of projectomschrijving</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-brand-indigo">3. Doeleinden van verwerking</h2>
                    <p>Uw gegevens worden uitsluitend gebruikt voor:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Het beantwoorden van uw contactverzoek</li>
                        <li>Het opstellen van een vrijblijvende offerte of audit</li>
                        <li>Het plannen van een adviesgesprek</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-brand-indigo">4. Bewaartermijn</h2>
                    <p>
                        Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk voor de doeleinden waarvoor ze zijn verzameld. Contactgegevens worden maximaal 12 maanden bewaard na het laatste contact.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">5. Delen met derden</h2>
                    <p>
                        Wij delen uw gegevens niet met derden, tenzij dit noodzakelijk is voor de uitvoering van onze dienstverlening of wettelijk verplicht is. Formuliergegevens worden verwerkt via FormSubmit.co voor e-mailbezorging.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">6. Uw rechten (AVG/GDPR)</h2>
                    <p>U heeft het recht om:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Inzage te vragen in uw persoonsgegevens</li>
                        <li>Rectificatie of verwijdering te verzoeken</li>
                        <li>Bezwaar te maken tegen de verwerking</li>
                        <li>Een klacht in te dienen bij de Gegevensbeschermingsautoriteit</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-brand-indigo">7. Cookies</h2>
                    <p>
                        Deze website maakt gebruik van strikt noodzakelijke cookies voor de werking van de site. Wij gebruiken geen tracking- of marketingcookies.
                    </p>

                    <h2 className="text-2xl font-bold text-brand-indigo">8. Contact</h2>
                    <p>
                        Voor vragen over dit privacybeleid kunt u contact opnemen via <a href="mailto:info@stunda.be" className="text-brand-magenta hover:underline">info@stunda.be</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}

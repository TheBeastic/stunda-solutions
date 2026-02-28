"use client";

import { Users, ChevronRight, Target, Mail, CalendarCheck, PieChart } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: Target, title: "Lead Scoring", desc: "Prioriteer automatisch de meest veelbelovende leads op basis van gedrag, bron en interactiegeschiedenis." },
    { icon: Mail, title: "E-mail Integratie", desc: "Verstuur offertes, follow-ups en campagnes direct vanuit Odoo. Elke interactie wordt automatisch gelogd." },
    { icon: CalendarCheck, title: "Pipeline Management", desc: "Visualiseer uw volledige verkooppijplijn in Kanban-weergave. Sleep deals tussen fases en voorspel omzet nauwkeurig." },
    { icon: PieChart, title: "Verkoopanalyse", desc: "Analyseer verkoopprestaties per team, product, regio of periode met uitgebreide dashboards en rapportages." },
];

export default function CRMEnVerkoop() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 font-semibold text-sm mb-8">
                    <Users className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    CRM &amp; Verkoop
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Beheer uw verkooppijplijn van lead tot deal met Odoo&apos;s krachtige <strong className="text-sky-600">CRM- en verkoopmodule</strong>. Sluit meer deals, sneller.
                </p>

                {/* CRM Demo Video */}
                <div className="rounded-2xl overflow-hidden border border-sky-200/50 shadow-lg mb-16">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                    >
                        <source src="/media/video_crm.webm" type="video/webm" />
                    </video>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Belangrijkste Functionaliteiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-sky-600" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Uw Competitief Voordeel</h2>
                    <p className="mb-6">
                        Met Odoo CRM heeft uw verkoopteam een 360&deg;-weergave van elke prospect en klant. Van het eerste contactmoment tot de aftersales: alle interacties, offertes en contracten zijn gebundeld op &eacute;&eacute;n plek.
                    </p>
                    <p className="mb-6">
                        Automatiseer repetitieve taken zoals follow-up e-mails, taaktoewijzingen en leadroutering. Uw verkopers besteden hun tijd aan wat er echt toe doet: relaties opbouwen en deals sluiten.
                    </p>
                    <p className="mb-6">
                        Koppel uw CRM naadloos aan de facturatiemodule zodat goedgekeurde offertes automatisch worden omgezet in facturen. De volledige order-to-cash cyclus wordt hiermee gestroomlijnd.
                    </p>
                    <p>
                        Met de ingebouwde VoIP-integratie en live chat mogelijkheden transformeert u Odoo in een compleet communicatieplatform. Bel direct vanuit de app en log elk gesprek automatisch.
                    </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/5 via-sky-500/5 to-transparent border border-brand-indigo/10 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <Target className="w-16 h-16 text-brand-indigo/20 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Voorbeeld van lead scoring en pipeline analyse</p>
                </div>

                <div className="bg-gradient-to-r from-sky-600 to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Meer deals sluiten met minder moeite</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Stunda uw verkoopprocessen kan versnellen met Odoo CRM. Plan direct een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/financien" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-sky-600 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-sky-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Module</span>
                            Financi&euml;n
                        </div>
                    </Link>
                    <Link href="/odoo-modules/productie" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-sky-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            Productie (MRP)
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-sky-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

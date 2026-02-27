"use client";

import { CircleDollarSign, ChevronRight, Receipt, PiggyBank, FileSpreadsheet, TrendingUp } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: Receipt, title: "Automatische Facturatie", desc: "Genereer facturen automatisch vanuit verkooporders, abonnementen of afleveringen. Ondersteunt UBL en e-facturatie." },
    { icon: PiggyBank, title: "Bankrekening Sync", desc: "Koppel uw bankrekeningen en laat transacties automatisch matchen met openstaande facturen en betalingen." },
    { icon: FileSpreadsheet, title: "Belastingaangiften", desc: "Genereer BTW-aangiften, intrastat-rapporten en jaarlijkse overzichten direct vanuit uw boekhouding." },
    { icon: TrendingUp, title: "Financiële Rapportages", desc: "Balans, winst-en-verliesrekening, cashflow-overzichten en aangepaste rapportages beschikbaar in real-time." },
];

export default function Financien() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-sm mb-8">
                    <CircleDollarSign className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Financi&euml;n
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Stroomlijn uw financi&euml;le processen met Odoo&apos;s naadloos ge&iuml;ntegreerde <strong className="text-emerald-600">boekhouding en facturatiesoftware</strong>. Van dagboeken tot jaarrekeningen, alles in &eacute;&eacute;n systeem.
                </p>

                {/* Image Placeholder 1 */}
                <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 via-brand-indigo/5 to-transparent border border-emerald-200/50 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <CircleDollarSign className="w-16 h-16 text-emerald-500/40 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Screenshot van het Financi&euml;le Dashboard</p>
                </div>

                {/* Features Grid */}
                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Belangrijkste Functionaliteiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Content */}
                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Volledige Financi&euml;le Controle</h2>
                    <p className="mb-6">
                        Vergeet handmatige invoer en losse spreadsheets. Van bankafschriften die automatisch worden gekoppeld tot UBL-facturatie en onkostenbeheer: Odoo neemt de administratieve last uit handen. Krijg altijd en overal real-time inzicht in uw cashflow.
                    </p>
                    <p className="mb-6">
                        Met uitgebreide rapportages, multi-valuta ondersteuning en flexibele dashboards neemt u sneller strategische beslissingen. Odoo&apos;s boekhouding voldoet volledig aan de strenge eisen van de moderne bedrijfsbesturing.
                    </p>
                    <p className="mb-6">
                        Dankzij de integratie met Verkoop, Inkoop en Voorraad worden alle transacties automatisch geboekt. Een verkoopfactuur cre&euml;ert direct de juiste journaalposten, zonder dat uw boekhoudafdeling handmatig hoeft in te grijpen.
                    </p>
                    <p>
                        Of u nu werkt met &eacute;&eacute;n bedrijf of een multi-company structuur heeft: Odoo ondersteunt intercompany-transacties, consolidatie en automatische eliminatie van interne transacties.
                    </p>
                </div>

                {/* Image Placeholder 2 */}
                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/5 via-emerald-500/5 to-transparent border border-brand-indigo/10 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <FileSpreadsheet className="w-16 h-16 text-brand-indigo/20 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Voorbeeld van financi&euml;le rapportage overzicht</p>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-emerald-600 to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Bespaar tijd op uw administratie</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Laat Stunda uw financi&euml;le processen stroomlijnen met Odoo. Plan een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/voorraad-en-wms" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-emerald-600 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-emerald-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Module</span>
                            Voorraad &amp; WMS
                        </div>
                    </Link>
                    <Link href="/odoo-modules/crm-en-verkoop" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-emerald-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            CRM &amp; Verkoop
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-emerald-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

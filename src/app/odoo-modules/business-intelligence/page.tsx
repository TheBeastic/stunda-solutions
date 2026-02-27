"use client";

import { LineChart, ChevronRight, PieChart, Database, Sparkles, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: LayoutDashboard, title: "Custom Dashboards", desc: "Bouw op maat gemaakte dashboards met drag-and-drop. Combineer grafieken, KPIs en tabellen in \u00e9\u00e9n overzicht." },
    { icon: PieChart, title: "Draaitabellen", desc: "Analyseer grote datasets met krachtige draaitabellen. Filter, groepeer en vergelijk data moeiteloos vanuit elke module." },
    { icon: Database, title: "Cross-Module Data", desc: "Combineer informatie uit Verkoop, Financi\u00ebn, HR en Productie in \u00e9\u00e9n rapport. Geen losse systemen meer." },
    { icon: Sparkles, title: "Geautomatiseerde Rapporten", desc: "Plan rapporten in om automatisch via e-mail te worden verstuurd. Houd stakeholders op de hoogte zonder handmatige inspanning." },
];

export default function BusinessIntelligence() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-600 font-semibold text-sm mb-8">
                    <LineChart className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Business Intelligence
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Transformeer ruwe bedrijfsdata naar heldere, bruikbare inzichten met Odoo&apos;s ge&iuml;ntegreerde <strong className="text-violet-600">Dashboards en Rapportages</strong>.
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 via-brand-indigo/5 to-transparent border border-violet-200/50 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <LineChart className="w-16 h-16 text-violet-500/40 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Screenshot van het Business Intelligence Dashboard</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Belangrijkste Functionaliteiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-violet-600" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Data-Gedreven Beslissingen</h2>
                    <p className="mb-6">
                        Zonder externe BI-tools of complexe koppelingen bouwt u eenvoudig overzichtelijke grafieken, draaitabellen en KPIs die real-time up-to-date zijn. Data uit de modules Verkoop, Financi&euml;n, Productie en HR komen naadloos samen in &eacute;&eacute;n interface.
                    </p>
                    <p className="mb-6">
                        Met Spreadsheet-integratie combineert u de kracht van visuele dashboards met de flexibiliteit van spreadsheets. Maak live berekeningen bovenop uw Odoo-data, zonder exporteren of kopieer-plakwerk.
                    </p>
                    <p className="mb-6">
                        Stel alerts in op kritieke KPIs. Wanneer uw omzet daalt, voorraad opraakt of klantentevredenheid zakt, ontvangt u automatisch een melding zodat u proactief kunt handelen.
                    </p>
                    <p>
                        Deel dashboards met uw team of klanten via beveiligde links. Iedereen krijgt de juiste data, met de juiste toegangsrechten, op het juiste moment.
                    </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/5 via-violet-500/5 to-transparent border border-brand-indigo/10 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <PieChart className="w-16 h-16 text-brand-indigo/20 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Voorbeeld van cross-module rapportage en KPIs</p>
                </div>

                <div className="bg-gradient-to-r from-violet-600 to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Maak beslissingen op basis van data, niet onderbuikgevoel</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Stunda uw bedrijfsdata kan ontsluiten met Odoo BI. Plan een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/human-resources" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-violet-600 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-violet-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Module</span>
                            Human Resources
                        </div>
                    </Link>
                    <Link href="/#solutions" className="text-brand-indigo/50 font-medium hover:text-brand-indigo transition-colors flex items-center gap-2">
                        Terug naar Modules <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}

"use client";

import { Wrench, ChevronRight, Cog, ClipboardCheck, Timer, Layers } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: Layers, title: "Stuklijsten (BOM)", desc: "Definieer multi-level stuklijsten met varianten, bijproducten en subcontractering voor complexe productieprocessen." },
    { icon: Timer, title: "Werkorders Planning", desc: "Plan werkorders op basis van beschikbare capaciteit, doorlooptijden en prioriteiten. Optimaliseer uw werkvloer automatisch." },
    { icon: ClipboardCheck, title: "Kwaliteitscontrole", desc: "Implementeer kwaliteitspunten op elk stadium van de productie. Automatische alerts bij afwijkingen van toleranties." },
    { icon: Cog, title: "Onderhoudsbeheer", desc: "Plan preventief onderhoud voor machines en apparatuur. Volg OEE (Overall Equipment Effectiveness) in real-time." },
];

export default function Productie() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-purple via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-semibold text-sm mb-8">
                    <Wrench className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Productie (MRP)
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Plan, beheer en optimaliseer uw gehele productieproces met krachtige <strong className="text-brand-purple">MRP-functionaliteiten van Odoo</strong>. Van grondstof tot eindproduct.
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 via-brand-indigo/5 to-transparent border border-purple-200/50 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <Wrench className="w-16 h-16 text-purple-500/40 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Screenshot van het Productie Planning Dashboard</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Belangrijkste Functionaliteiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Uw Productielijn, Volledig Geoptimaliseerd</h2>
                    <p className="mb-6">
                        Beheer stuklijsten (BOM), plan werkorders dynamisch in en houd real-time toezicht op de capaciteit van uw werkvloer. Odoo&apos;s productie-app is volledig ge&iuml;ntegreerd met uw voorraad, zodat materialen automatisch worden gereserveerd op basis van uw productieplanning.
                    </p>
                    <p className="mb-6">
                        Met functies voor kwaliteitscontrole, onderhoud van apparatuur (OEE) en PLM (Product Lifecycle Management) zorgt Odoo voor een vlekkeloze en ononderbroken productielijn.
                    </p>
                    <p className="mb-6">
                        Zet verkooporders automatisch om in fabricageorders en laat het systeem de benodigde grondstoffen reserveren. Als voorraden ontoereikend zijn, genereert Odoo automatisch inkooporders bij uw leveranciers.
                    </p>
                    <p>
                        Met de tablet-interface van Odoo MRP kunnen operators op de werkvloer direct werkorders bijwerken, kwaliteitsmetingen invoeren en stappen afvinken. Geen papieren checklists meer, alles is digitaal en real-time.
                    </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/5 via-purple-500/5 to-transparent border border-brand-indigo/10 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <Cog className="w-16 h-16 text-brand-indigo/20 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Voorbeeld van werkorder tracking op de werkvloer</p>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om uw productie te digitaliseren?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Stunda uw productieprocessen kan stroomlijnen met Odoo MRP. Plan een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/crm-en-verkoop" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-purple-600 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-purple-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Module</span>
                            CRM &amp; Verkoop
                        </div>
                    </Link>
                    <Link href="/odoo-modules/projectmanagement" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-purple-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            Project Management
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-purple-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

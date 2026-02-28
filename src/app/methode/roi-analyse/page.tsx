"use client";

import { BarChart3, ChevronRight, Search, FileCheck, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: Search, title: "Procesanalyse", desc: "We brengen al uw huidige bedrijfsprocessen in kaart, identificeren ineffici&euml;nties en bepalen waar Odoo de meeste impact kan maken." },
    { icon: Target, title: "Module Selectie", desc: "Op basis van de analyse selecteren we de exacte Odoo-modules die uw specifieke behoeften adresseren. Geen overbodige functionaliteit." },
    { icon: FileCheck, title: "Budgettering & Planning", desc: "U ontvangt een transparant budgetvoorstel en een gedetailleerd faseringsplan zodat u precies weet wat u kunt verwachten." },
    { icon: TrendingUp, title: "ROI Berekening", desc: "We berekenen de verwachte Return on Investment per module, zodat elke investering meetbaar en verantwoord is." },
];

export default function ROIAnalyse() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-magenta via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <BarChart3 className="w-4 h-4 text-brand-magenta" />
                    Fase 1: 10% van het project
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    ROI Analyse &amp; Strategie
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Voordat we starten met ontwikkelen, bepalen we exact de verwachte <strong className="text-brand-magenta">ROI (Return on Investment)</strong>. Dit is cruciaal om ervoor te zorgen dat elke euro die u in Odoo investeert, zichzelf terugverdient.
                </p>


                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Wat gebeurt er in deze fase?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-brand-magenta/10 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-brand-magenta" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Uw Fundament voor Succes</h2>
                    <p className="mb-6">
                        In de eerste 10% van de projecttijd richten we ons op het doorlichten van uw huidige bedrijfsprocessen. We identificeren ineffici&euml;nties, bepalen de noodzakelijke modules en stellen een strak budget en faseringsplan op.
                    </p>
                    <p className="mb-6">
                        Geen verrassingen achteraf. Deze fase resulteert in een glasheldere roadmap die exact laat zien wanneer welke bedrijfsdoelstellingen worden behaald en hoe het ERP-systeem deze gaat ondersteunen.
                    </p>
                    <p className="mb-6">
                        We betrekken alle relevante afdelingen bij dit proces. Van directie tot operatie, iedereen krijgt de kans om hun pijnpunten en wensen te delen. Dit zorgt voor draagvlak en een implementatie die werkelijk aansluit bij de dagelijkse praktijk.
                    </p>
                    <p>
                        Het resultaat is een gedetailleerd analyserapport met concrete aanbevelingen, kosten-batenanalyses per module en een realistische tijdlijn. Dit document wordt uw kompas voor het gehele traject.
                    </p>
                </div>


                <div className="bg-gradient-to-r from-brand-magenta to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Start met een gratis ROI Analyse</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoeveel uw bedrijf kan besparen met Odoo. Plan direct een vrijblijvend adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/" className="text-brand-indigo/50 font-medium hover:text-brand-indigo transition-colors flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 rotate-180" /> Terug naar Home
                    </Link>
                    <Link href="/methode/kick-off" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Fase</span>
                            Project Kick-off
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-brand-magenta transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

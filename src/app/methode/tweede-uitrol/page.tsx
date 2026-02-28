"use client";

import { GitMerge, ChevronRight, Puzzle, Globe, ShieldCheck, Layers } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: Puzzle, title: "Modulaire Uitbreiding", desc: "Voeg nieuwe modules toe op basis van prioriteit. Elke uitbreiding wordt behandeld als een mini-project met eigen analyse en testfase." },
    { icon: Globe, title: "Internationale Roll-out", desc: "Breid uw Odoo-omgeving uit naar andere landen en vestigingen met lokale aanpassingen voor belasting, taal en wetgeving." },
    { icon: ShieldCheck, title: "Procesoptimalisatie", desc: "Verfijn bestaande workflows op basis van gebruiksfeedback. Automatiseer processen die in de eerste fase handmatig bleven." },
    { icon: Layers, title: "Geavanceerd Maatwerk", desc: "Implementeer complexere functionaliteit die opzettelijk werd uitgesteld om de initi\u00eble lancering te versnellen." },
];

export default function TweedeUitrol() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-purple via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <GitMerge className="w-4 h-4 text-brand-purple" />
                    Fase 5: Continue Verbetertraject
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Tweede Uitrol (Second Deployment)
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Na een succesvolle livegang stoppen we niet. De <strong className="text-brand-purple">Tweede Uitrol</strong> richt zich op fasering van secundaire wensen (&quot;nice-to-haves&quot;) die opzettelijk buiten de initi&euml;le scope zijn gehouden.
                </p>


                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Wat gebeurt er in deze fase?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-brand-purple" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Groei Zonder Grenzen</h2>
                    <p className="mb-6">
                        Nu het kernsysteem robuust draait en uw medewerkers getraind zijn, breiden we de functionaliteit uit met complexere modules of geavanceerde automatiseringen. Dit modulaire groeimodel voorkomt projectmoeheid.
                    </p>
                    <p className="mb-6">
                        Elke nieuwe uitrol wordt behandeld als een mini-project met zijn eigen analyse, ontwerp en testfase, met minimale impact op uw dagelijkse operatie.
                    </p>
                    <p className="mb-6">
                        Denk aan e-commerce integraties, geavanceerde BI-dashboards, IoT-koppelingen voor magazijnen of de uitrol naar internationale vestigingen met lokale compliance-eisen.
                    </p>
                    <p>
                        Het voordeel van deze aanpak is dat uw team al ervaring heeft met Odoo. Nieuwe modules worden sneller geadopteerd en de impact op productiviteit is minimaal. Elk project bouwt voort op het solide fundament van de eerste implementatie.
                    </p>
                </div>


                <div className="bg-gradient-to-r from-brand-purple to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar voor de volgende stap?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Bespreek met Stunda welke uitbreidingen de meeste impact hebben op uw bedrijf. Plan een gratis sessie.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/methode/go-live" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-brand-magenta transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Fase</span>
                            Go-Live
                        </div>
                    </Link>
                    <Link href="/methode/voortgangsrapport" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Fase</span>
                            Voortgangsrapport
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

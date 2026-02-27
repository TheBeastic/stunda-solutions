"use client";

import { Rocket, ChevronRight, GraduationCap, HeadphonesIcon, MonitorCheck, Zap } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: GraduationCap, title: "Eindgebruikertraining", desc: "Intensieve trainingen voor alle medewerkers die met het systeem gaan werken. Hands-on, praktijkgericht en op maat." },
    { icon: HeadphonesIcon, title: "Floor Support", desc: "Tijdens de eerste weken na go-live is ons team on-site of remote beschikbaar om directe ondersteuning te bieden." },
    { icon: MonitorCheck, title: "Monitoring", desc: "We monitoren het systeem intensief op performance, fouten en gebruikersproblemen. Proactief ingrijpen waar nodig." },
    { icon: Zap, title: "Snelle Bugfixes", desc: "Kinderziektes worden onmiddellijk aangepakt. Ons team staat paraat om issues binnen uren op te lossen." },
];

export default function GoLive() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-magenta via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <Rocket className="w-4 h-4 text-brand-magenta" />
                    Fase 4: 5% van het project
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Go-Live &amp; Support
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Het moment van de waarheid. In de <strong className="text-brand-magenta">laatste 5%</strong> van het traject verzorgen we de overstap van uw oude systemen naar de nieuwe Odoo-omgeving, zonder operationele chaos.
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-brand-magenta/10 via-brand-indigo/5 to-transparent border border-brand-magenta/20 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <Rocket className="w-16 h-16 text-brand-magenta/40 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Visualisatie van het Go-Live stappenplan</p>
                </div>

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
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Een Naadloze Overgang</h2>
                    <p className="mb-6">
                        Deze fase draait volledig om eindgebruikertraining en on-site of remote floor support. We pakken eventuele kinderziektes onmiddellijk aan en zorgen dat uw team met vertrouwen het systeem overneemt. Uw SPOC blijft gedurende de eerste weken intensief betrokken als uw steun en toeverlaat.
                    </p>
                    <p className="mb-6">
                        Onze Go-Live strategie minimaliseert downtime. Dankzij het grondige voorwerk in Fase 1 en 3 is dit slechts de ceremoni&euml;le overdracht van een systeem dat in feite al is geadopteerd.
                    </p>
                    <p className="mb-6">
                        We hanteren een gestructureerd cutover-plan dat exact beschrijft welke stappen wanneer worden gezet. Van het afsluiten van het oude systeem tot het activeren van het nieuwe: elk moment is gepland en getest.
                    </p>
                    <p>
                        Na de go-live volgt een stabilisatieperiode waarin we het systeem nauwlettend in de gaten houden. Ons supportteam is 24/7 bereikbaar voor urgente issues, zodat uw bedrijfscontinu&iuml;teit gegarandeerd is.
                    </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/5 via-brand-magenta/5 to-transparent border border-brand-indigo/10 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <GraduationCap className="w-16 h-16 text-brand-indigo/20 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Voorbeeld van een eindgebruikertraining sessie</p>
                </div>

                <div className="bg-gradient-to-r from-brand-magenta to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar voor de lancering?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Stunda begeleidt uw Go-Live met een ervaren team. Plan een gesprek om uw traject te bespreken.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/methode/implementatie" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-brand-magenta transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Fase</span>
                            Implementatie
                        </div>
                    </Link>
                    <Link href="/methode/tweede-uitrol" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Fase</span>
                            Tweede Uitrol
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

"use client";

import { FileText, ChevronRight, TrendingUp, RefreshCw, Lightbulb, BarChart3 } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: TrendingUp, title: "ROI Evaluatie", desc: "We meten de werkelijke ROI versus de verwachte ROI uit Fase 1. Concrete cijfers die de waarde van uw investering bewijzen." },
    { icon: RefreshCw, title: "Versie-Updates", desc: "We introduceren nieuwe features uit de nieuwste Odoo-versies en zorgen dat uw systeem altijd up-to-date blijft." },
    { icon: Lightbulb, title: "Innovatie Advies", desc: "We signaleren kansen voor procesverbetering en technologische innovatie op basis van markttrends en nieuwe Odoo-functionaliteit." },
    { icon: BarChart3, title: "Strategische Roadmap", desc: "Samen stellen we een lange-termijn IT-roadmap op die meegroeit met uw bedrijfsstrategie en ambities." },
];

export default function Voortgangsrapport() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-indigo via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <FileText className="w-4 h-4 text-brand-indigo" />
                    Fase 6: Odoo als Strategische Partner
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Voortgangsrapport
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Onze relatie eindigt niet bij oplevering. Met het periodieke <strong className="text-brand-magenta">Voortgangsrapport</strong> evalueren we de behaalde ROI en bepalen we samen met u de koers voor de toekomst.
                </p>


                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Wat gebeurt er in deze fase?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-brand-indigo/10 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-brand-indigo" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Uw Lange-Termijn Partner</h2>
                    <p className="mb-6">
                        Tijdens periodieke strategische sessies introduceren we nieuwe Odoo-features van de nieuwste versies en bekijken we hoe we uw bedrijfsprocessen nog strakker kunnen automatiseren.
                    </p>
                    <p className="mb-6">
                        Stunda Solutions fungeert als uw lange-termijn IT-partner die meegroeit met uw succes. Of het nu gaat om hardware integraties, e-commerce uitbreidingen of internationale roll-outs, u heeft altijd een strategisch plan op maat klaarliggen.
                    </p>
                    <p className="mb-6">
                        We monitoren de adoptie van het systeem door uw medewerkers en identificeren gebieden waar aanvullende training of procesoptimalisatie nodig is. Zo haalt u het maximale uit uw Odoo-investering.
                    </p>
                    <p>
                        Het voortgangsrapport is niet slechts een document, het is een strategisch instrument waarmee u de richting van uw digitale transformatie bepaalt. Samen zorgen we ervoor dat uw ERP-systeem altijd een stap voor blijft op uw concurrentie.
                    </p>
                </div>


                <div className="bg-gradient-to-r from-brand-indigo to-brand-magenta rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Begin vandaag met uw Odoo-journey</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Stunda is uw strategische partner voor de lange termijn. Plan een gratis audit en ontdek de mogelijkheden.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Gratis Odoo Audit <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/methode/tweede-uitrol" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-brand-magenta transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Fase</span>
                            Tweede Uitrol
                        </div>
                    </Link>
                    <Link href="/#audit" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Start Vandaag</span>
                            Gratis Odoo Audit
                        </div>
                        <div className="w-12 h-12 rounded-full bg-brand-indigo text-white flex items-center justify-center group-hover:bg-brand-magenta transition-colors shadow-lg">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

"use client";

import { Settings, ChevronRight, Code, TestTube, RefreshCw, Database } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: Code, title: "Configuratie & Maatwerk", desc: "We configureren Odoo-modules naar uw exacte specificaties en ontwikkelen maatwerk waar standaard functionaliteit tekortschiet." },
    { icon: TestTube, title: "Iteratief Testen", desc: "Via regelmatige sprints leveren we werkende functionaliteit op. U test en geeft feedback, zodat het systeem perfect aansluit." },
    { icon: Database, title: "Data Migratie", desc: "Bestaande data uit uw huidige systemen wordt veilig en zorgvuldig gemigreerd naar Odoo. Geen dataverlies." },
    { icon: RefreshCw, title: "Integraties", desc: "We koppelen Odoo aan uw bestaande tools: betaalproviders, webshops, logistieke partners en meer." },
];

export default function Implementatie() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-indigo via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <Settings className="w-4 h-4 text-brand-indigo" />
                    Fase 3: 80% van het project
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Implementatie &amp; Ontwikkeling
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Dit is de kern van uw transformatie. Gedurende <strong className="text-brand-indigo">80% van de projecttijd</strong> focussen we ons volledig op analyse, configuratie, ontwikkeling en intensieve testcycli.
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/10 via-brand-purple/5 to-transparent border border-brand-indigo/20 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <Settings className="w-16 h-16 text-brand-indigo/30 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Screenshot van de sprint planning en voortgang</p>
                </div>

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
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Iteratief &amp; Transparant</h2>
                    <p className="mb-6">
                        In plaats van een &quot;big bang&quot; benadering, werken wij iteratief. Via regelmatige sprints leveren we werkende Odoo-modules op, zodat u en uw SPOC direct feedback kunnen geven. Dit elimineert het risico dat het uiteindelijke systeem niet aansluit bij uw dagelijkse operatie.
                    </p>
                    <p className="mb-6">
                        Data-migraties, integraties met systemen van derden en maatwerk oplossingen komen in deze fase samen. U wordt parallel getraind in het gebruik, waardoor de formele trainingstijd later aanzienlijk wordt verkort.
                    </p>
                    <p className="mb-6">
                        Elke sprint eindigt met een demo-sessie waar we de gerealiseerde functionaliteit presenteren. U ziet direct wat er is gebouwd en kunt bijsturen als dat nodig is. Geen verrassingen bij de eindoplevering.
                    </p>
                    <p>
                        Onze developers werken volgens best practices en documenteren alle configuraties en maatwerk zorgvuldig. Dit zorgt voor een onderhoudbaar systeem dat ook op lange termijn eenvoudig is aan te passen.
                    </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/5 via-brand-indigo/5 to-transparent border border-brand-indigo/10 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <Code className="w-16 h-16 text-brand-indigo/20 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Voorbeeld van ontwikkelomgeving en testresultaten</p>
                </div>

                <div className="bg-gradient-to-r from-brand-indigo to-brand-purple rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Uw systeem, op maat gebouwd</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Stunda uw Odoo-implementatie tot in de puntjes verzorgt. Plan een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/methode/kick-off" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-brand-magenta transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Fase</span>
                            Project Kick-off
                        </div>
                    </Link>
                    <Link href="/methode/go-live" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Fase</span>
                            Go-Live
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

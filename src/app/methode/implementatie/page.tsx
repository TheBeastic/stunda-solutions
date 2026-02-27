"use client";

import { Settings, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Implementatie() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-indigo via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <Settings className="w-4 h-4 text-brand-indigo" />
                    Fase 3: 80% van het project
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Implementatie & Ontwikkeling
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Dit is de kern van uw transformatie. Gedurende <strong className="text-brand-indigo">80% van de projecttijd</strong> focussen we ons volledig op analyse, configuratie, ontwikkeling en intensieve testcycli.
                    </p>
                    <p className="mb-6">
                        In plaats van een &quot;big bang&quot; benadering, werken wij iteratief. Via regelmatige sprints leveren we werkende Odoo-modules op, zodat u en uw SPOC direct feedback kunnen geven. Dit elimineert het risico dat het uiteindelijke systeem niet aansluit bij uw dagelijkse operatie.
                    </p>
                    <p className="mb-12">
                        Data-migraties, integraties met systemen van derden en maatwerk oplossingen komen in deze fase samen. U wordt parallel getraind in het gebruik, waardoor de formele trainingstijd later aanzienlijk wordt verkort.
                    </p>
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

"use client";

import { FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Voortgangsrapport() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-indigo via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <FileText className="w-4 h-4 text-brand-indigo" />
                    Fase 6: Odoo als Strategische Partner
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Voortgangsrapport
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Onze relatie eindigt niet bij oplevering. Met het periodieke <strong className="text-brand-magenta">Voortgangsrapport</strong> evalueren we de behaalde ROI en bepalen we samen met u de koers voor de toekomst.
                    </p>
                    <p className="mb-6">
                        Tijdens deze strategische sessies introduceren we nieuwe Odoo-features van de nieuwste versies en bekijken we hoe we uw bedrijfsprocessen nog strakker kunnen automatiseren.
                    </p>
                    <p className="mb-12">
                        Stunda Solutions fungeert als uw lange-termijn IT-partner die meegroeit met uw succes. Of het nu gaat om hardware integraties, e-commerce uitbreidingen of internationale roll-outs, u heeft altijd een strategisch plan op maat klaarliggen.
                    </p>
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

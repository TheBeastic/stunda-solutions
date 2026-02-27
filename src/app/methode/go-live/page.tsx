"use client";

import { Rocket, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function GoLive() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-magenta via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <Rocket className="w-4 h-4 text-brand-magenta" />
                    Fase 4: 5% van het project
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Go-Live & Support
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Het moment van de waarheid. In de <strong className="text-brand-magenta">laatste 5%</strong> van het traject verzorgen we de overstap van uw oude systemen naar de nieuwe Odoo-omgeving, zonder operationele chaos.
                    </p>
                    <p className="mb-6">
                        Deze fase draait volledig om eindgebruikertraining en on-site of remote floor support. We pakken eventuele kinderziektes onmiddellijk aan en zorgen dat uw team met vertrouwen het systeem overneemt. Uw SPOC blijft gedurende de eerste weken intensief betrokken als uw steun en toeverlaat.
                    </p>
                    <p className="mb-12">
                        Onze Go-Live strategie minimaliseert downtime. Dankzij het grondige voorwerk in Fase 1 en 3 is dit slechts de ceremoniële overdracht van een systeem dat in feite al is geadopteerd.
                    </p>
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

"use client";

import { LineChart, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BusinessIntelligence() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-600 font-semibold text-sm mb-8">
                    <LineChart className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Business Intelligence (BI)
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Transformeer ruwe bedrijfsdata naar heldere, bruikbare inzichten met Odoo's geïntegreerde <strong className="text-violet-600">Dashboards en Rapportages</strong>.
                    </p>
                    <p className="mb-6">
                        Zonder externe BI-tools of complexe koppelingen bouwt u eenvoudig overzichtelijke grafieken, draaitabellen en KPIs die real-time up-to-date zijn. Data uit de modules Verkoop, Financiën, Productie en HR komen naadloos samen in één interface.
                    </p>
                    <p className="mb-12">
                        Stel gepersonaliseerde dashboards samen voor verschillende afdelingen of managementniveaus. Baseer uw strategische beslissingen niet langer op onderbuikgevoel, maar op nauwkeurige, actuele data uit elke hoek van uw organisatie.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/human-resources" className="text-brand-indigo/50 font-medium hover:text-brand-indigo transition-colors flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 rotate-180" /> Vorige Module
                    </Link>

                    <Link href="/#solutions" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-violet-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Terug naar Overzicht</span>
                            Alle Modules
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-violet-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

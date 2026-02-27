"use client";

import { Boxes, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function VoorraadEnWMS() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-8">
                    <Boxes className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Voorraad & WMS
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Krijg volledige controle over uw toeleveringsketen met Odoo&apos;s intelligente <strong className="text-blue-600">Warehouse Management System (WMS)</strong>.
                    </p>
                    <p className="mb-6">
                        Minimaliseer handmatige handelingen door processen zoals orderpicken, verpakken en verzenden te optimaliseren. Dankzij real-time tracking weet u altijd precies waar uw voorraad zich bevindt, wat leidt tot minder fouten en een hogere klanttevredenheid.
                    </p>
                    <p className="mb-12">
                        Geautomatiseerde bestellingen zorgen ervoor dat u nooit zonder kritieke producten komt te zitten. Door integraties met scanners en mobiele apparaten werkt uw magazijnpersoneel sneller en efficiënter dan ooit tevoren.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/#solutions" className="text-brand-indigo/50 font-medium hover:text-brand-indigo transition-colors flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 rotate-180" /> Terug naar Modules
                    </Link>

                    <Link href="/odoo-modules/financien" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-blue-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            Financiën
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-blue-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

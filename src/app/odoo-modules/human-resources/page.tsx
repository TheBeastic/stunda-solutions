"use client";

import { HeartHandshake, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HumanResources() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 font-semibold text-sm mb-8">
                    <HeartHandshake className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Human Resources (HR)
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Centraliseer al uw HR-processen en creëer een betere werkplek voor uw medewerkers met de <strong className="text-rose-600">Odoo HR modules</strong>.
                    </p>
                    <p className="mb-6">
                        Beheer moeiteloos werving, contracten, aanwezigheden, verlofaanvragen en declaraties vanuit één overzichtelijk dashboard. Odoo stroomlijnt de onboarding van nieuwe collega's en zorgt ervoor dat alle documentatie veilig en digitaal is opgeslagen.
                    </p>
                    <p className="mb-12">
                        Met de self-service portal voor medewerkers kunnen zij zelf hun urenstaten invullen, verlof aanvragen en onkosten indienen. Dit vermindert de administratieve druk op uw HR-afdeling aanzienlijk, zodat zij zich kunnen richten op talentontwikkeling.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/projectmanagement" className="text-brand-indigo/50 font-medium hover:text-brand-indigo transition-colors flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 rotate-180" /> Vorige Module
                    </Link>

                    <Link href="/odoo-modules/business-intelligence" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-rose-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            Business Intelligence
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-rose-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

"use client";

import { Users, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CRMEnVerkoop() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-magenta via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-brand-magenta font-semibold text-sm mb-8">
                    <Users className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    CRM & Verkoop
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Versnel uw verkoopproces en bouw duurzame klantrelaties op met de gebruiksvriendelijke <strong className="text-brand-magenta">CRM-tools van Odoo</strong>.
                    </p>
                    <p className="mb-6">
                        Volg al uw leads, kansen en klantinteracties in één centraal, visueel dashboard. Creëer professionele offertes in enkele klikken, laat ze digitaal ondertekenen en zet ze naadloos om in verkooporders en facturen.
                    </p>
                    <p className="mb-12">
                        Automatiseer opvolgingstaken, analyseer de prestaties van uw verkoopteam met gedetailleerde prognoses en zorg ervoor dat geen enkele verkoopkans meer verloren gaat.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/financien" className="text-brand-indigo/50 font-medium hover:text-brand-indigo transition-colors flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 rotate-180" /> Vorige Module
                    </Link>

                    <Link href="/odoo-modules/productie" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            Productie (MRP)
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

"use client";

import { Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProjectManagement() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm mb-8">
                    <Briefcase className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Project Management
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Organiseer, plan en voltooi uw projecten op tijd en binnen budget met Odoo's intuïtieve <strong className="text-orange-600">Project Management software</strong>.
                    </p>
                    <p className="mb-6">
                        Of u nu agile werkt met Kanban-borden of de voorkeur geeft aan gedetailleerde Gantt-grafieken, Odoo past zich aan uw werkwijze aan. Verdeel grote projecten in behapbare taken, wijs ze toe aan teamleden en volg de voortgang in real-time.
                    </p>
                    <p className="mb-12">
                        De naadloze integratie met urenstaten en facturatie betekent dat de gewerkte uren direct kunnen worden gefactureerd aan de klant. Creëer ultieme transparantie voor zowel uw team als uw klanten.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/productie" className="text-brand-indigo/50 font-medium hover:text-brand-indigo transition-colors flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 rotate-180" /> Vorige Module
                    </Link>

                    <Link href="/odoo-modules/human-resources" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-orange-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            Human Resources
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-orange-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

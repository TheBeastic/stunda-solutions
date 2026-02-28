"use client";

import { Briefcase, ChevronRight, KanbanSquare, Clock, Users, BarChart3 } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: KanbanSquare, title: "Kanban & Gantt", desc: "Wissel naadloos tussen Kanban-borden voor agile workflows en Gantt-grafieken voor gedetailleerde tijdlijnen en afhankelijkheden." },
    { icon: Clock, title: "Urenstaat Registratie", desc: "Registreer gewerkte uren per taak en project. Koppel direct aan facturatie voor een nauwkeurige doorberekening aan klanten." },
    { icon: Users, title: "Team Samenwerking", desc: "Wijs taken toe, stel deadlines in en communiceer via interne berichten. Iedereen weet wat er verwacht wordt." },
    { icon: BarChart3, title: "Projectanalyse", desc: "Vergelijk geplande versus werkelijke uren, budgetten en deadlines. Identificeer knelpunten voordat ze vertragingen veroorzaken." },
];

export default function ProjectManagement() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm mb-8">
                    <Briefcase className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Project Management
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Organiseer, plan en voltooi uw projecten op tijd en binnen budget met Odoo&apos;s intu&iuml;tieve <strong className="text-orange-600">Project Management software</strong>.
                </p>

                {/* Project Management Demo Video */}
                <div className="rounded-2xl overflow-hidden border border-orange-200/50 shadow-lg mb-16">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                    >
                        <source src="/media/video_project.webm" type="video/webm" />
                        <source src="/media/video_project.mp4" type="video/mp4" />
                    </video>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Belangrijkste Functionaliteiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Van Idee tot Oplevering</h2>
                    <p className="mb-6">
                        Of u nu agile werkt met Kanban-borden of de voorkeur geeft aan gedetailleerde Gantt-grafieken, Odoo past zich aan uw werkwijze aan. Verdeel grote projecten in behapbare taken, wijs ze toe aan teamleden en volg de voortgang in real-time.
                    </p>
                    <p className="mb-6">
                        Dankzij de integratie met urenregistratie en facturatie weet u exact hoeveel tijd en budget er aan elk project is besteed. Factureer klanten op basis van werkelijke uren of vaste prijzen, volledig automatisch.
                    </p>
                    <p className="mb-6">
                        Maak gebruik van templates om terugkerende projecten in seconden op te zetten. Standaardiseer uw processen en zorg ervoor dat elk project volgens dezelfde kwaliteitsstandaarden wordt uitgevoerd.
                    </p>
                    <p>
                        Met de customer portal kunnen uw klanten de voortgang van hun project volgen, documenten downloaden en taken goedkeuren. Volledige transparantie zonder extra communicatie-overhead.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-orange-600 to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Projecten op tijd en binnen budget</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Stunda uw projectmanagement kan verbeteren met Odoo. Plan een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/productie" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-orange-600 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-orange-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Module</span>
                            Productie (MRP)
                        </div>
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

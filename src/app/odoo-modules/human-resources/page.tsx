"use client";

import { HeartHandshake, ChevronRight, UserPlus, CalendarDays, Award, FileText } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: UserPlus, title: "Werving & Selectie", desc: "Beheer vacatures, sollicitanten en het volledige wervingsproces. Van publicatie tot aanname, alles in \u00e9\u00e9n systeem." },
    { icon: CalendarDays, title: "Verlof & Aanwezigheid", desc: "Medewerkers vragen verlof digitaal aan. Managers keuren met \u00e9\u00e9n klik goed. Automatische saldo-berekening en kalenderintegratie." },
    { icon: Award, title: "Beoordeling & Groei", desc: "Plan en voer beoordelingsgesprekken uit. Stel doelen, volg competenties en stimuleer professionele groei binnen uw organisatie." },
    { icon: FileText, title: "Onkosten & Declaraties", desc: "Medewerkers dienen declaraties digitaal in met foto van de bon. Automatische goedkeuring op basis van bedrijfsregels." },
];

export default function HumanResources() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 font-semibold text-sm mb-8">
                    <HeartHandshake className="w-4 h-4" />
                    Odoo Module
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Human Resources
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Centraliseer al uw HR-processen en cre&euml;er een betere werkplek voor uw medewerkers met de <strong className="text-rose-600">Odoo HR modules</strong>.
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-rose-500/10 via-brand-indigo/5 to-transparent border border-rose-200/50 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <HeartHandshake className="w-16 h-16 text-rose-500/40 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Screenshot van het HR Dashboard</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Belangrijkste Functionaliteiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-rose-600" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Uw Medewerkers Centraal</h2>
                    <p className="mb-6">
                        Beheer moeiteloos werving, contracten, aanwezigheden, verlofaanvragen en declaraties vanuit &eacute;&eacute;n overzichtelijk dashboard. Odoo stroomlijnt de onboarding van nieuwe collega&apos;s en zorgt ervoor dat alle documentatie veilig en digitaal is opgeslagen.
                    </p>
                    <p className="mb-6">
                        Met de self-service portal voor medewerkers kunnen zij zelf hun urenstaten invullen, verlof aanvragen en onkosten indienen. Dit vermindert de administratieve druk op uw HR-afdeling aanzienlijk, zodat zij zich kunnen richten op talentontwikkeling.
                    </p>
                    <p className="mb-6">
                        Automatiseer contractvernieuwingen, proeftijdevaluaties en jubileumherinneringen. Odoo houdt alle belangrijke datums bij en stuurt automatisch notificaties naar de juiste personen.
                    </p>
                    <p>
                        Koppel HR aan de salarisadministratie module voor een volledige payroll-workflow. Van urenregistratie tot loonstrook, alles is naadloos verbonden en voldoet aan lokale wetgeving.
                    </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/5 via-rose-500/5 to-transparent border border-brand-indigo/10 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <UserPlus className="w-16 h-16 text-brand-indigo/20 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Voorbeeld van het wervings- en onboardingproces</p>
                </div>

                <div className="bg-gradient-to-r from-rose-600 to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Investeer in uw belangrijkste asset: uw mensen</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Stunda uw HR-processen kan digitaliseren met Odoo. Plan een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/odoo-modules/projectmanagement" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-rose-600 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-rose-600 transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Module</span>
                            Project Management
                        </div>
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

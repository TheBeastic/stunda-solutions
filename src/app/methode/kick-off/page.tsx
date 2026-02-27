"use client";

import { Users, ChevronRight, Handshake, BookOpen, MessageSquare, Shield } from "lucide-react";
import Link from "next/link";

const features = [
    { icon: Handshake, title: "SPOC Introductie", desc: "Uw dedicated Single Point of Contact wordt ge&iuml;ntroduceerd. Deze vaste contactpersoon begeleidt u door het volledige traject." },
    { icon: BookOpen, title: "Basistraining Odoo", desc: "Het kernteam krijgt een initi&euml;le training in de basislogica van Odoo, zodat iedereen de fundamenten begrijpt." },
    { icon: MessageSquare, title: "Verwachtingsmanagement", desc: "We stemmen verwachtingen af en defini&euml;ren duidelijke communicatielijnen, vergadercadans en escalatieprocedures." },
    { icon: Shield, title: "Projectcharter", desc: "Een formeel document dat scope, doelen, rollen en verantwoordelijkheden vastlegt. Iedereen weet wat er verwacht wordt." },
];

export default function KickOff() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-purple via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <Users className="w-4 h-4 text-brand-purple" />
                    Fase 2: 5% van het project
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Project Kick-off
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Een succesvolle ERP-implementatie valt of staat met afstemming. Tijdens de Kick-off zorgen we dat alle <strong className="text-brand-purple">stakeholders op &eacute;&eacute;n lijn zitten</strong> en klaar zijn voor het veranderingsproces.
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-brand-purple/10 via-brand-indigo/5 to-transparent border border-brand-purple/20 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <Users className="w-16 h-16 text-brand-purple/40 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Foto van een typische Stunda Kick-off sessie</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Wat gebeurt er in deze fase?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-brand-purple" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Het Fundament Leggen</h2>
                    <p className="mb-6">
                        Deze fase beslaat 5% van de doorlooptijd. We introduceren het projectteam, inclusief uw dedicated SPOC (Single Point of Contact), die uw interne team door het gehele traject zal leiden. Deze vaste contactpersoon zorgt voor heldere, effici&euml;nte communicatie vanaf dag &eacute;&eacute;n.
                    </p>
                    <p className="mb-6">
                        Daarnaast verzorgen we een initi&euml;le standaard training in Odoo, zodat het kernteam alvast feeling krijgt met de software-logica voordat het maatwerk begint. Verwachtingsmanagement is hier het sleutelwoord.
                    </p>
                    <p className="mb-6">
                        We defini&euml;ren samen de projectgovernance: wie neemt welke beslissingen, hoe vaak komen we samen en wat zijn de escalatiepaden? Dit voorkomt vertragingen en miscommunicatie later in het traject.
                    </p>
                    <p>
                        Aan het einde van de Kick-off heeft iedereen een duidelijk beeld van de roadmap, de verwachte impact op hun dagelijks werk en de tijdlijn voor de komende maanden.
                    </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-brand-indigo/5 via-brand-purple/5 to-transparent border border-brand-indigo/10 p-12 md:p-16 flex flex-col items-center justify-center text-center mb-16">
                    <Handshake className="w-16 h-16 text-brand-indigo/20 mb-4" />
                    <p className="text-brand-indigo/40 font-medium text-sm">Voorbeeld van stakeholder alignment workshop</p>
                </div>

                <div className="bg-gradient-to-r from-brand-purple to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om het traject te starten?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Neem contact op met Stunda en plan uw eerste kennismakingsgesprek. Wij begeleiden u van begin tot eind.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/methode/roi-analyse" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-brand-magenta transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Fase</span>
                            ROI Analyse
                        </div>
                    </Link>
                    <Link href="/methode/implementatie" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Fase</span>
                            Implementatie
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

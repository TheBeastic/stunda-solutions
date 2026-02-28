"use client";

import { Boxes, ChevronRight, BarChart3, Zap, ScanLine, PackageCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
    { icon: ScanLine, title: "Barcode Scanning", desc: "Scan producten, locaties en verzendlabels met mobiele apparaten voor razendsnelle magazijnoperaties." },
    { icon: PackageCheck, title: "Automatische Herbestelling", desc: "Stel minimumvoorraadniveaus in en laat Odoo automatisch inkooporders genereren wanneer voorraad onder het drempelniveau zakt." },
    { icon: BarChart3, title: "Real-time Rapportages", desc: "Volg voorraadwaarde, omloopsnelheid en magazijnprestaties met dynamische dashboards en KPI-tracking." },
    { icon: Zap, title: "Multi-Magazijn", desc: "Beheer meerdere magazijnen, transitlocaties en dropshipping-routes vanuit één centraal overzicht." },
];

export default function VoorraadEnWMS() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-8">
                    <Boxes className="w-4 h-4" />
                    Odoo Module
                </div>

                {/* Hero */}
                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Voorraad &amp; WMS
                </h1>
                <p className="text-xl text-brand-indigo/80 leading-relaxed font-medium max-w-3xl mb-12">
                    Krijg volledige controle over uw toeleveringsketen met Odoo&apos;s intelligente <strong className="text-blue-600">Warehouse Management System (WMS)</strong>. Van ontvangst tot verzending, elk proces wordt gestroomlijnd.
                </p>

                {/* Voorraad Dashboard Screenshot */}
                <div className="rounded-2xl overflow-hidden border border-blue-200/50 shadow-lg mb-16">
                    <Image
                        src="/media/voorraad-dashboard.png"
                        alt="Odoo Voorraad Dashboard met voorraadvoorspelling en replenishment"
                        width={1024}
                        height={700}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                {/* Features Grid */}
                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Belangrijkste Functionaliteiten</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((f) => (
                        <div key={f.title} className="bg-white rounded-xl border border-brand-indigo/5 p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                                <f.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-indigo mb-2">{f.title}</h3>
                            <p className="text-brand-indigo/70 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Detailed Content */}
                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-6">Waarom Odoo voor Magazijnbeheer?</h2>
                    <p className="mb-6">
                        Minimaliseer handmatige handelingen door processen zoals orderpicken, verpakken en verzenden te optimaliseren. Dankzij real-time tracking weet u altijd precies waar uw voorraad zich bevindt, wat leidt tot minder fouten en een hogere klanttevredenheid.
                    </p>
                    <p className="mb-6">
                        Geautomatiseerde bestellingen zorgen ervoor dat u nooit zonder kritieke producten komt te zitten. Door integraties met scanners en mobiele apparaten werkt uw magazijnpersoneel sneller en effici&euml;nter dan ooit tevoren.
                    </p>
                </div>

                {/* Barcode App Screenshot */}
                <div className="flex justify-center mb-16">
                    <div className="rounded-2xl overflow-hidden border border-blue-200/50 shadow-lg max-w-sm">
                        <Image
                            src="/media/barcode-app.png"
                            alt="Odoo Barcode Scanning App voor magazijnbeheer en voorraadbeheer"
                            width={400}
                            height={650}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80 mb-16">
                    <p className="mb-6">
                        Odoo WMS ondersteunt geavanceerde pickstrategieën zoals wave picking, batch picking en zone-gebaseerd picken. Dit betekent dat uw magazijn schaalt met uw bedrijf, of u nu 100 of 100.000 SKU&apos;s beheert.
                    </p>
                    <p>
                        Dankzij de naadloze integratie met modules zoals Verkoop, Inkoop en Productie stroomt data automatisch door uw gehele supply chain. Geen dubbele invoer, geen handmatige reconciliatie—alles is real-time gesynchroniseerd.
                    </p>
                </div>

                {/* Picking Strategies */}
                <h2 className="text-2xl md:text-3xl font-bold text-brand-indigo mb-8">Picking Strategie&euml;n</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white rounded-2xl border border-brand-indigo/5 p-6 text-center shadow-sm">
                        <Image src="/media/picking-pack.png" alt="Odoo WMS Pack picking strategie voor magazijnoptimalisatie" width={300} height={300} className="w-full h-auto mb-4" />
                        <h3 className="text-lg font-bold text-brand-indigo">Pack</h3>
                        <p className="text-brand-indigo/60 text-sm">Verzamel items per order en verpak ze direct.</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-brand-indigo/5 p-6 text-center shadow-sm">
                        <Image src="/media/picking-packed.png" alt="Odoo WMS Batch picking strategie voor efficiënte orderverzameling" width={300} height={300} className="w-full h-auto mb-4" />
                        <h3 className="text-lg font-bold text-brand-indigo">Batch Picking</h3>
                        <p className="text-brand-indigo/60 text-sm">Combineer meerdere orders voor effici&euml;nter picken.</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-brand-indigo/5 p-6 text-center shadow-sm">
                        <Image src="/media/picking-cluster.png" alt="Odoo WMS Cluster picking strategie voor meervoudige orderverzameling" width={300} height={300} className="w-full h-auto mb-4" />
                        <h3 className="text-lg font-bold text-brand-indigo">Cluster Picking</h3>
                        <p className="text-brand-indigo/60 text-sm">Sorteer en verdeel items over meerdere orders tegelijk.</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-brand-indigo rounded-2xl p-8 md:p-12 text-center text-white mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om uw magazijn te transformeren?</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Ontdek hoe Stunda uw voorraad- en magazijnprocessen kan optimaliseren met Odoo. Plan een gratis adviesgesprek.
                    </p>
                    <Link href="/#audit" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-indigo font-bold rounded-full hover:bg-zinc-100 transition-colors">
                        Plan een Gesprek <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/#solutions" className="text-brand-indigo/50 font-medium hover:text-brand-indigo transition-colors flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 rotate-180" /> Terug naar Modules
                    </Link>
                    <Link href="/odoo-modules/financien" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-blue-600 transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Module</span>
                            Financi&euml;n
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

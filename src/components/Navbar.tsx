"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, BarChart3, Users, Settings, Rocket, GitMerge, FileText, ChevronRight, Boxes, CircleDollarSign, Wrench, Briefcase, HeartHandshake, LineChart } from "lucide-react";

const methodeItems = [
    { name: "ROI Analyse", href: "/methode/roi-analyse", icon: BarChart3, desc: "10% - Strategie en vaststellen van ROI." },
    { name: "Project Kick-off", href: "/methode/kick-off", icon: Users, desc: "5% - Stakeholder alignment en start." },
    { name: "Implementatie", href: "/methode/implementatie", icon: Settings, desc: "80% - Analyse, dev, testen en training." },
    { name: "Go-Live", href: "/methode/go-live", icon: Rocket, desc: "5% - Eindgebruikertraining en bugfixes." },
    { name: "Tweede Uitrol", href: "/methode/tweede-uitrol", icon: GitMerge, desc: "Nieuwe iteraties na de initiële lancering." },
    { name: "Voortgangsrapport", href: "/methode/voortgangsrapport", icon: FileText, desc: "Groeistrategie en lange-termijn doelen." },
];

const odooModules = [
    { name: "Voorraad & WMS", href: "/odoo-modules/voorraad-en-wms", icon: Boxes, desc: "Real-time tracking en magazijnbeheer." },
    { name: "Financiën", href: "/odoo-modules/financien", icon: CircleDollarSign, desc: "Geïntegreerde boekhouding en rapportage." },
    { name: "CRM & Verkoop", href: "/odoo-modules/crm-en-verkoop", icon: Users, desc: "Volg leads en sluit meer deals." },
    { name: "Productie (MRP)", href: "/odoo-modules/productie", icon: Wrench, desc: "Plan en volg productieprocessen." },
    { name: "Project Management", href: "/odoo-modules/projectmanagement", icon: Briefcase, desc: "Organiseer en plan projecttaken." },
    { name: "Human Resources", href: "/odoo-modules/human-resources", icon: HeartHandshake, desc: "Beheer medewerkers en werving." },
    { name: "Business Intelligence", href: "/odoo-modules/business-intelligence", icon: LineChart, desc: "Visualiseer data voor betere keuzes." },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-brand-indigo/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-brand-indigo z-50 relative">
                    STUNDA<span className="text-brand-magenta">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-sm font-semibold text-brand-indigo/80 hover:text-brand-magenta transition-colors">
                        Home
                    </Link>

                    {/* Odoo Modules Mega Menu Dropdown Trigger */}
                    <div
                        className="relative h-20 flex items-center"
                        onMouseEnter={() => setActiveDropdown("modules")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1 text-sm font-semibold text-brand-indigo/80 hover:text-brand-magenta transition-colors">
                            Odoo Modules
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "modules" ? "rotate-180 text-brand-magenta" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {activeDropdown === "modules" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scaleX: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scaleX: 1 }}
                                    exit={{ opacity: 0, y: 5, scaleX: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-2xl border border-brand-indigo/5 overflow-hidden origin-top"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-transparent pointer-events-none" />

                                    <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                                        {odooModules.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setActiveDropdown(null)}
                                                className="group flex gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors"
                                            >
                                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-indigo/[0.03] group-hover:bg-brand-magenta/10 flex items-center justify-center transition-colors">
                                                    <item.icon className="w-6 h-6 text-brand-indigo group-hover:text-brand-magenta transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-brand-indigo mb-1 flex items-center gap-1">
                                                        {item.name}
                                                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-magenta" />
                                                    </h4>
                                                    <p className="text-sm text-brand-indigo/60 leading-snug">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="bg-zinc-50 px-8 py-5 border-t border-brand-indigo/5 flex justify-between items-center relative z-10">
                                        <p className="text-sm font-semibold text-brand-indigo/70">
                                            Alle apps naadloos geïntegreerd in één systeem.
                                        </p>
                                        <Link href="/#solutions" onClick={() => setActiveDropdown(null)} className="text-sm font-bold text-brand-magenta hover:text-brand-purple transition-colors flex items-center gap-1">
                                            Bekijk overzicht <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Methode Mega Menu Dropdown Trigger */}
                    <div
                        className="relative h-20 flex items-center"
                        onMouseEnter={() => setActiveDropdown("methode")}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="flex items-center gap-1 text-sm font-semibold text-brand-indigo/80 hover:text-brand-magenta transition-colors">
                            Onze Methode
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "methode" ? "rotate-180 text-brand-magenta" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {activeDropdown === "methode" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scaleX: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scaleX: 1 }}
                                    exit={{ opacity: 0, y: 5, scaleX: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-2xl shadow-2xl border border-brand-indigo/5 overflow-hidden origin-top"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/5 to-transparent pointer-events-none" />

                                    <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                                        {methodeItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setActiveDropdown(null)}
                                                className="group flex gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors"
                                            >
                                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-indigo/[0.03] group-hover:bg-brand-magenta/10 flex items-center justify-center transition-colors">
                                                    <item.icon className="w-6 h-6 text-brand-indigo group-hover:text-brand-magenta transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-brand-indigo mb-1 flex items-center gap-1">
                                                        {item.name}
                                                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-magenta" />
                                                    </h4>
                                                    <p className="text-sm text-brand-indigo/60 leading-snug">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="bg-zinc-50 px-8 py-5 border-t border-brand-indigo/5 flex justify-between items-center relative z-10">
                                        <p className="text-sm font-semibold text-brand-indigo/70">
                                            Leer de Stunda Methode van A tot Z kennen.
                                        </p>
                                        <Link href="/#method" onClick={() => setActiveDropdown(null)} className="text-sm font-bold text-brand-magenta hover:text-brand-purple transition-colors flex items-center gap-1">
                                            Bekijk overzicht <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/#audit" className="text-sm font-semibold text-brand-indigo/80 hover:text-brand-magenta transition-colors">
                        Over Ons
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block relative z-50">
                    <Link href="/#audit" className="px-5 py-2.5 bg-brand-indigo text-white text-sm font-semibold rounded-full hover:bg-brand-indigo/90 shadow-lg shadow-brand-indigo/20 transition-all hover:scale-105 active:scale-95">
                        Gratis Audit
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-50 p-2 text-brand-indigo"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-brand-indigo/10 bg-white overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-6">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-brand-indigo">
                                Home
                            </Link>
                            <div className="flex flex-col gap-4">
                                <div className="text-lg font-bold text-brand-indigo/60 border-b border-brand-indigo/5 pb-2">Odoo Modules</div>
                                <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-brand-indigo/10">
                                    {odooModules.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-base font-semibold text-brand-indigo flex items-center gap-3"
                                        >
                                            <item.icon className="w-4 h-4 text-brand-magenta" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="text-lg font-bold text-brand-indigo/60 border-b border-brand-indigo/5 pb-2">Onze Methode</div>
                                <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-brand-indigo/10">
                                    {methodeItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-base font-semibold text-brand-indigo flex items-center gap-3"
                                        >
                                            <item.icon className="w-4 h-4 text-brand-magenta" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/#audit" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-brand-indigo">
                                Over Ons
                            </Link>

                            <Link href="/#audit" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-5 py-3 bg-brand-indigo text-white text-center font-semibold rounded-full w-full">
                                Gratis Audit
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

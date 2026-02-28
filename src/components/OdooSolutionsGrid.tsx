"use client";

import { motion } from "framer-motion";
import { Boxes, CircleDollarSign, Users, Wrench, Briefcase, HeartHandshake, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
    {
        title: "Voorraad & WMS",
        description: "Real-time tracking, geautomatiseerde bestellingen en slim magazijnbeheer. Inclusief barcode scanning, picking strategieën en warehouse management.",
        icon: Boxes,
        href: "/odoo-modules/voorraad-en-wms",
        color: "from-blue-500 to-cyan-400",
        bgLight: "bg-blue-50"
    },
    {
        title: "Financiën",
        description: "Geïntegreerde boekhouding, facturatie en onkosten met directe bankkoppelingen. Automatische BTW-aangiften en financiële rapportages in real-time.",
        icon: CircleDollarSign,
        href: "/odoo-modules/financien",
        color: "from-emerald-500 to-teal-400",
        bgLight: "bg-emerald-50"
    },
    {
        title: "CRM & Verkoop",
        description: "Volg leads, sluit deals en krijg nauwkeurige verkoopprognoses. Beheer offertes en klantrelaties in een vloeiende pipeline.",
        icon: Users,
        href: "/odoo-modules/crm-en-verkoop",
        color: "from-brand-magenta to-pink-500",
        bgLight: "bg-pink-50"
    },
    {
        title: "Productie (MRP)",
        description: "Plan en volg productieprocessen met geavanceerde MRP-integratie. Werkorders, stuklijsten en kwaliteitscontrole in één systeem.",
        icon: Wrench,
        href: "/odoo-modules/productie",
        color: "from-brand-purple to-indigo-500",
        bgLight: "bg-purple-50"
    },
    {
        title: "Project Management",
        description: "Plan taken, beheer urenstaten en houd projecten binnen budget. Gantt-charts, tijdsregistratie en klantportaal inbegrepen.",
        icon: Briefcase,
        href: "/odoo-modules/projectmanagement",
        color: "from-orange-500 to-amber-400",
        bgLight: "bg-orange-50"
    },
    {
        title: "Human Resources",
        description: "Centraliseer medewerkersgegevens, werving en urenregistratie. Verlofbeheer, evaluaties en personeelsplanning vanuit één overzicht.",
        icon: HeartHandshake,
        href: "/odoo-modules/human-resources",
        color: "from-rose-500 to-red-400",
        bgLight: "bg-rose-50"
    },
    {
        title: "Business Intelligence",
        description: "Transformeer ruwe data naar visuele dashboards. Cross-module rapportage en real-time KPI's voor datagedreven beslissingen.",
        icon: LineChart,
        href: "/odoo-modules/business-intelligence",
        color: "from-violet-500 to-fuchsia-400",
        bgLight: "bg-violet-50"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function OdooSolutionsGrid() {
    return (
        <section id="solutions" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-indigo mb-4">
                        Odoo ERP Modules voor Elke Bedrijfsbehoefte
                    </h2>
                    <p className="text-lg text-brand-indigo/60 max-w-2xl mx-auto">
                        Ervaar de kracht van een volledig geïntegreerd ERP-systeem. Stunda Solutions stemt elke Odoo module perfect af op uw specifieke operationele workflows: van voorraadbeheer en boekhouding tot CRM en business intelligence.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {solutions.map((solution, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white border border-brand-indigo/5 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover gradient background reveal */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${solution.color}`} />

                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${solution.bgLight} group-hover:scale-110 transition-transform duration-300`}>
                                <solution.icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-br ${solution.color} !text-brand-indigo`} style={{ stroke: "url(#grad" + idx + ")" }} />
                                <svg width="0" height="0">
                                    <linearGradient id={`grad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--color-brand-magenta)" />
                                        <stop offset="100%" stopColor="var(--color-brand-purple)" />
                                    </linearGradient>
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-brand-indigo mb-3 relative z-10">
                                {solution.title}
                            </h3>

                            <p className="text-brand-indigo/70 leading-relaxed mb-6 relative z-10">
                                {solution.description}
                            </p>

                            <div className="relative z-10 mt-auto pt-4 border-t border-brand-indigo/5 flex items-center text-sm font-semibold text-brand-indigo group-hover:text-brand-magenta transition-colors">
                                Ontdek meer
                                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-magenta" />
                            </div>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r transition-all duration-500 ease-out z-10 from-brand-magenta to-brand-purple" />

                            <Link href={solution.href} className="absolute inset-0 z-20" aria-label={`Lees meer over ${solution.title}`}>
                                <span className="sr-only">{`Lees meer over ${solution.title}`}</span>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

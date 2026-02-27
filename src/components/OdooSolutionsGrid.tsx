"use client";

import { motion } from "framer-motion";
import { CircleDollarSign, Boxes, Users, Wrench, Globe, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";

const bentoItems = [
    {
        title: "Financiën",
        description: "Real-time inzicht in uw cashflow en automatische bankkoppelingen. Focus op ROI, niet op administratie.",
        icon: CircleDollarSign,
        href: "/odoo-modules/financien",
        gradient: "from-emerald-500 to-teal-400",
        glowColor: "rgba(16, 185, 129, 0.15)",
        span: "md:col-span-2 md:row-span-2",
        large: true,
    },
    {
        title: "Voorraad & WMS",
        description: "Real-time tracking, geautomatiseerde bestellingen en slim magazijnbeheer dat schaalt met uw groei.",
        icon: Boxes,
        href: "/odoo-modules/voorraad-en-wms",
        gradient: "from-blue-500 to-cyan-400",
        glowColor: "rgba(59, 130, 246, 0.15)",
        span: "md:col-span-2",
        large: false,
    },
    {
        title: "CRM & Verkoop",
        description: "Beheer leads en offertes in een vloeiende pipeline.",
        icon: Users,
        href: "/odoo-modules/crm-en-verkoop",
        gradient: "from-brand-magenta to-pink-500",
        glowColor: "rgba(236, 72, 153, 0.15)",
        span: "",
        large: false,
    },
    {
        title: "Productie (MRP)",
        description: "Stroomlijn complexe productieprocessen met precisie.",
        icon: Wrench,
        href: "/odoo-modules/productie",
        gradient: "from-brand-purple to-indigo-500",
        glowColor: "rgba(139, 92, 246, 0.15)",
        span: "",
        large: false,
    },
    {
        title: "Website & eCommerce",
        description: "Een naadloze integratie tussen uw webshop en back-office.",
        icon: Globe,
        href: "/odoo-modules/voorraad-en-wms",
        gradient: "from-orange-500 to-amber-400",
        glowColor: "rgba(249, 115, 22, 0.15)",
        span: "md:col-span-2",
        large: false,
    },
    {
        title: "HR & Planning",
        description: "Efficiënt personeelsbeheer voor groeiende teams.",
        icon: HeartHandshake,
        href: "/odoo-modules/human-resources",
        gradient: "from-rose-500 to-red-400",
        glowColor: "rgba(244, 63, 94, 0.15)",
        span: "",
        large: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function OdooSolutionsGrid() {
    return (
        <section id="solutions" className="py-24 bg-white relative overflow-hidden">
            {/* Ambient background elements */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-indigo mb-4">
                        Onze Modules
                    </h2>
                    <p className="text-lg text-brand-indigo/60 max-w-2xl mx-auto">
                        Ervaar de kracht van een volledig geïntegreerd systeem. Stunda Solutions stemt Odoo perfect af op uw specifieke operationele workflows.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {bentoItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: `0 0 40px ${item.glowColor}, 0 20px 60px rgba(0,0,0,0.08)`,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`group relative rounded-xl overflow-hidden cursor-pointer ${item.span} ${item.large ? "min-h-[340px]" : "min-h-[180px]"}`}
                            style={{ borderRadius: "12px" }}
                        >
                            {/* Glass background */}
                            <div
                                className="absolute inset-0 backdrop-blur-sm border border-white/20"
                                style={{
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%)",
                                    borderRadius: "12px",
                                }}
                            />

                            {/* Gradient accent on hover */}
                            <div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}
                                style={{ borderRadius: "12px" }}
                            />

                            {/* Bottom gradient bar */}
                            <div
                                className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-500 ease-out z-30`}
                            />

                            {/* Content */}
                            <div className={`relative z-10 h-full flex flex-col justify-between ${item.large ? "p-8 md:p-10" : "p-6"}`}>
                                <div>
                                    <div className={`${item.large ? "w-14 h-14 mb-6" : "w-11 h-11 mb-4"} rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                                        <item.icon className={`${item.large ? "w-7 h-7" : "w-5 h-5"} text-white`} />
                                    </div>

                                    <h3 className={`${item.large ? "text-2xl md:text-3xl" : "text-lg"} font-bold text-brand-indigo mb-3`}>
                                        {item.title}
                                    </h3>

                                    <p className={`${item.large ? "text-base md:text-lg leading-relaxed" : "text-sm leading-relaxed"} text-brand-indigo/65`}>
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center text-sm font-semibold text-brand-indigo/70 group-hover:text-brand-magenta transition-colors mt-4">
                                    Ontdek meer
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-magenta" />
                                </div>
                            </div>

                            {/* Full clickable link overlay */}
                            <Link
                                href={item.href}
                                className="absolute inset-0 z-20"
                                aria-label={`Lees meer over ${item.title}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Search, Cog, GraduationCap, HeadphonesIcon } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Analyse",
        description: "Een diepgaande analyse van uw huidige workflows om knelpunten te identificeren en de ideale Odoo-architectuur te ontwerpen. Inclusief ROI-berekening per module.",
        icon: Search,
    },
    {
        number: "02",
        title: "Implementatie",
        description: "Uiterst nauwkeurige, razendsnelle uitrol van de gekozen Odoo modules. Configuratie, data-migratie en maatwerk perfect afgestemd op uw operationele behoeften.",
        icon: Cog,
    },
    {
        number: "03",
        title: "Training",
        description: "Uitgebreide onboarding voor uw team via een dedicated SPOC met hands-on Odoo training. Soepele adoptie en directe productiviteitswinst gegarandeerd.",
        icon: GraduationCap,
    },
    {
        number: "04",
        title: "Ondersteuning",
        description: "Doorlopend proactief onderhoud, voortgangsrapportages en snelle ondersteuning. Wij houden uw Odoo ERP systeem perfect draaiende en geoptimaliseerd.",
        icon: HeadphonesIcon,
    }
];

export default function StundaMethod() {
    return (
        <section id="method" className="py-24 bg-brand-indigo text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-magenta via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-brand-magenta font-semibold text-sm mb-6"
                    >
                        De Stunda Methode
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Bewezen Odoo Implementatie Methode. Snelle ROI.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/70 max-w-2xl mx-auto"
                    >
                        Ons beproefde vierfasenproces garandeert een naadloze overgang naar operationele excellentie. Van initiële procesanalyse tot doorlopende ondersteuning — zonder downtime of productiviteitsverlies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-magenta/20 via-brand-purple/50 to-brand-magenta/20" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-brand-indigo border-2 border-brand-purple/30 flex justify-center items-center mb-6 relative z-10 group-hover:border-brand-magenta transition-colors duration-300 shadow-[0_0_30px_rgba(142,0,229,0.2)] group-hover:shadow-[0_0_40px_rgba(192,0,223,0.4)] bg-gradient-to-br from-brand-indigo to-[#2A2566]">
                                <step.icon className="w-10 h-10 text-brand-magenta group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-magenta text-white font-bold flex items-center justify-center text-sm shadow-lg">
                                    {step.number}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm md:text-base">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-background">
            {/* Background Gradient Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-magenta/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-indigo/10 bg-brand-indigo/5 text-brand-indigo font-medium text-sm"
                >
                    Operationele Excellentie Geleverd
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-brand-indigo max-w-4xl mb-6 leading-tight"
                >
                    Ontgrendel uw Zakelijk Potentieel via{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-purple">
                        Odoo Excellentie
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-brand-indigo/70 max-w-2xl mb-12"
                >
                    Transformeer uw activiteiten met een razendsnelle, overzichtelijke ERP-opzet die aanvoelt als een geoliede machine. Op maat gemaakt voor schaalbare groei.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 bg-brand-indigo shadow-lg shadow-brand-indigo/25"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-magenta to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                        <span className="relative flex items-center gap-2">
                            Gratis Odoo Readiness Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#1E1A4E 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />
        </section>
    );
}

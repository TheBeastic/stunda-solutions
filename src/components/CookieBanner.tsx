"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
                >
                    <div className="bg-white rounded-2xl shadow-2xl border border-brand-indigo/10 p-6 relative">
                        {/* Close button */}
                        <button
                            onClick={handleDecline}
                            className="absolute top-3 right-3 p-1 text-brand-indigo/30 hover:text-brand-indigo/60 transition-colors"
                            aria-label="Sluiten"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-indigo/5 flex items-center justify-center">
                                <Cookie className="w-5 h-5 text-brand-magenta" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-brand-indigo text-sm mb-1">
                                    Cookies
                                </h3>
                                <p className="text-brand-indigo/60 text-xs leading-relaxed mb-4">
                                    Wij gebruiken cookies om uw ervaring te verbeteren en onze website te analyseren. Lees ons{" "}
                                    <Link href="/privacy" className="text-brand-magenta hover:underline">
                                        privacybeleid
                                    </Link>{" "}
                                    voor meer informatie.
                                </p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleAccept}
                                        className="px-4 py-2 bg-brand-indigo text-white text-xs font-semibold rounded-full hover:bg-brand-indigo/90 transition-all hover:scale-105 active:scale-95"
                                    >
                                        Accepteren
                                    </button>
                                    <button
                                        onClick={handleDecline}
                                        className="px-4 py-2 bg-brand-indigo/5 text-brand-indigo text-xs font-semibold rounded-full hover:bg-brand-indigo/10 transition-all"
                                    >
                                        Weigeren
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

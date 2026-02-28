"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";

export default function LeadGenForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        companySize: "",
        currentERP: "",
        name: "",
        email: "",
        phone: ""
    });

    const handleNext = () => setStep((s) => Math.min(s + 1, 3));
    const handleBack = () => setStep((s) => Math.max(s - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@stunda.be", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `Nieuwe Audit Aanvraag van ${formData.name}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert("Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.");
            }
        } catch (error) {
            console.error(error);
            alert("Er is een fout opgetreden. Controleer uw verbinding.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateFormData = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section id="audit" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="bg-white border border-brand-indigo/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    {/* Left panel - Info */}
                    <div className="w-full md:w-5/12 bg-gradient-to-br from-brand-indigo to-[#2A2566] p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-magenta via-transparent to-transparent blur-2xl" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Vraag uw Gratis Audit Aan.</h3>
                            <p className="text-white/80 leading-relaxed mb-8">
                                Vertel ons over uw huidige opzet, en onze Odoo experts zullen een op maat gemaakte transitie-roadmap opstellen, specifiek gericht op uw knelpunten.
                            </p>

                            <ul className="space-y-4">
                                {["Workflow analyse", "Module aanbevelingen", "ROI prognose"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/90">
                                        <CheckCircle2 className="w-5 h-5 text-brand-magenta" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right panel - Form */}
                    <div className="w-full md:w-7/12 p-10 relative bg-zinc-50/50">
                        {!isSuccess ? (
                            <>
                                {/* Progress bar */}
                                <div className="mb-8 flex items-center justify-between relative">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-brand-indigo/10 rounded-full" />
                                    <div
                                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-brand-magenta to-brand-purple rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                                    />
                                    {[1, 2, 3].map((num) => (
                                        <div
                                            key={num}
                                            className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${step >= num ? "bg-brand-indigo text-white" : "bg-white border-2 border-brand-indigo/10 text-brand-indigo/30"
                                                }`}
                                        >
                                            {num}
                                        </div>
                                    ))}
                                </div>

                                <div className="min-h-[300px] flex flex-col">
                                    <AnimatePresence mode="wait">
                                        {step === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="flex-1"
                                            >
                                                <h4 className="text-xl font-bold text-brand-indigo mb-6">Bedrijfsgrootte</h4>
                                                <div className="space-y-3">
                                                    {["1-10", "11-50", "51-200", "201-500", "500+"].map((size) => (
                                                        <label key={size} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.companySize === size ? "border-brand-magenta bg-brand-magenta/5 ring-1 ring-brand-magenta" : "border-brand-indigo/10 hover:border-brand-indigo/30 bg-white"
                                                            }`}>
                                                            <input
                                                                type="radio"
                                                                name="companySize"
                                                                value={size}
                                                                className="hidden"
                                                                checked={formData.companySize === size}
                                                                onChange={(e) => updateFormData("companySize", e.target.value)}
                                                            />
                                                            <span className="font-medium text-brand-indigo">{size} medewerkers</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="flex-1"
                                            >
                                                <h4 className="text-xl font-bold text-brand-indigo mb-6">Huidig ERP</h4>
                                                <div className="space-y-3">
                                                    {["Geen / Spreadsheets", "QuickBooks / Xero", "SAP / Oracle", "Oudere Odoo Versie", "Andere Verouderde Software"].map((erp) => (
                                                        <label key={erp} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${formData.currentERP === erp ? "border-brand-purple bg-brand-purple/5 ring-1 ring-brand-purple" : "border-brand-indigo/10 hover:border-brand-indigo/30 bg-white"
                                                            }`}>
                                                            <input
                                                                type="radio"
                                                                name="currentERP"
                                                                value={erp}
                                                                className="hidden"
                                                                checked={formData.currentERP === erp}
                                                                onChange={(e) => updateFormData("currentERP", e.target.value)}
                                                            />
                                                            <span className="font-medium text-brand-indigo">{erp}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="flex-1 space-y-4 shadow-sm"
                                            >
                                                <h4 className="text-xl font-bold text-brand-indigo mb-6">Contactgegevens</h4>
                                                <div>
                                                    <label className="block text-sm font-medium text-brand-indigo/70 mb-1">Volledige Naam *</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="w-full p-3 border border-brand-indigo/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-magenta bg-white"
                                                        value={formData.name}
                                                        onChange={(e) => updateFormData("name", e.target.value)}
                                                        placeholder="Jane Doe"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-brand-indigo/70 mb-1">Zakelijk E-mailadres *</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        className="w-full p-3 border border-brand-indigo/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-magenta bg-white"
                                                        value={formData.email}
                                                        onChange={(e) => updateFormData("email", e.target.value)}
                                                        placeholder="jane@example.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-brand-indigo/70 mb-1">Telefoonnummer *</label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        className="w-full p-3 border border-brand-indigo/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-magenta bg-white"
                                                        value={formData.phone}
                                                        onChange={(e) => updateFormData("phone", e.target.value)}
                                                        placeholder="+32 469 73 29 33"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Form Actions */}
                                    <div className="mt-8 pt-6 border-t border-brand-indigo/5 flex items-center justify-between">
                                        {step > 1 ? (
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                className="px-6 py-2.5 text-brand-indigo font-medium hover:bg-brand-indigo/5 rounded-full transition-colors"
                                            >
                                                Terug
                                            </button>
                                        ) : (
                                            <div />
                                        )}

                                        {step < 3 ? (
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                disabled={step === 1 ? !formData.companySize : !formData.currentERP}
                                                className="px-8 py-2.5 bg-brand-indigo text-white font-medium rounded-full hover:bg-brand-indigo/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                            >
                                                Volgende <ChevronRight className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    if (!formData.name || !formData.email || !formData.phone) {
                                                        alert("Vul a.u.b. uw naam, e-mailadres en telefoonnummer in.");
                                                        return;
                                                    }
                                                    handleSubmit(e);
                                                }}
                                                disabled={isSubmitting}
                                                className="px-8 py-2.5 bg-gradient-to-r from-brand-magenta to-brand-purple text-white font-medium rounded-full hover:shadow-lg hover:shadow-brand-purple/20 transition-all disabled:opacity-70 flex items-center gap-2"
                                            >
                                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Audit Aanvragen"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-4"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <h4 className="text-2xl font-bold text-brand-indigo">Audit Aangevraagd!</h4>
                                <p className="text-brand-indigo/70 px-4">
                                    Bedankt, {formData.name || 'daar'}. Onze Odoo experts beoordelen uw gegevens en nemen binnenkort contact op via {formData.email || 'e-mail'}.
                                </p>
                                <button
                                    onClick={() => { setIsSuccess(false); setStep(1); }}
                                    className="mt-6 text-sm text-brand-magenta font-medium hover:underline"
                                >
                                    Nog een aanvraag indienen
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

import LeadGenForm from "@/components/LeadGenForm";
import { Phone, Linkedin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 relative bg-zinc-50 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-magenta/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-indigo/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-brand-indigo mb-6">
                        Neem <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-purple">Contact</span> Op
                    </h1>
                    <p className="text-lg text-brand-indigo/70 leading-relaxed max-w-2xl mx-auto">
                        Klaar om uw bedrijfsprocessen te automatiseren? Wij staan klaar om naar uw wensen te luisteren en de perfecte Odoo ERP oplossing te realiseren. Bereik ons direct via telefoon of LinkedIn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {/* LinkedIn Card */}
                    <a
                        href="https://www.linkedin.com/company/stunda-solutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-3xl p-10 border border-brand-indigo/10 shadow-xl hover:shadow-2xl hover:border-brand-magenta/30 transition-all duration-300 flex flex-col items-center justify-center text-center interactive-card"
                    >
                        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                            <Linkedin className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-brand-indigo mb-2">LinkedIn</h2>
                        <p className="text-brand-indigo/60 mb-6">
                            Blijf op de hoogte van onze laatste updates en innovaties. Connecteer met Stunda Solutions op LinkedIn.
                        </p>
                        <span className="inline-flex items-center gap-2 text-brand-magenta font-semibold group-hover:gap-3 transition-all">
                            Bezoek onze pagina &rarr;
                        </span>
                    </a>

                    {/* Phone Card */}
                    <a
                        href="tel:+32469732933"
                        className="group bg-gradient-to-br from-brand-indigo to-[#2A2566] text-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden interactive-card"
                    >
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-magenta via-transparent to-transparent blur-2xl" />

                        <div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                            <Phone className="w-10 h-10 text-brand-magenta" />
                        </div>
                        <h2 className="relative z-10 text-2xl font-bold mb-2">Direct Bellen</h2>
                        <p className="relative z-10 text-white/80 mb-6">
                            Heeft u direct een vraag of wilt u een afspraak inplannen? Bel ons en wij helpen u meteen verder.
                        </p>
                        <span className="relative z-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-purple">
                            0469 73 29 33
                        </span>
                    </a>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-bold text-brand-indigo mb-4">Direct Uw Gratis Audit Aanvragen</h2>
                    <p className="text-brand-indigo/70">Vul hieronder uw gegevens in en wij nemen zo snel mogelijk contact op om de transitie-roadmap voor uw bedrijf te bespreken.</p>
                </div>
            </div>

            {/* Embed LeadGenForm here so they can request the audit right from the contact page */}
            <LeadGenForm />
        </main>
    );
}

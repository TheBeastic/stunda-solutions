import IntegrationsList from "@/components/IntegrationsList";
import LeadGenForm from "@/components/LeadGenForm";

export const metadata = {
  title: "Onze Integraties | Naadloze Software Koppelingen",
  description:
    "Ontdek alle software en apps die naadloos kunnen integreren met jouw Odoo ERP-systeem. Van CRM tot Productiviteit en Logistiek.",
};

export default function IntegratiesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-[72px]">
      {/* Small Hero section for the Integraties page */}
      <section className="relative py-24 bg-white overflow-hidden border-b border-brand-indigo/10">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-brand-indigo mb-6">
            Eén Systeem, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-purple">
              Oneindige Mogelijkheden
            </span>
          </h1>
          <p className="text-xl text-brand-indigo/70 max-w-3xl mx-auto leading-relaxed">
            Centraliseer je bedrijf. Of je nu werkt met populaire cloud apps of op maat gemaakte webhooks nodig hebt, wij zorgen voor de perfecte integratie.
          </p>
        </div>
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none opacity-50">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-indigo/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-magenta/5 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* The new Component */}
      <IntegrationsList />

      {/* Reusable Lead Gen form */}
      <LeadGenForm />
    </main>
  );
}

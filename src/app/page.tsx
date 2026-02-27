import HeroSection from "@/components/HeroSection";
import OdooSolutionsGrid from "@/components/OdooSolutionsGrid";
import StundaMethod from "@/components/StundaMethod";
import LeadGenForm from "@/components/LeadGenForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="pt-20">
        <HeroSection />
        <OdooSolutionsGrid />
        <StundaMethod />
        <LeadGenForm />
      </div>
    </main>
  );
}

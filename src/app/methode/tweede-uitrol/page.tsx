"use client";

import { GitMerge, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TweedeUitrol() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-purple via-transparent to-transparent blur-3xl" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-indigo/5 text-brand-indigo font-semibold text-sm mb-8">
                    <GitMerge className="w-4 h-4 text-brand-purple" />
                    Fase 5: Continue Verbetertraject
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-brand-indigo mb-6">
                    Tweede Uitrol (Second Deployment)
                </h1>

                <div className="prose prose-lg prose-indigo max-w-none text-brand-indigo/80">
                    <p className="text-xl mb-8 leading-relaxed font-medium">
                        Na een succesvolle livegang stoppen we niet. De <strong className="text-brand-purple">Tweede Uitrol</strong> richt zich op fasering van secundaire wensen (&quot;nice-to-haves&quot;) die opzettelijk buiten de initiële scope zijn gehouden om de eerste time-to-market te versnellen.
                    </p>
                    <p className="mb-6">
                        Nu het kernsysteem robuust draait en uw medewerkers getraind zijn, breiden we de functionaliteit uit met complexere modules of geavanceerde automatiseringen. Dit modulaire groeimodel voorkomt projectmoeheid.
                    </p>
                    <p className="mb-12">
                        Elke nieuwe uitrol wordt behandeld als een mini-project met zijn eigen analyse, ontwerp en testfase, met minimale impact op uw dagelijkse operatie.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-indigo/10 gap-6">
                    <Link href="/methode/go-live" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-brand-magenta transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="text-left">
                            <span className="block text-sm font-normal text-brand-indigo/50">Vorige Fase</span>
                            Go-Live
                        </div>
                    </Link>

                    <Link href="/methode/voortgangsrapport" className="group flex items-center gap-3 text-brand-indigo font-bold hover:text-brand-magenta transition-colors">
                        <div className="text-right">
                            <span className="block text-sm font-normal text-brand-indigo/50">Volgende Fase</span>
                            Voortgangsrapport
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-brand-indigo/10 flex items-center justify-center group-hover:border-brand-magenta transition-colors shadow-sm">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

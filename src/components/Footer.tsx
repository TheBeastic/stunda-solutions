import Link from "next/link";
import { Linkedin, Phone, Mail, ArrowRight } from "lucide-react";

const odooModules = [
    { name: "Voorraad & WMS", href: "/odoo-modules/voorraad-en-wms" },
    { name: "Financiën", href: "/odoo-modules/financien" },
    { name: "CRM & Verkoop", href: "/odoo-modules/crm-en-verkoop" },
    { name: "Productie (MRP)", href: "/odoo-modules/productie" },
    { name: "Project Management", href: "/odoo-modules/projectmanagement" },
    { name: "Human Resources", href: "/odoo-modules/human-resources" },
    { name: "Business Intelligence", href: "/odoo-modules/business-intelligence" },
];

const methodeItems = [
    { name: "1. ROI Analyse", href: "/methode/roi-analyse" },
    { name: "2. Project Kick-off", href: "/methode/kick-off" },
    { name: "3. Implementatie", href: "/methode/implementatie" },
    { name: "4. Go-Live", href: "/methode/go-live" },
    { name: "5. Tweede Uitrol", href: "/methode/tweede-uitrol" },
    { name: "6. Voortgangsrapport", href: "/methode/voortgangsrapport" },
];

export default function Footer() {
    return (
        <footer className="bg-brand-indigo text-white pt-20 pb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-magenta/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Contact */}
                    <div className="col-span-1 lg:col-span-4">
                        <Link href="/" className="text-3xl font-bold tracking-tight text-white mb-6 inline-block">
                            STUNDA<span className="text-brand-magenta">.</span>
                        </Link>
                        <p className="text-white/70 leading-relaxed mb-4 max-w-sm">
                            Premium IT-consultancybedrijf gespecialiseerd in razendsnelle, succesvolle Odoo ERP implementaties. Ontgrendel uw volledige zakelijke potentieel.
                        </p>
                        <p className="text-white/50 text-sm mb-8 max-w-sm">
                            Uw Odoo ERP implementatie partner in Vlaanderen, Limburg en heel België. Ook actief in Nederland.
                        </p>

                        <div className="space-y-4">
                            <a href="tel:+32469732933" className="flex items-center gap-3 text-white/80 hover:text-brand-magenta transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-magenta/20 transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>0469 73 29 33</span>
                            </a>
                            <a href="mailto:info@stunda.be" className="flex items-center gap-3 text-white/80 hover:text-brand-magenta transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-magenta/20 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>info@stunda.be</span>
                            </a>
                            <a href="https://www.linkedin.com/company/stundasolutions/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-brand-magenta transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-magenta/20 transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </div>
                                <span>LinkedIn Pagina</span>
                            </a>
                        </div>
                    </div>

                    {/* Odoo Modules */}
                    <div className="col-span-1 lg:col-span-3 lg:col-start-6">
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            Odoo Modules <ArrowRight className="w-4 h-4 text-brand-magenta hidden lg:block" />
                        </h4>
                        <ul className="space-y-3">
                            {odooModules.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/60 hover:text-white transition-colors flex items-center group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta/50 opacity-0 group-hover:opacity-100 mr-2 transition-all -ml-3.5 group-hover:ml-0" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Methode */}
                    <div className="col-span-1 lg:col-span-3">
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                            Onze Methode <ArrowRight className="w-4 h-4 text-brand-magenta hidden lg:block" />
                        </h4>
                        <ul className="space-y-3">
                            {methodeItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/60 hover:text-white transition-colors flex items-center group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta/50 opacity-0 group-hover:opacity-100 mr-2 transition-all -ml-3.5 group-hover:ml-0" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Stunda Solutions. Alle rechten voorbehouden.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                        <Link href="/contact" className="text-white/40 hover:text-white transition-colors">
                            Contact
                        </Link>
                        <Link href="/#audit" className="text-white/40 hover:text-white transition-colors">
                            Gratis Audit Aanvragen
                        </Link>
                        <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
                            Privacybeleid
                        </Link>
                        <Link href="/voorwaarden" className="text-white/40 hover:text-white transition-colors">
                            Algemene Voorwaarden
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

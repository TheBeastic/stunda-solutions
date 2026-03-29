"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Integration = {
    name: string;
    domain: string;
};

type Category = {
    title: string;
    description: string;
    integrations: Integration[];
};

const categories: Category[] = [
    {
        title: "Productiviteit",
        description: "Automatiseer je dagelijkse workflows en werk soepeler samen middels geïntegreerde productiviteitstools.",
        integrations: [
            { name: "Google Workspace", domain: "google.com" },
            { name: "Microsoft 365", domain: "microsoft.com" },
            { name: "Slack", domain: "slack.com" },
            { name: "Notion", domain: "notion.so" },
        ]
    },
    {
        title: "Retail & e-commerce",
        description: "Koppel je webshop met je voorraad- en ERP-systeem voor een naadloze afhandeling van orders.",
        integrations: [
            { name: "Shopify", domain: "shopify.com" },
            { name: "WooCommerce", domain: "woocommerce.com" },
            { name: "Magento", domain: "magento.com" },
            { name: "Lightspeed", domain: "lightspeedhq.com" },
        ]
    },
    {
        title: "Logistiek",
        description: "Optimaliseer verzendingen en verzendlabels direct vanuit je platform.",
        integrations: [
            { name: "Sendcloud", domain: "sendcloud.com" },
            { name: "ShipStation", domain: "shipstation.com" },
            { name: "FedEx", domain: "fedex.com" },
            { name: "UPS", domain: "ups.com" },
        ]
    },
    {
        title: "CRM",
        description: "Synchroniseer klantdata voor een compleet 360-graden klantbeeld.",
        integrations: [
            { name: "Salesforce", domain: "salesforce.com" },
            { name: "HubSpot", domain: "hubspot.com" },
            { name: "Pipedrive", domain: "pipedrive.com" },
            { name: "Zoho CRM", domain: "zoho.com" },
        ]
    },
    {
        title: "Marketing",
        description: "Integreer met je favoriete marketing automation en advertentie netwerken.",
        integrations: [
            { name: "Mailchimp", domain: "mailchimp.com" },
            { name: "ActiveCampaign", domain: "activecampaign.com" },
            { name: "Klaviyo", domain: "klaviyo.com" },
            { name: "Meta", domain: "meta.com" },
        ]
    },
    {
        title: "Dashboards & Rapportages",
        description: "Creëer geavanceerde inzichtelijke dashboards met krachtige BI-tools.",
        integrations: [
            { name: "Power BI", domain: "powerbi.com" },
            { name: "Tableau", domain: "tableau.com" },
            { name: "Looker", domain: "looker.com" },
            { name: "Metabase", domain: "metabase.com" },
        ]
    },
    {
        title: "Finance & Accounting",
        description: "Stroomlijn je boekhouding, facturatie en online betalingen in real-time.",
        integrations: [
            { name: "Exact Online", domain: "exact.com" },
            { name: "Yuki", domain: "yuki.nl" },
            { name: "Mollie", domain: "mollie.com" },
            { name: "Stripe", domain: "stripe.com" },
        ]
    },
    {
        title: "Op maat gemaakte integraties",
        description: "Verbind elk gewenst systeem met op maat gemaakte API's en webhooks.",
        integrations: [
            { name: "REST API", domain: "json.org" },
            { name: "Webhooks", domain: "zapier.com" },
            { name: "FTP / EDI", domain: "aws.amazon.com" },
            { name: "GraphQL", domain: "graphql.org" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
};

export default function IntegrationsList() {
    return (
        <section className="py-24 bg-zinc-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-indigo mb-4">
                        Ontdek Onze Integraties
                    </h2>
                    <p className="text-lg text-brand-indigo/60 max-w-2xl mx-auto">
                        We verbinden jouw favoriete tools naadloos met elkaar om zo processen te stroomlijnen en handmatig werk te minimaliseren.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {categories.map((category, catIdx) => (
                        <div key={catIdx} className="space-y-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-brand-indigo mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-brand-indigo/60 max-w-2xl">
                                    {category.description}
                                </p>
                            </div>

                            <motion.div
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {category.integrations.map((app, appIdx) => (
                                    <motion.div
                                        key={appIdx}
                                        variants={itemVariants}
                                        whileHover={{ y: -5 }}
                                        className="group relative bg-white border border-brand-indigo/5 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden"
                                    >
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-brand-magenta to-brand-purple" />
                                        
                                        <div className="w-16 h-16 mb-4 relative flex items-center justify-center rounded-2xl bg-zinc-50 p-3 group-hover:scale-110 transition-transform duration-300">
                                            {/* We use Clearbit API for dynamic high quality logos. Fallback to image tag directly to avoid Next.js domain config errors if any */}
                                            {/* Using standard img to avoid needing next.config.ts external domains setup for logo.clearbit.com */}
                                            <img
                                                src={`https://logo.clearbit.com/${app.domain}`}
                                                alt={`${app.name} logo`}
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    // Fallback mechanism if logo is not found
                                                    (e.currentTarget as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(app.name) + "&background=random&color=fff";
                                                }}
                                            />
                                        </div>
                                        <h4 className="font-semibold text-brand-indigo relative z-10 w-full truncate">
                                            {app.name}
                                        </h4>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-40 left-[-10%] w-[40%] h-[40%] bg-brand-magenta/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-40 right-[-10%] w-[40%] h-[40%] bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}

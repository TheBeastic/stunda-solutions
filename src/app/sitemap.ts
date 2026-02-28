import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://stunda.be";
    const now = new Date();

    const staticPages = [
        { url: `${baseUrl}/`, priority: 1.0 },
        { url: `${baseUrl}/contact`, priority: 0.9 },
        { url: `${baseUrl}/privacy`, priority: 0.3 },
        { url: `${baseUrl}/voorwaarden`, priority: 0.3 },
    ];

    const odooModules = [
        "voorraad-en-wms",
        "financien",
        "crm-en-verkoop",
        "productie",
        "projectmanagement",
        "human-resources",
        "business-intelligence",
    ];

    const methodePages = [
        "roi-analyse",
        "kick-off",
        "implementatie",
        "go-live",
        "tweede-uitrol",
        "voortgangsrapport",
    ];

    const moduleEntries = odooModules.map((slug) => ({
        url: `${baseUrl}/odoo-modules/${slug}`,
        priority: 0.8,
    }));

    const methodeEntries = methodePages.map((slug) => ({
        url: `${baseUrl}/methode/${slug}`,
        priority: 0.7,
    }));

    return [...staticPages, ...moduleEntries, ...methodeEntries].map(
        (entry) => ({
            ...entry,
            lastModified: now,
            changeFrequency: "weekly" as const,
        })
    );
}

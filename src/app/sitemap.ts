import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://clubaprendemas.com';

// Replicating netlab.mx structure with segmented sitemaps
export async function generateSitemaps() {
    const csvPath = path.join(process.cwd(), 'sitemap_regularizacion_escolar_3000_los_mochis.csv');
    if (!fs.existsSync(csvPath)) return [{ id: 'main' }];

    const csvContent = fs.readFileSync(csvPath, 'utf8');
    const lines = csvContent.split(/\r?\n/).slice(1);

    // Get unique categories for sitemap segments
    const categories = new Set<string>();
    lines.forEach(line => {
        const parts = line.split(',');
        if (parts.length > 0 && parts[0].trim()) {
            categories.add(parts[0].trim());
        }
    });

    // We return an array of objects with an ID for each category
    // Next.js will use these IDs to call the sitemap function multiple times
    return Array.from(categories).map(cat => ({ id: cat }));
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    // Specialized segment for the main site pages
    if (id === 'main') {
        return [
            {
                url: `${baseUrl}/`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 1,
            },
        ];
    }

    const csvPath = path.join(process.cwd(), 'sitemap_regularizacion_escolar_3000_los_mochis.csv');
    const dynamicLinks: MetadataRoute.Sitemap = [];

    try {
        if (fs.existsSync(csvPath)) {
            const csvContent = fs.readFileSync(csvPath, 'utf8');
            const lines = csvContent.split(/\r?\n/).slice(1);

            for (const line of lines) {
                const parts = line.split(',');
                if (parts.length < 3) continue;

                const category = parts[0].trim();
                if (category !== id) continue; // Only include links for the requested segment

                const ruta = parts[2].trim().replace(/^\//, '');

                dynamicLinks.push({
                    url: `${baseUrl}/${ruta}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.8, // Slightly higher than default for targeted keywords
                });
            }
        }
    } catch (error) {
        console.error(`Error generating sitemap segment [${id}]:`, error);
    }

    return dynamicLinks;
}

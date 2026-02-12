import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://clubaprendemas.com';

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

    return Array.from(categories).map(cat => ({ id: cat }));
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
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
                if (category !== id) continue;

                const ruta = parts[2].trim().replace(/^\//, '');

                dynamicLinks.push({
                    url: `${baseUrl}/${ruta}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.6,
                });
            }
        }
    } catch (error) {
        console.error('Error generating dynamic sitemap slice:', error);
    }

    return dynamicLinks;
}

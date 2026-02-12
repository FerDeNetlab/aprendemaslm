import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://clubaprendemas.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const csvPath = path.join(process.cwd(), 'sitemap_regularizacion_escolar_3000_los_mochis.csv');
    const dynamicLinks: MetadataRoute.Sitemap = [];

    // Add root URL
    dynamicLinks.push({
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    });

    try {
        if (fs.existsSync(csvPath)) {
            const csvContent = fs.readFileSync(csvPath, 'utf8');
            const lines = csvContent.split(/\r?\n/).slice(1);

            // Reducing URLs by 50% as requested
            for (let i = 0; i < lines.length; i++) {
                if (i % 2 !== 0) continue; // Skip every other line to get ~1500 URLs

                const line = lines[i];
                const parts = line.split(',');
                if (parts.length < 3) continue;

                const ruta = parts[2].trim().replace(/^\//, '');

                dynamicLinks.push({
                    url: `${baseUrl}/${ruta}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.8,
                });
            }
        }
    } catch (error) {
        console.error('Error generating simplified sitemap:', error);
    }

    return dynamicLinks;
}

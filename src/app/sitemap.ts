import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aprendemas.mx/';
    const csvPath = path.join(process.cwd(), 'sitemap_regularizacion_escolar_3000_los_mochis.csv');

    const dynamicLinks: MetadataRoute.Sitemap = [];

    try {
        if (fs.existsSync(csvPath)) {
            const csvContent = fs.readFileSync(csvPath, 'utf8');
            const lines = csvContent.split(/\r?\n/);

            // Skip header and empty lines
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;

                const parts = line.split(',');
                if (parts.length < 3) continue;

                const ruta = parts[2].trim();

                // Ensure the route starts with /
                const cleanRuta = ruta.startsWith('/') ? ruta : `/${ruta}`;

                dynamicLinks.push({
                    url: `${baseUrl}${cleanRuta.startsWith('/') ? cleanRuta.slice(1) : cleanRuta}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.6,
                });
            }
        }
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...dynamicLinks,
    ];
}

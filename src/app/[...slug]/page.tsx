import React from 'react';
import { Metadata } from 'next';
import Home from '../page';
import fs from 'fs';
import path from 'path';

interface Props {
    params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
    const csvPath = path.join(process.cwd(), 'sitemap_regularizacion_escolar_3000_los_mochis.csv');
    if (!fs.existsSync(csvPath)) return [];

    const csvContent = fs.readFileSync(csvPath, 'utf8');
    const lines = csvContent.split(/\r?\n/);

    return lines.slice(1)
        .filter(line => line.trim())
        .map(line => {
            const parts = line.split(',');
            if (parts.length < 3) return null;
            const ruta = parts[2].trim().replace(/^\//, ''); // Remove leading slash
            return { slug: ruta.split('/') };
        })
        .filter(Boolean);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;

    // Create a readable title from the slug segments
    // e.g. ["regularizacion", "preescolar", "economica", "los-mochis"] 
    // -> "Regularizacion Preescolar Economica Los Mochis"
    const decoded = slug.map(s => s.replace(/-/g, ' ')).join(' ');
    const capitalized = decoded.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: `${capitalized} | Aprende+ Los Mochis`,
        description: `Aprende+ ofrece servicios de ${decoded} con un enfoque profesional y divertido. Especialistas en apoyo escolar en Los Mochis, Sinaloa.`,
        alternates: {
            canonical: `/${slug.join('/')}`,
        }
    };
}

// Reuse the main landing page content for all these targeted landing pages
export default function CatchAllPage() {
    return <Home />;
}

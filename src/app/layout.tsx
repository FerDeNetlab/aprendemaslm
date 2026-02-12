import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clubaprendemas.com'),
  title: "Aprende+ | Regularización y Club Educativo en Los Mochis",
  description: "Clases de regularización, matemáticas, español e inglés en Los Mochis. Apoyo psicopedagógico y tareas para niños de 5 a 12 años. ¡Resultados visibles!",
  keywords: ["regularización Los Mochis", "clases matemáticas Los Mochis", "apoyo escolar Los Mochis", "psicopedagogía Los Mochis", "club de tareas Los Mochis"],
  openGraph: {
    title: "Aprende+ | Regularización y Club Educativo en Los Mochis",
    description: "Impulsamos el aprendizaje de tus hijos con un enfoque divertido y profesional en Los Mochis.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

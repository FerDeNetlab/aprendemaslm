import React from 'react';

const JsonLd = () => {
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Aprende+",
        "image": "https://aprendemas.com/logo.png",
        "@id": "https://aprendemas.com",
        "url": "https://aprendemas.com",
        "telephone": "+526684633454",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "C. Santos Degollado entre Serdan y Rendon #219, planta alta, Col. Centro",
            "addressLocality": "Los Mochis",
            "addressRegion": "Sinaloa",
            "postalCode": "81200",
            "addressCountry": "MX"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.7905,
            "longitude": -108.9959
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "16:00",
            "closes": "20:00"
        },
        "sameAs": [
            "https://www.facebook.com/clubaprendemas",
            "https://www.instagram.com/clubaprendemas"
        ],
        "description": "Clases de regularización y club educativo integral en Los Mochis. Apoyo en matemáticas, español, inglés y psicopedagogía para niños."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
    );
};

export default JsonLd;

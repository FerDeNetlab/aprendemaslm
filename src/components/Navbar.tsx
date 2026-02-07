'use client';

import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 h-20">
            <div className="max-container flex items-center justify-between h-full relative">
                <div className="flex items-center">
                    <a href="#inicio" className="relative h-20 flex items-center">
                        <img
                            src="/logo.svg"
                            alt="Aprende+ Logo"
                            className="absolute left-0 h-40 lg:h-48 w-auto object-contain transform origin-left drop-shadow-lg"
                        />
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-600 hover:text-aprende-blue transition-colors"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#inicio" className="font-sans font-medium text-gray-600 hover:text-aprende-blue transition-colors">Inicio</a>
                    <a href="#servicios" className="font-sans font-medium text-gray-600 hover:text-aprende-blue transition-colors">Servicios</a>
                    <a href="#nosotros" className="font-sans font-medium text-gray-600 hover:text-aprende-blue transition-colors">Nosotros</a>
                    <a href="#contacto" className="bg-aprende-pink hover:bg-pink-600 text-white px-6 py-2.5 rounded-full font-display font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-pink-200">
                        Inscribirme
                    </a>
                </div>
            </div>

            {/* Mobile menu panel */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white p-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
                    <a href="#inicio" onClick={() => setIsOpen(false)} className="block font-sans font-medium text-xl text-gray-600">Inicio</a>
                    <a href="#servicios" onClick={() => setIsOpen(false)} className="block font-sans font-medium text-xl text-gray-600">Servicios</a>
                    <a href="#nosotros" onClick={() => setIsOpen(false)} className="block font-sans font-medium text-xl text-gray-600">Nosotros</a>
                    <a href="#contacto" onClick={() => setIsOpen(false)} className="block w-full text-center bg-aprende-pink text-white py-4 rounded-2xl font-display font-bold">
                        Inscribirme
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

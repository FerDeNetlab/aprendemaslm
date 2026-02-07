import React from 'react';

const Contact = () => {
    return (
        <section id="contacto" className="py-16 bg-aprende-yellow/10">
            <div className="max-container">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900">
                                ¿Listo para <span className="text-aprende-blue">empezar?</span>
                            </h2>
                            <p className="text-lg lg:text-xl text-gray-600 font-sans leading-relaxed">
                                Agenda hoy mismo una valoración sin costo y descubre cómo podemos potenciar el talento de tus hijos.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-aprende-green/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    📞
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Informes</p>
                                    <p className="text-xl font-display font-bold text-gray-800">66 84 63 34 54 / 66 81 43 95 70</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-aprende-blue/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    📍
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Ubicación</p>
                                    <p className="text-xl font-display font-bold text-gray-800">
                                        C. Santos Degollado entre Serdan y Rendon #219, planta alta, Col. Centro, Los Mochis.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-aprende-pink/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                    📱
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="hover:text-aprende-pink transition-colors font-display font-bold text-lg">@clubaprendemas</a>
                                    <span className="text-gray-300">|</span>
                                    <a href="#" className="hover:text-aprende-blue transition-colors font-display font-bold text-lg">Aprende +</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[40px] shadow-2xl shadow-aprende-yellow/20 border-8 border-white">
                        <div className="aspect-video bg-gray-100 rounded-3xl mb-8 flex items-center justify-center text-4xl overflow-hidden relative">
                            {/* Visual placeholder for Map or Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-aprende-blue/10 to-transparent" />
                            🗺️
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-aprende-green/5 rounded-2xl border border-aprende-green/10">
                                <p className="font-display font-bold text-gray-800 text-lg">Horario de atención</p>
                                <p className="text-gray-600">Lunes a Viernes - 4:00 PM a 8:00 PM</p>
                            </div>
                            <button className="w-full bg-aprende-blue hover:bg-blue-600 text-white py-4 rounded-2xl font-display font-bold text-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-200">
                                Mandar WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

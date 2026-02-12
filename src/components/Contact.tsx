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
                        <div className="aspect-video bg-gray-100 rounded-3xl mb-8 overflow-hidden relative border border-gray-100 shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.335373642913!2d-108.9870844!3d25.7925076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba2fc9f92c4497%3A0xd8e98402f50f8c31!2sClub%20Aprende%20Mas!5e0!3m2!1ses-419!2smx!4v1770434689567!5m2!1ses-419!2smx"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-aprende-green/5 rounded-2xl border border-aprende-green/10">
                                <p className="font-display font-bold text-gray-800 text-lg">Horario de atención</p>
                                <p className="text-gray-600">Lunes a Viernes - 4:00 PM a 8:00 PM</p>
                            </div>
                            <a
                                href="https://wa.me/526684633454?text=Hola,%20me%20gustaría%20recibir%20más%20información."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-aprende-green hover:bg-green-600 text-white py-4 rounded-2xl font-display font-bold text-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-200 flex items-center justify-center"
                            >
                                Mandar WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

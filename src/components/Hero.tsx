import React from 'react';

const Hero = () => {
    return (
        <section id="inicio" className="relative pt-4 pb-12 lg:pt-8 lg:pb-24">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-aprende-blue/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-aprende-pink/10 rounded-full blur-3xl -z-10" />

            <div className="max-container grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-4 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-700">
                    <div className="inline-block px-3 py-1 bg-aprende-yellow/20 text-aprende-orange rounded-full font-display font-bold text-[10px] lg:text-xs uppercase tracking-wider">
                        Club Educativo Integral
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[1] text-gray-900">
                        Clases de <br />
                        <span className="text-aprende-blue underline decoration-4 lg:decoration-8 decoration-aprende-yellow underline-offset-4 lg:underline-offset-8">Regularización</span>
                        <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-700">en Los Mochis</span>
                    </h1>

                    <p className="text-base lg:text-lg text-gray-600 font-sans max-w-xl mx-auto lg:mx-0 leading-snug">
                        Potenciamos el aprendizaje en <strong>Matemáticas, Español e Inglés</strong> con un enfoque divertido y profesional. El mejor apoyo escolar y psicopedagógico para tus hijos en Los Mochis.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                        <a href="#contacto" className="w-full sm:w-auto px-6 py-3.5 bg-aprende-blue hover:bg-blue-600 text-white rounded-2xl font-display font-bold text-base shadow-xl shadow-blue-200 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                            Agenda tu valoración
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </a>
                        <a href="#servicios" className="w-full sm:w-auto px-6 py-3.5 bg-white border-2 border-aprende-blue/30 text-aprende-blue hover:bg-aprende-blue/5 rounded-2xl font-display font-bold text-base transition-all flex items-center justify-center font-sans">
                            Ver programas
                        </a>
                    </div>
                </div>

                <div className="relative group animate-in fade-in slide-in-from-right-8 duration-700 mt-8 lg:mt-0 xl:p-8">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-aprende-blue/20 to-aprende-pink/20 rounded-3xl blur-2xl group-hover:scale-105 transition-transform duration-500" />
                    <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-8 md:p-12 border-8 border-white">
                        <div className="w-full h-full bg-aprende-yellow/5 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
                            <div className="text-7xl lg:text-8xl animate-float drop-shadow-lg">🚀</div>
                            <p className="font-display font-bold text-xl lg:text-2xl text-aprende-orange px-4">¡Donde el aprendizaje despega!</p>
                        </div>
                    </div>

                    {/* Floating elements - z-[110] should go over z-[100] navbar */}
                    <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-16 h-16 lg:w-20 lg:h-20 bg-aprende-green rounded-2xl shadow-xl flex items-center justify-center text-3xl lg:text-4xl transform -rotate-12 animate-bounce z-[110] border-4 border-white">✏️</div>
                    <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-20 h-20 lg:w-24 lg:h-24 bg-aprende-pink rounded-full shadow-xl flex items-center justify-center text-3xl lg:text-4xl transform rotate-12 animate-pulse z-[110] border-4 border-white">🎨</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

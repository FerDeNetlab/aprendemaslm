import React from 'react';

const About = () => {
    return (
        <section id="nosotros" className="py-16 overflow-hidden">
            <div className="max-container grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-aprende-green/10 rounded-full blur-3xl -z-10" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <div className="aspect-square bg-aprende-blue rounded-3xl flex items-center justify-center text-4xl shadow-xl transform hover:-rotate-3 transition-transform">🎨</div>
                            <div className="aspect-video bg-aprende-pink rounded-3xl flex items-center justify-center text-4xl shadow-xl transform hover:rotate-2 transition-transform">🎒</div>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-video bg-aprende-yellow rounded-3xl flex items-center justify-center text-4xl shadow-xl transform hover:rotate-3 transition-transform">🧩</div>
                            <div className="aspect-square bg-aprende-green rounded-3xl flex items-center justify-center text-4xl shadow-xl transform hover:-rotate-2 transition-transform">🖍️</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 leading-tight">
                        Nuestra misión es hacer el <span className="text-aprende-green">aprendizaje emocionante</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 font-sans leading-relaxed">
                        En Aprende+, creemos que cada niño tiene un ritmo único. Creamos un ambiente seguro y divertido donde pueden explorar sus capacidades y superar cualquier reto académico.
                    </p>

                    <ul className="space-y-4">
                        {[
                            { text: 'Metodología Integral y Lúdica', color: 'text-aprende-blue' },
                            { text: 'Especialistas en Psicopedagogía', color: 'text-aprende-pink' },
                            { text: 'Ambiente Seguro y Motivador', color: 'text-aprende-yellow' },
                            { text: 'Resultados Visibles a Corto Plazo', color: 'text-aprende-green' },
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-lg font-display font-bold text-gray-800">
                                <span className={`w-3 h-3 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                                {item.text}
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4">
                        <div className="inline-flex items-center gap-4 p-2 pl-6 bg-gray-100 rounded-full">
                            <span className="font-sans font-medium text-gray-600">¿Quieres saber más?</span>
                            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-display font-bold shadow-sm hover:shadow-md transition-all">
                                Conócenos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

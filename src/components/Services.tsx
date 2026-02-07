import React from 'react';

const services = [
    {
        title: 'Apoyo en Lectoescritura',
        description: 'Desarrollamos habilidades fundamentales de lectura y escritura con métodos dinámicos.',
        icon: '📚',
        color: 'bg-aprende-pink',
    },
    {
        title: 'Pensamiento Matemático',
        description: 'Hacemos que las matemáticas sean divertidas y fáciles de entender para todos los niveles.',
        icon: '🧮',
        color: 'bg-aprende-blue',
    },
    {
        title: 'Acompañamiento',
        description: 'Brindamos seguimiento personalizado para asegurar el éxito académico y emocional.',
        icon: '🤝',
        color: 'bg-aprende-yellow',
    },
    {
        title: 'Psicopedagogía',
        description: 'Evaluación y apoyo especializado para superar barreras en el proceso de aprendizaje.',
        icon: '🧠',
        color: 'bg-aprende-green',
    },
];

const Services = () => {
    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="max-container">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900">
                        Nuestros <span className="text-aprende-pink">Servicios</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-sans">
                        Ofrecemos programas integrales diseñados para niños de 5 a 12 años, adaptándonos a sus necesidades únicas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-transparent hover:shadow-2xl hover:shadow-gray-200 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-gray-100 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-aprende-blue/5 rounded-[40px] p-6 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-aprende-blue/10">
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-xl lg:text-2xl font-display font-bold text-gray-900">Atención de 5 a 12 años</h4>
                        <p className="text-base lg:text-lg text-gray-600">Cupo limitado y grupos reducidos para atención de calidad.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-5 py-2.5 bg-white rounded-2xl shadow-sm text-aprende-blue font-display font-bold border border-aprende-blue/10 text-sm lg:text-base">✏️ Cupo Limitado</div>
                        <div className="px-5 py-2.5 bg-white rounded-2xl shadow-sm text-aprende-pink font-display font-bold border border-aprende-pink/10 text-sm lg:text-base">👩‍🏫 Grupos Reducidos</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;


import { useLanguage } from '../../context/LanguageContext';
import { Instagram, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { useEffect, useRef } from 'react';

const WhatIsHunter = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="caracteristicas" ref={sectionRef} className="py-16 bg-white opacity-0">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 background-animate">{t('que_es_hunter')}</h2>
        
        <div className="text-center text-gray-700 space-y-8">
          <p className="text-lg leading-relaxed transform transition-all duration-500 hover:scale-105 mx-auto max-w-4xl">
            HUNTER I.S, una herramienta diseñada con tecnología innovadora y algoritmos complejos que automatizan cada paso del proceso de prospección, desde la identificación de posibles clientes hasta el contacto y seguimiento. Simplifica tu estrategia, ahorra tiempo y esfuerzo en hacer crecer tu marca.
            Potenciamos la captación y conversión de clientes con inteligencia artificial, automatizando la prospección y gestión de leads en múlticanal, sin interrupcion para empresas o marcas personales que buscan atraer clientes de manera sostenible y escalable
          </p>
        </div>
        
        {/* Differentiators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="rounded-full w-14 h-14 bg-emerald-100 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Automatización Inteligente</h3>
            <p className="text-gray-600 text-center">Nuestro sistema aprende de cada interacción para mejorar continuamente la prospección y conversión de leads.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="rounded-full w-14 h-14 bg-emerald-100 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Integración Omnicanal</h3>
            <p className="text-gray-600 text-center">Una única plataforma para gestionar todos tus canales de captación, sin necesidad de múltiples herramientas.</p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="rounded-full w-14 h-14 bg-emerald-100 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Escalabilidad Garantizada</h3>
            <p className="text-gray-600 text-center">Nuestra plataforma crece con tu negocio, permitiéndote gestionar desde decenas hasta miles de leads sin perder eficiencia.</p>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center mt-16 space-x-4 md:space-x-8">
          {[
            { Icon: Instagram, bg: 'bg-pink-100', text: 'text-pink-500' },
            { Icon: Facebook, bg: 'bg-blue-100', text: 'text-blue-500' },
            { Icon: Twitter, bg: 'bg-blue-100', text: 'text-sky-500' },
            { Icon: Linkedin, bg: 'bg-blue-100', text: 'text-blue-700' },
            { Icon: MessageSquare, bg: 'bg-green-100', text: 'text-green-500' }
          ].map(({ Icon, bg, text }, index) => (
            <div
              key={index}
              className={`p-4 rounded-full ${bg} ${text} transform transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Icon size={32} className="animate-pulse" />
            </div>
          ))}
        </div>
        
        {/* Client Videos Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Lo que dicen nuestros clientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Client Testimonial 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-semibold">Juan Pérez</h4>
                <p className="text-sm text-gray-500">Marketing Manager, IncSales</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Client Testimonial 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-semibold">Sara Rodríguez</h4>
                <p className="text-sm text-gray-500">Growth Manager, MarTech LLC</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Client Testimonial 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-semibold">Williams Villalobos</h4>
                <p className="text-sm text-gray-500">Marketing Digital Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHunter;

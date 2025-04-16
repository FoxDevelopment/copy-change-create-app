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
      </div>
    </section>
  );
};

export default WhatIsHunter;

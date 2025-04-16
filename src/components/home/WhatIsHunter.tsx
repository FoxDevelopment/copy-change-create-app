
import { useLanguage } from '../../context/LanguageContext';
import { Instagram, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const WhatIsHunter = () => {
  const { t } = useLanguage();

  return (
    <section id="caracteristicas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('que_es_hunter')}</h2>
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12">
          {t('potenciamos')}
        </p>
        
        <div className="flex justify-center mt-16 space-x-8">
          <div className="p-4 rounded-full bg-pink-100 text-pink-500">
            <Instagram size={32} />
          </div>
          <div className="p-4 rounded-full bg-blue-100 text-blue-500">
            <Facebook size={32} />
          </div>
          <div className="p-4 rounded-full bg-blue-100 text-sky-500">
            <Twitter size={32} />
          </div>
          <div className="p-4 rounded-full bg-blue-100 text-blue-700">
            <Linkedin size={32} />
          </div>
          <div className="p-4 rounded-full bg-green-100 text-green-500">
            <MessageSquare size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHunter;

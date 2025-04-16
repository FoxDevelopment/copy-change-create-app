
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">{t('preguntas_frecuentes')}</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <button className="flex justify-between items-center w-full text-left font-semibold text-lg">
                <span>{t('como_encuentra')}</span>
                <ChevronRight size={20} className="transform rotate-90" />
              </button>
              <div className="mt-3 text-gray-700">
                <p>Hunter AI utiliza algoritmos de machine learning para analizar patrones de comportamiento en redes sociales e identificar perfiles que coinciden con los criterios definidos para cada cliente.</p>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <button className="flex justify-between items-center w-full text-left font-semibold text-lg">
                <span>{t('cumple_terminos')}</span>
                <ChevronRight size={20} className="transform rotate-90" />
              </button>
              <div className="mt-3 text-gray-700">
                <p>Sí, Hunter está diseñado para respetar todas las políticas de uso justo y términos de servicio de las plataformas con las que interactúa, incluyendo límites de tasa y políticas de privacidad.</p>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <button className="flex justify-between items-center w-full text-left font-semibold text-lg">
                <span>{t('personalizar_mensajes')}</span>
                <ChevronRight size={20} className="transform rotate-90" />
              </button>
              <div className="mt-3 text-gray-700">
                <p>Absolutamente. Hunter permite la personalización completa de todos los mensajes, incluyendo variables dinámicas basadas en el perfil del lead y su comportamiento previo.</p>
              </div>
            </div>
            
            <div>
              <button className="flex justify-between items-center w-full text-left font-semibold text-lg">
                <span>{t('cuanto_tiempo')}</span>
                <ChevronRight size={20} className="transform rotate-90" />
              </button>
              <div className="mt-3 text-gray-700">
                <p>La mayoría de los clientes comienzan a ver resultados significativos dentro de las primeras 2-4 semanas de implementación, dependiendo de su mercado objetivo y configuración de conversión.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

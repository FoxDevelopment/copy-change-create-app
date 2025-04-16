
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="planes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">{t('planes_precios')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold mb-2">{t('plan_basico')}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500 ml-1">{t('mes')}</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('integracion_red')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('hasta_mensajes')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('panel_basico')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('soporte_email')}</span>
                </li>
              </ul>
              <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700">{t('elegir_plan')}</Button>
            </div>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform scale-105 relative z-10 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white py-1 px-4 text-sm font-medium">Popular</div>
            <div className="p-6 border-b border-gray-100 bg-emerald-50">
              <h3 className="text-xl font-bold mb-2">{t('plan_profesional')}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-gray-500 ml-1">{t('mes')}</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('integracion_redes')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('hasta_200_mensajes')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('panel_avanzado')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('soporte_prioritario')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('caracteristicas_basicas')}</span>
                </li>
              </ul>
              <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700">{t('elegir_plan')}</Button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold mb-2">{t('plan_empresarial')}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">$349</span>
                <span className="text-gray-500 ml-1">{t('mes')}</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('integracion_todas')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('hasta_200_mensajes')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('suite_analisis')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('soporte_24_7')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('caracteristicas_avanzadas')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{t('herramientas_colaboracion')}</span>
                </li>
              </ul>
              <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700">{t('elegir_plan')}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

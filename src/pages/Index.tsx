import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle2, Instagram, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:hunter.iogonzalo@gmail.com?subject=Solicitud%20de%20Demo%20Hunter%20AI';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {t('bienvenida')}
              </h1>
              <p className="text-xl mb-6">{t('tus_metas')}</p>
              <p className="mb-8 text-emerald-100">
                {t('hunter_es')}
              </p>
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-100" onClick={handleDemoClick}>
                {t('probar_hunter')}
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/3dfcccdb-7db4-4217-bb7f-d6afcf561dd2.png" 
                alt="Hunter Logo" 
                className="h-48 md:h-72 w-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Hunter AI Section */}
      <section id="caracteristicas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('que_es_hunter')}</h2>
          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12">
            {t('potenciamos')}
          </p>
          
          {/* Social Media Icons */}
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

      {/* Process Workflow - Updated with static design */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-10">{t('proceso_hunter')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Steps 1-3 */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-500 transform transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-3">1. {t('detector_inteligente')}</h4>
              <p className="text-gray-600">{t('detector_desc')}</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-500 transform transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-3">2. {t('sistema_respuesta')}</h4>
              <p className="text-gray-600">{t('sistema_respuesta_desc')}</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-500 transform transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-3">3. {t('sistema_seguimiento')}</h4>
              <p className="text-gray-600">{t('sistema_seguimiento_desc')}</p>
            </div>
          </div>
          
          {/* Steps 4-6 */}
          <div className="space-y-8 mt-8 md:mt-0">
            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-500 transform transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-3">4. {t('mensajes_automatizados')}</h4>
              <p className="text-gray-600">{t('mensajes_automatizados_desc')}</p>
            </div>
            {/* Step 5 */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-500 transform transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-3">5. {t('clasificacion_crm')}</h4>
              <p className="text-gray-600">{t('clasificacion_crm_desc')}</p>
            </div>
            {/* Step 6 */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-500 transform transition hover:scale-105">
              <h4 className="text-xl font-semibold mb-3">6. {t('multicanal')}</h4>
              <p className="text-gray-600">{t('multicanal_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t('beneficios_clave')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('automatizacion_mensajes')}</h3>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('integracion_plataformas')}</h3>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('crm_manejo')}</h3>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-transform hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('escalabilidad')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t('testimonios')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <p className="text-gray-700 italic mb-6">"{t('testimonio1')}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-600 font-bold">JP</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Juan Pérez</h4>
                  <p className="text-sm text-gray-500">Marketing Manager, IncSales</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <p className="text-gray-700 italic mb-6">"{t('testimonio2')}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-600 font-bold">SR</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sara Rodríguez</h4>
                  <p className="text-sm text-gray-500">Growth Manager, MarTech LLC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
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
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('integracion_red')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('hasta_mensajes')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('panel_basico')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
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
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('integracion_redes')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('hasta_200_mensajes')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('panel_avanzado')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('soporte_prioritario')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
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
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('integracion_todas')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('hasta_200_mensajes')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('suite_analisis')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('soporte_24_7')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('caracteristicas_avanzadas')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t('herramientas_colaboracion')}</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700">{t('elegir_plan')}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t('preguntas_frecuentes')}</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="border-b border-gray-200 pb-6">
                <button className="flex justify-between items-center w-full text-left font-semibold text-lg">
                  <span>{t('como_encuentra')}</span>
                  <ChevronRight size={20} className="transform rotate-90" />
                </button>
                <div className="mt-3 text-gray-700">
                  <p>Hunter AI utiliza algoritmos de machine learning para analizar patrones de comportamiento en redes sociales e identificar perfiles que coinciden con los criterios definidos para cada cliente.</p>
                </div>
              </div>
              
              {/* FAQ 2 */}
              <div className="border-b border-gray-200 pb-6">
                <button className="flex justify-between items-center w-full text-left font-semibold text-lg">
                  <span>{t('cumple_terminos')}</span>
                  <ChevronRight size={20} className="transform rotate-90" />
                </button>
                <div className="mt-3 text-gray-700">
                  <p>Sí, Hunter está diseñado para respetar todas las políticas de uso justo y términos de servicio de las plataformas con las que interactúa, incluyendo límites de tasa y políticas de privacidad.</p>
                </div>
              </div>
              
              {/* FAQ 3 */}
              <div className="border-b border-gray-200 pb-6">
                <button className="flex justify-between items-center w-full text-left font-semibold text-lg">
                  <span>{t('personalizar_mensajes')}</span>
                  <ChevronRight size={20} className="transform rotate-90" />
                </button>
                <div className="mt-3 text-gray-700">
                  <p>Absolutamente. Hunter permite la personalización completa de todos los mensajes, incluyendo variables dinámicas basadas en el perfil del lead y su comportamiento previo.</p>
                </div>
              </div>
              
              {/* FAQ 4 */}
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

      {/* CTA Section */}
      <section id="contacto" className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('estas_a_un_clic')}</h2>
          <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-100 px-8 text-lg">
            {t('empezar_ahora')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

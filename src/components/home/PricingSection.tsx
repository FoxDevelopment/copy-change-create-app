
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="planes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">{t('planes_precios')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold mb-2">🟢 HUNTER BASE</h3>
              <p className="text-gray-600 mb-4">Ideal para emprendedores que quieren activar su prospección digital.</p>
              <div className="flex items-baseline mb-4">
                <span className="text-gray-500">Desde</span>
                <span className="text-4xl font-bold mx-2">$XXX</span>
                <span className="text-gray-500">/mes</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>1 canal integrado (Instagram, WhatsApp, Facebook o Telegram)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hasta 2 cuentas por canal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hasta 3000 mensajes al mes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CRM visual con etiquetas y filtros</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chat centralizado multicuenta</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sistema de respuesta básica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seguimiento simple para leads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>1 llamada quincenal con líder de implementación</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">🎁 Extras:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Biblioteca de mensajes ganadores por nicho</li>
                  <li>• Acceso a comunidad privada de usuarios</li>
                </ul>
              </div>
              <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700">{t('elegir_plan')}</Button>
            </div>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform scale-105 relative z-10 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white py-1 px-4 text-sm font-medium">Popular</div>
            <div className="p-6 border-b border-gray-100 bg-emerald-50">
              <h3 className="text-xl font-bold mb-2">🔵 HUNTER PRO</h3>
              <p className="text-gray-600 mb-4">Para negocios en expansión que quieren escalar con automatización real.</p>
              <div className="flex items-baseline mb-4">
                <span className="text-gray-500">Desde</span>
                <span className="text-4xl font-bold mx-2">$XXX</span>
                <span className="text-gray-500">/mes</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hasta 2 canales integrados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hasta 4 cuentas por canal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hasta 6000 mensajes al mes por cuenta</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CRM visual con lead scoring y filtros avanzados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chat centralizado en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sistema de respuesta con IA personalizada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seguimiento automatizado por estado del lead</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>1 llamada semanal con líder de implementación</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">🎁 Extras:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 10 scripts de venta listos para usar</li>
                  <li>• Acceso a entrenamientos grabados</li>
                  <li>• Plantillas de seguimiento post-mensaje</li>
                  <li>• Reportes semanales con métricas clave</li>
                </ul>
              </div>
              <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700">{t('elegir_plan')}</Button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold mb-2">🟣 HUNTER GP (Growth Partner)</h3>
              <p className="text-gray-600 mb-4">Nuestro equipo trabaja codo a codo con vos para escalar todo tu sistema de captación.</p>
              <div className="flex items-baseline mb-4">
                <span className="text-gray-500">Desde</span>
                <span className="text-4xl font-bold mx-2">$XXX</span>
                <span className="text-gray-500">/mes</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Integración total: IG, FB, WhatsApp, Telegram, TikTok, Email, SMS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cuentas ilimitadas por canal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mensajes ilimitados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CRM extendido con automatizaciones, flujos y embudos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chat centralizado + IA con memoria contextual</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>IA personalizada para responder en tiempo real con tu tono y estilo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seguimiento completo con embudos y remarketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Acompañamiento estratégico 1:1</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Diseño y optimización de funnels completos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Team de Hunters humanos + IA híbrida en tiempo real</span>
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


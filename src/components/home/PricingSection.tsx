
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
              <h3 className="text-xl font-bold mb-2">🟢 {t('plan_basico')}</h3>
              <p className="text-gray-600 mb-4">{t('basic_description')}</p>
              <div className="flex items-baseline mb-4">
                <span className="text-gray-500">{t('desde')}</span>
                <span className="text-4xl font-bold mx-2">$XXX</span>
                <span className="text-gray-500">{t('mes')}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="font-semibold mb-4">{t('incluye')}:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('one_integrated_channel')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('accounts_per_channel')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('messages_per_month')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('visual_crm')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('centralized_chat')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('basic_response')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('simple_tracking')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('biweekly_call')}</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">🎁 {t('extras')}:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {t('message_library')}</li>
                  <li>• {t('community_access')}</li>
                </ul>
              </div>
              <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700">{t('elegir_plan')}</Button>
            </div>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform scale-105 relative z-10 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white py-1 px-4 text-sm font-medium">{t('popular')}</div>
            <div className="p-6 border-b border-gray-100 bg-emerald-50">
              <h3 className="text-xl font-bold mb-2">🔵 {t('plan_profesional')}</h3>
              <p className="text-gray-600 mb-4">{t('pro_description')}</p>
              <div className="flex items-baseline mb-4">
                <span className="text-gray-500">{t('desde')}</span>
                <span className="text-4xl font-bold mx-2">$XXX</span>
                <span className="text-gray-500">{t('mes')}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="font-semibold mb-4">{t('incluye')}:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('two_integrated_channels')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('four_accounts_channel')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('six_thousand_messages')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('advanced_crm')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('real_time_chat')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('ai_response')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('automated_tracking')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('weekly_call')}</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">🎁 {t('extras')}:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {t('sales_scripts')}</li>
                  <li>• {t('training_access')}</li>
                  <li>• {t('follow_up_templates')}</li>
                  <li>• {t('weekly_reports')}</li>
                </ul>
              </div>
              <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700">{t('elegir_plan')}</Button>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold mb-2">🟣 {t('plan_empresarial')}</h3>
              <p className="text-gray-600 mb-4">{t('enterprise_description')}</p>
              <div className="flex items-baseline mb-4">
                <span className="text-gray-500">{t('desde')}</span>
                <span className="text-4xl font-bold mx-2">$XXX</span>
                <span className="text-gray-500">{t('mes')}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="font-semibold mb-4">{t('incluye')}:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('full_integration')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('unlimited_accounts')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('unlimited_messages')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('extended_crm')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('ai_chat')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('personalized_ai')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('complete_tracking')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('strategic_support')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('funnel_design')}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{t('hunter_team')}</span>
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

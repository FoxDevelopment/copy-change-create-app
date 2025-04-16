
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const ProcessCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="bg-white/10 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-105 duration-300">
    <CardHeader>
      <h4 className="text-xl font-semibold text-emerald-800 background-animate bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">{title}</h4>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-5xl font-black text-center mb-12 relative">
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 bg-clip-text text-transparent background-animate">
            {t('proceso_hunter_ai_pro')}
          </span>
          <div className="absolute w-32 h-1 bg-emerald-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ProcessCard 
            title={t('detector_inteligente')}
            description={t('detector_desc')}
          />
          <ProcessCard 
            title={t('sistema_respuesta')}
            description={t('sistema_respuesta_desc')}
          />
          <ProcessCard 
            title={t('sistema_seguimiento')}
            description={t('sistema_seguimiento_desc')}
          />
          <ProcessCard 
            title={t('mensajes_automatizados')}
            description={t('mensajes_automatizados_desc')}
          />
          <ProcessCard 
            title={t('clasificacion_crm')}
            description={t('clasificacion_crm_desc')}
          />
          <ProcessCard 
            title={t('multicanal')}
            description={t('multicanal_desc')}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

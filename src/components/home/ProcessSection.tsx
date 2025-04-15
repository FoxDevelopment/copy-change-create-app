
import { useLanguage } from '../../context/LanguageContext';

const ProcessCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-500 transform transition hover:scale-105">
    <h4 className="text-xl font-semibold mb-3">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-16 max-w-5xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-12">
        Proceso de 
        <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent mx-2">
          Hunter AI
        </span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProcessCard 
          title={`1. ${t('detector_inteligente')}`}
          description={t('detector_desc')}
        />
        <ProcessCard 
          title={`2. ${t('sistema_respuesta')}`}
          description={t('sistema_respuesta_desc')}
        />
        <ProcessCard 
          title={`3. ${t('sistema_seguimiento')}`}
          description={t('sistema_seguimiento_desc')}
        />
        <ProcessCard 
          title={`4. ${t('mensajes_automatizados')}`}
          description={t('mensajes_automatizados_desc')}
        />
        <ProcessCard 
          title={`5. ${t('clasificacion_crm')}`}
          description={t('clasificacion_crm_desc')}
        />
        <ProcessCard 
          title={`6. ${t('multicanal')}`}
          description={t('multicanal_desc')}
        />
      </div>
    </div>
  );
};

export default ProcessSection;

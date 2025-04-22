
import { useLanguage } from '../../context/LanguageContext';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const ProcessCard = ({ title, description, index }: { title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <Card className="group relative overflow-hidden backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-white/90 dark:from-emerald-900/30 dark:to-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="relative">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600">
            <span className="text-lg font-bold">{index + 1}</span>
          </div>
          <h4 className="text-xl font-semibold bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">{title}</h4>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/50 to-white dark:from-gray-900 dark:via-emerald-900/10 dark:to-gray-900" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 relative"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black relative inline-block"
          >
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 bg-clip-text text-transparent background-animate">
              {t('proceso_hunter_ai_pro')}
            </span>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
            />
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ProcessCard 
            index={0}
            title={t('detector_inteligente')}
            description={t('detector_desc')}
          />
          <ProcessCard 
            index={1}
            title={t('sistema_respuesta')}
            description={t('sistema_respuesta_desc')}
          />
          <ProcessCard 
            index={2}
            title={t('sistema_seguimiento')}
            description={t('sistema_seguimiento_desc')}
          />
          <ProcessCard 
            index={3}
            title={t('mensajes_automatizados')}
            description={t('mensajes_automatizados_desc')}
          />
          <ProcessCard 
            index={4}
            title={t('clasificacion_crm')}
            description={t('clasificacion_crm_desc')}
          />
          <ProcessCard 
            index={5}
            title={t('multicanal')}
            description={t('multicanal_desc')}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;

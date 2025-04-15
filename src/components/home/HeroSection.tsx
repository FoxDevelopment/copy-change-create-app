
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:hunter.iogonzalo@gmail.com?subject=Solicitud%20de%20Demo%20Hunter%20AI';
  };

  return (
    <section className="relative pt-32 pb-20 bg-emerald-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800 transition-all duration-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-500 hover:scale-105">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {t('bienvenida')}
            </h1>
            <p className="text-xl mb-6">{t('tus_metas')}</p>
            <p className="mb-8 text-emerald-100">
              {t('hunter_es')}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-800 hover:bg-emerald-100 transform transition-all duration-300 hover:scale-105"
              onClick={handleDemoClick}
            >
              {t('probar_hunter')}
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/3dfcccdb-7db4-4217-bb7f-d6afcf561dd2.png" 
              alt="Hunter Logo" 
              className="h-48 md:h-72 w-auto opacity-90 transform transition-all duration-500 hover:scale-105 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

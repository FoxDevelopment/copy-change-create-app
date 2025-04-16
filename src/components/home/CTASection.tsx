
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const { t } = useLanguage();

  const handleStartNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:hunter.iogonzalo@gmail.com?subject=Solicitud%20para%20Empezar%20con%20Hunter%20AI';
  };

  return (
    <section id="contacto" className="py-16 bg-emerald-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{t('estas_a_un_clic')}</h2>
        <Button 
          size="lg" 
          className="bg-white text-emerald-800 hover:bg-emerald-100 transform transition-all duration-300 hover:scale-105 px-8 text-lg"
          onClick={handleStartNowClick}
        >
          {t('empezar_ahora')}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

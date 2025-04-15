
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-emerald-800 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3dfcccdb-7db4-4217-bb7f-d6afcf561dd2.png" 
              alt="Hunter Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-white text-xl font-bold">HUNTER</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-emerald-200 transition-colors">{t('inicio')}</Link>
            <a href="#caracteristicas" className="text-white hover:text-emerald-200 transition-colors">{t('caracteristicas')}</a>
            <a href="#planes" className="text-white hover:text-emerald-200 transition-colors">{t('planes')}</a>
            <a href="#contacto" className="text-white hover:text-emerald-200 transition-colors">{t('contacto')}</a>
          </nav>

          {/* Right Side Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex bg-emerald-700 rounded-full p-1">
              <button 
                onClick={() => setLanguage('es')} 
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === 'es' 
                    ? 'bg-white text-emerald-800' 
                    : 'text-white hover:bg-emerald-600'
                }`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-white text-emerald-800' 
                    : 'text-white hover:bg-emerald-600'
                }`}
              >
                EN
              </button>
            </div>
            
            {/* CTA Button */}
            <Button className="bg-white text-emerald-800 hover:bg-emerald-100">
              {t('solicitar_demo')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex bg-emerald-700 rounded-full p-1">
              <button 
                onClick={() => setLanguage('es')} 
                className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === 'es' 
                    ? 'bg-white text-emerald-800' 
                    : 'text-white hover:bg-emerald-600'
                }`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-white text-emerald-800' 
                    : 'text-white hover:bg-emerald-600'
                }`}
              >
                EN
              </button>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-emerald-800 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-emerald-200 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('inicio')}
              </Link>
              <a 
                href="#caracteristicas" 
                className="text-white hover:text-emerald-200 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('caracteristicas')}
              </a>
              <a 
                href="#planes" 
                className="text-white hover:text-emerald-200 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('planes')}
              </a>
              <a 
                href="#contacto" 
                className="text-white hover:text-emerald-200 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contacto')}
              </a>
              <Button 
                className="bg-white text-emerald-800 hover:bg-emerald-100 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('solicitar_demo')}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

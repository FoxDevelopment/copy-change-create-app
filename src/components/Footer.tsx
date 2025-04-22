
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/3dfcccdb-7db4-4217-bb7f-d6afcf561dd2.png" 
                alt="Hunter Logo" 
                className="h-10 w-auto invert" // Invert to make it white
              />
              <span className="ml-2 text-white text-xl font-bold">HUNTER</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm max-w-md">
              {t('potenciamos')}
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('informacion_contacto')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-emerald-500" />
                <span>hunter.lovable@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-emerald-500" />
                <span>+54 351 123 4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2 text-emerald-500" />
                <span>Córdoba, Argentina</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('enlaces_rapidos')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  {t('politica_privacidad')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  {t('terminos_condiciones')}
                </a>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; 2025 Hunter AI. {t('derechos_reservados')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

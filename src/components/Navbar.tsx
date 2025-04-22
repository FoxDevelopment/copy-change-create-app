
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:hunter.iogonzalo@gmail.com?subject=Solicitud%20de%20Demo%20Hunter%20AI';
  };

  const handleClientLogin = () => {
    window.open('https://app.hunter.io/login', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img 
              src="/lovable-uploads/3dfcccdb-7db4-4217-bb7f-d6afcf561dd2.png" 
              alt="Hunter Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">{t('inicio')}</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#caracteristicas" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">{t('caracteristicas')}</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">
                    Integraciones
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-emerald-500 to-emerald-700 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Hunter AI
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Integración omnicanal para todas tus necesidades de prospección
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Instagram">
                        Automatización de prospección en Instagram
                      </ListItem>
                      <ListItem href="#" title="WhatsApp">
                        Gestión de leads y mensajería automática
                      </ListItem>
                      <ListItem href="#" title="Facebook">
                        Captación de clientes potenciales
                      </ListItem>
                      <ListItem href="#" title="LinkedIn">
                        Networking profesional automatizado
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#planes" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">{t('planes')}</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">Blog</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#contacto" className="text-gray-800 hover:text-emerald-600 transition-colors font-medium">{t('contacto')}</a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Side Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex bg-gray-100 rounded-full p-1">
              <button 
                onClick={() => setLanguage('es')} 
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === 'es' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                EN
              </button>
            </div>
            
            {/* Client Login Button */}
            <Button 
              onClick={handleClientLogin}
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
            >
              Login
            </Button>
            
            {/* CTA Button */}
            <Button 
              onClick={handleDemoClick}
              className="bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300"
            >
              {t('solicitar_demo')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button 
                onClick={() => setLanguage('es')} 
                className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === 'es' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                ES
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                EN
              </button>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('inicio')}
              </Link>
              <a 
                href="#caracteristicas" 
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('caracteristicas')}
              </a>
              <a 
                href="#integraciones" 
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Integraciones
              </a>
              <a 
                href="#planes" 
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('planes')}
              </a>
              <Link 
                to="/blog" 
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#contacto" 
                className="text-gray-800 hover:text-emerald-600 transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contacto')}
              </a>
              <Button 
                onClick={handleClientLogin}
                variant="outline"
                className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                onClick={handleDemoClick}
                className="w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300"
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

// Supporting component for the navigation menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-600 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

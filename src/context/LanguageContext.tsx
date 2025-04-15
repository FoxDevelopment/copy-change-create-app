
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "inicio": "Home",
    "caracteristicas": "Features",
    "planes": "Plans",
    "contacto": "Contact",
    "solicitar_demo": "Request Demo",
    
    // Hero section
    "bienvenida": "Welcome to Hunter, where we don't wait for opportunities — we create them and hunt them down.",
    "tus_metas": "Your goals, our target.",
    "hunter_es": "HUNTER is a tool designed with innovative technology and complete algorithms that automate every step of the lead prospecting and management process. It allows you to focus on closing deals instead of tracking and follow-up. Simplify your strategy, automate your sales and let us hunt for you.",
    "probar_hunter": "Try Hunter now",
    "solicitar_demo_gratis": "Request a free demo",
    
    // Features
    "que_es_hunter": "What is Hunter AI?",
    "potenciamos": "We enhance the capture and conversion of clients with artificial intelligence by automating lead prospecting and management on multiple platforms, a solution for businesses and brands that want to grow without human intervention.",
    
    // Benefits
    "beneficios_clave": "Key Benefits",
    "automatizacion_mensajes": "Message Automation (100-300 daily)",
    "integracion_plataformas": "Integration with multiple platforms",
    "crm_manejo": "CRM and unified management",
    "escalabilidad": "Scalability through multiple accounts",
    
    // Testimonials
    "testimonios": "Testimonials",
    "testimonio1": "Hunter AI completely transformed our lead generation process. Now we abandon 3 times more prospects compared to the manual method.",
    "testimonio2": "Hunter's automation capabilities have given us new time to focus on manual work while improving our conversion rates.",
    
    // Plans
    "planes_precios": "Plans and Pricing",
    "plan_basico": "Basic Plan",
    "plan_profesional": "Professional Plan",
    "plan_empresarial": "Enterprise Plan",
    "mes": "/month",
    "integracion_red": "Integration with 1 social network",
    "hasta_mensajes": "Up to 50 messages per day",
    "panel_basico": "Basic analytics panel",
    "soporte_email": "Email support",
    "integracion_redes": "Integration with 3 social networks",
    "hasta_200_mensajes": "Up to 200 messages per day",
    "panel_avanzado": "Advanced analytics panel",
    "soporte_prioritario": "Priority support",
    "caracteristicas_basicas": "Basic CRM features",
    "integracion_todas": "Integration with all social networks",
    "suite_analisis": "Complete analysis suite",
    "soporte_24_7": "24/7 priority support",
    "caracteristicas_avanzadas": "Advanced CRM features",
    "herramientas_colaboracion": "Collaborative tools included",
    "elegir_plan": "Choose Plan",
    
    // FAQ
    "preguntas_frecuentes": "Frequently Asked Questions",
    "como_encuentra": "How does Hunter AI find potential clients?",
    "cumple_terminos": "Does it comply with the terms of service of the platforms?",
    "personalizar_mensajes": "Can I customize automated messages?",
    "cuanto_tiempo": "How long does it take to see results?",
    
    // CTA
    "estas_a_un_clic": "You're just one click away from your next hunt.",
    "empezar_ahora": "Start now",
    
    // Footer
    "informacion_contacto": "Contact Information",
    "enlaces_rapidos": "Quick Links",
    "politica_privacidad": "Privacy Policy",
    "terminos_condiciones": "Terms and Conditions",
    "derechos_reservados": "All rights reserved",
    
    // Tracking Page
    "trackeo_nichos": "Niche Tracking",
    "seguimiento_manual": "Manual Tracking",
    "lote": "Batch",
    "agregar": "Add",
    "filtrar": "Filter",
    "cuenta_efectuar": "Account to Execute",
    "cuenta_trackear": "Account to Track",
    "tipo_keyword": "Type/Keyword",
    "estado": "Status",
    "agregado_por": "Added by",
    "fecha": "Date",
    "acciones": "Actions",
    "no_seguimientos": "No manual tracking.",
    "archivos_csv": "Uploaded CSV Files",
    "tipo_nicho": "CSV Type/Niche",
    "seleccionar": "Select",
    "subir": "Upload",
    "fecha_subida": "Upload Date",
    "nombre_original": "Original Name",
    "tamaño": "Size",
    "subido_por": "Uploaded by",
    "no_archivos": "No CSV files uploaded.",
    "agregar_seguimiento": "Add Manual Tracking",
    "cuenta_trackear_placeholder": "e.g: @targetUser",
    "cuenta_usar_placeholder": "e.g: @ourAccount",
    "tipo_keyword_placeholder": "e.g: Competition, Potential",
    "notas": "Notes (Optional)",
    "cancelar": "Cancel",
    "agregar_lote": "Add Entries in Batch",
    "formato": "Format",
    "entradas": "Entries",
    "activo": "Active",
    "pausado": "Paused",
    "finalizado": "Finished",
    "eliminar": "Delete",
    "descargar": "Download"
  },
  es: {
    // Navbar
    "inicio": "Inicio",
    "caracteristicas": "Características",
    "planes": "Planes",
    "contacto": "Contacto",
    "solicitar_demo": "Solicitar Demo",
    
    // Hero section
    "bienvenida": "Bienvenido a Hunter, donde no esperamos oportunidades — las creamos y las cazamos.",
    "tus_metas": "Tus metas, nuestro blanco.",
    "hunter_es": "HUNTER ES una herramienta diseñada con tecnología innovadora y algoritmos completos que automatizan cada paso del proceso de prospección y gestión de leads. Te permite enfocarte en cerrar tratos en lugar de rastrear y seguimientos. Simplifica tu estrategia, automatiza tus ventas y déjanos cazar tu mismo.",
    "probar_hunter": "Probar Hunter ahora",
    "solicitar_demo_gratis": "Solicitar demo gratuito",
    
    // Features
    "que_es_hunter": "¿Qué es Hunter AI?",
    "potenciamos": "Potenciamos la captación y conversión de clientes con inteligencia artificial automatizando la prospección y gestión de leads en múltiples plataformas, una intervención para empresas y marcas que quieran crecer sin intervención humana.",
    
    // Benefits
    "beneficios_clave": "Beneficios Clave",
    "automatizacion_mensajes": "Automatización de mensajes (100-300 diarios)",
    "integracion_plataformas": "Integración con múltiples plataformas",
    "crm_manejo": "CRM y manejo unificado",
    "escalabilidad": "Escalabilidad mediante múltiples cuentas",
    
    // Testimonials
    "testimonios": "Testimonios",
    "testimonio1": "Hunter AI transformó completamente nuestro proceso de generación de leads. Ahora abordamos 3 veces más prospectos comparado con la misma cantidad de esfuerzo.",
    "testimonio2": "Las capacidades de automatización de Hunter nos han ahorrado numerosas horas de trabajo manual mientras mejoraban nuestras tasas de conversión.",
    
    // Plans
    "planes_precios": "Planes y Precios",
    "plan_basico": "Plan Básico",
    "plan_profesional": "Plan Profesional",
    "plan_empresarial": "Plan Empresarial",
    "mes": "/mes",
    "integracion_red": "Integración con 1 red social",
    "hasta_mensajes": "Hasta 50 mensajes diarios",
    "panel_basico": "Panel de análisis básico",
    "soporte_email": "Soporte por email",
    "integracion_redes": "Integración con 3 redes sociales",
    "hasta_200_mensajes": "Hasta 200 mensajes diarios",
    "panel_avanzado": "Panel de análisis avanzado",
    "soporte_prioritario": "Soporte prioritario",
    "caracteristicas_basicas": "Características básicas de CRM",
    "integracion_todas": "Integración con todas las redes sociales",
    "suite_analisis": "Suite completa de análisis",
    "soporte_24_7": "Soporte prioritario 24/7",
    "caracteristicas_avanzadas": "Características avanzadas de CRM",
    "herramientas_colaboracion": "Herramientas de colaboración incluidas",
    "elegir_plan": "Elegir Plan",
    
    // FAQ
    "preguntas_frecuentes": "Preguntas Frecuentes",
    "como_encuentra": "¿Cómo encuentra Hunter AI a potenciales clientes?",
    "cumple_terminos": "¿Cumple con los términos de servicio de las plataformas?",
    "personalizar_mensajes": "¿Puedo personalizar los mensajes automatizados?",
    "cuanto_tiempo": "¿Cuánto tiempo lleva ver resultados?",
    
    // CTA
    "estas_a_un_clic": "Estás a un clic de tu próxima cacería.",
    "empezar_ahora": "Empezar ahora",
    
    // Footer
    "informacion_contacto": "Información de Contacto",
    "enlaces_rapidos": "Enlaces Rápidos",
    "politica_privacidad": "Política de Privacidad",
    "terminos_condiciones": "Términos y Condiciones",
    "derechos_reservados": "Todos los derechos reservados",
    
    // Tracking Page
    "trackeo_nichos": "Trackeo de Nichos",
    "seguimiento_manual": "Seguimiento Manual",
    "lote": "Lote",
    "agregar": "Agregar",
    "filtrar": "Filtrar",
    "cuenta_efectuar": "Cuenta a EFECTUAR",
    "cuenta_trackear": "Cuenta a Trackear",
    "tipo_keyword": "Tipo/Keyword",
    "estado": "Estado",
    "agregado_por": "Agregado por",
    "fecha": "Fecha",
    "acciones": "Acciones",
    "no_seguimientos": "No hay seguimientos manuales.",
    "archivos_csv": "Archivos CSV Subidos",
    "tipo_nicho": "Tipo/Nicho del CSV",
    "seleccionar": "Seleccionar",
    "subir": "Subir",
    "fecha_subida": "Fecha Subida",
    "nombre_original": "Nombre Original",
    "tamaño": "Tamaño",
    "subido_por": "Subido por",
    "no_archivos": "No hay archivos CSV subidos.",
    "agregar_seguimiento": "Agregar Seguimiento Manual",
    "cuenta_trackear_placeholder": "ej: @usuarioObjetivo",
    "cuenta_usar_placeholder": "ej: @nuestraCuenta",
    "tipo_keyword_placeholder": "ej: Competencia, Potencial",
    "notas": "Notas (Opcional)",
    "cancelar": "Cancelar",
    "agregar_lote": "Agregar Seguimientos en Lote",
    "formato": "Formato",
    "entradas": "Entradas",
    "activo": "Activo",
    "pausado": "Pausado",
    "finalizado": "Finalizado",
    "eliminar": "Eliminar",
    "descargar": "Descargar"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

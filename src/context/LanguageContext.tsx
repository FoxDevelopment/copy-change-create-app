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
    "bienvenida": "Where we don't wait for opportunities — we create and hunt them",
    "tus_metas": "Your goals, our target.",
    "hunter_es": "We enhance customer acquisition and conversion with artificial intelligence, automating lead prospecting and management across multiple channels, without interruption for businesses or personal brands looking to attract customers in a sustainable and scalable way",
    "probar_hunter": "Try Hunter now",
    "solicitar_demo_gratis": "Request a free demo",
    
    // Features
    "que_es_hunter": "What is Hunter AI?",
    "potenciamos": "HUNTER I.S, a tool designed with innovative technology and complex algorithms that automate every step of the prospecting process, from identifying potential customers to contact and follow-up. Simplify your strategy, save time and effort in growing your brand.",
    
    // Benefits
    "beneficios_clave": "Key Benefits",
    "automatizacion_mensajes": "Message Automation (100-300 daily)",
    "integracion_plataformas": "Integration with multiple platforms",
    "crm_manejo": "CRM and unified management",
    "escalabilidad": "Scalability through multiple accounts",
    
    // Process steps
    "proceso_hunter": "Hunter AI Process",
    "detector_inteligente": "Smart Detector",
    "detector_desc": "Our system analyzes and detects potential leads based on predefined profiles and behaviors.",
    "sistema_respuesta": "Response System",
    "sistema_respuesta_desc": "Automates communication flow with detected leads according to established parameters.",
    "sistema_seguimiento": "Tracking System",
    "sistema_seguimiento_desc": "Monitors each lead's progression through the conversion funnel.",
    "mensajes_automatizados": "Automated Messages",
    "mensajes_automatizados_desc": "Smart sending of personalized messages based on lead profile and funnel stage.",
    "clasificacion_crm": "CRM Classification",
    "clasificacion_crm_desc": "Automatic categorization based on interactions, allowing sales strategy optimization.",
    "multicanal": "Multichannel",
    "multicanal_desc": "Integration with multiple platforms to maximize campaign reach and effectiveness.",
    
    // Testimonials
    "testimonios": "Testimonials",
    "testimonio1": "Hunter AI completely transformed our lead generation process. Now we abandon 3 times more prospects compared to the manual method.",
    "testimonio2": "Hunter's automation capabilities have given us new time to focus on manual work while improving our conversion rates.",
    
    // Plans
    "planes_precios": "Plans and Pricing",
    "plan_basico": "HUNTER BASE",
    "plan_profesional": "HUNTER PRO",
    "plan_empresarial": "HUNTER GP (Growth Partner)",
    "mes": "/month",
    "desde": "From",
    "incluye": "Includes",
    "extras": "Extras",
    "popular": "Popular",
    
    // Basic plan details
    "basic_description": "Ideal for entrepreneurs who want to activate their digital prospecting.",
    "one_integrated_channel": "1 integrated channel (Instagram, WhatsApp, Facebook or Telegram)",
    "accounts_per_channel": "Up to 2 accounts per channel",
    "messages_per_month": "Up to 3000 messages per month",
    "visual_crm": "Visual CRM with tags and filters",
    "centralized_chat": "Centralized multi-account chat",
    "basic_response": "Basic response system",
    "simple_tracking": "Simple lead tracking",
    "biweekly_call": "1 call every two weeks with implementation leader",
    "message_library": "Library of winning messages by niche",
    "community_access": "Access to private user community",
    
    // Pro plan details
    "pro_description": "For expanding businesses that want to scale with real automation.",
    "two_integrated_channels": "Up to 2 integrated channels",
    "four_accounts_channel": "Up to 4 accounts per channel",
    "six_thousand_messages": "Up to 6000 messages per month per account",
    "advanced_crm": "Visual CRM with lead scoring and advanced filters",
    "real_time_chat": "Centralized real-time chat",
    "ai_response": "Response system with customized AI",
    "automated_tracking": "Automated tracking by lead status",
    "weekly_call": "1 weekly call with implementation leader",
    "sales_scripts": "10 sales scripts ready to use",
    "training_access": "Access to recorded trainings",
    "follow_up_templates": "Post-message follow-up templates",
    "weekly_reports": "Weekly reports with key metrics",
    
    // Enterprise plan details
    "enterprise_description": "Our team works hand in hand with you to scale your entire acquisition system.",
    "full_integration": "Full integration: IG, FB, WhatsApp, Telegram, TikTok, Email, SMS",
    "unlimited_accounts": "Unlimited accounts per channel",
    "unlimited_messages": "Unlimited messages",
    "extended_crm": "Extended CRM with automations, flows and funnels",
    "ai_chat": "Centralized chat + AI with contextual memory",
    "personalized_ai": "Personalized AI to respond in real time with your tone and style",
    "complete_tracking": "Complete tracking with funnels and remarketing",
    "strategic_support": "1:1 strategic support",
    "funnel_design": "Design and optimization of complete funnels",
    "hunter_team": "Team of human Hunters + hybrid AI in real time",
    
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
    "descargar": "Download",
    
    // Process steps
    "proceso_hunter_ai_pro": "PROCESO HUNTER AI PRO"
  },
  es: {
    // Navbar
    "inicio": "Inicio",
    "caracteristicas": "Características",
    "planes": "Planes",
    "contacto": "Contacto",
    "solicitar_demo": "Solicitar Demo",
    
    // Hero section
    "bienvenida": "Donde no esperamos oportunidades — las creamos y las cazamos",
    "tus_metas": "Tus metas, nuestro blanco.",
    "hunter_es": "Potenciamos la captación y conversión de clientes con inteligencia artificial, automatizando la prospección y gestión de leads en múlticanal, sin interrupcion para empresas o marcas personales que buscan atraer clientes de manera sostenible y escalable",
    "probar_hunter": "Probar Hunter ahora",
    "solicitar_demo_gratis": "Solicitar demo gratuito",
    
    // Features
    "que_es_hunter": "¿Qué es Hunter AI?",
    "potenciamos": "HUNTER I.S, una herramienta diseñada con tecnología innovadora y algoritmos complejos que automatizan cada paso del proceso de prospección, desde la identificación de posibles clientes hasta el contacto y seguimiento. Simplifica tu estrategia, ahorra tiempo y esfuerzo en hacer crecer tu marca.",
    
    // Benefits
    "beneficios_clave": "Beneficios Clave",
    "automatizacion_mensajes": "Automatización de mensajes (100-300 diarios)",
    "integracion_plataformas": "Integración con múltiples plataformas",
    "crm_manejo": "CRM y manejo unificado",
    "escalabilidad": "Escalabilidad mediante múltiples cuentas",
    
    // Process steps
    "proceso_hunter": "Proceso de Hunter AI",
    "detector_inteligente": "Detector Inteligente",
    "detector_desc": "Nuestro sistema analiza y detecta potenciales leads basados en perfiles y comportamientos predefinidos.",
    "sistema_respuesta": "Sistema de Respuesta",
    "sistema_respuesta_desc": "Automatiza el flujo de comunicación con leads detectados según parámetros establecidos.",
    "sistema_seguimiento": "Sistema de Seguimiento",
    "sistema_seguimiento_desc": "Monitoriza la progresión de cada lead a través del embudo de conversión.",
    "mensajes_automatizados": "Mensajes Automatizados",
    "mensajes_automatizados_desc": "Envío inteligente de mensajes personalizados según el perfil del lead y su etapa en el embudo.",
    "clasificacion_crm": "Clasificación CRM",
    "clasificacion_crm_desc": "Categorización automática en base a interacciones, permitiendo optimizar la estrategia de ventas.",
    "multicanal": "Multicanal",
    "multicanal_desc": "Integración con múltiples plataformas para maximizar el alcance y eficacia de las campañas.",
    
    // Testimonials
    "testimonios": "Testimonios",
    "testimonio1": "Hunter AI transformó completamente nuestro proceso de generación de leads. Ahora abordamos 3 veces más prospectos comparado con la misma cantidad de esfuerzo.",
    "testimonio2": "Las capacidades de automatización de Hunter nos han ahorrado numerosas horas de trabajo manual mientras mejoraban nuestras tasas de conversión.",
    
    // Plans
    "planes_precios": "Planes y Precios",
    "plan_basico": "HUNTER BASE",
    "plan_profesional": "HUNTER PRO",
    "plan_empresarial": "HUNTER GP (Growth Partner)",
    "mes": "/mes",
    "desde": "Desde",
    "incluye": "Incluye",
    "extras": "Extras",
    "popular": "Popular",
    
    // Basic plan details
    "basic_description": "Ideal para emprendedores que quieren activar su prospección digital.",
    "one_integrated_channel": "1 canal integrado (Instagram, WhatsApp, Facebook o Telegram)",
    "accounts_per_channel": "Hasta 2 cuentas por canal",
    "messages_per_month": "Hasta 3000 mensajes al mes",
    "visual_crm": "CRM visual con etiquetas y filtros",
    "centralized_chat": "Chat centralizado multicuenta",
    "basic_response": "Sistema de respuesta básica",
    "simple_tracking": "Seguimiento simple para leads",
    "biweekly_call": "1 llamada quincenal con líder de implementación",
    "message_library": "Biblioteca de mensajes ganadores por nicho",
    "community_access": "Acceso a comunidad privada de usuarios",
    
    // Pro plan details
    "pro_description": "Para negocios en expansión que quieren escalar con automatización real.",
    "two_integrated_channels": "Hasta 2 canales integrados",
    "four_accounts_channel": "Hasta 4 cuentas por canal",
    "six_thousand_messages": "Hasta 6000 mensajes al mes por cuenta",
    "advanced_crm": "CRM visual con lead scoring y filtros avanzados",
    "real_time_chat": "Chat centralizado en tiempo real",
    "ai_response": "Sistema de respuesta con IA personalizada",
    "automated_tracking": "Seguimiento automatizado por estado del lead",
    "weekly_call": "1 llamada semanal con líder de implementación",
    "sales_scripts": "10 scripts de venta listos para usar",
    "training_access": "Acceso a entrenamientos grabados",
    "follow_up_templates": "Plantillas de seguimiento post-mensaje",
    "weekly_reports": "Reportes semanales con métricas clave",
    
    // Enterprise plan details
    "enterprise_description": "Nuestro equipo trabaja codo a codo con vos para escalar todo tu sistema de captación.",
    "full_integration": "Integración total: IG, FB, WhatsApp, Telegram, TikTok, Email, SMS",
    "unlimited_accounts": "Cuentas ilimitadas por canal",
    "unlimited_messages": "Mensajes ilimitados",
    "extended_crm": "CRM extendido con automatizaciones, flujos y embudos",
    "ai_chat": "Chat centralizado + IA con memoria contextual",
    "personalized_ai": "IA personalizada para responder en tiempo real con tu tono y estilo",
    "complete_tracking": "Seguimiento completo con embudos y remarketing",
    "strategic_support": "Acompañamiento estratégico 1:1",
    "funnel_design": "Diseño y optimización de funnels completos",
    "hunter_team": "Team de Hunters humanos + IA híbrida en tiempo real",
    
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
    "descargar": "Descargar",
    
    // Process steps
    "proceso_hunter_ai_pro": "PROCESO HUNTER AI PRO"
  }
};

// Create the context with a default undefined value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create the provider component as a proper React functional component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

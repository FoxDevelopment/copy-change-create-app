
import { useLanguage } from '../../context/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonio1'),
      author: "Juan Pérez",
      role: "Marketing Manager, IncSales"
    },
    {
      text: t('testimonio2'),
      author: "Sara Rodríguez",
      role: "Growth Manager, MarTech LLC"
    },
    {
      text: "Hunter AI ha revolucionado por completo nuestra estrategia de captación de clientes. Su capacidad de automatización y precisión en la identificación de leads es realmente impresionante.",
      author: "Williams Villalobos",
      role: "Marketing Digital Specialist"
    },
    {
      text: "Como coach, valorar el tiempo es fundamental. Hunter AI me ha permitido conectar con más clientes potenciales de manera eficiente y personalizada.",
      author: "Jemelin Artigas",
      role: "Professional Coach"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 bg-clip-text text-transparent background-animate">
            {t('testimonios')}
          </span>
          <div className="absolute w-32 h-1 bg-emerald-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-4">
                  <Card className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="flex flex-col items-start p-6">
                      <Quote className="text-emerald-500 mb-4" size={32} />
                      <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

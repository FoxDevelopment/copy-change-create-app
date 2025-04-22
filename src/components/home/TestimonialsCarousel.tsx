
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
      role: "Marketing Manager, IncSales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80",
      stars: 5
    },
    {
      text: t('testimonio2'),
      author: "Sara Rodríguez",
      role: "Growth Manager, MarTech LLC",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80",
      stars: 5
    },
    {
      text: "Hunter AI ha revolucionado por completo nuestra estrategia de captación de clientes. Su capacidad de automatización y precisión en la identificación de leads es realmente impresionante.",
      author: "Williams Villalobos",
      role: "Marketing Digital Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&q=80",
      stars: 4
    },
    {
      text: "Como coach, valorar el tiempo es fundamental. Hunter AI me ha permitido conectar con más clientes potenciales de manera eficiente y personalizada.",
      author: "Jemelin Artigas",
      role: "Professional Coach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&q=80",
      stars: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
    );
  };

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
                  <Card className="bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="text-emerald-500 flex-shrink-0" size={32} />
                        <StarRating rating={testimonial.stars} />
                      </div>
                      
                      <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
                      
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
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

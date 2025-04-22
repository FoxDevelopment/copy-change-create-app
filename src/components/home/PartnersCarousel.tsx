
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PartnersCarousel = () => {
  // Example company logos - replace with your actual company logos
  const companies = [
    { name: "Company 1", logo: "https://via.placeholder.com/150x80?text=Logo+1" },
    { name: "Company 2", logo: "https://via.placeholder.com/150x80?text=Logo+2" },
    { name: "Company 3", logo: "https://via.placeholder.com/150x80?text=Logo+3" },
    { name: "Company 4", logo: "https://via.placeholder.com/150x80?text=Logo+4" },
    { name: "Company 5", logo: "https://via.placeholder.com/150x80?text=Logo+5" },
    { name: "Company 6", logo: "https://via.placeholder.com/150x80?text=Logo+6" },
    { name: "Company 7", logo: "https://via.placeholder.com/150x80?text=Logo+7" },
    { name: "Company 8", logo: "https://via.placeholder.com/150x80?text=Logo+8" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 bg-clip-text text-transparent background-animate">
            Empresas con las que trabajamos
          </span>
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {companies.map((company, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="p-2">
                  <div className="bg-white rounded-lg shadow-sm p-4 h-24 flex items-center justify-center hover:shadow-md transition-all duration-300 hover:scale-105">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
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

export default PartnersCarousel;

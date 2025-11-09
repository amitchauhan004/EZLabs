import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import arrowRight from "@/assets/arrow-right.png";

interface ServiceDetailProps {
  quote: string;
  author: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string[];
  serviceLabel: string;
  services: string[];
  onBack: () => void;
  decorativeIcons?: React.ReactNode;
}

const ServiceDetail = ({
  quote,
  author,
  image,
  imageAlt,
  title,
  description,
  serviceLabel,
  services,
  onBack,
  decorativeIcons,
}: ServiceDetailProps) => {
  return (
  <section className="min-h-screen bg-cream py-20 px-4 md:px-8 relative overflow-hidden bg-[url('/src/assets/BG.png')] bg-cover bg-center bg-no-repeat">
      {/* Decorative Icons */}
      {decorativeIcons}

      <div className="container mx-auto max-w-7xl">
        {/* Quote Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-navy mb-4 px-4">
            "{quote}" – {author}
          </h2>
          {/* brush stroke removed per request */}
        </div>

        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-8 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Polaroid Image */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-white p-6 pb-16 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-md w-full">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center font-serif text-navy text-2xl">
                {title}
              </h3>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className="text-foreground text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <p className="text-navy font-semibold text-lg mb-3">{serviceLabel}</p>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-foreground text-base md:text-lg flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Now Button */}
            <div className="pt-6 flex items-center gap-4">
              <span className="text-navy font-medium text-lg">Explore Now</span>
              <img src={arrowRight} alt="" className="w-20 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;

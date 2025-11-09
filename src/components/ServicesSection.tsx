import filmProductionImg from "@/assets/Frame 31.png";
import brandingImg from "@/assets/Frame 31 (1).png";
import artCurationImg from "@/assets/Frame 31 (2).png";
import bgTexture from "@/assets/BG.png";



const Services = () => {
  const services = [
    {
      title: "Film Production",
      image: filmProductionImg,
    },
    {
      title: "Branding",
      image: brandingImg,
    },
    {
      title: "Art Curation",
      image: artCurationImg,
    },
  ];

  return (
    <section id="services" className={`py-20 bg-cream bg-[url('/src/assets/BG.png')] bg-cover bg-center bg-no-repeat`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-serif text-navy mb-4">
          The storyboard reveals the breadth of our craft.
        </h2>
        <div className="w-48 h-1 bg-navy mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transform hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Polaroid-style frame */}
              <div className="bg-white p-4 pb-12 shadow-xl transform hover:rotate-0 transition-transform border-4 border-primary"
                style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-serif text-navy text-xl mt-4">
                  {service.title}
                </p>
              </div>
              
              {/* Tape effect */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-muted/60 -rotate-12 shadow-sm"></div>
            </div>
          ))}
        </div>

        {/* Decorative border */}
        <div className="mt-16 border-t-4 border-primary/20" 
          style={{
            borderImage: "repeating-linear-gradient(to right, hsl(var(--primary)) 0, hsl(var(--primary)) 20px, transparent 20px, transparent 40px) 1"
          }}
        ></div>
      </div>
    </section>
  );
};

export default Services;

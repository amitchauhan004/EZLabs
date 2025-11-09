import mandalaFlower from "@/assets/Hero Mandala.png";
import vFilmsLogo from "@/assets/VFilms Logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream bg-[url('/src/assets/BG.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Logo and Mandala */}
        <div className="relative h-[565px] flex items-center justify-center">
          <div className="absolute w-[565px] h-[565px]">
            <img
              src={mandalaFlower}
              alt="Mandala pattern"
              className="w-full h-full object-cover select-none"
            />
          </div>
          <div className="relative z-10">
            <img
              src={vFilmsLogo}
              alt="VFilms Logo"
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl text-navy leading-tight font-['Island_Moments']">
            Varnan is where stories find <br /> their voice and form
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Films . Brands . Art
          </p>

          <div className="text-foreground leading-relaxed max-w-xl">
            <p>
              Since 2009, V've been telling stories stories of people,
              their journeys, and the places that shape them.
              Some begin in polished boardrooms, others in humble
              village squares. But every story starts the same way by
              listening with intention. V believes it takes trust, patience,
              and an eye for the unseen to capture what truly matters.
              V doesn't just tell stories V honors them.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary/10 to-transparent"></div>
    </section>
  );
};

export default Hero;

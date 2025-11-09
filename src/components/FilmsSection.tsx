import cameraIcon from "@/assets/Group 11.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-cream relative overflow-hidden bg-[url('/src/assets/BG.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl text-center font-serif text-navy mb-4">
          The Highlight Reel
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Watch the magic we've captured.
        </p>

        {/* Film strip frame */}
        <div className="relative bg-gray-300 p-8 rounded-lg shadow-2xl">
          {/* Camera icon fills the frame */}
          <img
            src={cameraIcon}
            alt="Camera icon"
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-10"
          />
          {/* Film holes */}
          <div className="absolute top-4 left-0 right-0 flex justify-between px-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="bg-white p-4 relative">
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-navy/20"></div>
              <button className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </button>
            </div>

            {/* Navigation arrows */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 text-navy text-6xl font-bold hover:text-primary transition-colors">
              ‹
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-navy text-6xl font-bold hover:text-primary transition-colors">
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Right decorative mandala */}
      <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10">
        <div className="w-full h-full border-4 border-primary rounded-full"></div>
        <div className="absolute inset-8 border-2 border-primary rounded-full"></div>
        <div className="absolute inset-16 border border-primary rounded-full"></div>
      </div>
    </section>
  );
};

export default Portfolio;

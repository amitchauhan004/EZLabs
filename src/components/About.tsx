const About = () => {
  return (
    <section id="about" className="py-20 bg-cream bg-[url('/src/assets/BG.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8">
              A montage of familiar faces and names.
            </h2>
            
            <p className="text-foreground leading-relaxed max-w-md">
              Some stories come from the biggest names.
              Others begin with bold, rising voices.
              We've been fortunate to walk alongside both listening, creating, and building stories that
              matter.
            </p>

            <div className="flex gap-6 flex-wrap">
              <div className="bg-sticky-yellow p-6 rounded-lg shadow-md transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="text-5xl font-bold text-navy">85+</div>
                <div className="text-primary font-semibold">Projects</div>
              </div>
              
              <div className="bg-sticky-yellow p-6 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform">
                <div className="text-5xl font-bold text-navy">50+</div>
                <div className="text-primary font-semibold">Happy Clients</div>
              </div>
              
              <div className="bg-sticky-yellow p-6 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="text-5xl font-bold text-navy">10+</div>
                <div className="text-primary font-semibold">Experts Team</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-['Island_Moments'] text-navy leading-tight">
              Every project is more than just a brief it's a new chapter waiting to be written.
            </h3>
            
            <p className="text-3xl md:text-4xl font-['Island_Moments'] text-navy">
              Together, we've crafted tales that inspire, connect, and endure.
            </p>

            {/* Client Logos Placeholder */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-primary/40 font-bold text-2xl transform -rotate-12">TED</div>
              <div className="text-primary/40 font-bold text-2xl handwriting">Coca-Cola</div>
              <div className="text-primary/40 font-bold text-xl">NIKON</div>
              <div className="text-primary/40 font-bold text-2xl">D3</div>
              <div className="text-primary/40 font-bold text-xl handwriting">Netflix</div>
              <div className="text-primary/40 font-bold text-3xl transform rotate-6">TED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

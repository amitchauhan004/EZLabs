import { Button } from "./ui/button";
import { type FC } from "react";

const Team: FC = () => {
  return (
    <section id="team" className="py-20 bg-cream relative overflow-hidden bg-[url('/src/assets/BG.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Side - Note and Arch */}
          <div className="relative max-w-lg">
            {/* Sticky Note with pin effect */}
            <div className="bg-[#FFFAD1] p-8 shadow-lg transform -rotate-2 relative">
              {/* Pin/clip effect */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-12 bg-gray-300/50 rounded-full transform rotate-45"></div>
              </div>
              <p className="text-[#2B3B4E] leading-relaxed text-lg">
                Some craft films. Some build brands. Some curate art. We bring it all together – a
                collective of storytellers driven by one belief: every project deserves to be more
                than just a message; it should become a masterpiece.
              </p>
              <p className="text-[#2B3B4E] leading-relaxed text-lg mt-4">
                From first spark to final frame, from raw ideas to timeless visuals – we shape stories
                that stay with you.
              </p>
            </div>
            
            {/* Decorative Arch */}
            <div className="absolute -bottom-16 -left-8">
              <img src="/src/assets/Footer Vector.png" alt="" className="w-48 h-48 opacity-20" />
            </div>
          </div>

          {/* Right Side - Team and Labels */}
          <div className="flex-1 relative">
            {/* Film Makers Label with Arrow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
              <p className="font-['Island_Moments'] text-3xl text-navy">Film Makers</p>
              <img src="/src/assets/Vector (1).svg" alt="" className="w-24 h-auto mx-auto mt-2" />
            </div>

            {/* Team Members Photo */}
            <div className="flex justify-center gap-8 my-16">
              <img 
                src="/src/assets/group 2.svg" 
                alt="Team Members" 
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>

            {/* Labels with Curved Arrows */}
            <div className="flex justify-between max-w-2xl mx-auto relative">
              <div className="relative">
                <p className="font-['Island_Moments'] text-2xl text-navy">Branding Experts</p>
                <img src="/src/assets/Vector.svg" alt="" className="absolute -top-20 -left-12 w-32 h-auto transform -rotate-45" />
              </div>
              
              <div className="relative">
                <p className="font-['Island_Moments'] text-2xl text-navy">Art Curators</p>
                <img src="/src/assets/Vector.svg" alt="" className="absolute -top-20 -right-12 w-32 h-auto transform rotate-45" />
              </div>
            </div>

            {/* Bottom Text and Button */}
            <div className="text-center mt-16">
              <p className="text-2xl font-serif text-navy mb-8">
                Take a closer look at the stories V bring to life.
              </p>
              <Button
                onClick={() => {}}
                className="bg-primary text-white rounded-full px-8 py-2 text-lg hover:bg-primary/90"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

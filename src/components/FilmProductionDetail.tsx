import ServiceDetail from "./ServiceDetail";
import filmProductionImg from "@/assets/film production.png";
import { Camera, Film, Clapperboard, Settings } from "lucide-react";

interface FilmProductionDetailProps {
  onBack: () => void;
}

const FilmProductionDetail = ({ onBack }: FilmProductionDetailProps) => {
  const decorativeIcons = (
    <>
      {/* Top Right */}
      <div className="absolute top-32 right-16 text-navy opacity-60">
        <Film className="w-20 h-20" />
      </div>
      
      {/* Middle Right */}
      <div className="absolute top-1/2 right-32 text-navy opacity-50">
        <Clapperboard className="w-16 h-16" />
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-32 right-24 text-navy opacity-60">
        <Settings className="w-20 h-20" />
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-24 left-16 text-navy opacity-50">
        <Camera className="w-24 h-24" />
      </div>
    </>
  );

  return (
    <ServiceDetail
      quote="Filmmaking is a chance to live many lifetimes."
      author="Robert Altman"
      image={filmProductionImg}
      imageAlt="Film Production studio with green screen"
      title="Film Production"
      description={[
        "Who says films are just an escape?",
        "We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.",
      ]}
      serviceLabel="V crafts:"
      services={[
        "Documentaries",
        "Corporate Videos",
        "2D Animation Videos",
        "3D Animation Videos",
      ]}
      onBack={onBack}
      decorativeIcons={decorativeIcons}
    />
  );
};

export default FilmProductionDetail;

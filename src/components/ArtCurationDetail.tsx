import ServiceDetail from "./ServiceDetail";
import artCurationImg from "@/assets/art.png";
import { Frame, Users, Home, Palette } from "lucide-react";

interface ArtCurationDetailProps {
  onBack: () => void;
}

const ArtCurationDetail = ({ onBack }: ArtCurationDetailProps) => {
  const decorativeIcons = (
    <>
      {/* Top Right */}
      <div className="absolute top-32 right-20 text-navy opacity-60">
        <Frame className="w-20 h-20" />
      </div>
      
      {/* Middle Right - Stacked frames */}
      <div className="absolute top-1/2 right-24 text-navy opacity-50">
        <div className="grid grid-cols-2 gap-2">
          <div className="border-2 border-navy p-1 rounded w-12 h-12"></div>
          <div className="border-2 border-navy p-1 rounded w-12 h-12"></div>
          <div className="border-2 border-navy p-1 rounded w-12 h-12"></div>
          <div className="border-2 border-navy p-1 rounded w-12 h-12"></div>
        </div>
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-32 right-24 text-navy opacity-60">
        <Home className="w-24 h-24" />
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-24 left-16 text-navy opacity-50">
        <div className="relative">
          <Palette className="w-20 h-20" />
        </div>
      </div>
    </>
  );

  return (
    <ServiceDetail
      quote="V take art where it belongs, to the people."
      author="Vernita Verma"
      image={artCurationImg}
      imageAlt="Art Curation event with community gathering"
      title="Art Curation"
      description={[
        "Art isn't meant to sit on distant walls - it's meant to breathe, to travel, to belong.",
        "Through every festival, every performance, and every gathering, we help stories find their stage and their people.",
      ]}
      serviceLabel="V curates:"
      services={[
        "Art Festivals",
        "Live Performances",
        "Community Events",
        "Cultural Storytelling",
      ]}
      onBack={onBack}
      decorativeIcons={decorativeIcons}
    />
  );
};

export default ArtCurationDetail;

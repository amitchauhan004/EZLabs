import ServiceDetail from "./ServiceDetail";
import brandingImg from "@/assets/branding.png";
import { Award, Star, Sparkles, Heart } from "lucide-react";

interface BrandingDetailProps {
  onBack: () => void;
}

const BrandingDetail = ({ onBack }: BrandingDetailProps) => {
  const decorativeIcons = (
    <>
      {/* Top Right */}
      <div className="absolute top-32 right-20 text-navy opacity-60">
        <Award className="w-20 h-20" />
      </div>
      
      {/* Middle Right - Multiple icons in a pattern */}
      <div className="absolute top-1/2 right-24 text-navy opacity-50 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="border-2 border-navy p-2 rounded">
            <div className="w-8 h-8 bg-navy/20"></div>
          </div>
          <div className="border-2 border-navy p-2 rounded">
            <div className="w-8 h-8 bg-navy/20"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-32 right-28 text-navy opacity-60">
        <Sparkles className="w-20 h-20" />
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-24 left-16 text-navy opacity-50">
        <div className="relative">
          <Star className="w-16 h-16" />
          <Heart className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </>
  );

  return (
    <ServiceDetail
      quote="A brand is a voice, and a product is a souvenir."
      author="Lisa Gansky"
      image={brandingImg}
      imageAlt="Branding workspace with design elements"
      title="Branding"
      description={[
        "A brand isn't just what you see - it's what you remember, what you carry home, and what you trust.",
        "We shape brands that people remember, return to, and fall in love with.",
      ]}
      serviceLabel="V creates:"
      services={[
        "Branding & Communication",
        "Market Mapping",
        "Content Management",
        "Social Media Management",
        "Rebranding",
      ]}
      onBack={onBack}
      decorativeIcons={decorativeIcons}
    />
  );
};

export default BrandingDetail;

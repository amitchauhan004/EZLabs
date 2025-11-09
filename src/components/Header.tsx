import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/VFilms Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="V Films Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Their Stories
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Varnan
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
          >
            Let's Talk
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Their Stories
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Varnan
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
            >
              Let's Talk
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

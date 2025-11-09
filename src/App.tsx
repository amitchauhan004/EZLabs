import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import FilmsSection from "@/components/FilmsSection";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ArtCurationDetail from "@/components/ArtCurationDetail";
import BrandingDetail from "@/components/BrandingDetail";
import FilmProductionDetail from "@/components/FilmProductionDetail";
import ServiceDetail from "@/components/ServiceDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Team />
        <About />
        <ServicesSection />
        <FilmProductionDetail onBack={() => {}} />
        <BrandingDetail onBack={() => {}} />
        <ArtCurationDetail onBack={() => {}} />
        <FilmsSection />
        <ContactForm />
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

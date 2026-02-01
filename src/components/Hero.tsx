import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TrustedBy from "@/components/TrustedBy";
import MissionSection from "@/components/MissionSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

interface HeroProps {
  onBookDemo?: () => void;
}

const Hero = ({ onBookDemo }: HeroProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Simple CSS-based background animation (ambient blobs + soft waves)

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* CSS animated background layers - full section coverage */}
      <div className="hero-ambient" style={{ opacity: 0.9 }} />
      <div className="hero-wave" />
      <div className="hero-wave-2" />
      <div className="hero-wave-red" style={{ opacity: 0.45 }} />
      <div className="hero-dots-red" />
      <div className="container px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-5xl leading-tight">
            The <span className="relative inline-block text-primary">
              AI Dental Receptionist
              <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-2 bg-primary/25 rounded-full blur-[2px]" />
            </span>{" "}
            Your Patients Wish For
          </h1>
          {/* Shorter copy on mobile, fuller copy on md+ */}
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed md:hidden">
            breeh's AI receptionists answer calls, book visits, and handle routine questions so your team can stay
            focused on patients in the chair.
          </p>
          <p className="hidden md:block text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Breeh AI greet every caller, book and reschedule appointments, handle routine questions, and
            follow up with patients so your front desk can focus on in-office care.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button
              size="lg"
              onClick={onBookDemo}
              className="h-12 rounded-full px-8 text-sm md:text-base font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-2xl hover:bg-primary-hover transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 ring-1 ring-primary/40"
            >
              See how it works
            </Button>
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
              <DialogTrigger asChild>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="group h-12 rounded-full px-8 text-sm md:text-base font-semibold bg-white text-foreground border-border shadow-md hover:shadow-xl hover:bg-white/90 hover:text-foreground transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Play className="w-5 h-5" />
                  </span>
                  <span className="font-semibold tracking-wide">Watch Demo</span>
                </Button> */}
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Demo video placeholder</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <TrustedBy />
          <div className="h-12 md:h-20" /> {/* Further reduced spacer */}
          <div className="w-full">
            <MissionSection />
          </div>
          <div className="h-12 md:h-20" /> {/* Spacer between Mission and Case Studies */}
          <div className="w-full">
            <CaseStudiesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

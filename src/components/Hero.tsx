import { Button } from "@/components/ui/button";
import TrustedBy from "@/components/TrustedBy";
import MissionSection from "@/components/MissionSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

interface HeroProps {
  onBookDemo?: () => void;
}

const Hero = ({ onBookDemo }: HeroProps) => {
  return (
    <>
      {/* Hero Section - Full width background image with overlay */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop')`,
          }}
        />

        {/* Premium Radial Gradient Overlay - Spotlight Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6366f1]/80 via-[#4f46e5]/85 to-[#3730a3]/90 backdrop-blur-[1px]" />

        {/* Content */}
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            {/* Badge/Label */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-white">
                For Dental Practices & DSOs
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl leading-[1.1]">
              DO YOU WANT
              <br />
              <span className="text-yellow-300">MORE APPOINTMENTS?</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Never miss another patient call. Our AI receptionist answers 24/7,
              books appointments, and follows up automatically.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={onBookDemo}
              className="h-14 md:h-16 rounded-xl px-10 md:px-14 text-base md:text-lg font-bold bg-white text-primary shadow-xl hover:bg-white/90 transition-all duration-300 uppercase tracking-wide"
            >
              Yes! Show Me How
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Below hero on lighter background */}
      <section className="bg-[#FAFAFA] py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <TrustedBy />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#FAFAFA] py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <MissionSection />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-[#FAFAFA] py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <CaseStudiesSection />
        </div>
      </section>
    </>
  );
};

export default Hero;

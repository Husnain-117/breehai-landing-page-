import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FinalCTAProps {
  onBookDemo?: () => void;
}

const FinalCTA = ({ onBookDemo }: FinalCTAProps) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left content - fully responsive */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
              GET STARTED TODAY - IT'S EASY!
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Ready to turn missed calls into new patients?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Book More Patients 24/7 with breeh's AI Voice Receptionist - Secure, Revenue-Boosting, and{" "}
              <span className="font-semibold text-foreground">Free for 30 Days</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={onBookDemo}
              >
                Book a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-6 md:px-8 py-5 md:py-6 text-base md:text-lg border-2 w-full sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right side - floating info box instead of image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Soft glow background */}
              <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-[32px] pointer-events-none" aria-hidden="true" />

              <Card className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-background via-secondary/40 to-primary/10 shadow-xl shadow-primary/20 translate-y-1 hover:-translate-y-1.5 transition-transform duration-300"> 
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                    24/7 AI RECEPTION
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    Every call answered, every opportunity captured.
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    While your team focuses chairside, breeh quietly handles missed calls, after-hours questions, and new
                    patient inquiries without putting anyone on hold.
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-primary/20 bg-background/60 px-4 py-3 flex flex-col gap-1">
                      <span className="text-[11px] font-medium text-primary uppercase tracking-[0.16em]">
                        NEW PATIENT FLOW
                      </span>
                      <span className="text-xs text-muted-foreground">Capture, qualify, and book new patients even when your front desk is away.</span>
                    </div>
                    <div className="rounded-2xl border border-primary/10 bg-background/60 px-4 py-3 flex flex-col gap-1">
                      <span className="text-[11px] font-medium text-primary uppercase tracking-[0.16em]">
                        EXISTING PATIENTS
                      </span>
                      <span className="text-xs text-muted-foreground">Route emergencies, manage schedule changes, and keep chairs full.</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface GetStartedSectionProps {
  onBookDemo?: () => void;
}

const GetStartedSection = ({ onBookDemo }: GetStartedSectionProps) => {
  const steps = [
    {
      number: "01",
      title: "Integrate with your PMS",
      description: "1-click integration to your practice management software"
    },
    {
      number: "02",
      title: "Configure breeh",
      description: "Our onboarding specialist will set up breeh with your office information and preferences."
    },
    {
      number: "03",
      title: "Forward & Go Live",
      description: "Forward calls from any phone system to your breeh number."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            It's easy to get started with breeh
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in as little as 20 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {step.number}
                  </span>
                  <ChevronRight className="w-6 h-6 text-muted-foreground/40" />
                </div>
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}

          <Card className="p-8 bg-gradient-to-br from-primary to-primary-hover text-white shadow-xl">
            <div className="space-y-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-wider opacity-90 mb-4">
                  GET STARTED
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Turn missed calls into new patients
                </h3>
                <p className="text-sm opacity-90">
                  See how it worksto get started.
                </p>
              </div>
              <Button 
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-white/90"
                onClick={onBookDemo}
              >
                Book a Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;

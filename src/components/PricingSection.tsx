import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

interface PricingSectionProps {
  onBookDemo?: () => void;
}

const PricingSection = ({ onBookDemo }: PricingSectionProps) => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const standardFeatures = [
    "30-day Free Trial",
    "24/7 Inbound Call Handling for After-Hours and Overflow",
    "Appointment Scheduling and Rescheduling",
    "Unlimited Calls & Minutes",
    "PMS and Phone Integration",
    "Call Recording & Analytics",
    "English & Spanish",
    "Standard Screening Questions",
    "Up to 6 Appointment Types",
    "SMS Confirmation & Follow-Up",
    "Custom Greeting & Name",
    "Support via Phone, Email, and Chat"
  ];

  const premiumFeatures = [
    "Everything in Standard, plus:",
    "Advanced Scheduling",
    "Custom Screening Questions",
    "Route to Live Representative Upon Request",
    "Emergency Call Forwarding",
    "After-Hours Call Forwarding",
    "Up to 10 Appointment Types",
    "Up to 8 Languages",
    "AI SMS Text Conversations"
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/10">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Outer bordered wrapper to keep section single-height and cohesive */}
        <div className="rounded-3xl border border-border/60 bg-white/80 dark:bg-background/70 backdrop-blur-xl shadow-lg p-6 md:p-10">
        <div className="text-center mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-5 py-1.5 rounded-full text-xs md:text-sm font-medium border border-primary/15">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Transparent pricing for modern dental practices</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            Start with a Free Trial. Unlimited call handling plans starting at $319/mo.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Affordable pricing for every dental practice. Cancel anytime.
          </p>

          <div className="inline-flex bg-secondary/50 rounded-full p-1 gap-1 border border-border">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingPeriod === "monthly" ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                billingPeriod === "yearly" ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-stretch">
          <Card className="p-8 md:p-9 lg:p-10 rounded-3xl bg-background/80 border border-border/70 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in h-full">
            <div className="flex flex-col h-full">
              <div className="space-y-6">
              <h3 className="text-2xl font-bold">Standard</h3>
              
              <div className="space-y-3">
                {standardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              </div>
              <div className="pt-6 border-t mt-6 mt-auto border-border/70">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Starting at</p>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl md:text-5xl font-bold">$319</span>
                  <span className="text-xl text-muted-foreground line-through">$399</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">per location, per month</p>
                <Button className="w-full" size="lg" onClick={onBookDemo}>Book a Demo</Button>
              </div>
            </div>
          </Card>

          <Card className="p-8 md:p-9 lg:p-10 rounded-3xl bg-gradient-to-br from-primary/6 via-background to-background border border-primary/40 shadow-xl lg:scale-[1.01] animate-fade-in relative overflow-hidden h-full">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-sm">
              MOST POPULAR
            </div>
            <div className="flex flex-col h-full">
              <div className="space-y-6">
              <h3 className="text-2xl font-bold">Premium</h3>
              
              <div className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
              </div>
              <div className="pt-6 border-t border-primary/30 mt-6 mt-auto">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Starting at</p>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">$399</span>
                  <span className="text-xl text-muted-foreground line-through">$499</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">per location, per month</p>
                <Button className="w-full shadow-lg hover:shadow-xl" size="lg" onClick={onBookDemo}>
                  Book a Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 md:p-10 rounded-3xl bg-secondary/20 animate-fade-in border border-border/70">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Enterprise</h3>
              <p className="text-muted-foreground text-base">
                10+ locations? Need call center functionality? Special use cases? DSO?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button size="lg" className="w-full sm:w-auto" onClick={onBookDemo}>Book a Demo</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Contact Us</Button>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarRange, FileText } from "lucide-react";

interface FeaturesSectionProps {
  onBookDemo?: () => void;
}

const FeaturesSection = ({ onBookDemo }: FeaturesSectionProps) => {
  const features = [
    {
      id: "calls",
      eyebrow: "SMART CALL MANAGEMENT",
      icon: PhoneCall,
      title: "Inbound & Outbound Patient Calls",
      description: "breeh answers every call with a friendly, dental-specific script and never sends new patients to voicemail.",
      bullets: [
        "Registers and pre-qualifies new patients",
        "Captures insurance and contact details on the first call",
        "Routes emergencies and after-hours calls to the right person",
      ],
      image:
        "https://images.unsplash.com/photo-1593437955835-fc8c51725430?q=80&w=1070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "scheduling",
      eyebrow: "PRACTICE OPTIMIZED",
      icon: CalendarRange,
      title: "Hygiene & Treatment Scheduling",
      description:
        "Fill chairs intelligently by matching callers to the right provider, operatory, and time slot in your existing schedule.",
      bullets: [
        "Books, reschedules, and cancels directly into your PMS",
        "Supports family and multi-appointment bookings",
        "Protects high-value production time with smarter templates",
      ],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "documentation",
      eyebrow: "PRODUCTION VISIBILITY",
      icon: FileText,
      title: "Call Notes & Chart Documentation",
      description:
        "Turn every conversation into structured notes your team can act on without replaying voicemails or chasing details.",
      bullets: [
        "Summarizes calls into clear, action-oriented notes",
        "Surfaces missed opportunities and unscheduled treatment",
        "Gives owners visibility into call volume and outcomes",
      ],
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-14 md:mb-16 space-y-4">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">
            FEATURES & INTEGRATIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for high-volume dental practices
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the first ring to chart-ready notes, breeh plugs into your existing tools to handle the workflows your front desk does today.
          </p>
        </div>

        <div className="space-y-14 md:space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const imageFirst = index % 2 === 1;

            return (
              <div
                key={feature.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
              >
                <div className={imageFirst ? "md:order-2" : ""}>
                  <Card className="rounded-3xl border bg-card shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-secondary/40 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>

                <div className={imageFirst ? "md:order-1" : ""}>
                  <div className="space-y-4 md:space-y-5">
                    <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.25em]">
                      {feature.eyebrow}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                      {feature.description}
                    </p>
                    <ul className="space-y-2.5 text-sm md:text-base text-foreground/85">
                      {feature.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="mt-3 rounded-full px-5 py-2 text-sm font-semibold border-primary/40 text-primary hover:bg-primary/10"
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <Card className="mt-6 md:mt-10 rounded-3xl border bg-card shadow-md md:shadow-lg px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-xl">
              <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.25em]">
                SEE IT IN ACTION
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Want to see how breeh fits your front desk?</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Share a few details about your practice and we'll walk you through real call flows, scheduling, and documentation during a live demo.
              </p>
            </div>
            <div className="w-full md:w-auto flex items-center md:justify-end">
              <Button
                size="lg"
                className="w-full md:w-auto rounded-full px-6 md:px-8 h-11 md:h-12 text-sm md:text-base font-semibold"
                onClick={onBookDemo}
              >
                Book a live demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

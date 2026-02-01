import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface StatsSectionProps {
  onBookDemo?: () => void;
}

const StatsSection = ({ onBookDemo }: StatsSectionProps) => {
  const stats = [
    {
      number: "100%",
      title: "Call Answer Rate",
      description: "Never miss an opportunity to grow your practice (median)*"
    },
    {
      number: "21",
      title: "Appointments Booked Per Month",
      description: "Captured from calls your team would have missed (average)*"
    },
    {
      number: "$10K+",
      title: "Additional Monthly Production",
      description: "From Breeh booked appointments (average)*"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Heading + stat pills */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">BY THE NUMBERS</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-xl">Booked Appointments</h2>
            </div>

            <div className="space-y-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 md:p-7 rounded-[22px] border border-border/70 bg-white shadow-sm hover:shadow-md transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="grid grid-cols-[auto,1fr] gap-6 items-center">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold tabular-nums text-primary leading-none tracking-tight">{stat.number}</div>
                    <div className="space-y-1.5">
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground tracking-tight leading-tight">{stat.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{stat.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <p className="text-xs md:text-sm text-muted-foreground italic">*Every practice is different so results may vary</p>
          </div>

          {/* Right: Testimonial card with related image */}
          <div className="animate-slide-in-right self-center lg:self-center ">
            <Card className="relative overflow-hidden rounded-[22px] shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8">
              {/* Top: content + image side by side */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr,260px] gap-6 items-center">
                <div>
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-4 tracking-tight">
                    Breeh helps our clients scale efficiently with <span className="text-primary">fewer staff</span>.
                  </h3>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    Its after-hours support improves patient experience and consistency—while cutting operational costs.
                  </p>
                </div>

                {/* Right image */}
                <div className="justify-self-end w-full md:w-[260px] rounded-2xl bg-secondary/40 border overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1688588162416-f7a7e726e0bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"
                    alt="Happy patient"
                    className="block w-full h-56 md:h-64 object-cover"
                  />
                </div>
              </div>

              {/* Bottom author bar */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr,180px] gap-4 items-center bg-secondary/30 border rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">AB</div>
                  <div>
                    <div className="font-bold text-base">Ashley Boaz</div>
                    <div className="text-sm text-muted-foreground">Mint Conceptions</div>
                  </div>
                </div>
                <div className="hidden md:block justify-self-end">
                  <div className="h-10 rounded-lg bg-background/70 border flex items-center justify-center text-muted-foreground px-4">View Story</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

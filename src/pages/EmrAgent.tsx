import { useState } from "react";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const EmrAgent = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookDemo={() => setIsBookDemoOpen(true)} />

      <main className="pb-16 pt-20">
        {/* Top section with breadcrumb + hero */}
        <section className="container mx-auto px-4 md:px-6 pt-10 md:pt-14 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="mb-4 text-xs md:text-sm text-muted-foreground flex flex-wrap gap-1">
            <span className="cursor-pointer hover:text-foreground">Home</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-foreground">Features</span>
            <span>/</span>
            <span className="text-foreground font-medium">EMR Agent</span>
          </nav>

          {/* Page hero copy */}
          <div className="space-y-4 mb-10 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Intelligent EMR integration: your AI monitoring partner
            </h1>
            <p className="max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed">
              Give your team a connected front desk and charting workflow. Breeh reads and writes to your practice
              systems through safe integrations, so every call and intake lands exactly where it should inside your
              EMR or PMS.
            </p>
            <Button
              size="lg"
              className="mt-1 rounded-full px-6 md:px-8 h-11 md:h-12 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => setIsBookDemoOpen(true)}
            >
              See how it works
            </Button>
          </div>
        </section>

        {/* Automated EMR management section */}
        <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-secondary/20 shadow-xl p-5 md:p-7">
              <div className="rounded-2xl bg-background shadow-md border p-4 md:p-5 space-y-4 text-xs md:text-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                      EMR TASK QUEUE
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-1">Today's updates</p>
                  </div>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    Synced
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-primary/5">
                    <span>New patient registrations</span>
                    <span className="text-[11px] font-medium text-primary">14 charts created</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-secondary/10">
                    <span>Appointment updates</span>
                    <span className="text-[11px] font-medium text-foreground/80">23 rescheduled</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-background">
                    <span>Call summaries</span>
                    <span className="text-[11px] font-medium text-foreground/80">31 notes filed</span>
                  </div>
                </div>
                <div className="mt-3 border-t pt-3 border-border/70 text-xs text-muted-foreground space-y-1.5">
                  <p className="flex items-center justify-between">
                    <span>Sync errors</span>
                    <span className="font-medium text-foreground">0</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Manual review needed</span>
                    <span className="font-medium text-foreground">2 items</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Automated EMR work, with human control where it matters
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Breeh keeps your data flowing cleanly between calls and charts. The AI handles routine updates while your
                team stays in charge of the clinical decisions.
              </p>
              <div className="grid gap-4 text-sm md:text-base text-muted-foreground">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Cleaner data accuracy & safety</h3>
                  <p>
                    Standardized fields and guardrails reduce free-text chaos and ensure key information is captured the
                    same way every time.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Streamlined pre-visit workflows</h3>
                  <p>
                    Intakes, insurance checks, and appointment details arrive in the EMR before the patient is in the
                    chair, cutting down on rush at check-in.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Complete human oversight</h3>
                  <p>
                    Configure which actions breeh performs automatically and which require a quick human review, keeping
                    your clinicians fully in the loop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent EMR partnership section */}
        <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-16 md:mb-20">
          <div className="rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-secondary/20 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-3 text-sm md:text-base text-muted-foreground">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-2">
                Beyond basic integration: an EMR partnership
              </h2>
              <p>
                Breeh doesn't just push data into your system; it understands your templates, appointment types, and
                routing rules so information lands in the right place the first time.
              </p>
              <p>
                That means fewer charting gaps, smoother handoffs between front desk and clinical teams, and less time
                spent cleaning up after the fact.
              </p>
              <p>
                Whether you're using a leading dental PMS or a custom setup, our team works with you to design safe,
                auditable workflows that match your compliance requirements.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-background shadow-md border p-4 space-y-4 text-xs">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Example data flow
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-primary/5">
                    <span>Call summary</span>
                    <span className="text-[11px] font-medium text-primary">Note in chart</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-secondary/10">
                    <span>New patient intake</span>
                    <span className="text-[11px] font-medium text-foreground/80">New chart & contact</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-background">
                    <span>Schedule change</span>
                    <span className="text-[11px] font-medium text-foreground/80">Updated appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA band */}
        <section className="w-full bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/20 border-y">
          <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Ready to connect breeh to your EMR?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Learn how our team can integrate with your existing systems while keeping data secure, accurate, and easy
                for clinicians to use.
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-full px-6 md:px-8 h-11 md:h-12 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => setIsBookDemoOpen(true)}
            >
              Book a live demo
            </Button>
          </div>
        </section>
      </main>

      <Footer onBookDemo={() => setIsBookDemoOpen(true)} />

      <BookDemoModal open={isBookDemoOpen} onOpenChange={setIsBookDemoOpen} />
    </div>
  );
};

export default EmrAgent;

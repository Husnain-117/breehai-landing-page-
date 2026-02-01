import { useState } from "react";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const InboundOutboundCalls = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookDemo={() => setIsBookDemoOpen(true)} />

      <main className="relative overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-x-0 top-0 h-[1000px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
          <div className="hero-ambient" style={{ opacity: 0.9 }} />
          <div className="hero-wave" />
          <div className="hero-wave-2" />
          <div className="hero-wave-red" style={{ opacity: 0.45 }} />
          <div className="hero-dots-red" />
        </div>

        <div className="relative z-10 pt-20 pb-16">

          {/* Top section with breadcrumb + hero */}
          <section className="container mx-auto px-4 md:px-6 pt-10 md:pt-14 max-w-5xl">
            {/* Breadcrumb */}
            <nav className="mb-4 text-xs md:text-sm text-muted-foreground flex flex-wrap gap-1">
              <span className="cursor-pointer hover:text-foreground">Home</span>
              <span>/</span>
              <span className="cursor-pointer hover:text-foreground">Features</span>
              <span>/</span>
              <span className="text-foreground font-medium">Inbound & Outbound Calls</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-20">
              {/* Page hero copy */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  24/7 Smart Call <br />
                  Management <br />
                  Your Patients <br />
                  Deserve
                </h1>
                <p className="max-w-md text-sm md:text-base text-muted-foreground leading-relaxed">
                  Turn every missed call into a new opportunity. <br />
                  Breeh handles inbound and outbound calls with a calm, <br />
                  dental-specific script, so patients always reach a helpful <br />
                  voice even after hours.
                </p>
                <Button
                  size="lg"
                  className="mt-1 rounded-full px-6 md:px-8 h-11 md:h-12 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                  onClick={() => setIsBookDemoOpen(true)}
                >
                  See how it works
                </Button>
              </div>

              {/* Live Calls Overview Dashboard */}
              <div className="md:pl-4">
                <div className="relative rounded-[40px] border shadow-2xl p-6 md:p-8 bg-white min-h-[420px] flex flex-col justify-center">
                  {/* Accent Glow */}
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#645CDB]/10 blur-3xl" aria-hidden="true" />
                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#645CDB]/5 blur-3xl" aria-hidden="true" />

                  <div className="space-y-8 relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#645CDB]">
                          LIVE CALLS OVERVIEW
                        </p>
                        <p className="text-lg font-bold text-foreground mt-1">Today's Performance</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-muted-foreground font-medium">Answered: <span className="text-[#645CDB] font-bold">98%</span></p>
                        <p className="text-muted-foreground font-medium">Missed: <span className="text-foreground/60 font-medium">2%</span></p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                      <div className="rounded-3xl bg-white border-2 border-[#645CDB]/10 p-5 shadow-sm hover:shadow-md transition-shadow group">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground mb-3 group-hover:text-[#645CDB] transition-colors">New patients</p>
                        <p className="text-4xl font-bold text-foreground">27</p>
                      </div>
                      <div className="rounded-3xl bg-[#645CDB] p-5 shadow-lg shadow-[#645CDB]/20 text-white">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 mb-3">Recalls</p>
                        <p className="text-4xl font-bold">42</p>
                      </div>
                      <div className="rounded-3xl bg-white border-2 border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground mb-3">Emergencies</p>
                        <p className="text-4xl font-bold text-foreground">6</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/50 grid grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Avg. response</p>
                        <p className="text-xl font-bold text-foreground">&lt; 2 sec</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Coverage</p>
                        <p className="text-xl font-bold text-foreground">100%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Effortless patient engagement section */}
          <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-16 md:mb-20">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Effortless patient engagement, around the clock
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Breeh's AI receptionist becomes the first line for every call from new patient inquiries to post-op
                questions. Calls are answered consistently, details are captured accurately, and every interaction feels
                like your best front desk team member on their best day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 text-sm md:text-base text-muted-foreground">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">24/7 uninterrupted service</h3>
                  <p>
                    Make sure no call is lost to voicemail. Breeh answers after hours, during lunch, and when your team is
                    already helping patients in person.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Optimized practice efficiency</h3>
                  <p>
                    Capture the reason for every call, route it to the right workflow, and cut back on back-and-forth phone
                    tag.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Better patient experience</h3>
                  <p>
                    Patients speak to a friendly, clear voice that understands dental terms and can explain next steps in
                    simple language.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Clinically intelligent communication section */}
          <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-16 md:mb-20">
            <div className="mb-8 md:mb-10 text-center md:text-left max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                Beyond basic automation: clinically intelligent communication
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Breeh does more than answer phones. It understands dental workflows, captures structured information, and
                connects cleanly with your existing systems so every call turns into accurate notes and next steps.
              </p>
            </div>

            <div className="rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-secondary/20 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-3 text-sm md:text-base text-muted-foreground">
                <p>
                  Calls are categorized by intent new patient, recall, billing, clinical question so your team sees exactly
                  what needs attention at a glance.
                </p>
                <p>
                  For urgent symptoms, breeh can flag the call for same-day review, attach a structured summary, and help
                  route the patient to the safest option.
                </p>
                <p>
                  Every interaction is logged, making it easy to audit call volume, conversion, and trends in patient demand
                  over time.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-sm rounded-2xl bg-background shadow-md border p-4 space-y-3 text-xs">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Example call routing
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-primary/5">
                      <span>"I have a broken filling"</span>
                      <span className="text-[11px] font-medium text-primary">Emergency slot</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-secondary/10">
                      <span>"I want to book a cleaning"</span>
                      <span className="text-[11px] font-medium text-foreground/80">Hygiene recall</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-background">
                      <span>"Question about my bill"</span>
                      <span className="text-[11px] font-medium text-foreground/80">Billing queue</span>
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
                  Ready to ensure every call is answered?
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  See how breeh can eliminate voicemail, reduce missed opportunities, and give your team back time for
                  in-person care.
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
        </div>
      </main>


      <Footer onBookDemo={() => setIsBookDemoOpen(true)} />

      <BookDemoModal open={isBookDemoOpen} onOpenChange={setIsBookDemoOpen} />
    </div>
  );
};

export default InboundOutboundCalls;

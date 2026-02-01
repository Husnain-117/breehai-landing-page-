import { useState } from "react";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const ChartDocumentation = () => {
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
            <span className="text-foreground font-medium">Chart Documentation</span>
          </nav>

          {/* Page hero copy */}
          <div className="space-y-4 mb-10 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Automated charting: breeh's documentation agent
            </h1>
            <p className="max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed">
              Turn every call and visit into clean, structured chart notes without adding extra typing. Breeh listens,
              summarizes, and organizes the details your clinicians care about, directly into your system.
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

        {/* Effortless documentation section */}
        <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Effortless documentation, enhanced accuracy
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Manual charting slows down every provider. Breeh captures key symptoms, decisions, and next steps from
                patient interactions and assembles them into clear, consistent notes.
              </p>
              <div className="grid gap-4 text-sm md:text-base text-muted-foreground">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Unmatched data accuracy</h3>
                  <p>
                    Reduce transcription errors and missing information with AI that follows a structured template every
                    time.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Significant time savings</h3>
                  <p>
                    Free up clinicians from repetitive typing so they can focus on patients, not paperwork.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Smarter workflow streamlining</h3>
                  <p>
                    From intake calls to follow-up summaries, breeh ties together documentation across the full visit
                    journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:pl-4">
              <div className="relative rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-secondary/20 shadow-xl p-5 md:p-7">
                <div className="rounded-2xl bg-background shadow-md border p-4 md:p-5 space-y-3 text-xs md:text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                        DRAFT CHART NOTE
                      </p>
                      <p className="text-sm font-semibold text-foreground mt-1">New patient consult</p>
                    </div>
                    <span className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Ready to review
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-medium text-foreground">Subjective</p>
                    <p className="text-muted-foreground">
                      Patient reports intermittent sensitivity on upper right molar when chewing and with cold drinks.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-medium text-foreground">Objective</p>
                    <p className="text-muted-foreground">
                      Visible fracture line on #3; percussion mildly tender, no swelling or sinus tract observed.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-medium text-foreground">Plan</p>
                    <p className="text-muted-foreground">
                      Recommend crown with possible endodontic evaluation if symptoms progress; reviewed risks and
                      benefits with patient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinically intelligent charting section */}
        <section className="container mx-auto px-4 md:px-6 max-w-5xl mb-16 md:mb-20">
          <div className="rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-secondary/20 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-3 text-sm md:text-base text-muted-foreground">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-2">
                Beyond transcription: clinically intelligent charting
              </h2>
              <p>
                Breeh doesn't just record what was said; it understands the structure of a dental visit, so notes follow
                your preferred format and support accurate coding.
              </p>
              <p>
                Key phrases like symptoms, findings, and treatment plans are slotted into the right sections, reducing the
                need for edits.
              </p>
              <p>
                Providers stay in full control: they review, edit, and sign off, while breeh handles the heavy lifting in
                the background.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-background shadow-md border p-4 space-y-3 text-xs">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Example workflow
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-primary/5">
                    <span>Call / visit audio</span>
                    <span className="text-[11px] font-medium text-primary">Captured</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-secondary/10">
                    <span>AI draft note</span>
                    <span className="text-[11px] font-medium text-foreground/80">Generated</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-background">
                    <span>Clinician review</span>
                    <span className="text-[11px] font-medium text-foreground/80">Approved & signed</span>
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
                Ready to reclaim time from charting?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                See how breeh can automate documentation while keeping your dentists and hygienists firmly in control of
                the record.
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

export default ChartDocumentation;

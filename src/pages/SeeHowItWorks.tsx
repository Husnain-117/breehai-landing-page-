import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const SeeHowItWorks = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onBookDemo={() => setIsBookDemoOpen(true)} />

      <main className="pb-16 pt-20">
        {/* Hero + form */}
        <section className="container mx-auto px-4 md:px-6 pt-10 md:pt-14 max-w-6xl mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] gap-10 md:gap-14 items-start">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  See breeh in action
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                  Share a few details about your practice and well build a live walkthrough that mirrors your real
                  front-desk workflows from missed calls to chart-ready notes.
                </p>
              </div>

              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>See how breeh greets patients, books visits, and captures intake details.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Watch call summaries and documentation flow into your existing systems.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Ask anything about scripting, guardrails, or rolloutwell walk through it together.</span>
                </li>
              </ul>

              <div className="rounded-2xl border bg-card shadow-sm p-4 md:p-5 text-sm max-w-xl">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
                  What other practices say
                </p>
                <p className="text-sm text-foreground mb-3">
                  Our phones finally feel under control. Breeh catches calls we used to miss and my team spends more
                  time with patients in the office instead of juggling lines.
                </p>
                <p className="text-xs text-muted-foreground">Practice owner, multi-location dental group</p>
              </div>
            </div>

            {/* Right form */}
            <div className="rounded-3xl border bg-card shadow-sm p-5 md:p-7">
              <h2 className="text-base md:text-lg font-semibold mb-4">Tell us about your practice</h2>
              <form className="space-y-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" placeholder="Dr. Jane Doe" className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" placeholder="you@practice.com" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="practice">Practice name</Label>
                    <Input id="practice" placeholder="Smile Dental Group" className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="role">Your role</Label>
                    <Input id="role" placeholder="Owner, Office manager, Clinical lead" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="providers">Number of providers</Label>
                    <Input id="providers" placeholder="e.g. 3" className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="admin">Number of admin staff</Label>
                    <Input id="admin" placeholder="e.g. 4" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="locations">Number of locations</Label>
                    <Input id="locations" placeholder="1" className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="specialty">Practice specialty</Label>
                    <Input id="specialty" placeholder="General, pediatric, ortho, multi-specialty" className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="pms">Current PMS / EMR</Label>
                    <Input id="pms" placeholder="Dentrix, Eaglesoft, Open Dental, etc." className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone-system">Phone system</Label>
                    <Input id="phone-system" placeholder="RingCentral, Weave, on-prem PBX, etc." className="h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="call-volume">Approx. inbound calls per day</Label>
                    <Input id="call-volume" placeholder="e.g. 80" className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="staff-on-phones">Staff dedicated to phones</Label>
                    <Input id="staff-on-phones" placeholder="e.g. 2" className="h-10" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="priorities">What are the top priorities youre looking to solve?</Label>
                  <Textarea
                    id="priorities"
                    placeholder="Examples: missed calls, long hold times, after-hours coverage, intake time, charting, etc."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="timeline">Ideal start timeline</Label>
                    <Input id="timeline" placeholder="ASAP, next 3 months, exploring options" className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-time">Best time & method to reach you</Label>
                    <Input id="contact-time" placeholder="Morning/afternoon, email or phone" className="h-10" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="hear">How did you hear about breeh?</Label>
                  <Input id="hear" placeholder="Referral, conference, search, social, etc." className="h-10" />
                </div>

                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  By submitting this form you agree that we may contact you about breeh's products and services. We
                  respect your inbox and will never sell your data.
                </p>

                <div className="pt-2">
                  <Button
                    type="button"
                    className="w-full h-10 text-sm font-semibold"
                    onClick={() => setIsBookDemoOpen(true)}
                  >
                    Submit & schedule a walkthrough
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Bottom CTA band */}
        <section className="w-full bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/20 border-y">
          <div className="container mx-auto px-4 md:px-6 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Want to explore with your full team?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Invite partners, associates, and office managers to join the walkthrough so everyone can see how breeh
                fits into your day-to-day.
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-full px-6 md:px-8 h-11 md:h-12 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => setIsBookDemoOpen(true)}
            >
              Share booking link
            </Button>
          </div>
        </section>
      </main>

      <Footer onBookDemo={() => setIsBookDemoOpen(true)} />

      <BookDemoModal open={isBookDemoOpen} onOpenChange={setIsBookDemoOpen} />
    </div>
  );
};

export default SeeHowItWorks;

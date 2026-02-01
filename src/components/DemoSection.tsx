import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Copy, Play, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [callerNumber, setCallerNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const phoneNumber = "+1 239 422 8747";

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Phone number copied!");
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toast.info("Audio demo would play here");
    }
  };

  const initiateCall = async () => {
    if (!callerNumber.trim()) {
      toast.error("Please enter your phone number first.");
      return;
    }

    try {
      setIsCalling(true);
      const response = await fetch("/api/make-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: callerNumber.trim() }),
      });

      if (!response.ok) {
        throw new Error("Call request failed");
      }

      const data = await response.json().catch(() => ({}));
      toast.success("Your demo call is on its way.");
      if (data.callSid) {
        console.log("Twilio call SID", data.callSid);
      }
    } catch (error) {
      console.error(error);
      toast.error("We couldn't start the call. Please try again in a moment.");
    } finally {
      setIsCalling(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 md:px-6">
        {/* Frosted glass container */}
        <div className="rounded-3xl border border-border/70 bg-white/60 dark:bg-background/60 backdrop-blur-xl shadow-xl p-6 md:p-10">
          {/* Top row: copy on left, video on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left copy */}
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-sm font-semibold text-foreground/60 tracking-wider uppercase">SEE THE MAGIC OF breeh FOR YOURSELF</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Call our demo line or watch a video of breeh in action</h2>
              <p className="text-lg text-muted-foreground max-w-xl">Keep in mind that this is only a demo office and breeh is highly customizable to your office's needs. Our demo is connected to a real Open Dental database.</p>
            </div>

            {/* Right video player card */}
            <div className="animate-slide-in-right">
              <div className="rounded-2xl bg-card border shadow-xl overflow-hidden">
                {/* Placeholder video frame */}
                <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-secondary/40 to-background">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center shadow-md">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="translate-x-[1px]">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>Demo video placeholder</span>
                      {/* <span>•</span> */}
                      {/* <span>Upload your video to /public and replace later</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: stacked interaction cards for audio, number, and live call */}
          <div className="mt-10 space-y-4">
            {/* Play demo audio */}
            <button
              onClick={toggleAudio}
              className="w-full flex items-center justify-between rounded-2xl border bg-white/70 dark:bg-background/70 backdrop-blur px-5 py-4 shadow-md hover:shadow-lg transition-all text-left"
            >
              <span className="flex items-center gap-2 text-primary font-semibold">
                <Play className="w-5 h-5" />
                Play Demo Audio
              </span>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-sm">~2 min</span>
                <span className="inline-flex items-center justify-center rounded-xl bg-primary/15 text-primary w-9 h-9">
                  <Play className="w-4 h-4" />
                </span>
              </div>
            </button>

            {/* Demo phone number chip */}
            <button
              onClick={copyPhone}
              className="w-full group flex items-center gap-3 rounded-2xl border bg-white/70 dark:bg-background/70 backdrop-blur px-4 py-3 shadow-md hover:shadow-lg transition-all"
            >
              <span className="inline-flex items-center justify-center rounded-xl bg-primary text-white w-10 h-10 shadow-md">
                <Phone className="w-5 h-5" />
              </span>
              <span className="text-2xl font-semibold tracking-tight">{phoneNumber}</span>
              <span className="ml-auto inline-flex items-center justify-center rounded-xl bg-foreground/5 w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors">
                <Copy className="w-4 h-4" />
              </span>
            </button>

            {/* Live demo call card */}
            <div className="rounded-2xl border bg-white/80 dark:bg-background/80 backdrop-blur px-4 py-4 shadow-md flex flex-col gap-3">
              <div className="space-y-0.5">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">Live demo call</p>
                <p className="text-sm font-medium text-foreground">Get a call from our AI receptionist</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                <Input
                  type="tel"
                  value={callerNumber}
                  onChange={(e) => setCallerNumber(e.target.value)}
                  placeholder="Enter your number e.g. +1 555 123 4567"
                  className="h-10 text-sm flex-1"
                />
                <Button
                  type="button"
                  onClick={initiateCall}
                  disabled={isCalling}
                  className="h-10 px-4 text-sm font-semibold flex items-center gap-2 whitespace-nowrap"
                >
                  {isCalling ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Phone className="h-4 w-4" />
                  )}
                  <span>{isCalling ? "Calling..." : "Call me"}</span>
                </Button>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Well use this number one time to start a demo call from our AI receptionist. Standard carrier
                rates may apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

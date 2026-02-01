import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookDemo from "./pages/BookDemo";
import SeeHowItWorks from "./pages/SeeHowItWorks";
import { Phone } from "lucide-react";
import VoiceAssistant, { VoiceAssistantHandle } from "./components/VoiceAssistant";

const queryClient = new QueryClient();

const App = () => {
  const assistantRef = useRef<VoiceAssistantHandle>(null);

  const handleStartVoice = () => {
    assistantRef.current?.startCall();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Invisible voice assistant controller */}
        <VoiceAssistant ref={assistantRef} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/see-how-it-works" element={<SeeHowItWorks />} />
            <Route path="/book-demo" element={<BookDemo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <button
            type="button"
            onClick={handleStartVoice}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-[20px] md:rounded-[22px] px-4 py-2 md:px-5 md:py-3 bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-primary-foreground text-primary flex items-center justify-center shadow">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
            </span>
            <span className="text-sm md:text-base font-medium">Try breeh</span>
          </button>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

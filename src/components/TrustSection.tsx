import { Button } from "@/components/ui/button";

const TrustSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground">
              The #1 AI Dental Receptionist
            </h2>
            <div className="space-y-4">
              <p className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-primary">Thousands</span> of dentists trust breeh to handle{" "}
                <span className="text-primary">tens of thousands</span> of calls seamlessly, every single day across the{" "}
                <span className="inline-flex items-center gap-2">
                  <span className="text-2xl">🇺🇸</span> United States
                </span>{" "}
                and{" "}
                <span className="inline-flex items-center gap-2">
                  <span className="text-2xl">🇨🇦</span> Canada
                </span>
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Demo
            </Button>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-green-500 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Patient Recall</h4>
                    <p className="text-sm text-muted-foreground">Appointment Scheduled</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-blue-500 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Confirmation Call</h4>
                    <p className="text-sm text-muted-foreground">Successful</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-purple-500 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Incoming Call</h4>
                    <p className="text-sm text-muted-foreground">Appointment Scheduled</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-purple-500" />
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-red-500 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-red-500/10 p-3 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Unscheduled Treatments</h4>
                    <p className="text-sm text-muted-foreground">No Answer</p>
                  </div>
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Phone, Calendar, CheckCircle, XCircle } from "lucide-react";

export default TrustSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from("demo_bookings")
        .insert([
          {
            email: formData.email,
            company_name: formData.companyName,
            phone: formData.phone,
            message: formData.message,
          },
        ]);

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke(
        "send-demo-confirmation",
        {
          body: {
            email: formData.email,
            companyName: formData.companyName,
          },
        }
      );

      if (emailError) {
        console.error("Email error:", emailError);
      }

      toast.success(
        "Demo booked successfully! Check your email for confirmation."
      );
      setFormData({ email: "", companyName: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error booking demo:", error);
      toast.error("Failed to book demo. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-sm text-foreground/70 hover:underline">
              ← Back to Home
            </Link>
          </div>

          <div className="rounded-3xl border bg-card shadow-sm p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center shadow">
                <Phone className="w-5 h-5" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Book a Demo</h1>
            </div>
            <p className="text-muted-foreground mb-8">
              breeh is the leading AI receptionist for dental practices, trusted by
              thousands of dentists across North America.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">
                  Dental Practice or Company Name*
                </Label>
                <Input
                  id="companyName"
                  required
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  placeholder="Your Practice Name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="(555) 123-4567"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your practice..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Submit Booking"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;

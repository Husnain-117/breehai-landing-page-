import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDemoModal = ({ open, onOpenChange }: BookDemoModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert into database
      const { error: dbError } = await supabase
        .from('demo_bookings')
        .insert([
          {
            email: formData.email,
            company_name: formData.companyName,
            phone: formData.phone,
            message: formData.message
          }
        ]);

      if (dbError) throw dbError;

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke('send-demo-confirmation', {
        body: {
          email: formData.email,
          companyName: formData.companyName
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw - booking was saved successfully
      }

      toast.success("Demo booked successfully! Check your email for confirmation.");
      setFormData({ email: "", companyName: "", phone: "", message: "" });
      onOpenChange(false);
    } catch (error) {
      console.error('Error booking demo:', error);
      toast.error("Failed to book demo. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-8 md:p-10">
        <DialogHeader>
          <div className="text-center space-y-2 mb-6 pt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Book a demo
            </h2>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">
                breeh.<span className="text-primary">Ai</span>
              </h3>
              <p className="text-base font-semibold text-muted-foreground">Intro & Demo</p>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                breeh is the leading AI receptionist for dental practices, trusted by thousands of dentists across North America.
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Dental Practice or Company Name*</Label>
            <Input
              id="companyName"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 123-4567"
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
            {isSubmitting ? "Booking..." : "Next →"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;

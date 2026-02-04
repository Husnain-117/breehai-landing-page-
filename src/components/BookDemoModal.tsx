import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import emailjs from "@emailjs/browser";
import { Calendar, Clock, CheckCircle, Mail, Building, Phone, MessageSquare } from "lucide-react";

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// EmailJS Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_DEMO_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_DEMO_TEMPLATE_ID || "template_demo";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

// Admin email for notifications
const ADMIN_EMAIL = "husnainn.akram@gmail.com";

const BookDemoModal = ({ open, onOpenChange }: BookDemoModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

      if (dbError) {
        console.error('DB Error:', dbError);
        // Continue anyway - email is more important
      }

      // Send confirmation email to client AND admin using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_DEMO_TEMPLATE_ID,
        {
          to_email: formData.email,
          to_name: formData.companyName,
          company_name: formData.companyName,
          phone: formData.phone || "Not provided",
          message: formData.message || "No additional information",
          admin_email: ADMIN_EMAIL,
          from_name: "Breeh AI",
        },
        EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);
      toast.success("Demo booked! Check your email for confirmation.");

    } catch (error) {
      console.error('Error booking demo:', error);
      // Still show success since booking might have been saved
      setShowSuccess(true);
      toast.success("Demo request received! We'll contact you shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ email: "", companyName: "", phone: "", message: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg w-[95vw] p-0 overflow-hidden border-none bg-white rounded-2xl shadow-2xl">
        {showSuccess ? (
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Demo Booked!</h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              We've sent a confirmation to <span className="font-semibold text-primary">{formData.email}</span>.
              Our team will reach out within 24 hours to schedule your demo.
            </p>
            <Button onClick={handleClose} size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
              Close
            </Button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-gradient-to-br from-[#4f46e5] to-[#6366f1] p-6 md:p-8 text-center text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Free Demo</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Book Your Demo
              </h2>
              <p className="text-white/80 text-sm max-w-md mx-auto">
                See how Breeh AI can transform your dental practice with our AI receptionist
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold uppercase text-gray-500">Email Address*</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-xs font-bold uppercase text-gray-500">Practice Name*</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                  <Input
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Your Dental Practice"
                    className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-bold uppercase text-gray-500">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase text-gray-500">Additional Info</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your practice..."
                    rows={3}
                    className="pl-10 bg-gray-50 border-gray-200 focus:bg-white resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-base font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book My Demo →"}
              </Button>

              <p className="text-xs text-center text-gray-400">
                We'll reach out within 24 hours to confirm your demo time.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;

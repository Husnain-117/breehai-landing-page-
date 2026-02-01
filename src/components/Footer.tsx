import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  UserPlus,
  CalendarClock,
  GraduationCap,
  ClipboardList,
  PhoneCall,
  PanelsTopLeft,
  FileText,
  Info,
  PlugZap,
  Newspaper
} from "lucide-react";

interface FooterProps {
  onBookDemo?: () => void;
}

const Footer = ({ onBookDemo }: FooterProps) => {
  return (
    <footer className="relative overflow-hidden bg-secondary/30 border-t">
      {/* Animated background layers - same as hero but with adjusted opacity */}
      <div className="hero-ambient" style={{ opacity: 0.4 }} />
      <div className="hero-wave" style={{ opacity: 0.2 }} />
      <div className="hero-wave-2" style={{ opacity: 0.15 }} />
      <div className="hero-wave-red" style={{ opacity: 0.2 }} />
      <div className="hero-dots-red" style={{ opacity: 0.15 }} />

      <div className="container px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Breeh <span className="text-primary">AI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The #1 AI Dental Receptionist trusted by thousands of dentists across North America to handle calls 24/7 and book appointments seamlessly.
            </p>
            <Button onClick={onBookDemo} className="mt-4">
              Book a Demo
            </Button>
          </div>




          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 239 422 8747</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>support@breeh</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>United States & Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Breeh AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

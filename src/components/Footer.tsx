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
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#4f46e5] to-[#6366f1] border-t border-white/10">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div className="container px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <img src="/breeh-logo.jpg" alt="Breeh AI" className="h-12 w-auto rounded-lg" />
            </div>
            <p className="text-sm text-indigo-100 leading-relaxed">
              The #1 AI Dental Receptionist trusted by thousands of dentists across North America to handle calls 24/7 and book appointments seamlessly.
            </p>
            <Button onClick={onBookDemo} className="mt-4 bg-white text-primary hover:bg-white/90 font-bold shadow-lg">
              Book a Demo
            </Button>
          </div>

          {/* Contact Column */}
          <div className="lg:col-start-4 lg:col-span-2">
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-indigo-100">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-200" />
                <span>+1 239 422 8747</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-indigo-100">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-200" />
                <span>support@breeh.ai</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-indigo-100">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-200" />
                <span>United States & Canada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-indigo-200">
              © 2024 Breeh AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-sm text-indigo-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-indigo-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#security" className="text-sm text-indigo-200 hover:text-white transition-colors">
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

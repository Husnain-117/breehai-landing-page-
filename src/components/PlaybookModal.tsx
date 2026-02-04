import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FileText, CheckCircle, ChevronRight, User, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

interface PlaybookModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

// EmailJS Configuration - User needs to set these up at emailjs.com
// These are placeholders - the user will replace with real values
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

// Admin email to receive notifications
const ADMIN_EMAIL = "husnainakram336@gmail.com";

// Site URL - uses env var for production, falls back to current origin for dev
const SITE_URL = import.meta.env.VITE_SITE_URL || window.location.origin;

// Playbook URL (full URL for email) - URL encoded for proper link handling
const PLAYBOOK_PATH = "/Breeh%20AI%20Playbook%20(1).pdf";
const PLAYBOOK_URL = `${SITE_URL}${PLAYBOOK_PATH}`;


const PlaybookModal = ({ open, onOpenChange }: PlaybookModalProps) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        about: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email to user with playbook link
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    to_email: formData.email,
                    to_name: `${formData.firstName} ${formData.lastName}`,
                    from_name: "Breeh AI",
                    user_role: formData.about,
                    playbook_link: PLAYBOOK_URL,
                    admin_email: ADMIN_EMAIL,
                },
                EMAILJS_PUBLIC_KEY
            );

            // Success state
            setShowSuccess(true);
            toast.success("Playbook sent to your email!");

        } catch (error) {
            console.error("EmailJS Error:", error);
            // Still show success and open PDF locally as fallback
            setShowSuccess(true);
            toast.success("Access granted! Opening playbook...");
            window.open(PLAYBOOK_PATH, "_blank");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDownload = () => {
        window.open(PLAYBOOK_PATH, "_blank");
    };

    return (
        <Dialog open={open} onOpenChange={(val) => {
            onOpenChange(val);
            if (!val) {
                setTimeout(() => {
                    setShowSuccess(false);
                    setFormData({ firstName: "", lastName: "", email: "", about: "" });
                }, 300);
            }
        }}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden bg-[#4f46e5] border-none text-white flex flex-col md:flex-row h-[90vh] md:h-auto md:max-h-[85vh]">

                {/* Left Side - Value Proposition */}
                <div className="w-full md:w-5/12 bg-gradient-to-br from-[#3730a3] via-[#4f46e5] to-[#6366f1] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />

                    <div className="relative z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                            <CheckCircle className="w-4 h-4 text-yellow-400" />
                            <span className="text-xs font-bold text-yellow-400 tracking-wider uppercase">Exclusive Resource</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black leading-tight text-white">
                            GET THE PLAYBOOK <span className="text-primary">$1M/YR</span> DENTAL PRACTICES USE TO FILL THEIR CHAIRS
                        </h2>

                        <p className="text-indigo-200 leading-relaxed text-sm md:text-base">
                            The Dental Profit Playbook reveals 9 simple strategies elite practices use to get more patients, increase profit, and make their patients raving fans — no ad spend needed.
                        </p>

                        <div className="space-y-3 pt-4 border-t border-white/10">
                            <h4 className="font-bold text-white text-sm uppercase tracking-widest">What's Inside:</h4>
                            <ul className="space-y-3">
                                {[
                                    "How To Get More Patients without relying on paid ads",
                                    "Strategies to increase Lifetime Value per patient",
                                    "Plug-and-play retention systems to keep patients longer"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-7/12 bg-white text-gray-900 p-6 md:p-12 overflow-y-auto">
                    {showSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Check Your Inbox!</h3>
                            <p className="text-gray-500 max-w-sm">
                                The playbook has been sent to <span className="font-semibold text-primary">{formData.email}</span>.
                                Check your inbox (and spam folder just in case).
                            </p>
                            <Button onClick={handleDownload} size="lg" className="h-14 px-8 text-lg gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30">
                                <FileText className="w-5 h-5" />
                                Download Now
                            </Button>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col justify-center max-w-md mx-auto">
                            <div className="mb-8 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-900">Enter Your Info Below To Access</h3>
                                <p className="text-gray-500 text-sm mt-1">We'll send the playbook directly to your email.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-xs font-bold uppercase text-gray-500">First Name*</Label>
                                        <Input
                                            id="firstName"
                                            required
                                            className="bg-gray-50 border-gray-200 focus:bg-white transition-colors h-11"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-xs font-bold uppercase text-gray-500">Last Name*</Label>
                                        <Input
                                            id="lastName"
                                            required
                                            className="bg-gray-50 border-gray-200 focus:bg-white transition-colors h-11"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs font-bold uppercase text-gray-500">Email Address*</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors h-11"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="about" className="text-xs font-bold uppercase text-gray-500">Tell us about yourself*</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                                        <Input
                                            id="about"
                                            required
                                            placeholder="e.g. Dentist, Office Manager, DSO Exec"
                                            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors h-11"
                                            value={formData.about}
                                            onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 text-base font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/20 mt-4 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    {isSubmitting ? "Sending..." : "Access The Playbook"}
                                    {!isSubmitting && <ChevronRight className="w-5 h-5 ml-2" />}
                                </Button>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Your information is secure. We hate spam too.
                                </p>
                            </form>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PlaybookModal;

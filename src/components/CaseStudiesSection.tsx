import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const CaseStudiesSection: FC = () => {
    return (
        <div className="container mx-auto px-4 mb-20 md:mb-32">
            <div className="bg-[#645CDB] rounded-[32px] md:rounded-[48px] py-10 md:py-14 lg:py-16 px-8 md:p-12 flex flex-col items-center justify-center overflow-hidden relative min-h-[250px]">
                {/* Visual Flair (Subtle circles/waves) */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

                {/* Labels */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 w-full text-center">
                    <span className="text-white font-extrabold tracking-widest uppercase text-lg md:text-xl lg:text-2xl opacity-100 drop-shadow-md">Read Case Studies</span>
                </div>

                {/* Logo Ticker */}
                <div className="max-w-[80%] mx-auto z-10 pt-12 pb-8 overflow-hidden relative group">
                    {/* Gradient Masks for smooth side space */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#645CDB] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#645CDB] to-transparent z-20 pointer-events-none" />

                    <div className="flex animate-scroll w-max group-hover:[animation-play-state:paused]">
                        {[
                            "/crossroads-dental-logo.png",
                            "/fuller-smiles-logo.png",
                            "/impressions-dentistry-logo.png",
                            "/tmanagement-logo.png",
                            "/zendentistry-logo.png",
                            "/crossroads-dental-logo.png",
                            "/fuller-smiles-logo.png",
                            "/impressions-dentistry-logo.png",
                            "/tmanagement-logo.png",
                            "/zendentistry-logo.png"
                        ].map((logo, idx) => (
                            <div key={idx} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Client Logo"
                                    className="h-24 md:h-32 w-auto object-contain brightness-0 invert"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* The Problems We Solve Section */}
            <div className="container mx-auto px-4 lg:pl-24 mt-20 md:mt-28 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                    {/* Left Side: Content */}
                    <div className="flex flex-col items-start text-left animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f3f2ff] text-[#4A3E9F] text-xs font-medium mb-5 shadow-sm border border-[#645CDB]/20">
                            <span className="flex items-center justify-center w-4 h-4 bg-[#D1FAE5] rounded-sm mr-1">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </span>
                            <span className="font-semibold tracking-wide">AI The Problems We Solve</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#00170F] leading-[1.1] mb-5">
                            Real Practices,<br />Real Growth
                        </h2>

                        <p className="text-[#374151] text-sm md:text-base max-w-lg mb-7 opacity-90 leading-relaxed">
                            See how Facial & Oral Surgery Associates captured $81,000 in 30 days.
                        </p>

                        <Button
                            size="lg"
                            className="bg-[#C4C1F4] hover:bg-[#B4B1E4] text-[#1E1B4B] font-bold rounded-xl px-7 h-11 text-sm shadow-sm transition-all duration-300"
                        >
                            Read Full Case Study
                        </Button>
                    </div>

                    {/* Right Side: Stats */}
                    <div className="flex flex-col space-y-6 animate-fade-in delay-200">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-start border-t border-black/10 pt-6 first:border-0 first:pt-0">
                            <span className="text-[32px] md:text-[42px] font-bold text-[#00170F] leading-none">5-7 hours</span>
                            <p className="text-[#374151] text-xs md:text-sm font-medium opacity-80 mt-2">
                                hours weekly time savings for staff
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-start border-t border-black/10 pt-6">
                            <span className="text-[32px] md:text-[42px] font-bold text-[#00170F] leading-none">41 new patients</span>
                            <p className="text-[#374151] text-xs md:text-sm font-medium opacity-80 mt-2">
                                captured in 30 days
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-start border-t border-black/10 pt-6">
                            <span className="text-[32px] md:text-[42px] font-bold text-[#00170F] leading-none">81k dollars</span>
                            <p className="text-[#374151] text-xs md:text-sm font-medium opacity-80 mt-2">
                                captured in 30 days
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Get Started Section */}
            <div className="container mx-auto px-4 mt-32 md:mt-40 mb-20 relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-[56px] font-bold text-[#00170F] mb-6 tracking-tight">
                        It's Easy to Get Started with Breeh
                    </h2>
                    <p className="text-sm md:text-base text-[#374151] opacity-70">
                        Get started in as little as five days
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Step 1 */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group min-h-[280px]">
                        <div className="flex justify-between items-start w-full mb-4">
                            <span className="text-[56px] font-bold text-[#00170F]/10 leading-none">01</span>
                            <ChevronRight className="w-5 h-5 text-[#00170F]/20 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold text-[#00170F] mb-4">Integrate with PMS</h3>
                            <p className="text-sm text-[#374151] opacity-70 leading-relaxed max-w-[200px]">
                                click integration to your practice management software
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group min-h-[280px]">
                        <div className="flex justify-between items-start w-full mb-4">
                            <span className="text-[56px] font-bold text-[#00170F]/10 leading-none">02</span>
                            <ChevronRight className="w-5 h-5 text-[#00170F]/20 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold text-[#00170F] mb-4">Configure breeh</h3>
                            <p className="text-sm text-[#374151] opacity-70 leading-relaxed max-w-[200px]">
                                Our onboarding specialist will set up breeh with your office information and preferences.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group min-h-[280px]">
                        <div className="flex justify-between items-start w-full mb-4">
                            <span className="text-[56px] font-bold text-[#00170F]/10 leading-none">03</span>
                            <ChevronRight className="w-5 h-5 text-[#00170F]/20 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold text-[#00170F] mb-4">Forward & Go Live</h3>
                            <p className="text-sm text-[#374151] opacity-70 leading-relaxed max-w-[200px]">
                                Forward calls from any phone system to your breeh number.
                            </p>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-[#5C51CC] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 min-h-[280px]">
                        <div className="w-full text-center">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase block mb-6">GET STARTED</span>
                            <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                                Turn missed calls<br />into<br />new patients
                            </h3>
                            <p className="text-sm text-white/80 mb-8">
                                See how it works to get started.
                            </p>
                        </div>
                        <Button
                            className="bg-white hover:bg-white/90 text-[#5C51CC] font-bold h-11 rounded-xl shadow-md transition-all px-8"
                        >
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container mx-auto px-4 mt-32 md:mt-48 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#00170F] mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm md:text-base text-[#374151] opacity-70">
                            Get answers to common questions about Breeh AI
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-2">
                        {[
                            {
                                question: "What Practice Management Systems does Breeh integrate with?",
                                answer: "Currently, Breeh integrates with Dentrix, Dentrix Enterprise, Eaglesoft, Opendental, PracticeWorks, OrthoTrac, Dolphin, Dentrix Ascend, eClinicalWorks, Athena, Curve, Cloud9, and DentiCon. No affiliation or endorsement implied."
                            },
                            {
                                question: "What telephone providers does Breeh integrate with?",
                                answer: "Breeh works with all major telephone providers and systems. We can integrate seamlessly regardless of your current phone setup."
                            },
                            {
                                question: "How can Breeh help my practice?",
                                answer: "Breeh helps you never miss a patient call, books appointments 24/7, handles overflow calls, and provides after-hours support - all while reducing operational costs."
                            },
                            {
                                question: "Can I have Breeh answer all of my calls?",
                                answer: "Yes, Breeh can be configured to answer all incoming calls, or only specific types of calls based on your preferences."
                            },
                            {
                                question: "Can Breeh transfer calls to my staff?",
                                answer: "Absolutely. Breeh can intelligently route and transfer calls to your staff based on customizable rules and conditions."
                            },
                            {
                                question: "How does Breeh's onboarding process work?",
                                answer: "Our onboarding specialist will work with you to configure Breeh according to your practice's needs, typically taking as little as 20 minutes to get started."
                            },
                            {
                                question: "What security measures are in place?",
                                answer: "Breeh is fully HIPAA-compliant with enterprise-grade security measures to protect patient information and practice data."
                            },
                            {
                                question: "Is Breeh available 24/7?",
                                answer: "Yes, Breeh provides 24/7 call handling and patient support, ensuring you never miss an opportunity to book an appointment."
                            },
                            {
                                question: "How does Breeh work?",
                                answer: "Breeh uses advanced AI technology to understand patient needs, access your practice management system, and handle calls naturally and professionally."
                            },
                            {
                                question: "How important is a prompt response to patient calls?",
                                answer: "Extremely important. Studies show that responding to patient inquiries quickly significantly increases appointment booking rates."
                            },
                            {
                                question: "How many calls can Breeh answer simultaneously?",
                                answer: "Breeh can handle unlimited simultaneous calls, ensuring no patient ever gets a busy signal."
                            },
                            {
                                question: "Can Breeh speak more than one language?",
                                answer: "Yes, depending on your plan, Breeh can communicate in up to 8 different languages."
                            },
                            {
                                question: "Will Breeh work with my current phone number?",
                                answer: "Yes, Breeh works with your existing phone numbers through simple call forwarding."
                            },
                            {
                                question: "How is Breeh different from a virtual receptionist or call center?",
                                answer: "Unlike traditional services, Breeh is available 24/7, handles unlimited calls simultaneously, integrates directly with your PMS, and costs significantly less."
                            },
                            {
                                question: "How is Breeh different from a human staff member?",
                                answer: "Breeh never takes breaks, doesn't need training on new systems, works 24/7, and can handle multiple calls at once - complementing your human staff perfectly."
                            }
                        ].map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`faq-${idx}`}
                                className="border-b border-[#00170F]/10 last:border-0"
                            >
                                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-[#00170F] hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#374151] opacity-70 leading-relaxed pb-6 text-sm md:text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="container mx-auto px-4 mt-32 md:mt-48 mb-20 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f3f2ff] text-[#645CDB] text-xs font-medium shadow-sm border border-[#645CDB]/30">
                        <span className="flex items-center justify-center w-4 h-4 bg-[#645CDB]/10 rounded-full mr-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#645CDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </span>
                        <span className="font-semibold tracking-wide uppercase">AI Get Started Today</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-[64px] text-[#00170F] max-w-4xl leading-[1.1]">
                        Ready to Capture Every<br />Patient Opportunity?
                    </h2>

                    <p className="text-base md:text-lg text-[#374151] opacity-70">
                        Join practices already growing with Breeh AI.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-[#645CDB] hover:bg-[#5C51CC] text-white font-bold rounded-xl px-10 h-14 text-base shadow-sm transition-all duration-300"
                        >
                            Schedule Your Demo
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/50 border-[#E5E7EB] hover:bg-white/80 text-[#00170F] font-bold rounded-xl px-10 h-14 text-base shadow-sm transition-all duration-300"
                        >
                            Start Free Trial
                        </Button>
                    </div>

                    <p className="text-xs md:text-sm text-[#374151] opacity-60">
                        No setup fees, cancel anytime.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesSection;

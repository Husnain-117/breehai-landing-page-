import { FC } from "react";

const MissionSection: FC = () => {
    return (
        <div className="relative py-8 md:py-12 overflow-hidden bg-transparent">
            {/* Background circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[200px] h-[200px] border border-black/20 rounded-full" />
                <div className="absolute w-[400px] h-[400px] border border-black/15 rounded-full" />
                <div className="absolute w-[600px] h-[600px] border border-black/10 rounded-full" />
                <div className="absolute w-[800px] h-[800px] border border-black/5 rounded-full" />
                <div className="absolute w-[1000px] h-[1000px] border border-black/[0.02] rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f3f2ff] text-[#4A3E9F] text-xs font-medium mb-8 shadow-sm border border-[#645CDB]/20">
                    <span className="flex items-center justify-center w-5 h-5 bg-[#645CDB]/10 rounded-sm mr-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#645CDB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <circle cx="12" cy="12" r="4" />
                            <path d="m16 16 3 3" />
                            <path d="m19 5-3 3" />
                            <path d="m5 19 3-3" />
                            <path d="m8 8-3-3" />
                        </svg>
                    </span>
                    <span className="font-semibold tracking-wide">AI Our Mission</span>
                </div>

                {/* Heading */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold max-w-[600px] mx-auto leading-[1.2] mb-6 tracking-tight">
                    <span className="text-black">30% of dental practice calls go unanswered, and{" "}</span>
                    <span className="bg-[#645CDB] text-white px-3 py-1 rounded-[4px] inline-block mt-2">
                        78% of patients book
                    </span>{" "}
                    <span className="bg-[#645CDB] text-white px-3 py-1 rounded-[4px] inline-block mt-2">
                        with the first practice that responds.
                    </span>
                </h2>

                {/* Paragraph */}
                <p className="text-[#374151] text-xs md:text-sm max-w-[650px] mx-auto leading-[1.6] opacity-90">
                    Our AI dental receptionist instantly responds to missed callers through text or voice with empathetic, human-like messages that feel genuine and book appointments 24/7. Unlike traditional virtual receptionists, our dental AI never sleeps. Always On. Always Caring.
                </p>
            </div>

            {/* Floating Persons - Bottom Left */}
            <div className="absolute left-[5%] md:left-[18%] bottom-[8%] md:bottom-[12%] w-16 h-16 md:w-24 md:h-24 z-20 animate-float pointer-events-none">
                <div className="relative w-full h-full p-1.5 md:p-2.5 border border-gray-100 rounded-full bg-white shadow-xl">
                    <img
                        src="/receptionist_purple_1.png"
                        alt="Dental Specialist"
                        className="w-full h-full rounded-full object-cover"
                    />
                    {/* Inner circle effect */}
                    <div className="absolute inset-0 border border-gray-100/50 rounded-full -m-4 md:-m-8 pointer-events-none" />
                </div>
            </div>

            {/* Floating Persons - Top Right */}
            <div className="absolute right-[5%] md:right-[20%] top-[6%] md:top-[8%] w-16 h-16 md:w-24 md:h-24 z-20 animate-float pointer-events-none [animation-delay:1.5s]">
                <div className="relative w-full h-full p-1.5 md:p-2.5 border border-gray-100 rounded-full bg-white shadow-xl">
                    <img
                        src="/receptionist_purple_2.png"
                        alt="Dental Care Team"
                        className="w-full h-full rounded-full object-cover"
                    />
                    {/* Inner circle effect */}
                    <div className="absolute inset-0 border border-gray-100/50 rounded-full -m-4 md:-m-8 pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

export default MissionSection;

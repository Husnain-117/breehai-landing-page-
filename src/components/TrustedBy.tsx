import { FC } from "react";

const TrustedBy: FC = () => {
    return (
        <div className="w-full pt-16 md:pt-24 animate-fade-in delay-100">
            <h2 className="text-[28px] md:text-[32px] leading-[1.2] text-center text-[#00170F] mb-12 font-normal font-serif">
                You are in great company with modern dental groups and DSOs
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24 w-full grayscale-0 opacity-100 px-4">
                <img
                    src="/crossroads-dental-logo.png"
                    alt="Crossroads Dental"
                    className="h-14 md:h-24 w-auto object-contain transition-transform hover:scale-105 duration-300 mix-blend-multiply"
                />
                <img
                    src="/tmanagement-logo.png"
                    alt="TManagement"
                    className="h-14 md:h-24 w-auto object-contain transition-transform hover:scale-105 duration-300 mix-blend-multiply"
                />
                <img
                    src="/impressions-dentistry-logo.png"
                    alt="Impressions Dentistry"
                    className="h-12 md:h-20 w-auto object-contain transition-transform hover:scale-105 duration-300 mix-blend-multiply"
                />
                <img
                    src="/fuller-smiles-logo.png"
                    alt="Fuller Smiles"
                    className="h-14 md:h-24 w-auto object-contain transition-transform hover:scale-105 duration-300 mix-blend-multiply"
                />
                <img
                    src="/zendentistry-logo.png"
                    alt="ZenDentistry"
                    className="h-10 md:h-16 w-auto object-contain transition-transform hover:scale-105 duration-300 mix-blend-multiply"
                />
            </div>
        </div>
    );
};

export default TrustedBy;

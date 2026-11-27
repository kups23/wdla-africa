import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partnerLogosRow1 = [
  { src: "/images/01.png", alt: "tvdigital" },
  { src: "/images/02.png", alt: "changes" },
  { src: "/images/03.png", alt: "FINANCE" },
  { src: "/images/04.png", alt: "compact" },
  { src: "/images/05.png", alt: "Makton" },
];

const partnerLogosRow2 = [
  { src: "/images/06.png", alt: "Oklae" },
  { src: "/images/07.png", alt: "Geotel" },
  { src: "/images/08.png", alt: "Majaeo" },
  { src: "/images/09.png", alt: "JACKOE" },
  { src: "/images/10.png", alt: "Versa" },
];

export default function PartnershipSection() {
  return (
    <section id="partnerships" className="bg-white py-28 border-t border-neutral-200 text-center">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-neutral-900 mb-5 tracking-tight">
          Built Through <span className="text-[#F5A623]">Partnership</span>.
        </h2>
        <p className="text-neutral-600 text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed font-normal">
          We are developing a carefully aligned group of institutional partners. Approved partners
          will be recognised here as collaborations are confirmed.
        </p>

        {/* 2 Rows of 5 Partner Logos each from ui/01.png..10.png */}
        <div className="space-y-10 sm:space-y-12 mb-16 max-w-6xl mx-auto">
          {/* Row 1: 01 to 05 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 items-center justify-items-center">
            {partnerLogosRow1.map((logo, idx) => (
              <div key={`row1-${idx}`} className="h-14 flex items-center justify-center p-2">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={50}
                  className="max-h-12 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>

          {/* Row 2: 06 to 10 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 items-center justify-items-center">
            {partnerLogosRow2.map((logo, idx) => (
              <div key={`row2-${idx}`} className="h-14 flex items-center justify-center p-2">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={50}
                  className="max-h-12 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Opportunities Box */}
        <div className="w-full border border-neutral-300 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 text-left bg-white shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold mb-2">
              PARTNERSHIP OPPORTUNITIES
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Help shape a practical continental platform.
            </h3>
          </div>
          <Link
            href="#partner-with-us"
            className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.08em] px-8 py-4 rounded-lg transition-all inline-flex items-center gap-2.5 whitespace-nowrap shadow-sm"
          >
            Partner With Us
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

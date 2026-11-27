import Link from "next/link";
import { ArrowRight } from "lucide-react";

const waysToPartnerRow1 = [
  "Research and Knowledge",
  "Education and Skills",
  "Technology and Innovation Ecosystem",
  "Industry and Employer",
  "Development, Foundation and Impact",
];

const waysToPartnerRow2 = [
  "Public Policy and Government",
  "Hospitality and Venue",
  "Solutions Showcase and Exhibition",
  "Media and Communications",
];

export default function PartnershipSection() {
  return (
    <section id="partnerships" className="bg-white py-24 border-t border-neutral-200 text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 mb-4 tracking-tight">
          Built Through Partnership.
        </h2>
        <p className="text-neutral-600 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          We are developing a carefully aligned group of institutional partners. Approved partners
          will be recognised here as collaborations are confirmed.
        </p>

        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">
          NINE WAYS TO PARTNER
        </p>

        {/* 9 Pill Badges */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {waysToPartnerRow1.map((item, idx) => (
              <span
                key={idx}
                className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold text-neutral-800 bg-white hover:border-neutral-900 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {waysToPartnerRow2.map((item, idx) => (
              <span
                key={idx}
                className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold text-neutral-800 bg-white hover:border-neutral-900 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-xs text-neutral-400 font-mono tracking-wider mb-12">
          Partners are listed here only once formally confirmed.
        </p>

        {/* Partnership Opportunities Box */}
        <div className="border border-neutral-300 p-8 sm:p-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left bg-white">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-1">
              PARTNERSHIP OPPORTUNITIES
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Help shape a practical continental platform.
            </h3>
          </div>
          <Link
            href="#partner-with-us"
            className="border border-neutral-900 text-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all inline-flex items-center gap-2 whitespace-nowrap"
          >
            Partner With Us
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

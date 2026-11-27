import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-neutral-700 uppercase text-center mb-6">
          WORKFORCE DEAL LAB AFRICA
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-neutral-900 tracking-tight text-center leading-[1.08] mb-6 max-w-5xl mx-auto uppercase">
          THE EDUCATION-TO-EMPLOYMENT <br className="hidden sm:inline" />
          SOLUTIONS SUMMIT
        </h1>

        {/* Subtitles */}
        <p className="text-xl sm:text-2xl font-bold text-neutral-900 text-center mb-3">
          Bridging the Education-to-Employment Gap
        </p>
        <p className="text-base sm:text-lg text-neutral-600 text-center mb-8 max-w-3xl mx-auto">
          Turning Workforce Challenges Into Solutions, Partnerships And Impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mb-12">
          <Link
            href="#register"
            className="bg-[#EAA228] hover:bg-[#d89218] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
          >
            Register Interest
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#partnerships"
            className="text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-[#EAA228] inline-flex items-center gap-1 transition-colors"
          >
            Partner With Us
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#solutions"
            className="text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-[#EAA228] inline-flex items-center gap-1 transition-colors"
          >
            Apply to Exhibit
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="relative w-full aspect-[16/9] max-h-[620px]">
            <Image
              src="/images/hero.jpg"
              alt="Turning workforce challenges into solutions. Partnerships and impact - Workforce DealLab Africa participants"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </div>

        {/* Summit Meta Details Bar */}
        <div className="max-w-6xl mx-auto border-t border-b border-neutral-200 mt-6 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200 py-6 bg-white">
          <div className="px-6 py-3">
            <p className="text-[11px] font-bold tracking-wider text-[#0F5132] uppercase mb-1">
              PROPOSED DATE
            </p>
            <p className="text-base font-bold text-neutral-900">19–21 May 2027</p>
          </div>
          <div className="px-6 py-3">
            <p className="text-[11px] font-bold tracking-wider text-[#0F5132] uppercase mb-1">
              PROPOSED LOCATION
            </p>
            <p className="text-base font-bold text-neutral-900">Nairobi, Kenya</p>
          </div>
          <div className="px-6 py-3">
            <p className="text-[11px] font-bold tracking-wider text-[#0F5132] uppercase mb-1">
              FORMAT
            </p>
            <p className="text-base font-bold text-neutral-900">Three-day summit</p>
          </div>
          <div className="px-6 py-3">
            <p className="text-[11px] font-bold tracking-wider text-[#0F5132] uppercase mb-1">
              CONVENOR
            </p>
            <p className="text-base font-bold text-neutral-900">Nanaade</p>
          </div>
        </div>
      </div>
    </section>
  );
}

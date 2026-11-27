import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-[#0B1F33] text-white py-32 text-center border-b border-white/15">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Big Dual-Color Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.08] mb-7 max-w-5xl mx-auto">
          Be part of the conversation. <br />
          <span className="text-[#8EB7AA]">Help shape what comes next.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-300 text-base sm:text-lg md:text-[19px] max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Register your interest for programme announcements, participation opportunities and
          important summit updates.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="#register"
            className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.1em] px-8 py-3.5 rounded-md inline-flex items-center gap-2.5 transition-all shadow-md"
          >
            Register Interest
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#partnerships"
            className="bg-transparent border border-white text-white hover:bg-white/10 font-bold text-xs uppercase tracking-[0.1em] px-8 py-3.5 rounded-md inline-flex items-center gap-2 transition-all"
          >
            Partner With Us
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

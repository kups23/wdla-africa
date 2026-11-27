import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-[#081A2B] text-white py-28 text-center border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Big Dual-Color Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
          Be part of the conversation. <br />
          <span className="text-[#8EAB9D]">Help shape what comes next.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Register your interest for programme announcements, participation opportunities and
          important summit updates.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="#register"
            className="bg-[#EAA228] hover:bg-[#d89218] text-neutral-950 font-bold text-xs uppercase tracking-wider px-7 py-3.5 inline-flex items-center gap-2 transition-all shadow-sm"
          >
            Register Interest
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#partnerships"
            className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#EAA228] inline-flex items-center gap-1.5 transition-colors"
          >
            Partner With Us
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

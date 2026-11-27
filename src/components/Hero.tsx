"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  SlidersHorizontal,
  Users,
  Menu,
  X,
} from "lucide-react";

const scrollLogos = [
  "/images/scroll01.png",
  "/images/scrool02.png",
  "/images/scroll03.png",
  "/images/scroll04.png",
  "/images/scroll05.png",
  "/images/scroll06.png",
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full flex flex-col justify-between overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homeimage.png"
          alt="Workforce DealLab Africa Summit Hall"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle Dark Blue Overlay to match mockup */}
        <div className="absolute inset-0 bg-[#0B1F33]/75 via-[#0B1F33]/60 to-[#0B1F33]/90" />
      </div>

      {/* 1. Transparent Header on Hero */}
      <header className="relative z-20 w-full px-6 sm:px-8 md:px-10 lg:px-12 h-24 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoupdate.png"
            alt="Workforce DealLab Africa"
            width={240}
            height={36}
            priority
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links in White */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          <Link
            href="#about"
            className="text-[13px] font-semibold uppercase tracking-[0.05em] text-white/90 hover:text-[#F5A623] transition-colors"
          >
            About
          </Link>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <Link
              href="#programme"
              className="text-[13px] font-semibold uppercase tracking-[0.05em] text-white/90 group-hover:text-[#F5A623] transition-colors flex items-center gap-1"
            >
              Programme
              <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:text-[#F5A623] transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
          <Link
            href="#speakers"
            className="text-[13px] font-semibold uppercase tracking-[0.05em] text-white/90 hover:text-[#F5A623] transition-colors"
          >
            Speakers
          </Link>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <Link
              href="#solutions"
              className="text-[13px] font-semibold uppercase tracking-[0.05em] text-white/90 group-hover:text-[#F5A623] transition-colors flex items-center gap-1"
            >
              Solutions Showcase
              <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:text-[#F5A623] transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <Link
              href="#partnerships"
              className="text-[13px] font-semibold uppercase tracking-[0.05em] text-white/90 group-hover:text-[#F5A623] transition-colors flex items-center gap-1"
            >
              Partnerships
              <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:text-[#F5A623] transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
          <Link
            href="#insights"
            className="text-[13px] font-semibold uppercase tracking-[0.05em] text-white/90 hover:text-[#F5A623] transition-colors"
          >
            Insights
          </Link>
        </nav>

        {/* Right Action: Register Interest */}
        <div className="hidden md:flex items-center">
          <Link
            href="#register"
            className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.08em] px-6 py-2.5 rounded-lg transition-all inline-flex items-center gap-2 shadow-md"
          >
            Register Interest
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#F5A623] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="relative z-30 lg:hidden bg-[#0B1F33]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-white"
          >
            About
          </Link>
          <Link
            href="#programme"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-white"
          >
            Programme
          </Link>
          <Link
            href="#speakers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-white"
          >
            Speakers
          </Link>
          <Link
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-white"
          >
            Solutions Showcase
          </Link>
          <Link
            href="#partnerships"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-white"
          >
            Partnerships
          </Link>
          <Link
            href="#insights"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-white"
          >
            Insights
          </Link>
          <div className="pt-4 border-t border-white/10">
            <Link
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#F5A623] text-neutral-950 font-bold text-center py-2.5 text-xs uppercase tracking-wider rounded-lg"
            >
              Register Interest →
            </Link>
          </div>
        </div>
      )}

      {/* 2. Hero Center Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-10 lg:px-12 pt-12 pb-16 text-center">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#5AA7EE] uppercase mb-6">
          WORKFORCE DEAL LAB AFRICA
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight leading-[1.06] mb-5 max-w-5xl mx-auto uppercase">
          THE EDUCATION-TO-EMPLOYMENT <br className="hidden sm:inline" />
          SOLUTIONS SUMMIT
        </h1>

        {/* Subtitles */}
        <p className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
          Bridging the Education-to-Employment Gap
        </p>
        <p className="text-sm sm:text-base md:text-lg text-neutral-200 mb-10 max-w-3xl mx-auto font-normal">
          Turning Workforce Challenges Into Solutions, Partnerships And Impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-14">
          <Link
            href="#register"
            className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.1em] px-8 py-3.5 rounded-md transition-all inline-flex items-center gap-2.5 shadow-md"
          >
            Register Interest
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#partnerships"
            className="bg-transparent border border-white text-white hover:bg-white/10 font-bold text-xs uppercase tracking-[0.1em] px-7 py-3.5 rounded-md inline-flex items-center gap-2 transition-all"
          >
            Partner With Us
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#solutions"
            className="bg-transparent border border-white text-white hover:bg-white/10 font-bold text-xs uppercase tracking-[0.1em] px-7 py-3.5 rounded-md inline-flex items-center gap-2 transition-all"
          >
            Apply to Exhibit
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Frosted Glass Meta Details Bar */}
        <div className="w-full max-w-5xl mx-auto bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/15 shadow-2xl text-left">
          {/* Date */}
          <div className="flex items-center gap-3.5 px-3 py-2">
            <div className="w-10 h-10 rounded-xl border border-[#F5A623]/70 bg-black/30 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#F5A623]" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em] text-neutral-400 uppercase">
                DATE
              </p>
              <p className="text-sm sm:text-base font-bold text-white">19–21 May 2027</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3.5 px-3 py-2 pt-3 lg:pt-2">
            <div className="w-10 h-10 rounded-xl border border-[#F5A623]/70 bg-black/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#F5A623]" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em] text-neutral-400 uppercase">
                LOCATION
              </p>
              <p className="text-sm sm:text-base font-bold text-white">Nairobi, Kenya</p>
            </div>
          </div>

          {/* Format */}
          <div className="flex items-center gap-3.5 px-3 py-2 pt-3 lg:pt-2">
            <div className="w-10 h-10 rounded-xl border border-[#F5A623]/70 bg-black/30 flex items-center justify-center shrink-0">
              <SlidersHorizontal className="w-5 h-5 text-[#F5A623]" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em] text-neutral-400 uppercase">
                FORMAT
              </p>
              <p className="text-sm sm:text-base font-bold text-white">Three-day summit</p>
            </div>
          </div>

          {/* Convenor */}
          <div className="flex items-center gap-3.5 px-3 py-2 pt-3 lg:pt-2">
            <div className="w-10 h-10 rounded-xl border border-[#F5A623]/70 bg-black/30 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#F5A623]" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em] text-neutral-400 uppercase">
                CONVENOR
              </p>
              <p className="text-sm sm:text-base font-bold text-white">Nanaade</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Gold Scrolling Logos Bar at Hero Bottom - Infinite Unending Marquee */}
      <div className="relative z-10 w-full bg-[#F5A623] h-16 sm:h-20 flex items-center overflow-hidden shadow-inner">
        <div className="flex w-max animate-marquee">
          {/* First track */}
          <div className="flex items-center gap-16 sm:gap-20 md:gap-24 shrink-0 pr-16 sm:pr-20 md:pr-24">
            {scrollLogos.map((logo, idx) => (
              <div key={`track-1-${idx}`} className="h-9 sm:h-10 md:h-11 flex items-center shrink-0">
                <Image
                  src={logo}
                  alt="Partner Brand"
                  width={200}
                  height={44}
                  className="h-8 sm:h-9 md:h-10 w-auto max-w-[200px] object-contain filter brightness-0"
                />
              </div>
            ))}
          </div>

          {/* Second track for continuous unending loop */}
          <div className="flex items-center gap-16 sm:gap-20 md:gap-24 shrink-0 pr-16 sm:pr-20 md:pr-24" aria-hidden="true">
            {scrollLogos.map((logo, idx) => (
              <div key={`track-2-${idx}`} className="h-9 sm:h-10 md:h-11 flex items-center shrink-0">
                <Image
                  src={logo}
                  alt="Partner Brand"
                  width={200}
                  height={44}
                  className="h-8 sm:h-9 md:h-10 w-auto max-w-[200px] object-contain filter brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

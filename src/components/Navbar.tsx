"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 transition-all">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12 h-[74px] flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Workforce DealLab Africa"
            width={235}
            height={36}
            priority
            className="h-8 md:h-[34px] w-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <Link
            href="#about"
            className="text-[13px] font-semibold uppercase tracking-[0.05em] text-neutral-900 hover:text-[#F5A623] transition-colors"
          >
            About
          </Link>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <Link
              href="#programme"
              className="text-[13px] font-semibold uppercase tracking-[0.05em] text-neutral-900 group-hover:text-[#F5A623] transition-colors flex items-center gap-1"
            >
              Programme
              <ChevronDown className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#F5A623] transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
          <Link
            href="#speakers"
            className="text-[13px] font-semibold uppercase tracking-[0.05em] text-neutral-900 hover:text-[#F5A623] transition-colors"
          >
            Speakers
          </Link>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <Link
              href="#solutions"
              className="text-[13px] font-semibold uppercase tracking-[0.05em] text-neutral-900 group-hover:text-[#F5A623] transition-colors flex items-center gap-1"
            >
              Solutions Showcase
              <ChevronDown className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#F5A623] transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <Link
              href="#partnerships"
              className="text-[13px] font-semibold uppercase tracking-[0.05em] text-neutral-900 group-hover:text-[#F5A623] transition-colors flex items-center gap-1"
            >
              Partnerships
              <ChevronDown className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#F5A623] transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
          <Link
            href="#insights"
            className="text-[13px] font-semibold uppercase tracking-[0.05em] text-neutral-900 hover:text-[#F5A623] transition-colors"
          >
            Insights
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3.5">
          <Link
            href="#partnerships"
            className="border border-neutral-900 text-neutral-900 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] hover:bg-neutral-900 hover:text-white transition-all inline-flex items-center gap-2"
          >
            Partner With Us
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#register"
            className="bg-[#F5A623] hover:bg-[#e09419] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] transition-all inline-flex items-center gap-2 shadow-sm"
          >
            Register Interest
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-800 hover:text-[#F5A623] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-neutral-800"
          >
            About
          </Link>
          <Link
            href="#programme"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-neutral-800"
          >
            Programme
          </Link>
          <Link
            href="#speakers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-neutral-800"
          >
            Speakers
          </Link>
          <Link
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-neutral-800"
          >
            Solutions Showcase
          </Link>
          <Link
            href="#partnerships"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-neutral-800"
          >
            Partnerships
          </Link>
          <Link
            href="#insights"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-neutral-800"
          >
            Insights
          </Link>
          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <Link
              href="#partnerships"
              onClick={() => setMobileMenuOpen(false)}
              className="border border-neutral-900 text-neutral-900 text-center py-2.5 text-xs font-bold uppercase tracking-wider"
            >
              Partner With Us →
            </Link>
            <Link
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#F5A623] text-white text-center py-2.5 text-xs font-bold uppercase tracking-wider"
            >
              Register Interest →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

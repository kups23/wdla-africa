"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, DoorOpen } from "lucide-react";

export default function AgendaSection() {
  const [activeDay, setActiveDay] = useState<number>(1);

  return (
    <section id="programme" className="relative w-full py-28 text-white overflow-hidden">
      {/* Background with three.png and deep blue translucent overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/three.png"
          alt="Conference Hall"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0B1F33]/88 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-4">
            Three days. <br />
            <span className="text-[#F5A623]">One</span> shared agenda.
          </h2>
          <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-normal">
            Understand the challenge, advance solutions and partnerships, then turn shared
            priorities into collective action. Every session takes place in the conference hall.
          </p>
        </div>

        {/* Day Pills Switcher Capsule */}
        <div className="flex justify-center mb-6">
          <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-1.5 inline-flex items-center gap-1.5 shadow-xl">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeDay === 1
                  ? "bg-white text-neutral-900 shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Day 1 <span className="font-normal text-xs ml-1 opacity-80">Wed 19 May</span>
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeDay === 2
                  ? "bg-white text-neutral-900 shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Day 2 <span className="font-normal text-xs ml-1 opacity-80">Thu 20 May</span>
            </button>
            <button
              onClick={() => setActiveDay(3)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeDay === 3
                  ? "bg-white text-neutral-900 shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Day 3 <span className="font-normal text-xs ml-1 opacity-80">Fri 21 May</span>
            </button>
          </div>
        </div>

        {/* Sub-headline */}
        <p className="text-center text-sm sm:text-base text-neutral-200 mb-10 font-normal">
          <span className="font-bold text-white">Understanding the Challenge</span> · Aligning
          education, skills and labour-market demand.
        </p>

        {/* Frosted Glass Schedule Card */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4">
          {/* Card Top Bar */}
          <div className="flex justify-between items-center pb-4 border-b border-white/15">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Conference Hall</h3>
            <span className="text-xs font-mono text-neutral-300 tracking-wider">
              All sessions in one room
            </span>
          </div>

          {/* Row 1: Grey Pill */}
          <div className="flex items-center gap-4">
            <span className="w-14 text-xs font-mono text-neutral-300">08:30</span>
            <div className="flex-1 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-3 flex items-center gap-3 text-neutral-100 text-sm font-medium">
              <DoorOpen className="w-4 h-4 text-neutral-300" />
              <span>Doors, Badges and Refreshments</span>
            </div>
          </div>

          {/* Row 2: Light Green Pastel Card */}
          <div className="flex items-center gap-4">
            <span className="w-14 text-xs font-mono text-neutral-300">09:30</span>
            <div className="flex-1 bg-[#D4F5E2] text-neutral-900 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
                  Transitions · Plenary
                </p>
                <h4 className="text-base sm:text-lg font-bold text-neutral-950">
                  Opening keynote: the education-to-employment gap, in numbers
                </h4>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-xs sm:text-sm font-mono font-bold text-neutral-900">
                  09:30–11:00
                </p>
                <p className="text-[11px] text-neutral-600">Speakers to be announced</p>
              </div>
            </div>
          </div>

          {/* Row 3: Light Pink Pastel Card */}
          <div className="flex items-center gap-4">
            <span className="w-14 text-xs font-mono text-neutral-300">11:00</span>
            <div className="flex-1 bg-[#FCE3F2] text-neutral-900 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <p className="text-[11px] font-bold text-pink-800 uppercase tracking-wider mb-1">
                  Skills and Demand · Panel
                </p>
                <h4 className="text-base sm:text-lg font-bold text-neutral-950">
                  What employers say they need, and what they get
                </h4>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-xs sm:text-sm font-mono font-bold text-neutral-900">
                  11:00–12:30
                </p>
                <p className="text-[11px] text-neutral-600">Speakers to be announced</p>
              </div>
            </div>
          </div>

          {/* Row 4: Grey Pill */}
          <div className="flex items-center gap-4">
            <span className="w-14 text-xs font-mono text-neutral-300">12:30</span>
            <div className="flex-1 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-3 flex items-center gap-3 text-neutral-100 text-sm font-medium">
              <span>Lunch and Networking</span>
            </div>
          </div>

          {/* Row 5: Light Blue Pastel Card */}
          <div className="flex items-center gap-4">
            <span className="w-14 text-xs font-mono text-neutral-300">14:00</span>
            <div className="flex-1 bg-[#E2EDFA] text-neutral-900 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <p className="text-[11px] font-bold text-blue-800 uppercase tracking-wider mb-1">
                  University–Industry · Roundtable
                </p>
                <h4 className="text-base sm:text-lg font-bold text-neutral-950">
                  Universities and industry: who moves first?
                </h4>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-xs sm:text-sm font-mono font-bold text-neutral-900">
                  14:00–15:30
                </p>
                <p className="text-[11px] text-neutral-600">Speakers to be announced</p>
              </div>
            </div>
          </div>

          {/* Row 6: Light Pink Pastel Card */}
          <div className="flex items-center gap-4">
            <span className="w-14 text-xs font-mono text-neutral-300">17:00</span>
            <div className="flex-1 bg-[#FCE3F2] text-neutral-900 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <p className="text-[11px] font-bold text-pink-800 uppercase tracking-wider mb-1">
                  Transitions · Plenary
                </p>
                <h4 className="text-base sm:text-lg font-bold text-neutral-950">
                  Day 1 synthesis and priorities for Day 3
                </h4>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-xs sm:text-sm font-mono font-bold text-neutral-900">
                  17:00–17:45
                </p>
                <p className="text-[11px] text-neutral-600">Speakers to be announced</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10">
          <p className="text-xs text-neutral-300 font-mono tracking-wider max-w-xl">
            A preview of each day. Sessions are indicative and will be confirmed as the programme is
            published.
          </p>
          <Link
            href="#full-programme"
            className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.08em] px-8 py-4 rounded-lg inline-flex items-center gap-2.5 transition-all shadow-md whitespace-nowrap self-start sm:self-auto"
          >
            Explore the Programme
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

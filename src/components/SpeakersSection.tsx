import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function SpeakersSection() {
  return (
    <section id="speakers" className="bg-white py-28">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Top Button */}
        <div className="flex justify-end mb-6">
          <Link
            href="#become-speaker"
            className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.08em] px-7 py-3.5 rounded-lg inline-flex items-center gap-2 transition-all shadow-sm"
          >
            Become a Speaker
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Heading, Graphic Overlay (back.png), and Description */}
          <div className="lg:col-span-5 relative">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-neutral-900 leading-[1.08] mb-8 tracking-tight">
              Meet Our <span className="text-[#F5A623]">Special</span> <br />
              Speakers
            </h2>

            {/* Subtitle container with back.png overlay behind text */}
            <div className="relative py-4 pr-4">
              {/* Overlay graphic behind text with small blur as requested */}
              <div className="absolute -left-6 -top-10 w-72 h-72 pointer-events-none select-none opacity-85">
                <Image
                  src="/images/back.png"
                  alt="Graphic accent"
                  width={280}
                  height={280}
                  className="object-contain"
                />
              </div>

              <p className="relative z-10 text-neutral-700 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg font-normal">
                Join us as industry experts and thougth leaders share valuable insights, innovative
                ideas, and real-world experiences shaping the future of their respective fields.
              </p>

              <Link
                href="#all-speakers"
                className="relative z-10 text-base font-bold text-[#F5A623] hover:text-[#e09419] inline-flex items-center gap-1.5 underline underline-offset-4 transition-colors"
              >
                View All Speakers
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Speaker Cards using meet.jpg */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md group"
                >
                  <Image
                    src="/images/meet.jpg"
                    alt="Divine Festus - CEO & Founder"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/80 to-transparent p-5 text-center flex flex-col items-center justify-end">
                    <h4 className="text-lg font-bold text-white mb-0.5">Divine Festus</h4>
                    <p className="text-xs text-neutral-300 mb-2.5">CEO & Founder</p>
                    <div className="w-10 h-0.5 bg-[#F5A623] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dark Callout Banner */}
        <div className="w-full bg-[#0B1F33] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-none">
          <div>
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2.5 tracking-tight">
              Speak at Workforce DealLab Africa
            </h4>
            <p className="text-neutral-300 text-[15px] max-w-3xl leading-relaxed font-normal">
              Practitioners, researchers and institutional leaders with practical experience of
              education-to-employment challenges are invited to express interest.
            </p>
          </div>
          <Link
            href="#express-interest-speaker"
            className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.08em] px-8 py-4 whitespace-nowrap inline-flex items-center gap-2.5 transition-all shadow-md self-start md:self-auto rounded-lg"
          >
            Express Interest to Speak
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

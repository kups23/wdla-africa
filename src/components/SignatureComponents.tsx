import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SignatureComponents() {
  return (
    <section className="bg-[#F5F2EB] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
          THE SUMMIT FORMAT
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
          Three signature components
        </h2>
        <p className="text-neutral-600 text-lg max-w-3xl mb-12 leading-relaxed">
          The Main Conference, Solutions Showcase and Partner Labs bring together dialogue, practical
          solutions and follow-through.
        </p>

        {/* 3 Component Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 01 */}
          <div className="flex flex-col">
            <div className="bg-black text-[#A3C6B5] h-44 flex items-center px-8 text-7xl font-extrabold">
              01
            </div>
            <div className="bg-white p-8 border border-neutral-200 border-t-0 flex flex-col justify-between flex-1 min-h-[260px]">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Main Conference</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Leadership dialogues, keynotes, expert discussions and practical conversations on
                  the future of education, skills and employment.
                </p>
              </div>
              <Link
                href="#programme"
                className="text-xs uppercase tracking-wider font-bold text-neutral-900 inline-flex items-center gap-1.5 hover:text-[#EAA228] transition-colors"
              >
                EXPLORE THE PROGRAMME
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 02 */}
          <div className="flex flex-col">
            <div className="bg-[#88AE9A] text-neutral-950 h-44 flex items-center px-8 text-7xl font-extrabold">
              02
            </div>
            <div className="bg-white p-8 border border-neutral-200 border-t-0 flex flex-col justify-between flex-1 min-h-[260px]">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Solutions Showcase</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  A curated space where organisations present technologies, programmes, research and
                  practical approaches addressing workforce challenges.
                </p>
              </div>
              <Link
                href="#solutions"
                className="text-xs uppercase tracking-wider font-bold text-neutral-900 inline-flex items-center gap-1.5 hover:text-[#EAA228] transition-colors"
              >
                EXPLORE THE SHOWCASE
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 03 */}
          <div className="flex flex-col">
            <div className="bg-[#142C44] text-[#A3C6B5] h-44 flex items-center px-8 text-7xl font-extrabold">
              03
            </div>
            <div className="bg-white p-8 border border-neutral-200 border-t-0 flex flex-col justify-between flex-1 min-h-[260px]">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Partner Labs</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Facilitated working sessions bringing together selected institutions to explore
                  shared challenges, develop collaboration opportunities and advance practical
                  follow-through.
                </p>
              </div>
              <Link
                href="#partner-labs"
                className="text-xs uppercase tracking-wider font-bold text-neutral-900 inline-flex items-center gap-1.5 hover:text-[#EAA228] transition-colors"
              >
                LEARN ABOUT PARTNER LABS
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SignatureComponents() {
  return (
    <section className="bg-[#F4F1EA] py-28">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Header */}
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 font-semibold mb-3">
          THE SUMMIT FORMAT
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-neutral-900 mb-4 tracking-tight">
          Three signature <span className="text-[#F5A623]">components</span>
        </h2>
        <p className="text-neutral-700 text-lg md:text-[20px] max-w-4xl mb-14 leading-relaxed font-normal">
          The Main Conference, Solutions Showcase and Partner Labs bring together dialogue, practical
          solutions and follow-through.
        </p>

        {/* 3 Component Cards with Image Headers from ui/Component/ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 01 */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-300 shadow-sm bg-white">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src="/images/component-01.png"
                alt="Main Conference"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center px-8">
                <span className="text-[#8EB7AA] text-[80px] font-black tracking-tighter drop-shadow-md">
                  01
                </span>
              </div>
            </div>
            <div className="p-9 flex flex-col justify-between flex-1 min-h-[280px]">
              <div>
                <h3 className="text-2xl md:text-[26px] font-bold text-neutral-900 mb-3.5 tracking-tight">
                  Main Conference
                </h3>
                <p className="text-neutral-600 text-[15px] leading-relaxed mb-8 font-normal">
                  Leadership dialogues, keynotes, expert discussions and practical conversations on
                  the future of education, skills and employment.
                </p>
              </div>
              <Link
                href="#programme"
                className="text-xs uppercase tracking-[0.1em] font-bold text-neutral-900 inline-flex items-center gap-2 hover:text-[#F5A623] transition-colors"
              >
                EXPLORE THE PROGRAMME
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 02 */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-300 shadow-sm bg-white">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src="/images/component-02.png"
                alt="Solutions Showcase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center px-8">
                <span className="text-white text-[80px] font-black tracking-tighter drop-shadow-md">
                  02
                </span>
              </div>
            </div>
            <div className="p-9 flex flex-col justify-between flex-1 min-h-[280px]">
              <div>
                <h3 className="text-2xl md:text-[26px] font-bold text-neutral-900 mb-3.5 tracking-tight">
                  Solutions Showcase
                </h3>
                <p className="text-neutral-600 text-[15px] leading-relaxed mb-8 font-normal">
                  A curated space where organisations present technologies, programmes, research and
                  practical approaches addressing workforce challenges.
                </p>
              </div>
              <Link
                href="#solutions"
                className="text-xs uppercase tracking-[0.1em] font-bold text-neutral-900 inline-flex items-center gap-2 hover:text-[#F5A623] transition-colors"
              >
                EXPLORE THE SHOWCASE
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 03 */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-neutral-300 shadow-sm bg-white">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src="/images/component-03.png"
                alt="Partner Labs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center px-8">
                <span className="text-[#8EB7AA] text-[80px] font-black tracking-tighter drop-shadow-md">
                  03
                </span>
              </div>
            </div>
            <div className="p-9 flex flex-col justify-between flex-1 min-h-[280px]">
              <div>
                <h3 className="text-2xl md:text-[26px] font-bold text-neutral-900 mb-3.5 tracking-tight">
                  Partner Labs
                </h3>
                <p className="text-neutral-600 text-[15px] leading-relaxed mb-8 font-normal">
                  Facilitated working sessions bringing together selected institutions to explore
                  shared challenges, develop collaboration opportunities and advance practical
                  follow-through.
                </p>
              </div>
              <Link
                href="#partner-labs"
                className="text-xs uppercase tracking-[0.1em] font-bold text-neutral-900 inline-flex items-center gap-2 hover:text-[#F5A623] transition-colors"
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

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const challenges = [
  {
    num: "01",
    title: "Skills and Employer Demand",
    desc: "The need to align learning and training with evolving workforce requirements.",
  },
  {
    num: "02",
    title: "Education and Industry Alignment",
    desc: "The need for stronger relationships between education providers and employers.",
  },
  {
    num: "03",
    title: "Technology and Workforce Transformation",
    desc: "The implications of AI, automation and digital transformation for jobs and skills.",
  },
  {
    num: "04",
    title: "Transitions into Meaningful Work",
    desc: "Moving from education and training into employment, entrepreneurship and economic participation.",
  },
];

export default function WhySection() {
  return (
    <section id="about" className="bg-[#0B1F33] text-white py-28">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.08] mb-8 tracking-tight">
              <span className="text-[#F5A623]">Why</span> Workforce <br />
              Deal Lab Africa?
            </h2>
            <p className="text-neutral-300 text-[17px] leading-[1.7] mb-10 max-w-xl font-normal">
              Africa’s education and employment systems are changing, but the transition between
              learning and meaningful work remains a significant challenge. Skills alone don’t
              create jobs. Real progress starts when governments, employers, universities and
              innovators sit at the same table, and leave with agreements, not just ideas.
            </p>
            <Link
              href="#about-more"
              className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.08em] px-8 py-4 inline-flex items-center gap-2.5 transition-all shadow-sm rounded-lg"
            >
              Learn More
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-white mb-10 leading-[1.3]">
              The challenge is not simply access to education. It is what happens next.
            </h3>

            <div className="divide-y divide-white/15 border-t border-b border-white/15">
              {challenges.map((item) => (
                <div key={item.num} className="py-7 flex gap-7 items-start">
                  <span className="text-xs font-mono text-neutral-400 pt-0.5 tracking-wider">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-neutral-300 text-[15px] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

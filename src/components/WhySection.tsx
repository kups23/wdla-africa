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
    <section id="about" className="bg-[#081A2B] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.12] mb-8">
              Why Workforce <br />
              DealLab Africa?
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed mb-10">
              Africa’s education and employment systems are changing, but the transition between
              learning and meaningful work remains a significant challenge. Skills alone don’t
              create jobs. Real progress starts when governments, employers, universities and
              innovators sit at the same table, and leave with agreements, not just ideas.
            </p>
            <Link
              href="#about-more"
              className="bg-[#EAA228] hover:bg-[#d89218] text-neutral-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 inline-flex items-center gap-2 transition-all shadow-sm"
            >
              Learn More
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-10 leading-snug">
              The challenge is not simply access to education. It is what happens next.
            </h3>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {challenges.map((item) => (
                <div key={item.num} className="py-6 flex gap-6 items-start">
                  <span className="text-xs font-mono text-neutral-400 pt-0.5 tracking-wider">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
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

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutionCategories = [
  {
    num: "01",
    title: "Education and Skills",
    desc: "Programmes, platforms and approaches that build job-relevant skills.",
  },
  {
    num: "02",
    title: "AI and Technology",
    desc: "Technologies and tools applied to learning, skills and workforce challenges.",
  },
  {
    num: "03",
    title: "Jobs and Talent",
    desc: "Solutions connecting people to opportunity and employers to talent.",
  },
  {
    num: "04",
    title: "Enterprise and Innovation",
    desc: "Approaches that support entrepreneurship, enterprise growth and new ventures.",
  },
];

const participationWays = [
  {
    title: "Showcase Exhibitor",
    desc: "Present your solution, programme or technology.",
  },
  {
    title: "Showcase Mobilisation Partner",
    desc: "Help identify and mobilise relevant organisations and innovators.",
  },
  {
    title: "Showcase Infrastructure Partner",
    desc: "Support exhibition facilities, equipment and technical requirements.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-white py-24 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-12 leading-[1.12] tracking-tight">
          Discover the Solutions Shaping <br />
          Africa’s Education-to-Employment <br />
          Landscape.
        </h2>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutionCategories.map((item) => (
            <div
              key={item.num}
              className="border border-neutral-300 p-8 flex flex-col justify-between min-h-[220px] hover:border-neutral-900 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-neutral-500 mb-4 block">{item.num}</span>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
              </div>
              <p className="text-neutral-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Three Ways to Participate */}
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">
            THREE WAYS TO PARTICIPATE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {participationWays.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#081A2B] text-white p-8 flex flex-col justify-between min-h-[170px]"
              >
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#apply-exhibit"
              className="bg-[#EAA228] hover:bg-[#d89218] text-neutral-950 font-bold text-xs uppercase tracking-wider px-8 py-3.5 inline-flex items-center gap-2 transition-all shadow-sm"
            >
              Apply to Exhibit
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

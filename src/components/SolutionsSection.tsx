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
  {
    num: "05",
    title: "University Institutional Partnerships",
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
    <section id="solutions" className="bg-[#F4F1EA] py-28 border-t border-neutral-200">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-neutral-900 mb-14 leading-[1.08] tracking-tight">
          Discover the Solutions Shaping <br />
          Africa’s <span className="text-[#F5A623]">Education-to-</span> <br />
          <span className="text-[#F5A623]">Employment</span> Landscape.
        </h2>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-20">
          {solutionCategories.map((item) => (
            <div
              key={item.num}
              className="border border-neutral-300 p-8 flex flex-col justify-between min-h-[250px] bg-white rounded-xl shadow-sm hover:border-neutral-900 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-neutral-500 mb-5 block">{item.num}</span>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
              </div>
              <p className="text-neutral-600 text-[13px] leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Three Ways to Participate */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold mb-8">
            THREE WAYS TO PARTICIPATE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {participationWays.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0B1F33] text-white p-9 flex flex-col justify-between min-h-[190px] rounded-xl"
              >
                <h4 className="text-xl font-bold text-white mb-2.5">{item.title}</h4>
                <p className="text-neutral-300 text-[14px] leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="#apply-exhibit"
              className="bg-[#F5A623] hover:bg-[#e09419] text-neutral-950 font-bold text-xs uppercase tracking-[0.08em] px-10 py-4 rounded-lg inline-flex items-center gap-2.5 transition-all shadow-md mx-auto"
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

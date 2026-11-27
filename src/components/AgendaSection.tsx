import Link from "next/link";
import { ArrowRight } from "lucide-react";

const days = [
  {
    date: "19 MAY",
    day: "DAY 1",
    title: "Understanding the Challenge",
    desc: "Aligning Education, Skills and Labour-Market Demand.",
  },
  {
    date: "20 MAY",
    day: "DAY 2",
    title: "Advancing Solutions and Partnerships",
    desc: "Innovation, Industry Collaboration and Investment.",
  },
  {
    date: "21 MAY",
    day: "DAY 3",
    title: "Partner Labs",
    desc: "Turning Shared Priorities into Collective Action.",
  },
];

export default function AgendaSection() {
  return (
    <section id="programme" className="bg-[#081A2B] text-white pt-10 pb-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1]">
            Three days. <br />
            One shared agenda.
          </h2>
          <Link
            href="#full-programme"
            className="bg-[#EAA228] hover:bg-[#d89218] text-neutral-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 inline-flex items-center gap-2 transition-all shadow-sm whitespace-nowrap"
          >
            Explore the Programme
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Days Rows */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {days.map((item, idx) => (
            <div key={idx} className="py-8">
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-2">
                {item.date} &nbsp;·&nbsp; {item.day}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-xs text-neutral-400 font-mono tracking-wider pt-8">
          Dates and location are proposed. The detailed agenda will be published as sessions are
          confirmed.
        </p>
      </div>
    </section>
  );
}

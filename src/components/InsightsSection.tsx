import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    image: "/images/beyound.png",
    meta: "WORKFORCE INSIGHTS — 18 SEPTEMBER 2026",
    title: "Beyond credentials: building pathways to meaningful work",
    excerpt:
      "What would it take to build stronger transitions between learning, skills and opportunity across Africa?",
  },
  {
    image: "/images/ai.png",
    meta: "AI AND THE FUTURE OF WORK — 04 SEPTEMBER 2026",
    title: "AI is changing work. Skills systems must change with it.",
    excerpt:
      "A practical look at how institutions can prepare learners and workers for technology-enabled economies.",
  },
  {
    image: "/images/nairobi.png",
    meta: "SUMMIT ANNOUNCEMENTS — 22 AUGUST 2026",
    title: "Why Nairobi is a natural meeting point for workforce innovation",
    excerpt:
      "A city where policy, enterprise, education and an ambitious technology ecosystem meet.",
  },
  {
    image: "/images/nairobi.png",
    meta: "EMPLOYER PERSPECTIVES — 08 AUGUST 2026",
    title: "What employers expect from education institutions",
    excerpt:
      "Employer perspectives on the skills and partnerships that make education more relevant to work.",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="bg-white py-24 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Ideas for what comes next.
          </h2>
          <Link
            href="#all-insights"
            className="text-xs uppercase font-bold tracking-wider text-neutral-900 inline-flex items-center gap-1.5 border-b-2 border-neutral-900 pb-0.5 hover:text-[#EAA228] hover:border-[#EAA228] transition-all whitespace-nowrap"
          >
            View All Insights
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Article Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, idx) => (
            <article key={idx} className="flex flex-col group">
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Meta */}
              <p className="text-[11px] font-bold text-neutral-600 tracking-wider uppercase mt-4 mb-2">
                {item.meta}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug group-hover:text-[#EAA228] transition-colors">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-neutral-600 text-xs leading-relaxed mb-4 flex-1">
                {item.excerpt}
              </p>

              {/* Link */}
              <Link
                href="#read-more"
                className="text-xs uppercase font-bold tracking-wider text-neutral-900 inline-flex items-center gap-1 group-hover:text-[#EAA228] transition-colors self-start border-b border-neutral-900 group-hover:border-[#EAA228] pb-0.5"
              >
                Read More
                <ArrowRight className="w-3 h-3" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

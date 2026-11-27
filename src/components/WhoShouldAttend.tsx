import {
  Landmark,
  Briefcase,
  GraduationCap,
  Cpu,
  Globe,
  MessageSquare,
  Lightbulb,
  Users,
} from "lucide-react";

const attendees = [
  {
    icon: Landmark,
    title: "Governments and policymakers",
    desc: "Policy priorities, system alignment and public-sector partnerships.",
  },
  {
    icon: Briefcase,
    title: "Employers and industry leaders",
    desc: "Skills needs, talent pipelines and working with education providers.",
  },
  {
    icon: GraduationCap,
    title: "Universities and TVET institutions",
    desc: "Employer engagement, curriculum relevance and Partner Labs.",
  },
  {
    icon: Cpu,
    title: "Technology companies and innovators",
    desc: "Present solutions and demonstrate what works.",
  },
  {
    icon: Globe,
    title: "Development partners and foundations",
    desc: "Evidence, impact and strategic partnership opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Researchers and think tanks",
    desc: "Contribute research, evidence and expertise.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs and startups",
    desc: "Meet collaborators, partners and potential adopters.",
  },
  {
    icon: Users,
    title: "Young professionals and emerging talent",
    desc: "Learn, connect and take part in the conversation.",
  },
];

export default function WhoShouldAttend() {
  return (
    <section className="bg-[#0B1F33] text-white pt-28 pb-24">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.08] mb-5 tracking-tight">
              Who should attend <br className="hidden sm:inline" />
              the <span className="text-[#F5A623]">summit</span>?
            </h2>
            <p className="text-neutral-300 text-base md:text-[17px] leading-relaxed max-w-xl font-normal">
              Workforce DealLab Africa is for everyone who shapes how Africa moves from learning to
              meaningful work.
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl lg:text-[26px] font-normal text-neutral-200 leading-[1.5]">
              The summit’s theme, Bridging the Education-to-Employment Gap, asks us to look beyond
              access to education and focus on what happens next: whether skills match real
              opportunities, and whether institutions are working together to create them.
            </p>
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {attendees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#173B5E] border border-white/5 p-7 rounded-xl flex flex-col justify-between hover:border-white/20 transition-all min-h-[220px]"
              >
                <div>
                  <Icon className="w-6 h-6 text-[#8EB7AA] mb-5" strokeWidth={1.75} />
                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-neutral-300 text-[13px] leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

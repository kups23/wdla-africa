import Link from "next/link";
import { ArrowRight } from "lucide-react";

const speakerPills = [
  "Government and Policy",
  "Industry and Employers",
  "Education and Research",
  "Technology and Innovation",
  "Development and Finance",
];

export default function SpeakersSection() {
  return (
    <section id="speakers" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Meet your speakers
          </h2>
          <Link
            href="#become-speaker"
            className="bg-[#EAA228] hover:bg-[#d89218] text-neutral-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 inline-flex items-center gap-2 transition-all shadow-sm"
          >
            Become a Speaker
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Announcement Box */}
        <div className="border border-neutral-300 p-8 sm:p-12 mb-8">
          <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3">
            SPEAKER ANNOUNCEMENTS
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            Programme and speaker announcements coming soon.
          </h3>
          <p className="text-neutral-600 text-sm max-w-2xl mb-8 leading-relaxed">
            Confirmed speakers will appear here with their photo, title, organisation, country and
            sessions. Only confirmed speakers are listed.
          </p>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2.5">
            {speakerPills.map((pill, idx) => (
              <span
                key={idx}
                className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 bg-white hover:border-neutral-900 transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Dark Callout Banner */}
        <div className="bg-[#081A2B] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Speak at Workforce DealLab Africa</h4>
            <p className="text-neutral-300 text-sm max-w-2xl leading-relaxed">
              Practitioners, researchers and institutional leaders with practical experience of
              education-to-employment challenges are invited to express interest.
            </p>
          </div>
          <Link
            href="#express-interest-speaker"
            className="bg-[#EAA228] hover:bg-[#d89218] text-neutral-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 whitespace-nowrap inline-flex items-center gap-2 transition-all shadow-sm self-start md:self-auto"
          >
            Express Interest to Speak
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

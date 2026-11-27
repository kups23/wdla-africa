"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F33] text-white pt-20 pb-14">
      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Column 1: Brand & Details */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logoupdate.png"
                alt="Workforce DealLab Africa"
                width={240}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-neutral-400 mt-7 mb-7 leading-relaxed max-w-sm font-normal">
              A continental platform turning education-to-employment challenges into solutions,
              partnerships and impact.
            </p>
            <p className="text-[13px] text-neutral-400 mb-2.5">An initiative convened by Nanaade</p>
            <div className="text-[13px] text-neutral-400 flex items-center gap-3.5">
              <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
                LinkedIn
              </Link>
              <span>·</span>
              <Link href="https://x.com" target="_blank" className="hover:text-white transition-colors">
                X
              </Link>
              <span>·</span>
              <Link href="https://youtube.com" target="_blank" className="hover:text-white transition-colors">
                YouTube
              </Link>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-[#F5A623] uppercase tracking-[0.15em] mb-5">
              EXPLORE
            </p>
            <ul className="space-y-3 text-[13px] text-neutral-300">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#programme" className="hover:text-white transition-colors">
                  Programme
                </Link>
              </li>
              <li>
                <Link href="#speakers" className="hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Solutions Showcase
                </Link>
              </li>
              <li>
                <Link href="#partnerships" className="hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="md:col-span-2">
            <p className="text-xs font-bold text-[#F5A623] uppercase tracking-[0.15em] mb-5">
              RESOURCES
            </p>
            <ul className="space-y-3 text-[13px] text-neutral-300">
              <li>
                <Link href="#insights" className="hover:text-white transition-colors">
                  Insights & News
                </Link>
              </li>
              <li>
                <Link href="#publications" className="hover:text-white transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="#downloads" className="hover:text-white transition-colors">
                  Download Centre
                </Link>
              </li>
              <li>
                <Link href="#media" className="hover:text-white transition-colors">
                  Media Resources
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Involved */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold text-[#F5A623] uppercase tracking-[0.15em] mb-5">
              GET INVOLVED
            </p>
            <ul className="space-y-3 text-[13px] text-neutral-300">
              <li>
                <Link href="#register" className="hover:text-white transition-colors">
                  Register Interest
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-white transition-colors">
                  Apply to Exhibit
                </Link>
              </li>
              <li>
                <Link href="#partnerships" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Newsletter Bar */}
        <div className="py-12 border-t border-b border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-bold text-[#F5A623] uppercase tracking-[0.15em] mb-1.5">
              STAY INFORMED
            </p>
            <p className="text-base text-neutral-300 font-normal">
              Get summit news and new insights in your inbox.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center border-b border-white/50 pb-2 w-full sm:w-96"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent text-white placeholder-neutral-500 text-xs w-full focus:outline-none"
            />
            <button
              type="submit"
              className="text-xs font-bold uppercase tracking-[0.1em] text-white hover:text-[#F5A623] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap pl-3"
            >
              SUBSCRIBE
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-neutral-400 gap-5">
          <p>© 2026 Workforce DealLab Africa. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-neutral-400">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="#cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="#accessibility" className="hover:text-white transition-colors">
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

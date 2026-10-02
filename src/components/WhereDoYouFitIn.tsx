"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
// External custom rich icons from react-icons
import { TbDrone } from "react-icons/tb";
import { FaGraduationCap, FaBuildingUser } from "react-icons/fa6";
import { MdOutlineStadium } from "react-icons/md";
import { IconType } from "react-icons";

interface PathOption {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
  accentGradient: string;
  iconBg: string;
  borderGlow: string;
  benefits: string[];
  ctaText: string;
  ctaHref: string;
}

const paths: PathOption[] = [
  {
    id: "kit-buyers",
    badge: "Individuals & Pilots",
    title: "Kit Buyer",
    subtitle: "For hobbyists, makers & competitive pilots",
    description: "Get certified FIDA ball drones, replacement parts, transmitters, and home practice ring sets delivered directly to your doorstep.",
    icon: TbDrone,
    accentGradient: "from-blue-600 via-sky-500 to-cyan-500",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    borderGlow: "hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10",
    benefits: [
      "Ready-to-fly & DIY ball drone kits",
      "Spare batteries, cages & propellers",
      "Access to pilot training guides",
      "League entry eligibility",
    ],
    ctaText: "Explore Drone Kits",
    ctaHref: "/#products",
  },
  {
    id: "schools",
    badge: "Academia & STEM",
    title: "Schools & Colleges",
    subtitle: "STEM curriculum, clubs & campus tournaments",
    description: "Equip your institution with future-ready aerospace education, hands-on drone soccer arenas, and inter-school league participation.",
    icon: FaGraduationCap,
    accentGradient: "from-emerald-600 via-teal-500 to-cyan-600",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    borderGlow: "hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10",
    benefits: [
      "Certified STEM & UAV curriculum",
      "Turnkey indoor netted arena setups",
      "Teacher & trainer certification",
      "Inter-collegiate championship access",
    ],
    ctaText: "Bring to Your Campus",
    ctaHref: "/contact",
  },
  {
    id: "corporates",
    badge: "Team Building",
    title: "Corporate & Brands",
    subtitle: "High-energy employee engagements & activations",
    description: "Host adrenaline-packed drone soccer team-building battles, experiential brand showcases, and employee tech days at your venue or ours.",
    icon: FaBuildingUser,
    accentGradient: "from-purple-600 via-violet-600 to-indigo-600",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200",
    borderGlow: "hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10",
    benefits: [
      "Custom corporate team tournaments",
      "Zero experience required for staff",
      "Branded arenas & live scoreboards",
      "Turnkey setup with pro referees",
    ],
    ctaText: "Plan Corporate Event",
    ctaHref: "/contact",
  },
  {
    id: "venues",
    badge: "Arenas & Turf Owners",
    title: "Turfs & Venues",
    subtitle: "Monetize indoor courts & sports clubs",
    description: "Transform your unused court hours into high-revenue tech sports arenas with modular, 2-hour deployable netted drone soccer systems.",
    icon: MdOutlineStadium,
    accentGradient: "from-amber-600 via-orange-500 to-rose-500",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    borderGlow: "hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10",
    benefits: [
      "Purchase or revenue-share lease models",
      "Pack-down / set-up under 2 hours",
      "Attract youth, techies & gamers",
      "Complete operations & referee manual",
    ],
    ctaText: "Monetize Your Venue",
    ctaHref: "/contact",
  },
];

export default function WhereDoYouFitIn() {
  return (
    <section id="where-you-fit" className="w-full bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight text-slate-950 mb-5">
            Where Do You Fit In?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Kit buyer, school, corporate, or venue : choose your path and get started with just one click.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {paths.map((path) => {
            const Icon = path.icon;

            return (
              <div
                key={path.id}
                className={`group relative bg-white hover:bg-slate-50/50 border border-slate-200/80 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-sm ${path.borderGlow}`}
              >
                <div>
                  {/* Top Badge & Custom Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 border ${path.iconBg} transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                      <Icon className="w-7 h-7 transition-transform duration-300" />
                    </div>
                    <span className="text-[13px] font-semibold tracking-wide px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                      {path.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2 group-hover:text-blue-700 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4 leading-snug">
                    {path.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {path.description}
                  </p>

                  {/* Benefits List */}
                  <div className="border-t border-slate-100 pt-5 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Included Highlights
                    </p>
                    <ul className="space-y-2.5">
                      {path.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start text-xs sm:text-[13px] text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA Button */}
                <Link
                  href={path.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${path.accentGradient} hover:opacity-95 transition-all shadow-md group/btn`}
                >
                  <span>{path.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

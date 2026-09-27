"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

interface SubItem {
  name: string;
  href: string;
  description: string;
  tag: string;
  badge?: string;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  ctaTitle?: string;
  ctaDesc?: string;
  ctaBtn?: string;
  ctaHref?: string;
  items?: SubItem[];
}

const navigationData: NavItem[] = [
  { name: "Home", href: "#home" },
  {
    name: "Drone Sports",
    href: "#drone-sports",
    hasDropdown: true,
    ctaTitle: "Ready to take flight in competitive sports?",
    ctaDesc: "Join Asia Drone Flying Club's official league and training programs across Kerala.",
    ctaBtn: "REGISTER NOW",
    ctaHref: "#contact",
    items: [
      {
        name: "Drone Soccer",
        href: "#drone-soccer",
        tag: "FIDA & Keralan Leangkldwlgkhgue",
        description: "Fast-paced indoor ball-drone team sport with full protective cages and radio control precision.",
      },
      {
        name: "FPV Racing",
        href: "#fpv-racing",
        tag: "High-Speed Agility",
        description: "Adrenaline-fueled first-person-view obstacle track racing with custom tuned micro & 5-inch quads.",
      },
      {
        name: "Drone Flying",
        href: "#drone-flying",
        tag: "Pilot Skills & Fun",
        description: "Precision obstacle navigation, freestyle maneuvers, and recreational group fly-in excursions.",
      },
      {
        name: "Drone Competitions",
        href: "#drone-competitions",
        tag: "Championships & Cups",
        description: "Annual state-level and inter-college UAV tournaments, obstacle courses, and speed challenges.",
      },
      {
        name: "Training",
        href: "#training",
        tag: "DGCA & Sport Certified",
        description: "Hands-on pilot mentoring, simulator labs, and advanced sport flight maneuvers from veteran pilots.",
      },
    ],
  },
  {
    name: "Products",
    href: "#products",
    hasDropdown: true,
    ctaTitle: "Need custom UAV gear or build kits?",
    ctaDesc: "Explore genuine drone kits, flight controllers, transmitters, and FPV goggles tested by our pilots.",
    ctaBtn: "VIEW STORE",
    ctaHref: "#contact",
    items: [
      {
        name: "FPV Racing Drones",
        href: "#products-fpv",
        tag: "Pro RTF & BNF",
        description: "Carbon fiber frames, brushless motors, and digital HD video transmission systems.",
      },
      {
        name: "Drone Soccer Spheres",
        href: "#products-soccer",
        tag: "Certified Spheres",
        description: "Class 20 & Class 40 protective cage drones engineered for high-impact indoor matches.",
      },
      {
        name: "DIY STEM & Training Kits",
        href: "#products-kits",
        tag: "Education",
        description: "Complete build kits with solder pads, ESCs, and guided assembly manuals for students.",
      },
      {
        name: "Goggles & Transmitters",
        href: "#products-gear",
        tag: "Radio & Video",
        description: "ELRS / Crossfire transmitters, HD FPV goggles, lipo batteries, and field chargers.",
      },
    ],
  },
  {
    name: "Events",
    href: "#events",
    hasDropdown: true,
    ctaTitle: "Experience the thrill of live events!",
    ctaDesc: "Book seats for state-wide fly-ins, weekend racing meets, and school drone expos.",
    ctaBtn: "SEE CALENDAR",
    ctaHref: "#contact",
    items: [
      {
        name: "Kerala Drone Championship",
        href: "#event-championship",
        tag: "Annual Flagship",
        description: "State tournament featuring FPV racing tracks, night glow flights, and cash prizes.",
      },
      {
        name: "Weekend Drone Meetups",
        href: "#event-meetups",
        tag: "Open to All",
        description: "Casual weekend flying sessions, aerial photo-walks, and community pilot meetups.",
      },
      {
        name: "Workshops & Bootcamps",
        href: "#event-workshops",
        tag: "Hands-On",
        description: "3-day intensive workshops covering DGCA rules, assembly, and autonomous missions.",
      },
    ],
  },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);
  const activeNavItem = navigationData.find((item) => item.name === activeDropdown);

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all"
      onMouseLeave={() => {
        setActiveDropdown(null);
        setActiveSubIndex(0);
      }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          {/* Brand / Logo (Left) */}
          <Link href="#home" className="flex items-center gap-3 py-2 group shrink-0">
            <div className="relative h-50 w-44 sm:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image src="/logo.png" alt="Asia Drone Flying Club Kerala by Asia Softlab India" fill priority className="object-contain object-left" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationData.map((item) => {
              const isHovered = activeDropdown === item.name;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative py-6"
                    onMouseEnter={() => {
                      setActiveDropdown(item.name);
                      setActiveSubIndex(0);
                    }}
                  >
                    <button
                      type="button"
                      className={`group relative flex items-center gap-1.5 px-4 py-2 text-[17px] font-medium tracking-normal cursor-pointer transition-colors ${
                        isHovered
                          ? "text-blue-700"
                          : "text-slate-800 hover:text-blue-700"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isHovered ? "rotate-180 text-blue-700" : "text-slate-500"
                        }`}
                      />
                      {/* Underline hover effect */}
                      <span
                        className={`absolute left-4 right-4 bottom-0.5 h-0.5 bg-blue-700 rounded-full transition-transform duration-300 ease-out origin-left ${
                          isHovered ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setActiveDropdown(null)}
                  className="group relative px-4 py-2 text-[17px] font-medium tracking-normal text-slate-800 hover:text-blue-700 transition-colors"
                >
                  <span>{item.name}</span>
                  {/* Underline hover effect */}
                  <span className="absolute left-4 right-4 bottom-0.5 h-0.5 bg-blue-700 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-sm font-bold tracking-widest uppercase text-white bg-slate-950 hover:bg-blue-700 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>

      {/* Phenomenon-style Mega Dropdown Panel */}
      {activeNavItem && activeNavItem.items && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl shadow-slate-900/15 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Promo / CTA Box */}
              <div className="col-span-12 lg:col-span-3 flex flex-col justify-between p-7 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-blue-700">
                    {activeNavItem.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
                    {activeNavItem.ctaTitle || "Ready to explore the skies?"}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {activeNavItem.ctaDesc}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href={activeNavItem.ctaHref || "#contact"}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-orange-600 hover:bg-orange-500 shadow-md shadow-orange-600/20 transition-all hover:-translate-y-0.5"
                  >
                    <span>{activeNavItem.ctaBtn || "LET'S TALK"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Middle Submenu List */}
              <div className="col-span-12 lg:col-span-4 flex flex-col justify-center space-y-1 py-1">
                {activeNavItem.items.map((sub, idx) => {
                  const isSelected = activeSubIndex === idx;

                  return (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onMouseEnter={() => setActiveSubIndex(idx)}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all ${
                        isSelected
                          ? "text-blue-700 bg-blue-50/80 translate-x-1"
                          : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-base sm:text-lg">{sub.name}</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-all duration-200 ${
                          isSelected
                            ? "opacity-100 translate-x-0 text-blue-700"
                            : "opacity-0 -translate-x-2 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Right Interactive Preview Card */}
              <div className="col-span-12 lg:col-span-5 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white flex flex-col justify-between shadow-inner min-h-[260px]">
                {/* Glow highlight */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-sky-300">
                    <span>{activeNavItem.items[activeSubIndex]?.tag}</span>
                  </div>

                  <h4 className="text-2xl font-black tracking-tight text-white">
                    {activeNavItem.items[activeSubIndex]?.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                    {activeNavItem.items[activeSubIndex]?.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 flex items-center justify-between border-t border-white/10">
                  <span className="text-[11px] font-medium text-slate-400">
                    Asia Drone Flying Club Kerala
                  </span>
                  <Link
                    href={activeNavItem.items[activeSubIndex]?.href || "#contact"}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

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
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Drone Sports",
    href: "/#where-you-fit",
    hasDropdown: true,
    ctaTitle: "Ready to take flight in competitive sports?",
    ctaDesc: "Join Asia Drone Flying Club's official league and training programs across Kerala.",
    ctaBtn: "REGISTER NOW",
    ctaHref: "/contact",
    items: [
      {
        name: "Drone Soccer",
        href: "/#drone-soccer",
        tag: "FIDA & Kerala League",
        description: "Fast-paced indoor ball-drone team sport with full protective cages and radio control precision.",
      },
      {
        name: "FPV Racing",
        href: "/#products",
        tag: "High-Speed Agility",
        description: "Adrenaline-fueled first-person-view obstacle track racing with custom tuned micro & 5-inch quads.",
      },
      {
        name: "Drone Flying",
        href: "/#where-you-fit",
        tag: "Pilot Skills & Fun",
        description: "Precision obstacle navigation, freestyle maneuvers, and recreational group fly-in excursions.",
      },
      {
        name: "Drone Competitions",
        href: "/#where-you-fit",
        tag: "Championships & Cups",
        description: "Annual state-level and inter-college UAV tournaments, obstacle courses, and speed challenges.",
      },
      {
        name: "Training",
        href: "/#where-you-fit",
        tag: "DGCA & Sport Certified",
        description: "Hands-on pilot mentoring, simulator labs, and advanced sport flight maneuvers from veteran pilots.",
      },
    ],
  },
  {
    name: "Products",
    href: "/#products",
    hasDropdown: true,
    ctaTitle: "Need custom UAV gear or build kits?",
    ctaDesc: "Explore genuine drone kits, flight controllers, transmitters, and FPV goggles tested by our pilots.",
    ctaBtn: "VIEW STORE",
    ctaHref: "https://asiadronestore.com",
    items: [
      {
        name: "FPV Racing Drones",
        href: "/#products",
        tag: "Pro RTF & BNF",
        description: "Carbon fiber frames, brushless motors, and digital HD video transmission systems.",
      },
      {
        name: "Drone Soccer Spheres",
        href: "/#products",
        tag: "Certified Spheres",
        description: "Class 20 & Class 40 protective cage drones engineered for high-impact indoor matches.",
      },
      {
        name: "DIY STEM & Training Kits",
        href: "/#products",
        tag: "Education",
        description: "Complete build kits with solder pads, ESCs, and guided assembly manuals for students.",
      },
      {
        name: "Goggles & Transmitters",
        href: "/#products",
        tag: "Radio & Video",
        description: "ELRS / Crossfire transmitters, HD FPV goggles, lipo batteries, and field chargers.",
      },
    ],
  },
  { name: "Events", href: "/#where-you-fit" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const activeNavItem = navigationData.find((item) => item.name === activeDropdown);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (itemName: string) => {
    setExpandedMobileItem((prev) => (prev === itemName ? null : itemName));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-slate-200/80"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-200"
      }`}
      onMouseLeave={() => {
        setActiveDropdown(null);
        setActiveSubIndex(0);
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand / Logo (Left) */}
          <Link 
            href="/" 
            onClick={closeMobileMenu}
            className="flex items-center gap-3 py-2 group shrink-0"
          >
            <div className="transition-transform duration-200 group-hover:scale-[1.02]">
              <Image 
                src="/logo.png" 
                alt="Asia Drone Flying Club Kerala by Asia Softlab India" 
                width={270}
                height={102}
                priority
                className="w-36 sm:w-44 md:w-52 lg:w-60 xl:w-64 h-auto object-contain" 
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3 2xl:gap-5">
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
                      className={`group relative flex items-center gap-1.5 px-3.5 xl:px-4 py-2 text-[15px] xl:text-[16px] 2xl:text-[17px] font-semibold tracking-normal cursor-pointer transition-colors ${
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
                        className={`absolute left-3.5 right-3.5 bottom-0.5 h-0.5 bg-blue-700 rounded-full transition-transform duration-300 ease-out origin-left ${
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
                  className="group relative px-3.5 xl:px-4 py-2 text-[15px] xl:text-[16px] 2xl:text-[17px] font-semibold tracking-normal text-slate-800 hover:text-blue-700 transition-colors"
                >
                  <span>{item.name}</span>
                  {/* Underline hover effect */}
                  <span className="absolute left-3.5 right-3.5 bottom-0.5 h-0.5 bg-blue-700 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Hamburger Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-slate-950 hover:bg-blue-700 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              GET IN TOUCH
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Phenomenon-style Mega Dropdown Panel */}
      {activeNavItem && activeNavItem.items && (
        <div className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl shadow-slate-900/15 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 py-8">
            <div className="grid grid-cols-12 gap-6 lg:gap-8 items-stretch">
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
                    <ArrowRight className="w-4 h-4" />
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

              <div className="col-span-12 lg:col-span-5 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-6 text-white flex flex-col justify-between shadow-inner min-h-[260px]">
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
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-full h-[calc(100dvh-80px)] sm:h-[calc(100dvh-96px)] z-50 bg-white border-t border-slate-200 shadow-2xl flex flex-col justify-between overflow-y-auto"
        >
          <div className="px-5 py-6 space-y-2">
            {navigationData.map((item) => {
              if (item.hasDropdown && item.items) {
                const isExpanded = expandedMobileItem === item.name;

                return (
                  <div key={item.name} className="border-b border-slate-100 last:border-none pb-2">
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="w-full flex items-center justify-between py-3 text-left font-bold text-lg text-slate-900 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-blue-700" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-3 pr-2 py-2 space-y-2 bg-slate-50 rounded-xl mb-2">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={closeMobileMenu}
                            className="flex flex-col gap-0.5 py-2.5 px-3 rounded-lg bg-white border border-slate-200/80 shadow-xs active:bg-slate-100 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-900">{sub.name}</span>
                              <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                {sub.tag}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 leading-snug">{sub.description}</p>
                          </Link>
                        ))}
                        
                        {item.ctaHref && (
                          <div className="pt-2">
                            <Link
                              href={item.ctaHref}
                              onClick={closeMobileMenu}
                              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-xs"
                            >
                              <span>{item.ctaBtn || "EXPLORE"}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.name} className="border-b border-slate-100 last:border-none">
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block py-3 font-bold text-lg text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom Quick Actions */}
          <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3 shrink-0">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold tracking-wider uppercase text-white bg-slate-950 hover:bg-blue-700 shadow-md transition-all active:scale-[0.98]"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-slate-500">
              Asia Drone Flying Club Kerala • Official League & Academy
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

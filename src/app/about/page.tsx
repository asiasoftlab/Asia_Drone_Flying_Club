"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Trophy,Target,Sparkles,ShieldCheck,Zap,Users,Award,Compass,ArrowRight,Cpu,GraduationCap,PlaneTakeoff,Globe2,CheckCircle2,} from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "Pioneering UAV Sports",
      title: "Promoting Aerial Esports",
      desc: "Introduced official radio-controlled Drone Soccer and precision racing circuits to youth, students, and drone enthusiasts across Kerala.",
    },
    {
      year: "Industry & STEM Alliance",
      title: "Initiative by Asia Softlab",
      desc: "Backed by software, avionics, and engineering veterans to bridge the gap between academic STEM curricula and real-world aerospace robotics.",
    },
    {
      year: "Arena & League Development",
      title: "Statewide Infrastructure",
      desc: "Constructing transportable cage arenas, DIY pilot workshops, and state-level tournament brackets for schools, colleges, and sports clubs.",
    },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Flight Safety & Accessibility",
      desc: "All training and match spheres operate under 250g within heavy-duty impact-absorbing cages, making flight completely safe for all age groups.",
    },
    {
      icon: GraduationCap,
      title: "Hands-on STEM Education",
      desc: "From basic radio protocols (ELRS) to soldering, ESC tuning, and aerodynamic physics, our programs prepare the next generation of engineers.",
    },
    {
      icon: Trophy,
      title: "Competitive Esports Spirit",
      desc: "Drone Soccer is a team game requiring real-time teamwork, tactical striker maneuvers, and defensive goalie coordination in high-octane 3-minute sets.",
    },
    {
      icon: Users,
      title: "Community & Pilot Mentorship",
      desc: "Connecting beginner hobbyists with DGCA-certified commercial pilots and seasoned competitive racers for guided skill progression.",
    },
  ];

  const pillars = [
    {
      title: "Drone Soccer Leagues",
      badge: "Flagship Sport",
      description:
        "An officially recognized, high-energy aerial sport where teams fly protective ball drones inside a netted arena to score through elevated glowing hoops.",
      highlights: [
        "FIDA rulebook compliant formats (1v1, 3v3, 5v5)",
        "Zero weather dependency with fully indoor setups",
        "Rapid 3-minute fast-paced strategic rounds",
      ],
      image: "/drone-soccer/the-game.jpg",
    },
    {
      title: "FPV & Pilot Academy",
      badge: "Skill Development",
      description:
        "Comprehensive flight training programs covering simulator mastery, micro whoop obstacle tracks, PID tuning, and high-speed FPV freestyle racing.",
      highlights: [
        "Virtual simulator to live track progression",
        "Acro mode control & line-of-sight precision",
        "Electronics diagnostics and soldering labs",
      ],
      image: "/drone-soccer/the-drone.jpg",
    },
    {
      title: "Campus & Corporate Arenas",
      badge: "Infrastructure",
      description:
        "Turnkey pop-up and permanent arena setups for schools, colleges, tech festivals, sports turfs, and corporate team building events.",
      highlights: [
        "Modular impact-resistant safety netting",
        "Electronic goal sensors & live scoreboard integration",
        "Turnkey setup and teardown in under 2 hours",
      ],
      image: "/drone-soccer/the-arena.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20 sm:pb-28">
        {/* Hero Section */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-slate-950 leading-[1.15]">
              Elevating Drone Sports & STEM Innovation in Kerala
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Asia Drone Flying Club (an initiative by <strong className="text-slate-900 font-semibold">Asia Softlab India</strong>) is pioneering the future of aerial esports, hands-on robotics, and competitive Drone Soccer across Kerala and India.
            </p>
          </div>

          {/* Hero Banner Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-8 relative min-h-[320px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <Image
                src="/hero/slide1.jpg"
                alt="Drone Soccer Match Action"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                <span className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">Our Vision</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-white mb-2">
                  Transforming Technology Enthusiasts into Skilled Aerial Athletes
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-normal leading-relaxed">
                  We blend competitive gaming excitement with real aerospace mechanics to build confidence, hand-eye coordination, and technical mastery.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-950 text-white p-8 sm:p-10 rounded-2xl flex flex-col justify-between border border-slate-900 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-sky-300 text-xs font-semibold rounded-md border border-blue-500/30 mb-6">
                  Headquartered in Trivandrum
                </span>
                <h3 className="text-2xl font-serif font-medium text-white mb-4">
                  Innovation Backed by Asia Softlab
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Operating out of Musaliar College of Engineering, Chirayinkeezhu, we work alongside educational institutions, sport centers, and corporate entities to establish certified drone arenas state-wide.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-800/80 mt-8 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">100%</div>
                  <div className="text-xs text-slate-400 mt-1">Safe Indoor Cages</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-sky-400 tracking-tight">&lt;250g</div>
                  <div className="text-xs text-slate-400 mt-1">Micro UAV Standard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & What We Do */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-slate-950 mb-4">
              Our Core Pillars of Excellence
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We provide an integrated ecosystem spanning sports leagues, experiential STEM classrooms, and turn-key sports arena setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-semibold px-2.5 py-1 rounded shadow-xs border border-slate-200/60">
                    {pillar.badge}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif font-semibold text-slate-950 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="mt-auto pt-5 border-t border-slate-100 space-y-2.5">
                    {pillar.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Asia Drone Flying Club (Values Grid) */}
        <section className="bg-slate-50 border-y border-slate-200 py-18 sm:py-24 px-6 sm:px-10 lg:px-16 mb-20 sm:mb-28">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-2 inline-block">
                Why Join Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-slate-950 mb-4">
                Engineered for Passion, Safety & Skills
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you’re a 10-year-old student discovering flight physics or an athlete training for competitive drone tournaments, our club offers everything you need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-xl p-7 shadow-xs hover:border-blue-400 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-slate-950 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Journey / Milestone Story */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-blue-600 font-bold inline-block">
                Our Story & Backing
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-slate-950 leading-tight">
                Empowering Kerala’s Next Generation of Aviators
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modern aviation is shifting rapidly towards autonomous unmanned systems and FPV technologies. At Asia Drone Flying Club, we believe that experiential learning through gamified flight sports is the fastest way to ignite curiosity in engineering and aeronautics.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under the technical backing of <a href="https://asiasoftlab.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Asia Softlab India</a>, we supply certified hardware, maintain standardized arenas, and organize official tournaments designed to spot and cultivate top pilot talents.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 text-white text-xs font-semibold tracking-wider uppercase hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <span>Connect with Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 bg-white p-6 sm:p-7 rounded-xl flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className="px-3.5 py-1.5 bg-blue-50 text-blue-700 border border-blue-200/80 rounded text-xs font-bold uppercase tracking-wider shrink-0">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-950 mb-1.5">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Card Banner */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 rounded-2xl p-8 sm:p-12 lg:p-16 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-xl space-y-3 relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white tracking-tight">
                Ready to Fly With Us?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Join our training batches, register your school or turf for a Drone Soccer arena setup, or inquire about official league matches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-4 bg-white text-slate-950 hover:bg-sky-400 hover:text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors text-center shadow-sm"
              >
                Inquire / Join Club
              </Link>
              <Link
                href="/#drone-soccer"
                className="w-full sm:w-auto px-7 py-4 bg-transparent border border-slate-700 text-white hover:bg-slate-800 font-bold text-xs tracking-wider uppercase transition-colors text-center"
              >
                Explore Drone Soccer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

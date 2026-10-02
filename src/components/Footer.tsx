"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { TbDrone } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 font-sans border-t border-slate-900 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner / CTA */}
      <div className="border-b border-slate-800/70 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/80 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <TbDrone className="w-4 h-4" />
                <span>Next-Gen Aerial Sports</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white mb-3">
                Ready to take flight in competitive drone sports?
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Connect with Kerala’s premier UAV aerospace sports and training hub for school labs, league events, and pilot kits.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative h-16 w-52 bg-white/95 p-2 rounded-sm inline-block">
              <Image
                src="/logo.png"
                alt="Asia Drone Flying Club Kerala"
                fill
                sizes="208px"
                className="object-contain object-left p-1"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Asia Drone Flying Club Kerala (an initiative by Asia Softlab India) is the state’s foremost UAV organization dedicated to Drone Soccer, FPV competitive racing, STEM education, and professional pilot mentorship.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 border border-slate-800 transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 border border-slate-800 transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 border border-slate-800 transition-colors"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-400 border border-slate-800 transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-blue-600 pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#drone-soccer" className="hover:text-white transition-colors">
                  Drone Soccer
                </Link>
              </li>
              <li>
                <Link href="/#where-you-fit" className="hover:text-white transition-colors">
                  Where You Fit In
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  Kits & Products
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Drone Sports & Labs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-blue-600 pl-2.5">
              Programs & Labs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/#where-you-fit" className="hover:text-white transition-colors">
                  School STEM Labs
                </Link>
              </li>
              <li>
                <Link href="/#where-you-fit" className="hover:text-white transition-colors">
                  Collegiate Championships
                </Link>
              </li>
              <li>
                <Link href="/#where-you-fit" className="hover:text-white transition-colors">
                  Corporate Team Battles
                </Link>
              </li>
              <li>
                <Link href="/#where-you-fit" className="hover:text-white transition-colors">
                  Venue & Turf Arena Lease
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  FIDA Class 20 Spheres
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  FPV Race Drones & Goggles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-blue-600 pl-2.5">
              Headquarters
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Musaliar College of Engineering, Chirayinkeezhu, Thiruvananthapuram, Kerala 695142
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="tel:+917012147575" className="hover:text-white transition-colors font-medium">
                  +91 7012147575
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:info@asiadroneflyingclub.com" className="hover:text-white transition-colors">
                  info@asiadroneflyingclub.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-black/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Asia Drone Flying Club Kerala. Initiative by Asia Softlab India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/#faq" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#faq" className="hover:text-slate-400 transition-colors">
              Terms & Safety Guidelines
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

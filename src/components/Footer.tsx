"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TbDrone } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100 text-slate-800 font-sans border-t border-slate-200 shadow-sm relative overflow-hidden">
      {/* Decorative Subtle Background Accents */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="max-w-10xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center group">
              <div className="transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/logo.png"
                  alt="Asia Drone Flying Club Kerala by Asia Softlab India"
                  width={270}
                  height={102}
                  className="w-56 sm:w-64 md:w-72 h-auto object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Asia Drone Flying Club Kerala (an initiative by{" "}
              <a
                href="https://asiasoftlab.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
              >
                Asia Softlab India
              </a>
              ) is the state’s foremost UAV organization dedicated to Drone Soccer, FPV competitive racing, STEM education, and professional pilot mentorship.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white text-[#E4405F] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-pink-500/20"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white text-[#FF0000] hover:bg-[#FF0000] hover:text-white border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-red-500/20"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/20"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-sky-600/20"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white text-slate-900 hover:bg-black hover:text-white border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-900/20"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-l-2 border-blue-600 pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#drone-soccer" className="hover:text-blue-600 transition-colors">
                  Drone Soccer
                </Link>
              </li>
              <li>
                <Link href="/#where-you-fit" className="hover:text-blue-600 transition-colors">
                  Where You Fit In
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-blue-600 transition-colors">
                  Kits & Products
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Drone Sports & Labs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-l-2 border-blue-600 pl-2.5">
              Programs & Labs
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li>
                <Link href="/#where-you-fit" className="hover:text-blue-600 transition-colors">
                  School STEM Labs
                </Link>
              </li>
              <li>
                <Link href="/#where-you-fit" className="hover:text-blue-600 transition-colors">
                  Collegiate Championships
                </Link>
              </li>
              <li>
                <Link href="/#where-you-fit" className="hover:text-blue-600 transition-colors">
                  Corporate Team Battles
                </Link>
              </li>
              <li>
                <Link href="/#where-you-fit" className="hover:text-blue-600 transition-colors">
                  Venue & Turf Arena Lease
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-blue-600 transition-colors">
                  FIDA Class 20 Spheres
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-blue-600 transition-colors">
                  FPV Race Drones & Goggles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-l-2 border-blue-600 pl-2.5">
              Headquarters
            </h4>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Musaliar College of Engineering, Chirayinkeezhu, Thiruvananthapuram, Kerala, India 695142
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <a href="tel:+917012147575" className="hover:text-blue-600 transition-colors font-medium text-slate-800">
                  +91 7012147575
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href="mailto:info@asiadroneflyingclub.com" className="hover:text-blue-600 transition-colors">
                  info@asiadroneflyingclub.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200/80 bg-white/70 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Asia Drone Flying Club Kerala. Initiative by{" "}
            <a
              href="https://asiasoftlab.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Asia Softlab India
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#faq" className="hover:text-blue-600 transition-colors">
              Terms & Safety
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

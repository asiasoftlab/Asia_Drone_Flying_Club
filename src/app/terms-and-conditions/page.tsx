"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, ArrowRight } from "lucide-react";

export default function TermsAndConditionsPage() {
  const lastUpdated = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const termsSections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          <p>
            By accessing or using the website, registering for flight batches, booking Drone Soccer arenas, purchasing DIY STEM kits, or participating in tournaments organized by <strong>Asia Drone Flying Club Kerala</strong> (an initiative by <strong>Asia Softlab India</strong>), you agree to comply with and be bound by these Terms and Conditions.
          </p>
          <p>
            If you do not agree to these terms, please do not use our services, enter our physical flight arenas, or register as a club pilot.
          </p>
        </div>
      ),
    },
    {
      title: "2. Membership & Pilot Eligibility",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong className="text-slate-900">Age Requirements:</strong> Participants aged 10 and above are eligible for recreational Drone Soccer and STEM labs. Participants under 18 years must have consent from a parent, legal guardian, or authorized institution representative.</li>
            <li><strong className="text-slate-900">Account Accuracy:</strong> Members agree to provide accurate, up-to-date personal details when registering for league matches, training workshops, or purchasing gear.</li>
            <li><strong className="text-slate-900">Code of Conduct:</strong> Pilots and visitors must observe sportspersonship, respect referees/instructors, and refrain from abusive language, unsportsmanlike piloting, or intentional destruction of arena gear.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Flight Safety & Arena Regulations",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          <p>
            Safety is our highest priority across all indoor and outdoor drone operations:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong className="text-slate-900">Enclosed Flight:</strong> Drone Soccer spherical drones and micro quads must strictly be operated inside designated netted cages or approved indoor flying zones.</li>
            <li><strong className="text-slate-900">Equipment Inspection:</strong> Pilots using personal drones or DIY builds must pass safety inspections by our certified mentors before entering competition arenas.</li>
            <li><strong className="text-slate-900">DGCA & Local Compliance:</strong> All outdoor flight training excursions strictly abide by Directorate General of Civil Aviation (DGCA) drone rules and local airspace zoning laws.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Bookings, Payments & Cancellation Policy",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong className="text-slate-900">Session Bookings:</strong> Arena slots, corporate battles, and training batches are confirmed upon receipt of designated fees.</li>
            <li><strong className="text-slate-900">Rescheduling & Cancellations:</strong> Session rescheduling requests must be submitted at least 24 hours in advance. Cancellations made with less than 24 hours notice may be subject to a slot-retention fee.</li>
            <li><strong className="text-slate-900">Institutional Contracts:</strong> School STEM lab setup and corporate activation contracts follow milestone agreements specified on official signed invoices.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Hardware Procurement & Warranty",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          <p>
            All certified Drone Soccer balls, FPV quads, transmitters, and STEM DIY kits distributed by Asia Drone Flying Club undergo bench testing prior to dispatch:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong className="text-slate-900">Defect Warranty:</strong> Hardware is covered against manufacturing defects for 7 days upon delivery.</li>
            <li><strong className="text-slate-900">Wear & Crash Damage:</strong> Due to the high-impact nature of competitive drone sports, damage incurred from pilot crashes, improper battery charging, or unauthorized modifications is excluded from warranty. Genuine replacement parts and repair assistance remain accessible through our workshop.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Intellectual Property Rights",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          <p>
            All logos, branding, curriculum modules, handbook content, website media, and tournament trademarks associated with <strong>Asia Drone Flying Club Kerala</strong> and <strong>Asia Softlab India</strong> are protected by intellectual property laws. Reproduction, redistribution, or commercial use without prior written authorization is strictly prohibited.
          </p>
        </div>
      ),
    },
    {
      title: "7. Limitation of Liability & Indemnity",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          <p>
            While our ball drones feature 360° protective impact cages and high safety margins, participants acknowledge that aerial robotics and competitive tech sports carry inherent active sports risks.
          </p>
          <p>
            Asia Drone Flying Club Kerala, Asia Softlab India, partner educational institutions, and event sponsors shall not be held liable for indirect, incidental, or consequential damages resulting from unauthorized equipment usage or failure to follow instructor safety guidelines.
          </p>
        </div>
      ),
    },
    {
      title: "8. Amendments to Terms",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
          <p>
            We reserve the right to revise or update these Terms and Conditions as our programs, league regulations, and technological offerings expand. Changes become effective immediately upon publication on this page with an updated timestamp.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24">
        {/* Header / Hero Section */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-5xl mx-auto mb-10 sm:mb-14">
          <div className="text-center space-y-3 sm:space-y-4">
            <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-1">
              Legal & Safety Governance
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-slate-950">
              Terms & Conditions
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
              Please read these terms and conditions carefully before registering, participating in league tournaments, or procuring UAV equipment with Asia Drone Flying Club Kerala.
            </p>

            <div className="text-xs text-slate-400 pt-1 font-medium">
              Last Updated: <span className="text-slate-700 font-semibold">{lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-16 max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Quick Notice Banner */}
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
            <div className="p-2.5 sm:p-3 bg-blue-600 text-white rounded-xl shrink-0 shadow-xs">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-950">
                Key Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By participating in Asia Drone Flying Club training, arena activities, or purchasing equipment, you agree to our safety regulations, pilot codes of conduct, and service guidelines.
              </p>
            </div>
          </div>

          {/* Terms Accordion / Cards */}
          <div className="space-y-4 sm:space-y-5">
            {termsSections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 md:p-8 shadow-xs hover:border-slate-300 transition-colors"
              >
                <h2 className="text-base sm:text-xl font-serif font-semibold text-slate-950 mb-3 sm:mb-4">
                  {section.title}
                </h2>

                <div className="pt-2 border-t border-slate-100">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact / Help Card */}
          <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-900 shadow-xl space-y-5 sm:space-y-6 mt-8">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-white">
                Questions Regarding Our Terms?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                If you have any questions or clarifications regarding our safety regulations, institutional agreements, or pilot memberships, please reach out to our legal and support team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Email Desk</span>
                <p className="text-xs sm:text-sm font-semibold text-sky-400 break-all">info@asiadroneflyingclub.com</p>
                <p className="text-[11px] text-slate-400">info@asiasoftlab.in</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Call / Helpline</span>
                <p className="text-xs sm:text-sm font-semibold text-white">+91 7012147575</p>
                <p className="text-[11px] text-slate-400">Mon - Sat (9:30 AM - 5:30 PM IST)</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Musaliar College of Engineering, Chirayinkeezhu, Thiruvananthapuram, Kerala, India - 695142
                </p>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-sky-400 transition-colors rounded-xl shadow-xs active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 text-slate-200 font-medium text-xs tracking-wider uppercase hover:bg-slate-800 transition-colors rounded-xl active:scale-[0.98]"
              >
                <span>View Privacy Policy</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

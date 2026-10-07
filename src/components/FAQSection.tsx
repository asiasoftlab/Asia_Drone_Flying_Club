"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "gameplay" | "kits" | "institutions";
}

const faqData: FAQItem[] = [
  {
    category: "general",
    question: "Do I need a DGCA drone pilot license to play Drone Soccer?",
    answer:
      "No! Official Drone Soccer ball drones weigh under 250g (Micro/Nano category) and operate within enclosed indoor arenas. They do not require DGCA registration, UIN, or Remote Pilot Certificates to fly.",
  },
  {
    category: "general",
    question: "Is Drone Soccer safe for children and beginners?",
    answer:
      "Yes, 100%. The quadcopter and high-speed propellers are fully enclosed inside a 360° impact-resistant protective spherical cage. Even upon direct contact, hands and fingers cannot reach the spinning blades.",
  },
  {
    category: "gameplay",
    question: "How does a standard Drone Soccer match work?",
    answer:
      "A regulation match consists of 3 sets lasting 3 minutes each. Two opposing teams maneuver their ball drones inside a netted arena, attempting to navigate their designated 'Striker' drone through the opponent's suspended goal hoop while defenders block attacks.",
  },
  {
    category: "gameplay",
    question: "Can we set up an arena indoors in our sports hall or auditorium?",
    answer:
      "Absolutely. Our standard (10 × 20 × 10 ft) and compact (10 × 10 × 10 ft) netted arenas are designed for modular indoor installation. They require zero structural modification and can be set up or packed down in under 2 hours.",
  },
  {
    category: "institutions",
    question: "How can schools and colleges integrate Drone Soccer into STEM curriculum?",
    answer:
      "We provide turnkey educational packages including hands-on DIY drone assembly kits, certified UAV aerospace curricula, trainer/faculty certifications, and entry pathways into national and collegiate championships.",
  },
  {
    category: "institutions",
    question: "Do you offer corporate team building and private tournament activations?",
    answer:
      "Yes. We organize turnkey corporate drone battles, experiential employee team-building events, and brand showcase activations with complete setup, referees, live digital scoreboards, and coaching staff.",
  },
  {
    category: "kits",
    question: "What comes included in a Drone Soccer Kit?",
    answer:
      "Standard kits include the certified spherical ball drone (with brushless motors and RGB team LED indicators), 2.4GHz digital radio transmitter, rechargeable LiPo batteries with high-speed multi-chargers, and spare replacement parts.",
  },
  {
    category: "kits",
    question: "Are replacement parts and repair assistance readily available?",
    answer:
      "Yes, we stock complete replacement components including protective cages, brushless motors, flight controllers, and batteries, backed by technical support and workshop guides.",
  },
];

const categoryTabs = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General & Safety" },
  { id: "gameplay", label: "Game & Arenas" },
  { id: "institutions", label: "Schools & Corporates" },
  { id: "kits", label: "Kits & Gear" },
];

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs =
    activeTab === "all"
      ? faqData
      : faqData.filter((item) => item.category === activeTab);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section 
      id="faq" 
      className="w-full bg-slate-50/50 text-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-slate-950 mb-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto px-2">
            Everything you need to know about drone soccer, safety compliance, arena setup, and kit procurement.
          </p>
        </div>

        {/* Filter Categories (Touch-scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setOpenIndex(null);
              }}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? "bg-slate-950 text-white font-semibold shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 py-3.5 sm:px-6 sm:py-4.5 flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-500 shrink-0">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions helper card */}
        <div className="mt-8 sm:mt-12 text-center bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-7 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
            Still have questions about drone soccer or programs?
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 mb-4 max-w-md mx-auto">
            Our team is happy to guide you with live demonstrations, venue measurements, and bulk program quotes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-blue-700 transition-colors shadow-xs active:scale-[0.98]"
          >
            Contact Our Support Team
          </Link>
        </div>
      </div>
    </section>
  );
}

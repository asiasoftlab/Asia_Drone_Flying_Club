"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, FileText, Database, UserCheck, ArrowRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const sections = [
    {
      title: "1. Information We Collect", 
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
          <p>
            We collect personal information that you voluntarily provide to us when registering for training batches, entering Drone Soccer competitions, booking arena slots, purchasing kits, or submitting inquiries via our web portal.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong className="text-slate-900">Personal Details:</strong> Name, email address, phone/WhatsApp number, age/DOB (for youth tournament age brackets), and institutional/organization affiliation.</li>
            <li><strong className="text-slate-900">Flight & Pilot Records:</strong> Membership status, simulator hours, flight log summaries, and league tournament rankings.</li>
            <li><strong className="text-slate-900">Transactional Information:</strong> Payment references and invoice records for training fees, arena bookings, or hardware procurement. (We do not store full credit/debit card numbers on our servers; payments are processed via secured PCI-compliant gateways).</li>
            <li><strong className="text-slate-900">Technical Logs:</strong> IP address, device browser type, page interaction metrics, and cookies to improve browsing experience and website speed.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: Database,
      title: "2. How We Use Your Information",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
          <p>
            Your information is strictly utilized to deliver high-quality training and club operations, including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Scheduling flight sessions, arena bookings, and STEM workshops.</li>
            <li>Issuing certificates of completion, league passes, and pilot badge credentials.</li>
            <li>Responding to customer support tickets and corporate event requests.</li>
            <li>Sending match schedules, tournament brackets, safety advisories, and service updates.</li>
            <li>Ensuring regulatory compliance with applicable Indian civil aviation (DGCA) and club safety guidelines.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: Lock,
      title: "3. Data Security & Storage",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
          <p>
            We implement industry-standard encryption, SSL protocols, and restricted role-based database access to safeguard your personal data from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p>
            Our infrastructure is maintained in secure cloud data centers with automated monitoring and periodic security audits supported by our parent engineering team at <strong>Asia Softlab India</strong>.
          </p>
        </div>
      ),
    },
    {
      icon: UserCheck,
      title: "4. Information Sharing & Third Parties",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
          <p>
            <strong>We do not sell, rent, or trade your personal information</strong> to third-party advertisers. We may only disclose data under the following limited circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong className="text-slate-900">Authorized Service Providers:</strong> Trusted partners who assist in processing transactions, delivering hardware kits, or hosting email dispatchers under strict confidentiality agreements.</li>
            <li><strong className="text-slate-900">Legal & Safety Mandates:</strong> When mandated by applicable law, court order, or governmental regulations to safeguard pilot safety and arena security.</li>
            <li><strong className="text-slate-900">Tournament Affiliations:</strong> Player names and club aliases for official leaderboard publishing in recognized Drone Soccer tournaments.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: ShieldCheck,
      title: "5. Youth & Student Privacy",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
          <p>
            Drone Soccer and STEM training programs welcome students aged 10 and above. For participants under 18 years of age, registration must be authorized by a parent, legal guardian, or school authority.
          </p>
          <p>
            We limit student data collection strictly to what is necessary for safe flight instruction and official tournament participation.
          </p>
        </div>
      ),
    },
    {
      icon: FileText,
      title: "6. Your Rights & Data Choices",
      content: (
        <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
          <p>
            As a member, pilot, or visitor, you have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Request a copy of the personal information we hold about you.</li>
            <li>Request correction or updating of inaccurate personal details.</li>
            <li>Request deletion of your account and pilot profile from our active database.</li>
            <li>Opt-out of non-essential email notifications or promotional newsletters anytime.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20 sm:pb-28">
        {/* Header / Hero */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-14 sm:mb-16">
          <div className="text-center space-y-4">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-slate-950">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              At Asia Drone Flying Club Kerala (an initiative by Asia Softlab India), we value your trust and are committed to protecting your personal information and flight data.
            </p>

            <div className="text-xs text-slate-400 pt-2 font-medium">
              Last Updated: <span className="text-slate-600 font-semibold">{lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto space-y-10">
          {/* Quick Notice Banner */}
          <div className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
            <div className="p-3 bg-blue-600 text-white rounded-xl shrink-0 shadow-sm">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-950">
                Summary of Our Privacy Commitment
              </h3>
              <p className="text-sm sm:text-sm text-slate-600 leading-relaxed">
                We only collect information necessary to facilitate flight operations, STEM workshops, arena memberships, and safety-compliant sports leagues. We never sell your personal data.
              </p>
            </div>
          </div>

          {/* Policy Sections Grid */}
          <div className="space-y-8">
            {sections.map((section, idx) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-3.5 mb-5">
                    
                    <h2 className="text-xl sm:text-2xl font-serif font-semibold text-slate-950">
                      {section.title}
                    </h2>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact / Data Protection Officer Card */}
          <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-10 border border-slate-900 shadow-xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-medium text-white">
                Questions or Data Privacy Requests?
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                If you have any questions regarding this Privacy Policy, wish to exercise your data rights, or need assistance regarding your club profile, please reach out to our privacy desk.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</span>
                <p className="text-sm font-semibold text-sky-400">info@asiadroneflyingclub.com</p>
                <p className="text-xs text-slate-400">info@asiasoftlab.in</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Call / WhatsApp</span>
                <p className="text-sm font-semibold text-white">+91 7012147575</p>
                <p className="text-xs text-slate-400">Mon - Sat (9:30 AM - 5:30 PM IST)</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Physical Address</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Musaliar College of Engineering, Chirayinkeezhu, Thiruvananthapuram, Kerala , India - 695142
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-semibold text-xs tracking-wider uppercase hover:bg-sky-400 transition-colors rounded-none"
              >
                <span>Submit a Data Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

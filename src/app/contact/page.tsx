"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail,Phone,MapPin,Clock,Send,CheckCircle2,Building2,Sparkles,ArrowRight,ShieldCheck,Compass,} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "drone-soccer",
    organization: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 sm:pb-28">
        {/* Hero / Header Section */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-slate-950 mb-6">
              Get in Touch with Us
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Whether you want to build a drone soccer team, host corporate activations, bring STEM labs to your school, or order custom pilot kits — we’re here to help.
            </p>
          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Details & Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Info Box */}
              <div className="border border-slate-200 bg-slate-50 p-8 sm:p-10 space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-slate-950 mb-2">
                    Contact Information
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Have urgent queries or looking for immediate pilot bookings? Reach out to our flight coordinators directly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-slate-200 text-blue-600 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Headquarters & Production
                      </h4>
                      <p className="text-sm font-medium text-slate-800 leading-relaxed">
                        Asia Drone Flying Club (by Asia Softlab India),<br />
                        Musaliar College of Engineering, Chirayinkeezhu, Thiruvananthapuram, Kerala 695142
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-slate-200 text-blue-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Phone & WhatsApp
                      </h4>
                      <p className="text-sm font-semibold text-slate-900">
                        +91 7012147575


                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">Mon - Sat from 9am to 7pm IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-slate-200 text-blue-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Email Address
                      </h4>
                      <p className="text-sm font-semibold text-slate-900">
                        info@asiadroneflyingclub.com
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">info@asiasoftlab.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white border border-slate-200 text-blue-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Arena Operating Hours
                      </h4>
                      <p className="text-sm text-slate-800">
                        Daily : 09:30 AM – 06:00 PM (Prior Slot Booking Required)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="border border-slate-200 p-8 sm:p-12 bg-white">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-950 mb-2">
                    Send us an Inquiry
                  </h3>
                  <p className="text-sm text-slate-600">
                    Fill out the form below and our flight team will get back to you within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-950">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-slate-700 max-w-md mx-auto">
                      Thank you for reaching out to Asia Drone Flying Club. Our flight instructor will contact you shortly via email or phone.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          interest: "drone-soccer",
                          organization: "",
                          message: "",
                        });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-950 text-white text-xs font-semibold tracking-wider uppercase hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Menon"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-slate-950 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-slate-950 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98470 00000"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-slate-950 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Primary Interest *
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-slate-950 transition-colors"
                        >
                          <option value="drone-soccer">Drone Soccer Arena & Matches</option>
                          <option value="school-stem">School / College STEM Lab Setup</option>
                          <option value="corporate-events">Corporate Team Building & Events</option>
                          <option value="kit-purchase">Kit & Ball Drone Procurement</option>
                          <option value="venue-partner">Monetize Turf / Sports Venue</option>
                          <option value="pilot-training">Pilot Training & League Membership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Organization / College / Venue Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Model Engineering College / ABC Tech Corp"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-slate-950 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Message / Project Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements, arena dimensions, estimated participants, or kit inquiries..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-slate-950 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-slate-950 hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

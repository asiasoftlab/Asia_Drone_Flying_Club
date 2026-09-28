"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShoppingCart } from "lucide-react";

interface ProductKit {
  id: string;
  category: "all" | "soccer" | "stem" | "fpv" | "arena";
  badge: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  specs: string[];
  inStock: boolean;
  href: string;
}

const categories = [
  { id: "all", label: "All Products & Kits" },
  { id: "soccer", label: "Drone Soccer" },
  { id: "stem", label: "STEM DIY Kits" },
  { id: "fpv", label: "FPV Racing" },
  { id: "arena", label: "Arena & Goals" },
];

const productsData: ProductKit[] = [
  {
    id: "ds-class20",
    category: "soccer",
    badge: "Official Tournament Spec",
    name: "Class 20 Drone Soccer Sphere",
    tagline: "FIDA certified aerodynamic protective ball cage with high-torque brushless motors and programmable RGB team LEDs.",
    price: "₹18,499",
    image: "/products/soccer-drone.jpg",
    specs: ["20cm Diameter Cage", "Under 250g (No DGCA License Required)", "3S LiPo Power + 2 spare batteries", "2.4GHz Digital Transmitter included"],
    inStock: true,
    href: "#products",
  },
  {
    id: "stem-builder",
    category: "stem",
    badge: "Curriculum Ready",
    name: "Skyway STEM UAV Builder Kit",
    tagline: "Comprehensive hands-on educational kit designed for school robotics labs, student workshops, and beginner builders.",
    price: "₹12,999",
    image: "/products/stem-diy.jpg",
    specs: ["Modular Solderless Frame", "Integrated Betaflight FC + 4in1 ESC", "Step-by-step 40-page illustrated handbook", "Safe Ducted Propeller Guards"],
    inStock: true,
    href: "#products",
  },
  {
    id: "fpv-speed-pro",
    category: "fpv",
    badge: "Pro Competition Grade",
    name: "Vortex 5-inch FPV Race Bundle",
    tagline: "Ultra-fast carbon fiber freestyle & obstacle race quadcopter paired with low-latency HD FPV video goggles and radio transmitter.",
    price: "₹34,500",
    image: "/products/fpv-racing.jpg",
    specs: ["140+ km/h top speed", "HD Digital Video Transmission", "ELRS 2.4GHz Telemetry Link", "Pre-tuned by pro club pilots"],
    inStock: true,
    href: "#products",
  },
  {
    id: "arena-target-rings",
    category: "arena",
    badge: "Turnkey Arena Tech",
    name: "Interactive LED Drone Goal Hoop & Netting",
    tagline: "Competition-grade illuminated goal ring with automatic infrared sensor hit-counter, audio buzzer, and safety enclosure nets.",
    price: "₹45,000",
    image: "/products/arena-rings.jpg",
    specs: ["Wireless Digital Scoreboard link", "High-visibility dual LED ring rings", "Quick-mount clamp rigging system", "Indoor & outdoor portable stand"],
    inStock: true,
    href: "#products",
  },
];

export default function KitsAndProducts() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? productsData
      : productsData.filter((item) => item.category === activeCategory);

  return (
    <section id="products" className="w-full bg-white text-slate-900 py-24 sm:py-32 px-6 sm:px-10 lg:px-16 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal tracking-tight text-slate-950 mb-4 leading-tight">
              Kits & Products
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Certified drone soccer balls, educational build kits, and FPV championship racing gear tested and certified by Asia Drone Flying Club.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-950 text-white hover:bg-blue-700 transition-colors shadow-md"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Bulk Institution Inquiry</span>
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-slate-950 text-white font-semibold shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200 border border-slate-200/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-xl bg-white hover:bg-slate-50/50 border border-slate-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div>
                {/* Product Image */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 text-[11px] font-semibold shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-950 group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {product.tagline}
                  </p>

                  {/* Specs List */}
                  <div className="border-t border-slate-100 pt-4 space-y-2 mb-2">
                    {product.specs.map((spec, sIndex) => (
                      <div key={sIndex} className="flex items-start text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 mt-4">
                <Link
                  href={product.href}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-xs sm:text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-950 hover:text-white border border-slate-200 hover:border-transparent transition-all duration-200 group/btn shadow-sm"
                >
                  <span>Request Product Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

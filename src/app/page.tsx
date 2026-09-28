"use client";

import Navbar from "@/components/Navbar";
import HeroSwiper from "@/components/HeroSwiper";
import WhatIsDroneSoccer from "@/components/WhatIsDroneSoccer";
import WhereDoYouFitIn from "@/components/WhereDoYouFitIn";
import KitsAndProducts from "@/components/KitsAndProducts";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <Navbar />

      <main className="w-full">
        <HeroSwiper />
        <WhatIsDroneSoccer />
        <WhereDoYouFitIn />
        <KitsAndProducts />
      </main>
    </div>
  );
}





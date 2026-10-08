"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  id: number;
  image: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/hero/Slide1.png",
    alt: "Asia Drone Flying Club - ATMOS S Soccer Drone Kit",
  }
];

const SLIDE_DURATION = 4500; // 4.5 seconds per slide

export default function HeroSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMultiple = slides.length > 1;

  const nextSlide = useCallback(() => {
    if (!isMultiple) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [isMultiple]);

  const prevSlide = useCallback(() => {
    if (!isMultiple) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [isMultiple]);

  // Automatic slide interval (only if multiple slides exist)
  useEffect(() => {
    if (!isMultiple) return;

    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex, nextSlide, isMultiple]);

  // Touch handlers for mobile swiping with minimum swipe distance threshold
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMultiple) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMultiple) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMultiple || !touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Carousel"
      className="relative w-full pt-20 sm:pt-24 bg-white select-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full">
        {/* Slides */}
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={slide.id}
              className={`w-full transition-opacity duration-700 ease-in-out ${
                isActive ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <div className="relative w-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={1920}
                  height={960}
                  priority={index === 0}
                  className="w-full h-auto object-cover object-center block"
                  sizes="100vw"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows (Rendered only when multiple slides exist) */}
      {isMultiple && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden sm:flex absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white backdrop-blur-md border border-white/15 hover:border-white/40 transition-all duration-300 cursor-pointer group shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden sm:flex absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/90 hover:text-white backdrop-blur-md border border-white/15 hover:border-white/40 transition-all duration-300 cursor-pointer group shadow-lg active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Bottom Progress / Pagination Indicators */}
          <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group relative h-2 sm:h-2.5 rounded-full transition-all duration-500 overflow-hidden cursor-pointer"
                style={{ width: currentIndex === index ? "32px" : "8px" }}
              >
                <div
                  className={`w-full h-full rounded-full transition-colors duration-300 ${
                    currentIndex === index ? "bg-blue-500 shadow-sm shadow-blue-500/50" : "bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}


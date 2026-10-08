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
  },
  {
    id: 2,
    image: "/hero/Slide2.png",
    alt: "Asia Drone Flying Club - ATMOS S Soccer Drone Kit",
  },
  {
    id: 3,
    image: "/hero/Slide3.png",
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
      className="relative w-full pt-24 sm:pt-28 md:pt-32 bg-white select-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Aspect Ratio Container for Full Responsive Auto Height */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] max-h-[85vh] min-h-[300px] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-contain md:object-cover object-center w-full h-full"
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows (Rendered only when multiple slides exist) */}
      {isMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous Slide"
            className="flex absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next Slide"
            className="flex absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom Progress / Pagination Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className="group relative h-2 sm:h-2.5 rounded-full transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ width: currentIndex === index ? "32px" : "8px" }}
              >
                <div
                  className={`w-full h-full rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-blue-500 shadow-sm" : "bg-white/50 hover:bg-white/80"
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


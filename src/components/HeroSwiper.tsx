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
    image: "/hero/slide1.jpg",
    alt: "Autumn Falling Leaves",
  },
  {
    id: 2,
    image: "/hero/slide2.jpg",
    alt: "Scenic Mountain Lake and Hot Air Balloon",
  },
  {
    id: 3,
    image: "/hero/slide3.jpg",
    alt: "Sunset Over Rocky Coastal Shore",
  },
];


const SLIDE_DURATION = 4000; // 4 seconds per slide

export default function HeroSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Automatic slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <div
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Zoom Effect */}
            <div
              className={`relative w-full h-full transform transition-transform duration-[6000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group"
      >
        <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group"
      >
        <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Bottom Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative h-2.5 rounded-full transition-all duration-500 overflow-hidden cursor-pointer"
            style={{ width: currentIndex === index ? "48px" : "12px" }}
          >
            <div
              className={`w-full h-full rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-blue-500" : "bg-white/30 group-hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

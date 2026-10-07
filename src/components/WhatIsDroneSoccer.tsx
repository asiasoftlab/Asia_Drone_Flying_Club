import Image from "next/image";

interface DroneSoccerCard {
  title: string;
  subtitle: string;
  image: string;
  points: string[];
}

const cardsData: DroneSoccerCard[] = [
  {
    title: "The Game",
    subtitle: "Two teams of 2/3/4/5 compete in a real-time aerial match inside a netted arena.",
    image: "/drone-soccer/the-game.jpg",
    points: [
      "1 match = 3 sets of 3 minutes",
      "Score by flying through the opponent's hoop",
      "5v5, 1v1, and obstacle course formats",
      "Remote-controlled, real-time strategy",
    ],
  },
  {
    title: "The Drone",
    subtitle: "Designed for safe indoor play. No exposed propellers. No flying experience required.",
    image: "/drone-soccer/the-drone.jpg",
    points: [
      "Under 250g - no DGCA registration needed",
      "Fully enclosed protective cage",
      "Safe for ages 10 and above",
      "Crash-resistant for continuous indoor use",
    ],
  },
  {
    title: "The Arena",
    subtitle: "Two size options. No permanent installation. Sets up and packs down in under 2 hours.",
    image: "/drone-soccer/the-arena.jpg",
    points: [
      "Standard: 10 × 20 × 10 ft",
      "Compact: 10 × 10 × 10 ft",
      "Fully indoor - no weather dependency",
      "Available to purchase or rent",
    ],
  },
];

export default function WhatIsDroneSoccer() {
  return (
    <section 
      id="drone-soccer" 
      className="w-full bg-white text-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
            FIDA & Sports Innovation
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-slate-950 mb-3 sm:mb-4">
            What is Drone Soccer?
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-600 leading-relaxed max-w-xl mx-auto px-2">
            A fast-paced indoor sport where teams fly protected drones through a live arena and compete to score goals. No experience needed.
          </p>
        </div>

        {/* 3 Columns Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {cardsData.map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-md"
            >
              {/* Image with rounded corners */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden shadow-xs bg-slate-200 mb-4 sm:mb-5 group border border-slate-100">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105" 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                />
              </div>

              {/* Card Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-slate-950 mb-1.5 sm:mb-2">
                {card.title}
              </h3>

              {/* Subtitle description */}
              <p className="text-xs sm:text-[13px] lg:text-sm font-semibold text-slate-800 leading-relaxed mb-3 sm:mb-4">
                {card.subtitle}
              </p>

              {/* Bullet points */}
              <ul className="space-y-1.5 sm:space-y-2 mt-auto pt-2 border-t border-slate-200/60">
                {card.points.map((point, pIndex) => (
                  <li
                    key={pIndex}
                    className="flex items-start text-[11px] sm:text-xs lg:text-[13px] text-slate-600 font-normal leading-snug"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 mr-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

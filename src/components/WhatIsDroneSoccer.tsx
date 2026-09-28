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
    <section className="w-full bg-white text-slate-900 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-normal tracking-tight text-slate-950 mb-5">
            What is Drone Soccer ?
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] font-medium text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A fast-paced indoor sport where teams fly protected drones through a live arena and compete to score goals. No experience needed.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cardsData.map((card, index) => (
            <div key={index} className="flex flex-col">
              {/* Image with rounded corners */}
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm bg-slate-100 mb-6 group border border-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-slate-950 mb-2">
                {card.title}
              </h3>

              {/* Subtitle description */}
              <p className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug mb-4">
                {card.subtitle}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mt-auto">
                {card.points.map((point, pIndex) => (
                  <li
                    key={pIndex}
                    className="flex items-start text-xs sm:text-sm text-slate-700 font-normal leading-relaxed"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 mr-2.5 flex-shrink-0" />
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

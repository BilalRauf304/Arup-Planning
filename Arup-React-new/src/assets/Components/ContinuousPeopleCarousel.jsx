import React, { useState } from "react";

const peopleData = [
  {
    name: "Corey Wong",
    role: "Transport Consultant",
    img: "/images/image1.png",
    video: "/videos/corey-wong.mp4",
    desc: "My passion is helping people travel more safely and efficiently. I get to tackle these challenges around the world with Arup each day.",
  },
  {
    name: "Alison Kilby",
    role: "Mechanical Engineer",
    img: "/images/image1.png",
    video: "/videos/alison-kilby.mp4",
    desc: "I work on buildings nationally and internationally. What I love about working at Arup is the variety in what I do, no two days are the same.",
  },
  {
    name: "Alex Price",
    role: "Project Manager",
    img: "/images/image1.png",
    video: "/videos/alex-price.mp4",
    desc: "As project manager, I recently worked on a building which achieved net zero carbon in operation - a huge step forward for reducing emissions.",
  },
  {
    name: "Chandan Joshi",
    role: "Structural Engineer",
    img: "/images/image1.png",
    video: "/videos/chandan-joshi.mp4",
    desc: "As a structural engineer, I love solving problems! Sometimes it’s quiet design work, sometimes it’s coordination across disciplines.",
  },
  {
    name: "Geffen Oren",
    role: "Sustainability Consultant",
    img: "/images/image1.png",
    video: "/videos/geffen-oren.mp4",
    desc: "I collaborate with engineers from multiple disciplines to address climate change and environmental challenges.",
  },
  {
    name: "Brittany Moffett",
    role: "Resilience Engineer",
    img: "/images/image1.png",
    video: "/videos/brittany-moffett.mp4",
    desc: "I started as a facade engineer and grew into a resilience leader — Arup’s flexibility let me shape my own career path.",
  },
];

export default function ContinuousPeopleCarousel({ speed = 35 }) {
  const [isPaused, setIsPaused] = useState(false);
  const items = [...peopleData, ...peopleData];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <style>{`
        .continuous-carousel { --scroll-duration: ${speed}s; }

        @keyframes continuous-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .continuous-carousel__track {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          animation: continuous-left var(--scroll-duration) linear infinite;
          will-change: transform;
        }

        .paused .continuous-carousel__track,
        .continuous-carousel__container:hover .continuous-carousel__track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 continuous-carousel">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our People
          </h2>
          {/* <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full text-sm sm:text-base hover:bg-gray-800 transition">
            Our Projects →
          </button> */}
        </div>

        {/* Carousel */}
        <div
          className={`continuous-carousel__container relative overflow-hidden ${
            isPaused ? "paused" : ""
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="continuous-carousel__track">
            {items.map((p, i) => (
              <article
                key={i}
                className="group flex-none rounded-2xl overflow-hidden shadow-md bg-white transition-transform duration-300 transform-gpu hover:scale-105"
                style={{ width: "clamp(200px, 25vw, 300px)" }}
              >
                {/* Responsive Image Container */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    // taller on small screens, proportional on desktop
                    height: "clamp(340px, 60vw, 420px)",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay description on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-3 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-xs sm:text-sm leading-snug">{p.desc}</p>
                  </div>
                </div>

                {/* Name + Role */}
                <div className="px-4 py-3 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-700">{p.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
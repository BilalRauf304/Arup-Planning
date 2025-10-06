import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react"; // npm install lucide-react

const videoData = [
  {
    src: "/herovideo1.mp4",
    title: "Modern Architecture",
    desc: "Innovative urban design for sustainable living.",
  },
  {
    src: "/videos/video2.mp4",
    title: "Eco Energy Projects",
    desc: "Building the future with renewable resources.",
  },
  {
    src: "/videos/video3.mp4",
    title: "Smart City Concepts",
    desc: "Integrating AI into everyday city systems.",
  },
  {
    src: "/videos/video4.mp4",
    title: "Futuristic Transport",
    desc: "Transforming mobility with green technology.",
  },
  {
    src: "/videos/video5.mp4",
    title: "Sustainable Housing",
    desc: "Affordable, smart, and energy-efficient homes.",
  },
];

 function VideoSlider() {
  const sliderRef = useRef(null);
  const N = videoData.length;
  const triple = React.useMemo(() => [...videoData, ...videoData, ...videoData], []);
  const START_INDEX = N;

  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const currentIndexRef = useRef(START_INDEX);
  const timerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const FOCUS_DELAY = 5000;
  const TRANSITION_MS = 900;

  // Auto-slide logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const getMetrics = () => {
      const children = slider.children;
      const r0 = children[0].getBoundingClientRect();
      const r1 = children[1].getBoundingClientRect();
      const step = Math.round(r1.left - r0.left);
      return { step, slideWidth: r0.width };
    };

    const setTransform = (withTransition = true) => {
      const { step, slideWidth } = getMetrics();
      const viewportWidth = slider.parentElement.clientWidth;
      const centerOffset = viewportWidth / 2 - slideWidth / 2;
      const translateX = -(currentIndexRef.current * step) + centerOffset;

      slider.style.transition = withTransition
        ? `transform ${TRANSITION_MS}ms ease-in-out`
        : "none";
      slider.style.transform = `translateX(${translateX}px)`;
    };

    const moveNext = () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      currentIndexRef.current += 1;
      setTransform(true);
    };

    const handleTransitionEnd = () => {
      if (currentIndexRef.current >= 2 * N) {
        currentIndexRef.current -= N;
        setTransform(false);
      } else if (currentIndexRef.current < N) {
        currentIndexRef.current += N;
        setTransform(false);
      }

      setActiveIndex(currentIndexRef.current);
      isAnimatingRef.current = false;

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => moveNext(), FOCUS_DELAY);
    };

    setTransform(false);
    timerRef.current = setTimeout(() => moveNext(), FOCUS_DELAY);
    slider.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      clearTimeout(timerRef.current);
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  const moveManually = (direction) => {
    clearTimeout(timerRef.current);
    currentIndexRef.current += direction === "next" ? 1 : -1;

    const slider = sliderRef.current;
    const children = slider.children;
    const r0 = children[0].getBoundingClientRect();
    const r1 = children[1].getBoundingClientRect();
    const step = Math.round(r1.left - r0.left);
    const viewportWidth = slider.parentElement.clientWidth;
    const centerOffset = viewportWidth / 2 - r0.width / 2;
    const translateX = -(currentIndexRef.current * step) + centerOffset;

    slider.style.transition = `transform ${TRANSITION_MS}ms ease-in-out`;
    slider.style.transform = `translateX(${translateX}px)`;
    setActiveIndex(currentIndexRef.current);
  };

  const handleVideoClick = (index) => {
    clearTimeout(timerRef.current);
    currentIndexRef.current = index;
    const slider = sliderRef.current;
    const children = slider.children;
    const r0 = children[0].getBoundingClientRect();
    const r1 = children[1].getBoundingClientRect();
    const step = Math.round(r1.left - r0.left);
    const viewportWidth = slider.parentElement.clientWidth;
    const centerOffset = viewportWidth / 2 - r0.width / 2;
    const translateX = -(index * step) + centerOffset;
    slider.style.transition = `transform ${TRANSITION_MS}ms ease-in-out`;
    slider.style.transform = `translateX(${translateX}px)`;
    setActiveIndex(index);
  };

  return (
    <section className="w-full bg-white">
      {/* 🔹 Header Section */}
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12">
        {/* Left: Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-wide text-center sm:text-left">
          OUR WORK
        </h2>

        {/* Right: Button */}
        <button className="group mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 py-2 sm:py-3 rounded-full transition-all hover:bg-gray-800">
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            Our Projects
          </span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* 🔹 Slider Section */}
      <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden py-8 sm:py-10 md:py-16">
        <div
          ref={sliderRef}
          className="flex items-start gap-4 sm:gap-6 md:gap-8 transition-transform ease-in-out duration-700"
        >
          {triple.map((video, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                onClick={() => handleVideoClick(i)}
                className={`flex-none flex flex-col items-center cursor-pointer transition-all duration-700 ease-in-out ${
                  isActive ? "z-20" : "z-0"
                }`}
                style={{
                  transform: `scale(${isActive ? 1.25 : 0.85})`,
                  opacity: isActive ? 1 : 0.6,
                  margin: isActive ? "0 1rem" : "0 0.25rem",
                }}
              >
                {/* 🎬 Video */}
                <div
                  className="rounded-xl overflow-hidden bg-black shadow-xl transition-all duration-700 ease-in-out"
                  style={{
                    width: isActive
                      ? "clamp(220px, 40vw, 520px)"
                      : "clamp(160px, 30vw, 360px)",
                    height: isActive
                      ? "clamp(130px, 25vw, 300px)"
                      : "clamp(100px, 20vw, 220px)",
                    boxShadow: isActive
                      ? "0 25px 100px rgba(0,0,0,0.45)"
                      : "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 📝 Text below video */}
                <div
                  className={`mt-4 text-center transform transition-all duration-700 ease-in-out ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-105"
                      : "opacity-50 translate-y-4 scale-95"
                  }`}
                >
                  <h3
                    className={`font-semibold ${
                      isActive
                        ? "text-lg sm:text-2xl md:text-3xl text-gray-900"
                        : "text-sm sm:text-base md:text-lg text-gray-700"
                    }`}
                  >
                    {video.title}
                  </h3>
                  <p
                    className={`mt-1 ${
                      isActive
                        ? "text-xs sm:text-sm md:text-base text-gray-600"
                        : "text-[10px] sm:text-xs md:text-sm text-gray-500"
                    }`}
                  >
                    {video.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gradient Edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[15%] bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[15%] bg-gradient-to-l from-white to-transparent" />

        {/* Navigation Arrows */}
        <button
          onClick={() => moveManually("prev")}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition"
        >
          ❮
        </button>
        <button
          onClick={() => moveManually("next")}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
export default VideoSlider
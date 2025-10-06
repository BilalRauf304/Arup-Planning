import React from "react";
import VideoSlider from "./VideoSlider";
import ContinuousPeopleCarousel from "./ContinuousPeopleCarousel";

function HeroSection() {
  return (
    <>
    <div className=" items-center mt-10  ">
      <h1 className=" ms-2 px-10 font-extralight text-3xl sm:text-4xl lg:text-6xl  max-w-4xl from-neutral-800 mb-4 ">
        We are designing clean energy systems
      </h1>
      {/* Videos Section */}
      <div className=" ms-6  mt-6  max-w-6xl ">
        {/* Video 1 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" lg:ms-7 rounded-2xl border border-blue-700 shadow-lg  "
        >
          <source src="/Videos/herovideo1.mp4"  />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <VideoSlider/>
    <ContinuousPeopleCarousel/>
    </>    
  );
}

export default HeroSection;

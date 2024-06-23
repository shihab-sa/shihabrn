// Import necessary libraries and components
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// RadialProgress Component
function RadialProgress({ value }) {
  return (
    <div
      className="radial-progress"
      style={{
        "--value": value,
        "--size": "10rem",
        "--thickness": "2rem",
      }}
      role="progressbar"
    >
      {value}%
    </div>
  );
}

// Swiper Component
function MySwiper() {
  const [progressValue, setProgressValue] = useState(70);

  const handleSlideChange = (swiper) => {
    // Update progress value based on the active slide index
    const slideIndex = swiper.activeIndex;
    const progressValues = [90, 70, 100, 80, 50]; // Customize these values as needed
    setProgressValue(progressValues[slideIndex]);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center">
      <RadialProgress value={progressValue} />
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper h-40 w-56 rounded-xl flex items-center"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className="flex justify-center items-center bg-violet-600 text-xs font-semibold ">
          Reanimated
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center  bg-violet-600 text-xs font-semibold">
          React Native Skia
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center  bg-violet-600 text-xs font-semibold">
          Expo
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center  bg-violet-600 text-xs font-semibold">
          React Native Doc
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center  bg-violet-600 text-xs font-semibold">
          Zustand
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySwiper;

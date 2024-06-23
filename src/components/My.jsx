// Import necessary libraries and components

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Swiper Component
function MySwiper() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper h-40 w-56 rounded-xl flex items-center"
      >
        <SwiperSlide className="flex justify-center items-center  text-xs font-semibold ">
          Reanimated
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center   text-xs font-semibold">
          React Native Skia
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center   text-xs font-semibold">
          Expo
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center  text-xs font-semibold">
          React Native Doc
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center  text-xs font-semibold">
          Zustand
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySwiper;

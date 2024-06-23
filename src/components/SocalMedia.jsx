// Import necessary libraries and components
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Swiper Component
function SocalMedia() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center cursor-pointer">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper h-40 w-56 rounded-xl flex items-center"
      >
        <SwiperSlide className="flex justify-center items-center  text-6xl font-semibold ">
          <Instagram size={40} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center   text-xs font-semibold">
          <Mail size={40} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center   text-xs font-semibold">
          <FaLinkedin size={40} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center  text-xs font-semibold">
          React Native Doc
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-xs font-semibold">
          Zustand
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SocalMedia;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Avatar from "./Avatar";

function MySweper() {
  return (
    <div className="">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper h-40 w-56 rounded-xl flex items-center"
      >
        <SwiperSlide className="flex justify-center items-center text-lg bg-violet-600">
          <Avatar />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-violet-600">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-violet-600">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-violet-600">
          Slide 4
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySweper;

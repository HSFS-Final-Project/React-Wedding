import React from "react";
import ImgFilter from "../../assets/Filter.png";
import ImgUndangan from "../../assets/Undangan.png";
import ImgSale from "../../assets/Sale.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const Promo = () => {
  return (
    <div className="px-12 lg:px-52">
      <Swiper
        // spaceBetween={50}
        // slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper
        mt-20
        gap-10
        "
      >
        <SwiperSlide>
          <img src={ImgFilter} alt="Filter" class="w-full  rounded-lg shadow-lg  cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgUndangan} alt="Filter" class="w-full rounded-lg shadow-lg  cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgSale} alt="Filter" class="w-full rounded-lg shadow-lg  cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgFilter} alt="Filter" class="w-full rounded-lg shadow-lg  cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgUndangan} alt="Filter" class="w-full rounded-lg shadow-lg  cursor-pointer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgSale} alt="Filter" class="w-full rounded-lg shadow-lg  cursor-pointer" />
        </SwiperSlide>

        {/* <section class="w-full flex flex-wrap justify-center gap-10 mt-20">
          <img src={ImgUndangan} alt="Undangan" class="w-[350px] lg:w-[600px] rounded-lg shadow-lg transform duration-200 hover:scale-110 cursor-pointer" />
          <img src={ImgSale} alt="Sale" class="w-[350px] lg:w-[600px] rounded-lg shadow-lg transform duration-200 hover:scale-110 cursor-pointer" />
        </section> */}
      </Swiper>
    </div>
  );
};

export default Promo;

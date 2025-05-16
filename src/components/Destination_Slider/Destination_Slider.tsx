"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import type { Destinations } from "@/type/type";
import Button from "../Button/Button";

interface SliderProp {
  data: Destinations[];
}

function Destination_Slider({ data }: SliderProp) {
  return (
    <section className="mx-auto">
      <Swiper
        id="slider"
        loop={true}
        slidesPerView={3}
        navigation={true} // Enable navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper "
        breakpoints={{
          0: {
            // For screens 0px and up
            slidesPerView: 1,
            // spaceBetween: 10,
          },
          740: {
            // For screens 768px and up
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1120: {
            // For screens 1024px and up
            slidesPerView: 3,
            spaceBetween: 36,
          },
        }}
      >
        {data.map((slide, id) => (
          <SwiperSlide className="mx-auto " key={id}>
            <div
              className="mx-5 w-[352px] my-10 overflow-hidden rounded-4xl"
              style={{
                boxShadow: "10px 18px 44px #0000000F",
              }}
            >
              <Image width={352} height={460} src={slide.bg_img} alt="" />
              <div className="w-full px-5 pt-5 pb-9">
                <div className="flex-col flex gap-2">
                  <h3 className="px-2 font-bold text-2xl">{slide.name}</h3>
                  <div className="flex gap-1">
                    <Image
                     width={24}
                      height={24}
                      src={slide.location_icon}
                      alt={slide.location_link}
                    />
                    <h3 className="font-bold text-[#888888] text-[16px]">
                      {slide.location}
                    </h3>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col  justify-between ">
                  <div>
                    <h3 className="text-[#FBDA14] font-extrabold text-2xl">
                      {slide.price}
                    </h3>
                    <p className="text-[#B0B0B0]">{slide.person}</p>
                  </div>
                  <div>
                    <Button props={slide.button} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Destination_Slider;

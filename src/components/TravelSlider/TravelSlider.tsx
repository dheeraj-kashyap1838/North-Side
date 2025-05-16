"use client";

import React from "react";
import Image from "next/image";

import type { travel_slider } from "@/type/type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface SliderProp {
  data: travel_slider[];
}

export default function TravelSlider({ data }: SliderProp) {
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        id="travel_slider"
      >
        {data.map((elem, id) => {
          return (
            <SwiperSlide key={id} className="">
              <div className="px-">
                <p className="leading-7 my-4 font-normal text-xl">
                  {elem.text}
                </p>
                <h3 className="font-bold">{elem.name}</h3>
                <div className="bg-[#FEEA39] max-w-[77px] flex justify-center px-5 py-2 gap-2 my-2 rounded-4xl ">
                  <Image width={13} height={12} src={elem.rating_btn.icon} alt="" />
                  <h3>{elem.rating_btn.rating}</h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

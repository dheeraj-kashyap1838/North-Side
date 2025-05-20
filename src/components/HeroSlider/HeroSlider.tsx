"use client";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import Button from "../Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Sliders } from "@/type/type";

interface HeroProp {
  data: Sliders[];
}

export default function HeroSlider({ data }: HeroProp) {
  return (
    <section className="px-3 relative">
      <div className="container max-w-7xl  rounded-2xl overflow-hidden max-h-[70vh] h-[70vh] md:max-h-[650px]  md:h-[650px] lg:max-h-[710px]  lg:h-[710px] mx-auto">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-full"
        >
          {data.map((slide, id) => {
            return (
              <SwiperSlide
                key={id}
                className="rounded-2xl bg-center bg-cover h-full "
                style={{ backgroundImage: `url(${slide.bgImg})` }}
              >
                <div className="bg-black/30 backdrop-invert backdrop-opacity-5 h-full  flex-col flex py-[32px]">
                  <div className="w-[90%] mx-auto flex flex-row  justify-center text-white relative gap-[12px] items-center  ">
                    <div className="basis-1/5 text-center">{slide.offer} </div>
                    <div className="basis-3/5   border bg-white h-0.5"></div>
                    <div className="basis-1/5 text-center">
                      {slide.offerTime}
                    </div>
                  </div>
                  <div className="max-w-[726px] px-4 md:px-0 w-full align-middle flex flex-col lg:gap-10 gap-5 lg:mt-30 md:mt-10 mt-2 md:mx-[76px] mx-auto  text-white">
                    <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold">
                      {slide.heading}
                    </h1>
                    <p className="md:max-w-[604px] md:block hidden w-full   md:text-xl">{slide.qute}</p>
                    <div className="flex gap-7 sm:flex-row flex-col sm:max-w-[55%] md:mt-8">
                      {slide.button.map((elem, id) => {
                        return <Button key={id} props={elem} />;
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

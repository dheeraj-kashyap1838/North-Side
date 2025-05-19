"use client";

import React from "react";
import HomeSection from "../HomeSection/HomeSection";
import Image from "next/image";
import type { InsightsSection } from "@/type/type";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

interface InsightsProp {
  data: InsightsSection;
}

function InsightsSection({ data }: InsightsProp) {
  return (
    <section id="blog" className="md:my-24 my-10 bg-[#FEFDE8] px-3 pt-[72px] pb-[96px] ">
      <div className="container max-w-7xl mx-auto">
        <HomeSection data={data.homeSection} />
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Navigation]}
          id="insight_slider"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            740: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1120: {
              slidesPerView: 3,
              spaceBetween: 36,
            },
          }}
        >
          {data?.insight_slider?.length > 0 &&
            data?.insight_slider?.map((slide, id) => {
              return (
                <SwiperSlide key={id}>
                  <div className="max-w-[352px] mx-auto w-full px-4 pt-4 pb-6 my-3 bg-white shadow-lg rounded-3xl">
                    <Image src={slide.image} width={320} height={228} alt="/" />
                    <h3 className="mt-4 font-bold text-2xl mb-11">
                      {slide.heading}
                    </h3>
                    <div className="flex justify-between">
                      <div className="basis-1/2">
                        <h3 className="font-bold text-base">{slide.name}</h3>
                        <p className="font-medium text-[12px]">{slide.time}</p>
                      </div>
                      <div className="flex gap-[18px]">
                        <div className="flex items-center gap-0.5">
                          <Image
                            width={20}
                            height={17}
                            src={slide.like.icon}
                            alt=""
                          />
                          <p>{slide.like.like_s}</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <Image
                            width={20}
                            height={17}
                            src={slide.comment.icon}
                            alt=""
                          />
                          <p>{slide.comment.comment_s}</p>
                        </div>
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

export default InsightsSection;

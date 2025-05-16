"use client"

import React from "react";
import HomeSection from "../HomeSection/HomeSection";
import type { InsightsSection } from "@/type/type";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";

interface InsightsProp {
  data: InsightsSection;
}

function InsightsSection({ data }: InsightsProp) {
  return (
    <section className="md:my-24 my-10 bg-[#FEFDE8] px-3 pt-[72px] pb-[96px] ">
      <div className="container max-w-7xl mx-auto">
        <HomeSection data={data.homeSection} />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default InsightsSection;

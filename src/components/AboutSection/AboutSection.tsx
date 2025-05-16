// "use client";

import React from "react";
import Image from "next/image";
import HomeSection from "../HomeSection/HomeSection";
import type { About_Section } from "@/type/type";

interface AboutProp {
  data: About_Section;
}

function AboutSection({ data }: AboutProp) {
  return (
    <section className="md:my-24 my-10 px-3">
      <div className="container max-w-7xl mx-auto ">
        <HomeSection data={data.homeSection} />
        <div className="relative">
          <div className="max-w-[1165px] mx-auto h-[303px] relative mt-[205px] rounded-bl-4xl over w-full bg-[#FEFDE8] ">
            <div className="sm:w-[328px] w-[300px]  h-[400px] sm:h-[439px] bottom-0  left-0 overflow-hidden rounded-bl-4xl absolute">
              <Image width={328} height={439}
                className=" top-[49px] left-[-52px] absolute rounded-bl-4xl"
                src={data.section_img.girl}
                alt=""
              />
            </div>
            <div className="w-[524px] h-[510px] md:block hidden bottom-[0px] left-[164px] overflow-hidden absolute">
            <Image width={525} height={510}
                className="absolute top-[50px] left-0 z-10 over rounded-bl-4xl"
                src={data.section_img.tower1}
                alt=""
              />
            </div>
            <Image width={75} height={74}
              className="absolute sm:block hidden top-[215.57px] left-[265.47px] over rounded-bl-4xl"
              src={data.section_img.dots_circle}
              alt=""
            />
            <Image width={89} height={77}
              className=" lg:block hidden  absolute top-[118px] left-[632px] over rounded-bl-4xl"
              src={data.section_img.dots_cube}
              alt=""
            />
            <Image width={233} height={218}
              className="absolute lg:block hidden w-[233.53px] right-[256] bottom-[-39px]"
              src={data.section_img.bag}
              alt=""
            />
            <Image width={303} height={442}
              className="absolute lg:block hidden right-[-50px] bottom-[-48px]"
              src={data.section_img.tower2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

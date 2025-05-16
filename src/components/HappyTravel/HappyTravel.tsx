import React from "react";
import Image from "next/image";
import HomeSection from "../HomeSection/HomeSection";
import type { happy_travel } from "@/type/type";
import TravelSlider from "../TravelSlider/TravelSlider";

interface HappyProp {
  data: happy_travel;
}

function HappyTravel({ data }: HappyProp) {
  return (
    <section className="md:my-24 my-10 px-3">
      <div className="container max-w-7xl mx-auto">
        <HomeSection data={data.homeSection} />
        <div className="flex justify-between md:flex-row flex-col items-center">
          <div className="max-w-[400px] w-full">
            <TravelSlider data={data.travel_slider} />
          </div>
          <div className="max-w-[668px] w-full">
            <Image width={668} height={400}  src={data.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HappyTravel;

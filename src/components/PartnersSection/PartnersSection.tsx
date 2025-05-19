"use client";

import React from "react";
import Image from "next/image";
import type { PartnerSection } from "@/type/type";
import HomeSection from "../HomeSection/HomeSection";

interface PartnerProp {
  data: PartnerSection;
}

function PartnersSection({ data }: PartnerProp) {

  return (
    <section className="md:my-24 my-10 px-3">
      <div className="container max-w-7xl mx-auto">
        <HomeSection data={data.homeSection} />
        <div className="flex cursor-pointer md:flex-row flex-col flex-wrap md:gap-5 gap-7  items-center justify-center">
          {data.partnersLogo.map((elem, id) => {
            return (
              <div key={id}  className="basis-1/6 sm:max-h-20 max-h-10 h-full justify-center flex">
                <Image width={10} height={10} className=" w-full"  src={elem.logo} alt={elem.path} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;

"use client";
import React from "react";
import type { HomeSection } from "@/type/type";

interface PartnerProp {
  data: HomeSection;
}

function HomeSection({ data }: PartnerProp) {
  return (
    <div className="max-w-[750px] w-full px-5 text-center mx-auto">
      <h1 className="font-semibold md:text-5xl text-3xl">{data.heading}</h1>
      <p className="mt-[26px] mb-[52px] max-w-[768px] mx-auto text-[16px] font-[500px]">
        {data.text}
      </p>
    </div>
  );
}

export default HomeSection;

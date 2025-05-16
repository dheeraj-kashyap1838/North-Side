"use client";
import React from "react";
import Image from "next/image";
import type { Choose_Card } from "@/type/type";

interface CardProp {
  data: Choose_Card;
}

function ChooseCard({ data }: CardProp) {
  return (
    <div className="max-w-[332px] w-full px-2 text-center flex flex-col justify-center items-center">
      <Image width={72} height={72} src={data.icon} alt="" />
      <h3 className="font-bold text-2xl mt-6 mb-3">{data.heading}</h3>
      <p>{data.text}</p>
    </div>
  );
}

export default ChooseCard;

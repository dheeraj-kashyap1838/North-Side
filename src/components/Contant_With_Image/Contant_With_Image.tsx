import React from "react";
import Image from "next/image";
import type { contant_with_image } from "@/type/type";

interface ContantProp {
  data: contant_with_image;
}

function Contant_With_Image({ data }: ContantProp) {
  return (
    <section id="services" className="md:my-24 my-10 px-3 py-[72px] bg-[#FEFDE8]">
      <div className="container items-end justify-center max-w-7xl mx-auto flex md:flex-row flex-col">
        <div className="basis-1/2">
          <h3 className="font-semibold max-w-[457px] w-full text-[40px]">{data.heading}</h3>
          <p>{data.text}</p>
            {data.list.map((elem, id) => {
              return (
                <div key={id} className="flex gap-4 my-5">
                  <h3 className=" max-w-[36px] w-full max-h-[36px]  overflow-hidden flex justify-center items-center rounded-lg bg-[#FEEA39] text-center">
                    {id + 1}
                  </h3>
                  <div>
                    <h2 className="font-bold ">{elem.name}</h2>
                    <p>{elem.desc}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="basis-1/2 flex justify-end">
          <Image width={522} height={482} className="w-full" src={data.image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contant_With_Image;

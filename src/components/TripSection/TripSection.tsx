import React from "react";
import Image from "next/image";
import type { TripSection } from "@/type/type";


interface TripProp {
  data: TripSection;
}

function TripSection({ data }: TripProp) {
  return (
    <section className=" md:my-24 my-10 px-3  ">
      <div className="container max-w-7xl mx-auto">
        <div className="container justify-center items-center mx-auto max-w-7xl flex md:flex-row flex-col">
          <div className="md:basis-1/2 basis-1/1">
            <h2 className="sm:font-semibold sm:text-5xl font-bold text-3xl">{data.heading}</h2>
            <div
              className="flex my-7 max-w-[500px] w-full flex-col gap-4"
              dangerouslySetInnerHTML={{ __html: data.texts }}
            ></div>
          </div>
          <div className="md:basis-1/2 basis-1/1 ">
            <Image width={499} height={475} className="mx-auto" src={data.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TripSection;

"use client";

import React from "react";
import type { BookingSection } from "@/type/type";
import SmallButton from "../SmallButton/SmallButton";
import SearchBox from "../SearchBox/SearchBox";
import Button from "../Button/Button";

interface BookingProp {
  data: BookingSection;
}

function BookingSection({ data }: BookingProp) {
  return (
    <section className="md:mb-24 mb-10 sm:mt-[-150px] mx-auto ">
      <div className="container max-w-6xl w-full relative z-10 mx-auto flex-wrap flex ">
        <div className="flex flex-wrap justify-center bg-white gap-6 rounded-t-2xl px-8 py-6">
          {data.button.map((elem, id) => {
            return <SmallButton key={id} props={elem} />;
          })}
        </div>
        <div
          className="bg-white px-8 w-[100%] md:rounded-tr-2xl  md:rounded-b-2xl rounded-none"
          style={{ boxShadow: "-8px 14px 36px #0000000F" }}
        >
          <div className=" w-[100%] sm:items-end items-center justify-center gap-2 flex flex-wrap ">
            {data.searchBox.map((elem, id) => {
              return (
                <div key={id} className="md:py-8 py-3 lg:basis-1/6 md:basis-1/4  w-full">
                  <SearchBox  props={elem} />
                </div>
              );
            })}
            <div className="md:py-8 py-3 basis-1/6">
              <Button props={data.searchBtn} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;

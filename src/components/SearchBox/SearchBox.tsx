"use client"

import React from "react";
import Image from "next/image";
import type { SearchBox } from "@/type/type";

interface SearchProp{
  props: SearchBox
}

function SearchBox({props}: SearchProp ) {

  return (
      <>
        <div className="flex  mb-3 gap-2  items-center justify-between md:justify-start text-[#724511]">
          <h3 className="font-semibold text-lg ">{props.heading}</h3>
          <Image width={12} height={6} src={props.icon} alt="/" />
        </div>
        <input
          type="text"
          placeholder={props.placeholder}
          className="bg-[#F6F6F6] rounded-xl w-full focus:outline-none py-4 ps-4 pe-5"
        />
    </>
  );
}

export default SearchBox;

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
        <div className="flex px-2 mb-3 gap-2 items-center text-[#724511]">
          <h3 className="font-semibold text-xl">{props.heading}</h3>
          <Image width={12} height={6} src={props.icon} alt="/" />
        </div>
        <input
          type="text"
          placeholder={props.placeholder}
          className="bg-[#F6F6F6] rounded-xl focus:outline-none py-4 ps-4 pe-5"
        />
    </>
  );
}

export default SearchBox;

"use client";
import Image from "next/image";
import React from "react";

import type { Button } from "@/type/type";
import Link from "next/link";

interface ButtonProps {
  props: Button;
}

function Button({ props }: ButtonProps) {
  return (
    <Link href={props.path} className="max-w-[184px] w-full mx-auto">
      <button
        className="cursor-pointer font-semibold sm:py-3.5 py-2.5 sm:px-8 px-3.5 w-full rounded-xl flex justify-center items-center gap-1"
        style={{ color: props.txtColor, backgroundColor: props.color }}
      >
        {props.name}
        {props.icon ? (
          <Image  
          width={15}
            height={15}
            className="  ms-2"
            src={props.icon}
            alt="/"
          />
        ) : null}
      </button>
    </Link>
  );
}

export default Button;

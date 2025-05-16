import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/type/type";

interface ButtonProp {
  props: Button;
}

function SmallButton({ props }: ButtonProp) {
  return (
    <Link href={props.path} className="">
      <button
        className="cursor-pointer font-semibold py-1 px-5 rounded-xl flex items-center gap-1"
        style={{ color: props.txtColor, backgroundColor: props.color }}
      >
        {props.icon && <Image width={15} height={15} src={props.icon} alt="/" />}
        {props.name}
      </button>
    </Link>
  );
}

export default SmallButton;

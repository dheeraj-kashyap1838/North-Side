"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import type { HeaderType } from "@/type/type";
import Button from "../Button/Button";

interface HeaderProp {
  props: HeaderType;
}

function Header({ props }: HeaderProp) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="my-5 px-3">
      <div className=" container max-w-7xl mx-auto  ">

      <nav className="flex w-full flex-wrap  justify-between">
        <div className="basis-1/6 flex justify-start ">
          <Image width={66} height={56} src={props.logo} alt="logo" />
        </div>
        <div className="block basis-1/6 md:hidden">
          <GiHamburgerMenu
            className="mx-auto"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>

        <div
          className={`${
            openMenu ? "flex" : "hidden"
          } md:flex md:flex-row md:gap-0 gap-6 flex-col md:basis-5/6 basis-6/6  items-center`}
        >
          <ul className="flex md:flex-row flex-col basis-3/4  justify-center w-full font-semibold  lg:gap-10 gap-5 flex-wrap">
            {props.navItem.map((item, id) => {
              return (
                <li key={id} className="text-center">
                  <Link href={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>

          {/* <div className="flex basis-1/4 justify-end"> */}
            <Button props={props.button} />
          {/* </div> */}
        </div>
      </nav>
      </div>

    </section>
  );
}

export default Header;

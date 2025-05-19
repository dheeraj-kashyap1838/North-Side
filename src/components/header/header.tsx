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
    <header className=" px-3 py-3 md:py-0 z-30 sticky  max-h-[200px] bg-white top-0 left-0 w-full">
      <div className=" container max-w-7xl mx-auto  ">
        <nav className="flex w-full  md:pb-0 flex-wrap items-center justify-between">
          <div className="basis-1/6 flex justify-start ">
            <div className="sm:w-[80%] w-[60%]  ">
              <Image width={66} height={56} src={props.logo} alt="logo" />
            </div>
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
            } md:flex md:flex-row md:static absolute h-[100vh] md:h-auto  w-full z-[-1] bg-white  left-0 md:py-3 py-5 
            top-[45px]  md:gap-0 gap-6 flex-col md:basis-5/6 basis-6/6  items-center`}
          >
            <ul className="flex md:flex-row flex-col basis-3/4  justify-center w-full font-semibold  lg:gap-10 gap-5 flex-wrap">
              {props.navItem.map((item, id) => {
                return (
                  <li key={id} className="text-center" onClick={()=>{
                    setOpenMenu(false)
                  }} >
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
    </header>
  );
}

export default Header;

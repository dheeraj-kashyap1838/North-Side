'use client'
import React from 'react'
import FooterLists from '../footerList/FooterLists';
import Image from "next/image";
import type { FooterData } from '@/type/type';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";



interface FooterProps {
  props: FooterData;
}

function Footer({ props }: FooterProps) {
  // console.log(props)
  return (
    <section className='w-full bg-[#fefde8] py-5'>
      <div className='max-w-7xl mx-auto px-2 pt-12'>
        <div className='flex md:flex-row flex-col'>
          <div className='basis-1/4 '>
            <div className='px-2 text-center md:text-left '>
              <Image width={150} height={30} className='object-contain md:w-28 w-15 mx-auto md:mx-0' src={props.logo} alt="/" />
              <h2 className='text-4xl font-bold text-[#fbda14]'>{props.name}</h2>
              <p className='text-[#5D5D5D] my-5'>{props.tagLine}</p>
            </div>
          </div>
          <div className='basis-3/4 flex md:flex-row gap-5 mt-5 flex-col '>
            {props.footerLists.map((item, id) => {
              return (
                <div key={id} className='basis-1/3 px-2 lg:px-8 '>
                  <FooterLists props={item}/>
                </div>
              )
            })}
          </div>
        </div>
        <hr className="my-4 border-t mx-auto border-2 border-[#FFF889]" />
        <div className='flex justify-between sm:flex-row flex-col '>
          <div className='flex sm:mx-0 mx-auto gap-3 text-xl'>
            <FaFacebook />
            <FaInstagram />
            <ImLinkedin />
            <FaYoutube />
          </div>
          <div className='sm:mx-0 mx-auto'>{props.copyRight}</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
import React from 'react'
import type { FooterLists } from '@/type/type';
import Link from 'next/link';



interface ListProp {
  props: FooterLists
}

function FooterLists({ props }: ListProp) {
  return (
    <div className='px-2 flex flex-col gap-6 '>
      <h2 className='font-semibold text-center md:text-left'>{props.heading}</h2>
      <ul className='flex flex-col text-center md:text-left  gap-2 text-[#888888]'>
        {props.menu.map((item, id) => {
          return (
            <li key={id}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterLists;
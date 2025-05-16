'use client'
import Link from 'next/link'
import Image from 'next/image'

import React, { useEffect, useState } from 'react'

interface User {
  id: string;
  firstName: string;
  lastName: string;
  image: string;
}

function Page() {
  const [userDetail, setUserDetail] = useState<User[]>([])
  
    
    const userData = async () => {
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json()
      setUserDetail(data.users)
    }
    // console.log(userDetail)
    
    useEffect(() => {
      userData(); // Call the function when the component mounts
    }, []);


  return (
    <div>
      <h1>this is users page</h1>
      <ul>
        {userDetail.map((item) => {
          return (
            <li key={item.id} className='flex gap-5'>
              <Link href={`users/${item.id}`}>{item.firstName}</Link>
              <h1>{item.id}</h1>
              <h1>{item.lastName}</h1>
              <Image src={item.image} alt="" />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Page;
"use client";

import React, { use, useEffect, useState } from "react";
import Image from "next/image";


interface UserData {
  id: number;
  firstName: string;
  maidenName: string;
  lastName: string;
  image: string;
}

export default function Page({ params }: { params: Promise<{ user: string }> }) {
  const [userData, setUserData] = useState<UserData | null>();
  const  {user}  = use(params);
  useEffect(() => {
    async function getData() {
      const finalData = await fetch(`https://dummyjson.com/users/${user}`);
      const data = await finalData.json();
      setUserData(data);
    }
    getData();
  }, [user]);

  // console.log(userData)

  return (
    <div className="flex gap-5">
      <h1>{userData?.firstName}</h1>
      <h1>{userData?.maidenName}</h1>
      <h1>{userData?.lastName}</h1>
      {userData?.image && <Image src={userData?.image} alt="" />}
    </div>
  );
}


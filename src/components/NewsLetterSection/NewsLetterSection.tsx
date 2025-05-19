import React from "react";
import type { newsLetter } from "@/type/type";
import Button from "../Button/Button";

interface NewsLetterProp {
  data: newsLetter;
}

function NewsLetterSection({ data }: NewsLetterProp) {
  return (
    <section id="contact" className="md:my-24 my-10 px-3 pt-[72px] pb-[96px]  ">
      <div className="max-w-[750px] flex flex-col gap-10 w-full px-5 text-center mx-auto" dangerouslySetInnerHTML={{__html:data.heading}}>
        
        
      </div>

      {/* =========== */}
      <form
        action="get"
        className="flex flex-col sm:flex-row gap-5 items-center relative max-w-[832px]  mx-auto w-full"
      >
        <input
          type="text"
          placeholder={data.placeHolder}
          className="px-[22px] py-[14px] rounded-2xl  w-full  bg-[#F6F6F6]"
        />
        <div
          className="max-w-[207px] max-h-[100px] h-full w-full sm:absolute right-0 bottom-0"
          id="newsletter"
        >
          <Button props={data.button} />
        </div>
      </form>
    </section>
  );
}

export default NewsLetterSection;

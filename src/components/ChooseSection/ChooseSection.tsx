import React from "react";
import type { ChooseSection } from "@/type/type";
import HomeSection from "../HomeSection/HomeSection";
import ChooseCard from "../ChooseCard/ChooseCard";

interface ChooseProp {
  data: ChooseSection;
}

function ChooseSection({ data }: ChooseProp) {
  return (
    <section className="md:my-24 my-10 px-3 ">
      <div className="container max-w-7xl mx-auto">
        <HomeSection data={data.homeSection} />
        <div className="flex flex-wrap justify-center gap-[86px]">
          {data.choose_Card.map((card, id) => {
            return <ChooseCard key={id} data={card} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ChooseSection;

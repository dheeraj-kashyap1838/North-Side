import Destination_Slider from "../Destination_Slider/Destination_Slider";
import HomeSection from "../HomeSection/HomeSection";
import type { Destination_Section } from "@/type/type";

// 



interface Destination_prop{
  data: Destination_Section,
  
}



function DestinationSection({data}:Destination_prop) {
  // data.destinations
  return (
    <section className="md:my-24 my-10 px-3">
      <div className="container max-w-7xl mx-auto">
        
      <HomeSection data={data.homeSection} />
      <Destination_Slider data={data.destinations} />
      </div>
     
    
    </section>
  );
}

export default DestinationSection;

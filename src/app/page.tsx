import { homePageData } from "@/data/HomeData";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import BookingSection from "@/components/BookingSection/BookingSection";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import DestinationSection from "@/components/DestinationSection/DestinationSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ChooseSection from "@/components/ChooseSection/ChooseSection";
import TripSection from "@/components/TripSection/TripSection";
import Contant_With_Image from "@/components/Contant_With_Image/Contant_With_Image";
import ConnectionSection from "@/components/PartnersSection/PartnersSection";
import HappyTravel from "@/components/HappyTravel/HappyTravel";
import InsightsSection from "@/components/InsightsSection/InsightsSection";
import NewsLetterSection from "@/components/NewsLetterSection/NewsLetterSection";




export default function Home() {
  return (
    <div id="home">
      <HeroSlider data={homePageData.heroSlider} />
      <BookingSection data={homePageData.BookingSection} />
      <PartnersSection data={homePageData.PartnerSection} />
      <DestinationSection data={homePageData.Destination_Section} />
      <AboutSection data={homePageData.About_Section} />
      <ChooseSection data={homePageData.Choose_Section} />
      <TripSection data={homePageData.TripSection} />
      <Contant_With_Image data={homePageData.contant_with_image} />
      <ConnectionSection data={homePageData.ConnectionSection} />
      <HappyTravel data={homePageData.HappyTravel} />
      <InsightsSection data={homePageData.InsightsSection} />
      <NewsLetterSection data={homePageData.NewsLetterSection} />
      
      


    </div>
  );
}

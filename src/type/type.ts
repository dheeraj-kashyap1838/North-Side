// types/footerTypes.ts

export interface Menu {
  name: string;
  link: string;
}

export interface FooterLists {
  heading: string;
  menu: Menu[];
}

export interface FooterData {
  logo: string;
  tagLine: string;
  name: string;
  copyRight: string;
  footerLists: FooterLists[];
}

export interface Button {
  name: string;
  path: string;
  color: string;
  txtColor: string;
  icon?: string;
}
export interface HeaderType {
  button: Button;
  logo: string;
  navItem: { path: string; name: string }[];
}

export interface Sliders {
  heading: string;
  qute: string;
  bgImg: string;
  offer: string;
  offerTime: string;
  button: Button[];
}

export interface BookingSection {
  button: Button[];
  searchBox: SearchBox[];
  searchBtn: Button;
}

export interface SearchBox {
  heading: string;
  icon: string;
  placeholder: string;
}

export interface PartnersLogo {
  logo: string;
  path: string;
}

export interface HomeSection {
  heading: string;
  text: string;
}

export interface PartnerSection {
  homeSection: HomeSection;
  partnersLogo: PartnersLogo[];
}

export interface Destination_Section {
  homeSection: HomeSection;
  destinations: Destinations[];
}
export interface Destinations {
  name: string;
  bg_img: string;
  location: string;
  location_icon: string;
  location_link: string;
  price: string;
  person: string;
  button: Button;
}

export interface About_Section {
  homeSection: HomeSection;
  section_img: Section_Img;
}

export interface Section_Img {
  tower2: string;
  tower1: string;
  girl: string;
  bag: string;
  plane_dots: string;
  dots_circle: string;
  dots_cube: string;
}

export interface ChooseSection {
  homeSection: HomeSection;
  choose_Card: Choose_Card[];
}

export interface Choose_Card {
  icon: string;
  heading: string;
  text: string;
}

export interface TripSection {
  heading: string;
  texts: string;
  image: string;
}

export interface contant_with_image {
  heading: string;
  text: string;
  list: {
    name: string;
    desc: string;
  }[];
  image: string;
}

export interface happy_travel {
  homeSection: HomeSection;
  travel_slider: travel_slider[];
  image: string;
}

export interface travel_slider {
  text: string;
  name: string;
  rating_btn: {
    icon: string;
    rating: string;
  };
}

export interface InsightsSection {
  homeSection: HomeSection;
  insight_slider: {
    image: string;
    heading: string;
    name: string;
    time: string;
    like: {
      icon: string;
      like_s: number;
    };
    comment: {
      icon: string;
      comment_s: number;
    };
  }[];
}

export interface insight_slider {
  image: string;
  heading: string;
  name: string;
  time: string;
  like: {
    icon: string;
    like_s: number;
  };
  comment: {
    icon: string;
    comment_s: number;
  };
}

export interface newsLetter{
  homeSection:HomeSection;
  button:Button;
  placeHolder:string:
}

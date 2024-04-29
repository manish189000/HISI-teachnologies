import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeroSectionComponent from "../components/HeroSectionComponent";
import ServiceComponent from "../components/ServiceComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import ContactComponent from "../components/ContactComponent";
import FooterComponent from "../components/FooterComponent";
import Pricing from "./Pricing";
import WhyChooseUs from "./Why";
const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroSectionComponent />
      <ServiceComponent />
      <AboutUsComponent />
      <WhyChooseUs />
      <Pricing />
      <ContactComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;

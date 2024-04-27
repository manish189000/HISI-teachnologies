import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeroSectionComponent from "../components/HeroSectionComponent";
import ServiceComponent from "../components/ServiceComponent";
import AboutUsComponent from "../components/AboutUsComponent";
import ContactComponent from "../components/ContactComponent";
const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroSectionComponent />
      <ServiceComponent />
      <AboutUsComponent />
      <ContactComponent />
    </>
  );
};

export default HomePage;

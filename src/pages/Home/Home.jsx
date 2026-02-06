import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import QuickAccess from "../../components/QuickAcces/QuickAccess";
import Services from "../../components/Services/Services";
import Leaders from "../../components/Leaders/Leaders";

const Home = () => {
  return (
    <div>
      <Hero />
      <QuickAccess />
      <Leaders />
      <Services />
    </div>
  );
};

export default Home;

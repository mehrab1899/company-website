import React from "react";
import Hero from "../layout/Hero";
import WhyUs from "../layout/WhyUs";
import Services from "../layout/Services";
import Technology from "../layout/Technology";
import Portfolio from "../layout/Portfolio";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Services />
      <Technology />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;

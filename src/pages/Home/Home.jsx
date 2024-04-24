import React from "react";
import Aboutdrop from "../../components/Navbar/navdrops/Aboutdrop";
import "./home.css";
import Hero from "../../components/Hero/Hero";
import Section1 from "./Section1";

const Home = () => {
  return (
    <div>
      {/* <img
        src={front}
        className="hero"
        alt="Dr. Shakuntala Ayurvedic Medical College"
      /> */}
      <Hero />
      <Section1 />
    </div>
  );
};

export default Home;

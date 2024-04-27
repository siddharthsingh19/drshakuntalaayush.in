import React from "react";
import Aboutdrop from "../../components/Navbar/navdrops/Aboutdrop";
import "./home.css";
import Hero from "../../components/Hero/Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Contact from "../Contact/Contact";

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
      <Section2 />
      <Section3 />
      <Contact />
    </div>
  );
};

export default Home;

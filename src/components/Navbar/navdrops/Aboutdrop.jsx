import React, { useState } from "react";
import { Link } from "react-router-dom";
import collegecouncil from "/college council.pdf";
import "./aboutdrop.css";
const Aboutdrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <span className="aboutdrop--main" onMouseEnter={handleMouseEnter}>
        About Us
      </span>
      {isOpen && (
        <div onMouseLeave={handleMouseLeave}>
          <div className="aboutdrop--links">
            <a target="_blank" href={collegecouncil}>
              College Council
            </a>
          </div>
          <div className="aboutdrop--links">
            <Link to="/introduction">Introduction</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/mission&objective">Our Mission & Objective</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/affiliation">Affiliation</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/course&fees">Courses & Fees</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/rules&regulations">Rules & Regulation</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/permission&affiliation">Permission & Affiliation</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/otheractivites">Other Activites</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Aboutdrop;

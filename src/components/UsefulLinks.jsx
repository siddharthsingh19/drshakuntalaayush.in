import React, { useState } from "react";

import "./usefulLinks.css";
const UsefulLinks = () => {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const toggleSecondDiv = () => {
    setShowSecondDiv(!showSecondDiv);
  };

  const handleMouseEnter = () => {
    setShowSecondDiv(true);
  };

  const handleMouseLeave = () => {
    setShowSecondDiv(false);
  };

  return (
    <div className="useful-container">
      <div
        className="rotate useful-heading"
        onClick={toggleSecondDiv}
        onMouseEnter={handleMouseEnter}
      >
        Useful Links
      </div>
      {showSecondDiv && (
        <div
          className="useful-wrapper second-div"
          onMouseLeave={handleMouseLeave}
        >
          <ul className="useful-links">
            <a href="https://ncismindia.org/">
              <li>NCISM</li>
            </a>
            <a href="https://ayush.gov.in/">
              <li>Ministry of AYUSH</li>
            </a>
            <a href="https://www.mggaugkp.ac.in/">
              <li>MGGAUGKP</li>
            </a>
            <a href="https://pgcounselling.ayushup.in/">
              <li>UP AYUSH Councelling</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UsefulLinks;

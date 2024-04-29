import React from "react";
import "./usefulLinks.css";
const UsefulLinks = () => {
  return (
    <div className="useful-container">
      <div className="rotate useful-heading"> Useful Links</div>
      <div className={`useful-wrapper ${open ? "show" : ""}`}>
        <ul className="useful-links">
          <a href="https://ncismindia.org/">
            <li>NCISM</li>
          </a>
          <a href="https://main.ayush.gov.in/">
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
    </div>
  );
};

export default UsefulLinks;

import React, { useState } from "react";
import "./top.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Top = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="topbar-container">
        <div className="topbar-wrapper">
          <div className="top-contact">
            <p className="top-phone">
              <FaPhoneAlt />
              +91-965454321
            </p>
            <a className="top-email" href="mailto:siddharth@gmail.com">
              <IoMail />
              siddharth@gmail.com
            </a>
          </div>
          <button className={`apply-now`} onClick={handleClick}>
            <Link to="/apply-now">Apply Now</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Top;

import React from "react";
import "./footer.css";
import logo from "/logo.jpg";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="flogo-div">
        {/* <Link to="/"> */}
        <img className="flogo" src={logo} alt="logo" />
        {/* </Link> */}
      </div>
      <div className="footerlinks">
        <div className="f1">
          <ul>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Courses</li>
            <li>Student's Corner</li>
            <li>Rules and Regulations</li>
            <li>Affiliation</li>
          </ul>
        </div>
        <div className="f2">
          <ul>
            <li>Results</li>
            <li>Vacancy</li>
            <li>News</li>
            <li>Notice</li>
            <li>Permission and Affiliation</li>
          </ul>
        </div>
        <div className="f2">
          <ul>
            <li>Contact Us</li>
            <li>
              <IoMdMail /> drshakuntalaayush@mail.com
            </li>
            <li>
              <FaLocationDot /> 1214, Gaurabadshahpur, Nainsand, <br /> Jaunpur,
              Uttar Pradesh-222133
            </li>
            <li>
              <FaPhoneAlt /> 991 890 5644
            </li>
          </ul>
        </div>
        <div className="f3">
          <div className="Contact">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.178403704445!2d82.79931207508446!3d25.764670208482922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903100115d4b9d%3A0x48699baaa5b89ac1!2sDr%20Shakuntala%20Ayurvedic%20College%20Jaunpur!5e0!3m2!1sen!2sin!4v1713960653004!5m2!1sen!2sin"
                // width="400"
                // height="250"
                className="gmap"
                style={{ borderRadius: 5, border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="fbase">
        <p>
          Copyright © 2024 Dr. Shakuntala Ayurvedic Medical College and
          Hospital. All rights reserved.
        </p>
        <p>
          Created by <a href="https://ntechzy.com"> Ntechzy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

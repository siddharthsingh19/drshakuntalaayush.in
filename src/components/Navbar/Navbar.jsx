import React from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaTwitter, FaFacebook, FaUser } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "./navbar.css";
import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Aboutdrop from "./navdrops/Aboutdrop";
import { FaCaretDown } from "react-icons/fa";
import Facultydrop from "./navdrops/Facultydrop";
import Collegedrop from "./navdrops/Collegedrop";
import Hospitaldrop from "./navdrops/Hospitaldrop";
import Studentdrop from "./navdrops/studentdrop";
import Newsdrop from "./navdrops/newsdrop";

const Navbar = () => {
  return (
    <nav>
      <div className="nav--container">
        <div className="nav--wrapper">
          {/* <div className="nav--top">
            <div className="nav--top-wrapper">
              <div className="nav--cta">
                <p className="nav--phone nav--ctaflex">
                  <IoMdCall />
                  <a href="tel:+91-8858577067" className="nav--ctas">
                    +91-8858577067
                  </a>
                </p>
                <p className="nav--mail nav--ctaflex">
                  <IoMdMail />
                  <a
                    href="mailto:info@drshakuntalaayush.in"
                    className="nav--ctas"
                  >
                    info@drshakuntalaayush.in
                  </a>
                </p>
              </div>
              <div className="nav--social">
                <div
                  className="nav--social-link"
                  data-tooltip-id="twitter"
                  data-tooltip-content="Twitter"
                >
                  <FaTwitter />
                  <Tooltip id="twitter" />
                </div>
                <div
                  className="nav--social-link"
                  data-tooltip-id="fb"
                  data-tooltip-content="Facebook"
                >
                  <FaFacebook />
                  <Tooltip id="fb" />
                </div>
                <div
                  className="nav--social-link"
                  data-tooltip-id="login"
                  data-tooltip-content="Login"
                >
                  <FaUser />
                  <Tooltip id="login" />
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="nav--center">
            <Link to="/">
              <img
                className="logo"
                src="/logo.jpg"
                alt="Dr. Shakuntala Ayurvedic Medical College Jaunpur"
              />
            </Link>
          </div> */}
          <div className="nav--bottom">
            <div className="nav--menub">
              <ul className="nav--menuul">
                <li className="nav--menu">
                  <Link className="nav--links" to="/">
                    Home
                  </Link>
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  {/* <Link className="nav--links" to="/about">
                    About
                  </Link> */}
                  <Aboutdrop />
                  <FaCaretDown color="#fff" />
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  {/* <Link className="nav--links" to="/faculty">
                    Faculty
                  </Link> */}
                  <Facultydrop />
                  <FaCaretDown color="#fff" />
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  {/* <Link className="nav--links" to="/collegenhostel">
                    College & Hostel
                  </Link> */}
                  <Collegedrop />
                  <FaCaretDown color="#fff" />
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  {/* <Link className="nav--links" to="/hospital">
                    Hospital
                  </Link> */}
                  <Hospitaldrop />
                  <FaCaretDown color="#fff" />
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  <Link className="nav--links" to="/courses">
                    Courses
                  </Link>
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  {/* <Link className="nav--links" to="/studentscorner">
                    Student's Corner
                  </Link> */}
                  <Studentdrop />
                  <FaCaretDown color="#fff" />
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  {/* <Link to="/news" className="nav--links">
                    News & Notice
                  </Link> */}
                  <Newsdrop />
                  <FaCaretDown color="#fff" />
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  <Link className="nav--links" to="/gallery">
                    Gallery
                  </Link>
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  <Link className="nav--links" to="/contact">
                    Contact Us
                  </Link>
                  <hr className="nav--link-hr" />
                </li>
                <li className="nav--menu">
                  <a href="https://softitlab.com/DOCTORDESK/login.php">
                    OPD Login
                  </a>
                  <hr className="nav--link-hr" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

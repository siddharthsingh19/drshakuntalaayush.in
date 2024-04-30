import React, { useRef } from "react";
import "./innerPages.css";
import { Link } from "react-router-dom";

const InnerPages = ({ heading, sidemenu }) => {
  const refs = sidemenu.map(() => useRef());

  //   const scrollToRef = (ref) => {
  //     if (ref.current) {
  //       ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   };

  const scrollToRef = (ref) => {
    if (ref.current) {
      const navbarHeight = 100;
      const offset = ref.current.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    scrollToRef(refs[index]);
  };
  return (
    <>
      <div className="inner-container">
        <div className="inner-wrapper">
          <div className="inner-top">{heading}</div>
          <div className="inner-bottom">
            <div className="inner-left">
              {sidemenu.map((item, index) => (
                <div
                  className="inner-leftItems"
                  key={item.url}
                  onClick={(e) => handleClick(e, index)}
                >
                  <Link to={`/about/#${item.url}`}> {item.title}</Link>
                </div>
              ))}
            </div>
            <div className="inner-right">
              {sidemenu.map((item, index) => (
                <div
                  className="inner-rightItems"
                  key={item.url}
                  ref={refs[index]}
                >
                  <div className="inner-content" id={item.url}>
                    <h1 className="innerContent-heading">{item.title}</h1>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerPages;

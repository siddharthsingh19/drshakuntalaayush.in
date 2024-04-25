import React from "react";
import "./section2.css";
import herbs from "/images/herbs.jpg";

const Section2 = () => {
  const coursecards = [
    {
      img: herbs,
      heading: "Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.)",
      title:
        "Explore holistic Ayurvedic principles, anatomy, herbology, diagnostics, and therapeutics for a career as an Ayurvedic practitioner. Enroll for transformative learning!",
    },
    {
      img: herbs,
      heading: "Master of Surgery(M.S.) Ayurveda",
      title:
        "Master the intricate art of Ayurvedic surgery, blending ancient techniques with modern medical knowledge. Elevate your skills and career. Enroll now!",
    },
    {
      img: herbs,
      heading: "Ayurvedic Nursing",
      title:
        "Enhance your caregiving skills with Ayurvedic nursing, integrating traditional healing wisdom with modern healthcare practices. Enroll for holistic nursing education. ",
    },
    {
      img: herbs,
      heading: "Ayurvedic Pharmacist",
      title:
        "Master the fusion of Ayurvedic wisdom and pharmaceutical science. Become an Ayurvedic Pharmacist adept at herbal formulations and holistic healthcare. Enroll today!",
    },
  ];

  return (
    <div className="hs2">
      <div className="hs2-header">Our Courses</div>
      <div className="hs2-heading">Choose Your Course</div>
      <div className="hs2-courses">
        {coursecards.map((card) => (
          <div className="hs1--sec2-cards cp">
            <div className="hs2--img">
              <img src={card.img} alt={card.heading} className="hs2--img-img" />
            </div>
            <h3>{card.heading}</h3>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;

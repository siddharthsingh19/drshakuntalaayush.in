import React from "react";
import "./section2.css";

const Section2 = () => {
  const coursecards = [
    {
      image: "",
      heading: "Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.)",
      title:
        "We offer holistic education in Ayurvedic medicine, emphasizing practical skills, ethics, and personalized mentorship for students' success.",
    },
    {
      image: "",
      heading: "Master of Surgery(M.S.) Ayurveda",
      title:
        "Our Expert faculty bring extensive knowledge, skills, and real-world experience to enrich students' learning journey..",
    },
    {
      image: "",
      heading: "Ayurvedic Nursing",
      title:
        "Our College boasts modern infrastructure, equipped with advanced facilities to support students' academic and practical learning needs. ",
    },
    {
      image: "",
      heading: "Ayurvedic Pharmacist",
      title:
        "We provide comprehensive placement assistance, guiding students towards rewarding career opportunities in the field of Ayurvedic medicine.",
    },
  ];

  return (
    <div className="hs2">
      <div className="hs2-header">Our Courses</div>
      <div className="hs2-heading">Choose Your Course</div>
      <div className="hs2-courses">
        {coursecards.map((card) => (
          <div className="hs1--sec2-cards cp">
            <div className="hs2--img">{card.image}</div>
            <h3>{card.heading}</h3>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;

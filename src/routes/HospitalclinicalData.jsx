import React from "react";
import InnerPages from "../components/InnerPages";

import { menuData } from "../components/menudata";

const HospitalclinicalData = () => {
  const data = menuData[6];

  const heading = data.title;
  const sidemenu = data.submenu;

  return (
    <>
      <InnerPages heading={heading} sidemenu={sidemenu} />
    </>
  );
};

export default HospitalclinicalData;

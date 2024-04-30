import React from "react";
import InnerPages from "../components/InnerPages";

import { menuData } from "../components/menudata";

const HospitalclinicalData = () => {
  const data = menuData[6];

  const heading = data.title;
  const url = data.url;
  const sidemenu = data.submenu;

  return (
    <>
      <InnerPages heading={heading} sidemenu={sidemenu} url={url} />
    </>
  );
};

export default HospitalclinicalData;

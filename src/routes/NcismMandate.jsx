import React from "react";
import InnerPages from "../components/InnerPages";

import { menuData } from "../components/menudata";

const NcismMandate = () => {
  const data = menuData[3];

  const heading = data.title;
  const sidemenu = data.submenu;

  return (
    <>
      <InnerPages heading={heading} sidemenu={sidemenu} />
    </>
  );
};

export default NcismMandate;

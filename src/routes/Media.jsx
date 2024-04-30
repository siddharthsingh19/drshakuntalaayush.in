import React from "react";
import InnerPages from "../components/InnerPages";

import { menuData } from "../components/menudata";

const Media = () => {
  const data = menuData[5];

  const heading = data.title;
  const sidemenu = data.submenu;

  return (
    <>
      <InnerPages heading={heading} sidemenu={sidemenu} />
    </>
  );
};

export default Media;

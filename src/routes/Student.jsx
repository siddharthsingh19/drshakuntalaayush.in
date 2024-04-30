import React from "react";
import InnerPages from "../components/InnerPages";

import { menuData } from "../components/menudata";

const Student = () => {
  const data = menuData[2];

  const heading = data.title;
  const sidemenu = data.submenu;

  return (
    <>
      <InnerPages heading={heading} sidemenu={sidemenu} />
    </>
  );
};

export default Student;

import React from "react";
import HeaderDate from "./HeaderDate";
import HeaderTitleTop from "./HeaderTitleTop";
import HeaderTitleMiddle from "./HeaderTitleMiddle";

function Header({ visible }) {
  return (
    <>
      <header className={`py-4 ${visible}`}>
        <HeaderDate />
        <HeaderTitleTop />
        <HeaderTitleMiddle />
      </header>
    </>
  );
}

export default Header;

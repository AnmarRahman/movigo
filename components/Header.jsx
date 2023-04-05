import React from "react";
import HeaderDate from "./HeaderDate";
import HeaderTitleTop from "./HeaderTitleTop";
import HeaderTitleMiddle from "./HeaderTitleMiddle";

function Header({ href, buttonText }) {
  return (
    <>
      <header className="py-4">
        <HeaderDate />
        <HeaderTitleTop />
        <HeaderTitleMiddle />
      </header>
    </>
  );
}

export default Header;

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero.jsx";
import ComingSoon from "../components/ComingSoon";

export default function Test() {
  const [visible, setVisible] = useState("visible");

  return (
    <div className={`bg-white `}>
      <Header visible={visible} href="searchList" buttonText="Movies List" />
      <Hero visible={visible} />
      <ComingSoon />
    </div>
  );
}

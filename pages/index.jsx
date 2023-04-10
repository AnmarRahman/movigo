import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchButton from "../components/searchButton";

export default function Test() {
  const [flipped, setFlipped] = useState(false);
  const [moveRight, setMoveRight] = useState(false);
  const [visible, setVisible] = useState("visible");
  const [hidden, setHidden] = useState("invisible");

  const handleFlip = () => {
    setTimeout(() => {
      setMoveRight(true);
    });
    setTimeout(() => {
      setHidden("");
      setFlipped(true);
    }, 1000);
    setTimeout(() => {
      setVisible("invisible");
    }, 400);
  };

  return (
    <div className={`bg-[wheat] py-4 flex justify-center items-center `}>
      <div
        id="indexContainer"
        className={`first border-black border-2 ${moveRight && "moveRight"} ${
          flipped && "flipped  "
        } `}
      >
        <Header visible={visible} href="searchList" buttonText="Movies List" />
        <Hero visible={visible} />
      </div>
      <div className={`second border-black border-2 ${hidden}`}>
        <Header
          visible="invisible"
          href="searchList"
          buttonText="Movies List"
        />
        <Hero visible="invisible" />
      </div>

      <div className={`${flipped ? "hidden" : "absolute"} left-36 top-0`}>
        <SearchButton flipAnimation={handleFlip} />
      </div>
    </div>
  );
}

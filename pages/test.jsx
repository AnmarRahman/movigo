import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useRouter } from "next/router";

export default function Test() {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState("visible");
  const router = useRouter();

  const handleFlip = () => {
    setFlipped(true);
    setTimeout(() => {
      setVisible("invisible");
    }, 400);
    setTimeout(() => {
      document.querySelector(".flip-container").classList.add("flipped");
    }, 500);
  };

  function movieSearched() {
    setFlipped(true);
    // setPosition("translate-x-full");
  }

  return (
    <div className="container overflow-hidden">
      <div
        className={`first ${
          flipped ? "flipped" : ""
        }  font-['Vintage'] border-r-2 border-black`}
      >
        <Header visible={visible} href="searchList" buttonText="Movies List" />
        <Hero visible={visible} flipAnimation={handleFlip} />
      </div>
      <div
        className={`second ${
          flipped ? "flipped" : ""
        }  border-r-2 border-black`}
      />
      <div className={`flip-container ${flipped ? "flipped" : ""}`}>
        <div className="front"></div>
        <div className="back bg-[#E2CCB1] h-[100vh] w-[50vw]"></div>
      </div>
    </div>
  );
}

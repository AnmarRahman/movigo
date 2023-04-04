import Image from "next/image";
import Logo from "../resources/movigo-logo-rm.png";
import Link from "next/link";

function Header({ href, buttonText }) {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <>
      <header className="text-gray-600 body-font flex items-center justify-center gap-x-2 pt-10">
        <div className="border-[#4E3C16] border-l-0 border-r-0  border-4 bg-[#E2CCB1] py-1">
          <div className="py-7 px-32 bg-[#E2CCB1] border-[#4E3C16] border-2 border-l-0 border-r-0 relative headerSide " />
        </div>
        <div id="headerContainer1" className=" relative">
          <div
            id="headerContainer2"
            className="bg-[#CABAA0] border-2 border-[#4E3C16] p-4"
          >
            <div id="headerDateWrapper" className="relative">
              <div
                id="headerDate"
                className=" py-6 px-32 text-4xl text-[#4E3C16] bg-[#E2CCB1] font-['Playfair'] border-4 border-[#4E3C16]"
              >
                <div
                  id="headerContent"
                  className="flex items-center justify-start"
                >
                  <div
                    id="left"
                    className="border-[1px] border-[#4E3C16] w-1/6 absolute right-[90%] translate-x-[45%]  "
                  />
                  {formattedDate}
                  <div
                    id="right"
                    className="border-[1px] border-[#4E3C16] w-1/6 absolute left-[90%] -translate-x-[45%] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[#4E3C16] border-l-0 border-r-0  border-4 bg-[#E2CCB1] py-1">
          <div className="py-7 px-32 bg-[#E2CCB1] border-[#4E3C16] border-2 border-l-0 border-r-0 relative headerSide " />
        </div>
      </header>
    </>
  );
}

export default Header;

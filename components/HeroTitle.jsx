function HeroTitle() {
  return (
    <div className="flex items-center justify-center gap-x-2">
      {/* <div className="border-[#4E3C16] border-l-0 border-r-0 border-4 bg-[#E2CCB1] py-1 w-1/6">
        <div className="py-2 bg-[#E2CCB1] border-[#4E3C16] border-2 border-l-0 border-r-0 relative headerDateSide " />
      </div> */}

      <div id="heroTitleWrapper" className="relative">
        <div
          id="heroTitle"
          className=" py-3 px-10 bg-[#4E3C16] font-['Playfair'] border-0 border-[#4E3C16]"
        >
          <div id="headerContent" className="flex items-center justify-start ">
            <div
              id="heroTitleLeft"
              className="border-[1px] border-white w-[8%] absolute right-[94%] translate-x-[45%] "
            />
            <div className="text-[15px] w-[750px] text-center text-white ">
              Discover the magic of movies with Movigo: Your ultimate movie
              companion.
            </div>
            <div
              id="heroTitleRight"
              className="border-[1px] border-white w-[8%] absolute left-[94%] -translate-x-[45%] "
            />
          </div>
        </div>
      </div>
      {/* <div className="border-[#4E3C16] border-l-0 border-r-0  border-4 bg-[#E2CCB1] py-1 w-1/6">
        <div className="py-2 bg-[#E2CCB1] border-[#4E3C16] border-2 border-l-0 border-r-0 relative headerDateSide " />
      </div> */}
    </div>
  );
}

export default HeroTitle;

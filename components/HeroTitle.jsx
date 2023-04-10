function HeroTitle() {
  return (
    <div className="flex items-center justify-center border-t-2 border-b-2 border-[#4E3C16] border-dotted py-1">
      <div id="heroTitleWrapper" className="relative">
        <div
          id="heroTitle"
          className=" py-2 px-10 bg-[#4E3C16] font-['Playfair'] border-0 border-[#4E3C16]"
        >
          <div id="headerContent" className="flex items-center justify-star t ">
            <div
              id="heroTitleLeft"
              className="border-[1px] border-white w-[8%] absolute right-[94%] translate-x-[45%] "
            />
            <div className="text-[14px] w-[750px] text-center text-white ">
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
    </div>
  );
}

export default HeroTitle;

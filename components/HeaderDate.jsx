function HeaderDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const separator = ", ";

  const formattedDate = date
    .toLocaleString("en-US", options)
    .split(",")
    .join(separator);
  return (
    <div className="flex items-center justify-center gap-x-2">
      <div className="border-[#4E3C16] border-l-0 border-r-0 border-4 bg-[#E2CCB1] py-1 w-1/6">
        <div className="py-3 bg-[#E2CCB1] border-[#4E3C16] border-2 border-l-0 border-r-0 relative headerDateSide " />
      </div>
      <div id="headerDateContainer1" className=" relative">
        <div
          id="headerDateContainer2"
          className="bg-[#CABAA0] border-2 border-[#4E3C16] p-4"
        >
          <div id="headerDateWrapper" className="relative">
            <div
              id="headerDate"
              className=" py-3 px-32  text-[#4E3C16] bg-[#E2CCB1] font-['Playfair'] border-4 border-[#4E3C16]"
            >
              <div
                id="headerContent"
                className="flex items-center justify-start"
              >
                <div
                  id="left"
                  className="border-[1px] border-[#4E3C16] w-[12%] absolute right-[92%] translate-x-[45%]  "
                />
                <div className="text-xl">{formattedDate}</div>
                <div
                  id="right"
                  className="border-[1px] border-[#4E3C16] w-[12%] absolute left-[92%] -translate-x-[45%] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#4E3C16] border-l-0 border-r-0  border-4 bg-[#E2CCB1] py-1 w-1/6">
        <div className="py-3 bg-[#E2CCB1] border-[#4E3C16] border-2 border-l-0 border-r-0 relative headerDateSide " />
      </div>
    </div>
  );
}

export default HeaderDate;

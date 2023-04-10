function HeaderDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const separator = ", ";

  const dayOfMonth = date.getDate();
  let suffix;

  if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) {
    suffix = "st";
  } else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) {
    suffix = "nd";
  } else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  const formattedDate = date
    .toLocaleString("en-US", options)
    .replace(dayOfMonth, dayOfMonth + suffix)
    .split(",")
    .join(separator);

  return (
    <div className="flex items-center justify-center gap-x-[2px] pb-2">
      <div className="border-[#4E3C16] border-l-0 border-r-0 border-4 bg-[#E2CCB1] py-1 w-1/6">
        <div className="py-2 bg-[#E2CCB1] border-[#4E3C16] border-2 border-l-0 border-r-0 relative headerDateSide " />
      </div>
      <div id="headerDateContainer1" className=" relative">
        <div
          id="headerDateContainer2"
          className="bg-[#CABAA0] border-2 border-[#4E3C16] px-2 py-[6px]"
        >
          <div className="relative">
            <div id="headerDateWrapper" className="relative">
              <div
                id="headerDate"
                className=" py-2 px-20  text-[#4E3C16] bg-[#E2CCB1] font-['Headliner'] border-4 border-[#4E3C16]"
              >
                <div
                  id="headerContent"
                  className="flex items-center justify-start"
                >
                  <div
                    id="headerDateLeft"
                    className="border-[1px] border-[#4E3C16] w-[12%] absolute right-[90%] translate-x-[45%]  "
                  />
                  <div className="text-3xl text-[#76591c] tracking-[2px]">
                    {formattedDate}
                  </div>
                  <div
                    id="headerDateRight"
                    className="border-[1px] border-[#4E3C16] w-[12%] absolute left-[90%] -translate-x-[45%] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#4E3C16] border-l-0 border-r-0  border-4 bg-[#E2CCB1] py-1 w-1/6">
        <div className="py-2 bg-[#E2CCB1] border-[#4E3C16] border-2 border-l-0 border-r-0 relative headerDateSide " />
      </div>
    </div>
  );
}

export default HeaderDate;

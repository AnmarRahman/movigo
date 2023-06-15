function HeaderTitleTop() {
  return (
    <div className="relative">
      {/* <div className="flex items-center justify-center gap-x-2 text-[#4E3C16] pb-4">
        <div className="border-[#6c5d3e] border-l-0 border-r-0 border-[2px] bg-[#E2CCB1] py-1 w-1/6 mt-5">
          <div className="py-1 bg-[#E2CCB1] border-[#6c5d3e] w-1/2 left-1/2 right-0 border-2 border-l-0 border-r-0 relative headerTitleLeftSide " />
        </div>
        <div
          id="headerContent"
          className="flex items-center justify-center h-[80px] border-t-0 border-[#6c5d3e] border-dashed  "
        >
          <div className="text-8xl font-['Vintage'] ">MOVIGO</div>
        </div>
        <div className="border-[#6c5d3e] border-l-0 border-r-0 border-[2px] bg-[#E2CCB1] py-1 w-1/6 mt-5">
          <div className="py-1 bg-[#E2CCB1] border-[#6c5d3e] w-1/2 right-1/2 left-0 border-2 border-l-0 border-r-0 relative headerTitleRightSide  " />
        </div>
        <div className="absolute right-7 -top-6 text-4xl">
          <div className="flex items-center justify-center font-['ThorneShaded']">
            2<span className="text-3xl mb-10 font-['Playfair']">&#162;</span>
            <span className="text-lg mb-4 pl-1 underline decoration-double decoration-1">
              Each
            </span>
          </div>
        </div>
      </div> */}
      <header class="text-gray-600 body-font bg-gray-500">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderTitleTop;

import { useRouter } from "next/router";
import { useState } from "react";

function SearchButton({ flipAnimation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  function movieSearched() {
    if (searchQuery.trim() !== "") {
      flipAnimation();
      setTimeout(() => {
        router.push(`/${searchQuery}`);
      }, 1500);
    }
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <div className="relative ">
          <label
            htmlFor="hero-field"
            className="leading-7 text-sm text-gray-600"
          >
            Movie Title
          </label>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            name="hero-field"
            className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleSearchInputChange}
          />
        </div>
        <button
          className="inline-flex text-black font-bold bg-[#EF3E38] border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg"
          onClick={movieSearched}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchButton;

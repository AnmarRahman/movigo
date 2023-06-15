import { useRouter } from "next/router";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function SearchButton() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  function movieSearched() {
    if (searchQuery.trim() !== "") {
      setTimeout(() => {
        router.push(`/${searchQuery}`);
      }, 500);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      movieSearched();
    }
  };

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <div className="relative ">
          <input
            placeholder="Search"
            type="text"
            id="searchQuery"
            value={searchQuery}
            name="hero-field"
            className="pl-11 pr-4 w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyPress}
          />
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BiSearch className="text-2xl" />
          </span>
        </div>
      </div>
    </>
  );
}

export default SearchButton;

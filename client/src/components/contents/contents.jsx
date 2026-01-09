import React from "react";

const Contents = () => {
  return (
    <div className="relative inline-block w-full">
      <select
        // value={language}
        // onChange={(e) => setLanguage(e.target.value)}
        className="px-4 py-2 rounded border border-white bg-black bg-opacity-50 text-white focus:outline-none focus:border-red-600 cursor-pointer appearance-none w-full"
      >
        <option value="mov" className="bg-white text-black">
          MOVIES
        </option>
        <option value="ser" className="bg-white text-black">
          SERIES
        </option>
        <option value="doc" className="bg-white text-black">
          DOCUMENTARY
        </option>
        <option value="ani" className="bg-white text-black">
          ANIMATIONS
        </option>
        <option value="kid" className="bg-white text-black">
          KIDS
        </option>
        <option value="spo" className="bg-white text-black">
          SPORTS
        </option>
      </select>

      {/* Custom arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Contents;

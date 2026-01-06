import React, { useState } from "react";
import language from "./language";

const Languageselectors = ({language, setLanguage}) => {
//   const [language, setLanguage] = useState("en");
  return (
    <div className="relative inline-block w-30">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-4 py-2 rounded border border-white bg-black bg-opacity-50 text-white focus:outline-none focus:border-red-600 cursor-pointer appearance-none w-full"
      >
        <option value="en" className="bg-white text-black">
          English
        </option>
        <option value="np" className="bg-white text-black">
          नेपाली
        </option>
        <option value="es" className="bg-white text-black">
          Español
        </option>
        <option value="fr" className="bg-white text-black">
          Français
        </option>
        <option value="de" className="bg-white text-black">
          Deutsch
        </option>
        <option value="it" className="bg-white text-black">
          Italiano
        </option>
        <option value="pt" className="bg-white text-black">
          Português
        </option>
        <option value="ru" className="bg-white text-black">
          Русский
        </option>
        <option value="zh" className="bg-white text-black">
          中文
        </option>
        <option value="ja" className="bg-white text-black">
          日本語
        </option>
        <option value="ko" className="bg-white text-black">
          한국어
        </option>
        <option value="ar" className="bg-white text-black">
          العربية
        </option>
        <option value="hi" className="bg-white text-black">
          हिन्दी
        </option>
        <option value="bn" className="bg-white text-black">
          বাংলা
        </option>
        <option value="ur" className="bg-white text-black">
          اردو
        </option>
        <option value="vi" className="bg-white text-black">
          Tiếng Việt
        </option>
        <option value="th" className="bg-white text-black">
          ไทย
        </option>
        <option value="tr" className="bg-white text-black">
          Türkçe
        </option>
        <option value="id" className="bg-white text-black">
          Bahasa Indonesia
        </option>
        <option value="ms" className="bg-white text-black">
          Bahasa Melayu
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

export default Languageselectors;

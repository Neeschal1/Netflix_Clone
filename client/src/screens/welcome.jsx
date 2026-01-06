import React, { useState } from "react";
import languages from "../constants/language";
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";


const Welcome = () => {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleAboutUs = () => {
    navigate("/about");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen relative flex flex-col items-center justify-center text-white"
    >
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 px-20 z-10">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
        <div className="flex items-center gap-4">
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

          <button
            onClick={handleAboutUs}
            className="px-4 py-2 rounded border border-white bg-transparent text-white font-medium hover:bg-white hover:text-black transition"
          >
            {languages[language].aboutus}
          </button>
        </div>
      </div>

      {/* Main centered content */}
      <div className="flex items-center flex-col z-10 max-w-4xl w-full px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          {languages[language].welcome}
        </h1>
        <p className="mb-6 text-xl font-medium text-center">
          {languages[language].description}
        </p>
        <p className="mb-8 text-lg text-center">
          {languages[language].suggestions}
        </p>

        {/* Signup and Login buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button
            onClick={handleSignup}
            className="flex-1 bg-red-600 px-8 py-4 rounded text-white font-semibold hover:bg-red-700 transition text-xl"
          >
            {languages[language].signup}
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 bg-white px-8 py-4 rounded text-black font-semibold hover:bg-gray-200 transition text-xl"
          >
            {languages[language].login}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

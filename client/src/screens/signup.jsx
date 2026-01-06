import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import languages from "../constants/language";
// import { LanguageContext } from "../context/LanguageContext"; // assuming you have context

const Signup = () => {
  // const { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleAboutUs = () => {
    navigate("/about");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // handle signup logic
    console.log("Signup submitted");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen relative flex flex-col text-white"
    >
      {/* Full-screen semi-transparent black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header with logo, dropdown, about us */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 px-20 z-10">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
        <div className="flex items-center gap-4">
          {/* Language selector */}
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

      {/* Signup form container */}
      <div className="flex flex-col z-10 items-center justify-center h-full w-full px-4">
        <div className="bg-black/70 p-8 rounded-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {languages[language].signup}
          </h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSignupSubmit}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 rounded bg-white text-black focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded bg-white text-black focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-2 rounded bg-white text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-red-600 px-4 py-3 rounded text-white font-semibold hover:bg-red-700 transition mt-2"
            >
              {languages[language].signup}
            </button>
          </form>
          <p className="text-center text-white mt-4">
            {languages[language].login}?{" "}
            <button
              onClick={handleLogin}
              className="underline hover:text-red-600"
            >
              {languages[language].login}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

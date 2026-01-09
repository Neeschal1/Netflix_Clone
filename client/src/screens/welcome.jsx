import React, { useState } from "react";
import languages from "../constants/language";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "../components/welcome/features";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import Languageselectors from "../constants/languageselectors";
import Footer from "../constants/footer";
import HowItWorks from "../components/welcome/howitworks";
import CallToAction from "../components/welcome/calltoaction";

const Welcome = ({language, setLanguage}) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleAboutUs = () => {
    navigate("/about");
  };

  return (
    <>
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen relative flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 px-20 z-10">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <Languageselectors language={language} setLanguage={setLanguage} />

          <button
            onClick={handleAboutUs}
            className="px-4 py-2 rounded border border-white bg-transparent text-white hover:bg-white hover:text-black transition"
          >
            {languages[language].aboutus}
          </button>
        </div>
      </div>

      {/* Main centered content */}
      <div className="flex items-center flex-col z-10 max-w-4xl w-full px-4">
        <h1 className="text-5xl md:text-6xl mb-4 text-center">
          {languages[language].welcome}
        </h1>
        <p className="mb-6 text-xl text-center">
          {languages[language].description}
        </p>
        <p className="mb-8 text-lg text-center text-gray-300">
          {languages[language].suggestions}
        </p>

        {/* Signup and Login buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button
            onClick={handleSignup}
            className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded text-white text-xl transition-all duration-300 shadow-lg hover:shadow-red-600/50 transform hover:scale-105"
          >
            {languages[language].signup}
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 bg-white px-8 py-4 rounded text-black text-xl hover:bg-gray-200 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            {languages[language].login}
          </button>
        </div>
      </div>
    </div>
    <FeaturesSection />
    <HowItWorks />
    <CallToAction />
    <Footer />
    {/* <Footer language={language} /> */}
    </>
  );
};

export default Welcome;
import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import languages from "./language";

const Header = ({ language }) => {
  const navigate = useNavigate();
  const handleAboutUs = () => {
    navigate("/about");
  };
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 px-20 z-10">
      <img src={logo} alt="Logo" className="h-24 w-auto" />
      <button
        onClick={handleAboutUs}
        className="px-4 py-2 rounded border border-white bg-transparent text-white font-medium hover:bg-white hover:text-black transition"
      >
        {languages[language].aboutus}
      </button>
    </div>
  );
};

export default Header;

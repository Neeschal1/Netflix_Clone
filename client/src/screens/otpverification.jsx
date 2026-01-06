import React, { useState } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import languages from "../constants/language";

const OTP = ({ language }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false)
  const handleAboutUs = () => {
    navigate("/aboutus");
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
      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 px-20 z-10">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
        <button
          onClick={handleAboutUs}
          className="px-4 py-2 rounded border border-white bg-transparent text-white font-medium hover:bg-white hover:text-black transition"
        >
          About Us
        </button>
      </div>

      <form
        // onSubmit={handlesubmit}
        className="p-5 flex w-4/12 items-center justify-center bg-black/50 flex-col gap-5 rounded"
      >
        <div className="flex w-full flex-col items-start ">
          <h1 className="text-4xl font-bold mb-4 text-center">OTP</h1>
          <p className="mt-[-8px]">{languages[language].otp}</p>
        </div>

        <div className="w-full">
          <p>OTP:</p>
          <input
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="w-full py-3 bg-white/30 rounded p-2 text-white mt-2"
            type="text"
            placeholder="Enter OTP"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded text-white font-semibold mt-4 transition 
    ${
      loading
        ? "hover:bg-red-800 cursor-not-allowed"
        : "bg-red-600 hover:bg-red-700"
    }`}
        >
          {loading ? "Signing in..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default OTP;

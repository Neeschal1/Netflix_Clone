import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import languages from "../constants/language";
import otpverification from "../api/accounts/handleotp";
import Header from "../constants/header";

const OTP = ({ language }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const location = useLocation()

  const users_email = location.state?.email

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const getusername = () => {};

  const handleotp = (e) => {
    e.preventDefault();
    otpverification(e, users_email, otp, navigate, setLoading);
  };

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
      <Header language={language} />

      <form
        onSubmit={handleotp}
        className="p-5 flex w-4/12 items-center justify-center bg-black/50 flex-col gap-5 rounded"
      >
        <div className="flex w-full flex-col items-start ">
          <h1 className="text-4xl font-bold mb-4 text-center">OTP</h1>
          <p className="mt-[-8px]">{languages[language].otp}: {users_email}</p>
          <p className="mt-2 text-red-400 font-bold">
            Time Left: {formatTime(timeLeft)}
          </p>
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
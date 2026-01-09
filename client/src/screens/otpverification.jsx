import React, { useEffect, useState, useRef } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import languages from "../constants/language";
import otpverification from "../api/accounts/handleotp";
import Header from "../constants/header";

const OTP = ({ language }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const location = useLocation();
  const inputRefs = useRef([]);

  const users_email = location.state?.email;

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

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    // Focus on the last filled input or the next empty one
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleotp = (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    otpverification(e, users_email, otpString, navigate, setLoading);
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
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Your Header Component */}
      <Header language={language} />

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Card Container */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-2xl border border-neutral-700">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/50">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Verify OTP</h1>
            <p className="text-gray-400 text-sm">{languages[language].otp}: <span className="text-white font-medium">{users_email}</span></p>
            
            {/* Timer */}
            <div className="mt-4 inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 rounded-lg px-4 py-2">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-red-400 font-bold">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* OTP Input */}
          <form onSubmit={handleotp}>
            <div className="mb-8">
              <label className="block text-gray-300 text-sm font-medium mb-4 text-center">Enter 6-Digit Code</label>
              
              {/* OTP Input Boxes */}
              <div className="flex justify-center gap-2 mb-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-14 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white text-2xl text-center focus:outline-none focus:border-red-600 focus:bg-neutral-700 transition-all font-bold"
                    required
                  />
                ))}
              </div>
              
              <p className="text-gray-500 text-xs text-center">Enter the code sent to your email</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || timeLeft <= 0 || otp.some(d => d === "")}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : timeLeft <= 0 ? (
                "Code Expired"
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Verify & Continue
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <button 
              onClick={() => {/* Add resend logic here */}}
              className="text-gray-400 hover:text-white text-sm transition-colors"
              disabled={timeLeft > 0}
            >
              Didn't receive code? Resend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
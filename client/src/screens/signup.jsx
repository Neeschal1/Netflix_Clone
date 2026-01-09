import React, { useState } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import handlesignup from "../api/accounts/handlesignup";
import languages from "../constants/language";
import Header from "../constants/header";
import otpverification from "../api/accounts/handleotp";

const Signup = ({ language }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    handlesignup(e, Firstname, Lastname, Username, Email, Password, navigate, setLoading);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-screen relative flex flex-col items-center justify-center text-white py-8"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Your Header Component */}
      <Header language={language} />

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Card Container */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-2xl border border-neutral-700 w-full">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/50">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{languages[language].signup}</h1>
            <p className="text-gray-400 text-sm">{languages[language].suggestions}</p>
          </div>

          {/* Form */}
          <form onSubmit={handlesubmit} className="space-y-5 w-full">
            {/* First Name */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
              <input
                value={Firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-neutral-700 transition-all"
                type="text"
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
              <input
                value={Lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-neutral-700 transition-all"
                type="text"
                placeholder="Enter your last name"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Username</label>
              <input
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-neutral-700 transition-all"
                type="text"
                placeholder="Select a unique username"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-neutral-700 transition-all"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-neutral-700 transition-all pr-12"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={20} />
                  ) : (
                    <FaRegEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 transition-all duration-300 shadow-lg hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 mt-6"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing up...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Sign Up
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <button 
                onClick={() => navigate('/login')}
                className="text-red-500 hover:text-red-400 font-medium transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
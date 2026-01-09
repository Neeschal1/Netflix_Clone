import React, { useState } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import handlelogin from "../api/accounts/handlelogin";
import languages from "../constants/language";
import Header from "../constants/header";

const Login = ({ language }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    handlelogin(e, Email, Password, navigate, setLoading, setError);
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
            <h1 className="text-3xl text-white mb-2">{languages[language].login}</h1>
            <p className="text-gray-400 text-sm">{languages[language].description}</p>
          </div>

          {/* Form */}
          <form onSubmit={handlesubmit}>
            {/* Email */}
            <div className="mb-8">
              <label className="block text-gray-300 text-sm mb-3">Email:</label>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 bg-white/30 rounded p-2 text-white"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-8">
              <label className="block text-gray-300 text-sm mb-3">Password:</label>
              <div className="relative">
                <input
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 bg-white/30 rounded p-2 text-white pr-12"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={24} />
                  ) : (
                    <FaRegEye size={24} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 transition-all duration-300 shadow-lg hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Log In
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <button 
              onClick={() => navigate('/signup')}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Don't have an account? Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
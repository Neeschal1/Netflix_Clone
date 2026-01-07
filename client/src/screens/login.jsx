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
  const [loading, setLoading] = useState(false)
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
      <Header language={language} />
      <form
        onSubmit={handlesubmit}
        className="p-5 flex w-4/12 items-center justify-center bg-black/50 flex-col gap-5 rounded"
      >
        <div className="flex w-full flex-col items-start ">
          <h1 className="text-4xl font-bold mb-4 text-center">
            {languages[language].login}
          </h1>
          <p className="mt-[-8px]">{languages[language].description}</p>
        </div>

        {/* Email */}
        <div className="w-full">
          <p>Email:</p>
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full py-3 bg-white/30 rounded p-2 text-white mt-2"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="w-full relative">
          <p>Password:</p>
          <input
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full py-3 bg-white/30 rounded p-2 text-white mt-2 pr-12"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 mt-[-25px] transform -translate-y-1/2 flex items-center text-white bg-transparent border-none p-1"
          >
            {showPassword ? (
              <FaRegEyeSlash size={24} />
            ) : (
              <FaRegEye size={24} />
            )}
          </button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded text-white font-semibold mt-4 transition 
    ${loading ? "hover:bg-red-800 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

      </form>
    </div>
  );
};

export default Login;

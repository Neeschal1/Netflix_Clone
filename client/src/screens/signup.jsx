import React, { useState } from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handlesignup = async (e) => {
    e.preventDefault();
    const data = {
      first_name: Firstname,
      last_name: Lastname,
      username: Username,
      email: Email,
      password: Password,
    };

    try {
      const url = await axios.post(
        "http://127.0.0.1:8000/accounts/signup/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(url.data);
    } catch (err) {
      console.log("Django Error: ", err);
    }
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

      {/* Form Container */}
      <form
        onSubmit={handlesignup}
        className="p-5 flex w-4/12 items-center justify-center bg-black/50 flex-col gap-5 rounded"
      >
        <div className="flex w-full flex-col items-start ">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Signup
          </h1>
          <p className="mt-[-8px]">Create your account or sign in to continue.</p>
        </div>

        {/* First Name */}
        <div className="w-full">
          <p>First Name:</p>
          <input
            value={Firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="w-full py-3 bg-white/30 rounded p-2 text-white mt-2"
            type="text"
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="w-full">
          <p>Last Name:</p>
          <input
            value={Lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="w-full py-3 bg-white/30 rounded p-2 text-white mt-2"
            type="text"
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="w-full">
          <p>Username:</p>
          <input
            value={Username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="w-full py-3 bg-white/30 rounded p-2 text-white mt-2"
            type="text"
            placeholder="Select a unique username"
            required
          />
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
              // Eye open icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              // Eye closed icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.743-4.264M9.88 9.88a3 3 0 104.24 4.24M15 12a3 3 0 01-3 3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-red-600 py-3 rounded text-white font-semibold hover:bg-red-700 transition mt-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

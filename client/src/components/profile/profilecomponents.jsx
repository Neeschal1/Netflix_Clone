import React from "react";
// import languages from "../constants/language";
import Header from "../../constants/header";

const Profilecomponents = ({ language }) => {
  return (
    <div>
      <Header language={language} />
      <form
        // onSubmit={}
        className="p-5 flex w-4/12 items-center justify-center bg-black/50 flex-col gap-5 rounded"
      >
        {/* <div className="flex w-full flex-col items-start ">
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
        </button> */}
      </form>
    </div>
  );
};

export default Profilecomponents;

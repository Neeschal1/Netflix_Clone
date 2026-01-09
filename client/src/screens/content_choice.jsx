import React, { useState } from 'react';
import banner from "../assets/banner.png";
import Header from "../constants/header";
import { useLocation, useNavigate } from "react-router-dom";
import Choices from "../api/contents/choices";

const Contentchoices = ({ language }) => {
  const navigate = useNavigate();
  const [val, setVal] = useState("MOVIES");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const userid = location.state?.id;

  const on_clicked = (e) => {
    e.preventDefault();
    Choices(e, userid, val, setLoading, navigate);
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
                  <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Content Choices</h1>
            <p className="text-gray-400 text-sm">Choose your loved and desired content that you want to see mostly</p>
          </div>

          {/* Content Type Selector */}
          <div className="mb-8">
            <label className="block text-gray-300 text-sm font-medium mb-3">Preferred Content Type</label>
            <div className="relative">
              <select
                value={val}
                onChange={(e) => setVal(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-neutral-700 transition-all appearance-none cursor-pointer"
              >
                <option value="MOVIES">Movies</option>
                <option value="SERIES">Series</option>
                <option value="DOCUMENTARY">Documentary</option>
                <option value="ANIMATIONS">Animations</option>
                <option value="KIDS">Kids</option>
                <option value="SPORTS">Sports</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={on_clicked}
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Save & Continue
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            )}
          </button>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentchoices;
import React from "react";
import banner from "../assets/banner.png";
import Header from "../constants/header";
import { useLocation } from "react-router-dom";

const Subscribed = ({ language }) => {
  const location = useLocation();
  const { choosedPlan, describe, cost, color } = location.state || {};

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

      <div
        className="p-6 sm:p-8 w-11/12 sm:w-9/12 lg:w-3/12 bg-black/50 rounded flex flex-col gap-8 text-center"
      >
        <h1 className="text-4xl font-bold">{choosedPlan}</h1>
        <p className="text-gray-300">{describe}</p>
        <h2 className="text-2xl font-semibold mt-4">${cost} / month</h2>
        <button style={{backgroundColor: color}}>Buy</button>
      </div>
    </div>
  );
};

export default Subscribed;

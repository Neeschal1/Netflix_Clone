import React, { useState } from "react";
import banner from "../assets/banner.png";
import Header from "../constants/header";
import Subscribed from './subscribedplan'
import { useNavigate } from "react-router-dom";

const plans = [
  {
    id: 1,
    Plantype: "Basic",
    Description:
      "Ideal for individuals getting started with essential features and basic support.",
    Price: 30,
    color: "#804A00",
  },
  {
    id: 2,
    Plantype: "Premium",
    Description:
      "Perfect for professionals who need advanced features and priority support.",
    Price: 40,
    color: "#0F172A",
  },
  {
    id: 3,
    Plantype: "Elite",
    Description:
      "Best for businesses and power users who want top-tier performance and support.",
    Price: 50,
    color: "#800080",
  },
];

const Plans = ({ language }) => {
  const [choosedplan, setChoosedPlan] = useState('')
  const [describe, setDescribe] = useState('')
  const [cost, setCost] = useState('')
  const [showSubscribed, setShowSubscribed] = useState(false);
  const navigate = useNavigate()

  const handleButton = () => {
    setChoosedPlan(plans.Plantype)
    setDescribe(plans.Description)
    setCost(plans.Price)
    Subscribed(choosedplan, describe, cost)
    setShowSubscribed(true);
    navigate('/signup/otp/plans')
  }

   if (showSubscribed) {
    return <Subscribed language={language} choosedPlan={choosedplan} describe={describe} cost={cost} />;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-screen relative flex flex-col items-center justify-center text-white"
    >
      {/* Header (same as Login) */}
      <Header language={language} />

      {/* Main Card */}
      <div className="p-6 sm:p-8 w-11/12 sm:w-9/12 lg:w-7/12 bg-black/50 rounded flex flex-col gap-8">
        
        {/* Title + Description */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold mb-2">Plans</h1>
          <p className="text-gray-300">
            Choose a plan that fits your needs. You can upgrade or downgrade
            anytime as your requirements grow.
          </p>
        </div>

        {/* Plans Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center">
          {plans.map((items) => (
            <button
              key={items.id}
              onClick={handleButton}
              style={{ backgroundColor: items.color }}
              className="
                group
                flex flex-col
                w-full max-w-[300px]
                px-6 py-6
                rounded-2xl
                text-white
                transition-all duration-500 ease-out
                hover:scale-[1.05]
                hover:shadow-2xl
                active:scale-95
                focus:outline-none
              "
            >
              <h2 className="text-2xl font-bold mb-2 group-hover:tracking-wide transition-all">
                {items.Plantype}
              </h2>

              <p className="text-sm opacity-90 leading-relaxed mb-4">
                {items.Description}
              </p>

              <h3 className="text-xl font-semibold mt-auto">
                ${items.Price}
                <span className="text-sm font-normal opacity-80"> / month</span>
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;

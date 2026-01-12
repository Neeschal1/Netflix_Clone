import React from "react";
import banner from "../assets/banner.png";
import Header from "../constants/header";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    id: 1,
    Plantype: "Basic",
    Description: "Perfect for beginners. Access essential features with basic support and limited usage. Ideal for personal use or learning.",
    Price: 30,
    color: "#804A00",
  },
  {
    id: 2,
    Plantype: "Premium",
    Description: "For professionals who need more. Get higher limits, advanced tools, and priority support for growing workloads.",
    Price: 40,
    color: "#0F172A",
  },
  {
    id: 3,
    Plantype: "Elite",
    Description: "Designed for power users. Enjoy unlimited access and top-tier support. Ideal for those who want a complete premium experience.",
    Price: 50,
    color: "#800080",
  },
];

const Plans = ({ language }) => {
  const navigate = useNavigate();

  const handleButton = (plan) => {
    navigate("/signup/otp/plans/subscription", { 
      state: { 
        choosedPlan: plan.Plantype, 
        describe: plan.Description, 
        cost: plan.Price, 
        color: plan.color 
      } 
    });
  };

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
      <Header language={language} />

      <div className="p-6 sm:p-8 w-11/12 sm:w-9/12 lg:w-7/12 bg-black/50 rounded flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold mb-2">Plans</h1>
          <p className="text-gray-300">
            Choose a plan that fits your needs. You can upgrade or downgrade anytime as your requirements grow.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => handleButton(plan)}
              style={{ backgroundColor: plan.color }}
              className="group flex flex-col w-full max-w-[300px] px-6 py-6 rounded-2xl text-white transition-all duration-500 ease-out hover:scale-[1.05] hover:shadow-2xl active:scale-95 focus:outline-none"
            >
              <h2 className="text-2xl font-bold mb-2 group-hover:tracking-wide transition-all">
                {plan.Plantype}
              </h2>

              <p className="text-sm opacity-90 leading-relaxed mb-4">{plan.Description}</p>

              <h3 className="text-xl font-semibold mt-auto">
                ${plan.Price}
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

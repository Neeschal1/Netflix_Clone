import React from 'react'
import banner from '../assets/banner.png'
import Header from '../constants/header'

const Subscribed = ({ language, choosedPlan, describe, cost }) => {
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
      
      </div>
  )
}

export default Subscribed
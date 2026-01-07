import React from "react";
import logo from "../assets/logo.png";

const Aboutus = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center text-white">
      
      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-20 py-4 z-10">
        <img src={logo} alt="Netflix Clone Logo" className="h-24 w-auto" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center w-11/12 md:w-3/4 lg:w-3/3 pt-40 pb-20">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-10">
          About Us
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Welcome to <span className="font-semibold">Netflix Clone</span>, a fully self-made project created with the purpose of exploring, understanding, and implementing real-world web application development concepts inspired by modern streaming platforms.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          This project has been <span className="font-semibold">independently designed and developed by Nischal Pokharel</span> as a personal learning initiative and portfolio showcase. From planning and design to development and testing, every aspect of this project has been executed individually with a strong focus on clean architecture, user experience, and scalability.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          The intention behind building Netflix Clone is not to recreate or compete with Netflix as a commercial product, but to gain deep hands-on experience in building applications that reflect real-world industry standards. This includes understanding how large-scale platforms structure their user interfaces, manage authentication, handle user flows, and integrate frontend and backend systems seamlessly.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Throughout the development process, special attention has been given to UI/UX design principles such as visual hierarchy, responsiveness, accessibility, and consistency. The layout, animations, and interactions are carefully crafted to provide a smooth and engaging user experience across different screen sizes and devices.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Netflix Clone also serves as a technical experiment to strengthen knowledge in modern web technologies. The project focuses on component-based architecture, state management, API integration, authentication workflows, and maintainable code practices that are commonly used in professional software development environments.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          This application demonstrates the ability to transform a complex idea into a structured and functional product. It reflects problem-solving skills, attention to detail, and a strong commitment to continuous learning through practical implementation rather than relying solely on tutorials or theoretical knowledge.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          As a self-driven project, Netflix Clone highlights the importance of discipline, consistency, and curiosity in software development. Every challenge encountered during development—from layout issues to backend communication—has contributed to deeper technical understanding and improved development practices.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          This project is strictly intended for educational and portfolio purposes only. It is not affiliated with, endorsed by, or connected to Netflix, Inc. All trademarks, logos, brand names, and design references belong to their respective owners.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          Netflix Clone represents a milestone in the learning journey of <span className="font-semibold">Nischal Pokharel</span>—showcasing passion for development, respect for design, and a commitment to building meaningful projects that reflect real-world applications.
        </p>

      </div>
    </div>
  );
};

export default Aboutus;

import React from "react";
import languages from "../constants/language"; // your language file

const Footer = ({ language }) => {
  return (
    <footer className="bg-black text-gray-400 px-10 py-10 mt-10">
      {/* Top text */}
      <div className="text-gray-500 mb-6">
        {languages[language]?.questions || "Questions? Contact us."}
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-6">
        <a href="#" className="hover:underline">
          {languages[language]?.faq || "FAQ"}
        </a>
        <a href="#" className="hover:underline">
          {languages[language]?.help || "Help Center"}
        </a>
        <a href="#" className="hover:underline">
          {languages[language]?.terms || "Terms of Use"}
        </a>
        <a href="#" className="hover:underline">
          {languages[language]?.privacy || "Privacy"}
        </a>

        <a href="#" className="hover:underline">
          {languages[language]?.cookies || "Cookie Preferences"}
        </a>
        <a href="#" className="hover:underline">
          {languages[language]?.corporate || "Corporate Information"}
        </a>
        <a href="#" className="hover:underline">
          {languages[language]?.contact || "Contact Us"}
        </a>
        <a href="#" className="hover:underline">
          {languages[language]?.speed || "Speed Test"}
        </a>
      </div>

      {/* Language selector */}
      <div className="mb-6">
        <select
          defaultValue={language}
          className="bg-black border border-gray-600 text-gray-400 px-4 py-2 rounded"
        >
          {Object.keys(languages).map((lang) => (
            <option key={lang} value={lang}>
              {languages[lang].name || lang}
            </option>
          ))}
        </select>
      </div>

      {/* Bottom text */}
      <div className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Netflix, Inc.
      </div>
    </footer>
  );
};

export default Footer;

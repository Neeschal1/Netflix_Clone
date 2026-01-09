import React from "react";
import languages from "../constants/language"; // your language file

//  Footer Component
const Footer = ({ language, onAboutClick }) => {
  return (
    <footer className="w-full bg-black border-t border-neutral-800 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/50">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
                </svg>
              </div>
              <span className="text-2xl text-white">Netflix Clone</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for unlimited entertainment. Watch anywhere, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Browse
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  My List
                </button>
              </li>
              <li>
                <button onClick={onAboutClick} className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Help Center
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Contact Us
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-red-500 transition-colors text-sm">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-white text-lg mb-4">Stay Connected</h3>
            <div className="flex gap-3 mb-6">
              <button className="w-10 h-10 bg-neutral-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-600/50">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-neutral-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-600/50">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-neutral-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-600/50">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-neutral-800 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-600/50">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-2">Get updates & offers</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 bg-neutral-800 border border-neutral-700 rounded text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded text-white text-sm transition-all shadow-lg hover:shadow-red-600/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Netflix Clone. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="  text-sm transition-colors">
              Cookie Preferences
            </button>
            <button className="  text-sm transition-colors">
              Legal Notice
            </button>
            <button className="  text-sm transition-colors">
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer

// Usage:
// <SexyFooter language={language} onAboutClick={handleAboutUs} />
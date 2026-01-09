const HowItWorks = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-neutral-900 to-black py-20 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-40 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-16">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-lg shadow-red-600/50">
              1
            </div>
            <h3 className="text-xl text-white mb-3">Sign Up</h3>
            <p className="text-gray-400 text-sm">Create your account in seconds with just your email.</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-lg shadow-red-600/50">
              2
            </div>
            <h3 className="text-xl text-white mb-3">Choose Plan</h3>
            <p className="text-gray-400 text-sm">Select the perfect plan that fits your needs.</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-lg shadow-red-600/50">
              3
            </div>
            <h3 className="text-xl text-white mb-3">Set Preferences</h3>
            <p className="text-gray-400 text-sm">Customize your content preferences and create profiles.</p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-lg shadow-red-600/50">
              4
            </div>
            <h3 className="text-xl text-white mb-3">Start Watching</h3>
            <p className="text-gray-400 text-sm">Enjoy unlimited entertainment on all your devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks
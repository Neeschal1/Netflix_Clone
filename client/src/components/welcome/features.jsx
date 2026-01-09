const FeaturesSection = () => {
  return (
    <div className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-16">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 border border-neutral-700 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-600/50">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl text-white mb-4">Unlimited Content</h3>
            <p className="text-gray-400">Access thousands of movies, series, and documentaries anytime, anywhere.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 border border-neutral-700 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-600/50">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <h3 className="text-2xl text-white mb-4">HD Quality</h3>
            <p className="text-gray-400">Stream in stunning high definition with crystal clear audio quality.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 border border-neutral-700 hover:border-red-600 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-600/50">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
              </svg>
            </div>
            <h3 className="text-2xl text-white mb-4">Multi-Device</h3>
            <p className="text-gray-400">Watch on your TV, laptop, phone, or tablet - all with one account.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection
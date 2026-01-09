const CallToAction = ({ onSignupClick }) => {
  return (
    <div className="w-full bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-6">Ready to Start?</h2>
        <p className="text-xl text-gray-300 mb-10">Join thousands of happy viewers today and experience entertainment like never before.</p>
        
        <button
          onClick={onSignupClick}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-12 py-5 rounded text-white text-xl transition-all duration-300 shadow-lg hover:shadow-red-600/50 transform hover:scale-105"
        >
          <span className="flex items-center justify-center gap-2">
            Get Started Now
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CallToAction
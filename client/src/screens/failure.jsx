import React, { useEffect, useState } from 'react';
import { XCircle, RefreshCw, Home, HelpCircle, AlertCircle } from 'lucide-react';

const PaymentFailure = ({language}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animate content in
    setTimeout(() => setShowContent(true), 100);
  }, []);

  const handleRetry = () => {
    // Navigate back to payment page
    window.location.href = '/signup/plan';
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleContactSupport = () => {
    window.location.href = '/support';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div 
        className={`max-w-md w-full transform transition-all duration-700 ${
          showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Failure Icon */}
          <div className="bg-gradient-to-br from-red-500 to-orange-600 p-8 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4">
              <XCircle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Payment Failed</h1>
            <p className="text-red-100">Don't worry, your card was not charged</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Error Information */}
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-1">Transaction Declined</h3>
                    <p className="text-sm text-red-700">
                      Your payment could not be processed. This might be due to insufficient funds, 
                      an incorrect card number, or your bank declining the transaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Common Reasons */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Common Reasons:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-gray-600 text-xs">•</span>
                    </div>
                    <span className="text-gray-600 text-sm">Insufficient funds in account</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-gray-600 text-xs">•</span>
                    </div>
                    <span className="text-gray-600 text-sm">Incorrect card details entered</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-gray-600 text-xs">•</span>
                    </div>
                    <span className="text-gray-600 text-sm">Card expired or blocked</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-gray-600 text-xs">•</span>
                    </div>
                    <span className="text-gray-600 text-sm">Bank security restrictions</span>
                  </li>
                </ul>
              </div>

              {/* What to Do */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  What should I do?
                </h3>
                <p className="text-sm text-blue-700">
                  Please verify your payment details and try again. If the problem persists, 
                  try a different payment method or contact your bank to authorize the transaction.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={handleRetry}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center hover:from-red-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <RefreshCw className="mr-2 w-5 h-5" />
                  Try Again
                </button>
                
                <button
                  onClick={handleContactSupport}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-700 transition-all duration-200"
                >
                  <HelpCircle className="mr-2 w-5 h-5" />
                  Contact Support
                </button>

                <button
                  onClick={handleGoHome}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-200 transition-all duration-200"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Text */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Having trouble? <a href="/support" className="text-red-600 hover:text-red-700 font-medium">Get Help</a>
        </p>
      </div>
    </div>
  );
};

export default PaymentFailure;
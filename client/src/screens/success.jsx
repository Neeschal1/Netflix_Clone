import React, { useEffect, useState } from "react";
import { CheckCircle, ArrowRight, Home, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = ({language}) => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  const handleContinue = () => {
    navigate('/signup/otp/plans/subscription/choices/')
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div
        className={`max-w-md w-full transform transition-all duration-700 ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Success Icon */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4 animate-bounce">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Payment Successful!
            </h1>
            <p className="text-green-100">Your subscription is now active</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Order Details */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold text-gray-900">
                    #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold text-gray-900">Stripe</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-gray-900">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* What's Next */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  What's Next?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Confirmation email sent to your inbox
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Your account has been upgraded
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Access all premium features now
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Continue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Text */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Need help?{" "}
          <a
            href="/support"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;

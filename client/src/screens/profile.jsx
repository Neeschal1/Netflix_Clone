import { useState } from "react";
import banner from "../assets/banner.png";
import axios from "axios";
import {
  CLOUDINARY_URL,
  CLOUDINARY_UPLOAD_PRESET,
} from "../constants/cloudinary";
import Create_Profile from "../api/profile/create_profile";
import Header from "../constants/header";
import languages from "../constants/language";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = ({language}) => {
  const [name, setName] = useState("");
  const [isKid, setIsKid] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()

  const id = location.state?.user_id

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(file);
  };

  const handleSaveProfile = async (e) => {
    if (!name || !avatar) {
      return alert("Name and Avatar are required!");
    }
    e.preventDefault(e);

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", avatar);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const cloudRes = await axios.post(CLOUDINARY_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const avatarUrl = cloudRes.data.secure_url;

      Create_Profile(e, name, isKid, avatarUrl, id, setLoading, navigate);
    } catch (err) {
      console.error("Error uploading profile:", err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen flex flex-col items-center justify-center text-white"
    >
        <Header language={language} />
      <div className="min-h-screen bg-black/60 flex items-center justify-center p-6 relative overflow-hidden w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96  rounded-full blur-3xl animate-pulse" ></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Card Container */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 shadow-2xl border border-neutral-700">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/50">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Create Profile</h1>
            <p className="text-gray-400 text-sm">Set up your personalized experience</p>
          </div>

          {/* Avatar Upload */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-3">Profile Picture</label>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center border-2 border-neutral-600 shadow-lg">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  )}
                </div>
                {avatar && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-neutral-900 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                )}
              </div>
              
              <label className="flex-1 cursor-pointer">
                <div className="bg-neutral-700/50 hover:bg-neutral-700 border-2 border-dashed border-neutral-600 hover:border-red-600 rounded-xl p-4 transition-all text-center">
                  <svg className="w-6 h-6 text-gray-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-xs text-gray-400">Upload</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-3">Profile Name</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-700/50 border-2 border-neutral-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-neutral-700 transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Kids Mode */}
          <div className="mb-8">
            <label className="flex items-center justify-between p-4 bg-neutral-700/30 hover:bg-neutral-700/50 rounded-xl border border-neutral-600 cursor-pointer transition-all group">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isKid ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-neutral-600'}`}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium">Kids Mode</div>
                  <div className="text-gray-400 text-xs">Family-friendly content</div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isKid}
                  onChange={() => setIsKid(!isKid)}
                  className="sr-only"
                />
                <div className={`w-12 h-7 rounded-full transition-all ${isKid ? 'bg-gradient-to-r from-red-600 to-red-700' : 'bg-neutral-600'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform mt-1 ${isKid ? 'translate-x-6' : 'translate-x-1'}`}></div>
                </div>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSaveProfile}
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Profile...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Save & Continue
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            )}
          </button>

          {/* Footer Link */}
          <div className="text-center mt-6">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;

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

const Profile = ({ language }) => {
  const [name, setName] = useState("");
  const [isKid, setIsKid] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state?.user_id;

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
      <div className="p-6 flex flex-col items-center gap-4 bg-black/70 w-full max-w-md rounded">
        <h1 className="text-2xl font-bold">Create Your Profile</h1>

        <input
          type="text"
          placeholder="Profile Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded text-white"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-white"
        />

        {avatar && (
          <img
            src={URL.createObjectURL(avatar)}
            alt="Preview"
            className="w-24 h-24 rounded-full border-2 border-red-600 object-cover"
          />
        )}

        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={isKid}
            onChange={() => setIsKid(!isKid)}
            className="accent-red-600 w-5 h-5"
          />
          <span>Kid?</span>
        </label>

        <button
          onClick={handleSaveProfile}
          disabled={loading}
          className="bg-red-600 px-6 py-2 rounded mt-4 hover:bg-red-700 transition w-full"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;

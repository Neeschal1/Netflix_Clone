import React from "react";
// import languages from "../constants/language";
import Header from "../../constants/header";

const Profilecomponents = ({ language }) => {
  return (
    <div className="p-6 flex flex-col items-center gap-4 bg-black/70 w-full max-w-md rounded">
        <h1 className="text-2xl font-bold">Create Your Profile</h1>

        <input
          type="text"
          placeholder="Profile Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded text-black"
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
  );
};

export default Profilecomponents;

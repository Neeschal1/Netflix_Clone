import banner from "../assets/banner.png";
import languages from "../constants/language";
import Header from "../constants/header";
import Contents from "../components/contents/contents";
import { useLocation, useNavigate } from "react-router-dom";
import Choices from "../api/contents/choices";
import { useState } from "react";

const Contentchoices = ({ language }) => {
  const navigate = useNavigate();
  const [val, setVal] = useState("mov");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const userid = location.state?.id;

  const on_clicked = (e) => {
    // console.log(`Selected Id: ${userid},\nSelected Value: ${val}`)
    e.preventDefault()
    Choices(e, userid, val, setLoading, navigate);
  }

  const savedetails = (e) => {
    e.preventDefault();
    Choices(e, userid, val, setLoading, navigate);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen relative flex flex-col items-center justify-center text-white"
    >
      <Header language={language} />

      <form
        // onSubmit={savedetails}
        className="p-5 flex w-4/12 items-center justify-center bg-black/50 flex-col gap-5 rounded"
      >
        <div className="flex w-full flex-col items-start ">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Content Choices
          </h1>
          <p className="mt-[-8px]">
            Choose your loved and desired content that you want to see mostly
          </p>
        </div>

        {/* Contents */}
        <div className="relative inline-block w-full">
          <select
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="px-2 py-2 rounded border border-white bg-black bg-opacity-50 text-white w-full "
          >
            <option value="MOVIES">Movies</option>
            <option value="SERIES">Series</option>
            <option value="DOCUMENTARY">Documentary</option>
            <option value="ANIMATIONS">Animations</option>
            <option value="KIDS">Kids</option>
            <option value="SPORTS">Sports</option>
          </select>

          {/* Custom arrow */}
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div> */}
        </div>

        <button
          type="button"
        onClick={on_clicked}
          disabled={loading}
          className={`w-full py-3 rounded text-white font-semibold mt-4 transition 
    ${
      loading
        ? "hover:bg-red-800 cursor-not-allowed"
        : "bg-red-600 hover:bg-red-700"
    }`}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default Contentchoices;

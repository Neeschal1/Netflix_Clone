// Intro.jsx
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import intrologo from "../assets/Netflix New Logo Animation 2019.mp4";

const Intro = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // unmute
      videoRef.current.play(); // play on first click if needed
    }
  };

  const handleEnded = () => {
    // Video finished, navigate to login
    navigate("/welcome");
  };

  return (
    <div className="w-full h-screen">
      <video
        ref={videoRef}
        className="w-full h-screen object-cover"
        playsInline
        autoPlay
        muted={false} // try to autoplay unmuted
        onEnded={handleEnded}
        onClick={handlePlay} // in case autoplay with sound is blocked
      >
        <source src={intrologo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay text */}
      {/* <p className="absolute top-10 left-10 text-white">
        Click anywhere if you can't hear sound
      </p> */}
    </div>
  );
};

export default Intro;

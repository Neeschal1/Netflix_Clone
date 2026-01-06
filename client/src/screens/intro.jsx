import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import intrologo from "../assets/Netflix New Logo Animation 2019.mp4";

const Intro = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; 
      videoRef.current.play();
    }
  };

  const handleEnded = () => {
    navigate("/welcome");
  };

  return (
    <div className="w-full h-screen">
      <video
        ref={videoRef}
        className="w-full h-screen object-cover"
        playsInline
        autoPlay
        muted={false}
        onEnded={handleEnded}
        onClick={handlePlay}
      >
        <source src={intrologo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Intro;

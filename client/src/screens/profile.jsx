import banner from "../assets/banner.png";
import Profilecomponents from "../components/profile/profilecomponents";

const Profile = ({ language }) => {
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
      <Profilecomponents />
    </div>
  );
};

export default Profile;

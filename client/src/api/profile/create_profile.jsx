import axios from "axios";
import url from "../../constants/url";

const Create_Profile = async (
  e,
  name,
  isKid,
  avatarUrl,
  id,
  setLoading,
  navigate
) => {
  e.preventDefault();
  const user_profile = {
    Name: name,
    Avatar: avatarUrl,
    Is_kid: isKid,
    User: id,
  };
  setLoading(true)
  try {
    const res = await axios.post(
      `${url}/accounts/signup/choices/profile/`,
      user_profile,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data.data)
    navigate('/login/')
  } catch (err) {
    console.log(err)
  } finally {
    setLoading(false)
  }
};

export default Create_Profile;

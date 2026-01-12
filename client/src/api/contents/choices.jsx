import axios from "axios";
import api from "../baseapi";
import url from "../../constants/url";

const Choices = async (e, userid, val, setLoading, navigate) => {
  e.preventDefault();
  const user_choice = {
    Users_choice: val,
    User: userid,
  };
  setLoading(true)
  try {
    const response = await axios.post(`${url}accounts/signup/otp/plan/choices`, user_choice, {
      headers: {
        "Content-Type" : "application/json"
      },
    });
    console.log(response)
    navigate('/signup/otp/plans/subscription/choices/', {
        state: {
            user_id: userid
        }
    })
  } catch (err) {
    console.error("Error fetching home contents:", err);
    return null;
  } finally {
    setLoading(false)
  }
};

export default Choices;

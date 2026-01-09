import { useNavigate } from "react-router-dom";
import response from "../../constants/url";
import axios from "axios";

const handlesignup = async (e,
  Firstname,
  Lastname,
  Username,
  Email,
  Password,
  navigate,
  setLoading
) => {
  e.preventDefault();
  setLoading(true)
  const userdata = {
    first_name: Firstname,
    last_name: Lastname,
    username: Username,
    email: Email,
    password: Password,
  };

  try {
    const url = await axios.post(`${response}/accounts/signup/`, userdata, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Signup Success: ", url.data);
    navigate("/signup/otp", {
      state : {
        email : Email
      }
    });
    
  } catch (err) {
    console.log("Django Error: ", err);
  } finally {
    setLoading(false)
  }
};

export default handlesignup;

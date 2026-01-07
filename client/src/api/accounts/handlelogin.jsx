import axios from "axios";
import url from "../../constants/url";
import homecontents from "../contents/homecontents";

const handlelogin = async (e, Email, Password, navigate, setLoading, setError) => {
  e.preventDefault();
  setLoading(true);
  const userlogindata = {
    email: Email,
    password: Password,
  };
  try {
    const response = await axios.post(`${url}/accounts/login/`, userlogindata, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, 
    });
    const accessToken = response.data.Tokens.access_token

    localStorage.setItem("accessToken", accessToken);

    const contentsdata = await homecontents(accessToken)
    
    console.log("Homecontents: ", contentsdata)
    navigate('/login/home')
  } catch (err) {
    let errorMessage = "Something went wrong!";
    if (err.response) {
      errorMessage = err.response.data.error || err.response.data.message || JSON.stringify(err.response.data);
    } else if (err.request) {
      errorMessage = "No response from server. Please try again.";
    } else {
      errorMessage = err.message;
    }
    setError(errorMessage);
  } finally {
    setLoading(false)
  }
};

export default handlelogin;

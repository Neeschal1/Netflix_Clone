import axios from "axios";
import urls from "../../constants/url";

const Handlesubscription = async (choosedPlan, describe, cost) => {
  const user_name = localStorage.getItem("username");
  
  if (!user_name) {
    console.error("No username found in localStorage");
    alert("Please log in first");
    return;
  }
  
  const plan = {
    item: {
      Users_name: user_name,
      type: choosedPlan,
      description: describe,
      price: cost,
    },
  };

  console.log("Sending plan data:", plan);  // Debug

  try {
    const response = await axios.post(
      `${urls}accounts/signup/otp/plan/`,
      plan,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response:", response.data);  // Debug
    window.location.href = response.data.url;
  } catch (err) {
    console.error("Subscription error:", err);
    if (err.response) {
      // Server responded with error
      console.error("Error data:", err.response.data);
      console.error("Error status:", err.response.status);
    } else if (err.request) {
      // Request made but no response (server down)
      console.error("Server not responding - is Django running?");
      alert("Cannot connect to server. Please make sure the server is running.");
    }
  }
};

export default Handlesubscription;
import axios from "axios";
import api from "../baseapi";

const Choices = async (accessToken) => {
  try {
    const response = await api.get("/contents/homecontents/", {
        headers : {
            Authorization: `Bearer ${accessToken}`
        },
        withCredentials: true
    })
    return response.data
  } catch (err) {
    console.error("Error fetching home contents:", err);
    return null;
  }
};

export default Choices;

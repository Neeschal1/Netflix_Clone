import React from "react";
import url from "../../constants/url";
import axios from "axios";

const otpverification = async (e, users_email, otp, navigate, setLoading) => {
  e.preventDefault();
  const verify_otp = {
    email: users_email,
    otp: otp
  }
  setLoading(true)
  try {
    const response = await axios.post(`${url}/accounts/signup/otp/`, verify_otp, {
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    console.log("User's data: ", response) 
    navigate('/signup/otp/choices/')
  } catch (err) {
    console.log("OTP error:", err.response?.data || err);
  } finally {
    setLoading(false)
  }
};

export default otpverification;

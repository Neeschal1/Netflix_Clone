import React from "react";
import url from "../../constants/url";
import axios from "axios";

const otpverification = async (e, otp) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${url}`);
  } catch (err) {
  } finally {
  }
};

export default otpverification;

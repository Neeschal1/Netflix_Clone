import axios from "axios";
import urls from "../constants/url";

const api = axios.create({
  baseURL: urls,
  withCredentials: true,
});

export default api
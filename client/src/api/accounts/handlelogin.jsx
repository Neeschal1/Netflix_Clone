import axios from 'axios';
import url from '../../constants/url'

const handlelogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${url}`)
  } catch (err) {}
};

export default handlelogin;

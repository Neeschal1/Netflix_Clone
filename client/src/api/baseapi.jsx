const api = axios.create({
  baseURL: `${url}`,
  withCredentials: true,
});

export default api
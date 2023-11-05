import axios from "axios";

const username = "test_sid";
const password = "t3st_s1d.!";

const authCredentials = btoa(`${username}:${password}`);

const fetcher = axios.create({
  baseURL: process.env.api_v1,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${authCredentials}`,
  },
});

fetcher.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

export default fetcher;

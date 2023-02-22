import axios from "axios";

let service = axios.create({
  baseURL: "http://127.0.0.1:3007",
});

service.interceptors.request.use((config) => {
  config.headers.token = sessionStorage.getItem("token");
  return config;
});

export default service;

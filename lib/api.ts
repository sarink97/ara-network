import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://3.29.131.14:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

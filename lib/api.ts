import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://162.244.30.39:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

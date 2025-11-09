import axios from "axios";

export const api=axios.create({
    baseURL:"https://blogs-oh16.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
})
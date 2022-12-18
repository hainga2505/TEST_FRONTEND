import axios from "axios";

export default axios.create({
  baseURL: "https://backend1812.vercel.app/api",
  headers: {
    "Content-type": "application/json",
  },
});

import axios from "axios";

export const BASE_URL = "https://exam-second-months-backend.onrender.com";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;

import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5000",
});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem("token_key") || "";
	if (token) config.headers.Authorization = localStorage.getItem("token_key");

	return config;
});

export default instance;

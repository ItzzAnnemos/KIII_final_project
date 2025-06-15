import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "http://localhost:9090/api",
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;

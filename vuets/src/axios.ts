import axios from "axios";
import { useUserStore } from "./stores/user";

const axiosClient = axios.create({
    baseURL: `${"http://localhost:8000/api"}`
});

axiosClient.interceptors.request.use(config => {
    const userStore = useUserStore();
    if (config.headers === undefined) {
        config.headers = {};
    }
    config.headers!.Authorization = `Bearer ${userStore.user.token}`;

    // config.headers.put["Content-Type"] = "multipart/form-data";
    return config;
});

export default axiosClient;

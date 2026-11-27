import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* eslint-disable no-undef */

let headers = { "Content-Type": "application/json" };

const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_DEPLOYED_URL,
    headers,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.headers.token = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
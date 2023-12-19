import axios from "axios";
import myAxios from "./myAxios";

const privateAxios = axios.create({ baseURL: "http://localhost:8000", withCredentials: true });

privateAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalReq = error.config;
        originalReq.isRetry = true;

        if (error.response.status === 401 && !originalReq.isRetry) {
            // if access token expired try to get another one using refresh token
            // if refresh token expired too just redirect user to login page
            try {
                const res = await myAxios.post("/refresh");

                return privateAxios(originalReq);
            } catch (err) {
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default privateAxios;

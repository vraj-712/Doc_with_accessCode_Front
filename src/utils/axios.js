import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});

axiosInstance.interceptors.response.use(
    (response) => {
        let res = {};
        res = {...res, ...response.data, status: response.status, serverDefaultText: response.statusText}
        return res;
    },
    (error) => {
        let res = {}
        res = {...res, ...error.response.data, status: error.response.status, serverDefaultText: error.response.statusText}
        return Promise.reject(res);
    }
);
export { axiosInstance }
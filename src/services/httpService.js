import axios from "axios"

axios.interceptors.request.use(
    function (config) {

        config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
        config.baseURL = `https://ong-api.zaniuk.tech`
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
)

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
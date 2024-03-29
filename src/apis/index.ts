import axios, {AxiosInstance, AxiosRequestConfig} from "axios"


export const baseURL = "https://servermessenger.vmorshch8.repl.co/"
export const $host: AxiosInstance = axios.create({
    baseURL: baseURL
})
export const $authHost: AxiosInstance = axios.create({
    baseURL: baseURL
})

$authHost.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers) config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    return config;
})
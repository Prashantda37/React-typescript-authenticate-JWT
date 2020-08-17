import Axios from "axios-observable";
import { API_BASE_URL } from "../constant/constants";

//import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const http = Axios.create({
	baseURL: `${API_BASE_URL}/v1`,
	responseType: "json"
});
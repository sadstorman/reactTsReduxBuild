import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const instancesData = {
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
};

export const privateAxiosInstance = axios.create(instancesData);
export const publicAxiosInstance = axios.create(instancesData);

privateAxiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
	const token = localStorage.getItem('token')
	if (token && config.headers) {
		config.headers.Authorization = `${token}`;
	}

	return config;
});

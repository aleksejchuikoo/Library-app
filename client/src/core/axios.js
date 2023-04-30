import axios from 'axios'

import {BASE_BACKEND_URL} from "./constants";

const instance = axios.create({
	baseURL: BASE_BACKEND_URL
});

instance.interceptors.request.use((config) => {
	config.headers['token'] = window.localStorage.getItem('token')
	return config
})

export default instance
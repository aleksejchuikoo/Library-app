import axios from "../core/axios";

export const authApi = {
	login(data) {
		return axios.post('/auth/login', data)
	},

	register(data) {
		return axios.post('/auth/register', data)
	},

	getMe() {
		return axios.get('/auth/me')
	}
}